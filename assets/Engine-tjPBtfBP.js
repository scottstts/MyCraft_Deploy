import{f as os,g as is,h as Ce,P as Ut,V as oe,i as as,j as ns,k as rs,G as ee,M as Le,B as He,l as re,T as $e,m as ht,n as $,o as we,p as ls,q as cs,R as Ge,r as hs,L as vt,S as Re,s as Vt,t as se,a as N,b as I,u as C,v as us,w as ds,W as Ot,D as _t,x as fs,y as ms,z as Yt,E as ps,O as vs,I as gs,J as ws,K as ys,Q as xs,A as Ss,d as Ms,X as bs,Y as ut,Z as gt,_ as Cs,$ as ks,e as Ht,a0 as zs,a1 as Ds,a2 as wt,F as et}from"./three-CckAHwS8.js";import{C as w,P as R,I as Gt,S as Xe,a as As,g as yt,c as Ls,u as ge,b as Is,d as Ps,s as Bs,e as Rs,f as Ts,h as Es,i as Fs}from"./index-D0ULTFsk.js";import{S as Je,U as Ws,E as Ns,R as Us,a as Vs}from"./three-examples-61MmgSN1.js";import{a as Me}from"./vendor-D7XSisoL.js";import"./react-DUHB38qD.js";class Os{renderer;constructor(e){this.renderer=new os({canvas:e,antialias:!1,powerPreference:"high-performance"}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setClearColor(8900331),this.renderer.toneMapping=is,this.renderer.toneMappingExposure=.8,this.renderer.outputColorSpace=Ce,this.renderer.useLegacyLights=!1,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=Ut,this.setSize(e.clientWidth,e.clientHeight)}setSize(e,t){this.renderer.setSize(e,t,!1)}getCanvasSize(){const e=this.renderer.getSize(new oe);return{width:e.x,height:e.y}}onResize(){const e=this.renderer.domElement;this.setSize(e.clientWidth,e.clientHeight)}render(e,t){this.renderer.render(e,t)}getRenderer(){return this.renderer}dispose(){this.renderer.dispose()}}function _s(){const c=new as,e=new ns(4212838,.1);return c.add(e),c}function Ys(c=1){const e=new rs(70,c,.1,1024);return e.position.set(0,80,0),e}function xt(c,e,t){if(c<0||c>=w.x||e<0||e>=w.y||t<0||t>=w.z)throw new Error(`Invalid chunk coordinates: (${c}, ${e}, ${t}). Must be within (0,0,0) to (${w.x-1}, ${w.y-1}, ${w.z-1})`);return e*(w.x*w.z)+t*w.x+c}function St(){return w.x*w.y*w.z}function Mt(c,e,t){return c>=0&&c<w.x&&e>=0&&e<w.y&&t>=0&&t<w.z}class Hs{voxels;size;constructor(e){this.size={...w};const t=St();if(e){if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==w.x||e.size.y!==w.y||e.size.z!==w.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${w.x}x${w.y}x${w.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}else this.voxels=new Uint8Array(t),this.voxels.fill(0)}get(e,t,s){if(!Mt(e,t,s))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${s})`);const o=xt(e,t,s);return this.voxels[o]}set(e,t,s,o){if(!Mt(e,t,s))throw new Error(`Invalid local coordinates: (${e}, ${t}, ${s})`);if(o<0||o>255)throw new Error(`Invalid block ID: ${o}. Must be 0-255.`);const i=xt(e,t,s);this.voxels[i]=o}getData(){return{size:{...this.size},voxels:new Uint8Array(this.voxels)}}setFromData(e){const t=St();if(e.voxels.length!==t)throw new Error(`Invalid chunk data: expected ${t} voxels, got ${e.voxels.length}`);if(e.size.x!==w.x||e.size.y!==w.y||e.size.z!==w.z)throw new Error(`Invalid chunk data: size mismatch. Expected ${w.x}x${w.y}x${w.z}, got ${e.size.x}x${e.size.y}x${e.size.z}`);this.voxels=new Uint8Array(e.voxels)}getVoxelsArray(){return this.voxels}getSize(){return{...this.size}}fill(e){if(e<0||e>255)throw new Error(`Invalid block ID: ${e}. Must be 0-255.`);this.voxels.fill(e)}clear(){this.voxels.fill(0)}isEmpty(){return this.voxels.every(e=>e===0)}countBlocks(e){let t=0;for(let s=0;s<this.voxels.length;s++)this.voxels[s]===e&&t++;return t}getBlockStats(){const e=new Map;for(let t=0;t<this.voxels.length;t++){const s=this.voxels[t];e.set(s,(e.get(s)||0)+1)}return e}}function tt(c,e){return Math.floor(c/e)}function st(c,e){return(c%e+e)%e}function We(c,e,t){const s=tt(c,w.x),o=tt(e,w.y),i=tt(t,w.z),a=st(c,w.x),n=st(e,w.y),r=st(t,w.z);return{cx:s,cy:o,cz:i,lx:a,ly:n,lz:r}}function K(c,e,t){return`${c},${e},${t}`}class dt{listeners=new Map;on(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);const s=this.listeners.get(e);return s.add(t),()=>{s.delete(t),s.size===0&&this.listeners.delete(e)}}once(e,t){const s=this.on(e,o=>{s(),t(o)});return s}off(e,t){const s=this.listeners.get(e);s&&(s.delete(t),s.size===0&&this.listeners.delete(e))}emit(e,t){const s=this.listeners.get(e);if(s){const o=Array.from(s);for(const i of o)try{i(t)}catch(a){console.error(`Error in event listener for '${String(e)}':`,a)}}}removeAllListeners(e){e?this.listeners.delete(e):this.listeners.clear()}listenerCount(e){const t=this.listeners.get(e);return t?t.size:0}eventNames(){return Array.from(this.listeners.keys())}}class Gs{blocks=new Map;nameToId=new Map;constructor(){this.initializeDefaults()}initializeDefaults(){const e=[{id:0,name:"air",opaque:!1,solid:!1,faces:{all:"air"}},{id:1,name:"grass",opaque:!0,solid:!0,faces:{top:"grass_top",bottom:"dirt",side:"grass_side"}},{id:2,name:"dirt",opaque:!0,solid:!0,faces:{all:"dirt"}},{id:3,name:"stone",opaque:!0,solid:!0,faces:{all:"cobblestone"}},{id:4,name:"sand",opaque:!0,solid:!0,faces:{all:"sand"}},{id:5,name:"water",opaque:!1,solid:!1,faces:{top:"water"}},{id:6,name:"wood",opaque:!0,solid:!0,faces:{top:"wood_top",bottom:"wood_top",side:"wood_side"}},{id:7,name:"leaves",opaque:!0,solid:!0,faces:{all:"tree_leaves"}},{id:8,name:"leaves_maple",opaque:!0,solid:!0,faces:{all:"maple_leaves"}},{id:9,name:"grass_tuft",opaque:!1,solid:!1,faces:{all:"air"}}];for(const s of e)this.registerBlock(s);const t=this.getBlock(0);if(!t||t.opaque||t.solid)throw new Error("Block registry invariant violated: AIR (id=0) must be non-opaque and non-solid")}registerBlock(e){if(e.id<0||e.id>255)throw new Error(`Invalid block ID: ${e.id}. Must be 0-255.`);if(this.blocks.has(e.id))throw new Error(`Block ID ${e.id} already registered`);if(this.nameToId.has(e.name))throw new Error(`Block name '${e.name}' already registered`);this.blocks.set(e.id,e),this.nameToId.set(e.name,e.id)}getBlock(e){return this.blocks.get(e)}getBlockIdByName(e){return this.nameToId.get(e)}getAllBlocks(){return Array.from(this.blocks.values())}hasBlock(e){return this.blocks.has(e)}getBlockCount(){return this.blocks.size}validate(){const e=this.getBlock(0);if(!e)throw new Error("Registry validation failed: AIR block (id=0) not found");if(e.opaque||e.solid)throw new Error("Registry validation failed: AIR block must be non-opaque and non-solid");const t=Math.max(...this.blocks.keys());for(let s=0;s<=t;s++)if(!this.blocks.has(s))throw new Error(`Registry validation failed: Missing block ID ${s} - IDs must be contiguous`)}}let ot=null;function ft(){return ot||(ot=new Gs),ot}function Ze(c){return ft().getBlock(c)}function ce(c){return ft().getBlockIdByName(c)}function Xs(c){return c&&c.type==="CHUNK_DATA"&&typeof c.key=="string"&&c.payload}function Zs(c){return c&&c.type==="CHUNK_MESH"&&typeof c.key=="string"&&c.payload&&c.payload.opaque&&c.payload.transparent&&c.payload.opaque.positions instanceof Float32Array&&c.payload.opaque.normals instanceof Float32Array&&c.payload.opaque.uvs instanceof Float32Array&&c.payload.opaque.colors instanceof Float32Array&&(c.payload.opaque.indices instanceof Uint16Array||c.payload.opaque.indices instanceof Uint32Array)&&c.payload.transparent.positions instanceof Float32Array&&c.payload.transparent.normals instanceof Float32Array&&c.payload.transparent.uvs instanceof Float32Array&&c.payload.transparent.colors instanceof Float32Array&&(c.payload.transparent.indices instanceof Uint16Array||c.payload.transparent.indices instanceof Uint32Array)}class qs extends dt{generatorWorker;mesherWorker;pendingRequests=new Set;atlasConfig=null;blockRegistry=[];chunkDataMap=new Map;worldRadius=null;constructor(){super(),this.generatorWorker=new Worker(new URL("/assets/generator.worker-CONQC9jZ.js",import.meta.url),{type:"module"}),this.generatorWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.generatorWorker.onerror=e=>{console.error("[ChunkPipeline] Generator worker error:",e)},this.mesherWorker=new Worker(new URL("/assets/mesher.worker-CR5xCLBy.js",import.meta.url),{type:"module"}),this.mesherWorker.onmessage=e=>{this.handleWorkerResponse(e.data)},this.mesherWorker.onerror=e=>{console.error("[ChunkPipeline] Mesher worker error:",e)}}ingestChunkData(e,t){if(this.chunkDataMap.set(e,t),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before ingesting chunks");const s=this.buildNeighborsForKey(e),o={type:"MESH_CHUNK",payload:{key:e,chunkData:t,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:s}};this.mesherWorker.postMessage(o),this.emit("CHUNK_READY",{key:e,chunkData:t});const[i,a,n]=e.split(",").map(l=>parseInt(l,10)),r=[[i+1,a,n],[i-1,a,n],[i,a+1,n],[i,a-1,n],[i,a,n+1],[i,a,n-1]];for(const[l,h,d]of r){const u=K(l,h,d),m=this.chunkDataMap.get(u);if(m){const p=this.buildNeighborsFor(l,h,d),f={type:"MESH_CHUNK",payload:{key:u,chunkData:m,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:p}};this.mesherWorker.postMessage(f)}}}setAtlasConfig(e,t){this.atlasConfig=e,this.blockRegistry=t}setWorldRadius(e){this.worldRadius=e}requestChunk(e,t,s,o){const i=K(e,t,s);if(this.pendingRequests.has(i))return;this.pendingRequests.add(i);const a={type:"GEN_CHUNK",payload:{key:i,cx:e,cy:t,cz:s,seed:o,worldRadius:this.worldRadius||void 0}};this.generatorWorker.postMessage(a)}handleWorkerResponse(e){Xs(e)?this.handleChunkDataResponse(e):Zs(e)?this.handleChunkMeshResponse(e):console.warn("[ChunkPipeline] Unknown worker response:",e)}handleChunkDataResponse(e){const{key:t,payload:s}=e;if(this.pendingRequests.delete(t),this.chunkDataMap.set(t,s),!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before requesting chunks");const o=this.buildNeighborsForKey(t),i={type:"MESH_CHUNK",payload:{key:t,chunkData:s,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:o}};this.mesherWorker.postMessage(i);const[a,n,r]=t.split(",").map(h=>parseInt(h,10)),l=[[a+1,n,r],[a-1,n,r],[a,n+1,r],[a,n-1,r],[a,n,r+1],[a,n,r-1]];for(const[h,d,u]of l){const m=K(h,d,u),p=this.chunkDataMap.get(m);if(p){const f=this.buildNeighborsFor(h,d,u),v={type:"MESH_CHUNK",payload:{key:m,chunkData:p,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:f}};this.mesherWorker.postMessage(v)}}this.emit("CHUNK_READY",{key:t,chunkData:s})}buildNeighborsForKey(e){const[t,s,o]=e.split(",").map(i=>parseInt(i,10));return this.buildNeighborsFor(t,s,o)}buildNeighborsFor(e,t,s){return{posX:this.chunkDataMap.get(K(e+1,t,s)),negX:this.chunkDataMap.get(K(e-1,t,s)),posY:this.chunkDataMap.get(K(e,t+1,s)),negY:this.chunkDataMap.get(K(e,t-1,s)),posZ:this.chunkDataMap.get(K(e,t,s+1)),negZ:this.chunkDataMap.get(K(e,t,s-1))}}handleChunkMeshResponse(e){const{key:t}=e;this.emit("CHUNK_MESH",{key:t,response:e})}requestRemesh(e,t,s,o){if(!this.atlasConfig)throw new Error("[ChunkPipeline] Atlas config must be set before meshing");const i=K(e,t,s);this.chunkDataMap.set(i,o);const a=this.buildNeighborsFor(e,t,s),n={type:"MESH_CHUNK",payload:{key:i,chunkData:o,atlasConfig:this.atlasConfig,blockRegistry:this.blockRegistry,neighbors:a}};this.mesherWorker.postMessage(n)}destroy(){this.generatorWorker.terminate(),this.mesherWorker.terminate(),this.pendingRequests.clear(),this.chunkDataMap.clear()}}class js extends dt{chunks=new Map;chunkPipeline;seed=12345;overrideProvider=null;floodedAir=new Set;constructor(){super(),this.chunkPipeline=new qs,this.chunkPipeline.on("CHUNK_READY",({key:e,chunkData:t})=>{this.handleChunkReady(e,t)})}async handleChunkReady(e,t){const s=new Hs;if(s.setFromData(t),this.overrideProvider)try{const h=await this.overrideProvider.getOverrides(e);this.applyOverrides(s,h)}catch(h){console.warn(`[World] Failed to load overrides for chunk ${e}:`,h)}const[o,i,a]=e.split(","),n=parseInt(o,10),r=parseInt(i,10),l=parseInt(a,10);this.chunks.set(e,s),this.emit("CHUNK_ADDED",{key:e,chunk:s,coords:{cx:n,cy:r,cz:l}})}ensureChunk(e,t,s){const o=K(e,t,s),i=this.chunks.get(o);if(!i){this.chunkPipeline.requestChunk(e,t,s,this.seed);return}return i}getChunk(e,t,s){const o=K(e,t,s);return this.chunks.get(o)}getChunkByKey(e){return this.chunks.get(e)}setChunk(e,t,s,o){const i=K(e,t,s),a=this.chunks.has(i);this.chunks.set(i,o),a||this.emit("CHUNK_ADDED",{key:i,chunk:o,coords:{cx:e,cy:t,cz:s}})}removeChunk(e,t,s){const o=K(e,t,s),i=this.chunks.delete(o);return i&&this.emit("CHUNK_REMOVED",{key:o,coords:{cx:e,cy:t,cz:s}}),i}setBlock(e,t,s,o){const{cx:i,cy:a,cz:n,lx:r,ly:l,lz:h}=We(e,t,s),d=this.ensureChunk(i,a,n);if(!d){console.warn(`[World] Cannot set block at (${e}, ${t}, ${s}): chunk not ready yet`);return}const u=d.get(r,l,h);d.set(r,l,h,o),this.emit("BLOCK_CHANGED",{worldX:e,worldY:t,worldZ:s,oldBlockId:u,newBlockId:o,chunkKey:K(i,a,n),localX:r,localY:l,localZ:h})}getBlock(e,t,s){const{cx:o,cy:i,cz:a,lx:n,ly:r,lz:l}=We(e,t,s),h=this.getChunk(o,i,a);return h?h.get(n,r,l):0}isBlockSolid(e,t,s){const{cx:o,cy:i,cz:a}=We(e,t,s);if(!this.getChunk(o,i,a))return t<=80;const r=this.getBlock(e,t,s),l=Ze(r);return l?l.solid:!1}isBlockOpaque(e,t,s){const o=this.getBlock(e,t,s),i=Ze(o);return i?i.opaque:!1}getLoadedChunkKeys(){return Array.from(this.chunks.keys())}getLoadedChunks(){return Array.from(this.chunks.values())}getLoadedChunkCount(){return this.chunks.size}addFloodedAir(e){for(const t of e)this.floodedAir.add(`${t.x},${t.y},${t.z}`)}removeFloodedAir(e){for(const t of e)this.floodedAir.delete(`${t.x},${t.y},${t.z}`)}isAirFlooded(e,t,s){return this.floodedAir.has(`${e},${t},${s}`)}clearFloodedAir(){this.floodedAir.clear()}isChunkLoaded(e,t,s){const o=K(e,t,s);return this.chunks.has(o)}getChunksInRadius(e,t,s,o){const i=new Map;for(let a=e-o;a<=e+o;a++)for(let n=t-o;n<=t+o;n++)for(let r=s-o;r<=s+o;r++){const l=this.getChunk(a,n,r);if(l){const h=K(a,n,r);i.set(h,l)}}return i}clear(){const e=this.getLoadedChunkKeys();for(const t of e){const[s,o,i]=t.split(","),a=parseInt(s,10),n=parseInt(o,10),r=parseInt(i,10);this.removeChunk(a,n,r)}}setSeed(e){this.seed=e}getSeed(){return this.seed}setOverrideProvider(e){this.overrideProvider=e}getOverrideProvider(){return this.overrideProvider}applyOverrides(e,t){for(const s of t)try{e.set(s.lx,s.ly,s.lz,s.id)}catch(o){console.warn(`[World] Failed to apply override at (${s.lx}, ${s.ly}, ${s.lz}):`,o)}}destroy(){this.chunkPipeline.destroy(),this.clear()}}class Ks extends dt{scene;materialOpaque;materialTransparent;chunkMeshes=new Map;chunkGroups=new Map;constructor(e,t){super(),this.scene=e,this.materialOpaque=t.opaque,this.materialTransparent=t.transparent}handleChunkMesh(e){const{key:t,payload:s}=e,{opaque:o,transparent:i}=s;this.removeChunkMesh(t);const a=new ee,n=(v,S,y)=>{if(!v.positions.length)return null;const A=new He;A.setAttribute("position",new re(v.positions,3)),A.setAttribute("normal",new re(v.normals,3)),A.setAttribute("uv",new re(v.uvs,2)),v.colors&&v.colors.length&&A.setAttribute("color",new re(v.colors,3)),A.setIndex(new re(v.indices,1));const M=new Le(A,S);return M.castShadow=!y,M.receiveShadow=!y,y&&(M.renderOrder=2),M},r=n(o,this.materialOpaque,!1),l=n(i,this.materialTransparent,!0);if(!r&&!l)return;const[h,d,u]=t.split(","),m=parseInt(h,10),p=parseInt(d,10),f=parseInt(u,10);a.position.set(m*w.x,p*w.y,f*w.z),r&&a.add(r),l&&a.add(l),r&&r.position.set(0,0,0),l&&l.position.set(0,0,0),this.scene.add(a),this.chunkMeshes.set(t,r??l),this.chunkGroups.set(t,a),this.emit("MESH_CREATED",{key:t,mesh:r??l})}removeChunkMesh(e){const t=this.chunkGroups.get(e),s=this.chunkMeshes.get(e);t&&(this.scene.remove(t),t.traverse(o=>{o instanceof Le&&o.geometry&&o.geometry.dispose()}),this.chunkGroups.delete(e)),s&&(this.chunkMeshes.delete(e),this.emit("MESH_REMOVED",{key:e}))}getChunkMesh(e){return this.chunkMeshes.get(e)}getLoadedChunkKeys(){return Array.from(this.chunkMeshes.keys())}getLoadedMeshCount(){return this.chunkMeshes.size}clear(){const e=this.getLoadedChunkKeys();for(const t of e)this.removeChunkMesh(t)}destroy(){this.clear()}}const Qs="/assets/grass_top-B-uLxs5-.png",$s="/assets/dirt-B-vrw7w8.png",Js="/assets/grass_side-D5yzkk_I.png",eo="/assets/cobblestone-CA00UXn1.png",Xt="/assets/sand-DRk7qQwc.png",to="/assets/wood_top-COALD2KD.png",so="/assets/wood_side-C4jg5E62.png",oo="/assets/tree_leaves-C6IY6uCJ.png",io="/assets/maple_leaves-D3-dxP6r.png";class bt{texture;config;constructor(e,t){this.texture=e,this.config=t,this.texture.flipY=!0,this.texture.colorSpace=Ce,this.texture.magFilter=$,this.texture.minFilter=$,this.texture.generateMipmaps=!1,this.texture.wrapS=we,this.texture.wrapT=we,this.texture.needsUpdate=!0}getTexture(){return this.texture}getTile(e){const t=this.config.tiles[e];return t?{u:t[0],v:t[1]}:null}getTileSize(){return this.config.tileSize}getAtlasSize(){return this.config.atlasSize}getTiles(){return this.config.tiles}getConfig(){return this.config}}function ao(){const t=document.createElement("canvas");t.width=80,t.height=16,t.getContext("2d").clearRect(0,0,t.width,t.height);const o=new ht(t);return o.flipY=!0,o.colorSpace=Ce,o.magFilter=$,o.minFilter=$,o.generateMipmaps=!1,o.wrapS=we,o.wrapT=we,o.needsUpdate=!0,o}async function no(){const c=new $e,e=16,t=11,s=1,o=document.createElement("canvas");o.width=t*e,o.height=s*e;const i=o.getContext("2d");i.clearRect(0,0,o.width,o.height);const n=Object.entries({grass_top:{path:Qs,position:[0,0]},dirt:{path:$s,position:[1,0]},grass_side:{path:Js,position:[2,0]},cobblestone:{path:eo,position:[3,0]},sand:{path:Xt,position:[4,0]},wood_top:{path:to,position:[6,0]},wood_side:{path:so,position:[7,0]},tree_leaves:{path:oo,position:[8,0]},maple_leaves:{path:io,position:[9,0]}}).map(async([l,{path:h,position:[d,u]}])=>{try{const m=await new Promise((f,v)=>{c.load(h,f,void 0,v)}),p=m.image;l==="grass_side"?(i.save(),i.translate((d+.5)*e,(u+.5)*e),i.rotate(Math.PI),i.drawImage(p,-e/2,-e/2,e,e),i.restore()):i.drawImage(p,d*e,u*e,e,e),m.dispose()}catch(m){console.warn(`Failed to load texture ${l}:`,m)}});await Promise.all(n);const r=new ht(o);return ro(r)}function ro(c){return c.flipY=!0,c.colorSpace=Ce,c.magFilter=$,c.minFilter=$,c.generateMipmaps=!1,c.wrapS=we,c.wrapT=we,c.needsUpdate=!0,c}async function lo(){try{const e=await(await fetch("/atlas.json")).json(),t=await no();return new bt(t,e)}catch(c){console.warn("Failed to load atlas, falling back to simple atlas:",c);const e={tileSize:16,atlasSize:11,tiles:{grass_top:[0,0],dirt:[1,0],grass_side:[2,0],cobblestone:[3,0],sand:[4,0],water:[5,0],wood_top:[6,0],wood_side:[7,0],tree_leaves:[8,0],maple_leaves:[9,0],air:[10,0]}},t=ao();return new bt(t,e)}}class co{envMap=null;pmremGenerator=null;constructor(e){this.pmremGenerator=new ls(e)}createEnvironmentMap(){if(this.envMap)return this.envMap;const e=512,t=document.createElement("canvas");t.width=e,t.height=e;const s=t.getContext("2d"),o=s.createLinearGradient(0,0,0,e);o.addColorStop(0,"#87CEEB"),o.addColorStop(.7,"#B0E0E6"),o.addColorStop(1,"#F0F8FF"),s.fillStyle=o,s.fillRect(0,0,e,e);const i=[];for(let a=0;a<6;a++){const n=document.createElement("canvas");n.width=e,n.height=e,n.getContext("2d").drawImage(t,0,0),i.push(n)}return this.envMap=new cs(i),this.envMap.needsUpdate=!0,this.envMap.format=Ge,this.envMap.type=hs,this.envMap.generateMipmaps=!1,this.envMap.minFilter=vt,this.envMap.magFilter=vt,this.envMap.wrapS=we,this.envMap.wrapT=we,this.envMap}getEnvironmentMap(){return this.envMap}dispose(){this.envMap&&(this.envMap.dispose(),this.envMap=null),this.pmremGenerator&&(this.pmremGenerator.dispose(),this.pmremGenerator=null)}}class Zt extends Re{startTime;constructor(e,t,s,o){super({vertexShader:`
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
    `,uniforms:{map:{value:e},normalMap:{value:s||null},envMap:{value:t},roughness:{value:.8},metalness:{value:0},envMapIntensity:{value:.3},time:{value:0},alphaScale:{value:1},lightingMix:{value:1},sunDirection:{value:new I(50,120,50).normalize()},sunColor:{value:new N(1,.95,.8)},shadowMap0:{value:null},shadowMap1:{value:null},shadowMap2:{value:null},shadowMap3:{value:null},shadowMatrix0:{value:new se},shadowMatrix1:{value:new se},shadowMatrix2:{value:new se},shadowMatrix3:{value:new se},shadowCascades:{value:3},shadowDistances:{value:[25,50,100,200]},shadowSoftness:{value:2},shadowBias:{value:5e-4},shadowNormalBias:{value:.02},shadowIntensity:{value:0},shadowResolution:{value:1024},shadowBlendFraction:{value:.2},shadowBlendMin:{value:3},shadowCascadeSize:{value:[100,200,400,800]},shadowCamNear:{value:[.1,.1,.1,.1]},shadowCamFar:{value:[100,200,400,800]},cloudShadowEnabled:{value:!0},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new oe(Math.cos(Math.PI*.25)*5,Math.sin(Math.PI*.25)*5)},dayLight:{value:1},starLight:{value:0},materialFogEnabled:{value:!1},aaEnabled:{value:!0},aaStrength:{value:1},aaLodBiasEnabled:{value:!0},aaLodBias:{value:.9},atlasSize:{value:o?.atlasSize??1},tileSize:{value:o?.tileSize??16},ditherAmount:{value:.75}},defines:t?{USE_ENVMAP:!0}:{},side:Vt,transparent:!1}),this.startTime=Date.now()}updateUniforms(e){this.uniforms.time.value=Date.now()-this.startTime}setMaterialProperties(e,t,s){const o=this.uniforms;o.roughness.value=e,o.metalness.value=t,o.envMapIntensity.value=s}setAlphaScale(e){const t=this.uniforms;t.alphaScale.value=C.clamp(e,0,1)}setLightingMix(e){const t=this.uniforms;t.lightingMix.value=C.clamp(e,0,1)}setAntialiasing(e,t=1){const s=this.uniforms;s.aaEnabled.value=!!e,s.aaStrength.value=C.clamp(t,0,1)}setAALodBias(e,t=.9){const s=this.uniforms;s.aaLodBiasEnabled.value=!!e,s.aaLodBias.value=C.clamp(t,0,2)}setAtlasInfo(e){const t=this.uniforms;t.tileSize.value=Math.max(1,e.tileSize|0),t.atlasSize.value=Math.max(1,e.atlasSize|0)}setSunUniforms(e,t){const s=this.uniforms;s.sunDirection.value.copy(e),s.sunColor.value.copy(t)}setDayLight(e){const t=this.uniforms;t.dayLight.value=C.clamp(e,0,1)}setStarLight(e){const t=this.uniforms;t.starLight.value=C.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=C.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=C.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=C.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}updateShadowUniforms(e){const t=this.uniforms;Object.keys(e).forEach(s=>{t[s]&&(t[s].value=e[s].value)})}}class ho extends Je{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new oe(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjectionMatrix:{value:new se},cameraMatrixWorld:{value:new se},waterLevel:{value:42},ssaoEnabled:{value:!0},ssaoIntensity:{value:.35},ssaoRadius:{value:.2}},vertexShader:`
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
          
          // Mild flatness gating to avoid AO on perfectly flat areas only
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setWaterLevel(e){this.uniforms.waterLevel.value=e}setSettings({enabled:e,intensity:t,radius:s}){e!==void 0&&(this.uniforms.ssaoEnabled.value=e),t!==void 0&&(this.uniforms.ssaoIntensity.value=t),s!==void 0&&(this.uniforms.ssaoRadius.value=s)}}class uo extends Je{_sunDirView=new I(.6,.8,.1).normalize();constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new oe(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},invProjection:{value:new se},invView:{value:new se},sunDirView:{value:new I(.6,.8,.1).normalize()},enabled:{value:!0},intensity:{value:.1},steps:{value:32}},vertexShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjection.value.copy(e.projectionMatrixInverse),this.uniforms.invView.value.copy(e.matrixWorldInverse)}setSunDirWorld(e,t){const s=new us().setFromMatrix4(t.matrixWorldInverse);this._sunDirView.copy(e).applyMatrix3(s).normalize(),this.uniforms.sunDirView.value.copy(this._sunDirView)}setSettings({enabled:e,intensity:t,steps:s}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.intensity.value=t),s!==void 0&&(this.uniforms.steps.value=s)}}class fo extends Ws{constructor(e,t){super(new oe(e,t),.3,.5,.05)}setSize(e,t){super.setSize(e,t)}setSettings({enabled:e,strength:t,threshold:s}){e!==void 0&&(this.enabled=e),t!==void 0&&(this.strength=t),s!==void 0&&(this.threshold=s)}}class mo extends Je{constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},cameraNear:{value:.1},cameraFar:{value:1e3},enabled:{value:!0},baseDensity:{value:.002},maxDistance:{value:600},fogColor:{value:new N(.72,.82,.92)},dayLight:{value:1},exposure:{value:.9},contrast:{value:1.15},saturation:{value:1.1},ditherAmount:{value:.75},invProjectionMatrix:{value:new se},cameraMatrixWorld:{value:new se},hazeEnabled:{value:!1},waterLevel:{value:42},hazeStart:{value:400},hazeDensity:{value:.004},hazeMaxMix:{value:.5},hazeAngleBoost:{value:0},hazePlaneBoost:{value:0},hazePlaneBand:{value:6}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far,this.uniforms.invProjectionMatrix.value.copy(e.projectionMatrixInverse),this.uniforms.cameraMatrixWorld.value.copy(e.matrixWorld)}setSettings({enabled:e,baseDensity:t,maxDistance:s}){e!==void 0&&(this.uniforms.enabled.value=e),t!==void 0&&(this.uniforms.baseDensity.value=t),s!==void 0&&(this.uniforms.maxDistance.value=s)}setColor(e){this.uniforms.fogColor.value.copy(e)}setDayLight(e){this.uniforms.dayLight.value=C.clamp(e,0,1)}setColorGrading({exposure:e,contrast:t,saturation:s}){e!==void 0&&(this.uniforms.exposure.value=e),t!==void 0&&(this.uniforms.contrast.value=t),s!==void 0&&(this.uniforms.saturation.value=s)}setHorizonHaze(e){e.enabled!==void 0&&(this.uniforms.hazeEnabled.value=e.enabled),e.waterLevel!==void 0&&(this.uniforms.waterLevel.value=e.waterLevel),e.hazeStart!==void 0&&(this.uniforms.hazeStart.value=e.hazeStart),e.hazeDensity!==void 0&&(this.uniforms.hazeDensity.value=e.hazeDensity),e.hazeMaxMix!==void 0&&(this.uniforms.hazeMaxMix.value=e.hazeMaxMix),e.hazeAngleBoost!==void 0&&(this.uniforms.hazeAngleBoost.value=e.hazeAngleBoost),e.hazePlaneBoost!==void 0&&(this.uniforms.hazePlaneBoost.value=e.hazePlaneBoost),e.hazePlaneBand!==void 0&&(this.uniforms.hazePlaneBand.value=e.hazePlaneBand)}}class po extends Je{_sunNdc=new oe(-10,-10);_sunVisible=0;_sunColor=new N(1,1,1);constructor(){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},resolution:{value:new oe(1,1)},cameraNear:{value:.1},cameraFar:{value:1e3},sunNdc:{value:new oe(-10,-10)},sunVisible:{value:0},sunColor:{value:new N(1,1,1)},intensity:{value:.6},enabled:{value:!0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);} ",fragmentShader:`
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
      `})}setDepthTexture(e){this.uniforms.tDepth.value=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}setCamera(e){this.uniforms.cameraNear.value=e.near,this.uniforms.cameraFar.value=e.far}setEnabled(e){this.uniforms.enabled.value=e}setIntensity(e){this.uniforms.intensity.value=e}setSun(e,t,s){this._sunColor.copy(t);const o=new I().copy(e).multiplyScalar(1e4),i=new se().multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),a=new ds(o.x,o.y,o.z,1).applyMatrix4(i);let n=0;const r=this._sunNdc;a.w!==0&&r.set(a.x/a.w,a.y/a.w);let l=0;e.y>-.05&&(l=C.smoothstep(-.05,-.01,e.y));let h=0;a.w>0&&Math.abs(r.x)<=1&&Math.abs(r.y)<=1&&(h=1),n=l*h,this._sunVisible=n,this.uniforms.sunNdc.value.copy(r),this.uniforms.sunColor.value.copy(this._sunColor),this.uniforms.sunVisible.value=this._sunVisible}}class vo{composer;renderPass;ssao;vol;bloom;lens;fog;depthTarget;renderer;scene;constructor(e,t,s,o,i){this.composer=new Ns(e),this.renderer=e,this.scene=t,this.depthTarget=new Ot(o,i,{minFilter:$,magFilter:$,format:Ge,depthBuffer:!0,stencilBuffer:!0});const a=new _t(o,i,fs);a.format=ms,this.depthTarget.depthTexture=a,this.renderPass=new Us(t,s),this.composer.addPass(this.renderPass),this.ssao=new ho,this.ssao.setDepthTexture(this.depthTarget.depthTexture),this.ssao.setSize(o,i),this.composer.addPass(this.ssao),this.vol=new uo,this.vol.setDepthTexture(this.depthTarget.depthTexture),this.vol.setSize(o,i),this.composer.addPass(this.vol),this.bloom=new fo(o,i),this.composer.addPass(this.bloom),this.lens=new po,this.lens.setDepthTexture(this.depthTarget.depthTexture),this.lens.setSize(o,i),this.composer.addPass(this.lens),this.fog=new mo,this.fog.setDepthTexture(this.depthTarget.depthTexture),this.composer.addPass(this.fog)}setSize(e,t){this.depthTarget.setSize(e,t),this.depthTarget.depthTexture&&(this.depthTarget.depthTexture.image.width=e,this.depthTarget.depthTexture.image.height=t,this.depthTarget.depthTexture.needsUpdate=!0),this.composer.setSize(e,t),this.ssao.setSize(e,t),this.vol.setSize(e,t),this.bloom.setSize(e,t),this.lens.setSize(e,t)}update(e,t,s){const o=this.renderer.getRenderTarget();this.renderer.setRenderTarget(this.depthTarget),this.renderer.clear(!0,!0,!0),this.renderer.render(this.scene,e),this.renderer.setRenderTarget(o),this.ssao.setCamera(e),this.vol.setCamera(e),this.vol.setSunDirWorld(t,e),this.lens.setCamera(e),this.lens.setSun(t,s??new N(1,1,.95),e),this.fog.setCamera(e)}setSSAOWaterLevel(e){this.ssao.setWaterLevel(e)}setSSAO(e,t,s){this.ssao.setSettings({enabled:e,intensity:t,radius:s})}setVolumetrics(e,t,s){this.vol.setSettings({enabled:e,intensity:t,steps:s})}setBloom(e,t,s){this.bloom.setSettings({enabled:e,strength:t,threshold:s})}setLens(e,t){this.lens.setEnabled(e),this.lens.setIntensity(t)}setFog(e,t,s){this.fog.setSettings({enabled:e,baseDensity:t,maxDistance:s})}setHorizonHaze(e){this.fog.setHorizonHaze(e)}setFogColor(e){this.fog.setColor(e)}setFogDayLight(e){this.fog.setDayLight(e)}setColorGrading(e,t,s){this.fog.setColorGrading({exposure:e,contrast:t,saturation:s})}render(){this.composer.render()}}class go{renderer;shadowLight;shadowCameras=[];shadowMaps=[];cascadeDistances=[];cascadeSizes=[];dummyTexture;sunDir=new I(50,120,50).normalize();lastSnappedLS=[];settings={enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:2.5,bias:5e-4,normalBias:.02,intensity:.6,stableExtents:!1,extentScale:1.05,shadowBlendFraction:.3,shadowBlendMin:10};constructor(e,t){this.renderer=e,this.shadowLight=new Yt(16777215,1),this.shadowLight.position.set(50,120,50),this.shadowLight.castShadow=this.settings.enabled,t.add(this.shadowLight.target),this.shadowLight.shadow.mapSize.width=this.settings.resolution,this.shadowLight.shadow.mapSize.height=this.settings.resolution,this.shadowLight.shadow.camera.near=.5,this.shadowLight.shadow.camera.far=this.settings.shadowDistance,t.add(this.shadowLight),this.initializeCascades(),this.enableShadowMapping(),this.dummyTexture=new ps(new Uint8Array([0,0,0,255]),1,1,Ge),this.dummyTexture.needsUpdate=!0}initializeCascades(){this.recomputeCascadeSplits(),this.shadowCameras=[],this.shadowMaps=[],this.cascadeSizes=[],this.lastSnappedLS=[];for(let e=0;e<this.settings.cascades;e++){const t=new vs(-50,50,50,-50,.1,this.cascadeDistances[e]);this.shadowCameras.push(t);const s=new Ot(this.settings.resolution,this.settings.resolution,{minFilter:$,magFilter:$,format:Ge,depthBuffer:!0,stencilBuffer:!1});s.depthTexture=new _t(this.settings.resolution,this.settings.resolution,gs),s.depthTexture.format=ws,this.shadowMaps.push(s)}}recomputeCascadeSplits(){const e=this.settings.cascades,t=.1,s=this.settings.shadowDistance,o=.7;this.cascadeDistances=[];for(let i=1;i<=e;i++){const a=i/e,n=t*Math.pow(s/t,a),r=t+(s-t)*a,l=o*(n-r)+r;this.cascadeDistances.push(l)}}enableShadowMapping(){this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ut,this.renderer.shadowMap.autoUpdate=!0}update(e,t){if(!this.settings.enabled){this.shadowLight.castShadow=!1,this.renderer.shadowMap.enabled=!1;return}this.shadowLight.castShadow=!0,this.renderer.shadowMap.enabled=!0,this.updateShadowLightPosition(),e.isPerspectiveCamera&&this.updateCascadeCameras(e),this.renderShadowMaps(t)}updateShadowLightPosition(){const e=Math.max(50,this.settings.shadowDistance),t=this.sunDir.clone().multiplyScalar(e);this.shadowLight.position.copy(t),this.shadowLight.target.position.set(0,0,0),this.shadowLight.target.updateMatrixWorld()}updateCascadeCameras(e){const t=e,s=this.sunDir.clone().normalize(),o=new I(0,1,0);let i=t.near;for(let a=0;a<this.settings.cascades;a++){const n=this.cascadeDistances[a],r=this.shadowCameras[a],l=this.getSliceCornersWorld(t,i,n),h=new I().copy(t.position),d=h.clone().sub(s.clone().multiplyScalar(200)),u=new se().lookAt(d,h,o),m=new I(1/0,1/0,1/0),p=new I(-1/0,-1/0,-1/0);for(const M of l){const g=M.clone().applyMatrix4(u);m.min(g),p.max(g)}let f,v=0,S=h.clone().applyMatrix4(u);if(this.settings.stableExtents){const g=Math.tan(C.degToRad(t.fov)*.5)*n,k=g*t.aspect,x=Math.sqrt(k*k+g*g)*(this.settings.extentScale??1.05),b=2*x;f=x,v=b;const D=b/this.settings.resolution,P=Math.round(S.x/D)*D,U=Math.round(S.y/D)*D,L=this.lastSnappedLS[a]||{x:P,y:U},T=D*.5,W=Math.abs(P-L.x)>=T?P:L.x,G=Math.abs(U-L.y)>=T?U:L.y,j=W-S.x,J=G-S.y;if(Math.abs(j)>1e-6||Math.abs(J)>1e-6){const Z=new se().makeTranslation(j,J,0);u.premultiply(Z),S=h.clone().applyMatrix4(u)}this.lastSnappedLS[a]={x:W,y:G},r.left=-f,r.right=f,r.bottom=-f,r.top=f}else{const M=new I().subVectors(p,m),g=M.x/this.settings.resolution,k=M.y/this.settings.resolution;m.x=Math.floor(m.x/g)*g,m.y=Math.floor(m.y/k)*k,p.x=Math.floor(p.x/g)*g,p.y=Math.floor(p.y/k)*k;const x=Math.max(p.x-m.x,p.y-m.y);f=.5*x,v=x,S.set(.5*(m.x+p.x),.5*(m.y+p.y),0);const b=x/this.settings.resolution;S.x=Math.floor(S.x/b)*b,S.y=Math.floor(S.y/b)*b,r.left=S.x-f,r.right=S.x+f,r.bottom=S.y-f,r.top=S.y+f}const y=Math.max(.1,-p.z),A=Math.max(y+1,-m.z+25);r.near=y,r.far=A,r.updateProjectionMatrix(),r.matrixWorld.copy(new se().copy(u).invert()),r.matrixWorldInverse.copy(u),r.updateMatrixWorld(!0),i=n,this.cascadeSizes[a]=Math.max(.001,v)}}getSliceCornersWorld(e,t,s){const o=[],i=new I().setFromMatrixPosition(e.matrixWorld),a=new I;e.getWorldDirection(a);const n=new I(0,1,0).applyQuaternion(e.quaternion),r=new I().crossVectors(a,n).normalize().multiplyScalar(-1),l=i.clone().addScaledVector(a,t),h=i.clone().addScaledVector(a,s),d=Math.tan(C.degToRad(e.fov)*.5),u=d*t,m=u*e.aspect,p=d*s,f=p*e.aspect;return o.push(l.clone().addScaledVector(n,u).addScaledVector(r,-m)),o.push(l.clone().addScaledVector(n,-u).addScaledVector(r,-m)),o.push(l.clone().addScaledVector(n,-u).addScaledVector(r,m)),o.push(l.clone().addScaledVector(n,u).addScaledVector(r,m)),o.push(h.clone().addScaledVector(n,p).addScaledVector(r,-f)),o.push(h.clone().addScaledVector(n,-p).addScaledVector(r,-f)),o.push(h.clone().addScaledVector(n,-p).addScaledVector(r,f)),o.push(h.clone().addScaledVector(n,p).addScaledVector(r,f)),o}renderShadowMaps(e){const t=this.renderer.getRenderTarget(),s=[];e.traverse(o=>{const i=o.material;(Array.isArray(i)?i:[i]).forEach(n=>{if(n&&"isShaderMaterial"in n&&n.isShaderMaterial&&"uniforms"in n){const r=n,l=r.uniforms,h={};let d=!1;["shadowMap0","shadowMap1","shadowMap2","shadowMap3"].forEach(u=>{l[u]&&(h[u]=l[u].value,l[u].value=this.dummyTexture,d=!0)}),d&&s.push({material:r,values:h})}})});for(let o=0;o<this.shadowMaps.length;o++)this.renderer.setRenderTarget(this.shadowMaps[o]),this.renderer.clear(!0,!0,!0),this.renderer.render(e,this.shadowCameras[o]);this.renderer.setRenderTarget(t),s.forEach(({material:o,values:i})=>{const a=o.uniforms;Object.keys(i).forEach(n=>{a[n]&&(a[n].value=i[n])})})}getShadowUniforms(){const e={};for(let i=0;i<this.settings.cascades;i++){const a=this.shadowMaps[i];e[`shadowMap${i}`]={value:a.depthTexture??a.texture},e[`shadowMatrix${i}`]={value:new se().multiply(this.shadowCameras[i].projectionMatrix).multiply(this.shadowCameras[i].matrixWorldInverse)}}e.shadowCascades={value:this.settings.cascades},e.shadowDistances={value:this.cascadeDistances},e.shadowSoftness={value:this.settings.softness},e.shadowBias={value:this.settings.bias},e.shadowNormalBias={value:this.settings.normalBias},e.shadowIntensity={value:this.settings.enabled?this.settings.intensity:0},e.shadowResolution={value:this.settings.resolution},e.shadowBlendFraction={value:this.settings.shadowBlendFraction??.3},e.shadowBlendMin={value:this.settings.shadowBlendMin??10};const t=[0,1,2,3].map(i=>this.cascadeSizes[i]??(i===0?100:this.cascadeSizes[i-1]??100));e.shadowCascadeSize={value:t};const s=[0,1,2,3].map(i=>this.shadowCameras[i]?this.shadowCameras[i].near:.1),o=[0,1,2,3].map(i=>this.shadowCameras[i]?this.shadowCameras[i].far:this.settings.shadowDistance);return e.shadowCamNear={value:s},e.shadowCamFar={value:o},e}setSunDirection(e){this.sunDir.copy(e).normalize()}updateSettings(e){const t=this.settings.resolution,s=this.settings.cascades,o={...this.settings};this.settings={...this.settings,...e},t!==this.settings.resolution||s!==this.settings.cascades?(this.dispose(),this.initializeCascades()):o.shadowDistance!==this.settings.shadowDistance&&this.recomputeCascadeSplits(),this.shadowLight.shadow.mapSize.setScalar(this.settings.resolution),this.shadowLight.shadow.camera.far=this.settings.shadowDistance,this.shadowLight.castShadow=this.settings.enabled,this.renderer.shadowMap.enabled=this.settings.enabled,this.settings.enabled&&(this.renderer.shadowMap.needsUpdate=!0);for(let i=0;i<this.shadowCameras.length;i++)this.shadowCameras[i].far=this.settings.shadowDistance,this.shadowCameras[i].updateProjectionMatrix()}getSettings(){return{...this.settings}}setEnabled(e){this.settings.enabled=e,this.renderer.shadowMap.enabled=e,this.shadowLight.castShadow=e}dispose(){this.shadowMaps.forEach(e=>e.dispose()),this.shadowMaps=[],this.shadowCameras=[]}}class wo{sun;hemi;t=0;paused=!1;cycleSeconds=180;sunDir=new I(1,1,1).normalize();sunColor=new N(16777215);constructor(e,t={}){this.cycleSeconds=t.cycleSeconds??180,this.paused=!!t.paused,this.t=(t.initialTime??.25)%1,this.sun=new Yt(16777215,1),this.sun.castShadow=!1,e.add(this.sun),this.hemi=new ys(2241348,1052688,.05),this.hemi.position.set(0,1,0),e.add(this.hemi),this.recomputeLighting()}update(e){if(!this.paused){const t=e/Math.max(.001,this.cycleSeconds);this.t=(this.t+t)%1,this.recomputeLighting()}}setTime(e){this.t=(e%1+1)%1,this.recomputeLighting()}pause(e){this.paused=e}setCycleSeconds(e){this.cycleSeconds=Math.max(1,e|0)}getTime(){return this.t}isPaused(){return this.paused}getSunDirection(e=new I){return e.copy(this.sunDir)}getSunColor(e=new N){return e.copy(this.sunColor)}getElevationRadians(){return Math.asin(Math.sin(this.t*Math.PI*2))}recomputeLighting(){const e=this.t*Math.PI*2,t=Math.PI*.25,s=new I(Math.cos(t),0,Math.sin(t)),o=new I(0,1,0);this.sunDir.copy(s).multiplyScalar(Math.cos(e)).addScaledVector(o,Math.sin(e)).normalize(),this.sun.position.copy(this.sunDir).multiplyScalar(500),this.sun.target.position.set(0,0,0),this.sun.target.updateMatrixWorld();const a=Math.sin(e),n=C.clamp(a,0,1);this.sunColor.copy(yo(n));const r=C.lerp(0,1.1,qe(0,.7,n));this.sun.intensity=r,this.sun.color.copy(this.sunColor);const l=1-qe(.05,.2,n);this.hemi.intensity=C.lerp(.05,.15,l),this.hemi.color.setRGB(.16,.2,.26),this.hemi.groundColor.setRGB(.05,.05,.06)}}function qe(c,e,t){const s=C.clamp((t-c)/Math.max(1e-5,e-c),0,1);return s*s*(3-2*s)}function yo(c){const e=new N(1,.58,.25),t=new N(1,.95,.9),s=new N(1,1,.98),o=qe(0,.25,c),i=qe(.25,.8,c),a=e.clone().lerp(t,o),n=t.clone().lerp(s,i);return a.lerp(n,i)}class xo{sky;sun=new I;uniforms;constructor(e,t){const s=new Vs;s.scale.setScalar(45e4),this.sky=s,e.add(s);const o=s.material;this.uniforms=o.uniforms,this.uniforms.sunIntensityScale={value:t?.sunIntensityScale??1},this.uniforms.sunDiscScale={value:t?.sunDiscScale??1};try{if(typeof o.vertexShader=="string"){const a=o.vertexShader,r=(a.includes("sunIntensityScale")?a:a.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunIntensityScale;`)).replace("vSunE = sunIntensity( dot( vSunDirection, up ) );","vSunE = sunIntensity( dot( vSunDirection, up ) ) * sunIntensityScale;");o.vertexShader=r}if(typeof o.fragmentShader=="string"){const a=o.fragmentShader,r=(a.includes("sunDiscScale")?a:a.replace("uniform vec3 up;",`uniform vec3 up;
		uniform float sunDiscScale;`)).replace("L0 += ( vSunE * 19000.0 * Fex ) * sundisk;","L0 += ( vSunE * 19000.0 * Fex ) * sundisk * sunDiscScale;");o.fragmentShader=r}o.needsUpdate=!0}catch(a){console.warn("[SkyDome] Failed to patch Sky shader for sun scaling:",a)}const i={turbidity:t?.turbidity??2,rayleigh:t?.rayleigh??1.5,mieCoefficient:t?.mieCoefficient??.005,mieDirectionalG:t?.mieDirectionalG??.8};this.setParams(i),this.setSunDirection(new I(1,1,.2).normalize())}setParams(e){this.uniforms.turbidity.value=e.turbidity,this.uniforms.rayleigh.value=e.rayleigh,this.uniforms.mieCoefficient.value=e.mieCoefficient,this.uniforms.mieDirectionalG.value=e.mieDirectionalG,e.sunIntensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.sunIntensityScale),e.sunDiscScale!==void 0&&(this.uniforms.sunDiscScale.value=e.sunDiscScale)}setSunDirection(e){const t=new I().copy(e).normalize();this.sun.copy(t).multiplyScalar(4e5),this.uniforms.sunPosition.value.copy(this.sun)}setSunLuminance(e){e.intensityScale!==void 0&&(this.uniforms.sunIntensityScale.value=e.intensityScale),e.discScale!==void 0&&(this.uniforms.sunDiscScale.value=e.discScale)}}class So{mesh;material;start=performance.now();intensity;constructor(e,t={}){const s=t.radius??1e3;this.intensity=t.intensity??1;const o=new xs(s,32,16);o.scale(1,1,-1),this.material=new Re({side:Ms,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ss,uniforms:{uTime:{value:0},uVisibility:{value:0},uIntensity:{value:this.intensity}},vertexShader:`
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
      `}),this.mesh=new Le(o,this.material),this.mesh.renderOrder=2,e.add(this.mesh)}setVisibility(e){this.material.uniforms.uVisibility.value=C.clamp(e,0,1)}setIntensity(e){this.intensity=e,this.material.uniforms.uIntensity.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}}class Mo{mesh;material;start=performance.now();wind;altitude;constructor(e,t={}){const s=t.altitude??200;this.altitude=s;const o=new bs(4e3,4e3,1,1);o.rotateX(-Math.PI/2),o.translate(0,s,0);const i=t.windDirection??Math.PI*.25,a=t.windSpeed??5;this.wind=new oe(Math.cos(i),Math.sin(i)).multiplyScalar(a),this.material=new Re({transparent:!0,depthWrite:!1,side:ut,uniforms:{uTime:{value:0},uCoverage:{value:t.coverage??.45},uDensity:{value:t.density??.65},uWind:{value:new oe(this.wind.x,this.wind.y)},uDayLight:{value:1}},vertexShader:`
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
      `}),this.mesh=new Le(o,this.material),this.mesh.castShadow=!1,this.mesh.receiveShadow=!1,this.mesh.renderOrder=1,e.add(this.mesh)}setCoverage(e){this.material.uniforms.uCoverage.value=e}setDensity(e){this.material.uniforms.uDensity.value=e}setWind(e,t){this.wind.set(Math.cos(e),Math.sin(e)).multiplyScalar(t),this.material.uniforms.uWind.value.copy(this.wind)}setEnabled(e){this.mesh.visible=e}setDayLight(e){this.material.uniforms.uDayLight.value=e}update(){this.material.uniforms.uTime.value=(performance.now()-this.start)/1e3}getCoverage(){return this.material.uniforms.uCoverage.value}getDensity(){return this.material.uniforms.uDensity.value}getAltitude(){return this.altitude}getWind(e=new oe){return e.copy(this.wind)}}function bo(c,e){if(c.renderer?.exposure!==void 0&&e.setRendererExposure(c.renderer.exposure),c.timeOfDay){const{t,paused:s,cycleSeconds:o}=c.timeOfDay;e.setTime(C.clamp(t,0,1)),e.setTimePaused(!!s),e.setCycleSeconds(Math.max(1,Math.floor(o)))}c.clouds&&e.setClouds&&e.setClouds(c.clouds)}const F=42,Ct=3,Co=.7,kt=.02,ko=.15,zt=.008,zo=25,Dt=.02,Do=12,At=.08,Ao=2,_e=.015,Lt=6,It=-.3,Lo=8,Pt=.012;function be(c){let e=c>>>0;return()=>{e+=1831565813;let t=Math.imul(e^e>>>15,1|e);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function it(c,e,t,s=4,o=2,i=.5){let a=1,n=0,r=0,l=e,h=t;for(let d=0;d<s;d++)n+=c(l,h)*a,r+=a,l*=o,h*=o,a*=i;return r>0?n/r:0}function Bt(c,e,t){const s=Math.min(1,Math.max(0,(t-c)/(e-c)));return s*s*(3-2*s)}function ze(c,e,t,s){const o=be(t^2654435769),i=be(t^2246822507),a=be(t^3266489909),n=be(t^668265263),r=be(t^2722868950),l=be(t^1003724304),h=be(t^439041101),d=be(t^1601842716),u=Me(o),m=Me(i),p=Me(a),f=Me(n),v=Me(r),S=Me(l),y=Me(h),A=Me(d),M=s||336/2,g=v(c*_e,e*_e)*Lt,k=S(c*_e,e*_e)*Lt,x=c+g,b=e+k,P=Math.sqrt(c*c+e*e)/M,U=u(c*kt,e*kt),L=Co+U*ko;if(!(P<L)){const de=it((ts,ss)=>A(ts*Pt,ss*Pt),c,e,3,2,.5),le=Math.max(0,P-L),Te=Math.max(1e-6,1-L),Ie=Math.min(1,le/Te),Oe=Bt(0,1,Ie),pt=2,Qt=pt+(25-pt)*Oe,$t=de*3,Jt=Qt+$t,es=F-Math.floor(Jt);return Math.max(Ct+1,es)}const W=1-Bt(L*.6,L*.95,P),G=F+W*20,J=it((de,le)=>m(de*zt,le*zt),x,b,4,2,.6)*zo*W,ie=it((de,le)=>p(de*Dt,le*Dt),x,b,3,2,.5)*Do*W,Se=f(x*At,b*At)*Ao,ke=y(c*.01,e*.01),ae=ke<It?(ke-It)*Lo*W:0,ue=G+J+ie+Se+ae;return Math.floor(Math.max(Ct+1,ue))}function Io(c,e=0,t=0,s){const o=[{x:e,z:t},{x:0,z:0},{x:10,z:10},{x:-10,z:-10},{x:20,z:0},{x:0,z:20}];let i={x:e,z:t,height:F-10};for(const a of o){const n=ze(a.x,a.z,c,s);n>F&&n>i.height&&(i={x:a.x,z:a.z,height:n})}if(i.height<=F)for(const a of o){const n=ze(a.x,a.z,c,s);n>i.height&&(i={x:a.x,z:a.z,height:n})}return{x:i.x,y:i.height+15,z:i.z}}class ve extends Re{static _instances=new Set;static _rafId=null;static _start=performance.now();static _ensureTicker(){if(this._rafId!==null)return;const e=()=>{const t=(performance.now()-this._start)/1e3;for(const s of this._instances)try{s.setTime(t)}catch{}this._rafId=requestAnimationFrame(e)};this._rafId=requestAnimationFrame(e)}constructor(e){const t=new N(e.color??1713988),s=Math.max(.001,e.tileScale??1),o=!!e.useWorldUV,i=e.bounds??{minX:-1e9,maxX:1e9,minZ:-1e9,maxZ:1e9};super({transparent:!0,depthWrite:!1,depthTest:!0,side:ut,uniforms:{uColor:{value:t},uTime:{value:0},uMap:{value:e.map??null},uUseMap:{value:!1},uTileScale:{value:s},uUseWorldUV:{value:o},uInnerMinX:{value:i.minX},uInnerMaxX:{value:i.maxX},uInnerMinZ:{value:i.minZ},uInnerMaxZ:{value:i.maxZ},uEdgeStrength:{value:0},uEdgeWidth:{value:2},uAlpha:{value:1},uAlphaFresnelBase:{value:.65},uAlphaFresnelScale:{value:.35},uFresnel:{value:.035},uEta:{value:1/1.333},uRefractAmount:{value:.18},uAbsorption:{value:new I(.2,.06,.02)},uDepthApprox:{value:4},uSpecular:{value:1.2},uRoughness:{value:.35},uSunDir:{value:new I(.35,.9,.2).normalize()},uSunColor:{value:new N(1,.98,.9)},tSceneColor:{value:null},uHasSceneColor:{value:0},uResolution:{value:new oe(1,1)},uWaveAmp:{value:.12},uChop:{value:.8},uWind:{value:new oe(.8,.4).normalize()},uSpeed:{value:.8},uL0:{value:12},uL1:{value:6},uL2:{value:2.5},uFoamIntensity:{value:.55},uFoamThreshold:{value:.62},uFoamNoise:{value:1},uFoamDrift:{value:.15},uAlphaDistStart:{value:25},uAlphaDistEnd:{value:140},uAlphaMax:{value:.98},uAlphaNearMin:{value:.88},uAlphaNearDist:{value:22},uSkyTop:{value:new N(.32,.5,.8)},uSkyHorizon:{value:new N(.68,.78,.92)},uAmbientIntensity:{value:1},uNightTint:{value:new N(.1,.15,.25)}},vertexShader:`
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
      `}),ve._instances.add(this),ve._ensureTicker()}setFresnelAlpha(e,t){this.uniforms.uAlphaFresnelBase.value=e,this.uniforms.uAlphaFresnelScale.value=t}setTime(e){this.uniforms.uTime.value=e}setColor(e){this.uniforms.uColor.value.copy(e)}setMap(e){this.uniforms.uMap.value=e,this.uniforms.uUseMap.value=!1}setTileScale(e){this.uniforms.uTileScale.value=Math.max(.001,e)}setUseWorldUV(e){this.uniforms.uUseWorldUV.value=!!e}setBounds(e){this.uniforms.uInnerMinX.value=e.minX,this.uniforms.uInnerMaxX.value=e.maxX,this.uniforms.uInnerMinZ.value=e.minZ,this.uniforms.uInnerMaxZ.value=e.maxZ}setEdge(e,t){this.uniforms.uEdgeStrength.value=Math.max(0,e),this.uniforms.uEdgeWidth.value=Math.max(.1,t)}setAlpha(e){const t=Math.max(0,Math.min(1,e));this.uniforms.uAlpha.value=t,this.depthWrite=t>=1}setRefraction(e,t=1/1.333,s=.15,o=.035,i=.02){this.uniforms.uRefractAmount.value=Math.max(0,e),this.uniforms.uEta.value=Math.max(.001,t),this.uniforms.uWaveAmp.value=Math.max(0,s);const a=Math.max(1e-4,o);this.uniforms.uL0.value=12/a,this.uniforms.uL1.value=6/a,this.uniforms.uL2.value=2.5/a,this.uniforms.uFresnel.value=Math.max(0,i)}setSun(e,t){this.uniforms.uSunDir.value.copy(e).normalize(),t&&this.uniforms.uSunColor.value.copy(t)}setScreenRefraction(e,t){e?(this.uniforms.tSceneColor.value=e,this.uniforms.uHasSceneColor.value=1,t&&this.uniforms.uResolution.value.set(Math.max(1,Math.floor(t.x)),Math.max(1,Math.floor(t.y)))):(this.uniforms.tSceneColor.value=null,this.uniforms.uHasSceneColor.value=0)}setAmbientLighting(e,t){this.uniforms.uAmbientIntensity.value=Math.max(0,Math.min(1,e)),t&&this.uniforms.uNightTint.value.copy(t)}setSkyColors(e,t){this.uniforms.uSkyTop.value.copy(e),this.uniforms.uSkyHorizon.value.copy(t)}setWaves(e){e.amp!==void 0&&(this.uniforms.uWaveAmp.value=Math.max(0,e.amp)),e.chop!==void 0&&(this.uniforms.uChop.value=Math.max(0,e.chop)),e.wind&&this.uniforms.uWind.value.copy(e.wind).normalize(),e.speed!==void 0&&(this.uniforms.uSpeed.value=Math.max(0,e.speed)),e.L0!==void 0&&(this.uniforms.uL0.value=Math.max(.001,e.L0)),e.L1!==void 0&&(this.uniforms.uL1.value=Math.max(.001,e.L1)),e.L2!==void 0&&(this.uniforms.uL2.value=Math.max(.001,e.L2))}dispose(){super.dispose(),ve._instances.delete(this),!ve._instances.size&&ve._rafId!==null&&(cancelAnimationFrame(ve._rafId),ve._rafId=null)}}class Po{group;material;time=0;seabedMaterial=null;seabedGroup=null;blockMaterialSource=null;constructor(e,t){this.group=new ee,this.group.name="OceanHorizon",this.material=new ve({map:t.map??null,color:t.color,tileScale:t.tileScale??1,useWorldUV:!0,bounds:t.bounds}),this.material.setAlpha(.7),this.material.setRefraction(.18,.75,.12,.035,.06),this.material.setFresnelAlpha(.65,.9);const s=u=>{this.material.onBeforeCompile=m=>{m.uniforms.uClipInner={value:u},/uniform\s+float\s+uClipInner\s*;/.test(m.fragmentShader)||(m.fragmentShader=`uniform float uClipInner;
`+m.fragmentShader),m.fragmentShader=m.fragmentShader.replace("bool isUnder = (dot(N, V) < 0.0);",`bool isUnder = (dot(N, V) < 0.0);
          if (uClipInner > 0.0) {
            bool insideXc = (vWorld.x >= uInnerMinX) && (vWorld.x <= uInnerMaxX);
            bool insideZc = (vWorld.z >= uInnerMinZ) && (vWorld.z <= uInnerMaxZ);
            if (insideXc && insideZc) {
              float dxc = min(vWorld.x - uInnerMinX, uInnerMaxX - vWorld.x);
              float dzc = min(vWorld.z - uInnerMinZ, uInnerMaxZ - vWorld.z);
              float edgeDistC = max(0.0, min(dxc, dzc));
              if (isUnder && edgeDistC < uClipInner) discard;
            }
          }`)},this.material.needsUpdate=!0},{minX:o,maxX:i,minZ:a,maxZ:n}=t.bounds,r=t.waterLevel+1-.001,l=.05;s(l*1.1);const h=Math.max(t.farDistance,1),d=[{x0:o,x1:i,z0:a-h,z1:a+l},{x0:o-h,x1:o,z0:a-h,z1:a},{x0:i,x1:i+h,z0:a-h,z1:a},{x0:o-h,x1:o+l,z0:a,z1:n},{x0:i-l,x1:i+h,z0:a,z1:n},{x0:o,x1:i,z0:n-l,z1:n+h},{x0:o-h,x1:o,z0:n,z1:n+h},{x0:i,x1:i+h,z0:n,z1:n+h}];for(const u of d){const m=new Le(this.makeQuad(u.x0,u.z0,u.x1,u.z1,r),this.material);m.frustumCulled=!0,m.renderOrder=2,this.group.add(m)}e.add(this.group),t.enableSeabed&&(this.blockMaterialSource=t.blockMaterialSource??null,this.buildSeabed(e,t))}makeQuad(e,t,s,o,i){const a=new Float32Array([e,i,t,s,i,t,s,i,o,e,i,t,s,i,o,e,i,o]),n=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]),r=new Float32Array([0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]),l=new He;return l.setAttribute("position",new re(a,3)),l.setAttribute("uv",new re(n,2)),l.setAttribute("normal",new re(r,3)),l.computeBoundingBox(),l.computeBoundingSphere(),l}setColor(e){this.material.setColor(e)}setMap(e,t=1){this.material.setMap(e),this.material.setTileScale(t)}setAmbientLighting(e,t){this.material.setAmbientLighting(e,t)}setSun(e,t){this.material.setSun(e,t)}setSkyColors(e,t){this.material.setSkyColors(e,t)}update(e){this.time+=e,this.seabedMaterial&&this.blockMaterialSource&&this.syncSeabedUniforms(this.blockMaterialSource)}dispose(e){e.remove(this.group),this.group.traverse(t=>{const s=t.material;s&&(Array.isArray(s)?s:[s]).forEach(a=>a.dispose()),t.geometry?.dispose()}),this.seabedGroup&&(e.remove(this.seabedGroup),this.seabedGroup.traverse(t=>{const s=t.material;s&&(Array.isArray(s)?s:[s]).forEach(a=>a.dispose()),t.geometry?.dispose()}))}async buildSeabed(e,t){const s=await this.loadSandTexture();s.wrapS=gt,s.wrapT=gt,s.colorSpace=Ce,s.magFilter=$,s.minFilter=Cs,s.generateMipmaps=!0;try{const y=Math.max(1,Math.floor(t.anisotropy??8));s.anisotropy=y}catch{}if(s.needsUpdate=!0,this.seabedMaterial=new Zt(s,null),this.seabedMaterial.setAntialiasing(!0,1),this.seabedMaterial.setMaterialProperties(.8,0,.3),this.blockMaterialSource){const y=this.blockMaterialSource,A=this.seabedMaterial,M=y.uniforms.envMap?.value;y.defines&&y.defines.USE_ENVMAP&&M&&(A.defines={...A.defines||{},USE_ENVMAP:!0},A.uniforms.envMap.value=M,A.needsUpdate=!0),this.syncSeabedUniforms(this.blockMaterialSource)}const{minX:o,maxX:i,minZ:a,maxZ:n}=t.bounds,r=t.seed??12345,l=t.worldRadius??Math.max(i-o,n-a)/2,h=Math.max(t.farDistance,1),d=this.sampleEdgeSeabedHeight({bounds:t.bounds,seed:r,worldRadius:l});this.seabedGroup=new ee,this.seabedGroup.name="SeabedHorizon";const u=[{x0:o,x1:i,z0:a-h,z1:a},{x0:o-h,x1:o,z0:a-h,z1:a},{x0:i,x1:i+h,z0:a-h,z1:a},{x0:o-h,x1:o,z0:a,z1:n},{x0:i,x1:i+h,z0:a,z1:n},{x0:o,x1:i,z0:n,z1:n+h},{x0:o-h,x1:o,z0:n,z1:n+h},{x0:i,x1:i+h,z0:n,z1:n+h}],m=Math.max(Math.max(Math.abs(o),Math.abs(i)),Math.max(Math.abs(a),Math.abs(n))),p=Math.max(w.x,w.z),f=m+p*6,v=f+p*15,S=t.waterLevel+1-.001;for(const y of u){const A=this.makeSteppedQuadWorldUV(y.x0,y.z0,y.x1,y.z1,d,f,v,S),M=new Le(A,this.seabedMaterial);M.frustumCulled=!0,M.renderOrder=0,this.seabedGroup.add(M)}e.add(this.seabedGroup)}makeSteppedQuadWorldUV(e,t,s,o,i,a,n,r){const l=Math.abs(s-e),h=Math.abs(o-t),d=Math.max(8,Math.min(w.x,w.z))/2,u=Math.max(2,Math.min(64,Math.ceil(l/d))),m=Math.max(2,Math.min(64,Math.ceil(h/d))),p=(u+1)*(m+1),f=new Float32Array(p*3),v=new Float32Array(p*2),S=new Float32Array(p*3),y=(L,T)=>Math.sqrt(L*L+T*T);let A=0,M=0,g=0;for(let L=0;L<=m;L++){const T=L/m,W=t+(o-t)*T;for(let G=0;G<=u;G++){const j=G/u,J=e+(s-e)*j,Z=y(J,W),ie=C.clamp((Z-a)/Math.max(.001,n-a),0,1),ye=ie*ie*(3-2*ie),Se=C.lerp(i,r-.05,ye);f[A++]=J,f[A++]=Se,f[A++]=W,v[M++]=J,v[M++]=-W,S[g++]=0,S[g++]=1,S[g++]=0}}const k=u*m*6,x=new Uint32Array(k);let b=0;for(let L=0;L<m;L++)for(let T=0;T<u;T++){const W=L*(u+1)+T,G=W+1,j=W+(u+1),J=j+1;x[b++]=W,x[b++]=j,x[b++]=G,x[b++]=G,x[b++]=j,x[b++]=J}const D=new He;D.setAttribute("position",new re(f,3)),D.setAttribute("uv",new re(v,2)),D.setAttribute("normal",new re(S,3));const P=new Float32Array(p*3),U=.7;for(let L=0;L<P.length;L++)P[L]=U;return D.setAttribute("color",new re(P,3)),D.setIndex(new re(x,1)),D.computeBoundingBox(),D.computeBoundingSphere(),D}sampleEdgeSeabedHeight(e){const{minX:t,maxX:s,minZ:o,maxZ:i}=e.bounds,{seed:a,worldRadius:n}=e,r=Math.max(4,Math.floor(Math.min(w.x,w.z)/2)),l=[],h=Math.max(1,Math.floor(Math.min(w.x,w.z)/8));for(let u=t;u<=s;u+=r){const m=ze(u,o-h,a,n);l.push(m)}for(let u=t;u<=s;u+=r){const m=ze(u,i+h,a,n);l.push(m)}for(let u=o;u<=i;u+=r){const m=ze(t-h,u,a,n);l.push(m)}for(let u=o;u<=i;u+=r){const m=ze(s+h,u,a,n);l.push(m)}let d;if(l.length){l.sort((m,p)=>m-p);const u=Math.max(0,Math.min(l.length-1,Math.floor(l.length*.25)));d=l[u]}else d=ze(s+h,o-h,a,n);return d-.001}loadSandTexture(){return new Promise((e,t)=>{new $e().load(Xt,s=>e(s),void 0,t)})}syncSeabedUniforms(e){if(!this.seabedMaterial)return;const t=this.seabedMaterial,s=e.uniforms,o=t.uniforms,i=["sunDirection","sunColor","dayLight","starLight","shadowMap0","shadowMap1","shadowMap2","shadowMap3","shadowMatrix0","shadowMatrix1","shadowMatrix2","shadowMatrix3","shadowCascades","shadowDistances","shadowSoftness","shadowBias","shadowNormalBias","shadowIntensity","shadowResolution","shadowBlendFraction","shadowBlendMin","shadowCascadeSize","shadowCamNear","shadowCamFar","cloudShadowEnabled","cloudShadowIntensity","cloudShadowAltitude","cloudShadowScale","cloudCoverage","cloudDensity","cloudWind","time","materialFogEnabled"];for(const a of i)s[a]&&o[a]&&(o[a].value=s[a].value)}}class Bo{canvas;camera;isPointerLocked=!1;mouseSensitivity=.002;onPointerLockChangedCallback=null;yawRadians=0;pitchRadians=0;onPointerLockChangeRef;onMouseMoveRef;onKeyDownRef;onKeyUpRef;onMouseDownRef;onMouseUpRef;moveForward=!1;moveBackward=!1;moveLeft=!1;moveRight=!1;sprint=!1;jumpQueued=!1;jumpHeld=!1;leftClickQueued=!1;rightClickQueued=!1;leftMouseHeld=!1;numSlotQueued=null;pauseToggleQueued=!1;constructor(e,t){this.canvas=e,this.camera=t,this.camera.rotation.order="YXZ",this.onPointerLockChangeRef=this.onPointerLockChange.bind(this),this.onMouseMoveRef=this.onMouseMove.bind(this),this.onKeyDownRef=this.onKeyDown.bind(this),this.onKeyUpRef=this.onKeyUp.bind(this),this.onMouseDownRef=this.onMouseDown.bind(this),this.onMouseUpRef=this.onMouseUp.bind(this),document.addEventListener("pointerlockchange",this.onPointerLockChangeRef),window.addEventListener("mousemove",this.onMouseMoveRef),window.addEventListener("keydown",this.onKeyDownRef),window.addEventListener("keyup",this.onKeyUpRef),window.addEventListener("mousedown",this.onMouseDownRef),window.addEventListener("mouseup",this.onMouseUpRef)}update(){const e=C.degToRad(89);this.pitchRadians>e&&(this.pitchRadians=e),this.pitchRadians<-e&&(this.pitchRadians=-e),this.yawRadians=C.euclideanModulo(this.yawRadians+Math.PI,Math.PI*2)-Math.PI,this.camera.rotation.y=this.yawRadians,this.camera.rotation.x=this.pitchRadians}getOrientation(){return{yaw:this.yawRadians,pitch:this.pitchRadians}}destroy(){document.removeEventListener("pointerlockchange",this.onPointerLockChangeRef),window.removeEventListener("mousemove",this.onMouseMoveRef),window.removeEventListener("keydown",this.onKeyDownRef),window.removeEventListener("keyup",this.onKeyUpRef),window.removeEventListener("mousedown",this.onMouseDownRef),window.removeEventListener("mouseup",this.onMouseUpRef)}onPointerLockChange(){this.isPointerLocked=document.pointerLockElement===this.canvas,this.isPointerLocked||(this.leftMouseHeld=!1),this.onPointerLockChangedCallback&&this.onPointerLockChangedCallback(this.isPointerLocked)}onMouseMove(e){if(!this.isPointerLocked)return;const t=e.movementX||0,s=e.movementY||0;this.yawRadians-=t*this.mouseSensitivity,this.pitchRadians-=s*this.mouseSensitivity}onPointerLockChanged(e){this.onPointerLockChangedCallback=e}requestPointerLock(){this.canvas&&document.pointerLockElement!==this.canvas&&this.canvas.requestPointerLock?.()}exitPointerLock(){if(document.exitPointerLock)try{document.exitPointerLock()}catch{}}onMouseDown(e){this.isPointerLocked&&(e.button===0?(this.leftMouseHeld=!0,this.leftClickQueued=!0):e.button===2&&(this.rightClickQueued=!0))}onMouseUp(e){e.button===0&&(this.leftMouseHeld=!1)}onKeyDown(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!0;break;case"KeyS":case"ArrowDown":this.moveBackward=!0;break;case"KeyA":case"ArrowLeft":this.moveLeft=!0;break;case"KeyD":case"ArrowRight":this.moveRight=!0;break;case"ShiftLeft":case"ShiftRight":this.sprint=!0;break;case"Space":this.jumpQueued=!0,this.jumpHeld=!0;break;case"Digit1":case"Digit2":case"Digit3":case"Digit4":case"Digit5":case"Digit6":case"Digit7":case"Digit8":case"Digit9":this.numSlotQueued=parseInt(e.code.slice(-1),10)-1;break;case"KeyP":this.pauseToggleQueued=!0;break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.moveForward=!1;break;case"KeyS":case"ArrowDown":this.moveBackward=!1;break;case"KeyA":case"ArrowLeft":this.moveLeft=!1;break;case"KeyD":case"ArrowRight":this.moveRight=!1;break;case"ShiftLeft":case"ShiftRight":this.sprint=!1;break;case"Space":this.jumpHeld=!1;break}}getMoveInput(){let e=0,t=0;this.moveForward&&(t+=1),this.moveBackward&&(t-=1),this.moveLeft&&(e-=1),this.moveRight&&(e+=1);const s=Math.hypot(e,t);return s>0&&(e/=s,t/=s),{x:e,z:t}}isSprinting(){return this.sprint}isJumpHeld(){return this.jumpHeld}consumeJumpRequested(){return this.jumpQueued?(this.jumpQueued=!1,!0):!1}consumeLeftClick(){return this.leftClickQueued?(this.leftClickQueued=!1,!0):!1}peekLeftClick(){return this.leftClickQueued}isLeftHeld(){return this.leftMouseHeld}consumeRightClick(){return this.rightClickQueued?(this.rightClickQueued=!1,!0):!1}peekRightClick(){return this.rightClickQueued}consumeSelectedSlot(){const e=this.numSlotQueued;return this.numSlotQueued=null,e}consumePauseToggle(){return this.pauseToggleQueued?(this.pauseToggleQueued=!1,!0):!1}}class fe{camera;world;input;static ENABLE_LAND_STEP_ASSIST=!1;velocityY=0;grounded=!1;swimVelocity=new I;underwater=!1;stepCooldown=0;emergeLiftRemaining=0;emergeNudgeDir=new I;renderYOffsetY=0;elevationTween={from:0,elapsed:0,duration:0,active:!1};width=R.width;height=R.height;halfWidth=this.width/2;eyeHeight=Math.min(R.height*.9,R.height-.1);waterId=ce("water")??5;walkSpeed=R.speed.walk;sprintSpeed=R.speed.sprint;gravity=R.gravity;jumpImpulse=R.jump;static EPS=1e-5;bounds=null;constructor(e,t,s,o){this.camera=e,this.world=t,this.input=s,o&&(this.bounds=o),this.camera.rotation.order="YXZ"}update(e){this.renderYOffsetY!==0&&(this.camera.position.y-=this.renderYOffsetY,this.renderYOffsetY=0),this.stepCooldown>0&&(this.stepCooldown=Math.max(0,this.stepCooldown-e));const t=this.underwater,s=this.isHeadInsideWater(),o=this.isHeadInFloodedAir(),i=this.isBaseSubmerged(),a=F+1-.001,n=this.camera.position.y+(this.height-this.eyeHeight),r=.3;if(this.underwater?n>a+r&&(this.underwater=!1):(s||o||i)&&n<a-r&&(this.underwater=!0),this.underwater){t||(this.velocityY=0,this.grounded=!1),this.updateUnderwater(e),this.applyElevationTween(e);return}if(t){this.velocityY=Math.max(this.velocityY,this.swimVelocity.y);const Z=Math.hypot(this.swimVelocity.x,this.swimVelocity.z);if(Z>.5){const ie=Math.min(2,Z*.6),ye=new I(this.swimVelocity.x,0,this.swimVelocity.z).normalize();this.camera.position.add(ye.multiplyScalar(ie*e))}this.swimVelocity.set(0,0,0)}this.input.consumeJumpRequested()&&this.grounded&&(this.velocityY=this.jumpImpulse,this.grounded=!1);const h=this.input.getMoveInput(),d=this.input.isSprinting()?this.sprintSpeed:this.walkSpeed,u=this.camera.rotation.y,m=-Math.sin(u),p=-Math.cos(u),f=Math.cos(u),v=-Math.sin(u),S=f*h.x+m*h.z,y=v*h.x+p*h.z,A=Math.hypot(S,y),M=A>0?S/A:0,g=A>0?y/A:0,k=M*d*e,x=g*d*e;this.velocityY+=this.gravity*e;const b=this.velocityY*e;this.resolveAxis("x",k),this.resolveAxis("z",x);const D=this.resolveAxis("y",b);b<0&&D?(this.grounded=!0,this.velocityY=0):b!==0&&(this.grounded=!1);const P=this.getBaseY();if(P<0){const Z=-P;this.camera.position.y+=Z,this.velocityY=0,this.grounded=!0}const U=this.camera.position,L=this.getBaseY(),T=L+this.height,W=U.x-this.halfWidth,G=U.x+this.halfWidth,j=U.z-this.halfWidth,J=U.z+this.halfWidth;if(this.aabbIntersectsSolid(W,L,j,G,T,J)){let Z=Math.floor(T)+1,ie=0;const ye=10;for(;ie<ye;){const Se=Z-this.height,ke=Z;if(!this.aabbIntersectsSolid(W,Se,j,G,ke,J)){this.camera.position.y=Z-this.height+this.eyeHeight,this.velocityY=0,this.grounded=!0;break}Z++,ie++}}this.applyElevationTween(e)}updateUnderwater(e){const t=R.swim,s=this.input.getMoveInput(),o=this.input.isSprinting()?t.sprintMultiplier:1,i=new I;this.camera.getWorldDirection(i),i.normalize();const a=new I(0,1,0),n=new I().crossVectors(i,a).normalize(),r=new I().addScaledVector(n,s.x).addScaledVector(i,s.z);r.lengthSq()>0&&r.normalize();const l=t.accel*o;if(r.lengthSq()>0&&this.swimVelocity.addScaledVector(r,l*e),this.input.isJumpHeld()){this.swimVelocity.y+=t.verticalAccel*e*o;const ue=F+1-.001-this.camera.position.y;ue>0&&(this.swimVelocity.y+=t.surfaceSnapStrength*ue*e)}const h=this.gravity*t.gravityScale;this.swimVelocity.y+=h*e;const u=F+1-.001-this.camera.position.y;u>0&&u<t.floatBand&&this.swimVelocity.y<0&&(this.swimVelocity.y+=t.floatStrength*u*e);const m=Math.hypot(s.x,s.z);!this.input.isJumpHeld()&&m<.01&&(this.swimVelocity.y-=Math.max(0,R.swim.sinkBias)*e);const p=Math.max(0,Math.min(10,t.drag)),f=Math.max(0,1-p*e);this.swimVelocity.multiplyScalar(f);const v=t.maxSpeed*o,S=new I(this.swimVelocity.x,0,this.swimVelocity.z),y=S.length();if(y>v&&(S.multiplyScalar(v/y),this.swimVelocity.x=S.x,this.swimVelocity.z=S.z),this.swimVelocity.y=C.clamp(this.swimVelocity.y,-v,v),this.emergeLiftRemaining>0){const ae=Math.min(t.emergeLiftSpeed*e,this.emergeLiftRemaining),ue=this.camera.position.y;this.resolveAxis("y",ae);const de=this.camera.position.y-ue;this.emergeLiftRemaining-=Math.max(0,de);const le=t.emergeNudgeSpeed*e;(this.emergeNudgeDir.x!==0||this.emergeNudgeDir.z!==0)&&(this.resolveAxis("x",this.emergeNudgeDir.x*le),this.resolveAxis("z",this.emergeNudgeDir.z*le)),this.emergeLiftRemaining<=0&&(this.emergeLiftRemaining=0,this.emergeNudgeDir.set(0,0,0))}const A=this.swimVelocity.x*e,M=this.swimVelocity.y*e,g=this.swimVelocity.z*e,k=this.resolveAxis("x",A);k&&(this.swimVelocity.x=0);const x=this.resolveAxis("z",g);x&&(this.swimVelocity.z=0);const b=this.getBaseY(),D=F+1-.001,P=D-this.camera.position.y<R.swim.floatBand+.75,U=this.hasSolidGroundBelow(),L=r.lengthSq()>1e-6,T=Math.abs(D-this.camera.position.y)<.5;if(this.emergeLiftRemaining<=0&&this.stepCooldown<=0&&(L||this.input.isJumpHeld())&&(k||x||U||T)&&(P||this.input.isJumpHeld())){const ae=Math.max(0,D-b),ue=Math.max(0,D+R.swim.stepOutHeadroom-b),de=Math.min(R.swim.maxEmergeStepOut,Math.max(.25,ue)),le=Math.min(R.swim.maxEmergeStepOut,Math.max(.25,ae)),Te=[de,le,1.25,1,.75,.5,.25];let Ie=0;for(const Oe of Te)if(this.canStepUpEmerge(Oe,r)){Ie=Oe;break}Ie>0&&(this.emergeLiftRemaining=Ie,this.emergeNudgeDir.copy(r),this.startElevationTween(Ie),this.stepCooldown=.15)}this.resolveAxis("y",M)&&(this.swimVelocity.y=0),this.grounded=!1;const G=this.getBaseY();if(G<0){const ae=-G;this.camera.position.y+=ae,this.swimVelocity.y=Math.max(0,this.swimVelocity.y)}const j=this.camera.position,J=this.getBaseY(),Z=J+this.height,ie=j.x-this.halfWidth,ye=j.x+this.halfWidth,Se=j.z-this.halfWidth,ke=j.z+this.halfWidth;if(this.aabbIntersectsSolid(ie,J,Se,ye,Z,ke)){let ae=Math.floor(Z)+1,ue=0;const de=10;for(;ue<de;){const le=ae-this.height,Te=ae;if(!this.aabbIntersectsSolid(ie,le,Se,ye,Te,ke)){this.camera.position.y=ae-this.height+this.eyeHeight,this.swimVelocity.y=0;break}ae++,ue++}}}resolveAxis(e,t){if(t===0)return!1;const s=this.camera.position,o=e==="x"?s.x+t:s.x,i=e==="y"?s.y+t:s.y,a=e==="z"?s.z+t:s.z,n=o-this.halfWidth,r=o+this.halfWidth,l=this.getBaseY(i),h=l+this.height,d=a-this.halfWidth,u=a+this.halfWidth;if(this.bounds&&(e==="x"||e==="z")){const p=this.halfWidth+fe.EPS;if(e==="x"){const f=this.bounds.minX+p,v=this.bounds.maxX-p;if(o<f)return this.camera.position.x=f,!0;if(o>v)return this.camera.position.x=v,!0}else if(e==="z"){const f=this.bounds.minZ+p,v=this.bounds.maxZ-p;if(a<f)return this.camera.position.z=f,!0;if(a>v)return this.camera.position.z=v,!0}}if(!this.aabbIntersectsSolid(n,l,d,r,h,u))return s.set(o,i,a),!1;const m=Math.sign(t);switch(e){case"x":{if(m>0){const f=Math.floor(r)-this.halfWidth-fe.EPS;s.x=f}else{const f=Math.floor(n)+1+this.halfWidth+fe.EPS;s.x=f}return!0}case"z":{if(m>0){const f=Math.floor(u)-this.halfWidth-fe.EPS;s.z=f}else{const f=Math.floor(d)+1+this.halfWidth+fe.EPS;s.z=f}return!0}case"y":{if(m>0){const f=Math.floor(h)-this.height-fe.EPS;s.y=f+this.eyeHeight}else{const f=Math.floor(l)+1+fe.EPS;s.y=f+this.eyeHeight}return!0}}}getBaseY(e=this.camera.position.y){return e-this.eyeHeight}startElevationTween(e,t=.12){this.elevationTween.from=-e,this.elevationTween.elapsed=0,this.elevationTween.duration=Math.max(.06,t),this.elevationTween.active=!0}applyElevationTween(e){if(!this.elevationTween.active)return;this.elevationTween.elapsed+=e;const t=Math.min(1,this.elevationTween.elapsed/this.elevationTween.duration),o=(a=>1-Math.pow(1-a,3))(t),i=this.elevationTween.from*(1-o);this.renderYOffsetY=i,this.camera.position.y+=this.renderYOffsetY,t>=1&&(this.elevationTween.active=!1,this.renderYOffsetY=0)}isHeadInsideWater(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=F+1)return!1;const s=Math.floor(t),o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),l=Math.floor(e.z+n);if(this.world.getBlock(r,s,l)===this.waterId)return!0}return!1}isHeadInFloodedAir(){const e=this.camera.position,t=e.y+(this.height-this.eyeHeight);if(t>=F+1)return!1;const s=Math.floor(t),o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),l=Math.floor(e.z+n);if(this.world.isAirFlooded(r,s,l))return!0}return!1}isBaseSubmerged(){const e=this.camera.position,t=this.getBaseY(e.y)+.001,s=Math.floor(t);if(s>F)return!1;const o=Math.min(.18,this.halfWidth*.9),i=[[0,0],[o,0],[-o,0],[0,o],[0,-o]];for(const[a,n]of i){const r=Math.floor(e.x+a),l=Math.floor(e.z+n);if(this.world.isAirFlooded(r,s,l)||this.world.getBlock(r,s,l)===this.waterId)return!0}return!1}aabbIntersectsSolid(e,t,s,o,i,a){const n=Math.floor(e),r=Math.floor(t),l=Math.floor(s),h=Math.floor(o),d=Math.floor(i),u=Math.floor(a);for(let m=r;m<=d;m++)for(let p=l;p<=u;p++)for(let f=n;f<=h;f++)if(this.world.isBlockSolid(f,m,p))return!0;return!1}hasSolidGroundBelow(e=.01){const t=this.camera.position,s=this.halfWidth,o=this.getBaseY(t.y)-e,i=Math.floor(o),a=Math.floor(t.x-s),n=Math.floor(t.x+s),r=Math.floor(t.z-s),l=Math.floor(t.z+s);for(let h=r;h<=l;h++)for(let d=a;d<=n;d++)if(this.world.isBlockSolid(d,i,h))return!0;return!1}tryStepUp(e,t){if(e<=0)return!1;const s=this.camera.position,o=s.y+e,i=.08,a=t&&t.lengthSq()>1e-6?s.x+t.x*i:s.x,n=t&&t.lengthSq()>1e-6?s.z+t.z*i:s.z,r=fe.EPS*4,l=a-this.halfWidth+r,h=a+this.halfWidth-r,d=n-this.halfWidth+r,u=n+this.halfWidth-r,m=this.getBaseY(o)+r,p=m+this.height-r;if(this.aabbIntersectsSolid(l,m,d,h,p,u))return!1;const f=Math.floor(m-.01);let v=!1;for(let S=Math.floor(d);S<=Math.floor(u);S++){for(let y=Math.floor(l);y<=Math.floor(h);y++)if(this.world.isBlockSolid(y,f,S)){v=!0;break}if(v)break}return v?(this.camera.position.y=o,!0):!1}canStepUpEmerge(e,t){if(e<=0)return!1;const s=this.camera.position,o=s.y+e,i=.08,a=!!t&&t.lengthSq()>1e-6,n=a?s.x+t.x*i:s.x,r=a?s.z+t.z*i:s.z,l=fe.EPS*4,h=n-this.halfWidth+l,d=n+this.halfWidth-l,u=r-this.halfWidth+l,m=r+this.halfWidth-l,p=this.getBaseY(o)+l,f=p+this.height-l;if(this.aabbIntersectsSolid(h,p,u,d,f,m))return!1;const v=Math.floor(p-.01);let S=!1;for(let M=Math.floor(u);M<=Math.floor(m);M++){for(let g=Math.floor(h);g<=Math.floor(d);g++)if(this.world.isBlockSolid(g,v,M)){S=!0;break}if(S)break}if(S)return!0;const y=[];a?y.push(t.clone().setY(0).normalize()):y.push(new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1));const A=.5;for(const M of y){const g=n+M.x*A,k=r+M.z*A,x=Math.floor(g-this.halfWidth+l),b=Math.floor(g+this.halfWidth-l),D=Math.floor(k-this.halfWidth+l),P=Math.floor(k+this.halfWidth-l);for(let U=v;U>=v-1;U--)for(let L=D;L<=P;L++)for(let T=x;T<=b;T++)if(this.world.isBlockSolid(T,U,L))return!0}return!1}tryStepUpMulti(e,t){for(const s of e)if(this.tryStepUp(s,t))return t.x!==0&&this.resolveAxis("x",t.x*.08),t.z!==0&&this.resolveAxis("z",t.z*.08),s;return 0}isGrounded(){return this.grounded}setBounds(e){this.bounds=e}}function Ro(c,e,t){const s=Math.hypot(c,e,t);return s===0?{x:0,y:0,z:0}:{x:c/s,y:e/s,z:t/s}}function at(c){return Math.floor(c)}function To(c,e,t,s=Gt.reach){const o=Ro(t.x,t.y,t.z);if(o.x===0&&o.y===0&&o.z===0)return{hit:!1};let i=at(e.x),a=at(e.y),n=at(e.z);const r=o.x>0?1:-1,l=o.y>0?1:-1,h=o.z>0?1:-1,d=i+(r>0?1:0),u=a+(l>0?1:0),m=n+(h>0?1:0),p=o.x!==0?(d-e.x)/o.x:Number.POSITIVE_INFINITY,f=o.y!==0?(u-e.y)/o.y:Number.POSITIVE_INFINITY,v=o.z!==0?(m-e.z)/o.z:Number.POSITIVE_INFINITY,S=o.x!==0?1/Math.abs(o.x):Number.POSITIVE_INFINITY,y=o.y!==0?1/Math.abs(o.y):Number.POSITIVE_INFINITY,A=o.z!==0?1/Math.abs(o.z):Number.POSITIVE_INFINITY;let M=p,g=f,k=v,x=0,b=i,D=a,P=n;const U=Math.ceil(s*3+10);for(let L=0;L<U&&(M<g?M<k?(b=i,D=a,P=n,i+=r,x=M,M+=S):(b=i,D=a,P=n,n+=h,x=k,k+=A):g<k?(b=i,D=a,P=n,a+=l,x=g,g+=y):(b=i,D=a,P=n,n+=h,x=k,k+=A),!(x>s));L++){const T=c.getBlock(i,a,n),W=Ze(T);if(!!W&&(c.isBlockSolid(i,a,n)||W.name==="grass_tuft"))return{hit:!0,hitCell:{x:i,y:a,z:n},placeCell:{x:b,y:D,z:P},t:x}}return{hit:!1}}class Eo{camera;world;scene;bounds=null;reach=Gt.reach;selection={hit:!1};boxMesh=null;constructor(e,t,s,o){this.camera=e,this.world=t,this.scene=s,o&&(this.bounds=o),this.boxMesh=this.createWireBox(),this.boxMesh.visible=!1,this.scene.add(this.boxMesh)}update(){const e=new I(0,0,-1).applyEuler(this.camera.rotation).normalize(),t=this.camera.position,s=To(this.world,t,e,this.reach);let o=s.hit,i=s.hitCell,a=s.placeCell;if(this.bounds&&s.hit&&s.hitCell){const{minX:n,maxX:r,minZ:l,maxZ:h}=this.bounds;s.hitCell.x>=n&&s.hitCell.x<r&&s.hitCell.z>=l&&s.hitCell.z<h||(o=!1,i=void 0,a=void 0)}this.selection={hit:o,hitCell:i,placeCell:a},this.updateDebugMesh()}getSelection(){return this.selection}destroy(){this.boxMesh&&(this.scene.remove(this.boxMesh),this.boxMesh.geometry.dispose(),this.boxMesh.material.dispose(),this.boxMesh=null)}updateDebugMesh(){if(!this.boxMesh)return;if(!this.selection.hit||!this.selection.hitCell){this.boxMesh.visible=!1;return}const{x:e,y:t,z:s}=this.selection.hitCell;this.boxMesh.visible=!0,this.boxMesh.position.set(e+.5,t+.5,s+.5)}createWireBox(){const e=new ks(new Ht(1.0001,1.0001,1.0001)),t=new zs({color:16776960}),s=new Ds(e,t);return s.renderOrder=9999,s}}class Fo{camera;world;input;selection;pipeline;playerController;airId=0;waterId=ce("water")??5;grassId=ce("grass")??1;dirtId=ce("dirt")??2;stoneId=ce("stone")??3;sandId=ce("sand")??4;woodId=ce("wood")??6;leavesId=ce("leaves")??7;leavesMapleId=ce("leaves_maple")??8;grassTuftId=ce("grass_tuft")??9;currentHit=null;nextActionAllowedAt=0;lastSwingStartAt=0;constructor(e,t,s,o,i,a){this.camera=e,this.world=t,this.input=s,this.selection=o,this.pipeline=i,this.playerController=a??null}update(){const e=(typeof performance<"u"?performance.now():Date.now())/1e3;{const t=this.input.consumeLeftClick(),s=this.input.isLeftHeld?.()??!1;if(t||s){if(!(window.__isBodySwingActive?.()??!1)&&(this.lastSwingStartAt===0||e-this.lastSwingStartAt>=Xe)){window.__bodyPrimary?.(),this.lastSwingStartAt=e;const a=this.selection.getSelection();if(a.hit&&a.hitCell){const{x:n,y:r,z:l}=a.hitCell,h=this.world.getBlock(n,r,l);if(h!==this.airId){this.currentHit&&this.currentHit.x===n&&this.currentHit.y===r&&this.currentHit.z===l&&this.currentHit.id===h?this.currentHit.count+=1:this.currentHit={x:n,y:r,z:l,id:h,count:1};const d=this.getRequiredStrikes(h);if(this.currentHit.count>=d){const u=this.world.isBlockSolid(n,r,l);u&&window.__sfxBreak?.(),this.world.setBlock(n,r,l,this.airId),u&&this.shouldFillWithWater(n,r,l)&&this.world.setBlock(n,r,l,this.waterId),this.propagateSurfaceWaterFromConnection(n,r,l),As(h,1),this.remeshAffectedChunks(n,r,l),this.currentHit=null}}}}}else this.lastSwingStartAt=0}if(this.input.consumeRightClick()&&!(e<this.nextActionAllowedAt)){this.nextActionAllowedAt=e+Xe;const t=this.selection.getSelection();if(t.hit&&t.placeCell){const{x:s,y:o,z:i}=t.placeCell,a=yt(),n=this.evaluatePlacement(s,o,i,a??void 0);if(n.canPlace){const r=yt();r!==null&&Ls()&&(n.elevatePlayer&&(this.camera.position.y+=1,this.playerController?.startElevationTween(1)),this.world.setBlock(s,o,i,r),this.remeshAffectedChunks(s,o,i),window.__sfxPlace?.())}}}}getRequiredStrikes(e){return e===this.leavesId||e===this.leavesMapleId||e===this.grassId||e===this.grassTuftId?1:e===this.dirtId||e===this.sandId?2:e===this.stoneId||e===this.woodId?3:1}shouldFillWithWater(e,t,s){if(t!==F)return!1;const o=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(const[i,a]of o)if(this.world.getBlock(e+i,t,s+a)===this.waterId)return!0;return!1}propagateSurfaceWaterFromConnection(e,t,s){if(t>F+1)return;const o=F,i=this.airId,a=this.waterId,n=64,r=e-n,l=e+n,h=s-n,d=s+n,u=(g,k,x)=>`${g},${k},${x}`,m=[],p=new Set,f=[],v=new Set;let S=!1;const y=(g,k,x)=>{if(k<0||k>o||g<r||g>l||x<h||x>d)return;const b=u(g,k,x);p.has(b)||this.world.isBlockSolid(g,k,x)||(p.add(b),m.push({x:g,y:k,z:x}))};y(e,Math.min(t,o),s),y(e+1,Math.min(t,o),s),y(e-1,Math.min(t,o),s),y(e,Math.min(t,o),s+1),y(e,Math.min(t,o),s-1),y(e,Math.min(t+1,o),s),y(e,Math.max(t-1,0),s);const A=12e4;for(;m.length>0&&p.size<=A;){const g=m.shift(),k=this.world.getBlock(g.x,g.y,g.z);k===a?S=!0:k===i&&(f.push(g),v.add(`${g.x},${g.z}`)),y(g.x+1,g.y,g.z),y(g.x-1,g.y,g.z),y(g.x,g.y,g.z+1),y(g.x,g.y,g.z-1),y(g.x,g.y+1,g.z),y(g.x,g.y-1,g.z)}if(!S)return;f.length>0&&this.world.addFloodedAir(f);const M=[];for(const g of v){const[k,x]=g.split(","),b=parseInt(k,10),D=parseInt(x,10);if(b<r||b>l||D<h||D>d)continue;this.world.getBlock(b,o,D)===i&&(this.world.setBlock(b,o,D,a),M.push({x:b,y:o,z:D}))}if(M.length>0){const g=new Set;for(const k of M){const{cx:x,cy:b,cz:D}=We(k.x,k.y,k.z);g.add(`${x},${b},${D}`)}for(const k of g){const[x,b,D]=k.split(",").map(U=>parseInt(U,10)),P=this.world.getChunk(x,b,D);P&&this.pipeline.requestRemesh(x,b,D,P.getData())}}}remeshAffectedChunks(e,t,s){const{cx:o,cy:i,cz:a,lx:n,ly:r,lz:l}=We(e,t,s),h=this.world.getChunk(o,i,a);h&&this.pipeline.requestRemesh(o,i,a,h.getData());const d=[];n===0&&d.push([o-1,i,a]),n===w.x-1&&d.push([o+1,i,a]),r===0&&d.push([o,i-1,a]),r===w.y-1&&d.push([o,i+1,a]),l===0&&d.push([o,i,a-1]),l===w.z-1&&d.push([o,i,a+1]);for(const[u,m,p]of d){const f=this.world.getChunk(u,m,p);f&&this.pipeline.requestRemesh(u,m,p,f.getData())}}evaluatePlacement(e,t,s,o){if(this.world.getBlock(e,t,s)!==this.airId)return{canPlace:!1,elevatePlayer:!1};if(o===this.grassTuftId)return this.world.getBlock(e,t-1,s)!==this.grassId?{canPlace:!1,elevatePlayer:!1}:{canPlace:!0,elevatePlayer:!1};if(o!==void 0&&this.world.getBlock(e,t-1,s)===this.grassTuftId){const W=!!Ze(o)?.solid,G=o===this.grassId;if(W||G)return{canPlace:!1,elevatePlayer:!1}}const i=R.width/2,a=Math.min(R.height*.9,R.height-.1),n=this.camera.position,r=n.x-i,l=n.x+i,h=n.y-a,d=h+R.height,u=n.z-i,m=n.z+i,p=e,f=e+1,v=t,S=t+1,y=s,A=s+1,M=1e-5;if(l<=p+M||r>=f-M||d<=v+M||h>=S-M||m<=y+M||u>=A-M)return{canPlace:!0,elevatePlayer:!1};const k=h,x=Math.floor(k),b=t===x,D=e+.5,P=s+.5,U=D>r+M&&D<l-M&&P>u+M&&P<m-M;if(b&&U){const T=k+1,W=T+R.height;if(!this.aabbIntersectsSolid(r,T,u,l,W,m))return{canPlace:!0,elevatePlayer:!0}}return{canPlace:!1,elevatePlayer:!1}}aabbIntersectsSolid(e,t,s,o,i,a){const n=Math.floor(e),r=Math.floor(t),l=Math.floor(s),h=Math.floor(o),d=Math.floor(i),u=Math.floor(a);for(let m=r;m<=d;m++)for(let p=l;p<=u;p++)for(let f=n;f<=h;f++)if(this.world.isBlockSolid(f,m,p))return!0;return!1}}const Wo="/assets/grass_leaves-C9h5dzo8.png";class No extends Re{constructor(e){super({vertexShader:`
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
    `,transparent:!1,depthWrite:!0,side:ut,uniforms:{map:{value:e},sunDirection:{value:new I(0,1,0)},sunColor:{value:new N(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.15},cloudShadowEnabled:{value:!1},cloudShadowIntensity:{value:.35},cloudShadowAltitude:{value:200},cloudShadowScale:{value:100},cloudCoverage:{value:.45},cloudDensity:{value:.65},cloudWind:{value:new oe(3.5355,3.5355)}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setSun(e,t){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t)}setDayNight(e,t){this.uniforms.dayLight.value=C.clamp(e,0,1),this.uniforms.starLight.value=C.clamp(t,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=C.clamp(e,0,1)}setCloudShadowUniforms(e){const t=this.uniforms;e.enabled!==void 0&&(t.cloudShadowEnabled.value=!!e.enabled),e.intensity!==void 0&&(t.cloudShadowIntensity.value=C.clamp(e.intensity,0,1)),e.altitude!==void 0&&(t.cloudShadowAltitude.value=e.altitude),e.scale!==void 0&&(t.cloudShadowScale.value=Math.max(.001,e.scale)),e.coverage!==void 0&&(t.cloudCoverage.value=C.clamp(e.coverage,0,1)),e.density!==void 0&&(t.cloudDensity.value=C.clamp(e.density,0,1)),e.wind&&t.cloudWind.value.copy(e.wind)}}class Uo{scene;material;geometry;groups=new Map;grassTuftId;constructor(e,t,s){this.scene=e,this.grassTuftId=s;const o=document.createElement("canvas");o.width=1,o.height=1;const i=o.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,1,1);const a=new ht(o);a.colorSpace=Ce,a.magFilter=$,a.minFilter=$,this.material=new No(a);const n=new $e().load(Wo);n.flipY=!1,n.colorSpace=Ce,n.magFilter=$,n.minFilter=$,this.material.setMap(n),this.geometry=this.buildXBillboardGeometry(.92,.9),t.on("CHUNK_ADDED",({key:r,chunk:l,coords:h})=>{this.rebuildForChunk(r,l.getData().voxels,h.cx,h.cy,h.cz)}),t.on("CHUNK_REMOVED",({key:r})=>this.removeChunk(r)),t.on("BLOCK_CHANGED",({chunkKey:r})=>{const l=t.getChunkByKey(r);if(!l){this.removeChunk(r);return}this.rebuildForChunk(r,l.getData().voxels,...r.split(",").map(h=>parseInt(h,10)))})}destroy(){for(const e of Array.from(this.groups.keys()))this.removeChunk(e);this.geometry.dispose();try{this.material.uniforms.map?.value?.dispose?.()}catch{}this.material.dispose()}removeChunk(e){const t=this.groups.get(e);t&&(this.scene.remove(t),t.traverse(s=>{s instanceof wt&&(s.geometry.dispose(),s.material.dispose?.())}),this.groups.delete(e))}rebuildForChunk(e,t,s,o,i){this.removeChunk(e);const a=[];for(let h=0;h<w.y;h++)for(let d=0;d<w.z;d++)for(let u=0;u<w.x;u++){const m=h*w.x*w.z+d*w.x+u;t[m]===this.grassTuftId&&a.push({lx:u,ly:h,lz:d})}if(!a.length)return;const n=new wt(this.geometry,this.material,a.length);n.castShadow=!1,n.receiveShadow=!1,n.renderOrder=1;const r=new se;for(let h=0;h<a.length;h++){const d=a[h];r.makeTranslation(d.lx,d.ly,d.lz),n.setMatrixAt(h,r)}n.instanceMatrix.needsUpdate=!0;const l=new ee;l.add(n),l.position.set(s*w.x,o*w.y,i*w.z),this.scene.add(l),this.groups.set(e,l)}buildXBillboardGeometry(e,t){const s=e/2,o=t,i=[],a=[],n=[],r=0;i.push(.5-s,0,.5,.5+s,0,.5,.5+s,o,.5,.5-s,o,.5),a.push(0,1,1,1,1,0,0,0),n.push(r+0,r+1,r+2,r+0,r+2,r+3);const l=4;i.push(.5,0,.5-s,.5,0,.5+s,.5,o,.5+s,.5,o,.5-s),a.push(0,1,1,1,1,0,0,0),n.push(l+0,l+1,l+2,l+0,l+2,l+3);const h=new He;h.setAttribute("position",new et(i,3)),h.setAttribute("uv",new et(a,2));const d=new Float32Array(24);return d.fill(1),h.setAttribute("color",new et(d,3)),h.setIndex(n),h.computeVertexNormals(),h}setSunUniforms(e,t){this.material.setSun(e,t)}setDayNight(e,t){this.material.setDayNight(e,t)}updateShadowUniforms(){}setCloudShadowUniforms(e){this.material.setCloudShadowUniforms(e)}}const nt="/assets/footstep-Fr-5_nTT.mp3",Rt="/assets/water_step-MaHXgPx_.mp3",Tt="/assets/underwater-Cqai0VTA.mp3",Et="/assets/block-C1XDNMNZ.mp3",Ft="/assets/ocean-B93ceUEo.mp3";function Wt(c,e){const t=new Audio(c);return t.loop=!0,t.volume=e,t.preload="auto",t}class Nt{src;desired=!1;current=null;vol=1;constructor(e,t){this.src=e,this.vol=t}setVolume(e){this.vol=Math.max(0,Math.min(1,e)),this.current&&(this.current.volume=this.vol)}setDesired(e){const t=this.desired;this.desired=e,e&&!t&&this.ensurePlaying()}ensurePlaying(){if(!this.desired||this.current&&!this.current.paused&&!this.current.ended)return;const e=new Audio(this.src);e.preload="auto",e.loop=!1,e.volume=this.vol,e.onended=()=>{this.current=null,this.desired&&this.ensurePlaying()},this.current=e,e.play().catch(()=>{})}tick(){this.desired&&this.ensurePlaying()}stopImmediate(){if(this.desired=!1,this.current){try{this.current.pause()}catch{}this.current=null}}}class Vo{world;camera;input;player;lastX;lastY;lastZ;lastGrounded=!1;sfxVolume=.7;footLoop=new Nt(nt,this.sfxVolume);waterLoop=new Nt(Rt,this.sfxVolume);underLoop=Wt(Tt,this.sfxVolume*.8);oceanLoop=Wt(Ft,this.sfxVolume*.6);oceanSampleTimer=0;oceanProximity=0;oceanVolCurrent=0;waterId=ce("water")??5;constructor(e,t,s,o){this.world=e,this.camera=t,this.input=s,this.player=o,this.lastX=t.position.x,this.lastY=t.position.y,this.lastZ=t.position.z}setVolume(e){const t=Math.max(0,Math.min(1,e));this.sfxVolume=t,this.footLoop.setVolume(t),this.waterLoop.setVolume(t),this.underLoop.volume=Math.max(0,Math.min(1,t*.8)),this.oceanLoop.volume=Math.max(0,Math.min(1,t*.6))}getVolume(){return this.sfxVolume}primedOnce=!1;tryUnlockOnUserGesture(){if(this.primedOnce)return;this.primedOnce=!0;const e=t=>{try{const s=new Audio(t);s.preload="auto",s.muted=!0,s.play().then(()=>{s.pause(),s.currentTime=0,s.muted=!1}).catch(()=>{})}catch{}};e(nt),e(Rt),e(Tt),e(Ft)}setLoopPlaying(e,t){t?e.paused&&e.play().catch(()=>{}):e.paused||e.pause()}playOneShot(e,t){try{const s=new Audio(e);s.volume=Math.max(0,Math.min(1,t)),s.play().catch(()=>{})}catch{}}playBreak(){this.playOneShot(Et,this.sfxVolume)}playPlace(){this.playOneShot(Et,this.sfxVolume)}update(e,t,s){if(t||!s){this.footLoop.setDesired(!1),this.waterLoop.setDesired(!1),this.setLoopPlaying(this.underLoop,!1),this.setLoopPlaying(this.oceanLoop,!1),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=this.player.isGrounded();return}const o=this.camera.position.x-this.lastX,i=this.camera.position.z-this.lastZ,a=this.camera.position.y-this.lastY,n=e>0?Math.hypot(o,i)/e:0,r=this.player.isGrounded(),l=this.isTouchingWaterSurface(),h=this.isEyesInWater()||this.isEyesInFloodedAir(),d=this.input.getMoveInput?.()||{x:0,z:0},u=Math.hypot(d.x,d.z)>.05,m=r&&(n>.2||u);h?(this.setLoopPlaying(this.underLoop,!0),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)):l&&(n>.1||u)?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!0),this.footLoop.setDesired(!1)):m?(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!0)):(this.setLoopPlaying(this.underLoop,!1),this.waterLoop.setDesired(!1),this.footLoop.setDesired(!1)),this.footLoop.tick(),this.waterLoop.tick(),this.setLoopPlaying(this.oceanLoop,!0),this.updateOceanVolume(e,h),!this.lastGrounded&&r&&a<-.02&&!h&&!l&&this.playOneShot(nt,this.sfxVolume),this.lastX=this.camera.position.x,this.lastY=this.camera.position.y,this.lastZ=this.camera.position.z,this.lastGrounded=r}updateOceanVolume(e,t){this.oceanSampleTimer-=e,this.oceanSampleTimer<=0&&(this.oceanSampleTimer=.25,this.oceanProximity=this.sampleOceanProximity());let o=Math.max(0,Math.min(1,this.sfxVolume*.6))*this.oceanProximity;t&&(o*=.35);const i=1-Math.pow(.001,e);this.oceanVolCurrent+=(o-this.oceanVolCurrent)*i,this.oceanLoop.volume=Math.max(0,Math.min(1,this.oceanVolCurrent))}sampleOceanProximity(){const e=this.camera.position.x,t=this.camera.position.z,s=5,o=120,i=2,a=24,n=60,r=2,l=.7;let h=o;for(let p=0;p<a;p++){const f=p/a*Math.PI*2,v=Math.cos(f),S=Math.sin(f);let y=null;for(let x=i;x<=o;x+=i){const b=Math.floor(e+v*x),D=Math.floor(t+S*x);if(this.world.getBlock(b,F,D)===s){y=x;break}}if(y===null)continue;let A=0,M=0;for(let x=y;x<=Math.min(y+n,o);x+=r){const b=Math.floor(e+v*x),D=Math.floor(t+S*x),P=this.world.getBlock(b,F,D);A++,P===s&&M++}(A>0?M/A:0)>=l&&y<h&&(h=y)}const u=1-Math.min(1,h/80);return Math.max(.05,u)}isTouchingWaterSurface(){const e=Math.min(R.height*.9,R.height-.1),t=R.width/2,s=this.camera.position.y-e,o=this.camera.position.x-t,i=this.camera.position.x+t,a=this.camera.position.z-t,n=this.camera.position.z+t,r=s;if(s+R.height<=F||r>=F+1)return!1;const h=Math.floor(o),d=Math.floor(i),u=Math.floor(a),m=Math.floor(n);for(let p=u;p<=m;p++)for(let f=h;f<=d;f++)if(this.world.getBlock(f,F,p)===this.waterId)return!0;return!1}isEyesInWater(){const e=Math.min(R.height*.9,R.height-.1),t=this.camera.position.y+(R.height-e);if(t>=F+1)return!1;const s=Math.floor(t),o=R.width/2,i=Math.min(.18,o*.9),a=this.camera.position.x,n=this.camera.position.z,r=[[0,0],[i,0],[-i,0],[0,i],[0,-i]];for(const[l,h]of r){const d=Math.floor(a+l),u=Math.floor(n+h);if(this.world.getBlock(d,F,u)===this.waterId){let m=!1;for(let p=Math.floor(t);p<F;p++)if(this.world.isBlockSolid(d,p,u)){m=!0;break}if(!m)return!0}if(this.world.getBlock(d,s,u)===this.waterId)return!0}return!1}isEyesInFloodedAir(){const e=Math.min(R.height*.9,R.height-.1),t=this.camera.position.y+(R.height-e);if(t>=F+1)return!1;const s=Math.floor(t),o=R.width/2,i=Math.min(.18,o*.9),a=this.camera.position.x,n=this.camera.position.z,r=[[0,0],[i,0],[-i,0],[0,i],[0,-i]];for(const[l,h]of r){const d=Math.floor(a+l),u=Math.floor(n+h);if(this.world.isAirFlooded(d,s,u))return!0}return!1}dispose(){try{this.footLoop.stopImmediate()}catch{}try{this.waterLoop.stopImmediate()}catch{}try{this.underLoop.pause()}catch{}try{this.oceanLoop.pause()}catch{}}}const Oo="/assets/arm-BGtqJ4AM.png",_o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAJsElEQVR42m1ZO681RxGs7pmd2esPYyyMLcggICRBIvGvJyYhIbNkWciWJSQkQOLuPJtgtub0fuZKV/dxzs70o7q6uo98/fsvLcaAOQ3nmWFzoo+BI0bADKKCOSbmHACA88wYfeBIB1qtmHMCIjjigdYb5jSEECCiqK0ipwwDMOZEqxUaAgDBGB0hREQA+OPvvoAACEEx50TOCWKA2QSA9TeAMTrmmBABckpQFfTeMadBQ4BqQG0VvQ8YABFFjBG9D0AF11WQUsJ1FUAEf/nmH1ARwXEct9UCEUG9PZtz4jgOtNbA9x3HAZF1sZnhV7/4FDFGqCqu60KM8fE954SZQURwnifmnAghwMygqssAEcGcE2MMqC6raVStFd/++C+UUlBKQe8dqgoAK/wAVBVmhvM8UWtFCAHffP/PbWSMEQBwXdcdsYmU0jJCRGBmALANoYcAkFJ6/GSkjuNAjBHXdaG1BgCotSKlBBHZl/KcMQbO80TOeZ9lZlAfYj5sZvtBM4OZodaKnDNCCNt7GptSQq0VqrqfZ6gZxTknruvaxpgtsCovGGPsA1X1gQn+j6+HEDDGQGsNKSWUUpBzxhgDtVaUUrbhvfcdbjrLVJsZYq11W0OvRSJEFWOMfeG6PG4PFhixDyulLNQfEWYNOWf03iEiGGMgpbSqRRW9Xy9Dcs77EiITAFprOI7jATIaGGPEGANjjG3ceZ77WX4xigQef1fVHWUlUnlYjBEiskElImit7dfMDKWUXV6llNu7+UgbnWEpb9CpIqW0jVUzQ0oJKaUdMjNDznnXMfPbWnNpkl3bzD2/WFWquvNOR/laKWWlYM6J3jtKKYgxota6/+bXnHOngSU259xlSCMZNe/xGANMc2sNvI9coz40Poz8SZB5HmBNs+753lLKZsrW2naCZJRSWpfeGFBVRFq7MPCq4+M4UGt54CHnjFYbUjocshcWain7YkD2ZSzvCYOI3kYJ+p02ZZ3mnKF36YUQcF0Xcs7IOaOUghDC9ogVQBzQGOadZOW5hd8hhB01VV0p6L2DfOBpk+XjGZEI5sVEOcvLg42VQ1x549lzlGAiUHj4dV07It568gHLlZiIMW6vWmu7P/B8smEIYZf1nBOROV4eyA0OgUL2wQwv3zfnvNOiUH3b/x9jwmB32/23IyZB6x29M1WyKySyWQiAt7fzDisw+4Cq7BSsEBqCrgYTQwBgWwPU1lZUVDYnsCmJEPV2V0pCv51TCgciljTLcDNC7HqbQm9eYNmRG9jSCcg5J2qtmwM8WfXeoWwKZMFaK7xRPIAPMXfseAQV23MpBed53tLrepAScUDRspmQYGID8iCiIZRdRP95ng9qZbQYSdI5ldJxHPt3tvAb9LrDzH7Ay3goBQvD6wUIL6GHrbVHOXop5rvqeZ7rnqcOkB0yeurruta688n3+nAyYv+PytniaRQN3UxIycQIeCXjNQGjw0PZ4xkptmj/fxpEXiBBlVIQidQ1dJwbrYuYsAG5umXYPWMRFDDUdjMzw60ZXh10EVNHiAGt9dtIAJR6vNx7TTSXR4N5IpnVQM8YJa8LWGHee5bsFi3szwz9dV1bzfr+ztDTM1IsMUNHvHYgN1Co+mcpZpT8zzKhnmfuYoybu+k1+wMP5rPeiJSSE6+v2cOXdSllVYFvICSXj3UAZRfzStTzYIoVvsZ2ziqhIZ4VQwgvIvp4MmK7pH7rvW+S8jn0mp8GsgSv69rcwFJnaokr9T3Ah5wl6fnfh9h7xLRwnqQOpGwjE7I0H7KMl/uwUOOzIrzA5MO8hOnxjYbVwMgwpXSS71fV1Q2ZT9ImmY7/JwBJ2733PfN5cDFdXrwyLcy9H9lLKQsDXm77rseLvCpiiZEjOLzwO+f8CDGxQYx5otsp4IW0nAbRW2+YLyWPfpJOKeXRvlkF/Ps8zye/UGiM3jGGPXQf8+k5f/SBlI67Sg4AtismhAiDIYSI3v+DEMKNEY7qcWvNefOGUhHzIj7kU8O6ptanMYyOfx/PYei9ZmC0PcCVrMSw8nDWN9mRFxBY/lC+Rsaste5lhE8vp2i2eQALA16GUzh4McqqoJEsU6aLcyVzS4deolQe/cWvAiK9YDfcvXvaRjwfmHMCBswJhPu1lDLkv/WVDthjj7Sm4IlhEzmfj6FFRKBepXp15HPJ0LKO2Rn9xox0Pud8jONMMUPvmxcARA4dDCGZq7aOnNMG2EJ6vnHQke6d4U7dGEgpY9TxaGaL9QyK1/Liui7gxk1kX1+5YkcTYNqjgawoKFTUTb0DH9KJ41iTD0nJC5yViohh8yFIcKda2dNZVkTwx9qAVeEXV34K9nrCd1cv0/k/r7pjSgm//PQNMQYIsLwHkNOtePXAV59/uEexJTKCKgCDGAAYvvz8A97fLxyffbJA9rMTX3z2CUKImGYoRaAh3guNjFIrRBZ2oojgz3/7/ma3gNYq4DxRFeBeXAuAIyXMMWA2YdyoqK4DRTDHuPM7MeZAjMfeL4x7ThQBam1obUD90oG9mlOP7wce4WRJhtFvzqiu2Dn9Xphkxao6jmOtaP76Y4PIQGv9J3LLN6LXMmrt+/1+qfeBEC6ngt8frdsvwwFD7wN/+u1na03nt2IEDOvXMxfXNNd1bUnmQUcwfqycGT1f0lRLkURExHLep0G7aTiNaIYHFb/CPH8yRdFBRoF7BqAjhA/LgGVp2CKDS6c9w9+XkW5b6w+eZyo4XZMliRcawl3SOhuvdswX/JRMCUXlwtBRSPiJ2dMxBQkN+XiNy2cZYfWSi+szho/87QdNMhw1P3NL5PNDCWKH7MgLvaMPWe4HDC6imDtqOz9HMu9+G0Yw8zKfHj/Ck0FjjK9VLa3mVsyrZTPbO2Higt5T0lOE+g9APh7LeTaxM8ZA5OVfffWb7aXf/VKesRJoEHPJwcV/cMEIEXDESwgB7+/vyDnju+++XZXFZvTDD3+/afJV08z3/ohtzwUDgG2wLtwAIq9UEFOllMdCY503oeoWlWs31HAcaQ+o3BFz3CI/+I/svChdWLANRNI20/JaiAcACtV7w+q1PcHovxlWEswSJC/twIs8EdFr5t9/1OM/sEjp56sdz1mXaBhzW8lDqJK8J0sL6E8+CzKbe+dM2iUO+LXOlb1dUwKMrMXJhVXBhSS9oHT3xELeyDnjuq6NC/70W3emz80I+pDQvpX6T7eI7I8/E/Qc4ZnTb159qvwAFEJYmvAPv04I4ROYTYzeARHEEBA0Q4NijtUrVheMeDvfcJULgrcVEVWMPmAwzGkQSWsMKxeCBrTeAQlQEej90f51vWPOif8BXntl5vWwkLIAAAAASUVORK5CYII=",Yo="/assets/torso-BpoI4O1U.png",Ho="/assets/swing-D4rIVQxu.mp3";class Go extends Re{constructor(e){super({vertexShader:`
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
    `,transparent:!1,depthWrite:!0,side:Vt,uniforms:{map:{value:e},sunDirection:{value:new I(0,1,0)},sunColor:{value:new N(1,1,1)},dayLight:{value:1},starLight:{value:0},alphaCutoff:{value:.5}}})}setMap(e){this.uniforms.map.value=e,this.needsUpdate=!0}setLighting(e,t,s,o){this.uniforms.sunDirection.value.copy(e),this.uniforms.sunColor.value.copy(t),this.uniforms.dayLight.value=C.clamp(s,0,1),this.uniforms.starLight.value=C.clamp(o,0,1)}setAlphaCutoff(e){this.uniforms.alphaCutoff.value=C.clamp(e,0,1)}}const z={torso:{width:.32,depth:.22,height:.7},spineLen:.52,neckLen:.12,shoulderOffsetX:.26,torsoBackOffset:.24,arm:{upperLen:.36,lowerLen:.34,handLen:.14,thickness:.08},leg:{thighLen:.48,shinLen:.48,thickness:.18,hipOffsetX:.1},locomotion:{freqWalk:2.4,freqRun:3.6,ampThigh:C.degToRad(26),torsoYaw:C.degToRad(6),torsoRoll:C.degToRad(4),torsoBob:.02,startStopDamping:12},idle:{baseShoulderPitch:C.degToRad(-65),baseShoulderYaw:C.degToRad(-25),baseShoulderRoll:C.degToRad(12),bobSpeed:1.8},swing:{duration:Xe*.55,returnDuration:Xe*.45,amplitudePitch:C.degToRad(78),amplitudeYawAlt:C.degToRad(10),easeIn:3,easeOut:3}};class Xo{playerRoot=null;camera=null;root;pelvis;spine;chest;neck;armAnchor;rArm;lArmAnchor;lArm;lLeg;rLeg;torsoMesh;armMat;legMat;torsoMat;locomotionBlend=0;locomotionPhase=0;movingFlag=!1;lastCamX=0;lastCamZ=0;idleTime=0;swingActive=!1;swingTime=0;swingReturning=!1;swingKind="LMB";swingAudio=null;_v3a=new I;constructor(){const e=f=>{const v=new $e().load(f);return v.colorSpace=Ce,v.magFilter=$,v.minFilter=$,v.generateMipmaps=!1,v.wrapS=we,v.wrapT=we,v},t=e(Oo),s=e(_o),o=e(Yo),i=f=>new Go(f);this.armMat=i(t),this.legMat=i(s),this.torsoMat=i(o),this.root=new ee,this.root.name="FPBody.Root",this.pelvis=new ee,this.pelvis.name="Pelvis",this.spine=new ee,this.spine.name="Spine",this.chest=new ee,this.chest.name="Chest",this.neck=new ee,this.neck.name="Neck",this.armAnchor=new ee,this.armAnchor.name="ArmAnchor",this.rArm=new ee,this.rArm.name="RArm",this.lArmAnchor=new ee,this.lArmAnchor.name="LArmAnchor",this.lArm=new ee,this.lArm.name="LArm",this.lLeg=new ee,this.lLeg.name="LLeg",this.rLeg=new ee,this.rLeg.name="RLeg",this.root.add(this.pelvis),this.pelvis.add(this.spine),this.spine.position.y=z.spineLen,this.spine.add(this.chest),this.chest.position.y=0,this.chest.add(this.neck),this.neck.position.y=z.neckLen,this.torsoMesh=this.createBoxMesh(z.torso.width,z.torso.height,z.torso.depth,this.torsoMat),this.torsoMesh.name="TorsoMesh",this.torsoMesh.position.set(0,-.7*.5,0),this.chest.add(this.torsoMesh),this.chest.add(this.armAnchor),this.armAnchor.position.set(z.shoulderOffsetX+.2,-.4,.4),this.armAnchor.add(this.rArm);const a=z.arm.upperLen+z.arm.lowerLen,n=this.createSegmentMesh(z.arm.thickness,a,z.arm.thickness,this.armMat);n.position.set(0,a,0),n.rotation.z=Math.PI,this.rArm.add(n);const r=z.arm.handLen*.4,l=this.createSegmentMesh(z.arm.thickness*.9,r,z.arm.thickness*.9,this.armMat);l.position.set(0,a+r,0),l.rotation.z=Math.PI,this.rArm.add(l),this.chest.add(this.lArmAnchor),this.lArmAnchor.position.set(-.46,.2,.2),this.lArmAnchor.add(this.lArm);const h=this.createSegmentMesh(z.arm.thickness,a,z.arm.thickness,this.armMat);h.position.set(0,a,0),h.rotation.z=Math.PI,this.lArm.add(h);const d=this.createSegmentMesh(z.arm.thickness*.9,r,z.arm.thickness*.9,this.armMat);d.position.set(0,a+r,0),d.rotation.z=Math.PI,this.lArm.add(d),this.pelvis.add(this.lLeg),this.pelvis.add(this.rLeg),this.lLeg.position.set(-.1,0,0),this.rLeg.position.set(z.leg.hipOffsetX,0,0);const u=z.leg.thighLen+z.leg.shinLen,m=this.createSegmentMesh(z.leg.thickness,u,z.leg.thickness,this.legMat);m.position.set(0,-u*.5,0),this.lLeg.add(m);const p=this.createSegmentMesh(z.leg.thickness,u,z.leg.thickness,this.legMat);p.position.set(0,-u*.5,0),this.rLeg.add(p)}init(e,t){this.playerRoot=e,this.camera=t,this.playerRoot.add(this.root),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}update(e){if(!this.camera||!this.playerRoot)return;const t=this.camera,s=t.position.x-this.lastCamX,o=t.position.z-this.lastCamZ,i=e>0?Math.hypot(s,o)/e:0,a=this.movingFlag&&i>.05?1:0,n=1-Math.pow(.001,e*z.locomotion.startStopDamping);this.locomotionBlend+=(a-this.locomotionBlend)*n;const r=C.lerp(z.locomotion.freqWalk,z.locomotion.freqRun,Math.min(1,i/5));this.locomotionPhase+=e*r*Math.PI*2*this.locomotionBlend;const l=this.locomotionPhase,h=Math.sin(l)*z.locomotion.torsoYaw*this.locomotionBlend,d=Math.sin(l*2)*z.locomotion.torsoRoll*this.locomotionBlend,u=(Math.sin(l*2)*.5+.5)*z.locomotion.torsoBob*this.locomotionBlend,m=t.rotation.y;this.root.rotation.set(0,0,0),this.playerRoot.position.set(t.position.x,t.position.y-(z.spineLen+z.neckLen+u),t.position.z),this.playerRoot.rotation.set(0,m,0);const p=t.rotation.x;this.neck.position.y=z.neckLen,this.neck.rotation.set(p,0,0),this.pelvis.position.set(0,0,z.torsoBackOffset),this.chest.position.set(0,0,0),this.spine.position.y=z.spineLen+u,this.chest.rotation.set(0,h,d),this.applyLegs(l,this.locomotionBlend),this.idleTime+=e;const f=this.computeArmIdle(i);this.updateSwing(e);const v=this.getCurrentSwingRot();this.rArm.rotation.set(f.shoulderPitch+v.pitch,f.shoulderYaw+v.yaw,f.shoulderRoll);{const A=C.clamp(this.locomotionBlend*(.5+.1*i),0,1),M=Math.sin(this.idleTime*z.idle.bobSpeed*(1+.5*A)),g=C.degToRad(22)*this.locomotionBlend,k=Math.sin(l)*g,x=-Math.sin(l)*C.degToRad(3)*this.locomotionBlend,b=M*.035*this.locomotionBlend,D=M*.025*this.locomotionBlend,P=C.degToRad(35)*this.locomotionBlend;this.lArm.rotation.set(-(C.degToRad(165)+k+b),P+x,-(0+D))}const y=C.radToDeg(p)<=-35||this.movingFlag&&this.locomotionBlend>.4;this.setLegsVisible(y),this.lastCamX=t.position.x,this.lastCamZ=t.position.z}setLighting(e,t,s,o){this.armMat.setLighting(e,t,s,o),this.legMat.setLighting(e,t,s,o),this.torsoMat.setLighting(e,t,s,o)}onPrimaryClick(){this.tryStartSwing("LMB")}onSecondaryClick(){this.tryStartSwing("RMB")}isSwingActive(){return this.swingActive}onMovementInputStart(){this.movingFlag=!0}onMovementInputEnd(){this.movingFlag=!1}dispose(){try{this.swingAudio?.pause()}catch{}this.swingAudio=null;try{this.playerRoot?.remove(this.root)}catch{}}createBoxMesh(e,t,s,o){const i=new Ht(e,t,s),a=new Le(i,o);return a.castShadow=!1,a.receiveShadow=!1,a}createSegmentMesh(e,t,s,o){return this.createBoxMesh(e,t,s,o)}applyLegs(e,t){const s=Math.sin(e)*z.locomotion.ampThigh*t,o=Math.sin(e+Math.PI)*z.locomotion.ampThigh*t;this.lLeg.rotation.set(s,0,0),this.rLeg.rotation.set(o,0,0)}computeArmIdle(e){const t=this.idleTime,s=C.clamp(this.locomotionBlend*(.5+.1*e),0,1),o=Math.sin(t*z.idle.bobSpeed*(1+.5*s)),i=z.idle.baseShoulderPitch+o*.06,a=z.idle.baseShoulderYaw+o*.02,n=z.idle.baseShoulderRoll+o*.03,r=i*.35-.04;return{shoulderPitch:i,shoulderYaw:a,shoulderRoll:n,forearmPitch:r}}tryStartSwing(e){if(!this.swingActive){this.swingKind=e,this.swingActive=!0,this.swingReturning=!1,this.swingTime=0;try{this.swingAudio||(this.swingAudio=new Audio(Ho),this.swingAudio.loop=!1,this.swingAudio.preload="auto");try{this.swingAudio.pause()}catch{}try{this.swingAudio.currentTime=0}catch{}this.swingAudio.play().catch(()=>{})}catch{}}}updateSwing(e){if(!this.swingActive)return;const t=this.swingReturning?z.swing.returnDuration:z.swing.duration;this.swingTime+=e,this.swingTime>=t&&(this.swingReturning?(this.swingActive=!1,this.swingReturning=!1,this.swingTime=0):(this.swingReturning=!0,this.swingTime=0))}getCurrentSwingRot(){if(!this.swingActive)return{pitch:0,yaw:0};const e=C.clamp(this.swingTime/(this.swingReturning?z.swing.returnDuration:z.swing.duration),0,1),t=n=>Math.pow(n,z.swing.easeIn),s=n=>1-Math.pow(1-n,z.swing.easeOut),o=z.swing.amplitudePitch*.8,i=this.estimateObstacleDamping(),a=-o*i;if(this.swingReturning){const n=t(1-e);return{pitch:a*n,yaw:(this.swingKind==="RMB"?z.swing.amplitudeYawAlt:0)*n}}else{const n=s(e);return{pitch:a*n,yaw:(this.swingKind==="RMB"?z.swing.amplitudeYawAlt:0)*n}}}estimateObstacleDamping(){if(!this.camera)return 1;const e=this.camera,t=this._v3a;return e.getWorldDirection(t),1}setLegsVisible(e){this.lLeg.visible=e,this.rLeg.visible=e}}let Ne=null,je=!1,Q=null,H=null,O=null,V=null,Pe=null,Ue=null,X=null,q=null,_=null,me=null,E=null,lt=null,Ee=null,B=null,ne=null,Y=null,Be=null,Ae=null,Ke=null,he=null,ct=0,Ye=0,Fe=0,Qe=!1,pe=null,Ve=600,De=null,te=null,rt=!1,mt=0;const xe=new Map;function qt(c){const t=Math.max(1,Math.round(Math.sqrt(c))),s=Math.floor(t/2),o=t-1-s,i={minX:-s*w.x,maxX:(o+1)*w.x,minZ:-s*w.z,maxZ:(o+1)*w.z},a=Math.max(Math.abs(i.maxX-i.minX),Math.abs(i.maxZ-i.minZ))/2;return{bounds:i,worldRadius:a}}function Zo(c,e){const t=JSON.stringify(e,null,2),s=new Blob([t],{type:"application/json"}),o=URL.createObjectURL(s),i=document.createElement("a");i.href=o,i.download=c,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(o)}async function qo(){try{if(!V)throw new Error("World not initialized");const c=ge.getState(),e=Math.max(1,Math.floor(c.chunkCount||9)),{bounds:t,worldRadius:s}=qt(e),o=V.getLoadedChunkKeys().map(d=>{const u=V.getChunkByKey(d),[m,p,f]=d.split(",").map(S=>parseInt(S,10)),v=u.getData();return{key:d,cx:m,cy:p,cz:f,size:{...v.size},voxelsB64:Is(v.voxels)}}),i={kind:"MyCraftWorld",version:2,meta:{createdAt:new Date().toISOString()},settings:{seed:V.getSeed(),chunkCount:e,chunkSize:{...w},bounds:t,worldRadius:s},chunks:o,inventory:{slots:Ps().map(d=>({blockId:d.blockId,count:d.count})),selectedSlot:ge.getState().selectedSlot}},a=await Bs(i),{ivB64:n,cipherB64:r}=await Rs(i),l={kind:"MyCraftWorld",version:2,encAlg:Fs,ivB64:n,cipherB64:r,signatureAlg:Es,signatureB64:a,publicKeyId:Ts};try{const d=window.__nextSaveFileHandle;if(window.__nextSaveFileHandle=void 0,d&&typeof d.createWritable=="function"){const m=await d.createWritable(),p=JSON.stringify(l,null,2);await m.write(new Blob([p],{type:"application/json"})),await m.close();return}}catch(d){console.warn("Saving via chosen file handle failed. Falling back to download.",d)}const h=`mycraft-world-${new Date().toISOString().replace(/[:.]/g,"-").replace("T","_").replace("Z","")}.json`;Zo(h,l)}catch(c){console.error("Save world failed:",c),alert("Failed to save world. See console for details.")}}function jo(c){if(Pe&&xe.size){const s=Array.from(xe.keys()),o=new Set,i=a=>{xe.has(a)&&o.add(a)};for(const a of s){if(o.has(a))continue;const[n,r,l]=a.split(",").map(u=>parseInt(u,10)),h=[`${n+1},${r},${l}`,`${n-1},${r},${l}`,`${n},${r+1},${l}`,`${n},${r-1},${l}`,`${n},${r},${l+1}`,`${n},${r},${l-1}`];h.some(u=>xe.has(u))&&(i(a),h.forEach(u=>{xe.has(u)&&i(u)}))}for(const[a,n]of xe)o.has(a)||mt-n.receivedAt>=2&&o.add(a);if(o.size)for(const a of o){const n=xe.get(a);if(n){try{Pe.handleChunkMesh(n.response)}catch(r){console.error("Apply chunk mesh failed",r)}xe.delete(a)}}}if(Y&&Y.consumePauseToggle?.()){const s=ge.getState(),o=!s.paused;s.inGame&&(s.setPaused(o),o?Y.exitPointerLock?.():Y.requestPointerLock?.())}const{paused:e,inGame:t}=ge.getState();if(Qe&&!e&&t&&Y?.requestPointerLock?.(),t&&!e){if(Y&&Y.update(),te&&Y&&Y.peekRightClick?.()&&te.onSecondaryClick(),Y){const s=Y.consumeSelectedSlot?.();s!=null&&ge.getState().setSelectedSlot(s)}if(Be&&Be.update(c),te&&Y){const s=Y.getMoveInput?.()||{x:0,z:0},o=Math.hypot(s.x,s.z)>.01||!!Y.isJumpHeld?.();o&&!rt&&te.onMovementInputStart?.(),!o&&rt&&te.onMovementInputEnd?.(),rt=!!o}Ae&&Ae.update(),Ke&&Ke.update()}if(pe&&pe.update(c,e,t),te&&t&&!e&&te.update(c),X&&O&&X.updateUniforms(O),E&&(e||E.update(c)),lt&&E&&lt.setSunDirection(E.getSunDirection()),Ee&&E){Ee.update();const s=Math.max(0,E.getSunDirection().y),o=1-C.clamp(s/.25,0,1);Ee.setVisibility(o),Ee.setIntensity(1.2+1.6*o)}if(B&&(B.update(),E)){const s=E.getSunDirection(),o=Math.max(0,s.y);B.setDayLight(o)}if(me&&H&&O){if(E){const s=E.getSunDirection();me.setSunDirection(s)}if(me.update(O,H),X){const s=me.getShadowUniforms();X.updateShadowUniforms(s)}}if(X&&E){const s=E.getSunDirection();X.setSunUniforms(s,E.getSunColor());const o=Math.max(0,s.y),a=Math.max(.1,o);X.setDayLight(a);const n=1-C.clamp((o-0)/.2,0,1);X.setStarLight(n*.35),he&&he.setSunUniforms(s,E.getSunColor()),he&&he.setDayNight(a,n*.35),te&&te.setLighting(s,E.getSunColor(),a,n*.35)}if((q||ne)&&E){const s=E.getSunDirection(),o=E.getSunColor(),i=Math.max(0,s.y),n=Math.max(.15,i),r=new N(.02,.04,.08),l=new N(.25,.42,.72),h=new N(.05,.07,.12),d=new N(.58,.68,.82),u=r.clone().lerp(l,n),m=h.clone().lerp(d,n);q&&(q.setSun(s,o),q.setAmbientLighting(n),q.setSkyColors(u,m)),ne&&(ne.setSun(s,o),ne.setAmbientLighting(n),ne.setSkyColors(u,m))}if(ne&&ne.update(c),_&&O&&E){const s=E.getSunDirection(),o=E.getSunColor();_.update(O,s,o);const i=Math.max(0,s.y),n=Math.max(.1,i),r=new N(.72,.82,.92),h=new N(.03,.05,.08).clone().lerp(r,n);_.setFogColor(h),_.setFogDayLight(n);const d=new N(4891608),m=new N(658966).clone().lerp(d,C.clamp(n,0,1));ne&&ne.setColor(m),q&&q.setColor(m),_.render()}else Q&&H&&O&&Q.render(H,O);Qe=e}function jt(c){if(!je)return;const e=Math.min(.1,Math.max(0,(c-ct)/1e3));ct=c,mt++,jo(e),Ye+=1,Fe===0&&(Fe=c);const t=c-Fe;if(t>=500){const s=Math.round(Ye*1e3/t);ge.getState().setFps(s),Ye=0,Fe=c}Ne=requestAnimationFrame(jt)}async function Ko(c){if(je)return;Q=new Os(c),H=_s();const e=c.clientWidth/c.clientHeight;O=Ys(e),V=new js,Ue=new co(Q.getRenderer());let t=null;try{t=Ue.createEnvironmentMap(),H.environment=t}catch(f){console.warn("Environment mapping disabled due to WebGL compatibility:",f),t=null}const s=await lo();X=new Zt(s.getTexture(),t,void 0,{tileSize:s.getConfig().tileSize,atlasSize:s.getConfig().atlasSize}),X.setAntialiasing(!0,.9),X.setMaterialProperties(.8,0,.3);let o=0;try{o=Q?.getRenderer().capabilities.getMaxAnisotropy?.()??0}catch{}q=new ve({map:null,color:1713988,tileScale:1,useWorldUV:!0,bounds:{minX:-1/0,maxX:1/0,minZ:-1/0,maxZ:1/0}}),q.setAlpha(.7),q.setRefraction(.18,.75,.12,.035,.06),q.setFresnelAlpha(.65,.9),Pe=new Ks(H,{opaque:X,transparent:q}),De=new ee,De.name="PlayerRigRoot",H.add(De),te=new Xo,te.init(De,O);const i=Q.getCanvasSize();if(_=new vo(Q.getRenderer(),H,O,i.width,i.height),_.setSSAO(!0,.3,.2),_.setBloom(!0,.3,.05),_.setLens(!0,.6),_.setFog(!0,.002,Ve),_.setSSAOWaterLevel(F+1),_.setVolumetrics(!1,.1,32),me=new go(Q.getRenderer(),H),E=new wo(H,{cycleSeconds:180,initialTime:0}),lt=new xo(H,{turbidity:2,rayleigh:1.5,mieCoefficient:.005,mieDirectionalG:.8,sunIntensityScale:.5,sunDiscScale:.1}),Ee=new So(H,{intensity:1.2}),B=new Mo(H,{altitude:200,coverage:.45,density:.65,windDirection:Math.PI*.25,windSpeed:5}),B.setEnabled(!1),X&&B){const f=B.getWind();X.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:B.getAltitude(),scale:100,coverage:B.getCoverage(),density:B.getDensity(),wind:f})}window.__setClouds=(f,v)=>{B&&(typeof f=="number"&&B.setCoverage(f),typeof v=="number"&&B.setDensity(v))},me.updateSettings({enabled:!0,resolution:1024,cascades:3,shadowDistance:300,softness:1,bias:5e-4,normalBias:.02,intensity:1,stableExtents:!0,extentScale:1.05,shadowBlendFraction:.2,shadowBlendMin:3});const a=ft();V.chunkPipeline.setAtlasConfig(s.getConfig(),a.getAllBlocks()),Y=new Bo(c,O),Y.onPointerLockChanged(f=>{const v=ge.getState();f?v.setInGame(!0):v.paused||v.setInGame(!1)});const n=Math.max(1,Math.floor(ge.getState().chunkCount||9)),{bounds:r,worldRadius:l}=qt(n);q&&(q.setBounds(r),q.setEdge(0,2));const h=w.x*2;if(Ve=Math.min(O.far*.95,l+h),_){_.setFog(!0,.002,Ve);const f=Math.max(0,l-w.x*1.5);_.setHorizonHaze({enabled:!0,waterLevel:F+1,hazeStart:f,hazeDensity:.0045,hazeMaxMix:.05,hazeAngleBoost:.4,hazePlaneBoost:.2,hazePlaneBand:6})}V.chunkPipeline.setWorldRadius(l);const d=Io(V.getSeed(),0,0,l);O.position.set(d.x,d.y,d.z);{const f=O.far*.98;ne=new Po(H,{bounds:r,waterLevel:F,farDistance:f,color:1713988,tileScale:1,enableSeabed:!0,seed:V.getSeed(),worldRadius:l,blockMaterialSource:X??void 0,anisotropy:o?Math.min(8,o):8})}if(Be=new fe(O,V,Y,r),Ae=new Eo(O,V,H,r),Ke=new Fo(O,V,Y,Ae,V.chunkPipeline,Be),he=new Uo(H,V,ce("grass_tuft")??9),he&&B){const f=B.getWind();he.setCloudShadowUniforms({enabled:!1,intensity:.35,altitude:B.getAltitude(),scale:100,coverage:B.getCoverage(),density:B.getDensity(),wind:f})}pe=new Vo(V,O,Y,Be),V.chunkPipeline.on("CHUNK_READY",()=>{}),V.chunkPipeline.on("CHUNK_MESH",f=>{const{response:v}=f;xe.set(v.key,{response:v,receivedAt:mt})});const u=window.__WORLD_SNAPSHOT,m=window.__WORLD_SNAPSHOT_VERIFIED;if(u&&u.kind==="MyCraftWorld")try{if(!m)throw new Error("Save not verified by loader");const f=u.settings.chunkSize;if(f.x!==w.x||f.y!==w.y||f.z!==w.z)throw new Error(`Chunk size mismatch: save ${f.x}x${f.y}x${f.z}, game ${w.x}x${w.y}x${w.z}`);V.setSeed(u.settings.seed);for(const v of u.chunks){const S=new Uint8Array(atob(v.voxelsB64).split("").map(A=>A.charCodeAt(0))),y={size:v.size,voxels:S};V.chunkPipeline.ingestChunkData(v.key,y)}}catch(f){console.error("Failed to load snapshot; returning to Start Panel.",f);try{alert("Save file verification failed or is corrupted. Returning to Start Panel.")}catch{}Kt();const v=ge.getState();v.setGameStarted(!1),v.setInGame(!1);return}finally{delete window.__WORLD_SNAPSHOT,delete window.__WORLD_SNAPSHOT_VERIFIED}else{const f=Math.floor(Math.sqrt(n)/2),v=Math.sqrt(n)-1-f;for(let S=-f;S<=v;S++)for(let y=-f;y<=v;y++)V.ensureChunk(S,0,y)}const p=()=>{Q&&O&&c&&(Q.onResize(),O.aspect=c.clientWidth/c.clientHeight,O.updateProjectionMatrix(),_&&_.setSize(c.clientWidth,c.clientHeight))};window.addEventListener("resize",p),je=!0,Qe=ge.getState().paused,ct=performance.now(),Ye=0,Fe=0,Ne=requestAnimationFrame(jt)}function Kt(){je=!1,Qe=!1,Ne!==null&&(cancelAnimationFrame(Ne),Ne=null),Y&&(Y.destroy(),Y=null),Pe&&(Pe.destroy(),Pe=null),X&&(X.dispose(),X=null),q&&(q.dispose(),q=null),me&&(me.dispose(),me=null),Be=null,Ae&&(Ae.destroy(),Ae=null),Ke=null,he&&(he.destroy(),he=null),pe&&(pe.dispose(),pe=null);try{te?.dispose()}catch{}if(te=null,H&&De)try{H.remove(De)}catch{}De=null,V&&(V.destroy(),V=null),Ue&&(Ue.dispose(),Ue=null),ne&&H&&ne.dispose(H),ne=null,Q&&(Q.dispose(),Q=null),H=null,O=null,Ve=600}function Qo(){return{timeOfDay:{t:E?E.getTime():0,paused:!1,cycleSeconds:180},renderer:{exposure:Q?Q.getRenderer().toneMappingExposure:1}}}function $o(c){_?(_.setSSAO(!!c.ssaoEnabled,c.ssaoIntensity,c.ssaoRadius),_.setBloom(!!c.bloomEnabled,c.bloomStrength,c.bloomThreshold),_.setFog(!!c.fogEnabled,c.fogBaseDensity??.002,c.fogMaxDistance??Ve),_.setVolumetrics(!!c.volumetricsEnabled,c.volumetricsIntensity??.1,c.volumetricsSteps??32),_.setColorGrading(c.exposure,c.contrast,c.saturation)):console.error("[Engine] Post-processor not available!")}function Jo(c){me?me.updateSettings(c):console.error("[Engine] Shadow system not available!")}function ei(c){bo(c,{setTime:e=>{E?.setTime(e)},setTimePaused:e=>{E?.pause(e)},setCycleSeconds:e=>{E?.setCycleSeconds(e)},setRendererExposure:e=>{Q&&(Q.getRenderer().toneMappingExposure=e)},setClouds:e=>{if(B){if(e.coverage!==void 0&&B.setCoverage(e.coverage),e.density!==void 0&&B.setDensity(e.density),e.windDirection!==void 0||e.windSpeed!==void 0){const t=e.windDirection??Math.PI*.25,s=e.windSpeed??5;B.setWind(t,s)}if(e.enabled!==void 0&&B.setEnabled(e.enabled),X&&B){const t=B.getWind();X.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??B.getCoverage(),density:e.density??B.getDensity(),altitude:B.getAltitude(),wind:t}),he&&he.setCloudShadowUniforms({enabled:e.enabled??!0,coverage:e.coverage??B.getCoverage(),density:e.density??B.getDensity(),altitude:B.getAltitude(),wind:t})}}}})}window.updatePostProcessingSettings=$o;window.updateShadowSettings=Jo;window.updateGraphicsSettings=ei;window.getGraphicsSettings=Qo;window.__saveWorld=()=>{qo()};window.__setSfxVolume=c=>{pe?.setVolume(c)};window.__getSfxVolume=()=>pe?.getVolume()??.7;window.__primeSfx=()=>{pe?.tryUnlockOnUserGesture()};window.__sfxBreak=()=>{pe?.playBreak()};window.__sfxPlace=()=>{pe?.playPlace()};window.__bodyPrimary=()=>{te?.onPrimaryClick?.()};window.__bodySecondary=()=>{te?.onSecondaryClick?.()};window.__isBodySwingActive=()=>!!te?.isSwingActive?.();const ri={start:Ko,stop:Kt};export{ri as engine};
