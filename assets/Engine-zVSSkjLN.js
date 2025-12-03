import{f as hs,g as us,h as ds,i as De,P as _t,V as ie,j as Yt,k as fs,l as ms,G as te,M as xe,B as Ze,m as we,T as tt,n as ft,o as $,p as be,q as ps,r as vs,R as We,s as gs,L as Ee,S as Te,t as Ht,u as X,a as V,b as P,v as D,D as mt,w as Gt,x as qt,W as Xe,y as Zt,O as Xt,z as jt,E as ws,I as Kt,J as ys,K as xs,Q as Ss,X as bs,Y as Ms,A as Cs,d as ks,Z as pt,_ as xt,$ as Ds,a0 as zs,e as Qt,a1 as As,a2 as Ls,a3 as St,F as ot}from"./three-q4_NEteL.js";import{C as x,P as E,I as $t,S as je,a as Is,g as bt,c as Ps,u as Se,b as Ts,d as Fs,s as Es,e as Rs,f as Bs,h as Ws,i as Us}from"./index-Cc5KcY74.js";import{S as st,U as Ns,E as Vs,R as Os,a as _s}from"./three-examples-d7CuqhDd.js";import{a as Ce}from"./vendor-D7XSisoL.js";import"./react-DUHB38qD.js";const Ys={};class Hs{renderer;isWebGPU=!1;constructor(e){let t=null;if(typeof navigator<"u"&&"gpu"in navigator&&typeof import.meta<"u"&&Ys?.VITE_USE_WEBGPU==="true")try{t=new hs({canvas:e,antialias:!1}),this.isWebGPU=!0}catch(o){console.warn("WebGPU renderer init failed; falling back to WebGL.",o)}if(t||(t=new us({canvas:e,antialias:!1,powerPreference:"high-performance"})),this.renderer=t,this.syncCanvasSize(e),this.renderer.setClearColor(8900331),"toneMapping"in this.renderer&&(this.renderer.toneMapping=ds,this.renderer.toneMappingExposure=.8),"outputColorSpace"in this.renderer&&(this.renderer.outputColorSpace=De),this.renderer.useLegacyLights!==void 0&&(this.renderer.useLegacyLights=!1),!this.isWebGPU){const o=this.renderer;o.shadowMap.enabled=!1,o.shadowMap.type=_t}}syncCanvasSize(e){const t=Math.min(2,Math.max(1,window.devicePixelRatio||1)),s=Math.max(1,Math.floor(e.clientWidth*t)),o=Math.max(1,Math.floor(e.clientHeight*t));e.width!==s&&(e.width=s),e.height!==o&&(e.height=o),this.renderer.setPixelRatio(t),this.renderer.setSize(e.clientWidth,e.clientHeight,!1)}setSize(e,t){this.syncCanvasSize(this.renderer.domElement),this.renderer.setSize(e,t,!1)}getCanvasSize(){const e=this.renderer.getSize(new ie);return{width:e.x,height:e.y}}onResize(){const e=this.renderer.domElement;this.syncCanvasSize(e)}render(e,t){this.renderer.render(e,t)}getRenderer(){return this.renderer}dispose(){this.renderer.dispose()}}function Gs(){const l=new Yt,e=new fs(4212838,.1);return l.add(e),l}function qs(l=1){const e=new ms(70,l,.1,1024);return e.position.set(0,80,0),e}function Mt(l,e,t){if(l<0||l>=x.x||e<0||e>=x.y||t<0||t>=x.z)throw new Error(`Invalid chunk coordinates: (${l}, ${e}, ${t}). Must be within (0,0,0) to (${x.x-1}, ${x.y-1}, ${x.z-1})`);return e*(x.x*x.z)+t*x.x+l}function Ct(){return x.x*x.y*x.z}function kt(l,e,t){return l>=0&&l<x.x&&e>=0&&e<x.y&&t>=0&&t<x.z}class Zs{voxels;size;constructor(e){this.size={...x};const t=Ct();if(e){if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==x.x||e.size.y!==x.y||e.size.z!==x.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${x.x}x${x.y}x${x.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}else this.voxels=new Uint8Array(t),this.voxels.fill(0)}get(e,t,s){if(!kt(e,t,s))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${s})`);const o=Mt(e,t,s);return this.voxels[o]}set(e,t,s,o){if(!kt(e,t,s))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${s})`);if(o<0||o>255)throw new Error(`Invalid block ID: ${o}. Must be 0-255.`);const i=Mt(e,t,s);this.voxels[i]=o}getData(){return{size:{...this.size},voxels:new Uint8Array(this.voxels)}}setFromData(e){const t=Ct();if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==x.x||e.size.y!==x.y||e.size.z!==x.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${x.x}x${x.y}x${x.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}getVoxelsArray(){return this.voxels}getSize(){return{...this.size}}fill(e){if(e<0||e>255)throw new Error(`Invalid block ID: ${e}. Must be 0-255.`);this.voxels.fill(e)}clear(){this.voxels.fill(0)}isEmpty(){return this.voxels.every(e=>e===0)}countBlocks(e){let t=0;for(let s=0;s<this.voxels.length;s++)this.voxels[s]===e&&t++;return t}getBlockStats(){const e=new Map;for(let t=0;t<this.voxels.length;t++){const s=this.voxels[t];e.set(s,(e.get(s)||0)+1)}return e}}function it(l,e){return Math.floor(l/e)}function at(l,e){return(l%e+e)%e}function Oe(l,e,t){const s=it(l,x.x),o=it(e,x.y),i=it(t,x.z),a=at(l,x.x),n=at(e,x.y),r=at(t,x.z);return{cx:s,cy:o,cz:i,lx:a,ly:n,lz:r}}function Q(l,e,t){return`${l},${e},${t}`}class vt{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const s=this.listeners.get(e);return s.add(t),()=>{s.delete(t),s.size===0&&this.listeners.delete(e)}}once(e,t){const s=this.on(e,o=>{s(),t(o)});return s}off(e,t){const s=this.listeners.get(e);s&&(s.delete(t),s.size===0&&this.listeners.delete(e))}emit(e,t){const s=this.listeners.get(e);if(s){const o=Array.from(s);for(const i of o)try{i(t)}catch(a){console.error(`Error in event listener for '${String(e)}':`,a)}}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){const t=this.listeners.get(e);return t?t.size:0}eventNames(){return Array.from(this.listeners.keys())}}class Xs{blocks=new Map;nameToId=new Map;constructor(){this.initializeDefaults()}initializeDefaults(){const e=[{id:0,name:"air",opaque:!1,solid:!1,faces:{all:"air"}},{id:1,name:"grass",opaque:!0,solid:!0,faces:{top:"grass_top",bottom:"dirt",side:"grass_side"}},{id:2,name:"dirt",opaque:!0,solid:!0,faces:{all:"dirt"}},{id:3,name:"stone",opaque:!0,solid:!0,faces:{all:"cobblestone"}},{id:4,name:"sand",opaque:!0,solid:!0,faces:{all:"sand"}},{id:5,name:"water",opaque:!1,solid:!1,faces:{top:"water"}},{id:6,name:"wood",opaque:!0,solid:!0,faces:{top:"wood_top",bottom:"wood_top",side:"wood_side"}},{id:7,name:"leaves",opaque:!0,solid:!0,faces:{all:"tree_leaves"}},{id:8,name:"leaves_maple",opaque:!0,solid:!0,faces:{all:"maple_leaves"}},{id:9,name:"grass_tuft",opaque:!1,solid:!1,faces:{all:"air"}}];for(const s of e)this.registerBlock(s);const t=this.getBlock(0);if(!t||t.opaque||t.solid)throw new Error("Block registry invariant violated: AIR (id=0) must be non-opaque and non-solid")}registerBlock(e){if(e.id<0||e.id>255)throw new Error(`Invalid block ID: ${e.id}. Must be 0-255.`);if(this.blocks.has(e.id))throw new Error(`Block ID ${e.id} already registered`);if(this.nameToId.has(e.name))throw new Error(`Block name '${e.name}' already registered`);this.blocks.set(e.id,e),this.nameToId.set(e.name,e.id)}getBlock(e){return this.blocks.get(e)}getBlockIdByName(e){return this.nameToId.get(e)}getAllBlocks(){return Array.from(this.blocks.values())}hasBlock(e){return this.blocks.has(e)}getBlockCount(){return this.blocks.size}validate(){const e=this.getBlock(0);if(!e)throw new Error("Registry validation failed: AIR block (id=0) not found");if(e.opaque||e.solid)throw new Error("Registry validation failed: AIR block must be non-opaque and non-solid");const t=Math.max(...this.blocks.keys());for(let s=0;s<=t;s++)if(!this.blocks.has(s))throw new Error(`Registry validation failed: Missing block ID ${s} - IDs must be contiguous`)}}let nt=null;function gt(){return nt||(nt=new Xs),nt}function Ke(l){return gt().getBlock(l)}function he(l){return gt().getBlockIdByName(l)}function js(l){return l&&l.type==="CHUNK_DATA"&&typeof l.key=="string"&&l.payload}function Ks(l){return l&&l.type==="CHUNK_MESH"&&typeof l.key=="string"&&l.payload&&l.payload.opaque&&l.payload.transparent&&l.payload.opaque.positions instanceof Float32Array&&l.payload.opaque.normals instanceof Float32Array&&l.payload.opaque.uvs instanceof Float32Array&&l.payload.opaque.colors instanceof Float32Array&&(l.payload.opaque.indices instanceof Uint16Array||l.payload.opaque.indices instanceof Uint32Array)&&l.payload.transparent.positions instanceof Float32Array&&l.payload.transparent.normals instanceof Float32Array&&l.payload.transparent.uvs instanceof Float32Array&&l.payload.transparent.colors instanceof Float32Array&&(l.payload.transparent.indices instanceof Uint16Array||l.payload.transparent.indices instanceof Uint32Array)}class Qs extends vt{generatorWorker;mesherWorker;pendingRequests=new Set;atlasConfig=null;blockRegistry=[];chunkDataMap=new Map;worldRadius=null;constructor(){super(),this.generatorWorker=new Worker(new URL("/assets/generator.worker-CONQC9jZ.js",import.meta.url),{type:"module"}),this.generatorWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.generatorWorker.onerror=e=>{console.error("[ChunkPipeline] Generator worker error:",e)},this.mesherWorker=new Worker(new URL("/assets/mesher.worker-CR5xCLBy.js",import.meta.url),{type:"module"}),this.mesherWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.mesherWorker.onerror=e=>{console.error("[ChunkPipeline] Mesher worker error:",e)}}ingestChunkData(e,t){if(this.chunkDataMap.set(e,t),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before ingesting chunks");const s=this.buildNeighborsForKey(e),o={type:"MESH_CHUNK",payload:{key:e,chunkData:t,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:s}};this.mesherWorker.postMessage(o),this.emit("CHUNK_READY",{key:e,chunkData:t});const[i,a,n]=e.split(",").map(h=>parseInt(h,10)),r=[[i+1,a,n],[i-1,a,n],[i,a+1,n],[i,a-1,n],[i,a,n+1],[i,a,n-1]];for(const[h,c,d]of r){const u=Q(h,c,d),f=this.chunkDataMap.get(u);if(f){const m=this.buildNeighborsFor(h,c,d),v={type:"MESH_CHUNK",payload:{key:u,chunkData:f,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:m}};this.mesherWorker.postMessage(v)}}}setAtlasConfig(e,t){this.atlasConfig=e,this.blockRegistry=t}setWorldRadius(e){this.worldRadius=e}requestChunk(e,t,s,o){const i=Q(e,t,s);if(this.pendingRequests.has(i))return;this.pendingRequests.add(i);const a={type:"GEN_CHUNK",payload:{key:i,cx:e,cy:t,cz:s,seed:o,worldRadius:this.worldRadius||void 0}};this.generatorWorker.postMessage(a)}handleWorkerResponse(e){js(e)?this.handleChunkDataResponse(e):Ks(e)?this.handleChunkMeshResponse(e):console.warn("[ChunkPipeline] Unknown worker response:",e)}handleChunkDataResponse(e){const{key:t,payload:s}=e;if(this.pendingRequests.delete(t),this.chunkDataMap.set(t,s),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before requesting chunks");const o=this.buildNeighborsForKey(t),i={type:"MESH_CHUNK",payload:{key:t,chunkData:s,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:o}};this.mesherWorker.postMessage(i);const[a,n,r]=t.split(",").map(c=>parseInt(c,10)),h=[[a+1,n,r],[a-1,n,r],[a,n+1,r],[a,n-1,r],[a,n,r+1],[a,n,r-1]];for(const[c,d,u]of h){const f=Q(c,d,u),m=this.chunkDataMap.get(f);if(m){const v=this.buildNeighborsFor(c,d,u),M={type:"MESH_CHUNK",payload:{key:f,chunkData:m,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:v}};this.mesherWorker.postMessage(M)}}this.emit("CHUNK_READY",{key:t,chunkData:s})}buildNeighborsForKey(e){const[t,s,o]=e.split(",").map(i=>parseInt(i,10));return this.buildNeighborsFor(t,s,o)}buildNeighborsFor(e,t,s){return{posX:this.chunkDataMap.get(Q(e+1,t,s)),negX:this.chunkDataMap.get(Q(e-1,t,s)),posY:this.chunkDataMap.get(Q(e,t+1,s)),negY:this.chunkDataMap.get(Q(e,t-1,s)),posZ:this.chunkDataMap.get(Q(e,t,s+1)),negZ:this.chunkDataMap.get(Q(e,t,s-1))}}handleChunkMeshResponse(e){const{key:t}=e;this.emit("CHUNK_MESH",{key:t,response:e})}requestRemesh(e,t,s,o){if(!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before meshing");const i=Q(e,t,s);this.chunkDataMap.set(i,o);const a=this.buildNeighborsFor(e,t,s),n={type:"MESH_CHUNK",payload:{key:i,chunkData:o,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:a}};this.mesherWorker.postMessage(n)}destroy(){this.generatorWorker.terminate(),this.mesherWorker.terminate(),this.pendingRequests.clear(),this.chunkDataMap.clear()}}class $s extends vt{chunks=new Map;chunkPipeline;seed=12345;overrideProvider=null;floodedAir=new Set;constructor(){super(),this.chunkPipeline=new Qs,this.chunkPipeline.on("CHUNK_READY",({key:e,chunkData:t})=>{this.handleChunkReady(e,t)})}async handleChunkReady(e,t){const s=new Zs;if(s.setFromData(t),this.overrideProvider)try{const c=await this.overrideProvider.getOverrides(e);this.applyOverrides(s,c)}catch(c){console.warn(`[World] Failed to load overrides for chunk ${e}:`,c)}const[o,i,a]=e.split(","),n=parseInt(o,10),r=parseInt(i,10),h=parseInt(a,10);this.chunks.set(e,s),this.emit("CHUNK_ADDED",{key:e,chunk:s,coords:{cx:n,cy:r,cz:h}})}ensureChunk(e,t,s){const o=Q(e,t,s),i=this.chunks.get(o);if(!i){this.chunkPipeline.requestChunk(e,t,s,this.seed);return}return i}getChunk(e,t,s){const o=Q(e,t,s);return this.chunks.get(o)}getChunkByKey(e){return this.chunks.get(e)}setChunk(e,t,s,o){const i=Q(e,t,s),a=this.chunks.has(i);this.chunks.set(i,o),a||this.emit("CHUNK_ADDED",{key:i,chunk:o,coords:{cx:e,cy:t,cz:s}})}removeChunk(e,t,s){const o=Q(e,t,s),i=this.chunks.delete(o);return i&&this.emit("CHUNK_REMOVED",{key:o,coords:{cx:e,cy:t,cz:s}}),i}setBlock(e,t,s,o){const{cx:i,cy:a,cz:n,lx:r,ly:h,lz:c}=Oe(e,t,s),d=this.ensureChunk(i,a,n);if(!d){console.warn(`[World] Cannot set block at (${e}, ${t}, ${s}): chunk not ready yet`);return}const u=d.get(r,h,c);d.set(r,h,c,o),this.emit("BLOCK_CHANGED",{worldX:e,worldY:t,worldZ:s,oldBlockId:u,newBlockId:o,chunkKey:Q(i,a,n),localX:r,localY:h,localZ:c})}getBlock(e,t,s){const{cx:o,cy:i,cz:a,lx:n,ly:r,lz:h}=Oe(e,t,s),c=this.getChunk(o,i,a);return c?c.get(n,r,h):0}isBlockSolid(e,t,s){const{cx:o,cy:i,cz:a}=Oe(e,t,s);if(!this.getChunk(o,i,a))return t<=80;const r=this.getBlock(e,t,s),h=Ke(r);return h?h.solid:!1}isBlockOpaque(e,t,s){const o=this.getBlock(e,t,s),i=Ke(o);return i?i.opaque:!1}getLoadedChunkKeys(){return Array.from(this.chunks.keys())}getLoadedChunks(){return Array.from(this.chunks.values())}getLoadedChunkCount(){return this.chunks.size}addFloodedAir(e){for(const t of e)this.floodedAir.add(`${t.x},${t.y},${t.z}`)}removeFloodedAir(e){for(const t of e)this.floodedAir.delete(`${t.x},${t.y},${t.z}`)}isAirFlooded(e,t,s){return this.floodedAir.has(`${e},${t},${s}`)}clearFloodedAir(){this.floodedAir.clear()}isChunkLoaded(e,t,s){const o=Q(e,t,s);return this.chunks.has(o)}getChunksInRadius(e,t,s,o){const i=new Map;for(let a=e-o;a<=e+o;a++)for(let n=t-o;n<=t+o;n++)for(let r=s-o;r<=s+o;r++){const h=this.getChunk(a,n,r);if(h){const c=Q(a,n,r);i.set(c,h)}}return i}clear(){const e=this.getLoadedChunkKeys();for(const t of e){const[s,o,i]=t.split(","),a=parseInt(s,10),n=parseInt(o,10),r=parseInt(i,10);this.removeChunk(a,n,r)}}setSeed(e){this.seed=e}getSeed(){return this.seed}setOverrideProvider(e){this.overrideProvider=e}getOverrideProvider(){return this.overrideProvider}applyOverrides(e,t){for(const s of t)try{e.set(s.lx,s.ly,s.lz,s.id)}catch(o){console.warn(`[World] Failed to apply override at (${s.lx}, ${s.ly}, ${s.lz}):`,o)}}destroy(){this.chunkPipeline.destroy(),this.clear()}}class Js extends vt{scene;materialOpaque;materialTransparent;chunkMeshes=new Map;chunkGroups=new Map;constructor(e,t){super(),this.scene=e,this.materialOpaque=t.opaque,this.materialTransparent=t.transparent}handleChunkMesh(e){const{key:t,payload:s}=e,{opaque:o,transparent:i}=s;let a=this.chunkGroups.get(t);a||(a=new te,this.chunkGroups.set(t,a),this.scene.add(a));const n=a.children.find(p=>p instanceof xe&&p.material===this.materialOpaque),r=a.children.find(p=>p instanceof xe&&p.material===this.materialTransparent);a.clear();const h=(p,A,y,w)=>{if(!p.positions.length)return null;let k=A??null;if(!k){const I=new Ze;k=new xe(I,y)}const S=k.geometry,b=(I,R,L)=>{const T=S.getAttribute(I);T&&T.array.length===L.length?(T.set(L,0),T.needsUpdate=!0):S.setAttribute(I,new we(L,R))};b("position",3,p.positions),b("normal",3,p.normals),b("uv",2,p.uvs),p.colors&&p.colors.length?b("color",3,p.colors):S.getAttribute("color")&&S.deleteAttribute("color");const C=S.getIndex();return C&&C.array.length===p.indices.length?(C.set(p.indices,0),C.needsUpdate=!0):S.setIndex(new we(p.indices,1)),k.castShadow=!w,k.receiveShadow=!w,w&&(k.renderOrder=2),k},c=h(o,n,this.materialOpaque,!1),d=h(i,r,this.materialTransparent,!0);if(!c&&!d){this.removeChunkMesh(t);return}const[u,f,m]=t.split(","),v=parseInt(u,10),M=parseInt(f,10),g=parseInt(m,10);a.position.set(v*x.x,M*x.y,g*x.z),c&&a.add(c),d&&a.add(d),c&&c.position.set(0,0,0),d&&d.position.set(0,0,0),c?this.chunkMeshes.set(t,c):d&&this.chunkMeshes.set(t,d),this.emit("MESH_CREATED",{key:t,mesh:c??d})}removeChunkMesh(e){const t=this.chunkGroups.get(e),s=this.chunkMeshes.get(e);t&&(this.scene.remove(t),t.traverse(o=>{o instanceof xe&&o.geometry&&o.geometry.dispose()}),this.chunkGroups.delete(e)),s&&(this.chunkMeshes.delete(e),this.emit("MESH_REMOVED",{key:e}))}getChunkMesh(e){return this.chunkMeshes.get(e)}getLoadedChunkKeys(){return Array.from(this.chunkMeshes.keys())}getLoadedMeshCount(){return this.chunkMeshes.size}clear(){const e=this.getLoadedChunkKeys();for(const t of e)this.removeChunkMesh(t)}destroy(){this.clear()}}const eo="/assets/grass_top-B-uLxs5-.png",to="/assets/dirt-B-vrw7w8.png",so="/assets/grass_side-D5yzkk_I.png",oo="/assets/cobblestone-CA00UXn1.png",Jt="/assets/sand-DRk7qQwc.png",io="/assets/wood_top-COALD2KD.png",ao="/assets/wood_side-C4jg5E62.png",no="/assets/tree_leaves-C6IY6uCJ.png",ro="/assets/maple_leaves-D3-dxP6r.png";class Dt{texture;config;constructor(e,t){this.texture=e,this.config=t,this.texture.flipY=!0,this.texture.colorSpace=De,this.texture.magFilter=$,this.texture.minFilter=$,this.texture.generateMipmaps=!1,this.texture.wrapS=be,this.texture.wrapT=be,this.texture.needsUpdate=!0}getTexture(){return this.texture}getTile(e){const t=this.config.tiles[e];return t?{u:t[0],v:t[1]}:null}getTileSize(){return this.config.tileSize}getAtlasSize(){return this.config.atlasSize}getTiles(){return this.config.tiles}getConfig(){return this.config}}function lo(){const t=document.createElement("canvas");t.width=80,t.height=16,t.getContext("2d").clearRect(0,0,t.width,t.height);const o=new ft(t);return o.flipY=!0,o.colorSpace=De,o.magFilter=$,o.minFilter=$,o.generateMipmaps=!1,o.wrapS=be,o.wrapT=be,o.needsUpdate=!0,o}async function co(){const l=new tt,e=16,t=11,s=1,o=document.createElement("canvas");o.width=t*e,o.height=s*e;const i=o.getContext("2d");i.clearRect(0,0,o.width,o.height);const n=Object.entries({grass_top:{path:eo,position:[0,0]},dirt:{path:to,position:[1,0]},grass_side:{path:so,position:[2,0]},cobblestone:{path:oo,position:[3,0]},sand:{path:Jt,position:[4,0]},wood_top:{path:io,position:[6,0]},wood_side:{path:ao,position:[7,0]},tree_leaves:{path:no,position:[8,0]},maple_leaves:{path:ro,position:[9,0]}}).map(async([h,{path:c,position:[d,u]}])=>{try{const f=await new Promise((v,M)=>{l.load(c,v,void 0,M)}),m=f.image;h==="grass_side"?(i.save(),i.translate((d+.5)*e,(u+.5)*e),i.rotate(Math.PI),i.drawImage(m,-e/2,-e/2,e,e),i.restore()):i.drawImage(m,d*e,u*e,e,e),f.dispose()}catch(f){console.warn(`Failed to load texture ${h}:`,f)}});await Promise.all(n);const r=new ft(o);return ho(r)}function ho(l){return l.flipY=!0,l.colorSpace=De,l.magFilter=$,l.minFilter=$,l.generateMipmaps=!1,l.wrapS=be,l.wrapT=be,l.needsUpdate=!0,l}async function uo(){try{const e=await(await fetch("/atlas.json")).json(),t=await co();return new Dt(t,e)}catch(l){console.warn("Failed to load atlas, falling back to simple atlas:",l);const e={tileSize:16,atlasSize:11,tiles:{grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0],maple_leaves:[9,0],air:[10,0]}},t=lo();return new Dt(t,e)}}class fo{envMap=null;pmremGenerator=null;constructor(e){this.pmremGenerator=new ps(e)}createEnvironmentMap(){if(this.envMap)return this.envMap;const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const s=t.getContext("2d"),o=s.createLinearGradient(0,0,0,e);o.addColorStop(0,"#87CEEB"),o.addColorStop(.7,"#B0E0E6"),o.addColorStop(1,"#F0F8FF"),s.fillStyle=o,s.fillRect(0,0,e,e);const i=[];for(let a=0;a<6;a++){const n=document.createElement("canvas");n.width=e,n.height=e,n.getContext("2d").drawImage(t,0,0),i.push(n)}return this.envMap=new vs(i),this.envMap.needsUpdate=!0,this.envMap.format=We,this.envMap.type=gs,this.envMap.generateMipmaps=!1,this.envMap.minFilter=Ee,this.envMap.magFilter=Ee,this.envMap.wrapS=be,this.envMap.wrapT=be,this.envMap}getEnvironmentMap(){return this.envMap}dispose(){this.envMap&&(this.envMap.dispose(),this.envMap=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null)}}class es extends Te{startTime;constructor(e,t,s,o){super({vertexShader:`
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

      // Anti-aliasing controls
      uniform bool aaEnabled;
      uniform float aaStrength;   // 0..1
      uniform bool aaLodBiasEnabled; // use explicit LOD bias for non-atlas textures
      uniform float aaLodBias;    // 0..2 typically
      uniform float atlasSize;    // tiles across (U). 1.0 if not using atlas
      uniform float tileSize;     // texels per tile (square)
      uniform float ditherAmount; // 0..1 strength in sRGB LDR (approx 1 LSB at 1.0)
      
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
          
          // Apply slope-scaled bias: surfaces facing away from light need more bias
          float slopeFactor = 1.0 - max(dot(normal, sunDir), 0.0);
          float slopeBias = biasWorld * (1.0 + slopeFactor * 2.0);
          
          // Push receiver position towards light to avoid self-shadowing
          vec3 receiverPos = worldPos + sunDir * slopeBias + normal * (biasWorld * 0.5);
          vec4 sc = getShadowCoord(ci, receiverPos);
          sc.xyz /= sc.w;
          sc = sc * 0.5 + 0.5;
          if (sc.x < 0.0 || sc.x > 1.0 || sc.y < 0.0 || sc.y > 1.0 || sc.z < 0.0 || sc.z > 1.0) return 1.0;

          // Convert desired world-space kernel width to UV units using cascade size
          float uvPerWorld = 1.0 / max(shadowCascadeSize[ci], 1e-3);
          float base = shadowSoftness; // interpret softness as world units
          float texelSize = max(base * uvPerWorld, 1.0 / shadowResolution);
          
          // Add small constant bias to receiver depth to prevent z-fighting
          float depthBias = 0.001 + 0.002 * slopeFactor;
          float receiver = sc.z - depthBias;

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
            // Blocker is anything closer to the light than receiver
            if (d < receiver - depthBias) { blockerSum += d; blockerCount += 1.0; }
          }
          float avgBlocker = blockerCount > 0.0 ? (blockerSum / blockerCount) : receiver;
          float penumbra = blockerCount > 0.0 ? clamp((receiver - avgBlocker) / max(avgBlocker, 0.01), 0.0, 1.0) : 0.0;

          float radius = texelSize * (2.5 + 12.0 * penumbra);
          float shadow = 0.0;
          for (int i = 0; i < POISSON_COUNT; i++) {
            vec2 o = rot * poisson[i] * radius;
            float sd = sampleShadowMap(ci, sc.xy + o);
            // Fragment is lit if its depth is less than or equal to shadow map depth
            shadow += (receiver <= sd + depthBias) ? 1.0 : 0.0;
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

      // Clamp UV to current atlas tile interior to avoid cross-tile bleed when supersampling
      vec2 clampUvToTile(vec2 uv) {
          if (atlasSize <= 1.0) return uv; // not an atlas: no clamp needed
          float tileW = 1.0 / atlasSize;
          float tileIndex = floor(uv.x / tileW);
          float uMin = tileIndex * tileW;
          float uMax = uMin + tileW;
          // Match mesher epsilon: half-pixel in UV space
          float epsU = 0.5 / (atlasSize * tileSize);
          float epsV = 0.5 / max(tileSize, 1.0);
          uv.x = clamp(uv.x, uMin + epsU, uMax - epsU);
          uv.y = clamp(uv.y, 0.0 + epsV, 1.0 - epsV);
          return uv;
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
          vec4 base = texture2D(tex, uv);
          if (!aaEnabled) return base;

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
            // Major axis in UV space
            vec2 major = (lenx > leny) ? dFdx(uv) : dFdy(uv);
            float mlen = length(major);
            if (mlen > 1e-5) major /= mlen; else major = vec2(1.0, 0.0);

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
              vec2 o = major * (t * 0.5);        // ±0.5 pixel along major axis
              // On non-atlas textures (single image with mipmaps), push a slight lod bias to avoid banding
              float lodBias = (atlasSize <= 1.0 && aaLodBiasEnabled) ? (aaLodBias * smoothstep(1.5, 8.0, maxLen)) : 0.0;
              vec4 c = texLod2D(tex, clampUvToTile(uv + o), lodBias);
              sum += c * w; wsum += w;
            }
            vec4 anisoAvg = sum / max(wsum, 1e-5);
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
          vec4 c1 = texLod2D(tex, clampUvToTile(uv + o1), lodBiasIso);
          vec4 c2 = texLod2D(tex, clampUvToTile(uv + o2), lodBiasIso);
          vec4 c3 = texLod2D(tex, clampUvToTile(uv + o3), lodBiasIso);
          vec4 c4 = texLod2D(tex, clampUvToTile(uv + o4), lodBiasIso);
          vec4 avg4 = (c1 + c2 + c3 + c4) * 0.25;
          return mix(base, avg4, k);
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
            float roughAA = specularAARoughness(roughness, normal);
            reflection = envColor * envMapIntensity * (1.0 - roughAA) * fresnel * clamp(dayLight, 0.0, 1.0);
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
          vec4 texColor = texture2D_AA(map, vUv);
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

          // Small blue-noise-ish dithering in sRGB to reduce visible banding downstream
          if (ditherAmount > 0.0) {
            float n1 = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453);
            float n2 = fract(sin(dot(gl_FragCoord.yx, vec2(39.3467,11.135))) * 24634.6345);
            float tri = (n1 + n2) - 1.0; // triangular distribution in [-1,1]
            float amp = (ditherAmount / 255.0); // ~1 LSB at 1.0
            color += tri * amp;
          }

          gl_FragColor = vec4(color, texColor.a * alphaScale);
      }
    `,uniforms:{map:{value:e},normalMap:{value:s||null},envMap:{value:t},roughness:{value:.8},metalness:{value:0},envMapIntensity:{value:.3},time:{value:0},alphaScale:{value:1},lightingMix:{value:1},sunDirection:{value:new P(50,120,50).normalize()},sunColor:{value:new V(1,.95,.8)},shadowMap0:{value:null},shadowMap1:{value:null},shadowMap2:{value:null},shadowMap3:{value:null},shadowMatrix0:{value:new X},shadowMatrix1:{value:new X},shadowMatrix2:{value:new X},shadowMatrix3:{value:new X},shadowCascades:{value:3},shadowDistances:{value:[25,50,100,200]},shadowSoftness:{value:2},shadowBias:{value:5e-4},shadowNormalBias:{value:.02},shadowIntensity:{value:0},shadowResolution:{value:1024},shadowBlendFraction:{value:.2},shadowBlendMin:{value:3},shadowCascadeSize:{value:[100,200,400,800]},shadowCamNear:{value:[.1,.1,.1,.1]},shadowCamFar:{value:[100,200,400,800]},cloudShadowEnabled:{value:!0},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new ie(Math.cos(Math.PI*.25)*5,Math.sin(Math.PI*.25)*5)},dayLight:{value:1},starLight:{value:0},materialFogEnabled:{value:!1},aaEnabled:{value:!0},aaStrength:{value:1},aaLodBiasEnabled:{value:!0},aaLodBias:{value:.9},atlasSize:{value:o?.atlasSize??1},tileSize:{value:o?.tileSize??16},ditherAmount:{value:.75}},defines:t?{USE_ENVMAP:!0}:{},side:Ht,transparent:!1}),this.startTime=Date.now()}updateUniforms(e){this.uniforms.time.value=Date.now()-this.startTime}setMaterialProperties(e,t,s){const o=this.uniforms;o.roughness.value=e,o.metalness.value=t,o.envMapIntensity.value=s}setAlphaScale(e){const t=this.uniforms;t.alphaScale.value=D.clamp(e,0,1)}setLightingMix(e){const t=this.uniforms;t.lightingMix.value=D.clamp(e,0,1)}setAntialiasing(e,t=1){const s=this.uniforms;s.aaEnabled.value=!!e,s.aaStrength.value=D.clamp(t,0,1)}setAALodBias(e,t=.9){const s=this.uniforms;s.aaLodBiasEnabled.value=!!e,s.aaLodBias.value=D.clamp(t,0,2)}setAtlasInfo(e){const t=this.uniforms;t.tileSize.value=Math.max(1,e.tileSize|0),t.atlasSize.value=Math.max(1,e.atlasSize|0)}setSunUniforms(e,t){const s=this.uniforms;s.sunDirection.value.copy(e),s.sunColor.value.copy(t)}setDayLight(e){const t=this.uniforms;t.dayLight.value=D.clamp(e,0,1)}setStarLight(e){const t=this.uniforms;t.starLight.value=D.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=D.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=D.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=D.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}updateShadowUniforms(e){const t=this.uniforms;Object.keys(e).forEach(s=>{t[s]&&(t[s].value=e[s].value)})}}class mo{renderTarget1;renderTarget2;quadGeometry;quadMaterial=null;quadMesh;orthoCamera;scene;settings={ssaoEnabled:!0,ssaoIntensity:.3,ssaoRadius:.2,bloomEnabled:!0,bloomStrength:.3,bloomThreshold:.05,exposure:.9,contrast:1.15,saturation:1.1,fogEnabled:!0,fogBaseDensity:.002,fogMaxDistance:600,volumetricsEnabled:!1,volumetricsIntensity:.5,volumetricsSteps:32};renderer;mainScene;camera;sunDirView=new P(.6,.8,.1).normalize();constructor(e,t,s,o,i){this.renderer=e,this.mainScene=t,this.camera=s;const a=Math.max(1,Math.floor(o)),n=Math.max(1,Math.floor(i)),r=new mt(a,n,Gt);r.format=qt,this.renderTarget1=new Xe(a,n,{minFilter:Ee,magFilter:Ee,format:We,depthTexture:r,depthBuffer:!0,stencilBuffer:!0}),this.renderTarget2=new Xe(a,n,{minFilter:Ee,magFilter:Ee,format:We}),this.quadGeometry=new Zt(2,2),this.quadMesh=new xe(this.quadGeometry),this.orthoCamera=new Xt(-1,1,1,-1,0,1),this.scene=new Yt,this.scene.add(this.quadMesh),this.createPostProcessMaterial()}createPostProcessMaterial(){const e={uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new ie},cameraNear:{value:.1},cameraFar:{value:1e3},invProjection:{value:new X},invView:{value:new X},cameraMatrixWorld:{value:new X},sunDirView:{value:new P(.6,.8,.1).normalize()},ssaoEnabled:{value:this.settings.ssaoEnabled},ssaoIntensity:{value:this.settings.ssaoIntensity},ssaoRadius:{value:this.settings.ssaoRadius},waterLevel:{value:this.settings.waterLevel??42},bloomEnabled:{value:this.settings.bloomEnabled},bloomStrength:{value:this.settings.bloomStrength},bloomThreshold:{value:this.settings.bloomThreshold},exposure:{value:this.settings.exposure},contrast:{value:this.settings.contrast},saturation:{value:this.settings.saturation},fogEnabled:{value:this.settings.fogEnabled},fogBaseDensity:{value:this.settings.fogBaseDensity},fogMaxDistance:{value:this.settings.fogMaxDistance},volumetricsEnabled:{value:this.settings.volumetricsEnabled},volumetricsIntensity:{value:this.settings.volumetricsIntensity},volumetricsSteps:{value:this.settings.volumetricsSteps},fogDitherAmount:{value:.75}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform sampler2D tDepth;
        uniform vec2 resolution;
        uniform float cameraNear;
        uniform float cameraFar;
        uniform bool ssaoEnabled;
        uniform float ssaoIntensity;
        uniform float ssaoRadius;
        uniform float waterLevel;
        uniform bool bloomEnabled;
        uniform float bloomStrength;
        uniform float bloomThreshold;
        uniform float exposure;
        uniform float contrast;
        uniform float saturation;
        uniform bool fogEnabled;
        uniform float fogBaseDensity;
        uniform float fogMaxDistance;
        uniform float fogDitherAmount;
        uniform bool volumetricsEnabled;
        uniform float volumetricsIntensity;
        uniform int volumetricsSteps;
        uniform mat4 invProjection;
        uniform mat4 invView;
        uniform mat4 cameraMatrixWorld;
        uniform vec3 sunDirView;
        
        varying vec2 vUv;

        float readDepth(vec2 coord) {
          float fragCoordZ = texture2D(tDepth, coord).r;
          if (fragCoordZ == 1.0) return cameraFar; // Handle background
          float viewZ = (cameraNear * cameraFar) / ((cameraFar - cameraNear) * fragCoordZ - cameraFar);
          return -viewZ; // Return positive depth
        }

        vec3 reconstructViewPosition(vec2 uv, float viewDepth) {
          // Reconstruct from NDC using inverse projection
          vec4 ndc = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
          // Set z from depth in view space
          // Approximate by placing on near plane ray and scaling by depth
          vec4 rayClip = vec4(ndc.xy, -1.0, 1.0);
          vec4 rayView = invProjection * rayClip;
          rayView /= rayView.w;
          vec3 dir = normalize(rayView.xyz);
          return dir * viewDepth;
        }
        vec3 reconstructWorldPos(float viewDepth){
          vec2 ndc = vUv * 2.0 - 1.0;
          vec4 clip = vec4(ndc, 1.0, 1.0);
          vec4 viewFar = invProjection * clip; viewFar /= viewFar.w;
          vec3 dirV = normalize(viewFar.xyz);
          float t = viewDepth / max(1e-4, -dirV.z);
          vec3 posV = dirV * t;
          vec4 posW = cameraMatrixWorld * vec4(posV, 1.0);
          return posW.xyz;
        }

        // Hash for per-pixel random rotation
        float hash12(vec2 p) {
          vec3 p3 = fract(vec3(p.xyx) * 0.1031);
          p3 += dot(p3, p3.yzx + 33.33);
          return fract((p3.x + p3.y) * p3.z);
        }
        // Improved SSAO with rotating kernel and continuous falloff
        float ssao(vec2 uv, vec3 position, vec3 normal) {
          if (!ssaoEnabled) return 1.0;
          float current = readDepth(uv);
          if (current >= cameraFar * 0.99) return 1.0;
          // Also skip AO for underwater pixels based on reconstructed world Y
          vec3 pw = reconstructWorldPos(current);
          if (pw.y < waterLevel - 0.1) return 1.0;
          
          // Compute local depth gradients to detect flat surfaces
          float px = 1.5 / min(resolution.x, resolution.y);
          float d1 = readDepth(clamp(uv + vec2(px, 0.0), vec2(0.0), vec2(1.0)));
          float d2 = readDepth(clamp(uv + vec2(-px, 0.0), vec2(0.0), vec2(1.0)));
          float d3 = readDepth(clamp(uv + vec2(0.0, px), vec2(0.0), vec2(1.0)));
          float d4 = readDepth(clamp(uv + vec2(0.0, -px), vec2(0.0), vec2(1.0)));
          if (d1 >= cameraFar*0.99) d1 = current; if (d2 >= cameraFar*0.99) d2 = current;
          if (d3 >= cameraFar*0.99) d3 = current; if (d4 >= cameraFar*0.99) d4 = current;
          float dmin = min(min(d1,d2), min(d3,d4));
          float dmax = max(max(d1,d2), max(d3,d4));
          float drange = dmax - dmin;
          
          // Compute surface normal from depth to detect when looking down at flat surfaces
          float dzdx = (d1 - d2) / (2.0 * px);
          float dzdy = (d3 - d4) / (2.0 * px);
          // Estimate view-space normal Z component - flat horizontal surface seen from above has high Z
          float normalZ = 1.0 / sqrt(1.0 + dzdx*dzdx + dzdy*dzdy);
          // When looking down at a flat surface, normalZ approaches 1.0
          // Reduce SSAO intensity for such surfaces to prevent false darkening
          float flatSurfaceFactor = smoothstep(0.95, 0.99, normalZ);
          
          // Also detect if we're looking mostly downward based on gradient magnitudes
          float gradMag = sqrt(dzdx*dzdx + dzdy*dzdy);
          float depthNorm = current / cameraFar;
          // If gradient is very small relative to depth, surface is likely flat and viewed from above
          float lookingDownFactor = smoothstep(0.1, 0.02, gradMag / max(depthNorm * 100.0, 1.0));
          
          // Combine factors to reduce SSAO when looking down at flat terrain
          float flatReduction = max(flatSurfaceFactor, lookingDownFactor * 0.7);
          
          float eps = mix(0.01, 0.25, clamp(current / cameraFar, 0.0, 1.0));
          float edgeMask = smoothstep(eps * 0.25, eps, drange);

          // Screen-space kernel radius (pixels)
          float baseRadius = ssaoRadius * 200.0;
          float angle0 = hash12(uv * resolution) * 6.2831853;
          float cs = cos(angle0), sn = sin(angle0);
          mat2 rot = mat2(cs, -sn, sn, cs);
          int samples = 16;
          float occlusion = 0.0;
          float valid = 0.0;
          float depthScale = clamp(current / cameraFar, 0.0, 1.0);
          float maxDelta = mix(2.0, 20.0, depthScale);
          float thickness = mix(0.002, 0.08, depthScale);
          
          // Increase thickness tolerance when looking at flat surfaces to reduce false occlusion
          thickness *= (1.0 + flatReduction * 3.0);
          
          for (int i=0; i<16; i++) {
            float t = (float(i)+0.5) / 16.0;
            float r = mix(0.25, 1.0, t);
            float a = t * 6.2831853;
            vec2 dir = vec2(cos(a), sin(a));
            vec2 o = rot * dir * (baseRadius * r) / resolution;
            vec2 suv = clamp(uv + o, vec2(0.0), vec2(1.0));
            float sd = readDepth(suv);
            if (sd >= cameraFar * 0.99) { continue; }
            valid += 1.0;
            float diff = current - sd; // positive when sample is closer
            if (diff > thickness) {
              float w = 1.0 - clamp((diff - thickness) / maxDelta, 0.0, 1.0);
              occlusion += w;
            }
          }
          // Normalize by number of valid samples (avoid horizon artifacts)
          occlusion = (occlusion / max(1.0, valid)) * ssaoIntensity * (0.75 + 0.25 * edgeMask);
          
          // Apply flat surface reduction to prevent darkening when looking down
          occlusion *= (1.0 - flatReduction * 0.8);
          
          // Fade AO near the far plane to avoid a visible seam over water
          float farFade = smoothstep(cameraFar * 0.30, cameraFar * 0.65, current);
          occlusion *= (1.0 - farFade);
          return clamp(1.0 - occlusion * 0.75, 0.5, 1.0);
        }

        // Working bloom effect
        vec3 bloom(sampler2D tex, vec2 uv) {
          vec3 color = texture2D(tex, uv).rgb;
          if (!bloomEnabled) return color;
          
          vec3 bloomColor = vec3(0.0);
          float blur = 2.0 / min(resolution.x, resolution.y);
          
          // Gather neighboring pixels for blur
          bloomColor += texture2D(tex, uv + vec2(blur, 0.0)).rgb;
          bloomColor += texture2D(tex, uv + vec2(-blur, 0.0)).rgb;
          bloomColor += texture2D(tex, uv + vec2(0.0, blur)).rgb;
          bloomColor += texture2D(tex, uv + vec2(0.0, -blur)).rgb;
          bloomColor += texture2D(tex, uv + vec2(blur, blur)).rgb;
          bloomColor += texture2D(tex, uv + vec2(-blur, blur)).rgb;
          bloomColor += texture2D(tex, uv + vec2(blur, -blur)).rgb;
          bloomColor += texture2D(tex, uv + vec2(-blur, -blur)).rgb;
          bloomColor /= 8.0;
          
          // Apply bloom to bright areas
          float brightness = dot(color, vec3(0.299, 0.587, 0.114));
          if (brightness > bloomThreshold) {
            float bloomFactor = (brightness - bloomThreshold) / (1.0 - bloomThreshold); // Smooth ramp from threshold to 1.0
            return color + bloomColor * bloomStrength * bloomFactor * 2.0;
          }
          
          return color;
        }

        // ACES tone mapping
        vec3 ACESFilm(vec3 x) {
          float a = 2.51;
          float b = 0.03;
          float c = 2.43;
          float d = 0.59;
          float e = 0.14;
          return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
        }

        // Color adjustment
        vec3 adjustColor(vec3 color, float contrast, float saturation) {
          // Contrast
          color = (color - 0.5) * contrast + 0.5;
          
          // Saturation
          float grey = dot(color, vec3(0.299, 0.587, 0.114));
          color = mix(vec3(grey), color, saturation);
          
          return color;
        }

        // Exponential fog based on view-space depth
        vec3 applyFog(vec3 color, float viewDepth) {
          if (!fogEnabled) return color;
          float d = min(viewDepth, fogMaxDistance);
          float fogFactor = 1.0 - exp(-d * fogBaseDensity);
          vec3 fogColor = vec3(0.72, 0.82, 0.92);
          // Dither the fog factor a tiny amount in sRGB to break visible bands
          if (fogDitherAmount > 0.0) {
            float n1 = hash12(gl_FragCoord.xy);
            float n2 = hash12(gl_FragCoord.yx);
            float tri = (n1 + n2) - 1.0; // ~triangular in [-1,1]
            fogFactor = clamp(fogFactor + tri * (fogDitherAmount / 255.0), 0.0, 1.0);
          }
          return mix(color, fogColor, clamp(fogFactor, 0.0, 0.9));
        }

        // Simplified screen-space volumetric light accumulation
        vec3 volumetrics(vec2 uv, float viewDepth) {
          if (!volumetricsEnabled) return vec3(0.0);
          // March in view space along -sunDirView (from pixel toward light)
          int steps = max(1, volumetricsSteps);
          float stepLen = max(1.0, viewDepth) / float(steps);
          vec3 accum = vec3(0.0);
          float transmittance = 1.0;
          vec2 dirSS = normalize((sunDirView.xy) + vec2(1e-5));
          vec2 stepUV = dirSS * 1.5 / min(resolution.x, resolution.y);
          vec2 sUv = uv;
          float z = viewDepth;
          for (int i = 0; i < 128; i++) {
            if (i >= steps) break;
            sUv -= stepUV; // move toward the sun
            z -= stepLen;
            if (z <= 0.0) break;
            float sd = readDepth(sUv);
            // Occlusion: if geometry in front of our sample depth
            if (sd < z - 0.5) {
              transmittance *= 0.96; // attenuate when encountering occluders
            }
            accum += vec3(1.0) * transmittance * 0.02;
            transmittance *= 0.99;
          }
          return accum * volumetricsIntensity;
        }

        void main() {
          vec3 color = texture2D(tDiffuse, vUv).rgb;
          
          // Apply bloom (always process, function handles enable/disable)
          color = bloom(tDiffuse, vUv);
          
          // Apply SSAO with safety checks
          if (ssaoEnabled) {
            float depth = readDepth(vUv);
            // Only apply SSAO to valid depth values
            if (depth > cameraNear && depth < cameraFar * 0.99) {
              vec3 position = vec3(vUv * 2.0 - 1.0, depth);
              vec3 normal = vec3(0.0, 0.0, 1.0); // Simplified normal
              float ao = ssao(vUv, position, normal);
              color *= ao;
            }
          }
          
          // Volumetrics (additive)
          float viewDepth = readDepth(vUv);
          color += volumetrics(vUv, viewDepth);
          
          // Apply exposure
          color *= exposure;
          
          // ACES tone mapping
          color = ACESFilm(color);
          
          // Fog after tone mapping for stable appearance
          color = applyFog(color, viewDepth);
          
          // Color adjustments
          color = adjustColor(color, contrast, saturation);
          
          gl_FragColor = vec4(color, 1.0);
        }
      `};this.quadMaterial=new Te(e),this.quadMesh.material=this.quadMaterial}updateSettings(e){if(this.settings={...this.settings,...e},this.quadMaterial){const t=this.quadMaterial.uniforms;e.ssaoEnabled!==void 0&&(t.ssaoEnabled.value=e.ssaoEnabled),e.ssaoIntensity!==void 0&&(t.ssaoIntensity.value=e.ssaoIntensity),e.ssaoRadius!==void 0&&(t.ssaoRadius.value=e.ssaoRadius),e.waterLevel!==void 0&&(t.waterLevel.value=e.waterLevel),e.bloomEnabled!==void 0&&(t.bloomEnabled.value=e.bloomEnabled),e.bloomStrength!==void 0&&(t.bloomStrength.value=e.bloomStrength),e.bloomThreshold!==void 0&&(t.bloomThreshold.value=e.bloomThreshold),e.exposure!==void 0&&(t.exposure.value=e.exposure),e.contrast!==void 0&&(t.contrast.value=e.contrast),e.saturation!==void 0&&(t.saturation.value=e.saturation),e.fogEnabled!==void 0&&(t.fogEnabled.value=e.fogEnabled),e.fogBaseDensity!==void 0&&(t.fogBaseDensity.value=e.fogBaseDensity),e.fogMaxDistance!==void 0&&(t.fogMaxDistance.value=e.fogMaxDistance),e.volumetricsEnabled!==void 0&&(t.volumetricsEnabled.value=e.volumetricsEnabled),e.volumetricsIntensity!==void 0&&(t.volumetricsIntensity.value=e.volumetricsIntensity),e.volumetricsSteps!==void 0&&(t.volumetricsSteps.value=e.volumetricsSteps)}else console.error("[PostProcessor] Quad material not available for uniform updates!")}render(){const e=this.renderer.getRenderTarget();if(this.renderer.setRenderTarget(this.renderTarget1),this.renderer.render(this.mainScene,this.camera),this.quadMaterial){const t=this.quadMaterial.uniforms;t.tDiffuse.value=this.renderTarget1.texture,t.tDepth.value=this.renderTarget1.depthTexture,t.resolution.value.set(this.renderTarget1.width,this.renderTarget1.height),t.cameraNear.value=this.camera.near||.1,t.cameraFar.value=this.camera.far||1e3;const s=this.camera;t.invProjection.value.copy(s.projectionMatrixInverse),t.invView.value.copy(s.matrixWorldInverse),t.cameraMatrixWorld.value.copy(s.matrixWorld),t.sunDirView.value.copy(this.sunDirView)}this.renderer.setRenderTarget(e),this.renderer.render(this.scene,this.orthoCamera)}setSize(e,t){const s=Math.max(1,Math.floor(e)),o=Math.max(1,Math.floor(t));this.renderTarget1.setSize(s,o),this.renderTarget2.setSize(s,o),this.renderTarget1.depthTexture&&(this.renderTarget1.depthTexture.image.width=s,this.renderTarget1.depthTexture.image.height=o,this.renderTarget1.depthTexture.needsUpdate=!0)}getSettings(){return{...this.settings}}setSunLighting(e,t){const s=t.matrixWorldInverse,o=new jt().setFromMatrix4(s);this.sunDirView.copy(e).applyMatrix3(o).normalize()}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.quadGeometry.dispose(),this.quadMaterial&&this.quadMaterial.dispose()}}class po extends st{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new ie(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjectionMatrix:{value:new X},cameraMatrixWorld:{value:new X},waterLevel:{value:42},ssaoEnabled:{value:!0},ssaoIntensity:{value:.35},ssaoRadius:{value:.2}},vertexShader:`
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
        uniform mat4 invProjectionMatrix;
        uniform mat4 cameraMatrixWorld;
        uniform float waterLevel;
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
        float aoFunc(vec2 uv) {
          if (!ssaoEnabled) return 1.0;
          float current = readDepth(uv);
          if (current >= cameraFar * 0.99) return 1.0;
          // Skip SSAO for underwater pixels (world Y below water plane). This
          // prevents the far seabed ramp from producing a horizon-wide AO seam.
          vec3 pw = reconstructWorldPos(current);
          if (pw.y < waterLevel - 0.1) return 1.0;
          
          // Compute local depth gradients to detect flat surfaces
          float px = 1.5 / min(resolution.x, resolution.y);
          float d1 = readDepth(clamp(uv + vec2(px, 0.0), vec2(0.0), vec2(1.0)));
          float d2 = readDepth(clamp(uv + vec2(-px, 0.0), vec2(0.0), vec2(1.0)));
          float d3 = readDepth(clamp(uv + vec2(0.0, px), vec2(0.0), vec2(1.0)));
          float d4 = readDepth(clamp(uv + vec2(0.0, -px), vec2(0.0), vec2(1.0)));
          if (d1 >= cameraFar*0.99) d1 = current; if (d2 >= cameraFar*0.99) d2 = current;
          if (d3 >= cameraFar*0.99) d3 = current; if (d4 >= cameraFar*0.99) d4 = current;
          float dmin = min(min(d1,d2), min(d3,d4));
          float dmax = max(max(d1,d2), max(d3,d4));
          float drange = dmax - dmin;
          
          // Compute surface normal from depth to detect when looking down at flat surfaces
          float dzdx = (d1 - d2) / (2.0 * px);
          float dzdy = (d3 - d4) / (2.0 * px);
          // Estimate view-space normal Z component - flat horizontal surface seen from above has high Z
          float normalZ = 1.0 / sqrt(1.0 + dzdx*dzdx + dzdy*dzdy);
          // When looking down at a flat surface, normalZ approaches 1.0
          // Reduce SSAO intensity for such surfaces to prevent false darkening
          float flatSurfaceFactor = smoothstep(0.95, 0.99, normalZ);
          
          // Also detect if we're looking mostly downward based on gradient magnitudes
          // High gradient magnitude relative to depth suggests we're looking at a steep angle
          float gradMag = sqrt(dzdx*dzdx + dzdy*dzdy);
          float depthNorm = current / cameraFar;
          // If gradient is very small relative to depth, surface is likely flat and viewed from above
          float lookingDownFactor = smoothstep(0.1, 0.02, gradMag / max(depthNorm * 100.0, 1.0));
          
          // Combine factors to reduce SSAO when looking down at flat terrain
          float flatReduction = max(flatSurfaceFactor, lookingDownFactor * 0.7);
          
          float eps = mix(0.01, 0.25, clamp(current / cameraFar, 0.0, 1.0));
          float edgeMask = smoothstep(eps * 0.25, eps, drange);

          // Screen-space radius in pixels -> convert to UV
          float baseRadius = ssaoRadius * 200.0;
          // Per-pixel random rotation to break banding
          float angle0 = hash12(uv * resolution) * 6.2831853;
          float cs = cos(angle0); float sn = sin(angle0);
          mat2 rot = mat2(cs, -sn, sn, cs);
          
          int samples = 16;
          float occlusion = 0.0;
          float valid = 0.0;
          // Depth-scaled tolerance to avoid far-distance banding
          float depthScale = clamp(current / cameraFar, 0.0, 1.0);
          float maxDelta = mix(2.0, 20.0, depthScale);
          float thickness = mix(0.01, 0.15, depthScale);
          
          // Increase thickness tolerance when looking at flat surfaces to reduce false occlusion
          thickness *= (1.0 + flatReduction * 3.0);
          
          for (int i = 0; i < 16; i++){
            float t = (float(i) + 0.5) / 16.0;
            float r = mix(0.25, 1.0, t);
            float a = t * 6.2831853;
            vec2 dir = vec2(cos(a), sin(a));
            vec2 o = rot * dir * (baseRadius * r) / resolution;
            vec2 suv = clamp(uv + o, vec2(0.0), vec2(1.0));
            float sd = readDepth(suv);
            if (sd >= cameraFar * 0.99) continue; // ignore background
            valid += 1.0;
            float diff = current - sd; // positive when sample is closer
            // Simple bias-only SSAO is more robust for our voxel terrain
            if (diff > thickness) {
              float w = 1.0 - clamp((diff - thickness) / maxDelta, 0.0, 1.0);
              occlusion += w;
            }
          }
          // Normalize by number of valid samples to avoid artifacts when
          // background samples dominate (common near the horizon over water).
          occlusion = (occlusion / max(1.0, valid)) * ssaoIntensity * (0.75 + 0.25 * edgeMask);
          
          // Apply flat surface reduction to prevent darkening when looking down
          occlusion *= (1.0 - flatReduction * 0.8);
          
          // Also fade AO as we approach the far plane (hidden by fog anyway)
          // Fade earlier so far-field planes (ocean/sea-bed) never accumulate AO
          float farFade = smoothstep(cameraFar * 0.30, cameraFar * 0.65, current);
          occlusion *= (1.0 - farFade);
          return clamp(1.0 - occlusion * 0.75, 0.5, 1.0);
        }
        void main(){
          vec3 color = texture2D(tDiffuse, vUv).rgb;
          float ao = aoFunc(vUv);
          gl_FragColor = vec4(color * ao, 1.0);
        }
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setWaterLevel(e){this.uniforms.waterLevel.value=e}setSettings({enabled:e,intensity:t,radius:s}){e!==void 0&&(this.uniforms.ssaoEnabled.value=e),t!==void 0&&(this.uniforms.ssaoIntensity.value=t),s!==void 0&&(this.uniforms.ssaoRadius.value=s)}}class vo extends st{_sunDirView=new P(.6,.8,.1).normalize();constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new ie(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjection:{value:new X},invView:{value:new X},sunDirView:{value:new P(.6,.8,.1).normalize()},enabled:{value:!0},intensity:{value:.1},steps:{value:32}},vertexShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjection.value.copy(e.projectionMatrixInverse),this.uniforms.invView.value.copy(e.matrixWorldInverse)}setSunDirWorld(e,t){const s=new jt().setFromMatrix4(t.matrixWorldInverse);this._sunDirView.copy(e).applyMatrix3(s).normalize(),this.uniforms.sunDirView.value.copy(this._sunDirView)}setSettings({enabled:e,intensity:t,steps:s}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.intensity.value=t),s!==void 0&&(this.uniforms.steps.value=s)}}class go extends Ns{constructor(e,t){super(new ie(e,t),.3,.5,.05)}setSize(e,t){super.setSize(e,t)}setSettings({enabled:e,strength:t,threshold:s}){e!==void 0&&(this.enabled=e),t!==void 0&&(this.strength=t),s!==void 0&&(this.threshold=s)}}class wo extends st{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1e3},enabled:{value:!0},baseDensity:{value:.002},maxDistance:{value:600},fogColor:{value:new V(.72,.82,.92)},dayLight:{value:1},exposure:{value:.9},contrast:{value:1.15},saturation:{value:1.1},ditherAmount:{value:.75},invProjectionMatrix:{value:new X},cameraMatrixWorld:{value:new X},hazeEnabled:{value:!1},waterLevel:{value:42},hazeStart:{value:400},hazeDensity:{value:.004},hazeMaxMix:{value:.5},hazeAngleBoost:{value:0},hazePlaneBoost:{value:0},hazePlaneBand:{value:6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
        uniform sampler2D tDiffuse; uniform sampler2D tDepth; varying vec2 vUv;
        uniform float cameraNear; uniform float cameraFar; uniform bool enabled;
        uniform float baseDensity; uniform float maxDistance; uniform vec3 fogColor; uniform float dayLight;
        uniform float exposure; uniform float contrast; uniform float saturation;
        uniform float ditherAmount;
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
        void main(){ vec3 col = texture2D(tDiffuse,vUv).rgb; col *= exposure; float d = readDepth(vUv); if(enabled){ bool bg = d >= cameraFar*0.99; d = min(d, maxDistance); float f = 1.0 - exp(-d * baseDensity); if (bg) { f *= mix(0.3, 1.0, clamp(dayLight,0.0,1.0)); } 
        // Preserve bright highlights like sun glints by reducing fog on bright pixels
        float brightness = max(col.r, max(col.g, col.b));
        float highlightPreserve = 1.0 - smoothstep(0.8, 2.0, brightness);
        f *= highlightPreserve;
        // Subtle blue-noise-ish dithering in sRGB to break visible bands
        if (ditherAmount > 0.0) {
          float n1 = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898,78.233))) * 43758.5453);
          float n2 = fract(sin(dot(gl_FragCoord.yx, vec2(39.3467,11.135))) * 24634.6345);
          float tri = (n1 + n2) - 1.0; // ~triangular in [-1,1]
          f = clamp(f + tri * (ditherAmount / 255.0), 0.0, 0.9);
        }
        col = mix(col, fogColor, clamp(f,0.0,0.9)); }
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setSettings({enabled:e,baseDensity:t,maxDistance:s}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.baseDensity.value=t),s!==void 0&&(this.uniforms.maxDistance.value=s)}setColor(e){this.uniforms.fogColor.value.copy(e)}setDayLight(e){this.uniforms.dayLight.value=D.clamp(e,0,1)}setColorGrading({exposure:e,contrast:t,saturation:s}){e!==void 0&&(this.uniforms.exposure.value=e),t!==void 0&&(this.uniforms.contrast.value=t),s!==void 0&&(this.uniforms.saturation.value=s)}setHorizonHaze(e){e.enabled!==void 0&&(this.uniforms.hazeEnabled.value=e.enabled),e.waterLevel!==void 0&&(this.uniforms.waterLevel.value=e.waterLevel),e.hazeStart!==void 0&&(this.uniforms.hazeStart.value=e.hazeStart),e.hazeDensity!==void 0&&(this.uniforms.hazeDensity.value=e.hazeDensity),e.hazeMaxMix!==void 0&&(this.uniforms.hazeMaxMix.value=e.hazeMaxMix),e.hazeAngleBoost!==void 0&&(this.uniforms.hazeAngleBoost.value=e.hazeAngleBoost),e.hazePlaneBoost!==void 0&&(this.uniforms.hazePlaneBoost.value=e.hazePlaneBoost),e.hazePlaneBand!==void 0&&(this.uniforms.hazePlaneBand.value=e.hazePlaneBand)}}class yo extends st{_sunNdc=new ie(-10,-10);_sunVisible=0;_sunColor=new V(1,1,1);constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new ie(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},sunNdc:{value:new ie(-10,-10)},sunVisible:{value:0},sunColor:{value:new V(1,1,1)},intensity:{value:.6},enabled:{value:!0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setEnabled(e){this.uniforms.enabled.value=e}setIntensity(e){this.uniforms.intensity.value=e}setSun(e,t,s){this._sunColor.copy(t);const o=new P().copy(e).multiplyScalar(1e4),i=new X().multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),a=new ws(o.x,o.y,o.z,1).applyMatrix4(i);let n=0;const r=this._sunNdc;a.w!==0&&r.set(a.x/a.w,a.y/a.w);let h=0;e.y>-.05&&(h=D.smoothstep(-.05,-.01,e.y));let c=0;a.w>0&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&(c=1),n=h*c,this._sunVisible=n,this.uniforms.sunNdc.value.copy(r),this.uniforms.sunColor.value.copy(this._sunColor),this.uniforms.sunVisible.value=this._sunVisible}}class xo{composer;renderPass;ssao;vol;bloom;lens;fog;depthTarget;renderer;scene;constructor(e,t,s,o,i){this.composer=new Vs(e),this.renderer=e,this.scene=t,this.depthTarget=new Xe(o,i,{minFilter:$,magFilter:$,format:We,depthBuffer:!0,stencilBuffer:!0});const a=new mt(o,i,Gt);a.format=qt,this.depthTarget.depthTexture=a,this.renderPass=new Os(t,s),this.composer.addPass(this.renderPass),this.ssao=new po,this.ssao.setDepthTexture(this.depthTarget.depthTexture),this.ssao.setSize(o,i),this.composer.addPass(this.ssao),this.vol=new vo,this.vol.setDepthTexture(this.depthTarget.depthTexture),this.vol.setSize(o,i),this.composer.addPass(this.vol),this.bloom=new go(o,i),this.composer.addPass(this.bloom),this.lens=new yo,this.lens.setDepthTexture(this.depthTarget.depthTexture),this.lens.setSize(o,i),this.composer.addPass(this.lens),this.fog=new wo,this.fog.setDepthTexture(this.depthTarget.depthTexture),this.composer.addPass(this.fog)}setSize(e,t){this.depthTarget.setSize(e,t),this.depthTarget.depthTexture&&(this.depthTarget.depthTexture.image.width=e,this.depthTarget.depthTexture.image.height=t,this.depthTarget.depthTexture.needsUpdate=!0),this.composer.setSize(e,t),this.ssao.setSize(e,t),this.vol.setSize(e,t),this.bloom.setSize(e,t),this.lens.setSize(e,t)}update(e,t,s){const o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,e),this.renderer.setRenderTarget(o),this.ssao.setCamera(e),this.vol.setCamera(e),this.vol.setSunDirWorld(t,e),this.lens.setCamera(e),this.lens.setSun(t,s??new V(1,1,.95),e),this.fog.setCamera(e)}setSSAOWaterLevel(e){this.ssao.setWaterLevel(e)}setSSAO(e,t,s){this.ssao.setSettings({enabled:e,intensity:t,radius:s})}setVolumetrics(e,t,s){this.vol.setSettings({enabled:e,intensity:t,steps:s})}setBloom(e,t,s){this.bloom.setSettings({enabled:e,strength:t,threshold:s})}setLens(e,t){this.lens.setEnabled(e),this.lens.setIntensity(t)}setFog(e,t,s){this.fog.setSettings({enabled:e,baseDensity:t,maxDistance:s})}setHorizonHaze(e){this.fog.setHorizonHaze(e)}setFogColor(e){this.fog.setColor(e)}setFogDayLight(e){this.fog.setDayLight(e)}setColorGrading(e,t,s){this.fog.setColorGrading({exposure:e,contrast:t,saturation:s})}render(){this.composer.render()}}class So{renderer;shadowLight;shadowCameras=[];shadowMaps=[];cascadeDistances=[];cascadeSizes=[];dummyTexture;sunDir=new P(50,120,50).normalize();lastSnappedLS=[];settings={enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:2.5,bias:5e-4,normalBias:.02,intensity:.6,stableExtents:!1,extentScale:1.05,shadowBlendFraction:.3,shadowBlendMin:10};constructor(e,t){this.renderer=e,this.shadowLight=new Kt(16777215,1),this.shadowLight.position.set(50,120,50),this.shadowLight.castShadow=this.settings.enabled,t.add(this.shadowLight.target),this.shadowLight.shadow.mapSize.width=this.settings.resolution,this.shadowLight.shadow.mapSize.height=this.settings.resolution,this.shadowLight.shadow.camera.near=.5,this.shadowLight.shadow.camera.far=this.settings.shadowDistance,t.add(this.shadowLight),this.initializeCascades(),this.enableShadowMapping(),this.dummyTexture=new ys(new Uint8Array([0,0,0,255]),1,1,We),this.dummyTexture.needsUpdate=!0}initializeCascades(){this.recomputeCascadeSplits(),this.shadowCameras=[],this.shadowMaps=[],this.cascadeSizes=[],this.lastSnappedLS=[];for(let e=0;e<this.settings.cascades;e++){const t=new Xt(-50,50,50,-50,.1,this.cascadeDistances[e]);this.shadowCameras.push(t);const s=new Xe(this.settings.resolution,this.settings.resolution,{minFilter:$,magFilter:$,format:We,depthBuffer:!0,stencilBuffer:!1});s.depthTexture=new mt(this.settings.resolution,this.settings.resolution,xs),s.depthTexture.format=Ss,this.shadowMaps.push(s)}}recomputeCascadeSplits(){const e=this.settings.cascades,t=.1,s=this.settings.shadowDistance,o=.7;this.cascadeDistances=[];for(let i=1;i<=e;i++){const a=i/e,n=t*Math.pow(s/t,a),r=t+(s-t)*a,h=o*(n-r)+r;this.cascadeDistances.push(h)}}enableShadowMapping(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=_t,this.renderer.shadowMap.autoUpdate=!0}update(e,t){if(!this.settings.enabled){this.shadowLight.castShadow=!1,this.renderer.shadowMap.enabled=!1;return}this.shadowLight.castShadow=!0,this.renderer.shadowMap.enabled=!0,this.updateShadowLightPosition(),e.isPerspectiveCamera&&this.updateCascadeCameras(e),this.renderShadowMaps(t)}updateShadowLightPosition(){const e=Math.max(50,this.settings.shadowDistance),t=this.sunDir.clone().multiplyScalar(e);this.shadowLight.position.copy(t),this.shadowLight.target.position.set(0,0,0),this.shadowLight.target.updateMatrixWorld()}updateCascadeCameras(e){const t=e,s=this.sunDir.clone().normalize(),o=new P(0,1,0);let i=t.near;for(let a=0;a<this.settings.cascades;a++){const n=this.cascadeDistances[a],r=this.shadowCameras[a],h=this.getSliceCornersWorld(t,i,n),c=new P().copy(t.position),d=Math.max(300,this.settings.shadowDistance*1.5),u=c.clone().sub(s.clone().multiplyScalar(d)),f=new X().lookAt(u,c,o),m=new P(1/0,1/0,1/0),v=new P(-1/0,-1/0,-1/0);for(const S of h){const b=S.clone().applyMatrix4(f);m.min(b),v.max(b)}const g=c.clone().add(new P(0,50,0)).clone().applyMatrix4(f);m.min(g),v.max(g);let p,A=0,y=c.clone().applyMatrix4(f);if(this.settings.stableExtents){const b=Math.tan(D.degToRad(t.fov)*.5)*n,C=b*t.aspect,I=Math.sqrt(C*C+b*b)*(this.settings.extentScale??1.05),R=2*I;p=I,A=R;const L=R/this.settings.resolution,T=Math.round(y.x/L)*L,U=Math.round(y.y/L)*L,H=this.lastSnappedLS[a]||{x:T,y:U},K=L*.5,J=Math.abs(T-H.x)>=K?T:H.x,Z=Math.abs(U-H.y)>=K?U:H.y,ee=J-y.x,le=Z-y.y;if(Math.abs(ee)>1e-6||Math.abs(le)>1e-6){const ge=new X().makeTranslation(ee,le,0);f.premultiply(ge),y=c.clone().applyMatrix4(f)}this.lastSnappedLS[a]={x:J,y:Z},r.left=-p,r.right=p,r.bottom=-p,r.top=p}else{const S=new P().subVectors(v,m),b=S.x/this.settings.resolution,C=S.y/this.settings.resolution;m.x=Math.floor(m.x/b)*b,m.y=Math.floor(m.y/C)*C,v.x=Math.floor(v.x/b)*b,v.y=Math.floor(v.y/C)*C;const I=Math.max(v.x-m.x,v.y-m.y);p=.5*I,A=I,y.set(.5*(m.x+v.x),.5*(m.y+v.y),0);const R=I/this.settings.resolution;y.x=Math.floor(y.x/R)*R,y.y=Math.floor(y.y/R)*R,r.left=y.x-p,r.right=y.x+p,r.bottom=y.y-p,r.top=y.y+p}const w=Math.max(.1,-v.z-50),k=Math.max(w+10,-m.z+100);r.near=w,r.far=k,r.updateProjectionMatrix(),r.matrixWorld.copy(new X().copy(f).invert()),r.matrixWorldInverse.copy(f),r.updateMatrixWorld(!0),i=n,this.cascadeSizes[a]=Math.max(.001,A)}}getSliceCornersWorld(e,t,s){const o=[],i=new P().setFromMatrixPosition(e.matrixWorld),a=new P;e.getWorldDirection(a);const n=new P(0,1,0).applyQuaternion(e.quaternion),r=new P().crossVectors(a,n).normalize().multiplyScalar(-1),h=i.clone().addScaledVector(a,t),c=i.clone().addScaledVector(a,s),d=Math.tan(D.degToRad(e.fov)*.5),u=d*t,f=u*e.aspect,m=d*s,v=m*e.aspect;return o.push(h.clone().addScaledVector(n,u).addScaledVector(r,-f)),o.push(h.clone().addScaledVector(n,-u).addScaledVector(r,-f)),o.push(h.clone().addScaledVector(n,-u).addScaledVector(r,f)),o.push(h.clone().addScaledVector(n,u).addScaledVector(r,f)),o.push(c.clone().addScaledVector(n,m).addScaledVector(r,-v)),o.push(c.clone().addScaledVector(n,-m).addScaledVector(r,-v)),o.push(c.clone().addScaledVector(n,-m).addScaledVector(r,v)),o.push(c.clone().addScaledVector(n,m).addScaledVector(r,v)),o}renderShadowMaps(e){const t=this.renderer.getRenderTarget(),s=[];e.traverse(o=>{const i=o.material;(Array.isArray(i)?i:[i]).forEach(n=>{if(n&&"isShaderMaterial"in n&&n.isShaderMaterial&&"uniforms"in n){const r=n,h=r.uniforms,c={};let d=!1;["shadowMap0","shadowMap1","shadowMap2","shadowMap3"].forEach(u=>{h[u]&&(c[u]=h[u].value,h[u].value=this.dummyTexture,d=!0)}),d&&s.push({material:r,values:c})}})});for(let o=0;o<this.shadowMaps.length;o++)this.renderer.setRenderTarget(this.shadowMaps[o]),this.renderer.clear(!0,!0,!0),this.renderer.render(e,this.shadowCameras[o]);this.renderer.setRenderTarget(t),s.forEach(({material:o,values:i})=>{const a=o.uniforms;Object.keys(i).forEach(n=>{a[n]&&(a[n].value=i[n])})})}getShadowUniforms(){const e={};for(let i=0;i<this.settings.cascades;i++){const a=this.shadowMaps[i];e[`shadowMap${i}`]={value:a.depthTexture??a.texture},e[`shadowMatrix${i}`]={value:new X().multiply(this.shadowCameras[i].projectionMatrix).multiply(this.shadowCameras[i].matrixWorldInverse)}}e.shadowCascades={value:this.settings.cascades},e.shadowDistances={value:this.cascadeDistances},e.shadowSoftness={value:this.settings.softness},e.shadowBias={value:this.settings.bias},e.shadowNormalBias={value:this.settings.normalBias},e.shadowIntensity={value:this.settings.enabled?this.settings.intensity:0},e.shadowResolution={value:this.settings.resolution},e.shadowBlendFraction={value:this.settings.shadowBlendFraction??.3},e.shadowBlendMin={value:this.settings.shadowBlendMin??10};const t=[0,1,2,3].map(i=>this.cascadeSizes[i]??(i===0?100:this.cascadeSizes[i-1]??100));e.shadowCascadeSize={value:t};const s=[0,1,2,3].map(i=>this.shadowCameras[i]?this.shadowCameras[i].near:.1),o=[0,1,2,3].map(i=>this.shadowCameras[i]?this.shadowCameras[i].far:this.settings.shadowDistance);return e.shadowCamNear={value:s},e.shadowCamFar={value:o},e}setSunDirection(e){this.sunDir.copy(e).normalize()}updateSettings(e){const t=this.settings.resolution,s=this.settings.cascades,o={...this.settings};this.settings={...this.settings,...e},t!==this.settings.resolution||s!==this.settings.cascades?(this.dispose(),this.initializeCascades()):o.shadowDistance!==this.settings.shadowDistance&&this.recomputeCascadeSplits(),this.shadowLight.shadow.mapSize.setScalar(this.settings.resolution),this.shadowLight.shadow.camera.far=this.settings.shadowDistance,this.shadowLight.castShadow=this.settings.enabled,this.renderer.shadowMap.enabled=this.settings.enabled,this.settings.enabled&&(this.renderer.shadowMap.needsUpdate=!0);for(let i=0;i<this.shadowCameras.length;i++)this.shadowCameras[i].far=this.settings.shadowDistance,this.shadowCameras[i].updateProjectionMatrix()}getSettings(){return{...this.settings}}setEnabled(e){this.settings.enabled=e,this.renderer.shadowMap.enabled=e,this.shadowLight.castShadow=e}dispose(){this.shadowMaps.forEach(e=>e.dispose()),this.shadowMaps=[],this.shadowCameras=[]}}class bo{sun;hemi;t=0;paused=!1;cycleSeconds=180;sunDir=new P(1,1,1).normalize();sunColor=new V(16777215);constructor(e,t={}){this.cycleSeconds=t.cycleSeconds??180,this.paused=!!t.paused,this.t=(t.initialTime??.25)%1,this.sun=new Kt(16777215,1),this.sun.castShadow=!1,e.add(this.sun),this.hemi=new bs(2241348,1052688,.05),this.hemi.position.set(0,1,0),e.add(this.hemi),this.recomputeLighting()}update(e){if(!this.paused){const t=e/Math.max(.001,this.cycleSeconds);this.t=(this.t+t)%1,this.recomputeLighting()}}setTime(e){this.t=(e%1+1)%1,this.recomputeLighting()}pause(e){this.paused=e}setCycleSeconds(e){this.cycleSeconds=Math.max(1,e|0)}getTime(){return this.t}isPaused(){return this.paused}getSunDirection(e=new P){return e.copy(this.sunDir)}getSunColor(e=new V){return e.copy(this.sunColor)}getElevationRadians(){return Math.asin(Math.sin(this.t*Math.PI*2))}recomputeLighting(){const e=this.t*Math.PI*2,t=Math.PI*.25,s=new P(Math.cos(t),0,Math.sin(t)),o=new P(0,1,0);this.sunDir.copy(s).multiplyScalar(Math.cos(e)).addScaledVector(o,Math.sin(e)).normalize(),this.sun.position.copy(this.sunDir).multiplyScalar(500),this.sun.target.position.set(0,0,0),this.sun.target.updateMatrixWorld();const a=Math.sin(e),n=D.clamp(a,0,1);this.sunColor.copy(Mo(n));const r=D.lerp(0,1.1,Qe(0,.7,n));this.sun.intensity=r,this.sun.color.copy(this.sunColor);const h=1-Qe(.05,.2,n);this.hemi.intensity=D.lerp(.05,.15,h),this.hemi.color.setRGB(.16,.2,.26),this.hemi.groundColor.setRGB(.05,.05,.06)}}function Qe(l,e,t){const s=D.clamp((t-l)/Math.max(1e-5,e-l),0,1);return s*s*(3-2*s)}function Mo(l){const e=new V(1,.58,.25),t=new V(1,.95,.9),s=new V(1,1,.98),o=Qe(0,.25,l),i=Qe(.25,.8,l),a=e.clone().lerp(t,o),n=t.clone().lerp(s,i);return a.lerp(n,i)}class Co{sky;sun=new P;uniforms;constructor(e,t){const s=new _s;s.scale.setScalar(45e4),this.sky=s,e.add(s);const o=s.material;this.uniforms=o.uniforms,this.uniforms.sunIntensityScale={value:t?.sunIntensityScale??1},this.uniforms.sunDiscScale={value:t?.sunDiscScale??1};try{if(typeof o.vertexShader=="string"){const a=o.vertexShader,r=(a.includes("sunIntensityScale")?a:a.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunIntensityScale;`)).replace("vSunE = sunIntensity( dot( vSunDirection, up ) );","vSunE = sunIntensity( dot( vSunDirection, up ) ) * sunIntensityScale;");o.vertexShader=r}if(typeof o.fragmentShader=="string"){const a=o.fragmentShader,r=(a.includes("sunDiscScale")?a:a.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunDiscScale;`)).replace("L0 += ( vSunE * 19000.0 * Fex ) * sundisk;","L0 += ( vSunE * 19000.0 * Fex ) * sundisk * sunDiscScale;");o.fragmentShader=r}o.needsUpdate=!0}catch(a){console.warn("[SkyDome] Failed to patch Sky shader for sun scaling:",a)}const i={turbidity:t?.turbidity??2,rayleigh:t?.rayleigh??1.5,mieCoefficient:t?.mieCoefficient??.005,mieDirectionalG:t?.mieDirectionalG??.8};this.setParams(i),this.setSunDirection(new P(1,1,.2).normalize())}setParams(e){this.uniforms.turbidity.value=e.turbidity,this.uniforms.rayleigh.value=e.rayleigh,this.uniforms.mieCoefficient.value=e.mieCoefficient,this.uniforms.mieDirectionalG.value=e.mieDirectionalG,e.sunIntensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.sunIntensityScale),e.sunDiscScale!==void 0&&(this.uniforms.sunDiscScale.value=e.sunDiscScale)}setSunDirection(e){const t=new P().copy(e).normalize();this.sun.copy(t).multiplyScalar(4e5),this.uniforms.sunPosition.value.copy(this.sun)}setSunLuminance(e){e.intensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.intensityScale),e.discScale!==void 0&&(this.uniforms.sunDiscScale.value=e.discScale)}}class ko{mesh;material;start=performance.now();intensity;constructor(e,t={}){const s=t.radius??1e3;this.intensity=t.intensity??1;const o=new Ms(s,32,16);o.scale(1,1,-1),this.material=new Te({side:ks,transparent:!0,depthWrite:!1,depthTest:!1,blending:Cs,uniforms:{uTime:{value:0},uVisibility:{value:0},uIntensity:{value:this.intensity}},vertexShader:`
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
      `}),this.mesh=new xe(o,this.material),this.mesh.renderOrder=2,e.add(this.mesh)}setVisibility(e){this.material.uniforms.uVisibility.value=D.clamp(e,0,1)}setIntensity(e){this.intensity=e,this.material.uniforms.uIntensity.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}}class Do{mesh;material;start=performance.now();wind;altitude;constructor(e,t={}){const s=t.altitude??200;this.altitude=s;const o=new Zt(4e3,4e3,1,1);o.rotateX(-Math.PI/2),o.translate(0,s,0);const i=t.windDirection??Math.PI*.25,a=t.windSpeed??5;this.wind=new ie(Math.cos(i),Math.sin(i)).multiplyScalar(a),this.material=new Te({transparent:!0,depthWrite:!1,side:pt,uniforms:{uTime:{value:0},uCoverage:{value:t.coverage??.45},uDensity:{value:t.density??.65},uWind:{value:new ie(this.wind.x,this.wind.y)},uDayLight:{value:1}},vertexShader:`
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
      `}),this.mesh=new xe(o,this.material),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=1,e.add(this.mesh)}setCoverage(e){this.material.uniforms.uCoverage.value=e}setDensity(e){this.material.uniforms.uDensity.value=e}setWind(e,t){this.wind.set(Math.cos(e),Math.sin(e)).multiplyScalar(t),this.material.uniforms.uWind.value.copy(this.wind)}setEnabled(e){this.mesh.visible=e}setDayLight(e){this.material.uniforms.uDayLight.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}getCoverage(){return this.material.uniforms.uCoverage.value}getDensity(){return this.material.uniforms.uDensity.value}getAltitude(){return this.altitude}getWind(e=new ie){return e.copy(this.wind)}}function zo(l,e){if(l.renderer?.exposure!==void 0&&e.setRendererExposure(l.renderer.exposure),l.timeOfDay){const{t,paused:s,cycleSeconds:o}=l.timeOfDay;e.setTime(D.clamp(t,0,1)),e.setTimePaused(!!s),e.setCycleSeconds(Math.max(1,Math.floor(o)))}l.clouds&&e.setClouds&&e.setClouds(l.clouds)}const W=42,zt=3,Ao=.7,At=.02,Lo=.15,Lt=.008,Io=25,It=.02,Po=12,Pt=.08,To=2,Ge=.015,Tt=6,Ft=-.3,Fo=8,Et=.012;function ke(l){let e=l>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function rt(l,e,t,s=4,o=2,i=.5){let a=1,n=0,r=0,h=e,c=t;for(let d=0;d<s;d++)n+=l(h,c)*a,r+=a,h*=o,c*=o,a*=i;return r>0?n/r:0}function Rt(l,e,t){const s=Math.min(1,Math.max(0,(t-l)/(e-l)));return s*s*(3-2*s)}function Ae(l,e,t,s){const o=ke(t^2654435769),i=ke(t^2246822507),a=ke(t^3266489909),n=ke(t^668265263),r=ke(t^2722868950),h=ke(t^1003724304),c=ke(t^439041101),d=ke(t^1601842716),u=Ce(o),f=Ce(i),m=Ce(a),v=Ce(n),M=Ce(r),g=Ce(h),p=Ce(c),A=Ce(d),y=s||336/2,w=M(l*Ge,e*Ge)*Tt,k=g(l*Ge,e*Ge)*Tt,S=l+w,b=e+k,I=Math.sqrt(l*l+e*e)/y,R=u(l*At,e*At),L=Ao+R*Lo;if(!(I<L)){const fe=rt((ls,cs)=>A(ls*Et,cs*Et),l,e,3,2,.5),ce=Math.max(0,I-L),Ue=Math.max(1e-6,1-L),Fe=Math.min(1,ce/Ue),He=Rt(0,1,Fe),yt=2,is=yt+(25-yt)*He,as=fe*3,ns=is+as,rs=W-Math.floor(ns);return Math.max(zt+1,rs)}const U=1-Rt(L*.6,L*.95,I),H=W+U*20,J=rt((fe,ce)=>f(fe*Lt,ce*Lt),S,b,4,2,.6)*Io*U,ee=rt((fe,ce)=>m(fe*It,ce*It),S,b,3,2,.5)*Po*U,ge=v(S*Pt,b*Pt)*To,ze=p(l*.01,e*.01),ne=ze<Ft?(ze-Ft)*Fo*U:0,de=H+J+ee+ge+ne;return Math.floor(Math.max(zt+1,de))}function Eo(l,e=0,t=0,s){const o=[{x:e,z:t},{x:0,z:0},{x:10,z:10},{x:-10,z:-10},{x:20,z:0},{x:0,z:20}];let i={x:e,z:t,height:W-10};for(const a of o){const n=Ae(a.x,a.z,l,s);n>W&&n>i.height&&(i={x:a.x,z:a.z,height:n})}if(i.height<=W)for(const a of o){const n=Ae(a.x,a.z,l,s);n>i.height&&(i={x:a.x,z:a.z,height:n})}return{x:i.x,y:i.height+15,z:i.z}}class ye extends Te{static _instances=new Set;static _rafId=null;static _start=performance.now();static _ensureTicker(){if(this._rafId!==null)return;const e=()=>{const t=(performance.now()-this._start)/1e3;for(const s of this._instances)try{s.setTime(t)}catch{}this._rafId=requestAnimationFrame(e)};this._rafId=requestAnimationFrame(e)}constructor(e){const t=new V(e.color??1713988),s=Math.max(.001,e.tileScale??1),o=!!e.useWorldUV,i=e.bounds??{minX:-1e9,maxX:1e9,minZ:-1e9,maxZ:1e9};super({transparent:!0,depthWrite:!1,depthTest:!0,side:pt,uniforms:{uColor:{value:t},uTime:{value:0},uMap:{value:e.map??null},uUseMap:{value:!1},uTileScale:{value:s},uUseWorldUV:{value:o},uInnerMinX:{value:i.minX},uInnerMaxX:{value:i.maxX},uInnerMinZ:{value:i.minZ},uInnerMaxZ:{value:i.maxZ},uEdgeStrength:{value:0},uEdgeWidth:{value:2},uAlpha:{value:1},uAlphaFresnelBase:{value:.65},uAlphaFresnelScale:{value:.35},uFresnel:{value:.035},uEta:{value:1/1.333},uRefractAmount:{value:.18},uAbsorption:{value:new P(.2,.06,.02)},uDepthApprox:{value:4},uSpecular:{value:1.2},uRoughness:{value:.35},uSunDir:{value:new P(.35,.9,.2).normalize()},uSunColor:{value:new V(1,.98,.9)},tSceneColor:{value:null},uHasSceneColor:{value:0},uResolution:{value:new ie(1,1)},uWaveAmp:{value:.12},uChop:{value:.8},uWind:{value:new ie(.8,.4).normalize()},uSpeed:{value:.8},uL0:{value:12},uL1:{value:6},uL2:{value:2.5},uFoamIntensity:{value:.55},uFoamThreshold:{value:.62},uFoamNoise:{value:1},uFoamDrift:{value:.15},uAlphaDistStart:{value:25},uAlphaDistEnd:{value:140},uAlphaMax:{value:.98},uAlphaNearMin:{value:.88},uAlphaNearDist:{value:22},uSkyTop:{value:new V(.32,.5,.8)},uSkyHorizon:{value:new V(.68,.78,.92)},uAmbientIntensity:{value:1},uNightTint:{value:new V(.1,.15,.25)}},vertexShader:`
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
        uniform float uTileScale; uniform bool uUseWorldUV; // kept for API stability
        uniform float uInnerMinX, uInnerMaxX, uInnerMinZ, uInnerMaxZ;
        uniform float uEdgeStrength; uniform float uEdgeWidth; uniform float uAlpha;
        uniform float uAlphaFresnelBase; uniform float uAlphaFresnelScale;
        // Optics
        uniform float uFresnel; uniform float uSpecular; uniform float uRoughness; uniform vec3 uSunColor; uniform vec3 uSunDir;
        uniform float uEta; uniform float uRefractAmount; uniform vec3 uAbsorption; uniform float uDepthApprox;
        uniform sampler2D tSceneColor; uniform int uHasSceneColor; uniform vec2 uResolution;
        // Waves
        uniform float uWaveAmp; uniform float uChop; uniform vec2 uWind; uniform float uSpeed; uniform float uL0; uniform float uL1; uniform float uL2;
        // Foam
        uniform float uFoamIntensity; uniform float uFoamThreshold; uniform float uFoamNoise; uniform float uFoamDrift;
        // Distance/angle transmission shaping
        uniform float uAlphaDistStart; uniform float uAlphaDistEnd; uniform float uAlphaMax;
        uniform float uAlphaNearMin; uniform float uAlphaNearDist;
        // Sky gradient
        uniform vec3 uSkyTop; uniform vec3 uSkyHorizon;
          // Ambient lighting
          uniform float uAmbientIntensity; uniform vec3 uNightTint;

        // Utility noise (small and stable)
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); float a=hash(i); float b=hash(i+vec2(1.0,0.0)); float c=hash(i+vec2(0.0,1.0)); float d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }

        // Multi-octave noise for natural randomization
        float fbm(vec2 p, int octaves) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 1.0;
          for (int i = 0; i < 8; i++) {
            if (i >= octaves) break;
            value += amplitude * noise(p * frequency);
            frequency *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        // Compute Gerstner-style normal from physically-based wave spectrum
        vec4 waveNormalCrest(vec2 xz, float t){
          // Primary wave directions following realistic ocean physics
          vec2 windDir = normalize(uWind);
          vec2 windPerp = vec2(-windDir.y, windDir.x);
          
          // Main wind waves (dominant energy)
          vec2 d0 = windDir;  // Primary wind direction
          vec2 d1 = windPerp; // Cross-wind waves (90 degrees)
          vec2 d2 = normalize(windDir * 0.7 + windPerp * 0.7); // 45-degree angle
          
          // Realistic micro-wave directions based on physics:
          // - Small waves tend to align more with local wind
          // - Cross-waves at specific angles (30°, 60°) due to wave interaction
          // - Slight angular spreading decreases with wave size
          vec2 d3 = normalize(windDir * 0.866 + windPerp * 0.5);   // 30-degree spread
          vec2 d4 = normalize(windDir * 0.866 - windPerp * 0.5);   // -30-degree spread  
          vec2 d5 = normalize(windDir * 0.5 + windPerp * 0.866);   // 60-degree cross-waves
          
          // Wave numbers (existing + new micro scales with 50% longer wavelengths)
          float k0 = 6.2831853 / max(1e-3, uL0);      // 12m primary
          float k1 = 6.2831853 / max(1e-3, uL1);      // 6m secondary  
          float k2 = 6.2831853 / max(1e-3, uL2);      // 2.5m tertiary
          float k3 = 6.2831853 / max(1e-3, 5.25);     // 5.25m larger micro ripples (3.5 * 1.5)
          float k4 = 6.2831853 / max(1e-3, 3.0);      // 3.0m medium ripples (2.0 * 1.5)
          float k5 = 6.2831853 / max(1e-3, 1.5);      // 1.5m fine ripples (1.0 * 1.5)
          
          // Dispersion relations
          float w0 = sqrt(9.8 * k0);
          float w1 = sqrt(9.8 * k1);
          float w2 = sqrt(9.8 * k2);
          float w3 = sqrt(9.8 * k3);
          float w4 = sqrt(9.8 * k4);
          float w5 = sqrt(9.8 * k5);
          
          // Amplitudes with natural decay for smaller waves
          float a0 = uWaveAmp;
          float a1 = uWaveAmp * 0.55;
          float a2 = uWaveAmp * 0.22;
          float a3 = uWaveAmp * 0.12;  // Micro ripples
          float a4 = uWaveAmp * 0.08;  // Fine ripples  
          float a5 = uWaveAmp * 0.05;  // Capillary waves
          float ch = uChop;

          // Phase calculations with varied speeds for randomization
          float p0 = dot(xz, d0) * k0 + t * (uSpeed * w0);
          float p1 = dot(xz, d1) * k1 + t * (0.8 * uSpeed * w1);
          float p2 = dot(xz, d2) * k2 + t * (1.2 * uSpeed * w2);
          float p3 = dot(xz, d3) * k3 + t * (0.9 * uSpeed * w3);
          float p4 = dot(xz, d4) * k4 + t * (1.1 * uSpeed * w4);
          float p5 = dot(xz, d5) * k5 + t * (0.7 * uSpeed * w5);

          // Anti-aliasing: reduce amplitude based on screen-space derivatives to prevent aliasing
          vec2 dxz_dx = dFdx(xz);
          vec2 dxz_dy = dFdy(xz);
          float maxDerivative = max(length(dxz_dx), length(dxz_dy));
          
          // Fade out high-frequency waves when screen derivatives are large
          float aa3 = 1.0 - smoothstep(0.0, 2.0, maxDerivative * k3);
          float aa4 = 1.0 - smoothstep(0.0, 1.5, maxDerivative * k4);
          float aa5 = 1.0 - smoothstep(0.0, 1.0, maxDerivative * k5);
          
          // Apply anti-aliasing to micro-wave amplitudes
          a3 *= aa3;
          a4 *= aa4;
          a5 *= aa5;

          // Height gradients -> normal (all wave components)
          vec2 grad = vec2(0.0);
          grad += d0 * (a0 * k0 * cos(p0));
          grad += d1 * (a1 * k1 * cos(p1));
          grad += d2 * (a2 * k2 * cos(p2));
          grad += d3 * (a3 * k3 * cos(p3));
          grad += d4 * (a4 * k4 * cos(p4));
          grad += d5 * (a5 * k5 * cos(p5));
          
          // Physics-based micro-turbulence (much simpler and more organized)
          // Small-scale wind-driven ripples aligned with dominant directions
          float microScale = 0.08;
          float microAA = 1.0 - smoothstep(0.0, 2.0, maxDerivative * microScale * 6.28);
          
          // Two primary micro-turbulence patterns following wind physics
          float turbulence1 = noise(xz * microScale + windDir * t * 0.03) * 2.0 - 1.0;
          float turbulence2 = noise(xz * microScale * 0.7 + windPerp * t * 0.025) * 2.0 - 1.0;
          
          // Apply micro-turbulence primarily along wind directions
          grad += windDir * (turbulence1 * 0.025 * microAA);
          grad += windPerp * (turbulence2 * 0.015 * microAA);

          vec3 N = normalize(vec3(-grad.x * ch, 1.0, -grad.y * ch));
          
          // Enhanced crest metric including micro-waves
          float slope = clamp(1.0 - N.y, 0.0, 1.0);
          float s0 = abs(sin(p0));
          float s1 = abs(sin(p1));
          float s2 = abs(sin(p2));
          float s3 = abs(sin(p3)) * aa3;
          float s4 = abs(sin(p4)) * aa4;
          float s5 = abs(sin(p5)) * aa5;
          
          float totalAmp = a0 + a1 + a2 + a3 + a4 + a5;
          float inter = (a0*s0 + a1*s1 + a2*s2 + a3*s3 + a4*s4 + a5*s5) / max(1e-3, totalAmp);
          float crest = clamp(slope * (0.5 + 0.8*inter), 0.0, 1.0);
          
          return vec4(N, crest);
        }

        vec3 skyColor(vec3 dir){
          // Simple analytic sky: horizon brighter, zenith deeper blue.
          float h = clamp(dir.y * 0.5 + 0.5, 0.0, 1.0); // -1..1 -> 0..1
          vec3 base = mix(uSkyHorizon, uSkyTop, pow(h, 0.65));
          return base;
        }

        float fresnelSchlick(float cosTheta, float F0){
          return F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);
        }

        // Beer-Lambert transmittance for constant medium, per-channel absorption coefficients
        vec3 beerLambert(vec3 sigmaA, float dist){
          return exp(-sigmaA * max(0.0, dist));
        }

        // Cheap screen-space refraction sampling: distort screen UV by refracted direction and wave detail
        // Note: use correct IOR depending on which side of the surface we're on so
        // underwater "looking up" gets proper bending and critical-angle behavior.
        vec3 sampleRefractedScene(vec2 xz, vec3 N, vec3 V, float refractStrength){
          if (uHasSceneColor == 0) return vec3(-1.0); // sentinel to indicate unavailable
          // Incident vector from eye toward surface
          vec3 I = -V;
          // Pick IOR for the current side: above water (air->water) or underwater (water->air)
          float etaSide = (dot(N, V) < 0.0) ? (1.0 / uEta) : uEta;
          // Refract into the other medium
          vec3 T = refract(I, N, etaSide);
          // If total internal reflection or grazing where T is near-zero, skip
          if (length(T) < 1e-5) return vec3(-1.0);
          // Screen UV
          vec2 uv = gl_FragCoord.xy / uResolution;
          // Build tangent frame to introduce micro distortion from waves
          vec3 up = (abs(N.y) < 0.999) ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0);
          vec3 Tx = normalize(cross(up, N));
          vec3 Bx = cross(N, Tx);
          float t = uTime;
          // Two noisy taps for smoother result
          vec2 n1 = vec2(noise(xz*0.41 + t*0.13), noise(xz*0.37 - t*0.09));
          vec2 n2 = vec2(noise(xz*0.59 - t*0.17), noise(xz*0.23 + t*0.07));
          // Project refracted direction onto screen as a small offset
          vec2 baseOfs = T.xz * 0.5; // world to screen scale heuristic
          // Add wave-driven micro distortion
          vec2 micro1 = vec2(dot(Tx, N)*0.0 + (n1.x-0.5), dot(Bx, N)*0.0 + (n1.y-0.5));
          vec2 micro2 = vec2((n2.y-0.5), (n2.x-0.5));
          float f = clamp(refractStrength, 0.0, 1.0);
          vec2 o1 = (baseOfs + micro1*0.5) * (0.005 + 0.020*f);
          vec2 o2 = (baseOfs + micro2*0.5) * (0.007 + 0.030*f);
          vec3 c1 = texture2D(tSceneColor, clamp(uv + o1, vec2(0.0), vec2(1.0))).rgb;
          vec3 c2 = texture2D(tSceneColor, clamp(uv + o2, vec2(0.0), vec2(1.0))).rgb;
          return 0.5 * (c1 + c2);
        }

        void main(){
          vec3 V = normalize(cameraPosition - vWorld);
          // Stable world UV for waves whether using block UVs or world quads
          vec2 xz = uUseWorldUV ? vWorld.xz : (vWorld.xz * uTileScale);
          float t = uTime;
          vec4 nc = waveNormalCrest(xz, t);
          vec3 N = nc.xyz;
          float crest = nc.w;

          // Reflection from simplified sky
          vec3 R = reflect(-V, N);
          // Analytic rough reflection: jitter normal in a tiny cone using noise
          vec3 up = (abs(N.y) < 0.999) ? vec3(0.0,1.0,0.0) : vec3(1.0,0.0,0.0);
          vec3 T = normalize(cross(up, N));
          vec3 B = cross(N, T);
          float r = mix(0.01, 0.08, clamp(uRoughness, 0.0, 1.0));
          vec2 h = vec2(noise(xz*0.31 + t*0.2), noise(xz*0.37 - t*0.17));
          vec3 N1 = normalize(N + (T * (h.x-0.5) + B * (h.y-0.5)) * r);
          vec3 N2 = normalize(N + (T * (h.y-0.5) + B * (h.x-0.5)) * r*0.8);
          vec3 R1 = reflect(-V, N1);
          vec3 R2 = reflect(-V, N2);
          vec3 skyRef = (skyColor(R) + skyColor(R1) + skyColor(R2)) / 3.0;

          // Base water coloration (absorption + proper Fresnel for dielectrics)
          // Determine if the camera is underwater looking up (view on backface).
          bool isUnder = (dot(N, V) < 0.0);
          // Use absolute angle for Fresnel so backfaces don't clamp to grazing (fixes pale white washout)
          float NdV = abs(dot(N, V));
          // Physical F0 from the correct IOR ratio for the current side
          float etaSide = isUnder ? (1.0 / uEta) : uEta;
          float F0 = pow((1.0 - etaSide) / (1.0 + etaSide), 2.0);
          F0 = clamp(F0 + uFresnel, 0.0, 1.0);
          float F = fresnelSchlick(NdV, F0);

          // Refraction direction into the opposite medium, with side-aware IOR
          vec3 I = -V;
          vec3 Tdir = refract(I, N, etaSide);
          bool tir = length(Tdir) < 1e-5; // total internal reflection or grazing

          // Optional screen-space refraction sample if provided by engine
          vec3 sceneRefr = sampleRefractedScene(xz, N, V, uRefractAmount * (1.0 - F));

          // Physical absorption using Beer-Lambert to create depth-based tint
          // approximate distance traveled in water; use |cos| so this works on both sides
          float path = uDepthApprox / max(1e-3, abs(Tdir.y) + 1e-3);
          vec3 transmittance = beerLambert(uAbsorption, path);
          // Approximate seabed tint under water (sandy)
          vec3 seabedTint = vec3(0.85, 0.80, 0.65);
          vec3 deep = uColor; // deep water base (bluish)
          // If we have scene color, use it as refracted base; otherwise approximate with seabed tint
          vec3 refrBase = (sceneRefr.x >= 0.0) ? sceneRefr : seabedTint;
          vec3 refrCol = mix(deep, refrBase, 0.65) * transmittance;
          // Above-water only tweaks to refraction/transmission (do not touch reflection)
          if (!isUnder) {
            // Thicker water along the ray appears darker; crests slightly brighter
            float thickness = clamp(path / max(1e-3, uDepthApprox), 0.0, 4.0);
            float slope = clamp(1.0 - N.y, 0.0, 1.0);
            float shade = mix(1.08, 0.82, clamp(0.55*thickness + 0.45*slope, 0.0, 1.0));
            // Shallow water picks up a hint of seabed warmth
            vec3 shallowShift = (seabedTint - deep) * (1.0 - exp(-thickness * 0.9)) * 0.18;
            // Gentle sun-through-water brightening (subsurface forward scatter)
            float tlen = max(length(Tdir), 1e-4);
            float subSun = pow(max(dot(normalize(-uSunDir), (-Tdir)/tlen), 0.0), 3.0);
            refrCol = refrCol * shade + shallowShift + deep * (0.08 * subSun);
            // Night darkening when looking down from above (does not affect reflection)
            float NdVpos = max(dot(N, V), 0.0);
            float night = 1.0 - clamp(uAmbientIntensity, 0.0, 1.0);
            float nightDark = 1.0 - night * 0.35 * smoothstep(0.2, 0.95, NdVpos);
            refrCol *= nightDark;
          }
          // Underwater reflection shouldn't sample the sky; use deep water tint only
          vec3 reflCol = isUnder ? deep : skyRef;
          vec3 base;
          if (isUnder) {
            // Removed Snell's window: use constant subtle reflection from below
            float Rmix = 0.06; // 6% reflection on underside
            base = mix(refrCol, reflCol, Rmix);
          } else {
            // Above water: standard Fresnel mixing
            float Rmix = tir ? 1.0 : F;
            base = mix(refrCol, reflCol, Rmix);
          }

          // Enhanced sun specular glint for dramatic ocean reflections
          vec3 L = normalize(uSunDir);
          float spec = max(dot(R, L), 0.0);
          
          // Ultra-sharp multi-layer glint system for crisp ocean reflections
          // Razor-sharp core highlight (sun disc reflection) - much higher power for crispness
          float coreGlint = pow(spec, 1800.0) * 4.0;
          // Very sharp main highlight (primary reflection path) 
          float mainGlint = pow(spec, 1200.0) * 3.2;
          // Sharp secondary highlight 
          float sharpGlint = pow(spec, 600.0) * 2.0;
          // Medium shoulder (scattered light around main path)
          float mediumGlint = pow(spec, 120.0) * 0.8;
          // Soft outer glow (wide reflection area)
          float softGlint = pow(spec, 24.0) * 0.4;
          
          // Add ultra-sharp wave-based sparkle variations (dancing light effect)
          // Use slightly different normals to create glint variations across wave crests
          float spec1 = max(dot(R1, L), 0.0);
          float spec2 = max(dot(R2, L), 0.0);
          float sparkleCore = pow(spec1, 1400.0) * 2.8 + pow(spec2, 1000.0) * 2.2;
          float sparkleMain = pow(spec1, 400.0) * 1.5 + pow(spec2, 280.0) * 1.2;
          
          // Combine all layers for ultra-crisp sun glint
          float totalGlint = coreGlint + mainGlint + sharpGlint + mediumGlint + softGlint + sparkleCore + sparkleMain;
          
          // Sun visibility check - only show glints when sun is above horizon
          float sunElevation = uSunDir.y; // Raw elevation, can be negative
          float sunVisibility = smoothstep(-0.03, -0.01, sunElevation); // Persist until well below visual horizon
          
          float elevationBoost = mix(3.5, 1.0, clamp(sunElevation, 0.0, 1.0)); // 3.5x stronger at horizon
          
          // Create warm sunset/sunrise colors
          vec3 sunsetOrange = vec3(1.0, 0.4, 0.1);  // Deep orange
          vec3 sunriseGold = vec3(1.0, 0.7, 0.2);   // Golden
          vec3 midDayWhite = vec3(1.0, 0.98, 0.90); // Warm white
          
          // Interpolate sun glint color based on elevation
          vec3 lowSunColor = mix(sunsetOrange, sunriseGold, 0.5);
          vec3 dynamicSunColor = mix(lowSunColor, midDayWhite, pow(clamp(sunElevation, 0.0, 1.0), 0.6));
          
          // Apply dynamic coloring to sun glint with visibility fade.
          // Underwater, specular glints on the underside look like a large circular artifact,
          // so disable the glint when the camera is below the surface.
          float glintMask = isUnder ? 0.0 : 1.0;
          vec3 sunGlint = mix(uSunColor, dynamicSunColor, 0.8) * totalGlint * uSpecular * elevationBoost * sunVisibility * glintMask;

          // Forward scattering tint (cheap subsurface feel)
          float fwd = pow(max(dot(N, -L), 0.0), 3.0) * 0.25;
          base += deep * fwd;

          // Foam on crests (instantaneous, noise-broken, wind-drifting)
          float foamSeed = noise(xz * 0.9 + uWind * (t * uFoamDrift));
          float foam = smoothstep(uFoamThreshold, 1.0, crest * (0.75 + uFoamNoise * (foamSeed - 0.5) * 0.8));
          vec3 foamCol = vec3(1.0);
          base = mix(base, foamCol, clamp(foam * uFoamIntensity, 0.0, 1.0));

          vec3 col = base + sunGlint;

          // Apply ambient lighting modulation
          // At night (low ambient), blend toward night tint color and reduce overall intensity
          float nightMix = 1.0 - uAmbientIntensity;
          col = mix(col, col * uNightTint, nightMix * 0.8);
          col *= mix(0.15, 1.0, uAmbientIntensity); // Scale overall brightness

          // Optional subtle ocean-only edge softening/brightening
          float outside = max(max(uInnerMinX - vWorld.x, vWorld.x - uInnerMaxX), max(uInnerMinZ - vWorld.z, vWorld.z - uInnerMaxZ));
          float f = uEdgeStrength * smoothstep(0.0, max(uEdgeWidth, 1e-3), outside);
          col = mix(col, vec3(0.88, 0.94, 1.0), f);

          // Tonemap-ish and gamma
          col = col / (col + vec3(1.0));
          col = pow(col, vec3(1.0/2.2));

          // Fresnel-driven alpha shaping so grazing angles appear less transparent
          float a = max(uAlpha, uAlphaNearMin);
          float fresnelAlpha = clamp(uAlphaFresnelBase + uAlphaFresnelScale * F, 0.0, 2.0);
          a = clamp(a * fresnelAlpha, 0.0, 1.0);
          // Slightly reduce underwater opacity to keep terrain readable
          if (isUnder) a *= 0.85;
          gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
        }
      `}),ye._instances.add(this),ye._ensureTicker()}setFresnelAlpha(e,t){this.uniforms.uAlphaFresnelBase.value=e,this.uniforms.uAlphaFresnelScale.value=t}setTime(e){this.uniforms.uTime.value=e}setColor(e){this.uniforms.uColor.value.copy(e)}setMap(e){this.uniforms.uMap.value=e,this.uniforms.uUseMap.value=!1}setTileScale(e){this.uniforms.uTileScale.value=Math.max(.001,e)}setUseWorldUV(e){this.uniforms.uUseWorldUV.value=!!e}setBounds(e){this.uniforms.uInnerMinX.value=e.minX,this.uniforms.uInnerMaxX.value=e.maxX,this.uniforms.uInnerMinZ.value=e.minZ,this.uniforms.uInnerMaxZ.value=e.maxZ}setEdge(e,t){this.uniforms.uEdgeStrength.value=Math.max(0,e),this.uniforms.uEdgeWidth.value=Math.max(.1,t)}setAlpha(e){const t=Math.max(0,Math.min(1,e));this.uniforms.uAlpha.value=t,this.depthWrite=t>=1}setRefraction(e,t=1/1.333,s=.15,o=.035,i=.02){this.uniforms.uRefractAmount.value=Math.max(0,e),this.uniforms.uEta.value=Math.max(.001,t),this.uniforms.uWaveAmp.value=Math.max(0,s);const a=Math.max(1e-4,o);this.uniforms.uL0.value=12/a,this.uniforms.uL1.value=6/a,this.uniforms.uL2.value=2.5/a,this.uniforms.uFresnel.value=Math.max(0,i)}setSun(e,t){this.uniforms.uSunDir.value.copy(e).normalize(),t&&this.uniforms.uSunColor.value.copy(t)}setScreenRefraction(e,t){e?(this.uniforms.tSceneColor.value=e,this.uniforms.uHasSceneColor.value=1,t&&this.uniforms.uResolution.value.set(Math.max(1,Math.floor(t.x)),Math.max(1,Math.floor(t.y)))):(this.uniforms.tSceneColor.value=null,this.uniforms.uHasSceneColor.value=0)}setAmbientLighting(e,t){this.uniforms.uAmbientIntensity.value=Math.max(0,Math.min(1,e)),t&&this.uniforms.uNightTint.value.copy(t)}setSkyColors(e,t){this.uniforms.uSkyTop.value.copy(e),this.uniforms.uSkyHorizon.value.copy(t)}setWaves(e){e.amp!==void 0&&(this.uniforms.uWaveAmp.value=Math.max(0,e.amp)),e.chop!==void 0&&(this.uniforms.uChop.value=Math.max(0,e.chop)),e.wind&&this.uniforms.uWind.value.copy(e.wind).normalize(),e.speed!==void 0&&(this.uniforms.uSpeed.value=Math.max(0,e.speed)),e.L0!==void 0&&(this.uniforms.uL0.value=Math.max(.001,e.L0)),e.L1!==void 0&&(this.uniforms.uL1.value=Math.max(.001,e.L1)),e.L2!==void 0&&(this.uniforms.uL2.value=Math.max(.001,e.L2))}dispose(){super.dispose(),ye._instances.delete(this),!ye._instances.size&&ye._rafId!==null&&(cancelAnimationFrame(ye._rafId),ye._rafId=null)}}class Ro{group;material;time=0;seabedMaterial=null;seabedGroup=null;blockMaterialSource=null;constructor(e,t){this.group=new te,this.group.name="OceanHorizon",this.material=new ye({map:t.map??null,color:t.color,tileScale:t.tileScale??1,useWorldUV:!0,bounds:t.bounds}),this.material.setAlpha(.7),this.material.setRefraction(.18,.75,.12,.035,.06),this.material.setFresnelAlpha(.65,.9);const s=u=>{this.material.onBeforeCompile=f=>{f.uniforms.uClipInner={value:u},/uniform\s+float\s+uClipInner\s*;/.test(f.fragmentShader)||(f.fragmentShader=`uniform float uClipInner;
