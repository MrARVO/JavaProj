/**
 * Simple JavaScript library for RGB/HSB/HEX/XYZ/LAB colors based
 * on algorithms from EasyRGB (http://www.easyrgb.com/index.php?X=MATH)
 *
 * @page    http://github.com/Shushik/i-color/
 * @author  Shushik <silkleopard@yandex.ru>
 * @version 1.0
 */
;(function(k){k=k||window;var h=function(a,b){return this.convert(a,b)};h.prototype={_rgb:{r:{min:0,max:255},g:{min:0,max:255},b:{min:0,max:255}},_hsv:{h:{min:0,max:359},s:{min:0,max:100},v:{min:0,max:100}},_xyz:{x:{min:0,max:95.047},y:{min:0,max:100},z:{min:0,max:108.883}},_lab:{l:{min:0,max:100},a:{min:-128,max:127},b:{min:-128,max:127}},_white:{x:95.047,y:100,z:108.883},_human:{red:"FF0000",tan:"D2B48C",aqua:"00FFFF",blue:"0000FF",cyan:"00FFFF",gold:"FFD700",gray:"808080",lime:"00FF00",navy:"000080", peru:"CD853F",pink:"FFC0CB",plum:"DDA0DD",snow:"FFFAFA",teal:"008080",azure:"F0FFFF",beige:"F5F5DC",black:"000000",brown:"A52A2A",coral:"FF7F50",green:"008000",ivory:"FFFFF0",khaki:"F0E68C",linen:"FAF0E6",olive:"808000",wheat:"F5DEB3",white:"FFFFFF",bisque:"FFE4C4",indigo:"4B0082",maroon:"800000",orange:"FFA500",orchid:"DA70D6",purple:"800080",salmon:"FA8072",sienna:"A0522D",silver:"C0C0C0",tomato:"FF6347",violet:"EE82EE",yellow:"FFFF00",crimson:"DC143C",darkred:"8B0000",dimgray:"696969",fuchsia:"FF00FF", hotpink:"FF69B4",magenta:"FF00FF",oldlace:"FDF5E6",skyblue:"87CEEB",thistle:"D8BFD8",cornsilk:"FFF8DC",darkblue:"00008B",darkcyan:"008B8B",darkgray:"A9A9A9",deeppink:"FF1493",honeydew:"F0FFF0",lavender:"E6E6FA",moccasin:"FFE4B5",seagreen:"2E8B57",seashell:"FFF5EE",aliceblue:"F0F8FF",burlywood:"DEB887",cadetblue:"5F9EA0",chocolate:"D2691E",darkgreen:"006400",darkkhaki:"BDB76B",firebrick:"B22222",gainsboro:"DCDCDC",goldenrod:"DAA520",indianred:"CD5C5C",lawngreen:"7CFC00",lightblue:"ADD8E6",lightcyan:"E0FFFF", lightgrey:"D3D3D3",lightpink:"FFB6C1",limegreen:"32CD32",mintcream:"F5FFFA",mistyrose:"FFE4E1",olivedrab:"6B8E23",orangered:"FF4500",palegreen:"98FB98",peachpuff:"FFDAD9",rosybrown:"BC8F8F",royalblue:"4169E1",slateblue:"6A5ACD",slategray:"708090",steelblue:"4682B4",turquoise:"40E0D0",aquamarine:"7FFFD4",blueviolet:"8A2BE2",chartreuse:"7FFF00",darkorange:"FF8C00",darkorchid:"9932CC",darksalmon:"E9967A",darkviolet:"9400D3",dodgerblue:"1E90FF",ghostwhite:"F8F8FF",lightcoral:"F08080",lightgreen:"90EE90", mediumblue:"0000CD",papayawhip:"FFEFD5",powderblue:"B0E0E6",sandybrown:"F4A460",whitesmoke:"F5F5F5",floralwhite:"FFFAF0",forestgreen:"228B22",darkmagenta:"8B008B",deepskyblue:"00BFFF",navajowhite:"FFDEAD",yellowgreen:"9ACD32",greenyellow:"ADFF2F",lightsalmon:"FFA07A",lightyellow:"FFFFE0",saddlebrown:"8B4513",springgreen:"00FF7F",darkseagreen:"8FBC8F",antiquewhite:"FAEBD7",lemonchiffon:"FFFACD",lightskyblue:"87CEFA",mediumorchid:"BA55D3",mediumpurple:"9370D8",midnightblue:"191970",darkslateblue:"483D8B", darkslategray:"2F4F4F",darkturquoise:"00CED1",darkgoldenrod:"B8860B",lavenderblush:"FFF0F5",lightseagreen:"20B2AA",palegoldenrod:"EEE8AA",paleturquoise:"AFEEEE",palevioletred:"D87093",blanchedalmond:"FFEBCD",cornflowerblue:"6495ED",darkolivegreen:"556B2F",lightslategray:"778899",lightsteelblue:"B0C4DE",mediumseagreen:"3CB371",mediumslateblue:"7B68EE",mediumturquoise:"48D1CC",mediumvioletred:"C71585",mediumaquamarine:"66CDAA",mediumspringgreen:"00FA9A",lightgoldenrodyellow:"FAFAD2"},_round:function(a, b){var c=RegExp("^([-\\d]*)(\\.\\d{1,"+(b||3)+"})?.*");a=(a+"").replace(c,"$1$2");return a-=0},_hex2rgb:function(a){var b={r:0,g:0,b:0};3==a.length?(b.r=parseInt(a.substring(0,1)+a.substring(0,1),16),b.g=parseInt(a.substring(1,2)+a.substring(1,2),16),b.b=parseInt(a.substring(2,3)+a.substring(2,3),16)):(b.r=parseInt(a.substring(0,2),16),b.g=parseInt(a.substring(2,4),16),b.b=parseInt(a.substring(4,6),16));return b},_hex2hsv:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2hsv(a)},_hex2lab:function(a){var b= h.prototype;a=b._hex2xyz(a);return b._xyz2lab(a)},_hex2xyz:function(a){var b=h.prototype;a=b._hex2rgb(a);return b._rgb2xyz(a)},_rgb2hsv:function(a){var b=a.r/255,c=a.g/255;a=a.b/255;var e=0,d=0,e=0,g={h:0,s:0,v:0};b>=c&&b>=c?(d=b,e=c>a?a:c):c>=a&&c>=b?(d=c,e=b>a?a:b):(d=a,e=c>b?b:c);g.v=d;g.s=d?(d-e)/d:0;g.s?(e=d-e,g.h=b==d?(c-a)/e:c==d?2+(a-b)/e:4+(b-c)/e,g.h=parseInt(60*g.h),0>g.v&&(g.v+=360)):g.h=0;g.s=parseInt(100*g.s);g.v=parseInt(100*g.v);return g},_rgb2lab:function(a){var b=h.prototype;a=b._rgb2xyz(a); return b._xyz2lab(a)},_rgb2xyz:function(a){var b="";a={r:a.r/255,g:a.g/255,b:a.b/255};var c=null;for(b in a)a[b]=0.04045<a[b]?Math.pow((a[b]+0.055)/1.055,2.4):a[b]/12.92,a[b]*=100;c={x:0.4124*a.r+0.3576*a.g+0.1805*a.b,y:0.2126*a.r+0.7152*a.g+0.0722*a.b,z:0.0193*a.r+0.1192*a.g+0.9505*a.b};for(b in c)c[b]=h.prototype._round(c[b]);return c},_rgb2hex:function(a){var b="",c={};c.r=a.r.toString(16);c.g=a.g.toString(16);c.b=a.b.toString(16);for(b in c)2>c[b].length&&(c[b]+=c[b]);return c.r+c.g+c.b},_hsv2rgb:function(a){var b= 0,c=0,e=0,d=0,g=0,e=a.h,g=a.s;a=a.v;var f={r:0,g:0,b:0};if(0==g)f.r=0==a?f.g=f.b=0:f.g=f.b=parseInt(255*a/100);else{360==e&&(e=0);e/=60;g/=100;a/=100;b=parseInt(e);c=e-b;e=a*(1-g);d=a*(1-g*c);g=a*(1-g*(1-c));switch(b){case 0:f.r=a;f.g=g;f.b=e;break;case 1:f.r=d;f.g=a;f.b=e;break;case 2:f.r=e;f.g=a;f.b=g;break;case 3:f.r=e;f.g=d;f.b=a;break;case 4:f.r=g;f.g=e;f.b=a;break;case 5:f.r=a,f.g=e,f.b=d}f.r=parseInt(255*f.r);f.g=parseInt(255*f.g);f.b=parseInt(255*f.b)}return f},_hsv2lab:function(a){var b= h.prototype;a=b._hsv2xyz(a);return b._xyz2lab(a)},_hsv2xyz:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2xyz(a)},_hsv2hex:function(a){var b=h.prototype;a=b._hsv2rgb(a);return b._rgb2hex(a)},_lab2rgb:function(a){var b=h.prototype;a=b._lab2xyz(a);return b._xyz2rgb(a)},_lab2hsv:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hsv(a)},_lab2xyz:function(a){var b="",c=0,e={},d=h.prototype,g=d._white;e.y=(a.l+16)/116;e.x=a.a/500+e.y;e.z=e.y-a.b/200;for(b in e)c=Math.pow(e[b],3), e[b]=0.008856<c?c:(e[b]-16/116)/7.787,e[b]=d._round(e[b]*g[b]);return{x:e.x,y:e.y,z:e.z}},_lab2hex:function(a){var b=h.prototype;a=b._lab2rgb(a);return b._rgb2hex(a)},_xyz2rgb:function(a){var b="",c=a.x/100,e=a.y/100;a=a.z/100;var d={};d.r=3.2406*c+-1.5372*e+-0.4986*a;d.g=-0.9689*c+1.8758*e+0.0415*a;d.b=0.0557*c+-0.204*e+1.057*a;for(b in d)d[b]=h.prototype._round(d[b]),0>d[b]&&(d[b]=0),d[b]=0.0031308<d[b]?1.055*Math.pow(d[b],1/2.4)-0.055:12.92*d[b],d[b]=Math.round(255*d[b]);return d},_xyz2hsv:function(a){var b= h.prototype;a=b._xyz2rgb(a);return b._rgb2hsv(a)},_xyz2lab:function(a){var b="",c={},e=h.prototype._white;for(b in a)c[b]=a[b]/e[b],c[b]=0.008856<c[b]?Math.pow(c[b],1/3):7.787*c[b]+16/116;return{l:116*c.y-16,a:500*(c.x-c.y),b:200*(c.y-c.z)}},_xyz2hex:function(a){var b=h.prototype;a=b._xyz2rgb(a);return b._rgb2hex(a)},type:function(a){var b="",c="";if("object"==typeof a){for(b in a)a[b]-=0;if(isNaN(a.r)&&isNaN(a.g))if(isNaN(a.h)&&isNaN(a.s))if(isNaN(a.x)&&isNaN(a.z)){if(!isNaN(a.l)||!isNaN(a.a))return"lab"; if(!isNaN(a.c)||!isNaN(a.m)||!isNaN(a.k))return"cmyk"}else return"xyz";else return"hsv";else return"rgb"}else if("number"==typeof a||"string"==typeof a)return c=a.substring(0,4),"rgb("==c||"rgba"==c?"css":"hex";return!1},validate:function(a,b){b=b||!1;var c=h.prototype,e=c.type(a),d="",g="",f=g=null;if(e){"css"==e?(f=c._rgb,e="rgb",g=a.replace(/rgb(a)?\(|\)/g,"").split(/,\s?/),a={r:g[0],g:g[1],b:g[2]}):f=c["_"+e];switch(e){case "css":case "rgb":case "hsv":case "lab":case "xyz":case "cmyk":for(d in f)!a[d]|| a[d]<f[d].min?a[d]=f[d].min:a[d]>f[d].max&&(a[d]="hsv"==e&&"h"==d?0:f[d].max);break;case "hex":(g=c._human[a.toLowerCase()])?a=g:(a=(""+a).toUpperCase().replace(/^#/g,"").replace(/[^A-F0-9]/g,"0"),d=a.length,6>d&&3<d?a+="000000".substring(d,6-d):6>d&&3>d?a+="000".substring(d,3-d):6<d&&(a=a.substring(0,6)))}return b?{type:e,raw:a}:a}return!1},convert:function(a,b){b=b||"rgb";var c="",e=h.prototype,d=e.validate(a,!0);return d&&(c="_"+d.type+"2"+b,e[c])?e[c](d.raw):!1},invert:function(a,b){b=b||"rgb"; var c="",e=h.prototype,d=null;if(d=e.validate(a,!0)){d=e["_"+d.type+"2rgb"](d.raw);for(c in d)d[c]=255-d[c];return"rgb"!=b?e["_rgb2"+b](d):d}return!1}};h.type=h.prototype.type;h.invert=h.prototype.invert;h.convert=h.prototype.convert;h.validate=h.prototype.validate;k.Color=h})(window);// threejs.org/license
'use strict';var THREE={REVISION:"68"};"object"===typeof module&&(module.exports=THREE);THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=0.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=0.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=0.5/Math.sqrt(l+1),this._w=0.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=0.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
0.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=0.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(0.001>Math.abs(k))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=
c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,
this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,
b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=
this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=
a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,
c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=
(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;
this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=
b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=
0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+
Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=
a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=
this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},
setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(k-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(k+b)&&0.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=
Math.sqrt(h),b=d/c,d=k/c):0.01>l?(c=b=0.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<
a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);
this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):
Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,
this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b){var c=THREE.Math.clamp,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],k=d[5],l=d[9],n=d[2],q=d[6],d=d[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g,-1,1)),0.99999>Math.abs(g)?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-f,e)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(l,-1,1)),0.99999>Math.abs(l)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,k)):
(this._y=Math.atan2(-n,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(q,-1,1)),0.99999>Math.abs(q)?(this._y=Math.atan2(-n,d),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(n,-1,1)),0.99999>Math.abs(n)?(this._x=Math.atan2(q,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(c(h,-1,1)),0.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=
Math.asin(-c(f,-1,1)),0.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-l,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;this.onChangeCallback();return this},setFromQuaternion:function(a,b,c){var d=THREE.Math.clamp,e=a.x*a.x,f=a.y*a.y,g=a.z*a.z,h=a.w*a.w;b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w),-1,1)),this._z=Math.atan2(2*
(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z),-1,1)),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===
b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w),-1,1))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y),-1,1))):console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);
this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};
THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},
center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||
a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||
a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},
union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);
a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};
THREE.Matrix3=function(a,b,c,d,e,f,g,h,k){var l=this.elements=new Float32Array(9);l[0]=void 0!==a?a:1;l[3]=b||0;l[6]=c||0;l[1]=d||0;l[4]=void 0!==e?e:1;l[7]=f||0;l[2]=g||0;l[5]=h||0;l[8]=void 0!==k?k:1};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],
a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements=new Float32Array(16);v[0]=void 0!==a?a:1;v[4]=b||0;v[8]=c||0;v[12]=d||0;v[1]=e||0;v[5]=void 0!==f?f:1;v[9]=g||0;v[13]=h||0;v[2]=k||0;v[6]=l||0;v[10]=void 0!==n?n:1;v[14]=q||0;v[3]=r||0;v[7]=t||0;v[11]=s||0;v[15]=void 0!==p?p:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=l;v[10]=n;v[14]=q;v[3]=r;v[7]=t;v[11]=s;v[15]=p;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREEMatrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&
console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,n=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*g;b[2]=n-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,
b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=n-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,n=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=g*e,b[5]=n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=f*h,b[9]=k*
e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,n=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(n+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-
(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],n=c[5],q=c[9],r=c[13],t=c[2],s=c[6],p=c[10],v=c[14],w=c[3],u=c[7],D=c[11],c=c[15],A=d[0],x=d[4],C=d[8],I=d[12],z=d[1],y=d[5],K=d[9],N=d[13],ba=d[2],P=d[6],O=d[10],J=d[14],E=d[3],
Q=d[7],L=d[11],d=d[15];e[0]=f*A+g*z+h*ba+k*E;e[4]=f*x+g*y+h*P+k*Q;e[8]=f*C+g*K+h*O+k*L;e[12]=f*I+g*N+h*J+k*d;e[1]=l*A+n*z+q*ba+r*E;e[5]=l*x+n*y+q*P+r*Q;e[9]=l*C+n*K+q*O+r*L;e[13]=l*I+n*N+q*J+r*d;e[2]=t*A+s*z+p*ba+v*E;e[6]=t*x+s*y+p*P+v*Q;e[10]=t*C+s*K+p*O+v*L;e[14]=t*I+s*N+p*J+v*d;e[3]=w*A+u*z+D*ba+c*E;e[7]=w*x+u*y+D*P+c*Q;e[11]=w*C+u*K+D*O+c*L;e[15]=w*I+u*N+D*J+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];
c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=
b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=
a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],n=a[6],q=a[10],r=a[14];return a[3]*(+e*h*n-d*k*n-e*g*q+c*k*q+d*g*r-c*h*r)+a[7]*(+b*h*r-b*k*q+e*f*q-d*f*r+d*k*l-e*h*l)+a[11]*(+b*k*n-b*g*r-e*f*n+c*f*r+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*n+b*g*q+d*f*n-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,
b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=
this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],n=d[9],q=d[13],r=d[2],t=d[6],s=d[10],p=d[14],v=d[3],w=d[7],u=d[11],d=d[15];c[0]=n*p*w-q*s*w+q*t*u-l*p*u-n*t*d+l*s*d;c[4]=h*s*w-g*p*w-h*t*u+f*p*u+g*t*d-f*s*d;c[8]=g*q*w-h*n*w+h*l*u-f*q*u-g*l*d+f*n*d;c[12]=h*n*t-g*q*t-h*l*s+f*q*s+g*l*p-f*n*p;c[1]=q*s*v-n*p*v-q*r*u+k*p*u+n*r*d-k*s*d;c[5]=g*p*v-h*s*v+h*r*u-e*p*u-g*r*d+e*s*d;c[9]=h*n*v-g*q*v-h*k*
u+e*q*u+g*k*d-e*n*d;c[13]=g*q*r-h*n*r+h*k*s-e*q*s-g*k*p+e*n*p;c[2]=l*p*v-q*t*v+q*r*w-k*p*w-l*r*d+k*t*d;c[6]=h*t*v-f*p*v-h*r*w+e*p*w+f*r*d-e*t*d;c[10]=f*q*v-h*l*v+h*k*w-e*q*w-f*k*d+e*l*d;c[14]=h*l*r-f*q*r-h*k*t+e*q*t+f*k*p-e*l*p;c[3]=n*t*v-l*s*v-n*r*w+k*s*w+l*r*u-k*t*u;c[7]=f*s*v-g*t*v+g*r*w-e*s*w-f*r*u+e*t*u;c[11]=g*l*v-f*n*v-g*k*w+e*n*w+f*k*u-e*l*u;c[15]=f*n*r-g*l*r+g*k*t-e*n*t-f*k*s+e*l*s;c=e*c[0]+k*c[4]+r*c[8]+v*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.warn("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.warn("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.warn("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.warn("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(0.5*a));
var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e);a=-this.direction.dot(f);b=h.dot(this.direction);var k=-h.dot(f),l=h.lengthSq(),n=Math.abs(1-a*a),q,r;0<=n?(h=a*k-b,q=a*b-k,r=g*n,0<=h?q>=-r?q<=r?(g=1/n,h*=g,q*=g,a=h*(h+a*q+2*b)+q*(a*h+q+2*k)+l):(q=g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):(q=-g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):q<=-r?(h=Math.max(0,-(-a*g+b)),q=0<h?-g:Math.min(Math.max(-g,-k),g),a=-h*h+q*(q+2*k)+l):q<=r?(h=0,q=Math.min(Math.max(-g,-k),g),a=q*(q+2*k)+l):(h=Math.max(0,-(a*g+b)),q=0<h?g:Math.min(Math.max(-g,
-k),g),a=-h*h+q*(q+2*k)+l)):(q=0<a?-g:g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(q).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;
d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;
return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==
c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;
e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],n=c[8],q=c[9],r=c[10],t=c[11],s=c[12],p=c[13],v=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-n,c-s).normalize();b[1].setComponents(f+
a,l+g,t+n,c+s).normalize();b[2].setComponents(f+d,l+h,t+q,c+p).normalize();b[3].setComponents(f-d,l-h,t-q,c-p).normalize();b[4].setComponents(f-e,l-k,t-r,c-v).normalize();b[5].setComponents(f+e,l+k,t+r,c+v).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/180;return function(b){return b*
a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,n,q,r;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;l=this.points[c[0]];n=this.points[c[1]];q=this.points[c[2]];r=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,n.x,q.x,r.x,g,h,k);d.y=b(l.y,n.y,q.y,r.y,g,h,k);d.z=b(l.z,n.z,q.z,r.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},intersectObject:function(a,e){var f=[];c(a,this,f,e);
f.sort(b);return f},intersectObjects:function(a,e){for(var f=[],g=0,h=a.length;g<h;g++)c(a[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},
scale:{enumerable:!0,value:d}});this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add:",
a,"can't be added as a child of itself."),this;if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}else console.error("THREE.Object3D.add:",a,"is not an instance of THREE.Object3D.");return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);
if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<
d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);
this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);
a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===
b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Projector=function(){function a(){if(q===t){var a=new THREE.RenderableVertex;r.push(a);t++;q++;return a}return r[q++]}function b(){if(p===w){var a=new THREE.RenderableFace;v.push(a);w++;p++;return a}return v[p++]}function c(){if(D===x){var a=new THREE.RenderableLine;A.push(a);x++;D++;return a}return A[D++]}function d(){if(I===y){var a=new THREE.RenderableSprite;z.push(a);y++;I++;return a}return z[I++]}function e(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function f(a,b){var c=0,d=
1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var g,h,k=[],l=0,n,q,r=[],t=0,s,p,v=[],w=0,u,D,A=[],x=0,C,I,z=[],y=0,K={objects:[],lights:[],elements:[]},N=new THREE.Vector3,ba=new THREE.Vector3,P=new THREE.Vector3,O=new THREE.Vector3,J=new THREE.Vector4,E=new THREE.Box3(new THREE.Vector3(-1,
-1,-1),new THREE.Vector3(1,1,1)),Q=new THREE.Box3,L=Array(3),R=new THREE.Matrix4,B=new THREE.Matrix4,S,V=new THREE.Matrix4,W=new THREE.Matrix3,H=new THREE.Frustum,oa=new THREE.Vector4,$=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);B.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(B)};this.unprojectVector=function(){var a=new THREE.Matrix4;return function(b,c){a.getInverse(c.projectionMatrix);B.multiplyMatrices(c.matrixWorld,
a);return b.applyProjection(B)}}();this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var X=new function(){var d=[],e=[],f=null,g=null,h=new THREE.Matrix3,k=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(S);c.copy(b).applyMatrix4(B);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},l=function(a,
b,c){if(!0===a.visible||!0===b.visible||!0===c.visible)return!0;L[0]=a.positionScreen;L[1]=b.positionScreen;L[2]=c.positionScreen;return E.isIntersectionBox(Q.setFromPoints(L))},q=function(a,b,c){return 0>(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x)};return{setObject:function(a){f=a;g=f.material;h.getNormalMatrix(f.matrixWorld);d.length=0;e.length=0},projectVertex:k,checkTriangleVisibility:l,
checkBackfaceCulling:q,pushVertex:function(b,c,d){n=a();n.position.set(b,c,d);k(n)},pushNormal:function(a,b,c){d.push(a,b,c)},pushUv:function(a,b){e.push(a,b)},pushLine:function(a,b){var d=r[a],e=r[b];u=c();u.id=f.id;u.v1.copy(d);u.v2.copy(e);u.z=(d.positionScreen.z+e.positionScreen.z)/2;u.material=f.material;K.elements.push(u)},pushTriangle:function(a,c,k){var n=r[a],p=r[c],t=r[k];if(!1!==l(n,p,t)&&(g.side===THREE.DoubleSide||!0===q(n,p,t))){s=b();s.id=f.id;s.v1.copy(n);s.v2.copy(p);s.v3.copy(t);
s.z=(n.positionScreen.z+p.positionScreen.z+t.positionScreen.z)/3;for(n=0;3>n;n++)p=3*arguments[n],t=s.vertexNormalsModel[n],t.set(d[p],d[p+1],d[p+2]),t.applyMatrix3(h).normalize(),p=2*arguments[n],s.uvs[n].set(e[p],e[p+1]);s.vertexNormalsLength=3;s.material=f.material;K.elements.push(s)}}}};this.projectScene=function(n,t,w,v){I=D=p=0;K.elements.length=0;!0===n.autoUpdate&&n.updateMatrixWorld();void 0===t.parent&&t.updateMatrixWorld();R.copy(t.matrixWorldInverse.getInverse(t.matrixWorld));B.multiplyMatrices(t.projectionMatrix,
R);H.setFromMatrix(B);h=0;K.objects.length=0;K.lights.length=0;n.traverseVisible(function(a){if(a instanceof THREE.Light)K.lights.push(a);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Sprite)if(!1===a.frustumCulled||!0===H.intersectsObject(a)){if(h===l){var b=new THREE.RenderableObject;k.push(b);l++;h++;g=b}else g=k[h++];g.id=a.id;g.object=a;null!==a.renderDepth?g.z=a.renderDepth:(O.setFromMatrixPosition(a.matrixWorld),O.applyProjection(B),g.z=O.z);K.objects.push(g)}});
!0===w&&K.objects.sort(e);n=0;for(w=K.objects.length;n<w;n++){var A=K.objects[n].object,x=A.geometry;X.setObject(A);S=A.matrixWorld;q=0;if(A instanceof THREE.Mesh)if(x instanceof THREE.BufferGeometry){var z=x.attributes,A=x.offsets;if(void 0!==z.position){for(var G=z.position.array,x=0,y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.normal)for(var L=z.normal.array,x=0,y=L.length;x<y;x+=3)X.pushNormal(L[x],L[x+1],L[x+2]);if(void 0!==z.uv)for(L=z.uv.array,x=0,y=L.length;x<y;x+=2)X.pushUv(L[x],
L[x+1]);if(void 0!==z.index)if(z=z.index.array,0<A.length)for(n=0;n<A.length;n++)for(y=A[n],G=y.index,x=y.start,y=y.start+y.count;x<y;x+=3)X.pushTriangle(z[x]+G,z[x+1]+G,z[x+2]+G);else for(x=0,y=z.length;x<y;x+=3)X.pushTriangle(z[x],z[x+1],z[x+2]);else for(x=0,y=G.length/3;x<y;x+=3)X.pushTriangle(x,x+1,x+2)}}else{if(x instanceof THREE.Geometry){var Q=x.vertices,y=x.faces,z=x.faceVertexUvs[0];W.getNormalMatrix(S);for(var G=A.material instanceof THREE.MeshFaceMaterial,L=!0===G?A.material:null,E=0,ca=
Q.length;E<ca;E++){var la=Q[E];X.pushVertex(la.x,la.y,la.z)}Q=0;for(E=y.length;Q<E;Q++){var ca=y[Q],qa=!0===G?L.materials[ca.materialIndex]:A.material;if(void 0!==qa){var ua=qa.side,la=r[ca.a],ja=r[ca.b],Fa=r[ca.c];if(!0===qa.morphTargets){var va=x.morphTargets,Ka=A.morphTargetInfluences,aa=la.position,ra=ja.position,Da=Fa.position;N.set(0,0,0);ba.set(0,0,0);P.set(0,0,0);for(var Qa=0,cb=va.length;Qa<cb;Qa++){var Ga=Ka[Qa];if(0!==Ga){var xa=va[Qa].vertices;N.x+=(xa[ca.a].x-aa.x)*Ga;N.y+=(xa[ca.a].y-
aa.y)*Ga;N.z+=(xa[ca.a].z-aa.z)*Ga;ba.x+=(xa[ca.b].x-ra.x)*Ga;ba.y+=(xa[ca.b].y-ra.y)*Ga;ba.z+=(xa[ca.b].z-ra.z)*Ga;P.x+=(xa[ca.c].x-Da.x)*Ga;P.y+=(xa[ca.c].y-Da.y)*Ga;P.z+=(xa[ca.c].z-Da.z)*Ga}}la.position.add(N);ja.position.add(ba);Fa.position.add(P);X.projectVertex(la);X.projectVertex(ja);X.projectVertex(Fa)}if(!1!==X.checkTriangleVisibility(la,ja,Fa)){va=X.checkBackfaceCulling(la,ja,Fa);if(ua!==THREE.DoubleSide){if(ua===THREE.FrontSide&&!1===va)continue;if(ua===THREE.BackSide&&!0===va)continue}s=
b();s.id=A.id;s.v1.copy(la);s.v2.copy(ja);s.v3.copy(Fa);s.normalModel.copy(ca.normal);!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||s.normalModel.negate();s.normalModel.applyMatrix3(W).normalize();Ka=ca.vertexNormals;aa=0;for(ra=Math.min(Ka.length,3);aa<ra;aa++)Da=s.vertexNormalsModel[aa],Da.copy(Ka[aa]),!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||Da.negate(),Da.applyMatrix3(W).normalize();s.vertexNormalsLength=Ka.length;ua=z[Q];if(void 0!==ua)for(va=0;3>va;va++)s.uvs[va].copy(ua[va]);
s.color=ca.color;s.material=qa;s.z=(la.positionScreen.z+ja.positionScreen.z+Fa.positionScreen.z)/3;K.elements.push(s)}}}}}else if(A instanceof THREE.Line)if(x instanceof THREE.BufferGeometry){if(z=x.attributes,void 0!==z.position){G=z.position.array;x=0;for(y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.index)for(z=z.index.array,x=0,y=z.length;x<y;x+=2)X.pushLine(z[x],z[x+1]);else for(z=A.type===THREE.LinePieces?2:1,x=0,y=G.length/3-1;x<y;x+=z)X.pushLine(x,x+1)}}else{if(x instanceof
THREE.Geometry&&(V.multiplyMatrices(B,S),Q=A.geometry.vertices,0!==Q.length))for(la=a(),la.positionScreen.copy(Q[0]).applyMatrix4(V),z=A.type===THREE.LinePieces?2:1,E=1,ca=Q.length;E<ca;E++)la=a(),la.positionScreen.copy(Q[E]).applyMatrix4(V),0<(E+1)%z||(ja=r[q-2],oa.copy(la.positionScreen),$.copy(ja.positionScreen),!0===f(oa,$)&&(oa.multiplyScalar(1/oa.w),$.multiplyScalar(1/$.w),u=c(),u.id=A.id,u.v1.positionScreen.copy(oa),u.v2.positionScreen.copy($),u.z=Math.max(oa.z,$.z),u.material=A.material,A.material.vertexColors===
THREE.VertexColors&&(u.vertexColors[0].copy(A.geometry.colors[E]),u.vertexColors[1].copy(A.geometry.colors[E-1])),K.elements.push(u)))}else A instanceof THREE.Sprite&&(J.set(S.elements[12],S.elements[13],S.elements[14],1),J.applyMatrix4(B),x=1/J.w,J.z*=x,-1<=J.z&&1>=J.z&&(C=d(),C.id=A.id,C.x=J.x*x,C.y=J.y*x,C.z=J.z,C.object=A,C.rotation=A.rotation,C.scale.x=A.scale.x*Math.abs(C.x-(J.x+t.projectionMatrix.elements[0])/(J.w+t.projectionMatrix.elements[12])),C.scale.y=A.scale.y*Math.abs(C.y-(J.y+t.projectionMatrix.elements[5])/
(J.w+t.projectionMatrix.elements[13])),C.material=A.material,K.elements.push(C)))}!0===v&&K.elements.sort(e);return K}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},set:function(a){this.array.set(a);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=
c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this}};THREE.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),
b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0)},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==
THREE.NoColors){var n=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(n,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uvs",new THREE.BufferAttribute(q,2))}for(var r=0,t=0,s=0;r<d.length;r++,t+=6,s+=9){var p=d[r],v=c[p.a],w=c[p.b],u=c[p.c];k[s]=v.x;k[s+1]=v.y;k[s+2]=v.z;k[s+3]=w.x;k[s+4]=w.y;k[s+5]=w.z;k[s+6]=u.x;k[s+7]=u.y;k[s+8]=u.z;!0===h?(v=p.vertexNormals[0],w=p.vertexNormals[1],u=p.vertexNormals[2],l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=
w.x,l[s+4]=w.y,l[s+5]=w.z,l[s+6]=u.x,l[s+7]=u.y,l[s+8]=u.z):(v=p.normal,l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=v.x,l[s+4]=v.y,l[s+5]=v.z,l[s+6]=v.x,l[s+7]=v.y,l[s+8]=v.z);f===THREE.FaceColors?(p=p.color,n[s]=p.r,n[s+1]=p.g,n[s+2]=p.b,n[s+3]=p.r,n[s+4]=p.g,n[s+5]=p.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b):f===THREE.VertexColors&&(v=p.vertexColors[0],w=p.vertexColors[1],p=p.vertexColors[2],n[s]=v.r,n[s+1]=v.g,n[s+2]=v.b,n[s+3]=w.r,n[s+4]=w.g,n[s+5]=w.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b);!0===g&&(p=e[0][r][0],
v=e[0][r][1],w=e[0][r][2],q[t]=p.x,q[t+1]=p.y,q[t+2]=v.x,q[t+3]=v.y,q[t+4]=w.x,q[t+5]=w.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var c=3,d=a.length;c<d;c+=3){var e=a[c],f=a[c+1],g=a[c+2];e<b.min.x?b.min.x=e:e>b.max.x&&(b.max.x=e);f<b.min.y?b.min.y=f:f>b.max.y&&
(b.max.y=f);g<b.min.z?b.min.z=g:g>b.max.z&&(b.max.z=g)}}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&
(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),
computeFaceNormals:function(){},computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else for(a=0,b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0;var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,k,l,n,q,r=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector3,p=new THREE.Vector3,v=new THREE.Vector3;
if(this.attributes.index){var w=this.attributes.index.array,u=0<this.offsets.length?this.offsets:[{start:0,count:w.length,index:0}];c=0;for(d=u.length;c<d;++c){b=u[c].start;g=u[c].count;var D=u[c].index;a=b;for(b+=g;a<b;a+=3)g=D+w[a],h=D+w[a+1],k=D+w[a+2],l=e[3*g],n=e[3*g+1],q=e[3*g+2],r.set(l,n,q),l=e[3*h],n=e[3*h+1],q=e[3*h+2],t.set(l,n,q),l=e[3*k],n=e[3*k+1],q=e[3*k+2],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[3*g]+=p.x,f[3*g+1]+=p.y,f[3*g+2]+=p.z,f[3*h]+=p.x,f[3*h+1]+=p.y,
f[3*h+2]+=p.z,f[3*k]+=p.x,f[3*k+1]+=p.y,f[3*k+2]+=p.z}}else for(a=0,b=e.length;a<b;a+=9)l=e[a],n=e[a+1],q=e[a+2],r.set(l,n,q),l=e[a+3],n=e[a+4],q=e[a+5],t.set(l,n,q),l=e[a+6],n=e[a+7],q=e[a+8],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[a]=p.x,f[a+1]=p.y,f[a+2]=p.z,f[a+3]=p.x,f[a+4]=p.y,f[a+5]=p.z,f[a+6]=p.x,f[a+7]=p.y,f[a+8]=p.z;this.normalizeNormals();this.normalsNeedUpdate=!0}},computeTangents:function(){function a(a,b,c){q=d[3*a];r=d[3*a+1];t=d[3*a+2];s=d[3*b];p=d[3*b+1];v=d[3*
b+2];w=d[3*c];u=d[3*c+1];D=d[3*c+2];A=f[2*a];x=f[2*a+1];C=f[2*b];I=f[2*b+1];z=f[2*c];y=f[2*c+1];K=s-q;N=w-q;ba=p-r;P=u-r;O=v-t;J=D-t;E=C-A;Q=z-A;L=I-x;R=y-x;B=1/(E*R-Q*L);S.set((R*K-L*N)*B,(R*ba-L*P)*B,(R*O-L*J)*B);V.set((E*N-Q*K)*B,(E*P-Q*ba)*B,(E*J-Q*O)*B);k[a].add(S);k[b].add(S);k[c].add(S);l[a].add(V);l[b].add(V);l[c].add(V)}function b(a){za.x=e[3*a];za.y=e[3*a+1];za.z=e[3*a+2];Oa.copy(za);G=k[a];Ea.copy(G);Ea.sub(za.multiplyScalar(za.dot(G))).normalize();Aa.crossVectors(Oa,G);Ba=Aa.dot(l[a]);
Pa=0>Ba?-1:1;h[4*a]=Ea.x;h[4*a+1]=Ea.y;h[4*a+2]=Ea.z;h[4*a+3]=Pa}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent=
{itemSize:4,array:new Float32Array(4*g)});for(var h=this.attributes.tangent.array,k=[],l=[],n=0;n<g;n++)k[n]=new THREE.Vector3,l[n]=new THREE.Vector3;var q,r,t,s,p,v,w,u,D,A,x,C,I,z,y,K,N,ba,P,O,J,E,Q,L,R,B,S=new THREE.Vector3,V=new THREE.Vector3,W,H,oa,$,X,T=this.offsets,n=0;for(H=T.length;n<H;++n){W=T[n].start;oa=T[n].count;var ya=T[n].index,g=W;for(W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],a(oa,$,X)}var Ea=new THREE.Vector3,Aa=new THREE.Vector3,za=new THREE.Vector3,Oa=new THREE.Vector3,
Pa,G,Ba,n=0;for(H=T.length;n<H;++n)for(W=T[n].start,oa=T[n].count,ya=T[n].index,g=W,W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],b(oa),b($),b(X)}},computeOffsets:function(a){var b=a;void 0===a&&(b=65535);Date.now();a=this.attributes.index.array;for(var c=this.attributes.position.array,d=a.length/3,e=new Uint16Array(a.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,n=0,q=new Int32Array(6),r=new Int32Array(c.length),t=new Int32Array(c.length),s=0;s<c.length;s++)r[s]=-1,t[s]=-1;for(c=0;c<
d;c++){for(var p=n=0;3>p;p++)s=a[3*c+p],-1==r[s]?(q[2*p]=s,q[2*p+1]=-1,n++):r[s]<k.index?(q[2*p]=s,q[2*p+1]=-1,l++):(q[2*p]=s,q[2*p+1]=r[s]);if(g+n>k.index+b)for(k={start:f,count:0,index:g},h.push(k),n=0;6>n;n+=2)p=q[n+1],-1<p&&p<k.index&&(q[n+1]=-1);for(n=0;6>n;n+=2)s=q[n],p=q[n+1],-1===p&&(p=g++),r[s]=p,t[p]=s,e[f++]=p-k.index,k.count++}this.reorderBuffers(e,t,g);return this.offsets=h},merge:function(){console.log("BufferGeometry.merge(): TODO")},normalizeNormals:function(){for(var a=this.attributes.normal.array,
b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],f;for(f in this.attributes)if("index"!=f)for(var g=this.attributes[f].array,h=0,k=e.length;h<k;h++){var l=e[h];if(g instanceof l){d[f]=new l(this.attributes[f].itemSize*c);break}}for(e=0;e<c;e++)for(f in g=b[e],this.attributes)if("index"!=
f)for(var h=this.attributes[f].array,k=this.attributes[f].itemSize,l=d[f],n=0;n<k;n++)l[e*k+n]=h[g*k+n];this.attributes.index.array=a;for(f in this.attributes)"index"!=f&&(this.attributes[f].array=d[f],this.attributes[f].numItems=this.attributes[f].itemSize*c)},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,
array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=
this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof THREE.Sphere&&this.computeBoundingSphere()},
center:function(){this.computeBoundingBox();var a=new THREE.Vector3;a.addVectors(this.boundingBox.min,this.boundingBox.max);a.multiplyScalar(-0.5);this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x,a.y,a.z));this.computeBoundingBox();return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();
e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<
b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||
(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=
0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=
e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v,w=[],u=[];c=new THREE.Vector3;var D=new THREE.Vector3,A=new THREE.Vector3,x=new THREE.Vector3,C=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)w[a]=new THREE.Vector3,u[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,v=e.b,e=e.c,g=this.vertices[d],h=this.vertices[v],k=this.vertices[e],l=f[0],n=f[1],q=f[2],
f=h.x-g.x,r=k.x-g.x,t=h.y-g.y,s=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=n.x-l.x,p=q.x-l.x,n=n.y-l.y,l=q.y-l.y,q=1/(k*l-p*n),c.set((l*f-n*r)*q,(l*t-n*s)*q,(l*h-n*g)*q),D.set((k*r-p*f)*q,(k*s-p*t)*q,(k*g-p*h)*q),w[d].add(c),w[v].add(c),w[e].add(c),u[d].add(D),u[v].add(D),u[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)C.copy(e.vertexNormals[c]),d=e[D[c]],v=w[d],A.copy(v),A.sub(C.multiplyScalar(C.dot(v))).normalize(),x.crossVectors(e.vertexNormals[c],
v),d=x.dot(u[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(A.x,A.y,A.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},
merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var n=0,q=g.length;n<q;n++){var r=g[n].clone();void 0!==b&&r.applyMatrix4(b);f.push(r)}n=0;for(q=k.length;n<q;n++){var g=k[n],t,s=g.vertexNormals,p=
g.vertexColors,r=new THREE.Face3(g.a+e,g.b+e,g.c+e);r.normal.copy(g.normal);void 0!==d&&r.normal.applyMatrix3(d).normalize();b=0;for(f=s.length;b<f;b++)t=s[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),r.vertexNormals.push(t);r.color.copy(g.color);b=0;for(f=p.length;b<f;b++)t=p[b],r.vertexColors.push(t.clone());r.materialIndex=g.materialIndex+c;h.push(r)}n=0;for(q=a.length;n<q;n++)if(c=a[n],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(new THREE.Vector2(c[b].x,c[b].y));l.push(d)}}},mergeVertices:function(){var a=
{},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,
1);f=this.vertices.length-b.length;this.vertices=b;return f},makeGroups:function(){var a=0;return function(b,c){var d,e,f,g,h={},k,l=this.morphTargets.length,n=this.morphNormals.length;this.geometryGroups={};this.geometryGroupsList=[];d=0;for(e=this.faces.length;d<e;d++)f=this.faces[d],f=b?f.materialIndex:0,f in h||(h[f]={hash:f,counter:0}),g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=
k,this.geometryGroupsList.push(k)),this.geometryGroups[g].vertices+3>c&&(h[f].counter+=1,g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=k,this.geometryGroupsList.push(k))),this.geometryGroups[g].faces3.push(d),this.geometryGroups[g].vertices+=3}}(),clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=
b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};
THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,r=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=r;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};
THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};
THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=
this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache=function(){this.files={}};THREE.Cache.prototype={constructor:THREE.Cache,add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,p){var v=b+e,w,u=THREE.Loader.Handlers.get(v);null!==u?w=u.load(v):(w=new THREE.Texture,u=f.imageLoader,u.crossOrigin=f.crossOrigin,u.load(v,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);w.image=e}else w.image=a;w.needsUpdate=!0}));w.sourceFile=e;g&&(w.repeat.set(g[0],g[1]),1!==g[0]&&(w.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(w.wrapT=THREE.RepeatWrapping));h&&w.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(w.wrapS=e[k[0]]),void 0!==e[k[1]]&&(w.wrapT=e[k[1]]));p&&(w.anisotropy=p);a[d]=w}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)h.transparent=a.transparent;void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===
a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorAmbient&&(h.ambient=e(a.colorAmbient));a.colorEmissive&&(h.emissive=e(a.colorEmissive));a.transparency&&(h.opacity=a.transparency);a.specularCoef&&(h.shininess=a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,
a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&
b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormal?(g=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(g.uniforms),k.tNormal.value=h.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),h.map&&(k.tDiffuse.value=h.map,k.enableDiffuse.value=!0),h.specularMap&&(k.tSpecular.value=h.specularMap,k.enableSpecular.value=!0),h.lightMap&&(k.tAO.value=h.lightMap,
k.enableAO.value=!0),k.diffuse.value.setHex(h.color),k.specular.value.setHex(h.specular),k.ambient.value.setHex(h.ambient),k.shininess.value=h.shininess,void 0!==h.opacity&&(k.opacity.value=h.opacity),g=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:k,lights:!0,fog:!0}),h.transparent&&(g.transparent=!0)):g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){e.cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),void 0!==b&&f.addEventListener("load",function(c){e.cache.add(a,this);b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);if(void 0!==h.metadata&&"scene"===h.metadata.type){console.error('THREE.JSONLoader: "'+b+'" seems to be a Scene. Use THREE.SceneLoader instead.');return}h=a.parse(h,d);c(h.geometry,h.materials)}else console.error('THREE.JSONLoader: "'+b+'" seems to be unreachable or the file is empty.');
a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load \""+b+'" ('+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,n,q,r,t,s,p,v,w,u=a.faces;n=a.vertices;var D=a.normals,A=a.colors,x=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&x++;for(d=0;d<x;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=u.length;k<l;)if(b=u[k++],t=b&1,h=b&2,d=b&8,q=b&16,s=b&32,n=b&64,b&=128,t){t=new THREE.Face3;
t.a=u[k];t.b=u[k+1];t.c=u[k+3];p=new THREE.Face3;p.a=u[k+1];p.b=u[k+2];p.c=u[k+3];k+=4;h&&(h=u[k++],t.materialIndex=h,p.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],w=new THREE.Vector2(w,r),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]),p.normal.copy(t.normal));if(s)for(d=0;4>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],
D[q++],D[q]),2!==d&&t.vertexNormals.push(s),0!==d&&p.vertexNormals.push(s);n&&(n=u[k++],n=A[n],t.color.setHex(n),p.color.setHex(n));if(b)for(d=0;4>d;d++)n=u[k++],n=A[n],2!==d&&t.vertexColors.push(new THREE.Color(n)),0!==d&&p.vertexColors.push(new THREE.Color(n));c.faces.push(t);c.faces.push(p)}else{t=new THREE.Face3;t.a=u[k++];t.b=u[k++];t.c=u[k++];h&&(h=u[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],
w=new THREE.Vector2(w,r),c.faceVertexUvs[d][h].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]));if(s)for(d=0;3>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(s);n&&(n=u[k++],t.color.setHex(A[n]));if(b)for(d=0;3>d;d++)n=u[k++],t.vertexColors.push(new THREE.Color(A[n]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+
"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,n;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var q=new THREE.Vector3;q.x=n[h]*b;q.y=n[h+1]*b;q.z=n[h+2]*b;l.push(q)}}if(void 0!==a.morphColors)for(d=
0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};
THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d;for(d in c){var e=c[d];b.attributes[d]={itemSize:e.itemSize,array:new self[e.type](e.array)}}c=a.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));a=a.boundingSphere;
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=
0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);
break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=
d.parse(h.data);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,
b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,
b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?
(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};
THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;
a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=
!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a)};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};
THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(a,c){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;
THREE.Texture=function(a,b,c,d,e,f,g,h,k){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==k?k:1;this.format=void 0!==
g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=new THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};
THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()});this.sortParticles=!1};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var l=c.ray.origin.distanceTo(k);
d.push({distance:l,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,n=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var r=0,t=q.length;r<t;++r)for(var s=q[r].start,p=q[r].index,f=s,s=s+q[r].count;f<s;f++){var v=p+l[f];k.set(n[3*v],n[3*v+1],n[3*v+2]);g(k,v)}}else for(l=n.length/3,f=0;f<l;f++)k.set(n[3*f],n[3*f+1],n[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(d.ray).applyMatrix4(a),g instanceof THREE.Geometry))for(var g=g.vertices,h=g.length,k=new THREE.Vector3,l=new THREE.Vector3,n=this.type===THREE.LineStrip?
1:2,q=0;q<h-1;q+=n)if(!(b.distanceSqToSegment(g[q],g[q+1],l,k)>f)){var r=b.origin.distanceTo(l);r<d.near||r>d.far||e.push({distance:r,point:k.clone().applyMatrix4(this.matrixWorld),face:null,faceIndex:null,object:this})}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
this.material;if(void 0!==l){var n=k.attributes,q,r,t=g.precision;if(void 0!==n.index){var s=n.index.array,p=n.position.array,v=k.offsets;0===v.length&&(v=[{start:0,count:s.length,index:0}]);for(var w=0,u=v.length;w<u;++w)for(var n=v[w].start,D=v[w].index,k=n,A=n+v[w].count;k<A;k+=3){n=D+s[k];q=D+s[k+1];r=D+s[k+2];d.set(p[3*n],p[3*n+1],p[3*n+2]);e.set(p[3*q],p[3*q+1],p[3*q+2]);f.set(p[3*r],p[3*r+1],p[3*r+2]);var x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==
THREE.DoubleSide);if(null!==x){x.applyMatrix4(this.matrixWorld);var C=g.ray.origin.distanceTo(x);C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this})}}}else for(p=n.position.array,s=k=0,A=p.length;k<A;k+=3,s+=9)n=k,q=k+1,r=k+2,d.set(p[s],p[s+1],p[s+2]),e.set(p[s+3],p[s+4],p[s+5]),f.set(p[s+6],p[s+7],p[s+8]),x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==x&&(x.applyMatrix4(this.matrixWorld),
C=g.ray.origin.distanceTo(x),C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(s=this.material instanceof THREE.MeshFaceMaterial,p=!0===s?this.material.materials:null,t=g.precision,v=k.vertices,w=0,u=k.faces.length;w<u;w++)if(D=k.faces[w],l=!0===s?p[D.materialIndex]:this.material,void 0!==l){n=v[D.a];q=v[D.b];r=v[D.c];if(!0===l.morphTargets){x=k.morphTargets;C=this.morphTargetInfluences;d.set(0,0,0);
e.set(0,0,0);f.set(0,0,0);for(var A=0,I=x.length;A<I;A++){var z=C[A];if(0!==z){var y=x[A].vertices;d.x+=(y[D.a].x-n.x)*z;d.y+=(y[D.a].y-n.y)*z;d.z+=(y[D.a].z-n.z)*z;e.x+=(y[D.b].x-q.x)*z;e.y+=(y[D.b].y-q.y)*z;e.z+=(y[D.b].z-q.z)*z;f.x+=(y[D.c].x-r.x)*z;f.y+=(y[D.c].y-r.y)*z;f.z+=(y[D.c].z-r.z)*z}}d.add(n);e.add(q);f.add(r);n=d;q=e;r=f}x=l.side===THREE.BackSide?b.intersectTriangle(r,q,n,!0):b.intersectTriangle(n,q,r,l.side!==THREE.DoubleSide);null!==x&&(x.applyMatrix4(this.matrixWorld),C=g.ray.origin.distanceTo(x),
C<t||C<g.near||C>g.far||h.push({distance:C,point:x,face:D,faceIndex:w,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.updateMatrixWorld=function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a);this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){for(var a=new THREE.Matrix4,b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,1,1);h=0;for(k=
this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Float32Array([-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0]),b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(a,3));return function(a){THREE.Object3D.call(this);this.geometry=b;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};
THREE.CanvasRenderer=function(a){function b(a,b,c,d){l(b);n(c);q(d);r(a.getStyle());O.stroke();ra.expandByScalar(2*b)}function c(a){t(a.getStyle());O.fill()}function d(a){e(a.target)}function e(a){if(!(a instanceof THREE.CompressedTexture)){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);Ca[a.id]=O.createPattern(e,!0===
b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}}function f(a,b,c,f,g,h,k,l,n,r,q,s,p){if(!(p instanceof THREE.DataTexture)){!1===p.hasEventListener("update",d)&&(void 0!==p.image&&0<p.image.width&&e(p),p.addEventListener("update",d));var m=Ca[p.id];if(void 0!==m){t(m);var m=p.offset.x/p.repeat.x,w=p.offset.y/p.repeat.y,u=p.image.width*p.repeat.x;p=p.image.height*p.repeat.y;k=(k+m)*u;l=(l+w)*p;c-=a;f-=b;g-=a;h-=b;n=(n+m)*u-k;r=(r+w)*p-l;q=(q+m)*u-k;s=(s+w)*p-l;
p=n*s-q*r;0!==p&&(m=1/p,p=(s*c-r*g)*m,r=(s*f-r*h)*m,c=(n*g-q*c)*m,f=(n*h-q*f)*m,a=a-p*k-c*l,b=b-r*k-f*l,O.save(),O.transform(p,r,c,f,a,b),O.fill(),O.restore())}else t("rgba(0,0,0,1)"),O.fill()}}function g(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function h(a){Q!==a&&(Q=O.globalAlpha=a)}function k(a){L!==a&&(a===THREE.NormalBlending?O.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?O.globalCompositeOperation="lighter":
a===THREE.SubtractiveBlending&&(O.globalCompositeOperation="darker"),L=a)}function l(a){S!==a&&(S=O.lineWidth=a)}function n(a){V!==a&&(V=O.lineCap=a)}function q(a){W!==a&&(W=O.lineJoin=a)}function r(a){R!==a&&(R=O.strokeStyle=a)}function t(a){B!==a&&(B=O.fillStyle=a)}function s(a){H.length!==a.length&&(O.setLineDash(a),H=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var p=THREE.Math.smoothstep;a=a||{};var v=this,w,u,D,A=new THREE.Projector,x=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
C=x.width,I=x.height,z=Math.floor(C/2),y=Math.floor(I/2),K=0,N=0,ba=C,P=I,O=x.getContext("2d",{alpha:!0===a.alpha}),J=new THREE.Color(0),E=0,Q=1,L=0,R=null,B=null,S=null,V=null,W=null,H=[],oa,$,X,T;new THREE.RenderableVertex;new THREE.RenderableVertex;var ya,Ea,Aa,za,Oa,Pa,G=new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;var Ba=new THREE.Color,Ya=new THREE.Color,Za=new THREE.Color,Ca={},ca,la,qa,ua,ja,Fa,va,Ka=new THREE.Box2,aa=new THREE.Box2,ra=new THREE.Box2,Da=
new THREE.Color,Qa=new THREE.Color,cb=new THREE.Color,Ga=new THREE.Vector3,xa=new THREE.Vector3,ma=new THREE.Vector3,Ja=new THREE.Matrix3;void 0===O.setLineDash&&(O.setLineDash=function(){});this.domElement=x;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=
function(a,b,c){C=a*this.devicePixelRatio;I=b*this.devicePixelRatio;x.width=C;x.height=I;z=Math.floor(C/2);y=Math.floor(I/2);!1!==c&&(x.style.width=a+"px",x.style.height=b+"px");Ka.min.set(-z,-y);Ka.max.set(z,y);aa.min.set(-z,-y);aa.max.set(z,y);Q=1;L=0;W=V=S=B=R=null;this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){K=a*this.devicePixelRatio;N=b*this.devicePixelRatio;ba=c*this.devicePixelRatio;P=d*this.devicePixelRatio};this.setScissor=function(){};this.enableScissorTest=function(){};
this.setClearColor=function(a,b){J.set(a);E=void 0!==b?b:1;aa.min.set(-z,-y);aa.max.set(z,y)};this.setClearColorHex=function(a,b){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return J};this.getClearAlpha=function(){return E};this.getMaxAnisotropy=function(){return 0};this.clear=function(){!1===aa.empty()&&(aa.intersect(Ka),aa.expandByScalar(2),aa.min.x+=z,aa.min.y=-aa.min.y+y,aa.max.x+=
z,aa.max.y=-aa.max.y+y,1>E&&O.clearRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0),0<E&&(k(THREE.NormalBlending),h(1),t("rgba("+Math.floor(255*J.r)+","+Math.floor(255*J.g)+","+Math.floor(255*J.b)+","+E+")"),O.fillRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0)),aa.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,x){if(!1===x instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();v.info.render.vertices=0;v.info.render.faces=0;O.setTransform(ba/C,0,0,-P/I,K,I-N);O.translate(z,y);w=A.projectScene(a,x,this.sortObjects,this.sortElements);u=w.elements;D=w.lights;oa=x;Ja.getNormalMatrix(x.matrixWorldInverse);Da.setRGB(0,0,0);Qa.setRGB(0,0,0);cb.setRGB(0,0,0);for(var L=0,Q=D.length;L<Q;L++){var E=D[L],H=E.color;E instanceof THREE.AmbientLight?Da.add(H):E instanceof THREE.DirectionalLight?Qa.add(H):E instanceof THREE.PointLight&&cb.add(H)}L=
0;for(Q=u.length;L<Q;L++){var J=u[L],B=J.material;if(void 0!==B&&0!==B.opacity){ra.makeEmpty();if(J instanceof THREE.RenderableSprite){$=J;$.x*=z;$.y*=y;var E=$,R=J,H=B;h(H.opacity);k(H.blending);var ea=R.scale.x*z,R=R.scale.y*y,J=0.5*Math.sqrt(ea*ea+R*R);ra.min.set(E.x-J,E.y-J);ra.max.set(E.x+J,E.y+J);if(H instanceof THREE.SpriteMaterial){var da=H.map;if(null!==da&&void 0!==da.image){!1===da.hasEventListener("update",d)&&(0<da.image.width&&e(da),da.addEventListener("update",d));J=Ca[da.id];void 0!==
J?t(J):t("rgba( 0, 0, 0, 1 )");var S=da.image,J=S.width*da.offset.x,B=S.height*da.offset.y,V=S.width*da.repeat.x,da=S.height*da.repeat.y,S=ea/V,m=R/da;O.save();O.translate(E.x,E.y);0!==H.rotation&&O.rotate(H.rotation);O.translate(-ea/2,-R/2);O.scale(S,m);O.translate(-J,-B);O.fillRect(J,B,V,da)}else t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,-R),O.fillRect(-0.5,-0.5,1,1);O.restore()}else H instanceof THREE.SpriteCanvasMaterial&&(r(H.color.getStyle()),
t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,R),H.program(O),O.restore())}else if(J instanceof THREE.RenderableLine){if($=J.v1,X=J.v2,$.positionScreen.x*=z,$.positionScreen.y*=y,X.positionScreen.x*=z,X.positionScreen.y*=y,ra.setFromPoints([$.positionScreen,X.positionScreen]),!0===Ka.isIntersectionBox(ra))if(E=$,H=X,ea=J,R=B,h(R.opacity),k(R.blending),O.beginPath(),O.moveTo(E.positionScreen.x,E.positionScreen.y),O.lineTo(H.positionScreen.x,H.positionScreen.y),
R instanceof THREE.LineBasicMaterial){l(R.linewidth);n(R.linecap);q(R.linejoin);if(R.vertexColors!==THREE.VertexColors)r(R.color.getStyle());else if(J=ea.vertexColors[0].getStyle(),ea=ea.vertexColors[1].getStyle(),J===ea)r(J);else{try{var W=O.createLinearGradient(E.positionScreen.x,E.positionScreen.y,H.positionScreen.x,H.positionScreen.y);W.addColorStop(0,J);W.addColorStop(1,ea)}catch(xb){W=J}r(W)}O.stroke();ra.expandByScalar(2*R.linewidth)}else R instanceof THREE.LineDashedMaterial&&(l(R.linewidth),
n(R.linecap),q(R.linejoin),r(R.color.getStyle()),s([R.dashSize,R.gapSize]),O.stroke(),ra.expandByScalar(2*R.linewidth),s([]))}else if(J instanceof THREE.RenderableFace){$=J.v1;X=J.v2;T=J.v3;if(-1>$.positionScreen.z||1<$.positionScreen.z)continue;if(-1>X.positionScreen.z||1<X.positionScreen.z)continue;if(-1>T.positionScreen.z||1<T.positionScreen.z)continue;$.positionScreen.x*=z;$.positionScreen.y*=y;X.positionScreen.x*=z;X.positionScreen.y*=y;T.positionScreen.x*=z;T.positionScreen.y*=y;0<B.overdraw&&
(g($.positionScreen,X.positionScreen,B.overdraw),g(X.positionScreen,T.positionScreen,B.overdraw),g(T.positionScreen,$.positionScreen,B.overdraw));ra.setFromPoints([$.positionScreen,X.positionScreen,T.positionScreen]);if(!0===Ka.isIntersectionBox(ra)){H=$;ea=X;R=T;E=B;v.info.render.vertices+=3;v.info.render.faces++;h(E.opacity);k(E.blending);ya=H.positionScreen.x;Ea=H.positionScreen.y;Aa=ea.positionScreen.x;za=ea.positionScreen.y;Oa=R.positionScreen.x;Pa=R.positionScreen.y;var B=ya,V=Ea,da=Aa,S=za,
m=Oa,Ta=Pa;O.beginPath();O.moveTo(B,V);O.lineTo(da,S);O.lineTo(m,Ta);O.closePath();if((E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)&&null===E.map){Ba.copy(E.color);Ya.copy(E.emissive);E.vertexColors===THREE.FaceColors&&Ba.multiply(J.color);G.copy(Da);xa.copy(H.positionWorld).add(ea.positionWorld).add(R.positionWorld).divideScalar(3);H=xa;ea=J.normalModel;R=G;J=0;for(B=D.length;J<B;J++)V=D[J],Za.copy(V.color),V instanceof THREE.DirectionalLight?(da=Ga.setFromMatrixPosition(V.matrixWorld).normalize(),
S=ea.dot(da),0>=S||(S*=V.intensity,R.add(Za.multiplyScalar(S)))):V instanceof THREE.PointLight&&(da=Ga.setFromMatrixPosition(V.matrixWorld),S=ea.dot(Ga.subVectors(da,H).normalize()),0>=S||(S*=0==V.distance?1:1-Math.min(H.distanceTo(da)/V.distance,1),0!=S&&(S*=V.intensity,R.add(Za.multiplyScalar(S)))));G.multiply(Ba).add(Ya);!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G)}else E instanceof THREE.MeshBasicMaterial||E instanceof THREE.MeshLambertMaterial||E instanceof
THREE.MeshPhongMaterial?null!==E.map?E.map.mapping instanceof THREE.UVMapping&&(ca=J.uvs,f(ya,Ea,Aa,za,Oa,Pa,ca[0].x,ca[0].y,ca[1].x,ca[1].y,ca[2].x,ca[2].y,E.map)):null!==E.envMap?E.envMap.mapping instanceof THREE.SphericalReflectionMapping?(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=0.5*ma.x+0.5,qa=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=0.5*ma.x+0.5,ja=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=0.5*ma.x+0.5,va=0.5*ma.y+0.5,f(ya,Ea,Aa,za,
Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):E.envMap.mapping instanceof THREE.SphericalRefractionMapping&&(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=-0.5*ma.x+0.5,qa=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=-0.5*ma.x+0.5,ja=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=-0.5*ma.x+0.5,va=-0.5*ma.y+0.5,f(ya,Ea,Aa,za,Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):(G.copy(E.color),E.vertexColors===THREE.FaceColors&&G.multiply(J.color),!0===E.wireframe?b(G,E.wireframeLinewidth,
E.wireframeLinecap,E.wireframeLinejoin):c(G)):(E instanceof THREE.MeshDepthMaterial?G.r=G.g=G.b=1-p(H.positionScreen.z*H.positionScreen.w,oa.near,oa.far):E instanceof THREE.MeshNormalMaterial?(ma.copy(J.normalModel).applyMatrix3(Ja),G.setRGB(ma.x,ma.y,ma.z).multiplyScalar(0.5).addScalar(0.5)):G.setRGB(1,1,1),!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G))}}aa.union(ra)}}O.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={};
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.default_vertex="vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex="vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",
value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},
hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},
opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,
THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,
THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,
{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},
specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\tvNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,
THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,
"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,
"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",
value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},
specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
THREE.ShaderChunk.alphatest_fragment,"\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,"\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=m.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,k=1*g.length,l=3*g.length,g=d(b,a),n=f(g),r=e(g),p=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);r&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));p&&(a.__colorArray=new Float32Array(3*h));n&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));c=null!==Eb&&21845<k?Uint32Array:Uint16Array;a.__typeArray=c;a.__faceArray=new c(3*k);a.__lineArray=new c(2*l);if(a.numMorphTargets)for(a.__morphTargetsArrays=[],c=0,n=a.numMorphTargets;c<n;c++)a.__morphTargetsArrays.push(new Float32Array(3*h));if(a.numMorphNormals)for(a.__morphNormalsArrays=[],c=0,n=a.numMorphNormals;c<n;c++)a.__morphNormalsArrays.push(new Float32Array(3*h));a.__webglFaceCount=3*k;a.__webglLineCount=
2*l;if(g.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var q in g.attributes){var k=g.attributes[q],l={},s;for(s in k)l[s]=k[s];if(!l.__webglInitialized||l.createUniqueBuffers)l.__webglInitialized=!0,c=1,"v2"===l.type?c=2:"v3"===l.type?c=3:"v4"===l.type?c=4:"c"===l.type&&(c=3),l.size=c,l.array=new Float32Array(h*c),l.buffer=m.createBuffer(),l.buffer.belongsToAttribute=q,k.needsUpdate=!0,l.__original=k;a.__webglCustomAttributesList.push(l)}}a.__inittedArrays=
!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a.alphaMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){for(var b in a.attributes){var c=
"index"===b?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER,d=a.attributes[b];d.buffer=m.createBuffer();m.bindBuffer(c,d.buffer);m.bufferData(c,d.array,m.STATIC_DRAW)}}function h(a,b,c,d){for(var e in b){var f=b[e],g=c[e];if(0<=f)if(g){var h=g.itemSize;m.bindBuffer(m.ARRAY_BUFFER,g.buffer);l(f);m.vertexAttribPointer(f,h,m.FLOAT,!1,0,d*h*4)}else a.defaultAttributeValues&&(2===a.defaultAttributeValues[e].length?m.vertexAttrib2fv(f,a.defaultAttributeValues[e]):3===a.defaultAttributeValues[e].length&&m.vertexAttrib3fv(f,
a.defaultAttributeValues[e]))}n()}function k(){for(var a=0,b=pb.length;a<b;a++)pb[a]=0}function l(a){pb[a]=1;0===tb[a]&&(m.enableVertexAttribArray(a),tb[a]=1)}function n(){for(var a=0,b=tb.length;a<b;a++)tb[a]!==pb[a]&&(m.disableVertexAttribArray(a),tb[a]=0)}function q(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function r(a,b){return a.z!==b.z?a.z-b.z:a.id-b.id}function t(a,b){return b[0]-a[0]}function s(a,b,h){if(!1!==b.visible){var k=a.__webglObjects[b.id];if(k&&(!1===b.frustumCulled||!0===jc.intersectsObject(b))){var l=
b.geometry,n,r,p;if(l instanceof THREE.BufferGeometry){var q=m.DYNAMIC_DRAW,w=l.attributes,u,v;for(u in w)v=w[u],v.needsUpdate&&("index"===u?(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.buffer),m.bufferData(m.ELEMENT_ARRAY_BUFFER,v.array,q)):(m.bindBuffer(m.ARRAY_BUFFER,v.buffer),m.bufferData(m.ARRAY_BUFFER,v.array,q)),v.needsUpdate=!1)}else if(b instanceof THREE.Mesh){if(l.buffersNeedUpdate||l.groupsNeedUpdate)l instanceof THREE.BufferGeometry?g(l):b instanceof THREE.Mesh&&D(a,b,l);for(var A=0,z=l.geometryGroupsList.length;A<
z;A++)if(n=l.geometryGroupsList[A],p=d(b,n),(l.buffersNeedUpdate||l.groupsNeedUpdate)&&c(n,b),r=p.attributes&&x(p),l.verticesNeedUpdate||l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||r){var y=n,E=b,I=m.DYNAMIC_DRAW,J=!l.dynamic,L=p;if(y.__inittedArrays){var K=e(L),H=L.vertexColors?L.vertexColors:!1,Q=f(L),O=K===THREE.SmoothShading,B=void 0,N=void 0,P=void 0,T=void 0,R=void 0,ba=void 0,S=void 0,$=void 0,X=void 0,V=void 0,
za=void 0,ga=void 0,ha=void 0,ia=void 0,Ea=void 0,aa=void 0,da=void 0,ya=void 0,U=void 0,ca=void 0,W=void 0,Ba=void 0,Aa=void 0,la=void 0,ma=void 0,oa=void 0,ra=void 0,ua=void 0,va=void 0,ja=void 0,Fa=void 0,Da=void 0,Ga=void 0,Ya=void 0,qa=void 0,Ka=void 0,xa=void 0,Ca=void 0,Ja=void 0,Qa=void 0,db=0,eb=0,Sa=0,Za=0,Ta=0,gb=0,Ua=0,ub=0,$a=0,wa=0,Ha=0,M=0,Ra=void 0,hb=y.__vertexArray,cb=y.__uvArray,fb=y.__uv2Array,yb=y.__normalArray,Va=y.__tangentArray,ib=y.__colorArray,Wa=y.__skinIndexArray,Xa=y.__skinWeightArray,
tb=y.__morphTargetsArrays,wb=y.__morphNormalsArrays,sb=y.__webglCustomAttributesList,F=void 0,pb=y.__faceArray,zb=y.__lineArray,La=E.geometry,Db=La.elementsNeedUpdate,xb=La.uvsNeedUpdate,Eb=La.normalsNeedUpdate,Ob=La.tangentsNeedUpdate,Pb=La.colorsNeedUpdate,Sb=La.morphTargetsNeedUpdate,lc=La.vertices,ka=y.faces3,jb=La.faces,Hb=La.faceVertexUvs[0],Ib=La.faceVertexUvs[1],mc=La.skinIndices,Vb=La.skinWeights,Wb=La.morphTargets,Jb=La.morphNormals;if(La.verticesNeedUpdate){B=0;for(N=ka.length;B<N;B++)T=
jb[ka[B]],ga=lc[T.a],ha=lc[T.b],ia=lc[T.c],hb[eb]=ga.x,hb[eb+1]=ga.y,hb[eb+2]=ga.z,hb[eb+3]=ha.x,hb[eb+4]=ha.y,hb[eb+5]=ha.z,hb[eb+6]=ia.x,hb[eb+7]=ia.y,hb[eb+8]=ia.z,eb+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,hb,I)}if(Sb)for(qa=0,Ka=Wb.length;qa<Ka;qa++){B=Ha=0;for(N=ka.length;B<N;B++)Ja=ka[B],T=jb[Ja],ga=Wb[qa].vertices[T.a],ha=Wb[qa].vertices[T.b],ia=Wb[qa].vertices[T.c],xa=tb[qa],xa[Ha]=ga.x,xa[Ha+1]=ga.y,xa[Ha+2]=ga.z,xa[Ha+3]=ha.x,xa[Ha+4]=ha.y,xa[Ha+
5]=ha.z,xa[Ha+6]=ia.x,xa[Ha+7]=ia.y,xa[Ha+8]=ia.z,L.morphNormals&&(O?(Qa=Jb[qa].vertexNormals[Ja],ya=Qa.a,U=Qa.b,ca=Qa.c):ca=U=ya=Jb[qa].faceNormals[Ja],Ca=wb[qa],Ca[Ha]=ya.x,Ca[Ha+1]=ya.y,Ca[Ha+2]=ya.z,Ca[Ha+3]=U.x,Ca[Ha+4]=U.y,Ca[Ha+5]=U.z,Ca[Ha+6]=ca.x,Ca[Ha+7]=ca.y,Ca[Ha+8]=ca.z),Ha+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphTargetsBuffers[qa]);m.bufferData(m.ARRAY_BUFFER,tb[qa],I);L.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphNormalsBuffers[qa]),m.bufferData(m.ARRAY_BUFFER,wb[qa],
I))}if(Vb.length){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],la=Vb[T.a],ma=Vb[T.b],oa=Vb[T.c],Xa[wa]=la.x,Xa[wa+1]=la.y,Xa[wa+2]=la.z,Xa[wa+3]=la.w,Xa[wa+4]=ma.x,Xa[wa+5]=ma.y,Xa[wa+6]=ma.z,Xa[wa+7]=ma.w,Xa[wa+8]=oa.x,Xa[wa+9]=oa.y,Xa[wa+10]=oa.z,Xa[wa+11]=oa.w,ra=mc[T.a],ua=mc[T.b],va=mc[T.c],Wa[wa]=ra.x,Wa[wa+1]=ra.y,Wa[wa+2]=ra.z,Wa[wa+3]=ra.w,Wa[wa+4]=ua.x,Wa[wa+5]=ua.y,Wa[wa+6]=ua.z,Wa[wa+7]=ua.w,Wa[wa+8]=va.x,Wa[wa+9]=va.y,Wa[wa+10]=va.z,Wa[wa+11]=va.w,wa+=12;0<wa&&(m.bindBuffer(m.ARRAY_BUFFER,
y.__webglSkinIndicesBuffer),m.bufferData(m.ARRAY_BUFFER,Wa,I),m.bindBuffer(m.ARRAY_BUFFER,y.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Xa,I))}if(Pb&&H){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],S=T.vertexColors,$=T.color,3===S.length&&H===THREE.VertexColors?(W=S[0],Ba=S[1],Aa=S[2]):Aa=Ba=W=$,ib[$a]=W.r,ib[$a+1]=W.g,ib[$a+2]=W.b,ib[$a+3]=Ba.r,ib[$a+4]=Ba.g,ib[$a+5]=Ba.b,ib[$a+6]=Aa.r,ib[$a+7]=Aa.g,ib[$a+8]=Aa.b,$a+=9;0<$a&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,
ib,I))}if(Ob&&La.hasTangents){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],X=T.vertexTangents,Ea=X[0],aa=X[1],da=X[2],Va[Ua]=Ea.x,Va[Ua+1]=Ea.y,Va[Ua+2]=Ea.z,Va[Ua+3]=Ea.w,Va[Ua+4]=aa.x,Va[Ua+5]=aa.y,Va[Ua+6]=aa.z,Va[Ua+7]=aa.w,Va[Ua+8]=da.x,Va[Ua+9]=da.y,Va[Ua+10]=da.z,Va[Ua+11]=da.w,Ua+=12;m.bindBuffer(m.ARRAY_BUFFER,y.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,Va,I)}if(Eb&&K){B=0;for(N=ka.length;B<N;B++)if(T=jb[ka[B]],R=T.vertexNormals,ba=T.normal,3===R.length&&O)for(ja=0;3>ja;ja++)Da=R[ja],
yb[gb]=Da.x,yb[gb+1]=Da.y,yb[gb+2]=Da.z,gb+=3;else for(ja=0;3>ja;ja++)yb[gb]=ba.x,yb[gb+1]=ba.y,yb[gb+2]=ba.z,gb+=3;m.bindBuffer(m.ARRAY_BUFFER,y.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,yb,I)}if(xb&&Hb&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],V=Hb[P],void 0!==V)for(ja=0;3>ja;ja++)Ga=V[ja],cb[Sa]=Ga.x,cb[Sa+1]=Ga.y,Sa+=2;0<Sa&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,cb,I))}if(xb&&Ib&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],za=Ib[P],void 0!==za)for(ja=
0;3>ja;ja++)Ya=za[ja],fb[Za]=Ya.x,fb[Za+1]=Ya.y,Za+=2;0<Za&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,fb,I))}if(Db){B=0;for(N=ka.length;B<N;B++)pb[Ta]=db,pb[Ta+1]=db+1,pb[Ta+2]=db+2,Ta+=3,zb[ub]=db,zb[ub+1]=db+1,zb[ub+2]=db,zb[ub+3]=db+2,zb[ub+4]=db+1,zb[ub+5]=db+2,ub+=6,db+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,pb,I);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,
zb,I)}if(sb)for(ja=0,Fa=sb.length;ja<Fa;ja++)if(F=sb[ja],F.__original.needsUpdate){M=0;if(1===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],F.array[M]=F.value[T.a],F.array[M+1]=F.value[T.b],F.array[M+2]=F.value[T.c],M+=3;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],F.array[M]=Ra,F.array[M+1]=Ra,F.array[M+2]=Ra,M+=3}else if(2===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=
F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6}else if(3===F.size){var ta;ta="c"===F.type?["r","g","b"]:["x","y","z"];if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],
ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+
7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9}else if(4===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],
F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,
F.array[M+11]=ia.w,M+=12;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;m.bindBuffer(m.ARRAY_BUFFER,F.buffer);m.bufferData(m.ARRAY_BUFFER,F.array,I)}J&&(delete y.__inittedArrays,delete y.__colorArray,delete y.__normalArray,
delete y.__tangentArray,delete y.__uvArray,delete y.__uv2Array,delete y.__faceArray,delete y.__vertexArray,delete y.__lineArray,delete y.__skinIndexArray,delete y.__skinWeightArray)}}l.verticesNeedUpdate=!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.Line){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||
r){var Xb=m.DYNAMIC_DRAW,Kb,Lb,Mb,Yb,sa,Zb,Nb=l.vertices,Qb=l.colors,Rb=l.lineDistances,ec=Nb.length,fc=Qb.length,gc=Rb.length,$b=l.__vertexArray,ac=l.__colorArray,Tb=l.__lineDistanceArray,hc=l.colorsNeedUpdate,ic=l.lineDistancesNeedUpdate,nc=l.__webglCustomAttributesList,bc,uc,Ia,Fb,Ma,pa;if(l.verticesNeedUpdate){for(Kb=0;Kb<ec;Kb++)Yb=Nb[Kb],sa=3*Kb,$b[sa]=Yb.x,$b[sa+1]=Yb.y,$b[sa+2]=Yb.z;m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,$b,Xb)}if(hc){for(Lb=0;Lb<fc;Lb++)Zb=
Qb[Lb],sa=3*Lb,ac[sa]=Zb.r,ac[sa+1]=Zb.g,ac[sa+2]=Zb.b;m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,ac,Xb)}if(ic){for(Mb=0;Mb<gc;Mb++)Tb[Mb]=Rb[Mb];m.bindBuffer(m.ARRAY_BUFFER,l.__webglLineDistanceBuffer);m.bufferData(m.ARRAY_BUFFER,Tb,Xb)}if(nc)for(bc=0,uc=nc.length;bc<uc;bc++)if(pa=nc[bc],pa.needsUpdate&&(void 0===pa.boundTo||"vertices"===pa.boundTo)){sa=0;Fb=pa.value.length;if(1===pa.size)for(Ia=0;Ia<Fb;Ia++)pa.array[Ia]=pa.value[Ia];else if(2===pa.size)for(Ia=
0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,sa+=2;else if(3===pa.size)if("c"===pa.type)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.r,pa.array[sa+1]=Ma.g,pa.array[sa+2]=Ma.b,sa+=3;else for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,sa+=3;else if(4===pa.size)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,pa.array[sa+3]=Ma.w,sa+=4;m.bindBuffer(m.ARRAY_BUFFER,pa.buffer);m.bufferData(m.ARRAY_BUFFER,
pa.array,Xb)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.PointCloud){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||b.sortParticles||r){var oc=m.DYNAMIC_DRAW,Na,kb,lb,Z,mb,vb,cc=l.vertices,pc=cc.length,qc=l.colors,vc=qc.length,Ab=l.__vertexArray,Bb=l.__colorArray,qb=l.__sortArray,wc=l.verticesNeedUpdate,xc=l.colorsNeedUpdate,rb=l.__webglCustomAttributesList,ab,Gb,fa,bb,na,Y;if(b.sortParticles){kc.copy(Ub);
kc.multiply(b.matrixWorld);for(Na=0;Na<pc;Na++)lb=cc[Na],ea.copy(lb),ea.applyProjection(kc),qb[Na]=[ea.z,Na];qb.sort(t);for(Na=0;Na<pc;Na++)lb=cc[qb[Na][1]],Z=3*Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;for(kb=0;kb<vc;kb++)Z=3*kb,vb=qc[qb[kb][1]],Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],void 0===Y.boundTo||"vertices"===Y.boundTo)if(Z=0,bb=Y.value.length,1===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],Y.array[fa]=Y.value[mb];else if(2===Y.size)for(fa=0;fa<bb;fa++)mb=
qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.r,Y.array[Z+1]=na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}else{if(wc)for(Na=0;Na<pc;Na++)lb=cc[Na],Z=3*
Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;if(xc)for(kb=0;kb<vc;kb++)vb=qc[kb],Z=3*kb,Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],Y.needsUpdate&&(void 0===Y.boundTo||"vertices"===Y.boundTo))if(bb=Y.value.length,Z=0,1===Y.size)for(fa=0;fa<bb;fa++)Y.array[fa]=Y.value[fa];else if(2===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.r,Y.array[Z+1]=
na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}if(wc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,oc);if(xc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Bb,oc);if(rb)for(ab=0,Gb=rb.length;ab<
Gb;ab++)if(Y=rb[ab],Y.needsUpdate||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,Y.buffer),m.bufferData(m.ARRAY_BUFFER,Y.array,oc)}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;p.attributes&&C(p)}for(var Cb=0,rc=k.length;Cb<rc;Cb++){var dc=k[Cb],nb=dc,yc=nb.object,sc=nb.buffer,tc=yc.geometry,ob=yc.material;ob instanceof THREE.MeshFaceMaterial?(ob=ob.materials[tc instanceof THREE.BufferGeometry?0:sc.materialIndex],ob.transparent?(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb))):ob&&(ob.transparent?
(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb)));dc.render=!0;!0===G.sortObjects&&(null!==b.renderDepth?dc.z=b.renderDepth:(ea.setFromMatrixPosition(b.matrixWorld),ea.applyProjection(Ub),dc.z=ea.z))}}Cb=0;for(rc=b.children.length;Cb<rc;Cb++)s(a,b.children[Cb],h)}}function p(a,b,c){if(0!==a.length)for(var d=0,e=a.length;d<e;d++)la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0,a[d].render(b,c,Hb,Ib),la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0}function v(a,b,c,d,e,f){for(var g,h,k,m=a.length-1;-1!==m;m--){g=
a[m];h=g.object;k=g.buffer;N(h,b);if(f)g=f;else{g=g.material;if(!g)continue;e&&G.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);G.setDepthTest(g.depthTest);G.setDepthWrite(g.depthWrite);J(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits)}G.setMaterialFaces(g);k instanceof THREE.BufferGeometry?G.renderBufferDirect(b,c,d,g,k,h):G.renderBuffer(b,c,d,g,k,h)}}function w(a,b,c,d,e,f,g){for(var h,k,m=0,l=a.length;m<l;m++)if(h=a[m],k=h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;
f&&G.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);G.setDepthTest(h.depthTest);G.setDepthWrite(h.depthWrite);J(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}G.renderImmediateObject(c,d,e,h,k)}}function u(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function D(a,b,d){var e,f=!1;e=b.material;if(void 0===d.geometryGroups||d.groupsNeedUpdate)delete a.__webglObjects[b.id],d.makeGroups(e instanceof THREE.MeshFaceMaterial,
Eb?4294967296:65535),d.groupsNeedUpdate=!1;for(var g=0,h=d.geometryGroupsList.length;g<h;g++){e=d.geometryGroupsList[g];if(e.__webglVertexBuffer)f=!1;else{f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglNormalBuffer=m.createBuffer();f.__webglTangentBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglUVBuffer=m.createBuffer();f.__webglUV2Buffer=m.createBuffer();f.__webglSkinIndicesBuffer=m.createBuffer();f.__webglSkinWeightsBuffer=m.createBuffer();f.__webglFaceBuffer=m.createBuffer();
f.__webglLineBuffer=m.createBuffer();var k=void 0,l=void 0;if(f.numMorphTargets)for(f.__webglMorphTargetsBuffers=[],k=0,l=f.numMorphTargets;k<l;k++)f.__webglMorphTargetsBuffers.push(m.createBuffer());if(f.numMorphNormals)for(f.__webglMorphNormalsBuffers=[],k=0,l=f.numMorphNormals;k<l;k++)f.__webglMorphNormalsBuffers.push(m.createBuffer());G.info.memory.geometries++;c(e,b);d.verticesNeedUpdate=!0;d.morphTargetsNeedUpdate=!0;d.elementsNeedUpdate=!0;d.uvsNeedUpdate=!0;d.normalsNeedUpdate=!0;d.tangentsNeedUpdate=
!0;f=d.colorsNeedUpdate=!0}(f||void 0===b.__webglActive)&&A(a.__webglObjects,e,b)}b.__webglActive=!0}function A(a,b,c){var d=c.id;a[d]=a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function x(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function C(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function I(a,b){if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete b.__webglObjects[a.id];else if(a instanceof
THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var c=b.__webglObjectsImmediate,d=c.length-1;0<=d;d--)c[d].object===a&&c.splice(d,1);delete a.__webglActive}function z(a,b,c,d,e){qa=0;d.needsUpdate&&(d.program&&Nb(d),G.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(G.maxMorphTargets));var f=!1,g=!1,h=!1,k=d.program,l=k.uniforms,n=d.__webglShader.uniforms;k.id!==Ya&&(m.useProgram(k.program),Ya=k.id,
h=g=f=!0);d.id!==Ca&&(-1===Ca&&(h=!0),Ca=d.id,g=!0);if(f||a!==la)m.uniformMatrix4fv(l.projectionMatrix,!1,a.projectionMatrix.elements),Ea&&m.uniform1f(l.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==la&&(la=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==l.cameraPosition&&(ea.setFromMatrixPosition(a.matrixWorld),m.uniform3f(l.cameraPosition,ea.x,ea.y,ea.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof
THREE.ShaderMaterial||d.skinning)&&null!==l.viewMatrix&&m.uniformMatrix4fv(l.viewMatrix,!1,a.matrixWorldInverse.elements);d.skinning&&(e.bindMatrix&&null!==l.bindMatrix&&m.uniformMatrix4fv(l.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==l.bindMatrixInverse&&m.uniformMatrix4fv(l.bindMatrixInverse,!1,e.bindMatrixInverse.elements),Ob&&e.skeleton&&e.skeleton.useVertexTexture?(null!==l.boneTexture&&(f=K(),m.uniform1i(l.boneTexture,f),G.setTexture(e.skeleton.boneTexture,f)),null!==l.boneTextureWidth&&
m.uniform1i(l.boneTextureWidth,e.skeleton.boneTextureWidth),null!==l.boneTextureHeight&&m.uniform1i(l.boneTextureHeight,e.skeleton.boneTextureHeight)):e.skeleton&&e.skeleton.boneMatrices&&null!==l.boneGlobalMatrices&&m.uniformMatrix4fv(l.boneGlobalMatrices,!1,e.skeleton.boneMatrices));if(g){c&&d.fog&&(n.fogColor.value=c.color,c instanceof THREE.Fog?(n.fogNear.value=c.near,n.fogFar.value=c.far):c instanceof THREE.FogExp2&&(n.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof
THREE.MeshLambertMaterial||d.lights){if(fb){var h=!0,p,r=f=0,q=0,s,t,w,u=Jb,v=u.directional.colors,x=u.directional.positions,D=u.point.colors,A=u.point.positions,z=u.point.distances,C=u.spot.colors,I=u.spot.positions,L=u.spot.distances,N=u.spot.directions,J=u.spot.anglesCos,T=u.spot.exponents,H=u.hemi.skyColors,Q=u.hemi.groundColors,O=u.hemi.positions,R=0,X=0,V=0,$=0,za=0,aa=0,ya=0,ca=0,W=p=0;c=w=W=0;for(g=b.length;c<g;c++)p=b[c],p.onlyShadow||(s=p.color,t=p.intensity,w=p.distance,p instanceof THREE.AmbientLight?
p.visible&&(G.gammaInput?(f+=s.r*s.r,r+=s.g*s.g,q+=s.b*s.b):(f+=s.r,r+=s.g,q+=s.b)):p instanceof THREE.DirectionalLight?(za+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),p=3*R,x[p]=da.x,x[p+1]=da.y,x[p+2]=da.z,G.gammaInput?ba(v,p,s,t*t):P(v,p,s,t),R+=1)):p instanceof THREE.PointLight?(aa+=1,p.visible&&(W=3*X,G.gammaInput?ba(D,W,s,t*t):P(D,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),A[W]=ea.x,A[W+1]=ea.y,A[W+2]=ea.z,
z[X]=w,X+=1)):p instanceof THREE.SpotLight?(ya+=1,p.visible&&(W=3*V,G.gammaInput?ba(C,W,s,t*t):P(C,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),I[W]=ea.x,I[W+1]=ea.y,I[W+2]=ea.z,L[V]=w,da.copy(ea),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),N[W]=da.x,N[W+1]=da.y,N[W+2]=da.z,J[V]=Math.cos(p.angle),T[V]=p.exponent,V+=1)):p instanceof THREE.HemisphereLight&&(ca+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),da.normalize(),w=3*$,O[w]=da.x,O[w+1]=da.y,O[w+2]=da.z,
s=p.color,p=p.groundColor,G.gammaInput?(t*=t,ba(H,w,s,t),ba(Q,w,p,t)):(P(H,w,s,t),P(Q,w,p,t)),$+=1)));c=3*R;for(g=Math.max(v.length,3*za);c<g;c++)v[c]=0;c=3*X;for(g=Math.max(D.length,3*aa);c<g;c++)D[c]=0;c=3*V;for(g=Math.max(C.length,3*ya);c<g;c++)C[c]=0;c=3*$;for(g=Math.max(H.length,3*ca);c<g;c++)H[c]=0;c=3*$;for(g=Math.max(Q.length,3*ca);c<g;c++)Q[c]=0;u.directional.length=R;u.point.length=X;u.spot.length=V;u.hemi.length=$;u.ambient[0]=f;u.ambient[1]=r;u.ambient[2]=q;fb=!1}h?(h=Jb,n.ambientLightColor.value=
h.ambient,n.directionalLightColor.value=h.directional.colors,n.directionalLightDirection.value=h.directional.positions,n.pointLightColor.value=h.point.colors,n.pointLightPosition.value=h.point.positions,n.pointLightDistance.value=h.point.distances,n.spotLightColor.value=h.spot.colors,n.spotLightPosition.value=h.spot.positions,n.spotLightDistance.value=h.spot.distances,n.spotLightDirection.value=h.spot.directions,n.spotLightAngleCos.value=h.spot.anglesCos,n.spotLightExponent.value=h.spot.exponents,
n.hemisphereLightSkyColor.value=h.hemi.skyColors,n.hemisphereLightGroundColor.value=h.hemi.groundColors,n.hemisphereLightDirection.value=h.hemi.positions,y(n,!0)):y(n,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){n.opacity.value=d.opacity;G.gammaInput?n.diffuse.value.copyGammaToLinear(d.color):n.diffuse.value=d.color;n.map.value=d.map;n.lightMap.value=d.lightMap;n.specularMap.value=d.specularMap;n.alphaMap.value=d.alphaMap;
d.bumpMap&&(n.bumpMap.value=d.bumpMap,n.bumpScale.value=d.bumpScale);d.normalMap&&(n.normalMap.value=d.normalMap,n.normalScale.value.copy(d.normalScale));var U;d.map?U=d.map:d.specularMap?U=d.specularMap:d.normalMap?U=d.normalMap:d.bumpMap?U=d.bumpMap:d.alphaMap&&(U=d.alphaMap);void 0!==U&&(h=U.offset,U=U.repeat,n.offsetRepeat.value.set(h.x,h.y,U.x,U.y));n.envMap.value=d.envMap;n.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;n.reflectivity.value=d.reflectivity;n.refractionRatio.value=
d.refractionRatio;n.combine.value=d.combine;n.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity,n.dashSize.value=d.dashSize,n.totalSize.value=d.dashSize+d.gapSize,n.scale.value=d.scale):d instanceof THREE.PointCloudMaterial?(n.psColor.value=d.color,n.opacity.value=d.opacity,n.size.value=d.size,
n.scale.value=S.height/2,n.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(n.shininess.value=d.shininess,G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive),n.specular.value.copyGammaToLinear(d.specular)):(n.ambient.value=d.ambient,n.emissive.value=d.emissive,n.specular.value=d.specular),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive)):
(n.ambient.value=d.ambient,n.emissive.value=d.emissive),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(n.mNear.value=a.near,n.mFar.value=a.far,n.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(n.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&n.shadowMatrix)for(U=a=0,h=b.length;U<h;U++)c=b[U],c.castShadow&&(c instanceof THREE.SpotLight||c instanceof THREE.DirectionalLight&&!c.shadowCascade)&&(n.shadowMap.value[a]=c.shadowMap,n.shadowMapSize.value[a]=
c.shadowMapSize,n.shadowMatrix.value[a]=c.shadowMatrix,n.shadowDarkness.value[a]=c.shadowDarkness,n.shadowBias.value[a]=c.shadowBias,a++);b=d.uniformsList;d=0;for(n=b.length;d<n;d++)if(a=b[d][0],!1!==a.needsUpdate)switch(c=a.type,h=a.value,U=b[d][1],c){case "1i":m.uniform1i(U,h);break;case "1f":m.uniform1f(U,h);break;case "2f":m.uniform2f(U,h[0],h[1]);break;case "3f":m.uniform3f(U,h[0],h[1],h[2]);break;case "4f":m.uniform4f(U,h[0],h[1],h[2],h[3]);break;case "1iv":m.uniform1iv(U,h);break;case "3iv":m.uniform3iv(U,
h);break;case "1fv":m.uniform1fv(U,h);break;case "2fv":m.uniform2fv(U,h);break;case "3fv":m.uniform3fv(U,h);break;case "4fv":m.uniform4fv(U,h);break;case "Matrix3fv":m.uniformMatrix3fv(U,!1,h);break;case "Matrix4fv":m.uniformMatrix4fv(U,!1,h);break;case "i":m.uniform1i(U,h);break;case "f":m.uniform1f(U,h);break;case "v2":m.uniform2f(U,h.x,h.y);break;case "v3":m.uniform3f(U,h.x,h.y,h.z);break;case "v4":m.uniform4f(U,h.x,h.y,h.z,h.w);break;case "c":m.uniform3f(U,h.r,h.g,h.b);break;case "iv1":m.uniform1iv(U,
h);break;case "iv":m.uniform3iv(U,h);break;case "fv1":m.uniform1fv(U,h);break;case "fv":m.uniform3fv(U,h);break;case "v2v":void 0===a._array&&(a._array=new Float32Array(2*h.length));c=0;for(g=h.length;c<g;c++)f=2*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y;m.uniform2fv(U,a._array);break;case "v3v":void 0===a._array&&(a._array=new Float32Array(3*h.length));c=0;for(g=h.length;c<g;c++)f=3*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z;m.uniform3fv(U,a._array);break;case "v4v":void 0===
a._array&&(a._array=new Float32Array(4*h.length));c=0;for(g=h.length;c<g;c++)f=4*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z,a._array[f+3]=h[c].w;m.uniform4fv(U,a._array);break;case "m3":m.uniformMatrix3fv(U,!1,h.elements);break;case "m3v":void 0===a._array&&(a._array=new Float32Array(9*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,9*c);m.uniformMatrix3fv(U,!1,a._array);break;case "m4":m.uniformMatrix4fv(U,!1,h.elements);break;case "m4v":void 0===a._array&&
(a._array=new Float32Array(16*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,16*c);m.uniformMatrix4fv(U,!1,a._array);break;case "t":f=h;h=K();m.uniform1i(U,h);if(!f)continue;if(f instanceof THREE.CubeTexture||f.image instanceof Array&&6===f.image.length){if(a=f,U=h,6===a.image.length)if(a.needsUpdate){a.image.__webglTextureCube||(a.addEventListener("dispose",Pb),a.image.__webglTextureCube=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+U);m.bindTexture(m.TEXTURE_CUBE_MAP,
a.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);U=a instanceof THREE.CompressedTexture;h=[];for(c=0;6>c;c++)G.autoScaleCubemaps&&!U?(g=h,f=c,r=a.image[c],u=sc,r.width<=u&&r.height<=u||(v=Math.max(r.width,r.height),q=Math.floor(r.width*u/v),u=Math.floor(r.height*u/v),v=document.createElement("canvas"),v.width=q,v.height=u,v.getContext("2d").drawImage(r,0,0,r.width,r.height,0,0,q,u),r=v),g[f]=r):h[c]=a.image[c];c=h[0];g=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height);
f=B(a.format);r=B(a.type);E(m.TEXTURE_CUBE_MAP,a,g);for(c=0;6>c;c++)if(U)for(u=h[c].mipmaps,v=0,x=u.length;v<x;v++)q=u[v],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,q.data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,f,r,q.data);else m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,f,f,r,h[c]);a.generateMipmaps&&g&&m.generateMipmap(m.TEXTURE_CUBE_MAP);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+
U),m.bindTexture(m.TEXTURE_CUBE_MAP,a.image.__webglTextureCube)}else f instanceof THREE.WebGLRenderTargetCube?(a=f,m.activeTexture(m.TEXTURE0+h),m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture)):G.setTexture(f,h);break;case "tv":void 0===a._array&&(a._array=[]);c=0;for(g=a.value.length;c<g;c++)a._array[c]=K();m.uniform1iv(U,a._array);c=0;for(g=a.value.length;c<g;c++)f=a.value[c],h=a._array[c],f&&G.setTexture(f,h);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+c)}}m.uniformMatrix4fv(l.modelViewMatrix,
!1,e._modelViewMatrix.elements);l.normalMatrix&&m.uniformMatrix3fv(l.normalMatrix,!1,e._normalMatrix.elements);null!==l.modelMatrix&&m.uniformMatrix4fv(l.modelMatrix,!1,e.matrixWorld.elements);return k}function y(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=
b;a.spotLightDirection.needsUpdate=b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function K(){var a=qa;a>=Qb&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Qb);qa+=1;return a}function N(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
function ba(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function P(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function O(a){a!==xa&&(m.lineWidth(a),xa=a)}function J(a,b,c){Qa!==a&&(a?m.enable(m.POLYGON_OFFSET_FILL):m.disable(m.POLYGON_OFFSET_FILL),Qa=a);!a||cb===b&&Ga===c||(m.polygonOffset(b,c),cb=b,Ga=c)}function E(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,B(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,B(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,B(b.magFilter)),m.texParameteri(a,
m.TEXTURE_MIN_FILTER,B(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_MAG_FILTER,R(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,R(b.minFilter)));Ta&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy)&&(m.texParameterf(a,Ta.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Rb)),b.__oldAnisotropy=b.anisotropy)}function Q(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?
(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function L(a){a instanceof THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),
m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function R(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function B(a){if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;if(a===THREE.AlphaFormat)return m.ALPHA;if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;if(void 0!==Sa){if(a===THREE.RGB_S3TC_DXT1_Format)return Sa.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}
console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var S=void 0!==a.canvas?a.canvas:document.createElement("canvas"),V=void 0!==a.context?a.context:null,W=void 0!==a.precision?a.precision:"highp",H=void 0!==a.alpha?a.alpha:!1,oa=void 0!==a.depth?a.depth:!0,$=void 0!==a.stencil?a.stencil:!0,X=void 0!==a.antialias?a.antialias:!1,T=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ya=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Ea=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:
!1,Aa=new THREE.Color(0),za=0,Oa=[],Pa=[];this.domElement=S;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=
!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var G=this,Ba=[],Ya=null,Za=null,Ca=-1,ca=null,la=null,qa=0,ua=-1,ja=-1,Fa=-1,va=-1,Ka=-1,aa=-1,ra=-1,Da=-1,Qa=null,cb=null,Ga=null,xa=null,ma=0,Ja=0,wb=S.width,sb=S.height,Hb=0,Ib=0,pb=new Uint8Array(16),tb=new Uint8Array(16),jc=new THREE.Frustum,Ub=new THREE.Matrix4,kc=new THREE.Matrix4,
ea=new THREE.Vector3,da=new THREE.Vector3,fb=!0,Jb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m,Db,xb,Ta,Sa,Eb;(function(){try{var a={alpha:H,depth:oa,stencil:$,antialias:X,premultipliedAlpha:T,preserveDrawingBuffer:ya};m=V||S.getContext("webgl",a)||S.getContext("experimental-webgl",
a);if(null===m)throw"Error creating WebGL context.";}catch(b){console.error(b)}Db=m.getExtension("OES_texture_float");m.getExtension("OES_texture_float_linear");xb=m.getExtension("OES_standard_derivatives");Ta=m.getExtension("EXT_texture_filter_anisotropic")||m.getExtension("MOZ_EXT_texture_filter_anisotropic")||m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");Sa=m.getExtension("WEBGL_compressed_texture_s3tc")||m.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
Eb=m.getExtension("OES_element_index_uint");null===Db&&console.log("THREE.WebGLRenderer: Float textures not supported.");null===xb&&console.log("THREE.WebGLRenderer: Standard derivatives not supported.");null===Ta&&console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");null===Sa&&console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");null===Eb&&console.log("THREE.WebGLRenderer: elementindex as unsigned integer not supported.");void 0===m.getShaderPrecisionFormat&&
(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});Ea&&m.getExtension("EXT_frag_depth")})();m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ma,Ja,wb,sb);m.clearColor(Aa.r,Aa.g,Aa.b,za);this.context=m;var Qb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),tc=
m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS);m.getParameter(m.MAX_TEXTURE_SIZE);var sc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Rb=Ta?m.getParameter(Ta.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Sb=0<tc,Ob=Sb&&Db;Sa&&m.getParameter(m.COMPRESSED_TEXTURE_FORMATS);var zc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),Ac=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.LOW_FLOAT);var Bc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),
Cc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_FLOAT);var Dc=0<zc.precision&&0<Bc.precision,ec=0<Ac.precision&&0<Cc.precision;"highp"!==W||Dc||(ec?(W="mediump",console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(W="lowp",console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));"mediump"!==W||ec||(W="lowp",console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));this.getContext=
function(){return m};this.supportsVertexTextures=function(){return Sb};this.supportsFloatTextures=function(){return Db};this.supportsStandardDerivatives=function(){return xb};this.supportsCompressedTextureS3TC=function(){return Sa};this.getMaxAnisotropy=function(){return Rb};this.getPrecision=function(){return W};this.setSize=function(a,b,c){S.width=a*this.devicePixelRatio;S.height=b*this.devicePixelRatio;!1!==c&&(S.style.width=a+"px",S.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=
function(a,b,c,d){ma=a*this.devicePixelRatio;Ja=b*this.devicePixelRatio;wb=c*this.devicePixelRatio;sb=d*this.devicePixelRatio;m.viewport(ma,Ja,wb,sb)};this.setScissor=function(a,b,c,d){m.scissor(a*this.devicePixelRatio,b*this.devicePixelRatio,c*this.devicePixelRatio,d*this.devicePixelRatio)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.setClearColor=function(a,b){Aa.set(a);za=void 0!==b?b:1;m.clearColor(Aa.r,Aa.g,Aa.b,za)};this.setClearColorHex=function(a,
b){console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return Aa};this.getClearAlpha=function(){return za};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=
function(){m.clear(m.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){Ya=null;Ca=ca=Da=ra=Fa=-1;fb=!0;ja=ua=-1;fc(a);this.shadowMapPlugin.update(a,b)};var gc=function(a){a=a.target;a.removeEventListener("dispose",gc);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){a=
a.attributes;for(var b in a)void 0!==a[b].buffer&&m.deleteBuffer(a[b].buffer);G.info.memory.geometries--}else if(void 0!==a.geometryGroups){b=0;for(var c=a.geometryGroupsList.length;b<c;b++){var d=a.geometryGroupsList[b];if(void 0!==d.numMorphTargets)for(var e=0,f=d.numMorphTargets;e<f;e++)m.deleteBuffer(d.__webglMorphTargetsBuffers[e]);if(void 0!==d.numMorphNormals)for(e=0,f=d.numMorphNormals;e<f;e++)m.deleteBuffer(d.__webglMorphNormalsBuffers[e]);Tb(d)}}else Tb(a)},Pb=function(a){a=a.target;a.removeEventListener("dispose",
Pb);a.image&&a.image.__webglTextureCube?m.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,m.deleteTexture(a.__webglTexture));G.info.memory.textures--},hc=function(a){a=a.target;a.removeEventListener("dispose",hc);if(a&&a.__webglTexture)if(m.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);
G.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);Nb(a)},Tb=function(a){void 0!==a.__webglVertexBuffer&&m.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&m.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&m.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&m.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&m.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&m.deleteBuffer(a.__webglUV2Buffer);
void 0!==a.__webglSkinIndicesBuffer&&m.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&m.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&m.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&m.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&m.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[b].buffer);
G.info.memory.geometries--},Nb=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Ba.length;a<c;a++)if(d=Ba[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Ba.length;a<c;a++)d=Ba[a],d.program!==b&&e.push(d);Ba=e;m.deleteProgram(b);G.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){k();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&
(a.__webglNormalBuffer=m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),l(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,
e,f,g,h,p,r,q,s,t,u,w=3*a.count;for(u=0;u<w;u+=9)t=a.normalArray,d=t[u],e=t[u+1],f=t[u+2],g=t[u+3],p=t[u+4],q=t[u+5],h=t[u+6],r=t[u+7],s=t[u+8],d=(d+g+h)/3,e=(e+p+r)/3,f=(f+q+s)/3,t[u]=d,t[u+1]=e,t[u+2]=f,t[u+3]=d,t[u+4]=e,t[u+5]=f,t[u+6]=d,t[u+7]=e,t[u+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);l(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),m.bufferData(m.ARRAY_BUFFER,a.uvArray,
m.DYNAMIC_DRAW),l(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),l(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));n();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var g=z(a,b,c,d,f);a=g.attributes;b=e.attributes;c=!1;g=16777215*
e.id+2*g.id+(d.wireframe?1:0);g!==ca&&(ca=g,c=!0);c&&k();if(f instanceof THREE.Mesh)if(g=b.index){var l,n;g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2);e=e.offsets;if(0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(m.TRIANGLES,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length,G.info.render.faces+=g.array.length/3;else{c=!0;for(var p=0,r=e.length;p<r;p++){var q=e[p].index;c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
g.buffer));m.drawElements(m.TRIANGLES,e[p].count,l,e[p].start*n);G.info.render.calls++;G.info.render.vertices+=e[p].count;G.info.render.faces+=e[p].count/3}}}else c&&h(d,a,b,0),d=e.attributes.position,m.drawArrays(m.TRIANGLES,0,d.array.length/3),G.info.render.calls++,G.info.render.vertices+=d.array.length/3,G.info.render.faces+=d.array.length/9;else if(f instanceof THREE.PointCloud)c&&h(d,a,b,0),d=b.position,m.drawArrays(m.POINTS,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/
3;else if(f instanceof THREE.Line)if(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,O(d.linewidth),g=b.index)if(g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2),e=e.offsets,0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(f,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length;else for(1<e.length&&(c=!0),p=0,r=e.length;p<r;p++)q=e[p].index,c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),
m.drawElements(f,e[p].count,l,e[p].start*n),G.info.render.calls++,G.info.render.vertices+=e[p].count;else c&&h(d,a,b,0),d=b.position,m.drawArrays(f,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/3}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,h;c=z(a,b,c,d,f);b=c.attributes;a=!1;c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ca&&(ca=c,a=!0);a&&k();if(!d.morphTargets&&0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(b.position),
m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var p=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;p<
d.numSupportedMorphTargets&&p<h.length;)0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[h[p]]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[p]]),l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[h[p]],p++}else{h=[];g=f.morphTargetInfluences;var r,q=g.length;for(r=
0;r<q;r++)p=g[r],0<p&&h.push([p,r]);h.length>d.numSupportedMorphTargets?(h.sort(t),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(t):0===h.length&&h.push([0,0]);for(p=0;p<d.numSupportedMorphTargets;)h[p]?(r=h[p][1],0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[r]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[r]),
l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[r]):f.__webglMorphTargetInfluences[p]=0,p++}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(g=0,h=e.__webglCustomAttributesList.length;g<h;g++)c=e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,c.buffer),l(b[c.buffer.belongsToAttribute]),
m.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),l(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),l(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,
e.__webglTangentBuffer),l(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),l(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),l(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,
d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),l(b.skinIndex),m.vertexAttribPointer(b.skinIndex,4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),l(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),l(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}n();f instanceof THREE.Mesh?
(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(O(d.wireframeLinewidth),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),G.info.render.calls++,G.info.render.vertices+=e.__webglFaceCount,G.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,
O(d.linewidth),m.drawArrays(f,0,e.__webglLineCount),G.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,0,e.__webglParticleCount),G.info.render.calls++,G.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){function e(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update();for(var b=0,c=a.children.length;b<c;b++)e(a.children[b])}if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var f,
g,h,k,m=a.__lights,l=a.fog;Ca=-1;la=null;fb=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();e(a);b.matrixWorldInverse.getInverse(b.matrixWorld);Ub.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);jc.setFromMatrix(Ub);fc(a);Oa.length=0;Pa.length=0;s(a,a,b);!0===G.sortObjects&&(Oa.sort(q),Pa.sort(r));p(this.renderPluginsPre,a,b);G.info.render.calls=0;G.info.render.vertices=0;G.info.render.faces=0;G.info.render.points=0;this.setRenderTarget(c);(this.autoClear||
d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);k=a.__webglObjectsImmediate;d=0;for(f=k.length;d<f;d++)g=k[d],h=g.object,h.visible&&(N(h,b),u(g));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),J(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),v(Oa,b,m,l,!0,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"",b,m,l,!1,d)):(d=null,this.setBlending(THREE.NoBlending),
v(Oa,b,m,l,!1,d),w(a.__webglObjectsImmediate,"opaque",b,m,l,!1,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"transparent",b,m,l,!0,d));p(this.renderPluginsPost,a,b);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&L(c);this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=z(a,b,c,d,e);ca=-1;G.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,m,jc):e.render(function(a){G.renderBufferImmediate(a,
f,d)})};var fc=function(a){a.__webglObjects||(a.__webglObjects={},a.__webglObjectsImmediate=[]);for(;a.__objectsAdded.length;){var c=a.__objectsAdded[0],d=a,e=void 0,f=void 0;void 0===c.__webglInit&&(c.__webglInit=!0,c._modelViewMatrix=new THREE.Matrix4,c._normalMatrix=new THREE.Matrix3);e=c.geometry;if(void 0!==e&&void 0===e.__webglInit)if(e.__webglInit=!0,e.addEventListener("dispose",gc),e instanceof THREE.BufferGeometry)g(e);else if(c instanceof THREE.Mesh)void 0!==c.__webglActive&&I(c,d),D(d,
c,e);else if(c instanceof THREE.Line){if(!e.__webglVertexBuffer){f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglLineDistanceBuffer=m.createBuffer();G.info.memory.geometries++;var f=e,h=c,k=f.vertices.length;f.__vertexArray=new Float32Array(3*k);f.__colorArray=new Float32Array(3*k);f.__lineDistanceArray=new Float32Array(1*k);f.__webglLineCount=k;b(f,h);e.verticesNeedUpdate=!0;e.colorsNeedUpdate=!0;e.lineDistancesNeedUpdate=!0}}else c instanceof THREE.PointCloud&&
!e.__webglVertexBuffer&&(f=e,f.__webglVertexBuffer=m.createBuffer(),f.__webglColorBuffer=m.createBuffer(),G.info.memory.geometries++,f=e,h=c,k=f.vertices.length,f.__vertexArray=new Float32Array(3*k),f.__colorArray=new Float32Array(3*k),f.__sortArray=[],f.__webglParticleCount=k,b(f,h),e.verticesNeedUpdate=!0,e.colorsNeedUpdate=!0);if(void 0===c.__webglActive){if(c instanceof THREE.Mesh)if(e=c.geometry,e instanceof THREE.BufferGeometry)A(d.__webglObjects,e,c);else{if(e instanceof THREE.Geometry)for(h=
0,k=e.geometryGroupsList.length;h<k;h++)f=e.geometryGroupsList[h],A(d.__webglObjects,f,c)}else c instanceof THREE.Line||c instanceof THREE.PointCloud?(e=c.geometry,A(d.__webglObjects,e,c)):(c instanceof THREE.ImmediateRenderObject||c.immediateRenderCallback)&&d.__webglObjectsImmediate.push({id:null,object:c,opaque:null,transparent:null,z:0});c.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;)I(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1)};this.initMaterial=
function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",ic);var k,l,n,p;a instanceof THREE.MeshDepthMaterial?p="depth":a instanceof THREE.MeshNormalMaterial?p="normal":a instanceof THREE.MeshBasicMaterial?p="basic":a instanceof THREE.MeshLambertMaterial?p="lambert":a instanceof THREE.MeshPhongMaterial?p="phong":a instanceof THREE.LineBasicMaterial?p="basic":a instanceof THREE.LineDashedMaterial?p="dashed":a instanceof THREE.PointCloudMaterial&&(p="particle_basic");p?(e=THREE.ShaderLib[p],a.__webglShader=
{uniforms:THREE.UniformsUtils.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}):a.__webglShader={uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};n=h=g=f=e=0;for(var r=b.length;n<r;n++){var q=b[n];q.onlyShadow||!1===q.visible||(q instanceof THREE.DirectionalLight&&e++,q instanceof THREE.PointLight&&f++,q instanceof THREE.SpotLight&&g++,q instanceof THREE.HemisphereLight&&h++)}r=n=0;for(q=b.length;r<q;r++){var s=b[r];s.castShadow&&(s instanceof
THREE.SpotLight&&n++,s instanceof THREE.DirectionalLight&&!s.shadowCascade&&n++)}b=n;Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture?n=1024:(n=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),n=Math.floor((n-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(n=Math.min(d.skeleton.bones.length,n),n<d.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.skeleton.bones.length+", this GPU supports just "+n+" (try OpenGL instead of ANGLE)")));c={precision:W,supportsVertexTextures:Sb,map:!!a.map,
envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,alphaMap:!!a.alphaMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,logarithmicDepthBuffer:Ea,skinning:a.skinning,maxBones:n,useVertexTexture:Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,
maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:b,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow&&0<b,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide};d=[];p?d.push(p):(d.push(a.fragmentShader),d.push(a.vertexShader));for(var t in a.defines)d.push(t),d.push(a.defines[t]);for(l in c)d.push(l),
d.push(c[l]);p=d.join();var u;l=0;for(t=Ba.length;l<t;l++)if(d=Ba[l],d.code===p){u=d;u.usedTimes++;break}void 0===u&&(u=new THREE.WebGLProgram(this,p,a,c),Ba.push(u),G.info.memory.programs=Ba.length);a.program=u;u=a.program.attributes;if(a.morphTargets)for(a.numSupportedMorphTargets=0,t="morphTarget",l=0;l<this.maxMorphTargets;l++)p=t+l,0<=u[p]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(a.numSupportedMorphNormals=0,t="morphNormal",l=0;l<this.maxMorphNormals;l++)p=t+l,0<=u[p]&&a.numSupportedMorphNormals++;
a.uniformsList=[];for(k in a.__webglShader.uniforms)(l=a.program.uniforms[k])&&a.uniformsList.push([a.__webglShader.uniforms[k],l])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide;a=a.side===THREE.BackSide;
ua!==b&&(b?m.disable(m.CULL_FACE):m.enable(m.CULL_FACE),ua=b);ja!==a&&(a?m.frontFace(m.CW):m.frontFace(m.CCW),ja=a)};this.setDepthTest=function(a){ra!==a&&(a?m.enable(m.DEPTH_TEST):m.disable(m.DEPTH_TEST),ra=a)};this.setDepthWrite=function(a){Da!==a&&(m.depthMask(a),Da=a)};this.setBlending=function(a,b,c,d){a!==Fa&&(a===THREE.NoBlending?m.disable(m.BLEND):a===THREE.AdditiveBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.SRC_ALPHA,m.ONE)):a===THREE.SubtractiveBlending?(m.enable(m.BLEND),
m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.SRC_COLOR)):a===THREE.CustomBlending?m.enable(m.BLEND):(m.enable(m.BLEND),m.blendEquationSeparate(m.FUNC_ADD,m.FUNC_ADD),m.blendFuncSeparate(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA)),Fa=a);if(a===THREE.CustomBlending){if(b!==va&&(m.blendEquation(B(b)),va=b),c!==Ka||d!==aa)m.blendFunc(B(c),B(d)),Ka=c,aa=d}else aa=
Ka=va=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+b);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height),
e=B(a.format),f=B(a.type);E(m.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture)for(h=0,k=g.length;h<k;h++)c=g[h],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,c.data):m.texImage2D(m.TEXTURE_2D,h,
e,c.width,c.height,0,e,f,c.data);else if(0<g.length&&d){h=0;for(k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+b),m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&
(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",hc);a.__webglTexture=m.createTexture();G.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=B(a.format),e=B(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);E(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);Q(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),
E(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):
Q(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=wb,a=sb,d=ma,e=Ja);b!==Za&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),Za=b);Hb=c;Ib=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,n=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var r="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?r="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(r="SHADOWMAP_TYPE_PCF_SOFT");var t,s;t=[];for(var p in g)s=g[p],!1!==s&&(s="#define "+p+" "+s,t.push(s));
t=t.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",t,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+
e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":
"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap?"#extension GL_OES_standard_derivatives : enable":"",t,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"",e.useFog&&e.fog?"#define USE_FOG":
"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.metal?"#define METAL":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":
"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);n=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,b+n);f.attachShader(g,l);f.attachShader(g,n);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&(console.error("THREE.WebGLProgram: Could not initialise shader."),
console.error("gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS)),console.error("gl.getError()",f.getError()));""!==f.getProgramInfoLog(g)&&console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f.getProgramInfoLog(g));f.deleteShader(l);f.deleteShader(n);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):
q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var v in h)q.push(v);h=q;v={};q=0;for(b=h.length;q<b;q++)r=h[q],v[r]=f.getUniformLocation(g,r);this.uniforms=v;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var w in k)q.push(w);e=q;k={};w=0;for(h=e.length;w<h;w++)v=e[w],k[v]=f.getAttribLocation(g,v);this.attributes=
k;this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=n;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&(console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c)),console.warn(a(d)));return c}}();
THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.normalModel=new THREE.Vector3;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.color=new THREE.Color;this.material=null;this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2];this.z=0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};
THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))})};d=0;for(var h=a.length;d<h;++d)b(d);return f},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,n=0;n<d;n++)for(var q=0;q<e;q++){var r=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,s=0>n-1?0:n-1,p=n+1>d-1?d-1:n+1,v=[],w=[0,0,h[4*(q*d+n)]/255*b];v.push([-1,0,h[4*(q*d+s)]/255*b]);v.push([-1,-1,h[4*(r*d+s)]/255*b]);v.push([0,-1,h[4*(r*d+n)]/255*b]);v.push([1,-1,h[4*(r*d+p)]/255*b]);v.push([1,0,h[4*(q*d+p)]/255*b]);v.push([1,1,h[4*(t*d+p)]/255*b]);v.push([0,1,h[4*(t*d+n)]/255*
b]);v.push([-1,1,h[4*(t*d+s)]/255*b]);r=[];s=v.length;for(t=0;t<s;t++){var p=v[t],u=v[(t+1)%s],p=[p[0]-w[0],p[1]-w[1],p[2]-w[2]],u=[u[0]-w[0],u[1]-w[1],u[2]-w[2]];r.push(c([p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]]))}v=[0,0,0];for(t=0;t<r.length;t++)v[0]+=r[t][0],v[1]+=r[t][1],v[2]+=r[t][2];v[0]/=r.length;v[1]/=r.length;v[2]/=r.length;w=4*(q*d+n);l[w]=(v[0]+1)/2*255|0;l[w+1]=(v[1]+1)/2*255|0;l[w+2]=255*v[2]|0;l[w+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,n,q,r,t,s,p,v,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);
break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*c+d;n=b[a++]*c;t=b[a++]*c+d;s=b[a++]*c;e.quadraticCurveTo(t,s,k,n);if(g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++){var u=g/h;THREE.Shape.Utils.b2(u,q,t,k);THREE.Shape.Utils.b2(u,r,s,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,t=b[a++]*c+d,s=b[a++]*c,p=b[a++]*c+d,v=b[a++]*c,e.bezierCurveTo(t,s,p,v,k,n),g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++)u=g/h,THREE.Shape.Utils.b3(u,q,t,p,k),THREE.Shape.Utils.b3(u,
r,s,v,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){console.log("Warning, unable to triangulate polygon!");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var r;a:{var t=r=void 0,s=void 0,p=void 0,v=void 0,w=void 0,u=void 0,D=void 0,A=
void 0,t=a[g[k]].x,s=a[g[k]].y,p=a[g[l]].x,v=a[g[l]].y,w=a[g[n]].x,u=a[g[n]].y;if(1E-10>(p-t)*(u-s)-(v-s)*(w-t))r=!1;else{var x=void 0,C=void 0,I=void 0,z=void 0,y=void 0,K=void 0,N=void 0,ba=void 0,P=void 0,O=void 0,P=ba=N=A=D=void 0,x=w-p,C=u-v,I=t-w,z=s-u,y=p-t,K=v-s;for(r=0;r<e;r++)if(D=a[g[r]].x,A=a[g[r]].y,!(D===t&&A===s||D===p&&A===v||D===w&&A===u)&&(N=D-t,ba=A-s,P=D-p,O=A-v,D-=w,A-=u,P=x*O-C*P,N=y*ba-K*N,ba=I*A-z*D,-1E-10<=P&&-1E-10<=ba&&-1E-10<=N)){r=!1;break a}r=!0}}if(r){f.push([a[g[k]],
a[g[l]],a[g[n]]]);h.push([g[k],g[l],g[n]]);k=l;for(n=l+1;n<e;k++,n++)g[k]=g[n];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};
THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};
THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};
THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=0.5*(c-a);d=0.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,n,q=a[0]instanceof THREE.Vector3;n=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),n.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;
THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,n,q,r,t,s,p;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];r=f[1];0<c.length?(g=c[c.length-1],t=g.x,
s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b2(p,t,q,h),p=THREE.Shape.Utils.b2(p,s,r,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];r=f[1];l=f[2];n=f[3];0<c.length?(g=c[c.length-1],t=g.x,s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b3(p,t,q,l,h),p=THREE.Shape.Utils.b3(p,s,r,n,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;p=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;p=p.concat(f[0]);p=new THREE.SplineCurve(p);for(f=1;f<=g;f++)c.push(p.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];r=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;s=2*a;for(f=1;f<=s;f++)p=f/s,q||(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+r*Math.sin(p),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],r=f[2],n=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,s=2*a,f=1;f<=s;f++)p=f/s,q||
(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+n*Math.sin(p),c.push(new THREE.Vector2(g,p))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
h=[];var n=[],q=[],r=0,t;n[r]=void 0;q[r]=[];var s,p;s=0;for(p=e.length;s<p;s++)g=e[s],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&n[r]&&r++,n[r]={s:new THREE.Shape,p:t},n[r].s.actions=g.actions,n[r].s.curves=g.curves,l&&r++,q[r]=[]):q[r].push({h:g,p:t[0]});if(!n[0])return c(e);if(1<n.length){s=!1;p=[];g=0;for(e=n.length;g<e;g++)h[g]=[];g=0;for(e=n.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){r=f[l];t=!0;for(var v=0;v<n.length;v++)d(r.p,n[v].p)&&(g!=v&&p.push({froms:g,tos:v,
hole:l}),t?(t=!1,h[v].push(r)):s=!0);t&&h[g].push(r)}0<p.length&&(s||(q=h))}s=0;for(p=n.length;s<p;s++)for(h=n[s].s,k.push(h),g=q[s],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};
THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};
THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,q=a.y-d.y,I=h*k-g*l,z=h*n-g*q;if(1E-10<Math.abs(I)){if(0<I){if(0>z||z>I)return[];k=l*n-k*q;if(0>k||k>I)return[]}else{if(0<z||z<I)return[];k=l*n-k*q;if(0<k||k<I)return[]}if(0==k)return!f||0!=z&&z!=I?[a]:[];if(k==I)return!f||0!=z&&z!=I?[b]:[];if(0==z)return[d];
if(z==I)return[e];f=k/I;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=z||l*n!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,I=d.x,l=e,d=e.x):(b=e,I=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,I=d.y,l=e,d=e.y):(b=e,I=e.y,l=d,d=d.y));return k<=I?a<I?[]:a==I?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,n={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==n[l]&&console.log("Duplicate point",l),n[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;
d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,q,C,I,z,y=[],K,N,ba,P=0;for(n=b.length;P<n;P++)l.push(P);K=0;for(var O=2*l.length;0<l.length;){O--;if(0>O){console.log("Infinite Loop! Holes left:"+
l.length+", Probably Hole outside Shape!");break}for(q=K;q<h.length;q++){C=h[q];n=-1;for(P=0;P<l.length;P++)if(I=l[P],z=C.x+":"+C.y+":"+I,void 0===y[z]){k=b[I];for(N=0;N<k.length;N++)if(I=k[N],c(q,N)&&!f(C,I)&&!g(C,I)){n=N;l.splice(P,1);K=h.slice(0,q+1);I=h.slice(q);N=k.slice(n);ba=k.slice(0,n+1);h=K.concat(N).concat(ba).concat(I);K=q;break}if(0<=n)break;y[z]=!0}if(0<=n)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,
l=n[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,
b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;a*=d.length-1;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0!==a.initialized){for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a}},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].update(a)}};
THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};THREE.Animation.prototype.keyTypes=["pos","rot","scl"];THREE.Animation.prototype.play=function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)};
THREE.Animation.prototype.stop=function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)};
THREE.Animation.prototype.reset=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];c.matrixAutoUpdate=!0;void 0===c.animationCache&&(c.animationCache={});void 0===c.animationCache[this.data.name]&&(c.animationCache[this.data.name]={},c.animationCache[this.data.name].prevKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].nextKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].originalMatrix=c.matrix);for(var c=c.animationCache[this.data.name],d=0;3>d;d++){for(var e=
this.keyTypes[d],f=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(e,a,1);g.time<this.currentTime&&g.index>f.index;)f=g,g=this.getNextKeyWith(e,a,g.index+1);c.prevKey[e]=f;c.nextKey[e]=g}}};
THREE.Animation.prototype.update=function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,r,t,s,p;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];s=a[c[2]];p=a[c[3]];c=e*e;r=e*c;d[0]=f(q[0],t[0],s[0],p[0],e,c,r);d[1]=f(q[1],t[1],s[1],p[1],e,c,r);d[2]=f(q[2],t[2],s[2],p[2],e,c,r);return d},f=function(a,b,c,d,e,f,r){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*
r+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(!0===this.loop&&this.currentTime>f)this.currentTime%=f,this.reset();else if(!1===this.loop&&this.currentTime>f){this.stop();return}f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache[this.data.name],n=0;3>n;n++){var q=this.keyTypes[n],r=l.prevKey[q],t=l.nextKey[q];if(t.time<=this.currentTime){r=this.data.hierarchy[f].keys[0];
for(t=this.getNextKeyWith(q,f,1);t.time<this.currentTime&&t.index>r.index;)r=t,t=this.getNextKeyWith(q,f,t.index+1);l.prevKey[q]=r;l.nextKey[q]=t}k.matrixAutoUpdate=!0;k.matrixWorldNeedsUpdate=!0;var s=(this.currentTime-r.time)/(t.time-r.time),p=r[q],v=t[q];0>s&&(s=0);1<s&&(s=1);if("pos"===q)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedPosWeight),k.position.lerp(c,
r),k.accumulatedPosWeight+=this.weight):k.position.copy(c);else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,r.index-1).pos,a[1]=p,a[2]=v,a[3]=this.getNextKeyWith("pos",f,t.index+1).pos,s=0.33*s+0.33,t=e(a,s),r=1,k instanceof THREE.Bone&&(r=this.weight/(this.weight+k.accumulatedPosWeight),k.accumulatedPosWeight+=this.weight),q=k.position,q.x+=(t[0]-q.x)*r,q.y+=(t[1]-q.y)*r,q.z+=(t[2]-
q.z)*r,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(q),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===q?(THREE.Quaternion.slerp(p,v,d,s),k instanceof THREE.Bone?0===k.accumulatedRotWeight?(k.quaternion.copy(d),k.accumulatedRotWeight=this.weight):(r=this.weight/(this.weight+k.accumulatedRotWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,r),k.accumulatedRotWeight+=this.weight):k.quaternion.copy(d)):
"scl"===q&&(c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedSclWeight),k.scale.lerp(c,r),k.accumulatedSclWeight+=this.weight):k.scale.copy(c))}return!0}}}();
THREE.Animation.prototype.getNextKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=c[1],this.startTime=Math.min(c[0].time,
this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)};THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=
f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(){var a=0,b=0;return function(c){if(!1!==this.isPlaying){this.currentTime+=c;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);c=this.duration/this.frames;var d=Math.floor(this.currentTime/c);d!=b&&(this.mesh.morphTargetInfluences[a]=0,this.mesh.morphTargetInfluences[b]=1,this.mesh.morphTargetInfluences[d]=
0,a=b,b=d);this.mesh.morphTargetInfluences[d]=this.currentTime%c/c;this.mesh.morphTargetInfluences[a]=1-this.mesh.morphTargetInfluences[d]}}}()};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,p){var v,w=h.widthSegments,u=h.heightSegments,D=e/2,A=f/2,x=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)v="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)v="y",u=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)v="x",w=h.depthSegments;var C=w+1,I=u+1,z=e/w,y=f/u,K=new THREE.Vector3;K[v]=0<g?1:-1;for(e=0;e<I;e++)for(f=0;f<C;f++){var N=new THREE.Vector3;N[a]=(f*z-D)*c;N[b]=(e*y-A)*d;N[v]=g;h.vertices.push(N)}for(e=
0;e<u;e++)for(f=0;f<w;f++)A=f+C*e,a=f+C*(e+1),b=f+1+C*(e+1),c=f+1+C*e,d=new THREE.Vector2(f/w,1-e/u),g=new THREE.Vector2(f/w,1-(e+1)/u),v=new THREE.Vector2((f+1)/w,1-(e+1)/u),D=new THREE.Vector2((f+1)/w,1-e/u),A=new THREE.Face3(A+x,a+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),h.faceVertexUvs[0].push([d,g,D]),A=new THREE.Face3(a+x,b+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),
h.faceVertexUvs[0].push([g.clone(),v,D.clone()])}THREE.Geometry.call(this);this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=
b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){console.warn("THEE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;var g=c/2,h,k,l=[],n=[];for(k=0;k<=e;k++){var q=[],r=[],t=k/e,s=t*(b-a)+a;for(h=0;h<=d;h++){var p=h/d,v=new THREE.Vector3;v.x=s*Math.sin(p*Math.PI*2);v.y=-t*c+g;v.z=s*Math.cos(p*Math.PI*2);this.vertices.push(v);q.push(this.vertices.length-1);r.push(new THREE.Vector2(p,
1-t))}l.push(q);n.push(r)}c=(b-a)/c;for(h=0;h<d;h++)for(0!==a?(q=this.vertices[l[0][h]].clone(),r=this.vertices[l[0][h+1]].clone()):(q=this.vertices[l[1][h]].clone(),r=this.vertices[l[1][h+1]].clone()),q.setY(Math.sqrt(q.x*q.x+q.z*q.z)*c).normalize(),r.setY(Math.sqrt(r.x*r.x+r.z*r.z)*c).normalize(),k=0;k<e;k++){var t=l[k][h],s=l[k+1][h],p=l[k+1][h+1],v=l[k][h+1],w=q.clone(),u=q.clone(),D=r.clone(),A=r.clone(),x=n[k][h].clone(),C=n[k+1][h].clone(),I=n[k+1][h+1].clone(),z=n[k][h+1].clone();this.faces.push(new THREE.Face3(t,
s,v,[w,u,A]));this.faceVertexUvs[0].push([x,C,z]);this.faces.push(new THREE.Face3(s,p,v,[u.clone(),D,A.clone()]));this.faceVertexUvs[0].push([C.clone(),I,z.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,g,0)),h=0;h<d;h++)t=l[0][h],s=l[0][h+1],p=this.vertices.length-1,w=new THREE.Vector3(0,1,0),u=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,1,0),x=n[0][h].clone(),C=n[0][h+1].clone(),I=new THREE.Vector2(C.x,0),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,
C,I]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-g,0)),h=0;h<d;h++)t=l[k][h+1],s=l[k][h],p=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),u=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),x=n[k][h+1].clone(),C=n[k][h].clone(),I=new THREE.Vector2(C.x,1),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,C,I]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.Math.sign,e=1,e=a.x-b.x,f=a.y-b.y,g=c.x-a.x,h=c.y-a.y,k=e*e+f*f;if(1E-10<Math.abs(e*h-f*g)){var l=Math.sqrt(k),d=Math.sqrt(g*g+h*h),k=b.x-f/l;b=b.y+e/l;g=((c.x-h/d-k)*h-(c.y+g/d-b)*g)/(e*h-f*g);c=k+e*g-a.x;a=b+f*g-a.y;e=c*c+a*a;if(2>=e)return new THREE.Vector2(c,a);e=Math.sqrt(e/2)}else a=!1,1E-10<e?1E-10<g&&(a=!0):-1E-10>e?-1E-10>g&&
(a=!0):d(f)==d(h)&&(a=!0),a?(c=-f,a=e,e=Math.sqrt(k)):(c=e,a=f,e=Math.sqrt(k/2));return new THREE.Vector2(c/e,a/e)}function e(c,d){var e,f;for(H=c.length;0<=--H;){e=H;f=H-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*n,g=0;g<h;g++){var k=S*g,l=S*(g+1),p=d+e+k,k=d+f+k,q=d+f+l,l=d+e+l,r=c,s=g,v=h,w=e,x=f,p=p+ba,k=k+ba,q=q+ba,l=l+ba;N.faces.push(new THREE.Face3(p,k,l,null,null,u));N.faces.push(new THREE.Face3(k,q,l,null,null,u));p=D.generateSideWallUV(N,a,r,b,p,k,q,l,s,v,w,x);N.faceVertexUvs[0].push([p[0],
p[1],p[3]]);N.faceVertexUvs[0].push([p[1],p[2],p[3]])}}}function f(a,b,c){N.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=ba;d+=ba;e+=ba;N.faces.push(new THREE.Face3(c,d,e,null,null,w));c=f?D.generateBottomUV(N,a,b,c,d,e):D.generateTopUV(N,a,b,c,d,e);N.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:
!0,r=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,s=b.extrudePath,p,v=!1,w=b.material,u=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,A,x,C,I;s&&(p=s.getSpacedPoints(t),v=!0,q=!1,A=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,t,!1),x=new THREE.Vector3,C=new THREE.Vector3,I=new THREE.Vector3);q||(l=k=n=0);var z,y,K,N=this,ba=this.vertices.length,s=a.extractPoints(r),r=s.shape,P=s.holes;if(s=!THREE.Shape.Utils.isClockWise(r)){r=
r.reverse();y=0;for(K=P.length;y<K;y++)z=P[y],THREE.Shape.Utils.isClockWise(z)&&(P[y]=z.reverse());s=!1}var O=THREE.Shape.Utils.triangulateShape(r,P),J=r;y=0;for(K=P.length;y<K;y++)z=P[y],r=r.concat(z);var E,Q,L,R,B,S=r.length,V,W=O.length,s=[],H=0;L=J.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),s[H]=d(J[H],J[E],J[Q]);var oa=[],$,X=s.concat();y=0;for(K=P.length;y<K;y++){z=P[y];$=[];H=0;L=z.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),$[H]=d(z[H],z[E],z[Q]);
oa.push($);X=X.concat($)}for(E=0;E<n;E++){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,-R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),f(B.x,B.y,-R)}Q=l;for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[0]).multiplyScalar(B.x),x.copy(A.binormals[0]).multiplyScalar(B.y),I.copy(p[0]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,0);for(L=1;L<=t;L++)for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[L]).multiplyScalar(B.x),
x.copy(A.binormals[L]).multiplyScalar(B.y),I.copy(p[L]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,h/t*L);for(E=n-1;0<=E;E--){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,h+R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),v?f(B.x,B.y+p[t-1].y,p[t-1].x+R):f(B.x,B.y,h+R)}(function(){if(q){var a;a=0*S;for(H=0;H<W;H++)V=O[H],g(V[2]+a,V[1]+a,V[0]+a,!0);a=t+2*n;a*=S;for(H=0;H<W;H++)V=O[H],g(V[0]+a,V[1]+a,V[2]+a,!1)}else{for(H=
0;H<W;H++)V=O[H],g(V[2],V[1],V[0],!0);for(H=0;H<W;H++)V=O[H],g(V[0]+S*t,V[1]+S*t,V[2]+S*t,!1)}})();(function(){var a=0;e(J,a);a+=J.length;y=0;for(K=P.length;y<K;y++)z=P[y],e(z,a),a+=z.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h,k,l,n,q){b=a.vertices[e].x;c=a.vertices[e].y;e=a.vertices[e].z;d=a.vertices[f].x;k=a.vertices[f].y;f=a.vertices[f].z;l=a.vertices[g].x;
n=a.vertices[g].y;g=a.vertices[g].z;q=a.vertices[h].x;var r=a.vertices[h].y;a=a.vertices[h].z;return 0.01>Math.abs(c-k)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(q,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(k,1-f),new THREE.Vector2(n,1-g),new THREE.Vector2(r,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=n.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=n[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),n=Math.sin(k),k=0,q=a.length;k<q;k++){var r=a[k],t=new THREE.Vector3;t.x=l*r.x-n*r.y;t.y=n*r.x+l*r.y;t.z=r.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=n=k+c*g;d=n+c;var l=n+1+c,n=n+1,r=g*f,t=k*e,s=r+f,p=t+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(r,
t),new THREE.Vector2(s,t),new THREE.Vector2(r,p)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(s,t),new THREE.Vector2(s,p),new THREE.Vector2(r,p)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d,n=new THREE.Vector3(0,0,1);for(a=0;a<h;a++){var q=a*l-f;for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*k-e,-q,0))}for(a=0;a<d;a++)for(b=0;b<c;b++){var r=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,k=new THREE.Vector2(b/c,1-a/d),l=new THREE.Vector2(b/c,1-(a+1)/d),q=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+
1)/c,1-a/d),r=new THREE.Face3(r,e,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([k,l,t]);r=new THREE.Face3(e,f,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([l.clone(),q,t.clone()])}};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var n=new THREE.Vector3,q=e+g/c*f;n.x=k*Math.cos(q);n.y=k*Math.sin(q);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,n=q+c+2,this.faces.push(new THREE.Face3(f,
l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]),f=q,l=q+c+2,n=q+1,this.faces.push(new THREE.Face3(f,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],n=[];for(k=0;k<=c;k++){var q=[],r=[];for(h=0;h<=b;h++){var t=h/b,s=k/c,p=new THREE.Vector3;p.x=-a*Math.cos(d+t*e)*Math.sin(f+s*g);p.y=a*Math.cos(f+s*g);p.z=
a*Math.sin(d+t*e)*Math.sin(f+s*g);this.vertices.push(p);q.push(this.vertices.length-1);r.push(new THREE.Vector2(t,1-s))}l.push(q);n.push(r)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),r=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),s=this.vertices[g].clone().normalize(),p=n[k][h+1].clone(),v=n[k][h].clone(),w=n[k+1][h].clone(),u=n[k+1][h+1].clone();Math.abs(this.vertices[d].y)===a?(p.x=(p.x+
v.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,s])),this.faceVertexUvs[0].push([p,w,u])):Math.abs(this.vertices[f].y)===a?(w.x=(w.x+u.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,r,t])),this.faceVertexUvs[0].push([p,v,w])):(this.faces.push(new THREE.Face3(d,e,g,[q,r,s])),this.faceVertexUvs[0].push([p,v,u]),this.faces.push(new THREE.Face3(e,f,g,[r.clone(),t,s.clone()])),this.faceVertexUvs[0].push([v.clone(),w,u.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var n=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(n);f.y=a*Math.sin(n);var r=new THREE.Vector3;r.x=(a+b*Math.cos(q))*Math.cos(n);r.y=(a+b*Math.cos(q))*Math.sin(n);r.z=b*Math.sin(q);this.vertices.push(r);g.push(new THREE.Vector2(l/d,k/c));h.push(r.clone().sub(f).normalize())}for(k=
1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,n=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),n=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*0.5;g=d*(2+b)*g*0.5;d=e*d*Math.sin(a)*0.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=0;r<c;++r){k[r]=Array(d);var t=r/c*2*e*Math.PI,
s=h(t,f,e,a,g),t=h(t+0.01,f,e,a,g);l.subVectors(t,s);n.addVectors(t,s);q.crossVectors(l,n);n.crossVectors(q,l);q.normalize();n.normalize();for(t=0;t<d;++t){var p=t/d*2*Math.PI,v=-b*Math.cos(p),p=b*Math.sin(p),w=new THREE.Vector3;w.x=s.x+v*n.x+p*q.x;w.y=s.y+v*n.y+p*q.y;w.z=s.z+v*n.z+p*q.z;k[r][t]=this.vertices.push(w)-1}}for(r=0;r<c;++r)for(t=0;t<d;++t)e=(r+1)%c,f=(t+1)%d,a=k[r][t],b=k[e][t],e=k[e][f],f=k[r][f],g=new THREE.Vector2(r/c,t/d),l=new THREE.Vector2((r+1)/c,t/d),n=new THREE.Vector2((r+1)/
c,(t+1)/d),q=new THREE.Vector2(r/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),n,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var f=[],g,h,k=b+1,l,n,q,r,t=new THREE.Vector3,s,p,v;s=new THREE.TubeGeometry.FrenetFrames(a,b,e);p=s.normals;v=s.binormals;this.tangents=s.tangents;this.normals=p;this.binormals=v;for(s=0;s<k;s++)for(f[s]=[],l=s/(k-1),r=a.getPointAt(l),g=p[s],h=v[s],l=0;l<d;l++)n=l/d*2*Math.PI,q=-c*Math.cos(n),n=c*Math.sin(n),t.copy(r),t.x+=q*g.x+n*
h.x,t.y+=q*g.y+n*h.y,t.z+=q*g.z+n*h.z,f[s][l]=this.vertices.push(new THREE.Vector3(t.x,t.y,t.z))-1;for(s=0;s<b;s++)for(l=0;l<d;l++)k=e?(s+1)%b:s+1,t=(l+1)%d,a=f[s][l],c=f[k][l],k=f[k][t],t=f[s][t],p=new THREE.Vector2(s/b,l/d),v=new THREE.Vector2((s+1)/b,l/d),g=new THREE.Vector2((s+1)/b,(l+1)/d),h=new THREE.Vector2(s/b,(l+1)/d),this.faces.push(new THREE.Face3(a,c,t)),this.faceVertexUvs[0].push([p,v,h]),this.faces.push(new THREE.Face3(c,k,t)),this.faceVertexUvs[0].push([v.clone(),g,h.clone()]);this.computeFaceNormals();
this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],
f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);v.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(v.z,-v.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,b){var c=
Math.pow(2,b);Math.pow(4,b);for(var d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),r=c-n,s=0;s<=r;s++)l[n][s]=0==s&&n==c?p:e(p.clone().lerp(q,s/r))}for(n=0;n<c;n++)for(s=0;s<2*(c-n)-1;s++)d=Math.floor(s/2),0==s%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,
a.y));return a.clone()}THREE.Geometry.call(this);c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],r=l=0,n=b.length;l<n;l+=3,r++){var t=a[b[l]],s=a[b[l+1]],p=a[b[l+2]];q[r]=new THREE.Face3(t.index,s.index,p.index,[t.clone(),s.clone(),p.clone()])}for(var v=new THREE.Vector3,l=0,n=q.length;l<n;l++)g(q[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,q=b[2].x,r=Math.max(d,Math.max(a,
q)),t=Math.min(d,Math.min(a,q)),0.9<r&&0.1>t&&(0.2>d&&(b[0].x+=1),0.2>a&&(b[1].x+=1),0.2>q&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,n=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,r,t,s;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*n+h,d=g*n+h+1,l=(g+1)*n+h+1,k=(g+1)*n+h,q=new THREE.Vector2(h/b,g/c),r=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),s=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,k)),f.push([q,r,s]),e.push(new THREE.Face3(d,l,k)),
f.push([r.clone(),t,s.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=0.2*e);void 0===h&&(h=0.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrixAutoUpdate=
!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,k){a.set(g,h,k);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d)for(g=0,h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",0.7,
1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();for(var l=k.vertices,k=k.faces,n=0,q=0,r=k.length;q<r;q++)for(var t=k[q],s=0;3>s;s++){d[0]=t[g[s]];d[1]=t[g[(s+1)%3]];d.sort(f);var p=d.toString();void 0===e[p]?(e[p]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},n++):e[p].face2=q}h.addAttribute("position",new THREE.Float32Attribute(6*n,3));d=h.attributes.position.array;
f=0;for(p in e)if(g=e[p],void 0===g.face2||0.9999>k[g.face1].normal.dot(k[g.face2].normal))n=l[g.vert1],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z,n=l[g.vert2],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b,c,d){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];a=new THREE.SphereGeometry(b,4,2);a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(b=0;8>b;b++)a.faces[b].color=this.colors[4>b?0:1];b=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(a,b);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrixWorld=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexNormals.length;q<r;q++){var t=n.vertexNormals[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexTangents.length;q<r;q++){var t=n.vertexTangents[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,n=0,q=new Uint32Array(6*l.length),r=0,t=l.length;r<t;r++)for(var s=l[r],p=0;3>p;p++){d[0]=s[g[p]];d[1]=s[g[(p+1)%3]];d.sort(f);var v=d.toString();void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++)}d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)n=
k[q[2*r+p]],g=6*r+3*p,d[g+0]=n.x,d[g+1]=n.y,d[g+2]=n.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){for(var k=a.geometry.attributes.position.array,t=a.geometry.attributes.index.array,l=a.geometry.offsets,n=0,q=new Uint32Array(2*t.length),s=0,w=l.length;s<w;++s)for(var p=l[s].start,v=l[s].count,g=l[s].index,r=p,u=p+v;r<u;r+=3)for(p=0;3>p;p++)d[0]=g+t[r+p],d[1]=g+t[r+(p+1)%3],d.sort(f),v=d.toString(),
void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++);d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)g=6*r+3*p,n=3*q[2*r+p],d[g+0]=k[n],d[g+1]=k[n+1],d[g+2]=k[n+2]}else for(k=a.geometry.attributes.position.array,n=k.length/3,q=n/3,d=new Float32Array(6*n),r=0,t=q;r<t;r++)for(p=0;3>p;p++)g=18*r+6*p,q=9*r+3*p,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],n=9*r+(p+1)%3*3,d[g+3]=k[n],d[g+4]=k[n+1],d[g+5]=k[n+2];h.addAttribute("position",new THREE.BufferAttribute(d,3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),
THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};
THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*0.25,c.rotation+=0.25*(c.wantedRotation-c.rotation)};
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
THREE.LensFlarePlugin=function(){function a(a,b){var d=c.createProgram(),e=c.createShader(c.FRAGMENT_SHADER),f=c.createShader(c.VERTEX_SHADER),g="precision "+b+" float;\n";c.shaderSource(e,g+a.fragmentShader);c.shaderSource(f,g+a.vertexShader);c.compileShader(e);c.compileShader(f);c.attachShader(d,e);c.attachShader(d,f);c.linkProgram(d);return d}var b=[],c,d,e,f,g,h,k,l,n,q,r,t,s;this.init=function(b){c=b.context;d=b;e=b.getPrecision();f=new Float32Array(16);g=new Uint16Array(6);b=0;f[b++]=-1;f[b++]=
-1;f[b++]=0;f[b++]=0;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;b=0;g[b++]=0;g[b++]=1;g[b++]=2;g[b++]=0;g[b++]=2;g[b++]=3;h=c.createBuffer();k=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,h);c.bufferData(c.ARRAY_BUFFER,f,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.bufferData(c.ELEMENT_ARRAY_BUFFER,g,c.STATIC_DRAW);l=c.createTexture();n=c.createTexture();c.bindTexture(c.TEXTURE_2D,l);c.texImage2D(c.TEXTURE_2D,0,c.RGB,16,
16,0,c.RGB,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.bindTexture(c.TEXTURE_2D,n);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,16,16,0,c.RGBA,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);
c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);0>=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(q=!1,r=a(THREE.ShaderFlares.lensFlare,e)):(q=!0,r=a(THREE.ShaderFlares.lensFlareVertexTexture,e));t={};s={};t.vertex=c.getAttribLocation(r,"position");t.uv=c.getAttribLocation(r,"uv");s.renderType=c.getUniformLocation(r,"renderType");s.map=c.getUniformLocation(r,"map");s.occlusionMap=c.getUniformLocation(r,"occlusionMap");s.opacity=
c.getUniformLocation(r,"opacity");s.color=c.getUniformLocation(r,"color");s.scale=c.getUniformLocation(r,"scale");s.rotation=c.getUniformLocation(r,"rotation");s.screenPosition=c.getUniformLocation(r,"screenPosition")};this.render=function(a,e,f,g){b.length=0;a.traverseVisible(function(a){a instanceof THREE.LensFlare&&b.push(a)});if(0!==b.length){a=new THREE.Vector3;var D=g/f,A=0.5*f,x=0.5*g,C=16/g,I=new THREE.Vector2(C*D,C),z=new THREE.Vector3(1,1,0),y=new THREE.Vector2(1,1),K=s,C=t;c.useProgram(r);
c.enableVertexAttribArray(t.vertex);c.enableVertexAttribArray(t.uv);c.uniform1i(K.occlusionMap,0);c.uniform1i(K.map,1);c.bindBuffer(c.ARRAY_BUFFER,h);c.vertexAttribPointer(C.vertex,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(C.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.disable(c.CULL_FACE);c.depthMask(!1);for(var N=0,ba=b.length;N<ba;N++){C=16/g;I.set(C*D,C);var P=b[N];a.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]);a.applyMatrix4(e.matrixWorldInverse);
a.applyProjection(e.projectionMatrix);z.copy(a);y.x=z.x*A+A;y.y=z.y*x+x;if(q||0<y.x&&y.x<f&&0<y.y&&y.y<g){c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGB,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,0);c.uniform2f(K.scale,I.x,I.y);c.uniform3f(K.screenPosition,z.x,z.y,z.z);c.disable(c.BLEND);c.enable(c.DEPTH_TEST);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,n);c.copyTexImage2D(c.TEXTURE_2D,
0,c.RGBA,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,1);c.disable(c.DEPTH_TEST);c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);P.positionScreen.copy(z);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();c.uniform1i(K.renderType,2);c.enable(c.BLEND);for(var O=0,J=P.lensFlares.length;O<J;O++){var E=P.lensFlares[O];0.001<E.opacity&&0.001<E.scale&&(z.x=E.x,z.y=E.y,z.z=E.z,C=E.size*E.scale/g,I.x=C*D,I.y=C,c.uniform3f(K.screenPosition,
z.x,z.y,z.z),c.uniform2f(K.scale,I.x,I.y),c.uniform1f(K.rotation,E.rotation),c.uniform1f(K.opacity,E.opacity),c.uniform3f(K.color,E.color.r,E.color.g,E.color.b),d.setBlending(E.blending,E.blendEquation,E.blendSrc,E.blendDst),d.setTexture(E.texture,1),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0))}}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(!0)}}};
THREE.ShadowMapPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&c.castShadow&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);r.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=[];this.init=function(a){b=a.context;
c=a;a=THREE.ShaderLib.depthRGBA;var h=THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,
morphTargets:!0,skinning:!0});d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){c.shadowMapEnabled&&c.shadowMapAutoUpdate&&this.update(a,b)};this.update=function(t,s){var p,v,w,u,D,A,x,C,I=[];u=0;b.clearColor(1,1,1,1);b.disable(b.BLEND);b.enable(b.CULL_FACE);b.frontFace(b.CCW);c.shadowMapCullFace===THREE.CullFaceFront?b.cullFace(b.FRONT):b.cullFace(b.BACK);c.setDepthTest(!0);p=0;for(v=t.__lights.length;p<v;p++)if(w=t.__lights[p],w.castShadow)if(w instanceof
THREE.DirectionalLight&&w.shadowCascade)for(D=0;D<w.shadowCascadeCount;D++){var z;if(w.shadowCascadeArray[D])z=w.shadowCascadeArray[D];else{x=w;var y=D;z=new THREE.DirectionalLight;z.isVirtual=!0;z.onlyShadow=!0;z.castShadow=!0;z.shadowCameraNear=x.shadowCameraNear;z.shadowCameraFar=x.shadowCameraFar;z.shadowCameraLeft=x.shadowCameraLeft;z.shadowCameraRight=x.shadowCameraRight;z.shadowCameraBottom=x.shadowCameraBottom;z.shadowCameraTop=x.shadowCameraTop;z.shadowCameraVisible=x.shadowCameraVisible;
z.shadowDarkness=x.shadowDarkness;z.shadowBias=x.shadowCascadeBias[y];z.shadowMapWidth=x.shadowCascadeWidth[y];z.shadowMapHeight=x.shadowCascadeHeight[y];z.pointsWorld=[];z.pointsFrustum=[];C=z.pointsWorld;A=z.pointsFrustum;for(var K=0;8>K;K++)C[K]=new THREE.Vector3,A[K]=new THREE.Vector3;C=x.shadowCascadeNearZ[y];x=x.shadowCascadeFarZ[y];A[0].set(-1,-1,C);A[1].set(1,-1,C);A[2].set(-1,1,C);A[3].set(1,1,C);A[4].set(-1,-1,x);A[5].set(1,-1,x);A[6].set(-1,1,x);A[7].set(1,1,x);z.originalCamera=s;A=new THREE.Gyroscope;
A.position.copy(w.shadowCascadeOffset);A.add(z);A.add(z.target);s.add(A);w.shadowCascadeArray[D]=z;console.log("Created virtualLight",z)}y=w;C=D;x=y.shadowCascadeArray[C];x.position.copy(y.position);x.target.position.copy(y.target.position);x.lookAt(x.target);x.shadowCameraVisible=y.shadowCameraVisible;x.shadowDarkness=y.shadowDarkness;x.shadowBias=y.shadowCascadeBias[C];A=y.shadowCascadeNearZ[C];y=y.shadowCascadeFarZ[C];x=x.pointsFrustum;x[0].z=A;x[1].z=A;x[2].z=A;x[3].z=A;x[4].z=y;x[5].z=y;x[6].z=
y;x[7].z=y;I[u]=z;u++}else I[u]=w,u++;p=0;for(v=I.length;p<v;p++){w=I[p];w.shadowMap||(D=THREE.LinearFilter,c.shadowMapType===THREE.PCFSoftShadowMap&&(D=THREE.NearestFilter),w.shadowMap=new THREE.WebGLRenderTarget(w.shadowMapWidth,w.shadowMapHeight,{minFilter:D,magFilter:D,format:THREE.RGBAFormat}),w.shadowMapSize=new THREE.Vector2(w.shadowMapWidth,w.shadowMapHeight),w.shadowMatrix=new THREE.Matrix4);if(!w.shadowCamera){if(w instanceof THREE.SpotLight)w.shadowCamera=new THREE.PerspectiveCamera(w.shadowCameraFov,
w.shadowMapWidth/w.shadowMapHeight,w.shadowCameraNear,w.shadowCameraFar);else if(w instanceof THREE.DirectionalLight)w.shadowCamera=new THREE.OrthographicCamera(w.shadowCameraLeft,w.shadowCameraRight,w.shadowCameraTop,w.shadowCameraBottom,w.shadowCameraNear,w.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}t.add(w.shadowCamera);!0===t.autoUpdate&&t.updateMatrixWorld()}w.shadowCameraVisible&&!w.cameraHelper&&(w.cameraHelper=new THREE.CameraHelper(w.shadowCamera),w.shadowCamera.add(w.cameraHelper));
if(w.isVirtual&&z.originalCamera==s){D=s;u=w.shadowCamera;A=w.pointsFrustum;x=w.pointsWorld;l.set(Infinity,Infinity,Infinity);n.set(-Infinity,-Infinity,-Infinity);for(y=0;8>y;y++)C=x[y],C.copy(A[y]),THREE.ShadowMapPlugin.__projector.unprojectVector(C,D),C.applyMatrix4(u.matrixWorldInverse),C.x<l.x&&(l.x=C.x),C.x>n.x&&(n.x=C.x),C.y<l.y&&(l.y=C.y),C.y>n.y&&(n.y=C.y),C.z<l.z&&(l.z=C.z),C.z>n.z&&(n.z=C.z);u.left=l.x;u.right=n.x;u.top=n.y;u.bottom=l.y;u.updateProjectionMatrix()}u=w.shadowMap;A=w.shadowMatrix;
D=w.shadowCamera;D.position.setFromMatrixPosition(w.matrixWorld);q.setFromMatrixPosition(w.target.matrixWorld);D.lookAt(q);D.updateMatrixWorld();D.matrixWorldInverse.getInverse(D.matrixWorld);w.cameraHelper&&(w.cameraHelper.visible=w.shadowCameraVisible);w.shadowCameraVisible&&w.cameraHelper.update();A.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);A.multiply(D.projectionMatrix);A.multiply(D.matrixWorldInverse);k.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(u);
c.clear();r.length=0;a(t,t,D);w=0;for(u=r.length;w<u;w++)x=r[w],A=x.object,x=x.buffer,y=A.material instanceof THREE.MeshFaceMaterial?A.material.materials[0]:A.material,C=void 0!==A.geometry.morphTargets&&0<A.geometry.morphTargets.length&&y.morphTargets,K=A instanceof THREE.SkinnedMesh&&y.skinning,C=A.customDepthMaterial?A.customDepthMaterial:K?C?g:f:C?e:d,c.setMaterialFaces(y),x instanceof THREE.BufferGeometry?c.renderBufferDirect(D,t.__lights,null,C,x,A):c.renderBuffer(D,t.__lights,null,C,x,A);y=
t.__webglObjectsImmediate;w=0;for(u=y.length;w<u;w++)x=y[w],A=x.object,A.visible&&A.castShadow&&(A._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld),c.renderImmediateObject(D,t.__lights,null,d,A))}p=c.getClearColor();v=c.getClearAlpha();b.clearColor(p.r,p.g,p.b,v);b.enable(b.BLEND);c.shadowMapCullFace===THREE.CullFaceFront&&b.cullFace(b.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;
THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v;function w(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var u,D,A,x=[],C,I,z,y,K;this.init=function(w){u=w.context;D=w;C=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);I=new Uint16Array([0,1,2,0,2,3]);z=u.createBuffer();y=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,z);u.bufferData(u.ARRAY_BUFFER,C,u.STATIC_DRAW);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.bufferData(u.ELEMENT_ARRAY_BUFFER,I,u.STATIC_DRAW);w=u.createProgram();
var x=u.createShader(u.VERTEX_SHADER),P=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(x,["precision "+D.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
u.shaderSource(P,["precision "+D.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
u.compileShader(x);u.compileShader(P);u.attachShader(w,x);u.attachShader(w,P);u.linkProgram(w);K=w;p=u.getAttribLocation(K,"position");v=u.getAttribLocation(K,"uv");a=u.getUniformLocation(K,"uvOffset");b=u.getUniformLocation(K,"uvScale");c=u.getUniformLocation(K,"rotation");d=u.getUniformLocation(K,"scale");e=u.getUniformLocation(K,"color");f=u.getUniformLocation(K,"map");g=u.getUniformLocation(K,"opacity");h=u.getUniformLocation(K,"modelViewMatrix");k=u.getUniformLocation(K,"projectionMatrix");l=
u.getUniformLocation(K,"fogType");n=u.getUniformLocation(K,"fogDensity");q=u.getUniformLocation(K,"fogNear");r=u.getUniformLocation(K,"fogFar");t=u.getUniformLocation(K,"fogColor");s=u.getUniformLocation(K,"alphaTest");w=document.createElement("canvas");w.width=8;w.height=8;x=w.getContext("2d");x.fillStyle="white";x.fillRect(0,0,8,8);A=new THREE.Texture(w);A.needsUpdate=!0};this.render=function(C,I,P,O){x.length=0;C.traverseVisible(function(a){a instanceof THREE.Sprite&&x.push(a)});if(0!==x.length){u.useProgram(K);
u.enableVertexAttribArray(p);u.enableVertexAttribArray(v);u.disable(u.CULL_FACE);u.enable(u.BLEND);u.bindBuffer(u.ARRAY_BUFFER,z);u.vertexAttribPointer(p,2,u.FLOAT,!1,16,0);u.vertexAttribPointer(v,2,u.FLOAT,!1,16,8);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.uniformMatrix4fv(k,!1,I.projectionMatrix.elements);u.activeTexture(u.TEXTURE0);u.uniform1i(f,0);O=P=0;var J=C.fog;J?(u.uniform3f(t,J.color.r,J.color.g,J.color.b),J instanceof THREE.Fog?(u.uniform1f(q,J.near),u.uniform1f(r,J.far),u.uniform1i(l,1),
O=P=1):J instanceof THREE.FogExp2&&(u.uniform1f(n,J.density),u.uniform1i(l,2),O=P=2)):(u.uniform1i(l,0),O=P=0);for(var J=0,E=x.length;J<E;J++){var Q=x[J],L=Q.material;Q._modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,Q.matrixWorld);Q.z=-Q._modelViewMatrix.elements[14]}x.sort(w);I=[];J=0;for(E=x.length;J<E;J++)Q=x[J],L=Q.material,u.uniform1f(s,L.alphaTest),u.uniformMatrix4fv(h,!1,Q._modelViewMatrix.elements),I[0]=Q.scale.x,I[1]=Q.scale.y,Q=0,C.fog&&L.fog&&(Q=O),P!==Q&&(u.uniform1i(l,Q),P=Q),
null!==L.map?(u.uniform2f(a,L.map.offset.x,L.map.offset.y),u.uniform2f(b,L.map.repeat.x,L.map.repeat.y)):(u.uniform2f(a,0,0),u.uniform2f(b,1,1)),u.uniform1f(g,L.opacity),u.uniform3f(e,L.color.r,L.color.g,L.color.b),u.uniform1f(c,L.rotation),u.uniform2fv(d,I),D.setBlending(L.blending,L.blendEquation,L.blendSrc,L.blendDst),D.setDepthTest(L.depthTest),D.setDepthWrite(L.depthWrite),L.map&&L.map.image&&L.map.image.width?D.setTexture(L.map,0):D.setTexture(A,0),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,
0);u.enable(u.CULL_FACE)}}};
THREE.DepthPassPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);l.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}this.enabled=!1;this.renderTarget=null;var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=[];this.init=function(a){b=a.context;c=a;a=THREE.ShaderLib.depthRGBA;var h=
THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});d._shadowPass=
!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(n,q){var r,t,s,p,v;b.clearColor(1,1,1,1);b.disable(b.BLEND);c.setDepthTest(!0);!0===n.autoUpdate&&n.updateMatrixWorld();q.matrixWorldInverse.getInverse(q.matrixWorld);k.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(this.renderTarget);c.clear();l.length=0;a(n,n,q);var w;r=0;for(t=l.length;r<t;r++)s=l[r],v=s.object,s=s.buffer,
v instanceof THREE.PointCloud&&!v.customDepthMaterial||((w=v.material instanceof THREE.MeshFaceMaterial?v.material.materials[0]:v.material)&&c.setMaterialFaces(v.material),p=void 0!==v.geometry.morphTargets&&0<v.geometry.morphTargets.length&&w.morphTargets,w=v instanceof THREE.SkinnedMesh&&w.skinning,p=v.customDepthMaterial?v.customDepthMaterial:w?p?g:f:p?e:d,s instanceof THREE.BufferGeometry?c.renderBufferDirect(q,n.__lights,null,p,s,v):c.renderBuffer(q,n.__lights,null,p,s,v));p=n.__webglObjectsImmediate;
r=0;for(t=p.length;r<t;r++)s=p[r],v=s.object,v.visible&&(v._modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),c.renderImmediateObject(q,n.__lights,null,d,v));r=c.getClearColor();t=c.getClearAlpha();b.clearColor(r.r,r.g,r.b,t);b.enable(b.BLEND)}};
THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mr.doob / http://mrdoob.com/
 */

