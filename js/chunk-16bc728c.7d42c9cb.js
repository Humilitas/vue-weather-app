(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16bc728c","chunk-2d0d3e74","chunk-2d0d3e74"],{"04c4":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("c120"),s=n("ce76");const r=5e4,o={minX:0,minY:0,maxX:0,maxY:0};function a(e,t,n){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3],e.search(o,n)}class l{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s["a"](9,Object(i["a"])("csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach((n,i)=>{e[t++]=i}),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter(e=>this._idByBounds.has(e))),this._boundsToLoad.length=0)}}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),a(this._index,e,e=>t(this._idByBounds.get(e)))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>r&&this._loadIndex()))}}},"5f6c":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return i}));"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof e||"undefined"!=typeof self&&self;function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function s(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return r(e,null==t?n.path:t)}},n.exports),n.exports}function r(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}}).call(this,n("c8ba"))},6517:function(e,t,n){"use strict";var i=n("b2b2"),s=n("e92d"),r=n("ce50"),o=n("ce6d"),a=n("9180"),l=n("6655"),c=n("4261"),d=n("04c4"),u=n("9392"),h=n("8152"),f=n("d97e");const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new u["a"](t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(e.centroid||(e.centroid=Object(f["a"])(new h["a"],e.geometry,t.hasZ,t.hasM)),e.centroid)};class p{constructor(e){this.geometryInfo=e,this._boundsStore=new d["a"],this._featuresById=new Map,this._markedIds=new Set,this.events=new o["a"],this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){if(!this.numFeatures)return null;const e=Object(a["e"])(a["a"]);return this._featuresById.forEach(t=>{const n=this._boundsStore.get(t.objectId);n&&(e[0]=Math.min(n[0],e[0]),e[1]=Math.min(n[1],e[1]),e[2]=Math.max(n[2],e[2]),e[3]=Math.max(n[3],e[3]))}),e}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,n){for(const i of e){const e=this._boundsStore.get(i.objectId);e&&t(Object(c["h"])(n,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,e=>{t(this._featuresById.get(e))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void s["a"].getLogger("esri.layers.graphics.data.FeatureStore").error(new r["a"]("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let o;if(this._markedIds.add(t),n?(e.displayId=n.displayId,o=this._boundsStore.get(t),this._boundsStore.delete(t)):Object(i["i"])(this.onFeatureAdd)&&this.onFeatureAdd(e),!e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);o=Object(l["r"])(o||Object(a["e"])(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),this._boundsStore.set(t,o),this._featuresById.set(t,e)}_remove(e){return Object(i["i"])(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}t["a"]=p},7015:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return h}));var i=n("b3b6"),s=n("2035");const r={ar:[".",","],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function o(e){e||(e=Object(s["b"])());let t=e in r;if(!t){const n=e.split("-");n.length>1&&n[0]in r&&(e=n[0],t=!0),t||(e="en")}const[n,i,o="#,##0.###"]=r[e];return{decimal:n,group:i,pattern:o}}function a(e,t){const n=o((t={...t}).locale);t.customs=n;const i=t.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:c(e,i,t)}const l=/[#0,]*[#0](?:\.0*#*)?/;function c(e,t,n){const i=(n=n||{}).customs.group,s=n.customs.decimal,r=t.split(";"),o=r[0];if(-1!==(t=r[e<0?1:0]||"-"+o).indexOf("%"))e*=100;else if(-1!==t.indexOf("‰"))e*=1e3;else{if(-1!==t.indexOf("¤"))throw new Error("currency notation not supported");if(-1!==t.indexOf("E"))throw new Error("exponential notation not supported")}const a=l,c=o.match(a);if(!c)throw new Error("unable to find a number expression in pattern: "+t);return!1===n.fractional&&(n.places=0),t.replace(a,d(e,c[0],{decimal:s,group:i,places:n.places,round:n.round}))}function d(e,t,n){!0===(n=n||{}).places&&(n.places=0),n.places===1/0&&(n.places=6);const i=t.split("."),s="string"==typeof n.places&&n.places.indexOf(",");let r=n.places;s?r=n.places.substring(s+1):r>=0||(r=(i[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(r))));const o=String(Math.abs(e)).split("."),a=o[1]||"";if(i[1]||n.places){s&&(n.places=n.places.substring(0,s));const e=void 0!==n.places?n.places:i[1]&&i[1].lastIndexOf("0")+1;e>a.length&&(o[1]=a.padEnd(Number(e),"0")),r<a.length&&(o[1]=a.substr(0,Number(r)))}else o[1]&&o.pop();const l=i[0].replace(",","");let c=l.indexOf("0");-1!==c&&(c=l.length-c,c>o[0].length&&(o[0]=o[0].padStart(c,"0")),-1===l.indexOf("#")&&(o[0]=o[0].substr(o[0].length-c)));let d,u,h=i[0].lastIndexOf(",");if(-1!==h){d=i[0].length-h-1;const e=i[0].substr(0,h);h=e.lastIndexOf(","),-1!==h&&(u=e.length-h-1)}const f=[];for(let m=o[0];m;){const e=m.length-d;f.push(e>0?m.substr(e):m),m=e>0?m.slice(0,e):"",u&&(d=u,u=void 0)}return o[0]=f.reverse().join(n.group||","),o.join(n.decimal||".")}function u(e){const t=o((e=e||{}).locale),n=e.pattern||t.pattern,s=t.group,r=t.decimal;let a=1;if(-1!==n.indexOf("%"))a/=100;else if(-1!==n.indexOf("‰"))a/=1e3;else if(-1!==n.indexOf("¤"))throw new Error("currency notation not supported");const c=n.split(";");return 1===c.length&&c.push("-"+c[0]),{regexp:p(c,(function(t){return(t="(?:"+Object(i["a"])(t,".")+")").replace(l,(function(t){const n={signed:!1,separator:e.strict?s:[s,""],fractional:e.fractional,decimal:r,exponent:!1},i=t.split(".");let o=e.places;1===i.length&&1!==a&&(i[1]="###"),1===i.length||0===o?n.fractional=!1:(void 0===o&&(o=e.pattern?i[1].lastIndexOf("0")+1:1/0),o&&null==e.fractional&&(n.fractional=!0),!e.places&&o<i[1].length&&(o+=","+i[1].length),n.places=o);const l=i[0].split(",");return l.length>1&&(n.groupSize=l.pop().length,l.length>1&&(n.groupSize2=l.pop().length)),"("+f(n)+")"}))}),!0).replace(/[\xa0 ]/g,"[\\s\\xa0]"),group:s,decimal:r,factor:a}}function h(e,t){const n=u(t),i=new RegExp("^"+n.regexp+"$").exec(e);if(!i)return NaN;let s=i[1];if(!i[1]){if(!i[2])return NaN;s=i[2],n.factor*=-1}return s=s.replace(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(s)*n.factor}function f(e){"places"in(e=e||{})||(e.places=1/0),"string"!=typeof e.decimal&&(e.decimal="."),"fractional"in e&&!/^0/.test(String(e.places))||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const t=m(e),n=p(e.fractional,(function(t){let n="";return t&&0!==e.places&&(n="\\"+e.decimal,e.places===1/0?n="(?:"+n+"\\d+)?":n+="\\d{"+e.places+"}"),n}),!0);let i=t+n;return n&&(i="(?:(?:"+i+")|(?:"+n+"))"),i+p(e.exponent,(function(t){return t?"([eE]"+m({signed:e.eSigned})+")":""}))}function m(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",p(e.signed,(function(e){return e?"[-+]":""}),!0)+p(e.separator,(function(t){if(!t)return"(?:\\d+)";" "===(t=Object(i["a"])(t))?t="\\s":" "===t&&(t="\\s\\xa0");const n=e.groupSize,s=e.groupSize2;if(s){const e="(?:0|[1-9]\\d{0,"+(s-1)+"}(?:["+t+"]\\d{"+s+"})*["+t+"]\\d{"+n+"})";return n-s>0?"(?:"+e+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":e}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+t+"]\\d{"+n+"})*)"}),!0)}const p=function(e,t,n){if(!(e instanceof Array))return t(e);const i=[];for(let s=0;s<e.length;s++)i.push(t(e[s]));return g(i.join("|"),n)},g=function(e,t){return"("+(t?"?:":"")+e+")"}},"88d1":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o}));var i=n("c120"),s=n("7ffa"),r=n("8246");function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?r["a"]:"esriGeometryPolyline"===e?r["c"]:r["b"]}}}function a(e,t){if(Object(i["a"])("csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${t.indexOf(".")?`["${t}"]`:"."+t} = ${JSON.stringify(e[t])};`;const i=new Function(n);return()=>new i}catch(n){return()=>({[t]:null,...e})}}function l(e={}){return[{name:"New Feature",description:"",prototype:{attributes:Object(s["a"])(e)}}]}},ce76:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("b2b2"),s=n("b50f"),r=n("8a44"),o=n("4637");class a{constructor(e=9,t){this.compareMinX=u,this.compareMinY=h,this.toBBox=function(e){return e},this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this.toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),b.prune(),I.prune(),F.prune(),w.prune()}all(e){this._all(this.data,e)}search(e,t){let n=this.data;const i=this.toBBox;if(x(e,n))for(b.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;x(e,o)&&(n.leaf?t(r):y(e,o)?this._all(r,t):b.push(r))}n=b.pop()}}collides(e){let t=this.data;const n=this.toBBox;if(!x(e,t))return!1;for(b.clear();t;){for(let i=0,s=t.children.length;i<s;i++){const s=t.children[i],r=t.leaf?n(s):s;if(x(e,r)){if(t.leaf||y(e,r))return!0;b.push(s)}}t=b.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this.data.children.length)if(this.data.height===t.height)this._splitRoot(this.data,t);else{if(this.data.height<t.height){const e=this.data;this.data=t,t=e}this._insert(t,this.data.height-t.height-1,!0)}else this.data=t;return this}insert(e){return e&&this._insert(e,this.data.height-1),this}clear(){return this.data=new N([]),this}remove(e){if(!e)return this;let t,n=this.data,r=null,o=0,a=!1;const l=this.toBBox(e);for(F.clear(),w.clear();n||F.length>0;){var c;if(n||(n=Object(i["c"])(F.pop()),r=F.data[F.length-1],o=null!=(c=w.pop())?c:0,a=!0),n.leaf&&(t=Object(s["e"])(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),F.push(n),this._condense(F),this;a||n.leaf||!y(n,l)?r?(o++,n=r.children[o],a=!1):n=null:(F.push(n),w.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this.data}fromJSON(e){return this.data=e,this}_all(e,t){let n=e;for(I.clear();n;){var i;if(!0===n.leaf)for(const e of n.children)t(e);else I.pushArray(n.children);n=null!=(i=I.pop())?i:null}}_build(e,t,n,i){const s=n-t+1;let r=this._maxEntries;if(s<=r){const i=new N(e.slice(t,n+1));return l(i,this.toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new O([]);o.height=i;const a=Math.ceil(s/r),c=a*Math.ceil(Math.sqrt(r));_(e,t,n,c,this.compareMinX);for(let l=t;l<=n;l+=c){const t=Math.min(l+c-1,n);_(e,l,t,a,this.compareMinY);for(let n=l;n<=t;n+=a){const s=Math.min(n+a-1,t);o.children.push(this._build(e,n,s,i-1))}}return l(o,this.toBBox),o}_chooseSubtree(e,t,n,i){for(;i.push(t),!0!==t.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=t.children.length;r<o;r++){const o=t.children[r],a=f(o),l=p(e,o)-a;l<s?(s=l,i=a<i?a:i,n=o):l===s&&a<i&&(i=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const i=this.toBBox,s=n?e:i(e);F.clear();const r=this._chooseSubtree(s,this.data,t,F);for(r.children.push(e),d(r,s);t>=0&&F.data[t].children.length>this._maxEntries;)this._split(F,t),t--;this._adjustParentBBoxes(s,F,t)}_split(e,t){const n=e.data[t],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),a=n.leaf?new N(o):new O(o);a.height=n.height,l(n,this.toBBox),l(a,this.toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this.data=new O([e,t]),this.data.height=e.height+1,l(this.data,this.toBBox)}_chooseSplitIndex(e,t,n){let i,s,r;i=s=1/0;for(let o=t;o<=n-t;o++){const t=c(e,0,o,this.toBBox),a=c(e,o,n,this.toBBox),l=g(t,a),d=f(t)+f(a);l<i?(i=l,r=o,s=d<s?d:s):l===i&&d<s&&(s=d,r=o)}return r}_chooseSplitAxis(e,t,n){const i=e.leaf?this.compareMinX:u,s=e.leaf?this.compareMinY:h;this._allDistMargin(e,t,n,i)<this._allDistMargin(e,t,n,s)&&e.children.sort(i)}_allDistMargin(e,t,n,i){e.children.sort(i);const s=this.toBBox,r=c(e,0,t,s),o=c(e,n-t,n,s);let a=m(r)+m(o);for(let l=t;l<n-t;l++){const t=e.children[l];d(r,e.leaf?s(t):t),a+=m(r)}for(let l=n-t-1;l>=t;l--){const t=e.children[l];d(o,e.leaf?s(t):t),a+=m(o)}return a}_adjustParentBBoxes(e,t,n){for(let i=n;i>=0;i--)d(t.data[i],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const i=e.data[t-1],r=i.children;r.splice(Object(s["e"])(r,n,r.length,i.indexHint),1)}else this.clear();else l(n,this.toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){c(e,0,e.children.length,t,e)}function c(e,t,n,i,s){s||(s=new N([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=t;o<n;o++)r=e.children[o],d(s,e.leaf?i(r):r);return s}function d(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function u(e,t){return e.minX-t.minX}function h(e,t){return e.minY-t.minY}function f(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function m(e){return e.maxX-e.minX+(e.maxY-e.minY)}function p(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function g(e,t){const n=Math.max(e.minX,t.minX),i=Math.max(e.minY,t.minY),s=Math.min(e.maxX,t.maxX),r=Math.min(e.maxY,t.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function y(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function x(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function _(e,t,n,s,r){const a=[t,n];for(;a.length;){const t=Object(i["c"])(a.pop()),n=Object(i["c"])(a.pop());if(t-n<=s)continue;const l=n+Math.ceil((t-n)/s/2)*s;Object(o["a"])(e,l,n,t,r),a.push(n,l,l,t)}}const b=new r["a"],I=new r["a"],F=new r["a"],w=new r["a"]({deallocator:void 0});class B{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends B{constructor(){super(...arguments),this.height=1,this.indexHint=new s["a"]}}class N extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class O extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},d77e:function(e,t,n){"use strict";n.r(t),n.d(t,"csvLatitudeFieldNames",(function(){return Y})),n.d(t,"csvLongitudeFieldNames",(function(){return X}));var i=n("c120"),s=n("ce50"),r=n("e041"),o=n("7f83"),a=n("5996"),l=n("9786"),c=(n("e06a"),n("2eab")),d=n("8188"),u=n("7015"),h=n("9392"),f=n("8152"),m=n("80b7"),p=n("d641"),g=n("88d1"),y=n("1ec3"),x=n("6517"),_=n("6411");const b=/^\s*"([\S\s]*)"\s*$/,I=/""/g,F="\n",w=[","," ",";","|","\t"];function B(e,t){const n={},i=e.length;for(let s=0;s<i;s++)n[e[s]]=t[s];return n}function*v(e,t,n){let i=0;for(;i<=e.length;){const s=e.indexOf(t,i),r=e.substring(i,s>-1?s:void 0);i+=r.length+1,n&&!r.trim()||(yield r)}}function N(e){const t=e.includes("\r\n")?"\r\n":F;return v(e,t,!0)}function O(e,t){return v(e,t,!1)}function j(e){const t=e.trim();let n=0,i="";for(const s of w){const e=t.split(s).length;e>n&&(n=e,i=s)}return""===i?null:i}function*M(e,t,n){let i="",s="",r=0,o=[];e:for(;;){const{value:a,done:l}=e.next();if(l)return;const c=O(a,n);t:for(;;){const{value:e,done:t}=c.next();if(t)break t;if(i+=s+e,s="",r+=E(e),r%2==0){if(r>0){const e=b.exec(i);if(!e){o=[],i="",r=0;continue e}o.push(e[1].replace(I,'"'))}else o.push(i);i="",r=0}else s=n}0===r?(yield B(t,o),o=[]):s=F}}function E(e){let t=0,n=0;for(n=e.indexOf('"',n);n>=0;)t++,n=e.indexOf('"',n+1);return t}const T=Object(g["c"])("esriGeometryPoint"),S=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"],Y=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point-y"],X=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point-x"],D=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i,k=["csv"],C=[0,0];class q{constructor(e,t){this.x=e,this.y=t}}const L=function(){const e=Object(u["a"])(),t=new RegExp("^"+e.regexp+"$"),n=new RegExp("["+e.group+"\\s\\xa0]","g"),i=e.factor;return function(s){const r=t.exec(s);if(e.factor=i,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],e.factor*=-1}return o=o.replace(n,"").replace(e.decimal,"."),+o*e.factor}}(),R="isInteger"in Number?Number.isInteger:e=>"number"==typeof e&&isFinite(e)&&Math.floor(e)===e;class P{constructor(){this._fieldsIndex=null,this._queryEngine=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=null,this._fieldsIndex=null}async load(e,t={}){const[n]=await Promise.all([this._fetch(e.url,t),this._checkProjection(t&&e.parsing&&e.parsing.spatialReference)]),i=this._parse(n,e);if(this._queryEngine=this._createQueryEngine(n,i),i.layerDefinition.extent=this._queryEngine.fullExtent,i.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;i.layerDefinition.timeInfo.timeExtent=[e,t]}return i}async applyEdits(){throw new s["a"]("csv-source:editing-not-supported","applyEdits() is not supported on CSVLayer")}queryFeatures(e={},t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e={},t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e={},t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e={},t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}async _fetch(e,t){if(!e)throw new s["a"]("csv-source:invalid-source","url not defined");const n=Object(r["J"])(e);return(await Object(c["default"])(n.path,{query:n.query,responseType:"text",signal:t.signal})).data}_parse(e,t){const n=t.parsing||{},i={columnDelimiter:n.columnDelimiter,layerDefinition:null,locationInfo:{latitudeFieldName:n.latitudeField,longitudeFieldName:n.longitudeField}},o=N(e);let{value:a}=o.next();if(!a)throw new s["a"]("csv","CSV is empty",{csv:e});if(a=a.trim(),!n.columnDelimiter){const e=j(a);if(!e)throw new s["a"]("csv-source:invalid-delimiter","Unable to detect the delimiter from CSV");i.columnDelimiter=e}const l=a.split(i.columnDelimiter),c=i.layerDefinition={name:Object(r["k"])(t.url,k)||"csv",drawingInfo:T,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:n.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:n.spatialReference||{wkid:102100}}};if(!n.latitudeField||!n.longitudeField){const e=this._inferLocationInfo(l);if(!n.longitudeField&&!e.longitudeFieldName||!n.latitudeField&&!e.latitudeFieldName)throw new s["a"]("csv","Unable to identify latitudeField and/or longitudeField from CSV");i.locationInfo={longitudeFieldName:n.longitudeField||e.longitudeFieldName,latitudeFieldName:n.latitudeField||e.latitudeFieldName}}const d=this._inferFields(o,i.columnDelimiter,l,i.locationInfo);if(n.fields&&n.fields.length){const e=new Map;for(const t of n.fields)e.set(t.name.toLowerCase(),t);for(const t of d){const n=e.get(t.name.toLowerCase());if(n){const e=t.name;Object.assign(t,n),t.name=e}}}if(c.fields=d,!c.fields.some(e=>"esriFieldTypeOID"===e.type&&(c.objectIdField=e.name,!0))){const e={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};c.objectIdField=e.name,c.fields.unshift(e)}if(this._fieldsIndex=new m["a"](c.fields),c.timeInfo){const e=c.timeInfo;if(e.startTimeField){const t=this._fieldsIndex.get(e.startTimeField);t?(e.startTimeField=t.name,t.type="esriFieldTypeDate"):e.startTimeField=null}if(e.endTimeField){const t=this._fieldsIndex.get(e.endTimeField);t?(e.endTimeField=t.name,t.type="esriFieldTypeDate"):e.endTimeField=null}if(e.trackIdField){const t=this._fieldsIndex.get(e.trackIdField);e.trackIdField=t?t.name:null}e.startTimeField||e.endTimeField||(c.timeInfo=null)}return i}_inferLocationInfo(e){let t=null,n=null;const i=t=>e.find(e=>e.toLowerCase()===t);return X.some(e=>(t=i(e),!!t)),Y.some(e=>(n=i(e),!!n)),{longitudeFieldName:t,latitudeFieldName:n}}_inferFields(e,t,n,i){const s=[],r=M(e,n,t),o=[];e:for(;o.length<10;){const{value:e,done:t}=r.next();if(t)break e;o.push(e)}for(const a of n)if(a===i.longitudeFieldName||a===i.latitudeFieldName)s.push({name:a,type:"esriFieldTypeDouble",alias:a});else{const e=o.map(e=>e[a]),t=this._inferFieldType(e),n={name:a,type:null,alias:a};switch(t){case"integer":n.type="esriFieldTypeInteger";break;case"double":n.type="esriFieldTypeDouble";break;case"date":n.type="esriFieldTypeDate",n.length=36;break;default:n.type="esriFieldTypeString",n.length=255}s.push(n)}return s}_inferFieldType(e){if(!e.length)return"string";const t=/[^+-.,0-9]/;return e.map(e=>{let n=!1;if(""!==e){if(t.test(e))n=!0;else{let t=L(e);if(!isNaN(t))return/[.,]/.test(e)||!R(t)||t>214783647||t<-214783648?"double":"integer";if(-1===e.indexOf("E"))n=!0;else{if(t=Number(e),!isNaN(t))return"double";if(-1===e.indexOf(","))n=!0;else{if(e=e.replace(",","."),t=Number(e),!isNaN(t))return"double";n=!0}}}if(n){if(!/^[-]?\d*[.,]?\d*$/.test(e)){const t=new Date(e);return this._isValidDate(t,e)?"date":"string"}return"string"}return"string"}}).reduce((e,t)=>void 0===e||e===t?t:"string"===e||"string"===t?"string":"double"===e||"double"===t?"double":void 0)}_isValidDate(e,t){if(!e||"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))return!1;let n=!0;if(Object(i["a"])("chrome")&&/\d+\W*$/.test(t)){const e=t.match(/[a-zA-Z]{2,}/);if(e){let t=!1,i=0;for(;!t&&i<=e.length;)t=!D.test(e[i]),i++;n=!t}}return n}_createQueryEngine(e,t){const{latitudeFieldName:n,longitudeFieldName:i}=t.locationInfo,{objectIdField:s,fields:r,extent:c,timeInfo:u}=t.layerDefinition;let m=[];const g=[],y=new Set,b=new Set,I=[];for(const{name:o,type:a}of r)"esriFieldTypeDate"===a?y.add(o):S.indexOf(a)>-1&&b.add(o),o!==s&&I.push(o);let F=0;const w=N(e);w.next();const B=M(w,I,t.columnDelimiter);e:for(;;){const{value:e,done:t}=B.next();if(t)break e;const r=this._parseCoordinateValue(e[n]),o=this._parseCoordinateValue(e[i]);if(null!=o&&null!=r&&!isNaN(r)&&!isNaN(o)){e[n]=r,e[i]=o;for(const t in e)if(t!==n&&t!==i)if(y.has(t)){const n=new Date(e[t]);e[t]=this._isValidDate(n,e[t])?n.getTime():null}else if(b.has(t)){const n=L(e[t]);isNaN(n)?e[t]=null:e[t]=n}e[s]=F,F++,m.push(new q(o,r)),g.push(e)}}if(!Object(o["c"])({wkid:4326},c.spatialReference))if(Object(o["m"])(c.spatialReference))for(const o of m)[o.x,o.y]=Object(l["c"])(o.x,o.y,C);else m=Object(d["i"])(p["a"],m,a["a"].WGS84,c.spatialReference,null);const v=new x["a"]({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1}),O=new _["a"]({fields:t.layerDefinition.fields,geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:u,objectIdField:s,spatialReference:c.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:v}),j=[];for(let o=0;o<m.length;o++){const{x:e,y:t}=m[o],n=g[o];n[s]=o+1,j.push(new h["a"](new f["a"]([],[e,t]),n,null,n[s]))}return v.addMany(j),O}_parseCoordinateValue(e){if(null==e||""===e)return null;let t=L(e);return(isNaN(t)||Math.abs(t)>181)&&(t=parseFloat(e)),t}async _checkProjection(e){try{await Object(y["a"])(o["a"],e)}catch{throw new s["a"]("csv-layer","Projection not supported")}}}t["default"]=P}}]);