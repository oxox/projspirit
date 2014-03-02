/*! jQuery v2.0.1 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.1.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],f="2.0.1",p=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=f.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return p.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,f,p,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=at(),k=at(),N=at(),E=!1,S=function(){return 0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],H=L.pop,q=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){q.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,p,g,m,x,w;if((t?t.ownerDocument||t:b)!==f&&c(t),t=t||f,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){p=vt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;while(l--)p[l]=m+xt(p[l]);x=U.test(e)&&t.parentNode||t,w=p.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return St(e.replace(z,"$1"),t,r,i)}function st(e){return Q.test(e+"")}function at(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function ut(e){return e[v]=!0,e}function lt(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t,n){e=e.split("|");var r,o=e.length,s=n?null:t;while(o--)(r=i.attrHandle[e[o]])&&r!==t||(i.attrHandle[e[o]]=s)}function ft(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function pt(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function ht(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:undefined}function dt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function gt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function mt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function yt(e){return ut(function(t){return t=+t,ut(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b;return t!==f&&9===t.nodeType&&t.documentElement?(f=t,p=t.documentElement,h=!s(t),n.attributes=lt(function(e){return e.innerHTML="<a href='#'></a>",ct("type|href|height|width",pt,"#"===e.firstChild.getAttribute("href")),ct(R,ft,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),n.input=lt(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),ct("value",ht,n.attributes&&n.input),n.getElementsByTagName=lt(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=lt(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=lt(function(e){return p.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=st(t.querySelectorAll))&&(lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),lt(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=st(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&lt(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=st(p.contains)||p.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},n.sortDetached=lt(function(e){return 1&e.compareDocumentPosition(t.createElement("div"))}),S=p.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return dt(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?dt(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):f},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,f,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:ut,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=vt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){f=t;while(f=f[g])if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],p=l[0]===w&&l[2],f=h&&m.childNodes[h];while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if(1===f.nodeType&&++p&&f===t){c[e]=[w,h,p];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)p=l[1];else while(f=++h&&f&&f[g]||(p=h=0)||d.pop())if((a?f.nodeName.toLowerCase()===y:1===f.nodeType)&&++p&&(x&&((f[v]||(f[v]={}))[e]=[w,p]),f===t))break;return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ut(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ut(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?ut(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ut(function(e){return function(t){return ot(e,t).length>0}}),contains:ut(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ut(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:yt(function(){return[0]}),last:yt(function(e,t){return[t-1]}),eq:yt(function(e,t,n){return[0>n?n+t:n]}),even:yt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:yt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:yt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:yt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=gt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=mt(t);function vt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function xt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function bt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,f=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===f){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[f],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function wt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function Tt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function Ct(e,t,n,r,i,o){return r&&!r[v]&&(r=Ct(r)),i&&!i[v]&&(i=Ct(i,o)),ut(function(o,s,a,u){var l,c,f,p=[],h=[],d=s.length,g=o||Et(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:Tt(g,p,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=Tt(y,h),r(l,[],a,u),c=l.length;while(c--)(f=l[c])&&(y[h[c]]=!(m[h[c]]=f))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(f=y[c])&&l.push(m[c]=f);i(null,y=[],l,u)}c=y.length;while(c--)(f=y[c])&&(l=i?P.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else y=Tt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function kt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=bt(function(e){return e===t},a,!0),f=bt(function(e){return P.call(t,e)>-1},a,!0),p=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])p=[bt(wt(p),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return Ct(l>1&&wt(p),l>1&&xt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&kt(e.slice(l,r)),o>r&&kt(e=e.slice(r)),o>r&&xt(e))}p.push(n)}return wt(p)}function Nt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,p,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==f&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){p.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=H.call(p));y=Tt(y)}O.apply(p,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(p)}return T&&(w=N,u=C),b};return o?ut(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=vt(e)),n=t.length;while(n--)o=kt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Nt(i,r))}return o};function Et(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function St(e,t,r,o){var s,u,l,c,f,p=vt(e);if(!o&&1===p.length){if(u=p[0]=p[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((f=i.find[c])&&(o=f(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&xt(u),!e)return O.apply(r,o),r;break}}}return a(e,p)(o,t,!h,r,U.test(e)),r}i.pseudos.nth=i.pseudos.eq;function jt(){}jt.prototype=i.filters=i.pseudos,i.setFilters=new jt,n.sortStable=v.split("").sort(S).join("")===v,c(),[0,0].sort(S),n.detectDuplicates=E,x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(f[0],f[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!a||n&&!u||(r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,H,q=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){return t===undefined||t&&"string"==typeof t&&n===undefined?this.get(e,t):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,H=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||H.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return H.access(e,t,n)},_removeData:function(e,t){H.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!H.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));H.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:q.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=H.get(e,t),n&&(!r||x.isArray(n)?r=H.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()
},_queueHooks:function(e,t){var n=t+"queueHooks";return H.get(e,n)||H.access(e,n,{empty:x.Callbacks("once memory").add(function(){H.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=H.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,i="boolean"==typeof t;return x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,s=0,a=x(this),u=t,l=e.match(w)||[];while(o=l[s++])u=i?u:!a.hasClass(o),a[u?"addClass":"removeClass"](o)}else(n===r||"boolean"===n)&&(this.className&&H.set(this,"__className__",this.className),this.className=this.className||e===!1?"":H.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,f,p,h,d,g,m,y=H.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(p=x.event.special[d]||{},d=(o?p.delegateType:p.bindType)||d,p=x.event.special[d]||{},f=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,f):h.push(f),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,h,d,g,m=H.hasData(e)&&H.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){f=x.event.special[h]||{},h=(r?f.delegateType:f.bindType)||h,p=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,H.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,f,p,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),p=x.event.special[d]||{},i||!p.trigger||p.trigger.apply(r,n)!==!1)){if(!i&&!p.noBubble&&!x.isWindow(r)){for(l=p.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:p.bindType||d,f=(H.get(a,"events")||{})[t.type]&&H.get(a,"handle"),f&&f.apply(a,n),f=c&&a[c],f&&x.acceptData(a)&&f.apply&&f.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||p._default&&p._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(H.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ft(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=p.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,f=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=f.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),pt),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!H.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,f=e.length,p=t.createDocumentFragment(),h=[];for(;f>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||p.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.firstChild;x.merge(h,o.childNodes),o=p.firstChild,o.textContent=""}else h.push(t.createTextNode(i));p.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(p.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return p},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[H.expando],o&&(t=H.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);H.cache[o]&&delete H.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function ft(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function pt(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)H.set(e[r],"globalEval",!t||H.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(H.hasData(e)&&(o=H.access(e),s=H.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function Ht(t){return e.getComputedStyle(t,null)}function qt(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=H.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=H.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&H.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=Ht(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:Lt(this))?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||Ht(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ht(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&Ht(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)
}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(f,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&p.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=fn(c,T,o)),b=pn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(f,[m,C,T]):h.rejectWith(f,[T,C,y]),T.statusCode(g),g=undefined,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(f,[T,C]),u&&(p.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function fn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function pn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(n.unit=o,n.start=+s||+r||0,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},f=e.style,p=e.nodeType&&Lt(e),h=H.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",l.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(p?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;p=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(p=h.hidden):h=H.access(e,"fxshow",{}),o&&(h.hidden=!p),p?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;H.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(p?h[r]:0,r,l),r in h||(h[r]=s.start,p&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(Hn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);s.finish=function(){t.stop(!0)},(i||H.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=H.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=H.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function Hn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:Hn("show"),slideUp:Hn("hide"),slideToggle:Hn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=qn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),f=x(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=qn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function qn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

/*!
  A jquery plugin mimicking the fan-menu EX of the Path App.
  @name jquery.fanmenu.js
  @author levinhuang (lv)
  @version 1.0.1
  @date 04/12/2013
  @license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
;(function($) {

	var model = function($d,opts) {
		this.$d = $d;
		this.opts = opts;
		this.init();
	};

	model.prototype = {
		//event binding entry
		_initEvts:function(){
			var me = this;
			
			this.$toggle
				.off(this.opts.eventName+'.fanmenu')
				.on(this.opts.eventName+'.fanmenu',function(e){
			
					if(me.$d.hasClass(me.opts.clActive)){
						me.toggleFan(0);
					}else{
						me.toggleFan(1);
					}
					return false;
				});

			if (this.opts.hideOnClick) {
				$(document).off('click.fanmenu')
					.on('click.fanmenu',function(e){
						var $target = $(e.target);

						if ($target.is(me.$d)) {
							return;
						};

						if ( $target.hasClass(me.opts.hideOnClickExcept) || $target.parents('.'+me.opts.hideOnClickExcept).length>0 ) {
							return;
						};

						var	$tempWrap = $target.parents('.'+me.opts.clActive);
						if ($tempWrap.length>0) {
							return;
						};

						me.close();

					});
			};

		},
		init:function () {
		
			this.angle = 0;
			this.delayTime=0;
			this.eleAngle=[];
			this.xPos=[];
			this.yPos=[];
			
		
			//get elements
			this.$items = this.$d.find(this.opts.cssMenuItem);
			this.$toggle=this.$d.find(this.opts.cssMenuToggle);
			this.cntItem = this.$items.length;
			
			this.angle = this.opts.angleDisplay/(this.cntItem-1);
			this.delayTime = 1/(this.cntItem-1);
			
			this.initFanMenu();

			this._initEvts();
		},
		initFanMenu:function(){
			
			var me = this;
			
			this.$items.each(function(i,o){
				me.eleAngle[i] = (me.opts.initAngle + me.angle*i)*Math.PI/180;
				me.xPos[i] = (me.opts.radius * Math.sin(me.eleAngle[i]));
				me.yPos[i] = (me.opts.radius * Math.cos(me.eleAngle[i]));
				 
				var j = i;
				if (i<(me.cntItem/2)) {
					j = me.cntItem-1-i;
				};
				var rotateVal = 90-(me.opts.initAngle + me.angle*j);
				//var rotateVal = 90-me.eleAngle[i]*180/Math.PI;

				$(o).css({
					'-webkit-transform': 'rotate('+rotateVal+'deg)',
					   '-moz-transform': 'rotate('+rotateVal+'deg)',
						'-ms-transform': 'rotate('+rotateVal+'deg)',
						 '-o-transform': 'rotate('+rotateVal+'deg)',
							'transform': 'rotate('+rotateVal+'deg)'
				});
			});
			
		},
		toggleFan:function(flag){
			var me = this;
			this.$items.each(function(i,ele){
				$(ele).css({
				'left' : (flag==0)?0:me.xPos[i],
				'top' : (flag==0)?0:-me.yPos[i],
				});
			});
			
			if(flag==0){//close
				this.$d.removeClass(this.opts.clActive).addClass(this.opts.clDeactive);
				this.$toggle.removeClass(me.opts.clToggleEffect);
			}else{
				this.$d.removeClass(this.opts.clDeactive).addClass(this.opts.clActive);
				this.$toggle.addClass(me.opts.clToggleEffect);
			}
			
		},
		close:function(){
			this.toggleFan(0);
		},
		open:function(){
			this.toggleFan(1);
		},
		update:function(opts,reInit){
			this.opts = $.extend(this.opts,opts||{});
			if(reInit){
				this.init();
			}
		}//updateOpts
	};

	$.fn.fanmenu = function(opts) {
		// Set the options.
		var optsType = typeof(opts),
			opts1 = optsType!=='string'?$.extend(true,{}, $.fn.fanmenu.defaults, opts||{}):$.fn.fanmenu.defaults,
			args = arguments;
		
		// Go through the matched elements and return the jQuery object.
		return this.each(function () {
			var $me = $(this),
				instance = $me.data("fanmenu");
			if(instance) {

				if(instance[opts]){
					
					instance[opts].apply(instance,Array.prototype.slice.call(args, 1));

				}else if (typeof(opts) === 'object' || !opts){
					
					instance.update.apply(instance,args);

				}else{
					console&&console.log('Method '+opts+' does not exist in jQuery.fanmenu');
				}

			}else {
				$me.data("fanmenu",new model($me, opts1));
			}
		});
	};

	$.fn.fanmenu.defaults = {
		eventName:'click',				//the event that trigger the menu to show
		hideOnClick:false,				//hide the menu when clicking the other places on the document
		hideOnClickExcept:'fm_antihide',//donot hide the menu when clicking on these elements with className 'fm_antihide'
		initAngle: 0,					//initial angle for the fan
		angleDisplay: 90,				//display angle of the fan
		radius:200,						//the radius of the fan
		clActive:'fm_active',
		clDeactive:'fm_off',
		clToggleEffect:'fm_rotate',
		cssMenuToggle:'.fm_btntoggle',
		cssMenuItem:'.fm_list>*'
	};

})(jQuery);
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(a){a(function(){"use strict",a.support.transition=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},c;for(c in b)if(a.style[c]!==undefined)return b[c]}();return a&&{end:a}}()})}(window.jQuery),!function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function f(){e.trigger("closed").remove()}var c=a(this),d=c.attr("data-target"),e;d||(d=c.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),e=a(d),b&&b.preventDefault(),e.length||(e=c.hasClass("alert")?c:c.parent()),e.trigger(b=a.Event("close"));if(b.isDefaultPrevented())return;e.removeClass("in"),a.support.transition&&e.hasClass("fade")?e.on(a.support.transition.end,f):f()},a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("alert");e||d.data("alert",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.alert.Constructor=c,a(function(){a("body").on("click.alert.data-api",b,c.prototype.close)})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.button.defaults,c)};b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.data(),e=c.is("input")?"val":"html";a+="Text",d.resetText||c.data("resetText",c[e]()),c[e](d[a]||this.options[a]),setTimeout(function(){a=="loadingText"?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.parent('[data-toggle="buttons-radio"]');a&&a.find(".active").removeClass("active"),this.$element.toggleClass("active")},a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("button"),f=typeof c=="object"&&c;e||d.data("button",e=new b(this,f)),c=="toggle"?e.toggle():c&&e.setState(c)})},a.fn.button.defaults={loadingText:"loading..."},a.fn.button.Constructor=b,a(function(){a("body").on("click.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=c,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.prototype={cycle:function(b){return b||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},to:function(b){var c=this.$element.find(".active"),d=c.parent().children(),e=d.index(c),f=this;if(b>d.length-1||b<0)return;return this.sliding?this.$element.one("slid",function(){f.to(b)}):e==b?this.pause().cycle():this.slide(b>e?"next":"prev",a(d[b]))},pause:function(a){return a||(this.paused=!0),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(b,c){var d=this.$element.find(".active"),e=c||d[b](),f=this.interval,g=b=="next"?"left":"right",h=b=="next"?"first":"last",i=this,j=a.Event("slide");this.sliding=!0,f&&this.pause(),e=e.length?e:this.$element.find(".item")[h]();if(e.hasClass("active"))return;if(a.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(j);if(j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),this.$element.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)})}else{this.$element.trigger(j);if(j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}},a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("carousel"),f=a.extend({},a.fn.carousel.defaults,typeof c=="object"&&c);e||d.data("carousel",e=new b(this,f)),typeof c=="number"?e.to(c):typeof c=="string"||(c=f.slide)?e[c]():f.interval&&e.cycle()})},a.fn.carousel.defaults={interval:5e3,pause:"hover"},a.fn.carousel.Constructor=b,a(function(){a("body").on("click.carousel.data-api","[data-slide]",function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=!e.data("modal")&&a.extend({},e.data(),c.data());e.carousel(f),b.preventDefault()})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.collapse.defaults,c),this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.prototype={constructor:b,dimension:function(){var a=this.$element.hasClass("width");return a?"width":"height"},show:function(){var b,c,d,e;if(this.transitioning)return;b=this.dimension(),c=a.camelCase(["scroll",b].join("-")),d=this.$parent&&this.$parent.find("> .accordion-group > .in");if(d&&d.length){e=d.data("collapse");if(e&&e.transitioning)return;d.collapse("hide"),e||d.data("collapse",null)}this.$element[b](0),this.transition("addClass",a.Event("show"),"shown"),this.$element[b](this.$element[0][c])},hide:function(){var b;if(this.transitioning)return;b=this.dimension(),this.reset(this.$element[b]()),this.transition("removeClass",a.Event("hide"),"hidden"),this.$element[b](0)},reset:function(a){var b=this.dimension();return this.$element.removeClass("collapse")[b](a||"auto")[0].offsetWidth,this.$element[a!==null?"addClass":"removeClass"]("collapse"),this},transition:function(b,c,d){var e=this,f=function(){c.type=="show"&&e.reset(),e.transitioning=0,e.$element.trigger(d)};this.$element.trigger(c);if(c.isDefaultPrevented())return;this.transitioning=1,this.$element[b]("in"),a.support.transition&&this.$element.hasClass("collapse")?this.$element.one(a.support.transition.end,f):f()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("collapse"),f=typeof c=="object"&&c;e||d.data("collapse",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.collapse.defaults={toggle:!0},a.fn.collapse.Constructor=b,a(function(){a("body").on("click.collapse.data-api","[data-toggle=collapse]",function(b){var c=a(this),d,e=c.attr("data-target")||b.preventDefault()||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""),f=a(e).data("collapse")?"toggle":c.data();a(e).collapse(f)})})}(window.jQuery),!function(a){function d(){a(b).parent().removeClass("open")}"use strict";var b='[data-toggle="dropdown"]',c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),e,f,g;if(c.is(".disabled, :disabled"))return;return f=c.attr("data-target"),f||(f=c.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,"")),e=a(f),e.length||(e=c.parent()),g=e.hasClass("open"),d(),g||e.toggleClass("open"),!1}},a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a(function(){a("html").on("click.dropdown.data-api",d),a("body").on("click.dropdown",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle)})}(window.jQuery),!function(a){function c(){var b=this,c=setTimeout(function(){b.$element.off(a.support.transition.end),d.call(b)},500);this.$element.one(a.support.transition.end,function(){clearTimeout(c),d.call(b)})}function d(a){this.$element.hide().trigger("hidden"),e.call(this)}function e(b){var c=this,d=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var e=a.support.transition&&d;this.$backdrop=a('<div class="modal-backdrop '+d+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(a.proxy(this.hide,this)),e&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),e?this.$backdrop.one(a.support.transition.end,b):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,a.proxy(f,this)):f.call(this)):b&&b()}function f(){this.$backdrop.remove(),this.$backdrop=null}function g(){var b=this;this.isShown&&this.options.keyboard?a(document).on("keyup.dismiss.modal",function(a){a.which==27&&b.hide()}):this.isShown||a(document).off("keyup.dismiss.modal")}"use strict";var b=function(b,c){this.options=c,this.$element=a(b).delegate('[data-dismiss="modal"]',"click.dismiss.modal",a.proxy(this.hide,this))};b.prototype={constructor:b,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var b=this,c=a.Event("show");this.$element.trigger(c);if(this.isShown||c.isDefaultPrevented())return;a("body").addClass("modal-open"),this.isShown=!0,g.call(this),e.call(this,function(){var c=a.support.transition&&b.$element.hasClass("fade");b.$element.parent().length||b.$element.appendTo(document.body),b.$element.show(),c&&b.$element[0].offsetWidth,b.$element.addClass("in"),c?b.$element.one(a.support.transition.end,function(){b.$element.trigger("shown")}):b.$element.trigger("shown")})},hide:function(b){b&&b.preventDefault();var e=this;b=a.Event("hide"),this.$element.trigger(b);if(!this.isShown||b.isDefaultPrevented())return;this.isShown=!1,a("body").removeClass("modal-open"),g.call(this),this.$element.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?c.call(this):d.call(this)}},a.fn.modal=function(c){return this.each(function(){var d=a(this),e=d.data("modal"),f=a.extend({},a.fn.modal.defaults,d.data(),typeof c=="object"&&c);e||d.data("modal",e=new b(this,f)),typeof c=="string"?e[c]():f.show&&e.show()})},a.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},a.fn.modal.Constructor=b,a(function(){a("body").on("click.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d,e=a(c.attr("data-target")||(d=c.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({},e.data(),c.data());b.preventDefault(),e.modal(f)})})}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("tooltip",a,b)};b.prototype={constructor:b,init:function(b,c,d){var e,f;this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.enabled=!0,this.options.trigger!="manual"&&(e=this.options.trigger=="hover"?"mouseenter":"focus",f=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(e,this.options.selector,a.proxy(this.enter,this)),this.$element.on(f,this.options.selector,a.proxy(this.leave,this))),this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(b){return b=a.extend({},a.fn[this.type].defaults,b,this.$element.data()),b.delay&&typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),b},enter:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.show)return c.show();clearTimeout(this.timeout),c.hoverState="in",this.timeout=setTimeout(function(){c.hoverState=="in"&&c.show()},c.options.delay.show)},leave:function(b){var c=a(b.currentTarget)[this.type](this._options).data(this.type);if(!c.options.delay||!c.options.delay.hide)return c.hide();clearTimeout(this.timeout),c.hoverState="out",this.timeout=setTimeout(function(){c.hoverState=="out"&&c.hide()},c.options.delay.hide)},show:function(){var a,b,c,d,e,f,g;if(this.hasContent()&&this.enabled){a=this.tip(),this.setContent(),this.options.animation&&a.addClass("fade"),f=typeof this.options.placement=="function"?this.options.placement.call(this,a[0],this.$element[0]):this.options.placement,b=/in/.test(f),a.remove().css({top:0,left:0,display:"block"}).appendTo(b?this.$element:document.body),c=this.getPosition(b),d=a[0].offsetWidth,e=a[0].offsetHeight;switch(b?f.split(" ")[1]:f){case"bottom":g={top:c.top+c.height,left:c.left+c.width/2-d/2};break;case"top":g={top:c.top-e,left:c.left+c.width/2-d/2};break;case"left":g={top:c.top+c.height/2-e/2,left:c.left-d};break;case"right":g={top:c.top+c.height/2-e/2,left:c.left+c.width}}a.css(g).addClass(f).addClass("in")}},isHTML:function(a){return typeof a!="string"||a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3||/^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(a)},setContent:function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.isHTML(b)?"html":"text"](b),a.removeClass("fade in top bottom left right")},hide:function(){function d(){var b=setTimeout(function(){c.off(a.support.transition.end).remove()},500);c.one(a.support.transition.end,function(){clearTimeout(b),c.remove()})}var b=this,c=this.tip();c.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d():c.remove()},fixTitle:function(){var a=this.$element;(a.attr("title")||typeof a.attr("data-original-title")!="string")&&a.attr("data-original-title",a.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(b){return a.extend({},b?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||(typeof c.title=="function"?c.title.call(b[0]):c.title),a},tip:function(){return this.$tip=this.$tip||a(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()}},a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("tooltip"),f=typeof c=="object"&&c;e||d.data("tooltip",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0}}(window.jQuery),!function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype,{constructor:b,setContent:function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.isHTML(b)?"html":"text"](b),a.find(".popover-content > *")[this.isHTML(c)?"html":"text"](c),a.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var a,b=this.$element,c=this.options;return a=b.attr("data-content")||(typeof c.content=="function"?c.content.call(b[0]):c.content),a},tip:function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip}}),a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("popover"),f=typeof c=="object"&&c;e||d.data("popover",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.defaults=a.extend({},a.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(a){function b(b,c){var d=a.proxy(this.process,this),e=a(b).is("body")?a(window):a(b),f;this.options=a.extend({},a.fn.scrollspy.defaults,c),this.$scrollElement=e.on("scroll.scroll.data-api",d),this.selector=(this.options.target||(f=a(b).attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=a("body"),this.refresh(),this.process()}"use strict",b.prototype={constructor:b,refresh:function(){var b=this,c;this.offsets=a([]),this.targets=a([]),c=this.$body.find(this.selector).map(function(){var b=a(this),c=b.data("target")||b.attr("href"),d=/^#\w/.test(c)&&a(c);return d&&c.length&&[[d.position().top,c]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},process:function(){var a=this.$scrollElement.scrollTop()+this.options.offset,b=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,c=b-this.$scrollElement.height(),d=this.offsets,e=this.targets,f=this.activeTarget,g;if(a>=c)return f!=(g=e.last()[0])&&this.activate(g);for(g=d.length;g--;)f!=e[g]&&a>=d[g]&&(!d[g+1]||a<=d[g+1])&&this.activate(e[g])},activate:function(b){var c,d;this.activeTarget=b,a(this.selector).parent(".active").removeClass("active"),d=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',c=a(d).parent("li").addClass("active"),c.parent(".dropdown-menu")&&(c=c.closest("li.dropdown").addClass("active")),c.trigger("activate")}},a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("scrollspy"),f=typeof c=="object"&&c;e||d.data("scrollspy",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.defaults={offset:10},a(function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),!function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype={constructor:b,show:function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target"),e,f,g;d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,""));if(b.parent("li").hasClass("active"))return;e=c.find(".active a").last()[0],g=a.Event("show",{relatedTarget:e}),b.trigger(g);if(g.isDefaultPrevented())return;f=a(d),this.activate(b.parent("li"),c),this.activate(f,f.parent(),function(){b.trigger({type:"shown",relatedTarget:e})})},activate:function(b,c,d){function g(){e.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),f?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var e=c.find("> .active"),f=d&&a.support.transition&&e.hasClass("fade");f?e.one(a.support.transition.end,g):g(),e.removeClass("in")}},a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("tab");e||d.data("tab",e=new b(this)),typeof c=="string"&&e[c]()})},a.fn.tab.Constructor=b,a(function(){a("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})})}(window.jQuery),!function(a){"use strict";var b=function(b,c){this.$element=a(b),this.options=a.extend({},a.fn.typeahead.defaults,c),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=a(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};b.prototype={constructor:b,select:function(){var a=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(a)).change(),this.hide()},updater:function(a){return a},show:function(){var b=a.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:b.top+b.height,left:b.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(b){var c=this,d,e;return this.query=this.$element.val(),this.query?(d=a.grep(this.source,function(a){return c.matcher(a)}),d=this.sorter(d),d.length?this.render(d.slice(0,this.options.items)).show():this.shown?this.hide():this):this.shown?this.hide():this},matcher:function(a){return~a.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(a){var b=[],c=[],d=[],e;while(e=a.shift())e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?c.push(e):d.push(e):b.push(e);return b.concat(c,d)},highlighter:function(a){var b=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return a.replace(new RegExp("("+b+")","ig"),function(a,b){return"<strong>"+b+"</strong>"})},render:function(b){var c=this;return b=a(b).map(function(b,d){return b=a(c.options.item).attr("data-value",d),b.find("a").html(c.highlighter(d)),b[0]}),b.first().addClass("active"),this.$menu.html(b),this},next:function(b){var c=this.$menu.find(".active").removeClass("active"),d=c.next();d.length||(d=a(this.$menu.find("li")[0])),d.addClass("active")},prev:function(a){var b=this.$menu.find(".active").removeClass("active"),c=b.prev();c.length||(c=this.$menu.find("li").last()),c.addClass("active")},listen:function(){this.$element.on("blur",a.proxy(this.blur,this)).on("keypress",a.proxy(this.keypress,this)).on("keyup",a.proxy(this.keyup,this)),(a.browser.webkit||a.browser.msie)&&this.$element.on("keydown",a.proxy(this.keypress,this)),this.$menu.on("click",a.proxy(this.click,this)).on("mouseenter","li",a.proxy(this.mouseenter,this))},keyup:function(a){switch(a.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}a.stopPropagation(),a.preventDefault()},keypress:function(a){if(!this.shown)return;switch(a.keyCode){case 9:case 13:case 27:a.preventDefault();break;case 38:if(a.type!="keydown")break;a.preventDefault(),this.prev();break;case 40:if(a.type!="keydown")break;a.preventDefault(),this.next()}a.stopPropagation()},blur:function(a){var b=this;setTimeout(function(){b.hide()},150)},click:function(a){a.stopPropagation(),a.preventDefault(),this.select()},mouseenter:function(b){this.$menu.find(".active").removeClass("active"),a(b.currentTarget).addClass("active")}},a.fn.typeahead=function(c){return this.each(function(){var d=a(this),e=d.data("typeahead"),f=typeof c=="object"&&c;e||d.data("typeahead",e=new b(this,f)),typeof c=="string"&&e[c]()})},a.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>'},a.fn.typeahead.Constructor=b,a(function(){a("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(b){var c=a(this);if(c.data("typeahead"))return;b.preventDefault(),c.typeahead(c.data())})})}(window.jQuery);
/**
 * Version: 1.0 Alpha-1 
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}};
Date.getMonthNumberFromName=function(name){var n=Date.CultureInfo.monthNames,m=Date.CultureInfo.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.getDayNumberFromName=function(name){var n=Date.CultureInfo.dayNames,m=Date.CultureInfo.abbreviatedDayNames,o=Date.CultureInfo.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.isLeapYear=function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));};Date.getDaysInMonth=function(year,month){return[31,(Date.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};Date.getTimezoneOffset=function(s,dst){return(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];};Date.getTimezoneAbbreviation=function(offset,dst){var n=(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard,p;for(p in n){if(n[p]===offset){return p;}}
return null;};Date.prototype.clone=function(){return new Date(this.getTime());};Date.prototype.compareTo=function(date){if(isNaN(this)){throw new Error(this);}
if(date instanceof Date&&!isNaN(date)){return(this>date)?1:(this<date)?-1:0;}else{throw new TypeError(date);}};Date.prototype.equals=function(date){return(this.compareTo(date)===0);};Date.prototype.between=function(start,end){var t=this.getTime();return t>=start.getTime()&&t<=end.getTime();};Date.prototype.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};Date.prototype.addSeconds=function(value){return this.addMilliseconds(value*1000);};Date.prototype.addMinutes=function(value){return this.addMilliseconds(value*60000);};Date.prototype.addHours=function(value){return this.addMilliseconds(value*3600000);};Date.prototype.addDays=function(value){return this.addMilliseconds(value*86400000);};Date.prototype.addWeeks=function(value){return this.addMilliseconds(value*604800000);};Date.prototype.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,this.getDaysInMonth()));return this;};Date.prototype.addYears=function(value){return this.addMonths(value*12);};Date.prototype.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.millisecond||x.milliseconds){this.addMilliseconds(x.millisecond||x.milliseconds);}
if(x.second||x.seconds){this.addSeconds(x.second||x.seconds);}
if(x.minute||x.minutes){this.addMinutes(x.minute||x.minutes);}
if(x.hour||x.hours){this.addHours(x.hour||x.hours);}
if(x.month||x.months){this.addMonths(x.month||x.months);}
if(x.year||x.years){this.addYears(x.year||x.years);}
if(x.day||x.days){this.addDays(x.day||x.days);}
return this;};Date._validate=function(value,min,max,name){if(typeof value!="number"){throw new TypeError(value+" is not a Number.");}else if(value<min||value>max){throw new RangeError(value+" is not a valid value for "+name+".");}
return true;};Date.validateMillisecond=function(n){return Date._validate(n,0,999,"milliseconds");};Date.validateSecond=function(n){return Date._validate(n,0,59,"seconds");};Date.validateMinute=function(n){return Date._validate(n,0,59,"minutes");};Date.validateHour=function(n){return Date._validate(n,0,23,"hours");};Date.validateDay=function(n,year,month){return Date._validate(n,1,Date.getDaysInMonth(year,month),"days");};Date.validateMonth=function(n){return Date._validate(n,0,11,"months");};Date.validateYear=function(n){return Date._validate(n,1,9999,"seconds");};Date.prototype.set=function(config){var x=config;if(!x.millisecond&&x.millisecond!==0){x.millisecond=-1;}
if(!x.second&&x.second!==0){x.second=-1;}
if(!x.minute&&x.minute!==0){x.minute=-1;}
if(!x.hour&&x.hour!==0){x.hour=-1;}
if(!x.day&&x.day!==0){x.day=-1;}
if(!x.month&&x.month!==0){x.month=-1;}
if(!x.year&&x.year!==0){x.year=-1;}
if(x.millisecond!=-1&&Date.validateMillisecond(x.millisecond)){this.addMilliseconds(x.millisecond-this.getMilliseconds());}
if(x.second!=-1&&Date.validateSecond(x.second)){this.addSeconds(x.second-this.getSeconds());}
if(x.minute!=-1&&Date.validateMinute(x.minute)){this.addMinutes(x.minute-this.getMinutes());}
if(x.hour!=-1&&Date.validateHour(x.hour)){this.addHours(x.hour-this.getHours());}
if(x.month!==-1&&Date.validateMonth(x.month)){this.addMonths(x.month-this.getMonth());}
if(x.year!=-1&&Date.validateYear(x.year)){this.addYears(x.year-this.getFullYear());}
if(x.day!=-1&&Date.validateDay(x.day,this.getFullYear(),this.getMonth())){this.addDays(x.day-this.getDate());}
if(x.timezone){this.setTimezone(x.timezone);}
if(x.timezoneOffset){this.setTimezoneOffset(x.timezoneOffset);}
return this;};Date.prototype.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};Date.prototype.isLeapYear=function(){var y=this.getFullYear();return(((y%4===0)&&(y%100!==0))||(y%400===0));};Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun());};Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth());};Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1});};Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()});};Date.prototype.moveToDayOfWeek=function(day,orient){var diff=(day-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};Date.prototype.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/86400000);};Date.prototype.getWeekOfYear=function(firstDayOfWeek){var y=this.getFullYear(),m=this.getMonth(),d=this.getDate();var dow=firstDayOfWeek||Date.CultureInfo.firstDayOfWeek;var offset=7+1-new Date(y,0,1).getDay();if(offset==8){offset=1;}
var daynum=((Date.UTC(y,m,d,0,0,0)-Date.UTC(y,0,1,0,0,0))/86400000)+1;var w=Math.floor((daynum-offset+7)/7);if(w===dow){y--;var prevOffset=7+1-new Date(y,0,1).getDay();if(prevOffset==2||prevOffset==8){w=53;}else{w=52;}}
return w;};Date.prototype.isDST=function(){console.log('isDST');return this.toString().match(/(E|C|M|P)(S|D)T/)[2]=="D";};Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST());};Date.prototype.setTimezoneOffset=function(s){var here=this.getTimezoneOffset(),there=Number(s)*-6/10;this.addMinutes(there-here);return this;};Date.prototype.setTimezone=function(s){return this.setTimezoneOffset(Date.getTimezoneOffset(s));};Date.prototype.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r[0]+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};Date.prototype.getDayName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()];};Date.prototype.getMonthName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()];};Date.prototype._toString=Date.prototype.toString;Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?"0"+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case"hh":return p(self.getHours()<13?self.getHours():(self.getHours()-12));case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);case"HH":return p(self.getHours());case"H":return self.getHours();case"mm":return p(self.getMinutes());case"m":return self.getMinutes();case"ss":return p(self.getSeconds());case"s":return self.getSeconds();case"yyyy":return self.getFullYear();case"yy":return self.getFullYear().toString().substring(2,4);case"dddd":return self.getDayName();case"ddd":return self.getDayName(true);case"dd":return p(self.getDate());case"d":return self.getDate().toString();case"MMMM":return self.getMonthName();case"MMM":return self.getMonthName(true);case"MM":return p((self.getMonth()+1));case"M":return self.getMonth()+1;case"t":return self.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return self.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return"";}}):this._toString();};
Date.now=function(){return new Date();};Date.today=function(){return Date.now().clearTime();};Date.prototype._orient=+1;Date.prototype.next=function(){this._orient=+1;return this;};Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){this._orient=-1;return this;};Date.prototype._is=false;Date.prototype.is=function(){this._is=true;return this;};Number.prototype._dateElement="day";Number.prototype.fromNow=function(){var c={};c[this._dateElement]=this;return Date.now().add(c);};Number.prototype.ago=function(){var c={};c[this._dateElement]=this*-1;return Date.now().add(c);};(function(){var $D=Date.prototype,$N=Number.prototype;var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
return this.moveToDayOfWeek(n,this._orient);};};for(var i=0;i<dx.length;i++){$D[dx[i]]=$D[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};for(var j=0;j<mx.length;j++){$D[mx[j]]=$D[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$D[de]=$D[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}}());Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);};Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);};Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);};Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);};Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};Date.Grammar={};Date.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=((s.length==3)?Date.getMonthNumberFromName(s):(Number(s)-1));};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<Date.CultureInfo.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];var now=new Date();this.year=now.getFullYear();this.month=now.getMonth();this.day=1;this.hour=0;this.minute=0;this.second=0;for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
this.hour=(this.meridian=="p"&&this.hour<13)?this.hour+12:this.hour;if(this.day>Date.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
if(this.now){return new Date();}
var today=Date.today();var method=null;var expression=!!(this.days!=null||this.orient||this.operator);if(expression){var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(this.weekday){this.unit="day";gap=(Date.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
if(this.unit=="week"){this.unit="day";this.value=this.value*7;}
this[this.unit+"s"]=this.value*orient;}
return today.add(this);}else{if(this.meridian&&this.hour){this.hour=(this.hour<13&&this.meridian=="p")?this.hour+12:this.hour;}
if(this.weekday&&!this.day){this.day=(today.addDays((Date.getDayNumberFromName(this.weekday)-today.getDay()))).getDate();}
if(this.month&&!this.day){this.day=1;}
return today.set(this);}}};var _=Date.Parsing.Operators,g=Date.Grammar,t=Date.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=Date.CultureInfo.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken(Date.CultureInfo.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.mm,g.ss],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[Date.CultureInfo.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw Date.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};}());Date._parse=Date.parse;Date.parse=function(s){var r=null;if(!s){return null;}
try{r=Date.Grammar.start.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};Date.getParseFunction=function(fx){var fn=Date.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};Date.parseExact=function(s,fx){return Date.getParseFunction(fx)(s);};

/*!
 * mustache.js - Logic-less {{mustache}} templates with JavaScript
 * http://github.com/janl/mustache.js
 */