var Detector = {

	canvas: !! window.CanvasRenderingContext2D,
	webgl: ( function () { try { return !! window.WebGLRenderingContext && !! document.createElement( 'canvas' ).getContext( 'experimental-webgl' ); } catch( e ) { return false; } } )(),
	workers: !! window.Worker,
	fileapi: window.File && window.FileReader && window.FileList && window.Blob,

	getWebGLErrorMessage: function () {

		var element = document.createElement( 'div' );
		element.id = 'webgl-error-message';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( ! this.webgl ) {

			element.innerHTML = window.WebGLRenderingContext ? [
				'Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' ) : [
				'Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>',
				'Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'
			].join( '\n' );

		}

		return element;

	},

	addGetWebGLMessage: function ( parameters ) {

		var parent, id, element;

		parameters = parameters || {};

		parent = parameters.parent !== undefined ? parameters.parent : document.body;
		id = parameters.id !== undefined ? parameters.id : 'oldie';

		element = Detector.getWebGLErrorMessage();
		element.id = id;

		parent.appendChild( element );

	}

};
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */
/*global THREE, console */

// This set of controls performs orbiting, dollying (zooming), and panning. It maintains
// the "up" direction as +Y, unlike the TrackballControls. Touch on tablet and phones is
// supported.
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finter swipe
//
// This is a drop-in replacement for (most) TrackballControls used in examples.
// That is, include this js file and wherever you see:
//    	controls = new THREE.TrackballControls( camera );
//      controls.target.z = 150;
// Simple substitute "OrbitControls" and the control should work as-is.

