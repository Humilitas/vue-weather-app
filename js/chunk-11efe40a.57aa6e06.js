(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11efe40a"],{"0ca1":function(e,t,r){"use strict";var a=r("a4ee"),i=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("fa8a"),n=r("d386"),o=(r("e041"),r("8eed"),r("f402"),r("6a0e"));const l=new s["a"]({esriJobMessageTypeInformative:"informative",esriJobMessageTypeProcessDefinition:"process-definition",esriJobMessageTypeProcessStart:"process-start",esriJobMessageTypeProcessStop:"process-stop",esriJobMessageTypeWarning:"warning",esriJobMessageTypeError:"error",esriJobMessageTypeEmpty:"empty",esriJobMessageTypeAbort:"abort"});let c=class extends o["a"]{constructor(e){super(e),this.description=null,this.type=null}};Object(a["a"])([Object(i["b"])({type:String,json:{write:!0}})],c.prototype,"description",void 0),Object(a["a"])([Object(i["b"])({type:String,json:{read:l.read,write:l.write}})],c.prototype,"type",void 0),c=Object(a["a"])([Object(n["a"])("esri.tasks.support.GPMessage")],c);var u=c;t["a"]=u},f579:function(e,t,r){"use strict";r.r(t);var a=r("a4ee"),i=(r("c120"),r("b2b2")),s=(r("e92d"),r("cea0")),n=r("59b2"),o=r("fa8a"),l=r("d386"),c=r("ce50"),u=r("e041"),p=(r("8eed"),r("f402"),r("1219")),b=r("a915"),y=r("f7be"),d=r("2eab"),h=r("d297"),f=r("c64f"),m=r("9209"),g=r("5996"),O=r("3af1"),S=r("fc29");let j=class extends S["a"]{constructor(){super(...arguments),this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}};Object(a["a"])([Object(n["b"])({type:g["a"]})],j.prototype,"outSpatialReference",void 0),Object(a["a"])([Object(n["b"])({type:O["a"]})],j.prototype,"processExtent",void 0),Object(a["a"])([Object(n["b"])({type:g["a"]})],j.prototype,"processSpatialReference",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],j.prototype,"returnFeatureCollection",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],j.prototype,"returnM",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],j.prototype,"returnZ",void 0),j=Object(a["a"])([Object(l["a"])("esri/rest/geoprocessor/GPOptions")],j),j.from=Object(s["m"])(j);var v=j,w=v,_=r("0ca1"),P=r("a8d5"),J=r("a1f3"),L=r("f29a"),x=r("bb72"),M=r("6a0e");let N=class extends M["a"]{constructor(){super(...arguments),this.extent=null,this.height=null,this.href=null,this.opacity=1,this.rotation=0,this.scale=null,this.visible=!0,this.width=null}};Object(a["a"])([Object(n["b"])({type:O["a"]})],N.prototype,"extent",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"height",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"href",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"opacity",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"rotation",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"scale",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"visible",void 0),Object(a["a"])([Object(n["b"])()],N.prototype,"width",void 0),N=Object(a["a"])([Object(l["a"])("esri.layer.support.MapImage")],N);var I=N,D=I;let G=class extends M["a"]{constructor(e){super(e),this.itemId=null,this.url=null}};Object(a["a"])([Object(n["b"])({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],G.prototype,"itemId",void 0),Object(a["a"])([Object(n["b"])({type:String,json:{write:!0}})],G.prototype,"url",void 0),G=Object(a["a"])([Object(l["a"])("esri.tasks.support.DataFile")],G);var T=G,V=T;const R=new o["a"]({esriMeters:"meters",esriFeet:"feet",esriKilometers:"kilometers",esriMiles:"miles",esriNauticalMiles:"nautical-miles",esriYards:"yards"},{ignoreUnknown:!1});let F=class extends M["a"]{constructor(e){super(e),this.distance=0,this.units=null}};Object(a["a"])([Object(n["b"])({json:{write:!0}})],F.prototype,"distance",void 0),Object(a["a"])([Object(n["b"])({json:{read:R.read,write:R.write}})],F.prototype,"units",void 0),F=Object(a["a"])([Object(l["a"])("esri/tasks/support/LinearUnit")],F);var k=F,C=k;const E=new o["a"]({GPBoolean:"boolean",GPDataFile:"data-file",GPDate:"date",GPDouble:"double",GPFeatureRecordSetLayer:"feature-record-set-layer",GPField:"field",GPLinearUnit:"linear-unit",GPLong:"long",GPRasterData:"raster-data",GPRasterDataLayer:"raster-data-layer",GPRecordSet:"record-set",GPString:"string","GPMultiValue:GPBoolean":"multi-value","GPMultiValue:GPDataFile":"multi-value","GPMultiValue:GPDate":"multi-value","GPMultiValue:GPDouble":"multi-value","GPMultiValue:GPFeatureRecordSetLayer":"multi-value","GPMultiValue:GPField":"multi-value","GPMultiValue:GPLinearUnit":"multi-value","GPMultiValue:GPLong":"multi-value","GPMultiValue:GPRasterData":"multi-value","GPMultiValue:GPRasterDataLayer":"multi-value","GPMultiValue:GPRecordSet":"multi-value","GPMultiValue:GPString":"multi-value"});let A=class extends M["a"]{constructor(e){super(e),this.dataType=null,this.value=null}};Object(a["a"])([Object(n["b"])({json:{read:E.read,write:E.write}})],A.prototype,"dataType",void 0),Object(a["a"])([Object(n["b"])()],A.prototype,"value",void 0),A=Object(a["a"])([Object(l["a"])("esri.tasks.support.ParameterValue")],A);var U=A,q=U;let $=class extends M["a"]{constructor(e){super(e),this.format=null,this.itemId=null,this.url=null}};Object(a["a"])([Object(n["b"])()],$.prototype,"format",void 0),Object(a["a"])([Object(n["b"])({json:{read:{source:"itemID"},write:{target:"itemID"}}})],$.prototype,"itemId",void 0),Object(a["a"])([Object(n["b"])()],$.prototype,"url",void 0),$=Object(a["a"])([Object(l["a"])("esri/tasks/support/RasterData")],$);var z=$,W=z;async function Z(e,t,r,a,i){const s={},n={},o=[];return B(a,o,s),Object(P["a"])(o).then(o=>{const{outSpatialReference:l,processExtent:c,processSpatialReference:u,returnFeatureCollection:p,returnM:b,returnZ:y}=r,{path:h}=Object(x["c"])(e);for(const e in s){const t=s[e];n[e]=o.slice(t[0],t[1])}const f=l?l.wkid||l:null,m=u?u.wkid||u:null,g="execute"===t?{returnFeatureCollection:p||void 0,returnM:b||void 0,returnZ:y||void 0}:null,O=Q({...c?{context:{extent:c,outSR:f,processSR:m}}:{"env:outSR":f,"env:processSR":m},...a,...g,f:"json"},null,n),S={...i,query:O};return Object(d["default"])(`${h}/${t}`,S)})}function B(e,t,r){for(const a in e){const i=e[a];if(i&&"object"==typeof i&&i instanceof L["default"]){const{features:e}=i;r[a]=[t.length,t.length+e.length],e.forEach(e=>{t.push(e.geometry)})}}}function K(e){const t=e.dataType,r=q.fromJSON(e);switch(t){case"GPBoolean":case"GPDouble":case"GPLong":case"GPString":return r;case"GPDate":r.value=new Date(r.value);break;case"GPDataFile":r.value=V.fromJSON(r.value);break;case"GPLinearUnit":r.value=C.fromJSON(r.value);break;case"GPFeatureRecordSetLayer":case"GPRecordSet":{const t=e.value.url;r.value=t?V.fromJSON(r.value):L["default"].fromJSON(r.value);break}case"GPRasterData":case"GPRasterDataLayer":{const t=e.value.mapImage;r.value=t?D.fromJSON(t):W.fromJSON(r.value);break}case"GPField":r.value=J["a"].fromJSON(r.value);break;case"GPMultiValue:GPBoolean":case"GPMultiValue:GPDouble":case"GPMultiValue:GPLong":case"GPMultiValue:GPString":return r;case"GPMultiValue:GPDate":{const e=r.value;r.value=e.map(e=>new Date(e));break}case"GPMultiValue:GPDataFile":r.value=r.value.map(e=>V.fromJSON(e));break;case"GPMultiValue:GPLinearUnit":r.value=r.value.map(e=>C.fromJSON(e));break;case"GPMultiValue:GPFeatureRecordSetLayer":case"GPMultiValue:GPRecordSet":r.value=r.value.map(e=>L["default"].fromJSON(e));break;case"GPMultiValue:GPRasterData":case"GPMultiValue:GPRasterDataLayer":r.value=r.value.map(e=>e?D.fromJSON(e):W.fromJSON(r.value));break;case"GPMultiValue:GPField":r.value=r.value.map(e=>J["a"].fromJSON(e))}return r}function Q(e,t,r){for(const a in e){const t=e[a];Array.isArray(t)?e[a]=JSON.stringify(t.map(e=>Q({item:e},!0).item)):t instanceof Date&&(e[a]=t.getTime())}return Object(x["b"])(e,t,r)}async function Y(e,t,r,a){return r=w.from(r),Z(e,"execute",r,t,a).then(e=>{const t=e.data.results||[],r=e.data.messages||[];return{results:t.map(K),messages:r.map(e=>_["a"].fromJSON(e))}})}var H,X=r("f4cc");const ee=new o["a"]({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});let te=H=class extends M["a"]{constructor(e){super(e),this.jobId=null,this.jobStatus=null,this.messages=null,this.requestOptions=null,this.sourceUrl=null,this._timer=null}cancelJob(e){const{jobId:t,sourceUrl:r}=this,{path:a}=Object(x["c"])(r),i={...this.requestOptions,...e,query:{f:"json"}};return this._clearTimer(),Object(d["default"])(`${a}/jobs/${t}/cancel`,i).then(e=>{const t=H.fromJSON(e.data);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}destroy(){clearInterval(this._timer)}checkJobStatus(e){const{path:t}=Object(x["c"])(this.sourceUrl),r={...this.requestOptions,...e,query:{f:"json"}},a=`${t}/jobs/${this.jobId}`;return Object(d["default"])(a,r).then(({data:e})=>{const t=H.fromJSON(e);return this.messages=t.messages,this.jobStatus=t.jobStatus,this})}fetchResultData(e,t,r){t=w.from(t);const{returnFeatureCollection:a,returnM:i,returnZ:s,outSpatialReference:n}=t,{path:o}=Object(x["c"])(this.sourceUrl),l=Q({returnFeatureCollection:a||void 0,returnM:i||void 0,returnZ:s||void 0,outSR:n,returnType:"data",f:"json"},null),c={...this.requestOptions,...r,query:l},u=`${o}/jobs/${this.jobId}/results/${e}`;return Object(d["default"])(u,c).then(e=>K(e.data))}fetchResultImage(e,t,r){const{path:a}=Object(x["c"])(this.sourceUrl),i={...t.toJSON(),f:"json"},s=Q(i),n={...this.requestOptions,...r,query:s},o=`${a}/jobs/${this.jobId}/results/${e}`;return Object(d["default"])(o,n).then(e=>K(e.data))}async fetchResultMapImageLayer(){const{path:e}=Object(x["c"])(this.sourceUrl),t=e.indexOf("/GPServer/"),a=`${e.substring(0,t)}/MapServer/jobs/${this.jobId}`;return new(0,(await r.e("chunk-2939919b").then(r.bind(null,"53f8"))).default)({url:a})}async waitForJobCompletion(e={}){const{interval:t=1e3,signal:r,statusCallback:a}=e;return new Promise((e,i)=>{Object(X["p"])(r,()=>{this._clearTimer(),i(Object(X["e"])())}),this._clearTimer();const s=setInterval(()=>{this._timer||i(Object(X["e"])()),this.checkJobStatus(this.requestOptions).then(t=>{const{jobStatus:r}=t;switch(this.jobStatus=r,r){case"job-succeeded":this._clearTimer(),e(this);break;case"job-submitted":case"job-executing":case"job-waiting":case"job-new":a&&a(this);break;case"job-cancelled":case"job-cancelling":case"job-deleted":case"job-deleting":case"job-timed-out":case"job-failed":this._clearTimer(),i(this)}})},t);this._timer=s})}_clearTimer(){this._timer&&(clearInterval(this._timer),this._timer=null)}};Object(a["a"])([Object(n["b"])()],te.prototype,"jobId",void 0),Object(a["a"])([Object(n["b"])({json:{read:ee.read}})],te.prototype,"jobStatus",void 0),Object(a["a"])([Object(n["b"])({type:[_["a"]]})],te.prototype,"messages",void 0),Object(a["a"])([Object(n["b"])()],te.prototype,"requestOptions",void 0),Object(a["a"])([Object(n["b"])({json:{write:!0}})],te.prototype,"sourceUrl",void 0),te=H=Object(a["a"])([Object(l["a"])("esri.tasks.support.JobInfo")],te);var re=te,ae=re;async function ie(e,t,r,a){return r=w.from(r),Z(e,"submitJob",r,t,a).then(t=>{const r=ae.fromJSON(t.data);return r.sourceUrl=e,r})}let se=class extends m["a"]{constructor(e){super(e),this._jobs=new Map,this.outSpatialReference=null,this.processExtent=null,this.processSpatialReference=null,this.returnFeatureCollection=!1,this.returnM=!1,this.returnZ=!1}destroy(){this._jobs.forEach(e=>e.destroy()),this._jobs.clear()}cancelJob(e,t){const r=this._jobs.get(e),a={...this.requestOptions,...t};return r.cancelJob(a)}checkJobStatus(e,t){const r=this._jobs.get(e),a={...this.requestOptions,...t};return r.checkJobStatus(a)}execute(e,t){const r=new w({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),a={...this.requestOptions,...t};return Y(this.url,e,r,a)}getResultData(e,t,r){const a=this._jobs.get(e),{returnFeatureCollection:i,returnM:s,returnZ:n,outSpatialReference:o}=this,l=new w({returnFeatureCollection:i,returnM:s,returnZ:n,outSpatialReference:o,url:this.url}),c={...this.requestOptions,...r};return a.fetchResultData(t,l,c)}getResultImage(e,t,r,a){const i=this._jobs.get(e),s={...this.requestOptions,...a};return i.fetchResultImage(t,r,s)}async getResultMapImageLayer(e){return this._jobs.get(e).fetchResultMapImageLayer()}submitJob(e,t){const r=new w({outSpatialReference:this.outSpatialReference,processExtent:this.processExtent,processSpatialReference:this.processSpatialReference,returnFeatureCollection:this.returnFeatureCollection,returnM:this.returnM,returnZ:this.returnZ}),a={...this.requestOptions,...t};return ie(this.url,e,r,a).then(e=>(e.sourceUrl=this.url,this._jobs.set(e.jobId,e),e))}waitForJobCompletion(e,t={}){return this._jobs.get(e).waitForJobCompletion(t)}};Object(a["a"])([Object(n["b"])({type:g["a"]})],se.prototype,"outSpatialReference",void 0),Object(a["a"])([Object(n["b"])({type:O["a"]})],se.prototype,"processExtent",void 0),Object(a["a"])([Object(n["b"])({type:g["a"]})],se.prototype,"processSpatialReference",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],se.prototype,"returnFeatureCollection",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],se.prototype,"returnM",void 0),Object(a["a"])([Object(n["b"])({nonNullable:!0})],se.prototype,"returnZ",void 0),se=Object(a["a"])([Object(l["a"])("esri/tasks/Geoprocessor")],se);var ne=se,oe=ne;const le=new o["a"]({PDF:"pdf",PNG32:"png32",PNG8:"png8",JPG:"jpg",GIF:"gif",EPS:"eps",SVG:"svg",SVGZ:"svgz"}),ce=(le.fromJSON.bind(le),le.toJSON.bind(le)),ue=new o["a"]({MAP_ONLY:"map-only","A3 Landscape":"a3-landscape","A3 Portrait":"a3-portrait","A4 Landscape":"a4-landscape","A4 Portrait":"a4-portrait","Letter ANSI A Landscape":"letter-ansi-a-landscape","Letter ANSI A Portrait":"letter-ansi-a-portrait","Tabloid ANSI B Landscape":"tabloid-ansi-b-landscape","Tabloid ANSI B Portrait":"tabloid-ansi-b-portrait"}),pe=(ue.fromJSON.bind(ue),ue.toJSON.bind(ue)),be="simple-marker",ye="picture-marker",de="simple-line",he="simple-fill",fe="shield-label-symbol",me="text";function ge(e,t){const{graphic:r,renderer:a,symbol:i}=t,s=i.type;if(s===me||s===fe||!("visualVariables"in a)||!a.visualVariables)return;const n=a.getVisualVariablesForType("size"),o=a.getVisualVariablesForType("color"),l=a.getVisualVariablesForType("opacity"),c=a.getVisualVariablesForType("rotation"),u=n&&n[0],p=o&&o[0],y=l&&l[0],d=c&&c[0];if(u){const t=s===be?i.style:null,a=Object(h["getSize"])(u,r,{shape:t});null!=a&&(s===be?e.size=Object(b["e"])(a):s===ye?(e.width=Object(b["e"])(a),e.height=Object(b["e"])(a)):s===de?e.width=Object(b["e"])(a):e.outline&&(e.outline.width=Object(b["e"])(a)))}if(p){const t=Object(h["getColor"])(p,r);(t&&s===be||s===de||s===he)&&(e.color=t?t.toJSON():void 0)}if(y){const t=Object(h["getOpacity"])(y,r);null!=t&&e.color&&(e.color[3]=Math.round(255*t))}d&&(e.angle=-Object(h["getRotationAngle"])(a,r))}function Oe(){return{layerDefinition:{name:"multipointLayer",geometryType:"esriGeometryMultipoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryMultipoint",features:[]}}}function Se(){return{layerDefinition:{name:"polygonLayer",geometryType:"esriGeometryPolygon",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolygon",features:[]}}}function je(){return{layerDefinition:{name:"pointLayer",geometryType:"esriGeometryPoint",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPoint",features:[]}}}function ve(){return{layerDefinition:{name:"polylineLayer",geometryType:"esriGeometryPolyline",drawingInfo:{renderer:null}},featureSet:{geometryType:"esriGeometryPolyline",features:[]}}}function we(e,t=15){const r=e.canvas.width,a=e.canvas.height,i=e.getImageData(0,0,r,a).data;let s,n,o,l,c,u;e:for(n=a;n--;)for(s=r;s--;)if(i[4*(r*n+s)+3]>t){u=n;break e}if(!u)return null;e:for(s=r;s--;)for(n=u+1;n--;)if(i[4*(r*n+s)+3]>t){c=s;break e}e:for(s=0;s<=c;++s)for(n=u+1;n--;)if(i[4*(r*n+s)+3]>t){o=s;break e}e:for(n=0;n<=u;++n)for(s=o;s<=c;++s)if(i[4*(r*n+s)+3]>t){l=n;break e}return{x:o,y:l,width:c-o,height:u-l}}function _e(e,t){const r=e.allLayerViews.items;if(t===e.scale)return r.filter(e=>!e.suspended);const a=new Array;for(const i of r)Ie(i.parent)&&!a.includes(i.parent)||!i.visible||t&&"isVisibleAtScale"in i&&!i.isVisibleAtScale(t)||a.push(i);return a}function Pe(e){return e&&"bing-maps"===e.type}function Je(e){return e&&"csv"===e.type}function Le(e){return e&&"feature"===e.type}function xe(e){return e&&"geojson"===e.type}function Me(e){return e&&"graphics"===e.type}function Ne(e){return e&&"group"===e.type}function Ie(e){return e&&"esri.views.2d.layers.GroupLayerView2D"===e.declaredClass}function De(e){return e&&"imagery"===e.type}function Ge(e){return e&&"kml"===e.type}function Te(e){return e&&"map-image"===e.type}function Ve(e){return e&&"map-notes"===e.type}function Re(e){return e&&"open-street-map"===e.type}function Fe(e){return e&&"stream"===e.type}function ke(e){return e&&"tile"===e.type}function Ce(e){return e&&"vector-tile"===e.type}function Ee(e){return e&&"web-tile"===e.type}function Ae(e){return e&&"wms"===e.type}function Ue(e){return e&&"wmts"===e.type}let qe=class extends S["a"]{constructor(e){super(e),this.attributionVisible=!0,this.exportOptions={width:800,height:1100,dpi:96},this.forceFeatureAttributes=!1,this.format="png32",this.label=null,this.layout="map-only",this.layoutOptions=null,this.outScale=0,this.scalePreserved=!0,this.showLabels=!0}};Object(a["a"])([Object(n["b"])()],qe.prototype,"attributionVisible",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"exportOptions",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"forceFeatureAttributes",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"format",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"label",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"layout",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"layoutOptions",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"outScale",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"scalePreserved",void 0),Object(a["a"])([Object(n["b"])()],qe.prototype,"showLabels",void 0),qe=Object(a["a"])([Object(l["a"])("esri.tasks.support.PrintTemplate")],qe);var $e=qe,ze=$e;const We={Feet:"ft",Kilometers:"km",Meters:"m",Miles:"mi"},Ze=new o["a"]({esriFeet:"Feet",esriKilometers:"Kilometers",esriMeters:"Meters",esriMiles:"Miles"}),Be=new o["a"]({esriExecutionTypeSynchronous:"sync",esriExecutionTypeAsynchronous:"async"}),Ke=new f["a"]({returnGeometry:!0});function Qe(e){return e&&(e.path||"image/svg+xml"===e.contentType||e.url&&e.url.endsWith(".svg"))}let Ye=class extends m["a"]{constructor(...e){super(...e),this._ssExtent=null,this._legendLayers=[],this._legendLayerNameMap={},this._gpServerUrl=null,this._cimVersion=null,this._is11xService=!1,this._gpMetadata=null,this.updateDelay=1e3}get _geoprocessor(){return new oe({url:this.url})}get mode(){return this._gpMetadata&&this._gpMetadata.executionType?Be.fromJSON(this._gpMetadata.executionType):"sync"}execute(e,t){let r=this.url;const a=r.lastIndexOf("/GPServer/");return a>0&&(r=r.slice(0,a+9)),Promise.resolve().then(()=>this._gpServerUrl===r?{data:this._gpMetadata}:(this._gpServerUrl=r,Object(d["default"])(r,{query:{f:"json"}}))).then(t=>(this._gpMetadata=t.data,this._cimVersion=this._gpMetadata.cimVersion,this._is11xService=!!this._cimVersion,this._getGpPrintParams(e))).then(e=>{const r=e=>"sync"===this.mode?e.results&&e.results[0]&&e.results[0].value:this._geoprocessor.getResultData(e.jobId,"Output_File",t).then(e=>e.value);return"async"===this.mode?this._geoprocessor.submitJob(e,t).then(e=>this._geoprocessor.waitForJobCompletion(e.jobId,{interval:this.updateDelay}).then(r)):this._geoprocessor.execute(e,t).then(r)})}async _createOperationalLayers(e,t){const r=[],a={layerView:null,printTemplate:t,view:e};let i=0;t.scalePreserved&&(i=t.outScale||e.scale);const s=_e(e,i);for(const n of s){const e=n.layer;if(!e.loaded||Ne(e))continue;let t;a.layerView=n,t=Pe(e)?this._createBingMapsLayerJSON(e):Je(e)?await this._createCSVLayerJSON(e,a):Le(e)?await this._createFeatureLayerJSON(e,a):xe(e)?await this._createGeoJSONLayer(e,a):Me(e)?await this._createGraphicsLayerJSON(e,a):De(e)?this._createImageryLayerJSON(e):Ge(e)?await this._createKMLLayerJSON(e,a):Te(e)?this._createMapImageLayerJSON(e,a):Ve(e)?await this._createMapNotesLayerJSON(a):Re(e)?this._createOpenStreetMapLayerJSON():Fe(e)?await this._createStreamLayerJSON(e,a):ke(e)?this._createTileLayerJSON(e):Ce(e)?await this._createVectorTileLayerJSON(e,a):Ee(e)?this._createWebTileLayerJSON(e):Ae(e)?this._createWMSLayerJSON(e):Ue(e)?this._createWMTSLayerJSON(e):await this._createScreenshotJSON(e,a),t&&(Array.isArray(t)?r.push(...t):(t.id=e.id,t.title=this._legendLayerNameMap[e.id]||e.title,t.opacity=e.opacity,t.minScale=e.minScale||0,t.maxScale=e.maxScale||0,r.push(t)))}if(i&&r.forEach(e=>{e.minScale=0,e.maxScale=0}),e.graphics&&e.graphics.length){const a=await this._createFeatureCollectionJSON(null,e.graphics,t);a&&r.push(a)}return r}_createBingMapsLayerJSON(e){return{culture:e.culture,key:e.key,type:"BingMaps"+("aerial"===e.style?"Aerial":"hybrid"===e.style?"Hybrid":"Road")}}async _createCSVLayerJSON(e,{layerView:t,printTemplate:r}){let a;if(this._legendLayers&&this._legendLayers.push({id:e.id}),!this._is11xService){const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}return a={type:"CSV"},e.write(a,{origin:"web-map"}),delete a.popupInfo,delete a.layerType,a.showLabels=r.showLabels&&e.labelsVisible,a}async _createFeatureCollectionJSON(e,t,r){let a;const i=Se(),s=ve(),n=je(),o=Oe(),l=je();if(l.layerDefinition.name="textLayer",delete l.layerDefinition.drawingInfo,e){if("esri.layers.FeatureLayer"===e.declaredClass||"esri.layers.StreamLayer"===e.declaredClass?i.layerDefinition.name=s.layerDefinition.name=n.layerDefinition.name=o.layerDefinition.name=this._legendLayerNameMap[e.id]||e.get("arcgisProps.title")||e.title:"esri.layers.GraphicsLayer"===e.declaredClass&&(t=e.graphics.items),e.renderer){const t=e.renderer.toJSON();i.layerDefinition.drawingInfo.renderer=t,s.layerDefinition.drawingInfo.renderer=t,n.layerDefinition.drawingInfo.renderer=t,o.layerDefinition.drawingInfo.renderer=t}if(r.showLabels&&e.labelsVisible&&"function"==typeof e.write){var c,u;const t=null==(c=e.write({},{origin:"web-map"}).layerDefinition)||null==(u=c.drawingInfo)?void 0:u.labelingInfo;t&&(a=!0,i.layerDefinition.drawingInfo.labelingInfo=t,s.layerDefinition.drawingInfo.labelingInfo=t,n.layerDefinition.drawingInfo.labelingInfo=t,o.layerDefinition.drawingInfo.labelingInfo=t)}}let b;null!=e&&e.renderer||a||(delete i.layerDefinition.drawingInfo,delete s.layerDefinition.drawingInfo,delete n.layerDefinition.drawingInfo,delete o.layerDefinition.drawingInfo);const y=e&&e.fields,d=e&&e.renderer;if(y&&d&&"function"==typeof d.collectRequiredFields){const e=new Set;await d.collectRequiredFields(e,y),b=Array.from(e)}if(y){const e=y.map(e=>e.toJSON());i.layerDefinition.fields=e,s.layerDefinition.fields=e,n.layerDefinition.fields=e,o.layerDefinition.fields=e}const h=t&&t.length;let f;for(let g=0;g<h;g++){const a=t[g]||t.getItemAt(g);if(!1===a.visible||!a.geometry)continue;if(f=a.toJSON(),f.hasOwnProperty("popupTemplate")&&delete f.popupTemplate,f.geometry&&f.geometry.z&&delete f.geometry.z,f.symbol&&f.symbol.outline&&"esriCLS"===f.symbol.outline.type&&!this._is11xService)continue;!this._is11xService&&f.symbol&&f.symbol.outline&&f.symbol.outline.color&&f.symbol.outline.color[3]&&(f.symbol.outline.color[3]=255);const c=e&&e.renderer&&("valueExpression"in e.renderer&&e.renderer.valueExpression||"hasVisualVariables"in e.renderer&&e.renderer.hasVisualVariables());if(!f.symbol&&e&&e.renderer&&c&&!this._is11xService){const t=e.renderer,r=await t.getSymbolAsync(a);if(!r)continue;f.symbol=r.toJSON(),"hasVisualVariables"in t&&t.hasVisualVariables()&&ge(f.symbol,{renderer:t,graphic:a,symbol:r})}if(f.symbol&&(f.symbol.angle||delete f.symbol.angle,Qe(f.symbol)?f.symbol=await this._convertSvgToPictureMarkerSymbolJson(f.symbol):f.symbol.text&&delete f.attributes),(!r||!r.forceFeatureAttributes)&&b&&b.length){const e={};b.forEach(t=>{f.attributes&&f.attributes.hasOwnProperty(t)&&(e[t]=f.attributes[t])}),f.attributes=e}"polygon"===a.geometry.type?i.featureSet.features.push(f):"polyline"===a.geometry.type?s.featureSet.features.push(f):"point"===a.geometry.type?f.symbol&&f.symbol.text?l.featureSet.features.push(f):n.featureSet.features.push(f):"multipoint"===a.geometry.type?o.featureSet.features.push(f):"extent"===a.geometry.type&&(f.geometry=p["a"].fromExtent(a.geometry).toJSON(),i.featureSet.features.push(f))}const m=[i,s,o,n,l].filter(e=>e.featureSet.features.length>0);for(const p of m){const e=p.featureSet.features.every(e=>e.symbol);!e||r&&r.forceFeatureAttributes||p.featureSet.features.forEach(e=>{delete e.attributes}),e&&delete p.layerDefinition.drawingInfo,p.layerDefinition.drawingInfo&&p.layerDefinition.drawingInfo.renderer&&await this._convertSvgRenderer(p.layerDefinition.drawingInfo.renderer)}return m.length?{featureCollection:{layers:m},showLabels:a}:null}async _createFeatureLayerJSON(e,t){var r,a;let i;this._legendLayers&&this._legendLayers.push({id:e.id});const s=e.renderer;if(e.featureReduction||s&&"dot-density"===s.type&&(!this._is11xService||parseFloat(this._cimVersion)<2.6))return this._createScreenshotJSON(e,t);const{layerView:n,printTemplate:o,view:l}=t,c=s&&("valueExpression"in s&&s.valueExpression||"hasVisualVariables"in s&&s.hasVisualVariables()),u="feature-layer"!==(null==(r=e.source)?void 0:r.type)&&"ogc-feature"!==(null==(a=e.source)?void 0:a.type);if(!this._is11xService&&c||e.featureReduction||u||!s||"field"in s&&null!=s.field&&("string"!=typeof s.field||!e.getField(s.field))){const t=await this._getGraphics(n);i=await this._createFeatureCollectionJSON(e,t,o)}else{var p,b;if(i={id:(y=e.write()).id,title:y.title,opacity:y.opacity,minScale:y.minScale,maxScale:y.maxScale,url:y.url,layerDefinition:y.layerDefinition},i.showLabels=o.showLabels&&e.labelsVisible,this._setURLandToken(i,e),null!=(p=i.layerDefinition)&&null!=(b=p.drawingInfo)&&b.renderer&&(delete i.layerDefinition.minScale,delete i.layerDefinition.maxScale,await this._convertSvgRenderer(i.layerDefinition.drawingInfo.renderer),"visualVariables"in s&&s.visualVariables&&s.visualVariables[0])){const e=s.visualVariables[0];if("size"===e.type&&e.maxSize&&"number"!=typeof e.maxSize&&e.minSize&&"number"!=typeof e.minSize){const t=Object(h["getSizeRangeAtScale"])(e,l.scale);i.layerDefinition.drawingInfo.renderer.visualVariables[0].minSize=t.minSize,i.layerDefinition.drawingInfo.renderer.visualVariables[0].maxSize=t.maxSize}}}var y;return i}async _createGeoJSONLayer(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}async _createGraphicsLayerJSON(e,{printTemplate:t}){return this._createFeatureCollectionJSON(e,null,t)}_createImageryLayerJSON(e){this._legendLayers&&this._legendLayers.push({id:e.id});const t={bandIds:e.bandIds,compressionQuality:e.compressionQuality,format:e.format,interpolation:e.interpolation};if((e.mosaicRule||e.definitionExpression)&&(t.mosaicRule=e.exportImageServiceParameters.mosaicRule.toJSON()),e.renderingRule||e.renderer)if(this._is11xService)e.renderingRule&&(t.renderingRule=e.renderingRule.toJSON()),e.renderer&&(t.layerDefinition=t.layerDefinition||{},t.layerDefinition.drawingInfo=t.layerDefinition.drawingInfo||{},t.layerDefinition.drawingInfo.renderer=e.renderer.toJSON());else{const r=e.exportImageServiceParameters.combineRendererWithRenderingRule();r&&(t.renderingRule=r.toJSON())}return this._setURLandToken(t,e),t}async _createKMLLayerJSON(e,t){const r=t.printTemplate;if(this._is11xService){const t={type:"kml"};return e.write(t,{origin:"web-map"}),delete t.layerType,t.url=Object(u["C"])(e.url),t}{const a=[],i=t.layerView;i.allVisibleMapImages.forEach((t,r)=>{const i={id:`${e.id}_image${r}`,type:"image",title:e.id,minScale:e.minScale||0,maxScale:e.maxScale||0,opacity:e.opacity,extent:t.extent};"data:image/png;base64,"===t.href.substr(0,22)?i.imageData=t.href.substr(22):i.url=t.href,a.push(i)});const s=[...i.allVisiblePoints.items,...i.allVisiblePolylines.items,...i.allVisiblePolygons.items],n={id:e.id,...await this._createFeatureCollectionJSON(null,s,r)};return a.push(n),a}}_createMapImageLayerJSON(e,{view:t}){let r;const a={id:e.id,subLayerIds:[]};let i=[];const s=t.scale,n=e=>{const t=0===s,r=0===e.minScale||s<=e.minScale,o=0===e.maxScale||s>=e.maxScale;if(e.visible&&(t||r&&o))if(e.sublayers)e.sublayers.forEach(n);else{const t=e.toExportImageJSON(),r={id:e.id,name:e.title,layerDefinition:{drawingInfo:t.drawingInfo,definitionExpression:t.definitionExpression,source:t.source}};i.unshift(r),a.subLayerIds.push(e.id)}};return e.sublayers&&e.sublayers.forEach(n),i.length&&(i=i.map(({id:e,name:t,layerDefinition:r})=>({id:e,name:t,layerDefinition:r})),r={layers:i,visibleLayers:e.capabilities.exportMap.supportsDynamicLayers?void 0:a.subLayerIds},this._setURLandToken(r,e),this._legendLayers.push(a)),r}async _createMapNotesLayerJSON({layerView:e,printTemplate:t}){const r=[],a=e.layer;if(Object(i["i"])(a.featureCollections))for(const i of a.featureCollections){const e=await this._createFeatureCollectionJSON(i,i.source,t);e&&r.push(...e.featureCollection.layers)}else if(Object(i["i"])(a.sublayers))for(const i of a.sublayers){const e=await this._createFeatureCollectionJSON(null,i.graphics,t);e&&r.push(...e.featureCollection.layers)}return{featureCollection:{layers:r}}}_createOpenStreetMapLayerJSON(){return{type:"OpenStreetMap"}}async _createScreenshotJSON(e,{printTemplate:t,view:r}){const a={type:"image"},i={format:"png",ignoreBackground:!0,layers:[e],rotation:0},s=this._ssExtent||r.extent.clone();let n=96,o=!0,l=!0;if(t.exportOptions){const e=t.exportOptions;e.dpi>0&&(n=e.dpi),e.width>0&&(o=e.width%2==r.width%2),e.height>0&&(l=e.height%2==r.height%2)}if("map-only"===t.layout&&t.scalePreserved&&(!t.outScale||t.outScale===r.scale)&&96===n&&(!o||!l)&&(i.area={x:0,y:0,width:r.width,height:r.height},o||(i.area.width-=1),l||(i.area.height-=1),!this._ssExtent)){const e=r.toMap(Object(b["b"])(i.area.width,i.area.height));s.ymin=e.y,s.xmax=e.x,this._ssExtent=s}a.extent=s.clone()._normalize(!0).toJSON();const c=await r.takeScreenshot(i),p=Object(u["i"])(c.dataUrl);return a.imageData=p.data,a}async _createStreamLayerJSON(e,{layerView:t,printTemplate:r}){this._legendLayers&&this._legendLayers.push({id:e.id});const a=await this._getGraphics(t);return this._createFeatureCollectionJSON(e,a,r)}_createTileLayerJSON(e){const t={customParameters:e.customParameters};return this._setURLandToken(t,e),t}async _createVectorTileLayerJSON(e,t){if(this._is11xService&&e.serviceUrl&&e.styleUrl){const t=y["b"]&&y["b"].findCredential(e.styleUrl),r=y["b"]&&y["b"].findCredential(e.serviceUrl);if(!t&&!r||"2.1.0"!==this._cimVersion){const a={type:"VectorTileLayer"};return a.styleUrl=Object(u["C"])(e.styleUrl),t&&(a.token=t.token),r&&r.token!==a.token&&(a.additionalTokens=[{url:e.serviceUrl,token:r.token}]),a}}return this._createScreenshotJSON(e,t)}_createWebTileLayerJSON(e){const t={type:"WebTiledLayer",urlTemplate:e.urlTemplate.replace(/\${/g,"{"),credits:e.copyright};return e.subDomains&&e.subDomains.length>0&&(t.subDomains=e.subDomains),t}_createWMSLayerJSON(e){let t;const r=[],a=e=>{e.visible&&(e.sublayers?e.sublayers.forEach(a):e.name&&r.unshift(e.name))};return e.sublayers&&e.sublayers.forEach(a),r.length&&(t={type:"wms",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,transparentBackground:e.imageTransparency,visibleLayers:r,url:Object(u["C"])(e.url),version:e.version}),t}_createWMTSLayerJSON(e){const t=e.activeLayer;return{type:"wmts",customLayerParameters:e.customLayerParameters,customParameters:e.customParameters,format:t.imageFormat,layer:t.id,style:t.styleId,tileMatrixSet:t.tileMatrixSetId,url:Object(u["C"])(e.url)}}_setURLandToken(e,t){var r;if(!t.url)return;e.url=Object(u["C"])(e.url||t.url);const a=null==(r=y["b"])?void 0:r.findCredential(t.url);a&&(e.token=a.token)}async _convertSvgToPictureMarkerSymbolJson(e){this._canvas||(this._canvas=document.createElement("canvas"));const t=1024;this._canvas.width=t,this._canvas.height=t;const r=this._canvas.getContext("2d");let a,i;if(e.path){var s;const n=new Path2D(e.path);n.closePath(),r.fillStyle=Array.isArray(e.color)?`rgba(${e.color[0]},${e.color[1]},${e.color[2]},${e.color[3]/255})`:"rgb(0,0,0)",r.fill(n);const o=we(r);if(!o)return null;r.clearRect(0,0,t,t);const l=Object(b["d"])(e.size)/Math.max(o.width,o.height);r.scale(l,l);const c=t/l,u=c/2-o.width/2-o.x,p=c/2-o.height/2-o.y;if(r.translate(u,p),Array.isArray(e.color)&&r.fill(n),null!=(s=e.outline)&&s.width&&Array.isArray(e.outline.color)){const t=e.outline;r.lineWidth=Object(b["d"])(t.width)/l,r.lineJoin="round",r.strokeStyle=`rgba(${t.color[0]},${t.color[1]},${t.color[2]},${t.color[3]/255})`,r.stroke(n),o.width+=r.lineWidth,o.height+=r.lineWidth}o.width*=l,o.height*=l;const y=r.getImageData(t/2-o.width/2,t/2-o.height/2,Math.ceil(o.width),Math.ceil(o.height));a=y.width,i=y.height,r.canvas.width=a,r.canvas.height=i,r.putImageData(y,0,0)}else{const t="image/svg+xml"===e.contentType?"data:image/svg+xml;base64,"+e.imageData:e.url,s=(await Object(d["default"])(t,{responseType:"image"})).data;a=Object(b["d"])(e.width),i=Object(b["d"])(e.height),r.canvas.width=a,r.canvas.height=i,r.drawImage(s,0,0,r.canvas.width,r.canvas.height)}return{type:"esriPMS",imageData:r.canvas.toDataURL("image/png").substr(22),angle:e.angle,contentType:"image/png",height:Object(b["e"])(i),width:Object(b["e"])(a),xoffset:e.xoffset,yoffset:e.yoffset}}async _convertSvgRenderer(e){const t=e.type;if("simple"===t&&Qe(e.symbol))e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol);else if("uniqueValue"===t||"classBreaks"===t){Qe(e.defaultSymbol)&&(e.defaultSymbol=await this._convertSvgToPictureMarkerSymbolJson(e.defaultSymbol));const r=e["uniqueValue"===t?"uniqueValueInfos":"classBreakInfos"];if(r)for(const e of r)Qe(e.symbol)&&(e.symbol=await this._convertSvgToPictureMarkerSymbolJson(e.symbol))}}_getGraphics(e){return e.queryFeatures(Ke).then(e=>e.features)}async _getPrintDefinition(e,t){const r=e.view;let a=r.spatialReference;const i={operationalLayers:await this._createOperationalLayers(r,t)};let s=this._ssExtent||e.extent||r.extent;return a&&a.isWrappable&&(s=s.clone()._normalize(!0),a=s.spatialReference),i.mapOptions={extent:s&&s.toJSON(),spatialReference:a&&a.toJSON(),showAttribution:t.attributionVisible},this._ssExtent=null,r.background&&(i.background=r.background.toJSON()),r.rotation&&(i.mapOptions.rotation=-r.rotation),t.scalePreserved&&(i.mapOptions.scale=t.outScale||r.scale),i}async _getGpPrintParams(e){const t=e.template||new ze;null==t.showLabels&&(t.showLabels=!0);const r=t.exportOptions;let a;const i=pe(t.layout);if(r&&(a={dpi:r.dpi},"map_only"===i.toLowerCase()||""===i)){const e=r.width,t=r.height;a.outputSize=[e,t]}const s=t.layoutOptions;let n;if(s){let e,t;"Miles"===s.scalebarUnit||"Kilometers"===s.scalebarUnit?(e="Kilometers",t="Miles"):"Meters"!==s.scalebarUnit&&"Feet"!==s.scalebarUnit||(e="Meters",t="Feet"),n={titleText:s.titleText,authorText:s.authorText,copyrightText:s.copyrightText,customTextElements:s.customTextElements,scaleBarOptions:{metricUnit:Ze.toJSON(e),metricLabel:We[e],nonMetricUnit:Ze.toJSON(t),nonMetricLabel:We[t]}}}let o=null;s&&s.legendLayers&&(o=s.legendLayers.map(e=>{this._legendLayerNameMap[e.layerId]=e.title;const t={id:e.layerId};return e.subLayerIds&&(t.subLayerIds=e.subLayerIds),t}));const l=await this._getPrintDefinition(e,t);if(l.operationalLayers){const e=new RegExp("[\\u4E00-\\u9FFF\\u0E00-\\u0E7F\\u0900-\\u097F\\u3040-\\u309F\\u30A0-\\u30FF\\u31F0-\\u31FF]"),t=/[\u0600-\u06FF]/,r=r=>{const a=r.text,i=r.font,s=i&&i.family&&i.family.toLowerCase();a&&i&&("arial"===s||"arial unicode ms"===s)&&(i.family=e.test(a)?"Arial Unicode MS":"Arial","normal"!==i.style&&t.test(a)&&(i.family="Arial Unicode MS"))},a=()=>{throw new c["a"]("print-task:cim-symbol-unsupported","CIMSymbol is not supported by a print service published from ArcMap")};l.operationalLayers.forEach(e=>{var t,i,s;null!=(t=e.featureCollection)&&t.layers?e.featureCollection.layers.forEach(e=>{var t,i,s,n;if(null!=(t=e.layerDefinition)&&null!=(i=t.drawingInfo)&&null!=(s=i.renderer)&&s.symbol){const t=e.layerDefinition.drawingInfo.renderer;"esriTS"===t.symbol.type?r(t.symbol):"CIMSymbolReference"!==t.symbol.type||this._is11xService||a()}null!=(n=e.featureSet)&&n.features&&e.featureSet.features.forEach(e=>{e.symbol&&("esriTS"===e.symbol.type?r(e.symbol):"CIMSymbolReference"!==e.symbol.type||this._is11xService||a())})}):!this._is11xService&&null!=(i=e.layerDefinition)&&null!=(s=i.drawingInfo)&&s.renderer&&JSON.stringify(e.layerDefinition.drawingInfo.renderer).includes('"type":"CIMSymbolReference"')&&a()})}e.outSpatialReference&&(l.mapOptions.spatialReference=e.outSpatialReference.toJSON()),Object.assign(l,{exportOptions:a,layoutOptions:n||{}}),Object.assign(l.layoutOptions,{legendOptions:{operationalLayers:null!=o?o:this._legendLayers.slice()}}),this._legendLayers.length=0;const u={Web_Map_as_JSON:JSON.stringify(l),Format:ce(t.format),Layout_Template:i};return e.extraParameters&&Object.assign(u,e.extraParameters),u}};Object(a["a"])([Object(n["b"])()],Ye.prototype,"_geoprocessor",null),Object(a["a"])([Object(n["b"])()],Ye.prototype,"_gpMetadata",void 0),Object(a["a"])([Object(n["b"])({readOnly:!0})],Ye.prototype,"mode",null),Object(a["a"])([Object(n["b"])()],Ye.prototype,"updateDelay",void 0),Ye=Object(a["a"])([Object(l["a"])("esri.tasks.PrintTask")],Ye);var He=Ye;t["default"]=He}}]);