/*global define: false*/

(function (root, factory) {
  if (typeof exports === "object" && exports) {
    factory(exports); // CommonJS
  } else {
    var mustache = {};
    factory(mustache);
    if (typeof define === "function" && define.amd) {
      define(mustache); // AMD
    } else {
      root.Mustache = mustache; // <script>
    }
  }
}(this, function (mustache) {

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var nonSpaceRe = /\S/;
  var eqRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var RegExp_test = RegExp.prototype.test;
  function testRegExp(re, string) {
    return RegExp_test.call(re, string);
  }

  function isWhitespace(string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var Object_toString = Object.prototype.toString;
  var isArray = Array.isArray || function (obj) {
    return Object_toString.call(obj) === '[object Array]';
  };

  function escapeRegExp(string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }

  var entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function Scanner(string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function () {
    return this.tail === "";
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function (re) {
    var match = this.tail.match(re);

    if (match && match.index === 0) {
      this.tail = this.tail.substring(match[0].length);
      this.pos += match[0].length;
      return match[0];
    }

    return "";
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function (re) {
    var match, pos = this.tail.search(re);

    switch (pos) {
    case -1:
      match = this.tail;
      this.pos += this.tail.length;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, pos);
      this.tail = this.tail.substring(pos);
      this.pos += pos;
    }

    return match;
  };

  function Context(view, parent) {
    this.view = view || {};
    this.parent = parent;
    this._cache = {};
  }

  Context.make = function (view) {
    return (view instanceof Context) ? view : new Context(view);
  };

  Context.prototype.push = function (view) {
    return new Context(view, this);
  };

  Context.prototype.lookup = function (name) {
    var value = this._cache[name];

    if (!value) {
      if (name == '.') {
        value = this.view;
      } else {
        var context = this;

        while (context) {
          if (name.indexOf('.') > 0) {
            value = context.view;
            var names = name.split('.'), i = 0;
            while (value && i < names.length) {
              value = value[names[i++]];
            }
          } else {
            value = context.view[name];
          }

          if (value != null) break;

          context = context.parent;
        }
      }

      this._cache[name] = value;
    }

    if (typeof value === 'function') value = value.call(this.view);

    return value;
  };

  function Writer() {
    this.clearCache();
  }

  Writer.prototype.clearCache = function () {
    this._cache = {};
    this._partialCache = {};
  };

  Writer.prototype.compile = function (template, tags) {
    var fn = this._cache[template];

    if (!fn) {
      var tokens = mustache.parse(template, tags);
      fn = this._cache[template] = this.compileTokens(tokens, template);
    }

    return fn;
  };

  Writer.prototype.compilePartial = function (name, template, tags) {
    var fn = this.compile(template, tags);
    this._partialCache[name] = fn;
    return fn;
  };

  Writer.prototype.getPartial = function (name) {
    if (!(name in this._partialCache) && this._loadPartial) {
      this.compilePartial(name, this._loadPartial(name));
    }

    return this._partialCache[name];
  };

  Writer.prototype.compileTokens = function (tokens, template) {
    var self = this;
    return function (view, partials) {
      if (partials) {
        if (typeof partials === 'function') {
          self._loadPartial = partials;
        } else {
          for (var name in partials) {
            self.compilePartial(name, partials[name]);
          }
        }
      }

      return renderTokens(tokens, self, Context.make(view), template);
    };
  };

  Writer.prototype.render = function (template, view, partials) {
    return this.compile(template)(view, partials);
  };

  /**
   * Low-level function that renders the given `tokens` using the given `writer`
   * and `context`. The `template` string is only needed for templates that use
   * higher-order sections to extract the portion of the original template that
   * was contained in that section.
   */
  function renderTokens(tokens, writer, context, template) {
    var buffer = '';

    var token, tokenValue, value;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      tokenValue = token[1];

      switch (token[0]) {
      case '#':
        value = context.lookup(tokenValue);

        if (typeof value === 'object') {
          if (isArray(value)) {
            for (var j = 0, jlen = value.length; j < jlen; ++j) {
              buffer += renderTokens(token[4], writer, context.push(value[j]), template);
            }
          } else if (value) {
            buffer += renderTokens(token[4], writer, context.push(value), template);
          }
        } else if (typeof value === 'function') {
          var text = template == null ? null : template.slice(token[3], token[5]);
          value = value.call(context.view, text, function (template) {
            return writer.render(template, context);
          });
          if (value != null) buffer += value;
        } else if (value) {
          buffer += renderTokens(token[4], writer, context, template);
        }

        break;
      case '^':
        value = context.lookup(tokenValue);

        // Use JavaScript's definition of falsy. Include empty arrays.
        // See https://github.com/janl/mustache.js/issues/186
        if (!value || (isArray(value) && value.length === 0)) {
          buffer += renderTokens(token[4], writer, context, template);
        }

        break;
      case '>':
        value = writer.getPartial(tokenValue);
        if (typeof value === 'function') buffer += value(context);
        break;
      case '&':
        value = context.lookup(tokenValue);
        if (value != null) buffer += value;
        break;
      case 'name':
        value = context.lookup(tokenValue);
        if (value != null) buffer += mustache.escape(value);
        break;
      case 'text':
        buffer += tokenValue;
        break;
      }
    }

    return buffer;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens(tokens) {
    var tree = [];
    var collector = tree;
    var sections = [];

    var token;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      switch (token[0]) {
      case '#':
      case '^':
        sections.push(token);
        collector.push(token);
        collector = token[4] = [];
        break;
      case '/':
        var section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : tree;
        break;
      default:
        collector.push(token);
      }
    }

    return tree;
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens(tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, len = tokens.length; i < len; ++i) {
      token = tokens[i];
      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          lastToken = token;
          squashedTokens.push(token);
        }
      }
    }

    return squashedTokens;
  }

  function escapeTags(tags) {
    return [
      new RegExp(escapeRegExp(tags[0]) + "\\s*"),
      new RegExp("\\s*" + escapeRegExp(tags[1]))
    ];
  }

  /**
   * Breaks up the given `template` string into a tree of token objects. If
   * `tags` is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. ["<%", "%>"]). Of
   * course, the default is to use mustaches (i.e. Mustache.tags).
   */
  function parseTemplate(template, tags) {
    template = template || '';
    tags = tags || mustache.tags;

    if (typeof tags === 'string') tags = tags.split(spaceRe);
    if (tags.length !== 2) throw new Error('Invalid tags: ' + tags.join(', '));

    var tagRes = escapeTags(tags);
    var scanner = new Scanner(template);

    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace() {
      if (hasTag && !nonSpace) {
        while (spaces.length) {
          delete tokens[spaces.pop()];
        }
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var start, type, value, chr, token;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(tagRes[0]);
      if (value) {
        for (var i = 0, len = value.length; i < len; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
          } else {
            nonSpace = true;
          }

          tokens.push(['text', chr, start, start + 1]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr == '\n') stripSpace();
        }
      }

      // Match the opening tag.
      if (!scanner.scan(tagRes[0])) break;
      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(eqRe);
        scanner.scan(eqRe);
        scanner.scanUntil(tagRes[1]);
      } else if (type === '{') {
        value = scanner.scanUntil(new RegExp('\\s*' + escapeRegExp('}' + tags[1])));
        scanner.scan(curlyRe);
        scanner.scanUntil(tagRes[1]);
        type = '&';
      } else {
        value = scanner.scanUntil(tagRes[1]);
      }

      // Match the closing tag.
      if (!scanner.scan(tagRes[1])) throw new Error('Unclosed tag at ' + scanner.pos);

      token = [type, value, start, scanner.pos];
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        if (sections.length === 0) throw new Error('Unopened section "' + value + '" at ' + start);
        var openSection = sections.pop();
        if (openSection[1] !== value) throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        tags = value.split(spaceRe);
        if (tags.length !== 2) throw new Error('Invalid tags at ' + start + ': ' + tags.join(', '));
        tagRes = escapeTags(tags);
      }
    }

    // Make sure there are no open sections when we're done.
    var openSection = sections.pop();
    if (openSection) throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    tokens = squashTokens(tokens);

    return nestTokens(tokens);
  }

  mustache.name = "mustache.js";
  mustache.version = "0.7.2";
  mustache.tags = ["{{", "}}"];

  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  mustache.parse = parseTemplate;

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // All Mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates and partials in the default writer.
   */
  mustache.clearCache = function () {
    return defaultWriter.clearCache();
  };

  /**
   * Compiles the given `template` to a reusable function using the default
   * writer.
   */
  mustache.compile = function (template, tags) {
    return defaultWriter.compile(template, tags);
  };

  /**
   * Compiles the partial with the given `name` and `template` to a reusable
   * function using the default writer.
   */
  mustache.compilePartial = function (name, template, tags) {
    return defaultWriter.compilePartial(name, template, tags);
  };

  /**
   * Compiles the given array of tokens (the output of a parse) to a reusable
   * function using the default writer.
   */
  mustache.compileTokens = function (tokens, template) {
    return defaultWriter.compileTokens(tokens, template);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer.
   */
  mustache.render = function (template, view, partials) {
    return defaultWriter.render(template, view, partials);
  };

  // This is here for backwards compatibility with 0.4.x.
  mustache.to_html = function (template, view, partials, send) {
    var result = mustache.render(template, view, partials);

    if (typeof send === "function") {
      send(result);
    } else {
      return result;
    }
  };

}));
/**
 * @namespace J
 * @summary 一个简单的js模块管理框架
 * @desc 实现Module Pattern，解决最基本的js代码组织问题。不包含依赖管理，动态加载等功能，如需要推荐使用SeaJS或RequireJS。注：JF假设你使用jQuery，如果您使用别的库，可以针对性改一下代码。
 * @author Levin
 * @version 1.0.2
 * @example 
	J(function($,p,pub){
		p.submodule = {
			_init:function(){
				alert('init submodule');
			}
		};

		pub.hi = function(){
			alert('hi from module'+pub.id);
		};
		pub.id = 'testModule';
	});
 */
