"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[987],{9987:function(A,n,t){t.r(n),t.d(n,{default:function(){return J}});var e,r,c,a,s,i,d,u,o,v=t(9439),l=t(409),p=t(7689),f=t(2791),b=t(3630),x=t(168),Z=t(5706),h=t(1087),j=(0,Z.Z)(h.rU)(e||(e=(0,x.Z)(["\n  text-decoration: none;\n  border-radius: 4px;\n  margin-left: 40px;\n  margin-bottom: 20px;\n  padding: 5px 20px;\n  background-color: teal;\n  color: #fff;\n\n  &:hover {\n    background-color: rgb(1, 180, 180);\n  }\n"]))),w=t(184),z=function(A){var n=A.to,t=A.children;return(0,w.jsx)(j,{to:n,children:t})},W=t(3357),O=Z.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  margin-top: 20px;\n  margin-left: 40px;\n"]))),D=Z.Z.div(c||(c=(0,x.Z)(["\n  margin-left: 20px;\n"]))),M=Z.Z.p(a||(a=(0,x.Z)(["\n  width: 95%;\n  text-align: justify;\n"]))),m=Z.Z.div(s||(s=(0,x.Z)(["\n  display: flex;\n"]))),R=Z.Z.div(i||(i=(0,x.Z)(["\n  margin-right: 10px;\n"]))),E=function(A){var n=A.movie;return(0,w.jsxs)(O,{children:[n.poster_path?(0,w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(n.poster_path),alt:n.title,width:"250"}):(0,w.jsx)("img",{src:W,alt:n.title,width:"250",height:"375"}),(0,w.jsxs)(D,{children:[(0,w.jsx)("h2",{children:n.title}),(0,w.jsxs)("p",{children:[(0,w.jsx)("b",{children:"User score: "}),n.vote_average]}),(0,w.jsxs)(M,{children:[(0,w.jsx)("b",{children:"Overview: "}),n.overview]}),(0,w.jsx)("p",{children:(0,w.jsx)("b",{children:"Genres: "})}),(0,w.jsx)(m,{children:n.genres.map((function(A){return(0,w.jsx)(R,{children:A.name},A.id)}))})]})]})},y=Z.Z.p(d||(d=(0,x.Z)(["\n  margin-left: 50px;\n"]))),q=Z.Z.ul(u||(u=(0,x.Z)(["\n  display: flex;\n  font-weight: 700;\n\n  & :first-of-type {\n    margin: 0 15px;\n  }\n"]))),S=(0,Z.Z)(h.OL)(o||(o=(0,x.Z)(["\n  text-decoration: none;\n  color: rgba(86, 141, 300, 1);\n\n  &.active {\n    color: #fff;\n  }\n"]))),I=function(){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(y,{children:(0,w.jsx)("b",{children:"Additional information:"})}),(0,w.jsxs)(q,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(S,{to:"cast",children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(S,{to:"reviews",children:"Reviews"})})]}),(0,w.jsx)(f.Suspense,{fallback:(0,w.jsx)(b.Z,{}),children:(0,w.jsx)(p.j3,{})})]})},J=function(){var A,n,t=(0,f.useState)(null),e=(0,v.Z)(t,2),r=e[0],c=e[1],a=(0,f.useState)(!1),s=(0,v.Z)(a,2),i=s[0],d=s[1],u=(0,p.UO)().movieId,o=(0,p.TH)(),x=(0,f.useRef)(null!==(A=null===(n=o.state)||void 0===n?void 0:n.from)&&void 0!==A?A:"/");return(0,f.useEffect)((function(){d(!0),(0,l.WL)(u).then((function(A){c(A),d(!1)})).catch((function(A){return console.error(A)}))}),[u]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(z,{to:x.current,children:"Go back"}),r&&(0,w.jsx)(E,{movie:r}),r&&(0,w.jsx)(I,{}),i&&(0,w.jsx)(b.Z,{})]})}},409:function(A,n,t){t.d(n,{WL:function(){return o},fd:function(){return v},gH:function(){return u},tx:function(){return l},z5:function(){return d}});var e=t(5861),r=t(4687),c=t.n(r),a=t(1243),s="https://api.themoviedb.org/3/",i={method:"GET",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTZlYWZhMmEzOTE3ZDU3ZGQzMGRhOTZhOWQxOTg5MCIsInN1YiI6IjY0ODgzZjcyZTI3MjYwMDBjOTMyMjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XdPSLtTSAZv4fw0M0gYehYEL9mjnuAiltEwvVoL-DaE",accept:"application/json"}},d=function(){var A=(0,e.Z)(c().mark((function A(){var n;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.Z.get("".concat(s,"trending/movie/day?language=en-US"),i);case 2:return n=A.sent,A.abrupt("return",n.data);case 4:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),u=function(){var A=(0,e.Z)(c().mark((function A(n){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.Z.get("".concat(s,"search/movie?query=").concat(n,"&page=1"),i);case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),o=function(){var A=(0,e.Z)(c().mark((function A(n){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.Z.get("".concat(s,"movie/").concat(n),i);case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),v=function(){var A=(0,e.Z)(c().mark((function A(n){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.Z.get("".concat(s,"movie/").concat(n,"/credits"),i);case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}(),l=function(){var A=(0,e.Z)(c().mark((function A(n){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,a.Z.get("".concat(s,"movie/").concat(n,"/reviews"),i);case 2:return t=A.sent,A.abrupt("return",t.data);case 4:case"end":return A.stop()}}),A)})));return function(n){return A.apply(this,arguments)}}()},3357:function(A){A.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABkAAD/4QMpaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjAtYzA2MCA2MS4xMzQ3NzcsIDIwMTAvMDIvMTItMTc6MzI6MDAgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4REQ0NzJGMDNEOEExMUUzQTg5NjlERDAzNDkzOTZCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4REQ0NzJGMTNEOEExMUUzQTg5NjlERDAzNDkzOTZCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhERDQ3MkVFM0Q4QTExRTNBODk2OUREMDM0OTM5NkJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhERDQ3MkVGM0Q4QTExRTNBODk2OUREMDM0OTM5NkJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+4ADkFkb2JlAGTAAAAAAf/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEB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"}}]);
//# sourceMappingURL=987.eba402c4.chunk.js.map