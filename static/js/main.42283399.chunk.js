(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={backdrop:"ErrorModal_backdrop__1QiTP",modal:"ErrorModal_modal__2RAK5",header:"ErrorModal_header__LVNhs",content:"ErrorModal_content__3Np2G",actions:"ErrorModal_actions__2cUmg"}},,,,,function(e,t,n){e.exports={card:"Card_card__1te4P"}},function(e,t,n){e.exports={button:"Button_button__2lgkF"}},function(e,t,n){e.exports={input:"AddUser_input__GbByL"}},function(e,t,n){e.exports={users:"UserList_users__1Xwu2"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(7),r=n.n(s),a=(n(17),n(12)),i=n(2),o=n(8),l=n.n(o),d=n(0),u=function(e){return Object(d.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=function(e){return Object(d.jsx)("button",{className:b.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},h=n(10),O=n.n(h),x=n(3),p=n.n(x),g=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:p.a.backdrop,onClick:e.onClickClose}),Object(d.jsxs)(u,{className:p.a.modal,children:[Object(d.jsx)("header",{className:p.a.header,children:Object(d.jsx)("h2",{children:e.title})}),Object(d.jsx)("div",{className:p.a.content,children:Object(d.jsx)("p",{children:e.message})}),Object(d.jsx)("footer",{className:p.a.actions,children:Object(d.jsx)(m,{onClick:e.onClickClose,children:"Close"})})]})]})},_=function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),l=o[0],j=o[1],b=Object(c.useState)(),h=Object(i.a)(b,2),x=h[0],p=h[1];return Object(d.jsxs)(c.Fragment,{children:[x&&Object(d.jsx)(g,{title:x.title,message:x.message,onClickClose:function(){p(null)}}),Object(d.jsx)(u,{className:O.a.input,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==l.trim().length&&0!==s.trim().length?+l<0?p({title:"Invalid Age",message:"Please enter a valid age (>0)"}):(e.onAddUser(s,l),r(""),j("")):p({title:"Invalid Input",message:"Please enter a valid input (Username or Age missing)"})},children:[Object(d.jsx)("label",{htmlFor:"username",children:"Username"}),Object(d.jsx)("input",{type:"text",id:"username",value:s,onChange:function(e){r(e.target.value)}}),Object(d.jsx)("label",{htmlFor:"Age",children:"Age (in years)"}),Object(d.jsx)("input",{type:"number",id:"Age",value:l,onChange:function(e){j(e.target.value)}}),Object(d.jsx)(m,{type:"submit",children:"Add User"})]})})]})},f=n(11),v=n.n(f),C=function(e){return Object(d.jsx)(u,{className:v.a.users,children:Object(d.jsx)("ul",{children:e.users.map((function(e){return Object(d.jsxs)("li",{children:[e.name," (",e.age," years old)"]},e.id)}))})})};var k=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(_,{onAddUser:function(e,t){s((function(n){return[].concat(Object(a.a)(n),[{name:e,age:t,id:Math.random().toString()}])}))}}),Object(d.jsx)(C,{users:n})]})};r.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.42283399.chunk.js.map