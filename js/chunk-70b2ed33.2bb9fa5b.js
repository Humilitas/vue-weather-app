(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70b2ed33"],{"046b":function(e,t,r){"use strict";r.d(t,"a",(function(){return S})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return h})),r.d(t,"e",(function(){return O}));var n=r("7ffa"),s=r("1325"),i=r("e041"),o=r("5996"),a=r("28b1"),l=r("4856"),u=r("f7be"),c=r("2eab"),b=r("f976"),f=r("f29a"),y=r("4261");const p={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function h(e){const t=e.folders||[],r=t.slice(),s=new Map,i=new Map,o=new Map,a=new Map,l=new Map,u={esriGeometryPoint:i,esriGeometryPolyline:o,esriGeometryPolygon:a};(e.featureCollection&&e.featureCollection.layers||[]).forEach(e=>{const t=Object(n["a"])(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const l=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?j(i,l,e.featureSet.features):"esriGeometryPolyline"===r?j(o,l,e.featureSet.features):"esriGeometryPolygon"===r&&j(a,l,e.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(e=>{l.set(e.id,e)}),t.forEach(t=>{t.networkLinkIds.forEach(n=>{const s=v(n,t.id,e.networkLinks);s&&r.push(s)})}),r.forEach(e=>{e.featureInfos&&(e.points=Object(n["a"])(s.get("esriGeometryPoint")),e.polylines=Object(n["a"])(s.get("esriGeometryPolyline")),e.polygons=Object(n["a"])(s.get("esriGeometryPolygon")),e.mapImages=[],e.featureInfos.map(t=>{switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[p[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=l.get(t.id);r&&e.mapImages.push(r);break}}}),e.fullExtent=S([e]))});const c=S(r);return{folders:t,sublayers:r,extent:c}}function d(e,t,r,n){const o=u["b"]&&u["b"].findCredential(e);e=Object(i["e"])(e,{token:o&&o.token});const a=s["a"].kmlServiceUrl;return Object(c["default"])(a,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:n})}function O(e,t,r=null,n=[]){const s=[],i={},o=t.sublayers,a=t.folders.map(e=>e.id);return o.forEach(t=>{const o=new e;if(r?o.read(t,r):o.read(t),n.length&&a.indexOf(o.id)>-1&&(o.visible=-1!==n.indexOf(o.id)),i[t.id]=o,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=i[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(o)}else s.unshift(o)}),s}function j(e,t,r){r.forEach(r=>{e.set(r.attributes[t],r)})}function m(e,t){let r;return t.some(t=>t.id===e&&(r=t,!0)),r}function v(e,t,r){const n=m(e,r);return n&&(n.parentFolderId=t,n.networkLink=n),n}async function g(e){const t=f["default"].fromJSON(e.featureSet).features,r=e.layerDefinition,n=Object(b["a"])(r.drawingInfo.renderer),s=l["a"].fromJSON(e.popupInfo),i=[];for(const o of t){const e=await n.getSymbolAsync(o);o.symbol=e,o.popupTemplate=s,o.visible=!0,i.push(o)}return i}function S(e){const t=Object(y["b"])(),r=Object(y["b"])(y["a"]);for(const n of e){if(n.polygons&&n.polygons.featureSet&&n.polygons.featureSet.features)for(const e of n.polygons.featureSet.features)Object(a["b"])(t,e.geometry),Object(y["e"])(r,t);if(n.polylines&&n.polylines.featureSet&&n.polylines.featureSet.features)for(const e of n.polylines.featureSet.features)Object(a["b"])(t,e.geometry),Object(y["e"])(r,t);if(n.points&&n.points.featureSet&&n.points.featureSet.features)for(const e of n.points.featureSet.features)Object(a["b"])(t,e.geometry),Object(y["e"])(r,t);if(n.mapImages)for(const e of n.mapImages)Object(a["b"])(t,e.extent),Object(y["e"])(r,t)}return Object(y["d"])(r,y["a"])?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:o["a"].WGS84}}},4261:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return u})),r.d(t,"g",(function(){return l})),r.d(t,"h",(function(){return j})),r.d(t,"i",(function(){return o})),r.d(t,"j",(function(){return d})),r.d(t,"k",(function(){return h})),r.d(t,"l",(function(){return p})),r.d(t,"m",(function(){return y}));var n=r("b2b2");r("3af1"),r("9180");function s(e){return e}function i(e=S){return s([e[0],e[1],e[2],e[3],e[4],e[5]])}function o(e,t,r,n,s,o,a=i()){return a[0]=e,a[1]=t,a[2]=r,a[3]=n,a[4]=s,a[5]=o,a}function a(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function l(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function u(e,t,r){const n=t.length;let s=e[0],i=e[1],o=e[2],a=e[3],l=e[4],u=e[5];if(r)for(let c=0;c<n;c++){const e=t[c];s=Math.min(s,e[0]),i=Math.min(i,e[1]),o=Math.min(o,e[2]),a=Math.max(a,e[0]),l=Math.max(l,e[1]),u=Math.max(u,e[2])}else for(let c=0;c<n;c++){const e=t[c];s=Math.min(s,e[0]),i=Math.min(i,e[1]),a=Math.max(a,e[0]),l=Math.max(l,e[1])}e[0]=s,e[1]=i,e[2]=o,e[3]=a,e[4]=l,e[5]=u}function c(e){return e[0]>=e[3]?0:e[3]-e[0]}function b(e){return e[1]>=e[4]?0:e[4]-e[1]}function f(e){return e[2]>=e[5]?0:e[5]-e[2]}function y(e,t=[0,0,0]){return t[0]=c(e),t[1]=b(e),t[2]=f(e),t}function p(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function h(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function d(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function O(e){return e?d(e,g):i(g)}function j(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function m(e){return 6===e.length}function v(e,t,r){if(Object(n["h"])(e)||Object(n["h"])(t))return e===t;if(!m(e)||!m(t))return!1;if(r){for(let n=0;n<e.length;n++)if(!r(e[n],t[n]))return!1}else for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}s([-1/0,-1/0,-1/0,1/0,1/0,1/0]);const g=s([1/0,1/0,1/0,-1/0,-1/0,-1/0]),S=s([0,0,0,0,0,0]);i()},f5fc:function(e,t,r){"use strict";r.r(t);var n,s=r("a4ee"),i=(r("c120"),r("b2b2")),o=(r("e92d"),r("cea0")),a=r("59b2"),l=r("afcf"),u=r("d386"),c=r("09db"),b=r("e041"),f=(r("8eed"),r("f402"),r("5996")),y=r("3af1"),p=(r("e06a"),r("2c4f")),h=r("4d10"),d=r("a6a3"),O=r("e694"),j=r("22f4"),m=r("b911"),v=r("997b"),g=r("0db5"),S=r("8e17"),w=r("5a62"),x=r("046b"),M=r("b3b6"),E=r("1a3e"),k=r("6a0e"),I=r("ce6d"),_=r("6d5f"),P=r("3795");let F=n=class extends(I["a"].EventedMixin(Object(k["b"])(_["a"]))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){Object(P["j"])(this,"networkLink").then(()=>Object(P["l"])(this,"visible")).then(()=>this.load())}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=Object(i["i"])(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then(e=>{const t=Object(x["a"])(e.sublayers);this.fullExtent=y["a"].fromJSON(t),this.sourceJSON=e;const r=Object(o["m"])(p["a"].ofType(n),Object(x["e"])(n,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach(e=>{e.parent=null,e.layer=null}),this._sublayersHandles.forEach(e=>e.remove()),this._sublayersHandles=null),e&&(e.forEach(e=>{e.parent=this,e.layer=this.layer}),this._sublayersHandles=[e.on("after-add",({item:e})=>{e.parent=this,e.layer=this.layer}),e.on("after-remove",({item:e})=>{e.parent=null,e.layer=null})]),this._set("sublayers",e)}castSublayers(e){return Object(o["m"])(p["a"].ofType(n),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}_fetchService(e,t){return Object(x["b"])(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(e=>Object(x["d"])(e.data))}};Object(s["a"])([Object(a["b"])()],F.prototype,"description",void 0),Object(s["a"])([Object(a["b"])()],F.prototype,"id",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,value:null})],F.prototype,"networkLink",void 0),Object(s["a"])([Object(a["b"])({json:{write:{allowNull:!0}}})],F.prototype,"parent",void 0),Object(s["a"])([Object(a["b"])({value:null,json:{write:{allowNull:!0}}})],F.prototype,"sublayers",null),Object(s["a"])([Object(E["a"])("sublayers")],F.prototype,"castSublayers",null),Object(s["a"])([Object(a["b"])({value:null,json:{read:{source:"name",reader:e=>Object(M["d"])(e)}}})],F.prototype,"title",void 0),Object(s["a"])([Object(a["b"])({value:!0})],F.prototype,"visible",null),Object(s["a"])([Object(l["a"])("visible",["visibility"])],F.prototype,"readVisible",null),Object(s["a"])([Object(a["b"])()],F.prototype,"sourceJSON",void 0),Object(s["a"])([Object(a["b"])({value:null})],F.prototype,"layer",null),Object(s["a"])([Object(a["b"])({type:y["a"]})],F.prototype,"fullExtent",void 0),F=n=Object(s["a"])([Object(u["a"])("esri.layers.support.KMLSublayer")],F);var G=F,L=G;const N=["kml","xml"];let T=class extends(Object(v["a"])(Object(S["a"])(Object(w["a"])(Object(m["a"])(Object(g["a"])(Object(O["a"])(d["a"]))))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new h["a"]({root:this,rootCollectionNames:["sublayers"],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=f["a"].WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.watch("sublayers",(e,t)=>{t&&t.forEach(e=>{e.parent=null,e.layer=null}),e&&e.forEach(e=>{e.parent=this,e.layer=this})},!0),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return Object(x["e"])(L,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],n=e.toArray();for(;n.length;){const e=n[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&n.push(...e.sublayers.toArray())),n.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?Object(b["k"])(this.url,N)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=Object(i["i"])(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:Object(x["b"])(this.url,this.outSpatialReference,this.refreshInterval,e)),r=Object(x["d"])(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const n of r.sublayers.items)t(n),n.visible&&n.fullExtent&&(e?e.union(n.fullExtent):e=n.fullExtent.clone())};return t(this),e}};Object(s["a"])([Object(a["b"])({readOnly:!0})],T.prototype,"allSublayers",void 0),Object(s["a"])([Object(a["b"])({type:f["a"]})],T.prototype,"outSpatialReference",void 0),Object(s["a"])([Object(a["b"])({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],T.prototype,"path",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0,json:{read:!1,write:!1}})],T.prototype,"legendEnabled",void 0),Object(s["a"])([Object(a["b"])({type:["show","hide","hide-children"]})],T.prototype,"listMode",void 0),Object(s["a"])([Object(a["b"])({type:["KML"]})],T.prototype,"operationalLayerType",void 0),Object(s["a"])([Object(a["b"])({})],T.prototype,"resourceInfo",void 0),Object(s["a"])([Object(a["b"])({type:p["a"].ofType(L),json:{write:{ignoreOrigin:!0}}})],T.prototype,"sublayers",void 0),Object(s["a"])([Object(l["a"])(["web-map","portal-item"],"sublayers",["visibleFolders"])],T.prototype,"readSublayersFromItemOrWebMap",null),Object(s["a"])([Object(l["a"])("service","sublayers",["sublayers"])],T.prototype,"readSublayers",null),Object(s["a"])([Object(c["a"])("sublayers")],T.prototype,"writeSublayers",null),Object(s["a"])([Object(a["b"])({readOnly:!0,json:{read:!1}})],T.prototype,"type",void 0),Object(s["a"])([Object(a["b"])({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],T.prototype,"title",null),Object(s["a"])([Object(a["b"])(j["n"])],T.prototype,"url",void 0),Object(s["a"])([Object(a["b"])({readOnly:!0})],T.prototype,"visibleSublayers",null),Object(s["a"])([Object(a["b"])({type:y["a"]})],T.prototype,"extent",void 0),Object(s["a"])([Object(a["b"])()],T.prototype,"fullExtent",null),T=Object(s["a"])([Object(u["a"])("esri.layers.KMLLayer")],T);var C=T;t["default"]=C}}]);