var J = (function($){

	return (function(module){
		var type = typeof(module);
		if (type==='undefined') {
			return J;
		};
		if (type==='string') {
			return J[module];
		};
		if (type==='function') {

			var module1 = {_:{}};
			module.call(J,$,module1._,module1);

			if (!module1.id) {
				alert('A J module require a public id property!');
				return;
			};
			if (J[module1.id]) {
				alert('A J module with id "'+module1.id+'" exists!');
				return;
			};
			//add a J module
			J[module1.id]=module1;
			module1=null;
		};
	});
})(jQuery);

(function ($) {
	var p = {},
		pub = {};
	/**
	* @private
	* @desc onLoaded方法,统一管理页面加载完毕后的回调方法
	* 说明:onLoaded方法接管所有页面上注册到$(document).ready(callback)中的callback方法;
	* 如果你要新增一个$(callback)或$(document).ready,请将你的callback方法放在onLoaded方法体内
	*/
	p.onLoaded = function () {
		for (var m in J) {
			if (m==='init'||m==='onLoad') {
				continue;
			};
			m = J[m];
			if ( p.isFunc(m._onLoad) ) {
				m._onLoad.call(m);
				delete m._onLoad;
			};
			if(m._){
				p.loadSub(m._);
				delete m._;
			};
		};
	};
	/**
	* @private
	* @desc initEvents方法
	*	作用:用于为页面dom元素注册各种事件!
	*	说明:Html页面仅用于表现，任何时候应在标签里面直接注册事件。即避免如<a onclick="xx"/>
	*/
	p.initEvents = function (opts) {
		$(document).ready(p.onLoaded);
	};
	//function test
	p.isFunc = function(v){
		return (v && typeof(v)==='function');
	};
	/**
	 * 初始化子模块。如果你的一个模块里面有子模块p.sub1，p.sub1又具有init方法的时候，可以在pub.Init中调用InitSub方法让JF对子模块进行初始化。
	 * @private
	 * @function
	 * @name J#initSub
	 * @param {Object} sub sub module
	 */
	p.initSub = function(sub) {
		for (var c in sub) {
			c = sub[c];
			if (!c) {
				continue;
			};

			if ( p.isFunc(c._init) ) {
				c._init.call(c);
				delete c._init;
			};

			for (var c1 in c) {
				c1 = c[c1];
				if (!c1) continue;

				if (p.isFunc(c1._init)) {
					c1._init.call(c1);
					delete c1._init;
				};
			};
		};
	};
	/**
	* onLoaded之后加载子模块。如果你的一个模块里面有子模块p.sub1，p.sub1又具有onLoad方法的时候，可以在pub.onLoad中调用LoadSub方法让JF在onLoaded之后加载子模块。
	* @private
	* @function
	* @name J#loadSub
	* @param {Object} sub sub module
	*/
	p.loadSub = function (sub) {
		for (var c in sub) {
			c = sub[c];
			if (!c) {
				continue;
			};

			if (p.isFunc(c._onLoad)) {
				c._onLoad.call(c);
				delete c._onLoad;
			};

			for (var c1 in c) {
				c1 = c[c1];
				if (!c1) continue;

				if (p.isFunc(c1._onLoad)) {
					c1._onLoad.call(c1);
					delete c1._onLoad;
				};
			};
		};
	};
	/*public area
	======================*/
	/**
	* 初始化J框架，页面js逻辑的唯一入口。一般至于</body>标签之前，用户向整个app传递参数用
	* @public
	* @function
	* @name J#init
	* @param {Object} opts 配置对象
	* @example
	*
	*	J.init({x:'kk',y:'zz'});
	*
	*/
	pub.init = function (opts) {
		J.opts = p.opts = opts = $.extend(opts || {},J.opts||{});
		for (var m in J) {

			if (m==='init'||m==='onLoad') {
				continue;
			};
			m = J[m];
			if (p.isFunc(m._init)) {
				m._init.call(m);
				delete m._init;
			};
			if(m._){
				p.initSub(m._);
				//delete m._; //p.onLoaded neet it!
			};
		};
		p.initEvents();
	};
	//给外部调用（例如android的webview调用)
	pub.onLoad = p.onLoaded;
	//shadow copy
	for (var m in pub) {
		if (!m) {
			continue;
		};
		J[m]=pub[m];
	};

})(window["jQuery"]);
/**
* 简单的html模板解析方法
* @public
* @function
* @name J#evalTpl
* @example
*	var str="<a href=/u/@{uid}>@{username}</a>",
*		data={uid:1,username:'levin'};
*	alert(J.evalTpl(str,data));
*	//提示信息为："<a href=/u/1>levin</a>"
* @param {string} str html模板，字段用%包含
* @param {Object} data json数据
* @param {Boolean} alternative old-fashion template style like %xxx%
*/
J.evalTpl = function (str, data,alternative) {
	var result;
	var patt = new RegExp(alternative?"%([a-zA-z0-9]+)%":"@{([a-zA-z0-9]+)}");
	while ((result = patt.exec(str)) != null) {
		var v = data[result[1]] || '';
		str = str.replace(new RegExp(result[0], "g"), v);
	};
	return str;
};
/**
 * 指定的字符串是否具有指定的后缀
 * @public
 * @function
 * @name JF#endsWidth
 * @param {String} str 指定的字符串
 * @param {String} suffix 指定的后缀
 */
