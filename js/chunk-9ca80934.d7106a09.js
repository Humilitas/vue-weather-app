(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9ca80934"],{"0e50":function(e,t,a){"use strict";a.r(t);var r=a("a4ee"),s=a("c120"),n=a("7ffa"),u=a("9d1d"),i=a("b2b2"),l=(a("e92d"),a("cea0"),a("59b2")),o=a("d386"),d=a("ce50"),c=a("e041"),h=(a("8eed"),a("f402"),a("3af1")),y=a("2eab"),p=a("6d5f"),m=a("658b"),b=a("8914"),f=a("d8b2"),g=a("feec"),F=a("88d1");async function O(e){if("string"==typeof e){const t=Object(c["i"])(e);return t||{data:e}}return new Promise((t,a)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(Object(c["i"])(r.result)),r.onerror=e=>a(e)})}const R=new Set(["Feature Layer","Table"]);let I=class extends p["a"]{constructor(){super(...arguments),this.type="feature-layer"}load(e){const t=Object(i["i"])(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}get queryTask(){const{capabilities:{query:{supportsFormatPBF:e}},parsedUrl:t,dynamicDataSource:a,gdbVersion:r,spatialReference:n,fieldsIndex:u}=this.layer,i=Object(s["a"])("featurelayer-pbf")&&e?"pbf":"json";return new g["a"]({url:t.path,format:i,fieldsIndex:u,dynamicDataSource:a,gdbVersion:r,sourceSpatialReference:n})}async addAttachment(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/addAttachment",s=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(t,s.query);try{const e=await Object(y["default"])(r,{body:n});return this._createFeatureEditResult(e.data.addAttachmentResult)}catch(u){throw this._createAttachmentErrorResult(a,u)}}async updateAttachment(e,t,a){await this.load();const r=e.attributes[this.layer.objectIdField],s=this.layer.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:t}}),u=this._getFormDataForAttachment(a,n.query);try{const e=await Object(y["default"])(s,{body:u});return this._createFeatureEditResult(e.data.updateAttachmentResult)}catch(i){throw this._createAttachmentErrorResult(r,i)}}async applyEdits(e,t){await this.load();const a=e.addFeatures.map(this._serializeFeature,this),r=e.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(e.deleteFeatures,null==t?void 0:t.globalIdUsed);Object(b["b"])(a,r,this.layer.spatialReference);const n=[],u=[],i=[...e.deleteAttachments];for(const c of e.addAttachments)n.push(await this._serializeAttachment(c));for(const c of e.updateAttachments)u.push(await this._serializeAttachment(c));const l=n.length||u.length||i.length?{adds:n,updates:u,deletes:i}:null,o=this._getLayerRequestOptions({method:"post",query:{adds:a.length?JSON.stringify(a):null,updates:r.length?JSON.stringify(r):null,deletes:s.length?null!=t&&t.globalIdUsed?JSON.stringify(s):s.join(","):null,gdbVersion:(null==t?void 0:t.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==t?void 0:t.rollbackOnFailureEnabled,useGlobalIds:null==t?void 0:t.globalIdUsed,attachments:l&&JSON.stringify(l)}}),d=await Object(y["default"])(this.layer.parsedUrl.path+"/applyEdits",o);return this._createEditsResult(d)}async deleteAttachments(e,t){await this.load();const a=e.attributes[this.layer.objectIdField],r=this.layer.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await Object(y["default"])(r,this._getLayerRequestOptions({query:{attachmentIds:t.join(",")},method:"post"}))).data.deleteAttachmentResults.map(this._createFeatureEditResult)}catch(s){throw this._createAttachmentErrorResult(a,s)}}fetchRecomputedExtents(e={}){const t=e.signal;return this.load({signal:t}).then(async()=>{const t=this._getLayerRequestOptions({...e,query:{returnUpdates:!0}}),{layerId:a,url:r}=this.layer,{data:s}=await Object(y["default"])(`${r}/${a}`,t),{id:n,extent:u,fullExtent:i,timeExtent:l}=s,o=u||i;return{id:n,fullExtent:o&&h["a"].fromJSON(o),timeExtent:l&&m["a"].fromJSON({start:l[0],end:l[1]})}})}async queryAttachments(e,t={}){const{parsedUrl:a}=this.layer,r=a.path;await this.load();const s=this._getLayerRequestOptions(t);if(!this.layer.get("capabilities.operations.supportsQueryAttachments")){const{objectIds:t}=e,a=[];for(const e of t){const t=r+"/"+e+"/attachments";a.push(Object(y["default"])(t,s))}return Promise.all(a).then(e=>t.map((t,a)=>({parentObjectId:t,attachmentInfos:e[a].data.attachmentInfos}))).then(e=>Object(f["b"])(e,r))}return this.queryTask.executeAttachmentQuery(e,s)}async queryFeatures(e,t){return await this.load(),this.queryTask.execute(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeaturesJSON(e,t){return await this.load(),this.queryTask.executeJSON(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryObjectIds(e,t){return await this.load(),this.queryTask.executeForIds(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryFeatureCount(e,t){return await this.load(),this.queryTask.executeForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryExtent(e,t){return await this.load(),this.queryTask.executeForExtent(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeatures(e,t){return await this.load(),this.queryTask.executeRelationshipQuery(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async queryRelatedFeaturesCount(e,t){return await this.load(),this.queryTask.executeRelationshipQueryForCount(e,{...t,query:{...this.layer.customParameters,...null==t?void 0:t.query}})}async _fetchService(e){let t=this.layer.sourceJSON;if(!t){const{data:a}=await Object(y["default"])(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:Object(s["a"])("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:e}));t=a}this.sourceJSON=this._patchServiceJSON(t);const a=t.type;if(!R.has(a))throw new d["a"]("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}_patchServiceJSON(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){const t=Object(F["c"])(e.geometryType).renderer;Object(u["c"])("drawingInfo.renderer",t,e)}return e}_serializeFeature(e){const{geometry:t,attributes:a}=e;return Object(i["h"])(t)?{attributes:a}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:a}}async _serializeAttachment(e){const{feature:t,attachment:a}=e,{globalId:r,name:s,contentType:n,data:u,uploadId:i}=a,l={globalId:r,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null};if(t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)l.uploadId=i;else if(u){const e=await O(u);l.contentType=e.mediaType,l.data=e.data,u instanceof File&&(l.name=u.name)}return s&&(l.name=s),n&&(l.contentType=n),l}_getFeatureIds(e,t){const a=e[0];return a?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in a?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}_getIdsFromFeatures(e){const t=this.layer.objectIdField;return e.map(e=>e.attributes&&e.attributes[t])}_canUseGlobalIds(e,t){return e&&"globalId"in t[0]}_getObjectIdsFromFeatureIdentifier(e){return e.map(e=>e.objectId)}_getGlobalIdsFromFeatureIdentifier(e){return e.map(e=>e.globalId)}_createEditsResult(e){const t=e.data,a=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:a&&a.addResults?a.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:a&&a.updateResults?a.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:a&&a.deleteResults?a.deleteResults.map(this._createFeatureEditResult,this):[]}}_createFeatureEditResult(e){const t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new d["a"]("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}_createAttachmentErrorResult(e,t){const a=t.details.messages&&t.details.messages[0]||t.message,r=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new d["a"]("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(e,t){const a=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(a)for(const r in t){const e=t[r];null!=e&&(a.set?a.set(r,e):a.append(r,e))}return a}_getLayerRequestOptions(e={}){const{parsedUrl:t,gdbVersion:a,dynamicDataSource:r}=this.layer;return{...e,query:Object(n["c"])({gdbVersion:a,layer:r?JSON.stringify({source:r}):void 0,...t.query,f:"json",...this.layer.customParameters,...null==e?void 0:e.query}),responseType:"json"}}};Object(r["a"])([Object(l["b"])()],I.prototype,"type",void 0),Object(r["a"])([Object(l["b"])({constructOnly:!0})],I.prototype,"layer",void 0),Object(r["a"])([Object(l["b"])({readOnly:!0})],I.prototype,"queryTask",null),I=Object(r["a"])([Object(o["a"])("esri.layers.graphics.sources.FeatureLayerSource")],I);var q=I;t["default"]=q},"88d1":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return u}));var r=a("c120"),s=a("7ffa"),n=a("8246");function u(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n["a"]:"esriGeometryPolyline"===e?n["c"]:n["b"]}}}function i(e,t){if(Object(r["a"])("csp-restrictions"))return()=>({[t]:null,...e});try{let a=`this.${t} = null;`;for(const t in e)a+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const r=new Function(a);return()=>new r}catch(a){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(e)}}]}}}]);