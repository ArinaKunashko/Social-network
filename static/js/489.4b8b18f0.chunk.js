"use strict";(self.webpackChunkreact01=self.webpackChunkreact01||[]).push([[489],{120:function(e,t,s){s.r(t),s.d(t,{default:function(){return $}});var n=s(1413),o=s(5671),a=s(3144),i=s(136),r=s(7277),l=s(2791),u=s(6868),c=s(885),d=s.p+"static/media/profilePhoto.6e48e0c5f1d5528794dc.jpeg",h=s(7205),p=s(5953),f=s(3978),m=s(184),x=function(e){var t=(0,l.useState)(0),s=(0,c.Z)(t,2),n=s[0],o=s[1];return(0,m.jsxs)(p.ZP,{container:!0,sx:{marginBottom:"20px"},children:[(0,m.jsxs)(p.ZP,{item:!0,xs:1,children:["  ",(0,m.jsx)(f.Z,{src:d})," "]}),(0,m.jsxs)(p.ZP,{item:!0,xs:10,children:[e.message," "]}),(0,m.jsx)(p.ZP,{item:!0,xs:1,children:(0,m.jsxs)(h.Z,{variant:"text",onClick:function(){o((function(e){return e+1}))},disabled:n>0,children:[" ",n," likes"]})})]})},v=s(5705),g=s(132),j=s(6015),Z=s(8009),b=s(5629),P=g.Ry({newPostText:g.Z_("Enter your message").required("Message is required")}),C=function(e){var t=e.posts.map((function(e){return(0,m.jsx)(x,{message:e.message,likesCount:e.likesCount})})),s=(0,v.TA)({initialValues:{newPostText:""},validationSchema:P,onSubmit:function(t,s){var n=s.resetForm;e.addPost(t.newPostText),n({newPostText:""})}});return(0,m.jsx)("div",{children:(0,m.jsxs)(j.Z,{sx:{padding:"30px",flexGrow:1},children:[(0,m.jsx)("h3",{children:" My posts "}),(0,m.jsxs)(j.Z,{component:"form",noValidate:!0,onSubmit:s.handleSubmit,sx:{mt:1,mb:5},children:[(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,id:"newPostText",label:"Anything new?",name:"newPostText",autoComplete:"newPostText",value:s.values.newPostText,onChange:s.handleChange,error:s.touched.newPostText&&Boolean(s.errors.newPostText),helperText:s.touched.newPostText&&s.errors.newPostText}),(0,m.jsx)(h.Z,{variant:"contained",type:"submit",children:"Add post"})]}),(0,m.jsx)(j.Z,{item:!0,xs:10,children:(0,m.jsxs)(b.Z,{children:[" ",t," "]})})]})})},k=s(8687),w=(0,k.$j)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e((0,u.Wl)(t))}}}))(C),S=s(6021),y="ProfileInfo_profilePage__gHOFF",T="ProfileInfo_descriptionBlock__a-wYz",_="ProfileInfo_information__3kTd2",A="ProfileInfo_fullName__3qyWS",N="ProfileInfo_profileStatus__a-Udy",F="users_header__6oDek",I="ProfileStatus_statusSpan__+3Ulo",M=function(e){var t=(0,l.useState)(!1),s=(0,c.Z)(t,2),n=s[0],o=s[1],a=(0,l.useState)(e.status),i=(0,c.Z)(a,2),r=i[0],u=i[1];(0,l.useEffect)((function(){u(e.status)}),[e.status]);return(0,m.jsxs)("div",{children:[!n&&(0,m.jsx)("div",{children:(0,m.jsxs)("span",{className:I,onDoubleClick:function(){o(!0)},children:[" ",e.status||"My status"," "]})}),n&&(0,m.jsx)("div",{children:(0,m.jsx)("input",{className:I,placeholder:"Set status",autoFocus:!0,onBlur:function(){o(!1),e.updateStatus(r)},onChange:function(e){u(e.currentTarget.value)},value:r})})]})},W=s(2900),J=s(8823),U=g.Ry({fullName:g.Z_("Enter your fullname").required("Fullname is required")}),D=function(e){var t=e.profile,s=e.isOwner,n=e.onSubmit,o=e.gotoViewMode,a=(0,v.TA)({initialValues:t,validationSchema:U,onSubmit:function(e){n(e)}});return(0,m.jsx)("div",{children:(0,m.jsxs)(j.Z,{sx:{padding:"30px",flexGrow:1},children:[(0,m.jsxs)(j.Z,{component:"form",noValidate:!0,onSubmit:a.handleSubmit,sx:{mt:1,mb:5},children:[(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Your full name",name:"fullName",autoComplete:"fullName",value:a.values.fullName,onChange:a.handleChange,error:a.touched.fullName&&Boolean(a.errors.fullName),helperText:a.touched.fullName&&a.errors.fullName}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Tell us about yourself",name:"aboutMe",autoComplete:"aboutMe",value:a.values.aboutMe,onChange:a.handleChange}),(0,m.jsx)(W.Z,{name:"lookingForAJob",control:(0,m.jsx)(J.Z,{checked:a.values.lookingForAJob,onChange:a.handleChange,color:"primary"}),label:"Are you looking for a job?"}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Tell us about professional skills",name:"lookingForAJobDescription",autoComplete:"lookingForAJobDescription",value:a.values.lookingForAJobDescription,onChange:a.handleChange}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Write your contacts on GitHub ",name:"contacts.github",autoComplete:"contacts.github",value:a.values.contacts.github,onChange:a.handleChange}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Write your contacts on Vk ",name:"contacts.vk",autoComplete:"contacts.vk",value:a.values.contacts.vk,onChange:a.handleChange}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Write your contacts on Twitter ",name:"contacts.twitter",autoComplete:"contacts.twitter",value:a.values.contacts.twitter,onChange:a.handleChange}),(0,m.jsx)(Z.Z,{margin:"normal",fullWidth:!0,label:"Write your contacts on Instagram ",name:"contacts.instagram",autoComplete:"contacts.instagram",value:a.values.contacts.instagram,onChange:a.handleChange}),s&&(0,m.jsxs)("div",{children:[" ",(0,m.jsx)(h.Z,{variant:"contained",type:"submit",children:" Save "}),(0,m.jsx)(h.Z,{variant:"text",onClick:o,children:" Cancel "})]})]}),(0,m.jsx)(j.Z,{item:!0,xs:10})]})})},O=s(501),V=s(5419),q=function(e){var t=e.profile,s=(e.status,e.updateStatus,e.isOwner),n=e.gotoEditMode;e.lookingForAJobDescription;return(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{children:[" About Me: ",t.aboutMe," "]}),(0,m.jsxs)("div",{children:[" Looking For A Job : ",t.lookingForAJob?"yes":"no"," "]}),t.lookingForAJob&&(0,m.jsxs)("div",{children:[" My professional skills: ",t.lookingForAJobDescription," "]}),(0,m.jsxs)("div",{children:[" My professional skills: ",t.lookingForAJobDescription," "]}),(0,m.jsxs)("div",{children:[" Contact GitHub: ",t.contacts.github," "]}),(0,m.jsxs)("div",{children:[" Contact Vk: ",t.contacts.vk," "]}),(0,m.jsxs)("div",{children:[" Contact Twitter: ",t.contacts.twitter," "]}),(0,m.jsxs)("div",{children:[" Contact Instagram: ",t.contacts.instagram," "]}),s&&(0,m.jsxs)("div",{children:[" ",(0,m.jsx)(h.Z,{variant:"contained",onClick:n,children:" Edit "})," "]})]})},E=function(e){var t=e.profile,s=e.updateStatus,n=e.isOwner,o=e.savePhoto,a=e.saveProfile,i=e.status,r=(0,l.useState)(!1),u=(0,c.Z)(r,2),d=u[0],p=u[1];if(!t)return(0,m.jsx)(S.Z,{});return(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"https://img2.akspic.ru/previews/0/1/1/6/4/146110/146110-rev-lev-koshachih-tigr-monohromnyj-x750.jpg",className:F})}),(0,m.jsx)("div",{className:y,children:(0,m.jsxs)("div",{className:T,children:[null!=t.photos.large?(0,m.jsx)(f.Z,{src:t.photos.large,sx:{width:200,height:200}}):(0,m.jsx)(f.Z,{sx:{bgcolor:V.Z[100],color:V.Z[600],width:200,height:200},children:(0,m.jsx)(O.Z,{sx:{width:200,height:200}})}),n&&d&&(0,m.jsxs)(h.Z,{variant:"contained",component:"label",children:["Upload",(0,m.jsx)("input",{hidden:!0,accept:"image/*",type:"file",onChange:function(e){e.target.files.length&&o(e.target.files[0])}})]}),(0,m.jsx)("div",{}),(0,m.jsxs)("div",{className:_,children:[(0,m.jsxs)("div",{className:A,children:["  ",t.fullName," "]}),(0,m.jsxs)("div",{className:N,children:[(0,m.jsx)(M,{status:i,updateStatus:s})," "]})]}),d?(0,m.jsx)(D,{profile:t,isOwner:n,gotoViewMode:function(){p(!1)},updateStatus:s,onSubmit:function(e){a(e),p(!1)}}):(0,m.jsx)(q,{profile:t,isOwner:n,gotoEditMode:function(){p(!0)},updateStatus:s})]})})]})},z=function(e){return(0,m.jsxs)("div",{children:[(0,m.jsx)(E,{savePhoto:e.savePhoto,isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveProfile:e.saveProfile}),(0,m.jsx)(w,{})]})},B=s(6871),G=s(8344),H=s(7781),R=function(e){(0,i.Z)(s,e);var t=(0,r.Z)(s);function s(){return(0,o.Z)(this,s),t.apply(this,arguments)}return(0,a.Z)(s,[{key:"refreshProfile",value:function(){var e=this.props.router.params.userId;e||(e=this.props.authorizedUserIdUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.router.params.userId!=e.router.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,m.jsx)(z,(0,n.Z)((0,n.Z)({},this.props),{},{isOwner:!this.props.router.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(l.Component);var $=(0,H.qC)((0,k.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserIdUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:u.et,getStatus:u.lR,updateStatus:u.Nf,savePhoto:u.Ju,saveProfile:u.Ii}),(function(e){return function(t){var s=(0,B.TH)(),o=(0,B.s0)(),a=(0,B.UO)();return(0,m.jsx)(e,(0,n.Z)((0,n.Z)({},t),{},{router:{location:s,navigate:o,params:a}}))}}),G.S)(R)},8344:function(e,t,s){s.d(t,{S:function(){return p}});var n=s(1413),o=s(5671),a=s(3144),i=s(136),r=s(7277),l=s(2791),u=s(6871),c=s(8687),d=s(184),h=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){(0,i.Z)(l,t);var s=(0,r.Z)(l);function l(){return(0,o.Z)(this,l),s.apply(this,arguments)}return(0,a.Z)(l,[{key:"render",value:function(){return this.props.isAuth?(0,d.jsx)(e,(0,n.Z)({},this.props)):(0,d.jsx)(u.Fg,{to:"/login"})}}]),l}(l.Component);return(0,c.$j)(h)(t)}},501:function(e,t,s){var n=s(4836);t.Z=void 0;var o=n(s(5649)),a=s(184),i=(0,o.default)((0,a.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");t.Z=i}}]);
//# sourceMappingURL=489.4b8b18f0.chunk.js.map