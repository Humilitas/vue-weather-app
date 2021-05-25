(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d175374"],{"0c9a":function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return f}));r("c120");var i=r("b2b2"),s=r("ce6d"),n=r("971e"),a=r("4261"),o=r("901f"),u=r("8483"),c=r("f209");function d(e,t){return e<<16|t}function l(e){return(4294901760&e)>>>16}function h(e){return 65535&e}const f={getObjectId:e=>e.getObjectId(),getAttributes:e=>e.readAttributes(),getAttribute:(e,t)=>e.readAttribute(t),cloneWithGeometry:(e,t)=>e,getGeometry:e=>e.readHydratedGeometry(),getCentroid:(e,t)=>e.readCentroid()};class _ extends u["a"]{constructor(e,t,r){super(e,t),this.featureAdapter=f,this.events=new s["a"],this._featureSetsByInstance=new Map,this._objectIdToDisplayId=new Map,this._spatialIndexInvalid=!0,this._indexSearchCache=new n["a"](50),this._index=Object(o["a"])(9,e=>({minX:this._storage.getXMin(e),minY:this._storage.getYMin(e),maxX:this._storage.getXMax(e),maxY:this._storage.getYMax(e)})),this._storage=t,this.mode=r}get storage(){return this._storage}get storeStatistics(){return{featureCount:0,vertexCount:0}}hasInstance(e){return this._featureSetsByInstance.has(e)}onTileData(e,t){if(Object(i["h"])(t.addOrUpdate))return t;if(t.addOrUpdate.attachStorage(this._storage),"snapshot"===this.mode){const r=t.addOrUpdate.getCursor();for(;r.next();){const t=r.getDisplayId();this.setComputedAttributes(this._storage,r,t,e.scale)}return t}this._featureSetsByInstance.set(t.addOrUpdate.instance,t.addOrUpdate);const r=t.addOrUpdate.getCursor();for(;r.next();)this._insertFeature(r,e.scale);return this._spatialIndexInvalid=!0,this.events.emit("changed"),t}search(e){this._rebuildIndex();const t=e.id,r=this._indexSearchCache.find(e=>e.tileId===t);if(Object(i["i"])(r))return r.readers;const s=new Map,n=this._searchIndex(e.bounds),a=[];for(const i of n){const e=this._storage.getInstanceId(i),t=l(e),r=h(e);s.has(t)||s.set(t,[]),s.get(t).push(r)}return s.forEach((e,t)=>{const r=this._featureSetsByInstance.get(t);a.push(c["a"].from(r,e))}),this._indexSearchCache.enqueue({tileId:t,readers:a}),a}insert(e){const t=e.getCursor(),r=this._storage;for(;t.next();){var i;const e=d(t.instance,t.getIndex()),s=t.getObjectId(),n=null!=(i=this._objectIdToDisplayId.get(s))?i:this._storage.createDisplayId();t.setDisplayId(n),r.setInstanceId(n,e),this._objectIdToDisplayId.set(s,n)}this._featureSetsByInstance.set(e.instance,e),this._spatialIndexInvalid=!0}remove(e){const t=this._objectIdToDisplayId.get(e);if(!t)return;const r=this._storage.getInstanceId(t),i=h(r),s=l(r),n=this._featureSetsByInstance.get(s);this._objectIdToDisplayId.delete(e),this._storage.releaseDisplayId(t),n.removeAtIndex(i),n.isEmpty&&this._featureSetsByInstance.delete(s),this._spatialIndexInvalid=!0}forEach(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),i=this._lookupFeature(r);e(i)})}forEachUnsafe(e){this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t),i=l(r),s=h(r),n=this._getFeatureSet(i);n.setIndex(s),e(n)})}forEachInBounds(e,t){const r=this._searchIndex(e);for(const s of r){const e=this.lookupFeatureByDisplayId(s,this._storage);t(Object(i["o"])(e))}}forEachBounds(e,t,r){this._rebuildIndex();const i=[0,0,0,0];for(const s of e){if(!s.readGeometry())continue;const e=s.getDisplayId();i[0]=this._storage.getXMin(e),i[1]=this._storage.getYMin(e),i[2]=this._storage.getXMax(e),i[3]=this._storage.getYMax(e),t(Object(a["h"])(r,i))}}sweepFeatures(e,t,r){this._spatialIndexInvalid=!0,this._objectIdToDisplayId.forEach((i,s)=>{e.has(i)||(t.releaseDisplayId(i),r&&r.unsetAttributeData(i),this._objectIdToDisplayId.delete(s))}),this.events.emit("changed")}sweepFeatureSets(e){this._spatialIndexInvalid=!0,this._featureSetsByInstance.forEach((t,r)=>{e.has(r)||this._featureSetsByInstance.delete(r)})}lookupObjectId(e,t){const r=this.lookupFeatureByDisplayId(e,t);return Object(i["h"])(r)?null:r.getObjectId()}lookupDisplayId(e){return this._objectIdToDisplayId.get(e)}lookupFeatureByDisplayId(e,t){const r=t.getInstanceId(e);return this._lookupFeature(r)}lookupByDisplayIdUnsafe(e){const t=this._storage.getInstanceId(e),r=l(t),i=h(t),s=this._getFeatureSet(r);return s?(s.setIndex(i),s):null}_insertFeature(e,t){const r=this._storage,i=e.getObjectId(),s=d(e.instance,e.getIndex());r.getInstanceId(e.getDisplayId());let n=this._objectIdToDisplayId.get(i);n||(n=r.createDisplayId(),this._objectIdToDisplayId.set(i,n),this._spatialIndexInvalid=!0),e.setDisplayId(n),r.setInstanceId(n,s),this.setComputedAttributes(r,e,n,t)}_searchIndex(e){this._rebuildIndex();const t={minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]};return this._index.search(t)}_rebuildIndex(){if(!this._spatialIndexInvalid)return;const e=[];"snapshot"===this.mode?this._featureSetsByInstance.forEach(t=>{const r=t.getCursor();for(;r.next();){const t=r.getDisplayId();this._storage.setBounds(t,r)&&e.push(t)}}):this._objectIdToDisplayId.forEach(t=>{const r=this._storage.getInstanceId(t);this._storage.setBounds(t,this._lookupFeature(r))&&e.push(t)}),this._index.clear(),this._index.load(e),this._indexSearchCache.clear(),this._spatialIndexInvalid=!1}_lookupFeature(e){const t=l(e),r=h(e),i=this._getFeatureSet(t);if(!i)return null;const s=i.getCursor();return s.setIndex(r),s}_getFeatureSet(e){return this._featureSetsByInstance.get(e)}}},"1eef":function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return y})),r.d(t,"d",(function(){return x})),r.d(t,"e",(function(){return S})),r.d(t,"f",(function(){return I}));var i=r("b2b2"),s=r("fa8a"),n=r("7f83"),a=r("f8d4"),o=r("a9ab"),u=r("8048"),c=r("a8d5"),d=r("8152"),l=r("6655"),h=(r("d97e"),r("1ec3"));const f=new s["a"]({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),_=Object.freeze({}),p=new d["a"],m=new d["a"],g=new d["a"],b={esriGeometryPoint:l["m"],esriGeometryPolyline:l["o"],esriGeometryPolygon:l["n"],esriGeometryMultipoint:l["l"]};function I(e,t,r,i=e.hasZ,s=e.hasM){const n=e.hasZ&&i,a=e.hasM&&s;if(r){const o=Object(l["u"])(g,t,e.hasZ,e.hasM,"esriGeometryPoint",r,i,s);return Object(l["m"])(o,n,a)}return Object(l["m"])(t,n,a)}function y(e,t,r,i,s,n,a=t,o=r){const u=t&&a,c=r&&o,d=i?"coords"in i?i:i.geometry:null;if(!d)return null;if(s){let i=Object(l["q"])(m,d,t,r,e,s,a,o);return n&&(i=Object(l["u"])(g,i,u,c,e,n)),b[e](i,u,c)}if(n){const i=Object(l["u"])(g,d,t,r,e,n,a,o);return b[e](i,u,c)}return Object(l["x"])(p,d,t,r,a,o),b[e](p,u,c)}async function x(e,t,r){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:a}=e;if(i)for(let o=0;o<i.length;o++)i[o]=i[o].trim();if(s)for(let o=0;o<s.length;o++)s[o]=s[o].trim();if(n)for(let o=0;o<n.length;o++)n[o]=n[o].trim();if(a)for(let o=0;o<a.length;o++)a[o].onStatisticField&&(a[o].onStatisticField=a[o].onStatisticField.trim());return e.geometry&&!e.outSR&&(e.outSR=e.geometry.spatialReference),S(e,t,r)}async function S(e,t,r){if(!e)return null;let{where:s}=e;if(e.where=s=s&&s.trim(),(!s||/^1 *= *1$/.test(s)||t&&t===s)&&(e.where=null),!e.geometry)return e;let n=await O(e);if(e.distance=0,e.units=null,"esriSpatialRelEnvelopeIntersects"===e.spatialRel){const{spatialReference:t}=e.geometry;n=Object(a["a"])(n),n.spatialReference=t}e.geometry=n,await Object(h["a"])(n.spatialReference,r);const u=(await Object(c["a"])(Object(o["a"])(n)))[0];if(Object(i["h"])(u))throw _;const d=u.toJSON(),l=await Object(h["b"])(d,d.spatialReference,r);if(!l)throw _;return l.spatialReference=r,e.geometry=l,e}async function O(e){const{geometry:t,distance:r,units:i}=e;if(null==r||"vertexAttributes"in t)return t;const s=t.spatialReference,a=i?f.fromJSON(i):Object(u["f"])(s),o=s&&(Object(n["f"])(s)||Object(n["m"])(s))?t:await Object(h["a"])(s,n["a"]).then(()=>Object(h["b"])(t,n["a"]));return(await j())(o.spatialReference,o,r,a)}async function j(){return(await Promise.all([r.e("chunk-2d22cf8c"),r.e("chunk-180660b2")]).then(r.bind(null,"00ac"))).geodesicBuffer}function w(e){return e&&F in e?JSON.parse(JSON.stringify(e,v)):e}const F="_geVersion",v=(e,t)=>e!==F?t:void 0},"2a5b":function(e,t,r){"use strict";r.d(t,"a",(function(){return F})),r.d(t,"b",(function(){return w})),r.d(t,"c",(function(){return j}));var i=r("ce50"),s=r("7f83"),n=r("2172"),a=r("3cd6"),o=r("a9ab"),u=r("8152"),c=r("6655");function d(e,t){return e?t?4:3:t?3:2}function l(e,t,r,i){return f(e,t,r,i.coords[0],i.coords[1])}function h(e,t,r,i,s,n){const a=d(s,n),{coords:o,lengths:u}=i;if(!u)return!1;for(let c=0,d=0;c<u.length;c++,d+=a)if(!f(e,t,r,o[d],o[d+1]))return!1;return!0}function f(e,t,r,i,s){if(!e)return!1;const n=d(t,r),{coords:a,lengths:o}=e;let u=!1,c=0;for(const d of o)u=_(u,a,n,c,d,i,s),c+=d*n;return u}function _(e,t,r,i,s,n,a){let o=e,u=i;for(let c=i,d=i+s*r;c<d;c+=r){u=c+r,u===d&&(u=i);const e=t[c],s=t[c+1],l=t[u],h=t[u+1];(s<a&&h>=a||h<a&&s>=a)&&e+(a-s)/(h-s)*(l-e)<n&&(o=!o)}return o}var p=r("1ec3"),m=r("1eef");const g="feature-store:unsupported-query",b={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},I={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function y(e){return!0===I.spatialRelationship[e]}function x(e){return!0===I.queryGeometry[Object(o["c"])(e)]}function S(e){return!0===I.layerGeometry[e]}function O(){return Promise.all([r.e("chunk-2d22cf8c"),r.e("chunk-180660b2")]).then(r.bind(null,"00ac"))}function j(e,t,r,i,s){if(Object(o["g"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=Object(c["g"])(new u["a"],t,!1,!1);return Promise.resolve(t=>l(e,!1,!1,t))}if(Object(o["g"])(t)&&"esriGeometryMultipoint"===r){const r=Object(c["g"])(new u["a"],t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve(e=>h(r,!1,!1,e,i,s))}if(Object(o["d"])(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve(e=>Object(n["e"])(t,Object(m["c"])(r,i,s,e)));if(Object(o["d"])(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve(e=>Object(n["d"])(t,Object(m["c"])(r,i,s,e)));if(Object(o["d"])(t)&&"esriSpatialRelIntersects"===e){const e=Object(a["b"])(r);return Promise.resolve(n=>e(t,Object(m["c"])(r,i,s,n)))}return O().then(n=>{const a=n[b[e]].bind(null,t.spatialReference,t);return e=>a(Object(m["c"])(r,i,s,e))})}async function w(e,t,r){const{spatialRel:n,geometry:a}=e;if(a){if(!y(n))throw new i["a"](g,"Unsupported query spatial relationship",{query:e});if(Object(s["i"])(a.spatialReference)&&Object(s["i"])(r)){if(!x(a))throw new i["a"](g,"Unsupported query geometry type",{query:e});if(!S(t))throw new i["a"](g,"Unsupported layer geometry type",{query:e});if(e.outSR)return Object(p["a"])(e.geometry&&e.geometry.spatialReference,e.outSR)}}}function F(e){if(Object(o["d"])(e))return!0;if(Object(o["g"])(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}},4261:function(e,t,r){"use strict";r.d(t,"a",(function(){return x})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return y})),r.d(t,"e",(function(){return o})),r.d(t,"f",(function(){return c})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return b})),r.d(t,"i",(function(){return a})),r.d(t,"j",(function(){return m})),r.d(t,"k",(function(){return p})),r.d(t,"l",(function(){return _})),r.d(t,"m",(function(){return f}));var i=r("b2b2");r("3af1"),r("9180");function s(e){return e}function n(e=S){return s([e[0],e[1],e[2],e[3],e[4],e[5]])}function a(e,t,r,i,s,a,o=n()){return o[0]=e,o[1]=t,o[2]=r,o[3]=i,o[4]=s,o[5]=a,o}function o(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function c(e,t,r){const i=t.length;let s=e[0],n=e[1],a=e[2],o=e[3],u=e[4],c=e[5];if(r)for(let d=0;d<i;d++){const e=t[d];s=Math.min(s,e[0]),n=Math.min(n,e[1]),a=Math.min(a,e[2]),o=Math.max(o,e[0]),u=Math.max(u,e[1]),c=Math.max(c,e[2])}else for(let d=0;d<i;d++){const e=t[d];s=Math.min(s,e[0]),n=Math.min(n,e[1]),o=Math.max(o,e[0]),u=Math.max(u,e[1])}e[0]=s,e[1]=n,e[2]=a,e[3]=o,e[4]=u,e[5]=c}function d(e){return e[0]>=e[3]?0:e[3]-e[0]}function l(e){return e[1]>=e[4]?0:e[4]-e[1]}function h(e){return e[2]>=e[5]?0:e[5]-e[2]}function f(e,t=[0,0,0]){return t[0]=d(e),t[1]=l(e),t[2]=h(e),t}function _(e,t,r=e){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r!==e&&(r[3]=e[3],r[4]=e[4],r[5]=e[5]),r}function p(e,t,r=e){return r[3]=t[0],r[4]=t[1],r[5]=t[2],r!==e&&(r[0]=e[0],r[1]=e[1],r[2]=e[2]),e}function m(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function g(e){return e?m(e,x):n(x)}function b(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function I(e){return 6===e.length}function y(e,t,r){if(Object(i["h"])(e)||Object(i["h"])(t))return e===t;if(!I(e)||!I(t))return!1;if(r){for(let i=0;i<e.length;i++)if(!r(e[i],t[i]))return!1}else for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}s([-1/0,-1/0,-1/0,1/0,1/0,1/0]);const x=s([1/0,1/0,1/0,-1/0,-1/0,-1/0]),S=s([0,0,0,0,0,0]);n()},8483:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var i=r("c120"),s=r("b2b2"),n=r("82fa"),a=r("0f1c"),o=r("e92d");function u(e,t,r){e.referencesGeometry();const i=t.readArcadeFeature();try{return e.evaluate({...r,$feature:i})}catch(s){return o["a"].getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",s),null}}var c=u;const d=r.e("chunk-2d222178").then(r.bind(null,"ccac"));class l{constructor(e,t){this._canCacheExpressionValue=!1,this._sourceInfo=e,this._bitsets={computed:t.getBitset(t.createBitset())}}invalidate(){this._bitsets.computed.clear()}async updateSchema(e,t){const r=Object(a["a"])(this._schema,t);if(this._schema=t,!t||Object(s["h"])(r)||!Object(a["b"])(r,"attributes"))return;Object(i["a"])("esri-2d-update-debug")&&console.debug("Applying Update - Store:",r),this._bitsets.computed.clear(),e.targets[t.name]=!0;const n=t.attributes,o=[],u=[];for(const i in n){const e=n[i];switch(e.type){case"field":break;case"expression":o.push(this._createArcadeComputedField(e));break;case"label-expression":o.push(this._createLabelArcadeComputedField(e));break;case"statistic":u.push(e)}}this._computedFields=await Promise.all(o),this._canCacheExpressionValue=!this._computedFields.some(e=>"expression"===e.type&&e.expression.referencesScale()),this._statisticFields=u}setComputedAttributes(e,t,r,i){const s=this._bitsets.computed;if(!this._canCacheExpressionValue||!s.has(r)){s.set(r);for(const s of this._computedFields){const n=this._evaluateField(t,s,i);switch(s.resultType){case"numeric":e.setComputedNumericAtIndex(r,s.fieldIndex,n);break;case"string":e.setComputedStringAtIndex(r,s.fieldIndex,n)}}}}async _createArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fieldsIndex;return{...e,expression:await Object(n["d"])(e.valueExpression,t,r)}}async _createLabelArcadeComputedField(e){const t=this._sourceInfo.spatialReference,r=this._sourceInfo.fields,{createLabelFunction:i}=await d,s=await i(e.label,r,t);return{...e,builder:s}}_evaluateField(e,t,r){switch(t.type){case"label-expression":{const r=e.readArcadeFeature();return t.builder.evaluate(r)||""}case"expression":{const{expression:i}=t;return c(i,e,{$view:{scale:r}})}}}}},"971e":function(e,t,r){"use strict";var i=r("b2b2");class s{constructor(e=Number.POSITIVE_INFINITY){this.size=0,this._start=0,this.maxSize=e,this._buffer=isFinite(e)?new Array(e):[]}get entries(){return this._buffer}enqueue(e){if(this.size===this.maxSize){const t=this._buffer[this._start];return this._buffer[this._start]=e,this._start=(this._start+1)%this.maxSize,t}return isFinite(this.maxSize)?this._buffer[(this._start+this.size++)%this.maxSize]=e:this._buffer[this._start+this.size++]=e,null}dequeue(){if(0===this.size)return null;const e=this._buffer[this._start];return this._buffer[this._start]=null,this.size--,this._start=(this._start+1)%this.maxSize,e}peek(){return 0===this.size?null:this._buffer[this._start]}find(e){if(0===this.size)return null;for(const t of this._buffer)if(Object(i["i"])(t)&&e(t))return t;return null}clear(e){let t=this.dequeue();for(;Object(i["i"])(t);)e&&e(t),t=this.dequeue()}}t["a"]=s},abb8:function(e,t,r){"use strict";function i(e,t){if(!e)return null;const r=t.featureAdapter,{startTimeField:i,endTimeField:s}=e;let n=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(i&&s)t.forEach(e=>{const t=r.getAttribute(e,i),o=r.getAttribute(e,s);null==t||isNaN(t)||(n=Math.min(n,t)),null==o||isNaN(o)||(a=Math.max(a,o))});else{const e=i||s;t.forEach(t=>{const i=r.getAttribute(t,e);null==i||isNaN(i)||(n=Math.min(n,i),a=Math.max(a,i))})}return{start:n,end:a}}function s(e,t,r){if(!t||!e)return null;const{startTimeField:i,endTimeField:s}=e;if(!i&&!s)return null;const{start:u,end:c}=t;return null===u&&null===c?null:void 0===u&&void 0===c?o():i&&s?n(r,i,s,u,c):a(r,i||s,u,c)}function n(e,t,r,i,s){return null!=i&&null!=s?n=>{const a=e.getAttribute(n,t),o=e.getAttribute(n,r);return(null==a||a<=s)&&(null==o||o>=i)}:null!=i?t=>{const s=e.getAttribute(t,r);return null==s||s>=i}:null!=s?r=>{const i=e.getAttribute(r,t);return null==i||i<=s}:void 0}function a(e,t,r,i){return null!=r&&null!=i&&r===i?i=>e.getAttribute(i,t)===r:null!=r&&null!=i?s=>{const n=e.getAttribute(s,t);return n>=r&&n<=i}:null!=r?i=>e.getAttribute(i,t)>=r:null!=i?r=>e.getAttribute(r,t)<=i:void 0}function o(){return()=>!1}r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}))},eb83:function(e,t,r){"use strict";r.r(t);var i=r("b2b2"),s=r("e92d"),n=r("ce50"),a=r("28b1"),o=r("9180"),u=r("c64f"),c=r("1eef"),d=r("2a5b"),l=r("abb8"),h=r("0c9a");const f=s["a"].getLogger("esri.views.2d.layers.features.support.whereUtils"),_={getAttribute:(e,t)=>e.field(t)};async function p(e,t){const i=await r.e("chunk-2d0d03a7").then(r.bind(null,"66a2"));try{const r=i.WhereClause.create(e,t);if(!r.isStandardized){const e=new n["a"]("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",r);f.error(e)}return e=>{const t=e.readArcadeFeature();return r.testFeature(t,_)}}catch(s){return f.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",e),e=>!0}}const m=s["a"].getLogger("esri.views.2d.layers.features.controllers.FeatureFilter"),g=1,b=2;class I{constructor(e){this._geometryBounds=Object(o["e"])(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,g)}setTrue(e){const t=[],r=[],i=new Set(e);return this._idToVisibility.forEach((e,s)=>{const n=!!(this._idToVisibility.get(s)&g),a=i.has(s);!n&&a?t.push(s):n&&!a&&r.push(s),this._idToVisibility.set(s,a?g|b:0)}),{show:t,hide:r}}createQuery(){const{geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s}=this;return u["a"].fromJSON({geometry:e,spatialRel:t,where:r,timeExtent:i,objectIds:s})}async update(e,t){this._hash=JSON.stringify(e);const r=await Object(c["e"])(e,null,t);await Promise.all([this._setGeometryFilter(r),this._setIdFilter(r),this._setAttributeFilter(r),this._setTimeFilter(r)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await p(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,r=e.spatialRel||"esriSpatialRelIntersects",i=await Object(d["c"])(r,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);Object(a["a"])(this._geometryBounds,t),this._spatialQueryOperator=i,this.geometry=t,this.spatialRel=r}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=Object(l["b"])(this._serviceInfo.timeInfo,e.timeExtent,h["b"]);else{const t=new n["a"]("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!Object(i["i"])(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,r)=>{t&g||(this._idToVisibility.set(r,g),e.push(r))}),e}}t["default"]=I},f209:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var i=r("f0d0");class s extends i["a"]{constructor(e,t){super(i["a"].createInstance()),this._currentIndex=-1,this._reader=e,this._indices=t}static from(e,t){return new s(e.copy(),t)}get hasNext(){return this._currentIndex+1<this._indices.length}getApproximateSize(){return this._indices.length}getCursor(){return this.copy()}copy(){const e=new s(this._reader.copy(),this._indices);return e._currentIndex=this._currentIndex,e}next(){for(;this._nextIndex()&&!this._reader._passesFilter()&&!this._reader._getExists(););return this._currentIndex<this._indices.length}_nextIndex(){return++this._currentIndex<this._indices.length&&(this._reader.setIndex(this._indices[this._currentIndex]),!0)}setArcadeSpatialReference(e){this._reader.setArcadeSpatialReference(e)}attachStorage(e){this._reader.attachStorage(e)}get geometryType(){return this._reader.geometryType}get hasFeatures(){return this._reader.hasFeatures}get exceededTransferLimit(){return this._reader.exceededTransferLimit}get hasZ(){return this._reader.hasZ}get hasM(){return this._reader.hasM}getStorage(){return this._reader.getStorage()}getComputedNumeric(e){return this._reader.getComputedNumericAtIndex(0)}setComputedNumeric(e,t){return this._reader.setComputedNumericAtIndex(t,0)}getComputedString(e){return this._reader.getComputedStringAtIndex(0)}setComputedString(e,t){return this._reader.setComputedStringAtIndex(0,t)}getComputedNumericAtIndex(e){return this._reader.getComputedNumericAtIndex(e)}setComputedNumericAtIndex(e,t){this._reader.setComputedNumericAtIndex(e,t)}getComputedStringAtIndex(e){return this._reader.getComputedStringAtIndex(e)}setComputedStringAtIndex(e,t){return this._reader.setComputedStringAtIndex(e,t)}transform(e,t,r,i){const s=this.copy();return s._reader=this._reader.transform(e,t,r,i),s}extent(e,t,r,i){const s=this.copy();return s._reader=this._reader.extent(e,t,r,i),s}hasFilter(){return this._reader.hasFilter()}readAttribute(e,t=!1){return this._reader.readAttribute(e,t)}readAttributes(){return this._reader.readAttributes()}joinAttributes(e){return this._reader.joinAttributes(e)}readArcadeFeature(){return this._reader.readArcadeFeature()}geometry(){return this._reader.geometry()}field(e){return this.readAttribute(e,!0)}hasField(e){return this._reader.hasField(e)}setField(e,t){return this._reader.setField(e,t)}keys(){return this._reader.keys()}castToText(){return this._reader.castToText()}getQuantizationTransform(){return this._reader.getQuantizationTransform()}getAttributeHash(){return this._reader.getAttributeHash()}getObjectId(){return this._reader.getObjectId()}getDisplayId(){return this._reader.getDisplayId()}setDisplayId(e){return this._reader.setDisplayId(e)}getGroupId(){return this._reader.getGroupId()}setGroupId(e){return this._reader.setGroupId(e)}getXHydrate(){return this._reader.getXHydrate()}getYHydrate(){return this._reader.getYHydrate()}getX(){return this._reader.getX()}getY(){return this._reader.getY()}setIndex(e){return this._reader.setIndex(e)}getIndex(){return this._reader.getIndex()}readLegacyFeature(){return this._reader.readLegacyFeature()}readOptimizedFeature(){return this._reader.readOptimizedFeature()}readLegacyPointGeometry(){return this._reader.readLegacyPointGeometry()}readLegacyGeometry(){return this._reader.readLegacyGeometry()}readLegacyCentroid(){return this._reader.readLegacyCentroid()}readGeometryArea(){return this._reader.readGeometryArea()}readUnquantizedGeometry(){return this._reader.readUnquantizedGeometry()}readHydratedGeometry(){return this._reader.readHydratedGeometry()}readGeometry(){return this._reader.readGeometry()}readCentroid(){return this._reader.readCentroid()}_passesFilter(){return this._reader._passesFilter()}_readAttribute(e,t){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}_readAttributes(){throw new Error("Error: Should not be called. Underlying _reader should be used instead")}}}}]);