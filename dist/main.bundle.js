!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=80)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,n(47))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(0),o=n(28),i=n(2),s=n(31),a=n(32),c=n(48),u=o("wks"),f=r.Symbol,l=c?f:f&&f.withoutSetter||s;t.exports=function(t){return i(u,t)||(a&&i(f,t)?u[t]=f[t]:u[t]=l("Symbol."+t)),u[t]}},function(t,e,n){var r=n(6),o=n(7),i=n(11);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(6),o=n(29),i=n(5),s=n(17),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=s(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){"use strict";var r=n(10),o=n(46),i=n(23),s=n(37),a=n(55),c=s.set,u=s.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){c(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=u(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(45),o=n(27);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(0),o=n(4),i=n(2),s=n(16),a=n(38),c=n(37),u=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,e,n,a){var c,u=!!a&&!!a.unsafe,h=!!a&&!!a.enumerable,p=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),(c=f(n)).source||(c.source=l.join("string"==typeof e?e:""))),t!==r?(u?!p&&t[e]&&(h=!0):delete t[e],h?t[e]=n:o(t,e,n)):h?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||a(this)}))},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=!1},function(t,e,n){var r=n(0),o=n(16),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(0),o=n(4);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){var r=n(8);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(53),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(28),o=n(31),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(25),o=n(12),i=n(66);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){var r={};r[n(3)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(0),o=n(68),i=n(9),s=n(4),a=n(3),c=a("iterator"),u=a("toStringTag"),f=i.values;for(var l in o){var h=r[l],p=h&&h.prototype;if(p){if(p[c]!==f)try{s(p,c,f)}catch(t){p[c]=f}if(p[u]||s(p,u,l),o[l])for(var v in i)if(p[v]!==i[v])try{s(p,v,i[v])}catch(t){p[v]=i[v]}}}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(14),o=n(15);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(6),o=n(1),i=n(30);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(0),o=n(8),i=r.document,s=o(i)&&o(i.createElement);t.exports=function(t){return s?i.createElement(t):{}}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r,o=n(5),i=n(49),s=n(20),a=n(19),c=n(52),u=n(30),f=n(22),l=f("IE_PROTO"),h=function(){},p=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=u("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=s.length;n--;)delete v.prototype[s[n]];return v()};a[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(h.prototype=o(t),n=new h,h.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(2),o=n(10),i=n(51).indexOf,s=n(19);t.exports=function(t,e){var n,a=o(t),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(u,n)||u.push(n));return u}},function(t,e,n){var r=n(18),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(18),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r,o,i,s=n(54),a=n(0),c=n(8),u=n(4),f=n(2),l=n(15),h=n(22),p=n(19),v=a.WeakMap;if(s){var d=l.state||(l.state=new v),y=d.get,g=d.has,x=d.set;r=function(t,e){return e.facade=t,x.call(d,t,e),e},o=function(t){return y.call(d,t)||{}},i=function(t){return g.call(d,t)}}else{var b=h("state");p[b]=!0,r=function(t,e){return e.facade=t,u(t,b,e),e},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(15),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(0),o=n(40).f,i=n(4),s=n(12),a=n(16),c=n(57),u=n(61);t.exports=function(t,e){var n,f,l,h,p,v=t.target,d=t.global,y=t.stat;if(n=d?r:y?r[v]||a(v,{}):(r[v]||{}).prototype)for(f in e){if(h=e[f],l=t.noTargetGet?(p=o(n,f))&&p.value:n[f],!u(d?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof h==typeof l)continue;c(h,l)}(t.sham||l&&l.sham)&&i(h,"sham",!0),s(n,f,h,t)}}},function(t,e,n){var r=n(6),o=n(56),i=n(11),s=n(10),a=n(17),c=n(2),u=n(29),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=s(t),e=a(e,!0),u)try{return f(t,e)}catch(t){}if(c(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){"use strict";var r,o,i,s=n(1),a=n(42),c=n(4),u=n(2),f=n(3),l=n(14),h=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0);var v=null==r||s((function(){var t={};return r[h].call(t)!==t}));v&&(r={}),l&&!v||u(r,h)||c(r,h,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r=n(2),o=n(43),i=n(22),s=n(63),a=i("IE_PROTO"),c=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){var r=n(27);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(7).f,o=n(2),i=n(3)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(1),o=n(13),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(3),o=n(33),i=n(7),s=r("unscopables"),a=Array.prototype;null==a[s]&&i.f(a,s,{configurable:!0,value:o(null)}),t.exports=function(t){a[s][t]=!0}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(32);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(6),o=n(7),i=n(5),s=n(50);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=s(e),a=r.length,c=0;a>c;)o.f(t,n=r[c++],e[n]);return t}},function(t,e,n){var r=n(34),o=n(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(10),o=n(35),i=n(36),s=function(t){return function(e,n,s){var a,c=r(e),u=o(c.length),f=i(s,u);if(t&&n!=n){for(;u>f;)if((a=c[f++])!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,n){var r=n(21);t.exports=r("document","documentElement")},function(t,e,n){var r=n(0);t.exports=r},function(t,e,n){var r=n(0),o=n(38),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r=n(39),o=n(62),i=n(42),s=n(64),a=n(44),c=n(4),u=n(12),f=n(3),l=n(14),h=n(23),p=n(41),v=p.IteratorPrototype,d=p.BUGGY_SAFARI_ITERATORS,y=f("iterator"),g=function(){return this};t.exports=function(t,e,n,f,p,x,b){o(n,e,f);var S,m,w,O=function(t){if(t===p&&k)return k;if(!d&&t in P)return P[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},M=e+" Iterator",j=!1,P=t.prototype,T=P[y]||P["@@iterator"]||p&&P[p],k=!d&&T||O(p),A="Array"==e&&P.entries||T;if(A&&(S=i(A.call(new t)),v!==Object.prototype&&S.next&&(l||i(S)===v||(s?s(S,v):"function"!=typeof S[y]&&c(S,y,g)),a(S,M,!0,!0),l&&(h[M]=g))),"values"==p&&T&&"values"!==T.name&&(j=!0,k=function(){return T.call(this)}),l&&!b||P[y]===k||c(P,y,k),h[e]=k,p)if(m={values:O("values"),keys:x?k:O("keys"),entries:O("entries")},b)for(w in m)(d||j||!(w in P))&&u(P,w,m[w]);else r({target:e,proto:!0,forced:d||j},m);return m}},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(2),o=n(58),i=n(40),s=n(7);t.exports=function(t,e){for(var n=o(e),a=s.f,c=i.f,u=0;u<n.length;u++){var f=n[u];r(t,f)||a(t,f,c(e,f))}}},function(t,e,n){var r=n(21),o=n(59),i=n(60),s=n(5);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(s(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(34),o=n(20).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=a[s(t)];return n==u||n!=c&&("function"==typeof e?r(e):!!e)},s=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",u=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(41).IteratorPrototype,o=n(33),i=n(11),s=n(44),a=n(23),c=function(){return this};t.exports=function(t,e,n){var u=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),s(t,u,!1,!0),a[u]=c,t}},function(t,e,n){var r=n(1);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(5),o=n(65);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e,n){var r=n(8);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){"use strict";var r=n(25),o=n(67);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(25),o=n(13),i=n(3)("toStringTag"),s="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:s?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(39),o=n(36),i=n(18),s=n(35),a=n(43),c=n(70),u=n(72),f=n(73),l=n(76),h=f("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,d=Math.min;r({target:"Array",proto:!0,forced:!h||!p},{splice:function(t,e){var n,r,f,l,h,p,y=a(this),g=s(y.length),x=o(t,g),b=arguments.length;if(0===b?n=r=0:1===b?(n=0,r=g-x):(n=b-2,r=d(v(i(e),0),g-x)),g+n-r>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(f=c(y,r),l=0;l<r;l++)(h=x+l)in y&&u(f,l,y[h]);if(f.length=r,n<r){for(l=x;l<g-r;l++)p=l+n,(h=l+r)in y?y[p]=y[h]:delete y[p];for(l=g;l>g-r+n;l--)delete y[l-1]}else if(n>r)for(l=g-r;l>x;l--)p=l+n-1,(h=l+r-1)in y?y[p]=y[h]:delete y[p];for(l=0;l<n;l++)y[l+x]=arguments[l+2];return y.length=g-r+n,f}})},function(t,e,n){var r=n(8),o=n(71),i=n(3)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(17),o=n(7),i=n(11);t.exports=function(t,e,n){var s=r(e);s in t?o.f(t,s,i(0,n)):t[s]=n}},function(t,e,n){var r=n(1),o=n(3),i=n(74),s=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r,o,i=n(0),s=n(75),a=i.process,c=a&&a.versions,u=c&&c.v8;u?o=(r=u.split("."))[0]+r[1]:s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){var r=n(21);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(6),o=n(1),i=n(2),s=Object.defineProperty,a={},c=function(t){throw t};t.exports=function(t,e){if(i(a,t))return a[t];e||(e={});var n=[][t],u=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:c,l=i(e,1)?e[1]:void 0;return a[t]=!!n&&!o((function(){if(u&&!r)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,f,l)}))}},function(t,e,n){"use strict";var r=n(12),o=n(5),i=n(1),s=n(78),a=RegExp.prototype,c=a.toString,u=i((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),f="toString"!=c.name;(u||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?s.call(t):n)}),{unsafe:!0})},function(t,e,n){"use strict";var r=n(5);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){},function(t,e,n){"use strict";n.r(e),n.d(e,"variable",(function(){return l}));var r=function(){function t(){this.visible=!0,this.x=l.canvasWidth/2,this.y=l.canvasHeight/2,this.movingForward=!1,this.speed=.1,this.velX=0,this.velY=0,this.rotateSpeed=.001,this.radius=15,this.angle=0,this.strokeColor="white",this.noseX=l.canvasWidth/2+15,this.noseY=l.canvasHeight/2}var e=t.prototype;return e.Rotate=function(t){this.angle+=this.rotateSpeed*t},e.Update=function(){var t=this.angle/Math.PI*180;this.movingForward&&(this.velX+=Math.cos(t)*this.speed/1.5,this.velY+=Math.sin(t)*this.speed/1.5),this.x<this.radius&&(this.x=canvas.width),this.x>canvas.width&&(this.x=this.radius),this.y<this.radius&&(this.y=canvas.height),this.y>canvas.height&&(this.y=this.radius),this.velX*=.99,this.velY*=.99,this.x-=this.velX,this.y-=this.velY},e.Draw=function(){l.context.strokeStyle=this.strokeColor,l.context.beginPath();var t=2*Math.PI/3,e=this.angle/Math.PI*180;this.noseX=this.x-this.radius*Math.cos(e),this.noseY=this.y-this.radius*Math.sin(e);for(var n=0;n<3;n++)l.context.lineTo(this.x-this.radius*Math.cos(t*n+e),this.y-this.radius*Math.sin(t*n+e));l.context.closePath(),l.context.stroke()},t}(),o=function(){function t(t,e,n,r,o){this.visible=!0,this.x=t||Math.floor(Math.random()*l.canvasWidth),this.y=e||Math.floor(Math.random()*l.canvasHeight),this.speed=3,this.radius=n||50,this.angle=Math.floor(359*Math.random()),this.strokeColor="white",this.collisionRadius=o||46,this.level=r||1}var e=t.prototype;return e.Update=function(){var t=this.angle/Math.PI*180;this.x+=Math.cos(t)*this.speed/2,this.y+=Math.sin(t)*this.speed/2,this.x<this.radius&&(this.x=canvas.width),this.x>canvas.width&&(this.x=this.radius),this.y<this.radius&&(this.y=canvas.height),this.y>canvas.height&&(this.y=this.radius)},e.Draw=function(){l.context.beginPath();for(var t=2*Math.PI/6,e=this.angle/Math.PI*180,n=0;n<6;n++)l.context.lineTo(this.x-this.radius*Math.cos(t*n+e),this.y-this.radius*Math.sin(t*n+e));l.context.closePath(),l.context.stroke()},t}();n(9),n(24),n(26);function i(t){l.keys[t.keyCode]=!0}var s=function(){function t(t){this.visible=!0,this.x=l.ship.noseX,this.y=l.ship.noseY,this.angle=t,this.height=4,this.width=4,this.speed=5,this.velX=0,this.velY=0}var e=t.prototype;return e.Update=function(){var t=this.angle/Math.PI*180;this.x-=Math.cos(t)*this.speed,this.y-=Math.sin(t)*this.speed},e.Draw=function(){l.context.fillStyle="white",l.context.fillRect(this.x,this.y,this.width,this.height)},t}();function a(t){l.keys[t.keyCode]=!1,32===t.keyCode&&l.bullets.push(new s(l.ship.angle))}function c(){var t=1150,e=[[9,9],[-9,9]];l.context.strokeStyle="white";for(var n=0;n<l.lives;n++){l.context.beginPath(),l.context.moveTo(t,10);for(var r=0;r<e.length;r++)l.context.lineTo(t+e[r][0],10+e[r][1]);l.context.closePath(),l.context.stroke(),t-=30}}n(69),n(77);function u(t,e,n,r,o,i){var s,a;return s=t-r,a=e-o,n+i>Math.sqrt(s*s+a*a)}function f(){document.querySelector(".restart-btn");if(l.ship.movingForward=l.keys[87],l.keys[68]&&l.ship.Rotate(1),l.keys[65]&&l.ship.Rotate(-1),l.context.clearRect(0,0,l.canvasWidth,l.canvasHeight),l.context.fillStyle="white",l.context.font="21px Arial",l.context.fillText("SCORE : "+l.score.toString(),20,35),l.lives<=0&&(document.body.removeEventListener("keydown",i),document.body.removeEventListener("keyup",a),l.ship.visible=!1,l.context.fillStyle="white",l.context.font="50px Arial",l.context.fillText("GAME OVER",l.canvasWidth/2-150,l.canvasHeight/2),alert("GAME OVER, YOU SCORE IS: "+l.score),document.location.reload(),clearInterval(interval)),0===l.asteroids.length){l.ship.x=l.canvasWidth/2,l.ship.y=l.canvasHeight/2,l.ship.velX=0,l.ship.velY=0;for(var t=0;t<4;t++){var e=new o;e.speed+=.3,l.asteroids.push(e)}}if(c(),0!==l.asteroids.length)for(var n=0;n<l.asteroids.length;n++)u(l.ship.x,l.ship.y,11,l.asteroids[n].x,l.asteroids[n].y,l.asteroids[n].collisionRadius)&&(l.ship.x=l.canvasWidth/2,l.ship.y=l.canvasHeight/2,l.ship.velX=0,l.ship.velY=0,l.lives-=1);if(0!==l.asteroids.length&&0!=l.bullets.length)t:for(var r=0;r<l.asteroids.length;r++)for(var s=0;s<l.bullets.length;s++)if(u(l.bullets[s].x,l.bullets[s].y,3,l.asteroids[r].x,l.asteroids[r].y,l.asteroids[r].collisionRadius)){1===l.asteroids[r].level?(l.asteroids.push(new o(l.asteroids[r].x-5,l.asteroids[r].y-5,25,2,22)),l.asteroids.push(new o(l.asteroids[r].x+5,l.asteroids[r].y+5,25,2,22))):2===l.asteroids[r].level&&(l.asteroids.push(new o(l.asteroids[r].x-5,l.asteroids[r].y-5,15,3,12)),l.asteroids.push(new o(l.asteroids[r].x+5,l.asteroids[r].y+5,15,3,12))),l.asteroids.splice(r,1),l.bullets.splice(s,1),l.score+=20;break t}if(l.ship.visible&&(l.ship.Update(),l.ship.Draw()),0!==l.bullets.length)for(var h=0;h<l.bullets.length;h++)l.bullets[h].Update(),l.bullets[h].Draw();if(0!==l.asteroids.length)for(var p=0;p<l.asteroids.length;p++)l.asteroids[p].Update(),l.asteroids[p].Draw(p);l.highScore=Math.max(l.score,l.highScore),localStorage.setItem(l.localStorageName,l.highScore),l.context.font="21px Arial",l.context.fillText("HIGH SCORE : "+l.highScore.toString(),20,70),requestAnimationFrame(f)}n(79);var l={canvas:canvas,canvasWidth:1200,canvasHeight:600,keys:[],bullets:[],asteroids:[],score:0,lives:5,highScore:0,localStorageName:"HighScore"};document.addEventListener("DOMContentLoaded",(function(){l.canvas=document.querySelector("canvas"),l.context=canvas.getContext("2d"),canvas.width=l.canvasWidth,canvas.height=l.canvasHeight,l.context.fillStyle="black",l.context.fillRect(0,0,canvas.width,canvas.height),l.ship=new r;for(var t=0;t<2;t++)l.asteroids.push(new o);document.body.addEventListener("keydown",i),document.body.addEventListener("keyup",a),null===localStorage.getItem(l.localStorageName)?l.highScore=0:l.highScore=localStorage.getItem(l.localStorageName),f(),c()}))}]);
//# sourceMappingURL=main.bundle.js.map