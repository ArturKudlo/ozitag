(this.webpackJsonpozitag=this.webpackJsonpozitag||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),s=n.n(c),o=(n(35),n(36),n(9)),i=n.n(o),l=n(24),u=n(13),j=n(2),d=n(1),p=function(){var e=Object(j.g)();Object(a.useEffect)((function(){localStorage.getItem("loginData")&&e.push("/")}),[]);var t=function(){var t=Object(u.a)(i.a.mark((function t(n){var a,r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=JSON.stringify(Object(l.a)(Object(l.a)({},n),{},{clientId:1})),t.prev=1,t.next=4,fetch("https://tager.dev.ozitag.com/api/auth/user",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:a});case 4:return r=t.sent,t.next=7,r.json();case 7:if(c=t.sent,r.ok){t.next=10;break}throw new Error(c.message);case 10:console.log({data:c,response:r}),localStorage.setItem("loginData",JSON.stringify(c.data)),e.push("/"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),alert(t.t0.message||"Something went wrong");case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Please, authorize!"}),Object(d.jsx)(f,{authenticate:t})]})},h=n(16),b=(n(43),function(e){var t;return e?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||(t="Invalid email address"):t="Email required",t}),m=function(e){var t;return e.length<4&&(t="Minimum 4 symbols required"),t},f=function(e){var t=e.authenticate;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(h.c,{initialValues:{email:"",password:""},onSubmit:function(){var e=Object(u.a)(i.a.mark((function e(n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,n=e.touched;e.isValidating;return Object(d.jsxs)(h.b,{className:"form__content",children:[Object(d.jsx)(h.a,{className:"form__content--email btn",name:"email",type:"email",placeholder:"email",validate:b}),t.email&&n.email&&Object(d.jsx)("div",{className:"form__error",children:t.email}),Object(d.jsx)(h.a,{className:"form__content--password btn",name:"password",type:"password",placeholder:"password",validate:m}),t.password&&n.password&&Object(d.jsx)("div",{className:"form__error",children:t.password}),Object(d.jsx)("button",{className:"form__content--submit btn",type:"submit",children:"Submit"})]})}})})},g=n(30),O=(n(44),function(){var e=Object(a.useState)(),t=Object(g.a)(e,2),n=t[0],r=t[1],c=Object(j.g)();Object(a.useEffect)((function(){var e=localStorage.getItem("loginData");e?function(){var t=Object(u.a)(i.a.mark((function t(){var n,a,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=JSON.parse(e),t.next=4,fetch("https://tager.dev.ozitag.com/api/tager/user/profile",{method:"GET",headers:{Accept:"application/json",Authorization:"".concat(n.tokenType," ").concat(n.accessToken)}});case 4:return a=t.sent,t.next=7,a.json();case 7:if(c=t.sent,a.ok){t.next=10;break}throw new Error(c.message);case 10:console.log({data:c,response:a}),r(c.data),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),s(),alert(t.t0.message||"Something went wrong");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}()():c.push("/login")}),[]);var s=function(){localStorage.removeItem("loginData"),c.push("/login")};return Object(d.jsxs)("div",{className:"profile__content",children:[Object(d.jsx)("h2",{children:"Page Profile"}),Object(d.jsxs)("h4",{children:["Name: ",null===n||void 0===n?void 0:n.name]}),Object(d.jsxs)("h4",{children:["Email: ",null===n||void 0===n?void 0:n.email]}),Object(d.jsx)("button",{className:"profile__content--logout",onClick:s,children:"Log Out"})]})}),x=n(17);var v=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(x.a,{children:Object(d.jsxs)(j.d,{children:[Object(d.jsx)(j.b,{exact:!0,path:"/",children:Object(d.jsx)(O,{})}),Object(d.jsx)(j.b,{exact:!0,path:"/login",children:Object(d.jsx)(p,{})}),Object(d.jsx)(j.b,{path:"*",children:Object(d.jsx)(j.a,{to:"/"})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),w()}},[[45,1,2]]]);
//# sourceMappingURL=main.93cc175f.chunk.js.map