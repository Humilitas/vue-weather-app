(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a2d38"],{"0024":function(t,e,r){"use strict";var o=r("a4ee"),a=(r("c120"),r("e92d"),r("cea0"),r("59b2")),s=r("d386"),i=(r("e041"),r("8eed"),r("f402"),r("6a0e")),n=r("a9ab");let c=class extends i["a"]{constructor(t){super(t),this.geometries=null,this.outSpatialReference=null,this.transformation=null,this.transformForward=null}toJSON(){const t=this.geometries.map((function(t){return t.toJSON()})),e=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=e.spatialReference.wkid||JSON.stringify(e.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:Object(n["c"])(e),geometries:t}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r}};Object(o["a"])([Object(a["b"])()],c.prototype,"geometries",void 0),Object(o["a"])([Object(a["b"])({json:{read:{source:"outSR"}}})],c.prototype,"outSpatialReference",void 0),Object(o["a"])([Object(a["b"])()],c.prototype,"transformation",void 0),Object(o["a"])([Object(a["b"])()],c.prototype,"transformForward",void 0),c=Object(o["a"])([Object(s["a"])("esri.tasks.support.ProjectParameters")],c);var f=c;e["a"]=f}}]);