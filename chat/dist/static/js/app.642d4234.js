(function(e){function t(t){for(var r,n,i=t[0],c=t[1],d=t[2],u=0,l=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&l.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);h&&h(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==s[i]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},o=[];function i(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-46e40533":"460c57fd","chunk-7eedabf2":"dcd7dad1","chunk-dba7e67a":"1a4985e8","chunk-493f2480":"315ff8d0","chunk-72f15757":"b9e00f4a","chunk-5e8282d6":"decd8215","chunk-6775fd5e":"fb651601","chunk-782758cb":"8da7474a","chunk-86a2dab6":"6788ce21"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-7eedabf2":1,"chunk-493f2480":1,"chunk-72f15757":1,"chunk-5e8282d6":1,"chunk-6775fd5e":1,"chunk-782758cb":1,"chunk-86a2dab6":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-46e40533":"31d6cfe0","chunk-7eedabf2":"12c92c08","chunk-dba7e67a":"31d6cfe0","chunk-493f2480":"54c13357","chunk-72f15757":"27f9ef9b","chunk-5e8282d6":"d7b11a7e","chunk-6775fd5e":"bbc5797f","chunk-782758cb":"326ba170","chunk-86a2dab6":"88f2549f"}[e]+".css",s=c.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var d=o[i],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===r||u===s))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){d=l[i],u=d.getAttribute("data-href");if(u===r||u===s)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],h.parentNode.removeChild(h),a(o)},h.href=s;var m=document.getElementsByTagName("head")[0];m.appendChild(h)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=o);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var l=new Error;d=function(t){u.onerror=u.onload=null,clearTimeout(h);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",l.name="ChunkLoadError",l.type=r,l.request=n,a[1](l)}s[e]=void 0}};var h=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="https://cdn.jsdelivr.net/gh/xiaodingfeng/thea-res@latest/chat/dist/",c.oe=function(e){throw e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var h=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1:function(e,t){},1101:function(e,t,a){"use strict";a("5494");function r(e,t){const a=document.createElement("a");a.href=e,a.download=t||"export"+(new Date).getTime(),a.click(),window.URL.revokeObjectURL(e)}t["a"]=r},"34a6":function(e,t,a){e.exports=a.p+"static/img/xin.d43e3c95.png"},4360:function(e,t,a){"use strict";var r=a("2b0e"),n=a("2f62");const s={sidebar:e=>e.app.sidebar,device:e=>e.app.device,accessToken:e=>e.user.accessToken,refreshToken:e=>e.user.refreshToken,avatar:e=>e.user.avatar,name:e=>e.user.name};var o=s,i=a("852e"),c=a.n(i);const d={sidebar:{opened:!c.a.get("sidebarStatus")||!!+c.a.get("sidebarStatus"),withoutAnimation:!1},device:"desktop"},u={TOGGLE_SIDEBAR:e=>{e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1,e.sidebar.opened?c.a.set("sidebarStatus",1):c.a.set("sidebarStatus",0)},CLOSE_SIDEBAR:(e,t)=>{c.a.set("sidebarStatus",0),e.sidebar.opened=!1,e.sidebar.withoutAnimation=t},TOGGLE_DEVICE:(e,t)=>{e.device=t}},l={toggleSideBar({commit:e}){e("TOGGLE_SIDEBAR")},closeSideBar({commit:e},{withoutAnimation:t}){e("CLOSE_SIDEBAR",t)},toggleDevice({commit:e},t){e("TOGGLE_DEVICE",t)}};var h={namespaced:!0,state:d,mutations:u,actions:l},m=a("ea7f"),p=a("5f87"),f=a("b976");const b=window.location.origin+window.location.pathname,v=b+"/userinfo";function g(){return c.a.get(v)}function w(e,t){const a=new Date(1*new Date+1e3*t);return c.a.set(v,e,{expires:a})}function k(){return c.a.remove(v)}const y=()=>({accessToken:Object(p["a"])(),refreshToken:Object(p["b"])(),name:g()?JSON.parse(g()).name:"",avatar:g()?JSON.parse(g()).avatar:""}),T=y(),_={RESET_STATE:e=>{Object.assign(e,y())},SET_ACCESS_TOKEN:(e,t)=>{e.accessToken=t},SET_REFRESH_TOKEN:(e,t)=>{e.refreshToken=t},SET_NAME:(e,t)=>{e.name=t},SET_AVATAR:(e,t)=>{e.avatar=t}},E={login({commit:e},t){return Object(f["b"])(t).then(t=>{const{code:a,msg:r,data:n}=t;return 200!==a?Promise.reject(r):(e("SET_ACCESS_TOKEN",n.accessToken),e("SET_REFRESH_TOKEN",n.refreshToken),Object(p["e"])(n.accessToken,n.accessTokenExpireTime),Object(p["f"])(n.refreshToken,n.refreshTokenExpireTime),Object(m["b"])().then(t=>{const a=t.data;if(!a)return Object(p["c"])(),Object(p["d"])(),e("RESET_STATE"),Promise.reject("Verification failed, please Login again.");const{nickName:r,avatar:s}=a;e("SET_NAME",r),e("SET_AVATAR",s);const o={name:r,avatar:s};return w(JSON.stringify(o),n.refreshTokenExpireTime),Promise.resolve()}).catch(e=>Promise.reject(e)))})},getInfo({commit:e,state:t}){return new Promise((a,r)=>{Object(m["b"])(t.token).then(t=>{const{nickName:r,avatar:n}=t.data;e("SET_NAME",r),e("SET_AVATAR",n);const s={name:r,avatar:n};w(JSON.stringify(s),99e5),a(t.data)}).catch(e=>{r(e)})})},logout({commit:e,state:t}){return new Promise((t,a)=>{Object(f["c"])().then(a=>{200===a.code&&(Object(p["c"])(),Object(p["d"])(),k(),e("RESET_STATE"),t())}).catch(e=>{a(e)})})},refreshToken({commit:e,state:t},a){return new Promise((t,r)=>{Object(f["d"])(a).then(a=>{if(200===a.code){const{data:n}=a;return e("SET_ACCESS_TOKEN",n.accessToken),e("SET_REFRESH_TOKEN",n.refreshToken),Object(p["e"])(n.accessToken,n.accessTokenExpireTime),Object(p["f"])(n.refreshToken,n.refreshTokenExpireTime),Object(m["b"])().then(a=>{const r=a.data;if(!r)return Object(p["c"])(),Object(p["d"])(),e("RESET_STATE"),Promise.reject("Verification failed, please Login again.");const{nickName:s,avatar:o}=r;e("SET_NAME",s),e("SET_AVATAR",o);const i={name:s,avatar:o};w(JSON.stringify(i),n.refreshTokenExpireTime),t()}).catch(e=>{r(e)})}r(a.msg)}).catch(e=>{r(e)})})},resetAccessToken({commit:e}){return new Promise(t=>{Object(p["c"])(),e("RESET_STATE"),t()})},resetRefreshToken({commit:e}){return new Promise(t=>{Object(p["d"])(),e("RESET_STATE"),t()})}},O={};var j={namespaced:!0,state:T,mutations:_,actions:E,getters:O};r["default"].use(n["a"]);t["a"]=new n["a"].Store({modules:{app:h,user:j},getters:o})},"44d4":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=(a("f5df"),a("5c96")),s=a.n(n),o=(a("0fae"),a("450d"),a("a4b1"),a("8c4f")),i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app_wrapper",class:e.classObj},[t("transition",{attrs:{name:"slide-fade"}},[t("el-container",["mobile"===e.device&&e.sidebar.opened?t("div",{staticClass:"mask",on:{click:e.handleClickOutside}}):e._e(),t("el-aside",[t("Logo",{attrs:{title:"蜡笔小新"}}),t("div",{staticClass:"functional_area"},[t("el-input",{attrs:{size:"small",clearable:"",placeholder:"搜索对话","suffix-icon":"el-icon-search"},on:{change:e.searchChat},model:{value:e.keywords,callback:function(t){e.keywords=t},expression:"keywords"}}),t("i",{staticClass:"el-icon-plus add_room_ico",on:{click:e.addRoom}})],1),t("conversation-menu",{attrs:{"menu-data":e.menuData},on:{initRoom:e.initRoom}})],1),t("el-main",[e.$route.meta.showMainMenu?t("main-menu"):e._e(),t("router-view",{key:e.$route.fullPath})],1)],1)],1),t("el-dialog",{attrs:{title:"新增会话",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.addRoomData}},[t("el-form-item",{attrs:{label:"模型"}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addRoomData.modelId,callback:function(t){e.$set(e.addRoomData,"modelId",t)},expression:"addRoomData.modelId"}},e._l(e.modelGroupOptions,(function(a,r){return t("el-option-group",{key:r,attrs:{label:r}},e._l(a,(function(e){return t("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)})),1)],1),t("el-form-item",{attrs:{label:"标题"}},[t("el-input",{model:{value:e.addRoomData.title,callback:function(t){e.$set(e.addRoomData,"title",t)},expression:"addRoomData.title"}})],1),t("el-form-item",{attrs:{label:"描述"}},[t("el-input",{model:{value:e.addRoomData.description,callback:function(t){e.$set(e.addRoomData,"description",t)},expression:"addRoomData.description"}})],1),t("el-form-item",{attrs:{label:"历史数量"}},[t("el-input",{attrs:{placeholder:"附带历史会话数量，默认10",type:"number"},model:{value:e.addRoomData.hisNum,callback:function(t){e.$set(e.addRoomData,"hisNum",t)},expression:"addRoomData.hisNum"}})],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){e.centerDialogVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.submitRoom}},[e._v("确 定")])],1)],1)],1)},c=[],d=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",{staticClass:"logo_wrapper",on:{click:e.goHomePage}},[t("img",{staticClass:"logo_img",attrs:{src:a("34a6"),alt:"logo"}}),t("div",{staticClass:"app_title"},[e._v(e._s(e.title))])])}),u=[],l={name:"Logo",props:{title:{type:String,default:"蜡笔小新"}},methods:{goHomePage(){this.$router.push({path:"/"})}}},h=l,m=(a("a245"),a("0c7c")),p=Object(m["a"])(h,d,u,!1,null,"f53f5032",null),f=p.exports,b=function(){var e=this,t=e._self._c;return t("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[t("ul",{staticClass:"menu_wrapper"},e._l(e.menuData,(function(r){return t("li",{key:r.key,staticClass:"menu_item_wrapper"},[t("div",{class:"menu_item "+e.activeClass(r)},[t("div",{staticClass:"avatar"},[t("img",{attrs:{src:a("f782"),alt:"avatar"}})]),t("div",{staticClass:"des_title",on:{click:function(t){return e.goChatPage(r)}}},[t("span",{staticClass:"title"},[e._v(e._s(r.title))]),t("span",{staticClass:"des"},[e._v(e._s(r.des))])]),t("div",{staticClass:"edit_delete"},[t("el-popover",{staticClass:"edit_more_popover",attrs:{placement:"top"}},[t("div",{staticClass:"edit_more"},[t("el-tag",{staticClass:"cursor-pointer",attrs:{size:"mini"},on:{click:function(t){return e.deleteRoom(r.id)}}},[e._v("删除")])],1),t("i",{staticClass:"el-icon-more",attrs:{slot:"reference"},slot:"reference"})])],1)])])})),0),t("footer",[t("div",[e._v("All rights reserved "),t("el-link",{attrs:{type:"primary",target:"_blank",underline:!1,href:"https://fengzhengx.cn"}},[e._v("fengzhengx.cn")])],1)])])},v=[],g=a("e75b"),w={name:"ConversationMenu",props:{menuData:{type:Array,default:()=>[]}},data(){return{visible:!1}},methods:{goChatPage(e){this.$router.push({name:"ChatRoom",query:{roomId:e.id}})},activeClass(e){if("/chat/room"===this.$route.path&&this.$route.query.roomId===e.id)return" active"},deleteRoom(e){Object(g["f"])(e).then(e=>{200===e.code&&(this.$message.success("删除成功"),this.$emit("initRoom"))})}}},k=w,y=(a("86f3"),Object(m["a"])(k,b,v,!1,null,"68cec64f",null)),T=y.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"menu_wrapper"},[t("div",{staticClass:"menu_left"},[t("hamburger",{staticClass:"hamburger-container",attrs:{"is-active":e.sidebar.opened},on:{toggleClick:e.toggleSideBar}})],1),t("div",{staticClass:"menu"},[t("el-menu",{staticClass:"el-menu-pro",attrs:{"text-color":"#000","default-active":e.activeIndex,mode:"horizontal"},on:{select:e.handleSelect}},[t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"mobile"!==e.device,expression:"device !== 'mobile'"}],attrs:{index:"2"}},[e._v("交流中心")]),t("el-menu-item",{directives:[{name:"show",rawName:"v-show",value:"mobile"!==e.device,expression:"device !== 'mobile'"}],attrs:{index:"3"}},[e._v("论文生成")]),t("el-submenu",{directives:[{name:"show",rawName:"v-show",value:"mobile"===e.device,expression:"device === 'mobile'"}],attrs:{index:"0"}},[t("template",{slot:"title"},[e._v("更多工具")]),t("el-menu-item",{attrs:{index:"2"}},[e._v("交流中心")]),t("el-menu-item",{attrs:{index:"3"}},[e._v("论文生成")])],2)],1)],1),t("el-popover",{attrs:{placement:"top-start",trigger:"hover"}},[t("div",{staticStyle:{display:"flex",gap:"8px"}},[t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:e.openUserInfo}},[e._v("个人信息")]),t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:e.balancePage}},[e._v("额度： "+e._s(e.userBalance.chatBalance))]),t("el-tag",{staticStyle:{cursor:"pointer"},attrs:{type:"danger"},on:{click:e.logout}},[e._v("登出")])],1),t("div",{staticClass:"menu_right",attrs:{slot:"reference"},slot:"reference"},[t("div",{staticClass:"user_info cursor-pointer"},[t("el-avatar",{attrs:{size:"medium",src:e.avatar}}),t("div",{staticClass:"name"},[e._v(e._s(e.name))])],1)])]),t("el-dialog",{attrs:{title:"额度信息",visible:e.centerDialogVisible,center:""},on:{"update:visible":function(t){e.centerDialogVisible=t}}},[t("div",[t("div",[e._v("我的额度："),t("b",[e._v(e._s(e.userBalance.chatBalance))])]),t("br"),t("div",[e._v("每日领取额度："),t("b",[e._v(e._s(e.dayBalance.balance))]),t("div",{staticStyle:{float:"right"}},[e.dayBalance.canBeReceive?t("el-tag",{staticClass:"cursor-pointer",attrs:{s:""},on:{click:e.receiveBalance}},[e._v("领取")]):t("el-tag",{attrs:{type:"info"}},[e._v("已领取")])],1)])])]),t("el-dialog",{attrs:{title:"个人信息",visible:e.userDialogVisible,center:""},on:{"update:visible":function(t){e.userDialogVisible=t}}},[t("div",[t("el-form",{attrs:{"label-position":"left","label-width":"80px",model:e.editUserData}},[t("el-form-item",{attrs:{label:"用户名"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editUserData.userName,callback:function(t){e.$set(e.editUserData,"userName",t)},expression:"editUserData.userName"}})],1),t("el-form-item",{attrs:{label:"邮箱"}},[t("el-input",{attrs:{disabled:""},model:{value:e.editUserData.email,callback:function(t){e.$set(e.editUserData,"email",t)},expression:"editUserData.email"}})],1),t("el-form-item",{attrs:{label:"昵称"}},[t("el-input",{model:{value:e.editUserData.nickName,callback:function(t){e.$set(e.editUserData,"nickName",t)},expression:"editUserData.nickName"}})],1),t("el-form-item",{attrs:{label:"头像"}},[t("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,"show-file-list":!1,accept:"image/*","on-success":e.handleAvatarSuccess}},[e.editUserData.avatar?t("el-avatar",{attrs:{size:"large",src:e.editUserData.avatar}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})],1)],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{type:"password",placeholder:"不修改请留空"},model:{value:e.editUserData.password,callback:function(t){e.$set(e.editUserData,"password",t)},expression:"editUserData.password"}})],1),t("el-form-item",{attrs:{label:"确认密码"}},[t("el-input",{attrs:{type:"password",placeholder:"不修改请留空"},model:{value:e.editUserData.confirmPassword,callback:function(t){e.$set(e.editUserData,"confirmPassword",t)},expression:"editUserData.confirmPassword"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitEditUser()}}},[e._v("提交")])],1)],1)],1)])],1)},E=[],O=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{padding:"0 15px"},on:{click:e.toggleClick}},[t("svg",{staticClass:"hamburger",class:{"is-active":e.isActive},attrs:{viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",width:"64",height:"64"}},[t("path",{attrs:{d:"M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"}})])])},j=[],x={name:"Hamburger",props:{isActive:{type:Boolean,default:!1}},methods:{toggleClick(){this.$emit("toggleClick")}}},D=x,S=(a("7e01"),Object(m["a"])(D,O,j,!1,null,"11c193c9",null)),C=S.exports,R=a("f068"),A=a("ea7f"),P={name:"MainMenu",components:{Hamburger:C},data(){return{userBalance:{chatBalance:0},centerDialogVisible:!1,userDialogVisible:!1,dayBalance:{balance:0,canBeReceive:!1},editUserData:{},uploadUrl:"/api/tool/images/upload"}},computed:{activeIndex(){return"/paper/index"===this.$route.path?"3":"/im/index"===this.$route.path?"2":"0"},sidebar(){return this.$store.state.app.sidebar},name(){return this.$store.state.user.name},avatar(){return this.$store.state.user.avatar},device(){return this.$store.state.app.device}},mounted(){this.getBalance(),this.getDayBalance()},methods:{submitEditUser(){!this.editUserData.password&&!this.editUserData.confirmPassword||this.editUserData.password===this.editUserData.confirmPassword?Object(A["c"])(this.editUserData).then(e=>{if(200===e.code)return this.$notify.success("修改成功"),void this.$store.dispatch("user/getInfo").then();this.$notify.error(e.msg||"修改失败")}):this.$notify.error("密码不一致")},handleAvatarSuccess(e,t){this.$set(this.editUserData,"avatar",e.data[0].url)},openUserInfo(){Object(A["b"])().then(e=>{this.editUserData=e.data}),this.userDialogVisible=!0},balancePage(){this.getBalance(),this.getDayBalance(),this.centerDialogVisible=!0},receiveBalance(){Object(R["c"])().then(e=>{200===e.code&&(this.$notify.success("领取成功"),this.getBalance(),this.getDayBalance())})},getBalance(){Object(R["b"])().then(e=>{e.data&&(this.userBalance=e.data)})},getDayBalance(){Object(R["a"])().then(e=>{e.data&&(this.dayBalance=e.data)})},toggleSideBar(){this.$store.dispatch("app/toggleSideBar")},handleSelect(e){"1"!==e?"2"!==e?"3"!==e||this.$router.push({name:"PaperIndex"}):this.$router.push({path:"/im/index"}):this.$router.push({name:"MemberIndex"})},logout(){this.$store.dispatch("user/logout").finally(()=>{this.$router.push({path:"/login"})})}}},B=P,M=(a("73e7"),Object(m["a"])(B,_,E,!1,null,"6f66184c",null)),$=M.exports,U=a("4360");const{body:I}=document,N=992;var L={watch:{$route(e){"mobile"===this.device&&this.sidebar.opened&&U["a"].dispatch("app/closeSideBar",{withoutAnimation:!1})}},beforeMount(){window.addEventListener("resize",this.$_resizeHandler)},beforeDestroy(){window.removeEventListener("resize",this.$_resizeHandler)},mounted(){const e=this.$_isMobile();e&&(U["a"].dispatch("app/toggleDevice","mobile"),U["a"].dispatch("app/closeSideBar",{withoutAnimation:!0}))},methods:{$_isMobile(){const e=I.getBoundingClientRect();return e.width-1<N},$_resizeHandler(){if(!document.hidden){const e=this.$_isMobile();U["a"].dispatch("app/toggleDevice",e?"mobile":"desktop"),e&&U["a"].dispatch("app/closeSideBar",{withoutAnimation:!0})}}}},H=a("945b"),V=a.n(H),q=a("e223"),z={name:"Layout",components:{Logo:f,ConversationMenu:T,MainMenu:$},mixins:[L],data(){return{centerDialogVisible:!1,keywords:"",variables:V.a,menuData:[],addRoomData:{hisNum:10,modelId:"159"},modelGroupOptions:[]}},computed:{sidebar(){return this.$store.state.app.sidebar},device(){return this.$store.state.app.device},classObj(){return{hideSidebar:!this.sidebar.opened,openSidebar:this.sidebar.opened,withoutAnimation:this.sidebar.withoutAnimation,mobile:"mobile"===this.device}}},mounted(){this.initRoom(),this.initOptions()},methods:{submitRoom(){Object(g["a"])(this.addRoomData).then(e=>{if(200===e.code)return this.$router.push({name:"ChatRoom",query:{roomId:e.data}}),this.centerDialogVisible=!1,void this.initRoom();this.$message.error(e.msg||"Error")})},addRoom(){this.centerDialogVisible=!0},searchChat(){this.initRoom()},handleClickOutside(){this.$store.dispatch("app/closeSideBar",{withoutAnimation:!1})},initOptions(){Object(q["a"])().then(e=>{this.modelGroupOptions=e.data})},initRoom(){Object(g["e"])({keywords:this.keywords}).then(e=>{this.menuData=e.data.map(e=>({title:e.title,des:e.description,key:e.id,id:e.id,modelId:e.modelId}))})}}},G=z,F=(a("87af"),Object(m["a"])(G,i,c,!1,null,"6c00a7dd",null)),J=F.exports;const K=[{path:"/login",component:()=>a.e("chunk-782758cb").then(a.bind(null,"2f7e"))},{path:"/404",component:()=>a.e("chunk-6775fd5e").then(a.bind(null,"afa4")),hidden:!0}],W=[{path:"*",redirect:"/404",hidden:!0}],X=[{path:"/",component:J,redirect:"/home",children:[{path:"home",name:"Home",meta:{showMainMenu:!0},component:()=>a.e("chunk-86a2dab6").then(a.bind(null,"16c0"))}]},{path:"/chat",name:"Chat",component:J,redirect:"/chat/room",children:[{path:"room",name:"ChatRoom",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-dba7e67a"),a.e("chunk-72f15757")]).then(a.bind(null,"6de4"))}]},{path:"/member",name:"Member",component:J,redirect:"/member/index",children:[{path:"index",name:"MemberIndex",meta:{showMainMenu:!0},component:()=>a.e("chunk-5e8282d6").then(a.bind(null,"48e4"))}]},{path:"/im",name:"IM",component:J,redirect:"/IM/index",children:[{path:"index",name:"IMIndex",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-dba7e67a"),a.e("chunk-493f2480")]).then(a.bind(null,"a626"))}]},{path:"/paper",name:"Paper",component:J,redirect:"/paper/index",children:[{path:"index",name:"PaperIndex",meta:{showMainMenu:!0},component:()=>Promise.all([a.e("chunk-46e40533"),a.e("chunk-7eedabf2")]).then(a.bind(null,"b8ac"))}]}];r["default"].use(o["a"]);const Q=()=>new o["a"]({scrollBehavior:()=>({y:0}),routes:K.concat(X,W)}),Y=Q();var Z=Y,ee=a("323e"),te=a.n(ee),ae=(a("a5d8"),a("5f87"));te.a.configure({showSpinner:!1});const re=["/login"];Z.beforeEach(async(e,t,a)=>{te.a.start();const r=Object(ae["a"])();if(r)if("/login"===e.path)a({path:"/"}),te.a.done();else{const t=U["a"].getters.name;if(t)a();else try{a()}catch(s){await U["a"].dispatch("user/resetAccessToken"),n["Message"].error(s||"Has Error"),a("/login?redirect="+e.path),te.a.done()}}else{const t=Object(ae["b"])();if(t){await U["a"].dispatch("user/refreshToken",t).catch(()=>{U["a"].dispatch("user/resetRefreshToken"),a("/login?redirect="+e.path),te.a.done()});try{return void a()}catch(s){n["Message"].error(s||"Has Error"),a("/login?redirect="+e.path),te.a.done()}}-1!==re.indexOf(e.path)?a():(a("/login?redirect="+e.fullPath),te.a.done())}}),Z.afterEach(()=>{te.a.done()});var ne=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("router-view",{key:e.$route.path})],1)},se=[],oe={name:"App"},ie=oe,ce=(a("f7e4"),Object(m["a"])(ie,ne,se,!1,null,"ef192480",null)),de=ce.exports,ue=a("1487"),le=a.n(ue),he=(a("9f21"),a("79b5")),me=(a("0808"),a("6944")),pe=a.n(me),fe=a("544d"),be=a.n(fe);a("9466");s.a.Dialog.props.closeOnClickModal.default=!1,r["default"].use(be.a),be.a.initAMapApiLoader({key:"a0bccd0ae30752c2a17c617c66fb2b13"}),r["default"].use(pe.a),r["default"].use(he["a"]),r["default"].use(le.a),r["default"].use(s.a),r["default"].config.productionTip=!1,new r["default"]({router:Z,store:U["a"],render:e=>e(de)}).$mount("#app"),r["default"].directive("highlight",(function(e){const t=e.querySelectorAll("pre code");t.forEach(e=>{le.a.highlightElement(e)})}))},"5f87":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"e",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"f",(function(){return h})),a.d(t,"d",(function(){return m}));var r=a("852e"),n=a.n(r);const s=window.location.origin+window.location.pathname,o=s+"/Authorization",i=s+"/RefreshAuthorization";function c(){return n.a.get(o)}function d(e,t){const a=new Date(1*new Date+1e3*t);return n.a.set(o,e,{expires:a})}function u(){return n.a.remove(o)}function l(){return n.a.get(i)}function h(e,t){const a=new Date(1*new Date+1e3*t);return n.a.set(i,e,{expires:a})}function m(){return n.a.remove(i)}},"6cdd":function(e,t,a){},"73e7":function(e,t,a){"use strict";a("f0fc")},"7e01":function(e,t,a){"use strict";a("6cdd")},"86f3":function(e,t,a){"use strict";a("d9ac")},"87af":function(e,t,a){"use strict";a("b356")},"945b":function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"260px"}},a245:function(e,t,a){"use strict";a("c6b2")},a4b1:function(e,t,a){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"260px"}},b356:function(e,t,a){},b775:function(e,t,a){"use strict";a.d(t,"b",(function(){return f})),a.d(t,"c",(function(){return b}));a("5494"),a("d9e2");var r=a("cee4"),n=a("4328"),s=a.n(n),o=a("5f87");const i=r["a"].create({baseURL:"/api"});i.interceptors.request.use(e=>{e.headers["Content-Type"]=e.headers["Content-Type"]||"application/json;charset=utf-8","post"===e.method&&(e.params=void 0),"string"===typeof e.headers["Content-Type"]&&-1!==e.headers["Content-Type"].search("application/x-www-form-urlencoded")&&(e.data=s.a.stringify(e.data));const t=Object(o["a"])();return t&&(e.headers.Authorization="bearer "+t),e},e=>Promise.reject(e.response)),i.interceptors.response.use(e=>{if(200===e.status)return e;throw new Error(e.status.toString())},e=>Promise.reject(e));var c=i,d=a("4360"),u=a("5c96"),l=a("1101");function h(e){const t=e.headers["content-disposition"].split(";")[1].split("fileName=")[1],a=decodeURI(t),r=window.navigator.userAgent,n=/msie\s|trident\/|edge\//i.test(r)&&!!("uniqueID"in document||"documentMode"in document||"ActiveXObject"in window||"MSInputMethodContext"in window),s=new Blob([e.data],{type:e.data.type});if(n)navigator.msSaveBlob(s,a);else{const e=window.URL.createObjectURL(s);Object(l["a"])(e,a)}}async function m(){const e=Object(o["a"])();if(e)return;const t=Object(o["b"])();t&&await d["a"].dispatch("user/refreshToken",t).catch(e=>{d["a"].dispatch("user/resetRefreshToken")})}function p({url:e,data:t,method:a,headers:r,onDownloadProgress:n,signal:s,beforeRequest:i,afterRequest:l}){m().then(e=>{});const f=e=>r&&r["Response-Type"]&&"blob"===r["Response-Type"]?e.data.code?e.data.code&&200!==e.data.code?(u["Message"].error(e.data.msg||"Error"),Promise.reject(e.data)):e.data:void h(e):200===e.data.code||"string"===typeof e.data?e.data:(u["Message"].error(e.data.msg||e.data.text||"Error"),Promise.reject(e.data)),b=async c=>{if(null===l||void 0===l||l(),!c.response)throw new Error("Error");if(503===c.response.status)throw new Error(c.message||"Error");if(400===c.response.status)throw new Error(c.response.data.msg||"Error");if(401===c.response.status){await d["a"].dispatch("user/resetAccessToken");const u=Object(o["b"])();if(u)return await d["a"].dispatch("user/refreshToken",u).catch(e=>{d["a"].dispatch("user/resetRefreshToken")}),p({url:e,data:t,method:a,headers:r,onDownloadProgress:n,signal:s,beforeRequest:i,afterRequest:l});throw new Error(c.response.data.msg||"Error")}throw new Error(c.message||"Error")};null===i||void 0===i||i(),a=a||"GET";const v=Object.assign("function"===typeof t?t():null!==t&&void 0!==t?t:{},{}),g=new AbortController,w={signal:g.signal,params:v,onDownloadProgress:n},k="GET"===a?c.get(e,{headers:r,...w}):c.post(e,v,{headers:r,...w}),y=k.then(f,b);return s&&s.addEventListener&&s.addEventListener("abort",()=>{g.abort()}),y}function f({url:e,data:t,method:a="GET",onDownloadProgress:r,signal:n,beforeRequest:s,afterRequest:o}){return p({url:e,method:a,data:t,onDownloadProgress:r,signal:n,beforeRequest:s,afterRequest:o})}function b({url:e,data:t,method:a="POST",headers:r,onDownloadProgress:n,signal:s,beforeRequest:o,afterRequest:i}){return p({url:e,method:a,data:t,headers:r,onDownloadProgress:n,signal:s,beforeRequest:o,afterRequest:i})}t["a"]=b},b976:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i}));var r=a("cee4");function n(e){return r["a"].create({baseURL:"/api"}).post("/sys/user/login",e,{headers:{"Content-Type":"application/json;charset=utf-8"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function s(e){return r["a"].create({baseURL:"/api"}).post("/sys/user/captcha",e,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function o(){return r["a"].create({baseURL:"/api"}).post("/sys/user/logout").then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}function i(e){return r["a"].create({baseURL:"/api"}).post("/sys/user/refreshToken",{refreshToken:e},{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>200===e.status?Promise.resolve(e.data):Promise.reject(e.status)).catch(e=>Promise.reject(e))}},c6b2:function(e,t,a){},d9ac:function(e,t,a){},e223:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o}));var r=a("b775");function n(){return Object(r["c"])({url:"/chat/category/list"})}function s(){return Object(r["c"])({url:"/chat/model/listGroupByCate"})}function o(e){return Object(r["c"])({url:"/chat/model/listByCate",data:{cateId:e},headers:{"Content-Type":"application/x-www-form-urlencoded"}})}},e75b:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"e",(function(){return s})),a.d(t,"a",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return d}));var r=a("b775");function n(e){return Object(r["c"])({url:"/chat/user/chat/my/remove",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{roomId:e}})}function s(e){return Object(r["c"])({url:"/chat/user/chat/my",data:e})}function o(e){return Object(r["c"])({url:"/chat/user/chat/addChat",data:e})}function i(e){return Object(r["c"])({url:"/chat/user/chat/my/message",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{roomId:e}})}function c(e){return Object(r["c"])({url:"/chat/user/chat/initData",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{id:e}})}function d(e){return Object(r["c"])({headers:{"Response-Type":"blob","Content-Type":"application/x-www-form-urlencoded"},url:"/chat/user/chat/exportHistoryMessage",data:e})}},ea7f:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o}));var r=a("b775");function n(){return Object(r["b"])({url:"/sys/user/getInfo"})}function s(){return Object(r["a"])({url:"/chat/errorBack"})}function o(e){return Object(r["a"])({url:"/sys/user/updateUser",data:e})}},f068:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return o}));var r=a("b775");function n(){return Object(r["c"])({url:"/chat/user/balance/getBalance"})}function s(){return Object(r["c"])({url:"/chat/user/balance/dayBalance"})}function o(){return Object(r["c"])({url:"/chat/user/balance/receiveBalance"})}},f0fc:function(e,t,a){},f782:function(e,t,a){e.exports=a.p+"static/img/ani.51cdc48d.jpeg"},f7e4:function(e,t,a){"use strict";a("44d4")}});