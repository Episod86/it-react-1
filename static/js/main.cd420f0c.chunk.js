(this["webpackJsonpit-react-1"]=this["webpackJsonpit-react-1"]||[]).push([[0],{112:function(e,t,n){e.exports={login:"Login_login__2ifWp",loginTitle:"Login_loginTitle__c3_Q3"}},155:function(e,t,n){e.exports={status:"ProfileStatus_status__1bve1"}},156:function(e,t,n){e.exports={content:"Profile_content__vW-kt"}},157:function(e,t,n){e.exports={item:"Post_item__u5CI4"}},158:function(e,t,n){},29:function(e,t,n){e.exports={formElement:"FormsControl_formElement__mD0CE",buttonSubmit:"FormsControl_buttonSubmit__3dl_M",formControl:"FormsControl_formControl__1tz4B",error:"FormsControl_error__okM4b",formSummaryError:"FormsControl_formSummaryError__2AC8r"}},30:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__2CZlU",nav:"Sidebar_nav__118dd",item:"Sidebar_item__DZuI1",activeLink:"Sidebar_activeLink__3AOy7"}},314:function(e,t,n){},315:function(e,t,n){},316:function(e,t,n){},317:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(51),i=n.n(s),c=n(14),o=n(11),u=n(22),l=n(23),A=n(26),d=n(25),j=n(13),p=n(10),f=n(30),b=n.n(f),h=n(1),O=function(){return Object(h.jsxs)("nav",{className:b.a.nav,children:[Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/profile",activeClassName:b.a.activeLink,children:"Profile"})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/dialogs",activeClassName:b.a.activeLink,children:"Messages"})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/news",children:"News"})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/music",children:"Music"})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/settings",children:"Settings"})}),Object(h.jsx)("div",{className:b.a.item,children:Object(h.jsx)(c.b,{to:"/users",activeClassName:b.a.activeLink,children:"Users"})})]})},g=n(3),m=function(e){return{isAuth:e.auth.isAuth}},v=function(e){var t=function(t){Object(A.a)(r,t);var n=Object(d.a)(r);function r(){return Object(u.a)(this,r),n.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(h.jsx)(e,Object(g.a)({},this.props)):Object(h.jsx)(j.a,{to:"/login"})}}]),r}(a.a.Component);return Object(o.b)(m)(t)},x=n(56),y="SEND-MESAGE",w={dialogsData:[{id:"1",name:"Aleksey",avatar:"https://pm1.narvii.com/6812/898e9a78440c858bbc48429775f70d48a85a2e71v2_hq.jpg"},{id:"2",name:"Ivan",avatar:"https://i.pinimg.com/originals/6e/20/f8/6e20f8caddd62ec456990cbbec2817b7.jpg"},{id:"3",name:"Elisey",avatar:"https://tipik.ru/wp-content/uploads/2019/08/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B0%D0%BD%D0%B8%D0%BC%D0%B5-%D0%BF%D0%B0%D1%86%D0%B0%D0%BD%D0%BE%D0%B2-010.jpg"}],messages:[{id:"1",message:"The establishment of clear lines of communication makes it easier to keep the different actors fully informed of the process."},{id:"2",message:"The binary encoder session is not valid. There was an error decoding a previous message."},{id:"3",message:"The binary encoder session is not valid. There was an error decoding a previous message."}]},_=n(34),P=n.n(_),k=function(e){var t="/dialogs/".concat(e.id);return Object(h.jsx)("div",{className:P.a.dialog,children:Object(h.jsxs)(c.b,{to:t,children:[Object(h.jsx)("span",{className:P.a.dialogName,children:e.name}),Object(h.jsx)("img",{src:e.avatar,alt:"photo"})]})})},S=function(e){return Object(h.jsx)("div",{className:P.a.message,children:e.message})},C=n(142),N=n(143),E=n(58),U=n(29),D=n.n(U),T=["input","meta"],I=["input","meta"],B=["input","meta"],F=function(e){e.input;var t=e.meta,n=Object(E.a)(e,T),r=t.touched&&t.error;return Object(h.jsxs)("div",{className:D.a.formControl+" "+(r?D.a.error:""),children:[Object(h.jsx)("div",{children:n.children}),r&&Object(h.jsx)("span",{children:t.error})]})},L=function(e){var t=e.input,n=(e.meta,Object(E.a)(e,I));return Object(h.jsx)(F,Object(g.a)(Object(g.a)({},e),{},{children:Object(h.jsx)("textarea",Object(g.a)(Object(g.a)({},t),n))}))},M=function(e){var t=e.input,n=(e.meta,Object(E.a)(e,B));return Object(h.jsx)(F,Object(g.a)(Object(g.a)({},e),{},{children:Object(h.jsx)("input",Object(g.a)(Object(g.a)({},t),n))}))},K=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(h.jsxs)("div",{className:D.a.formElement,children:[Object(h.jsx)(C.a,Object(g.a)({placeholder:e,name:t,component:n,validate:r},a)),s]})},R=function(e){if(!e)return"Fild is required "},J=function(e){return function(t){if(t&&t.length>e)return"max length is 30 symbols"}},X=J(100),z=Object(N.a)({form:"dialogAddMessageForm"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(C.a,{component:L,name:"newMessageBody",placeholder:"Enter your message",validate:[R,X]})}),Object(h.jsx)("div",{className:D.a.buttonSubmit,children:Object(h.jsx)("button",{children:"Send"})})]})})),H=Object(p.d)(Object(o.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:y,newMessageBody:e}}(t))}}})),v)((function(e){var t=e.dialogsPage,n=t.dialogsData.map((function(e){return Object(h.jsx)(k,{name:e.name,id:e.id,avatar:e.avatar},e.id)})),r=t.messages.map((function(e){return Object(h.jsx)(S,{message:e.message},e.id)}));return e.isAuth?Object(h.jsxs)("div",{className:P.a.dialogs,children:[Object(h.jsx)("div",{children:n}),Object(h.jsxs)("div",{className:P.a.messages,children:[Object(h.jsx)("div",{className:P.a.dialogsItem,children:r}),Object(h.jsx)("div",{className:P.a.addMessage,children:Object(h.jsx)(z,{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})})]})]}):Object(h.jsx)(j.a,{to:"/login"})})),q=n(9),V=n.n(q),W=n(17),G=n(146),Q=n.n(G).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"96ca4cf3-0904-4ed0-a6af-c3b3e2a96544"}}),Z={getUsers:function(e,t){return Q.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setFollow:function(e){return Q.post("follow/".concat(e))},setUnfollow:function(e){return Q.delete("follow/".concat(e))}},Y=function(){return Q.get("auth/me")},$=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Q.post("auth/login",{email:e,password:t,rememberMe:n})},ee=function(){return Q.delete("auth/login")},te=function(e){return Q.get("/profile/".concat(e))},ne=function(e){return Q.get("/profile/status/".concat(e))},re=function(e){return Q.put("profile/status",{status:e})},ae=function(e){var t=new FormData;return t.append("image",e),Q.put("profile/photo",t)},se=function(e){return Q.put("profile/",e)},ie=function(){return Q.get("security/get-captcha-url")},ce=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),r):e}))},oe="FOLLOW",ue="UNFOLLOW",le="SET-USERS",Ae="SET-CURRENT-PAGE",de="SET-TOTAL-USERS-COUNT",je="TOGGLE-IS-FETCHING",pe="TOGGLE-IS-FOLLOWING-PROGRESS",fe={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,folowingInProgress:[]},be=function(e){return{type:oe,userId:e}},he=function(e){return{type:ue,userId:e}},Oe=function(e){return{type:Ae,currentPage:e}},ge=function(e){return{type:je,isFetching:e}},me=function(e,t){return{type:pe,isFetching:e,userId:t}},ve=function(){var e=Object(W.a)(V.a.mark((function e(t,n,r,a){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(me(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(me(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),xe=n(147),ye=Object(xe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),we=function(e){return e.usersPage.pageSize},_e=function(e){return e.usersPage.totalUsersCount},Pe=function(e){return e.usersPage.currentPage},ke=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.folowingInProgress},Ce=n(81),Ne=n(46),Ee=n(24),Ue=n.n(Ee),De=n(319),Te=n(59),Ie=n.n(Te),Be=function(e){for(var t=e.currentPage,n=e.totalItemCount,a=e.onPageChanged,s=e.pageSize,i=e.portionSize,c=void 0===i?20:i,o=Math.ceil(n/s),u=[],l=1;l<=o;l++)u.push(l);var A=Object(r.useState)(1),d=Object(Ne.a)(A,2),j=d[0],p=d[1],f=Math.ceil(o/s),b=(j-1)*c+1,O=j*c;return Object(h.jsxs)("div",{className:Ie.a.paginator,children:[j>1&&Object(h.jsx)(De.a,{className:Ie.a.buttonPaginator,onClick:function(){p(j-1)},children:"PREV"}),u.filter((function(e){return e>=b&&e<=O})).map((function(e){return Object(h.jsx)("span",{className:Ue()(Ie.a.pageNumber,Object(Ce.a)({},Ie.a.selectedPage,t===e)),onClick:function(t){a(e)},children:e},e)})),f>j&&Object(h.jsx)(De.a,{className:Ie.a.buttonPaginator,onClick:function(){p(j+1)},children:"NEXT"})]})},Fe="data:image/png;base64,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",Le=n(57),Me=n.n(Le),Ke=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(h.jsxs)("div",{className:Me.a.user,children:[Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(c.b,{to:"/profile/".concat(t.id),children:Object(h.jsx)("img",{src:null!=t.photos.small?t.photos.small:Fe,alt:"avatar",className:Me.a.img})})}),Object(h.jsx)("div",{children:t.followed?Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Unfollow"}):Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Follow"})})]}),Object(h.jsx)("span",{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("div",{className:Me.a.userName,children:t.name}),Object(h.jsx)("div",{children:t.status})]})})]})},Re=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],Je=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,i=Object(E.a)(e,Re);return Object(h.jsxs)("div",{className:Me.a.users,children:[Object(h.jsx)(Be,{currentPage:t,totalItemCount:n,onPageChanged:a,pageSize:r}),s.map((function(e){return Object(h.jsx)(Ke,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))]})},Xe=n.p+"static/media/loading.c1b8565f.gif",ze=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:Xe,alt:""})})},He=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(ze,{}):null,Object(h.jsx)(Je,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,onPageChanged:this.onPageChanged,followingInProgress:this.props.folowingInProgress,currentPage:this.props.currentPage})]})}}]),n}(a.a.Component),qe=Object(p.d)(Object(o.b)((function(e){return{users:ye(e),pageSize:we(e),totalUsersCount:_e(e),currentPage:Pe(e),isFetching:ke(e),folowingInProgress:Se(e)}}),{follow:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ve(n,e,Z.setFollow.bind(Z),be);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ve(n,e,Z.setUnfollow.bind(Z),he);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Oe,toggleFollowingProgress:me,getUsers:function(e,t){return function(){var n=Object(W.a)(V.a.mark((function n(r){var a;return V.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ge(!0)),r(Oe(e)),n.next=4,Z.getUsers(e,t);case 4:a=n.sent,r(ge(!1)),r((i=a.items,{type:le,users:i})),r((s=a.totalCount,{type:de,totalUsersCount:s}));case 8:case"end":return n.stop()}var s,i}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(He),Ve=n(155),We=n.n(Ve),Ge=function(e){var t=Object(r.useState)(!1),n=Object(Ne.a)(t,2),a=n[0],s=n[1],i=Object(r.useState)(e.status),c=Object(Ne.a)(i,2),o=c[0],u=c[1];Object(r.useEffect)((function(){u(e.status)}),[e.status]);return Object(h.jsxs)("div",{className:We.a.status,children:[!a&&Object(h.jsx)("div",{children:Object(h.jsx)("span",{onClick:function(){s(!0)},children:e.status||"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})}),a&&Object(h.jsx)("div",{children:Object(h.jsx)("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(o)},autoFocus:!0,value:o})})]})},Qe=Object(N.a)({form:"editProfile"})((function(e){var t=e.handleSubmit,n=e.profile,r=e.error;return Object(h.jsxs)("form",{onSubmit:t,children:[r&&Object(h.jsx)("div",{className:D.a.formSummaryError,children:r}),Object(h.jsxs)("div",{children:["Full name: ",K("Full name","fullName",M)]}),Object(h.jsxs)("div",{children:["Looking for a job:"," ",K(null,"lookingForAJob",M,[],{type:"checkbox"})]}),Object(h.jsxs)("div",{children:["My professional skils:"," ",K("My professional skils","lookingForAJobDescription",L)]}),Object(h.jsxs)("div",{children:["About me: ",K("About me","aboutMe",L)]}),Object(h.jsxs)("div",{children:["Contacts:"," ",Object.keys(n.contacts).map((function(e){return Object(h.jsxs)("div",{children:[e,":",K(e,"contacts.".concat(e),M)," "]},e)}))]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"save"})})]})})),Ze=n(90),Ye=n.n(Ze),$e=function(e){var t=e.profile,n=e.status,a=e.updateStatus,s=e.isOwner,i=e.savePhoto,c=e.saveProfile,o=Object(r.useState)(!1),u=Object(Ne.a)(o,2),l=u[0],A=u[1];return t?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:Ye.a.inform,children:[Object(h.jsxs)("div",{className:Ye.a.infoPhoto,children:[Object(h.jsx)("img",{src:t.photos.large||Fe}),s&&Object(h.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&i(e.target.files[0])}})]}),l?Object(h.jsx)(Qe,{initialValues:t,profile:t,onSubmit:function(e){c(e).then((function(){A(!1)}))}}):Object(h.jsx)(et,{activateEditMode:function(){A(!0)},profile:t,isOwner:s})]}),Object(h.jsx)(Ge,{status:n,updateStatus:a})]}):Object(h.jsx)("div",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})},et=function(e){var t=e.profile,n=e.isOwner,r=e.activateEditMode;return Object(h.jsxs)("div",{className:Ye.a.infoText,children:[Object(h.jsxs)("div",{children:["Full name: ",t.fullName]}),Object(h.jsxs)("div",{children:["Looking for a job: ",t.lookingForAJob?"yes":"no"]}),t.lookingForAJob&&Object(h.jsxs)("div",{children:["My professional skils: ",t.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:["About me: ",t.aboutMe]}),Object(h.jsxs)("div",{children:["Contacts:"," ",Object.keys(t.contacts).map((function(e){return Object(h.jsx)(tt,{contactTitle:e,contactValue:t.contacts[e]})}))]}),n&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:r,children:"edit"})})]})},tt=function(e){var t=e.contactTitle,n=e.contactValue;return Object(h.jsxs)("div",{children:[t,": ",n]})},nt=n(156),rt=n.n(nt),at=n(33),st="profile/ADD-POST",it="profile/SET_USER_PROFILE",ct="profile/SET_STATUS",ot="profile/DELETE_POST",ut="SAVE_PHOTO_SUCCESS",lt={posts:[{id:"1",message:"hi",likeCount:11},{id:"2",message:"first post",likeCount:15},{id:"3",message:"first33333",likeCount:1}],profile:null,status:""},At=function(e){return{type:ct,status:e}},dt=function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){var r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,te(e);case 2:r=t.sent,n((a=r.data,{type:it,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},jt=n(157),pt=n.n(jt),ft=function(e){return Object(h.jsxs)("div",{className:pt.a.item,children:[Object(h.jsx)("img",{src:"https://avatarko.ru/img/kartinka/33/ochki_anime_devushka_34671.jpg",alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(h.jsx)("div",{children:e.message}),Object(h.jsxs)("span",{children:[" like ",e.likeCount]})]})},bt=n(158),ht=n.n(bt),Ot=J(10),gt=Object(N.a)({form:"addPostForm"})((function(e){return Object(h.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(h.jsx)("div",{children:Object(h.jsx)(C.a,{component:L,name:"newPostText",validate:[R,Ot]})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Send"})})]})})),mt=Object(o.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:st,newPostText:e}}(t))}}}))((function(e){var t=e.posts.map((function(e){return Object(h.jsx)(ft,{message:e.message,likeCount:e.likeCount})}));return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsx)(gt,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(h.jsx)("div",{className:ht.a.posts,children:t})]})})),vt=function(e){return Object(h.jsxs)("div",{className:rt.a.content,children:[Object(h.jsx)($e,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),Object(h.jsx)(mt,{})]})},xt=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId1!==e.match.params.userId&&this.refreshProfile()}},{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(h.jsx)(vt,Object(g.a)(Object(g.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))}}]),n}(a.a.Component),yt=Object(p.d)(Object(o.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.id,isAust:e.auth.isAust}}),{getUserProfile:dt,getStatus:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){var r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(e);case 2:r=t.sent,n(At(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,re(e);case 2:0===t.sent.data.resultCode&&n(At(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n){var r;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ae(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:ut,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(W.a)(V.a.mark((function t(n,r){var a,s;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,se(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(dt(a)),t.next=10;break;case 8:return n(Object(at.a)("editProfile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),j.g,v)(xt),wt=(n(314),function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={date:new Date},r}return Object(l.a)(n,[{key:"updateTime",value:function(){this.setState({date:new Date})}},{key:"componentDidMount",value:function(){var e=this;this.idTimer=setInterval((function(){return e.updateTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.idTimer)}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"clock",children:[Object(h.jsx)("span",{children:"\u0412\u0440\u0435\u043c\u044f: "}),this.state.date.toLocaleTimeString()]})}}]),n}(a.a.Component)),_t=n(35),Pt=n.n(_t),kt=function(e){return Object(h.jsxs)("div",{className:Pt.a.header,children:[Object(h.jsxs)("div",{className:Pt.a.titleBlock,children:[Object(h.jsx)("img",{src:"https://w7.pngwing.com/pngs/795/595/png-transparent-cat-paw-dog-paw-background-pet-paw-black.png",alt:"logo"}),Object(h.jsx)("div",{className:Pt.a.title,children:"Social network"}),Object(h.jsx)(wt,{})]}),Object(h.jsx)("div",{className:Pt.a.loginBlock,children:e.isAuth?Object(h.jsxs)("div",{className:Pt.a.loginBlockAuth,children:[Object(h.jsx)(c.b,{to:"/profile",children:Object(h.jsx)("div",{className:Pt.a.login,children:e.login})}),Object(h.jsx)(De.a,{type:"primary",onClick:e.logout,className:Pt.a.button,children:"Log out"})]}):Object(h.jsx)(c.b,{to:"/login",children:Object(h.jsx)(De.a,{type:"primary",className:Pt.a.button,children:"LOGIN"})})})]})},St="auth/SET_USER_DATA",Ct="auth/SET_CAPTCHA_URL_SUCCESS",Nt={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},Et=function(e,t,n,r){return{type:St,payload:{id:e,email:t,login:n,isAuth:r}}},Ut=function(e){return{type:Ct,payload:{captchaUrl:e}}},Dt=function(){return function(){var e=Object(W.a)(V.a.mark((function e(t){var n,r,a,s,i;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,i=r.login,t(Et(a,s,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Tt=function(){return function(){var e=Object(W.a)(V.a.mark((function e(t){var n,r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ie();case 2:n=e.sent,r=n.data.url,t(Ut(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},It=function(){return function(){var e=Object(W.a)(V.a.mark((function e(t){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee();case 2:0===e.sent.data.resultCode&&t(Et(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Bt=function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)(kt,Object(g.a)({},this.props))}}]),n}(a.a.Component),Ft=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:It})(Bt),Lt=Object(N.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(h.jsxs)("form",{onSubmit:t,children:[K("Email","email",M,[R]),K("Password","password",M,[R],{type:"password"}),K(null,"rememberMe",M,[],{type:"checkbox"},"rememberMe"),r&&Object(h.jsx)("img",{src:r}),r&&K("Symbol from image","captcha",M,[R]),n&&Object(h.jsx)("div",{className:D.a.formSummaryError,children:n}),Object(h.jsx)("div",{className:D.a.buttonSubmit,children:Object(h.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})})),Mt=n(112),Kt=n.n(Mt),Rt=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return function(){var a=Object(W.a)(V.a.mark((function a(s){var i,c;return V.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,$(e,t,n,r);case 2:0===(i=a.sent).data.resultCode?s(Dt()):(10===i.data.resultCode&&s(Tt()),c=i.data.messages.lenght>0?i.data.messages[0]:"some error",s(Object(at.a)("login",{error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logout:It})((function(e){return e.isAuth?Object(h.jsx)(j.a,{to:"/profile"}):Object(h.jsxs)("div",{className:Kt.a.login,children:[Object(h.jsx)("span",{className:Kt.a.loginTitle,children:"Login"}),Object(h.jsx)(Lt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Jt="app/INITIALISED_SUCCESS",Xt={initialised:!1},zt=(n(315),function(e){Object(A.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.initialisedApp()}},{key:"render",value:function(){return this.props.initialised?Object(h.jsxs)("div",{className:"app-wrapper",children:[Object(h.jsx)(Ft,{}),Object(h.jsx)(O,{}),Object(h.jsx)("div",{className:"app-wrapper-content",children:Object(h.jsxs)(j.d,{children:[Object(h.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(h.jsx)(yt,{})}}),Object(h.jsx)(j.b,{path:"/login",render:function(){return Object(h.jsx)(Rt,{})}}),Object(h.jsx)(j.b,{path:"/profile/:userId?",render:function(){return Object(h.jsx)(yt,{})}}),Object(h.jsx)(j.b,{path:"/dialogs",render:function(){return Object(h.jsx)(H,{})}}),Object(h.jsx)(j.b,{path:"/users",render:function(){return Object(h.jsx)(qe,{})}}),Object(h.jsx)(j.b,{path:"*",render:function(){return Object(h.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(h.jsx)(ze,{})}}]),n}(a.a.Component)),Ht=Object(p.d)(Object(o.b)((function(e){return{initialised:e.app.initialised}}),{initialisedApp:function(){return function(e){e(Dt()).then((function(){return e({type:Jt})}))}}}),j.g)(zt),qt=n(159),Vt=n(144),Wt=Object(p.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case st:var n={id:"3",message:t.newPostText,likeCount:0};return Object(g.a)(Object(g.a)({},e),{},{posts:[].concat(Object(x.a)(e.posts),[n]),newPostText:""});case it:return Object(g.a)(Object(g.a)({},e),{},{profile:t.profile});case ct:return Object(g.a)(Object(g.a)({},e),{},{status:t.status});case ot:return Object(g.a)(Object(g.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case ut:return Object(g.a)(Object(g.a)({},e),{},{profile:Object(g.a)(Object(g.a)({},e.profile),{},{photos:t.photos})});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var n=t.newMessageBody;return Object(g.a)(Object(g.a)({},e),{},{messages:[].concat(Object(x.a)(e.messages),[{id:"4",message:n}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object(g.a)(Object(g.a)({},e),{},{users:ce(e.users,t.userId,"id",{followed:!0})});case ue:return Object(g.a)(Object(g.a)({},e),{},{users:ce(e.users,t.userId,"id",{followed:!1})});case le:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case Ae:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case de:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.totalUsersCount});case je:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case pe:return Object(g.a)(Object(g.a)({},e),{},{folowingInProgress:t.isFetching?[].concat(Object(x.a)(e.folowingInProgress),[t.userId]):e.folowingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case St:case Ct:return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},form:Vt.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Jt:return Object(g.a)(Object(g.a)({},e),{},{initialised:!0});default:return e}}}),Gt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.d,Qt=Object(p.e)(Wt,Gt(Object(p.a)(qt.a)));n(316);i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(c.a,{children:Object(h.jsx)(o.a,{store:Qt,children:Object(h.jsx)(Ht,{})})})}),document.getElementById("root"))},34:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2DV0t",message:"Dialogs_message__3qjNR",dialog:"Dialogs_dialog__2iaDf",dialogName:"Dialogs_dialogName__yUO3q",addMessage:"Dialogs_addMessage__nwt9c"}},35:function(e,t,n){e.exports={header:"Header_header__3c-_n",titleBlock:"Header_titleBlock__1ILSZ",loginBlockAuth:"Header_loginBlockAuth__3Msmm",title:"Header_title__rryms",login:"Header_login__3ZIXf",button:"Header_button__335gp"}},57:function(e,t,n){e.exports={users:"Users_users__3FifD",user:"Users_user__3iANE",img:"Users_img__2HdJT",userName:"Users_userName__1gImA"}},59:function(e,t,n){e.exports={paginator:"Paginator_paginator__2XHS1",buttonPaginator:"Paginator_buttonPaginator__3mRuC",pageNumber:"Paginator_pageNumber__3S3hc",selectedPage:"Paginator_selectedPage__3DCY4"}},90:function(e,t,n){e.exports={content:"ProfileInfo_content__m0R8A",inform:"ProfileInfo_inform__3KbhU",infoPhoto:"ProfileInfo_infoPhoto__1Aedf",infoText:"ProfileInfo_infoText__1eN_r"}}},[[317,1,2]]]);
//# sourceMappingURL=main.cd420f0c.chunk.js.map