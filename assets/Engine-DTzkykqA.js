import{C as ue,P as Qe,I as tc,S as ar,a as Zc,g as Ca,c as Kc,u as xn,b as jc,d as $c,s as Qc,e as Jc,f as eh,h as th,i as nh}from"./index-BkVtwTbn.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="179",ih=0,Ra=1,sh=2,nc=1,ta=2,Rn=3,yn=0,Vt=1,on=2,Pn=0,Ii=1,lr=2,Da=3,Pa=4,rh=5,ii=100,oh=101,ah=102,lh=103,ch=104,hh=200,uh=201,dh=202,fh=203,uo=204,fo=205,ph=206,mh=207,gh=208,vh=209,_h=210,xh=211,Mh=212,Sh=213,yh=214,po=0,mo=1,go=2,Oi=3,vo=4,_o=5,xo=6,Mo=7,ic=0,wh=1,Eh=2,Xn=0,bh=1,Th=2,Ah=3,sc=4,Ch=5,Rh=6,Dh=7,rc=300,ki=301,Vi=302,So=303,yo=304,_r=306,ci=1e3,Ft=1001,wo=1002,Je=1003,Ph=1004,bs=1005,ln=1006,br=1007,oi=1008,oc=1008,gn=1009,ac=1010,lc=1011,hi=1012,na=1013,ui=1014,Mn=1015,Ln=1016,ia=1017,sa=1018,ds=1020,cc=35902,hc=1021,uc=1022,Xt=1023,di=1026,fs=1027,ra=1028,oa=1029,dc=1030,aa=1031,la=1033,Js=33776,er=33777,tr=33778,nr=33779,Eo=35840,bo=35841,To=35842,Ao=35843,Co=36196,Ro=37492,Do=37496,Po=37808,Lo=37809,Io=37810,Uo=37811,No=37812,Fo=37813,Bo=37814,zo=37815,Oo=37816,ko=37817,Vo=37818,Ho=37819,Go=37820,Wo=37821,ir=36492,Xo=36494,Yo=36495,fc=36283,qo=36284,Zo=36285,Ko=36286,Lh=3200,Ih=3201,Uh=0,Nh=1,Gn="",yt="srgb",Hi="srgb-linear",cr="linear",it="srgb",mi=7680,La=519,Fh=512,Bh=513,zh=514,pc=515,Oh=516,kh=517,Vh=518,Hh=519,Ia=35044,Ua="300 es",Sn=2e3,hr=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Na=1234567;const Ui=Math.PI/180,ps=180/Math.PI;function Yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function ca(i,e){return(i%e+e)%e}function Gh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Wh(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function Xh(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function Yh(i,e=1){return e-Math.abs(ca(i,e*2)-e)}function qh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Zh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Kh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jh(i,e){return i+Math.random()*(e-i)}function $h(i){return i*(.5-Math.random())}function Qh(i){i!==void 0&&(Na=i);let e=Na+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Jh(i){return i*Ui}function eu(i){return i*ps}function tu(i){return(i&i-1)===0&&i!==0}function nu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function su(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Pe={DEG2RAD:Ui,RAD2DEG:ps,generateUUID:Yi,clamp:Ye,euclideanModulo:ca,mapLinear:Gh,inverseLerp:Wh,lerp:as,damp:Xh,pingpong:Yh,smoothstep:qh,smootherstep:Zh,randInt:Kh,randFloat:jh,randFloatSpread:$h,seededRandom:Qh,degToRad:Jh,radToDeg:eu,isPowerOfTwo:tu,ceilPowerOfTwo:nu,floorPowerOfTwo:iu,setQuaternionFromProperEuler:su,normalize:Gt,denormalize:Pi};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vs{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],v=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(u!==g||l!==d||c!==p||h!==v){let m=1-a;const f=l*d+c*p+h*v+u*g,E=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const b=Math.sqrt(w),A=Math.atan2(b,f*E);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*E;if(l=l*m+d*x,c=c*m+p*x,h=h*m+v*x,u=u*m+g*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=b,c*=b,h*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],v=r[o+3];return e[t]=a*v+h*u+l*p-c*d,e[t+1]=l*v+h*d+c*u-a*p,e[t+2]=c*v+h*p+a*d-l*u,e[t+3]=h*v-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"YXZ":this._x=d*h*u+c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"ZXY":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u-d*p*v;break;case"ZYX":this._x=d*h*u-c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u+d*p*v;break;case"YZX":this._x=d*h*u+c*p*v,this._y=c*p*u+d*h*v,this._z=c*h*v-d*p*u,this._w=c*h*u-d*p*v;break;case"XZY":this._x=d*h*u-c*p*v,this._y=c*p*u-d*h*v,this._z=c*h*v+d*p*u,this._w=c*h*u+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Tr.copy(this).projectOnVector(e),this.sub(Tr)}reflect(e){return this.sub(Tr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new L,Fa=new vs;class ze{constructor(e,t,n,s,r,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],v=n[8],g=s[0],m=s[3],f=s[6],E=s[1],w=s[4],x=s[7],b=s[2],A=s[5],C=s[8];return r[0]=o*g+a*E+l*b,r[3]=o*m+a*w+l*A,r[6]=o*f+a*x+l*C,r[1]=c*g+h*E+u*b,r[4]=c*m+h*w+u*A,r[7]=c*f+h*x+u*C,r[2]=d*g+p*E+v*b,r[5]=d*m+p*w+v*A,r[8]=d*f+p*x+v*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,v=t*u+n*d+s*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=p*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new ze;function mc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){const i=ms("canvas");return i.style.display="block",i}const Ba={};function Ni(i){i in Ba||(Ba[i]=!0,console.warn(i))}function ou(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const za=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function au(){const i={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=In(s.r),s.g=In(s.g),s.b=In(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?cr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ni("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ni("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hi]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:za,fromXYZ:Oa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yt},outputColorSpaceConfig:{drawingBufferColorSpace:yt}},[yt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:za,fromXYZ:Oa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yt}}}),i}const je=au();function In(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let gi;class lu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=ms("canvas")),gi.width=e.width,gi.height=e.height;const s=gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ms("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=In(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(In(t[n]/255)*255):t[n]=In(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cu=0;class ha{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Yi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Cr(s[o].image)):r.push(Cr(s[o]))}else r=Cr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Cr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hu=0;const Rr=new L;class Bt extends Xi{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Ft,s=Ft,r=ln,o=oi,a=Xt,l=gn,c=Bt.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hu++}),this.uuid=Yi(),this.name="",this.source=new ha(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rr).x}get height(){return this.source.getSize(Rr).y}get depth(){return this.source.getSize(Rr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ci:e.x=e.x-Math.floor(e.x);break;case Ft:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ci:e.y=e.y-Math.floor(e.y);break;case Ft:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=rc;Bt.DEFAULT_ANISOTROPY=1;class mt{constructor(e=0,t=0,n=0,s=1){mt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,x=(p+1)/2,b=(f+1)/2,A=(h+d)/4,C=(u+g)/4,D=(v+m)/4;return w>x&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=A/n,r=C/n):x>b?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=A/s,r=D/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=D/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-v)*(m-v)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-v)/E,this.y=(u-g)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ha(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class gc extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class du extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=Ft,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hn):hn.fromBufferAttribute(r,o),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(e.matrixWorld),this.union(Ts)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ji),As.subVectors(this.max,ji),vi.subVectors(e.a,ji),_i.subVectors(e.b,ji),xi.subVectors(e.c,ji),Nn.subVectors(_i,vi),Fn.subVectors(xi,_i),Kn.subVectors(vi,xi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Kn.z,Kn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Kn.z,0,-Kn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Kn.y,Kn.x,0];return!Dr(t,vi,_i,xi,As)||(t=[1,0,0,0,1,0,0,0,1],!Dr(t,vi,_i,xi,As))?!1:(Cs.crossVectors(Nn,Fn),t=[Cs.x,Cs.y,Cs.z],Dr(t,vi,_i,xi,As))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const En=[new L,new L,new L,new L,new L,new L,new L,new L],hn=new L,Ts=new fi,vi=new L,_i=new L,xi=new L,Nn=new L,Fn=new L,Kn=new L,ji=new L,As=new L,Cs=new L,jn=new L;function Dr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){jn.fromArray(i,r);const a=s.x*Math.abs(jn.x)+s.y*Math.abs(jn.y)+s.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=n.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fu=new fi,$i=new L,Pr=new L;class qi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):fu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);const t=$i.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(Pr)),this.expandByPoint($i.copy(e.center).sub(Pr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const bn=new L,Lr=new L,Rs=new L,Bn=new L,Ir=new L,Ds=new L,Ur=new L;class vc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lr.copy(e).add(t).multiplyScalar(.5),Rs.copy(t).sub(e).normalize(),Bn.copy(this.origin).sub(Lr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Rs),a=Bn.dot(this.direction),l=-Bn.dot(Rs),c=Bn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,v;if(h>0)if(u=o*l-a,d=o*a-l,v=r*h,u>=0)if(d>=-v)if(d<=v){const g=1/h;u*=g,d*=g,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-v?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=v?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lr).addScaledVector(Rs,d),p}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){Ir.subVectors(t,e),Ds.subVectors(n,e),Ur.crossVectors(Ir,Ds);let o=this.direction.dot(Ur),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bn.subVectors(this.origin,e);const l=a*this.direction.dot(Ds.crossVectors(Bn,Ds));if(l<0)return null;const c=a*this.direction.dot(Ir.cross(Bn));if(c<0||l+c>o)return null;const h=-a*Bn.dot(Ur);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,v,g,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,v,g,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),o=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,v=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+v*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,v=c*h,g=c*u;t[0]=d+g*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,v=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,v=a*h,g=a*u;t[0]=l*h,t[4]=v*c-p,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=v*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+v,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,p=o*c,v=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=p*u-v,t[2]=v*u-p,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pu,e,mu)}lookAt(e,t,n){const s=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),zn.crossVectors(n,jt),zn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),zn.crossVectors(n,jt)),zn.normalize(),Ps.crossVectors(jt,zn),s[0]=zn.x,s[4]=Ps.x,s[8]=jt.x,s[1]=zn.y,s[5]=Ps.y,s[9]=jt.y,s[2]=zn.z,s[6]=Ps.z,s[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],v=n[2],g=n[6],m=n[10],f=n[14],E=n[3],w=n[7],x=n[11],b=n[15],A=s[0],C=s[4],D=s[8],M=s[12],y=s[1],R=s[5],B=s[9],F=s[13],O=s[2],X=s[6],G=s[10],K=s[14],k=s[3],te=s[7],oe=s[11],pe=s[15];return r[0]=o*A+a*y+l*O+c*k,r[4]=o*C+a*R+l*X+c*te,r[8]=o*D+a*B+l*G+c*oe,r[12]=o*M+a*F+l*K+c*pe,r[1]=h*A+u*y+d*O+p*k,r[5]=h*C+u*R+d*X+p*te,r[9]=h*D+u*B+d*G+p*oe,r[13]=h*M+u*F+d*K+p*pe,r[2]=v*A+g*y+m*O+f*k,r[6]=v*C+g*R+m*X+f*te,r[10]=v*D+g*B+m*G+f*oe,r[14]=v*M+g*F+m*K+f*pe,r[3]=E*A+w*y+x*O+b*k,r[7]=E*C+w*R+x*X+b*te,r[11]=E*D+w*B+x*G+b*oe,r[15]=E*M+w*F+x*K+b*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+g*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],E=u*m*c-g*d*c+g*l*p-a*m*p-u*l*f+a*d*f,w=v*d*c-h*m*c-v*l*p+o*m*p+h*l*f-o*d*f,x=h*g*c-v*u*c+v*a*p-o*g*p-h*a*f+o*u*f,b=v*u*l-h*g*l-v*a*d+o*g*d+h*a*m-o*u*m,A=t*E+n*w+s*x+r*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=E*C,e[1]=(g*d*r-u*m*r-g*s*p+n*m*p+u*s*f-n*d*f)*C,e[2]=(a*m*r-g*l*r+g*s*c-n*m*c-a*s*f+n*l*f)*C,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*C,e[4]=w*C,e[5]=(h*m*r-v*d*r+v*s*p-t*m*p-h*s*f+t*d*f)*C,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*f-t*l*f)*C,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*C,e[8]=x*C,e[9]=(v*u*r-h*g*r-v*n*p+t*g*p+h*n*f-t*u*f)*C,e[10]=(o*g*r-v*a*r+v*n*c-t*g*c-o*n*f+t*a*f)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*C,e[12]=b*C,e[13]=(h*g*s-v*u*s+v*n*d-t*g*d-h*n*m+t*u*m)*C,e[14]=(v*a*s-o*g*s-v*n*l+t*g*l+o*n*m-t*a*m)*C,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,v=r*u,g=o*h,m=o*u,f=a*u,E=l*c,w=l*h,x=l*u,b=n.x,A=n.y,C=n.z;return s[0]=(1-(g+f))*b,s[1]=(p+x)*b,s[2]=(v-w)*b,s[3]=0,s[4]=(p-x)*A,s[5]=(1-(d+f))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(v+w)*C,s[9]=(m-E)*C,s[10]=(1-(d+g))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],un.copy(this);const c=1/r,h=1/o,u=1/a;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,t.setFromRotationMatrix(un),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let v,g;if(l)v=r/(o-r),g=o*r/(o-r);else if(a===Sn)v=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===hr)v=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Sn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s);let v,g;if(l)v=1/(o-r),g=o/(o-r);else if(a===Sn)v=-2/(o-r),g=-(o+r)/(o-r);else if(a===hr)v=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=v,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Mi=new L,un=new Ge,pu=new L(0,0,0),mu=new L(1,1,1),zn=new L,Ps=new L,jt=new L,ka=new Ge,Va=new vs;class Un{constructor(e=0,t=0,n=0,s=Un.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Un.DEFAULT_ORDER="XYZ";class _c{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gu=0;const Ha=new L,Si=new vs,Tn=new Ge,Ls=new L,Qi=new L,vu=new L,_u=new vs,Ga=new L(1,0,0),Wa=new L(0,1,0),Xa=new L(0,0,1),Ya={type:"added"},xu={type:"removed"},yi={type:"childadded",child:null},Nr={type:"childremoved",child:null};class Lt extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=Yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new L,t=new Un,n=new vs,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Ga,e)}rotateY(e){return this.rotateOnAxis(Wa,e)}rotateZ(e){return this.rotateOnAxis(Xa,e)}translateOnAxis(e,t){return Ha.copy(e).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ga,e)}translateY(e){return this.translateOnAxis(Wa,e)}translateZ(e){return this.translateOnAxis(Xa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Qi,Ls,this.up):Tn.lookAt(Ls,Qi,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),Si.setFromRotationMatrix(Tn),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ya),yi.child=e,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ya),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new L,An=new L,Fr=new L,Cn=new L,wi=new L,Ei=new L,qa=new L,Br=new L,zr=new L,Or=new L,kr=new mt,Vr=new mt,Hr=new mt;class an{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),dn.subVectors(e,t),s.cross(dn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){dn.subVectors(s,t),An.subVectors(n,t),Fr.subVectors(e,t);const o=dn.dot(dn),a=dn.dot(An),l=dn.dot(Fr),c=An.dot(An),h=An.dot(Fr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,v=(o*h-a*l)*d;return r.set(1-p-v,v,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return kr.setScalar(0),Vr.setScalar(0),Hr.setScalar(0),kr.fromBufferAttribute(e,t),Vr.fromBufferAttribute(e,n),Hr.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(kr,r.x),o.addScaledVector(Vr,r.y),o.addScaledVector(Hr,r.z),o}static isFrontFacing(e,t,n,s){return dn.subVectors(n,t),An.subVectors(e,t),dn.cross(An).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return dn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),dn.cross(An).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;wi.subVectors(s,n),Ei.subVectors(r,n),Br.subVectors(e,n);const l=wi.dot(Br),c=Ei.dot(Br);if(l<=0&&c<=0)return t.copy(n);zr.subVectors(e,s);const h=wi.dot(zr),u=Ei.dot(zr);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(wi,o);Or.subVectors(e,r);const p=wi.dot(Or),v=Ei.dot(Or);if(v>=0&&p<=v)return t.copy(r);const g=p*c-l*v;if(g<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(Ei,a);const m=h*v-p*u;if(m<=0&&u-h>=0&&p-v>=0)return qa.subVectors(r,s),a=(u-h)/(u-h+(p-v)),t.copy(s).addScaledVector(qa,a);const f=1/(m+g+d);return o=g*f,a=d*f,t.copy(n).addScaledVector(wi,o).addScaledVector(Ei,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=n,je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=je.workingColorSpace){if(e=ca(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gr(o,r,e+1/3),this.g=Gr(o,r,e),this.b=Gr(o,r,e-1/3)}return je.colorSpaceToWorking(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=xc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=In(e.r),this.g=In(e.g),this.b=In(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return je.workingToColorSpace(Ot.copy(this),e),Math.round(Ye(Ot.r*255,0,255))*65536+Math.round(Ye(Ot.g*255,0,255))*256+Math.round(Ye(Ot.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.workingToColorSpace(Ot.copy(this),t);const n=Ot.r,s=Ot.g,r=Ot.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=je.workingColorSpace){return je.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=yt){je.workingToColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,s=Ot.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Is);const n=as(On.h,Is.h,t),s=as(On.s,Is.s,t),r=as(On.l,Is.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Ce;Ce.NAMES=xc;let Mu=0;class _s extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Yi(),this.name="",this.type="Material",this.blending=Ii,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uo,this.blendDst=fo,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Oi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=La,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mi,this.stencilZFail=mi,this.stencilZPass=mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uo&&(n.blendSrc=this.blendSrc),this.blendDst!==fo&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==La&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ua extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new L,Us=new Ae;let Su=0;class ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Su++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Us.fromBufferAttribute(this,t),Us.applyMatrix3(e),this.setXY(t,Us.x,Us.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),e}}class Mc extends ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Sc extends ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yu=0;const tn=new Ge,Wr=new Lt,bi=new L,$t=new fi,Ji=new fi,Pt=new L;class Yt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Yi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mc(e)?Sc:Mc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bi).negate(),this.translate(bi.x,bi.y,bi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ji.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors($t.min,Ji.min),$t.expandByPoint(Pt),Pt.addVectors($t.max,Ji.max),$t.expandByPoint(Pt)):($t.expandByPoint(Ji.min),$t.expandByPoint(Ji.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Pt.fromBufferAttribute(a,c),l&&(bi.fromBufferAttribute(e,c),Pt.add(bi)),s=Math.max(s,n.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ht(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new L,l[D]=new L;const c=new L,h=new L,u=new L,d=new Ae,p=new Ae,v=new Ae,g=new L,m=new L;function f(D,M,y){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,D),p.fromBufferAttribute(r,M),v.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),v.sub(d);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(h).multiplyScalar(v.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-v.x).multiplyScalar(R),a[D].add(g),a[M].add(g),a[y].add(g),l[D].add(m),l[M].add(m),l[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let D=0,M=E.length;D<M;++D){const y=E[D],R=y.start,B=y.count;for(let F=R,O=R+B;F<O;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const w=new L,x=new L,b=new L,A=new L;function C(D){b.fromBufferAttribute(s,D),A.copy(b);const M=a[D];w.copy(M),w.sub(b.multiplyScalar(b.dot(M))).normalize(),x.crossVectors(A,M);const R=x.dot(l[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,R)}for(let D=0,M=E.length;D<M;++D){const y=E[D],R=y.start,B=y.count;for(let F=R,O=R+B;F<O;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*h;for(let f=0;f<h;f++)d[v++]=c[p++]}return new ht(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new Ge,$n=new vc,Ns=new qi,Ka=new L,Fs=new L,Bs=new L,zs=new L,Xr=new L,Os=new L,ja=new L,ks=new L;class Tt extends Lt{constructor(e=new Yt,t=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Xr.fromBufferAttribute(u,e),o?Os.addScaledVector(Xr,h):Os.addScaledVector(Xr.sub(t),h))}t.add(Os)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Ns.containsPoint($n.origin)===!1&&($n.intersectSphere(Ns,Ka)===null||$n.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&(Za.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Za),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,b=w;x<b;x+=3){const A=a.getX(x),C=a.getX(x+1),D=a.getX(x+2);s=Vs(this,f,e,n,c,h,u,A,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const E=a.getX(m),w=a.getX(m+1),x=a.getX(m+2);s=Vs(this,o,e,n,c,h,u,E,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],f=o[m.materialIndex],E=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=E,b=w;x<b;x+=3){const A=x,C=x+1,D=x+2;s=Vs(this,f,e,n,c,h,u,A,C,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const E=m,w=m+1,x=m+2;s=Vs(this,o,e,n,c,h,u,E,w,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function wu(i,e,t,n,s,r,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===yn,a),l===null)return null;ks.copy(a),ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ks);return c<t.near||c>t.far?null:{distance:c,point:ks.clone(),object:i}}function Vs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Fs),i.getVertexPosition(l,Bs),i.getVertexPosition(c,zs);const h=wu(i,e,t,n,Fs,Bs,zs,ja);if(h){const u=new L;an.getBarycoord(ja,Fs,Bs,zs,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,l,c,u,new Ae)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,l,c,u,new Ae)),o&&(h.normal=an.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};an.getNormal(Fs,Bs,zs,d.normal),h.face=d,h.barycoord=u}return h}class Yn extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(u,2));function v(g,m,f,E,w,x,b,A,C,D,M){const y=x/C,R=b/D,B=x/2,F=b/2,O=A/2,X=C+1,G=D+1;let K=0,k=0;const te=new L;for(let oe=0;oe<G;oe++){const pe=oe*R-F;for(let Ue=0;Ue<X;Ue++){const We=Ue*y-B;te[g]=We*E,te[m]=pe*w,te[f]=O,c.push(te.x,te.y,te.z),te[g]=0,te[m]=0,te[f]=A>0?1:-1,h.push(te.x,te.y,te.z),u.push(Ue/C),u.push(1-oe/D),K+=1}}for(let oe=0;oe<D;oe++)for(let pe=0;pe<C;pe++){const Ue=d+pe+X*oe,We=d+pe+X*(oe+1),Ve=d+(pe+1)+X*(oe+1),W=d+(pe+1)+X*oe;l.push(Ue,We,W),l.push(We,Ve,W),k+=6}a.addGroup(p,k,M),p+=k,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const gs={clone:Gi,merge:Wt};var bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wt extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bu,this.fragmentShader=Tu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class wc extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new L,$a=new Ae,Qa=new Ae;class rn extends wc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ps*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kn.x,kn.y).multiplyScalar(-e/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-e/kn.z)}getViewSize(e,t){return this.getViewBounds(e,$a,Qa),t.subVectors(Qa,$a)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ti=-90,Ai=1;class Au extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new rn(Ti,Ai,e,t);s.layers=this.layers,this.add(s);const r=new rn(Ti,Ai,e,t);r.layers=this.layers,this.add(r);const o=new rn(Ti,Ai,e,t);o.layers=this.layers,this.add(o);const a=new rn(Ti,Ai,e,t);a.layers=this.layers,this.add(a);const l=new rn(Ti,Ai,e,t);l.layers=this.layers,this.add(l);const c=new rn(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class da extends Bt{constructor(e=[],t=ki,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cu extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new da(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yn(5,5,5),r=new wt({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:Pn});r.uniforms.tEquirect.value=t;const o=new Tt(s,r),a=t.minFilter;return t.minFilter===oi&&(t.minFilter=ln),new Au(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class bt extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ru={type:"move"};class Yr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(c,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,v=.005;c.inputState.pinching&&d>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ru)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Du extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ec extends Bt{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Je,h=Je,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja extends ht{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ci=new Ge,el=new Ge,Hs=[],tl=new fi,Pu=new Ge,es=new Tt,ts=new qi;class nl extends Tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new fi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),tl.copy(e.boundingBox).applyMatrix4(Ci),this.boundingBox.union(tl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ci),ts.copy(e.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(es.geometry=this.geometry,es.material=this.material,es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ts.copy(this.boundingSphere),ts.applyMatrix4(n),e.ray.intersectsSphere(ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),el.multiplyMatrices(n,Ci),es.matrixWorld=el,es.raycast(e,Hs);for(let o=0,a=Hs.length;o<a;o++){const l=Hs[o];l.instanceId=r,l.object=this,t.push(l)}Hs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ec(new Float32Array(s*this.count),s,this.count,ra,Mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qr=new L,Lu=new L,Iu=new ze;class ti{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=qr.subVectors(n,t).cross(Lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Iu.getNormalMatrix(e),s=this.coplanarPoint(qr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new qi,Uu=new Ae(.5,.5),Gs=new L;class fa{constructor(e=new ti,t=new ti,n=new ti,s=new ti,r=new ti,o=new ti){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn,n=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],v=r[8],g=r[9],m=r[10],f=r[11],E=r[12],w=r[13],x=r[14],b=r[15];if(s[0].setComponents(c-o,p-h,f-v,b-E).normalize(),s[1].setComponents(c+o,p+h,f+v,b+E).normalize(),s[2].setComponents(c+a,p+u,f+g,b+w).normalize(),s[3].setComponents(c-a,p-u,f-g,b-w).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,p-d,f-m,b-x).normalize();else if(s[4].setComponents(c-l,p-d,f-m,b-x).normalize(),t===Sn)s[5].setComponents(c+l,p+d,f+m,b+x).normalize();else if(t===hr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Uu.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Gs.x=s.normal.x>0?e.max.x:e.min.x,Gs.y=s.normal.y>0?e.max.y:e.min.y,Gs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bc extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ur=new L,dr=new L,il=new Ge,ns=new vc,Ws=new qi,Zr=new L,sl=new L;class Nu extends Lt{constructor(e=new Yt,t=new bc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ur.fromBufferAttribute(t,s-1),dr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ur.distanceTo(dr);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),Ws.radius+=r,e.ray.intersectsSphere(Ws)===!1)return;il.copy(s).invert(),ns.copy(e.ray).applyMatrix4(il);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),v=Math.min(h.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const f=h.getX(g),E=h.getX(g+1),w=Xs(this,e,ns,l,f,E,g);w&&t.push(w)}if(this.isLineLoop){const g=h.getX(v-1),m=h.getX(p),f=Xs(this,e,ns,l,g,m,v-1);f&&t.push(f)}}else{const p=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let g=p,m=v-1;g<m;g+=c){const f=Xs(this,e,ns,l,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=Xs(this,e,ns,l,v-1,p,v-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Xs(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if(ur.fromBufferAttribute(a,s),dr.fromBufferAttribute(a,r),t.distanceSqToSegment(ur,dr,Zr,sl)>n)return;Zr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zr);if(!(c<e.near||c>e.far))return{distance:c,point:sl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const rl=new L,ol=new L;class Fu extends Nu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)rl.fromBufferAttribute(t,s),ol.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rl.distanceTo(ol);e.setAttribute("lineDistance",new It(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pa extends Bt{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xr extends Bt{constructor(e,t,n=ui,s,r,o,a=Je,l=Je,c,h=di,u=1){if(h!==di&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ha(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ys=new L,qs=new L,Kr=new L,Zs=new an;class Bu extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const s=Math.pow(10,4),r=Math.cos(Ui*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:g,b:m,c:f}=Zs;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Zs.getNormal(Kr),u[0]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const w=(E+1)%3,x=u[E],b=u[w],A=Zs[h[E]],C=Zs[h[w]],D=`${x}_${b}`,M=`${b}_${x}`;M in d&&d[M]?(Kr.dot(d[M].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(C.x,C.y,C.z)),d[M]=null):D in d||(d[D]={index0:c[E],index1:c[w],normal:Kr.clone()})}}for(const v in d)if(d[v]){const{index0:g,index1:m}=d[v];Ys.fromBufferAttribute(a,g),qs.fromBufferAttribute(a,m),p.push(Ys.x,Ys.y,Ys.z),p.push(qs.x,qs.y,qs.z)}this.setAttribute("position",new It(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class xs extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let w=0;w<c;w++){const x=w*u-r;v.push(x,-E,0),g.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const w=E+c*f,x=E+c*(f+1),b=E+1+c*(f+1),A=E+1+c*f;p.push(w,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xs(e.width,e.height,e.widthSegments,e.heightSegments)}}class ma extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],v=[],g=[],m=[];for(let f=0;f<=n;f++){const E=[],w=f/n;let x=0;f===0&&o===0?x=.5/t:f===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){const A=b/t;u.x=-e*Math.cos(s+A*r)*Math.sin(o+w*a),u.y=e*Math.cos(o+w*a),u.z=e*Math.sin(s+A*r)*Math.sin(o+w*a),v.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(A+x,1-w),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const w=h[f][E+1],x=h[f][E],b=h[f+1][E],A=h[f+1][E+1];(f!==0||o>0)&&p.push(w,x,A),(f!==n-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new It(v,3)),this.setAttribute("normal",new It(g,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zu extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ou extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class ku{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],v=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return v}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Vu=new ku;class ga{constructor(e){this.manager=e!==void 0?e:Vu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ga.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ri=new WeakMap;class Hu extends ga{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=jr.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Ri.get(o);u===void 0&&(u=[],Ri.set(o,u)),u.push({onLoad:t,onError:s})}return o}const a=ms("img");function l(){h(),t&&t(this);const u=Ri.get(this)||[];for(let d=0;d<u.length;d++){const p=u[d];p.onLoad&&p.onLoad(this)}Ri.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),jr.remove(`image:${e}`);const d=Ri.get(this)||[];for(let p=0;p<d.length;p++){const v=d[p];v.onError&&v.onError(u)}Ri.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),jr.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class Ms extends ga{constructor(e){super(e)}load(e,t,n,s){const r=new Bt,o=new Hu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class va extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Gu extends va{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new Ge,al=new L,ll=new L;class Wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;al.setFromMatrixPosition(e.matrixWorld),t.position.copy(al),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mr extends wc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xu extends Wu{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new Xu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Yu extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qu extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Zu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cl(i,e,t,n){const s=Ku(n);switch(t){case hc:return i*e;case ra:return i*e/s.components*s.byteLength;case oa:return i*e/s.components*s.byteLength;case dc:return i*e*2/s.components*s.byteLength;case aa:return i*e*2/s.components*s.byteLength;case uc:return i*e*3/s.components*s.byteLength;case Xt:return i*e*4/s.components*s.byteLength;case la:return i*e*4/s.components*s.byteLength;case Js:case er:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bo:case Ao:return Math.max(i,16)*Math.max(e,8)/4;case Eo:case To:return Math.max(i,8)*Math.max(e,8)/2;case Co:case Ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ir:case Xo:case Yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fc:case qo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Zo:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ku(i){switch(i){case gn:case ac:return{byteLength:1,components:1};case hi:case lc:case Ln:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case ui:case na:case Mn:return{byteLength:4,components:1};case cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ac(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ju(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,v)=>p.start-v.start);let d=0;for(let p=1;p<u.length;p++){const v=u[d],g=u[p];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++d,u[d]=g)}u.length=d+1;for(let p=0,v=u.length;p<v;p++){const g=u[p];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var $u=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qu=`#ifdef USE_ALPHAHASH
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
#endif`,Ju=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,id=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rd=`#ifdef USE_BATCHING
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
#endif`,od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ad=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Md=`#define PI 3.141592653589793
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
} // validated`,Sd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yd=`vec3 transformedNormal = objectNormal;
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
#endif`,wd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Dd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hd=`uniform bool receiveShadow;
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
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zd=`PhysicalMaterial material;
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
#endif`,Kd=`struct PhysicalMaterial {
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
}`,jd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,of=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,af=`#if defined( USE_POINTS_UV )
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
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,df=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
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
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mf=`#ifdef USE_NORMALMAP
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
#endif`,Sf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Af=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ff=`float getShadowMask() {
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
}`,Bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zf=`#ifdef USE_SKINNING
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
#endif`,Of=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
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
#endif`,Vf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
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
#endif`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $f=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qf=`uniform sampler2D t2D;
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,op=`#define DISTANCE
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
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
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
}`,hp=`uniform vec3 diffuse;
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
}`,up=`#include <common>
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
}`,dp=`uniform vec3 diffuse;
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
}`,fp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,mp=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,vp=`#define NORMAL
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
}`,_p=`#define NORMAL
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
}`,xp=`#define PHONG
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
}`,Mp=`#define PHONG
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
}`,Sp=`#define STANDARD
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
}`,yp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Ep=`#define TOON
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
}`,bp=`uniform float size;
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
}`,Tp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Cp=`uniform vec3 color;
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
}`,Rp=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:$u,alphahash_pars_fragment:Qu,alphamap_fragment:Ju,alphamap_pars_fragment:ed,alphatest_fragment:td,alphatest_pars_fragment:nd,aomap_fragment:id,aomap_pars_fragment:sd,batching_pars_vertex:rd,batching_vertex:od,begin_vertex:ad,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:dd,clipping_planes_pars_fragment:fd,clipping_planes_pars_vertex:pd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:_d,color_vertex:xd,common:Md,cube_uv_reflection_fragment:Sd,defaultnormal_vertex:yd,displacementmap_pars_vertex:wd,displacementmap_vertex:Ed,emissivemap_fragment:bd,emissivemap_pars_fragment:Td,colorspace_fragment:Ad,colorspace_pars_fragment:Cd,envmap_fragment:Rd,envmap_common_pars_fragment:Dd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Gd,envmap_vertex:Id,fog_vertex:Ud,fog_pars_vertex:Nd,fog_fragment:Fd,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:Od,lights_lambert_fragment:kd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Hd,lights_toon_fragment:Wd,lights_toon_pars_fragment:Xd,lights_phong_fragment:Yd,lights_phong_pars_fragment:qd,lights_physical_fragment:Zd,lights_physical_pars_fragment:Kd,lights_fragment_begin:jd,lights_fragment_maps:$d,lights_fragment_end:Qd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:sf,map_pars_fragment:rf,map_particle_fragment:of,map_particle_pars_fragment:af,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:hf,morphcolor_vertex:uf,morphnormal_vertex:df,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:vf,normal_pars_vertex:_f,normal_vertex:xf,normalmap_pars_fragment:Mf,clearcoat_normal_fragment_begin:Sf,clearcoat_normal_fragment_maps:yf,clearcoat_pars_fragment:wf,iridescence_pars_fragment:Ef,opaque_fragment:bf,packing:Tf,premultiplied_alpha_fragment:Af,project_vertex:Cf,dithering_fragment:Rf,dithering_pars_fragment:Df,roughnessmap_fragment:Pf,roughnessmap_pars_fragment:Lf,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Uf,shadowmap_vertex:Nf,shadowmask_pars_fragment:Ff,skinbase_vertex:Bf,skinning_pars_vertex:zf,skinning_vertex:Of,skinnormal_vertex:kf,specularmap_fragment:Vf,specularmap_pars_fragment:Hf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:Yf,uv_pars_fragment:qf,uv_pars_vertex:Zf,uv_vertex:Kf,worldpos_vertex:jf,background_vert:$f,background_frag:Qf,backgroundCube_vert:Jf,backgroundCube_frag:ep,cube_vert:tp,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:op,equirect_vert:ap,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:hp,meshbasic_vert:up,meshbasic_frag:dp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:vp,meshnormal_frag:_p,meshphong_vert:xp,meshphong_frag:Mp,meshphysical_vert:Sp,meshphysical_frag:yp,meshtoon_vert:wp,meshtoon_frag:Ep,points_vert:bp,points_frag:Tp,shadow_vert:Ap,shadow_frag:Cp,sprite_vert:Rp,sprite_frag:Dp},ae={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},_n={basic:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Wt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Wt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Wt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Wt([ae.points,ae.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Wt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Wt([ae.common,ae.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Wt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Wt([ae.sprite,ae.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Wt([ae.common,ae.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Wt([ae.lights,ae.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};_n.physical={uniforms:Wt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Ks={r:0,b:0,g:0},Jn=new Un,Pp=new Ge;function Lp(i,e,t,n,s,r,o){const a=new Ce(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function v(w){let x=w.isScene===!0?w.background:null;return x&&x.isTexture&&(x=(w.backgroundBlurriness>0?t:e).get(x)),x}function g(w){let x=!1;const b=v(w);b===null?f(a,l):b&&b.isColor&&(f(b,1),x=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,x){const b=v(x);b&&(b.isCubeTexture||b.mapping===_r)?(h===void 0&&(h=new Tt(new Yn(1,1,1),new wt({name:"BackgroundCubeMaterial",uniforms:Gi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Jn.copy(x.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Jn)),h.material.toneMapped=je.getTransfer(b.colorSpace)!==it,(u!==b||d!==b.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Tt(new xs(2,2),new wt({name:"BackgroundMaterial",uniforms:Gi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=je.getTransfer(b.colorSpace)!==it,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,x){w.getRGB(Ks,yc(i)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,x,o)}function E(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,x=1){a.set(w),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:g,addToRenderList:m,dispose:E}}function Ip(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,R,B,F,O){let X=!1;const G=u(F,B,R);r!==G&&(r=G,c(r.object)),X=p(y,F,B,O),X&&v(y,F,B,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,x(y,R,B,F),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function h(y){return i.deleteVertexArray(y)}function u(y,R,B){const F=B.wireframe===!0;let O=n[y.id];O===void 0&&(O={},n[y.id]=O);let X=O[R.id];X===void 0&&(X={},O[R.id]=X);let G=X[F];return G===void 0&&(G=d(l()),X[F]=G),G}function d(y){const R=[],B=[],F=[];for(let O=0;O<t;O++)R[O]=0,B[O]=0,F[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,R,B,F){const O=r.attributes,X=R.attributes;let G=0;const K=B.getAttributes();for(const k in K)if(K[k].location>=0){const oe=O[k];let pe=X[k];if(pe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(pe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(pe=y.instanceColor)),oe===void 0||oe.attribute!==pe||pe&&oe.data!==pe.data)return!0;G++}return r.attributesNum!==G||r.index!==F}function v(y,R,B,F){const O={},X=R.attributes;let G=0;const K=B.getAttributes();for(const k in K)if(K[k].location>=0){let oe=X[k];oe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(oe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(oe=y.instanceColor));const pe={};pe.attribute=oe,oe&&oe.data&&(pe.data=oe.data),O[k]=pe,G++}r.attributes=O,r.attributesNum=G,r.index=F}function g(){const y=r.newAttributes;for(let R=0,B=y.length;R<B;R++)y[R]=0}function m(y){f(y,0)}function f(y,R){const B=r.newAttributes,F=r.enabledAttributes,O=r.attributeDivisors;B[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),O[y]!==R&&(i.vertexAttribDivisor(y,R),O[y]=R)}function E(){const y=r.newAttributes,R=r.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==y[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function w(y,R,B,F,O,X,G){G===!0?i.vertexAttribIPointer(y,R,B,O,X):i.vertexAttribPointer(y,R,B,F,O,X)}function x(y,R,B,F){g();const O=F.attributes,X=B.getAttributes(),G=R.defaultAttributeValues;for(const K in X){const k=X[K];if(k.location>=0){let te=O[K];if(te===void 0&&(K==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),K==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const oe=te.normalized,pe=te.itemSize,Ue=e.get(te);if(Ue===void 0)continue;const We=Ue.buffer,Ve=Ue.type,W=Ue.bytesPerElement,ie=Ve===i.INT||Ve===i.UNSIGNED_INT||te.gpuType===na;if(te.isInterleavedBufferAttribute){const ne=te.data,Se=ne.stride,Ee=te.offset;if(ne.isInstancedInterleavedBuffer){for(let Fe=0;Fe<k.locationSize;Fe++)f(k.location+Fe,ne.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Fe=0;Fe<k.locationSize;Fe++)m(k.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,We);for(let Fe=0;Fe<k.locationSize;Fe++)w(k.location+Fe,pe/k.locationSize,Ve,oe,Se*W,(Ee+pe/k.locationSize*Fe)*W,ie)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)f(k.location+ne,te.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ne=0;ne<k.locationSize;ne++)w(k.location+ne,pe/k.locationSize,Ve,oe,pe*W,pe/k.locationSize*ne*W,ie)}}else if(G!==void 0){const oe=G[K];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(k.location,oe);break;case 3:i.vertexAttrib3fv(k.location,oe);break;case 4:i.vertexAttrib4fv(k.location,oe);break;default:i.vertexAttrib1fv(k.location,oe)}}}}E()}function b(){D();for(const y in n){const R=n[y];for(const B in R){const F=R[B];for(const O in F)h(F[O].object),delete F[O];delete R[B]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const R=n[y.id];for(const B in R){const F=R[B];for(const O in F)h(F[O].object),delete F[O];delete R[B]}delete n[y.id]}function C(y){for(const R in n){const B=n[R];if(B[y.id]===void 0)continue;const F=B[y.id];for(const O in F)h(F[O].object),delete F[O];delete B[y.id]}}function D(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:M,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:E}}function Up(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let v=0;for(let g=0;g<u;g++)v+=h[g]*d[g];t.update(v,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Np(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Xt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Mn&&!D)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function Fp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ti,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const v=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,w=E*4;let x=f.clippingState||null;l.value=x,x=h(v,d,w,p);for(let b=0;b!==w;++b)x[b]=t[b];f.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,v){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,x=p;w!==g;++w,x+=4)o.copy(u[w]).applyMatrix4(E,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Bp(i){let e=new WeakMap;function t(o,a){return a===So?o.mapping=ki:a===yo&&(o.mapping=Vi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===So||a===yo)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Cu(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Li=4,hl=[.125,.215,.35,.446,.526,.582],si=20,Qr=new Mr,ul=new Ce;let Jr=null,eo=0,to=0,no=!1;const ni=(1+Math.sqrt(5))/2,Di=1/ni,dl=[new L(-ni,Di,0),new L(ni,Di,0),new L(-Di,0,ni),new L(Di,0,ni),new L(0,ni,-Di),new L(0,ni,Di),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],zp=new L;class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:o=256,position:a=zp}=r;Jr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jr,eo,to),this._renderer.xr.enabled=no,e.scissorTest=!1,js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ki||e.mapping===Vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jr=this._renderer.getRenderTarget(),eo=this._renderer.getActiveCubeFace(),to=this._renderer.getActiveMipmapLevel(),no=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ln,format:Xt,colorSpace:Hi,depthBuffer:!1},s=fl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Op(r)),this._blurMaterial=kp(r,e,t)}return s}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,n,s,r){const l=new rn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ul),u.toneMapping=Xn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const g=new ua({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new Tt(new Yn,g);let f=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,f=!0):(g.color.copy(ul),f=!0);for(let w=0;w<6;w++){const x=w%3;x===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):x===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));const b=this._cubeSize;js(s,x*b,w>2?b:0,b,b),u.setRenderTarget(s),f&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===ki||e.mapping===Vi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=dl[(s-r-1)%dl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Tt(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*si-1),g=r/v,m=isFinite(r)?1+Math.floor(h*g):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const f=[];let E=0;for(let C=0;C<si;++C){const D=C/g,M=Math.exp(-D*D/2);f.push(M),C===0?E+=M:C<m&&(E+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=v,d.mipInt.value=w-n;const x=this._sizeLods[s],b=3*x*(s>w-Li?s-w+Li:0),A=4*(this._cubeSize-x);js(t,b,A,3*x,2*x),l.setRenderTarget(t),l.render(u,Qr)}}function Op(i){const e=[],t=[],n=[];let s=i;const r=i-Li+1+hl.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Li?l=hl[o-i+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,v=6,g=3,m=2,f=1,E=new Float32Array(g*v*p),w=new Float32Array(m*v*p),x=new Float32Array(f*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,D=A>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];E.set(M,g*v*A),w.set(d,m*v*A);const y=[A,A,A,A,A,A];x.set(y,f*v*A)}const b=new Yt;b.setAttribute("position",new ht(E,g)),b.setAttribute("uv",new ht(w,m)),b.setAttribute("faceIndex",new ht(x,f)),e.push(b),s>Li&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fl(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kp(i,e,t){const n=new Float32Array(si),s=new L(0,1,0);return new wt({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function pl(){return new wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ml(){return new wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function _a(){return`

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
	`}function Vp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===So||l===yo,h=l===ki||l===Vi;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jo(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new jo(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Hp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ni("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Gp(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,v=u.attributes.position;let g=0;if(p!==null){const E=p.array;g=p.version;for(let w=0,x=E.length;w<x;w+=3){const b=E[w+0],A=E[w+1],C=E[w+2];d.push(b,A,A,C,C,b)}}else if(v!==void 0){const E=v.array;g=v.version;for(let w=0,x=E.length/3-1;w<x;w+=3){const b=w+0,A=w+1,C=w+2;d.push(b,A,A,C,C,b)}}else return;const m=new(mc(d)?Sc:Mc)(d,1);m.version=g;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wp(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,v){v!==0&&(i.drawElementsInstanced(n,p,r,d*o,v),t.update(p,n,v))}function h(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,v);let m=0;for(let f=0;f<v;f++)m+=p[f];t.update(m,n,1)}function u(d,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,g,0,v);let f=0;for(let E=0;E<v;E++)f+=p[E]*g[E];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Xp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yp(i,e,t){const n=new WeakMap,s=new mt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let w=0;p===!0&&(w=1),v===!0&&(w=2),g===!0&&(w=3);let x=a.attributes.position.count*w,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const A=new Float32Array(x*b*4*u),C=new gc(A,x,b,u);C.type=Mn,C.needsUpdate=!0;const D=w*4;for(let y=0;y<u;y++){const R=m[y],B=f[y],F=E[y],O=x*b*4*y;for(let X=0;X<R.count;X++){const G=X*D;p===!0&&(s.fromBufferAttribute(R,X),A[O+G+0]=s.x,A[O+G+1]=s.y,A[O+G+2]=s.z,A[O+G+3]=0),v===!0&&(s.fromBufferAttribute(B,X),A[O+G+4]=s.x,A[O+G+5]=s.y,A[O+G+6]=s.z,A[O+G+7]=0),g===!0&&(s.fromBufferAttribute(F,X),A[O+G+8]=s.x,A[O+G+9]=s.y,A[O+G+10]=s.z,A[O+G+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Ae(x,b)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let g=0;g<c.length;g++)p+=c[g];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function qp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const Cc=new Bt,gl=new xr(1,1),Rc=new gc,Dc=new du,Pc=new da,vl=[],_l=[],xl=new Float32Array(16),Ml=new Float32Array(9),Sl=new Float32Array(4);function Zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=vl[s];if(r===void 0&&(r=new Float32Array(s),vl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sr(i,e){let t=_l[e];t===void 0&&(t=new Int32Array(e),_l[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Sl.set(n),i.uniformMatrix2fv(this.addr,!1,Sl),Rt(t,n)}}function Jp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Ml.set(n),i.uniformMatrix3fv(this.addr,!1,Ml),Rt(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;xl.set(n),i.uniformMatrix4fv(this.addr,!1,xl),Rt(t,n)}}function tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(gl.compareFunction=pc,r=gl):r=Cc,t.setTexture2D(e||r,s)}function hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Dc,s)}function um(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Pc,s)}function dm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Rc,s)}function fm(i){switch(i){case 5126:return Zp;case 35664:return Kp;case 35665:return jp;case 35666:return $p;case 35674:return Qp;case 35675:return Jp;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function pm(i,e){i.uniform1fv(this.addr,e)}function mm(i,e){const t=Zi(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=Zi(e,this.size,3);i.uniform3fv(this.addr,t)}function vm(i,e){const t=Zi(e,this.size,4);i.uniform4fv(this.addr,t)}function _m(i,e){const t=Zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xm(i,e){const t=Zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Mm(i,e){const t=Zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Sm(i,e){i.uniform1iv(this.addr,e)}function ym(i,e){i.uniform2iv(this.addr,e)}function wm(i,e){i.uniform3iv(this.addr,e)}function Em(i,e){i.uniform4iv(this.addr,e)}function bm(i,e){i.uniform1uiv(this.addr,e)}function Tm(i,e){i.uniform2uiv(this.addr,e)}function Am(i,e){i.uniform3uiv(this.addr,e)}function Cm(i,e){i.uniform4uiv(this.addr,e)}function Rm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Cc,r[o])}function Dm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Dc,r[o])}function Pm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Pc,r[o])}function Lm(i,e,t){const n=this.cache,s=e.length,r=Sr(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Rc,r[o])}function Im(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return vm;case 35674:return _m;case 35675:return xm;case 35676:return Mm;case 5124:case 35670:return Sm;case 35667:case 35671:return ym;case 35668:case 35672:return wm;case 35669:case 35673:return Em;case 5125:return bm;case 36294:return Tm;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}class Um{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fm(t.type)}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Im(t.type)}}class Fm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const io=/(\w+)(\])?(\[|\.)?/g;function yl(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){const n=i.name,s=n.length;for(io.lastIndex=0;;){const r=io.exec(n),o=io.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){yl(t,c===void 0?new Um(a,i,e):new Nm(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Fm(a),yl(t,u)),t=u}}}class sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Bm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zm=37297;let Om=0;function km(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const El=new ze;function Vm(i){je._getMatrix(El,je.workingColorSpace,i);const e=`mat3( ${El.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),a)}else return r}function Hm(i,e){const t=Vm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gm(i,e){let t;switch(e){case bh:t="Linear";break;case Th:t="Reinhard";break;case Ah:t="Cineon";break;case sc:t="ACESFilmic";break;case Rh:t="AgX";break;case Dh:t="Neutral";break;case Ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $s=new L;function Wm(){je.getLuminanceCoefficients($s);const i=$s.x.toFixed(4),e=$s.y.toFixed(4),t=$s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Ym(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function qm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ss(i){return i!==""}function Tl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $o(i){return i.replace(Zm,jm)}const Km=new Map;function jm(i,e){let t=ke[e];if(t===void 0){const n=Km.get(e);if(n!==void 0)t=ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $o(t)}const $m=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(i){return i.replace($m,Qm)}function Qm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Jm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===nc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ta?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function eg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Vi:e="ENVMAP_TYPE_CUBE";break;case _r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Vi:e="ENVMAP_MODE_REFRACTION";break}return e}function ng(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ic:e="ENVMAP_BLENDING_MULTIPLY";break;case wh:e="ENVMAP_BLENDING_MIX";break;case Eh:e="ENVMAP_BLENDING_ADD";break}return e}function ig(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sg(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Jm(t),c=eg(t),h=tg(t),u=ng(t),d=ig(t),p=Xm(t),v=Ym(r),g=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[Rl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Xn?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),Wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ss).join(`
`)),o=$o(o),o=Tl(o,t),o=Al(o,t),a=$o(a),a=Tl(a,t),a=Al(a,t),o=Cl(o),a=Cl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=E+m+o,x=E+f+a,b=wl(s,s.VERTEX_SHADER,w),A=wl(s,s.FRAGMENT_SHADER,x);s.attachShader(g,b),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function C(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(b)||"",O=s.getShaderInfoLog(A)||"",X=B.trim(),G=F.trim(),K=O.trim();let k=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,b,A);else{const oe=bl(s,b,"vertex"),pe=bl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+X+`
`+oe+`
`+pe)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(G===""||K==="")&&(te=!1);te&&(R.diagnostics={runnable:k,programLog:X,vertexShader:{log:G,prefix:m},fragmentShader:{log:K,prefix:f}})}s.deleteShader(b),s.deleteShader(A),D=new sr(s,g),M=qm(s,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(g,zm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Om++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let rg=0;class og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ag(e),t.set(e,n)),n}}class ag{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}}function lg(i,e,t,n,s,r,o){const a=new _c,l=new og,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,R,B,F){const O=B.fog,X=F.geometry,G=M.isMeshStandardMaterial?B.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||G),k=K&&K.mapping===_r?K.image.height:null,te=v[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const oe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,pe=oe!==void 0?oe.length:0;let Ue=0;X.morphAttributes.position!==void 0&&(Ue=1),X.morphAttributes.normal!==void 0&&(Ue=2),X.morphAttributes.color!==void 0&&(Ue=3);let We,Ve,W,ie;if(te){const et=_n[te];We=et.vertexShader,Ve=et.fragmentShader}else We=M.vertexShader,Ve=M.fragmentShader,l.update(M),W=l.getVertexShaderID(M),ie=l.getFragmentShaderID(M);const ne=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ee=F.isInstancedMesh===!0,Fe=F.isBatchedMesh===!0,gt=!!M.map,qe=!!M.matcap,P=!!K,tt=!!M.aoMap,be=!!M.lightMap,Ze=!!M.bumpMap,ye=!!M.normalMap,lt=!!M.displacementMap,me=!!M.emissiveMap,He=!!M.metalnessMap,Dt=!!M.roughnessMap,St=M.anisotropy>0,T=M.clearcoat>0,_=M.dispersion>0,z=M.iridescence>0,q=M.sheen>0,j=M.transmission>0,Y=St&&!!M.anisotropyMap,we=T&&!!M.clearcoatMap,se=T&&!!M.clearcoatNormalMap,_e=T&&!!M.clearcoatRoughnessMap,xe=z&&!!M.iridescenceMap,J=z&&!!M.iridescenceThicknessMap,he=q&&!!M.sheenColorMap,Ie=q&&!!M.sheenRoughnessMap,Me=!!M.specularMap,le=!!M.specularColorMap,Oe=!!M.specularIntensityMap,I=j&&!!M.transmissionMap,ee=j&&!!M.thicknessMap,re=!!M.gradientMap,fe=!!M.alphaMap,$=M.alphaTest>0,Z=!!M.alphaHash,ve=!!M.extensions;let Be=Xn;M.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Be=i.toneMapping);const rt={shaderID:te,shaderType:M.type,shaderName:M.name,vertexShader:We,fragmentShader:Ve,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&F._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&F.instanceColor!==null,instancingMorph:Ee&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Hi,alphaToCoverage:!!M.alphaToCoverage,map:gt,matcap:qe,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:k,aoMap:tt,lightMap:be,bumpMap:Ze,normalMap:ye,displacementMap:d&&lt,emissiveMap:me,normalMapObjectSpace:ye&&M.normalMapType===Nh,normalMapTangentSpace:ye&&M.normalMapType===Uh,metalnessMap:He,roughnessMap:Dt,anisotropy:St,anisotropyMap:Y,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:se,clearcoatRoughnessMap:_e,dispersion:_,iridescence:z,iridescenceMap:xe,iridescenceThicknessMap:J,sheen:q,sheenColorMap:he,sheenRoughnessMap:Ie,specularMap:Me,specularColorMap:le,specularIntensityMap:Oe,transmission:j,transmissionMap:I,thicknessMap:ee,gradientMap:re,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:fe,alphaTest:$,alphaHash:Z,combine:M.combine,mapUv:gt&&g(M.map.channel),aoMapUv:tt&&g(M.aoMap.channel),lightMapUv:be&&g(M.lightMap.channel),bumpMapUv:Ze&&g(M.bumpMap.channel),normalMapUv:ye&&g(M.normalMap.channel),displacementMapUv:lt&&g(M.displacementMap.channel),emissiveMapUv:me&&g(M.emissiveMap.channel),metalnessMapUv:He&&g(M.metalnessMap.channel),roughnessMapUv:Dt&&g(M.roughnessMap.channel),anisotropyMapUv:Y&&g(M.anisotropyMap.channel),clearcoatMapUv:we&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(M.sheenRoughnessMap.channel),specularMapUv:Me&&g(M.specularMap.channel),specularColorMapUv:le&&g(M.specularColorMap.channel),specularIntensityMapUv:Oe&&g(M.specularIntensityMap.channel),transmissionMapUv:I&&g(M.transmissionMap.channel),thicknessMapUv:ee&&g(M.thicknessMap.channel),alphaMapUv:fe&&g(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ye||St),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(gt||fe),fog:!!O,useFog:M.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Se,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:gt&&M.map.isVideoTexture===!0&&je.getTransfer(M.map.colorSpace)===it,decodeVideoTextureEmissive:me&&M.emissiveMap.isVideoTexture===!0&&je.getTransfer(M.emissiveMap.colorSpace)===it,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===on,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ve&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)y.push(R),y.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function E(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function x(M){const y=v[M.type];let R;if(y){const B=_n[y];R=gs.clone(B.uniforms)}else R=M.uniforms;return R}function b(M,y){let R;for(let B=0,F=h.length;B<F;B++){const O=h[B];if(O.cacheKey===y){R=O,++R.usedTimes;break}}return R===void 0&&(R=new sg(i,y,M,r),h.push(R)),R}function A(M){if(--M.usedTimes===0){const y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:D}}function cg(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function hg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,v,g,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:v,renderOrder:u.renderOrder,z:g,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=v,f.renderOrder=u.renderOrder,f.z=g,f.group=m),e++,f}function a(u,d,p,v,g,m){const f=o(u,d,p,v,g,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,v,g,m){const f=o(u,d,p,v,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||hg),n.length>1&&n.sort(d||Dl),s.length>1&&s.sort(d||Dl)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ug(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Pl,i.set(n,[o])):s>=r.length?(o=new Pl,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function dg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ce};break;case"SpotLight":t={position:new L,direction:new L,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let pg=0;function mg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gg(i){const e=new dg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Ge,o=new Ge;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,v=0,g=0,m=0,f=0,E=0,w=0,x=0,b=0,A=0,C=0;c.sort(mg);for(let M=0,y=c.length;M<y;M++){const R=c[M],B=R.color,F=R.intensity,O=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(R.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(R.sh.coefficients[G],F);C++}else if(R.isDirectionalLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=R.shadow.matrix,E++}n.directional[p]=G,p++}else if(R.isSpotLight){const G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(B).multiplyScalar(F),G.distance=O,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,n.spot[g]=G;const K=R.shadow;if(R.map&&(n.spotLightMap[b]=R.map,b++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[g]=K.matrix,R.castShadow){const k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,n.spotShadow[g]=k,n.spotShadowMap[g]=X,x++}g++}else if(R.isRectAreaLight){const G=e.get(R);G.color.copy(B).multiplyScalar(F),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=G,m++}else if(R.isPointLight){const G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const K=R.shadow,k=t.get(R);k.shadowIntensity=K.intensity,k.shadowBias=K.bias,k.shadowNormalBias=K.normalBias,k.shadowRadius=K.radius,k.shadowMapSize=K.mapSize,k.shadowCameraNear=K.camera.near,k.shadowCameraFar=K.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=X,n.pointShadowMatrix[v]=R.shadow.matrix,w++}n.point[v]=G,v++}else if(R.isHemisphereLight){const G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(F),G.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[f]=G,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==g||D.rectAreaLength!==m||D.hemiLength!==f||D.numDirectionalShadows!==E||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==b||D.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=v,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,D.directionalLength=p,D.pointLength=v,D.spotLength=g,D.rectAreaLength=m,D.hemiLength=f,D.numDirectionalShadows=E,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=b,D.numLightProbes=C,n.version=pg++)}function l(c,h){let u=0,d=0,p=0,v=0,g=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const w=c[f];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(w.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const x=n.rectArea[v];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Ll(i){const e=new gg(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function vg(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ll(i),e.set(s,[a])):r>=o.length?(a=new Ll(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
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
}`;function Mg(i,e,t){let n=new fa;const s=new Ae,r=new Ae,o=new mt,a=new zu({depthPacking:Ih}),l=new Ou,c={},h=t.maxTextureSize,u={[yn]:Vt,[Vt]:yn,[on]:on},d=new wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:_g,fragmentShader:xg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new Yt;v.setAttribute("position",new ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let f=this.type;this.render=function(A,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Pn),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=f!==Rn&&this.type===Rn,O=f===Rn&&this.type!==Rn;for(let X=0,G=A.length;X<G;X++){const K=A[X],k=K.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const te=k.getFrameExtents();if(s.multiply(te),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,k.mapSize.y=r.y)),k.map===null||F===!0||O===!0){const pe=this.type!==Rn?{minFilter:Je,magFilter:Je}:{};k.map!==null&&k.map.dispose(),k.map=new Qt(s.x,s.y,pe),k.map.texture.name=K.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const oe=k.getViewportCount();for(let pe=0;pe<oe;pe++){const Ue=k.getViewport(pe);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),B.viewport(o),k.updateMatrices(K,pe),n=k.getFrustum(),x(C,D,k.camera,K,this.type)}k.isPointLightShadow!==!0&&this.type===Rn&&E(k,D),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,R)};function E(A,C){const D=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Qt(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(C,null,D,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(C,null,D,p,g,null)}function w(A,C,D,M){let y=null;const R=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)y=R;else if(y=D.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=y.uuid,F=C.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let X=O[F];X===void 0&&(X=y.clone(),O[F]=X,C.addEventListener("dispose",b)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Rn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=D}return y}function x(A,C,D,M,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const F=e.update(A),O=A.material;if(Array.isArray(O)){const X=F.groups;for(let G=0,K=X.length;G<K;G++){const k=X[G],te=O[k.materialIndex];if(te&&te.visible){const oe=w(A,te,M,y);A.onBeforeShadow(i,A,C,D,F,oe,k),i.renderBufferDirect(D,null,F,oe,A,k),A.onAfterShadow(i,A,C,D,F,oe,k)}}}else if(O.visible){const X=w(A,O,M,y);A.onBeforeShadow(i,A,C,D,F,X,null),i.renderBufferDirect(D,null,F,X,A,null),A.onAfterShadow(i,A,C,D,F,X,null)}}const B=A.children;for(let F=0,O=B.length;F<O;F++)x(B[F],C,D,M,y)}function b(A){A.target.removeEventListener("dispose",b);for(const D in c){const M=c[D],y=A.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Sg={[po]:mo,[go]:xo,[vo]:Mo,[Oi]:_o,[mo]:po,[xo]:go,[Mo]:vo,[_o]:Oi};function yg(i,e){function t(){let I=!1;const ee=new mt;let re=null;const fe=new mt(0,0,0,0);return{setMask:function($){re!==$&&!I&&(i.colorMask($,$,$,$),re=$)},setLocked:function($){I=$},setClear:function($,Z,ve,Be,rt){rt===!0&&($*=Be,Z*=Be,ve*=Be),ee.set($,Z,ve,Be),fe.equals(ee)===!1&&(i.clearColor($,Z,ve,Be),fe.copy(ee))},reset:function(){I=!1,re=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ee=!1,re=null,fe=null,$=null;return{setReversed:function(Z){if(ee!==Z){const ve=e.get("EXT_clip_control");Z?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),ee=Z;const Be=$;$=null,this.setClear(Be)}},getReversed:function(){return ee},setTest:function(Z){Z?ne(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(Z){re!==Z&&!I&&(i.depthMask(Z),re=Z)},setFunc:function(Z){if(ee&&(Z=Sg[Z]),fe!==Z){switch(Z){case po:i.depthFunc(i.NEVER);break;case mo:i.depthFunc(i.ALWAYS);break;case go:i.depthFunc(i.LESS);break;case Oi:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case _o:i.depthFunc(i.GEQUAL);break;case xo:i.depthFunc(i.GREATER);break;case Mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Z}},setLocked:function(Z){I=Z},setClear:function(Z){$!==Z&&(ee&&(Z=1-Z),i.clearDepth(Z),$=Z)},reset:function(){I=!1,re=null,fe=null,$=null,ee=!1}}}function s(){let I=!1,ee=null,re=null,fe=null,$=null,Z=null,ve=null,Be=null,rt=null;return{setTest:function(et){I||(et?ne(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(et){ee!==et&&!I&&(i.stencilMask(et),ee=et)},setFunc:function(et,wn,vn){(re!==et||fe!==wn||$!==vn)&&(i.stencilFunc(et,wn,vn),re=et,fe=wn,$=vn)},setOp:function(et,wn,vn){(Z!==et||ve!==wn||Be!==vn)&&(i.stencilOp(et,wn,vn),Z=et,ve=wn,Be=vn)},setLocked:function(et){I=et},setClear:function(et){rt!==et&&(i.clearStencil(et),rt=et)},reset:function(){I=!1,ee=null,re=null,fe=null,$=null,Z=null,ve=null,Be=null,rt=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],v=null,g=!1,m=null,f=null,E=null,w=null,x=null,b=null,A=null,C=new Ce(0,0,0),D=0,M=!1,y=null,R=null,B=null,F=null,O=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=K>=1):k.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=K>=2);let te=null,oe={};const pe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),We=new mt().fromArray(pe),Ve=new mt().fromArray(Ue);function W(I,ee,re,fe){const $=new Uint8Array(4),Z=i.createTexture();i.bindTexture(I,Z),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<re;ve++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,$):i.texImage2D(ee+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,$);return Z}const ie={};ie[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Oi),Ze(!1),ye(Ra),ne(i.CULL_FACE),tt(Pn);function ne(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Se(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Ee(I,ee){return u[I]!==ee?(i.bindFramebuffer(I,ee),u[I]=ee,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function Fe(I,ee){let re=p,fe=!1;if(I){re=d.get(ee),re===void 0&&(re=[],d.set(ee,re));const $=I.textures;if(re.length!==$.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ve=$.length;Z<ve;Z++)re[Z]=i.COLOR_ATTACHMENT0+Z;re.length=$.length,fe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,fe=!0);fe&&i.drawBuffers(re)}function gt(I){return v!==I?(i.useProgram(I),v=I,!0):!1}const qe={[ii]:i.FUNC_ADD,[oh]:i.FUNC_SUBTRACT,[ah]:i.FUNC_REVERSE_SUBTRACT};qe[lh]=i.MIN,qe[ch]=i.MAX;const P={[hh]:i.ZERO,[uh]:i.ONE,[dh]:i.SRC_COLOR,[uo]:i.SRC_ALPHA,[_h]:i.SRC_ALPHA_SATURATE,[gh]:i.DST_COLOR,[ph]:i.DST_ALPHA,[fh]:i.ONE_MINUS_SRC_COLOR,[fo]:i.ONE_MINUS_SRC_ALPHA,[vh]:i.ONE_MINUS_DST_COLOR,[mh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Sh]:i.CONSTANT_ALPHA,[yh]:i.ONE_MINUS_CONSTANT_ALPHA};function tt(I,ee,re,fe,$,Z,ve,Be,rt,et){if(I===Pn){g===!0&&(Se(i.BLEND),g=!1);return}if(g===!1&&(ne(i.BLEND),g=!0),I!==rh){if(I!==m||et!==M){if((f!==ii||x!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,x=ii),et)switch(I){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Da:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pa:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,w=null,b=null,A=null,C.set(0,0,0),D=0,m=I,M=et}return}$=$||ee,Z=Z||re,ve=ve||fe,(ee!==f||$!==x)&&(i.blendEquationSeparate(qe[ee],qe[$]),f=ee,x=$),(re!==E||fe!==w||Z!==b||ve!==A)&&(i.blendFuncSeparate(P[re],P[fe],P[Z],P[ve]),E=re,w=fe,b=Z,A=ve),(Be.equals(C)===!1||rt!==D)&&(i.blendColor(Be.r,Be.g,Be.b,rt),C.copy(Be),D=rt),m=I,M=!1}function be(I,ee){I.side===on?Se(i.CULL_FACE):ne(i.CULL_FACE);let re=I.side===Vt;ee&&(re=!re),Ze(re),I.blending===Ii&&I.transparent===!1?tt(Pn):tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(I){y!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),y=I)}function ye(I){I!==ih?(ne(i.CULL_FACE),I!==R&&(I===Ra?i.cullFace(i.BACK):I===sh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),R=I}function lt(I){I!==B&&(G&&i.lineWidth(I),B=I)}function me(I,ee,re){I?(ne(i.POLYGON_OFFSET_FILL),(F!==ee||O!==re)&&(i.polygonOffset(ee,re),F=ee,O=re)):Se(i.POLYGON_OFFSET_FILL)}function He(I){I?ne(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function Dt(I){I===void 0&&(I=i.TEXTURE0+X-1),te!==I&&(i.activeTexture(I),te=I)}function St(I,ee,re){re===void 0&&(te===null?re=i.TEXTURE0+X-1:re=te);let fe=oe[re];fe===void 0&&(fe={type:void 0,texture:void 0},oe[re]=fe),(fe.type!==I||fe.texture!==ee)&&(te!==re&&(i.activeTexture(re),te=re),i.bindTexture(I,ee||ie[I]),fe.type=I,fe.texture=ee)}function T(){const I=oe[te];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _e(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(I){We.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),We.copy(I))}function Ie(I){Ve.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ve.copy(I))}function Me(I,ee){let re=c.get(ee);re===void 0&&(re=new WeakMap,c.set(ee,re));let fe=re.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(ee,I.name),re.set(I,fe))}function le(I,ee){const fe=c.get(ee).get(I);l.get(ee)!==fe&&(i.uniformBlockBinding(ee,fe,I.__bindingPointIndex),l.set(ee,fe))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,oe={},u={},d=new WeakMap,p=[],v=null,g=!1,m=null,f=null,E=null,w=null,x=null,b=null,A=null,C=new Ce(0,0,0),D=0,M=!1,y=null,R=null,B=null,F=null,O=null,We.set(0,0,i.canvas.width,i.canvas.height),Ve.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ne,disable:Se,bindFramebuffer:Ee,drawBuffers:Fe,useProgram:gt,setBlending:tt,setMaterial:be,setFlipSided:Ze,setCullFace:ye,setLineWidth:lt,setPolygonOffset:me,setScissorTest:He,activeTexture:Dt,bindTexture:St,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:xe,texImage3D:J,updateUBOMapping:Me,uniformBlockBinding:le,texStorage2D:se,texStorage3D:_e,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:we,scissor:he,viewport:Ie,reset:Oe}}function wg(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,_){return p?new OffscreenCanvas(T,_):ms("canvas")}function g(T,_,z){let q=1;const j=St(T);if((j.width>z||j.height>z)&&(q=z/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(q*j.width),we=Math.floor(q*j.height);u===void 0&&(u=v(Y,we));const se=_?v(Y,we):u;return se.width=Y,se.height=we,se.getContext("2d").drawImage(T,0,0,Y,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+we+")."),se}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,_,z,q,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=_;if(_===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),_===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),_===i.RGBA){const we=j?cr:je.getTransfer(q);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=we===it?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(T,_){let z;return T?_===null||_===ui||_===ds?z=i.DEPTH24_STENCIL8:_===Mn?z=i.DEPTH32F_STENCIL8:_===hi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ui||_===ds?z=i.DEPTH_COMPONENT24:_===Mn?z=i.DEPTH_COMPONENT32F:_===hi&&(z=i.DEPTH_COMPONENT16),z}function b(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Je&&T.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),D(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),y(_)}function D(T){const _=n.get(T);if(_.__webglInit===void 0)return;const z=T.source,q=d.get(z);if(q){const j=q[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(T),Object.keys(q).length===0&&d.delete(z)}n.remove(T)}function M(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const z=T.source,q=d.get(z);delete q[_.__cacheKey],o.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let j=0;j<_.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[q][j]);else i.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)i.deleteFramebuffer(_.__webglFramebuffer[q]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let q=0,j=z.length;q<j;q++){const Y=n.get(z[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(T)}let R=0;function B(){R=0}function F(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function O(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function X(T,_){const z=n.get(T);if(T.isVideoTexture&&He(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function G(T,_){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ie(z,T,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function K(T,_){const z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ie(z,T,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function k(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){ne(z,T,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const te={[ci]:i.REPEAT,[Ft]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},oe={[Je]:i.NEAREST,[Ph]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[br]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},pe={[Fh]:i.NEVER,[Hh]:i.ALWAYS,[Bh]:i.LESS,[pc]:i.LEQUAL,[zh]:i.EQUAL,[Vh]:i.GEQUAL,[Oh]:i.GREATER,[kh]:i.NOTEQUAL};function Ue(T,_){if(_.type===Mn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===br||_.magFilter===bs||_.magFilter===oi||_.minFilter===ln||_.minFilter===br||_.minFilter===bs||_.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,te[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,te[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,te[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,oe[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,oe[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==bs&&_.minFilter!==oi||_.type===Mn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const q=_.source;let j=d.get(q);j===void 0&&(j={},d.set(q,j));const Y=O(_);if(Y!==T.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[Y].usedTimes++;const we=j[T.__cacheKey];we!==void 0&&(j[T.__cacheKey].usedTimes--,we.usedTimes===0&&M(_)),T.__cacheKey=Y,T.__webglTexture=j[Y].texture}return z}function Ve(T,_,z){return Math.floor(Math.floor(T/z)/_)}function W(T,_,z,q){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,q,_.data);else{Y.sort((J,he)=>J.start-he.start);let we=0;for(let J=1;J<Y.length;J++){const he=Y[we],Ie=Y[J],Me=he.start+he.count,le=Ve(Ie.start,_.width,4),Oe=Ve(he.start,_.width,4);Ie.start<=Me+1&&le===Oe&&Ve(Ie.start+Ie.count-1,_.width,4)===le?he.count=Math.max(he.count,Ie.start+Ie.count-he.start):(++we,Y[we]=Ie)}Y.length=we+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),_e=i.getParameter(i.UNPACK_SKIP_PIXELS),xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let J=0,he=Y.length;J<he;J++){const Ie=Y[J],Me=Math.floor(Ie.start/4),le=Math.ceil(Ie.count/4),Oe=Me%_.width,I=Math.floor(Me/_.width),ee=le,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),t.texSubImage2D(i.TEXTURE_2D,0,Oe,I,ee,re,z,q,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),i.pixelStorei(i.UNPACK_SKIP_ROWS,xe)}}function ie(T,_,z){let q=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=i.TEXTURE_3D);const j=We(T,_),Y=_.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+z);const we=n.get(Y);if(Y.version!==we.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const se=je.getPrimaries(je.workingColorSpace),_e=_.colorSpace===Gn?null:je.getPrimaries(_.colorSpace),xe=_.colorSpace===Gn||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let J=g(_.image,!1,s.maxTextureSize);J=Dt(_,J);const he=r.convert(_.format,_.colorSpace),Ie=r.convert(_.type);let Me=w(_.internalFormat,he,Ie,_.colorSpace,_.isVideoTexture);Ue(q,_);let le;const Oe=_.mipmaps,I=_.isVideoTexture!==!0,ee=we.__version===void 0||j===!0,re=Y.dataReady,fe=b(_,J);if(_.isDepthTexture)Me=x(_.format===fs,_.type),ee&&(I?t.texStorage2D(i.TEXTURE_2D,1,Me,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,he,Ie,null));else if(_.isDataTexture)if(Oe.length>0){I&&ee&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let $=0,Z=Oe.length;$<Z;$++)le=Oe[$],I?re&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,he,Ie,le.data):t.texImage2D(i.TEXTURE_2D,$,Me,le.width,le.height,0,he,Ie,le.data);_.generateMipmaps=!1}else I?(ee&&t.texStorage2D(i.TEXTURE_2D,fe,Me,J.width,J.height),re&&W(_,J,he,Ie)):t.texImage2D(i.TEXTURE_2D,0,Me,J.width,J.height,0,he,Ie,J.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,Oe[0].width,Oe[0].height,J.depth);for(let $=0,Z=Oe.length;$<Z;$++)if(le=Oe[$],_.format!==Xt)if(he!==null)if(I){if(re)if(_.layerUpdates.size>0){const ve=cl(le.width,le.height,_.format,_.type);for(const Be of _.layerUpdates){const rt=le.data.subarray(Be*ve/le.data.BYTES_PER_ELEMENT,(Be+1)*ve/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Be,le.width,le.height,1,he,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,J.depth,he,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Me,le.width,le.height,J.depth,0,le.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,le.width,le.height,J.depth,he,Ie,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,$,Me,le.width,le.height,J.depth,0,he,Ie,le.data)}else{I&&ee&&t.texStorage2D(i.TEXTURE_2D,fe,Me,Oe[0].width,Oe[0].height);for(let $=0,Z=Oe.length;$<Z;$++)le=Oe[$],_.format!==Xt?he!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,he,le.data):t.compressedTexImage2D(i.TEXTURE_2D,$,Me,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?re&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,le.width,le.height,he,Ie,le.data):t.texImage2D(i.TEXTURE_2D,$,Me,le.width,le.height,0,he,Ie,le.data)}else if(_.isDataArrayTexture)if(I){if(ee&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Me,J.width,J.height,J.depth),re)if(_.layerUpdates.size>0){const $=cl(J.width,J.height,_.format,_.type);for(const Z of _.layerUpdates){const ve=J.data.subarray(Z*$/J.data.BYTES_PER_ELEMENT,(Z+1)*$/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,J.width,J.height,1,he,Ie,ve)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,he,Ie,J.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Me,J.width,J.height,J.depth,0,he,Ie,J.data);else if(_.isData3DTexture)I?(ee&&t.texStorage3D(i.TEXTURE_3D,fe,Me,J.width,J.height,J.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,he,Ie,J.data)):t.texImage3D(i.TEXTURE_3D,0,Me,J.width,J.height,J.depth,0,he,Ie,J.data);else if(_.isFramebufferTexture){if(ee)if(I)t.texStorage2D(i.TEXTURE_2D,fe,Me,J.width,J.height);else{let $=J.width,Z=J.height;for(let ve=0;ve<fe;ve++)t.texImage2D(i.TEXTURE_2D,ve,Me,$,Z,0,he,Ie,null),$>>=1,Z>>=1}}else if(Oe.length>0){if(I&&ee){const $=St(Oe[0]);t.texStorage2D(i.TEXTURE_2D,fe,Me,$.width,$.height)}for(let $=0,Z=Oe.length;$<Z;$++)le=Oe[$],I?re&&t.texSubImage2D(i.TEXTURE_2D,$,0,0,he,Ie,le):t.texImage2D(i.TEXTURE_2D,$,Me,he,Ie,le);_.generateMipmaps=!1}else if(I){if(ee){const $=St(J);t.texStorage2D(i.TEXTURE_2D,fe,Me,$.width,$.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Ie,J)}else t.texImage2D(i.TEXTURE_2D,0,Me,he,Ie,J);m(_)&&f(q),we.__version=Y.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,z){if(_.image.length!==6)return;const q=We(T,_),j=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const Y=n.get(j);if(j.version!==Y.__version||q===!0){t.activeTexture(i.TEXTURE0+z);const we=je.getPrimaries(je.workingColorSpace),se=_.colorSpace===Gn?null:je.getPrimaries(_.colorSpace),_e=_.colorSpace===Gn||we===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const xe=_.isCompressedTexture||_.image[0].isCompressedTexture,J=_.image[0]&&_.image[0].isDataTexture,he=[];for(let Z=0;Z<6;Z++)!xe&&!J?he[Z]=g(_.image[Z],!0,s.maxCubemapSize):he[Z]=J?_.image[Z].image:_.image[Z],he[Z]=Dt(_,he[Z]);const Ie=he[0],Me=r.convert(_.format,_.colorSpace),le=r.convert(_.type),Oe=w(_.internalFormat,Me,le,_.colorSpace),I=_.isVideoTexture!==!0,ee=Y.__version===void 0||q===!0,re=j.dataReady;let fe=b(_,Ie);Ue(i.TEXTURE_CUBE_MAP,_);let $;if(xe){I&&ee&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,Ie.width,Ie.height);for(let Z=0;Z<6;Z++){$=he[Z].mipmaps;for(let ve=0;ve<$.length;ve++){const Be=$[ve];_.format!==Xt?Me!==null?I?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Be.width,Be.height,Me,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Oe,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,0,0,Be.width,Be.height,Me,le,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve,Oe,Be.width,Be.height,0,Me,le,Be.data)}}}else{if($=_.mipmaps,I&&ee){$.length>0&&fe++;const Z=St(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Oe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(J){I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he[Z].width,he[Z].height,Me,le,he[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,he[Z].width,he[Z].height,0,Me,le,he[Z].data);for(let ve=0;ve<$.length;ve++){const rt=$[ve].image[Z].image;I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,rt.width,rt.height,Me,le,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Oe,rt.width,rt.height,0,Me,le,rt.data)}}else{I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Me,le,he[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Oe,Me,le,he[Z]);for(let ve=0;ve<$.length;ve++){const Be=$[ve];I?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,0,0,Me,le,Be.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ve+1,Oe,Me,le,Be.image[Z])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),Y.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Se(T,_,z,q,j,Y){const we=r.convert(z.format,z.colorSpace),se=r.convert(z.type),_e=w(z.internalFormat,we,se,z.colorSpace),xe=n.get(_),J=n.get(z);if(J.__renderTarget=_,!xe.__hasExternalTextures){const he=Math.max(1,_.width>>Y),Ie=Math.max(1,_.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,Y,_e,he,Ie,_.depth,0,we,se,null):t.texImage2D(j,Y,_e,he,Ie,0,we,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,J.__webglTexture,0,lt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,J.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){const q=_.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=x(_.stencilBuffer,j),we=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=lt(_);me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Y,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,T)}else{const q=_.textures;for(let j=0;j<q.length;j++){const Y=q[j],we=r.convert(Y.format,Y.colorSpace),se=r.convert(Y.type),_e=w(Y.internalFormat,we,se,Y.colorSpace),xe=lt(_);z&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,_e,_.width,_.height):me(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,_e,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,_e,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(_.depthTexture);q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);const j=q.__webglTexture,Y=lt(_);if(_.depthTexture.format===di)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(_.depthTexture.format===fs)me(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function gt(T){const _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=q}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const q=T.texture.mipmaps;q&&q.length>0?Fe(_.__webglFramebuffer[0],T):Fe(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=i.createRenderbuffer(),Ee(_.__webglDepthbuffer[q],T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{const q=T.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ee(_.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(T,_,z){const q=n.get(T);_!==void 0&&Se(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&gt(T)}function P(T){const _=T.texture,z=n.get(T),q=n.get(_);T.addEventListener("dispose",C);const j=T.textures,Y=T.isWebGLCubeRenderTarget===!0,we=j.length>1;if(we||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=_.version,o.memory.textures++),Y){z.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[se]=[];for(let _e=0;_e<_.mipmaps.length;_e++)z.__webglFramebuffer[se][_e]=i.createFramebuffer()}else z.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)z.__webglFramebuffer[se]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(we)for(let se=0,_e=j.length;se<_e;se++){const xe=n.get(j[se]);xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&me(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const _e=j[se];z.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[se]);const xe=r.convert(_e.format,_e.colorSpace),J=r.convert(_e.type),he=w(_e.internalFormat,xe,J,_e.colorSpace,T.isXRRenderTarget===!0),Ie=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,z.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Se(z.__webglFramebuffer[se][_e],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,_e);else Se(z.__webglFramebuffer[se],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let se=0,_e=j.length;se<_e;se++){const xe=j[se],J=n.get(xe);let he=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),Ue(he,xe),Se(z.__webglFramebuffer,T,xe,i.COLOR_ATTACHMENT0+se,he,0),m(xe)&&f(he)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(se=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ue(se,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)Se(z.__webglFramebuffer[_e],T,_,i.COLOR_ATTACHMENT0,se,_e);else Se(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,se,0);m(_)&&f(se),t.unbindTexture()}T.depthBuffer&&gt(T)}function tt(T){const _=T.textures;for(let z=0,q=_.length;z<q;z++){const j=_[z];if(m(j)){const Y=E(T),we=n.get(j).__webglTexture;t.bindTexture(Y,we),f(Y),t.unbindTexture()}}}const be=[],Ze=[];function ye(T){if(T.samples>0){if(me(T)===!1){const _=T.textures,z=T.width,q=T.height;let j=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(T),se=_.length>1;if(se)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=T.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const J=n.get(_[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,j,i.NEAREST),l===!0&&(be.length=0,Ze.length=0,be.push(i.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(be.push(Y),Ze.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ze)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,we.__webglColorRenderbuffer[xe]);const J=n.get(_[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,J,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function me(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(T){const _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Dt(T,_){const z=T.colorSpace,q=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Hi&&z!==Gn&&(je.getTransfer(z)===it?(q!==Xt||j!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=k,this.rebindTextures=qe,this.setupRenderTarget=P,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=me}function Eg(i,e){function t(n,s=Gn){let r;const o=je.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===ia)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ac)return i.BYTE;if(n===lc)return i.SHORT;if(n===hi)return i.UNSIGNED_SHORT;if(n===na)return i.INT;if(n===ui)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===hc)return i.ALPHA;if(n===uc)return i.RGB;if(n===Xt)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===ra)return i.RED;if(n===oa)return i.RED_INTEGER;if(n===dc)return i.RG;if(n===aa)return i.RG_INTEGER;if(n===la)return i.RGBA_INTEGER;if(n===Js||n===er||n===tr||n===nr)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Js)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Js)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===bo||n===To||n===Ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Co||n===Ro||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Co||n===Ro)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Do)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Uo||n===No||n===Fo||n===Bo||n===zo||n===Oo||n===ko||n===Vo||n===Ho||n===Go||n===Wo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===No)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Fo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Oo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ko)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Go)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wo)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ir||n===Xo||n===Yo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ir)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===qo||n===Zo||n===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ir)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Lc extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tg=`
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

}`;class Ag{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Lc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new wt({vertexShader:bg,fragmentShader:Tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cg extends Xi{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,v=null;const g=new Ag,m={},f=t.getContextAttributes();let E=null,w=null;const x=[],b=[],A=new Ae;let C=null;const D=new rn;D.viewport=new mt;const M=new rn;M.viewport=new mt;const y=[D,M],R=new qu;let B=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=x[W];return ie===void 0&&(ie=new Yr,x[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=x[W];return ie===void 0&&(ie=new Yr,x[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=x[W];return ie===void 0&&(ie=new Yr,x[W]=ie),ie.getHandSpace()};function O(W){const ie=b.indexOf(W.inputSource);if(ie===-1)return;const ne=x[ie];ne!==void 0&&(ne.update(W.inputSource,W.frame,c||o),ne.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",G);for(let W=0;W<x.length;W++){const ie=b[W];ie!==null&&(b[W]=null,x[W].disconnect(ie))}B=null,F=null,g.reset();for(const W in m)delete m[W];e.setRenderTarget(E),p=null,d=null,u=null,s=null,w=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",X),s.addEventListener("inputsourceschange",G),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(s,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,Se=null,Ee=null;f.depth&&(Ee=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=f.stencil?fs:di,Se=f.stencil?ds:ui);const Fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};d=u.createProjectionLayer(Fe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Qt(d.textureWidth,d.textureHeight,{format:Xt,type:gn,depthTexture:new xr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Qt(p.framebufferWidth,p.framebufferHeight,{format:Xt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(W){for(let ie=0;ie<W.removed.length;ie++){const ne=W.removed[ie],Se=b.indexOf(ne);Se>=0&&(b[Se]=null,x[Se].disconnect(ne))}for(let ie=0;ie<W.added.length;ie++){const ne=W.added[ie];let Se=b.indexOf(ne);if(Se===-1){for(let Fe=0;Fe<x.length;Fe++)if(Fe>=b.length){b.push(ne),Se=Fe;break}else if(b[Fe]===null){b[Fe]=ne,Se=Fe;break}if(Se===-1)break}const Ee=x[Se];Ee&&Ee.connect(ne)}}const K=new L,k=new L;function te(W,ie,ne){K.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(ne.matrixWorld);const Se=K.distanceTo(k),Ee=ie.projectionMatrix.elements,Fe=ne.projectionMatrix.elements,gt=Ee[14]/(Ee[10]-1),qe=Ee[14]/(Ee[10]+1),P=(Ee[9]+1)/Ee[5],tt=(Ee[9]-1)/Ee[5],be=(Ee[8]-1)/Ee[0],Ze=(Fe[8]+1)/Fe[0],ye=gt*be,lt=gt*Ze,me=Se/(-be+Ze),He=me*-be;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(He),W.translateZ(me),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Dt=gt+me,St=qe+me,T=ye-He,_=lt+(Se-He),z=P*qe/St*Dt,q=tt*qe/St*Dt;W.projectionMatrix.makePerspective(T,_,z,q,Dt,St),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function oe(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let ie=W.near,ne=W.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ne=g.depthFar)),R.near=M.near=D.near=ie,R.far=M.far=D.far=ne,(B!==R.near||F!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,F=R.far),R.layers.mask=W.layers.mask|6,D.layers.mask=R.layers.mask&3,M.layers.mask=R.layers.mask&5;const Se=W.parent,Ee=R.cameras;oe(R,Se);for(let Fe=0;Fe<Ee.length;Fe++)oe(Ee[Fe],Se);Ee.length===2?te(R,D,M):R.projectionMatrix.copy(D.projectionMatrix),pe(W,R,Se)};function pe(W,ie,ne){ne===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(ne.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=ps*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(R)},this.getCameraTexture=function(W){return m[W]};let Ue=null;function We(W,ie){if(h=ie.getViewerPose(c||o),v=ie,h!==null){const ne=h.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let Se=!1;ne.length!==R.cameras.length&&(R.cameras.length=0,Se=!0);for(let qe=0;qe<ne.length;qe++){const P=ne[qe];let tt=null;if(p!==null)tt=p.getViewport(P);else{const Ze=u.getViewSubImage(d,P);tt=Ze.viewport,qe===0&&(e.setRenderTargetTextures(w,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(w))}let be=y[qe];be===void 0&&(be=new rn,be.layers.enable(qe),be.viewport=new mt,y[qe]=be),be.matrix.fromArray(P.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(P.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(tt.x,tt.y,tt.width,tt.height),qe===0&&(R.matrix.copy(be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Se===!0&&R.cameras.push(be)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&u){const qe=u.getDepthInformation(ne[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,s.renderState)}if(Ee&&Ee.includes("camera-access")&&(e.state.unbindTexture(),u))for(let qe=0;qe<ne.length;qe++){const P=ne[qe].camera;if(P){let tt=m[P];tt||(tt=new Lc,m[P]=tt);const be=u.getCameraImage(P);tt.sourceTexture=be}}}for(let ne=0;ne<x.length;ne++){const Se=b[ne],Ee=x[ne];Se!==null&&Ee!==void 0&&Ee.update(Se,ie,c||o)}Ue&&Ue(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),v=null}const Ve=new Ac;Ve.setAnimationLoop(We),this.setAnimationLoop=function(W){Ue=W},this.dispose=function(){}}}const ei=new Un,Rg=new Ge;function Dg(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,yc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,w,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(r(m,f),v(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),g(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),w=E.envMap,x=E.envMapRotation;w&&(m.envMap.value=w,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(ei)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=w*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Pg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,w){const x=w.program;n.uniformBlockBinding(E,x)}function c(E,w){let x=s[E.id];x===void 0&&(v(E),x=h(E),s[E.id]=x,E.addEventListener("dispose",m));const b=w.program;n.updateUBOMapping(E,b);const A=e.render.frame;r[E.id]!==A&&(d(E),r[E.id]=A)}function h(E){const w=u();E.__bindingPointIndex=w;const x=i.createBuffer(),b=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const w=s[E.id],x=E.uniforms,b=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let A=0,C=x.length;A<C;A++){const D=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,y=D.length;M<y;M++){const R=D[M];if(p(R,A,M,b)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let X=0;X<F.length;X++){const G=F[X],K=g(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+O,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,w,x,b){const A=E.value,C=w+"_"+x;if(b[C]===void 0)return typeof A=="number"||typeof A=="boolean"?b[C]=A:b[C]=A.clone(),!0;{const D=b[C];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return b[C]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function v(E){const w=E.uniforms;let x=0;const b=16;for(let C=0,D=w.length;C<D;C++){const M=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,R=M.length;y<R;y++){const B=M[y],F=Array.isArray(B.value)?B.value:[B.value];for(let O=0,X=F.length;O<X;O++){const G=F[O],K=g(G),k=x%b,te=k%K.boundary,oe=k+te;x+=te,oe!==0&&b-oe<K.storage&&(x+=b-oe),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=K.storage}}}const A=x%b;return A>0&&(x+=b-A),E.__size=x,E.__cache={},this}function g(E){const w={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function m(E){const w=E.target;w.removeEventListener("dispose",m);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Lg{constructor(e={}){const{canvas:t=ru(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const v=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const E=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let b=!1;this._outputColorSpace=yt;let A=0,C=0,D=null,M=-1,y=null;const R=new mt,B=new mt;let F=null;const O=new Ce(0);let X=0,G=t.width,K=t.height,k=1,te=null,oe=null;const pe=new mt(0,0,G,K),Ue=new mt(0,0,G,K);let We=!1;const Ve=new fa;let W=!1,ie=!1;const ne=new Ge,Se=new L,Ee=new mt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function qe(){return D===null?k:1}let P=n;function tt(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",$,!1),P===null){const U="webgl2";if(P=tt(U,S),P===null)throw tt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,Ze,ye,lt,me,He,Dt,St,T,_,z,q,j,Y,we,se,_e,xe,J,he,Ie,Me,le,Oe;function I(){be=new Hp(P),be.init(),Me=new Eg(P,be),Ze=new Np(P,be,e,Me),ye=new yg(P,be),Ze.reversedDepthBuffer&&d&&ye.buffers.depth.setReversed(!0),lt=new Xp(P),me=new cg,He=new wg(P,be,ye,me,Ze,Me,lt),Dt=new Bp(x),St=new Vp(x),T=new ju(P),le=new Ip(P,T),_=new Gp(P,T,lt,le),z=new qp(P,_,T,lt),J=new Yp(P,Ze,He),se=new Fp(me),q=new lg(x,Dt,St,be,Ze,le,se),j=new Dg(x,me),Y=new ug,we=new vg(be),xe=new Lp(x,Dt,St,ye,z,p,l),_e=new Mg(x,z,Ze),Oe=new Pg(P,lt,Ze,ye),he=new Up(P,be,lt),Ie=new Wp(P,be,lt),lt.programs=q.programs,x.capabilities=Ze,x.extensions=be,x.properties=me,x.renderLists=Y,x.shadowMap=_e,x.state=ye,x.info=lt}I();const ee=new Cg(x,P);this.xr=ee,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(S){S!==void 0&&(k=S,this.setSize(G,K,!1))},this.getSize=function(S){return S.set(G,K)},this.setSize=function(S,U,V=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,K=U,t.width=Math.floor(S*k),t.height=Math.floor(U*k),V===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(G*k,K*k).floor()},this.setDrawingBufferSize=function(S,U,V){G=S,K=U,k=V,t.width=Math.floor(S*V),t.height=Math.floor(U*V),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(R)},this.getViewport=function(S){return S.copy(pe)},this.setViewport=function(S,U,V,H){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,U,V,H),ye.viewport(R.copy(pe).multiplyScalar(k).round())},this.getScissor=function(S){return S.copy(Ue)},this.setScissor=function(S,U,V,H){S.isVector4?Ue.set(S.x,S.y,S.z,S.w):Ue.set(S,U,V,H),ye.scissor(B.copy(Ue).multiplyScalar(k).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(S){ye.setScissorTest(We=S)},this.setOpaqueSort=function(S){te=S},this.setTransparentSort=function(S){oe=S},this.getClearColor=function(S){return S.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,V=!0){let H=0;if(S){let N=!1;if(D!==null){const Q=D.texture.format;N=Q===la||Q===aa||Q===oa}if(N){const Q=D.texture.type,ce=Q===gn||Q===ui||Q===hi||Q===ds||Q===ia||Q===sa,ge=xe.getClearColor(),de=xe.getClearAlpha(),Le=ge.r,Ne=ge.g,Te=ge.b;ce?(v[0]=Le,v[1]=Ne,v[2]=Te,v[3]=de,P.clearBufferuiv(P.COLOR,0,v)):(g[0]=Le,g[1]=Ne,g[2]=Te,g[3]=de,P.clearBufferiv(P.COLOR,0,g))}else H|=P.COLOR_BUFFER_BIT}U&&(H|=P.DEPTH_BUFFER_BIT),V&&(H|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",$,!1),xe.dispose(),Y.dispose(),we.dispose(),me.dispose(),Dt.dispose(),St.dispose(),z.dispose(),le.dispose(),Oe.dispose(),q.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",vn),ee.removeEventListener("sessionend",ya),qn.stop()};function re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=lt.autoReset,U=_e.enabled,V=_e.autoUpdate,H=_e.needsUpdate,N=_e.type;I(),lt.autoReset=S,_e.enabled=U,_e.autoUpdate=V,_e.needsUpdate=H,_e.type=N}function $(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Z(S){const U=S.target;U.removeEventListener("dispose",Z),ve(U)}function ve(S){Be(S),me.remove(S)}function Be(S){const U=me.get(S).programs;U!==void 0&&(U.forEach(function(V){q.releaseProgram(V)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,V,H,N,Q){U===null&&(U=Fe);const ce=N.isMesh&&N.matrixWorld.determinant()<0,ge=Hc(S,U,V,H,N);ye.setMaterial(H,ce);let de=V.index,Le=1;if(H.wireframe===!0){if(de=_.getWireframeAttribute(V),de===void 0)return;Le=2}const Ne=V.drawRange,Te=V.attributes.position;let Xe=Ne.start*Le,nt=(Ne.start+Ne.count)*Le;Q!==null&&(Xe=Math.max(Xe,Q.start*Le),nt=Math.min(nt,(Q.start+Q.count)*Le)),de!==null?(Xe=Math.max(Xe,0),nt=Math.min(nt,de.count)):Te!=null&&(Xe=Math.max(Xe,0),nt=Math.min(nt,Te.count));const vt=nt-Xe;if(vt<0||vt===1/0)return;le.setup(N,H,ge,V,de);let at,st=he;if(de!==null&&(at=T.get(de),st=Ie,st.setIndex(at)),N.isMesh)H.wireframe===!0?(ye.setLineWidth(H.wireframeLinewidth*qe()),st.setMode(P.LINES)):st.setMode(P.TRIANGLES);else if(N.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),ye.setLineWidth(Re*qe()),N.isLineSegments?st.setMode(P.LINES):N.isLineLoop?st.setMode(P.LINE_LOOP):st.setMode(P.LINE_STRIP)}else N.isPoints?st.setMode(P.POINTS):N.isSprite&&st.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ni("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,ut=N._multiDrawCounts,Ke=N._multiDrawCount,Zt=de?T.get(de).bytesPerElement:1,pi=me.get(H).currentProgram.getUniforms();for(let Kt=0;Kt<Ke;Kt++)pi.setValue(P,"_gl_DrawID",Kt),st.render(Re[Kt]/Zt,ut[Kt])}else if(N.isInstancedMesh)st.renderInstances(Xe,vt,N.count);else if(V.isInstancedBufferGeometry){const Re=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ut=Math.min(V.instanceCount,Re);st.renderInstances(Xe,vt,ut)}else st.render(Xe,vt)};function rt(S,U,V){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Es(S,U,V),S.side=yn,S.needsUpdate=!0,Es(S,U,V),S.side=on):Es(S,U,V)}this.compile=function(S,U,V=null){V===null&&(V=S),f=we.get(V),f.init(U),w.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),S!==V&&S.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const Q=N.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const ge=Q[ce];rt(ge,V,N),H.add(ge)}else rt(Q,V,N),H.add(Q)}),f=w.pop(),H},this.compileAsync=function(S,U,V=null){const H=this.compile(S,U,V);return new Promise(N=>{function Q(){if(H.forEach(function(ce){me.get(ce).currentProgram.isReady()&&H.delete(ce)}),H.size===0){N(S);return}setTimeout(Q,10)}be.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let et=null;function wn(S){et&&et(S)}function vn(){qn.stop()}function ya(){qn.start()}const qn=new Ac;qn.setAnimationLoop(wn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(S){et=S,ee.setAnimationLoop(S),S===null?qn.stop():qn.start()},ee.addEventListener("sessionstart",vn),ee.addEventListener("sessionend",ya),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(U),U=ee.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,U,D),f=we.get(S,w.length),f.init(U),w.push(f),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ve.setFromProjectionMatrix(ne,Sn,U.reversedDepth),ie=this.localClippingEnabled,W=se.init(this.clippingPlanes,ie),m=Y.get(S,E.length),m.init(),E.push(m),ee.enabled===!0&&ee.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&wr(Q,U,-1/0,x.sortObjects)}wr(S,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(te,oe),gt=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,gt&&xe.addToRenderList(m,S),this.info.render.frame++,W===!0&&se.beginShadows();const V=f.state.shadowsArray;_e.render(V,S,U),W===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const Q=U.cameras;if(N.length>0)for(let ce=0,ge=Q.length;ce<ge;ce++){const de=Q[ce];Ea(H,N,S,de)}gt&&xe.render(S);for(let ce=0,ge=Q.length;ce<ge;ce++){const de=Q[ce];wa(m,S,de,de.viewport)}}else N.length>0&&Ea(H,N,S,U),gt&&xe.render(S),wa(m,S,U);D!==null&&C===0&&(He.updateMultisampleRenderTarget(D),He.updateRenderTargetMipmap(D)),S.isScene===!0&&S.onAfterRender(x,S,U),le.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],W===!0&&se.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function wr(S,U,V,H){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ve.intersectsSprite(S)){H&&Ee.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ne);const ce=z.update(S),ge=S.material;ge.visible&&m.push(S,ce,ge,V,Ee.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ve.intersectsObject(S))){const ce=z.update(S),ge=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ee.copy(S.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ee.copy(ce.boundingSphere.center)),Ee.applyMatrix4(S.matrixWorld).applyMatrix4(ne)),Array.isArray(ge)){const de=ce.groups;for(let Le=0,Ne=de.length;Le<Ne;Le++){const Te=de[Le],Xe=ge[Te.materialIndex];Xe&&Xe.visible&&m.push(S,ce,Xe,V,Ee.z,Te)}}else ge.visible&&m.push(S,ce,ge,V,Ee.z,null)}}const Q=S.children;for(let ce=0,ge=Q.length;ce<ge;ce++)wr(Q[ce],U,V,H)}function wa(S,U,V,H){const N=S.opaque,Q=S.transmissive,ce=S.transparent;f.setupLightsView(V),W===!0&&se.setGlobalState(x.clippingPlanes,V),H&&ye.viewport(R.copy(H)),N.length>0&&ws(N,U,V),Q.length>0&&ws(Q,U,V),ce.length>0&&ws(ce,U,V),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Ea(S,U,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Qt(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Ln:gn,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const Q=f.state.transmissionRenderTarget[H.id],ce=H.viewport||R;Q.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);const ge=x.getRenderTarget(),de=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(Q),x.getClearColor(O),X=x.getClearAlpha(),X<1&&x.setClearColor(16777215,.5),x.clear(),gt&&xe.render(V);const Ne=x.toneMapping;x.toneMapping=Xn;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),W===!0&&se.setGlobalState(x.clippingPlanes,H),ws(S,V,H),He.updateMultisampleRenderTarget(Q),He.updateRenderTargetMipmap(Q),be.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let nt=0,vt=U.length;nt<vt;nt++){const at=U[nt],st=at.object,Re=at.geometry,ut=at.material,Ke=at.group;if(ut.side===on&&st.layers.test(H.layers)){const Zt=ut.side;ut.side=Vt,ut.needsUpdate=!0,ba(st,V,H,Re,ut,Ke),ut.side=Zt,ut.needsUpdate=!0,Xe=!0}}Xe===!0&&(He.updateMultisampleRenderTarget(Q),He.updateRenderTargetMipmap(Q))}x.setRenderTarget(ge,de,Le),x.setClearColor(O,X),Te!==void 0&&(H.viewport=Te),x.toneMapping=Ne}function ws(S,U,V){const H=U.isScene===!0?U.overrideMaterial:null;for(let N=0,Q=S.length;N<Q;N++){const ce=S[N],ge=ce.object,de=ce.geometry,Le=ce.group;let Ne=ce.material;Ne.allowOverride===!0&&H!==null&&(Ne=H),ge.layers.test(V.layers)&&ba(ge,U,V,de,Ne,Le)}}function ba(S,U,V,H,N,Q){S.onBeforeRender(x,U,V,H,N,Q),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(x,U,V,H,S,Q),N.transparent===!0&&N.side===on&&N.forceSinglePass===!1?(N.side=Vt,N.needsUpdate=!0,x.renderBufferDirect(V,U,H,N,S,Q),N.side=yn,N.needsUpdate=!0,x.renderBufferDirect(V,U,H,N,S,Q),N.side=on):x.renderBufferDirect(V,U,H,N,S,Q),S.onAfterRender(x,U,V,H,N,Q)}function Es(S,U,V){U.isScene!==!0&&(U=Fe);const H=me.get(S),N=f.state.lights,Q=f.state.shadowsArray,ce=N.state.version,ge=q.getParameters(S,N.state,Q,U,V),de=q.getProgramCacheKey(ge);let Le=H.programs;H.environment=S.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(S.isMeshStandardMaterial?St:Dt).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Z),Le=new Map,H.programs=Le);let Ne=Le.get(de);if(Ne!==void 0){if(H.currentProgram===Ne&&H.lightsStateVersion===ce)return Aa(S,ge),Ne}else ge.uniforms=q.getUniforms(S),S.onBeforeCompile(ge,x),Ne=q.acquireProgram(ge,de),Le.set(de,Ne),H.uniforms=ge.uniforms;const Te=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=se.uniform),Aa(S,ge),H.needsLights=Wc(S),H.lightsStateVersion=ce,H.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Ne,H.uniformsList=null,Ne}function Ta(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=sr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Aa(S,U){const V=me.get(S);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function Hc(S,U,V,H,N){U.isScene!==!0&&(U=Fe),He.resetTextureUnits();const Q=U.fog,ce=H.isMeshStandardMaterial?U.environment:null,ge=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Hi,de=(H.isMeshStandardMaterial?St:Dt).get(H.envMap||ce),Le=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ne=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!V.morphAttributes.position,Xe=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color;let vt=Xn;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(vt=x.toneMapping);const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,st=at!==void 0?at.length:0,Re=me.get(H),ut=f.state.lights;if(W===!0&&(ie===!0||S!==y)){const Ht=S===y&&H.id===M;se.setState(H,S,Ht)}let Ke=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ut.state.version||Re.outputColorSpace!==ge||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==de||H.fog===!0&&Re.fog!==Q||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Le||Re.vertexTangents!==Ne||Re.morphTargets!==Te||Re.morphNormals!==Xe||Re.morphColors!==nt||Re.toneMapping!==vt||Re.morphTargetsCount!==st)&&(Ke=!0):(Ke=!0,Re.__version=H.version);let Zt=Re.currentProgram;Ke===!0&&(Zt=Es(H,U,N));let pi=!1,Kt=!1,Ki=!1;const dt=Zt.getUniforms(),Jt=Re.uniforms;if(ye.useProgram(Zt.program)&&(pi=!0,Kt=!0,Ki=!0),H.id!==M&&(M=H.id,Kt=!0),pi||y!==S){ye.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),dt.setValue(P,"projectionMatrix",S.projectionMatrix),dt.setValue(P,"viewMatrix",S.matrixWorldInverse);const qt=dt.map.cameraPosition;qt!==void 0&&qt.setValue(P,Se.setFromMatrixPosition(S.matrixWorld)),Ze.logarithmicDepthBuffer&&dt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,Kt=!0,Ki=!0)}if(N.isSkinnedMesh){dt.setOptional(P,N,"bindMatrix"),dt.setOptional(P,N,"bindMatrixInverse");const Ht=N.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),dt.setValue(P,"boneTexture",Ht.boneTexture,He))}N.isBatchedMesh&&(dt.setOptional(P,N,"batchingTexture"),dt.setValue(P,"batchingTexture",N._matricesTexture,He),dt.setOptional(P,N,"batchingIdTexture"),dt.setValue(P,"batchingIdTexture",N._indirectTexture,He),dt.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&dt.setValue(P,"batchingColorTexture",N._colorsTexture,He));const en=V.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&J.update(N,V,Zt),(Kt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,dt.setValue(P,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Jt.envMap.value=de,Jt.flipEnvMap.value=de.isCubeTexture&&de.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(Jt.envMapIntensity.value=U.environmentIntensity),Kt&&(dt.setValue(P,"toneMappingExposure",x.toneMappingExposure),Re.needsLights&&Gc(Jt,Ki),Q&&H.fog===!0&&j.refreshFogUniforms(Jt,Q),j.refreshMaterialUniforms(Jt,H,k,K,f.state.transmissionRenderTarget[S.id]),sr.upload(P,Ta(Re),Jt,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(sr.upload(P,Ta(Re),Jt,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(P,"center",N.center),dt.setValue(P,"modelViewMatrix",N.modelViewMatrix),dt.setValue(P,"normalMatrix",N.normalMatrix),dt.setValue(P,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let qt=0,Er=Ht.length;qt<Er;qt++){const Zn=Ht[qt];Oe.update(Zn,Zt),Oe.bind(Zn,Zt)}}return Zt}function Gc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Wc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(S,U,V){const H=me.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),me.get(S.texture).__webglTexture=U,me.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){const V=me.get(S);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0};const Xc=P.createFramebuffer();this.setRenderTarget=function(S,U=0,V=0){D=S,A=U,C=V;let H=!0,N=null,Q=!1,ce=!1;if(S){const de=me.get(S);if(de.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(P.FRAMEBUFFER,null),H=!1;else if(de.__webglFramebuffer===void 0)He.setupRenderTarget(S);else if(de.__hasExternalTextures)He.rebindTextures(S,me.get(S.texture).__webglTexture,me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(de.__boundDepthTexture!==Te){if(Te!==null&&me.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(S)}}const Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ce=!0);const Ne=me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[U])?N=Ne[U][V]:N=Ne[U],Q=!0):S.samples>0&&He.useMultisampledRTT(S)===!1?N=me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[V]:N=Ne,R.copy(S.viewport),B.copy(S.scissor),F=S.scissorTest}else R.copy(pe).multiplyScalar(k).floor(),B.copy(Ue).multiplyScalar(k).floor(),F=We;if(V!==0&&(N=Xc),ye.bindFramebuffer(P.FRAMEBUFFER,N)&&H&&ye.drawBuffers(S,N),ye.viewport(R),ye.scissor(B),ye.setScissorTest(F),Q){const de=me.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,de.__webglTexture,V)}else if(ce){const de=U;for(let Le=0;Le<S.textures.length;Le++){const Ne=me.get(S.textures[Le]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,V,de)}}else if(S!==null&&V!==0){const de=me.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,de.__webglTexture,V)}M=-1},this.readRenderTargetPixels=function(S,U,V,H,N,Q,ce,ge=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de){ye.bindFramebuffer(P.FRAMEBUFFER,de);try{const Le=S.textures[ge],Ne=Le.format,Te=Le.type;if(!Ze.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-H&&V>=0&&V<=S.height-N&&(S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,V,H,N,Me.convert(Ne),Me.convert(Te),Q))}finally{const Le=D!==null?me.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(S,U,V,H,N,Q,ce,ge=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let de=me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ce!==void 0&&(de=de[ce]),de)if(U>=0&&U<=S.width-H&&V>=0&&V<=S.height-N){ye.bindFramebuffer(P.FRAMEBUFFER,de);const Le=S.textures[ge],Ne=Le.format,Te=Le.type;if(!Ze.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.bufferData(P.PIXEL_PACK_BUFFER,Q.byteLength,P.STREAM_READ),S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ge),P.readPixels(U,V,H,N,Me.convert(Ne),Me.convert(Te),0);const nt=D!==null?me.get(D).__webglFramebuffer:null;ye.bindFramebuffer(P.FRAMEBUFFER,nt);const vt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ou(P,vt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Xe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Q),P.deleteBuffer(Xe),P.deleteSync(vt),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,V=0){const H=Math.pow(2,-V),N=Math.floor(S.image.width*H),Q=Math.floor(S.image.height*H),ce=U!==null?U.x:0,ge=U!==null?U.y:0;He.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,ce,ge,N,Q),ye.unbindTexture()};const Yc=P.createFramebuffer(),qc=P.createFramebuffer();this.copyTextureToTexture=function(S,U,V=null,H=null,N=0,Q=null){Q===null&&(N!==0?(Ni("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=N,N=0):Q=0);let ce,ge,de,Le,Ne,Te,Xe,nt,vt;const at=S.isCompressedTexture?S.mipmaps[Q]:S.image;if(V!==null)ce=V.max.x-V.min.x,ge=V.max.y-V.min.y,de=V.isBox3?V.max.z-V.min.z:1,Le=V.min.x,Ne=V.min.y,Te=V.isBox3?V.min.z:0;else{const en=Math.pow(2,-N);ce=Math.floor(at.width*en),ge=Math.floor(at.height*en),S.isDataArrayTexture?de=at.depth:S.isData3DTexture?de=Math.floor(at.depth*en):de=1,Le=0,Ne=0,Te=0}H!==null?(Xe=H.x,nt=H.y,vt=H.z):(Xe=0,nt=0,vt=0);const st=Me.convert(U.format),Re=Me.convert(U.type);let ut;U.isData3DTexture?(He.setTexture3D(U,0),ut=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),ut=P.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),ut=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ke=P.getParameter(P.UNPACK_ROW_LENGTH),Zt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),pi=P.getParameter(P.UNPACK_SKIP_PIXELS),Kt=P.getParameter(P.UNPACK_SKIP_ROWS),Ki=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,at.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,at.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Le),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Te);const dt=S.isDataArrayTexture||S.isData3DTexture,Jt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const en=me.get(S),Ht=me.get(U),qt=me.get(en.__renderTarget),Er=me.get(Ht.__renderTarget);ye.bindFramebuffer(P.READ_FRAMEBUFFER,qt.__webglFramebuffer),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Zn=0;Zn<de;Zn++)dt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(S).__webglTexture,N,Te+Zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,me.get(U).__webglTexture,Q,vt+Zn)),P.blitFramebuffer(Le,Ne,ce,ge,Xe,nt,ce,ge,P.DEPTH_BUFFER_BIT,P.NEAREST);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||S.isRenderTargetTexture||me.has(S)){const en=me.get(S),Ht=me.get(U);ye.bindFramebuffer(P.READ_FRAMEBUFFER,Yc),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,qc);for(let qt=0;qt<de;qt++)dt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,N,Te+qt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,N),Jt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ht.__webglTexture,Q,vt+qt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ht.__webglTexture,Q),N!==0?P.blitFramebuffer(Le,Ne,ce,ge,Xe,nt,ce,ge,P.COLOR_BUFFER_BIT,P.NEAREST):Jt?P.copyTexSubImage3D(ut,Q,Xe,nt,vt+qt,Le,Ne,ce,ge):P.copyTexSubImage2D(ut,Q,Xe,nt,Le,Ne,ce,ge);ye.bindFramebuffer(P.READ_FRAMEBUFFER,null),ye.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Jt?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(ut,Q,Xe,nt,vt,ce,ge,de,st,Re,at.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(ut,Q,Xe,nt,vt,ce,ge,de,st,at.data):P.texSubImage3D(ut,Q,Xe,nt,vt,ce,ge,de,st,Re,at):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Q,Xe,nt,ce,ge,st,Re,at.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Q,Xe,nt,at.width,at.height,st,at.data):P.texSubImage2D(P.TEXTURE_2D,Q,Xe,nt,ce,ge,st,Re,at);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ke),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Zt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,pi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Kt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ki),Q===0&&U.generateMipmaps&&P.generateMipmap(ut),ye.unbindTexture()},this.copyTextureToTexture3D=function(S,U,V=null,H=null,N=0){return Ni('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,V,H,N)},this.initRenderTarget=function(S){me.get(S).__webglFramebuffer===void 0&&He.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?He.setTextureCube(S,0):S.isData3DTexture?He.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?He.setTexture2DArray(S,0):He.setTexture2D(S,0),ye.unbindTexture()},this.resetState=function(){A=0,C=0,D=null,ye.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}class Ig{renderer;constructor(e){this.renderer=new Lg({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(8900331),this.renderer.toneMapping=sc,this.renderer.toneMappingExposure=.8,this.renderer.outputColorSpace=yt,this.renderer.useLegacyLights=!1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=ta,this.setSize(e.clientWidth,e.clientHeight)}setSize(e,t){this.renderer.setSize(e,t,!1)}getCanvasSize(){const e=this.renderer.getSize(new Ae);return{width:e.x,height:e.y}}onResize(){const e=this.renderer.domElement;this.setSize(e.clientWidth,e.clientHeight)}render(e,t){this.renderer.render(e,t)}getRenderer(){return this.renderer}dispose(){this.renderer.dispose()}}function Ug(){const i=new Du,e=new Yu(4212838,.1);return i.add(e),i}function Ng(i=1){const e=new rn(70,i,.1,1024);return e.position.set(0,80,0),e}function Il(i,e,t){if(i<0||i>=ue.x||e<0||e>=ue.y||t<0||t>=ue.z)throw new Error(`Invalid chunk coordinates: (${i}, ${e}, ${t}). Must be within (0,0,0) to (${ue.x-1}, ${ue.y-1}, ${ue.z-1})`);return e*(ue.x*ue.z)+t*ue.x+i}function Ul(){return ue.x*ue.y*ue.z}function Nl(i,e,t){return i>=0&&i<ue.x&&e>=0&&e<ue.y&&t>=0&&t<ue.z}class Fg{voxels;size;constructor(e){this.size={...ue};const t=Ul();if(e){if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==ue.x||e.size.y!==ue.y||e.size.z!==ue.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${ue.x}x${ue.y}x${ue.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}else this.voxels=new Uint8Array(t),this.voxels.fill(0)}get(e,t,n){if(!Nl(e,t,n))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${n})`);const s=Il(e,t,n);return this.voxels[s]}set(e,t,n,s){if(!Nl(e,t,n))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${n})`);if(s<0||s>255)throw new Error(`Invalid block ID: ${s}. Must be 0-255.`);const r=Il(e,t,n);this.voxels[r]=s}getData(){return{size:{...this.size},voxels:new Uint8Array(this.voxels)}}setFromData(e){const t=Ul();if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==ue.x||e.size.y!==ue.y||e.size.z!==ue.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${ue.x}x${ue.y}x${ue.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}getVoxelsArray(){return this.voxels}getSize(){return{...this.size}}fill(e){if(e<0||e>255)throw new Error(`Invalid block ID: ${e}. Must be 0-255.`);this.voxels.fill(e)}clear(){this.voxels.fill(0)}isEmpty(){return this.voxels.every(e=>e===0)}countBlocks(e){let t=0;for(let n=0;n<this.voxels.length;n++)this.voxels[n]===e&&t++;return t}getBlockStats(){const e=new Map;for(let t=0;t<this.voxels.length;t++){const n=this.voxels[t];e.set(n,(e.get(n)||0)+1)}return e}}function so(i,e){return Math.floor(i/e)}function ro(i,e){return(i%e+e)%e}function ls(i,e,t){const n=so(i,ue.x),s=so(e,ue.y),r=so(t,ue.z),o=ro(i,ue.x),a=ro(e,ue.y),l=ro(t,ue.z);return{cx:n,cy:s,cz:r,lx:o,ly:a,lz:l}}function Ut(i,e,t){return`${i},${e},${t}`}class xa{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const n=this.listeners.get(e);return n.add(t),()=>{n.delete(t),n.size===0&&this.listeners.delete(e)}}once(e,t){const n=this.on(e,s=>{n(),t(s)});return n}off(e,t){const n=this.listeners.get(e);n&&(n.delete(t),n.size===0&&this.listeners.delete(e))}emit(e,t){const n=this.listeners.get(e);if(n){const s=Array.from(n);for(const r of s)try{r(t)}catch(o){console.error(`Error in event listener for '${String(e)}':`,o)}}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){const t=this.listeners.get(e);return t?t.size:0}eventNames(){return Array.from(this.listeners.keys())}}class Bg{blocks=new Map;nameToId=new Map;constructor(){this.initializeDefaults()}initializeDefaults(){const e=[{id:0,name:"air",opaque:!1,solid:!1,faces:{all:"air"}},{id:1,name:"grass",opaque:!0,solid:!0,faces:{top:"grass_top",bottom:"dirt",side:"grass_side"}},{id:2,name:"dirt",opaque:!0,solid:!0,faces:{all:"dirt"}},{id:3,name:"stone",opaque:!0,solid:!0,faces:{all:"cobblestone"}},{id:4,name:"sand",opaque:!0,solid:!0,faces:{all:"sand"}},{id:5,name:"water",opaque:!1,solid:!1,faces:{top:"water"}},{id:6,name:"wood",opaque:!0,solid:!0,faces:{top:"wood_top",bottom:"wood_top",side:"wood_side"}},{id:7,name:"leaves",opaque:!0,solid:!0,faces:{all:"tree_leaves"}},{id:8,name:"leaves_maple",opaque:!0,solid:!0,faces:{all:"maple_leaves"}},{id:9,name:"grass_tuft",opaque:!1,solid:!1,faces:{all:"air"}}];for(const n of e)this.registerBlock(n);const t=this.getBlock(0);if(!t||t.opaque||t.solid)throw new Error("Block registry invariant violated: AIR (id=0) must be non-opaque and non-solid")}registerBlock(e){if(e.id<0||e.id>255)throw new Error(`Invalid block ID: ${e.id}. Must be 0-255.`);if(this.blocks.has(e.id))throw new Error(`Block ID ${e.id} already registered`);if(this.nameToId.has(e.name))throw new Error(`Block name '${e.name}' already registered`);this.blocks.set(e.id,e),this.nameToId.set(e.name,e.id)}getBlock(e){return this.blocks.get(e)}getBlockIdByName(e){return this.nameToId.get(e)}getAllBlocks(){return Array.from(this.blocks.values())}hasBlock(e){return this.blocks.has(e)}getBlockCount(){return this.blocks.size}validate(){const e=this.getBlock(0);if(!e)throw new Error("Registry validation failed: AIR block (id=0) not found");if(e.opaque||e.solid)throw new Error("Registry validation failed: AIR block must be non-opaque and non-solid");const t=Math.max(...this.blocks.keys());for(let n=0;n<=t;n++)if(!this.blocks.has(n))throw new Error(`Registry validation failed: Missing block ID ${n} - IDs must be contiguous`)}}let oo=null;function Ma(){return oo||(oo=new Bg),oo}function fr(i){return Ma().getBlock(i)}function nn(i){return Ma().getBlockIdByName(i)}function zg(i){return i&&i.type==="CHUNK_DATA"&&typeof i.key=="string"&&i.payload}function Og(i){return i&&i.type==="CHUNK_MESH"&&typeof i.key=="string"&&i.payload&&i.payload.opaque&&i.payload.transparent&&i.payload.opaque.positions instanceof Float32Array&&i.payload.opaque.normals instanceof Float32Array&&i.payload.opaque.uvs instanceof Float32Array&&i.payload.opaque.colors instanceof Float32Array&&(i.payload.opaque.indices instanceof Uint16Array||i.payload.opaque.indices instanceof Uint32Array)&&i.payload.transparent.positions instanceof Float32Array&&i.payload.transparent.normals instanceof Float32Array&&i.payload.transparent.uvs instanceof Float32Array&&i.payload.transparent.colors instanceof Float32Array&&(i.payload.transparent.indices instanceof Uint16Array||i.payload.transparent.indices instanceof Uint32Array)}class kg extends xa{generatorWorker;mesherWorker;pendingRequests=new Set;atlasConfig=null;blockRegistry=[];chunkDataMap=new Map;worldRadius=null;constructor(){super(),this.generatorWorker=new Worker(new URL("/assets/generator.worker-CONQC9jZ.js",import.meta.url),{type:"module"}),this.generatorWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.generatorWorker.onerror=e=>{console.error("[ChunkPipeline] Generator worker error:",e)},this.mesherWorker=new Worker(new URL("/assets/mesher.worker-CR5xCLBy.js",import.meta.url),{type:"module"}),this.mesherWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.mesherWorker.onerror=e=>{console.error("[ChunkPipeline] Mesher worker error:",e)}}ingestChunkData(e,t){if(this.chunkDataMap.set(e,t),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before ingesting chunks");const n=this.buildNeighborsForKey(e),s={type:"MESH_CHUNK",payload:{key:e,chunkData:t,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:n}};this.mesherWorker.postMessage(s),this.emit("CHUNK_READY",{key:e,chunkData:t});const[r,o,a]=e.split(",").map(c=>parseInt(c,10)),l=[[r+1,o,a],[r-1,o,a],[r,o+1,a],[r,o-1,a],[r,o,a+1],[r,o,a-1]];for(const[c,h,u]of l){const d=Ut(c,h,u),p=this.chunkDataMap.get(d);if(p){const v=this.buildNeighborsFor(c,h,u),g={type:"MESH_CHUNK",payload:{key:d,chunkData:p,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:v}};this.mesherWorker.postMessage(g)}}}setAtlasConfig(e,t){this.atlasConfig=e,this.blockRegistry=t}setWorldRadius(e){this.worldRadius=e}requestChunk(e,t,n,s){const r=Ut(e,t,n);if(this.pendingRequests.has(r))return;this.pendingRequests.add(r);const o={type:"GEN_CHUNK",payload:{key:r,cx:e,cy:t,cz:n,seed:s,worldRadius:this.worldRadius||void 0}};this.generatorWorker.postMessage(o)}handleWorkerResponse(e){zg(e)?this.handleChunkDataResponse(e):Og(e)?this.handleChunkMeshResponse(e):console.warn("[ChunkPipeline] Unknown worker response:",e)}handleChunkDataResponse(e){const{key:t,payload:n}=e;if(this.pendingRequests.delete(t),this.chunkDataMap.set(t,n),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before requesting chunks");const s=this.buildNeighborsForKey(t),r={type:"MESH_CHUNK",payload:{key:t,chunkData:n,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:s}};this.mesherWorker.postMessage(r);const[o,a,l]=t.split(",").map(h=>parseInt(h,10)),c=[[o+1,a,l],[o-1,a,l],[o,a+1,l],[o,a-1,l],[o,a,l+1],[o,a,l-1]];for(const[h,u,d]of c){const p=Ut(h,u,d),v=this.chunkDataMap.get(p);if(v){const g=this.buildNeighborsFor(h,u,d),m={type:"MESH_CHUNK",payload:{key:p,chunkData:v,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:g}};this.mesherWorker.postMessage(m)}}this.emit("CHUNK_READY",{key:t,chunkData:n})}buildNeighborsForKey(e){const[t,n,s]=e.split(",").map(r=>parseInt(r,10));return this.buildNeighborsFor(t,n,s)}buildNeighborsFor(e,t,n){return{posX:this.chunkDataMap.get(Ut(e+1,t,n)),negX:this.chunkDataMap.get(Ut(e-1,t,n)),posY:this.chunkDataMap.get(Ut(e,t+1,n)),negY:this.chunkDataMap.get(Ut(e,t-1,n)),posZ:this.chunkDataMap.get(Ut(e,t,n+1)),negZ:this.chunkDataMap.get(Ut(e,t,n-1))}}handleChunkMeshResponse(e){const{key:t}=e;this.emit("CHUNK_MESH",{key:t,response:e})}requestRemesh(e,t,n,s){if(!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before meshing");const r=Ut(e,t,n);this.chunkDataMap.set(r,s);const o=this.buildNeighborsFor(e,t,n),a={type:"MESH_CHUNK",payload:{key:r,chunkData:s,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:o}};this.mesherWorker.postMessage(a)}destroy(){this.generatorWorker.terminate(),this.mesherWorker.terminate(),this.pendingRequests.clear(),this.chunkDataMap.clear()}}class Vg extends xa{chunks=new Map;chunkPipeline;seed=12345;overrideProvider=null;floodedAir=new Set;constructor(){super(),this.chunkPipeline=new kg,this.chunkPipeline.on("CHUNK_READY",({key:e,chunkData:t})=>{this.handleChunkReady(e,t)})}async handleChunkReady(e,t){const n=new Fg;if(n.setFromData(t),this.overrideProvider)try{const h=await this.overrideProvider.getOverrides(e);this.applyOverrides(n,h)}catch(h){console.warn(`[World] Failed to load overrides for chunk ${e}:`,h)}const[s,r,o]=e.split(","),a=parseInt(s,10),l=parseInt(r,10),c=parseInt(o,10);this.chunks.set(e,n),this.emit("CHUNK_ADDED",{key:e,chunk:n,coords:{cx:a,cy:l,cz:c}})}ensureChunk(e,t,n){const s=Ut(e,t,n),r=this.chunks.get(s);if(!r){this.chunkPipeline.requestChunk(e,t,n,this.seed);return}return r}getChunk(e,t,n){const s=Ut(e,t,n);return this.chunks.get(s)}getChunkByKey(e){return this.chunks.get(e)}setChunk(e,t,n,s){const r=Ut(e,t,n),o=this.chunks.has(r);this.chunks.set(r,s),o||this.emit("CHUNK_ADDED",{key:r,chunk:s,coords:{cx:e,cy:t,cz:n}})}removeChunk(e,t,n){const s=Ut(e,t,n),r=this.chunks.delete(s);return r&&this.emit("CHUNK_REMOVED",{key:s,coords:{cx:e,cy:t,cz:n}}),r}setBlock(e,t,n,s){const{cx:r,cy:o,cz:a,lx:l,ly:c,lz:h}=ls(e,t,n),u=this.ensureChunk(r,o,a);if(!u){console.warn(`[World] Cannot set block at (${e}, ${t}, ${n}): chunk not ready yet`);return}const d=u.get(l,c,h);u.set(l,c,h,s),this.emit("BLOCK_CHANGED",{worldX:e,worldY:t,worldZ:n,oldBlockId:d,newBlockId:s,chunkKey:Ut(r,o,a),localX:l,localY:c,localZ:h})}getBlock(e,t,n){const{cx:s,cy:r,cz:o,lx:a,ly:l,lz:c}=ls(e,t,n),h=this.getChunk(s,r,o);return h?h.get(a,l,c):0}isBlockSolid(e,t,n){const{cx:s,cy:r,cz:o}=ls(e,t,n);if(!this.getChunk(s,r,o))return t<=80;const l=this.getBlock(e,t,n),c=fr(l);return c?c.solid:!1}isBlockOpaque(e,t,n){const s=this.getBlock(e,t,n),r=fr(s);return r?r.opaque:!1}getLoadedChunkKeys(){return Array.from(this.chunks.keys())}getLoadedChunks(){return Array.from(this.chunks.values())}getLoadedChunkCount(){return this.chunks.size}addFloodedAir(e){for(const t of e)this.floodedAir.add(`${t.x},${t.y},${t.z}`)}removeFloodedAir(e){for(const t of e)this.floodedAir.delete(`${t.x},${t.y},${t.z}`)}isAirFlooded(e,t,n){return this.floodedAir.has(`${e},${t},${n}`)}clearFloodedAir(){this.floodedAir.clear()}isChunkLoaded(e,t,n){const s=Ut(e,t,n);return this.chunks.has(s)}getChunksInRadius(e,t,n,s){const r=new Map;for(let o=e-s;o<=e+s;o++)for(let a=t-s;a<=t+s;a++)for(let l=n-s;l<=n+s;l++){const c=this.getChunk(o,a,l);if(c){const h=Ut(o,a,l);r.set(h,c)}}return r}clear(){const e=this.getLoadedChunkKeys();for(const t of e){const[n,s,r]=t.split(","),o=parseInt(n,10),a=parseInt(s,10),l=parseInt(r,10);this.removeChunk(o,a,l)}}setSeed(e){this.seed=e}getSeed(){return this.seed}setOverrideProvider(e){this.overrideProvider=e}getOverrideProvider(){return this.overrideProvider}applyOverrides(e,t){for(const n of t)try{e.set(n.lx,n.ly,n.lz,n.id)}catch(s){console.warn(`[World] Failed to apply override at (${n.lx}, ${n.ly}, ${n.lz}):`,s)}}destroy(){this.chunkPipeline.destroy(),this.clear()}}class Hg extends xa{scene;materialOpaque;materialTransparent;chunkMeshes=new Map;chunkGroups=new Map;constructor(e,t){super(),this.scene=e,this.materialOpaque=t.opaque,this.materialTransparent=t.transparent}handleChunkMesh(e){const{key:t,payload:n}=e,{opaque:s,transparent:r}=n;this.removeChunkMesh(t);const o=new bt,a=(m,f,E)=>{if(!m.positions.length)return null;const w=new Yt;w.setAttribute("position",new ht(m.positions,3)),w.setAttribute("normal",new ht(m.normals,3)),w.setAttribute("uv",new ht(m.uvs,2)),m.colors&&m.colors.length&&w.setAttribute("color",new ht(m.colors,3)),w.setIndex(new ht(m.indices,1));const x=new Tt(w,f);return x.castShadow=!E,x.receiveShadow=!E,E&&(x.renderOrder=2),x},l=a(s,this.materialOpaque,!1),c=a(r,this.materialTransparent,!0);if(!l&&!c)return;const[h,u,d]=t.split(","),p=parseInt(h,10),v=parseInt(u,10),g=parseInt(d,10);o.position.set(p*ue.x,v*ue.y,g*ue.z),l&&o.add(l),c&&o.add(c),l&&l.position.set(0,0,0),c&&c.position.set(0,0,0),this.scene.add(o),this.chunkMeshes.set(t,l??c),this.chunkGroups.set(t,o),this.emit("MESH_CREATED",{key:t,mesh:l??c})}removeChunkMesh(e){const t=this.chunkGroups.get(e),n=this.chunkMeshes.get(e);t&&(this.scene.remove(t),t.traverse(s=>{s instanceof Tt&&s.geometry&&s.geometry.dispose()}),this.chunkGroups.delete(e)),n&&(this.chunkMeshes.delete(e),this.emit("MESH_REMOVED",{key:e}))}getChunkMesh(e){return this.chunkMeshes.get(e)}getLoadedChunkKeys(){return Array.from(this.chunkMeshes.keys())}getLoadedMeshCount(){return this.chunkMeshes.size}clear(){const e=this.getLoadedChunkKeys();for(const t of e)this.removeChunkMesh(t)}destroy(){this.clear()}}const Gg="/assets/grass_top-B-uLxs5-.png",Wg="/assets/dirt-B-vrw7w8.png",Xg="/assets/grass_side-D5yzkk_I.png",Yg="/assets/cobblestone-CA00UXn1.png",Ic="/assets/sand-CXf4aeir.png",Uc="/assets/water-4cf5f3s2.png",qg="/assets/wood_top-COALD2KD.png",Zg="/assets/wood_side-C4jg5E62.png",Kg="/assets/tree_leaves-C6IY6uCJ.png",jg="/assets/maple_leaves-D3-dxP6r.png";class Fl{texture;config;constructor(e,t){this.texture=e,this.config=t,this.texture.flipY=!0,this.texture.colorSpace=yt,this.texture.magFilter=Je,this.texture.minFilter=Je,this.texture.generateMipmaps=!1,this.texture.wrapS=Ft,this.texture.wrapT=Ft,this.texture.needsUpdate=!0}getTexture(){return this.texture}getTile(e){const t=this.config.tiles[e];return t?{u:t[0],v:t[1]}:null}getTileSize(){return this.config.tileSize}getAtlasSize(){return this.config.atlasSize}getTiles(){return this.config.tiles}getConfig(){return this.config}}function $g(){const t=document.createElement("canvas");t.width=80,t.height=16,t.getContext("2d").clearRect(0,0,t.width,t.height);const s=new pa(t);return s.flipY=!0,s.colorSpace=yt,s.magFilter=Je,s.minFilter=Je,s.generateMipmaps=!1,s.wrapS=Ft,s.wrapT=Ft,s.needsUpdate=!0,s}async function Qg(){const i=new Ms,e=16,t=11,n=1,s=document.createElement("canvas");s.width=t*e,s.height=n*e;const r=s.getContext("2d");r.clearRect(0,0,s.width,s.height);const a=Object.entries({grass_top:{path:Gg,position:[0,0]},dirt:{path:Wg,position:[1,0]},grass_side:{path:Xg,position:[2,0]},cobblestone:{path:Yg,position:[3,0]},sand:{path:Ic,position:[4,0]},water:{path:Uc,position:[5,0]},wood_top:{path:qg,position:[6,0]},wood_side:{path:Zg,position:[7,0]},tree_leaves:{path:Kg,position:[8,0]},maple_leaves:{path:jg,position:[9,0]}}).map(async([c,{path:h,position:[u,d]}])=>{try{const p=await new Promise((g,m)=>{i.load(h,g,void 0,m)}),v=p.image;c==="grass_side"?(r.save(),r.translate((u+.5)*e,(d+.5)*e),r.rotate(Math.PI),r.drawImage(v,-e/2,-e/2,e,e),r.restore()):r.drawImage(v,u*e,d*e,e,e),p.dispose()}catch(p){console.warn(`Failed to load texture ${c}:`,p)}});await Promise.all(a);const l=new pa(s);return Jg(l)}function Jg(i){return i.flipY=!0,i.colorSpace=yt,i.magFilter=Je,i.minFilter=Je,i.generateMipmaps=!1,i.wrapS=Ft,i.wrapT=Ft,i.needsUpdate=!0,i}async function ev(){try{const e=await(await fetch("/atlas.json")).json(),t=await Qg();return new Fl(t,e)}catch(i){console.warn("Failed to load atlas, falling back to simple atlas:",i);const e={tileSize:16,atlasSize:11,tiles:{grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0],maple_leaves:[9,0],air:[10,0]}},t=$g();return new Fl(t,e)}}class tv{envMap=null;pmremGenerator=null;constructor(e){this.pmremGenerator=new jo(e)}createEnvironmentMap(){if(this.envMap)return this.envMap;const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const n=t.getContext("2d"),s=n.createLinearGradient(0,0,0,e);s.addColorStop(0,"#87CEEB"),s.addColorStop(.7,"#B0E0E6"),s.addColorStop(1,"#F0F8FF"),n.fillStyle=s,n.fillRect(0,0,e,e);const r=[];for(let o=0;o<6;o++){const a=document.createElement("canvas");a.width=e,a.height=e,a.getContext("2d").drawImage(t,0,0),r.push(a)}return this.envMap=new da(r),this.envMap.needsUpdate=!0,this.envMap.format=Xt,this.envMap.type=gn,this.envMap.generateMipmaps=!1,this.envMap.minFilter=ln,this.envMap.magFilter=ln,this.envMap.wrapS=Ft,this.envMap.wrapT=Ft,this.envMap}getEnvironmentMap(){return this.envMap}dispose(){this.envMap&&(this.envMap.dispose(),this.envMap=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null)}}class Nc extends wt{startTime;constructor(e,t,n){super({vertexShader:`
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
      uniform float shadowBlendMin;
      uniform float shadowCascadeSize[4];
      uniform float shadowCamNear[4];
      uniform float shadowCamFar[4];

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
      float sampleShadowCascade(int ci, vec3 worldPos, vec3 normal, vec3 sunDir, float biasNorm) {
          // Stable world-space bias based on world-units-per-texel for this cascade
          float worldTexel = shadowCascadeSize[ci] / max(1.0, shadowResolution);
          float biasWorld = biasNorm * worldTexel;
          // Apply world-space offsets: push along normal (slope) and towards light (directional)
          vec3 receiverPos = worldPos - sunDir * biasWorld;
          vec4 sc = getShadowCoord(ci, receiverPos);
          sc.xyz /= sc.w;
          sc = sc * 0.5 + 0.5;
          if (sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0 || sc.z < 0.0 || sc.z > 1.0) return 1.0;

          // Convert desired world-space kernel width to UV units using cascade size
          float uvPerWorld = 1.0 / max(shadowCascadeSize[ci], 1e-3);
          float base = shadowSoftness; // interpret softness as world units
          float texelSize = max(base * uvPerWorld, 1.0 / shadowResolution);
          float receiver = sc.z; // bias applied in world-space above

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
          float searchRadius = 4.0 * texelSize;
          // Anchor rotation to shadow texel grid for temporal stability
          vec2 scTexel = floor(sc.xy * shadowResolution);
          float angle = hash12(scTexel) * 6.2831853;
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

          // Frustum-based cascade selection using camera-space Z depth
          float viewDepth = -vViewPosition.z;

          // Determine base cascade index
          int ci = 0;
          if (shadowCascades > 1 && viewDepth > shadowDistances[0]) ci = 1;
          if (shadowCascades > 2 && viewDepth > shadowDistances[1]) ci = 2;
          if (shadowCascades > 3 && viewDepth > shadowDistances[2]) ci = 3;

          vec3 sunDirN = normalize(sunDir);
          float sBase = sampleShadowCascade(ci, worldPos + normal * nb, normal, sunDirN, shadowBias);

          // Symmetric blending near the closest cascade boundary to avoid seams
          // Find nearest boundary index b (0..shadowCascades-2)
          float d0 = (shadowCascades > 1) ? abs(viewDepth - shadowDistances[0]) : 1e9;
          float d1 = (shadowCascades > 2) ? abs(viewDepth - shadowDistances[1]) : 1e9;
          float d2 = (shadowCascades > 3) ? abs(viewDepth - shadowDistances[2]) : 1e9;
          float minD = d0;
          int b = 0;
          if (d1 < minD) { minD = d1; b = 1; }
          if (d2 < minD) { minD = d2; b = 2; }

          // Only blend if a boundary exists (i.e., at least 2 cascades)
          if (shadowCascades > 1) {
            // Determine half-width of the blend zone around boundary b
            float segPrev = (b == 0) ? shadowDistances[0] : (shadowDistances[b] - shadowDistances[b - 1]);
            float segNext = (shadowCascades > b + 1) ? (shadowDistances[b + 1] - shadowDistances[b]) : segPrev;
            float halfWidth = 0.5 * shadowBlendFraction * min(segPrev, segNext);
            // Enforce an absolute minimum blend half-width in world units for stability
            halfWidth = max(shadowBlendMin, halfWidth);

            float boundary = shadowDistances[b];
            if (abs(viewDepth - boundary) < halfWidth) {
              int leftCascade = b;
              int rightCascade = min(b + 1, shadowCascades - 1);

              float sL = sampleShadowCascade(leftCascade, worldPos + normal * nb, normal, sunDirN, shadowBias);
              float sR = sampleShadowCascade(rightCascade, worldPos + normal * nb, normal, sunDirN, shadowBias);
              // Smooth symmetric blend around boundary using smoothstep
              float t = smoothstep(-halfWidth, halfWidth, viewDepth - boundary);
              float sBlend = mix(sL, sR, t);
              return mix(1.0 - shadowIntensity, 1.0, sBlend);
            }
          }

          // Not near a boundary: use base cascade only
          return mix(1.0 - shadowIntensity, 1.0, sBase);
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
          vec3 dayAmb = vec3(0.4, 0.5, 0.6) * 0.20;
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
          // Crisper sun diffuse for stronger, clearer shadows
          float wrappedDiffuse = sunDot;
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
    `,uniforms:{map:{value:e},normalMap:{value:n||null},envMap:{value:t},roughness:{value:.8},metalness:{value:0},envMapIntensity:{value:.3},time:{value:0},alphaScale:{value:1},lightingMix:{value:1},sunDirection:{value:new L(50,120,50).normalize()},sunColor:{value:new Ce(1,.95,.8)},shadowMap0:{value:null},shadowMap1:{value:null},shadowMap2:{value:null},shadowMap3:{value:null},shadowMatrix0:{value:new Ge},shadowMatrix1:{value:new Ge},shadowMatrix2:{value:new Ge},shadowMatrix3:{value:new Ge},shadowCascades:{value:3},shadowDistances:{value:[25,50,100,200]},shadowSoftness:{value:2},shadowBias:{value:5e-4},shadowNormalBias:{value:.02},shadowIntensity:{value:0},shadowResolution:{value:1024},shadowBlendFraction:{value:.2},shadowBlendMin:{value:3},shadowCascadeSize:{value:[100,200,400,800]},shadowCamNear:{value:[.1,.1,.1,.1]},shadowCamFar:{value:[100,200,400,800]},cloudShadowEnabled:{value:!0},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new Ae(Math.cos(Math.PI*.25)*5,Math.sin(Math.PI*.25)*5)},dayLight:{value:1},starLight:{value:0},materialFogEnabled:{value:!1}},defines:t?{USE_ENVMAP:!0}:{},side:yn,transparent:!1}),this.startTime=Date.now()}updateUniforms(e){this.uniforms.time.value=Date.now()-this.startTime}setMaterialProperties(e,t,n){const s=this.uniforms;s.roughness.value=e,s.metalness.value=t,s.envMapIntensity.value=n}setAlphaScale(e){const t=this.uniforms;t.alphaScale.value=Pe.clamp(e,0,1)}setLightingMix(e){const t=this.uniforms;t.lightingMix.value=Pe.clamp(e,0,1)}setSunUniforms(e,t){const n=this.uniforms;n.sunDirection.value.copy(e),n.sunColor.value.copy(t)}setDayLight(e){const t=this.uniforms;t.dayLight.value=Pe.clamp(e,0,1)}setStarLight(e){const t=this.uniforms;t.starLight.value=Pe.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=Pe.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=Pe.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=Pe.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}updateShadowUniforms(e){const t=this.uniforms;Object.keys(e).forEach(n=>{t[n]&&(t[n].value=e[n].value)})}}const rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ss{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const nv=new Mr(-1,1,1,-1,0,1);class iv extends Yt{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const sv=new iv;class Fc{constructor(e){this._mesh=new Tt(sv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ys extends Ss{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gs.clone(e.uniforms),this.material=new wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Fc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Bl extends Ss{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class rv extends Ss{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ov{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ae);this._width=n.width,this._height=n.height,t=new Qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ys(rr),this.copyPass.material.blending=Pn,this.clock=new Zu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Bl!==void 0&&(o instanceof Bl?n=!0:o instanceof rv&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class av extends Ss{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}class lv extends ys{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},ssaoEnabled:{value:!0},ssaoIntensity:{value:.35},ssaoRadius:{value:.02}},vertexShader:`
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
        
        // Simple hash for per-pixel random rotation (avoids fixed ring banding)
        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        float readDepth(vec2 coord) {
          float z = texture2D(tDepth, coord).r;
          if (z == 1.0) return cameraFar;
          float viewZ = (cameraNear * cameraFar) / ((cameraFar - cameraNear) * z - cameraFar);
          return -viewZ;
        }
        float aoFunc(vec2 uv) {
          if (!ssaoEnabled) return 1.0;
          float current = readDepth(uv); if (current >= cameraFar*0.99) return 1.0;
          // Screen-space radius in pixels -> convert to UV
          float baseRadius = ssaoRadius * 200.0; // ~pixels at 1080p
          // Per-pixel random rotation to break banding
          float angle0 = hash12(uv * resolution) * 6.2831853;
          float cs = cos(angle0); float sn = sin(angle0);
          mat2 rot = mat2(cs, -sn, sn, cs);
          
          int samples = 16;
          float occlusion = 0.0;
          // Continuous falloff within a reasonable depth window
          const float maxDelta = 5.0; // world/view units window
          for (int i=0;i<16;i++){
            float t = (float(i) + 0.5) / 16.0;
            // Distribute samples from near center to radius with a slight bias to inner ring
            float r = mix(0.25, 1.0, t);
            float a = t * 6.2831853;
            vec2 dir = vec2(cos(a), sin(a));
            vec2 o = rot * dir * (baseRadius * r) / resolution;
            vec2 suv = clamp(uv + o, vec2(0.0), vec2(1.0));
            float sd = readDepth(suv);
            float diff = current - sd; // positive when sample is closer (occluder)
            if (diff > 0.001) {
              float w = 1.0 - clamp(diff / maxDelta, 0.0, 1.0);
              // Closer occluders contribute more, farther ones fade
              occlusion += w;
            }
          }
          occlusion = (occlusion / float(samples)) * ssaoIntensity;
          // Limit darkening to avoid conflict with dynamic shadows and baked AO
          return clamp(1.0 - occlusion * 0.75, 0.5, 1.0);
        }
        void main(){
          vec3 color = texture2D(tDiffuse, vUv).rgb;
          float ao = aoFunc(vUv);
          gl_FragColor = vec4(color * ao, 1.0);
        }
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setSettings({enabled:e,intensity:t,radius:n}){e!==void 0&&(this.uniforms.ssaoEnabled.value=e),t!==void 0&&(this.uniforms.ssaoIntensity.value=t),n!==void 0&&(this.uniforms.ssaoRadius.value=n)}}class cv extends ys{_sunDirView=new L(.6,.8,.1).normalize();constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjection:{value:new Ge},invView:{value:new Ge},sunDirView:{value:new L(.6,.8,.1).normalize()},enabled:{value:!0},intensity:{value:.1},steps:{value:32}},vertexShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjection.value.copy(e.projectionMatrixInverse),this.uniforms.invView.value.copy(e.matrixWorldInverse)}setSunDirWorld(e,t){const n=new ze().setFromMatrix4(t.matrixWorldInverse);this._sunDirView.copy(e).applyMatrix3(n).normalize(),this.uniforms.sunDirView.value.copy(this._sunDirView)}setSettings({enabled:e,intensity:t,steps:n}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.intensity.value=t),n!==void 0&&(this.uniforms.steps.value=n)}}const hv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ce(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Wi extends Ss{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new Ce(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qt(r,o,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Qt(r,o,{type:Ln});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Qt(r,o,{type:Ln});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=hv;this.highPassUniforms=gs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new wt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Ae(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gs.clone(rr.uniforms),this.blendMaterial=new wt({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,blending:lr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ce,this._oldClearAlpha=1,this._basic=new ua,this._fsQuad=new Fc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ae(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Wi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Wi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Wi.BlurDirectionX=new Ae(1,0);Wi.BlurDirectionY=new Ae(0,1);class uv extends Wi{constructor(e,t){super(new Ae(e,t),.3,.5,.05)}setSize(e,t){super.setSize(e,t)}setSettings({enabled:e,strength:t,threshold:n}){e!==void 0&&(this.enabled=e),t!==void 0&&(this.strength=t),n!==void 0&&(this.threshold=n)}}class dv extends ys{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1e3},enabled:{value:!0},baseDensity:{value:.002},maxDistance:{value:600},fogColor:{value:new Ce(.72,.82,.92)},dayLight:{value:1},exposure:{value:.9},contrast:{value:1.15},saturation:{value:1.1},invProjectionMatrix:{value:new Ge},cameraMatrixWorld:{value:new Ge},hazeEnabled:{value:!1},waterLevel:{value:42},hazeStart:{value:400},hazeDensity:{value:.004},hazeMaxMix:{value:.5},hazeAngleBoost:{value:0},hazePlaneBoost:{value:0},hazePlaneBand:{value:6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setSettings({enabled:e,baseDensity:t,maxDistance:n}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.baseDensity.value=t),n!==void 0&&(this.uniforms.maxDistance.value=n)}setColor(e){this.uniforms.fogColor.value.copy(e)}setDayLight(e){this.uniforms.dayLight.value=Pe.clamp(e,0,1)}setColorGrading({exposure:e,contrast:t,saturation:n}){e!==void 0&&(this.uniforms.exposure.value=e),t!==void 0&&(this.uniforms.contrast.value=t),n!==void 0&&(this.uniforms.saturation.value=n)}setHorizonHaze(e){e.enabled!==void 0&&(this.uniforms.hazeEnabled.value=e.enabled),e.waterLevel!==void 0&&(this.uniforms.waterLevel.value=e.waterLevel),e.hazeStart!==void 0&&(this.uniforms.hazeStart.value=e.hazeStart),e.hazeDensity!==void 0&&(this.uniforms.hazeDensity.value=e.hazeDensity),e.hazeMaxMix!==void 0&&(this.uniforms.hazeMaxMix.value=e.hazeMaxMix),e.hazeAngleBoost!==void 0&&(this.uniforms.hazeAngleBoost.value=e.hazeAngleBoost),e.hazePlaneBoost!==void 0&&(this.uniforms.hazePlaneBoost.value=e.hazePlaneBoost),e.hazePlaneBand!==void 0&&(this.uniforms.hazePlaneBand.value=e.hazePlaneBand)}}class fv extends ys{_sunNdc=new Ae(-10,-10);_sunVisible=0;_sunColor=new Ce(1,1,1);constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new Ae(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},sunNdc:{value:new Ae(-10,-10)},sunVisible:{value:0},sunColor:{value:new Ce(1,1,1)},intensity:{value:.6},enabled:{value:!0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
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
          // Occlusion probe: if geometry present at sun pixel, disable flare
          float occ = 1.0;
          if (sunSS.x >= 0.0 && sunSS.x <= 1.0 && sunSS.y >= 0.0 && sunSS.y <= 1.0) {
            float sd = readDepth(sunSS);
            // If depth is finite near cameraFar, assume sky -> no occluder; else fully occluded
            occ = sd > cameraFar * 0.99 ? 1.0 : 0.0;
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setEnabled(e){this.uniforms.enabled.value=e}setIntensity(e){this.uniforms.intensity.value=e}setSun(e,t,n){this._sunColor.copy(t);const s=new L().copy(e).multiplyScalar(1e4),r=new Ge().multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),o=new mt(s.x,s.y,s.z,1).applyMatrix4(r);let a=0;const l=this._sunNdc;o.w!==0&&l.set(o.x/o.w,o.y/o.w),e.y>0?o.w>0&&Math.abs(l.x)<=1&&Math.abs(l.y)<=1&&(a=1):a=0,this._sunVisible=a,this.uniforms.sunNdc.value.copy(l),this.uniforms.sunColor.value.copy(this._sunColor),this.uniforms.sunVisible.value=this._sunVisible}}class pv{composer;renderPass;ssao;vol;bloom;lens;fog;depthTarget;renderer;scene;constructor(e,t,n,s,r){this.composer=new ov(e),this.renderer=e,this.scene=t,this.depthTarget=new Qt(s,r,{minFilter:Je,magFilter:Je,format:Xt,depthBuffer:!0,stencilBuffer:!1}),this.depthTarget.depthTexture=new xr(s,r,hi),this.depthTarget.depthTexture.format=di,this.renderPass=new av(t,n),this.composer.addPass(this.renderPass),this.ssao=new lv,this.ssao.setDepthTexture(this.depthTarget.depthTexture),this.ssao.setSize(s,r),this.composer.addPass(this.ssao),this.vol=new cv,this.vol.setDepthTexture(this.depthTarget.depthTexture),this.vol.setSize(s,r),this.composer.addPass(this.vol),this.bloom=new uv(s,r),this.composer.addPass(this.bloom),this.lens=new fv,this.lens.setDepthTexture(this.depthTarget.depthTexture),this.lens.setSize(s,r),this.composer.addPass(this.lens),this.fog=new dv,this.fog.setDepthTexture(this.depthTarget.depthTexture),this.composer.addPass(this.fog)}setSize(e,t){this.depthTarget.setSize(e,t),this.composer.setSize(e,t),this.ssao.setSize(e,t),this.vol.setSize(e,t),this.bloom.setSize(e,t),this.lens.setSize(e,t)}update(e,t,n){const s=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,e),this.renderer.setRenderTarget(s),this.ssao.setCamera(e),this.vol.setCamera(e),this.vol.setSunDirWorld(t,e),this.lens.setCamera(e),this.lens.setSun(t,n??new Ce(1,1,.95),e),this.fog.setCamera(e)}setSSAO(e,t,n){this.ssao.setSettings({enabled:e,intensity:t,radius:n})}setVolumetrics(e,t,n){this.vol.setSettings({enabled:e,intensity:t,steps:n})}setBloom(e,t,n){this.bloom.setSettings({enabled:e,strength:t,threshold:n})}setLens(e,t){this.lens.setEnabled(e),this.lens.setIntensity(t)}setFog(e,t,n){this.fog.setSettings({enabled:e,baseDensity:t,maxDistance:n})}setHorizonHaze(e){this.fog.setHorizonHaze(e)}setFogColor(e){this.fog.setColor(e)}setFogDayLight(e){this.fog.setDayLight(e)}setColorGrading(e,t,n){this.fog.setColorGrading({exposure:e,contrast:t,saturation:n})}render(){this.composer.render()}}class mv{renderer;shadowLight;shadowCameras=[];shadowMaps=[];cascadeDistances=[];cascadeSizes=[];dummyTexture;sunDir=new L(50,120,50).normalize();lastSnappedLS=[];settings={enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:2.5,bias:5e-4,normalBias:.02,intensity:.6,stableExtents:!1,extentScale:1.05,shadowBlendFraction:.3,shadowBlendMin:10};constructor(e,t){this.renderer=e,this.shadowLight=new Tc(16777215,1),this.shadowLight.position.set(50,120,50),this.shadowLight.castShadow=this.settings.enabled,t.add(this.shadowLight.target),this.shadowLight.shadow.mapSize.width=this.settings.resolution,this.shadowLight.shadow.mapSize.height=this.settings.resolution,this.shadowLight.shadow.camera.near=.5,this.shadowLight.shadow.camera.far=this.settings.shadowDistance,t.add(this.shadowLight),this.initializeCascades(),this.enableShadowMapping(),this.dummyTexture=new Ec(new Uint8Array([0,0,0,255]),1,1,Xt),this.dummyTexture.needsUpdate=!0}initializeCascades(){this.recomputeCascadeSplits(),this.shadowCameras=[],this.shadowMaps=[],this.cascadeSizes=[],this.lastSnappedLS=[];for(let e=0;e<this.settings.cascades;e++){const t=new Mr(-50,50,50,-50,.1,this.cascadeDistances[e]);this.shadowCameras.push(t);const n=new Qt(this.settings.resolution,this.settings.resolution,{minFilter:Je,magFilter:Je,format:Xt,depthBuffer:!0,stencilBuffer:!1});n.depthTexture=new xr(this.settings.resolution,this.settings.resolution,hi),n.depthTexture.format=di,this.shadowMaps.push(n)}}recomputeCascadeSplits(){const e=this.settings.cascades,t=.1,n=this.settings.shadowDistance,s=.7;this.cascadeDistances=[];for(let r=1;r<=e;r++){const o=r/e,a=t*Math.pow(n/t,o),l=t+(n-t)*o,c=s*(a-l)+l;this.cascadeDistances.push(c)}}enableShadowMapping(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ta,this.renderer.shadowMap.autoUpdate=!0}update(e,t){if(!this.settings.enabled){this.shadowLight.castShadow=!1,this.renderer.shadowMap.enabled=!1;return}this.shadowLight.castShadow=!0,this.renderer.shadowMap.enabled=!0,this.updateShadowLightPosition(),e.isPerspectiveCamera&&this.updateCascadeCameras(e),this.renderShadowMaps(t)}updateShadowLightPosition(){const e=Math.max(50,this.settings.shadowDistance),t=this.sunDir.clone().multiplyScalar(e);this.shadowLight.position.copy(t),this.shadowLight.target.position.set(0,0,0),this.shadowLight.target.updateMatrixWorld()}updateCascadeCameras(e){const t=e,n=this.sunDir.clone().normalize(),s=new L(0,1,0);let r=t.near;for(let o=0;o<this.settings.cascades;o++){const a=this.cascadeDistances[o],l=this.shadowCameras[o],c=this.getSliceCornersWorld(t,r,a),h=new L().copy(t.position),u=h.clone().sub(n.clone().multiplyScalar(200)),d=new Ge().lookAt(u,h,s),p=new L(1/0,1/0,1/0),v=new L(-1/0,-1/0,-1/0);for(const x of c){const b=x.clone().applyMatrix4(d);p.min(b),v.max(b)}let g,m=0,f=h.clone().applyMatrix4(d);if(this.settings.stableExtents){const b=Math.tan(Pe.degToRad(t.fov)*.5)*a,A=b*t.aspect,C=Math.sqrt(A*A+b*b)*(this.settings.extentScale??1.05),D=2*C;g=C,m=D;const M=D/this.settings.resolution,y=Math.round(f.x/M)*M,R=Math.round(f.y/M)*M,B=this.lastSnappedLS[o]||{x:y,y:R},F=M*.5,O=Math.abs(y-B.x)>=F?y:B.x,X=Math.abs(R-B.y)>=F?R:B.y,G=O-f.x,K=X-f.y;if(Math.abs(G)>1e-6||Math.abs(K)>1e-6){const k=new Ge().makeTranslation(G,K,0);d.premultiply(k),f=h.clone().applyMatrix4(d)}this.lastSnappedLS[o]={x:O,y:X},l.left=-g,l.right=g,l.bottom=-g,l.top=g}else{const x=new L().subVectors(v,p),b=x.x/this.settings.resolution,A=x.y/this.settings.resolution;p.x=Math.floor(p.x/b)*b,p.y=Math.floor(p.y/A)*A,v.x=Math.floor(v.x/b)*b,v.y=Math.floor(v.y/A)*A;const C=Math.max(v.x-p.x,v.y-p.y);g=.5*C,m=C,f.set(.5*(p.x+v.x),.5*(p.y+v.y),0);const D=C/this.settings.resolution;f.x=Math.floor(f.x/D)*D,f.y=Math.floor(f.y/D)*D,l.left=f.x-g,l.right=f.x+g,l.bottom=f.y-g,l.top=f.y+g}const E=Math.max(.1,-v.z),w=Math.max(E+1,-p.z+25);l.near=E,l.far=w,l.updateProjectionMatrix(),l.matrixWorld.copy(new Ge().copy(d).invert()),l.matrixWorldInverse.copy(d),l.updateMatrixWorld(!0),r=a,this.cascadeSizes[o]=Math.max(.001,m)}}getSliceCornersWorld(e,t,n){const s=[],r=new L().setFromMatrixPosition(e.matrixWorld),o=new L;e.getWorldDirection(o);const a=new L(0,1,0).applyQuaternion(e.quaternion),l=new L().crossVectors(o,a).normalize().multiplyScalar(-1),c=r.clone().addScaledVector(o,t),h=r.clone().addScaledVector(o,n),u=Math.tan(Pe.degToRad(e.fov)*.5),d=u*t,p=d*e.aspect,v=u*n,g=v*e.aspect;return s.push(c.clone().addScaledVector(a,d).addScaledVector(l,-p)),s.push(c.clone().addScaledVector(a,-d).addScaledVector(l,-p)),s.push(c.clone().addScaledVector(a,-d).addScaledVector(l,p)),s.push(c.clone().addScaledVector(a,d).addScaledVector(l,p)),s.push(h.clone().addScaledVector(a,v).addScaledVector(l,-g)),s.push(h.clone().addScaledVector(a,-v).addScaledVector(l,-g)),s.push(h.clone().addScaledVector(a,-v).addScaledVector(l,g)),s.push(h.clone().addScaledVector(a,v).addScaledVector(l,g)),s}renderShadowMaps(e){const t=this.renderer.getRenderTarget(),n=[];e.traverse(s=>{const r=s.material;(Array.isArray(r)?r:[r]).forEach(a=>{if(a&&"isShaderMaterial"in a&&a.isShaderMaterial&&"uniforms"in a){const l=a,c=l.uniforms,h={};let u=!1;["shadowMap0","shadowMap1","shadowMap2","shadowMap3"].forEach(d=>{c[d]&&(h[d]=c[d].value,c[d].value=this.dummyTexture,u=!0)}),u&&n.push({material:l,values:h})}})});for(let s=0;s<this.shadowMaps.length;s++)this.renderer.setRenderTarget(this.shadowMaps[s]),this.renderer.clear(!0,!0,!0),this.renderer.render(e,this.shadowCameras[s]);this.renderer.setRenderTarget(t),n.forEach(({material:s,values:r})=>{const o=s.uniforms;Object.keys(r).forEach(a=>{o[a]&&(o[a].value=r[a])})})}getShadowUniforms(){const e={};for(let r=0;r<this.settings.cascades;r++){const o=this.shadowMaps[r];e[`shadowMap${r}`]={value:o.depthTexture??o.texture},e[`shadowMatrix${r}`]={value:new Ge().multiply(this.shadowCameras[r].projectionMatrix).multiply(this.shadowCameras[r].matrixWorldInverse)}}e.shadowCascades={value:this.settings.cascades},e.shadowDistances={value:this.cascadeDistances},e.shadowSoftness={value:this.settings.softness},e.shadowBias={value:this.settings.bias},e.shadowNormalBias={value:this.settings.normalBias},e.shadowIntensity={value:this.settings.enabled?this.settings.intensity:0},e.shadowResolution={value:this.settings.resolution},e.shadowBlendFraction={value:this.settings.shadowBlendFraction??.3},e.shadowBlendMin={value:this.settings.shadowBlendMin??10};const t=[0,1,2,3].map(r=>this.cascadeSizes[r]??(r===0?100:this.cascadeSizes[r-1]??100));e.shadowCascadeSize={value:t};const n=[0,1,2,3].map(r=>this.shadowCameras[r]?this.shadowCameras[r].near:.1),s=[0,1,2,3].map(r=>this.shadowCameras[r]?this.shadowCameras[r].far:this.settings.shadowDistance);return e.shadowCamNear={value:n},e.shadowCamFar={value:s},e}setSunDirection(e){this.sunDir.copy(e).normalize()}updateSettings(e){const t=this.settings.resolution,n=this.settings.cascades,s={...this.settings};this.settings={...this.settings,...e},t!==this.settings.resolution||n!==this.settings.cascades?(this.dispose(),this.initializeCascades()):s.shadowDistance!==this.settings.shadowDistance&&this.recomputeCascadeSplits(),this.shadowLight.shadow.mapSize.setScalar(this.settings.resolution),this.shadowLight.shadow.camera.far=this.settings.shadowDistance,this.shadowLight.castShadow=this.settings.enabled,this.renderer.shadowMap.enabled=this.settings.enabled,this.settings.enabled&&(this.renderer.shadowMap.needsUpdate=!0);for(let r=0;r<this.shadowCameras.length;r++)this.shadowCameras[r].far=this.settings.shadowDistance,this.shadowCameras[r].updateProjectionMatrix()}getSettings(){return{...this.settings}}setEnabled(e){this.settings.enabled=e,this.renderer.shadowMap.enabled=e,this.shadowLight.castShadow=e}dispose(){this.shadowMaps.forEach(e=>e.dispose()),this.shadowMaps=[],this.shadowCameras=[]}}class gv{sun;hemi;t=0;paused=!1;cycleSeconds=180;sunDir=new L(1,1,1).normalize();sunColor=new Ce(16777215);constructor(e,t={}){this.cycleSeconds=t.cycleSeconds??180,this.paused=!!t.paused,this.t=(t.initialTime??.25)%1,this.sun=new Tc(16777215,1),this.sun.castShadow=!1,e.add(this.sun),this.hemi=new Gu(2241348,1052688,.05),this.hemi.position.set(0,1,0),e.add(this.hemi),this.recomputeLighting()}update(e){if(!this.paused){const t=e/Math.max(.001,this.cycleSeconds);this.t=(this.t+t)%1,this.recomputeLighting()}}setTime(e){this.t=(e%1+1)%1,this.recomputeLighting()}pause(e){this.paused=e}setCycleSeconds(e){this.cycleSeconds=Math.max(1,e|0)}getTime(){return this.t}isPaused(){return this.paused}getSunDirection(e=new L){return e.copy(this.sunDir)}getSunColor(e=new Ce){return e.copy(this.sunColor)}getElevationRadians(){return Math.asin(Math.sin(this.t*Math.PI*2))}recomputeLighting(){const e=this.t*Math.PI*2,t=Math.PI*.25,n=new L(Math.cos(t),0,Math.sin(t)),s=new L(0,1,0);this.sunDir.copy(n).multiplyScalar(Math.cos(e)).addScaledVector(s,Math.sin(e)).normalize(),this.sun.position.copy(this.sunDir).multiplyScalar(500),this.sun.target.position.set(0,0,0),this.sun.target.updateMatrixWorld();const o=Math.sin(e),a=Pe.clamp(o,0,1);this.sunColor.copy(vv(a));const l=Pe.lerp(0,1.1,pr(0,.7,a));this.sun.intensity=l,this.sun.color.copy(this.sunColor);const c=1-pr(.05,.2,a);this.hemi.intensity=Pe.lerp(.05,.15,c),this.hemi.color.setRGB(.16,.2,.26),this.hemi.groundColor.setRGB(.05,.05,.06)}}function pr(i,e,t){const n=Pe.clamp((t-i)/Math.max(1e-5,e-i),0,1);return n*n*(3-2*n)}function vv(i){const e=new Ce(1,.58,.25),t=new Ce(1,.95,.9),n=new Ce(1,1,.98),s=pr(0,.25,i),r=pr(.25,.8,i),o=e.clone().lerp(t,s),a=t.clone().lerp(n,r);return o.lerp(a,r)}class yr extends Tt{constructor(){const e=yr.SkyShader,t=new wt({name:e.name,uniforms:gs.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Vt,depthWrite:!1});super(new Yn(1,1,1),t),this.isSky=!0}}yr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};class _v{sky;sun=new L;uniforms;constructor(e,t){const n=new yr;n.scale.setScalar(45e4),this.sky=n,e.add(n);const s=n.material;this.uniforms=s.uniforms,this.uniforms.sunIntensityScale={value:t?.sunIntensityScale??1},this.uniforms.sunDiscScale={value:t?.sunDiscScale??1};try{if(typeof s.vertexShader=="string"){const o=s.vertexShader,l=(o.includes("sunIntensityScale")?o:o.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunIntensityScale;`)).replace("vSunE = sunIntensity( dot( vSunDirection, up ) );","vSunE = sunIntensity( dot( vSunDirection, up ) ) * sunIntensityScale;");s.vertexShader=l}if(typeof s.fragmentShader=="string"){const o=s.fragmentShader,l=(o.includes("sunDiscScale")?o:o.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunDiscScale;`)).replace("L0 += ( vSunE * 19000.0 * Fex ) * sundisk;","L0 += ( vSunE * 19000.0 * Fex ) * sundisk * sunDiscScale;");s.fragmentShader=l}s.needsUpdate=!0}catch(o){console.warn("[SkyDome] Failed to patch Sky shader for sun scaling:",o)}const r={turbidity:t?.turbidity??2,rayleigh:t?.rayleigh??1.5,mieCoefficient:t?.mieCoefficient??.005,mieDirectionalG:t?.mieDirectionalG??.8};this.setParams(r),this.setSunDirection(new L(1,1,.2).normalize())}setParams(e){this.uniforms.turbidity.value=e.turbidity,this.uniforms.rayleigh.value=e.rayleigh,this.uniforms.mieCoefficient.value=e.mieCoefficient,this.uniforms.mieDirectionalG.value=e.mieDirectionalG,e.sunIntensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.sunIntensityScale),e.sunDiscScale!==void 0&&(this.uniforms.sunDiscScale.value=e.sunDiscScale)}setSunDirection(e){const t=new L().copy(e).normalize();this.sun.copy(t).multiplyScalar(4e5),this.uniforms.sunPosition.value.copy(this.sun)}setSunLuminance(e){e.intensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.intensityScale),e.discScale!==void 0&&(this.uniforms.sunDiscScale.value=e.discScale)}}class xv{mesh;material;start=performance.now();intensity;constructor(e,t={}){const n=t.radius??1e3;this.intensity=t.intensity??1;const s=new ma(n,32,16);s.scale(1,1,-1),this.material=new wt({side:Vt,transparent:!0,depthWrite:!1,depthTest:!1,blending:lr,uniforms:{uTime:{value:0},uVisibility:{value:0},uIntensity:{value:this.intensity}},vertexShader:`
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
      `}),this.mesh=new Tt(s,this.material),this.mesh.renderOrder=2,e.add(this.mesh)}setVisibility(e){this.material.uniforms.uVisibility.value=Pe.clamp(e,0,1)}setIntensity(e){this.intensity=e,this.material.uniforms.uIntensity.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}}class Mv{mesh;material;start=performance.now();wind;altitude;constructor(e,t={}){const n=t.altitude??200;this.altitude=n;const s=new xs(4e3,4e3,1,1);s.rotateX(-Math.PI/2),s.translate(0,n,0);const r=t.windDirection??Math.PI*.25,o=t.windSpeed??5;this.wind=new Ae(Math.cos(r),Math.sin(r)).multiplyScalar(o),this.material=new wt({transparent:!0,depthWrite:!1,side:on,uniforms:{uTime:{value:0},uCoverage:{value:t.coverage??.45},uDensity:{value:t.density??.65},uWind:{value:new Ae(this.wind.x,this.wind.y)},uDayLight:{value:1}},vertexShader:`
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
      `}),this.mesh=new Tt(s,this.material),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=1,e.add(this.mesh)}setCoverage(e){this.material.uniforms.uCoverage.value=e}setDensity(e){this.material.uniforms.uDensity.value=e}setWind(e,t){this.wind.set(Math.cos(e),Math.sin(e)).multiplyScalar(t),this.material.uniforms.uWind.value.copy(this.wind)}setEnabled(e){this.mesh.visible=e}setDayLight(e){this.material.uniforms.uDayLight.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}getCoverage(){return this.material.uniforms.uCoverage.value}getDensity(){return this.material.uniforms.uDensity.value}getAltitude(){return this.altitude}getWind(e=new Ae){return e.copy(this.wind)}}function Sv(i,e){if(i.renderer?.exposure!==void 0&&e.setRendererExposure(i.renderer.exposure),i.timeOfDay){const{t,paused:n,cycleSeconds:s}=i.timeOfDay;e.setTime(Pe.clamp(t,0,1)),e.setTimePaused(!!n),e.setCycleSeconds(Math.max(1,Math.floor(s)))}i.clouds&&e.setClouds&&e.setClouds(i.clouds)}const Bc=Math.sqrt(3),yv=.5*(Bc-1),is=(3-Bc)/6,zl=i=>Math.floor(i)|0,Ol=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function Vn(i=Math.random){const e=wv(i),t=new Float64Array(e).map(s=>Ol[s%12*2]),n=new Float64Array(e).map(s=>Ol[s%12*2+1]);return function(r,o){let a=0,l=0,c=0;const h=(r+o)*yv,u=zl(r+h),d=zl(o+h),p=(u+d)*is,v=u-p,g=d-p,m=r-v,f=o-g;let E,w;m>f?(E=1,w=0):(E=0,w=1);const x=m-E+is,b=f-w+is,A=m-1+2*is,C=f-1+2*is,D=u&255,M=d&255;let y=.5-m*m-f*f;if(y>=0){const F=D+e[M],O=t[F],X=n[F];y*=y,a=y*y*(O*m+X*f)}let R=.5-x*x-b*b;if(R>=0){const F=D+E+e[M+w],O=t[F],X=n[F];R*=R,l=R*R*(O*x+X*b)}let B=.5-A*A-C*C;if(B>=0){const F=D+1+e[M+1],O=t[F],X=n[F];B*=B,c=B*B*(O*A+X*C)}return 70*(a+l+c)}}function wv(i){const t=new Uint8Array(512);for(let n=0;n<512/2;n++)t[n]=n;for(let n=0;n<512/2-1;n++){const s=n+~~(i()*(256-n)),r=t[n];t[n]=t[s],t[s]=r}for(let n=256;n<512;n++)t[n]=t[n-256];return t}const ot=42,kl=3,Ev=.7,Vl=.02,bv=.15,Hl=.008,Tv=25,Gl=.02,Av=12,Wl=.08,Cv=2,Qs=.015,Xl=6,Yl=-.3,Rv=8,ql=.012;function Hn(i){let e=i>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function ao(i,e,t,n=4,s=2,r=.5){let o=1,a=0,l=0,c=e,h=t;for(let u=0;u<n;u++)a+=i(c,h)*o,l+=o,c*=s,h*=s,o*=r;return l>0?a/l:0}function Zl(i,e,t){const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)}function ri(i,e,t,n){const s=Hn(t^2654435769),r=Hn(t^2246822507),o=Hn(t^3266489909),a=Hn(t^668265263),l=Hn(t^2722868950),c=Hn(t^1003724304),h=Hn(t^439041101),u=Hn(t^1601842716),d=Vn(s),p=Vn(r),v=Vn(o),g=Vn(a),m=Vn(l),f=Vn(c),E=Vn(h),w=Vn(u),x=n||336/2,b=m(i*Qs,e*Qs)*Xl,A=f(i*Qs,e*Qs)*Xl,C=i+b,D=e+A,y=Math.sqrt(i*i+e*e)/x,R=d(i*Vl,e*Vl),B=Ev+R*bv;if(!(y<B)){const W=ao((Ze,ye)=>w(Ze*ql,ye*ql),i,e,3,2,.5),ie=Math.max(0,y-B),ne=Math.max(1e-6,1-B),Se=Math.min(1,ie/ne),Ee=Zl(0,1,Se),Fe=2,qe=Fe+(25-Fe)*Ee,P=W*3,tt=qe+P,be=ot-Math.floor(tt);return Math.max(kl+1,be)}const O=1-Zl(B*.6,B*.95,y),X=ot+O*20,K=ao((W,ie)=>p(W*Hl,ie*Hl),C,D,4,2,.6)*Tv*O,te=ao((W,ie)=>v(W*Gl,ie*Gl),C,D,3,2,.5)*Av*O,pe=g(C*Wl,D*Wl)*Cv,Ue=E(i*.01,e*.01),We=Ue<Yl?(Ue-Yl)*Rv*O:0,Ve=X+K+te+pe+We;return Math.floor(Math.max(kl+1,Ve))}function Dv(i,e=0,t=0,n){const s=[{x:e,z:t},{x:0,z:0},{x:10,z:10},{x:-10,z:-10},{x:20,z:0},{x:0,z:20}];let r={x:e,z:t,height:ot-10};for(const o of s){const a=ri(o.x,o.z,i,n);a>ot&&a>r.height&&(r={x:o.x,z:o.z,height:a})}if(r.height<=ot)for(const o of s){const a=ri(o.x,o.z,i,n);a>r.height&&(r={x:o.x,z:o.z,height:a})}return{x:r.x,y:r.height+15,z:r.z}}class zc extends wt{constructor(e){const t=new Ce(e.color??4891608),n=Math.max(.001,e.tileScale??1),s=!!e.useWorldUV,r=e.bounds??{minX:-1e9,maxX:1e9,minZ:-1e9,maxZ:1e9};super({transparent:!0,depthWrite:!1,depthTest:!0,side:on,uniforms:{uColor:{value:t},uTime:{value:0},uMap:{value:e.map??null},uUseMap:{value:!!e.map},uTileScale:{value:n},uUseWorldUV:{value:s},uInnerMinX:{value:r.minX},uInnerMaxX:{value:r.maxX},uInnerMinZ:{value:r.minZ},uInnerMaxZ:{value:r.maxZ},uEdgeStrength:{value:0},uEdgeWidth:{value:2},uAlpha:{value:1},uRefractStrength:{value:.18},uEta:{value:.75},uWaveAmp:{value:.15},uWaveScale:{value:.035},uFresnel:{value:.08},uDeTileEnabled:{value:!0},uDeTileStrength:{value:1.2},uDeTileStart:{value:60},uDeTileEnd:{value:160}},vertexShader:`
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
      `})}setTime(e){this.uniforms.uTime.value=e}setColor(e){this.uniforms.uColor.value.copy(e)}setMap(e){this.uniforms.uMap.value=e,this.uniforms.uUseMap.value=!!e}setTileScale(e){this.uniforms.uTileScale.value=Math.max(.001,e)}setUseWorldUV(e){this.uniforms.uUseWorldUV.value=!!e}setBounds(e){this.uniforms.uInnerMinX.value=e.minX,this.uniforms.uInnerMaxX.value=e.maxX,this.uniforms.uInnerMinZ.value=e.minZ,this.uniforms.uInnerMaxZ.value=e.maxZ}setEdge(e,t){this.uniforms.uEdgeStrength.value=Math.max(0,e),this.uniforms.uEdgeWidth.value=Math.max(.1,t)}setAlpha(e){const t=Math.max(0,Math.min(1,e));this.uniforms.uAlpha.value=t,this.depthWrite=t>=1}setRefraction(e,t=.75,n=.15,s=.035,r=.08){this.uniforms.uRefractStrength.value=Math.max(0,e),this.uniforms.uEta.value=Math.max(.01,Math.min(1,t)),this.uniforms.uWaveAmp.value=Math.max(0,n),this.uniforms.uWaveScale.value=Math.max(1e-4,s),this.uniforms.uFresnel.value=Math.max(0,r)}setDeTiling(e){e.enabled!==void 0&&(this.uniforms.uDeTileEnabled.value=!!e.enabled),e.strength!==void 0&&(this.uniforms.uDeTileStrength.value=Math.max(0,e.strength)),e.start!==void 0&&(this.uniforms.uDeTileStart.value=Math.max(0,e.start)),e.end!==void 0&&(this.uniforms.uDeTileEnd.value=Math.max(this.uniforms.uDeTileStart.value,e.end))}}class Pv{group;material;time=0;seabedMaterial=null;seabedGroup=null;blockMaterialSource=null;constructor(e,t){this.group=new bt,this.group.name="OceanHorizon",this.material=new zc({map:t.map??null,color:t.color,tileScale:t.tileScale??1,useWorldUV:!0,bounds:t.bounds}),this.material.setAlpha(.7),this.material.setRefraction(.18,.75,.12,.035,.06);const{minX:n,maxX:s,minZ:r,maxZ:o}=t.bounds,a=t.waterLevel+1-.001,l=0,c=Math.max(t.farDistance,1),h=[{x0:n,x1:s,z0:r-c,z1:r+l},{x0:n-c,x1:n+l,z0:r-c,z1:r+l},{x0:s-l,x1:s+c,z0:r-c,z1:r+l},{x0:n-c,x1:n+l,z0:r,z1:o},{x0:s-l,x1:s+c,z0:r,z1:o},{x0:n,x1:s,z0:o-l,z1:o+c},{x0:n-c,x1:n+l,z0:o-l,z1:o+c},{x0:s-l,x1:s+c,z0:o-l,z1:o+c}];for(const u of h){const d=new Tt(this.makeQuad(u.x0,u.z0,u.x1,u.z1,a),this.material);d.frustumCulled=!0,d.renderOrder=2,this.group.add(d)}e.add(this.group),t.enableSeabed&&(this.blockMaterialSource=t.blockMaterialSource??null,this.buildSeabed(e,t))}makeQuad(e,t,n,s,r){const o=new Float32Array([e,r,t,n,r,t,n,r,s,e,r,t,n,r,s,e,r,s]),a=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),l=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),c=new Yt;return c.setAttribute("position",new ht(o,3)),c.setAttribute("uv",new ht(a,2)),c.setAttribute("normal",new ht(l,3)),c.computeBoundingBox(),c.computeBoundingSphere(),c}setColor(e){this.material.setColor(e)}setMap(e,t=1){this.material.setMap(e),this.material.setTileScale(t)}update(e){this.time+=e,this.material.setTime(this.time),this.seabedMaterial&&this.blockMaterialSource&&this.syncSeabedUniforms(this.blockMaterialSource)}dispose(e){e.remove(this.group),this.group.traverse(t=>{const n=t.material;n&&(Array.isArray(n)?n:[n]).forEach(o=>o.dispose()),t.geometry?.dispose()}),this.seabedGroup&&(e.remove(this.seabedGroup),this.seabedGroup.traverse(t=>{const n=t.material;n&&(Array.isArray(n)?n:[n]).forEach(o=>o.dispose()),t.geometry?.dispose()}))}async buildSeabed(e,t){const n=await this.loadSandTexture();if(n.wrapS=ci,n.wrapT=ci,n.colorSpace=yt,n.magFilter=Je,n.minFilter=oc,n.generateMipmaps=!0,n.needsUpdate=!0,this.seabedMaterial=new Nc(n,null),this.seabedMaterial.setMaterialProperties(.8,0,.3),this.blockMaterialSource){const E=this.blockMaterialSource,w=this.seabedMaterial,x=E.uniforms.envMap?.value;E.defines&&E.defines.USE_ENVMAP&&x&&(w.defines={...w.defines||{},USE_ENVMAP:!0},w.uniforms.envMap.value=x,w.needsUpdate=!0),this.syncSeabedUniforms(this.blockMaterialSource)}const{minX:s,maxX:r,minZ:o,maxZ:a}=t.bounds,l=t.seed??12345,c=t.worldRadius??Math.max(r-s,a-o)/2,h=Math.max(t.farDistance,1),u=this.sampleEdgeSeabedHeight({bounds:t.bounds,seed:l,worldRadius:c});this.seabedGroup=new bt,this.seabedGroup.name="SeabedHorizon";const d=[{x0:s,x1:r,z0:o-h,z1:o},{x0:s-h,x1:s,z0:o-h,z1:o},{x0:r,x1:r+h,z0:o-h,z1:o},{x0:s-h,x1:s,z0:o,z1:a},{x0:r,x1:r+h,z0:o,z1:a},{x0:s,x1:r,z0:a,z1:a+h},{x0:s-h,x1:s,z0:a,z1:a+h},{x0:r,x1:r+h,z0:a,z1:a+h}],p=Math.max(Math.max(Math.abs(s),Math.abs(r)),Math.max(Math.abs(o),Math.abs(a))),v=Math.max(ue.x,ue.z),g=p+v*6,m=g+v*15,f=t.waterLevel+1-.001;for(const E of d){const w=this.makeSteppedQuadWorldUV(E.x0,E.z0,E.x1,E.z1,u,g,m,f),x=new Tt(w,this.seabedMaterial);x.frustumCulled=!0,x.renderOrder=0,this.seabedGroup.add(x)}e.add(this.seabedGroup)}makeSteppedQuadWorldUV(e,t,n,s,r,o,a,l){const c=Math.abs(n-e),h=Math.abs(s-t),u=Math.max(8,Math.min(ue.x,ue.z))/2,d=Math.max(2,Math.min(64,Math.ceil(c/u))),p=Math.max(2,Math.min(64,Math.ceil(h/u))),v=(d+1)*(p+1),g=new Float32Array(v*3),m=new Float32Array(v*2),f=new Float32Array(v*3),E=(B,F)=>Math.sqrt(B*B+F*F);let w=0,x=0,b=0;for(let B=0;B<=p;B++){const F=B/p,O=t+(s-t)*F;for(let X=0;X<=d;X++){const G=X/d,K=e+(n-e)*G,k=E(K,O),te=Pe.clamp((k-o)/Math.max(.001,a-o),0,1),oe=te*te*(3-2*te),pe=Pe.lerp(r,l-.05,oe);g[w++]=K,g[w++]=pe,g[w++]=O,m[x++]=K,m[x++]=-O,f[b++]=0,f[b++]=1,f[b++]=0}}const A=d*p*6,C=new Uint32Array(A);let D=0;for(let B=0;B<p;B++)for(let F=0;F<d;F++){const O=B*(d+1)+F,X=O+1,G=O+(d+1),K=G+1;C[D++]=O,C[D++]=G,C[D++]=X,C[D++]=X,C[D++]=G,C[D++]=K}const M=new Yt;M.setAttribute("position",new ht(g,3)),M.setAttribute("uv",new ht(m,2)),M.setAttribute("normal",new ht(f,3));const y=new Float32Array(v*3),R=.7;for(let B=0;B<y.length;B++)y[B]=R;return M.setAttribute("color",new ht(y,3)),M.setIndex(new ht(C,1)),M.computeBoundingBox(),M.computeBoundingSphere(),M}sampleEdgeSeabedHeight(e){const{minX:t,maxX:n,minZ:s,maxZ:r}=e.bounds,{seed:o,worldRadius:a}=e,l=Math.max(4,Math.floor(Math.min(ue.x,ue.z)/2)),c=[],h=Math.max(1,Math.floor(Math.min(ue.x,ue.z)/8));for(let d=t;d<=n;d+=l){const p=ri(d,s-h,o,a);c.push(p)}for(let d=t;d<=n;d+=l){const p=ri(d,r+h,o,a);c.push(p)}for(let d=s;d<=r;d+=l){const p=ri(t-h,d,o,a);c.push(p)}for(let d=s;d<=r;d+=l){const p=ri(n+h,d,o,a);c.push(p)}let u;if(c.length){c.sort((p,v)=>p-v);const d=Math.max(0,Math.min(c.length-1,Math.floor(c.length*.25)));u=c[d]}else u=ri(n+h,s-h,o,a);return u-.001}loadSandTexture(){return new Promise((e,t)=>{new Ms().load(Ic,n=>e(n),void 0,t)})}syncSeabedUniforms(e){if(!this.seabedMaterial)return;const t=this.seabedMaterial,n=e.uniforms,s=t.uniforms,r=["sunDirection","sunColor","dayLight","starLight","shadowMap0","shadowMap1","shadowMap2","shadowMap3","shadowMatrix0","shadowMatrix1","shadowMatrix2","shadowMatrix3","shadowCascades","shadowDistances","shadowSoftness","shadowBias","shadowNormalBias","shadowIntensity","shadowResolution","shadowBlendFraction","shadowBlendMin","shadowCascadeSize","shadowCamNear","shadowCamFar","cloudShadowEnabled","cloudShadowIntensity","cloudShadowAltitude","cloudShadowScale","cloudCoverage","cloudDensity","cloudWind","time","materialFogEnabled"];for(const o of r)n[o]&&s[o]&&(s[o].value=n[o].value)}}class Lv{canvas;camera;isPointerLocked=!1;mouseSensitivity=.002;onPointerLockChangedCallback=null;yawRadians=0;pitchRadians=0;onPointerLockChangeRef;onMouseMoveRef;onKeyDownRef;onKeyUpRef;onMouseDownRef;onMouseUpRef;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;sprint=!1;jumpQueued=!1;jumpHeld=!1;leftClickQueued=!1;rightClickQueued=!1;leftMouseHeld=!1;numSlotQueued=null;pauseToggleQueued=!1;constructor(e,t){this.canvas=e,this.camera=t,this.camera.rotation.order="YXZ",this.onPointerLockChangeRef=this.onPointerLockChange.bind(this),this.onMouseMoveRef=this.onMouseMove.bind(this),this.onKeyDownRef=this.onKeyDown.bind(this),this.onKeyUpRef=this.onKeyUp.bind(this),this.onMouseDownRef=this.onMouseDown.bind(this),this.onMouseUpRef=this.onMouseUp.bind(this),document.addEventListener("pointerlockchange",this.onPointerLockChangeRef),window.addEventListener("mousemove",this.onMouseMoveRef),window.addEventListener("keydown",this.onKeyDownRef),window.addEventListener("keyup",this.onKeyUpRef),window.addEventListener("mousedown",this.onMouseDownRef),window.addEventListener("mouseup",this.onMouseUpRef)}update(){const e=Pe.degToRad(89);this.pitchRadians>e&&(this.pitchRadians=e),this.pitchRadians<-e&&(this.pitchRadians=-e),this.yawRadians=Pe.euclideanModulo(this.yawRadians+Math.PI,Math.PI*2)-Math.PI,this.camera.rotation.y=this.yawRadians,this.camera.rotation.x=this.pitchRadians}getOrientation(){return{yaw:this.yawRadians,pitch:this.pitchRadians}}destroy(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeRef),window.removeEventListener("mousemove",this.onMouseMoveRef),window.removeEventListener("keydown",this.onKeyDownRef),window.removeEventListener("keyup",this.onKeyUpRef),window.removeEventListener("mousedown",this.onMouseDownRef),window.removeEventListener("mouseup",this.onMouseUpRef)}onPointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.canvas,this.isPointerLocked||(this.leftMouseHeld=!1),this.onPointerLockChangedCallback&&this.onPointerLockChangedCallback(this.isPointerLocked)}onMouseMove(e){if(!this.isPointerLocked)return;const t=e.movementX||0,n=e.movementY||0;this.yawRadians-=t*this.mouseSensitivity,this.pitchRadians-=n*this.mouseSensitivity}onPointerLockChanged(e){this.onPointerLockChangedCallback=e}requestPointerLock(){this.canvas&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()}exitPointerLock(){if(document.exitPointerLock)try{document.exitPointerLock()}catch{}}onMouseDown(e){this.isPointerLocked&&(e.button===0?(this.leftMouseHeld=!0,this.leftClickQueued=!0):e.button===2&&(this.rightClickQueued=!0))}onMouseUp(e){e.button===0&&(this.leftMouseHeld=!1)}onKeyDown(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.sprint=!0;break;case"Space":this.jumpQueued=!0,this.jumpHeld=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":this.numSlotQueued=parseInt(e.code.slice(-1),10)-1;break;case"KeyP":this.pauseToggleQueued=!0;break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break;case"Space":this.jumpHeld=!1;break}}getMoveInput(){let e=0,t=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveLeft&&(e-=1),this.moveRight&&(e+=1);const n=Math.hypot(e,t);return n>0&&(e/=n,t/=n),{x:e,z:t}}isSprinting(){return this.sprint}isJumpHeld(){return this.jumpHeld}consumeJumpRequested(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeLeftClick(){return this.leftClickQueued?(this.leftClickQueued=!1,!0):!1}peekLeftClick(){return this.leftClickQueued}isLeftHeld(){return this.leftMouseHeld}consumeRightClick(){return this.rightClickQueued?(this.rightClickQueued=!1,!0):!1}peekRightClick(){return this.rightClickQueued}consumeSelectedSlot(){const e=this.numSlotQueued;return this.numSlotQueued=null,e}consumePauseToggle(){return this.pauseToggleQueued?(this.pauseToggleQueued=!1,!0):!1}}class fn{camera;world;input;static ENABLE_LAND_STEP_ASSIST=!1;velocityY=0;grounded=!1;swimVelocity=new L;underwater=!1;stepCooldown=0;emergeLiftRemaining=0;emergeNudgeDir=new L;renderYOffsetY=0;elevationTween={from:0,elapsed:0,duration:0,active:!1};width=Qe.width;height=Qe.height;halfWidth=this.width/2;eyeHeight=Math.min(Qe.height*.9,Qe.height-.1);waterId=nn("water")??5;walkSpeed=Qe.speed.walk;sprintSpeed=Qe.speed.sprint;gravity=Qe.gravity;jumpImpulse=Qe.jump;static EPS=1e-5;bounds=null;constructor(e,t,n,s){this.camera=e,this.world=t,this.input=n,s&&(this.bounds=s),this.camera.rotation.order="YXZ"}update(e){this.renderYOffsetY!==0&&(this.camera.position.y-=this.renderYOffsetY,this.renderYOffsetY=0),this.stepCooldown>0&&(this.stepCooldown=Math.max(0,this.stepCooldown-e));const t=this.underwater,n=this.isHeadInsideWater(),s=this.isHeadInFloodedAir(),r=this.isBaseSubmerged(),o=ot+1-.001,a=this.camera.position.y+(this.height-this.eyeHeight),l=.3;if(this.underwater?a>o+l&&(this.underwater=!1):(n||s||r)&&a<o-l&&(this.underwater=!0),this.underwater){t||(this.velocityY=0,this.grounded=!1),this.updateUnderwater(e),this.applyElevationTween(e);return}if(t){this.velocityY=Math.max(this.velocityY,this.swimVelocity.y);const k=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(k>.5){const te=Math.min(2,k*.6),oe=new L(this.swimVelocity.x,0,this.swimVelocity.z).normalize();this.camera.position.add(oe.multiplyScalar(te*e))}this.swimVelocity.set(0,0,0)}this.input.consumeJumpRequested()&&this.grounded&&(this.velocityY=this.jumpImpulse,this.grounded=!1);const h=this.input.getMoveInput(),u=this.input.isSprinting()?this.sprintSpeed:this.walkSpeed,d=this.camera.rotation.y,p=-Math.sin(d),v=-Math.cos(d),g=Math.cos(d),m=-Math.sin(d),f=g*h.x+p*h.z,E=m*h.x+v*h.z,w=Math.hypot(f,E),x=w>0?f/w:0,b=w>0?E/w:0,A=x*u*e,C=b*u*e;this.velocityY+=this.gravity*e;const D=this.velocityY*e;this.resolveAxis("x",A),this.resolveAxis("z",C);const M=this.resolveAxis("y",D);D<0&&M?(this.grounded=!0,this.velocityY=0):D!==0&&(this.grounded=!1);const y=this.getBaseY();if(y<0){const k=-y;this.camera.position.y+=k,this.velocityY=0,this.grounded=!0}const R=this.camera.position,B=this.getBaseY(),F=B+this.height,O=R.x-this.halfWidth,X=R.x+this.halfWidth,G=R.z-this.halfWidth,K=R.z+this.halfWidth;if(this.aabbIntersectsSolid(O,B,G,X,F,K)){let k=Math.floor(F)+1,te=0;const oe=10;for(;te<oe;){const pe=k-this.height,Ue=k;if(!this.aabbIntersectsSolid(O,pe,G,X,Ue,K)){this.camera.position.y=k-this.height+this.eyeHeight,this.velocityY=0,this.grounded=!0;break}k++,te++}}this.applyElevationTween(e)}updateUnderwater(e){const t=Qe.swim,n=this.input.getMoveInput(),s=this.input.isSprinting()?t.sprintMultiplier:1,r=new L;this.camera.getWorldDirection(r),r.normalize();const o=new L(0,1,0),a=new L().crossVectors(r,o).normalize(),l=new L().addScaledVector(a,n.x).addScaledVector(r,n.z);l.lengthSq()>0&&l.normalize();const c=t.accel*s;if(l.lengthSq()>0&&this.swimVelocity.addScaledVector(l,c*e),this.input.isJumpHeld()){this.swimVelocity.y+=t.verticalAccel*e*s;const Ve=ot+1-.001-this.camera.position.y;Ve>0&&(this.swimVelocity.y+=t.surfaceSnapStrength*Ve*e)}const h=this.gravity*t.gravityScale;this.swimVelocity.y+=h*e;const d=ot+1-.001-this.camera.position.y;d>0&&d<t.floatBand&&this.swimVelocity.y<0&&(this.swimVelocity.y+=t.floatStrength*d*e);const p=Math.hypot(n.x,n.z);!this.input.isJumpHeld()&&p<.01&&(this.swimVelocity.y-=Math.max(0,Qe.swim.sinkBias)*e);const v=Math.max(0,Math.min(10,t.drag)),g=Math.max(0,1-v*e);this.swimVelocity.multiplyScalar(g);const m=t.maxSpeed*s,f=new L(this.swimVelocity.x,0,this.swimVelocity.z),E=f.length();if(E>m&&(f.multiplyScalar(m/E),this.swimVelocity.x=f.x,this.swimVelocity.z=f.z),this.swimVelocity.y=Pe.clamp(this.swimVelocity.y,-m,m),this.emergeLiftRemaining>0){const We=Math.min(t.emergeLiftSpeed*e,this.emergeLiftRemaining),Ve=this.camera.position.y;this.resolveAxis("y",We);const W=this.camera.position.y-Ve;this.emergeLiftRemaining-=Math.max(0,W);const ie=t.emergeNudgeSpeed*e;(this.emergeNudgeDir.x!==0||this.emergeNudgeDir.z!==0)&&(this.resolveAxis("x",this.emergeNudgeDir.x*ie),this.resolveAxis("z",this.emergeNudgeDir.z*ie)),this.emergeLiftRemaining<=0&&(this.emergeLiftRemaining=0,this.emergeNudgeDir.set(0,0,0))}const w=this.swimVelocity.x*e,x=this.swimVelocity.y*e,b=this.swimVelocity.z*e,A=this.resolveAxis("x",w);A&&(this.swimVelocity.x=0);const C=this.resolveAxis("z",b);C&&(this.swimVelocity.z=0);const D=this.getBaseY(),M=ot+1-.001,y=M-this.camera.position.y<Qe.swim.floatBand+.75,R=this.hasSolidGroundBelow(),B=l.lengthSq()>1e-6,F=Math.abs(M-this.camera.position.y)<.5;if(this.emergeLiftRemaining<=0&&this.stepCooldown<=0&&(B||this.input.isJumpHeld())&&(A||C||R||F)&&(y||this.input.isJumpHeld())){const We=Math.max(0,M-D),Ve=Math.max(0,M+Qe.swim.stepOutHeadroom-D),W=Math.min(Qe.swim.maxEmergeStepOut,Math.max(.25,Ve)),ie=Math.min(Qe.swim.maxEmergeStepOut,Math.max(.25,We)),ne=[W,ie,1.25,1,.75,.5,.25];let Se=0;for(const Ee of ne)if(this.canStepUpEmerge(Ee,l)){Se=Ee;break}Se>0&&(this.emergeLiftRemaining=Se,this.emergeNudgeDir.copy(l),this.startElevationTween(Se),this.stepCooldown=.15)}this.resolveAxis("y",x)&&(this.swimVelocity.y=0),this.grounded=!1;const X=this.getBaseY();if(X<0){const We=-X;this.camera.position.y+=We,this.swimVelocity.y=Math.max(0,this.swimVelocity.y)}const G=this.camera.position,K=this.getBaseY(),k=K+this.height,te=G.x-this.halfWidth,oe=G.x+this.halfWidth,pe=G.z-this.halfWidth,Ue=G.z+this.halfWidth;if(this.aabbIntersectsSolid(te,K,pe,oe,k,Ue)){let We=Math.floor(k)+1,Ve=0;const W=10;for(;Ve<W;){const ie=We-this.height,ne=We;if(!this.aabbIntersectsSolid(te,ie,pe,oe,ne,Ue)){this.camera.position.y=We-this.height+this.eyeHeight,this.swimVelocity.y=0;break}We++,Ve++}}}resolveAxis(e,t){if(t===0)return!1;const n=this.camera.position,s=e==="x"?n.x+t:n.x,r=e==="y"?n.y+t:n.y,o=e==="z"?n.z+t:n.z,a=s-this.halfWidth,l=s+this.halfWidth,c=this.getBaseY(r),h=c+this.height,u=o-this.halfWidth,d=o+this.halfWidth;if(this.bounds&&(e==="x"||e==="z")){const v=this.halfWidth+fn.EPS;if(e==="x"){const g=this.bounds.minX+v,m=this.bounds.maxX-v;if(s<g)return this.camera.position.x=g,!0;if(s>m)return this.camera.position.x=m,!0}else if(e==="z"){const g=this.bounds.minZ+v,m=this.bounds.maxZ-v;if(o<g)return this.camera.position.z=g,!0;if(o>m)return this.camera.position.z=m,!0}}if(!this.aabbIntersectsSolid(a,c,u,l,h,d))return n.set(s,r,o),!1;const p=Math.sign(t);switch(e){case"x":{if(p>0){const g=Math.floor(l)-this.halfWidth-fn.EPS;n.x=g}else{const g=Math.floor(a)+1+this.halfWidth+fn.EPS;n.x=g}return!0}case"z":{if(p>0){const g=Math.floor(d)-this.halfWidth-fn.EPS;n.z=g}else{const g=Math.floor(u)+1+this.halfWidth+fn.EPS;n.z=g}return!0}case"y":{if(p>0){const g=Math.floor(h)-this.height-fn.EPS;n.y=g+this.eyeHeight}else{const g=Math.floor(c)+1+fn.EPS;n.y=g+this.eyeHeight}return!0}}}getBaseY(e=this.camera.position.y){return e-this.eyeHeight}startElevationTween(e,t=.12){this.elevationTween.from=-e,this.elevationTween.elapsed=0,this.elevationTween.duration=Math.max(.06,t),this.elevationTween.active=!0}applyElevationTween(e){if(!this.elevationTween.active)return;this.elevationTween.elapsed+=e;const t=Math.min(1,this.elevationTween.elapsed/this.elevationTween.duration),s=(o=>1-Math.pow(1-o,3))(t),r=this.elevationTween.from*(1-s);this.renderYOffsetY=r,this.camera.position.y+=this.renderYOffsetY,t>=1&&(this.elevationTween.active=!1,this.renderYOffsetY=0)}isHeadInsideWater(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=ot+1)return!1;const n=Math.floor(t),s=Math.min(.18,this.halfWidth*.9),r=[[0,0],[s,0],[-s,0],[0,s],[0,-s]];for(const[o,a]of r){const l=Math.floor(e.x+o),c=Math.floor(e.z+a);if(this.world.getBlock(l,n,c)===this.waterId)return!0}return!1}isHeadInFloodedAir(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=ot+1)return!1;const n=Math.floor(t),s=Math.min(.18,this.halfWidth*.9),r=[[0,0],[s,0],[-s,0],[0,s],[0,-s]];for(const[o,a]of r){const l=Math.floor(e.x+o),c=Math.floor(e.z+a);if(this.world.isAirFlooded(l,n,c))return!0}return!1}isBaseSubmerged(){const e=this.camera.position,t=this.getBaseY(e.y)+.001,n=Math.floor(t);if(n>ot)return!1;const s=Math.min(.18,this.halfWidth*.9),r=[[0,0],[s,0],[-s,0],[0,s],[0,-s]];for(const[o,a]of r){const l=Math.floor(e.x+o),c=Math.floor(e.z+a);if(this.world.isAirFlooded(l,n,c)||this.world.getBlock(l,n,c)===this.waterId)return!0}return!1}aabbIntersectsSolid(e,t,n,s,r,o){const a=Math.floor(e),l=Math.floor(t),c=Math.floor(n),h=Math.floor(s),u=Math.floor(r),d=Math.floor(o);for(let p=l;p<=u;p++)for(let v=c;v<=d;v++)for(let g=a;g<=h;g++)if(this.world.isBlockSolid(g,p,v))return!0;return!1}hasSolidGroundBelow(e=.01){const t=this.camera.position,n=this.halfWidth,s=this.getBaseY(t.y)-e,r=Math.floor(s),o=Math.floor(t.x-n),a=Math.floor(t.x+n),l=Math.floor(t.z-n),c=Math.floor(t.z+n);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++)if(this.world.isBlockSolid(u,r,h))return!0;return!1}tryStepUp(e,t){if(e<=0)return!1;const n=this.camera.position,s=n.y+e,r=.08,o=t&&t.lengthSq()>1e-6?n.x+t.x*r:n.x,a=t&&t.lengthSq()>1e-6?n.z+t.z*r:n.z,l=fn.EPS*4,c=o-this.halfWidth+l,h=o+this.halfWidth-l,u=a-this.halfWidth+l,d=a+this.halfWidth-l,p=this.getBaseY(s)+l,v=p+this.height-l;if(this.aabbIntersectsSolid(c,p,u,h,v,d))return!1;const g=Math.floor(p-.01);let m=!1;for(let f=Math.floor(u);f<=Math.floor(d);f++){for(let E=Math.floor(c);E<=Math.floor(h);E++)if(this.world.isBlockSolid(E,g,f)){m=!0;break}if(m)break}return m?(this.camera.position.y=s,!0):!1}canStepUpEmerge(e,t){if(e<=0)return!1;const n=this.camera.position,s=n.y+e,r=.08,o=!!t&&t.lengthSq()>1e-6,a=o?n.x+t.x*r:n.x,l=o?n.z+t.z*r:n.z,c=fn.EPS*4,h=a-this.halfWidth+c,u=a+this.halfWidth-c,d=l-this.halfWidth+c,p=l+this.halfWidth-c,v=this.getBaseY(s)+c,g=v+this.height-c;if(this.aabbIntersectsSolid(h,v,d,u,g,p))return!1;const m=Math.floor(v-.01);let f=!1;for(let x=Math.floor(d);x<=Math.floor(p);x++){for(let b=Math.floor(h);b<=Math.floor(u);b++)if(this.world.isBlockSolid(b,m,x)){f=!0;break}if(f)break}if(f)return!0;const E=[];o?E.push(t.clone().setY(0).normalize()):E.push(new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1));const w=.5;for(const x of E){const b=a+x.x*w,A=l+x.z*w,C=Math.floor(b-this.halfWidth+c),D=Math.floor(b+this.halfWidth-c),M=Math.floor(A-this.halfWidth+c),y=Math.floor(A+this.halfWidth-c);for(let R=m;R>=m-1;R--)for(let B=M;B<=y;B++)for(let F=C;F<=D;F++)if(this.world.isBlockSolid(F,R,B))return!0}return!1}tryStepUpMulti(e,t){for(const n of e)if(this.tryStepUp(n,t))return t.x!==0&&this.resolveAxis("x",t.x*.08),t.z!==0&&this.resolveAxis("z",t.z*.08),n;return 0}isGrounded(){return this.grounded}setBounds(e){this.bounds=e}}function Iv(i,e,t){const n=Math.hypot(i,e,t);return n===0?{x:0,y:0,z:0}:{x:i/n,y:e/n,z:t/n}}function lo(i){return Math.floor(i)}function Uv(i,e,t,n=tc.reach){const s=Iv(t.x,t.y,t.z);if(s.x===0&&s.y===0&&s.z===0)return{hit:!1};let r=lo(e.x),o=lo(e.y),a=lo(e.z);const l=s.x>0?1:-1,c=s.y>0?1:-1,h=s.z>0?1:-1,u=r+(l>0?1:0),d=o+(c>0?1:0),p=a+(h>0?1:0),v=s.x!==0?(u-e.x)/s.x:Number.POSITIVE_INFINITY,g=s.y!==0?(d-e.y)/s.y:Number.POSITIVE_INFINITY,m=s.z!==0?(p-e.z)/s.z:Number.POSITIVE_INFINITY,f=s.x!==0?1/Math.abs(s.x):Number.POSITIVE_INFINITY,E=s.y!==0?1/Math.abs(s.y):Number.POSITIVE_INFINITY,w=s.z!==0?1/Math.abs(s.z):Number.POSITIVE_INFINITY;let x=v,b=g,A=m,C=0,D=r,M=o,y=a;const R=Math.ceil(n*3+10);for(let B=0;B<R&&(x<b?x<A?(D=r,M=o,y=a,r+=l,C=x,x+=f):(D=r,M=o,y=a,a+=h,C=A,A+=w):b<A?(D=r,M=o,y=a,o+=c,C=b,b+=E):(D=r,M=o,y=a,a+=h,C=A,A+=w),!(C>n));B++){const F=i.getBlock(r,o,a),O=fr(F);if(!!O&&(i.isBlockSolid(r,o,a)||O.name==="grass_tuft"))return{hit:!0,hitCell:{x:r,y:o,z:a},placeCell:{x:D,y:M,z:y},t:C}}return{hit:!1}}class Nv{camera;world;scene;bounds=null;reach=tc.reach;selection={hit:!1};boxMesh=null;constructor(e,t,n,s){this.camera=e,this.world=t,this.scene=n,s&&(this.bounds=s),this.boxMesh=this.createWireBox(),this.boxMesh.visible=!1,this.scene.add(this.boxMesh)}update(){const e=new L(0,0,-1).applyEuler(this.camera.rotation).normalize(),t=this.camera.position,n=Uv(this.world,t,e,this.reach);let s=n.hit,r=n.hitCell,o=n.placeCell;if(this.bounds&&n.hit&&n.hitCell){const{minX:a,maxX:l,minZ:c,maxZ:h}=this.bounds;n.hitCell.x>=a&&n.hitCell.x<l&&n.hitCell.z>=c&&n.hitCell.z<h||(s=!1,r=void 0,o=void 0)}this.selection={hit:s,hitCell:r,placeCell:o},this.updateDebugMesh()}getSelection(){return this.selection}destroy(){this.boxMesh&&(this.scene.remove(this.boxMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.boxMesh=null)}updateDebugMesh(){if(!this.boxMesh)return;if(!this.selection.hit||!this.selection.hitCell){this.boxMesh.visible=!1;return}const{x:e,y:t,z:n}=this.selection.hitCell;this.boxMesh.visible=!0,this.boxMesh.position.set(e+.5,t+.5,n+.5)}createWireBox(){const e=new Bu(new Yn(1.0001,1.0001,1.0001)),t=new bc({color:16776960}),n=new Fu(e,t);return n.renderOrder=9999,n}}class Fv{camera;world;input;selection;pipeline;playerController;airId=0;waterId=nn("water")??5;grassId=nn("grass")??1;dirtId=nn("dirt")??2;stoneId=nn("stone")??3;sandId=nn("sand")??4;woodId=nn("wood")??6;leavesId=nn("leaves")??7;leavesMapleId=nn("leaves_maple")??8;grassTuftId=nn("grass_tuft")??9;currentHit=null;nextActionAllowedAt=0;lastSwingStartAt=0;constructor(e,t,n,s,r,o){this.camera=e,this.world=t,this.input=n,this.selection=s,this.pipeline=r,this.playerController=o??null}update(){const e=(typeof performance<"u"?performance.now():Date.now())/1e3;{const t=this.input.consumeLeftClick(),n=this.input.isLeftHeld?.()??!1;if(t||n){if(!(window.__isBodySwingActive?.()??!1)&&(this.lastSwingStartAt===0||e-this.lastSwingStartAt>=ar)){window.__bodyPrimary?.(),this.lastSwingStartAt=e;const o=this.selection.getSelection();if(o.hit&&o.hitCell){const{x:a,y:l,z:c}=o.hitCell,h=this.world.getBlock(a,l,c);if(h!==this.airId){this.currentHit&&this.currentHit.x===a&&this.currentHit.y===l&&this.currentHit.z===c&&this.currentHit.id===h?this.currentHit.count+=1:this.currentHit={x:a,y:l,z:c,id:h,count:1};const u=this.getRequiredStrikes(h);if(this.currentHit.count>=u){const d=this.world.isBlockSolid(a,l,c);d&&window.__sfxBreak?.(),this.world.setBlock(a,l,c,this.airId),d&&this.shouldFillWithWater(a,l,c)&&this.world.setBlock(a,l,c,this.waterId),this.propagateSurfaceWaterFromConnection(a,l,c),Zc(h,1),this.remeshAffectedChunks(a,l,c),this.currentHit=null}}}}}else this.lastSwingStartAt=0}if(this.input.consumeRightClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+ar;const t=this.selection.getSelection();if(t.hit&&t.placeCell){const{x:n,y:s,z:r}=t.placeCell,o=Ca(),a=this.evaluatePlacement(n,s,r,o??void 0);if(a.canPlace){const l=Ca();l!==null&&Kc()&&(a.elevatePlayer&&(this.camera.position.y+=1,this.playerController?.startElevationTween(1)),this.world.setBlock(n,s,r,l),this.remeshAffectedChunks(n,s,r),window.__sfxPlace?.())}}}}getRequiredStrikes(e){return e===this.leavesId||e===this.leavesMapleId||e===this.grassId||e===this.grassTuftId?1:e===this.dirtId||e===this.sandId?2:e===this.stoneId||e===this.woodId?3:1}shouldFillWithWater(e,t,n){if(t!==ot)return!1;const s=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(const[r,o]of s)if(this.world.getBlock(e+r,t,n+o)===this.waterId)return!0;return!1}propagateSurfaceWaterFromConnection(e,t,n){if(t>ot+1)return;const s=ot,r=this.airId,o=this.waterId,a=64,l=e-a,c=e+a,h=n-a,u=n+a,d=(b,A,C)=>`${b},${A},${C}`,p=[],v=new Set,g=[],m=new Set;let f=!1;const E=(b,A,C)=>{if(A<0||A>s||b<l||b>c||C<h||C>u)return;const D=d(b,A,C);v.has(D)||this.world.isBlockSolid(b,A,C)||(v.add(D),p.push({x:b,y:A,z:C}))};E(e,Math.min(t,s),n),E(e+1,Math.min(t,s),n),E(e-1,Math.min(t,s),n),E(e,Math.min(t,s),n+1),E(e,Math.min(t,s),n-1),E(e,Math.min(t+1,s),n),E(e,Math.max(t-1,0),n);const w=12e4;for(;p.length>0&&v.size<=w;){const b=p.shift(),A=this.world.getBlock(b.x,b.y,b.z);A===o?f=!0:A===r&&(g.push(b),m.add(`${b.x},${b.z}`)),E(b.x+1,b.y,b.z),E(b.x-1,b.y,b.z),E(b.x,b.y,b.z+1),E(b.x,b.y,b.z-1),E(b.x,b.y+1,b.z),E(b.x,b.y-1,b.z)}if(!f)return;g.length>0&&this.world.addFloodedAir(g);const x=[];for(const b of m){const[A,C]=b.split(","),D=parseInt(A,10),M=parseInt(C,10);if(D<l||D>c||M<h||M>u)continue;this.world.getBlock(D,s,M)===r&&(this.world.setBlock(D,s,M,o),x.push({x:D,y:s,z:M}))}if(x.length>0){const b=new Set;for(const A of x){const{cx:C,cy:D,cz:M}=ls(A.x,A.y,A.z);b.add(`${C},${D},${M}`)}for(const A of b){const[C,D,M]=A.split(",").map(R=>parseInt(R,10)),y=this.world.getChunk(C,D,M);y&&this.pipeline.requestRemesh(C,D,M,y.getData())}}}remeshAffectedChunks(e,t,n){const{cx:s,cy:r,cz:o,lx:a,ly:l,lz:c}=ls(e,t,n),h=this.world.getChunk(s,r,o);h&&this.pipeline.requestRemesh(s,r,o,h.getData());const u=[];a===0&&u.push([s-1,r,o]),a===ue.x-1&&u.push([s+1,r,o]),l===0&&u.push([s,r-1,o]),l===ue.y-1&&u.push([s,r+1,o]),c===0&&u.push([s,r,o-1]),c===ue.z-1&&u.push([s,r,o+1]);for(const[d,p,v]of u){const g=this.world.getChunk(d,p,v);g&&this.pipeline.requestRemesh(d,p,v,g.getData())}}evaluatePlacement(e,t,n,s){if(this.world.getBlock(e,t,n)!==this.airId)return{canPlace:!1,elevatePlayer:!1};if(s===this.grassTuftId)return this.world.getBlock(e,t-1,n)!==this.grassId?{canPlace:!1,elevatePlayer:!1}:{canPlace:!0,elevatePlayer:!1};if(s!==void 0&&this.world.getBlock(e,t-1,n)===this.grassTuftId){const O=!!fr(s)?.solid,X=s===this.grassId;if(O||X)return{canPlace:!1,elevatePlayer:!1}}const r=Qe.width/2,o=Math.min(Qe.height*.9,Qe.height-.1),a=this.camera.position,l=a.x-r,c=a.x+r,h=a.y-o,u=h+Qe.height,d=a.z-r,p=a.z+r,v=e,g=e+1,m=t,f=t+1,E=n,w=n+1,x=1e-5;if(c<=v+x||l>=g-x||u<=m+x||h>=f-x||p<=E+x||d>=w-x)return{canPlace:!0,elevatePlayer:!1};const A=h,C=Math.floor(A),D=t===C,M=e+.5,y=n+.5,R=M>l+x&&M<c-x&&y>d+x&&y<p-x;if(D&&R){const F=A+1,O=F+Qe.height;if(!this.aabbIntersectsSolid(l,F,d,c,O,p))return{canPlace:!0,elevatePlayer:!0}}return{canPlace:!1,elevatePlayer:!1}}aabbIntersectsSolid(e,t,n,s,r,o){const a=Math.floor(e),l=Math.floor(t),c=Math.floor(n),h=Math.floor(s),u=Math.floor(r),d=Math.floor(o);for(let p=l;p<=u;p++)for(let v=c;v<=d;v++)for(let g=a;g<=h;g++)if(this.world.isBlockSolid(g,p,v))return!0;return!1}}const Bv="/assets/grass_leaves-C9h5dzo8.png";class zv extends wt{constructor(e){super({vertexShader:`
      // Instanced billboard vertex shader
      // Applies per-instance transform and passes world/view data for lighting
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      void main(){
        vUv = uv;
        // Instance transforms in GrassBillboardSystem are translation-only, so normalMatrix is sufficient
        vNormal = normalize(normalMatrix * normal);
        // Apply per-instance transform so each tuft appears at its world cell
        vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vec4 viewPos = viewMatrix * worldPos;
        vViewPos = viewPos.xyz;
        gl_Position = projectionMatrix * viewPos;
      }
    `,fragmentShader:`
      // Grass billboard fragment shader
      // Lighting matches BlockMaterial style (ambient/day-night + sun diffuse), with alpha cutout
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      uniform sampler2D map;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform float dayLight;  // 0..1
      uniform float starLight; // 0..1 small boost at night
      uniform float alphaCutoff;

      // Optional projected cloud shadow (kept simple; no time dependency)
      uniform bool cloudShadowEnabled;
      uniform float cloudShadowIntensity; // 0..1
      uniform float cloudShadowAltitude;  // world Y of cloud plane
      uniform float cloudShadowScale;     // world units per cloud tile
      uniform float cloudCoverage;
      uniform float cloudDensity;
      uniform vec2 cloudWind;

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
      float cloudAmountAt(vec3 worldPos, vec3 sunDir){
        if (sunDir.y <= 0.05) return 0.0;
        float t = (cloudShadowAltitude - worldPos.y) / max(sunDir.y, 1e-3);
        if (t <= 0.0) return 0.0;
        vec3 hit = worldPos + sunDir * t;
        vec2 uv = hit.xz / max(1.0, cloudShadowScale);
        uv += cloudWind * 0.0; // static projection for now
        float base = cfbm(uv * 0.5) * 0.9 + cfbm(uv * 1.7) * 0.1;
        float clouds = smoothstep(cloudCoverage, cloudCoverage + 0.25*(1.0-cloudDensity), base);
        clouds = pow(clouds, 1.5);
        return clamp(clouds, 0.0, 1.0);
      }

      void main(){
        vec4 tex = texture2D(map, vUv);
        if (tex.a < alphaCutoff) discard;
        vec3 N = normalize(vNormal);
        vec3 L = normalize(sunDirection);
        float NdotL = max(dot(N, L), 0.0);

        // Ambient + day/night modulation (mirrors BlockMaterial tuning)
        vec3 dayAmb = vec3(0.4, 0.5, 0.6) * 0.20;
        vec3 nightAmb = vec3(0.01, 0.015, 0.02) * 0.12;
        vec3 ambBase = mix(nightAmb, dayAmb, clamp(dayLight, 0.0, 1.0));
        vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35 * clamp(starLight, 0.0, 1.0);
        vec3 ambient = ambBase + starAmb;

        // Cloud-projected shadow factor
        float shade = 1.0;
        if (cloudShadowEnabled && cloudShadowIntensity > 0.0) {
          float camt = cloudAmountAt(vWorldPos, L);
          float cloudShade = 1.0 - cloudShadowIntensity * camt;
          shade *= cloudShade;
        }

        vec3 diffuse = sunColor * NdotL * shade * clamp(dayLight, 0.0, 1.0);

        // Subtle fresnel rim to keep thin blades readable against dark backgrounds
        vec3 V = normalize(-vViewPos);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.0);
        vec3 rim = vec3(0.8, 0.9, 1.0) * fresnel * 0.12 * clamp(dayLight, 0.0, 1.0);

        vec3 color = tex.rgb * (ambient + diffuse + rim);
        // Tone map + gamma to match blocks
        color = color / (color + vec3(1.0));
        color = pow(color, vec3(1.0/2.2));
        // Cutout writes opaque color (no blending); alpha unused when transparent=false
        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!1,depthWrite:!0,side:on,uniforms:{map:{value:e},sunDirection:{value:new L(0,1,0)},sunColor:{value:new Ce(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.15},cloudShadowEnabled:{value:!1},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new Ae(3.5355,3.5355)}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setSun(e,t){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t)}setDayNight(e,t){this.uniforms.dayLight.value=Pe.clamp(e,0,1),this.uniforms.starLight.value=Pe.clamp(t,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=Pe.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=Pe.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=Pe.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=Pe.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}}class Ov{scene;material;geometry;groups=new Map;grassTuftId;constructor(e,t,n){this.scene=e,this.grassTuftId=n;const s=document.createElement("canvas");s.width=1,s.height=1;const r=s.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,1,1);const o=new pa(s);o.colorSpace=yt,o.magFilter=Je,o.minFilter=Je,this.material=new zv(o);const a=new Ms().load(Bv);a.flipY=!1,a.colorSpace=yt,a.magFilter=Je,a.minFilter=Je,this.material.setMap(a),this.geometry=this.buildXBillboardGeometry(.92,.9),t.on("CHUNK_ADDED",({key:l,chunk:c,coords:h})=>{this.rebuildForChunk(l,c.getData().voxels,h.cx,h.cy,h.cz)}),t.on("CHUNK_REMOVED",({key:l})=>this.removeChunk(l)),t.on("BLOCK_CHANGED",({chunkKey:l})=>{const c=t.getChunkByKey(l);if(!c){this.removeChunk(l);return}this.rebuildForChunk(l,c.getData().voxels,...l.split(",").map(h=>parseInt(h,10)))})}destroy(){for(const e of Array.from(this.groups.keys()))this.removeChunk(e);this.geometry.dispose();try{this.material.uniforms.map?.value?.dispose?.()}catch{}this.material.dispose()}removeChunk(e){const t=this.groups.get(e);t&&(this.scene.remove(t),t.traverse(n=>{n instanceof nl&&(n.geometry.dispose(),n.material.dispose?.())}),this.groups.delete(e))}rebuildForChunk(e,t,n,s,r){this.removeChunk(e);const o=[];for(let h=0;h<ue.y;h++)for(let u=0;u<ue.z;u++)for(let d=0;d<ue.x;d++){const p=h*ue.x*ue.z+u*ue.x+d;t[p]===this.grassTuftId&&o.push({lx:d,ly:h,lz:u})}if(!o.length)return;const a=new nl(this.geometry,this.material,o.length);a.castShadow=!1,a.receiveShadow=!1,a.renderOrder=1;const l=new Ge;for(let h=0;h<o.length;h++){const u=o[h];l.makeTranslation(u.lx,u.ly,u.lz),a.setMatrixAt(h,l)}a.instanceMatrix.needsUpdate=!0;const c=new bt;c.add(a),c.position.set(n*ue.x,s*ue.y,r*ue.z),this.scene.add(c),this.groups.set(e,c)}buildXBillboardGeometry(e,t){const n=e/2,s=t,r=[],o=[],a=[],l=0;r.push(.5-n,0,.5,.5+n,0,.5,.5+n,s,.5,.5-n,s,.5),o.push(0,1,1,1,1,0,0,0),a.push(l+0,l+1,l+2,l+0,l+2,l+3);const c=4;r.push(.5,0,.5-n,.5,0,.5+n,.5,s,.5+n,.5,s,.5-n),o.push(0,1,1,1,1,0,0,0),a.push(c+0,c+1,c+2,c+0,c+2,c+3);const h=new Yt;h.setAttribute("position",new It(r,3)),h.setAttribute("uv",new It(o,2));const u=new Float32Array(24);return u.fill(1),h.setAttribute("color",new It(u,3)),h.setIndex(a),h.computeVertexNormals(),h}setSunUniforms(e,t){this.material.setSun(e,t)}setDayNight(e,t){this.material.setDayNight(e,t)}updateShadowUniforms(){}setCloudShadowUniforms(e){this.material.setCloudShadowUniforms(e)}}const co="/assets/footstep-Fr-5_nTT.mp3",Kl="/assets/water_step-MaHXgPx_.mp3",jl="/assets/underwater-Cqai0VTA.mp3",$l="/assets/block-C1XDNMNZ.mp3",Ql="/assets/ocean-B93ceUEo.mp3";function Jl(i,e){const t=new Audio(i);return t.loop=!0,t.volume=e,t.preload="auto",t}class ec{src;desired=!1;current=null;vol=1;constructor(e,t){this.src=e,this.vol=t}setVolume(e){this.vol=Math.max(0,Math.min(1,e)),this.current&&(this.current.volume=this.vol)}setDesired(e){const t=this.desired;this.desired=e,e&&!t&&this.ensurePlaying()}ensurePlaying(){if(!this.desired||this.current&&!this.current.paused&&!this.current.ended)return;const e=new Audio(this.src);e.preload="auto",e.loop=!1,e.volume=this.vol,e.onended=()=>{this.current=null,this.desired&&this.ensurePlaying()},this.current=e,e.play().catch(()=>{})}tick(){this.desired&&this.ensurePlaying()}stopImmediate(){if(this.desired=!1,this.current){try{this.current.pause()}catch{}this.current=null}}}class kv{world;camera;input;player;lastX;lastY;lastZ;lastGrounded=!1;sfxVolume=.7;footLoop=new ec(co,this.sfxVolume);waterLoop=new ec(Kl,this.sfxVolume);underLoop=Jl(jl,this.sfxVolume*.8);oceanLoop=Jl(Ql,this.sfxVolume*.6);oceanSampleTimer=0;oceanProximity=0;oceanVolCurrent=0;waterId=nn("water")??5;constructor(e,t,n,s){this.world=e,this.camera=t,this.input=n,this.player=s,this.lastX=t.position.x,this.lastY=t.position.y,this.lastZ=t.position.z}setVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxVolume=t,this.footLoop.setVolume(t),this.waterLoop.setVolume(t),this.underLoop.volume=Math.max(0,Math.min(1,t*.8)),this.oceanLoop.volume=Math.max(0,Math.min(1,t*.6))}getVolume(){return this.sfxVolume}primedOnce=!1;tryUnlockOnUserGesture(){if(this.primedOnce)return;this.primedOnce=!0;const e=t=>{try{const n=new Audio(t);n.preload="auto",n.muted=!0,n.play().then(()=>{n.pause(),n.currentTime=0,n.muted=!1}).catch(()=>{})}catch{}};e(co),e(Kl),e(jl),e(Ql)}setLoopPlaying(e,t){t?e.paused&&e.play().catch(()=>{}):e.paused||e.pause()}playOneShot(e,t){try{const n=new Audio(e);n.volume=Math.max(0,Math.min(1,t)),n.play().catch(()=>{})}catch{}}playBreak(){this.playOneShot($l,this.sfxVolume)}playPlace(){this.playOneShot($l,this.sfxVolume)}update(e,t,n){if(t||!n){this.footLoop.setDesired(!1),this.waterLoop.setDesired(!1),this.setLoopPlaying(this.underLoop,!1),this.setLoopPlaying(this.oceanLoop,!1),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=this.player.isGrounded();return}const s=this.camera.position.x-this.lastX,r=this.camera.position.z-this.lastZ,o=this.camera.position.y-this.lastY,a=e>0?Math.hypot(s,r)/e:0,l=this.player.isGrounded(),c=this.isTouchingWaterSurface(),h=this.isEyesInWater()||this.isEyesInFloodedAir(),u=this.input.getMoveInput?.()||{x:0,z:0},d=Math.hypot(u.x,u.z)>.05,p=l&&(a>.2||d);h?(this.setLoopPlaying(this.underLoop,!0),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)):c&&(a>.1||d)?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!0),this.footLoop.setDesired(!1)):p?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!0)):(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)),this.footLoop.tick(),this.waterLoop.tick(),this.setLoopPlaying(this.oceanLoop,!0),this.updateOceanVolume(e,h),!this.lastGrounded&&l&&o<-.02&&!h&&!c&&this.playOneShot(co,this.sfxVolume),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=l}updateOceanVolume(e,t){this.oceanSampleTimer-=e,this.oceanSampleTimer<=0&&(this.oceanSampleTimer=.25,this.oceanProximity=this.sampleOceanProximity());let s=Math.max(0,Math.min(1,this.sfxVolume*.6))*this.oceanProximity;t&&(s*=.35);const r=1-Math.pow(.001,e);this.oceanVolCurrent+=(s-this.oceanVolCurrent)*r,this.oceanLoop.volume=Math.max(0,Math.min(1,this.oceanVolCurrent))}sampleOceanProximity(){const e=this.camera.position.x,t=this.camera.position.z,n=5,s=120,r=2,o=24,a=60,l=2,c=.7;let h=s;for(let v=0;v<o;v++){const g=v/o*Math.PI*2,m=Math.cos(g),f=Math.sin(g);let E=null;for(let C=r;C<=s;C+=r){const D=Math.floor(e+m*C),M=Math.floor(t+f*C);if(this.world.getBlock(D,ot,M)===n){E=C;break}}if(E===null)continue;let w=0,x=0;for(let C=E;C<=Math.min(E+a,s);C+=l){const D=Math.floor(e+m*C),M=Math.floor(t+f*C),y=this.world.getBlock(D,ot,M);w++,y===n&&x++}(w>0?x/w:0)>=c&&E<h&&(h=E)}const d=1-Math.min(1,h/80);return Math.max(.05,d)}isTouchingWaterSurface(){const e=Math.min(Qe.height*.9,Qe.height-.1),t=Qe.width/2,n=this.camera.position.y-e,s=this.camera.position.x-t,r=this.camera.position.x+t,o=this.camera.position.z-t,a=this.camera.position.z+t,l=n;if(n+Qe.height<=ot||l>=ot+1)return!1;const h=Math.floor(s),u=Math.floor(r),d=Math.floor(o),p=Math.floor(a);for(let v=d;v<=p;v++)for(let g=h;g<=u;g++)if(this.world.getBlock(g,ot,v)===this.waterId)return!0;return!1}isEyesInWater(){const e=Math.min(Qe.height*.9,Qe.height-.1),t=this.camera.position.y+(Qe.height-e);if(t>=ot+1)return!1;const n=Math.floor(t),s=Qe.width/2,r=Math.min(.18,s*.9),o=this.camera.position.x,a=this.camera.position.z,l=[[0,0],[r,0],[-r,0],[0,r],[0,-r]];for(const[c,h]of l){const u=Math.floor(o+c),d=Math.floor(a+h);if(this.world.getBlock(u,ot,d)===this.waterId){let p=!1;for(let v=Math.floor(t);v<ot;v++)if(this.world.isBlockSolid(u,v,d)){p=!0;break}if(!p)return!0}if(this.world.getBlock(u,n,d)===this.waterId)return!0}return!1}isEyesInFloodedAir(){const e=Math.min(Qe.height*.9,Qe.height-.1),t=this.camera.position.y+(Qe.height-e);if(t>=ot+1)return!1;const n=Math.floor(t),s=Qe.width/2,r=Math.min(.18,s*.9),o=this.camera.position.x,a=this.camera.position.z,l=[[0,0],[r,0],[-r,0],[0,r],[0,-r]];for(const[c,h]of l){const u=Math.floor(o+c),d=Math.floor(a+h);if(this.world.isAirFlooded(u,n,d))return!0}return!1}dispose(){try{this.footLoop.stopImmediate()}catch{}try{this.waterLoop.stopImmediate()}catch{}try{this.underLoop.pause()}catch{}try{this.oceanLoop.pause()}catch{}}}const Vv="/assets/arm-BGtqJ4AM.png",Hv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAJsElEQVR42m1ZO681RxGs7pmd2esPYyyMLcggICRBIvGvJyYhIbNkWciWJSQkQOLuPJtgtub0fuZKV/dxzs70o7q6uo98/fsvLcaAOQ3nmWFzoo+BI0bADKKCOSbmHACA88wYfeBIB1qtmHMCIjjigdYb5jSEECCiqK0ipwwDMOZEqxUaAgDBGB0hREQA+OPvvoAACEEx50TOCWKA2QSA9TeAMTrmmBABckpQFfTeMadBQ4BqQG0VvQ8YABFFjBG9D0AF11WQUsJ1FUAEf/nmH1ARwXEct9UCEUG9PZtz4jgOtNbA9x3HAZF1sZnhV7/4FDFGqCqu60KM8fE954SZQURwnifmnAghwMygqssAEcGcE2MMqC6raVStFd/++C+UUlBKQe8dqgoAK/wAVBVmhvM8UWtFCAHffP/PbWSMEQBwXdcdsYmU0jJCRGBmALANoYcAkFJ6/GSkjuNAjBHXdaG1BgCotSKlBBHZl/KcMQbO80TOeZ9lZlAfYj5sZvtBM4OZodaKnDNCCNt7GptSQq0VqrqfZ6gZxTknruvaxpgtsCovGGPsA1X1gQn+j6+HEDDGQGsNKSWUUpBzxhgDtVaUUrbhvfcdbjrLVJsZYq11W0OvRSJEFWOMfeG6PG4PFhixDyulLNQfEWYNOWf03iEiGGMgpbSqRRW9Xy9Dcs77EiITAFprOI7jATIaGGPEGANjjG3ceZ77WX4xigQef1fVHWUlUnlYjBEiskElImit7dfMDKWUXV6llNu7+UgbnWEpb9CpIqW0jVUzQ0oJKaUdMjNDznnXMfPbWnNpkl3bzD2/WFWquvNOR/laKWWlYM6J3jtKKYgxota6/+bXnHOngSU259xlSCMZNe/xGANMc2sNvI9coz40Poz8SZB5HmBNs+753lLKZsrW2naCZJRSWpfeGFBVRFq7MPCq4+M4UGt54CHnjFYbUjocshcWain7YkD2ZSzvCYOI3kYJ+p02ZZ3mnKF36YUQcF0Xcs7IOaOUghDC9ogVQBzQGOadZOW5hd8hhB01VV0p6L2DfOBpk+XjGZEI5sVEOcvLg42VQ1x549lzlGAiUHj4dV07It568gHLlZiIMW6vWmu7P/B8smEIYZf1nBOROV4eyA0OgUL2wQwv3zfnvNOiUH3b/x9jwmB32/23IyZB6x29M1WyKySyWQiAt7fzDisw+4Cq7BSsEBqCrgYTQwBgWwPU1lZUVDYnsCmJEPV2V0pCv51TCgciljTLcDNC7HqbQm9eYNmRG9jSCcg5J2qtmwM8WfXeoWwKZMFaK7xRPIAPMXfseAQV23MpBed53tLrepAScUDRspmQYGID8iCiIZRdRP95ng9qZbQYSdI5ldJxHPt3tvAb9LrDzH7Ay3goBQvD6wUIL6GHrbVHOXop5rvqeZ7rnqcOkB0yeurruta688n3+nAyYv+PytniaRQN3UxIycQIeCXjNQGjw0PZ4xkptmj/fxpEXiBBlVIQidQ1dJwbrYuYsAG5umXYPWMRFDDUdjMzw60ZXh10EVNHiAGt9dtIAJR6vNx7TTSXR4N5IpnVQM8YJa8LWGHee5bsFi3szwz9dV1bzfr+ztDTM1IsMUNHvHYgN1Co+mcpZpT8zzKhnmfuYoybu+k1+wMP5rPeiJSSE6+v2cOXdSllVYFvICSXj3UAZRfzStTzYIoVvsZ2ziqhIZ4VQwgvIvp4MmK7pH7rvW+S8jn0mp8GsgSv69rcwFJnaokr9T3Ah5wl6fnfh9h7xLRwnqQOpGwjE7I0H7KMl/uwUOOzIrzA5MO8hOnxjYbVwMgwpXSS71fV1Q2ZT9ImmY7/JwBJ2733PfN5cDFdXrwyLcy9H9lLKQsDXm77rseLvCpiiZEjOLzwO+f8CDGxQYx5otsp4IW0nAbRW2+YLyWPfpJOKeXRvlkF/Ps8zye/UGiM3jGGPXQf8+k5f/SBlI67Sg4AtismhAiDIYSI3v+DEMKNEY7qcWvNefOGUhHzIj7kU8O6ptanMYyOfx/PYei9ZmC0PcCVrMSw8nDWN9mRFxBY/lC+Rsaste5lhE8vp2i2eQALA16GUzh4McqqoJEsU6aLcyVzS4deolQe/cWvAiK9YDfcvXvaRjwfmHMCBswJhPu1lDLkv/WVDthjj7Sm4IlhEzmfj6FFRKBepXp15HPJ0LKO2Rn9xox0Pud8jONMMUPvmxcARA4dDCGZq7aOnNMG2EJ6vnHQke6d4U7dGEgpY9TxaGaL9QyK1/Liui7gxk1kX1+5YkcTYNqjgawoKFTUTb0DH9KJ41iTD0nJC5yViohh8yFIcKda2dNZVkTwx9qAVeEXV34K9nrCd1cv0/k/r7pjSgm//PQNMQYIsLwHkNOtePXAV59/uEexJTKCKgCDGAAYvvz8A97fLxyffbJA9rMTX3z2CUKImGYoRaAh3guNjFIrRBZ2oojgz3/7/ma3gNYq4DxRFeBeXAuAIyXMMWA2YdyoqK4DRTDHuPM7MeZAjMfeL4x7ThQBam1obUD90oG9mlOP7wce4WRJhtFvzqiu2Dn9Xphkxao6jmOtaP76Y4PIQGv9J3LLN6LXMmrt+/1+qfeBEC6ngt8frdsvwwFD7wN/+u1na03nt2IEDOvXMxfXNNd1bUnmQUcwfqycGT1f0lRLkURExHLep0G7aTiNaIYHFb/CPH8yRdFBRoF7BqAjhA/LgGVp2CKDS6c9w9+XkW5b6w+eZyo4XZMliRcawl3SOhuvdswX/JRMCUXlwtBRSPiJ2dMxBQkN+XiNy2cZYfWSi+szho/87QdNMhw1P3NL5PNDCWKH7MgLvaMPWe4HDC6imDtqOz9HMu9+G0Yw8zKfHj/Ck0FjjK9VLa3mVsyrZTPbO2Higt5T0lOE+g9APh7LeTaxM8ZA5OVfffWb7aXf/VKesRJoEHPJwcV/cMEIEXDESwgB7+/vyDnju+++XZXFZvTDD3+/afJV08z3/ohtzwUDgG2wLtwAIq9UEFOllMdCY503oeoWlWs31HAcaQ+o3BFz3CI/+I/svChdWLANRNI20/JaiAcACtV7w+q1PcHovxlWEswSJC/twIs8EdFr5t9/1OM/sEjp56sdz1mXaBhzW8lDqJK8J0sL6E8+CzKbe+dM2iUO+LXOlb1dUwKMrMXJhVXBhSS9oHT3xELeyDnjuq6NC/70W3emz80I+pDQvpX6T7eI7I8/E/Qc4ZnTb159qvwAFEJYmvAPv04I4ROYTYzeARHEEBA0Q4NijtUrVheMeDvfcJULgrcVEVWMPmAwzGkQSWsMKxeCBrTeAQlQEej90f51vWPOif8BXntl5vWwkLIAAAAASUVORK5CYII=",Gv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAKz0lEQVR42mVZS8ttRxFdXf3a93qjiUZ8EDQgRCQoghMRB/4CHfhX/A3+HKeOBAdOFBwIiolKiKIhRiEm0Xt2P6rbQe/Vp07ywcf9zrl7967HqlWrartXf/CTqWMihIAxJlrvSPmAg0NtDc4JQghoXRFjwhgDY06EENF1IIQALw6qHdo7nHOYcyB4QSkFMQZo7xhzIMWAVitSirjdbsAcCKqKl1//IVQHJhwAh5QPqA7ACeYEnPcQ8XCy/h0TyPlAqQ0hBMyhEHGo5YSIwxwK7wWjd8w5MIdiDEUMHrUWBC9Q7Xj3dz9DAIB2eToBeO9Ra0VKeRsUc4bqQNcVBYGDqsI5h9YaxGEZ6Bz449y6htHwXnDensO5+/957yHerxudcziOA2MMxBjRe1/hHgPneUJVAQC9d4gIxhgAABGBiKDWuh8+50TvHd57hBCgqvt+AFBVpJQQY4TwISIrZznn7cGcEzFGxBjhvUfOGSGEbYRzDjFGjDG2EzyPjvULFwBwHMd2oveOOSek976AdN1Qa4X3fh/aWsOccxtUStkGeO+3N/x7zgnv/cN1NmohhB0lVV0RmHPuKDjn8OHffwuRhX56r6poreE4DuScd8h5v6ruCDEajGSMEe//9TfovV/4SjtSgRerKpx4xJhwXrmqteL9N3+OlBK6Dsy5vo8pYQxAx1jGlAIRQHu/UqLw4i4jJ774zR/tnIfgUct6QkoJwXu/Do0ROiZqrRuA+XiCL3/7x2iqePaFb+DDd9/AkydPUeqqGvEBc04ELwAmHCZUO8QB8TOv4vz3n1Br2QBkCulJa21FwHu/cxeCoISA4zigY2CMiQngv/98Ay+98i0ADuPff0ZrC1yrChzGUNRa8cIXv4E5Ov733hsYFyZUdadKRJBiwu32fKWAeaq1IUSHEPy+SceEiL/4QfDBO78H4PDk5a/DffQ3TDjcPngH8enLmHPgM196HR+9+4eLaBQpRjgH9FY3GGOMaK0i57yiR7DMOdFaQ+/3el18oPAhXNZ7jDFR//MW8udeg3MO5aN38eIrrwMD+N97f9z3sv7t+SEElFLg5Q7S4JzDeZ7I+cCYQIwJTQQALl44MMyhgEPrivHh2xhzkcrtX3/B7fYc4oAxFEMXBZOK3RXl1hq898Acmx9k0bDbZcWSZPngomcSUK0VMUbMObdX8wIVK4qYYhRzziDfsNTJlMLDcs4brXJFgGkh7ZKMWmuboGgwH8rQighSSpuALJfQcFVdTEj6pZf85Q8bFBmNaOYh/MwHWeNqrWit7cjxup2CpQPuHnrvt/UME1mOTJdz3nT9+dd+sCPGvpBSQkppe+q9358BIOd8p+bWGlQVvSvEB4jcPVgcH1BawxgTYwIp5cubBCeC99/6FSS/hBgDHJYYUe3ovSFc0SLZkf3KedvdV2yY6UlK6TKqP+SM19jQ2vKyZ9nmxHbsnFtleBlUa4UQKGyTTAfZS1UhsoglxohaK5xzYOqsluDDiQn+Eqhs72xY3nsIPbAEwjzGGPfB/J55ZGnSG4KOWGKntPhgNChYlpoyHBBj/ARvsxpKKRCR3Z4ZhVrrfnApBbXWnR6eTeNVdd9Dp+Q8zwfxwV7NPPNBzN+i6769SCntfNJLhpd6ghigUMk5I6W0ypBlMcbAcRyrRV4WW0bjz3EcD7RKUqIcs/xAIFv9SKwRlGKRz4tJEjTgXpJ3gBGQZFHLinTCKirvPUh6pOVa66JiADjPcx9Cwiml7AjYXNqH5JwfHsiK4AOJIVYTVTcjLETwcRw7f1b/icgOMVXMx5sQyYZlpqrbeJ5p2ZZOqCpEVR80PfFgS4bU2Vrbddxa2/nMOaOU8tD7WSk0MqW0I8TUHMexytBKZpYhATbGQK31oX4ta77wle+h1rpTsXu+AR1TyPLkWed5rsmIOWKpWKIJWw3J7mb8DADP//HrT2h/kpB1jmcSc2TQcAfFhFwdbo9aTuCcXGGP6KrwnuF3CHH1jKmKlCKGAsDcqcJmzrlTq9qRU8Tt9nxFqfe+pxgi1tY+80mckKwsVxADJCk7nJKueT/ZkXwiBIgFX855g8V7j/M8Hz4zjzFGlFJWLq/GY427T95uh5/nsOzFqhR2PTsZPyrkvrGSUtqeML/Mvf1MY3g2cUHyko9byjDRKH53nueD1mOel6LOW2ySQ5g+em8ZlobsdkxqJLot6i3j2bF8jLEbC8mJkSILMuS11gdhaqMstMjyPy3kA6mWCRzqBV7DiJC8aAA5hc6QgMg3IYQ1mCxP+31gvATK0vGLr2kod0nOrf1ANZgo5w1zDpTeNg7O84Yjp71pmXMAc+z9QrAlt74MOC8vvaz+7by/RrSrs4WIOZeBbDznebvo16O3NcZRxJBR4zUrtloATDYo2fTKocOmwq5i6BUbzXmeu+7p0db7F1MympbamZLe+2pG7ExbNl+kYsuTyCYWCNzPfu37+9pSysP1thT3VuxymOcJw2jr3ALM4sIaS7S/9+YvHzZflgEJbkaA91qhIwxL732j3A4RJA07K7KbMcc0zDYcSjy2YGuUnR2Cldnr4NU6n1w5ts0n5wPOCZz4BUInaGPgiBG9t21I8Ncq79INMfht6JwT2BWlqxfwPwk45orjNCNB0UGjx7WkIqlY7Udio1ImX9ho7NGMYeEhdlPKsLNJWcpmXu389/FR3FIyRQ/7TyllUTE7FNupldFbOFweUe/ZMdvOBlY32uZmpy/b6rciYp/nDXam42cqY05BRLLdBdFLC1waa7cvpZTVuvlw4L7PvV1EMq8oMCUko5WOhDFhIgVgBsw59oLSi0B19Y3/XobGGFHO255DxFpMgFlFTGvZ1xkBO99RuFJD2unXhp7Y4MwhIgsDRCkHDuadlHocx57/z/PcILLreuLAagaGnVVjN+fE1wMyFh7uq3biAFcFdB3wXq6DBHBjXzPnRG8r9CmGtS/2HudZMcddCZEX9nBqa97qAltajI4NKw/89Fe/+7BZoUF2u8JRjzRsX14E3tBaw5hYnl0hWo3FI4aw9IJb7XoBK+MsFR+88wYcJsZQSFhEVM7bkuIxApi7uT1NCcDEwH39F5inlBJa172S995jmK32mhtkG7reiF0T81CMsRZUnBvXy6uVzuBXZa1per09I2uKpU9quPTy6zsFbKt2eOWozs1prXXnl3/b2eA8T3z6le9sbmB0W2sIvXekF1/da7pDPFLKKLXDh4AnKaP1gXwcSGO9HQMcIB4hAKWsck3BI/a2lE6v8CLorSA4oNUKL2vjfsyBWk4E7SzZgLd/8dNVHm69pqMWXC8xM4ZOdNXrJQVnyWUUAJTzvN4ZDOSUFh6cw+18Di+CGAJqLZcsWy8vvffw8claVJLr+0USSzgMhGsLgumQckZrdjK+o5zvAO4vJxTjGvUdgH49Y6mtE9Gs+HY3ZLey7ZZqhjKNDYvLK7vAtC+rCOze+x5orBS3Y79wpdJa20OmpVD7YpPaj1uQj29D7J7B6kkaQ4MtkIOlzyU4ZJOM50vGtt6aOCebqCi7lgLy68WEW6XXe0fmwnoM6KW6V185d9ccGI/bcg6adofDctwy2hCXleK8zo50dihlFCwlA1hlGPOzJTan4MmzT6HUBjjB8amMUiqcCBQeT194tvr4caCUiuECJDqEdBXQnJhuvTmXQA1RIFEQjgztDdGtN2wyBoZ2/B9d45SmA25b6wAAAABJRU5ErkJggg==",Wv="/assets/swing-D4rIVQxu.mp3";class Xv extends wt{constructor(e){super({vertexShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      void main(){
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        vec4 worldPos = modelMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vec4 viewPos = viewMatrix * worldPos;
        vViewPos = viewPos.xyz;
        gl_Position = projectionMatrix * viewPos;
      }
    `,fragmentShader:`
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      uniform sampler2D map;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform float dayLight;  // 0..1
      uniform float starLight; // 0..1
      uniform float alphaCutoff;

      void main(){
        vec4 tex = texture2D(map, vUv);
        if (tex.a < alphaCutoff) discard;

        vec3 N = normalize(vNormal);
        vec3 L = normalize(sunDirection);
        float NdotL = max(dot(N, L), 0.0);

        // Ambient day/night similar to BlockMaterial (simplified)
        vec3 dayAmb = vec3(0.4, 0.5, 0.6) * 0.20;
        vec3 nightAmb = vec3(0.01, 0.015, 0.02) * 0.12;
        vec3 ambBase = mix(nightAmb, dayAmb, clamp(dayLight, 0.0, 1.0));
        vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35 * clamp(starLight, 0.0, 1.0);
        vec3 ambient = ambBase + starAmb;

        vec3 diffuse = sunColor * NdotL * clamp(dayLight, 0.0, 1.0);

        // Subtle rim to keep silhouette readable
        vec3 V = normalize(-vViewPos);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.0);
        vec3 rim = vec3(0.8, 0.9, 1.0) * fresnel * 0.08 * clamp(dayLight, 0.0, 1.0);

        vec3 color = tex.rgb * (ambient + diffuse + rim);
        color = color / (color + vec3(1.0));
        color = pow(color, vec3(1.0/2.2));
        gl_FragColor = vec4(color, 1.0);
      }
    `,transparent:!1,depthWrite:!0,side:yn,uniforms:{map:{value:e},sunDirection:{value:new L(0,1,0)},sunColor:{value:new Ce(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.5}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setLighting(e,t,n,s){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t),this.uniforms.dayLight.value=Pe.clamp(n,0,1),this.uniforms.starLight.value=Pe.clamp(s,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=Pe.clamp(e,0,1)}}const De={torso:{width:.32,depth:.22,height:.7},spineLen:.52,neckLen:.12,shoulderOffsetX:.26,torsoBackOffset:.24,arm:{upperLen:.36,lowerLen:.34,handLen:.14,thickness:.08},leg:{thighLen:.48,shinLen:.48,thickness:.18,hipOffsetX:.1},locomotion:{freqWalk:2.4,freqRun:3.6,ampThigh:Pe.degToRad(26),torsoYaw:Pe.degToRad(6),torsoRoll:Pe.degToRad(4),torsoBob:.02,startStopDamping:12},idle:{baseShoulderPitch:Pe.degToRad(-65),baseShoulderYaw:Pe.degToRad(-25),baseShoulderRoll:Pe.degToRad(12),bobSpeed:1.8},swing:{duration:ar*.55,returnDuration:ar*.45,amplitudePitch:Pe.degToRad(78),amplitudeYawAlt:Pe.degToRad(10),easeIn:3,easeOut:3}};class Yv{playerRoot=null;camera=null;root;pelvis;spine;chest;neck;armAnchor;rArm;lArmAnchor;lArm;lLeg;rLeg;torsoMesh;armMat;legMat;torsoMat;locomotionBlend=0;locomotionPhase=0;movingFlag=!1;lastCamX=0;lastCamZ=0;idleTime=0;swingActive=!1;swingTime=0;swingReturning=!1;swingKind="LMB";swingAudio=null;_v3a=new L;constructor(){const e=g=>{const m=new Ms().load(g);return m.colorSpace=yt,m.magFilter=Je,m.minFilter=Je,m.generateMipmaps=!1,m.wrapS=Ft,m.wrapT=Ft,m},t=e(Vv),n=e(Hv),s=e(Gv),r=g=>new Xv(g);this.armMat=r(t),this.legMat=r(n),this.torsoMat=r(s),this.root=new bt,this.root.name="FPBody.Root",this.pelvis=new bt,this.pelvis.name="Pelvis",this.spine=new bt,this.spine.name="Spine",this.chest=new bt,this.chest.name="Chest",this.neck=new bt,this.neck.name="Neck",this.armAnchor=new bt,this.armAnchor.name="ArmAnchor",this.rArm=new bt,this.rArm.name="RArm",this.lArmAnchor=new bt,this.lArmAnchor.name="LArmAnchor",this.lArm=new bt,this.lArm.name="LArm",this.lLeg=new bt,this.lLeg.name="LLeg",this.rLeg=new bt,this.rLeg.name="RLeg",this.root.add(this.pelvis),this.pelvis.add(this.spine),this.spine.position.y=De.spineLen,this.spine.add(this.chest),this.chest.position.y=0,this.chest.add(this.neck),this.neck.position.y=De.neckLen,this.torsoMesh=this.createBoxMesh(De.torso.width,De.torso.height,De.torso.depth,this.torsoMat),this.torsoMesh.name="TorsoMesh",this.torsoMesh.position.set(0,-.7*.5,0),this.chest.add(this.torsoMesh),this.chest.add(this.armAnchor),this.armAnchor.position.set(De.shoulderOffsetX+.2,-.4,.4),this.armAnchor.add(this.rArm);const o=De.arm.upperLen+De.arm.lowerLen,a=this.createSegmentMesh(De.arm.thickness,o,De.arm.thickness,this.armMat);a.position.set(0,o,0),a.rotation.z=Math.PI,this.rArm.add(a);const l=De.arm.handLen*.4,c=this.createSegmentMesh(De.arm.thickness*.9,l,De.arm.thickness*.9,this.armMat);c.position.set(0,o+l,0),c.rotation.z=Math.PI,this.rArm.add(c),this.chest.add(this.lArmAnchor),this.lArmAnchor.position.set(-.46,.2,.2),this.lArmAnchor.add(this.lArm);const h=this.createSegmentMesh(De.arm.thickness,o,De.arm.thickness,this.armMat);h.position.set(0,o,0),h.rotation.z=Math.PI,this.lArm.add(h);const u=this.createSegmentMesh(De.arm.thickness*.9,l,De.arm.thickness*.9,this.armMat);u.position.set(0,o+l,0),u.rotation.z=Math.PI,this.lArm.add(u),this.pelvis.add(this.lLeg),this.pelvis.add(this.rLeg),this.lLeg.position.set(-.1,0,0),this.rLeg.position.set(De.leg.hipOffsetX,0,0);const d=De.leg.thighLen+De.leg.shinLen,p=this.createSegmentMesh(De.leg.thickness,d,De.leg.thickness,this.legMat);p.position.set(0,-d*.5,0),this.lLeg.add(p);const v=this.createSegmentMesh(De.leg.thickness,d,De.leg.thickness,this.legMat);v.position.set(0,-d*.5,0),this.rLeg.add(v)}init(e,t){this.playerRoot=e,this.camera=t,this.playerRoot.add(this.root),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}update(e){if(!this.camera||!this.playerRoot)return;const t=this.camera,n=t.position.x-this.lastCamX,s=t.position.z-this.lastCamZ,r=e>0?Math.hypot(n,s)/e:0,o=this.movingFlag&&r>.05?1:0,a=1-Math.pow(.001,e*De.locomotion.startStopDamping);this.locomotionBlend+=(o-this.locomotionBlend)*a;const l=Pe.lerp(De.locomotion.freqWalk,De.locomotion.freqRun,Math.min(1,r/5));this.locomotionPhase+=e*l*Math.PI*2*this.locomotionBlend;const c=this.locomotionPhase,h=Math.sin(c)*De.locomotion.torsoYaw*this.locomotionBlend,u=Math.sin(c*2)*De.locomotion.torsoRoll*this.locomotionBlend,d=(Math.sin(c*2)*.5+.5)*De.locomotion.torsoBob*this.locomotionBlend,p=t.rotation.y;this.root.rotation.set(0,0,0),this.playerRoot.position.set(t.position.x,t.position.y-(De.spineLen+De.neckLen+d),t.position.z),this.playerRoot.rotation.set(0,p,0);const v=t.rotation.x;this.neck.position.y=De.neckLen,this.neck.rotation.set(v,0,0),this.pelvis.position.set(0,0,De.torsoBackOffset),this.chest.position.set(0,0,0),this.spine.position.y=De.spineLen+d,this.chest.rotation.set(0,h,u),this.applyLegs(c,this.locomotionBlend),this.idleTime+=e;const g=this.computeArmIdle(r);this.updateSwing(e);const m=this.getCurrentSwingRot();this.rArm.rotation.set(g.shoulderPitch+m.pitch,g.shoulderYaw+m.yaw,g.shoulderRoll);{const w=Pe.clamp(this.locomotionBlend*(.5+.1*r),0,1),x=Math.sin(this.idleTime*De.idle.bobSpeed*(1+.5*w)),b=Pe.degToRad(22)*this.locomotionBlend,A=Math.sin(c)*b,C=-Math.sin(c)*Pe.degToRad(3)*this.locomotionBlend,D=x*.035*this.locomotionBlend,M=x*.025*this.locomotionBlend,y=Pe.degToRad(35)*this.locomotionBlend;this.lArm.rotation.set(-(Pe.degToRad(165)+A+D),y+C,-(0+M))}const E=Pe.radToDeg(v)<=-35||this.movingFlag&&this.locomotionBlend>.4;this.setLegsVisible(E),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}setLighting(e,t,n,s){this.armMat.setLighting(e,t,n,s),this.legMat.setLighting(e,t,n,s),this.torsoMat.setLighting(e,t,n,s)}onPrimaryClick(){this.tryStartSwing("LMB")}onSecondaryClick(){this.tryStartSwing("RMB")}isSwingActive(){return this.swingActive}onMovementInputStart(){this.movingFlag=!0}onMovementInputEnd(){this.movingFlag=!1}dispose(){try{this.swingAudio?.pause()}catch{}this.swingAudio=null;try{this.playerRoot?.remove(this.root)}catch{}}createBoxMesh(e,t,n,s){const r=new Yn(e,t,n),o=new Tt(r,s);return o.castShadow=!1,o.receiveShadow=!1,o}createSegmentMesh(e,t,n,s){return this.createBoxMesh(e,t,n,s)}applyLegs(e,t){const n=Math.sin(e)*De.locomotion.ampThigh*t,s=Math.sin(e+Math.PI)*De.locomotion.ampThigh*t;this.lLeg.rotation.set(n,0,0),this.rLeg.rotation.set(s,0,0)}computeArmIdle(e){const t=this.idleTime,n=Pe.clamp(this.locomotionBlend*(.5+.1*e),0,1),s=Math.sin(t*De.idle.bobSpeed*(1+.5*n)),r=De.idle.baseShoulderPitch+s*.06,o=De.idle.baseShoulderYaw+s*.02,a=De.idle.baseShoulderRoll+s*.03,l=r*.35-.04;return{shoulderPitch:r,shoulderYaw:o,shoulderRoll:a,forearmPitch:l}}tryStartSwing(e){if(!this.swingActive){this.swingKind=e,this.swingActive=!0,this.swingReturning=!1,this.swingTime=0;try{this.swingAudio||(this.swingAudio=new Audio(Wv),this.swingAudio.loop=!1,this.swingAudio.preload="auto");try{this.swingAudio.pause()}catch{}try{this.swingAudio.currentTime=0}catch{}this.swingAudio.play().catch(()=>{})}catch{}}}updateSwing(e){if(!this.swingActive)return;const t=this.swingReturning?De.swing.returnDuration:De.swing.duration;this.swingTime+=e,this.swingTime>=t&&(this.swingReturning?(this.swingActive=!1,this.swingReturning=!1,this.swingTime=0):(this.swingReturning=!0,this.swingTime=0))}getCurrentSwingRot(){if(!this.swingActive)return{pitch:0,yaw:0};const e=Pe.clamp(this.swingTime/(this.swingReturning?De.swing.returnDuration:De.swing.duration),0,1),t=a=>Math.pow(a,De.swing.easeIn),n=a=>1-Math.pow(1-a,De.swing.easeOut),s=De.swing.amplitudePitch*.8,r=this.estimateObstacleDamping(),o=-s*r;if(this.swingReturning){const a=t(1-e);return{pitch:o*a,yaw:(this.swingKind==="RMB"?De.swing.amplitudeYawAlt:0)*a}}else{const a=n(e);return{pitch:o*a,yaw:(this.swingKind==="RMB"?De.swing.amplitudeYawAlt:0)*a}}}estimateObstacleDamping(){if(!this.camera)return 1;const e=this.camera,t=this._v3a;return e.getWorldDirection(t),1}setLegsVisible(e){this.lLeg.visible=e,this.rLeg.visible=e}}let cs=null,mr=!1,Nt=null,xt=null,pt=null,ft=null,Bi=null,hs=null,At=null,sn=null,Mt=null,pn=null,ct=null,Qo=null,rs=null,$e=null,Wn=null,_t=null,zi=null,li=null,gr=null,cn=null,Jo=0,or=0,os=0,vr=!1,mn=null,us=600,ai=null,kt=null,ho=!1,Sa=0;const Dn=new Map;function Oc(i){const t=Math.max(1,Math.round(Math.sqrt(i))),n=Math.floor(t/2),s=t-1-n,r={minX:-n*ue.x,maxX:(s+1)*ue.x,minZ:-n*ue.z,maxZ:(s+1)*ue.z},o=Math.max(Math.abs(r.maxX-r.minX),Math.abs(r.maxZ-r.minZ))/2;return{bounds:r,worldRadius:o}}function qv(i,e){const t=JSON.stringify(e,null,2),n=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(n),r=document.createElement("a");r.href=s,r.download=i,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(s)}async function Zv(){try{if(!ft)throw new Error("World not initialized");const i=xn.getState(),e=Math.max(1,Math.floor(i.chunkCount||9)),{bounds:t,worldRadius:n}=Oc(e),s=ft.getLoadedChunkKeys().map(u=>{const d=ft.getChunkByKey(u),[p,v,g]=u.split(",").map(f=>parseInt(f,10)),m=d.getData();return{key:u,cx:p,cy:v,cz:g,size:{...m.size},voxelsB64:jc(m.voxels)}}),r={kind:"MyCraftWorld",version:2,meta:{createdAt:new Date().toISOString()},settings:{seed:ft.getSeed(),chunkCount:e,chunkSize:{...ue},bounds:t,worldRadius:n},chunks:s,inventory:{slots:$c().map(u=>({blockId:u.blockId,count:u.count})),selectedSlot:xn.getState().selectedSlot}},o=await Qc(r),{ivB64:a,cipherB64:l}=await Jc(r),c={kind:"MyCraftWorld",version:2,encAlg:nh,ivB64:a,cipherB64:l,signatureAlg:th,signatureB64:o,publicKeyId:eh};try{const u=window.__nextSaveFileHandle;if(window.__nextSaveFileHandle=void 0,u&&typeof u.createWritable=="function"){const p=await u.createWritable(),v=JSON.stringify(c,null,2);await p.write(new Blob([v],{type:"application/json"})),await p.close();return}}catch(u){console.warn("Saving via chosen file handle failed. Falling back to download.",u)}const h=`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`;qv(h,c)}catch(i){console.error("Save world failed:",i),alert("Failed to save world. See console for details.")}}function Kv(i){if(Bi&&Dn.size){const n=Array.from(Dn.keys()),s=new Set,r=o=>{Dn.has(o)&&s.add(o)};for(const o of n){if(s.has(o))continue;const[a,l,c]=o.split(",").map(d=>parseInt(d,10)),h=[`${a+1},${l},${c}`,`${a-1},${l},${c}`,`${a},${l+1},${c}`,`${a},${l-1},${c}`,`${a},${l},${c+1}`,`${a},${l},${c-1}`];h.some(d=>Dn.has(d))&&(r(o),h.forEach(d=>{Dn.has(d)&&r(d)}))}for(const[o,a]of Dn)s.has(o)||Sa-a.receivedAt>=2&&s.add(o);if(s.size)for(const o of s){const a=Dn.get(o);if(a){try{Bi.handleChunkMesh(a.response)}catch(l){console.error("Apply chunk mesh failed",l)}Dn.delete(o)}}}if(_t&&_t.consumePauseToggle?.()){const n=xn.getState(),s=!n.paused;n.inGame&&(n.setPaused(s),s?_t.exitPointerLock?.():_t.requestPointerLock?.())}const{paused:e,inGame:t}=xn.getState();if(vr&&!e&&t&&_t?.requestPointerLock?.(),t&&!e){if(_t&&_t.update(),kt&&_t&&_t.peekRightClick?.()&&kt.onSecondaryClick(),_t){const n=_t.consumeSelectedSlot?.();n!=null&&xn.getState().setSelectedSlot(n)}if(zi&&zi.update(i),kt&&_t){const n=_t.getMoveInput?.()||{x:0,z:0},s=Math.hypot(n.x,n.z)>.01||!!_t.isJumpHeld?.();s&&!ho&&kt.onMovementInputStart?.(),!s&&ho&&kt.onMovementInputEnd?.(),ho=!!s}li&&li.update(),gr&&gr.update()}if(mn&&mn.update(i,e,t),kt&&t&&!e&&kt.update(i),At&&pt&&At.updateUniforms(pt),ct&&(e||ct.update(i)),Qo&&ct&&Qo.setSunDirection(ct.getSunDirection()),rs&&ct){rs.update();const n=Math.max(0,ct.getSunDirection().y),s=1-Pe.clamp(n/.25,0,1);rs.setVisibility(s),rs.setIntensity(1.2+1.6*s)}if($e&&($e.update(),ct)){const n=ct.getSunDirection(),s=Math.max(0,n.y);$e.setDayLight(s)}if(pn&&xt&&pt){if(ct){const n=ct.getSunDirection();pn.setSunDirection(n)}if(pn.update(pt,xt),At){const n=pn.getShadowUniforms();At.updateShadowUniforms(n)}}if(At&&ct){const n=ct.getSunDirection();At.setSunUniforms(n,ct.getSunColor());const s=Math.max(0,n.y),o=Math.max(.1,s);At.setDayLight(o);const a=1-Pe.clamp((s-0)/.2,0,1);At.setStarLight(a*.35),cn&&cn.setSunUniforms(n,ct.getSunColor()),cn&&cn.setDayNight(o,a*.35),kt&&kt.setLighting(n,ct.getSunColor(),o,a*.35)}if(Wn&&Wn.update(i),Mt&&pt&&ct){const n=ct.getSunDirection(),s=ct.getSunColor();Mt.update(pt,n,s);const r=Math.max(0,n.y),a=Math.max(.1,r),l=new Ce(.72,.82,.92),h=new Ce(.03,.05,.08).clone().lerp(l,a);Mt.setFogColor(h),Mt.setFogDayLight(a);const u=new Ce(4891608),p=new Ce(658966).clone().lerp(u,Pe.clamp(a,0,1));Wn&&Wn.setColor(p),sn&&sn.setColor(p),Mt.render()}else Nt&&xt&&pt&&Nt.render(xt,pt);vr=e}function kc(i){if(!mr)return;const e=Math.min(.1,Math.max(0,(i-Jo)/1e3));Jo=i,Sa++,Kv(e),or+=1,os===0&&(os=i);const t=i-os;if(t>=500){const n=Math.round(or*1e3/t);xn.getState().setFps(n),or=0,os=i}cs=requestAnimationFrame(kc)}async function jv(i){if(mr)return;Nt=new Ig(i),xt=Ug();const e=i.clientWidth/i.clientHeight;pt=Ng(e),ft=new Vg,hs=new tv(Nt.getRenderer());let t=null;try{t=hs.createEnvironmentMap(),xt.environment=t}catch(g){console.warn("Environment mapping disabled due to WebGL compatibility:",g),t=null}const n=await ev();At=new Nc(n.getTexture(),t),At.setMaterialProperties(.8,0,.3);let s=null;try{s=await new Promise((g,m)=>{new Ms().load(Uc,f=>g(f),void 0,m)}),s.colorSpace=yt,s.magFilter=Je,s.minFilter=oc,s.wrapS=ci,s.wrapT=ci,s.generateMipmaps=!0;try{const g=Nt?.getRenderer().capabilities.getMaxAnisotropy?.()??0;g&&g>1&&(s.anisotropy=Math.min(8,g))}catch{}s.needsUpdate=!0}catch(g){console.warn("Water texture load failed, far ocean will fallback to color.",g),s=null}sn=new zc({map:s,tileScale:1,useWorldUV:!0,bounds:{minX:-1/0,maxX:1/0,minZ:-1/0,maxZ:1/0}}),sn.setAlpha(.7),sn.setRefraction(.18,.75,.12,.035,.06),Bi=new Hg(xt,{opaque:At,transparent:sn}),ai=new bt,ai.name="PlayerRigRoot",xt.add(ai),kt=new Yv,kt.init(ai,pt);const r=Nt.getCanvasSize();if(Mt=new pv(Nt.getRenderer(),xt,pt,r.width,r.height),Mt.setSSAO(!0,.3,.01),Mt.setBloom(!0,.3,.05),Mt.setLens(!0,.6),Mt.setFog(!0,.002,us),Mt.setVolumetrics(!1,.1,32),pn=new mv(Nt.getRenderer(),xt),ct=new gv(xt,{cycleSeconds:180,initialTime:0}),Qo=new _v(xt,{turbidity:2,rayleigh:1.5,mieCoefficient:.005,mieDirectionalG:.8,sunIntensityScale:.5,sunDiscScale:.1}),rs=new xv(xt,{intensity:1.2}),$e=new Mv(xt,{altitude:200,coverage:.45,density:.65,windDirection:Math.PI*.25,windSpeed:5}),$e.setEnabled(!1),At&&$e){const g=$e.getWind();At.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:$e.getAltitude(),scale:100,coverage:$e.getCoverage(),density:$e.getDensity(),wind:g})}window.__setClouds=(g,m)=>{$e&&(typeof g=="number"&&$e.setCoverage(g),typeof m=="number"&&$e.setDensity(m))},pn.updateSettings({enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:1,bias:5e-4,normalBias:.02,intensity:1,stableExtents:!0,extentScale:1.05,shadowBlendFraction:.2,shadowBlendMin:3});const o=Ma();ft.chunkPipeline.setAtlasConfig(n.getConfig(),o.getAllBlocks()),_t=new Lv(i,pt),_t.onPointerLockChanged(g=>{const m=xn.getState();g?m.setInGame(!0):m.paused||m.setInGame(!1)});const a=Math.max(1,Math.floor(xn.getState().chunkCount||9)),{bounds:l,worldRadius:c}=Oc(a);sn&&(sn.setBounds(l),sn.setEdge(0,2));const h=ue.x*2;if(us=Math.min(pt.far*.95,c+h),Mt){Mt.setFog(!0,.002,us);const g=Math.max(0,c-ue.x*1.5);Mt.setHorizonHaze({enabled:!0,waterLevel:ot+1,hazeStart:g,hazeDensity:.0045,hazeMaxMix:.05,hazeAngleBoost:.4,hazePlaneBoost:.2,hazePlaneBand:6})}ft.chunkPipeline.setWorldRadius(c);const u=Dv(ft.getSeed(),0,0,c);pt.position.set(u.x,u.y,u.z);{const g=pt.far*.98;Wn=new Pv(xt,{bounds:l,waterLevel:ot,farDistance:g,map:s??void 0,tileScale:1,enableSeabed:!0,seed:ft.getSeed(),worldRadius:c,blockMaterialSource:At??void 0})}if(zi=new fn(pt,ft,_t,l),li=new Nv(pt,ft,xt,l),gr=new Fv(pt,ft,_t,li,ft.chunkPipeline,zi),cn=new Ov(xt,ft,nn("grass_tuft")??9),cn&&$e){const g=$e.getWind();cn.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:$e.getAltitude(),scale:100,coverage:$e.getCoverage(),density:$e.getDensity(),wind:g})}mn=new kv(ft,pt,_t,zi),ft.chunkPipeline.on("CHUNK_READY",()=>{}),ft.chunkPipeline.on("CHUNK_MESH",g=>{const{response:m}=g;Dn.set(m.key,{response:m,receivedAt:Sa})});const d=window.__WORLD_SNAPSHOT,p=window.__WORLD_SNAPSHOT_VERIFIED;if(d&&d.kind==="MyCraftWorld")try{if(!p)throw new Error("Save not verified by loader");const g=d.settings.chunkSize;if(g.x!==ue.x||g.y!==ue.y||g.z!==ue.z)throw new Error(`Chunk size mismatch: save ${g.x}x${g.y}x${g.z}, game ${ue.x}x${ue.y}x${ue.z}`);ft.setSeed(d.settings.seed);for(const m of d.chunks){const f=new Uint8Array(atob(m.voxelsB64).split("").map(w=>w.charCodeAt(0))),E={size:m.size,voxels:f};ft.chunkPipeline.ingestChunkData(m.key,E)}}catch(g){console.error("Failed to load snapshot; returning to Start Panel.",g);try{alert("Save file verification failed or is corrupted. Returning to Start Panel.")}catch{}Vc();const m=xn.getState();m.setGameStarted(!1),m.setInGame(!1);return}finally{delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED}else{const g=Math.floor(Math.sqrt(a)/2),m=Math.sqrt(a)-1-g;for(let f=-g;f<=m;f++)for(let E=-g;E<=m;E++)ft.ensureChunk(f,0,E)}const v=()=>{Nt&&pt&&i&&(Nt.onResize(),pt.aspect=i.clientWidth/i.clientHeight,pt.updateProjectionMatrix(),Mt&&Mt.setSize(i.clientWidth,i.clientHeight))};window.addEventListener("resize",v),mr=!0,vr=xn.getState().paused,Jo=performance.now(),or=0,os=0,cs=requestAnimationFrame(kc)}function Vc(){mr=!1,vr=!1,cs!==null&&(cancelAnimationFrame(cs),cs=null),_t&&(_t.destroy(),_t=null),Bi&&(Bi.destroy(),Bi=null),At&&(At.dispose(),At=null),sn&&(sn.dispose(),sn=null),pn&&(pn.dispose(),pn=null),zi=null,li&&(li.destroy(),li=null),gr=null,cn&&(cn.destroy(),cn=null),mn&&(mn.dispose(),mn=null);try{kt?.dispose()}catch{}if(kt=null,xt&&ai)try{xt.remove(ai)}catch{}ai=null,ft&&(ft.destroy(),ft=null),hs&&(hs.dispose(),hs=null),Wn&&xt&&Wn.dispose(xt),Wn=null,Nt&&(Nt.dispose(),Nt=null),xt=null,pt=null,us=600}function $v(){return{timeOfDay:{t:ct?ct.getTime():0,paused:!1,cycleSeconds:180},renderer:{exposure:Nt?Nt.getRenderer().toneMappingExposure:1}}}function Qv(i){Mt?(Mt.setSSAO(!!i.ssaoEnabled,i.ssaoIntensity,i.ssaoRadius),Mt.setBloom(!!i.bloomEnabled,i.bloomStrength,i.bloomThreshold),Mt.setFog(!!i.fogEnabled,i.fogBaseDensity??.002,i.fogMaxDistance??us),Mt.setVolumetrics(!!i.volumetricsEnabled,i.volumetricsIntensity??.1,i.volumetricsSteps??32),Mt.setColorGrading(i.exposure,i.contrast,i.saturation)):console.error("[Engine] Post-processor not available!")}function Jv(i){pn?pn.updateSettings(i):console.error("[Engine] Shadow system not available!")}function e0(i){Sv(i,{setTime:e=>{ct?.setTime(e)},setTimePaused:e=>{ct?.pause(e)},setCycleSeconds:e=>{ct?.setCycleSeconds(e)},setRendererExposure:e=>{Nt&&(Nt.getRenderer().toneMappingExposure=e)},setClouds:e=>{if($e){if(e.coverage!==void 0&&$e.setCoverage(e.coverage),e.density!==void 0&&$e.setDensity(e.density),e.windDirection!==void 0||e.windSpeed!==void 0){const t=e.windDirection??Math.PI*.25,n=e.windSpeed??5;$e.setWind(t,n)}if(e.enabled!==void 0&&$e.setEnabled(e.enabled),At&&$e){const t=$e.getWind();At.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??$e.getCoverage(),density:e.density??$e.getDensity(),altitude:$e.getAltitude(),wind:t}),cn&&cn.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??$e.getCoverage(),density:e.density??$e.getDensity(),altitude:$e.getAltitude(),wind:t})}}}})}window.updatePostProcessingSettings=Qv;window.updateShadowSettings=Jv;window.updateGraphicsSettings=e0;window.getGraphicsSettings=$v;window.__saveWorld=()=>{Zv()};window.__setSfxVolume=i=>{mn?.setVolume(i)};window.__getSfxVolume=()=>mn?.getVolume()??.7;window.__primeSfx=()=>{mn?.tryUnlockOnUserGesture()};window.__sfxBreak=()=>{mn?.playBreak()};window.__sfxPlace=()=>{mn?.playPlace()};window.__bodyPrimary=()=>{kt?.onPrimaryClick?.()};window.__bodySecondary=()=>{kt?.onSecondaryClick?.()};window.__isBodySwingActive=()=>!!kt?.isSwingActive?.();const n0={start:jv,stop:Vc};export{n0 as engine};
