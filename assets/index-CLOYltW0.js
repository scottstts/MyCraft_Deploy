const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Engine-b1rIaJiA.js","assets/three-diuLMvqP.js","assets/three-examples-B33R7ZzJ.js","assets/react-BTd0cbev.js","assets/vendor-DsoqlaW1.js"])))=>i.map(i=>d[i]);
import{r as C,j as n,R as W,c as $t}from"./react-BTd0cbev.js";import{c as mt,a as Y}from"./vendor-DsoqlaW1.js";import{D as xt,l as bt,m as Bt,n as wt,o as Ut,p as vt,V as X,M as Xt,q as Gt,P as Zt,r as qt,s as Yt,t as Kt,i as N,u as Q}from"./three-diuLMvqP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();const Jt="modulepreload",Qt=function(e){return"/"+e},Ze={},er=function(t,r,a){let o=Promise.resolve();if(r&&r.length>0){let p=function(g){return Promise.all(g.map(d=>Promise.resolve(d).then(x=>({status:"fulfilled",value:x}),x=>({status:"rejected",reason:x}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=s?.nonce||s?.getAttribute("nonce");o=p(r.map(g=>{if(g=Qt(g),g in Ze)return;Ze[g]=!0;const d=g.endsWith(".css"),x=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${x}`))return;const w=document.createElement("link");if(w.rel=d?"stylesheet":Jt,d||(w.as="script"),w.crossOrigin="",w.href=g,l&&w.setAttribute("nonce",l),document.head.appendChild(w),d)return new Promise((A,y)=>{w.addEventListener("load",A),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return o.then(s=>{for(const l of s||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},H=[{id:"tiny",label:"tiny",side:3,chunkCount:9},{id:"small",label:"small",side:5,chunkCount:25},{id:"medium",label:"medium",side:7,chunkCount:49},{id:"large",label:"large",side:9,chunkCount:81},{id:"extra-large",label:"extra large",side:11,chunkCount:121},{id:"full-world",label:"full world",side:13,chunkCount:169}],yt=H[0];yt.id;const St=yt.chunkCount;function He(e){return H.find(t=>t.chunkCount===e)}function Ne(e){return He(e)?.chunkCount??St}const we=["Otherys","Solvaris","Eryndor","Vespera","Kaelith"],Ve="Otherys",tr=[{id:"Otherys",name:"Otherys",accent:"#22d3ee"},{id:"Solvaris",name:"Solvaris",accent:"#f59e0b"},{id:"Eryndor",name:"Eryndor",accent:"#b86cff"},{id:"Vespera",name:"Vespera",accent:"#f472b6"},{id:"Kaelith",name:"Kaelith",accent:"#38bdf8"}];function Et(e){return typeof e=="string"&&we.includes(e)?e:Ve}function Ta(e){const t=Et(e),r=we.indexOf(t);return we[(r+1)%we.length]??Ve}const rr=[1,2,3,4,5,6,7,8,9],f=mt(e=>({selectedSlot:0,setSelectedSlot:t=>e({selectedSlot:Math.max(0,Math.min(8,Math.floor(t)))}),hotbar:rr.slice(),setHotbar:t=>e({hotbar:t.slice(0,9)}),fps:0,setFps:t=>e({fps:t}),paused:!1,setPaused:t=>e({paused:t}),inGame:!1,setInGame:t=>e({inGame:t}),debugVisible:!1,setDebugVisible:t=>e({debugVisible:t}),audioVisible:!1,setAudioVisible:t=>e({audioVisible:t}),playerCharacter:Ve,setPlayerCharacter:t=>e({playerCharacter:Et(t)}),restartToken:0,bumpRestartToken:()=>e(t=>({restartToken:t.restartToken+1})),gameStarted:!1,setGameStarted:t=>e({gameStarted:t}),chunkCount:St,setChunkCount:t=>e({chunkCount:Ne(t)}),loading:!1,setLoading:t=>e({loading:t}),startupStage:null,setStartupStage:t=>e({startupStage:t}),startupError:null,setStartupError:t=>e({startupError:t})})),ar=["Away.mp3","By the Sea.mp3","Evening Glow.mp3","Golden Hour.mp3","Ocean Breeze.mp3","Sand Castle.mp3","Serenade.mp3","Silhouette.mp3","Static_Dream.mp3","Wind Whisper.mp3"],nr=ar.map(e=>{const r=(e.replace(/\.[^.]+$/,"")||"Track").replace(/[_-]+/g," ").replace(/\s+/g," ");return{url:`/music/${encodeURIComponent(e)}`,name:r}});let P=null,M=[],G=0,ne=!1;function or(e){const t=e.slice();for(let r=t.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[t[r],t[a]]=[t[a],t[r]]}return t}function ve(){if(!P||M.length===0)return;const e=M[G%M.length];P.src!==e.url&&(P.src=e.url,P.currentTime=0)}function z(){return P||(M=or(nr),G=0,P=new Audio,P.loop=!1,P.volume=.2,P.preload="auto",ve(),P.addEventListener("ended",()=>{M.length!==0&&(G=(G+1)%M.length,ve(),ne&&P.play().catch(()=>{}))})),P}function ye(e){const t=z();ne=e,e?t.play().catch(()=>{}):t.pause()}function qe(){const e=z();if(!e.paused)return;const t=e.currentTime,r=e.muted;e.muted=!0;const a=e.play();e.pause();try{e.currentTime=t}catch{}a.then(()=>{if(ne){e.muted=r,e.paused&&e.play().catch(()=>{});return}e.pause(),e.muted=r;try{e.currentTime=t}catch{}}).catch(()=>{e.muted=r})}function Rt(){const e=z();ne&&e.paused&&e.play().catch(()=>{})}function ir(){z(),M.length!==0&&(G=(G+1)%M.length,ve(),ne&&P.play().catch(()=>{}))}function sr(){z(),M.length!==0&&(G=(G-1+M.length)%M.length,ve(),ne&&P.play().catch(()=>{}))}function ue(){return!z().paused}function Ye(){return z().currentTime||0}function se(){const e=z();return Number.isFinite(e.duration)?e.duration:0}function Ke(e){const t=z();Number.isFinite(e)&&(t.currentTime=Math.max(0,Math.min(se()||Number.MAX_SAFE_INTEGER,e)))}function fe(){return z(),M.length===0?"":M[G%M.length].name}function Je(e){const t=z(),r=Math.max(0,Math.min(1,e));t.volume=r}function Qe(){return z().volume}const Oe={"engine-import":"Loading the game engine",renderer:"Initializing graphics",scene:"Building the world view",world:"Creating the world model",assets:"Loading world assets","render-pipeline":"Preparing the render pipeline",systems:"Connecting game systems","world-loading":"Generating the starting area","shader-compilation":"Compiling graphics shaders",warmup:"Warming up the GPU",ready:"Ready"};function cr(){const e=typeof window>"u"?{width:0,height:0}:{width:window.innerWidth,height:window.innerHeight},t=typeof window>"u"||!Number.isFinite(window.devicePixelRatio)?1:window.devicePixelRatio,r=typeof navigator>"u"?"unknown":navigator.userAgent||navigator.platform||"unknown";return{viewport:e,dpr:t,platform:r}}function lr(e){if(e instanceof Error)return{name:e.name||"Error",message:e.message||"Unknown startup error",...e.stack?{stack:e.stack}:{}};if(typeof e=="string")return{name:"Error",message:e};try{return{name:"Error",message:JSON.stringify(e)||"Unknown startup error"}}catch{return{name:"Error",message:"Unknown startup error"}}}function dr(e,t,r={}){const a=cr(),o=lr(t);return{...a,...r,stage:e,stageLabel:Oe[e],...o}}function pr(e){if(!e||typeof e!="object")return!1;const t=e;return typeof t.stage=="string"&&typeof t.stageLabel=="string"&&typeof t.message=="string"&&!!t.viewport&&typeof t.dpr=="number"}function Fe(e){if(document.pointerLockElement!==e)try{const t=e.requestPointerLock?.();typeof t?.catch=="function"&&t.catch(()=>{})}catch{}}async function ur(){return(await er(()=>import("./Engine-b1rIaJiA.js"),__vite__mapDeps([0,1,2,3,4]))).engine}function At({diagnosticView:e,diagnosticTime:t}={}){const r=C.useRef(null),a=C.useRef(0),o=f(m=>m.setPaused),i=f(m=>m.setInGame),s=f(m=>m.setGameStarted),l=f(m=>m.setLoading),p=f(m=>m.setStartupStage),g=f(m=>m.setStartupError),d=f(m=>m.restartToken),x=f(m=>m.gameStarted),w=f(m=>m.loading);C.useEffect(()=>{const m=()=>{const h=r.current;!h||e||Fe(h)},u=window;return u.__requestGameEntryPointerLock=m,()=>{u.__requestGameEntryPointerLock===m&&delete u.__requestGameEntryPointerLock}},[e]),C.useEffect(()=>{const m=a.current+1;a.current=m;const u=()=>a.current===m;let h=null,j=!1,v=!0,S="engine-import";const b=E=>{if(!v||!u()){u()&&h?.stop();return}const c=pr(E)?E:dr(S,E);console.error("Game startup failed:",c),h?.stop(),i(!1),l(!1),s(!1),g(c)};return(async()=>{const E=r.current;if(!(!E||!v)&&!(!x&&!e))try{const c=R=>{S=R,v&&u()&&p(R)};if(c("engine-import"),h=await ur(),!v)return;if(await h.start(E,{...e?{diagnosticView:e,diagnosticTime:t}:{},onBootStage:c}),!v){u()&&h.stop();return}j=!0,e?i(!0):(Fe(E),i(!0),o(!1),ye(!0),l(!1))}catch(c){b(c)}})().catch(b),()=>{v=!1,o(!1),i(!1),e||ye(!1),u()&&j&&h?.stop()}},[d,o,i,s,l,p,g,x,e,t]);const A=m=>m.preventDefault(),y=()=>{const m=r.current;m&&x&&!w&&!e&&(Fe(m),Rt(),window.__primeSfx?.())};return n.jsx("div",{style:{position:"fixed",inset:0,background:"#0b0d10"},children:n.jsx("canvas",{ref:r,onContextMenu:A,onClick:y,style:{width:"100%",height:"100%",display:"block"}})})}const fr=9,Ie=1/0;function gr(){return Array.from({length:fr},()=>({blockId:null,count:0}))}const oe=mt((e,t)=>({slots:gr(),add:(r,a=1)=>{if(r<=0||a<=0)return a;const o=t().slots.slice();let i=a;for(let s=0;s<o.length&&i>0;s++){const l=o[s];if(l.blockId===r&&l.count<Ie){const p=Math.min(Ie-l.count,i);l.count+=p,i-=p}}for(let s=0;s<o.length&&i>0;s++){const l=o[s];if(l.blockId===null||l.count===0){const p=Math.min(Ie,i);l.blockId=r,l.count=p,i-=p}}return e({slots:o}),i},consumeFromSelected:(r=1)=>{if(r<=0)return 0;const a=t().slots.slice(),o=f.getState().selectedSlot,i=a[o];if(!i||!i.blockId||i.count<=0)return 0;const s=Math.min(i.count,r);return i.count-=s,i.count===0&&(i.blockId=null),e({slots:a}),s},getSelectedBlockId:()=>{const r=f.getState().selectedSlot,a=t().slots[r];return!a||!a.blockId||a.count<=0?null:a.blockId},clearSelectedIfEmpty:()=>{const r=t().slots.slice(),a=f.getState().selectedSlot,o=r[a];o&&o.count<=0&&(o.blockId=null),e({slots:r})}}));function Fa(e,t=1){return oe.getState().add(e,t)}function Ia(){return oe.getState().getSelectedBlockId()}function Wa(){return oe.getState().consumeFromSelected(1)===1}function ja(){return oe.getState().slots.map(e=>({blockId:e.blockId,count:e.count}))}function et(e){const t=Array.from({length:9},(r,a)=>{const o=e[a];if(!o||typeof o!="object")return{blockId:null,count:0};const i=o.blockId===null||typeof o.blockId=="number"?o.blockId:null,s=Math.max(0,Math.floor(Number.isFinite(o.count)?o.count:0));return{blockId:i,count:s}});oe.setState({slots:t})}const hr="/assets/grass-DpbbaMGp.png",mr="/assets/dirt-DqnIcsTT.png",xr="/assets/cobblestone-bSPKa8EI.png",br="/assets/sand-Dwllyi-m.png",wr="/assets/wood-Br2imn7P.png",vr="/assets/branch-BMHqvNwM.png",yr="/assets/cherry_branch-oq1HP-ay.png",Sr="/assets/grass_leaves_icon-D13aQOUF.png",Er="/assets/water-aOZMc5Uy.png",Rr={1:hr,2:mr,3:xr,4:br,5:Er,6:wr,7:vr,8:yr,9:Sr};function Ar(){const e=f(o=>o.selectedSlot),t=f(o=>o.inGame),r=f(o=>o.loading),a=oe(o=>o.slots);return!t||r?null:n.jsx("div",{style:{position:"absolute",bottom:24,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,padding:4,background:"rgba(0,0,0,0.25)",borderRadius:6},children:a.map((o,i)=>{const s=i===e,l=o.blockId?Rr[o.blockId]:void 0;return n.jsxs("div",{style:{width:44,height:44,boxSizing:"border-box",border:"2px solid",borderColor:s?"#cfe9ef":"#555",background:"#6b6e63",boxShadow:s?"0 0 0 2px #1a1a1a inset":"0 0 0 1px #2a2a2a inset",position:"relative"},children:[l&&n.jsx("img",{src:l,alt:"",style:{width:32,height:32,imageRendering:"pixelated",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{position:"absolute",left:2,top:1,fontSize:10,color:"#d8b35e",textShadow:"1px 1px 0 #000",fontWeight:"bold"},children:i+1}),o.count>0&&n.jsx("div",{style:{position:"absolute",right:2,bottom:0,fontSize:10,color:"#fff",textShadow:"1px 1px 0 #000"},children:o.count})]},i)})})}function Cr(){const e=f(a=>a.inGame),t=f(a=>a.loading),r=f(a=>a.paused);return!e||t||r?null:n.jsxs("div",{"aria-label":"Press R to switch character",style:{position:"absolute",left:"50%",bottom:84,transform:"translateX(-50%)",display:"flex",alignItems:"center",gap:6,padding:"5px 9px",background:"rgba(8, 13, 18, 0.72)",border:"1px solid rgba(148,163,184,0.16)",borderRadius:7,color:"rgba(248,250,252,0.78)",fontSize:11,lineHeight:"16px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',letterSpacing:.2,pointerEvents:"none",backdropFilter:"blur(8px)",boxShadow:"0 6px 16px rgba(0,0,0,0.22)",zIndex:1001,whiteSpace:"nowrap"},children:[n.jsx("span",{children:"Press"}),n.jsx("kbd",{style:{minWidth:18,height:18,padding:"0 5px",boxSizing:"border-box",display:"inline-flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(226,232,240,0.34)",borderBottomWidth:2,borderRadius:4,background:"rgba(15,23,32,0.92)",color:"#f8fafc",fontSize:10,lineHeight:"14px",fontFamily:"inherit",fontWeight:800,letterSpacing:.5},children:"R"}),n.jsx("span",{children:"to switch character"})]})}function _r(){const e=f(o=>o.inGame),t=f(o=>o.loading),r=14,a=2;return!e||t?null:n.jsxs("div",{style:{position:"absolute",left:"50%",top:"50%",pointerEvents:"none"},children:[n.jsx("div",{style:{position:"absolute",width:r,height:a,background:"#fff",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{position:"absolute",width:a,height:r,background:"#fff",transform:"translate(-50%, -50%)"}})]})}function kr(){const e=f(x=>x.fps),t=f(x=>x.gameStarted),r=f(x=>x.loading),[a,o]=W.useState(0);W.useEffect(()=>{let x=0;const w=()=>{const A=window.getGraphicsSettings;if(A){const y=A();y&&y.timeOfDay&&o(y.timeOfDay.t)}x=requestAnimationFrame(w)};return x=requestAnimationFrame(w),()=>cancelAnimationFrame(x)},[]);const i=(6+a*24)%12,s=i%1*60,l=i/12*360,p=s/60*360,g=36,d=g/2;return!t||r?null:n.jsxs("div",{id:"top-right-widget",style:{position:"absolute",right:12,top:12,display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",background:"rgba(15, 23, 32, 0.94)",color:"#f8f9fa",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"8px",fontSize:"12px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontWeight:600,letterSpacing:.3,pointerEvents:"none",backdropFilter:"blur(10px)",boxShadow:"0 8px 20px rgba(0,0,0,0.28)",zIndex:1001},children:[n.jsx("span",{style:{opacity:.8},children:"Press P to pause"}),n.jsx("div",{style:{width:"1px",height:"16px",background:"rgba(255,255,255,0.2)"}}),n.jsxs("span",{style:{color:"#2dd4bf",fontWeight:700,minWidth:"48px",textAlign:"center"},children:[e," fps"]}),n.jsx("div",{style:{width:"1px",height:"16px",background:"rgba(255,255,255,0.2)"}}),n.jsxs("div",{style:{width:g,height:g,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.4)",background:"rgba(0,0,0,0.2)",position:"relative",flexShrink:0},children:[n.jsx("div",{style:{position:"absolute",left:d-1.5,top:d-8,width:3,height:8,background:"#fff",transformOrigin:"50% 100%",transform:`rotate(${l}deg)`,borderRadius:2}}),n.jsx("div",{style:{position:"absolute",left:d-.5,top:d-12,width:1,height:12,background:"#dde6ff",transformOrigin:"50% 100%",transform:`rotate(${p}deg)`,borderRadius:1}}),n.jsx("div",{style:{position:"absolute",left:d-1.5,top:d-1.5,width:3,height:3,background:"#fff",borderRadius:"50%"}})]})]})}function Tr(){const e=f(o=>o.paused),t=f(o=>o.gameStarted),r=f(o=>o.loading),a=f(o=>o.setPaused);return!e||!t||r?null:n.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px",background:"rgba(8, 13, 18, 0.76)",backdropFilter:"blur(2px)",zIndex:900,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:n.jsxs("div",{style:{width:"100%",maxWidth:480,padding:"clamp(20px, 5vw, 32px)",boxSizing:"border-box",borderRadius:16,background:"rgba(15, 23, 32, 0.94)",border:"1px solid rgba(148,163,184,0.16)",boxShadow:"0 24px 60px rgba(0,0,0,0.48)",backdropFilter:"blur(20px)",color:"#f8f9fa"},children:[n.jsx("div",{style:{marginBottom:"clamp(16px, 4vw, 24px)",paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:"clamp(24px, 6vw, 28px)",fontWeight:800,color:"#f8fafc"},children:"Game Paused"}),n.jsx("button",{onClick:()=>{a(!1),window.__requestGameEntryPointerLock?.()},style:{width:"100%",height:52,boxSizing:"border-box",padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"center",background:"#2dd4bf",color:"#061311",border:"1px solid rgba(94,234,212,0.5)",borderRadius:12,cursor:"pointer",fontWeight:700,fontSize:"clamp(14px, 3.5vw, 16px)",lineHeight:"20px",letterSpacing:.5,textTransform:"uppercase",boxShadow:"0 10px 24px rgba(0,0,0,0.32)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none"},onMouseOver:o=>{o.currentTarget.style.transform="translateY(-2px)",o.currentTarget.style.boxShadow="0 14px 30px rgba(0,0,0,0.38)",o.currentTarget.style.background="#5eead4"},onMouseOut:o=>{o.currentTarget.style.transform="translateY(0)",o.currentTarget.style.boxShadow="0 10px 24px rgba(0,0,0,0.32)",o.currentTarget.style.background="#2dd4bf"},children:"Resume Game"})]})})}const Fr=()=>{const e=f(b=>b.gameStarted),t=f(b=>b.loading),r=W.useRef(null),[a,o]=W.useState(!1),[i,s]=W.useState(0),[l,p]=W.useState(0),[g,d]=W.useState(""),[x,w]=W.useState(0),[A,y]=W.useState(84),[m,u]=W.useState(void 0),[h,j]=W.useState(!1),[v,S]=W.useState(!1);return W.useEffect(()=>{try{o(ue())}catch{}try{s(Ye()),p(se()),d(fe()),w(Qe())}catch{}},[]),W.useEffect(()=>{let b=0;const _=()=>{const E=Ye(),c=se(),R=ue(),O=fe(),B=Qe();s(E),p(c),o(R),d(O),w(B),b=requestAnimationFrame(_)};return b=requestAnimationFrame(_),()=>cancelAnimationFrame(b)},[]),W.useEffect(()=>{const b=()=>{const c=document.getElementById("top-right-widget");if(!c)return;const R=c.getBoundingClientRect();Number.isFinite(R.bottom)&&y(Math.ceil(R.bottom+12)),Number.isFinite(R.width)&&R.width>0&&u(Math.ceil(R.width))};b();const _=requestAnimationFrame(b);window.addEventListener("resize",b);const E=window.setInterval(b,100);return()=>{window.removeEventListener("resize",b),window.clearInterval(E),cancelAnimationFrame(_)}},[]),W.useEffect(()=>{const b=E=>{if(h){const c=document.querySelector("[data-progress-bar]");if(c){const R=c.getBoundingClientRect(),O=Math.min(1,Math.max(0,(E.clientX-R.left)/R.width)),B=se();B>0&&Ke(O*B)}}if(v){const c=document.querySelector("[data-volume-bar]");if(c){const R=c.getBoundingClientRect(),O=Math.min(1,Math.max(0,(E.clientX-R.left)/R.width));Je(O),w(O)}}},_=()=>{j(!1),S(!1)};if(h||v)return document.addEventListener("mousemove",b),document.addEventListener("mouseup",_),()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",_)}},[h,v]),!e||t||m===void 0?null:n.jsx("div",{ref:r,style:{position:"fixed",right:12,top:A,width:m,minWidth:0,boxSizing:"border-box",overflow:"hidden",background:"rgba(15, 23, 32, 0.94)",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"12px",padding:"8px 12px",color:"#ffffff",fontSize:"14px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',zIndex:1001,pointerEvents:"auto",backdropFilter:"blur(24px)",boxShadow:"0 8px 20px rgba(0,0,0,0.28)"},children:n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",minWidth:0},children:[n.jsx("div",{style:{alignSelf:"flex-start",fontSize:13,fontWeight:800,color:"#f8fafc",letterSpacing:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"},children:g||"—"}),n.jsx("div",{"data-progress-bar":!0,onClick:b=>{const _=b.currentTarget.getBoundingClientRect(),E=Math.min(1,Math.max(0,(b.clientX-_.left)/_.width)),c=se();c>0&&Ke(E*c)},onMouseDown:b=>{b.preventDefault(),j(!0)},style:{width:"100%",height:"8px",borderRadius:"6px",background:"rgba(255,255,255,0.12)",cursor:"pointer",position:"relative"},children:n.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:`${l>0?Math.min(1,i/l)*100:0}%`,background:"#2dd4bf",borderRadius:"6px"}})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"12px",minWidth:0},children:[n.jsx("button",{"aria-label":"Previous track",onClick:()=>{sr(),o(ue()),d(fe())},style:{padding:"6px 8px",background:"transparent",border:"none",color:"#e2e8f0",cursor:"pointer",fontSize:"22px"},children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:n.jsx("path",{d:"M18 7v10l-6-5 6-5zM10 7v10L4 12l6-5z"})})}),n.jsx("button",{"aria-label":a?"Pause":"Play",onClick:()=>{a?(ye(!1),o(!1)):(ye(!0),Rt(),o(!0))},style:{padding:"6px 8px",background:"transparent",border:"none",color:"#e2e8f0",cursor:"pointer",fontSize:"26px"},children:a?n.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:n.jsx("path",{d:"M6 5h4v14H6zM14 5h4v14h-4z"})}):n.jsx("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:n.jsx("path",{d:"M8 5v14l11-7-11-7z"})})}),n.jsx("button",{"aria-label":"Next track",onClick:()=>{ir(),o(ue()),d(fe())},style:{padding:"6px 8px",background:"transparent",border:"none",color:"#e2e8f0",cursor:"pointer",fontSize:"22px"},children:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":!0,children:n.jsx("path",{d:"M6 7v10l6-5-6-5zm8 0v10l6-5-6-5z"})})})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"1px",minWidth:0},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",style:{color:"#94a3b8",flexShrink:0},children:n.jsx("path",{d:"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"})}),n.jsx("div",{"data-volume-bar":!0,onClick:b=>{const _=b.currentTarget.getBoundingClientRect(),E=Math.min(1,Math.max(0,(b.clientX-_.left)/_.width));Je(E),w(E)},onMouseDown:b=>{b.preventDefault(),S(!0)},style:{flex:1,height:"6px",borderRadius:"4px",background:"rgba(255,255,255,0.12)",cursor:"pointer",position:"relative",minWidth:0},children:n.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:`${x*100}%`,background:"#2dd4bf",borderRadius:"4px"}})}),n.jsxs("span",{style:{fontSize:"11px",color:"#94a3b8",minWidth:"28px",textAlign:"right"},children:[Math.round(x*100),"%"]})]})]})})},Ir={dayNightCycleSeconds:1200,shadows:{enabled:!0,distance:300,intensity:1,character:{maxDistance:32}},bloom:{enabled:!0,strength:.08,radius:.28,threshold:1.05},lens:{enabled:!0,intensity:.32},atmosphere:{rayleighScaleHeight:8,mieScaleHeight:1.2,rayleighCoefficient:.055,mieCoefficient:.018,mieDirectionalG:.76,absorptionCoefficient:.004,skyRadianceScale:1.25,aerosolStrength:.14,aerialPerspectiveStart:96,aerialPerspectiveExtinction:.0022,aerialPerspectiveMax:.72,horizonHazeWidth:.26,horizonHazeStrength:1,horizonHazeNearSurfaceFloor:.04}};function Wr(){const e=f(a=>a.setLoading),t=f(a=>a.gameStarted),r=f(a=>a.loading);return!t||r?null:n.jsxs("button",{onClick:async()=>{e(!0);try{const a=window;if(typeof a.showSaveFilePicker=="function")try{const o=`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`,i=await a.showSaveFilePicker({suggestedName:o,types:[{description:"MyCraft World (JSON)",accept:{"application/json":[".json"]}}]});a.__nextSaveFileHandle=i}catch(o){const i=o?.name;if(i==="AbortError"||i==="NotAllowedError"){e(!1);return}console.warn("Save picker failed; falling back to default download.",o)}window.__saveWorld?.(),await new Promise(o=>setTimeout(o,500))}catch(a){console.error("Save failed:",a)}finally{e(!1)}},style:{padding:"8px 12px",background:"rgba(15, 23, 32, 0.94)",color:"#f8f9fa",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"8px",cursor:"pointer",fontSize:"12px",lineHeight:"16px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontWeight:600,letterSpacing:.3,pointerEvents:"auto",backdropFilter:"blur(10px)",boxShadow:"0 8px 20px rgba(0,0,0,0.28)",transition:"all 0.2s ease",display:"flex",alignItems:"center",gap:"6px",width:"fit-content"},onMouseOver:a=>{a.currentTarget.style.transform="translateY(-2px)",a.currentTarget.style.boxShadow="0 12px 26px rgba(0,0,0,0.34)",a.currentTarget.style.borderColor="rgba(94,234,212,0.38)",a.currentTarget.style.background="rgba(20, 31, 43, 0.98)"},onMouseOut:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow="0 8px 20px rgba(0,0,0,0.28)",a.currentTarget.style.borderColor="rgba(148,163,184,0.16)",a.currentTarget.style.background="rgba(15, 23, 32, 0.94)"},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",style:{width:14,height:14,display:"block",flexShrink:0},children:n.jsx("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z",fill:"currentColor",opacity:"0.8"})}),n.jsx("span",{children:"Save World"})]})}const jr={position:"fixed",top:"52px",left:"12px",width:"320px",background:"rgba(15, 23, 32, 0.98)",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"16px",padding:"20px",color:"#f8f9fa",fontSize:"13px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',zIndex:2e3,maxHeight:"80vh",overflowY:"auto",backdropFilter:"blur(20px)",boxShadow:"0 24px 60px rgba(0,0,0,0.48)"},tt={marginBottom:"20px"},We={margin:"0 0 12px 0",fontSize:"14px",color:"#e2e8f0",fontWeight:600,textTransform:"uppercase",letterSpacing:.5,borderBottom:"1px solid rgba(255,255,255,0.06)",paddingBottom:"6px"},rt={display:"block",padding:"8px 12px",borderRadius:"8px",background:"rgba(255,255,255,0.025)"},Dr=()=>{const{debugVisible:e,setDebugVisible:t,setAudioVisible:r}=f(),a=f(u=>u.playerCharacter),o=f(u=>u.setPlayerCharacter),i=f(u=>u.gameStarted),s=f(u=>u.loading),l=C.useRef(null),[p,g]=C.useState(.7),[d,x]=C.useState(0),[w,A]=C.useState(!1);if(C.useEffect(()=>{const h=window.__getSfxVolume?.();typeof h=="number"&&Number.isFinite(h)&&g(h)},[]),C.useEffect(()=>{let u=0;const h=()=>{const j=window.getGraphicsSettings?.();if(j?.timeOfDay){const v=j.timeOfDay.t;Number.isFinite(v)&&x(S=>Math.abs(S-v)>1e-4?v:S),A(j.timeOfDay.paused)}u=requestAnimationFrame(h)};return u=requestAnimationFrame(h),()=>cancelAnimationFrame(u)},[]),C.useEffect(()=>{if(!e)return;const u=h=>{l.current&&!l.current.contains(h.target)&&t(!1)};return document.addEventListener("mousedown",u,!0),()=>document.removeEventListener("mousedown",u,!0)},[e,t]),C.useEffect(()=>{e&&r(!1)},[e,r]),!i||s)return null;if(!e)return n.jsxs("div",{style:{position:"fixed",top:"12px",left:"12px",zIndex:1e3,display:"flex",flexDirection:"column",gap:"10px"},children:[n.jsxs("button",{onClick:()=>{r(!1),t(!0)},style:{padding:"8px 12px",background:"rgba(15, 23, 32, 0.94)",color:"#f8f9fa",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"8px",cursor:"pointer",fontSize:"12px",lineHeight:"16px",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontWeight:600,letterSpacing:.3,pointerEvents:"auto",backdropFilter:"blur(10px)",boxShadow:"0 8px 20px rgba(0,0,0,0.28)",display:"flex",alignItems:"center",gap:"6px"},children:[n.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",style:{width:14,height:14,display:"block",flexShrink:0},children:n.jsx("path",{d:"M19.43 12.98c.04-.32.07-.65.07-.98s-.02-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.37-.31-.6-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98L14.5 1.42C14.47 1.18 14.25 1 14 1h-4c-.25 0-.46.18-.5.42L9.12 4.07c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.08-.48 0-.6.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.08.65-.08.98s.03.66.08.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.37.31.6.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.38-2.65c.61-.25 1.17-.58 1.69-.98l2.49 1c.23.08.48 0 .6-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5z"})}),n.jsx("span",{children:"Settings"})]}),n.jsx(Wr,{})]});const y=(u,h=w)=>{x(u),window.updateGraphicsSettings?.({timeOfDay:{t:u,paused:h,cycleSeconds:Ir.dayNightCycleSeconds}})},m=u=>{const h=window.__setPlayerCharacter;h?h(u):o(u)};return n.jsxs("div",{ref:l,style:jr,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",paddingBottom:"16px",borderBottom:"1px solid rgba(255,255,255,0.06)",position:"sticky",top:0,background:"rgba(15, 23, 32, 0.98)",zIndex:1},children:[n.jsx("h3",{style:{margin:0,fontSize:"18px",fontWeight:700,color:"#f8fafc"},children:"Settings"}),n.jsx("button",{onClick:()=>t(!1),"aria-label":"Close settings",style:{background:"rgba(148,163,184,0.10)",border:"1px solid rgba(148,163,184,0.16)",color:"#f8f9fa",cursor:"pointer",padding:"8px 10px",borderRadius:"8px",fontSize:"14px",fontWeight:600},children:"✕"})]}),n.jsxs("section",{style:tt,children:[n.jsx("h4",{style:We,children:"Player"}),n.jsx("div",{role:"radiogroup","aria-label":"Player character",style:{display:"grid",gridTemplateColumns:"repeat(2, minmax(0, 1fr))",gap:"8px"},children:tr.map(u=>{const h=u.id===a;return n.jsxs("button",{type:"button",role:"radio","aria-checked":h,"aria-label":`${u.name}${h?" selected":""}`,onClick:()=>m(u.id),style:{minHeight:"64px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",gap:"5px",padding:"10px 12px",borderRadius:"10px",border:h?`2px solid ${u.accent}`:"1px solid rgba(148,163,184,0.18)",background:h?`linear-gradient(135deg, ${u.accent}24, rgba(255,255,255,0.06))`:"rgba(255,255,255,0.035)",color:"#f8fafc",cursor:"pointer",textAlign:"left",font:"inherit",boxShadow:h?`0 0 18px ${u.accent}1c`:"none"},children:[n.jsx("span",{style:{fontSize:"13px",lineHeight:"16px",fontWeight:700},children:u.name}),n.jsx("span",{style:{color:h?u.accent:"#64748b",fontSize:"10px",lineHeight:"12px",fontWeight:700,letterSpacing:.45,textTransform:"uppercase"},children:h?"Selected":"Choose"})]},u.id)})})]}),n.jsxs("section",{style:tt,children:[n.jsx("h4",{style:We,children:"Sound Effects"}),n.jsxs("label",{style:rt,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"12px",fontWeight:500,color:"#94a3b8"},children:[n.jsx("span",{children:"Sound Effects Volume"}),n.jsxs("span",{style:{color:"#e2e8f0"},children:[Math.round(p*100),"%"]})]}),n.jsx("input",{"aria-label":"Sound Effects Volume",type:"range",min:0,max:1,step:.01,value:p,onChange:u=>{const h=Number.parseFloat(u.target.value);g(h),window.__setSfxVolume?.(h)},style:{width:"100%",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.1)",outline:"none",cursor:"pointer"}})]})]}),n.jsxs("section",{style:{marginBottom:0},children:[n.jsx("h4",{style:We,children:"Day/Night Cycle"}),n.jsxs("label",{style:{display:"flex",alignItems:"center",marginBottom:"10px",cursor:"pointer",padding:"8px 12px",borderRadius:"8px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)"},children:[n.jsx("input",{type:"checkbox",checked:w,onChange:u=>{const h=u.target.checked;A(h),y(d,h)},style:{marginRight:"10px",transform:"scale(1.1)"}}),n.jsx("span",{style:{fontWeight:500},children:"Pause Cycle"})]}),n.jsxs("label",{style:rt,children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"6px",fontSize:"12px",fontWeight:500,color:"#94a3b8"},children:[n.jsx("span",{children:"Time"}),n.jsx("span",{style:{color:"#e2e8f0"},children:d.toFixed(2)})]}),n.jsx("input",{"aria-label":"Time",type:"range",min:0,max:1,step:.01,value:d,onChange:u=>y(Number.parseFloat(u.target.value)),style:{width:"100%",height:"4px",borderRadius:"2px",background:"rgba(255,255,255,0.1)",outline:"none",cursor:"pointer"}}),n.jsx("div",{style:{marginTop:"8px",color:"#64748b",fontSize:"11px"},children:"10 min day · 10 min night"})]})]})]})},Pr="MC-HMAC-SHA256-v1",Mr="MyCraft-Local-Signing-Key-v1",Nr="mycraft.local.secret.v1.very-insecure",Or="MC-AES-GCM-256-v1",Lr="a1c3f5b7d9e2c4a6b8d0f2e4c6a8b0d2a4c6e8f0b2d4f6a8c0e2f4a6c8e0f2a4";function $e(e){return JSON.stringify(e)}function Be(e){return new TextEncoder().encode(e)}function Se(e){let t="";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return btoa(t)}function ce(e){const t=atob(e),r=new Uint8Array(t.length);for(let a=0;a<t.length;a++)r[a]=t.charCodeAt(a);return r}async function Ct(){const e=new TextEncoder().encode(Nr);return crypto.subtle.importKey("raw",e,{name:"HMAC",hash:"SHA-256"},!1,["sign","verify"])}async function Da(e){const t=await Ct(),r=Be($e(e)),a=await crypto.subtle.sign("HMAC",t,r);return Se(new Uint8Array(a))}async function zr(e,t){const r=await Ct(),a=Be($e(e)),o=ce(t);return crypto.subtle.verify("HMAC",r,o,a)}function Hr(e){const t=e.replace(/[^0-9a-f]/gi,""),r=new Uint8Array(t.length/2);for(let a=0;a<t.length;a+=2)r[a/2]=parseInt(t.substr(a,2),16);return r}async function _t(){const e=Hr(Lr);return crypto.subtle.importKey("raw",e,{name:"AES-GCM"},!1,["encrypt","decrypt"])}async function Pa(e){const t=await _t(),r=crypto.getRandomValues(new Uint8Array(12)),a=Be($e(e)),o=await crypto.subtle.encrypt({name:"AES-GCM",iv:r},t,a);return{ivB64:Se(r),cipherB64:Se(new Uint8Array(o))}}async function Vr(e,t){const r=await _t(),a=ce(e),o=ce(t),i=await crypto.subtle.decrypt({name:"AES-GCM",iv:a},r,o),s=new TextDecoder().decode(i);return JSON.parse(s)}const ee={x:64,y:128,z:64},Ue={height:1.8,width:.6,initialYaw:Math.PI,eyeHeight:1.7,speed:{walk:4,sprint:6},jump:8,gravity:-24,swim:{accel:14,verticalAccel:12,drag:3.2,maxSpeed:3.6,sprintMultiplier:1.5,gravityScale:.18,floatBand:1.25,floatStrength:4,surfaceSnapStrength:10,sinkBias:.6,maxEmergeStepOut:2.8,stepOutHeadroom:1.01,emergeLiftSpeed:6,emergeNudgeSpeed:2.4}},Ma={reach:5},Na=(.22+.18)*(2/3);function Le(){if(typeof navigator>"u")return!1;const e=(navigator.userAgent||"").toLowerCase();return/android|iphone|ipad|ipod|iemobile|mobile|blackberry|bb10|silk|kindle/.test(e)?!0:!!(navigator.platform==="MacIntel"&&(navigator.maxTouchPoints||0)>1)}function $r(){if(typeof navigator>"u")return!1;const e=navigator.userAgent,t=/Safari/i.test(e),r=/Chrome|CriOS|Chromium|Edg|OPR|FxiOS/i.test(e);return t&&!r}function Oa(){return $r()&&!Le()}const Br="/assets/bg_img-DPvUbRQE.png";function Ur({value:e,onChange:t,disabled:r=!1}){const a=C.useRef([]),o=He(e)??H[0],i=H.findIndex(p=>p.id===o.id),s=p=>{const g=H[p];g&&(t(g.chunkCount),a.current[p]?.focus())},l=(p,g)=>{let d=null;p.key==="ArrowRight"||p.key==="ArrowDown"?d=(g+1)%H.length:p.key==="ArrowLeft"||p.key==="ArrowUp"?d=(g-1+H.length)%H.length:p.key==="Home"?d=0:p.key==="End"&&(d=H.length-1),d!==null&&(p.preventDefault(),s(d))};return n.jsx("div",{className:"world-size-picker",role:"radiogroup","aria-label":"World size",children:H.map((p,g)=>{const d=p.id===o.id,x=p.side,w=x*x,A=Math.floor(w/2);return n.jsxs("button",{ref:y=>{a.current[g]=y},type:"button",role:"radio","aria-checked":d,"aria-label":`${p.label}, ${p.side} by ${p.side} chunks`,tabIndex:g===i?0:-1,disabled:r,className:`world-size-picker__option${d?" world-size-picker__option--selected":""}`,onClick:()=>t(p.chunkCount),onKeyDown:y=>l(y,g),children:[n.jsx("span",{className:"world-size-picker__topline",children:n.jsx("span",{className:"world-size-picker__name",children:p.label})}),n.jsx("span",{className:"world-size-picker__map",style:{gridTemplateColumns:`repeat(${x}, minmax(0, 1fr))`},"aria-hidden":"true",children:Array.from({length:w},(y,m)=>n.jsx("span",{className:`world-size-picker__cell${m===A?" world-size-picker__cell--center":""}`},`${p.id}-${m}`))}),n.jsxs("span",{className:"world-size-picker__meta",children:[p.chunkCount," chunks"]})]},p.id)})})}const ge=52;function at(){return n.jsx("span",{"aria-hidden":"true",style:{width:16,height:16,border:"2px solid currentColor",borderTopColor:"transparent",borderRadius:"50%",animation:"mycraft-button-spin 0.8s linear infinite",boxSizing:"border-box",display:"block",flex:"0 0 auto"}})}function ie(){window.__requestGameEntryPointerLock?.()}function Xr(){const e=f(c=>c.gameStarted),t=f(c=>c.setGameStarted),r=f(c=>c.chunkCount),a=f(c=>c.setChunkCount),o=f(c=>c.setInGame),i=f(c=>c.setPaused),s=f(c=>c.setLoading),l=f(c=>c.setStartupStage),p=f(c=>c.setStartupError),g=f(c=>c.startupStage),d=f(c=>c.startupError),x=f(c=>c.loading),w=()=>p(null),[A,y]=C.useState(()=>Ne(r)),[m,u]=C.useState(!1),[h,j]=C.useState(null),v=C.useRef(null);C.useEffect(()=>{y(Ne(r))},[r]),C.useEffect(()=>{const c=R=>{v.current&&!v.current.contains(R.target)&&u(!1)};return m&&document.addEventListener("mousedown",c),()=>{document.removeEventListener("mousedown",c)}},[m]),C.useEffect(()=>{x||(j(null),l(null))},[x,l]);const S=x?h:null;if(e&&S===null)return null;const b=async()=>{if(Le()){alert("Please use desktop for better experience.");return}try{w(),j("load"),o(!1),i(!1),s(!0),qe(),ie();const c=document.createElement("input");c.type="file",c.accept="application/json",c.oncancel=()=>{s(!1)},c.oninput=()=>{ie()},c.onchange=async()=>{const R=c.files?.[0];if(!R){s(!1);return}ie();const O=await R.text();let B;try{B=JSON.parse(O)}catch{alert("Invalid JSON file."),s(!1);return}const T=B;let V;if(T.kind!=="MyCraftWorld"){alert("Not a MyCraft world save."),s(!1);return}if(T.version!==2||T.encAlg!==Or){alert("Save file version not supported."),s(!1);return}if(T.publicKeyId!==Mr||T.signatureAlg!==Pr){alert("Save file not recognized (metadata mismatch)."),s(!1);return}if(!T.ivB64||!T.cipherB64||!T.signatureB64){alert("Save file missing fields (iv/cipher/signature)."),s(!1);return}try{V=await Vr(T.ivB64,T.cipherB64)}catch(F){console.error("Decryption failed:",F),alert("Save file decryption failed. The file may be corrupted."),s(!1);return}const $=T.signatureB64;if(typeof $!="string"||!$){alert("Save file missing signature."),s(!1);return}try{const F=ce($);if(Se(F)!==$){alert("Save signature is malformed (base64 altered)."),s(!1);return}if(!await zr(V,$)){alert("Save signature verification failed (data may be corrupted)."),s(!1);return}}catch(F){console.error("Signature verification error:",F),alert("Unable to verify save signature. The file may be corrupted or browser crypto is unavailable."),s(!1);return}const k=V.settings.chunkSize;if(!k||typeof k.x!="number"||typeof k.y!="number"||typeof k.z!="number"){alert("Save file missing chunk size."),s(!1);return}if(k.x!==ee.x||k.y!==ee.y||k.z!==ee.z){alert(`Save chunk size ${k.x}x${k.y}x${k.z} does not match game chunk size ${ee.x}x${ee.y}x${ee.z}.`),s(!1);return}const _e=He(V.settings.chunkCount);if(!_e){const F=H.map(I=>I.label).join(", ");alert(`Save world size is not supported. Choose one of: ${F}.`),s(!1);return}if(!Array.isArray(V.chunks)||V.chunks.length===0){alert("Save has no chunks."),s(!1);return}const ke=k.x*k.y*k.z;for(const F of V.chunks){if(!F||typeof F!="object"){alert("Save chunk entry invalid."),s(!1);return}const{key:I,cx:de,cy:pe,cz:Te,size:ae,voxelsB64:U}=F;if(typeof I!="string"||`${de},${pe},${Te}`!==I){alert("Save chunk key mismatch."),s(!1);return}if(!ae||ae.x!==k.x||ae.y!==k.y||ae.z!==k.z){alert("Save chunk size mismatch."),s(!1);return}if(typeof U!="string"||!U){alert("Save chunk data missing."),s(!1);return}try{if(ce(U).length!==ke){alert("Save chunk data corrupted (length mismatch)."),s(!1);return}}catch(q){console.error("Chunk decode error:",q),alert("Save chunk data is not valid base64."),s(!1);return}}const re=V.inventory;if(re){const F=Array.isArray(re.slots)?re.slots:[];if(F.length!==9){alert("Save inventory invalid (must have 9 slots)."),s(!1);return}if(et(F.map(I=>({blockId:I&&(I.blockId===null||typeof I.blockId=="number")?I.blockId:null,count:Math.max(0,Math.floor(I&&typeof I.count=="number"?I.count:0))}))),typeof re.selectedSlot=="number"){const I=Math.max(0,Math.min(8,Math.floor(re.selectedSlot)));f.getState().setSelectedSlot(I)}}else et(Array.from({length:9},()=>({blockId:null,count:0}))),f.getState().setSelectedSlot(0);window.__WORLD_SNAPSHOT=V,window.__WORLD_SNAPSHOT_VERIFIED=!0,a(_e.chunkCount),t(!0)},c.click(),ie()}catch(c){console.error("Load world failed:",c),alert("Failed to load world save."),s(!1)}},_=Le(),E=()=>{if(_){alert("Please use desktop.");return}w(),a(A),delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED,j("new"),o(!1),i(!1),s(!0),qe(),ie(),t(!0)};return n.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"16px 0",boxSizing:"border-box",overflowY:"auto",backgroundImage:`url(${Br})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",color:"#f8f9fa",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[n.jsx("div",{style:{position:"absolute",inset:0,background:"rgba(8, 13, 18, 0.76)",backdropFilter:"blur(2px)"}}),n.jsxs("div",{style:{width:"100%",maxWidth:480,margin:"0 16px",padding:"clamp(20px, 5vw, 32px)",borderRadius:16,background:"rgba(15, 23, 32, 0.94)",border:"1px solid rgba(148,163,184,0.16)",boxShadow:"0 24px 60px rgba(0,0,0,0.48)",backdropFilter:"blur(20px)",position:"relative",zIndex:1,boxSizing:"border-box",maxHeight:"calc(100dvh - 32px)",overflowY:"auto"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"clamp(16px, 4vw, 24px)",paddingBottom:16,borderBottom:"1px solid rgba(255,255,255,0.06)",flexWrap:"wrap",gap:8},children:[n.jsx("div",{style:{fontSize:"clamp(24px, 6vw, 28px)",fontWeight:800,letterSpacing:0,color:"#f8fafc"},children:"MyCraft"}),n.jsxs("div",{ref:v,style:{position:"relative",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("div",{onClick:()=>u(!m),style:{opacity:1,fontSize:14,fontWeight:700,color:"#e2e8f0",cursor:"pointer",display:"flex",alignItems:"center",gap:6,padding:"6px 12px",borderRadius:8,transition:"all 0.2s ease",userSelect:"none",background:"rgba(148,163,184,0.1)",border:"1px solid rgba(148,163,184,0.2)"},onMouseOver:c=>{c.currentTarget.style.opacity="1",c.currentTarget.style.background="rgba(148,163,184,0.2)",c.currentTarget.style.borderColor="rgba(148,163,184,0.3)",c.currentTarget.style.transform="translateY(-1px)"},onMouseOut:c=>{c.currentTarget.style.opacity="1",c.currentTarget.style.background="rgba(148,163,184,0.1)",c.currentTarget.style.borderColor="rgba(148,163,184,0.2)",c.currentTarget.style.transform="translateY(0)"},children:["Player Control",n.jsx("span",{style:{fontSize:10,transform:m?"rotate(180deg)":"rotate(0deg)",transition:"transform 0.2s ease"},children:"▼"})]}),m&&n.jsxs("div",{style:{position:"absolute",top:"100%",right:0,marginTop:8,minWidth:"clamp(240px, 70vw, 320px)",maxWidth:"min(90vw, 320px)",padding:"clamp(12px, 3vw, 16px)",background:"rgba(12, 18, 26, 0.98)",border:"1px solid rgba(148,163,184,0.18)",borderRadius:"clamp(8px, 2vw, 12px)",boxShadow:"0 12px 32px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",backdropFilter:"blur(20px)",zIndex:10,animation:"fadeIn 0.2s ease-out",transform:"translateX(min(0px, calc(-100% + 100vw - 32px)))"},children:[n.jsx("div",{style:{fontSize:"clamp(11px, 2.5vw, 12px)",fontWeight:600,color:"#e2e8f0",marginBottom:"clamp(8px, 2vw, 12px)",textAlign:"center",letterSpacing:.5},children:"PLAYER CONTROLS"}),n.jsxs("div",{style:{display:"grid",gap:"clamp(16px, 4vw, 20px)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[n.jsx("span",{style:{fontSize:"clamp(12px, 2.8vw, 13px)",color:"#cbd5e1",marginTop:"clamp(8px, 2vw, 12px)"},children:"Movement"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridTemplateRows:"repeat(2, 1fr)",gap:"clamp(3px, 1vw, 4px)",width:"clamp(90px, 22vw, 108px)",height:"clamp(60px, 14vw, 72px)"},children:[n.jsx("div",{}),n.jsx("kbd",{style:{width:"100%",height:"100%",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:"W"}),n.jsx("div",{}),n.jsx("kbd",{style:{width:"100%",height:"100%",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:"A"}),n.jsx("kbd",{style:{width:"100%",height:"100%",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:"S"}),n.jsx("kbd",{style:{width:"100%",height:"100%",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center"},children:"D"})]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"clamp(12px, 2.8vw, 13px)",color:"#cbd5e1"},children:"Sprint"}),n.jsx("kbd",{style:{padding:"0 clamp(16px, 4vw, 20px)",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",height:"clamp(28px, 7vw, 34px)",display:"flex",alignItems:"center",justifyContent:"center"},children:"SHIFT"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"clamp(12px, 2.8vw, 13px)",color:"#cbd5e1"},children:"Jump / Surface"}),n.jsx("kbd",{style:{padding:"0 clamp(28px, 7vw, 36px)",background:"#1f2937",color:"#f3f4f6",borderRadius:"clamp(4px, 1vw, 6px)",fontSize:"clamp(10px, 2.2vw, 12px)",fontWeight:700,border:"1px solid rgba(255,255,255,0.15)",boxShadow:"0 2px 4px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.1)",height:"clamp(28px, 7vw, 34px)",minWidth:"clamp(90px, 22vw, 110px)",display:"flex",alignItems:"center",justifyContent:"center"},children:"SPACE"})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"clamp(12px, 2.8vw, 13px)",color:"#cbd5e1"},children:"Break Block"}),n.jsxs("div",{style:{position:"relative",width:"clamp(50px, 12vw, 60px)",height:"clamp(35px, 8vw, 42px)",background:"#2a3442",borderRadius:"clamp(15px, 4vw, 18px) clamp(15px, 4vw, 18px) clamp(8px, 2vw, 10px) clamp(8px, 2vw, 10px)",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 3px 12px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"default"},children:[n.jsx("div",{style:{position:"absolute",left:"12%",top:"15%",width:"35%",height:"50%",background:"#2dd4bf",borderRadius:"clamp(6px, 1.5vw, 8px) clamp(6px, 1.5vw, 8px) clamp(2px, 0.5vw, 3px) clamp(2px, 0.5vw, 3px)",border:"2px solid rgba(94,234,212,0.7)",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.24)"}}),n.jsx("div",{style:{position:"absolute",right:"12%",top:"15%",width:"35%",height:"50%",background:"#3d4654",borderRadius:"clamp(6px, 1.5vw, 8px) clamp(6px, 1.5vw, 8px) clamp(2px, 0.5vw, 3px) clamp(2px, 0.5vw, 3px)",border:"1px solid rgba(255,255,255,0.15)",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.1)"}}),n.jsx("div",{style:{position:"absolute",left:"50%",top:"15%",width:"12%",height:"35%",background:"#576070",borderRadius:"clamp(1px, 0.3vw, 2px)",transform:"translateX(-50%)",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.2)"}})]})]}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsx("span",{style:{fontSize:"clamp(12px, 2.8vw, 13px)",color:"#cbd5e1"},children:"Place Block"}),n.jsxs("div",{style:{position:"relative",width:"clamp(50px, 12vw, 60px)",height:"clamp(35px, 8vw, 42px)",background:"#2a3442",borderRadius:"clamp(15px, 4vw, 18px) clamp(15px, 4vw, 18px) clamp(8px, 2vw, 10px) clamp(8px, 2vw, 10px)",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 3px 12px rgba(0,0,0,0.5), inset 0 1px 3px rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",cursor:"default"},children:[n.jsx("div",{style:{position:"absolute",left:"12%",top:"15%",width:"35%",height:"50%",background:"#3d4654",borderRadius:"clamp(6px, 1.5vw, 8px) clamp(6px, 1.5vw, 8px) clamp(2px, 0.5vw, 3px) clamp(2px, 0.5vw, 3px)",border:"1px solid rgba(255,255,255,0.15)",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.3), 0 1px 2px rgba(255,255,255,0.1)"}}),n.jsx("div",{style:{position:"absolute",right:"12%",top:"15%",width:"35%",height:"50%",background:"#2dd4bf",borderRadius:"clamp(6px, 1.5vw, 8px) clamp(6px, 1.5vw, 8px) clamp(2px, 0.5vw, 3px) clamp(2px, 0.5vw, 3px)",border:"2px solid rgba(94,234,212,0.7)",boxShadow:"inset 0 1px 3px rgba(0,0,0,0.24)"}}),n.jsx("div",{style:{position:"absolute",left:"50%",top:"15%",width:"12%",height:"35%",background:"#576070",borderRadius:"clamp(1px, 0.3vw, 2px)",transform:"translateX(-50%)",border:"1px solid rgba(255,255,255,0.1)",boxShadow:"inset 0 1px 2px rgba(0,0,0,0.2)"}})]})]})]})]})]})]}),d&&n.jsxs("div",{role:"alert",style:{marginBottom:"clamp(16px, 4vw, 24px)",padding:"16px 18px",color:"#fee2e2",background:"rgba(69, 10, 10, 0.94)",border:"1px solid rgba(248, 113, 113, 0.45)",borderRadius:12,boxShadow:"0 14px 36px rgba(0,0,0,0.28)",fontFamily:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",fontSize:12,lineHeight:1.5},children:[n.jsx("div",{style:{fontWeight:800,fontSize:13,marginBottom:4},children:"MyCraft could not start"}),n.jsxs("div",{style:{overflowWrap:"anywhere"},children:[d.name,": ",d.message]}),n.jsxs("details",{style:{marginTop:8},children:[n.jsx("summary",{style:{cursor:"pointer"},children:"Startup diagnostics"}),n.jsxs("div",{style:{marginTop:6,whiteSpace:"pre-wrap",overflowWrap:"anywhere"},children:["Stage: ",d.stageLabel," (",d.stage,")",`
`,"Viewport: ",d.viewport.width,"×",d.viewport.height," CSS px",`
`,"DPR: ",d.dpr,`
`,"Platform: ",d.platform,d.warmup&&`
Warmup frames: ${d.warmup.warmupFramesSubmitted}/${d.warmup.warmupFrameCount}
GPU fence: ${d.warmup.gpuFenceCompleted?"completed":d.warmup.gpuFenceCreated?"pending":"not created"}
Warmup elapsed: ${Math.round(d.warmup.warmupElapsedMs)} ms`]}),d.stack&&n.jsx("pre",{style:{margin:"8px 0 0",whiteSpace:"pre-wrap",overflowWrap:"anywhere"},children:d.stack})]})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"clamp(16px, 4vw, 24px)"},children:[n.jsxs("div",{style:{display:"grid",gap:12},children:[n.jsx("div",{style:{fontSize:14,fontWeight:600,color:"#e2e8f0",textTransform:"uppercase",letterSpacing:.5},children:"World Size"}),n.jsx(Ur,{value:A,onChange:y,disabled:x}),n.jsx("div",{style:{fontSize:12,color:"#64748b",fontStyle:"italic",lineHeight:1.4}})]}),n.jsx("button",{onClick:E,disabled:x,"aria-busy":S==="new",style:{padding:"clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",background:"#2dd4bf",color:"#061311",border:"1px solid rgba(94,234,212,0.5)",borderRadius:12,cursor:"pointer",fontWeight:700,fontSize:"clamp(14px, 3.5vw, 16px)",letterSpacing:.5,textTransform:"uppercase",boxShadow:"0 10px 24px rgba(0,0,0,0.32)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",overflow:"hidden",height:ge,minHeight:ge,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"20px",whiteSpace:"nowrap"},onMouseOver:c=>{c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow="0 14px 30px rgba(0,0,0,0.38)",c.currentTarget.style.background="#5eead4"},onMouseOut:c=>{c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="0 10px 24px rgba(0,0,0,0.32)",c.currentTarget.style.background="#2dd4bf"},onMouseDown:c=>{c.currentTarget.style.transform="translateY(0) scale(0.98)"},onMouseUp:c=>{c.currentTarget.style.transform="translateY(-2px) scale(1)"},children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:10},children:[S==="new"&&n.jsx(at,{}),S==="new"?`${g?Oe[g]:"Preparing new world"}…`:"Launch New World"]})}),n.jsxs("div",{style:{marginTop:"clamp(16px, 4vw, 24px)",padding:"clamp(16px, 4vw, 20px)",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,display:"grid",gap:16,position:"relative"},children:[n.jsx("div",{style:{position:"absolute",top:-8,left:16,background:"#141f2a",padding:"4px 12px",borderRadius:8,fontSize:11,fontWeight:600,color:"#cbd5e1",letterSpacing:.5,border:"1px solid rgba(255,255,255,0.06)"},children:"Alternatively"}),n.jsx("div",{style:{fontSize:12,color:"#64748b",fontStyle:"italic",lineHeight:1.4},children:'You can also load a world saved by yourself or others. Click "Load Saved World", and select the saved JSON file.'}),n.jsx("button",{onClick:b,disabled:x,"aria-busy":S==="load",style:{padding:"clamp(12px, 3vw, 16px) clamp(20px, 5vw, 24px)",background:"#1f2937",color:"#f8fafc",border:"1px solid rgba(148,163,184,0.22)",borderRadius:12,cursor:"pointer",fontWeight:700,fontSize:"clamp(14px, 3.5vw, 16px)",letterSpacing:.5,textTransform:"uppercase",boxShadow:"0 10px 24px rgba(0,0,0,0.28)",transition:"all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",outline:"none",position:"relative",overflow:"hidden",height:ge,minHeight:ge,boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center",lineHeight:"20px",whiteSpace:"nowrap"},onMouseOver:c=>{c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow="0 14px 30px rgba(0,0,0,0.34)",c.currentTarget.style.background="#253244"},onMouseOut:c=>{c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="0 10px 24px rgba(0,0,0,0.28)",c.currentTarget.style.background="#1f2937"},onMouseDown:c=>{c.currentTarget.style.transform="translateY(0) scale(0.98)"},onMouseUp:c=>{c.currentTarget.style.transform="translateY(-2px) scale(1)"},children:n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:10},children:[S==="load"&&n.jsx(at,{}),S==="load"?`${g?Oe[g]:"Loading saved world"}…`:"Load Saved World"]})})]})]})]}),n.jsx("style",{children:`
          @keyframes mycraft-button-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `})]})}function Gr(){const e=f(a=>a.loading),t=f(a=>a.gameStarted),r=f(a=>a.inGame);return!e||!t||!r?null:n.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.75)",backdropFilter:"blur(8px)",zIndex:9999,fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",padding:"32px",background:"rgba(15, 23, 32, 0.96)",border:"1px solid rgba(148,163,184,0.16)",borderRadius:"16px",boxShadow:"0 24px 60px rgba(0,0,0,0.48)"},children:[n.jsx("div",{style:{width:"48px",height:"48px",border:"4px solid rgba(255,255,255,0.1)",borderTop:"4px solid #2dd4bf",borderRadius:"50%",animation:"spin 1s linear infinite"}}),n.jsx("div",{style:{color:"#f8f9fa",fontSize:"16px",fontWeight:600,letterSpacing:"0.5px"},children:"Loading..."})]}),n.jsx("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `})]})}function Zr({view:e,time:t}){return n.jsx(At,{diagnosticView:e,diagnosticTime:t})}const J=42,nt=3,qr=.7,ot=.02,Yr=.15,it=.008,Kr=25,st=.02,Jr=12,ct=.08,Qr=2,he=.015,lt=6,dt=-.3,ea=8,pt=.012;function K(e){let t=e>>>0;return()=>{t+=1831565813;let r=Math.imul(t^t>>>15,1|t);return r^=r+Math.imul(r^r>>>7,61|r),((r^r>>>14)>>>0)/4294967296}}function je(e,t,r,a=4,o=2,i=.5){let s=1,l=0,p=0,g=t,d=r;for(let x=0;x<a;x++)l+=e(g,d)*s,p+=s,g*=o,d*=o,s*=i;return p>0?l/p:0}function ut(e,t,r){const a=Math.min(1,Math.max(0,(r-e)/(t-e)));return a*a*(3-2*a)}function ta(e,t){const r=K(e^2654435769),a=K(e^2246822507),o=K(e^3266489909),i=K(e^668265263),s=K(e^2722868950),l=K(e^1003724304),p=K(e^439041101),g=K(e^1601842716),d=Y(r),x=Y(a),w=Y(o),A=Y(i),y=Y(s),m=Y(l),u=Y(p),h=Y(g),j=t||7*ee.x/2;return(v,S)=>{const b=y(v*he,S*he)*lt,_=m(v*he,S*he)*lt,E=v+b,c=S+_,O=Math.sqrt(v*v+S*S)/j,B=d(v*ot,S*ot),T=qr+B*Yr;if(O>=T){const U=je((Ht,Vt)=>h(Ht*pt,Vt*pt),v,S,3,2,.5),q=Math.max(0,O-T),Dt=Math.max(1e-6,1-T),Pt=Math.min(1,q/Dt),Mt=ut(0,1,Pt),Ge=2,Nt=Ge+(25-Ge)*Mt,Ot=U*3,Lt=Nt+Ot,zt=J-Math.floor(Lt);return{height:Math.max(nt+1,zt),isOcean:!0}}const $=1-ut(T*.6,T*.95,O),k=J+$*20,ke=je((U,q)=>x(U*it,q*it),E,c,4,2,.6)*Kr*$,F=je((U,q)=>w(U*st,q*st),E,c,3,2,.5)*Jr*$,de=A(E*ct,c*ct)*Qr,pe=u(v*.01,S*.01),Te=pe<dt?(pe-dt)*ea*$:0,ae=k+ke+F+de+Te;return{height:Math.floor(Math.max(nt+1,ae)),isOcean:!1}}}function ra(e,t,r,a){return ta(r,a)(e,t)}function Z(e,t,r,a){return ra(e,t,r,a).height}function aa(e,t=0,r=0,a){const o=[{x:t,z:r},{x:0,z:0},{x:10,z:10},{x:-10,z:-10},{x:20,z:0},{x:0,z:20}];let i={x:t,z:r,height:J-10};for(const s of o){const l=Z(s.x,s.z,e,a);l>J&&l>i.height&&(i={x:s.x,z:s.z,height:l})}if(i.height<=J)for(const s of o){const l=Z(s.x,s.z,e,a);l>i.height&&(i={x:s.x,z:s.z,height:l})}return{x:i.x,y:i.height+1+Ue.eyeHeight,z:i.z}}const La=1.333,za=.001,Ha=.002,Va=24,$a=4,na=53,De=[.075,.018,.005],Pe=[.012,.028,.04],Ba=[De[0]+Pe[0],De[1]+Pe[1],De[2]+Pe[2]],le=[{directionX:.978148,directionZ:.207912,amplitude:.135,wavelength:86,steepness:.34,speed:1,phase:.37},{directionX:.913545,directionZ:.406737,amplitude:.115,wavelength:72.5,steepness:.33,speed:1.01,phase:4.81},{directionX:.996195,directionZ:.087156,amplitude:.1,wavelength:63,steepness:.32,speed:.99,phase:2.16},{directionX:.777146,directionZ:.62932,amplitude:.086,wavelength:54,steepness:.31,speed:1.02,phase:5.62},{directionX:.970296,directionZ:-.241922,amplitude:.073,wavelength:47.5,steepness:.3,speed:.98,phase:1.28},{directionX:.615661,directionZ:.788011,amplitude:.063,wavelength:41,steepness:.29,speed:1.01,phase:3.43},{directionX:.951057,directionZ:.309017,amplitude:.054,wavelength:35.5,steepness:.28,speed:1.03,phase:.91},{directionX:.390731,directionZ:.920505,amplitude:.046,wavelength:30.5,steepness:.27,speed:.99,phase:5.07},{directionX:-.104528,directionZ:.994522,amplitude:.085,wavelength:76,steepness:.31,speed:1,phase:2.74},{directionX:-.469472,directionZ:.882948,amplitude:.071,wavelength:61,steepness:.3,speed:1.02,phase:4.12},{directionX:.139173,directionZ:.990268,amplitude:.06,wavelength:50.5,steepness:.29,speed:.98,phase:1.67},{directionX:-.731354,directionZ:.681998,amplitude:.05,wavelength:43.5,steepness:.28,speed:1.01,phase:5.91},{directionX:-.309017,directionZ:.951057,amplitude:.042,wavelength:37,steepness:.27,speed:1.03,phase:2.35},{directionX:-.898794,directionZ:.438371,amplitude:.035,wavelength:32,steepness:.26,speed:.99,phase:.18},{directionX:-.707107,directionZ:.707107,amplitude:.062,wavelength:118,steepness:.3,speed:.96,phase:3.06},{directionX:-.34202,directionZ:.939693,amplitude:.055,wavelength:101,steepness:.29,speed:1.04,phase:5.44},{directionX:.275637,directionZ:.961262,amplitude:.049,wavelength:91,steepness:.28,speed:.97,phase:1.02},{directionX:-.970296,directionZ:.241922,amplitude:.043,wavelength:82,steepness:.27,speed:1.05,phase:4.26},{directionX:.642788,directionZ:-.766044,amplitude:.037,wavelength:68,steepness:.26,speed:.95,phase:2.71},{directionX:-.866025,directionZ:-.5,amplitude:.031,wavelength:56,steepness:.25,speed:1.02,phase:.53},{directionX:.5,directionZ:.866025,amplitude:.026,wavelength:45,steepness:.24,speed:1.06,phase:5.09},{directionX:-.173648,directionZ:-.984808,amplitude:.021,wavelength:39.5,steepness:.23,speed:.98,phase:3.88},{directionX:.848048,directionZ:-.529919,amplitude:.04,wavelength:27.4,steepness:.25,speed:1.01,phase:3.79},{directionX:.829038,directionZ:.559193,amplitude:.036,wavelength:24.8,steepness:.24,speed:.98,phase:1.11},{directionX:.573576,directionZ:-.819152,amplitude:.033,wavelength:22.6,steepness:.23,speed:1.03,phase:4.54},{directionX:.45399,directionZ:.891007,amplitude:.03,wavelength:20.7,steepness:.22,speed:1,phase:2.02},{directionX:.990268,directionZ:-.139173,amplitude:.027,wavelength:19.1,steepness:.21,speed:.97,phase:5.36},{directionX:.190809,directionZ:.981627,amplitude:.024,wavelength:17.8,steepness:.2,speed:1.02,phase:.66},{directionX:.241922,directionZ:-.970296,amplitude:.022,wavelength:16.5,steepness:.19,speed:1.04,phase:3.08},{directionX:-.819152,directionZ:.573576,amplitude:.02,wavelength:15.4,steepness:.19,speed:.99,phase:1.49},{directionX:.956305,directionZ:.292372,amplitude:.018,wavelength:14.4,steepness:.18,speed:1.01,phase:4.97},{directionX:-.374607,directionZ:-.927184,amplitude:.016,wavelength:13.5,steepness:.17,speed:1.03,phase:2.58},{directionX:-.559193,directionZ:.829038,amplitude:.014,wavelength:12.7,steepness:.16,speed:.98,phase:.43},{directionX:.731354,directionZ:-.681998,amplitude:.013,wavelength:11.9,steepness:.16,speed:1.02,phase:5.18},{directionX:-.987688,directionZ:.156434,amplitude:.012,wavelength:11.2,steepness:.15,speed:1,phase:2.89},{directionX:.529919,directionZ:.848048,amplitude:.011,wavelength:10.5,steepness:.14,speed:1.04,phase:.97},{directionX:-.838671,directionZ:-.544639,amplitude:.01,wavelength:9.9,steepness:.14,speed:.97,phase:4.38},{directionX:-.190809,directionZ:.981627,amplitude:.009,wavelength:9.3,steepness:.13,speed:1.01,phase:1.92},{directionX:-.017452,directionZ:-.999848,amplitude:.008,wavelength:8.8,steepness:.12,speed:1.03,phase:5.77},{directionX:-.999391,directionZ:-.034899,amplitude:.007,wavelength:8.3,steepness:.11,speed:.99,phase:3.31}];function L(e,t,r,a,o,i){const s=Math.hypot(e,t);return{directionX:e/s,directionZ:t/s,amplitude:r,wavelength:na/s,steepness:a,speed:o,phase:i,tileCyclesX:e,tileCyclesZ:t}}const oa=[L(3,1,.035,.2,.94,.73),L(-3,4,.028,.19,1.02,3.18),L(5,-3,.022,.18,1.08,5.27),L(4,7,.016,.16,.88,1.42),L(-8,5,.012,.15,1.12,4.44),L(7,-10,.009,.14,.96,2.05),L(-12,9,.0065,.12,1.05,6.01),L(13,14,.0045,.11,.91,3.89),L(-18,11,.0032,.1,1.09,.24),L(21,-16,.0022,.09,.98,4.91),L(-24,-13,.0016,.08,1.14,2.77),L(27,23,.001,.07,1.01,5.68)],ia=9.81,kt=64,Tt=74e-6,Ua=.5,te=.5,sa=le.reduce((e,t)=>e+Math.abs(t.amplitude),0),Ft=te/sa;function ca(e){const t=Math.PI*2/e.wavelength,r=ia*t*Math.tanh(Math.min(t*kt,20)),a=Tt*t*t*t;return Math.sqrt(r+a)*e.speed}function Xa(e,t,r){let a=0;for(const o of le){const i=Math.PI*2/o.wavelength,s=ca(o),l=i*(o.directionX*e+o.directionZ*t)-s*r+o.phase;a+=o.amplitude*Ft*Math.sin(l)}return Math.max(-te,Math.min(te,a))}function Ga(){return te}function la(){return`
    const float OCEAN_WATER_DEPTH = ${kt.toFixed(6)};
    const float OCEAN_SURFACE_TENSION_OVER_DENSITY = ${Tt.toFixed(9)};
    const float OCEAN_WAVE_HALF_RANGE = ${te.toFixed(6)};
  `}function da(){return`${le.map((e,t)=>`
    const vec2 OCEAN_WAVE_DIRECTION_${t} = vec2(${e.directionX.toFixed(6)}, ${e.directionZ.toFixed(6)});
    const float OCEAN_WAVE_AMPLITUDE_${t} = ${(e.amplitude*Ft).toFixed(6)};
    const float OCEAN_WAVE_LENGTH_${t} = ${e.wavelength.toFixed(6)};
    const float OCEAN_WAVE_STEEPNESS_${t} = ${e.steepness.toFixed(6)};
    const float OCEAN_WAVE_SPEED_${t} = ${e.speed.toFixed(6)};
    const float OCEAN_WAVE_PHASE_${t} = ${e.phase.toFixed(6)};
  `).join(`
`)}
    ${la()}

    // The resolved grid and the unresolved slope field use the same smooth
    // spectral cutoff. The lower floor transfers a fading band into the
    // material response instead of making it disappear at one screen-space
    // distance, which would turn a bright sun lobe into a horizontal seam.
    float oceanWaveLod(float footprint, float wavelength) {
      float cyclesPerPixel = footprint / max(wavelength, 0.001);
      float fadeStart = wavelength >= 28.0 ? 0.52 : wavelength >= 12.0 ? 0.34 : 0.22;
      float fadeEnd = wavelength >= 28.0 ? 1.25 : wavelength >= 12.0 ? 0.92 : 0.68;
      float resolved = 1.0 - smoothstep(fadeStart, fadeEnd, cyclesPerPixel);
      return mix(0.10, 1.0, resolved);
    }

    // Shared parametric displacement for both rasterization and optical
    // shading. The fragment path supplies the interpolated base-plane
    // position, so view/refraction inputs do not inherit the mesh's triangle
    // interpolation at an inner/outer ocean transition.
    vec3 oceanWaveDisplacement(vec3 worldPosition, float time, float footprint) {
      vec3 displaced = vec3(0.0);
      vec2 xz = worldPosition.xz;
      ${le.map((e,t)=>`
        {
          float k = 6.28318530718 / OCEAN_WAVE_LENGTH_${t};
          float depthK = min(k * OCEAN_WATER_DEPTH, 20.0);
          float depthExp = exp(min(2.0 * depthK, 20.0));
          float depthTanh = (depthExp - 1.0) / (depthExp + 1.0);
          float omega = sqrt(max(
            9.81 * k * depthTanh +
            OCEAN_SURFACE_TENSION_OVER_DENSITY * k * k * k,
            0.0
          )) * OCEAN_WAVE_SPEED_${t} * uWaveSpeed;
          float phase = k * dot(OCEAN_WAVE_DIRECTION_${t}, xz) - omega * time + OCEAN_WAVE_PHASE_${t};
          float amplitude = OCEAN_WAVE_AMPLITUDE_${t} * min(uWaveAmp, 1.0) *
            oceanWaveLod(footprint, OCEAN_WAVE_LENGTH_${t});
          float c = cos(phase);
          displaced.xz += OCEAN_WAVE_DIRECTION_${t} * OCEAN_WAVE_STEEPNESS_${t} * amplitude * uWaveChop * c;
          displaced.y += amplitude * sin(phase);
        }
      `).join(`
`)}
      displaced.y = clamp(displaced.y, -OCEAN_WAVE_HALF_RANGE, OCEAN_WAVE_HALF_RANGE);
      return displaced;
    }

    // Detail-only domain warp. Macro displacement remains a stationary sum of
    // physical wave components so its analytic derivatives and CPU height
    // query agree exactly. This warp is reserved for sub-grid normal detail
    // and broken shoreline foam.
    vec2 oceanDetailWarp(vec2 xz, float time) {
      float phaseA = dot(xz, vec2(0.027, 0.019)) - time * 0.18;
      float phaseB = dot(xz, vec2(-0.021, 0.031)) + time * 0.13;
      float phaseC = dot(xz, vec2(0.011, -0.037)) - time * 0.09;
      float a = sin(phaseA);
      float b = cos(phaseB);
      float c = sin(phaseC);
      return vec2(1.65 * (a + 0.62 * b), 1.35 * (b - 0.70 * c));
    }
  `}function Za(){return oa.map((e,t)=>`
    const vec2 CAUSTIC_WAVE_DIRECTION_${t} = vec2(${e.directionX.toFixed(6)}, ${e.directionZ.toFixed(6)});
    const float CAUSTIC_WAVE_AMPLITUDE_${t} = ${e.amplitude.toFixed(6)};
    const float CAUSTIC_WAVE_LENGTH_${t} = ${e.wavelength.toFixed(6)};
    const float CAUSTIC_WAVE_STEEPNESS_${t} = ${e.steepness.toFixed(6)};
    const float CAUSTIC_WAVE_SPEED_${t} = ${e.speed.toFixed(6)};
    const float CAUSTIC_WAVE_PHASE_${t} = ${e.phase.toFixed(6)};
  `).join(`
`)}const pa=.5,qa=["aboveOpaque","aboveCutout","belowOpaque","belowCutout","boundaryOpaque","boundaryCutout"];function ua(e,t,r,a=pa){if(!Number.isFinite(e)||!Number.isFinite(t)||!Number.isFinite(r)||!Number.isFinite(a)||e>t||a<0)return"boundary";const o=r-a,i=r+a;return e>i?"above":t<o?"below":"boundary"}function Ya(e){return e.startsWith("above")?"above":e.startsWith("below")?"below":"boundary"}const Ee=1,Re=1.333,fa=14,ft=Math.tan(Math.asin(Ee/Re)),Ae=new xt(new Uint8Array([255,255,255,255]),1,1,bt,Bt);Ae.colorSpace=wt;Ae.needsUpdate=!0;const Ce=new xt(new Float32Array([0,0,0,0]),1,1,bt,Ut);Ce.colorSpace=wt;Ce.needsUpdate=!0;const D={uForwardRefractionActive:{value:0},uForwardWaterLevel:{value:43.5},uForwardRefractionTime:{value:0},uForwardRefractionWaveAmp:{value:1},uForwardRefractionWaveChop:{value:1},uForwardRefractionWaveSpeed:{value:1},uForwardRefractionResolution:{value:new X(1,1)},uForwardProjectionMatrix:{value:new vt},uForwardCameraUnderwater:{value:!1},uForwardRefractionOutputReceiver:{value:0},uForwardRefractionRenderMode:{value:0},uForwardSunVisibility:{value:Ae},uForwardReceiverWorld:{value:Ce}},Xe="mycraftForwardRefraction",ze="mycraftForwardRefractionMrt",me="mycraftForwardRefractionMedium",xe="mycraftForwardRefractionReceiverMaterial",be="mycraftForwardRefractionColorMaterial";function Ka(e,t){e.updateWorldMatrix(!0,!1);const r=new qt().setFromObject(e);return ua(r.min.y,r.max.y,t,te)}function Ja(e){D.uForwardWaterLevel.value=e.waterLevel,D.uForwardRefractionTime.value=e.time,D.uForwardRefractionWaveAmp.value=e.waveAmp,D.uForwardRefractionWaveChop.value=e.waveChop,D.uForwardRefractionWaveSpeed.value=e.waveSpeed,D.uForwardCameraUnderwater.value=e.cameraUnderwater}function Qa(e,t){D.uForwardRefractionResolution.value.set(Math.max(1,Math.floor(e)),Math.max(1,Math.floor(t)))}function en(e){D.uForwardProjectionMatrix.value.copy(e.projectionMatrix)}function tn(e){D.uForwardRefractionActive.value=e?1:0}function rn(e){D.uForwardRefractionOutputReceiver.value=e?1:0}function an(e){D.uForwardRefractionRenderMode.value=e}function nn(e){D.uForwardSunVisibility.value=e??Ae}function on(e){D.uForwardReceiverWorld.value=e??Ce}function sn(e,t={}){Object.assign(e.uniforms,D),e.userData[Xe]=!0,t.mrt!==!1?e.userData[ze]=!0:delete e.userData[ze]}function It(e){return e.userData[Xe]===!0}function cn(e){return e.userData[ze]===!0}const gt=1;function ga(e){if(!(e instanceof Xt)&&!(e instanceof Gt)&&!(e instanceof Zt))return null;const t=e.material;if(!t)return null;const r=Array.isArray(t)?t:[t];return r.length>0?r:null}class ln{participants=new Set;previousLayerMasks=new Map;register(t,r={}){const a=t,o=ga(t);return!o||!o.every(i=>It(i))?!1:(this.previousLayerMasks.has(a)||this.previousLayerMasks.set(a,a.layers.mask),r.forwardOnly?a.layers.set(gt):a.layers.enable(gt),r.medium?a.userData[me]=r.medium:delete a.userData[me],r.receiverMaterial&&r.colorMaterial?(a.userData[xe]=r.receiverMaterial,a.userData[be]=r.colorMaterial):(delete a.userData[xe],delete a.userData[be]),this.participants.add(a),!0)}registerTree(t){t.traverse(r=>{this.register(r)})}unregister(t){const r=t;this.participants.delete(r),delete r.userData[me],delete r.userData[xe],delete r.userData[be];const a=this.previousLayerMasks.get(r);a!==void 0&&(r.layers.mask=a,this.previousLayerMasks.delete(r))}unregisterTree(t){t.traverse(r=>{this.unregister(r)})}getParticipants(){return this.participants}get size(){return this.participants.size}clear(){for(const t of this.participants){const r=this.previousLayerMasks.get(t);r!==void 0&&(t.layers.mask=r),delete t.userData[me],delete t.userData[xe],delete t.userData[be]}this.participants.clear(),this.previousLayerMasks.clear()}}class dn{frustum=new Yt;projectionView=new vt;sourceCamera=new Kt;cameraWorld=new N;cameraForward=new N;ray=new N;tangent=new N;sourceDirection=new N;up=new N(0,1,0);acceptsAll=!0;waterLevel=0;halfAngle=Math.PI*.5;update(t,r){this.waterLevel=r,t.updateMatrixWorld(),t.getWorldPosition(this.cameraWorld),t.getWorldDirection(this.cameraForward);let a=0,o=0;for(let s=-1;s<=1;s+=1)for(let l=-1;l<=1;l+=1)this.ray.set(l,s,-1).unproject(t).sub(this.cameraWorld).normalize(),this.transportUpwardRay(this.ray)&&(o+=1,a=Math.max(a,Math.acos(Q.clamp(this.cameraForward.dot(this.sourceDirection),-1,1))));const i=Q.degToRad(5);this.halfAngle=a+i,this.acceptsAll=o===0||this.halfAngle>=Q.degToRad(89.5),!this.acceptsAll&&(this.halfAngle=Math.min(this.halfAngle,Q.degToRad(89.25)),this.sourceCamera.fov=Q.radToDeg(this.halfAngle*2),this.sourceCamera.aspect=1,this.sourceCamera.near=Math.max(.01,t.near),this.sourceCamera.far=Math.max(this.sourceCamera.near+1,t.far),this.sourceCamera.updateProjectionMatrix(),this.projectionView.multiplyMatrices(this.sourceCamera.projectionMatrix,t.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projectionView))}intersectsBox(t){return this.acceptsAll||t.isEmpty()||!Number.isFinite(t.min.x)||!Number.isFinite(t.min.y)||!Number.isFinite(t.min.z)||!Number.isFinite(t.max.x)||!Number.isFinite(t.max.y)||!Number.isFinite(t.max.z)?!0:t.max.y<=this.waterLevel-te?!1:this.frustum.intersectsBox(t)}getDiagnostics(){return{acceptsAll:this.acceptsAll,halfAngleDegrees:Q.radToDeg(this.halfAngle),waterLevel:this.waterLevel}}transportUpwardRay(t){const r=t.y;if(r<=1e-5)return!1;this.tangent.copy(t).addScaledVector(this.up,-r);const a=this.tangent.length(),o=Re/Ee*a;return o>=1-1e-6?!1:(this.tangent.multiplyScalar(o/Math.max(a,1e-6)),this.sourceDirection.copy(this.tangent),this.sourceDirection.y=Math.sqrt(Math.max(0,1-o*o)),this.sourceDirection.normalize(),!0)}}const ha=le.map((e,t)=>`
  {
    float k = 6.28318530718 / OCEAN_WAVE_LENGTH_${t};
    float depthK = min(k * OCEAN_WATER_DEPTH, 20.0);
    float depthExp = exp(min(2.0 * depthK, 20.0));
    float depthTanh = (depthExp - 1.0) / (depthExp + 1.0);
    float omega = sqrt(max(
      9.81 * k * depthTanh +
      OCEAN_SURFACE_TENSION_OVER_DENSITY * k * k * k,
      0.0
    )) * OCEAN_WAVE_SPEED_${t} * uForwardRefractionWaveSpeed;
    float phase = k * dot(OCEAN_WAVE_DIRECTION_${t}, baseXZ) -
      omega * uForwardRefractionTime + OCEAN_WAVE_PHASE_${t};
    float amplitude = OCEAN_WAVE_AMPLITUDE_${t} *
      min(uForwardRefractionWaveAmp, 1.0) *
      oceanWaveLod(footprint, OCEAN_WAVE_LENGTH_${t});
    float q = OCEAN_WAVE_STEEPNESS_${t} * uForwardRefractionWaveChop;
    float s = sin(phase);
    float c = cos(phase);
    float dx = OCEAN_WAVE_DIRECTION_${t}.x;
    float dz = OCEAN_WAVE_DIRECTION_${t}.y;
    float phaseDx = k * dx;
    float phaseDz = k * dz;
    displacement.xz += OCEAN_WAVE_DIRECTION_${t} * q * amplitude * c;
    displacement.y += amplitude * s;
    tangentX += vec3(
      -q * amplitude * dx * phaseDx * s,
      amplitude * phaseDx * c,
      -q * amplitude * dz * phaseDx * s
    );
    tangentZ += vec3(
      -q * amplitude * dx * phaseDz * s,
      amplitude * phaseDz * c,
      -q * amplitude * dz * phaseDz * s
    );
  }
`).join(`
`);function ma(){return`
    uniform float uForwardRefractionActive;
    uniform float uForwardWaterLevel;
    uniform float uForwardRefractionTime;
    uniform float uForwardRefractionWaveAmp;
    uniform float uForwardRefractionWaveChop;
    uniform float uForwardRefractionWaveSpeed;
    uniform vec2 uForwardRefractionResolution;
    uniform mat4 uForwardProjectionMatrix;
    uniform bool uForwardCameraUnderwater;
    varying vec3 vForwardRefractionSourceWorld;
    varying float vForwardRefractionSignedHeight;

    #define uWaveAmp uForwardRefractionWaveAmp
    #define uWaveChop uForwardRefractionWaveChop
    #define uWaveSpeed uForwardRefractionWaveSpeed
    ${da()}
    #undef uWaveAmp
    #undef uWaveChop
    #undef uWaveSpeed

    float forwardRefractionPixelFootprint(vec3 surfacePosition) {
      vec3 toCamera = cameraPosition - surfacePosition;
      float distanceToSurface = length(toCamera);
      float surfaceCos = abs(toCamera.y) / max(distanceToSurface, 0.001);
      float pixelAngle = 2.0 / max(
        abs(uForwardProjectionMatrix[1][1]) * uForwardRefractionResolution.y,
        1.0
      );
      return distanceToSurface * pixelAngle / max(surfaceCos, 0.08);
    }

    vec3 forwardRefractionSurfacePoint(vec2 baseXZ) {
      vec3 base = vec3(baseXZ.x, uForwardWaterLevel, baseXZ.y);
      float footprint = forwardRefractionPixelFootprint(base);
      return base + oceanWaveDisplacement(
        base,
        uForwardRefractionTime,
        footprint
      );
    }

    vec2 forwardRefractionBaseAtWorldXZ(vec2 worldXZ) {
      vec2 baseXZ = worldXZ;
      for (int iteration = 0; iteration < 1; iteration++) {
        vec3 surface = forwardRefractionSurfacePoint(baseXZ);
        baseXZ += worldXZ - surface.xz;
      }
      return baseXZ;
    }

    vec3 forwardRefractionSurfaceAtWorldXZ(vec2 worldXZ) {
      return forwardRefractionSurfacePoint(
        forwardRefractionBaseAtWorldXZ(worldXZ)
      );
    }

    void forwardRefractionSurfaceFrame(
      vec2 baseXZ,
      out vec3 surfacePoint,
      out vec3 surfaceNormal
    ) {
      vec3 base = vec3(baseXZ.x, uForwardWaterLevel, baseXZ.y);
      float footprint = forwardRefractionPixelFootprint(base);
      vec3 displacement = vec3(0.0);
      vec3 tangentX = vec3(1.0, 0.0, 0.0);
      vec3 tangentZ = vec3(0.0, 0.0, 1.0);
      ${ha}
      displacement.y = clamp(
        displacement.y,
        -OCEAN_WAVE_HALF_RANGE,
        OCEAN_WAVE_HALF_RANGE
      );
      surfacePoint = base + displacement;
      surfaceNormal = normalize(cross(tangentZ, tangentX));
    }

    vec3 forwardRefractionSolveTangentInterface(
      vec3 sourceWorld,
      vec3 planePoint,
      vec3 orientedNormal
    ) {
      float cameraPlaneDistance = max(
        dot(planePoint - cameraPosition, orientedNormal),
        0.001
      );
      float sourcePlaneDistance = max(
        dot(sourceWorld - planePoint, orientedNormal),
        0.001
      );
      vec3 cameraProjection = cameraPosition +
        orientedNormal * cameraPlaneDistance;
      vec3 sourceProjection = sourceWorld -
        orientedNormal * sourcePlaneDistance;
      vec3 tangentOffset = sourceProjection - cameraProjection;
      float tangentLength = length(tangentOffset);
      vec3 tangent = tangentOffset / max(tangentLength, 0.001);
      float cameraIor = uForwardCameraUnderwater
        ? ${Re.toFixed(6)}
        : ${Ee.toFixed(6)};
      float sourceIor = uForwardCameraUnderwater
        ? ${Ee.toFixed(6)}
        : ${Re.toFixed(6)};

      float cameraReach = cameraPlaneDistance * ${ft.toFixed(9)};
      float sourceReach = sourcePlaneDistance * ${ft.toFixed(9)};
      float low = uForwardCameraUnderwater
        ? 0.0
        : max(tangentLength - sourceReach, 0.0);
      float high = uForwardCameraUnderwater
        ? min(tangentLength, cameraReach)
        : tangentLength;

      for (int iteration = 0; iteration < ${fa}; iteration++) {
        float middle = (low + high) * 0.5;
        float sourceTangentDistance = tangentLength - middle;
        float cameraSine = middle / sqrt(
          cameraPlaneDistance * cameraPlaneDistance + middle * middle
        );
        float sourceSine = sourceTangentDistance / sqrt(
          sourcePlaneDistance * sourcePlaneDistance +
          sourceTangentDistance * sourceTangentDistance
        );
        if (cameraIor * cameraSine < sourceIor * sourceSine) low = middle;
        else high = middle;
      }
      return cameraProjection + tangent * ((low + high) * 0.5);
    }

    vec4 forwardRefractionProject(vec3 sourceWorld, vec4 directClip) {
      vForwardRefractionSourceWorld = sourceWorld;
      vForwardRefractionSignedHeight = 0.0;
      if (uForwardRefractionActive < 0.5) return directClip;

      float signedHeight = sourceWorld.y - uForwardWaterLevel;
      if (abs(signedHeight) <= OCEAN_WAVE_HALF_RANGE) {
        vec3 sourceSurface = forwardRefractionSurfaceAtWorldXZ(sourceWorld.xz);
        signedHeight = sourceWorld.y - sourceSurface.y;
      }
      vForwardRefractionSignedHeight = signedHeight;
      bool oppositeMedium = uForwardCameraUnderwater
        ? signedHeight > 0.0
        : signedHeight < 0.0;
      if (!oppositeMedium) return directClip;

      float normalOrientation = uForwardCameraUnderwater ? 1.0 : -1.0;
      vec3 meanInterface = forwardRefractionSolveTangentInterface(
        sourceWorld,
        vec3(cameraPosition.x, uForwardWaterLevel, cameraPosition.z),
        vec3(0.0, normalOrientation, 0.0)
      );

      // Re-anchor the exact flat-interface root on the live parametric
      // surface, then repeat once. This is a local-plane Newton refinement of
      // Fermat's stationary path, not a screen-space receiver search.
      vec2 firstBase = forwardRefractionBaseAtWorldXZ(meanInterface.xz);
      vec3 firstPoint;
      vec3 firstNormal;
      forwardRefractionSurfaceFrame(firstBase, firstPoint, firstNormal);
      firstNormal *= normalOrientation;
      vec3 firstInterface = forwardRefractionSolveTangentInterface(
        sourceWorld,
        firstPoint,
        firstNormal
      );

      vec2 refinedBase = forwardRefractionBaseAtWorldXZ(firstInterface.xz);
      vec3 refinedPoint;
      vec3 refinedNormal;
      forwardRefractionSurfaceFrame(refinedBase, refinedPoint, refinedNormal);
      refinedNormal *= normalOrientation;
      vec3 apparentInterface = forwardRefractionSolveTangentInterface(
        sourceWorld,
        refinedPoint,
        refinedNormal
      );

      vec3 apparentDirection = normalize(apparentInterface - cameraPosition);
      float sourceDistance = length(sourceWorld - cameraPosition);
      vec3 apparentWorld = cameraPosition + apparentDirection * sourceDistance;
      return projectionMatrix * viewMatrix * vec4(apparentWorld, 1.0);
    }
  `}function xa(){return`
    uniform float uForwardRefractionActive;
    uniform bool uForwardCameraUnderwater;
    uniform float uForwardRefractionOutputReceiver;
    uniform float uForwardRefractionRenderMode;
    uniform sampler2D uForwardSunVisibility;
    uniform sampler2D uForwardReceiverWorld;
    varying vec3 vForwardRefractionSourceWorld;
    varying float vForwardRefractionSignedHeight;

    // ShaderMaterial's WebGL2 conversion supplies location 0 for
    // gl_FragColor. Extra attachments are guarded by the GLSL version so the
    // exact same material remains a valid WebGL1 fallback.
    #if __VERSION__ >= 300
      layout(location = 1) out vec4 forwardRefractionNonDirect;
      layout(location = 2) out vec4 forwardRefractionDirect;
    #endif

    void forwardRefractionWriteMrt(
      vec3 sourceWorld,
      vec3 nonDirectRadiance,
      vec3 directRadiance
    ) {
      gl_FragColor = vec4(sourceWorld, 1.0);
      #if __VERSION__ >= 300
        forwardRefractionNonDirect = vec4(nonDirectRadiance, 1.0);
        forwardRefractionDirect = vec4(directRadiance, 1.0);
      #endif
    }

    void forwardRefractionDiscardCameraMedium() {
      if (uForwardRefractionActive < 0.5) return;
      if (
        uForwardCameraUnderwater
          ? vForwardRefractionSignedHeight <= 0.0
          : vForwardRefractionSignedHeight >= 0.0
      ) {
        discard;
      }
    }

    void forwardRefractionAccumulateVisibility(
      vec2 uv,
      vec3 expectedSource,
      float positionTolerance,
      inout float weightedVisibility,
      inout float weightSum
    ) {
      vec4 receiver = texture2D(uForwardReceiverWorld, uv);
      if (receiver.a <= 0.0) return;
      float sourceError = length(receiver.rgb - expectedSource);
      float sourceWeight = 1.0 - smoothstep(
        positionTolerance,
        positionTolerance * 2.0,
        sourceError
      );
      weightedVisibility += texture2D(uForwardSunVisibility, uv).r * sourceWeight;
      weightSum += sourceWeight;
    }

    float forwardRefractionSunVisibility(vec2 resolution, vec3 sourceWorld) {
      vec2 safeResolution = max(resolution, vec2(1.0));
      vec2 uv = gl_FragCoord.xy / safeResolution;
      vec2 texel = 1.0 / safeResolution;
      float center = texture2D(uForwardSunVisibility, uv).r;

      // The forward optical map changes the receiver-space footprint of one
      // apparent pixel. Reconstruct irradiance only from neighbours whose
      // stored source point agrees with that local Jacobian. This integrates
      // the pixel footprint without crossing a refracted silhouette or block
      // discontinuity.
      vec3 sourceDx = dFdx(sourceWorld);
      vec3 sourceDy = dFdy(sourceWorld);
      float sourceFootprint = max(length(sourceDx), length(sourceDy));
      float positionTolerance = max(0.0025, sourceFootprint * 0.35);
      float weightedVisibility = center * 4.0;
      float weightSum = 4.0;
      forwardRefractionAccumulateVisibility(
        uv + vec2(texel.x, 0.0),
        sourceWorld + sourceDx,
        positionTolerance,
        weightedVisibility,
        weightSum
      );
      forwardRefractionAccumulateVisibility(
        uv - vec2(texel.x, 0.0),
        sourceWorld - sourceDx,
        positionTolerance,
        weightedVisibility,
        weightSum
      );
      forwardRefractionAccumulateVisibility(
        uv + vec2(0.0, texel.y),
        sourceWorld + sourceDy,
        positionTolerance,
        weightedVisibility,
        weightSum
      );
      forwardRefractionAccumulateVisibility(
        uv - vec2(0.0, texel.y),
        sourceWorld - sourceDy,
        positionTolerance,
        weightedVisibility,
        weightSum
      );
      return weightedVisibility / max(weightSum, 1.0);
    }

    vec3 forwardRefractionStoreReceiver(vec3 sourceWorld) {
      return sourceWorld;
    }
  `}function pn(e){if(It(e))return;const t=e.onBeforeCompile,r=e.customProgramCacheKey.bind(e);e.onBeforeCompile=(a,o)=>{t.call(e,a,o),Object.assign(a.uniforms,D),a.vertexShader=`${ma()}
${a.vertexShader}`.replace("#include <project_vertex>",`
          vec4 forwardLocalPosition = vec4(transformed, 1.0);
          #ifdef USE_BATCHING
            forwardLocalPosition = batchingMatrix * forwardLocalPosition;
          #endif
          #ifdef USE_INSTANCING
            forwardLocalPosition = instanceMatrix * forwardLocalPosition;
          #endif
          vec4 forwardWorldPosition = modelMatrix * forwardLocalPosition;
          vec4 mvPosition = viewMatrix * forwardWorldPosition;
          vec4 forwardDirectClip = projectionMatrix * mvPosition;
          vec4 forwardApparentClip = forwardRefractionProject(
            forwardWorldPosition.xyz,
            forwardDirectClip
          );
          gl_Position = forwardApparentClip;
        `),a.fragmentShader=`${xa()}
${a.fragmentShader}`.replace("void main() {",`void main() {
  forwardRefractionDiscardCameraMedium();
  if (uForwardRefractionOutputReceiver > 0.5) {
    gl_FragColor = vec4(
      forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
      1.0
    );
    return;
  }`)},e.customProgramCacheKey=()=>`${r()}|forward-refraction-v1`,e.userData[Xe]=!0,e.needsUpdate=!0}const ba=["overview","player-spawn","player-ridge","player-gully","sky"],Wt=Ue.eyeHeight;function wa(e){return e==="localhost"||e==="127.0.0.1"||e==="::1"||e==="[::1]"}function va(e){return e!=null&&ba.includes(e)}function ya(e){if(!wa(e.hostname))return null;const t=new URLSearchParams(e.search);if(t.get("debug")!=="1")return null;const r=t.get("view");if(!va(r))return null;const a=t.get("time");if(!a)return{view:r};const i={sunrise:.02,noon:.25,sunset:.48,midnight:.75}[a.toLowerCase()]??Number.parseFloat(a);return Number.isFinite(i)?{view:r,time:(i%1+1)%1}:null}function Sa(e,t,r,a){let o={x:t,z:r,height:Z(t,r,e,a)};if(o.height>J+1)return o;for(let i=1;i<=8;i+=1){for(let s=-i;s<=i;s+=1)for(let l=-i;l<=i;l+=1){if(Math.abs(s)!==i&&Math.abs(l)!==i)continue;const p=t+s,g=r+l,d=Z(p,g,e,a);d>o.height&&(o={x:p,z:g,height:d})}if(o.height>J+1)return o}return o}function jt(e,t){const r=t.x-e.x,a=t.y-e.y,o=t.z-e.z,i=Math.max(1e-6,Math.hypot(r,o));return{yaw:Math.atan2(-r,-o),pitch:Math.atan2(a,i)}}function ht(e,t,r,a){const s=Z(t,r,e,a),l=[new X(0,-1),new X(1,0),new X(0,1),new X(-1,0),new X(1,-1).normalize(),new X(1,1).normalize(),new X(-1,1).normalize(),new X(-1,-1).normalize()];let p=l[0],g=Number.POSITIVE_INFINITY;for(const d of l){const x=t+d.x*16,w=r+d.y*16,A=Z(x,w,e,a),y=s-A,m=A<=J+2?1e3:0,u=Math.max(0,-y)*2,h=Math.abs(y-4)+u+m;h<g&&(g=h,p=d)}return new N(p.x*16,-2.5,p.y*16)}function Me(e,t,r,a,o){const i=Sa(e,r,a,t),s=new N(i.x,i.height+1+Wt,i.z),l=i.x+o.x,p=i.z+o.z,g=Z(l,p,e,t),d=new N(l,g+1+o.y,p),x=jt(s,d);return{position:s,...x}}function Ea(e,t){const r=aa(t.seed,0,0,t.worldRadius);switch(e){case"overview":{const a=new N(r.x,Z(r.x,r.z,t.seed,t.worldRadius)+1,r.z),o=a.clone().add(new N(12,Ue.height*3,12));return{position:o,...jt(o,a)}}case"player-spawn":return Me(t.seed,t.worldRadius,r.x,r.z,ht(t.seed,r.x,r.z,t.worldRadius));case"player-ridge":return Me(t.seed,t.worldRadius,20,-18,ht(t.seed,20,-18,t.worldRadius));case"player-gully":return Me(t.seed,t.worldRadius,-22,18,new N(4,-1.5,-6));case"sky":return{position:new N(r.x,Z(r.x,r.z,t.seed,t.worldRadius)+Wt+1,r.z),yaw:0,pitch:Q.degToRad(65)}}}function un(e,t,r){const a=Ea(t,r);e.rotation.order="YXZ",e.position.copy(a.position),e.rotation.set(a.pitch,a.yaw,0),e.updateMatrixWorld(!0)}function Ra(){const e=ya(window.location);return e?n.jsx(Zr,{view:e.view,time:e.time}):n.jsxs(n.Fragment,{children:[n.jsx(At,{}),n.jsx(Xr,{}),n.jsx(Ar,{}),n.jsx(Cr,{}),n.jsx(_r,{}),n.jsx(kr,{}),n.jsx(Tr,{}),n.jsx(Dr,{}),n.jsx(Fr,{}),n.jsx(Gr,{})]})}$t.createRoot(document.getElementById("root")).render(n.jsx(C.StrictMode,{children:n.jsx(Ra,{})}));export{Et as $,Ee as A,da as B,ee as C,le as D,na as E,gt as F,oa as G,la as H,Za as I,ta as J,Ua as K,Xa as L,Ja as M,Ga as N,Ha as O,Ka as P,Oa as Q,Ir as R,Ue as S,J as T,Ma as U,Na as V,Ba as W,Fa as X,Ia as Y,Wa as Z,Ve as _,qa as a,pn as a0,nn as a1,dr as a2,f as a3,Ta as a4,aa as a5,un as a6,He as a7,St as a8,Ne as a9,Se as aa,ja as ab,Da as ac,Pa as ad,Mr as ae,Pr as af,Or as ag,$a as b,Va as c,sn as d,xa as e,ma as f,Ya as g,La as h,za as i,Pe as j,De as k,te as l,Re as m,dn as n,ln as o,D as p,Qa as q,en as r,on as s,tn as t,an as u,rn as v,be as w,cn as x,me as y,xe as z};