J.endsWidth = function(str,suffix){
	return str.indexOf(suffix, str.length - suffix.length) !== -1;
};
/**
 * websql data api for the app
 * websql reference:http://html5-demos.appspot.com/static/html5storage/index.html
 * Note:physical db file path for node-webkit in win7 :C:\Users\xxxx\AppData\Local\node-webkit\databases
 * You can open the db file using software like sqlite expert
 * UserDataDir:var userDataDir = process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']
 */
J(function($,p,pub){

	pub.id="data";
    var fs = require('fs-extra');

    pub.packageJson = fs.readJsonSync('package.json');
	pub.version = pub.packageJson.version;
	
	J.db = openDatabase(pub.packageJson.name,'1.0','db for '+pub.packageJson.name,4*1024*1024);
	J.dbLocal = localStorage;
	J.session = sessionStorage;

	/**
	 * 获取当前工作空间
	 * @param {Array} wsList 工作空间json数组
	 */
	pub.getCurrentWorkspace = function(wsList){
		var item= J.dbLocal['CurrentWorkspace'];
		if (item) {
			item = JSON.parse(item);
		};
		if (!wsList || wsList.length==0) {
			return item;
		};

		if (!item) {
			item = wsList[0];
			pub.setCurrentWorkspace(item);
			return item;
		};

		var len = wsList.length;
		for (var i = len - 1; i >= 0; i--) {
			if (item.id == wsList[i].id) {
				item = wsList[i];
				pub.setCurrentWorkspace(item);
				break;
			};
		};

		return item;

	};
	/**
	 * 设置当前工作空间
	 * @param {Object} item 工作空间json对象
	 */
	pub.setCurrentWorkspace = function(item){
		J.dbLocal['CurrentWorkspace'] = JSON.stringify(item);
	};

	/**
	 * 生成insert的sql语句
	 * @param {string} tName 表名
	 * @param {Object} item 业务实体对象
	 */
	pub.getInsertSQL=function(tName,item){
		var sql = "INSERT INTO "+tName+'(',
			fields = [],
			properties = pub.objectPropertyToArray(item),
			cntFields = properties.length;

		sql += properties.join(',');
		sql += ') VALUES ('
		for (var i = cntFields - 1; i >= 0; i--) {
			fields.push('?');
		};
		sql+=fields.join(',');
		sql+=')';

		console.log(sql);

		return sql;

	};
	/**
	 * 生成delete的sql语句
	 * @param {string} tName 表名
	 * @param {Object} item 条件对象
	 */
	pub.getDeleteSQL=function(tName,item){
		var sql = "DELETE FROM "+tName+' WHERE ',
			properties = pub.objectPropertyToArray(item);

		sql += properties.join(' =? AND');
		sql += ' =?';

		console.log(sql);

		return sql;

	};
	/**
	 * 生成update的语句
	 * @param {string} tName 表名
	 * @param {Object} item 业务实体的json对象
	 * @param {string} primaryKey 主键 
	 */
	pub.getUpdateSQL = function(tName,item,primaryKey){
		var fields = pub.objectPropertyToArray(item,[primaryKey]),
			sql = 'UPDATE '+tName +' SET '+fields.join(' = ?, ')+'= ? WHERE '+primaryKey+' = ?';
		return sql;

	};
	/**
	 * 生成createTable的语句
	 * @param {string} tName 表名
	 * @param {Array} fields 字段配置对象数组
	 */
	pub.getTableSQL = function(tName,fields){
		var sql = 'CREATE TABLE IF NOT EXISTS '+tName +'('+fields.join(',')+')';
		return sql;
	};
	/**
	 * 生成查询SQL语句
	 * @param {string} tName 表名
	 * @param {string} filterSql 条件语句
	 */
	pub.getSelectSQL = function(tName,filterSql){
		var sql = 'SELECT * FROM '+tName+(filterSql?' WHERE '+filterSql:'');
		return sql;
	};
	/**
	 * 将列举对象转换成数组
	 * @param {Object} obj json object
	 * @param {Array} ignoreProperties 忽略的属性
	 */
	pub.objectToArray = function(obj,ignoreProperties){
		var retVal = [],
			ignoreProperties = ignoreProperties ||[];
		for (var c in obj) {
			if ($.inArray(c,ignoreProperties)==-1) {
				retVal.push(obj[c]);
			}
		};
		return retVal;
	};

	/**
	 * 将列举对象的属性转换成数组
	 * @param {Object} obj json object
	 * @param {Array} ignoreProperties 忽略的属性
	 */
	pub.objectPropertyToArray = function(obj,ignoreProperties){
		var retVal = [],
			ignoreProperties = ignoreProperties ||[];
		for (var c in obj) {
			if ($.inArray(c,ignoreProperties)==-1) {
				retVal.push(c);
			};
		};
		return retVal;
	};

    /**
     * 根据单个路径生成各类文件的路径
     *
     * @param {Object} path 路径对象，可以根据需要将零散的子路径传进来
     **/
    pub.createDirs = function (path) {
        var types = ['html', 'css', 'img', 'psd'] ;
        for (var i = 0, k = null; k = types[i] ; i++ ) {
            fs.mkdir(path.rootPath + k + '\\' + path.name, 0777, function () {
                console.log('mkdir ok') ;
            }) ;
        }
    };

    /**
     * 生成模版文件(html,css)
     *
     * @param {Object} path 路径对象，包含跟路径，当前目录名称
     **/
    pub.createInitFile = function (path) {
        // 定义模版文件路径
        var template = [
            {'type': 'html', 'path': 'html\\common\\temple.html' },
            {'type': 'css', 'path': 'css\\common\\temple.css' }
        ];

        for (var i = 0, k = null; k = template[i] ; i++ ) {
            (function (k) {
                var srcPath = path.rootPath + k.path ;
                fs.exists(srcPath, function (exists) {
                    if (exists) {
                        var targetPath = path.rootPath + k.type + '\\' + path.name + '\\' + 'index.' + k.type;
                        fs.copy(srcPath, targetPath, function (err) {
                            if (err) {
                                console.log(err) ;
                            }
                        });
                    }else {
                        console.log('模板文件不存在，请尝试更新SVN') ;
                    }
                });
            })(k);
        }
    };
});

