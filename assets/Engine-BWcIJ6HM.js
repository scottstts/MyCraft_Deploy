import{C as me,P as ct,I as Vl,S as $s,a as Ic,g as Nc,c as Fc,u as vn,b as Oc,d as Bc,s as zc,e as kc,f as Vc,h as Hc,i as Gc}from"./index-CaMYIvMK.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="179",Wc=0,_o=1,Xc=2,Hl=1,qa=2,bn=3,Pn=0,zt=1,un=2,Cn=0,Ri=1,er=2,xo=3,Mo=4,Yc=5,ti=100,qc=101,Kc=102,Zc=103,jc=104,Qc=200,Jc=201,$c=202,eh=203,sa=204,ra=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,aa=0,oa=1,la=2,Ni=3,ca=4,ha=5,ua=6,da=7,Gl=0,hh=1,uh=2,Hn=0,dh=1,fh=2,ph=3,Wl=4,mh=5,gh=6,vh=7,Xl=300,Fi=301,Oi=302,fa=303,pa=304,cr=306,oi=1e3,Nt=1001,ma=1002,nt=1003,_h=1004,vs=1005,an=1006,_r=1007,si=1008,Yl=1008,pn=1009,ql=1010,Kl=1011,li=1012,Ka=1013,ci=1014,An=1015,Rn=1016,Za=1017,ja=1018,rs=1020,Zl=35902,jl=1021,Ql=1022,Gt=1023,hi=1026,as=1027,Jl=1028,Qa=1029,$l=1030,Ja=1031,$a=1033,Ws=33776,Xs=33777,Ys=33778,qs=33779,ga=35840,va=35841,_a=35842,xa=35843,Ma=36196,Sa=37492,ya=37496,wa=37808,Ea=37809,Ta=37810,ba=37811,Aa=37812,Ca=37813,Ra=37814,Da=37815,Pa=37816,La=37817,Ua=37818,Ia=37819,Na=37820,Fa=37821,Ks=36492,Oa=36494,Ba=36495,ec=36283,za=36284,ka=36285,Va=36286,xh=3200,Mh=3201,tc=0,Sh=1,kn="",Et="srgb",Bi="srgb-linear",tr="linear",et="srgb",di=7680,So=519,yh=512,wh=513,Eh=514,nc=515,Th=516,bh=517,Ah=518,Ch=519,yo=35044,wo="300 es",_n=2e3,nr=2001;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Eo=1234567;const Di=Math.PI/180,os=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function eo(i,e){return(i%e+e)%e}function Rh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Dh(i,e,t){return i!==e?(t-i)/(e-i):0}function ts(i,e,t){return(1-t)*i+t*e}function Ph(i,e,t,n){return ts(i,e,1-Math.exp(-t*n))}function Lh(i,e=1){return e-Math.abs(eo(i,e*2)-e)}function Uh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ih(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fh(i,e){return i+Math.random()*(e-i)}function Oh(i){return i*(.5-Math.random())}function Bh(i){i!==void 0&&(Eo=i);let e=Eo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zh(i){return i*Di}function kh(i){return i*os}function Vh(i){return(i&i-1)===0&&i!==0}function Hh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wh(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),m=r((n-e)/2),v=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*v,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*v,o*c);break;case"ZYZ":i.set(l*v,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Vt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ke={DEG2RAD:Di,RAD2DEG:os,generateUUID:Hi,clamp:Xe,euclideanModulo:eo,mapLinear:Rh,inverseLerp:Dh,lerp:ts,damp:Ph,pingpong:Lh,smoothstep:Uh,smootherstep:Ih,randInt:Nh,randFloat:Fh,randFloatSpread:Oh,seededRandom:Bh,degToRad:zh,radToDeg:kh,isPowerOfTwo:Vh,ceilPowerOfTwo:Hh,floorPowerOfTwo:Gh,setQuaternionFromProperEuler:Wh,normalize:Vt,denormalize:Ai};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[a+0],m=r[a+1],v=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==d||c!==m||h!==v){let p=1-o;const f=l*d+c*m+h*v+u*g,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const R=Math.sqrt(w),A=Math.atan2(R,f*E);p=Math.sin(p*A)/R,o=Math.sin(o*A)/R}const S=o*E;if(l=l*p+d*S,c=c*p+m*S,h=h*p+v*S,u=u*p+g*S,p===1-o){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],m=r[a+2],v=r[a+3];return e[t]=o*v+h*u+l*m-c*d,e[t+1]=l*v+h*d+c*u-o*m,e[t+2]=c*v+h*m+o*d-l*u,e[t+3]=h*v-o*u-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),m=l(s/2),v=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"YXZ":this._x=d*h*u+c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"ZXY":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u-d*m*v;break;case"ZYX":this._x=d*h*u-c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u+d*m*v;break;case"YZX":this._x=d*h*u+c*m*v,this._y=c*m*u+d*h*v,this._z=c*h*v-d*m*u,this._w=c*h*u-d*m*v;break;case"XZY":this._x=d*h*u-c*m*v,this._y=c*m*u-d*h*v,this._z=c*h*v+d*m*u,this._w=c*h*u+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(To.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(To.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xr.copy(this).projectOnVector(e),this.sub(xr)}reflect(e){return this.sub(xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new U,To=new hs;class Oe{constructor(e,t,n,s,r,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],m=n[5],v=n[8],g=s[0],p=s[3],f=s[6],E=s[1],w=s[4],S=s[7],R=s[2],A=s[5],b=s[8];return r[0]=a*g+o*E+l*R,r[3]=a*p+o*w+l*A,r[6]=a*f+o*S+l*b,r[1]=c*g+h*E+u*R,r[4]=c*p+h*w+u*A,r[7]=c*f+h*S+u*b,r[2]=d*g+m*E+v*R,r[5]=d*p+m*w+v*A,r[8]=d*f+m*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,m=c*r-a*l,v=t*u+n*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=m*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mr.makeScale(e,t)),this}rotate(e){return this.premultiply(Mr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mr=new Oe;function ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xh(){const i=ls("canvas");return i.style.display="block",i}const bo={};function Pi(i){i in bo||(bo[i]=!0,console.warn(i))}function Yh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ao=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Co=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qh(){const i={enabled:!0,workingColorSpace:Bi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Dn(s.r),s.g=Dn(s.g),s.b=Dn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?tr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Pi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Pi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bi]:{primaries:e,whitePoint:n,transfer:tr,toXYZ:Ao,fromXYZ:Co,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Ao,fromXYZ:Co,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const je=qh();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Li(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class Kh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=ls("canvas")),fi.width=e.width,fi.height=e.height;const s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zh=0;class to{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sr(s[a].image)):r.push(Sr(s[a]))}else r=Sr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Sr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jh=0;const yr=new U;class Ft extends Vi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Nt,s=Nt,r=an,a=si,o=Gt,l=pn,c=Ft.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Hi(),this.name="",this.source=new to(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yr).x}get height(){return this.source.getSize(yr).y}get depth(){return this.source.getSize(yr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case Nt:e.x=e.x<0?0:1;break;case ma:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case Nt:e.y=e.y<0?0:1;break;case ma:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Xl;Ft.DEFAULT_ANISOTROPY=1;class dt{constructor(e=0,t=0,n=0,s=1){dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],m=l[5],v=l[9],g=l[2],p=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(m+1)/2,R=(f+1)/2,A=(h+d)/4,b=(u+g)/4,P=(v+p)/4;return w>S&&w>R?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=b/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=A/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=b/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-v)*(p-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(p-v)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qh extends Vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new to(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends Qh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sc extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nt,this.minFilter=nt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nt,this.minFilter=nt,this.wrapR=Nt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,on):on.fromBufferAttribute(r,a),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_s.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_s.copy(n.boundingBox)),_s.applyMatrix4(e.matrixWorld),this.union(_s)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),xs.subVectors(this.max,Yi),pi.subVectors(e.a,Yi),mi.subVectors(e.b,Yi),gi.subVectors(e.c,Yi),Ln.subVectors(mi,pi),Un.subVectors(gi,mi),Yn.subVectors(pi,gi);let t=[0,-Ln.z,Ln.y,0,-Un.z,Un.y,0,-Yn.z,Yn.y,Ln.z,0,-Ln.x,Un.z,0,-Un.x,Yn.z,0,-Yn.x,-Ln.y,Ln.x,0,-Un.y,Un.x,0,-Yn.y,Yn.x,0];return!wr(t,pi,mi,gi,xs)||(t=[1,0,0,0,1,0,0,0,1],!wr(t,pi,mi,gi,xs))?!1:(Ms.crossVectors(Ln,Un),t=[Ms.x,Ms.y,Ms.z],wr(t,pi,mi,gi,xs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sn=[new U,new U,new U,new U,new U,new U,new U,new U],on=new U,_s=new us,pi=new U,mi=new U,gi=new U,Ln=new U,Un=new U,Yn=new U,Yi=new U,xs=new U,Ms=new U,qn=new U;function wr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){qn.fromArray(i,r);const o=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const $h=new us,qi=new U,Er=new U;class hr{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$h.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qi.subVectors(e,this.center);const t=qi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qi.copy(e.center).add(Er)),this.expandByPoint(qi.copy(e.center).sub(Er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const yn=new U,Tr=new U,Ss=new U,In=new U,br=new U,ys=new U,Ar=new U;class rc{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Tr.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),In.copy(this.origin).sub(Tr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=In.dot(this.direction),l=-In.dot(Ss),c=In.lengthSq(),h=Math.abs(1-a*a);let u,d,m,v;if(h>0)if(u=a*l-o,d=a*o-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,m=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),m=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Tr).addScaledVector(Ss,d),m}intersectSphere(e,t){yn.subVectors(e.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){br.subVectors(t,e),ys.subVectors(n,e),Ar.crossVectors(br,ys);let a=this.direction.dot(Ar),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;In.subVectors(this.origin,e);const l=o*this.direction.dot(ys.crossVectors(In,ys));if(l<0)return null;const c=o*this.direction.dot(br.cross(In));if(c<0||l+c>a)return null;const h=-o*In.dot(Ar);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,n,s,r,a,o,l,c,h,u,d,m,v,g,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,m,v,g,p)}set(e,t,n,s,r,a,o,l,c,h,u,d,m,v,g,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=m,f[7]=v,f[11]=g,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vi.setFromMatrixColumn(e,0).length(),r=1/vi.setFromMatrixColumn(e,1).length(),a=1/vi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,m=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=m+v*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*u,v=c*h,g=c*u;t[0]=d+g*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=m*o-v,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*u,v=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*u,v=o*h,g=o*u;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=v*u+m,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=m*u+v,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=m*u-v,t[2]=v*u-m,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,n){const s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Nn.crossVectors(n,Zt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Nn.crossVectors(n,Zt)),Nn.normalize(),ws.crossVectors(Zt,Nn),s[0]=Nn.x,s[4]=ws.x,s[8]=Zt.x,s[1]=Nn.y,s[5]=ws.y,s[9]=Zt.y,s[2]=Nn.z,s[6]=ws.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],m=n[13],v=n[2],g=n[6],p=n[10],f=n[14],E=n[3],w=n[7],S=n[11],R=n[15],A=s[0],b=s[4],P=s[8],M=s[12],y=s[1],C=s[5],O=s[9],B=s[13],z=s[2],X=s[6],G=s[10],Z=s[14],H=s[3],ie=s[7],oe=s[11],ge=s[15];return r[0]=a*A+o*y+l*z+c*H,r[4]=a*b+o*C+l*X+c*ie,r[8]=a*P+o*O+l*G+c*oe,r[12]=a*M+o*B+l*Z+c*ge,r[1]=h*A+u*y+d*z+m*H,r[5]=h*b+u*C+d*X+m*ie,r[9]=h*P+u*O+d*G+m*oe,r[13]=h*M+u*B+d*Z+m*ge,r[2]=v*A+g*y+p*z+f*H,r[6]=v*b+g*C+p*X+f*ie,r[10]=v*P+g*O+p*G+f*oe,r[14]=v*M+g*B+p*Z+f*ge,r[3]=E*A+w*y+S*z+R*H,r[7]=E*b+w*C+S*X+R*ie,r[11]=E*P+w*O+S*G+R*oe,r[15]=E*M+w*B+S*Z+R*ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],m=e[14],v=e[3],g=e[7],p=e[11],f=e[15];return v*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*m-n*l*m)+g*(+t*l*m-t*c*d+r*a*d-s*a*m+s*c*h-r*l*h)+p*(+t*c*u-t*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+f*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],m=e[11],v=e[12],g=e[13],p=e[14],f=e[15],E=u*p*c-g*d*c+g*l*m-o*p*m-u*l*f+o*d*f,w=v*d*c-h*p*c-v*l*m+a*p*m+h*l*f-a*d*f,S=h*g*c-v*u*c+v*o*m-a*g*m-h*o*f+a*u*f,R=v*u*l-h*g*l-v*o*d+a*g*d+h*o*p-a*u*p,A=t*E+n*w+s*S+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=E*b,e[1]=(g*d*r-u*p*r-g*s*m+n*p*m+u*s*f-n*d*f)*b,e[2]=(o*p*r-g*l*r+g*s*c-n*p*c-o*s*f+n*l*f)*b,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*m-n*l*m)*b,e[4]=w*b,e[5]=(h*p*r-v*d*r+v*s*m-t*p*m-h*s*f+t*d*f)*b,e[6]=(v*l*r-a*p*r-v*s*c+t*p*c+a*s*f-t*l*f)*b,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*m+t*l*m)*b,e[8]=S*b,e[9]=(v*u*r-h*g*r-v*n*m+t*g*m+h*n*f-t*u*f)*b,e[10]=(a*g*r-v*o*r+v*n*c-t*g*c-a*n*f+t*o*f)*b,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*m-t*o*m)*b,e[12]=R*b,e[13]=(h*g*s-v*u*s+v*n*d-t*g*d-h*n*p+t*u*p)*b,e[14]=(v*o*s-a*g*s-v*n*l+t*g*l+a*n*p-t*o*p)*b,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,m=r*h,v=r*u,g=a*h,p=a*u,f=o*u,E=l*c,w=l*h,S=l*u,R=n.x,A=n.y,b=n.z;return s[0]=(1-(g+f))*R,s[1]=(m+S)*R,s[2]=(v-w)*R,s[3]=0,s[4]=(m-S)*A,s[5]=(1-(d+f))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(v+w)*b,s[9]=(p-E)*b,s[10]=(1-(d+g))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vi.set(s[0],s[1],s[2]).length();const a=vi.set(s[4],s[5],s[6]).length(),o=vi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);const c=1/r,h=1/a,u=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=_n,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),m=(n+s)/(n-s);let v,g;if(l)v=r/(a-r),g=a*r/(a-r);else if(o===_n)v=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===nr)v=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),m=-(n+s)/(n-s);let v,g;if(l)v=1/(a-r),g=a/(a-r);else if(o===_n)v=-2/(a-r),g=-(a+r)/(a-r);else if(o===nr)v=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vi=new U,ln=new qe,eu=new U(0,0,0),tu=new U(1,1,1),Nn=new U,ws=new U,Zt=new U,Ro=new qe,Do=new hs;class xn{constructor(e=0,t=0,n=0,s=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ro.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ro,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nu=0;const Po=new U,_i=new hs,wn=new qe,Es=new U,Ki=new U,iu=new U,su=new hs,Lo=new U(1,0,0),Uo=new U(0,1,0),Io=new U(0,0,1),No={type:"added"},ru={type:"removed"},xi={type:"childadded",child:null},Cr={type:"childremoved",child:null};class Lt extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nu++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new U,t=new xn,n=new hs,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Oe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Lo,e)}rotateY(e){return this.rotateOnAxis(Uo,e)}rotateZ(e){return this.rotateOnAxis(Io,e)}translateOnAxis(e,t){return Po.copy(e).applyQuaternion(this.quaternion),this.position.add(Po.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lo,e)}translateY(e){return this.translateOnAxis(Uo,e)}translateZ(e){return this.translateOnAxis(Io,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(Ki,Es,this.up):wn.lookAt(Es,Ki,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(wn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),xi.child=e,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ru),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),xi.child=e,this.dispatchEvent(xi),xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,su,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new U(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new U,En=new U,Rr=new U,Tn=new U,Mi=new U,Si=new U,Fo=new U,Dr=new U,Pr=new U,Lr=new U,Ur=new dt,Ir=new dt,Nr=new dt;class rn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),En.subVectors(n,t),Rr.subVectors(e,t);const a=cn.dot(cn),o=cn.dot(En),l=cn.dot(Rr),c=En.dot(En),h=En.dot(Rr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,m=(c*l-o*h)*d,v=(a*h-o*l)*d;return r.set(1-m-v,v,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ur.setScalar(0),Ir.setScalar(0),Nr.setScalar(0),Ur.fromBufferAttribute(e,t),Ir.fromBufferAttribute(e,n),Nr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ur,r.x),a.addScaledVector(Ir,r.y),a.addScaledVector(Nr,r.z),a}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),En.subVectors(e,t),cn.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Mi.subVectors(s,n),Si.subVectors(r,n),Dr.subVectors(e,n);const l=Mi.dot(Dr),c=Si.dot(Dr);if(l<=0&&c<=0)return t.copy(n);Pr.subVectors(e,s);const h=Mi.dot(Pr),u=Si.dot(Pr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Mi,a);Lr.subVectors(e,r);const m=Mi.dot(Lr),v=Si.dot(Lr);if(v>=0&&m<=v)return t.copy(r);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(n).addScaledVector(Si,o);const p=h*v-m*u;if(p<=0&&u-h>=0&&m-v>=0)return Fo.subVectors(r,s),o=(u-h)/(u-h+(m-v)),t.copy(s).addScaledVector(Fo,o);const f=1/(p+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function Fr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=eo(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fr(a,r,e+1/3),this.g=Fr(a,r,e),this.b=Fr(a,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=oc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return je.workingToColorSpace(Bt.copy(this),e),Math.round(Xe(Bt.r*255,0,255))*65536+Math.round(Xe(Bt.g*255,0,255))*256+Math.round(Xe(Bt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Bt.copy(this),t);const n=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Et){je.workingToColorSpace(Bt.copy(this),e);const t=Bt.r,n=Bt.g,s=Bt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ts);const n=ts(Fn.h,Ts.h,t),s=ts(Fn.s,Ts.s,t),r=ts(Fn.l,Ts.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Ce;Ce.NAMES=oc;let au=0;class Gi extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ri,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sa,this.blendDst=ra,this.blendEquation=ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ni,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sa&&(n.blendSrc=this.blendSrc),this.blendDst!==ra&&(n.blendDst=this.blendDst),this.blendEquation!==ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ni&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class no extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Gl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new U,bs=new Ae;let ou=0;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ou++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bs.fromBufferAttribute(this,t),bs.applyMatrix3(e),this.setXY(t,bs.x,bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Vt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Vt(t,this.array),n=Vt(n,this.array),s=Vt(s,this.array),r=Vt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yo&&(e.usage=this.usage),e}}class lc extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cc extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lu=0;const en=new qe,Or=new Lt,yi=new U,jt=new us,Zi=new us,Rt=new U;class Yt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ic(e)?cc:lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Oe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return en.makeRotationFromQuaternion(e),this.applyMatrix4(en),this}rotateX(e){return en.makeRotationX(e),this.applyMatrix4(en),this}rotateY(e){return en.makeRotationY(e),this.applyMatrix4(en),this}rotateZ(e){return en.makeRotationZ(e),this.applyMatrix4(en),this}translate(e,t,n){return en.makeTranslation(e,t,n),this.applyMatrix4(en),this}scale(e,t,n){return en.makeScale(e,t,n),this.applyMatrix4(en),this}lookAt(e){return Or.lookAt(e),Or.updateMatrix(),this.applyMatrix4(Or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(jt.min,Zi.min),jt.expandByPoint(Rt),Rt.addVectors(jt.max,Zi.max),jt.expandByPoint(Rt)):(jt.expandByPoint(Zi.min),jt.expandByPoint(Zi.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Rt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Rt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Rt.fromBufferAttribute(o,c),l&&(yi.fromBufferAttribute(e,c),Rt.add(yi)),s=Math.max(s,n.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new U,l[P]=new U;const c=new U,h=new U,u=new U,d=new Ae,m=new Ae,v=new Ae,g=new U,p=new U;function f(P,M,y){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),m.fromBufferAttribute(r,M),v.fromBufferAttribute(r,y),h.sub(c),u.sub(c),m.sub(d),v.sub(d);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(C),o[P].add(g),o[M].add(g),o[y].add(g),l[P].add(p),l[M].add(p),l[y].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,M=E.length;P<M;++P){const y=E[P],C=y.start,O=y.count;for(let B=C,z=C+O;B<z;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const w=new U,S=new U,R=new U,A=new U;function b(P){R.fromBufferAttribute(s,P),A.copy(R);const M=o[P];w.copy(M),w.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(A,M);const C=S.dot(l[P])<0?-1:1;a.setXYZW(P,w.x,w.y,w.z,C)}for(let P=0,M=E.length;P<M;++P){const y=E[P],C=y.start,O=y.count;for(let B=C,z=C+O;B<z;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*h;for(let f=0;f<h;f++)d[v++]=c[m++]}return new ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],m=e(d,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const m=c[u];h.push(m.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,m=u.length;d<m;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oo=new qe,Kn=new rc,As=new hr,Bo=new U,Cs=new U,Rs=new U,Ds=new U,Br=new U,Ps=new U,zo=new U,Ls=new U;class Pt extends Lt{constructor(e=new Yt,t=new no){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Br.fromBufferAttribute(u,e),a?Ps.addScaledVector(Br,h):Ps.addScaledVector(Br.sub(t),h))}t.add(Ps)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(As.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(As,Bo)===null||Kn.origin.distanceToSquared(Bo)>(e.far-e.near)**2))&&(Oo.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(Oo),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],f=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,R=w;S<R;S+=3){const A=o.getX(S),b=o.getX(S+1),P=o.getX(S+2);s=Us(this,f,e,n,c,h,u,A,b,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=v,f=g;p<f;p+=3){const E=o.getX(p),w=o.getX(p+1),S=o.getX(p+2);s=Us(this,a,e,n,c,h,u,E,w,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=d.length;v<g;v++){const p=d[v],f=a[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,R=w;S<R;S+=3){const A=S,b=S+1,P=S+2;s=Us(this,f,e,n,c,h,u,A,b,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,f=g;p<f;p+=3){const E=p,w=p+1,S=p+2;s=Us(this,a,e,n,c,h,u,E,w,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function cu(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Pn,o),l===null)return null;Ls.copy(o),Ls.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ls);return c<t.near||c>t.far?null:{distance:c,point:Ls.clone(),object:i}}function Us(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Ds);const h=cu(i,e,t,n,Cs,Rs,Ds,zo);if(h){const u=new U;rn.getBarycoord(zo,Cs,Rs,Ds,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new Ae)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new Ae)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};rn.getNormal(Cs,Rs,Ds,d.normal),h.face=d,h.barycoord=u}return h}class Gn extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,m=0;v("z","y","x",-1,-1,n,t,e,a,r,0),v("z","y","x",1,-1,n,t,-e,a,r,1),v("x","z","y",1,1,e,n,t,s,a,2),v("x","z","y",1,-1,e,n,-t,s,a,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function v(g,p,f,E,w,S,R,A,b,P,M){const y=S/b,C=R/P,O=S/2,B=R/2,z=A/2,X=b+1,G=P+1;let Z=0,H=0;const ie=new U;for(let oe=0;oe<G;oe++){const ge=oe*C-B;for(let Ne=0;Ne<X;Ne++){const Ge=Ne*y-O;ie[g]=Ge*E,ie[p]=ge*w,ie[f]=z,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[p]=0,ie[f]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ne/b),u.push(1-oe/P),Z+=1}}for(let oe=0;oe<P;oe++)for(let ge=0;ge<b;ge++){const Ne=d+ge+X*oe,Ge=d+ge+X*(oe+1),Ve=d+(ge+1)+X*(oe+1),W=d+(ge+1)+X*oe;l.push(Ne,Ge,W),l.push(Ge,Ve,W),H+=6}o.addGroup(m,H,M),m+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ht(i){const e={};for(let t=0;t<i.length;t++){const n=zi(i[t]);for(const s in n)e[s]=n[s]}return e}function hu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const cs={clone:zi,merge:Ht};var uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tt extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=hu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new U,ko=new Ae,Vo=new Ae;class sn extends uc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,ko,Vo),t.subVectors(Vo,ko)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const wi=-90,Ei=1;class fu extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(wi,Ei,e,t);s.layers=this.layers,this.add(s);const r=new sn(wi,Ei,e,t);r.layers=this.layers,this.add(r);const a=new sn(wi,Ei,e,t);a.layers=this.layers,this.add(a);const o=new sn(wi,Ei,e,t);o.layers=this.layers,this.add(o);const l=new sn(wi,Ei,e,t);l.layers=this.layers,this.add(l);const c=new sn(wi,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,m),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class io extends Ft{constructor(e=[],t=Fi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pu extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new io(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Gn(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Cn});r.uniforms.tEquirect.value=t;const a=new Pt(s,r),o=t.minFilter;return t.minFilter===si&&(t.minFilter=an),new fu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class yt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mu={type:"move"};class zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),f=this._getHandJoint(c,g);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class gu extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class vu extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,l,c=nt,h=nt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kr=new U,_u=new U,xu=new Oe;class $n{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=kr.subVectors(n,t).cross(_u.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xu.getNormalMatrix(e),s=this.coplanarPoint(kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new hr,Mu=new Ae(.5,.5),Is=new U;class so{constructor(e=new $n,t=new $n,n=new $n,s=new $n,r=new $n,a=new $n){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],m=r[7],v=r[8],g=r[9],p=r[10],f=r[11],E=r[12],w=r[13],S=r[14],R=r[15];if(s[0].setComponents(c-a,m-h,f-v,R-E).normalize(),s[1].setComponents(c+a,m+h,f+v,R+E).normalize(),s[2].setComponents(c+o,m+u,f+g,R+w).normalize(),s[3].setComponents(c-o,m-u,f-g,R-w).normalize(),n)s[4].setComponents(l,d,p,S).normalize(),s[5].setComponents(c-l,m-d,f-p,R-S).normalize();else if(s[4].setComponents(c-l,m-d,f-p,R-S).normalize(),t===_n)s[5].setComponents(c+l,m+d,f+p,R+S).normalize();else if(t===nr)s[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=Mu.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Is.x=s.normal.x>0?e.max.x:e.min.x,Is.y=s.normal.y>0?e.max.y:e.min.y,Is.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dc extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ir=new U,sr=new U,Ho=new qe,ji=new rc,Ns=new hr,Vr=new U,Go=new U;class Su extends Lt{constructor(e=new Yt,t=new dc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ir.fromBufferAttribute(t,s-1),sr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ir.distanceTo(sr);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(s),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;Ho.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Ho);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const f=h.getX(g),E=h.getX(g+1),w=Fs(this,e,ji,l,f,E,g);w&&t.push(w)}if(this.isLineLoop){const g=h.getX(v-1),p=h.getX(m),f=Fs(this,e,ji,l,g,p,v-1);f&&t.push(f)}}else{const m=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const f=Fs(this,e,ji,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=Fs(this,e,ji,l,v-1,m,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Fs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(ir.fromBufferAttribute(o,s),sr.fromBufferAttribute(o,r),t.distanceSqToSegment(ir,sr,Vr,Go)>n)return;Vr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Vr);if(!(c<e.near||c>e.far))return{distance:c,point:Go.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Wo=new U,Xo=new U;class yu extends Su{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wo.fromBufferAttribute(t,s),Xo.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wo.distanceTo(Xo);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class fc extends Ft{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ur extends Ft{constructor(e,t,n=ci,s,r,a,o=nt,l=nt,c,h=hi,u=1){if(h!==hi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new to(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Os=new U,Bs=new U,Hr=new U,zs=new rn;class wu extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Di*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},m=[];for(let v=0;v<l;v+=3){a?(c[0]=a.getX(v),c[1]=a.getX(v+1),c[2]=a.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:g,b:p,c:f}=zs;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),zs.getNormal(Hr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const w=(E+1)%3,S=u[E],R=u[w],A=zs[h[E]],b=zs[h[w]],P=`${S}_${R}`,M=`${R}_${S}`;M in d&&d[M]?(Hr.dot(d[M].normal)<=r&&(m.push(A.x,A.y,A.z),m.push(b.x,b.y,b.z)),d[M]=null):P in d||(d[P]={index0:c[E],index1:c[w],normal:Hr.clone()})}}for(const v in d)if(d[v]){const{index0:g,index1:p}=d[v];Os.fromBufferAttribute(o,g),Bs.fromBufferAttribute(o,p),m.push(Os.x,Os.y,Os.z),m.push(Bs.x,Bs.y,Bs.z)}this.setAttribute("position",new Wt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class ds extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,m=[],v=[],g=[],p=[];for(let f=0;f<h;f++){const E=f*d-a;for(let w=0;w<c;w++){const S=w*u-r;v.push(S,-E,0),g.push(0,0,1),p.push(w/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const w=E+c*f,S=E+c*(f+1),R=E+1+c*(f+1),A=E+1+c*f;m.push(w,S,A),m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.widthSegments,e.heightSegments)}}class ro extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new U,d=new U,m=[],v=[],g=[],p=[];for(let f=0;f<=n;f++){const E=[],w=f/n;let S=0;f===0&&a===0?S=.5/t:f===n&&l===Math.PI&&(S=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(s+A*r)*Math.sin(a+w*o),u.y=e*Math.cos(a+w*o),u.z=e*Math.sin(s+A*r)*Math.sin(a+w*o),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(A+S,1-w),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const w=h[f][E+1],S=h[f][E],R=h[f+1][E],A=h[f+1][E+1];(f!==0||a>0)&&m.push(w,S,A),(f!==n-1||l<Math.PI)&&m.push(S,R,A)}this.setIndex(m),this.setAttribute("position",new Wt(v,3)),this.setAttribute("normal",new Wt(g,3)),this.setAttribute("uv",new Wt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eu extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tc,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tu extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bu extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Gr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Au{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const m=c[u],v=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Cu=new Au;class ao{constructor(e){this.manager=e!==void 0?e:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ti=new WeakMap;class Ru extends ao{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Gr.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Ti.get(a);u===void 0&&(u=[],Ti.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=ls("img");function l(){h(),t&&t(this);const u=Ti.get(this)||[];for(let d=0;d<u.length;d++){const m=u[d];m.onLoad&&m.onLoad(this)}Ti.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Gr.remove(`image:${e}`);const d=Ti.get(this)||[];for(let m=0;m<d.length;m++){const v=d[m];v.onError&&v.onError(u)}Ti.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gr.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class dr extends ao{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,a=new Ru(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class oo extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Du extends oo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Wr=new qe,Yo=new U,qo=new U;class Pu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new so,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),Wr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class fr extends uc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Lu extends Pu{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pc extends oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Lu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Uu extends oo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Iu extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ko(i,e,t,n){const s=Fu(n);switch(t){case jl:return i*e;case Jl:return i*e/s.components*s.byteLength;case Qa:return i*e/s.components*s.byteLength;case $l:return i*e*2/s.components*s.byteLength;case Ja:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case Gt:return i*e*4/s.components*s.byteLength;case $a:return i*e*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:case xa:return Math.max(i,16)*Math.max(e,8)/4;case ga:case _a:return Math.max(i,8)*Math.max(e,8)/2;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ca:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ks:case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ec:case za:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ka:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fu(i){switch(i){case pn:case ql:return{byteLength:1,components:1};case li:case Kl:case Rn:return{byteLength:2,components:1};case Za:case ja:return{byteLength:2,components:4};case ci:case Ka:case An:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function mc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ou(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<u.length;m++){const v=u[d],g=u[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let m=0,v=u.length;m<v;m++){const g=u[m];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Bu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wu=`#ifdef USE_AOMAP
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
#endif`,Xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,qu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ju=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Ju=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cd=`vec3 transformedNormal = objectNormal;
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
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pd="gl_FragColor = linearToOutputTexel( gl_FragColor );",md=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ad=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rd=`uniform bool receiveShadow;
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
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ld=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
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
#endif`,Fd=`struct PhysicalMaterial {
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
}`,Od=`
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$d=`#ifdef USE_MORPHTARGETS
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
#endif`,ef=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,nf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
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
#endif`,lf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,uf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ff=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,Sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,wf=`float getShadowMask() {
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
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Af=`#ifdef USE_SKINNING
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
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Df=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zf=`uniform sampler2D t2D;
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`#include <common>
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
}`,Xf=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,Yf=`#define DISTANCE
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
}`,qf=`#define DISTANCE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`uniform float scale;
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
}`,Qf=`uniform vec3 diffuse;
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
}`,Jf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,ep=`#define LAMBERT
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
}`,tp=`#define LAMBERT
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
}`,np=`#define MATCAP
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
}`,ip=`#define MATCAP
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
}`,sp=`#define NORMAL
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
}`,rp=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,op=`#define PHONG
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
}`,lp=`#define STANDARD
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
}`,cp=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,up=`#define TOON
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
}`,dp=`uniform float size;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 color;
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
}`,gp=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Bu,alphahash_pars_fragment:zu,alphamap_fragment:ku,alphamap_pars_fragment:Vu,alphatest_fragment:Hu,alphatest_pars_fragment:Gu,aomap_fragment:Wu,aomap_pars_fragment:Xu,batching_pars_vertex:Yu,batching_vertex:qu,begin_vertex:Ku,beginnormal_vertex:Zu,bsdfs:ju,iridescence_fragment:Qu,bumpmap_pars_fragment:Ju,clipping_planes_fragment:$u,clipping_planes_pars_fragment:ed,clipping_planes_pars_vertex:td,clipping_planes_vertex:nd,color_fragment:id,color_pars_fragment:sd,color_pars_vertex:rd,color_vertex:ad,common:od,cube_uv_reflection_fragment:ld,defaultnormal_vertex:cd,displacementmap_pars_vertex:hd,displacementmap_vertex:ud,emissivemap_fragment:dd,emissivemap_pars_fragment:fd,colorspace_fragment:pd,colorspace_pars_fragment:md,envmap_fragment:gd,envmap_common_pars_fragment:vd,envmap_pars_fragment:_d,envmap_pars_vertex:xd,envmap_physical_pars_fragment:Dd,envmap_vertex:Md,fog_vertex:Sd,fog_pars_vertex:yd,fog_fragment:wd,fog_pars_fragment:Ed,gradientmap_pars_fragment:Td,lightmap_pars_fragment:bd,lights_lambert_fragment:Ad,lights_lambert_pars_fragment:Cd,lights_pars_begin:Rd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Ld,lights_phong_fragment:Ud,lights_phong_pars_fragment:Id,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:Bd,lights_fragment_end:zd,logdepthbuf_fragment:kd,logdepthbuf_pars_fragment:Vd,logdepthbuf_pars_vertex:Hd,logdepthbuf_vertex:Gd,map_fragment:Wd,map_pars_fragment:Xd,map_particle_fragment:Yd,map_particle_pars_fragment:qd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:Zd,morphinstance_vertex:jd,morphcolor_vertex:Qd,morphnormal_vertex:Jd,morphtarget_pars_vertex:$d,morphtarget_vertex:ef,normal_fragment_begin:tf,normal_fragment_maps:nf,normal_pars_fragment:sf,normal_pars_vertex:rf,normal_vertex:af,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:lf,clearcoat_normal_fragment_maps:cf,clearcoat_pars_fragment:hf,iridescence_pars_fragment:uf,opaque_fragment:df,packing:ff,premultiplied_alpha_fragment:pf,project_vertex:mf,dithering_fragment:gf,dithering_pars_fragment:vf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:xf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Sf,shadowmap_vertex:yf,shadowmask_pars_fragment:wf,skinbase_vertex:Ef,skinning_pars_vertex:Tf,skinning_vertex:bf,skinnormal_vertex:Af,specularmap_fragment:Cf,specularmap_pars_fragment:Rf,tonemapping_fragment:Df,tonemapping_pars_fragment:Pf,transmission_fragment:Lf,transmission_pars_fragment:Uf,uv_pars_fragment:If,uv_pars_vertex:Nf,uv_vertex:Ff,worldpos_vertex:Of,background_vert:Bf,background_frag:zf,backgroundCube_vert:kf,backgroundCube_frag:Vf,cube_vert:Hf,cube_frag:Gf,depth_vert:Wf,depth_frag:Xf,distanceRGBA_vert:Yf,distanceRGBA_frag:qf,equirect_vert:Kf,equirect_frag:Zf,linedashed_vert:jf,linedashed_frag:Qf,meshbasic_vert:Jf,meshbasic_frag:$f,meshlambert_vert:ep,meshlambert_frag:tp,meshmatcap_vert:np,meshmatcap_frag:ip,meshnormal_vert:sp,meshnormal_frag:rp,meshphong_vert:ap,meshphong_frag:op,meshphysical_vert:lp,meshphysical_frag:cp,meshtoon_vert:hp,meshtoon_frag:up,points_vert:dp,points_frag:fp,shadow_vert:pp,shadow_frag:mp,sprite_vert:gp,sprite_frag:vp},ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},gn={basic:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ht([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ht([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ht([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ht([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ht([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ht([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ht([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ht([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ht([ae.common,ae.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ht([ae.lights,ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Ht([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const ks={r:0,b:0,g:0},jn=new xn,_p=new qe;function xp(i,e,t,n,s,r,a){const o=new Ce(0);let l=r===!0?0:1,c,h,u=null,d=0,m=null;function v(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function g(w){let S=!1;const R=v(w);R===null?f(o,l):R&&R.isColor&&(f(R,1),S=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(w,S){const R=v(S);R&&(R.isCubeTexture||R.mapping===cr)?(h===void 0&&(h=new Pt(new Gn(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:zi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),jn.copy(S.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_p.makeRotationFromEuler(jn)),h.material.toneMapped=je.getTransfer(R.colorSpace)!==et,(u!==R||d!==R.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=R,d=R.version,m=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Pt(new ds(2,2),new Tt({name:"BackgroundMaterial",uniforms:zi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=je.getTransfer(R.colorSpace)!==et,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,m=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,S){w.getRGB(ks,hc(i)),n.buffers.color.setClear(ks.r,ks.g,ks.b,S,a)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(o,l)},render:g,addToRenderList:p,dispose:E}}function Mp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,C,O,B,z){let X=!1;const G=u(B,O,C);r!==G&&(r=G,c(r.object)),X=m(y,B,O,z),X&&v(y,B,O,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(y,C,O,B),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,C,O){const B=O.wireframe===!0;let z=n[y.id];z===void 0&&(z={},n[y.id]=z);let X=z[C.id];X===void 0&&(X={},z[C.id]=X);let G=X[B];return G===void 0&&(G=d(l()),X[B]=G),G}function d(y){const C=[],O=[],B=[];for(let z=0;z<t;z++)C[z]=0,O[z]=0,B[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,C,O,B){const z=r.attributes,X=C.attributes;let G=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){const oe=z[H];let ge=X[H];if(ge===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),oe===void 0||oe.attribute!==ge||ge&&oe.data!==ge.data)return!0;G++}return r.attributesNum!==G||r.index!==B}function v(y,C,O,B){const z={},X=C.attributes;let G=0;const Z=O.getAttributes();for(const H in Z)if(Z[H].location>=0){let oe=X[H];oe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const ge={};ge.attribute=oe,oe&&oe.data&&(ge.data=oe.data),z[H]=ge,G++}r.attributes=z,r.attributesNum=G,r.index=B}function g(){const y=r.newAttributes;for(let C=0,O=y.length;C<O;C++)y[C]=0}function p(y){f(y,0)}function f(y,C){const O=r.newAttributes,B=r.enabledAttributes,z=r.attributeDivisors;O[y]=1,B[y]===0&&(i.enableVertexAttribArray(y),B[y]=1),z[y]!==C&&(i.vertexAttribDivisor(y,C),z[y]=C)}function E(){const y=r.newAttributes,C=r.enabledAttributes;for(let O=0,B=C.length;O<B;O++)C[O]!==y[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function w(y,C,O,B,z,X,G){G===!0?i.vertexAttribIPointer(y,C,O,z,X):i.vertexAttribPointer(y,C,O,B,z,X)}function S(y,C,O,B){g();const z=B.attributes,X=O.getAttributes(),G=C.defaultAttributeValues;for(const Z in X){const H=X[Z];if(H.location>=0){let ie=z[Z];if(ie===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ie!==void 0){const oe=ie.normalized,ge=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;const Ge=Ne.buffer,Ve=Ne.type,W=Ne.bytesPerElement,ne=Ve===i.INT||Ve===i.UNSIGNED_INT||ie.gpuType===Ka;if(ie.isInterleavedBufferAttribute){const te=ie.data,Se=te.stride,Ee=ie.offset;if(te.isInstancedInterleavedBuffer){for(let Ie=0;Ie<H.locationSize;Ie++)f(H.location+Ie,te.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ie=0;Ie<H.locationSize;Ie++)p(H.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ie=0;Ie<H.locationSize;Ie++)w(H.location+Ie,ge/H.locationSize,Ve,oe,Se*W,(Ee+ge/H.locationSize*Ie)*W,ne)}else{if(ie.isInstancedBufferAttribute){for(let te=0;te<H.locationSize;te++)f(H.location+te,ie.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let te=0;te<H.locationSize;te++)p(H.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let te=0;te<H.locationSize;te++)w(H.location+te,ge/H.locationSize,Ve,oe,ge*W,ge/H.locationSize*te*W,ne)}}else if(G!==void 0){const oe=G[Z];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(H.location,oe);break;case 3:i.vertexAttrib3fv(H.location,oe);break;case 4:i.vertexAttrib4fv(H.location,oe);break;default:i.vertexAttrib1fv(H.location,oe)}}}}E()}function R(){P();for(const y in n){const C=n[y];for(const O in C){const B=C[O];for(const z in B)h(B[z].object),delete B[z];delete C[O]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const O in C){const B=C[O];for(const z in B)h(B[z].object),delete B[z];delete C[O]}delete n[y.id]}function b(y){for(const C in n){const O=n[C];if(O[y.id]===void 0)continue;const B=O[y.id];for(const z in B)h(B[z].object),delete B[z];delete O[y.id]}}function P(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:g,enableAttribute:p,disableUnusedAttributes:E}}function Sp(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v];t.update(m,n,1)}function l(c,h,u,d){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],h[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*d[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function yp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Gt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const P=b===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==pn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==An&&!P)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:R,maxSamples:A}}function wp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new $n,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const m=u.length!==0||d||n!==0||s;return s=d,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,m){const v=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!p)r?h(null):c();else{const E=r?0:n,w=E*4;let S=f.clippingState||null;l.value=S,S=h(v,d,w,m);for(let R=0;R!==w;++R)S[R]=t[R];f.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,m,v){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const f=m+g*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let w=0,S=m;w!==g;++w,S+=4)a.copy(u[w]).applyMatrix4(E,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Ep(i){let e=new WeakMap;function t(a,o){return o===fa?a.mapping=Fi:o===pa&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===fa||o===pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pu(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Ci=4,Zo=[.125,.215,.35,.446,.526,.582],ni=20,Xr=new fr,jo=new Ce;let Yr=null,qr=0,Kr=0,Zr=!1;const ei=(1+Math.sqrt(5))/2,bi=1/ei,Qo=[new U(-ei,bi,0),new U(ei,bi,0),new U(-bi,0,ei),new U(bi,0,ei),new U(0,ei,-bi),new U(0,ei,bi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Tp=new U;class Ha{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Tp}=r;Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=el(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr,qr,Kr),this._renderer.xr.enabled=Zr,e.scissorTest=!1,Vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Kr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Rn,format:Gt,colorSpace:Bi,depthBuffer:!1},s=Jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bp(r)),this._blurMaterial=Ap(r,e,t)}return s}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,s,r){const l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,m=u.toneMapping;u.getClearColor(jo),u.toneMapping=Hn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new no({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),p=new Pt(new Gn,g);let f=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,f=!0):(g.color.copy(jo),f=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):S===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const R=this._cubeSize;Vs(s,S*R,w>2?R:0,R,R),u.setRenderTarget(s),f&&u.render(p,l),u.render(e,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=m,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Fi||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=el()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qo[(s-r-1)%Qo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Pt(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ni-1),g=r/v,p=isFinite(r)?1+Math.floor(h*g):ni;p>ni&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const f=[];let E=0;for(let b=0;b<ni;++b){const P=b/g,M=Math.exp(-P*P/2);f.push(M),b===0?E+=M:b<p&&(E+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-n;const S=this._sizeLods[s],R=3*S*(s>w-Ci?s-w+Ci:0),A=4*(this._cubeSize-S);Vs(t,R,A,3*S,2*S),l.setRenderTarget(t),l.render(u,Xr)}}function bp(i){const e=[],t=[],n=[];let s=i;const r=i-Ci+1+Zo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Ci?l=Zo[a-i+Ci-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,v=6,g=3,p=2,f=1,E=new Float32Array(g*v*m),w=new Float32Array(p*v*m),S=new Float32Array(f*v*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,P=A>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];E.set(M,g*v*A),w.set(d,p*v*A);const y=[A,A,A,A,A,A];S.set(y,f*v*A)}const R=new Yt;R.setAttribute("position",new ut(E,g)),R.setAttribute("uv",new ut(w,p)),R.setAttribute("faceIndex",new ut(S,f)),e.push(R),s>Ci&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jo(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=cr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Ap(i,e,t){const n=new Float32Array(ni),s=new U(0,1,0);return new Tt({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function $o(){return new Tt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function el(){return new Tt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function lo(){return`

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
	`}function Cp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===fa||l===pa,h=l===Fi||l===Oi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ha(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new Ha(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Pi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Dp(i,e,t,n){const s={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER)}function c(u){const d=[],m=u.index,v=u.attributes.position;let g=0;if(m!==null){const E=m.array;g=m.version;for(let w=0,S=E.length;w<S;w+=3){const R=E[w+0],A=E[w+1],b=E[w+2];d.push(R,A,A,b,b,R)}}else if(v!==void 0){const E=v.array;g=v.version;for(let w=0,S=E.length/3-1;w<S;w+=3){const R=w+0,A=w+1,b=w+2;d.push(R,A,A,b,b,R)}}else return;const p=new(ic(d)?cc:lc)(d,1);p.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,p)}function h(u){const d=r.get(u);if(d){const m=u.index;m!==null&&d.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Pp(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,m){i.drawElements(n,m,r,d*a),t.update(m,n,1)}function c(d,m,v){v!==0&&(i.drawElementsInstanced(n,m,r,d*a,v),t.update(m,n,v))}function h(d,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];t.update(p,n,1)}function u(d,m,v,g){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/a,m[f],g[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,g,0,v);let f=0;for(let E=0;E<v;E++)f+=m[E]*g[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Up(i,e,t){const n=new WeakMap,s=new dt;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let w=0;m===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let S=o.attributes.position.count*w,R=1;S>e.maxTextureSize&&(R=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*R*4*u),b=new sc(A,S,R,u);b.type=An,b.needsUpdate=!0;const P=w*4;for(let y=0;y<u;y++){const C=p[y],O=f[y],B=E[y],z=S*R*4*y;for(let X=0;X<C.count;X++){const G=X*P;m===!0&&(s.fromBufferAttribute(C,X),A[z+G+0]=s.x,A[z+G+1]=s.y,A[z+G+2]=s.z,A[z+G+3]=0),v===!0&&(s.fromBufferAttribute(O,X),A[z+G+4]=s.x,A[z+G+5]=s.y,A[z+G+6]=s.z,A[z+G+7]=0),g===!0&&(s.fromBufferAttribute(B,X),A[z+G+8]=s.x,A[z+G+9]=s.y,A[z+G+10]=s.z,A[z+G+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:b,size:new Ae(S,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ip(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const gc=new Ft,tl=new ur(1,1),vc=new sc,_c=new Jh,xc=new io,nl=[],il=[],sl=new Float32Array(16),rl=new Float32Array(9),al=new Float32Array(4);function Wi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=nl[s];if(r===void 0&&(r=new Float32Array(s),nl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function pr(i,e){let t=il[e];t===void 0&&(t=new Int32Array(e),il[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;al.set(n),i.uniformMatrix2fv(this.addr,!1,al),At(t,n)}}function kp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;rl.set(n),i.uniformMatrix3fv(this.addr,!1,rl),At(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(bt(t,n))return;sl.set(n),i.uniformMatrix4fv(this.addr,!1,sl),At(t,n)}}function Hp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tl.compareFunction=nc,r=tl):r=gc,t.setTexture2D(e||r,s)}function Qp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||_c,s)}function Jp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||xc,s)}function $p(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vc,s)}function em(i){switch(i){case 5126:return Np;case 35664:return Fp;case 35665:return Op;case 35666:return Bp;case 35674:return zp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Hp;case 35667:case 35671:return Gp;case 35668:case 35672:return Wp;case 35669:case 35673:return Xp;case 5125:return Yp;case 36294:return qp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return Jp;case 36289:case 36303:case 36311:case 36292:return $p}}function tm(i,e){i.uniform1fv(this.addr,e)}function nm(i,e){const t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function im(i,e){const t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function sm(i,e){const t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function rm(i,e){const t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){const t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function om(i,e){const t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lm(i,e){i.uniform1iv(this.addr,e)}function cm(i,e){i.uniform2iv(this.addr,e)}function hm(i,e){i.uniform3iv(this.addr,e)}function um(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function fm(i,e){i.uniform2uiv(this.addr,e)}function pm(i,e){i.uniform3uiv(this.addr,e)}function mm(i,e){i.uniform4uiv(this.addr,e)}function gm(i,e,t){const n=this.cache,s=e.length,r=pr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||gc,r[a])}function vm(i,e,t){const n=this.cache,s=e.length,r=pr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_c,r[a])}function _m(i,e,t){const n=this.cache,s=e.length,r=pr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||xc,r[a])}function xm(i,e,t){const n=this.cache,s=e.length,r=pr(t,s);bt(n,r)||(i.uniform1iv(this.addr,r),At(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||vc,r[a])}function Mm(i){switch(i){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=em(t.type)}}class ym{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}}class wm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const jr=/(\w+)(\])?(\[|\.)?/g;function ol(i,e){i.seq.push(e),i.map[e.id]=e}function Em(i,e,t){const n=i.name,s=n.length;for(jr.lastIndex=0;;){const r=jr.exec(n),a=jr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ol(t,c===void 0?new Sm(o,i,e):new ym(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new wm(o),ol(t,u)),t=u}}}class Zs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Em(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tm=37297;let bm=0;function Am(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cl=new Oe;function Cm(i){je._getMatrix(cl,je.workingColorSpace,i);const e=`mat3( ${cl.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case tr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Am(i.getShaderSource(e),o)}else return r}function Rm(i,e){const t=Cm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Dm(i,e){let t;switch(e){case dh:t="Linear";break;case fh:t="Reinhard";break;case ph:t="Cineon";break;case Wl:t="ACESFilmic";break;case gh:t="AgX";break;case vh:t="Neutral";break;case mh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new U;function Pm(){je.getLuminanceCoefficients(Hs);const i=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Im(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ji(i){return i!==""}function ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(i){return i.replace(Nm,Om)}const Fm=new Map;function Om(i,e){let t=ze[e];if(t===void 0){const n=Fm.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ga(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fl(i){return i.replace(Bm,zm)}function zm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function km(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Vm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case cr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gl:e="ENVMAP_BLENDING_MULTIPLY";break;case hh:e="ENVMAP_BLENDING_MIX";break;case uh:e="ENVMAP_BLENDING_ADD";break}return e}function Wm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Xm(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=km(t),c=Vm(t),h=Hm(t),u=Gm(t),d=Wm(t),m=Lm(t),v=Um(r),g=s.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ji).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ji).join(`
`),f.length>0&&(f+=`
`)):(p=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),f=[pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?Dm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Rm("linearToOutputTexel",t.outputColorSpace),Pm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),a=Ga(a),a=ul(a,t),a=dl(a,t),o=Ga(o),o=ul(o,t),o=dl(o,t),a=fl(a),o=fl(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+p+a,S=E+f+o,R=ll(s,s.VERTEX_SHADER,w),A=ll(s,s.FRAGMENT_SHADER,S);s.attachShader(g,R),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function b(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(R)||"",z=s.getShaderInfoLog(A)||"",X=O.trim(),G=B.trim(),Z=z.trim();let H=!0,ie=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,R,A);else{const oe=hl(s,R,"vertex"),ge=hl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+X+`
`+oe+`
`+ge)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||Z==="")&&(ie=!1);ie&&(C.diagnostics={runnable:H,programLog:X,vertexShader:{log:G,prefix:p},fragmentShader:{log:Z,prefix:f}})}s.deleteShader(R),s.deleteShader(A),P=new Zs(s,g),M=Im(s,g)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,Tm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=A,this}let Ym=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=Ym++,this.code=e,this.usedTimes=0}}function Zm(i,e,t,n,s,r,a){const o=new ac,l=new qm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function p(M,y,C,O,B){const z=O.fog,X=B.geometry,G=M.isMeshStandardMaterial?O.environment:null,Z=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),H=Z&&Z.mapping===cr?Z.image.height:null,ie=v[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ge=oe!==void 0?oe.length:0;let Ne=0;X.morphAttributes.position!==void 0&&(Ne=1),X.morphAttributes.normal!==void 0&&(Ne=2),X.morphAttributes.color!==void 0&&(Ne=3);let Ge,Ve,W,ne;if(ie){const Qe=gn[ie];Ge=Qe.vertexShader,Ve=Qe.fragmentShader}else Ge=M.vertexShader,Ve=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),ne=l.getFragmentShaderID(M);const te=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,Ie=B.isBatchedMesh===!0,ft=!!M.map,Ye=!!M.matcap,D=!!Z,Je=!!M.aoMap,Te=!!M.lightMap,Ke=!!M.bumpMap,ye=!!M.normalMap,rt=!!M.displacementMap,fe=!!M.emissiveMap,He=!!M.metalnessMap,Ct=!!M.roughnessMap,xt=M.anisotropy>0,T=M.clearcoat>0,_=M.dispersion>0,F=M.iridescence>0,q=M.sheen>0,j=M.transmission>0,Y=xt&&!!M.anisotropyMap,we=T&&!!M.clearcoatMap,se=T&&!!M.clearcoatNormalMap,_e=T&&!!M.clearcoatRoughnessMap,xe=F&&!!M.iridescenceMap,$=F&&!!M.iridescenceThicknessMap,he=q&&!!M.sheenColorMap,Le=q&&!!M.sheenRoughnessMap,Me=!!M.specularMap,le=!!M.specularColorMap,Be=!!M.specularIntensityMap,L=j&&!!M.transmissionMap,ee=j&&!!M.thicknessMap,re=!!M.gradientMap,de=!!M.alphaMap,Q=M.alphaTest>0,K=!!M.alphaHash,ve=!!M.extensions;let Fe=Hn;M.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const it={shaderID:ie,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:Ve,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:ne,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Bi,alphaToCoverage:!!M.alphaToCoverage,map:ft,matcap:Ye,envMap:D,envMapMode:D&&Z.mapping,envMapCubeUVHeight:H,aoMap:Je,lightMap:Te,bumpMap:Ke,normalMap:ye,displacementMap:d&&rt,emissiveMap:fe,normalMapObjectSpace:ye&&M.normalMapType===Sh,normalMapTangentSpace:ye&&M.normalMapType===tc,metalnessMap:He,roughnessMap:Ct,anisotropy:xt,anisotropyMap:Y,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:_,iridescence:F,iridescenceMap:xe,iridescenceThicknessMap:$,sheen:q,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:Me,specularColorMap:le,specularIntensityMap:Be,transmission:j,transmissionMap:L,thicknessMap:ee,gradientMap:re,opaque:M.transparent===!1&&M.blending===Ri&&M.alphaToCoverage===!1,alphaMap:de,alphaTest:Q,alphaHash:K,combine:M.combine,mapUv:ft&&g(M.map.channel),aoMapUv:Je&&g(M.aoMap.channel),lightMapUv:Te&&g(M.lightMap.channel),bumpMapUv:Ke&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:rt&&g(M.displacementMap.channel),emissiveMapUv:fe&&g(M.emissiveMap.channel),metalnessMapUv:He&&g(M.metalnessMap.channel),roughnessMapUv:Ct&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:we&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:le&&g(M.specularColorMap.channel),specularIntensityMapUv:Be&&g(M.specularIntensityMap.channel),transmissionMapUv:L&&g(M.transmissionMap.channel),thicknessMapUv:ee&&g(M.thicknessMap.channel),alphaMapUv:de&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ye||xt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(ft||de),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ft&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===et,decodeVideoTextureEmissive:fe&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===un,flipSided:M.side===zt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(E(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=v[M.type];let C;if(y){const O=gn[y];C=cs.clone(O.uniforms)}else C=M.uniforms;return C}function R(M,y){let C;for(let O=0,B=h.length;O<B;O++){const z=h[O];if(z.cacheKey===y){C=z,++C.usedTimes;break}}return C===void 0&&(C=new Xm(i,y,M,r),h.push(C)),C}function A(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:h,dispose:P}}function jm(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ml(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,m,v,g,p){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:m,groupOrder:v,renderOrder:u.renderOrder,z:g,group:p},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=g,f.group=p),e++,f}function o(u,d,m,v,g,p){const f=a(u,d,m,v,g,p);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(u,d,m,v,g,p){const f=a(u,d,m,v,g,p);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Qm),n.length>1&&n.sort(d||ml),s.length>1&&s.sort(d||ml)}function h(){for(let u=e,d=i.length;u<d;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Jm(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new gl,i.set(n,[a])):s>=r.length?(a=new gl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $m(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ce};break;case"SpotLight":t={position:new U,direction:new U,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let tg=0;function ng(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ig(i){const e=new $m,t=eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new qe,a=new qe;function o(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,v=0,g=0,p=0,f=0,E=0,w=0,S=0,R=0,A=0,b=0;c.sort(ng);for(let M=0,y=c.length;M<y;M++){const C=c[M],O=C.color,B=C.intensity,z=C.distance,X=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*B,u+=O.g*B,d+=O.b*B;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],B);b++}else if(C.isDirectionalLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=X,n.directionalShadowMatrix[m]=C.shadow.matrix,E++}n.directional[m]=G,m++}else if(C.isSpotLight){const G=e.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(O).multiplyScalar(B),G.distance=z,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[g]=G;const Z=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,Z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[g]=Z.matrix,C.castShadow){const H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=X,S++}g++}else if(C.isRectAreaLight){const G=e.get(C);G.color.copy(O).multiplyScalar(B),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=G,p++}else if(C.isPointLight){const G=e.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const Z=C.shadow,H=t.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=C.shadow.matrix,w++}n.point[v]=G,v++}else if(C.isHemisphereLight){const G=e.get(C);G.skyColor.copy(C.color).multiplyScalar(B),G.groundColor.copy(C.groundColor).multiplyScalar(B),n.hemi[f]=G,f++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==m||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==p||P.hemiLength!==f||P.numDirectionalShadows!==E||P.numPointShadows!==w||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=g,n.rectArea.length=p,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,P.directionalLength=m,P.pointLength=v,P.spotLength=g,P.rectAreaLength=p,P.hemiLength=f,P.numDirectionalShadows=E,P.numPointShadows=w,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=b,n.version=tg++)}function l(c,h){let u=0,d=0,m=0,v=0,g=0;const p=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const w=c[f];if(w.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(w.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(w.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(w.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(w.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function vl(i){const e=new ig(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function sg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new vl(i),e.set(s,[o])):r>=a.length?(o=new vl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
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
}`;function og(i,e,t){let n=new so;const s=new Ae,r=new Ae,a=new dt,o=new Tu({depthPacking:Mh}),l=new bu,c={},h=t.maxTextureSize,u={[Pn]:zt,[zt]:Pn,[un]:un},d=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Yt;v.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Pt(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let f=this.type;this.render=function(A,b,P){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Cn),O.buffers.depth.getReversed()?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=f!==bn&&this.type===bn,z=f===bn&&this.type!==bn;for(let X=0,G=A.length;X<G;X++){const Z=A[X],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ie=H.getFrameExtents();if(s.multiply(ie),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,H.mapSize.y=r.y)),H.map===null||B===!0||z===!0){const ge=this.type!==bn?{minFilter:nt,magFilter:nt}:{};H.map!==null&&H.map.dispose(),H.map=new Qt(s.x,s.y,ge),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const oe=H.getViewportCount();for(let ge=0;ge<oe;ge++){const Ne=H.getViewport(ge);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),O.viewport(a),H.updateMatrices(Z,ge),n=H.getFrustum(),S(b,P,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===bn&&E(H,P),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,i.setRenderTarget(M,y,C)};function E(A,b){const P=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(b,null,P,d,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(b,null,P,m,g,null)}function w(A,b,P,M){let y=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=y.uuid,B=b.uuid;let z=c[O];z===void 0&&(z={},c[O]=z);let X=z[B];X===void 0&&(X=y.clone(),z[B]=X,b.addEventListener("dispose",R)),y=X}if(y.visible=b.visible,y.wireframe=b.wireframe,M===bn?y.side=b.shadowSide!==null?b.shadowSide:b.side:y.side=b.shadowSide!==null?b.shadowSide:u[b.side],y.alphaMap=b.alphaMap,y.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,y.map=b.map,y.clipShadows=b.clipShadows,y.clippingPlanes=b.clippingPlanes,y.clipIntersection=b.clipIntersection,y.displacementMap=b.displacementMap,y.displacementScale=b.displacementScale,y.displacementBias=b.displacementBias,y.wireframeLinewidth=b.wireframeLinewidth,y.linewidth=b.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const O=i.properties.get(y);O.light=P}return y}function S(A,b,P,M,y){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const B=e.update(A),z=A.material;if(Array.isArray(z)){const X=B.groups;for(let G=0,Z=X.length;G<Z;G++){const H=X[G],ie=z[H.materialIndex];if(ie&&ie.visible){const oe=w(A,ie,M,y);A.onBeforeShadow(i,A,b,P,B,oe,H),i.renderBufferDirect(P,null,B,oe,A,H),A.onAfterShadow(i,A,b,P,B,oe,H)}}}else if(z.visible){const X=w(A,z,M,y);A.onBeforeShadow(i,A,b,P,B,X,null),i.renderBufferDirect(P,null,B,X,A,null),A.onAfterShadow(i,A,b,P,B,X,null)}}const O=A.children;for(let B=0,z=O.length;B<z;B++)S(O[B],b,P,M,y)}function R(A){A.target.removeEventListener("dispose",R);for(const P in c){const M=c[P],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const lg={[aa]:oa,[la]:ua,[ca]:da,[Ni]:ha,[oa]:aa,[ua]:la,[da]:ca,[ha]:Ni};function cg(i,e){function t(){let L=!1;const ee=new dt;let re=null;const de=new dt(0,0,0,0);return{setMask:function(Q){re!==Q&&!L&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){L=Q},setClear:function(Q,K,ve,Fe,it){it===!0&&(Q*=Fe,K*=Fe,ve*=Fe),ee.set(Q,K,ve,Fe),de.equals(ee)===!1&&(i.clearColor(Q,K,ve,Fe),de.copy(ee))},reset:function(){L=!1,re=null,de.set(-1,0,0,0)}}}function n(){let L=!1,ee=!1,re=null,de=null,Q=null;return{setReversed:function(K){if(ee!==K){const ve=e.get("EXT_clip_control");K?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ee=K;const Fe=Q;Q=null,this.setClear(Fe)}},getReversed:function(){return ee},setTest:function(K){K?te(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(K){re!==K&&!L&&(i.depthMask(K),re=K)},setFunc:function(K){if(ee&&(K=lg[K]),de!==K){switch(K){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Ni:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}de=K}},setLocked:function(K){L=K},setClear:function(K){Q!==K&&(ee&&(K=1-K),i.clearDepth(K),Q=K)},reset:function(){L=!1,re=null,de=null,Q=null,ee=!1}}}function s(){let L=!1,ee=null,re=null,de=null,Q=null,K=null,ve=null,Fe=null,it=null;return{setTest:function(Qe){L||(Qe?te(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(Qe){ee!==Qe&&!L&&(i.stencilMask(Qe),ee=Qe)},setFunc:function(Qe,Mn,mn){(re!==Qe||de!==Mn||Q!==mn)&&(i.stencilFunc(Qe,Mn,mn),re=Qe,de=Mn,Q=mn)},setOp:function(Qe,Mn,mn){(K!==Qe||ve!==Mn||Fe!==mn)&&(i.stencilOp(Qe,Mn,mn),K=Qe,ve=Mn,Fe=mn)},setLocked:function(Qe){L=Qe},setClear:function(Qe){it!==Qe&&(i.clearStencil(Qe),it=Qe)},reset:function(){L=!1,ee=null,re=null,de=null,Q=null,K=null,ve=null,Fe=null,it=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,f=null,E=null,w=null,S=null,R=null,A=null,b=new Ce(0,0,0),P=0,M=!1,y=null,C=null,O=null,B=null,z=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=Z>=2);let ie=null,oe={};const ge=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ge=new dt().fromArray(ge),Ve=new dt().fromArray(Ne);function W(L,ee,re,de){const Q=new Uint8Array(4),K=i.createTexture();i.bindTexture(L,K),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,de,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ee+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return K}const ne={};ne[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ne[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ne[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ni),Ke(!1),ye(_o),te(i.CULL_FACE),Je(Cn);function te(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Se(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Ee(L,ee){return u[L]!==ee?(i.bindFramebuffer(L,ee),u[L]=ee,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Ie(L,ee){let re=m,de=!1;if(L){re=d.get(ee),re===void 0&&(re=[],d.set(ee,re));const Q=L.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ve=Q.length;K<ve;K++)re[K]=i.COLOR_ATTACHMENT0+K;re.length=Q.length,de=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,de=!0);de&&i.drawBuffers(re)}function ft(L){return v!==L?(i.useProgram(L),v=L,!0):!1}const Ye={[ti]:i.FUNC_ADD,[qc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};Ye[Zc]=i.MIN,Ye[jc]=i.MAX;const D={[Qc]:i.ZERO,[Jc]:i.ONE,[$c]:i.SRC_COLOR,[sa]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[th]:i.DST_ALPHA,[eh]:i.ONE_MINUS_SRC_COLOR,[ra]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(L,ee,re,de,Q,K,ve,Fe,it,Qe){if(L===Cn){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),L!==Yc){if(L!==p||Qe!==M){if((f!==ti||S!==ti)&&(i.blendEquation(i.FUNC_ADD),f=ti,S=ti),Qe)switch(L){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFunc(i.ONE,i.ONE);break;case xo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case er:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,w=null,R=null,A=null,b.set(0,0,0),P=0,p=L,M=Qe}return}Q=Q||ee,K=K||re,ve=ve||de,(ee!==f||Q!==S)&&(i.blendEquationSeparate(Ye[ee],Ye[Q]),f=ee,S=Q),(re!==E||de!==w||K!==R||ve!==A)&&(i.blendFuncSeparate(D[re],D[de],D[K],D[ve]),E=re,w=de,R=K,A=ve),(Fe.equals(b)===!1||it!==P)&&(i.blendColor(Fe.r,Fe.g,Fe.b,it),b.copy(Fe),P=it),p=L,M=!1}function Te(L,ee){L.side===un?Se(i.CULL_FACE):te(i.CULL_FACE);let re=L.side===zt;ee&&(re=!re),Ke(re),L.blending===Ri&&L.transparent===!1?Je(Cn):Je(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);const de=L.stencilWrite;o.setTest(de),de&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),fe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function ye(L){L!==Wc?(te(i.CULL_FACE),L!==C&&(L===_o?i.cullFace(i.BACK):L===Xc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),C=L}function rt(L){L!==O&&(G&&i.lineWidth(L),O=L)}function fe(L,ee,re){L?(te(i.POLYGON_OFFSET_FILL),(B!==ee||z!==re)&&(i.polygonOffset(ee,re),B=ee,z=re)):Se(i.POLYGON_OFFSET_FILL)}function He(L){L?te(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=i.TEXTURE0+X-1),ie!==L&&(i.activeTexture(L),ie=L)}function xt(L,ee,re){re===void 0&&(ie===null?re=i.TEXTURE0+X-1:re=ie);let de=oe[re];de===void 0&&(de={type:void 0,texture:void 0},oe[re]=de),(de.type!==L||de.texture!==ee)&&(ie!==re&&(i.activeTexture(re),ie=re),i.bindTexture(L,ee||ne[L]),de.type=L,de.texture=ee)}function T(){const L=oe[ie];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function q(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(L){Ge.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),Ge.copy(L))}function Le(L){Ve.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Me(L,ee){let re=c.get(ee);re===void 0&&(re=new WeakMap,c.set(ee,re));let de=re.get(L);de===void 0&&(de=i.getUniformBlockIndex(ee,L.name),re.set(L,de))}function le(L,ee){const de=c.get(ee).get(L);l.get(ee)!==de&&(i.uniformBlockBinding(ee,de,L.__bindingPointIndex),l.set(ee,de))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ie=null,oe={},u={},d=new WeakMap,m=[],v=null,g=!1,p=null,f=null,E=null,w=null,S=null,R=null,A=null,b=new Ce(0,0,0),P=0,M=!1,y=null,C=null,O=null,B=null,z=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:Se,bindFramebuffer:Ee,drawBuffers:Ie,useProgram:ft,setBlending:Je,setMaterial:Te,setFlipSided:Ke,setCullFace:ye,setLineWidth:rt,setPolygonOffset:fe,setScissorTest:He,activeTexture:Ct,bindTexture:xt,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:F,texImage2D:xe,texImage3D:$,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:se,texStorage3D:_e,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:we,scissor:he,viewport:Le,reset:Be}}function hg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return m?new OffscreenCanvas(T,_):ls("canvas")}function g(T,_,F){let q=1;const j=xt(T);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*j.width),we=Math.floor(q*j.height);u===void 0&&(u=v(Y,we));const se=_?v(Y,we):u;return se.width=Y,se.height=we,se.getContext("2d").drawImage(T,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+we+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function p(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,F,q,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),_===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){const we=j?tr:je.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=we===et?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(T,_){let F;return T?_===null||_===ci||_===rs?F=i.DEPTH24_STENCIL8:_===An?F=i.DEPTH32F_STENCIL8:_===li&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ci||_===rs?F=i.DEPTH_COMPONENT24:_===An?F=i.DEPTH_COMPONENT32F:_===li&&(F=i.DEPTH_COMPONENT16),F}function R(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==nt&&T.minFilter!==an?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),P(_),_.isVideoTexture&&h.delete(_)}function b(T){const _=T.target;_.removeEventListener("dispose",b),y(_)}function P(T){const _=n.get(T);if(_.__webglInit===void 0)return;const F=T.source,q=d.get(F);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(q).length===0&&d.delete(F)}n.remove(T)}function M(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const F=T.source,q=d.get(F);delete q[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let j=0;j<_.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[q][j]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=T.textures;for(let q=0,j=F.length;q<j;q++){const Y=n.get(F[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(T)}let C=0;function O(){C=0}function B(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function z(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){const F=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,T,_);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+_)}function G(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){ne(F,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+_)}function Z(T,_){const F=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){ne(F,T,_);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+_)}function H(T,_){const F=n.get(T);if(T.version>0&&F.__version!==T.version){te(F,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+_)}const ie={[oi]:i.REPEAT,[Nt]:i.CLAMP_TO_EDGE,[ma]:i.MIRRORED_REPEAT},oe={[nt]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[an]:i.LINEAR,[_r]:i.LINEAR_MIPMAP_NEAREST,[si]:i.LINEAR_MIPMAP_LINEAR},ge={[yh]:i.NEVER,[Ch]:i.ALWAYS,[wh]:i.LESS,[nc]:i.LEQUAL,[Eh]:i.EQUAL,[Ah]:i.GEQUAL,[Th]:i.GREATER,[bh]:i.NOTEQUAL};function Ne(T,_){if(_.type===An&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===an||_.magFilter===_r||_.magFilter===vs||_.magFilter===si||_.minFilter===an||_.minFilter===_r||_.minFilter===vs||_.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ie[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ie[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ie[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ge[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nt||_.minFilter!==vs&&_.minFilter!==si||_.type===An&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(T,_){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const Y=z(_);if(Y!==T.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Y].usedTimes++;const we=j[T.__cacheKey];we!==void 0&&(j[T.__cacheKey].usedTimes--,we.usedTimes===0&&M(_)),T.__cacheKey=Y,T.__webglTexture=j[Y].texture}return F}function Ve(T,_,F){return Math.floor(Math.floor(T/F)/_)}function W(T,_,F,q){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,F,q,_.data);else{Y.sort(($,he)=>$.start-he.start);let we=0;for(let $=1;$<Y.length;$++){const he=Y[we],Le=Y[$],Me=he.start+he.count,le=Ve(Le.start,_.width,4),Be=Ve(he.start,_.width,4);Le.start<=Me+1&&le===Be&&Ve(Le.start+Le.count-1,_.width,4)===le?he.count=Math.max(he.count,Le.start+Le.count-he.start):(++we,Y[we]=Le)}Y.length=we+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let $=0,he=Y.length;$<he;$++){const Le=Y[$],Me=Math.floor(Le.start/4),le=Math.ceil(Le.count/4),Be=Me%_.width,L=Math.floor(Me/_.width),ee=le,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Be,L,ee,re,F,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function ne(T,_,F){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const j=Ge(T,_),Y=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+F);const we=n.get(Y);if(Y.version!==we.__version||j===!0){t.activeTexture(i.TEXTURE0+F);const se=je.getPrimaries(je.workingColorSpace),_e=_.colorSpace===kn?null:je.getPrimaries(_.colorSpace),xe=_.colorSpace===kn||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let $=g(_.image,!1,s.maxTextureSize);$=Ct(_,$);const he=r.convert(_.format,_.colorSpace),Le=r.convert(_.type);let Me=w(_.internalFormat,he,Le,_.colorSpace,_.isVideoTexture);Ne(q,_);let le;const Be=_.mipmaps,L=_.isVideoTexture!==!0,ee=we.__version===void 0||j===!0,re=Y.dataReady,de=R(_,$);if(_.isDepthTexture)Me=S(_.format===as,_.type),ee&&(L?t.texStorage2D(i.TEXTURE_2D,1,Me,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,Me,$.width,$.height,0,he,Le,null));else if(_.isDataTexture)if(Be.length>0){L&&ee&&t.texStorage2D(i.TEXTURE_2D,de,Me,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],L?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,Le,le.data):t.texImage2D(i.TEXTURE_2D,Q,Me,le.width,le.height,0,he,Le,le.data);_.generateMipmaps=!1}else L?(ee&&t.texStorage2D(i.TEXTURE_2D,de,Me,$.width,$.height),re&&W(_,$,he,Le)):t.texImage2D(i.TEXTURE_2D,0,Me,$.width,$.height,0,he,Le,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){L&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,Be[0].width,Be[0].height,$.depth);for(let Q=0,K=Be.length;Q<K;Q++)if(le=Be[Q],_.format!==Gt)if(he!==null)if(L){if(re)if(_.layerUpdates.size>0){const ve=Ko(le.width,le.height,_.format,_.type);for(const Fe of _.layerUpdates){const it=le.data.subarray(Fe*ve/le.data.BYTES_PER_ELEMENT,(Fe+1)*ve/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Fe,le.width,le.height,1,he,it)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,$.depth,he,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Me,le.width,le.height,$.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,le.width,le.height,$.depth,he,Le,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Me,le.width,le.height,$.depth,0,he,Le,le.data)}else{L&&ee&&t.texStorage2D(i.TEXTURE_2D,de,Me,Be[0].width,Be[0].height);for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],_.format!==Gt?he!==null?L?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,le.width,le.height,he,Le,le.data):t.texImage2D(i.TEXTURE_2D,Q,Me,le.width,le.height,0,he,Le,le.data)}else if(_.isDataArrayTexture)if(L){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,Me,$.width,$.height,$.depth),re)if(_.layerUpdates.size>0){const Q=Ko($.width,$.height,_.format,_.type);for(const K of _.layerUpdates){const ve=$.data.subarray(K*Q/$.data.BYTES_PER_ELEMENT,(K+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,$.width,$.height,1,he,Le,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,he,Le,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,$.width,$.height,$.depth,0,he,Le,$.data);else if(_.isData3DTexture)L?(ee&&t.texStorage3D(i.TEXTURE_3D,de,Me,$.width,$.height,$.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,he,Le,$.data)):t.texImage3D(i.TEXTURE_3D,0,Me,$.width,$.height,$.depth,0,he,Le,$.data);else if(_.isFramebufferTexture){if(ee)if(L)t.texStorage2D(i.TEXTURE_2D,de,Me,$.width,$.height);else{let Q=$.width,K=$.height;for(let ve=0;ve<de;ve++)t.texImage2D(i.TEXTURE_2D,ve,Me,Q,K,0,he,Le,null),Q>>=1,K>>=1}}else if(Be.length>0){if(L&&ee){const Q=xt(Be[0]);t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height)}for(let Q=0,K=Be.length;Q<K;Q++)le=Be[Q],L?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he,Le,le):t.texImage2D(i.TEXTURE_2D,Q,Me,he,Le,le);_.generateMipmaps=!1}else if(L){if(ee){const Q=xt($);t.texStorage2D(i.TEXTURE_2D,de,Me,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Le,$)}else t.texImage2D(i.TEXTURE_2D,0,Me,he,Le,$);p(_)&&f(q),we.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function te(T,_,F){if(_.image.length!==6)return;const q=Ge(T,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const Y=n.get(j);if(j.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const we=je.getPrimaries(je.workingColorSpace),se=_.colorSpace===kn?null:je.getPrimaries(_.colorSpace),_e=_.colorSpace===kn||we===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,$=_.image[0]&&_.image[0].isDataTexture,he=[];for(let K=0;K<6;K++)!xe&&!$?he[K]=g(_.image[K],!0,s.maxCubemapSize):he[K]=$?_.image[K].image:_.image[K],he[K]=Ct(_,he[K]);const Le=he[0],Me=r.convert(_.format,_.colorSpace),le=r.convert(_.type),Be=w(_.internalFormat,Me,le,_.colorSpace),L=_.isVideoTexture!==!0,ee=Y.__version===void 0||q===!0,re=j.dataReady;let de=R(_,Le);Ne(i.TEXTURE_CUBE_MAP,_);let Q;if(xe){L&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,Le.width,Le.height);for(let K=0;K<6;K++){Q=he[K].mipmaps;for(let ve=0;ve<Q.length;ve++){const Fe=Q[ve];_.format!==Gt?Me!==null?L?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Fe.width,Fe.height,Me,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,0,0,Fe.width,Fe.height,Me,le,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve,Be,Fe.width,Fe.height,0,Me,le,Fe.data)}}}else{if(Q=_.mipmaps,L&&ee){Q.length>0&&de++;const K=xt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,de,Be,K.width,K.height)}for(let K=0;K<6;K++)if($){L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,he[K].width,he[K].height,Me,le,he[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,he[K].width,he[K].height,0,Me,le,he[K].data);for(let ve=0;ve<Q.length;ve++){const it=Q[ve].image[K].image;L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,it.width,it.height,Me,le,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Be,it.width,it.height,0,Me,le,it.data)}}else{L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Me,le,he[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Be,Me,le,he[K]);for(let ve=0;ve<Q.length;ve++){const Fe=Q[ve];L?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,0,0,Me,le,Fe.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ve+1,Be,Me,le,Fe.image[K])}}}p(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Se(T,_,F,q,j,Y){const we=r.convert(F.format,F.colorSpace),se=r.convert(F.type),_e=w(F.internalFormat,we,se,F.colorSpace),xe=n.get(_),$=n.get(F);if($.__renderTarget=_,!xe.__hasExternalTextures){const he=Math.max(1,_.width>>Y),Le=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,_e,he,Le,_.depth,0,we,se,null):t.texImage2D(j,Y,_e,he,Le,0,we,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,$.__webglTexture,0,rt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,$.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(T,_,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=S(_.stencilBuffer,j),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=rt(_);fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Y,_.width,_.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,T)}else{const q=_.textures;for(let j=0;j<q.length;j++){const Y=q[j],we=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),_e=w(Y.internalFormat,we,se,Y.colorSpace),xe=rt(_);F&&fe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,_e,_.width,_.height):fe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,_e,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_e,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const j=q.__webglTexture,Y=rt(_);if(_.depthTexture.format===hi)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===as)fe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function ft(T){const _=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Ie(_.__webglFramebuffer[0],T):Ie(_.__webglFramebuffer,T)}else if(F){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Ee(_.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ee(_.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(T,_,F){const q=n.get(T);_!==void 0&&Se(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ft(T)}function D(T){const _=T.texture,F=n.get(T),q=n.get(_);T.addEventListener("dispose",b);const j=T.textures,Y=T.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let _e=0;_e<_.mipmaps.length;_e++)F.__webglFramebuffer[se][_e]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(we)for(let se=0,_e=j.length;se<_e;se++){const xe=n.get(j[se]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&fe(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const _e=j[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);const xe=r.convert(_e.format,_e.colorSpace),$=r.convert(_e.type),he=w(_e.internalFormat,xe,$,_e.colorSpace,T.isXRRenderTarget===!0),Le=rt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Se(F.__webglFramebuffer[se][_e],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e);else Se(F.__webglFramebuffer[se],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);p(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let se=0,_e=j.length;se<_e;se++){const xe=j[se],$=n.get(xe);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,$.__webglTexture),Ne(he,xe),Se(F.__webglFramebuffer,T,xe,i.COLOR_ATTACHMENT0+se,he,0),p(xe)&&f(he)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ne(se,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Se(F.__webglFramebuffer[_e],T,_,i.COLOR_ATTACHMENT0,se,_e);else Se(F.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,se,0);p(_)&&f(se),t.unbindTexture()}T.depthBuffer&&ft(T)}function Je(T){const _=T.textures;for(let F=0,q=_.length;F<q;F++){const j=_[F];if(p(j)){const Y=E(T),we=n.get(j).__webglTexture;t.bindTexture(Y,we),f(Y),t.unbindTexture()}}}const Te=[],Ke=[];function ye(T){if(T.samples>0){if(fe(T)===!1){const _=T.textures,F=T.width,q=T.height;let j=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(T),se=_.length>1;if(se)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const $=n.get(_[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,$,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,j,i.NEAREST),l===!0&&(Te.length=0,Ke.length=0,Te.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Te.push(Y),Ke.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const $=n.get(_[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,$,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function rt(T){return Math.min(s.maxSamples,T.samples)}function fe(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ct(T,_){const F=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Bi&&F!==kn&&(je.getTransfer(F)===et?(q!==Gt||j!==pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=Ye,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=fe}function ug(i,e){function t(n,s=kn){let r;const a=je.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===Kl)return i.SHORT;if(n===li)return i.UNSIGNED_SHORT;if(n===Ka)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===An)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===Gt)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===$l)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===Ys||n===qs)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===va||n===_a||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ga)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ma||n===Sa||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ma||n===Sa)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wa||n===Ea||n===Ta||n===ba||n===Aa||n===Ca||n===Ra||n===Da||n===Pa||n===La||n===Ua||n===Ia||n===Na||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ba)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===Oa||n===Ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ks)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ec||n===za||n===ka||n===Va)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Mc extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fg=`
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

}`;class pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tt({vertexShader:dg,fragmentShader:fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new ds(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mg extends Vi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,m=null,v=null;const g=new pg,p={},f=t.getContextAttributes();let E=null,w=null;const S=[],R=[],A=new Ae;let b=null;const P=new sn;P.viewport=new dt;const M=new sn;M.viewport=new dt;const y=[P,M],C=new Iu;let O=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ne=S[W];return ne===void 0&&(ne=new zr,S[W]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(W){let ne=S[W];return ne===void 0&&(ne=new zr,S[W]=ne),ne.getGripSpace()},this.getHand=function(W){let ne=S[W];return ne===void 0&&(ne=new zr,S[W]=ne),ne.getHandSpace()};function z(W){const ne=R.indexOf(W.inputSource);if(ne===-1)return;const te=S[ne];te!==void 0&&(te.update(W.inputSource,W.frame,c||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",G);for(let W=0;W<S.length;W++){const ne=R[W];ne!==null&&(R[W]=null,S[W].disconnect(ne))}O=null,B=null,g.reset();for(const W in p)delete p[W];e.setRenderTarget(E),m=null,d=null,u=null,s=null,w=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",X),s.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,Se=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=f.stencil?as:hi,Se=f.stencil?rs:ci);const Ie={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=u.createProjectionLayer(Ie),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Qt(d.textureWidth,d.textureHeight,{format:Gt,type:pn,depthTexture:new ur(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const te={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Qt(m.framebufferWidth,m.framebufferHeight,{format:Gt,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let ne=0;ne<W.removed.length;ne++){const te=W.removed[ne],Se=R.indexOf(te);Se>=0&&(R[Se]=null,S[Se].disconnect(te))}for(let ne=0;ne<W.added.length;ne++){const te=W.added[ne];let Se=R.indexOf(te);if(Se===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=R.length){R.push(te),Se=Ie;break}else if(R[Ie]===null){R[Ie]=te,Se=Ie;break}if(Se===-1)break}const Ee=S[Se];Ee&&Ee.connect(te)}}const Z=new U,H=new U;function ie(W,ne,te){Z.setFromMatrixPosition(ne.matrixWorld),H.setFromMatrixPosition(te.matrixWorld);const Se=Z.distanceTo(H),Ee=ne.projectionMatrix.elements,Ie=te.projectionMatrix.elements,ft=Ee[14]/(Ee[10]-1),Ye=Ee[14]/(Ee[10]+1),D=(Ee[9]+1)/Ee[5],Je=(Ee[9]-1)/Ee[5],Te=(Ee[8]-1)/Ee[0],Ke=(Ie[8]+1)/Ie[0],ye=ft*Te,rt=ft*Ke,fe=Se/(-Te+Ke),He=fe*-Te;if(ne.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(fe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ct=ft+fe,xt=Ye+fe,T=ye-He,_=rt+(Se-He),F=D*Ye/xt*Ct,q=Je*Ye/xt*Ct;W.projectionMatrix.makePerspective(T,_,F,q,Ct,xt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,ne){ne===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ne.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ne=W.near,te=W.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(te=g.depthFar)),C.near=M.near=P.near=ne,C.far=M.far=P.far=te,(O!==C.near||B!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,B=C.far),C.layers.mask=W.layers.mask|6,P.layers.mask=C.layers.mask&3,M.layers.mask=C.layers.mask&5;const Se=W.parent,Ee=C.cameras;oe(C,Se);for(let Ie=0;Ie<Ee.length;Ie++)oe(Ee[Ie],Se);Ee.length===2?ie(C,P,M):C.projectionMatrix.copy(P.projectionMatrix),ge(W,C,Se)};function ge(W,ne,te){te===null?W.matrix.copy(ne.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(ne.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ne.projectionMatrix),W.projectionMatrixInverse.copy(ne.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=os*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function(W){return p[W]};let Ne=null;function Ge(W,ne){if(h=ne.getViewerPose(c||a),v=ne,h!==null){const te=h.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Se=!1;te.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let Ye=0;Ye<te.length;Ye++){const D=te[Ye];let Je=null;if(m!==null)Je=m.getViewport(D);else{const Ke=u.getViewSubImage(d,D);Je=Ke.viewport,Ye===0&&(e.setRenderTargetTextures(w,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(w))}let Te=y[Ye];Te===void 0&&(Te=new sn,Te.layers.enable(Ye),Te.viewport=new dt,y[Ye]=Te),Te.matrix.fromArray(D.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(D.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(Je.x,Je.y,Je.width,Je.height),Ye===0&&(C.matrix.copy(Te.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(Te)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const Ye=u.getDepthInformation(te[0]);Ye&&Ye.isValid&&Ye.texture&&g.init(Ye,s.renderState)}if(Ee&&Ee.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Ye=0;Ye<te.length;Ye++){const D=te[Ye].camera;if(D){let Je=p[D];Je||(Je=new Mc,p[D]=Je);const Te=u.getCameraImage(D);Je.sourceTexture=Te}}}for(let te=0;te<S.length;te++){const Se=R[te],Ee=S[te];Se!==null&&Ee!==void 0&&Ee.update(Se,ne,c||a)}Ne&&Ne(W,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const Ve=new mc;Ve.setAnimationLoop(Ge),this.setAnimationLoop=function(W){Ne=W},this.dispose=function(){}}}const Qn=new xn,gg=new qe;function vg(i,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,hc(i)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,E,w,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),u(p,f)):f.isMeshPhongMaterial?(r(p,f),h(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),g(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,w):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===zt&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===zt&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),w=E.envMap,S=E.envMapRotation;w&&(p.envMap.value=w,Qn.copy(S),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),p.envMapRotation.value.setFromMatrix4(gg.makeRotationFromEuler(Qn)),p.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,w){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=w*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function h(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _g(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const S=w.program;n.uniformBlockBinding(E,S)}function c(E,w){let S=s[E.id];S===void 0&&(v(E),S=h(E),s[E.id]=S,E.addEventListener("dispose",p));const R=w.program;n.updateUBOMapping(E,R);const A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const w=u();E.__bindingPointIndex=w;const S=i.createBuffer(),R=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function u(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=s[E.id],S=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,b=S.length;A<b;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,y=P.length;M<y;M++){const C=P[M];if(m(C,A,M,R)===!0){const O=C.__offset,B=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let X=0;X<B.length;X++){const G=B[X],Z=g(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,O+z,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,z),z+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,w,S,R){const A=E.value,b=w+"_"+S;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const P=R[b];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return R[b]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(E){const w=E.uniforms;let S=0;const R=16;for(let b=0,P=w.length;b<P;b++){const M=Array.isArray(w[b])?w[b]:[w[b]];for(let y=0,C=M.length;y<C;y++){const O=M[y],B=Array.isArray(O.value)?O.value:[O.value];for(let z=0,X=B.length;z<X;z++){const G=B[z],Z=g(G),H=S%R,ie=H%Z.boundary,oe=H+ie;S+=ie,oe!==0&&R-oe<Z.storage&&(S+=R-oe),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=S,S+=Z.storage}}}const A=S%R;return A>0&&(S+=R-A),E.__size=S,E.__cache={},this}function g(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){const w=E.target;w.removeEventListener("dispose",p);const S=a.indexOf(w.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}class xg{constructor(e={}){const{canvas:t=Xh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let p=null,f=null;const E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Et;let A=0,b=0,P=null,M=-1,y=null;const C=new dt,O=new dt;let B=null;const z=new Ce(0);let X=0,G=t.width,Z=t.height,H=1,ie=null,oe=null;const ge=new dt(0,0,G,Z),Ne=new dt(0,0,G,Z);let Ge=!1;const Ve=new so;let W=!1,ne=!1;const te=new qe,Se=new U,Ee=new dt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ye(){return P===null?H:1}let D=n;function Je(x,I){return t.getContext(x,I)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){const I="webgl2";if(D=Je(I,x),D===null)throw Je(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Te,Ke,ye,rt,fe,He,Ct,xt,T,_,F,q,j,Y,we,se,_e,xe,$,he,Le,Me,le,Be;function L(){Te=new Rp(D),Te.init(),Me=new ug(D,Te),Ke=new yp(D,Te,e,Me),ye=new cg(D,Te),Ke.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),rt=new Lp(D),fe=new jm,He=new hg(D,Te,ye,fe,Ke,Me,rt),Ct=new Ep(S),xt=new Cp(S),T=new Ou(D),le=new Mp(D,T),_=new Dp(D,T,rt,le),F=new Ip(D,_,T,rt),$=new Up(D,Ke,He),se=new wp(fe),q=new Zm(S,Ct,xt,Te,Ke,le,se),j=new vg(S,fe),Y=new Jm,we=new sg(Te),xe=new xp(S,Ct,xt,ye,F,m,l),_e=new og(S,F,Ke),Be=new _g(D,rt,Ke,ye),he=new Sp(D,Te,rt),Le=new Pp(D,Te,rt),rt.programs=q.programs,S.capabilities=Ke,S.extensions=Te,S.properties=fe,S.renderLists=Y,S.shadowMap=_e,S.state=ye,S.info=rt}L();const ee=new mg(S,D);this.xr=ee,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=Te.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Te.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(x){x!==void 0&&(H=x,this.setSize(G,Z,!1))},this.getSize=function(x){return x.set(G,Z)},this.setSize=function(x,I,k=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=x,Z=I,t.width=Math.floor(x*H),t.height=Math.floor(I*H),k===!0&&(t.style.width=x+"px",t.style.height=I+"px"),this.setViewport(0,0,x,I)},this.getDrawingBufferSize=function(x){return x.set(G*H,Z*H).floor()},this.setDrawingBufferSize=function(x,I,k){G=x,Z=I,H=k,t.width=Math.floor(x*k),t.height=Math.floor(I*k),this.setViewport(0,0,x,I)},this.getCurrentViewport=function(x){return x.copy(C)},this.getViewport=function(x){return x.copy(ge)},this.setViewport=function(x,I,k,V){x.isVector4?ge.set(x.x,x.y,x.z,x.w):ge.set(x,I,k,V),ye.viewport(C.copy(ge).multiplyScalar(H).round())},this.getScissor=function(x){return x.copy(Ne)},this.setScissor=function(x,I,k,V){x.isVector4?Ne.set(x.x,x.y,x.z,x.w):Ne.set(x,I,k,V),ye.scissor(O.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(x){ye.setScissorTest(Ge=x)},this.setOpaqueSort=function(x){ie=x},this.setTransparentSort=function(x){oe=x},this.getClearColor=function(x){return x.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(x=!0,I=!0,k=!0){let V=0;if(x){let N=!1;if(P!==null){const J=P.texture.format;N=J===$a||J===Ja||J===Qa}if(N){const J=P.texture.type,ce=J===pn||J===ci||J===li||J===rs||J===Za||J===ja,pe=xe.getClearColor(),ue=xe.getClearAlpha(),Pe=pe.r,Ue=pe.g,be=pe.b;ce?(v[0]=Pe,v[1]=Ue,v[2]=be,v[3]=ue,D.clearBufferuiv(D.COLOR,0,v)):(g[0]=Pe,g[1]=Ue,g[2]=be,g[3]=ue,D.clearBufferiv(D.COLOR,0,g))}else V|=D.COLOR_BUFFER_BIT}I&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),xe.dispose(),Y.dispose(),we.dispose(),fe.dispose(),Ct.dispose(),xt.dispose(),F.dispose(),le.dispose(),Be.dispose(),q.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",mn),ee.removeEventListener("sessionend",uo),Wn.stop()};function re(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const x=rt.autoReset,I=_e.enabled,k=_e.autoUpdate,V=_e.needsUpdate,N=_e.type;L(),rt.autoReset=x,_e.enabled=I,_e.autoUpdate=k,_e.needsUpdate=V,_e.type=N}function Q(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function K(x){const I=x.target;I.removeEventListener("dispose",K),ve(I)}function ve(x){Fe(x),fe.remove(x)}function Fe(x){const I=fe.get(x).programs;I!==void 0&&(I.forEach(function(k){q.releaseProgram(k)}),x.isShaderMaterial&&q.releaseShaderCache(x))}this.renderBufferDirect=function(x,I,k,V,N,J){I===null&&(I=Ie);const ce=N.isMesh&&N.matrixWorld.determinant()<0,pe=Cc(x,I,k,V,N);ye.setMaterial(V,ce);let ue=k.index,Pe=1;if(V.wireframe===!0){if(ue=_.getWireframeAttribute(k),ue===void 0)return;Pe=2}const Ue=k.drawRange,be=k.attributes.position;let We=Ue.start*Pe,$e=(Ue.start+Ue.count)*Pe;J!==null&&(We=Math.max(We,J.start*Pe),$e=Math.min($e,(J.start+J.count)*Pe)),ue!==null?(We=Math.max(We,0),$e=Math.min($e,ue.count)):be!=null&&(We=Math.max(We,0),$e=Math.min($e,be.count));const pt=$e-We;if(pt<0||pt===1/0)return;le.setup(N,V,pe,k,ue);let st,tt=he;if(ue!==null&&(st=T.get(ue),tt=Le,tt.setIndex(st)),N.isMesh)V.wireframe===!0?(ye.setLineWidth(V.wireframeLinewidth*Ye()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(N.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*Ye()),N.isLineSegments?tt.setMode(D.LINES):N.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else N.isPoints?tt.setMode(D.POINTS):N.isSprite&&tt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Pi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,at=N._multiDrawCounts,Ze=N._multiDrawCount,qt=ue?T.get(ue).bytesPerElement:1,ui=fe.get(V).currentProgram.getUniforms();for(let Kt=0;Kt<Ze;Kt++)ui.setValue(D,"_gl_DrawID",Kt),tt.render(Re[Kt]/qt,at[Kt])}else if(N.isInstancedMesh)tt.renderInstances(We,pt,N.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,at=Math.min(k.instanceCount,Re);tt.renderInstances(We,pt,at)}else tt.render(We,pt)};function it(x,I,k){x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=zt,x.needsUpdate=!0,gs(x,I,k),x.side=Pn,x.needsUpdate=!0,gs(x,I,k),x.side=un):gs(x,I,k)}this.compile=function(x,I,k=null){k===null&&(k=x),f=we.get(k),f.init(I),w.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),x!==k&&x.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const V=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const J=N.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){const pe=J[ce];it(pe,k,N),V.add(pe)}else it(J,k,N),V.add(J)}),f=w.pop(),V},this.compileAsync=function(x,I,k=null){const V=this.compile(x,I,k);return new Promise(N=>{function J(){if(V.forEach(function(ce){fe.get(ce).currentProgram.isReady()&&V.delete(ce)}),V.size===0){N(x);return}setTimeout(J,10)}Te.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Qe=null;function Mn(x){Qe&&Qe(x)}function mn(){Wn.stop()}function uo(){Wn.start()}const Wn=new mc;Wn.setAnimationLoop(Mn),typeof self<"u"&&Wn.setContext(self),this.setAnimationLoop=function(x){Qe=x,ee.setAnimationLoop(x),x===null?Wn.stop():Wn.start()},ee.addEventListener("sessionstart",mn),ee.addEventListener("sessionend",uo),this.render=function(x,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(I),I=ee.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,I,P),f=we.get(x,w.length),f.init(I),w.push(f),te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ve.setFromProjectionMatrix(te,_n,I.reversedDepth),ne=this.localClippingEnabled,W=se.init(this.clippingPlanes,ne),p=Y.get(x,E.length),p.init(),E.push(p),ee.enabled===!0&&ee.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&gr(J,I,-1/0,S.sortObjects)}gr(x,I,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ie,oe),ft=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,ft&&xe.addToRenderList(p,x),this.info.render.frame++,W===!0&&se.beginShadows();const k=f.state.shadowsArray;_e.render(k,x,I),W===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,N=p.transmissive;if(f.setupLights(),I.isArrayCamera){const J=I.cameras;if(N.length>0)for(let ce=0,pe=J.length;ce<pe;ce++){const ue=J[ce];po(V,N,x,ue)}ft&&xe.render(x);for(let ce=0,pe=J.length;ce<pe;ce++){const ue=J[ce];fo(p,x,ue,ue.viewport)}}else N.length>0&&po(V,N,x,I),ft&&xe.render(x),fo(p,x,I);P!==null&&b===0&&(He.updateMultisampleRenderTarget(P),He.updateRenderTargetMipmap(P)),x.isScene===!0&&x.onAfterRender(S,x,I),le.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],W===!0&&se.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?p=E[E.length-1]:p=null};function gr(x,I,k,V){if(x.visible===!1)return;if(x.layers.test(I.layers)){if(x.isGroup)k=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(I);else if(x.isLight)f.pushLight(x),x.castShadow&&f.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ve.intersectsSprite(x)){V&&Ee.setFromMatrixPosition(x.matrixWorld).applyMatrix4(te);const ce=F.update(x),pe=x.material;pe.visible&&p.push(x,ce,pe,k,Ee.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ve.intersectsObject(x))){const ce=F.update(x),pe=x.material;if(V&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ee.copy(x.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ee.copy(ce.boundingSphere.center)),Ee.applyMatrix4(x.matrixWorld).applyMatrix4(te)),Array.isArray(pe)){const ue=ce.groups;for(let Pe=0,Ue=ue.length;Pe<Ue;Pe++){const be=ue[Pe],We=pe[be.materialIndex];We&&We.visible&&p.push(x,ce,We,k,Ee.z,be)}}else pe.visible&&p.push(x,ce,pe,k,Ee.z,null)}}const J=x.children;for(let ce=0,pe=J.length;ce<pe;ce++)gr(J[ce],I,k,V)}function fo(x,I,k,V){const N=x.opaque,J=x.transmissive,ce=x.transparent;f.setupLightsView(k),W===!0&&se.setGlobalState(S.clippingPlanes,k),V&&ye.viewport(C.copy(V)),N.length>0&&ms(N,I,k),J.length>0&&ms(J,I,k),ce.length>0&&ms(ce,I,k),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function po(x,I,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Qt(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Rn:pn,minFilter:si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const J=f.state.transmissionRenderTarget[V.id],ce=V.viewport||C;J.setSize(ce.z*S.transmissionResolutionScale,ce.w*S.transmissionResolutionScale);const pe=S.getRenderTarget(),ue=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(J),S.getClearColor(z),X=S.getClearAlpha(),X<1&&S.setClearColor(16777215,.5),S.clear(),ft&&xe.render(k);const Ue=S.toneMapping;S.toneMapping=Hn;const be=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),W===!0&&se.setGlobalState(S.clippingPlanes,V),ms(x,k,V),He.updateMultisampleRenderTarget(J),He.updateRenderTargetMipmap(J),Te.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let $e=0,pt=I.length;$e<pt;$e++){const st=I[$e],tt=st.object,Re=st.geometry,at=st.material,Ze=st.group;if(at.side===un&&tt.layers.test(V.layers)){const qt=at.side;at.side=zt,at.needsUpdate=!0,mo(tt,k,V,Re,at,Ze),at.side=qt,at.needsUpdate=!0,We=!0}}We===!0&&(He.updateMultisampleRenderTarget(J),He.updateRenderTargetMipmap(J))}S.setRenderTarget(pe,ue,Pe),S.setClearColor(z,X),be!==void 0&&(V.viewport=be),S.toneMapping=Ue}function ms(x,I,k){const V=I.isScene===!0?I.overrideMaterial:null;for(let N=0,J=x.length;N<J;N++){const ce=x[N],pe=ce.object,ue=ce.geometry,Pe=ce.group;let Ue=ce.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),pe.layers.test(k.layers)&&mo(pe,I,k,ue,Ue,Pe)}}function mo(x,I,k,V,N,J){x.onBeforeRender(S,I,k,V,N,J),x.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(S,I,k,V,x,J),N.transparent===!0&&N.side===un&&N.forceSinglePass===!1?(N.side=zt,N.needsUpdate=!0,S.renderBufferDirect(k,I,V,N,x,J),N.side=Pn,N.needsUpdate=!0,S.renderBufferDirect(k,I,V,N,x,J),N.side=un):S.renderBufferDirect(k,I,V,N,x,J),x.onAfterRender(S,I,k,V,N,J)}function gs(x,I,k){I.isScene!==!0&&(I=Ie);const V=fe.get(x),N=f.state.lights,J=f.state.shadowsArray,ce=N.state.version,pe=q.getParameters(x,N.state,J,I,k),ue=q.getProgramCacheKey(pe);let Pe=V.programs;V.environment=x.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(x.isMeshStandardMaterial?xt:Ct).get(x.envMap||V.environment),V.envMapRotation=V.environment!==null&&x.envMap===null?I.environmentRotation:x.envMapRotation,Pe===void 0&&(x.addEventListener("dispose",K),Pe=new Map,V.programs=Pe);let Ue=Pe.get(ue);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===ce)return vo(x,pe),Ue}else pe.uniforms=q.getUniforms(x),x.onBeforeCompile(pe,S),Ue=q.acquireProgram(pe,ue),Pe.set(ue,Ue),V.uniforms=pe.uniforms;const be=V.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(be.clippingPlanes=se.uniform),vo(x,pe),V.needsLights=Dc(x),V.lightsStateVersion=ce,V.needsLights&&(be.ambientLightColor.value=N.state.ambient,be.lightProbe.value=N.state.probe,be.directionalLights.value=N.state.directional,be.directionalLightShadows.value=N.state.directionalShadow,be.spotLights.value=N.state.spot,be.spotLightShadows.value=N.state.spotShadow,be.rectAreaLights.value=N.state.rectArea,be.ltc_1.value=N.state.rectAreaLTC1,be.ltc_2.value=N.state.rectAreaLTC2,be.pointLights.value=N.state.point,be.pointLightShadows.value=N.state.pointShadow,be.hemisphereLights.value=N.state.hemi,be.directionalShadowMap.value=N.state.directionalShadowMap,be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,be.spotShadowMap.value=N.state.spotShadowMap,be.spotLightMatrix.value=N.state.spotLightMatrix,be.spotLightMap.value=N.state.spotLightMap,be.pointShadowMap.value=N.state.pointShadowMap,be.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ue,V.uniformsList=null,Ue}function go(x){if(x.uniformsList===null){const I=x.currentProgram.getUniforms();x.uniformsList=Zs.seqWithValue(I.seq,x.uniforms)}return x.uniformsList}function vo(x,I){const k=fe.get(x);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Cc(x,I,k,V,N){I.isScene!==!0&&(I=Ie),He.resetTextureUnits();const J=I.fog,ce=V.isMeshStandardMaterial?I.environment:null,pe=P===null?S.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Bi,ue=(V.isMeshStandardMaterial?xt:Ct).get(V.envMap||ce),Pe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ue=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,$e=!!k.morphAttributes.color;let pt=Hn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pt=S.toneMapping);const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,tt=st!==void 0?st.length:0,Re=fe.get(V),at=f.state.lights;if(W===!0&&(ne===!0||x!==y)){const kt=x===y&&V.id===M;se.setState(V,x,kt)}let Ze=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==at.state.version||Re.outputColorSpace!==pe||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==ue||V.fog===!0&&Re.fog!==J||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Ue||Re.morphTargets!==be||Re.morphNormals!==We||Re.morphColors!==$e||Re.toneMapping!==pt||Re.morphTargetsCount!==tt)&&(Ze=!0):(Ze=!0,Re.__version=V.version);let qt=Re.currentProgram;Ze===!0&&(qt=gs(V,I,N));let ui=!1,Kt=!1,Xi=!1;const ot=qt.getUniforms(),Jt=Re.uniforms;if(ye.useProgram(qt.program)&&(ui=!0,Kt=!0,Xi=!0),V.id!==M&&(M=V.id,Kt=!0),ui||y!==x){ye.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),ot.setValue(D,"projectionMatrix",x.projectionMatrix),ot.setValue(D,"viewMatrix",x.matrixWorldInverse);const Xt=ot.map.cameraPosition;Xt!==void 0&&Xt.setValue(D,Se.setFromMatrixPosition(x.matrixWorld)),Ke.logarithmicDepthBuffer&&ot.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Kt=!0,Xi=!0)}if(N.isSkinnedMesh){ot.setOptional(D,N,"bindMatrix"),ot.setOptional(D,N,"bindMatrixInverse");const kt=N.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ot.setValue(D,"boneTexture",kt.boneTexture,He))}N.isBatchedMesh&&(ot.setOptional(D,N,"batchingTexture"),ot.setValue(D,"batchingTexture",N._matricesTexture,He),ot.setOptional(D,N,"batchingIdTexture"),ot.setValue(D,"batchingIdTexture",N._indirectTexture,He),ot.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ot.setValue(D,"batchingColorTexture",N._colorsTexture,He));const $t=k.morphAttributes;if(($t.position!==void 0||$t.normal!==void 0||$t.color!==void 0)&&$.update(N,k,qt),(Kt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,ot.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Jt.envMap.value=ue,Jt.flipEnvMap.value=ue.isCubeTexture&&ue.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(Jt.envMapIntensity.value=I.environmentIntensity),Kt&&(ot.setValue(D,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&Rc(Jt,Xi),J&&V.fog===!0&&j.refreshFogUniforms(Jt,J),j.refreshMaterialUniforms(Jt,V,H,Z,f.state.transmissionRenderTarget[x.id]),Zs.upload(D,go(Re),Jt,He)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Zs.upload(D,go(Re),Jt,He),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(D,"center",N.center),ot.setValue(D,"modelViewMatrix",N.modelViewMatrix),ot.setValue(D,"normalMatrix",N.normalMatrix),ot.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const kt=V.uniformsGroups;for(let Xt=0,vr=kt.length;Xt<vr;Xt++){const Xn=kt[Xt];Be.update(Xn,qt),Be.bind(Xn,qt)}}return qt}function Rc(x,I){x.ambientLightColor.needsUpdate=I,x.lightProbe.needsUpdate=I,x.directionalLights.needsUpdate=I,x.directionalLightShadows.needsUpdate=I,x.pointLights.needsUpdate=I,x.pointLightShadows.needsUpdate=I,x.spotLights.needsUpdate=I,x.spotLightShadows.needsUpdate=I,x.rectAreaLights.needsUpdate=I,x.hemisphereLights.needsUpdate=I}function Dc(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(x,I,k){const V=fe.get(x);V.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),fe.get(x.texture).__webglTexture=I,fe.get(x.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:k,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,I){const k=fe.get(x);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0};const Pc=D.createFramebuffer();this.setRenderTarget=function(x,I=0,k=0){P=x,A=I,b=k;let V=!0,N=null,J=!1,ce=!1;if(x){const ue=fe.get(x);if(ue.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(ue.__webglFramebuffer===void 0)He.setupRenderTarget(x);else if(ue.__hasExternalTextures)He.rebindTextures(x,fe.get(x.texture).__webglTexture,fe.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const be=x.depthTexture;if(ue.__boundDepthTexture!==be){if(be!==null&&fe.has(be)&&(x.width!==be.image.width||x.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(x)}}const Pe=x.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Ue=fe.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ue[I])?N=Ue[I][k]:N=Ue[I],J=!0):x.samples>0&&He.useMultisampledRTT(x)===!1?N=fe.get(x).__webglMultisampledFramebuffer:Array.isArray(Ue)?N=Ue[k]:N=Ue,C.copy(x.viewport),O.copy(x.scissor),B=x.scissorTest}else C.copy(ge).multiplyScalar(H).floor(),O.copy(Ne).multiplyScalar(H).floor(),B=Ge;if(k!==0&&(N=Pc),ye.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&ye.drawBuffers(x,N),ye.viewport(C),ye.scissor(O),ye.setScissorTest(B),J){const ue=fe.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,ue.__webglTexture,k)}else if(ce){const ue=I;for(let Pe=0;Pe<x.textures.length;Pe++){const Ue=fe.get(x.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,k,ue)}}else if(x!==null&&k!==0){const ue=fe.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ue.__webglTexture,k)}M=-1},this.readRenderTargetPixels=function(x,I,k,V,N,J,ce,pe=0){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue){ye.bindFramebuffer(D.FRAMEBUFFER,ue);try{const Pe=x.textures[pe],Ue=Pe.format,be=Pe.type;if(!Ke.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=x.width-V&&k>=0&&k<=x.height-N&&(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(I,k,V,N,Me.convert(Ue),Me.convert(be),J))}finally{const Pe=P!==null?fe.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(x,I,k,V,N,J,ce,pe=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=fe.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ce!==void 0&&(ue=ue[ce]),ue)if(I>=0&&I<=x.width-V&&k>=0&&k<=x.height-N){ye.bindFramebuffer(D.FRAMEBUFFER,ue);const Pe=x.textures[pe],Ue=Pe.format,be=Pe.type;if(!Ke.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const We=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.bufferData(D.PIXEL_PACK_BUFFER,J.byteLength,D.STREAM_READ),x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pe),D.readPixels(I,k,V,N,Me.convert(Ue),Me.convert(be),0);const $e=P!==null?fe.get(P).__webglFramebuffer:null;ye.bindFramebuffer(D.FRAMEBUFFER,$e);const pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yh(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,We),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,J),D.deleteBuffer(We),D.deleteSync(pt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,I=null,k=0){const V=Math.pow(2,-k),N=Math.floor(x.image.width*V),J=Math.floor(x.image.height*V),ce=I!==null?I.x:0,pe=I!==null?I.y:0;He.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,ce,pe,N,J),ye.unbindTexture()};const Lc=D.createFramebuffer(),Uc=D.createFramebuffer();this.copyTextureToTexture=function(x,I,k=null,V=null,N=0,J=null){J===null&&(N!==0?(Pi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=N,N=0):J=0);let ce,pe,ue,Pe,Ue,be,We,$e,pt;const st=x.isCompressedTexture?x.mipmaps[J]:x.image;if(k!==null)ce=k.max.x-k.min.x,pe=k.max.y-k.min.y,ue=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Ue=k.min.y,be=k.isBox3?k.min.z:0;else{const $t=Math.pow(2,-N);ce=Math.floor(st.width*$t),pe=Math.floor(st.height*$t),x.isDataArrayTexture?ue=st.depth:x.isData3DTexture?ue=Math.floor(st.depth*$t):ue=1,Pe=0,Ue=0,be=0}V!==null?(We=V.x,$e=V.y,pt=V.z):(We=0,$e=0,pt=0);const tt=Me.convert(I.format),Re=Me.convert(I.type);let at;I.isData3DTexture?(He.setTexture3D(I,0),at=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(He.setTexture2DArray(I,0),at=D.TEXTURE_2D_ARRAY):(He.setTexture2D(I,0),at=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),qt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ui=D.getParameter(D.UNPACK_SKIP_PIXELS),Kt=D.getParameter(D.UNPACK_SKIP_ROWS),Xi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,st.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,st.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,be);const ot=x.isDataArrayTexture||x.isData3DTexture,Jt=I.isDataArrayTexture||I.isData3DTexture;if(x.isDepthTexture){const $t=fe.get(x),kt=fe.get(I),Xt=fe.get($t.__renderTarget),vr=fe.get(kt.__renderTarget);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Xn=0;Xn<ue;Xn++)ot&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(x).__webglTexture,N,be+Xn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fe.get(I).__webglTexture,J,pt+Xn)),D.blitFramebuffer(Pe,Ue,ce,pe,We,$e,ce,pe,D.DEPTH_BUFFER_BIT,D.NEAREST);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||fe.has(x)){const $t=fe.get(x),kt=fe.get(I);ye.bindFramebuffer(D.READ_FRAMEBUFFER,Lc),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,Uc);for(let Xt=0;Xt<ue;Xt++)ot?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,$t.__webglTexture,N,be+Xt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,$t.__webglTexture,N),Jt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,J,pt+Xt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,kt.__webglTexture,J),N!==0?D.blitFramebuffer(Pe,Ue,ce,pe,We,$e,ce,pe,D.COLOR_BUFFER_BIT,D.NEAREST):Jt?D.copyTexSubImage3D(at,J,We,$e,pt+Xt,Pe,Ue,ce,pe):D.copyTexSubImage2D(at,J,We,$e,Pe,Ue,ce,pe);ye.bindFramebuffer(D.READ_FRAMEBUFFER,null),ye.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Jt?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(at,J,We,$e,pt,ce,pe,ue,tt,Re,st.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(at,J,We,$e,pt,ce,pe,ue,tt,st.data):D.texSubImage3D(at,J,We,$e,pt,ce,pe,ue,tt,Re,st):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,J,We,$e,ce,pe,tt,Re,st.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,J,We,$e,st.width,st.height,tt,st.data):D.texSubImage2D(D.TEXTURE_2D,J,We,$e,ce,pe,tt,Re,st);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,qt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ui),D.pixelStorei(D.UNPACK_SKIP_ROWS,Kt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xi),J===0&&I.generateMipmaps&&D.generateMipmap(at),ye.unbindTexture()},this.copyTextureToTexture3D=function(x,I,k=null,V=null,N=0){return Pi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,I,k,V,N)},this.initRenderTarget=function(x){fe.get(x).__webglFramebuffer===void 0&&He.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?He.setTextureCube(x,0):x.isData3DTexture?He.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?He.setTexture2DArray(x,0):He.setTexture2D(x,0),ye.unbindTexture()},this.resetState=function(){A=0,b=0,P=null,ye.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class Mg{renderer;constructor(e){this.renderer=new xg({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(8900331),this.renderer.toneMapping=Wl,this.renderer.toneMappingExposure=.8,this.renderer.outputColorSpace=Et,this.renderer.useLegacyLights=!1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=qa,this.setSize(e.clientWidth,e.clientHeight)}setSize(e,t){this.renderer.setSize(e,t,!1)}getCanvasSize(){const e=this.renderer.getSize(new Ae);return{width:e.x,height:e.y}}onResize(){const e=this.renderer.domElement;this.setSize(e.clientWidth,e.clientHeight)}render(e,t){this.renderer.render(e,t)}getRenderer(){return this.renderer}dispose(){this.renderer.dispose()}}function Sg(){const i=new gu,e=new Uu(4212838,.1);return i.add(e),i}function yg(i=1){const e=new sn(70,i,.1,1024);return e.position.set(0,80,0),e}function _l(i,e,t){if(i<0||i>=me.x||e<0||e>=me.y||t<0||t>=me.z)throw new Error(`Invalid chunk coordinates: (${i}, ${e}, ${t}). Must be within (0,0,0) to (${me.x-1}, ${me.y-1}, ${me.z-1})`);return e*(me.x*me.z)+t*me.x+i}function xl(){return me.x*me.y*me.z}function Ml(i,e,t){return i>=0&&i<me.x&&e>=0&&e<me.y&&t>=0&&t<me.z}class wg{voxels;size;constructor(e){this.size={...me};const t=xl();if(e){if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==me.x||e.size.y!==me.y||e.size.z!==me.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${me.x}x${me.y}x${me.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}else this.voxels=new Uint8Array(t),this.voxels.fill(0)}get(e,t,n){if(!Ml(e,t,n))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${n})`);const s=_l(e,t,n);return this.voxels[s]}set(e,t,n,s){if(!Ml(e,t,n))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${n})`);if(s<0||s>255)throw new Error(`Invalid block ID: ${s}. Must be 0-255.`);const r=_l(e,t,n);this.voxels[r]=s}getData(){return{size:{...this.size},voxels:new Uint8Array(this.voxels)}}setFromData(e){const t=xl();if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==me.x||e.size.y!==me.y||e.size.z!==me.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${me.x}x${me.y}x${me.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}getVoxelsArray(){return this.voxels}getSize(){return{...this.size}}fill(e){if(e<0||e>255)throw new Error(`Invalid block ID: ${e}. Must be 0-255.`);this.voxels.fill(e)}clear(){this.voxels.fill(0)}isEmpty(){return this.voxels.every(e=>e===0)}countBlocks(e){let t=0;for(let n=0;n<this.voxels.length;n++)this.voxels[n]===e&&t++;return t}getBlockStats(){const e=new Map;for(let t=0;t<this.voxels.length;t++){const n=this.voxels[t];e.set(n,(e.get(n)||0)+1)}return e}}function Qr(i,e){return Math.floor(i/e)}function Jr(i,e){return(i%e+e)%e}function js(i,e,t){const n=Qr(i,me.x),s=Qr(e,me.y),r=Qr(t,me.z),a=Jr(i,me.x),o=Jr(e,me.y),l=Jr(t,me.z);return{cx:n,cy:s,cz:r,lx:a,ly:o,lz:l}}function Ut(i,e,t){return`${i},${e},${t}`}class co{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const n=this.listeners.get(e);return n.add(t),()=>{n.delete(t),n.size===0&&this.listeners.delete(e)}}once(e,t){const n=this.on(e,s=>{n(),t(s)});return n}off(e,t){const n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){const n=this.listeners.get(e);if(n){const s=Array.from(n);for(const r of s)try{r(t)}catch(a){console.error(`Error in event listener for '${String(e)}':`,a)}}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){const t=this.listeners.get(e);return t?t.size:0}eventNames(){return Array.from(this.listeners.keys())}}class Eg{blocks=new Map;nameToId=new Map;constructor(){this.initializeDefaults()}initializeDefaults(){const e=[{id:0,name:"air",opaque:!1,solid:!1,faces:{all:"air"}},{id:1,name:"grass",opaque:!0,solid:!0,faces:{top:"grass_top",bottom:"dirt",side:"grass_side"}},{id:2,name:"dirt",opaque:!0,solid:!0,faces:{all:"dirt"}},{id:3,name:"stone",opaque:!0,solid:!0,faces:{all:"cobblestone"}},{id:4,name:"sand",opaque:!0,solid:!0,faces:{all:"sand"}},{id:5,name:"water",opaque:!1,solid:!1,faces:{top:"water"}},{id:6,name:"wood",opaque:!0,solid:!0,faces:{top:"wood_top",bottom:"wood_top",side:"wood_side"}},{id:7,name:"leaves",opaque:!0,solid:!0,faces:{all:"tree_leaves"}}];for(const n of e)this.registerBlock(n);const t=this.getBlock(0);if(!t||t.opaque||t.solid)throw new Error("Block registry invariant violated: AIR (id=0) must be non-opaque and non-solid")}registerBlock(e){if(e.id<0||e.id>255)throw new Error(`Invalid block ID: ${e.id}. Must be 0-255.`);if(this.blocks.has(e.id))throw new Error(`Block ID ${e.id} already registered`);if(this.nameToId.has(e.name))throw new Error(`Block name '${e.name}' already registered`);this.blocks.set(e.id,e),this.nameToId.set(e.name,e.id)}getBlock(e){return this.blocks.get(e)}getBlockIdByName(e){return this.nameToId.get(e)}getAllBlocks(){return Array.from(this.blocks.values())}hasBlock(e){return this.blocks.has(e)}getBlockCount(){return this.blocks.size}validate(){const e=this.getBlock(0);if(!e)throw new Error("Registry validation failed: AIR block (id=0) not found");if(e.opaque||e.solid)throw new Error("Registry validation failed: AIR block must be non-opaque and non-solid");const t=Math.max(...this.blocks.keys());for(let n=0;n<=t;n++)if(!this.blocks.has(n))throw new Error(`Registry validation failed: Missing block ID ${n} - IDs must be contiguous`)}}let $r=null;function ho(){return $r||($r=new Eg),$r}function Sl(i){return ho().getBlock(i)}function Jn(i){return ho().getBlockIdByName(i)}function Tg(i){return i&&i.type==="CHUNK_DATA"&&typeof i.key=="string"&&i.payload}function bg(i){return i&&i.type==="CHUNK_MESH"&&typeof i.key=="string"&&i.payload&&i.payload.opaque&&i.payload.transparent&&i.payload.opaque.positions instanceof Float32Array&&i.payload.opaque.normals instanceof Float32Array&&i.payload.opaque.uvs instanceof Float32Array&&i.payload.opaque.colors instanceof Float32Array&&(i.payload.opaque.indices instanceof Uint16Array||i.payload.opaque.indices instanceof Uint32Array)&&i.payload.transparent.positions instanceof Float32Array&&i.payload.transparent.normals instanceof Float32Array&&i.payload.transparent.uvs instanceof Float32Array&&i.payload.transparent.colors instanceof Float32Array&&(i.payload.transparent.indices instanceof Uint16Array||i.payload.transparent.indices instanceof Uint32Array)}class Ag extends co{generatorWorker;mesherWorker;pendingRequests=new Set;atlasConfig=null;blockRegistry=[];chunkDataMap=new Map;worldRadius=null;constructor(){super(),this.generatorWorker=new Worker(new URL("/assets/generator.worker-BZoR6n0t.js",import.meta.url),{type:"module"}),this.generatorWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.generatorWorker.onerror=e=>{console.error("[ChunkPipeline] Generator worker error:",e)},this.mesherWorker=new Worker(new URL("/assets/mesher.worker-D5IBPgpP.js",import.meta.url),{type:"module"}),this.mesherWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.mesherWorker.onerror=e=>{console.error("[ChunkPipeline] Mesher worker error:",e)}}ingestChunkData(e,t){if(this.chunkDataMap.set(e,t),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before ingesting chunks");const n=this.buildNeighborsForKey(e),s={type:"MESH_CHUNK",payload:{key:e,chunkData:t,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:n}};this.mesherWorker.postMessage(s),this.emit("CHUNK_READY",{key:e,chunkData:t});const[r,a,o]=e.split(",").map(c=>parseInt(c,10)),l=[[r+1,a,o],[r-1,a,o],[r,a+1,o],[r,a-1,o],[r,a,o+1],[r,a,o-1]];for(const[c,h,u]of l){const d=Ut(c,h,u),m=this.chunkDataMap.get(d);if(m){const v=this.buildNeighborsFor(c,h,u),g={type:"MESH_CHUNK",payload:{key:d,chunkData:m,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:v}};this.mesherWorker.postMessage(g)}}}setAtlasConfig(e,t){this.atlasConfig=e,this.blockRegistry=t}setWorldRadius(e){this.worldRadius=e}requestChunk(e,t,n,s){const r=Ut(e,t,n);if(this.pendingRequests.has(r))return;this.pendingRequests.add(r);const a={type:"GEN_CHUNK",payload:{key:r,cx:e,cy:t,cz:n,seed:s,worldRadius:this.worldRadius||void 0}};this.generatorWorker.postMessage(a)}handleWorkerResponse(e){Tg(e)?this.handleChunkDataResponse(e):bg(e)?this.handleChunkMeshResponse(e):console.warn("[ChunkPipeline] Unknown worker response:",e)}handleChunkDataResponse(e){const{key:t,payload:n}=e;if(this.pendingRequests.delete(t),this.chunkDataMap.set(t,n),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before requesting chunks");const s=this.buildNeighborsForKey(t),r={type:"MESH_CHUNK",payload:{key:t,chunkData:n,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:s}};this.mesherWorker.postMessage(r);const[a,o,l]=t.split(",").map(h=>parseInt(h,10)),c=[[a+1,o,l],[a-1,o,l],[a,o+1,l],[a,o-1,l],[a,o,l+1],[a,o,l-1]];for(const[h,u,d]of c){const m=Ut(h,u,d),v=this.chunkDataMap.get(m);if(v){const g=this.buildNeighborsFor(h,u,d),p={type:"MESH_CHUNK",payload:{key:m,chunkData:v,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:g}};this.mesherWorker.postMessage(p)}}this.emit("CHUNK_READY",{key:t,chunkData:n})}buildNeighborsForKey(e){const[t,n,s]=e.split(",").map(r=>parseInt(r,10));return this.buildNeighborsFor(t,n,s)}buildNeighborsFor(e,t,n){return{posX:this.chunkDataMap.get(Ut(e+1,t,n)),negX:this.chunkDataMap.get(Ut(e-1,t,n)),posY:this.chunkDataMap.get(Ut(e,t+1,n)),negY:this.chunkDataMap.get(Ut(e,t-1,n)),posZ:this.chunkDataMap.get(Ut(e,t,n+1)),negZ:this.chunkDataMap.get(Ut(e,t,n-1))}}handleChunkMeshResponse(e){const{key:t}=e;this.emit("CHUNK_MESH",{key:t,response:e})}requestRemesh(e,t,n,s){if(!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before meshing");const r=Ut(e,t,n);this.chunkDataMap.set(r,s);const a=this.buildNeighborsFor(e,t,n),o={type:"MESH_CHUNK",payload:{key:r,chunkData:s,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:a}};this.mesherWorker.postMessage(o)}destroy(){this.generatorWorker.terminate(),this.mesherWorker.terminate(),this.pendingRequests.clear(),this.chunkDataMap.clear()}}class Cg extends co{chunks=new Map;chunkPipeline;seed=12345;overrideProvider=null;constructor(){super(),this.chunkPipeline=new Ag,this.chunkPipeline.on("CHUNK_READY",({key:e,chunkData:t})=>{this.handleChunkReady(e,t)})}async handleChunkReady(e,t){const n=new wg;if(n.setFromData(t),this.overrideProvider)try{const h=await this.overrideProvider.getOverrides(e);this.applyOverrides(n,h)}catch(h){console.warn(`[World] Failed to load overrides for chunk ${e}:`,h)}const[s,r,a]=e.split(","),o=parseInt(s,10),l=parseInt(r,10),c=parseInt(a,10);this.chunks.set(e,n),this.emit("CHUNK_ADDED",{key:e,chunk:n,coords:{cx:o,cy:l,cz:c}})}ensureChunk(e,t,n){const s=Ut(e,t,n),r=this.chunks.get(s);if(!r){this.chunkPipeline.requestChunk(e,t,n,this.seed);return}return r}getChunk(e,t,n){const s=Ut(e,t,n);return this.chunks.get(s)}getChunkByKey(e){return this.chunks.get(e)}setChunk(e,t,n,s){const r=Ut(e,t,n),a=this.chunks.has(r);this.chunks.set(r,s),a||this.emit("CHUNK_ADDED",{key:r,chunk:s,coords:{cx:e,cy:t,cz:n}})}removeChunk(e,t,n){const s=Ut(e,t,n),r=this.chunks.delete(s);return r&&this.emit("CHUNK_REMOVED",{key:s,coords:{cx:e,cy:t,cz:n}}),r}setBlock(e,t,n,s){const{cx:r,cy:a,cz:o,lx:l,ly:c,lz:h}=js(e,t,n),u=this.ensureChunk(r,a,o);if(!u){console.warn(`[World] Cannot set block at (${e}, ${t}, ${n}): chunk not ready yet`);return}const d=u.get(l,c,h);u.set(l,c,h,s),this.emit("BLOCK_CHANGED",{worldX:e,worldY:t,worldZ:n,oldBlockId:d,newBlockId:s,chunkKey:Ut(r,a,o),localX:l,localY:c,localZ:h})}getBlock(e,t,n){const{cx:s,cy:r,cz:a,lx:o,ly:l,lz:c}=js(e,t,n),h=this.getChunk(s,r,a);return h?h.get(o,l,c):0}isBlockSolid(e,t,n){const{cx:s,cy:r,cz:a}=js(e,t,n);if(!this.getChunk(s,r,a))return t<=80;const l=this.getBlock(e,t,n),c=Sl(l);return c?c.solid:!1}isBlockOpaque(e,t,n){const s=this.getBlock(e,t,n),r=Sl(s);return r?r.opaque:!1}getLoadedChunkKeys(){return Array.from(this.chunks.keys())}getLoadedChunks(){return Array.from(this.chunks.values())}getLoadedChunkCount(){return this.chunks.size}isChunkLoaded(e,t,n){const s=Ut(e,t,n);return this.chunks.has(s)}getChunksInRadius(e,t,n,s){const r=new Map;for(let a=e-s;a<=e+s;a++)for(let o=t-s;o<=t+s;o++)for(let l=n-s;l<=n+s;l++){const c=this.getChunk(a,o,l);if(c){const h=Ut(a,o,l);r.set(h,c)}}return r}clear(){const e=this.getLoadedChunkKeys();for(const t of e){const[n,s,r]=t.split(","),a=parseInt(n,10),o=parseInt(s,10),l=parseInt(r,10);this.removeChunk(a,o,l)}}setSeed(e){this.seed=e}getSeed(){return this.seed}setOverrideProvider(e){this.overrideProvider=e}getOverrideProvider(){return this.overrideProvider}applyOverrides(e,t){for(const n of t)try{e.set(n.lx,n.ly,n.lz,n.id)}catch(s){console.warn(`[World] Failed to apply override at (${n.lx}, ${n.ly}, ${n.lz}):`,s)}}destroy(){this.chunkPipeline.destroy(),this.clear()}}class Rg extends co{scene;materialOpaque;materialTransparent;chunkMeshes=new Map;chunkGroups=new Map;constructor(e,t){super(),this.scene=e,this.materialOpaque=t.opaque,this.materialTransparent=t.transparent}handleChunkMesh(e){const{key:t,payload:n}=e,{opaque:s,transparent:r}=n;this.removeChunkMesh(t);const a=new yt,o=(p,f,E)=>{if(!p.positions.length)return null;const w=new Yt;w.setAttribute("position",new ut(p.positions,3)),w.setAttribute("normal",new ut(p.normals,3)),w.setAttribute("uv",new ut(p.uvs,2)),p.colors&&p.colors.length&&w.setAttribute("color",new ut(p.colors,3)),w.setIndex(new ut(p.indices,1));const S=new Pt(w,f);return S.castShadow=!E,S.receiveShadow=!E,E&&(S.renderOrder=2),S},l=o(s,this.materialOpaque,!1),c=o(r,this.materialTransparent,!0);if(!l&&!c)return;const[h,u,d]=t.split(","),m=parseInt(h,10),v=parseInt(u,10),g=parseInt(d,10);a.position.set(m*me.x,v*me.y,g*me.z),l&&a.add(l),c&&a.add(c),l&&l.position.set(0,0,0),c&&c.position.set(0,0,0),this.scene.add(a),this.chunkMeshes.set(t,l??c),this.chunkGroups.set(t,a),this.emit("MESH_CREATED",{key:t,mesh:l??c})}removeChunkMesh(e){const t=this.chunkGroups.get(e),n=this.chunkMeshes.get(e);t&&(this.scene.remove(t),t.traverse(s=>{s instanceof Pt&&s.geometry&&s.geometry.dispose()}),this.chunkGroups.delete(e)),n&&(this.chunkMeshes.delete(e),this.emit("MESH_REMOVED",{key:e}))}getChunkMesh(e){return this.chunkMeshes.get(e)}getLoadedChunkKeys(){return Array.from(this.chunkMeshes.keys())}getLoadedMeshCount(){return this.chunkMeshes.size}clear(){const e=this.getLoadedChunkKeys();for(const t of e)this.removeChunkMesh(t)}destroy(){this.clear()}}class yl{texture;config;constructor(e,t){this.texture=e,this.config=t,this.texture.flipY=!0,this.texture.colorSpace=Et,this.texture.magFilter=nt,this.texture.minFilter=nt,this.texture.generateMipmaps=!1,this.texture.wrapS=Nt,this.texture.wrapT=Nt,this.texture.needsUpdate=!0}getTexture(){return this.texture}getTile(e){const t=this.config.tiles[e];return t?{u:t[0],v:t[1]}:null}getTileSize(){return this.config.tileSize}getAtlasSize(){return this.config.atlasSize}getTiles(){return this.config.tiles}getConfig(){return this.config}}function Dg(){const t=document.createElement("canvas");t.width=80,t.height=16,t.getContext("2d").clearRect(0,0,t.width,t.height);const s=new fc(t);return s.flipY=!0,s.colorSpace=Et,s.magFilter=nt,s.minFilter=nt,s.generateMipmaps=!1,s.wrapS=Nt,s.wrapT=Nt,s.needsUpdate=!0,s}async function Pg(){const i=new dr,e=16,t=11,n=1,s=document.createElement("canvas");s.width=t*e,s.height=n*e;const r=s.getContext("2d");r.clearRect(0,0,s.width,s.height);const o=Object.entries({grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0]}).map(async([c,[h,u]])=>{try{let d="";d=`/src/assets/textures/${c}.png`;const m=await new Promise((g,p)=>{i.load(d,g,void 0,p)}),v=m.image;c==="grass_side"?(r.save(),r.translate((h+.5)*e,(u+.5)*e),r.rotate(Math.PI),r.drawImage(v,-e/2,-e/2,e,e),r.restore()):r.drawImage(v,h*e,u*e,e,e),m.dispose()}catch(d){console.warn(`Failed to load texture ${c}:`,d)}});await Promise.all(o);const l=new fc(s);return Lg(l)}function Lg(i){return i.flipY=!0,i.colorSpace=Et,i.magFilter=nt,i.minFilter=nt,i.generateMipmaps=!1,i.wrapS=Nt,i.wrapT=Nt,i.needsUpdate=!0,i}async function Ug(){try{const e=await(await fetch("/atlas.json")).json(),t=await Pg();return new yl(t,e)}catch(i){console.warn("Failed to load atlas, falling back to simple atlas:",i);const e={tileSize:16,atlasSize:11,tiles:{grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0],air:[10,0]}},t=Dg();return new yl(t,e)}}class Ig{envMap=null;pmremGenerator=null;constructor(e){this.pmremGenerator=new Ha(e)}createEnvironmentMap(){if(this.envMap)return this.envMap;const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#87CEEB"),s.addColorStop(.7,"#B0E0E6"),s.addColorStop(1,"#F0F8FF"),n.fillStyle=s,n.fillRect(0,0,e,e);const r=[];for(let a=0;a<6;a++){const o=document.createElement("canvas");o.width=e,o.height=e,o.getContext("2d").drawImage(t,0,0),r.push(o)}return this.envMap=new io(r),this.envMap.needsUpdate=!0,this.envMap.format=Gt,this.envMap.type=pn,this.envMap.generateMipmaps=!1,this.envMap.minFilter=an,this.envMap.magFilter=an,this.envMap.wrapS=Nt,this.envMap.wrapT=Nt,this.envMap}getEnvironmentMap(){return this.envMap}dispose(){this.envMap&&(this.envMap.dispose(),this.envMap=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null)}}class Sc extends Tt{startTime;constructor(e,t,n){super({vertexShader:`
      // Block vertex shader using per-vertex colors for AO/skylight/tint
      attribute vec3 color;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;

      void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vColor = color;
          
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewPosition = viewPosition.xyz;
          
          gl_Position = projectionMatrix * viewPosition;
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying vec3 vColor;

      uniform sampler2D map;
      uniform sampler2D normalMap;
      uniform samplerCube envMap;
      uniform float roughness;
      uniform float metalness;
      uniform float envMapIntensity;
      uniform float time;
      uniform float alphaScale;
      uniform float lightingMix;
      
      // Sun uniforms (directional light driven by SunController)
      uniform vec3 sunDirection;
      uniform vec3 sunColor;

      // Shadow uniforms
      uniform sampler2D shadowMap0;
      uniform sampler2D shadowMap1;
      uniform sampler2D shadowMap2;
      uniform sampler2D shadowMap3;
      uniform mat4 shadowMatrix0;
      uniform mat4 shadowMatrix1;
      uniform mat4 shadowMatrix2;
      uniform mat4 shadowMatrix3;
      uniform int shadowCascades;
      uniform float shadowDistances[4];
      uniform float shadowSoftness;
      uniform float shadowBias;
      uniform float shadowNormalBias;
      uniform float shadowIntensity;
      uniform float shadowResolution;
      uniform float shadowBlendFraction;

      // Cloud shadow uniforms (projected procedural clouds)
      uniform bool cloudShadowEnabled;
      uniform float cloudShadowIntensity; // 0..1
      uniform float cloudShadowAltitude;  // world Y of cloud plane
      uniform float cloudShadowScale;     // world units per cloud tile (default ~100)
      uniform float cloudCoverage;        // match CloudsLayer
      uniform float cloudDensity;         // match CloudsLayer
      uniform vec2 cloudWind;             // world-directional speed proxy

      // Day/night factor (0=night, 1=day)
      uniform float dayLight;
      // Star light factor (0..1) tiny ambient boost at night
      uniform float starLight;

      // Hash-based noise for kernel rotation
      float hash12(vec2 p) {
          // Simple but decent hash
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
      }

      // Poisson disk offsets (8 samples)
      const int POISSON_COUNT = 8;
      vec2 poisson[POISSON_COUNT];

      // Helpers to select cascade-specific matrix and sampler without non-uniform sampler variables
      vec4 getShadowCoord(int ci, vec3 worldPos) {
          if (ci == 0) return shadowMatrix0 * vec4(worldPos, 1.0);
          if (ci == 1) return shadowMatrix1 * vec4(worldPos, 1.0);
          if (ci == 2) return shadowMatrix2 * vec4(worldPos, 1.0);
          return shadowMatrix3 * vec4(worldPos, 1.0);
      }
      float sampleShadowMap(int ci, vec2 uv) {
          if (ci == 0) return texture2D(shadowMap0, uv).r;
          if (ci == 1) return texture2D(shadowMap1, uv).r;
          if (ci == 2) return texture2D(shadowMap2, uv).r;
          return texture2D(shadowMap3, uv).r;
      }

      // Compute PCSS-style soft shadow with cascade selection
      float sampleShadowCascade(int ci, vec3 worldPos, vec3 normal, float bias) {
          vec4 sc = getShadowCoord(ci, worldPos);
          sc.xyz /= sc.w;
          sc = sc * 0.5 + 0.5;
          if (sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0 || sc.z < 0.0 || sc.z > 1.0) return 1.0;

          float texelSize = max(1.0 / shadowResolution, 0.0004);
          float receiver = sc.z - bias;

          // Poisson disk
          poisson[0] = vec2(-0.613392, 0.617481);
          poisson[1] = vec2(0.170019, -0.040254);
          poisson[2] = vec2(-0.299417, 0.791925);
          poisson[3] = vec2(0.645680, 0.493210);
          poisson[4] = vec2(-0.651784, 0.717887);
          poisson[5] = vec2(0.421003, 0.027070);
          poisson[6] = vec2(0.161360, -0.914412);
          poisson[7] = vec2(-0.725000, -0.045000);

          // Blocker search (PCSS)
          float searchRadius = shadowSoftness * 4.0 * texelSize;
          float angle = hash12(sc.xy * 1024.0) * 6.2831853;
          float s = sin(angle), c = cos(angle);
          mat2 rot = mat2(c, -s, s, c);
          float blockerSum = 0.0;
          float blockerCount = 0.0;
          for (int i = 0; i < POISSON_COUNT; i++) {
            vec2 o = rot * poisson[i] * searchRadius;
            float d = sampleShadowMap(ci, sc.xy + o);
            if (d < receiver) { blockerSum += d; blockerCount += 1.0; }
          }
          float avgBlocker = blockerCount > 0.0 ? (blockerSum / blockerCount) : receiver;
          float penumbra = blockerCount > 0.0 ? clamp((receiver - avgBlocker) / max(avgBlocker, 1e-3), 0.0, 1.0) : 0.0;

          float radius = texelSize * (2.5 + 12.0 * penumbra);
          float shadow = 0.0;
          for (int i = 0; i < POISSON_COUNT; i++) {
            vec2 o = rot * poisson[i] * radius;
            float sd = sampleShadowMap(ci, sc.xy + o);
            shadow += receiver <= sd ? 1.0 : 0.0;
          }
          shadow /= float(POISSON_COUNT);
          return shadow;
      }

      float sampleShadow(vec3 worldPos, vec3 normal, vec3 sunDir) {
          // Return 1.0 (no shadow) if shadow system is disabled
          if (shadowIntensity <= 0.0) return 1.0;
          // Normal-bias adjustment
          float nb = shadowNormalBias * (1.0 - max(dot(normal, sunDir), 0.0));

          // Determine cascade by view depth
          // Use camera-space depth (consistent with cascade splits)
          float viewDepth = -vViewPosition.z;
          int ci = 0;
          if (shadowCascades > 1 && viewDepth > shadowDistances[0]) ci = 1;
          if (shadowCascades > 2 && viewDepth > shadowDistances[1]) ci = 2;
          if (shadowCascades > 3 && viewDepth > shadowDistances[2]) ci = 3;

          float bias = shadowBias + nb;

          // Cross-fade at boundaries to hide seams
          float sCur = sampleShadowCascade(ci, worldPos + normal * nb, normal, bias);
          if (ci > 0) {
            float nearBound = shadowDistances[ci-1];
            float farBound = shadowDistances[ci];
            float width = max(1.0, (farBound - nearBound) * shadowBlendFraction);
            float t = clamp((viewDepth - nearBound) / width, 0.0, 1.0);
            if (t < 1.0) {
              int pi = ci - 1;
              float sPrev = sampleShadowCascade(pi, worldPos + normal * nb, normal, bias);
              sCur = mix(sPrev, sCur, t);
            }
          }
          return mix(1.0 - shadowIntensity, 1.0, sCur);
      }

      // Enhanced lighting calculation with shadows
      
      // --- Procedural cloud utilities (match CloudsLayer) ---
      float chash(vec2 p){ return fract(sin(dot(p, vec2(41.0,289.0))) * 45758.5453); }
      float cnoise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = chash(i);
          float b = chash(i + vec2(1.0, 0.0));
          float c = chash(i + vec2(0.0, 1.0));
          float d = chash(i + vec2(1.0, 1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
      }
      float cfbm(vec2 p){
          float v = 0.0; float a = 0.5;
          for(int i=0;i<5;i++){ v += a * cnoise(p); p *= 2.02; a *= 0.5; }
          return v;
      }
      // Project world point to cloud plane along sun direction and return 0..1 cloud amount
      float cloudAmountAt(vec3 worldPos, vec3 sunDir){
          // Avoid extreme projection when sun at horizon
          if (sunDir.y <= 0.05) return 0.0;
          float t = (cloudShadowAltitude - worldPos.y) / sunDir.y;
          if (t <= 0.0) return 0.0;
          vec3 hit = worldPos + sunDir * t;
          // Convert to tiled space; follow CloudsLayer: 4000/40 = 100 world units per tile
          vec2 uv = hit.xz / max(1e-3, cloudShadowScale);
          // Match cloud movement: CloudsLayer uses + uWind * (uTime * 0.01)
          float tSec = time * 0.001; // time in seconds
          uv += cloudWind * (tSec * 0.01);
          float base = cfbm(uv * 0.5) * 0.9 + cfbm(uv * 1.7) * 0.1;
          float clouds = smoothstep(cloudCoverage, cloudCoverage + 0.25*(1.0-cloudDensity), base);
          clouds = pow(clouds, 1.5);
          return clamp(clouds, 0.0, 1.0);
      }

      vec3 calculateEnhancedLighting(vec3 albedo, vec3 normal, vec3 viewDir) {
          vec3 color = vec3(0.0);
          
          // Enhanced ambient with AO, modulated by day/night
          vec3 dayAmb = vec3(0.4, 0.5, 0.6) * 0.35;
          vec3 nightAmb = vec3(0.01, 0.015, 0.02) * 0.12;
          vec3 ambBase = mix(nightAmb, dayAmb, clamp(dayLight, 0.0, 1.0));
          vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35 * clamp(starLight, 0.0, 1.0);
          vec3 ambient = (ambBase + starAmb);
          
      // Main sun light (provided via uniforms)
      vec3 sunDir = normalize(sunDirection);
      float sunDot = max(dot(normal, sunDir), 0.0);
          
          // Sample shadow
          float shadowFactor = sampleShadow(vWorldPosition, normal, sunDir);

          // Multiply by procedural cloud shadow (stable world-projection)
          if (cloudShadowEnabled && cloudShadowIntensity > 0.0) {
            float camt = cloudAmountAt(vWorldPosition, sunDir);
            float cloudShade = 1.0 - cloudShadowIntensity * camt;
            shadowFactor *= cloudShade;
          }
          
          // Apply shadow to diffuse lighting
          float wrappedDiffuse = (sunDot + 0.3) / 1.3;
          vec3 diffuse = sunColor * wrappedDiffuse * shadowFactor * clamp(dayLight, 0.0, 1.0);
          
          // Fresnel rim lighting
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
          vec3 fresnelColor = vec3(0.8, 0.9, 1.0) * fresnel * 0.2 * clamp(dayLight, 0.0, 1.0);
          
          // Environment reflection (only if envMap is available)
          vec3 reflection = vec3(0.0);
          #ifdef USE_ENVMAP
            vec3 reflectDir = reflect(-viewDir, normal);
          vec3 envColor = textureCube(envMap, reflectDir).rgb;
          reflection = envColor * envMapIntensity * (1.0 - roughness) * fresnel * clamp(dayLight, 0.0, 1.0);
          #endif
          
          // Subsurface scattering
          float backLight = max(dot(normal, -sunDir), 0.0);
          vec3 subsurface = sunColor * backLight * 0.1 * (1.0 - metalness) * clamp(dayLight, 0.0, 1.0);
          
          return ambient + diffuse + fresnelColor + reflection + subsurface;
      }

      // Atmospheric fog (legacy per-material; disabled by default in favor of post-process fog)
      uniform bool materialFogEnabled;
      vec3 applyAtmosphericFog(vec3 color, float distance) {
          if (!materialFogEnabled) return color;
          float fogDensity = 0.0002;
          float fogFactor = 1.0 - exp(-distance * fogDensity);
          vec3 fogColor = vec3(0.7, 0.8, 0.9);
          return mix(color, fogColor, clamp(fogFactor, 0.0, 0.6));
      }

      void main() {
          vec4 texColor = texture2D(map, vUv);
          vec3 albedo = texColor.rgb;
          vec3 tinted = albedo * vColor;
          
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          
          vec3 lit = calculateEnhancedLighting(tinted, normal, viewDir) * tinted;
          vec3 color = mix(tinted, lit, clamp(lightingMix, 0.0, 1.0));
          
          float distance = length(vViewPosition);
          color = applyAtmosphericFog(color, distance);
          
          // Tone mapping and gamma correction
          color = color / (color + vec3(1.0));
          color = pow(color, vec3(1.0/2.2));
          
          gl_FragColor = vec4(color, texColor.a * alphaScale);
      }
    `,uniforms:{map:{value:e},normalMap:{value:n||null},envMap:{value:t},roughness:{value:.8},metalness:{value:0},envMapIntensity:{value:.3},time:{value:0},alphaScale:{value:1},lightingMix:{value:1},sunDirection:{value:new U(50,120,50).normalize()},sunColor:{value:new Ce(1,.95,.8)},shadowMap0:{value:null},shadowMap1:{value:null},shadowMap2:{value:null},shadowMap3:{value:null},shadowMatrix0:{value:new qe},shadowMatrix1:{value:new qe},shadowMatrix2:{value:new qe},shadowMatrix3:{value:new qe},shadowCascades:{value:3},shadowDistances:{value:[25,50,100,200]},shadowSoftness:{value:2},shadowBias:{value:5e-4},shadowNormalBias:{value:.02},shadowIntensity:{value:0},shadowResolution:{value:1024},shadowBlendFraction:{value:.3},cloudShadowEnabled:{value:!0},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new Ae(Math.cos(Math.PI*.25)*5,Math.sin(Math.PI*.25)*5)},dayLight:{value:1},starLight:{value:0},materialFogEnabled:{value:!1}},defines:t?{USE_ENVMAP:!0}:{},side:Pn,transparent:!1}),this.startTime=Date.now()}updateUniforms(e){this.uniforms.time.value=Date.now()-this.startTime}setMaterialProperties(e,t,n){const s=this.uniforms;s.roughness.value=e,s.metalness.value=t,s.envMapIntensity.value=n}setAlphaScale(e){const t=this.uniforms;t.alphaScale.value=ke.clamp(e,0,1)}setLightingMix(e){const t=this.uniforms;t.lightingMix.value=ke.clamp(e,0,1)}setSunUniforms(e,t){const n=this.uniforms;n.sunDirection.value.copy(e),n.sunColor.value.copy(t)}setDayLight(e){const t=this.uniforms;t.dayLight.value=ke.clamp(e,0,1)}setStarLight(e){const t=this.uniforms;t.starLight.value=ke.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=ke.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=ke.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=ke.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}updateShadowUniforms(e){const t=this.uniforms;Object.keys(e).forEach(n=>{t[n]&&(t[n].value=e[n].value)})}}const Qs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ng=new fr(-1,1,1,-1,0,1);class Fg extends Yt{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const Og=new Fg;class yc{constructor(e){this._mesh=new Pt(Og,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Ng)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ps extends fs{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cs.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new yc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class wl extends fs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Bg extends fs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class zg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ps(Qs),this.copyPass.material.blending=Cn,this.clock=new Nu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}wl!==void 0&&(a instanceof wl?n=!0:a instanceof Bg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kg extends fs{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}class Vg extends ps{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},ssaoEnabled:{value:!0},ssaoIntensity:{value:.3},ssaoRadius:{value:.01}},vertexShader:`
        varying vec2 vUv;
        void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform bool ssaoEnabled;
        uniform float ssaoIntensity;
        uniform float ssaoRadius;
        varying vec2 vUv;
        float readDepth(vec2 coord) {
          float z = texture2D(tDepth, coord).r;
          if (z == 1.0) return cameraFar;
          float viewZ = (cameraNear * cameraFar) / ((cameraFar - cameraNear) * z - cameraFar);
          return -viewZ;
        }
        float aoFunc(vec2 uv) {
          if (!ssaoEnabled) return 1.0;
          float occlusion = 0.0; int samples = 8;
          float depth = readDepth(uv); if (depth >= cameraFar*0.99) return 1.0;
          float radius = ssaoRadius * 200.0;
          for (int i=0;i<8;i++){
            float a = float(i) / 8.0 * 6.2831853;
            vec2 o = vec2(cos(a), sin(a)) * radius / resolution;
            vec2 suv = clamp(uv + o, vec2(0.0), vec2(1.0));
            float d = readDepth(suv);
            float diff = d - depth; if (diff > 0.1 && diff < 5.0) occlusion += 1.0;
          }
          occlusion = (occlusion / 8.0) * ssaoIntensity;
          return clamp(1.0 - occlusion * 0.5, 0.3, 1.0);
        }
        void main(){
          vec3 color = texture2D(tDiffuse, vUv).rgb;
          float ao = aoFunc(vUv);
          gl_FragColor = vec4(color * ao, 1.0);
        }
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setSettings({enabled:e,intensity:t,radius:n}){e!==void 0&&(this.uniforms.ssaoEnabled.value=e),t!==void 0&&(this.uniforms.ssaoIntensity.value=t),n!==void 0&&(this.uniforms.ssaoRadius.value=n)}}class Hg extends ps{_sunDirView=new U(.6,.8,.1).normalize();constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjection:{value:new qe},invView:{value:new qe},sunDirView:{value:new U(.6,.8,.1).normalize()},enabled:{value:!0},intensity:{value:.1},steps:{value:32}},vertexShader:`
        varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} 
      `,fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tDepth; varying vec2 vUv; 
        uniform vec2 resolution; uniform float cameraNear; uniform float cameraFar; 
        uniform mat4 invProjection; uniform mat4 invView; uniform vec3 sunDirView; 
        uniform bool enabled; uniform float intensity; uniform int steps; 

        float readDepth(vec2 coord){
          float z=texture2D(tDepth,coord).r; if (z==1.0) return cameraFar; 
          float vz=(cameraNear*cameraFar)/((cameraFar-cameraNear)*z-cameraFar); return -vz; }

        vec3 marchVol(vec2 uv,float viewDepth){
          int N = max(1, steps); float stepLen=max(1.0, viewDepth)/float(N); 
          vec3 accum=vec3(0.0); float trans=1.0; 
          vec2 dirSS = normalize(sunDirView.xy + vec2(1e-5));
          vec2 stepUV = dirSS * 1.5 / min(resolution.x, resolution.y);
          vec2 sUv = uv; float z=viewDepth; 
          for(int i=0;i<128;i++){ if(i>=N) break; sUv -= stepUV; z -= stepLen; if(z<=0.0) break; 
            float sd = readDepth(sUv); if(sd < z - 0.5){ trans *= 0.96; } accum += vec3(1.0)*trans*0.02; trans*=0.99; }
          return accum * intensity; }

        void main(){ vec3 col = texture2D(tDiffuse,vUv).rgb; float vd = readDepth(vUv);
          if(enabled){ col += marchVol(vUv, vd); } gl_FragColor = vec4(col,1.0);} 
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjection.value.copy(e.projectionMatrixInverse),this.uniforms.invView.value.copy(e.matrixWorldInverse)}setSunDirWorld(e,t){const n=new Oe().setFromMatrix4(t.matrixWorldInverse);this._sunDirView.copy(e).applyMatrix3(n).normalize(),this.uniforms.sunDirView.value.copy(this._sunDirView)}setSettings({enabled:e,intensity:t,steps:n}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.intensity.value=t),n!==void 0&&(this.uniforms.steps.value=n)}}const Gg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ki extends fs{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,a,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Qt(r,a,{type:Rn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Qt(r,a,{type:Rn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const o=Gg;this.highPassUniforms=cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=cs.clone(Qs.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:Qs.vertexShader,fragmentShader:Qs.fragmentShader,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new no,this._fsQuad=new yc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ki.BlurDirectionX=new Ae(1,0);ki.BlurDirectionY=new Ae(0,1);class Wg extends ki{constructor(e,t){super(new Ae(e,t),.15,.5,.3)}setSize(e,t){super.setSize(e,t)}setSettings({enabled:e,strength:t,threshold:n}){e!==void 0&&(this.enabled=e),t!==void 0&&(this.strength=t),n!==void 0&&(this.threshold=n)}}class Xg extends ps{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1e3},enabled:{value:!0},baseDensity:{value:.002},maxDistance:{value:600},fogColor:{value:new Ce(.72,.82,.92)},dayLight:{value:1},exposure:{value:.9},contrast:{value:1.05},saturation:{value:1},invProjectionMatrix:{value:new qe},cameraMatrixWorld:{value:new qe},hazeEnabled:{value:!1},waterLevel:{value:42},hazeStart:{value:400},hazeDensity:{value:.004},hazeMaxMix:{value:.5},hazeAngleBoost:{value:0},hazePlaneBoost:{value:0},hazePlaneBand:{value:6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tDepth; varying vec2 vUv;
        uniform float cameraNear; uniform float cameraFar; uniform bool enabled;
        uniform float baseDensity; uniform float maxDistance; uniform vec3 fogColor; uniform float dayLight;
        uniform float exposure; uniform float contrast; uniform float saturation;
        // Horizon haze and matrices
        uniform mat4 invProjectionMatrix; uniform mat4 cameraMatrixWorld;
        uniform bool hazeEnabled; uniform float waterLevel; uniform float hazeStart; uniform float hazeDensity; uniform float hazeMaxMix;
        uniform float hazeAngleBoost; uniform float hazePlaneBoost; uniform float hazePlaneBand;
        float readDepth(vec2 uv){ float z=texture2D(tDepth,uv).r; if(z==1.0) return cameraFar; float vz=(cameraNear*cameraFar)/((cameraFar-cameraNear)*z-cameraFar); return -vz; }
        vec3 adjustColor(vec3 color, float contrast, float saturation) {
          color = (color - 0.5) * contrast + 0.5;
          float grey = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(grey), color, saturation);
          return color;
        }
        vec3 reconstructWorldPos(float viewDepth){
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 clip = vec4(ndc, 1.0, 1.0);
          vec4 viewFar = invProjectionMatrix * clip; viewFar /= viewFar.w;
          vec3 dirV = normalize(viewFar.xyz);
          float t = viewDepth / max(1e-4, -dirV.z);
          vec3 posV = dirV * t;
          vec4 posW = cameraMatrixWorld * vec4(posV, 1.0);
          return posW.xyz;
        }
        vec3 rayDirWorld(){
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 clip = vec4(ndc, 1.0, 1.0);
          vec4 viewFar = invProjectionMatrix * clip; viewFar /= viewFar.w;
          vec3 dirV = normalize(viewFar.xyz);
          return normalize((cameraMatrixWorld * vec4(dirV, 0.0)).xyz);
        }
        void main(){ vec3 col = texture2D(tDiffuse,vUv).rgb; col *= exposure; float d = readDepth(vUv); if(enabled){ bool bg = d >= cameraFar*0.99; d = min(d, maxDistance); float f = 1.0 - exp(-d * baseDensity); if (bg) { f *= mix(0.3, 1.0, clamp(dayLight,0.0,1.0)); } col = mix(col, fogColor, clamp(f,0.0,0.9)); }
        // Extra haze above water at far distance
        if (hazeEnabled) {
          float dV = readDepth(vUv);
          if (dV < cameraFar) {
            vec3 pw = reconstructWorldPos(dV);
            if (pw.y > waterLevel) {
              float dd = max(0.0, dV - hazeStart);
              float hf = 1.0 - exp(-dd * hazeDensity);
              // Boost haze near horizon angles (grazing rays)
              vec3 dw = rayDirWorld();
              float ang = 1.0 - smoothstep(0.12, 0.6, abs(dw.y)); // 1 near horizon, 0 when looking down/up
              hf *= (1.0 + hazeAngleBoost * ang);
              // Boost haze near the water plane within a small band above water
              float p = clamp(1.0 - (pw.y - waterLevel) / max(1e-3, hazePlaneBand), 0.0, 1.0);
              hf *= (1.0 + hazePlaneBoost * p);
              hf = clamp(hf, 0.0, hazeMaxMix);
              col = mix(col, fogColor, hf);
            }
          }
        }
        col = adjustColor(col, contrast, saturation); gl_FragColor = vec4(col,1.0);} 
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setSettings({enabled:e,baseDensity:t,maxDistance:n}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.baseDensity.value=t),n!==void 0&&(this.uniforms.maxDistance.value=n)}setColor(e){this.uniforms.fogColor.value.copy(e)}setDayLight(e){this.uniforms.dayLight.value=ke.clamp(e,0,1)}setColorGrading({exposure:e,contrast:t,saturation:n}){e!==void 0&&(this.uniforms.exposure.value=e),t!==void 0&&(this.uniforms.contrast.value=t),n!==void 0&&(this.uniforms.saturation.value=n)}setHorizonHaze(e){e.enabled!==void 0&&(this.uniforms.hazeEnabled.value=e.enabled),e.waterLevel!==void 0&&(this.uniforms.waterLevel.value=e.waterLevel),e.hazeStart!==void 0&&(this.uniforms.hazeStart.value=e.hazeStart),e.hazeDensity!==void 0&&(this.uniforms.hazeDensity.value=e.hazeDensity),e.hazeMaxMix!==void 0&&(this.uniforms.hazeMaxMix.value=e.hazeMaxMix),e.hazeAngleBoost!==void 0&&(this.uniforms.hazeAngleBoost.value=e.hazeAngleBoost),e.hazePlaneBoost!==void 0&&(this.uniforms.hazePlaneBoost.value=e.hazePlaneBoost),e.hazePlaneBand!==void 0&&(this.uniforms.hazePlaneBand.value=e.hazePlaneBand)}}class Yg extends ps{_sunNdc=new Ae(-10,-10);_sunVisible=0;_sunColor=new Ce(1,1,1);constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},sunNdc:{value:new Ae(-10,-10)},sunVisible:{value:0},sunColor:{value:new Ce(1,1,1)},intensity:{value:.6},enabled:{value:!0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tDepth; varying vec2 vUv; 
        uniform vec2 resolution; uniform float cameraNear; uniform float cameraFar; 
        uniform vec2 sunNdc; uniform float sunVisible; uniform vec3 sunColor; 
        uniform float intensity; uniform bool enabled;

        float readDepth(vec2 uv){ float z=texture2D(tDepth,uv).r; if(z==1.0) return cameraFar; float vz=(cameraNear*cameraFar)/((cameraFar-cameraNear)*z-cameraFar); return -vz; }

        // Soft circular glow
        float glow(vec2 uv, vec2 c, float r){ float d = length(uv - c); float x = clamp(1.0 - d/r, 0.0, 1.0); return x*x; }

        // Anisotropic streak along axis dir
        float streak(vec2 uv, vec2 c, vec2 dir, float len, float width){
          vec2 p = uv - c; float t = dot(p, dir); float l = clamp(1.0 - abs(t)/len, 0.0, 1.0); 
          float w = length(p - dir*t); float ga = exp(- (w*w) / (width*width));
          return l * ga; 
        }

        // Ghost sample at position along center<->sun axis
        float ghost(vec2 uv, vec2 center, vec2 sun, float k, float size){
          vec2 p = mix(center, sun, k); return glow(uv, p, size);
        }

        void main(){
          vec3 col = texture2D(tDiffuse, vUv).rgb;
          if (!enabled || sunVisible <= 0.0) { gl_FragColor = vec4(col,1.0); return; }

          vec2 sunSS = sunNdc * 0.5 + 0.5; // NDC->UV
          // Occlusion probe: if geometry present at sun pixel, reduce flare
          float occ = 1.0;
          if (sunSS.x >= 0.0 && sunSS.x <= 1.0 && sunSS.y >= 0.0 && sunSS.y <= 1.0) {
            float sd = readDepth(sunSS);
            // If depth is finite near cameraFar, assume sky -> no occluder; else reduce significantly
            occ = sd > cameraFar * 0.99 ? 1.0 : 0.15;
          }

          // Distance from center scales amount
          vec2 center = vec2(0.5, 0.5);
          float dc = clamp(1.0 - length(sunSS - center), 0.0, 1.0);
          float amount = intensity * sunVisible * occ * smoothstep(0.2, 0.9, dc);

          vec3 flare = vec3(0.0);
          // Halo around sun
          flare += sunColor * glow(vUv, sunSS, 0.15) * 0.8;
          // Streak along axis from sun to center
          vec2 dir = normalize(center - sunSS + vec2(1e-5));
          flare += sunColor * streak(vUv, sunSS, dir, 0.6, 0.01) * 0.35;
          flare += sunColor * streak(vUv, sunSS, vec2(-dir.y, dir.x), 0.4, 0.008) * 0.2;
          // Ghosts mirrored about center
          float sizes[4]; sizes[0]=0.06; sizes[1]=0.045; sizes[2]=0.035; sizes[3]=0.025;
          float ks[4]; ks[0]=-0.5; ks[1]=1.3; ks[2]=-1.1; ks[3]=1.8;
          for (int i=0;i<4;i++){
            float g = ghost(vUv, center, sunSS, ks[i], sizes[i]);
            flare += sunColor * g * (0.18 - 0.03*float(i));
          }

          col += flare * amount;
          gl_FragColor = vec4(col,1.0);
        }
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setEnabled(e){this.uniforms.enabled.value=e}setIntensity(e){this.uniforms.intensity.value=e}setSun(e,t,n){this._sunColor.copy(t);const s=new U().copy(e).multiplyScalar(1e4),r=new qe().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),a=new dt(s.x,s.y,s.z,1).applyMatrix4(r);let o=0;const l=this._sunNdc;a.w!==0&&l.set(a.x/a.w,a.y/a.w),e.y>0?a.w>0&&Math.abs(l.x)<=1.2&&Math.abs(l.y)<=1.2&&(o=1):o=0,this._sunVisible=o,this.uniforms.sunNdc.value.copy(l),this.uniforms.sunColor.value.copy(this._sunColor),this.uniforms.sunVisible.value=this._sunVisible}}class qg{composer;renderPass;ssao;vol;bloom;lens;fog;depthTarget;renderer;scene;constructor(e,t,n,s,r){this.composer=new zg(e),this.renderer=e,this.scene=t,this.depthTarget=new Qt(s,r,{minFilter:nt,magFilter:nt,format:Gt,depthBuffer:!0,stencilBuffer:!1}),this.depthTarget.depthTexture=new ur(s,r,li),this.depthTarget.depthTexture.format=hi,this.renderPass=new kg(t,n),this.composer.addPass(this.renderPass),this.ssao=new Vg,this.ssao.setDepthTexture(this.depthTarget.depthTexture),this.ssao.setSize(s,r),this.composer.addPass(this.ssao),this.vol=new Hg,this.vol.setDepthTexture(this.depthTarget.depthTexture),this.vol.setSize(s,r),this.composer.addPass(this.vol),this.bloom=new Wg(s,r),this.composer.addPass(this.bloom),this.lens=new Yg,this.lens.setDepthTexture(this.depthTarget.depthTexture),this.lens.setSize(s,r),this.composer.addPass(this.lens),this.fog=new Xg,this.fog.setDepthTexture(this.depthTarget.depthTexture),this.composer.addPass(this.fog)}setSize(e,t){this.depthTarget.setSize(e,t),this.composer.setSize(e,t),this.ssao.setSize(e,t),this.vol.setSize(e,t),this.bloom.setSize(e,t),this.lens.setSize(e,t)}update(e,t,n){const s=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,e),this.renderer.setRenderTarget(s),this.ssao.setCamera(e),this.vol.setCamera(e),this.vol.setSunDirWorld(t,e),this.lens.setCamera(e),this.lens.setSun(t,n??new Ce(1,1,.95),e),this.fog.setCamera(e)}setSSAO(e,t,n){this.ssao.setSettings({enabled:e,intensity:t,radius:n})}setVolumetrics(e,t,n){this.vol.setSettings({enabled:e,intensity:t,steps:n})}setBloom(e,t,n){this.bloom.setSettings({enabled:e,strength:t,threshold:n})}setLens(e,t){this.lens.setEnabled(e),this.lens.setIntensity(t)}setFog(e,t,n){this.fog.setSettings({enabled:e,baseDensity:t,maxDistance:n})}setHorizonHaze(e){this.fog.setHorizonHaze(e)}setFogColor(e){this.fog.setColor(e)}setFogDayLight(e){this.fog.setDayLight(e)}setColorGrading(e,t,n){this.fog.setColorGrading({exposure:e,contrast:t,saturation:n})}render(){this.composer.render()}}class Kg{renderer;shadowLight;shadowCameras=[];shadowMaps=[];cascadeDistances=[];dummyTexture;sunDir=new U(50,120,50).normalize();settings={enabled:!0,resolution:1024,cascades:3,shadowDistance:100,softness:2.5,bias:5e-4,normalBias:.02,intensity:.6};constructor(e,t){this.renderer=e,this.shadowLight=new pc(16777215,1),this.shadowLight.position.set(50,120,50),this.shadowLight.castShadow=this.settings.enabled,t.add(this.shadowLight.target),this.shadowLight.shadow.mapSize.width=this.settings.resolution,this.shadowLight.shadow.mapSize.height=this.settings.resolution,this.shadowLight.shadow.camera.near=.5,this.shadowLight.shadow.camera.far=this.settings.shadowDistance,t.add(this.shadowLight),this.initializeCascades(),this.enableShadowMapping(),this.dummyTexture=new vu(new Uint8Array([0,0,0,255]),1,1,Gt),this.dummyTexture.needsUpdate=!0}initializeCascades(){this.recomputeCascadeSplits(),this.shadowCameras=[],this.shadowMaps=[];for(let e=0;e<this.settings.cascades;e++){const t=new fr(-50,50,50,-50,.1,this.cascadeDistances[e]);this.shadowCameras.push(t);const n=new Qt(this.settings.resolution,this.settings.resolution,{minFilter:nt,magFilter:nt,format:Gt,depthBuffer:!0,stencilBuffer:!1});n.depthTexture=new ur(this.settings.resolution,this.settings.resolution,li),n.depthTexture.format=hi,this.shadowMaps.push(n)}}recomputeCascadeSplits(){const e=this.settings.cascades,t=.1,n=this.settings.shadowDistance,s=.7;this.cascadeDistances=[];for(let r=1;r<=e;r++){const a=r/e,o=t*Math.pow(n/t,a),l=t+(n-t)*a,c=s*(o-l)+l;this.cascadeDistances.push(c)}}enableShadowMapping(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qa,this.renderer.shadowMap.autoUpdate=!0}update(e,t){if(!this.settings.enabled){this.shadowLight.castShadow=!1,this.renderer.shadowMap.enabled=!1;return}this.shadowLight.castShadow=!0,this.renderer.shadowMap.enabled=!0,this.updateShadowLightPosition(),e.isPerspectiveCamera&&this.updateCascadeCameras(e),this.renderShadowMaps(t)}updateShadowLightPosition(){const e=Math.max(50,this.settings.shadowDistance),t=this.sunDir.clone().multiplyScalar(e);this.shadowLight.position.copy(t),this.shadowLight.target.position.set(0,0,0),this.shadowLight.target.updateMatrixWorld()}updateCascadeCameras(e){const t=e,n=this.sunDir.clone().normalize(),s=new U(0,1,0);this.recomputeCascadeSplits();let r=t.near;for(let a=0;a<this.settings.cascades;a++){const o=this.cascadeDistances[a],l=this.getSliceCornersWorld(t,r,o),c=l.reduce((P,M)=>P.add(M),new U).multiplyScalar(1/l.length),h=c.clone().sub(n.clone().multiplyScalar(200)),u=new qe().lookAt(h,c,s),d=new U(1/0,1/0,1/0),m=new U(-1/0,-1/0,-1/0);for(const P of l){const M=P.clone().applyMatrix4(u);d.min(M),m.max(M)}const v=this.shadowCameras[a],g=new U().subVectors(m,d),p=g.x/this.settings.resolution,f=g.y/this.settings.resolution;d.x=Math.floor(d.x/p)*p,d.y=Math.floor(d.y/f)*f,m.x=Math.floor(m.x/p)*p,m.y=Math.floor(m.y/f)*f;const E=new U(.5*(d.x+m.x),.5*(d.y+m.y),0),w=Math.max(m.x-d.x,m.y-d.y),S=.5*w,R=w/this.settings.resolution;E.x=Math.floor(E.x/R)*R,E.y=Math.floor(E.y/R)*R,v.left=E.x-S,v.right=E.x+S,v.bottom=E.y-S,v.top=E.y+S;const A=Math.max(.1,-m.z),b=Math.max(A+1,-d.z+25);v.near=A,v.far=b,v.updateProjectionMatrix(),v.matrixWorld.copy(new qe().copy(u).invert()),v.matrixWorldInverse.copy(u),v.updateMatrixWorld(!0),r=o}}getSliceCornersWorld(e,t,n){const s=[],r=new U().setFromMatrixPosition(e.matrixWorld),a=new U;e.getWorldDirection(a);const o=new U(0,1,0).applyQuaternion(e.quaternion),l=new U().crossVectors(a,o).normalize().multiplyScalar(-1),c=r.clone().addScaledVector(a,t),h=r.clone().addScaledVector(a,n),u=Math.tan(ke.degToRad(e.fov)*.5),d=u*t,m=d*e.aspect,v=u*n,g=v*e.aspect;return s.push(c.clone().addScaledVector(o,d).addScaledVector(l,-m)),s.push(c.clone().addScaledVector(o,-d).addScaledVector(l,-m)),s.push(c.clone().addScaledVector(o,-d).addScaledVector(l,m)),s.push(c.clone().addScaledVector(o,d).addScaledVector(l,m)),s.push(h.clone().addScaledVector(o,v).addScaledVector(l,-g)),s.push(h.clone().addScaledVector(o,-v).addScaledVector(l,-g)),s.push(h.clone().addScaledVector(o,-v).addScaledVector(l,g)),s.push(h.clone().addScaledVector(o,v).addScaledVector(l,g)),s}renderShadowMaps(e){const t=this.renderer.getRenderTarget(),n=[];e.traverse(s=>{const r=s.material;(Array.isArray(r)?r:[r]).forEach(o=>{if(o&&"isShaderMaterial"in o&&o.isShaderMaterial&&"uniforms"in o){const l=o,c=l.uniforms,h={};let u=!1;["shadowMap0","shadowMap1","shadowMap2","shadowMap3"].forEach(d=>{c[d]&&(h[d]=c[d].value,c[d].value=this.dummyTexture,u=!0)}),u&&n.push({material:l,values:h})}})});for(let s=0;s<this.shadowMaps.length;s++)this.renderer.setRenderTarget(this.shadowMaps[s]),this.renderer.clear(!0,!0,!0),this.renderer.render(e,this.shadowCameras[s]);this.renderer.setRenderTarget(t),n.forEach(({material:s,values:r})=>{const a=s.uniforms;Object.keys(r).forEach(o=>{a[o]&&(a[o].value=r[o])})})}getShadowUniforms(){const e={};for(let t=0;t<this.settings.cascades;t++){const n=this.shadowMaps[t];e[`shadowMap${t}`]={value:n.depthTexture??n.texture},e[`shadowMatrix${t}`]={value:new qe().multiply(this.shadowCameras[t].projectionMatrix).multiply(this.shadowCameras[t].matrixWorldInverse)}}return e.shadowCascades={value:this.settings.cascades},e.shadowDistances={value:this.cascadeDistances},e.shadowSoftness={value:this.settings.softness},e.shadowBias={value:this.settings.bias},e.shadowNormalBias={value:this.settings.normalBias},e.shadowIntensity={value:this.settings.enabled?this.settings.intensity:0},e.shadowResolution={value:this.settings.resolution},e}setSunDirection(e){this.sunDir.copy(e).normalize()}updateSettings(e){const t=this.settings.resolution,n=this.settings.cascades,s={...this.settings};if(this.settings={...this.settings,...e},t!==this.settings.resolution||n!==this.settings.cascades)this.dispose(),this.initializeCascades();else if(s.shadowDistance!==this.settings.shadowDistance){this.cascadeDistances=[];for(let r=0;r<this.settings.cascades;r++){const a=(r+1)/this.settings.cascades,o=this.settings.shadowDistance*Math.pow(a,1.5);this.cascadeDistances.push(o)}}this.shadowLight.shadow.mapSize.setScalar(this.settings.resolution),this.shadowLight.shadow.camera.far=this.settings.shadowDistance,this.shadowLight.castShadow=this.settings.enabled,this.renderer.shadowMap.enabled=this.settings.enabled,this.settings.enabled&&(this.renderer.shadowMap.needsUpdate=!0);for(let r=0;r<this.shadowCameras.length;r++)this.shadowCameras[r].far=this.settings.shadowDistance,this.shadowCameras[r].updateProjectionMatrix()}getSettings(){return{...this.settings}}setEnabled(e){this.settings.enabled=e,this.renderer.shadowMap.enabled=e,this.shadowLight.castShadow=e}dispose(){this.shadowMaps.forEach(e=>e.dispose()),this.shadowMaps=[],this.shadowCameras=[]}}class Zg{sun;hemi;t=0;paused=!1;cycleSeconds=180;sunDir=new U(1,1,1).normalize();sunColor=new Ce(16777215);constructor(e,t={}){this.cycleSeconds=t.cycleSeconds??180,this.paused=!!t.paused,this.t=(t.initialTime??.25)%1,this.sun=new pc(16777215,1),this.sun.castShadow=!1,e.add(this.sun),this.hemi=new Du(2241348,1052688,.05),this.hemi.position.set(0,1,0),e.add(this.hemi),this.recomputeLighting()}update(e){if(!this.paused){const t=e/Math.max(.001,this.cycleSeconds);this.t=(this.t+t)%1,this.recomputeLighting()}}setTime(e){this.t=(e%1+1)%1,this.recomputeLighting()}pause(e){this.paused=e}setCycleSeconds(e){this.cycleSeconds=Math.max(1,e|0)}getTime(){return this.t}isPaused(){return this.paused}getSunDirection(e=new U){return e.copy(this.sunDir)}getSunColor(e=new Ce){return e.copy(this.sunColor)}getElevationRadians(){return Math.asin(Math.sin(this.t*Math.PI*2))}recomputeLighting(){const e=this.t*Math.PI*2,t=Math.PI*.25,n=new U(Math.cos(t),0,Math.sin(t)),s=new U(0,1,0);this.sunDir.copy(n).multiplyScalar(Math.cos(e)).addScaledVector(s,Math.sin(e)).normalize(),this.sun.position.copy(this.sunDir).multiplyScalar(500),this.sun.target.position.set(0,0,0),this.sun.target.updateMatrixWorld();const a=Math.sin(e),o=ke.clamp(a,0,1);this.sunColor.copy(jg(o));const l=ke.lerp(0,1.1,rr(0,.7,o));this.sun.intensity=l,this.sun.color.copy(this.sunColor);const c=1-rr(.05,.2,o);this.hemi.intensity=ke.lerp(.05,.15,c),this.hemi.color.setRGB(.16,.2,.26),this.hemi.groundColor.setRGB(.05,.05,.06)}}function rr(i,e,t){const n=ke.clamp((t-i)/Math.max(1e-5,e-i),0,1);return n*n*(3-2*n)}function jg(i){const e=new Ce(1,.58,.25),t=new Ce(1,.95,.9),n=new Ce(1,1,.98),s=rr(0,.25,i),r=rr(.25,.8,i),a=e.clone().lerp(t,s),o=t.clone().lerp(n,r);return a.lerp(o,r)}class mr extends Pt{constructor(){const e=mr.SkyShader,t=new Tt({name:e.name,uniforms:cs.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:zt,depthWrite:!1});super(new Gn(1,1,1),t),this.isSky=!0}}mr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new U},up:{value:new U(0,1,0)}},vertexShader:`
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

		}`};class Qg{sky;sun=new U;uniforms;constructor(e,t){const n=new mr;n.scale.setScalar(45e4),this.sky=n,e.add(n);const s=n.material;this.uniforms=s.uniforms;const r={turbidity:t?.turbidity??2,rayleigh:t?.rayleigh??1.5,mieCoefficient:t?.mieCoefficient??.005,mieDirectionalG:t?.mieDirectionalG??.8};this.setParams(r),this.setSunDirection(new U(1,1,.2).normalize())}setParams(e){this.uniforms.turbidity.value=e.turbidity,this.uniforms.rayleigh.value=e.rayleigh,this.uniforms.mieCoefficient.value=e.mieCoefficient,this.uniforms.mieDirectionalG.value=e.mieDirectionalG}setSunDirection(e){const t=new U().copy(e).normalize();this.sun.copy(t).multiplyScalar(4e5),this.uniforms.sunPosition.value.copy(this.sun)}}class Jg{mesh;material;start=performance.now();intensity;constructor(e,t={}){const n=t.radius??1e3;this.intensity=t.intensity??1;const s=new ro(n,32,16);s.scale(1,1,-1),this.material=new Tt({side:zt,transparent:!0,depthWrite:!1,depthTest:!1,blending:er,uniforms:{uTime:{value:0},uVisibility:{value:0},uIntensity:{value:this.intensity}},vertexShader:`
        varying vec3 vWorld;
        void main(){
          vec4 wp = modelMatrix * vec4(position,1.0);
          vWorld = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        varying vec3 vWorld;
        uniform float uTime;
        uniform float uVisibility;
        uniform float uIntensity;
        
        // Hash from IQ
        float hash(vec2 p){
          p = vec2(dot(p, vec2(127.1,311.7)), dot(p, vec2(269.5,183.3)));
          return fract(sin(p.x+p.y)*43758.5453123);
        }
        
        float star(vec2 uv){
          // grid cell
          vec2 gv = fract(uv) - 0.5;
          vec2 id = floor(uv);
          float n = hash(id);
          vec2 p = (vec2(hash(id+0.1), hash(id+2.3)) - 0.5) * 0.8;
          float d = length(gv - p);
          float m = smoothstep(0.05, 0.0, d);
          // twinkle
          float tw = 0.5 + 0.5 * sin(uTime*0.5 + n*6.2831);
          return m * tw;
        }
        
        void main(){
          // Project world direction to equirectangular uv
          vec3 d = normalize(vWorld);
          float u = atan(d.z, d.x) / 6.2831853 + 0.5;
          float v = acos(clamp(d.y, -1.0, 1.0)) / 3.1415926;
          vec2 uv = vec2(u*200.0, v*100.0);
          float s = star(uv);
          // Use additive blending with visibility as alpha so effect is linear in the star mask
          // (avoids squaring the mask which made stars too dim)
          vec3 col = vec3(s) * uIntensity;
          gl_FragColor = vec4(col, uVisibility);
        }
      `}),this.mesh=new Pt(s,this.material),this.mesh.renderOrder=2,e.add(this.mesh)}setVisibility(e){this.material.uniforms.uVisibility.value=ke.clamp(e,0,1)}setIntensity(e){this.intensity=e,this.material.uniforms.uIntensity.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}}class $g{mesh;material;start=performance.now();wind;altitude;constructor(e,t={}){const n=t.altitude??200;this.altitude=n;const s=new ds(4e3,4e3,1,1);s.rotateX(-Math.PI/2),s.translate(0,n,0);const r=t.windDirection??Math.PI*.25,a=t.windSpeed??5;this.wind=new Ae(Math.cos(r),Math.sin(r)).multiplyScalar(a),this.material=new Tt({transparent:!0,depthWrite:!1,side:un,uniforms:{uTime:{value:0},uCoverage:{value:t.coverage??.45},uDensity:{value:t.density??.65},uWind:{value:new Ae(this.wind.x,this.wind.y)},uDayLight:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main(){
          vUv = uv * 40.0; // tile coverage
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;
        uniform float uCoverage;
        uniform float uDensity;
        uniform vec2 uWind;
        uniform float uDayLight;

        // 2D value noise (simple hash-based)
        float hash(vec2 p){ return fract(sin(dot(p, vec2(41.0,289.0))) * 45758.5453); }
        float noise(vec2 p){
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f*f*(3.0-2.0*f);
          return mix(a, b, u.x) + (c - a)*u.y*(1.0 - u.x) + (d - b)*u.x*u.y;
        }
        
        float fbm(vec2 p){
          float v = 0.0;
          float a = 0.5;
          for(int i=0;i<5;i++){
            v += a * noise(p); p *= 2.02; a *= 0.5;
          }
          return v;
        }

        void main(){
          vec2 uv = vUv + uWind * (uTime * 0.01);
          float base = fbm(uv * 0.5) * 0.9 + fbm(uv * 1.7) * 0.1;
          float coverage = uCoverage; // 0..1 higher = more clouds
          float density = uDensity;
          float clouds = smoothstep(coverage, coverage + 0.25*(1.0-density), base);
          // soft edges
          clouds = pow(clouds, 1.5);
          // Daylight-driven brightness: dim clouds significantly at night, full bright at day.
          float brightness = mix(0.15, 1.0, clamp(uDayLight, 0.0, 1.0));
          vec3 col = vec3(brightness) * clouds;
          float alpha = clouds * 0.6;
          gl_FragColor = vec4(col, alpha);
        }
      `}),this.mesh=new Pt(s,this.material),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=1,e.add(this.mesh)}setCoverage(e){this.material.uniforms.uCoverage.value=e}setDensity(e){this.material.uniforms.uDensity.value=e}setWind(e,t){this.wind.set(Math.cos(e),Math.sin(e)).multiplyScalar(t),this.material.uniforms.uWind.value.copy(this.wind)}setEnabled(e){this.mesh.visible=e}setDayLight(e){this.material.uniforms.uDayLight.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}getCoverage(){return this.material.uniforms.uCoverage.value}getDensity(){return this.material.uniforms.uDensity.value}getAltitude(){return this.altitude}getWind(e=new Ae){return e.copy(this.wind)}}function ev(i,e){if(i.renderer?.exposure!==void 0&&e.setRendererExposure(i.renderer.exposure),i.timeOfDay){const{t,paused:n,cycleSeconds:s}=i.timeOfDay;e.setTime(ke.clamp(t,0,1)),e.setTimePaused(!!n),e.setCycleSeconds(Math.max(1,Math.floor(s)))}i.clouds&&e.setClouds&&e.setClouds(i.clouds)}const wc=Math.sqrt(3),tv=.5*(wc-1),Qi=(3-wc)/6,El=i=>Math.floor(i)|0,Tl=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Bn(i=Math.random){const e=nv(i),t=new Float64Array(e).map(s=>Tl[s%12*2]),n=new Float64Array(e).map(s=>Tl[s%12*2+1]);return function(r,a){let o=0,l=0,c=0;const h=(r+a)*tv,u=El(r+h),d=El(a+h),m=(u+d)*Qi,v=u-m,g=d-m,p=r-v,f=a-g;let E,w;p>f?(E=1,w=0):(E=0,w=1);const S=p-E+Qi,R=f-w+Qi,A=p-1+2*Qi,b=f-1+2*Qi,P=u&255,M=d&255;let y=.5-p*p-f*f;if(y>=0){const B=P+e[M],z=t[B],X=n[B];y*=y,o=y*y*(z*p+X*f)}let C=.5-S*S-R*R;if(C>=0){const B=P+E+e[M+w],z=t[B],X=n[B];C*=C,l=C*C*(z*S+X*R)}let O=.5-A*A-b*b;if(O>=0){const B=P+1+e[M+1],z=t[B],X=n[B];O*=O,c=O*O*(z*A+X*b)}return 70*(o+l+c)}}function nv(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=t[n];t[n]=t[s],t[s]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const Dt=42,bl=3,iv=.7,Al=.02,sv=.15,Cl=.008,rv=25,Rl=.02,av=12,Dl=.08,ov=2,Gs=.015,Pl=6,Ll=-.3,lv=8,Ul=.012;function zn(i){let e=i>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function ea(i,e,t,n=4,s=2,r=.5){let a=1,o=0,l=0,c=e,h=t;for(let u=0;u<n;u++)o+=i(c,h)*a,l+=a,c*=s,h*=s,a*=r;return l>0?o/l:0}function Il(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function ii(i,e,t,n){const s=zn(t^2654435769),r=zn(t^2246822507),a=zn(t^3266489909),o=zn(t^668265263),l=zn(t^2722868950),c=zn(t^1003724304),h=zn(t^439041101),u=zn(t^1601842716),d=Bn(s),m=Bn(r),v=Bn(a),g=Bn(o),p=Bn(l),f=Bn(c),E=Bn(h),w=Bn(u),S=n||336/2,R=p(i*Gs,e*Gs)*Pl,A=f(i*Gs,e*Gs)*Pl,b=i+R,P=e+A,y=Math.sqrt(i*i+e*e)/S,C=d(i*Al,e*Al),O=iv+C*sv;if(!(y<O)){const W=ea((Ke,ye)=>w(Ke*Ul,ye*Ul),i,e,3,2,.5),ne=Math.max(0,y-O),te=Math.max(1e-6,1-O),Se=Math.min(1,ne/te),Ee=Il(0,1,Se),Ie=2,Ye=Ie+(25-Ie)*Ee,D=W*3,Je=Ye+D,Te=Dt-Math.floor(Je);return Math.max(bl+1,Te)}const z=1-Il(O*.6,O*.95,y),X=Dt+z*20,Z=ea((W,ne)=>m(W*Cl,ne*Cl),b,P,4,2,.6)*rv*z,ie=ea((W,ne)=>v(W*Rl,ne*Rl),b,P,3,2,.5)*av*z,ge=g(b*Dl,P*Dl)*ov,Ne=E(i*.01,e*.01),Ge=Ne<Ll?(Ne-Ll)*lv*z:0,Ve=X+Z+ie+ge+Ge;return Math.floor(Math.max(bl+1,Ve))}function cv(i,e=0,t=0,n){const s=[{x:e,z:t},{x:0,z:0},{x:10,z:10},{x:-10,z:-10},{x:20,z:0},{x:0,z:20}];let r={x:e,z:t,height:Dt-10};for(const a of s){const o=ii(a.x,a.z,i,n);o>Dt&&o>r.height&&(r={x:a.x,z:a.z,height:o})}if(r.height<=Dt)for(const a of s){const o=ii(a.x,a.z,i,n);o>r.height&&(r={x:a.x,z:a.z,height:o})}return{x:r.x,y:r.height+15,z:r.z}}class Ec extends Tt{constructor(e){const t=new Ce(e.color??4891608),n=Math.max(.001,e.tileScale??1),s=!!e.useWorldUV,r=e.bounds??{minX:-1e9,maxX:1e9,minZ:-1e9,maxZ:1e9};super({transparent:!0,depthWrite:!1,depthTest:!0,side:un,uniforms:{uColor:{value:t},uTime:{value:0},uMap:{value:e.map??null},uUseMap:{value:!!e.map},uTileScale:{value:n},uUseWorldUV:{value:s},uInnerMinX:{value:r.minX},uInnerMaxX:{value:r.maxX},uInnerMinZ:{value:r.minZ},uInnerMaxZ:{value:r.maxZ},uEdgeStrength:{value:0},uEdgeWidth:{value:2},uAlpha:{value:1},uRefractStrength:{value:.18},uEta:{value:.75},uWaveAmp:{value:.15},uWaveScale:{value:.035},uFresnel:{value:.08},uDeTileEnabled:{value:!0},uDeTileStrength:{value:1.2},uDeTileStart:{value:60},uDeTileEnd:{value:160}},vertexShader:`
        varying vec3 vWorld;
        varying vec2 vUvVary;
        varying vec3 vNormalVary;
        void main(){
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorld = wp.xyz;
          vUvVary = uv;
          vNormalVary = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,fragmentShader:`
        uniform vec3 uColor; uniform float uTime; varying vec3 vWorld;
        varying vec2 vUvVary; varying vec3 vNormalVary;
        uniform sampler2D uMap; uniform bool uUseMap; uniform float uTileScale; uniform bool uUseWorldUV;
        uniform float uInnerMinX, uInnerMaxX, uInnerMinZ, uInnerMaxZ;
        uniform float uEdgeStrength; uniform float uEdgeWidth; uniform float uAlpha;
        // Refraction uniforms
        uniform float uRefractStrength; uniform float uEta; uniform float uWaveAmp; uniform float uWaveScale; uniform float uFresnel;
        // De-tiling uniforms
        uniform bool uDeTileEnabled; uniform float uDeTileStrength; uniform float uDeTileStart; uniform float uDeTileEnd;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); float a=hash(i); float b=hash(i+vec2(1.0,0.0)); float c=hash(i+vec2(0.0,1.0)); float d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }
        vec2 uvY(vec3 w){ return vec2(w.x / uTileScale, -w.z / uTileScale); }
        vec2 uvX(vec3 w){ return vec2(-w.z / uTileScale, w.y / uTileScale); }
        vec2 uvZ(vec3 w){ return vec2(w.x / uTileScale, w.y / uTileScale); }
        vec3 sampleTriPlanar(vec3 wpos, vec3 n){
          vec3 an = abs(normalize(n));
          an = max(an, vec3(1e-4));
          an /= (an.x + an.y + an.z);
          vec3 cx = texture2D(uMap, uvX(wpos)).rgb;
          vec3 cy = texture2D(uMap, uvY(wpos)).rgb;
          vec3 cz = texture2D(uMap, uvZ(wpos)).rgb;
          return cx*an.x + cy*an.y + cz*an.z;
        }
        mat2 rot2(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }
        vec3 sampleWaterColor(){
          if (!uUseMap) {
            vec2 p = vWorld.xz * 0.03;
            float n = noise(p + vec2(uTime*0.03, -uTime*0.02));
            float m = noise(p*2.0 - vec2(uTime*0.06, uTime*0.05));
            float wave = smoothstep(0.35, 0.75, 0.5*n + 0.5*m);
            vec3 hi = mix(uColor, vec3(0.85, 0.93, 1.0), 0.25);
            // Subtle fake refraction by brightening at grazing angles
            vec3 V = normalize(cameraPosition - vWorld);
            vec3 N = normalize(vNormalVary);
            float fres = pow(max(0.0, 1.0 - dot(N, V)), 5.0);
            vec3 base = mix(uColor, hi, wave * 0.35);
            return mix(base, vec3(1.0), uFresnel * fres);
          }
          if (uUseWorldUV) {
            // Derive a perturbed normal from animated noise for subtle waves
            vec2 p = vWorld.xz * uWaveScale + vec2(uTime*0.03, -uTime*0.02);
            float n0 = noise(p);
            float nx = noise(p + vec2(0.75, 0.0));
            float nz = noise(p + vec2(0.0, 0.75));
            vec2 grad = vec2(nx - n0, nz - n0);
            vec3 N = normalize(vec3(-grad.x * uWaveAmp, 1.0, -grad.y * uWaveAmp));
            vec3 V = normalize(cameraPosition - vWorld);
            vec3 R = refract(-V, N, uEta);
            // Offset sample position along refracted direction
            vec3 wpos = vWorld + R * uRefractStrength;
            // Base color sample
            vec3 col0 = sampleTriPlanar(wpos, N);
            // Far-distance de-tiling: blend a second rotated/offset sample at distance
            float dist = length(cameraPosition - vWorld);
            float dt = (uDeTileEnabled) ? smoothstep(uDeTileStart, uDeTileEnd, dist) : 0.0;
            if (dt > 0.0) {
              vec3 w1 = wpos;
              vec2 h = vWorld.xz * 0.01; // low-frequency domain to keep offset stable
              float r1 = noise(h + vec2(3.17, -2.41));
              float r2 = noise(h + vec2(-1.73, 4.06));
              vec2 off = (vec2(r1, r2) - 0.5) * (uDeTileStrength);
              vec2 xz = rot2(0.61) * (wpos.xz + off);
              w1.x = xz.x; w1.z = xz.y;
              vec3 col1 = sampleTriPlanar(w1, N);
              col0 = mix(col0, col1, clamp(dt * 0.5, 0.0, 0.5));
            }
            vec3 col = col0;
            // Fresnel rim for extra depth
            float fres = pow(max(0.0, 1.0 - dot(N, V)), 5.0);
            col = mix(col, vec3(1.0), uFresnel * fres);
            return col;
          } else {
            // Fallback to mesh UVs (less ideal for steep angles)
            return texture2D(uMap, vUvVary).rgb;
          }
        }
        void main(){
          vec3 col = sampleWaterColor();
          // Optional subtle ocean-only edge softening (disabled by default)
          float outside = max(max(uInnerMinX - vWorld.x, vWorld.x - uInnerMaxX), max(uInnerMinZ - vWorld.z, vWorld.z - uInnerMaxZ));
          float f = uEdgeStrength * smoothstep(0.0, max(uEdgeWidth, 1e-3), outside);
          col = mix(col, vec3(0.88, 0.94, 1.0), f);
          gl_FragColor = vec4(col, clamp(uAlpha, 0.0, 1.0));
        }
      `})}setTime(e){this.uniforms.uTime.value=e}setColor(e){this.uniforms.uColor.value.copy(e)}setMap(e){this.uniforms.uMap.value=e,this.uniforms.uUseMap.value=!!e}setTileScale(e){this.uniforms.uTileScale.value=Math.max(.001,e)}setUseWorldUV(e){this.uniforms.uUseWorldUV.value=!!e}setBounds(e){this.uniforms.uInnerMinX.value=e.minX,this.uniforms.uInnerMaxX.value=e.maxX,this.uniforms.uInnerMinZ.value=e.minZ,this.uniforms.uInnerMaxZ.value=e.maxZ}setEdge(e,t){this.uniforms.uEdgeStrength.value=Math.max(0,e),this.uniforms.uEdgeWidth.value=Math.max(.1,t)}setAlpha(e){const t=Math.max(0,Math.min(1,e));this.uniforms.uAlpha.value=t,this.depthWrite=t>=1}setRefraction(e,t=.75,n=.15,s=.035,r=.08){this.uniforms.uRefractStrength.value=Math.max(0,e),this.uniforms.uEta.value=Math.max(.01,Math.min(1,t)),this.uniforms.uWaveAmp.value=Math.max(0,n),this.uniforms.uWaveScale.value=Math.max(1e-4,s),this.uniforms.uFresnel.value=Math.max(0,r)}setDeTiling(e){e.enabled!==void 0&&(this.uniforms.uDeTileEnabled.value=!!e.enabled),e.strength!==void 0&&(this.uniforms.uDeTileStrength.value=Math.max(0,e.strength)),e.start!==void 0&&(this.uniforms.uDeTileStart.value=Math.max(0,e.start)),e.end!==void 0&&(this.uniforms.uDeTileEnd.value=Math.max(this.uniforms.uDeTileStart.value,e.end))}}class hv{group;material;time=0;seabedMaterial=null;seabedGroup=null;blockMaterialSource=null;constructor(e,t){this.group=new yt,this.group.name="OceanHorizon",this.material=new Ec({map:t.map??null,color:t.color,tileScale:t.tileScale??1,useWorldUV:!0,bounds:t.bounds}),this.material.setAlpha(.7),this.material.setRefraction(.18,.75,.12,.035,.06);const{minX:n,maxX:s,minZ:r,maxZ:a}=t.bounds,o=t.waterLevel+1-.001,l=0,c=Math.max(t.farDistance,1),h=[{x0:n,x1:s,z0:r-c,z1:r+l},{x0:n-c,x1:n+l,z0:r-c,z1:r+l},{x0:s-l,x1:s+c,z0:r-c,z1:r+l},{x0:n-c,x1:n+l,z0:r,z1:a},{x0:s-l,x1:s+c,z0:r,z1:a},{x0:n,x1:s,z0:a-l,z1:a+c},{x0:n-c,x1:n+l,z0:a-l,z1:a+c},{x0:s-l,x1:s+c,z0:a-l,z1:a+c}];for(const u of h){const d=new Pt(this.makeQuad(u.x0,u.z0,u.x1,u.z1,o),this.material);d.frustumCulled=!0,d.renderOrder=2,this.group.add(d)}e.add(this.group),t.enableSeabed&&(this.blockMaterialSource=t.blockMaterialSource??null,this.buildSeabed(e,t))}makeQuad(e,t,n,s,r){const a=new Float32Array([e,r,t,n,r,t,n,r,s,e,r,t,n,r,s,e,r,s]),o=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),l=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),c=new Yt;return c.setAttribute("position",new ut(a,3)),c.setAttribute("uv",new ut(o,2)),c.setAttribute("normal",new ut(l,3)),c.computeBoundingBox(),c.computeBoundingSphere(),c}setColor(e){this.material.setColor(e)}setMap(e,t=1){this.material.setMap(e),this.material.setTileScale(t)}update(e){this.time+=e,this.material.setTime(this.time),this.seabedMaterial&&this.blockMaterialSource&&this.syncSeabedUniforms(this.blockMaterialSource)}dispose(e){e.remove(this.group),this.group.traverse(t=>{const n=t.material;n&&(Array.isArray(n)?n:[n]).forEach(a=>a.dispose()),t.geometry?.dispose()}),this.seabedGroup&&(e.remove(this.seabedGroup),this.seabedGroup.traverse(t=>{const n=t.material;n&&(Array.isArray(n)?n:[n]).forEach(a=>a.dispose()),t.geometry?.dispose()}))}async buildSeabed(e,t){const n=await this.loadSandTexture();if(n.wrapS=oi,n.wrapT=oi,n.colorSpace=Et,n.magFilter=nt,n.minFilter=Yl,n.generateMipmaps=!0,n.needsUpdate=!0,this.seabedMaterial=new Sc(n,null),this.seabedMaterial.setMaterialProperties(.8,0,.3),this.blockMaterialSource){const E=this.blockMaterialSource,w=this.seabedMaterial,S=E.uniforms.envMap?.value;E.defines&&E.defines.USE_ENVMAP&&S&&(w.defines={...w.defines||{},USE_ENVMAP:!0},w.uniforms.envMap.value=S,w.needsUpdate=!0),this.syncSeabedUniforms(this.blockMaterialSource)}const{minX:s,maxX:r,minZ:a,maxZ:o}=t.bounds,l=t.seed??12345,c=t.worldRadius??Math.max(r-s,o-a)/2,h=Math.max(t.farDistance,1),u=this.sampleEdgeSeabedHeight({bounds:t.bounds,seed:l,worldRadius:c});this.seabedGroup=new yt,this.seabedGroup.name="SeabedHorizon";const d=[{x0:s,x1:r,z0:a-h,z1:a},{x0:s-h,x1:s,z0:a-h,z1:a},{x0:r,x1:r+h,z0:a-h,z1:a},{x0:s-h,x1:s,z0:a,z1:o},{x0:r,x1:r+h,z0:a,z1:o},{x0:s,x1:r,z0:o,z1:o+h},{x0:s-h,x1:s,z0:o,z1:o+h},{x0:r,x1:r+h,z0:o,z1:o+h}],m=Math.max(Math.max(Math.abs(s),Math.abs(r)),Math.max(Math.abs(a),Math.abs(o))),v=Math.max(me.x,me.z),g=m+v*6,p=g+v*15,f=t.waterLevel+1-.001;for(const E of d){const w=this.makeSteppedQuadWorldUV(E.x0,E.z0,E.x1,E.z1,u,g,p,f),S=new Pt(w,this.seabedMaterial);S.frustumCulled=!0,S.renderOrder=0,this.seabedGroup.add(S)}e.add(this.seabedGroup)}makeSteppedQuadWorldUV(e,t,n,s,r,a,o,l){const c=Math.abs(n-e),h=Math.abs(s-t),u=Math.max(8,Math.min(me.x,me.z))/2,d=Math.max(2,Math.min(64,Math.ceil(c/u))),m=Math.max(2,Math.min(64,Math.ceil(h/u))),v=(d+1)*(m+1),g=new Float32Array(v*3),p=new Float32Array(v*2),f=new Float32Array(v*3),E=(O,B)=>Math.sqrt(O*O+B*B);let w=0,S=0,R=0;for(let O=0;O<=m;O++){const B=O/m,z=t+(s-t)*B;for(let X=0;X<=d;X++){const G=X/d,Z=e+(n-e)*G,H=E(Z,z),ie=ke.clamp((H-a)/Math.max(.001,o-a),0,1),oe=ie*ie*(3-2*ie),ge=ke.lerp(r,l-.05,oe);g[w++]=Z,g[w++]=ge,g[w++]=z,p[S++]=Z,p[S++]=-z,f[R++]=0,f[R++]=1,f[R++]=0}}const A=d*m*6,b=new Uint32Array(A);let P=0;for(let O=0;O<m;O++)for(let B=0;B<d;B++){const z=O*(d+1)+B,X=z+1,G=z+(d+1),Z=G+1;b[P++]=z,b[P++]=G,b[P++]=X,b[P++]=X,b[P++]=G,b[P++]=Z}const M=new Yt;M.setAttribute("position",new ut(g,3)),M.setAttribute("uv",new ut(p,2)),M.setAttribute("normal",new ut(f,3));const y=new Float32Array(v*3),C=.7;for(let O=0;O<y.length;O++)y[O]=C;return M.setAttribute("color",new ut(y,3)),M.setIndex(new ut(b,1)),M.computeBoundingBox(),M.computeBoundingSphere(),M}sampleEdgeSeabedHeight(e){const{minX:t,maxX:n,minZ:s,maxZ:r}=e.bounds,{seed:a,worldRadius:o}=e,l=Math.max(4,Math.floor(Math.min(me.x,me.z)/2)),c=[],h=Math.max(1,Math.floor(Math.min(me.x,me.z)/8));for(let d=t;d<=n;d+=l){const m=ii(d,s-h,a,o);c.push(m)}for(let d=t;d<=n;d+=l){const m=ii(d,r+h,a,o);c.push(m)}for(let d=s;d<=r;d+=l){const m=ii(t-h,d,a,o);c.push(m)}for(let d=s;d<=r;d+=l){const m=ii(n+h,d,a,o);c.push(m)}let u;if(c.length){c.sort((m,v)=>m-v);const d=Math.max(0,Math.min(c.length-1,Math.floor(c.length*.25)));u=c[d]}else u=ii(n+h,s-h,a,o);return u-.001}loadSandTexture(){return new Promise((e,t)=>{new dr().load("/src/assets/textures/sand.png",n=>e(n),void 0,t)})}syncSeabedUniforms(e){if(!this.seabedMaterial)return;const t=this.seabedMaterial,n=e.uniforms,s=t.uniforms,r=["sunDirection","sunColor","dayLight","starLight","shadowMap0","shadowMap1","shadowMap2","shadowMap3","shadowMatrix0","shadowMatrix1","shadowMatrix2","shadowMatrix3","shadowCascades","shadowDistances","shadowSoftness","shadowBias","shadowNormalBias","shadowIntensity","shadowResolution","shadowBlendFraction","cloudShadowEnabled","cloudShadowIntensity","cloudShadowAltitude","cloudShadowScale","cloudCoverage","cloudDensity","cloudWind","time","materialFogEnabled"];for(const a of r)n[a]&&s[a]&&(s[a].value=n[a].value)}}class uv{canvas;camera;isPointerLocked=!1;mouseSensitivity=.002;onPointerLockChangedCallback=null;yawRadians=0;pitchRadians=0;onPointerLockChangeRef;onMouseMoveRef;onKeyDownRef;onKeyUpRef;onMouseDownRef;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;sprint=!1;jumpQueued=!1;jumpHeld=!1;leftClickQueued=!1;rightClickQueued=!1;numSlotQueued=null;pauseToggleQueued=!1;constructor(e,t){this.canvas=e,this.camera=t,this.camera.rotation.order="YXZ",this.onPointerLockChangeRef=this.onPointerLockChange.bind(this),this.onMouseMoveRef=this.onMouseMove.bind(this),this.onKeyDownRef=this.onKeyDown.bind(this),this.onKeyUpRef=this.onKeyUp.bind(this),this.onMouseDownRef=this.onMouseDown.bind(this),document.addEventListener("pointerlockchange",this.onPointerLockChangeRef),window.addEventListener("mousemove",this.onMouseMoveRef),window.addEventListener("keydown",this.onKeyDownRef),window.addEventListener("keyup",this.onKeyUpRef),window.addEventListener("mousedown",this.onMouseDownRef)}update(){const e=ke.degToRad(89);this.pitchRadians>e&&(this.pitchRadians=e),this.pitchRadians<-e&&(this.pitchRadians=-e),this.yawRadians=ke.euclideanModulo(this.yawRadians+Math.PI,Math.PI*2)-Math.PI,this.camera.rotation.y=this.yawRadians,this.camera.rotation.x=this.pitchRadians}getOrientation(){return{yaw:this.yawRadians,pitch:this.pitchRadians}}destroy(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeRef),window.removeEventListener("mousemove",this.onMouseMoveRef),window.removeEventListener("keydown",this.onKeyDownRef),window.removeEventListener("keyup",this.onKeyUpRef),window.removeEventListener("mousedown",this.onMouseDownRef)}onPointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.canvas,this.onPointerLockChangedCallback&&this.onPointerLockChangedCallback(this.isPointerLocked)}onMouseMove(e){if(!this.isPointerLocked)return;const t=e.movementX||0,n=e.movementY||0;this.yawRadians-=t*this.mouseSensitivity,this.pitchRadians-=n*this.mouseSensitivity}onPointerLockChanged(e){this.onPointerLockChangedCallback=e}requestPointerLock(){this.canvas&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()}exitPointerLock(){if(document.exitPointerLock)try{document.exitPointerLock()}catch{}}onMouseDown(e){this.isPointerLocked&&(e.button===0?this.leftClickQueued=!0:e.button===2&&(this.rightClickQueued=!0))}onKeyDown(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.sprint=!0;break;case"Space":this.jumpQueued=!0,this.jumpHeld=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":this.numSlotQueued=parseInt(e.code.slice(-1),10)-1;break;case"KeyP":this.pauseToggleQueued=!0;break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break;case"Space":this.jumpHeld=!1;break}}getMoveInput(){let e=0,t=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveLeft&&(e-=1),this.moveRight&&(e+=1);const n=Math.hypot(e,t);return n>0&&(e/=n,t/=n),{x:e,z:t}}isSprinting(){return this.sprint}isJumpHeld(){return this.jumpHeld}consumeJumpRequested(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeLeftClick(){return this.leftClickQueued?(this.leftClickQueued=!1,!0):!1}peekLeftClick(){return this.leftClickQueued}consumeRightClick(){return this.rightClickQueued?(this.rightClickQueued=!1,!0):!1}peekRightClick(){return this.rightClickQueued}consumeSelectedSlot(){const e=this.numSlotQueued;return this.numSlotQueued=null,e}consumePauseToggle(){return this.pauseToggleQueued?(this.pauseToggleQueued=!1,!0):!1}}class hn{camera;world;input;static ENABLE_LAND_STEP_ASSIST=!1;velocityY=0;grounded=!1;swimVelocity=new U;underwater=!1;stepCooldown=0;emergeLiftRemaining=0;emergeNudgeDir=new U;renderYOffsetY=0;elevationTween={from:0,elapsed:0,duration:0,active:!1};width=ct.width;height=ct.height;halfWidth=this.width/2;eyeHeight=Math.min(ct.height*.9,ct.height-.1);walkSpeed=ct.speed.walk;sprintSpeed=ct.speed.sprint;gravity=ct.gravity;jumpImpulse=ct.jump;static EPS=1e-5;bounds=null;constructor(e,t,n,s){this.camera=e,this.world=t,this.input=n,s&&(this.bounds=s),this.camera.rotation.order="YXZ"}update(e){this.renderYOffsetY!==0&&(this.camera.position.y-=this.renderYOffsetY,this.renderYOffsetY=0),this.stepCooldown>0&&(this.stepCooldown=Math.max(0,this.stepCooldown-e));const t=this.underwater,n=Dt+1-.001,s=this.camera.position.y+(this.height-this.eyeHeight),r=.3;if(this.underwater?s>n+r&&(this.underwater=!1):s<n-r&&(this.underwater=!0),this.underwater){t||(this.velocityY=0,this.grounded=!1),this.updateUnderwater(e),this.applyElevationTween(e);return}if(t){this.velocityY=Math.max(this.velocityY,this.swimVelocity.y);const X=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(X>.5){const G=Math.min(2,X*.6),Z=new U(this.swimVelocity.x,0,this.swimVelocity.z).normalize();this.camera.position.add(Z.multiplyScalar(G*e))}this.swimVelocity.set(0,0,0)}this.input.consumeJumpRequested()&&this.grounded&&(this.velocityY=this.jumpImpulse,this.grounded=!1);const o=this.input.getMoveInput(),l=this.input.isSprinting()?this.sprintSpeed:this.walkSpeed,c=this.camera.rotation.y,h=-Math.sin(c),u=-Math.cos(c),d=Math.cos(c),m=-Math.sin(c),v=d*o.x+h*o.z,g=m*o.x+u*o.z,p=Math.hypot(v,g),f=p>0?v/p:0,E=p>0?g/p:0,w=f*l*e,S=E*l*e;this.velocityY+=this.gravity*e;const R=this.velocityY*e;this.resolveAxis("x",w),this.resolveAxis("z",S);const A=this.resolveAxis("y",R);R<0&&A?(this.grounded=!0,this.velocityY=0):R!==0&&(this.grounded=!1);const b=this.getBaseY();if(b<0){const X=-b;this.camera.position.y+=X,this.velocityY=0,this.grounded=!0}const P=this.camera.position,M=this.getBaseY(),y=M+this.height,C=P.x-this.halfWidth,O=P.x+this.halfWidth,B=P.z-this.halfWidth,z=P.z+this.halfWidth;if(this.aabbIntersectsSolid(C,M,B,O,y,z)){let X=Math.floor(y)+1,G=0;const Z=10;for(;G<Z;){const H=X-this.height,ie=X;if(!this.aabbIntersectsSolid(C,H,B,O,ie,z)){this.camera.position.y=X-this.height+this.eyeHeight,this.velocityY=0,this.grounded=!0;break}X++,G++}}this.applyElevationTween(e)}updateUnderwater(e){const t=ct.swim,n=this.input.getMoveInput(),s=this.input.isSprinting()?t.sprintMultiplier:1,r=new U;this.camera.getWorldDirection(r),r.normalize();const a=new U(0,1,0),o=new U().crossVectors(r,a).normalize(),l=new U().addScaledVector(o,n.x).addScaledVector(r,n.z);l.lengthSq()>0&&l.normalize();const c=t.accel*s;if(l.lengthSq()>0&&this.swimVelocity.addScaledVector(l,c*e),this.input.isJumpHeld()){this.swimVelocity.y+=t.verticalAccel*e*s;const Ve=Dt+1-.001-this.camera.position.y;Ve>0&&(this.swimVelocity.y+=t.surfaceSnapStrength*Ve*e)}const h=this.gravity*t.gravityScale;this.swimVelocity.y+=h*e;const d=Dt+1-.001-this.camera.position.y;d>0&&d<t.floatBand&&this.swimVelocity.y<0&&(this.swimVelocity.y+=t.floatStrength*d*e);const m=Math.hypot(n.x,n.z);!this.input.isJumpHeld()&&m<.01&&(this.swimVelocity.y-=Math.max(0,ct.swim.sinkBias)*e);const v=Math.max(0,Math.min(10,t.drag)),g=Math.max(0,1-v*e);this.swimVelocity.multiplyScalar(g);const p=t.maxSpeed*s,f=new U(this.swimVelocity.x,0,this.swimVelocity.z),E=f.length();if(E>p&&(f.multiplyScalar(p/E),this.swimVelocity.x=f.x,this.swimVelocity.z=f.z),this.swimVelocity.y=ke.clamp(this.swimVelocity.y,-p,p),this.emergeLiftRemaining>0){const Ge=Math.min(t.emergeLiftSpeed*e,this.emergeLiftRemaining),Ve=this.camera.position.y;this.resolveAxis("y",Ge);const W=this.camera.position.y-Ve;this.emergeLiftRemaining-=Math.max(0,W);const ne=t.emergeNudgeSpeed*e;(this.emergeNudgeDir.x!==0||this.emergeNudgeDir.z!==0)&&(this.resolveAxis("x",this.emergeNudgeDir.x*ne),this.resolveAxis("z",this.emergeNudgeDir.z*ne)),this.emergeLiftRemaining<=0&&(this.emergeLiftRemaining=0,this.emergeNudgeDir.set(0,0,0))}const w=this.swimVelocity.x*e,S=this.swimVelocity.y*e,R=this.swimVelocity.z*e,A=this.resolveAxis("x",w);A&&(this.swimVelocity.x=0);const b=this.resolveAxis("z",R);b&&(this.swimVelocity.z=0);const P=this.getBaseY(),M=Dt+1-.001,y=M-this.camera.position.y<ct.swim.floatBand+.75,C=this.hasSolidGroundBelow(),O=l.lengthSq()>1e-6,B=Math.abs(M-this.camera.position.y)<.5;if(this.emergeLiftRemaining<=0&&this.stepCooldown<=0&&O&&(A||b||C||B)&&(y||this.input.isJumpHeld())){const Ge=Math.max(0,M-P),Ve=Math.max(0,M+ct.swim.stepOutHeadroom-P),W=Math.min(ct.swim.maxEmergeStepOut,Math.max(.25,Ve)),ne=Math.min(ct.swim.maxEmergeStepOut,Math.max(.25,Ge)),te=[W,ne,1.25,1,.75,.5,.25];let Se=0;for(const Ee of te)if(this.canStepUp(Ee,l)){Se=Ee;break}Se>0&&(this.emergeLiftRemaining=Se,this.emergeNudgeDir.copy(l),this.startElevationTween(Se),this.stepCooldown=.15)}this.resolveAxis("y",S)&&(this.swimVelocity.y=0),this.grounded=!1;const X=this.getBaseY();if(X<0){const Ge=-X;this.camera.position.y+=Ge,this.swimVelocity.y=Math.max(0,this.swimVelocity.y)}const G=this.camera.position,Z=this.getBaseY(),H=Z+this.height,ie=G.x-this.halfWidth,oe=G.x+this.halfWidth,ge=G.z-this.halfWidth,Ne=G.z+this.halfWidth;if(this.aabbIntersectsSolid(ie,Z,ge,oe,H,Ne)){let Ge=Math.floor(H)+1,Ve=0;const W=10;for(;Ve<W;){const ne=Ge-this.height,te=Ge;if(!this.aabbIntersectsSolid(ie,ne,ge,oe,te,Ne)){this.camera.position.y=Ge-this.height+this.eyeHeight,this.swimVelocity.y=0;break}Ge++,Ve++}}}resolveAxis(e,t){if(t===0)return!1;const n=this.camera.position,s=e==="x"?n.x+t:n.x,r=e==="y"?n.y+t:n.y,a=e==="z"?n.z+t:n.z,o=s-this.halfWidth,l=s+this.halfWidth,c=this.getBaseY(r),h=c+this.height,u=a-this.halfWidth,d=a+this.halfWidth;if(this.bounds&&(e==="x"||e==="z")){const v=this.halfWidth+hn.EPS;if(e==="x"){const g=this.bounds.minX+v,p=this.bounds.maxX-v;if(s<g)return this.camera.position.x=g,!0;if(s>p)return this.camera.position.x=p,!0}else if(e==="z"){const g=this.bounds.minZ+v,p=this.bounds.maxZ-v;if(a<g)return this.camera.position.z=g,!0;if(a>p)return this.camera.position.z=p,!0}}if(!this.aabbIntersectsSolid(o,c,u,l,h,d))return n.set(s,r,a),!1;const m=Math.sign(t);switch(e){case"x":{if(m>0){const g=Math.floor(l)-this.halfWidth-hn.EPS;n.x=g}else{const g=Math.floor(o)+1+this.halfWidth+hn.EPS;n.x=g}return!0}case"z":{if(m>0){const g=Math.floor(d)-this.halfWidth-hn.EPS;n.z=g}else{const g=Math.floor(u)+1+this.halfWidth+hn.EPS;n.z=g}return!0}case"y":{if(m>0){const g=Math.floor(h)-this.height-hn.EPS;n.y=g+this.eyeHeight}else{const g=Math.floor(c)+1+hn.EPS;n.y=g+this.eyeHeight}return!0}}}getBaseY(e=this.camera.position.y){return e-this.eyeHeight}startElevationTween(e,t=.12){this.elevationTween.from=-e,this.elevationTween.elapsed=0,this.elevationTween.duration=Math.max(.06,t),this.elevationTween.active=!0}applyElevationTween(e){if(!this.elevationTween.active)return;this.elevationTween.elapsed+=e;const t=Math.min(1,this.elevationTween.elapsed/this.elevationTween.duration),s=(a=>1-Math.pow(1-a,3))(t),r=this.elevationTween.from*(1-s);this.renderYOffsetY=r,this.camera.position.y+=this.renderYOffsetY,t>=1&&(this.elevationTween.active=!1,this.renderYOffsetY=0)}aabbIntersectsSolid(e,t,n,s,r,a){const o=Math.floor(e),l=Math.floor(t),c=Math.floor(n),h=Math.floor(s),u=Math.floor(r),d=Math.floor(a);for(let m=l;m<=u;m++)for(let v=c;v<=d;v++)for(let g=o;g<=h;g++)if(this.world.isBlockSolid(g,m,v))return!0;return!1}hasSolidGroundBelow(e=.01){const t=this.camera.position,n=this.halfWidth,s=this.getBaseY(t.y)-e,r=Math.floor(s),a=Math.floor(t.x-n),o=Math.floor(t.x+n),l=Math.floor(t.z-n),c=Math.floor(t.z+n);for(let h=l;h<=c;h++)for(let u=a;u<=o;u++)if(this.world.isBlockSolid(u,r,h))return!0;return!1}tryStepUp(e,t){if(e<=0)return!1;const n=this.camera.position,s=n.y+e,r=.08,a=t&&t.lengthSq()>1e-6?n.x+t.x*r:n.x,o=t&&t.lengthSq()>1e-6?n.z+t.z*r:n.z,l=hn.EPS*4,c=a-this.halfWidth+l,h=a+this.halfWidth-l,u=o-this.halfWidth+l,d=o+this.halfWidth-l,m=this.getBaseY(s)+l,v=m+this.height-l;if(this.aabbIntersectsSolid(c,m,u,h,v,d))return!1;const g=Math.floor(m-.01);let p=!1;for(let f=Math.floor(u);f<=Math.floor(d);f++){for(let E=Math.floor(c);E<=Math.floor(h);E++)if(this.world.isBlockSolid(E,g,f)){p=!0;break}if(p)break}return p?(this.camera.position.y=s,!0):!1}canStepUp(e,t){if(e<=0)return!1;const n=this.camera.position,s=n.y+e,r=.08,a=t&&t.lengthSq()>1e-6?n.x+t.x*r:n.x,o=t&&t.lengthSq()>1e-6?n.z+t.z*r:n.z,l=hn.EPS*4,c=a-this.halfWidth+l,h=a+this.halfWidth-l,u=o-this.halfWidth+l,d=o+this.halfWidth-l,m=this.getBaseY(s)+l,v=m+this.height-l;if(this.aabbIntersectsSolid(c,m,u,h,v,d))return!1;const g=Math.floor(m-.01);for(let p=Math.floor(u);p<=Math.floor(d);p++)for(let f=Math.floor(c);f<=Math.floor(h);f++)if(this.world.isBlockSolid(f,g,p))return!0;return!1}tryStepUpMulti(e,t){for(const n of e)if(this.tryStepUp(n,t))return t.x!==0&&this.resolveAxis("x",t.x*.08),t.z!==0&&this.resolveAxis("z",t.z*.08),n;return 0}isGrounded(){return this.grounded}setBounds(e){this.bounds=e}}function dv(i,e,t){const n=Math.hypot(i,e,t);return n===0?{x:0,y:0,z:0}:{x:i/n,y:e/n,z:t/n}}function ta(i){return Math.floor(i)}function fv(i,e,t,n=Vl.reach){const s=dv(t.x,t.y,t.z);if(s.x===0&&s.y===0&&s.z===0)return{hit:!1};let r=ta(e.x),a=ta(e.y),o=ta(e.z);const l=s.x>0?1:-1,c=s.y>0?1:-1,h=s.z>0?1:-1,u=r+(l>0?1:0),d=a+(c>0?1:0),m=o+(h>0?1:0),v=s.x!==0?(u-e.x)/s.x:Number.POSITIVE_INFINITY,g=s.y!==0?(d-e.y)/s.y:Number.POSITIVE_INFINITY,p=s.z!==0?(m-e.z)/s.z:Number.POSITIVE_INFINITY,f=s.x!==0?1/Math.abs(s.x):Number.POSITIVE_INFINITY,E=s.y!==0?1/Math.abs(s.y):Number.POSITIVE_INFINITY,w=s.z!==0?1/Math.abs(s.z):Number.POSITIVE_INFINITY;let S=v,R=g,A=p,b=0,P=r,M=a,y=o;const C=Math.ceil(n*3+10);for(let O=0;O<C&&(S<R?S<A?(P=r,M=a,y=o,r+=l,b=S,S+=f):(P=r,M=a,y=o,o+=h,b=A,A+=w):R<A?(P=r,M=a,y=o,a+=c,b=R,R+=E):(P=r,M=a,y=o,o+=h,b=A,A+=w),!(b>n));O++)if(i.isBlockSolid(r,a,o))return{hit:!0,hitCell:{x:r,y:a,z:o},placeCell:{x:P,y:M,z:y},t:b};return{hit:!1}}class pv{camera;world;scene;bounds=null;reach=Vl.reach;selection={hit:!1};boxMesh=null;constructor(e,t,n,s){this.camera=e,this.world=t,this.scene=n,s&&(this.bounds=s),this.boxMesh=this.createWireBox(),this.boxMesh.visible=!1,this.scene.add(this.boxMesh)}update(){const e=new U(0,0,-1).applyEuler(this.camera.rotation).normalize(),t=this.camera.position,n=fv(this.world,t,e,this.reach);let s=n.hit,r=n.hitCell,a=n.placeCell;if(this.bounds&&n.hit&&n.hitCell){const{minX:o,maxX:l,minZ:c,maxZ:h}=this.bounds;n.hitCell.x>=o&&n.hitCell.x<l&&n.hitCell.z>=c&&n.hitCell.z<h||(s=!1,r=void 0,a=void 0)}this.selection={hit:s,hitCell:r,placeCell:a},this.updateDebugMesh()}getSelection(){return this.selection}destroy(){this.boxMesh&&(this.scene.remove(this.boxMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.boxMesh=null)}updateDebugMesh(){if(!this.boxMesh)return;if(!this.selection.hit||!this.selection.hitCell){this.boxMesh.visible=!1;return}const{x:e,y:t,z:n}=this.selection.hitCell;this.boxMesh.visible=!0,this.boxMesh.position.set(e+.5,t+.5,n+.5)}createWireBox(){const e=new wu(new Gn(1.0001,1.0001,1.0001)),t=new dc({color:16776960}),n=new yu(e,t);return n.renderOrder=9999,n}}class mv{camera;world;input;selection;pipeline;playerController;airId=0;waterId=Jn("water")??5;grassId=Jn("grass")??1;dirtId=Jn("dirt")??2;stoneId=Jn("stone")??3;sandId=Jn("sand")??4;woodId=Jn("wood")??6;leavesId=Jn("leaves")??7;currentHit=null;nextActionAllowedAt=0;constructor(e,t,n,s,r,a){this.camera=e,this.world=t,this.input=n,this.selection=s,this.pipeline=r,this.playerController=a??null}update(){const e=(typeof performance<"u"?performance.now():Date.now())/1e3;if(this.input.consumeLeftClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+$s;const t=this.selection.getSelection();if(t.hit&&t.hitCell){const{x:n,y:s,z:r}=t.hitCell,a=this.world.getBlock(n,s,r);if(a!==this.airId){this.currentHit&&this.currentHit.x===n&&this.currentHit.y===s&&this.currentHit.z===r&&this.currentHit.id===a?this.currentHit.count+=1:this.currentHit={x:n,y:s,z:r,id:a,count:1};const o=this.getRequiredStrikes(a);if(this.currentHit.count>=o){const l=this.world.isBlockSolid(n,s,r);l&&window.__sfxBreak?.(),this.world.setBlock(n,s,r,this.airId),l&&this.shouldFillWithWater(n,s,r)&&this.world.setBlock(n,s,r,this.waterId),Ic(a,1),this.remeshAffectedChunks(n,s,r),this.currentHit=null}}}}if(this.input.consumeRightClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+$s;const t=this.selection.getSelection();if(t.hit&&t.placeCell){const{x:n,y:s,z:r}=t.placeCell,a=this.evaluatePlacement(n,s,r);if(a.canPlace){const o=Nc();o!==null&&Fc()&&(a.elevatePlayer&&(this.camera.position.y+=1,this.playerController?.startElevationTween(1)),this.world.setBlock(n,s,r,o),this.remeshAffectedChunks(n,s,r),window.__sfxPlace?.())}}}}getRequiredStrikes(e){return e===this.leavesId||e===this.grassId?1:e===this.dirtId||e===this.sandId?2:e===this.stoneId||e===this.woodId?3:1}shouldFillWithWater(e,t,n){if(t!==Dt)return!1;const s=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(const[r,a]of s)if(this.world.getBlock(e+r,t,n+a)===this.waterId)return!0;return!1}remeshAffectedChunks(e,t,n){const{cx:s,cy:r,cz:a,lx:o,ly:l,lz:c}=js(e,t,n),h=this.world.getChunk(s,r,a);h&&this.pipeline.requestRemesh(s,r,a,h.getData());const u=[];o===0&&u.push([s-1,r,a]),o===me.x-1&&u.push([s+1,r,a]),l===0&&u.push([s,r-1,a]),l===me.y-1&&u.push([s,r+1,a]),c===0&&u.push([s,r,a-1]),c===me.z-1&&u.push([s,r,a+1]);for(const[d,m,v]of u){const g=this.world.getChunk(d,m,v);g&&this.pipeline.requestRemesh(d,m,v,g.getData())}}evaluatePlacement(e,t,n){if(this.world.getBlock(e,t,n)!==this.airId)return{canPlace:!1,elevatePlayer:!1};const s=ct.width/2,r=Math.min(ct.height*.9,ct.height-.1),a=this.camera.position,o=a.x-s,l=a.x+s,c=a.y-r,h=c+ct.height,u=a.z-s,d=a.z+s,m=e,v=e+1,g=t,p=t+1,f=n,E=n+1,w=1e-5;if(l<=m+w||o>=v-w||h<=g+w||c>=p-w||d<=f+w||u>=E-w)return{canPlace:!0,elevatePlayer:!1};const R=c,A=Math.floor(R),b=t===A,P=e+.5,M=n+.5,y=P>o+w&&P<l-w&&M>u+w&&M<d-w;if(b&&y){const O=R+1,B=O+ct.height;if(!this.aabbIntersectsSolid(o,O,u,l,B,d))return{canPlace:!0,elevatePlayer:!0}}return{canPlace:!1,elevatePlayer:!1}}aabbIntersectsSolid(e,t,n,s,r,a){const o=Math.floor(e),l=Math.floor(t),c=Math.floor(n),h=Math.floor(s),u=Math.floor(r),d=Math.floor(a);for(let m=l;m<=u;m++)for(let v=c;v<=d;v++)for(let g=o;g<=h;g++)if(this.world.isBlockSolid(g,m,v))return!0;return!1}}const na="/assets/footstep-Fr-5_nTT.mp3",Nl="/assets/water_step-MaHXgPx_.mp3",Fl="/assets/underwater-Cqai0VTA.mp3",Ol="/assets/block-C1XDNMNZ.mp3",Bl="/assets/ocean-B93ceUEo.mp3";function zl(i,e){const t=new Audio(i);return t.loop=!0,t.volume=e,t.preload="auto",t}class kl{src;desired=!1;current=null;vol=1;constructor(e,t){this.src=e,this.vol=t}setVolume(e){this.vol=Math.max(0,Math.min(1,e)),this.current&&(this.current.volume=this.vol)}setDesired(e){const t=this.desired;this.desired=e,e&&!t&&this.ensurePlaying()}ensurePlaying(){if(!this.desired||this.current&&!this.current.paused&&!this.current.ended)return;const e=new Audio(this.src);e.preload="auto",e.loop=!1,e.volume=this.vol,e.onended=()=>{this.current=null,this.desired&&this.ensurePlaying()},this.current=e,e.play().catch(()=>{})}tick(){this.desired&&this.ensurePlaying()}stopImmediate(){if(this.desired=!1,this.current){try{this.current.pause()}catch{}this.current=null}}}class gv{world;camera;input;player;lastX;lastY;lastZ;lastGrounded=!1;sfxVolume=.7;footLoop=new kl(na,this.sfxVolume);waterLoop=new kl(Nl,this.sfxVolume);underLoop=zl(Fl,this.sfxVolume*.8);oceanLoop=zl(Bl,this.sfxVolume*.6);oceanSampleTimer=0;oceanProximity=0;oceanVolCurrent=0;constructor(e,t,n,s){this.world=e,this.camera=t,this.input=n,this.player=s,this.lastX=t.position.x,this.lastY=t.position.y,this.lastZ=t.position.z}setVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxVolume=t,this.footLoop.setVolume(t),this.waterLoop.setVolume(t),this.underLoop.volume=Math.max(0,Math.min(1,t*.8)),this.oceanLoop.volume=Math.max(0,Math.min(1,t*.6))}getVolume(){return this.sfxVolume}primedOnce=!1;tryUnlockOnUserGesture(){if(this.primedOnce)return;this.primedOnce=!0;const e=t=>{try{const n=new Audio(t);n.preload="auto",n.muted=!0,n.play().then(()=>{n.pause(),n.currentTime=0,n.muted=!1}).catch(()=>{})}catch{}};e(na),e(Nl),e(Fl),e(Bl)}setLoopPlaying(e,t){t?e.paused&&e.play().catch(()=>{}):e.paused||e.pause()}playOneShot(e,t){try{const n=new Audio(e);n.volume=Math.max(0,Math.min(1,t)),n.play().catch(()=>{})}catch{}}playBreak(){this.playOneShot(Ol,this.sfxVolume)}playPlace(){this.playOneShot(Ol,this.sfxVolume)}update(e,t,n){if(t||!n){this.footLoop.setDesired(!1),this.waterLoop.setDesired(!1),this.setLoopPlaying(this.underLoop,!1),this.setLoopPlaying(this.oceanLoop,!1),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=this.player.isGrounded();return}const s=this.camera.position.x-this.lastX,r=this.camera.position.z-this.lastZ,a=this.camera.position.y-this.lastY,o=e>0?Math.hypot(s,r)/e:0,l=this.player.isGrounded(),c=this.isTouchingWaterSurface(),h=this.camera.position.y<Dt+1-.001,u=this.input.getMoveInput?.()||{x:0,z:0},d=Math.hypot(u.x,u.z)>.05,m=l&&(o>.2||d);h?(this.setLoopPlaying(this.underLoop,!0),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)):c&&(o>.1||d)?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!0),this.footLoop.setDesired(!1)):m?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!0)):(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)),this.footLoop.tick(),this.waterLoop.tick(),this.setLoopPlaying(this.oceanLoop,!0),this.updateOceanVolume(e,h),!this.lastGrounded&&l&&a<-.02&&!h&&!c&&this.playOneShot(na,this.sfxVolume),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=l}updateOceanVolume(e,t){this.oceanSampleTimer-=e,this.oceanSampleTimer<=0&&(this.oceanSampleTimer=.25,this.oceanProximity=this.sampleOceanProximity());let s=Math.max(0,Math.min(1,this.sfxVolume*.6))*this.oceanProximity;t&&(s*=.35);const r=1-Math.pow(.001,e);this.oceanVolCurrent+=(s-this.oceanVolCurrent)*r,this.oceanLoop.volume=Math.max(0,Math.min(1,this.oceanVolCurrent))}sampleOceanProximity(){const e=this.camera.position.x,t=this.camera.position.z,n=5,s=120,r=2,a=24,o=60,l=2,c=.7;let h=s;for(let v=0;v<a;v++){const g=v/a*Math.PI*2,p=Math.cos(g),f=Math.sin(g);let E=null;for(let b=r;b<=s;b+=r){const P=Math.floor(e+p*b),M=Math.floor(t+f*b);if(this.world.getBlock(P,Dt,M)===n){E=b;break}}if(E===null)continue;let w=0,S=0;for(let b=E;b<=Math.min(E+o,s);b+=l){const P=Math.floor(e+p*b),M=Math.floor(t+f*b),y=this.world.getBlock(P,Dt,M);w++,y===n&&S++}(w>0?S/w:0)>=c&&E<h&&(h=E)}const d=1-Math.min(1,h/80);return Math.max(.05,d)}isTouchingWaterSurface(){const e=Math.min(ct.height*.9,ct.height-.1),t=ct.width/2,n=this.camera.position.y-e,s=this.camera.position.x-t,r=this.camera.position.x+t,a=this.camera.position.z-t,o=this.camera.position.z+t,l=n;if(n+ct.height<=Dt||l>=Dt+1)return!1;const h=Math.floor(s),u=Math.floor(r),d=Math.floor(a),m=Math.floor(o),v=5;for(let g=d;g<=m;g++)for(let p=h;p<=u;p++)if(this.world.getBlock(p,Dt,g)===v)return!0;return!1}dispose(){try{this.footLoop.stopImmediate()}catch{}try{this.waterLoop.stopImmediate()}catch{}try{this.underLoop.pause()}catch{}try{this.oceanLoop.pause()}catch{}}}const vv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAIn0lEQVR42sVZvYp1WRFd+/c2gjM4KIgfgyIYmAy+gYGPYS6+xDyGsZmvYCQIRoqhoYOBCoLJoCBf758qg33Wvmuf/iaeC003fc85u35WrVpVJ3z/Z587vsZPBoCPf/hT5FxgDoQQgRARYwJCxJyGXCtSyhjTEEJELhVzGhAiQgiwOZBSxBwd7gabA6VktPfv4W4IcACOFAMA39d9+cXvEWlJ7x3ujpQSYoxwd4QQEELAGAOtNcQYkVKCuyPGiJwzQghIKe37ASDnjDknUkrbU3fHnBOtNcw5EUIAgGUAD805o/eOMca+6L//+BNSSiilwN1hZnB3uDtaa/jyb3+AmW3jYlw+mRn+8/c/IueMnDNKKTCzbfQY42kAPRpj7AfRCxoIAHNOmBlCCPsgXkuj5pzbGQCIMcLM9rPGGCilnBGYc+6Q8Qt6CwCttR3qUsqOUs4ZrbX9vZntSPH+McZOTSkFMUb03lFKeRpAD3hxjHHnn0YxzO6OnPP2rNaKWus+hMbTQDPbP0wrDTwiUGs9DqMBZrZT0Hvf4ScY55z7MOaWDjBF9Jz3MUq7DJ/AAkLArgC7cs5rtke+yjGlLAinoRG9ve4UpJQwR0dKCTYXuN0mUorPCDAf9DSEgN77jgg90tzSWxrLaOzQXvcQ7epISmn/P9MDd4ObI6W8+UCBaGZwOEJwhLjKLeV0pGn0dkXxaWyMEQGOMTpSDEe17QgwX/xoXZMb6BWj5O7ove+SYyRY91qWc86dvpTSSstVlpkGmBnSBaQQLiNS3F4A4QrdRH28IISIEMNGt/syurUG+JMrVkp8/z/GfKaK5KBlqPlU5mNk5py7IliqSuMKbEaIVdJag+Lu4AE+iLXOEDP8agj5X0u2tbYPKqUcDtFjTeE2gAzGB5NkWAVf9VNK2YYSA8QLgaY9hPeRpg8QahqU9Rhqgka73T0V5HiCl5hQp7Q030SASNV2Sg/4YDInU6Mh5mFkTTYeTSXT8KYKWmtAiHg8XuBYHvvVllftPpFLhJvfSMxXJHBFgxHJOWOMfuGiIwZ8dS9gCmqtG80MMz/anMiYRD21RO99Y4Pe8hr97CrgjUQ8W6yWjF5LzPBwbTbu/uYeli+xsPWC5pHesQypZPgdgUfA8W+CdKuc6zBWCMlKc0+Kj7yBh6tyUT4nuJ7shsNo4mCMcQD2Q0rrDQ/sziQyig+d0pIZfta70i15hE703jebasUwEocB99Y55zyYjMBkWOmtdksaQyZk+ph/khrvP6hYveSFqgcU/XdKHWNsIGo0eR2ZUY39YBWorlMBoiKV4NLraq077CrfCDh6ygogu75hQg4eBA3ZkIeUUtBa24bob+LiQ2qJypgsy88ueYaWDyBtErn8H9to3prh2Xj4cJ2o+FzSOZ0h6R1zgVrG1qzlScLRHCtG6LXKexrEa+8pOgzgATrraV5JRsyntm+dIwjIWutmvN47cs67apSsDgNUDSvomA7mkz1DvdGBhgMojWPZaR84DAGAWuu+UUtKU6NTsEZH86yCRsOs1K5iZxvA3JdS9heqbAksVorOAmxaBKmO9UrNLF/tOwcIGX4KCeo75pdW66SrhygVM9+sqLvs1yhnXVCklJFSRogJZuewGSOJiY0pwPyZJi0zDzha87go3O2aD+Y4Z8MxBh6Pl2sFw3AB8Gf+zBwpRZi5bELKTsWajJYRMQCATMjzKl83mK3ZEPC3goSlxDIjYLTLMb8fEpz3GZAVwGfSUBUrUfPCh5F2leWUK1hCDLHKbS0xLUUF9RtVTG3HKKhRvXfUWjdJKdfT4Ht07gsNLWeduDcGFvk8pVXwJympV6U+LkAmuD8lGkWGChdiIMaI0Q3udvWEsefFNzygcovlxOjUWo/tmaoaenzfEWnE7mP5IUp1XiMW2EZ5MQmHKWIKNKw0gmm9g1PvP0Sprtd0+aSihA2GnvBA1f2kdMUCjeT92q6PCCg9UqBoOFkV9w0avdb1m86LOjvwcBLWEQFaryKjtXbIbLbXe4XwUFVROuhoHxgy7h1VEMJEiItisywcGIUYE8yvydj8aFi6qEwpob2uZfReRnHfMC/cXEvrIwVEJctPRSQBqfMAl86UWLq8UMl13zvxmqMZLdoscPj1O+xtl6Kaen41q7EjQHnGHmBzHOoqxYzX1/fXjogdtJ+ilBbSOuZYOYEihG2WBHRv06p6SG663D7KVctQOf++rmUVcDBVfXDvGbqk1uZFMlPuiSqZNG8quThi3Xldu6EOIcqQyiXkiDdV8NG7zzDnyj9ihBnwSBmOgG+++wliKsglwy7+LzXBAaQEfPzpj2HmqOZww1VFAa/vX/HR9z5DjOuVTm+vSCkAtjTBGA3A75YBX/z285XnLTwSUsowqplUgBAQQoRvTOStdOCO1l6X1wBiDFiFZnAzjN7XO6OUADicafvGt5cBpFiWkvb5UgpGn5cBjnKtbpRc+oWPlBIC1sa9vb4iZU0NFVICZA9xLCp1N6R8zllA98YEIfHzoUlae4dO18cLLgD4zS/fwd1QS0VKETFeHWtOPB4PzDmQU0atBfHaeMebwp3Xg3sfl2A1ANeQKprDHehjCeCf//p/pyRjFPQVHT3VMmOFcJhR5DMSumXVfbFqgYMJv/PJt2BmeHmspvTystRPLRnwBSzfYnU9tORrNJvUDouiryJEHx0hpqvJjetty8LcP//179OAP//lr5hzIMaEnNJCcgj74Pp4YPSOkjNK4UaVoxo35I5ptkA2BvoYCCFePGGrqkaHmeNHP3gHoD8Hk0+/+wke9XFpf+r7pxG1VAAO4qzK1NR7R7xS1No6IMSA1vrenK7WPtdcgdtwqjJJZZlKcZbe/XUey5ETMX84zo8x9q5QV3RHFawyioiBonShN+8t6EK1drgxxrHOzSkdLyPGHMcuYAH6eqmBuCYvNIRfff6Lr/X1/f8B6L5p9ru5UeoAAAAASUVORK5CYII=",_v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAJsElEQVR42m1ZO681RxGs7pmd2esPYyyMLcggICRBIvGvJyYhIbNkWciWJSQkQOLuPJtgtub0fuZKV/dxzs70o7q6uo98/fsvLcaAOQ3nmWFzoo+BI0bADKKCOSbmHACA88wYfeBIB1qtmHMCIjjigdYb5jSEECCiqK0ipwwDMOZEqxUaAgDBGB0hREQA+OPvvoAACEEx50TOCWKA2QSA9TeAMTrmmBABckpQFfTeMadBQ4BqQG0VvQ8YABFFjBG9D0AF11WQUsJ1FUAEf/nmH1ARwXEct9UCEUG9PZtz4jgOtNbA9x3HAZF1sZnhV7/4FDFGqCqu60KM8fE954SZQURwnifmnAghwMygqssAEcGcE2MMqC6raVStFd/++C+UUlBKQe8dqgoAK/wAVBVmhvM8UWtFCAHffP/PbWSMEQBwXdcdsYmU0jJCRGBmALANoYcAkFJ6/GSkjuNAjBHXdaG1BgCotSKlBBHZl/KcMQbO80TOeZ9lZlAfYj5sZvtBM4OZodaKnDNCCNt7GptSQq0VqrqfZ6gZxTknruvaxpgtsCovGGPsA1X1gQn+j6+HEDDGQGsNKSWUUpBzxhgDtVaUUrbhvfcdbjrLVJsZYq11W0OvRSJEFWOMfeG6PG4PFhixDyulLNQfEWYNOWf03iEiGGMgpbSqRRW9Xy9Dcs77EiITAFprOI7jATIaGGPEGANjjG3ceZ77WX4xigQef1fVHWUlUnlYjBEiskElImit7dfMDKWUXV6llNu7+UgbnWEpb9CpIqW0jVUzQ0oJKaUdMjNDznnXMfPbWnNpkl3bzD2/WFWquvNOR/laKWWlYM6J3jtKKYgxota6/+bXnHOngSU259xlSCMZNe/xGANMc2sNvI9coz40Poz8SZB5HmBNs+753lLKZsrW2naCZJRSWpfeGFBVRFq7MPCq4+M4UGt54CHnjFYbUjocshcWain7YkD2ZSzvCYOI3kYJ+p02ZZ3mnKF36YUQcF0Xcs7IOaOUghDC9ogVQBzQGOadZOW5hd8hhB01VV0p6L2DfOBpk+XjGZEI5sVEOcvLg42VQ1x549lzlGAiUHj4dV07It568gHLlZiIMW6vWmu7P/B8smEIYZf1nBOROV4eyA0OgUL2wQwv3zfnvNOiUH3b/x9jwmB32/23IyZB6x29M1WyKySyWQiAt7fzDisw+4Cq7BSsEBqCrgYTQwBgWwPU1lZUVDYnsCmJEPV2V0pCv51TCgciljTLcDNC7HqbQm9eYNmRG9jSCcg5J2qtmwM8WfXeoWwKZMFaK7xRPIAPMXfseAQV23MpBed53tLrepAScUDRspmQYGID8iCiIZRdRP95ng9qZbQYSdI5ldJxHPt3tvAb9LrDzH7Ay3goBQvD6wUIL6GHrbVHOXop5rvqeZ7rnqcOkB0yeurruta688n3+nAyYv+PytniaRQN3UxIycQIeCXjNQGjw0PZ4xkptmj/fxpEXiBBlVIQidQ1dJwbrYuYsAG5umXYPWMRFDDUdjMzw60ZXh10EVNHiAGt9dtIAJR6vNx7TTSXR4N5IpnVQM8YJa8LWGHee5bsFi3szwz9dV1bzfr+ztDTM1IsMUNHvHYgN1Co+mcpZpT8zzKhnmfuYoybu+k1+wMP5rPeiJSSE6+v2cOXdSllVYFvICSXj3UAZRfzStTzYIoVvsZ2ziqhIZ4VQwgvIvp4MmK7pH7rvW+S8jn0mp8GsgSv69rcwFJnaokr9T3Ah5wl6fnfh9h7xLRwnqQOpGwjE7I0H7KMl/uwUOOzIrzA5MO8hOnxjYbVwMgwpXSS71fV1Q2ZT9ImmY7/JwBJ2733PfN5cDFdXrwyLcy9H9lLKQsDXm77rseLvCpiiZEjOLzwO+f8CDGxQYx5otsp4IW0nAbRW2+YLyWPfpJOKeXRvlkF/Ps8zye/UGiM3jGGPXQf8+k5f/SBlI67Sg4AtismhAiDIYSI3v+DEMKNEY7qcWvNefOGUhHzIj7kU8O6ptanMYyOfx/PYei9ZmC0PcCVrMSw8nDWN9mRFxBY/lC+Rsaste5lhE8vp2i2eQALA16GUzh4McqqoJEsU6aLcyVzS4deolQe/cWvAiK9YDfcvXvaRjwfmHMCBswJhPu1lDLkv/WVDthjj7Sm4IlhEzmfj6FFRKBepXp15HPJ0LKO2Rn9xox0Pud8jONMMUPvmxcARA4dDCGZq7aOnNMG2EJ6vnHQke6d4U7dGEgpY9TxaGaL9QyK1/Liui7gxk1kX1+5YkcTYNqjgawoKFTUTb0DH9KJ41iTD0nJC5yViohh8yFIcKda2dNZVkTwx9qAVeEXV34K9nrCd1cv0/k/r7pjSgm//PQNMQYIsLwHkNOtePXAV59/uEexJTKCKgCDGAAYvvz8A97fLxyffbJA9rMTX3z2CUKImGYoRaAh3guNjFIrRBZ2oojgz3/7/ma3gNYq4DxRFeBeXAuAIyXMMWA2YdyoqK4DRTDHuPM7MeZAjMfeL4x7ThQBam1obUD90oG9mlOP7wce4WRJhtFvzqiu2Dn9Xphkxao6jmOtaP76Y4PIQGv9J3LLN6LXMmrt+/1+qfeBEC6ngt8frdsvwwFD7wN/+u1na03nt2IEDOvXMxfXNNd1bUnmQUcwfqycGT1f0lRLkURExHLep0G7aTiNaIYHFb/CPH8yRdFBRoF7BqAjhA/LgGVp2CKDS6c9w9+XkW5b6w+eZyo4XZMliRcawl3SOhuvdswX/JRMCUXlwtBRSPiJ2dMxBQkN+XiNy2cZYfWSi+szho/87QdNMhw1P3NL5PNDCWKH7MgLvaMPWe4HDC6imDtqOz9HMu9+G0Yw8zKfHj/Ck0FjjK9VLa3mVsyrZTPbO2Higt5T0lOE+g9APh7LeTaxM8ZA5OVfffWb7aXf/VKesRJoEHPJwcV/cMEIEXDESwgB7+/vyDnju+++XZXFZvTDD3+/afJV08z3/ohtzwUDgG2wLtwAIq9UEFOllMdCY503oeoWlWs31HAcaQ+o3BFz3CI/+I/svChdWLANRNI20/JaiAcACtV7w+q1PcHovxlWEswSJC/twIs8EdFr5t9/1OM/sEjp56sdz1mXaBhzW8lDqJK8J0sL6E8+CzKbe+dM2iUO+LXOlb1dUwKMrMXJhVXBhSS9oHT3xELeyDnjuq6NC/70W3emz80I+pDQvpX6T7eI7I8/E/Qc4ZnTb159qvwAFEJYmvAPv04I4ROYTYzeARHEEBA0Q4NijtUrVheMeDvfcJULgrcVEVWMPmAwzGkQSWsMKxeCBrTeAQlQEej90f51vWPOif8BXntl5vWwkLIAAAAASUVORK5CYII=",xv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAKz0lEQVR42mVZS8ttRxFdXf3a93qjiUZ8EDQgRCQoghMRB/4CHfhX/A3+HKeOBAdOFBwIiolKiKIhRiEm0Xt2P6rbQe/Vp07ywcf9zrl7967HqlWrartXf/CTqWMihIAxJlrvSPmAg0NtDc4JQghoXRFjwhgDY06EENF1IIQALw6qHdo7nHOYcyB4QSkFMQZo7xhzIMWAVitSirjdbsAcCKqKl1//IVQHJhwAh5QPqA7ACeYEnPcQ8XCy/h0TyPlAqQ0hBMyhEHGo5YSIwxwK7wWjd8w5MIdiDEUMHrUWBC9Q7Xj3dz9DAIB2eToBeO9Ra0VKeRsUc4bqQNcVBYGDqsI5h9YaxGEZ6Bz449y6htHwXnDensO5+/957yHerxudcziOA2MMxBjRe1/hHgPneUJVAQC9d4gIxhgAABGBiKDWuh8+50TvHd57hBCgqvt+AFBVpJQQY4TwISIrZznn7cGcEzFGxBjhvUfOGSGEbYRzDjFGjDG2EzyPjvULFwBwHMd2oveOOSek976AdN1Qa4X3fh/aWsOccxtUStkGeO+3N/x7zgnv/cN1NmohhB0lVV0RmHPuKDjn8OHffwuRhX56r6poreE4DuScd8h5v6ruCDEajGSMEe//9TfovV/4SjtSgRerKpx4xJhwXrmqteL9N3+OlBK6Dsy5vo8pYQxAx1jGlAIRQHu/UqLw4i4jJ774zR/tnIfgUct6QkoJwXu/Do0ROiZqrRuA+XiCL3/7x2iqePaFb+DDd9/AkydPUeqqGvEBc04ELwAmHCZUO8QB8TOv4vz3n1Br2QBkCulJa21FwHu/cxeCoISA4zigY2CMiQngv/98Ay+98i0ADuPff0ZrC1yrChzGUNRa8cIXv4E5Ov733hsYFyZUdadKRJBiwu32fKWAeaq1IUSHEPy+SceEiL/4QfDBO78H4PDk5a/DffQ3TDjcPngH8enLmHPgM196HR+9+4eLaBQpRjgH9FY3GGOMaK0i57yiR7DMOdFaQ+/3el18oPAhXNZ7jDFR//MW8udeg3MO5aN38eIrrwMD+N97f9z3sv7t+SEElFLg5Q7S4JzDeZ7I+cCYQIwJTQQALl44MMyhgEPrivHh2xhzkcrtX3/B7fYc4oAxFEMXBZOK3RXl1hq898Acmx9k0bDbZcWSZPngomcSUK0VMUbMObdX8wIVK4qYYhRzziDfsNTJlMLDcs4brXJFgGkh7ZKMWmuboGgwH8rQighSSpuALJfQcFVdTEj6pZf85Q8bFBmNaOYh/MwHWeNqrWit7cjxup2CpQPuHnrvt/UME1mOTJdz3nT9+dd+sCPGvpBSQkppe+q9358BIOd8p+bWGlQVvSvEB4jcPVgcH1BawxgTYwIp5cubBCeC99/6FSS/hBgDHJYYUe3ovSFc0SLZkf3KedvdV2yY6UlK6TKqP+SM19jQ2vKyZ9nmxHbsnFtleBlUa4UQKGyTTAfZS1UhsoglxohaK5xzYOqsluDDiQn+Eqhs72xY3nsIPbAEwjzGGPfB/J55ZGnSG4KOWGKntPhgNChYlpoyHBBj/ARvsxpKKRCR3Z4ZhVrrfnApBbXWnR6eTeNVdd9Dp+Q8zwfxwV7NPPNBzN+i6769SCntfNJLhpd6ghigUMk5I6W0ypBlMcbAcRyrRV4WW0bjz3EcD7RKUqIcs/xAIFv9SKwRlGKRz4tJEjTgXpJ3gBGQZFHLinTCKirvPUh6pOVa66JiADjPcx9Cwiml7AjYXNqH5JwfHsiK4AOJIVYTVTcjLETwcRw7f1b/icgOMVXMx5sQyYZlpqrbeJ5p2ZZOqCpEVR80PfFgS4bU2Vrbddxa2/nMOaOU8tD7WSk0MqW0I8TUHMexytBKZpYhATbGQK31oX4ta77wle+h1rpTsXu+AR1TyPLkWed5rsmIOWKpWKIJWw3J7mb8DADP//HrT2h/kpB1jmcSc2TQcAfFhFwdbo9aTuCcXGGP6KrwnuF3CHH1jKmKlCKGAsDcqcJmzrlTq9qRU8Tt9nxFqfe+pxgi1tY+80mckKwsVxADJCk7nJKueT/ZkXwiBIgFX855g8V7j/M8Hz4zjzFGlFJWLq/GY427T95uh5/nsOzFqhR2PTsZPyrkvrGSUtqeML/Mvf1MY3g2cUHyko9byjDRKH53nueD1mOel6LOW2ySQ5g+em8ZlobsdkxqJLot6i3j2bF8jLEbC8mJkSILMuS11gdhaqMstMjyPy3kA6mWCRzqBV7DiJC8aAA5hc6QgMg3IYQ1mCxP+31gvATK0vGLr2kod0nOrf1ANZgo5w1zDpTeNg7O84Yjp71pmXMAc+z9QrAlt74MOC8vvaz+7by/RrSrs4WIOZeBbDznebvo16O3NcZRxJBR4zUrtloATDYo2fTKocOmwq5i6BUbzXmeu+7p0db7F1MympbamZLe+2pG7ExbNl+kYsuTyCYWCNzPfu37+9pSysP1thT3VuxymOcJw2jr3ALM4sIaS7S/9+YvHzZflgEJbkaA91qhIwxL732j3A4RJA07K7KbMcc0zDYcSjy2YGuUnR2Cldnr4NU6n1w5ts0n5wPOCZz4BUInaGPgiBG9t21I8Ncq79INMfht6JwT2BWlqxfwPwk45orjNCNB0UGjx7WkIqlY7Udio1ImX9ho7NGMYeEhdlPKsLNJWcpmXu389/FR3FIyRQ/7TyllUTE7FNupldFbOFweUe/ZMdvOBlY32uZmpy/b6rciYp/nDXam42cqY05BRLLdBdFLC1waa7cvpZTVuvlw4L7PvV1EMq8oMCUko5WOhDFhIgVgBsw59oLSi0B19Y3/XobGGFHO255DxFpMgFlFTGvZ1xkBO99RuFJD2unXhp7Y4MwhIgsDRCkHDuadlHocx57/z/PcILLreuLAagaGnVVjN+fE1wMyFh7uq3biAFcFdB3wXq6DBHBjXzPnRG8r9CmGtS/2HudZMcddCZEX9nBqa97qAltajI4NKw/89Fe/+7BZoUF2u8JRjzRsX14E3tBaw5hYnl0hWo3FI4aw9IJb7XoBK+MsFR+88wYcJsZQSFhEVM7bkuIxApi7uT1NCcDEwH39F5inlBJa172S995jmK32mhtkG7reiF0T81CMsRZUnBvXy6uVzuBXZa1per09I2uKpU9quPTy6zsFbKt2eOWozs1prXXnl3/b2eA8T3z6le9sbmB0W2sIvXekF1/da7pDPFLKKLXDh4AnKaP1gXwcSGO9HQMcIB4hAKWsck3BI/a2lE6v8CLorSA4oNUKL2vjfsyBWk4E7SzZgLd/8dNVHm69pqMWXC8xM4ZOdNXrJQVnyWUUAJTzvN4ZDOSUFh6cw+18Di+CGAJqLZcsWy8vvffw8claVJLr+0USSzgMhGsLgumQckZrdjK+o5zvAO4vJxTjGvUdgH49Y6mtE9Gs+HY3ZLey7ZZqhjKNDYvLK7vAtC+rCOze+x5orBS3Y79wpdJa20OmpVD7YpPaj1uQj29D7J7B6kkaQ4MtkIOlzyU4ZJOM50vGtt6aOCebqCi7lgLy68WEW6XXe0fmwnoM6KW6V185d9ccGI/bcg6adofDctwy2hCXleK8zo50dihlFCwlA1hlGPOzJTan4MmzT6HUBjjB8amMUiqcCBQeT194tvr4caCUiuECJDqEdBXQnJhuvTmXQA1RIFEQjgztDdGtN2wyBoZ2/B9d45SmA25b6wAAAABJRU5ErkJggg==",Mv="/assets/swing-DuA_rQwg.mp3",De={torso:{width:.32,depth:.22,height:.7},spineLen:.52,neckLen:.12,shoulderOffsetX:.26,torsoBackOffset:.24,arm:{upperLen:.36,lowerLen:.34,handLen:.14,thickness:.08},leg:{thighLen:.48,shinLen:.48,thickness:.18,hipOffsetX:.1},locomotion:{freqWalk:2.4,freqRun:3.6,ampThigh:ke.degToRad(26),torsoYaw:ke.degToRad(6),torsoRoll:ke.degToRad(4),torsoBob:.02,startStopDamping:12},idle:{baseShoulderPitch:ke.degToRad(-65),baseShoulderYaw:ke.degToRad(-25),baseShoulderRoll:ke.degToRad(12),bobSpeed:1.8},swing:{duration:$s*.55,returnDuration:$s*.45,amplitudePitch:ke.degToRad(78),amplitudeYawAlt:ke.degToRad(10),easeIn:3,easeOut:3}};class Sv{playerRoot=null;camera=null;root;pelvis;spine;chest;neck;armAnchor;rArm;lArmAnchor;lArm;lLeg;rLeg;torsoMesh;armMat;legMat;torsoMat;locomotionBlend=0;locomotionPhase=0;movingFlag=!1;lastCamX=0;lastCamZ=0;idleTime=0;swingActive=!1;swingTime=0;swingReturning=!1;swingKind="LMB";swingAudio=null;_v3a=new U;constructor(){const e=g=>{const p=new dr().load(g);return p.colorSpace=Et,p.magFilter=nt,p.minFilter=nt,p.generateMipmaps=!1,p.wrapS=Nt,p.wrapT=Nt,p},t=e(vv),n=e(_v),s=e(xv),r=g=>new Eu({map:g,transparent:!0,alphaTest:.5,roughness:.9,metalness:0,envMapIntensity:.25,dithering:!0});this.armMat=r(t),this.legMat=r(n),this.torsoMat=r(s),this.root=new yt,this.root.name="FPBody.Root",this.pelvis=new yt,this.pelvis.name="Pelvis",this.spine=new yt,this.spine.name="Spine",this.chest=new yt,this.chest.name="Chest",this.neck=new yt,this.neck.name="Neck",this.armAnchor=new yt,this.armAnchor.name="ArmAnchor",this.rArm=new yt,this.rArm.name="RArm",this.lArmAnchor=new yt,this.lArmAnchor.name="LArmAnchor",this.lArm=new yt,this.lArm.name="LArm",this.lLeg=new yt,this.lLeg.name="LLeg",this.rLeg=new yt,this.rLeg.name="RLeg",this.root.add(this.pelvis),this.pelvis.add(this.spine),this.spine.position.y=De.spineLen,this.spine.add(this.chest),this.chest.position.y=0,this.chest.add(this.neck),this.neck.position.y=De.neckLen,this.torsoMesh=this.createBoxMesh(De.torso.width,De.torso.height,De.torso.depth,this.torsoMat),this.torsoMesh.name="TorsoMesh",this.torsoMesh.position.set(0,-.7*.5,0),this.chest.add(this.torsoMesh),this.chest.add(this.armAnchor),this.armAnchor.position.set(De.shoulderOffsetX+.2,-.4,.4),this.armAnchor.add(this.rArm);const a=De.arm.upperLen+De.arm.lowerLen,o=this.createSegmentMesh(De.arm.thickness,a,De.arm.thickness,this.armMat);o.position.set(0,a,0),o.rotation.z=Math.PI,this.rArm.add(o);const l=De.arm.handLen*.4,c=this.createSegmentMesh(De.arm.thickness*.9,l,De.arm.thickness*.9,this.armMat);c.position.set(0,a+l,0),c.rotation.z=Math.PI,this.rArm.add(c),this.chest.add(this.lArmAnchor),this.lArmAnchor.position.set(-.46,.2,.2),this.lArmAnchor.add(this.lArm);const h=this.createSegmentMesh(De.arm.thickness,a,De.arm.thickness,this.armMat);h.position.set(0,a,0),h.rotation.z=Math.PI,this.lArm.add(h);const u=this.createSegmentMesh(De.arm.thickness*.9,l,De.arm.thickness*.9,this.armMat);u.position.set(0,a+l,0),u.rotation.z=Math.PI,this.lArm.add(u),this.pelvis.add(this.lLeg),this.pelvis.add(this.rLeg),this.lLeg.position.set(-.1,0,0),this.rLeg.position.set(De.leg.hipOffsetX,0,0);const d=De.leg.thighLen+De.leg.shinLen,m=this.createSegmentMesh(De.leg.thickness,d,De.leg.thickness,this.legMat);m.position.set(0,-d*.5,0),this.lLeg.add(m);const v=this.createSegmentMesh(De.leg.thickness,d,De.leg.thickness,this.legMat);v.position.set(0,-d*.5,0),this.rLeg.add(v)}init(e,t){this.playerRoot=e,this.camera=t,this.playerRoot.add(this.root),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}update(e){if(!this.camera||!this.playerRoot)return;const t=this.camera,n=t.position.x-this.lastCamX,s=t.position.z-this.lastCamZ,r=e>0?Math.hypot(n,s)/e:0,a=this.movingFlag&&r>.05?1:0,o=1-Math.pow(.001,e*De.locomotion.startStopDamping);this.locomotionBlend+=(a-this.locomotionBlend)*o;const l=ke.lerp(De.locomotion.freqWalk,De.locomotion.freqRun,Math.min(1,r/5));this.locomotionPhase+=e*l*Math.PI*2*this.locomotionBlend;const c=this.locomotionPhase,h=Math.sin(c)*De.locomotion.torsoYaw*this.locomotionBlend,u=Math.sin(c*2)*De.locomotion.torsoRoll*this.locomotionBlend,d=(Math.sin(c*2)*.5+.5)*De.locomotion.torsoBob*this.locomotionBlend,m=t.rotation.y;this.root.rotation.set(0,0,0),this.playerRoot.position.set(t.position.x,t.position.y-(De.spineLen+De.neckLen+d),t.position.z),this.playerRoot.rotation.set(0,m,0);const v=t.rotation.x;this.neck.position.y=De.neckLen,this.neck.rotation.set(v,0,0),this.pelvis.position.set(0,0,De.torsoBackOffset),this.chest.position.set(0,0,0),this.spine.position.y=De.spineLen+d,this.chest.rotation.set(0,h,u),this.applyLegs(c,this.locomotionBlend),this.idleTime+=e;const g=this.computeArmIdle(r);this.updateSwing(e);const p=this.getCurrentSwingRot();this.rArm.rotation.set(g.shoulderPitch+p.pitch,g.shoulderYaw+p.yaw,g.shoulderRoll);{const w=ke.clamp(this.locomotionBlend*(.5+.1*r),0,1),S=Math.sin(this.idleTime*De.idle.bobSpeed*(1+.5*w)),R=ke.degToRad(22)*this.locomotionBlend,A=Math.sin(c)*R,b=-Math.sin(c)*ke.degToRad(3)*this.locomotionBlend,P=S*.035*this.locomotionBlend,M=S*.025*this.locomotionBlend,y=ke.degToRad(35)*this.locomotionBlend;this.lArm.rotation.set(-(ke.degToRad(165)+A+P),y+b,-(0+M))}const E=ke.radToDeg(v)<=-35||this.movingFlag&&this.locomotionBlend>.4;this.setLegsVisible(E),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}onPrimaryClick(){this.tryStartSwing("LMB")}onSecondaryClick(){this.tryStartSwing("RMB")}onMovementInputStart(){this.movingFlag=!0}onMovementInputEnd(){this.movingFlag=!1}dispose(){try{this.swingAudio?.pause()}catch{}this.swingAudio=null;try{this.playerRoot?.remove(this.root)}catch{}}createBoxMesh(e,t,n,s){const r=new Gn(e,t,n),a=new Pt(r,s);return a.castShadow=!1,a.receiveShadow=!1,a}createSegmentMesh(e,t,n,s){return this.createBoxMesh(e,t,n,s)}applyLegs(e,t){const n=Math.sin(e)*De.locomotion.ampThigh*t,s=Math.sin(e+Math.PI)*De.locomotion.ampThigh*t;this.lLeg.rotation.set(n,0,0),this.rLeg.rotation.set(s,0,0)}computeArmIdle(e){const t=this.idleTime,n=ke.clamp(this.locomotionBlend*(.5+.1*e),0,1),s=Math.sin(t*De.idle.bobSpeed*(1+.5*n)),r=De.idle.baseShoulderPitch+s*.06,a=De.idle.baseShoulderYaw+s*.02,o=De.idle.baseShoulderRoll+s*.03,l=r*.35-.04;return{shoulderPitch:r,shoulderYaw:a,shoulderRoll:o,forearmPitch:l}}tryStartSwing(e){if(!this.swingActive){this.swingKind=e,this.swingActive=!0,this.swingReturning=!1,this.swingTime=0;try{this.swingAudio||(this.swingAudio=new Audio(Mv),this.swingAudio.loop=!1,this.swingAudio.preload="auto");try{this.swingAudio.pause()}catch{}try{this.swingAudio.currentTime=0}catch{}this.swingAudio.play().catch(()=>{})}catch{}}}updateSwing(e){if(!this.swingActive)return;const t=this.swingReturning?De.swing.returnDuration:De.swing.duration;this.swingTime+=e,this.swingTime>=t&&(this.swingReturning?(this.swingActive=!1,this.swingReturning=!1,this.swingTime=0):(this.swingReturning=!0,this.swingTime=0))}getCurrentSwingRot(){if(!this.swingActive)return{pitch:0,yaw:0};const e=ke.clamp(this.swingTime/(this.swingReturning?De.swing.returnDuration:De.swing.duration),0,1),t=o=>Math.pow(o,De.swing.easeIn),n=o=>1-Math.pow(1-o,De.swing.easeOut),s=De.swing.amplitudePitch*.8,r=this.estimateObstacleDamping(),a=-s*r;if(this.swingReturning){const o=t(1-e);return{pitch:a*o,yaw:(this.swingKind==="RMB"?De.swing.amplitudeYawAlt:0)*o}}else{const o=n(e);return{pitch:a*o,yaw:(this.swingKind==="RMB"?De.swing.amplitudeYawAlt:0)*o}}}estimateObstacleDamping(){if(!this.camera)return 1;const e=this.camera,t=this._v3a;return e.getWorldDirection(t),1}setLegsVisible(e){this.lLeg.visible=e,this.rLeg.visible=e}}let ns=null,ar=!1,It=null,Mt=null,ht=null,gt=null,Ui=null,is=null,wt=null,nn=null,vt=null,dn=null,mt=null,Wa=null,$i=null,_t=null,Vn=null,lt=null,Ii=null,ai=null,or=null,Xa=0,Js=0,es=0,lr=!1,fn=null,ss=600,ri=null,tn=null,ia=!1;function Tc(i){const t=Math.max(1,Math.round(Math.sqrt(i))),n=Math.floor(t/2),s=t-1-n,r={minX:-n*me.x,maxX:(s+1)*me.x,minZ:-n*me.z,maxZ:(s+1)*me.z},a=Math.max(Math.abs(r.maxX-r.minX),Math.abs(r.maxZ-r.minZ))/2;return{bounds:r,worldRadius:a}}function yv(i,e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=i,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}async function wv(){try{if(!gt)throw new Error("World not initialized");const i=vn.getState(),e=Math.max(1,Math.floor(i.chunkCount||9)),{bounds:t,worldRadius:n}=Tc(e),s=gt.getLoadedChunkKeys().map(h=>{const u=gt.getChunkByKey(h),[d,m,v]=h.split(",").map(p=>parseInt(p,10)),g=u.getData();return{key:h,cx:d,cy:m,cz:v,size:{...g.size},voxelsB64:Oc(g.voxels)}}),r={kind:"MyCraftWorld",version:2,meta:{createdAt:new Date().toISOString()},settings:{seed:gt.getSeed(),chunkCount:e,chunkSize:{...me},bounds:t,worldRadius:n},chunks:s,inventory:{slots:Bc().map(h=>({blockId:h.blockId,count:h.count})),selectedSlot:vn.getState().selectedSlot}},a=await zc(r),{ivB64:o,cipherB64:l}=await kc(r),c={kind:"MyCraftWorld",version:2,encAlg:Gc,ivB64:o,cipherB64:l,signatureAlg:Hc,signatureB64:a,publicKeyId:Vc};yv(`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`,c)}catch(i){console.error("Save world failed:",i),alert("Failed to save world. See console for details.")}}function Ev(i){if(lt&&lt.consumePauseToggle?.()){const n=vn.getState(),s=!n.paused;n.inGame&&(n.setPaused(s),s?lt.exitPointerLock?.():lt.requestPointerLock?.())}const{paused:e,inGame:t}=vn.getState();if(lr&&!e&&t&&lt?.requestPointerLock?.(),t&&!e){if(lt&&lt.update(),tn&&lt&&(lt.peekLeftClick?.()&&tn.onPrimaryClick(),lt.peekRightClick?.()&&tn.onSecondaryClick()),lt){const n=lt.consumeSelectedSlot?.();n!=null&&vn.getState().setSelectedSlot(n)}if(Ii&&Ii.update(i),tn&&lt){const n=lt.getMoveInput?.()||{x:0,z:0},s=Math.hypot(n.x,n.z)>.01||!!lt.isJumpHeld?.();s&&!ia&&tn.onMovementInputStart?.(),!s&&ia&&tn.onMovementInputEnd?.(),ia=!!s}ai&&ai.update(),or&&or.update()}if(fn&&fn.update(i,e,t),tn&&t&&!e&&tn.update(i),wt&&ht&&wt.updateUniforms(ht),mt&&(e||mt.update(i)),Wa&&mt&&Wa.setSunDirection(mt.getSunDirection()),$i&&mt){$i.update();const n=Math.max(0,mt.getSunDirection().y),s=1-ke.clamp(n/.25,0,1);$i.setVisibility(s),$i.setIntensity(1.2+1.6*s)}if(_t&&(_t.update(),mt)){const n=mt.getSunDirection(),s=Math.max(0,n.y);_t.setDayLight(s)}if(dn&&Mt&&ht){if(mt){const n=mt.getSunDirection();dn.setSunDirection(n)}if(dn.update(ht,Mt),wt){const n=dn.getShadowUniforms();wt.updateShadowUniforms(n)}}if(wt&&mt){const n=mt.getSunDirection();wt.setSunUniforms(n,mt.getSunColor());const s=Math.max(0,n.y);wt.setDayLight(s);const r=1-ke.clamp((s-0)/.2,0,1);wt.setStarLight(r*.35)}if(Vn&&Vn.update(i),vt&&ht&&mt){const n=mt.getSunDirection(),s=mt.getSunColor();vt.update(ht,n,s);const r=Math.max(0,n.y),a=new Ce(.72,.82,.92),l=new Ce(.03,.05,.08).clone().lerp(a,r);vt.setFogColor(l),vt.setFogDayLight(r);const c=new Ce(4891608),u=new Ce(658966).clone().lerp(c,ke.clamp(r,0,1));Vn&&Vn.setColor(u),nn&&nn.setColor(u),vt.render()}else It&&Mt&&ht&&It.render(Mt,ht);lr=e}function bc(i){if(!ar)return;const e=Math.min(.1,Math.max(0,(i-Xa)/1e3));Xa=i,Ev(e),Js+=1,es===0&&(es=i);const t=i-es;if(t>=500){const n=Math.round(Js*1e3/t);vn.getState().setFps(n),Js=0,es=i}ns=requestAnimationFrame(bc)}async function Tv(i){if(ar)return;It=new Mg(i),Mt=Sg();const e=i.clientWidth/i.clientHeight;ht=yg(e),gt=new Cg,is=new Ig(It.getRenderer());let t=null;try{t=is.createEnvironmentMap(),Mt.environment=t}catch(g){console.warn("Environment mapping disabled due to WebGL compatibility:",g),t=null}const n=await Ug();wt=new Sc(n.getTexture(),t),wt.setMaterialProperties(.8,0,.3);let s=null;try{s=await new Promise((g,p)=>{new dr().load("/src/assets/textures/water.png",f=>g(f),void 0,p)}),s.colorSpace=Et,s.magFilter=nt,s.minFilter=Yl,s.wrapS=oi,s.wrapT=oi,s.generateMipmaps=!0;try{const g=It?.getRenderer().capabilities.getMaxAnisotropy?.()??0;g&&g>1&&(s.anisotropy=Math.min(8,g))}catch{}s.needsUpdate=!0}catch(g){console.warn("Water texture load failed, far ocean will fallback to color.",g),s=null}nn=new Ec({map:s,tileScale:1,useWorldUV:!0,bounds:{minX:-1/0,maxX:1/0,minZ:-1/0,maxZ:1/0}}),nn.setAlpha(.7),nn.setRefraction(.18,.75,.12,.035,.06),Ui=new Rg(Mt,{opaque:wt,transparent:nn}),ri=new yt,ri.name="PlayerRigRoot",Mt.add(ri),tn=new Sv,tn.init(ri,ht);const r=It.getCanvasSize();if(vt=new qg(It.getRenderer(),Mt,ht,r.width,r.height),vt.setSSAO(!0,.3,.01),vt.setBloom(!0,.15,.3),vt.setLens(!0,.6),vt.setFog(!0,.002,ss),vt.setVolumetrics(!0,.1,32),dn=new Kg(It.getRenderer(),Mt),mt=new Zg(Mt,{cycleSeconds:180,initialTime:0}),Wa=new Qg(Mt,{turbidity:2,rayleigh:1.5,mieCoefficient:.005,mieDirectionalG:.8}),$i=new Jg(Mt,{intensity:1.2}),_t=new $g(Mt,{altitude:200,coverage:.45,density:.65,windDirection:Math.PI*.25,windSpeed:5}),wt&&_t){const g=_t.getWind();wt.setCloudShadowUniforms({enabled:!0,intensity:.35,altitude:_t.getAltitude(),scale:100,coverage:_t.getCoverage(),density:_t.getDensity(),wind:g})}window.__setClouds=(g,p)=>{_t&&(typeof g=="number"&&_t.setCoverage(g),typeof p=="number"&&_t.setDensity(p))},dn.updateSettings({enabled:!0,resolution:1024,cascades:3,shadowDistance:100,softness:2.5,bias:5e-4,normalBias:.02,intensity:.6});const a=ho();gt.chunkPipeline.setAtlasConfig(n.getConfig(),a.getAllBlocks()),lt=new uv(i,ht),lt.onPointerLockChanged(g=>{const p=vn.getState();g?p.setInGame(!0):p.paused||p.setInGame(!1)});const o=Math.max(1,Math.floor(vn.getState().chunkCount||9)),{bounds:l,worldRadius:c}=Tc(o);nn&&(nn.setBounds(l),nn.setEdge(0,2));const h=me.x*2;if(ss=Math.min(ht.far*.95,c+h),vt){vt.setFog(!0,.002,ss);const g=Math.max(0,c-me.x*1.5);vt.setHorizonHaze({enabled:!0,waterLevel:Dt+1,hazeStart:g,hazeDensity:.006,hazeMaxMix:.85,hazeAngleBoost:1.2,hazePlaneBoost:.7,hazePlaneBand:6})}gt.chunkPipeline.setWorldRadius(c);const u=cv(gt.getSeed(),0,0,c);ht.position.set(u.x,u.y,u.z);{const g=ht.far*.98;Vn=new hv(Mt,{bounds:l,waterLevel:Dt,farDistance:g,map:s??void 0,tileScale:1,enableSeabed:!0,seed:gt.getSeed(),worldRadius:c,blockMaterialSource:wt??void 0})}Ii=new hn(ht,gt,lt,l),ai=new pv(ht,gt,Mt,l),or=new mv(ht,gt,lt,ai,gt.chunkPipeline,Ii),fn=new gv(gt,ht,lt,Ii),gt.chunkPipeline.on("CHUNK_READY",()=>{}),gt.chunkPipeline.on("CHUNK_MESH",g=>{const{response:p}=g;Ui&&Ui.handleChunkMesh(p)});const d=window.__WORLD_SNAPSHOT,m=window.__WORLD_SNAPSHOT_VERIFIED;if(d&&d.kind==="MyCraftWorld")try{if(!m)throw new Error("Save not verified by loader");const g=d.settings.chunkSize;if(g.x!==me.x||g.y!==me.y||g.z!==me.z)throw new Error(`Chunk size mismatch: save ${g.x}x${g.y}x${g.z}, game ${me.x}x${me.y}x${me.z}`);gt.setSeed(d.settings.seed);for(const p of d.chunks){const f=new Uint8Array(atob(p.voxelsB64).split("").map(w=>w.charCodeAt(0))),E={size:p.size,voxels:f};gt.chunkPipeline.ingestChunkData(p.key,E)}}catch(g){console.error("Failed to load snapshot; returning to Start Panel.",g);try{alert("Save file verification failed or is corrupted. Returning to Start Panel.")}catch{}Ac();const p=vn.getState();p.setGameStarted(!1),p.setInGame(!1);return}finally{delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED}else{const g=Math.floor(Math.sqrt(o)/2),p=Math.sqrt(o)-1-g;for(let f=-g;f<=p;f++)for(let E=-g;E<=p;E++)gt.ensureChunk(f,0,E)}const v=()=>{It&&ht&&i&&(It.onResize(),ht.aspect=i.clientWidth/i.clientHeight,ht.updateProjectionMatrix(),vt&&vt.setSize(i.clientWidth,i.clientHeight))};window.addEventListener("resize",v),ar=!0,lr=vn.getState().paused,Xa=performance.now(),Js=0,es=0,ns=requestAnimationFrame(bc)}function Ac(){ar=!1,lr=!1,ns!==null&&(cancelAnimationFrame(ns),ns=null),lt&&(lt.destroy(),lt=null),Ui&&(Ui.destroy(),Ui=null),wt&&(wt.dispose(),wt=null),nn&&(nn.dispose(),nn=null),dn&&(dn.dispose(),dn=null),Ii=null,ai&&(ai.destroy(),ai=null),or=null,fn&&(fn.dispose(),fn=null);try{tn?.dispose()}catch{}if(tn=null,Mt&&ri)try{Mt.remove(ri)}catch{}ri=null,gt&&(gt.destroy(),gt=null),is&&(is.dispose(),is=null),Vn&&Mt&&Vn.dispose(Mt),Vn=null,It&&(It.dispose(),It=null),Mt=null,ht=null,ss=600}function bv(){return{timeOfDay:{t:mt?mt.getTime():0,paused:!1,cycleSeconds:180},renderer:{exposure:It?It.getRenderer().toneMappingExposure:1}}}function Av(i){vt?(vt.setSSAO(!!i.ssaoEnabled,i.ssaoIntensity,i.ssaoRadius),vt.setBloom(!!i.bloomEnabled,i.bloomStrength,i.bloomThreshold),vt.setFog(!!i.fogEnabled,i.fogBaseDensity??.002,i.fogMaxDistance??ss),vt.setVolumetrics(!!i.volumetricsEnabled,i.volumetricsIntensity??.1,i.volumetricsSteps??32),vt.setColorGrading(i.exposure,i.contrast,i.saturation)):console.error("[Engine] Post-processor not available!")}function Cv(i){dn?dn.updateSettings(i):console.error("[Engine] Shadow system not available!")}function Rv(i){ev(i,{setTime:e=>{mt?.setTime(e)},setTimePaused:e=>{mt?.pause(e)},setCycleSeconds:e=>{mt?.setCycleSeconds(e)},setRendererExposure:e=>{It&&(It.getRenderer().toneMappingExposure=e)},setClouds:e=>{if(_t){if(e.coverage!==void 0&&_t.setCoverage(e.coverage),e.density!==void 0&&_t.setDensity(e.density),e.windDirection!==void 0||e.windSpeed!==void 0){const t=e.windDirection??Math.PI*.25,n=e.windSpeed??5;_t.setWind(t,n)}if(e.enabled!==void 0&&_t.setEnabled(e.enabled),wt&&_t){const t=_t.getWind();wt.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??_t.getCoverage(),density:e.density??_t.getDensity(),altitude:_t.getAltitude(),wind:t})}}}})}window.updatePostProcessingSettings=Av;window.updateShadowSettings=Cv;window.updateGraphicsSettings=Rv;window.getGraphicsSettings=bv;window.__saveWorld=()=>{wv()};window.__setSfxVolume=i=>{fn?.setVolume(i)};window.__getSfxVolume=()=>fn?.getVolume()??.7;window.__primeSfx=()=>{fn?.tryUnlockOnUserGesture()};window.__sfxBreak=()=>{fn?.playBreak()};window.__sfxPlace=()=>{fn?.playPlace()};const Pv={start:Tv,stop:Ac};export{Pv as engine};