THREE.OrbitControls = function ( object, domElement ) {

	this.object = object;
	this.domElement = ( domElement !== undefined ) ? domElement : document;

	// API

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the control orbits around
	// and where it pans with respect to.
	this.target = new THREE.Vector3();
	// center is old, deprecated; use "target" instead
	this.center = this.target;

	// This option actually enables dollying in and out; left as "zoom" for
	// backwards compatibility
	this.noZoom = false;
	this.zoomSpeed = 1.0;
	// Limits to how far you can dolly in and out
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// Set to true to disable this control
	this.noRotate = false;
	this.rotateSpeed = 1.0;

	// Set to true to disable this control
	this.noPan = false;
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// Set to true to disable use of the keys
	this.noKeys = false;
	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	////////////
	// internals

	var scope = this;

	var EPS = 0.000001;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	var phiDelta = 0;
	var thetaDelta = 0;
	var scale = 1;
	var pan = new THREE.Vector3();

	var lastPosition = new THREE.Vector3();

	var STATE = { NONE : -1, ROTATE : 0, DOLLY : 1, PAN : 2, TOUCH_ROTATE : 3, TOUCH_DOLLY : 4, TOUCH_PAN : 5 };
	var state = STATE.NONE;

	// events

	var changeEvent = { type: 'change' };


	this.rotateLeft = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		thetaDelta -= angle;

	};

	this.rotateUp = function ( angle ) {

		if ( angle === undefined ) {

			angle = getAutoRotationAngle();

		}

		phiDelta -= angle;

	};

	// pass in distance in world space to move left
	this.panLeft = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get X column of matrix
		panOffset.set( te[0], te[1], te[2] );
		panOffset.multiplyScalar(-distance);
		
		pan.add( panOffset );

	};

	// pass in distance in world space to move up
	this.panUp = function ( distance ) {

		var panOffset = new THREE.Vector3();
		var te = this.object.matrix.elements;
		// get Y column of matrix
		panOffset.set( te[4], te[5], te[6] );
		panOffset.multiplyScalar(distance);
		
		pan.add( panOffset );
	};
	
	// main entry point; pass in Vector2 of change desired in pixel space,
	// right and down are positive
	this.pan = function ( delta ) {

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( scope.object.fov !== undefined ) {

			// perspective
			var position = scope.object.position;
			var offset = position.clone().sub( scope.target );
			var targetDistance = offset.length();

			// half of the fov is center to top of screen
			targetDistance *= Math.tan( (scope.object.fov/2) * Math.PI / 180.0 );
			// we actually don't use screenWidth, since perspective camera is fixed to screen height
			scope.panLeft( 2 * delta.x * targetDistance / element.clientHeight );
			scope.panUp( 2 * delta.y * targetDistance / element.clientHeight );

		} else if ( scope.object.top !== undefined ) {

			// orthographic
			scope.panLeft( delta.x * (scope.object.right - scope.object.left) / element.clientWidth );
			scope.panUp( delta.y * (scope.object.top - scope.object.bottom) / element.clientHeight );

		} else {

			// camera neither orthographic or perspective - warn user
			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );

		}

	};

	this.dollyIn = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale /= dollyScale;

	};

	this.dollyOut = function ( dollyScale ) {

		if ( dollyScale === undefined ) {

			dollyScale = getZoomScale();

		}

		scale *= dollyScale;

	};

	this.update = function () {

		var position = this.object.position;
		var offset = position.clone().sub( this.target );

		// angle from z-axis around y-axis

		var theta = Math.atan2( offset.x, offset.z );

		// angle from y-axis

		var phi = Math.atan2( Math.sqrt( offset.x * offset.x + offset.z * offset.z ), offset.y );

		if ( this.autoRotate ) {

			this.rotateLeft( getAutoRotationAngle() );

		}

		theta += thetaDelta;
		phi += phiDelta;

		// restrict phi to be between desired limits
		phi = Math.max( this.minPolarAngle, Math.min( this.maxPolarAngle, phi ) );

		// restrict phi to be betwee EPS and PI-EPS
		phi = Math.max( EPS, Math.min( Math.PI - EPS, phi ) );

		var radius = offset.length() * scale;

		// restrict radius to be between desired limits
		radius = Math.max( this.minDistance, Math.min( this.maxDistance, radius ) );
		
		// move target to panned location
		this.target.add( pan );

		offset.x = radius * Math.sin( phi ) * Math.sin( theta );
		offset.y = radius * Math.cos( phi );
		offset.z = radius * Math.sin( phi ) * Math.cos( theta );

		position.copy( this.target ).add( offset );

		this.object.lookAt( this.target );

		thetaDelta = 0;
		phiDelta = 0;
		scale = 1;
		pan.set(0,0,0);

		if ( lastPosition.distanceTo( this.object.position ) > 0 ) {

			this.dispatchEvent( changeEvent );

			lastPosition.copy( this.object.position );

		}

	};


	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function onMouseDown( event ) {

		if ( scope.enabled === false ) { return; }
		event.preventDefault();

		if ( event.button === 0 ) {
			if ( scope.noRotate === true ) { return; }

			state = STATE.ROTATE;

			rotateStart.set( event.clientX, event.clientY );

		} else if ( event.button === 1 ) {
			if ( scope.noZoom === true ) { return; }

			state = STATE.DOLLY;

			dollyStart.set( event.clientX, event.clientY );

		} else if ( event.button === 2 ) {
			if ( scope.noPan === true ) { return; }

			state = STATE.PAN;

			panStart.set( event.clientX, event.clientY );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.addEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.addEventListener( 'mouseup', onMouseUp, false );

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		if ( state === STATE.ROTATE ) {

			if ( scope.noRotate === true ) return;

			rotateEnd.set( event.clientX, event.clientY );
			rotateDelta.subVectors( rotateEnd, rotateStart );

			// rotating across whole screen goes 360 degrees around
			scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
			// rotating up and down along whole screen attempts to go 360, but limited to 180
			scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

			rotateStart.copy( rotateEnd );

		} else if ( state === STATE.DOLLY ) {

			if ( scope.noZoom === true ) return;

			dollyEnd.set( event.clientX, event.clientY );
			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				scope.dollyIn();

			} else {

				scope.dollyOut();

			}

			dollyStart.copy( dollyEnd );

		} else if ( state === STATE.PAN ) {

			if ( scope.noPan === true ) return;

			panEnd.set( event.clientX, event.clientY );
			panDelta.subVectors( panEnd, panStart );
			
			scope.pan( panDelta );

			panStart.copy( panEnd );

		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.update();

	}

	function onMouseUp( /* event */ ) {

		if ( scope.enabled === false ) return;

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		scope.domElement.removeEventListener( 'mousemove', onMouseMove, false );
		scope.domElement.removeEventListener( 'mouseup', onMouseUp, false );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.noZoom === true ) return;
		
		event.preventDefault();
		event.stopPropagation();

		var delta = 0;

		if ( event.wheelDelta ) { // WebKit / Opera / Explorer 9

			delta = event.wheelDelta;

		} else if ( event.detail ) { // Firefox

			delta = - event.detail;

		}

		if ( delta > 0 ) {

			scope.dollyOut();

		} else {

			scope.dollyIn();

		}

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false ) { return; }
		if ( scope.noKeys === true ) { return; }
		if ( scope.noPan === true ) { return; }

		// pan a pixel - I guess for precise positioning?
		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		var needUpdate = false;
		
		switch ( event.keyCode ) {

			case scope.keys.UP:
				scope.pan( new THREE.Vector2( 0, scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.BOTTOM:
				scope.pan( new THREE.Vector2( 0, -scope.keyPanSpeed ) );
				needUpdate = true;
				break;
			case scope.keys.LEFT:
				scope.pan( new THREE.Vector2( scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
			case scope.keys.RIGHT:
				scope.pan( new THREE.Vector2( -scope.keyPanSpeed, 0 ) );
				needUpdate = true;
				break;
		}

		// Greggman fix: https://github.com/greggman/three.js/commit/fde9f9917d6d8381f06bf22cdff766029d1761be
		if ( needUpdate ) {

			scope.update();

		}

	}
	
	function touchstart( event ) {

		if ( scope.enabled === false ) { return; }

		switch ( event.touches.length ) {

			case 1:	// one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }

				state = STATE.TOUCH_ROTATE;

				rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			case 2:	// two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }

				state = STATE.TOUCH_DOLLY;

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );
				dollyStart.set( 0, distance );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }

				state = STATE.TOUCH_PAN;

				panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				break;

			default:
				state = STATE.NONE;

		}
	}

	function touchmove( event ) {

		if ( scope.enabled === false ) { return; }

		event.preventDefault();
		event.stopPropagation();

		var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

		switch ( event.touches.length ) {

			case 1: // one-fingered touch: rotate
				if ( scope.noRotate === true ) { return; }
				if ( state !== STATE.TOUCH_ROTATE ) { return; }

				rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				rotateDelta.subVectors( rotateEnd, rotateStart );

				// rotating across whole screen goes 360 degrees around
				scope.rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed );
				// rotating up and down along whole screen attempts to go 360, but limited to 180
				scope.rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed );

				rotateStart.copy( rotateEnd );
				break;

			case 2: // two-fingered touch: dolly
				if ( scope.noZoom === true ) { return; }
				if ( state !== STATE.TOUCH_DOLLY ) { return; }

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;
				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );
				dollyDelta.subVectors( dollyEnd, dollyStart );

				if ( dollyDelta.y > 0 ) {

					scope.dollyOut();

				} else {

					scope.dollyIn();

				}

				dollyStart.copy( dollyEnd );
				break;

			case 3: // three-fingered touch: pan
				if ( scope.noPan === true ) { return; }
				if ( state !== STATE.TOUCH_PAN ) { return; }

				panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );
				panDelta.subVectors( panEnd, panStart );
				
				scope.pan( panDelta );

				panStart.copy( panEnd );
				break;

			default:
				state = STATE.NONE;

		}

	}

	function touchend( /* event */ ) {

		if ( scope.enabled === false ) { return; }

		state = STATE.NONE;
	}

	this.domElement.addEventListener( 'contextmenu', function ( event ) { event.preventDefault(); }, false );
	this.domElement.addEventListener( 'mousedown', onMouseDown, false );
	this.domElement.addEventListener( 'mousewheel', onMouseWheel, false );
	this.domElement.addEventListener( 'DOMMouseScroll', onMouseWheel, false ); // firefox

	this.domElement.addEventListener( 'keydown', onKeyDown, false );

	this.domElement.addEventListener( 'touchstart', touchstart, false );
	this.domElement.addEventListener( 'touchend', touchend, false );
	this.domElement.addEventListener( 'touchmove', touchmove, false );

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );// stats.js - http://github.com/mrdoob/stats.js
var Stats=function(){var l=Date.now(),m=l,g=0,n=Infinity,o=0,h=0,p=Infinity,q=0,r=0,s=0,f=document.createElement("div");f.id="stats";f.addEventListener("mousedown",function(b){b.preventDefault();t(++s%2)},!1);f.style.cssText="width:80px;opacity:0.9;cursor:pointer";var a=document.createElement("div");a.id="fps";a.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#002";f.appendChild(a);var i=document.createElement("div");i.id="fpsText";i.style.cssText="color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";
i.innerHTML="FPS";a.appendChild(i);var c=document.createElement("div");c.id="fpsGraph";c.style.cssText="position:relative;width:74px;height:30px;background-color:#0ff";for(a.appendChild(c);74>c.children.length;){var j=document.createElement("span");j.style.cssText="width:1px;height:30px;float:left;background-color:#113";c.appendChild(j)}var d=document.createElement("div");d.id="ms";d.style.cssText="padding:0 0 3px 3px;text-align:left;background-color:#020;display:none";f.appendChild(d);var k=document.createElement("div");
k.id="msText";k.style.cssText="color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px";k.innerHTML="MS";d.appendChild(k);var e=document.createElement("div");e.id="msGraph";e.style.cssText="position:relative;width:74px;height:30px;background-color:#0f0";for(d.appendChild(e);74>e.children.length;)j=document.createElement("span"),j.style.cssText="width:1px;height:30px;float:left;background-color:#131",e.appendChild(j);var t=function(b){s=b;switch(s){case 0:a.style.display=
"block";d.style.display="none";break;case 1:a.style.display="none",d.style.display="block"}};return{REVISION:11,domElement:f,setMode:t,begin:function(){l=Date.now()},end:function(){var b=Date.now();g=b-l;n=Math.min(n,g);o=Math.max(o,g);k.textContent=g+" MS ("+n+"-"+o+")";var a=Math.min(30,30-30*(g/200));e.appendChild(e.firstChild).style.height=a+"px";r++;b>m+1E3&&(h=Math.round(1E3*r/(b-m)),p=Math.min(p,h),q=Math.max(q,h),i.textContent=h+" FPS ("+p+"-"+q+")",a=Math.min(30,30-30*(h/100)),c.appendChild(c.firstChild).style.height=
a+"px",m=b,r=0);return b},update:function(){l=this.end()}}};
'use strict';

