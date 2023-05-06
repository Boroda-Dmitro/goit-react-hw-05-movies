"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[911],{911:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),o=r.n(c),u=r(255),s=r(791),i=r(87),p=r(689),f=r(596),l="Movies_input__mpzwV",v="Movies_button__sRc5b",h=r(184),d=function(){var e=(0,i.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],d=(0,s.useState)([]),m=(0,a.Z)(d,2),b=m[0],g=m[1],w=(0,s.useState)(""),x=(0,a.Z)(w,2),k=x[0],y=x[1],_=(0,p.TH)(),Z=r.get("query");(0,s.useEffect)((function(){if(Z){var e=function(){var e=(0,n.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.bI)(Z);case 3:if(0!==(t=e.sent).length){e.next=6;break}return e.abrupt("return",f.Am.error("No movies found for '".concat(Z,"'")));case 6:g(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[Z]);return(0,h.jsxs)("div",{children:[(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===k)return f.Am.error("Please enter a movie name");c({query:k})},children:[(0,h.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",onChange:function(e){y(e.target.value.trim()),""===e.target.value&&c({})},value:k,className:l}),(0,h.jsx)("button",{type:"submit",className:v,children:"Search"})]}),(0,h.jsx)("ul",{children:b.length>0&&Z&&b.map((function(e){var t,r=null!==(t=e.title)&&void 0!==t?t:e.name;return(0,h.jsx)("li",{children:(0,h.jsx)(i.rU,{to:"/movies/".concat(e.id),state:{from:_},children:r})},e.id)}))})]})}},255:function(e,t,r){r.d(t,{Hx:function(){return p},Mc:function(){return s},bI:function(){return f},uV:function(){return i},wr:function(){return u}});var n=r(861),a=r(757),c=r.n(a),o=r(243),u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day","efcd079eaa7382b8a49b8fa3c0261e85",t=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,o.Z.get("".concat("https://api.themoviedb.org/3/trending/all/day","?").concat(t));case 6:return r=e.sent,e.abrupt("return",r.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,o.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,o.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,o.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","efcd079eaa7382b8a49b8fa3c0261e85",r=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85",query:t}),e.prev=3,e.next=6,o.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 6:return n=e.sent,e.abrupt("return",n.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=911.c72a72e9.chunk.js.map