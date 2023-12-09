var Yo=(i,e)=>()=>(e||i((e={exports:{}}).exports,e),e.exports);var tm=Yo((fs,Wo)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();(function(i,e){typeof fs=="object"&&typeof Wo<"u"?e(fs):typeof define=="function"&&define.amd?define(["exports"],e):e(i.dat={})})(globalThis,function(i){function e(u,m){var S=u.__state.conversionName.toString(),v=Math.round(u.r),D=Math.round(u.g),P=Math.round(u.b),B=u.a,j=Math.round(u.h),ce=u.s.toFixed(1),xe=u.v.toFixed(1);if(m||S==="THREE_CHAR_HEX"||S==="SIX_CHAR_HEX"){for(var Oe=u.hex.toString(16);Oe.length<6;)Oe="0"+Oe;return"#"+Oe}return S==="CSS_RGB"?"rgb("+v+","+D+","+P+")":S==="CSS_RGBA"?"rgba("+v+","+D+","+P+","+B+")":S==="HEX"?"0x"+u.hex.toString(16):S==="RGB_ARRAY"?"["+v+","+D+","+P+"]":S==="RGBA_ARRAY"?"["+v+","+D+","+P+","+B+"]":S==="RGB_OBJ"?"{r:"+v+",g:"+D+",b:"+P+"}":S==="RGBA_OBJ"?"{r:"+v+",g:"+D+",b:"+P+",a:"+B+"}":S==="HSV_OBJ"?"{h:"+j+",s:"+ce+",v:"+xe+"}":S==="HSVA_OBJ"?"{h:"+j+",s:"+ce+",v:"+xe+",a:"+B+"}":"unknown format"}function t(u,m,S){Object.defineProperty(u,m,{get:function(){return this.__state.space==="RGB"?this.__state[m]:(le.recalculateRGB(this,m,S),this.__state[m])},set:function(v){this.__state.space!=="RGB"&&(le.recalculateRGB(this,m,S),this.__state.space="RGB"),this.__state[m]=v}})}function n(u,m){Object.defineProperty(u,m,{get:function(){return this.__state.space==="HSV"?this.__state[m]:(le.recalculateHSV(this),this.__state[m])},set:function(S){this.__state.space!=="HSV"&&(le.recalculateHSV(this),this.__state.space="HSV"),this.__state[m]=S}})}function r(u){if(u==="0"||I.isUndefined(u))return 0;var m=u.match(Le);return I.isNull(m)?0:parseFloat(m[1])}function a(u){var m=u.toString();return m.indexOf(".")>-1?m.length-m.indexOf(".")-1:0}function o(u,m){var S=Math.pow(10,m);return Math.round(u*S)/S}function s(u,m,S,v,D){return v+(u-m)/(S-m)*(D-v)}function l(u,m,S,v){u.style.background="",I.each(Ve,function(D){u.style.cssText+="background: "+D+"linear-gradient("+m+", "+S+" 0%, "+v+" 100%); "})}function c(u){u.style.background="",u.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",u.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}function h(u,m,S){var v=document.createElement("li");return m&&v.appendChild(m),S?u.__ul.insertBefore(v,S):u.__ul.appendChild(v),u.onResize(),v}function f(u){G.unbind(window,"resize",u.__resizeHandler),u.saveToLocalStorageIfPossible&&G.unbind(window,"unload",u.saveToLocalStorageIfPossible)}function p(u,m){var S=u.__preset_select[u.__preset_select.selectedIndex];S.innerHTML=m?S.value+"*":S.value}function g(u,m,S){if(S.__li=m,S.__gui=u,I.extend(S,{options:function(P){if(arguments.length>1){var B=S.__li.nextElementSibling;return S.remove(),M(u,S.object,S.property,{before:B,factoryArgs:[I.toArray(arguments)]})}if(I.isArray(P)||I.isObject(P)){var j=S.__li.nextElementSibling;return S.remove(),M(u,S.object,S.property,{before:j,factoryArgs:[P]})}},name:function(P){return S.__li.firstElementChild.firstElementChild.innerHTML=P,S},listen:function(){return S.__gui.listen(S),S},remove:function(){return S.__gui.remove(S),S}}),S instanceof Ie){var v=new we(S.object,S.property,{min:S.__min,max:S.__max,step:S.__step});I.each(["updateDisplay","onChange","onFinishChange","step"],function(P){var B=S[P],j=v[P];S[P]=v[P]=function(){var ce=Array.prototype.slice.call(arguments);return j.apply(v,ce),B.apply(S,ce)}}),G.addClass(m,"has-slider"),S.domElement.insertBefore(v.domElement,S.domElement.firstElementChild)}else if(S instanceof we){var D=function(P){if(I.isNumber(S.__min)&&I.isNumber(S.__max)){var B=S.__li.firstElementChild.firstElementChild.innerHTML,j=S.__gui.__listening.indexOf(S)>-1;S.remove();var ce=M(u,S.object,S.property,{before:S.__li.nextElementSibling,factoryArgs:[S.__min,S.__max,S.__step]});return ce.name(B),j&&ce.listen(),ce}return P};S.min=I.compose(D,S.min),S.max=I.compose(D,S.max)}else S instanceof $e?(G.bind(m,"click",function(){G.fakeEvent(S.__checkbox,"click")}),G.bind(S.__checkbox,"click",function(P){P.stopPropagation()})):S instanceof Be?(G.bind(m,"click",function(){G.fakeEvent(S.__button,"click")}),G.bind(m,"mouseover",function(){G.addClass(S.__button,"hover")}),G.bind(m,"mouseout",function(){G.removeClass(S.__button,"hover")})):S instanceof Qe&&(G.addClass(m,"color"),S.updateDisplay=I.compose(function(P){return m.style.borderLeftColor=S.__color.toString(),P},S.updateDisplay),S.updateDisplay());S.setValue=I.compose(function(P){return u.getRoot().__preset_select&&S.isModified()&&p(u.getRoot(),!0),P},S.setValue)}function x(u,m){var S=u.getRoot(),v=S.__rememberedObjects.indexOf(m.object);if(v!==-1){var D=S.__rememberedObjectIndecesToControllers[v];if(D===void 0&&(D={},S.__rememberedObjectIndecesToControllers[v]=D),D[m.property]=m,S.load&&S.load.remembered){var P=S.load.remembered,B=void 0;if(P[u.preset])B=P[u.preset];else{if(!P[E])return;B=P[E]}if(B[v]&&B[v][m.property]!==void 0){var j=B[v][m.property];m.initialValue=j,m.setValue(j)}}}}function M(u,m,S,v){if(m[S]===void 0)throw new Error('Object "'+m+'" has no property "'+S+'"');var D=void 0;if(v.color)D=new Qe(m,S);else{var P=[m,S].concat(v.factoryArgs);D=Ke.apply(u,P)}v.before instanceof oe&&(v.before=v.before.__li),x(u,D),G.addClass(D.domElement,"c");var B=document.createElement("span");G.addClass(B,"property-name"),B.innerHTML=D.property;var j=document.createElement("div");j.appendChild(B),j.appendChild(D.domElement);var ce=h(u,j,v.before);return G.addClass(ce,pe.CLASS_CONTROLLER_ROW),D instanceof Qe?G.addClass(ce,"color"):G.addClass(ce,Se(D.getValue())),g(u,ce,D),u.__controllers.push(D),D}function _(u,m){return document.location.href+"."+m}function d(u,m,S){var v=document.createElement("option");v.innerHTML=m,v.value=m,u.__preset_select.appendChild(v),S&&(u.__preset_select.selectedIndex=u.__preset_select.length-1)}function C(u,m){m.style.display=u.useLocalStorage?"block":"none"}function y(u){var m=u.__save_row=document.createElement("li");G.addClass(u.domElement,"has-save"),u.__ul.insertBefore(m,u.__ul.firstChild),G.addClass(m,"save-row");var S=document.createElement("span");S.innerHTML="&nbsp;",G.addClass(S,"button gears");var v=document.createElement("span");v.innerHTML="Save",G.addClass(v,"button"),G.addClass(v,"save");var D=document.createElement("span");D.innerHTML="New",G.addClass(D,"button"),G.addClass(D,"save-as");var P=document.createElement("span");P.innerHTML="Revert",G.addClass(P,"button"),G.addClass(P,"revert");var B=u.__preset_select=document.createElement("select");if(u.load&&u.load.remembered?I.each(u.load.remembered,function(Oe,ze){d(u,ze,ze===u.preset)}):d(u,E,!1),G.bind(B,"change",function(){for(var Oe=0;Oe<u.__preset_select.length;Oe++)u.__preset_select[Oe].innerHTML=u.__preset_select[Oe].value;u.preset=this.value}),m.appendChild(B),m.appendChild(S),m.appendChild(v),m.appendChild(D),m.appendChild(P),q){var j=document.getElementById("dg-local-explain"),ce=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block",localStorage.getItem(_(u,"isLocal"))==="true"&&ce.setAttribute("checked","checked"),C(u,j),G.bind(ce,"change",function(){u.useLocalStorage=!u.useLocalStorage,C(u,j)})}var xe=document.getElementById("dg-new-constructor");G.bind(xe,"keydown",function(Oe){!Oe.metaKey||Oe.which!==67&&Oe.keyCode!==67||ge.hide()}),G.bind(S,"click",function(){xe.innerHTML=JSON.stringify(u.getSaveObject(),void 0,2),ge.show(),xe.focus(),xe.select()}),G.bind(v,"click",function(){u.save()}),G.bind(D,"click",function(){var Oe=prompt("Enter a new preset name.");Oe&&u.saveAs(Oe)}),G.bind(P,"click",function(){u.revert()})}function R(u){function m(P){return P.preventDefault(),u.width+=D-P.clientX,u.onResize(),D=P.clientX,!1}function S(){G.removeClass(u.__closeButton,pe.CLASS_DRAG),G.unbind(window,"mousemove",m),G.unbind(window,"mouseup",S)}function v(P){return P.preventDefault(),D=P.clientX,G.addClass(u.__closeButton,pe.CLASS_DRAG),G.bind(window,"mousemove",m),G.bind(window,"mouseup",S),!1}var D=void 0;u.__resize_handle=document.createElement("div"),I.extend(u.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),G.bind(u.__resize_handle,"mousedown",v),G.bind(u.__closeButton,"mousedown",v),u.domElement.insertBefore(u.__resize_handle,u.domElement.firstElementChild)}function U(u,m){u.domElement.style.width=m+"px",u.__save_row&&u.autoPlace&&(u.__save_row.style.width=m+"px"),u.__closeButton&&(u.__closeButton.style.width=m+"px")}function H(u,m){var S={};return I.each(u.__rememberedObjects,function(v,D){var P={},B=u.__rememberedObjectIndecesToControllers[D];I.each(B,function(j,ce){P[ce]=m?j.initialValue:j.getValue()}),S[D]=P}),S}function N(u){for(var m=0;m<u.__preset_select.length;m++)u.__preset_select[m].value===u.preset&&(u.__preset_select.selectedIndex=m)}function ne(u){u.length!==0&&st.call(window,function(){ne(u)}),I.each(u,function(m){m.updateDisplay()})}var A=Array.prototype.forEach,L=Array.prototype.slice,I={BREAK:{},extend:function(u){return this.each(L.call(arguments,1),function(m){(this.isObject(m)?Object.keys(m):[]).forEach((function(S){this.isUndefined(m[S])||(u[S]=m[S])}).bind(this))},this),u},defaults:function(u){return this.each(L.call(arguments,1),function(m){(this.isObject(m)?Object.keys(m):[]).forEach((function(S){this.isUndefined(u[S])&&(u[S]=m[S])}).bind(this))},this),u},compose:function(){var u=L.call(arguments);return function(){for(var m=L.call(arguments),S=u.length-1;S>=0;S--)m=[u[S].apply(this,m)];return m[0]}},each:function(u,m,S){if(u){if(A&&u.forEach&&u.forEach===A)u.forEach(m,S);else if(u.length===u.length+0){var v=void 0,D=void 0;for(v=0,D=u.length;v<D;v++)if(v in u&&m.call(S,u[v],v)===this.BREAK)return}else for(var P in u)if(m.call(S,u[P],P)===this.BREAK)return}},defer:function(u){setTimeout(u,0)},debounce:function(u,m,S){var v=void 0;return function(){var D=this,P=arguments,B=S||!v;clearTimeout(v),v=setTimeout(function(){v=null,S||u.apply(D,P)},m),B&&u.apply(D,P)}},toArray:function(u){return u.toArray?u.toArray():L.call(u)},isUndefined:function(u){return u===void 0},isNull:function(u){return u===null},isNaN:function(u){function m(S){return u.apply(this,arguments)}return m.toString=function(){return u.toString()},m}(function(u){return isNaN(u)}),isArray:Array.isArray||function(u){return u.constructor===Array},isObject:function(u){return u===Object(u)},isNumber:function(u){return u===u+0},isString:function(u){return u===u+""},isBoolean:function(u){return u===!1||u===!0},isFunction:function(u){return Object.prototype.toString.call(u)==="[object Function]"}},he=[{litmus:I.isString,conversions:{THREE_CHAR_HEX:{read:function(u){var m=u.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return m!==null&&{space:"HEX",hex:parseInt("0x"+m[1].toString()+m[1].toString()+m[2].toString()+m[2].toString()+m[3].toString()+m[3].toString(),0)}},write:e},SIX_CHAR_HEX:{read:function(u){var m=u.match(/^#([A-F0-9]{6})$/i);return m!==null&&{space:"HEX",hex:parseInt("0x"+m[1].toString(),0)}},write:e},CSS_RGB:{read:function(u){var m=u.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return m!==null&&{space:"RGB",r:parseFloat(m[1]),g:parseFloat(m[2]),b:parseFloat(m[3])}},write:e},CSS_RGBA:{read:function(u){var m=u.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return m!==null&&{space:"RGB",r:parseFloat(m[1]),g:parseFloat(m[2]),b:parseFloat(m[3]),a:parseFloat(m[4])}},write:e}}},{litmus:I.isNumber,conversions:{HEX:{read:function(u){return{space:"HEX",hex:u,conversionName:"HEX"}},write:function(u){return u.hex}}}},{litmus:I.isArray,conversions:{RGB_ARRAY:{read:function(u){return u.length===3&&{space:"RGB",r:u[0],g:u[1],b:u[2]}},write:function(u){return[u.r,u.g,u.b]}},RGBA_ARRAY:{read:function(u){return u.length===4&&{space:"RGB",r:u[0],g:u[1],b:u[2],a:u[3]}},write:function(u){return[u.r,u.g,u.b,u.a]}}}},{litmus:I.isObject,conversions:{RGBA_OBJ:{read:function(u){return!!(I.isNumber(u.r)&&I.isNumber(u.g)&&I.isNumber(u.b)&&I.isNumber(u.a))&&{space:"RGB",r:u.r,g:u.g,b:u.b,a:u.a}},write:function(u){return{r:u.r,g:u.g,b:u.b,a:u.a}}},RGB_OBJ:{read:function(u){return!!(I.isNumber(u.r)&&I.isNumber(u.g)&&I.isNumber(u.b))&&{space:"RGB",r:u.r,g:u.g,b:u.b}},write:function(u){return{r:u.r,g:u.g,b:u.b}}},HSVA_OBJ:{read:function(u){return!!(I.isNumber(u.h)&&I.isNumber(u.s)&&I.isNumber(u.v)&&I.isNumber(u.a))&&{space:"HSV",h:u.h,s:u.s,v:u.v,a:u.a}},write:function(u){return{h:u.h,s:u.s,v:u.v,a:u.a}}},HSV_OBJ:{read:function(u){return!!(I.isNumber(u.h)&&I.isNumber(u.s)&&I.isNumber(u.v))&&{space:"HSV",h:u.h,s:u.s,v:u.v}},write:function(u){return{h:u.h,s:u.s,v:u.v}}}}}],_e=void 0,V=void 0,Q=function(){V=!1;var u=arguments.length>1?I.toArray(arguments):arguments[0];return I.each(he,function(m){if(m.litmus(u))return I.each(m.conversions,function(S,v){if(_e=S.read(u),V===!1&&_e!==!1)return V=_e,_e.conversionName=v,_e.conversion=S,I.BREAK}),I.BREAK}),V},se=void 0,ee={hsv_to_rgb:function(u,m,S){var v=Math.floor(u/60)%6,D=u/60-Math.floor(u/60),P=S*(1-m),B=S*(1-D*m),j=S*(1-(1-D)*m),ce=[[S,j,P],[B,S,P],[P,S,j],[P,B,S],[j,P,S],[S,P,B]][v];return{r:255*ce[0],g:255*ce[1],b:255*ce[2]}},rgb_to_hsv:function(u,m,S){var v=Math.min(u,m,S),D=Math.max(u,m,S),P=D-v,B=void 0,j=void 0;return D===0?{h:NaN,s:0,v:0}:(j=P/D,B=u===D?(m-S)/P:m===D?2+(S-u)/P:4+(u-m)/P,(B/=6)<0&&(B+=1),{h:360*B,s:j,v:D/255})},rgb_to_hex:function(u,m,S){var v=this.hex_with_component(0,2,u);return v=this.hex_with_component(v,1,m),v=this.hex_with_component(v,0,S)},component_from_hex:function(u,m){return u>>8*m&255},hex_with_component:function(u,m,S){return S<<(se=8*m)|u&~(255<<se)}},Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},ae=function(u,m){if(!(u instanceof m))throw new TypeError("Cannot call a class as a function")},re=function(){function u(m,S){for(var v=0;v<S.length;v++){var D=S[v];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(m,D.key,D)}}return function(m,S,v){return S&&u(m.prototype,S),v&&u(m,v),m}}(),W=function u(m,S,v){m===null&&(m=Function.prototype);var D=Object.getOwnPropertyDescriptor(m,S);if(D===void 0){var P=Object.getPrototypeOf(m);return P===null?void 0:u(P,S,v)}if("value"in D)return D.value;var B=D.get;if(B!==void 0)return B.call(v)},K=function(u,m){if(typeof m!="function"&&m!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof m);u.prototype=Object.create(m&&m.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),m&&(Object.setPrototypeOf?Object.setPrototypeOf(u,m):u.__proto__=m)},fe=function(u,m){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!m||typeof m!="object"&&typeof m!="function"?u:m},le=function(){function u(){if(ae(this,u),this.__state=Q.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return re(u,[{key:"toString",value:function(){return e(this)}},{key:"toHexString",value:function(){return e(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),u}();le.recalculateRGB=function(u,m,S){if(u.__state.space==="HEX")u.__state[m]=ee.component_from_hex(u.__state.hex,S);else{if(u.__state.space!=="HSV")throw new Error("Corrupted color state");I.extend(u.__state,ee.hsv_to_rgb(u.__state.h,u.__state.s,u.__state.v))}},le.recalculateHSV=function(u){var m=ee.rgb_to_hsv(u.r,u.g,u.b);I.extend(u.__state,{s:m.s,v:m.v}),I.isNaN(m.h)?I.isUndefined(u.__state.h)&&(u.__state.h=0):u.__state.h=m.h},le.COMPONENTS=["r","g","b","h","s","v","hex","a"],t(le.prototype,"r",2),t(le.prototype,"g",1),t(le.prototype,"b",0),n(le.prototype,"h"),n(le.prototype,"s"),n(le.prototype,"v"),Object.defineProperty(le.prototype,"a",{get:function(){return this.__state.a},set:function(u){this.__state.a=u}}),Object.defineProperty(le.prototype,"hex",{get:function(){return!this.__state.space!=="HEX"&&(this.__state.hex=ee.rgb_to_hex(this.r,this.g,this.b)),this.__state.hex},set:function(u){this.__state.space="HEX",this.__state.hex=u}});var oe=function(){function u(m,S){ae(this,u),this.initialValue=m[S],this.domElement=document.createElement("div"),this.object=m,this.property=S,this.__onChange=void 0,this.__onFinishChange=void 0}return re(u,[{key:"onChange",value:function(m){return this.__onChange=m,this}},{key:"onFinishChange",value:function(m){return this.__onFinishChange=m,this}},{key:"setValue",value:function(m){return this.object[this.property]=m,this.__onChange&&this.__onChange.call(this,m),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),u}(),Fe={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},je={};I.each(Fe,function(u,m){I.each(u,function(S){je[S]=m})});var Le=/(\d+(\.\d+)?)px/,G={makeSelectable:function(u,m){u!==void 0&&u.style!==void 0&&(u.onselectstart=m?function(){return!1}:function(){},u.style.MozUserSelect=m?"auto":"none",u.style.KhtmlUserSelect=m?"auto":"none",u.unselectable=m?"on":"off")},makeFullscreen:function(u,m,S){var v=S,D=m;I.isUndefined(D)&&(D=!0),I.isUndefined(v)&&(v=!0),u.style.position="absolute",D&&(u.style.left=0,u.style.right=0),v&&(u.style.top=0,u.style.bottom=0)},fakeEvent:function(u,m,S,v){var D=S||{},P=je[m];if(!P)throw new Error("Event type "+m+" not supported.");var B=document.createEvent(P);switch(P){case"MouseEvents":var j=D.x||D.clientX||0,ce=D.y||D.clientY||0;B.initMouseEvent(m,D.bubbles||!1,D.cancelable||!0,window,D.clickCount||1,0,0,j,ce,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var xe=B.initKeyboardEvent||B.initKeyEvent;I.defaults(D,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),xe(m,D.bubbles||!1,D.cancelable,window,D.ctrlKey,D.altKey,D.shiftKey,D.metaKey,D.keyCode,D.charCode);break;default:B.initEvent(m,D.bubbles||!1,D.cancelable||!0)}I.defaults(B,v),u.dispatchEvent(B)},bind:function(u,m,S,v){var D=v||!1;return u.addEventListener?u.addEventListener(m,S,D):u.attachEvent&&u.attachEvent("on"+m,S),G},unbind:function(u,m,S,v){var D=v||!1;return u.removeEventListener?u.removeEventListener(m,S,D):u.detachEvent&&u.detachEvent("on"+m,S),G},addClass:function(u,m){if(u.className===void 0)u.className=m;else if(u.className!==m){var S=u.className.split(/ +/);S.indexOf(m)===-1&&(S.push(m),u.className=S.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return G},removeClass:function(u,m){if(m)if(u.className===m)u.removeAttribute("class");else{var S=u.className.split(/ +/),v=S.indexOf(m);v!==-1&&(S.splice(v,1),u.className=S.join(" "))}else u.className=void 0;return G},hasClass:function(u,m){return new RegExp("(?:^|\\s+)"+m+"(?:\\s+|$)").test(u.className)||!1},getWidth:function(u){var m=getComputedStyle(u);return r(m["border-left-width"])+r(m["border-right-width"])+r(m["padding-left"])+r(m["padding-right"])+r(m.width)},getHeight:function(u){var m=getComputedStyle(u);return r(m["border-top-width"])+r(m["border-bottom-width"])+r(m["padding-top"])+r(m["padding-bottom"])+r(m.height)},getOffset:function(u){var m=u,S={left:0,top:0};if(m.offsetParent)do S.left+=m.offsetLeft,S.top+=m.offsetTop,m=m.offsetParent;while(m);return S},isActive:function(u){return u===document.activeElement&&(u.type||u.href)}},$e=function(u){function m(S,v){ae(this,m);var D=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v)),P=D;return D.__prev=D.getValue(),D.__checkbox=document.createElement("input"),D.__checkbox.setAttribute("type","checkbox"),G.bind(D.__checkbox,"change",function(){P.setValue(!P.__prev)},!1),D.domElement.appendChild(D.__checkbox),D.updateDisplay(),D}return K(m,oe),re(m,[{key:"setValue",value:function(S){var v=W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"setValue",this).call(this,S);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),v}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"updateDisplay",this).call(this)}}]),m}(),Ye=function(u){function m(S,v,D){ae(this,m);var P=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v)),B=D,j=P;if(P.__select=document.createElement("select"),I.isArray(B)){var ce={};I.each(B,function(xe){ce[xe]=xe}),B=ce}return I.each(B,function(xe,Oe){var ze=document.createElement("option");ze.innerHTML=Oe,ze.setAttribute("value",xe),j.__select.appendChild(ze)}),P.updateDisplay(),G.bind(P.__select,"change",function(){var xe=this.options[this.selectedIndex].value;j.setValue(xe)}),P.domElement.appendChild(P.__select),P}return K(m,oe),re(m,[{key:"setValue",value:function(S){var v=W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"setValue",this).call(this,S);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),v}},{key:"updateDisplay",value:function(){return G.isActive(this.__select)?this:(this.__select.value=this.getValue(),W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"updateDisplay",this).call(this))}}]),m}(),Y=function(u){function m(S,v){function D(){B.setValue(B.__input.value)}ae(this,m);var P=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v)),B=P;return P.__input=document.createElement("input"),P.__input.setAttribute("type","text"),G.bind(P.__input,"keyup",D),G.bind(P.__input,"change",D),G.bind(P.__input,"blur",function(){B.__onFinishChange&&B.__onFinishChange.call(B,B.getValue())}),G.bind(P.__input,"keydown",function(j){j.keyCode===13&&this.blur()}),P.updateDisplay(),P.domElement.appendChild(P.__input),P}return K(m,oe),re(m,[{key:"updateDisplay",value:function(){return G.isActive(this.__input)||(this.__input.value=this.getValue()),W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"updateDisplay",this).call(this)}}]),m}(),rt=function(u){function m(S,v,D){ae(this,m);var P=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v)),B=D||{};return P.__min=B.min,P.__max=B.max,P.__step=B.step,I.isUndefined(P.__step)?P.initialValue===0?P.__impliedStep=1:P.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(P.initialValue))/Math.LN10))/10:P.__impliedStep=P.__step,P.__precision=a(P.__impliedStep),P}return K(m,oe),re(m,[{key:"setValue",value:function(S){var v=S;return this.__min!==void 0&&v<this.__min?v=this.__min:this.__max!==void 0&&v>this.__max&&(v=this.__max),this.__step!==void 0&&v%this.__step!=0&&(v=Math.round(v/this.__step)*this.__step),W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"setValue",this).call(this,v)}},{key:"min",value:function(S){return this.__min=S,this}},{key:"max",value:function(S){return this.__max=S,this}},{key:"step",value:function(S){return this.__step=S,this.__impliedStep=S,this.__precision=a(S),this}}]),m}(),we=function(u){function m(S,v,D){function P(){xe.__onFinishChange&&xe.__onFinishChange.call(xe,xe.getValue())}function B(ze){var de=Oe-ze.clientY;xe.setValue(xe.getValue()+de*xe.__impliedStep),Oe=ze.clientY}function j(){G.unbind(window,"mousemove",B),G.unbind(window,"mouseup",j),P()}ae(this,m);var ce=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v,D));ce.__truncationSuspended=!1;var xe=ce,Oe=void 0;return ce.__input=document.createElement("input"),ce.__input.setAttribute("type","text"),G.bind(ce.__input,"change",function(){var ze=parseFloat(xe.__input.value);I.isNaN(ze)||xe.setValue(ze)}),G.bind(ce.__input,"blur",function(){P()}),G.bind(ce.__input,"mousedown",function(ze){G.bind(window,"mousemove",B),G.bind(window,"mouseup",j),Oe=ze.clientY}),G.bind(ce.__input,"keydown",function(ze){ze.keyCode===13&&(xe.__truncationSuspended=!0,this.blur(),xe.__truncationSuspended=!1,P())}),ce.updateDisplay(),ce.domElement.appendChild(ce.__input),ce}return K(m,rt),re(m,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():o(this.getValue(),this.__precision),W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"updateDisplay",this).call(this)}}]),m}(),Ie=function(u){function m(S,v,D,P,B){function j(We){We.preventDefault();var ut=de.__background.getBoundingClientRect();return de.setValue(s(We.clientX,ut.left,ut.right,de.__min,de.__max)),!1}function ce(){G.unbind(window,"mousemove",j),G.unbind(window,"mouseup",ce),de.__onFinishChange&&de.__onFinishChange.call(de,de.getValue())}function xe(We){var ut=We.touches[0].clientX,tt=de.__background.getBoundingClientRect();de.setValue(s(ut,tt.left,tt.right,de.__min,de.__max))}function Oe(){G.unbind(window,"touchmove",xe),G.unbind(window,"touchend",Oe),de.__onFinishChange&&de.__onFinishChange.call(de,de.getValue())}ae(this,m);var ze=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v,{min:D,max:P,step:B})),de=ze;return ze.__background=document.createElement("div"),ze.__foreground=document.createElement("div"),G.bind(ze.__background,"mousedown",function(We){document.activeElement.blur(),G.bind(window,"mousemove",j),G.bind(window,"mouseup",ce),j(We)}),G.bind(ze.__background,"touchstart",function(We){We.touches.length===1&&(G.bind(window,"touchmove",xe),G.bind(window,"touchend",Oe),xe(We))}),G.addClass(ze.__background,"slider"),G.addClass(ze.__foreground,"slider-fg"),ze.updateDisplay(),ze.__background.appendChild(ze.__foreground),ze.domElement.appendChild(ze.__background),ze}return K(m,rt),re(m,[{key:"updateDisplay",value:function(){var S=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*S+"%",W(m.prototype.__proto__||Object.getPrototypeOf(m.prototype),"updateDisplay",this).call(this)}}]),m}(),Be=function(u){function m(S,v,D){ae(this,m);var P=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v)),B=P;return P.__button=document.createElement("div"),P.__button.innerHTML=D===void 0?"Fire":D,G.bind(P.__button,"click",function(j){return j.preventDefault(),B.fire(),!1}),G.addClass(P.__button,"button"),P.domElement.appendChild(P.__button),P}return K(m,oe),re(m,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),m}(),Qe=function(u){function m(S,v){function D(tt){Oe(tt),G.bind(window,"mousemove",Oe),G.bind(window,"touchmove",Oe),G.bind(window,"mouseup",B),G.bind(window,"touchend",B)}function P(tt){ze(tt),G.bind(window,"mousemove",ze),G.bind(window,"touchmove",ze),G.bind(window,"mouseup",j),G.bind(window,"touchend",j)}function B(){G.unbind(window,"mousemove",Oe),G.unbind(window,"touchmove",Oe),G.unbind(window,"mouseup",B),G.unbind(window,"touchend",B),xe()}function j(){G.unbind(window,"mousemove",ze),G.unbind(window,"touchmove",ze),G.unbind(window,"mouseup",j),G.unbind(window,"touchend",j),xe()}function ce(){var tt=Q(this.value);tt!==!1?(We.__color.__state=tt,We.setValue(We.__color.toOriginal())):this.value=We.__color.toString()}function xe(){We.__onFinishChange&&We.__onFinishChange.call(We,We.__color.toOriginal())}function Oe(tt){tt.type.indexOf("touch")===-1&&tt.preventDefault();var wt=We.__saturation_field.getBoundingClientRect(),Mt=tt.touches&&tt.touches[0]||tt,Sn=Mt.clientX,$t=Mt.clientY,qt=(Sn-wt.left)/(wt.right-wt.left),zt=1-($t-wt.top)/(wt.bottom-wt.top);return zt>1?zt=1:zt<0&&(zt=0),qt>1?qt=1:qt<0&&(qt=0),We.__color.v=zt,We.__color.s=qt,We.setValue(We.__color.toOriginal()),!1}function ze(tt){tt.type.indexOf("touch")===-1&&tt.preventDefault();var wt=We.__hue_field.getBoundingClientRect(),Mt=1-((tt.touches&&tt.touches[0]||tt).clientY-wt.top)/(wt.bottom-wt.top);return Mt>1?Mt=1:Mt<0&&(Mt=0),We.__color.h=360*Mt,We.setValue(We.__color.toOriginal()),!1}ae(this,m);var de=fe(this,(m.__proto__||Object.getPrototypeOf(m)).call(this,S,v));de.__color=new le(de.getValue()),de.__temp=new le(0);var We=de;de.domElement=document.createElement("div"),G.makeSelectable(de.domElement,!1),de.__selector=document.createElement("div"),de.__selector.className="selector",de.__saturation_field=document.createElement("div"),de.__saturation_field.className="saturation-field",de.__field_knob=document.createElement("div"),de.__field_knob.className="field-knob",de.__field_knob_border="2px solid ",de.__hue_knob=document.createElement("div"),de.__hue_knob.className="hue-knob",de.__hue_field=document.createElement("div"),de.__hue_field.className="hue-field",de.__input=document.createElement("input"),de.__input.type="text",de.__input_textShadow="0 1px 1px ",G.bind(de.__input,"keydown",function(tt){tt.keyCode===13&&ce.call(this)}),G.bind(de.__input,"blur",ce),G.bind(de.__selector,"mousedown",function(){G.addClass(this,"drag").bind(window,"mouseup",function(){G.removeClass(We.__selector,"drag")})}),G.bind(de.__selector,"touchstart",function(){G.addClass(this,"drag").bind(window,"touchend",function(){G.removeClass(We.__selector,"drag")})});var ut=document.createElement("div");return I.extend(de.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),I.extend(de.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:de.__field_knob_border+(de.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),I.extend(de.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),I.extend(de.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),I.extend(ut.style,{width:"100%",height:"100%",background:"none"}),l(ut,"top","rgba(0,0,0,0)","#000"),I.extend(de.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),c(de.__hue_field),I.extend(de.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:de.__input_textShadow+"rgba(0,0,0,0.7)"}),G.bind(de.__saturation_field,"mousedown",D),G.bind(de.__saturation_field,"touchstart",D),G.bind(de.__field_knob,"mousedown",D),G.bind(de.__field_knob,"touchstart",D),G.bind(de.__hue_field,"mousedown",P),G.bind(de.__hue_field,"touchstart",P),de.__saturation_field.appendChild(ut),de.__selector.appendChild(de.__field_knob),de.__selector.appendChild(de.__saturation_field),de.__selector.appendChild(de.__hue_field),de.__hue_field.appendChild(de.__hue_knob),de.domElement.appendChild(de.__input),de.domElement.appendChild(de.__selector),de.updateDisplay(),de}return K(m,oe),re(m,[{key:"updateDisplay",value:function(){var S=Q(this.getValue());if(S!==!1){var v=!1;I.each(le.COMPONENTS,function(B){if(!I.isUndefined(S[B])&&!I.isUndefined(this.__color.__state[B])&&S[B]!==this.__color.__state[B])return v=!0,{}},this),v&&I.extend(this.__color.__state,S)}I.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var D=this.__color.v<.5||this.__color.s>.5?255:0,P=255-D;I.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+D+","+D+","+D+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,l(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),I.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+D+","+D+","+D+")",textShadow:this.__input_textShadow+"rgba("+P+","+P+","+P+",.7)"})}}]),m}(),Ve=["-moz-","-o-","-webkit-","-ms-",""],Ge={load:function(u,m){var S=m||document,v=S.createElement("link");v.type="text/css",v.rel="stylesheet",v.href=u,S.getElementsByTagName("head")[0].appendChild(v)},inject:function(u,m){var S=m||document,v=document.createElement("style");v.type="text/css",v.innerHTML=u;var D=S.getElementsByTagName("head")[0];try{D.appendChild(v)}catch{}}},Ke=function(u,m){var S=u[m];return I.isArray(arguments[2])||I.isObject(arguments[2])?new Ye(u,m,arguments[2]):I.isNumber(S)?I.isNumber(arguments[2])&&I.isNumber(arguments[3])?I.isNumber(arguments[4])?new Ie(u,m,arguments[2],arguments[3],arguments[4]):new Ie(u,m,arguments[2],arguments[3]):I.isNumber(arguments[4])?new we(u,m,{min:arguments[2],max:arguments[3],step:arguments[4]}):new we(u,m,{min:arguments[2],max:arguments[3]}):I.isString(S)?new Y(u,m):I.isFunction(S)?new Be(u,m,""):I.isBoolean(S)?new $e(u,m):null},st=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){setTimeout(u,1e3/60)},ot=function(){function u(){ae(this,u),this.backgroundElement=document.createElement("div"),I.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),G.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),I.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var m=this;G.bind(this.backgroundElement,"click",function(){m.hide()})}return re(u,[{key:"show",value:function(){var m=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),I.defer(function(){m.backgroundElement.style.opacity=1,m.domElement.style.opacity=1,m.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var m=this,S=function v(){m.domElement.style.display="none",m.backgroundElement.style.display="none",G.unbind(m.domElement,"webkitTransitionEnd",v),G.unbind(m.domElement,"transitionend",v),G.unbind(m.domElement,"oTransitionEnd",v)};G.bind(this.domElement,"webkitTransitionEnd",S),G.bind(this.domElement,"transitionend",S),G.bind(this.domElement,"oTransitionEnd",S),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-G.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-G.getHeight(this.domElement)/2+"px"}}]),u}(),w=function(u){if(u&&typeof window<"u"){var m=document.createElement("style");return m.setAttribute("type","text/css"),m.innerHTML=u,document.head.appendChild(m),u}}(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ge.inject(w);var E="Default",q=function(){try{return!!window.localStorage}catch{return!1}}(),ge=void 0,ue=!0,me=void 0,Te=!1,ve=[],pe=function u(m){var S=this,v=m||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),G.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],v=I.defaults(v,{closeOnTop:!1,autoPlace:!0,width:u.DEFAULT_WIDTH}),v=I.defaults(v,{resizable:v.autoPlace,hideable:v.autoPlace}),I.isUndefined(v.load)?v.load={preset:E}:v.preset&&(v.load.preset=v.preset),I.isUndefined(v.parent)&&v.hideable&&ve.push(this),v.resizable=I.isUndefined(v.parent)&&v.resizable,v.autoPlace&&I.isUndefined(v.scrollable)&&(v.scrollable=!0);var D=q&&localStorage.getItem(_(this,"isLocal"))==="true",P=void 0,B=void 0;if(Object.defineProperties(this,{parent:{get:function(){return v.parent}},scrollable:{get:function(){return v.scrollable}},autoPlace:{get:function(){return v.autoPlace}},closeOnTop:{get:function(){return v.closeOnTop}},preset:{get:function(){return S.parent?S.getRoot().preset:v.load.preset},set:function(xe){S.parent?S.getRoot().preset=xe:v.load.preset=xe,N(this),S.revert()}},width:{get:function(){return v.width},set:function(xe){v.width=xe,U(S,xe)}},name:{get:function(){return v.name},set:function(xe){v.name=xe,B&&(B.innerHTML=v.name)}},closed:{get:function(){return v.closed},set:function(xe){v.closed=xe,v.closed?G.addClass(S.__ul,u.CLASS_CLOSED):G.removeClass(S.__ul,u.CLASS_CLOSED),this.onResize(),S.__closeButton&&(S.__closeButton.innerHTML=xe?u.TEXT_OPEN:u.TEXT_CLOSED)}},load:{get:function(){return v.load}},useLocalStorage:{get:function(){return D},set:function(xe){q&&(D=xe,xe?G.bind(window,"unload",P):G.unbind(window,"unload",P),localStorage.setItem(_(S,"isLocal"),xe))}}}),I.isUndefined(v.parent)){if(v.closed=!1,G.addClass(this.domElement,u.CLASS_MAIN),G.makeSelectable(this.domElement,!1),q&&D){S.useLocalStorage=!0;var j=localStorage.getItem(_(this,"gui"));j&&(v.load=JSON.parse(j))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=u.TEXT_CLOSED,G.addClass(this.__closeButton,u.CLASS_CLOSE_BUTTON),v.closeOnTop?(G.addClass(this.__closeButton,u.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(G.addClass(this.__closeButton,u.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),G.bind(this.__closeButton,"click",function(){S.closed=!S.closed})}else{v.closed===void 0&&(v.closed=!0);var ce=document.createTextNode(v.name);G.addClass(ce,"controller-name"),B=h(S,ce),G.addClass(this.__ul,u.CLASS_CLOSED),G.addClass(B,"title"),G.bind(B,"click",function(xe){return xe.preventDefault(),S.closed=!S.closed,!1}),v.closed||(this.closed=!1)}v.autoPlace&&(I.isUndefined(v.parent)&&(ue&&(me=document.createElement("div"),G.addClass(me,"dg"),G.addClass(me,u.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(me),ue=!1),me.appendChild(this.domElement),G.addClass(this.domElement,u.CLASS_AUTO_PLACE)),this.parent||U(S,v.width)),this.__resizeHandler=function(){S.onResizeDebounced()},G.bind(window,"resize",this.__resizeHandler),G.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),G.bind(this.__ul,"transitionend",this.__resizeHandler),G.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),v.resizable&&R(this),P=function(){q&&localStorage.getItem(_(S,"isLocal"))==="true"&&localStorage.setItem(_(S,"gui"),JSON.stringify(S.getSaveObject()))},this.saveToLocalStorageIfPossible=P,v.parent||function(){var xe=S.getRoot();xe.width+=1,I.defer(function(){xe.width-=1})}()};pe.toggleHide=function(){Te=!Te,I.each(ve,function(u){u.domElement.style.display=Te?"none":""})},pe.CLASS_AUTO_PLACE="a",pe.CLASS_AUTO_PLACE_CONTAINER="ac",pe.CLASS_MAIN="main",pe.CLASS_CONTROLLER_ROW="cr",pe.CLASS_TOO_TALL="taller-than-window",pe.CLASS_CLOSED="closed",pe.CLASS_CLOSE_BUTTON="close-button",pe.CLASS_CLOSE_TOP="close-top",pe.CLASS_CLOSE_BOTTOM="close-bottom",pe.CLASS_DRAG="drag",pe.DEFAULT_WIDTH=245,pe.TEXT_CLOSED="Close Controls",pe.TEXT_OPEN="Open Controls",pe._keydownHandler=function(u){document.activeElement.type==="text"||u.which!==72&&u.keyCode!==72||pe.toggleHide()},G.bind(window,"keydown",pe._keydownHandler,!1),I.extend(pe.prototype,{add:function(u,m){return M(this,u,m,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(u,m){return M(this,u,m,{color:!0})},remove:function(u){this.__ul.removeChild(u.__li),this.__controllers.splice(this.__controllers.indexOf(u),1);var m=this;I.defer(function(){m.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&me.removeChild(this.domElement);var u=this;I.each(this.__folders,function(m){u.removeFolder(m)}),G.unbind(window,"keydown",pe._keydownHandler,!1),f(this)},addFolder:function(u){if(this.__folders[u]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+u+'"');var m={name:u,parent:this};m.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[u]&&(m.closed=this.load.folders[u].closed,m.load=this.load.folders[u]);var S=new pe(m);this.__folders[u]=S;var v=h(this,S.domElement);return G.addClass(v,"folder"),S},removeFolder:function(u){this.__ul.removeChild(u.domElement.parentElement),delete this.__folders[u.name],this.load&&this.load.folders&&this.load.folders[u.name]&&delete this.load.folders[u.name],f(u);var m=this;I.each(u.__folders,function(S){u.removeFolder(S)}),I.defer(function(){m.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},onResize:function(){var u=this.getRoot();if(u.scrollable){var m=G.getOffset(u.__ul).top,S=0;I.each(u.__ul.childNodes,function(v){u.autoPlace&&v===u.__save_row||(S+=G.getHeight(v))}),window.innerHeight-m-20<S?(G.addClass(u.domElement,pe.CLASS_TOO_TALL),u.__ul.style.height=window.innerHeight-m-20+"px"):(G.removeClass(u.domElement,pe.CLASS_TOO_TALL),u.__ul.style.height="auto")}u.__resize_handle&&I.defer(function(){u.__resize_handle.style.height=u.__ul.offsetHeight+"px"}),u.__closeButton&&(u.__closeButton.style.width=u.width+"px")},onResizeDebounced:I.debounce(function(){this.onResize()},50),remember:function(){if(I.isUndefined(ge)&&((ge=new ot).domElement.innerHTML=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`),this.parent)throw new Error("You can only call remember on a top level GUI.");var u=this;I.each(Array.prototype.slice.call(arguments),function(m){u.__rememberedObjects.length===0&&y(u),u.__rememberedObjects.indexOf(m)===-1&&u.__rememberedObjects.push(m)}),this.autoPlace&&U(this,this.width)},getRoot:function(){for(var u=this;u.parent;)u=u.parent;return u},getSaveObject:function(){var u=this.load;return u.closed=this.closed,this.__rememberedObjects.length>0&&(u.preset=this.preset,u.remembered||(u.remembered={}),u.remembered[this.preset]=H(this)),u.folders={},I.each(this.__folders,function(m,S){u.folders[S]=m.getSaveObject()}),u},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=H(this),p(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(u){this.load.remembered||(this.load.remembered={},this.load.remembered[E]=H(this,!0)),this.load.remembered[u]=H(this),this.preset=u,d(this,u,!0),this.saveToLocalStorageIfPossible()},revert:function(u){I.each(this.__controllers,function(m){this.getRoot().load.remembered?x(u||this.getRoot(),m):m.setValue(m.initialValue),m.__onFinishChange&&m.__onFinishChange.call(m,m.getValue())},this),I.each(this.__folders,function(m){m.revert(m)}),u||p(this.getRoot(),!1)},listen:function(u){var m=this.__listening.length===0;this.__listening.push(u),m&&ne(this.__listening)},updateDisplay:function(){I.each(this.__controllers,function(u){u.updateDisplay()}),I.each(this.__folders,function(u){u.updateDisplay()})}});var O={Color:le,math:ee,interpret:Q},Ee={Controller:oe,BooleanController:$e,OptionController:Ye,StringController:Y,NumberController:rt,NumberControllerBox:we,NumberControllerSlider:Ie,FunctionController:Be,ColorController:Qe},ie={dom:G},Ne={GUI:pe},Re=pe,Pe={color:O,controllers:Ee,dom:ie,gui:Ne,GUI:Re};i.color=O,i.controllers=Ee,i.dom=ie,i.gui=Ne,i.GUI=Re,i.default=Pe,Object.defineProperty(i,"__esModule",{value:!0})});function qo(i,e){const t=i;B(),e={IMMEDIATE:!0,TRIGGER:"hover",SIM_RESOLUTION:128,DYE_RESOLUTION:1024,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:.2,PRESSURE:.8,PRESSURE_ITERATIONS:20,CURL:30,SPLAT_RADIUS:.25,SPLAT_FORCE:6e3,SPLAT_COUNT:parseInt(Math.random()*20)+5,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},TRANSPARENT:!1,BLOOM:!0,BLOOM_ITERATIONS:8,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1,...e};function n(){this.id=-1,this.texcoordX=0,this.texcoordY=0,this.prevTexcoordX=0,this.prevTexcoordY=0,this.deltaX=0,this.deltaY=0,this.down=!1,this.moved=!1,this.color=[30,0,300]}let r=[],a=[],o=[];r.push(new n);const{gl:s,ext:l}=c(t);p()&&(e.DYE_RESOLUTION=512),l.supportLinearFiltering||(e.DYE_RESOLUTION=512,e.SHADING=!1,e.BLOOM=!1,e.SUNRAYS=!1);function c(T){const z={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let F=T.getContext("webgl2",z);const te=!!F;te||(F=T.getContext("webgl",z)||T.getContext("experimental-webgl",z));let ye,Ue;te?(F.getExtension("EXT_color_buffer_float"),Ue=F.getExtension("OES_texture_float_linear")):(ye=F.getExtension("OES_texture_half_float"),Ue=F.getExtension("OES_texture_half_float_linear")),F.clearColor(0,0,0,1);const ke=te?F.HALF_FLOAT:ye.HALF_FLOAT_OES;let He,Ae,Rt;return te?(He=h(F,F.RGBA16F,F.RGBA,ke),Ae=h(F,F.RG16F,F.RG,ke),Rt=h(F,F.R16F,F.RED,ke)):(He=h(F,F.RGBA,F.RGBA,ke),Ae=h(F,F.RGBA,F.RGBA,ke),Rt=h(F,F.RGBA,F.RGBA,ke)),{gl:F,ext:{formatRGBA:He,formatRG:Ae,formatR:Rt,halfFloatTexType:ke,supportLinearFiltering:Ue}}}function h(T,z,F,te){if(!f(T,z,F,te))switch(z){case T.R16F:return h(T,T.RG16F,T.RG,te);case T.RG16F:return h(T,T.RGBA16F,T.RGBA,te);default:return null}return{internalFormat:z,format:F}}function f(T,z,F,te){let ye=T.createTexture();T.bindTexture(T.TEXTURE_2D,ye),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MIN_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_MAG_FILTER,T.NEAREST),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_S,T.CLAMP_TO_EDGE),T.texParameteri(T.TEXTURE_2D,T.TEXTURE_WRAP_T,T.CLAMP_TO_EDGE),T.texImage2D(T.TEXTURE_2D,0,z,4,4,0,F,te,null);let Ue=T.createFramebuffer();return T.bindFramebuffer(T.FRAMEBUFFER,Ue),T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,ye,0),T.checkFramebufferStatus(T.FRAMEBUFFER)==T.FRAMEBUFFER_COMPLETE}function p(){return/Mobi|Android/i.test(navigator.userAgent)}class g{constructor(z,F){this.vertexShader=z,this.fragmentShaderSource=F,this.programs=[],this.activeProgram=null,this.uniforms=[]}setKeywords(z){let F=0;for(let ye=0;ye<z.length;ye++)F+=Xe(z[ye]);let te=this.programs[F];if(te==null){let ye=d(s.FRAGMENT_SHADER,this.fragmentShaderSource,z);te=M(this.vertexShader,ye),this.programs[F]=te}te!=this.activeProgram&&(this.uniforms=_(te),this.activeProgram=te)}bind(){s.useProgram(this.activeProgram)}}class x{constructor(z,F){this.uniforms={},this.program=M(z,F),this.uniforms=_(this.program)}bind(){s.useProgram(this.program)}}function M(T,z){let F=s.createProgram();if(s.attachShader(F,T),s.attachShader(F,z),s.linkProgram(F),!s.getProgramParameter(F,s.LINK_STATUS))throw s.getProgramInfoLog(F);return F}function _(T){let z=[],F=s.getProgramParameter(T,s.ACTIVE_UNIFORMS);for(let te=0;te<F;te++){let ye=s.getActiveUniform(T,te).name;z[ye]=s.getUniformLocation(T,ye)}return z}function d(T,z,F){z=C(z,F);const te=s.createShader(T);if(s.shaderSource(te,z),s.compileShader(te),!s.getShaderParameter(te,s.COMPILE_STATUS))throw s.getShaderInfoLog(te);return te}function C(T,z){if(z==null)return T;let F="";return z.forEach(te=>{F+="#define "+te+`
`}),F+T}const y=d(s.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),R=d(s.VERTEX_SHADER,`
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform vec2 texelSize;
    void main () {
        vUv = aPosition * 0.5 + 0.5;
        float offset = 1.33333333;
        vL = vUv - texelSize * offset;
        vR = vUv + texelSize * offset;
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`),U=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = texture2D(uTexture, vUv) * 0.29411764;
        sum += texture2D(uTexture, vL) * 0.35294117;
        sum += texture2D(uTexture, vR) * 0.35294117;
        gl_FragColor = sum;
    }
`),H=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        gl_FragColor = texture2D(uTexture, vUv);
    }
`),N=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
        gl_FragColor = value * texture2D(uTexture, vUv);
    }
`),ne=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    uniform vec4 color;
    void main () {
        gl_FragColor = color;
    }
`),A=d(s.FRAGMENT_SHADER,e.TRANSPARENT?`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
`:`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float aspectRatio;
    #define SCALE 25.0
    void main () {
        vec2 uv = floor(vUv * SCALE * vec2(aspectRatio, 1.0));
        float v = mod(uv.x + uv.y, 2.0);
        v = v * 0.1 + 0.8;
        gl_FragColor = vec4(vec3(v), 1.0);
    }
`),L=`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uBloom;
    uniform sampler2D uSunrays;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
        color = max(color, vec3(0));
        return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
    #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
    #endif
    #ifdef BLOOM
        vec3 bloom = texture2D(uBloom, vUv).rgb;
    #endif
    #ifdef SUNRAYS
        float sunrays = texture2D(uSunrays, vUv).r;
        c *= sunrays;
    #ifdef BLOOM
        bloom *= sunrays;
    #endif
    #endif
    #ifdef BLOOM
        float noise = texture2D(uDithering, vUv * ditherScale).r;
        noise = noise * 2.0 - 1.0;
        bloom += noise / 255.0;
        bloom = linearToGamma(bloom);
        c += bloom;
    #endif
        float a = max(c.r, max(c.g, c.b));
        gl_FragColor = vec4(c, a);
    }
`,I=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform vec3 curve;
    uniform float threshold;
    void main () {
        vec3 c = texture2D(uTexture, vUv).rgb;
        float br = max(c.r, max(c.g, c.b));
        float rq = clamp(br - curve.x, 0.0, curve.y);
        rq = curve.z * rq * rq;
        c *= max(rq, br - threshold) / max(br, 0.0001);
        gl_FragColor = vec4(c, 0.0);
    }
`),he=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum;
    }
`),_e=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform float intensity;
    void main () {
        vec4 sum = vec4(0.0);
        sum += texture2D(uTexture, vL);
        sum += texture2D(uTexture, vR);
        sum += texture2D(uTexture, vT);
        sum += texture2D(uTexture, vB);
        sum *= 0.25;
        gl_FragColor = sum * intensity;
    }
`),V=d(s.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
        vec4 c = texture2D(uTexture, vUv);
        float br = max(c.r, max(c.g, c.b));
        c.a = 1.0 - min(max(br * 20.0, 0.0), 0.8);
        gl_FragColor = c;
    }
`),Q=d(s.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTexture;
    uniform float weight;
    #define ITERATIONS 16
    void main () {
        float Density = 0.3;
        float Decay = 0.95;
        float Exposure = 0.7;
        vec2 coord = vUv;
        vec2 dir = vUv - 0.5;
        dir *= 1.0 / float(ITERATIONS) * Density;
        float illuminationDecay = 1.0;
        float color = texture2D(uTexture, vUv).a;
        for (int i = 0; i < ITERATIONS; i++)
        {
            coord -= dir;
            float col = texture2D(uTexture, coord).a;
            color += col * illuminationDecay * weight;
            illuminationDecay *= Decay;
        }
        gl_FragColor = vec4(color * Exposure, 0.0, 0.0, 1.0);
    }
`),se=d(s.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
        vec2 p = vUv - point.xy;
        p.x *= aspectRatio;
        vec3 splat = exp(-dot(p, p) / radius) * color;
        vec3 base = texture2D(uTarget, vUv).xyz;
        gl_FragColor = vec4(base + splat, 1.0);
    }
`),ee=d(s.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
        vec2 st = uv / tsize - 0.5;
        vec2 iuv = floor(st);
        vec2 fuv = fract(st);
        vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
        vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
        vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
        vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
        return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
    #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
    #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
    #endif
        float decay = 1.0 + dissipation * dt;
        gl_FragColor = result / decay;
    }`,l.supportLinearFiltering?null:["MANUAL_FILTERING"]),Se=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).x;
        float R = texture2D(uVelocity, vR).x;
        float T = texture2D(uVelocity, vT).y;
        float B = texture2D(uVelocity, vB).y;
        vec2 C = texture2D(uVelocity, vUv).xy;
        if (vL.x < 0.0) { L = -C.x; }
        if (vR.x > 1.0) { R = -C.x; }
        if (vT.y > 1.0) { T = -C.y; }
        if (vB.y < 0.0) { B = -C.y; }
        float div = 0.5 * (R - L + T - B);
        gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