(function(global) {
	var _G = (global.grafar = {
            version: '4.01r'
        }),
		panels = [];
				
	var config = {
		debug: false,
		
		rootGraphId: '$',
		
		minPanelWidth: 600,
		minPanelHeight: 600,
		container: window,
		antialias: true,
		
		axes: ['x', 'y', 'z'],
		axisLength: 2,
		
		particleRadius: 4,
		
		tweenTime: 900,		
		tweenFunction: function(s, e, t) {
			var part = (1 - Math.cos(Math.PI * t / _G.config.tweenTime)) / 2;  // non-local reference
			return s * (1 - part) + e * part;
		},
		
		grafaryaz: {
			samples: 100,
			tol: 0.001,
			samplesPerDOF: 24,
			diffStep: 0.001
		}
	};
		
	var update = function() {
		var len = panels.length;
		for (var i = 0; i < len; i++)
			panels[i].update();
		_G.frameId++;
		global.requestAnimationFrame(update);
	};
	
	function setup(changes, target) {
		target = target || config;
		Object.keys(changes).forEach(function(name) {
			if (target.hasOwnProperty(name))
				if (name !== 'grafaryaz')
					target[name] = changes[name];
				else
					setup(changes[name], config.grafaryaz);
		});
		return _G;
	}
	
	
	// export
	
	_G.config = config;
	_G.panels = panels;
	_G.update = update;
	_G.setup = setup;
	_G.frameId = 0;
	
	update();
}(this));'use strict';

