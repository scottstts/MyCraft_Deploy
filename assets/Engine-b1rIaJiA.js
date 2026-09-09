import{v as qt,w as Yr,t as fr,x as qr,A as jr,y as et,V as q,G as Q,M as ie,B as Tt,z as Ie,i as A,r as mr,E as $r,D as Ve,l as re,m as Pe,I as N,J as Ce,S as He,K as ht,Q as pr,U as Kr,a as V,u as k,n as fe,T as Qr,X as ma,Y as xi,Z as Jr,H as rt,W as We,_ as pe,N as $i,p as Ae,$ as gi,k as es,a0 as jt,O as Ki,a1 as vr,o as _i,a2 as Qi,a3 as gr,a4 as ts,a5 as is,q as as,P as rs,a6 as ss,a7 as os,a8 as ns,a9 as ls,aa as cs,ab as hs,ac as us,ad as li,ae as Ji,F as Ge,af as ds,ag as E,ah as fs,ai as ms,aj as wr,ak as ps,al as pa,am as yr,j as vs,an as gs,ao as ws,ap as ys,aq as va}from"./three-diuLMvqP.js";import{F as Mt,C as R,a as _t,g as xs,f as ea,b as _e,c as we,W as xr,d as ta,e as ia,h as Se,R as X,O as aa,i as ra,j as Ss,k as bs,l as Ui,A as kt,m as At,n as Ms,o as sa,p as Et,s as dt,q as ga,r as Cs,t as wa,u as Si,v as Kt,w as Pt,x as Ts,y as Rs,z as ya,B as Ds,D as Sr,E as Ht,G as xa,H as ks,I as As,J as Hi,K as Xe,L as Es,M as Ps,N as br,P as oa,Q as Fs,S as ue,T as ee,U as Mr,V as Oi,X as Bs,Y as Sa,Z as zs,_ as Is,$ as Ni,a0 as Ls,a1 as ba,a2 as Ws,a3 as De,a4 as Vs,a5 as _s,a6 as Us,a7 as Cr,a8 as Tr,a9 as Hs,aa as Os,ab as Ns,ac as Gs,ad as Xs,ae as Zs,af as Ys,ag as qs}from"./index-CLOYltW0.js";import{U as js,P as $s,F as Ks,S as Rr,E as Qs,R as Js,O as eo}from"./three-examples-B33R7ZzJ.js";import"./react-BTd0cbev.js";import"./vendor-DsoqlaW1.js";function to(){const n=new qt,e=new Yr(4212838,.1);return e.layers.enable(Mt),n.add(e),n}function io(n=1){const e=new fr(70,n,.01,1024);return e.position.set(0,80,0),e}const ao=16e5,ro=1.7;function Ma(n,e,t){const i=Number.isFinite(n)?Math.max(1,n):1,r=Number.isFinite(e)?Math.max(1,e):1,s=Math.min(t,ro,Math.sqrt(ao/(i*r)));return{width:i,height:r,dpr:Number.isFinite(s)&&s>0?s:1}}class so{renderer;constructor(e){this.renderer=new qr({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.syncCanvasSize(e,!0),this.renderer.setClearColor(1055277),this.renderer.toneMapping=jr,this.renderer.toneMappingExposure=.92,this.renderer.outputColorSpace=et,this.renderer.useLegacyLights!==void 0&&(this.renderer.useLegacyLights=!1),this.renderer.shadowMap.enabled=!1}syncCanvasSize(e,t=!1){const i=typeof window>"u"?e.clientWidth:window.innerWidth,r=typeof window>"u"?e.clientHeight:window.innerHeight;if(i<=0||r<=0){if(!t)return null;const o=Math.max(1,i||e.clientWidth||1),l=Math.max(1,r||e.clientHeight||1);return this.applyCanvasSize(o,l,1)}const s=typeof window>"u"?1:window.devicePixelRatio,a=Ma(i,r,s);return this.applyCanvasSize(a.width,a.height,a.dpr)}applyCanvasSize(e,t,i){const r=Ma(e,t,i);return this.renderer.setDrawingBufferSize(r.width,r.height,r.dpr),r}getCanvasSize(){const e=this.renderer.getSize(new q);return{width:e.x,height:e.y}}getPixelRatio(){return this.renderer.getPixelRatio()}onResize(){const e=this.renderer.domElement;return this.syncCanvasSize(e)}render(e,t){this.renderer.render(e,t)}getRenderer(){return this.renderer}dispose(){this.renderer.dispose()}}function Ca(n,e,t){if(n<0||n>=R.x||e<0||e>=R.y||t<0||t>=R.z)throw new Error(`Invalid chunk coordinates: (${n}, ${e}, ${t}). Must be within (0,0,0) to (${R.x-1}, ${R.y-1}, ${R.z-1})`);return e*(R.x*R.z)+t*R.x+n}function Ta(){return R.x*R.y*R.z}function Ra(n,e,t){return n>=0&&n<R.x&&e>=0&&e<R.y&&t>=0&&t<R.z}class oo{voxels;size;grassTuftPositions=null;constructor(e){this.size={...R};const t=Ta();if(e){if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==R.x||e.size.y!==R.y||e.size.z!==R.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${R.x}x${R.y}x${R.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels),this.grassTuftPositions=e.grassTuftPositions?new Uint16Array(e.grassTuftPositions):null}else this.voxels=new Uint8Array(t),this.voxels.fill(0)}get(e,t,i){if(!Ra(e,t,i))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${i})`);const r=Ca(e,t,i);return this.voxels[r]}set(e,t,i,r){if(!Ra(e,t,i))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${i})`);if(r<0||r>255)throw new Error(`Invalid block ID: ${r}. Must be 0-255.`);const s=Ca(e,t,i);this.voxels[s]!==r&&(this.grassTuftPositions=null),this.voxels[s]=r}getData(){const e={size:{...this.size},voxels:new Uint8Array(this.voxels)};return this.grassTuftPositions&&(e.grassTuftPositions=new Uint16Array(this.grassTuftPositions)),e}setFromData(e){const t=Ta();if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==R.x||e.size.y!==R.y||e.size.z!==R.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${R.x}x${R.y}x${R.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels),this.grassTuftPositions=e.grassTuftPositions?new Uint16Array(e.grassTuftPositions):null}getVoxelsArray(){return this.voxels}getGrassTuftPositions(){return this.grassTuftPositions}getSize(){return{...this.size}}fill(e){if(e<0||e>255)throw new Error(`Invalid block ID: ${e}. Must be 0-255.`);this.voxels.fill(e),this.grassTuftPositions=null}clear(){this.voxels.fill(0),this.grassTuftPositions=null}isEmpty(){return this.voxels.every(e=>e===0)}countBlocks(e){let t=0;for(let i=0;i<this.voxels.length;i++)this.voxels[i]===e&&t++;return t}getBlockStats(){const e=new Map;for(let t=0;t<this.voxels.length;t++){const i=this.voxels[t];e.set(i,(e.get(i)||0)+1)}return e}}function bi(n,e){return Math.floor(n/e)}function Mi(n,e){return(n%e+e)%e}function Ot(n,e,t){const i=bi(n,R.x),r=bi(e,R.y),s=bi(t,R.z),a=Mi(n,R.x),o=Mi(e,R.y),l=Mi(t,R.z);return{cx:i,cy:r,cz:s,lx:a,ly:o,lz:l}}function Le(n,e,t){return`${n},${e},${t}`}class na{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const i=this.listeners.get(e);return i.add(t),()=>{i.delete(t),i.size===0&&this.listeners.delete(e)}}once(e,t){const i=this.on(e,r=>{i(),t(r)});return i}off(e,t){const i=this.listeners.get(e);i&&(i.delete(t),i.size===0&&this.listeners.delete(e))}emit(e,t){const i=this.listeners.get(e);if(i){const r=Array.from(i);for(const s of r)try{s(t)}catch(a){console.error(`Error in event listener for '${String(e)}':`,a)}}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){const t=this.listeners.get(e);return t?t.size:0}eventNames(){return Array.from(this.listeners.keys())}}class no{blocks=new Map;nameToId=new Map;constructor(){this.initializeDefaults()}initializeDefaults(){const e=[{id:0,name:"air",opaque:!1,solid:!1,faces:{all:"air"}},{id:1,name:"grass",opaque:!0,solid:!0,faces:{top:"grass_top",bottom:"dirt",side:"grass_side"}},{id:2,name:"dirt",opaque:!0,solid:!0,faces:{all:"dirt"}},{id:3,name:"stone",opaque:!0,solid:!0,faces:{all:"cobblestone"}},{id:4,name:"sand",opaque:!0,solid:!0,faces:{all:"sand"}},{id:5,name:"water",opaque:!1,solid:!1,faces:{top:"water"}},{id:6,name:"wood",opaque:!0,solid:!0,faces:{top:"wood_top",bottom:"wood_top",side:"wood_side"}},{id:7,name:"leaves",opaque:!0,solid:!0,faces:{all:"tree_leaves"}},{id:8,name:"leaves_maple",opaque:!0,solid:!0,faces:{all:"cherry_leaves"}},{id:9,name:"grass_tuft",opaque:!1,solid:!1,faces:{all:"air"}}];for(const i of e)this.registerBlock(i);const t=this.getBlock(0);if(!t||t.opaque||t.solid)throw new Error("Block registry invariant violated: AIR (id=0) must be non-opaque and non-solid")}registerBlock(e){if(e.id<0||e.id>255)throw new Error(`Invalid block ID: ${e.id}. Must be 0-255.`);if(this.blocks.has(e.id))throw new Error(`Block ID ${e.id} already registered`);if(this.nameToId.has(e.name))throw new Error(`Block name '${e.name}' already registered`);this.blocks.set(e.id,e),this.nameToId.set(e.name,e.id)}getBlock(e){return this.blocks.get(e)}getBlockIdByName(e){return this.nameToId.get(e)}getAllBlocks(){return Array.from(this.blocks.values())}hasBlock(e){return this.blocks.has(e)}getBlockCount(){return this.blocks.size}validate(){const e=this.getBlock(0);if(!e)throw new Error("Registry validation failed: AIR block (id=0) not found");if(e.opaque||e.solid)throw new Error("Registry validation failed: AIR block must be non-opaque and non-solid");const t=Math.max(...this.blocks.keys());for(let i=0;i<=t;i++)if(!this.blocks.has(i))throw new Error(`Registry validation failed: Missing block ID ${i} - IDs must be contiguous`)}}let Ci=null;function wi(){return Ci||(Ci=new no),Ci}function ci(n){return wi().getBlock(n)}function Be(n){return wi().getBlockIdByName(n)}function lo(n){return n&&n.type==="CHUNK_DATA"&&typeof n.key=="string"&&n.payload}function co(n){return n&&n.type==="CHUNK_MESH"&&typeof n.key=="string"&&n.payload&&Ti(n.payload.opaque)&&Ti(n.payload.cutout)&&Ti(n.payload.transparent)}function Ti(n){return n&&n.positions instanceof Float32Array&&n.normals instanceof Float32Array&&n.uvs instanceof Float32Array&&n.ao instanceof Float32Array&&n.colors instanceof Float32Array&&(n.indices instanceof Uint16Array||n.indices instanceof Uint32Array)&&(!n.forwardIndices||Object.values(n.forwardIndices).every(e=>e instanceof Uint32Array))}const Da=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];class ho extends na{generatorWorker;mesherWorker;pendingRequests=new Set;atlasConfig=null;mesherInitialized=!1;loadedChunkKeys=new Set;initialBatch=null;worldRadius=null;destroyed=!1;constructor(){super(),this.generatorWorker=new Worker(new URL("/assets/generator.worker-D79msRdM.js",import.meta.url),{type:"module"}),this.generatorWorker.onmessage=e=>{try{this.handleWorkerResponse(e.data)}catch(t){this.reportWorkerError("generator",t)}},this.generatorWorker.onerror=e=>{this.reportWorkerError("generator",e)},this.mesherWorker=new Worker(new URL("/assets/mesher.worker-Bg-NA5hn.js",import.meta.url),{type:"module"}),this.mesherWorker.onmessage=e=>{try{this.handleWorkerResponse(e.data)}catch(t){this.reportWorkerError("mesher",t)}},this.mesherWorker.onerror=e=>{this.reportWorkerError("mesher",e)}}reportWorkerError(e,t){console.error(`[ChunkPipeline] ${e} worker error:`,t),this.emit("WORKER_ERROR",{worker:e,error:t})}beginInitialBatch(e){if(this.initialBatch)throw new Error("[ChunkPipeline] An initial batch is already active");this.initialBatch={expected:new Set(e),received:new Set,closed:!1},this.commitInitialBatchIfReady()}finishInitialBatch(){if(!this.initialBatch)throw new Error("[ChunkPipeline] finishInitialBatch called without beginInitialBatch");this.initialBatch.closed=!0,this.commitInitialBatchIfReady()}ingestChunkData(e,t){this.acceptChunkData(e,t)}setAtlasConfig(e,t){if(this.mesherInitialized)return;this.atlasConfig=e;const i={type:"INIT_MESHER",payload:{atlasConfig:e,blockRegistry:t}};this.mesherWorker.postMessage(i),this.mesherInitialized=!0}setWorldRadius(e){this.worldRadius=e}requestChunk(e,t,i,r){const s=Le(e,t,i);if(this.pendingRequests.has(s))return;this.pendingRequests.add(s);const a={type:"GEN_CHUNK",payload:{key:s,cx:e,cy:t,cz:i,seed:r,worldRadius:this.worldRadius||void 0}};this.generatorWorker.postMessage(a)}handleWorkerResponse(e){lo(e)?this.handleChunkDataResponse(e):co(e)?this.handleChunkMeshResponse(e):console.warn("[ChunkPipeline] Unknown worker response:",e)}handleChunkDataResponse(e){this.pendingRequests.delete(e.key),this.acceptChunkData(e.key,e.payload)}acceptChunkData(e,t){if(this.storeChunkForMeshing(e,t),this.loadedChunkKeys.add(e),this.initialBatch){this.emit("CHUNK_READY",{key:e,chunkData:t}),this.initialBatch.expected.has(e)&&this.initialBatch.received.add(e),this.commitInitialBatchIfReady();return}this.requestMeshAndLoadedNeighbors(e),this.emit("CHUNK_READY",{key:e,chunkData:t})}storeChunkForMeshing(e,t){if(!this.atlasConfig||!this.mesherInitialized)throw new Error("[ChunkPipeline] Atlas config must be set before meshing");const i={type:"STORE_CHUNK",payload:{key:e,voxels:t.voxels}};this.mesherWorker.postMessage(i)}commitInitialBatchIfReady(){const e=this.initialBatch;if(!(!e||!e.closed)){for(const t of e.expected)if(!e.received.has(t))return;this.initialBatch=null;for(const t of e.expected)this.postMeshChunk(t)}}requestMeshAndLoadedNeighbors(e){this.postMeshChunk(e);const[t,i,r]=e.split(",").map(s=>parseInt(s,10));for(const[s,a,o]of Da){const l=Le(t+s,i+a,r+o);this.loadedChunkKeys.has(l)&&this.postMeshChunk(l)}}postMeshChunk(e){const t={type:"MESH_CHUNK",payload:{key:e}};this.mesherWorker.postMessage(t)}handleChunkMeshResponse(e){this.emit("CHUNK_MESH",{key:e.key,response:e})}requestRemesh(e,t,i,r){const s=Le(e,t,i);this.storeChunkForMeshing(s,r),this.loadedChunkKeys.add(s),this.postMeshChunk(s)}removeChunk(e){if(this.destroyed)return;const t={type:"REMOVE_CHUNK",payload:{key:e}};if(this.mesherWorker.postMessage(t),!this.loadedChunkKeys.delete(e))return;const[i,r,s]=e.split(",").map(a=>parseInt(a,10));for(const[a,o,l]of Da){const c=Le(i+a,r+o,s+l);this.loadedChunkKeys.has(c)&&this.postMeshChunk(c)}}destroy(){this.destroyed||(this.destroyed=!0,this.generatorWorker.terminate(),this.mesherWorker.terminate(),this.pendingRequests.clear(),this.loadedChunkKeys.clear(),this.initialBatch=null)}}class uo extends na{chunks=new Map;chunkPipeline;seed=12345;overrideProvider=null;floodedAir=new Set;constructor(){super(),this.chunkPipeline=new ho,this.chunkPipeline.on("CHUNK_READY",({key:e,chunkData:t})=>{this.handleChunkReady(e,t)})}async handleChunkReady(e,t){const i=new oo;if(i.setFromData(t),this.overrideProvider)try{const h=await this.overrideProvider.getOverrides(e);this.applyOverrides(i,h)}catch(h){console.warn(`[World] Failed to load overrides for chunk ${e}:`,h)}const[r,s,a]=e.split(","),o=parseInt(r,10),l=parseInt(s,10),c=parseInt(a,10);this.chunks.set(e,i),this.emit("CHUNK_ADDED",{key:e,chunk:i,coords:{cx:o,cy:l,cz:c}})}ensureChunk(e,t,i){const r=Le(e,t,i),s=this.chunks.get(r);if(!s){this.chunkPipeline.requestChunk(e,t,i,this.seed);return}return s}getChunk(e,t,i){const r=Le(e,t,i);return this.chunks.get(r)}getChunkByKey(e){return this.chunks.get(e)}setChunk(e,t,i,r){const s=Le(e,t,i),a=this.chunks.has(s);this.chunks.set(s,r),a||this.emit("CHUNK_ADDED",{key:s,chunk:r,coords:{cx:e,cy:t,cz:i}})}removeChunk(e,t,i){const r=Le(e,t,i),s=this.chunks.delete(r);return s&&(this.chunkPipeline.removeChunk(r),this.emit("CHUNK_REMOVED",{key:r,coords:{cx:e,cy:t,cz:i}})),s}setBlock(e,t,i,r){const{cx:s,cy:a,cz:o,lx:l,ly:c,lz:h}=Ot(e,t,i),u=this.ensureChunk(s,a,o);if(!u){console.warn(`[World] Cannot set block at (${e}, ${t}, ${i}): chunk not ready yet`);return}const d=u.get(l,c,h);u.set(l,c,h,r),this.emit("BLOCK_CHANGED",{worldX:e,worldY:t,worldZ:i,oldBlockId:d,newBlockId:r,chunkKey:Le(s,a,o),localX:l,localY:c,localZ:h})}getBlock(e,t,i){const{cx:r,cy:s,cz:a,lx:o,ly:l,lz:c}=Ot(e,t,i),h=this.getChunk(r,s,a);return h?h.get(o,l,c):0}isBlockSolid(e,t,i){const{cx:r,cy:s,cz:a,lx:o,ly:l,lz:c}=Ot(e,t,i),h=this.getChunk(r,s,a);if(!h)return t<=80;const u=h.get(o,l,c),d=ci(u);return d?d.solid:!1}isBlockOpaque(e,t,i){const r=this.getBlock(e,t,i),s=ci(r);return s?s.opaque:!1}getLoadedChunkKeys(){return Array.from(this.chunks.keys())}getLoadedChunks(){return Array.from(this.chunks.values())}getLoadedChunkCount(){return this.chunks.size}addFloodedAir(e){for(const t of e)this.floodedAir.add(`${t.x},${t.y},${t.z}`)}removeFloodedAir(e){for(const t of e)this.floodedAir.delete(`${t.x},${t.y},${t.z}`)}isAirFlooded(e,t,i){return this.floodedAir.has(`${e},${t},${i}`)}clearFloodedAir(){this.floodedAir.clear()}isChunkLoaded(e,t,i){const r=Le(e,t,i);return this.chunks.has(r)}getChunksInRadius(e,t,i,r){const s=new Map;for(let a=e-r;a<=e+r;a++)for(let o=t-r;o<=t+r;o++)for(let l=i-r;l<=i+r;l++){const c=this.getChunk(a,o,l);if(c){const h=Le(a,o,l);s.set(h,c)}}return s}clear(){const e=this.getLoadedChunkKeys();for(const t of e){const[i,r,s]=t.split(","),a=parseInt(i,10),o=parseInt(r,10),l=parseInt(s,10);this.removeChunk(a,o,l)}}setSeed(e){this.seed=e}getSeed(){return this.seed}setOverrideProvider(e){this.overrideProvider=e}getOverrideProvider(){return this.overrideProvider}applyOverrides(e,t){for(const i of t)try{e.set(i.lx,i.ly,i.lz,i.id)}catch(r){console.warn(`[World] Failed to apply override at (${i.lx}, ${i.ly}, ${i.lz}):`,r)}}destroy(){this.chunkPipeline.destroy(),this.clear()}}const xt=1;function Gi(n){const[e,t,i]=n.split(",").map(r=>Number(r));if(![e,t,i].every(Number.isInteger))throw new Error(`[ChunkRenderer] Invalid chunk key: ${n}`);return{cx:e,cy:t,cz:i}}function Ri(n){const{cx:e,cy:t,cz:i}=Gi(n);return`${Math.floor(e/xt)},${t},${Math.floor(i/xt)}`}function ft(n){return n.positions.length>0}function fo(n,e,t){const i=new A(1/0,1/0,1/0),r=new A(-1/0,-1/0,-1/0),s=new A;for(let c=0;c<t.length;c+=1){const h=t[c],u=e.getX(h),d=e.getY(h),f=e.getZ(h);s.set(u,d,f),i.min(s),r.max(s)}const a=new mr(i,r);n.boundingBox=a;const o=a.getCenter(new A);let l=0;for(let c=0;c<t.length;c+=1){const h=t[c],u=e.getX(h)-o.x,d=e.getY(h)-o.y,f=e.getZ(h)-o.z;l=Math.max(l,u*u+d*d+f*f)}n.boundingSphere=new $r(o,Math.sqrt(l))}function Di(n){const e=n.filter(({buffer:y})=>ft(y));if(e.length===0)return null;const t=e.reduce((y,{buffer:g})=>y+g.positions.length/3,0),i=e.reduce((y,{buffer:g})=>y+g.indices.length,0),r=new Float32Array(t*3),s=new Float32Array(t*3),a=new Float32Array(t*2),o=new Float32Array(t),l=e.some(({buffer:y})=>y.colors.length>0),c=l?new Float32Array(t*3):new Float32Array(0);l&&c.fill(1);const h=new Uint32Array(i),u={};for(const y of _t)u[y]=e.reduce((g,{buffer:S})=>g+(S.forwardIndices?.[y]?.length??0),0);const d={};for(const y of _t)u[y]>0&&(d[y]=new Uint32Array(u[y]));let f=0,m=0,p=0,v=0;const x={};for(const y of _t)x[y]=0;for(const{buffer:y,offsetX:g,offsetZ:S}of e){const w=y.positions.length/3;for(let b=0;b<w;b+=1){const D=b*3,F=m+D;r[F]=y.positions[D]+g,r[F+1]=y.positions[D+1],r[F+2]=y.positions[D+2]+S}s.set(y.normals,m),o.set(y.ao,f),a.set(y.uvs,p),l&&y.colors.length>0&&c.set(y.colors,m);for(let b=0;b<y.indices.length;b+=1)h[v+b]=y.indices[b]+f;for(const b of _t){const D=y.forwardIndices?.[b],F=d[b];if(!D||!F)continue;const B=x[b];for(let T=0;T<D.length;T+=1)F[B+T]=D[T]+f;x[b]+=D.length}f+=w,m+=y.positions.length,p+=y.uvs.length,v+=y.indices.length}return{positions:r,normals:s,uvs:a,ao:o,colors:c,indices:h,...Object.keys(d).length>0?{forwardIndices:d}:{}}}class mo extends na{scene;materialOpaque;materialCutout;materialTransparent;forwardRefractionParticipants;forwardRefractionReceiverMaterials;registerSolidTerrainMesh;unregisterSolidTerrainMesh;chunkBuffers=new Map;chunkMeshes=new Map;chunkGroups=new Map;chunkForwardMeshes=new Map;regionMembers=new Map;regionGroups=new Map;regionMeshes=new Map;regionForwardMeshes=new Map;blockWaterIndexCount=0;regionsFinalized=!1;constructor(e,t,i={}){super(),this.scene=e,this.materialOpaque=t.opaque,this.materialCutout=t.cutout??t.opaque,this.materialTransparent=t.transparent,this.forwardRefractionParticipants=i.forwardRefractionParticipants,this.forwardRefractionReceiverMaterials=i.forwardRefractionReceiverMaterials,this.registerSolidTerrainMesh=i.registerSolidTerrainMesh,this.unregisterSolidTerrainMesh=i.unregisterSolidTerrainMesh}handleChunkMesh(e){const{key:t,payload:i}=e;if(!ft(i.opaque)&&!ft(i.cutout)&&!ft(i.transparent)){this.removeChunkMesh(t);return}const r=this.chunkBuffers.has(t),s=this.chunkBuffers.get(t);if(s&&(this.blockWaterIndexCount-=s.transparent.indices.length),this.chunkBuffers.set(t,i),this.blockWaterIndexCount+=i.transparent.indices.length,this.regionsFinalized){this.addRegionMember(t),this.rebuildRegion(Ri(t));const o=this.chunkMeshes.get(t);o&&this.emit(r?"MESH_UPDATED":"MESH_CREATED",{key:t,mesh:o});return}this.updateIndividualChunk(t,i);const a=this.chunkMeshes.get(t);a&&this.emit(r?"MESH_UPDATED":"MESH_CREATED",{key:t,mesh:a})}finalizeStaticRegions(){if(!this.regionsFinalized){this.regionsFinalized=!0;for(const[e,t]of this.chunkGroups)this.scene.remove(t),this.disposeGroupMeshes(t),this.chunkForwardMeshes.delete(e),this.chunkGroups.delete(e);this.chunkMeshes.clear(),this.regionMembers.clear();for(const e of this.chunkBuffers.keys())this.addRegionMember(e);for(const e of this.regionMembers.keys())this.rebuildRegion(e)}}removeChunkMesh(e){const t=this.chunkBuffers.get(e);if(!t)return;this.chunkBuffers.delete(e),this.blockWaterIndexCount-=t.transparent.indices.length;const i=this.chunkMeshes.get(e);if(this.chunkMeshes.delete(e),this.regionsFinalized){const r=Ri(e),s=this.regionMembers.get(r);s?.delete(e),s&&s.size===0&&this.regionMembers.delete(r),this.rebuildRegion(r)}else{const r=this.chunkGroups.get(e);r&&(this.scene.remove(r),this.disposeGroupMeshes(r),this.chunkForwardMeshes.delete(e),this.chunkGroups.delete(e))}i&&this.emit("MESH_REMOVED",{key:e})}getChunkMesh(e){return this.chunkMeshes.get(e)}getLoadedChunkKeys(){return Array.from(this.chunkBuffers.keys())}getLoadedMeshCount(){return this.chunkBuffers.size}hasBlockWaterGeometry(){return this.blockWaterIndexCount>0}getRenderedMeshCount(){if(!this.regionsFinalized)return this.chunkMeshes.size;let e=0;for(const t of this.regionMeshes.values())t.opaque&&(e+=1),t.cutout&&(e+=1),t.transparent&&(e+=1);return e}clear(){for(const e of Array.from(this.chunkBuffers.keys()))this.removeChunkMesh(e)}destroy(){this.clear();for(const[e,t]of this.regionGroups){this.scene.remove(t);const i=this.regionMeshes.get(e);if(i)for(const s of[i.opaque,i.cutout,i.transparent])s&&this.disposeMesh(s);const r=this.regionForwardMeshes.get(e)??[];for(const s of r)this.disposeMesh(s);t.clear(),this.regionForwardMeshes.delete(e),this.regionGroups.delete(e)}this.regionMeshes.clear(),this.regionMembers.clear(),this.chunkMeshes.clear(),this.chunkBuffers.clear(),this.blockWaterIndexCount=0}updateIndividualChunk(e,t){let i=this.chunkGroups.get(e);i||(i=new Q,i.name=`Chunk:${e}`,this.chunkGroups.set(e,i),this.scene.add(i));const r=i.children.find(v=>v instanceof ie&&v.material===this.materialOpaque),s=i.children.find(v=>v!==r&&v instanceof ie&&v.material===this.materialCutout),a=i.children.find(v=>v instanceof ie&&v.material===this.materialTransparent),o=this.chunkForwardMeshes.get(e)??[];this.chunkForwardMeshes.delete(e);for(const v of o)this.disposeMesh(v);i.clear();const l=new Set,c=this.upsertMesh(t.opaque,r,this.materialOpaque,!1,!0,l),h=this.upsertMesh(t.cutout,s,this.materialCutout,!1,!1,l),u=this.upsertMesh(t.transparent,a,this.materialTransparent,!0,!1,l);for(const v of[r,s,a])v&&!l.has(v)&&this.disposeMesh(v);if(!c&&!h&&!u){this.removeChunkMesh(e);return}const{cx:d,cy:f,cz:m}=Gi(e);i.position.set(d*R.x,f*R.y,m*R.z),c&&i.add(c),h&&i.add(h),u&&i.add(u);const p=[...this.createForwardMeshes(t.opaque,this.materialOpaque),...this.createForwardMeshes(t.cutout,this.materialCutout)];for(const v of p)i.add(v);this.chunkForwardMeshes.set(e,p),this.chunkMeshes.set(e,c??h??u)}addRegionMember(e){const t=Ri(e),i=this.regionMembers.get(t);i?i.add(e):this.regionMembers.set(t,new Set([e]))}rebuildRegion(e){const t=this.regionMembers.get(e),i=t?Array.from(t).flatMap(w=>{const b=this.chunkBuffers.get(w);if(!b)return[];const{cx:D,cz:F}=Gi(w),[B,,T]=e.split(",").map(Number);return[{buffers:b,offsetX:(D-B*xt)*R.x,offsetZ:(F-T*xt)*R.z}]}):[];if(i.length===0){this.removeRegion(e);return}let r=this.regionGroups.get(e);r||(r=new Q,r.name=`ChunkRegion:${e}`,this.regionGroups.set(e,r),this.scene.add(r));const s=this.regionMeshes.get(e),a=s?.opaque??null,o=s?.cutout??null,l=s?.transparent??null,c=Di(i.map(({buffers:w,offsetX:b,offsetZ:D})=>({buffer:w.opaque,offsetX:b,offsetZ:D}))),h=Di(i.map(({buffers:w,offsetX:b,offsetZ:D})=>({buffer:w.cutout,offsetX:b,offsetZ:D}))),u=Di(i.map(({buffers:w,offsetX:b,offsetZ:D})=>({buffer:w.transparent,offsetX:b,offsetZ:D}))),d=this.regionForwardMeshes.get(e)??[];this.regionForwardMeshes.delete(e);for(const w of d)this.disposeMesh(w);r.clear();const f=new Set,m=this.upsertMesh(c,a,this.materialOpaque,!1,!0,f),p=this.upsertMesh(h,o,this.materialCutout,!1,!1,f),v=this.upsertMesh(u,l,this.materialTransparent,!0,!1,f);for(const w of[a,o,l])w&&!f.has(w)&&this.disposeMesh(w);const[x,y,g]=e.split(",").map(Number);r.position.set(x*xt*R.x,y*R.y,g*xt*R.z),m&&r.add(m),p&&r.add(p),v&&r.add(v);const S=[...this.createForwardMeshes(c,this.materialOpaque),...this.createForwardMeshes(h,this.materialCutout)];for(const w of S)r.add(w);if(this.regionForwardMeshes.set(e,S),!m&&!p&&!v){this.removeRegion(e);return}this.regionMeshes.set(e,{opaque:m,cutout:p,transparent:v});for(const w of t??[]){const b=this.chunkBuffers.get(w),D=b&&ft(b.opaque)?m??p??v:b&&ft(b.cutout)?p??m??v:v??m??p;D&&this.chunkMeshes.set(w,D)}}removeRegion(e){const t=this.regionGroups.get(e);t&&this.scene.remove(t);const i=this.regionMeshes.get(e);if(i)for(const r of[i.opaque,i.cutout,i.transparent])r&&this.disposeMesh(r);for(const r of this.regionForwardMeshes.get(e)??[])this.disposeMesh(r);t?.clear(),this.regionGroups.delete(e),this.regionMeshes.delete(e),this.regionForwardMeshes.delete(e);for(const r of this.regionMembers.get(e)??[])this.chunkMeshes.delete(r)}upsertMesh(e,t,i,r,s,a){if(!e||!ft(e))return null;const o=t??new ie(new Tt,i);a.add(o);const l=o.geometry,c=(u,d,f)=>{const m=l.getAttribute(u);m&&m.array.length===f.length&&m.array.constructor===f.constructor?(m.set(f,0),m.needsUpdate=!0):l.setAttribute(u,new Ie(f,d))};c("position",3,e.positions),l.boundingSphere=null,l.boundingBox=null,c("normal",3,e.normals),c("uv",2,e.uvs),c("ao",1,e.ao),e.colors.length>0?c("color",3,e.colors):l.deleteAttribute("color");const h=l.getIndex();return h&&h.array.length===e.indices.length&&h.array.constructor===e.indices.constructor?(h.set(e.indices,0),h.needsUpdate=!0):l.setIndex(new Ie(e.indices,1)),l.computeBoundingBox(),l.computeBoundingSphere(),o.position.set(0,0,0),o.castShadow=!1,o.receiveShadow=!1,r&&(o.renderOrder=2),s&&this.registerSolidTerrainMesh?.(o),(!this.forwardRefractionReceiverMaterials||!this.forwardRefractionParticipants)&&this.forwardRefractionParticipants?.register(o),o}createForwardMeshes(e,t){if(!e||!this.forwardRefractionReceiverMaterials||!this.forwardRefractionParticipants)return[];const i=[],r=e.colors.length>0?e.colors:new Float32Array(e.positions.length);e.colors.length===0&&r.fill(1);const s=new Ie(e.positions,3),a=new Ie(e.normals,3),o=new Ie(e.uvs,2),l=new Ie(e.ao,1),c=new Ie(r,3);for(const h of _t){const u=e.forwardIndices?.[h];if(!u||u.length===0)continue;const d=h.endsWith("Cutout"),f=new Tt;f.setAttribute("position",s),f.setAttribute("normal",a),f.setAttribute("uv",o),f.setAttribute("ao",l),f.setAttribute("color",c),f.setIndex(new Ie(u,1)),fo(f,s,u);const m=new ie(f,d?this.forwardRefractionReceiverMaterials.cutout:this.forwardRefractionReceiverMaterials.opaque);m.name=`ForwardRefraction:${h}`,m.layers.set(Mt),m.frustumCulled=!0,m.castShadow=!1,m.receiveShadow=!1,this.forwardRefractionParticipants?.register(m,{forwardOnly:!0,medium:xs(h),receiverMaterial:d?this.forwardRefractionReceiverMaterials.cutout:this.forwardRefractionReceiverMaterials.opaque,colorMaterial:t}),i.push(m)}return i}disposeMesh(e){this.unregisterSolidTerrainMesh?.(e),this.forwardRefractionParticipants?.unregister(e),e.geometry.dispose()}disposeGroupMeshes(e){for(const t of e.children)t instanceof ie&&this.disposeMesh(t);e.clear()}}const la=1299792754,po=4,vo={grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0],cherry_leaves:[9,0],air:[10,0]};function go(){const n={...vo},e=["grass_top","dirt","grass_side","cobblestone","sand","wood_top","wood_side","tree_leaves","cherry_leaves"];let t=11;for(const i of e)for(let r=1;r<po;r+=1)n[`${i}_${r}`]=[t,0],t+=1;return n}const Dr=go(),wo=[[62,37,19],[88,51,25],[113,68,32],[139,84,40],[164,101,51]],kr=[[38,76,19],[52,101,23],[68,127,29],[87,151,36],[111,174,48]],yo=[[156,119,66],[177,140,82],[198,161,101],[218,183,124],[235,207,153]],ka=[[55,57,55],[80,82,79],[105,106,101],[132,133,126],[164,165,155]],Qt=[[52,29,13],[76,42,17],[101,59,23],[129,78,31],[157,98,43]],xo=[[61,34,15],[91,52,21],[120,73,29],[150,96,42],[181,124,58]],Ar=[[11,52,17],[17,65,23],[24,80,28],[34,96,33],[43,113,40],[55,130,47]],So=[[190,157,173],[214,184,198],[231,207,217],[242,224,232],[249,238,243],[255,249,252]],ve=32,Aa=54,Ea=1,bo=.16,Pa=.52,gt=[[[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,1],[0,1,1,1,0],[0,0,1,0,0]],[[0,1,0,0],[1,1,1,0],[1,1,1,1],[0,1,1,1],[0,0,1,0]],[[0,0,1,0,0],[0,1,1,1,0],[1,1,1,1,0],[0,1,1,1,1],[0,0,1,0,0]],[[0,1,1,0],[1,1,1,1],[0,1,1,1],[0,0,1,0]],[[0,0,1,0],[0,1,1,1],[1,1,1,1],[0,1,1,1],[0,0,1,0]],[[0,1,0,0,0],[1,1,1,0,0],[1,1,1,1,0],[0,1,1,1,1],[0,0,1,0,0]]];function yi(n){return Math.max(0,Math.min(1,n))}function Xi(n){const e=yi(n);return e*e*(3-2*e)}function Mo(n,e,t){return Xi((t-n)/(e-n))}function ki(n,e,t){return n+(e-n)*t}function Ee(n,e,t){let i=Math.imul(n|0,73244475);return i=Math.imul(i^Math.imul(Math.floor(e),668265261),374761393),i=Math.imul(i^Math.imul(Math.floor(t),461845907),2246822507),i^=i>>>13,i=Math.imul(i,3266489909),i^=i>>>16,(i>>>0)/4294967295}function Co(n,e,t){const i=Math.floor(n),r=Math.floor(e),s=Xi(n-i),a=Xi(e-r),o=Ee(t,i,r),l=Ee(t,i+1,r),c=Ee(t,i,r+1),h=Ee(t,i+1,r+1);return ki(ki(o,l,s),ki(c,h,s),a)}function pt(n,e,t,i){let r=0,s=.5,a=0,o=1;for(let l=0;l<i;l+=1)r+=Co(n*o,e*o,t+l*977)*s,a+=s,s*=.5,o*=2.03;return a>0?r/a:0}function Rt(n,e,t){const i=pt(n*.13+7.2,e*.13-4.4,t+19,2)-.5,r=pt(n*.13-2.7,e*.13+8.9,t+41,2)-.5,s=n*.42+i*1.35,a=e*.42+r*1.35,o=pt(s*.72,a*.72,t+73,3),l=pt(s*1.48+13.1,a*1.48-8.6,t+127,3),c=Ee(t+181,Math.floor(n),Math.floor(e)),h=yi(o*.54+l*.34+c*.12);return{macro:o,meso:l,micro:c,structure:h}}function ut(n,e,t=0){const i=yi(e+(t-.5)*.08),r=Math.min(n.length-1,Math.floor(i*n.length));return n[r]}function Er(n){const e=/^(.*)_(\d+)$/.exec(n),t=e?.[1]??n,i=e?Math.max(0,Number.parseInt(e[2],10)):0;return{baseName:t==="maple_leaves"?"cherry_leaves":t,variant:i}}function tt(n){return[n[0],n[1],n[2],255]}function Pr(n,e,t,i){const r=16/t,s=Rt(n*r,e*r,i+1);return tt(ut(wo,.06+s.structure*.86,s.micro))}function To(n,e,t,i){const r=16/t,s=Rt(n*r,e*r,i+11),a=.04+s.structure*.88+s.meso*.08;return tt(ut(kr,a,s.micro))}function Ro(n,e,t,i){const r=16/t,s=Rt(n*r,e*r,i+23),a=.12+s.structure*.78+s.macro*.08;return tt(ut(yo,a,s.micro))}function Do(n,e,t,i){const r=16/t,s=n*r,a=e*r,o=Rt(s,a,i+37),c=3.05+Rt(s,0,i+43).macro*1.9+(Ee(i+47,Math.floor(s),0)-.5)*1.2,h=a>c&&a<c+1.8&&Ee(i+53,Math.floor(s),Math.floor(a))>.6;if(a<=c||h){const u=.02+o.structure*.88;return tt(ut(kr,u,o.micro))}return Pr(n,e,t,i+59)}function ko(n,e,t,i){const r=16/t,s=n*r,a=e*r,o=3.75,l=Math.floor(s/o),c=Math.floor(a/o);let h=1/0,u=0;for(let p=-1;p<=1;p+=1)for(let v=-1;v<=1;v+=1){const x=l+v,y=c+p,g=(Ee(i+67,x,y)-.5)*1.15,S=(Ee(i+71,x,y)-.5)*1.15,w=(x+.5+g)*o,b=(y+.5+S)*o,D=Math.hypot(s-w,a-b);D<h&&(h=D,u=x*97+y*193)}const d=1-Mo(1.25,1.95,h);if(d<.45){const p=.12+Ee(i+79,Math.floor(s/2),Math.floor(a/2))*.22;return tt(ut(ka,p))}const f=Ee(i+83,u,Math.floor(h*3)),m=.14+f*.76+d*.08;return tt(ut(ka,m,f))}function Ao(n,e,t,i){const r=16/t,s=n*r,a=e*r,o=pt(s*.18+4.1,a*.055-3.7,i+89,2)-.5,l=Math.floor((s+o*2.1)/1.45),c=Ee(i+97,l,0),h=pt((s+o*1.4)*.37,a*.075,i+101,3),u=Ee(i+103,Math.floor(s/2),Math.floor(a/3)),d=.08+c*.34+h*.48+u*.1,f=ut(Qt,d,u);return u>.965?[Qt[0][0],Qt[0][1],Qt[0][2],255]:tt(f)}function Eo(n,e,t,i){const r=16/t,s=n*r,a=e*r,o=7.5,l=Math.max(Math.abs(s-o),Math.abs(a-o)),h=Math.floor(l/1.55)%5/4,u=pt(s*.22+2.4,a*.22-6.5,i+113,2),d=Ee(i+127,Math.floor(s),Math.floor(a)),f=.1+h*.45+u*.34+d*.11;return tt(ut(xo,f,d))}function Po(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Fo(n){const e=n.length,t=n[0]?.length??0,i=Array.from({length:t},()=>Array(e).fill(0));for(let r=0;r<e;r+=1)for(let s=0;s<t;s+=1)i[s][e-1-r]=n[r][s]??0;return i}function Bo(n){return n.map(e=>[...e].reverse())}function Fa(n,e,t){let i=n.map(r=>[...r]);t&&(i=Bo(i));for(let r=0;r<e;r+=1)i=Fo(i);return i.map(r=>[...r])}function zo(n,e,t){if(!n[t]?.[e])return!1;for(const[i,r]of[[1,0],[-1,0],[0,1],[0,-1]]){const s=e+i,a=t+r;if(a<0||a>=n.length||s<0||s>=(n[0]?.length??0)||!n[a]?.[s])return!0}return!1}function Fr(n){return Array.from({length:n},()=>Array(n).fill(-1))}function hi(n,e){return(n%e+e)%e}function Io(n,e){const{mask:t,px:i,py:r,baseShade:s,brightnessMix:a}=e,o=t.length,l=t[0]?.length??0;for(let c=0;c<o;c+=1)for(let h=0;h<l;h+=1){if(!t[c]?.[h])continue;const u=hi(i+h,ve),d=hi(r+c,ve),f=1-c/Math.max(1,o-1),m=1-Math.abs(h/Math.max(1,l-1)-.5)*2;let p=s;f>.6&&a>.15&&(p+=1),m>.55&&f>.35&&a>.35&&(p+=1),zo(t,h,c)&&(p-=1),c>=o-1&&(p-=1),n[d][u]=Math.max(0,Math.min(Ar.length-1,p))}}function Lo(n){const e=Po(n),t=Fr(ve),i=7,r=7,s=ve/i,a=ve/r,o=[];let l=0;for(let h=0;h<r;h+=1)for(let u=0;u<i&&!(l>=Aa);u+=1){if(e()<bo)continue;const d=gt[Math.floor(e()*gt.length)]??gt[0],f=Fa(d,Math.floor(e()*4),e()<.5),m=f[0]?.length??0,p=f.length,v=Math.floor(u*s+(s-m)*.5),x=Math.floor(h*a+(a-p)*.5),y=Math.floor((e()*2-1)*Ea),g=Math.floor((e()*2-1)*Ea);o.push({mask:f,px:v+y,py:x+g,baseShade:1+Math.floor(e()*4),brightnessMix:Pa}),l+=1}for(;o.length<Aa;){const h=gt[Math.floor(e()*gt.length)]??gt[0],u=Fa(h,Math.floor(e()*4),e()<.5),d=u[0]?.length??0,f=u.length;o.push({mask:u,px:Math.floor(e()*ve)-Math.floor(d/2),py:Math.floor(e()*ve)-Math.floor(f/2),baseShade:1+Math.floor(e()*4),brightnessMix:Pa})}for(const h of o)Io(t,h);const c=t.map(h=>[...h]);for(let h=0;h<ve;h+=1)for(let u=0;u<ve;u+=1){if(c[h][u]<0)continue;let d=0;for(const[f,m]of[[1,0],[-1,0],[0,1],[0,-1]])c[hi(h+m,ve)][hi(u+f,ve)]>=0&&(d+=1);d===0&&(t[h][u]=-1)}return t}function Wo(n,e){const t=Lo(e);if(n===ve)return t;const i=Fr(n);for(let r=0;r<n;r+=1){const s=Math.floor(r*ve/n),a=Math.max(s,Math.ceil((r+1)*ve/n)-1);for(let o=0;o<n;o+=1){const l=Math.floor(o*ve/n),c=Math.max(l,Math.ceil((o+1)*ve/n)-1);let h=0,u=0,d=0;for(let f=s;f<=Math.min(ve-1,a);f+=1)for(let m=l;m<=Math.min(ve-1,c);m+=1){d+=1;const p=t[f][m];p<0||(h+=1,u+=p)}h*2>=d&&h>0&&(i[r][o]=Math.round(u/h))}}return i}function Ba(n,e,t,i){const r=t?.[e]?.[n]??-1;return r<0?[0,0,0,0]:tt(i[Math.min(i.length-1,r)]??i[0])}function Vo(n,e,t,i,r,s){const{baseName:a,variant:o}=Er(n),l=r+o*1049;switch(a){case"grass_top":return To(e,t,i,l);case"dirt":return Pr(e,t,i,l);case"grass_side":return Do(e,t,i,l);case"cobblestone":return ko(e,t,i,l);case"sand":return Ro(e,t,i,l);case"wood_top":return Eo(e,t,i,l);case"wood_side":return Ao(e,t,i,l);case"tree_leaves":return Ba(e,t,s,Ar);case"cherry_leaves":return Ba(e,t,s,So);case"water":case"air":return[0,0,0,0];default:return[255,255,255,255]}}function _o(n,e,t){if(e==="field"){const i=Math.round(yi(t.structure)*255);return[i,i,i,255]}return e==="mask"?[n[3],n[3],n[3],255]:n}function ca(n,e){return n.name=e,n.flipY=!0,n.colorSpace=et,n.magFilter=N,n.minFilter=N,n.generateMipmaps=!1,n.wrapS=Ce,n.wrapT=Ce,n.unpackAlignment=1,n.needsUpdate=!0,n}function Br(n,e,t,i,r){const s=(i*e+t)*4;n[s]=r[0],n[s+1]=r[1],n[s+2]=r[2],n[s+3]=r[3]}function zr(n,e,t,i){const r=new Uint8Array(e*e*4),s=Er(n),a=s.baseName==="tree_leaves"||s.baseName==="cherry_leaves"?Wo(e,t+s.variant*1049+191):void 0;for(let o=0;o<e;o+=1)for(let l=0;l<e;l+=1){const c=s.baseName,h=c==="grass_side"?e-1-l:l,u=c==="grass_side"?e-1-o:o,d=Vo(n,h,u,e,t,a),f=16/e,m=Rt(h*f,u*f,t+191);Br(r,e,l,o,_o(d,i,m))}return r}function Uo(n,e={}){const t=Math.max(4,Math.floor(e.tileSize??16)),i=e.seed??la,r=e.debugMode??"final",s=zr(n,t,i,r);return ca(new Ve(s,t,t,re,Pe),`ProceduralVoxelTile:${n}`)}function Ho(n={}){const e=Math.max(4,Math.floor(n.tileSize??16)),t=n.seed??la,i=n.debugMode??"final",r=n.tiles??Dr,s=Math.max(...Object.values(r).map(([d])=>d),0),a=Math.max(...Object.values(r).map(([,d])=>d),0),o=Math.max(1,Math.floor(n.atlasSize??s+1),s+1),l=a+1,c=o*e,h=l*e,u=new Uint8Array(c*h*4);for(const[d,[f,m]]of Object.entries(r)){const p=zr(d,e,t,i);for(let v=0;v<e;v+=1)for(let x=0;x<e;x+=1){const y=(v*e+x)*4;Br(u,c,f*e+x,m*e+v,[p[y],p[y+1],p[y+2],p[y+3]])}}return ca(new Ve(u,c,h,re,Pe),"ProceduralVoxelAtlas")}function Oo(n,e,t){const i=n.image,r=i?.data,s=Math.floor(i?.width??0),a=Math.floor(i?.height??0);if(!r||s<=0||a<=0||s<(e[0]+1)*t||a<(e[1]+1)*t)return null;const o=new Uint8Array(t*t*4);for(let c=0;c<t;c+=1)for(let h=0;h<t;h+=1){const u=((e[1]*t+c)*s+e[0]*t+h)*4,d=(c*t+h)*4;o[d]=Number(r[u]??0),o[d+1]=Number(r[u+1]??0),o[d+2]=Number(r[u+2]??0),o[d+3]=Number(r[u+3]??255)}const l=ca(new Ve(o,t,t,re,Pe),"ProceduralAtlasTile");return l.flipY=n.flipY,l}class za{texture;config;constructor(e,t){this.texture=e,this.config=t,this.texture.flipY=!0,this.texture.colorSpace=et,this.texture.magFilter=N,this.texture.minFilter=N,this.texture.generateMipmaps=!1,this.texture.wrapS=Ce,this.texture.wrapT=Ce,this.texture.needsUpdate=!0}getTexture(){return this.texture}getTile(e){const t=this.config.tiles[e];return t?{u:t[0],v:t[1]}:null}getTileSize(){return this.config.tileSize}getAtlasSize(){return this.config.atlasSize}getTiles(){return this.config.tiles}getConfig(){return this.config}}function No(){const n=Object.fromEntries(Object.entries(Dr).map(([e,t])=>[e,[...t]]));return{tileSize:16,atlasSize:Math.max(...Object.values(n).map(([e])=>e),0)+1,tiles:n}}function Go(n){const e={...n.tiles};!e.cherry_leaves&&e.maple_leaves&&(e.cherry_leaves=e.maple_leaves),!e.maple_leaves&&e.cherry_leaves&&(e.maple_leaves=e.cherry_leaves);const t=Math.max(...Object.values(e).map(([i])=>i),0);return{tileSize:Math.max(4,Math.floor(n.tileSize||16)),atlasSize:Math.max(1,Math.floor(n.atlasSize||0),t+1),tiles:e}}function Ia(n){return Ho({tileSize:n.tileSize,atlasSize:n.atlasSize,tiles:n.tiles,seed:la})}async function Xo(){try{const n=await fetch("/atlas.json"),e=Go(await n.json());return new za(Ia(e),e)}catch(n){console.warn("Failed to load atlas configuration, using procedural defaults:",n);const e=No();return new za(Ia(e),e)}}function Ai(){const n=new Ve(new Uint8Array([255,255,255,255]),1,1,re,Pe);return n.needsUpdate=!0,n.colorSpace=fe,n}class Zi extends He{surfaceMode;constructor(e,t,i,r,s="cutout"){const a=r?.surfaceMode??s,o=a==="cutout",l=r?.leafTiles?.slice(0,8).map(([v])=>v)??[];for(;l.length<8;)l.push(-1024);const c=new ht(...l.slice(0,4)),h=new ht(...l.slice(4,8)),u=`
      // Block vertex shader using per-vertex tint and ambient occlusion
      #include <common>
      ${ea()}
      attribute vec3 color;
      attribute float ao;
      varying vec3 vColor;
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vViewPosition;
      varying float vAmbientOcclusion;

      void main() {
          vUv = uv;
          // Lighting uniforms and world position are world-space. Chunk and
          // seabed meshes only use rigid transforms, so modelMatrix is the
          // correct normal transform here; normalMatrix would be view-space.
          vNormal = normalize(mat3(modelMatrix) * normal);
          vColor = color;
          vAmbientOcclusion = clamp(ao, 0.0, 1.0);
          
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          vec4 viewPosition = viewMatrix * worldPosition;
          vViewPosition = viewPosition.xyz;
          vec4 directClip = projectionMatrix * viewPosition;
          vec4 apparentClip = forwardRefractionProject(
            worldPosition.xyz,
            directClip
          );
          gl_Position = apparentClip;
      }
    `,d=o?`
      bool isLeafAtlasUv(vec2 uv) {
          if (atlasSize <= 1.0) return false;
          float tileIndex = floor(clamp(uv.x, 0.0, 0.999999) * atlasSize);
          vec4 distanceA = abs(leafTileIndicesA - vec4(tileIndex));
          vec4 distanceB = abs(leafTileIndicesB - vec4(tileIndex));
          float closest = min(
            min(min(distanceA.x, distanceA.y), min(distanceA.z, distanceA.w)),
            min(min(distanceB.x, distanceB.y), min(distanceB.z, distanceB.w))
          );
          return closest < 0.25;
      }

      // Derivative-aware texture sampling to reduce minification shimmer
      // Provide LOD function with graceful fallback if the extension is missing
      #ifdef TEXTURE_LOD_EXT
      vec4 texLod2D(sampler2D tex, vec2 uv, float lod) { return texture2DLodEXT(tex, uv, lod); }
      #else
      vec4 texLod2D(sampler2D tex, vec2 uv, float lod) { return texture2D(tex, uv); }
      #endif

      // Combines 4-tap RGSS with a directional anisotropic kernel when footprint is elongated
      vec4 texture2D_AA(sampler2D tex, vec2 uv) {
          vec4 base = texture2D(tex, clampUvToTile(uv, uv));
          if (!aaEnabled) return base;
          // Opaque atlas tiles retain their crisp single-tap pixel treatment.
          // Sparse leaves need footprint integration under minification: a
          // single nearest texel aliases their 16px cutout into moving diagonal
          // bands. Every tap remains clamped to the selected tile, so this
          // cannot sample neighbouring atlas materials.
          bool leafAtlasSample = isLeafAtlasUv(uv);
          if (atlasSize > 1.0 && !leafAtlasSample) return base;

          // Estimate pixel footprint in texel units
          vec2 texSize = vec2(max(1.0, atlasSize * tileSize), max(1.0, tileSize));
          vec2 dx_uvt = dFdx(uv) * texSize;
          vec2 dy_uvt = dFdy(uv) * texSize;
          float lenx = length(dx_uvt);
          float leny = length(dy_uvt);
          float maxLen = max(lenx, leny);
          float minLen = max(min(lenx, leny), 1e-5);
          float aniso = maxLen / minLen;

          // Mix factor vs minification
          float k = smoothstep(1.0, 3.0, maxLen) * clamp(aaStrength, 0.0, 1.0);
          if (k <= 0.001) return base;

          // If footprint is strongly elongated, sample along its major axis (screen-aligned stripes case)
          if (aniso > 2.0) {
            // Keep the derivative magnitude. A normalized direction with a
            // raw ±0.5 UV offset spans most of the atlas instead of one pixel.
            vec2 majorDerivative = (lenx > leny) ? dFdx(uv) : dFdy(uv);

            // 7- or 9-tap kernel depending on minification (clamped)
            int taps = (maxLen > 6.0) ? 9 : 7;
            float halfT = float(taps - 1) * 0.5;

            // Cover the pixel footprint width (±0.5 along major) with a Gaussian
            vec4 sum = vec4(0.0);
            float wsum = 0.0;
            for (int i = 0; i < 9; i++) {
              if (i >= taps) break;
              float fi = float(i) - halfT;       // [-halfT, halfT]
              float t = fi / max(halfT, 1.0);    // [-1, 1]
              float w = exp(-t*t * 3.0);         // Gaussian-ish weights
              vec2 o = majorDerivative * (t * 0.5); // ±0.5 pixel footprint
              // On non-atlas textures (single image with mipmaps), push a slight lod bias to avoid banding
              float lodBias = (atlasSize <= 1.0 && aaLodBiasEnabled) ? (aaLodBias * smoothstep(1.5, 8.0, maxLen)) : 0.0;
              vec4 c = texLod2D(tex, clampUvToTile(uv + o, uv), lodBias);
              sum += c * w; wsum += w;
            }
            vec4 anisoAvg = sum / max(wsum, 1e-5);
            if (leafAtlasSample && anisoAvg.a > 1e-4) {
              anisoAvg.rgb /= anisoAvg.a;
            }
            return mix(base, anisoAvg, k);
          }

          // Otherwise use 4-tap rotated grid inside the pixel footprint (good isotropic prefilter)
          vec2 dx = dFdx(uv);
          vec2 dy = dFdy(uv);
          const float ofs = 0.35;
          vec2 o1 = ( dx + dy) * ofs;
          vec2 o2 = ( dx - dy) * ofs;
          vec2 o3 = (-dx + dy) * ofs;
          vec2 o4 = (-dx - dy) * ofs;

          float lodBiasIso = (atlasSize <= 1.0 && aaLodBiasEnabled) ? (aaLodBias * smoothstep(1.5, 8.0, maxLen)) : 0.0;
          vec4 c1 = texLod2D(tex, clampUvToTile(uv + o1, uv), lodBiasIso);
          vec4 c2 = texLod2D(tex, clampUvToTile(uv + o2, uv), lodBiasIso);
          vec4 c3 = texLod2D(tex, clampUvToTile(uv + o3, uv), lodBiasIso);
          vec4 c4 = texLod2D(tex, clampUvToTile(uv + o4, uv), lodBiasIso);
          vec4 avg4 = (c1 + c2 + c3 + c4) * 0.25;
          if (leafAtlasSample && avg4.a > 1e-4) {
            avg4.rgb /= avg4.a;
          }
          return mix(base, avg4, k);
      }
    `:"",f=o?`
      uniform float alphaCutoff;
      uniform bool aaEnabled;
      uniform float aaStrength;   // 0..1
      uniform bool aaLodBiasEnabled; // use explicit LOD bias for non-atlas textures
      uniform float aaLodBias;    // 0..2 typically
      uniform vec4 leafTileIndicesA;
      uniform vec4 leafTileIndicesB;
    `:"",m=o?`
          vec4 texColor = texture2D_AA(map, vUv);
          // Procedural tree and cherry leaf tiles use binary cutouts to keep
          // the voxel topology opaque while exposing the sparse leaf gaps.
          // Sample before the forward receiver early-return as well, so
          // refraction preserves the same silhouette as the visible pass.
          if (texColor.a < alphaCutoff) discard;
        `:`
          vec4 texColor = texture2D(map, clampUvToTile(vUv, vUv));
        `,p=`
      #include <common>
      ${ia()}
      uniform sampler2D voxelShadowMask;
      uniform sampler2D voxelShadowDepth;
      uniform vec2 voxelShadowResolution;
      uniform float voxelShadowCameraNear;
      uniform float voxelShadowCameraFar;
      uniform bool voxelShadowEnabled;
      varying vec3 vViewPosition;
      // Sun visibility is generated by VoxelSunShadowPass. It is sampled in
      // screen space so every terrain fragment uses the same receiver result;
      // there is deliberately no native shadow-map projection or bias here.
      float sampleVoxelShadow(vec2 uv) {
        return texture2D(voxelShadowMask, clamp(uv, vec2(0.0), vec2(1.0))).r;
      }

      float decodeVoxelShadowDepth(float raw) {
        if (raw >= 0.999999) return voxelShadowCameraFar;
        return (voxelShadowCameraNear * voxelShadowCameraFar) /
          ((voxelShadowCameraFar - voxelShadowCameraNear) * raw - voxelShadowCameraFar);
      }

      float sampleVoxelShadowDepth(vec2 uv) {
        return -decodeVoxelShadowDepth(texture2D(voxelShadowDepth, clamp(uv, vec2(0.0), vec2(1.0))).r);
      }

      float shadowNeighbourWeight(vec2 uv, float referenceDepth) {
        float neighbourDepth = sampleVoxelShadowDepth(uv);
        float tolerance = max(0.025, referenceDepth * 0.015);
        return 1.0 - smoothstep(tolerance, tolerance * 4.0, abs(neighbourDepth - referenceDepth));
      }

      float getVoxelShadowMask() {
        if (!voxelShadowEnabled) return 1.0;
        if (uForwardRefractionActive > 0.5) {
          return forwardRefractionSunVisibility(
            voxelShadowResolution,
            vForwardRefractionSourceWorld
          );
        }
        // gl_FragCoord is already at the pixel centre.  The former extra
        // half-pixel offset put nearest samples on texel boundaries.
        vec2 uv = gl_FragCoord.xy / max(voxelShadowResolution, vec2(1.0));
        float center = sampleVoxelShadow(uv);
        // Leaf transmission is fractional while opaque blockers remain at the
        // exact endpoints. Reconstruct only that fractional signal with a
        // compact depth-aware tent. This removes the visible nine-ray levels
        // without softening trunks, terrain silhouettes, or other hard casts.
        float uncertainty = smoothstep(0.02, 0.98, 4.0 * center * (1.0 - center));
        if (uncertainty <= 0.0) return center;
        vec2 texel = 1.0 / max(voxelShadowResolution, vec2(1.0));
        float referenceDepth = -vViewPosition.z;
        vec2 offsets[12];
        offsets[0] = vec2(texel.x, 0.0);
        offsets[1] = vec2(-texel.x, 0.0);
        offsets[2] = vec2(0.0, texel.y);
        offsets[3] = vec2(0.0, -texel.y);
        offsets[4] = vec2(texel.x, texel.y);
        offsets[5] = vec2(-texel.x, texel.y);
        offsets[6] = vec2(texel.x, -texel.y);
        offsets[7] = vec2(-texel.x, -texel.y);
        offsets[8] = vec2(texel.x * 2.0, 0.0);
        offsets[9] = vec2(-texel.x * 2.0, 0.0);
        offsets[10] = vec2(0.0, texel.y * 2.0);
        offsets[11] = vec2(0.0, -texel.y * 2.0);
        float tapWeights[12];
        tapWeights[0] = 2.0;
        tapWeights[1] = 2.0;
        tapWeights[2] = 2.0;
        tapWeights[3] = 2.0;
        tapWeights[4] = 1.0;
        tapWeights[5] = 1.0;
        tapWeights[6] = 1.0;
        tapWeights[7] = 1.0;
        tapWeights[8] = 0.5;
        tapWeights[9] = 0.5;
        tapWeights[10] = 0.5;
        tapWeights[11] = 0.5;
        float weighted = center * 4.0;
        float weightSum = 4.0;
        for (int i = 0; i < 12; i++) {
          float weight = shadowNeighbourWeight(uv + offsets[i], referenceDepth) * tapWeights[i];
          weighted += sampleVoxelShadow(uv + offsets[i]) * weight;
          weightSum += weight;
        }
        float reconstructed = weighted / max(weightSum, 1e-4);
        return mix(center, reconstructed, 0.82 * uncertainty);
      }

      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPosition;
      varying vec3 vColor;
      varying float vAmbientOcclusion;

      uniform sampler2D map;
      uniform sampler2D normalMap;
      uniform samplerCube envMap;
      uniform float roughness;
      uniform float metalness;
      uniform float envMapIntensity;
      uniform float alphaScale;
      uniform float lightingMix;

      uniform float atlasSize;    // tiles across (U). 1.0 if not using an atlas
      uniform float tileSize;     // texels per tile (square)
      ${f}
      uniform float ditherAmount;
      
      // Sun uniforms (directional light driven by SunController)
      uniform vec3 sunDirection;
      uniform vec3 sunColor;

      // Day/night factor (0=night, 1=day)
      uniform float dayLight;
      // Star light factor (0..1) tiny ambient boost at night
      uniform float starLight;
      // Scene-linear irradiance evaluated by AtmosphereModel.
      uniform vec3 skyAmbient;

      // Optional water-caustic contribution. Disabled by default so ordinary
      // block materials remain unchanged; WaterSystem enables it for the
      // playable and visual-only seabed surfaces.
      uniform bool waterCausticEnabled;
      uniform float waterCausticLevel;
      uniform float waterCausticIntensity;
      uniform float waterCausticReferenceDepth;
      uniform float waterCausticFieldScale;
      uniform float waterCausticSunIntensity;
      uniform vec3 waterCausticExtinction;
      uniform sampler2D waterCausticMap;
      uniform bool waterCausticMapEnabled;
      uniform vec2 waterCausticOrigin;
      uniform float waterCausticExtent;
      uniform vec2 waterCausticResolution;

      // Specular anti-aliasing: broaden roughness near high normal gradients
      float specularAARoughness(float r, vec3 N) {
          // Variance from normal derivatives; clamp to avoid NaNs
          vec3 dnx = dFdx(N);
          vec3 dny = dFdy(N);
          float variance = max(dot(dnx, dnx), dot(dny, dny));
          // Increase roughness based on variance (simple approximation)
          float rr = r*r + variance;
          return clamp(sqrt(rr), 0.0, 1.0);
      }

      // Clamp a sample to the tile selected by the center UV. The center must
      // remain the anchor: clamping from the offset sample itself can move a
      // wide AA tap into a neighboring atlas tile.
      vec2 clampUvToTile(vec2 sampleUv, vec2 centerUv) {
          if (atlasSize <= 1.0) return sampleUv; // not an atlas: no clamp needed
          float tileW = 1.0 / atlasSize;
          float tileIndex = clamp(floor(centerUv.x / tileW), 0.0, atlasSize - 1.0);
          float uMin = tileIndex * tileW;
          float uMax = uMin + tileW;
          // Match mesher epsilon: half-pixel in UV space
          float epsU = 0.5 / (atlasSize * tileSize);
          float epsV = 0.5 / max(tileSize, 1.0);
          sampleUv.x = clamp(sampleUv.x, uMin + epsU, uMax - epsU);
          sampleUv.y = clamp(sampleUv.y, 0.0 + epsV, 1.0 - epsV);
          return sampleUv;
      }

      ${d}
      vec3 unshadowedDirectSunLighting(vec3 normal) {
          vec3 sunDir = normalize(sunDirection);
          float sunDot = max(dot(normal, sunDir), 0.0);
          return sunColor * sunDot * clamp(dayLight, 0.0, 1.0);
      }

      vec3 directSunLighting(vec3 normal) {
          return unshadowedDirectSunLighting(normal) * getVoxelShadowMask();
      }

      vec4 calculateEnhancedLighting(vec3 albedo, vec3 normal, vec3 viewDir, float ambientOcclusion, vec3 directSun) {
          // Ambient visibility is kept separate from direct sun lighting.
          vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35 * clamp(starLight, 0.0, 1.0);
          float ao = clamp(ambientOcclusion, 0.0, 1.0);
          vec3 ambient = (skyAmbient + starAmb) * ao;
          
          // Main sun light (provided via uniforms)
          vec3 sunDir = normalize(sunDirection);
          float sunDot = max(dot(normal, sunDir), 0.0);

          // Use the screen-space voxel DDA visibility mask only for direct sun
          // diffuse. The post-process SSAO mask is derived below from the
          // unshadowed lighting, so shadow coverage cannot amplify screen-space
          // AO at cube edges.
          vec3 unshadowedDiffuse = sunColor * sunDot * clamp(dayLight, 0.0, 1.0);
          vec3 diffuse = directSun;
          
          // Fresnel rim lighting
          float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.0);
          vec3 fresnelColor = vec3(0.8, 0.9, 1.0) * fresnel * 0.2 * clamp(dayLight, 0.0, 1.0) * ao;
          
          // Environment reflection (only if envMap is available)
          vec3 reflection = vec3(0.0);
          #ifdef USE_ENVMAP
            vec3 reflectDir = reflect(-viewDir, normal);
            vec3 envColor = textureCube(envMap, reflectDir).rgb;
            float roughAA = specularAARoughness(roughness, normal);
            reflection = envColor * envMapIntensity * (1.0 - roughAA) * fresnel * clamp(dayLight, 0.0, 1.0) * ao;
          #endif
          
          // Subsurface scattering
          float backLight = max(dot(normal, -sunDir), 0.0);
          vec3 subsurface = sunColor * backLight * 0.1 * (1.0 - metalness) * clamp(dayLight, 0.0, 1.0);
          
          vec3 indirect = ambient + fresnelColor + reflection;
          vec3 total = indirect + diffuse + subsurface;
          float indirectLuma = dot(max(indirect, vec3(0.0)), vec3(0.2126, 0.7152, 0.0722));
          // This mask is consumed by SSAOPass through the opaque alpha
          // channel. Use the unshadowed direct contribution as its reference
          // so it remains invariant when the voxel visibility mask changes.
          vec3 shadowIndependentTotal = indirect + unshadowedDiffuse + subsurface;
          float shadowIndependentLuma = dot(max(shadowIndependentTotal, vec3(0.0)), vec3(0.2126, 0.7152, 0.0722));
          float indirectMask = clamp(indirectLuma / max(shadowIndependentLuma, 1e-4), 0.0, 1.0);
          return vec4(total, indirectMask);
      }

      // The caustic pass stores a differential-area concentration encoded as
      // field / waterCausticFieldScale. Project the receiver back to that
      // reference depth along the same flat Snell ray used by the caustic
      // rasterizer; this keeps the field coherent through the full water
      // column instead of pinning it to a single world-height decal.
      float sampleWaterCausticPhase(
        vec2 causticCoord,
        vec2 phaseOffset
      ) {
          // WaterCaustics owns a linear irradiance mip chain. A single
          // implicit-derivative lookup selects the appropriate level for the
          // projected receiver footprint, avoiding the old 5-fetch manual
          // footprint filter while retaining the four phase interleave.
          return clamp(
            texture2D(waterCausticMap, causticCoord + phaseOffset).r
              * waterCausticFieldScale,
            0.0,
            8.0
          );
      }

      float sampleWaterCaustics(vec3 worldPosition) {
          vec3 sun = normalize(sunDirection);
          vec3 refractedSun = refract(-sun, vec3(0.0, 1.0, 0.0), 1.0 / ${Se.toFixed(3)});
          float depth = max(waterCausticLevel - worldPosition.y, 0.0);
          float vertical = max(-refractedSun.y, 0.12);
          float referenceTravel = (waterCausticReferenceDepth - depth) / vertical;
          vec2 projected = worldPosition.xz + refractedSun.xz * referenceTravel;
          vec2 causticCoord = (projected - waterCausticOrigin) / max(waterCausticExtent, 1.0) + 0.5;

          // The generator, shadow path, terrain ownership and mip chain have
          // each been isolated without removing the square no-caustic lanes.
          // The remaining shared structure is the one 53 m periodic optical
          // realization itself. Sample four half-period phases of that exact
          // field so a quiet strip in one phase is supplied by the same
          // physical concentration field from another phase instead of being
          // stamped into the world as a repeated cross-shaped dead zone.
          float f00 = sampleWaterCausticPhase(causticCoord, vec2(0.0, 0.0));
          float f10 = sampleWaterCausticPhase(causticCoord, vec2(0.5, 0.0));
          float f01 = sampleWaterCausticPhase(causticCoord, vec2(0.0, 0.5));
          float f11 = sampleWaterCausticPhase(causticCoord, vec2(0.5, 0.5));

          // Interleave only focused energy. Keeping 1.0 as the floor avoids
          // manufacturing four overlapping dark defocus fields. Use full
          // focused-energy gain so the visible brightness matches the original
          // single-phase caustic intensity much more closely.
          float focusedExcess = max(f00 - 1.0, 0.0)
            + max(f10 - 1.0, 0.0)
            + max(f01 - 1.0, 0.0)
            + max(f11 - 1.0, 0.0);
          return clamp(1.0 + focusedExcess * 1.0, 0.0, 8.0);
      }

      float waterSunTransmission(float cosIncident) {
          float eta = 1.0 / ${Se.toFixed(3)};
          float sinTransmitted2 = eta * eta * max(1.0 - cosIncident * cosIncident, 0.0);
          if (sinTransmitted2 >= 1.0) return 0.0;
          float cosTransmitted = sqrt(max(1.0 - sinTransmitted2, 0.0));
          float rs = (cosIncident - ${Se.toFixed(3)} * cosTransmitted)
            / max(cosIncident + ${Se.toFixed(3)} * cosTransmitted, 0.001);
          float rp = (${Se.toFixed(3)} * cosIncident - cosTransmitted)
            / max(${Se.toFixed(3)} * cosIncident + cosTransmitted, 0.001);
          return clamp(1.0 - 0.5 * (rs * rs + rp * rp), 0.0, 1.0);
      }

      void main() {
          forwardRefractionDiscardCameraMedium();
          ${m}
          if (uForwardRefractionOutputReceiver > 0.5) {
            gl_FragColor = vec4(
              forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
              1.0
            );
            return;
          }
          // Atlas textures are uploaded as SRGBColorSpace; WebGL performs the
          // transfer-function decode during sampling, so this value is already
          // scene-linear and must not be decoded a second time.
          vec3 albedo = texColor.rgb;
          vec3 tinted = albedo * vColor;
          
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(cameraPosition - vWorldPosition);
          
          float shadowFactor = uForwardRefractionRenderMode > 0.5
            ? 1.0
            : getVoxelShadowMask();
          vec3 unshadowedDirectSun = unshadowedDirectSunLighting(normal);
          vec3 directSun = unshadowedDirectSun * shadowFactor;
          vec3 directTransport = unshadowedDirectSun;
          vec4 lighting = calculateEnhancedLighting(tinted, normal, viewDir, vAmbientOcclusion, directSun);
          vec3 lit = lighting.rgb * tinted;
          vec3 color = mix(tinted, lit, clamp(lightingMix, 0.0, 1.0));

          if (waterCausticEnabled && waterCausticMapEnabled) {
            float submerged = 1.0 - smoothstep(waterCausticLevel - 0.75, waterCausticLevel + 0.25, vWorldPosition.y);
            float sunActive = smoothstep(0.02, 0.18, waterCausticSunIntensity);
            if (submerged > 0.001 && sunActive > 0.001) {
              vec3 sun = normalize(sunDirection);
              vec3 refractedSun = refract(-sun, vec3(0.0, 1.0, 0.0), 1.0 / ${Se.toFixed(3)});
              float receiverCos = max(dot(normal, -refractedSun), 0.0);
              float airCos = max(dot(normal, sun), 0.0);
              float angleRatio = airCos > 0.001 ? receiverCos / airCos : 0.0;
              float depth = max(waterCausticLevel - vWorldPosition.y, 0.0);
              float lightDistance = depth / max(-refractedSun.y, 0.12);
              vec3 lightTransmittance = exp(-waterCausticExtinction * lightDistance);
              float sunScale = clamp(waterCausticSunIntensity / 1.35, 0.0, 1.0);
              float field = sampleWaterCaustics(vWorldPosition);
              float focusedField = mix(1.0, field, clamp(waterCausticIntensity, 0.0, 1.0));
              vec3 transport = lightTransmittance * waterSunTransmission(max(sun.y, 0.0))
                * sunScale * angleRatio * focusedField;
              // Keep the forward MRT's direct attachment independent of the
              // voxel visibility map. The composite applies that visibility
              // after receiver matching, so this high-volume geometry is
              // shaded once rather than once for receiver and radiance.
              directTransport = mix(
                unshadowedDirectSun,
                unshadowedDirectSun * transport,
                submerged * sunActive
              );
              vec3 waterDirect = directTransport * shadowFactor;
              // Replace only direct sunlight. Ambient, star, reflection, and
              // albedo remain under the existing block-material lighting path.
              color += tinted * (waterDirect - directSun)
                * clamp(lightingMix, 0.0, 1.0);
            }
          }
          
          // Small blue-noise-ish dithering in scene-linear space to reduce
          // visible banding before the shared output transform.
          if (ditherAmount > 0.0) {
            float n1 = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453);
            float n2 = fract(sin(dot(gl_FragCoord.yx, vec2(39.3467,11.135))) * 24634.6345);
            float tri = (n1 + n2) - 1.0; // triangular distribution in [-1,1]
            float amp = (ditherAmount / 255.0); // ~1 LSB at 1.0
            color += tri * amp;
          }

          // Opaque block pixels use alpha as an internal indirect-light mask
          // for post-processing. Reserve the exact zero value for the opaque
          // ocean's internal surface marker; the one-byte floor is far below
          // the lighting-mask precision that affects the scene color.
          float indirectMask = lighting.a * clamp(lightingMix, 0.0, 1.0);
          float directLightFraction = max(1.0 - indirectMask, 1.0 / 255.0);
          float forwardLightingMix = clamp(lightingMix, 0.0, 1.0);
          vec3 forwardDirectRadiance = tinted * directTransport * forwardLightingMix;
          vec3 forwardNonDirectRadiance = color
            - tinted * directTransport * forwardLightingMix;
          if (uForwardRefractionRenderMode > 0.5) {
            forwardRefractionWriteMrt(
              forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
              max(forwardNonDirectRadiance, vec3(0.0)),
              max(forwardDirectRadiance, vec3(0.0))
            );
            return;
          }
          gl_FragColor = vec4(
            color,
            uForwardRefractionActive > 0.5 ? 1.0 : directLightFraction
          );
      }
    `;super({vertexShader:u,fragmentShader:p,uniforms:Kr.merge([{map:{value:e},normalMap:{value:i||null},envMap:{value:t},roughness:{value:.8},metalness:{value:0},envMapIntensity:{value:.3},alphaScale:{value:1},lightingMix:{value:1},sunDirection:{value:new A(50,120,50).normalize()},sunColor:{value:new V(1,.95,.8)},voxelShadowMask:{value:Ai()},voxelShadowResolution:{value:new q(1,1)},voxelShadowEnabled:{value:!1},dayLight:{value:1},starLight:{value:0},skyAmbient:{value:new V(.12,.18,.32)},waterCausticEnabled:{value:!1},waterCausticLevel:{value:43},waterCausticIntensity:{value:0},waterCausticReferenceDepth:{value:we},waterCausticFieldScale:{value:_e},waterCausticSunIntensity:{value:1.35},waterCausticExtinction:{value:new A(...xr)},waterCausticMap:{value:Ai()},waterCausticMapEnabled:{value:!1},waterCausticOrigin:{value:new q(0,0)},waterCausticExtent:{value:256},waterCausticResolution:{value:new q(256,256)},atlasSize:{value:r?.atlasSize??1},tileSize:{value:r?.tileSize??16},ditherAmount:{value:.75},voxelShadowDepth:{value:Ai()},voxelShadowCameraNear:{value:.1},voxelShadowCameraFar:{value:1024},...o?{alphaCutoff:{value:.5},aaEnabled:{value:!0},aaStrength:{value:1},aaLodBiasEnabled:{value:!0},aaLodBias:{value:.9},leafTileIndicesA:{value:c},leafTileIndicesB:{value:h}}:{}}]),defines:t?{USE_ENVMAP:!0}:{},side:pr,transparent:!1,toneMapped:!1,lights:!1}),this.surfaceMode=a,ta(this)}setMaterialProperties(e,t,i){const r=this.uniforms;r.roughness.value=e,r.metalness.value=t,r.envMapIntensity.value=i}setAlphaScale(e){const t=this.uniforms;t.alphaScale.value=k.clamp(e,0,1)}setLightingMix(e){const t=this.uniforms;t.lightingMix.value=k.clamp(e,0,1)}setAntialiasing(e,t=1){const i=this.uniforms;!i.aaEnabled||!i.aaStrength||(i.aaEnabled.value=!!e,i.aaStrength.value=k.clamp(t,0,1))}setAALodBias(e,t=.9){const i=this.uniforms;!i.aaLodBiasEnabled||!i.aaLodBias||(i.aaLodBiasEnabled.value=!!e,i.aaLodBias.value=k.clamp(t,0,2))}setAtlasInfo(e){const t=this.uniforms;t.tileSize.value=Math.max(1,e.tileSize|0),t.atlasSize.value=Math.max(1,e.atlasSize|0)}setSunUniforms(e,t){const i=this.uniforms;i.sunDirection.value.copy(e),i.sunColor.value.copy(t)}setVoxelShadowTexture(e,t,i,r=!0){const s=this.uniforms;s.voxelShadowMask.value=e,s.voxelShadowResolution.value.set(Math.max(1,t),Math.max(1,i)),s.voxelShadowEnabled.value=r}setVoxelShadowDepthTexture(e,t,i){const r=this.uniforms;r.voxelShadowDepth.value=e,r.voxelShadowCameraNear.value=t,r.voxelShadowCameraFar.value=i}shareVoxelShadowState(e){const t=e.uniforms,i=this.uniforms,r=["voxelShadowMask","voxelShadowDepth","voxelShadowResolution","voxelShadowCameraNear","voxelShadowCameraFar","voxelShadowEnabled"];for(const s of r)i[s]=t[s]}setDayLight(e){const t=this.uniforms;t.dayLight.value=k.clamp(e,0,1)}setStarLight(e){const t=this.uniforms;t.starLight.value=k.clamp(e,0,1)}setSkyAmbient(e){this.uniforms.skyAmbient.value.copy(e)}setWaterCaustics(e,t,i,r=0,s=we,a=1.35){const o=this.uniforms;o.waterCausticEnabled.value=e,o.waterCausticLevel.value=t,o.waterCausticIntensity.value=Math.max(0,i),o.waterCausticReferenceDepth.value=Math.max(2,s),o.waterCausticSunIntensity.value=Math.max(0,a)}setWaterCausticTexture(e,t,i,r,s=we){const a=this.uniforms;a.waterCausticMap.value=e,a.waterCausticMapEnabled.value=!!e,a.waterCausticOrigin.value.set(t.x,t.y),a.waterCausticExtent.value=Math.max(1,i),a.waterCausticResolution.value.set(Math.max(1,r.x),Math.max(1,r.y)),a.waterCausticReferenceDepth.value=Math.max(2,s)}}class Zo extends js{constructor(e,t){super(new q(e,t),X.bloom.strength,X.bloom.radius,X.bloom.threshold),this.renderTargetBright.depthBuffer=!1;for(const i of this.renderTargetsHorizontal)i.depthBuffer=!1;for(const i of this.renderTargetsVertical)i.depthBuffer=!1;this.blendMaterial.blending=Qr,this.blendMaterial.blendEquation=ma,this.blendMaterial.blendSrc=xi,this.blendMaterial.blendDst=xi,this.blendMaterial.blendEquationAlpha=ma,this.blendMaterial.blendSrcAlpha=Jr,this.blendMaterial.blendDstAlpha=xi}setSize(e,t){super.setSize(e,t)}setSettings({enabled:e,strength:t,threshold:i}){e!==void 0&&(this.enabled=e),t!==void 0&&(this.strength=t),i!==void 0&&(this.threshold=i)}}const Yo=`
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,ha=`
  uniform sampler2D tDiffuse;
  uniform sampler2D tOcclusion;
  uniform vec2 resolution;
  uniform float aspect;
  uniform vec2 sourceTop;
  uniform float sourceVisibility;
  uniform float fieldCos;
  uniform float fieldSin;
  uniform vec2 fieldDirection;
  uniform float strength;
  uniform float effectMix;
  varying vec2 vUv;
`,ua=`
  const vec3 LUMA = vec3(0.2126, 0.7152, 0.0722);

  vec2 topUv() {
    return vec2(vUv.x, 1.0 - vUv.y);
  }

  float insideFrame(vec2 suv) {
    return step(0.0, suv.x) * step(suv.x, 1.0)
      * step(0.0, suv.y) * step(suv.y, 1.0);
  }

  vec3 samplePlate(vec2 suv) {
    vec2 bounded = clamp(suv, vec2(0.0), vec2(1.0));
    return texture2D(tDiffuse, vec2(bounded.x, 1.0 - bounded.y)).rgb;
  }

  vec3 sampleHotPlate(vec2 suv) {
    return samplePlate(suv) * insideFrame(suv);
  }

  float effectiveVisibility() {
    return sourceVisibility * texture2D(tOcclusion, vec2(0.5)).r;
  }

  float bloomVisibility() {
    return sourceVisibility * texture2D(tOcclusion, vec2(0.5)).g;
  }

  float gaussian(float x, float falloff) {
    return exp(-x * x * falloff);
  }

  float ellipse(vec2 suv, vec2 center, float rx, float ry) {
    float dx = (suv.x - center.x) * aspect / rx;
    float dy = (suv.y - center.y) / ry;
    return exp(-(dx * dx + dy * dy));
  }

  vec2 ghostPos(float t) {
    return mix(sourceTop, vec2(0.5), t);
  }

  vec2 opticalAxis() {
    vec2 raw = vec2((0.5 - sourceTop.x) * aspect, 0.5 - sourceTop.y);
    return raw / max(length(raw), 1e-5);
  }

  float orientedEllipse(
    vec2 suv,
    vec2 center,
    vec2 radialDir,
    float radialRadius,
    float tangentRadius
  ) {
    vec2 tangent = vec2(-radialDir.y, radialDir.x);
    vec2 rel = vec2((suv.x - center.x) * aspect, suv.y - center.y);
    float qr = dot(rel, radialDir) / radialRadius;
    float qt = dot(rel, tangent) / tangentRadius;
    return exp(-(qr * qr + qt * qt));
  }

  float orientedRing(
    vec2 suv,
    vec2 center,
    vec2 radialDir,
    float radialRadius,
    float tangentRadius,
    float width
  ) {
    vec2 tangent = vec2(-radialDir.y, radialDir.x);
    vec2 rel = vec2((suv.x - center.x) * aspect, suv.y - center.y);
    float qr = dot(rel, radialDir) / radialRadius;
    float qt = dot(rel, tangent) / tangentRadius;
    float e = (length(vec2(qr, qt)) - 1.0) / width;
    return exp(-e * e);
  }

  float fieldPupilEllipse(vec2 suv, vec2 center, vec2 radialDir, float baseRadius) {
    float projectedRadial = baseRadius * max(fieldCos, 0.34);
    return orientedEllipse(suv, center, radialDir, projectedRadial, baseRadius);
  }

  float fieldPupilRing(
    vec2 suv,
    vec2 center,
    vec2 radialDir,
    float baseRadius,
    float width
  ) {
    float projectedRadial = baseRadius * max(fieldCos, 0.34);
    return orientedRing(suv, center, radialDir, projectedRadial, baseRadius, width);
  }

  float axisEllipse(vec2 suv, vec2 center, float longRadius, float shortRadius) {
    vec2 axis = opticalAxis();
    vec2 rel = vec2((suv.x - center.x) * aspect, suv.y - center.y);
    float alongRaw = dot(rel, axis);
    float along = alongRaw / longRadius;
    float across = length(rel - axis * alongRaw) / shortRadius;
    return exp(-(along * along + across * across));
  }

  float hotAt(vec2 suv) {
    vec3 color = sampleHotPlate(suv);
    float luma = dot(color, LUMA);
    float gate = smoothstep(4.0, 18.0, luma);
    return gate * (clamp(luma / 14.0, 0.0, 4.0) + 0.18);
  }

  vec2 radialWarpUv(vec2 suv, float scale) {
    return vec2(
      0.5 + (suv.x - 0.5) / scale,
      0.5 + (suv.y - 0.5) / scale
    );
  }

  vec3 radialGhostRgb(vec2 suv, float scale, float dispersion) {
    return vec3(
      hotAt(radialWarpUv(suv, scale - dispersion)),
      hotAt(radialWarpUv(suv, scale)),
      hotAt(radialWarpUv(suv, scale + dispersion))
    );
  }

  vec3 preparedPlate(vec2 suv, out float rawLuma) {
    vec2 fromCenter = suv - 0.5;
    float edge = clamp(dot(fromCenter, fromCenter) * 1.55, 0.0, 1.0);
    vec2 ca = fromCenter * edge * 0.00042;

    vec3 plate = max(vec3(
      samplePlate(suv + ca).r,
      samplePlate(suv).g,
      samplePlate(suv - ca).b
    ), vec3(0.0)) * 0.79;

    rawLuma = dot(plate, LUMA);
    plate = mix(vec3(rawLuma), plate, 0.92);
    return plate * vec3(1.070, 0.985, 0.900);
  }
`,qo=`
  vec3 flareLayer(vec2 suv) {
    vec2 center = vec2(0.5);
    vec2 p = vec2((suv.x - sourceTop.x) * aspect, suv.y - sourceTop.y);
    float d = length(p);
    vec2 radialDir = fieldDirection;

    float core = gaussian(d, 820.0) * 9.4;
    float nearGlow = gaussian(d, 92.0) * 2.20;
    float midGlow = gaussian(d, 22.0) * 0.96;
    float wideGlow = gaussian(d, 5.8) * 0.36;

    float inwardVeil = axisEllipse(suv, mix(sourceTop, center, 0.34), 0.72, 0.27) * 0.52;
    float sourceWash = ellipse(suv, mix(sourceTop, center, 0.19), 0.62, 0.44) * 0.32;
    float amberFog = ellipse(
      suv,
      mix(sourceTop, center, 0.42) + vec2(-0.035, 0.010),
      0.68,
      0.31
    ) * 0.19;
    float redVeil = ellipse(
      suv,
      mix(sourceTop, center, 0.47) + vec2(-0.060, -0.010),
      0.54,
      0.24
    ) * 0.115;

    vec3 flare = vec3(1.00, 0.90, 0.72) * core
      + vec3(1.00, 0.42, 0.075) * nearGlow
      + vec3(1.00, 0.24, 0.030) * midGlow
      + vec3(1.00, 0.13, 0.015) * wideGlow
      + vec3(1.00, 0.28, 0.045) * inwardVeil
      + vec3(1.00, 0.22, 0.030) * sourceWash
      + vec3(0.92, 0.20, 0.025) * amberFog
      + vec3(0.62, 0.045, 0.025) * redVeil;

    flare += radialGhostRgb(suv, -1.05, 0.010) * vec3(0.090, 0.078, 0.082);
    flare += radialGhostRgb(suv, -0.73, 0.007) * vec3(0.075, 0.068, 0.074);
    flare += radialGhostRgb(suv, -0.50, 0.0045) * vec3(0.055, 0.052, 0.060);
    flare += radialGhostRgb(suv, -0.31, 0.0030) * vec3(0.038, 0.036, 0.043);

    vec2 gTerminalA = ghostPos(2.12);
    vec2 gTerminalB = ghostPos(2.28);
    vec2 gCool = ghostPos(1.84);
    vec2 gWarm0 = ghostPos(1.62);
    vec2 gWarm1 = ghostPos(1.48);
    vec2 gBead0 = ghostPos(1.34);
    vec2 gBead1 = ghostPos(1.23);
    vec2 gBead2 = ghostPos(1.15);
    vec2 gBead3 = ghostPos(1.08);
    vec2 gBead4 = ghostPos(1.03);

    float terminalAOuter = fieldPupilEllipse(suv, gTerminalA, radialDir, 0.086);
    float terminalAInner = fieldPupilEllipse(suv, gTerminalA, radialDir, 0.052);
    float terminalAHalo = fieldPupilEllipse(suv, gTerminalA, radialDir, 0.132);
    float terminalBOuter = fieldPupilEllipse(suv, gTerminalB, radialDir, 0.102);
    float terminalBInner = fieldPupilEllipse(suv, gTerminalB, radialDir, 0.064);
    float terminalBHalo = fieldPupilEllipse(suv, gTerminalB, radialDir, 0.154);

    float coolCore = fieldPupilEllipse(suv, gCool, radialDir, 0.047);
    float coolShell = fieldPupilRing(suv, gCool, radialDir, 0.059, 0.22);
    float coolLeak = fieldPupilEllipse(suv, gCool, radialDir, 0.067);
    float coolHalo = fieldPupilEllipse(suv, gCool, radialDir, 0.104);

    float warm0Outer = fieldPupilEllipse(suv, gWarm0, radialDir, 0.058);
    float warm0Inner = fieldPupilEllipse(suv, gWarm0, radialDir, 0.037);
    float warm0Halo = fieldPupilEllipse(suv, gWarm0, radialDir, 0.094);
    float warm1 = fieldPupilEllipse(suv, gWarm1, radialDir, 0.027);
    float warm1Halo = fieldPupilEllipse(suv, gWarm1, radialDir, 0.052);

    float bead0 = fieldPupilEllipse(suv, gBead0, radialDir, 0.0078);
    float bead1 = fieldPupilEllipse(suv, gBead1, radialDir, 0.0062);
    float bead2 = fieldPupilEllipse(suv, gBead2, radialDir, 0.0049);
    float bead3 = fieldPupilEllipse(suv, gBead3, radialDir, 0.0036);
    float bead4 = fieldPupilEllipse(suv, gBead4, radialDir, 0.0026);

    float residualHaze = axisEllipse(suv, ghostPos(2.34), 0.24, 0.026) * 0.62
      + axisEllipse(suv, ghostPos(2.18), 0.16, 0.035) * 0.38;

    flare += vec3(1.00, 0.18, 0.030) * terminalAOuter * 0.27;
    flare += vec3(1.00, 0.46, 0.17) * terminalAInner * 0.62;
    flare += vec3(1.00, 0.31, 0.10) * terminalAHalo * 0.075;
    flare += vec3(1.00, 0.28, 0.085) * terminalBOuter * 0.074;
    flare += vec3(1.00, 0.54, 0.23) * terminalBInner * 0.032;
    flare += vec3(1.00, 0.34, 0.12) * terminalBHalo * 0.024;

    flare += vec3(0.53, 0.67, 1.00) * coolCore * 0.52;
    flare += vec3(0.21, 0.54, 0.92) * coolShell * 0.21;
    flare += vec3(1.00, 0.54, 0.22) * coolLeak * 0.066;
    flare += vec3(0.28, 0.48, 0.92) * coolHalo * 0.052;

    flare += vec3(1.00, 0.35, 0.14) * warm0Outer * 0.31;
    flare += vec3(1.00, 0.67, 0.40) * warm0Inner * 0.43;
    flare += vec3(1.00, 0.42, 0.16) * warm0Halo * 0.070;
    flare += vec3(1.00, 0.84, 0.56) * warm1 * 0.35;
    flare += vec3(1.00, 0.58, 0.30) * warm1Halo * 0.045;

    flare += vec3(1.00, 0.74, 0.42) * bead0 * 0.27;
    flare += vec3(1.00, 0.52, 0.18) * bead1 * 0.21;
    flare += vec3(1.00, 0.82, 0.60) * bead2 * 0.15;
    flare += vec3(0.98, 0.84, 0.74) * bead3 * 0.095;
    flare += vec3(1.00, 0.58, 0.28) * bead4 * 0.052;
    flare += vec3(1.00, 0.48, 0.16) * residualHaze * 0.036;

    vec2 ringCenter = ghostPos(1.62);
    float spectralSpread = fieldSin * 0.0075;
    float redRadius = 0.056 + spectralSpread;
    float greenRadius = 0.056;
    float blueRadius = max(0.043, 0.056 - spectralSpread);

    float redRing = fieldPupilRing(suv, ringCenter, radialDir, redRadius, 0.180);
    float greenRing = fieldPupilRing(suv, ringCenter, radialDir, greenRadius, 0.168);
    float blueRing = fieldPupilRing(suv, ringCenter, radialDir, blueRadius, 0.185);
    float ringCore = fieldPupilEllipse(suv, ringCenter, radialDir, 0.033);

    float ringOutside = max(
      max(-ringCenter.x, ringCenter.x - 1.0),
      max(-ringCenter.y, ringCenter.y - 1.0)
    );
    float ringFrameGate = 1.0 - smoothstep(0.02, 0.18, ringOutside);
    float ringGate = effectiveVisibility() * ringFrameGate;

    flare += vec3(1.00, 0.10, 0.015) * redRing * 0.080 * ringGate;
    flare += vec3(0.20, 0.52, 0.075) * greenRing * 0.044 * ringGate;
    flare += vec3(0.15, 0.22, 0.92) * blueRing * 0.052 * ringGate;
    flare += vec3(0.22, 0.08, 0.30) * ringCore * 0.018 * ringGate;

    float sourceFrameMargin = min(
      min(sourceTop.x, sourceTop.y),
      min(1.0 - sourceTop.x, 1.0 - sourceTop.y)
    );
    float starEdgeGate = smoothstep(0.01, 0.07, sourceFrameMargin) * 0.80 + 0.20;

    float hRay = gaussian(abs(p.y), 56000.0) * gaussian(abs(p.x), 11.5);
    float vRay = gaussian(abs(p.x), 78000.0) * gaussian(abs(p.y), 18.0);

    float d1Along = p.x * 0.70710678 + p.y * 0.70710678;
    float d1Perp = p.y * 0.70710678 - p.x * 0.70710678;
    float d2Along = p.x * 0.70710678 - p.y * 0.70710678;
    float d2Perp = p.y * 0.70710678 + p.x * 0.70710678;
    float d1Ray = gaussian(abs(d1Perp), 42000.0) * gaussian(abs(d1Along), 14.0);
    float d2Ray = gaussian(abs(d2Perp), 42000.0) * gaussian(abs(d2Along), 14.0);

    float s1Along = p.x * 0.93969262 + p.y * 0.34202014;
    float s1Perp = p.y * 0.93969262 - p.x * 0.34202014;
    float s2Along = p.x * 0.93969262 - p.y * 0.34202014;
    float s2Perp = p.y * 0.93969262 + p.x * 0.34202014;
    float s1Ray = gaussian(abs(s1Perp), 36000.0) * gaussian(abs(s1Along), 22.0);
    float s2Ray = gaussian(abs(s2Perp), 36000.0) * gaussian(abs(s2Along), 22.0);

    vec3 whiteStar = vec3(1.00, 0.97, 0.92) * (
      hRay * 0.28 + vRay * 0.22 + d1Ray * 0.18 + d2Ray * 0.18
      + s1Ray * 0.07 + s2Ray * 0.07
    );
    vec3 warmStar = vec3(1.00, 0.78, 0.50) * ((d1Ray + d2Ray) * 0.11 + vRay * 0.05);
    vec3 fringeStar = vec3(1.00, 0.56, 0.82) * hRay * 0.09
      + vec3(0.52, 0.86, 0.72) * vRay * 0.03;
    flare += (whiteStar + warmStar + fringeStar) * 0.34 * starEdgeGate;

    return flare * strength * effectiveVisibility() * effectMix;
  }
`,jo=`
  precision highp float;
  ${ha}
  ${ua}
  ${qo}

  void main() {
    gl_FragColor = vec4(flareLayer(topUv()), 1.0);
  }
`,$o=`
  precision highp float;
  ${ha}
  uniform int seedMode;
  uniform float bloomThreshold;
  ${ua}

  void main() {
    vec2 suv = topUv();
    float rawLuma;
    vec3 plate = preparedPlate(suv, rawLuma);
    vec2 sourceDelta = vec2((suv.x - sourceTop.x) * aspect, suv.y - sourceTop.y);
    float sourceWindow = gaussian(length(sourceDelta), 11.0) * bloomVisibility();

    vec3 seed;
    if (seedMode == 0) {
      float hotMask = smoothstep(2.9, 10.5, rawLuma) * sourceWindow;
      seed = clamp(plate, 0.0, 28.0) * hotMask;
    } else {
      float haloMask = smoothstep(1.8, 6.1, rawLuma) * sourceWindow;
      seed = clamp(plate, 0.0, 18.0) * haloMask * vec3(1.0, 0.30, 0.055);
    }

    float highPass = smoothstep(bloomThreshold, bloomThreshold + 0.01, dot(seed, LUMA));
    gl_FragColor = vec4(seed * highPass, 1.0);
  }
`,Ko=`
  precision highp float;
  uniform sampler2D tDepth;
  uniform sampler2D tSceneColor;
  uniform vec2 resolution;
  uniform vec2 sourceTop;
  uniform float solarDiscRadiusUv;
  uniform float sourceThroughWater;

  float skyAt(vec2 sourceUv, vec2 offset) {
    vec2 uv = clamp(sourceUv + offset, vec2(0.0), vec2(1.0));
    float rawDepth = texture2D(tDepth, uv).r;
    // The depth capture deliberately excludes water for refraction. Above
    // water, reject the visible ocean marker so the direct sky source cannot
    // bypass the interface. Underwater, sourceTop is already the analytic
    // Snell-mapped direction and is therefore inside the window; the ocean is
    // its transmissive aperture, not an occluder. Opaque terrain still blocks
    // both paths through the shared water-free depth capture.
    float visibleWater = 1.0 - step(${aa.toFixed(6)}, texture2D(tSceneColor, uv).a);
    float mediumAperture = mix(1.0 - visibleWater, 1.0, sourceThroughWater);
    return step(0.99999, rawDepth) * mediumAperture;
  }

  void main() {
    if (sourceTop.x < 0.0 || sourceTop.x > 1.0 || sourceTop.y < 0.0 || sourceTop.y > 1.0) {
      gl_FragColor = vec4(1.0);
      return;
    }

    vec2 sourceUv = vec2(sourceTop.x, 1.0 - sourceTop.y);
    vec2 ringAspect = vec2(1.0 / max(resolution.x / resolution.y, 1e-5), 1.0);
    float discInner = 0.0;
    float discOuter = 0.0;
    float inner = 0.0;
    float middle = 0.0;
    float outer = 0.0;
    for (int i = 0; i < 16; i++) {
      float angle = float(i) * 0.3926990817;
      vec2 direction = vec2(cos(angle), sin(angle)) * ringAspect;

      // Integrate the finite 0.53-degree solar disc. Partial coverage now
      // produces a continuous visible fraction as an occluder edge crosses.
      discInner += skyAt(sourceUv, direction * solarDiscRadiusUv * 0.38);
      discOuter += skyAt(sourceUv, direction * solarDiscRadiusUv * 0.82);

      // Wider angular rings estimate how much glare-producing sky remains.
      // Their radii and weights intentionally favor broad context, so a thin
      // silhouette differs materially from a hillside filling the frame.
      inner += skyAt(sourceUv, direction * 0.040);
      middle += skyAt(sourceUv, direction * 0.110);
      outer += skyAt(sourceUv, direction * 0.220);
    }

    float directVisibility = smoothstep(
      0.015,
      0.985,
      (discInner / 16.0) * 0.35 + (discOuter / 16.0) * 0.65
    );
    float apertureVisibility = directVisibility * 0.03
      + (inner / 16.0) * 0.12
      + (middle / 16.0) * 0.28
      + (outer / 16.0) * 0.57;
    gl_FragColor = vec4(directVisibility, apertureVisibility, 0.0, 1.0);
  }
`,Qo=`
  precision highp float;
  uniform sampler2D currentBloom;
  uniform sampler2D previousBloom;
  uniform sampler2D occlusionTexture;
  uniform float deltaTime;
  uniform float historyValid;
  varying vec2 vUv;

  void main() {
    vec3 current = texture2D(currentBloom, vUv).rgb;
    vec3 previous = texture2D(previousBloom, vUv).rgb;

    if (historyValid < 0.5) {
      gl_FragColor = vec4(current, 1.0);
      return;
    }

    float currentLuma = dot(current, vec3(0.2126, 0.7152, 0.0722));
    float previousLuma = dot(previous, vec3(0.2126, 0.7152, 0.0722));
    vec2 visibility = texture2D(occlusionTexture, vec2(0.5)).rg;
    float blocked = 1.0 - smoothstep(0.15, 0.85, visibility.r);
    float aperture = smoothstep(0.04, 0.92, visibility.g);
    float retainedFraction = mix(0.035, 0.96, aperture);
    vec3 retainedBloom = previous * retainedFraction;
    vec3 target = mix(current, max(current, retainedBloom), blocked);

    // Broad blockers release quickly; narrow blockers preserve the diffuse
    // glare. While the source is visible, old screen-space bloom clears fast
    // enough to avoid trails as the camera moves.
    float blockedRelease = mix(8.0, 1.2, aperture);
    float responseRate = currentLuma > previousLuma
      ? 18.0
      : mix(8.0, blockedRelease, blocked);
    float response = 1.0 - exp(-responseRate * clamp(deltaTime, 0.0, 0.1));
    gl_FragColor = vec4(mix(previous, target, response), 1.0);
  }
`,Jo=`
  precision highp float;
  uniform sampler2D bloomInput;
  uniform float bloomThreshold;
  varying vec2 vUv;

  void main() {
    vec3 color = texture2D(bloomInput, vUv).rgb;
    float luma = dot(color, vec3(0.2126, 0.7152, 0.0722));
    float highPass = smoothstep(bloomThreshold, bloomThreshold + 0.01, luma);
    gl_FragColor = vec4(color * highPass, 1.0);
  }
`,en=`
  precision highp float;
  ${ha}
  uniform sampler2D sourceBloom;
  uniform sampler2D haloBloom;
  uniform sampler2D flareTexture;
  uniform sampler2D flareBloom;
  uniform float timeSeconds;
  uniform float hardEnabled;
  uniform int debugMode;
  ${ua}

  void main() {
    vec4 source = texture2D(tDiffuse, vUv);
    if (hardEnabled < 0.5 && debugMode == 0) {
      gl_FragColor = source;
      return;
    }

    vec2 suv = topUv();
    float rawLuma;
    vec3 plate = preparedPlate(suv, rawLuma);
    vec3 sourceBloomColor = texture2D(sourceBloom, vUv).rgb;
    vec3 haloBloomColor = texture2D(haloBloom, vUv).rgb;
    vec3 flare = texture2D(flareTexture, vUv).rgb;
    vec3 flareBloomColor = texture2D(flareBloom, vUv).rgb;

    if (debugMode == 1) {
      gl_FragColor = source;
      return;
    }
    if (debugMode == 2) {
      gl_FragColor = vec4(plate, 1.0);
      return;
    }
    if (debugMode == 3) {
      gl_FragColor = vec4(flare, 1.0);
      return;
    }
    if (debugMode == 4) {
      gl_FragColor = vec4(sourceBloomColor, 1.0);
      return;
    }
    if (debugMode == 5) {
      gl_FragColor = vec4(haloBloomColor, 1.0);
      return;
    }
    if (debugMode == 6) {
      gl_FragColor = vec4(flareBloomColor, 1.0);
      return;
    }
    if (debugMode == 7) {
      float hot = hotAt(suv);
      gl_FragColor = vec4(vec3(hot), 1.0);
      return;
    }
    if (debugMode == 8) {
      gl_FragColor = vec4(vec3(effectiveVisibility()), 1.0);
      return;
    }

    vec3 comp = plate
      + sourceBloomColor * 0.92 * effectMix * strength
      + haloBloomColor * vec3(1.0, 0.40, 0.13) * 1.30 * effectMix * strength
      + flare
      + flareBloomColor * 0.56 * effectMix;

    float veilMaskA = axisEllipse(suv, mix(sourceTop, vec2(0.5), 0.33), 0.84, 0.33);
    float veilMaskB = ellipse(suv, mix(sourceTop, vec2(0.5), 0.28), 0.70, 0.52);
    float veilMask = clamp(veilMaskA * 0.88 + veilMaskB * 0.58, 0.0, 1.0)
      * bloomVisibility() * effectMix * strength;
    float compLumaBeforeVeil = dot(comp, LUMA);
    vec3 warmNeutral = mix(vec3(compLumaBeforeVeil), vec3(1.24, 0.60, 0.30), 0.28);
    comp = mix(comp, comp * 0.60 + warmNeutral * 0.62, veilMask * 0.64);

    float milkMaskA = ellipse(suv, mix(sourceTop, vec2(0.5), 0.40), 0.96, 0.60);
    float milkMaskB = axisEllipse(suv, mix(sourceTop, vec2(0.5), 0.46), 1.10, 0.35);
    float milkMask = clamp(milkMaskA * 0.46 + milkMaskB * 0.36, 0.0, 1.0)
      * bloomVisibility() * effectMix * strength;
    float milkLuma = dot(comp, LUMA);
    vec3 creamyLift = mix(vec3(milkLuma), vec3(1.34, 0.82, 0.42), 0.20);
    comp = mix(comp, comp * 0.82 + creamyLift * 0.32, milkMask * 0.24);

    float filmLuma = dot(comp, LUMA);
    float filmWarmMask = smoothstep(0.18, 1.8, filmLuma);
    float shadowMask = 1.0 - smoothstep(0.08, 0.58, filmLuma);
    float shoulderMask = smoothstep(0.55, 3.2, filmLuma);
    vec3 filmTint = mix(vec3(0.972, 0.995, 1.032), vec3(1.105, 0.956, 0.836), filmWarmMask);
    comp *= filmTint;
    comp = mix(comp, comp * vec3(0.90, 0.94, 1.02), shadowMask * 0.18);
    float shoulderLuma = dot(comp, LUMA);
    vec3 creamyShoulder = mix(vec3(shoulderLuma), vec3(1.18, 0.86, 0.62), 0.18);
    comp = mix(comp, comp * 0.90 + creamyShoulder * 0.16, shoulderMask * 0.34);

    float densityMask = 1.0 - smoothstep(1.0, 4.0, filmLuma);
    comp *= mix(1.0, 0.72, densityMask);
    float highlightDesat = smoothstep(0.75, 4.6, filmLuma) * 0.15;
    comp = mix(comp, vec3(dot(comp, LUMA)), highlightDesat);

    vec2 fromCenter = suv - 0.5;
    float vx = fromCenter.x * aspect * 0.66;
    float vd = vx * vx + fromCenter.y * fromCenter.y;
    float vignette = 1.0 - smoothstep(0.22, 0.80, vd) * 0.11;
    comp *= vignette;

    vec2 grainUv = suv * vec2(1919.0, 1087.0) + vec2(timeSeconds * 43.17, timeSeconds * 17.71);
    float noise = fract(sin(dot(grainUv, vec2(12.9898, 78.233))) * 43758.5453) - 0.5;
    float compLuma = dot(comp, LUMA);
    float grainMask = (1.0 - smoothstep(1.5, 5.2, compLuma)) * 0.0052;
    comp = max(comp + noise * grainMask, vec3(0.0));

    gl_FragColor = vec4(comp, 1.0);
  }
`,Je=Object.freeze({initialFovDeg:58,minimumFovDeg:26,maximumFovDeg:105,initialSourceScreen:Object.freeze([.785,.625]),strength:1,exposure:.92}),La=new A,Wa=new A,Va=new A,ct=new A,tn=new A;function Yi(n,e,t){return k.smoothstep(n,e,t)}function an(n){const e=Yi(n,-.14,.02),t=k.lerp(.18,1,Yi(n,-.02,.3));return e*t}function rn(n,e=new A){ct.copy(n).normalize();const t=1/Se,i=k.clamp(ct.y,0,1),r=Math.sqrt(Math.max(1-t*t*(1-i*i),0));return e.set(ct.x*t,r,ct.z*t).normalize()}function sn(n,e,t=1,i=new q(...Je.initialSourceScreen),r=new q(1,0),s){const a=s??{sourceTop:new q,visibility:0,fieldCos:1,fieldSin:0,fieldDirection:new q};n.getWorldDirection(La).normalize(),Wa.setFromMatrixColumn(n.matrixWorld,0).normalize(),Va.setFromMatrixColumn(n.matrixWorld,1).normalize(),ct.copy(e).normalize();const o=ct.dot(La);if(o<=.015||!Number.isFinite(o))return a.sourceTop.copy(i),a.visibility=0,a.fieldCos=1,a.fieldSin=0,a.fieldDirection.copy(r),a;const l=Math.max(1e-6,n.aspect),c=k.clamp(n.fov,Je.minimumFovDeg,Je.maximumFovDeg),h=Math.tan(k.degToRad(c)*.5),u=.5+ct.dot(Wa)/(o*h*l)*.5,d=.5-ct.dot(Va)/(o*h)*.5;if(!Number.isFinite(u)||!Number.isFinite(d))return a.sourceTop.copy(i),a.visibility=0,a.fieldCos=1,a.fieldSin=0,a.fieldDirection.copy(r),a;const f=k.clamp(o,0,1);a.fieldCos=f,a.fieldSin=Math.sqrt(Math.max(0,1-f*f));const m=(u-.5)*l,p=d-.5,v=Math.hypot(m,p);v>1e-7?a.fieldDirection.set(m/v,p/v):a.fieldDirection.copy(r);const x=Math.max(0,-u,u-1,-d,d-1),y=k.clamp(1-x/.36,0,1),g=Yi(o,.015,.12);return a.visibility=y*g*k.clamp(t,0,1),a.sourceTop.set(k.clamp(u,-2,3),k.clamp(d,-2,3)),a}function mt(n,e,t,i=rt){const r=new We(n,e,{type:i,format:re,minFilter:pe,magFilter:pe,depthBuffer:!1,stencilBuffer:!1});return r.texture.name=t,r.texture.colorSpace=fe,r.texture.generateMipmaps=!1,r}function st(n,e){return new He({uniforms:e,vertexShader:Yo,fragmentShader:n,depthTest:!1,depthWrite:!1,blending:$i,toneMapped:!1})}function on(n){const e=Math.max(1,Math.floor(n)),t=e/3,i=Array.from({length:e},(o,l)=>.39894*Math.exp(-.5*l*l/(t*t))/t),r=[];let s=0,a=0;for(let o=1;o<e;o+=2){const l=o+1;if(l>=e){s=o,a=i[o];break}const c=i[o]+i[l];r.push({offset:(o*i[o]+l*i[l])/c,weight:c})}return{centerWeight:i[0],pairs:r,tailOffset:s,tailWeight:a}}function nn(n){const e=on(n);return st(`
    precision highp float;
    #define GAUSSIAN_PAIR_COUNT ${Math.max(1,e.pairs.length)}
    uniform sampler2D colorTexture;
    uniform vec2 invSize;
    uniform vec2 direction;
    uniform vec2 gaussianPairs[GAUSSIAN_PAIR_COUNT];
    uniform float gaussianCenterWeight;
    uniform float gaussianTailOffset;
    uniform float gaussianTailWeight;
    varying vec2 vUv;

    void main() {
      vec3 diffuseSum = texture2D(colorTexture, vUv).rgb * gaussianCenterWeight;
      for (int i = 0; i < GAUSSIAN_PAIR_COUNT; i++) {
        vec2 pair = gaussianPairs[i];
        vec2 offset = direction * invSize * pair.x;
        diffuseSum += (
          texture2D(colorTexture, vUv + offset).rgb
          + texture2D(colorTexture, vUv - offset).rgb
        ) * pair.y;
      }
      if (gaussianTailWeight > 0.0) {
        vec2 offset = direction * invSize * gaussianTailOffset;
        diffuseSum += (
          texture2D(colorTexture, vUv + offset).rgb
          + texture2D(colorTexture, vUv - offset).rgb
        ) * gaussianTailWeight;
      }
      gl_FragColor = vec4(diffuseSum, 1.0);
    }
  `,{colorTexture:{value:null},invSize:{value:new q(.5,.5)},direction:{value:new q(1,0)},gaussianPairs:{value:e.pairs.map(t=>new q(t.offset,t.weight))},gaussianCenterWeight:{value:e.centerWeight},gaussianTailOffset:{value:e.tailOffset},gaussianTailWeight:{value:e.tailWeight}})}class Ei{name;strength;radius;threshold;brightTarget;horizontalTargets=[];verticalTargets=[];blurMaterials=[];compositeMaterial;temporalTargets;temporalMaterial;temporalIndex=0;temporalHistoryValid=!1;constructor(e,t,i,r,s=!1){this.name=e,this.strength=t,this.radius=i,this.threshold=r,this.brightTarget=mt(1,1,`${e}.bright`);const a=[6,10,14,18,22];for(let o=0;o<a.length;o+=1)this.horizontalTargets.push(mt(1,1,`${e}.h${o}`)),this.verticalTargets.push(mt(1,1,`${e}.v${o}`)),this.blurMaterials.push(nn(a[o]));this.compositeMaterial=st(`
      precision highp float;
      uniform sampler2D blurTexture0;
      uniform sampler2D blurTexture1;
      uniform sampler2D blurTexture2;
      uniform sampler2D blurTexture3;
      uniform sampler2D blurTexture4;
      uniform float bloomStrength;
      uniform float bloomRadius;
      varying vec2 vUv;

      float lerpBloomFactor(float factor) {
        return mix(factor, 1.2 - factor, bloomRadius);
      }

      void main() {
        vec3 color = texture2D(blurTexture0, vUv).rgb * lerpBloomFactor(1.0)
          + texture2D(blurTexture1, vUv).rgb * lerpBloomFactor(0.8)
          + texture2D(blurTexture2, vUv).rgb * lerpBloomFactor(0.6)
          + texture2D(blurTexture3, vUv).rgb * lerpBloomFactor(0.4)
          + texture2D(blurTexture4, vUv).rgb * lerpBloomFactor(0.2);
        gl_FragColor = vec4(color * bloomStrength, 1.0);
      }
    `,{blurTexture0:{value:this.verticalTargets[0].texture},blurTexture1:{value:this.verticalTargets[1].texture},blurTexture2:{value:this.verticalTargets[2].texture},blurTexture3:{value:this.verticalTargets[3].texture},blurTexture4:{value:this.verticalTargets[4].texture},bloomStrength:{value:t},bloomRadius:{value:i}}),this.temporalTargets=s?[mt(1,1,`${e}.history0`),mt(1,1,`${e}.history1`)]:null,this.temporalMaterial=s?st(Qo,{currentBloom:{value:this.horizontalTargets[0].texture},previousBloom:{value:this.temporalTargets?.[0].texture??null},occlusionTexture:{value:null},deltaTime:{value:0},historyValid:{value:0}}):null}get texture(){return this.temporalTargets?this.temporalTargets[this.temporalIndex].texture:this.horizontalTargets[0].texture}setSize(e,t){let i=Math.max(1,Math.round(e/2)),r=Math.max(1,Math.round(t/2));if(this.brightTarget.setSize(i,r),this.temporalTargets){for(const s of this.temporalTargets)s.setSize(i,r);this.temporalHistoryValid=!1}for(let s=0;s<this.blurMaterials.length;s+=1)this.horizontalTargets[s].setSize(i,r),this.verticalTargets[s].setSize(i,r),this.blurMaterials[s].uniforms.invSize.value.set(1/i,1/r),i=Math.max(1,Math.round(i/2)),r=Math.max(1,Math.round(r/2))}renderFromBright(e,t){let i=this.brightTarget;for(let r=0;r<this.blurMaterials.length;r+=1){const s=this.blurMaterials[r];s.uniforms.colorTexture.value=i.texture,s.uniforms.direction.value.set(1,0),t.material=s,e.setRenderTarget(this.horizontalTargets[r]),e.clear(!0,!1,!1),t.render(e),s.uniforms.colorTexture.value=this.horizontalTargets[r].texture,s.uniforms.direction.value.set(0,1),e.setRenderTarget(this.verticalTargets[r]),e.clear(!0,!1,!1),t.render(e),i=this.verticalTargets[r]}t.material=this.compositeMaterial,e.setRenderTarget(this.horizontalTargets[0]),e.clear(!0,!1,!1),t.render(e)}clearOutput(e){if(e.setRenderTarget(this.horizontalTargets[0]),e.clear(!0,!1,!1),this.temporalTargets){for(const t of this.temporalTargets)e.setRenderTarget(t),e.clear(!0,!1,!1);this.temporalHistoryValid=!1}}invalidateTemporalHistory(){this.temporalHistoryValid=!1}renderTemporal(e,t,i,r){if(!this.temporalTargets||!this.temporalMaterial)return;const s=this.temporalIndex,a=s===0?1:0;this.temporalMaterial.uniforms.currentBloom.value=this.horizontalTargets[0].texture,this.temporalMaterial.uniforms.previousBloom.value=this.temporalTargets[s].texture,this.temporalMaterial.uniforms.occlusionTexture.value=r,this.temporalMaterial.uniforms.deltaTime.value=Number.isFinite(i)?Math.max(0,i):0,this.temporalMaterial.uniforms.historyValid.value=this.temporalHistoryValid?1:0,t.material=this.temporalMaterial,e.setRenderTarget(this.temporalTargets[a]),e.clear(!0,!1,!1),t.render(e),this.temporalIndex=a,this.temporalHistoryValid=!0}getTargets(){return[this.brightTarget,...this.horizontalTargets,...this.verticalTargets,...this.temporalTargets??[]]}dispose(){this.brightTarget.dispose();for(const e of this.horizontalTargets)e.dispose();for(const e of this.verticalTargets)e.dispose();for(const e of this.blurMaterials)e.dispose();if(this.compositeMaterial.dispose(),this.temporalTargets)for(const e of this.temporalTargets)e.dispose();this.temporalMaterial?.dispose()}}class ln extends $s{commonUniforms;occlusionMaterial;flareMaterial;seedMaterial;flareBrightMaterial;compositeMaterial;quad;occlusionTarget;flareTarget;sourceBloom=new Ei("LensFlare.sourceBloom",.42,.8,.0105,!0);haloBloom=new Ei("LensFlare.haloBloom",.5,.96,.008,!0);flareBloom=new Ei("LensFlare.flareBloom",.84,.9,.03);projection;previousSource=new q(...Je.initialSourceScreen);previousFieldDirection=new q(1,0);oldClearColor=new V;effectEnabled=!0;cameraSubmerged=!1;debugMode=0;elapsedSeconds=0;opticalTargetsValid=!1;opticsWereActive=!1;constructor(){super(),this.commonUniforms={tDiffuse:{value:null},tOcclusion:{value:null},resolution:{value:new q(1,1)},aspect:{value:1},sourceTop:{value:this.previousSource.clone()},sourceVisibility:{value:0},fieldCos:{value:1},fieldSin:{value:0},fieldDirection:{value:this.previousFieldDirection.clone()},strength:{value:Je.strength},effectMix:{value:1}},this.occlusionTarget=mt(1,1,"LensFlare.occlusion",Pe),this.occlusionTarget.texture.minFilter=N,this.occlusionTarget.texture.magFilter=N,this.flareTarget=mt(1,1,"LensFlare.flare"),this.commonUniforms.tOcclusion.value=this.occlusionTarget.texture,this.occlusionMaterial=st(Ko,{tDepth:{value:null},tSceneColor:this.commonUniforms.tDiffuse,resolution:this.commonUniforms.resolution,sourceTop:this.commonUniforms.sourceTop,solarDiscRadiusUv:{value:.0042},sourceThroughWater:{value:0}}),this.flareMaterial=st(jo,{...this.commonUniforms}),this.seedMaterial=st($o,{...this.commonUniforms,seedMode:{value:0},bloomThreshold:{value:this.sourceBloom.threshold}}),this.flareBrightMaterial=st(Jo,{bloomInput:{value:this.flareTarget.texture},bloomThreshold:{value:this.flareBloom.threshold}}),this.compositeMaterial=st(en,{...this.commonUniforms,sourceBloom:{value:this.sourceBloom.texture},haloBloom:{value:this.haloBloom.texture},flareTexture:{value:this.flareTarget.texture},flareBloom:{value:this.flareBloom.texture},timeSeconds:{value:0},hardEnabled:{value:1},debugMode:{value:0}}),this.quad=new Ks(this.compositeMaterial),this.projection={sourceTop:this.previousSource.clone(),visibility:0,fieldCos:1,fieldSin:0,fieldDirection:this.previousFieldDirection.clone()}}setDepthTexture(e){this.occlusionMaterial.uniforms.tDepth.value=e}setSize(e,t){const i=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t));this.commonUniforms.resolution.value.set(i,r),this.commonUniforms.aspect.value=i/r,this.flareTarget.setSize(i,r),this.sourceBloom.setSize(i,r),this.haloBloom.setSize(i,r),this.flareBloom.setSize(i,r),this.opticalTargetsValid=!1}update(e,t,i){const r=i?.sunDirection??t,s=an(r.y),a=this.cameraSubmerged?rn(r,tn):r;sn(e,a,s,this.previousSource,this.previousFieldDirection,this.projection),this.previousSource.copy(this.projection.sourceTop),this.previousFieldDirection.copy(this.projection.fieldDirection),this.commonUniforms.sourceTop.value.copy(this.projection.sourceTop),this.commonUniforms.sourceVisibility.value=this.projection.visibility,this.commonUniforms.fieldCos.value=this.projection.fieldCos,this.commonUniforms.fieldSin.value=this.projection.fieldSin,this.commonUniforms.fieldDirection.value.copy(this.projection.fieldDirection);const o=k.degToRad(k.clamp(e.fov,Je.minimumFovDeg,Je.maximumFovDeg))*.5;this.occlusionMaterial.uniforms.solarDiscRadiusUv.value=Math.tan(k.degToRad(.53)*.5)/(2*Math.tan(o))}setCameraSubmerged(e){this.cameraSubmerged!==e&&(this.cameraSubmerged=e,this.occlusionMaterial.uniforms.sourceThroughWater.value=e?1:0,this.sourceBloom.invalidateTemporalHistory(),this.haloBloom.invalidateTemporalHistory())}setEnabled(e){this.effectEnabled=e,this.commonUniforms.effectMix.value=e?1:0,this.compositeMaterial.uniforms.hardEnabled.value=e?1:0}setIntensity(e){this.commonUniforms.strength.value=k.clamp(e,0,2)}setDebugMode(e){this.debugMode=k.clamp(Math.floor(e),0,8),this.compositeMaterial.uniforms.debugMode.value=this.debugMode}render(e,t,i,r=0){this.elapsedSeconds+=Number.isFinite(r)?Math.max(0,r):0,this.commonUniforms.tDiffuse.value=i.texture,this.compositeMaterial.uniforms.timeSeconds.value=this.elapsedSeconds;const s=e.getRenderTarget();e.getClearColor(this.oldClearColor);const a=e.getClearAlpha(),o=e.autoClear;e.autoClear=!1,e.setClearColor(0,0);try{this.effectEnabled&&Number(this.commonUniforms.sourceVisibility.value)>1e-6?(this.renderMaterial(e,this.occlusionTarget,this.occlusionMaterial),this.renderMaterial(e,this.flareTarget,this.flareMaterial),this.seedMaterial.uniforms.seedMode.value=0,this.seedMaterial.uniforms.bloomThreshold.value=this.sourceBloom.threshold,this.renderMaterial(e,this.sourceBloom.brightTarget,this.seedMaterial),this.sourceBloom.renderFromBright(e,this.quad),this.sourceBloom.renderTemporal(e,this.quad,r,this.occlusionTarget.texture),this.seedMaterial.uniforms.seedMode.value=1,this.seedMaterial.uniforms.bloomThreshold.value=this.haloBloom.threshold,this.renderMaterial(e,this.haloBloom.brightTarget,this.seedMaterial),this.haloBloom.renderFromBright(e,this.quad),this.haloBloom.renderTemporal(e,this.quad,r,this.occlusionTarget.texture),this.flareBrightMaterial.uniforms.bloomInput.value=this.flareTarget.texture,this.flareBrightMaterial.uniforms.bloomThreshold.value=this.flareBloom.threshold,this.renderMaterial(e,this.flareBloom.brightTarget,this.flareBrightMaterial),this.flareBloom.renderFromBright(e,this.quad),this.compositeMaterial.uniforms.sourceBloom.value=this.sourceBloom.texture,this.compositeMaterial.uniforms.haloBloom.value=this.haloBloom.texture,this.opticalTargetsValid=!0,this.opticsWereActive=!0):((!this.opticalTargetsValid||this.opticsWereActive)&&(this.clearOpticalTargets(e),this.opticalTargetsValid=!0),this.opticsWereActive=!1),this.quad.material=this.compositeMaterial,e.setRenderTarget(this.renderToScreen?null:t),this.clear&&e.clear(!0,!1,!1),this.quad.render(e)}finally{e.setClearColor(this.oldClearColor,a),e.autoClear=o,e.setRenderTarget(s)}}getDiagnostics(){const e=[this.occlusionTarget,this.flareTarget,...this.sourceBloom.getTargets(),...this.haloBloom.getTargets(),...this.flareBloom.getTargets()];return{enabled:this.effectEnabled,cameraSubmerged:this.cameraSubmerged,debugMode:this.debugMode,sourceTop:this.projection.sourceTop.toArray(),sourceVisibility:this.projection.visibility,fieldCos:this.projection.fieldCos,fieldSin:this.projection.fieldSin,fieldDirection:this.projection.fieldDirection.toArray(),strength:Number(this.commonUniforms.strength.value),renderTargets:e.map(t=>({name:t.texture.name,width:t.width,height:t.height,type:t.texture.type}))}}dispose(){this.occlusionTarget.dispose(),this.flareTarget.dispose(),this.sourceBloom.dispose(),this.haloBloom.dispose(),this.flareBloom.dispose(),this.occlusionMaterial.dispose(),this.flareMaterial.dispose(),this.seedMaterial.dispose(),this.flareBrightMaterial.dispose(),this.compositeMaterial.dispose(),this.quad.dispose()}renderMaterial(e,t,i){this.quad.material=i,e.setRenderTarget(t),e.clear(!0,!1,!1),this.quad.render(e)}clearOpticalTargets(e){e.setRenderTarget(this.occlusionTarget),e.clear(!0,!1,!1),e.setRenderTarget(this.flareTarget),e.clear(!0,!1,!1),this.sourceBloom.clearOutput(e),this.haloBloom.clearOutput(e),this.flareBloom.clearOutput(e)}}class cn extends Rr{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1024},invProjectionMatrix:{value:new Ae},cameraMatrixWorld:{value:new Ae},sunDirection:{value:new A(0,1,0)},sunColor:{value:new V(1,1,1)},sunIntensity:{value:1.35},skyZenith:{value:new V(.04,.16,.42)},skyHorizon:{value:new V(.34,.5,.7)},skyAerosol:{value:new V(.36,.43,.52)},skyAerosolStrength:{value:.14},skyRadianceScale:{value:1.25},rayleighScaleHeight:{value:8},mieScaleHeight:{value:1.2},rayleighCoefficient:{value:.055},mieCoefficient:{value:.018},mieDirectionalG:{value:.76},waterLevel:{value:42},cameraSurfaceY:{value:42},cameraSubmerged:{value:!1},maxDistance:{value:600},hazeStart:{value:36},hazeExtinction:{value:.0028},hazeMax:{value:.72},horizonHazeWidth:{value:X.atmosphere.horizonHazeWidth},horizonHazeStrength:{value:X.atmosphere.horizonHazeStrength},horizonHazeNearSurfaceFloor:{value:X.atmosphere.horizonHazeNearSurfaceFloor},enabled:{value:!0}},toneMapped:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform mat4 invProjectionMatrix;
        uniform mat4 cameraMatrixWorld;
        uniform vec3 sunDirection;
        uniform vec3 sunColor;
        uniform float sunIntensity;
        uniform vec3 skyZenith;
        uniform vec3 skyHorizon;
        uniform vec3 skyAerosol;
        uniform float skyAerosolStrength;
        uniform float skyRadianceScale;
        uniform float rayleighScaleHeight;
        uniform float mieScaleHeight;
        uniform float rayleighCoefficient;
        uniform float mieCoefficient;
        uniform float mieDirectionalG;
        uniform float waterLevel;
        uniform float cameraSurfaceY;
        uniform bool cameraSubmerged;
        uniform float maxDistance;
        uniform float hazeStart;
        uniform float hazeExtinction;
        uniform float hazeMax;
        uniform float horizonHazeWidth;
        uniform float horizonHazeStrength;
        uniform float horizonHazeNearSurfaceFloor;
        uniform bool enabled;
        varying vec2 vUv;

        const float PI = 3.14159265359;

        float readDepth(vec2 uv) {
          float raw = texture2D(tDepth, uv).r;
          if (raw >= 0.999999) return cameraFar;
          float viewZ = (cameraNear * cameraFar) / ((cameraFar - cameraNear) * raw - cameraFar);
          return -viewZ;
        }

        vec3 viewRayWorld(out vec3 viewRay) {
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 farView = invProjectionMatrix * vec4(ndc, 1.0, 1.0);
          farView /= farView.w;
          viewRay = normalize(farView.xyz);
          return normalize((cameraMatrixWorld * vec4(viewRay, 0.0)).xyz);
        }

        vec3 worldPosition(float viewDepth) {
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 farView = invProjectionMatrix * vec4(ndc, 1.0, 1.0);
          farView /= farView.w;
          vec3 rayView = normalize(farView.xyz);
          vec3 positionView = rayView * (viewDepth / max(1e-4, -rayView.z));
          return (cameraMatrixWorld * vec4(positionView, 1.0)).xyz;
        }

        float rayleighPhase(float cosTheta) {
          return 3.0 / (16.0 * PI) * (1.0 + cosTheta * cosTheta);
        }

        float miePhase(float cosTheta, float g) {
          float g2 = g * g;
          return (1.0 - g2) / (4.0 * PI * pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5));
        }

        void main() {
          vec4 source = texture2D(tDiffuse, vUv);
          if (!enabled) {
            gl_FragColor = source;
            return;
          }

          vec3 viewRay;
          vec3 ray = viewRayWorld(viewRay);
          float receiverViewDepth = readDepth(vUv);

          // The opaque ocean writes its visible normalized linear view depth
          // into a
          // reserved low-alpha range. Its separate capture intentionally
          // contains the seabed, so that capture depth is not the visible
          // receiver depth for an ocean pixel. Decode the displaced surface
          // that actually won this pixel before applying aerial extinction.
          // This keeps the
          // atmosphere pass from reintroducing a depth/LOD seam after the
          // surface shader has already performed its Fresnel mix.
          float waterMask = 1.0 - step(${aa.toFixed(6)}, source.a);
          float encodedSurfaceViewDepth = clamp(
            source.a / ${ra.toFixed(6)},
            0.0,
            1.0
          ) * cameraFar;
          vec3 cameraPosition = cameraMatrixWorld[3].xyz;
          float cameraBelowWater = cameraSubmerged ? 1.0 : 0.0;
          float cameraAboveWater = 1.0 - cameraBelowWater;
          // The underside surface shader has already evaluated the analytic
          // sky through its Fresnel/Snell window. There is no camera-side air
          // segment before this interface; UnderwaterPass will integrate the
          // camera-to-surface water path next. Reprocessing the water marker as
          // a far-sky receiver drew a false atmospheric strip at the horizon.
          if (waterMask > 0.5 && cameraBelowWater > 0.5) {
            gl_FragColor = source;
            return;
          }
          float surfaceRayDistance = -1.0;
          if (abs(ray.y) > 0.001) {
            surfaceRayDistance = (cameraSurfaceY - cameraPosition.y) / ray.y;
          }
          float encodedSurfaceRayDistance = encodedSurfaceViewDepth / max(-viewRay.z, 0.0001);
          surfaceRayDistance = mix(surfaceRayDistance, encodedSurfaceRayDistance, waterMask);
          float rayDown = step(0.001, -ray.y);
          float surfaceViewDepth = -surfaceRayDistance * viewRay.z;
          float validWaterSurfaceRay = max(waterMask, cameraAboveWater
            * rayDown
            * step(0.001, surfaceRayDistance));
          receiverViewDepth = mix(
            receiverViewDepth,
            clamp(surfaceViewDepth, 0.0, cameraFar),
            waterMask * validWaterSurfaceRay
          );

          // Aerial perspective belongs only to the air segment. Applying it
          // to the full capture depth fogged seabed through air and water a
          // second time before UnderwaterPass integrated the water medium.
          // Compare view-depth values so the reconstruction stays compatible
          // with the pass's axial depth convention.
          float crossingAhead = max(
            step(0.001, surfaceRayDistance),
            step(abs(surfaceRayDistance), 0.001) * step(0.0, -ray.y)
          );
          float receiverAfterCrossing = step(0.001, receiverViewDepth - surfaceViewDepth);
          float crossedBeforeReceiver = crossingAhead * receiverAfterCrossing;
          float airViewDepth = receiverViewDepth;
          float airEndViewDepth = receiverViewDepth;
          if (cameraBelowWater > 0.5) {
            airViewDepth = crossedBeforeReceiver > 0.5
              ? max(receiverViewDepth - surfaceViewDepth, 0.0)
              : 0.0;
          } else {
            airViewDepth = crossedBeforeReceiver > 0.5
              ? min(receiverViewDepth, max(surfaceViewDepth, 0.0))
              : receiverViewDepth;
            airEndViewDepth = airViewDepth;
          }

          float up = max(ray.y, 0.0);
          float vertical = pow(up, 0.48);
          vec3 gradient = mix(skyHorizon, skyZenith, vertical);
          vec3 seaMist = mix(skyAerosol, skyHorizon, 0.58);
          vec3 ambientSky = mix(seaMist, gradient, smoothstep(-0.38, 0.14, ray.y));
          float aerosol = smoothstep(-0.18, 0.0, ray.y)
            * (1.0 - smoothstep(0.0, 0.30, ray.y))
            * skyAerosolStrength;
          ambientSky = mix(ambientSky, skyAerosol, aerosol) * skyRadianceScale;

          // Sky pixels have no finite depth, so they used to bypass this pass
          // entirely while the far ocean was fogged below them. Apply one
          // angular marine-airlight envelope to both sides of the horizon. It
          // is view-ray based (not screen-axis based), therefore it surrounds
          // the player continuously through every yaw direction.
          float horizonBand = exp(-pow(abs(ray.y) / max(horizonHazeWidth, 1e-3), 2.0));
          vec3 horizonAirlight = mix(seaMist, skyHorizon, 0.25) * skyRadianceScale;
          float horizonMix = clamp(horizonBand * horizonHazeStrength, 0.0, 1.0);
          // Airlight must accumulate over an actual air segment. In particular,
          // a below-water ray that stays below the interface can still end at
          // the far depth sentinel; treating that sentinel as sky used to draw
          // a bright atmospheric band through the underwater horizon.
          float airPathCoverage = clamp(
            1.0 - exp(-max(airViewDepth, 0.0) / 24.0),
            0.0,
            1.0
          );
          if (receiverViewDepth >= cameraFar * 0.999) {
            gl_FragColor = vec4(
              mix(source.rgb, horizonAirlight, horizonMix * airPathCoverage),
              source.a
            );
            return;
          }

          float d = min(airViewDepth, maxDistance);
          // airViewDepth is a segment length. For a camera that starts below
          // water, the segment begins at the interface rather than the camera;
          // evaluate atmospheric altitude at the segment end, not at a false
          // camera-relative distance with the same numeric length.
          vec3 position = worldPosition(airEndViewDepth);
          float altitude = max(position.y - waterLevel, 0.0);
          float density = mix(1.0, 0.35, 1.0 - exp(-altitude / max(0.25, mieScaleHeight * 4.0)));
          float horizonPath = 1.0 + 3.2 * pow(1.0 - abs(ray.y), 2.0);
          float opticalLength = max(d - hazeStart, 0.0) * horizonPath * density;

          // One shared scene-scale extinction calibration. The coefficient
          // ratios remain Rayleigh/Mie-like, while the authored start distance
          // keeps the near field crisp at voxel-world scale.
          float ext = hazeExtinction * (rayleighCoefficient * 0.03 + mieCoefficient * 0.05) / 0.00255;
          vec3 extinction = ext * vec3(0.82, 0.96, 1.18);
          vec3 transmittance = exp(-extinction * opticalLength);
          float inscatterAmount = clamp(1.0 - dot(transmittance, vec3(0.333333)), 0.0, hazeMax);

          float cosSun = dot(ray, normalize(sunDirection));
          float singleScatter = rayleighPhase(cosSun) * rayleighCoefficient * 0.16
            + miePhase(cosSun, mieDirectionalG) * mieCoefficient * 0.22;
          vec3 sunScatter = sunColor * sunIntensity * singleScatter * inscatterAmount * 1.6;
          vec3 inscatter = ambientSky * inscatterAmount * 0.66 + sunScatter;
          vec3 composed = source.rgb * transmittance + inscatter;
          // The distance term preserves a crisp near field while ensuring the
          // far ocean and distant terrain converge to the same airlight as the
          // sky at the shared horizon.
          float distanceHaze = smoothstep(hazeStart, max(hazeStart + 1.0, maxDistance), d);
          // Even a nearby receiver at the geometric horizon should inherit a
          // small amount of the shared airlight. Without this floor the sky
          // branch and a water/terrain depth branch can still meet as a hard
          // line when the surface is inside the normal haze start distance.
          float horizonSurfaceMix = horizonMix * airPathCoverage
            * mix(horizonHazeNearSurfaceFloor, 1.0, distanceHaze);
          composed = mix(composed, horizonAirlight, horizonSurfaceMix);
          gl_FragColor = vec4(composed, source.a);
        }
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setCameraSubmerged(e){this.uniforms.cameraSubmerged.value=e}setCameraSurfaceY(e){this.uniforms.cameraSurfaceY.value=e}setAtmosphereState(e){this.uniforms.sunDirection.value.copy(e.sunDirection),this.uniforms.sunColor.value.copy(e.sunColor),this.uniforms.sunIntensity.value=e.sunIntensity,this.uniforms.skyZenith.value.copy(e.skyZenith),this.uniforms.skyHorizon.value.copy(e.skyHorizon),this.uniforms.skyAerosol.value.copy(e.skyAerosol),this.uniforms.skyAerosolStrength.value=e.skyAerosolStrength,this.uniforms.skyRadianceScale.value=X.atmosphere.skyRadianceScale,this.uniforms.hazeStart.value=X.atmosphere.aerialPerspectiveStart,this.uniforms.hazeExtinction.value=X.atmosphere.aerialPerspectiveExtinction,this.uniforms.hazeMax.value=X.atmosphere.aerialPerspectiveMax,this.uniforms.horizonHazeWidth.value=X.atmosphere.horizonHazeWidth,this.uniforms.horizonHazeStrength.value=X.atmosphere.horizonHazeStrength,this.uniforms.horizonHazeNearSurfaceFloor.value=X.atmosphere.horizonHazeNearSurfaceFloor,this.uniforms.rayleighScaleHeight.value=e.rayleighScaleHeight,this.uniforms.mieScaleHeight.value=e.mieScaleHeight,this.uniforms.rayleighCoefficient.value=e.rayleighCoefficient,this.uniforms.mieCoefficient.value=e.mieCoefficient,this.uniforms.mieDirectionalG.value=e.mieDirectionalG}setSettings(e){e.enabled!==void 0&&(this.uniforms.enabled.value=e.enabled),e.maxDistance!==void 0&&(this.uniforms.maxDistance.value=Math.max(1,e.maxDistance))}}function hn(){const n=Math.round(255/_e),e=new Ve(new Uint8Array([n,n,n,255]),1,1,re,Pe);return e.colorSpace=fe,e.needsUpdate=!0,e}class un extends Rr{causticFallback;constructor(){const e=hn();super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1024},invProjectionMatrix:{value:new Ae},cameraMatrixWorld:{value:new Ae},uCameraPosition:{value:new A},waterLevel:{value:43},cameraSurfaceY:{value:43},absorption:{value:new A(...bs)},scattering:{value:new A(...Ss)},fogColor:{value:new V(.1,.36,.55)},fogStrength:{value:.86},skyAmbient:{value:new V(.12,.18,.32)},sunIntensity:{value:1.35},phaseG:{value:.28},mediumTime:{value:0},uSunDirection:{value:new A(.35,.9,.2).normalize()},uSunColor:{value:new V(1,.98,.9)},causticMap:{value:e},causticMapEnabled:{value:!1},causticOrigin:{value:new q},causticExtent:{value:17},causticResolution:{value:new q(256,256)},causticReferenceDepth:{value:we},causticFieldScale:{value:_e},underwater:{value:!1},cameraSubmerged:{value:!1},debugMode:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        #ifdef GL_EXT_shader_texture_lod
        #extension GL_EXT_shader_texture_lod : enable
        #endif
        precision highp float;
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform mat4 invProjectionMatrix;
        uniform mat4 cameraMatrixWorld;
        uniform vec3 uCameraPosition;
        uniform float waterLevel;
        uniform float cameraSurfaceY;
        uniform vec3 absorption;
        uniform vec3 scattering;
        uniform vec3 fogColor;
        uniform float fogStrength;
        uniform vec3 skyAmbient;
        uniform float sunIntensity;
        uniform float phaseG;
        uniform float mediumTime;
        uniform vec3 uSunDirection;
        uniform vec3 uSunColor;
        uniform sampler2D causticMap;
        uniform bool causticMapEnabled;
        uniform vec2 causticOrigin;
        uniform float causticExtent;
        uniform vec2 causticResolution;
        uniform float causticReferenceDepth;
        uniform float causticFieldScale;
        uniform bool underwater;
        uniform bool cameraSubmerged;
        uniform int debugMode;
        varying vec2 vUv;

        const int MEDIUM_SAMPLES = 8;
        const float WATER_IOR = ${Se.toFixed(3)};

        float readViewDepth(float rawDepth) {
          if (rawDepth >= 0.999999) return cameraFar;
          float viewZ = (cameraNear * cameraFar) / ((cameraFar - cameraNear) * rawDepth - cameraFar);
          return -viewZ;
        }

        vec3 worldRay(out vec3 viewRay) {
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 farView = invProjectionMatrix * vec4(ndc, 1.0, 1.0);
          farView /= max(farView.w, 1e-5);
          viewRay = normalize(farView.xyz);
          return normalize((cameraMatrixWorld * vec4(viewRay, 0.0)).xyz);
        }

        float hash21(vec2 p) {
          p = fract(p * vec2(123.34, 345.45));
          p += dot(p, p + 34.345);
          return fract(p.x * p.y);
        }

        float valueNoise(vec2 p) {
          vec2 cell = floor(p);
          vec2 local = fract(p);
          vec2 fade = local * local * (3.0 - 2.0 * local);
          float a = hash21(cell);
          float b = hash21(cell + vec2(1.0, 0.0));
          float c = hash21(cell + vec2(0.0, 1.0));
          float d = hash21(cell + vec2(1.0, 1.0));
          return mix(mix(a, b, fade.x), mix(c, d, fade.x), fade.y);
        }

        // World-anchored density avoids screen-space fog and gives suspended
        // sediment/algae enough coherent variation to read as a medium. The
        // y terms make the field change through the column, while the time
        // offsets provide slow current advection.
        float particleDensity(vec3 worldPosition, float worldFilterWidth) {
          vec2 broadUv = worldPosition.xz * 0.045
            + vec2(worldPosition.y * 0.019, -worldPosition.y * 0.014)
            + vec2(mediumTime * 0.012, -mediumTime * 0.009);
          vec2 fineUv = worldPosition.xz * 0.19
            + vec2(worldPosition.y * 0.061, -worldPosition.y * 0.047)
            + vec2(-mediumTime * 0.027, mediumTime * 0.021);
          // A march sample represents both a finite ray segment and a finite
          // screen footprint. Frequencies smaller than either footprint must
          // converge to their mean instead of becoming spoke-like ray slices.
          float broadCoverage = 1.0 - smoothstep(0.35, 1.25, worldFilterWidth * 0.052);
          float fineCoverage = 1.0 - smoothstep(0.25, 1.00, worldFilterWidth * 0.205);
          float broad = 0.5;
          float fine = 0.5;
          if (broadCoverage > 0.001) broad = mix(0.5, valueNoise(broadUv), broadCoverage);
          if (fineCoverage > 0.001) fine = mix(0.5, valueNoise(fineUv), fineCoverage);
          return clamp(0.78 + (broad - 0.5) * 0.36 + (fine - 0.5) * 0.14, 0.32, 1.18);
        }

        // Relative Henyey-Greenstein phase. Its isotropic value is one, which
        // keeps the authored sun/sky irradiance units legible in the integral.
        float relativePhase(float cosTheta, float g) {
          float g2 = g * g;
          float denominator = pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5);
          return (1.0 - g2) / denominator;
        }

        float interfaceTransmission(float cosIncident) {
          float eta = 1.0 / WATER_IOR;
          float sinTransmitted2 = eta * eta * max(1.0 - cosIncident * cosIncident, 0.0);
          if (sinTransmitted2 >= 1.0) return 0.0;
          float cosTransmitted = sqrt(max(1.0 - sinTransmitted2, 0.0));
          float rs = (cosIncident - WATER_IOR * cosTransmitted)
            / max(cosIncident + WATER_IOR * cosTransmitted, 0.001);
          float rp = (WATER_IOR * cosIncident - cosTransmitted)
            / max(WATER_IOR * cosIncident + cosTransmitted, 0.001);
          return clamp(1.0 - 0.5 * (rs * rs + rp * rp), 0.0, 1.0);
        }

        vec4 sampleCausticTexture(vec2 uv, float mipLevel) {
          #ifdef GL_EXT_shader_texture_lod
          return texture2DLodEXT(causticMap, uv, mipLevel);
          #else
          // WebGL1 without EXT_shader_texture_lod still gets the target's
          // implicit derivative filtering; the explicit path above is used
          // whenever the extension is available.
          return texture2D(causticMap, uv);
          #endif
        }

        float sampleCausticField(vec3 worldPosition, float worldFilterWidth) {
          if (!causticMapEnabled) return 1.0;
          vec3 sun = normalize(uSunDirection);
          vec3 refractedSun = refract(-sun, vec3(0.0, 1.0, 0.0), 1.0 / WATER_IOR);
          float depth = max(waterLevel - worldPosition.y, 0.0);
          float vertical = max(-refractedSun.y, 0.12);
          float referenceTravel = (causticReferenceDepth - depth) / vertical;
          vec2 projected = worldPosition.xz + refractedSun.xz * referenceTravel;
          vec2 causticCoord = (projected - causticOrigin) / max(causticExtent, 1.0) + 0.5;
          // Keep the coordinate unwrapped until after implicit derivatives are
          // calculated by texture2D. RepeatWrapping performs the actual tile
          // wrap without manufacturing a large derivative at each seam.
          vec2 uv = causticCoord;
          float footprint = worldFilterWidth / max(causticExtent, 1.0)
            * max(causticResolution.x, causticResolution.y);
          // Convert the physical world-space footprint into the target's
          // texel footprint and select its prefiltered irradiance level. The
          // extension path avoids relying on a derivative that does not see
          // the finite march segment; the fallback remains one implicit
          // lookup on WebGL1 implementations without shader-texture-lod.
          if (footprint >= 10.0) return 1.0;
          float maxMip = log2(max(causticResolution.x, causticResolution.y));
          float mipLevel = clamp(log2(max(footprint, 1.0)), 0.0, maxMip);
          float filtered = sampleCausticTexture(uv, mipLevel).r;
          // The encoded neutral concentration is 1 / fieldScale. A broad ray
          // tube sees average irradiance, not an aliased periodic filament.
          filtered = mix(
            filtered,
            1.0 / max(causticFieldScale, 1.0),
            smoothstep(4.0, 10.0, footprint)
          );
          return clamp(filtered * causticFieldScale, 0.0, 8.0);
        }

        void main() {
          vec4 source = texture2D(tDiffuse, vUv);
          if (!underwater) {
            gl_FragColor = source;
            return;
          }

          // Above-water ocean pixels already contain interface reflection and
          // Fresnel-weighted transmission from WaterSurfaceMaterial. Do not
          // integrate a second camera-side volume over that mixed interface.
          float waterSurfaceMask = 1.0 - step(${aa.toFixed(6)}, source.a);
          float cameraBelow = cameraSubmerged ? 1.0 : 0.0;
          float cameraAboveWater = 1.0 - cameraBelow;
          if (waterSurfaceMask > 0.5 && cameraAboveWater > 0.5) {
            gl_FragColor = source;
            return;
          }

          vec3 viewRay;
          vec3 ray = worldRay(viewRay);
          float rawSceneDepth = texture2D(tDepth, vUv).r;
          float finiteReceiver = 1.0 - step(0.999999, rawSceneDepth);
          float sceneViewDepth = readViewDepth(rawSceneDepth);
          float sceneDistance = sceneViewDepth / max(-viewRay.z, 0.02);
          float encodedSurfaceViewDepth = clamp(
            source.a / ${ra.toFixed(6)},
            0.0,
            1.0
          ) * cameraFar;
          float encodedSurfaceDistance = encodedSurfaceViewDepth / max(-viewRay.z, 0.02);

          // The visible ocean interface owns every above-water sky ray. If a
          // far-sky pixel lacks that marker (for example at the finite ocean
          // mesh's clipped grazing boundary), there is no valid submerged
          // receiver for this pass to integrate toward. Treating the far-depth
          // sentinel as one produced the cyan line above the ocean horizon.
          if (cameraAboveWater > 0.5 && finiteReceiver < 0.5) {
            gl_FragColor = source;
            return;
          }

          // Solve the water interval in ray distance. The same equations work
          // from either side of the interface and retain only crossings that
          // occur before the visible receiver.
          float surfaceDistance = -1.0;
          if (abs(ray.y) > 0.001) {
            // The camera-medium authority is evaluated against the displaced
            // wave at the camera. Use that same local interface here instead
            // of the nominal plane, otherwise a camera above the flat level
            // but below a crest gives every unmarked pixel a full water path.
            surfaceDistance = (cameraSurfaceY - uCameraPosition.y) / ray.y;
          }
          // A visible ocean pixel already carries the exact displaced surface
          // depth. Prefer it over the nominal plane so the water interval
          // shrinks continuously to zero at a live crest/trough crossing.
          surfaceDistance = mix(surfaceDistance, encodedSurfaceDistance, waterSurfaceMask);
          float crossingAhead = max(
            step(0.001, surfaceDistance),
            step(abs(surfaceDistance), 0.001) * step(0.0, -ray.y)
          );
          float crossingBeforeReceiver = crossingAhead
            * step(surfaceDistance, sceneDistance + 0.001);
          float crossedDistance = clamp(surfaceDistance, 0.0, sceneDistance);
          // Rasterization begins on the near plane, not at the pinhole. While
          // the interface passes through the camera, different near-plane
          // pixels can already be in different media. Toggle the ray's start
          // medium when the displaced interface crossing lies inside the
          // clipped camera-to-near segment, then integrate only the visible
          // part of that ray. This is the continuous split-screen waterline;
          // there is no camera-height or pitch transition mode.
          float visibleRayStart = cameraNear / max(-viewRay.z, 0.02);
          float crossingBeforeVisibleRay = crossingBeforeReceiver
            * step(surfaceDistance, visibleRayStart + 0.001);
          float visibleStartsBelow = mix(
            cameraBelow,
            1.0 - cameraBelow,
            crossingBeforeVisibleRay
          );
          float waterDistance = cameraBelow > 0.5
            ? (crossingBeforeReceiver > 0.5 ? crossedDistance : sceneDistance)
            : (crossingBeforeReceiver > 0.5 ? max(sceneDistance - crossedDistance, 0.0) : 0.0);
          float waterStart = cameraBelow < 0.5 && crossingBeforeReceiver > 0.5
            ? crossedDistance
            : 0.0;
          if (crossingBeforeVisibleRay > 0.5) {
            waterStart = visibleRayStart;
            waterDistance = visibleStartsBelow > 0.5
              ? max(sceneDistance - visibleRayStart, 0.0)
              : 0.0;
          }
          waterDistance = min(max(waterDistance, 0.0), cameraFar);

          // Angular ray spread plus interval discontinuities bound the world
          // footprint represented by one pixel. This is evaluated outside the
          // march so derivative instructions remain in uniform control flow.
          float rayPixelSpread = max(length(dFdx(ray)), length(dFdy(ray)));
          float intervalPixelSpread = max(
            abs(dFdx(waterStart)) + abs(dFdx(waterDistance)),
            abs(dFdy(waterStart)) + abs(dFdy(waterDistance))
          );

          vec3 transmittance = vec3(1.0);
          vec3 inScatter = vec3(0.0);
          float debugCaustic = 1.0;
          float debugDensity = 0.0;
          float debugSunPhase = 0.0;
          if (waterDistance > 0.001) {
            float segmentLength = waterDistance / float(MEDIUM_SAMPLES);
            float densityScale = max(fogStrength, 0.001);
            vec3 sigmaBase = absorption + scattering;
            vec3 sun = normalize(uSunDirection);
            vec3 refractedSun = refract(-sun, vec3(0.0, 1.0, 0.0), 1.0 / WATER_IOR);
            float lightVertical = max(-refractedSun.y, 0.12);
            float sunVisibility = smoothstep(0.04, 0.18, max(sun.y, 0.0));
            float surfaceT = interfaceTransmission(max(sun.y, 0.0));
            float phase = relativePhase(dot(ray, sun), clamp(phaseG, -0.85, 0.85));
            debugSunPhase = phase * sunVisibility;

            for (int sampleIndex = 0; sampleIndex < MEDIUM_SAMPLES; sampleIndex++) {
              float sampleFraction = (float(sampleIndex) + 0.5) / float(MEDIUM_SAMPLES);
              float sampleDistance = waterDistance * sampleFraction;
              float sampleTravel = waterStart + sampleDistance;
              vec3 samplePosition = uCameraPosition + ray * sampleTravel;
              float worldFilterWidth = max(
                segmentLength * 0.5,
                sampleTravel * rayPixelSpread + intervalPixelSpread * sampleFraction
              );
              float density = particleDensity(samplePosition, worldFilterWidth) * densityScale;
              vec3 sigmaS = scattering * density;
              vec3 sigmaT = sigmaBase * density;
              vec3 stepTransmittance = exp(-sigmaT * segmentLength);
              vec3 scatterFraction = sigmaS / max(sigmaT, vec3(0.0001));

              float sampleDepth = max(waterLevel - samplePosition.y, 0.0);
              float lightDistance = sampleDepth / lightVertical;
              vec3 lightTransmittance = exp(-sigmaBase * lightDistance * densityScale * 0.90);
              float caustic = sunVisibility > 0.001
                ? sampleCausticField(samplePosition, worldFilterWidth)
                : 1.0;
              float causticTransport = mix(1.0, caustic, 0.42);
              vec3 ambientSource = mix(skyAmbient, fogColor, 0.35)
                * (0.82 + 0.18 * max(ray.y, 0.0));
              vec3 sunSource = uSunColor * sunIntensity * sunVisibility * surfaceT
                * lightTransmittance * phase * causticTransport;
              inScatter += transmittance * (ambientSource + sunSource)
                * scatterFraction * (vec3(1.0) - stepTransmittance);
              transmittance *= stepTransmittance;

              debugCaustic = caustic;
              debugDensity = density;
            }
          }

          vec3 color = source.rgb * transmittance + inScatter;

          if (debugMode == 1) color = vec3(clamp(waterDistance / 64.0, 0.0, 1.0));
          else if (debugMode == 2) color = transmittance;
          else if (debugMode == 3) color = vec3(clamp(1.0 - transmittance.g, 0.0, 1.0));
          else if (debugMode == 4) color = vec3(clamp(debugCaustic / ${_e.toFixed(1)}, 0.0, 1.0));
          else if (debugMode == 5) color = vec3(clamp(debugDensity, 0.0, 1.0));
          else if (debugMode == 6) color = vec3(clamp(debugSunPhase / 2.0, 0.0, 1.0));

          gl_FragColor = vec4(max(color, vec3(0.0)), source.a);
        }
      `}),this.causticFallback=e}setDepthTexture(e){this.uniforms.tDepth.value=e}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld),this.uniforms.uCameraPosition.value.copy(e.position)}setWaterLevel(e){this.uniforms.waterLevel.value=e}setCameraSurfaceY(e){this.uniforms.cameraSurfaceY.value=e}setAbsorption(e){this.uniforms.absorption.value.copy(e)}setScattering(e){this.uniforms.scattering.value.copy(e)}setFogColor(e){this.uniforms.fogColor.value.copy(e)}setFogStrength(e){this.uniforms.fogStrength.value=Math.max(0,e)}setSun(e,t){this.uniforms.uSunDirection.value.copy(e).normalize(),this.uniforms.uSunColor.value.copy(t)}setAtmosphere(e,t){this.uniforms.skyAmbient.value.copy(e),this.uniforms.sunIntensity.value=Math.max(0,t)}setTime(e){this.uniforms.mediumTime.value=e}setCaustics(e,t,i,r,s=we){this.uniforms.causticMap.value=e??this.causticFallback,this.uniforms.causticMapEnabled.value=!!e,this.uniforms.causticOrigin.value.set(t.x,t.y),this.uniforms.causticExtent.value=Math.max(1,i),this.uniforms.causticResolution.value.set(Math.max(1,r.x),Math.max(1,r.y)),this.uniforms.causticReferenceDepth.value=Math.max(2,s)}setUnderwater(e){this.uniforms.underwater.value=e}setCameraSubmerged(e){this.uniforms.cameraSubmerged.value=e}setDebugMode(e){this.uniforms.debugMode.value=Math.max(0,Math.floor(e))}dispose(){this.material.dispose(),this.causticFallback.dispose()}}const be=4,_a=.5,Ua=.1,Ha=.1,Oa=.07,dn=1,fn=1.5,Na=2;class mn{renderer;proxyScene=new qt;proxyCamera=new fr;proxyGeometry=new gi(2,2);proxyMaterial=new es({color:16777215,colorWrite:!1,depthTest:!0,depthWrite:!1,side:jt});proxy=new ie(this.proxyGeometry,this.proxyMaterial);resolution=new q(1,1);cameraWorld=new A;rayPoint=new A;rayDirection=new A;scratchScissor=new ht;tileWeights=new Float32Array(be**2);depthTarget=null;gl=null;supported=!1;pending=null;elapsedSinceQuery=1/0;frameIndex=0;lastCompletedQueryFrame=-1;queryAgeFrames=0;queryResultsAvailable=!1;surfaceY=0;cameraUnderwater=!1;smoothedRelevance=1;targetRelevance=1;rawImportance=1;weightedVisible=0;weightedTotal=0;visibleTileMask=0;visibleTiles=0;mode="FULL";forwardBlend=1;modeDwell=0;fullEnterDwell=0;fullExitDwell=0;disposed=!1;constructor(e,t=1,i=1){if(this.renderer=e,this.setSize(t,i),this.proxy.name="OceanRefractionRelevanceProxy",this.proxy.rotation.x=-Math.PI*.5,this.proxy.frustumCulled=!1,this.proxyScene.add(this.proxy),this.proxyCamera.matrixAutoUpdate=!1,e.capabilities?.isWebGL2&&typeof e.getContext=="function")try{const r=e.getContext();typeof r.createQuery=="function"&&typeof r.beginQuery=="function"&&typeof r.endQuery=="function"&&(this.gl=r,this.supported=!0)}catch{this.gl=null,this.supported=!1}}setDepthTarget(e){this.depthTarget=e}setSize(e,t){this.resolution.set(Math.max(1,Math.floor(e)),Math.max(1,Math.floor(t)))}update(e,t,i,r){if(this.disposed)return this.getState();if(this.frameIndex+=1,this.lastCompletedQueryFrame>=0&&(this.queryAgeFrames=this.frameIndex-this.lastCompletedQueryFrame),this.pending&&(this.queryAgeFrames=this.frameIndex-this.pending.submittedFrame),this.surfaceY=Number.isFinite(t)?t:this.surfaceY,this.cameraUnderwater=i,this.pollCompletedBatch(),i)return this.cancelPendingBatch(),this.mode="FULL",this.smoothedRelevance=1,this.targetRelevance=1,this.rawImportance=1,this.forwardBlend=1,this.modeDwell=0,this.fullEnterDwell=0,this.fullExitDwell=0,this.getState();if(!this.supported||!this.depthTarget||!this.gl)return this.setConservativeQualityFallback(),this.getState();const s=Number.isFinite(r)?Math.max(0,Math.min(.25,r)):0;return this.elapsedSinceQuery+=s,this.updateSmoothedState(s),!this.pending&&this.elapsedSinceQuery>=Ua&&this.submitQueryBatch(e),this.getState()}getState(){return{mode:this.mode,blend:this.forwardBlend,forwardBlend:this.forwardBlend,rawImportance:this.rawImportance,smoothedRelevance:this.smoothedRelevance,smoothedImportance:this.smoothedRelevance,targetRelevance:this.targetRelevance,visibleTileMask:this.visibleTileMask,visibleOceanTileMask:this.visibleTileMask,visibleTiles:this.visibleTiles,visibleOceanTileCount:this.visibleTiles,weightedVisible:this.weightedVisible,weightedTotal:this.weightedTotal,querySupported:this.supported,queryPending:this.pending!==null,queryResultsAvailable:this.queryResultsAvailable,queryAgeFrames:this.queryAgeFrames,underwaterBypass:this.cameraUnderwater}}getDiagnostics(){return{...this.getState(),tileGrid:be,halfLifeSeconds:_a,queryIntervalSeconds:Ua,fullEnterDwellSeconds:this.fullEnterDwell,fullExitDwellSeconds:this.fullExitDwell,modeDwellSeconds:this.modeDwell,forwardBlend:this.forwardBlend,hysteresis:{fullEnter:Ha,fullExit:Oa},surfaceY:this.surfaceY}}dispose(){this.disposed||(this.disposed=!0,this.cancelPendingBatch(),this.proxyGeometry.dispose(),this.proxyMaterial.dispose())}submitQueryBatch(e){if(!this.gl||!this.depthTarget)return;const t=this.gl,i=t.ANY_SAMPLES_PASSED_CONSERVATIVE;if(i===void 0){this.supported=!1,this.setConservativeQualityFallback();return}e.updateMatrixWorld(),this.proxyCamera.copy(e),this.proxyCamera.matrixWorld.copy(e.matrixWorld),this.proxyCamera.matrixWorldInverse.copy(e.matrixWorldInverse),this.proxyCamera.projectionMatrix.copy(e.projectionMatrix),this.proxyCamera.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.proxy.position.set(e.position.x,this.surfaceY+Ui,e.position.z);const r=Math.max(64,e.far*2);this.proxy.scale.set(r,r,1),this.proxy.updateMatrixWorld(!0);const s=[];this.weightedTotal=0,this.cameraWorld.setFromMatrixPosition(e.matrixWorld);for(let d=0;d<be;d+=1)for(let f=0;f<be;f+=1){const m=d*be+f,p=this.physicalTileWeight(e,f,d);this.tileWeights[m]=p,this.weightedTotal+=p}const a=this.renderer.getRenderTarget(),o=this.renderer.autoClear,l=this.renderer.getScissorTest?.()??!1,c=this.renderer.getScissor?this.renderer.getScissor(this.scratchScissor):null,h=this.depthTarget.scissorTest,u=this.depthTarget.scissor.clone();try{this.renderer.setRenderTarget(this.depthTarget),this.renderer.autoClear=!1,this.renderer.setScissorTest(!0);for(let d=0;d<be;d+=1)for(let f=0;f<be;f+=1){const m=t.createQuery();if(!m)throw new Error("Unable to allocate ocean relevance query");const p=Math.floor(f*this.resolution.x/be),v=Math.floor(d*this.resolution.y/be),x=Math.ceil((f+1)*this.resolution.x/be),y=Math.ceil((d+1)*this.resolution.y/be),g=Math.max(1,x-p),S=Math.max(1,y-v);this.depthTarget.scissor.set(p,v,g,S),this.depthTarget.scissorTest=!0,this.renderer.setScissor(p,v,g,S),t.beginQuery(i,m),this.renderer.render(this.proxyScene,this.proxyCamera),t.endQuery(i),s.push({query:m,physicalWeight:this.tileWeights[d*be+f]})}if(s.length!==be**2)throw new Error("Incomplete ocean relevance query batch");this.pending={tiles:s,submittedFrame:this.frameIndex},this.elapsedSinceQuery=0}catch{for(const d of s)t.deleteQuery(d.query);this.supported=!1,this.pending=null,this.setConservativeQualityFallback()}finally{this.depthTarget.scissorTest=h,this.depthTarget.scissor.copy(u),this.renderer.setScissorTest(l),c&&this.renderer.setScissor(c.x,c.y,c.z,c.w),this.renderer.autoClear=o,this.renderer.setRenderTarget(a)}}pollCompletedBatch(){if(!this.pending||!this.gl)return;const e=this.gl;try{for(const o of this.pending.tiles)if(!e.getQueryParameter(o.query,e.QUERY_RESULT_AVAILABLE))return;let t=0,i=0,r=0,s=0;for(let o=0;o<this.pending.tiles.length;o+=1){const l=this.pending.tiles[o];e.getQueryParameter(l.query,e.QUERY_RESULT)&&(t+=1,i|=1<<o,r+=l.physicalWeight,s=Math.max(s,l.physicalWeight)),e.deleteQuery(l.query)}this.pending=null,this.queryResultsAvailable=!0,this.lastCompletedQueryFrame=this.frameIndex,this.queryAgeFrames=0,this.visibleTileMask=i,this.visibleTiles=t,this.weightedVisible=r;const a=t/be**2;this.rawImportance=k.clamp(a*s,0,1),this.targetRelevance=this.rawImportance}catch{this.supported=!1,this.setConservativeQualityFallback()}}updateSmoothedState(e){const t=1-Math.exp(-Math.LN2*e/_a);if(this.smoothedRelevance=k.lerp(this.smoothedRelevance,this.targetRelevance,k.clamp(t,0,1)),this.modeDwell+=e,this.mode==="FULL"){this.fullEnterDwell=0,this.smoothedRelevance<Oa?this.fullExitDwell+=e:this.fullExitDwell=0,this.modeDwell>=Na&&this.fullExitDwell>=fn&&this.enterUnshadowed();return}this.fullExitDwell=0,this.smoothedRelevance>=Ha?this.fullEnterDwell+=e:this.fullEnterDwell=0,this.modeDwell>=Na&&this.fullEnterDwell>=dn&&this.enterFull()}enterFull(){this.mode="FULL",this.modeDwell=0,this.fullEnterDwell=0,this.fullExitDwell=0}enterUnshadowed(){this.mode="UNSHADOWED",this.modeDwell=0,this.fullEnterDwell=0,this.fullExitDwell=0}setConservativeQualityFallback(){this.cancelPendingBatch(),this.mode="FULL",this.rawImportance=1,this.targetRelevance=1,this.smoothedRelevance=1,this.forwardBlend=1,this.modeDwell=0,this.fullEnterDwell=0,this.fullExitDwell=0,this.queryResultsAvailable=!1,this.queryAgeFrames=0,this.visibleTileMask=0,this.visibleTiles=0}physicalTileWeight(e,t,i){const r=(t+.5)/be,s=(i+.5)/be;if(this.rayPoint.set(r*2-1,s*2-1,.5).unproject(e),this.rayDirection.copy(this.rayPoint).sub(this.cameraWorld).normalize(),this.rayDirection.y>=-1e-5)return 0;const a=(this.surfaceY-this.cameraWorld.y)/this.rayDirection.y;if(!Number.isFinite(a)||a<=0||a>e.far)return 0;const o=k.clamp(-this.rayDirection.y,0,1),l=kt/At,c=l*l*Math.max(1-o*o,0);if(c>=1)return 0;const h=Math.sqrt(Math.max(1-c,0)),u=(kt*o-At*h)/Math.max(kt*o+At*h,1e-5),d=(At*o-kt*h)/Math.max(At*o+kt*h,1e-5),f=k.clamp(1-.5*(u*u+d*d),0,1),m=X.atmosphere,p=1+3.2*Math.pow(1-Math.abs(this.rayDirection.y),2),v=Math.max(a-m.aerialPerspectiveStart,0)*p,x=m.aerialPerspectiveExtinction*(m.rayleighCoefficient*.03+m.mieCoefficient*.05)/.00255,y=new A(x*.82,x*.96,x*1.18),g=(Math.exp(-y.x*v)+Math.exp(-y.y*v)+Math.exp(-y.z*v))/3;return f*g}cancelPendingBatch(){if(!this.pending||!this.gl){this.pending=null;return}for(const e of this.pending.tiles)this.gl.deleteQuery(e.query);this.pending=null,this.queryResultsAvailable=!1}}function Ir(n,e){if(!Number.isFinite(e))return!0;n.updateProjectionMatrix(),n.updateMatrixWorld(!0);const t=new A;let i=1/0,r=-1/0;for(const o of[-1,1])for(const l of[-1,1])for(const c of[-1,1]){if(t.set(o,l,c).unproject(n),!Number.isFinite(t.y))return!0;i=Math.min(i,t.y),r=Math.max(r,t.y)}const s=e-Ui,a=e+Ui;return!(r<s||i>a)}function Jt(n,e){const t=new gr(n,e,ts);return t.format=is,t.minFilter=N,t.magFilter=N,t}function Pi(n,e,t,i=t===N?N:pe){n.type=e,n.format=re,n.minFilter=t,n.magFilter=i,n.colorSpace=fe,n.generateMipmaps=!1}function pn(n){if(!(n instanceof ie)&&!(n instanceof as)&&!(n instanceof rs))return null;const e=n.material;if(!e)return null;const t=Array.isArray(e)?e:[e];return t.length>0?t:null}class vn{renderer;scene;target;receiverTarget;geometryTarget;legacyTarget;compositeMaterial;compositeGeometry;compositeScene;compositeCamera;size=new q;clearColor=new V;renderableStates=[];activeRenderableStateCount=0;participants;sourceCuller=new Ms;stageProfiler;mrtSupported;interfaceEnvelopeVisible=!0;skippedNoInterface=!1;relevanceMode="FULL";relevanceBlend=1;optimizedParticipants=0;legacyParticipants=0;constructor(e,t,i,r,s,a){this.renderer=e,this.scene=t,this.participants=s??new sa,this.stageProfiler=a,this.mrtSupported=e.capabilities?.isWebGL2===!0,s||this.participants.registerTree(t);const o=Math.max(1,Math.floor(i)),l=Math.max(1,Math.floor(r));if(this.mrtSupported){const c=Jt(o,l),h=new We(o,l,{type:rt,format:re,minFilter:pe,magFilter:pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:c,count:3});Pi(h.textures[0],_i,N),h.textures[0].internalFormat="RGBA32F",Pi(h.textures[1],rt,pe),Pi(h.textures[2],rt,pe),this.geometryTarget=h,this.receiverTarget=h;const u=Jt(o,l);this.legacyTarget=new We(o,l,{type:rt,format:re,minFilter:pe,magFilter:pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:u}),this.legacyTarget.texture.colorSpace=fe,this.legacyTarget.texture.generateMipmaps=!1,this.target=new We(o,l,{type:rt,format:re,minFilter:pe,magFilter:pe,depthBuffer:!1,stencilBuffer:!1}),this.target.texture.colorSpace=fe,this.target.texture.generateMipmaps=!1,this.compositeGeometry=new gi(2,2),this.compositeScene=new qt,this.compositeCamera=new Ki(-1,1,1,-1,0,1),this.compositeMaterial=new He({name:"MyCraftForwardRefractionComposite",glslVersion:vr,uniforms:{tReceiver:{value:h.textures[0]},tNonDirect:{value:h.textures[1]},tDirect:{value:h.textures[2]},tProjectedDepth:{value:h.depthTexture},tLegacyColor:{value:this.legacyTarget.texture},tLegacyDepth:{value:this.legacyTarget.depthTexture},tSunVisibility:{value:Et.uForwardSunVisibility.value},uResolution:{value:new q(o,l)},uShadowBlend:{value:1},uRelevanceBlend:{value:1}},vertexShader:`
          out vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
          }
        `,fragmentShader:`
          precision highp float;
          uniform sampler2D tReceiver;
          uniform sampler2D tNonDirect;
          uniform sampler2D tDirect;
          uniform sampler2D tProjectedDepth;
          uniform sampler2D tLegacyColor;
          uniform sampler2D tLegacyDepth;
          uniform sampler2D tSunVisibility;
          uniform vec2 uResolution;
          uniform float uShadowBlend;
          uniform float uRelevanceBlend;
          in vec2 vUv;
          out vec4 outColor;

          void accumulateSourceAwareVisibility(
            vec2 sampleUv,
            vec3 expectedSource,
            float positionTolerance,
            inout float weightedVisibility,
            inout float weightSum
          ) {
            vec4 receiver = texture(tReceiver, sampleUv);
            if (receiver.a <= 0.0) return;
            float sourceError = length(receiver.rgb - expectedSource);
            float sourceWeight = 1.0 - smoothstep(
              positionTolerance,
              positionTolerance * 2.0,
              sourceError
            );
            weightedVisibility += texture(tSunVisibility, sampleUv).r * sourceWeight;
            weightSum += sourceWeight;
          }

          float sourceAwareVisibility(vec2 uv, vec3 sourceWorld) {
            vec2 safeResolution = max(uResolution, vec2(1.0));
            vec2 texel = 1.0 / safeResolution;
            float center = texture(tSunVisibility, uv).r;
            vec3 sourceDx = dFdx(sourceWorld);
            vec3 sourceDy = dFdy(sourceWorld);
            float sourceFootprint = max(length(sourceDx), length(sourceDy));
            float positionTolerance = max(0.0025, sourceFootprint * 0.35);
            float weightedVisibility = center * 4.0;
            float weightSum = 4.0;
            accumulateSourceAwareVisibility(
              uv + vec2(texel.x, 0.0),
              sourceWorld + sourceDx,
              positionTolerance,
              weightedVisibility,
              weightSum
            );
            accumulateSourceAwareVisibility(
              uv - vec2(texel.x, 0.0),
              sourceWorld - sourceDx,
              positionTolerance,
              weightedVisibility,
              weightSum
            );
            accumulateSourceAwareVisibility(
              uv + vec2(0.0, texel.y),
              sourceWorld + sourceDy,
              positionTolerance,
              weightedVisibility,
              weightSum
            );
            accumulateSourceAwareVisibility(
              uv - vec2(0.0, texel.y),
              sourceWorld - sourceDy,
              positionTolerance,
              weightedVisibility,
              weightSum
            );
            return weightedVisibility / max(weightSum, 1.0);
          }

          void main() {
            vec2 uv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
            float projectedDepth = texture(tProjectedDepth, uv).r;
            float legacyDepth = texture(tLegacyDepth, uv).r;
            bool optimizedHit = projectedDepth < 0.999999;
            bool legacyHit = legacyDepth < 0.999999;
            if (!optimizedHit && !legacyHit) {
              outColor = vec4(0.0);
              return;
            }

            // Both depth attachments use the same camera projection. Comparing
            // their normalized depth is therefore the exact nearest projected
            // surface merge, including overlapping optimized and legacy meshes.
            bool useLegacy = legacyHit && (!optimizedHit || legacyDepth < projectedDepth);
            float relevance = clamp(uRelevanceBlend, 0.0, 1.0);
            if (useLegacy) {
              vec4 legacy = texture(tLegacyColor, uv);
              outColor = vec4(legacy.rgb * relevance, legacy.a * relevance);
              return;
            }

            vec4 receiver = texture(tReceiver, uv);
            vec3 nonDirect = texture(tNonDirect, uv).rgb;
            vec3 direct = texture(tDirect, uv).rgb;
            float voxelVisibility = uShadowBlend > 0.001
              ? sourceAwareVisibility(uv, receiver.rgb)
              : 1.0;
            float visibility = mix(1.0, voxelVisibility, clamp(uShadowBlend, 0.0, 1.0));
            float coverage = clamp(receiver.a, 0.0, 1.0);
            vec3 radiance = nonDirect + direct * visibility;
            outColor = vec4(radiance * relevance, coverage * relevance);
          }
        `,depthTest:!1,depthWrite:!1,blending:$i,toneMapped:!1}),this.compositeScene.add(new ie(this.compositeGeometry,this.compositeMaterial))}else{const c=new We(o,l,{type:_i,format:re,minFilter:N,magFilter:N,depthBuffer:!0,stencilBuffer:!1,depthTexture:Jt(o,l)});c.texture.colorSpace=fe,c.texture.generateMipmaps=!1,this.geometryTarget=c,this.receiverTarget=c,this.legacyTarget=null,this.target=new We(o,l,{type:rt,format:re,minFilter:pe,magFilter:pe,depthBuffer:!0,stencilBuffer:!1,depthTexture:Jt(o,l)}),this.target.texture.colorSpace=fe,this.target.texture.generateMipmaps=!1,this.compositeMaterial=null,this.compositeGeometry=null,this.compositeScene=null,this.compositeCamera=null}dt(this.geometryTarget.textures[0]),ga(this.target.width,this.target.height)}getColorTexture(){return this.target.texture}getDepthTexture(){return this.geometryTarget.depthTexture}getReceiverTexture(){return this.geometryTarget.textures[0]}getReceiverDepthTexture(){return this.geometryTarget.depthTexture}getResolution(){return{x:this.target.width,y:this.target.height}}setRelevance(e,t){this.relevanceMode=e,this.relevanceBlend=1}setSize(e,t){const i=Math.max(1,Math.floor(e)),r=Math.max(1,Math.floor(t)),s=new Set([this.geometryTarget,this.target,...this.legacyTarget?[this.legacyTarget]:[]]);for(const a of s)a.setSize(i,r);for(const a of s)a.depthTexture&&(a.depthTexture.image.width=i,a.depthTexture.image.height=r,a.depthTexture.needsUpdate=!0);this.compositeMaterial&&this.compositeMaterial.uniforms.uResolution.value.set(i,r),ga(i,r)}render(e,t){this.interfaceEnvelopeVisible=Ir(e,Number(Et.uForwardWaterLevel.value)),this.skippedNoInterface=!this.interfaceEnvelopeVisible,Cs(e),this.activeRenderableStateCount=0;const i=this.renderer.getRenderTarget(),r=this.renderer.getClearAlpha(),s=this.scene.background,a=e.layers.mask;this.renderer.getClearColor(this.clearColor);let o=[];try{if(!this.interfaceEnvelopeVisible){this.clearForwardTargets();return}if(this.prepareParticipants(e),this.scene.background=null,e.layers.set(Mt),wa(!0),!this.mrtSupported){Si(0),Kt(!0),o=this.setForwardReceiverMaterialMode(),dt(null);const c=()=>{this.setPathVisibility("all"),this.renderer.setRenderTarget(this.receiverTarget),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1),this.renderer.render(this.scene,e)};this.measureStage("forward-geometry-render",c),this.relevanceMode==="FULL"&&t?.(this.receiverTarget.texture,this.receiverTarget.depthTexture),dt(this.receiverTarget.texture),Kt(!1),this.setForwardColorMaterialMode();const h=()=>{this.setPathVisibility("all"),this.renderer.setRenderTarget(this.target),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1),this.renderer.render(this.scene,e)};this.measureStage("forward-legacy-render",h);return}o=this.setForwardMrtMaterials(),o.push(...this.setForwardLegacyMaterials()),Kt(!1),Si(1),dt(null);const l=()=>{this.setPathVisibility("optimized"),this.renderer.setRenderTarget(this.geometryTarget),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1),this.renderer.render(this.scene,e)};if(this.measureStage("forward-geometry-render",l),this.relevanceMode==="FULL"&&t?.(this.geometryTarget.textures[0],this.geometryTarget.depthTexture),this.hasLegacyParticipants()){const c=()=>{this.setPathVisibility("legacy"),this.renderer.setRenderTarget(this.legacyTarget),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1),this.renderer.render(this.scene,e)};this.measureStage("forward-legacy-render",c)}else this.clearLegacyTarget();dt(this.geometryTarget.textures[0]),this.renderComposite()}finally{Kt(!1),Si(0),wa(!1),dt(this.geometryTarget.textures[0]),this.scene.background=s,this.renderer.setRenderTarget(i),this.renderer.setClearColor(this.clearColor,r),e.layers.mask=a;for(let l=0;l<this.activeRenderableStateCount;l+=1){const c=this.renderableStates[l];c.object.visible=c.visible,c.object.frustumCulled=c.frustumCulled}this.renderableStates.length=this.activeRenderableStateCount,this.activeRenderableStateCount=0,this.restoreForwardMaterials(o)}}getDiagnostics(){return this.renderer.getDrawingBufferSize(this.size),this.countParticipantPaths(),{width:this.target.width,height:this.target.height,drawingBufferWidth:this.size.x,drawingBufferHeight:this.size.y,projection:"forward-fermat-snell",coverage:"target-alpha",receiverSpace:"source-world-rgb32f",receiverFormat:"RGB32F+coverage",radianceFormat:"RGBA16F",projectedDepth:"depth-attachment",geometryAttachments:this.mrtSupported?3:1,singleProjection:this.mrtSupported,singleProjectionEnabled:this.mrtSupported,attachmentCount:this.mrtSupported?3:1,fullscreenComposite:this.mrtSupported,optimizedParticipants:this.optimizedParticipants,legacyParticipants:this.legacyParticipants,participatingObjects:this.participants.size,interfaceEnvelopeVisible:this.interfaceEnvelopeVisible,skippedNoInterface:this.skippedNoInterface,qualityMode:this.relevanceMode,mode:this.relevanceMode,relevanceBlend:this.relevanceBlend,forwardBlend:this.relevanceBlend,sourceCulling:this.sourceCuller.getDiagnostics(),mediumSegregation:!0,legacyDepthMerge:this.mrtSupported,optimizedParticipantCount:this.optimizedParticipants,legacyParticipantCount:this.legacyParticipants}}dispose(){dt(null),this.participants.clear(),this.renderableStates.length=0;const e=new Set;for(const t of[this.geometryTarget,this.target,this.legacyTarget])t&&!e.has(t)&&(t.dispose(),e.add(t));this.compositeGeometry?.dispose(),this.compositeMaterial?.dispose()}prepareParticipants(e){const t=!!Et.uForwardCameraUnderwater.value;t&&this.sourceCuller.update(e,Number(Et.uForwardWaterLevel.value));for(const i of this.participants.getParticipants()){if(!i.visible)continue;const r=this.renderableStates[this.activeRenderableStateCount]??{object:i,visible:!0,frustumCulled:!0,eligible:!1,bounds:new mr};if(this.renderableStates[this.activeRenderableStateCount]=r,r.object=i,r.visible=i.visible,r.frustumCulled=i.frustumCulled,r.eligible=this.isMediumVisible(i,t),r.eligible&&t){i.updateWorldMatrix(!0,!1);const s=i.geometry;let a=null;i instanceof Qi?(i.boundingBox||i.computeBoundingBox(),a=i.boundingBox):(s.boundingBox||s.computeBoundingBox(),a=s.boundingBox),a?r.bounds.copy(a).applyMatrix4(i.matrixWorld):r.bounds.makeEmpty(),i.frustumCulled=!1,r.eligible=this.sourceCuller.intersectsBox(r.bounds)}r.eligible||(i.visible=!1),this.activeRenderableStateCount+=1}}setPathVisibility(e){for(let t=0;t<this.activeRenderableStateCount;t+=1){const i=this.renderableStates[t],r=this.isMrtParticipant(i.object);i.object.visible=i.eligible&&(e==="all"||e==="optimized"&&r||e==="legacy"&&!r),i.object.frustumCulled=!1}}isMrtParticipant(e){const t=e.userData[Pt],i=t?Array.isArray(t)?t:[t]:pn(e);return!!i&&i.every(Ts)}hasLegacyParticipants(){for(const e of this.participants.getParticipants())if(!this.isMrtParticipant(e))return!0;return!1}countParticipantPaths(){this.optimizedParticipants=0,this.legacyParticipants=0;for(const e of this.participants.getParticipants())this.isMrtParticipant(e)?this.optimizedParticipants+=1:this.legacyParticipants+=1}isMediumVisible(e,t){const i=e.userData[Rs];return!i||i==="boundary"?!0:t?i==="above":i==="below"}clearForwardTargets(){const e=new Set([this.receiverTarget,this.target,...this.legacyTarget?[this.legacyTarget]:[]]);for(const t of e)this.renderer.setRenderTarget(t),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1)}clearLegacyTarget(){this.legacyTarget&&(this.renderer.setRenderTarget(this.legacyTarget),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!0,!1))}setForwardReceiverMaterialMode(){const e=[];for(const t of this.participants.getParticipants()){const i=t.userData[ya],r=t.userData[Pt];!i||!r||(e.push({object:t,material:t.material}),t.material=i)}return e}setForwardLegacyMaterials(){const e=[];for(const t of this.participants.getParticipants()){if(this.isMrtParticipant(t))continue;const i=t.userData[Pt];i&&(e.push({object:t,material:t.material}),t.material=i)}return e}setForwardMrtMaterials(){const e=[];for(const t of this.participants.getParticipants()){if(!this.isMrtParticipant(t))continue;const i=t.userData[Pt];!i||t.material===i||(e.push({object:t,material:t.material}),t.material=i)}return e}setForwardColorMaterialMode(){for(const e of this.participants.getParticipants()){const t=e.userData[ya],i=e.userData[Pt];!t||!i||(e.material=i)}}restoreForwardMaterials(e){for(const t of e)t.object.material=t.material}renderComposite(){const e=this.compositeMaterial,t=this.compositeScene,i=this.compositeCamera;if(!e||!t||!i)return;e.uniforms.tSunVisibility.value=Et.uForwardSunVisibility.value,e.uniforms.uShadowBlend.value=this.relevanceMode==="FULL"?1:0,e.uniforms.uRelevanceBlend.value=this.relevanceBlend;const r=()=>{this.renderer.setRenderTarget(this.target),this.renderer.setClearColor(0,0),this.renderer.clear(!0,!1,!1),this.renderer.render(t,i)};this.measureStage("forward-composite",r)}measureStage(e,t){return this.stageProfiler?this.stageProfiler.measure(e,t):t()}}class gn{materials=new Set;register(e){e.uniforms?.voxelShadowEnabled&&this.materials.add(e)}unregister(e){this.materials.delete(e)}toggle(e){const t=[],i=new Set;for(const r of this.materials){const s=r.uniforms,a=s?.voxelShadowEnabled;if(!a||i.has(a))continue;i.add(a);const o=s?.voxelShadowDepth;t.push({enabledUniform:a,enabledValue:a.value,depthUniform:o,depthValue:o?.value}),a.value=e,o&&(o.value=null)}return t}restore(e){for(const t of e)t.enabledUniform.value=t.enabledValue,t.depthUniform&&(t.depthUniform.value=t.depthValue)}get size(){return this.materials.size}clear(){this.materials.clear()}}const Ga=["caustic-field-update","water-free-scene-capture","direct-voxel-shadow","forward-geometry-render","forward-voxel-shadow","forward-legacy-render","forward-composite","normal-render-pass","aerial-perspective","underwater","bloom","lens-flare","output"];class wn{renderer;gl;extension;stages=new Map;previousAutoReset;activeStage=null;frame=0;disposed=!1;constructor(e){this.renderer=e,this.previousAutoReset=e.info.autoReset,e.info.autoReset=!1;for(const r of Ga)this.stages.set(r,{gpuMs:null,drawCalls:0,triangles:0,sampleCount:0,pending:null});let t=null,i=null;if(e.capabilities.isWebGL2)try{const r=e.getContext(),s=r.getExtension("EXT_disjoint_timer_query_webgl2");s&&(t=r,i=s)}catch{}this.gl=t,this.extension=i}beginFrame(){if(!this.disposed){this.frame+=1,this.pollQueries(),this.renderer.info.reset();for(const e of this.stages.values())e.drawCalls=0,e.triangles=0}}measure(e,t){const i=this.begin(e);try{return t()}finally{this.end(i)}}getDiagnostics(){const e={};for(const t of Ga){const i=this.stages.get(t);e[t]={gpuMs:i.gpuMs,drawCalls:i.drawCalls,triangles:i.triangles,sampleCount:i.sampleCount,queryPending:i.pending!==null}}return{supported:this.extension!==null,timerQuery:this.extension?"EXT_disjoint_timer_query_webgl2":"unavailable",frame:this.frame,stages:e}}dispose(){if(!this.disposed){if(this.disposed=!0,this.gl)for(const e of this.stages.values())e.pending&&this.gl.deleteQuery(e.pending.query),e.pending=null;this.renderer.info.autoReset=this.previousAutoReset,this.activeStage=null}}begin(e){const t=this.stages.get(e),i=this.renderer.info.render,r=this.activeStage===null&&this.beginQuery(t);return r&&(this.activeStage=e),{stage:t,stageName:e,callsBefore:i.calls,trianglesBefore:i.triangles,queryStarted:r}}end(e){const t=this.renderer.info.render,i=t.calls>=e.callsBefore?t.calls-e.callsBefore:t.calls,r=t.triangles>=e.trianglesBefore?t.triangles-e.trianglesBefore:t.triangles;e.stage.drawCalls+=i,e.stage.triangles+=r,e.queryStarted&&(this.gl&&this.gl.endQuery(this.extension.TIME_ELAPSED_EXT),this.activeStage===e.stageName&&(this.activeStage=null))}beginQuery(e){if(!this.gl||!this.extension||e.pending)return!1;const t=this.gl.createQuery();return t?(this.gl.beginQuery(this.extension.TIME_ELAPSED_EXT,t),e.pending={query:t,frameStarted:this.frame},!0):!1}pollQueries(){if(!(!this.gl||!this.extension))for(const e of this.stages.values()){const t=e.pending;if(!t)continue;const i=this.frame-t.frameStarted,r=!!this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT_AVAILABLE);if(!r&&i<=8)continue;if(!r){this.gl.deleteQuery(t.query),e.pending=null;continue}const s=!!this.gl.getParameter(this.extension.GPU_DISJOINT_EXT),a=Number(this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT));this.gl.deleteQuery(t.query),e.pending=null,!(s||!Number.isFinite(a)||a<0)&&(e.gpuMs=a/1e6,e.sampleCount+=1)}}}function wt(n,e,t){const i=n.render.bind(n);n.render=(r,s,a,o,l)=>t.measure(e,()=>i(r,s,a,o,l))}function yn(){return new He({name:"MyCraftSolidTerrainDepthOnly",vertexShader:`
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      void main() {
        gl_FragColor = vec4(0.0);
      }
    `,colorWrite:!1,depthWrite:!0,depthTest:!0,side:pr,toneMapped:!1})}class xn{composer;renderPass;aerial;bloom;lens;output;underwater;depthTarget;forwardRefraction;oceanRefractionRelevance;renderer;scene;voxelSunShadow=null;shadowSamplingMaterials=new gn;forwardRefractionParticipants;stageProfiler;ownsStageProfiler;solidTerrainDepthMaterial=yn();solidTerrainMeshes=new Set;swappedSolidTerrainMaterials=new Map;beforeOpaqueCapture=null;afterOpaqueCapture=null;sky=null;sceneColorCaptureRequired=!0;underwaterEnabled=!1;cameraSubmerged=!1;oceanSurfaceY=42;lastRelevanceState;warmupForwardRefractionMode=null;constructor(e,t,i,r,s,a,o){this.renderer=e,this.scene=t,this.forwardRefractionParticipants=a??new sa,this.stageProfiler=o??new wn(e),this.ownsStageProfiler=o===void 0,this.composer=new Qs(e);const l=this.getEffectiveSize(r,s);this.depthTarget=new We(l.width,l.height,{minFilter:N,magFilter:N,format:re,depthBuffer:!0,stencilBuffer:!0});const c=new gr(l.width,l.height,ss);c.format=os,this.depthTarget.depthTexture=c,this.depthTarget.texture.colorSpace=fe,this.forwardRefraction=new vn(e,t,l.width,l.height,this.forwardRefractionParticipants,this.stageProfiler),this.oceanRefractionRelevance=new mn(e,l.width,l.height),this.oceanRefractionRelevance.setDepthTarget(this.depthTarget),this.lastRelevanceState=this.oceanRefractionRelevance.getState(),this.renderPass=new Js(t,i),wt(this.renderPass,"normal-render-pass",this.stageProfiler),this.composer.addPass(this.renderPass),this.aerial=new cn,wt(this.aerial,"aerial-perspective",this.stageProfiler),this.aerial.setDepthTexture(this.depthTarget.depthTexture),this.aerial.setSize(l.width,l.height),this.composer.addPass(this.aerial),this.underwater=new un,wt(this.underwater,"underwater",this.stageProfiler),this.underwater.setDepthTexture(this.depthTarget.depthTexture),this.composer.addPass(this.underwater),this.bloom=new Zo(r,s),wt(this.bloom,"bloom",this.stageProfiler),this.composer.addPass(this.bloom),this.lens=new ln,wt(this.lens,"lens-flare",this.stageProfiler),this.lens.setDepthTexture(this.depthTarget.depthTexture),this.lens.setSize(l.width,l.height),this.composer.addPass(this.lens),this.output=new eo,wt(this.output,"output",this.stageProfiler),this.composer.addPass(this.output)}getEffectiveSize(e,t){const i=this.renderer.getPixelRatio();return{width:Math.max(1,Math.floor(e*i)),height:Math.max(1,Math.floor(t*i))}}setSize(e,t,i=this.renderer.getPixelRatio()){this.composer.setPixelRatio(i);const r=this.getEffectiveSize(e,t);this.depthTarget.setSize(r.width,r.height),this.forwardRefraction.setSize(r.width,r.height),this.oceanRefractionRelevance.setSize(r.width,r.height),this.depthTarget.depthTexture&&(this.depthTarget.depthTexture.image.width=r.width,this.depthTarget.depthTexture.image.height=r.height,this.depthTarget.depthTexture.needsUpdate=!0),this.composer.setSize(e,t),this.aerial.setSize(r.width,r.height),this.bloom.setSize(r.width,r.height),this.lens.setSize(r.width,r.height),this.voxelSunShadow?.setSize(e,t)}setVoxelSunShadowPass(e){this.voxelSunShadow=e,e&&(e.setStageProfiler(this.stageProfiler),this.depthTarget.depthTexture&&e.setDepthTexture(this.depthTarget.depthTexture))}getRenderDiagnostics(){return this.stageProfiler.getDiagnostics()}getStageProfiler(){return this.stageProfiler}beginFrame(){this.stageProfiler.beginFrame()}registerShadowSamplingMaterial(e){this.shadowSamplingMaterials.register(e)}unregisterShadowSamplingMaterial(e){this.shadowSamplingMaterials.unregister(e)}registerSolidTerrainMesh(e){this.solidTerrainMeshes.add(e)}unregisterSolidTerrainMesh(e){this.solidTerrainMeshes.delete(e),this.swappedSolidTerrainMaterials.delete(e)}setSceneColorCaptureRequired(e){this.sceneColorCaptureRequired=e}setShadowSamplingEnabled(e){return this.shadowSamplingMaterials.toggle(e)}restoreShadowSampling(e){this.shadowSamplingMaterials.restore(e)}swapSolidTerrainMaterialsForDepth(){for(const e of this.solidTerrainMeshes)e.material!==this.solidTerrainDepthMaterial&&(Array.isArray(e.material)||(this.swappedSolidTerrainMaterials.set(e,e.material),e.material=this.solidTerrainDepthMaterial))}restoreSolidTerrainMaterials(){for(const[e,t]of this.swappedSolidTerrainMaterials)e.material===this.solidTerrainDepthMaterial&&(e.material=t);this.swappedSolidTerrainMaterials.clear()}getDepthTexture(){return this.depthTarget.depthTexture}getSceneColorTexture(){return this.depthTarget.texture}getSceneColorResolution(){return{x:this.depthTarget.width,y:this.depthTarget.height}}getForwardRefractionColorTexture(){return this.forwardRefraction.getColorTexture()}getForwardRefractionDepthTexture(){return this.forwardRefraction.getDepthTexture()}getForwardRefractionResolution(){return this.forwardRefraction.getResolution()}getForwardRefractionDiagnostics(){return this.forwardRefraction.getDiagnostics()}setOpaqueCaptureHooks(e,t){this.beforeOpaqueCapture=e,this.afterOpaqueCapture=t}setSky(e){this.sky=e}setUnderwater(e){this.underwaterEnabled=e,this.underwater.setUnderwater(e)}setUnderwaterWaterLevel(e){this.oceanSurfaceY=e,this.underwater.setWaterLevel(e)}setWaterCameraState(e,t,i=t){this.cameraSubmerged=e,Number.isFinite(i)&&(this.oceanSurfaceY=i),this.aerial.setCameraSubmerged(e),this.aerial.setCameraSurfaceY(t),this.underwater.setCameraSubmerged(e),this.underwater.setCameraSurfaceY(t),this.lens.setCameraSubmerged(e)}getOceanRefractionRelevanceDiagnostics(){return{...this.oceanRefractionRelevance.getDiagnostics()}}setWarmupForwardRefractionMode(e){this.warmupForwardRefractionMode=e,e===null&&this.forwardRefraction.setRelevance(this.lastRelevanceState.mode,1)}setUnderwaterDebugMode(e){this.underwater.setDebugMode(e)}setUnderwaterCaustics(e,t,i,r,s=24){this.underwater.setCaustics(e,t,i,r,s)}setUnderwaterTime(e){this.underwater.setTime(e)}update(e,t,i,r,s=0){const a=this.setShadowSamplingEnabled(!1),o=this.renderer.getRenderTarget();let l=null;try{this.beforeOpaqueCapture?.(),this.sceneColorCaptureRequired||(this.sky&&(l=this.sky.visible,this.sky.visible=!1),this.swapSolidTerrainMaterialsForDepth()),this.stageProfiler.measure("water-free-scene-capture",()=>{this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,e)})}finally{this.restoreSolidTerrainMaterials(),this.sky&&l!==null&&(this.sky.visible=l),this.renderer.setRenderTarget(o),this.afterOpaqueCapture?.(),this.restoreShadowSampling(a)}this.lastRelevanceState=this.oceanRefractionRelevance.update(e,this.oceanSurfaceY,this.cameraSubmerged,s);const c=this.warmupForwardRefractionMode??this.lastRelevanceState.mode;this.forwardRefraction.setRelevance(c,1),this.voxelSunShadow?.setSunIntensity(r?.sunIntensity??1),this.voxelSunShadow?.update(e,t),this.forwardRefraction.render(e,(h,u)=>{this.voxelSunShadow?.updateForward(h,u)}),this.aerial.setCamera(e),this.underwater.setCamera(e),this.underwater.setSun(t,i??new V(1,1,.95)),this.underwater.setUnderwater(this.underwaterEnabled),r&&(this.aerial.setAtmosphereState(r),this.underwater.setAtmosphere(r.skyIrradiance,r.sunIntensity)),this.lens.update(e,t,r)}setSSAOWaterLevel(e){}setSSAO(e,t,i){}setBloom(e,t,i){this.bloom.setSettings({enabled:e,strength:t,threshold:i})}setLens(e,t){this.lens.setEnabled(e),this.lens.setIntensity(t)}setLensDebugMode(e){this.lens.setDebugMode(e)}getLensDiagnostics(){return this.lens.getDiagnostics()}setAerialPerspective(e,t){this.aerial.setSettings({enabled:e,maxDistance:t})}getExposureDiagnostics(){return{enabled:!1,averageLuminance:.18,targetExposure:Je.exposure,currentExposure:this.renderer.toneMappingExposure,pending:!1,readbackFailures:0}}resetExposure(){this.renderer.toneMappingExposure=Je.exposure}render(e=0){const t=Number.isFinite(e)?Math.min(.1,Math.max(0,e)):0;this.composer.render(t)}renderHidden(e=0){const t=this.composer.renderToScreen;this.composer.renderToScreen=!1;try{this.render(e)}finally{this.composer.renderToScreen=t}}dispose(){this.voxelSunShadow?.dispose(),this.oceanRefractionRelevance.dispose(),this.depthTarget.dispose(),this.forwardRefraction.dispose(),this.shadowSamplingMaterials.clear(),this.underwater.dispose(),this.lens.dispose(),this.composer.dispose(),this.solidTerrainMeshes.clear(),this.swappedSolidTerrainMaterials.clear(),this.solidTerrainDepthMaterial.dispose(),this.ownsStageProfiler&&this.stageProfiler.dispose()}}const Sn={enabled:!0,resolution:2048,shadowDistance:300,softness:0,bias:0,normalBias:0,intensity:1},Xa=Math.PI*2;class bn{sun;hemi;t=0;paused=!1;cycleSeconds=X.dayNightCycleSeconds;sunDir=new A(1,1,1).normalize();sunColor=new V(16777215);shadowsSupported;shadowSettings={...Sn};east=new A(Math.cos(Math.PI*.25),0,Math.sin(Math.PI*.25));up=new A(0,1,0);constructor(e,t={}){this.cycleSeconds=t.cycleSeconds??X.dayNightCycleSeconds,this.paused=!!t.paused,this.t=(t.initialTime??.25)%1,this.shadowsSupported=t.enableShadows??!0,this.sun=new ns(16777215,1),this.sun.castShadow=!1,this.sun.layers.enable(Mt),this.sun.target.layers.enable(Mt),e.add(this.sun),e.add(this.sun.target),this.hemi=new ls(2241348,1052688,.05),this.hemi.position.set(0,1,0),this.hemi.layers.enable(Mt),e.add(this.hemi),this.recomputeLighting()}update(e){this.paused||(this.t=(this.t+e/Math.max(.001,this.cycleSeconds))%1,this.recomputeLighting())}setTime(e){this.t=(e%1+1)%1,this.recomputeLighting()}pause(e){this.paused=e}setCycleSeconds(e){this.cycleSeconds=Math.max(1,e|0)}getTime(){return this.t}isPaused(){return this.paused}getSunDirection(e=new A){return e.copy(this.sunDir)}getSunColor(e=new V){return e.copy(this.sunColor)}getElevationRadians(){return Math.asin(Math.sin(this.t*Xa))}setAtmosphereLighting(e,t){this.sunColor.copy(e),this.sun.color.copy(e),this.sun.intensity=this.shadowsSupported?Math.max(0,t):0}setShadowBounds(e){}setShadowSettings(e){e.enabled!==void 0&&(this.shadowSettings.enabled=!!e.enabled),e.resolution!==void 0&&(this.shadowSettings.resolution=Mn(e.resolution)),e.shadowDistance!==void 0&&(this.shadowSettings.shadowDistance=k.clamp(e.shadowDistance,1,2e3)),e.softness!==void 0&&(this.shadowSettings.softness=k.clamp(e.softness,0,8)),e.bias!==void 0&&(this.shadowSettings.bias=k.clamp(e.bias,-.01,.01)),e.normalBias!==void 0&&(this.shadowSettings.normalBias=k.clamp(e.normalBias,0,1)),e.intensity!==void 0&&(this.shadowSettings.intensity=k.clamp(e.intensity,0,1))}getShadowSettings(){return{...this.shadowSettings}}dispose(){this.sun.dispose(),this.hemi.dispose(),this.sun.parent?.remove(this.sun),this.sun.target.parent?.remove(this.sun.target),this.hemi.parent?.remove(this.hemi)}recomputeLighting(){const e=this.t*Xa;this.sunDir.copy(this.east).multiplyScalar(Math.cos(e)).addScaledVector(this.up,Math.sin(e)).normalize(),this.sun.target.position.set(0,0,0),this.sun.position.copy(this.sunDir).multiplyScalar(100),this.sun.updateMatrixWorld(),this.sun.target.updateMatrixWorld();const t=Math.sin(e),i=k.clamp(t,0,1);this.sunColor.copy(Cn(i)),this.sun.intensity=this.shadowsSupported?k.lerp(0,1.1,ui(0,.7,i)):0,this.sun.color.copy(this.sunColor);const r=1-ui(.05,.2,i);this.hemi.intensity=k.lerp(.05,.15,r),this.hemi.color.setRGB(.16,.2,.26),this.hemi.groundColor.setRGB(.05,.05,.06)}}function Mn(n){const e=k.clamp(Math.round(n),256,4096);return 2**Math.round(Math.log2(e))}function ui(n,e,t){const i=k.clamp((t-n)/Math.max(1e-5,e-n),0,1);return i*i*(3-2*i)}function Cn(n){const e=new V(1,.58,.25),t=new V(1,.95,.9),i=new V(1,1,.98),r=ui(0,.25,n),s=ui(.25,.8,n),a=e.clone().lerp(t,r),o=t.clone().lerp(i,s);return a.lerp(o,s)}class Tn{sky;sun=new A(0,1,0);material;constructor(e){const t=new cs(1,64,32);this.material=new He({name:"MyCraftAnalyticSky",toneMapped:!1,side:hs,depthTest:!1,depthWrite:!1,uniforms:{sunDirection:{value:this.sun.clone()},sunColor:{value:new V(1,1,1)},sunIntensity:{value:1.35},sunTransmittance:{value:new V(1,1,1)},skyZenith:{value:new V(.04,.16,.42)},skyHorizon:{value:new V(.34,.5,.7)},skyAerosol:{value:new V(.36,.43,.52)},skyAerosolStrength:{value:.14},skyRadianceScale:{value:1.25},moonDirection:{value:new A(0,-1,0)},moonColor:{value:new V(.56,.66,.9)},moonIntensity:{value:0},starVisibility:{value:0},rayleighCoefficient:{value:.055},mieCoefficient:{value:.018},mieDirectionalG:{value:.76},sunAngularRadius:{value:.004675}},vertexShader:`
        varying vec3 vSkyDirection;
        void main() {
          vSkyDirection = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vSkyDirection;
        uniform vec3 sunDirection;
        uniform vec3 sunColor;
        uniform float sunIntensity;
        uniform vec3 sunTransmittance;
        uniform vec3 skyZenith;
        uniform vec3 skyHorizon;
        uniform vec3 skyAerosol;
        uniform float skyAerosolStrength;
        uniform float skyRadianceScale;
        uniform vec3 moonDirection;
        uniform vec3 moonColor;
        uniform float moonIntensity;
        uniform float starVisibility;
        uniform float rayleighCoefficient;
        uniform float mieCoefficient;
        uniform float mieDirectionalG;
        uniform float sunAngularRadius;

        const float PI = 3.14159265359;

        float rayleighPhase(float cosTheta) {
          return 3.0 / (16.0 * PI) * (1.0 + cosTheta * cosTheta);
        }

        float miePhase(float cosTheta, float g) {
          float g2 = g * g;
          float denominator = pow(max(1.0 + g2 - 2.0 * g * cosTheta, 0.001), 1.5);
          return (1.0 - g2) / (4.0 * PI * denominator);
        }

        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }

        float stars(vec3 direction) {
          vec2 spherical = vec2(
            atan(direction.z, direction.x) / (2.0 * PI) + 0.5,
            acos(clamp(direction.y, -1.0, 1.0)) / PI
          );
          vec2 cellUv = spherical * vec2(220.0, 110.0);
          vec2 cell = floor(cellUv);
          vec2 local = fract(cellUv) - 0.5;
          float seed = hash12(cell);
          float visible = step(0.985, seed);
          vec2 offset = vec2(hash12(cell + 11.7), hash12(cell + 37.2)) - 0.5;
          float radius = mix(0.035, 0.09, hash12(cell + 61.4));
          float point = 1.0 - smoothstep(0.0, radius, length(local - offset * 0.72));
          float latitude = smoothstep(0.02, 0.20, direction.y);
          return point * visible * latitude * mix(0.55, 1.5, hash12(cell + 5.1));
        }

        void main() {
          vec3 direction = normalize(vSkyDirection);
          // Keep the lower hemisphere on one bounded sea-level tint. A full
          // -1..1 gradient makes the underside of the dome read as a second
          // painted sky and leaves a hard horizon when the camera crests a
          // ridge. The asymmetric shoulders mirror a real marine aerosol band.
          float up = max(direction.y, 0.0);
          float horizon = 1.0 - pow(up, 0.48);
          float cosSun = dot(direction, normalize(sunDirection));
          float cosMoon = dot(direction, normalize(moonDirection));

          vec3 gradient = mix(skyHorizon, skyZenith, 1.0 - horizon);
          // The camera can look below the terrain horizon in the open-world
          // view. Blend the underside over a wide angular shoulder so it
          // reads as the same distant marine air mass instead of a second
          // flat sky plane at y=0.
          vec3 seaMist = mix(skyAerosol, skyHorizon, 0.58);
          vec3 base = mix(seaMist, gradient, smoothstep(-0.38, 0.14, direction.y));
          float aerosol = smoothstep(-0.18, 0.0, direction.y)
            * (1.0 - smoothstep(0.0, 0.30, direction.y))
            * skyAerosolStrength;
          base = mix(base, skyAerosol, aerosol);

          // Rayleigh/Mie are retained as the sun-facing lift only. The old
          // broad contribution was bright enough to erase the authored
          // zenith-to-horizon gradient at noon; SeaPark's above-sea look is a
          // useful reminder that the haze must be carried by the base field.
          float viewRayleighDepth = mix(0.62, 1.35, horizon);
          float viewMieDepth = mix(0.08, 0.72, horizon);
          float rayleigh = rayleighPhase(cosSun) * rayleighCoefficient * viewRayleighDepth;
          float mie = miePhase(cosSun, mieDirectionalG) * mieCoefficient * viewMieDepth;
          vec3 scatteredSun = sunColor * sunTransmittance * sunIntensity * (rayleigh * 0.55 + mie * 0.70);

          float sunElevation = normalize(sunDirection).y;
          float sunVisibility = smoothstep(-0.14, 0.02, sunElevation);
          float sunEnergy = sunVisibility * mix(0.18, 1.0, smoothstep(-0.02, 0.30, sunElevation));
          float sunAmount = max(cosSun, 0.0);

          // The 0.53° disc uses the same stable x² form as a measured solar
          // profile. Its core is bright enough to bloom, while the three-lobe
          // aureole seats it in the atmosphere instead of pasting on a circle.
          float discCos = cos(sunAngularRadius);
          float x2 = clamp((1.0 - sunAmount) / max(1e-5, 1.0 - discCos), 0.0, 4.0);
          float inDisc = 1.0 - smoothstep(0.90, 1.0, x2);
          float mu = sqrt(max(0.0, 1.0 - x2));
          float limb = 0.30 + 0.93 * mu - 0.23 * mu * mu;
          float disc = inDisc * limb;
          float aureole = pow(sunAmount, 3000.0) * 20.0
            + pow(sunAmount, 260.0) * 1.7
            + pow(sunAmount, 18.0) * 0.16;
          vec3 solarDisc = sunColor * sunTransmittance * sunEnergy * (disc * 70.0 + aureole);

          // Low sun adds a thin, directional warm airlight band rather than
          // tinting the whole frame orange. This is the horizon cue that keeps
          // sunrise/sunset continuous with the daytime sky.
          float lowSun = sunVisibility * (1.0 - smoothstep(0.05, 0.35, sunElevation));
          float horizonBand = exp(-abs(direction.y) * 9.0);
          vec3 lowSunGlow = sunColor * (pow(sunAmount, 8.0) * 0.08 + horizonBand * lowSun * 0.05);

          // A cool lunar disc is deliberately much weaker than the sun and
          // disappears continuously through the bright twilight band.
          float moonDisc = smoothstep(cos(0.0045 * 1.8), cos(0.0045 * 0.42), cosMoon);
          vec3 moon = moonColor * moonIntensity * moonDisc * 0.65;
          vec3 starLight = vec3(0.0);
          if (starVisibility != 0.0) {
            starLight = vec3(stars(direction) * starVisibility * 0.16);
          }

          vec3 color = max(base * skyRadianceScale + scatteredSun + solarDisc + lowSunGlow + moon + starLight, vec3(0.0));
          gl_FragColor = vec4(color, 1.0);
        }
      `}),this.sky=new ie(t,this.material),this.sky.name="AtmosphereSkyDome",this.sky.scale.setScalar(1e3),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,e.add(this.sky)}setSunDirection(e){this.sun.copy(e).normalize(),this.material.uniforms.sunDirection.value.copy(this.sun)}setCameraPosition(e){this.sky.position.copy(e)}setAtmosphereState(e){this.setSunDirection(e.sunDirection),this.material.uniforms.sunColor.value.copy(e.sunColor),this.material.uniforms.sunIntensity.value=e.sunIntensity,this.material.uniforms.sunTransmittance.value.copy(e.sunTransmittance),this.material.uniforms.skyZenith.value.copy(e.skyZenith),this.material.uniforms.skyHorizon.value.copy(e.skyHorizon),this.material.uniforms.skyAerosol.value.copy(e.skyAerosol),this.material.uniforms.skyAerosolStrength.value=e.skyAerosolStrength,this.material.uniforms.skyRadianceScale.value=X.atmosphere.skyRadianceScale,this.material.uniforms.moonDirection.value.copy(e.moonDirection),this.material.uniforms.moonColor.value.copy(e.moonColor),this.material.uniforms.moonIntensity.value=e.moonIntensity,this.material.uniforms.starVisibility.value=e.starVisibility,this.material.uniforms.rayleighCoefficient.value=e.rayleighCoefficient,this.material.uniforms.mieCoefficient.value=e.mieCoefficient,this.material.uniforms.mieDirectionalG.value=e.mieDirectionalG}dispose(){this.sky.parent?.remove(this.sky),this.sky.geometry.dispose(),this.material.dispose()}}const Rn=new V(1,.39,.08),Dn=new V(1,.82,.54),Fi=new V(1,.97,.91),Za=new V(.34,.42,.68),Ya=new V(.56,.66,.9),qa=new V(.04,.16,.42),ja=new V(.34,.5,.7),kn=new V(.002,.006,.022),An=new V(.012,.026,.075),En=new V(.018,.035,.11),Pn=new V(.16,.045,.025),Fn=new V(.45,.08,.012),$a=new V(.36,.43,.52),Bn=new V(.22,.09,.1),zn=new V(.008,.018,.045),In=new V(.006,.012,.032);function Oe(n,e,t){const i=k.clamp((t-n)/Math.max(1e-5,e-n),0,1);return i*i*(3-2*i)}class Ln{state={sunDirection:new A(0,1,0),sunElevation:Math.PI/2,daylight:1,twilight:0,night:0,sunColor:Fi.clone(),sunTransmittance:Fi.clone(),sunIntensity:1.35,skyZenith:qa.clone(),skyHorizon:ja.clone(),skyAerosol:$a.clone(),skyAerosolStrength:X.atmosphere.aerosolStrength,skyIrradiance:new V(.12,.18,.32),nightTint:Za.clone(),starVisibility:0,moonDirection:new A(0,-1,0),moonColor:Ya.clone(),moonIntensity:0,rayleighScaleHeight:X.atmosphere.rayleighScaleHeight,mieScaleHeight:X.atmosphere.mieScaleHeight,rayleighCoefficient:X.atmosphere.rayleighCoefficient,mieCoefficient:X.atmosphere.mieCoefficient,mieDirectionalG:X.atmosphere.mieDirectionalG,absorptionCoefficient:X.atmosphere.absorptionCoefficient};evaluate(e){const t=this.state;t.sunDirection.copy(e).normalize(),t.sunElevation=Math.asin(k.clamp(t.sunDirection.y,-1,1));const i=t.sunDirection.y;t.daylight=Oe(-.11,.07,i),t.twilight=Oe(-.18,.02,i)*(1-Oe(.03,.18,i)),t.night=1-Oe(-.09,.035,i);const r=(1-Oe(.04,.32,i))*Oe(-.12,.06,i);return t.sunTransmittance.copy(Rn).lerp(Dn,Oe(-.03,.12,i)),t.sunTransmittance.lerp(Fi,Oe(.12,.42,i)),t.sunColor.copy(t.sunTransmittance),t.sunIntensity=k.lerp(0,1.35,Oe(.015,.28,i)),t.skyZenith.copy(kn).lerp(qa,t.daylight),t.skyZenith.lerp(En,t.twilight*.48),t.skyHorizon.copy(An).lerp(ja,t.daylight),t.skyHorizon.lerp(Pn,t.twilight*.72),t.skyHorizon.lerp(Fn,r*.62),t.skyAerosol.copy(zn).lerp($a,t.daylight),t.skyAerosol.lerp(Bn,t.twilight*.7),t.skyAerosolStrength=k.clamp(.018+X.atmosphere.aerosolStrength*t.daylight+.045*t.twilight,0,.22),t.skyIrradiance.copy(t.skyHorizon).multiplyScalar(.2).lerp(t.skyAerosol,.18).lerp(t.skyZenith,.28),t.skyIrradiance.lerp(In,t.night),t.nightTint.copy(Za),t.starVisibility=1-Oe(-.085,.045,i),t.moonDirection.copy(t.sunDirection).multiplyScalar(-1),t.moonIntensity=t.starVisibility*.14,t.moonColor.copy(Ya),t}}function Wn(n,e){if(n.timeOfDay){const{t,paused:i}=n.timeOfDay,r=(t%1+1)%1;e.setTime(r),e.setTimePaused(!!i),e.setCycleSeconds(X.dayNightCycleSeconds)}}const di=new Ve(new Uint8Array([0,0,0,255]),1,1,re,Pe);di.colorSpace=fe;di.needsUpdate=!0;class Lr extends He{ocean;constructor(e){const t=new V(e.color??1713988),i=e.ocean===!0,r=Math.max(.001,e.tileScale??1),s=e.useWorldUV!==!1,a=e.bounds??{minX:-1e9,maxX:1e9,minZ:-1e9,maxZ:1e9},o=e.terrainHeightMap??di,l=Math.max(1,e.terrainHeightScale??128),c=Ds();super({name:i?"MyCraftOceanSurface":"MyCraftBlockWaterSurface",transparent:!i,toneMapped:!1,depthWrite:i,depthTest:!0,side:jt,uniforms:{uColor:{value:t},uTime:{value:0},uMap:{value:e.map??null},uUseMap:{value:!1},uTileScale:{value:r},uUseWorldUV:{value:s},uOceanMode:{value:i},uWaterLevel:{value:43},uInnerMinX:{value:a.minX},uInnerMaxX:{value:a.maxX},uInnerMinZ:{value:a.minZ},uInnerMaxZ:{value:a.maxZ},uTerrainHeightMap:{value:o},uTerrainHeightMapEnabled:{value:!!e.terrainHeightMap},uTerrainHeightScale:{value:l},uAlpha:{value:i?1:.7},uFresnelBias:{value:i?0:.02},uEtaAirWater:{value:1/1.333},uRefractAmount:{value:.18},uAbsorption:{value:new A(.2,.06,.02)},uDepthApprox:{value:4},uSpecular:{value:1.2},uRoughness:{value:.35},uSunDir:{value:new A(.35,.9,.2).normalize()},uSunColor:{value:new V(1,.98,.9)},uAmbientIntensity:{value:1},uNightTint:{value:new V(.1,.15,.25)},uWaveAmp:{value:1},uWaveChop:{value:1},uWaveSpeed:{value:1},uFoamIntensity:{value:.55},uFoamThreshold:{value:.3},uFoamNoise:{value:1},uFoamDrift:{value:.15},uSkyTop:{value:new V(.32,.5,.8)},uSkyHorizon:{value:new V(.68,.78,.92)},uSkyAerosol:{value:new V(.36,.43,.52)},uSkyAerosolStrength:{value:.14},uSkyRadianceScale:{value:1.25},uFogColor:{value:new V(.2,.52,.72)},uWaterClarity:{value:120},uUnderwaterFogStrength:{value:.72},tSceneColor:{value:null},tSceneDepth:{value:null},tSunVisibility:{value:null},uHasSceneColor:{value:0},uHasSceneDepth:{value:0},uForwardProjection:{value:!1},uHasSunVisibility:{value:0},uResolution:{value:new q(1,1)},uCameraNear:{value:.1},uCameraFar:{value:1024},uProjectionMatrix:{value:new Ae},uProjectionMatrixInverse:{value:new Ae},uViewMatrixInverse:{value:new Ae},uCameraUnderwater:{value:!1},uDebugMode:{value:0}},vertexShader:`
        precision highp float;
        uniform float uTime;
        uniform bool uOceanMode;
        uniform float uWaveAmp;
        uniform float uWaveChop;
        uniform float uWaveSpeed;
        uniform vec2 uResolution;
        uniform bool uUseWorldUV;
        uniform float uTileScale;
        ${c}

        varying vec3 vWorld;
        varying vec3 vBaseWorld;
        varying vec3 vNormalVary;
        varying vec2 vOceanXZ;
        varying float vHeight;
        varying float vViewDepth;

        float oceanTanh(float x) {
          float e = exp(min(2.0 * x, 20.0));
          return (e - 1.0) / (e + 1.0);
        }

        float oceanOmega(float k, float speed) {
          float depthTerm = oceanTanh(min(k * OCEAN_WATER_DEPTH, 20.0));
          float gravityTerm = 9.81 * k * depthTerm;
          float capillaryTerm = OCEAN_SURFACE_TENSION_OVER_DENSITY * k * k * k;
          return sqrt(max(gravityTerm + capillaryTerm, 0.0)) * speed * uWaveSpeed;
        }

        // Estimate the world-space footprint of one pixel on the undeformed
        // water plane. It is independent of the current mesh tessellation,
        // so inner/outer grid transitions cannot switch a spectral band in a
        // visible strip through a bright reflection.
        float oceanPixelFootprint(vec3 surfacePosition) {
          vec3 toCamera = cameraPosition - surfacePosition;
          float distanceToSurface = length(toCamera);
          float surfaceCos = abs(toCamera.y) / max(distanceToSurface, 0.001);
          float pixelAngle = 2.0 / max(abs(projectionMatrix[1][1]) * uResolution.y, 1.0);
          return distanceToSurface * pixelAngle / max(surfaceCos, 0.08);
        }

        vec3 oceanDisplacement(vec3 worldPosition, float time) {
          float vertexFootprint = oceanPixelFootprint(worldPosition);
          return oceanWaveDisplacement(worldPosition, time, vertexFootprint);
        }

        void main() {
          vec4 baseWorld = modelMatrix * vec4(position, 1.0);
          vec3 displacedWorld = baseWorld.xyz;
          vec2 baseXZ = uUseWorldUV ? baseWorld.xz : baseWorld.xz * uTileScale;
          if (uOceanMode) displacedWorld += oceanDisplacement(baseWorld.xyz, uTime);

          vBaseWorld = baseWorld.xyz;
          vWorld = displacedWorld;
          vOceanXZ = baseXZ;
          vHeight = displacedWorld.y;
          vNormalVary = normalize(mat3(modelMatrix) * normal);
          vViewDepth = -(viewMatrix * vec4(displacedWorld, 1.0)).z;
          gl_Position = projectionMatrix * viewMatrix * vec4(displacedWorld, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform vec3 uColor;
        uniform float uTime;
        uniform bool uOceanMode;
        uniform float uWaterLevel;
        uniform float uInnerMinX;
        uniform float uInnerMaxX;
        uniform float uInnerMinZ;
        uniform float uInnerMaxZ;
        uniform sampler2D uTerrainHeightMap;
        uniform bool uTerrainHeightMapEnabled;
        uniform float uTerrainHeightScale;
        uniform float uAlpha;
        uniform float uFresnelBias;
        uniform float uEtaAirWater;
        uniform float uRefractAmount;
        uniform vec3 uAbsorption;
        uniform float uDepthApprox;
        uniform float uSpecular;
        uniform float uRoughness;
        uniform vec3 uSunDir;
        uniform vec3 uSunColor;
        uniform float uAmbientIntensity;
        uniform vec3 uNightTint;
        uniform float uWaveAmp;
        uniform float uWaveChop;
        uniform float uWaveSpeed;
        uniform float uFoamIntensity;
        uniform float uFoamThreshold;
        uniform float uFoamNoise;
        uniform float uFoamDrift;
        uniform vec3 uSkyTop;
        uniform vec3 uSkyHorizon;
        uniform vec3 uSkyAerosol;
        uniform float uSkyAerosolStrength;
        uniform float uSkyRadianceScale;
        uniform vec3 uFogColor;
        uniform float uWaterClarity;
        uniform float uUnderwaterFogStrength;
        uniform sampler2D tSceneColor;
        uniform sampler2D tSceneDepth;
        uniform sampler2D tSunVisibility;
        uniform int uHasSceneColor;
        uniform int uHasSceneDepth;
        uniform bool uForwardProjection;
        uniform int uHasSunVisibility;
        uniform vec2 uResolution;
        uniform float uCameraNear;
        uniform float uCameraFar;
        uniform mat4 uProjectionMatrix;
        uniform mat4 uProjectionMatrixInverse;
        uniform mat4 uViewMatrixInverse;
        uniform bool uCameraUnderwater;
        uniform int uDebugMode;

        varying vec3 vWorld;
        varying vec3 vBaseWorld;
        varying vec3 vNormalVary;
        varying vec2 vOceanXZ;
        varying float vHeight;
        varying float vViewDepth;
        ${c}

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
            u.y
          );
        }

        // The shoreline is the actual terrain/water column, not the outer
        // rectangular ocean mesh. The CPU WaterSystem bakes this same
        // generator into a small height field, giving the foam a stable
        // coastline around bays and irregular island edges.
        float sampleTerrainTop(vec2 xz) {
          if (!uOceanMode || !uTerrainHeightMapEnabled) return -1000.0;
          vec2 span = vec2(max(uInnerMaxX - uInnerMinX, 1.0), max(uInnerMaxZ - uInnerMinZ, 1.0));
          vec2 uv = (xz - vec2(uInnerMinX, uInnerMinZ)) / span;
          float inside = step(0.0, uv.x) * step(0.0, uv.y) * step(uv.x, 1.0) * step(uv.y, 1.0);
          float encoded = texture2D(uTerrainHeightMap, clamp(uv, vec2(0.0), vec2(1.0))).r;
          return mix(-1000.0, encoded * uTerrainHeightScale + 1.0, inside);
        }

        float oceanTanh(float x) {
          float e = exp(min(2.0 * x, 20.0));
          return (e - 1.0) / (e + 1.0);
        }

        float oceanOmega(float k, float speed) {
          float depthTerm = oceanTanh(min(k * OCEAN_WATER_DEPTH, 20.0));
          float gravityTerm = 9.81 * k * depthTerm;
          float capillaryTerm = OCEAN_SURFACE_TENSION_OVER_DENSITY * k * k * k;
          return sqrt(max(gravityTerm + capillaryTerm, 0.0)) * speed * uWaveSpeed;
        }

        float oceanPixelFootprint(vec3 surfacePosition) {
          vec3 toCamera = cameraPosition - surfacePosition;
          float distanceToSurface = length(toCamera);
          float surfaceCos = abs(toCamera.y) / max(distanceToSurface, 0.001);
          float pixelAngle = 2.0 / max(abs(uProjectionMatrix[1][1]) * uResolution.y, 1.0);
          return distanceToSurface * pixelAngle / max(surfaceCos, 0.08);
        }

        vec3 waveNormal(
          vec2 xz,
          float time,
          float footprint,
          out float crest,
          out float jacobian,
          out float slopeVariance,
          out float normalVariation,
          out vec3 transportNormal
        ) {
          vec3 tangentX = vec3(1.0, 0.0, 0.0);
          vec3 tangentZ = vec3(0.0, 0.0, 1.0);
          float jxx = 1.0;
          float jxz = 0.0;
          float jzx = 0.0;
          float jzz = 1.0;
          float phaseEnergy = 0.0;
          float totalAmplitude = 0.0;
          float curvatureEnergy = 0.0;
          ${Array.from({length:Sr.length},(h,u)=>`
            {
              float k = 6.28318530718 / OCEAN_WAVE_LENGTH_${u};
              float omega = oceanOmega(k, OCEAN_WAVE_SPEED_${u});
              float phase = k * dot(OCEAN_WAVE_DIRECTION_${u}, xz) - omega * time + OCEAN_WAVE_PHASE_${u};
              float waveLod = oceanWaveLod(footprint, OCEAN_WAVE_LENGTH_${u});
              float amplitude = OCEAN_WAVE_AMPLITUDE_${u} * min(uWaveAmp, 1.0) * waveLod;
              float q = OCEAN_WAVE_STEEPNESS_${u} * uWaveChop;
              curvatureEnergy += amplitude * k * k * (1.0 + q);
              float s = sin(phase);
              float c = cos(phase);
              float dx = OCEAN_WAVE_DIRECTION_${u}.x;
              float dz = OCEAN_WAVE_DIRECTION_${u}.y;
              float phaseDx = k * dx;
              float phaseDz = k * dz;
              tangentX += vec3(-q * amplitude * dx * phaseDx * s, amplitude * phaseDx * c, -q * amplitude * dz * phaseDx * s);
              tangentZ += vec3(-q * amplitude * dx * phaseDz * s, amplitude * phaseDz * c, -q * amplitude * dz * phaseDz * s);
              // Gerstner horizontal displacement Jacobian.  Its determinant
              // is a fold/crest signal: compressions concentrate light and
              // are the stable source for foam instead of a scrolling tint.
              jxx += -q * amplitude * dx * phaseDx * s;
              jxz += -q * amplitude * dx * phaseDz * s;
              jzx += -q * amplitude * dz * phaseDx * s;
              jzz += -q * amplitude * dz * phaseDz * s;
              phaseEnergy += abs(s) * amplitude;
              totalAmplitude += amplitude;
            }
          `).join(`
`)}
          vec3 macro = normalize(cross(tangentZ, tangentX));
          transportNormal = macro;
          jacobian = jxx * jzz - jxz * jzx;

          vec2 wind = normalize(vec2(0.80, 0.40));
          vec2 crossWind = vec2(-wind.y, wind.x);
          float k0 = 6.28318530718 / 6.80;
          float k1 = 6.28318530718 / 4.70;
          float k2 = 6.28318530718 / 3.35;
          float k3 = 6.28318530718 / 2.25;
          float k4 = 6.28318530718 / 1.48;
          float k5 = 6.28318530718 / 0.93;
          float k6 = 6.28318530718 / 0.57;
          float aa0 = oceanWaveLod(footprint, 6.80);
          float aa1 = oceanWaveLod(footprint, 4.70);
          float aa2 = oceanWaveLod(footprint, 3.35);
          float aa3 = oceanWaveLod(footprint, 2.25);
          float aa4 = oceanWaveLod(footprint, 1.48);
          float aa5 = oceanWaveLod(footprint, 0.93);
          float aa6 = oceanWaveLod(footprint, 0.57);
          vec2 d1 = normalize(wind * 0.866 + crossWind * 0.5);
          vec2 d2 = normalize(wind * 0.5 - crossWind * 0.866);
          vec2 d3 = normalize(crossWind * 0.94 - wind * 0.34);
          vec2 d4 = normalize(wind * 0.28 + crossWind * 0.96);
          vec2 d5 = normalize(-wind * 0.72 + crossWind * 0.69);
          vec2 d6 = normalize(wind * 0.18 - crossWind * 0.98);
          vec2 detailXZ = xz + oceanDetailWarp(xz, time) * 0.58;
          // A compact directional spectrum replaces the old dominant
          // wind-aligned ripple. Each band carries less energy and a unique
          // direction/phase, so surviving LOD bands cannot collapse into
          // evenly spaced parallel rows.
          vec2 micro = wind * (0.075 * k0 * cos(dot(detailXZ, wind) * k0 + time * oceanOmega(k0, 0.94) + 0.41) * aa0);
          micro += d1 * (0.061 * k1 * cos(dot(detailXZ, d1) * k1 - time * oceanOmega(k1, 1.03) + 2.17) * aa1);
          micro += d2 * (0.048 * k2 * cos(dot(detailXZ, d2) * k2 + time * oceanOmega(k2, 0.98) + 4.63) * aa2);
          micro += d3 * (0.034 * k3 * cos(dot(detailXZ, d3) * k3 - time * oceanOmega(k3, 1.06) + 1.29) * aa3);
          micro += d4 * (0.024 * k4 * cos(dot(detailXZ, d4) * k4 + time * oceanOmega(k4, 1.01) + 5.31) * aa4);
          micro += d5 * (0.014 * k5 * cos(dot(detailXZ, d5) * k5 - time * oceanOmega(k5, 0.96) + 3.44) * aa5);
          micro += d6 * (0.007 * k6 * cos(dot(detailXZ, d6) * k6 + time * oceanOmega(k6, 1.08) + 0.83) * aa6);

          // Use centered finite-difference gradients of advected value noise
          // rather than a scrolling scalar tint. These are unresolved slope
          // bands: the same fields shape the normal and local BRDF roughness,
          // so glints break into facets instead of receiving a painted mask.
          vec2 noiseUvA = detailXZ * 0.075 + wind * time * 0.03;
          vec2 noiseUvB = detailXZ * 0.14 - crossWind * time * 0.021;
          vec2 noiseUvC = detailXZ * 0.27 + vec2(-time * 0.041, time * 0.029);
          float noiseStepA = 0.10;
          float noiseStepB = 0.07;
          float noiseStepC = 0.045;
          float fieldLodA = 1.0 - smoothstep(0.65, 3.0, footprint * 0.075);
          float fieldLodB = 1.0 - smoothstep(0.42, 2.3, footprint * 0.14);
          float fieldLodC = 1.0 - smoothstep(0.22, 1.7, footprint * 0.27);
          if (fieldLodA != 0.0) {
            vec2 noiseGradientA = vec2(
              noise(noiseUvA + vec2(noiseStepA, 0.0)) - noise(noiseUvA - vec2(noiseStepA, 0.0)),
              noise(noiseUvA + vec2(0.0, noiseStepA)) - noise(noiseUvA - vec2(0.0, noiseStepA))
            ) / (2.0 * noiseStepA);
            micro += noiseGradientA * (0.055 * fieldLodA);
          }
          if (fieldLodB != 0.0) {
            vec2 noiseGradientB = vec2(
              noise(noiseUvB + vec2(noiseStepB, 0.0)) - noise(noiseUvB - vec2(noiseStepB, 0.0)),
              noise(noiseUvB + vec2(0.0, noiseStepB)) - noise(noiseUvB - vec2(0.0, noiseStepB))
            ) / (2.0 * noiseStepB);
            micro += noiseGradientB * (0.030 * fieldLodB);
          }
          if (fieldLodC != 0.0) {
            vec2 noiseGradientC = vec2(
              noise(noiseUvC + vec2(noiseStepC, 0.0)) - noise(noiseUvC - vec2(noiseStepC, 0.0)),
              noise(noiseUvC + vec2(0.0, noiseStepC)) - noise(noiseUvC - vec2(0.0, noiseStepC))
            ) / (2.0 * noiseStepC);
            micro += noiseGradientC * (0.014 * fieldLodC);
          }

          vec3 resolved = normalize(macro + vec3(-micro.x * 0.58, 0.0, -micro.y * 0.58));
          slopeVariance = clamp(dot(micro, micro) * 0.90, 0.0, 0.20);
          // Raster derivatives of the analytic normal depend on the mesh
          // cell size. Use the shared spectral curvature and unresolved slope
          // energy instead, so the sun lobe cannot change at a patch join.
          normalVariation = clamp(
            curvatureEnergy * footprint * 0.35 + sqrt(max(slopeVariance, 0.0)) * 0.75,
            0.0,
            0.35
          );
          float fold = smoothstep(0.92, 0.24, jacobian);
          crest = clamp((1.0 - resolved.y) * (1.35 + 0.35 * phaseEnergy / max(totalAmplitude, 0.001)) + fold * 0.42, 0.0, 1.0);
          return resolved;
        }

        float decodeDepth(float raw) {
          if (raw >= 0.999999) return uCameraFar;
          // Three.js stores perspective depth in [0, 1]; the reconstructed
          // view-space Z is negative in front of the camera, so return its
          // positive distance for path-length/rejection tests.
          return -(uCameraNear * uCameraFar) / ((uCameraFar - uCameraNear) * raw - uCameraFar);
        }

        float sampleSunVisibility(vec2 uv) {
          return texture2D(tSunVisibility, clamp(uv, vec2(0.002), vec2(0.998))).r;
        }

        // Reconstruct the current-frame visibility mask at the same refracted
        // receiver pixel as scene color. The mask is produced after the
        // water-free capture, so this restores moving-caster shadows without
        // feeding water back through its own refraction buffer. Depth-aware
        // neighbours smooth only uncertain mask edges and cannot cross voxel
        // silhouettes or the shoreline depth discontinuity.
        float refractedSunVisibility(vec2 uv, float referenceDepth) {
          float center = sampleSunVisibility(uv);
          float uncertainty = smoothstep(0.02, 0.98, 4.0 * center * (1.0 - center));
          if (uHasSceneDepth == 0 || uncertainty <= 0.0) return center;

          vec2 texel = 1.0 / max(uResolution, vec2(1.0));
          float depthTolerance = max(0.025, referenceDepth * 0.015);
          float weightedVisibility = center;
          float totalWeight = 1.0;
          for (int sampleIndex = 0; sampleIndex < 4; sampleIndex++) {
            vec2 offset = sampleIndex == 0 ? vec2(texel.x, 0.0) :
              sampleIndex == 1 ? vec2(-texel.x, 0.0) :
              sampleIndex == 2 ? vec2(0.0, texel.y) : vec2(0.0, -texel.y);
            vec2 neighbourUv = clamp(uv + offset, vec2(0.002), vec2(0.998));
            float neighbourDepth = decodeDepth(texture2D(tSceneDepth, neighbourUv).r);
            float depthWeight = 1.0 - smoothstep(
              depthTolerance,
              depthTolerance * 4.0,
              abs(neighbourDepth - referenceDepth)
            );
            weightedVisibility += sampleSunVisibility(neighbourUv) * depthWeight;
            totalWeight += depthWeight;
          }
          float filtered = weightedVisibility / max(totalWeight, 0.0001);
          return mix(center, filtered, 0.55 * uncertainty);
        }

        vec3 reconstructWorldPosition(vec2 uv, float rawDepth) {
          vec4 clip = vec4(uv * 2.0 - 1.0, rawDepth * 2.0 - 1.0, 1.0);
          vec4 view = uProjectionMatrixInverse * clip;
          view /= view.w;
          return (uViewMatrixInverse * vec4(view.xyz, 1.0)).xyz;
        }

        vec2 projectWorldToUv(vec3 worldPosition, out float valid) {
          vec4 clip = uProjectionMatrix * viewMatrix * vec4(worldPosition, 1.0);
          valid = step(0.0001, clip.w);
          return clip.xy / max(clip.w, 0.0001) * 0.5 + 0.5;
        }

        float ggxDistribution(float noH, float alpha) {
          float alpha2 = alpha * alpha;
          float denominator = noH * noH * (alpha2 - 1.0) + 1.0;
          return alpha2 / max(3.14159265 * denominator * denominator, 0.0001);
        }

        float smithMasking(float noV, float noL, float alpha) {
          float k = alpha * alpha * 0.5;
          float gv = noV / max(noV * (1.0 - k) + k, 0.0001);
          float gl = noL / max(noL * (1.0 - k) + k, 0.0001);
          return gv * gl;
        }

        vec3 skyRadiance(vec3 direction) {
          vec3 d = normalize(direction);
          float up = clamp(d.y, -1.0, 1.0);
          vec3 gradient = mix(uSkyHorizon, uSkyTop, pow(max(up, 0.0), 0.48));
          vec3 lower = mix(uSkyAerosol, uSkyHorizon, 0.58);
          vec3 base = mix(lower, gradient, smoothstep(-0.38, 0.14, up));
          float aerosol = smoothstep(-0.18, 0.0, up) * (1.0 - smoothstep(0.0, 0.30, up)) * uSkyAerosolStrength;
          base = mix(base, uSkyAerosol, aerosol);
          float sun = max(dot(d, normalize(uSunDir)), 0.0);
          // The finite sun is integrated by the water BRDF below. Keep only
          // its atmospheric halo in reflected sky radiance; including a
          // second needle-like disc here created the unnaturally thin white
          // line visible through the middle of the glitter path.
          base += uSunColor * (pow(sun, 28.0) * 0.30 + pow(sun, 5.0) * 0.045);
          return max(base * uSkyRadianceScale, vec3(0.0));
        }

        // Exact unpolarized dielectric Fresnel plus a one-pixel filtered
        // critical-angle coverage term. The filter is applied only to the
        // binary Snell-window domain; the interface normal remains analytic.
        vec3 dielectricFresnel(float cosIncident, float etaIncident, float etaTransmitted, out float canTransmit, out float cosTransmitted) {
          float etaRatio = etaIncident / etaTransmitted;
          float sinTransmitted2 = etaRatio * etaRatio * (1.0 - cosIncident * cosIncident);
          float criticalWidth = clamp(fwidth(sinTransmitted2) * 1.5, 0.001, 0.05);
          canTransmit = 1.0 - smoothstep(1.0 - criticalWidth, 1.0 + criticalWidth, sinTransmitted2);
          cosTransmitted = sqrt(max(1.0 - sinTransmitted2, 0.0));
          float ci = max(cosIncident, 0.0001);
          float rs = (etaIncident * ci - etaTransmitted * cosTransmitted) /
            max(etaIncident * ci + etaTransmitted * cosTransmitted, 0.0001);
          float rp = (etaTransmitted * ci - etaIncident * cosTransmitted) /
            max(etaTransmitted * ci + etaIncident * cosTransmitted, 0.0001);
          float fresnel = 0.5 * (rs * rs + rp * rp);
          // Outside the physical domain the reflected energy is exactly one;
          // only the coverage mask is softened for raster stability.
          fresnel = mix(fresnel, 1.0, step(1.0, sinTransmitted2));
          return vec3(fresnel, canTransmit, cosTransmitted);
        }

        // GLSL refract() returns a zero vector outside the transmissive cone.
        // Evaluate the limiting critical-angle direction as well so the
        // Snell-window radiance remains numerically continuous while physical
        // windowCoverage and Fresnel reduce its energy to zero in TIR.
        vec3 criticalSafeRefract(
          vec3 incidentDirection,
          vec3 orientedNormal,
          float etaRatio
        ) {
          float incidentCos = clamp(
            -dot(orientedNormal, incidentDirection),
            0.0,
            1.0
          );
          vec3 incidentTangent = incidentDirection +
            orientedNormal * incidentCos;
          float incidentSin = length(incidentTangent);
          vec3 tangentDirection = incidentTangent /
            max(incidentSin, 0.0001);
          float transmittedSin = min(etaRatio * incidentSin, 0.9999);
          float safeTransmittedCos = sqrt(max(
            1.0 - transmittedSin * transmittedSin,
            0.0
          ));
          return normalize(
            tangentDirection * transmittedSin -
            orientedNormal * safeTransmittedCos
          );
        }

        void main() {
          float crest = 0.0;
          float jacobian = 1.0;
          float slopeVariance = 0.0;
          float normalVariation = 0.0;
          vec3 transportNormal = normalize(vNormalVary);
          float surfaceFootprint = oceanPixelFootprint(vBaseWorld);
          // Rebuild the displaced optical carrier from the continuous base
          // plane. Rasterized vWorld is still used for the visible geometry,
          // but BRDF/refraction inputs must not inherit the neighboring
          // triangles' interpolation across the inner/outer mesh join.
          vec3 opticalWorld = vWorld;
          if (uOceanMode) {
            opticalWorld = vBaseWorld + oceanWaveDisplacement(
              vBaseWorld,
              uTime,
              surfaceFootprint
            );
          }
          vec3 normal = uOceanMode
            ? waveNormal(
                vBaseWorld.xz,
                uTime,
                surfaceFootprint,
                crest,
                jacobian,
                slopeVariance,
                normalVariation,
                transportNormal
              )
            : normalize(vNormalVary);
          // The whole interface draw has one incident medium. A displaced
          // sheet can expose both raster face orientations near a crest or at
          // a waterline crossing, but that must never mix air->water and
          // water->air optics in one frame. The live displaced surface at the
          // camera owns this uniform state; critical-angle coverage below is
          // still resolved independently per pixel.
          bool underwaterView = uCameraUnderwater;
          if (underwaterView && normal.y > 0.0) normal = -normal;
          if (!underwaterView && normal.y < 0.0) normal = -normal;
          if (underwaterView && transportNormal.y > 0.0) transportNormal = -transportNormal;
          if (!underwaterView && transportNormal.y < 0.0) transportNormal = -transportNormal;
          vec3 viewDirection = normalize(cameraPosition - opticalWorld);
          float eta = underwaterView ? (1.0 / uEtaAirWater) : uEtaAirWater;
          float etaIncident = underwaterView ? (1.0 / uEtaAirWater) : 1.0;
          float etaTransmitted = underwaterView ? 1.0 : (1.0 / uEtaAirWater);
          float cosIncident = clamp(abs(dot(normal, viewDirection)), 0.0, 1.0);
          float windowCoverage = 0.0;
          float transmittedCos = 0.0;
          vec3 fresnelResult = dielectricFresnel(cosIncident, etaIncident, etaTransmitted, windowCoverage, transmittedCos);
          float fresnel = clamp(fresnelResult.x + uFresnelBias, 0.0, 1.0);
          // The resolved normal contains sub-pixel capillary detail. At a
          // geometric grazing view an individual tilted microfacet must not
          // open a bright transmission hole through an interface whose
          // filtered footprint is reflection dominated. Use the flat carrier
          // surface as a conservative Fresnel floor for above-water views.
          float geometricCosIncident = clamp(abs(viewDirection.y), 0.0, 1.0);
          float geometricCoverage = 0.0;
          float geometricTransmittedCos = 0.0;
          vec3 geometricFresnelResult = dielectricFresnel(
            geometricCosIncident,
            etaIncident,
            etaTransmitted,
            geometricCoverage,
            geometricTransmittedCos
          );
          if (!underwaterView) fresnel = max(fresnel, geometricFresnelResult.x);
          vec3 incident = -viewDirection;
          vec3 refractedDirection = criticalSafeRefract(
            incident,
            transportNormal,
            eta
          );

          vec3 deep = uColor;
          vec3 transmitted = deep;
          vec3 reflected = deep;
          float pathLength = uDepthApprox / max(abs(refractedDirection.y), 0.08);
          vec3 sceneRefraction = deep;
          float screenProjectionCoverage = 1.0;
          float sceneHitValidity = 0.0;

          if (!underwaterView) {
            reflected = skyRadiance(reflect(incident, normal));
            vec2 screenUv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
            if (uForwardProjection && uHasSceneColor == 1 && uHasSceneDepth == 1) {
              // The source geometry was already transported through Snell's
              // interface before rasterization. Color, depth, coverage, and
              // silhouette therefore occupy this exact water pixel together.
              vec4 apparentSample = texture2D(tSceneColor, screenUv);
              float apparentRawDepth = texture2D(tSceneDepth, screenUv).r;
              float depthCoverage = 1.0 - step(0.999999, apparentRawDepth);
              // Filtered alpha is the silhouette's coverage authority. Depth
              // is nearest-sampled and may select the clear neighbour at an
              // antialiased edge; it may refine path length but must never
              // erase that color/coverage sample.
              sceneHitValidity = clamp(apparentSample.a, 0.0, 1.0);
              screenProjectionCoverage = sceneHitValidity;
              sceneRefraction = apparentSample.rgb / max(apparentSample.a, 0.001);

              // Forward vertices preserve their real radial camera distance
              // in target depth. Intersect that sphere with the physically
              // refracted ray to recover the actual water-segment length.
              vec3 apparentWorld = reconstructWorldPosition(screenUv, apparentRawDepth);
              float sourceDistance = length(apparentWorld - cameraPosition);
              vec3 interfaceOffset = opticalWorld - cameraPosition;
              float rayProjection = dot(interfaceOffset, refractedDirection);
              float discriminant = rayProjection * rayProjection +
                sourceDistance * sourceDistance -
                dot(interfaceOffset, interfaceOffset);
              float physicalWaterPath = -rayProjection + sqrt(max(discriminant, 0.0));
              pathLength = mix(
                pathLength,
                max(physicalWaterPath, 0.0),
                sceneHitValidity * depthCoverage
              );
            } else {
              // Legacy block water is a bounded translucent sheet rather than
              // the global ocean interface. Keep its conventional lookup
              // isolated from the ocean's forward optical contract.
              float surfaceDepth = -(viewMatrix * vec4(opticalWorld, 1.0)).z;
              float baseRawDepth = uHasSceneDepth == 1
                ? texture2D(tSceneDepth, screenUv).r
                : 1.0;
              float baseBackgroundDepth = decodeDepth(baseRawDepth);
              vec3 opticalDirection = normalize(mix(
                incident,
                refractedDirection,
                clamp(uRefractAmount, 0.0, 1.0)
              ));
              vec3 opticalView = normalize(mat3(viewMatrix) * opticalDirection);
              float estimatedTravel = uDepthApprox / max(abs(refractedDirection.y), 0.08);
              if (uHasSceneDepth == 1 && baseRawDepth < 0.999999) {
                float axialGap = max(baseBackgroundDepth - surfaceDepth, 0.0);
                estimatedTravel = axialGap / max(-opticalView.z, 0.08);
              }
              float projectedValid = 0.0;
              vec2 projectedUv = projectWorldToUv(
                opticalWorld + opticalDirection * estimatedTravel,
                projectedValid
              );
              float insideUv = step(0.002, projectedUv.x) * step(0.002, projectedUv.y) *
                step(projectedUv.x, 0.998) * step(projectedUv.y, 0.998);
              screenProjectionCoverage = projectedValid * insideUv;
              vec2 resolvedUv = clamp(projectedUv, vec2(0.002), vec2(0.998));
              float resolvedRawDepth = uHasSceneDepth == 1
                ? texture2D(tSceneDepth, resolvedUv).r
                : 1.0;
              sceneHitValidity = screenProjectionCoverage;
              vec4 sceneSample = uHasSceneColor == 1
                ? texture2D(tSceneColor, resolvedUv)
                : vec4(deep, 0.0);
              if (uHasSunVisibility == 1) {
                float receiverDepth = decodeDepth(resolvedRawDepth);
                float sunVisibility = refractedSunVisibility(resolvedUv, receiverDepth);
                float directLightFraction = clamp(sceneSample.a, 0.0, 1.0);
                sceneSample.rgb *= mix(1.0, sunVisibility, directLightFraction);
              }
              sceneRefraction = sceneSample.rgb;
              pathLength = mix(pathLength, estimatedTravel, sceneHitValidity);
            }
            vec3 transmittance = exp(-uAbsorption * max(pathLength, 0.0));
            float forwardScatter = pow(max(dot(viewDirection, -normalize(uSunDir)), 0.0), 4.0);
            vec3 scatterColor = mix(deep * 0.72, uFogColor * 0.38, 0.55);
            scatterColor += uSunColor * uFogColor * forwardScatter * 0.08;
            vec3 receiverRadiance = sceneRefraction * transmittance +
              scatterColor * (1.0 - transmittance);
            vec3 openWaterRadiance = deep * transmittance +
              scatterColor * (1.0 - transmittance);
            transmitted = mix(openWaterRadiance, receiverRadiance, sceneHitValidity);
          } else {
            // Underwater Snell window: evaluate one continuous transmitted
            // sky body on every underside fragment. Fresnel and the filtered
            // critical-angle coverage below own the smooth transition to TIR;
            // there is no second boolean material mode.
            float viewUpness = smoothstep(-0.55, 0.72, viewDirection.y);
            vec3 ambientDown = vec3(0.012, 0.035, 0.055);
            vec3 ambientUp = vec3(0.035, 0.120, 0.160);
            vec3 mediumAmbient = mix(ambientDown, ambientUp, viewUpness);
            float upwellingSun = pow(max(dot(normalize(reflect(incident, normal)), normalize(uSunDir)), 0.0), 6.0) * 0.06;
            vec3 underwaterReflection = mediumAmbient *
              (0.66 + 0.18 * max(dot(normal, viewDirection), 0.0));
            underwaterReflection += uColor * 0.28 + uSunColor * upwellingSun;
            vec3 windowDirection = criticalSafeRefract(incident, normal, eta);
            vec3 window = skyRadiance(windowDirection);
            // Snell stretch broadens the transmitted sun lobe at grazing
            // incidence. Derivative filtering keeps the lobe stable while
            // preserving a sharp disc at normal incidence.
            float snellEta = etaIncident / max(etaTransmitted, 0.001);
            float snellStretch = max(snellEta * cosIncident / max(transmittedCos, 0.04), 1.0);
            float snellSpread = (snellStretch - 1.0) * normalVariation * 0.5;
            float lobeExponent = 1.0 / max(1.0 / 700.0 + snellSpread * snellSpread, 0.0001);
            float windowSun = max(dot(windowDirection, normalize(uSunDir)), 0.0);
            float transmittedSun = pow(windowSun, lobeExponent) * lobeExponent * (24.0 / 700.0);
            float transmittedHalo = pow(windowSun, 24.0) * 0.08;
            window += uSunColor * (transmittedSun + transmittedHalo);
            if (uForwardProjection && uHasSceneColor == 1) {
              vec2 screenUv = gl_FragCoord.xy / max(uResolution, vec2(1.0));
              vec4 apparentSample = texture2D(tSceneColor, screenUv);
              float apparentCoverage = clamp(apparentSample.a, 0.0, 1.0);
              vec3 apparentRadiance = apparentSample.rgb /
                max(apparentSample.a, 0.001);
              window = mix(window, apparentRadiance, apparentCoverage);
              sceneHitValidity = apparentCoverage;
              screenProjectionCoverage = apparentCoverage;
            }
            transmitted = window;
            reflected = underwaterReflection;
            pathLength = 0.0;
          }

          float bodyFog = 1.0 - exp(-max(pathLength, 0.0) / max(uWaterClarity, 1.0));
          if (underwaterView) transmitted = mix(transmitted, uFogColor, bodyFog * uUnderwaterFogStrength);
          // Only the legacy bounded block-water lookup needs a grazing
          // validity interval. The ocean's forward projection remains valid
          // across the frustum and is governed solely by exact Fresnel.
          float grazingWidth = clamp(fwidth(geometricCosIncident) * 2.0, 0.002, 0.025);
          float grazingTransmissionCoverage = uForwardProjection
            ? 1.0
            : smoothstep(
            0.035 - grazingWidth,
            0.140 + grazingWidth,
            geometricCosIncident
          );
          float interfaceTransmission = underwaterView
            ? windowCoverage * (1.0 - fresnel)
            : (1.0 - fresnel) * grazingTransmissionCoverage;
          float transmissionWeight = clamp(interfaceTransmission, 0.0, 1.0);
          float reflectionWeight = 1.0 - transmissionWeight;
          // Every transmitted source receives this one explicit
          // (1 - Fresnel)-derived interface weight.
          vec3 color = reflected * reflectionWeight + transmitted * transmissionWeight;

          float localRoughness = 0.0;
          float specular = 0.0;
          if (!underwaterView || uDebugMode == 8) {
            vec3 lightDirection = normalize(uSunDir);
            vec3 halfVector = normalize(viewDirection + lightDirection);
            float noV = max(dot(normal, viewDirection), 0.001);
            float noL = max(dot(normal, lightDirection), 0.0);
            float noH = max(dot(normal, halfVector), 0.0);
            float voH = max(dot(viewDirection, halfVector), 0.0);
            float dielectricF0Base = (1.0 - 1.333) / (1.0 + 1.333);
            float dielectricF0 = dielectricF0Base * dielectricF0Base;
            float sunFresnel = dielectricF0 + (1.0 - dielectricF0) * pow(1.0 - voH, 5.0);
            float roughnessControl = clamp(uRoughness, 0.0, 1.0);
            // Keep the lobe filter in the same analytic domain as displacement
            // and the fragment normal. A screen-space derivative here would
            // measure the inner/outer mesh tessellation and draw its boundary
            // through the reflected sun path.
            float normalVariance = normalVariation * normalVariation;
            float filteredRoughness = sqrt(roughnessControl * roughnessControl + normalVariance);
            // Unresolved slope energy comes from the same directional/noise
            // cascade as the normal. It widens the local facet distribution in
            // busy patches, breaking the sun path into irregular glints while
            // leaving quiet patches sharp. No independent color mask is used.
            float glintBreakup = smoothstep(0.0015, 0.028, slopeVariance);
            localRoughness = clamp(
              mix(roughnessControl, filteredRoughness, 0.55) + glintBreakup * 0.24,
              0.0,
              1.0
            );
            float normalFootprint = normalVariation;
            float solarVariance = 0.5 * 0.004675 * 0.004675;
            float coreAlpha = mix(0.055, 0.16, localRoughness * localRoughness);
            coreAlpha = sqrt(
              coreAlpha * coreAlpha +
              normalFootprint * normalFootprint * 0.20 +
              solarVariance
            );
            float skirtAlpha = min(0.38, coreAlpha * 2.25 + 0.015);
            float coreLobe = ggxDistribution(noH, coreAlpha) * smithMasking(noV, noL, coreAlpha);
            float skirtLobe = ggxDistribution(noH, skirtAlpha) * smithMasking(noV, noL, skirtAlpha);
            // A normalized core-and-skirt slope distribution approximates the
            // broad Cox-Munk glitter path of a calm, lightly wind-ruffled sea.
            // Mixing normalized lobes preserves energy while widening the path;
            // derivative variance softens its edge as facets become sub-pixel.
            float sunLobe = mix(coreLobe, skirtLobe, 0.42);
            specular = sunLobe * sunFresnel * noL /
              max(4.0 * noV * noL, 0.001);
          }
          if (!underwaterView) color += uSunColor * specular * uSpecular;

          float foamFold = uOceanMode ? smoothstep(0.92, 0.20, jacobian) : 0.0;
          float foamNoiseLarge = noise(opticalWorld.xz * 0.115 + uTime * vec2(uFoamDrift * 0.24, -uFoamDrift * 0.16));
          float foamNoiseFine = noise(opticalWorld.xz * 0.68 - uTime * vec2(uFoamDrift * 0.82, uFoamDrift * 0.54));
          float foamBreakup = mix(foamNoiseLarge, foamNoiseFine, 0.48);
          // Coastal foam is driven by the actual terrain/water column. This
          // avoids the old rectangular-boundary train, which could project
          // long white ribbons across open water. The height field follows
          // the same terrain generator as the playable island, so bays and
          // irregular shoreline pockets receive foam while deep offshore
          // water remains untouched.
          vec2 shoreXZ = vBaseWorld.xz;
          float terrainTop = sampleTerrainTop(shoreXZ);
          float waterColumn = uWaterLevel - terrainTop;
          float waterSide = smoothstep(-0.35, 0.16, waterColumn);
          float shallowBand = 1.0 - smoothstep(0.35, 5.5, waterColumn);
          float shorelineBand = waterSide * shallowBand;
          float shoreFoam = 0.0;
          if (shorelineBand != 0.0) {
            vec2 foamDomain = shoreXZ + oceanDetailWarp(shoreXZ, uTime) * 0.35;
            float patchLarge = noise(foamDomain * 0.12 + uTime * vec2(0.012, -0.009));
            float patchMedium = noise(foamDomain * 0.34 - uTime * vec2(0.033, 0.021));
            float patchFine = noise(foamDomain * 0.88 + uTime * vec2(-0.071, 0.048));
            float patchValue = patchLarge * 0.52 + patchMedium * 0.32 + patchFine * 0.16;
            float patchMask = smoothstep(0.47, 0.70, patchValue);
            // A noisy moving front makes each patch taper into the water. Foam
            // still requires a resolved wave arrival below; the shoreline mask
            // alone must never become a permanent contour around the water.
            float frontOffset = (patchMedium - 0.5) * 1.35 + (patchFine - 0.5) * 0.55;
            float foamFront = 1.0 - smoothstep(-0.28, 1.35, waterColumn + frontOffset);
            float wavePulse = smoothstep(0.08, 0.46, max(opticalWorld.y - uWaterLevel, 0.0) + crest * 0.26 + foamFold * 0.30);
            float swashArrival = smoothstep(
              0.10,
              0.62,
              wavePulse + foamFold * 0.28 + crest * 0.18
            );
            shoreFoam = shorelineBand * patchMask * swashArrival *
              (0.24 + 0.76 * max(foamFront, wavePulse));
            shoreFoam = clamp(shoreFoam, 0.0, 1.0);
          }
          float foamPotential = max(max(foamFold, crest * 0.72), shoreFoam);
          float foam = smoothstep(uFoamThreshold * 0.72, 0.92, foamPotential * mix(0.66, 1.38, foamBreakup * uFoamNoise));
          foam = max(foam, shoreFoam * 0.78);
          color = mix(color, vec3(0.92, 0.98, 1.0), foam * uFoamIntensity);
          color = mix(color, color * uNightTint, (1.0 - clamp(uAmbientIntensity, 0.0, 1.0)) * 0.45);
          color *= mix(0.20, 1.0, clamp(uAmbientIntensity, 0.0, 1.0));

          if (uDebugMode == 1) color = vec3(clamp(vHeight - uWaterLevel + 0.5, 0.0, 1.0));
          else if (uDebugMode == 2) color = normal * 0.5 + 0.5;
          else if (uDebugMode == 3) color = vec3(fresnel);
          else if (uDebugMode == 4) color = vec3(sceneHitValidity, 1.0 - windowCoverage, clamp(pathLength / 16.0, 0.0, 1.0));
          else if (uDebugMode == 5) color = exp(-uAbsorption * max(pathLength, 0.0));
          else if (uDebugMode == 6) color = vec3(foam, crest, 1.0 - normal.y);
          else if (uDebugMode == 7) color = vec3(
            screenProjectionCoverage,
            sceneHitValidity,
            underwaterView ? windowCoverage : 1.0 - fresnel
          );
          else if (uDebugMode == 8) color = vec3(
            clamp(slopeVariance * 28.0, 0.0, 1.0),
            clamp(localRoughness, 0.0, 1.0),
            clamp(specular * 18.0, 0.0, 1.0)
          );
          else if (uDebugMode == 9) color = vec3(
            clamp(surfaceFootprint / 12.0, 0.0, 1.0),
            oceanWaveLod(surfaceFootprint, 40.0),
            oceanWaveLod(surfaceFootprint, 8.0)
          );

          // The opaque ocean carries its exact visible fragment depth in a
          // reserved low-alpha range. Later medium and lens passes can then
          // use the displaced interface actually rasterized at this pixel,
          // even though their separate scene capture intentionally hides all
          // water. Opaque block materials start at alpha 1/255, so the ranges
          // cannot alias.
          float oceanSurfaceDepth = clamp(
            vViewDepth / max(uCameraFar, 0.001),
            0.0,
            1.0
          ) * ${ra.toFixed(6)};
          gl_FragColor = vec4(
            max(color, vec3(0.0)),
            uOceanMode ? oceanSurfaceDepth : clamp(uAlpha, 0.0, 1.0)
          );
        }
      `}),this.ocean=i}setTime(e){this.uniforms.uTime.value=e}setColor(e){this.uniforms.uColor.value.copy(e)}setMap(e){this.uniforms.uMap.value=e,this.uniforms.uUseMap.value=!1}setTileScale(e){this.uniforms.uTileScale.value=Math.max(.001,e)}setUseWorldUV(e){this.uniforms.uUseWorldUV.value=e}setBounds(e){this.uniforms.uInnerMinX.value=e.minX,this.uniforms.uInnerMaxX.value=e.maxX,this.uniforms.uInnerMinZ.value=e.minZ,this.uniforms.uInnerMaxZ.value=e.maxZ}setTerrainHeightMap(e,t=128){this.uniforms.uTerrainHeightMap.value=e??di,this.uniforms.uTerrainHeightMapEnabled.value=!!e,this.uniforms.uTerrainHeightScale.value=Math.max(1,t)}setEdge(e,t){}setAlpha(e){const t=k.clamp(e,0,1);this.uniforms.uAlpha.value=t,this.ocean||(this.depthWrite=t>=1)}setFresnelAlpha(e,t){}setRefraction(e,t=1/1.333,i=1,r=1,s=.02){this.uniforms.uRefractAmount.value=Math.max(0,e),this.uniforms.uEtaAirWater.value=Math.max(.001,t),this.uniforms.uWaveAmp.value=Math.max(0,i),this.uniforms.uWaveSpeed.value=Math.max(0,r),this.uniforms.uFresnelBias.value=Math.max(0,s)}setSun(e,t){this.uniforms.uSunDir.value.copy(e).normalize(),t&&this.uniforms.uSunColor.value.copy(t)}setAmbientLighting(e,t){this.uniforms.uAmbientIntensity.value=k.clamp(e,0,1),t&&this.uniforms.uNightTint.value.copy(t)}setSkyColors(e,t){this.uniforms.uSkyTop.value.copy(e),this.uniforms.uSkyHorizon.value.copy(t)}setSkyAtmosphere(e,t,i=1.25){this.uniforms.uSkyAerosol.value.copy(e),this.uniforms.uSkyAerosolStrength.value=k.clamp(t,0,1),this.uniforms.uSkyRadianceScale.value=Math.max(.1,i)}setWaterLevel(e){this.uniforms.uWaterLevel.value=e}setCamera(e){e.updateMatrixWorld(),this.uniforms.uProjectionMatrix.value.copy(e.projectionMatrix),this.uniforms.uProjectionMatrixInverse.value.copy(e.projectionMatrixInverse),this.uniforms.uViewMatrixInverse.value.copy(e.matrixWorld),this.uniforms.uCameraNear.value=e.near,this.uniforms.uCameraFar.value=e.far}setCameraUnderwater(e){this.uniforms.uCameraUnderwater.value=e}setSceneInputs(e,t,i,r,s){this.uniforms.tSceneColor.value=e,this.uniforms.tSceneDepth.value=t,this.uniforms.uHasSceneColor.value=e?1:0,this.uniforms.uHasSceneDepth.value=t?1:0,this.uniforms.uResolution.value.set(Math.max(1,Math.floor(i.x)),Math.max(1,Math.floor(i.y))),this.uniforms.uCameraNear.value=r,this.uniforms.uCameraFar.value=s}setForwardRefractionInputs(e,t,i,r,s){this.setSceneInputs(e,t,i,r,s),this.uniforms.uForwardProjection.value=!!e&&!!t}setSunVisibility(e){this.uniforms.tSunVisibility.value=e,this.uniforms.uHasSunVisibility.value=e?1:0}setScreenRefraction(e,t){this.uniforms.tSceneColor.value=e,this.uniforms.uHasSceneColor.value=e?1:0,t&&this.uniforms.uResolution.value.set(Math.max(1,t.x),Math.max(1,t.y))}setWaves(e){e.amp!==void 0&&(this.uniforms.uWaveAmp.value=Math.max(0,e.amp)),e.chop!==void 0&&(this.uniforms.uWaveChop.value=Math.max(0,e.chop)),e.speed!==void 0&&(this.uniforms.uWaveSpeed.value=Math.max(0,e.speed))}setDebugMode(e){this.uniforms.uDebugMode.value=Math.max(0,Math.floor(e))}}class Vn{renderer;target;scene=new qt;camera=new Ki(-1,1,1,-1,0,1);geometry;material;resolution;extent;patchExtent;sourceHalfPeriods;sourcePeriods;segmentsPerPeriod;sourceSegments;referenceDepth;stageProfiler;origin=new q;neutralClearColor=new V(1/_e,1/_e,1/_e);disposed=!1;warned=!1;constructor(e,t={}){this.renderer=e,this.stageProfiler=t.stageProfiler,this.resolution=Math.max(128,Math.min(512,Math.floor(t.resolution??256))),this.extent=Math.max(8,t.extent??Ht);const i=Math.max(this.extent*1.5,t.patchExtent??this.extent*1.5);this.sourceHalfPeriods=Math.max(3,Math.ceil(i/this.extent*2)),this.sourcePeriods=this.sourceHalfPeriods*.5,this.patchExtent=this.extent*this.sourcePeriods;const r=Math.min(...xa.map(m=>m.wavelength))*this.extent/Ht,s=Math.ceil(this.resolution/1.35),a=Math.ceil(this.extent/r*6),o=Math.max(s,a),l=Math.max(4,Math.floor(512/this.sourcePeriods/4)*4);this.segmentsPerPeriod=Math.min(l,Math.ceil(o/4)*4),this.sourceSegments=this.segmentsPerPeriod*this.sourceHalfPeriods/2,this.referenceDepth=Math.max(2,t.projectDepth??we);const c=e.capabilities.isWebGL2&&e.extensions.has("EXT_color_buffer_float"),h=`${ks()}
${As()}`;this.target=new We(this.resolution,this.resolution,{format:re,type:c?rt:Pe,minFilter:us,magFilter:pe,depthBuffer:!1,stencilBuffer:!1}),this.target.texture.wrapS=li,this.target.texture.wrapT=li,this.target.texture.generateMipmaps=!0,this.target.texture.anisotropy=Math.min(4,e.capabilities.getMaxAnisotropy?.()??1),this.target.texture.colorSpace=fe;const d=Array.from({length:xa.length},(m,p)=>({prefix:"CAUSTIC_WAVE",index:p})).map(({prefix:m,index:p})=>`
      {
        float wavelength = ${m}_LENGTH_${p}
          * uExtent / ${Ht.toFixed(1)};
        float k = 6.28318530718 / wavelength;
        float omega = oceanOmega(k, ${m}_SPEED_${p}) * uWaveSpeed;
        float phase = k * dot(${m}_DIRECTION_${p}, xz) - omega * time + ${m}_PHASE_${p};
        float amplitude = ${m}_AMPLITUDE_${p};
        float q = ${m}_STEEPNESS_${p};
        float s = sin(phase);
        float c = cos(phase);
        float dx = ${m}_DIRECTION_${p}.x;
        float dz = ${m}_DIRECTION_${p}.y;
        float phaseDx = k * dx;
        float phaseDz = k * dz;
        displaced.xz += ${m}_DIRECTION_${p} * q * amplitude * uWaveChop * c;
        displaced.y += amplitude * s;
        tangentX += vec3(-q * amplitude * dx * phaseDx * s, amplitude * phaseDx * c, -q * amplitude * dz * phaseDx * s);
        tangentZ += vec3(-q * amplitude * dx * phaseDz * s, amplitude * phaseDz * c, -q * amplitude * dz * phaseDz * s);
      }
    `).join(`
`);this.geometry=new gi(2,2,this.sourceSegments,this.sourceSegments),this.material=new He({name:"MyCraftWaterCaustics",uniforms:{uOrigin:{value:this.origin},uExtent:{value:this.extent},uPatchExtent:{value:this.patchExtent},uTime:{value:0},uProjectDepth:{value:this.referenceDepth},uEta:{value:1/Se},uFieldScale:{value:_e},uWaveChop:{value:1},uWaveSpeed:{value:1},uSunDirection:{value:new A(.35,.9,.2).normalize()}},vertexShader:`
        precision highp float;
        uniform vec2 uOrigin;
        uniform float uExtent;
        uniform float uPatchExtent;
        uniform float uTime;
        uniform float uProjectDepth;
        uniform float uEta;
        uniform float uWaveChop;
        uniform float uWaveSpeed;
        uniform vec3 uSunDirection;
        ${h}

        varying vec2 vOldPosition;
        varying vec2 vNewPosition;

        float oceanTanh(float x) {
          float e = exp(min(2.0 * x, 20.0));
          return (e - 1.0) / (e + 1.0);
        }

        float oceanOmega(float k, float speed) {
          float depthTerm = oceanTanh(min(k * OCEAN_WATER_DEPTH, 20.0));
          float gravityTerm = 9.81 * k * depthTerm;
          float capillaryTerm = OCEAN_SURFACE_TENSION_OVER_DENSITY * k * k * k;
          return sqrt(max(gravityTerm + capillaryTerm, 0.0)) * speed;
        }

        void oceanDisplacementAndTangents(
          vec2 xz,
          float time,
          out vec3 displaced,
          out vec3 tangentX,
          out vec3 tangentZ
        ) {
          displaced = vec3(0.0);
          tangentX = vec3(1.0, 0.0, 0.0);
          tangentZ = vec3(0.0, 0.0, 1.0);
          ${d}
          displaced.y = clamp(displaced.y, -OCEAN_WAVE_HALF_RANGE, OCEAN_WAVE_HALF_RANGE);
        }

        void main() {
          vec3 sun = normalize(uSunDirection);
          vec3 flatRefract = refract(-sun, vec3(0.0, 1.0, 0.0), uEta);
          float flatTravel = uProjectDepth / max(abs(flatRefract.y), 0.12);
          vec2 flatOffset = flatRefract.xz * flatTravel;
          // Center the source patch so its flat Snell projection is centered
          // on the same world tile as the receiver. This is the inverse of
          // the depth-correct receiver projection used by terrain and the
          // underwater volume.
          vec2 surfaceXZ = uOrigin - flatOffset + (uv - 0.5) * uPatchExtent;

          vec3 displacement;
          vec3 surfaceTangentX;
          vec3 surfaceTangentZ;
          oceanDisplacementAndTangents(
            surfaceXZ,
            uTime,
            displacement,
            surfaceTangentX,
            surfaceTangentZ
          );
          vec3 surfaceNormal = normalize(cross(surfaceTangentZ, surfaceTangentX));
          vec3 waveRefract = refract(-sun, surfaceNormal, uEta);
          float waveTravel = (uProjectDepth + displacement.y) / max(abs(waveRefract.y), 0.12);

          // The old projection is the undeformed optical map.  The new map
          // carries horizontal Gerstner displacement and bent Snell rays.
          vOldPosition = surfaceXZ + flatOffset;
          vNewPosition = surfaceXZ + displacement.xz + waveRefract.xz * waveTravel;
          vec2 ndc = (vNewPosition - uOrigin) / max(uExtent, 1.0) * 2.0;
          gl_Position = vec4(ndc, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        uniform float uFieldScale;
        varying vec2 vOldPosition;
        varying vec2 vNewPosition;

        void main() {
          vec2 oldDx = dFdx(vOldPosition);
          vec2 oldDy = dFdy(vOldPosition);
          vec2 newDx = dFdx(vNewPosition);
          vec2 newDy = dFdy(vNewPosition);
          float oldArea = abs(oldDx.x * oldDy.y - oldDx.y * oldDy.x);
          float newArea = max(abs(newDx.x * newDy.y - newDx.y * newDy.x), 1e-5);
          // The ratio is the irradiance concentration for a regular bundle
          // of rays. No independent line pattern is added: every filament is
          // produced by the live wave slope and Snell projection above.
          float concentration = clamp(oldArea / newArea, 0.0, 8.0);
          float encodedField = clamp(concentration / max(uFieldScale, 1.0), 0.0, 1.0);
          gl_FragColor = vec4(vec3(encodedField), 1.0);
        }
      `,depthTest:!1,depthWrite:!1,side:jt,toneMapped:!1});const f=new ie(this.geometry,this.material);f.name="WaterCausticProjection",f.frustumCulled=!1,this.scene.add(f)}setSun(e){this.material.uniforms.uSunDirection.value.copy(e).normalize()}update(e,t,i){if(this.disposed)return;this.material.uniforms.uTime.value=e,this.origin.set(0,0);const r=this.renderer.getRenderTarget(),s=new ht,a=new ht;this.renderer.getViewport(s),this.renderer.getScissor(a);const o=this.renderer.getScissorTest(),l=this.renderer.autoClear,c=new V;this.renderer.getClearColor(c);const h=this.renderer.getClearAlpha();try{const u=()=>{this.renderer.setRenderTarget(this.target),this.renderer.setViewport(0,0,this.resolution,this.resolution),this.renderer.setScissor(0,0,this.resolution,this.resolution),this.renderer.setScissorTest(!1),this.renderer.autoClear=!1,this.renderer.setClearColor(this.neutralClearColor,1),this.renderer.clear(!0,!1,!1),this.renderer.render(this.scene,this.camera)};this.stageProfiler?this.stageProfiler.measure("caustic-field-update",u):u()}catch(u){this.warned||(this.warned=!0,console.warn("[WaterCaustics] Disabled after render failure:",u))}finally{this.renderer.setRenderTarget(r),this.renderer.setViewport(s),this.renderer.setScissor(a),this.renderer.setScissorTest(o),this.renderer.autoClear=l,this.renderer.setClearColor(c,h)}}getTexture(){return this.target.texture}getOrigin(){return{x:this.origin.x,y:this.origin.y}}getExtent(){return this.extent}getReferenceDepth(){return this.referenceDepth}getResolution(){return{x:this.resolution,y:this.resolution}}getDiagnostics(){return{resolution:this.resolution,extent:this.extent,patchExtent:this.patchExtent,sourceHalfPeriods:this.sourceHalfPeriods,sourcePeriods:this.sourcePeriods,segmentsPerPeriod:this.segmentsPerPeriod,sourceSegments:this.sourceSegments,referenceDepth:this.referenceDepth,fieldScale:_e,origin:this.origin.toArray(),disposed:this.disposed}}dispose(){this.disposed||(this.disposed=!0,this.geometry.dispose(),this.material.dispose(),this.target.dispose())}}const ii=128,it=0,_n=16,Un=2.1,Hn=16,On=2;function Nn(n,e){const t=Math.max(1,n.maxX-n.minX),i=Math.max(1,n.maxZ-n.minZ),r=Math.ceil(Math.max(t,i)/1.5);let s=64;for(;s<r&&s<256;)s*=2;const a=new Uint8Array(s*s*4);for(let l=0;l<s;l+=1){const c=n.minZ+(l+.5)/s*i;for(let h=0;h<s;h+=1){const u=n.minX+(h+.5)/s*t,d=e(u,c).height,f=Math.round(k.clamp(d/ii,0,1)*255),m=(l*s+h)*4;a[m]=f,a[m+1]=f,a[m+2]=f,a[m+3]=255}}const o=new Ve(a,s,s,re,Pe);return o.colorSpace=fe,o.wrapS=Ce,o.wrapT=Ce,o.magFilter=pe,o.minFilter=pe,o.generateMipmaps=!1,o.needsUpdate=!0,o}class Gn{scene;options;group;oceanGroup;material;terrainHeightTexture;terrainSampler;caustics;blockWaterMaterial;forwardRefractionParticipants;seabedMaterial=null;seabedTexture=null;seabedGroup=null;solidTerrainMeshes=new Set;nearSeabedTileCount=0;time=0;disposed=!1;seabedBuildToken=0;cameraUnderwater=!1;cameraSurfaceY=0;sceneColor=null;sceneDepth=null;forwardRefractionColor=null;forwardRefractionDepth=null;forwardRefractionResolution=new q(1,1);sunVisibility=null;resolution=new q(1,1);cameraNear=.1;cameraFar=1024;opaqueCaptureActive=!1;oceanWasVisible=!0;blockWaterWasVisible=!0;interfaceEnvelopeVisible=!0;sunIntensity=1.35;constructor(e,t){this.scene=e,this.options=t,this.blockWaterMaterial=t.blockWaterMaterial??null,this.forwardRefractionParticipants=t.forwardRefractionParticipants,this.group=new Q,this.group.name="WaterSystem",this.oceanGroup=new Q,this.oceanGroup.name="OceanSurface",this.group.add(this.oceanGroup),this.terrainSampler=Hi(t.seed,t.worldRadius),this.terrainHeightTexture=Nn(t.bounds,this.terrainSampler);const i=t.waterLevel+Xe;this.cameraSurfaceY=i,this.material=new Lr({map:null,color:t.color??1732494,tileScale:1,useWorldUV:!0,bounds:t.bounds,ocean:!0,terrainHeightMap:this.terrainHeightTexture,terrainHeightScale:ii}),this.material.setWaterLevel(i),this.material.setRefraction(1,1/1.333,1,1,0),this.material.setAlpha(1);let r=null;if(t.renderer)try{r=new Vn(t.renderer,{resolution:256,extent:Ht,patchExtent:Ht*1.5,projectDepth:24,stageProfiler:t.stageProfiler})}catch(S){console.warn("[WaterSystem] Differential-area caustics unavailable:",S)}this.caustics=r;const s=Math.max(128,t.farDistance),a=Math.min(512,Math.max(256,s*.42)),o=a<=320?128:160,l=a*.5,c=s*Un,h=a/o,u=Math.max(2,Math.ceil((c-l)/Hn)),d=new ie(this.createGridGeometry(a,o),this.material);d.name="OceanSurfaceInner",d.renderOrder=2,d.frustumCulled=!1,this.oceanGroup.add(d);const f=this.createUniformCoordinates(-l,l,o),m=this.createTransitionCoordinates(-l,-c,u,h).reverse(),p=this.createTransitionCoordinates(l,c,u,h),v=[...m.slice(0,-1),...f,...p.slice(1)],x=p,y=m,g=[{x:v,z:x,name:"OceanSurfaceNorth"},{x:v,z:y,name:"OceanSurfaceSouth"},{x:y,z:f,name:"OceanSurfaceWest"},{x,z:f,name:"OceanSurfaceEast"}];for(const S of g){const w=new ie(this.createCoordinateGeometry(S.x,S.z),this.material);w.name=S.name,w.renderOrder=2,w.frustumCulled=!1,this.oceanGroup.add(w)}this.oceanGroup.position.y=i,this.group.position.y=0,e.add(this.group),this.buildSeabed(++this.seabedBuildToken)}get surfaceY(){return this.options.waterLevel+Xe}getTime(){return this.time}isCameraUnderwater(){return this.cameraUnderwater}getCameraSurfaceY(){return this.cameraSurfaceY}getCausticTexture(){return this.caustics?.getTexture()??null}getCausticOrigin(){return this.caustics?.getOrigin()??{x:0,y:0}}getCausticExtent(){return this.caustics?.getExtent()??256}getCausticResolution(){return this.caustics?.getResolution()??{x:1,y:1}}getCausticReferenceDepth(){return this.caustics?.getReferenceDepth()??we}setSeed(e){this.options.seed===e||this.disposed||(this.options.seed=e,this.terrainSampler=Hi(e,this.options.worldRadius),this.updateTerrainHeightTexture(),this.seabedBuildToken+=1,this.seabedGroup&&(this.scene.remove(this.seabedGroup),this.disposeGroup(this.seabedGroup),this.seabedGroup=null),this.nearSeabedTileCount=0,this.disposeSeabedMaterial(),this.seabedMaterial=null,this.seabedTexture?.dispose(),this.seabedTexture=null,this.buildSeabed(this.seabedBuildToken))}setOpaqueCaptureMode(e){if(e!==this.opaqueCaptureActive){if(this.opaqueCaptureActive=e,e){this.oceanWasVisible=this.oceanGroup.visible,this.blockWaterWasVisible=this.blockWaterMaterial?.visible??!0,this.oceanGroup.visible=!1,this.blockWaterMaterial&&(this.blockWaterMaterial.visible=!1);return}this.oceanGroup.visible=this.oceanWasVisible,this.blockWaterMaterial&&(this.blockWaterMaterial.visible=this.blockWaterWasVisible)}}setSceneInputs(e,t,i,r,s){this.sceneColor=e,this.sceneDepth=t,this.resolution.set(Math.max(1,Math.floor(i.x)),Math.max(1,Math.floor(i.y))),this.cameraNear=r,this.cameraFar=s,this.material.setSceneInputs(e,t,this.resolution,r,s),this.blockWaterMaterial?.setSceneInputs(e,t,this.resolution,r,s)}setForwardRefractionInputs(e,t,i,r,s){this.forwardRefractionColor=e,this.forwardRefractionDepth=t,this.forwardRefractionResolution.set(Math.max(1,Math.floor(i.x)),Math.max(1,Math.floor(i.y))),this.material.setForwardRefractionInputs(e,t,i,r,s)}setSunVisibility(e){this.sunVisibility=e,this.material.setSunVisibility(e),this.blockWaterMaterial?.setSunVisibility(e)}setSun(e,t,i=1.35){this.sunIntensity=Math.max(0,i),this.material.setSun(e,t),this.caustics?.setSun(e),this.seabedMaterial&&this.seabedMaterial.setSunUniforms(e,t??new V(1,1,1))}setAmbientLighting(e,t){this.material.setAmbientLighting(e,t),this.seabedMaterial&&this.seabedMaterial.setDayLight(e)}setSkyColors(e,t){this.material.setSkyColors(e,t)}setSkyAtmosphere(e,t,i=1.25){this.material.setSkyAtmosphere(e,t,i)}setDebugMode(e){this.material.setDebugMode(e)}update(e,t){if(this.disposed)return;this.time+=Math.min(.1,Math.max(0,e)),this.material.setTime(this.time),this.material.setWaterLevel(this.surfaceY),this.material.setCamera(t),this.blockWaterMaterial?.setCamera(t);const i=16;this.oceanGroup.position.x=Math.floor(t.position.x/i)*i,this.oceanGroup.position.z=Math.floor(t.position.z/i)*i,this.cameraSurfaceY=this.surfaceY+Es(t.position.x,t.position.z,this.time),this.cameraUnderwater=t.position.y<this.cameraSurfaceY,this.interfaceEnvelopeVisible=Ir(t,this.surfaceY),this.opaqueCaptureActive||(this.oceanGroup.visible=this.interfaceEnvelopeVisible),this.material.setCameraUnderwater(this.cameraUnderwater),Ps({waterLevel:this.surfaceY,time:this.time,waveAmp:Number(this.material.uniforms.uWaveAmp.value),waveChop:Number(this.material.uniforms.uWaveChop.value),waveSpeed:Number(this.material.uniforms.uWaveSpeed.value),cameraUnderwater:this.cameraUnderwater}),this.syncSeabedMaterial(),this.caustics&&(this.caustics.update(this.time,t.position.x,t.position.z),this.applyCaustics())}getDiagnostics(){let e=0;return this.seabedGroup?.traverse(t=>{t instanceof ie&&(e+=1)}),{time:this.time,cameraUnderwater:this.cameraUnderwater,cameraSurfaceY:this.cameraSurfaceY,surfaceY:this.surfaceY,interfaceEnvelopeVisible:this.interfaceEnvelopeVisible,maxWaveAmplitude:br(),waveField:{representation:"deterministic-discrete-directional-spectrum",components:Sr.length,lod:"undeformed-base-plane-pixel-footprint",sharedSlopeResponse:!0},oceanMeshes:this.oceanGroup.children.length,seabedReady:!!this.seabedGroup,seabedMeshes:e,nearSeabedTileCount:this.nearSeabedTileCount,caustics:this.caustics?.getDiagnostics()??null,sceneInputs:{color:!!this.sceneColor,depth:!!this.sceneDepth,resolution:this.resolution.toArray(),near:this.cameraNear,far:this.cameraFar},forwardRefraction:{color:!!this.forwardRefractionColor,depth:!!this.forwardRefractionDepth,resolution:this.forwardRefractionResolution.toArray(),projection:"forward-fermat-snell"},sunVisibility:!!this.sunVisibility,waterExcludedFromCapture:this.opaqueCaptureActive}}dispose(){this.disposed=!0,this.seabedBuildToken+=1,this.scene.remove(this.group),this.disposeGroup(this.group),this.seabedGroup&&(this.scene.remove(this.seabedGroup),this.disposeGroup(this.seabedGroup),this.seabedGroup=null),this.nearSeabedTileCount=0,this.material.dispose(),this.terrainHeightTexture.dispose(),this.disposeSeabedMaterial(),this.seabedTexture?.dispose(),this.caustics?.dispose()}disposeGroup(e){this.forwardRefractionParticipants?.unregisterTree(e),e.traverse(t=>{t instanceof ie&&(this.solidTerrainMeshes.delete(t)&&this.options.unregisterSolidTerrainMesh?.(t),t.geometry.dispose())})}createGridGeometry(e,t){return this.createRectGeometry(-e*.5,-e*.5,e*.5,e*.5,t,t)}createRectGeometry(e,t,i,r,s,a){return this.createCoordinateGeometry(this.createUniformCoordinates(e,i,s),this.createUniformCoordinates(t,r,a))}createUniformCoordinates(e,t,i){const r=Math.max(1,Math.floor(i));return Array.from({length:r+1},(s,a)=>k.lerp(e,t,a/r))}createTransitionCoordinates(e,t,i,r){const s=Math.max(1,Math.floor(i)),a=Math.abs(t-e);if(a<=1e-6||s===1)return[e,t];const o=Math.sign(t-e),l=Math.min(Math.abs(r),a),c=2*a/s-l;if(c<=0)return this.createUniformCoordinates(e,t,s);const h=[e];let u=0;for(let d=0;d<s;d+=1){const f=s===1?0:d/(s-1),m=l+(c-l)*f;u+=m,h.push(d===s-1?t:e+o*u)}return h}createCoordinateGeometry(e,t){const i=Math.max(1,e.length-1),r=Math.max(1,t.length-1),s=new Float32Array(e.length*t.length*3),a=new Float32Array(e.length*t.length*3),o=new Float32Array(e.length*t.length*2);let l=0,c=0,h=0;for(const m of t)for(const p of e)s[l++]=p,s[l++]=0,s[l++]=m,a[c++]=0,a[c++]=1,a[c++]=0,o[h++]=p,o[h++]=m;const u=new Uint32Array(i*r*6);let d=0;for(let m=0;m<r;m+=1)for(let p=0;p<i;p+=1){const v=m*(i+1)+p,x=v+1,y=v+i+1,g=y+1;u[d++]=v,u[d++]=y,u[d++]=x,u[d++]=x,u[d++]=y,u[d++]=g}const f=new Tt;return f.setAttribute("position",new Ie(s,3)),f.setAttribute("normal",new Ie(a,3)),f.setAttribute("uv",new Ie(o,2)),f.setIndex(new Ie(u,1)),f.computeBoundingSphere(),f}async buildSeabed(e){try{const t=this.createAtlasSandTexture()??Uo("sand",{tileSize:this.options.seabedAtlas?.tileSize??16});if(this.disposed||e!==this.seabedBuildToken){t.dispose();return}if(t.flipY=!0,t.colorSpace=et,t.wrapS=li,t.wrapT=li,t.magFilter=N,t.minFilter=N,t.generateMipmaps=!1,t.anisotropy=1,t.needsUpdate=!0,this.seabedTexture=t,this.disposed||e!==this.seabedBuildToken){t.dispose();return}if(this.seabedMaterial=new Zi(t,null),this.seabedMaterial.setAntialiasing(!1),this.seabedMaterial.setAALodBias(!1),this.seabedMaterial.setMaterialProperties(.8,0,.3),this.seabedMaterial.setWaterCaustics(!0,this.surfaceY,.8,0,this.getCausticReferenceDepth(),this.sunIntensity),this.syncSeabedMaterial(),this.disposed||e!==this.seabedBuildToken){this.seabedMaterial.dispose(),this.seabedMaterial=null,t.dispose();return}this.seabedGroup=new Q,this.seabedGroup.name="SeabedVisualExtension";const i=Math.max(R.x,R.z),r=new Q;r.name="SeabedVoxelRing";const s=this.createVoxelRingTileGeometries(i).map(({tileX:c,tileZ:h,geometry:u})=>{const d=new ie(u,this.seabedMaterial);return d.name=`SeabedVoxelRingTile:${c},${h}`,d.renderOrder=0,d.frustumCulled=!0,r.add(d),d});this.nearSeabedTileCount=s.length,this.seabedGroup.add(r);const a=this.createFarSeabedGeometry(i,_n),o=new ie(a.surface,this.seabedMaterial);o.name="SeabedFarLOD",o.renderOrder=0,o.frustumCulled=!0,this.seabedGroup.add(o);const l=new ie(a.closure,this.seabedMaterial);l.name="SeabedFarClosure",l.renderOrder=0,l.frustumCulled=!0,this.seabedGroup.add(l),this.scene.add(this.seabedGroup);for(const c of[...s,o,l])this.forwardRefractionParticipants?.register(c,{medium:oa(c,this.surfaceY)}),this.solidTerrainMeshes.add(c),this.options.registerSolidTerrainMesh?.(c);this.options.registerShadowSamplingMaterial?.(this.seabedMaterial)}catch(t){console.warn("[WaterSystem] Failed to build visual seabed extension:",t)}}createAtlasSandTexture(){const e=this.options.seabedAtlas,t=this.options.blockMaterialSource?.uniforms.map?.value,i=e?.tiles.sand;if(!e||!i||!t)return null;const r=Math.max(1,Math.floor(e.tileSize)),s=Oo(t,i,r);if(s)return s;const a=t.image;if(!a||typeof document>"u")return null;const o=Number(a.width??0),l=Number(a.height??0);if(o<(i[0]+1)*r||l<(i[1]+1)*r)return null;const c=document.createElement("canvas");c.width=r,c.height=r;const h=c.getContext("2d");return h?(h.imageSmoothingEnabled=!1,h.drawImage(a,i[0]*r,i[1]*r,r,r,0,0,r,r),new Ji(c)):null}sampleTerrainHeight(e,t){return this.terrainSampler(e,t).height}sampleSeabedHeight(e,t){return Math.min(this.sampleTerrainHeight(e,t),this.options.waterLevel-On)}updateTerrainHeightTexture(){const e=this.terrainHeightTexture.image,t=Math.max(1,this.options.bounds.maxX-this.options.bounds.minX),i=Math.max(1,this.options.bounds.maxZ-this.options.bounds.minZ);for(let r=0;r<e.height;r+=1){const s=this.options.bounds.minZ+(r+.5)/e.height*i;for(let a=0;a<e.width;a+=1){const o=this.options.bounds.minX+(a+.5)/e.width*t,l=this.sampleTerrainHeight(o,s),c=Math.round(k.clamp(l/ii,0,1)*255),h=(r*e.width+a)*4;e.data[h]=c,e.data[h+1]=c,e.data[h+2]=c,e.data[h+3]=255}}this.terrainHeightTexture.needsUpdate=!0,this.material.setTerrainHeightMap(this.terrainHeightTexture,ii)}insideBounds(e,t){return e>=this.options.bounds.minX&&e<this.options.bounds.maxX&&t>=this.options.bounds.minZ&&t<this.options.bounds.maxZ}createVoxelRingGeometry(e){const t=this.buildVoxelRingBuffers(e,()=>"all").get("all");return t?this.makeGeometry(t.positions,t.normals,t.uvs,t.ao,t.colors,t.indices):this.makeGeometry([],[],[],[],[],[])}createVoxelRingTileGeometries(e){const t=this.buildVoxelRingBuffers(e,(i,r)=>`${Math.floor(i/R.x)},${Math.floor(r/R.z)}`);return Array.from(t.entries()).sort(([i],[r])=>{const[s,a]=i.split(",").map(Number),[o,l]=r.split(",").map(Number);return s-o||a-l}).map(([i,r])=>{const[s,a]=i.split(",").map(Number);return{tileX:s,tileZ:a,geometry:this.makeGeometry(r.positions,r.normals,r.uvs,r.ao,r.colors,r.indices)}})}buildVoxelRingBuffers(e,t){const{minX:i,maxX:r,minZ:s,maxZ:a}=this.options.bounds,o=Math.floor(i-e),l=Math.ceil(r+e),c=Math.floor(s-e),h=Math.ceil(a+e),u=new Map,d=(T,M)=>{const I=t(T,M),W=u.get(I);if(W)return W;const C={positions:[],normals:[],uvs:[],ao:[],colors:[],indices:[]};return u.set(I,C),C},f=o-1,m=c-1,p=l-o+2,v=h-c+2,x=new Float32Array(p*v);x.fill(Number.NaN);const y=(T,M)=>{const I=T-f,W=M-m;if(I<0||I>=p||W<0||W>=v)throw new RangeError(`[WaterSystem] Voxel ring neighbour outside cache: (${T}, ${M})`);const C=W*p+I,P=x[C];if(!Number.isNaN(P))return P;const z=this.insideBounds(T,M)?this.sampleTerrainHeight(T,M):this.sampleSeabedHeight(T,M);return x[C]=z,z},g=[{dx:1,dz:0,normal:[1,0,0]},{dx:-1,dz:0,normal:[-1,0,0]},{dx:0,dz:1,normal:[0,0,1]},{dx:0,dz:-1,normal:[0,0,-1]}],S=(T,M)=>{const I=y(T,M),W=d(T,M);this.appendQuad(W.positions,W.normals,W.uvs,W.ao,W.colors,W.indices,[[T,I+1,M],[T+1,I+1,M],[T+1,I+1,M+1],[T,I+1,M+1]],[0,1,0],[[T,M],[T+1,M],[T+1,M+1],[T,M+1]]);for(const C of g){const P=y(T+C.dx,M+C.dz);if(!(P>=I))for(let z=P+1;z<=I;z+=1){let $,G;C.dx===1?($=[[T+1,z,M+1],[T+1,z,M],[T+1,z+1,M],[T+1,z+1,M+1]],G=[[M+1,z],[M,z],[M,z+1],[M+1,z+1]]):C.dx===-1?($=[[T,z,M],[T,z,M+1],[T,z+1,M+1],[T,z+1,M]],G=[[M,z],[M+1,z],[M+1,z+1],[M,z+1]]):C.dz===1?($=[[T,z,M+1],[T+1,z,M+1],[T+1,z+1,M+1],[T,z+1,M+1]],G=[[T,z],[T+1,z],[T+1,z+1],[T,z+1]]):($=[[T+1,z,M],[T,z,M],[T,z+1,M],[T+1,z+1,M]],G=[[T+1,z],[T,z],[T,z+1],[T+1,z+1]]),this.appendQuad(W.positions,W.normals,W.uvs,W.ao,W.colors,W.indices,$,C.normal,G)}}},w=(T,M,I,W)=>{for(let C=T;C<M;C+=1)for(let P=I;P<W;P+=1)S(P,C)},b=Math.ceil(i),D=Math.ceil(r),F=Math.ceil(s),B=Math.ceil(a);return w(c,F,o,l),w(B,h,o,l),w(F,B,o,b),w(F,B,D,l),u}createFarSeabedGeometry(e,t){const i=Math.max(128,this.options.farDistance),{minX:r,maxX:s,minZ:a,maxZ:o}=this.options.bounds,l=Math.floor((r-i)/t)*t,c=Math.ceil((s+i)/t)*t,h=Math.floor((a-i)/t)*t,u=Math.ceil((o+i)/t)*t,d=r-e,f=s+e,m=a-e,p=o+e,v=new Map,x=(G,j)=>`${G},${j}`;for(let G=h;G<u;G+=t)for(let j=l;j<c;j+=t){const he=j+t*.5,U=G+t*.5;he>=d&&he<f&&U>=m&&U<p||v.set(x(j,G),this.sampleSeabedHeight(Math.floor(he),Math.floor(U)))}const y=new Map,g=(G,j)=>{const he=x(G,j),U=y.get(he);if(U!==void 0)return U;const H=[v.get(x(G-t,j-t)),v.get(x(G,j-t)),v.get(x(G-t,j)),v.get(x(G,j))].filter(ye=>ye!==void 0),me=(H.length>0?H.reduce((ye,qe)=>ye+qe,0)/H.length:this.sampleSeabedHeight(G,j))+1;return y.set(he,me),me},S=[],w=[],b=[],D=[],F=[],B=[],T=[],M=[],I=[],W=[],C=[],P=[],z=new Map,$=(G,j)=>{const he=x(G,j),U=z.get(he);if(U!==void 0)return U;const H=g(G,j),Ye=g(G-t,j),me=g(G+t,j),ye=g(G,j-t),qe=g(G,j+t),Dt=new A(Ye-me,t*2,ye-qe).normalize(),$t=S.length/3;return S.push(G,H,j),w.push(Dt.x,Dt.y,Dt.z),b.push(G,j),D.push(.7),F.push(1,1,1),z.set(he,$t),$t};for(const G of v.keys()){const[j,he]=G.split(","),U=Number(j),H=Number(he),Ye=$(U,H),me=$(U+t,H),ye=$(U+t,H+t),qe=$(U,H+t),Dt=Math.abs(g(U,H)-g(U+t,H+t)),$t=Math.abs(g(U+t,H)-g(U,H+t));Dt<=$t?B.push(Ye,qe,ye,Ye,ye,me):B.push(Ye,qe,me,me,qe,ye);const Zr=[{dx:t,dz:0,normal:[1,0,0]},{dx:-t,dz:0,normal:[-1,0,0]},{dx:0,dz:t,normal:[0,0,1]},{dx:0,dz:-t,normal:[0,0,-1]}];for(const je of Zr)v.has(x(U+je.dx,H+je.dz))||(je.dx>0?this.appendTiledWall(T,M,I,W,C,P,[U+t,it,H+t],[U+t,it,H],[U+t,g(U+t,H+t),H+t],[U+t,g(U+t,H),H],je.normal):je.dx<0?this.appendTiledWall(T,M,I,W,C,P,[U,it,H],[U,it,H+t],[U,g(U,H),H],[U,g(U,H+t),H+t],je.normal):je.dz>0?this.appendTiledWall(T,M,I,W,C,P,[U,it,H+t],[U+t,it,H+t],[U,g(U,H+t),H+t],[U+t,g(U+t,H+t),H+t],je.normal):this.appendTiledWall(T,M,I,W,C,P,[U+t,it,H],[U,it,H],[U+t,g(U+t,H),H],[U,g(U,H),H],je.normal))}return{surface:this.makeGeometry(S,w,b,D,F,B),closure:this.makeGeometry(T,M,I,W,C,P)}}appendTiledWall(e,t,i,r,s,a,o,l,c,h,u){const d=Math.hypot(l[0]-o[0],l[2]-o[2]),f=Math.max(1,Math.ceil(d-1e-6)),m=Math.abs(l[0]-o[0])>1e-6?l[0]>o[0]:l[2]>o[2],p=(v,x,y)=>[k.lerp(v[0],x[0],y),k.lerp(v[1],x[1],y),k.lerp(v[2],x[2],y)];for(let v=0;v<f;v+=1){const x=v/f,y=(v+1)/f,g=p(o,l,x),S=p(o,l,y),w=p(c,h,x),b=p(c,h,y),D=m?0:1,F=m?1:0,B=Math.max(0,w[1]-g[1]),T=Math.max(0,b[1]-S[1]);this.appendQuad(e,t,i,r,s,a,[g,S,b,w],u,[[D,0],[F,0],[F,T],[D,B]])}}appendQuad(e,t,i,r,s,a,o,l,c){const h=e.length/3;for(let w=0;w<4;w+=1){const b=o[w];e.push(b[0],b[1],b[2]),t.push(l[0],l[1],l[2]),i.push(c[w][0],c[w][1]),r.push(.7),s.push(1,1,1)}const u=o[1][0]-o[0][0],d=o[1][1]-o[0][1],f=o[1][2]-o[0][2],m=o[2][0]-o[0][0],p=o[2][1]-o[0][1],v=o[2][2]-o[0][2],x=d*v-f*p,y=f*m-u*v,g=u*p-d*m;x*l[0]+y*l[1]+g*l[2]>=0?a.push(h,h+1,h+2,h,h+2,h+3):a.push(h,h+2,h+1,h,h+3,h+2)}makeGeometry(e,t,i,r,s,a){const o=new Tt;return o.setAttribute("position",new Ge(e,3)),o.setAttribute("normal",new Ge(t,3)),o.setAttribute("uv",new Ge(i,2)),o.setAttribute("ao",new Ge(r,1)),o.setAttribute("color",new Ge(s,3)),o.setIndex(a),o.computeBoundingSphere(),o}syncSeabedMaterial(){if(!this.seabedMaterial)return;const e=this.options.blockMaterialSource;if(e){const t=e.uniforms,i=this.seabedMaterial.uniforms;for(const r of["sunDirection","sunColor","dayLight","starLight","skyAmbient","roughness","metalness","envMapIntensity","lightingMix","ditherAmount"])t[r]&&i[r]&&(i[r].value=t[r].value);this.seabedMaterial.shareVoxelShadowState(e)}this.seabedMaterial.setWaterCaustics(!0,this.surfaceY,.8,this.time,this.getCausticReferenceDepth(),this.sunIntensity)}disposeSeabedMaterial(){const e=this.seabedMaterial;e&&(this.seabedMaterial=null,this.options.unregisterShadowSamplingMaterial?.(e),e.dispose())}applyCaustics(){if(!this.caustics)return;const e=this.caustics.getTexture(),t=this.caustics.getOrigin(),i=this.caustics.getExtent(),r=this.caustics.getResolution(),s=this.caustics.getReferenceDepth();this.options.blockMaterialSource?.setWaterCausticTexture(e,t,i,r,s),this.seabedMaterial?.setWaterCausticTexture(e,t,i,r,s)}}class Xn{canvas;camera;isPointerLocked=!1;inputEnabled=!1;mouseSensitivity=.0022;lookEventType=Fs()&&typeof PointerEvent<"u"?"pointermove":"mousemove";onPointerLockChangedCallback=null;onCharacterSwitchRequestedCallback=null;yawRadians=ue.initialYaw;pitchRadians=0;movementYawOffset=0;onPointerLockChangeRef;onMouseMoveRef;onKeyDownRef;onKeyUpRef;onMouseDownRef;onMouseUpRef;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;sprint=!1;jumpQueued=!1;jumpHeld=!1;leftClickQueued=!1;rightClickQueued=!1;leftMouseHeld=!1;numSlotQueued=null;pauseToggleQueued=!1;viewToggleQueued=!1;constructor(e,t){this.canvas=e,this.camera=t,this.isPointerLocked=typeof document<"u"&&document.pointerLockElement===e,this.camera.rotation.order="YXZ",this.onPointerLockChangeRef=this.onPointerLockChange.bind(this),this.onMouseMoveRef=this.onMouseMove.bind(this),this.onKeyDownRef=this.onKeyDown.bind(this),this.onKeyUpRef=this.onKeyUp.bind(this),this.onMouseDownRef=this.onMouseDown.bind(this),this.onMouseUpRef=this.onMouseUp.bind(this),document.addEventListener("pointerlockchange",this.onPointerLockChangeRef),window.addEventListener(this.lookEventType,this.onMouseMoveRef),window.addEventListener("keydown",this.onKeyDownRef),window.addEventListener("keyup",this.onKeyUpRef),window.addEventListener("mousedown",this.onMouseDownRef),window.addEventListener("mouseup",this.onMouseUpRef)}update(){const e=Math.PI/2.05;this.pitchRadians>e&&(this.pitchRadians=e),this.pitchRadians<-e&&(this.pitchRadians=-e),this.yawRadians=k.euclideanModulo(this.yawRadians+Math.PI,Math.PI*2)-Math.PI,this.camera.rotation.y=this.yawRadians,this.camera.rotation.x=this.pitchRadians}getOrientation(){return{yaw:this.yawRadians,pitch:this.pitchRadians}}setEnabled(e){this.inputEnabled=e,e||(this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.sprint=!1,this.jumpQueued=!1,this.jumpHeld=!1,this.leftClickQueued=!1,this.rightClickQueued=!1,this.leftMouseHeld=!1,this.numSlotQueued=null,this.pauseToggleQueued=!1,this.viewToggleQueued=!1)}setLookOrientation(e,t=this.pitchRadians){this.yawRadians=e,this.pitchRadians=t,this.update()}destroy(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeRef),window.removeEventListener(this.lookEventType,this.onMouseMoveRef),window.removeEventListener("keydown",this.onKeyDownRef),window.removeEventListener("keyup",this.onKeyUpRef),window.removeEventListener("mousedown",this.onMouseDownRef),window.removeEventListener("mouseup",this.onMouseUpRef),this.onCharacterSwitchRequestedCallback=null}onPointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.canvas,this.isPointerLocked||(this.leftMouseHeld=!1),this.onPointerLockChangedCallback&&this.onPointerLockChangedCallback(this.isPointerLocked)}onMouseMove(e){if(!this.inputEnabled||!this.isPointerLocked)return;let t=e.movementX||0,i=e.movementY||0;if(this.lookEventType==="pointermove"){const r=e;if(r.pointerType!=="mouse")return;const s=r.getCoalescedEvents?.();if(s?.length){t=0,i=0;for(const a of s)t+=a.movementX||0,i+=a.movementY||0}}this.yawRadians-=t*this.mouseSensitivity,this.pitchRadians-=i*this.mouseSensitivity}onPointerLockChanged(e){this.onPointerLockChangedCallback=e}onCharacterSwitchRequested(e){this.onCharacterSwitchRequestedCallback=e}setMovementYawOffset(e){this.movementYawOffset=e}getMovementYaw(){return this.yawRadians+this.movementYawOffset}requestPointerLock(){this.canvas&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()}exitPointerLock(){if(document.exitPointerLock)try{document.exitPointerLock()}catch{}}onMouseDown(e){!this.inputEnabled||!this.isPointerLocked||(e.button===0?(this.leftMouseHeld=!0,this.leftClickQueued=!0):e.button===2&&(this.rightClickQueued=!0))}onMouseUp(e){e.button===0&&(this.leftMouseHeld=!1)}onKeyDown(e){if(this.inputEnabled)switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.sprint=!0;break;case"Space":this.jumpQueued=!0,this.jumpHeld=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":this.numSlotQueued=parseInt(e.code.slice(-1),10)-1;break;case"KeyP":this.pauseToggleQueued=!0;break;case"KeyV":e.repeat||(this.viewToggleQueued=!0);break;case"KeyR":e.repeat||(e.preventDefault(),this.onCharacterSwitchRequestedCallback?.());break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break;case"Space":this.jumpHeld=!1;break}}getMoveInput(){let e=0,t=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveLeft&&(e-=1),this.moveRight&&(e+=1);const i=Math.hypot(e,t);return i>0&&(e/=i,t/=i),{x:e,z:t}}isSprinting(){return this.sprint}isJumpHeld(){return this.jumpHeld}consumeJumpRequested(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeLeftClick(){return this.leftClickQueued?(this.leftClickQueued=!1,!0):!1}peekLeftClick(){return this.leftClickQueued}isLeftHeld(){return this.leftMouseHeld}consumeRightClick(){return this.rightClickQueued?(this.rightClickQueued=!1,!0):!1}peekRightClick(){return this.rightClickQueued}consumeSelectedSlot(){const e=this.numSlotQueued;return this.numSlotQueued=null,e}consumePauseToggle(){return this.pauseToggleQueued?(this.pauseToggleQueued=!1,!0):!1}consumeViewToggle(){return this.viewToggleQueued?(this.viewToggleQueued=!1,!0):!1}}class Z{camera;world;input;position=new A;static ENABLE_LAND_STEP_ASSIST=!1;velocityY=0;grounded=!0;swimVelocity=new A;underwater=!1;stepCooldown=0;emergeLiftRemaining=0;emergeNudgeDir=new A;renderYOffsetY=0;elevationTween={from:0,elapsed:0,duration:0,active:!1};width=ue.width;height=ue.height;halfWidth=this.width/2;swimHeadForwardOffset=1.65;swimHeadHalfExtent=.35;swimHeadCenterAboveFeet=.65;eyeHeight=ue.eyeHeight;waterId=Be("water")??5;walkSpeed=ue.speed.walk;sprintSpeed=ue.speed.sprint;gravity=ue.gravity;jumpImpulse=ue.jump;static EPS=1e-5;bounds=null;moving=!1;sprinting=!1;moveDirection=new A;constructor(e,t,i,r){this.camera=e,this.world=t,this.input=i,this.position.copy(e.position),r&&(this.bounds=r),this.camera.rotation.order="YXZ"}update(e){this.renderYOffsetY!==0&&(this.position.y-=this.renderYOffsetY,this.renderYOffsetY=0),this.stepCooldown>0&&(this.stepCooldown=Math.max(0,this.stepCooldown-e)),this.updateMovementInputState();const t=this.underwater,i=this.isHeadInsideWater(),r=this.isHeadInFloodedAir(),s=this.isBaseSubmerged(),a=ee+1-.001,o=this.position.y+(this.height-this.eyeHeight),l=.3;if(this.underwater?o>a+l&&(this.underwater=!1):(i||r||s)&&o<a-l&&(this.underwater=!0),this.underwater){t||(this.velocityY=0,this.grounded=!1),this.updateUnderwater(e),this.applyElevationTween(e);return}if(t){this.velocityY=Math.max(this.velocityY,this.swimVelocity.y);const M=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(M>.5){const I=Math.min(2,M*.6),W=new A(this.swimVelocity.x,0,this.swimVelocity.z).normalize();this.position.add(W.multiplyScalar(I*e))}this.swimVelocity.set(0,0,0)}this.input.consumeJumpRequested()&&this.grounded&&(this.velocityY=this.jumpImpulse,this.grounded=!1);const h=this.input.getMoveInput(),u=this.input.isSprinting()?this.sprintSpeed:this.walkSpeed,d=this.input.getMovementYaw?.()??this.input.getOrientation().yaw,f=-Math.sin(d),m=-Math.cos(d),p=Math.cos(d),v=-Math.sin(d),x=p*h.x+f*h.z,y=v*h.x+m*h.z,g=Math.hypot(x,y),S=g>0?x/g:0,w=g>0?y/g:0,b=S*u*e,D=w*u*e,F=this.velocityY*e+.5*this.gravity*e*e;this.velocityY+=this.gravity*e,this.resolveAxis("x",b),this.resolveAxis("z",D);const B=this.resolveAxis("y",F);F<0&&B?(this.grounded=!0,this.velocityY=0):F!==0&&(this.grounded=!1);const T=this.getBaseY();if(T<0){const M=-T;this.position.y+=M,this.velocityY=0,this.grounded=!0}this.applyElevationTween(e)}updateUnderwater(e){const t=ue.swim,i=this.input.getMoveInput(),r=this.input.isSprinting()?t.sprintMultiplier:1,{pitch:s}=this.input.getOrientation(),a=this.input.getMovementYaw?.()??this.input.getOrientation().yaw,o=new A(-Math.sin(a)*Math.cos(s),Math.sin(s),-Math.cos(a)*Math.cos(s)).normalize(),l=new A(0,1,0),c=new A().crossVectors(o,l).normalize(),h=new A().addScaledVector(c,i.x).addScaledVector(o,i.z);h.lengthSq()>0&&h.normalize();const u=t.accel*r;if(h.lengthSq()>0&&this.swimVelocity.addScaledVector(h,u*e),this.input.isJumpHeld()){this.swimVelocity.y+=t.verticalAccel*e*r;const he=ee+1-.001-this.position.y;he>0&&(this.swimVelocity.y+=t.surfaceSnapStrength*he*e)}const d=this.gravity*t.gravityScale;this.swimVelocity.y+=d*e;const m=ee+1-.001-this.position.y;m>0&&m<t.floatBand&&this.swimVelocity.y<0&&(this.swimVelocity.y+=t.floatStrength*m*e);const p=Math.hypot(i.x,i.z);!this.input.isJumpHeld()&&p<.01&&(this.swimVelocity.y-=Math.max(0,ue.swim.sinkBias)*e);const v=Math.max(0,Math.min(10,t.drag)),x=Math.max(0,1-v*e);this.swimVelocity.multiplyScalar(x);const y=t.maxSpeed*r,g=new A(this.swimVelocity.x,0,this.swimVelocity.z),S=g.length();if(S>y&&(g.multiplyScalar(y/S),this.swimVelocity.x=g.x,this.swimVelocity.z=g.z),this.swimVelocity.y=k.clamp(this.swimVelocity.y,-y,y),this.emergeLiftRemaining>0){const j=Math.min(t.emergeLiftSpeed*e,this.emergeLiftRemaining),he=this.position.y;this.resolveAxis("y",j);const U=this.position.y-he;this.emergeLiftRemaining-=Math.max(0,U);const H=t.emergeNudgeSpeed*e;(this.emergeNudgeDir.x!==0||this.emergeNudgeDir.z!==0)&&(this.resolveAxis("x",this.emergeNudgeDir.x*H),this.resolveAxis("z",this.emergeNudgeDir.z*H)),this.emergeLiftRemaining<=0&&(this.emergeLiftRemaining=0,this.emergeNudgeDir.set(0,0,0))}const w=this.swimVelocity.x*e,b=this.swimVelocity.y*e,D=this.swimVelocity.z*e,F=this.resolveHorizontalMovement(w,D),B=F.hitX;B&&(this.swimVelocity.x=0);const T=F.hitZ;T&&(this.swimVelocity.z=0);const M=this.getBaseY(),I=ee+1-.001,W=I-this.position.y<ue.swim.floatBand+.75,C=this.hasSolidGroundBelow(),P=h.lengthSq()>1e-6,z=Math.abs(I-this.position.y)<.5;if(this.emergeLiftRemaining<=0&&this.stepCooldown<=0&&(P||this.input.isJumpHeld())&&(B||T||C||z)&&(W||this.input.isJumpHeld())){const j=Math.max(0,I-M),he=Math.max(0,I+ue.swim.stepOutHeadroom-M),U=Math.min(ue.swim.maxEmergeStepOut,Math.max(.25,he)),H=Math.min(ue.swim.maxEmergeStepOut,Math.max(.25,j)),Ye=[U,H,1.25,1,.75,.5,.25];let me=0;for(const ye of Ye)if(this.canStepUpEmerge(ye,h)){me=ye;break}me>0&&(this.emergeLiftRemaining=me,this.emergeNudgeDir.copy(h),this.startElevationTween(me),this.stepCooldown=.15)}this.resolveAxis("y",b)&&(this.swimVelocity.y=0),this.grounded=!1;const G=this.getBaseY();if(G<0){const j=-G;this.position.y+=j,this.swimVelocity.y=Math.max(0,this.swimVelocity.y)}}resolveHorizontalMovement(e,t){let i=e,r=t,s=!1,a=!1;if(this.bounds){const o=this.bounds.minX+this.halfWidth+Z.EPS,l=this.bounds.maxX-this.halfWidth-Z.EPS,c=this.bounds.minZ+this.halfWidth+Z.EPS,h=this.bounds.maxZ-this.halfWidth-Z.EPS,u=k.clamp(this.position.x+i,o,l),d=k.clamp(this.position.z+r,c,h);u!==this.position.x+i&&(s=!0),d!==this.position.z+r&&(a=!0),i=u-this.position.x,r=d-this.position.z}for(let o=0;o<3;o+=1){const l=Math.hypot(i,r);if(l<=Z.EPS)break;const c=this.findHorizontalCollision(i,r);if(c===null){this.position.x+=i,this.position.z+=r;break}const h=Math.max(0,c.time-Z.EPS/l);this.position.x+=i*h,this.position.z+=r*h,c.hitX?(s=!0,i=0):i*=1-h,c.hitZ?(a=!0,r=0):r*=1-h}return{hitX:s,hitZ:a}}findHorizontalCollision(e,t){const i=this.position;let r=null;for(const s of this.getCollisionVolumes()){const a=this.getCollisionVolumeBounds(s,i.x,i.y,i.z),o=i.x+s.offsetX,l=i.z+s.offsetZ,c=Math.floor(Math.min(a.minX,a.minX+e)-Z.EPS),h=Math.floor(Math.max(a.maxX,a.maxX+e)+Z.EPS),u=Math.floor(Math.min(a.minZ,a.minZ+t)-Z.EPS),d=Math.floor(Math.max(a.maxZ,a.maxZ+t)+Z.EPS);for(let f=Math.floor(a.minY);f<=Math.floor(a.maxY);f+=1)if(!(a.minY>=f+1-Z.EPS||a.maxY<=f+Z.EPS))for(let m=u;m<=d;m+=1)for(let p=c;p<=h;p+=1){if(!this.world.isBlockSolid(p,f,m))continue;const v=p-s.halfX,x=p+1+s.halfX,y=m-s.halfZ,g=m+1+s.halfZ;let S=0,w=1;const b=[],D=(M,I,W,C,P)=>{if(Math.abs(I)<=Z.EPS)return M>W+Z.EPS&&M<C-Z.EPS;let z=(W-M)/I,$=(C-M)/I;return z>$&&([z,$]=[$,z]),b.push({axis:P,time:z}),S=Math.max(S,z),w=Math.min(w,$),S<=w+Z.EPS};if(!D(o,e,v,x,"x")||!D(l,t,y,g,"z")||S<-1e-5||S>1+Z.EPS)continue;const F=b.some(M=>M.axis==="x"&&Math.abs(M.time-S)<=Z.EPS*8),B=b.some(M=>M.axis==="z"&&Math.abs(M.time-S)<=Z.EPS*8);if(!F&&!B)continue;const T=k.clamp(S,0,1);r===null||T<r.time?r={time:T,hitX:F,hitZ:B}:Math.abs(T-r.time)<=Z.EPS*8&&(r.hitX=r.hitX||F,r.hitZ=r.hitZ||B)}}return r}resolveAxis(e,t){if(t===0)return!1;const i=this.position,r=e==="x"?i.x+t:i.x,s=e==="y"?i.y+t:i.y,a=e==="z"?i.z+t:i.z,o=Math.sign(t);if(this.bounds&&(e==="x"||e==="z")){const u=this.halfWidth+Z.EPS;if(e==="x"){const d=this.bounds.minX+u,f=this.bounds.maxX-u;if(r<d)return this.position.x=d,!0;if(r>f)return this.position.x=f,!0}else if(e==="z"){const d=this.bounds.minZ+u,f=this.bounds.maxZ-u;if(a<d)return this.position.z=d,!0;if(a>f)return this.position.z=f,!0}}let l=null;for(const u of this.getCollisionVolumes()){const d=this.getCollisionVolumeBounds(u,i.x,i.y,i.z),f=this.getCollisionVolumeBounds(u,r,s,a);if(!this.aabbIntersectsSolid(f.minX,f.minY,f.minZ,f.maxX,f.maxY,f.maxZ))continue;const m=e==="x"?o>0?d.maxX:d.minX:e==="z"?o>0?d.maxZ:d.minZ:o>0?d.maxY:d.minY,p=e==="x"?o>0?f.maxX:f.minX:e==="z"?o>0?f.maxZ:f.minZ:o>0?f.maxY:f.minY,v=this.findCollisionBoundary(e,o,f.minX,f.minY,f.minZ,f.maxX,f.maxY,f.maxZ,m,p);if(v===null)continue;const x=o>0?v-m:m-v;x<-1e-5||(l===null||x<l.travel)&&(l={volume:u,boundary:v,travel:x})}if(l===null)return i.set(r,s,a),!1;const{volume:c,boundary:h}=l;switch(e){case"x":return i.x=o>0?h-c.offsetX-c.halfX-Z.EPS:h-c.offsetX+c.halfX+Z.EPS,!0;case"z":return i.z=o>0?h-c.offsetZ-c.halfZ-Z.EPS:h-c.offsetZ+c.halfZ+Z.EPS,!0;case"y":return i.y=o>0?h-c.offsetY-c.halfY-Z.EPS:h-c.offsetY+c.halfY+Z.EPS,!0}}findCollisionBoundary(e,t,i,r,s,a,o,l,c,h){let u=t>0?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY;const d=Math.floor(i),f=Math.floor(r),m=Math.floor(s),p=Math.floor(a),v=Math.floor(o),x=Math.floor(l);for(let y=f;y<=v;y+=1)for(let g=m;g<=x;g+=1)for(let S=d;S<=p;S+=1){if(!this.world.isBlockSolid(S,y,g))continue;const w=e==="x"?t>0?S:S+1:e==="y"?t>0?y:y+1:t>0?g:g+1;(t>0?w>c-Z.EPS&&w<=h+Z.EPS:w<c+Z.EPS&&w>=h-Z.EPS)&&(u=t>0?Math.min(u,w):Math.max(u,w))}return Number.isFinite(u)?u:null}getCollisionVolumes(){const e=[{offsetX:0,offsetY:-this.eyeHeight+this.height*.5,offsetZ:0,halfX:this.halfWidth,halfY:this.height*.5,halfZ:this.halfWidth}],t=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(!this.underwater||!this.moving&&t<=.15)return e;const i=this.moveDirection.clone();i.lengthSq()<=1e-6&&t>.15&&i.set(this.swimVelocity.x,0,this.swimVelocity.z).normalize();const r=-i.z,s=i.x,a=(o,l,c,h,u,d)=>{e.push({offsetX:o*i.x+l*r,offsetY:-this.eyeHeight+c,offsetZ:o*i.z+l*s,halfX:h*Math.abs(i.x)+u*Math.abs(r),halfY:d,halfZ:h*Math.abs(i.z)+u*Math.abs(s)})};return a(.28,-.13,.66,.45,.16,.22),a(.28,.13,.66,.45,.16,.22),a(1.02,0,.69,.4,.26,.18),a(1.07,-.375,.69,.4,.16,.18),a(1.07,.375,.69,.4,.16,.18),a(this.swimHeadForwardOffset,0,this.swimHeadCenterAboveFeet,this.swimHeadHalfExtent,this.swimHeadHalfExtent,this.swimHeadHalfExtent),e}getCollisionVolumeBounds(e,t,i,r){const s=t+e.offsetX,a=i+e.offsetY,o=r+e.offsetZ;return{minX:s-e.halfX,minY:a-e.halfY,minZ:o-e.halfZ,maxX:s+e.halfX,maxY:a+e.halfY,maxZ:o+e.halfZ}}getCollisionHalfExtentX(){return this.halfWidth}getCollisionHalfExtentZ(){return this.halfWidth}getBaseY(e=this.position.y){return e-this.eyeHeight}startElevationTween(e,t=.12){this.elevationTween.from=-e,this.elevationTween.elapsed=0,this.elevationTween.duration=Math.max(.06,t),this.elevationTween.active=!0}elevate(e,t=.12){e<=0||(this.position.y+=e,this.startElevationTween(e,t))}applyElevationTween(e){if(!this.elevationTween.active)return;this.elevationTween.elapsed+=e;const t=Math.min(1,this.elevationTween.elapsed/this.elevationTween.duration),r=(a=>1-Math.pow(1-a,3))(t),s=this.elevationTween.from*(1-r);this.renderYOffsetY=s,this.position.y+=this.renderYOffsetY,t>=1&&(this.elevationTween.active=!1,this.renderYOffsetY=0)}isHeadInsideWater(){const e=this.position,t=e.y+(this.height-this.eyeHeight);if(t>=ee+1)return!1;const i=Math.floor(t),r=Math.min(.18,this.halfWidth*.9),s=[[0,0],[r,0],[-r,0],[0,r],[0,-r]];for(const[a,o]of s){const l=Math.floor(e.x+a),c=Math.floor(e.z+o);if(this.world.getBlock(l,ee,c)===this.waterId||this.world.getBlock(l,i,c)===this.waterId)return!0}return!1}isHeadInFloodedAir(){const e=this.position,t=e.y+(this.height-this.eyeHeight);if(t>=ee+1)return!1;const i=Math.floor(t),r=Math.min(.18,this.halfWidth*.9),s=[[0,0],[r,0],[-r,0],[0,r],[0,-r]];for(const[a,o]of s){const l=Math.floor(e.x+a),c=Math.floor(e.z+o);if(this.world.isAirFlooded(l,i,c))return!0}return!1}isBaseSubmerged(){const e=this.position,t=this.getBaseY(e.y)+.001,i=Math.floor(t);if(i>ee)return!1;const r=Math.min(.18,this.halfWidth*.9),s=[[0,0],[r,0],[-r,0],[0,r],[0,-r]];for(const[a,o]of s){const l=Math.floor(e.x+a),c=Math.floor(e.z+o);if(this.world.isAirFlooded(l,i,c)||t<ee+1&&this.world.getBlock(l,ee,c)===this.waterId||this.world.getBlock(l,i,c)===this.waterId)return!0}return!1}aabbIntersectsSolid(e,t,i,r,s,a){const o=Math.floor(e),l=Math.floor(t),c=Math.floor(i),h=Math.floor(r),u=Math.floor(s),d=Math.floor(a);for(let f=l;f<=u;f++)for(let m=c;m<=d;m++)for(let p=o;p<=h;p++)if(this.world.isBlockSolid(p,f,m))return!0;return!1}hasSolidGroundBelow(e=.01){const t=this.position,i=this.getCollisionHalfExtentX(),r=this.getCollisionHalfExtentZ(),s=this.getBaseY(t.y)-e,a=Math.floor(s),o=Math.floor(t.x-i),l=Math.floor(t.x+i),c=Math.floor(t.z-r),h=Math.floor(t.z+r);for(let u=c;u<=h;u++)for(let d=o;d<=l;d++)if(this.world.isBlockSolid(d,a,u))return!0;return!1}tryStepUp(e,t){if(e<=0)return!1;const i=this.position,r=i.y+e,s=.08,a=t&&t.lengthSq()>1e-6?i.x+t.x*s:i.x,o=t&&t.lengthSq()>1e-6?i.z+t.z*s:i.z,l=Z.EPS*4,c=a-this.getCollisionHalfExtentX()+l,h=a+this.getCollisionHalfExtentX()-l,u=o-this.getCollisionHalfExtentZ()+l,d=o+this.getCollisionHalfExtentZ()-l,f=this.getBaseY(r)+l,m=f+this.height-l;if(this.aabbIntersectsSolid(c,f,u,h,m,d))return!1;const p=Math.floor(f-.01);let v=!1;for(let x=Math.floor(u);x<=Math.floor(d);x++){for(let y=Math.floor(c);y<=Math.floor(h);y++)if(this.world.isBlockSolid(y,p,x)){v=!0;break}if(v)break}return v?(this.position.y=r,!0):!1}canStepUpEmerge(e,t){if(e<=0)return!1;const i=this.position,r=i.y+e,s=.08,a=!!t&&t.lengthSq()>1e-6,o=a?i.x+t.x*s:i.x,l=a?i.z+t.z*s:i.z,c=Z.EPS*4,h=o-this.getCollisionHalfExtentX()+c,u=o+this.getCollisionHalfExtentX()-c,d=l-this.getCollisionHalfExtentZ()+c,f=l+this.getCollisionHalfExtentZ()-c,m=this.getBaseY(r)+c,p=m+this.height-c;if(this.aabbIntersectsSolid(h,m,d,u,p,f))return!1;const v=Math.floor(m-.01);let x=!1;for(let S=Math.floor(d);S<=Math.floor(f);S++){for(let w=Math.floor(h);w<=Math.floor(u);w++)if(this.world.isBlockSolid(w,v,S)){x=!0;break}if(x)break}if(x)return!0;const y=[];a?y.push(t.clone().setY(0).normalize()):y.push(new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1));const g=.5;for(const S of y){const w=o+S.x*g,b=l+S.z*g,D=Math.floor(w-this.getCollisionHalfExtentX()+c),F=Math.floor(w+this.getCollisionHalfExtentX()-c),B=Math.floor(b-this.getCollisionHalfExtentZ()+c),T=Math.floor(b+this.getCollisionHalfExtentZ()-c);for(let M=v;M>=v-1;M--)for(let I=B;I<=T;I++)for(let W=D;W<=F;W++)if(this.world.isBlockSolid(W,M,I))return!0}return!1}tryStepUpMulti(e,t){for(const i of e)if(this.tryStepUp(i,t))return t.x!==0&&this.resolveAxis("x",t.x*.08),t.z!==0&&this.resolveAxis("z",t.z*.08),i;return 0}syncPositionFromCamera(){this.position.copy(this.camera.position),this.renderYOffsetY=0,this.elevationTween.active=!1}getEyePosition(e=new A){return e.copy(this.position)}getFeetPosition(e=new A){return e.copy(this.position).setY(this.position.y-this.eyeHeight)}getEyeHeight(){return this.eyeHeight}getHeight(){return this.height}getWidth(){return this.width}getWorld(){return this.world}isUnderwater(){return this.underwater}getMovementState(){return{isMoving:this.moving,isSprinting:this.sprinting,isGrounded:this.grounded,isUnderwater:this.underwater,moveDirection:this.moveDirection.clone()}}updateMovementInputState(){const e=this.input.getMoveInput(),t=this.input.getMovementYaw?.()??this.input.getOrientation().yaw,i=-Math.sin(t),r=-Math.cos(t),s=Math.cos(t),a=-Math.sin(t),o=s*e.x+i*e.z,l=a*e.x+r*e.z,c=Math.hypot(o,l);this.moving=c>.001,this.sprinting=this.input.isSprinting(),this.moveDirection.set(c>0?o/c:0,0,c>0?l/c:0)}isGrounded(){return this.grounded}setBounds(e){this.bounds=e}}function Zn(n,e,t){const i=Math.hypot(n,e,t);return i===0?{x:0,y:0,z:0}:{x:n/i,y:e/i,z:t/i}}function Bi(n){return Math.floor(n)}function Yn(n,e,t,i=Mr.reach,r){const s=Zn(t.x,t.y,t.z);if(s.x===0&&s.y===0&&s.z===0)return{hit:!1};let a=Bi(e.x),o=Bi(e.y),l=Bi(e.z);const c=s.x>0?1:-1,h=s.y>0?1:-1,u=s.z>0?1:-1,d=a+(c>0?1:0),f=o+(h>0?1:0),m=l+(u>0?1:0),p=s.x!==0?(d-e.x)/s.x:Number.POSITIVE_INFINITY,v=s.y!==0?(f-e.y)/s.y:Number.POSITIVE_INFINITY,x=s.z!==0?(m-e.z)/s.z:Number.POSITIVE_INFINITY,y=s.x!==0?1/Math.abs(s.x):Number.POSITIVE_INFINITY,g=s.y!==0?1/Math.abs(s.y):Number.POSITIVE_INFINITY,S=s.z!==0?1/Math.abs(s.z):Number.POSITIVE_INFINITY;let w=p,b=v,D=x,F=0,B=a,T=o,M=l;const I=Math.ceil(i*3+10);for(let W=0;W<I&&(w<b?w<D?(B=a,T=o,M=l,a+=c,F=w,w+=y):(B=a,T=o,M=l,l+=u,F=D,D+=S):b<D?(B=a,T=o,M=l,o+=h,F=b,b+=g):(B=a,T=o,M=l,l+=u,F=D,D+=S),!(F>i));W++){let C;{const P=n.getBlock(a,o,l),z=ci(P);C=!!z&&(n.isBlockSolid(a,o,l)||z.name==="grass_tuft")}if(C)return{hit:!0,hitCell:{x:a,y:o,z:l},placeCell:{x:B,y:T,z:M},t:F}}return{hit:!1}}class qn{camera;world;scene;bounds=null;reach=Mr.reach;selection={hit:!1};boxMesh=null;rayOrigin=new A;rayDirection=new A;interactionOrigin=new A;hitPoint=new A;interactionOriginProvider;constructor(e,t,i,r,s){this.camera=e,this.world=t,this.scene=i,r&&(this.bounds=r),this.interactionOriginProvider=s??null,this.boxMesh=this.createWireBox(),this.boxMesh.visible=!1,this.scene.add(this.boxMesh)}getCenterRay(e,t){this.camera.updateMatrixWorld(!0),this.camera.getWorldPosition(e),this.camera.getWorldDirection(t)}update(){this.getCenterRay(this.rayOrigin,this.rayDirection);const e=this.rayDirection,t=this.rayOrigin,i=this.interactionOriginProvider?this.interactionOriginProvider(this.interactionOrigin):this.interactionOrigin.copy(t),r=this.reach+t.distanceTo(i),s=Yn(this.world,t,e,r);s.hit&&s.t!==void 0&&(this.hitPoint.copy(e).multiplyScalar(s.t).add(t),this.hitPoint.distanceToSquared(i)>this.reach*this.reach+1e-6&&(s.hit=!1,s.hitCell=void 0,s.placeCell=void 0));let a=s.hit,o=s.hitCell,l=s.placeCell;if(this.bounds&&s.hit&&s.hitCell){const{minX:c,maxX:h,minZ:u,maxZ:d}=this.bounds;s.hitCell.x>=c&&s.hitCell.x<h&&s.hitCell.z>=u&&s.hitCell.z<d||(a=!1,o=void 0,l=void 0)}this.selection={hit:a,hitCell:o,placeCell:l},this.updateDebugMesh()}getSelection(){return this.selection}destroy(){this.boxMesh&&(this.scene.remove(this.boxMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.boxMesh=null)}updateDebugMesh(){if(!this.boxMesh)return;if(!this.selection.hit||!this.selection.hitCell){this.boxMesh.visible=!1;return}const{x:e,y:t,z:i}=this.selection.hitCell;this.boxMesh.visible=!0,this.boxMesh.position.set(e+.5,t+.5,i+.5)}createWireBox(){const e=new ds(new E(1.0001,1.0001,1.0001)),t=new fs({color:16776960}),i=new ms(e,t);return i.renderOrder=9999,i}}class jn{camera;world;input;selection;pipeline;playerController;onActionDirection;actionDirection=new A;playerPosition=new A;airId=0;waterId=Be("water")??5;grassId=Be("grass")??1;dirtId=Be("dirt")??2;stoneId=Be("stone")??3;sandId=Be("sand")??4;woodId=Be("wood")??6;leavesId=Be("leaves")??7;leavesMapleId=Be("leaves_maple")??8;grassTuftId=Be("grass_tuft")??9;currentHit=null;nextActionAllowedAt=0;lastSwingStartAt=0;constructor(e,t,i,r,s,a,o){this.camera=e,this.world=t,this.input=i,this.selection=r,this.pipeline=s,this.playerController=a??null,this.onActionDirection=o??null}update(){const e=(typeof performance<"u"?performance.now():Date.now())/1e3;{const t=this.input.consumeLeftClick(),i=this.input.isLeftHeld?.()??!1;if(t||i){if(!(window.__isBodySwingActive?.()??!1)&&(this.lastSwingStartAt===0||e-this.lastSwingStartAt>=Oi)){const a=this.selection.getSelection();if(a.hit&&a.hitCell&&this.notifyActionDirection(a.hitCell),window.__bodyPrimary?.(),this.lastSwingStartAt=e,a.hit&&a.hitCell){const{x:o,y:l,z:c}=a.hitCell,h=this.world.getBlock(o,l,c);if(h!==this.airId){this.currentHit&&this.currentHit.x===o&&this.currentHit.y===l&&this.currentHit.z===c&&this.currentHit.id===h?this.currentHit.count+=1:this.currentHit={x:o,y:l,z:c,id:h,count:1};const u=this.getRequiredStrikes(h);if(this.currentHit.count>=u){const d=this.world.isBlockSolid(o,l,c);d&&window.__sfxBreak?.(),this.world.setBlock(o,l,c,this.airId),d&&this.shouldFillWithWater(o,l,c)&&this.world.setBlock(o,l,c,this.waterId),this.propagateSurfaceWaterFromConnection(o,l,c),Bs(h,1),this.remeshAffectedChunks(o,l,c),this.currentHit=null}}}}}else this.lastSwingStartAt=0}if(this.input.consumeRightClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+Oi;const t=this.selection.getSelection();if(t.hit&&t.placeCell){const{x:i,y:r,z:s}=t.placeCell,a=Sa(),o=this.evaluatePlacement(i,r,s,a??void 0);if(o.canPlace){const l=Sa();l!==null&&zs()&&(this.notifyActionDirection({x:i,y:r,z:s}),window.__bodySecondary?.(),o.elevatePlayer&&(this.playerController?this.playerController.elevate(1):this.camera.position.y+=1),this.world.setBlock(i,r,s,l),this.remeshAffectedChunks(i,r,s),window.__sfxPlace?.())}}}}getRequiredStrikes(e){return e===this.leavesId||e===this.leavesMapleId||e===this.grassId||e===this.grassTuftId?1:e===this.dirtId||e===this.sandId?2:e===this.stoneId||e===this.woodId?3:1}shouldFillWithWater(e,t,i){if(t!==ee)return!1;const r=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(const[s,a]of r)if(this.world.getBlock(e+s,t,i+a)===this.waterId)return!0;return!1}propagateSurfaceWaterFromConnection(e,t,i){if(t>ee+1)return;const r=ee,s=this.airId,a=this.waterId,o=64,l=e-o,c=e+o,h=i-o,u=i+o,d=(b,D,F)=>`${b},${D},${F}`,f=[];let m=0;const p=new Set,v=[],x=new Set;let y=!1;const g=(b,D,F)=>{if(D<0||D>r||b<l||b>c||F<h||F>u)return;const B=d(b,D,F);p.has(B)||this.world.isBlockSolid(b,D,F)||(p.add(B),f.push({x:b,y:D,z:F}))};g(e,Math.min(t,r),i),g(e+1,Math.min(t,r),i),g(e-1,Math.min(t,r),i),g(e,Math.min(t,r),i+1),g(e,Math.min(t,r),i-1),g(e,Math.min(t+1,r),i),g(e,Math.max(t-1,0),i);const S=12e4;for(;m<f.length&&p.size<=S;){const b=f[m];if(f[m]=void 0,m+=1,!b)continue;const D=this.world.getBlock(b.x,b.y,b.z);D===a?y=!0:D===s&&(v.push(b),x.add(`${b.x},${b.z}`)),g(b.x+1,b.y,b.z),g(b.x-1,b.y,b.z),g(b.x,b.y,b.z+1),g(b.x,b.y,b.z-1),g(b.x,b.y+1,b.z),g(b.x,b.y-1,b.z)}if(!y)return;v.length>0&&this.world.addFloodedAir(v);const w=[];for(const b of x){const[D,F]=b.split(","),B=parseInt(D,10),T=parseInt(F,10);if(B<l||B>c||T<h||T>u)continue;this.world.getBlock(B,r,T)===s&&(this.world.setBlock(B,r,T,a),w.push({x:B,y:r,z:T}))}if(w.length>0){const b=new Set;for(const D of w){const{cx:F,cy:B,cz:T}=Ot(D.x,D.y,D.z);b.add(`${F},${B},${T}`)}for(const D of b){const[F,B,T]=D.split(",").map(I=>parseInt(I,10)),M=this.world.getChunk(F,B,T);M&&this.pipeline.requestRemesh(F,B,T,M.getData())}}}remeshAffectedChunks(e,t,i){const{cx:r,cy:s,cz:a,lx:o,ly:l,lz:c}=Ot(e,t,i),h=this.world.getChunk(r,s,a);h&&this.pipeline.requestRemesh(r,s,a,h.getData());const u=[];o===0&&u.push([r-1,s,a]),o===R.x-1&&u.push([r+1,s,a]),l===0&&u.push([r,s-1,a]),l===R.y-1&&u.push([r,s+1,a]),c===0&&u.push([r,s,a-1]),c===R.z-1&&u.push([r,s,a+1]);for(const[d,f,m]of u){const p=this.world.getChunk(d,f,m);p&&this.pipeline.requestRemesh(d,f,m,p.getData())}}evaluatePlacement(e,t,i,r){if(this.world.getBlock(e,t,i)!==this.airId)return{canPlace:!1,elevatePlayer:!1};if(r===this.grassTuftId)return this.world.getBlock(e,t-1,i)!==this.grassId?{canPlace:!1,elevatePlayer:!1}:{canPlace:!0,elevatePlayer:!1};if(r!==void 0&&this.world.getBlock(e,t-1,i)===this.grassTuftId){const P=!!ci(r)?.solid,z=r===this.grassId;if(P||z)return{canPlace:!1,elevatePlayer:!1}}const s=(this.playerController?.getWidth()??ue.width)/2,a=this.playerController?.getEyeHeight()??ue.eyeHeight,o=this.playerController?.getHeight()??ue.height,l=this.playerController?.getEyePosition(this.playerPosition)??this.camera.position,c=l.x-s,h=l.x+s,u=l.y-a,d=u+o,f=l.z-s,m=l.z+s,p=e,v=e+1,x=t,y=t+1,g=i,S=i+1,w=1e-5;if(h<=p+w||c>=v-w||d<=x+w||u>=y-w||m<=g+w||f>=S-w)return{canPlace:!0,elevatePlayer:!1};const D=u,F=Math.floor(D),B=t===F,T=e+.5,M=i+.5,I=T>c+w&&T<h-w&&M>f+w&&M<m-w;if(B&&I){const C=D+1,P=C+o;if(!this.aabbIntersectsSolid(c,C,f,h,P,m))return{canPlace:!0,elevatePlayer:!0}}return{canPlace:!1,elevatePlayer:!1}}notifyActionDirection(e){if(!this.onActionDirection)return;const t=this.playerController?.getEyePosition(this.playerPosition)??this.camera.position;this.actionDirection.set(e.x+.5-t.x,0,e.z+.5-t.z),!(this.actionDirection.lengthSq()<1e-6)&&this.onActionDirection(this.actionDirection.normalize())}aabbIntersectsSolid(e,t,i,r,s,a){const o=Math.floor(e),l=Math.floor(t),c=Math.floor(i),h=Math.floor(r),u=Math.floor(s),d=Math.floor(a);for(let f=l;f<=u;f++)for(let m=c;m<=d;m++)for(let p=o;p<=h;p++)if(this.world.isBlockSolid(p,f,m))return!0;return!1}}const $n="/assets/grass_leaves-C9h5dzo8.png";class Kn extends He{constructor(e){const t=`
      // Instanced billboard vertex shader
      // Applies per-instance transform and passes world/view data for lighting
      ${ea()}
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      void main(){
        vUv = uv;
        // The lighting direction is world-space. Grass instances are
        // translation-only, so modelMatrix gives the matching world normal.
        vNormal = normalize(mat3(modelMatrix) * normal);
        // Apply per-instance transform so each tuft appears at its world cell
        vec4 worldPos = modelMatrix * instanceMatrix * vec4(position, 1.0);
        vWorldPos = worldPos.xyz;
        vec4 viewPos = viewMatrix * worldPos;
        vViewPos = viewPos.xyz;
        vec4 directClip = projectionMatrix * viewPos;
        vec4 apparentClip = forwardRefractionProject(
          worldPos.xyz,
          directClip
        );
        gl_Position = apparentClip;
      }
    `,i=`
      // Grass billboard fragment shader
      // Lighting matches BlockMaterial style (ambient/day-night + sun diffuse), with alpha cutout
      ${ia()}
      varying vec2 vUv;
      varying vec3 vNormal;
      varying vec3 vWorldPos;
      varying vec3 vViewPos;
      uniform sampler2D map;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform float dayLight;  // 0..1
      uniform float starLight; // 0..1 small boost at night
      uniform vec3 skyAmbient; // scene-linear irradiance from AtmosphereModel
      uniform float alphaCutoff;
      uniform sampler2D voxelShadowMask;
      uniform sampler2D voxelShadowDepth;
      uniform vec2 voxelShadowResolution;
      uniform float voxelShadowCameraNear;
      uniform float voxelShadowCameraFar;
      uniform bool voxelShadowEnabled;

      float decodeVoxelShadowDepth(float raw) {
        if (raw >= 0.999999) return voxelShadowCameraFar;
        return (voxelShadowCameraNear * voxelShadowCameraFar) /
          ((voxelShadowCameraFar - voxelShadowCameraNear) * raw - voxelShadowCameraFar);
      }

      float sampleVoxelShadowDepth(vec2 uv) {
        return -decodeVoxelShadowDepth(texture2D(voxelShadowDepth, clamp(uv, vec2(0.0), vec2(1.0))).r);
      }

      float sampleVoxelShadow(vec2 uv) {
        return texture2D(voxelShadowMask, clamp(uv, vec2(0.0), vec2(1.0))).r;
      }

      float getVoxelShadowMask() {
        if (!voxelShadowEnabled) return 1.0;
        if (uForwardRefractionActive > 0.5) {
          return forwardRefractionSunVisibility(
            voxelShadowResolution,
            vForwardRefractionSourceWorld
          );
        }
        vec2 uv = gl_FragCoord.xy / max(voxelShadowResolution, vec2(1.0));
        float center = sampleVoxelShadow(uv);
        float uncertainty = smoothstep(0.02, 0.98, 4.0 * center * (1.0 - center));
        if (uncertainty <= 0.0) return center;
        vec2 texel = 1.0 / max(voxelShadowResolution, vec2(1.0));
        // Keep reconstruction on the same receiver surface. Grass is alpha
        // cutout geometry, so an ordinary four-neighbour blur would otherwise
        // leak terrain visibility into a blade silhouette.
        float referenceDepth = -vViewPos.z;
        vec2 offsets[4];
        offsets[0] = vec2(texel.x, 0.0);
        offsets[1] = vec2(-texel.x, 0.0);
        offsets[2] = vec2(0.0, texel.y);
        offsets[3] = vec2(0.0, -texel.y);
        float weighted = 0.0;
        float weightSum = 0.0;
        for (int i = 0; i < 4; i++) {
          float neighbourDepth = sampleVoxelShadowDepth(uv + offsets[i]);
          float tolerance = max(0.025, referenceDepth * 0.015);
          float weight = 1.0 - smoothstep(tolerance, tolerance * 4.0, abs(neighbourDepth - referenceDepth));
          weighted += sampleVoxelShadow(uv + offsets[i]) * weight;
          weightSum += weight;
        }
        if (weightSum <= 1e-4) return center;
        return mix(center, weighted / weightSum, 0.55 * uncertainty);
      }

      void main(){
        forwardRefractionDiscardCameraMedium();
        vec4 tex = texture2D(map, vUv);
        if (tex.a < alphaCutoff) discard;
        if (uForwardRefractionOutputReceiver > 0.5) {
          gl_FragColor = vec4(
            forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
            1.0
          );
          return;
        }
        // The grass texture is uploaded as SRGBColorSpace, so sampled RGB is
        // already linear in WebGL.
        vec3 albedo = tex.rgb;
        vec3 N = normalize(vNormal);
        vec3 L = normalize(sunDirection);
        float NdotL = max(dot(N, L), 0.0);

        // Ambient + day/night modulation (mirrors BlockMaterial tuning)
        vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35 * clamp(starLight, 0.0, 1.0);
        vec3 ambient = skyAmbient + starAmb;

        float shadowFactor = uForwardRefractionRenderMode > 0.5
          ? 1.0
          : getVoxelShadowMask();
        vec3 unshadowedDirect = sunColor * NdotL * clamp(dayLight, 0.0, 1.0);
        vec3 diffuse = unshadowedDirect * shadowFactor;

        // Subtle fresnel rim to keep thin blades readable against dark backgrounds
        // N and the lighting direction are world-space, so keep the view
        // vector in the same space for camera-stable rim lighting.
        vec3 V = normalize(cameraPosition - vWorldPos);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.0);
        vec3 rim = vec3(0.8, 0.9, 1.0) * fresnel * 0.12 * clamp(dayLight, 0.0, 1.0);

        vec3 color = albedo * (ambient + diffuse + rim);
        vec3 forwardDirectRadiance = albedo * unshadowedDirect;
        vec3 forwardNonDirectRadiance = albedo * (ambient + rim);
        if (uForwardRefractionRenderMode > 0.5) {
          forwardRefractionWriteMrt(
            forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
            max(forwardNonDirectRadiance, vec3(0.0)),
            max(forwardDirectRadiance, vec3(0.0))
          );
          return;
        }
        // Cutout writes opaque color (no blending); alpha unused when transparent=false
        gl_FragColor = vec4(color, 1.0);
      }
    `;super({vertexShader:t,fragmentShader:i,transparent:!1,toneMapped:!1,depthWrite:!0,side:jt,uniforms:{map:{value:e},sunDirection:{value:new A(0,1,0)},sunColor:{value:new V(1,1,1)},dayLight:{value:1},starLight:{value:0},skyAmbient:{value:new V(.12,.18,.32)},alphaCutoff:{value:.15},voxelShadowMask:{value:null},voxelShadowDepth:{value:null},voxelShadowResolution:{value:new q(1,1)},voxelShadowCameraNear:{value:.1},voxelShadowCameraFar:{value:1024},voxelShadowEnabled:{value:!1}}}),ta(this)}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setSun(e,t){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t)}setDayNight(e,t){this.uniforms.dayLight.value=k.clamp(e,0,1),this.uniforms.starLight.value=k.clamp(t,0,1)}setSkyAmbient(e){this.uniforms.skyAmbient.value.copy(e)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=k.clamp(e,0,1)}setVoxelShadowTexture(e,t,i,r=!0){this.uniforms.voxelShadowMask.value=e,this.uniforms.voxelShadowResolution.value.set(Math.max(1,t),Math.max(1,i)),this.uniforms.voxelShadowEnabled.value=r}setVoxelShadowDepthTexture(e,t,i){this.uniforms.voxelShadowDepth.value=e,this.uniforms.voxelShadowCameraNear.value=t,this.uniforms.voxelShadowCameraFar.value=i}}function Wr(n,e,t=1){const i=n/2,r=Math.max(1,Math.floor(t)),s=[],a=[],o=[],l=s.length/3;for(let d=0;d<=r;d+=1){const f=d/r,m=f*e;s.push(.5-i,m,.5,.5+i,m,.5),a.push(0,1-f,1,1-f)}for(let d=0;d<r;d+=1){const f=l+d*2;o.push(f,f+1,f+3,f,f+3,f+2)}const c=s.length/3;for(let d=0;d<=r;d+=1){const f=d/r,m=f*e;s.push(.5,m,.5-i,.5,m,.5+i),a.push(0,1-f,1,1-f)}for(let d=0;d<r;d+=1){const f=c+d*2;o.push(f,f+1,f+3,f,f+3,f+2)}const h=new Tt;h.setAttribute("position",new Ge(s,3)),h.setAttribute("uv",new Ge(a,2));const u=new Float32Array(s.length/3*3);return u.fill(1),h.setAttribute("color",new Ge(u,3)),h.setIndex(o),h.computeVertexNormals(),h}const Qn=k.degToRad(45);function Jn(n,e,t){return n===t||e===t}class el{scene;material;geometry;groups=new Map;forwardRefractionParticipants;surfaceY;grassTuftId;constructor(e,t,i,r,s=ee+Xe){this.scene=e,this.grassTuftId=i,this.forwardRefractionParticipants=r,this.surfaceY=s;const a=document.createElement("canvas");a.width=1,a.height=1;const o=a.getContext("2d");o.fillStyle="#ffffff",o.fillRect(0,0,1,1);const l=new Ji(a);l.colorSpace=et,l.magFilter=N,l.minFilter=N,this.material=new Kn(l);const c=new wr().load($n);c.flipY=!1,c.colorSpace=et,c.magFilter=N,c.minFilter=N,this.material.setMap(c),this.geometry=Wr(.92,.9),this.geometry.translate(-.5,0,-.5),this.geometry.rotateY(Qn),this.geometry.translate(.5,0,.5),t.on("CHUNK_ADDED",({key:h,chunk:u,coords:d})=>{this.rebuildForChunk(h,u.getVoxelsArray(),d.cx,d.cy,d.cz,u.getGrassTuftPositions())}),t.on("CHUNK_REMOVED",({key:h})=>this.removeChunk(h)),t.on("BLOCK_CHANGED",({chunkKey:h,oldBlockId:u,newBlockId:d})=>{if(!Jn(u,d,this.grassTuftId))return;const f=t.getChunkByKey(h);if(!f){this.removeChunk(h);return}this.rebuildForChunk(h,f.getVoxelsArray(),...h.split(",").map(m=>parseInt(m,10)),f.getGrassTuftPositions())})}destroy(){for(const e of Array.from(this.groups.keys()))this.removeChunk(e);this.geometry.dispose();try{this.material.uniforms.map?.value?.dispose?.()}catch{}this.material.dispose()}removeChunk(e){const t=this.groups.get(e);t&&(this.scene.remove(t),this.forwardRefractionParticipants?.unregisterTree(t),this.groups.delete(e))}rebuildForChunk(e,t,i,r,s,a){this.removeChunk(e);const o=[];if(a)for(let u=0;u+2<a.length;u+=3){const d=a[u],f=a[u+1],m=a[u+2];if(d>=R.x||f>=R.y||m>=R.z)continue;const p=f*R.x*R.z+m*R.x+d;t[p]===this.grassTuftId&&o.push({lx:d,ly:f,lz:m})}else for(let u=0;u<R.y;u++)for(let d=0;d<R.z;d++)for(let f=0;f<R.x;f++){const m=u*R.x*R.z+d*R.x+f;t[m]===this.grassTuftId&&o.push({lx:f,ly:u,lz:d})}if(!o.length)return;const l=new Qi(this.geometry,this.material,o.length);l.castShadow=!1,l.receiveShadow=!1,l.renderOrder=1;const c=new Ae;for(let u=0;u<o.length;u++){const d=o[u];c.makeTranslation(d.lx,d.ly,d.lz),l.setMatrixAt(u,c)}l.instanceMatrix.needsUpdate=!0,l.computeBoundingBox();const h=new Q;h.add(l),h.position.set(i*R.x,r*R.y,s*R.z),this.scene.add(h),this.forwardRefractionParticipants?.register(l,{medium:oa(l,this.surfaceY)}),this.groups.set(e,h)}getMaterial(){return this.material}setSunUniforms(e,t){this.material.setSun(e,t)}setDayNight(e,t){this.material.setDayNight(e,t)}setSkyAmbient(e){this.material.setSkyAmbient(e)}getTexture(){return this.material.uniforms.map.value}setVoxelShadowTexture(e,t,i,r=!0){this.material.setVoxelShadowTexture(e,t,i,r)}setVoxelShadowDepthTexture(e,t,i){this.material.setVoxelShadowDepthTexture(e,t,i)}}const tl="/assets/seaweed-D7DOANGR.png",qi=5,Vr=2,il=Vr,al=Vr,Ft=4.5,rl=4.8,sl=.14,ei=1,ol=2,_r=2654435769,nl=2246822507,Ka=3266489909;function Qe(n,e,t){let i=(t^Math.imul(n|0,_r)^Math.imul(e|0,nl))>>>0;return i^=i>>>16,i=Math.imul(i,2146121005),i^=i>>>15,i=Math.imul(i,2221713035),i^=i>>>16,(i>>>0)/4294967296}function Qa(n,e,t){const i=Math.max(0,Math.min(1,(t-n)/Math.max(e-n,1e-6)));return i*i*(3-2*i)}function ll(n,e,t){const i=Math.floor(n),r=Math.floor(e),s=n-i,a=e-r,o=s*s*(3-2*s),l=a*a*(3-2*a),c=Qe(i,r,t),h=Qe(i+1,r,t),u=Qe(i,r+1,t),d=Qe(i+1,r+1,t),f=c+(h-c)*o,m=u+(d-u)*o;return f+(m-f)*l}function Ja(n,e){return`${n},${e}`}function cl(n,e){const t=Qa(qi,9,n),i=1-Qa(17,28,n)*.58,r=.32+e*.9;return Math.max(0,Math.min(1,t*i*r))}function hl(n){const e=n.waterLevel??ee,t=n.terrainSampler??Hi(n.terrainSeed,n.worldRadius),i=e+Xe-br()-sl,r=Math.max(rl,Ft),s=Ft/Math.SQRT2,a=Math.floor(n.bounds.minX/r)-1,o=Math.ceil(n.bounds.maxX/r)+1,l=Math.floor(n.bounds.minZ/r)-1,c=Math.ceil(n.bounds.maxZ/r)+1,h=[],u=new Set;for(let g=a;g<=o;g+=1)for(let S=l;S<=c;S+=1){const w=Qe(g,S,n.distributionSeed^Ka)-.5,b=Qe(g,S,n.distributionSeed^(Ka^1374496523))-.5,D=(g+.5+w*.86)*r,F=(S+.5+b*.86)*r,B=Math.floor(D),T=Math.floor(F),M=`${B},${T}`;if(u.has(M))continue;u.add(M);const I=B+.5,W=T+.5;if(I<n.bounds.minX||I>=n.bounds.maxX||W<n.bounds.minZ||W>=n.bounds.maxZ)continue;const C=t(B,T);if(!C.isOcean)continue;let P=0;for(let me=-ei;me<=ei;me+=1)for(let ye=-ei;ye<=ei;ye+=1){if(ye===0&&me===0)continue;const qe=t(B+ye,T+me);P=Math.max(P,Math.abs(qe.height-C.height))}if(P>ol)continue;const z=C.height+1,$=e+Xe-z;if($<qi)continue;const G=ll(I*.034+n.terrainSeed*17e-5,W*.034-n.terrainSeed*13e-5,n.distributionSeed^_r),j=cl($,G),he=Math.min(.92,.1+j*.78);if(Qe(g,S,n.distributionSeed^1013904242)>he)continue;const H=Qe(g,S,n.distributionSeed^458671349);i-z<al||h.push({x:I,z:W,rootY:z,height:il,seed:H,priority:Qe(g,S,n.distributionSeed^2773480762)*(.35+j),rejectionRadius:Ft})}h.sort((g,S)=>S.priority-g.priority);const d=[],f=new Map,m=Math.ceil(Ft/s)+1;for(const g of h){const S=Math.floor(g.x/s),w=Math.floor(g.z/s);let b=!1;for(let D=S-m;D<=S+m&&!b;D+=1)for(let F=w-m;F<=w+m;F+=1){const B=f.get(Ja(D,F));if(!B)continue;const T=B.x-g.x,M=B.z-g.z,I=Math.max(B.rejectionRadius,g.rejectionRadius);if(T*T+M*M<I*I){b=!0;break}}b||(d.push({x:g.x,z:g.z,rootY:g.rootY,height:g.height,seed:g.seed}),f.set(Ja(S,w),g))}let p=1/0,v=-1/0,x=1/0,y=-1/0;for(const g of d){const S=e+Xe-g.rootY;p=Math.min(p,S),v=Math.max(v,S),x=Math.min(x,g.height),y=Math.max(y,g.height)}return{anchors:d,diagnostics:{distributionSeed:n.distributionSeed>>>0,candidateCount:h.length,acceptedCount:d.length,minDistance:Ft,minimumDepth:qi,safeSurfaceY:i,depthRange:{min:Number.isFinite(p)?p:0,max:Number.isFinite(v)?v:0},heightRange:{min:Number.isFinite(x)?x:0,max:Number.isFinite(y)?y:0},oceanOnly:!0,weightedBy:["ocean-only terrain mask","minimum water depth","macro habitat patches","slope clearance","block-top root clearance"]}}}function ul(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const n=new Uint32Array(1);return crypto.getRandomValues(n),n[0]}return Math.floor(Math.random()*4294967296)>>>0}function dl(){const n=Math.round(1/_e*255),e=new Ve(new Uint8Array([n,n,n,255]),1,1,re,Pe);return e.colorSpace=fe,e.magFilter=N,e.minFilter=N,e.needsUpdate=!0,e}class fl extends He{neutralCausticTexture;constructor(e){const t=dl(),i=`
      precision highp float;
      ${ea()}

      attribute float aSeed;

      uniform float uTime;
      uniform float uFlowStrength;
      uniform float uFlowSpeed;
      uniform float uFlutter;
      uniform vec2 uFlowDirection;
      uniform float uWaterLevel;

      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying float vWaterDepth;
      varying float vFlow;

      float hash11(float value) {
        return fract(sin(value * 91.173 + 17.31) * 43758.5453123);
      }

      void main() {
        vec4 anchorWorld4 = modelMatrix * instanceMatrix * vec4(0.5, 0.0, 0.5, 1.0);
        vec3 anchorWorld = anchorWorld4.xyz;
        vec2 flowDirection = normalize(uFlowDirection);
        vec2 sideDirection = vec2(-flowDirection.y, flowDirection.x);
        float bladeT = clamp(position.y, 0.0, 1.0);
        float instanceHeight = max(length(instanceMatrix[1].xyz), 0.001);
        float seedPhase = aSeed * 6.28318530718;
        float phase = dot(anchorWorld.xz, flowDirection) * 0.115
          + dot(anchorWorld.xz, sideDirection) * 0.021
          - uTime * uFlowSpeed
          + seedPhase;
        float crossPhase = dot(anchorWorld.xz, sideDirection) * 0.17
          + dot(anchorWorld.xz, flowDirection) * 0.031
          + uTime * uFlowSpeed * 0.43
          + seedPhase * 0.67;

        // A traveling vertical phase makes each segmented card flex as a
        // continuous underwater wave instead of rocking as one rigid sheet.
        // The smooth envelope is exactly zero at the root, preserving the
        // block-top attachment while the upper sections follow the current.
        float rooted = bladeT * bladeT * (3.0 - 2.0 * bladeT);
        float alongWave = phase + bladeT * 2.45;
        float crossWave = crossPhase - bladeT * 2.85;
        float currentWave = sin(alongWave) * 0.68
          + sin(alongWave * 0.53 - uTime * uFlowSpeed * 0.18 + seedPhase * 0.37) * 0.22;
        float sideWave = sin(crossWave) * 0.18;
        float gust = 0.82 + 0.18 * sin(uTime * uFlowSpeed * 0.37 + seedPhase * 1.7);
        float bendAmplitude = uFlowStrength * instanceHeight * rooted * gust;
        vec2 displacement = (
          flowDirection * currentWave + sideDirection * sideWave
        ) * bendAmplitude;
        float flutter = sin(
          uTime * (4.0 + hash11(aSeed) * 1.5)
          + seedPhase * 2.7
          + dot(anchorWorld.xz, sideDirection) * 0.31
          + bladeT * 5.0
        ) * uFlutter * instanceHeight * pow(bladeT, 2.6);
        displacement += sideDirection * flutter;

        vec3 localPosition = position;
        vec4 worldPosition = modelMatrix * instanceMatrix * vec4(localPosition, 1.0);
        worldPosition.xz += displacement;

        vec3 baseNormal = normalize(mat3(modelMatrix * instanceMatrix) * normal);
        vec3 currentNormal = normalize(
          baseNormal
          - vec3(displacement.x, 0.0, displacement.y) * 0.42
          + vec3(0.0, 0.10, 0.0) * rooted
        );

        vUv = uv;
        vWorldPosition = worldPosition.xyz;
        vWorldNormal = currentNormal;
        vWaterDepth = max(uWaterLevel - worldPosition.y, 0.0);
        vFlow = clamp(0.5 + currentWave * 0.36 + sideWave * 0.22, 0.0, 1.0);
        vec4 directClip = projectionMatrix * viewMatrix * worldPosition;
        vec4 apparentClip = forwardRefractionProject(worldPosition.xyz, directClip);
        gl_Position = apparentClip;
      }
    `,r=`
      precision highp float;
      ${ia()}

      uniform sampler2D map;
      uniform vec3 sunDirection;
      uniform vec3 sunColor;
      uniform float dayLight;
      uniform float starLight;
      uniform vec3 skyAmbient;
      uniform float alphaCutoff;

      uniform sampler2D voxelShadowMask;
      uniform vec2 voxelShadowResolution;
      uniform bool voxelShadowEnabled;

      uniform bool waterCausticEnabled;
      uniform float waterCausticLevel;
      uniform float waterCausticIntensity;
      uniform float waterCausticReferenceDepth;
      uniform float waterCausticFieldScale;
      uniform float waterCausticSunIntensity;
      uniform vec3 waterCausticExtinction;
      uniform sampler2D waterCausticMap;
      uniform bool waterCausticMapEnabled;
      uniform vec2 waterCausticOrigin;
      uniform float waterCausticExtent;

      varying vec2 vUv;
      varying vec3 vWorldPosition;
      varying vec3 vWorldNormal;
      varying float vWaterDepth;
      varying float vFlow;

      float getVoxelShadowMask() {
        if (!voxelShadowEnabled) return 1.0;
        if (uForwardRefractionActive > 0.5) {
          return forwardRefractionSunVisibility(
            voxelShadowResolution,
            vForwardRefractionSourceWorld
          );
        }
        vec2 uv = gl_FragCoord.xy / max(voxelShadowResolution, vec2(1.0));
        // The full-screen voxel pass already resolves a filtered visibility
        // value. A single lookup keeps dense alpha cards from multiplying
        // that pass's cost with another five-tap depth reconstruction.
        return texture2D(voxelShadowMask, clamp(uv, vec2(0.0), vec2(1.0))).r;
      }

      float sampleWaterCaustics(vec3 worldPosition) {
        vec3 sun = normalize(sunDirection);
        vec3 refractedSun = refract(
          -sun,
          vec3(0.0, 1.0, 0.0),
          1.0 / ${Se.toFixed(3)}
        );
        float depth = max(waterCausticLevel - worldPosition.y, 0.0);
        float vertical = max(-refractedSun.y, 0.12);
        float referenceTravel = (waterCausticReferenceDepth - depth) / vertical;
        vec2 projected = worldPosition.xz + refractedSun.xz * referenceTravel;
        vec2 causticCoord = (projected - waterCausticOrigin)
          / max(waterCausticExtent, 1.0) + 0.5;
        // WaterCaustics owns the filtered/mipmapped footprint. One linear
        // sample is sufficient for the thin vegetation receiver and avoids
        // the old 20-sample per-fragment caustic gather.
        return clamp(
          texture2D(waterCausticMap, causticCoord).r * waterCausticFieldScale,
          0.0,
          8.0
        );
      }

      float waterSunTransmission(float cosIncident) {
        float eta = 1.0 / ${Se.toFixed(3)};
        float sinTransmitted2 = eta * eta * max(1.0 - cosIncident * cosIncident, 0.0);
        if (sinTransmitted2 >= 1.0) return 0.0;
        float cosTransmitted = sqrt(max(1.0 - sinTransmitted2, 0.0));
        float rs = (cosIncident - ${Se.toFixed(3)} * cosTransmitted)
          / max(cosIncident + ${Se.toFixed(3)} * cosTransmitted, 0.001);
        float rp = (${Se.toFixed(3)} * cosIncident - cosTransmitted)
          / max(${Se.toFixed(3)} * cosIncident + cosTransmitted, 0.001);
        return clamp(1.0 - 0.5 * (rs * rs + rp * rp), 0.0, 1.0);
      }

      void main() {
        forwardRefractionDiscardCameraMedium();
        vec4 tex = texture2D(map, vUv);
        if (tex.a < alphaCutoff) discard;
        if (uForwardRefractionOutputReceiver > 0.5) {
          gl_FragColor = vec4(
            forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
            1.0
          );
          return;
        }

        vec3 albedo = tex.rgb;
        vec3 normal = normalize(vWorldNormal);
        vec3 sun = normalize(sunDirection);
        float sunDot = abs(dot(normal, sun));
        float shadow = uForwardRefractionRenderMode > 0.5
          ? 1.0
          : getVoxelShadowMask();
        float day = clamp(dayLight, 0.0, 1.0);
        vec3 starAmb = vec3(0.02, 0.025, 0.04) * 0.35
          * clamp(starLight, 0.0, 1.0);
        vec3 ambient = skyAmbient + starAmb;
        vec3 unshadowedDirect = sunColor * sunDot * day;
        vec3 directSun = unshadowedDirect * shadow;
        vec3 directTransport = unshadowedDirect;

        // Keep the sampled green readable through the water medium while
        // allowing deeper plants to pick up a restrained blue-green cast.
        float depthTint = smoothstep(4.0, 24.0, vWaterDepth);
        vec3 waterTint = mix(
          vec3(1.0),
          vec3(0.74, 0.96, 1.04),
          depthTint * 0.24
        );
        albedo *= waterTint;

        vec3 backScatter = vec3(0.16, 0.34, 0.10)
          * pow(max(dot(-normal, sun), 0.0), 2.0)
          * 0.22
          * day;
        vec3 color = albedo * (ambient + directSun + backScatter);

        if (waterCausticEnabled && waterCausticMapEnabled) {
          float submerged = 1.0 - smoothstep(
            waterCausticLevel - 0.75,
            waterCausticLevel + 0.25,
            vWorldPosition.y
          );
          float sunActive = smoothstep(0.02, 0.18, waterCausticSunIntensity);
          if (submerged > 0.001 && sunActive > 0.001) {
            vec3 refractedSun = refract(
              -sun,
              vec3(0.0, 1.0, 0.0),
              1.0 / ${Se.toFixed(3)}
            );
            float receiverCos = abs(dot(normal, -refractedSun));
            float airCos = max(abs(dot(normal, sun)), 0.001);
            float angleRatio = receiverCos / airCos;
            float depth = max(waterCausticLevel - vWorldPosition.y, 0.0);
            float lightDistance = depth / max(-refractedSun.y, 0.12);
            vec3 lightTransmittance = exp(-waterCausticExtinction * lightDistance);
            float sunScale = clamp(waterCausticSunIntensity / 1.35, 0.0, 1.0);
            float field = sampleWaterCaustics(vWorldPosition);
            float focusedField = mix(
              1.0,
              field,
              clamp(waterCausticIntensity, 0.0, 1.0)
            );
            vec3 transport = lightTransmittance
              * waterSunTransmission(max(sun.y, 0.0))
              * sunScale
              * angleRatio
              * focusedField;
            directTransport = mix(
              unshadowedDirect,
              unshadowedDirect * transport,
              submerged * sunActive
            );
            vec3 waterDirect = directTransport * shadow;
            // Only direct sunlight is replaced by the caustic transport. Sky,
            // stars, albedo, and the local back-scatter remain independent.
            color += albedo * (waterDirect - directSun);
          }
        }

        // Slight motion-linked luminance variation keeps dense stands from
        // reading as identical copies while the texture remains authoritative.
        float flowLuminance = mix(0.94, 1.06, vFlow);
        color *= flowLuminance;
        vec3 forwardDirectRadiance = albedo * directTransport * flowLuminance;
        vec3 forwardNonDirectRadiance = albedo * (ambient + backScatter) * flowLuminance;
        if (uForwardRefractionRenderMode > 0.5) {
          forwardRefractionWriteMrt(
            forwardRefractionStoreReceiver(vForwardRefractionSourceWorld),
            max(forwardNonDirectRadiance, vec3(0.0)),
            max(forwardDirectRadiance, vec3(0.0))
          );
          return;
        }
        gl_FragColor = vec4(color, 1.0);
      }
    `;super({name:"MyCraftSeaweedMaterial",vertexShader:i,fragmentShader:r,uniforms:{map:{value:e},uTime:{value:0},uFlowStrength:{value:.075},uFlowSpeed:{value:.72},uFlutter:{value:.018},uFlowDirection:{value:new q(.72,.69).normalize()},uWaterLevel:{value:42.5},sunDirection:{value:new A(.35,.9,.2).normalize()},sunColor:{value:new V(1,1,1)},dayLight:{value:1},starLight:{value:0},skyAmbient:{value:new V(.12,.18,.32)},alphaCutoff:{value:.15},voxelShadowMask:{value:null},voxelShadowDepth:{value:null},voxelShadowResolution:{value:new q(1,1)},voxelShadowCameraNear:{value:.1},voxelShadowCameraFar:{value:1024},voxelShadowEnabled:{value:!1},waterCausticEnabled:{value:!1},waterCausticLevel:{value:42.5},waterCausticIntensity:{value:.8},waterCausticReferenceDepth:{value:we},waterCausticFieldScale:{value:_e},waterCausticSunIntensity:{value:1.35},waterCausticExtinction:{value:new A(...xr)},waterCausticMap:{value:t},waterCausticMapEnabled:{value:!1},waterCausticOrigin:{value:new q(0,0)},waterCausticExtent:{value:256},waterCausticResolution:{value:new q(1,1)}},side:jt,transparent:!1,depthWrite:!0,depthTest:!0,alphaTest:.15,toneMapped:!1,lights:!1}),ta(this),this.neutralCausticTexture=t}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setTime(e){this.uniforms.uTime.value=e}setWaterLevel(e){this.uniforms.uWaterLevel.value=e,this.uniforms.waterCausticLevel.value=e}setFlow(e,t,i,r){this.uniforms.uFlowDirection.value.copy(e).normalize(),this.uniforms.uFlowStrength.value=Math.max(0,t),this.uniforms.uFlowSpeed.value=Math.max(0,i),this.uniforms.uFlutter.value=Math.max(0,r)}setSun(e,t){this.uniforms.sunDirection.value.copy(e).normalize(),this.uniforms.sunColor.value.copy(t)}setDayNight(e,t){this.uniforms.dayLight.value=k.clamp(e,0,1),this.uniforms.starLight.value=k.clamp(t,0,1)}setSkyAmbient(e){this.uniforms.skyAmbient.value.copy(e)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=k.clamp(e,0,1)}setVoxelShadowTexture(e,t,i,r=!0){this.uniforms.voxelShadowMask.value=e,this.uniforms.voxelShadowResolution.value.set(Math.max(1,t),Math.max(1,i)),this.uniforms.voxelShadowEnabled.value=r}setVoxelShadowDepthTexture(e,t,i){this.uniforms.voxelShadowDepth.value=e,this.uniforms.voxelShadowCameraNear.value=t,this.uniforms.voxelShadowCameraFar.value=i}shareVoxelShadowState(e){const t=e.uniforms,i=["voxelShadowMask","voxelShadowDepth","voxelShadowResolution","voxelShadowCameraNear","voxelShadowCameraFar","voxelShadowEnabled"];for(const r of i){const s=t[r];s&&(this.uniforms[r]=s)}}setWaterCaustics(e,t,i,r=we,s=1.35){this.uniforms.waterCausticEnabled.value=e,this.uniforms.waterCausticLevel.value=t,this.uniforms.uWaterLevel.value=t,this.uniforms.waterCausticIntensity.value=Math.max(0,i),this.uniforms.waterCausticReferenceDepth.value=Math.max(2,r),this.uniforms.waterCausticSunIntensity.value=Math.max(0,s)}setWaterCausticTexture(e,t,i,r,s=we){this.uniforms.waterCausticMap.value=e??this.neutralCausticTexture,this.uniforms.waterCausticMapEnabled.value=!!e,this.uniforms.waterCausticOrigin.value.set(t.x,t.y),this.uniforms.waterCausticExtent.value=Math.max(1,i),this.uniforms.waterCausticResolution.value.set(Math.max(1,r.x),Math.max(1,r.y)),this.uniforms.waterCausticReferenceDepth.value=Math.max(2,s)}dispose(){this.neutralCausticTexture.dispose(),super.dispose()}}const ml=4,pl=220,vl=.12;function gl(){const n=new Ve(new Uint8Array([255,255,255,0]),1,1,re,Pe);return n.colorSpace=et,n.magFilter=N,n.minFilter=N,n.needsUpdate=!0,n}function wl(n){n.flipY=!1,n.colorSpace=et,n.magFilter=N,n.minFilter=N,n.generateMipmaps=!1,n.needsUpdate=!0}function yl(n){const e=n.image,t=e?.naturalWidth||e?.width||0,i=e?.naturalHeight||e?.height||0;if(t<=0||i<=0)return null;const r=t/i;return Number.isFinite(r)&&r>0?r:null}function er(n){return Math.floor(n/R.x)}function xl(n,e){return`${n},${e}`}class Sl{scene;options;distributionSeed;forwardRefractionParticipants;material;baseGeometry=null;texture;textureAspect=null;groups=new Map;anchors=[];lastCullTime=-1/0;lastCullPosition=new A(1/0,0,1/0);fieldDiagnostics={distributionSeed:0,candidateCount:0,acceptedCount:0,minDistance:0,minimumDepth:0,safeSurfaceY:0,depthRange:{min:0,max:0},heightRange:{min:0,max:0},oceanOnly:!0,weightedBy:[]};disposed=!1;constructor(e,t){this.scene=e,this.distributionSeed=t.distributionSeed??ul(),this.forwardRefractionParticipants=t.forwardRefractionParticipants,this.options={...t,distributionSeed:this.distributionSeed};const i=gl();this.texture=i,this.material=new fl(i),typeof document<"u"&&new wr().load(tl,r=>{if(this.disposed){r.dispose();return}wl(r),this.texture=r,this.material.setMap(r),this.updateTextureAspect(r),i.dispose()},void 0,r=>{console.warn("[SeaweedSystem] Failed to load seaweed texture:",r)}),this.material.setWaterLevel(t.waterLevel+Xe),this.material.setWaterCaustics(!0,t.waterLevel+Xe,.8,we,1.35),this.rebuildField()}getMaterial(){return this.material}getTexture(){return this.texture}getShadowAnchors(){return this.anchors}getDistributionSeed(){return this.distributionSeed}setTerrainSeed(e){this.options.terrainSeed===e||this.disposed||(this.options.terrainSeed=e,this.rebuildField())}update(e,t){if(this.disposed||(this.material.setTime(e),!t))return;const i=this.lastCullPosition.distanceToSquared(t.position)>16;if(e-this.lastCullTime<vl&&!i)return;this.lastCullTime=e,this.lastCullPosition.copy(t.position);const r=Math.min(pl,Math.max(128,Math.max(this.options.bounds.maxX-this.options.bounds.minX,this.options.bounds.maxZ-this.options.bounds.minZ)*.5)),s=r*r,a=R.x*.5,o=R.z*.5;for(const l of this.groups.values()){const c=l.position.x+a-t.position.x,h=l.position.z+o-t.position.z;l.visible=c*c+h*h<=s}}setWaterLevel(e){this.material.setWaterLevel(e)}setSun(e,t){this.material.setSun(e,t)}setDayNight(e,t){this.material.setDayNight(e,t)}setSkyAmbient(e){this.material.setSkyAmbient(e)}setVoxelShadowTexture(e,t,i,r=!0){this.material.setVoxelShadowTexture(e,t,i,r)}setVoxelShadowDepthTexture(e,t,i){this.material.setVoxelShadowDepthTexture(e,t,i)}shareVoxelShadowState(e){this.material.shareVoxelShadowState(e)}setWaterCaustics(e,t,i,r=we,s=1.35){this.material.setWaterCaustics(e,t,i,r,s)}setWaterCausticTexture(e,t,i,r,s=we){this.material.setWaterCausticTexture(e,t,i,r,s)}getDiagnostics(){return{...this.fieldDiagnostics,chunkGroups:this.groups.size,visibleChunkGroups:Array.from(this.groups.values()).filter(e=>e.visible).length,instanceCount:this.anchors.length,instanced:!0,texture:"src/assets/textures/seaweed.png",textureAspect:this.textureAspect,castShadow:!0,receiveShadow:!0,renderOrder:1}}destroy(){this.disposed||(this.disposed=!0,this.disposeGroups(),this.baseGeometry?.dispose(),this.material.dispose(),this.texture.dispose())}rebuildField(){this.disposeGroups();const e=hl({bounds:this.options.bounds,terrainSeed:this.options.terrainSeed,worldRadius:this.options.worldRadius,distributionSeed:this.distributionSeed,waterLevel:this.options.waterLevel});this.anchors=e.anchors,this.fieldDiagnostics=e.diagnostics,this.rebuildGroups()}rebuildGroups(){if(!this.baseGeometry||this.disposed)return;const e=new Map;for(const t of this.anchors){const i=xl(er(t.x),er(t.z)),r=e.get(i);r?r.push(t):e.set(i,[t])}for(const[t,i]of e){const[r,s]=t.split(",").map(Number),a=this.baseGeometry.clone(),o=new Float32Array(i.length),l=new ps(o,1);l.setUsage(pa),a.setAttribute("aSeed",l);const c=new Qi(a,this.material,i.length);c.name=`SeaweedBillboards:${t}`,c.castShadow=!0,c.receiveShadow=!0,c.renderOrder=1,c.frustumCulled=!0,c.instanceMatrix.setUsage(pa);const h=new yr,u=new A,d=new A(0,1,0);for(let m=0;m<i.length;m+=1){const p=i[m],v=p.x-r*R.x,x=p.z-s*R.z;o[m]=p.seed,h.quaternion.setFromAxisAngle(d,p.seed*Math.PI*2),h.scale.setScalar(p.height),u.set(.5*p.height,0,.5*p.height).applyQuaternion(h.quaternion),h.position.set(v-u.x,p.rootY,x-u.z),h.updateMatrix(),c.setMatrixAt(m,h.matrix)}c.instanceMatrix.needsUpdate=!0,a.getAttribute("aSeed").needsUpdate=!0,c.computeBoundingSphere(),c.computeBoundingBox();const f=new Q;f.name=`SeaweedChunk:${t}`,f.position.set(r*R.x,0,s*R.z),f.add(c),this.scene.add(f),this.forwardRefractionParticipants?.register(c,{medium:oa(c,this.options.waterLevel+Xe)}),this.groups.set(t,f)}}updateTextureAspect(e){const t=yl(e);if(t===null){console.warn("[SeaweedSystem] Seaweed texture has no usable image dimensions");return}this.baseGeometry&&this.textureAspect!==null&&Math.abs(t-this.textureAspect)<1e-4||(this.textureAspect=t,this.baseGeometry?.dispose(),this.baseGeometry=Wr(this.textureAspect,1,ml),this.disposeGroups(),this.rebuildGroups())}disposeGroups(){for(const e of this.groups.values())this.scene.remove(e),this.forwardRefractionParticipants?.unregisterTree(e),e.traverse(t=>{t instanceof ie&&t.geometry.dispose()});this.groups.clear()}}const zi="/assets/footstep-Fr-5_nTT.mp3",bl="/assets/water_step-BD9XB8Dv.mp3",tr="/assets/underwater-Cqai0VTA.mp3",ir="/assets/block-C1XDNMNZ.mp3",ar="/assets/ocean-B93ceUEo.mp3",Ml=.5,rr=.4,Cl=12,Ur=96,Hr=[1.28,2.73,4.07,5.25];Hr[0];function Tl(n,e=ee+1){const t=e+rr/2;return Math.max(0,Math.min(1,(t-n)/rr))}function Rl(n,e=ee+1){return Tl(n,e)>Ml}function Dl(n,e=Cl,t=Ur){if(!Number.isFinite(n)||!Number.isFinite(e)||!Number.isFinite(t))return 0;const i=Math.max(.001,e),r=Math.max(i,t);if(n>=r)return 0;const s=Math.max(0,n),a=Math.min(1,(i/Math.max(i,s))**2),o=r*.75,l=Math.max(0,Math.min(1,(n-o)/Math.max(.001,r-o))),c=1-l*l;return Math.max(0,Math.min(1,a*c))}function sr(n,e){const t=new Audio(n);return t.loop=!0,t.volume=e,t.preload="auto",t}class kl{src;desired=!1;current=null;vol=1;constructor(e,t){this.src=e,this.vol=t}setVolume(e){this.vol=Math.max(0,Math.min(1,e)),this.current&&(this.current.volume=this.vol)}setDesired(e){const t=this.desired;this.desired=e,e&&!t&&this.ensurePlaying()}ensurePlaying(){if(!this.desired||this.current&&!this.current.paused&&!this.current.ended)return;const e=new Audio(this.src);e.preload="auto",e.loop=!1,e.volume=this.vol,e.onended=()=>{this.current=null,this.desired&&this.ensurePlaying()},this.current=e,e.play().catch(()=>{})}tick(){this.desired&&this.ensurePlaying()}stopImmediate(){if(this.desired=!1,this.current){try{this.current.pause()}catch{}this.current=null}}}class Al{world;input;player;cameraWaterSurfaceY;camera;lastX;lastY;lastZ;lastGrounded=!1;lastTouchingWaterSurface=!1;sfxVolume=.7;footLoop=new kl(zi,this.sfxVolume);underLoop=sr(tr,this.sfxVolume*.8);oceanLoop=sr(ar,this.sfxVolume*.6);waterStepAudioContext=null;waterStepBuffer=null;waterStepBufferPromise=null;waterStepSource=null;waterStepGain=null;waterStepStartedAtContextTime=0;waterStepScheduledStopContextTime=null;waterStepTriggerActive=!1;oceanSampleTimer=0;oceanProximity=0;oceanVolCurrent=0;waterId=Be("water")??5;constructor(e,t,i,r,s){this.world=e,this.input=t,this.player=i,this.camera=r,this.cameraWaterSurfaceY=s;const a=i.getEyePosition();this.lastX=a.x,this.lastY=a.y,this.lastZ=a.z}setVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxVolume=t,this.footLoop.setVolume(t),this.applyWaterStepGainVolume(),this.underLoop.volume=Math.max(0,Math.min(1,t*.8)),this.oceanLoop.volume=Math.max(0,Math.min(1,t*.6))}getVolume(){return this.sfxVolume}primedOnce=!1;tryUnlockOnUserGesture(){if(this.primedOnce)return;this.primedOnce=!0;const e=t=>{try{const i=new Audio(t);i.preload="auto",i.muted=!0,i.play().then(()=>{i.pause(),i.currentTime=0,i.muted=!1}).catch(()=>{})}catch{}};e(zi),this.primeWaterStepWebAudio(),e(tr),e(ar)}setLoopPlaying(e,t){t?e.paused&&e.play().catch(()=>{}):e.paused||e.pause()}playOneShot(e,t){try{const i=new Audio(e);i.volume=Math.max(0,Math.min(1,t)),i.play().catch(()=>{})}catch{}}getWaterStepAudioContext(){if(this.waterStepAudioContext)return this.waterStepAudioContext;try{const e=globalThis,t=globalThis.AudioContext??e.webkitAudioContext;return t?(this.waterStepAudioContext=new t,this.waterStepAudioContext):null}catch{return null}}primeWaterStepWebAudio(){const e=this.getWaterStepAudioContext();e&&(e.state==="suspended"&&e.resume().catch(()=>{}),this.ensureWaterStepBuffer())}ensureWaterStepBuffer(){if(this.waterStepBuffer)return Promise.resolve(this.waterStepBuffer);if(this.waterStepBufferPromise)return this.waterStepBufferPromise;const e=this.getWaterStepAudioContext();return e?(this.waterStepBufferPromise=fetch(bl).then(t=>{if(!t.ok)throw new Error(`Failed to load water-step audio: ${t.status}`);return t.arrayBuffer()}).then(t=>e.decodeAudioData(t)).then(t=>(this.waterStepBuffer=t,t)).catch(()=>null).finally(()=>{this.waterStepBufferPromise=null}),this.waterStepBufferPromise):Promise.resolve(null)}startWaterStepIfIdle(){if(this.waterStepSource)return;const e=this.getWaterStepAudioContext();if(!e)return;e.state==="suspended"&&e.resume().catch(()=>{});const t=this.waterStepBuffer;if(!t){this.ensureWaterStepBuffer().then(i=>{i&&this.waterStepTriggerActive&&!this.waterStepSource&&this.startWaterStepIfIdle()});return}try{const i=e.createGain();i.gain.setValueAtTime(this.sfxVolume,e.currentTime),i.connect(e.destination);const r=e.createBufferSource();r.buffer=t,r.connect(i);const s=e.currentTime;r.onended=()=>{if(this.waterStepSource===r){this.waterStepSource=null,this.waterStepGain=null,this.waterStepScheduledStopContextTime=null;try{r.disconnect()}catch{}try{i.disconnect()}catch{}this.waterStepTriggerActive&&this.startWaterStepIfIdle()}},this.waterStepSource=r,this.waterStepGain=i,this.waterStepStartedAtContextTime=s,this.waterStepScheduledStopContextTime=null,r.start(s)}catch{this.waterStepSource=null,this.waterStepGain=null,this.waterStepScheduledStopContextTime=null}}setWaterStepTriggerActive(e){const t=this.waterStepTriggerActive;if(this.waterStepTriggerActive=e,e){this.waterStepSource&&this.cancelWaterStepScheduledBoundaryStop(),(!t||!this.waterStepSource)&&this.startWaterStepIfIdle();return}t&&this.armWaterStepInactivityBoundary()}getWaterStepPlaybackOffsetSeconds(){const e=this.waterStepAudioContext;return!e||!this.waterStepSource?0:Math.max(0,e.currentTime-this.waterStepStartedAtContextTime)}armWaterStepInactivityBoundary(){const e=this.waterStepAudioContext,t=this.waterStepSource,i=this.waterStepGain,r=this.waterStepBuffer;if(!e||!t||!i||!r)return;const s=this.getWaterStepPlaybackOffsetSeconds();let a=null;for(const u of Hr)if(s<=u){a=u;break}if(a===null||a>=r.duration){this.waterStepScheduledStopContextTime=null;return}const o=this.waterStepStartedAtContextTime+a;this.waterStepScheduledStopContextTime=o;const l=.004,c=e.currentTime,h=Math.max(c,o-l);try{i.gain.cancelScheduledValues(c),i.gain.setValueAtTime(this.sfxVolume,c),i.gain.setValueAtTime(this.sfxVolume,h),i.gain.linearRampToValueAtTime(0,o),t.stop(Math.max(c,o))}catch{}}cancelWaterStepScheduledBoundaryStop(){const e=this.waterStepAudioContext,t=this.waterStepSource,i=this.waterStepGain,r=this.waterStepBuffer;if(!e||!t||!i||!r){this.waterStepScheduledStopContextTime=null;return}const s=e.currentTime;try{if(i.gain.cancelScheduledValues(s),i.gain.setValueAtTime(this.sfxVolume,s),this.waterStepScheduledStopContextTime!==null){const a=this.waterStepStartedAtContextTime+r.duration;a>s&&t.stop(a)}}catch{}this.waterStepScheduledStopContextTime=null}applyWaterStepGainVolume(){const e=this.waterStepAudioContext,t=this.waterStepGain;if(!e||!t)return;const i=e.currentTime;try{t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(this.sfxVolume,i);const r=this.waterStepScheduledStopContextTime;if(r!==null&&r>i){const s=Math.max(i,r-.004);t.gain.setValueAtTime(this.sfxVolume,s),t.gain.linearRampToValueAtTime(0,r)}}catch{}}stopWaterStepImmediately(){const e=this.waterStepAudioContext,t=this.waterStepSource,i=this.waterStepGain;if(this.waterStepSource=null,this.waterStepGain=null,this.waterStepScheduledStopContextTime=null,!!t){t.onended=null;try{if(e&&i){const r=e.currentTime;i.gain.cancelScheduledValues(r),i.gain.setValueAtTime(0,r),t.stop(r)}else t.stop()}catch{}try{t.disconnect()}catch{}try{i?.disconnect()}catch{}}}playBreak(){this.playOneShot(ir,this.sfxVolume)}playPlace(){this.playOneShot(ir,this.sfxVolume)}update(e,t,i){if(t||!i){this.footLoop.setDesired(!1),this.setLoopPlaying(this.underLoop,!1),this.setLoopPlaying(this.oceanLoop,!1);const b=this.player.getEyePosition();this.lastX=b.x,this.lastY=b.y,this.lastZ=b.z,this.lastGrounded=this.player.isGrounded(),this.lastTouchingWaterSurface=this.isTouchingWaterSurface(),this.setWaterStepTriggerActive(!1);return}const r=this.player.getEyePosition(),s=r.x-this.lastX,a=r.z-this.lastZ,o=r.y-this.lastY,l=e>0?Math.hypot(s,a)/e:0,c=this.player.isGrounded(),h=this.isTouchingWaterSurface(),u=this.player.isUnderwater?.()??!1,d=h||u,f=this.isCameraUnderwater(),m=this.input.getMoveInput?.()||{x:0,z:0},p=Math.hypot(m.x,m.z)>.05,v=c&&(l>.2||p),x=this.lastTouchingWaterSurface&&!h&&o>.02,y=!this.lastTouchingWaterSurface&&h&&o<-.02,w=!u&&(h&&p||(x||y));this.setWaterStepTriggerActive(w),f?(this.setLoopPlaying(this.underLoop,!0),this.footLoop.setDesired(!1)):w?(this.setLoopPlaying(this.underLoop,!1),this.footLoop.setDesired(!1)):v?(this.setLoopPlaying(this.underLoop,!1),this.footLoop.setDesired(!0)):(this.setLoopPlaying(this.underLoop,!1),this.footLoop.setDesired(!1)),this.footLoop.tick(),this.setLoopPlaying(this.oceanLoop,!0),this.updateOceanVolume(e,f),!this.lastGrounded&&c&&o<-.02&&!f&&!d&&this.playOneShot(zi,this.sfxVolume),this.lastX=r.x,this.lastY=r.y,this.lastZ=r.z,this.lastGrounded=c,this.lastTouchingWaterSurface=h}updateOceanVolume(e,t){this.oceanSampleTimer-=e,this.oceanSampleTimer<=0&&(this.oceanSampleTimer=.25,this.oceanProximity=this.sampleOceanProximity());let r=Math.max(0,Math.min(1,this.sfxVolume*.6))*this.oceanProximity;t&&(r*=.35);const s=1-Math.pow(.001,e);r<=0?this.oceanVolCurrent=0:this.oceanVolCurrent+=(r-this.oceanVolCurrent)*s,this.oceanLoop.volume=Math.max(0,Math.min(1,this.oceanVolCurrent))}sampleOceanProximity(){const e=this.player.getEyePosition(),t=e.x,i=e.z,r=Ur,s=1,a=36,o=48,l=1,c=.7;let h=r;for(let u=0;u<a;u++){const d=u/a*Math.PI*2,f=Math.cos(d),m=Math.sin(d);let p=null;for(let S=s;S<=r;S+=s){const w=Math.floor(t+f*S),b=Math.floor(i+m*S);if(this.world.getBlock(w,ee,b)===this.waterId){p=S;break}}if(p===null)continue;let v=0,x=0;for(let S=p;S<=Math.min(p+o,r);S+=l){const w=Math.floor(t+f*S),b=Math.floor(i+m*S),D=this.world.getBlock(w,ee,b);v++,D===this.waterId&&x++}(v>0?x/v:0)>=c&&p<h&&(h=p)}return Number.isFinite(h)?Dl(h):0}isTouchingWaterSurface(){const e=this.player.getEyeHeight(),t=this.player.getWidth()/2,i=this.player.getEyePosition(),r=i.y-e,s=i.x-t,a=i.x+t,o=i.z-t,l=i.z+t,c=r;if(r+this.player.getHeight()<=ee||c>=ee+1)return!1;const u=Math.floor(s),d=Math.floor(a),f=Math.floor(o),m=Math.floor(l);for(let p=f;p<=m;p++)for(let v=u;v<=d;v++)if(this.world.getBlock(v,ee,p)===this.waterId)return!0;return!1}isCameraUnderwater(){const e=this.cameraWaterSurfaceY?.(),t=typeof e=="number"&&Number.isFinite(e)?e:ee+1;return Rl(this.camera.position.y,t)}dispose(){try{this.footLoop.stopImmediate()}catch{}this.stopWaterStepImmediately();try{this.underLoop.pause()}catch{}try{this.oceanLoop.pause()}catch{}if(this.waterStepAudioContext){try{this.waterStepAudioContext.close()}catch{}this.waterStepAudioContext=null}}}const El=.2,Pl=.04,Bt=new A;function Fl(n,e,t,i,r,s,a,o,l){let c=0,h=t;const u=[n.x,n.y,n.z],d=[e.x,e.y,e.z],f=[i,r,s],m=[a,o,l];for(let p=0;p<3;p+=1){const v=d[p],x=u[p];if(Math.abs(v)<=1e-9){if(x<f[p]||x>m[p])return null;continue}let y=(f[p]-x)/v,g=(m[p]-x)/v;if(y>g&&([y,g]=[g,y]),c=Math.max(c,y),h=Math.min(h,g),c>h)return null}return h>=0&&c<=t?Math.max(0,c):null}function or(n,e,t,i=El,r=Pl,s=Number.NEGATIVE_INFINITY){t.y=Math.max(t.y,s),Bt.subVectors(t,e);const a=Bt.length();if(a<=1e-6)return t.copy(e);Bt.multiplyScalar(1/a);const o=Math.max(0,i),l=Math.floor(Math.min(e.x,t.x)-o),c=Math.floor(Math.min(e.y,t.y)-o),h=Math.floor(Math.min(e.z,t.z)-o),u=Math.floor(Math.max(e.x,t.x)+o),d=Math.floor(Math.max(e.y,t.y)+o),f=Math.floor(Math.max(e.z,t.z)+o);let m=a;for(let p=c;p<=d;p+=1)for(let v=h;v<=f;v+=1)for(let x=l;x<=u;x+=1){if(!n.isBlockSolid(x,p,v))continue;const y=Fl(e,Bt,a,x-o,p-o,v-o,x+1+o,p+1+o,v+1+o);y!==null&&(m=Math.min(m,Math.max(0,y-Math.max(0,r))))}return m<a&&t.copy(e).addScaledVector(Bt,m),t}const ti=.75,nr=.65,Bl={Otherys:1297695570,Solvaris:1397705814,Eryndor:1163024718,Vespera:1447383888,Kaelith:1262568780};function zl(n){let e=n|0;const t=()=>{e=e+1831565813|0;let r=e;return r=Math.imul(r^r>>>15,r|1),r^=r+Math.imul(r^r>>>7,r|61),((r^r>>>14)>>>0)/4294967296},i=(r,s,a,o=.08)=>{const l=r.getImageData(0,0,s,a),c=l.data;for(let h=0;h<c.length;h+=4){const u=(t()-.5)*o*255;c[h]=Math.min(255,Math.max(0,c[h]+u)),c[h+1]=Math.min(255,Math.max(0,c[h+1]+u)),c[h+2]=Math.min(255,Math.max(0,c[h+2]+u))}r.putImageData(l,0,0)};return{create(r,s,a){const o=document.createElement("canvas");o.width=r,o.height=s;const l=o.getContext("2d");if(!l)throw new Error("Player character textures require a 2D canvas context");a(l,i);const c=new Ji(o);return c.colorSpace=et,c.magFilter=N,c.minFilter=N,c.generateMipmaps=!1,c.wrapS=Ce,c.wrapT=Ce,c}}}function Il(n){const e=zl(Bl[n]);switch(n){case"Otherys":return Ll(e);case"Solvaris":return Wl(e);case"Eryndor":return Vl(e);case"Vespera":return _l(e);case"Kaelith":return Ul(e)}}function Ll(n){const e=n.create(16,16,(a,o)=>{a.fillStyle="#2b1d16",a.fillRect(0,0,16,16),a.fillStyle="#3a271e",a.fillRect(2,2,6,6),a.fillRect(9,8,5,5),o(a,16,16,.06)}),t=n.create(16,16,(a,o)=>{a.fillStyle="#d49b74",a.fillRect(0,0,16,16),a.fillStyle="#2b1d16",a.fillRect(0,0,16,4),a.fillRect(0,4,2,4),a.fillRect(14,4,2,4),a.fillStyle="#ffffff",a.fillRect(3,6,3,2),a.fillStyle="#3e2723",a.fillRect(4,6,2,2),a.fillStyle="#00f0ff",a.fillRect(10,5,4,4),a.fillStyle="#ffffff",a.fillRect(11,6,2,2),a.fillStyle="#b57954",a.fillRect(7,8,2,2),a.fillStyle="#533624",a.fillRect(5,11,6,1),a.fillRect(6,12,4,2),o(a,16,16,.04)}),i=n.create(16,24,(a,o)=>{a.fillStyle="#1e293b",a.fillRect(0,0,16,24),a.fillStyle="#5c3a21",a.fillRect(0,0,16,4),a.fillRect(2,4,3,16),a.fillRect(11,4,3,16),a.fillRect(0,16,16,4),a.fillStyle="#00f0ff",a.fillRect(6,8,4,4),a.fillStyle="#ffffff",a.fillRect(7,9,2,2),o(a,16,24,.05)}),r=n.create(8,24,(a,o)=>{a.fillStyle="#1e293b",a.fillRect(0,0,8,6),a.fillStyle="#d49b74",a.fillRect(0,6,8,6),a.fillStyle="#475569",a.fillRect(0,12,8,8),a.fillStyle="#1e1b18",a.fillRect(0,20,8,4),o(a,8,24,.05)}),s=n.create(8,24,(a,o)=>{a.fillStyle="#334155",a.fillRect(0,0,8,14),a.fillStyle="#475569",a.fillRect(1,6,6,4),a.fillStyle="#3e2723",a.fillRect(0,14,8,10),o(a,8,24,.06)});return{face:t,hair:e,torso:i,arm:r,pants:s}}function Wl(n){const e=n.create(16,16,(a,o)=>{a.fillStyle="#94a3b8",a.fillRect(0,0,16,16),a.fillStyle="#e2e8f0",a.fillRect(2,2,12,12),a.fillStyle="#f8fafc",a.fillRect(4,4,6,6),a.fillStyle="#64748b",a.fillRect(0,12,16,4),o(a,16,16,.05)}),t=n.create(16,16,(a,o)=>{a.fillStyle="#dcd3cb",a.fillRect(0,0,16,16),a.fillStyle="#cbd5e1",a.fillRect(0,0,16,4),a.fillStyle="#94a3b8",a.fillRect(0,3,2,3),a.fillRect(14,3,2,3),a.fillRect(4,3,2,2),a.fillRect(10,3,2,2),a.fillStyle="#ffffff",a.fillRect(3,6,3,2),a.fillStyle="#f59e0b",a.fillRect(4,6,2,2),a.fillStyle="#fffbeb",a.fillRect(4,6,1,1),a.fillStyle="#06b6d4",a.fillRect(10,5,4,4),a.fillStyle="#ffffff",a.fillRect(11,6,2,2),a.fillStyle="#818cf8",a.fillRect(12,9,2,4),a.fillRect(10,11,2,2),a.fillStyle="#b7a89b",a.fillRect(7,8,2,2),a.fillStyle="#475569",a.fillRect(6,12,4,1),o(a,16,16,.04)}),i=n.create(16,24,(a,o)=>{a.fillStyle="#0f172a",a.fillRect(0,0,16,24),a.fillStyle="#f59e0b",a.fillRect(0,0,16,2),a.fillRect(1,2,2,18),a.fillRect(13,2,2,18),a.fillRect(0,16,16,2),a.fillStyle="#312e81",a.fillRect(3,4,10,12),a.fillStyle="#8b5cf6",a.fillRect(6,7,4,5),a.fillStyle="#00f0ff",a.fillRect(7,8,2,3),a.fillStyle="#ffffff",a.fillRect(7,9,2,1),a.fillStyle="#1e293b",a.fillRect(2,18,12,6),a.fillStyle="#fbbf24",a.fillRect(7,18,2,6),o(a,16,24,.05)}),r=n.create(8,24,(a,o)=>{a.fillStyle="#1e1b4b",a.fillRect(0,0,8,6),a.fillStyle="#f59e0b",a.fillRect(0,5,8,1),a.fillStyle="#dcd3cb",a.fillRect(0,6,8,6),a.fillStyle="#00f0ff",a.fillRect(3,7,2,4),a.fillStyle="#0f172a",a.fillRect(0,12,8,8),a.fillStyle="#f59e0b",a.fillRect(1,14,6,2),a.fillStyle="#18181b",a.fillRect(0,20,8,4),o(a,8,24,.05)}),s=n.create(8,24,(a,o)=>{a.fillStyle="#1e293b",a.fillRect(0,0,8,12),a.fillStyle="#312e81",a.fillRect(2,2,4,8),a.fillStyle="#f59e0b",a.fillRect(0,11,8,3),a.fillStyle="#00f0ff",a.fillRect(3,12,2,1),a.fillStyle="#0f172a",a.fillRect(0,14,8,10),a.fillStyle="#475569",a.fillRect(1,15,6,6),a.fillStyle="#f59e0b",a.fillRect(0,22,8,2),o(a,8,24,.05)});return{face:t,hair:e,torso:i,arm:r,pants:s}}function Vl(n){const e=n.create(16,16,(a,o)=>{a.fillStyle="#b9c6d3",a.fillRect(0,0,16,16),a.fillStyle="#e5edf3",a.fillRect(1,1,5,5),a.fillRect(9,3,6,4),a.fillRect(3,10,4,5),a.fillStyle="#7d8b9b",a.fillRect(0,7,5,3),a.fillRect(11,10,5,4),o(a,16,16,.045)}),t=n.create(16,16,(a,o)=>{a.fillStyle="#b9785f",a.fillRect(0,0,16,16),a.fillStyle="#c98d70",a.fillRect(2,4,12,7),a.fillStyle="#c8d3df",a.fillRect(0,0,16,3),a.fillRect(0,3,2,8),a.fillRect(14,3,2,8),a.fillStyle="#8d9bac",a.fillRect(2,1,4,2),a.fillRect(10,0,4,2),a.fillStyle="#f5e6c8",a.fillRect(3,6,3,2),a.fillStyle="#d6a52e",a.fillRect(4,6,1,2),a.fillStyle="#2b123e",a.fillRect(10,5,4,4),a.fillStyle="#b86cff",a.fillRect(11,6,2,2),a.fillStyle="#f5e8ff",a.fillRect(12,6,1,1),a.fillStyle="#7d3bb5",a.fillRect(12,9,1,3),a.fillRect(11,11,2,1),a.fillStyle="#9f604f",a.fillRect(7,8,2,2),a.fillStyle="#dbe4eb",a.fillRect(4,10,8,2),a.fillRect(3,12,10,2),a.fillRect(5,14,6,2),a.fillStyle="#9eacba",a.fillRect(4,12,2,1),a.fillRect(10,13,2,1),o(a,16,16,.035)}),i=n.create(16,24,(a,o)=>{a.fillStyle="#17112c",a.fillRect(0,0,16,24),a.fillStyle="#241746",a.fillRect(2,0,12,24),a.fillStyle="#0e2638",a.fillRect(0,0,16,4),a.fillStyle="#2c6b78",a.fillRect(0,3,16,1),a.fillStyle="#a97825",a.fillRect(2,4,3,3),a.fillRect(4,7,3,4),a.fillRect(6,11,3,4),a.fillRect(8,15,3,5),a.fillStyle="#e3bd54",a.fillRect(3,4,1,3),a.fillRect(7,12,1,3),a.fillStyle="#24150f",a.fillRect(0,18,16,3),a.fillStyle="#77531e",a.fillRect(6,18,4,3),a.fillStyle="#62e6dc",a.fillRect(10,7,2,2),a.fillRect(9,9,4,1),a.fillRect(10,10,2,3),a.fillStyle="#d7fffb",a.fillRect(10,9,1,1),a.fillStyle="#8063bf",a.fillRect(3,13,1,1),a.fillRect(13,5,1,1),a.fillRect(12,15,1,1),a.fillRect(4,22,1,1),o(a,16,24,.035)}),r=n.create(8,24,(a,o)=>{a.fillStyle="#21163f",a.fillRect(0,0,8,14),a.fillStyle="#30205a",a.fillRect(1,2,6,8),a.fillStyle="#2d7e83",a.fillRect(0,12,8,3),a.fillStyle="#73e4da",a.fillRect(1,13,2,1),a.fillRect(5,13,2,1),a.fillStyle="#2a201f",a.fillRect(0,15,8,9),a.fillStyle="#6f4b38",a.fillRect(1,16,6,5),a.fillStyle="#b78a3e",a.fillRect(0,20,8,2),o(a,8,24,.04)}),s=n.create(8,24,(a,o)=>{a.fillStyle="#161129",a.fillRect(0,0,8,15),a.fillStyle="#2b1d4a",a.fillRect(1,2,6,10),a.fillStyle="#876329",a.fillRect(0,12,8,2),a.fillStyle="#16151b",a.fillRect(0,15,8,9),a.fillStyle="#3b3349",a.fillRect(1,16,6,3),a.fillStyle="#4c8f91",a.fillRect(0,20,8,1),o(a,8,24,.045)});return{face:t,hair:e,torso:i,arm:r,pants:s}}function _l(n){const e=n.create(16,16,(a,o)=>{a.fillStyle="#2e1065",a.fillRect(0,0,16,16),a.fillStyle="#581c87",a.fillRect(2,2,12,12),a.fillStyle="#86198f",a.fillRect(4,4,8,8),a.fillStyle="#c026d3",a.fillRect(5,5,6,6),a.fillStyle="#f472b6",a.fillRect(2,6,2,8),a.fillRect(12,6,2,8),o(a,16,16,.05)}),t=n.create(16,16,(a,o)=>{a.fillStyle="#fce7f3",a.fillRect(0,0,16,16),a.fillStyle="#3b0764",a.fillRect(0,0,16,3),a.fillStyle="#a21caf",a.fillRect(0,2,4,3),a.fillRect(12,2,4,3),a.fillRect(4,2,2,2),a.fillRect(10,2,2,2),a.fillStyle="#f472b6",a.fillRect(2,1,3,1),a.fillRect(11,1,3,1),a.fillStyle="#2e1065",a.fillRect(2,5,4,1),a.fillRect(10,5,4,1),a.fillStyle="#ffffff",a.fillRect(2,6,4,3),a.fillStyle="#ec4899",a.fillRect(3,6,2,2),a.fillStyle="#fb7185",a.fillRect(4,6,1,1),a.fillStyle="#ffffff",a.fillRect(3,6,1,1),a.fillStyle="#ffffff",a.fillRect(10,6,4,3),a.fillStyle="#8b5cf6",a.fillRect(11,6,2,2),a.fillStyle="#c084fc",a.fillRect(12,6,1,1),a.fillStyle="#ffffff",a.fillRect(11,6,1,1),a.fillStyle="#e879f9",a.fillRect(13,9,2,3),a.fillRect(11,10,2,1),a.fillStyle="#f43f5e",a.fillRect(12,11,2,2),a.fillStyle="#fbcfe8",a.fillRect(2,9,2,1),a.fillStyle="#e11d48",a.fillRect(6,12,4,1),a.fillStyle="#fda4af",a.fillRect(7,12,2,1),o(a,16,16,.03)}),i=n.create(16,24,(a,o)=>{a.fillStyle="#0f051d",a.fillRect(0,0,16,24),a.fillStyle="#fce7f3",a.fillRect(4,0,8,4),a.fillStyle="#f43f5e",a.fillRect(2,4,12,2),a.fillRect(1,6,3,12),a.fillRect(12,6,3,12),a.fillStyle="#fbbf24",a.fillRect(2,5,12,1),a.fillStyle="#4c0519",a.fillRect(4,6,8,11),a.fillStyle="#ec4899",a.fillRect(6,7,4,4),a.fillStyle="#f43f5e",a.fillRect(7,8,2,3),a.fillStyle="#ffffff",a.fillRect(7,8,1,1),a.fillStyle="#fbbf24",a.fillRect(0,17,16,2),a.fillStyle="#be123c",a.fillRect(3,19,10,5),a.fillStyle="#f472b6",a.fillRect(7,18,2,6),o(a,16,24,.04)}),r=n.create(8,24,(a,o)=>{a.fillStyle="#fce7f3",a.fillRect(0,0,8,8),a.fillStyle="#fbbf24",a.fillRect(0,4,8,1),a.fillStyle="#ec4899",a.fillRect(2,5,2,3),a.fillRect(4,7,2,2),a.fillStyle="#0f051d",a.fillRect(0,9,8,11),a.fillStyle="#f43f5e",a.fillRect(1,11,6,2),a.fillStyle="#fbbf24",a.fillRect(0,15,8,1),a.fillStyle="#1c1917",a.fillRect(0,20,8,4),a.fillStyle="#ec4899",a.fillRect(2,21,4,1),o(a,8,24,.04)}),s=n.create(8,24,(a,o)=>{a.fillStyle="#0f051d",a.fillRect(0,0,8,6),a.fillStyle="#831843",a.fillRect(2,1,4,5),a.fillStyle="#fce7f3",a.fillRect(0,6,8,3),a.fillStyle="#fbbf24",a.fillRect(0,8,8,1),a.fillStyle="#f43f5e",a.fillRect(0,9,8,4),a.fillStyle="#ec4899",a.fillRect(3,10,2,2),a.fillStyle="#1e1035",a.fillRect(0,13,8,11),a.fillStyle="#fbbf24",a.fillRect(1,14,6,8),a.fillStyle="#4c0519",a.fillRect(2,15,4,6),a.fillStyle="#f43f5e",a.fillRect(0,22,8,2),o(a,8,24,.04)});return{face:t,hair:e,torso:i,arm:r,pants:s}}function Ul(n){const e=n.create(16,16,(a,o)=>{a.fillStyle="#090d16",a.fillRect(0,0,16,16),a.fillStyle="#334155",a.fillRect(2,2,12,12),a.fillStyle="#94a3b8",a.fillRect(3,3,10,10),a.fillStyle="#e2e8f0",a.fillRect(5,4,6,8),a.fillStyle="#06b6d4",a.fillRect(1,5,2,9),a.fillRect(13,5,2,9),a.fillStyle="#38bdf8",a.fillRect(2,7,1,7),o(a,16,16,.05)}),t=n.create(16,16,(a,o)=>{a.fillStyle="#eef2f6",a.fillRect(0,0,16,16),a.fillStyle="#0f172a",a.fillRect(0,0,16,2),a.fillStyle="#cbd5e1",a.fillRect(0,1,16,2),a.fillStyle="#06b6d4",a.fillRect(1,2,3,2),a.fillRect(12,2,3,2),a.fillRect(4,2,2,2),a.fillRect(10,2,2,2),a.fillStyle="#f8fafc",a.fillRect(2,0,4,2),a.fillRect(10,0,4,2),a.fillStyle="#0b1329",a.fillRect(2,5,4,1),a.fillRect(10,5,4,1),a.fillStyle="#ffffff",a.fillRect(2,6,4,3),a.fillStyle="#f59e0b",a.fillRect(3,6,2,2),a.fillStyle="#fde047",a.fillRect(4,6,1,1),a.fillStyle="#ffffff",a.fillRect(3,6,1,1),a.fillStyle="#ffffff",a.fillRect(10,6,4,3),a.fillStyle="#06b6d4",a.fillRect(11,6,2,2),a.fillStyle="#67e8f9",a.fillRect(12,6,1,1),a.fillStyle="#ffffff",a.fillRect(11,6,1,1),a.fillStyle="#0284c7",a.fillRect(2,9,2,3),a.fillRect(4,10,2,1),a.fillStyle="#38bdf8",a.fillRect(3,11,2,2),a.fillStyle="#c7d2fe",a.fillRect(12,9,2,1),a.fillStyle="#334155",a.fillRect(6,12,4,1),a.fillStyle="#38bdf8",a.fillRect(7,12,2,1),o(a,16,16,.03)}),i=n.create(16,24,(a,o)=>{a.fillStyle="#090d16",a.fillRect(0,0,16,24),a.fillStyle="#eef2f6",a.fillRect(5,0,6,3),a.fillStyle="#f59e0b",a.fillRect(2,3,12,2),a.fillRect(1,5,3,12),a.fillRect(12,5,3,12),a.fillStyle="#fbbf24",a.fillRect(3,4,10,1),a.fillStyle="#042f2e",a.fillRect(4,5,8,12),a.fillStyle="#0891b2",a.fillRect(6,6,4,5),a.fillStyle="#38bdf8",a.fillRect(7,7,2,3),a.fillStyle="#ffffff",a.fillRect(7,7,1,1),a.fillStyle="#f59e0b",a.fillRect(0,17,16,2),a.fillStyle="#0e7490",a.fillRect(3,19,10,5),a.fillStyle="#38bdf8",a.fillRect(7,18,2,6),o(a,16,24,.04)}),r=n.create(8,24,(a,o)=>{a.fillStyle="#eef2f6",a.fillRect(0,0,8,7),a.fillStyle="#f59e0b",a.fillRect(0,4,8,1),a.fillStyle="#06b6d4",a.fillRect(2,5,2,3),a.fillRect(4,6,2,2),a.fillStyle="#090d16",a.fillRect(0,8,8,12),a.fillStyle="#0891b2",a.fillRect(1,10,6,2),a.fillStyle="#f59e0b",a.fillRect(0,14,8,1),a.fillStyle="#1e293b",a.fillRect(0,20,8,4),a.fillStyle="#38bdf8",a.fillRect(2,21,4,1),o(a,8,24,.04)}),s=n.create(8,24,(a,o)=>{a.fillStyle="#090d16",a.fillRect(0,0,8,6),a.fillStyle="#134e4a",a.fillRect(2,1,4,5),a.fillStyle="#eef2f6",a.fillRect(0,6,8,3),a.fillStyle="#f59e0b",a.fillRect(0,8,8,1),a.fillStyle="#0891b2",a.fillRect(0,9,8,4),a.fillStyle="#38bdf8",a.fillRect(3,10,2,2),a.fillStyle="#0f172a",a.fillRect(0,13,8,11),a.fillStyle="#f59e0b",a.fillRect(1,14,6,8),a.fillStyle="#042f2e",a.fillRect(2,15,4,6),a.fillStyle="#38bdf8",a.fillRect(0,22,8,2),o(a,8,24,.04)});return{face:t,hair:e,torso:i,arm:r,pants:s}}function zt(n,e,t){return{hair:n.createTexturedMaterial(e.hair,t.hair),face:n.createTexturedMaterial(e.face,t.face),torso:n.createTexturedMaterial(e.torso,t.torso),arm:n.createTexturedMaterial(e.arm,t.arm),pants:n.createTexturedMaterial(e.pants,t.pants)}}function lr(){}function Hl(n,e){const t=Il(n);if(n==="Otherys"){const c=zt(e,t,{hair:{roughness:.8},face:{roughness:.8},torso:{roughness:.8},arm:{roughness:.8},pants:{roughness:.8}}),h=e.createMaterial({color:4073251,roughness:.8}),u=e.createMaterial({color:4674921,metalness:.6,roughness:.4});return u.polygonOffset=!0,u.polygonOffsetFactor=-1,u.polygonOffsetUnits=-1,{materials:c,buildHeadAccessories:d=>{const f=d.createMesh(new E(.53,.15,.53),h,"HairBand");return f.position.y=.35,f},buildBackpack:d=>{const f=d.createMesh(new E(.38,.45,.15),h,"Backpack");return f.position.set(0,1.05,-.19),f},decorateLeftArm:(d,f)=>{const m=d.createMesh(new E(.29,.2,.29),u,"LeftPauldron");m.position.set(-.02,.02,0),f.add(m)},decorateRightArm:lr,decorateLeg:lr}}if(n==="Solvaris"){const c=zt(e,t,{hair:{roughness:.6},face:{roughness:.7},torso:{roughness:.4,metalness:.3},arm:{roughness:.4,metalness:.3},pants:{roughness:.5,metalness:.3}}),h=e.createMaterial({color:16096779,metalness:.85,roughness:.25}),u=e.createMaterial({color:988970,metalness:.7,roughness:.3}),d=e.createMaterial({color:61695,emissive:35020,emissiveIntensity:.7,roughness:.1,metalness:.1}),f=e.createMaterial({color:11032055,emissive:7020968,emissiveIntensity:.6,roughness:.2});return{materials:c,buildHeadAccessories:m=>{const p=new Q;p.name="HairBand";const v=m.createMesh(new E(.53,.1,.53),h,"CrownBand");v.position.y=.38,p.add(v);const x=m.createMesh(new E(.12,.14,.08),d,"CrestGem");x.position.set(0,.44,.26),p.add(x);const y=m.createMesh(new E(.06,.18,.16),u,"LeftHorn");y.position.set(.25,.48,-.05),y.rotation.set(-.3,0,.3),p.add(y);const g=m.createMesh(new E(.06,.18,.16),u,"RightHorn");return g.position.set(-.25,.48,-.05),g.rotation.set(-.3,0,-.3),p.add(g),p},buildBackpack:m=>{const p=new Q;p.name="Backpack";const v=m.createMesh(new E(.32,.42,.12),u,"RelicHousing");v.position.set(0,1.05,-.18),p.add(v);const x=m.createMesh(new E(.35,.18,.14),h,"RelicGoldStruts");x.position.set(0,1.05,-.18),p.add(x);const y=m.createMesh(new E(.14,.22,.08),d,"RelicCoreCrystal");return y.position.set(0,1.05,-.23),p.add(y),p},decorateLeftArm:(m,p)=>{const v=m.createMesh(new E(.34,.22,.34),u,"LeftPauldron");v.position.set(.04,.05,0),p.add(v);const x=m.createMesh(new E(.36,.08,.36),h,"LeftPauldronGoldTrim");x.position.set(.04,.08,0),p.add(x);const y=m.createMesh(new E(.1,.16,.1),f,"LeftPauldronCrystal");y.position.set(.08,.2,0),p.add(y)},decorateRightArm:(m,p)=>{const v=m.createMesh(new E(.28,.14,.28),h,"RightPauldron");v.position.set(-.01,.04,0),p.add(v)},decorateLeg:(m,p)=>{const v=m.createMesh(new E(.27,.14,.08),h,"KneePlate");v.position.set(0,-.25,.11),p.add(v)}}}if(n==="Eryndor"){const c=zt(e,t,{hair:{roughness:.8},face:{roughness:.82},torso:{roughness:.78},arm:{roughness:.8},pants:{roughness:.85}}),h=e.createMaterial({color:2167615,roughness:.9}),u=e.createMaterial({color:1051168,roughness:.95}),d=e.createMaterial({color:7401702,emissive:1805192,emissiveIntensity:.85,roughness:.35}),f=e.createMaterial({color:11757055,emissive:7021480,emissiveIntensity:1,roughness:.28}),m=e.createMaterial({color:12093746,metalness:.65,roughness:.32}),p=e.createMaterial({color:12043472,metalness:.25,roughness:.58}),v=e.createMaterial({color:3151948,roughness:.78}),x=e.createMaterial({color:13352860,roughness:.95}),y=e.createMaterial({color:1708594,roughness:.9}),g=(S,w,b,D,F,B,T,M,I,W)=>{const C=S.createMesh(new E(b,D,F),B,T);return C.position.set(M,I,W),w.add(C),C};return{materials:c,decorateHead:(S,w)=>{const b=new Q;b.name="BeardRoot",b.position.set(0,-.12,.276),w.add(b),g(S,b,.34,.13,.07,p,"BeardUpper",0,0,0),g(S,b,.26,.11,.09,p,"BeardMiddleUpper",0,-.105,.003),g(S,b,.16,.1,.11,p,"BeardMiddleLower",0,-.195,.006),g(S,b,.08,.07,.13,p,"BeardTip",0,-.265,.009)},buildHeadAccessories:S=>{const w=new Q;w.name="HairBand",w.position.set(0,.48,0);const b=S.createMesh(new E(.74,.075,.7),u,"WizardHatBrim");b.rotation.y=k.degToRad(4),w.add(b),g(S,w,.54,.16,.52,h,"WizardHatLower",-.015,.105,0),g(S,w,.43,.17,.43,h,"WizardHatMiddleLower",.025,.255,-.01),g(S,w,.34,.16,.34,h,"WizardHatMiddleUpper",-.005,.405,-.015),g(S,w,.26,.15,.27,h,"WizardHatUpper",.045,.535,-.015);const D=g(S,w,.19,.14,.22,h,"WizardHatBentTip",.105,.645,.005);D.rotation.z=k.degToRad(-17);const F=g(S,w,.12,.12,.18,h,"WizardHatTip",.165,.74,.02);F.rotation.z=k.degToRad(-27),g(S,w,.57,.058,.55,m,"WizardHatBand",-.01,.137,0),g(S,w,.09,.09,.08,d,"WizardHatFrontRune",-.01,.15,.294);const B=g(S,w,.09,.18,.09,f,"WizardHatCrystal",-.3,.18,.02);return B.rotation.z=k.degToRad(18),g(S,w,.05,.1,.05,d,"WizardHatCrystalRune",-.355,.25,.02),w},buildBackpack:S=>{const w=new Q;w.name="Backpack";const b=S.createMesh(new E(.38,.45,.15),v,"SpellbookPack");return b.position.set(0,1.05,-.19),w.add(b),g(S,b,.32,.37,.035,x,"SpellbookPages",0,0,-.09),g(S,b,.06,.4,.04,m,"SpellbookLeftRail",-.14,0,-.115),g(S,b,.06,.4,.04,m,"SpellbookRightRail",.14,0,-.115),g(S,b,.13,.13,.04,d,"SpellbookRune",0,0,-.12),w},decorateTorso:(S,w)=>{const b=g(S,w,.34,.48,.035,y,"RobeTabard",0,-.36,.145);b.rotation.z=k.degToRad(2),g(S,w,.06,.26,.042,m,"RobeGoldSash",-.11,-.34,.166),g(S,w,.06,.16,.042,d,"RobeRuneSash",.105,-.35,.166),g(S,w,.12,.1,.05,m,"RobeClasp",0,.03,.16),g(S,w,.06,.06,.06,d,"RobeClaspRune",0,.03,.185),g(S,w,.22,.1,.32,u,"RightMantle",.2,.28,0),g(S,w,.18,.07,.3,m,"LeftMantle",-.2,.25,0)},decorateLeftArm:(S,w)=>{const b=S.createMesh(new E(.31,.16,.31),u,"LeftCrystalPauldron");b.position.set(.01,.02,0),w.add(b);const D=g(S,w,.09,.22,.09,f,"LeftRiftCrystal",.075,.11,-.02);D.rotation.z=k.degToRad(-12);const F=g(S,w,.07,.15,.07,d,"LeftRuneCrystal",-.065,.08,.04);F.rotation.z=k.degToRad(14)},decorateRightArm:(S,w)=>{g(S,w,.28,.11,.28,m,"RightRuneGuard",0,.015,0),g(S,w,.07,.07,.05,f,"RightRiftGem",0,.015,.162)},decorateLeg:(S,w)=>{},decorateLeftLeg:(S,w)=>{g(S,w,.17,.08,.035,d,"LeftRobeRune",0,-.17,.145)},decorateRightLeg:(S,w)=>{g(S,w,.17,.08,.035,m,"RightRobeTrim",0,-.17,.145)}}}if(n==="Vespera"){const c=zt(e,t,{hair:{roughness:.6},face:{roughness:.7},torso:{roughness:.4,metalness:.3},arm:{roughness:.4,metalness:.3},pants:{roughness:.5,metalness:.3}}),h=e.createMaterial({color:16478597,metalness:.85,roughness:.25}),u=e.createMaterial({color:3018853,metalness:.7,roughness:.3}),d=e.createMaterial({color:16007006,emissive:12456508,emissiveIntensity:.8,roughness:.1,metalness:.1}),f=e.createMaterial({color:14239471,emissive:10624175,emissiveIntensity:.7,roughness:.15});return{materials:c,buildHeadAccessories:m=>{const p=new Q;p.name="HairBand";const v=m.createMesh(new E(.53,.08,.53),h,"Tiara");v.position.y=.38,p.add(v);const x=m.createMesh(new E(.12,.14,.08),d,"TiaraGem");x.position.set(0,.44,.26),p.add(x);const y=m.createMesh(new E(.06,.22,.18),u,"LeftHorn");y.position.set(.24,.5,-.06),y.rotation.set(-.35,0,.35),p.add(y);const g=m.createMesh(new E(.04,.12,.08),f,"LeftHornGlow");g.position.set(.26,.56,-.08),g.rotation.set(-.35,0,.35),p.add(g);const S=m.createMesh(new E(.06,.22,.18),u,"RightHorn");S.position.set(-.24,.5,-.06),S.rotation.set(-.35,0,-.35),p.add(S);const w=m.createMesh(new E(.04,.12,.08),f,"RightHornGlow");w.position.set(-.26,.56,-.08),w.rotation.set(-.35,0,-.35),p.add(w);const b=m.createMesh(new E(.04,.14,.16),h,"LeftEarFin");b.position.set(.27,.26,.02),b.rotation.set(-.2,0,.4),p.add(b);const D=m.createMesh(new E(.04,.14,.16),h,"RightEarFin");D.position.set(-.27,.26,.02),D.rotation.set(-.2,0,-.4),p.add(D);const F=m.createMesh(new E(.18,.16,.14),h,"PonytailRoot");F.position.set(0,.38,-.27),p.add(F);const B=m.createMesh(new E(.22,.44,.14),c.hair,"PonytailUpper");B.position.set(0,.12,-.32),B.rotation.x=-.15,p.add(B);const T=m.createMesh(new E(.16,.38,.1),c.hair,"PonytailLower");T.position.set(0,-.2,-.36),T.rotation.x=-.08,p.add(T);const M=m.createMesh(new E(.18,.06,.12),f,"PonytailRibbon");return M.position.set(0,-.02,-.34),p.add(M),p},buildBackpack:m=>{const p=new Q;p.name="Backpack";const v=m.createMesh(new E(.24,.36,.12),u,"WingCoreHousing");v.position.set(0,1.05,-.17),p.add(v);const x=m.createMesh(new E(.3,.16,.14),h,"WingGildedStruts");x.position.set(0,1.05,-.17),p.add(x);const y=m.createMesh(new E(.12,.2,.08),d,"WingHeartGem");y.position.set(0,1.05,-.22),p.add(y);const g=m.createMesh(new E(.08,.46,.08),f,"LeftWingUpper");g.position.set(.22,1.22,-.22),g.rotation.set(.2,.15,-.45),p.add(g);const S=m.createMesh(new E(.06,.36,.06),d,"LeftWingLower");S.position.set(.32,1.05,-.25),S.rotation.set(.1,.1,-.65),p.add(S);const w=m.createMesh(new E(.08,.46,.08),f,"RightWingUpper");w.position.set(-.22,1.22,-.22),w.rotation.set(.2,-.15,.45),p.add(w);const b=m.createMesh(new E(.06,.36,.06),d,"RightWingLower");return b.position.set(-.32,1.05,-.25),b.rotation.set(.1,-.1,.65),p.add(b),p},decorateLeftArm:(m,p)=>{const v=m.createMesh(new E(.32,.2,.32),u,"LeftPauldron");v.position.set(.03,.05,0),p.add(v);const x=m.createMesh(new E(.35,.08,.35),h,"LeftPauldronTrim");x.position.set(.03,.08,0),p.add(x);const y=m.createMesh(new E(.1,.16,.1),d,"LeftPauldronGem");y.position.set(.08,.18,0),p.add(y)},decorateRightArm:(m,p)=>{const v=m.createMesh(new E(.28,.12,.28),h,"RightPauldron");v.position.set(-.01,.04,0),p.add(v)},decorateLeg:(m,p)=>{const v=m.createMesh(new E(.27,.14,.08),h,"KneePlate");v.position.set(0,-.25,.11),p.add(v);const x=m.createMesh(new E(.12,.08,.04),d,"KneeGem");x.position.set(0,-.25,.14),p.add(x)}}}const i=zt(e,t,{hair:{roughness:.5},face:{roughness:.7},torso:{roughness:.35,metalness:.4},arm:{roughness:.4,metalness:.4},pants:{roughness:.4,metalness:.4}}),r=e.createMaterial({color:593174,metalness:.85,roughness:.2}),s=e.createMaterial({color:16096779,metalness:.9,roughness:.2}),a=e.createMaterial({color:3718648,emissive:165063,emissiveIntensity:.95,roughness:.15}),o=e.createMaterial({color:16498468,emissive:14251782,emissiveIntensity:.85,roughness:.15}),l=e.createMaterial({color:13621468,metalness:.75,roughness:.3});return{materials:i,buildHeadAccessories:c=>{const h=new Q;h.name="HairBand";const u=c.createMesh(new E(.54,.07,.54),s,"CrownRing");u.position.y=.4,h.add(u);const d=c.createMesh(new E(.1,.14,.09),a,"CrownStar");d.position.set(0,.46,.27),h.add(d);const f=c.createMesh(new E(.08,.24,.14),r,"LeftHornBase");f.position.set(.25,.52,-.05),f.rotation.set(-.4,0,.38),h.add(f);const m=c.createMesh(new E(.06,.28,.08),a,"LeftHornTip");m.position.set(.32,.7,-.15),m.rotation.set(-.6,0,.42),h.add(m);const p=c.createMesh(new E(.08,.24,.14),r,"RightHornBase");p.position.set(-.25,.52,-.05),p.rotation.set(-.4,0,-.38),h.add(p);const v=c.createMesh(new E(.06,.28,.08),a,"RightHornTip");v.position.set(-.32,.7,-.15),v.rotation.set(-.6,0,-.42),h.add(v);const x=c.createMesh(new E(.04,.16,.18),l,"LeftFin");x.position.set(.28,.25,.04),x.rotation.set(-.2,0,.45),h.add(x);const y=c.createMesh(new E(.04,.16,.18),l,"RightFin");y.position.set(-.28,.25,.04),y.rotation.set(-.2,0,-.45),h.add(y);const g=c.createMesh(new E(.1,.65,.1),i.hair,"LeftTress");g.position.set(.22,-.05,.18),g.rotation.set(.1,0,-.1),h.add(g);const S=c.createMesh(new E(.12,.06,.12),s,"LeftTressRing");S.position.set(.22,.05,.18),h.add(S);const w=c.createMesh(new E(.1,.65,.1),i.hair,"RightTress");w.position.set(-.22,-.05,.18),w.rotation.set(.1,0,.1),h.add(w);const b=c.createMesh(new E(.12,.06,.12),s,"RightTressRing");b.position.set(-.22,.05,.18),h.add(b);const D=c.createMesh(new E(.36,.55,.14),i.hair,"BackMane");return D.position.set(0,.05,-.26),D.rotation.x=-.12,h.add(D),h},buildBackpack:c=>{const h=new Q;h.name="Backpack";const u=c.createMesh(new E(.08,.7,.1),r,"SpineSpikes");u.position.set(0,1.05,-.16),h.add(u);const d=c.createMesh(new E(.22,.22,.16),s,"VoidGenerator");d.position.set(0,1.1,-.18),h.add(d);const f=c.createMesh(new E(.12,.12,.08),o,"CoreEmber");f.position.set(0,1.1,-.24),h.add(f);const m=c.createMesh(new E(.07,.65,.12),a,"LeftMajorBlade");m.position.set(.3,1.35,-.24),m.rotation.set(.35,.15,-.65),h.add(m);const p=c.createMesh(new E(.05,.42,.08),o,"LeftMinorBlade");p.position.set(.36,.95,-.22),p.rotation.set(.15,.1,-.95),h.add(p);const v=c.createMesh(new E(.07,.65,.12),a,"RightMajorBlade");v.position.set(-.3,1.35,-.24),v.rotation.set(.35,-.15,.65),h.add(v);const x=c.createMesh(new E(.05,.42,.08),o,"RightMinorBlade");return x.position.set(-.36,.95,-.22),x.rotation.set(.15,-.1,.95),h.add(x),h},decorateLeftArm:(c,h)=>{const u=c.createMesh(new E(.34,.22,.34),r,"LeftPauldron");u.position.set(.04,.05,0),h.add(u);const d=c.createMesh(new E(.1,.18,.36),s,"LeftPauldronCrest");d.position.set(.08,.14,0),h.add(d);const f=c.createMesh(new E(.08,.14,.12),a,"LeftPauldronCrystal");f.position.set(.12,.16,0),h.add(f);const m=c.createMesh(new E(.04,.3,.16),a,"ArmBladeFin");m.position.set(.14,-.32,-.05),m.rotation.x=.25,h.add(m)},decorateRightArm:(c,h)=>{const u=c.createMesh(new E(.3,.14,.3),s,"RightGuard");u.position.set(-.02,.04,0),h.add(u)},decorateLeg:(c,h)=>{const u=c.createMesh(new E(.28,.16,.1),r,"KneeArmor");u.position.set(0,-.25,.11),h.add(u);const d=c.createMesh(new E(.12,.1,.06),a,"KneeStar");d.position.set(0,-.25,.15),h.add(d)}}}function Ol(n,e){const t=Hl(n,e),{materials:i}=t,r=e.createMesh(new E(.5,.5,.5),[i.hair,i.hair,i.hair,i.hair,i.face,i.hair],"HeadMesh");r.position.y=.25,t.decorateHead?.(e,r);const s=t.buildHeadAccessories(e),a=new Q;a.name="HeadPivot",a.position.set(0,1.4,0),a.add(r,s);const o=new yr;o.name="EyeAnchor",o.position.set(0,e.eyeAnchorY,.26),a.add(o);const l=e.createMesh(new E(.5,.75,.25),i.torso,"TorsoMesh");l.position.set(0,1.025,0),t.decorateTorso?.(e,l);const c=t.buildBackpack(e),h=e.createMesh(new E(.25,.75,.25),i.arm,"LeftArmMesh");h.position.y=-.275,t.decorateLeftArm(e,h);const u=new Q;u.name="LeftArmPivot",u.position.set(.375,1.35,0),u.add(h);const d=e.createMesh(new E(.25,.75,.25),i.arm,"RightArmMesh");d.position.y=-.275,t.decorateRightArm(e,d);const f=e.createPickaxe();f.position.set(0,-.28,.1),f.rotation.x=k.degToRad(30),d.add(f);const m=new Q;m.name="RightArmPivot",m.position.set(-.375,1.35,0),m.add(d);const p=e.createMesh(new E(.25,ti,.25),i.pants,"LeftLegMesh");p.position.y=-ti/2,t.decorateLeg(e,p),t.decorateLeftLeg?.(e,p);const v=new Q;v.name="LeftLegPivot",v.position.set(.13,nr,0),v.add(p);const x=e.createMesh(new E(.25,ti,.25),i.pants,"RightLegMesh");x.position.y=-ti/2,t.decorateLeg(e,x),t.decorateRightLeg?.(e,x);const y=new Q;y.name="RightLegPivot",y.position.set(-.13,nr,0),y.add(x);const g=new Q;return g.name="PlayerCharacter.Body",g.add(a,l,c,u,m,v,y),g.rotation.y=Math.PI,{body:g,headPivot:a,eyeAnchor:o,headMesh:r,hairBand:s,torsoMesh:l,backpack:c,leftArm:u,leftArmMesh:h,rightArm:m,rightArmMesh:d,leftLeg:v,rightLeg:y,pickaxe:f}}const Nl="/assets/switch_sound-B-Bgbrxl.mp3",It={cycleDuration:1.7,coreWidth:.038,glowWidth:.15,shellOffset:.018},Gl=`
  uniform float uTime;
  uniform float uSweep;
  uniform float uGlowWidth;
  uniform float uShellOffset;

  varying vec3 vObjPos;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  varying float vBand;
  varying float vAz;

  void main() {
    vObjPos = position;
    vAz = atan(position.x, position.z + 1e-5);

    float flow = sin(vAz * 6.0 + position.y * 4.5 - uTime * 6.2) * 0.035
               + sin(vAz * 11.0 - position.y * 3.2 + uTime * 10.5) * 0.018;
    float distToSweep = abs(position.y - (uSweep + flow));
    float band = 1.0 - smoothstep(0.0, uGlowWidth, distToSweep);
    float flutter = 0.45 + 0.55 * sin(uTime * 18.0 + vAz * 7.0 + position.y * 13.0);
    float push = uShellOffset + band * (0.006 + 0.016 * flutter);

    vec3 displaced = position + normal * push;
    vec4 world = modelMatrix * vec4(displaced, 1.0);
    vec3 worldNormal = normalize(mat3(modelMatrix) * normal);

    vWorldPos = world.xyz;
    vWorldNormal = worldNormal;
    vViewDir = normalize(cameraPosition - world.xyz);
    vBand = band;

    gl_Position = projectionMatrix * viewMatrix * world;
  }
`,Xl=`
  uniform float uTime;
  uniform float uSweep;
  uniform float uTop;
  uniform float uBottom;
  uniform float uCoreWidth;
  uniform float uGlowWidth;

  varying vec3 vObjPos;
  varying vec3 vWorldPos;
  varying vec3 vWorldNormal;
  varying vec3 vViewDir;
  varying float vBand;
  varying float vAz;

  float hash31(vec3 p) {
    p = fract(p * 0.1031);
    p += dot(p, p.yzx + 33.33);
    return fract((p.x + p.y) * p.z);
  }

  float noise3(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n000 = hash31(i + vec3(0.0,0.0,0.0));
    float n100 = hash31(i + vec3(1.0,0.0,0.0));
    float n010 = hash31(i + vec3(0.0,1.0,0.0));
    float n110 = hash31(i + vec3(1.0,1.0,0.0));
    float n001 = hash31(i + vec3(0.0,0.0,1.0));
    float n101 = hash31(i + vec3(1.0,0.0,1.0));
    float n011 = hash31(i + vec3(0.0,1.0,1.0));
    float n111 = hash31(i + vec3(1.0,1.0,1.0));
    float nx00 = mix(n000, n100, f.x);
    float nx10 = mix(n010, n110, f.x);
    float nx01 = mix(n001, n101, f.x);
    float nx11 = mix(n011, n111, f.x);
    float nxy0 = mix(nx00, nx10, f.y);
    float nxy1 = mix(nx01, nx11, f.y);
    return mix(nxy0, nxy1, f.z);
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise3(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 N = normalize(vWorldNormal);
    vec3 V = normalize(vViewDir);
    float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.3);

    float swirl = (fbm(vec3(vAz * 1.8, vObjPos.y * 2.6 - uTime * 1.6, length(vObjPos.xz) * 5.0)) - 0.5) * 0.08
                + sin(vAz * 7.0 + vObjPos.y * 5.0 - uTime * 8.0) * 0.022
                + sin(-vAz * 13.0 + vObjPos.y * 8.0 + uTime * 12.0) * 0.012;

    float dist = abs(vObjPos.y - (uSweep + swirl));
    float core = 1.0 - smoothstep(0.0, uCoreWidth, dist);
    float aura = 1.0 - smoothstep(uCoreWidth, uGlowWidth, dist);

    float strand1 = 0.5 + 0.5 * sin(vAz * 16.0 + vObjPos.y * 11.0 - uTime * 24.0 + fbm(vec3(vObjPos * 4.0 + uTime)) * 5.0);
    float strand2 = 0.5 + 0.5 * sin(-vAz * 12.0 + vObjPos.y * 15.0 - uTime * 18.5);
    float strands = (pow(strand1, 7.0) + pow(strand2, 7.0)) * aura;

    float spark = 0.0;
    for (int i = 0; i < 3; i++) {
      float fi = float(i);
      float streak = sin(vAz * (21.0 + fi * 3.0) + vObjPos.y * (17.0 - fi * 1.5) - uTime * (28.0 + fi * 8.0) + fi * 1.7);
      spark += smoothstep(0.96, 0.997, streak);
    }
    spark *= aura * (0.3 + 0.7 * fresnel);

    float frontEdge = smoothstep(-0.06, 0.0, vObjPos.y - uSweep) * (1.0 - smoothstep(0.0, 0.08, vObjPos.y - uSweep));
    float frontFlash = frontEdge * (0.65 + 0.35 * sin(uTime * 24.0 + vAz * 6.0));

    float trailDelta = uSweep - vObjPos.y;
    float trail = smoothstep(0.03, 0.12, trailDelta) * (1.0 - smoothstep(0.12, 0.55, trailDelta));
    trail *= 0.25 + 0.75 * fbm(vec3(vObjPos.xy * 3.6, uTime * 1.25));

    vec3 gold = mix(vec3(1.0, 0.63, 0.10), vec3(1.0, 0.93, 0.68), clamp(0.25 + 0.5 * fresnel + 0.35 * aura, 0.0, 1.0));
    vec3 ember = vec3(1.0, 0.52, 0.08);
    vec3 pale = vec3(1.0, 0.98, 0.84);

    vec3 color = vec3(0.0);
    color += gold * aura * (0.32 + 0.85 * fresnel);
    color += mix(gold, pale, 0.35) * core * (1.25 + 1.5 * fresnel);
    color += mix(gold, ember, 0.4) * strands * (0.9 + 1.1 * fresnel);
    color += ember * spark * 0.85;
    color += pale * frontFlash * 0.65;
    color += gold * trail * 0.26;

    float alpha = aura * 0.16 + core * 0.42 + strands * 0.18 + spark * 0.12 + frontFlash * 0.10 + trail * 0.08;
    alpha *= 0.65 + 0.8 * fresnel;
    alpha = clamp(alpha, 0.0, 0.92);

    if (alpha < 0.01) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;function Zl(n,e){let t=n;for(;t;){if(t===e)return!0;t=t.parent}return!1}function Yl(n,e){let t=n;for(;t;){if(!t.visible)return!1;if(t===e)return!0;t=t.parent}return!1}function ql(n,e){n.updateMatrixWorld(!0);const t=new Ae().copy(n.matrixWorld).invert(),i=[],r=[];if(n.traverse(a=>{if(!(a instanceof ie)||Zl(a,e)||!Yl(a,n))return;const o=a.geometry.clone(),l=o.index?o.toNonIndexed():o;l!==o&&o.dispose(),l.getAttribute("normal")||l.computeVertexNormals();const c=l.getAttribute("position"),h=l.getAttribute("normal");if(!c||!h){l.dispose();return}const u=t.clone().multiply(a.matrixWorld);l.applyMatrix4(u);for(let d=0;d<c.count;d+=1)i.push(c.getX(d),c.getY(d),c.getZ(d)),r.push(h.getX(d),h.getY(d),h.getZ(d));l.dispose()}),i.length===0)return null;const s=new Tt;return s.setAttribute("position",new Ge(i,3)),s.setAttribute("normal",new Ge(r,3)),s.computeBoundingBox(),s}class jl{object=new Q;scanMesh=null;scanUniforms=null;localTime=Number.POSITIVE_INFINITY;volume=.7;switchAudio=null;disposed=!1;constructor(){this.object.name="PlayerCharacter.SwitchVFX",this.object.visible=!1}setTarget(e){if(this.disposed)return;this.clearScanMesh();const t=ql(e,this.object);if(!t?.boundingBox)return;const i=t.boundingBox,r=i.max.y,s=i.min.y,a={uTime:{value:0},uSweep:{value:r},uTop:{value:r},uBottom:{value:s},uCoreWidth:{value:It.coreWidth},uGlowWidth:{value:It.glowWidth},uShellOffset:{value:It.shellOffset}},o=new He({uniforms:a,transparent:!0,depthWrite:!1,blending:vs,vertexShader:Gl,fragmentShader:Xl}),l=new ie(t,o);l.name="CharacterSwitchVFX.Scan",l.frustumCulled=!1,l.renderOrder=1,this.scanUniforms=a,this.scanMesh=l,this.object.add(l)}setVolume(e){this.volume=k.clamp(e,0,1),this.switchAudio&&(this.switchAudio.volume=this.volume)}trigger(){this.disposed||(this.localTime=0,this.object.visible=this.scanMesh!==null,this.updateScan(0),this.playSwitchSound())}update(e){this.disposed||!Number.isFinite(this.localTime)||(this.localTime+=Math.max(0,e),this.updateScan(this.localTime),this.localTime>=It.cycleDuration&&(this.localTime=Number.POSITIVE_INFINITY,this.object.visible=!1))}updateScan(e){const t=this.scanUniforms;if(!t)return;const i=It.cycleDuration,r=e%i/i,s=1-Math.pow(1-r,2.35);t.uTime.value=e,t.uSweep.value=k.lerp(t.uTop.value+.04,t.uBottom.value-.04,s)}playSwitchSound(){try{this.switchAudio||(this.switchAudio=new Audio(Nl),this.switchAudio.preload="auto"),this.switchAudio.volume=this.volume,this.switchAudio.pause(),this.switchAudio.currentTime=0,this.switchAudio.play().catch(()=>{})}catch{}}clearScanMesh(){this.scanMesh&&(this.object.remove(this.scanMesh),this.scanMesh.geometry.dispose(),this.scanMesh.material.dispose(),this.scanMesh=null,this.scanUniforms=null,this.object.visible=!1)}dispose(){if(!this.disposed){this.disposed=!0,this.localTime=Number.POSITIVE_INFINITY,this.clearScanMesh(),this.object.removeFromParent();try{this.switchAudio?.pause()}catch{}this.switchAudio=null}}}const $l="/assets/swing-D4rIVQxu.mp3",Lt=k.degToRad(65),Kl=.75,Ql=.65,Jl=1.4,Me={visualFeetLift:Kl-Ql,cameraDistance:3.8,thirdPersonShoulderOffset:.8,thirdPersonAimDistance:8,cameraCollisionRadius:.2,cameraCollisionPadding:.04,firstPersonCameraCollisionRadius:.04,firstPersonCameraCollisionPadding:.02,swimBodyLift:.55,swingDuration:Oi};class ec{playerRoot=null;camera=null;input=null;controller=null;character=new Q;switchVfx=new jl;rig;body;headPivot;eyeAnchor;hairBand;headMesh;leftArm;rightArm;leftLeg;rightLeg;ownedTextures=[];ownedMaterials=[];materialRecords=[];shadowMeshes=[];shadowBoxes=[];forwardRefractionParticipants;isFirstPerson=!1;bodyYaw=ue.initialYaw;forcedFacingYaw=ue.initialYaw;forcedFacingTime=0;walkTimer=0;swimTimer=0;elapsedTime=0;swingActive=!1;swingTime=0;snapCameraOnNextUpdate=!1;swingAudio=null;currentCharacter;scratchPosition=new A;scratchDirection=new A;scratchTarget=new A;scratchCameraCandidate=new A;scratchFeetPosition=new A;scratchAmbient=new V;scratchAmbientContribution=new V;scratchBaseEmission=new V;scratchStarContribution=new V;scratchStarAmbient=new V(.02,.025,.04);constructor(e=Is,t={}){this.character.name="PlayerCharacter.Root",this.forwardRefractionParticipants=t.forwardRefractionParticipants,this.currentCharacter=Ni(e),this.buildRig(this.currentCharacter),this.attachSwitchVfxToBody(),this.setFirstPerson(!1),this.character.updateMatrixWorld(!0),this.switchVfx.setTarget(this.body)}buildRig(e){const t={eyeAnchorY:ue.eyeHeight-Me.visualFeetLift-Jl,createTexturedMaterial:(i,r)=>this.createTexturedMaterial(i,r),createMaterial:i=>this.createMaterial(i),createMesh:(i,r,s)=>this.createMesh(i,r,s),createPickaxe:()=>this.createPickaxe()};this.rig=Ol(e,t),this.body=this.rig.body,this.headPivot=this.rig.headPivot,this.eyeAnchor=this.rig.eyeAnchor,this.headMesh=this.rig.headMesh,this.hairBand=this.rig.hairBand,this.leftArm=this.rig.leftArm,this.rightArm=this.rig.rightArm,this.leftLeg=this.rig.leftLeg,this.rightLeg=this.rig.rightLeg,this.character.add(this.body),this.registerShadowMeshes()}registerShadowMeshes(){this.character.traverse(e=>{if(!(e instanceof ie))return;e.geometry.computeBoundingBox();const t=e.geometry.boundingBox;t&&(this.shadowMeshes.push(e),this.forwardRefractionParticipants?.register(e),this.shadowBoxes.push({inverseMatrix:new Ae,center:t.getCenter(new A),halfSize:t.getSize(new A).multiplyScalar(.5)}))})}init(e,t,i){this.playerRoot=e,this.camera=t,this.input=i,this.input.setMovementYawOffset?.(this.isFirstPerson?0:Math.PI),e.add(this.character)}setController(e){this.controller=e}setCharacter(e){const t=Ni(e);if(t===this.currentCharacter)return;const i={bodyPosition:this.body.position.clone(),bodyRotation:this.body.rotation.clone(),headRotation:this.headPivot.rotation.clone(),leftArmRotation:this.leftArm.rotation.clone(),rightArmRotation:this.rightArm.rotation.clone(),leftLegRotation:this.leftLeg.rotation.clone(),rightLegRotation:this.rightLeg.rotation.clone()};this.disposeRig(),this.currentCharacter=t,this.buildRig(t),this.body.position.copy(i.bodyPosition),this.body.rotation.copy(i.bodyRotation),this.headPivot.rotation.copy(i.headRotation),this.leftArm.rotation.copy(i.leftArmRotation),this.rightArm.rotation.copy(i.rightArmRotation),this.leftLeg.rotation.copy(i.leftLegRotation),this.rightLeg.rotation.copy(i.rightLegRotation),this.setFirstPerson(this.isFirstPerson),this.attachSwitchVfxToBody(),this.character.updateMatrixWorld(!0),this.switchVfx.setTarget(this.body),this.switchVfx.trigger()}getCharacter(){return this.currentCharacter}setSwitchVfxVolume(e){this.switchVfx.setVolume(e)}updateSwitchVfx(e){this.switchVfx.update(e)}setFirstPerson(e){const t=this.isFirstPerson!==e;this.isFirstPerson=e,this.input?.setMovementYawOffset?.(e?0:Math.PI),t&&(this.input?.setLookOrientation?.(e?this.bodyYaw:this.bodyYaw-Math.PI),e||(this.snapCameraOnNextUpdate=!0)),this.headMesh.visible=!e,this.hairBand.visible=!e}toggleView(){this.setFirstPerson(!this.isFirstPerson)}isFirstPersonView(){return this.isFirstPerson}getShadowBoxes(){this.character.updateMatrixWorld(!0);for(let e=0;e<this.shadowMeshes.length;e+=1){const t=this.shadowMeshes[e],i=this.shadowBoxes[e];!t||!i||i.inverseMatrix.copy(t.matrixWorld).invert()}return this.shadowBoxes}update(e,t=!0,i=!1){if(!this.playerRoot||!this.camera||!this.input||!this.controller)return;const r=this.controller.getMovementState();if(this.elapsedTime+=e,this.forcedFacingTime=Math.max(0,this.forcedFacingTime-e),this.controller.getFeetPosition(this.scratchPosition),this.character.position.set(this.scratchPosition.x,this.scratchPosition.y+Me.visualFeetLift,this.scratchPosition.z),this.updateFacing(e,r),this.applyAnimation(e,r),this.character.updateMatrixWorld(!0),t){const s=i||this.snapCameraOnNextUpdate;this.snapCameraOnNextUpdate=!1,this.updateCamera(e,s)}this.character.updateMatrixWorld(!0)}faceTowards(e){this.isFirstPerson||e.lengthSq()<1e-6||(this.forcedFacingYaw=Math.atan2(-e.x,-e.z),this.bodyYaw=this.forcedFacingYaw,this.character.rotation.y=this.bodyYaw,this.forcedFacingTime=Me.swingDuration+.18)}onPrimaryClick(){this.tryStartSwing()}onSecondaryClick(){this.tryStartSwing()}isSwingActive(){return this.swingActive}setLighting(e,t=0){this.scratchStarContribution.copy(this.scratchStarAmbient).multiplyScalar(.35*k.clamp(t,0,1)),this.scratchAmbient.copy(e).add(this.scratchStarContribution);for(const i of this.materialRecords)this.scratchBaseEmission.copy(i.baseEmissive).multiplyScalar(i.baseEmissiveIntensity),this.scratchAmbientContribution.copy(this.scratchAmbient).multiply(i.baseColor),i.material.emissive.copy(this.scratchBaseEmission).add(this.scratchAmbientContribution),i.material.emissiveIntensity=1}dispose(){try{this.swingAudio?.pause()}catch{}this.swingAudio=null,this.playerRoot?.remove(this.character),this.disposeRig(),this.switchVfx.dispose()}disposeRig(){this.switchVfx.object.removeFromParent(),this.character.remove(this.body);for(const t of this.shadowMeshes)this.forwardRefractionParticipants?.unregister(t);const e=new Set;this.body.traverse(t=>{t instanceof ie&&e.add(t.geometry)});for(const t of e)t.dispose();for(const t of this.ownedMaterials)t.dispose();for(const t of this.ownedTextures)t.dispose();this.ownedMaterials.length=0,this.ownedTextures.length=0,this.materialRecords.length=0,this.shadowMeshes.length=0,this.shadowBoxes.length=0}attachSwitchVfxToBody(){this.switchVfx.object.removeFromParent(),this.body.add(this.switchVfx.object)}updateFacing(e,t){const i=this.input;if(!i)return;const{yaw:r,pitch:s}=i.getOrientation();if(this.isFirstPerson){t.isMoving&&(this.bodyYaw=Math.atan2(-t.moveDirection.x,-t.moveDirection.z));let a=Ii(r-this.bodyYaw);if(!t.isMoving&&Math.abs(a)>Lt){const o=a>0?a-Lt:a+Lt;this.bodyYaw+=o*Math.min(1,e*10),a=Ii(r-this.bodyYaw)}this.headPivot.rotation.y=k.clamp(a,-Lt,Lt),this.headPivot.rotation.x=-s}else{let a=this.bodyYaw;this.forcedFacingTime>0?a=this.forcedFacingYaw:t.isMoving&&(a=Math.atan2(-t.moveDirection.x,-t.moveDirection.z));const o=Ii(a-this.bodyYaw);this.bodyYaw+=o*Math.min(1,e*12),this.headPivot.rotation.y=k.lerp(this.headPivot.rotation.y,0,Math.min(1,e*12)),this.headPivot.rotation.x=k.lerp(this.headPivot.rotation.x,0,Math.min(1,e*12))}this.character.rotation.set(0,this.bodyYaw,0)}applyAnimation(e,t){if(t.isUnderwater){this.swimTimer+=e*(t.isMoving?8:3);const i=t.isMoving?-Math.PI/2.05:.2,r=Math.min(1,e*8);this.body.rotation.x=k.lerp(this.body.rotation.x,i,r),this.body.position.y=k.lerp(this.body.position.y,Me.swimBodyLift,r),this.leftArm.rotation.x=-Math.PI/3+Math.sin(this.swimTimer)*.9,this.leftArm.rotation.z=-.3,this.swingActive||(this.rightArm.rotation.x=-Math.PI/3+Math.sin(this.swimTimer+Math.PI)*.9,this.rightArm.rotation.z=.3,this.rightArm.rotation.y=0),this.leftLeg.rotation.x=Math.sin(this.swimTimer*1.6)*.4,this.rightLeg.rotation.x=-Math.sin(this.swimTimer*1.6)*.4}else{const i=Math.min(1,e*10);if(this.body.rotation.x=k.lerp(this.body.rotation.x,0,i),this.body.position.y=k.lerp(this.body.position.y,0,i),t.isMoving&&t.isGrounded){this.walkTimer+=e*(t.isSprinting?14:9);const r=Math.sin(this.walkTimer)*(t.isSprinting?.9:.65);this.leftLeg.rotation.x=r,this.rightLeg.rotation.x=-r,this.leftArm.rotation.x=-r*.8,this.leftArm.rotation.z=.05,this.swingActive||(this.rightArm.rotation.x=r*.8,this.rightArm.rotation.y=0,this.rightArm.rotation.z=-.05),this.body.position.y=Math.abs(Math.sin(this.walkTimer))*.08}else if(!t.isGrounded)this.leftLeg.rotation.x=-.4,this.rightLeg.rotation.x=.2,this.leftArm.rotation.x=-.5,this.swingActive||(this.rightArm.rotation.x=-.5,this.rightArm.rotation.y=0,this.rightArm.rotation.z=0);else{const r=this.elapsedTime*2.2;this.leftLeg.rotation.x=k.lerp(this.leftLeg.rotation.x,0,Math.min(1,e*8)),this.rightLeg.rotation.x=k.lerp(this.rightLeg.rotation.x,0,Math.min(1,e*8)),this.leftArm.rotation.x=k.lerp(this.leftArm.rotation.x,0,Math.min(1,e*8)),this.leftArm.rotation.z=.08+Math.sin(r)*.03,this.swingActive||(this.rightArm.rotation.x=k.lerp(this.rightArm.rotation.x,0,Math.min(1,e*8)),this.rightArm.rotation.y=0,this.rightArm.rotation.z=-.08-Math.sin(r)*.03),this.body.position.y=Math.sin(r)*.015}}if(this.updateSwing(e),this.swingActive){const i=k.clamp(this.swingTime/Me.swingDuration,0,1),r=Math.sin(i*Math.PI);this.rightArm.rotation.x=-Math.PI/2.8-r*1.5,this.rightArm.rotation.y=-r*.35,this.rightArm.rotation.z=-r*.2}}updateSwing(e){this.swingActive&&(this.swingTime+=e,this.swingTime>=Me.swingDuration&&(this.swingActive=!1,this.swingTime=0))}tryStartSwing(){if(!this.swingActive){this.swingActive=!0,this.swingTime=0;try{this.swingAudio||(this.swingAudio=new Audio($l),this.swingAudio.preload="auto"),this.swingAudio.pause(),this.swingAudio.currentTime=0,this.swingAudio.play().catch(()=>{})}catch{}}}updateCamera(e,t=!1){const i=this.camera;if(!i)return;this.headPivot.getWorldPosition(this.scratchTarget),this.eyeAnchor.getWorldPosition(this.scratchPosition);const{yaw:r,pitch:s}=this.input?.getOrientation()??{yaw:0,pitch:0};if(this.isFirstPerson){this.scratchDirection.set(-Math.sin(r)*Math.cos(s),Math.sin(s),-Math.cos(r)*Math.cos(s)).normalize(),this.controller?(this.controller.getEyePosition(this.scratchTarget),this.scratchCameraCandidate.copy(this.scratchPosition),or(this.controller.getWorld(),this.scratchTarget,this.scratchCameraCandidate,Me.firstPersonCameraCollisionRadius,Me.firstPersonCameraCollisionPadding),i.position.copy(this.scratchCameraCandidate)):i.position.copy(this.scratchPosition),this.scratchTarget.copy(i.position).add(this.scratchDirection),i.lookAt(this.scratchTarget),i.updateMatrixWorld(!0);return}this.controller?this.controller.getEyePosition(this.scratchTarget):this.scratchTarget.y+=.3;const a=Me.cameraDistance,o=Math.cos(s),l=r+Math.PI,c=this.scratchDirection.set(Math.sin(l)*o*a,-Math.sin(s)*a,Math.cos(l)*o*a).add(this.scratchTarget);c.x+=Math.cos(l)*Me.thirdPersonShoulderOffset,c.z-=Math.sin(l)*Me.thirdPersonShoulderOffset;const h=t?1:1-Math.exp(-30*Math.max(0,Math.min(.1,e)));if(this.scratchCameraCandidate.copy(i.position).lerp(c,h),this.controller){const u=this.controller.getFeetPosition(this.scratchFeetPosition).y+Me.cameraCollisionRadius+Me.cameraCollisionPadding;or(this.controller.getWorld(),this.scratchTarget,this.scratchCameraCandidate,Me.cameraCollisionRadius,Me.cameraCollisionPadding,u)}i.position.copy(this.scratchCameraCandidate),this.scratchDirection.set(-Math.sin(l)*o,Math.sin(s),-Math.cos(l)*o).normalize(),this.scratchTarget.addScaledVector(this.scratchDirection,Me.thirdPersonAimDistance),i.lookAt(this.scratchTarget),i.updateMatrixWorld(!0)}createTexturedMaterial(e,t={}){this.ownedTextures.push(e);const i=this.createMaterial({roughness:.8,...t,map:e});return i.emissiveMap=e,i.needsUpdate=!0,i}createMaterial(e){const t=new gs(e);return Ls(t),this.ownedMaterials.push(t),this.materialRecords.push({material:t,baseColor:t.color.clone(),baseEmissive:t.emissive.clone(),baseEmissiveIntensity:t.emissiveIntensity}),t}createMesh(e,t,i){const r=new ie(e,t);return r.name=i,r.castShadow=!0,r.receiveShadow=!0,r}createPickaxe(){const e=new Q;e.name="Pickaxe";const t=this.createMaterial({color:4861464,roughness:.9}),i=this.createMaterial({color:16096779,metalness:.7,roughness:.3}),r=this.createMaterial({color:61695,emissive:39355,emissiveIntensity:.5,roughness:.2}),s=(a,o,l,c)=>{const h=this.createMesh(a,o,l);h.position.copy(c),e.add(h)};return s(new E(.045,.9,.045),t,"PickaxeHandle",new A(0,.22,0)),s(new E(.055,.2,.055),i,"PickaxeGrip",new A(0,.05,0)),s(new E(.065,.08,.065),i,"PickaxeHeadMount",new A(0,.62,0)),s(new E(.06,.065,.12),r,"PickaxeCenterHead",new A(0,.64,0)),s(new E(.055,.06,.1),r,"PickaxeFrontStep",new A(0,.6,.1)),s(new E(.05,.055,.1),r,"PickaxeFrontTip",new A(0,.53,.18)),s(new E(.055,.06,.1),r,"PickaxeBackStep",new A(0,.6,-.1)),s(new E(.05,.055,.1),r,"PickaxeBackTip",new A(0,.53,-.18)),e}}function Ii(n){return k.euclideanModulo(n+Math.PI,Math.PI*2)-Math.PI}const ae=8,at=32,K=[8,32,64],ai=1,ri=2,si=4,ji=8;function Li(n,e,t){const i=Math.round(e-n);if(!Number.isFinite(i)||i<=0)throw new Error(`[VoxelOccupancyVolume] Invalid ${t} bounds: ${n}..${e}`);return i}function cr(n){const e=n.split(",").map(t=>Number(t));if(e.length!==3||e.some(t=>!Number.isInteger(t)))throw new Error(`[VoxelOccupancyVolume] Invalid chunk key: ${n}`);return{cx:e[0],cy:e[1],cz:e[2]}}class tc{origin;dimensions;brickDimensions;macroBrickDimensions;texture;casterFlagsTexture;brickTexture;macroBrickTexture;brickDetailTexture;leafBrickTexture;xzMaxCasterHeight8Texture;xzMaxCasterHeight32Texture;xzMaxCasterHeight64Texture;seaweedTexture;width;height;depth;brickWidth;brickHeight;brickDepth;macroBrickWidth;macroBrickHeight;macroBrickDepth;casterFlags;brickOccupancy;brickDetailOccupancy;leafBrickDensity;brickCellCounts;opaqueBrickCounts;leafBrickCounts;grassBrickCounts;seaweedBrickCounts;macroBrickOccupancy;macroBrickCounts;xz8Width;xz8Depth;xz32Width;xz32Depth;xz64Width;xz64Depth;xzColumnMaxCasterY;seaweedColumnMaxCasterY;xzMaxCasterHeight8;xzMaxCasterHeight32;xzMaxCasterHeight64;seaweedOccupancy;opaqueById=new Uint8Array(256);leafById=new Uint8Array(256);grassTuftId;loadedChunkKeys=new Set;opaqueVoxelCount=0;leafVoxelCount=0;grassTuftCount=0;seaweedAnchorCount=0;bulkUpdateDepth=0;fullBrickRebuilds=0;seaweedTextureDirty=!1;seaweedShadowAnchors=[];constructor(e){this.origin=new A(e.minX,e.minY,e.minZ),this.width=Li(e.minX,e.maxX,"X"),this.height=Li(e.minY,e.maxY,"Y"),this.depth=Li(e.minZ,e.maxZ,"Z"),this.dimensions=new A(this.width,this.height,this.depth),this.brickWidth=Math.ceil(this.width/ae),this.brickHeight=Math.ceil(this.height/ae),this.brickDepth=Math.ceil(this.depth/ae),this.brickDimensions=new A(this.brickWidth,this.brickHeight,this.brickDepth),this.macroBrickWidth=Math.ceil(this.width/at),this.macroBrickHeight=Math.ceil(this.height/at),this.macroBrickDepth=Math.ceil(this.depth/at),this.macroBrickDimensions=new A(this.macroBrickWidth,this.macroBrickHeight,this.macroBrickDepth),this.casterFlags=new Uint8Array(this.width*this.height*this.depth),this.brickOccupancy=new Uint8Array(this.brickWidth*this.brickHeight*this.brickDepth),this.brickDetailOccupancy=new Uint8Array(this.brickWidth*this.brickHeight*this.brickDepth),this.leafBrickDensity=new Uint8Array(this.brickWidth*this.brickHeight*this.brickDepth),this.brickCellCounts=new Uint16Array(this.brickOccupancy.length),this.opaqueBrickCounts=new Uint16Array(this.brickOccupancy.length),this.leafBrickCounts=new Uint16Array(this.brickOccupancy.length),this.grassBrickCounts=new Uint16Array(this.brickOccupancy.length),this.seaweedBrickCounts=new Uint16Array(this.brickOccupancy.length),this.macroBrickOccupancy=new Uint8Array(this.macroBrickWidth*this.macroBrickHeight*this.macroBrickDepth),this.macroBrickCounts=new Uint16Array(this.macroBrickOccupancy.length),this.seaweedOccupancy=new Uint8Array(this.width*this.depth*4),this.xz8Width=Math.ceil(this.width/K[0]),this.xz8Depth=Math.ceil(this.depth/K[0]),this.xz32Width=Math.ceil(this.width/K[1]),this.xz32Depth=Math.ceil(this.depth/K[1]),this.xz64Width=Math.ceil(this.width/K[2]),this.xz64Depth=Math.ceil(this.depth/K[2]),this.xzColumnMaxCasterY=new Float32Array(this.width*this.depth),this.seaweedColumnMaxCasterY=new Float32Array(this.width*this.depth),this.xzMaxCasterHeight8=new Float32Array(this.xz8Width*this.xz8Depth),this.xzMaxCasterHeight32=new Float32Array(this.xz32Width*this.xz32Depth),this.xzMaxCasterHeight64=new Float32Array(this.xz64Width*this.xz64Depth),this.xzColumnMaxCasterY.fill(-1),this.seaweedColumnMaxCasterY.fill(-1),this.xzMaxCasterHeight8.fill(-1),this.xzMaxCasterHeight32.fill(-1),this.xzMaxCasterHeight64.fill(-1);const t=wi();this.grassTuftId=t.getAllBlocks().find(i=>i.name==="grass_tuft")?.id??9;for(const i of t.getAllBlocks())this.opaqueById[i.id]=i.opaque?255:0,this.leafById[i.id]=i.name==="leaves"||i.name==="leaves_maple"?255:0;this.texture=this.createTexture(this.casterFlags,this.width,this.height,this.depth,!0),this.casterFlagsTexture=this.texture,this.brickTexture=this.createTexture(this.brickOccupancy,this.brickWidth,this.brickHeight,this.brickDepth,!0),this.macroBrickTexture=this.createTexture(this.macroBrickOccupancy,this.macroBrickWidth,this.macroBrickHeight,this.macroBrickDepth,!0),this.brickDetailTexture=this.createTexture(this.brickDetailOccupancy,this.brickWidth,this.brickHeight,this.brickDepth,!0),this.leafBrickTexture=this.createTexture(this.leafBrickDensity,this.brickWidth,this.brickHeight,this.brickDepth,!1),this.leafBrickTexture.minFilter=pe,this.leafBrickTexture.magFilter=pe,this.xzMaxCasterHeight8Texture=this.createHeightTexture(this.xzMaxCasterHeight8,this.xz8Width,this.xz8Depth,"VoxelShadowXZMaxHeight8"),this.xzMaxCasterHeight32Texture=this.createHeightTexture(this.xzMaxCasterHeight32,this.xz32Width,this.xz32Depth,"VoxelShadowXZMaxHeight32"),this.xzMaxCasterHeight64Texture=this.createHeightTexture(this.xzMaxCasterHeight64,this.xz64Width,this.xz64Depth,"VoxelShadowXZMaxHeight64"),this.seaweedTexture=this.createSeaweedTexture();for(let i=0;i<this.brickDepth;i+=1){const r=Math.min(ae,this.depth-i*ae);for(let s=0;s<this.brickHeight;s+=1){const a=Math.min(ae,this.height-s*ae);for(let o=0;o<this.brickWidth;o+=1){const l=Math.min(ae,this.width-o*ae);this.brickCellCounts[this.brickIndex(o,s,i)]=l*a*r}}}}createTexture(e,t,i,r,s=!1){const a=new ws(e,t,i,r);return a.format=s?ys:va,a.type=Pe,a.minFilter=N,a.magFilter=N,a.wrapS=Ce,a.wrapT=Ce,a.wrapR=Ce,a.generateMipmaps=!1,a.unpackAlignment=1,a.colorSpace=fe,a.needsUpdate=!0,a}createHeightTexture(e,t,i,r){const s=new Ve(e,t,i,va,_i);return s.name=r,s.colorSpace=fe,s.wrapS=Ce,s.wrapT=Ce,s.magFilter=N,s.minFilter=N,s.generateMipmaps=!1,s.unpackAlignment=1,s.needsUpdate=!0,s}createSeaweedTexture(){const e=new Ve(this.seaweedOccupancy,this.width,this.depth,re,Pe);return e.colorSpace=fe,e.wrapS=Ce,e.wrapT=Ce,e.magFilter=N,e.minFilter=N,e.generateMipmaps=!1,e.unpackAlignment=1,e.needsUpdate=!0,e}voxelIndex(e,t,i){return e+this.width*(t+this.height*i)}brickIndex(e,t,i){return e+this.brickWidth*(t+this.brickHeight*i)}macroBrickIndex(e,t,i){return e+this.macroBrickWidth*(t+this.macroBrickHeight*i)}xzIndex(e,t,i){return e+i*t}inBounds(e,t,i){return e>=0&&e<this.width&&t>=0&&t<this.height&&i>=0&&i<this.depth}maxCasterYInColumn(e,t){const i=this.xzIndex(e,t,this.width);let r=this.seaweedColumnMaxCasterY[i];for(let s=this.height-1;s>=0;s-=1)if(this.casterFlags[this.voxelIndex(e,s,t)]!==0){r=Math.max(r,s+1);break}return r}recomputeXZTile(e,t,i,r,s){const a=r*i,o=s*i,l=Math.min(this.width,a+i),c=Math.min(this.depth,o+i);let h=-1;for(let u=o;u<c;u+=1)for(let d=a;d<l;d+=1)h=Math.max(h,this.xzColumnMaxCasterY[this.xzIndex(d,u,this.width)]);e[this.xzIndex(r,s,t)]=h}updateXZLevel(e,t,i,r,s,a,o){const l=Math.floor(r/i),c=Math.floor(s/i),h=this.xzIndex(l,c,t),u=e[h];o>u?e[h]=o:a===u&&this.recomputeXZTile(e,t,i,l,c)}refreshXZColumn(e,t){if(e<0||e>=this.width||t<0||t>=this.depth)return;const i=this.xzIndex(e,t,this.width),r=this.xzColumnMaxCasterY[i],s=this.maxCasterYInColumn(e,t);r!==s&&(this.xzColumnMaxCasterY[i]=s,this.updateXZLevel(this.xzMaxCasterHeight8,this.xz8Width,K[0],e,t,r,s),this.updateXZLevel(this.xzMaxCasterHeight32,this.xz32Width,K[1],e,t,r,s),this.updateXZLevel(this.xzMaxCasterHeight64,this.xz64Width,K[2],e,t,r,s))}rebuildXZHierarchy(){for(let e=0;e<this.depth;e+=1)for(let t=0;t<this.width;t+=1)this.xzColumnMaxCasterY[this.xzIndex(t,e,this.width)]=this.maxCasterYInColumn(t,e);this.xzMaxCasterHeight8.fill(-1),this.xzMaxCasterHeight32.fill(-1),this.xzMaxCasterHeight64.fill(-1);for(let e=0;e<this.depth;e+=1)for(let t=0;t<this.width;t+=1){const i=this.xzColumnMaxCasterY[this.xzIndex(t,e,this.width)],r=this.xzIndex(Math.floor(t/K[0]),Math.floor(e/K[0]),this.xz8Width),s=this.xzIndex(Math.floor(t/K[1]),Math.floor(e/K[1]),this.xz32Width),a=this.xzIndex(Math.floor(t/K[2]),Math.floor(e/K[2]),this.xz64Width);this.xzMaxCasterHeight8[r]=Math.max(this.xzMaxCasterHeight8[r],i),this.xzMaxCasterHeight32[s]=Math.max(this.xzMaxCasterHeight32[s],i),this.xzMaxCasterHeight64[a]=Math.max(this.xzMaxCasterHeight64[a],i)}}updateBrick(e,t,i){if(e<0||e>=this.brickWidth||t<0||t>=this.brickHeight||i<0||i>=this.brickDepth)return;const r=this.brickIndex(e,t,i),s=this.seaweedBrickCounts[r]!==0,a=this.opaqueBrickCounts[r]!==0||this.leafBrickCounts[r]!==0||this.grassBrickCounts[r]!==0||s,o=this.brickOccupancy[r]!==0;this.brickOccupancy[r]=a?255:0,this.brickDetailOccupancy[r]=this.opaqueBrickCounts[r]!==0||this.grassBrickCounts[r]!==0||s?255:0;const l=this.leafBrickCounts[r];if(this.leafBrickDensity[r]=l===0?0:Math.max(1,Math.min(255,Math.round(l/Math.max(1,this.brickCellCounts[r])*255))),o!==a){const c=this.macroBrickIndex(Math.floor(e*ae/at),Math.floor(t*ae/at),Math.floor(i*ae/at));this.macroBrickCounts[c]+=a?1:-1,this.macroBrickOccupancy[c]=this.macroBrickCounts[c]!==0?255:0}}setCell(e,t,i,r,s,a){if(!this.inBounds(e,t,i))return!1;const o=this.voxelIndex(e,t,i),l=this.casterFlags[o],c=(l&ai)!==0,h=(l&ri)!==0,u=(l&si)!==0;if(c===r&&h===s&&u===a)return!1;const d=this.brickIndex(Math.floor(e/ae),Math.floor(t/ae),Math.floor(i/ae));let f=0;return c!==r&&(r&&(f|=ai),this.opaqueBrickCounts[d]+=r?1:-1,this.opaqueVoxelCount+=r?1:-1),c===r&&c&&(f|=ai),h!==s&&(s&&(f|=ri),this.leafBrickCounts[d]+=s?1:-1,this.leafVoxelCount+=s?1:-1),h===s&&h&&(f|=ri),u!==a&&(a&&(f|=si),this.grassBrickCounts[d]+=a?1:-1,this.grassTuftCount+=a?1:-1),u===a&&u&&(f|=si),this.casterFlags[o]=f,this.bulkUpdateDepth===0&&(this.updateBrick(Math.floor(e/ae),Math.floor(t/ae),Math.floor(i/ae)),this.refreshXZColumn(e,i)),!0}rebuildBricks(){this.brickOccupancy.fill(0),this.macroBrickOccupancy.fill(0),this.macroBrickCounts.fill(0);for(let e=0;e<this.brickOccupancy.length;e+=1)this.updateBrick(e%this.brickWidth,Math.floor(e/this.brickWidth)%this.brickHeight,Math.floor(e/(this.brickWidth*this.brickHeight)));this.rebuildXZHierarchy(),this.fullBrickRebuilds+=1}rebuildSeaweedBrickCounts(){this.seaweedBrickCounts.fill(0);for(const e of this.seaweedShadowAnchors){const t=Math.max(0,Math.floor(e.rootY-this.origin.y)),i=Math.min(this.height-1,Math.floor(e.rootY-this.origin.y+Math.max(e.height,0)-1e-4));if(i<t)continue;const r=Math.floor(e.cellX/ae),s=Math.floor(e.cellZ/ae);if(!(r<0||r>=this.brickWidth||s<0||s>=this.brickDepth))for(let a=Math.floor(t/ae);a<=Math.floor(i/ae);a+=1)this.seaweedBrickCounts[this.brickIndex(r,a,s)]+=1}}markTexturesDirty(e=!1){this.texture.needsUpdate=!0,this.brickTexture.needsUpdate=!0,this.macroBrickTexture.needsUpdate=!0,this.brickDetailTexture.needsUpdate=!0,this.leafBrickTexture.needsUpdate=!0,this.xzMaxCasterHeight8Texture.needsUpdate=!0,this.xzMaxCasterHeight32Texture.needsUpdate=!0,this.xzMaxCasterHeight64Texture.needsUpdate=!0,e&&(this.seaweedTexture.needsUpdate=!0)}setSeaweedAnchors(e){this.seaweedTextureDirty=!0,this.seaweedOccupancy.fill(0),this.seaweedColumnMaxCasterY.fill(-1),this.seaweedShadowAnchors.length=0,this.seaweedBrickCounts.fill(0),this.seaweedAnchorCount=0;for(const t of e){if(!Number.isFinite(t.x)||!Number.isFinite(t.z)||!Number.isFinite(t.rootY)||!Number.isFinite(t.height)||t.height<=0)continue;const i=t.x-this.origin.x,r=t.z-this.origin.z,s=Math.floor(i),a=Math.floor(r);if(s<0||s>=this.width||a<0||a>=this.depth)continue;const o=(a*this.width+s)*4;if(this.seaweedOccupancy[o+3]!==0)continue;const l=k.clamp(t.rootY-this.origin.y,0,this.height-1e-4),c=k.clamp(t.height,0,ji);this.seaweedOccupancy[o]=Math.round((i-s)*255),this.seaweedOccupancy[o+1]=Math.round((r-a)*255),this.seaweedOccupancy[o+2]=Math.round(l/Math.max(1,this.height)*255),this.seaweedOccupancy[o+3]=Math.max(1,Math.round(c/ji*255)),this.seaweedShadowAnchors.push({cellX:s,cellZ:a,rootY:t.rootY,height:c});const h=this.xzIndex(s,a,this.width);this.seaweedColumnMaxCasterY[h]=Math.max(this.seaweedColumnMaxCasterY[h],Math.min(this.height,l+c)),this.seaweedAnchorCount+=1}this.rebuildSeaweedBrickCounts(),this.bulkUpdateDepth===0&&(this.rebuildBricks(),this.seaweedTextureDirty=!1,this.markTexturesDirty(!0))}updateChunk(e,t){const{cx:i,cy:r,cz:s}=cr(e),a=i*R.x-this.origin.x,o=r*R.y-this.origin.y,l=s*R.z-this.origin.z,c=t.getVoxelsArray();for(let h=0;h<R.z;h++)for(let u=0;u<R.y;u++)for(let d=0;d<R.x;d++){const f=u*(R.x*R.z)+h*R.x+d,m=c[f],p=this.leafById[m]!==0,v=this.opaqueById[m]!==0&&!p;this.setCell(a+d,o+u,l+h,v,p,m===this.grassTuftId)}this.loadedChunkKeys.add(e),this.bulkUpdateDepth===0&&this.markTexturesDirty()}clearChunk(e){const{cx:t,cy:i,cz:r}=cr(e),s=t*R.x-this.origin.x,a=i*R.y-this.origin.y,o=r*R.z-this.origin.z;for(let l=0;l<R.z;l++)for(let c=0;c<R.y;c++)for(let h=0;h<R.x;h++)this.setCell(s+h,a+c,o+l,!1,!1,!1);this.loadedChunkKeys.delete(e),this.bulkUpdateDepth===0&&this.markTexturesDirty()}updateBlock(e,t,i,r){const s=Math.floor(e-this.origin.x),a=Math.floor(t-this.origin.y),o=Math.floor(i-this.origin.z),l=this.leafById[r]!==0;this.setCell(s,a,o,this.opaqueById[r]!==0&&!l,l,r===this.grassTuftId)&&this.bulkUpdateDepth===0&&this.markTexturesDirty()}beginBulkUpdate(){this.bulkUpdateDepth+=1}finishBulkUpdate(){if(this.bulkUpdateDepth===0)throw new Error("[VoxelOccupancyVolume] finishBulkUpdate called without beginBulkUpdate");if(this.bulkUpdateDepth-=1,this.bulkUpdateDepth!==0)return;const e=this.seaweedTextureDirty;this.seaweedTextureDirty=!1,this.rebuildBricks(),this.markTexturesDirty(e)}rebuild(e){this.casterFlags.fill(0),this.brickOccupancy.fill(0),this.macroBrickOccupancy.fill(0),this.macroBrickCounts.fill(0),this.brickDetailOccupancy.fill(0),this.leafBrickDensity.fill(0),this.opaqueBrickCounts.fill(0),this.leafBrickCounts.fill(0),this.grassBrickCounts.fill(0),this.seaweedBrickCounts.fill(0),this.loadedChunkKeys.clear(),this.opaqueVoxelCount=0,this.leafVoxelCount=0,this.grassTuftCount=0,this.rebuildSeaweedBrickCounts(),this.beginBulkUpdate();try{for(const t of e)this.updateChunk(t.key,t.chunk)}finally{this.finishBulkUpdate()}}getDiagnostics(){return{origin:{x:this.origin.x,y:this.origin.y,z:this.origin.z},dimensions:{x:this.width,y:this.height,z:this.depth},brickDimensions:{x:this.brickWidth,y:this.brickHeight,z:this.brickDepth},macroBrickDimensions:{x:this.macroBrickWidth,y:this.macroBrickHeight,z:this.macroBrickDepth},brickSize:ae,macroBrickSize:at,loadedChunks:this.loadedChunkKeys.size,opaqueVoxels:this.opaqueVoxelCount,leafVoxels:this.leafVoxelCount,grassTufts:this.grassTuftCount,seaweedAnchors:this.seaweedAnchorCount,textureBytes:this.casterFlags.byteLength,brickTextureBytes:this.brickOccupancy.byteLength,brickDetailTextureBytes:this.brickDetailOccupancy.byteLength,leafBrickTextureBytes:this.leafBrickDensity.byteLength,macroBrickTextureBytes:this.macroBrickOccupancy.byteLength,xzMaxCasterHeightTextureBytes:{level8:this.xzMaxCasterHeight8.byteLength,level32:this.xzMaxCasterHeight32.byteLength,level64:this.xzMaxCasterHeight64.byteLength},seaweedTextureBytes:this.seaweedOccupancy.byteLength,fullBrickRebuilds:this.fullBrickRebuilds}}dispose(){this.texture.dispose(),this.brickTexture.dispose(),this.macroBrickTexture.dispose(),this.brickDetailTexture.dispose(),this.leafBrickTexture.dispose(),this.xzMaxCasterHeight8Texture.dispose(),this.xzMaxCasterHeight32Texture.dispose(),this.xzMaxCasterHeight64Texture.dispose(),this.seaweedTexture.dispose()}}const Wi=512,Wt=.5,ic=.00465,ac=ic*2.25,$e=48,Vi=4;class rc{renderer;volume;target;forwardTarget;coarseTarget;coarseForwardTarget;quadGeometry;quadMaterial;quad;leafAtlasFallback;scene=new qt;camera=new Ki(-1,1,1,-1,0,1);resolution=new q(1,1);coarseResolution=new q(1,1);sunDirection=new A(.7,.7,0).normalize();depthTexture=null;enabled=!0;maxDistance=300;maxSteps=Wi;supported;characterBoxInverse=Array.from({length:$e},()=>new Ae);characterBoxCenters=Array.from({length:$e},()=>new A);characterBoxHalfSizes=Array.from({length:$e},()=>new A);characterBoundsMin=new A;characterBoundsMax=new A;characterWorldMatrix=new Ae;characterLocalCorner=new A;characterWorldCorner=new A;characterClipCorner=new ht;characterScreenPoint=new q;characterScreenBounds=new ht(0,0,0,0);characterBoxCount=0;characterShadowMaxDistance=X.shadows.character.maxDistance;stageProfiler=null;sunIntensity=1;directSunActive=!0;targetInitialized=!1;forwardTargetInitialized=!1;coarseTargetInitialized=!1;coarseForwardTargetInitialized=!1;constructor(e,t,i,r,s){this.renderer=e,this.volume=r,this.supported=e.capabilities.isWebGL2;const a=s?null:new Ve(new Uint8Array([255,255,255,255]),1,1,re,Pe);a&&(a.needsUpdate=!0);const o=Array.from({length:Vi},(u,d)=>{const f=s?.variantTiles?.[d]??s?.variantTiles?.[0]??[8,0];return new ht(f[0],f[1],0,0)}),l=Math.max(1,Math.min(Vi,s?.variantTiles?.length??1)),c=Math.max(1,Math.floor(t*e.getPixelRatio())),h=Math.max(1,Math.floor(i*e.getPixelRatio()));this.resolution.set(c,h),this.coarseResolution.set(Math.max(1,Math.ceil(c*Wt)),Math.max(1,Math.ceil(h*Wt))),this.target=new We(c,h,{minFilter:N,magFilter:N,format:re,depthBuffer:!1,stencilBuffer:!1}),this.target.texture.colorSpace=fe,this.forwardTarget=new We(c,h,{minFilter:N,magFilter:N,format:re,depthBuffer:!1,stencilBuffer:!1}),this.forwardTarget.texture.colorSpace=fe,this.coarseTarget=new We(this.coarseResolution.x,this.coarseResolution.y,{minFilter:N,magFilter:N,format:re,depthBuffer:!1,stencilBuffer:!1}),this.coarseTarget.texture.colorSpace=fe,this.coarseForwardTarget=new We(this.coarseResolution.x,this.coarseResolution.y,{minFilter:N,magFilter:N,format:re,depthBuffer:!1,stencilBuffer:!1}),this.coarseForwardTarget.texture.colorSpace=fe,ba(this.supported?this.forwardTarget.texture:null),this.quadGeometry=new gi(2,2),this.quadMaterial=new He({glslVersion:vr,uniforms:{tDepth:{value:null},tReceiverWorld:{value:this.forwardTarget.texture},uCoarseVisibility:{value:this.coarseTarget.texture},uCoarseReceiverWorld:{value:this.forwardTarget.texture},uCoarseResolution:{value:this.coarseResolution.clone()},uShadowPassMode:{value:0},uUseReceiverWorld:{value:!1},uVoxelCasterFlags:{value:r.casterFlagsTexture},uBrickOccupancy:{value:r.brickTexture},uMacroBrickOccupancy:{value:r.macroBrickTexture},uBrickDetailOccupancy:{value:r.brickDetailTexture},uLeafBrickDensity:{value:r.leafBrickTexture},uXZMaxCasterHeight8:{value:r.xzMaxCasterHeight8Texture},uXZMaxCasterHeight32:{value:r.xzMaxCasterHeight32Texture},uXZMaxCasterHeight64:{value:r.xzMaxCasterHeight64Texture},uSeaweedAnchors:{value:r.seaweedTexture},uLeafAtlas:{value:s?.texture??a},uLeafAtlasEnabled:{value:!!s},uLeafAtlasSize:{value:Math.max(1,s?.atlasSize??1)},uLeafAtlasHeight:{value:Math.max(1,s?.atlasHeight??1)},uLeafAtlasTileSize:{value:Math.max(1,s?.tileSize??1)},uLeafVariantCount:{value:l},uLeafVariantTiles:{value:o},uVolumeOrigin:{value:r.origin.clone()},uVolumeSize:{value:r.dimensions.clone()},uBrickGridSize:{value:r.brickDimensions.clone()},uMacroBrickGridSize:{value:r.macroBrickDimensions.clone()},uXZMaxCasterGrid8:{value:new q(Math.ceil(r.dimensions.x/K[0]),Math.ceil(r.dimensions.z/K[0]))},uXZMaxCasterGrid32:{value:new q(Math.ceil(r.dimensions.x/K[1]),Math.ceil(r.dimensions.z/K[1]))},uXZMaxCasterGrid64:{value:new q(Math.ceil(r.dimensions.x/K[2]),Math.ceil(r.dimensions.z/K[2]))},uSunDirection:{value:this.sunDirection.clone()},uSunIntensity:{value:this.sunIntensity},uCameraNear:{value:.1},uCameraFar:{value:1024},uInvProjectionMatrix:{value:new Ae},uCameraMatrixWorld:{value:new Ae},uMaxDistance:{value:this.maxDistance},uMaxSteps:{value:this.maxSteps},uSunAngularRadius:{value:ac},uSeaweedWaterLevel:{value:42.5},uEnabled:{value:!0},uCharacterBoxCount:{value:0},uCharacterBoxInverse:{value:this.characterBoxInverse},uCharacterBoxCenters:{value:this.characterBoxCenters},uCharacterBoxHalfSizes:{value:this.characterBoxHalfSizes},uCharacterBoundsMin:{value:this.characterBoundsMin},uCharacterBoundsMax:{value:this.characterBoundsMax},uCharacterScreenBounds:{value:this.characterScreenBounds},uCharacterShadowMaxDistance:{value:this.characterShadowMaxDistance},uCameraTanHalfFovY:{value:1},uCameraViewportHeight:{value:Math.max(1,this.resolution.y)}},vertexShader:`
        out vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        precision highp int;

        uniform sampler2D tDepth;
        uniform sampler2D tReceiverWorld;
        uniform sampler2D uCoarseVisibility;
        uniform sampler2D uCoarseReceiverWorld;
        uniform vec2 uCoarseResolution;
        uniform int uShadowPassMode;
        uniform bool uUseReceiverWorld;
        uniform highp usampler3D uVoxelCasterFlags;
        uniform highp usampler3D uBrickOccupancy;
        uniform highp usampler3D uMacroBrickOccupancy;
        uniform highp usampler3D uBrickDetailOccupancy;
        uniform sampler3D uLeafBrickDensity;
        uniform sampler2D uXZMaxCasterHeight8;
        uniform sampler2D uXZMaxCasterHeight32;
        uniform sampler2D uXZMaxCasterHeight64;
        uniform sampler2D uSeaweedAnchors;
        uniform sampler2D uLeafAtlas;
        uniform bool uLeafAtlasEnabled;
        uniform float uLeafAtlasSize;
        uniform float uLeafAtlasHeight;
        uniform float uLeafAtlasTileSize;
        uniform int uLeafVariantCount;
        uniform vec4 uLeafVariantTiles[${Vi}];
        uniform vec3 uVolumeOrigin;
        uniform vec3 uVolumeSize;
        uniform vec3 uBrickGridSize;
        uniform vec3 uMacroBrickGridSize;
        uniform vec2 uXZMaxCasterGrid8;
        uniform vec2 uXZMaxCasterGrid32;
        uniform vec2 uXZMaxCasterGrid64;
        uniform vec3 uSunDirection;
        uniform float uSunIntensity;
        uniform float uCameraNear;
        uniform float uCameraFar;
        uniform mat4 uInvProjectionMatrix;
        uniform mat4 uCameraMatrixWorld;
        uniform float uMaxDistance;
        uniform int uMaxSteps;
        uniform float uSunAngularRadius;
        uniform float uSeaweedWaterLevel;
        uniform bool uEnabled;
        uniform int uCharacterBoxCount;
        uniform mat4 uCharacterBoxInverse[${$e}];
        uniform vec3 uCharacterBoxCenters[${$e}];
        uniform vec3 uCharacterBoxHalfSizes[${$e}];
        uniform vec3 uCharacterBoundsMin;
        uniform vec3 uCharacterBoundsMax;
        uniform vec4 uCharacterScreenBounds;
        uniform float uCharacterShadowMaxDistance;
        uniform float uCameraTanHalfFovY;
        uniform float uCameraViewportHeight;

        in vec2 vUv;
        layout(location = 0) out vec4 outColor;

        const int BRICK_SIZE = ${ae};
        const int MACRO_BRICK_SIZE = ${at};
        const uint CASTER_OPAQUE_BIT = ${ai}u;
        const uint CASTER_LEAF_BIT = ${ri}u;
        const uint CASTER_GRASS_BIT = ${si}u;
        const float LEAF_BRICK_DENSITY_FAST_PATH_THRESHOLD = 0.18;
        const int DETAILED_LEAF_LAYERS = 3;
        const float LEAF_RECEIVER_LAYER_TRANSMISSION = 0.62;

        bool insideVolume(ivec3 cell) {
          return all(greaterThanEqual(cell, ivec3(0))) &&
            all(lessThan(cell, ivec3(uVolumeSize)));
        }

        bool insideBrickGrid(ivec3 cell) {
          return all(greaterThanEqual(cell, ivec3(0))) &&
            all(lessThan(cell, ivec3(uBrickGridSize)));
        }

        uint casterFlagsAt(ivec3 cell) {
          return texelFetch(uVoxelCasterFlags, cell, 0).r;
        }

        bool casterHasFlag(ivec3 cell, uint flag) {
          return (casterFlagsAt(cell) & flag) != 0u;
        }

        bool safeCasterHasFlag(ivec3 cell, uint flag) {
          return insideVolume(cell) && casterHasFlag(cell, flag);
        }

        bool insideMacroBrickGrid(ivec3 cell) {
          return all(greaterThanEqual(cell, ivec3(0))) &&
            all(lessThan(cell, ivec3(uMacroBrickGridSize)));
        }

        bool macroBrickAt(ivec3 brick) {
          return texelFetch(uMacroBrickOccupancy, brick, 0).r != 0u;
        }

        bool insideXZGrid(ivec2 tile, vec2 gridSize) {
          return all(greaterThanEqual(tile, ivec2(0))) &&
            all(lessThan(tile, ivec2(gridSize)));
        }

        float minimumPositive2(vec2 values) {
          float result = 1e30;
          if (values.x > 1e-5) result = min(result, values.x);
          if (values.y > 1e-5) result = min(result, values.y);
          return result;
        }

        float getXZTileExitDistance(
          vec3 localPosition,
          vec3 directionSafe,
          ivec2 tile,
          float tileSize
        ) {
          vec2 tileMin = vec2(tile) * tileSize;
          vec2 tileMax = min(tileMin + vec2(tileSize), uVolumeSize.xz);
          vec2 boundary = mix(tileMin, tileMax, greaterThan(directionSafe.xz, vec2(0.0)));
          return minimumPositive2((boundary - localPosition.xz) / directionSafe.xz);
        }

        bool rayClearsXZTile(
          vec3 localPosition,
          vec3 direction,
          vec3 directionSafe,
          float tileMaxCasterY,
          ivec2 tile,
          float tileSize
        ) {
          float exitDistance = getXZTileExitDistance(
            localPosition,
            directionSafe,
            tile,
            tileSize
          );
          // The ray is linear over a tile. Its lowest Y is therefore at the
          // entry for an upward ray and at the exit for a downward ray.
          float lowestRayY = exitDistance >= 1e29
            ? (direction.y >= 0.0 ? localPosition.y : -1e30)
            : min(localPosition.y, localPosition.y + direction.y * exitDistance);
          return lowestRayY > tileMaxCasterY + 0.001;
        }

        float maxCasterHeight8(ivec2 tile) {
          return texelFetch(uXZMaxCasterHeight8, tile, 0).r;
        }

        float maxCasterHeight32(ivec2 tile) {
          return texelFetch(uXZMaxCasterHeight32, tile, 0).r;
        }

        float maxCasterHeight64(ivec2 tile) {
          return texelFetch(uXZMaxCasterHeight64, tile, 0).r;
        }

        bool receiverIsLeaf(vec3 localPosition) {
          // Depth reconstructs an axis-aligned face exactly on a voxel
          // boundary. Select the nearest boundary axis and probe its two sides
          // rather than trusting floor(), which can choose a different side
          // as the camera moves by a sub-pixel amount.
          const float epsilon = 0.003;
          vec3 withinCell = fract(localPosition);
          vec3 boundaryDistance = min(withinCell, vec3(1.0) - withinCell);
          vec3 axis = boundaryDistance.x <= boundaryDistance.y &&
              boundaryDistance.x <= boundaryDistance.z
            ? vec3(1.0, 0.0, 0.0)
            : boundaryDistance.y <= boundaryDistance.z
              ? vec3(0.0, 1.0, 0.0)
              : vec3(0.0, 0.0, 1.0);
          ivec3 positiveCell = ivec3(floor(localPosition + axis * epsilon));
          ivec3 negativeCell = ivec3(floor(localPosition - axis * epsilon));
          bool touchesLeaf = safeCasterHasFlag(positiveCell, CASTER_LEAF_BIT) ||
            safeCasterHasFlag(negativeCell, CASTER_LEAF_BIT);
          bool touchesOpaque = safeCasterHasFlag(positiveCell, CASTER_OPAQUE_BIT) ||
            safeCasterHasFlag(negativeCell, CASTER_OPAQUE_BIT);
          // An opaque gameplay surface takes precedence when it shares a
          // boundary with foliage; terrain must retain detailed leaf dapple.
          return touchesLeaf && !touchesOpaque;
        }

        bool receiverTerrainNormal(vec3 localPosition, out vec3 normal) {
          const float epsilon = 0.01;
          vec3 withinCell = fract(localPosition);
          vec3 boundaryDistance = min(withinCell, vec3(1.0) - withinCell);
          float nearestBoundary = min(min(boundaryDistance.x, boundaryDistance.y), boundaryDistance.z);
          if (nearestBoundary > epsilon) return false;
          bool nearX = boundaryDistance.x <= epsilon;
          bool nearY = boundaryDistance.y <= epsilon;
          bool nearZ = boundaryDistance.z <= epsilon;
          // At an edge or corner several face normals are possible. Keep the
          // expensive path there instead of allowing one arbitrary tie-break
          // to reject a face whose other incident normal receives sunlight.
          if ((nearX && nearY) || (nearX && nearZ) || (nearY && nearZ)) return false;

          vec3 axis;
          if (nearX) {
            axis = vec3(1.0, 0.0, 0.0);
          } else if (nearY) {
            axis = vec3(0.0, 1.0, 0.0);
          } else {
            axis = vec3(0.0, 0.0, 1.0);
          }

          ivec3 positiveCell = ivec3(floor(localPosition + axis * epsilon));
          ivec3 negativeCell = ivec3(floor(localPosition - axis * epsilon));
          // Foliage and grass are not solid planes. An ambiguous boundary is
          // deliberately accepted so custom/dynamic receivers cannot lose a
          // valid shadow because this conservative fast path guessed wrong.
          if (safeCasterHasFlag(positiveCell, CASTER_LEAF_BIT) ||
              safeCasterHasFlag(negativeCell, CASTER_LEAF_BIT) ||
              safeCasterHasFlag(positiveCell, CASTER_GRASS_BIT) ||
              safeCasterHasFlag(negativeCell, CASTER_GRASS_BIT)) return false;
          bool positiveSolid = safeCasterHasFlag(positiveCell, CASTER_OPAQUE_BIT);
          bool negativeSolid = safeCasterHasFlag(negativeCell, CASTER_OPAQUE_BIT);
          if (positiveSolid == negativeSolid) return false;
          normal = positiveSolid ? -axis : axis;
          return true;
        }

        bool receiverNeedsVoxelTrace(vec3 receiver, vec3 sun) {
          // Custom seabed, seaweed, water, and character surfaces that do not
          // line up with a known opaque voxel fail open below. Known terrain
          // faces, including submerged seabed blocks, can still take the
          // direct-light back-face shortcut.
          vec3 normal;
          if (!receiverTerrainNormal(receiver - uVolumeOrigin, normal)) return true;
          return dot(normal, sun) > 0.0;
        }

        bool cellTouchesReceiver(ivec3 cell, vec3 receiverLocal) {
          const float epsilon = 0.004;
          vec3 cellMin = vec3(cell) - vec3(epsilon);
          vec3 cellMax = vec3(cell + ivec3(1)) + vec3(epsilon);
          return all(greaterThanEqual(receiverLocal, cellMin)) &&
            all(lessThanEqual(receiverLocal, cellMax));
        }

        bool brickAt(ivec3 brick) {
          return texelFetch(uBrickOccupancy, brick, 0).r != 0u;
        }

        bool brickDetailAt(ivec3 brick) {
          return texelFetch(uBrickDetailOccupancy, brick, 0).r != 0u;
        }

        float leafBrickDensityAt(vec3 localPosition) {
          return texture(
            uLeafBrickDensity,
            (localPosition / float(BRICK_SIZE)) / uBrickGridSize
          ).r;
        }

        vec3 getBrickBoundary(ivec3 brick, vec3 direction) {
          vec3 brickMin = vec3(brick * BRICK_SIZE);
          // Edge bricks can be smaller than BRICK_SIZE. Clamp their positive
          // boundary to the actual volume so density integration never counts
          // empty space beyond the authoritative occupancy field.
          vec3 brickMax = min(brickMin + vec3(float(BRICK_SIZE)), uVolumeSize);
          return mix(brickMin, brickMax, greaterThan(direction, vec3(0.0)));
        }

        vec3 getMacroBrickBoundary(ivec3 brick, vec3 direction) {
          vec3 brickMin = vec3(brick * MACRO_BRICK_SIZE);
          vec3 brickMax = min(brickMin + vec3(float(MACRO_BRICK_SIZE)), uVolumeSize);
          return mix(brickMin, brickMax, greaterThan(direction, vec3(0.0)));
        }

        bool grassAt(ivec3 cell) {
          return casterHasFlag(cell, CASTER_GRASS_BIT);
        }

        uint leafHash32(ivec3 point) {
          uint h = (uint(point.x) * 374761393u)
            ^ (uint(point.y) * 668265263u)
            ^ (uint(point.z) * 2147483647u);
          h = (h ^ (h >> 13u)) * 1274126177u;
          return h ^ (h >> 16u);
        }

        vec2 rotateLeafUv(vec2 uv, float turn) {
          if (turn < 0.5) return uv;
          if (turn < 1.5) return vec2(1.0 - uv.y, uv.x);
          if (turn < 2.5) return vec2(1.0 - uv.x, 1.0 - uv.y);
          return vec2(uv.y, 1.0 - uv.x);
        }

        int leafFaceSalt(vec3 direction) {
          vec3 absoluteDirection = abs(direction);
          if (absoluteDirection.y >= absoluteDirection.x && absoluteDirection.y >= absoluteDirection.z) {
            return direction.y > 0.0 ? 17 : 31;
          }
          if (absoluteDirection.x >= absoluteDirection.z) return direction.x > 0.0 ? 71 : 83;
          return direction.z > 0.0 ? 43 : 59;
        }

        vec2 leafFaceUv(vec3 pointInCell, vec3 direction) {
          vec3 absoluteDirection = abs(direction);
          if (absoluteDirection.y >= absoluteDirection.x && absoluteDirection.y >= absoluteDirection.z) {
            return direction.y > 0.0
              ? pointInCell.xz
              : vec2(pointInCell.x, 1.0 - pointInCell.z);
          }
          if (absoluteDirection.x >= absoluteDirection.z) {
            return direction.x > 0.0
              ? vec2(1.0 - pointInCell.z, 1.0 - pointInCell.y)
              : vec2(pointInCell.z, 1.0 - pointInCell.y);
          }
          return direction.z > 0.0
            ? vec2(pointInCell.x, 1.0 - pointInCell.y)
            : vec2(1.0 - pointInCell.x, 1.0 - pointInCell.y);
        }

        float fallbackLeafAlpha(vec2 uv, ivec3 cell) {
          // Runtime uses the generated atlas. Keep an explicitly clustered,
          // stable fallback for diagnostic construction without an atlas; it
          // must not reintroduce per-fragment FBM or scanline noise.
          ivec2 cluster = ivec2(floor(clamp(uv, vec2(0.0), vec2(1.0)) * 8.0));
          uint hash = leafHash32(cell + ivec3(cluster, cluster.x + cluster.y));
          return (hash & 3u) == 0u ? 0.0 : 1.0;
        }

        float leafAlphaAt(vec2 uv, ivec3 cell, vec3 faceDirection) {
          ivec3 worldCell = cell + ivec3(floor(uVolumeOrigin));
          int salt = leafFaceSalt(faceDirection);
          uint variantHash = leafHash32(ivec3(
            worldCell.x + salt,
            worldCell.y + salt * 3,
            worldCell.z + salt * 7
          ));
          int variant = int(variantHash % uint(max(uLeafVariantCount, 1)));
          float tileSize = max(uLeafAtlasTileSize, 1.0);
          vec2 orientedUv = rotateLeafUv(clamp(uv, vec2(0.0), vec2(1.0)), float(variantHash & 3u));
          vec2 texel = clamp(floor(orientedUv * tileSize), vec2(0.0), vec2(tileSize - 1.0));
          if (!uLeafAtlasEnabled) return fallbackLeafAlpha(orientedUv, worldCell);
          vec4 tile = uLeafVariantTiles[variant];
          vec2 atlasTexel = tile.xy * tileSize + texel + vec2(0.5);
          vec2 atlasResolution = vec2(uLeafAtlasSize * tileSize, uLeafAtlasHeight * tileSize);
          return texture(uLeafAtlas, atlasTexel / atlasResolution).a;
        }

        float leafShadowTransmission(
          vec3 local,
          vec3 direction,
          ivec3 cell,
          float travel,
          vec3 faceDirection
        ) {
          vec3 exitPoint = clamp(local + direction * travel - vec3(cell), vec3(0.0), vec3(1.0));
          float coverage = leafAlphaAt(leafFaceUv(exitPoint, faceDirection), cell, faceDirection);
          // A fully covered cutout texel still transmits a small amount through
          // the leaf volume; neighboring leaf voxels then accumulate naturally
          // while isolated blocks remain visibly porous.
          return clamp(1.0 - coverage * 0.78, 0.18, 1.0);
        }

        vec4 seaweedAt(ivec3 cell) {
          return texelFetch(uSeaweedAnchors, ivec2(cell.x, cell.z), 0);
        }

        // A grass tuft is rendered as two crossed billboard planes.  For
        // shadows we use a compact vector silhouette made from seven tapered
        // blades on each plane.  This deliberately does not turn every alpha
        // texel in grass_leaves.png into a separate caster: at grazing sun
        // angles that representation projects source scanlines onto the
        // receiver and creates the striped artifact this pass is designed to
        // avoid.
        float taperedBlade(vec2 uv, float baseX, float tip, float lean, float baseWidth) {
          if (uv.y < 0.0 || uv.y > tip) return 0.0;
          float t = clamp(uv.y / max(tip, 1e-4), 0.0, 1.0);
          float center = baseX + lean * t;
          float width = mix(baseWidth, 0.010, t);
          return 1.0 - smoothstep(width * 0.55, width, abs(uv.x - center));
        }

        float bladeCoverage(vec2 uv) {
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
          float coverage = 0.0;
          // base, tip, lean, base width for a deliberately irregular tuft.
          coverage = max(coverage, taperedBlade(uv, 0.16, 0.78, -0.08, 0.045));
          coverage = max(coverage, taperedBlade(uv, 0.29, 0.96,  0.03, 0.055));
          coverage = max(coverage, taperedBlade(uv, 0.43, 0.88, -0.05, 0.060));
          coverage = max(coverage, taperedBlade(uv, 0.55, 1.00,  0.08, 0.065));
          coverage = max(coverage, taperedBlade(uv, 0.68, 0.91, -0.03, 0.052));
          coverage = max(coverage, taperedBlade(uv, 0.80, 0.72,  0.04, 0.045));
          coverage = max(coverage, taperedBlade(uv, 0.91, 0.56, -0.02, 0.040));
          return coverage;
        }

        bool grassBladeHit(vec3 local, vec3 direction, ivec3 cell, float maxTravel) {
          vec3 cellMin = vec3(cell);
          const float base = 0.04;
          const float extent = 0.92;
          const float height = 0.90;
          const float epsilon = 1e-4;
          const float selfHitEpsilon = 0.01;

          // The visible tuft geometry is authored with a 45-degree yaw around
          // its cell center. Transform the shadow ray into that local frame so
          // the compact analytic caster remains aligned with the cards.
          const float yawCos = 0.70710678118;
          const float yawSin = 0.70710678118;
          vec2 cellCenter = vec2(cellMin.x + 0.5, cellMin.z + 0.5);
          vec2 localOffset = local.xz - cellCenter;
          vec2 directionXZ = direction.xz;
          vec2 rotatedLocalOffset = vec2(
            yawCos * localOffset.x + yawSin * localOffset.y,
            -yawSin * localOffset.x + yawCos * localOffset.y
          );
          vec2 rotatedDirectionXZ = vec2(
            yawCos * directionXZ.x + yawSin * directionXZ.y,
            -yawSin * directionXZ.x + yawCos * directionXZ.y
          );
          vec3 grassLocal = local;
          grassLocal.xz = cellCenter + rotatedLocalOffset;
          vec3 grassDirection = direction;
          grassDirection.xz = rotatedDirectionXZ;

          // First billboard plane: z is fixed, x/y carry the silhouette UV.
          if (abs(grassDirection.z) > epsilon) {
            float travelZ = (cellMin.z + 0.5 - grassLocal.z) / grassDirection.z;
            if (travelZ > selfHitEpsilon && travelZ <= maxTravel + epsilon) {
              vec3 point = grassLocal + grassDirection * travelZ;
              if (point.y >= cellMin.y - epsilon && point.y <= cellMin.y + height + epsilon &&
                  point.x >= cellMin.x + base - epsilon && point.x <= cellMin.x + base + extent + epsilon) {
                vec2 uv = vec2((point.x - cellMin.x - base) / extent, (point.y - cellMin.y) / height);
                if (bladeCoverage(uv) > 0.5) return true;
              }
            }
          }

          // Second billboard plane: x is fixed, z/y carry the same silhouette.
          if (abs(grassDirection.x) > epsilon) {
            float travelX = (cellMin.x + 0.5 - grassLocal.x) / grassDirection.x;
            if (travelX > selfHitEpsilon && travelX <= maxTravel + epsilon) {
              vec3 point = grassLocal + grassDirection * travelX;
              if (point.y >= cellMin.y - epsilon && point.y <= cellMin.y + height + epsilon &&
                  point.z >= cellMin.z + base - epsilon && point.z <= cellMin.z + base + extent + epsilon) {
                vec2 uv = vec2((point.z - cellMin.z - base) / extent, (point.y - cellMin.y) / height);
                if (bladeCoverage(uv) > 0.5) return true;
              }
            }
          }
          return false;
        }

        float seaweedBladeCoverage(vec2 uv) {
          if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) return 0.0;
          float coverage = 0.0;
          // The source seaweed PNG is an alpha-cutout card. This compact
          // silhouette keeps the custom shadow ray cheap while preserving the
          // characteristic two-branch shape at the scale of a world shadow.
          float t = clamp(uv.y, 0.0, 1.0);
          float widthA = mix(0.075, 0.010, t);
          float centerA = 0.33 - 0.10 * t;
          coverage = max(coverage, 1.0 - smoothstep(widthA * 0.55, widthA, abs(uv.x - centerA)));
          float widthB = mix(0.085, 0.012, t);
          float centerB = 0.57 + 0.13 * t;
          coverage = max(coverage, 1.0 - smoothstep(widthB * 0.55, widthB, abs(uv.x - centerB)));
          float widthC = mix(0.065, 0.008, t);
          float centerC = 0.74 - 0.08 * t;
          coverage = max(coverage, 1.0 - smoothstep(widthC * 0.55, widthC, abs(uv.x - centerC)));
          return coverage;
        }

        bool seaweedBladeHit(
          vec3 local,
          vec3 direction,
          ivec3 cell,
          float maxTravel,
          vec4 encoded
        ) {
          if (encoded.a <= 0.0) return false;

          vec3 root = vec3(
            float(cell.x) + encoded.r,
            encoded.b * uVolumeSize.y,
            float(cell.z) + encoded.g
          );
          float height = max(encoded.a * ${ji.toFixed(1)}, 0.02);
          // Roots are at the center of their block. Keep this analytic shadow
          // proxy inside that root cell so one field texel is enough; reading
          // a 3x3 neighbourhood here multiplied the full-screen DDA cost by
          // nine. The visible cards still use the texture's native aspect.
          const float halfWidth = 0.47;
          const float epsilon = 1e-4;
          const float selfHitEpsilon = 0.01;

          // First crossed plane: z is fixed, x/y carry the seaweed mask.
          if (abs(direction.z) > epsilon) {
            float travelZ = (root.z - local.z) / direction.z;
            if (travelZ > selfHitEpsilon && travelZ <= maxTravel + epsilon) {
              vec3 point = local + direction * travelZ;
              if (point.y >= root.y - epsilon && point.y <= root.y + height + epsilon &&
                  point.x >= root.x - halfWidth - epsilon && point.x <= root.x + halfWidth + epsilon) {
                vec2 uv = vec2(
                  (point.x - root.x + halfWidth) / (2.0 * halfWidth),
                  (point.y - root.y) / height
                );
                if (seaweedBladeCoverage(uv) > 0.5) return true;
              }
            }
          }

          // Second crossed plane: x is fixed, z/y carry the same mask.
          if (abs(direction.x) > epsilon) {
            float travelX = (root.x - local.x) / direction.x;
            if (travelX > selfHitEpsilon && travelX <= maxTravel + epsilon) {
              vec3 point = local + direction * travelX;
              if (point.y >= root.y - epsilon && point.y <= root.y + height + epsilon &&
                  point.z >= root.z - halfWidth - epsilon && point.z <= root.z + halfWidth + epsilon) {
                vec2 uv = vec2(
                  (point.z - root.z + halfWidth) / (2.0 * halfWidth),
                  (point.y - root.y) / height
                );
                if (seaweedBladeCoverage(uv) > 0.5) return true;
              }
            }
          }
          return false;
        }

        float readViewDepth(vec2 uv) {
          float rawDepth = texture(tDepth, clamp(uv, vec2(0.0), vec2(1.0))).r;
          if (rawDepth >= 0.999999) return uCameraFar;
          float viewZ = (uCameraNear * uCameraFar) /
            ((uCameraFar - uCameraNear) * rawDepth - uCameraFar);
          return -viewZ;
        }

        vec3 reconstructWorldPosition(vec2 uv, float viewDepth) {
          vec2 ndc = uv * 2.0 - 1.0;
          vec4 viewFar = uInvProjectionMatrix * vec4(ndc, 1.0, 1.0);
          viewFar /= viewFar.w;
          vec3 directionView = normalize(viewFar.xyz);
          vec3 positionView = directionView * (viewDepth / max(1e-4, -directionView.z));
          return (uCameraMatrixWorld * vec4(positionView, 1.0)).xyz;
        }

        vec2 coarsePixelUv(vec2 uv) {
          vec2 safeResolution = max(uCoarseResolution, vec2(1.0));
          return (floor(clamp(uv, vec2(0.0), vec2(0.999999)) * safeResolution) + 0.5)
            / safeResolution;
        }

        vec4 coarseReceiverAt(vec2 coarseUv) {
          if (uUseReceiverWorld) return texture(uCoarseReceiverWorld, coarseUv);
          float coarseDepth = readViewDepth(coarseUv);
          if (coarseDepth >= uCameraFar * 0.999) return vec4(0.0);
          return vec4(reconstructWorldPosition(coarseUv, coarseDepth), 1.0);
        }

        float coarseReceiverContinuity(
          vec2 coarseUv,
          float fullViewDepth,
          vec3 fullReceiver,
          out float coverage
        ) {
          vec4 coarseReceiver = coarseReceiverAt(coarseUv);
          coverage = step(0.5, coarseReceiver.a);
          if (coverage < 0.5) return 0.0;
          float receiverFootprint = max(length(dFdx(fullReceiver)), length(dFdy(fullReceiver)));
          // A coarse pixel may cover a whole block face, but it must never
          // seed a full-resolution result across a depth/source discontinuity.
          float sourceTolerance = max(0.04, receiverFootprint * 2.25);
          float sourceError = length(coarseReceiver.rgb - fullReceiver);
          float sourceContinuity = 1.0 - smoothstep(
            sourceTolerance,
            sourceTolerance * 2.0,
            sourceError
          );
          float coarseViewDepth = readViewDepth(coarseUv);
          float depthTolerance = max(0.06, fullViewDepth * 0.018);
          float depthContinuity = 1.0 - smoothstep(
            depthTolerance,
            depthTolerance * 3.0,
            abs(coarseViewDepth - fullViewDepth)
          );
          return sourceContinuity * depthContinuity;
        }

        bool coarseReceiverMatchesFull(
          vec2 uv,
          float fullViewDepth,
          vec3 fullReceiver,
          out float coarseVisibility,
          out float matchedFraction,
          out float visibilityRange,
          out bool coverageChanged
        ) {
          vec2 baseUv = coarsePixelUv(uv);
          vec2 coarseTexel = 1.0 / max(uCoarseResolution, vec2(1.0));
          vec2 coarseUvs[4];
          coarseUvs[0] = baseUv;
          coarseUvs[1] = clamp(baseUv + vec2(coarseTexel.x, 0.0), vec2(0.0), vec2(1.0));
          coarseUvs[2] = clamp(baseUv + vec2(0.0, coarseTexel.y), vec2(0.0), vec2(1.0));
          coarseUvs[3] = clamp(baseUv + coarseTexel, vec2(0.0), vec2(1.0));

          float visibilitySum = 0.0;
          float minimumVisibility = 1.0;
          float maximumVisibility = 0.0;
          float matched = 0.0;
          bool sawCoverage = false;
          bool sawGap = false;
          for (int index = 0; index < 4; index++) {
            float coverage = 0.0;
            float continuity = coarseReceiverContinuity(
              coarseUvs[index],
              fullViewDepth,
              fullReceiver,
              coverage
            );
            if (coverage > 0.5) sawCoverage = true;
            else sawGap = true;
            if (continuity > 0.5 && coverage > 0.5) {
              float visibility = texture(uCoarseVisibility, coarseUvs[index]).r;
              visibilitySum += visibility;
              minimumVisibility = min(minimumVisibility, visibility);
              maximumVisibility = max(maximumVisibility, visibility);
              matched += 1.0;
            }
          }
          matchedFraction = matched / 4.0;
          coverageChanged = sawCoverage && sawGap;
          if (matched <= 0.0) {
            coarseVisibility = 1.0;
            visibilityRange = 1.0;
            return false;
          }
          coarseVisibility = visibilitySum / matched;
          visibilityRange = maximumVisibility - minimumVisibility;
          return matchedFraction >= 0.75;
        }

        float minimumPositive(vec3 values) {
          float result = 1e30;
          if (values.x > 1e-5) result = min(result, values.x);
          if (values.y > 1e-5) result = min(result, values.y);
          if (values.z > 1e-5) result = min(result, values.z);
          return result;
        }

        bool characterBoundsHit(vec3 origin, vec3 direction, float maxTravel) {
          vec3 directionSafe = vec3(
            abs(direction.x) < 1e-5 ? (direction.x < 0.0 ? -1e-5 : 1e-5) : direction.x,
            abs(direction.y) < 1e-5 ? (direction.y < 0.0 ? -1e-5 : 1e-5) : direction.y,
            abs(direction.z) < 1e-5 ? (direction.z < 0.0 ? -1e-5 : 1e-5) : direction.z
          );
          vec3 t0 = (uCharacterBoundsMin - origin) / directionSafe;
          vec3 t1 = (uCharacterBoundsMax - origin) / directionSafe;
          vec3 tMin = min(t0, t1);
          vec3 tMax = max(t0, t1);
          float entry = max(max(tMin.x, tMin.y), tMin.z);
          float exit = min(min(tMax.x, tMax.y), tMax.z);
          return exit >= max(entry, 0.004) && entry <= maxTravel;
        }

        // Returns a signed slab-overlap margin. Positive means the center sun
        // ray intersects this exact animated box before maxTravel; negative
        // means it misses. The continuous margin lets the final edge use a
        // deterministic geometric coverage width instead of a sampled map.
        float characterBoxHitMargin(vec3 origin, vec3 direction, int index, float maxTravel) {
          mat4 inverseBox = uCharacterBoxInverse[index];
          vec3 localOrigin = (inverseBox * vec4(origin, 1.0)).xyz - uCharacterBoxCenters[index];
          vec3 localDirection = (inverseBox * vec4(direction, 0.0)).xyz;
          vec3 safeDirection = vec3(
            abs(localDirection.x) < 1e-5 ? (localDirection.x < 0.0 ? -1e-5 : 1e-5) : localDirection.x,
            abs(localDirection.y) < 1e-5 ? (localDirection.y < 0.0 ? -1e-5 : 1e-5) : localDirection.y,
            abs(localDirection.z) < 1e-5 ? (localDirection.z < 0.0 ? -1e-5 : 1e-5) : localDirection.z
          );
          vec3 t0 = (-uCharacterBoxHalfSizes[index] - localOrigin) / safeDirection;
          vec3 t1 = ( uCharacterBoxHalfSizes[index] - localOrigin) / safeDirection;
          vec3 tMin = min(t0, t1);
          vec3 tMax = max(t0, t1);
          float entry = max(max(tMin.x, tMin.y), tMin.z);
          float exit = min(min(tMax.x, tMax.y), tMax.z);
          float clippedEntry = max(entry, 0.004);
          return min(exit - clippedEntry, maxTravel - clippedEntry);
        }

        float traceCharacterVisibility(vec3 receiverWorld, vec3 direction, float edgeWidth) {
          if (uCharacterBoxCount <= 0 || !characterBoundsHit(receiverWorld, direction, uCharacterShadowMaxDistance)) {
            return 1.0;
          }

          float shadowCoverage = 0.0;
          for (int index = 0; index < ${$e}; index++) {
            if (index >= uCharacterBoxCount) break;
            float margin = characterBoxHitMargin(receiverWorld, direction, index, uCharacterShadowMaxDistance);
            shadowCoverage = max(shadowCoverage, smoothstep(-edgeWidth, edgeWidth, margin));
          }
          return 1.0 - shadowCoverage;
        }

        float traceVisibility(
          vec3 receiverWorld,
          vec3 rayDirection,
          bool includeSeaweed,
          bool leafReceiver
        ) {
          vec3 direction = normalize(rayDirection);
          vec3 directionSafe = vec3(
            abs(direction.x) < 1e-5 ? (direction.x < 0.0 ? -1e-5 : 1e-5) : direction.x,
            abs(direction.y) < 1e-5 ? (direction.y < 0.0 ? -1e-5 : 1e-5) : direction.y,
            abs(direction.z) < 1e-5 ? (direction.z < 0.0 ? -1e-5 : 1e-5) : direction.z
          );
          // Start just outside the receiver. Opaque self-intersection is
          // suppressed by cell identity, while porous grass and leaves are
          // tested independently below so a caster rooted directly on a
          // receiver face remains valid even when it shares the cell.
          vec3 local = receiverWorld + direction * 0.002 - uVolumeOrigin;
          vec3 receiverLocal = receiverWorld - uVolumeOrigin;
          ivec3 receiverCell = ivec3(floor(receiverWorld - uVolumeOrigin));
          ivec3 cell = ivec3(floor(local));
          vec3 stepAxis = sign(direction);
          vec3 inverseDirection = 1.0 / abs(directionSafe);
          float travelled = 0.0;
          float visibility = 1.0;
          ivec3 cachedLeafBrick = ivec3(-1);
          float cachedLeafDensity = 0.0;
          bool cachedLeafOnly = false;
          int detailedLeafLayers = 0;
          ivec2 cachedXZTile64 = ivec2(-1);
          ivec2 cachedXZTile32 = ivec2(-1);
          ivec2 cachedXZTile8 = ivec2(-1);
          float cachedXZMax64 = -1.0;
          float cachedXZMax32 = -1.0;
          float cachedXZMax8 = -1.0;

          for (int iteration = 0; iteration < ${Wi}; iteration++) {
            if (iteration >= uMaxSteps) break;

            if (!insideVolume(cell)) return visibility;

            // Reject a whole XZ horizon tile when the lowest point of the ray
            // while crossing it is already above every caster in that tile.
            // The cache avoids re-fetching the same max-height texel on each
            // voxel step, while the comparison is still repeated so an upward
            // ray can become clear before it reaches the tile edge.
            ivec2 tile64 = ivec2(floor(local.xz / float(${K[2]})));
            if (insideXZGrid(tile64, uXZMaxCasterGrid64)) {
              if (any(notEqual(tile64, cachedXZTile64))) {
                cachedXZTile64 = tile64;
                cachedXZMax64 = maxCasterHeight64(tile64);
              }
              if (rayClearsXZTile(
                local,
                direction,
                directionSafe,
                cachedXZMax64,
                tile64,
                float(${K[2]})
              )) {
                float jump = getXZTileExitDistance(
                  local,
                  directionSafe,
                  tile64,
                  float(${K[2]})
                );
                if (jump >= 1e29) return visibility;
                travelled += jump;
                if (travelled > uMaxDistance) return visibility;
                local += directionSafe * (jump + 1e-3);
                cell = ivec3(floor(local));
                continue;
              }
            }

            ivec2 tile32 = ivec2(floor(local.xz / float(${K[1]})));
            if (insideXZGrid(tile32, uXZMaxCasterGrid32)) {
              if (any(notEqual(tile32, cachedXZTile32))) {
                cachedXZTile32 = tile32;
                cachedXZMax32 = maxCasterHeight32(tile32);
              }
              if (rayClearsXZTile(
                local,
                direction,
                directionSafe,
                cachedXZMax32,
                tile32,
                float(${K[1]})
              )) {
                float jump = getXZTileExitDistance(
                  local,
                  directionSafe,
                  tile32,
                  float(${K[1]})
                );
                if (jump >= 1e29) return visibility;
                travelled += jump;
                if (travelled > uMaxDistance) return visibility;
                local += directionSafe * (jump + 1e-3);
                cell = ivec3(floor(local));
                continue;
              }
            }

            ivec2 tile8 = ivec2(floor(local.xz / float(${K[0]})));
            if (insideXZGrid(tile8, uXZMaxCasterGrid8)) {
              if (any(notEqual(tile8, cachedXZTile8))) {
                cachedXZTile8 = tile8;
                cachedXZMax8 = maxCasterHeight8(tile8);
              }
              if (rayClearsXZTile(
                local,
                direction,
                directionSafe,
                cachedXZMax8,
                tile8,
                float(${K[0]})
              )) {
                float jump = getXZTileExitDistance(
                  local,
                  directionSafe,
                  tile8,
                  float(${K[0]})
                );
                if (jump >= 1e29) return visibility;
                travelled += jump;
                if (travelled > uMaxDistance) return visibility;
                local += directionSafe * (jump + 1e-3);
                cell = ivec3(floor(local));
                continue;
              }
            }

            ivec3 macroBrick = cell / MACRO_BRICK_SIZE;
            if (insideMacroBrickGrid(macroBrick) && !macroBrickAt(macroBrick)) {
              vec3 macroBoundary = getMacroBrickBoundary(macroBrick, direction);
              vec3 macroDistance = (macroBoundary - local) / directionSafe;
              float jump = minimumPositive(macroDistance);
              if (jump < 1e29) {
                travelled += jump;
                if (travelled > uMaxDistance) return visibility;
                local += directionSafe * (jump + 1e-3);
                cell = ivec3(floor(local));
                continue;
              }
            }

            ivec3 brick = cell / BRICK_SIZE;
            if (insideBrickGrid(brick) && !brickAt(brick)) {
              vec3 brickBoundary = getBrickBoundary(brick, direction);
              vec3 brickDistance = (brickBoundary - local) / directionSafe;
              float jump = minimumPositive(brickDistance);
              if (jump < 1e29) {
                travelled += jump;
                if (travelled > uMaxDistance) return visibility;
                local += directionSafe * (jump + 1e-3);
                cell = ivec3(floor(local));
                continue;
              }
            }

            // Preserve the established opaque self-intersection rule. Grass
            // and leaves do not use this gate as a solid blocker; each has its
            // own porous test below and both may share the receiver cell.
            bool differentOpaqueCell = any(notEqual(cell, receiverCell));
            if (differentOpaqueCell && casterHasFlag(cell, CASTER_OPAQUE_BIT)) return 0.0;

            bool receiverLeafCell = leafReceiver && cellTouchesReceiver(cell, receiverLocal);

            // A dense brick containing only leaves has no opaque voxel or
            // billboard caster that requires per-cell detail. After enough
            // exact front layers establish the visible dapple, integrate its
            // measured occupancy in one step. This keeps deep canopy bounded
            // without replacing the near-field silhouette with an 8³ cube.
            if (insideBrickGrid(brick)) {
              if (any(notEqual(brick, cachedLeafBrick))) {
                cachedLeafBrick = brick;
                cachedLeafDensity = leafBrickDensityAt(
                  (vec3(brick) + vec3(0.5)) * float(BRICK_SIZE)
                );
                cachedLeafOnly = cachedLeafDensity >= LEAF_BRICK_DENSITY_FAST_PATH_THRESHOLD &&
                  !brickDetailAt(brick);
              }
              // Keep the first few intersected leaf voxels exact. Their
              // independently oriented atlas silhouettes create the readable
              // near-field dapple; only deeper canopy is summarized for cost.
              int requiredDetailedLayers = leafReceiver ? 0 : DETAILED_LEAF_LAYERS;
              if (cachedLeafOnly &&
                  detailedLeafLayers >= requiredDetailedLayers &&
                  !receiverLeafCell) {
                vec3 brickBoundary = getBrickBoundary(brick, direction);
                vec3 brickDistance = (brickBoundary - local) / directionSafe;
                float jump = minimumPositive(brickDistance);
                if (jump < 1e29) {
                  float density = leafBrickDensityAt(local + direction * jump * 0.5);
                  bool receiverInBrick = all(equal(
                    brick,
                    ivec3(floor(vec3(receiverCell) / float(BRICK_SIZE)))
                  ));
                  // Preserve the per-cell self-hit suppression used by the
                  // detailed path when the receiver itself is a leaf fragment.
                  if (receiverInBrick && (leafReceiver || casterHasFlag(receiverCell, CASTER_LEAF_BIT))) {
                    density = max(0.0, density - 1.0 / 512.0);
                  }
                  visibility *= exp(-0.78 * density * jump);
                  travelled += jump;
                  if (travelled > uMaxDistance) return visibility;
                  local += directionSafe * (jump + 1e-3);
                  cell = ivec3(floor(local));
                  continue;
                }
              }
            }

            vec3 voxelBoundary = vec3(cell) + mix(
              vec3(0.0), vec3(1.0), greaterThan(direction, vec3(0.0))
            );
            vec3 voxelDistance = (voxelBoundary - local) / directionSafe;
            float travel = minimumPositive(voxelDistance);
            travelled += travel;
            if (travelled > uMaxDistance || travel >= 1e29) return visibility;

            vec3 exitFaceDirection = vec3(0.0);
            if (voxelDistance.x <= voxelDistance.y && voxelDistance.x <= voxelDistance.z) {
              exitFaceDirection.x = stepAxis.x;
            } else if (voxelDistance.y <= voxelDistance.z) {
              exitFaceDirection.y = stepAxis.y;
            } else {
              exitFaceDirection.z = stepAxis.z;
            }

            bool differentDecorativeCell = leafReceiver
              ? !receiverLeafCell
              : any(notEqual(cell, receiverCell));
            if (differentDecorativeCell && casterHasFlag(cell, CASTER_LEAF_BIT)) {
              if (leafReceiver) {
                // Projecting one binary leaf tile onto a parallel interior
                // leaf face creates moire-like diagonal bands and unstable
                // layer switching. Interior foliage receives the same canopy
                // energy as a smooth layer transmission; non-leaf receivers
                // retain the exact procedural silhouette below.
                visibility *= LEAF_RECEIVER_LAYER_TRANSMISSION;
              } else {
                visibility *= leafShadowTransmission(
                  local,
                  direction,
                  cell,
                  travel,
                  exitFaceDirection
                );
                detailedLeafLayers += 1;
              }
              if (visibility <= 0.01) return 0.0;
            }
            if (grassAt(cell) && grassBladeHit(local, direction, cell, travel)) return 0.0;
            if (includeSeaweed) {
              // One nearest-filtered lookup per traversed root cell. Seaweed
              // is a render-only caster and is deliberately absent from the
              // opaque voxel texture and from inland/above-water rays.
              vec4 seaweed = seaweedAt(cell);
              if (seaweed.a > 0.0 && seaweedBladeHit(local, direction, cell, travel, seaweed)) return 0.0;
            }

            if (voxelDistance.x <= voxelDistance.y && voxelDistance.x <= voxelDistance.z) {
              cell.x += int(stepAxis.x);
            } else if (voxelDistance.y <= voxelDistance.z) {
              cell.y += int(stepAxis.y);
            } else {
              cell.z += int(stepAxis.z);
            }
            local += directionSafe * travel;
          }
          return visibility;
        }

        float traceSolarDiscExact(
          vec3 receiver,
          vec3 sun,
          vec3 tangentA,
          vec3 tangentB,
          bool includeSeaweed,
          bool leafReceiver
        ) {
          // Use one fixed, deterministic nine-ray kernel. The previous
          // 5-or-21-ray boundary classifier made the cost and result change
          // abruptly as a leaf edge crossed a pixel, which presented as both
          // tree-adjacent FPS drops and flickering shadow stripes.
          const int DISC_SAMPLES = 8;
          const float GOLDEN_ANGLE = 2.39996323;
          float sum = traceVisibility(receiver, sun, includeSeaweed, leafReceiver);
          for (int i = 0; i < DISC_SAMPLES; i++) {
            float fraction = (float(i) + 0.5) / float(DISC_SAMPLES);
            float radius = sqrt(fraction) * uSunAngularRadius;
            float angle = (float(i) + 0.5) * GOLDEN_ANGLE;
            vec2 disk = vec2(cos(angle), sin(angle)) * radius;
            sum += traceVisibility(
              receiver,
              normalize(sun + tangentA * disk.x + tangentB * disk.y),
              includeSeaweed,
              leafReceiver
            );
          }
          return sum / float(1 + DISC_SAMPLES);
        }

        void main() {
          float viewDepth = readViewDepth(vUv);
          vec4 receiverSample = texture(tReceiverWorld, vUv);
          if (!uEnabled || uSunIntensity <= 0.0001 || (uUseReceiverWorld
              ? receiverSample.a <= 0.0
              : viewDepth >= uCameraFar * 0.999)) {
            outColor = vec4(1.0, 0.0, 0.0, 1.0);
            return;
          }
          vec3 receiver = uUseReceiverWorld
            ? receiverSample.rgb
            : reconstructWorldPosition(vUv, viewDepth);
          vec3 sun = normalize(uSunDirection);
          // A back-facing opaque terrain face receives no direct sunlight.
          // Resolve it as fully visible without entering the expensive solar
          // disc/DDA loop; foliage, water, characters, and ambiguous surfaces
          // intentionally fail open to the detailed path.
          if (!receiverNeedsVoxelTrace(receiver, sun)) {
            outColor = vec4(1.0, 0.0, 0.0, 1.0);
            return;
          }
          // Project a fixed world-up vector onto the solar-disc tangent plane.
          // Only the singular straight-up case needs a fallback; there is no
          // arbitrary |sun.y| threshold that can rotate the kernel in flight.
          vec3 tangentSeed = vec3(0.0, 1.0, 0.0);
          vec3 tangentA = tangentSeed - sun * dot(tangentSeed, sun);
          if (dot(tangentA, tangentA) < 1e-6) tangentA = vec3(1.0, 0.0, 0.0);
          tangentA = normalize(tangentA);
          vec3 tangentB = normalize(cross(sun, tangentA));
          bool includeSeaweed = receiver.y < uSeaweedWaterLevel - 0.05;
          bool leafReceiver = receiverIsLeaf(receiver - uVolumeOrigin);
          bool coarsePass = uShadowPassMode == 1;
          float centerVisibility = 1.0;
          float coarseVisibility = 1.0;
          bool coarseReceiverMatch = false;
          float matchedFraction = 0.0;
          float visibilityRange = 1.0;
          bool coverageChanged = false;
          if (!coarsePass) {
            centerVisibility = traceVisibility(receiver, sun, includeSeaweed, leafReceiver);
            coarseReceiverMatch = coarseReceiverMatchesFull(
              vUv,
              viewDepth,
              receiver,
              coarseVisibility,
              matchedFraction,
              visibilityRange,
              coverageChanged
            );
          }
          // The coarse receiver is a soft-disc estimate, not an unconditional
          // image blur. Only source/depth/coverage-continuous samples may
          // contribute it; every discontinuity falls back to the native
          // center ray and never escalates to another eight DDA traversals.
          float visibility = coarsePass
            ? traceSolarDiscExact(
              receiver,
              sun,
              tangentA,
              tangentB,
              includeSeaweed,
              leafReceiver
            )
            : coarseReceiverMatch && !coverageChanged
              ? mix(centerVisibility, coarseVisibility, 0.75)
              : centerVisibility;
          // The player caster is evaluated exactly once per receiver, outside
          // traceSolarDisc's terrain ray loop. The screen bound is a
          // conservative optimization; the world-space AABB remains the
          // correctness guard inside traceCharacterVisibility.
          if (!coarsePass && uCharacterBoxCount > 0 &&
              (uUseReceiverWorld || (
                vUv.x >= uCharacterScreenBounds.x && vUv.x <= uCharacterScreenBounds.z &&
                vUv.y >= uCharacterScreenBounds.y && vUv.y <= uCharacterScreenBounds.w
              ))) {
            // Direct receivers use the ordinary perspective footprint. The
            // forward path instead differentiates its stored source receiver:
            // Snell projection changes the screen-to-world Jacobian, so camera
            // depth alone is not the footprint of a refracted pixel.
            float perspectivePixelWorldSize = 2.0 * viewDepth * uCameraTanHalfFovY /
              max(uCameraViewportHeight, 1.0);
            float refractedPixelWorldSize = max(
              length(dFdx(receiver)),
              length(dFdy(receiver))
            );
            float pixelWorldSize = uUseReceiverWorld
              ? refractedPixelWorldSize
              : perspectivePixelWorldSize;
            float edgeWidth = max(0.004, pixelWorldSize * 1.25);
            visibility = min(visibility, traceCharacterVisibility(receiver, sun, edgeWidth));
          }
          outColor = vec4(visibility, 0.0, 0.0, 1.0);
        }
      `,depthTest:!1,depthWrite:!1,blending:$i}),this.leafAtlasFallback=a,this.quad=new ie(this.quadGeometry,this.quadMaterial),this.quad.frustumCulled=!1,this.scene.add(this.quad)}getTexture(){return this.target.texture}getForwardTexture(){return this.forwardTarget.texture}setDepthTexture(e){this.depthTexture=e,this.quadMaterial.uniforms.tDepth.value=e}setStageProfiler(e){this.stageProfiler=e}setSize(e,t){const i=Math.max(1,Math.floor(e*this.renderer.getPixelRatio())),r=Math.max(1,Math.floor(t*this.renderer.getPixelRatio()));this.resolution.set(i,r),this.coarseResolution.set(Math.max(1,Math.ceil(i*Wt)),Math.max(1,Math.ceil(r*Wt))),this.target.setSize(i,r),this.forwardTarget.setSize(i,r),this.coarseTarget.setSize(this.coarseResolution.x,this.coarseResolution.y),this.coarseForwardTarget.setSize(this.coarseResolution.x,this.coarseResolution.y),this.quadMaterial.uniforms.uCoarseResolution.value.copy(this.coarseResolution),this.targetInitialized=!1,this.forwardTargetInitialized=!1,this.coarseTargetInitialized=!1,this.coarseForwardTargetInitialized=!1}setSunDirection(e){this.sunDirection.copy(e).normalize(),this.quadMaterial.uniforms.uSunDirection.value.copy(this.sunDirection)}setSunIntensity(e){const t=this.directSunActive;this.sunIntensity=Number.isFinite(e)?Math.max(0,e):0,this.directSunActive=this.sunIntensity>1e-4,this.quadMaterial.uniforms.uSunIntensity.value=this.sunIntensity,t&&!this.directSunActive&&(this.targetInitialized=!1,this.forwardTargetInitialized=!1,this.coarseTargetInitialized=!1,this.coarseForwardTargetInitialized=!1)}setSeaweedWaterLevel(e){Number.isFinite(e)&&(this.quadMaterial.uniforms.uSeaweedWaterLevel.value=e)}setCharacterShadowBoxes(e){this.characterBoxCount=Math.min($e,e.length),this.characterBoundsMin.set(1/0,1/0,1/0),this.characterBoundsMax.set(-1/0,-1/0,-1/0);for(let t=0;t<$e;t+=1){const i=e[t];t<this.characterBoxCount&&i?(this.characterBoxInverse[t].copy(i.inverseMatrix),this.characterBoxCenters[t].copy(i.center),this.characterBoxHalfSizes[t].copy(i.halfSize),this.includeCharacterWorldBounds(i)):(this.characterBoxInverse[t].identity(),this.characterBoxCenters[t].set(0,0,0),this.characterBoxHalfSizes[t].set(0,0,0))}(this.characterBoxCount===0||!Number.isFinite(this.characterBoundsMin.x))&&(this.characterBoundsMin.set(0,0,0),this.characterBoundsMax.set(0,0,0),this.characterScreenBounds.set(0,0,0,0)),this.quadMaterial.uniforms.uCharacterBoxCount.value=this.characterBoxCount,this.quadMaterial.uniforms.uCharacterBoundsMin.value.copy(this.characterBoundsMin),this.quadMaterial.uniforms.uCharacterBoundsMax.value.copy(this.characterBoundsMax)}setSettings(e){e.enabled!==void 0&&(this.enabled=!!e.enabled,this.enabled||(this.targetInitialized=!1,this.forwardTargetInitialized=!1,this.coarseTargetInitialized=!1,this.coarseForwardTargetInitialized=!1)),e.maxDistance!==void 0&&(this.maxDistance=k.clamp(e.maxDistance,1,2e3)),e.maxSteps!==void 0&&(this.maxSteps=k.clamp(Math.floor(e.maxSteps),32,Wi)),this.quadMaterial.uniforms.uEnabled.value=this.enabled,this.quadMaterial.uniforms.uMaxDistance.value=this.maxDistance,this.quadMaterial.uniforms.uMaxSteps.value=this.maxSteps}update(e,t){if(this.setSunDirection(t),e.updateMatrixWorld(),this.quadMaterial.uniforms.uCameraNear.value=e.near,this.quadMaterial.uniforms.uCameraFar.value=e.far,this.quadMaterial.uniforms.uCameraTanHalfFovY.value=Math.tan(k.degToRad(e.getEffectiveFOV())*.5),this.quadMaterial.uniforms.uCameraViewportHeight.value=Math.max(1,this.resolution.y),this.quadMaterial.uniforms.uInvProjectionMatrix.value.copy(e.projectionMatrixInverse),this.quadMaterial.uniforms.uCameraMatrixWorld.value.copy(e.matrixWorld),this.updateCharacterScreenBounds(e),this.depthTexture&&(this.quadMaterial.uniforms.tDepth.value=this.depthTexture),!this.supported)return;if(!this.enabled||!this.directSunActive){(!this.targetInitialized||!this.forwardTargetInitialized||!this.coarseTargetInitialized||!this.coarseForwardTargetInitialized)&&this.clearVisibilityTargets();return}const i=this.renderer.getRenderTarget();try{this.quadMaterial.uniforms.uUseReceiverWorld.value=!1,this.quadMaterial.uniforms.uShadowPassMode.value=0,this.quadMaterial.uniforms.uCoarseVisibility.value=this.coarseTarget.texture,this.renderMixedRateVisibility(this.target,this.coarseTarget,"direct-voxel-shadow"),this.targetInitialized=!0,this.coarseTargetInitialized=!0}finally{this.renderer.setRenderTarget(i)}}updateForward(e,t){this.quadMaterial.uniforms.tReceiverWorld.value=e,this.quadMaterial.uniforms.uCoarseReceiverWorld.value=e,this.quadMaterial.uniforms.tDepth.value=t,this.quadMaterial.uniforms.uUseReceiverWorld.value=!0;const i=this.renderer.getRenderTarget();try{this.supported&&this.enabled&&this.directSunActive?(this.quadMaterial.uniforms.uShadowPassMode.value=0,this.quadMaterial.uniforms.uCoarseVisibility.value=this.coarseForwardTarget.texture,this.renderMixedRateVisibility(this.forwardTarget,this.coarseForwardTarget,"forward-voxel-shadow"),this.forwardTargetInitialized=!0,this.coarseForwardTargetInitialized=!0):this.supported&&(!this.targetInitialized||!this.forwardTargetInitialized||!this.coarseTargetInitialized||!this.coarseForwardTargetInitialized)&&this.clearVisibilityTargets()}finally{this.renderer.setRenderTarget(i),this.quadMaterial.uniforms.uUseReceiverWorld.value=!1,this.quadMaterial.uniforms.uShadowPassMode.value=0,this.quadMaterial.uniforms.tReceiverWorld.value=this.forwardTarget.texture,this.quadMaterial.uniforms.uCoarseReceiverWorld.value=this.forwardTarget.texture,this.quadMaterial.uniforms.uCoarseVisibility.value=this.coarseTarget.texture,this.quadMaterial.uniforms.tDepth.value=this.depthTexture}}getDiagnostics(){return{enabled:this.enabled,supported:this.supported,resolution:{width:this.resolution.x,height:this.resolution.y},outputResolution:{width:this.resolution.x,height:this.resolution.y},coarseResolution:{width:this.coarseResolution.x,height:this.coarseResolution.y},coarseScale:Wt,resolveMode:"coarse-disc-plus-fullres-center",coarseRaySamples:9,resolveRaySamplesMax:1,boundedRayWork:!0,maxDistance:this.maxDistance,maxSteps:this.maxSteps,sunIntensity:this.sunIntensity,directSunActive:this.directSunActive,characterShadowBoxes:this.characterBoxCount,characterShadowScreenBounds:{minX:this.characterScreenBounds.x,minY:this.characterScreenBounds.y,maxX:this.characterScreenBounds.z,maxY:this.characterScreenBounds.w},sunDirection:{x:this.sunDirection.x,y:this.sunDirection.y,z:this.sunDirection.z},volume:this.volume.getDiagnostics()}}renderMixedRateVisibility(e,t,i){const r=()=>{this.quadMaterial.uniforms.uCoarseVisibility.value=e.texture,this.quadMaterial.uniforms.uShadowPassMode.value=1,this.renderer.setRenderTarget(t),this.renderer.clear(!0,!1,!1),this.renderer.render(this.scene,this.camera),this.quadMaterial.uniforms.uCoarseVisibility.value=t.texture,this.quadMaterial.uniforms.uShadowPassMode.value=0,this.renderer.setRenderTarget(e),this.renderer.clear(!0,!1,!1),this.renderer.render(this.scene,this.camera)};this.stageProfiler?this.stageProfiler.measure(i,r):r()}clearVisibilityTargets(){const e=this.renderer.getRenderTarget(),t=new V;this.renderer.getClearColor(t);const i=this.renderer.getClearAlpha();try{this.renderer.setClearColor(16777215,1),this.renderer.setRenderTarget(this.target),this.renderer.clear(!0,!1,!1),this.renderer.setRenderTarget(this.forwardTarget),this.renderer.clear(!0,!1,!1),this.renderer.setRenderTarget(this.coarseTarget),this.renderer.clear(!0,!1,!1),this.renderer.setRenderTarget(this.coarseForwardTarget),this.renderer.clear(!0,!1,!1),this.targetInitialized=!0,this.forwardTargetInitialized=!0,this.coarseTargetInitialized=!0,this.coarseForwardTargetInitialized=!0}finally{this.renderer.setRenderTarget(e),this.renderer.setClearColor(t,i)}}includeCharacterWorldBounds(e){this.characterWorldMatrix.copy(e.inverseMatrix).invert();for(let t=0;t<2;t+=1)for(let i=0;i<2;i+=1)for(let r=0;r<2;r+=1)this.characterLocalCorner.set(e.center.x+(t?e.halfSize.x:-e.halfSize.x),e.center.y+(i?e.halfSize.y:-e.halfSize.y),e.center.z+(r?e.halfSize.z:-e.halfSize.z)),this.characterWorldCorner.copy(this.characterLocalCorner).applyMatrix4(this.characterWorldMatrix),this.characterBoundsMin.min(this.characterWorldCorner),this.characterBoundsMax.max(this.characterWorldCorner)}updateCharacterScreenBounds(e){if(this.characterBoxCount===0){this.characterScreenBounds.set(0,0,0,0),this.quadMaterial.uniforms.uCharacterScreenBounds.value.copy(this.characterScreenBounds);return}let t=1/0,i=1/0,r=-1/0,s=-1/0,a=!1;for(let o=0;o<2;o+=1)for(let l=0;l<2;l+=1)for(let c=0;c<2;c+=1)this.characterWorldCorner.set(o?this.characterBoundsMax.x:this.characterBoundsMin.x,l?this.characterBoundsMax.y:this.characterBoundsMin.y,c?this.characterBoundsMax.z:this.characterBoundsMin.z),this.includeCharacterScreenPoint(e,this.characterWorldCorner)?(t=Math.min(t,this.characterScreenPoint.x),i=Math.min(i,this.characterScreenPoint.y),r=Math.max(r,this.characterScreenPoint.x),s=Math.max(s,this.characterScreenPoint.y)):a=!0,this.characterWorldCorner.addScaledVector(this.sunDirection,-this.characterShadowMaxDistance),this.includeCharacterScreenPoint(e,this.characterWorldCorner)?(t=Math.min(t,this.characterScreenPoint.x),i=Math.min(i,this.characterScreenPoint.y),r=Math.max(r,this.characterScreenPoint.x),s=Math.max(s,this.characterScreenPoint.y)):a=!0;if(a||!Number.isFinite(t)||!Number.isFinite(i))this.characterScreenBounds.set(0,0,1,1);else{const o=2/Math.max(1,this.resolution.x),l=2/Math.max(1,this.resolution.y);this.characterScreenBounds.set(k.clamp(t-o,0,1),k.clamp(i-l,0,1),k.clamp(r+o,0,1),k.clamp(s+l,0,1))}this.quadMaterial.uniforms.uCharacterScreenBounds.value.copy(this.characterScreenBounds)}includeCharacterScreenPoint(e,t){if(this.characterClipCorner.set(t.x,t.y,t.z,1).applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix),this.characterClipCorner.w<=1e-4)return!1;const i=1/this.characterClipCorner.w;return this.characterScreenPoint.set(this.characterClipCorner.x*i*.5+.5,this.characterClipCorner.y*i*.5+.5),!0}dispose(){ba(null),this.target.dispose(),this.forwardTarget.dispose(),this.coarseTarget.dispose(),this.coarseForwardTarget.dispose(),this.quadGeometry.dispose(),this.quadMaterial.dispose(),this.leafAtlasFallback?.dispose()}}class sc{frameId=null;commit;schedule=()=>{this.frameId===null&&(this.frameId=requestAnimationFrame(()=>{this.frameId=null,this.commit()}))};constructor(e){this.commit=e,window.addEventListener("resize",this.schedule)}dispose(){window.removeEventListener("resize",this.schedule),this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}}const hr=4,ur=3e4;class dr extends Error{diagnostics;constructor(e,t,i){super(e,i===void 0?void 0:{cause:i}),this.name="GpuStartupWarmupError",this.diagnostics=t}}function oc(n){return n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:"Unknown GPU startup warmup failure"}async function nc(n){const e=n.frameCount??hr,t=Number.isFinite(e)?Math.max(2,Math.floor(e)):hr,i=n.timeoutMs??ur,r=Number.isFinite(i)?Math.max(1,Math.floor(i)):ur,s=n.requestAnimationFrame??(M=>globalThis.requestAnimationFrame(M)),a=n.cancelAnimationFrame??(M=>globalThis.cancelAnimationFrame(M)),o=n.now??(()=>globalThis.performance.now()),l=o(),c={warmupFrameCount:t,warmupFramesSubmitted:0,gpuFenceCreated:!1,gpuFenceCompleted:!1,warmupElapsedMs:0};let h=!1,u=null,d=null,f=null,m=null,p=null,v=null;const x=()=>({...c,warmupElapsedMs:Math.max(0,o()-l)}),y=()=>{n.onDiagnostics?.(x())},g=(M,I)=>new dr(M,x(),I),S=M=>{h=!0,d?.(M)},w=()=>{if(h||n.signal?.aborted)throw g("GPU startup warmup was cancelled");if(n.isRendererStopped?.())throw g("Renderer stopped during GPU startup warmup");if(o()-l>=r)throw g(`GPU startup warmup exceeded ${r}ms`)},b=()=>new Promise((M,I)=>{let W=!1;const C=()=>{u!==null&&(a(u),u=null),d===P&&(d=null),n.signal?.removeEventListener("abort",z)},P=$=>{W||(W=!0,C(),I($))},z=()=>P(g("GPU startup warmup was cancelled"));d=P,n.signal?.addEventListener("abort",z,{once:!0});try{w(),u=s(()=>{if(!W){W=!0,C();try{w(),M()}catch($){I($)}}})}catch($){P($)}}),D=()=>{if(!n.renderer.capabilities?.isWebGL2)throw g("GPU startup warmup requires a WebGL2 renderer");let M;try{M=n.renderer.getContext()}catch(I){throw g("Unable to obtain the WebGL2 context for GPU startup warmup",I)}if(typeof M.isContextLost=="function"&&M.isContextLost())throw g("WebGL context was lost during GPU startup warmup");if(typeof M.fenceSync!="function"||typeof M.clientWaitSync!="function"||typeof M.flush!="function"||typeof M.deleteSync!="function")throw g("WebGL2 fence synchronization is unavailable");return M},F=async()=>{for(let M=0;M<t;M+=1)await b(),w(),await n.renderFrame({frameIndex:M,deltaSeconds:0,relevanceMode:M===t-1?"UNSHADOWED":"FULL"}),w(),c.warmupFramesSubmitted+=1,y();if(m=D(),f=m.fenceSync(m.SYNC_GPU_COMMANDS_COMPLETE,0),!f)throw g("Unable to create the GPU startup warmup fence");for(c.gpuFenceCreated=!0,y(),m.flush();;){if(await b(),w(),typeof m.isContextLost=="function"&&m.isContextLost())throw g("WebGL context was lost during GPU startup warmup");const M=m.clientWaitSync(f,0,0);if(M===m.ALREADY_SIGNALED||M===m.CONDITION_SATISFIED){c.gpuFenceCompleted=!0,y();return}if(M===m.WAIT_FAILED)throw g("GPU startup warmup fence wait failed")}},B=()=>{S(g("GPU startup warmup was cancelled"))};n.signal?.addEventListener("abort",B,{once:!0});const T=new Promise((M,I)=>{p=setTimeout(()=>{v=g(`GPU startup warmup exceeded ${r}ms`),S(v),I(v)},r)});try{return await Promise.race([F(),T]),x()}catch(M){throw v||(M instanceof dr?M:g(oc(M),M))}finally{p!==null&&clearTimeout(p),n.signal?.removeEventListener("abort",B),u!==null&&a(u),u=null,d=null;const M=m,I=f;if(I&&M){try{M.deleteSync(I)}catch{}f=null}c.warmupElapsedMs=Math.max(0,o()-l),y()}}let Nt=null,ot=!1,Vt=null,yt=!1,fi=null,mi=null,Xt="engine-import",Ct=null,St=null,de=null,xe=null,O=null,Y=null,Ze=null,le=null,ge=null,ce=null,L=null,J=null,Fe=null,Zt=null,_=null,se=null,nt=null,vt=null,pi=null,ke=null,oe=null,vi=0,Gt=0,bt=0,Yt=!1,Ue=null,oi=600,lt=null,ne=null,ze=!1,Ut=null,ni=!1,Te=null,te=null;const Ke=ee+Xe;let da=0;const Re=new Map;function lc(n){const e=new Set(n),t=new Set,i=new Set;let r=()=>{},s=()=>{},a=!1;const o=new Promise((f,m)=>{r=f,s=m});o.catch(()=>{});const l=()=>{a||t.size<e.size||i.size<e.size||(a=!0,r())},c=f=>{e.has(f)&&(t.add(f),l())},h=f=>{e.has(f)&&(i.add(f),l())},u=f=>{a||(a=!0,s(f))},d=()=>u(new Error("World startup was cancelled"));return l(),{promise:o,markChunkReady:c,markChunkMesh:h,fail:u,cancel:d}}function Ne(n,e){Xt=n,e?.(n)}function Or(n){const e=Cr(n)?.side??Math.sqrt(Tr),t=Math.floor(e/2),i=e-1-t,r={minX:-t*R.x,maxX:(i+1)*R.x,minZ:-t*R.z,maxZ:(i+1)*R.z},s=Math.max(Math.abs(r.maxX-r.minX),Math.abs(r.maxZ-r.minZ))/2;return{bounds:r,worldRadius:s}}function cc(n){const e=Cr(n)?.side??Math.sqrt(Tr),t=Math.floor(e/2),i=e-1-t,r=[];for(let s=-t;s<=i;s++)for(let a=-t;a<=i;a++)r.push(Le(s,0,a));return r}function hc(n,e){const t=JSON.stringify(e,null,2),i=new Blob([t],{type:"application/json"}),r=URL.createObjectURL(i),s=document.createElement("a");s.href=r,s.download=n,document.body.appendChild(s),s.click(),document.body.removeChild(s),URL.revokeObjectURL(r)}async function uc(){try{if(!Y)throw new Error("World not initialized");const n=De.getState(),e=Hs(n.chunkCount),{bounds:t,worldRadius:i}=Or(e),r=Y.getLoadedChunkKeys().map(u=>{const d=Y.getChunkByKey(u),[f,m,p]=u.split(",").map(x=>parseInt(x,10)),v=d.getData();return{key:u,cx:f,cy:m,cz:p,size:{...v.size},voxelsB64:Os(v.voxels)}}),s={kind:"MyCraftWorld",version:2,meta:{createdAt:new Date().toISOString()},settings:{seed:Y.getSeed(),chunkCount:e,chunkSize:{...R},bounds:t,worldRadius:i},chunks:r,inventory:{slots:Ns().map(u=>({blockId:u.blockId,count:u.count})),selectedSlot:De.getState().selectedSlot}},a=await Gs(s),{ivB64:o,cipherB64:l}=await Xs(s),c={kind:"MyCraftWorld",version:2,encAlg:qs,ivB64:o,cipherB64:l,signatureAlg:Ys,signatureB64:a,publicKeyId:Zs};try{const u=window.__nextSaveFileHandle;if(window.__nextSaveFileHandle=void 0,u&&typeof u.createWritable=="function"){const f=await u.createWritable(),m=JSON.stringify(c,null,2);await f.write(new Blob([m],{type:"application/json"})),await f.close();return}}catch(u){console.warn("Saving via chosen file handle failed. Falling back to download.",u)}const h=`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`;hc(h,c)}catch(n){console.error("Save world failed:",n),alert("Failed to save world. See console for details.")}}function dc(){if(!(!Ze||Re.size===0))for(const[n,e]of Re)try{Ze.handleChunkMesh(e.response)}catch(t){throw console.error(`Apply initial chunk mesh failed for ${n}`,t),t}finally{Re.delete(n)}}function Nr(n,e=!1){if(L?.beginFrame(),Ze&&Re.size){const s=Array.from(Re.keys()),a=new Set,o=l=>{Re.has(l)&&a.add(l)};for(const l of s){if(a.has(l))continue;const[c,h,u]=l.split(",").map(m=>parseInt(m,10)),d=[`${c+1},${h},${u}`,`${c-1},${h},${u}`,`${c},${h+1},${u}`,`${c},${h-1},${u}`,`${c},${h},${u+1}`,`${c},${h},${u-1}`];d.some(m=>Re.has(m))&&(o(l),d.forEach(m=>{Re.has(m)&&o(m)}))}for(const[l,c]of Re)a.has(l)||da-c.receivedAt>=2&&a.add(l);if(a.size)for(const l of a){const c=Re.get(l);if(c){try{Ze.handleChunkMesh(c.response)}catch(h){console.error("Apply chunk mesh failed",h)}Re.delete(l)}}}if(se&&se.consumePauseToggle?.()){const s=De.getState(),a=!s.paused;s.inGame&&(s.setPaused(a),a?se.exitPointerLock?.():se.requestPointerLock?.())}const{paused:t,inGame:i}=De.getState();if(Yt&&!t&&i&&se?.requestPointerLock?.(),i&&!t&&!ze){if(se&&se.update(),se?.consumeViewToggle()&&ne?.toggleView(),se){const s=se.consumeSelectedSlot?.();s!=null&&De.getState().setSelectedSlot(s)}nt&&nt.update(n),ne?.update(n),vt&&vt.update(),pi&&pi.update()}ne&&i&&!t&&ze&&ne.update(n,!1),ne?.updateSwitchVfx(n),J&&(t||J.update(n));const r=J&&Zt?Zt.evaluate(J.getSunDirection()):null;if(r&&(J?.setAtmosphereLighting(r.sunColor,r.sunIntensity),ne?.setLighting(r.skyIrradiance,r.starVisibility),Fe?.setAtmosphereState(r),O&&Fe?.setCameraPosition(O.position)),le&&ge&&J&&r){const s=J.getSunDirection();le.setSunUniforms(s,r.sunColor),ge.setSunUniforms(s,r.sunColor);const o=Math.max(.1,r.daylight);le.setDayLight(o),ge.setDayLight(o),le.setStarLight(r.starVisibility*.35),ge.setStarLight(r.starVisibility*.35),le.setSkyAmbient(r.skyIrradiance),ge.setSkyAmbient(r.skyIrradiance),le.setWaterCaustics(!0,Ke,.8,_?.getTime()??0,_?.getCausticReferenceDepth()??we,r.sunIntensity),ge.setWaterCaustics(!0,Ke,.8,_?.getTime()??0,_?.getCausticReferenceDepth()??we,r.sunIntensity),ke&&ke.setSunUniforms(s,r.sunColor),ke&&ke.setDayNight(o,r.starVisibility*.35),ke&&ke.setSkyAmbient(r.skyIrradiance),oe&&oe.setSun(s,r.sunColor),oe&&oe.setDayNight(o,r.starVisibility*.35),oe&&oe.setSkyAmbient(r.skyIrradiance),oe&&oe.setWaterCaustics(!0,Ke,.8,_?.getCausticReferenceDepth()??we,r.sunIntensity)}if((ce||_)&&J&&r){const s=J.getSunDirection(),a=Math.max(.15,r.daylight);ce&&(ce.setSun(s,r.sunColor),ce.setAmbientLighting(a,r.nightTint),ce.setSkyColors(r.skyZenith,r.skyHorizon),ce.setSkyAtmosphere(r.skyAerosol,r.skyAerosolStrength,X.atmosphere.skyRadianceScale)),_&&(_.setSun(s,r.sunColor,r.sunIntensity),_.setAmbientLighting(a,r.nightTint),_.setSkyColors(r.skyZenith,r.skyHorizon),_.setSkyAtmosphere(r.skyAerosol,r.skyAerosolStrength,X.atmosphere.skyRadianceScale))}if(_&&O&&(_.update(n,O),ge?.setWaterCausticTexture(_.getCausticTexture(),_.getCausticOrigin(),_.getCausticExtent(),_.getCausticResolution(),_.getCausticReferenceDepth()),oe?.update(_.getTime(),O),oe?.setWaterCausticTexture(_.getCausticTexture(),_.getCausticOrigin(),_.getCausticExtent(),_.getCausticResolution(),_.getCausticReferenceDepth()),ce?.setTime(_.getTime()),ce?.setCameraUnderwater(_.isCameraUnderwater()),L?.setWaterCameraState(_.isCameraUnderwater(),_.getCameraSurfaceY(),_.surfaceY),L?.setUnderwater(!0),L&&(L.setUnderwaterCaustics(_.getCausticTexture(),_.getCausticOrigin(),_.getCausticExtent(),_.getCausticResolution(),_.getCausticReferenceDepth()),L.setUnderwaterTime(_.getTime()))),Ue&&Ue.update(n,t,i),L&&O&&J&&r){const s=J.getSunDirection();te?.setCharacterShadowBoxes(ne?.getShadowBoxes()??[]),L.setSceneColorCaptureRequired(Ze?.hasBlockWaterGeometry()??!1),L.update(O,s,r.sunColor,r,n),e?L.renderHidden(n):L.render(n)}else de&&xe&&O&&de.render(xe,O);Yt=t}function Gr(n){if(!ot)return;const e=Math.min(.1,Math.max(0,(n-vi)/1e3));vi=n,da++;try{Nr(e),Gt+=1,bt===0&&(bt=n);const t=n-bt;if(t>=500){const i=Math.round(Gt*1e3/t);De.getState().setFps(i),Gt=0,bt=n}}catch(t){console.error(`[Engine] Frame failed during ${Xt}:`,t),fa();return}Nt=requestAnimationFrame(Gr)}async function fc(n,e={}){const t=e.onBootStage;Ne("renderer",t),Ut=e.diagnosticView??null,ze=Ut!==null,yt=!1,ni=!1,Re.clear(),Ct=null,St=null,de=new so(n);const i=de.getRenderer();Ne("scene",t),xe=to();const r=de.getCanvasSize(),s=r.width/Math.max(1,r.height);O=io(s),Ne("world",t),Y=new uo,Ne("assets",t);const a=await Xo(),o=a.getConfig(),l=["tree_leaves","tree_leaves_1","tree_leaves_2","tree_leaves_3","cherry_leaves","cherry_leaves_1","cherry_leaves_2","cherry_leaves_3"].flatMap(C=>o.tiles[C]?[o.tiles[C]]:[]);Ne("render-pipeline",t);const c={tileSize:o.tileSize,atlasSize:o.atlasSize,leafTiles:l};le=new Zi(a.getTexture(),null,void 0,c,"cutout"),ge=new Zi(a.getTexture(),null,void 0,c,"opaque"),le.setAntialiasing(!0,.9),le.setMaterialProperties(.8,0,.3),le.setWaterCaustics(!0,Ke,.8,0,we,1.35),ge.setMaterialProperties(.8,0,.3),ge.setWaterCaustics(!0,Ke,.8,0,we,1.35);const h=new sa;ce=new Lr({map:null,color:1713988,tileScale:1,useWorldUV:!0,bounds:{minX:-1/0,maxX:1/0,minZ:-1/0,maxZ:1/0}}),ce.setAlpha(.7),ce.setWaterLevel(Ke),ce.setRefraction(.18,.75,.12,.035,.06),ce.setFresnelAlpha(.65,.9),Ze=new mo(xe,{opaque:ge,cutout:le,transparent:ce},{forwardRefractionParticipants:h,registerSolidTerrainMesh:C=>L?.registerSolidTerrainMesh(C),unregisterSolidTerrainMesh:C=>L?.unregisterSolidTerrainMesh(C)}),lt=new Q,lt.name="PlayerRigRoot",xe.add(lt),ne=new ec(De.getState().playerCharacter,{forwardRefractionParticipants:h});const u=de.getCanvasSize();L=new xn(i,xe,O,u.width,u.height,h),L.registerShadowSamplingMaterial(le),L.registerShadowSamplingMaterial(ge),L.setBloom(X.bloom.enabled,X.bloom.strength,X.bloom.threshold),L.setLens(X.lens.enabled,X.lens.intensity),L.setAerialPerspective(!0,oi),L.setUnderwaterWaterLevel(Ke),Ne("systems",t),J=new bn(xe,{cycleSeconds:X.dayNightCycleSeconds,initialTime:e.diagnosticTime??(ze?.125:0),paused:ze,enableShadows:!0}),ze&&console.info("[AtmosphereInit]",JSON.stringify({requestedTime:e.diagnosticTime,actualTime:J.getTime(),paused:J.isPaused()})),Zt=new Ln,Fe=new Tn(xe),L?.setSky(Fe.sky);const d=wi();Y.chunkPipeline.setAtlasConfig(a.getConfig(),d.getAllBlocks()),se=new Xn(n,O),se.onCharacterSwitchRequested(()=>{const C=De.getState();!yt||ze||!C.inGame||C.paused||Xr(Vs(C.playerCharacter))});let f=!1;se.onPointerLockChanged(C=>{const P=De.getState();if(C){if(yt){f=!0;const z=!P.inGame;P.setInGame(!0),z&&P.setPaused(!1)}}else yt&&f&&!P.paused&&(P.setPaused(!0),P.setInGame(!0))}),ne&&lt&&O&&ne.init(lt,O,se);const m=Math.max(1,Math.floor(De.getState().chunkCount||9)),{bounds:p,worldRadius:v}=Or(m),x=window.__WORLD_SNAPSHOT,y=window.__WORLD_SNAPSHOT_VERIFIED,g=x&&x.kind==="MyCraftWorld"?x.chunks.map(C=>C.key):cc(m),S=lc(g);fi=S.cancel,Y.on("CHUNK_ADDED",({key:C})=>{S.markChunkReady(C)}),Y.chunkPipeline.on("WORKER_ERROR",({worker:C,error:P})=>{S.fail(new Error(`${C} worker failed during startup`,{cause:P}))}),Te=new tc({minX:p.minX,maxX:p.maxX,minY:0,maxY:R.y,minZ:p.minZ,maxZ:p.maxZ});const w=a.getConfig(),D=[w.tiles.tree_leaves??[8,0]];for(let C=1;C<4;C+=1){const P=w.tiles[`tree_leaves_${C}`];if(!P)break;D.push(P)}te=new rc(i,u.width,u.height,Te,{texture:a.getTexture(),atlasSize:w.atlasSize,tileSize:w.tileSize,variantTiles:D}),te.setSeaweedWaterLevel(Ke);const F=te.getDiagnostics().resolution;if(le?.setVoxelShadowTexture(te.getTexture(),F.width,F.height,!0),ge?.setVoxelShadowTexture(te.getTexture(),F.width,F.height,!0),le?.setVoxelShadowDepthTexture(L.getDepthTexture(),O.near,O.far),ge?.setVoxelShadowDepthTexture(L.getDepthTexture(),O.near,O.far),L.setVoxelSunShadowPass(te),ze&&console.info("[VoxelSunShadow]",JSON.stringify(te.getDiagnostics())),Y.on("CHUNK_ADDED",({key:C,chunk:P})=>{Te?.updateChunk(C,P),ze&&!ni&&Te&&(ni=!0,console.info("[VoxelSunShadowVolume]",JSON.stringify(Te.getDiagnostics())))}),Y.on("CHUNK_REMOVED",({key:C})=>Te?.clearChunk(C)),Y.on("BLOCK_CHANGED",({worldX:C,worldY:P,worldZ:z,newBlockId:$})=>{Te?.updateBlock(C,P,z,$)}),Y.chunkPipeline.beginInitialBatch(g),Te.beginBulkUpdate(),J?.setShadowSettings({enabled:X.shadows.enabled,shadowDistance:X.shadows.distance,resolution:2048,softness:0,bias:0,normalBias:0,intensity:X.shadows.intensity}),te&&J){const C=J.getShadowSettings();te.setSettings({enabled:C.enabled,maxDistance:C.shadowDistance})}ce&&(ce.setBounds(p),ce.setEdge(0,2));const B=R.x*2;oi=Math.min(O.far*.95,v+B),L?.setAerialPerspective(!0,oi),Y.chunkPipeline.setWorldRadius(v);const T=_s(Y.getSeed(),0,0,v);O.position.set(T.x,T.y,T.z),Ut&&Us(O,Ut,{seed:Y.getSeed(),worldRadius:v});{const C=O.far*.98;_=new Gn(xe,{bounds:p,waterLevel:ee,farDistance:C,color:1732494,seed:Y.getSeed(),worldRadius:v,blockMaterialSource:le??void 0,blockWaterMaterial:ce??void 0,seabedAtlas:a.getConfig(),renderer:i,stageProfiler:L?.getStageProfiler(),forwardRefractionParticipants:h,registerShadowSamplingMaterial:P=>L?.registerShadowSamplingMaterial(P),unregisterShadowSamplingMaterial:P=>L?.unregisterShadowSamplingMaterial(P),registerSolidTerrainMesh:P=>L?.registerSolidTerrainMesh(P),unregisterSolidTerrainMesh:P=>L?.unregisterSolidTerrainMesh(P)}),_.setSceneInputs(L?.getSceneColorTexture()??null,L?.getDepthTexture()??null,L?.getSceneColorResolution()??{x:u.width,y:u.height},O.near,O.far),_.setForwardRefractionInputs(L?.getForwardRefractionColorTexture()??null,L?.getForwardRefractionDepthTexture()??null,L?.getForwardRefractionResolution()??{x:u.width,y:u.height},O.near,O.far),_.setSunVisibility(te?.getTexture()??null),oe=new Sl(xe,{bounds:p,terrainSeed:Y.getSeed(),worldRadius:v,waterLevel:ee,forwardRefractionParticipants:h}),oe.shareVoxelShadowState(le),L?.registerShadowSamplingMaterial(oe.getMaterial()),Te.setSeaweedAnchors(oe.getShadowAnchors()),oe.setWaterCausticTexture(_.getCausticTexture(),_.getCausticOrigin(),_.getCausticExtent(),_.getCausticResolution(),_.getCausticReferenceDepth()),L?.setOpaqueCaptureHooks(()=>_?.setOpaqueCaptureMode(!0),()=>_?.setOpaqueCaptureMode(!1))}nt=new Z(O,Y,se,p);const M=O;if(ne?.setController(nt),ze&&ne?.setFirstPerson(!0),vt=new qn(O,Y,xe,p,C=>ne?.isFirstPersonView()?M.getWorldPosition(C):nt?.getEyePosition(C)??M.getWorldPosition(C)),pi=new jn(O,Y,se,vt,Y.chunkPipeline,nt,C=>ne?.faceTowards(C)),ke=new el(xe,Y,Be("grass_tuft")??9,h,_?.surfaceY??Ke),L?.registerShadowSamplingMaterial(ke.getMaterial()),te){const C=te.getDiagnostics().resolution;ke.setVoxelShadowTexture(te.getTexture(),C.width,C.height,!!L),L&&ke.setVoxelShadowDepthTexture(L.getDepthTexture(),O.near,O.far)}if(Ue=new Al(Y,se,nt,O,()=>_?.getCameraSurfaceY()),Y.chunkPipeline.on("CHUNK_READY",()=>{}),Y.chunkPipeline.on("CHUNK_MESH",C=>{const{response:P}=C;Re.set(P.key,{response:P,receivedAt:da}),S.markChunkMesh(P.key)}),x&&x.kind==="MyCraftWorld")try{if(!y)throw new Error("Save not verified by loader");const C=x.settings.chunkSize;if(C.x!==R.x||C.y!==R.y||C.z!==R.z)throw new Error(`Chunk size mismatch: save ${C.x}x${C.y}x${C.z}, game ${R.x}x${R.y}x${R.z}`);Y.setSeed(x.settings.seed),_?.setSeed(Y.getSeed()),oe?.setTerrainSeed(Y.getSeed()),Te?.setSeaweedAnchors(oe?.getShadowAnchors()??[]);for(const P of x.chunks){const z=new Uint8Array(atob(P.voxelsB64).split("").map(G=>G.charCodeAt(0))),$={size:P.size,voxels:z};Y.chunkPipeline.ingestChunkData(P.key,$)}Y.chunkPipeline.finishInitialBatch()}catch(C){console.error("Failed to load snapshot; returning to Start Panel.",C);try{alert("Save file verification failed or is corrupted. Returning to Start Panel.")}catch{}const P=De.getState();throw P.setGameStarted(!1),P.setInGame(!1),C}finally{delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED}else{const C=Math.max(1,Math.round(Math.sqrt(m))),P=Math.floor(C/2),z=C-1-P;for(let $=-P;$<=z;$++)for(let G=-P;G<=z;G++)Y.ensureChunk($,0,G);Y.chunkPipeline.finishInitialBatch()}const I=()=>{if(de&&O&&n){const C=de.onResize();if(!C)return;if(O.aspect=C.width/C.height,O.updateProjectionMatrix(),L&&L.setSize(C.width,C.height,C.dpr),_&&O&&(_.setSceneInputs(L?.getSceneColorTexture()??null,L?.getDepthTexture()??null,L?.getSceneColorResolution()??{x:C.width,y:C.height},O.near,O.far),_.setForwardRefractionInputs(L?.getForwardRefractionColorTexture()??null,L?.getForwardRefractionDepthTexture()??null,L?.getForwardRefractionResolution()??{x:C.width,y:C.height},O.near,O.far)),te){const P=te.getDiagnostics().resolution;le?.setVoxelShadowTexture(te.getTexture(),P.width,P.height,!!L),ge?.setVoxelShadowTexture(te.getTexture(),P.width,P.height,!!L),ke?.setVoxelShadowTexture(te.getTexture(),P.width,P.height,!!L),oe&&le&&oe.shareVoxelShadowState(le),_?.setSunVisibility(te.getTexture())}}};if(mi?.dispose(),mi=new sc(I),ot=!0,Yt=De.getState().paused,vi=performance.now(),Gt=0,bt=0,Ne("world-loading",t),await S.promise,!ot)throw new Error("World startup stopped before readiness");if(Te?.finishBulkUpdate(),dc(),Ze?.finalizeStaticRegions(),ze?ne?.update(0,!1):ne?.update(0,!0,!0),Ne("shader-compilation",t),xe&&O&&de&&await de.getRenderer().compileAsync(xe,O),Ne("warmup",t),!ot)throw new Error("Renderer stopped before the first frame");const W=new AbortController;St=W;try{Ct=await nc({renderer:i,signal:W.signal,isRendererStopped:()=>!ot,onDiagnostics:P=>{Ct=P},renderFrame:({relevanceMode:P})=>{if(!L)throw new Error("Composer stopped during GPU startup warmup");L.setWarmupForwardRefractionMode(P);try{Nr(0,!0)}finally{L.setWarmupForwardRefractionMode(null)}}})}finally{L?.setWarmupForwardRefractionMode(null),St===W&&(St=null)}if(!ot)throw new Error("Renderer stopped after GPU startup warmup");f=document.pointerLockElement===n,vi=performance.now(),Gt=0,bt=0,Yt=De.getState().paused,Nt=requestAnimationFrame(Gr),yt=!0,se?.setEnabled(!0),Ne("ready",t),fi=null}async function mc(n,e={}){if(Vt)return Vt;if(ot)return;Xt="renderer";const t=fc(n,e);Vt=t;try{await t}catch(i){const r=de?{viewport:de.getCanvasSize(),dpr:de.getPixelRatio()}:{},s=Ws(Xt,i,{...r,warmup:Ct??void 0});throw fa(),s}finally{Vt===t&&(Vt=null)}}function fa(){ot=!1,yt=!1,St?.abort(),St=null,Ct=null,mi?.dispose(),mi=null;const n=fi;fi=null,n?.(),ze=!1,Ut=null,ni=!1,Yt=!1,Re.clear(),Nt!==null&&(cancelAnimationFrame(Nt),Nt=null),se&&(se.setEnabled(!1),se.exitPointerLock(),se.destroy(),se=null),Ze&&(Ze.destroy(),Ze=null),oe&&(oe.destroy(),oe=null),le&&(le.dispose(),le=null),ge&&(ge.dispose(),ge=null),ce&&(ce.dispose(),ce=null),L?(L.dispose(),L=null,te=null):te&&(te.dispose(),te=null),Te&&(Te.dispose(),Te=null),J&&(J.dispose(),J=null),nt=null,vt&&(vt.destroy(),vt=null),pi=null,ke&&(ke.destroy(),ke=null),Ue&&(Ue.dispose(),Ue=null);try{ne?.dispose()}catch{}if(ne=null,xe&&lt)try{xe.remove(lt)}catch{}lt=null,Y&&(Y.destroy(),Y=null),Fe&&(Fe.dispose(),Fe=null),Zt=null,_&&_.dispose(),_=null,de&&(de.dispose(),de=null),xe=null,O=null,oi=600}function pc(){return{timeOfDay:{t:J?J.getTime():0,paused:J?.isPaused()??!1,cycleSeconds:X.dayNightCycleSeconds}}}function vc(n){Wn(n,{setTime:e=>{J?.setTime(e)},setTimePaused:e=>{J?.pause(e)},setCycleSeconds:()=>{J?.setCycleSeconds(X.dayNightCycleSeconds)}})}function Xr(n){const e=Ni(n);De.getState().setPlayerCharacter(e),ne?.setCharacter(e)}window.updateGraphicsSettings=vc;window.getGraphicsSettings=pc;window.__setPlayerCharacter=Xr;window.__saveWorld=()=>{uc()};window.__getVoxelShadowDiagnostics=()=>te?.getDiagnostics()??null;window.__getRenderDiagnostics=()=>{const n=Fe?.sky.material,e=Zt?.state;return{startup:{stage:Xt,warmup:Ct},renderer:de?{toneMapping:de.getRenderer().toneMapping,toneMappingExposure:de.getRenderer().toneMappingExposure,outputColorSpace:de.getRenderer().outputColorSpace}:null,sky:Fe?{visible:Fe.sky.visible,scale:Fe.sky.scale.x,position:Fe.sky.position.toArray(),renderOrder:Fe.sky.renderOrder,materialType:n?.type,skyZenith:n?.uniforms.skyZenith?.value?.toArray(),skyHorizon:n?.uniforms.skyHorizon?.value?.toArray(),skyAerosol:n?.uniforms.skyAerosol?.value?.toArray(),skyAerosolStrength:n?.uniforms.skyAerosolStrength?.value}:null,atmosphere:e?{sunDirection:e.sunDirection.toArray(),daylight:e.daylight,sunIntensity:e.sunIntensity,skyZenith:e.skyZenith.toArray(),skyHorizon:e.skyHorizon.toArray(),skyAerosol:e.skyAerosol.toArray(),skyAerosolStrength:e.skyAerosolStrength}:null,water:_?.getDiagnostics()??null,forwardRefraction:L?.getForwardRefractionDiagnostics()??null,oceanRefractionRelevance:L?.getOceanRefractionRelevanceDiagnostics()??null,renderStages:L?.getRenderDiagnostics()??null,seaweed:oe?.getDiagnostics()??null,exposure:L?.getExposureDiagnostics()??null}};window.__setSfxVolume=n=>{Ue?.setVolume(n),ne?.setSwitchVfxVolume(n)};window.__getSfxVolume=()=>Ue?.getVolume()??.7;window.__primeSfx=()=>{Ue?.tryUnlockOnUserGesture()};window.__sfxBreak=()=>{Ue?.playBreak()};window.__sfxPlace=()=>{Ue?.playPlace()};window.__bodyPrimary=()=>{ne?.onPrimaryClick?.()};window.__bodySecondary=()=>{ne?.onSecondaryClick?.()};window.__isBodySwingActive=()=>!!ne?.isSwingActive?.();const bc={start:mc,stop:fa};export{bc as engine};
