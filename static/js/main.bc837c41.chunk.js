(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{21:function(n,t,e){},22:function(n,t,e){},42:function(n,t,e){"use strict";e.r(t);var c=e(2),u=e.n(c),r=e(16),i=e.n(r),o=(e(21),e(6)),a=(e(22),e(3)),s=e.n(a),d=e(0),j=function(){var n=Object(c.useRef)(null),t=Object(c.useState)([{}]),e=Object(o.a)(t,2),u=e[0],r=e[1],i=Object(c.useState)(!1),a=Object(o.a)(i,2),j=a[0],b=a[1],f=Object(c.useState)(""),l=Object(o.a)(f,2),h=l[0],O=l[1],v="https://frozen-brook-01952.herokuapp.com",p=function(){s.a.get(v+"/users"+window.location.search).then((function(n){return r(n.data)}))};Object(c.useEffect)((function(){p()}),[]);var x=function(n){O(n.currentTarget.value)},g=function(n){b(n)};return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"text",ref:n}),u.map((function(n){return Object(d.jsx)("div",{children:j?Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{defaultValue:n.name,onChange:x}),Object(d.jsx)("button",{onClick:function(){return t=n._id,e=h,void s.a.put(v+"/users",{id:t,name:e}).then((function(n){return p()})).then((function(n){return g(!1)}));var t,e},children:"SAVE"})]},n._id+"b"):Object(d.jsx)("div",{children:Object(d.jsxs)("span",{onDoubleClick:function(){return g(!0)},children:["Name:",n.name,Object(d.jsx)("button",{onClick:function(){return t=n._id,void s.a.delete(v+"/users/".concat(t)).then((function(n){return p()}));var t},children:"X"})]})},n._id+"a")},n._id)})),Object(d.jsx)("button",{onClick:function(){var t;s.a.post(v+"/users",{name:null===(t=n.current)||void 0===t?void 0:t.value}).then((function(n){return p()}))},children:"Add user"})]})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,43)).then((function(t){var e=t.getCLS,c=t.getFID,u=t.getFCP,r=t.getLCP,i=t.getTTFB;e(n),c(n),u(n),r(n),i(n)}))};i.a.render(Object(d.jsx)(u.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.bc837c41.chunk.js.map