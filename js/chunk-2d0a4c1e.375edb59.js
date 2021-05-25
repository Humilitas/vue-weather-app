(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4c1e"],{"0899":function(e,t,a){"use strict";a.r(t),a.d(t,"applyEdits",(function(){return c})),a.d(t,"isEditableLayer",(function(){return u}));var r=a("7ffa"),s=a("b2b2"),d=a("ce50"),i=a("e041"),n=a("2c4f"),l=a("8d60"),o=a("a8d5");function u(e){var t,a;return!0===(null==e||null==(t=e.capabilities)||null==(a=t.operations)?void 0:a.supportsEditing)&&e&&(!("editingEnabled"in e)||e.editingEnabled)}function p(e){return e&&null!=e.applyEdits}async function c(e,t,a,s){let d,i;const n={edits:a,result:new Promise((e,t)=>{d=e,i=t})};e.emit("apply-edits",n);try{const{results:i,edits:n}=await h(e,t,a,s),l=e=>e.filter(e=>!e.error).map(r["a"]),o={edits:n,addedFeatures:l(i.addFeatureResults),updatedFeatures:l(i.updateFeatureResults),deletedFeatures:l(i.deleteFeatureResults),addedAttachments:l(i.addAttachmentResults),updatedAttachments:l(i.updateAttachmentResults),deletedAttachments:l(i.deleteAttachmentResults)};return(o.addedFeatures.length||o.updatedFeatures.length||o.deletedFeatures.length||o.addedAttachments.length||o.updatedAttachments.length||o.deletedAttachments.length)&&e.emit("edits",o),d(o),i}catch(p){throw i(p),p}}async function h(e,t,a,r){if(await e.load(),!p(t))return Promise.reject(new d["a"](e.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",{layer:e}));if(!e.editingEnabled)throw new d["a"](e.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:e});const s=await m(e,a,r);return s.addFeatures.length||s.updateFeatures.length||s.deleteFeatures.length||s.addAttachments.length||s.updateAttachments.length||s.deleteAttachments.length?{edits:s,results:await t.applyEdits(s,r)}:{edits:s,results:{addFeatureResults:[],updateFeatureResults:[],deleteFeatureResults:[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}}function m(e,t,a){const r=t&&(t.addFeatures||t.updateFeatures||t.deleteFeatures),s=t&&(t.addAttachments||t.updateAttachments||t.deleteAttachments);if(!t||!r&&!s)throw new d["a"](e.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures', 'deleteFeatures', 'addAttachments', 'updateAttachments' or 'deleteAttachments' parameter is required");if(!e.capabilities.data.isVersioned&&a&&a.gdbVersion)throw new d["a"](e.type+"-layer:invalid-parameter","'gdbVersion' is applicable only if the layer supports versioned data. See: 'capabilities.data.isVersioned'");if(!e.capabilities.editing.supportsRollbackOnFailure&&a&&a.rollbackOnFailureEnabled)throw new d["a"](e.type+"-layer:invalid-parameter","This layer does not support 'rollbackOnFailureEnabled' parameter. See: 'capabilities.editing.supportsRollbackOnFailure'");if(!e.capabilities.editing.supportsGlobalId&&a&&a.globalIdUsed)throw new d["a"](e.type+"-layer:invalid-parameter","This layer does not support 'globalIdUsed' parameter. See: 'capabilities.editing.supportsGlobalId'");if(!e.capabilities.editing.supportsGlobalId&&s)throw new d["a"](e.type+"-layer:invalid-parameter","'addAttachments', 'updateAttachments' and 'deleteAttachments' are applicable only if the layer supports global ids. See: 'capabilities.editing.supportsGlobalId'");if((!a||!a.globalIdUsed)&&s)throw new d["a"](e.type+"-layer:invalid-parameter","When 'addAttachments', 'updateAttachments' or 'deleteAttachments' is specified, globalIdUsed should be set to true");const i={...t};if(i.addFeatures=t&&n["a"].isCollection(t.addFeatures)?t.addFeatures.toArray():i.addFeatures||[],i.updateFeatures=t&&n["a"].isCollection(t.updateFeatures)?t.updateFeatures.toArray():i.updateFeatures||[],i.deleteFeatures=t&&n["a"].isCollection(t.deleteFeatures)?t.deleteFeatures.toArray():i.deleteFeatures||[],i.addFeatures.length&&!e.capabilities.operations.supportsAdd)throw new d["a"](e.type+"-layer:unsupported-operation","Layer does not support adding features.");if(i.updateFeatures.length&&!e.capabilities.operations.supportsUpdate)throw new d["a"](e.type+"-layer:unsupported-operation","Layer does not support updating features.");if(i.deleteFeatures.length&&!e.capabilities.operations.supportsDelete)throw new d["a"](e.type+"-layer:unsupported-operation","Layer does not support deleting features.");i.addAttachments=i.addAttachments||[],i.updateAttachments=i.updateAttachments||[],i.deleteAttachments=i.deleteAttachments||[],i.addFeatures=i.addFeatures.map(A),i.updateFeatures=i.updateFeatures.map(A);const l=a&&a.globalIdUsed;return i.addFeatures.forEach(t=>b(t,e,l)),i.updateFeatures.forEach(t=>f(t,e,l)),i.deleteFeatures.forEach(t=>g(t,e,l)),i.addAttachments.forEach(t=>w(t,e)),i.updateAttachments.forEach(t=>w(t,e)),F(i)}function y(e,t,a){if(a){if("attributes"in e&&!e.attributes[t.globalIdField])throw new d["a"](t.type+"-layer:invalid-parameter","Feature should have 'globalId' when 'globalIdUsed' is true");if(!("attributes"in e)&&!e.globalId)throw new d["a"](t.type+"-layer:invalid-parameter","'globalId' of the feature should be passed when 'globalIdUsed' is true")}if("geometry"in e&&Object(s["i"])(e.geometry)){if(e.geometry.hasZ&&!1===t.capabilities.data.supportsZ)throw new d["a"](t.type+"-layer:z-unsupported","Layer does not support z values while feature has z values.");if(e.geometry.hasM&&!1===t.capabilities.data.supportsM)throw new d["a"](t.type+"-layer:m-unsupported","Layer does not support m values while feature has m values.")}}function b(e,t,a){y(e,t,a)}function g(e,t,a){y(e,t,a)}function f(e,t,a){if(y(e,t,a),"geometry"in e&&Object(s["i"])(e.geometry)&&!t.capabilities.editing.supportsGeometryUpdate)throw new d["a"](t.type+"-layer:unsupported-operation","Layer does not support geometry updates.")}function w(e,t){const{feature:a,attachment:r}=e;if(!a||"attributes"in a&&!a.attributes[t.globalIdField])throw new d["a"](t.type+"-layer:invalid-parameter","Attachment should have reference to a feature with 'globalId'");if(!("attributes"in a)&&!a.globalId)throw new d["a"](t.type+"-layer:invalid-parameter","Attachment should have reference to 'globalId' of the parent feature");if(!r.globalId)throw new d["a"](t.type+"-layer:invalid-parameter","Attachment should have 'globalId'");if(!r.data&&!r.uploadId)throw new d["a"](t.type+"-layer:invalid-parameter","Attachment should have 'data' or 'uploadId'");if(!(r.data instanceof File&&r.data.name)&&!r.name)throw new d["a"](t.type+"-layer:invalid-parameter","'name' is required when attachment is specified as Base64 encoded string using 'data'");if(!t.capabilities.editing.supportsUploadWithItemId&&r.uploadId)throw new d["a"](t.type+"-layer:invalid-parameter","This layer does not support 'uploadId' parameter. See: 'capabilities.editing.supportsUploadWithItemId'");if("string"==typeof r.data){const e=Object(i["i"])(r.data);if(e&&!e.isBase64)throw new d["a"](t.type+"-layer:invalid-parameter","Attachment 'data' should be a Blob, File or Base64 encoded string")}}async function F(e){const t=e.addFeatures,a=e.updateFeatures,r=t.concat(a).map(e=>e.geometry),s=await Object(o["a"])(r),d=t.length,i=a.length;return s.slice(0,d).forEach((t,a)=>{e.addFeatures[a].geometry=t}),s.slice(d,d+i).forEach((t,a)=>{e.updateFeatures[a].geometry=t}),e}function A(e){const t=new l["a"];return e.attributes||(e.attributes={}),t.geometry=e.geometry,t.attributes=e.attributes,t}}}]);