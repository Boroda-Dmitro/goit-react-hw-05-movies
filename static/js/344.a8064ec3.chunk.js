"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[344],{344:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(861),a=r(439),c=r(757),s=r.n(c),o=r(255),u=r(791),i=r(689),f="Home_title__FBeIP",p=r(155),l=r(966),v=r(184),h=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1],h=(0,u.useState)(!1),d=(0,a.Z)(h,2),m=d[0],b=d[1],w=(0,u.useState)(!1),g=(0,a.Z)(w,2),x=g[0],k=g[1],y=(0,i.TH)();return(0,u.useEffect)((function(){try{k(!0);var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.wr)();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(m){m.response&&m.response.status,b(!0)}finally{k(!1)}}),[]),(0,v.jsxs)(v.Fragment,{children:[x&&(0,v.jsx)(l.a,{}),m&&(0,v.jsx)("h2",{className:f,children:"No data from services"}),(0,v.jsx)("h2",{className:f,children:"Trending today"}),r.length>0&&(0,v.jsx)(p.Z,{movies:r,state:{from:y}})]})}},255:function(e,t,r){r.d(t,{Hx:function(){return f},Mc:function(){return u},bI:function(){return p},uV:function(){return i},wr:function(){return o}});var n=r(861),a=r(757),c=r.n(a),s=r(243),o=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day","efcd079eaa7382b8a49b8fa3c0261e85",t=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,s.Z.get("".concat("https://api.themoviedb.org/3/trending/all/day","?").concat(t));case 6:return r=e.sent,e.abrupt("return",r.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),"efcd079eaa7382b8a49b8fa3c0261e85",n=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85"}),e.prev=3,e.next=6,s.Z.get("".concat(r,"?").concat(n));case 6:return a=e.sent,e.abrupt("return",a.data);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie","efcd079eaa7382b8a49b8fa3c0261e85",r=new URLSearchParams({api_key:"efcd079eaa7382b8a49b8fa3c0261e85",query:t}),e.prev=3,e.next=6,s.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 6:return n=e.sent,e.abrupt("return",n.data.results);case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},155:function(e,t,r){r.d(t,{Z:function(){return s}});var n="MoviesList_list__0Owr9",a=r(87),c=r(184),s=function(e){var t=e.movies,r=e.state;return(0,c.jsx)("ul",{className:n,children:t.map((function(e){var t,n=null!==(t=e.title)&&void 0!==t?t:e.name;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:r.from},children:n})},e.id)}))})}}}]);
//# sourceMappingURL=344.a8064ec3.chunk.js.map