`),ae=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uVelocity, vL).y;
        float R = texture2D(uVelocity, vR).y;
        float T = texture2D(uVelocity, vT).x;
        float B = texture2D(uVelocity, vB).x;
        float vorticity = R - L - T + B;
        gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
`),re=d(s.FRAGMENT_SHADER,`
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
        float L = texture2D(uCurl, vL).x;
        float R = texture2D(uCurl, vR).x;
        float T = texture2D(uCurl, vT).x;
        float B = texture2D(uCurl, vB).x;
        float C = texture2D(uCurl, vUv).x;
        vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
        force /= length(force) + 0.0001;
        force *= curl * C;
        force.y *= -1.0;
        vec2 vel = texture2D(uVelocity, vUv).xy;
        gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
    }
`),W=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        float C = texture2D(uPressure, vUv).x;
        float divergence = texture2D(uDivergence, vUv).x;
        float pressure = (L + R + B + T - divergence) * 0.25;
        gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
`),K=d(s.FRAGMENT_SHADER,`
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
        float L = texture2D(uPressure, vL).x;
        float R = texture2D(uPressure, vR).x;
        float T = texture2D(uPressure, vT).x;
        float B = texture2D(uPressure, vB).x;
        vec2 velocity = texture2D(uVelocity, vUv).xy;
        velocity.xy -= vec2(R - L, T - B);
        gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