(function(global) {
	var _G = global.grafar;
		
	
	global.Float32Array = global.Float32Array || Array;
	global.Uint32Array = global.Uint32Array || Array;
	global.Uint16Array = global.Uint16Array || Array;
	global.Uint8Array = global.Uint8Array || Array;
	
	global.performance = global.performance || {};
	global.performance.now = 
		global.performance.now ||
		global.performance.mozNow ||
		global.performance.msNow ||
		global.performance.oNow ||
		global.performance.webkitNow ||
		Date.now ||
		function() { return new Date().getTime(); };
	
}(this));'use strict';

(function(global) {
	var _G = global.grafar;
	
			
	function makeID(obj) {
		while (true) {
			var temp = Math.random().toString(36).substr(2, 9); 
			if (!(temp in obj))
				return temp;
		}
	}
					
	function isExisty(obj) {
		return typeof(obj) !== 'undefined' && obj !== null;
	}
		
	function strToArray (str) {
		if (typeof str === 'string')
			return str.replace(/ /g, '').split(',');
		else 
			return str.filter(isExisty);
	}
	
	
	_G.isExisty = isExisty;
	_G.makeID = makeID;
	_G.asArray = strToArray;
}(this));(function(global) {
	var _G = global.grafar,
		isExisty = _G.isExisty;
	
	
	var arrayPool = {};
	
	arrayPool.pool = {};
		
	arrayPool.get = function(Constructor, length) {
		var classKey = Constructor.toString(),
			constructorKey = length.toString(),
			classPool = this.pool[classKey],
			temp = null;
		if (isExisty(classPool) && isExisty(classPool[constructorKey]) && classPool[constructorKey].length !== 0)
			temp = classPool[constructorKey].pop();
		else
			temp = new Constructor(length);
		return temp;
	};
		
	arrayPool.push = function(obj) {
		var classKey = obj.constructor.toString(),
			constructorKey = obj.length.toString();
			
		if (!isExisty(this.pool[classKey]))
			this.pool[classKey] = {};
		if (!isExisty(this.pool[classKey][constructorKey]))
			this.pool[classKey][constructorKey] = [];
			
		this.pool[classKey][constructorKey].push(obj);
	};
		
	arrayPool.flush = function() {
		this.pool = {};
	};
	
	
	// export
	
	_G.pool = arrayPool;
}(this));'use strict';

