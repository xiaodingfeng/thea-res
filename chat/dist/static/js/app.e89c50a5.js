(function(e){function t(t){for(var n,r,o=t[0],c=t[1],u=t[2],d=0,l=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&l.push(i[r][0]),i[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);h&&h(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},i={app:0},s=[];function o(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-16e57ec1":"4664a163","chunk-226da628":"66548252","chunk-2300b0af":"a18a1304","chunk-2d0f0bd5":"441f71c4","chunk-46e40533":"460c57fd","chunk-099ce8b3":"b5b804b1","chunk-dba7e67a":"1a4985e8","chunk-6b301269":"4fa3648f","chunk-709f04bb":"c95699df","chunk-be26d9f2":"579ab772"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-16e57ec1":1,"chunk-226da628":1,"chunk-2300b0af":1,"chunk-099ce8b3":1,"chunk-6b301269":1,"chunk-709f04bb":1,"chunk-be26d9f2":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="static/css/"+({}[e]||e)+"."+{"chunk-16e57ec1":"22f5bab7","chunk-226da628":"530b2537","chunk-2300b0af":"109158b3","chunk-2d0f0bd5":"31d6cfe0","chunk-46e40533":"31d6cfe0","chunk-099ce8b3":"1960631f","chunk-dba7e67a":"31d6cfe0","chunk-6b301269":"a890457b","chunk-709f04bb":"012f95f1","chunk-be26d9f2":"5c78a35c"}[e]+".css",i=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===i))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===n||d===i)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var n=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete r[e],h.parentNode.removeChild(h),a(s)},h.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){r[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,a){n=i[e]=[t,a]}));t.push(n[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var a=i[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,a[1](l)}i[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cdn.jsdelivr.net/gh/xiaodingfeng/thea-res@latest/chat/dist/",c.oe=function(e){throw e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"09fd":function(e,t,a){},1:function(e,t){},1101:function(e,t,a){"use strict";a("5494");function n(e,t){const a=document.createElement("a");a.href=e,a.download=t||"export"+(new Date).getTime(),a.click(),window.URL.revokeObjectURL(e)}t["a"]=n},2337:function(e,t,a){"use strict";a("caa4")},"34a6":function(e,t,a){e.exports=a.p+"static/img/xin.d43e3c95.png"},"3cb1":function(e,t,a){},4360:function(e,t,a){"use strict";var n=a("2b0e"),r=a("2f62");const i={sidebar:e=>e.app.sidebar,device:e=>e.app.device,accessToken:e=>e.user.accessToken,refreshToken:e=>e.user.refreshToken,avatar:e=>e.user.avatar,name:e=>e.user.name};var s=i,o=a("852e"),c=a.n(o);const u={sidebar:{opened:!c.a.get("sidebarStatus")||!!+c.a.get("sidebarStatus"),withoutAnimation:!1},device:"desktop"},d={TOGGLE_SIDEBAR:e=>{e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?c.a.set("sidebarStatus",1):c.a.set("sidebarStatus",0)},CLOSE_SIDEBAR:(e,t)=>{c.a.set("sidebarStatus",0),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:(e,t)=>{e.device=t}},l={toggleSideBar({commit:e}){e("TOGGLE_SIDEBAR")},closeSideBar({commit:e},{withoutAnimation:t}){e("CLOSE_SIDEBAR",t)},toggleDevice({commit:e},t){e("TOGGLE_DEVICE",t)}};var h={namespaced:!0,state:u,mutations:d,actions:l},m=a("ea7f"),p=a("5f87"),f=a("b976"),b=a("fa20");const v=()=>({accessToken:Object(p["a"])(),refreshToken:Object(p["b"])(),nickName:Object(b["a"])()?JSON.parse(Object(b["a"])()).nickName:"",avatar:Object(b["a"])()?JSON.parse(Object(b["a"])()).avatar:""}),g=v(),w={RESET_STATE:e=>{Object.assign(e,v())},SET_ACCESS_TOKEN:(e,t)=>{e.accessToken=t},SET_REFRESH_TOKEN:(e,t)=>{e.refreshToken=t},SET_NAME:(e,t)=>{e.nickName=t},SET_AVATAR:(e,t)=>{e.avatar=t}},k={login({commit:e},t){return Object(f["b"])(t).then(t=>{const{code:a,msg:n,data:r}=t;return 200!==a?Promise.reject(n):(e("SET_ACCESS_TOKEN",r.accessToken),e("SET_REFRESH_TOKEN",r.refreshToken),Object(p["e"])(r.accessToken,r.accessTokenExpireTime),Object(p["f"])(r.refreshToken,r.refreshTokenExpireTime),Object(m["b"])().then(t=>{const a=t.data;if(!a)return Object(p["c"])(),Object(p["d"])(),e("RESET_STATE"),Promise.reject("Verification failed, please Login again.");const{nickName:n,avatar:i,id:s,userName:o}=a;e("SET_NAME",n),e("SET_AVATAR",i);const c={nickName:n,avatar:i,id:s,userName:o};return Object(b["c"])(JSON.stringify(c),r.refreshTokenExpireTime),Promise.resolve()}).catch(e=>Promise.reject(e)))})},getInfo({commit:e,state:t}){return new Promise((a,n)=>{Object(m["b"])(t.token).then(t=>{const{nickName:n,avatar:r,id:i,userName:s}=t.data;e("SET_NAME",n),e("SET_AVATAR",r);const o={nickName:n,avatar:r,id:i,userName:s};Object(b["c"])(JSON.stringify(o),99e5),a(t.data)}).catch(e=>{n(e)})})},logout({commit:e,state:t}){return new Promise((t,a)=>{Object(f["c"])().then(a=>{200===a.code&&(Object(p["c"])(),Object(p["d"])(),Object(b["b"])(),e("RESET_STATE"),t())}).catch(e=>{a(e)})})},refreshToken({commit:e,state:t},a){return new Promise((t,n)=>{Object(f["d"])(a).then(a=>{if(200===a.code){const{data:r}=a;return e("SET_ACCESS_TOKEN",r.accessToken),e("SET_REFRESH_TOKEN",r.refreshToken),Object(p["e"])(r.accessToken,r.accessTokenExpireTime),Object(p["f"])(r.refreshToken,r.refreshTokenExpireTime),Object(m["b"])().then(a=>{const n=a.data;if(!n)return Object(p["c"])(),Object(p["d"])(),e("RESET_STATE"),Promise.reject("Verification failed, please Login again.");const{nickName:i,avatar:s,id:o,userName:c}=n;e("SET_NAME",i),e("SET_AVATAR",s);const u={nickName:i,avatar:s,id:o,userName:c};Object(b["c"])(JSON.stringify(u),r.refreshTokenExpireTime),t()}).catch(e=>{n(e)})}n(a.msg)}).catch(e=>{n(e)})})},resetAccessToken({commit:e}){return new Promise(t=>{Object(p["c"])(),e("RESET_STATE"),t()})},resetRefreshToken({commit:e}){return new Promise(t=>{Object(p["d"])(),e("RESET_STATE"),t()})}},y={};var T={namespaced:!0,state:g,mutations:w,actions:k,getters:y};n["default"].use(r["a"]);t["a"]=new r["a"].Store({modules:{app:h,user:T},getters:s})},"44d4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),r=(a("f5df"),a("5c96")),i=a.n(r),s=(a("0fae"),a("450d"),a("a4b1"),a("8c4f")),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app_wrapper",class:e.classObj},[t("transition",{attrs:{name:"slide-fade"}},[t("el-container",["mobile"===e.device&&e.sidebar.opened?t("div",{staticClass:"mask",on:{click:e.handleClickOutside}}):e._e(),t("el-aside",[t("Logo",{attrs:{title:"蜡笔小新"}}),t("div",{staticClass:"functional_area"},[t("el-input",{attrs:{size:"small",clearable:"",placeholder:"搜索对话","suffix-icon":"el-icon-search"},on:{change:e.searchChat},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),t("i",{staticClass:"el-icon-plus add_room_ico",on:{click:e.addRoom}})],1),t("conversation-menu",{attrs:{"menu-data":e.menuData},on:{initRoom:e.initRoom}})],1),t("el-main",[e.$route.meta.showMainMenu?t("main-menu"):e._e(),t("router-view",{key:e.$route.fullPath})],1)],1)],1),t("el-dialog",{attrs:{title:"新增会话",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.addRoomData}},[t("el-form-item",{attrs:{label:"模型"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addRoomData.modelId,callback:function(t){e.$set(e.addRoomData,"modelId",t)},expression:"addRoomData.modelId"}},e._l(e.modelGroupOptions,(function(a,n){return t("el-option-group",{key:n,attrs:{label:n}},e._l(a,(function(e){return t("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)})),1)],1),t("el-form-item",{attrs:{label:"标题"}},[t("el-input",{model:{value:e.addRoomData.title,callback:function(t){e.$set(e.addRoomData,"title",t)},expression:"addRoomData.title"}})],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{model:{value:e.addRoomData.description,callback:function(t){e.$set(e.addRoomData,"description",t)},expression:"addRoomData.description"}})],1),t("el-form-item",{attrs:{label:"历史数量"}},[t("el-input",{attrs:{placeholder:"附带历史会话数量，默认10",type:"number"},model:{value:e.addRoomData.hisNum,callback:function(t){e.$set(e.addRoomData,"hisNum",t)},expression:"addRoomData.hisNum"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submitRoom}},[e._v("确 定")])],1)],1)],1)},c=[],u=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo_wrapper",on:{click:e.goHomePage}},[t("img",{staticClass:"logo_img",attrs:{src:a("34a6"),alt:"logo"}}),t("div",{staticClass:"app_title"},[e._v(e._s(e.title))])])}),d=[],l={name:"Logo",props:{title:{type:String,default:"蜡笔小新"}},methods:{goHomePage(){this.$router.push({path:"/"})}}},h=l,m=(a("5adf"),a("0c7c")),p=Object(m["a"])(h,u,d,!1,null,"19f5d8e7",null),f=p.exports,b=function(){var e=this,t=e._self._c;return t("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[t("ul",{staticClass:"menu_wrapper"},e._l(e.menuData,(function(n,r){return t("li",{key:r,staticClass:"menu_item_wrapper"},[t("div",{class:"menu_item "+e.activeClass(n)},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:a("f782"),alt:"avatar"}})]),t("div",{staticClass:"des_title",attrs:{title:n.title},on:{click:function(t){return e.goChatPage(n)}}},[t("span",{staticClass:"title",style:n.isShare?"color: #FF6600;":""},[e._v(e._s(n.title))]),t("span",{staticClass:"des"},[e._v(e._s(n.description))])]),t("div",{staticClass:"edit_delete"},[t("el-popover",{staticClass:"edit_more_popover",attrs:{placement:"top"}},[t("div",{staticClass:"edit_more"},[t("el-tag",{staticClass:"cursor-pointer",attrs:{size:"mini"},on:{click:function(t){return e.deleteRoom(n.id)}}},[e._v("删除")])],1),t("i",{staticClass:"el-icon-more",attrs:{slot:"reference"},slot:"reference"})])],1)])])})),0),t("footer",[t("div",[e._v("All rights reserved "),t("el-link",{attrs:{type:"primary",target:"_blank",underline:!1,href:"https://fengzhengx.cn"}},[e._v("fengzhengx.cn")])],1)])])},v=[],g=a("e75b"),w={name:"ConversationMenu",props:{menuData:{type:Array,default:()=>[]}},data(){return{visible:!1}},methods:{goChatPage(e){this.$router.push({name:"ChatRoom",query:{roomId:e.id}})},activeClass(e){if("/chat/room"===this.$route.path&&this.$route.query.roomId===e.id)return" active"},deleteRoom(e){Object(g["g"])(e).then(e=>{200===e.code&&(this.$message.success("删除成功"),this.$emit("initRoom"))})}}},k=w,y=(a("d8a0"),Object(m["a"])(k,b,v,!1,null,"56612a26",null)),T=y.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu_wrapper"},[t("div",{staticClass:"menu_left"},[t("hamburger",{staticClass:"hamburger-container",attrs:{"is-active":e.sidebar.opened},on:{toggleClick:e.toggleSideBar}})],1),t("div",{staticClass:"menu"},[t("el-menu",{staticClass:"el-menu-pro",attrs:{"text-color":"#000","default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"mobile"!==e.device,expression:"device !== 'mobile'"}],attrs:{index:"2"}},[e._v("交流中心")]),t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"mobile"!==e.device,expression:"device !== 'mobile'"}],attrs:{index:"3"}},[e._v("论文生成")]),t("el-submenu",{directives:[{name:"show",rawName:"v-show",value:"mobile"===e.device,expression:"device === 'mobile'"}],attrs:{index:"0"}},[t("template",{slot:"title"},[e._v("更多工具")]),t("el-menu-item",{attrs:{index:"2"}},[e._v("交流中心")]),t("el-menu-item",{attrs:{index:"3"}},[e._v("论文生成")])],2)],1)],1),t("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[t("div",{staticStyle:{display:"flex",gap:"8px"}},[t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:e.openUserInfo}},[e._v("个人信息")]),t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:e.balancePage}},[e._v("额度： "+e._s(e.userBalance.chatBalance))]),t("el-tag",{staticStyle:{cursor:"pointer"},attrs:{type:"danger"},on:{click:e.logout}},[e._v("登出")])],1),t("div",{staticClass:"menu_right",attrs:{slot:"reference"},slot:"reference"},[t("div",{staticClass:"user_info cursor-pointer"},[t("el-avatar",{attrs:{size:"medium",src:e.avatar}}),t("div",{staticClass:"name"},[e._v(e._s(e.name))])],1)])]),t("el-dialog",{attrs:{title:"额度信息",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("div",[t("div",[e._v("我的额度："),t("b",[e._v(e._s(e.userBalance.chatBalance))])]),t("br"),t("div",[e._v("每日领取额度："),t("b",[e._v(e._s(e.dayBalance.balance))]),t("div",{staticStyle:{float:"right"}},[e.dayBalance.canBeReceive?t("el-tag",{staticClass:"cursor-pointer",attrs:{s:""},on:{click:e.receiveBalance}},[e._v("领取")]):t("el-tag",{attrs:{type:"info"}},[e._v("已领取")])],1)])])]),t("el-dialog",{attrs:{title:"个人信息",visible:e.userDialogVisible,center:""},on:{"update:visible":function(t){e.userDialogVisible=t}}},[t("div",[t("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.editUserData}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editUserData.userName,callback:function(t){e.$set(e.editUserData,"userName",t)},expression:"editUserData.userName"}})],1),t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editUserData.email,callback:function(t){e.$set(e.editUserData,"email",t)},expression:"editUserData.email"}})],1),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{model:{value:e.editUserData.nickName,callback:function(t){e.$set(e.editUserData,"nickName",t)},expression:"editUserData.nickName"}})],1),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,accept:"image/*","on-success":e.handleAvatarSuccess}},[e.editUserData.avatar?t("el-avatar",{attrs:{size:"large",src:e.editUserData.avatar}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],1)],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password",placeholder:"不修改请留空"},model:{value:e.editUserData.password,callback:function(t){e.$set(e.editUserData,"password",t)},expression:"editUserData.password"}})],1),t("el-form-item",{attrs:{label:"确认密码"}},[t("el-input",{attrs:{type:"password",placeholder:"不修改请留空"},model:{value:e.editUserData.confirmPassword,callback:function(t){e.$set(e.editUserData,"confirmPassword",t)},expression:"editUserData.confirmPassword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitEditUser()}}},[e._v("提交")])],1)],1)],1)])],1)},O=[],E=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{padding:"0 15px"},on:{click:e.toggleClick}},[t("svg",{staticClass:"hamburger",class:{"is-active":e.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},j=[],x={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},methods:{toggleClick(){this.$emit("toggleClick")}}},D=x,S=(a("7bc1"),Object(m["a"])(D,E,j,!1,null,"3704a089",null)),C=S.exports,R=a("f068"),A=a("ea7f"),P={name:"MainMenu",components:{Hamburger:C},data(){return{userBalance:{chatBalance:0},centerDialogVisible:!1,userDialogVisible:!1,dayBalance:{balance:0,canBeReceive:!1},editUserData:{},uploadUrl:"/api/tool/images/upload"}},computed:{activeIndex(){return"/paper/index"===this.$route.path?"3":"/im/index"===this.$route.path?"2":"0"},sidebar(){return this.$store.state.app.sidebar},name(){return this.$store.state.user.name},avatar(){return this.$store.state.user.avatar},device(){return this.$store.state.app.device}},mounted(){this.getBalance(),this.getDayBalance()},methods:{submitEditUser(){!this.editUserData.password&&!this.editUserData.confirmPassword||this.editUserData.password===this.editUserData.confirmPassword?Object(A["c"])(this.editUserData).then(e=>{if(200===e.code)return this.$notify.success("修改成功"),void this.$store.dispatch("user/getInfo").then();this.$notify.error(e.msg||"修改失败")}):this.$notify.error("密码不一致")},handleAvatarSuccess(e,t){this.$set(this.editUserData,"avatar",e.data[0].url)},openUserInfo(){Object(A["b"])().then(e=>{this.editUserData=e.data}),this.userDialogVisible=!0},balancePage(){this.getBalance(),this.getDayBalance(),this.centerDialogVisible=!0},receiveBalance(){Object(R["c"])().then(e=>{200===e.code&&(this.$notify.success("领取成功"),this.getBalance(),this.getDayBalance())})},getBalance(){Object(R["b"])().then(e=>{e.data&&(this.userBalance=e.data)})},getDayBalance(){Object(R["a"])().then(e=>{e.data&&(this.dayBalance=e.data)})},toggleSideBar(){this.$store.dispatch("app/toggleSideBar")},handleSelect(e){"1"!==e?"2"!==e?"3"===e&&this.$router.push({name:"PaperIndex"}):this.$router.push({path:"/im/index"}):this.$router.push({name:"MemberIndex"})},logout(){this.$store.dispatch("user/logout").finally(()=>{this.$router.push({path:"/login"})})}}},B=P,M=(a("a4c1"),Object(m["a"])(B,_,O,!1,null,"accc17f8",null)),$=M.exports,N=a("4360");const{body:U}=document,I=992;var L={watch:{$route(e){"mobile"===this.device&&this.sidebar.opened&&N["a"].dispatch("app/closeSideBar",{withoutAnimation:!1})}},beforeMount(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.$_resizeHandler)},mounted(){const e=this.$_isMobile();e&&(N["a"].dispatch("app/toggleDevice","mobile"),N["a"].dispatch("app/closeSideBar",{withoutAnimation:!0}))},methods:{$_isMobile(){const e=U.getBoundingClientRect();return e.width-1<I},$_resizeHandler(){if(!document.hidden){const e=this.$_isMobile();N["a"].dispatch("app/toggleDevice",e?"mobile":"desktop"),e&&N["a"].dispatch("app/closeSideBar",{withoutAnimation:!0})}}}},H=a("945b"),V=a.n(H),q=a("e223"),z={name:"Layout",components:{Logo:f,ConversationMenu:T,MainMenu:$},mixins:[L],data(){return{centerDialogVisible:!1,keywords:"",variables:V.a,menuData:[],addRoomData:{hisNum:10,modelId:"159"},modelGroupOptions:[]}},computed:{sidebar(){return this.$store.state.app.sidebar},device(){return this.$store.state.app.device},classObj(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:"mobile"===this.device}}},mounted(){this.initRoom(),this.initOptions()},methods:{submitRoom(){Object(g["a"])(this.addRoomData).then(e=>{if(200===e.code)return this.$router.push({name:"ChatRoom",query:{roomId:e.data}}),this.centerDialogVisible=!1,void this.initRoom();this.$message.error(e.msg||"Error")})},addRoom(){this.centerDialogVisible=!0},searchChat(){this.initRoom()},handleClickOutside(){this.$store.dispatch("app/closeSideBar",{withoutAnimation:!1})},initOptions(){Object(q["a"])().then(e=>{this.modelGroupOptions=e.data})},initRoom(){Object(g["f"])({keywords:this.keywords}).then(e=>{this.menuData=e.data})}}},G=z,F=(a("2337"),Object(m["a"])(G,o,c,!1,null,"b8a4e87a",null)),J=F.exports;const K=[{path:"/login",component:()=>a.e("chunk-226da628").then(a.bind(null,"2f7e"))},{path:"/404",component:()=>a.e("chunk-16e57ec1").then(a.bind(null,"afa4")),hidden:!0}],W=[{path:"*",redirect:"/404",hidden:!0}],X=[{path:"/",component:J,redirect:"/home",children:[{path:"home",name:"Home",meta:{showMainMenu:!0},component:()=>a.e("chunk-be26d9f2").then(a.bind(null,"16c0"))}]},{path:"/chat",name:"Chat",component:J,redirect:"/chat/room",children:[{path:"room",name:"ChatRoom",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-dba7e67a"),a.e("chunk-709f04bb")]).then(a.bind(null,"6de4"))},{path:"invite",name:"ChatInvite",meta:{showMainMenu:!1},component:()=>a.e("chunk-2d0f0bd5").then(a.bind(null,"9e3f"))}]},{path:"/member",name:"Member",component:J,redirect:"/member/index",children:[{path:"index",name:"MemberIndex",meta:{showMainMenu:!0},component:()=>a.e("chunk-2300b0af").then(a.bind(null,"48e4"))}]},{path:"/im",name:"IM",component:J,redirect:"/IM/index",children:[{path:"index",name:"IMIndex",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-dba7e67a"),a.e("chunk-6b301269")]).then(a.bind(null,"a626"))}]},{path:"/paper",name:"Paper",component:J,redirect:"/paper/index",children:[{path:"index",name:"PaperIndex",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-099ce8b3")]).then(a.bind(null,"b8ac"))}]}];n["default"].use(s["a"]);const Q=()=>new s["a"]({scrollBehavior:()=>({y:0}),routes:K.concat(X,W)}),Y=Q();var Z=Y,ee=a("323e"),te=a.n(ee),ae=(a("a5d8"),a("5f87"));te.a.configure({showSpinner:!1});const ne=["/login"];Z.beforeEach(async(e,t,a)=>{te.a.start();const n=Object(ae["a"])();if(n)if("/login"===e.path)a({path:"/"}),te.a.done();else{const t=N["a"].getters.name;if(t)a();else try{a()}catch(i){await N["a"].dispatch("user/resetAccessToken"),r["Message"].error(i||"Has Error"),a("/login?redirect="+e.path),te.a.done()}}else{const t=Object(ae["b"])();if(t){await N["a"].dispatch("user/refreshToken",t).catch(()=>{N["a"].dispatch("user/resetRefreshToken"),a("/login?redirect="+e.path),te.a.done()});try{return void a()}catch(i){r["Message"].error(i||"Has Error"),a("/login?redirect="+e.path),te.a.done()}}-1!==ne.indexOf(e.path)?a():(a("/login?redirect="+e.fullPath),te.a.done())}}),Z.afterEach(()=>{te.a.done()});var re=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{key:e.$route.path})],1)},ie=[],se={name:"App"},oe=se,ce=(a("f7e4"),Object(m["a"])(oe,re,ie,!1,null,"ef192480",null)),ue=ce.exports,de=a("1487"),le=a.n(de),he=(a("9f21"),a("79b5")),me=(a("0808"),a("6944")),pe=a.n(me),fe=a("544d"),be=a.n(fe);a("9466");i.a.Dialog.props.closeOnClickModal.default=!1,n["default"].use(be.a),be.a.initAMapApiLoader({key:"a0bccd0ae30752c2a17c617c66fb2b13"}),n["default"].use(pe.a),n["default"].use(he["a"]),n["default"].use(le.a),n["default"].use(i.a),n["default"].config.productionTip=!1,new n["default"]({router:Z,store:N["a"],render:e=>e(ue)}).$mount("#app"),n["default"].directive("highlight",(function(e){const t=e.querySelectorAll("pre code");t.forEach(e=>{le.a.highlightElement(e)})}))},"5adf":function(e,t,a){"use strict";a("5d55")},"5d55":function(e,t,a){},"5f87":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return u})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return h})),a.d(t,"d",(function(){return m}));var n=a("852e"),r=a.n(n);const i=window.location.origin+window.location.pathname,s=i+"/Authorization",o=i+"/RefreshAuthorization";function c(){return r.a.get(s)}function u(e,t){const a=new Date(1*new Date+1e3*t);return r.a.set(s,e,{expires:a})}function d(){return r.a.remove(s)}function l(){return r.a.get(o)}function h(e,t){const a=new Date(1*new Date+1e3*t);return r.a.set(o,e,{expires:a})}function m(){return r.a.remove(o)}},"7bc1":function(e,t,a){"use strict";a("09fd")},"945b":function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"260px"}},a4b1:function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"260px"}},a4c1:function(e,t,a){"use strict";a("3cb1")},b775:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return b}));a("5494"),a("d9e2");var n=a("cee4"),r=a("4328"),i=a.n(r),s=a("5f87");const o=n["a"].create({baseURL:"/api"});o.interceptors.request.use(e=>{e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json;charset=utf-8","post"===e.method&&(e.params=void 0),"string"===typeof e.headers["Content-Type"]&&-1!==e.headers["Content-Type"].search("application/x-www-form-urlencoded")&&(e.data=i.a.stringify(e.data));const t=Object(s["a"])();return t&&(e.headers.Authorization="bearer "+t),e},e=>Promise.reject(e.response)),o.interceptors.response.use(e=>{if(200===e.status)return e;throw new Error(e.status.toString())},e=>Promise.reject(e));var c=o,u=a("4360"),d=a("5c96"),l=a("1101");function h(e){const t=e.headers["content-disposition"].split(";")[1].split("fileName=")[1],a=decodeURI(t),n=window.navigator.userAgent,r=/msie\s|trident\/|edge\//i.test(n)&&!!("uniqueID"in document||"documentMode"in document||"ActiveXObject"in window||"MSInputMethodContext"in window),i=new Blob([e.data],{type:e.data.type});if(r)navigator.msSaveBlob(i,a);else{const e=window.URL.createObjectURL(i);Object(l["a"])(e,a)}}async function m(){const e=Object(s["a"])();if(e)return;const t=Object(s["b"])();t&&await u["a"].dispatch("user/refreshToken",t).catch(e=>{u["a"].dispatch("user/resetRefreshToken")})}function p({url:e,data:t,method:a,headers:n,onDownloadProgress:r,signal:i,beforeRequest:o,afterRequest:l}){m().then(e=>{});const f=e=>n&&n["Response-Type"]&&"blob"===n["Response-Type"]?e.data.code?e.data.code&&200!==e.data.code?(d["Message"].error(e.data.msg||"Error"),Promise.reject(e.data)):e.data:void h(e):200===e.data.code||"string"===typeof e.data?e.data:(d["Message"].error(e.data.msg||e.data.text||"Error"),Promise.reject(e.data)),b=async c=>{if(null===l||void 0===l||l(),!c.response)throw new Error("Error");if(503===c.response.status)throw new Error(c.message||"Error");if(400===c.response.status)throw new Error(c.response.data.msg||"Error");if(401===c.response.status){await u["a"].dispatch("user/resetAccessToken");const d=Object(s["b"])();if(d)return await u["a"].dispatch("user/refreshToken",d).catch(e=>{u["a"].dispatch("user/resetRefreshToken")}),p({url:e,data:t,method:a,headers:n,onDownloadProgress:r,signal:i,beforeRequest:o,afterRequest:l});throw new Error(c.response.data.msg||"Error")}throw new Error(c.message||"Error")};null===o||void 0===o||o(),a=a||"GET";const v=Object.assign("function"===typeof t?t():null!==t&&void 0!==t?t:{},{}),g=new AbortController,w={signal:g.signal,params:v,onDownloadProgress:r},k="GET"===a?c.get(e,{headers:n,...w}):c.post(e,v,{headers:n,...w}),y=k.then(f,b);return i&&i.addEventListener&&i.addEventListener("abort",()=>{g.abort()}),y}function f({url:e,data:t,method:a="GET",onDownloadProgress:n,signal:r,beforeRequest:i,afterRequest:s}){return p({url:e,method:a,data:t,onDownloadProgress:n,signal:r,beforeRequest:i,afterRequest:s})}function b({url:e,data:t,method:a="POST",headers:n,onDownloadProgress:r,signal:i,beforeRequest:s,afterRequest:o}){return p({url:e,method:a,data:t,headers:n,onDownloadProgress:r,signal:i,beforeRequest:s,afterRequest:o})}t["a"]=b},b976:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s})),a.d(t,"d",(function(){return o}));var n=a("cee4");function r(e){return n["a"].create({baseURL:"/api"}).post("/sys/user/login",e,{headers:{"Content-Type":"application/json;charset=utf-8"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function i(e){return n["a"].create({baseURL:"/api"}).post("/sys/user/captcha",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function s(){return n["a"].create({baseURL:"/api"}).post("/sys/user/logout").then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function o(e){return n["a"].create({baseURL:"/api"}).post("/sys/user/refreshToken",{refreshToken:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}},bae6:function(e,t,a){},caa4:function(e,t,a){},d8a0:function(e,t,a){"use strict";a("bae6")},e223:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var n=a("b775");function r(){return Object(n["c"])({url:"/chat/category/list"})}function i(){return Object(n["c"])({url:"/chat/model/listGroupByCate"})}function s(e){return Object(n["c"])({url:"/chat/model/listByCate",data:{cateId:e},headers:{"Content-Type":"application/x-www-form-urlencoded"}})}},e75b:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"h",(function(){return d})),a.d(t,"b",(function(){return l}));var n=a("b775");function r(e){return Object(n["c"])({url:"/chat/user/chat/my/remove",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{roomId:e}})}function i(e){return Object(n["c"])({url:"/chat/user/chat/my",data:e})}function s(e){return Object(n["c"])({url:"/chat/user/chat/addChat",data:e})}function o(e){return Object(n["c"])({url:"/chat/user/chat/my/message",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{roomId:e}})}function c(e){return Object(n["c"])({url:"/chat/user/chat/initData",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{id:e}})}function u(e){return Object(n["c"])({headers:{"Response-Type":"blob","Content-Type":"application/x-www-form-urlencoded"},url:"/chat/user/chat/exportHistoryMessage",data:e})}function d(e){return Object(n["c"])({url:"/chat/user/chat/shareRoom",data:e})}function l(e){return Object(n["c"])({url:"/chat/user/chat/invite",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{code:e}})}},ea7f:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var n=a("b775");function r(){return Object(n["b"])({url:"/sys/user/getInfo"})}function i(){return Object(n["a"])({url:"/chat/errorBack"})}function s(e){return Object(n["a"])({url:"/sys/user/updateUser",data:e})}},f068:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var n=a("b775");function r(){return Object(n["c"])({url:"/chat/user/balance/getBalance"})}function i(){return Object(n["c"])({url:"/chat/user/balance/dayBalance"})}function s(){return Object(n["c"])({url:"/chat/user/balance/receiveBalance"})}},f782:function(e,t,a){e.exports=a.p+"static/img/ani.51cdc48d.jpeg"},f7e4:function(e,t,a){"use strict";a("44d4")},fa20:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u}));var n=a("852e"),r=a.n(n);const i=window.location.origin+window.location.pathname,s=i+"/userinfo";function o(){return r.a.get(s)}function c(e,t){const a=new Date(1*new Date+1e3*t);return r.a.set(s,e,{expires:a})}function u(){return r.a.remove(s)}}});