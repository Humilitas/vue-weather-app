(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8f9b"],{"56bf":function(e,n,t){"use strict";t.r(n),t.d(n,"registerFunctions",(function(){return p}));var r=t("f4cc"),a=t("3760"),i=t("89da"),c=t("8549"),s=t("bb51"),l=t("18df"),u=t("8016");function o(e){return e instanceof a["a"]}function f(e,n,t,f,p){return p(e,n,(function(e,n,p){if(p.length<2)return f(new Error("Missing Parameters"));if(null===(p=Object(i["j"])(p))[0]&&null===p[1])return Object(r["s"])(!1);if(Object(i["T"])(p[0]))return p[1]instanceof a["a"]?Object(r["s"])(new u["a"]({parentfeatureset:p[0],relation:t,relationGeom:p[1]})):null===p[1]?Object(r["s"])(new l["a"]({parentfeatureset:p[0]})):f("Spatial Relation cannot accept this parameter type");if(o(p[0])){if(o(p[1])){let e=null;switch(t){case"esriSpatialRelEnvelopeIntersects":e=Object(s["q"])(Object(c["d"])(p[0]),Object(c["d"])(p[1]));break;case"esriSpatialRelIntersects":e=Object(s["q"])(p[0],p[1]);break;case"esriSpatialRelContains":e=Object(s["c"])(p[0],p[1]);break;case"esriSpatialRelOverlaps":e=Object(s["t"])(p[0],p[1]);break;case"esriSpatialRelWithin":e=Object(s["C"])(p[0],p[1]);break;case"esriSpatialRelTouches":e=Object(s["A"])(p[0],p[1]);break;case"esriSpatialRelCrosses":e=Object(s["d"])(p[0],p[1])}return null!==e?e:Object(r["r"])(new Error("Unrecognised Relationship"))}return Object(i["T"])(p[1])?Object(r["s"])(new u["a"]({parentfeatureset:p[1],relation:t,relationGeom:p[0]})):null===p[1]?Object(r["s"])(!1):f("Spatial Relation cannot accept this parameter type")}return null!==p[0]?f("Spatial Relation cannot accept this parameter type"):Object(i["T"])(p[1])?Object(r["s"])(new l["a"]({parentfeatureset:p[1]})):p[1]instanceof a["a"]||null===p[1]?Object(r["s"])(!1):void 0}))}function p(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return f(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return f(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return f(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return f(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return f(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return f(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return f(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(n,t){return e.standardFunctionAsync(n,t,(function(e,n,t){if(t=Object(i["j"])(t),Object(i["J"])(t,3,3),o(t[0])&&o(t[1]))return Object(s["w"])(t[0],t[1],Object(i["y"])(t[2]));if(t[0]instanceof a["a"]&&null===t[1])return!1;if(t[1]instanceof a["a"]&&null===t[0])return!1;if(Object(i["T"])(t[0])&&null===t[1])return new l["a"]({parentfeatureset:t[0]});if(Object(i["T"])(t[1])&&null===t[0])return new l["a"]({parentfeatureset:t[1]});if(Object(i["T"])(t[0])&&t[1]instanceof a["a"])return t[0].relate(t[1],Object(i["y"])(t[2]));if(Object(i["T"])(t[1])&&t[0]instanceof a["a"])return t[1].relate(t[0],Object(i["y"])(t[2]));if(null===t[0]&&null===t[1])return!1;throw new Error("Illegal Argument")}))})}}}]);