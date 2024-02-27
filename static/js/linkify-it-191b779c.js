import{r as v,a as C,b as k,c as w}from"./uc.micro-740ead6f.js";var p,z;function Z(){return z||(z=1,p=function(_){var t={};_=_||{},t.src_Any=v().source,t.src_Cc=C().source,t.src_Z=k().source,t.src_P=w.source,t.src_ZPCc=[t.src_Z,t.src_P,t.src_Cc].join("|"),t.src_ZCc=[t.src_Z,t.src_Cc].join("|");var r="[><｜]";return t.src_pseudo_letter="(?:(?!"+r+"|"+t.src_ZPCc+")"+t.src_Any+")",t.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",t.src_auth="(?:(?:(?!"+t.src_ZCc+"|[@/\\[\\]()]).)+@)?",t.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",t.src_host_terminator="(?=$|"+r+"|"+t.src_ZPCc+")(?!"+(_["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+t.src_ZPCc+"))",t.src_path="(?:[/?#](?:(?!"+t.src_ZCc+"|"+r+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+t.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+t.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+t.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+t.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+t.src_ZCc+"|[']).)+\\'|\\'(?="+t.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+t.src_ZCc+"|[.]|$)|"+(_["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+t.src_ZCc+"|$)|;(?!"+t.src_ZCc+"|$)|\\!+(?!"+t.src_ZCc+"|[!]|$)|\\?(?!"+t.src_ZCc+"|[?]|$))+|\\/)?",t.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',t.src_xn="xn--[a-z0-9\\-]{1,59}",t.src_domain_root="(?:"+t.src_xn+"|"+t.src_pseudo_letter+"{1,63})",t.src_domain="(?:"+t.src_xn+"|(?:"+t.src_pseudo_letter+")|(?:"+t.src_pseudo_letter+"(?:-|"+t.src_pseudo_letter+"){0,61}"+t.src_pseudo_letter+"))",t.src_host="(?:(?:(?:(?:"+t.src_domain+")\\.)*"+t.src_domain+"))",t.tpl_host_fuzzy="(?:"+t.src_ip4+"|(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%)))",t.tpl_host_no_ip_fuzzy="(?:(?:(?:"+t.src_domain+")\\.)+(?:%TLDS%))",t.src_host_strict=t.src_host+t.src_host_terminator,t.tpl_host_fuzzy_strict=t.tpl_host_fuzzy+t.src_host_terminator,t.src_host_port_strict=t.src_host+t.src_port+t.src_host_terminator,t.tpl_host_port_fuzzy_strict=t.tpl_host_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_port_no_ip_fuzzy_strict=t.tpl_host_no_ip_fuzzy+t.src_port+t.src_host_terminator,t.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+t.src_ZPCc+"|>|$))",t.tpl_email_fuzzy="(^|"+r+'|"|\\(|'+t.src_ZCc+")("+t.src_email_name+"@"+t.tpl_host_fuzzy_strict+")",t.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_fuzzy_strict+t.src_path+")",t.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+t.src_ZPCc+"))((?![$+<=>^`|｜])"+t.tpl_host_port_no_ip_fuzzy_strict+t.src_path+")",t}),p}function d(_){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(r){r&&Object.keys(r).forEach(function(e){_[e]=r[e]})}),_}function l(_){return Object.prototype.toString.call(_)}function E(_){return l(_)==="[object String]"}function j(_){return l(_)==="[object Object]"}function b(_){return l(_)==="[object RegExp]"}function x(_){return l(_)==="[object Function]"}function R(_){return _.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var g={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function $(_){return Object.keys(_||{}).reduce(function(t,r){return t||g.hasOwnProperty(r)},!1)}var S={"http:":{validate:function(_,t,r){var e=_.slice(t);return r.re.http||(r.re.http=new RegExp("^\\/\\/"+r.re.src_auth+r.re.src_host_port_strict+r.re.src_path,"i")),r.re.http.test(e)?e.match(r.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(_,t,r){var e=_.slice(t);return r.re.no_http||(r.re.no_http=new RegExp("^"+r.re.src_auth+"(?:localhost|(?:(?:"+r.re.src_domain+")\\.)+"+r.re.src_domain_root+")"+r.re.src_port+r.re.src_host_terminator+r.re.src_path,"i")),r.re.no_http.test(e)?t>=3&&_[t-3]===":"||t>=3&&_[t-3]==="/"?0:e.match(r.re.no_http)[0].length:0}},"mailto:":{validate:function(_,t,r){var e=_.slice(t);return r.re.mailto||(r.re.mailto=new RegExp("^"+r.re.src_email_name+"@"+r.re.src_host_strict,"i")),r.re.mailto.test(e)?e.match(r.re.mailto)[0].length:0}}},A="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",P="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function O(_){_.__index__=-1,_.__text_cache__=""}function L(_){return function(t,r){var e=t.slice(r);return _.test(e)?e.match(_)[0].length:0}}function y(){return function(_,t){t.normalize(_)}}function u(_){var t=_.re=Z()(_.__opts__),r=_.__tlds__.slice();_.onCompile(),_.__tlds_replaced__||r.push(A),r.push(t.src_xn),t.src_tlds=r.join("|");function e(i){return i.replace("%TLDS%",t.src_tlds)}t.email_fuzzy=RegExp(e(t.tpl_email_fuzzy),"i"),t.link_fuzzy=RegExp(e(t.tpl_link_fuzzy),"i"),t.link_no_ip_fuzzy=RegExp(e(t.tpl_link_no_ip_fuzzy),"i"),t.host_fuzzy_test=RegExp(e(t.tpl_host_fuzzy_test),"i");var c=[];_.__compiled__={};function a(i,s){throw new Error('(LinkifyIt) Invalid schema "'+i+'": '+s)}Object.keys(_.__schemas__).forEach(function(i){var s=_.__schemas__[i];if(s!==null){var h={validate:null,link:null};if(_.__compiled__[i]=h,j(s)){b(s.validate)?h.validate=L(s.validate):x(s.validate)?h.validate=s.validate:a(i,s),x(s.normalize)?h.normalize=s.normalize:s.normalize?a(i,s):h.normalize=y();return}if(E(s)){c.push(i);return}a(i,s)}}),c.forEach(function(i){_.__compiled__[_.__schemas__[i]]&&(_.__compiled__[i].validate=_.__compiled__[_.__schemas__[i]].validate,_.__compiled__[i].normalize=_.__compiled__[_.__schemas__[i]].normalize)}),_.__compiled__[""]={validate:null,normalize:y()};var o=Object.keys(_.__compiled__).filter(function(i){return i.length>0&&_.__compiled__[i]}).map(R).join("|");_.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","i"),_.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+t.src_ZPCc+"))("+o+")","ig"),_.re.schema_at_start=RegExp("^"+_.re.schema_search.source,"i"),_.re.pretest=RegExp("("+_.re.schema_test.source+")|("+_.re.host_fuzzy_test.source+")|@","i"),O(_)}function q(_,t){var r=_.__index__,e=_.__last_index__,c=_.__text_cache__.slice(r,e);this.schema=_.__schema__.toLowerCase(),this.index=r+t,this.lastIndex=e+t,this.raw=c,this.text=c,this.url=c}function m(_,t){var r=new q(_,t);return _.__compiled__[r.schema].normalize(r,_),r}function n(_,t){if(!(this instanceof n))return new n(_,t);t||$(_)&&(t=_,_={}),this.__opts__=d({},g,t),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=d({},S,_),this.__compiled__={},this.__tlds__=P,this.__tlds_replaced__=!1,this.re={},u(this)}n.prototype.add=function(t,r){return this.__schemas__[t]=r,u(this),this};n.prototype.set=function(t){return this.__opts__=d(this.__opts__,t),this};n.prototype.test=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return!1;var r,e,c,a,o,i,s,h,f;if(this.re.schema_test.test(t)){for(s=this.re.schema_search,s.lastIndex=0;(r=s.exec(t))!==null;)if(a=this.testSchemaAt(t,r[2],s.lastIndex),a){this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+a;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(h=t.search(this.re.host_fuzzy_test),h>=0&&(this.__index__<0||h<this.__index__)&&(e=t.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=e.index+e[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=e.index+e[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(f=t.indexOf("@"),f>=0&&(c=t.match(this.re.email_fuzzy))!==null&&(o=c.index+c[1].length,i=c.index+c[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&i>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=i))),this.__index__>=0};n.prototype.pretest=function(t){return this.re.pretest.test(t)};n.prototype.testSchemaAt=function(t,r,e){return this.__compiled__[r.toLowerCase()]?this.__compiled__[r.toLowerCase()].validate(t,e,this):0};n.prototype.match=function(t){var r=0,e=[];this.__index__>=0&&this.__text_cache__===t&&(e.push(m(this,r)),r=this.__last_index__);for(var c=r?t.slice(r):t;this.test(c);)e.push(m(this,r)),c=c.slice(this.__last_index__),r+=this.__last_index__;return e.length?e:null};n.prototype.matchAtStart=function(t){if(this.__text_cache__=t,this.__index__=-1,!t.length)return null;var r=this.re.schema_at_start.exec(t);if(!r)return null;var e=this.testSchemaAt(t,r[2],r[0].length);return e?(this.__schema__=r[2],this.__index__=r.index+r[1].length,this.__last_index__=r.index+r[0].length+e,m(this,0)):null};n.prototype.tlds=function(t,r){return t=Array.isArray(t)?t:[t],r?(this.__tlds__=this.__tlds__.concat(t).sort().filter(function(e,c,a){return e!==a[c-1]}).reverse(),u(this),this):(this.__tlds__=t.slice(),this.__tlds_replaced__=!0,u(this),this)};n.prototype.normalize=function(t){t.schema||(t.url="http://"+t.url),t.schema==="mailto:"&&!/^mailto:/i.test(t.url)&&(t.url="mailto:"+t.url)};n.prototype.onCompile=function(){};var D=n;export{D as l};