//TODO:make it cool http://html5demos.com/history
J(function($,p,pub){
	pub.id ="base";
	pub.userName = process.env['USERNAME'];
	pub.appRoot = process.execPath.substr(0,process.execPath.lastIndexOf('\\')+1);
	pub.appRootUrl = 'file:///'+pub.appRoot.replace(/\\/gi,'/');
	pub.dataRoot = pub.appRoot+"data\\$\\".replace('$',J.data.packageJson.name);
	pub.initFile = pub.dataRoot+"app.ini";
	pub.$win = $(window);

	var gui = require('nw.gui'),
		fs = require('fs-extra');

	pub.gui = gui;
	pub.fs =fs;
	
	//https://github.com/rogerwang/node-webkit/wiki/Show-window-after-page-is-ready
	window.onload=function(){
		gui.Window.get().show();
	};
	
	p.V = {
		tpl0:'Welcome',
		$status:$("#appStatus"),
		$tip:$("#appTip"),
		$navCollapse:$("#navCollapse"),
		$secA:$("#secA"),
		updateStatus:function(txt){
			txt = txt||this.tpl0+','+pub.userName;
			this.$status.html(txt);
		}
	};

	p.M={
		tipTimer:null,
		isBusy:false
	};

	p.C={
		_init:function(){
			//Add error event listener
			window.addEventListener('error', function (err) {
				var message = '---error---\n' + err.filename + ':' + err.lineno + '\n' + err.message + '\n\n';
				J.alert.show(message);
			}, false);

			process.on('uncaughtException', function (err) {
				J.alert.show('---uncaughtException---\n' + err.stack + '\n\n');
			});
		},
		_onLoad:function(){

			$("#btnClose").on("click",function(e){

				var win = gui.Window.get();
				win.close();
				return false;

			});

			$("#btnFullscreen").on("click",function(e){
				var win = gui.Window.get();
				win.toggleFullscreen();
				
				return false;
			});

			$("#btnMinSize").on("click",function(e){
				var win = gui.Window.get();
				win.minimize();
				return false;
			});

			$("#btnNavbar").on("click",function(e){

				if (p.V.$navCollapse.hasClass('in')) {
					p.V.$secA.removeClass('sec_collapsein');
				}else{
					p.V.$secA.addClass('sec_collapsein');
				};

			});

			//minimize to tray
			this.initTray();

		},
		initTray:function(){
			// Reference to window and tray
			var win = gui.Window.get(),
				tray;

			// Get the minimize event
			win.on('minimize', function() {
				// Hide window
				this.hide();

				// Show tray
				tray = new gui.Tray({ 
					'icon': 'icon.png'
				});
				tray.tooltip = J.data.packageJson.name+'-v'+J.data.packageJson.version;
				// Show window and remove tray when clicked
				tray.on('click', function() {
					win.show();
					this.remove();
					tray = null;
				});
			});
		}//initTray
	};
	/**
	 * 重载当前窗口
	 */
	pub.reload = function(){
		var win = gui.Window.get();
		win.reload();
	};
	/**
	 * 在页脚状态栏显示提示信息
	 * @param {String} txt 提示信息
	 * @param {int} timeout 提示显示时长
	 */
	pub.showTip = function(txt,timeout){
		clearTimeout(p.M.tipTimer);
		p.V.$tip.html(txt).show();
		p.M.isBusy=true;
		if (!timeout) {
			return;
		};
		p.M.tipTimer = setTimeout(function(){

			pub.hideTip();

		},timeout);
	};
	pub.hideTip = function(){
		clearTimeout(p.M.tipTimer);
		p.V.$tip.hide();
		p.M.isBusy = false;
	};

	pub.isBusy = function(){
		return p.M.isBusy;
	};
	/**
	 * update status bar
	 * @param {String} txt text info
	 */
	pub.updateStatus = function(txt){
		p.V.updateStatus(txt);
	};
	/**
	 * 获取文件的扩展名
	 * @param {String} filePath 文件路径
	 */
	pub.getFileExt = function(filePath){
		var ext = filePath.substr(filePath.lastIndexOf('.')+1);
		return ext;
	};
	/**
	 * 获取文件所在的根路径。支持e:/xx/xx.txt，也支持e:\xx\xx.txt
	 * @param {String} filePath 文件路径
	 */
	pub.getFileRootPath=function(filePath){
		var idx = ( idx=filePath.lastIndexOf('\\') )>=0?idx:filePath.lastIndexOf('/');
		if (idx<0) {
			return null;
		};
		filePath = filePath.substr(0,idx+1);
		return filePath;
	};
	/**
	 * 根据文件路径生成一个文件id
	 * @param {String} filePath 文件路径
	 */
	pub.generateFileIdByFilePath = function(filePath){
		filePath = filePath.replace(/\\/gi,'-')
			.replace(/\//gi,'-')
			.replace(/\./gi,'_')
			.replace(/:/gi,'')
			.replace(/ /gi,'-')
			.replace(/&/gi,'-');
		return filePath;
	};

	/**
	* 指定的文件是否是图片
	* @public
	* @function
	* @name J.base#isImg
	* @param {String} file 文件路径
	*/
	pub.isImg = function(file) {
	    file = file.toLowerCase();
	    var isImg = false;
	    var arrImg = ['.jpg','.png','.gif','.jpeg'];
	    for (var i = 0; i < arrImg.length; i++) {
	        isImg = (file.substr(file.lastIndexOf(arrImg[i])) == arrImg[i]);
	        if (isImg) {
	            break;
	        }
	    }
	    return isImg;
	};

	/**
	 * 移除应用的loading界面
	 * @param {int} delay 延迟毫秒数
	 * @param {Function} cbk callback
	 */
	pub.removeAppLoading = function(delay,cbk){
		var rock = function(){
			$('#appLoader').remove();
			cbk&&cbk();
			localStorage[J.data.packageJson.name+'.appLoaded']="1";
		};
		if (!delay) {
			rock();
			return;
		};
		setTimeout(function(){
			rock();
		},delay);
	};
	/**
	 * 打开文件的指定文件夹
	 * @param {String} filePath filePath
	 */
	pub.openFileInFolder = function(filePath){
		pub.gui.Shell.showItemInFolder(filePath);
	};

	/**
	 * normalized log function
	 */
	pub.log=function(obj){
		console&&console.log&&console.log(obj);
	};

});

J(function($,p,pub){
	pub.id = "alert";
	p.V ={
		$main:$("#appAlert"),
		$body:$("#appAlertBody"),
		$title:$("#alertTitle")
	};

	p.M={
		defaultTitle:'Notice',
		duration:0,
		timer:null
	};
	p.C={
		_onLoad:function(){
			p.V.$main.modal({
				backdrop:'static',
				show:false
			}).on("hide",function(){
				clearTimeout(p.M.timer);
			});
		},
		show:function(txt,opts){
			
			if (!txt) {
				return;
			};

			opts = $.extend({},p.M,opts||{});
			opts.title = opts.title || p.M.defaultTitle;

			clearTimeout(p.M.timer);
			p.V.$body.html(txt);
			p.V.$title.html(opts.title);
			p.V.$main.modal("show");

			if (opts.duration) {
				p.M.timer = setTimeout(function(){
					p.C.close();
				},opts.duration);
			};

		},//show
		close:function(){
			p.V.$main.modal("hide");
		}
	};
	
	pub.show = function(txt,opts){
		p.C.show(txt,opts);
	};

	pub.hide = function(){
		p.C.hide();
	};
	
});
/**
 * application setting module
 */
J(function($,p,pub){
	pub.id="dataSetting";

	var fs = require('fs-extra'),
		path = require('path');

	p.M = {
		item0:{
			'exeCss':'',
			'exeImg':'',
			'exeLess':'',
			'exeHtml':'',
			//检索标志，用于获取项目文件时用
			//当路径出现/{searchFlag}0/时，同时检索/{searchFlag}x/下的文件
			'searchFlag':['img','html','css','less','psd','images'],
			//检索的文件扩展名
			'ext':['.jpg','.gif','.png','.html','.css','.less','.js'],
			'ignoreFolders':['.svn'],
			'createdAt':new Date().toString('yyyy-MM-dd HH:mm:ss'),
			'modifiedAt':new Date().toString('yyyy-MM-dd HH:mm:ss')
		}
	};

	pub.data = p.M.item0;

	//controller
	p.C = {
		_init:function(){

			fs.exists(J.base.initFile,function(exists){

				if (!exists) {

					fs.mkdirs(J.base.dataRoot,function(err){
						if(err){
							console.log(err);
							$(window).trigger(pub.id+"OnLoaded",[{
								isOk:false,
								isNew:true
							}]);
							return;
						};
						fs.writeJson(J.base.initFile,pub.data,function(err){
							$(window).trigger(pub.id+"OnLoaded",[{
								isOk:true,
								isNew:true
							}]);
						});

					});
					

					return;
				};

				J.base.showTip('Load Config data...');

				fs.readJson(J.base.initFile,function(err,data){

					J.base.hideTip();

					if(err) {
						$(window).trigger(pub.id+"OnLoaded",[{
							'err':err
						}])
						return;
					}
					if (typeof(data.searchFlag)==='string') {
						data.searchFlag = data.searchFlag.split(',');
					};
					J.dataSetting.data = data;

					$(window).trigger(pub.id+"OnLoaded",[{isOk:true}]);

				});

			});
		}
	};
	/**
	 * 更新记录
	 */
	pub.save = function(item){
		
		item = $.extend({},pub.instance,item||{});

		fs.writeJson(J.base.initFile,item,function(err){
			if (err) {

				$(window).trigger(pub.id+"OnSavedError",[err]);
				return;
			};

			$(window).trigger(pub.id+"OnSaved",[item]);

			J.dataSetting.data = item;

		});
	};

	/**
	 * 根据文件获取配置的应用程序
	 * @param {String} filePath 文件路径
	 */
	pub.getExeByFile = function(filePath){
		var ext = J.base.getFileExt(filePath);
		ext = ext.toUpperCase();
		var exeStr = null,
			tempObj = null;
		for(var c in pub.data){
			if(c.indexOf('exe')!==0){
				continue;
			}
			tempObj = c.toUpperCase();
			if (tempObj.indexOf(ext)>0) {
				exeStr = pub.data[c];
			};
		}//for
		return exeStr;
	};
	
});
J(function($,p,pub){
	pub.id="dataWorkspace";
	p.tName = 'Workspace';
    // add autoincrement by Enix
	// CREATE TABLE if not exists test (id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name)
	pub.fields = [
		'id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT',
		'name',
		'rootPath',
		'remotePath',
		'ftpId',
		'ftpPort',
		'ftpUser',
		'ftpPwd',
		'userName',
		'createdAt',
		'modifiedAt'
	];

	var $win = J.base.$win;

	p.sql={
		createTable:'',
		getAll:'',
		_init:function(){
			this.createTable = J.data.getTableSQL(p.tName,pub.fields);
			this.getAll = J.data.getSelectSQL(p.tName);
		}
	};
	p.M = {
		item0:{
            // remove id (id is autoincrement) by Enix
            // modify test case
			name:'测试',
			rootPath:'E:\\icson\\',
			remotePath:'/test/ic/',
			ftpId:'1.1.1.1',
			ftpPort:'1234',
			ftpUser:'uName',
			ftpPwd:'uPwd',
			userName:J.base.userName,
			createdAt:new Date().toString('yyyy-MM-dd HH:mm:ss'),
			modifiedAt:new Date().toString('yyyy-MM-dd HH:mm:ss')
		}
	};
	p.C = {
		initTable:function(){

			J.db.transaction(function(tx){
				//init table structure
				tx.executeSql(p.sql.createTable,[],function(tx1){

					var sql = J.data.getInsertSQL(p.tName,p.M.item0),
						data = J.data.objectToArray(p.M.item0);
					//init dummy data
					tx1.executeSql(sql,data,function(tx2){
						//everything goes well
						$win.trigger(pub.id+'OnDataInited');
					},function(tx2,err){
						console.log(err);
						alert('WebSQL Error When initializing dummy data for Workspace!');
					});
				});
				
			});
		},
		_init:function(){
			//init table when the ini file is a new one
			$win.on(J.dataSetting.id+'OnLoaded',function(e,d){
				if (d.isOk) {
					if (d.isNew) {
						p.C.initTable();
					}else{
						//data had beened initialized
						$win.trigger(pub.id+'OnDataInited');
					};
				};
			});
		}
	};

	/**
	 * 添加记录
	 */
	pub.insert = function(item){

		J.db.transaction(function(tx){

			//删除id，因为id是自增长的！
			delete item.id;

			item.userName = process.env['USERNAME'];
			item.createdAt = item.modifiedAt = new Date().toString('yyyy-MM-dd HH:mm:ss');

			var sql = J.data.getInsertSQL(p.tName,item);

			tx.executeSql(sql,J.data.objectToArray(item),function(tx){
				$win.trigger(pub.id+'OnInserted',[item]);
			},function(tx,err){
				$win.trigger(pub.id+'OnInsertedError',[err]);
			});
			

		});
	};

	/**
	 * 根据rootPath字段获取记录
	 */
	pub.findByRootPath = function(rootPath,cbk){
		J.db.transaction(function(tx){

			var sql = J.data.getSelectSQL(p.tName,'rootPath = ?');

			tx.executeSql(sql,[rootPath],function(tx,results){

				$win.trigger(pub.id+'OnFindByRootPath',[results]);

				cbk && cbk(results);

			});

		});
	};

	/**
	 * 根据id自段获取记录
	 */
	pub.findById = function(id,cbk){
		J.db.transaction(function(tx){

			var sql = J.data.getSelectSQL(p.tName,'id = ?');

			tx.executeSql(sql,[id],function(tx,results){

				$win.trigger(pub.id+'OnFindById',[results]);

				cbk && cbk(results);

			});

		});
	};
	/**
	 * 删除记录
	 */
	pub.deleteById = function(id){
		J.db.transaction(function(tx){

			var sql = J.data.getDeleteSQL(p.tName,{'id':id});

			tx.executeSql(sql,[id],function(tx){

				$win.trigger(pub.id+'OnDeletedById',[id]);

			},function(tx,err){
				$win.trigger(pub.id+'OnDeletedByIdError',[id]);
			});

		});
	};

	/**
	 * 更新记录
	 */
	pub.update = function(item){
		
		J.db.transaction(function(tx){

			item.modifiedAt = new Date().toString('yyyy-MM-dd HH:mm:ss');

			var item1 = J.data.objectToArray(item,['id']),
				sql = J.data.getUpdateSQL(p.tName,item,'id');

			item1.push(item.id);

			tx.executeSql(sql,item1,function(tx){
				$win.trigger(pub.id+'OnUpdated',[item]);
			},function(tx,err){
				$win.trigger(pub.id+'OnUpdatedError',[err]);
			});

		});
	};

	/**
	 * 获取所有记录
	 */
	pub.getAll = function(){
		J.db.transaction(function(tx){

			tx.executeSql(p.sql.getAll,[],function(tx,results){

				var items = [],
					len = results.rows.length;
				if (len>0) {
					for (var i = len - 1; i >= 0; i--) {
						items.push(results.rows.item(i));
					};
				};

				$win.trigger(pub.id+'OnGetAll',[{'cnt':len,'items':items}]);

			},function(tx,err){
				$win.trigger(pub.id+'OnGetAllError',[err]);
			});

		});
	};
});

/*
 * J.dataDir - 目录操作模块
 */
J(function($,p,pub){

	pub.id = "dataDir";

	var fs = J.base.fs,
		path = require('path');

	p.isIgnoreDir = function(_dir,ignoreFolders){
		var yep = false,
			len = ignoreFolders.length;

		for (var i = len - 1; i >= 0; i--) {
			if( _dir.indexOf(ignoreFolders[i])>=0 ){
				yep = true;
				break;
			}
		};
		return yep;

	};

	//Get files of specified path
	p._getFiles = function(dirObj,cbk){
		fs.readdir(dirObj.path,function(err,files){
			if (err) {
				cbk(err,{
					'isOk':false,
					'err':err,
					'errCode':2,
					'path':dirObj.path
				});
				return;
			};
			//console.log(files);
			var d = {
				'isOk':true,
				'path':dirObj.path,
				'flag':dirObj.flag,
				'files':[],
				'folders':[],
				'folderFlags':[],
				'dirObj':dirObj
			},stat = null,
				len2 = files.length,
				folders1=[],
				folderFlags1=[];


			//分离目录和文件
			for (var i = 0; i <len2; i++) {
				stat = fs.lstatSync(dirObj.path+files[i]);
				//directory
				if (stat.isDirectory()) {

					//是否忽略的目录
					if ( p.isIgnoreDir(files[i],dirObj.ignoreFolders) ) {
						continue;
					};

					d.folders.push(dirObj.path+files[i]+'\\');
					d.folderFlags.push(dirObj.flag+'\\'+files[i]);
					folders1.push(dirObj.path+files[i]+'\\');
					folderFlags1.push(dirObj.flag+'\\'+files[i]);
					continue;
				};
				if (!stat.isFile()) {
					continue;
				};
				//file
				d.files.push({
					'flag':dirObj.flag,
					'path':(dirObj.path+files[i]),
					'id':J.base.generateFileIdByFilePath(dirObj.path+files[i]),
					'name':files[i],
					'ext':path.extname(files[i]).replace('.','').toLowerCase(),
					'dir':dirObj.path,
					'isImg':J.base.isImg(files[i]),
					'url':'file:///'+(dirObj.path+files[i]).replace(/\\/gi,'/'),
					'size':(stat.size/1024).toFixed(2),
					'mtime':new Date(stat.mtime.getTime()).toString('yyyy-MM-dd HH:mm:ss'),
					'ctime':new Date(stat.ctime.getTime()).toString('yyyy-MM-dd HH:mm:ss'),
					/*access time--is the time when the data of a file was last accessed*/
					'atime':new Date(stat.atime.getTime()).toString('yyyy-MM-dd HH:mm:ss')
				});
			};//for

			if ( !dirObj.includeSubDir || (d.folders.length===0) ) {
				d.cntFile = d.files.length;
				cbk(null,d);
				return;
			};

			//子目录的递归读取
			var dirObj1= $.extend({},dirObj,{
				'flag':folderFlags1.splice(0,1)[0],
				'path':folders1.splice(0,1)[0]
			}),cbk1 = function(err1,obj1){

				if (!err1) {
					d.files = d.files.concat(obj1.files);
				};

				if (folders1.length===0) {
					d.cntFile = d.files.length;
					cbk(null,d);
					return;
				};
				dirObj1.flag = folderFlags1.splice(0,1)[0];
				dirObj1.path = folders1.splice(0,1)[0];
				p._getFiles(dirObj1,cbk1);

			};
			p._getFiles(dirObj1,cbk1);

		});//fs.readdir
	};

	p.getFiles = function(_dirObj,_cbk){

		var _dir = _dirObj.path,
			_includeSubDir = _dirObj.includeSubDir||false,
			_ignoreFolders = _dirObj.ignoreFolders||[];

		if (p.isIgnoreDir(_dir,_ignoreFolders)) {
			_cbk({
				'isOk':false,
				'err':_dir+'has been ignored!',
				'errCode':0,
				'path':_dir,
				'dirObj':_dirObj
			});
			return;
		};

		fs.exists(_dir,function(yes){
			if (!yes) {
				var err0 = {
					'isOk':false,
					'err':'Directory Not Exists:'+_dir,
					'errCode':1,
					'path':_dir,
					'dirObj':_dirObj
				};
				_cbk(err0);
				return;
			};
			p._getFiles(_dirObj,function(err,d){
				_cbk(err,d);
			});

		});//fs.exists

	};
	/*
	 * Get all files in specifed directory
	 * @param {Object} _dirObj directory object like {flag:'xxx',path:'E:\xxx\yyy\'}
	 * @param {Function} _cbk callback function
	 */
	pub.getFiles = function(_dirObj,_cbk){
		p.getFiles(_dirObj,_cbk);
	};

	/**
	 * get the directory containing .svn or _svn folder
	 */
	pub.getSVNDir = function(_dir){
		//fs.existsSync();
		var test = function(flag){
			var dirParts = _dir.split('\\'),
				exists = false, 
				tempPath = null;
			while( (!exists) && (dirParts.length!==0) ){
				tempPath = dirParts.concat([flag]).join('\\');
				exists = fs.existsSync(tempPath);
				tempPath = dirParts.join('\\');
				dirParts.pop();
			}//while
			return ({'exists':exists,'path':tempPath});
		};

		var obj = test('.svn');
		if (obj.exists) {
			return obj.path;
		};
		obj = test('_svn');
		return (obj.exists?obj.path:null);
	};

});
J(function($,p,pub){
	pub.id="dataProject";
	
	var fs = J.base.fs,
		path = require('path'),
		$win = J.base.$win;

	p.M={
		dataFile : J.base.dataRoot+'Project.json',
		items:[]//project items
	};

	p.C={
		//save a project instance
		save:function(d,isInit){

			var cnt = p.M.items.length;
			for (var i = 0; i < cnt; i++) {
				p.M.items[i].id = i+1;
			};

			if ( d && (!d.isDeleted) ) {
				d.id = cnt+1;
				p.M.items.push(d);
			};

			fs.writeJson(p.M.dataFile,p.M.items,function(err){
				var isOk =true;
				if (err) {
					isOk = false;
				};
				var data ={
					isOk:isOk,
					isInit:isInit,
					err:err,
					data:p.M.items,
					item:d
				};
				$win.trigger(pub.id+"OnSaved",[data]);

				//如果是初始化或者是有项目被删除，触发一次数据加载事件
				if (isInit||d.isDeleted) {
					$win.trigger(pub.id+"OnDataLoaded",[data]);
				};

			});
		},
		//remove a project
		remove:function(_dir){
			if (!pub.exists(_dir)) {
				return;
			};
			var items = [],
				len = p.M.items.length,
				d = null;

			for (var i =0;i<len; i++) {
				if(p.M.items[i].path===_dir){
					d = p.M.items[i];
					d.isDeleted=true;
				}else{
					items.push(p.M.items[i]);
				}
			};

			p.M.items = items;
			this.save(d,false);
		}
	};


	/**
	 * Add a directory as project
	 * @param {String} _dir directly
	 */
	pub.addDirAsProject=function(_dir){

		if (pub.exists(_dir)) {
			$win.trigger(pub.id+'OnSaved',[{isOk:false,err:'Project directory exists:'+_dir}]);
			return;
		};

		var tempDir = _dir;

		if (J.endsWidth(_dir,'\\')) {
			tempDir = tempDir.substr(0,tempDir.length-1);
		}else{
			_dir+='\\';
		};

		var d = {
			path:_dir
		};
		//get project name
		d.name = tempDir.substr(tempDir.lastIndexOf('\\')+1);
		//created at
		d.createdAt = new Date().toString('yyyy-MM-dd HH:mm:ss');

		p.C.save(d,false);

	};

	/**
	 * Whether a project exists
	 * @param {String} _dir project directory
	 */
	pub.exists = function(_dir){
		var yes = false,
			len = p.M.items.length;

		_dir = J.endsWidth(_dir,'\\')?_dir:(_dir+'\\');

		for (var i = len - 1; i >= 0; i--) {
			if (p.M.items[i].path==_dir) {
				yes=true;
				break;
			};
		};
		return yes;
	};

	/**
	 * Get all working projects
	 */
	pub.getAll = function(){
		var file =p.M.dataFile;
		fs.exists(file,function(exists){

			if (!exists) {

				p.C.save(null,true);

				return;
			};

			J.base.showTip('Load Project data...');

			fs.readJson(file,function(err,data){

				J.base.hideTip();

				if(err) {
					$win.trigger(pub.id+"OnDataLoaded",[{
						'isOk':false,
						'err':err
					}]);
					return;
				}

				p.M.items = data;

				$win.trigger(pub.id+"OnDataLoaded",[{'isOk':true,'data':data}]);

			});

		});
	};

	/**
	 * show projects in specified workspace
	 * @param {String} workspacePath workspace path
	 */
	pub.filterByWorkspace = function(workspacePath){

		if (!workspacePath) {
			return p.M.items;
		};

		var items = p.M.items,
			len = items.length,
			items1 = [];
		for (var i = 0; i < len; i++) {
			if (items[i].path.indexOf(workspacePath)==0) {
				items1.push(items[i]);
			};
		};
		return items1;
		
	};

	//read all files according to the J.dataSetting.data.searchFlag
	var _getFiles = function(topFolders){

		len1 = topFolders.length;
		if (len1===0) {
			return;
		};
		var cbk =function(err,d){

			var len2 = topFolders.length;
			d = (err||d)||{};
			d.total = len1;
			d.current = len1-len2;

			$win.trigger(pub.id+'OnGetFiles',[d]);

			if (len2 === 0) {
				return;
			};

			J.dataDir.getFiles(topFolders.splice(0,1)[0],cbk);

		};

		J.dataDir.getFiles(topFolders.splice(0,1)[0],cbk);

	};

	/**
	 * Get project files from specified project directory
	 * @param {String} _dir project directory
	 */
	pub.getFiles = function(_dir){

		var topFolders = [],
			projectType,//项目类型标识
			flags = J.dataSetting.data.searchFlag,
			flags1 = [],
			flagIndex = 0,
			flagFoundIndex =false,
			len1 = flags.length;

		//获取项目类型
		for (var i = len1 - 1; i >= 0; i--) {

			if ( (!flagFoundIndex) && ( flagIndex = _dir.indexOf('\\'+flags[i]+'\\') ) >0 ) {
				projectType=1;
				flagFoundIndex =i;
				topFolders.push({
					'flag':flags[i],
					'path':_dir,
					'includeSubDir':true,
					'ignoreFolders':J.dataSetting.data.ignoreFolders
				});
			};
			if (i!==flagFoundIndex) {
				flags1.push(flags[i]);
			};
		};

		projectType = typeof(projectType)==='undefined'?2:1;

		//获取顶级搜索目录
		//1,对于按类型目录结构存放的项目-例如易迅...
		//搜索的目标路径格式为：E:/yyy/{searchFlag}/xxx/
		//2,对于普通按项目目录结构存放的项目
		//搜索的目标路径格式为：E:/yyy/xxx/{searchFlag}/
		var folderPrefix,folderSuffix;
		if (projectType==1) {
			folderPrefix = _dir.substr(0,flagIndex+1);
			folderSuffix = _dir.substr(flagIndex+1);
			folderSuffix = folderSuffix.substr(folderSuffix.indexOf('\\'));
			len1 = flags1.length;
			for (var i = len1 - 1; i >= 0; i--) {
				topFolders.push({
					'flag':flags1[i],
					'path':(folderPrefix+flags1[i]+folderSuffix),
					'includeSubDir':true,
					'ignoreFolders':J.dataSetting.data.ignoreFolders
				});
			};
			_getFiles(topFolders);
			return;
		};

		//跟目录
		topFolders.push({
			'flag':'',
			'path':_dir,
			'includeSubDir':true,
			'ignoreFolders':J.dataSetting.data.ignoreFolders
		});
		//读取根目录
		fs.readdir(_dir,function(err,files){
			if (err) {
				_getFiles(topFolders);
				return;
			};
			topFolders[0].includeSubDir=false;
			var stat = null,
				len2 = files.length;
			//分离目录和文件
			for (var i = 0; i < len2; i++) {
				stat = fs.lstatSync(_dir+files[i]);
				//directory
				if (!stat.isDirectory()) {
					continue;
				}
				//是否忽略的目录
				if ( $.inArray(files[i],J.dataSetting.data.ignoreFolders) > -1 ) {
					continue;
				};
				topFolders.push({
					'flag':files[i],
					'path':(_dir+files[i]+'\\'),
					'includeSubDir':true,
					'ignoreFolders':J.dataSetting.data.ignoreFolders
				});
			};//for

			_getFiles(topFolders);

		});//fs.readdir

	};
	/**
	 * 根据项目的路径删除项目
	 * @param {String} _dir 项目目录
	 */
	pub.removeByDir = function(_dir){
		p.C.remove(_dir);
	};

});

J(function($,p,pub){
	pub.id="editorProject";
    var fs = require('fs');
	
	p.V={
		$main:$("#projectEditor"),
		$title:$("#editorTitle"),
		$controlGroups:null,
		_onLoad:function(){
			this.$fields = this.$main.find('.field_item');
			this.$controlGroups = this.$main.find('.control-group');

			//监听事件
			var id = J.dataProject.id;
			J.base.$win.on(id+'OnSaved',function(e,d){
				/* 暂时注释：不知道这里刷新页面的意义 lv @ 05/30
				if(!d.isOk){
					return;
				}
				if (!d.item) {
					return;
				};
				if (!d.isDeleted) {
					location.reload();
				};
				*/
			}).on(id+'OnInsertedError',function(e,d){
				J.alert.show('WebSQL增加记录时发生错误！');
				J.base.hideTip();
				console.log(d);
			}).on(id+'OnUpdated',function(e,d){
				location.reload();
			}).on(id+'OnUpdatedError',function(e,d){
				J.alert.show('WebSQL更新时发生错误！');
				J.base.hideTip();
				console.log(d);
			}).on(id+'OnDeletedById',function(e,d){
				$("#wsitem"+d).remove();
				pub.hide();
			}).on(id+'OnDeletedByIdError',function(e,err){
				J.alert.show('WebSQL删除记录时发生错误！');
				J.base.hideTip();
				console.log(d);
			});

		},
		render:function(data,opts){
			this.$title.html(opts.title);
			this.$main.modal("show");

			if (!data) {
				return;
			};

			var $tempItem=null;

			for (var c in data) {
				this.$fields.filter('.field_'+c).val(data[c]);
			};

			if(!p.M.isNew){
				$("#btnDelete").show();
			}

		},
		reset:function(){
			this.$title.html(p.M.defaultTitle);
			this.$fields.each(function(i,o){
				$(o).val('');
			});
			$("#btnDelete").hide();
		},
		getData:function(){
			var data = {};
			this.$fields.each(function(i,o){
				data[o.name] = $.trim($(o).val());
			});

			return data;
		},
		resetValidation:function(){
			this.$controlGroups.removeClass('error');
		},
		validateError:function(fieldName){
			this.$controlGroups.filter('#cg_'+fieldName).addClass('error');
		}
	};
	p.M={
		regexInt:/^[0-9]+$/,
		regexName:/^[a-zA-Z0-9_\-]+$/,//alpha,number,underline,dashline
		regexCName:/^[a-zA-Z0-9_\u4e00-\u9fa5-\-]+$/,
		regexPartialUrl:/^[a-zA-Z0-9\/]+$/,
		defaultTitle:'Add Project',
		editTitle:'Edit Project-',
		duration:0,
		timer:null
	};
	p.C={
		_onLoad:function(){
			p.V.$main.modal({
				backdrop:'static',
				show:false
			}).on("hide",function(){
				clearTimeout(p.M.timer);
				p.C.reset();
			});

            $("#btnCreateFolder").on("click",function(e){
                p.C.show('', {isNew:true});
            });

			$("#btnSave").on('click',function(e){
				p.C.save();
			});

			$("#btnDelete").on('click',function(e){
				p.C.remove();
			});

		},
		remove:function(){
			if (!p.M.item) {
				return;
			};
			J.dataWorkspace.deleteById(p.M.item.id);
		},
		save:function(){
			//get data 
			var data = p.V.getData();
			
			p.V.resetValidation();

			if (!this.validate(data)) {
				return;
			};

			J.base.showTip('Saving Project '+data.name);

            var fullPath = data.rootPath + data.name + '\\'; 
			if (p.M.isNew) {
                fs.exists(fullPath, function (ret) {
                    if (ret) {
                        J.alert.show('Project已经存在：'+ fullPath);
                        return;
                    }
                    // 记录数据
                    J.dataProject.addDirAsProject(fullPath);
                });
			};

            //create dirs
            var dirs = J.data.createDirs({'rootPath': data.rootPath, 'name': data.name});

            // create init file
            J.data.createInitFile({'rootPath': data.rootPath, 'name': data.name});
		},
		validate:function(data){
			//validate data.name
			var isNameValid = p.M.regexCName.test(data.name);
			if (!isNameValid) {
				J.alert.show('工作空间名称必须由"字母,数字,中文,下划线和中划线组成!',{title:'Invalid Field Entry!'});
				p.V.validateError('name');
				return false;
			};

			//validate data.rootPath
			if (data.rootPath.length==0) {
				J.alert.show('请选择工作空间对应的本地目录！');
				p.V.validateError('rootPath');
				return false;
			};
			if (!J.endsWidth(data.rootPath,'\\')) {
				data.rootPath+='\\';
			};

			return true;
		},
		show:function(item,opts){
			
			opts = $.extend({},p.M,opts||{});
			opts.title = opts.title || p.M.defaultTitle;
			p.M.isNew = opts.isNew;
			p.M.item = item;
			clearTimeout(p.M.timer);
			
			p.V.render(item,opts);

			if (opts.duration) {
				p.M.timer = setTimeout(function(){
					p.C.close();
				},opts.duration);
			};

		},//show
		showEdit:function(id){

			J.dataWorkspace.findById(id,function(results){

				if(results.rows.length==0){
					//工作空间不存在
					J.alert.show('工作空间不存在：'+id);
					return;
				}
				
				var item = results.rows.item(0);

				pub.show(item,{
					title:p.M.editTitle+item.name,
					isNew:false
				});

			});

		},
		reset:function(){
			p.V.reset();
		},
		close:function(){
			p.V.$main.modal("hide");
		}
	};
	
	pub.show = function(item,opts){
		p.C.show(item,opts);
	};

	pub.showEdit = function(id){

		p.C.showEdit(id);

	};

	pub.hide = function(){
		p.C.close();
	};
});

/**
 * Ftp上传模块using jsftp
 */
J(function($,p,pub) {
	pub.id = 'ftpUpload';

	//require("jsftp")报Uncaught Error: Cannot find module 'jsftp'
	//原因：是nw.exe和页面不在一个目录，require的线程和nw是一起的
	//解决：在nw的目录也npm安装下。后面打包发布nw是和页面一起的，不会有此问题
	var jsftp = require("jsftp"),//require("./node_modules/jsftp/index.js"),
		cssutil = require('cssutil'),
		path = require('path'),
		UglifyJS = require("uglify-js"),
		ftps = {};

	p.M ={
		wsInfo:null,
		ftp:null,
		compressJS:true,
		compressCSS:true,
		keepUncompressedFile:true
	};

	p.V = {
		$main:$('#ftpUploadBox'),
		$fileList:$('#fileListUpload'),
		$btnFtpUpload:$('#btnFtpUpload'),
		$loading:$('#ftpUploadLoading'),
		$loadingBD:$('#ftpUploadLoadingBD'),
		tplFileItem:'<li id="ftpFile%id%" data-id="%id%" data-path="%path%" data-name="%name%">%name%</li>',
		_init:function(){
			this.$btnFtpUpload.on('click',function(e){
				p.C.connect();
			});
			//retry
			$('#btnUpdRedo').on('click',function(e){
				var items = pub.getUploadedFiles();
				p.C.uploadAll(items);
			});
			//upload all
			$('#btnUpdAll').on('click',function(e){
				p.C.uploadAll(J.home.getFilesOfActiveProject());
			});
			//reset
			$('#btnUpdReset').on('click',function(e){
				p.V.$fileList.empty();
			});

			$('#ftpUploadBox .ipt_cbx').on('change',function(e){
				var id0 = this.getAttribute('data-id');
				p.M[id0] = $(this).is(':checked');
			});

			J.base.$win.on(J.home.id+'onProjectDeleted',function(e){
				p.V.$fileList.empty();
			});

		},
		show:function(tip){
			if (tip===true) {
				this.$loading.addClass('hide');
				return;
			};
			if (typeof(tip)==='string') {
				this.$loadingBD.addClass('error').html(tip);
				return;
			};
			this.$loadingBD.removeClass('error').html(this.$loadingBD.attr('data-tip'));
			J.home.showExtPanel('ftpUploadBox');
			this.$loading.removeClass('hide');
		},
		highlight:function(){
			this.$main.addClass('dragover');
		},
		unhighlight:function(){
			this.$main.removeClass('dragover');
		},
		assertUploadable:function(projectPath){
			var wsInfo = J.home.getWorkspaceByFilePath(projectPath);

			if (!wsInfo) {
				this.$btnFtpUpload.addClass('disabled');
			}else{
				this.$btnFtpUpload.removeClass('disabled');
			};
			p.M.wsInfo = wsInfo;
		},
		addFile:function(fileObj){
			var fileDom = document.getElementById('ftpFile'+fileObj.id);
			var fileStatus = {
				isOk:true
			};
			if (fileDom) {
				fileStatus.fileDom = fileDom;
				if(fileDom.getAttribute('data-uploading')==='1'){
					fileStatus.isOk = false;
				}
				return fileStatus;
			};

			this.$fileList.append(J.evalTpl(this.tplFileItem,fileObj,true));
			fileStatus.fileDom = document.getElementById('ftpFile'+fileObj.id);
			return fileStatus;
		},
		updateFileAttr:function(fileDom,attrObj){
			for(var c in attrObj){
				fileDom.setAttribute(c,attrObj[c]);
			};
		},
		isVisible:function(){
			return (!this.$main.is(":hidden"));
		}
	};
	//controller
	p.C={
		_init:function(){
			J.base.$win.on(J.home.id+'OnSelectProject',function(e,d){
				p.V.assertUploadable(d.path);
				//ftp connect
				p.C.connect();
			});
		},
		_ftpPut:function(buffer,remotePath,fileStatus,opts){
			var ftp = p.M.ftp;
			//传文件
			ftp.put('/'+remotePath, buffer, function(err1, res1) {
				if (err1) {
					opts.always({
						'isOk':false
					},{
						'target':fileStatus.fileDom,
						'attrs':{
							'class':"file_err",
							'data-uploading':'0',
							'title':'上传文件失败：'+err1.toString()
						}
					});
					return; 
				};

				//上传成功
				opts.always({
					'isOk':true
				},{
					'target':fileStatus.fileDom,
					'attrs':{
						'class':"file_ok",
						'data-uploading':'0',
						'title':''
					}
				});
				//关闭ftp会话
				/*
				ftp.raw.quit(function(err2,res2){
					if (err2) {
						throw err2;
					};
					console.log(res2);
				});
				*/

			});
		},
		_doUpload:function(fileInfo,remotePath,fileStatus,opts){

			//fileInfo is text string
			if(!J.base.fs.existsSync(fileInfo)){
				p.C._ftpPut(new Buffer(fileInfo),remotePath,fileStatus,opts);
				return;
			}

			//fileInfo is a physical file
			//S-传送文件
			J.base.fs.readFile(fileInfo, "binary", function(err, data) {
				if (!err) {
					p.C._ftpPut(new Buffer(data, "binary"),remotePath,fileStatus,opts);
					return;
				};
				//读取文件失败
				opts.always({
					'isOk':false
				},{
					'target':fileStatus.fileDom,
					'attrs':{
						'class':"file_err",
						'data-uploading':'0',
						'title':'读取文件失败：'+err.toString()
					}
				});
				
			});
			//E-传送文件
		},
		_compressJs:function(filePath,cbk){
			var filePath1 = filePath.toLowerCase();
			//文件后缀是.min.js或者用户选择不压缩
			if ( filePath1.indexOf('.min.js')>0 || (!p.M.compressJS) ) {
				cbk(null,[
					{
						'fileInfo':filePath,
						'remotePath':p.C._getRemotePath(filePath)
					}
				]);
				return;
			};

			var fileParts = filePath.split('\\'),
					len = fileParts.length,
					fileName = fileParts[len-1],
					fileName1 = fileName.substr(0,fileName.lastIndexOf('.'))+'.full.js';
			fileParts[len-1] = fileName1;

			var fullPath = fileParts.join('\\'),
				finalFiles = [
					{
						'fileInfo':UglifyJS.minify(filePath).code,
						'remotePath':p.C._getRemotePath(filePath)
					}
				];

			if (p.M.keepUncompressedFile) {
				finalFiles.push({
					'fileInfo':filePath,
					'remotePath':p.C._getRemotePath(fullPath)
				});
			};

			cbk(null,finalFiles);

		},
		//css合并压缩并上传
		_compressCss:function(filePath,cbk){
			var filePath1 = filePath.toLowerCase();
			//文件后缀是.min.css或者用户选择不压缩
			if ( filePath1.indexOf('.min.css')>0 || (!p.M.compressCSS) ) {
				cbk(null,[
					{
						'fileInfo':filePath,
						'remotePath':p.C._getRemotePath(filePath)
					}
				]);
				return;
			};
			var cssCompressorProviderId = 1;//1-ycssmin;0-clean-css
			cssutil.build([filePath],{
				minify:false,
				compressProviderId:cssCompressorProviderId
			},function(err,txt){
				if (err) {
					//TODO:LOG
					cbk(null,[
						{
							'fileInfo':filePath,
							'remotePath':p.C._getRemotePath(filePath)
						}
					]);
					return;
				};
				var fileParts = filePath.split('\\'),
					len = fileParts.length,
					fileName = fileParts[len-1],
					fileName1 = fileName.substr(0,fileName.lastIndexOf('.'))+'.full.css';
				fileParts[len-1] = fileName1;

				var fullPath = fileParts.join('\\'),
					finalFiles = [
						{
							'fileInfo':cssutil.compress(txt,cssCompressorProviderId),
							'remotePath':p.C._getRemotePath(filePath)
						}
					];

				if (p.M.keepUncompressedFile) {
					finalFiles.push({
						'fileInfo':txt,
						'remotePath':p.C._getRemotePath(fullPath)
					});
				};

				cbk(null,finalFiles);

			});
		},
		_getRemotePath : function(localPath,ext){
			var filePart = localPath.replace(p.M.wsInfo.rootPath,"").replace(/\\/gi,"/"),
				filePart1 = filePart.substr(0,filePart.lastIndexOf('.'));
			if (!ext) {
				filePart = p.M.wsInfo.remotePath+filePart;
			}else{
				filePart = p.M.wsInfo.remotePath+filePart1+ext;
			};
			return filePart;
			
		},
		_prepareUpload:function(fileObj,opts){
			var fileStatus = p.V.addFile(fileObj);
			opts = $.extend({'always':function(){}},opts||{});
			if (!fileStatus.isOk) {
				//TODO:LOG
				opts.always(fileStatus);
				return;
			};

			//获取该文件的远端路径
			var remotePath = this._getRemotePath(fileObj.path);

			p.V.updateFileAttr(fileStatus.fileDom,{'data-uploading':'1'});

			var remoteFolder=J.base.getFileRootPath(remotePath),
				fileExt = path.extname(fileObj.path).toLowerCase();
			//创建远程ftp目录
			this.mkd(remoteFolder,'',function(msg){
				
				if (!msg.isOk) {
					//创建目录时错误
					opts.always(msg,{
						'target':fileStatus.fileDom,
						'attrs':{
							'class':"file_err",
							'data-uploading':'0',
							'title':'创建ftp目录时错误：'+remoteFolder+"|"+msg.err.toString()
						}
					});
					return;
				};
				//目录没有创建完毕
				if(!msg.isDone){
					return;
				}

				var onCompressed = function(err,fileInfos){
					if (err) {
						fileInfos = [{
							'fileInfo':fileObj.path,
							'remotePath':remotePath
						}];
					};
					opts.always0 = opts.always;
					opts.always = function(msg,data){
						if (fileInfos.length===0) {
							opts.always0(msg,data);
							return;
						};
						var tempFile1 = fileInfos.splice(0,1)[0];
						p.C._doUpload(tempFile1.fileInfo,tempFile1.remotePath,fileStatus,opts);
					};
					var tempFile = fileInfos.splice(0,1)[0];
					p.C._doUpload(tempFile.fileInfo,tempFile.remotePath,fileStatus,opts);
				};

				//目录创建完毕
				switch(fileExt){
					case '.css':
						p.C._compressCss(fileObj.path,onCompressed);
						break;
					case '.js':
						p.C._compressJs(fileObj.path,onCompressed);
						break;
					default:
						p.C._doUpload(fileObj.path,remotePath,fileStatus,opts);
						break;
				};
			});
		},//doUpload
		uploadFile:function(fileObj,opts){

			this._prepareUpload(fileObj,opts);

		},
		uploadAll:function(files){
			var len = files.length;
			if (len===0) {
				return;
			};
			p.progress.show();
			var opts={
				'always':function(msg,data){
					if (data.target) {
						p.V.updateFileAttr(data.target,data.attrs);
					};
					//进度条
					//递归
					var len1 = files.length,
						pval = (len-len1)/len;
					p.progress.update( pval );
					if(len1>0){
						p.C.uploadFile(files.splice(0,1)[0],opts);
					}else{
						p.progress.update('Done!',true);
						p.progress.hide(800);
					};
					
				}//always
			};

			this.uploadFile(files.splice(0,1)[0],opts);

		},
		ftpAuth:function(cbk){
			var wsInfo = p.M.wsInfo;
			if (!wsInfo) {
				alert('当前项目没有对应的FTP配置信息，请检查workspace配置！');
				return;
			};

			var ftp = ftps[(wsInfo.ftpId+wsInfo.ftpUser)];
			if (!ftp) {
				ftps[(wsInfo.ftpId+wsInfo.ftpUser)]=ftp=new jsftp({
					host:wsInfo.ftpId,
					port:wsInfo.ftpPort,
					onError:function(err){
						p.V.show(err.toString());
						ftp.destroy();
						delete ftps[(wsInfo.ftpId+wsInfo.ftpUser)];
					}
				});
			};
			//authenticate the user
			if (ftp.authenticated) {
				cbk&&cbk();
			}else{
				ftp.auth(wsInfo.ftpUser,wsInfo.ftpPwd,function(err,res){
					p.M.ftp = ftp;
					if (err) {
						J.alert.show(err.toString());
						J.base.log(err);
						J.base.log(res);
						return;
					};
					cbk&&cbk();
				});
			}
		},//ftpAuth
		connect:function(cbk){
			if(!p.M.wsInfo){
				p.V.show('当前项目没有对应的FTP配置信息，请检查workspace配置！');
				return;
			}
			p.V.show();
			this.ftpAuth(function(){
				//console.log(new Date().getTime());
				p.V.show(true);
				cbk&&cbk();
			});
		},
		//递归创建目录
		mkd:function(remoteFolder,rootPath,cbk){

			if (remoteFolder===null||remoteFolder==='/') {
				//ftp根目录，不需要创建
				cbk({
					isOk:true,
					dir:null
				});
				return;
			};

			var folderParts = remoteFolder.split('/'),
				len = folderParts.length;

			if (folderParts[len-1]==='') {
				folderParts.splice(len-1);
			};
			rootPath = rootPath||'';
			rootPath = rootPath+'/'+folderParts.splice(0,1);
			this.mkdSingle(rootPath,function(msg){
				if (!msg.isOk) {
					cbk(msg);
					return;
				};
				//所有目录创建完毕
				if (folderParts.length===0) {
					msg.isDone=true;
					cbk(msg);
					return;
				};

				p.C.mkd(folderParts.join('/'),rootPath,cbk);

			});
			
		},//mkd
		mkdSingle:function(_dir,cbk){
			//test current working directory
			p.M.ftp.raw.cwd(_dir,function(err,res){
				if(!err){
					//目录已存在
					cbk({
						isOk:true,
						dir:_dir
					});
					return;
				}
				p.M.ftp.raw.mkd(_dir,function(err0,res0){
					if (err0) {
						//创建目录失败
						cbk({
							isOk:false,
							err:err0,
							dir:_dir
						});
						return;
					};
					//创建目录成功
					cbk({
						isOk:true,
						dir:_dir
					});
				});
			});
			
		}//mkdSingle
	};

	//进度条子模块
	p.progress={
		timer:null,
		$d:$('#ftpupdProgress'),
		$bd:$('#ftpupdProgressBD'),
		$bg:$('#ftpupdProgressBG'),
		update:function(n,force){
			if (force) {
				this.$bd.html(n);
				return;
			};
			var v = (n*100).toFixed(2)+'%';
			console.log(v);
			this.$bd.html(v);
			this.$bg.css({
				'width':v
			});
		},
		show:function(){
			clearTimeout(this.timer);
			this.$d.show();
			//触发事件ftpUploadOnUploading
			J.base.$win.trigger(pub.id+'OnUploading');
		},
		hide:function(delay){
			if (typeof(delay)==='undefined') {
				this._doHide();
				return;
			};
			this.timer = setTimeout(function(){
				p.progress._doHide();
			},delay||500);
			
		},
		_doHide:function(){
			this.$d.hide();
			this.update(0);
			J.base.$win.trigger(pub.id+'OnUploaded');
		}
	};

	/**
	 *文件拖拽回调
	 */
	pub.onDragStart = function(e){
		e.dataTransfer.setData('id',e.target.getAttribute('data-id'));
	};
	/**
	 * 文件拖拽结束后的回调
	 */
	pub.onDragEnd = function(e){
		p.V.unhighlight();
	};
	/**
	 * 拖拽划过时的回调
	 */
	pub.onDragOver = function(e){
		p.V.highlight();
		e.preventDefault();
	};
	/**
	 * 拖拽结束-开始传ftp
	 */
	pub.onDrop = function(e){
		e.preventDefault();
		var id = e.dataTransfer.getData('id');
		p.C.uploadAll([J.file.cache[id]]);
	};
	/**
	 * 获取已上传文件
	 */
	pub.getUploadedFiles = function(){
		var items = [];

		p.V.$fileList.find('li').each(function(i,o){
			items.push({
				'id':o.getAttribute('data-id'),
				'path':o.getAttribute('data-path'),
				'name':o.getAttribute('data-name')
			});
		});

		return items;
	};

	pub.showUploadPanel = function(){
		if(p.V.isVisible()){
			return;
		};
		p.C.connect();
	};

});
/**
 * tortoisesvn功能模块
 */
J(function($,p,pub) {
	pub.id = 'svn';

	var cprocess = require('child_process'),
		exec = cprocess.exec;

	p.svn={
		processFlag:'TSVNCache.exe',
		processName:'TortoiseProc',
		isReady:false,
		curProject:null,
		//断言svn是否可用
		assert:function(cbk){
			exec('tasklist', function(err, stdout, stderr) {
				if (err) {
					console.log(err);
					cbk({
						isOk:false,
						err:err
					});
					return;
				};
				// stdout is a string containing the output of the command.
				// parse it and look for the apache and mysql processes.
				if (stdout.indexOf(p.svn.processFlag)>=0) {
					p.svn.isReady = true;
					cbk({
						isOk:true
					});
					return;
				};

				//用户没有装tsvn
				cbk({
					isOk:false,
					err:'没有找到TortoiseSVN的进程信息！'
				});
			});
		},
		initView:function(){
			if(!this.isReady){
				$('#btnGroupSVN').addClass('hide');
				return;
			}

			$('#svnOPList').on('click','a',function(e){
				p.svn.invoke(this.rel);
				$('#btnGroupSVN').removeClass('open');
				return false;
			});
		},
		_init:function(){

			//监听home模块的事件，以便获取当前激活的项目
			J.base.$win.on(J.home.id+'OnSelectProject',function(e,d){
				p.svn.curProject = d;
			});

			this.assert(function(d){
				if (!d.isOk) {
					return;
				};
				p.svn.initView();
			});

		},
		//TortoiseSVN Commands
		//http://tortoisesvn.net/docs/release/TortoiseSVN_en/tsvn-automation.html#tsvn-automation-basics
		// @param {String} cmdName 命令
		// @param {String} 当前路径
		cmd:function(cmdName,cwd){

			var cmdTxt = this.processName+' /command:'+cmdName;
			if (cwd) {
				cmdTxt+=' /path:'+cwd;
			};
			//console.log('tsvn.cmd:=>'+cmdTxt);

			exec(cmdTxt,function(err,stdout,stdout){
				if (err !== null) {
					console.log(err);
				}
			});

		},
		invoke:function(flag){

			if (!this.curProject||this.curProject.path==='') {
				J.alert.show('没有选中任何项目！');
				return;
			};
			var _path = J.dataDir.getSVNDir(this.curProject.path);

			if (!_path) {
				J.alert.show('无SVN元信息！请确认该目录在使用svn进行版本管理！');
				return;
			};

			//获取该项目的所有文件
			var files = J.home.getFilesOfActiveProject(),
				filePaths =[],
				len = files.length;
			for (var i = 0; i < len; i++) {
				filePaths.push(files[i].path);
			};

			switch(flag){
				case '1':
					_path = len>0?filePaths.join('*'):_path;
					this.cmd('commit',_path);
					break;
				case '2':
					_path = len>0?filePaths.join('*'):_path;
					this.cmd('update',_path);
					break;
				case '3':
					this.cmd('log',_path);
					break;
				default:
					break;
			};//switch
		}
	};//p.svn

});
J(function($,p,pub){
    pub.id ="home";

    var $win = $(window),
        g_clActive = 'active',
        T = Mustache,
        cprocess = require('child_process');

    p.M = {
        workspaceData:null,
        curProject:null,
        curProjectIdx:0,
        curWorkspaceId:0,
        isFtpUploading:false,
        curWorkspace0:{
            id:0,
            name:'全部'
        },
        _init:function(){
            this.reset();
            this.curProjectIdx = parseInt(J.dbLocal[pub.id+'.curProjectIdx'])||0;
            this.curWorkspaceId = parseInt(J.dbLocal[pub.id+'.curWorkspaceId'])||0;
        },
        reset:function(){
            this.curWorkspace = this.curWorkspace0;
        },
        setCurrentWorkspace:function(){
            var cnt = this.workspaceData.length;
            if (cnt>0&&this.curWorkspaceId!==0) {
                
                for (var i = cnt - 1; i >= 0; i--) {
                    if (this.workspaceData[i].id==this.curWorkspaceId) {
                        this.curWorkspace = this.workspaceData[i];
                        break;
                    };
                };

                return;
            };

            this.reset();
        },
        firstUpper: function (v) {
            return v.slice(0,1).toUpperCase() + v.slice(1) ;
        }

    };

    p.V = {
        $wsList:$("#wsList"),
        $wsOption:$("#wsOption"),
        tplWSItem0:'<li id="wsItem0"><a href="#" rel="0">全部</a></li>',
        tplWSItem:'<li id="wsItem%id%"><a href="#" rel="%id%">%name%</a></li>',
        //fill workspace switch list
        fillWSList:function(d){
            this.$wsList.append(this.tplWSItem0);
            var cnt = d.cnt,
                htmlOption = '',
                html = [];
            for (var i = cnt - 1; i >= 0; i--) {
                html.push(J.evalTpl(this.tplWSItem,d.items[i],true));
                htmlOption += '<option value="' + d.items[i].rootPath + '">' + d.items[i].name + '</option>' ;
            };
            this.$wsList.append(html.join(''));
            this.$wsOption.html(htmlOption);
        },
        //switch to specified workspace
        switchWS:function(ws){

            p.M.curWorkspace =ws;

            $("#lblWorkspace").html('-'+ws.name);
            this.resetWSList();
            $("#wsItem"+ws.id).addClass('active');
        },
        resetWSList:function(){
            this.$wsList.find('li').removeClass('active');
        }
    };

    p.C = {
        _init:function(){
            $win.on(J.dataWorkspace.id+'OnGetAll',function(e,d){
                p.M.workspaceData = d.items;
                p.V.fillWSList(d);
                p.M.setCurrentWorkspace();
                //p.V.fillCurWS();
                J.base.updateStatus("工作台数:"+d.cnt);

                //get project list
                J.dataProject.getAll();

            }).on(J.dataWorkspace.id+'OnDataInited',function(e){
                //get workspace data
                J.dataWorkspace.getAll();
            });
        },
        _onLoad:function(){
            p.V.$wsList.on("click","a",function(e){
                e.preventDefault();
                if (p.M.curWorkspaceId==parseInt(this.rel)) {
                    return;
                };

                p.C.switchWorspace(this.rel);

            });
        },
        switchWorspace:function(id){

            var wsObj = p.M.curWorkspace0,
                cnt = p.M.workspaceData.length;

            if (id!==0) {
                for (var i = cnt - 1; i >= 0; i--) {
                    if (id == p.M.workspaceData[i].id) {
                        wsObj = p.M.workspaceData[i];
                        break;
                    };
                };
            };

            p.M.curWorkspaceId=J.dbLocal[pub.id+'.curWorkspaceId'] = wsObj.id;

            p.V.switchWS(wsObj);

            $win.trigger(pub.id+'OnSwitchWorkspace');

        }
    };

    p.project={
        V:{
            tplNavItem:document.getElementById('tplProjNavItem').innerHTML,
            tplNoProject:'No Projects found!',
            tplProjectPanel:'<div id="projectPanel%id%" class="tab-pane"><div class="file_filter"><div class="file_filter_bd"></div></div></div>',
            tplProjectDir:document.getElementById('tplProjectDir').innerHTML,
            $projectNavList:$("#projectNavList"),
            $projectPanelList:$("#projectPanelList"),
            $projectMain:$("#projectMain"),
            fillFiles:function(d){//TODO：move to file.js
                //d.errCode为1时为目录不存在，为2时目录读取失败
                if ( (!d.isOk) && (d.errCode==1) ) {
                    return;
                };

                if (!d.isOk) {
                    d.errStr = d.err.toString();
                };
                
                var panel =document.getElementById('projectPanel'+p.M.curProjectIdx);

                html = T.render(this.tplProjectDir,d);

                panel.innerHTML+=html;

                panel.setAttribute('data-loaded','1');

            },
            progressTimers:{},
            progressObjs:{},
            updateProgress:function(d){
                var pval = ((d.current/d.total)*100).toFixed(2)+'%',
                    id = 'projectProgress'+p.M.curProjectIdx,
                    bgid = 'projectProgressBG'+p.M.curProjectIdx,
                    bdid = 'projectProgressBD'+p.M.curProjectIdx,
                    objs = this.progressObjs[id];
                if (!objs) {
                    objs = this.progressObjs[id] = {
                        bgobj : document.getElementById(bgid),
                        bdobj : document.getElementById(bdid),
                        obj : document.getElementById(id)
                    };
                };

                objs.obj.className="proj_loader";
                objs.bdobj.innerHTML = pval;
                objs.bgobj.style.width=pval;
                if (d.current===d.total) {
                    clearTimeout(this.progressTimers[id]);
                    this.progressTimers[id] = setTimeout(function(){
                        objs.bgobj.style.width='0px';
                        objs.obj.className = "proj_loader hide";
                        objs.bdobj.innerHTML="";
                    },600);
                };
            }
        },
        _init:function(){
            $win.on(J.dataProject.id+'OnDataLoaded',function(e,d){
                if (!d.isOk) {
                    J.alert.show('Error on '+J.dataProject.id+'OnDataLoaded!');
                    console.log(d.err);
                    return;
                };
                p.project.fillProjects(d.data);
                p.C.switchWorspace(p.M.curWorkspaceId);
                
            }).on(J.dataProject.id+'OnSaved',function(e,d){
                p.project.onProjectSaved(d);
            }).on(pub.id+'OnSwitchWorkspace',function(e,d){
                p.project.filterByWorkspace();
            }).on(J.dataProject.id+'OnGetFiles',function(e,d){
                p.project.V.fillFiles(d);
                p.project.V.updateProgress(d);
                p.fileFilter.addDir(d);
            }).on(J.ftpUpload.id+'OnUploading',function(e){
                p.M.isFtpUploading = true;
            }).on(J.ftpUpload.id+'OnUploaded',function(e){
                p.M.isFtpUploading = false;
            });
        },
        _onLoad:function(){
            $('#fanMenu').fanmenu({
                'initAngle':30/*(Starting Angle in degree)*/,
                'angleDisplay' : 60/*(Displacement angle in degree)*/,
                'hideOnClick':true,
                'radius':100/*(circle radius in px)*/,
            });
            $('#fanMenuList').on('click','a',function(e){
                if (this.rel=="1") {
                    p.project.openDir();
                    return false;
                };
                return false;
            });
            //add a project folder
            $("#ipt_projectFolder").on('change',function(e){
                if (this.value.length>0) {
                    p.project.addProject(this.value);
                    //重置下value，否则用户添加A,接着删除A后无法再次添加A
                    this.value='';
                };
            });

            this.V.$projectNavList.on('click','.lnk_proj',function(e){
                p.project.selectProject({
                    'idx':this.rel,
                    'path':this.getAttribute('data-path')
                });
                return false;
            }).on('click','.btn_closeproj',function(e){
                p.project.removeProject({
                    'idx':this.rel,
                    'path':this.getAttribute('data-path')
                });
                return false;
            });

            //reload project
            $('#btnReloadProj').on('click',function(e){
                p.project.reload();
                return false;
            });

        },
        filterByWorkspace:function(){
            var items = J.dataProject.filterByWorkspace(p.M.curWorkspace.rootPath);
            //init folder for input[type='file']：NOTE：nw v5.0后支持
            $("#ipt_projectFolder").attr('nwworkingdir',p.M.curWorkspace.rootPath||'');
            this.fillProjects(items);
            this.initSelected();
            J.base.removeAppLoading(700);
        },
        //fill projects
        fillProjects:function(data){
            var len =0;
            this.V.$projectNavList.empty();
            this.V.$projectPanelList.empty();
            
            if ((len=data.length)==0) {
                pub.setProjectTip(this.V.tplNoProject);
                J.dbLocal[pub.id+'.curProjectIdx']=p.M.curProjectIdx = 0;
                return;
            };
            var html = [],htmlPanel=[];
            for (var i = len - 1; i >= 0; i--) {
                html.push(J.evalTpl(this.V.tplNavItem,data[i],true));
                htmlPanel.push(J.evalTpl(this.V.tplProjectPanel,data[i],true));
            };
            this.V.$projectNavList.append(html.join(''));
            this.V.$projectPanelList.append(htmlPanel.join(''));
        },
        initSelected:function(){
            var $obj = $('#project'+p.M.curProjectIdx);
            if ($obj.length===0) {
                $win.trigger(pub.id+'OnSelectProject',[{path:''}])
                return;
            };
            $obj.trigger('click');
        },
        selectProject:function(obj){
            p.M.curProject = obj;
            $("#projectItem"+p.M.curProjectIdx+","+'#projectPanel'+p.M.curProjectIdx).removeClass(g_clActive);
            J.dbLocal[pub.id+'.curProjectIdx']=p.M.curProjectIdx = parseInt(obj.idx);
            //Menu state
            $("#projectItem"+obj.idx).addClass(g_clActive);
            //Panel state
            var $panel = $('#projectPanel'+p.M.curProjectIdx);
            $panel.addClass(g_clActive);
            this.V.$activeProjectPanel = $panel;
            //Tip state
            pub.setProjectTip(obj.path);

            //folder watching
            J.base.fs.watch(obj.path,function(evt,fileName){
                p.project.onWatchingDir(evt,obj.path+fileName);
            });

            $win.trigger(pub.id+'OnSelectProject',[obj]);

            //检测是否已经读取
            if ($panel.attr('data-loaded')!=='1') {
                J.dataProject.getFiles(obj.path);
                return;
            };
        },
        removeProject:function(obj){

            if(p.M.isFtpUploading){
                J.alert.show('一会儿删好不？！当前项目有文件正在进行ftp上传！');
                return;
            };

            J.dataProject.removeByDir(obj.path);

        },//removeProject
        //reload the files of the project
        reload:function(){
            if(!p.M.curProject){
                return;
            }
            document.getElementById('projectPanel'+p.M.curProjectIdx).innerHTML = "";
            J.dataProject.getFiles(p.M.curProject.path);
        },//reload
        onProjectSaved:function(d){
            if (!d.isOk) {
                J.alert.show(d.err.toString());
                return;
            };
            if (!d.item) {
                return;
            };
            if(d.item.isDeleted){
                this.onProjectDeleted(d.item);
                return;
            };
            // add nav menu
            this.V.$projectNavList.append(J.evalTpl(this.V.tplNavItem,d.item,true));
            // add project panel
            this.V.$projectPanelList.append(J.evalTpl(this.V.tplProjectPanel,d.item,true));
        },
        onProjectDeleted:function(item){
            J.base.$win.trigger(pub.id+'onProjectDeleted');
            //更新下当前项目的id
            if (p.M.curProjectIdx===item.id) {
                p.M.curProjectIdx =0;
                return;
            };
            if(item.id<p.M.curProjectIdx){
                p.M.curProjectIdx--;
            };
        },
        openDir:function(d){
            $("#ipt_projectFolder").trigger('click',[d]);
        },
        addProject:function(_dir){

            J.dataProject.addDirAsProject(_dir);

        },
        onWatchingDir:function(evt,fileName){
            this.V.$activeProjectPanel.find("li").each(function(i,o){
                var data_path = o.getAttribute('data-path');
                if (data_path===fileName) {
                    $(o).addClass('file_changing');
                    return false;
                };
            });
        }//onWatchingDir
    };

    //项目扩展面板
    p.projectExt = {
        _init:function(){
            $('#btnCloseProjectExt').on('click',function(e){
                pub.hideExtPanel();
            });
            J.base.$win.on(pub.id+'onProjectDeleted',function(e){
                pub.hideExtPanel();
            });
        }
    };

    //文件筛选
    p.fileFilter = {
        ext:{},
        addDir:function(d){
            if( (!d.isOk) || (d.cntFile===0) ) return;
            this.addFiles(d.files);
            if(d.current===d.total){
                this.render();
                this.reset();
            }
        },
        addFiles:function(files){
            var fObj = null;
            for(var i=0,len=files.length;i<len;i++){
                fObj = files[i];
                if(!this.ext[fObj.ext]){
                    this.ext[fObj.ext] = 1;
                }else{
                    this.ext[fObj.ext] ++;
                }
            };//for
        },
        render:function(){
            var tpl = '<a href="javascript:;" data-ext="$" class="ff_item"><i class="icon_file icon_$" title="$">$<sup>%</sup></i></a>';
                tpl0 = '<a href="javascript:;" data-ext="all" class="ff_item ff_item_on"><i class="icon_file icon_all" title="all">all</i></a>',
                html = [];

            html.push(tpl0);

            for(var c in this.ext){
                html.push( tpl.replace(/\$/gi,c).replace(/\%/gi,this.ext[c]) );
            }
            p.project.V.$activeProjectPanel.find('.file_filter_bd').html(html.join(''));
        },
        reset:function(){
            this.ext = {};
            this.extCounter = [];
        },
        _onLoad:function(){
            $('#projectPanelList').on('click','.ff_item',function(e){
                var $item = $(this),
                    clOn = 'ff_item_on',
                    clHide = 'xhide',
                    extName = this.getAttribute('data-ext');
                if( $item.hasClass(clOn) ){
                    return false;
                }
                $item.siblings('.ff_item_on').removeClass(clOn);
                $item.addClass(clOn);

                if(extName==='all'){
                    p.project.V.$activeProjectPanel.find('li').removeClass(clHide)
                }else{
                    p.project.V.$activeProjectPanel.find('li').addClass(clHide)
                        .filter('[data-ext="'+extName+'"]').removeClass(clHide);
                }

            });
        }
    };

    /**
     * 添加一个工作项目
     * @param {String} _dir 目录
     */
    pub.addProject = function(_dir){
        p.project.addProject(_dir);
    };

    /**
     * 显示右侧扩展面板
     */
    pub.showExtPanel = function(extBoxId){
        $('#projectExt')
            .find('.ext_box')
            .addClass('hide')
            .filter('#'+extBoxId).removeClass('hide');
        $('#projectMain').addClass('project_hasext');
    };
    /**
     * 隐藏右侧扩展面版
     */
    pub.hideExtPanel = function(){
        $('#projectExt')
            .find('.ext_box').addClass('hide');
        $('#projectMain').removeClass('project_hasext');
    };
    /**
     * 获取指定文件的工作台，以便获取该文件的ftp配置信息
     * @param {String} filePath 文件路径
     */
    pub.getWorkspaceByFilePath = function(filePath){
        var wsObj = null,
            cnt = p.M.workspaceData.length;

        for (var i = cnt - 1; i >= 0; i--) {
            if ( filePath.indexOf(p.M.workspaceData[i].rootPath)===0 ) {
                wsObj = p.M.workspaceData[i];
                break;
            };
        };
        return wsObj;
    };
    /**
     * 获取当前激活的项目的文件列表
     */
    pub.getFilesOfActiveProject = function(){
        var items = [];
        p.project.V.$activeProjectPanel.find('li').each(function(i,o){
            items.push({
                'id':o.getAttribute('data-id'),
                'path':o.getAttribute('data-path'),
                'name':o.getAttribute('data-name')
            });
        });
        return items;
    };
    /**
     * 设置提示信息
     */
    pub.setProjectTip = function(txt){
        document.getElementById('projectTip').innerHTML=txt;
    };

});
J(function($,p,pub){
	pub.id="folderDragdrop";

	p.C = {
		_init:function(){
			// prevent default behavior from changing page on dropped file
			window.ondragover = function(e) { e.preventDefault(); return false };
			window.ondrop = function(e) { e.preventDefault(); return false };

			var holder = document.getElementById('bodyHome');
			holder.ondragover = function () { this.className = 'dragover'; return false; };
			holder.ondragend = function () { this.className = ''; return false; };
			holder.ondrop = function (e) {
				e.preventDefault();
				this.className = '';
				if (e.dataTransfer.files.length===0) {
					return false;
				};
				var filePath = e.dataTransfer.files[0].path;

				J.base.fs.lstat(filePath,function(err,stat){
					if (err) {
						J.alert.show('Error on reading path:'+filePath+'!'+err);
						return;
					};
					if (stat.isDirectory()) {
						J.home.addProject(filePath);
					}else{
						J.home.addProject(J.base.getFileRootPath(filePath));
					};
				});

				return false;
			};
		}
	};
});
J(function($,p,pub){
	pub.id = "file";
	pub.cache={};
	var cprocess = require('child_process');
	p.V={
		$curFile:null,
		render:function(fileObj){
			if (this.$curFile) {
				this.$curFile.removeClass('active');
			};
			this.$curFile = $('#'+fileObj.id).addClass('active');
			J.session[pub.id+'.curFileId'] = fileObj.id;
			J.home.setProjectTip(fileObj.path);
		}
	};
	p.C = {
		_init:function(){

			J.base.$win.on(J.dataProject.id+'OnGetFiles',function(e,d){
				if ( (!d.isOk) || d.cntFile===0 ) {
					return;
				};
				p.C.cacheFiles(d.files,d.cntFile);
				p.C.assertCurrentFile();
			}).on(J.home.id+'OnSelectProject',function(e,d){
				p.C.assertCurrentFile();
			});

			$("#projectPanelList").on('click','li',function(e){
				var id=this.getAttribute('data-id'),
					fileObj = J.file.cache[id];
				p.V.render(fileObj);
				J.ftpUpload.showUploadPanel();
				return false;
			});

		},//init
		openFile:function(filePath){
			//系统默认打开方式
			J.base.gui.Shell.openItem(filePath);
		},//openFile
		editFile:function(filePath){
			//获取配置的程序
			var exe = J.dataSetting.getExeByFile(filePath);
			if ( (!exe) || (exe.length==0) ) {
				if (!window.confirm(filePath+'\r\n文件编辑器没有设置哦亲！调用系统默认程序打开文件？')) {
					return;
				};
				this.openFile(filePath);
				return;
			};
			//reference:http://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback
			var child = cprocess.execFile(exe,[filePath],function(err,stdout,stderr){
				//console.info('stdout',stdout);
				//console.info('stderr',stderr);
				if (err!==null) {
					J.alert.show(err.toString());
				};
			});
			//console.info('child',child);
		},//editFile
		assertCurrentFile:function(){
			var fid = J.session[pub.id+'.curFileId'];
			if (!fid) {
				//J.home.hideExtPanel();
				return;
			};
			var $f = $('#'+fid);
			if ($f.length===0) {
				//J.home.hideExtPanel();
				return;
			};
			$f.trigger('click');

		},
		cacheFiles:function(files,len){
			for (var i = len - 1; i >= 0; i--) {
				pub.cache[files[i].id]=files[i];
			};
		}
	};

	p.contextMenu = {
		_init:function(){
			// Create an empty menu
			var menu = new J.base.gui.Menu();
			// Add some items
			menu.append(new J.base.gui.MenuItem({ label: '编辑' ,click:function(){p.contextMenu.onClick(1);}}));
			menu.append(new J.base.gui.MenuItem({ label: '打开' ,click:function(){p.contextMenu.onClick(2);}}));
			menu.append(new J.base.gui.MenuItem({ type: 'separator' }));
			menu.append(new J.base.gui.MenuItem({ label: '打开所在文件夹' ,click:function(){p.contextMenu.onClick(3);}}));

			this.menu = menu;

			$("#projectPanelList").on('contextmenu','li',function(e){
				var id=this.getAttribute('data-id'),
					fileObj = J.file.cache[id];
				p.contextMenu.show(e.clientX+5,e.clientY+5,fileObj);
				return false;
			});

		},
		onClick:function(actId){
			switch(actId){
				case 1:
					p.C.openFile(this.menu.rel.path);
				break;
				case 2:
					p.C.editFile(this.menu.rel.path);
				break;
				case 3:
					J.base.openFileInFolder(this.menu.rel.path);
				break;
			};//switch
		},
		show:function(x,y,rel){
			this.menu.rel = rel;
			// Popup as context menu
			this.menu.popup(x, y);
		}
	};

});
J(function($,p,pub){
    pub.id="mail";

    p.V = {
        $d:$('#popPublishList'),
        show:function(files){
            this.$d.modal('show');
            var html = [],
                domPFT = document.getElementById('publishFileTxt'),
                len = files.length;
            for (var i = len - 1; i >= 0; i--) {
                html.push(files[i].publishPath);
            };
            domPFT.innerHTML = html.join('\r\n').replace(/\\/gi,'/');
            domPFT.select();
        },
        _onLoad:function(){
            this.$d.modal({
                backdrop:'static',
                show:false
            }).on("hide",function(){
                p.V.reset();
            });

            $('#btnUpdPublishList').on('click',function(e){
                p.C.preparePublish();
            });

        },
        reset:function(){
            document.getElementById('publishFileTxt').innerHTML="";
        }
    };

    p.C = {
        _onLoad:function(){
            $('#ipt_publishPrefix').on('change',function(e){
                p.C.processPaths();
                p.V.show(p.C.files);
            });
        },
        preparePublish:function(){
            var items = J.ftpUpload.getUploadedFiles();
            if (items.length===0) {
                J.alert.show('没有任何待提单文件！');
                return;
            };

            this.files = items;
            //获取workspace
            var wsObj = J.home.getWorkspaceByFilePath(items[0].path);
            this.workspace = wsObj = wsObj || {'rootPath':'','remotePath':''};
            document.getElementById('ipt_publishPrefix').value = wsObj.remotePath;
            //处理成发布地址
            this.processPaths();
            p.V.show(this.files);
        },
        processPaths:function(){
            var remotePathPrefix = document.getElementById('ipt_publishPrefix').value,
                rootPath = this.workspace.rootPath;

            var len = this.files.length;
            for (var i = len - 1; i >= 0; i--) {
                this.files[i].publishPath = remotePathPrefix+this.files[i].path.replace(rootPath,'');
            };

        }
    };

});