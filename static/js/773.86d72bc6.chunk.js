"use strict";(self.webpackChunkreact01=self.webpackChunkreact01||[]).push([[773,742],{9773:function(e,s,n){n.r(s),n.d(s,{default:function(){return x}});var a=n(2791),i=n(7370),r={content:"Dialogs_content__jwMoZ",dialogs:"Dialogs_dialogs__ii6ke",dialogsItems:"Dialogs_dialogsItems__byqb7",messages:"Dialogs_messages__HewAg",message:"Dialogs_message__jSGgt",errorMessage:"Dialogs_errorMessage__0wZBR",fieldNewMessageBody:"Dialogs_fieldNewMessageBody__1E9vg"},t=n(3504),o=n(184),d=function(e){var s="/dialogs/"+e.id;return(0,o.jsx)("div",{className:r.dialog,children:(0,o.jsxs)(t.OL,{to:s,children:[" ",e.name," "]})})},c=(n(7006),n(9742),a.createRef,function(e){return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:r.dialogs,children:e.message})})}),u=n(5705),l=n(132),g=function(e){var s={};return e.newMessageBody||(s.newMessageBody="Write something"),s},h=l.Ry().shape({newMessageBody:l.Z_().min(1,"Must be longer than 2 characters").max(1e3,"Must be shorter than 10 characters").required("Write something")}),m=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,o.jsx)(d,{name:e.name,id:e.id},e.id)})),a=s.messages.map((function(e){return(0,o.jsx)(c,{message:e.message,id:e.id},e.id)}));return(0,o.jsxs)("div",{className:r.dialogs,children:[n,(0,o.jsxs)("div",{className:r.messages,children:[(0,o.jsxs)("div",{children:[" ",a," "]}),(0,o.jsx)("div",{children:(0,o.jsx)(u.J9,{initialValues:{newMessageBody:""},onSubmit:function(s,n){var a=n.resetForm;e.sendMessage(s.newMessageBody),a({newMessageBody:""})},validate:g,validationSchema:h,children:function(){return(0,o.jsx)(u.l0,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:r.fieldNewMessageBody,children:(0,o.jsx)(u.gN,{placeholder:"Enter your message",name:"newMessageBody",values:e.newMessageBody,type:"text"})}),(0,o.jsx)("div",{children:(0,o.jsx)(u.Bc,{name:"newMessageBody",component:"span",className:r.errorMessage})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"submit",children:" Send "})})]})})}})})]})]})},f=n(8687),j=n(7781),v=n(8344),x=(0,j.qC)((0,f.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{updateNewMessageBody:function(s){e((0,i.oS)(s))},sendMessage:function(s){e((0,i.XE)(s))}}})),v.S)(m)},9742:function(e,s,n){n.r(s);n(2791);var a=n(7006),i=n(184);s.default=function(e){return(0,i.jsx)("div",{className:a.Z.sidebar,children:e.friends})}},8344:function(e,s,n){n.d(s,{S:function(){return h}});var a=n(1413),i=n(5671),r=n(3144),t=n(136),o=n(7277),d=n(2791),c=n(6871),u=n(8687),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}},h=function(e){var s=function(s){(0,t.Z)(d,s);var n=(0,o.Z)(d);function d(){return(0,i.Z)(this,d),n.apply(this,arguments)}return(0,r.Z)(d,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,a.Z)({},this.props)):(0,l.jsx)(c.Fg,{to:"/login"})}}]),d}(d.Component);return(0,u.$j)(g)(s)}},7006:function(e,s){s.Z={}}}]);
//# sourceMappingURL=773.86d72bc6.chunk.js.map