(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-26ed869f"],{"16c0":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"search_wrapper"},[e("span",{staticClass:"fs25"},[t._v("AI消息异常，"),e("el-link",{on:{click:t.errorBackInfo}},[t._v("点击反馈")])],1)]),e("div",{staticStyle:{"margin-bottom":"32px"}}),e("Tab")],1)},i=[],d=function(){var t=this,e=t._self._c;return e("div",[e("el-tabs",{attrs:{stretch:!0},on:{"tab-click":t.handlerClickTab},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.editableTabs,(function(a,s){return e("el-tab-pane",{key:s,attrs:{label:a.name,name:a.id.toString()}},[e("el-card",{staticClass:"tab_item",attrs:{slot:"label",shadow:"hover"},slot:"label"},[t._v(" "+t._s(a.name)+" ")]),t.activeName===a.id.toString()?e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.tabLoading,expression:"tabLoading"}]},[e("TabMain",{ref:"tabMain",refInFor:!0,attrs:{"model-data":a.modelList}})],1):t._e()],1)})),1)],1)},n=[],l=a("e223"),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"room_set"},[t._l(t.modelData,(function(a,s){return e("div",{key:s,staticClass:"room_item"},[e("el-card",{staticClass:"model_el_card",attrs:{shadow:"hover"}},[e("div",{staticClass:"model_flex",on:{click:function(e){return t.addRoom(a)}}},[e("img",{staticClass:"image model_flex_item",attrs:{src:a.ico||"https://fengzhengx.cn/upload/2021/01/logo-df2a3ea06ad34f39a31f04ec1ccce41d.png",alt:a.title}}),e("div",{staticClass:"model_flex_item",staticStyle:{padding:"14px"}},[e("span",[t._v(t._s(a.title))]),e("div",{staticClass:"bottom clearfix"},[e("div",{staticClass:"model_flex_title"},[t._v(t._s(a.description))])])])])])],1)})),e("div",{staticClass:"room_item"},[e("el-card",{staticClass:"model_el_card",attrs:{shadow:"hover"}},[e("div",{staticClass:"model_flex",attrs:{id:"ads-card"},domProps:{innerHTML:t._s(t.adsHtml)}})])],1)],2)},c=[],r=(a("14d9"),a("e75b")),m=a("cee4"),b={name:"TabMain",props:{modelData:{type:Array,default:()=>[]}},data(){return{adsHtml:""}},beforeCreate(){m["a"].get("https://fengzhengx.cn/ads_card.txt").then(t=>{this.adsHtml=t.data})},methods:{addRoom(t){Object(r["a"])({modelId:t.id,title:t.title,description:t.description}).then(t=>{200!==t.code?this.$message.error(t.msg||"Error"):this.$router.push({name:"ChatRoom",query:{roomId:t.data}})})}}},h=b,u=(a("1c6c"),a("0c7c")),f=Object(u["a"])(h,o,c,!1,null,"585239e9",null),_=f.exports,v={name:"Tab",components:{TabMain:_},data(){return{activeName:"",editableTabs:[],tabIndex:2,tabLoading:!1}},created(){this.initModelCate()},methods:{handlerClickTab(t){this.editableTabs[t.index].modelList||(this.tabLoading=!0,this.getModel(this.editableTabs[t.index]["id"],t.index))},getModel(t,e){Object(l["c"])(t).then(t=>{this.$set(this.editableTabs[e],"modelList",t.data),this.tabLoading=!1})},initModelCate(){Object(l["b"])().then(t=>{this.editableTabs=t.data,this.initModel()})},initModel(){const t=0,e=this.editableTabs[t]["id"];this.activeName=e,this.getModel(e,t)}}},p=v,g=(a("8df5"),Object(u["a"])(p,d,n,!1,null,null,null)),C=g.exports,x=a("ea7f"),T={name:"Home",components:{Tab:C},methods:{errorBackInfo(){Object(x["a"])().then(t=>{200===t.code&&this.$message.success("反馈成功")})}}},k=T,M=(a("9a8a"),Object(u["a"])(k,s,i,!1,null,"6f04cde4",null));e["default"]=M.exports},"1c6c":function(t,e,a){"use strict";a("41c3")},2363:function(t,e,a){},"2c9f":function(t,e,a){},"41c3":function(t,e,a){},"8df5":function(t,e,a){"use strict";a("2363")},"9a8a":function(t,e,a){"use strict";a("2c9f")}}]);