`),fe=(s.bindBuffer(s.ARRAY_BUFFER,s.createBuffer()),s.bufferData(s.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),s.STATIC_DRAW),s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,s.createBuffer()),s.bufferData(s.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),s.STATIC_DRAW),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0),s.enableVertexAttribArray(0),T=>{s.bindFramebuffer(s.FRAMEBUFFER,T),s.drawElements(s.TRIANGLES,6,s.UNSIGNED_SHORT,0)});let le,oe,Fe,je,Le,G,$e,Ye,Y=u();const rt=new x(R,U),we=new x(y,H),Ie=new x(y,N),Be=new x(y,ne),Qe=new x(y,A),Ve=new x(y,I),Ge=new x(y,he),Ke=new x(y,_e),st=new x(y,V),ot=new x(y,Q),w=new x(y,se),E=new x(y,ee),q=new x(y,Se),ge=new x(y,ae),ue=new x(y,re),me=new x(y,W),Te=new x(y,K),ve=new g(y,L);function pe(){let T=be(e.SIM_RESOLUTION),z=be(e.DYE_RESOLUTION);const F=l.halfFloatTexType,te=l.formatRGBA,ye=l.formatRG,Ue=l.formatR,ke=l.supportLinearFiltering?s.LINEAR:s.NEAREST;le==null?le=Ne(z.width,z.height,te.internalFormat,te.format,F,ke):le=Pe(le,z.width,z.height,te.internalFormat,te.format,F,ke),oe==null?oe=Ne(T.width,T.height,ye.internalFormat,ye.format,F,ke):oe=Pe(oe,T.width,T.height,ye.internalFormat,ye.format,F,ke),Fe=ie(T.width,T.height,Ue.internalFormat,Ue.format,F,s.NEAREST),je=ie(T.width,T.height,Ue.internalFormat,Ue.format,F,s.NEAREST),Le=Ne(T.width,T.height,Ue.internalFormat,Ue.format,F,s.NEAREST),O(),Ee()}function O(){let T=be(e.BLOOM_RESOLUTION);const z=l.halfFloatTexType,F=l.formatRGBA,te=l.supportLinearFiltering?s.LINEAR:s.NEAREST;G=ie(T.width,T.height,F.internalFormat,F.format,z,te),o.length=0;for(let ye=0;ye<e.BLOOM_ITERATIONS;ye++){let Ue=T.width>>ye+1,ke=T.height>>ye+1;if(Ue<2||ke<2)break;let He=ie(Ue,ke,F.internalFormat,F.format,z,te);o.push(He)}}function Ee(){let T=be(e.SUNRAYS_RESOLUTION);const z=l.halfFloatTexType,F=l.formatR,te=l.supportLinearFiltering?s.LINEAR:s.NEAREST;$e=ie(T.width,T.height,F.internalFormat,F.format,z,te),Ye=ie(T.width,T.height,F.internalFormat,F.format,z,te)}function ie(T,z,F,te,ye,Ue){s.activeTexture(s.TEXTURE0);let ke=s.createTexture();s.bindTexture(s.TEXTURE_2D,ke),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,Ue),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,Ue),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,F,T,z,0,te,ye,null);let He=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,He),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ke,0),s.viewport(0,0,T,z),s.clear(s.COLOR_BUFFER_BIT);let Ae=1/T,Rt=1/z;return{texture:ke,fbo:He,width:T,height:z,texelSizeX:Ae,texelSizeY:Rt,attach(nt){return s.activeTexture(s.TEXTURE0+nt),s.bindTexture(s.TEXTURE_2D,ke),nt}}}function Ne(T,z,F,te,ye,Ue){let ke=ie(T,z,F,te,ye,Ue),He=ie(T,z,F,te,ye,Ue);return{width:T,height:z,texelSizeX:ke.texelSizeX,texelSizeY:ke.texelSizeY,get read(){return ke},set read(Ae){ke=Ae},get write(){return He},set write(Ae){He=Ae},swap(){let Ae=ke;ke=He,He=Ae}}}function Re(T,z,F,te,ye,Ue,ke){let He=ie(z,F,te,ye,Ue,ke);return we.bind(),s.uniform1i(we.uniforms.uTexture,T.attach(0)),fe(He.fbo),He}function Pe(T,z,F,te,ye,Ue,ke){return T.width==z&&T.height==F||(T.read=Re(T.read,z,F,te,ye,Ue,ke),T.write=ie(z,F,te,ye,Ue,ke),T.width=z,T.height=F,T.texelSizeX=1/z,T.texelSizeY=1/F),T}function u(T){let z=s.createTexture();s.bindTexture(s.TEXTURE_2D,z),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.REPEAT),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.REPEAT),s.texImage2D(s.TEXTURE_2D,0,s.RGB,1,1,0,s.RGB,s.UNSIGNED_BYTE,new Uint8Array([255,255,255]));let F={texture:z,width:1,height:1,attach(ye){return s.activeTexture(s.TEXTURE0+ye),s.bindTexture(s.TEXTURE_2D,z),ye}},te=new Image;return te.onload=()=>{F.width=te.width,F.height=te.height,s.bindTexture(s.TEXTURE_2D,z),s.texImage2D(s.TEXTURE_2D,0,s.RGB,s.RGB,s.UNSIGNED_BYTE,te)},te.src=T,F}function m(){let T=[];e.SHADING&&T.push("SHADING"),e.BLOOM&&T.push("BLOOM"),e.SUNRAYS&&T.push("SUNRAYS"),ve.setKeywords(T)}m(),pe(),e.IMMEDIATE&&Sn(e.SPLAT_COUNT);let S=Date.now(),v=0;D();function D(){const T=P();B()&&pe(),j(T),ce(),e.PAUSED||xe(T),Oe(null),requestAnimationFrame(D)}function P(){let T=Date.now(),z=(T-S)/1e3;return z=Math.min(z,.016666),S=T,z}function B(){let T=Ce(t.clientWidth),z=Ce(t.clientHeight);return t.width!=T||t.height!=z?(t.width=T,t.height=z,!0):!1}function j(T){e.COLORFUL&&(v+=T*e.COLOR_UPDATE_SPEED,v>=1&&(v=$(v,0,1),r.forEach(z=>{z.color=X()})))}function ce(){a.length>0&&Sn(a.pop()),r.forEach(T=>{T.moved&&(T.moved=!1,Mt(T))})}function xe(T){s.disable(s.BLEND),s.viewport(0,0,oe.width,oe.height),ge.bind(),s.uniform2f(ge.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),s.uniform1i(ge.uniforms.uVelocity,oe.read.attach(0)),fe(je.fbo),ue.bind(),s.uniform2f(ue.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),s.uniform1i(ue.uniforms.uVelocity,oe.read.attach(0)),s.uniform1i(ue.uniforms.uCurl,je.attach(1)),s.uniform1f(ue.uniforms.curl,e.CURL),s.uniform1f(ue.uniforms.dt,T),fe(oe.write.fbo),oe.swap(),q.bind(),s.uniform2f(q.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),s.uniform1i(q.uniforms.uVelocity,oe.read.attach(0)),fe(Fe.fbo),Ie.bind(),s.uniform1i(Ie.uniforms.uTexture,Le.read.attach(0)),s.uniform1f(Ie.uniforms.value,e.PRESSURE),fe(Le.write.fbo),Le.swap(),me.bind(),s.uniform2f(me.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),s.uniform1i(me.uniforms.uDivergence,Fe.attach(0));for(let F=0;F<e.PRESSURE_ITERATIONS;F++)s.uniform1i(me.uniforms.uPressure,Le.read.attach(1)),fe(Le.write.fbo),Le.swap();Te.bind(),s.uniform2f(Te.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),s.uniform1i(Te.uniforms.uPressure,Le.read.attach(0)),s.uniform1i(Te.uniforms.uVelocity,oe.read.attach(1)),fe(oe.write.fbo),oe.swap(),E.bind(),s.uniform2f(E.uniforms.texelSize,oe.texelSizeX,oe.texelSizeY),l.supportLinearFiltering||s.uniform2f(E.uniforms.dyeTexelSize,oe.texelSizeX,oe.texelSizeY);let z=oe.read.attach(0);s.uniform1i(E.uniforms.uVelocity,z),s.uniform1i(E.uniforms.uSource,z),s.uniform1f(E.uniforms.dt,T),s.uniform1f(E.uniforms.dissipation,e.VELOCITY_DISSIPATION),fe(oe.write.fbo),oe.swap(),s.viewport(0,0,le.width,le.height),l.supportLinearFiltering||s.uniform2f(E.uniforms.dyeTexelSize,le.texelSizeX,le.texelSizeY),s.uniform1i(E.uniforms.uVelocity,oe.read.attach(0)),s.uniform1i(E.uniforms.uSource,le.read.attach(1)),s.uniform1f(E.uniforms.dissipation,e.DENSITY_DISSIPATION),fe(le.write.fbo),le.swap()}function Oe(T){e.BLOOM&&ut(le.read,G),e.SUNRAYS&&(tt(le.read,le.write,$e),wt($e,Ye,1)),T==null||!e.TRANSPARENT?(s.blendFunc(s.ONE,s.ONE_MINUS_SRC_ALPHA),s.enable(s.BLEND)):s.disable(s.BLEND);let z=T==null?s.drawingBufferWidth:T.width,F=T==null?s.drawingBufferHeight:T.height;s.viewport(0,0,z,F);let te=T==null?null:T.fbo;e.TRANSPARENT||ze(te,J(e.BACK_COLOR)),T==null&&e.TRANSPARENT&&de(te),We(te,z,F)}function ze(T,z){Be.bind(),s.uniform4f(Be.uniforms.color,z.r,z.g,z.b,1),fe(T)}function de(T){Qe.bind(),s.uniform1f(Qe.uniforms.aspectRatio,t.width/t.height),fe(T)}function We(T,z,F){if(ve.bind(),e.SHADING&&s.uniform2f(ve.uniforms.texelSize,1/z,1/F),s.uniform1i(ve.uniforms.uTexture,le.read.attach(0)),e.BLOOM){s.uniform1i(ve.uniforms.uBloom,G.attach(1)),s.uniform1i(ve.uniforms.uDithering,Y.attach(2));let te=De(Y,z,F);s.uniform2f(ve.uniforms.ditherScale,te.x,te.y)}e.SUNRAYS&&s.uniform1i(ve.uniforms.uSunrays,$e.attach(3)),fe(T)}function ut(T,z){if(o.length<2)return;let F=z;s.disable(s.BLEND),Ve.bind();let te=e.BLOOM_THRESHOLD*e.BLOOM_SOFT_KNEE+1e-4,ye=e.BLOOM_THRESHOLD-te,Ue=te*2,ke=.25/te;s.uniform3f(Ve.uniforms.curve,ye,Ue,ke),s.uniform1f(Ve.uniforms.threshold,e.BLOOM_THRESHOLD),s.uniform1i(Ve.uniforms.uTexture,T.attach(0)),s.viewport(0,0,F.width,F.height),fe(F.fbo),Ge.bind();for(let He=0;He<o.length;He++){let Ae=o[He];s.uniform2f(Ge.uniforms.texelSize,F.texelSizeX,F.texelSizeY),s.uniform1i(Ge.uniforms.uTexture,F.attach(0)),s.viewport(0,0,Ae.width,Ae.height),fe(Ae.fbo),F=Ae}s.blendFunc(s.ONE,s.ONE),s.enable(s.BLEND);for(let He=o.length-2;He>=0;He--){let Ae=o[He];s.uniform2f(Ge.uniforms.texelSize,F.texelSizeX,F.texelSizeY),s.uniform1i(Ge.uniforms.uTexture,F.attach(0)),s.viewport(0,0,Ae.width,Ae.height),fe(Ae.fbo),F=Ae}s.disable(s.BLEND),Ke.bind(),s.uniform2f(Ke.uniforms.texelSize,F.texelSizeX,F.texelSizeY),s.uniform1i(Ke.uniforms.uTexture,F.attach(0)),s.uniform1f(Ke.uniforms.intensity,e.BLOOM_INTENSITY),s.viewport(0,0,z.width,z.height),fe(z.fbo)}function tt(T,z,F){s.disable(s.BLEND),st.bind(),s.uniform1i(st.uniforms.uTexture,T.attach(0)),s.viewport(0,0,z.width,z.height),fe(z.fbo),ot.bind(),s.uniform1f(ot.uniforms.weight,e.SUNRAYS_WEIGHT),s.uniform1i(ot.uniforms.uTexture,z.attach(0)),s.viewport(0,0,F.width,F.height),fe(F.fbo)}function wt(T,z,F){rt.bind();for(let te=0;te<F;te++)s.uniform2f(rt.uniforms.texelSize,T.texelSizeX,0),s.uniform1i(rt.uniforms.uTexture,T.attach(0)),fe(z.fbo),s.uniform2f(rt.uniforms.texelSize,0,T.texelSizeY),s.uniform1i(rt.uniforms.uTexture,z.attach(0)),fe(T.fbo)}function Mt(T){let z=T.deltaX*e.SPLAT_FORCE,F=T.deltaY*e.SPLAT_FORCE;$t(T.texcoordX,T.texcoordY,z,F,T.color)}function Sn(T){for(let z=0;z<T;z++){const F=X();F.r*=10,F.g*=10,F.b*=10;const te=Math.random(),ye=Math.random(),Ue=1e3*(Math.random()-.5),ke=1e3*(Math.random()-.5);$t(te,ye,Ue,ke,F)}}function $t(T,z,F,te,ye){s.viewport(0,0,oe.width,oe.height),w.bind(),s.uniform1i(w.uniforms.uTarget,oe.read.attach(0)),s.uniform1f(w.uniforms.aspectRatio,t.width/t.height),s.uniform2f(w.uniforms.point,T,z),s.uniform3f(w.uniforms.color,F,te,0),s.uniform1f(w.uniforms.radius,qt(e.SPLAT_RADIUS/100)),fe(oe.write.fbo),oe.swap(),s.viewport(0,0,le.width,le.height),s.uniform1i(w.uniforms.uTarget,le.read.attach(0)),s.uniform3f(w.uniforms.color,ye.r,ye.g,ye.b),fe(le.write.fbo),le.swap()}function qt(T){let z=t.width/t.height;return z>1&&(T*=z),T}t.addEventListener("mousedown",T=>{let z=Ce(T.offsetX),F=Ce(T.offsetY),te=r.find(ye=>ye.id==-1);te==null&&(te=new n),zt(te,-1,z,F)}),setTimeout(()=>{t.addEventListener("mousemove",T=>{let z=Ce(T.offsetX),F=Ce(T.offsetY);Ui(r[0],z,F)})},500),window.addEventListener("mouseup",()=>{Ii(r[0])}),t.addEventListener("touchstart",T=>{T.preventDefault();const z=T.targetTouches;for(;z.length>=r.length;)r.push(new n);for(let F=0;F<z.length;F++){let te=Ce(z[F].pageX),ye=Ce(z[F].pageY);zt(r[F+1],z[F].identifier,te,ye)}}),t.addEventListener("touchmove",T=>{T.preventDefault();const z=T.targetTouches;for(let F=0;F<z.length;F++){let te=Ce(z[F].pageX),ye=Ce(z[F].pageY);Ui(r[F+1],te,ye)}},!1),window.addEventListener("touchend",T=>{const z=T.changedTouches;for(let F=0;F<z.length;F++){let te=r.find(ye=>ye.id==z[F].identifier);Ii(te)}}),window.addEventListener("keydown",T=>{T.code==="KeyP"&&(e.PAUSED=!e.PAUSED),T.key===" "&&a.push(parseInt(Math.random()*20)+5)});function zt(T,z,F,te){T.id=z,T.down=!0,T.moved=!1,T.texcoordX=F/t.width,T.texcoordY=1-te/t.height,T.prevTexcoordX=T.texcoordX,T.prevTexcoordY=T.texcoordY,T.deltaX=0,T.deltaY=0,T.color=X()}function Ui(T,z,F){e.TRIGGER==="click"&&(T.moved=T.down),T.prevTexcoordX=T.texcoordX,T.prevTexcoordY=T.texcoordY,T.texcoordX=z/t.width,T.texcoordY=1-F/t.height,T.deltaX=Er(T.texcoordX-T.prevTexcoordX),T.deltaY=b(T.texcoordY-T.prevTexcoordY),e.TRIGGER==="hover"&&(T.moved=Math.abs(T.deltaX)>0||Math.abs(T.deltaY)>0)}function Ii(T){T.down=!1}function Er(T){let z=t.width/t.height;return z<1&&(T*=z),T}function b(T){let z=t.width/t.height;return z>1&&(T/=z),T}function X(){let T=Z(Math.random(),1,1);return T.r*=.15,T.g*=.15,T.b*=.15,T}function Z(T,z,F){let te,ye,Ue,ke,He,Ae,Rt,nt;switch(ke=Math.floor(T*6),He=T*6-ke,Ae=F*(1-z),Rt=F*(1-He*z),nt=F*(1-(1-He)*z),ke%6){case 0:te=F,ye=nt,Ue=Ae;break;case 1:te=Rt,ye=F,Ue=Ae;break;case 2:te=Ae,ye=F,Ue=nt;break;case 3:te=Ae,ye=Rt,Ue=F;break;case 4:te=nt,ye=Ae,Ue=F;break;case 5:te=F,ye=Ae,Ue=Rt;break}return{r:te,g:ye,b:Ue}}function J(T){return{r:T.r/255,g:T.g/255,b:T.b/255}}function $(T,z,F){let te=F-z;return te==0?z:(T-z)%te+z}function be(T){let z=s.drawingBufferWidth/s.drawingBufferHeight;z<1&&(z=1/z);let F=Math.round(T),te=Math.round(T*z);return s.drawingBufferWidth>s.drawingBufferHeight?{width:te,height:F}:{width:F,height:te}}function De(T,z,F){return{x:z/T.width,y:F/T.height}}function Ce(T){let z=window.devicePixelRatio||1;return Math.floor(T*z)}function Xe(T){if(T.length==0)return 0;let z=0;for(let F=0;F<T.length;F++)z=(z<<5)-z+T.charCodeAt(F),z|=0;return z}}const ho=document.getElementById("loader"),ps=document.getElementById("JokerContainer"),ms=document.createElement("img"),fr=document.createElement("a"),fo=document.createElement("p");fo.innerHTML="Solar Sytem </br></br> by </br></br>JokerDev";ms.src="/assets/img/JokerDev.png";ms.alt="Joker";fr.href="https://github.com/Kamasian";fr.target="_blank";fr.appendChild(ms);ps.appendChild(fo);ps.appendChild(fr);qo(ho,{TRANSPARENT:!0,IMMEDIATE:!1,TRIGGER:"click",SIM_RESOLUTION:64,DYE_RESOLUTION:512,CAPTURE_RESOLUTION:512,DENSITY_DISSIPATION:1,VELOCITY_DISSIPATION:1,PRESSURE:1,PRESSURE_ITERATIONS:60,CURL:20,SPLAT_RADIUS:.25,SPLAT_FORCE:1e4,SHADING:!0,COLORFUL:!0,COLOR_UPDATE_SPEED:10,PAUSED:!1,BACK_COLOR:{r:0,g:0,b:0},BLOOM:!0,BLOOM_ITERATIONS:1,BLOOM_RESOLUTION:256,BLOOM_INTENSITY:.8,BLOOM_THRESHOLD:.6,BLOOM_SOFT_KNEE:.7,SUNRAYS:!0,SUNRAYS_RESOLUTION:196,SUNRAYS_WEIGHT:1});setTimeout(()=>{ho.classList.add("hidden"),ps.classList.add("hidden")},5e3);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _s="158",Hn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jo=0,Ps=1,Ko=2,po=1,Zo=2,an=3,En=0,Ct=1,Kt=2,gn=0,ai=1,Ds=2,Us=3,Is=4,Jo=5,Cn=100,$o=101,Qo=102,Ns=103,Os=104,el=200,tl=201,nl=202,il=203,is=204,rs=205,rl=206,sl=207,al=208,ol=209,ll=210,cl=211,ul=212,hl=213,dl=214,fl=0,pl=1,ml=2,or=3,_l=4,gl=5,vl=6,xl=7,mo=0,El=1,Sl=2,vn=0,Ml=1,yl=2,bl=3,Tl=4,Al=5,_o=300,li=301,ci=302,ss=303,as=304,pr=306,os=1e3,Wt=1001,ls=1002,At=1003,Fs=1004,br=1005,Ft=1006,wl=1007,Ai=1008,xn=1009,Rl=1010,Cl=1011,gs=1012,go=1013,mn=1014,_n=1015,wi=1016,vo=1017,xo=1018,Pn=1020,Ll=1021,Xt=1023,Pl=1024,Dl=1025,Dn=1026,ui=1027,Ul=1028,Eo=1029,Il=1030,So=1031,Mo=1033,Tr=33776,Ar=33777,wr=33778,Rr=33779,Bs=35840,zs=35841,Hs=35842,Gs=35843,Nl=36196,ks=37492,Vs=37496,Ws=37808,Xs=37809,Ys=37810,qs=37811,js=37812,Ks=37813,Zs=37814,Js=37815,$s=37816,Qs=37817,ea=37818,ta=37819,na=37820,ia=37821,Cr=36492,ra=36494,sa=36495,Ol=36283,aa=36284,oa=36285,la=36286,yo=3e3,Un=3001,Fl=3200,Bl=3201,bo=0,zl=1,Bt="",_t="srgb",ln="srgb-linear",vs="display-p3",mr="display-p3-linear",lr="linear",at="srgb",cr="rec709",ur="p3",kn=7680,ca=519,Hl=512,Gl=513,kl=514,Vl=515,Wl=516,Xl=517,Yl=518,ql=519,ua=35044,ha="300 es",cs=1035,on=2e3,hr=2001;class zn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let da=1234567;const yi=Math.PI/180,Ri=180/Math.PI;function di(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function gt(i,e,t){return Math.max(e,Math.min(t,i))}function xs(i,e){return(i%e+e)%e}function jl(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Kl(i,e,t){return i!==e?(t-i)/(e-i):0}function bi(i,e,t){return(1-t)*i+t*e}function Zl(i,e,t,n){return bi(i,e,1-Math.exp(-t*n))}function Jl(i,e=1){return e-Math.abs(xs(i,e*2)-e)}function $l(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ql(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ec(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tc(i,e){return i+Math.random()*(e-i)}function nc(i){return i*(.5-Math.random())}function ic(i){i!==void 0&&(da=i);let e=da+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rc(i){return i*yi}function sc(i){return i*Ri}function us(i){return(i&i-1)===0&&i!==0}function ac(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function dr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function oc(i,e,t,n,r){const a=Math.cos,o=Math.sin,s=a(t/2),l=o(t/2),c=a((e+n)/2),h=o((e+n)/2),f=a((e-n)/2),p=o((e-n)/2),g=a((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(s*h,l*f,l*p,s*c);break;case"YZY":i.set(l*p,s*h,l*f,s*c);break;case"ZXZ":i.set(l*f,l*p,s*h,s*c);break;case"XZX":i.set(s*h,l*x,l*g,s*c);break;case"YXY":i.set(l*g,s*h,l*x,s*c);break;case"ZYZ":i.set(l*x,l*g,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const lc={DEG2RAD:yi,RAD2DEG:Ri,generateUUID:di,clamp:gt,euclideanModulo:xs,mapLinear:jl,inverseLerp:Kl,lerp:bi,damp:Zl,pingpong:Jl,smoothstep:$l,smootherstep:Ql,randInt:ec,randFloat:tc,randFloatSpread:nc,seededRandom:ic,degToRad:rc,radToDeg:sc,isPowerOfTwo:us,ceilPowerOfTwo:ac,floorPowerOfTwo:dr,setQuaternionFromProperEuler:oc,normalize:bt,denormalize:ri};class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*n-o*r+e.x,this.y=a*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,n,r,a,o,s,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c)}set(e,t,n,r,a,o,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=a,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[3],l=n[6],c=n[1],h=n[4],f=n[7],p=n[2],g=n[5],x=n[8],M=r[0],_=r[3],d=r[6],C=r[1],y=r[4],R=r[7],U=r[2],H=r[5],N=r[8];return a[0]=o*M+s*C+l*U,a[3]=o*_+s*y+l*H,a[6]=o*d+s*R+l*N,a[1]=c*M+h*C+f*U,a[4]=c*_+h*y+f*H,a[7]=c*d+h*R+f*N,a[2]=p*M+g*C+x*U,a[5]=p*_+g*y+x*H,a[8]=p*d+g*R+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*s*c-n*a*h+n*s*l+r*a*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=h*o-s*c,p=s*l-h*a,g=c*a-o*l,x=t*f+n*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=f*M,e[1]=(r*c-h*n)*M,e[2]=(s*n-r*o)*M,e[3]=p*M,e[4]=(h*t-r*l)*M,e[5]=(r*a-s*t)*M,e[6]=g*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,o,s){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*o+c*s)+o+e,-r*c,r*l,-r*(-c*o+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Lr.makeScale(e,t)),this}rotate(e){return this.premultiply(Lr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lr=new Je;function To(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cc(){const i=Ci("canvas");return i.style.display="block",i}const fa={};function Ti(i){i in fa||(fa[i]=!0,console.warn(i))}const pa=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ma=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[ln]:{transfer:lr,primaries:cr,toReference:i=>i,fromReference:i=>i},[_t]:{transfer:at,primaries:cr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[mr]:{transfer:lr,primaries:ur,toReference:i=>i.applyMatrix3(ma),fromReference:i=>i.applyMatrix3(pa)},[vs]:{transfer:at,primaries:ur,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ma),fromReference:i=>i.applyMatrix3(pa).convertLinearToSRGB()}},uc=new Set([ln,mr]),it={enabled:!0,_workingColorSpace:ln,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!uc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Ni[e].toReference,r=Ni[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ni[i].primaries},getTransfer:function(i){return i===Bt?lr:Ni[i].transfer}};function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vn;class Ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vn===void 0&&(Vn=Ci("canvas")),Vn.width=e.width,Vn.height=e.height;const n=Vn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ci("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=oi(a[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oi(t[n]/255)*255):t[n]=oi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hc=0;class wo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=di(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Dr(r[o].image)):a.push(Dr(r[o]))}else a=Dr(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ao.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dc=0;class Lt extends zn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Wt,r=Wt,a=Ft,o=Ai,s=Xt,l=xn,c=Lt.DEFAULT_ANISOTROPY,h=Bt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dc++}),this.uuid=di(),this.name="",this.source=new wo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?_t:Bt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_o)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case Wt:e.x=e.x<0?0:1;break;case ls:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case Wt:e.y=e.y<0?0:1;break;case ls:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===_t?Un:yo}set encoding(e){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?_t:Bt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=_o;Lt.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,r=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],h=l[4],f=l[8],p=l[1],g=l[5],x=l[9],M=l[2],_=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(f-M)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+M)<.1&&Math.abs(x+_)<.1&&Math.abs(c+g+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,R=(g+1)/2,U=(d+1)/2,H=(h+p)/4,N=(f+M)/4,ne=(x+_)/4;return y>R&&y>U?y<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(y),r=H/n,a=N/n):R>U?R<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(R),n=H/r,a=ne/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=N/a,r=ne/a),this.set(n,r,a,t),this}let C=Math.sqrt((_-x)*(_-x)+(f-M)*(f-M)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(_-x)/C,this.y=(f-M)/C,this.z=(p-h)/C,this.w=Math.acos((c+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fc extends zn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?_t:Bt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Lt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends fc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ro extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pc extends Lt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,o,s){let l=n[r+0],c=n[r+1],h=n[r+2],f=n[r+3];const p=a[o+0],g=a[o+1],x=a[o+2],M=a[o+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(s===1){e[t+0]=p,e[t+1]=g,e[t+2]=x,e[t+3]=M;return}if(f!==M||l!==p||c!==g||h!==x){let _=1-s;const d=l*p+c*g+h*x+f*M,C=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const U=Math.sqrt(y),H=Math.atan2(U,d*C);_=Math.sin(_*H)/U,s=Math.sin(s*H)/U}const R=s*C;if(l=l*_+p*R,c=c*_+g*R,h=h*_+x*R,f=f*_+M*R,_===1-s){const U=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=U,c*=U,h*=U,f*=U}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,o){const s=n[r],l=n[r+1],c=n[r+2],h=n[r+3],f=a[o],p=a[o+1],g=a[o+2],x=a[o+3];return e[t]=s*x+h*f+l*g-c*p,e[t+1]=l*x+h*p+c*f-s*g,e[t+2]=c*x+h*g+s*p-l*f,e[t+3]=h*x-s*f-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,c=s(n/2),h=s(r/2),f=s(a/2),p=l(n/2),g=l(r/2),x=l(a/2);switch(o){case"XYZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"YXZ":this._x=p*h*f+c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"ZXY":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f-p*g*x;break;case"ZYX":this._x=p*h*f-c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f+p*g*x;break;case"YZX":this._x=p*h*f+c*g*x,this._y=c*g*f+p*h*x,this._z=c*h*x-p*g*f,this._w=c*h*f-p*g*x;break;case"XZY":this._x=p*h*f-c*g*x,this._y=c*g*f-p*h*x,this._z=c*h*x+p*g*f,this._w=c*h*f+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],o=t[1],s=t[5],l=t[9],c=t[2],h=t[6],f=t[10],p=n+s+f;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(a-c)*g,this._z=(o-r)*g}else if(n>s&&n>f){const g=2*Math.sqrt(1+n-s-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(a+c)/g}else if(s>f){const g=2*Math.sqrt(1+s-n-f);this._w=(a-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-n-s);this._w=(o-r)/g,this._x=(a+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,o=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*s+r*c-a*l,this._y=r*h+o*l+a*s-n*c,this._z=a*h+o*c+n*l-r*s,this._w=o*h-n*s-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+n*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=n,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),f=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=r*f+this._y*p,this._z=a*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_a.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_a.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,c=2*(o*r-s*n),h=2*(s*t-a*r),f=2*(a*n-o*t);return this.x=t+l*c+o*f-s*h,this.y=n+l*h+s*c-a*f,this.z=r+l*f+a*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,o=t.x,s=t.y,l=t.z;return this.x=r*l-a*s,this.y=a*o-n*l,this.z=n*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ur.copy(this).projectOnVector(e),this.sub(Ur)}reflect(e){return this.sub(Ur.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ur=new k,_a=new Nn;class Pi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,s=a.count;o<s;o++)e.isMesh===!0?e.getVertexPosition(o,Ht):Ht.fromBufferAttribute(a,o),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(e.matrixWorld),this.union(Oi)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gi),Fi.subVectors(this.max,gi),Wn.subVectors(e.a,gi),Xn.subVectors(e.b,gi),Yn.subVectors(e.c,gi),cn.subVectors(Xn,Wn),un.subVectors(Yn,Xn),bn.subVectors(Wn,Yn);let t=[0,-cn.z,cn.y,0,-un.z,un.y,0,-bn.z,bn.y,cn.z,0,-cn.x,un.z,0,-un.x,bn.z,0,-bn.x,-cn.y,cn.x,0,-un.y,un.x,0,-bn.y,bn.x,0];return!Ir(t,Wn,Xn,Yn,Fi)||(t=[1,0,0,0,1,0,0,0,1],!Ir(t,Wn,Xn,Yn,Fi))?!1:(Bi.crossVectors(cn,un),t=[Bi.x,Bi.y,Bi.z],Ir(t,Wn,Xn,Yn,Fi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new k,new k,new k,new k,new k,new k,new k,new k],Ht=new k,Oi=new Pi,Wn=new k,Xn=new k,Yn=new k,cn=new k,un=new k,bn=new k,gi=new k,Fi=new k,Bi=new k,Tn=new k;function Ir(i,e,t,n,r){for(let a=0,o=i.length-3;a<=o;a+=3){Tn.fromArray(i,a);const s=r.x*Math.abs(Tn.x)+r.y*Math.abs(Tn.y)+r.z*Math.abs(Tn.z),l=e.dot(Tn),c=t.dot(Tn),h=n.dot(Tn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const mc=new Pi,vi=new k,Nr=new k;class _r{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):mc.setFromPoints(e).getCenter(n);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vi.subVectors(e,this.center);const t=vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vi.copy(e.center).add(Nr)),this.expandByPoint(vi.copy(e.center).sub(Nr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new k,Or=new k,zi=new k,hn=new k,Fr=new k,Hi=new k,Br=new k;class Es{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Or.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),hn.copy(this.origin).sub(Or);const a=e.distanceTo(t)*.5,o=-this.direction.dot(zi),s=hn.dot(this.direction),l=-hn.dot(zi),c=hn.lengthSq(),h=Math.abs(1-o*o);let f,p,g,x;if(h>0)if(f=o*l-s,p=o*s-l,x=a*h,f>=0)if(p>=-x)if(p<=x){const M=1/h;f*=M,p*=M,g=f*(f+o*p+2*s)+p*(o*f+p+2*l)+c}else p=a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p=-a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;else p<=-x?(f=Math.max(0,-(-o*a+s)),p=f>0?-a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c):p<=x?(f=0,p=Math.min(Math.max(-a,-l),a),g=p*(p+2*l)+c):(f=Math.max(0,-(o*a+s)),p=f>0?a:Math.min(Math.max(-a,-l),a),g=-f*f+p*(p+2*l)+c);else p=o>0?-a:a,f=Math.max(0,-(o*p+s)),g=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Or).addScaledVector(zi,p),g}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),r=en.dot(en)-n*n,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=n-o,l=n+o;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,o,s,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),h>=0?(a=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(a=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||a>r||((a>n||isNaN(n))&&(n=a),(o<r||isNaN(r))&&(r=o),f>=0?(s=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(s=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||s>r)||((s>n||n!==n)&&(n=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,r,a){Fr.subVectors(t,e),Hi.subVectors(n,e),Br.crossVectors(Fr,Hi);let o=this.direction.dot(Br),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;hn.subVectors(this.origin,e);const l=s*this.direction.dot(Hi.crossVectors(hn,Hi));if(l<0)return null;const c=s*this.direction.dot(Fr.cross(hn));if(c<0||l+c>o)return null;const h=-s*hn.dot(Br);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,n,r,a,o,s,l,c,h,f,p,g,x,M,_){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,o,s,l,c,h,f,p,g,x,M,_)}set(e,t,n,r,a,o,s,l,c,h,f,p,g,x,M,_){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=a,d[5]=o,d[9]=s,d[13]=l,d[2]=c,d[6]=h,d[10]=f,d[14]=p,d[3]=g,d[7]=x,d[11]=M,d[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/qn.setFromMatrixColumn(e,0).length(),a=1/qn.setFromMatrixColumn(e,1).length(),o=1/qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,o=Math.cos(n),s=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const p=o*h,g=o*f,x=s*h,M=s*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=g+x*c,t[5]=p-M*c,t[9]=-s*l,t[2]=M-p*c,t[6]=x+g*c,t[10]=o*l}else if(e.order==="YXZ"){const p=l*h,g=l*f,x=c*h,M=c*f;t[0]=p+M*s,t[4]=x*s-g,t[8]=o*c,t[1]=o*f,t[5]=o*h,t[9]=-s,t[2]=g*s-x,t[6]=M+p*s,t[10]=o*l}else if(e.order==="ZXY"){const p=l*h,g=l*f,x=c*h,M=c*f;t[0]=p-M*s,t[4]=-o*f,t[8]=x+g*s,t[1]=g+x*s,t[5]=o*h,t[9]=M-p*s,t[2]=-o*c,t[6]=s,t[10]=o*l}else if(e.order==="ZYX"){const p=o*h,g=o*f,x=s*h,M=s*f;t[0]=l*h,t[4]=x*c-g,t[8]=p*c+M,t[1]=l*f,t[5]=M*c+p,t[9]=g*c-x,t[2]=-c,t[6]=s*l,t[10]=o*l}else if(e.order==="YZX"){const p=o*l,g=o*c,x=s*l,M=s*c;t[0]=l*h,t[4]=M-p*f,t[8]=x*f+g,t[1]=f,t[5]=o*h,t[9]=-s*h,t[2]=-c*h,t[6]=g*f+x,t[10]=p-M*f}else if(e.order==="XZY"){const p=o*l,g=o*c,x=s*l,M=s*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=p*f+M,t[5]=o*h,t[9]=g*f-x,t[2]=x*f-g,t[6]=s*h,t[10]=M*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_c,e,gc)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),dn.crossVectors(n,Ut),dn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),dn.crossVectors(n,Ut)),dn.normalize(),Gi.crossVectors(Ut,dn),r[0]=dn.x,r[4]=Gi.x,r[8]=Ut.x,r[1]=dn.y,r[5]=Gi.y,r[9]=Ut.y,r[2]=dn.z,r[6]=Gi.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,o=n[0],s=n[4],l=n[8],c=n[12],h=n[1],f=n[5],p=n[9],g=n[13],x=n[2],M=n[6],_=n[10],d=n[14],C=n[3],y=n[7],R=n[11],U=n[15],H=r[0],N=r[4],ne=r[8],A=r[12],L=r[1],I=r[5],he=r[9],_e=r[13],V=r[2],Q=r[6],se=r[10],ee=r[14],Se=r[3],ae=r[7],re=r[11],W=r[15];return a[0]=o*H+s*L+l*V+c*Se,a[4]=o*N+s*I+l*Q+c*ae,a[8]=o*ne+s*he+l*se+c*re,a[12]=o*A+s*_e+l*ee+c*W,a[1]=h*H+f*L+p*V+g*Se,a[5]=h*N+f*I+p*Q+g*ae,a[9]=h*ne+f*he+p*se+g*re,a[13]=h*A+f*_e+p*ee+g*W,a[2]=x*H+M*L+_*V+d*Se,a[6]=x*N+M*I+_*Q+d*ae,a[10]=x*ne+M*he+_*se+d*re,a[14]=x*A+M*_e+_*ee+d*W,a[3]=C*H+y*L+R*V+U*Se,a[7]=C*N+y*I+R*Q+U*ae,a[11]=C*ne+y*he+R*se+U*re,a[15]=C*A+y*_e+R*ee+U*W,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],c=e[13],h=e[2],f=e[6],p=e[10],g=e[14],x=e[3],M=e[7],_=e[11],d=e[15];return x*(+a*l*f-r*c*f-a*s*p+n*c*p+r*s*g-n*l*g)+M*(+t*l*g-t*c*p+a*o*p-r*o*g+r*c*h-a*l*h)+_*(+t*c*f-t*s*g-a*o*f+n*o*g+a*s*h-n*c*h)+d*(-r*s*h-t*l*f+t*s*p+r*o*f-n*o*p+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=e[9],p=e[10],g=e[11],x=e[12],M=e[13],_=e[14],d=e[15],C=f*_*c-M*p*c+M*l*g-s*_*g-f*l*d+s*p*d,y=x*p*c-h*_*c-x*l*g+o*_*g+h*l*d-o*p*d,R=h*M*c-x*f*c+x*s*g-o*M*g-h*s*d+o*f*d,U=x*f*l-h*M*l-x*s*p+o*M*p+h*s*_-o*f*_,H=t*C+n*y+r*R+a*U;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/H;return e[0]=C*N,e[1]=(M*p*a-f*_*a-M*r*g+n*_*g+f*r*d-n*p*d)*N,e[2]=(s*_*a-M*l*a+M*r*c-n*_*c-s*r*d+n*l*d)*N,e[3]=(f*l*a-s*p*a-f*r*c+n*p*c+s*r*g-n*l*g)*N,e[4]=y*N,e[5]=(h*_*a-x*p*a+x*r*g-t*_*g-h*r*d+t*p*d)*N,e[6]=(x*l*a-o*_*a-x*r*c+t*_*c+o*r*d-t*l*d)*N,e[7]=(o*p*a-h*l*a+h*r*c-t*p*c-o*r*g+t*l*g)*N,e[8]=R*N,e[9]=(x*f*a-h*M*a-x*n*g+t*M*g+h*n*d-t*f*d)*N,e[10]=(o*M*a-x*s*a+x*n*c-t*M*c-o*n*d+t*s*d)*N,e[11]=(h*s*a-o*f*a-h*n*c+t*f*c+o*n*g-t*s*g)*N,e[12]=U*N,e[13]=(h*M*r-x*f*r+x*n*p-t*M*p-h*n*_+t*f*_)*N,e[14]=(x*s*r-o*M*r-x*n*l+t*M*l+o*n*_-t*s*_)*N,e[15]=(o*f*r-h*s*r+h*n*l-t*f*l-o*n*p+t*s*p)*N,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,o=e.x,s=e.y,l=e.z,c=a*o,h=a*s;return this.set(c*o+n,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+n,h*l-r*o,0,c*l-r*s,h*l+r*o,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,o){return this.set(1,n,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,o=t._y,s=t._z,l=t._w,c=a+a,h=o+o,f=s+s,p=a*c,g=a*h,x=a*f,M=o*h,_=o*f,d=s*f,C=l*c,y=l*h,R=l*f,U=n.x,H=n.y,N=n.z;return r[0]=(1-(M+d))*U,r[1]=(g+R)*U,r[2]=(x-y)*U,r[3]=0,r[4]=(g-R)*H,r[5]=(1-(p+d))*H,r[6]=(_+C)*H,r[7]=0,r[8]=(x+y)*N,r[9]=(_-C)*N,r[10]=(1-(p+M))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=qn.set(r[0],r[1],r[2]).length();const o=qn.set(r[4],r[5],r[6]).length(),s=qn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Gt.copy(this);const c=1/a,h=1/o,f=1/s;return Gt.elements[0]*=c,Gt.elements[1]*=c,Gt.elements[2]*=c,Gt.elements[4]*=h,Gt.elements[5]*=h,Gt.elements[6]*=h,Gt.elements[8]*=f,Gt.elements[9]*=f,Gt.elements[10]*=f,t.setFromRotationMatrix(Gt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,a,o,s=on){const l=this.elements,c=2*a/(t-e),h=2*a/(n-r),f=(t+e)/(t-e),p=(n+r)/(n-r);let g,x;if(s===on)g=-(o+a)/(o-a),x=-2*o*a/(o-a);else if(s===hr)g=-o/(o-a),x=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,o,s=on){const l=this.elements,c=1/(t-e),h=1/(n-r),f=1/(o-a),p=(t+e)*c,g=(n+r)*h;let x,M;if(s===on)x=(o+a)*f,M=-2*f;else if(s===hr)x=a*f,M=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qn=new k,Gt=new ct,_c=new k(0,0,0),gc=new k(1,1,1),dn=new k,Gi=new k,Ut=new k,ga=new ct,va=new Nn;class gr{constructor(e=0,t=0,n=0,r=gr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],c=r[5],h=r[9],f=r[2],p=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(gt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(s,g));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ga.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ga,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return va.setFromEuler(this),this.setFromQuaternion(va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gr.DEFAULT_ORDER="XYZ";class Co{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vc=0;const xa=new k,jn=new Nn,tn=new ct,ki=new k,xi=new k,xc=new k,Ec=new Nn,Ea=new k(1,0,0),Sa=new k(0,1,0),Ma=new k(0,0,1),Sc={type:"added"},Mc={type:"removed"};class St extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vc++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new k,t=new gr,n=new Nn,r=new k(1,1,1);function a(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Je}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Co,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ma,e)}translateOnAxis(e,t){return xa.copy(e).applyQuaternion(this.quaternion),this.position.add(xa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ma,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ki.copy(e):ki.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(xi,ki,this.up):tn.lookAt(ki,xi,this.up),this.quaternion.setFromRotationMatrix(tn),r&&(tn.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(tn),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Sc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,e,xc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,Ec,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(t){const s=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),g=o(e.animations),x=o(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}St.DEFAULT_UP=new k(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new k,nn=new k,zr=new k,rn=new k,Kn=new k,Zn=new k,ya=new k,Hr=new k,Gr=new k,kr=new k;let Vi=!1;class Vt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kt.subVectors(e,t),r.cross(kt);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){kt.subVectors(r,t),nn.subVectors(n,t),zr.subVectors(e,t);const o=kt.dot(kt),s=kt.dot(nn),l=kt.dot(zr),c=nn.dot(nn),h=nn.dot(zr),f=o*c-s*s;if(f===0)return a.set(-2,-1,-1);const p=1/f,g=(c*l-s*h)*p,x=(o*h-s*l)*p;return a.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,rn),rn.x>=0&&rn.y>=0&&rn.x+rn.y<=1}static getUV(e,t,n,r,a,o,s,l){return Vi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vi=!0),this.getInterpolation(e,t,n,r,a,o,s,l)}static getInterpolation(e,t,n,r,a,o,s,l){return this.getBarycoord(e,t,n,r,rn),l.setScalar(0),l.addScaledVector(a,rn.x),l.addScaledVector(o,rn.y),l.addScaledVector(s,rn.z),l}static isFrontFacing(e,t,n,r){return kt.subVectors(n,t),nn.subVectors(e,t),kt.cross(nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),kt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,a){return Vi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vi=!0),Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}getInterpolation(e,t,n,r,a){return Vt.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let o,s;Kn.subVectors(r,n),Zn.subVectors(a,n),Hr.subVectors(e,n);const l=Kn.dot(Hr),c=Zn.dot(Hr);if(l<=0&&c<=0)return t.copy(n);Gr.subVectors(e,r);const h=Kn.dot(Gr),f=Zn.dot(Gr);if(h>=0&&f<=h)return t.copy(r);const p=l*f-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Kn,o);kr.subVectors(e,a);const g=Kn.dot(kr),x=Zn.dot(kr);if(x>=0&&g<=x)return t.copy(a);const M=g*c-l*x;if(M<=0&&c>=0&&x<=0)return s=c/(c-x),t.copy(n).addScaledVector(Zn,s);const _=h*x-g*f;if(_<=0&&f-h>=0&&g-x>=0)return ya.subVectors(a,r),s=(f-h)/(f-h+(g-x)),t.copy(r).addScaledVector(ya,s);const d=1/(_+M+p);return o=M*d,s=p*d,t.copy(n).addScaledVector(Kn,o).addScaledVector(Zn,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class et{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=it.workingColorSpace){if(e=xs(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,o=2*n-a;this.r=Vr(o,a,e+1/3),this.g=Vr(o,a,e),this.b=Vr(o,a,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,t=_t){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_t){const n=Lo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oi(e.r),this.g=oi(e.g),this.b=oi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_t){return it.fromWorkingColorSpace(xt.copy(this),e),Math.round(gt(xt.r*255,0,255))*65536+Math.round(gt(xt.g*255,0,255))*256+Math.round(gt(xt.b*255,0,255))}getHexString(e=_t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,r=xt.g,a=xt.b,o=Math.max(n,r,a),s=Math.min(n,r,a);let l,c;const h=(s+o)/2;if(s===o)l=0,c=0;else{const f=o-s;switch(c=h<=.5?f/(o+s):f/(2-o-s),o){case n:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-n)/f+2;break;case a:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=it.workingColorSpace){return it.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=_t){it.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,r=xt.b;return e!==_t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Wi);const n=bi(fn.h,Wi.h,t),r=bi(fn.s,Wi.s,t),a=bi(fn.l,Wi.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new et;et.NAMES=Lo;let yc=0;class fi extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yc++}),this.uuid=di(),this.name="",this.type="Material",this.blending=ai,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=is,this.blendDst=rs,this.blendEquation=Cn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ca,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==is&&(n.blendSrc=this.blendSrc),this.blendDst!==rs&&(n.blendDst=this.blendDst),this.blendEquation!==Cn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ca&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ss extends fi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new k,Xi=new qe;class Jt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this.updateRange={offset:0,count:-1},this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xi.fromBufferAttribute(this,t),Xi.applyMatrix3(e),this.setXY(t,Xi.x,Xi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),r=bt(r,this.array),a=bt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Po extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Do extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pt extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bc=0;const Ot=new ct,Wr=new St,Jn=new k,It=new Pi,Ei=new Pi,mt=new k;class Yt extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(To(e)?Do:Po)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Je().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jn).negate(),this.translate(Jn.x,Jn.y,Jn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Pt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];It.setFromBufferAttribute(a),this.morphTargetsRelative?(mt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(mt),mt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(mt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const s=t[a];Ei.setFromBufferAttribute(s),this.morphTargetsRelative?(mt.addVectors(It.min,Ei.min),It.expandByPoint(mt),mt.addVectors(It.max,Ei.max),It.expandByPoint(mt)):(It.expandByPoint(Ei.min),It.expandByPoint(Ei.max))}It.getCenter(n);let r=0;for(let a=0,o=e.count;a<o;a++)mt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(mt));if(t)for(let a=0,o=t.length;a<o;a++){const s=t[a],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)mt.fromBufferAttribute(s,c),l&&(Jn.fromBufferAttribute(e,c),mt.add(Jn)),r=Math.max(r,n.distanceToSquared(mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<s;L++)c[L]=new k,h[L]=new k;const f=new k,p=new k,g=new k,x=new qe,M=new qe,_=new qe,d=new k,C=new k;function y(L,I,he){f.fromArray(r,L*3),p.fromArray(r,I*3),g.fromArray(r,he*3),x.fromArray(o,L*2),M.fromArray(o,I*2),_.fromArray(o,he*2),p.sub(f),g.sub(f),M.sub(x),_.sub(x);const _e=1/(M.x*_.y-_.x*M.y);isFinite(_e)&&(d.copy(p).multiplyScalar(_.y).addScaledVector(g,-M.y).multiplyScalar(_e),C.copy(g).multiplyScalar(M.x).addScaledVector(p,-_.x).multiplyScalar(_e),c[L].add(d),c[I].add(d),c[he].add(d),h[L].add(C),h[I].add(C),h[he].add(C))}let R=this.groups;R.length===0&&(R=[{start:0,count:n.length}]);for(let L=0,I=R.length;L<I;++L){const he=R[L],_e=he.start,V=he.count;for(let Q=_e,se=_e+V;Q<se;Q+=3)y(n[Q+0],n[Q+1],n[Q+2])}const U=new k,H=new k,N=new k,ne=new k;function A(L){N.fromArray(a,L*3),ne.copy(N);const I=c[L];U.copy(I),U.sub(N.multiplyScalar(N.dot(I))).normalize(),H.crossVectors(ne,I);const _e=H.dot(h[L])<0?-1:1;l[L*4]=U.x,l[L*4+1]=U.y,l[L*4+2]=U.z,l[L*4+3]=_e}for(let L=0,I=R.length;L<I;++L){const he=R[L],_e=he.start,V=he.count;for(let Q=_e,se=_e+V;Q<se;Q+=3)A(n[Q+0]),A(n[Q+1]),A(n[Q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new k,a=new k,o=new k,s=new k,l=new k,c=new k,h=new k,f=new k;if(e)for(let p=0,g=e.count;p<g;p+=3){const x=e.getX(p+0),M=e.getX(p+1),_=e.getX(p+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,M),o.fromBufferAttribute(t,_),h.subVectors(o,a),f.subVectors(r,a),h.cross(f),s.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,_),s.add(h),l.add(h),c.add(h),n.setXYZ(x,s.x,s.y,s.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,a),f.subVectors(r,a),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)mt.fromBufferAttribute(e,t),mt.normalize(),e.setXYZ(t,mt.x,mt.y,mt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,f=s.normalized,p=new c.constructor(l.length*h);let g=0,x=0;for(let M=0,_=l.length;M<_;M++){s.isInterleavedBufferAttribute?g=l[M]*s.data.stride+s.offset:g=l[M]*h;for(let d=0;d<h;d++)p[x++]=c[g++]}return new Jt(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,n);t.setAttribute(s,c)}const a=this.morphAttributes;for(const s in a){const l=[],c=a[s];for(let h=0,f=c.length;h<f;h++){const p=c[h],g=e(p,n);l.push(g)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const c=o[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,p=c.length;f<p;f++){const g=c[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],f=a[c];for(let p=0,g=f.length;p<g;p++)h.push(f[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ba=new ct,An=new Es,Yi=new _r,Ta=new k,$n=new k,Qn=new k,ei=new k,Xr=new k,qi=new k,ji=new qe,Ki=new qe,Zi=new qe,Aa=new k,wa=new k,Ra=new k,Ji=new k,$i=new k;class Zt extends St{constructor(e=new Yt,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){qi.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=s[l],f=a[l];h!==0&&(Xr.fromBufferAttribute(f,e),o?qi.addScaledVector(Xr,h):qi.addScaledVector(Xr.sub(t),h))}t.add(qi)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(a),An.copy(e.ray).recast(e.near),!(Yi.containsPoint(An.origin)===!1&&(An.intersectSphere(Yi,Ta)===null||An.origin.distanceToSquared(Ta)>(e.far-e.near)**2))&&(ba.copy(a).invert(),An.copy(e.ray).applyMatrix4(ba),!(n.boundingBox!==null&&An.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,An)))}_computeIntersections(e,t,n){let r;const a=this.geometry,o=this.material,s=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,f=a.attributes.normal,p=a.groups,g=a.drawRange;if(s!==null)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){const _=p[x],d=o[_.materialIndex],C=Math.max(_.start,g.start),y=Math.min(s.count,Math.min(_.start+_.count,g.start+g.count));for(let R=C,U=y;R<U;R+=3){const H=s.getX(R),N=s.getX(R+1),ne=s.getX(R+2);r=Qi(this,d,e,n,c,h,f,H,N,ne),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(s.count,g.start+g.count);for(let _=x,d=M;_<d;_+=3){const C=s.getX(_),y=s.getX(_+1),R=s.getX(_+2);r=Qi(this,o,e,n,c,h,f,C,y,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){const _=p[x],d=o[_.materialIndex],C=Math.max(_.start,g.start),y=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let R=C,U=y;R<U;R+=3){const H=R,N=R+1,ne=R+2;r=Qi(this,d,e,n,c,h,f,H,N,ne),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let _=x,d=M;_<d;_+=3){const C=_,y=_+1,R=_+2;r=Qi(this,o,e,n,c,h,f,C,y,R),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Tc(i,e,t,n,r,a,o,s){let l;if(e.side===Ct?l=n.intersectTriangle(o,a,r,!0,s):l=n.intersectTriangle(r,a,o,e.side===En,s),l===null)return null;$i.copy(s),$i.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo($i);return c<t.near||c>t.far?null:{distance:c,point:$i.clone(),object:i}}function Qi(i,e,t,n,r,a,o,s,l,c){i.getVertexPosition(s,$n),i.getVertexPosition(l,Qn),i.getVertexPosition(c,ei);const h=Tc(i,e,t,n,$n,Qn,ei,Ji);if(h){r&&(ji.fromBufferAttribute(r,s),Ki.fromBufferAttribute(r,l),Zi.fromBufferAttribute(r,c),h.uv=Vt.getInterpolation(Ji,$n,Qn,ei,ji,Ki,Zi,new qe)),a&&(ji.fromBufferAttribute(a,s),Ki.fromBufferAttribute(a,l),Zi.fromBufferAttribute(a,c),h.uv1=Vt.getInterpolation(Ji,$n,Qn,ei,ji,Ki,Zi,new qe),h.uv2=h.uv1),o&&(Aa.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,l),Ra.fromBufferAttribute(o,c),h.normal=Vt.getInterpolation(Ji,$n,Qn,ei,Aa,wa,Ra,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new k,materialIndex:0};Vt.getNormal($n,Qn,ei,f.normal),h.face=f}return h}class Di extends Yt{constructor(e=1,t=1,n=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],c=[],h=[],f=[];let p=0,g=0;x("z","y","x",-1,-1,n,t,e,o,a,0),x("z","y","x",1,-1,n,t,-e,o,a,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(h,3)),this.setAttribute("uv",new Pt(f,2));function x(M,_,d,C,y,R,U,H,N,ne,A){const L=R/N,I=U/ne,he=R/2,_e=U/2,V=H/2,Q=N+1,se=ne+1;let ee=0,Se=0;const ae=new k;for(let re=0;re<se;re++){const W=re*I-_e;for(let K=0;K<Q;K++){const fe=K*L-he;ae[M]=fe*C,ae[_]=W*y,ae[d]=V,c.push(ae.x,ae.y,ae.z),ae[M]=0,ae[_]=0,ae[d]=H>0?1:-1,h.push(ae.x,ae.y,ae.z),f.push(K/N),f.push(1-re/ne),ee+=1}}for(let re=0;re<ne;re++)for(let W=0;W<N;W++){const K=p+W+Q*re,fe=p+W+Q*(re+1),le=p+(W+1)+Q*(re+1),oe=p+(W+1)+Q*re;l.push(K,fe,oe),l.push(fe,le,oe),Se+=6}s.addGroup(g,Se,A),g+=Se,p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=hi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ac(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uo(i){return i.getRenderTarget()===null?i.outputColorSpace:it.workingColorSpace}const wc={clone:hi,merge:Tt};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends fi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=hi(e.uniforms),this.uniformsGroups=Ac(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Io extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=on}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nt extends Io{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ri*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(yi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ti=-90,ni=1;class Lc extends St{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nt(ti,ni,e,t);r.layers=this.layers,this.add(r);const a=new Nt(ti,ni,e,t);a.layers=this.layers,this.add(a);const o=new Nt(ti,ni,e,t);o.layers=this.layers,this.add(o);const s=new Nt(ti,ni,e,t);s.layers=this.layers,this.add(s);const l=new Nt(ti,ni,e,t);l.layers=this.layers,this.add(l);const c=new Nt(ti,ni,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,o,s,l]=t;for(const c of t)this.remove(c);if(e===on)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,s,l,c,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,s),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(f,p,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class Ms extends Lt{constructor(e,t,n,r,a,o,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:li,super(e,t,n,r,a,o,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pc extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?_t:Bt),this.texture=new Ms(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ft}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Di(5,5,5),a=new On({name:"CubemapFromEquirect",uniforms:hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:gn});a.uniforms.tEquirect.value=t;const o=new Zt(r,a),s=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Ft),new Lc(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(a)}}const Yr=new k,Dc=new k,Uc=new Je;class pn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Yr.subVectors(n,t).cross(Dc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Yr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Uc.getNormalMatrix(e),r=this.coplanarPoint(Yr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new _r,er=new k;class ys{constructor(e=new pn,t=new pn,n=new pn,r=new pn,a=new pn,o=new pn){this.planes=[e,t,n,r,a,o]}set(e,t,n,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=on){const n=this.planes,r=e.elements,a=r[0],o=r[1],s=r[2],l=r[3],c=r[4],h=r[5],f=r[6],p=r[7],g=r[8],x=r[9],M=r[10],_=r[11],d=r[12],C=r[13],y=r[14],R=r[15];if(n[0].setComponents(l-a,p-c,_-g,R-d).normalize(),n[1].setComponents(l+a,p+c,_+g,R+d).normalize(),n[2].setComponents(l+o,p+h,_+x,R+C).normalize(),n[3].setComponents(l-o,p-h,_-x,R-C).normalize(),n[4].setComponents(l-s,p-f,_-M,R-y).normalize(),t===on)n[5].setComponents(l+s,p+f,_+M,R+y).normalize();else if(t===hr)n[5].setComponents(s,f,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(er.x=r.normal.x>0?e.max.x:e.min.x,er.y=r.normal.y>0?e.max.y:e.min.y,er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function No(){let i=null,e=!1,t=null,n=null;function r(a,o){t(a,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Ic(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,h){const f=c.array,p=c.usage,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,f,p),c.onUploadCallback();let x;if(f instanceof Float32Array)x=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=i.SHORT;else if(f instanceof Uint32Array)x=i.UNSIGNED_INT;else if(f instanceof Int32Array)x=i.INT;else if(f instanceof Int8Array)x=i.BYTE;else if(f instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,f){const p=h.array,g=h.updateRange;i.bindBuffer(f,c),g.count===-1?i.bufferSubData(f,0,p):(t?i.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):i.bufferSubData(f,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,r(c,h)):f.version<c.version&&(a(f.buffer,c,h),f.version=c.version)}return{get:o,remove:s,update:l}}class bs extends Yt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,o=t/2,s=Math.floor(n),l=Math.floor(r),c=s+1,h=l+1,f=e/s,p=t/l,g=[],x=[],M=[],_=[];for(let d=0;d<h;d++){const C=d*p-o;for(let y=0;y<c;y++){const R=y*f-a;x.push(R,-C,0),M.push(0,0,1),_.push(y/s),_.push(1-d/l)}}for(let d=0;d<l;d++)for(let C=0;C<s;C++){const y=C+c*d,R=C+c*(d+1),U=C+1+c*(d+1),H=C+1+c*d;g.push(y,R,H),g.push(R,U,H)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Nc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Hc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ru=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,au=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cu="gl_FragColor = linearToOutputTexel( gl_FragColor );",uu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_u=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Su=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ru=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Du=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Iu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ou=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Hu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ku=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,th=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ih=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,mh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_h=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Eh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Th=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Hh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yh=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ed=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,td=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,id=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ud=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Nc,alphahash_pars_fragment:Oc,alphamap_fragment:Fc,alphamap_pars_fragment:Bc,alphatest_fragment:zc,alphatest_pars_fragment:Hc,aomap_fragment:Gc,aomap_pars_fragment:kc,begin_vertex:Vc,beginnormal_vertex:Wc,bsdfs:Xc,iridescence_fragment:Yc,bumpmap_pars_fragment:qc,clipping_planes_fragment:jc,clipping_planes_pars_fragment:Kc,clipping_planes_pars_vertex:Zc,clipping_planes_vertex:Jc,color_fragment:$c,color_pars_fragment:Qc,color_pars_vertex:eu,color_vertex:tu,common:nu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:ru,displacementmap_pars_vertex:su,displacementmap_vertex:au,emissivemap_fragment:ou,emissivemap_pars_fragment:lu,colorspace_fragment:cu,colorspace_pars_fragment:uu,envmap_fragment:hu,envmap_common_pars_fragment:du,envmap_pars_fragment:fu,envmap_pars_vertex:pu,envmap_physical_pars_fragment:Au,envmap_vertex:mu,fog_vertex:_u,fog_pars_vertex:gu,fog_fragment:vu,fog_pars_fragment:xu,gradientmap_pars_fragment:Eu,lightmap_fragment:Su,lightmap_pars_fragment:Mu,lights_lambert_fragment:yu,lights_lambert_pars_fragment:bu,lights_pars_begin:Tu,lights_toon_fragment:wu,lights_toon_pars_fragment:Ru,lights_phong_fragment:Cu,lights_phong_pars_fragment:Lu,lights_physical_fragment:Pu,lights_physical_pars_fragment:Du,lights_fragment_begin:Uu,lights_fragment_maps:Iu,lights_fragment_end:Nu,logdepthbuf_fragment:Ou,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Bu,logdepthbuf_vertex:zu,map_fragment:Hu,map_pars_fragment:Gu,map_particle_fragment:ku,map_particle_pars_fragment:Vu,metalnessmap_fragment:Wu,metalnessmap_pars_fragment:Xu,morphcolor_vertex:Yu,morphnormal_vertex:qu,morphtarget_pars_vertex:ju,morphtarget_vertex:Ku,normal_fragment_begin:Zu,normal_fragment_maps:Ju,normal_pars_fragment:$u,normal_pars_vertex:Qu,normal_vertex:eh,normalmap_pars_fragment:th,clearcoat_normal_fragment_begin:nh,clearcoat_normal_fragment_maps:ih,clearcoat_pars_fragment:rh,iridescence_pars_fragment:sh,opaque_fragment:ah,packing:oh,premultiplied_alpha_fragment:lh,project_vertex:ch,dithering_fragment:uh,dithering_pars_fragment:hh,roughnessmap_fragment:dh,roughnessmap_pars_fragment:fh,shadowmap_pars_fragment:ph,shadowmap_pars_vertex:mh,shadowmap_vertex:_h,shadowmask_pars_fragment:gh,skinbase_vertex:vh,skinning_pars_vertex:xh,skinning_vertex:Eh,skinnormal_vertex:Sh,specularmap_fragment:Mh,specularmap_pars_fragment:yh,tonemapping_fragment:bh,tonemapping_pars_fragment:Th,transmission_fragment:Ah,transmission_pars_fragment:wh,uv_pars_fragment:Rh,uv_pars_vertex:Ch,uv_vertex:Lh,worldpos_vertex:Ph,background_vert:Dh,background_frag:Uh,backgroundCube_vert:Ih,backgroundCube_frag:Nh,cube_vert:Oh,cube_frag:Fh,depth_vert:Bh,depth_frag:zh,distanceRGBA_vert:Hh,distanceRGBA_frag:Gh,equirect_vert:kh,equirect_frag:Vh,linedashed_vert:Wh,linedashed_frag:Xh,meshbasic_vert:Yh,meshbasic_frag:qh,meshlambert_vert:jh,meshlambert_frag:Kh,meshmatcap_vert:Zh,meshmatcap_frag:Jh,meshnormal_vert:$h,meshnormal_frag:Qh,meshphong_vert:ed,meshphong_frag:td,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:rd,meshtoon_frag:sd,points_vert:ad,points_frag:od,shadow_vert:ld,shadow_frag:cd,sprite_vert:ud,sprite_frag:hd},Me={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jt={basic:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Tt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Tt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Tt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new et(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Tt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Tt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Tt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Tt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Tt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Tt([Me.common,Me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Tt([Me.lights,Me.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};jt.physical={uniforms:Tt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const tr={r:0,b:0,g:0};function dd(i,e,t,n,r,a,o){const s=new et(0);let l=a===!0?0:1,c,h,f=null,p=0,g=null;function x(_,d){let C=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?t:e).get(y)),y===null?M(s,l):y&&y.isColor&&(M(y,1),C=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===pr)?(h===void 0&&(h=new Zt(new Di(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:hi(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,H,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=it.getTransfer(y.colorSpace)!==at,(f!==y||p!==y.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,f=y,p=y.version,g=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Zt(new bs(2,2),new On({name:"BackgroundMaterial",uniforms:hi(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==at,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||p!==y.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,p=y.version,g=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function M(_,d){_.getRGB(tr,Uo(i)),n.buffers.color.setClear(tr.r,tr.g,tr.b,d,o)}return{getClearColor:function(){return s},setClearColor:function(_,d=1){s.set(_),l=d,M(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,M(s,l)},render:x}}function fd(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||a!==null,s={},l=_(null);let c=l,h=!1;function f(V,Q,se,ee,Se){let ae=!1;if(o){const re=M(ee,se,Q);c!==re&&(c=re,g(c.object)),ae=d(V,ee,se,Se),ae&&C(V,ee,se,Se)}else{const re=Q.wireframe===!0;(c.geometry!==ee.id||c.program!==se.id||c.wireframe!==re)&&(c.geometry=ee.id,c.program=se.id,c.wireframe=re,ae=!0)}Se!==null&&t.update(Se,i.ELEMENT_ARRAY_BUFFER),(ae||h)&&(h=!1,ne(V,Q,se,ee),Se!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Se).buffer))}function p(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function g(V){return n.isWebGL2?i.bindVertexArray(V):a.bindVertexArrayOES(V)}function x(V){return n.isWebGL2?i.deleteVertexArray(V):a.deleteVertexArrayOES(V)}function M(V,Q,se){const ee=se.wireframe===!0;let Se=s[V.id];Se===void 0&&(Se={},s[V.id]=Se);let ae=Se[Q.id];ae===void 0&&(ae={},Se[Q.id]=ae);let re=ae[ee];return re===void 0&&(re=_(p()),ae[ee]=re),re}function _(V){const Q=[],se=[],ee=[];for(let Se=0;Se<r;Se++)Q[Se]=0,se[Se]=0,ee[Se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:se,attributeDivisors:ee,object:V,attributes:{},index:null}}function d(V,Q,se,ee){const Se=c.attributes,ae=Q.attributes;let re=0;const W=se.getAttributes();for(const K in W)if(W[K].location>=0){const le=Se[K];let oe=ae[K];if(oe===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(oe=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(oe=V.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;re++}return c.attributesNum!==re||c.index!==ee}function C(V,Q,se,ee){const Se={},ae=Q.attributes;let re=0;const W=se.getAttributes();for(const K in W)if(W[K].location>=0){let le=ae[K];le===void 0&&(K==="instanceMatrix"&&V.instanceMatrix&&(le=V.instanceMatrix),K==="instanceColor"&&V.instanceColor&&(le=V.instanceColor));const oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),Se[K]=oe,re++}c.attributes=Se,c.attributesNum=re,c.index=ee}function y(){const V=c.newAttributes;for(let Q=0,se=V.length;Q<se;Q++)V[Q]=0}function R(V){U(V,0)}function U(V,Q){const se=c.newAttributes,ee=c.enabledAttributes,Se=c.attributeDivisors;se[V]=1,ee[V]===0&&(i.enableVertexAttribArray(V),ee[V]=1),Se[V]!==Q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,Q),Se[V]=Q)}function H(){const V=c.newAttributes,Q=c.enabledAttributes;for(let se=0,ee=Q.length;se<ee;se++)Q[se]!==V[se]&&(i.disableVertexAttribArray(se),Q[se]=0)}function N(V,Q,se,ee,Se,ae,re){re===!0?i.vertexAttribIPointer(V,Q,se,Se,ae):i.vertexAttribPointer(V,Q,se,ee,Se,ae)}function ne(V,Q,se,ee){if(n.isWebGL2===!1&&(V.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const Se=ee.attributes,ae=se.getAttributes(),re=Q.defaultAttributeValues;for(const W in ae){const K=ae[W];if(K.location>=0){let fe=Se[W];if(fe===void 0&&(W==="instanceMatrix"&&V.instanceMatrix&&(fe=V.instanceMatrix),W==="instanceColor"&&V.instanceColor&&(fe=V.instanceColor)),fe!==void 0){const le=fe.normalized,oe=fe.itemSize,Fe=t.get(fe);if(Fe===void 0)continue;const je=Fe.buffer,Le=Fe.type,G=Fe.bytesPerElement,$e=n.isWebGL2===!0&&(Le===i.INT||Le===i.UNSIGNED_INT||fe.gpuType===go);if(fe.isInterleavedBufferAttribute){const Ye=fe.data,Y=Ye.stride,rt=fe.offset;if(Ye.isInstancedInterleavedBuffer){for(let we=0;we<K.locationSize;we++)U(K.location+we,Ye.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ye.meshPerAttribute*Ye.count)}else for(let we=0;we<K.locationSize;we++)R(K.location+we);i.bindBuffer(i.ARRAY_BUFFER,je);for(let we=0;we<K.locationSize;we++)N(K.location+we,oe/K.locationSize,Le,le,Y*G,(rt+oe/K.locationSize*we)*G,$e)}else{if(fe.isInstancedBufferAttribute){for(let Ye=0;Ye<K.locationSize;Ye++)U(K.location+Ye,fe.meshPerAttribute);V.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ye=0;Ye<K.locationSize;Ye++)R(K.location+Ye);i.bindBuffer(i.ARRAY_BUFFER,je);for(let Ye=0;Ye<K.locationSize;Ye++)N(K.location+Ye,oe/K.locationSize,Le,le,oe*G,oe/K.locationSize*Ye*G,$e)}}else if(re!==void 0){const le=re[W];if(le!==void 0)switch(le.length){case 2:i.vertexAttrib2fv(K.location,le);break;case 3:i.vertexAttrib3fv(K.location,le);break;case 4:i.vertexAttrib4fv(K.location,le);break;default:i.vertexAttrib1fv(K.location,le)}}}}H()}function A(){he();for(const V in s){const Q=s[V];for(const se in Q){const ee=Q[se];for(const Se in ee)x(ee[Se].object),delete ee[Se];delete Q[se]}delete s[V]}}function L(V){if(s[V.id]===void 0)return;const Q=s[V.id];for(const se in Q){const ee=Q[se];for(const Se in ee)x(ee[Se].object),delete ee[Se];delete Q[se]}delete s[V.id]}function I(V){for(const Q in s){const se=s[Q];if(se[V.id]===void 0)continue;const ee=se[V.id];for(const Se in ee)x(ee[Se].object),delete ee[Se];delete se[V.id]}}function he(){_e(),h=!0,c!==l&&(c=l,g(c.object))}function _e(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:he,resetDefaultState:_e,dispose:A,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:R,disableUnusedAttributes:H}}function pd(i,e,t,n){const r=n.isWebGL2;let a;function o(c){a=c}function s(c,h){i.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,f){if(f===0)return;let p,g;if(r)p=i,g="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](a,c,h,f),t.update(h,a,f)}this.setMode=o,this.render=s,this.renderInstances=l}function md(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,R=o||e.has("OES_texture_float"),U=y&&R,H=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:_,maxVaryings:d,maxFragmentUniforms:C,vertexTextures:y,floatFragmentTextures:R,floatVertexTextures:U,maxSamples:H}}function _d(i){const e=this;let t=null,n=0,r=!1,a=!1;const o=new pn,s=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const g=f.length!==0||p||n!==0||r;return r=p,n=f.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,g){const x=f.clippingPlanes,M=f.clipIntersection,_=f.clipShadows,d=i.get(f);if(!r||x===null||x.length===0||a&&!_)a?h(null):c();else{const C=a?0:n,y=C*4;let R=d.clippingState||null;l.value=R,R=h(x,p,y,g);for(let U=0;U!==y;++U)R[U]=t[U];d.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,g,x){const M=f!==null?f.length:0;let _=null;if(M!==0){if(_=l.value,x!==!0||_===null){const d=g+M*4,C=p.matrixWorldInverse;s.getNormalMatrix(C),(_===null||_.length<d)&&(_=new Float32Array(d));for(let y=0,R=g;y!==M;++y,R+=4)o.copy(f[y]).applyMatrix4(C,s),o.normal.toArray(_,R),_[R+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,_}}function gd(i){let e=new WeakMap;function t(o,s){return s===ss?o.mapping=li:s===as&&(o.mapping=ci),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===ss||s===as)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Pc(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class vd extends Io{constructor(e=-1,t=1,n=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,o=n+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const si=4,Ca=[.125,.215,.35,.446,.526,.582],Ln=20,qr=new vd,La=new et;let jr=null,Kr=0,Zr=0;const Rn=(1+Math.sqrt(5))/2,ii=1/Rn,Pa=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,Rn,ii),new k(0,Rn,-ii),new k(ii,0,Rn),new k(-ii,0,Rn),new k(Rn,ii,0),new k(-Rn,ii,0)];class Da{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jr,Kr,Zr),e.scissorTest=!1,nr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===li||e.mapping===ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jr=this._renderer.getRenderTarget(),Kr=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ft,minFilter:Ft,generateMipmaps:!1,type:wi,format:Xt,colorSpace:ln,depthBuffer:!1},r=Ua(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(a)),this._blurMaterial=Ed(a,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,qr)}_sceneToCubeUV(e,t,n,r){const s=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(La),h.toneMapping=vn,h.autoClear=!1;const g=new Ss({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),x=new Zt(new Di,g);let M=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,M=!0):(g.color.copy(La),M=!0);for(let d=0;d<6;d++){const C=d%3;C===0?(s.up.set(0,l[d],0),s.lookAt(c[d],0,0)):C===1?(s.up.set(0,0,l[d]),s.lookAt(0,c[d],0)):(s.up.set(0,l[d],0),s.lookAt(0,0,c[d]));const y=this._cubeSize;nr(r,C*y,d>2?y:0,y,y),h.setRenderTarget(r),M&&h.render(x,s),h.render(e,s)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===li||e.mapping===ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Na()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ia());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;nr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,qr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Pa[(r-1)%Pa.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",a),this._halfBlur(o,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,o,s){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Zt(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Ln-1),M=a/x,_=isFinite(a)?1+Math.floor(h*M):Ln;_>Ln&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ln}`);const d=[];let C=0;for(let N=0;N<Ln;++N){const ne=N/M,A=Math.exp(-ne*ne/2);d.push(A),N===0?C+=A:N<_&&(C+=2*A)}for(let N=0;N<d.length;N++)d[N]=d[N]/C;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=d,p.latitudinal.value=o==="latitudinal",s&&(p.poleAxis.value=s);const{_lodMax:y}=this;p.dTheta.value=x,p.mipInt.value=y-n;const R=this._sizeLods[r],U=3*R*(r>y-si?r-y+si:0),H=4*(this._cubeSize-R);nr(t,U,H,3*R,2*R),l.setRenderTarget(t),l.render(f,qr)}}function xd(i){const e=[],t=[],n=[];let r=i;const a=i-si+1+Ca.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);t.push(s);let l=1/s;o>i-si?l=Ca[o-i+si-1]:o===0&&(l=0),n.push(l);const c=1/(s-2),h=-c,f=1+c,p=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,M=3,_=2,d=1,C=new Float32Array(M*x*g),y=new Float32Array(_*x*g),R=new Float32Array(d*x*g);for(let H=0;H<g;H++){const N=H%3*2/3-1,ne=H>2?0:-1,A=[N,ne,0,N+2/3,ne,0,N+2/3,ne+1,0,N,ne,0,N+2/3,ne+1,0,N,ne+1,0];C.set(A,M*x*H),y.set(p,_*x*H);const L=[H,H,H,H,H,H];R.set(L,d*x*H)}const U=new Yt;U.setAttribute("position",new Jt(C,M)),U.setAttribute("uv",new Jt(y,_)),U.setAttribute("faceIndex",new Jt(R,d)),e.push(U),r>si&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ua(i,e,t){const n=new In(i,e,t);return n.texture.mapping=pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ed(i,e,t){const n=new Float32Array(Ln),r=new k(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Ln,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ia(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Na(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ts(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ts(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sd(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===ss||l===as,h=l===li||l===ci;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Da(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Da(i));const p=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,p),s.addEventListener("dispose",a),p.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function a(s){const l=s.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Md(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yd(i,e,t,n){const r={},a=new WeakMap;function o(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const M=p.morphAttributes[x];for(let _=0,d=M.length;_<d;_++)e.remove(M[_])}p.removeEventListener("dispose",o),delete r[p.id];const g=a.get(p);g&&(e.remove(g),a.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function s(f,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,t.memory.geometries++),p}function l(f){const p=f.attributes;for(const x in p)e.update(p[x],i.ARRAY_BUFFER);const g=f.morphAttributes;for(const x in g){const M=g[x];for(let _=0,d=M.length;_<d;_++)e.update(M[_],i.ARRAY_BUFFER)}}function c(f){const p=[],g=f.index,x=f.attributes.position;let M=0;if(g!==null){const C=g.array;M=g.version;for(let y=0,R=C.length;y<R;y+=3){const U=C[y+0],H=C[y+1],N=C[y+2];p.push(U,H,H,N,N,U)}}else if(x!==void 0){const C=x.array;M=x.version;for(let y=0,R=C.length/3-1;y<R;y+=3){const U=y+0,H=y+1,N=y+2;p.push(U,H,H,N,N,U)}}else return;const _=new(To(p)?Do:Po)(p,1);_.version=M;const d=a.get(f);d&&e.remove(d),a.set(f,_)}function h(f){const p=a.get(f);if(p){const g=f.index;g!==null&&p.version<g.version&&c(f)}else c(f);return a.get(f)}return{get:s,update:l,getWireframeAttribute:h}}function bd(i,e,t,n){const r=n.isWebGL2;let a;function o(p){a=p}let s,l;function c(p){s=p.type,l=p.bytesPerElement}function h(p,g){i.drawElements(a,g,s,p*l),t.update(g,a,1)}function f(p,g,x){if(x===0)return;let M,_;if(r)M=i,_="drawElementsInstanced";else if(M=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",M===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[_](a,g,s,p*l,x),t.update(g,a,x)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=f}function Td(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,s){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=s*(a/3);break;case i.LINES:t.lines+=s*(a/2);break;case i.LINE_STRIP:t.lines+=s*(a-1);break;case i.LINE_LOOP:t.lines+=s*a;break;case i.POINTS:t.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ad(i,e){return i[0]-e[0]}function wd(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Rd(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,o=new lt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,f){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=x!==void 0?x.length:0;let _=a.get(h);if(_===void 0||_.count!==M){let Q=function(){_e.dispose(),a.delete(h),h.removeEventListener("dispose",Q)};var g=Q;_!==void 0&&_.texture.dispose();const y=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,U=h.morphAttributes.color!==void 0,H=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],ne=h.morphAttributes.color||[];let A=0;y===!0&&(A=1),R===!0&&(A=2),U===!0&&(A=3);let L=h.attributes.position.count*A,I=1;L>e.maxTextureSize&&(I=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const he=new Float32Array(L*I*4*M),_e=new Ro(he,L,I,M);_e.type=_n,_e.needsUpdate=!0;const V=A*4;for(let se=0;se<M;se++){const ee=H[se],Se=N[se],ae=ne[se],re=L*I*4*se;for(let W=0;W<ee.count;W++){const K=W*V;y===!0&&(o.fromBufferAttribute(ee,W),he[re+K+0]=o.x,he[re+K+1]=o.y,he[re+K+2]=o.z,he[re+K+3]=0),R===!0&&(o.fromBufferAttribute(Se,W),he[re+K+4]=o.x,he[re+K+5]=o.y,he[re+K+6]=o.z,he[re+K+7]=0),U===!0&&(o.fromBufferAttribute(ae,W),he[re+K+8]=o.x,he[re+K+9]=o.y,he[re+K+10]=o.z,he[re+K+11]=ae.itemSize===4?o.w:1)}}_={count:M,texture:_e,size:new qe(L,I)},a.set(h,_),h.addEventListener("dispose",Q)}let d=0;for(let y=0;y<p.length;y++)d+=p[y];const C=h.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const x=p===void 0?0:p.length;let M=n[h.id];if(M===void 0||M.length!==x){M=[];for(let R=0;R<x;R++)M[R]=[R,0];n[h.id]=M}for(let R=0;R<x;R++){const U=M[R];U[0]=R,U[1]=p[R]}M.sort(wd);for(let R=0;R<8;R++)R<x&&M[R][1]?(s[R][0]=M[R][0],s[R][1]=M[R][1]):(s[R][0]=Number.MAX_SAFE_INTEGER,s[R][1]=0);s.sort(Ad);const _=h.morphAttributes.position,d=h.morphAttributes.normal;let C=0;for(let R=0;R<8;R++){const U=s[R],H=U[0],N=U[1];H!==Number.MAX_SAFE_INTEGER&&N?(_&&h.getAttribute("morphTarget"+R)!==_[H]&&h.setAttribute("morphTarget"+R,_[H]),d&&h.getAttribute("morphNormal"+R)!==d[H]&&h.setAttribute("morphNormal"+R,d[H]),r[R]=N,C+=N):(_&&h.hasAttribute("morphTarget"+R)===!0&&h.deleteAttribute("morphTarget"+R),d&&h.hasAttribute("morphNormal"+R)===!0&&h.deleteAttribute("morphNormal"+R),r[R]=0)}const y=h.morphTargetsRelative?1:1-C;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function Cd(i,e,t,n){let r=new WeakMap;function a(l){const c=n.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return f}function o(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:o}}const Oo=new Lt,Fo=new Ro,Bo=new pc,zo=new Ms,Oa=[],Fa=[],Ba=new Float32Array(16),za=new Float32Array(9),Ha=new Float32Array(4);function pi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Oa[r];if(a===void 0&&(a=new Float32Array(r),Oa[r]=a),e!==0){n.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=t,i[o].toArray(a,s)}return a}function ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vr(i,e){let t=Fa[e];t===void 0&&(t=new Int32Array(e),Fa[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ld(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2fv(this.addr,e),pt(t,e)}}function Dd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ft(t,e))return;i.uniform3fv(this.addr,e),pt(t,e)}}function Ud(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4fv(this.addr,e),pt(t,e)}}function Id(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ha.set(n),i.uniformMatrix2fv(this.addr,!1,Ha),pt(t,n)}}function Nd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;za.set(n),i.uniformMatrix3fv(this.addr,!1,za),pt(t,n)}}function Od(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(ft(t,n))return;Ba.set(n),i.uniformMatrix4fv(this.addr,!1,Ba),pt(t,n)}}function Fd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2iv(this.addr,e),pt(t,e)}}function zd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3iv(this.addr,e),pt(t,e)}}function Hd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4iv(this.addr,e),pt(t,e)}}function Gd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ft(t,e))return;i.uniform2uiv(this.addr,e),pt(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ft(t,e))return;i.uniform3uiv(this.addr,e),pt(t,e)}}function Wd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ft(t,e))return;i.uniform4uiv(this.addr,e),pt(t,e)}}function Xd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Oo,r)}function Yd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Bo,r)}function qd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||zo,r)}function jd(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Fo,r)}function Kd(i){switch(i){case 5126:return Ld;case 35664:return Pd;case 35665:return Dd;case 35666:return Ud;case 35674:return Id;case 35675:return Nd;case 35676:return Od;case 5124:case 35670:return Fd;case 35667:case 35671:return Bd;case 35668:case 35672:return zd;case 35669:case 35673:return Hd;case 5125:return Gd;case 36294:return kd;case 36295:return Vd;case 36296:return Wd;case 35678:case 36198:case 36298:case 36306:case 35682:return Xd;case 35679:case 36299:case 36307:return Yd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return jd}}function Zd(i,e){i.uniform1fv(this.addr,e)}function Jd(i,e){const t=pi(e,this.size,2);i.uniform2fv(this.addr,t)}function $d(i,e){const t=pi(e,this.size,3);i.uniform3fv(this.addr,t)}function Qd(i,e){const t=pi(e,this.size,4);i.uniform4fv(this.addr,t)}function ef(i,e){const t=pi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tf(i,e){const t=pi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nf(i,e){const t=pi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function rf(i,e){i.uniform1iv(this.addr,e)}function sf(i,e){i.uniform2iv(this.addr,e)}function af(i,e){i.uniform3iv(this.addr,e)}function of(i,e){i.uniform4iv(this.addr,e)}function lf(i,e){i.uniform1uiv(this.addr,e)}function cf(i,e){i.uniform2uiv(this.addr,e)}function uf(i,e){i.uniform3uiv(this.addr,e)}function hf(i,e){i.uniform4uiv(this.addr,e)}function df(i,e,t){const n=this.cache,r=e.length,a=vr(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Oo,a[o])}function ff(i,e,t){const n=this.cache,r=e.length,a=vr(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Bo,a[o])}function pf(i,e,t){const n=this.cache,r=e.length,a=vr(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||zo,a[o])}function mf(i,e,t){const n=this.cache,r=e.length,a=vr(t,r);ft(n,a)||(i.uniform1iv(this.addr,a),pt(n,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Fo,a[o])}function _f(i){switch(i){case 5126:return Zd;case 35664:return Jd;case 35665:return $d;case 35666:return Qd;case 35674:return ef;case 35675:return tf;case 35676:return nf;case 5124:case 35670:return rf;case 35667:case 35671:return sf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return uf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}class gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Kd(t.type)}}class vf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=_f(t.type)}}class xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,t[s.id],n)}}}const Jr=/(\w+)(\])?(\[|\.)?/g;function Ga(i,e){i.seq.push(e),i.map[e.id]=e}function Ef(i,e,t){const n=i.name,r=n.length;for(Jr.lastIndex=0;;){const a=Jr.exec(n),o=Jr.lastIndex;let s=a[1];const l=a[2]==="]",c=a[3];if(l&&(s=s|0),c===void 0||c==="["&&o+2===r){Ga(t,c===void 0?new gf(s,i,e):new vf(s,i,e));break}else{let f=t.map[s];f===void 0&&(f=new xf(s),Ga(t,f)),t=f}}}class ar{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),o=e.getUniformLocation(t,a.name);Ef(a,o,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,o=t.length;a!==o;++a){const s=t[a],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function ka(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sf=37297;let Mf=0;function yf(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const s=o+1;n.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return n.join(`
`)}function bf(i){const e=it.getPrimaries(it.workingColorSpace),t=it.getPrimaries(i);let n;switch(e===t?n="":e===ur&&t===cr?n="LinearDisplayP3ToLinearSRGB":e===cr&&t===ur&&(n="LinearSRGBToLinearDisplayP3"),i){case ln:case mr:return[n,"LinearTransferOETF"];case _t:case vs:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Va(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+yf(i.getShaderSource(e),o)}else return r}function Tf(i,e){const t=bf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Af(i,e){let t;switch(e){case Ml:t="Linear";break;case yl:t="Reinhard";break;case bl:t="OptimizedCineon";break;case Tl:t="ACESFilmic";break;case Al:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function wf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Mi).join(`
`)}function Rf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),o=a.name;let s=1;a.type===i.FLOAT_MAT2&&(s=2),a.type===i.FLOAT_MAT3&&(s=3),a.type===i.FLOAT_MAT4&&(s=4),t[o]={type:a.type,location:i.getAttribLocation(e,o),locationSize:s}}return t}function Mi(i){return i!==""}function Wa(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xa(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lf=/^[ \t]*#include +<([\w\d./]+)>/gm;function hs(i){return i.replace(Lf,Df)}const Pf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Df(i,e){let t=Ze[e];if(t===void 0){const n=Pf.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hs(t)}const Uf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ya(i){return i.replace(Uf,If)}function If(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function qa(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nf(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===po?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Zo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===an&&(e="SHADOWMAP_TYPE_VSM"),e}function Of(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case li:case ci:e="ENVMAP_TYPE_CUBE";break;case pr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ff(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ci:e="ENVMAP_MODE_REFRACTION";break}return e}function Bf(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mo:e="ENVMAP_BLENDING_MULTIPLY";break;case El:e="ENVMAP_BLENDING_MIX";break;case Sl:e="ENVMAP_BLENDING_ADD";break}return e}function zf(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hf(i,e,t,n){const r=i.getContext(),a=t.defines;let o=t.vertexShader,s=t.fragmentShader;const l=Nf(t),c=Of(t),h=Ff(t),f=Bf(t),p=zf(t),g=t.isWebGL2?"":wf(t),x=Rf(a),M=r.createProgram();let _,d,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mi).join(`
`),_.length>0&&(_+=`
`),d=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Mi).join(`
`),d.length>0&&(d+=`
`)):(_=[qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mi).join(`
`),d=[g,qa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==vn?Af("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Tf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Mi).join(`
`)),o=hs(o),o=Wa(o,t),o=Xa(o,t),s=hs(s),s=Wa(s,t),s=Xa(s,t),o=Ya(o),s=Ya(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=C+_+o,R=C+d+s,U=ka(r,r.VERTEX_SHADER,y),H=ka(r,r.FRAGMENT_SHADER,R);r.attachShader(M,U),r.attachShader(M,H),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(I){if(i.debug.checkShaderErrors){const he=r.getProgramInfoLog(M).trim(),_e=r.getShaderInfoLog(U).trim(),V=r.getShaderInfoLog(H).trim();let Q=!0,se=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,U,H);else{const ee=Va(r,U,"vertex"),Se=Va(r,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+ee+`
`+Se)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(_e===""||V==="")&&(se=!1);se&&(I.diagnostics={runnable:Q,programLog:he,vertexShader:{log:_e,prefix:_},fragmentShader:{log:V,prefix:d}})}r.deleteShader(U),r.deleteShader(H),ne=new ar(r,M),A=Cf(r,M)}let ne;this.getUniforms=function(){return ne===void 0&&N(this),ne};let A;this.getAttributes=function(){return A===void 0&&N(this),A};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,Sf)),L},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mf++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=U,this.fragmentShader=H,this}let Gf=0;class kf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vf(e),t.set(e,n)),n}}class Vf{constructor(e){this.id=Gf++,this.code=e,this.usedTimes=0}}function Wf(i,e,t,n,r,a,o){const s=new Co,l=new kf,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return A===0?"uv":`uv${A}`}function _(A,L,I,he,_e){const V=he.fog,Q=_e.geometry,se=A.isMeshStandardMaterial?he.environment:null,ee=(A.isMeshStandardMaterial?t:e).get(A.envMap||se),Se=ee&&ee.mapping===pr?ee.image.height:null,ae=x[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const re=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,W=re!==void 0?re.length:0;let K=0;Q.morphAttributes.position!==void 0&&(K=1),Q.morphAttributes.normal!==void 0&&(K=2),Q.morphAttributes.color!==void 0&&(K=3);let fe,le,oe,Fe;if(ae){const Oe=jt[ae];fe=Oe.vertexShader,le=Oe.fragmentShader}else fe=A.vertexShader,le=A.fragmentShader,l.update(A),oe=l.getVertexShaderID(A),Fe=l.getFragmentShaderID(A);const je=i.getRenderTarget(),Le=_e.isInstancedMesh===!0,G=!!A.map,$e=!!A.matcap,Ye=!!ee,Y=!!A.aoMap,rt=!!A.lightMap,we=!!A.bumpMap,Ie=!!A.normalMap,Be=!!A.displacementMap,Qe=!!A.emissiveMap,Ve=!!A.metalnessMap,Ge=!!A.roughnessMap,Ke=A.anisotropy>0,st=A.clearcoat>0,ot=A.iridescence>0,w=A.sheen>0,E=A.transmission>0,q=Ke&&!!A.anisotropyMap,ge=st&&!!A.clearcoatMap,ue=st&&!!A.clearcoatNormalMap,me=st&&!!A.clearcoatRoughnessMap,Te=ot&&!!A.iridescenceMap,ve=ot&&!!A.iridescenceThicknessMap,pe=w&&!!A.sheenColorMap,O=w&&!!A.sheenRoughnessMap,Ee=!!A.specularMap,ie=!!A.specularColorMap,Ne=!!A.specularIntensityMap,Re=E&&!!A.transmissionMap,Pe=E&&!!A.thicknessMap,u=!!A.gradientMap,m=!!A.alphaMap,S=A.alphaTest>0,v=!!A.alphaHash,D=!!A.extensions,P=!!Q.attributes.uv1,B=!!Q.attributes.uv2,j=!!Q.attributes.uv3;let ce=vn;return A.toneMapped&&(je===null||je.isXRRenderTarget===!0)&&(ce=i.toneMapping),{isWebGL2:h,shaderID:ae,shaderType:A.type,shaderName:A.name,vertexShader:fe,fragmentShader:le,defines:A.defines,customVertexShaderID:oe,customFragmentShaderID:Fe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,instancing:Le,instancingColor:Le&&_e.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:je===null?i.outputColorSpace:je.isXRRenderTarget===!0?je.texture.colorSpace:ln,map:G,matcap:$e,envMap:Ye,envMapMode:Ye&&ee.mapping,envMapCubeUVHeight:Se,aoMap:Y,lightMap:rt,bumpMap:we,normalMap:Ie,displacementMap:p&&Be,emissiveMap:Qe,normalMapObjectSpace:Ie&&A.normalMapType===zl,normalMapTangentSpace:Ie&&A.normalMapType===bo,metalnessMap:Ve,roughnessMap:Ge,anisotropy:Ke,anisotropyMap:q,clearcoat:st,clearcoatMap:ge,clearcoatNormalMap:ue,clearcoatRoughnessMap:me,iridescence:ot,iridescenceMap:Te,iridescenceThicknessMap:ve,sheen:w,sheenColorMap:pe,sheenRoughnessMap:O,specularMap:Ee,specularColorMap:ie,specularIntensityMap:Ne,transmission:E,transmissionMap:Re,thicknessMap:Pe,gradientMap:u,opaque:A.transparent===!1&&A.blending===ai,alphaMap:m,alphaTest:S,alphaHash:v,combine:A.combine,mapUv:G&&M(A.map.channel),aoMapUv:Y&&M(A.aoMap.channel),lightMapUv:rt&&M(A.lightMap.channel),bumpMapUv:we&&M(A.bumpMap.channel),normalMapUv:Ie&&M(A.normalMap.channel),displacementMapUv:Be&&M(A.displacementMap.channel),emissiveMapUv:Qe&&M(A.emissiveMap.channel),metalnessMapUv:Ve&&M(A.metalnessMap.channel),roughnessMapUv:Ge&&M(A.roughnessMap.channel),anisotropyMapUv:q&&M(A.anisotropyMap.channel),clearcoatMapUv:ge&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:ue&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:O&&M(A.sheenRoughnessMap.channel),specularMapUv:Ee&&M(A.specularMap.channel),specularColorMapUv:ie&&M(A.specularColorMap.channel),specularIntensityMapUv:Ne&&M(A.specularIntensityMap.channel),transmissionMapUv:Re&&M(A.transmissionMap.channel),thicknessMapUv:Pe&&M(A.thicknessMap.channel),alphaMapUv:m&&M(A.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Ie||Ke),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,vertexUv1s:P,vertexUv2s:B,vertexUv3s:j,pointsUvs:_e.isPoints===!0&&!!Q.attributes.uv&&(G||m),fog:!!V,useFog:A.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:_e.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:K,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,useLegacyLights:i._useLegacyLights,decodeVideoTexture:G&&A.map.isVideoTexture===!0&&it.getTransfer(A.map.colorSpace)===at,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Kt,flipSided:A.side===Ct,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:D&&A.extensions.derivatives===!0,extensionFragDepth:D&&A.extensions.fragDepth===!0,extensionDrawBuffers:D&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&A.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function d(A){const L=[];if(A.shaderID?L.push(A.shaderID):(L.push(A.customVertexShaderID),L.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)L.push(I),L.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(C(L,A),y(L,A),L.push(i.outputColorSpace)),L.push(A.customProgramCacheKey),L.join()}function C(A,L){A.push(L.precision),A.push(L.outputColorSpace),A.push(L.envMapMode),A.push(L.envMapCubeUVHeight),A.push(L.mapUv),A.push(L.alphaMapUv),A.push(L.lightMapUv),A.push(L.aoMapUv),A.push(L.bumpMapUv),A.push(L.normalMapUv),A.push(L.displacementMapUv),A.push(L.emissiveMapUv),A.push(L.metalnessMapUv),A.push(L.roughnessMapUv),A.push(L.anisotropyMapUv),A.push(L.clearcoatMapUv),A.push(L.clearcoatNormalMapUv),A.push(L.clearcoatRoughnessMapUv),A.push(L.iridescenceMapUv),A.push(L.iridescenceThicknessMapUv),A.push(L.sheenColorMapUv),A.push(L.sheenRoughnessMapUv),A.push(L.specularMapUv),A.push(L.specularColorMapUv),A.push(L.specularIntensityMapUv),A.push(L.transmissionMapUv),A.push(L.thicknessMapUv),A.push(L.combine),A.push(L.fogExp2),A.push(L.sizeAttenuation),A.push(L.morphTargetsCount),A.push(L.morphAttributeCount),A.push(L.numDirLights),A.push(L.numPointLights),A.push(L.numSpotLights),A.push(L.numSpotLightMaps),A.push(L.numHemiLights),A.push(L.numRectAreaLights),A.push(L.numDirLightShadows),A.push(L.numPointLightShadows),A.push(L.numSpotLightShadows),A.push(L.numSpotLightShadowsWithMaps),A.push(L.numLightProbes),A.push(L.shadowMapType),A.push(L.toneMapping),A.push(L.numClippingPlanes),A.push(L.numClipIntersection),A.push(L.depthPacking)}function y(A,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.matcap&&s.enable(4),L.envMap&&s.enable(5),L.normalMapObjectSpace&&s.enable(6),L.normalMapTangentSpace&&s.enable(7),L.clearcoat&&s.enable(8),L.iridescence&&s.enable(9),L.alphaTest&&s.enable(10),L.vertexColors&&s.enable(11),L.vertexAlphas&&s.enable(12),L.vertexUv1s&&s.enable(13),L.vertexUv2s&&s.enable(14),L.vertexUv3s&&s.enable(15),L.vertexTangents&&s.enable(16),L.anisotropy&&s.enable(17),L.alphaHash&&s.enable(18),A.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.useLegacyLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.transmission&&s.enable(15),L.sheen&&s.enable(16),L.opaque&&s.enable(17),L.pointsUvs&&s.enable(18),L.decodeVideoTexture&&s.enable(19),A.push(s.mask)}function R(A){const L=x[A.type];let I;if(L){const he=jt[L];I=wc.clone(he.uniforms)}else I=A.uniforms;return I}function U(A,L){let I;for(let he=0,_e=c.length;he<_e;he++){const V=c[he];if(V.cacheKey===L){I=V,++I.usedTimes;break}}return I===void 0&&(I=new Hf(i,L,A,a),c.push(I)),I}function H(A){if(--A.usedTimes===0){const L=c.indexOf(A);c[L]=c[c.length-1],c.pop(),A.destroy()}}function N(A){l.remove(A)}function ne(){l.dispose()}return{getParameters:_,getProgramCacheKey:d,getUniforms:R,acquireProgram:U,releaseProgram:H,releaseShaderCache:N,programs:c,dispose:ne}}function Xf(){let i=new WeakMap;function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function t(a){i.delete(a)}function n(a,o,s){i.get(a)[o]=s}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Yf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function ja(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ka(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function o(f,p,g,x,M,_){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:g,groupOrder:x,renderOrder:f.renderOrder,z:M,group:_},i[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=g,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=M,d.group=_),e++,d}function s(f,p,g,x,M,_){const d=o(f,p,g,x,M,_);g.transmission>0?n.push(d):g.transparent===!0?r.push(d):t.push(d)}function l(f,p,g,x,M,_){const d=o(f,p,g,x,M,_);g.transmission>0?n.unshift(d):g.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,p){t.length>1&&t.sort(f||Yf),n.length>1&&n.sort(p||ja),r.length>1&&r.sort(p||ja)}function h(){for(let f=e,p=i.length;f<p;f++){const g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:s,unshift:l,finish:h,sort:c}}function qf(){let i=new WeakMap;function e(n,r){const a=i.get(n);let o;return a===void 0?(o=new Ka,i.set(n,[o])):r>=a.length?(o=new Ka,a.push(o)):o=a[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new et};break;case"SpotLight":t={position:new k,direction:new k,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function Kf(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zf=0;function Jf(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $f(i,e){const t=new jf,n=Kf(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new k);const a=new k,o=new ct,s=new ct;function l(h,f){let p=0,g=0,x=0;for(let he=0;he<9;he++)r.probe[he].set(0,0,0);let M=0,_=0,d=0,C=0,y=0,R=0,U=0,H=0,N=0,ne=0,A=0;h.sort(Jf);const L=f===!0?Math.PI:1;for(let he=0,_e=h.length;he<_e;he++){const V=h[he],Q=V.color,se=V.intensity,ee=V.distance,Se=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)p+=Q.r*se*L,g+=Q.g*se*L,x+=Q.b*se*L;else if(V.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(V.sh.coefficients[ae],se);A++}else if(V.isDirectionalLight){const ae=t.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity*L),V.castShadow){const re=V.shadow,W=n.get(V);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=Se,r.directionalShadowMatrix[M]=V.shadow.matrix,R++}r.directional[M]=ae,M++}else if(V.isSpotLight){const ae=t.get(V);ae.position.setFromMatrixPosition(V.matrixWorld),ae.color.copy(Q).multiplyScalar(se*L),ae.distance=ee,ae.coneCos=Math.cos(V.angle),ae.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),ae.decay=V.decay,r.spot[d]=ae;const re=V.shadow;if(V.map&&(r.spotLightMap[N]=V.map,N++,re.updateMatrices(V),V.castShadow&&ne++),r.spotLightMatrix[d]=re.matrix,V.castShadow){const W=n.get(V);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,r.spotShadow[d]=W,r.spotShadowMap[d]=Se,H++}d++}else if(V.isRectAreaLight){const ae=t.get(V);ae.color.copy(Q).multiplyScalar(se),ae.halfWidth.set(V.width*.5,0,0),ae.halfHeight.set(0,V.height*.5,0),r.rectArea[C]=ae,C++}else if(V.isPointLight){const ae=t.get(V);if(ae.color.copy(V.color).multiplyScalar(V.intensity*L),ae.distance=V.distance,ae.decay=V.decay,V.castShadow){const re=V.shadow,W=n.get(V);W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,W.shadowCameraNear=re.camera.near,W.shadowCameraFar=re.camera.far,r.pointShadow[_]=W,r.pointShadowMap[_]=Se,r.pointShadowMatrix[_]=V.shadow.matrix,U++}r.point[_]=ae,_++}else if(V.isHemisphereLight){const ae=t.get(V);ae.skyColor.copy(V.color).multiplyScalar(se*L),ae.groundColor.copy(V.groundColor).multiplyScalar(se*L),r.hemi[y]=ae,y++}}C>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==M||I.pointLength!==_||I.spotLength!==d||I.rectAreaLength!==C||I.hemiLength!==y||I.numDirectionalShadows!==R||I.numPointShadows!==U||I.numSpotShadows!==H||I.numSpotMaps!==N||I.numLightProbes!==A)&&(r.directional.length=M,r.spot.length=d,r.rectArea.length=C,r.point.length=_,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=H,r.spotShadowMap.length=H,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=H+N-ne,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=ne,r.numLightProbes=A,I.directionalLength=M,I.pointLength=_,I.spotLength=d,I.rectAreaLength=C,I.hemiLength=y,I.numDirectionalShadows=R,I.numPointShadows=U,I.numSpotShadows=H,I.numSpotMaps=N,I.numLightProbes=A,r.version=Zf++)}function c(h,f){let p=0,g=0,x=0,M=0,_=0;const d=f.matrixWorldInverse;for(let C=0,y=h.length;C<y;C++){const R=h[C];if(R.isDirectionalLight){const U=r.directional[p];U.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(d),p++}else if(R.isSpotLight){const U=r.spot[x];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),U.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(d),x++}else if(R.isRectAreaLight){const U=r.rectArea[M];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),s.identity(),o.copy(R.matrixWorld),o.premultiply(d),s.extractRotation(o),U.halfWidth.set(R.width*.5,0,0),U.halfHeight.set(0,R.height*.5,0),U.halfWidth.applyMatrix4(s),U.halfHeight.applyMatrix4(s),M++}else if(R.isPointLight){const U=r.point[g];U.position.setFromMatrixPosition(R.matrixWorld),U.position.applyMatrix4(d),g++}else if(R.isHemisphereLight){const U=r.hemi[_];U.direction.setFromMatrixPosition(R.matrixWorld),U.direction.transformDirection(d),_++}}}return{setup:l,setupView:c,state:r}}function Za(i,e){const t=new $f(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function o(f){n.push(f)}function s(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:s}}function Qf(i,e){let t=new WeakMap;function n(a,o=0){const s=t.get(a);let l;return s===void 0?(l=new Za(i,e),t.set(a,[l])):o>=s.length?(l=new Za(i,e),s.push(l)):l=s[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ep extends fi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tp extends fi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ip=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rp(i,e,t){let n=new ys;const r=new qe,a=new qe,o=new lt,s=new ep({depthPacking:Bl}),l=new tp,c={},h=t.maxTextureSize,f={[En]:Ct,[Ct]:En,[Kt]:Kt},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:np,fragmentShader:ip}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new Yt;x.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zt(x,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=po;let d=this.type;this.render=function(U,H,N){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||U.length===0)return;const ne=i.getRenderTarget(),A=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(gn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const he=d!==an&&this.type===an,_e=d===an&&this.type!==an;for(let V=0,Q=U.length;V<Q;V++){const se=U[V],ee=se.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;r.copy(ee.mapSize);const Se=ee.getFrameExtents();if(r.multiply(Se),a.copy(ee.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(a.x=Math.floor(h/Se.x),r.x=a.x*Se.x,ee.mapSize.x=a.x),r.y>h&&(a.y=Math.floor(h/Se.y),r.y=a.y*Se.y,ee.mapSize.y=a.y)),ee.map===null||he===!0||_e===!0){const re=this.type!==an?{minFilter:At,magFilter:At}:{};ee.map!==null&&ee.map.dispose(),ee.map=new In(r.x,r.y,re),ee.map.texture.name=se.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const ae=ee.getViewportCount();for(let re=0;re<ae;re++){const W=ee.getViewport(re);o.set(a.x*W.x,a.y*W.y,a.x*W.z,a.y*W.w),I.viewport(o),ee.updateMatrices(se,re),n=ee.getFrustum(),R(H,N,ee.camera,se,this.type)}ee.isPointLightShadow!==!0&&this.type===an&&C(ee,N),ee.needsUpdate=!1}d=this.type,_.needsUpdate=!1,i.setRenderTarget(ne,A,L)};function C(U,H){const N=e.update(M);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,g.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new In(r.x,r.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(H,null,N,p,M,null),g.uniforms.shadow_pass.value=U.mapPass.texture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(H,null,N,g,M,null)}function y(U,H,N,ne){let A=null;const L=N.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(L!==void 0)A=L;else if(A=N.isPointLight===!0?l:s,i.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0){const I=A.uuid,he=H.uuid;let _e=c[I];_e===void 0&&(_e={},c[I]=_e);let V=_e[he];V===void 0&&(V=A.clone(),_e[he]=V),A=V}if(A.visible=H.visible,A.wireframe=H.wireframe,ne===an?A.side=H.shadowSide!==null?H.shadowSide:H.side:A.side=H.shadowSide!==null?H.shadowSide:f[H.side],A.alphaMap=H.alphaMap,A.alphaTest=H.alphaTest,A.map=H.map,A.clipShadows=H.clipShadows,A.clippingPlanes=H.clippingPlanes,A.clipIntersection=H.clipIntersection,A.displacementMap=H.displacementMap,A.displacementScale=H.displacementScale,A.displacementBias=H.displacementBias,A.wireframeLinewidth=H.wireframeLinewidth,A.linewidth=H.linewidth,N.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const I=i.properties.get(A);I.light=N}return A}function R(U,H,N,ne,A){if(U.visible===!1)return;if(U.layers.test(H.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===an)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,U.matrixWorld);const he=e.update(U),_e=U.material;if(Array.isArray(_e)){const V=he.groups;for(let Q=0,se=V.length;Q<se;Q++){const ee=V[Q],Se=_e[ee.materialIndex];if(Se&&Se.visible){const ae=y(U,Se,ne,A);i.renderBufferDirect(N,null,he,ae,U,ee)}}}else if(_e.visible){const V=y(U,_e,ne,A);i.renderBufferDirect(N,null,he,V,U,null)}}const I=U.children;for(let he=0,_e=I.length;he<_e;he++)R(I[he],H,N,ne,A)}}function sp(i,e,t){const n=t.isWebGL2;function r(){let v=!1;const D=new lt;let P=null;const B=new lt(0,0,0,0);return{setMask:function(j){P!==j&&!v&&(i.colorMask(j,j,j,j),P=j)},setLocked:function(j){v=j},setClear:function(j,ce,xe,Oe,ze){ze===!0&&(j*=Oe,ce*=Oe,xe*=Oe),D.set(j,ce,xe,Oe),B.equals(D)===!1&&(i.clearColor(j,ce,xe,Oe),B.copy(D))},reset:function(){v=!1,P=null,B.set(-1,0,0,0)}}}function a(){let v=!1,D=null,P=null,B=null;return{setTest:function(j){j?G(i.DEPTH_TEST):$e(i.DEPTH_TEST)},setMask:function(j){D!==j&&!v&&(i.depthMask(j),D=j)},setFunc:function(j){if(P!==j){switch(j){case fl:i.depthFunc(i.NEVER);break;case pl:i.depthFunc(i.ALWAYS);break;case ml:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case gl:i.depthFunc(i.GEQUAL);break;case vl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}P=j}},setLocked:function(j){v=j},setClear:function(j){B!==j&&(i.clearDepth(j),B=j)},reset:function(){v=!1,D=null,P=null,B=null}}}function o(){let v=!1,D=null,P=null,B=null,j=null,ce=null,xe=null,Oe=null,ze=null;return{setTest:function(de){v||(de?G(i.STENCIL_TEST):$e(i.STENCIL_TEST))},setMask:function(de){D!==de&&!v&&(i.stencilMask(de),D=de)},setFunc:function(de,We,ut){(P!==de||B!==We||j!==ut)&&(i.stencilFunc(de,We,ut),P=de,B=We,j=ut)},setOp:function(de,We,ut){(ce!==de||xe!==We||Oe!==ut)&&(i.stencilOp(de,We,ut),ce=de,xe=We,Oe=ut)},setLocked:function(de){v=de},setClear:function(de){ze!==de&&(i.clearStencil(de),ze=de)},reset:function(){v=!1,D=null,P=null,B=null,j=null,ce=null,xe=null,Oe=null,ze=null}}}const s=new r,l=new a,c=new o,h=new WeakMap,f=new WeakMap;let p={},g={},x=new WeakMap,M=[],_=null,d=!1,C=null,y=null,R=null,U=null,H=null,N=null,ne=null,A=new et(0,0,0),L=0,I=!1,he=null,_e=null,V=null,Q=null,se=null;const ee=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Se=!1,ae=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(re)[1]),Se=ae>=1):re.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),Se=ae>=2);let W=null,K={};const fe=i.getParameter(i.SCISSOR_BOX),le=i.getParameter(i.VIEWPORT),oe=new lt().fromArray(fe),Fe=new lt().fromArray(le);function je(v,D,P,B){const j=new Uint8Array(4),ce=i.createTexture();i.bindTexture(v,ce),i.texParameteri(v,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(v,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<P;xe++)n&&(v===i.TEXTURE_3D||v===i.TEXTURE_2D_ARRAY)?i.texImage3D(D,0,i.RGBA,1,1,B,0,i.RGBA,i.UNSIGNED_BYTE,j):i.texImage2D(D+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,j);return ce}const Le={};Le[i.TEXTURE_2D]=je(i.TEXTURE_2D,i.TEXTURE_2D,1),Le[i.TEXTURE_CUBE_MAP]=je(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Le[i.TEXTURE_2D_ARRAY]=je(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Le[i.TEXTURE_3D]=je(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(i.DEPTH_TEST),l.setFunc(or),Ve(!1),Ge(Ps),G(i.CULL_FACE),Be(gn);function G(v){p[v]!==!0&&(i.enable(v),p[v]=!0)}function $e(v){p[v]!==!1&&(i.disable(v),p[v]=!1)}function Ye(v,D){return g[v]!==D?(i.bindFramebuffer(v,D),g[v]=D,n&&(v===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=D),v===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=D)),!0):!1}function Y(v,D){let P=M,B=!1;if(v)if(P=x.get(D),P===void 0&&(P=[],x.set(D,P)),v.isWebGLMultipleRenderTargets){const j=v.texture;if(P.length!==j.length||P[0]!==i.COLOR_ATTACHMENT0){for(let ce=0,xe=j.length;ce<xe;ce++)P[ce]=i.COLOR_ATTACHMENT0+ce;P.length=j.length,B=!0}}else P[0]!==i.COLOR_ATTACHMENT0&&(P[0]=i.COLOR_ATTACHMENT0,B=!0);else P[0]!==i.BACK&&(P[0]=i.BACK,B=!0);B&&(t.isWebGL2?i.drawBuffers(P):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(P))}function rt(v){return _!==v?(i.useProgram(v),_=v,!0):!1}const we={[Cn]:i.FUNC_ADD,[$o]:i.FUNC_SUBTRACT,[Qo]:i.FUNC_REVERSE_SUBTRACT};if(n)we[Ns]=i.MIN,we[Os]=i.MAX;else{const v=e.get("EXT_blend_minmax");v!==null&&(we[Ns]=v.MIN_EXT,we[Os]=v.MAX_EXT)}const Ie={[el]:i.ZERO,[tl]:i.ONE,[nl]:i.SRC_COLOR,[is]:i.SRC_ALPHA,[ll]:i.SRC_ALPHA_SATURATE,[al]:i.DST_COLOR,[rl]:i.DST_ALPHA,[il]:i.ONE_MINUS_SRC_COLOR,[rs]:i.ONE_MINUS_SRC_ALPHA,[ol]:i.ONE_MINUS_DST_COLOR,[sl]:i.ONE_MINUS_DST_ALPHA,[cl]:i.CONSTANT_COLOR,[ul]:i.ONE_MINUS_CONSTANT_COLOR,[hl]:i.CONSTANT_ALPHA,[dl]:i.ONE_MINUS_CONSTANT_ALPHA};function Be(v,D,P,B,j,ce,xe,Oe,ze,de){if(v===gn){d===!0&&($e(i.BLEND),d=!1);return}if(d===!1&&(G(i.BLEND),d=!0),v!==Jo){if(v!==C||de!==I){if((y!==Cn||H!==Cn)&&(i.blendEquation(i.FUNC_ADD),y=Cn,H=Cn),de)switch(v){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.ONE,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}else switch(v){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ds:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Us:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Is:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",v);break}R=null,U=null,N=null,ne=null,A.set(0,0,0),L=0,C=v,I=de}return}j=j||D,ce=ce||P,xe=xe||B,(D!==y||j!==H)&&(i.blendEquationSeparate(we[D],we[j]),y=D,H=j),(P!==R||B!==U||ce!==N||xe!==ne)&&(i.blendFuncSeparate(Ie[P],Ie[B],Ie[ce],Ie[xe]),R=P,U=B,N=ce,ne=xe),(Oe.equals(A)===!1||ze!==L)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ze),A.copy(Oe),L=ze),C=v,I=!1}function Qe(v,D){v.side===Kt?$e(i.CULL_FACE):G(i.CULL_FACE);let P=v.side===Ct;D&&(P=!P),Ve(P),v.blending===ai&&v.transparent===!1?Be(gn):Be(v.blending,v.blendEquation,v.blendSrc,v.blendDst,v.blendEquationAlpha,v.blendSrcAlpha,v.blendDstAlpha,v.blendColor,v.blendAlpha,v.premultipliedAlpha),l.setFunc(v.depthFunc),l.setTest(v.depthTest),l.setMask(v.depthWrite),s.setMask(v.colorWrite);const B=v.stencilWrite;c.setTest(B),B&&(c.setMask(v.stencilWriteMask),c.setFunc(v.stencilFunc,v.stencilRef,v.stencilFuncMask),c.setOp(v.stencilFail,v.stencilZFail,v.stencilZPass)),st(v.polygonOffset,v.polygonOffsetFactor,v.polygonOffsetUnits),v.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):$e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(v){he!==v&&(v?i.frontFace(i.CW):i.frontFace(i.CCW),he=v)}function Ge(v){v!==jo?(G(i.CULL_FACE),v!==_e&&(v===Ps?i.cullFace(i.BACK):v===Ko?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$e(i.CULL_FACE),_e=v}function Ke(v){v!==V&&(Se&&i.lineWidth(v),V=v)}function st(v,D,P){v?(G(i.POLYGON_OFFSET_FILL),(Q!==D||se!==P)&&(i.polygonOffset(D,P),Q=D,se=P)):$e(i.POLYGON_OFFSET_FILL)}function ot(v){v?G(i.SCISSOR_TEST):$e(i.SCISSOR_TEST)}function w(v){v===void 0&&(v=i.TEXTURE0+ee-1),W!==v&&(i.activeTexture(v),W=v)}function E(v,D,P){P===void 0&&(W===null?P=i.TEXTURE0+ee-1:P=W);let B=K[P];B===void 0&&(B={type:void 0,texture:void 0},K[P]=B),(B.type!==v||B.texture!==D)&&(W!==P&&(i.activeTexture(P),W=P),i.bindTexture(v,D||Le[v]),B.type=v,B.texture=D)}function q(){const v=K[W];v!==void 0&&v.type!==void 0&&(i.bindTexture(v.type,null),v.type=void 0,v.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ue(){try{i.compressedTexImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function me(){try{i.texSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ee(){try{i.texStorage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function ie(){try{i.texImage2D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Ne(){try{i.texImage3D.apply(i,arguments)}catch(v){console.error("THREE.WebGLState:",v)}}function Re(v){oe.equals(v)===!1&&(i.scissor(v.x,v.y,v.z,v.w),oe.copy(v))}function Pe(v){Fe.equals(v)===!1&&(i.viewport(v.x,v.y,v.z,v.w),Fe.copy(v))}function u(v,D){let P=f.get(D);P===void 0&&(P=new WeakMap,f.set(D,P));let B=P.get(v);B===void 0&&(B=i.getUniformBlockIndex(D,v.name),P.set(v,B))}function m(v,D){const B=f.get(D).get(v);h.get(D)!==B&&(i.uniformBlockBinding(D,B,v.__bindingPointIndex),h.set(D,B))}function S(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},W=null,K={},g={},x=new WeakMap,M=[],_=null,d=!1,C=null,y=null,R=null,U=null,H=null,N=null,ne=null,A=new et(0,0,0),L=0,I=!1,he=null,_e=null,V=null,Q=null,se=null,oe.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:G,disable:$e,bindFramebuffer:Ye,drawBuffers:Y,useProgram:rt,setBlending:Be,setMaterial:Qe,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Ke,setPolygonOffset:st,setScissorTest:ot,activeTexture:w,bindTexture:E,unbindTexture:q,compressedTexImage2D:ge,compressedTexImage3D:ue,texImage2D:ie,texImage3D:Ne,updateUBOMapping:u,uniformBlockBinding:m,texStorage2D:O,texStorage3D:Ee,texSubImage2D:me,texSubImage3D:Te,compressedTexSubImage2D:ve,compressedTexSubImage3D:pe,scissor:Re,viewport:Pe,reset:S}}function ap(i,e,t,n,r,a,o){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new WeakMap;let M;const _=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(w,E){return d?new OffscreenCanvas(w,E):Ci("canvas")}function y(w,E,q,ge){let ue=1;if((w.width>ge||w.height>ge)&&(ue=ge/Math.max(w.width,w.height)),ue<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const me=E?dr:Math.floor,Te=me(ue*w.width),ve=me(ue*w.height);M===void 0&&(M=C(Te,ve));const pe=q?C(Te,ve):M;return pe.width=Te,pe.height=ve,pe.getContext("2d").drawImage(w,0,0,Te,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Te+"x"+ve+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function R(w){return us(w.width)&&us(w.height)}function U(w){return s?!1:w.wrapS!==Wt||w.wrapT!==Wt||w.minFilter!==At&&w.minFilter!==Ft}function H(w,E){return w.generateMipmaps&&E&&w.minFilter!==At&&w.minFilter!==Ft}function N(w){i.generateMipmap(w)}function ne(w,E,q,ge,ue=!1){if(s===!1)return E;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let me=E;if(E===i.RED&&(q===i.FLOAT&&(me=i.R32F),q===i.HALF_FLOAT&&(me=i.R16F),q===i.UNSIGNED_BYTE&&(me=i.R8)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(me=i.R8UI),q===i.UNSIGNED_SHORT&&(me=i.R16UI),q===i.UNSIGNED_INT&&(me=i.R32UI),q===i.BYTE&&(me=i.R8I),q===i.SHORT&&(me=i.R16I),q===i.INT&&(me=i.R32I)),E===i.RG&&(q===i.FLOAT&&(me=i.RG32F),q===i.HALF_FLOAT&&(me=i.RG16F),q===i.UNSIGNED_BYTE&&(me=i.RG8)),E===i.RGBA){const Te=ue?lr:it.getTransfer(ge);q===i.FLOAT&&(me=i.RGBA32F),q===i.HALF_FLOAT&&(me=i.RGBA16F),q===i.UNSIGNED_BYTE&&(me=Te===at?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function A(w,E,q){return H(w,q)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==Ft?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function L(w){return w===At||w===Fs||w===br?i.NEAREST:i.LINEAR}function I(w){const E=w.target;E.removeEventListener("dispose",I),_e(E),E.isVideoTexture&&x.delete(E)}function he(w){const E=w.target;E.removeEventListener("dispose",he),Q(E)}function _e(w){const E=n.get(w);if(E.__webglInit===void 0)return;const q=w.source,ge=_.get(q);if(ge){const ue=ge[E.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&V(w),Object.keys(ge).length===0&&_.delete(q)}n.remove(w)}function V(w){const E=n.get(w);i.deleteTexture(E.__webglTexture);const q=w.source,ge=_.get(q);delete ge[E.__cacheKey],o.memory.textures--}function Q(w){const E=w.texture,q=n.get(w),ge=n.get(E);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(q.__webglFramebuffer[ue]))for(let me=0;me<q.__webglFramebuffer[ue].length;me++)i.deleteFramebuffer(q.__webglFramebuffer[ue][me]);else i.deleteFramebuffer(q.__webglFramebuffer[ue]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[ue])}else{if(Array.isArray(q.__webglFramebuffer))for(let ue=0;ue<q.__webglFramebuffer.length;ue++)i.deleteFramebuffer(q.__webglFramebuffer[ue]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ue=0;ue<q.__webglColorRenderbuffer.length;ue++)q.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[ue]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ue=0,me=E.length;ue<me;ue++){const Te=n.get(E[ue]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(E[ue])}n.remove(E),n.remove(w)}let se=0;function ee(){se=0}function Se(){const w=se;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),se+=1,w}function ae(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function re(w,E){const q=n.get(w);if(w.isVideoTexture&&st(w),w.isRenderTargetTexture===!1&&w.version>0&&q.__version!==w.version){const ge=w.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(q,w,E);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function W(w,E){const q=n.get(w);if(w.version>0&&q.__version!==w.version){G(q,w,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function K(w,E){const q=n.get(w);if(w.version>0&&q.__version!==w.version){G(q,w,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function fe(w,E){const q=n.get(w);if(w.version>0&&q.__version!==w.version){$e(q,w,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const le={[os]:i.REPEAT,[Wt]:i.CLAMP_TO_EDGE,[ls]:i.MIRRORED_REPEAT},oe={[At]:i.NEAREST,[Fs]:i.NEAREST_MIPMAP_NEAREST,[br]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[wl]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Fe={[Hl]:i.NEVER,[ql]:i.ALWAYS,[Gl]:i.LESS,[Vl]:i.LEQUAL,[kl]:i.EQUAL,[Yl]:i.GEQUAL,[Wl]:i.GREATER,[Xl]:i.NOTEQUAL};function je(w,E,q){if(q?(i.texParameteri(w,i.TEXTURE_WRAP_S,le[E.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,le[E.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,le[E.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,oe[E.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,oe[E.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==Wt||E.wrapT!==Wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,L(E.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==At&&E.minFilter!==Ft&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Fe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ge=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==br&&E.minFilter!==Ai||E.type===_n&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===wi&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(w,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Le(w,E){let q=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",I));const ge=E.source;let ue=_.get(ge);ue===void 0&&(ue={},_.set(ge,ue));const me=ae(E);if(me!==w.__cacheKey){ue[me]===void 0&&(ue[me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ue[me].usedTimes++;const Te=ue[w.__cacheKey];Te!==void 0&&(ue[w.__cacheKey].usedTimes--,Te.usedTimes===0&&V(E)),w.__cacheKey=me,w.__webglTexture=ue[me].texture}return q}function G(w,E,q){let ge=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ge=i.TEXTURE_3D);const ue=Le(w,E),me=E.source;t.bindTexture(ge,w.__webglTexture,i.TEXTURE0+q);const Te=n.get(me);if(me.version!==Te.__version||ue===!0){t.activeTexture(i.TEXTURE0+q);const ve=it.getPrimaries(it.workingColorSpace),pe=E.colorSpace===Bt?null:it.getPrimaries(E.colorSpace),O=E.colorSpace===Bt||ve===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const Ee=U(E)&&R(E.image)===!1;let ie=y(E.image,Ee,!1,h);ie=ot(E,ie);const Ne=R(ie)||s,Re=a.convert(E.format,E.colorSpace);let Pe=a.convert(E.type),u=ne(E.internalFormat,Re,Pe,E.colorSpace,E.isVideoTexture);je(ge,E,Ne);let m;const S=E.mipmaps,v=s&&E.isVideoTexture!==!0,D=Te.__version===void 0||ue===!0,P=A(E,ie,Ne);if(E.isDepthTexture)u=i.DEPTH_COMPONENT,s?E.type===_n?u=i.DEPTH_COMPONENT32F:E.type===mn?u=i.DEPTH_COMPONENT24:E.type===Pn?u=i.DEPTH24_STENCIL8:u=i.DEPTH_COMPONENT16:E.type===_n&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Dn&&u===i.DEPTH_COMPONENT&&E.type!==gs&&E.type!==mn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=mn,Pe=a.convert(E.type)),E.format===ui&&u===i.DEPTH_COMPONENT&&(u=i.DEPTH_STENCIL,E.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Pn,Pe=a.convert(E.type))),D&&(v?t.texStorage2D(i.TEXTURE_2D,1,u,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,u,ie.width,ie.height,0,Re,Pe,null));else if(E.isDataTexture)if(S.length>0&&Ne){v&&D&&t.texStorage2D(i.TEXTURE_2D,P,u,S[0].width,S[0].height);for(let B=0,j=S.length;B<j;B++)m=S[B],v?t.texSubImage2D(i.TEXTURE_2D,B,0,0,m.width,m.height,Re,Pe,m.data):t.texImage2D(i.TEXTURE_2D,B,u,m.width,m.height,0,Re,Pe,m.data);E.generateMipmaps=!1}else v?(D&&t.texStorage2D(i.TEXTURE_2D,P,u,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,Re,Pe,ie.data)):t.texImage2D(i.TEXTURE_2D,0,u,ie.width,ie.height,0,Re,Pe,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){v&&D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,u,S[0].width,S[0].height,ie.depth);for(let B=0,j=S.length;B<j;B++)m=S[B],E.format!==Xt?Re!==null?v?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,m.width,m.height,ie.depth,Re,m.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,B,u,m.width,m.height,ie.depth,0,m.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?t.texSubImage3D(i.TEXTURE_2D_ARRAY,B,0,0,0,m.width,m.height,ie.depth,Re,Pe,m.data):t.texImage3D(i.TEXTURE_2D_ARRAY,B,u,m.width,m.height,ie.depth,0,Re,Pe,m.data)}else{v&&D&&t.texStorage2D(i.TEXTURE_2D,P,u,S[0].width,S[0].height);for(let B=0,j=S.length;B<j;B++)m=S[B],E.format!==Xt?Re!==null?v?t.compressedTexSubImage2D(i.TEXTURE_2D,B,0,0,m.width,m.height,Re,m.data):t.compressedTexImage2D(i.TEXTURE_2D,B,u,m.width,m.height,0,m.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):v?t.texSubImage2D(i.TEXTURE_2D,B,0,0,m.width,m.height,Re,Pe,m.data):t.texImage2D(i.TEXTURE_2D,B,u,m.width,m.height,0,Re,Pe,m.data)}else if(E.isDataArrayTexture)v?(D&&t.texStorage3D(i.TEXTURE_2D_ARRAY,P,u,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Re,Pe,ie.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,u,ie.width,ie.height,ie.depth,0,Re,Pe,ie.data);else if(E.isData3DTexture)v?(D&&t.texStorage3D(i.TEXTURE_3D,P,u,ie.width,ie.height,ie.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Re,Pe,ie.data)):t.texImage3D(i.TEXTURE_3D,0,u,ie.width,ie.height,ie.depth,0,Re,Pe,ie.data);else if(E.isFramebufferTexture){if(D)if(v)t.texStorage2D(i.TEXTURE_2D,P,u,ie.width,ie.height);else{let B=ie.width,j=ie.height;for(let ce=0;ce<P;ce++)t.texImage2D(i.TEXTURE_2D,ce,u,B,j,0,Re,Pe,null),B>>=1,j>>=1}}else if(S.length>0&&Ne){v&&D&&t.texStorage2D(i.TEXTURE_2D,P,u,S[0].width,S[0].height);for(let B=0,j=S.length;B<j;B++)m=S[B],v?t.texSubImage2D(i.TEXTURE_2D,B,0,0,Re,Pe,m):t.texImage2D(i.TEXTURE_2D,B,u,Re,Pe,m);E.generateMipmaps=!1}else v?(D&&t.texStorage2D(i.TEXTURE_2D,P,u,ie.width,ie.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Pe,ie)):t.texImage2D(i.TEXTURE_2D,0,u,Re,Pe,ie);H(E,Ne)&&N(ge),Te.__version=me.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function $e(w,E,q){if(E.image.length!==6)return;const ge=Le(w,E),ue=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+q);const me=n.get(ue);if(ue.version!==me.__version||ge===!0){t.activeTexture(i.TEXTURE0+q);const Te=it.getPrimaries(it.workingColorSpace),ve=E.colorSpace===Bt?null:it.getPrimaries(E.colorSpace),pe=E.colorSpace===Bt||Te===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const O=E.isCompressedTexture||E.image[0].isCompressedTexture,Ee=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let B=0;B<6;B++)!O&&!Ee?ie[B]=y(E.image[B],!1,!0,c):ie[B]=Ee?E.image[B].image:E.image[B],ie[B]=ot(E,ie[B]);const Ne=ie[0],Re=R(Ne)||s,Pe=a.convert(E.format,E.colorSpace),u=a.convert(E.type),m=ne(E.internalFormat,Pe,u,E.colorSpace),S=s&&E.isVideoTexture!==!0,v=me.__version===void 0||ge===!0;let D=A(E,Ne,Re);je(i.TEXTURE_CUBE_MAP,E,Re);let P;if(O){S&&v&&t.texStorage2D(i.TEXTURE_CUBE_MAP,D,m,Ne.width,Ne.height);for(let B=0;B<6;B++){P=ie[B].mipmaps;for(let j=0;j<P.length;j++){const ce=P[j];E.format!==Xt?Pe!==null?S?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,0,0,ce.width,ce.height,Pe,ce.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,m,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,0,0,ce.width,ce.height,Pe,u,ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j,m,ce.width,ce.height,0,Pe,u,ce.data)}}}else{P=E.mipmaps,S&&v&&(P.length>0&&D++,t.texStorage2D(i.TEXTURE_CUBE_MAP,D,m,ie[0].width,ie[0].height));for(let B=0;B<6;B++)if(Ee){S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,ie[B].width,ie[B].height,Pe,u,ie[B].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,m,ie[B].width,ie[B].height,0,Pe,u,ie[B].data);for(let j=0;j<P.length;j++){const xe=P[j].image[B].image;S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,0,0,xe.width,xe.height,Pe,u,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,m,xe.width,xe.height,0,Pe,u,xe.data)}}else{S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,Pe,u,ie[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,m,Pe,u,ie[B]);for(let j=0;j<P.length;j++){const ce=P[j];S?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,0,0,Pe,u,ce.image[B]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+B,j+1,m,Pe,u,ce.image[B])}}}H(E,Re)&&N(i.TEXTURE_CUBE_MAP),me.__version=ue.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Ye(w,E,q,ge,ue,me){const Te=a.convert(q.format,q.colorSpace),ve=a.convert(q.type),pe=ne(q.internalFormat,Te,ve,q.colorSpace);if(!n.get(E).__hasExternalTextures){const Ee=Math.max(1,E.width>>me),ie=Math.max(1,E.height>>me);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,me,pe,Ee,ie,E.depth,0,Te,ve,null):t.texImage2D(ue,me,pe,Ee,ie,0,Te,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ke(E)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ue,n.get(q).__webglTexture,0,Ge(E)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,ue,n.get(q).__webglTexture,me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Y(w,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ge=s===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||Ke(E)){const ue=E.depthTexture;ue&&ue.isDepthTexture&&(ue.type===_n?ge=i.DEPTH_COMPONENT32F:ue.type===mn&&(ge=i.DEPTH_COMPONENT24));const me=Ge(E);Ke(E)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ge,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ge,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ge,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ge=Ge(E);q&&Ke(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,E.width,E.height):Ke(E)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ge=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ue=0;ue<ge.length;ue++){const me=ge[ue],Te=a.convert(me.format,me.colorSpace),ve=a.convert(me.type),pe=ne(me.internalFormat,Te,ve,me.colorSpace),O=Ge(E);q&&Ke(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,pe,E.width,E.height):Ke(E)?p.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,pe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,pe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),re(E.depthTexture,0);const ge=n.get(E.depthTexture).__webglTexture,ue=Ge(E);if(E.depthTexture.format===Dn)Ke(E)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(E.depthTexture.format===ui)Ke(E)?p.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function we(w){const E=n.get(w),q=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");rt(E.__webglFramebuffer,w)}else if(q){E.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ge]),E.__webglDepthbuffer[ge]=i.createRenderbuffer(),Y(E.__webglDepthbuffer[ge],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),Y(E.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,E,q){const ge=n.get(w);E!==void 0&&Ye(ge.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&we(w)}function Be(w){const E=w.texture,q=n.get(w),ge=n.get(E);w.addEventListener("dispose",he),w.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=E.version,o.memory.textures++);const ue=w.isWebGLCubeRenderTarget===!0,me=w.isWebGLMultipleRenderTargets===!0,Te=R(w)||s;if(ue){q.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(s&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ve]=[];for(let pe=0;pe<E.mipmaps.length;pe++)q.__webglFramebuffer[ve][pe]=i.createFramebuffer()}else q.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(s&&E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)q.__webglFramebuffer[ve]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(me)if(r.drawBuffers){const ve=w.texture;for(let pe=0,O=ve.length;pe<O;pe++){const Ee=n.get(ve[pe]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&w.samples>0&&Ke(w)===!1){const ve=me?E:[E];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let pe=0;pe<ve.length;pe++){const O=ve[pe];q.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[pe]);const Ee=a.convert(O.format,O.colorSpace),ie=a.convert(O.type),Ne=ne(O.internalFormat,Ee,ie,O.colorSpace,w.isXRRenderTarget===!0),Re=Ge(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,q.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),je(i.TEXTURE_CUBE_MAP,E,Te);for(let ve=0;ve<6;ve++)if(s&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ye(q.__webglFramebuffer[ve][pe],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,pe);else Ye(q.__webglFramebuffer[ve],w,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);H(E,Te)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const ve=w.texture;for(let pe=0,O=ve.length;pe<O;pe++){const Ee=ve[pe],ie=n.get(Ee);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),je(i.TEXTURE_2D,Ee,Te),Ye(q.__webglFramebuffer,w,Ee,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,0),H(Ee,Te)&&N(i.TEXTURE_2D)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(s?ve=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ge.__webglTexture),je(ve,E,Te),s&&E.mipmaps&&E.mipmaps.length>0)for(let pe=0;pe<E.mipmaps.length;pe++)Ye(q.__webglFramebuffer[pe],w,E,i.COLOR_ATTACHMENT0,ve,pe);else Ye(q.__webglFramebuffer,w,E,i.COLOR_ATTACHMENT0,ve,0);H(E,Te)&&N(ve),t.unbindTexture()}w.depthBuffer&&we(w)}function Qe(w){const E=R(w)||s,q=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ge=0,ue=q.length;ge<ue;ge++){const me=q[ge];if(H(me,E)){const Te=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ve=n.get(me).__webglTexture;t.bindTexture(Te,ve),N(Te),t.unbindTexture()}}}function Ve(w){if(s&&w.samples>0&&Ke(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],q=w.width,ge=w.height;let ue=i.COLOR_BUFFER_BIT;const me=[],Te=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(w),pe=w.isWebGLMultipleRenderTargets===!0;if(pe)for(let O=0;O<E.length;O++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let O=0;O<E.length;O++){me.push(i.COLOR_ATTACHMENT0+O),w.depthBuffer&&me.push(Te);const Ee=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ee===!1&&(w.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),pe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[O]),Ee===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Te]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Te])),pe){const ie=n.get(E[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,q,ge,0,0,q,ge,ue,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let O=0;O<E.length;O++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,ve.__webglColorRenderbuffer[O]);const Ee=n.get(E[O]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ge(w){return Math.min(f,w.samples)}function Ke(w){const E=n.get(w);return s&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(w){const E=o.render.frame;x.get(w)!==E&&(x.set(w,E),w.update())}function ot(w,E){const q=w.colorSpace,ge=w.format,ue=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===cs||q!==ln&&q!==Bt&&(it.getTransfer(q)===at?s===!1?e.has("EXT_sRGB")===!0&&ge===Xt?(w.format=cs,w.minFilter=Ft,w.generateMipmaps=!1):E=Ao.sRGBToLinear(E):(ge!==Xt||ue!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),E}this.allocateTextureUnit=Se,this.resetTextureUnits=ee,this.setTexture2D=re,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=fe,this.rebindTextures=Ie,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Ye,this.useMultisampledRTT=Ke}function op(i,e,t){const n=t.isWebGL2;function r(a,o=Bt){let s;const l=it.getTransfer(o);if(a===xn)return i.UNSIGNED_BYTE;if(a===vo)return i.UNSIGNED_SHORT_4_4_4_4;if(a===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Rl)return i.BYTE;if(a===Cl)return i.SHORT;if(a===gs)return i.UNSIGNED_SHORT;if(a===go)return i.INT;if(a===mn)return i.UNSIGNED_INT;if(a===_n)return i.FLOAT;if(a===wi)return n?i.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===Ll)return i.ALPHA;if(a===Xt)return i.RGBA;if(a===Pl)return i.LUMINANCE;if(a===Dl)return i.LUMINANCE_ALPHA;if(a===Dn)return i.DEPTH_COMPONENT;if(a===ui)return i.DEPTH_STENCIL;if(a===cs)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===Ul)return i.RED;if(a===Eo)return i.RED_INTEGER;if(a===Il)return i.RG;if(a===So)return i.RG_INTEGER;if(a===Mo)return i.RGBA_INTEGER;if(a===Tr||a===Ar||a===wr||a===Rr)if(l===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Tr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Ar)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Rr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Tr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Ar)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===wr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Rr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Bs||a===zs||a===Hs||a===Gs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===Bs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Hs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Gs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nl)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===ks||a===Vs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===ks)return l===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Vs)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ws||a===Xs||a===Ys||a===qs||a===js||a===Ks||a===Zs||a===Js||a===$s||a===Qs||a===ea||a===ta||a===na||a===ia)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Ws)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Xs)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ys)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qs)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===js)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ks)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Zs)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Js)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===$s)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qs)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===ea)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===ta)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===na)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===ia)return l===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Cr||a===ra||a===sa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===Cr)return l===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ra)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===sa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ol||a===aa||a===oa||a===la)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===Cr)return s.COMPRESSED_RED_RGTC1_EXT;if(a===aa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===oa)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===la)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pn?n?i.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class lp extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ir extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cp={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const _=t.getJointPose(M,n),d=this._getHandJoint(c,M);_!==null&&(d.matrix.fromArray(_.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=_.radius),d.visible=_!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=h.position.distanceTo(f.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(cp)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ir;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class up extends Lt{constructor(e,t,n,r,a,o,s,l,c,h){if(h=h!==void 0?h:Dn,h!==Dn&&h!==ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Dn&&(n=mn),n===void 0&&h===ui&&(n=Pn),super(null,r,a,o,s,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hp extends zn{constructor(e,t){super();const n=this;let r=null,a=1,o=null,s="local-floor",l=1,c=null,h=null,f=null,p=null,g=null,x=null;const M=t.getContextAttributes();let _=null,d=null;const C=[],y=[],R=new Nt;R.layers.enable(1),R.viewport=new lt;const U=new Nt;U.layers.enable(2),U.viewport=new lt;const H=[R,U],N=new lp;N.layers.enable(1),N.layers.enable(2);let ne=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let K=C[W];return K===void 0&&(K=new $r,C[W]=K),K.getTargetRaySpace()},this.getControllerGrip=function(W){let K=C[W];return K===void 0&&(K=new $r,C[W]=K),K.getGripSpace()},this.getHand=function(W){let K=C[W];return K===void 0&&(K=new $r,C[W]=K),K.getHandSpace()};function L(W){const K=y.indexOf(W.inputSource);if(K===-1)return;const fe=C[K];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||o),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function I(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",he);for(let W=0;W<C.length;W++){const K=y[W];K!==null&&(y[W]=null,C[W].disconnect(K))}ne=null,A=null,e.setRenderTarget(_),g=null,p=null,f=null,r=null,d=null,re.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",I),r.addEventListener("inputsourceschange",he),M.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:r.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(r,t,K),r.updateRenderState({baseLayer:g}),d=new In(g.framebufferWidth,g.framebufferHeight,{format:Xt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let K=null,fe=null,le=null;M.depth&&(le=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=M.stencil?ui:Dn,fe=M.stencil?Pn:mn);const oe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};f=new XRWebGLBinding(r,t),p=f.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),d=new In(p.textureWidth,p.textureHeight,{format:Xt,type:xn,depthTexture:new up(p.textureWidth,p.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});const Fe=e.properties.get(d);Fe.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(s),re.setContext(r),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function he(W){for(let K=0;K<W.removed.length;K++){const fe=W.removed[K],le=y.indexOf(fe);le>=0&&(y[le]=null,C[le].disconnect(fe))}for(let K=0;K<W.added.length;K++){const fe=W.added[K];let le=y.indexOf(fe);if(le===-1){for(let Fe=0;Fe<C.length;Fe++)if(Fe>=y.length){y.push(fe),le=Fe;break}else if(y[Fe]===null){y[Fe]=fe,le=Fe;break}if(le===-1)break}const oe=C[le];oe&&oe.connect(fe)}}const _e=new k,V=new k;function Q(W,K,fe){_e.setFromMatrixPosition(K.matrixWorld),V.setFromMatrixPosition(fe.matrixWorld);const le=_e.distanceTo(V),oe=K.projectionMatrix.elements,Fe=fe.projectionMatrix.elements,je=oe[14]/(oe[10]-1),Le=oe[14]/(oe[10]+1),G=(oe[9]+1)/oe[5],$e=(oe[9]-1)/oe[5],Ye=(oe[8]-1)/oe[0],Y=(Fe[8]+1)/Fe[0],rt=je*Ye,we=je*Y,Ie=le/(-Ye+Y),Be=Ie*-Ye;K.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Be),W.translateZ(Ie),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Qe=je+Ie,Ve=Le+Ie,Ge=rt-Be,Ke=we+(le-Be),st=G*Le/Ve*Qe,ot=$e*Le/Ve*Qe;W.projectionMatrix.makePerspective(Ge,Ke,st,ot,Qe,Ve),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function se(W,K){K===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(K.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;N.near=U.near=R.near=W.near,N.far=U.far=R.far=W.far,(ne!==N.near||A!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),ne=N.near,A=N.far);const K=W.parent,fe=N.cameras;se(N,K);for(let le=0;le<fe.length;le++)se(fe[le],K);fe.length===2?Q(N,R,U):N.projectionMatrix.copy(R.projectionMatrix),ee(W,N,K)};function ee(W,K,fe){fe===null?W.matrix.copy(K.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(K.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(K.projectionMatrix),W.projectionMatrixInverse.copy(K.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ri*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(W){l=W,p!==null&&(p.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)};let Se=null;function ae(W,K){if(h=K.getViewerPose(c||o),x=K,h!==null){const fe=h.views;g!==null&&(e.setRenderTargetFramebuffer(d,g.framebuffer),e.setRenderTarget(d));let le=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,le=!0);for(let oe=0;oe<fe.length;oe++){const Fe=fe[oe];let je=null;if(g!==null)je=g.getViewport(Fe);else{const G=f.getViewSubImage(p,Fe);je=G.viewport,oe===0&&(e.setRenderTargetTextures(d,G.colorTexture,p.ignoreDepthValues?void 0:G.depthStencilTexture),e.setRenderTarget(d))}let Le=H[oe];Le===void 0&&(Le=new Nt,Le.layers.enable(oe),Le.viewport=new lt,H[oe]=Le),Le.matrix.fromArray(Fe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Fe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(je.x,je.y,je.width,je.height),oe===0&&(N.matrix.copy(Le.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),le===!0&&N.cameras.push(Le)}}for(let fe=0;fe<C.length;fe++){const le=y[fe],oe=C[fe];le!==null&&oe!==void 0&&oe.update(le,K,c||o)}Se&&Se(W,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),x=null}const re=new No;re.setAnimationLoop(ae),this.setAnimationLoop=function(W){Se=W},this.dispose=function(){}}}function dp(i,e){function t(_,d){_.matrixAutoUpdate===!0&&_.updateMatrix(),d.value.copy(_.matrix)}function n(_,d){d.color.getRGB(_.fogColor.value,Uo(i)),d.isFog?(_.fogNear.value=d.near,_.fogFar.value=d.far):d.isFogExp2&&(_.fogDensity.value=d.density)}function r(_,d,C,y,R){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(_,d):d.isMeshToonMaterial?(a(_,d),f(_,d)):d.isMeshPhongMaterial?(a(_,d),h(_,d)):d.isMeshStandardMaterial?(a(_,d),p(_,d),d.isMeshPhysicalMaterial&&g(_,d,R)):d.isMeshMatcapMaterial?(a(_,d),x(_,d)):d.isMeshDepthMaterial?a(_,d):d.isMeshDistanceMaterial?(a(_,d),M(_,d)):d.isMeshNormalMaterial?a(_,d):d.isLineBasicMaterial?(o(_,d),d.isLineDashedMaterial&&s(_,d)):d.isPointsMaterial?l(_,d,C,y):d.isSpriteMaterial?c(_,d):d.isShadowMaterial?(_.color.value.copy(d.color),_.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(_,d){_.opacity.value=d.opacity,d.color&&_.diffuse.value.copy(d.color),d.emissive&&_.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.bumpMap&&(_.bumpMap.value=d.bumpMap,t(d.bumpMap,_.bumpMapTransform),_.bumpScale.value=d.bumpScale,d.side===Ct&&(_.bumpScale.value*=-1)),d.normalMap&&(_.normalMap.value=d.normalMap,t(d.normalMap,_.normalMapTransform),_.normalScale.value.copy(d.normalScale),d.side===Ct&&_.normalScale.value.negate()),d.displacementMap&&(_.displacementMap.value=d.displacementMap,t(d.displacementMap,_.displacementMapTransform),_.displacementScale.value=d.displacementScale,_.displacementBias.value=d.displacementBias),d.emissiveMap&&(_.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,_.emissiveMapTransform)),d.specularMap&&(_.specularMap.value=d.specularMap,t(d.specularMap,_.specularMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest);const C=e.get(d).envMap;if(C&&(_.envMap.value=C,_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=d.reflectivity,_.ior.value=d.ior,_.refractionRatio.value=d.refractionRatio),d.lightMap){_.lightMap.value=d.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=d.lightMapIntensity*y,t(d.lightMap,_.lightMapTransform)}d.aoMap&&(_.aoMap.value=d.aoMap,_.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,_.aoMapTransform))}function o(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform))}function s(_,d){_.dashSize.value=d.dashSize,_.totalSize.value=d.dashSize+d.gapSize,_.scale.value=d.scale}function l(_,d,C,y){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.size.value=d.size*C,_.scale.value=y*.5,d.map&&(_.map.value=d.map,t(d.map,_.uvTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function c(_,d){_.diffuse.value.copy(d.color),_.opacity.value=d.opacity,_.rotation.value=d.rotation,d.map&&(_.map.value=d.map,t(d.map,_.mapTransform)),d.alphaMap&&(_.alphaMap.value=d.alphaMap,t(d.alphaMap,_.alphaMapTransform)),d.alphaTest>0&&(_.alphaTest.value=d.alphaTest)}function h(_,d){_.specular.value.copy(d.specular),_.shininess.value=Math.max(d.shininess,1e-4)}function f(_,d){d.gradientMap&&(_.gradientMap.value=d.gradientMap)}function p(_,d){_.metalness.value=d.metalness,d.metalnessMap&&(_.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,_.metalnessMapTransform)),_.roughness.value=d.roughness,d.roughnessMap&&(_.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,_.roughnessMapTransform)),e.get(d).envMap&&(_.envMapIntensity.value=d.envMapIntensity)}function g(_,d,C){_.ior.value=d.ior,d.sheen>0&&(_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),_.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(_.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,_.sheenColorMapTransform)),d.sheenRoughnessMap&&(_.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,_.sheenRoughnessMapTransform))),d.clearcoat>0&&(_.clearcoat.value=d.clearcoat,_.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(_.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,_.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(_.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ct&&_.clearcoatNormalScale.value.negate())),d.iridescence>0&&(_.iridescence.value=d.iridescence,_.iridescenceIOR.value=d.iridescenceIOR,_.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(_.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,_.iridescenceMapTransform)),d.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),d.transmission>0&&(_.transmission.value=d.transmission,_.transmissionSamplerMap.value=C.texture,_.transmissionSamplerSize.value.set(C.width,C.height),d.transmissionMap&&(_.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,_.transmissionMapTransform)),_.thickness.value=d.thickness,d.thicknessMap&&(_.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=d.attenuationDistance,_.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(_.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(_.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=d.specularIntensity,_.specularColor.value.copy(d.specularColor),d.specularColorMap&&(_.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,_.specularColorMapTransform)),d.specularIntensityMap&&(_.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,d){d.matcap&&(_.matcap.value=d.matcap)}function M(_,d){const C=e.get(d).light;_.referencePosition.value.setFromMatrixPosition(C.matrixWorld),_.nearDistance.value=C.shadow.camera.near,_.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function fp(i,e,t,n){let r={},a={},o=[];const s=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,y){const R=y.program;n.uniformBlockBinding(C,R)}function c(C,y){let R=r[C.id];R===void 0&&(x(C),R=h(C),r[C.id]=R,C.addEventListener("dispose",_));const U=y.program;n.updateUBOMapping(C,U);const H=e.render.frame;a[C.id]!==H&&(p(C),a[C.id]=H)}function h(C){const y=f();C.__bindingPointIndex=y;const R=i.createBuffer(),U=C.__size,H=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,U,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,R),R}function f(){for(let C=0;C<s;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){const y=r[C.id],R=C.uniforms,U=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let H=0,N=R.length;H<N;H++){const ne=R[H];if(g(ne,H,U)===!0){const A=ne.__offset,L=Array.isArray(ne.value)?ne.value:[ne.value];let I=0;for(let he=0;he<L.length;he++){const _e=L[he],V=M(_e);typeof _e=="number"?(ne.__data[0]=_e,i.bufferSubData(i.UNIFORM_BUFFER,A+I,ne.__data)):_e.isMatrix3?(ne.__data[0]=_e.elements[0],ne.__data[1]=_e.elements[1],ne.__data[2]=_e.elements[2],ne.__data[3]=_e.elements[0],ne.__data[4]=_e.elements[3],ne.__data[5]=_e.elements[4],ne.__data[6]=_e.elements[5],ne.__data[7]=_e.elements[0],ne.__data[8]=_e.elements[6],ne.__data[9]=_e.elements[7],ne.__data[10]=_e.elements[8],ne.__data[11]=_e.elements[0]):(_e.toArray(ne.__data,I),I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,ne.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(C,y,R){const U=C.value;if(R[y]===void 0){if(typeof U=="number")R[y]=U;else{const H=Array.isArray(U)?U:[U],N=[];for(let ne=0;ne<H.length;ne++)N.push(H[ne].clone());R[y]=N}return!0}else if(typeof U=="number"){if(R[y]!==U)return R[y]=U,!0}else{const H=Array.isArray(R[y])?R[y]:[R[y]],N=Array.isArray(U)?U:[U];for(let ne=0;ne<H.length;ne++){const A=H[ne];if(A.equals(N[ne])===!1)return A.copy(N[ne]),!0}}return!1}function x(C){const y=C.uniforms;let R=0;const U=16;let H=0;for(let N=0,ne=y.length;N<ne;N++){const A=y[N],L={boundary:0,storage:0},I=Array.isArray(A.value)?A.value:[A.value];for(let he=0,_e=I.length;he<_e;he++){const V=I[he],Q=M(V);L.boundary+=Q.boundary,L.storage+=Q.storage}if(A.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=R,N>0){H=R%U;const he=U-H;H!==0&&he-L.boundary<0&&(R+=U-H,A.__offset=R)}R+=L.storage}return H=R%U,H>0&&(R+=U-H),C.__size=R,C.__cache={},this}function M(C){const y={boundary:0,storage:0};return typeof C=="number"?(y.boundary=4,y.storage=4):C.isVector2?(y.boundary=8,y.storage=8):C.isVector3||C.isColor?(y.boundary=16,y.storage=12):C.isVector4?(y.boundary=16,y.storage=16):C.isMatrix3?(y.boundary=48,y.storage=48):C.isMatrix4?(y.boundary=64,y.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),y}function _(C){const y=C.target;y.removeEventListener("dispose",_);const R=o.indexOf(y.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function d(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},a={}}return{bind:l,update:c,dispose:d}}class Ho{constructor(e={}){const{canvas:t=cc(),context:n=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;const g=new Uint32Array(4),x=new Int32Array(4);let M=null,_=null;const d=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_t,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const y=this;let R=!1,U=0,H=0,N=null,ne=-1,A=null;const L=new lt,I=new lt;let he=null;const _e=new et(0);let V=0,Q=t.width,se=t.height,ee=1,Se=null,ae=null;const re=new lt(0,0,Q,se),W=new lt(0,0,Q,se);let K=!1;const fe=new ys;let le=!1,oe=!1,Fe=null;const je=new ct,Le=new qe,G=new k,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ye(){return N===null?ee:1}let Y=n;function rt(b,X){for(let Z=0;Z<b.length;Z++){const J=b[Z],$=t.getContext(J,X);if($!==null)return $}return null}try{const b={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_s}`),t.addEventListener("webglcontextlost",S,!1),t.addEventListener("webglcontextrestored",v,!1),t.addEventListener("webglcontextcreationerror",D,!1),Y===null){const X=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&X.shift(),Y=rt(X,b),Y===null)throw rt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let we,Ie,Be,Qe,Ve,Ge,Ke,st,ot,w,E,q,ge,ue,me,Te,ve,pe,O,Ee,ie,Ne,Re,Pe;function u(){we=new Md(Y),Ie=new md(Y,we,e),we.init(Ie),Ne=new op(Y,we,Ie),Be=new sp(Y,we,Ie),Qe=new Td(Y),Ve=new Xf,Ge=new ap(Y,we,Be,Ve,Ie,Ne,Qe),Ke=new gd(y),st=new Sd(y),ot=new Ic(Y,Ie),Re=new fd(Y,we,ot,Ie),w=new yd(Y,ot,Qe,Re),E=new Cd(Y,w,ot,Qe),O=new Rd(Y,Ie,Ge),Te=new _d(Ve),q=new Wf(y,Ke,st,we,Ie,Re,Te),ge=new dp(y,Ve),ue=new qf,me=new Qf(we,Ie),pe=new dd(y,Ke,st,Be,E,p,l),ve=new rp(y,E,Ie),Pe=new fp(Y,Qe,Ie,Be),Ee=new pd(Y,we,Qe,Ie),ie=new bd(Y,we,Qe,Ie),Qe.programs=q.programs,y.capabilities=Ie,y.extensions=we,y.properties=Ve,y.renderLists=ue,y.shadowMap=ve,y.state=Be,y.info=Qe}u();const m=new hp(y,Y);this.xr=m,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const b=we.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=we.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(Q,se,!1))},this.getSize=function(b){return b.set(Q,se)},this.setSize=function(b,X,Z=!0){if(m.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=b,se=X,t.width=Math.floor(b*ee),t.height=Math.floor(X*ee),Z===!0&&(t.style.width=b+"px",t.style.height=X+"px"),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(Q*ee,se*ee).floor()},this.setDrawingBufferSize=function(b,X,Z){Q=b,se=X,ee=Z,t.width=Math.floor(b*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,b,X)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,X,Z,J){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,X,Z,J),Be.viewport(L.copy(re).multiplyScalar(ee).floor())},this.getScissor=function(b){return b.copy(W)},this.setScissor=function(b,X,Z,J){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,X,Z,J),Be.scissor(I.copy(W).multiplyScalar(ee).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(b){Be.setScissorTest(K=b)},this.setOpaqueSort=function(b){Se=b},this.setTransparentSort=function(b){ae=b},this.getClearColor=function(b){return b.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(b=!0,X=!0,Z=!0){let J=0;if(b){let $=!1;if(N!==null){const be=N.texture.format;$=be===Mo||be===So||be===Eo}if($){const be=N.texture.type,De=be===xn||be===mn||be===gs||be===Pn||be===vo||be===xo,Ce=pe.getClearColor(),Xe=pe.getClearAlpha(),T=Ce.r,z=Ce.g,F=Ce.b;De?(g[0]=T,g[1]=z,g[2]=F,g[3]=Xe,Y.clearBufferuiv(Y.COLOR,0,g)):(x[0]=T,x[1]=z,x[2]=F,x[3]=Xe,Y.clearBufferiv(Y.COLOR,0,x))}else J|=Y.COLOR_BUFFER_BIT}X&&(J|=Y.DEPTH_BUFFER_BIT),Z&&(J|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",S,!1),t.removeEventListener("webglcontextrestored",v,!1),t.removeEventListener("webglcontextcreationerror",D,!1),ue.dispose(),me.dispose(),Ve.dispose(),Ke.dispose(),st.dispose(),E.dispose(),Re.dispose(),Pe.dispose(),q.dispose(),m.dispose(),m.removeEventListener("sessionstart",ze),m.removeEventListener("sessionend",de),Fe&&(Fe.dispose(),Fe=null),We.stop()};function S(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function v(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=Qe.autoReset,X=ve.enabled,Z=ve.autoUpdate,J=ve.needsUpdate,$=ve.type;u(),Qe.autoReset=b,ve.enabled=X,ve.autoUpdate=Z,ve.needsUpdate=J,ve.type=$}function D(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function P(b){const X=b.target;X.removeEventListener("dispose",P),B(X)}function B(b){j(b),Ve.remove(b)}function j(b){const X=Ve.get(b).programs;X!==void 0&&(X.forEach(function(Z){q.releaseProgram(Z)}),b.isShaderMaterial&&q.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,Z,J,$,be){X===null&&(X=$e);const De=$.isMesh&&$.matrixWorld.determinant()<0,Ce=Ui(b,X,Z,J,$);Be.setMaterial(J,De);let Xe=Z.index,T=1;if(J.wireframe===!0){if(Xe=w.getWireframeAttribute(Z),Xe===void 0)return;T=2}const z=Z.drawRange,F=Z.attributes.position;let te=z.start*T,ye=(z.start+z.count)*T;be!==null&&(te=Math.max(te,be.start*T),ye=Math.min(ye,(be.start+be.count)*T)),Xe!==null?(te=Math.max(te,0),ye=Math.min(ye,Xe.count)):F!=null&&(te=Math.max(te,0),ye=Math.min(ye,F.count));const Ue=ye-te;if(Ue<0||Ue===1/0)return;Re.setup($,J,Ce,Z,Xe);let ke,He=Ee;if(Xe!==null&&(ke=ot.get(Xe),He=ie,He.setIndex(ke)),$.isMesh)J.wireframe===!0?(Be.setLineWidth(J.wireframeLinewidth*Ye()),He.setMode(Y.LINES)):He.setMode(Y.TRIANGLES);else if($.isLine){let Ae=J.linewidth;Ae===void 0&&(Ae=1),Be.setLineWidth(Ae*Ye()),$.isLineSegments?He.setMode(Y.LINES):$.isLineLoop?He.setMode(Y.LINE_LOOP):He.setMode(Y.LINE_STRIP)}else $.isPoints?He.setMode(Y.POINTS):$.isSprite&&He.setMode(Y.TRIANGLES);if($.isInstancedMesh)He.renderInstances(te,Ue,$.count);else if(Z.isInstancedBufferGeometry){const Ae=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Rt=Math.min(Z.instanceCount,Ae);He.renderInstances(te,Ue,Rt)}else He.render(te,Ue)};function ce(b,X,Z){b.transparent===!0&&b.side===Kt&&b.forceSinglePass===!1?(b.side=Ct,b.needsUpdate=!0,$t(b,X,Z),b.side=En,b.needsUpdate=!0,$t(b,X,Z),b.side=Kt):$t(b,X,Z)}this.compile=function(b,X,Z=null){Z===null&&(Z=b),_=me.get(Z),_.init(),C.push(_),Z.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),b!==Z&&b.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(_.pushLight($),$.castShadow&&_.pushShadow($))}),_.setupLights(y._useLegacyLights);const J=new Set;return b.traverse(function($){const be=$.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const Ce=be[De];ce(Ce,Z,$),J.add(Ce)}else ce(be,Z,$),J.add(be)}),C.pop(),_=null,J},this.compileAsync=function(b,X,Z=null){const J=this.compile(b,X,Z);return new Promise($=>{function be(){if(J.forEach(function(De){Ve.get(De).currentProgram.isReady()&&J.delete(De)}),J.size===0){$(b);return}setTimeout(be,10)}we.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let xe=null;function Oe(b){xe&&xe(b)}function ze(){We.stop()}function de(){We.start()}const We=new No;We.setAnimationLoop(Oe),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(b){xe=b,m.setAnimationLoop(b),b===null?We.stop():We.start()},m.addEventListener("sessionstart",ze),m.addEventListener("sessionend",de),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),m.enabled===!0&&m.isPresenting===!0&&(m.cameraAutoUpdate===!0&&m.updateCamera(X),X=m.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,X,N),_=me.get(b,C.length),_.init(),C.push(_),je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),fe.setFromProjectionMatrix(je),oe=this.localClippingEnabled,le=Te.init(this.clippingPlanes,oe),M=ue.get(b,d.length),M.init(),d.push(M),ut(b,X,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(Se,ae),this.info.render.frame++,le===!0&&Te.beginShadows();const Z=_.state.shadowsArray;if(ve.render(Z,b,X),le===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),pe.render(M,b),_.setupLights(y._useLegacyLights),X.isArrayCamera){const J=X.cameras;for(let $=0,be=J.length;$<be;$++){const De=J[$];tt(M,b,De,De.viewport)}}else tt(M,b,X);N!==null&&(Ge.updateMultisampleRenderTarget(N),Ge.updateRenderTargetMipmap(N)),b.isScene===!0&&b.onAfterRender(y,b,X),Re.resetDefaultState(),ne=-1,A=null,C.pop(),C.length>0?_=C[C.length-1]:_=null,d.pop(),d.length>0?M=d[d.length-1]:M=null};function ut(b,X,Z,J){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||fe.intersectsSprite(b)){J&&G.setFromMatrixPosition(b.matrixWorld).applyMatrix4(je);const De=E.update(b),Ce=b.material;Ce.visible&&M.push(b,De,Ce,Z,G.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||fe.intersectsObject(b))){const De=E.update(b),Ce=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),G.copy(b.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),G.copy(De.boundingSphere.center)),G.applyMatrix4(b.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){const Xe=De.groups;for(let T=0,z=Xe.length;T<z;T++){const F=Xe[T],te=Ce[F.materialIndex];te&&te.visible&&M.push(b,De,te,Z,G.z,F)}}else Ce.visible&&M.push(b,De,Ce,Z,G.z,null)}}const be=b.children;for(let De=0,Ce=be.length;De<Ce;De++)ut(be[De],X,Z,J)}function tt(b,X,Z,J){const $=b.opaque,be=b.transmissive,De=b.transparent;_.setupLightsView(Z),le===!0&&Te.setGlobalState(y.clippingPlanes,Z),be.length>0&&wt($,be,X,Z),J&&Be.viewport(L.copy(J)),$.length>0&&Mt($,X,Z),be.length>0&&Mt(be,X,Z),De.length>0&&Mt(De,X,Z),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function wt(b,X,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const be=Ie.isWebGL2;Fe===null&&(Fe=new In(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?wi:xn,minFilter:Ai,samples:be?4:0})),y.getDrawingBufferSize(Le),be?Fe.setSize(Le.x,Le.y):Fe.setSize(dr(Le.x),dr(Le.y));const De=y.getRenderTarget();y.setRenderTarget(Fe),y.getClearColor(_e),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),y.clear();const Ce=y.toneMapping;y.toneMapping=vn,Mt(b,Z,J),Ge.updateMultisampleRenderTarget(Fe),Ge.updateRenderTargetMipmap(Fe);let Xe=!1;for(let T=0,z=X.length;T<z;T++){const F=X[T],te=F.object,ye=F.geometry,Ue=F.material,ke=F.group;if(Ue.side===Kt&&te.layers.test(J.layers)){const He=Ue.side;Ue.side=Ct,Ue.needsUpdate=!0,Sn(te,Z,J,ye,Ue,ke),Ue.side=He,Ue.needsUpdate=!0,Xe=!0}}Xe===!0&&(Ge.updateMultisampleRenderTarget(Fe),Ge.updateRenderTargetMipmap(Fe)),y.setRenderTarget(De),y.setClearColor(_e,V),y.toneMapping=Ce}function Mt(b,X,Z){const J=X.isScene===!0?X.overrideMaterial:null;for(let $=0,be=b.length;$<be;$++){const De=b[$],Ce=De.object,Xe=De.geometry,T=J===null?De.material:J,z=De.group;Ce.layers.test(Z.layers)&&Sn(Ce,X,Z,Xe,T,z)}}function Sn(b,X,Z,J,$,be){b.onBeforeRender(y,X,Z,J,$,be),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(y,X,Z,J,b,be),$.transparent===!0&&$.side===Kt&&$.forceSinglePass===!1?($.side=Ct,$.needsUpdate=!0,y.renderBufferDirect(Z,X,J,$,b,be),$.side=En,$.needsUpdate=!0,y.renderBufferDirect(Z,X,J,$,b,be),$.side=Kt):y.renderBufferDirect(Z,X,J,$,b,be),b.onAfterRender(y,X,Z,J,$,be)}function $t(b,X,Z){X.isScene!==!0&&(X=$e);const J=Ve.get(b),$=_.state.lights,be=_.state.shadowsArray,De=$.state.version,Ce=q.getParameters(b,$.state,be,X,Z),Xe=q.getProgramCacheKey(Ce);let T=J.programs;J.environment=b.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(b.isMeshStandardMaterial?st:Ke).get(b.envMap||J.environment),T===void 0&&(b.addEventListener("dispose",P),T=new Map,J.programs=T);let z=T.get(Xe);if(z!==void 0){if(J.currentProgram===z&&J.lightsStateVersion===De)return zt(b,Ce),z}else Ce.uniforms=q.getUniforms(b),b.onBuild(Z,Ce,y),b.onBeforeCompile(Ce,y),z=q.acquireProgram(Ce,Xe),T.set(Xe,z),J.uniforms=Ce.uniforms;const F=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(F.clippingPlanes=Te.uniform),zt(b,Ce),J.needsLights=Er(b),J.lightsStateVersion=De,J.needsLights&&(F.ambientLightColor.value=$.state.ambient,F.lightProbe.value=$.state.probe,F.directionalLights.value=$.state.directional,F.directionalLightShadows.value=$.state.directionalShadow,F.spotLights.value=$.state.spot,F.spotLightShadows.value=$.state.spotShadow,F.rectAreaLights.value=$.state.rectArea,F.ltc_1.value=$.state.rectAreaLTC1,F.ltc_2.value=$.state.rectAreaLTC2,F.pointLights.value=$.state.point,F.pointLightShadows.value=$.state.pointShadow,F.hemisphereLights.value=$.state.hemi,F.directionalShadowMap.value=$.state.directionalShadowMap,F.directionalShadowMatrix.value=$.state.directionalShadowMatrix,F.spotShadowMap.value=$.state.spotShadowMap,F.spotLightMatrix.value=$.state.spotLightMatrix,F.spotLightMap.value=$.state.spotLightMap,F.pointShadowMap.value=$.state.pointShadowMap,F.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=z,J.uniformsList=null,z}function qt(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=ar.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function zt(b,X){const Z=Ve.get(b);Z.outputColorSpace=X.outputColorSpace,Z.instancing=X.instancing,Z.instancingColor=X.instancingColor,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function Ui(b,X,Z,J,$){X.isScene!==!0&&(X=$e),Ge.resetTextureUnits();const be=X.fog,De=J.isMeshStandardMaterial?X.environment:null,Ce=N===null?y.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:ln,Xe=(J.isMeshStandardMaterial?st:Ke).get(J.envMap||De),T=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,z=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),F=!!Z.morphAttributes.position,te=!!Z.morphAttributes.normal,ye=!!Z.morphAttributes.color;let Ue=vn;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ue=y.toneMapping);const ke=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,He=ke!==void 0?ke.length:0,Ae=Ve.get(J),Rt=_.state.lights;if(le===!0&&(oe===!0||b!==A)){const Dt=b===A&&J.id===ne;Te.setState(J,b,Dt)}let nt=!1;J.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Rt.state.version||Ae.outputColorSpace!==Ce||$.isInstancedMesh&&Ae.instancing===!1||!$.isInstancedMesh&&Ae.instancing===!0||$.isSkinnedMesh&&Ae.skinning===!1||!$.isSkinnedMesh&&Ae.skinning===!0||$.isInstancedMesh&&Ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ae.instancingColor===!1&&$.instanceColor!==null||Ae.envMap!==Xe||J.fog===!0&&Ae.fog!==be||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Te.numPlanes||Ae.numIntersection!==Te.numIntersection)||Ae.vertexAlphas!==T||Ae.vertexTangents!==z||Ae.morphTargets!==F||Ae.morphNormals!==te||Ae.morphColors!==ye||Ae.toneMapping!==Ue||Ie.isWebGL2===!0&&Ae.morphTargetsCount!==He)&&(nt=!0):(nt=!0,Ae.__version=J.version);let Mn=Ae.currentProgram;nt===!0&&(Mn=$t(J,X,$));let Cs=!1,_i=!1,Sr=!1;const yt=Mn.getUniforms(),yn=Ae.uniforms;if(Be.useProgram(Mn.program)&&(Cs=!0,_i=!0,Sr=!0),J.id!==ne&&(ne=J.id,_i=!0),Cs||A!==b){yt.setValue(Y,"projectionMatrix",b.projectionMatrix),yt.setValue(Y,"viewMatrix",b.matrixWorldInverse);const Dt=yt.map.cameraPosition;Dt!==void 0&&Dt.setValue(Y,G.setFromMatrixPosition(b.matrixWorld)),Ie.logarithmicDepthBuffer&&yt.setValue(Y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&yt.setValue(Y,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,_i=!0,Sr=!0)}if($.isSkinnedMesh){yt.setOptional(Y,$,"bindMatrix"),yt.setOptional(Y,$,"bindMatrixInverse");const Dt=$.skeleton;Dt&&(Ie.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),yt.setValue(Y,"boneTexture",Dt.boneTexture,Ge),yt.setValue(Y,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mr=Z.morphAttributes;if((Mr.position!==void 0||Mr.normal!==void 0||Mr.color!==void 0&&Ie.isWebGL2===!0)&&O.update($,Z,Mn),(_i||Ae.receiveShadow!==$.receiveShadow)&&(Ae.receiveShadow=$.receiveShadow,yt.setValue(Y,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(yn.envMap.value=Xe,yn.flipEnvMap.value=Xe.isCubeTexture&&Xe.isRenderTargetTexture===!1?-1:1),_i&&(yt.setValue(Y,"toneMappingExposure",y.toneMappingExposure),Ae.needsLights&&Ii(yn,Sr),be&&J.fog===!0&&ge.refreshFogUniforms(yn,be),ge.refreshMaterialUniforms(yn,J,ee,se,Fe),ar.upload(Y,qt(Ae),yn,Ge)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(ar.upload(Y,qt(Ae),yn,Ge),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&yt.setValue(Y,"center",$.center),yt.setValue(Y,"modelViewMatrix",$.modelViewMatrix),yt.setValue(Y,"normalMatrix",$.normalMatrix),yt.setValue(Y,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Dt=J.uniformsGroups;for(let yr=0,Xo=Dt.length;yr<Xo;yr++)if(Ie.isWebGL2){const Ls=Dt[yr];Pe.update(Ls,Mn),Pe.bind(Ls,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Ii(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Er(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(b,X,Z){Ve.get(b.texture).__webglTexture=X,Ve.get(b.depthTexture).__webglTexture=Z;const J=Ve.get(b);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,X){const Z=Ve.get(b);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(b,X=0,Z=0){N=b,U=X,H=Z;let J=!0,$=null,be=!1,De=!1;if(b){const Xe=Ve.get(b);Xe.__useDefaultFramebuffer!==void 0?(Be.bindFramebuffer(Y.FRAMEBUFFER,null),J=!1):Xe.__webglFramebuffer===void 0?Ge.setupRenderTarget(b):Xe.__hasExternalTextures&&Ge.rebindTextures(b,Ve.get(b.texture).__webglTexture,Ve.get(b.depthTexture).__webglTexture);const T=b.texture;(T.isData3DTexture||T.isDataArrayTexture||T.isCompressedArrayTexture)&&(De=!0);const z=Ve.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(z[X])?$=z[X][Z]:$=z[X],be=!0):Ie.isWebGL2&&b.samples>0&&Ge.useMultisampledRTT(b)===!1?$=Ve.get(b).__webglMultisampledFramebuffer:Array.isArray(z)?$=z[Z]:$=z,L.copy(b.viewport),I.copy(b.scissor),he=b.scissorTest}else L.copy(re).multiplyScalar(ee).floor(),I.copy(W).multiplyScalar(ee).floor(),he=K;if(Be.bindFramebuffer(Y.FRAMEBUFFER,$)&&Ie.drawBuffers&&J&&Be.drawBuffers(b,$),Be.viewport(L),Be.scissor(I),Be.setScissorTest(he),be){const Xe=Ve.get(b.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+X,Xe.__webglTexture,Z)}else if(De){const Xe=Ve.get(b.texture),T=X||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Xe.__webglTexture,Z||0,T)}ne=-1},this.readRenderTargetPixels=function(b,X,Z,J,$,be,De){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ve.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&De!==void 0&&(Ce=Ce[De]),Ce){Be.bindFramebuffer(Y.FRAMEBUFFER,Ce);try{const Xe=b.texture,T=Xe.format,z=Xe.type;if(T!==Xt&&Ne.convert(T)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const F=z===wi&&(we.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&we.has("EXT_color_buffer_float"));if(z!==xn&&Ne.convert(z)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(z===_n&&(Ie.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!F){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-J&&Z>=0&&Z<=b.height-$&&Y.readPixels(X,Z,J,$,Ne.convert(T),Ne.convert(z),be)}finally{const Xe=N!==null?Ve.get(N).__webglFramebuffer:null;Be.bindFramebuffer(Y.FRAMEBUFFER,Xe)}}},this.copyFramebufferToTexture=function(b,X,Z=0){const J=Math.pow(2,-Z),$=Math.floor(X.image.width*J),be=Math.floor(X.image.height*J);Ge.setTexture2D(X,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,Z,0,0,b.x,b.y,$,be),Be.unbindTexture()},this.copyTextureToTexture=function(b,X,Z,J=0){const $=X.image.width,be=X.image.height,De=Ne.convert(Z.format),Ce=Ne.convert(Z.type);Ge.setTexture2D(Z,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,Z.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,J,b.x,b.y,$,be,De,Ce,X.image.data):X.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,J,b.x,b.y,X.mipmaps[0].width,X.mipmaps[0].height,De,X.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,J,b.x,b.y,De,Ce,X.image),J===0&&Z.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Be.unbindTexture()},this.copyTextureToTexture3D=function(b,X,Z,J,$=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=b.max.x-b.min.x+1,De=b.max.y-b.min.y+1,Ce=b.max.z-b.min.z+1,Xe=Ne.convert(J.format),T=Ne.convert(J.type);let z;if(J.isData3DTexture)Ge.setTexture3D(J,0),z=Y.TEXTURE_3D;else if(J.isDataArrayTexture)Ge.setTexture2DArray(J,0),z=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,J.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,J.unpackAlignment);const F=Y.getParameter(Y.UNPACK_ROW_LENGTH),te=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),ye=Y.getParameter(Y.UNPACK_SKIP_PIXELS),Ue=Y.getParameter(Y.UNPACK_SKIP_ROWS),ke=Y.getParameter(Y.UNPACK_SKIP_IMAGES),He=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,He.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,He.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,b.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,b.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,b.min.z),Z.isDataTexture||Z.isData3DTexture?Y.texSubImage3D(z,$,X.x,X.y,X.z,be,De,Ce,Xe,T,He.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(z,$,X.x,X.y,X.z,be,De,Ce,Xe,He.data)):Y.texSubImage3D(z,$,X.x,X.y,X.z,be,De,Ce,Xe,T,He),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,F),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,te),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,ye),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,Ue),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,ke),$===0&&J.generateMipmaps&&Y.generateMipmap(z),Be.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Ge.setTextureCube(b,0):b.isData3DTexture?Ge.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ge.setTexture2DArray(b,0):Ge.setTexture2D(b,0),Be.unbindTexture()},this.resetState=function(){U=0,H=0,N=null,Be.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===vs?"display-p3":"srgb",t.unpackColorSpace=it.workingColorSpace===mr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===_t?Un:yo}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?_t:ln}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pp extends Ho{}pp.prototype.isWebGL1Renderer=!0;class mp extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Go extends fi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ja=new k,$a=new k,Qa=new ct,Qr=new Es,rr=new _r;class _p extends St{constructor(e=new Yt,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ja.fromBufferAttribute(t,r-1),$a.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ja.distanceTo($a);e.setAttribute("lineDistance",new Pt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),rr.radius+=a,e.ray.intersectsSphere(rr)===!1)return;Qa.copy(r).invert(),Qr.copy(e.ray).applyMatrix4(Qa);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new k,h=new k,f=new k,p=new k,g=this.isLineSegments?2:1,x=n.index,_=n.attributes.position;if(x!==null){const d=Math.max(0,o.start),C=Math.min(x.count,o.start+o.count);for(let y=d,R=C-1;y<R;y+=g){const U=x.getX(y),H=x.getX(y+1);if(c.fromBufferAttribute(_,U),h.fromBufferAttribute(_,H),Qr.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const ne=e.ray.origin.distanceTo(p);ne<e.near||ne>e.far||t.push({distance:ne,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),C=Math.min(_.count,o.start+o.count);for(let y=d,R=C-1;y<R;y+=g){if(c.fromBufferAttribute(_,y),h.fromBufferAttribute(_,y+1),Qr.distanceSqToSegment(c,h,p,f)>l)continue;p.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(p);H<e.near||H>e.far||t.push({distance:H,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}class gp{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),a+=n.distanceTo(r),t.push(a),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const a=n.length;let o;t?o=t:o=e*n[a-1];let s=0,l=a-1,c;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),c=n[r]-o,c<0)s=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(a-1);const h=n[r],p=n[r+1]-h,g=(o-h)/p;return(r+g)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),s=this.getPoint(a),l=t||(o.isVector2?new qe:new k);return l.copy(s).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new k,r=[],a=[],o=[],s=new k,l=new ct;for(let g=0;g<=e;g++){const x=g/e;r[g]=this.getTangentAt(x,new k)}a[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),f=Math.abs(r[0].y),p=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),s.crossVectors(r[0],n).normalize(),a[0].crossVectors(r[0],s),o[0].crossVectors(r[0],a[0]);for(let g=1;g<=e;g++){if(a[g]=a[g-1].clone(),o[g]=o[g-1].clone(),s.crossVectors(r[g-1],r[g]),s.length()>Number.EPSILON){s.normalize();const x=Math.acos(gt(r[g-1].dot(r[g]),-1,1));a[g].applyMatrix4(l.makeRotationAxis(s,x))}o[g].crossVectors(r[g],a[g])}if(t===!0){let g=Math.acos(gt(a[0].dot(a[e]),-1,1));g/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(g=-g);for(let x=1;x<=e;x++)a[x].applyMatrix4(l.makeRotationAxis(r[x],g*x)),o[x].crossVectors(r[x],a[x])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vp extends gp{constructor(e=0,t=0,n=1,r=1,a=0,o=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=o,this.aClockwise=s,this.aRotation=l}getPoint(e,t){const n=t||new qe,r=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const o=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(o?a=0:a=r),this.aClockwise===!0&&!o&&(a===r?a=-r:a=a-r);const s=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(s),c=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*f+this.aX,c=p*f+g*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class As extends Yt{constructor(e=.5,t=1,n=32,r=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);const s=[],l=[],c=[],h=[];let f=e;const p=(t-e)/r,g=new k,x=new qe;for(let M=0;M<=r;M++){for(let _=0;_<=n;_++){const d=a+_/n*o;g.x=f*Math.cos(d),g.y=f*Math.sin(d),l.push(g.x,g.y,g.z),c.push(0,0,1),x.x=(g.x/t+1)/2,x.y=(g.y/t+1)/2,h.push(x.x,x.y)}f+=p}for(let M=0;M<r;M++){const _=M*(n+1);for(let d=0;d<n;d++){const C=d+_,y=C,R=C+n+1,U=C+n+2,H=C+1;s.push(y,R,H),s.push(R,U,H)}}this.setIndex(s),this.setAttribute("position",new Pt(l,3)),this.setAttribute("normal",new Pt(c,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ws extends Yt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,o=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:o,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+s,Math.PI);let c=0;const h=[],f=new k,p=new k,g=[],x=[],M=[],_=[];for(let d=0;d<=n;d++){const C=[],y=d/n;let R=0;d===0&&o===0?R=.5/t:d===n&&l===Math.PI&&(R=-.5/t);for(let U=0;U<=t;U++){const H=U/t;f.x=-e*Math.cos(r+H*a)*Math.sin(o+y*s),f.y=e*Math.cos(o+y*s),f.z=e*Math.sin(r+H*a)*Math.sin(o+y*s),x.push(f.x,f.y,f.z),p.copy(f).normalize(),M.push(p.x,p.y,p.z),_.push(H+R,1-y),C.push(c++)}h.push(C)}for(let d=0;d<n;d++)for(let C=0;C<t;C++){const y=h[d][C+1],R=h[d][C],U=h[d+1][C],H=h[d+1][C+1];(d!==0||o>0)&&g.push(y,R,H),(d!==n-1||l<Math.PI)&&g.push(R,U,H)}this.setIndex(g),this.setAttribute("position",new Pt(x,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class eo extends fi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const to={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class xp{constructor(e,t,n){const r=this;let a=!1,o=0,s=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){s++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,s),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){const f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=c.length;f<p;f+=2){const g=c[f],x=c[f+1];if(g.global&&(g.lastIndex=0),g.test(h))return x}return null}}}const Ep=new xp;class xr{constructor(e){this.manager=e!==void 0?e:Ep,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xr.DEFAULT_MATERIAL_NAME="__DEFAULT";class ko extends xr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,o=to.get(e);if(o!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(o),a.manager.itemEnd(e)},0),o;const s=Ci("img");function l(){h(),to.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(f){h(),r&&r(f),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){s.removeEventListener("load",l,!1),s.removeEventListener("error",c,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),a.manager.itemStart(e),s.src=e,s}}class Sp extends xr{constructor(e){super(e)}load(e,t,n,r){const a=new Ms;a.colorSpace=_t;const o=new ko(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let s=0;function l(c){o.load(e[c],function(h){a.images[c]=h,s++,s===6&&(a.needsUpdate=!0,t&&t(a))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return a}}class no extends xr{constructor(e){super(e)}load(e,t,n,r){const a=new Lt,o=new ko(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class Vo extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const es=new ct,io=new k,ro=new k;class Mp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;io.setFromMatrixPosition(e.matrixWorld),t.position.copy(io),ro.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ro),t.updateMatrixWorld(),es.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(es),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(es)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const so=new ct,Si=new k,ts=new k;class yp extends Mp{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Si.setFromMatrixPosition(e.matrixWorld),n.position.copy(Si),ts.copy(n.position),ts.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ts),n.updateMatrixWorld(),r.makeTranslation(-Si.x,-Si.y,-Si.z),so.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(so)}}class bp extends Vo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tp extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ao{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_s}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_s);const Et={stars:"./assets/img/textures/stars.jpg",sun:"./assets/img/textures/sun.jpg",mercury:"./assets/img/textures/mercury.jpg",venus:"./assets/img/textures/venus.jpg",earth:"./assets/img/textures/earth.jpg",mars:"./assets/img/textures/mars.jpg",jupiter:"./assets/img/textures/jupiter.jpg",saturn:"./assets/img/textures/saturn.jpg",saturnRing:"./assets/img/textures/saturnRing.png",uranus:"./assets/img/textures/uranus.jpg",neptune:"./assets/img/textures/neptune.jpg"};function Ap(){const i=new Ho;return i.setSize(window.innerWidth,window.innerHeight),i.domElement.id="solarCanvas",document.body.appendChild(i.domElement),i.gammaOutput=!1,i}function wp(){return new mp}function Rp(){const i=new Nt(45,window.innerWidth/window.innerHeight,.1,5e3);return i.position.set(-1e3,800,300),i}function Cp(i){const e=new Sp;i.background=e.load([Et.stars,Et.stars,Et.stars,Et.stars,Et.stars,Et.stars])}const oo={type:"change"},ns={type:"start"},lo={type:"end"},sr=new Es,co=new pn,Lp=Math.cos(70*lc.DEG2RAD);class Pp extends zn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hn.ROTATE,MIDDLE:Hn.DOLLY,RIGHT:Hn.PAN},this.touches={ONE:Gn.ROTATE,TWO:Gn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",E),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(oo),n.update(),a=r.NONE},this.update=function(){const O=new k,Ee=new Nn().setFromUnitVectors(e.up,new k(0,1,0)),ie=Ee.clone().invert(),Ne=new k,Re=new Nn,Pe=new k,u=2*Math.PI;return function(S=null){const v=n.object.position;O.copy(v).sub(n.target),O.applyQuaternion(Ee),s.setFromVector3(O),n.autoRotate&&a===r.NONE&&I(A(S)),n.enableDamping?(s.theta+=l.theta*n.dampingFactor,s.phi+=l.phi*n.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let D=n.minAzimuthAngle,P=n.maxAzimuthAngle;isFinite(D)&&isFinite(P)&&(D<-Math.PI?D+=u:D>Math.PI&&(D-=u),P<-Math.PI?P+=u:P>Math.PI&&(P-=u),D<=P?s.theta=Math.max(D,Math.min(P,s.theta)):s.theta=s.theta>(D+P)/2?Math.max(D,s.theta):Math.min(P,s.theta)),s.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,s.phi)),s.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&H||n.object.isOrthographicCamera?s.radius=ae(s.radius):s.radius=ae(s.radius*c),O.setFromSpherical(s),O.applyQuaternion(ie),v.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let B=!1;if(n.zoomToCursor&&H){let j=null;if(n.object.isPerspectiveCamera){const ce=O.length();j=ae(ce*c);const xe=ce-j;n.object.position.addScaledVector(R,xe),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const ce=new k(U.x,U.y,0);ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),B=!0;const xe=new k(U.x,U.y,0);xe.unproject(n.object),n.object.position.sub(xe).add(ce),n.object.updateMatrixWorld(),j=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;j!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(j).add(n.object.position):(sr.origin.copy(n.object.position),sr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(sr.direction))<Lp?e.lookAt(n.target):(co.setFromNormalAndCoplanarPoint(n.object.up,n.target),sr.intersectPlane(co,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),B=!0);return c=1,H=!1,B||Ne.distanceToSquared(n.object.position)>o||8*(1-Re.dot(n.object.quaternion))>o||Pe.distanceToSquared(n.target)>0?(n.dispatchEvent(oo),Ne.copy(n.object.position),Re.copy(n.object.quaternion),Pe.copy(n.target),B=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ue),n.domElement.removeEventListener("pointerdown",Ve),n.domElement.removeEventListener("pointercancel",Ke),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",Ge),n.domElement.removeEventListener("pointerup",Ke),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new ao,l=new ao;let c=1;const h=new k,f=new qe,p=new qe,g=new qe,x=new qe,M=new qe,_=new qe,d=new qe,C=new qe,y=new qe,R=new k,U=new qe;let H=!1;const N=[],ne={};function A(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function I(O){l.theta-=O}function he(O){l.phi-=O}const _e=function(){const O=new k;return function(ie,Ne){O.setFromMatrixColumn(Ne,0),O.multiplyScalar(-ie),h.add(O)}}(),V=function(){const O=new k;return function(ie,Ne){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ne,1):(O.setFromMatrixColumn(Ne,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(ie),h.add(O)}}(),Q=function(){const O=new k;return function(ie,Ne){const Re=n.domElement;if(n.object.isPerspectiveCamera){const Pe=n.object.position;O.copy(Pe).sub(n.target);let u=O.length();u*=Math.tan(n.object.fov/2*Math.PI/180),_e(2*ie*u/Re.clientHeight,n.object.matrix),V(2*Ne*u/Re.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(_e(ie*(n.object.right-n.object.left)/n.object.zoom/Re.clientWidth,n.object.matrix),V(Ne*(n.object.top-n.object.bottom)/n.object.zoom/Re.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function se(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Se(O){if(!n.zoomToCursor)return;H=!0;const Ee=n.domElement.getBoundingClientRect(),ie=O.clientX-Ee.left,Ne=O.clientY-Ee.top,Re=Ee.width,Pe=Ee.height;U.x=ie/Re*2-1,U.y=-(Ne/Pe)*2+1,R.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function ae(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function re(O){f.set(O.clientX,O.clientY)}function W(O){Se(O),d.set(O.clientX,O.clientY)}function K(O){x.set(O.clientX,O.clientY)}function fe(O){p.set(O.clientX,O.clientY),g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Ee=n.domElement;I(2*Math.PI*g.x/Ee.clientHeight),he(2*Math.PI*g.y/Ee.clientHeight),f.copy(p),n.update()}function le(O){C.set(O.clientX,O.clientY),y.subVectors(C,d),y.y>0?se(L()):y.y<0&&ee(L()),d.copy(C),n.update()}function oe(O){M.set(O.clientX,O.clientY),_.subVectors(M,x).multiplyScalar(n.panSpeed),Q(_.x,_.y),x.copy(M),n.update()}function Fe(O){Se(O),O.deltaY<0?ee(L()):O.deltaY>0&&se(L()),n.update()}function je(O){let Ee=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?he(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,n.keyPanSpeed),Ee=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?he(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(0,-n.keyPanSpeed),Ee=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(n.keyPanSpeed,0),Ee=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Q(-n.keyPanSpeed,0),Ee=!0;break}Ee&&(O.preventDefault(),n.update())}function Le(){if(N.length===1)f.set(N[0].pageX,N[0].pageY);else{const O=.5*(N[0].pageX+N[1].pageX),Ee=.5*(N[0].pageY+N[1].pageY);f.set(O,Ee)}}function G(){if(N.length===1)x.set(N[0].pageX,N[0].pageY);else{const O=.5*(N[0].pageX+N[1].pageX),Ee=.5*(N[0].pageY+N[1].pageY);x.set(O,Ee)}}function $e(){const O=N[0].pageX-N[1].pageX,Ee=N[0].pageY-N[1].pageY,ie=Math.sqrt(O*O+Ee*Ee);d.set(0,ie)}function Ye(){n.enableZoom&&$e(),n.enablePan&&G()}function Y(){n.enableZoom&&$e(),n.enableRotate&&Le()}function rt(O){if(N.length==1)p.set(O.pageX,O.pageY);else{const ie=pe(O),Ne=.5*(O.pageX+ie.x),Re=.5*(O.pageY+ie.y);p.set(Ne,Re)}g.subVectors(p,f).multiplyScalar(n.rotateSpeed);const Ee=n.domElement;I(2*Math.PI*g.x/Ee.clientHeight),he(2*Math.PI*g.y/Ee.clientHeight),f.copy(p)}function we(O){if(N.length===1)M.set(O.pageX,O.pageY);else{const Ee=pe(O),ie=.5*(O.pageX+Ee.x),Ne=.5*(O.pageY+Ee.y);M.set(ie,Ne)}_.subVectors(M,x).multiplyScalar(n.panSpeed),Q(_.x,_.y),x.copy(M)}function Ie(O){const Ee=pe(O),ie=O.pageX-Ee.x,Ne=O.pageY-Ee.y,Re=Math.sqrt(ie*ie+Ne*Ne);C.set(0,Re),y.set(0,Math.pow(C.y/d.y,n.zoomSpeed)),se(y.y),d.copy(C)}function Be(O){n.enableZoom&&Ie(O),n.enablePan&&we(O)}function Qe(O){n.enableZoom&&Ie(O),n.enableRotate&&rt(O)}function Ve(O){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",Ge),n.domElement.addEventListener("pointerup",Ke)),me(O),O.pointerType==="touch"?q(O):st(O))}function Ge(O){n.enabled!==!1&&(O.pointerType==="touch"?ge(O):ot(O))}function Ke(O){Te(O),N.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",Ge),n.domElement.removeEventListener("pointerup",Ke)),n.dispatchEvent(lo),a=r.NONE}function st(O){let Ee;switch(O.button){case 0:Ee=n.mouseButtons.LEFT;break;case 1:Ee=n.mouseButtons.MIDDLE;break;case 2:Ee=n.mouseButtons.RIGHT;break;default:Ee=-1}switch(Ee){case Hn.DOLLY:if(n.enableZoom===!1)return;W(O),a=r.DOLLY;break;case Hn.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;K(O),a=r.PAN}else{if(n.enableRotate===!1)return;re(O),a=r.ROTATE}break;case Hn.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;re(O),a=r.ROTATE}else{if(n.enablePan===!1)return;K(O),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ns)}function ot(O){switch(a){case r.ROTATE:if(n.enableRotate===!1)return;fe(O);break;case r.DOLLY:if(n.enableZoom===!1)return;le(O);break;case r.PAN:if(n.enablePan===!1)return;oe(O);break}}function w(O){n.enabled===!1||n.enableZoom===!1||a!==r.NONE||(O.preventDefault(),n.dispatchEvent(ns),Fe(O),n.dispatchEvent(lo))}function E(O){n.enabled===!1||n.enablePan===!1||je(O)}function q(O){switch(ve(O),N.length){case 1:switch(n.touches.ONE){case Gn.ROTATE:if(n.enableRotate===!1)return;Le(),a=r.TOUCH_ROTATE;break;case Gn.PAN:if(n.enablePan===!1)return;G(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(n.touches.TWO){case Gn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ye(),a=r.TOUCH_DOLLY_PAN;break;case Gn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Y(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&n.dispatchEvent(ns)}function ge(O){switch(ve(O),a){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;rt(O),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;we(O),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Be(O),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(O),n.update();break;default:a=r.NONE}}function ue(O){n.enabled!==!1&&O.preventDefault()}function me(O){N.push(O)}function Te(O){delete ne[O.pointerId];for(let Ee=0;Ee<N.length;Ee++)if(N[Ee].pointerId==O.pointerId){N.splice(Ee,1);return}}function ve(O){let Ee=ne[O.pointerId];Ee===void 0&&(Ee=new qe,ne[O.pointerId]=Ee),Ee.set(O.pageX,O.pageY)}function pe(O){const Ee=O.pointerId===N[0].pointerId?N[1]:N[0];return ne[Ee.pointerId]}n.domElement.addEventListener("contextmenu",ue),n.domElement.addEventListener("pointerdown",Ve),n.domElement.addEventListener("pointercancel",Ke),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}function Dp(){const i=new Pp(Bn,mi.domElement);return i.update(),i}function Up(i){const e=new Tp(16777215,.5);i.add(e)}function Ip(i){const e=new bp(16777215,2e3,500);i.add(e)}const Np="/data/planetsDataEn.json";async function Op(){try{return(await(await fetch(Np)).json()).planets.map(t=>Object.keys(t)[0])}catch(i){return console.error("error:",i),[]}}function Rs(i){const e=dt[i].planet,t=new k,n=4;e.getWorldPosition(t);const r=e.geometry.parameters.radius*n,a=new k(0,r,r),o=t.clone().add(a),s=document.getElementById("hudContainer");Bn.position.copy(o),Li.target.copy(t),Li.update(),s.style.opacity="1",s.style.pointerEvents="auto",mi.render(Fn,Bn)}window.focusPlanet=Rs;async function Fp(){try{const i=document.getElementById("buttons-container");(await Op()).forEach(t=>{const n=document.createElement("div");n.classList.add("planet-button"),n.dataset.planet=t.toLowerCase();const r=document.createElement("img");r.classList.add("image1"),r.src="/assets/img/buttons/button-planet.png",r.alt="";const a=document.createElement("img");a.classList.add("image2"),a.src="/assets/img/buttons/button-ring.png",a.alt="";const o=document.createElement("img");o.classList.add("image3"),o.src="/assets/img/buttons/button-ring.png",o.alt="";const s=document.createElement("img");s.classList.add("image4"),s.src="/assets/img/buttons/button-ring.png",s.alt="";const l=document.createElement("p");l.classList.add("planet-text"),l.textContent=t,n.appendChild(r),n.appendChild(s),n.appendChild(o),n.appendChild(a),n.appendChild(l),i.appendChild(n),n.onclick=function(){Rs(t.toLowerCase())}})}catch(i){console.error("Erreur lors du chargement des noms de planètes :",i)}}function Bp(i,e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZ";let n=0;const r=setInterval(()=>{i.textContent=i.textContent.split("").map((a,o)=>o<n?e[o]:t[Math.floor(Math.random()*26)]).join(""),n>=e.length&&clearInterval(r),n+=1/3},50)}const zp=["/assets/img/hud/hud2.png","/assets/img/hud/hud3.png","/assets/img/hud/hud4.png","/assets/img/hud/hud5.png","/assets/img/hud/hud6.png","/assets/img/hud/hud7.png","/assets/img/hud/hud8.png"];function Hp(i,e,t){let n=0;function r(){n<e.length&&(i.textContent+=e.charAt(n),n++,setTimeout(r,t))}r()}function Gp(){const i=document.getElementById("hudContainer");for(let e=0;e<8;e++){const t=document.createElement("div");if(t.classList.add("hudElement",`hudElement-${e+1}`),e!==0){const n=document.createElement("img");n.src=zp[e-1],n.alt=`hud${e}`,t.appendChild(n)}i.appendChild(t)}}function kp(){const i=document.getElementById("hudContainer");for(;i.children.length>1;)i.removeChild(i.lastChild)}function Vp(){const i=document.querySelector(".hudElement-1");let e=i.querySelector("h1");return e||(e=document.createElement("h1"),e.id="planet-name",i.appendChild(e)),e}function Wp(i){const e=document.querySelector(".hudElement-2");try{i&&Object.keys(i[1]).forEach((t,n)=>{const r=n+1,a=document.createElement("p");a.classList.add("hudKey"),a.textContent=t,a.addEventListener("mouseenter",()=>{document.querySelector(`.hudValue-${r}`)||Xp(i[1][t],r,n)}),e.appendChild(a)})}catch(t){console.error("Erreur lors de la création des éléments HUD :",t)}}function Xp(i,e,t){let n;e<=3?n=".hudElement-5":e<=6?n=".hudElement-6":e<=8?n=".hudElement-4":n=".hudElement-7";const r=document.querySelector(n),a=document.createElement("p");a.classList.add("hudValue",`hudValue-${t+1}`),r.appendChild(a),Hp(a,i,80)}function uo(i){kp(),Gp();const e=Vp();return i&&Wp(i),e}const Yp="/data/planetsDataEn.json";async function qp(i){try{if(!i)return console.error("Aucun nom de planète fourni."),null;const n=(await(await fetch(Yp)).json()).planets.find(a=>{const o=Object.keys(a)[0];return o&&o.toLowerCase()===i.toLowerCase()}),r=n[Object.keys(n)];return[Object.keys(r),r]}catch(e){throw console.error("Erreur:",e),e}}function jp(){const i=document.getElementById("buttons-container"),e=uo();i.addEventListener("click",async t=>{const n=document.getElementById("hudContainer"),r=t.target.closest(".planet-button");if(r){const a=r.getAttribute("data-planet");if(e.textContent=a,i.querySelectorAll(".planet-button").forEach(s=>{s!==r&&s.classList.remove("selected")}),r.classList.toggle("selected")){ds.value=!1;const s=await qp(a);Rs(a),Bp(e,a),uo(s)}else ds.value=!0,Bn.position.set(-1e3,1e3,300),Li.target.set(0,0,0),Li.update(),n.style.opacity="0",n.style.pointerEvents="none"}})}function sn(i,e,t,n,r=!0){const a=new ws(i,500,500),o=new no().load(e);o.anisotropy=mi.capabilities.getMaxAnisotropy()*2,o.generateMipmaps=!0;let s;r?s=new Ss({map:o}):s=new eo({map:o});const l=new Zt(a,s),c=new St;if(c.add(l),Fn.add(c),l.position.x=t,n){const M=new As(n.innerRadius,n.outerRadius,100,30),_=new no,d=new eo({map:_.load(n.texture),side:Kt,transparent:!0,opacity:.8}),C=new Zt(M,d);c.add(C),C.position.x=t,C.rotation.x=-.5*Math.PI}const f=new vp(0,0,t,t,0,2*Math.PI,!1,0).getPoints(200),p=new Yt().setFromPoints(f);p.rotateX(Math.PI/2);const g=new Go({color:46079,transparent:!0,opacity:.3}),x=new _p(p,g);return Fn.add(x),{planet:l,planetObj:c,orbitLine:x}}function Kp(){return{sun:sn(57,Et.sun,0,null,!0),mercury:sn(1,Et.mercury,81.88,null,!1),venus:sn(2.48,Et.venus,92.13,null,!1),earth:sn(2.61,Et.earth,100.66,null,!1),mars:sn(1.39,Et.mars,116.56,null,!1),jupiter:sn(28.69,Et.jupiter,229.68,null,!1),saturn:sn(23.84,Et.saturn,362.05,{innerRadius:40,outerRadius:55,texture:Et.saturnRing},!1),uranus:sn(10.4,Et.uranus,658.02,null,!1),neptune:sn(10.09,Et.neptune,992.69,null,!1)}}function Zp(){dt.sun.planetObj.rotateY(.01*(1/160)),dt.mercury.planetObj.rotateY(.01*(1/.24)),dt.venus.planetObj.rotateY(.01*(1/.62)),dt.earth.planetObj.rotateY(.01*1),dt.mars.planetObj.rotateY(.01*(1/1.88)),dt.jupiter.planetObj.rotateY(.01*(1/11.86)),dt.saturn.planetObj.rotateY(.01*(1/29.46)),dt.uranus.planetObj.rotateY(.01*(1/84.01)),dt.neptune.planetObj.rotateY(.01*(1/164.79))}function Jp(){dt.sun.planet.rotateY(.001*(1/.2)),dt.mercury.planet.rotateY(.01*(1/.58)),dt.venus.planet.rotateY(.01*(1/1.16)),dt.earth.planet.rotateY(.01*1),dt.mars.planet.rotateY(.01*(1/1.03)),dt.jupiter.planet.rotateY(.01*(1/.41)),dt.saturn.planet.rotateY(.01*(1/.44)),dt.uranus.planet.rotateY(.01*(1/.72)),dt.neptune.planet.rotateY(.01*(1/.67))}function $p(){ds.value&&Zp(),Jp(),mi.render(Fn,Bn)}function Qp(){window.addEventListener("resize",function(){Bn.aspect=window.innerWidth/window.innerHeight,Bn.updateProjectionMatrix(),mi.setSize(window.innerWidth,window.innerHeight)})}function em(){mi.setAnimationLoop(function(){$p()})}const mi=Ap(),Fn=wp(),Bn=Rp(),Li=Dp(),dt=Kp();let ds={value:!0};Cp(Fn);Ip(Fn);Up(Fn);em();Qp();Fp();jp();Li.update()});export default tm();