`+f.fragmentShader),f.fragmentShader=f.fragmentShader.replace("bool isUnder = (dot(N, V) < 0.0);",`bool isUnder = (dot(N, V) < 0.0);
          if (uClipInner > 0.0) {
            bool insideXc = (vWorld.x >= uInnerMinX) && (vWorld.x <= uInnerMaxX);
            bool insideZc = (vWorld.z >= uInnerMinZ) && (vWorld.z <= uInnerMaxZ);
            if (insideXc && insideZc) {
              float dxc = min(vWorld.x - uInnerMinX, uInnerMaxX - vWorld.x);
              float dzc = min(vWorld.z - uInnerMinZ, uInnerMaxZ - vWorld.z);
              float edgeDistC = max(0.0, min(dxc, dzc));
              if (isUnder && edgeDistC < uClipInner) discard;
            }
          }`)},this.material.needsUpdate=!0},{minX:o,maxX:i,minZ:a,maxZ:n}=t.bounds,r=t.waterLevel+1-.001,h=.05;s(h*1.1);const c=Math.max(t.farDistance,1),d=[{x0:o,x1:i,z0:a-c,z1:a+h},{x0:o-c,x1:o,z0:a-c,z1:a},{x0:i,x1:i+c,z0:a-c,z1:a},{x0:o-c,x1:o+h,z0:a,z1:n},{x0:i-h,x1:i+c,z0:a,z1:n},{x0:o,x1:i,z0:n-h,z1:n+c},{x0:o-c,x1:o,z0:n,z1:n+c},{x0:i,x1:i+c,z0:n,z1:n+c}];for(const u of d){const f=new xe(this.makeQuad(u.x0,u.z0,u.x1,u.z1,r),this.material);f.frustumCulled=!0,f.renderOrder=2,this.group.add(f)}e.add(this.group),t.enableSeabed&&(this.blockMaterialSource=t.blockMaterialSource??null,this.buildSeabed(e,t))}makeQuad(e,t,s,o,i){const a=new Float32Array([e,i,t,s,i,t,s,i,o,e,i,t,s,i,o,e,i,o]),n=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),r=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),h=new Ze;return h.setAttribute("position",new we(a,3)),h.setAttribute("uv",new we(n,2)),h.setAttribute("normal",new we(r,3)),h.computeBoundingBox(),h.computeBoundingSphere(),h}setColor(e){this.material.setColor(e)}setMap(e,t=1){this.material.setMap(e),this.material.setTileScale(t)}setAmbientLighting(e,t){this.material.setAmbientLighting(e,t)}setSun(e,t){this.material.setSun(e,t)}setSkyColors(e,t){this.material.setSkyColors(e,t)}update(e){this.time+=e,this.seabedMaterial&&this.blockMaterialSource&&this.syncSeabedUniforms(this.blockMaterialSource)}dispose(e){e.remove(this.group),this.group.traverse(t=>{const s=t.material;s&&(Array.isArray(s)?s:[s]).forEach(a=>a.dispose()),t.geometry?.dispose()}),this.seabedGroup&&(e.remove(this.seabedGroup),this.seabedGroup.traverse(t=>{const s=t.material;s&&(Array.isArray(s)?s:[s]).forEach(a=>a.dispose()),t.geometry?.dispose()}))}async buildSeabed(e,t){const s=await this.loadSandTexture();s.wrapS=xt,s.wrapT=xt,s.colorSpace=De,s.magFilter=$,s.minFilter=Ds,s.generateMipmaps=!0;try{const p=Math.max(1,Math.floor(t.anisotropy??8));s.anisotropy=p}catch{}if(s.needsUpdate=!0,this.seabedMaterial=new es(s,null),this.seabedMaterial.setAntialiasing(!0,1),this.seabedMaterial.setMaterialProperties(.8,0,.3),this.blockMaterialSource){const p=this.blockMaterialSource,A=this.seabedMaterial,y=p.uniforms.envMap?.value;p.defines&&p.defines.USE_ENVMAP&&y&&(A.defines={...A.defines||{},USE_ENVMAP:!0},A.uniforms.envMap.value=y,A.needsUpdate=!0),this.syncSeabedUniforms(this.blockMaterialSource)}const{minX:o,maxX:i,minZ:a,maxZ:n}=t.bounds,r=t.seed??12345,h=t.worldRadius??Math.max(i-o,n-a)/2,c=Math.max(t.farDistance,1),d=this.sampleEdgeSeabedHeight({bounds:t.bounds,seed:r,worldRadius:h});this.seabedGroup=new te,this.seabedGroup.name="SeabedHorizon";const u=[{x0:o,x1:i,z0:a-c,z1:a},{x0:o-c,x1:o,z0:a-c,z1:a},{x0:i,x1:i+c,z0:a-c,z1:a},{x0:o-c,x1:o,z0:a,z1:n},{x0:i,x1:i+c,z0:a,z1:n},{x0:o,x1:i,z0:n,z1:n+c},{x0:o-c,x1:o,z0:n,z1:n+c},{x0:i,x1:i+c,z0:n,z1:n+c}],f=Math.max(Math.max(Math.abs(o),Math.abs(i)),Math.max(Math.abs(a),Math.abs(n))),m=Math.max(x.x,x.z),v=f+m*6,M=v+m*15,g=t.waterLevel+1-.001;for(const p of u){const A=this.makeSteppedQuadWorldUV(p.x0,p.z0,p.x1,p.z1,d,v,M,g),y=new xe(A,this.seabedMaterial);y.frustumCulled=!0,y.renderOrder=0,this.seabedGroup.add(y)}e.add(this.seabedGroup)}makeSteppedQuadWorldUV(e,t,s,o,i,a,n,r){const h=Math.abs(s-e),c=Math.abs(o-t),d=Math.max(8,Math.min(x.x,x.z))/2,u=Math.max(2,Math.min(64,Math.ceil(h/d))),f=Math.max(2,Math.min(64,Math.ceil(c/d))),m=(u+1)*(f+1),v=new Float32Array(m*3),M=new Float32Array(m*2),g=new Float32Array(m*3),p=(L,T)=>Math.sqrt(L*L+T*T);let A=0,y=0,w=0;for(let L=0;L<=f;L++){const T=L/f,U=t+(o-t)*T;for(let H=0;H<=u;H++){const K=H/u,J=e+(s-e)*K,Z=p(J,U),ee=D.clamp((Z-a)/Math.max(.001,n-a),0,1),le=ee*ee*(3-2*ee),ge=D.lerp(i,r-.05,le);v[A++]=J,v[A++]=ge,v[A++]=U,M[y++]=J,M[y++]=-U,g[w++]=0,g[w++]=1,g[w++]=0}}const k=u*f*6,S=new Uint32Array(k);let b=0;for(let L=0;L<f;L++)for(let T=0;T<u;T++){const U=L*(u+1)+T,H=U+1,K=U+(u+1),J=K+1;S[b++]=U,S[b++]=K,S[b++]=H,S[b++]=H,S[b++]=K,S[b++]=J}const C=new Ze;C.setAttribute("position",new we(v,3)),C.setAttribute("uv",new we(M,2)),C.setAttribute("normal",new we(g,3));const I=new Float32Array(m*3),R=.7;for(let L=0;L<I.length;L++)I[L]=R;return C.setAttribute("color",new we(I,3)),C.setIndex(new we(S,1)),C.computeBoundingBox(),C.computeBoundingSphere(),C}sampleEdgeSeabedHeight(e){const{minX:t,maxX:s,minZ:o,maxZ:i}=e.bounds,{seed:a,worldRadius:n}=e,r=Math.max(4,Math.floor(Math.min(x.x,x.z)/2)),h=[],c=Math.max(1,Math.floor(Math.min(x.x,x.z)/8));for(let u=t;u<=s;u+=r){const f=Ae(u,o-c,a,n);h.push(f)}for(let u=t;u<=s;u+=r){const f=Ae(u,i+c,a,n);h.push(f)}for(let u=o;u<=i;u+=r){const f=Ae(t-c,u,a,n);h.push(f)}for(let u=o;u<=i;u+=r){const f=Ae(s+c,u,a,n);h.push(f)}let d;if(h.length){h.sort((f,m)=>f-m);const u=Math.max(0,Math.min(h.length-1,Math.floor(h.length*.25)));d=h[u]}else d=Ae(s+c,o-c,a,n);return d-.001}loadSandTexture(){return new Promise((e,t)=>{new tt().load(Jt,s=>e(s),void 0,t)})}syncSeabedUniforms(e){if(!this.seabedMaterial)return;const t=this.seabedMaterial,s=e.uniforms,o=t.uniforms,i=["sunDirection","sunColor","dayLight","starLight","shadowMap0","shadowMap1","shadowMap2","shadowMap3","shadowMatrix0","shadowMatrix1","shadowMatrix2","shadowMatrix3","shadowCascades","shadowDistances","shadowSoftness","shadowBias","shadowNormalBias","shadowIntensity","shadowResolution","shadowBlendFraction","shadowBlendMin","shadowCascadeSize","shadowCamNear","shadowCamFar","cloudShadowEnabled","cloudShadowIntensity","cloudShadowAltitude","cloudShadowScale","cloudCoverage","cloudDensity","cloudWind","time","materialFogEnabled"];for(const a of i)s[a]&&o[a]&&(o[a].value=s[a].value)}}class Bo{canvas;camera;isPointerLocked=!1;mouseSensitivity=.002;onPointerLockChangedCallback=null;yawRadians=0;pitchRadians=0;onPointerLockChangeRef;onMouseMoveRef;onKeyDownRef;onKeyUpRef;onMouseDownRef;onMouseUpRef;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;sprint=!1;jumpQueued=!1;jumpHeld=!1;leftClickQueued=!1;rightClickQueued=!1;leftMouseHeld=!1;numSlotQueued=null;pauseToggleQueued=!1;constructor(e,t){this.canvas=e,this.camera=t,this.camera.rotation.order="YXZ",this.onPointerLockChangeRef=this.onPointerLockChange.bind(this),this.onMouseMoveRef=this.onMouseMove.bind(this),this.onKeyDownRef=this.onKeyDown.bind(this),this.onKeyUpRef=this.onKeyUp.bind(this),this.onMouseDownRef=this.onMouseDown.bind(this),this.onMouseUpRef=this.onMouseUp.bind(this),document.addEventListener("pointerlockchange",this.onPointerLockChangeRef),window.addEventListener("mousemove",this.onMouseMoveRef),window.addEventListener("keydown",this.onKeyDownRef),window.addEventListener("keyup",this.onKeyUpRef),window.addEventListener("mousedown",this.onMouseDownRef),window.addEventListener("mouseup",this.onMouseUpRef)}update(){const e=D.degToRad(89);this.pitchRadians>e&&(this.pitchRadians=e),this.pitchRadians<-e&&(this.pitchRadians=-e),this.yawRadians=D.euclideanModulo(this.yawRadians+Math.PI,Math.PI*2)-Math.PI,this.camera.rotation.y=this.yawRadians,this.camera.rotation.x=this.pitchRadians}getOrientation(){return{yaw:this.yawRadians,pitch:this.pitchRadians}}destroy(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeRef),window.removeEventListener("mousemove",this.onMouseMoveRef),window.removeEventListener("keydown",this.onKeyDownRef),window.removeEventListener("keyup",this.onKeyUpRef),window.removeEventListener("mousedown",this.onMouseDownRef),window.removeEventListener("mouseup",this.onMouseUpRef)}onPointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.canvas,this.isPointerLocked||(this.leftMouseHeld=!1),this.onPointerLockChangedCallback&&this.onPointerLockChangedCallback(this.isPointerLocked)}onMouseMove(e){if(!this.isPointerLocked)return;const t=e.movementX||0,s=e.movementY||0;this.yawRadians-=t*this.mouseSensitivity,this.pitchRadians-=s*this.mouseSensitivity}onPointerLockChanged(e){this.onPointerLockChangedCallback=e}requestPointerLock(){this.canvas&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()}exitPointerLock(){if(document.exitPointerLock)try{document.exitPointerLock()}catch{}}onMouseDown(e){this.isPointerLocked&&(e.button===0?(this.leftMouseHeld=!0,this.leftClickQueued=!0):e.button===2&&(this.rightClickQueued=!0))}onMouseUp(e){e.button===0&&(this.leftMouseHeld=!1)}onKeyDown(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.sprint=!0;break;case"Space":this.jumpQueued=!0,this.jumpHeld=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":this.numSlotQueued=parseInt(e.code.slice(-1),10)-1;break;case"KeyP":this.pauseToggleQueued=!0;break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break;case"Space":this.jumpHeld=!1;break}}getMoveInput(){let e=0,t=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveLeft&&(e-=1),this.moveRight&&(e+=1);const s=Math.hypot(e,t);return s>0&&(e/=s,t/=s),{x:e,z:t}}isSprinting(){return this.sprint}isJumpHeld(){return this.jumpHeld}consumeJumpRequested(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeLeftClick(){return this.leftClickQueued?(this.leftClickQueued=!1,!0):!1}peekLeftClick(){return this.leftClickQueued}isLeftHeld(){return this.leftMouseHeld}consumeRightClick(){return this.rightClickQueued?(this.rightClickQueued=!1,!0):!1}peekRightClick(){return this.rightClickQueued}consumeSelectedSlot(){const e=this.numSlotQueued;return this.numSlotQueued=null,e}consumePauseToggle(){return this.pauseToggleQueued?(this.pauseToggleQueued=!1,!0):!1}}class me{camera;world;input;static ENABLE_LAND_STEP_ASSIST=!1;velocityY=0;grounded=!1;swimVelocity=new P;underwater=!1;stepCooldown=0;emergeLiftRemaining=0;emergeNudgeDir=new P;renderYOffsetY=0;elevationTween={from:0,elapsed:0,duration:0,active:!1};width=E.width;height=E.height;halfWidth=this.width/2;eyeHeight=Math.min(E.height*.9,E.height-.1);waterId=he("water")??5;walkSpeed=E.speed.walk;sprintSpeed=E.speed.sprint;gravity=E.gravity;jumpImpulse=E.jump;static EPS=1e-5;bounds=null;constructor(e,t,s,o){this.camera=e,this.world=t,this.input=s,o&&(this.bounds=o),this.camera.rotation.order="YXZ"}update(e){this.renderYOffsetY!==0&&(this.camera.position.y-=this.renderYOffsetY,this.renderYOffsetY=0),this.stepCooldown>0&&(this.stepCooldown=Math.max(0,this.stepCooldown-e));const t=this.underwater,s=this.isHeadInsideWater(),o=this.isHeadInFloodedAir(),i=this.isBaseSubmerged(),a=W+1-.001,n=this.camera.position.y+(this.height-this.eyeHeight),r=.3;if(this.underwater?n>a+r&&(this.underwater=!1):(s||o||i)&&n<a-r&&(this.underwater=!0),this.underwater){t||(this.velocityY=0,this.grounded=!1),this.updateUnderwater(e),this.applyElevationTween(e);return}if(t){this.velocityY=Math.max(this.velocityY,this.swimVelocity.y);const Z=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(Z>.5){const ee=Math.min(2,Z*.6),le=new P(this.swimVelocity.x,0,this.swimVelocity.z).normalize();this.camera.position.add(le.multiplyScalar(ee*e))}this.swimVelocity.set(0,0,0)}this.input.consumeJumpRequested()&&this.grounded&&(this.velocityY=this.jumpImpulse,this.grounded=!1);const c=this.input.getMoveInput(),d=this.input.isSprinting()?this.sprintSpeed:this.walkSpeed,u=this.camera.rotation.y,f=-Math.sin(u),m=-Math.cos(u),v=Math.cos(u),M=-Math.sin(u),g=v*c.x+f*c.z,p=M*c.x+m*c.z,A=Math.hypot(g,p),y=A>0?g/A:0,w=A>0?p/A:0,k=y*d*e,S=w*d*e;this.velocityY+=this.gravity*e;const b=this.velocityY*e;this.resolveAxis("x",k),this.resolveAxis("z",S);const C=this.resolveAxis("y",b);b<0&&C?(this.grounded=!0,this.velocityY=0):b!==0&&(this.grounded=!1);const I=this.getBaseY();if(I<0){const Z=-I;this.camera.position.y+=Z,this.velocityY=0,this.grounded=!0}const R=this.camera.position,L=this.getBaseY(),T=L+this.height,U=R.x-this.halfWidth,H=R.x+this.halfWidth,K=R.z-this.halfWidth,J=R.z+this.halfWidth;if(this.aabbIntersectsSolid(U,L,K,H,T,J)){let Z=Math.floor(T)+1,ee=0;const le=10;for(;ee<le;){const ge=Z-this.height,ze=Z;if(!this.aabbIntersectsSolid(U,ge,K,H,ze,J)){this.camera.position.y=Z-this.height+this.eyeHeight,this.velocityY=0,this.grounded=!0;break}Z++,ee++}}this.applyElevationTween(e)}updateUnderwater(e){const t=E.swim,s=this.input.getMoveInput(),o=this.input.isSprinting()?t.sprintMultiplier:1,i=new P;this.camera.getWorldDirection(i),i.normalize();const a=new P(0,1,0),n=new P().crossVectors(i,a).normalize(),r=new P().addScaledVector(n,s.x).addScaledVector(i,s.z);r.lengthSq()>0&&r.normalize();const h=t.accel*o;if(r.lengthSq()>0&&this.swimVelocity.addScaledVector(r,h*e),this.input.isJumpHeld()){this.swimVelocity.y+=t.verticalAccel*e*o;const de=W+1-.001-this.camera.position.y;de>0&&(this.swimVelocity.y+=t.surfaceSnapStrength*de*e)}const c=this.gravity*t.gravityScale;this.swimVelocity.y+=c*e;const u=W+1-.001-this.camera.position.y;u>0&&u<t.floatBand&&this.swimVelocity.y<0&&(this.swimVelocity.y+=t.floatStrength*u*e);const f=Math.hypot(s.x,s.z);!this.input.isJumpHeld()&&f<.01&&(this.swimVelocity.y-=Math.max(0,E.swim.sinkBias)*e);const m=Math.max(0,Math.min(10,t.drag)),v=Math.max(0,1-m*e);this.swimVelocity.multiplyScalar(v);const M=t.maxSpeed*o,g=new P(this.swimVelocity.x,0,this.swimVelocity.z),p=g.length();if(p>M&&(g.multiplyScalar(M/p),this.swimVelocity.x=g.x,this.swimVelocity.z=g.z),this.swimVelocity.y=D.clamp(this.swimVelocity.y,-M,M),this.emergeLiftRemaining>0){const ne=Math.min(t.emergeLiftSpeed*e,this.emergeLiftRemaining),de=this.camera.position.y;this.resolveAxis("y",ne);const fe=this.camera.position.y-de;this.emergeLiftRemaining-=Math.max(0,fe);const ce=t.emergeNudgeSpeed*e;(this.emergeNudgeDir.x!==0||this.emergeNudgeDir.z!==0)&&(this.resolveAxis("x",this.emergeNudgeDir.x*ce),this.resolveAxis("z",this.emergeNudgeDir.z*ce)),this.emergeLiftRemaining<=0&&(this.emergeLiftRemaining=0,this.emergeNudgeDir.set(0,0,0))}const A=this.swimVelocity.x*e,y=this.swimVelocity.y*e,w=this.swimVelocity.z*e,k=this.resolveAxis("x",A);k&&(this.swimVelocity.x=0);const S=this.resolveAxis("z",w);S&&(this.swimVelocity.z=0);const b=this.getBaseY(),C=W+1-.001,I=C-this.camera.position.y<E.swim.floatBand+.75,R=this.hasSolidGroundBelow(),L=r.lengthSq()>1e-6,T=Math.abs(C-this.camera.position.y)<.5;if(this.emergeLiftRemaining<=0&&this.stepCooldown<=0&&(L||this.input.isJumpHeld())&&(k||S||R||T)&&(I||this.input.isJumpHeld())){const ne=Math.max(0,C-b),de=Math.max(0,C+E.swim.stepOutHeadroom-b),fe=Math.min(E.swim.maxEmergeStepOut,Math.max(.25,de)),ce=Math.min(E.swim.maxEmergeStepOut,Math.max(.25,ne)),Ue=[fe,ce,1.25,1,.75,.5,.25];let Fe=0;for(const He of Ue)if(this.canStepUpEmerge(He,r)){Fe=He;break}Fe>0&&(this.emergeLiftRemaining=Fe,this.emergeNudgeDir.copy(r),this.startElevationTween(Fe),this.stepCooldown=.15)}this.resolveAxis("y",y)&&(this.swimVelocity.y=0),this.grounded=!1;const H=this.getBaseY();if(H<0){const ne=-H;this.camera.position.y+=ne,this.swimVelocity.y=Math.max(0,this.swimVelocity.y)}const K=this.camera.position,J=this.getBaseY(),Z=J+this.height,ee=K.x-this.halfWidth,le=K.x+this.halfWidth,ge=K.z-this.halfWidth,ze=K.z+this.halfWidth;if(this.aabbIntersectsSolid(ee,J,ge,le,Z,ze)){let ne=Math.floor(Z)+1,de=0;const fe=10;for(;de<fe;){const ce=ne-this.height,Ue=ne;if(!this.aabbIntersectsSolid(ee,ce,ge,le,Ue,ze)){this.camera.position.y=ne-this.height+this.eyeHeight,this.swimVelocity.y=0;break}ne++,de++}}}resolveAxis(e,t){if(t===0)return!1;const s=this.camera.position,o=e==="x"?s.x+t:s.x,i=e==="y"?s.y+t:s.y,a=e==="z"?s.z+t:s.z,n=o-this.halfWidth,r=o+this.halfWidth,h=this.getBaseY(i),c=h+this.height,d=a-this.halfWidth,u=a+this.halfWidth;if(this.bounds&&(e==="x"||e==="z")){const m=this.halfWidth+me.EPS;if(e==="x"){const v=this.bounds.minX+m,M=this.bounds.maxX-m;if(o<v)return this.camera.position.x=v,!0;if(o>M)return this.camera.position.x=M,!0}else if(e==="z"){const v=this.bounds.minZ+m,M=this.bounds.maxZ-m;if(a<v)return this.camera.position.z=v,!0;if(a>M)return this.camera.position.z=M,!0}}if(!this.aabbIntersectsSolid(n,h,d,r,c,u))return s.set(o,i,a),!1;const f=Math.sign(t);switch(e){case"x":{if(f>0){const v=Math.floor(r)-this.halfWidth-me.EPS;s.x=v}else{const v=Math.floor(n)+1+this.halfWidth+me.EPS;s.x=v}return!0}case"z":{if(f>0){const v=Math.floor(u)-this.halfWidth-me.EPS;s.z=v}else{const v=Math.floor(d)+1+this.halfWidth+me.EPS;s.z=v}return!0}case"y":{if(f>0){const v=Math.floor(c)-this.height-me.EPS;s.y=v+this.eyeHeight}else{const v=Math.floor(h)+1+me.EPS;s.y=v+this.eyeHeight}return!0}}}getBaseY(e=this.camera.position.y){return e-this.eyeHeight}startElevationTween(e,t=.12){this.elevationTween.from=-e,this.elevationTween.elapsed=0,this.elevationTween.duration=Math.max(.06,t),this.elevationTween.active=!0}applyElevationTween(e){if(!this.elevationTween.active)return;this.elevationTween.elapsed+=e;const t=Math.min(1,this.elevationTween.elapsed/this.elevationTween.duration),o=(a=>1-Math.pow(1-a,3))(t),i=this.elevationTween.from*(1-o);this.renderYOffsetY=i,this.camera.position.y+=this.renderYOffsetY,t>=1&&(this.elevationTween.active=!1,this.renderYOffsetY=0)}isHeadInsideWater(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=W+1)return!1;const s=Math.floor(t),o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),h=Math.floor(e.z+n);if(this.world.getBlock(r,s,h)===this.waterId)return!0}return!1}isHeadInFloodedAir(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=W+1)return!1;const s=Math.floor(t),o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),h=Math.floor(e.z+n);if(this.world.isAirFlooded(r,s,h))return!0}return!1}isBaseSubmerged(){const e=this.camera.position,t=this.getBaseY(e.y)+.001,s=Math.floor(t);if(s>W)return!1;const o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),h=Math.floor(e.z+n);if(this.world.isAirFlooded(r,s,h)||this.world.getBlock(r,s,h)===this.waterId)return!0}return!1}aabbIntersectsSolid(e,t,s,o,i,a){const n=Math.floor(e),r=Math.floor(t),h=Math.floor(s),c=Math.floor(o),d=Math.floor(i),u=Math.floor(a);for(let f=r;f<=d;f++)for(let m=h;m<=u;m++)for(let v=n;v<=c;v++)if(this.world.isBlockSolid(v,f,m))return!0;return!1}hasSolidGroundBelow(e=.01){const t=this.camera.position,s=this.halfWidth,o=this.getBaseY(t.y)-e,i=Math.floor(o),a=Math.floor(t.x-s),n=Math.floor(t.x+s),r=Math.floor(t.z-s),h=Math.floor(t.z+s);for(let c=r;c<=h;c++)for(let d=a;d<=n;d++)if(this.world.isBlockSolid(d,i,c))return!0;return!1}tryStepUp(e,t){if(e<=0)return!1;const s=this.camera.position,o=s.y+e,i=.08,a=t&&t.lengthSq()>1e-6?s.x+t.x*i:s.x,n=t&&t.lengthSq()>1e-6?s.z+t.z*i:s.z,r=me.EPS*4,h=a-this.halfWidth+r,c=a+this.halfWidth-r,d=n-this.halfWidth+r,u=n+this.halfWidth-r,f=this.getBaseY(o)+r,m=f+this.height-r;if(this.aabbIntersectsSolid(h,f,d,c,m,u))return!1;const v=Math.floor(f-.01);let M=!1;for(let g=Math.floor(d);g<=Math.floor(u);g++){for(let p=Math.floor(h);p<=Math.floor(c);p++)if(this.world.isBlockSolid(p,v,g)){M=!0;break}if(M)break}return M?(this.camera.position.y=o,!0):!1}canStepUpEmerge(e,t){if(e<=0)return!1;const s=this.camera.position,o=s.y+e,i=.08,a=!!t&&t.lengthSq()>1e-6,n=a?s.x+t.x*i:s.x,r=a?s.z+t.z*i:s.z,h=me.EPS*4,c=n-this.halfWidth+h,d=n+this.halfWidth-h,u=r-this.halfWidth+h,f=r+this.halfWidth-h,m=this.getBaseY(o)+h,v=m+this.height-h;if(this.aabbIntersectsSolid(c,m,u,d,v,f))return!1;const M=Math.floor(m-.01);let g=!1;for(let y=Math.floor(u);y<=Math.floor(f);y++){for(let w=Math.floor(c);w<=Math.floor(d);w++)if(this.world.isBlockSolid(w,M,y)){g=!0;break}if(g)break}if(g)return!0;const p=[];a?p.push(t.clone().setY(0).normalize()):p.push(new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1));const A=.5;for(const y of p){const w=n+y.x*A,k=r+y.z*A,S=Math.floor(w-this.halfWidth+h),b=Math.floor(w+this.halfWidth-h),C=Math.floor(k-this.halfWidth+h),I=Math.floor(k+this.halfWidth-h);for(let R=M;R>=M-1;R--)for(let L=C;L<=I;L++)for(let T=S;T<=b;T++)if(this.world.isBlockSolid(T,R,L))return!0}return!1}tryStepUpMulti(e,t){for(const s of e)if(this.tryStepUp(s,t))return t.x!==0&&this.resolveAxis("x",t.x*.08),t.z!==0&&this.resolveAxis("z",t.z*.08),s;return 0}isGrounded(){return this.grounded}setBounds(e){this.bounds=e}}function Wo(l,e,t){const s=Math.hypot(l,e,t);return s===0?{x:0,y:0,z:0}:{x:l/s,y:e/s,z:t/s}}function lt(l){return Math.floor(l)}function Uo(l,e,t,s=$t.reach){const o=Wo(t.x,t.y,t.z);if(o.x===0&&o.y===0&&o.z===0)return{hit:!1};let i=lt(e.x),a=lt(e.y),n=lt(e.z);const r=o.x>0?1:-1,h=o.y>0?1:-1,c=o.z>0?1:-1,d=i+(r>0?1:0),u=a+(h>0?1:0),f=n+(c>0?1:0),m=o.x!==0?(d-e.x)/o.x:Number.POSITIVE_INFINITY,v=o.y!==0?(u-e.y)/o.y:Number.POSITIVE_INFINITY,M=o.z!==0?(f-e.z)/o.z:Number.POSITIVE_INFINITY,g=o.x!==0?1/Math.abs(o.x):Number.POSITIVE_INFINITY,p=o.y!==0?1/Math.abs(o.y):Number.POSITIVE_INFINITY,A=o.z!==0?1/Math.abs(o.z):Number.POSITIVE_INFINITY;let y=m,w=v,k=M,S=0,b=i,C=a,I=n;const R=Math.ceil(s*3+10);for(let L=0;L<R&&(y<w?y<k?(b=i,C=a,I=n,i+=r,S=y,y+=g):(b=i,C=a,I=n,n+=c,S=k,k+=A):w<k?(b=i,C=a,I=n,a+=h,S=w,w+=p):(b=i,C=a,I=n,n+=c,S=k,k+=A),!(S>s));L++){const T=l.getBlock(i,a,n),U=Ke(T);if(!!U&&(l.isBlockSolid(i,a,n)||U.name==="grass_tuft"))return{hit:!0,hitCell:{x:i,y:a,z:n},placeCell:{x:b,y:C,z:I},t:S}}return{hit:!1}}class No{camera;world;scene;bounds=null;reach=$t.reach;selection={hit:!1};boxMesh=null;constructor(e,t,s,o){this.camera=e,this.world=t,this.scene=s,o&&(this.bounds=o),this.boxMesh=this.createWireBox(),this.boxMesh.visible=!1,this.scene.add(this.boxMesh)}update(){const e=new P(0,0,-1).applyEuler(this.camera.rotation).normalize(),t=this.camera.position,s=Uo(this.world,t,e,this.reach);let o=s.hit,i=s.hitCell,a=s.placeCell;if(this.bounds&&s.hit&&s.hitCell){const{minX:n,maxX:r,minZ:h,maxZ:c}=this.bounds;s.hitCell.x>=n&&s.hitCell.x<r&&s.hitCell.z>=h&&s.hitCell.z<c||(o=!1,i=void 0,a=void 0)}this.selection={hit:o,hitCell:i,placeCell:a},this.updateDebugMesh()}getSelection(){return this.selection}destroy(){this.boxMesh&&(this.scene.remove(this.boxMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.boxMesh=null)}updateDebugMesh(){if(!this.boxMesh)return;if(!this.selection.hit||!this.selection.hitCell){this.boxMesh.visible=!1;return}const{x:e,y:t,z:s}=this.selection.hitCell;this.boxMesh.visible=!0,this.boxMesh.position.set(e+.5,t+.5,s+.5)}createWireBox(){const e=new zs(new Qt(1.0001,1.0001,1.0001)),t=new As({color:16776960}),s=new Ls(e,t);return s.renderOrder=9999,s}}class Vo{camera;world;input;selection;pipeline;playerController;airId=0;waterId=he("water")??5;grassId=he("grass")??1;dirtId=he("dirt")??2;stoneId=he("stone")??3;sandId=he("sand")??4;woodId=he("wood")??6;leavesId=he("leaves")??7;leavesMapleId=he("leaves_maple")??8;grassTuftId=he("grass_tuft")??9;currentHit=null;nextActionAllowedAt=0;lastSwingStartAt=0;constructor(e,t,s,o,i,a){this.camera=e,this.world=t,this.input=s,this.selection=o,this.pipeline=i,this.playerController=a??null}update(){const e=(typeof performance<"u"?performance.now():Date.now())/1e3;{const t=this.input.consumeLeftClick(),s=this.input.isLeftHeld?.()??!1;if(t||s){if(!(window.__isBodySwingActive?.()??!1)&&(this.lastSwingStartAt===0||e-this.lastSwingStartAt>=je)){window.__bodyPrimary?.(),this.lastSwingStartAt=e;const a=this.selection.getSelection();if(a.hit&&a.hitCell){const{x:n,y:r,z:h}=a.hitCell,c=this.world.getBlock(n,r,h);if(c!==this.airId){this.currentHit&&this.currentHit.x===n&&this.currentHit.y===r&&this.currentHit.z===h&&this.currentHit.id===c?this.currentHit.count+=1:this.currentHit={x:n,y:r,z:h,id:c,count:1};const d=this.getRequiredStrikes(c);if(this.currentHit.count>=d){const u=this.world.isBlockSolid(n,r,h);u&&window.__sfxBreak?.(),this.world.setBlock(n,r,h,this.airId),u&&this.shouldFillWithWater(n,r,h)&&this.world.setBlock(n,r,h,this.waterId),this.propagateSurfaceWaterFromConnection(n,r,h),Is(c,1),this.remeshAffectedChunks(n,r,h),this.currentHit=null}}}}}else this.lastSwingStartAt=0}if(this.input.consumeRightClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+je;const t=this.selection.getSelection();if(t.hit&&t.placeCell){const{x:s,y:o,z:i}=t.placeCell,a=bt(),n=this.evaluatePlacement(s,o,i,a??void 0);if(n.canPlace){const r=bt();r!==null&&Ps()&&(n.elevatePlayer&&(this.camera.position.y+=1,this.playerController?.startElevationTween(1)),this.world.setBlock(s,o,i,r),this.remeshAffectedChunks(s,o,i),window.__sfxPlace?.())}}}}getRequiredStrikes(e){return e===this.leavesId||e===this.leavesMapleId||e===this.grassId||e===this.grassTuftId?1:e===this.dirtId||e===this.sandId?2:e===this.stoneId||e===this.woodId?3:1}shouldFillWithWater(e,t,s){if(t!==W)return!1;const o=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(const[i,a]of o)if(this.world.getBlock(e+i,t,s+a)===this.waterId)return!0;return!1}propagateSurfaceWaterFromConnection(e,t,s){if(t>W+1)return;const o=W,i=this.airId,a=this.waterId,n=64,r=e-n,h=e+n,c=s-n,d=s+n,u=(w,k,S)=>`${w},${k},${S}`,f=[],m=new Set,v=[],M=new Set;let g=!1;const p=(w,k,S)=>{if(k<0||k>o||w<r||w>h||S<c||S>d)return;const b=u(w,k,S);m.has(b)||this.world.isBlockSolid(w,k,S)||(m.add(b),f.push({x:w,y:k,z:S}))};p(e,Math.min(t,o),s),p(e+1,Math.min(t,o),s),p(e-1,Math.min(t,o),s),p(e,Math.min(t,o),s+1),p(e,Math.min(t,o),s-1),p(e,Math.min(t+1,o),s),p(e,Math.max(t-1,0),s);const A=12e4;for(;f.length>0&&m.size<=A;){const w=f.shift(),k=this.world.getBlock(w.x,w.y,w.z);k===a?g=!0:k===i&&(v.push(w),M.add(`${w.x},${w.z}`)),p(w.x+1,w.y,w.z),p(w.x-1,w.y,w.z),p(w.x,w.y,w.z+1),p(w.x,w.y,w.z-1),p(w.x,w.y+1,w.z),p(w.x,w.y-1,w.z)}if(!g)return;v.length>0&&this.world.addFloodedAir(v);const y=[];for(const w of M){const[k,S]=w.split(","),b=parseInt(k,10),C=parseInt(S,10);if(b<r||b>h||C<c||C>d)continue;this.world.getBlock(b,o,C)===i&&(this.world.setBlock(b,o,C,a),y.push({x:b,y:o,z:C}))}if(y.length>0){const w=new Set;for(const k of y){const{cx:S,cy:b,cz:C}=Oe(k.x,k.y,k.z);w.add(`${S},${b},${C}`)}for(const k of w){const[S,b,C]=k.split(",").map(R=>parseInt(R,10)),I=this.world.getChunk(S,b,C);I&&this.pipeline.requestRemesh(S,b,C,I.getData())}}}remeshAffectedChunks(e,t,s){const{cx:o,cy:i,cz:a,lx:n,ly:r,lz:h}=Oe(e,t,s),c=this.world.getChunk(o,i,a);c&&this.pipeline.requestRemesh(o,i,a,c.getData());const d=[];n===0&&d.push([o-1,i,a]),n===x.x-1&&d.push([o+1,i,a]),r===0&&d.push([o,i-1,a]),r===x.y-1&&d.push([o,i+1,a]),h===0&&d.push([o,i,a-1]),h===x.z-1&&d.push([o,i,a+1]);for(const[u,f,m]of d){const v=this.world.getChunk(u,f,m);v&&this.pipeline.requestRemesh(u,f,m,v.getData())}}evaluatePlacement(e,t,s,o){if(this.world.getBlock(e,t,s)!==this.airId)return{canPlace:!1,elevatePlayer:!1};if(o===this.grassTuftId)return this.world.getBlock(e,t-1,s)!==this.grassId?{canPlace:!1,elevatePlayer:!1}:{canPlace:!0,elevatePlayer:!1};if(o!==void 0&&this.world.getBlock(e,t-1,s)===this.grassTuftId){const U=!!Ke(o)?.solid,H=o===this.grassId;if(U||H)return{canPlace:!1,elevatePlayer:!1}}const i=E.width/2,a=Math.min(E.height*.9,E.height-.1),n=this.camera.position,r=n.x-i,h=n.x+i,c=n.y-a,d=c+E.height,u=n.z-i,f=n.z+i,m=e,v=e+1,M=t,g=t+1,p=s,A=s+1,y=1e-5;if(h<=m+y||r>=v-y||d<=M+y||c>=g-y||f<=p+y||u>=A-y)return{canPlace:!0,elevatePlayer:!1};const k=c,S=Math.floor(k),b=t===S,C=e+.5,I=s+.5,R=C>r+y&&C<h-y&&I>u+y&&I<f-y;if(b&&R){const T=k+1,U=T+E.height;if(!this.aabbIntersectsSolid(r,T,u,h,U,f))return{canPlace:!0,elevatePlayer:!0}}return{canPlace:!1,elevatePlayer:!1}}aabbIntersectsSolid(e,t,s,o,i,a){const n=Math.floor(e),r=Math.floor(t),h=Math.floor(s),c=Math.floor(o),d=Math.floor(i),u=Math.floor(a);for(let f=r;f<=d;f++)for(let m=h;m<=u;m++)for(let v=n;v<=c;v++)if(this.world.isBlockSolid(v,f,m))return!0;return!1}}const Oo="/assets/grass_leaves-C9h5dzo8.png";class _o extends Te{constructor(e){super({vertexShader:`
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
    `,transparent:!1,depthWrite:!0,side:pt,uniforms:{map:{value:e},sunDirection:{value:new P(0,1,0)},sunColor:{value:new V(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.15},cloudShadowEnabled:{value:!1},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new ie(3.5355,3.5355)}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setSun(e,t){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t)}setDayNight(e,t){this.uniforms.dayLight.value=D.clamp(e,0,1),this.uniforms.starLight.value=D.clamp(t,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=D.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=D.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=D.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=D.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}}class Yo{scene;material;geometry;groups=new Map;grassTuftId;constructor(e,t,s){this.scene=e,this.grassTuftId=s;const o=document.createElement("canvas");o.width=1,o.height=1;const i=o.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,1,1);const a=new ft(o);a.colorSpace=De,a.magFilter=$,a.minFilter=$,this.material=new _o(a);const n=new tt().load(Oo);n.flipY=!1,n.colorSpace=De,n.magFilter=$,n.minFilter=$,this.material.setMap(n),this.geometry=this.buildXBillboardGeometry(.92,.9),t.on("CHUNK_ADDED",({key:r,chunk:h,coords:c})=>{this.rebuildForChunk(r,h.getData().voxels,c.cx,c.cy,c.cz)}),t.on("CHUNK_REMOVED",({key:r})=>this.removeChunk(r)),t.on("BLOCK_CHANGED",({chunkKey:r})=>{const h=t.getChunkByKey(r);if(!h){this.removeChunk(r);return}this.rebuildForChunk(r,h.getData().voxels,...r.split(",").map(c=>parseInt(c,10)))})}destroy(){for(const e of Array.from(this.groups.keys()))this.removeChunk(e);this.geometry.dispose();try{this.material.uniforms.map?.value?.dispose?.()}catch{}this.material.dispose()}removeChunk(e){const t=this.groups.get(e);t&&(this.scene.remove(t),t.traverse(s=>{s instanceof St&&(s.geometry.dispose(),s.material.dispose?.())}),this.groups.delete(e))}rebuildForChunk(e,t,s,o,i){this.removeChunk(e);const a=[];for(let c=0;c<x.y;c++)for(let d=0;d<x.z;d++)for(let u=0;u<x.x;u++){const f=c*x.x*x.z+d*x.x+u;t[f]===this.grassTuftId&&a.push({lx:u,ly:c,lz:d})}if(!a.length)return;const n=new St(this.geometry,this.material,a.length);n.castShadow=!1,n.receiveShadow=!1,n.renderOrder=1;const r=new X;for(let c=0;c<a.length;c++){const d=a[c];r.makeTranslation(d.lx,d.ly,d.lz),n.setMatrixAt(c,r)}n.instanceMatrix.needsUpdate=!0;const h=new te;h.add(n),h.position.set(s*x.x,o*x.y,i*x.z),this.scene.add(h),this.groups.set(e,h)}buildXBillboardGeometry(e,t){const s=e/2,o=t,i=[],a=[],n=[],r=0;i.push(.5-s,0,.5,.5+s,0,.5,.5+s,o,.5,.5-s,o,.5),a.push(0,1,1,1,1,0,0,0),n.push(r+0,r+1,r+2,r+0,r+2,r+3);const h=4;i.push(.5,0,.5-s,.5,0,.5+s,.5,o,.5+s,.5,o,.5-s),a.push(0,1,1,1,1,0,0,0),n.push(h+0,h+1,h+2,h+0,h+2,h+3);const c=new Ze;c.setAttribute("position",new ot(i,3)),c.setAttribute("uv",new ot(a,2));const d=new Float32Array(24);return d.fill(1),c.setAttribute("color",new ot(d,3)),c.setIndex(n),c.computeVertexNormals(),c}setSunUniforms(e,t){this.material.setSun(e,t)}setDayNight(e,t){this.material.setDayNight(e,t)}updateShadowUniforms(){}setCloudShadowUniforms(e){this.material.setCloudShadowUniforms(e)}}const ct="/assets/footstep-Fr-5_nTT.mp3",Bt="/assets/water_step-MaHXgPx_.mp3",Wt="/assets/underwater-Cqai0VTA.mp3",Ut="/assets/block-C1XDNMNZ.mp3",Nt="/assets/ocean-B93ceUEo.mp3";function Vt(l,e){const t=new Audio(l);return t.loop=!0,t.volume=e,t.preload="auto",t}class Ot{src;desired=!1;current=null;vol=1;constructor(e,t){this.src=e,this.vol=t}setVolume(e){this.vol=Math.max(0,Math.min(1,e)),this.current&&(this.current.volume=this.vol)}setDesired(e){const t=this.desired;this.desired=e,e&&!t&&this.ensurePlaying()}ensurePlaying(){if(!this.desired||this.current&&!this.current.paused&&!this.current.ended)return;const e=new Audio(this.src);e.preload="auto",e.loop=!1,e.volume=this.vol,e.onended=()=>{this.current=null,this.desired&&this.ensurePlaying()},this.current=e,e.play().catch(()=>{})}tick(){this.desired&&this.ensurePlaying()}stopImmediate(){if(this.desired=!1,this.current){try{this.current.pause()}catch{}this.current=null}}}class Ho{world;camera;input;player;lastX;lastY;lastZ;lastGrounded=!1;sfxVolume=.7;footLoop=new Ot(ct,this.sfxVolume);waterLoop=new Ot(Bt,this.sfxVolume);underLoop=Vt(Wt,this.sfxVolume*.8);oceanLoop=Vt(Nt,this.sfxVolume*.6);oceanSampleTimer=0;oceanProximity=0;oceanVolCurrent=0;waterId=he("water")??5;constructor(e,t,s,o){this.world=e,this.camera=t,this.input=s,this.player=o,this.lastX=t.position.x,this.lastY=t.position.y,this.lastZ=t.position.z}setVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxVolume=t,this.footLoop.setVolume(t),this.waterLoop.setVolume(t),this.underLoop.volume=Math.max(0,Math.min(1,t*.8)),this.oceanLoop.volume=Math.max(0,Math.min(1,t*.6))}getVolume(){return this.sfxVolume}primedOnce=!1;tryUnlockOnUserGesture(){if(this.primedOnce)return;this.primedOnce=!0;const e=t=>{try{const s=new Audio(t);s.preload="auto",s.muted=!0,s.play().then(()=>{s.pause(),s.currentTime=0,s.muted=!1}).catch(()=>{})}catch{}};e(ct),e(Bt),e(Wt),e(Nt)}setLoopPlaying(e,t){t?e.paused&&e.play().catch(()=>{}):e.paused||e.pause()}playOneShot(e,t){try{const s=new Audio(e);s.volume=Math.max(0,Math.min(1,t)),s.play().catch(()=>{})}catch{}}playBreak(){this.playOneShot(Ut,this.sfxVolume)}playPlace(){this.playOneShot(Ut,this.sfxVolume)}update(e,t,s){if(t||!s){this.footLoop.setDesired(!1),this.waterLoop.setDesired(!1),this.setLoopPlaying(this.underLoop,!1),this.setLoopPlaying(this.oceanLoop,!1),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=this.player.isGrounded();return}const o=this.camera.position.x-this.lastX,i=this.camera.position.z-this.lastZ,a=this.camera.position.y-this.lastY,n=e>0?Math.hypot(o,i)/e:0,r=this.player.isGrounded(),h=this.isTouchingWaterSurface(),c=this.isEyesInWater()||this.isEyesInFloodedAir(),d=this.input.getMoveInput?.()||{x:0,z:0},u=Math.hypot(d.x,d.z)>.05,f=r&&(n>.2||u);c?(this.setLoopPlaying(this.underLoop,!0),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)):h&&(n>.1||u)?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!0),this.footLoop.setDesired(!1)):f?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!0)):(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)),this.footLoop.tick(),this.waterLoop.tick(),this.setLoopPlaying(this.oceanLoop,!0),this.updateOceanVolume(e,c),!this.lastGrounded&&r&&a<-.02&&!c&&!h&&this.playOneShot(ct,this.sfxVolume),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=r}updateOceanVolume(e,t){this.oceanSampleTimer-=e,this.oceanSampleTimer<=0&&(this.oceanSampleTimer=.25,this.oceanProximity=this.sampleOceanProximity());let o=Math.max(0,Math.min(1,this.sfxVolume*.6))*this.oceanProximity;t&&(o*=.35);const i=1-Math.pow(.001,e);this.oceanVolCurrent+=(o-this.oceanVolCurrent)*i,this.oceanLoop.volume=Math.max(0,Math.min(1,this.oceanVolCurrent))}sampleOceanProximity(){const e=this.camera.position.x,t=this.camera.position.z,s=5,o=120,i=2,a=24,n=60,r=2,h=.7;let c=o;for(let m=0;m<a;m++){const v=m/a*Math.PI*2,M=Math.cos(v),g=Math.sin(v);let p=null;for(let S=i;S<=o;S+=i){const b=Math.floor(e+M*S),C=Math.floor(t+g*S);if(this.world.getBlock(b,W,C)===s){p=S;break}}if(p===null)continue;let A=0,y=0;for(let S=p;S<=Math.min(p+n,o);S+=r){const b=Math.floor(e+M*S),C=Math.floor(t+g*S),I=this.world.getBlock(b,W,C);A++,I===s&&y++}(A>0?y/A:0)>=h&&p<c&&(c=p)}const u=1-Math.min(1,c/80);return Math.max(.05,u)}isTouchingWaterSurface(){const e=Math.min(E.height*.9,E.height-.1),t=E.width/2,s=this.camera.position.y-e,o=this.camera.position.x-t,i=this.camera.position.x+t,a=this.camera.position.z-t,n=this.camera.position.z+t,r=s;if(s+E.height<=W||r>=W+1)return!1;const c=Math.floor(o),d=Math.floor(i),u=Math.floor(a),f=Math.floor(n);for(let m=u;m<=f;m++)for(let v=c;v<=d;v++)if(this.world.getBlock(v,W,m)===this.waterId)return!0;return!1}isEyesInWater(){const e=Math.min(E.height*.9,E.height-.1),t=this.camera.position.y+(E.height-e);if(t>=W+1)return!1;const s=Math.floor(t),o=E.width/2,i=Math.min(.18,o*.9),a=this.camera.position.x,n=this.camera.position.z,r=[[0,0],[i,0],[-i,0],[0,i],[0,-i]];for(const[h,c]of r){const d=Math.floor(a+h),u=Math.floor(n+c);if(this.world.getBlock(d,W,u)===this.waterId){let f=!1;for(let m=Math.floor(t);m<W;m++)if(this.world.isBlockSolid(d,m,u)){f=!0;break}if(!f)return!0}if(this.world.getBlock(d,s,u)===this.waterId)return!0}return!1}isEyesInFloodedAir(){const e=Math.min(E.height*.9,E.height-.1),t=this.camera.position.y+(E.height-e);if(t>=W+1)return!1;const s=Math.floor(t),o=E.width/2,i=Math.min(.18,o*.9),a=this.camera.position.x,n=this.camera.position.z,r=[[0,0],[i,0],[-i,0],[0,i],[0,-i]];for(const[h,c]of r){const d=Math.floor(a+h),u=Math.floor(n+c);if(this.world.isAirFlooded(d,s,u))return!0}return!1}dispose(){try{this.footLoop.stopImmediate()}catch{}try{this.waterLoop.stopImmediate()}catch{}try{this.underLoop.pause()}catch{}try{this.oceanLoop.pause()}catch{}}}const Go="/assets/arm-BGtqJ4AM.png",qo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAJsElEQVR42m1ZO681RxGs7pmd2esPYyyMLcggICRBIvGvJyYhIbNkWciWJSQkQOLuPJtgtub0fuZKV/dxzs70o7q6uo98/fsvLcaAOQ3nmWFzoo+BI0bADKKCOSbmHACA88wYfeBIB1qtmHMCIjjigdYb5jSEECCiqK0ipwwDMOZEqxUaAgDBGB0hREQA+OPvvoAACEEx50TOCWKA2QSA9TeAMTrmmBABckpQFfTeMadBQ4BqQG0VvQ8YABFFjBG9D0AF11WQUsJ1FUAEf/nmH1ARwXEct9UCEUG9PZtz4jgOtNbA9x3HAZF1sZnhV7/4FDFGqCqu60KM8fE954SZQURwnifmnAghwMygqssAEcGcE2MMqC6raVStFd/++C+UUlBKQe8dqgoAK/wAVBVmhvM8UWtFCAHffP/PbWSMEQBwXdcdsYmU0jJCRGBmALANoYcAkFJ6/GSkjuNAjBHXdaG1BgCotSKlBBHZl/KcMQbO80TOeZ9lZlAfYj5sZvtBM4OZodaKnDNCCNt7GptSQq0VqrqfZ6gZxTknruvaxpgtsCovGGPsA1X1gQn+j6+HEDDGQGsNKSWUUpBzxhgDtVaUUrbhvfcdbjrLVJsZYq11W0OvRSJEFWOMfeG6PG4PFhixDyulLNQfEWYNOWf03iEiGGMgpbSqRRW9Xy9Dcs77EiITAFprOI7jATIaGGPEGANjjG3ceZ77WX4xigQef1fVHWUlUnlYjBEiskElImit7dfMDKWUXV6llNu7+UgbnWEpb9CpIqW0jVUzQ0oJKaUdMjNDznnXMfPbWnNpkl3bzD2/WFWquvNOR/laKWWlYM6J3jtKKYgxota6/+bXnHOngSU259xlSCMZNe/xGANMc2sNvI9coz40Poz8SZB5HmBNs+753lLKZsrW2naCZJRSWpfeGFBVRFq7MPCq4+M4UGt54CHnjFYbUjocshcWain7YkD2ZSzvCYOI3kYJ+p02ZZ3mnKF36YUQcF0Xcs7IOaOUghDC9ogVQBzQGOadZOW5hd8hhB01VV0p6L2DfOBpk+XjGZEI5sVEOcvLg42VQ1x549lzlGAiUHj4dV07It568gHLlZiIMW6vWmu7P/B8smEIYZf1nBOROV4eyA0OgUL2wQwv3zfnvNOiUH3b/x9jwmB32/23IyZB6x29M1WyKySyWQiAt7fzDisw+4Cq7BSsEBqCrgYTQwBgWwPU1lZUVDYnsCmJEPV2V0pCv51TCgciljTLcDNC7HqbQm9eYNmRG9jSCcg5J2qtmwM8WfXeoWwKZMFaK7xRPIAPMXfseAQV23MpBed53tLrepAScUDRspmQYGID8iCiIZRdRP95ng9qZbQYSdI5ldJxHPt3tvAb9LrDzH7Ay3goBQvD6wUIL6GHrbVHOXop5rvqeZ7rnqcOkB0yeurruta688n3+nAyYv+PytniaRQN3UxIycQIeCXjNQGjw0PZ4xkptmj/fxpEXiBBlVIQidQ1dJwbrYuYsAG5umXYPWMRFDDUdjMzw60ZXh10EVNHiAGt9dtIAJR6vNx7TTSXR4N5IpnVQM8YJa8LWGHee5bsFi3szwz9dV1bzfr+ztDTM1IsMUNHvHYgN1Co+mcpZpT8zzKhnmfuYoybu+k1+wMP5rPeiJSSE6+v2cOXdSllVYFvICSXj3UAZRfzStTzYIoVvsZ2ziqhIZ4VQwgvIvp4MmK7pH7rvW+S8jn0mp8GsgSv69rcwFJnaokr9T3Ah5wl6fnfh9h7xLRwnqQOpGwjE7I0H7KMl/uwUOOzIrzA5MO8hOnxjYbVwMgwpXSS71fV1Q2ZT9ImmY7/JwBJ2733PfN5cDFdXrwyLcy9H9lLKQsDXm77rseLvCpiiZEjOLzwO+f8CDGxQYx5otsp4IW0nAbRW2+YLyWPfpJOKeXRvlkF/Ps8zye/UGiM3jGGPXQf8+k5f/SBlI67Sg4AtismhAiDIYSI3v+DEMKNEY7qcWvNefOGUhHzIj7kU8O6ptanMYyOfx/PYei9ZmC0PcCVrMSw8nDWN9mRFxBY/lC+Rsaste5lhE8vp2i2eQALA16GUzh4McqqoJEsU6aLcyVzS4deolQe/cWvAiK9YDfcvXvaRjwfmHMCBswJhPu1lDLkv/WVDthjj7Sm4IlhEzmfj6FFRKBepXp15HPJ0LKO2Rn9xox0Pud8jONMMUPvmxcARA4dDCGZq7aOnNMG2EJ6vnHQke6d4U7dGEgpY9TxaGaL9QyK1/Liui7gxk1kX1+5YkcTYNqjgawoKFTUTb0DH9KJ41iTD0nJC5yViohh8yFIcKda2dNZVkTwx9qAVeEXV34K9nrCd1cv0/k/r7pjSgm//PQNMQYIsLwHkNOtePXAV59/uEexJTKCKgCDGAAYvvz8A97fLxyffbJA9rMTX3z2CUKImGYoRaAh3guNjFIrRBZ2oojgz3/7/ma3gNYq4DxRFeBeXAuAIyXMMWA2YdyoqK4DRTDHuPM7MeZAjMfeL4x7ThQBam1obUD90oG9mlOP7wce4WRJhtFvzqiu2Dn9Xphkxao6jmOtaP76Y4PIQGv9J3LLN6LXMmrt+/1+qfeBEC6ngt8frdsvwwFD7wN/+u1na03nt2IEDOvXMxfXNNd1bUnmQUcwfqycGT1f0lRLkURExHLep0G7aTiNaIYHFb/CPH8yRdFBRoF7BqAjhA/LgGVp2CKDS6c9w9+XkW5b6w+eZyo4XZMliRcawl3SOhuvdswX/JRMCUXlwtBRSPiJ2dMxBQkN+XiNy2cZYfWSi+szho/87QdNMhw1P3NL5PNDCWKH7MgLvaMPWe4HDC6imDtqOz9HMu9+G0Yw8zKfHj/Ck0FjjK9VLa3mVsyrZTPbO2Higt5T0lOE+g9APh7LeTaxM8ZA5OVfffWb7aXf/VKesRJoEHPJwcV/cMEIEXDESwgB7+/vyDnju+++XZXFZvTDD3+/afJV08z3/ohtzwUDgG2wLtwAIq9UEFOllMdCY503oeoWlWs31HAcaQ+o3BFz3CI/+I/svChdWLANRNI20/JaiAcACtV7w+q1PcHovxlWEswSJC/twIs8EdFr5t9/1OM/sEjp56sdz1mXaBhzW8lDqJK8J0sL6E8+CzKbe+dM2iUO+LXOlb1dUwKMrMXJhVXBhSS9oHT3xELeyDnjuq6NC/70W3emz80I+pDQvpX6T7eI7I8/E/Qc4ZnTb159qvwAFEJYmvAPv04I4ROYTYzeARHEEBA0Q4NijtUrVheMeDvfcJULgrcVEVWMPmAwzGkQSWsMKxeCBrTeAQlQEej90f51vWPOif8BXntl5vWwkLIAAAAASUVORK5CYII=",Zo="/assets/torso-BpoI4O1U.png",Xo="/assets/swing-D4rIVQxu.mp3";class jo extends Te{constructor(e){super({vertexShader:`
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
    `,transparent:!1,depthWrite:!0,side:Ht,uniforms:{map:{value:e},sunDirection:{value:new P(0,1,0)},sunColor:{value:new V(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.5}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setLighting(e,t,s,o){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t),this.uniforms.dayLight.value=D.clamp(s,0,1),this.uniforms.starLight.value=D.clamp(o,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=D.clamp(e,0,1)}}const z={torso:{width:.32,depth:.22,height:.7},spineLen:.52,neckLen:.12,shoulderOffsetX:.26,torsoBackOffset:.24,arm:{upperLen:.36,lowerLen:.34,handLen:.14,thickness:.08},leg:{thighLen:.48,shinLen:.48,thickness:.18,hipOffsetX:.1},locomotion:{freqWalk:2.4,freqRun:3.6,ampThigh:D.degToRad(26),torsoYaw:D.degToRad(6),torsoRoll:D.degToRad(4),torsoBob:.02,startStopDamping:12},idle:{baseShoulderPitch:D.degToRad(-65),baseShoulderYaw:D.degToRad(-25),baseShoulderRoll:D.degToRad(12),bobSpeed:1.8},swing:{duration:je*.55,returnDuration:je*.45,amplitudePitch:D.degToRad(78),amplitudeYawAlt:D.degToRad(10),easeIn:3,easeOut:3}};class Ko{playerRoot=null;camera=null;root;pelvis;spine;chest;neck;armAnchor;rArm;lArmAnchor;lArm;lLeg;rLeg;torsoMesh;armMat;legMat;torsoMat;locomotionBlend=0;locomotionPhase=0;movingFlag=!1;lastCamX=0;lastCamZ=0;idleTime=0;swingActive=!1;swingTime=0;swingReturning=!1;swingKind="LMB";swingAudio=null;_v3a=new P;constructor(){const e=v=>{const M=new tt().load(v);return M.colorSpace=De,M.magFilter=$,M.minFilter=$,M.generateMipmaps=!1,M.wrapS=be,M.wrapT=be,M},t=e(Go),s=e(qo),o=e(Zo),i=v=>new jo(v);this.armMat=i(t),this.legMat=i(s),this.torsoMat=i(o),this.root=new te,this.root.name="FPBody.Root",this.pelvis=new te,this.pelvis.name="Pelvis",this.spine=new te,this.spine.name="Spine",this.chest=new te,this.chest.name="Chest",this.neck=new te,this.neck.name="Neck",this.armAnchor=new te,this.armAnchor.name="ArmAnchor",this.rArm=new te,this.rArm.name="RArm",this.lArmAnchor=new te,this.lArmAnchor.name="LArmAnchor",this.lArm=new te,this.lArm.name="LArm",this.lLeg=new te,this.lLeg.name="LLeg",this.rLeg=new te,this.rLeg.name="RLeg",this.root.add(this.pelvis),this.pelvis.add(this.spine),this.spine.position.y=z.spineLen,this.spine.add(this.chest),this.chest.position.y=0,this.chest.add(this.neck),this.neck.position.y=z.neckLen,this.torsoMesh=this.createBoxMesh(z.torso.width,z.torso.height,z.torso.depth,this.torsoMat),this.torsoMesh.name="TorsoMesh",this.torsoMesh.position.set(0,-.7*.5,0),this.chest.add(this.torsoMesh),this.chest.add(this.armAnchor),this.armAnchor.position.set(z.shoulderOffsetX+.2,-.4,.4),this.armAnchor.add(this.rArm);const a=z.arm.upperLen+z.arm.lowerLen,n=this.createSegmentMesh(z.arm.thickness,a,z.arm.thickness,this.armMat);n.position.set(0,a,0),n.rotation.z=Math.PI,this.rArm.add(n);const r=z.arm.handLen*.4,h=this.createSegmentMesh(z.arm.thickness*.9,r,z.arm.thickness*.9,this.armMat);h.position.set(0,a+r,0),h.rotation.z=Math.PI,this.rArm.add(h),this.chest.add(this.lArmAnchor),this.lArmAnchor.position.set(-.46,.2,.2),this.lArmAnchor.add(this.lArm);const c=this.createSegmentMesh(z.arm.thickness,a,z.arm.thickness,this.armMat);c.position.set(0,a,0),c.rotation.z=Math.PI,this.lArm.add(c);const d=this.createSegmentMesh(z.arm.thickness*.9,r,z.arm.thickness*.9,this.armMat);d.position.set(0,a+r,0),d.rotation.z=Math.PI,this.lArm.add(d),this.pelvis.add(this.lLeg),this.pelvis.add(this.rLeg),this.lLeg.position.set(-.1,0,0),this.rLeg.position.set(z.leg.hipOffsetX,0,0);const u=z.leg.thighLen+z.leg.shinLen,f=this.createSegmentMesh(z.leg.thickness,u,z.leg.thickness,this.legMat);f.position.set(0,-u*.5,0),this.lLeg.add(f);const m=this.createSegmentMesh(z.leg.thickness,u,z.leg.thickness,this.legMat);m.position.set(0,-u*.5,0),this.rLeg.add(m)}init(e,t){this.playerRoot=e,this.camera=t,this.playerRoot.add(this.root),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}update(e){if(!this.camera||!this.playerRoot)return;const t=this.camera,s=t.position.x-this.lastCamX,o=t.position.z-this.lastCamZ,i=e>0?Math.hypot(s,o)/e:0,a=this.movingFlag&&i>.05?1:0,n=1-Math.pow(.001,e*z.locomotion.startStopDamping);this.locomotionBlend+=(a-this.locomotionBlend)*n;const r=D.lerp(z.locomotion.freqWalk,z.locomotion.freqRun,Math.min(1,i/5));this.locomotionPhase+=e*r*Math.PI*2*this.locomotionBlend;const h=this.locomotionPhase,c=Math.sin(h)*z.locomotion.torsoYaw*this.locomotionBlend,d=Math.sin(h*2)*z.locomotion.torsoRoll*this.locomotionBlend,u=(Math.sin(h*2)*.5+.5)*z.locomotion.torsoBob*this.locomotionBlend,f=t.rotation.y;this.root.rotation.set(0,0,0),this.playerRoot.position.set(t.position.x,t.position.y-(z.spineLen+z.neckLen+u),t.position.z),this.playerRoot.rotation.set(0,f,0);const m=t.rotation.x;this.neck.position.y=z.neckLen,this.neck.rotation.set(m,0,0),this.pelvis.position.set(0,0,z.torsoBackOffset),this.chest.position.set(0,0,0),this.spine.position.y=z.spineLen+u,this.chest.rotation.set(0,c,d),this.applyLegs(h,this.locomotionBlend),this.idleTime+=e;const v=this.computeArmIdle(i);this.updateSwing(e);const M=this.getCurrentSwingRot();this.rArm.rotation.set(v.shoulderPitch+M.pitch,v.shoulderYaw+M.yaw,v.shoulderRoll);{const A=D.clamp(this.locomotionBlend*(.5+.1*i),0,1),y=Math.sin(this.idleTime*z.idle.bobSpeed*(1+.5*A)),w=D.degToRad(22)*this.locomotionBlend,k=Math.sin(h)*w,S=-Math.sin(h)*D.degToRad(3)*this.locomotionBlend,b=y*.035*this.locomotionBlend,C=y*.025*this.locomotionBlend,I=D.degToRad(35)*this.locomotionBlend;this.lArm.rotation.set(-(D.degToRad(165)+k+b),I+S,-(0+C))}const p=D.radToDeg(m)<=-35||this.movingFlag&&this.locomotionBlend>.4;this.setLegsVisible(p),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}setLighting(e,t,s,o){this.armMat.setLighting(e,t,s,o),this.legMat.setLighting(e,t,s,o),this.torsoMat.setLighting(e,t,s,o)}onPrimaryClick(){this.tryStartSwing("LMB")}onSecondaryClick(){this.tryStartSwing("RMB")}isSwingActive(){return this.swingActive}onMovementInputStart(){this.movingFlag=!0}onMovementInputEnd(){this.movingFlag=!1}dispose(){try{this.swingAudio?.pause()}catch{}this.swingAudio=null;try{this.playerRoot?.remove(this.root)}catch{}}createBoxMesh(e,t,s,o){const i=new Qt(e,t,s),a=new xe(i,o);return a.castShadow=!1,a.receiveShadow=!1,a}createSegmentMesh(e,t,s,o){return this.createBoxMesh(e,t,s,o)}applyLegs(e,t){const s=Math.sin(e)*z.locomotion.ampThigh*t,o=Math.sin(e+Math.PI)*z.locomotion.ampThigh*t;this.lLeg.rotation.set(s,0,0),this.rLeg.rotation.set(o,0,0)}computeArmIdle(e){const t=this.idleTime,s=D.clamp(this.locomotionBlend*(.5+.1*e),0,1),o=Math.sin(t*z.idle.bobSpeed*(1+.5*s)),i=z.idle.baseShoulderPitch+o*.06,a=z.idle.baseShoulderYaw+o*.02,n=z.idle.baseShoulderRoll+o*.03,r=i*.35-.04;return{shoulderPitch:i,shoulderYaw:a,shoulderRoll:n,forearmPitch:r}}tryStartSwing(e){if(!this.swingActive){this.swingKind=e,this.swingActive=!0,this.swingReturning=!1,this.swingTime=0;try{this.swingAudio||(this.swingAudio=new Audio(Xo),this.swingAudio.loop=!1,this.swingAudio.preload="auto");try{this.swingAudio.pause()}catch{}try{this.swingAudio.currentTime=0}catch{}this.swingAudio.play().catch(()=>{})}catch{}}}updateSwing(e){if(!this.swingActive)return;const t=this.swingReturning?z.swing.returnDuration:z.swing.duration;this.swingTime+=e,this.swingTime>=t&&(this.swingReturning?(this.swingActive=!1,this.swingReturning=!1,this.swingTime=0):(this.swingReturning=!0,this.swingTime=0))}getCurrentSwingRot(){if(!this.swingActive)return{pitch:0,yaw:0};const e=D.clamp(this.swingTime/(this.swingReturning?z.swing.returnDuration:z.swing.duration),0,1),t=n=>Math.pow(n,z.swing.easeIn),s=n=>1-Math.pow(1-n,z.swing.easeOut),o=z.swing.amplitudePitch*.8,i=this.estimateObstacleDamping(),a=-o*i;if(this.swingReturning){const n=t(1-e);return{pitch:a*n,yaw:(this.swingKind==="RMB"?z.swing.amplitudeYawAlt:0)*n}}else{const n=s(e);return{pitch:a*n,yaw:(this.swingKind==="RMB"?z.swing.amplitudeYawAlt:0)*n}}}estimateObstacleDamping(){if(!this.camera)return 1;const e=this.camera,t=this._v3a;return e.getWorldDirection(t),1}setLegsVisible(e){this.lLeg.visible=e,this.rLeg.visible=e}}let _e=null,$e=!1,ae=null,Y=null,N=null,_=null,Re=null,Ye=null,q=null,j=null,oe=null,O=null,pe=null,B=null,ut=null,Ne=null,F=null,re=null,G=null,Be=null,Pe=null,Je=null,ue=null,dt=0,qe=0,Ve=0,et=!1,ve=null,Le=600,Ie=null,se=null,ht=!1,wt=0;const Me=new Map;function ts(l){const t=Math.max(1,Math.round(Math.sqrt(l))),s=Math.floor(t/2),o=t-1-s,i={minX:-s*x.x,maxX:(o+1)*x.x,minZ:-s*x.z,maxZ:(o+1)*x.z},a=Math.max(Math.abs(i.maxX-i.minX),Math.abs(i.maxZ-i.minZ))/2;return{bounds:i,worldRadius:a}}function Qo(l,e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(s),i=document.createElement("a");i.href=o,i.download=l,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}async function $o(){try{if(!_)throw new Error("World not initialized");const l=Se.getState(),e=Math.max(1,Math.floor(l.chunkCount||9)),{bounds:t,worldRadius:s}=ts(e),o=_.getLoadedChunkKeys().map(d=>{const u=_.getChunkByKey(d),[f,m,v]=d.split(",").map(g=>parseInt(g,10)),M=u.getData();return{key:d,cx:f,cy:m,cz:v,size:{...M.size},voxelsB64:Ts(M.voxels)}}),i={kind:"MyCraftWorld",version:2,meta:{createdAt:new Date().toISOString()},settings:{seed:_.getSeed(),chunkCount:e,chunkSize:{...x},bounds:t,worldRadius:s},chunks:o,inventory:{slots:Fs().map(d=>({blockId:d.blockId,count:d.count})),selectedSlot:Se.getState().selectedSlot}},a=await Es(i),{ivB64:n,cipherB64:r}=await Rs(i),h={kind:"MyCraftWorld",version:2,encAlg:Us,ivB64:n,cipherB64:r,signatureAlg:Ws,signatureB64:a,publicKeyId:Bs};try{const d=window.__nextSaveFileHandle;if(window.__nextSaveFileHandle=void 0,d&&typeof d.createWritable=="function"){const f=await d.createWritable(),m=JSON.stringify(h,null,2);await f.write(new Blob([m],{type:"application/json"})),await f.close();return}}catch(d){console.warn("Saving via chosen file handle failed. Falling back to download.",d)}const c=`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`;Qo(c,h)}catch(l){console.error("Save world failed:",l),alert("Failed to save world. See console for details.")}}function Jo(l){if(Re&&Me.size){const s=Array.from(Me.keys()),o=new Set,i=a=>{Me.has(a)&&o.add(a)};for(const a of s){if(o.has(a))continue;const[n,r,h]=a.split(",").map(u=>parseInt(u,10)),c=[`${n+1},${r},${h}`,`${n-1},${r},${h}`,`${n},${r+1},${h}`,`${n},${r-1},${h}`,`${n},${r},${h+1}`,`${n},${r},${h-1}`];c.some(u=>Me.has(u))&&(i(a),c.forEach(u=>{Me.has(u)&&i(u)}))}for(const[a,n]of Me)o.has(a)||wt-n.receivedAt>=2&&o.add(a);if(o.size)for(const a of o){const n=Me.get(a);if(n){try{Re.handleChunkMesh(n.response)}catch(r){console.error("Apply chunk mesh failed",r)}Me.delete(a)}}}if(G&&G.consumePauseToggle?.()){const s=Se.getState(),o=!s.paused;s.inGame&&(s.setPaused(o),o?G.exitPointerLock?.():G.requestPointerLock?.())}const{paused:e,inGame:t}=Se.getState();if(et&&!e&&t&&G?.requestPointerLock?.(),t&&!e){if(G&&G.update(),se&&G&&G.peekRightClick?.()&&se.onSecondaryClick(),G){const s=G.consumeSelectedSlot?.();s!=null&&Se.getState().setSelectedSlot(s)}if(Be&&Be.update(l),se&&G){const s=G.getMoveInput?.()||{x:0,z:0},o=Math.hypot(s.x,s.z)>.01||!!G.isJumpHeld?.();o&&!ht&&se.onMovementInputStart?.(),!o&&ht&&se.onMovementInputEnd?.(),ht=!!o}Pe&&Pe.update(),Je&&Je.update()}if(ve&&ve.update(l,e,t),se&&t&&!e&&se.update(l),q&&N&&q.updateUniforms(N),B&&(e||B.update(l)),ut&&B&&ut.setSunDirection(B.getSunDirection()),Ne&&B){Ne.update();const s=Math.max(0,B.getSunDirection().y),o=1-D.clamp(s/.25,0,1);Ne.setVisibility(o),Ne.setIntensity(1.2+1.6*o)}if(F&&(F.update(),B)){const s=B.getSunDirection(),o=Math.max(0,s.y);F.setDayLight(o)}if(pe&&Y&&N){if(B){const s=B.getSunDirection();pe.setSunDirection(s)}if(pe.update(N,Y),q){const s=pe.getShadowUniforms();q.updateShadowUniforms(s)}}if(q&&B){const s=B.getSunDirection();q.setSunUniforms(s,B.getSunColor());const o=Math.max(0,s.y),a=Math.max(.1,o);q.setDayLight(a);const n=1-D.clamp((o-0)/.2,0,1);q.setStarLight(n*.35),ue&&ue.setSunUniforms(s,B.getSunColor()),ue&&ue.setDayNight(a,n*.35),se&&se.setLighting(s,B.getSunColor(),a,n*.35)}if((j||re)&&B){const s=B.getSunDirection(),o=B.getSunColor(),i=Math.max(0,s.y),n=Math.max(.15,i),r=new V(.02,.04,.08),h=new V(.25,.42,.72),c=new V(.05,.07,.12),d=new V(.58,.68,.82),u=r.clone().lerp(h,n),f=c.clone().lerp(d,n);j&&(j.setSun(s,o),j.setAmbientLighting(n),j.setSkyColors(u,f)),re&&(re.setSun(s,o),re.setAmbientLighting(n),re.setSkyColors(u,f))}if(re&&re.update(l),O&&N&&B){const s=B.getSunDirection(),o=B.getSunColor();O.update(N,s,o);const i=Math.max(0,s.y),n=Math.max(.1,i),r=new V(.72,.82,.92),c=new V(.03,.05,.08).clone().lerp(r,n);O.setFogColor(c),O.setFogDayLight(n);const d=new V(4891608),f=new V(658966).clone().lerp(d,D.clamp(n,0,1));re&&re.setColor(f),j&&j.setColor(f),O.render()}else oe?(B&&N&&oe.setSunLighting(B.getSunDirection(),N),oe.render()):ae&&Y&&N&&ae.render(Y,N);et=e}function ss(l){if(!$e)return;const e=Math.min(.1,Math.max(0,(l-dt)/1e3));dt=l,wt++,Jo(e),qe+=1,Ve===0&&(Ve=l);const t=l-Ve;if(t>=500){const s=Math.round(qe*1e3/t);Se.getState().setFps(s),qe=0,Ve=l}_e=requestAnimationFrame(ss)}async function ei(l){if($e)return;ae=new Hs(l);const e=ae.getRenderer(),t=e.isWebGPURenderer===!0;Y=Gs();const s=l.clientWidth/l.clientHeight;N=qs(s),_=new $s,Ye=new fo(e);let o=null;try{o=Ye.createEnvironmentMap(),Y.environment=o}catch(g){console.warn("Environment mapping disabled due to renderer compatibility:",g),o=null}const i=await uo();q=new es(i.getTexture(),o,void 0,{tileSize:i.getConfig().tileSize,atlasSize:i.getConfig().atlasSize}),q.setAntialiasing(!0,.9),q.setMaterialProperties(.8,0,.3);let a=0;if("capabilities"in e){const g=e.capabilities;g?.getMaxAnisotropy&&(a=g.getMaxAnisotropy()??0)}j=new ye({map:null,color:1713988,tileScale:1,useWorldUV:!0,bounds:{minX:-1/0,maxX:1/0,minZ:-1/0,maxZ:1/0}}),j.setAlpha(.7),j.setRefraction(.18,.75,.12,.035,.06),j.setFresnelAlpha(.65,.9),Re=new Js(Y,{opaque:q,transparent:j}),Ie=new te,Ie.name="PlayerRigRoot",Y.add(Ie),se=new Ko,se.init(Ie,N);const n=ae.getCanvasSize();if(t)if(t)O=null,oe=null;else{const g=e;oe=new mo(g,Y,N,n.width,n.height),oe.updateSettings({ssaoEnabled:!0,ssaoIntensity:.3,ssaoRadius:.2,waterLevel:W+1,bloomEnabled:!0,bloomStrength:.3,bloomThreshold:.05,exposure:.9,contrast:1.15,saturation:1.1,fogEnabled:!0,fogBaseDensity:.002,fogMaxDistance:Le,volumetricsEnabled:!1,volumetricsIntensity:.1,volumetricsSteps:32})}else{const g=e;O=new xo(g,Y,N,n.width,n.height),O.setSSAO(!0,.3,.2),O.setBloom(!0,.3,.05),O.setLens(!0,.6),O.setFog(!0,.002,Le),O.setSSAOWaterLevel(W+1),O.setVolumetrics(!1,.1,32)}if(pe=t?null:new So(e,Y),B=new bo(Y,{cycleSeconds:180,initialTime:0}),ut=new Co(Y,{turbidity:2,rayleigh:1.5,mieCoefficient:.005,mieDirectionalG:.8,sunIntensityScale:.5,sunDiscScale:.1}),Ne=new ko(Y,{intensity:1.2}),F=new Do(Y,{altitude:200,coverage:.45,density:.65,windDirection:Math.PI*.25,windSpeed:5}),F.setEnabled(!1),q&&F){const g=F.getWind();q.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:F.getAltitude(),scale:100,coverage:F.getCoverage(),density:F.getDensity(),wind:g})}window.__setClouds=(g,p)=>{F&&(typeof g=="number"&&F.setCoverage(g),typeof p=="number"&&F.setDensity(p))},pe?.updateSettings({enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:1,bias:5e-4,normalBias:.02,intensity:1,stableExtents:!0,extentScale:1.05,shadowBlendFraction:.2,shadowBlendMin:3});const r=gt();_.chunkPipeline.setAtlasConfig(i.getConfig(),r.getAllBlocks()),G=new Bo(l,N),G.onPointerLockChanged(g=>{const p=Se.getState();g?p.setInGame(!0):p.paused||p.setInGame(!1)});const h=Math.max(1,Math.floor(Se.getState().chunkCount||9)),{bounds:c,worldRadius:d}=ts(h);j&&(j.setBounds(c),j.setEdge(0,2));const u=x.x*2;if(Le=Math.min(N.far*.95,d+u),O){O.setFog(!0,.002,Le);const g=Math.max(0,d-x.x*1.5);O.setHorizonHaze({enabled:!0,waterLevel:W+1,hazeStart:g,hazeDensity:.0045,hazeMaxMix:.05,hazeAngleBoost:.4,hazePlaneBoost:.2,hazePlaneBand:6})}else oe&&oe.updateSettings({fogEnabled:!0,fogBaseDensity:.002,fogMaxDistance:Le});_.chunkPipeline.setWorldRadius(d);const f=Eo(_.getSeed(),0,0,d);N.position.set(f.x,f.y,f.z);{const g=N.far*.98;re=new Ro(Y,{bounds:c,waterLevel:W,farDistance:g,color:1713988,tileScale:1,enableSeabed:!0,seed:_.getSeed(),worldRadius:d,blockMaterialSource:q??void 0,anisotropy:a?Math.min(8,a):8})}if(Be=new me(N,_,G,c),Pe=new No(N,_,Y,c),Je=new Vo(N,_,G,Pe,_.chunkPipeline,Be),ue=new Yo(Y,_,he("grass_tuft")??9),ue&&F){const g=F.getWind();ue.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:F.getAltitude(),scale:100,coverage:F.getCoverage(),density:F.getDensity(),wind:g})}ve=new Ho(_,N,G,Be),_.chunkPipeline.on("CHUNK_READY",()=>{}),_.chunkPipeline.on("CHUNK_MESH",g=>{const{response:p}=g;Me.set(p.key,{response:p,receivedAt:wt})});const m=window.__WORLD_SNAPSHOT,v=window.__WORLD_SNAPSHOT_VERIFIED;if(m&&m.kind==="MyCraftWorld")try{if(!v)throw new Error("Save not verified by loader");const g=m.settings.chunkSize;if(g.x!==x.x||g.y!==x.y||g.z!==x.z)throw new Error(`Chunk size mismatch: save ${g.x}x${g.y}x${g.z}, game ${x.x}x${x.y}x${x.z}`);_.setSeed(m.settings.seed);for(const p of m.chunks){const A=new Uint8Array(atob(p.voxelsB64).split("").map(w=>w.charCodeAt(0))),y={size:p.size,voxels:A};_.chunkPipeline.ingestChunkData(p.key,y)}}catch(g){console.error("Failed to load snapshot; returning to Start Panel.",g);try{alert("Save file verification failed or is corrupted. Returning to Start Panel.")}catch{}os();const p=Se.getState();p.setGameStarted(!1),p.setInGame(!1);return}finally{delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED}else{const g=Math.floor(Math.sqrt(h)/2),p=Math.sqrt(h)-1-g;for(let A=-g;A<=p;A++)for(let y=-g;y<=p;y++)_.ensureChunk(A,0,y)}const M=()=>{ae&&N&&l&&(ae.onResize(),N.aspect=l.clientWidth/l.clientHeight,N.updateProjectionMatrix(),O?O.setSize(l.clientWidth,l.clientHeight):oe&&oe.setSize(l.clientWidth,l.clientHeight))};window.addEventListener("resize",M),$e=!0,et=Se.getState().paused,dt=performance.now(),qe=0,Ve=0,_e=requestAnimationFrame(ss)}function os(){$e=!1,et=!1,_e!==null&&(cancelAnimationFrame(_e),_e=null),G&&(G.destroy(),G=null),Re&&(Re.destroy(),Re=null),q&&(q.dispose(),q=null),j&&(j.dispose(),j=null),oe&&(oe.dispose(),oe=null),pe&&(pe.dispose(),pe=null),Be=null,Pe&&(Pe.destroy(),Pe=null),Je=null,ue&&(ue.destroy(),ue=null),ve&&(ve.dispose(),ve=null);try{se?.dispose()}catch{}if(se=null,Y&&Ie)try{Y.remove(Ie)}catch{}Ie=null,_&&(_.destroy(),_=null),Ye&&(Ye.dispose(),Ye=null),re&&Y&&re.dispose(Y),re=null,ae&&(ae.dispose(),ae=null),Y=null,N=null,Le=600}function ti(){return{timeOfDay:{t:B?B.getTime():0,paused:!1,cycleSeconds:180},renderer:{exposure:ae?ae.getRenderer().toneMappingExposure:1}}}function si(l){if(O)O.setSSAO(!!l.ssaoEnabled,l.ssaoIntensity,l.ssaoRadius),O.setBloom(!!l.bloomEnabled,l.bloomStrength,l.bloomThreshold),O.setFog(!!l.fogEnabled,l.fogBaseDensity??.002,l.fogMaxDistance??Le),O.setVolumetrics(!!l.volumetricsEnabled,l.volumetricsIntensity??.1,l.volumetricsSteps??32),O.setColorGrading(l.exposure,l.contrast,l.saturation);else if(oe)oe.updateSettings(l);else return}function oi(l){if(pe)pe.updateSettings(l);else return}function ii(l){zo(l,{setTime:e=>{B?.setTime(e)},setTimePaused:e=>{B?.pause(e)},setCycleSeconds:e=>{B?.setCycleSeconds(e)},setRendererExposure:e=>{ae&&(ae.getRenderer().toneMappingExposure=e)},setClouds:e=>{if(F){if(e.coverage!==void 0&&F.setCoverage(e.coverage),e.density!==void 0&&F.setDensity(e.density),e.windDirection!==void 0||e.windSpeed!==void 0){const t=e.windDirection??Math.PI*.25,s=e.windSpeed??5;F.setWind(t,s)}if(e.enabled!==void 0&&F.setEnabled(e.enabled),q&&F){const t=F.getWind();q.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??F.getCoverage(),density:e.density??F.getDensity(),altitude:F.getAltitude(),wind:t}),ue&&ue.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??F.getCoverage(),density:e.density??F.getDensity(),altitude:F.getAltitude(),wind:t})}}}})}window.updatePostProcessingSettings=si;window.updateShadowSettings=oi;window.updateGraphicsSettings=ii;window.getGraphicsSettings=ti;window.__saveWorld=()=>{$o()};window.__setSfxVolume=l=>{ve?.setVolume(l)};window.__getSfxVolume=()=>ve?.getVolume()??.7;window.__primeSfx=()=>{ve?.tryUnlockOnUserGesture()};window.__sfxBreak=()=>{ve?.playBreak()};window.__sfxPlace=()=>{ve?.playPlace()};window.__bodyPrimary=()=>{se?.onPrimaryClick?.()};window.__bodySecondary=()=>{se?.onSecondaryClick?.()};window.__isBodySwingActive=()=>!!se?.isSwingActive?.();const ui={start:ei,stop:os};export{ui as engine};
