(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21440acd"],{b2f7:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));const n=new Float32Array(1);function a(e){return l(Math.max(-s,Math.min(e,s)))}function l(e){return n[0]=e,n[0]}const s=l(34028234663852886e22);var r={};r.defaultNoDataValue=a(-1/0),r.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,n=m(e,t.inputOffset||0,i),l=null!=t.noDataValue?a(t.noDataValue):r.defaultNoDataValue,s=o(n,t.pixelType||Float32Array,t.encodedMaskData,l,t.returnMask),c={width:n.width,height:n.height,pixelData:s.resultPixels,minValue:n.pixels.minValue,maxValue:n.pixels.maxValue,noDataValue:l};return s.resultMask&&(c.maskData=s.resultMask),t.returnEncodedMask&&n.mask&&(c.encodedMaskData=n.mask.bitset?n.mask.bitset:null),t.returnFileInfo&&(c.fileInfo=f(n,l),t.computeUsedBitDepths&&(c.fileInfo.bitDepths=u(n))),c};var o=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),m=Math.floor(e.height/f),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var h,g,k=new Float32Array(u*m),x=0;x<=f;x++){var w=x!==f?m:e.height%f;if(0!==w)for(var p=0;p<=o;p++){var y=p!==o?u:e.width%o;if(0!==y){var V,B,v,b,U=x*e.width*m+p*u,M=e.width-y,D=e.pixels.blocks[r];if(D.encoding<2?(0===D.encoding?V=D.rawData:(c(D.stuffedData,D.bitsPerPixel,D.numValidPixels,D.offset,d,k,e.pixels.maxValue),V=k),B=0):v=2===D.encoding?0:D.offset,i)for(g=0;g<w;g++){for(7&U&&(b=i[U>>3],b<<=7&U),h=0;h<y;h++)7&U||(b=i[U>>3]),128&b?(s&&(s[U]=1),l[U++]=D.encoding<2?V[B++]:v):(s&&(s[U]=0),l[U++]=n),b<<=1;U+=M}else if(D.encoding<2)for(g=0;g<w;g++){for(h=0;h<y;h++)l[U++]=V[B++];U+=M}else for(g=0;g<w;g++)if(l.fill)l.fill(v,U,U+y),U+=y+M;else{for(h=0;h<y;h++)l[U++]=v;U+=M}if(1===D.encoding&&B!==D.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},f=function(e,t){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:t}}},u=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},m=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,n.mask.numBytes>0){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(r>0)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else 0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)&&(s=new Uint8Array(Math.ceil(n.width*n.height/8)),n.mask.bitset=s);l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,c=n.pixels.numBlocksY,d=m+(n.width%m>0?1:0),h=c+(n.height%c>0?1:0);n.pixels.blocks=new Array(d*h);for(var g=1e9,k=0,x=0;x<h;x++)for(var w=0;w<d;w++){var p=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=l.getUint8(0);if(p++,V.encoding=63&B,V.encoding>3)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(B>>=6,V.offsetType=B,2===B)V.offset=l.getInt8(1),p++;else if(1===B)V.offset=l.getInt16(1,!0),p+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),p+=4}if(g=Math.min(V.offset,g),1===V.encoding)if(B=l.getUint8(p),p++,V.bitsPerPixel=63&B,B>>=6,V.numValidPixelsType=B,2===B)V.numValidPixels=l.getUint8(p),p++;else if(1===B)V.numValidPixels=l.getUint16(p,!0),p+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(p,!0),p+=4}}var v;if(t+=p,3!=V.encoding)if(0===V.encoding){var b=(n.pixels.numBytes-1)/4;if(b!==Math.floor(b))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*b),new Uint8Array(v).set(new Uint8Array(e,t,4*b));for(var U=new Float32Array(v),M=0;M<U.length;M++)g=Math.min(g,U[M]);V.rawData=U,t+=4*b}else if(1===V.encoding){var D=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(D/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,D)),V.stuffedData=new Uint32Array(v),t+=D}}else t++,g=Math.min(g,0)}return n.pixels.minValue=g,n.eofOffset=t,n},c=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,c=0,d=Math.ceil((s-n)/a),h=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*h,r=0;r<i;r++){if(0===c&&(f=e[m++],c=32),c>=t)o=f>>>c-t&u,c-=t;else{var g=t-c;o=(f&u)<<g&u,o+=(f=e[m++])>>>(c=32-g)}l[r]=o<d?n+o*a:s}return l};const d=r.decode},b71a:function(e,t,i){"use strict";i.r(t);var n=i("b2f7");class a{_decode(e){const t=Object(n["a"])(e.buffer,e.options);return Promise.resolve({result:t,transferList:[t.pixelData.buffer]})}}function l(){return new a}t["default"]=l}}]);