(function(global) {
	var _G = global.grafar;
	

	function firstMatch(set, callback) {
		for (var i = 0; i <= set.length && !callback(set[i]); i++);
		return set[i];
	}

	function haveCommon(arr1, arr2) {
		return arr1.some(function(e1) {return arr2.indexOf(e1) !== -1;});
	}

	function intersection(pv, cv, out) {
		return pv.filter(function(e) {
			return cv.indexOf(e) !== -1;
		});
	}
	
	function interPower(arr1, arr2) {
		var pow = 0;
		for (var i = 0; i < arr1.length; i++)
			if (arr2.indexOf(arr1[i]) !== -1)
				pow++;
		return pow;
	}

	function union(a, b, out) {
        out = out || [];
        if (out !== a && out !== b)
            out.length = 0;
        a.reduce(setpush, out);
        b.reduce(setpush, out);
		return out;
	}
    
    function nunion(sets, out) {
        out = out || [];
        if (sets.indexOf(out) === -1)
            out.length = 0;
        sets.forEach(function(set) {
            union(out, set, out);
        });
		return out;
    };

	function unique(pv, cv) {
		if (pv.indexOf(cv) === -1) 
			pv.push(cv);
		return pv;
	}

	function setMinus(l, r, out) {
		return l.filter(function(el) {return r.indexOf(el) === -1;});
	}
	
	function setpush(arr, el) {
		if (arr.indexOf(el) === -1)
			arr.push(el);
		return arr;
	}
	
	function setpop(arr, el) {
		var i = arr.indexOf(el);
		if (el !== -1)
			arr.splice(i, 1);
		return arr;
	}
	
	
	_G.firstMatch = firstMatch;
	_G.interPower = interPower;
	_G.haveCommon = haveCommon;
	_G.intersection = intersection;
	_G.union = union;
	_G.nunion = nunion;
	_G.unique = unique;
	_G.setMinus = setMinus;
	_G.setpush = setpush;
	_G.setpop = setpop;
}(this));'use strict';

(function(global) {
	var _G = global.grafar;
	
	
	function zeroVector(len) {
		var zero = [];
		for (var i = 0; i < len; i++)
			zero[i] = 0;
		return zero;
	}
	
	function dot(a, b) {
		var temp = 0,
			l = a.length;
		for (var i = 0; i < l; i++)
			temp += a[i] * b[i];
		return temp;
	}
	
	function norm(a) {
		var aNorm = 0,
			l = a.length;
		for (var i = 0; i < l; i++)
			aNorm += Math.abs(a[i]);
		return aNorm;
	}
	
	function dist(a, b) {
		var abDist = 0,
			l = a.length;
		for (var i = 0; i < l; i++)
			abDist += Math.abs(a[i] - b[i]);
		return abDist;
	}

		
	_G.zeroVector = zeroVector;
	_G.dot = dot;
	_G.norm = norm;
	_G.dist = dist;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		dot = _G.dot,
		norm = _G.norm,
		arraySum = _G.arraySum,
		arrayTimes = _G.arrayTimes,
		config = _G.config.grafaryaz;
	
	
	function zeros(arr, l) {
		for (var i = 0; i < l; i++)
			arr[i] = 0;
		return arr;
	};
	
	function randomize(arr, l, mean, spread) {
		for (var i = 0; i < l; i++)
			arr[i] = mean + spread / 2 * (Math.random() + Math.random() - 1);
	}
	
	function pow (x, p) {
		var temp = Math.pow(x, p);
		if (!isNaN(temp))
			return temp;
			
		temp = -Math.pow(-x, p);
		if (Math.abs(Math.pow(temp, 1 / p) - x) < config.tol)
			return temp;
		
		return NaN;
	}
	
	function constant(valOuter, name) {
		var val = valOuter;
		console.log('create', val);
		return function(data, l, extras) {
			console.log('call C', val);
			for (var i = 0; i < l ; i++)
				data[name][i] = val;
			extras.continuous = true;
		};
	}
	
	function ints(m, name) {
		m = Number(m);
		return function(data, l, extras) {
			for (var i = 0; i < l; i++)
				data[name][i] = m + i;
			extras.continuous = false;
		};
	}
	
	function seq(a, b, name, closed, discrete) {
		a = Number(a);
		b = Number(b);
		discrete = discrete || false;
		var closeFix = (closed === true? 0: 1);
		return function(data, l, extras) {
			var step = (b - a) / (l - closeFix);
			for (var i = 0; i < l; i++)
				data[name][i] = a + i * step;
			extras.continuous = !discrete;
		};
	}
	
	function logseq(a, b, name) {
		a = Number(a);
		b = Number(b);
		var closeFix = (closed === true? 0: 1);
		return function(data, l, extras) {
			console.log('logseq ' + name);
			var step = (b - a) / Math.log(l);
			for (var i = 1; i < l + 1; i++)
				data[name][i] = a + Math.log(i) * step;
			extras.continuous = true;
		};
	}
		
	function traceZeroSet(f, names) {
		var dof = names.length,
			tol = config.tol,
			gradf = grad(f, dof),
			probeSize = 100,
			thisid = Math.random().toFixed(10),
			mean = [],
			spread = [],
			pt = [],
			realSize = 0,
			isEmpty = false,
			needsReshuffle = true;
		
		function estimator(flatData, l) {
			var i = 0, j = 0;
			
			realSize = 0;
			
			for (i = 0; i < probeSize; i++) {
				for (j = 0; j < dof; j++)
					pt[j] = -10 + 20 * Math.random();
				newton(pt, f, gradf, false, 100);
				if (f(pt) < tol) {
					for (var j = 0; j < dof; j++)
						flatData[j][i] = pt[j];
					realSize++;
				}
			}
			
			for (j = 0; j < dof; j++) {
				var col = flatData[j],
					jmin = 1000,
					jmax = -1000,
					jsum = 0;
				for (i = 0; i < realSize; i++) {
					var val = col[i];
					jmin = Math.min(val, jmin);
					jmax = Math.max(val, jmax);
					jsum += val;
				}
				mean[j] = jsum / realSize;
				spread[j] = 2 * (jmax - jmin);
			}
		}
		
		function constructor(data, l, extras) {
			var flatData = names.map(function(name) {
					return data[name];
				}),
				i = 0, 
				j = 0;
				
			//var speed = {};
			var s = performance.now();
			estimator(flatData, l);
			//speed['est'] = performance.now() - s;
			
			//var s = performance.now();
			if (realSize === 0 && !isEmpty) {
				//console.log('empty');
				for (var j = 0; j < dof; j++)
					zeros(flatData[j], l);
				needsReshuffle = true;
				isEmpty = true;
				return;
			}
			
			//console.log(invalids);
			if (true) {//realSize !== 0 && (needsReshuffle || invalids > 15)) {
				//console.log('reshuffle');
				for (j = 0; j < dof; j++)
					randomize(flatData[j], l, mean[j], spread[j]);
				needsReshuffle = false;
				isEmpty = false;
			}
			//speed['check'] = performance.now() - s;
			
			//var s = performance.now();
			if (!isEmpty) {
				for (i = 0; i < l; i++) {
					for (j = 0; j < dof; j++)
						pt[j] = flatData[j][i];
					newton(pt, f, gradf, false, 30);
					for (var j = 0; j < dof; j++)
						flatData[j][i] = pt[j];
				}
			}
			//console.log(performance.now() - s);
				
			extras.continuous = false;
		};
		constructor.id = thisid;
		return constructor;
	}

	function grad(fa, nargs) {
		var diffStep = config.diffStep;
		return function(pt, val, out) {
			for (var i = 0; i < nargs; i++) {
				pt[i] += diffStep;
				out[i] = (fa(pt) - val) / diffStep;
				pt[i] -= diffStep;
			}
		};
	}

	var nabla = [], offset = [];
	function newton(pt, f, gradf, acceptNeg, maxIter) {
		var tol = config.tol,
			val = 0,
			i = 0,
			j = 0,
			posterr = 0,
			l = pt.length;
		
		for (i = 0; i < maxIter; i++) {
			val = f(pt);
			gradf(pt, val, nabla);
			posterr = -val / dot(nabla, nabla);
			for (j = 0; j < l; j++)
				offset[j] = posterr * nabla[j];
			if (norm(offset) < tol)
				return pt;
			for (j = 0; j < l; j++)
				pt[j] += offset[j];
		}
		
		for (j = 0; j < l; j++)
			pt[j] = 0; ////// WWWWWWWWWWWWWWTTTTTTTTTTTTTTFFFFFFFFFFF
		return pt;
	}

	
	// exports
	
	_G.constant = constant;
	_G.ints = ints;
	_G.seq = seq;
	_G.logseq = logseq;
	_G.traceZeroSet = traceZeroSet;
	_G.pow = pow;
}(this));'use strict';

(function(global) {
	var _G = global.grafar;
    

	function arraySum(a, b, out) {
		var l = a.length;
		for (var i = 0; i < l; i++)
			out[i] = a[i] + b[i];
	}

	function arrayTimes(n, b, out) {
		var l = b.length;
		for (var i = 0; i < l; i++)
			out[i] = n * b[i];
	}
    
	function repeatArray(arr, len, times) {
		var buff = arr.subarray(0, len),
			newlen = times * len;
		for (var i = len; i < newlen; i += len)
			arr.set(buff, i);
		return arr;
	}

	function repeatPoints(arr, len, times) {
		for (var i = len - 1, t = len * times - 1; i >= 0; i--) {
			var val = arr[i];
			for (var j = 0; j < times; j++, t--)
				arr[t] = val;
		}
		return arr;
	}
	
    function blockRepeat(source, blockSize, blockCount, repCount, target) {
        if (blockCount > 50) {
            for (var i = blockCount - 1; i >= 0; i--) {
                var baseS = i * blockSize;
                var baseTT = i * repCount;
                for (var k = 0; k < repCount; k++) {
                    var baseT = (baseTT + k) * blockSize;
                    for (var j = 0; j < blockSize; j++)
                        target[baseT + j] = source[baseS + j];
                }
            }
		} else if (blockCount > 10) {
            var buffer = new Float32Array(blockSize);
            for (var i = blockCount - 1; i >= 0; i--) {
                for (var j = 0; j < blockSize; j++)
                    buffer[j] = source[i * blockSize + j];
                var baseT = i * repCount * blockSize;
                for (var k = 0; k < repCount; k++) {
                    target.set(buffer, baseT);
                    baseT += blockSize;
                }
            }
        } else {
            for (var i = blockCount - 1; i >= 0; i--) {
                var buffer = source.subarray(i * blockSize, (i + 1) * blockSize);
                for (var k = 0; k < repCount; k++)
                    target.set(buffer, (i * repCount + k) * blockSize);
            }
        }
    };
    
	function incArray (arr, by) {
		for (var i = 0; i < arr.length; i++)
			arr[i] += by;
		return arr;
	}
	
	function timesArray (n, arr) {
		for (var i = 0; i < arr.length; i++)
			arr[i] *= n;
		return arr;
	}
    
    function Buffer() {
        this.array = new Float32Array(0);
        this.length = 0;
    }
    
    
    _G.Buffer = Buffer;
	_G.arraySum = arraySum;
	_G.arrayTimes = arrayTimes;
	_G.incArray = incArray;
	_G.timesArray = timesArray;
	_G.repeatArray = repeatArray;
	_G.blockRepeat = blockRepeat;
	_G.repeatPoints = repeatPoints;
}(this));'use strict';

(function(global) {	
	var _G = global.grafar,
		Color = global.Color,
		THREE = global.THREE,
		isExisty = _G.isExisty,
		config = _G.config,
		makeID = _G.makeID;
		
	var styles = {};
    
	
	function Style(init) {		
		init = init || {};
			
		this.id = init.id || makeID(styles);		
		styles[this.id] = this;
		
		this.alpha = null;
		this.start = null;
		this.end = null;
		
		this.points = null;
		this.radius = null;
		
		this.lines = null;
		
		this.palette = [];
		this.colors = {};
		this.materials = {};
		
		this.update(init);
		this.samplePalette(init.paletteSize);
		
		return this;
	}
	
    Style.randColor = function() {
        var rgb = Color.convert({
                l: 60,
                a: -100 + Math.floor(200 * Math.random()),
                b: -100 + Math.floor(200 * Math.random())
            }, 'rgb');
        return new THREE.Color('rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')');
    };
    
    Style.matHelper = function(type, col) {
        if (!isExisty(col))
            col = Style.randColor();
        if (type === 'point')
            return new THREE.PointCloudMaterial({
                size: config.particleRadius, 
                transparent: true, 
                opacity: 0.5, 
                sizeAttenuation: false,
                color: col
            });
        else if (type === 'line')
            return new THREE.LineBasicMaterial({
                color: col
            });            
        else if (type === 'mesh')
            return new THREE.MeshLambertMaterial({
                side: THREE.DoubleSide,
                transparent: true,
                opacity: .5,
                depthWrite: false,
                color: col
                //depthTest: false
            });
    };
    
    
	Style.prototype.update = function(styleChanges) {
		Object.getOwnPropertyNames(styleChanges || {}).forEach(function(name) {
			if (this.hasOwnProperty(name))
				this[name] = styleChanges[name];
		}.bind(this));
		
		return this;
	};
	
    
	_G.styles = styles;
	_G.Style = Style;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		union = _G.union;
	
	function GraphData() {
		this.names = {};
		this.from = {};
		this.to = {};
	}
	
	GraphData.prototype.addNode = function(name) {
		if (!this.names[name]) {
			this.names[name] = true;
			this.from[name] = [];
			this.to[name] = [];
		}
		
		return this;
	};
	
	GraphData.prototype.addEdge = function(v1, v2) {
		this.addNode(v1);
		this.addNode(v2);
		if (this.from[v1].indexOf(v2) === -1)
			this.from[v1].push(v2);
		if (this.to[v2].indexOf(v1) === -1)
			this.to[v2].push(v1);
		return this;
	};
	
	GraphData.prototype.parents = function(vset) {
		var par = [];
		for (var i = 0; i < vset.length; i++)
			par = union(par, this.to[vset[i]]);
		return par;
	};
	
	GraphData.prototype.up = function(sources) {
		var closed = [],
			open = sources.slice(),
			self = this;
		while (open.length !== 0) {
			open = open.reduce(function(pv, cv) {
				return union(self.to[cv], pv);
			}, []);
			closed = union(closed, open);
		};
		return closed;
	};
	
	GraphData.prototype.down = function(sinks) {
		var closed = [],
			open = sinks.slice(),
			self = this;
		while (open.length !== 0) {
			open = open.reduce(function(pv, cv) {
				return union(self.from[cv], pv);
			}, []);
			closed = union(closed, open);
		};
		return closed;
	};
	
	_G.GraphData = GraphData;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		unique = _G.unique;
	
	
	var prefixes = {
		sin: 'Math.sin',
		cos: 'Math.cos',
		sqrt: 'Math.sqrt',
		tan: 'Math.tan',
		pow: 'grafar.pow',
		min: 'Math.min',
		max: 'Math.max',
		exp: 'Math.exp',
		abs: 'Math.abs',
		log: 'Math.log'
	},
		regexTemplates = {
			number: '[+-]?[0-9]*\\.?[0-9]+',
			integer: '[+-]?[0-9]*',
			id: '[A-Za-z_]+[A-Za-z0-9_]*',
			postVar: '(?=$|[\\+\\s-*/^,)])',
			postFunc: '(?=\\()'
		};
	regexTemplates.literal = '(?:' + regexTemplates.number + '|' + regexTemplates.id + ')';

	
	function Constraint(what, using, mapping, extras) {
		this.what = what;
		this.using = using || [];
		this.mapping = mapping || function () {};
		this.extras = extras || {};
	}
	
	
	var Parser = {};
	
	Parser.regex = {
			range: new RegExp('^\\[' + regexTemplates.number + '\\,' + regexTemplates.number + '\\]$'),
			set: new RegExp('^\\{(?:' + regexTemplates.number + ',)*' + regexTemplates.number + '\\}$'),
			id: new RegExp('^' + regexTemplates.id + '$|^$'), // includes empty string
			number: new RegExp('^' + regexTemplates.number + '$|^$'), // includes empty string
			variables: new RegExp(regexTemplates.id + regexTemplates.postVar, 'g'),
			functions: new RegExp(regexTemplates.id + regexTemplates.postFunc, 'g'),
			literals: new RegExp(regexTemplates.literal, 'g'),
			signature: new RegExp('^' + regexTemplates.id + '\\((?:' + regexTemplates.id + ',)*' + regexTemplates.id + '\\)$'),
			call: new RegExp('^' + regexTemplates.id + '\\((?:' + regexTemplates.literal + ',)*' + regexTemplates.literal + '\\)$'),
			allCalls: new RegExp(regexTemplates.id + '\\((?:' + regexTemplates.literal + ',)*' + regexTemplates.literal + '\\)', 'g'), // call site this is called
			pds: new RegExp(regexTemplates.id + '\'' + regexTemplates.id, 'g'),
			//brackets: /[\[\]\{\}]/g,
			comparator: /(==|@=|<=|>=)/
		};
	
	Parser.uncaret = function(str) {
		while (str.indexOf('^') !== -1) {
			var powI = str.indexOf('^'),
				i = powI - 1,
				nest = 0;
			if (str[i] === ')') {
				nest = 0;
				do {
					if (str[i] === ')')
						nest++;
					else if (str[i] === '(')
						nest--;
					i--;
				} while (nest !== 0);
			}
			while (i >= 0 && /[a-zA-Z0-9_.]/.test(str[i]))
				i--;
			var baseI = i + 1;
			
			i = powI + 1;
			while (i <= str.length - 1 && /[a-zA-Z0-9_.]/.test(str[i]))
				i++;
				
			if (str[i] === '(') {
				nest = 0;
				do {
					if (str[i] === '(')
						nest++;
					else if (str[i] === ')')
						nest--;
					i++;
				} while (nest !== 0);
			}
			var expI = i;

			var prefix = str.substring(0, baseI),
				base = str.substring(baseI, powI),
				exponent = str.substring(powI + 1, expI),
				suffix = str.substring(expI, str.length);
			str = prefix + 'pow(' + base + ',' + exponent + ')' + suffix;
		}
		return str;
	};
	
	Parser.extractVarIds = function(str) {
		return (str.match(Parser.regex.variables) || []).reduce(unique, []);
	};	
	
	Parser.formatFunction = function(str) {
		str = Parser.uncaret(str);
		str = str.replace(Parser.regex.functions, function(match) {
			return prefixes.hasOwnProperty(match)? prefixes[match]: match;
		});	
		return str;		
	};
	
	Parser.toExecutable = function(vars, str) {
		return new Function(vars, str)
	};
	
	Parser.parse = function(str) {
		var sides = str.split(Parser.regex.comparator),
			what = sides[0],
			using = Parser.extractVarIds(sides[2]),
			strFunction = Parser.formatFunction(sides[2]),
			realFunction = Parser.toExecutable(using, strFunction);
		return new Constraint(what, using, realFunction, {});
	};
	
	
	_G.ParserAlt = Parser;
}(this));(function(global){
    var grafar = global.grafar;
    var isExisty = grafar.isExisty;
    var setPop = grafar.setpop;
    var setPush = grafar.setpush;
    var union = grafar.union;
    var repeatArray = grafar.repeatArray;
    var stretchArray = grafar.repeatPoints;
    var blockRepeat = grafar.blockRepeat;
    
   
	var Reactive = function(data) {
        this.sources = [];
        this.targets = [];
        
		this.data = isExisty(data)? data: {};
		this.fn = function() {};
		this.isValid = false;
	};
	
	Reactive.isReactive = function(obj) {
		return obj instanceof Reactive;
	};
    
    
    Reactive.prototype.push = function() {
        return this;
    };
    
    Reactive.prototype.lift = function(fn) {
        this.fn = fn;
        this.invalidate();
        return this;
    };
    
	Reactive.prototype.bind = function(newArgs) {        
        this.unbind();
        for (var i = 0; i < newArgs.length; i++)
            setPush(newArgs[i].targets, this);
        this.sources = newArgs.slice();
        return this;
    };
    
    Reactive.prototype.unbind = function() {
        for (var i = 0; i < this.sources.length; i++)
            setPop(this.sources[i].targets, this);      
        this.sources.length = 0;
        this.invalidate();
        return this;
    };
            	    	
	Reactive.prototype.validate = function() {
		if (!this.isValid) {
            var sourceData = [];
            for (var i = 0; i < this.sources.length; i++) {
                sourceData[i] = this.sources[i].value();
            }
            var res = this.fn(sourceData, this.data);
            if (isExisty(res))
                this.data = res;
			this.isValid = true;
		}
		return this;
	};
	
	Reactive.prototype.invalidate = function() {
		this.isValid = false;
        for (var i = 0; i < this.targets.length; i++)
            if (this.targets[i].isValid)
                this.targets[i].invalidate();
		return this;
	};
    
    Reactive.prototype.value = function() {
        return this.validate().data;
    };
    
    
	grafar.Reactive = Reactive;
}(this));'use strict';
	
(function(global) {
	var _G = global.grafar,
		pool = _G.pool,
        Panel = _G.Panel,
        config = _G.config,
		
		_T = global.THREE,
		Object3D = _T.Object3D,
		PointCloud = _T.PointCloud,
		Line = _T.Line,
		LinePieces = _T.LinePieces,
		BufferGeometry = _T.BufferGeometry,
		BufferAttribute = _T.BufferAttribute,
        
        PointCloudMaterial = _T.PointCloudMaterial,
        LineBasicMaterial = _T.LineBasicMaterial,
        MeshLambertMaterial = _T.MeshLambertMaterial,
        DoubleSide = _T.DoubleSide;
	
    
    function matHelper(type, col) {
        var mat = null;
        if (type === 'point')
            mat = new PointCloudMaterial({
                size: config.particleRadius, 
                transparent: true, 
                opacity: 0.5, 
                sizeAttenuation: false
            });
        else if (type === 'line')
            mat = new LineBasicMaterial({
            });            
        else if (type === 'mesh')
            mat = new THREE.MeshPhongMaterial({
                side: DoubleSide,
                transparent: true,
                opacity: .7,
                //depthWrite: false
                //depthTest: false
            });
        mat.color = col;
        return mat;
    };
    
    function interleave(tab, buffer, itemsize) {
        itemsize = itemsize || tab.length;
        resizeBuffer(buffer, itemsize * tab[0].length);
        var target = buffer.array;
		for (var j = 0; j < tab.length; j++) {
            var colData = tab[j].array,
                len = tab[j].length;
            for (var i = 0, k = j; i < len; i++, k += itemsize)
                target[k] = colData[i];
		}
        for (var j = tab.length; j < itemsize; j++) {
            for (var i = 0, k = j; i < len; i++, k += itemsize)
                target[k] = 0;
		}
        buffer.needsUpdate = true;
    }
                
    function resizeBuffer(buffer, size) {
        var type = buffer.array.constructor;
        if (size !== buffer.array.length) {
            pool.push(buffer.array);
            buffer.array = pool.get(type, size);
            if (buffer.hasOwnProperty('length'))
                buffer.length = size;
        }
    };
    
    function InstanceGL(panel, col) {
        var pointGeometry = new BufferGeometry(),
			lineGeometry = new BufferGeometry(),
			meshGeometry = new BufferGeometry(),
			position = new BufferAttribute(pool.get(Float32Array, 0), 3),
			lineIndex = new BufferAttribute(pool.get(Uint32Array, 0), 2),
			meshIndex = new BufferAttribute(pool.get(Uint32Array, 0), 3),
			normal = new BufferAttribute(pool.get(Float32Array, 0), 3);
			
		pointGeometry.addAttribute('position', position);
		lineGeometry.addAttribute('position', position);
		meshGeometry.addAttribute('position', position);
		lineGeometry.addAttribute('index', lineIndex);
		meshGeometry.addAttribute('index', meshIndex);
		meshGeometry.addAttribute('normal', normal);
		
		var object = new Object3D();
        object.add(new PointCloud(pointGeometry, matHelper('point', col)))
            .add(new Line(lineGeometry, matHelper('line', col), LinePieces))
            .add(new THREE.Mesh(meshGeometry, matHelper('mesh', col)));
		panel.scene.add(object);
        
        this.panel = panel;
        this.position = position;
        this.segments = lineIndex;
        this.faces = meshIndex;
        this.normals = normal;
        this.object = object;
    };
    
    
	_G.InstanceGL = InstanceGL;
	_G.interleave = interleave;
	_G.resizeBuffer = resizeBuffer;
}(this));'use strict';
	
(function(global) {
	var _G = global.grafar;
    var Reactive = _G.Reactive;
    var pool = _G.pool;
    var incArray = _G.incArray;
    var timesArray = _G.timesArray;
    var resizeBuffer = _G.resizeBuffer;
    var firstMatch = _G.firstMathch;
	
    
	function pathGraph(srcDummy, target) {
		var edgeCount = target.pointCount - 1;
        resizeBuffer(target, edgeCount * 2);
        var data = target.array;
		for (var i = 0, j = 0; i < edgeCount; i++, j += 2) {
			data[j] = i;
			data[j + 1] = i + 1;
		}
	}
    
	function emptyGraph(srcDummy, target) {
        resizeBuffer(target, 0);
	}
    
    
    function cartesianGraphProd2(src, target) {
        var arr1 = src[0].array,
            edgeCount1 = src[0].length / 2,
            nodeCount1 = src[0].pointCount,
            arr2 = src[1].array,
            edgeCount2 = src[1].length / 2,
            nodeCount2 = src[1].pointCount;
        
        // reactive of course these should be!
        resizeBuffer(target, (edgeCount1 * nodeCount2 + edgeCount2 * nodeCount1) * 2);
        target.pointCount = nodeCount1 * nodeCount2;
        
        var pos = 0;
        var buffer1 = new Uint32Array(arr1);
        for (var i = 0; i < nodeCount2; i++, pos += 2 * edgeCount1) {
            target.array.set(buffer1, pos);
            incArray(buffer1, nodeCount1);
        }
        
        var buffer2 = new Uint32Array(arr2);
        timesArray(nodeCount1, buffer2);
        for (var i = 0; i < nodeCount1; i++, pos += 2 * edgeCount2) {
            target.array.set(buffer2, pos);
            incArray(buffer2, 1);
        }
    };
    
    function cartesianGraphProdN(src, target) {
        var totalEdgeCount = 0;
        var totalNodeCount = 1;
        for (var i = 0; i < src.length; i++) {
            var accum = src[i].length / 2;
            for (var j = 0; j < src.length; j++)
                if (i !== j)
                    accum *= src[j].nodeCount;
            totalEdgeCount += accum;
            totalNodeCount *= src[i].nodeCount;
        }
        target.buffer(totalEdgeCount * 2);
        target.nodeCount = totalNodeCount;
        
        var edgeCounter = 0;
        var nodeCounter = 1;
        var targetArray = target.array;
        for (var i = 0; i < src.length; i++) {
            var factor = src[i].value(),
                factorEdgeCount = src[i].length / 2,
                factorNodeCount = src[i].nodeCount;
            
            var buffer1 = new Uint32Array(arr1);//
            for (var i = 0; i < nodeCount2; i++, pos += 2 * edgeCount1) {
                targetArray.set(buffer1, pos);
                incArray(buffer1, nodeCount1);
            }
            
            var buffer2 = new Uint32Array(arr2);
            timesArray(nodeCount1, buffer2);
            for (var i = 0; i < nodeCount1; i++, pos += 2 * edgeCount2) {
                targetArray.set(buffer2, pos);
                incArray(buffer2, 1);
            }
        }
    };
    
    function cartesianGraphProd(src, target) {
        // this is a disgusting, leaky implementation
        var accum = {
            array: new Uint32Array(0),
            pointCount: 1,
            length: 0
        };
        for (var i = 0; i < src.length; i++)
            cartesianGraphProd2([accum, src[i]], accum);
        resizeBuffer(target, accum.length);
        target.array.set(accum.array);
        target.pointCount = accum.pointCount;
    };
    
    
    function makeFaces2(src, target) {
        var arr1 = src[0].array,
            edgeCount1 = src[0].length / 2,
            nodeCount1 = src[0].pointCount,
            arr2 = src[1].array,
            edgeCount2 = src[1].length / 2,
            nodeCount2 = src[1].pointCount;
        
        // reactive of course these should be!
        resizeBuffer(target, edgeCount1 * edgeCount2 * 2 * 3);
        var targArray = target.array;
        target.pointCount = nodeCount1 * nodeCount2;
        
        var pos = 0;
        var buffer1 = new Uint32Array(arr1);
        for (var i = 0; i < edgeCount1; i++) {
            for (var j = 0; j < edgeCount2; j++) {
                var e1from = arr1[2 * i];
                var e1to = arr1[2 * i + 1];
                var e2from = arr2[2 * j];
                var e2to = arr2[2 * j + 1];
                
				targArray[pos] = e1from + e2from  * nodeCount1;
				targArray[pos + 1] = e1from + e2to  * nodeCount1;
				targArray[pos + 2] = e1to + e2to  * nodeCount1;
				pos += 3;
				
				targArray[pos] = e1from + e2from  * nodeCount1;
				targArray[pos + 1] = e1to + e2to  * nodeCount1;
				targArray[pos + 2] = e1to + e2from  * nodeCount1;
				pos += 3;
            }
        }
    }
    
    function makeFaces(src, target) {
        // leads to wild results for non-2D objects
        var nonEmpty = src.filter(function(src) { return src.length !== 0; });
        if (nonEmpty.length !== 2) {
            resizeBuffer(target, 0);
            return;
        }
        var leftStretch = src.slice(0, src.indexOf(nonEmpty[0]))
            .reduce(function(pv, cv) {
                return pv * cv.pointCount;
            }, 1);
        var midStretch = src.slice(src.indexOf(nonEmpty[0]) + 1, src.indexOf(nonEmpty[1]))
            .reduce(function(pv, cv) {
                return pv * cv.pointCount;
            }, 1);
        var rightStretch = src.slice(src.indexOf(nonEmpty[1]) + 1)
            .reduce(function(pv, cv) {
                return pv * cv.pointCount;
            }, 1);
            
        var accum = {
            array: new Uint32Array(0),
            pointCount: leftStretch,
            length: 0
        };
        
        var edgeCount1 = nonEmpty[0].length / 2;
        var nodeCount1 = nonEmpty[0].pointCount;
        var buffer = new Uint32Array(nonEmpty[0].array);
        
        resizeBuffer(accum, edgeCount1 * leftStretch * 2);
        accum.pointCount = leftStretch * nodeCount1;
        
        timesArray(leftStretch, buffer);
        for (var i = 0, pos = 0; i < leftStretch; i++, pos += 2 * edgeCount1) {
            accum.array.set(buffer, pos);
            incArray(buffer, 1);
        }
        
        edgeCount1 = accum.length / 2;
        nodeCount1 = accum.pointCount;
        buffer = new Uint32Array(accum.array);
        
        resizeBuffer(accum, edgeCount1 * midStretch * 2);
        accum.pointCount = midStretch * nodeCount1;
        
        for (var i = 0, pos = 0; i < midStretch; i++, pos += 2 * edgeCount1) {
            accum.array.set(buffer, pos);
            incArray(buffer, nodeCount1);
        }
        
        makeFaces2([accum, nonEmpty[1]], accum);
        
        if (rightStretch !== 1) {
            var rightPad = {
                array: new Uint32Array(0),
                pointCount: rightStretch,
                length: 0
            };
            cartesianGraphProd([accum, rightPad], accum)
        }
        
        resizeBuffer(target, accum.length);
        target.array.set(accum.array);
        target.pointCount = accum.pointCount;
    };
    
    
    _G.emptyGraph = emptyGraph;
    _G.pathGraph = pathGraph;
    _G.cartesianGraphProd = cartesianGraphProd;
    _G.makeFaces = makeFaces;
}(this));'use strict';
	
(function(global) {
	var _G = global.grafar;
    var Reactive = _G.Reactive;
    var emptyGraph = _G.emptyGraph;
    var pathGraph = _G.pathGraph;
    var cartesianGraphProd = _G.cartesianGraphProd;
    var makeFaces = _G.makeFaces;
    var Buffer = _G.Buffer;
    var resizeBuffer = _G.resizeBuffer;
    var nunion = _G.nunion;
    var blockRepeat = _G.blockRepeat;
	
    
	function Graph() {
        this.data = new Reactive(new Buffer());
        this.edges = new Reactive({
            array: new Uint32Array(0),
            length: 0
        });
        this.faces = new Reactive({
            array: new Uint32Array(0),
            length: 0
        });
        this.base = new Reactive({parent: this, struct: []});
	};
    
    
    var baseOrder = [],
        baseComparator = function(a, b) {
            return baseOrder.indexOf(a) >= baseOrder.indexOf(b);
        };
    
    Graph.contextify = function(col, targetBase) {
        var temp = new Graph();
        temp.base = targetBase;
        temp.data.lift(function(par, out) {
            var data = par[0],
                colBase = par[1].struct,
                targetBase = par[2].struct,
                totalLength = targetBase.reduce(function(pv, cv) {
                    return pv * cv.data.value().length;
                }, 1),
                blockSize = 1,
                len = data.length;
            resizeBuffer(out, totalLength);
            var res = out.array;
            res.set(data.array);
            for (var i = 0; i < targetBase.length; i++) {
                if (colBase.indexOf(targetBase[i]) === -1) {
                    blockRepeat(
                        res, 
                        blockSize, 
                        Math.floor(len / blockSize),
                        targetBase[i].data.value().length,
                        res
                    );
                    len *= targetBase[i].data.value().length;
                }
                blockSize *= targetBase[i].data.value().length;
            }
        }).bind([col.data, col.base, temp.base]);
        return temp;
    };
    
    Graph.unify = function(cols) {
        var targetBase = new Reactive({
                parent: null,
                struct: []
            })
            .lift(Graph.baseTranslate)
            .bind(cols.map(function(col) {
                return col.base;
            }));
        var baseEdges = new Reactive([])
            .lift(function(src, targ) {
                return src[0].struct.map(function(base) {
                    return base.edges.value();
                });
            })
            .bind([targetBase]);
        var targetEdges = new Reactive({
                array: new Uint32Array(0),
                length: 0
            })
            .lift(function(arr, targ) {
                cartesianGraphProd(arr[0], targ);
            })
            .bind([baseEdges]);
        var targetFaces = new Reactive({
                array: new Uint32Array(0),
                length: 0
            })
            .lift(function(arr, targ) {
                makeFaces(arr[0], targ);
            })
            .bind([baseEdges]);
        return cols.map(function(col) {
            var unified = Graph.contextify(col, targetBase);
            unified.edges = targetEdges;
            unified.faces = targetFaces;
            return unified;
        });
    };
    
    Graph.baseTranslate = function(src, self) {
        if (src.length === 0) {
            baseOrder.push(self.parent);
            self.struct = [self.parent];
        } else {
            nunion(src.map(function(b) {
                return b.struct;
            }), self.struct);
            self.struct.sort(baseComparator);
        }
    };
    
    
	_G.GraphR = Graph;
}(this));'use strict';
	
(function(global) {
	var _G = global.grafar,
		Style = _G.Style,
		pool = _G.pool,
        isExisty = _G.isExisty,
        asArray = _G.asArray,
        nunion = _G.nunion,
        baseTranslate = _G.baseTranslate,
        pathGraph = _G.pathGraph,
        emptyGraph = _G.emptyGraph,
        cartesianGraphProd = _G.cartesianGraphProd,
        
        Graph = _G.GraphR,
        Reactive = _G.Reactive,
        Buffer = _G.Buffer,
        
        InstanceGL = _G.InstanceGL,
        interleave = _G.interleave,
        resizeBuffer = _G.resizeBuffer;
	
    
    function Object(opts) {
		this.datasets = {};
        this.projections = {};
        
		this.glinstances = [];
        //this.graphs = [];
		this.hidden = false;
        this.col = Style.randColor();
	}
		
	Object.prototype.pin = function(panel) {
        var instance = new InstanceGL(panel, this.col);
		this.glinstances.push(instance);
        // var graph = new Reactive().lift(function(proj){
            // interleave(proj, instance.position);
        // }).bind(this.project()) // won't work because of undefined unification
        //this.graphs.push(graph);
		return this;
	
	};
    
	Object.prototype.constrain = function(constraint) {
		var names = asArray(constraint.what || []),
			using = asArray(constraint.using || []),
			as = constraint.as || function() {},
			maxlen = constraint.maxlen || 40,
            discrete = constraint.discrete || false;
            
        var sources = this.project(using, true);
        // I only do this shit because project forces product
        // however, if it doesn't (force), memo would have to go into unify
        // which sucks even worse
        for (var i = 0; i < names.length; i++)
            if (!this.datasets.hasOwnProperty(names[i]))
                this.datasets[names[i]] = new Graph();
        
        var computation = new Graph();
        computation.data = new Reactive({
                buffers: names.map(function() { return new Buffer(); }), 
                length: 0
            })
            .lift(function(par, out) {
                var data = {};
                for (var i = 0; i < using.length; i++)
                    data[using[i]] = par[i].array;
                out.length = par.length === 0? maxlen: par[0].length;
                for (var i = 0; i < names.length; i++) {
                    resizeBuffer(out.buffers[i], out.length);
                    data[names[i]] = out.buffers[i].array;
                }
                as(data, out.length, {});
            })
            .bind(sources.map(function(src) {
                return src.data;
            }));
        if (sources.length === 0) {
            computation.edges.data.pointCount = maxlen;
            computation.edges.lift(discrete? emptyGraph: pathGraph);
        } else {
            computation.edges
                .lift(function(src, targ) {
                    // is clone stupid?
                    targ.pointCount = src[0].pointCount;
                    resizeBuffer(targ, src[0].length);
                    targ.array.set(src[0].array);
                })
                .bind(sources.map(function(src) {
                    return src.edges;
                }));
        }
        computation.base
            .lift(Graph.baseTranslate)
            .bind(sources.map(function(src) {
                return src.base;
            }));
            
        for (var i = 0; i < names.length; i++) {
            var dataset = this.datasets[names[i]];
            
            dataset.base = computation.base;
            dataset.edges = computation.edges;
            
            (function(iLoc) {
                dataset.data
                    .lift(function(src, target) {
                        target.length = src[0].buffers[iLoc].length;
                        target.array = src[0].buffers[iLoc].array;
                    })
                    .bind([computation.data]);
            }(i));                
        }

		return this;
	};
	
    Object.prototype.project = function(names, proxy) {
        var names = asArray(names || []);
        var namesHash = names.slice().sort().toString();
        if (!this.projections.hasOwnProperty(namesHash)) {
            var temp = [];
            for (var i = 0; i < names.length; i++) {
                if (!this.datasets.hasOwnProperty(names[i])) {
                    if (proxy)
                        this.datasets[using[i]] = new Graph();
                    else
                        throw new Error('cannot select undefined');
                }
                temp[i] = this.datasets[names[i]];
            }
            this.projections[namesHash] = Graph.unify(temp);
        }
		return this.projections[namesHash];
	};
    
	Object.prototype.refresh = function() {
		for (var i = 0; i < this.glinstances.length; i++) {
			var instance = this.glinstances[i];
			var tab = this.project(instance.panel._axes, false);
            if (tab.every(function(col) { return col.data.isValid; })) {
                console.log('othing to see here');
                return this;
            }
            
			interleave(tab.map(function(c) {return c.data.value()}), instance.position, 3);
			interleave([tab[0].edges.value()], instance.segments);
            interleave([tab[0].faces.value()], instance.faces);
            
            resizeBuffer(instance.normals, tab[0].data.value().length * 3);
            instance.object.children[2].geometry.computeVertexNormals();
            
            var hasEdges = tab[0].edges.value().length > 0;
            var hasFaces = tab[0].faces.value().length > 0;
			instance.object.children[0].visible = !(hasEdges || hasFaces);
			//instance.object.children[1].visible = true;
			//instance.object.children[2].visible = true;
		}
		return this;
	};
    
    Object.prototype.run = function() {
        this.refresh();
        window.requestAnimationFrame(this.run.bind(this));
        return this;
    };
    
	Object.prototype.hide = function(hide) {
		for (var i = 0; i < this.glinstances.length; i++)
			this.glinstances[i].object.visible = !hide;
		return this;
	};
        
    Object.prototype.reset = function() {return this;};
        
        
	_G.Object = Object;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		parserConfig = _G.config.grafaryaz,
		stats = _G.stats,
		
		seq = _G.seq,
		traceZeroSet = _G.traceZeroSet,
		
		haveCommon = _G.haveCommon,
		isExisty = _G.isExisty,
		firstMatch = _G.firstMatch,
		union = _G.union,
		unique = _G.unique,
		setMinus = _G.setMinus,
		
		Plan = _G.Plan;
	// locals
	
	var prefixes = {
		sin: 'Math.sin',
		cos: 'Math.cos',
		sqrt: 'Math.sqrt',
		tan: 'Math.tan',
		pow: 'grafar.pow',
		min: 'Math.min',
		max: 'Math.max',
		exp: 'Math.exp',
		abs: 'Math.abs',
		log: 'Math.log'
	},
		regexTemplates = {
			number: '[+-]?[0-9]*\\.?[0-9]+',
			integer: '[+-]?[0-9]*',
			id: '[A-Za-z_]+[A-Za-z0-9_]*',
			postVar: '(?=$|[\\)+\\-*\\/\\^\\,])',
			postFunc: '(?=\\()'
		};
	regexTemplates.literal = '(?:' + regexTemplates.number + '|' + regexTemplates.id + ')';
	var	parserRegex = {
			range: new RegExp('^\\[' + regexTemplates.number + '\\,' + regexTemplates.number + '\\]$'),
			set: new RegExp('^\\{(?:' + regexTemplates.number + ',)*' + regexTemplates.number + '\\}$'),
			id: new RegExp('^' + regexTemplates.id + '$|^$'), // includes empty string
			variables: new RegExp(regexTemplates.id + regexTemplates.postVar, 'g'),
			functions: new RegExp(regexTemplates.id + regexTemplates.postFunc, 'g'),
			literals: new RegExp(regexTemplates.literal, 'g'),
			signature: new RegExp('^' + regexTemplates.id + '\\((?:' + regexTemplates.id + ',)*' + regexTemplates.id + '\\)$'),
			call: new RegExp('^' + regexTemplates.id + '\\((?:' + regexTemplates.literal + ',)*' + regexTemplates.literal + '\\)$'),
			allCalls: new RegExp(regexTemplates.id + '\\((?:' + regexTemplates.literal + ',)*' + regexTemplates.literal + '\\)', 'g'), // call site this is called
			pds: new RegExp(regexTemplates.id + '\'' + regexTemplates.id, 'g'),
			//brackets: /[\[\]\{\}]/g,
			comparator: /(==|@=|<=|>=)/
		},
		compNames = (function() {
			var temp = {};
			temp['>='] = 'geq';
			temp['<='] = 'leq';
			temp['=='] = 'eq';
			temp['@='] = 'in';
			return temp;
		}());

        
	function MathSystem(str, targetRef) {
		var nodes = MathSystem.strToAtomicNodes(str);
		nodes = MathSystem.collapseNodes(nodes);
		this.plan = new Plan(nodes, targetRef);
	}

	MathSystem.formatFunction = function(str) {
		str = MathSystem.uncaret(str);
		str = str.replace(parserRegex.functions, function(match) {
			return prefixes.hasOwnProperty(match)? prefixes[match]: match;
		});	
		return str;		
	};
    
	MathSystem.extractVariables = function(str) {
		return (str.match(parserRegex.variables) || []).reduce(unique, []);
	};

	function inlineSubstitute(body, name, sub) {
		return body.replace(new RegExp('\\b' + name + '\\b', 'g'), '(' + sub + ')');
	}

	MathSystem.uncaret = function(str) {
		while (str.indexOf('^') !== -1) {
			var powI = str.indexOf('^'),
				i = powI - 1,
				nest = 0;
			if (str[i] === ')') {
				nest = 0;
				do {
					if (str[i] === ')')
						nest++;
					else if (str[i] === '(')
						nest--;
					i--;
				} while (nest !== 0);
			}
			while (i >= 0 && /[a-zA-Z0-9_.]/.test(str[i]))
				i--;
			var baseI = i + 1;
			
			i = powI + 1;
			while (i <= str.length - 1 && /[a-zA-Z0-9_.]/.test(str[i]))
				i++;
				
			if (str[i] === '(') {
				nest = 0;
				do {
					if (str[i] === '(')
						nest++;
					else if (str[i] === ')')
						nest--;
					i++;
				} while (nest !== 0);
			}
			var expI = i;

			var prefix = str.substring(0, baseI),
				base = str.substring(baseI, powI),
				exponent = str.substring(powI + 1, expI),
				suffix = str.substring(expI, str.length);
			str = prefix + 'pow(' + base + ',' + exponent + ')' + suffix;
		}
		return str;
	};
	

	function ductParse(str, params, section) {
		var fixed = setMinus(Object.keys(params).filter(function(r) {return !Array.isArray(params[r])}), ['x', 'y', 'z']),
			isSection = isExisty(section);
		for (var i = 0; i < fixed.length; i++)
			str = inlineSubstitute(str, fixed[i], params[fixed[i]]);
		str = str.replace(/<[^=]/g, '<=').replace(/>[^=]/g, '>=');
		var constraints = str.split('&');
		for (var i = 0; i < constraints.length; i++) {
			var sides = constraints[i].split(/(<=|>=|==)/g);
			if (sides[1] === '==')
				constraints[i] = 'abs(' + sides[0] + '-(' + sides[2] + '))';
			else if (sides[1] === '>=')
				constraints[i] = sides[2] + '- (' + sides[0] + ')';
			else if (sides[1] === '<=')
				constraints[i] = sides[0] + '- (' + sides[2] + ')';
			constraints[i] = MathSystem.formatFunction(constraints[i]);
		}
		var body = constraints.length > 1? 'Math.max(' + constraints.join(',') + ')': constraints[0],
			vars = union(MathSystem.extractVariables(body), ['x', 'y', 'z']);
		for (var i = 0; i < vars.length; i++)
			body = inlineSubstitute(body, vars[i], 'pt[' + i + ']');
		var coref = new Function('pt', 'return ' + body);
		var f = traceZeroSet(coref, vars);
		return f;
	}
	
	// exports
	
	_G.MathSystem = MathSystem;
	_G.ductParse = ductParse;
	_G.Node = Node;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		Detector = global.Detector,
		pool = _G.pool,
		THREE = global.THREE,
		Stats = global.Stats,
		config = _G.config,
		makeID = _G.makeID,
		Observable = _G.Observable,
		isExisty = _G.isExisty;
	
	var panels = _G.panels,
		renderMode = Detector.webgl? 'webgl': Detector.canvas? 'canvas': 'none',
		Renderer = {
			webgl: THREE.WebGLRenderer.bind(null, {antialias: config.antialias}),
			canvas: THREE.CanvasRenderer,
			none: Error.bind(null, 'no 3D support')
		}[renderMode];
			
	function Panel(container, opts) {	
		opts = opts || {};		
		panels.push(this);
		
		container = container || config.container;
		var containerStyle = window.getComputedStyle(container),
			bgcolor = containerStyle.backgroundColor,
		    width = parseInt(containerStyle.width),
		    height = parseInt(containerStyle.height);

		this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 500);
		this.camera.position.set(-4, 4, 5);
		
		this.scene = new THREE.Scene();
		var pointLight = new THREE.PointLight(0xFFFFFF);
		pointLight.position.set( 0, 5, 7 );
		this.scene.add( pointLight );
		
		this.renderer = new Renderer();
		this.renderer.antialias = config.antialias;
		this.renderer.setSize(width, height);
		this.renderer.setClearColor(bgcolor, 1);
		
		this.controls = new THREE.OrbitControls(this.camera, container);
		
		this.setAxes(config.axes);
		
		this.setContainer(container);
		
		if (config.debug) {
			this.stats = new Stats();
			this.stats.domElement.style.position = 'absolute';
			this.stats.domElement.style.top = '0px';
			container.appendChild(this.stats.domElement);
		} else {
			this.stats = {update: function() {}};
		}
	};
	
	Panel.prototype.setContainer = function(container) {
		container.appendChild(this.renderer.domElement);
		return this;
	};
	
	Panel.prototype.update = function() {
		this.controls.update();
		this.renderer.render(this.scene, this.camera);
		this.stats.update();
	};

	Panel.prototype.drawAxes = function (len) {
		if (!isExisty(this.axisObject)) {
			this.axisObject = new THREE.Object3D();
						
			var axisGeometry = new THREE.BufferGeometry();
			axisGeometry.addAttribute('position', new THREE.BufferAttribute(pool.get(Float32Array, 18), 3));
			this.axisObject.add(new THREE.Line(
				axisGeometry, 
				new THREE.LineBasicMaterial({color: 0x888888}), 
				THREE.LinePieces
			));
			
			for (var i = 0; i < 3; i++) {
				var geometry = new THREE.BufferGeometry();
				geometry.addAttribute('position', new THREE.BufferAttribute(axisGeometry.getAttribute('position').array.subarray(i * 6 + 3, i * 6 + 6), 3));
				this.axisObject.add(new THREE.PointCloud(geometry, new THREE.PointCloudMaterial()));
			}
			
			this.scene.add(this.axisObject);
		}		
		
		if (isExisty(len))
			setAxisGeometry(this.axisObject.children[0].geometry.getAttribute('position').array, len);
		this._axes.forEach(function(axisId, i) {
			drawTextLabel(this.axisObject.children[i + 1].material, axisId || '');
		}.bind(this));
		
		return this;
	};
		
	Panel.prototype.setAxes = function(axisNames) {
		axisNames = axisNames.filter(function(n) {
				return typeof(n) === 'string';
			})
			.slice(0, 3);
		
		this._axes = [axisNames[1], axisNames[2], axisNames[0]];
		if (axisNames.length === 3) {
			this.controls.noRotate = false;
			this.controls.noPan = false;
			this.camera.up.set(0, 1, 0);
		} else if (axisNames.length === 2) {
			this.controls.noRotate = true;
			this.controls.noPan = true;
			this.camera.position.set(0, 5); // preserve distance or something, maybe smooth rotation
			this.camera.up.set(1, 0, 0);
		} else {
			// 1 or >3 axes leads to what?
		}
			
		this.drawAxes(2);
		// Object.getOwnPropertyNames(_G.graphs).forEach(function(graphName) {
			// var graph = _G.graphs[graphName];
			// if (graph.panel === this)
				// graph.setPanel(this);
		// }.bind(this));
		
		return this;
	};
		
	
	function setAxisGeometry(posArray, length) {
		for (var i = 0; i < 3; i++) {
			posArray[7 * i] = -length;
			posArray[7 * i + 3] = length;
		}
		return posArray;
	}
	
	function drawTextLabel(mat, str) {
		var memo = {},
			fontSizePx = 21,
			baselineOffsetPx = 0.15 * fontSizePx;
		
		drawTextLabel = function(mat, str) {
			if (!memo.hasOwnProperty(str)) {
				var canvas = document.createElement('canvas'),
					context = canvas.getContext('2d');
				
				context.font = 'Lighter ' + fontSizePx + 'px Helvetica';
				
				var computedSize = Math.ceil(Math.max(2 * (fontSizePx + baselineOffsetPx), context.measureText(str).width));
				canvas.width = computedSize;
				canvas.height = computedSize;
				
				context.font = 'Lighter ' + fontSizePx + 'px Helvetica';
				context.fillStyle = '#444444';
				context.textAlign = 'center';
				context.fillText(str, Math.floor(computedSize / 2), Math.ceil(computedSize / 2) - baselineOffsetPx);
				 
				memo[str] = {
					size: computedSize, /*config.labelSize / fontSizePx * */
					map: new THREE.Texture(canvas)
				};
			}
			 
			var memoEntry = memo[str]; 
			mat.size = memoEntry.size;
			mat.transparent = true;
			mat.sizeAttenuation = false;
			mat.map = memoEntry.map.clone();
			mat.map.needsUpdate = true;
			
			return mat;
		};
		return drawTextLabel(mat, str);
	}
	
	
	_G.Panel = Panel;
}(this));'use strict';

(function(global) {
	var _G = global.grafar,
		makeID = _G.makeID,
		isExisty = _G.isExisty;
	
	var objects = {};
	
	function Observable() {
		var id = makeID(objects);
		objects[id] = true;
		this.id = id;
		
		this.handlers = {};
	}
	
	Observable.prototype.on = function(event, handler) {
		if (!isExisty(this.handlers[event]))
			this.handlers[event] = [];
		this.handlers[event].push(handler);
		return this;
	};
	
	Observable.prototype.off = function(event, handler) {
		var handlers = this.handlers[event];
		if (isExisty(handlers)) {
			var index = handlers.indexOf(handler);
			if (index !== -1)
				handlers.splice(index, 1);
		}
		return this;
	};
	
	Observable.prototype.dispatch = function(event) {
		if (isExisty(this.handlers[event])) {
			var queue = this.handlers[event];
			for (var i = 0; i < queue.length; i++)
				queue[i]();
		}
		return this;
	};
	
	
	// export
	
	_G.objects = objects;
	_G.Observable = Observable;
}(this));(function(global) {	
	var _G = global.grafar || (global.grafar = {});
	
	var demos = {		
		explicit: [
			'sqrt(x^2+y^2)',
			'exp(x*y)',
			'cos(exp(x*y))',
			'exp(-1/(x^2+y^2))',
			'(x^3+y^4)^(1/3)',
			'sin(exp(x+y)+(x^3+y^3)^(1/3))',
			'cos((x*y)^(1/3))',
			'x*sqrt(.3+(y^2)^(1/3))',
			'x*abs(y)+y*abs(x)',
			'(2*y/(x^2+y^2-1))/5',
			'(x^2*y^2)/(x^2*y^2+(x-y)^2)',
			'(x*y*(x-y)^2)/(x+y)^2',
			'(x^2+y^2)^(x^2*y^2)',
			'x^2*y/(y^2+x^4)',
			'x^2+y^2-x*y',
			'x^2-(y-1)^2',
			'x*y*log(x^2+y^2)',
			'(x*y)^(1/3)',
			'(x+y)/3*sin(5/x)*sin(5/y)',
			'sin(x*y)/x',
			'x^y'
		],
		implicit2: [
			'x^2+y^2=0',
			'1/(x^2+y^2)=0'
		],
		implicit3: [
		],
		systems:[
		],
		vectorFields: [
		],
		paramCurves2: [
		],
		paramCurves3: [
		],
		paramSurfs: [
		],
		complex: [
		]
	};

	
	// export
	
	_G.demos = demos;
}(this));(function(global) {
	var _G = global.grafar || (global.grafar = {});
	
	_G.UI = {};
		
	// grafar-chainable constructor
	_G.ui = function(mockup, opts) {
		opts = opts || {};
		var container = opts.container || document;
		if (typeof(container) === 'string')
			container = document.getElementById(container);
		if (mockup instanceof Array)
			mockup = {init: mockup, type: 'group'};
		
		this.UI.push(mockup, container);
		
		return this;
	};
	
	// methods
	_G.UI.push = function(mockup, parent) {
		var id = mockup.id || _G.makeID(this),
			type = mockup.type,
			col = mockup.col,
			init = mockup.init,
			bind = mockup.bind,
			temp;
		
		if (type === 'label')
			temp = new Label(init);
		else if (type === 'br')
			temp = document.createElement('br');
		else if (type === 'select')
			temp = new Select(init);
		else if (type === 'checkbox')
			temp = new Checkbox(init);
		else if (type === 'number')
			temp = new NumberInput(init, mockup.step);
		else if (type === 'vector')
			temp = new VectorInput(init, bind);
		else if (type === 'text')
			temp = new TextInput(init);
		else if (type === 'group')
			temp = new Group(init);
			
		parent.appendChild(temp);
		if (col) temp.style.background = col;
		if (bind) temp.addEventListener('change', bind);
		this[id] = temp;
		temp.id = id;
		
		return _G.UI;
	}
		
	_G.UI.hide = function(id) {
		if (this[id])
			this[id].style.display = 'none';
		return _G.UI;
	}
	
	_G.UI.show = function(id) {
		if (this[id])
			this[id].style.display = 'block';
		return _G.UI;
	}
	
	_G.UI.remove = function(id) {
		if (this[id]) {
			this[id].parentNode.removeChild(this[id]);
			while (this[id].firstChild)
				if (this[id].firstChild.id)
					_G.UI.remove(this[id].firstChild.id);
				else
					this[id].removeChild(this[id].firstChild);
			this[id] = null;
		}
		return _G.UI;
	}
		
	// field constructors
	function NumberInput(val, step) {
		step = step || .03;
		var temp = document.createElement('input');		
		temp.className = 'num';
		temp.size = '4';
		temp.type = 'number';
		temp.value = val;
		temp.step = step;
		temp.onkeypress = function(key) {
			if (key.keyCode === 40) {
				temp.value = parseFloat(temp.value) - step;
				triggerEvent('change', temp);
			} else if (key.keyCode === 38) {
				temp.value = (parseFloat(temp.value) + step).toFixed(2);
				triggerEvent('change', temp);
			}
		};
		temp.__defineGetter__('val', function() {
			return parseFloat(this.value);
		});
		return temp;
	};
	
	function VectorInput(values, bind) {
		var temp = document.createElement('div'),
		    inputReference = [];
		temp.style['display'] = 'inline';
		temp.appendChild(document.createTextNode('('));
		for (var j = 0; j < values.length; j++) {
			if (j)
				temp.appendChild(document.createTextNode(', '));
			var temp2 = NumberInput(values[j], .03);
			if (bind)
				temp2.addEventListener('change', bind);
			temp.appendChild(temp2);
			inputReference.push(temp2);
		}
		temp.appendChild(document.createTextNode(')'));
		temp.__defineGetter__('val', function() {
			return inputReference.map(function(e) {return parseFloat(e.value)});
		});
		return temp;
	}
	
	function TextInput(text) {
		var temp = document.createElement('input');
		temp.type = 'text';
		temp.value = init;
		return temp;
	}
	
	function Group(elements) {
		var temp = document.createElement('ul');
		temp.className = 'grafar_ui_subpanel';
		for (var j = 0; j < elements.length; j++)
			_G.UI.push(elements[j], temp);
		return temp;
	}
	
	function Label(val) {
		var temp = document.createElement('span');
		temp.className = 'grafar_ui_label';	
		temp.appendChild(document.createTextNode(val));
		temp.__defineSetter__('val', function(newText) {
			this.nodeValue = newText;
		});
		return temp;
	}
	
	function Select(options) {		
		var temp = document.createElement('select');
		for (var j = 0; j < options.length; j++)
			temp.options[j] = new Option(options[j]);
		temp.__defineGetter__('val', function() {
			return this.selectedIndex;
		});
		return temp;
	}
	
	function Checkbox(val) {
		var temp = document.createElement('input');
		temp.type = 'checkbox';
		temp.checked = val;
		temp.__defineGetter__('val', function() {
			return this.checked;
		});
		return temp;
	}
	
	// utilities
	function triggerEvent(type, element) {
		if ('createEvent' in document) {
			var evt = document.createEvent("HTMLEvents");
			evt.initEvent(type, false, true);
			element.dispatchEvent(evt);
		} else {
			element.fireEvent('on' + type);
		}
	}
}(this));