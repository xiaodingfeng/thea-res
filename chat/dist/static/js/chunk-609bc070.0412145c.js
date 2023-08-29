(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609bc070"],{8397:function(e,t,r){"use strict";r("ab32")},ab32:function(e,t,r){},b8ac:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"paper-index-wrapper"},[t("div",{staticClass:"user-table"},[t("el-tag",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"cursor-pointer",attrs:{type:"success"},on:{click:e.openHisDialog}},[e._v("历史记录")])],1),t("div",{staticClass:"step-wrapper"},[t("el-steps",{attrs:{active:e.active,"finish-status":"success"}},[t("el-step"),t("el-step"),t("el-step")],1)],1),t("div",{staticClass:"main-wrapper"},[t("div",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"step step1"},[t("div",[t("el-form",{ref:"step1Form",attrs:{id:"step1Form",model:e.step1Form,"label-width":"80px"}},[t("el-form-item",{attrs:{prop:"title",label:"论文标题",rules:{required:!0,message:"论文标题不能为空",trigger:"blur"}}},[t("el-input",{model:{value:e.step1Form.title,callback:function(t){e.$set(e.step1Form,"title",t)},expression:"step1Form.title"}})],1),t("el-form-item",{attrs:{prop:"tags",label:"论文标签",rules:{required:!0,message:"论文标签不能为空",trigger:"blur"}}},[t("el-input",{model:{value:e.step1Form.tags,callback:function(t){e.$set(e.step1Form,"tags",t)},expression:"step1Form.tags"}})],1),t("el-form-item",{attrs:{prop:"wordNum",label:"论文字数",rules:{required:!0,message:"论文字数不能为空",trigger:"blur"}}},[t("el-radio-group",{model:{value:e.step1Form.wordNum,callback:function(t){e.$set(e.step1Form,"wordNum",t)},expression:"step1Form.wordNum"}},[t("el-radio",{attrs:{value:"1000",label:"1000"}}),t("el-radio",{attrs:{value:"2000",label:"2000"}}),t("el-radio",{attrs:{value:"3000",label:"3000"}}),t("el-radio",{attrs:{value:"4000",label:"4000"}}),t("el-radio",{attrs:{value:"5000",label:"5000"}})],1)],1),t("el-form-item",{attrs:{id:"step1FormBtn"}},[t("el-button",{attrs:{round:"",size:"medium",type:"primary"},on:{click:function(t){return e.step1Click("step1Form")}}},[e._v("生成大纲")])],1)],1)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],staticClass:"step step2"},[t("div",[t("el-form",{ref:"step2Form",attrs:{id:"step2Form",model:e.step2Form,"label-width":"35px"}},[e._l(e.step2Form.outlineTemp,(function(r,s){return t("el-form-item",{key:s,attrs:{label:""+(s+1),prop:"outlineTemp."+s+".value",rules:{required:!0,message:"条目不能为空",trigger:"blur"}}},[t("div",{staticStyle:{display:"flex",gap:"4px"}},[t("el-input",{model:{value:r.value,callback:function(t){e.$set(r,"value",t)},expression:"item.value"}}),t("el-button",{staticClass:"cursor-pointer",attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(t){return e.removeOutline(r)}}})],1)])})),t("el-form-item",{staticClass:"submit-btn"},[t("div",{staticStyle:{display:"flex",gap:"4px"}},[t("el-button",{attrs:{size:"medium",type:"success",round:""},on:{click:e.addOutline}},[e._v("新增条目")]),t("el-button",{attrs:{size:"medium",round:""},on:{click:function(t){e.active=0}}},[e._v("返回")]),t("el-button",{attrs:{size:"medium",type:"warning",round:""},on:{click:function(t){return e.step2Click("step2Form")}}},[e._v("生成论文")])],1)])],2)],1)]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.active>=2,expression:"active >= 2"}],staticClass:"step step3"},[t("div",{staticClass:"paper-generate-drawer"},e._l(e.step3Form.paper,(function(r,s){return t("div",{key:s,staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:e._s(r)}})})),0),t("div",{staticStyle:{"text-align":"center"}},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.step3Form.errorFlag,expression:"step3Form.errorFlag"}],staticStyle:{border:"1px dashed #5da5d0"},attrs:{size:"medium",round:""},on:{click:e.retryMessage}},[e._v("继续")]),t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.step3Form.isMsgReceiving,expression:"step3Form.isMsgReceiving"}],staticStyle:{border:"1px dashed #5da5d0"},attrs:{size:"medium",round:""},on:{click:e.stopMessage}},[e._v("停止")])],1),t("div",{staticStyle:{display:"flex",gap:"4px","margin-bottom":"15px","margin-top":"15px"}},[t("el-button",{attrs:{size:"medium",round:""},on:{click:e.goBackOne}},[e._v("回到首页")]),t("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[t("div",{staticStyle:{display:"flex",gap:"8px"}},[t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.exportPaper(e.paperId,"docx")}}},[e._v("word")]),t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.exportPaper(e.paperId,"pdf")}}},[e._v("pdf")]),t("el-tag",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.exportPaper(e.paperId,"html")}}},[e._v("html")])],1),t("div",{staticClass:"menu_right",attrs:{slot:"reference"},slot:"reference"},[t("el-button",{attrs:{disabled:!(e.step3Form.paper.length>0&&!e.step3Form.isMsgReceiving),size:"medium",round:"",type:"success"}},[e._v("下载为")])],1)])],1)])]),t("el-dialog",{attrs:{title:"历史记录",visible:e.hisDialogVisible,center:"",width:"60%"},on:{"update:visible":function(t){e.hisDialogVisible=t}}},[t("el-table",{staticStyle:{width:"100%"},attrs:{data:e.hisTableData.records,stripe:"",height:"450"},on:{"row-dblclick":e.rewritePaper}},[t("el-table-column",{attrs:{prop:"title",label:"标题"+(0===e.active?"(双击单元格覆盖表单)":""),"min-width":"170"}}),t("el-table-column",{attrs:{prop:"tags",label:"标签","min-width":"170"}}),t("el-table-column",{attrs:{prop:"wordNum",label:"字数"}}),t("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(r){return[t("div",{staticStyle:{display:"flex",gap:"4px"}},[t("el-tag",{staticClass:"cursor-pointer",attrs:{slot:"reference"},on:{click:function(t){return e.paperPreview(r.row.id)}},slot:"reference"},[e._v("预览")]),t("el-popover",{attrs:{placement:"top-start",trigger:"click"}},[t("div",{staticStyle:{display:"flex",gap:"8px"}},[t("el-tag",{staticClass:"cursor-pointer",on:{click:function(t){return e.exportPaper(r.row.id,"docx")}}},[e._v("word")]),t("el-tag",{staticClass:"cursor-pointer",on:{click:function(t){return e.exportPaper(r.row.id,"pdf")}}},[e._v("pdf")]),t("el-tag",{staticClass:"cursor-pointer",on:{click:function(t){return e.exportPaper(r.row.id,"html")}}},[e._v("html")])],1),t("div",{attrs:{slot:"reference"},slot:"reference"},[t("el-tag",{staticClass:"cursor-pointer",attrs:{type:"success"}},[e._v("下载为")])],1)]),t("el-popconfirm",{attrs:{title:"确定删除吗？"},on:{confirm:function(t){return e.paperDelete(r.row.id)}}},[t("el-tag",{staticClass:"cursor-pointer",attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("删除")])],1)],1)]}}])})],1),t("el-pagination",{attrs:{background:"","page-sizes":[5,10,20],layout:"total, prev, pager, next"+("mobile"===e.device?"":", sizes"),total:1*e.hisTableData.total,"page-size":e.hisQuery.pageSize},on:{"current-change":e.hisCurrentChange,"size-change":e.hisSizeChange}})],1),t("el-drawer",{attrs:{direction:"ltr",visible:e.paperPreviewVisible,"with-header":!1,size:"mobile"!==e.device?"35%":"55%"},on:{"update:visible":function(t){e.paperPreviewVisible=t}}},[t("div",{staticClass:"paper-preview-drawer"},e._l(e.paperPreviewData,(function(r,s){return t("div",{key:s,staticStyle:{"white-space":"pre-line"},domProps:{innerHTML:e._s(r.content)}})})),0)])],1)},i=[],a=(r("14d9"),r("b775"));function o(e){return Object(a["c"])({url:"/chat/user/pro/paper/create",data:e})}function l(e){return Object(a["c"])({url:"/chat/user/pro/paper/start",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{paperId:e.paperId},signal:e.signal,onDownloadProgress:e.onDownloadProgress})}function n(e){return Object(a["c"])({url:"/chat/user/pro/paper/generate",data:e.data,signal:e.signal,onDownloadProgress:e.onDownloadProgress})}function p(e,t){return Object(a["c"])({url:"/chat/user/pro/paper/export",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{paperId:e,exportType:t}})}function c(e){return Object(a["c"])({url:"/chat/user/pro/paper/my",data:e})}function u(e){return Object(a["c"])({url:"/chat/user/pro/paper/delete",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{paperId:e}})}function d(e){return Object(a["c"])({url:"/chat/user/pro/paper/detail",headers:{"Content-Type":"application/x-www-form-urlencoded"},data:{paperId:e}})}var m=r("7c5c"),h=r("1101"),g=r("cf45"),v={data(){return{controller:new AbortController,loading:null,hisDialogVisible:!1,paperPreviewVisible:!1,paperPreviewData:[],hisTableData:[],hisQuery:{pageNum:1,pageSize:5},active:0,paperId:null,step1Form:{title:"",tags:"",wordNum:"1000"},step2Form:{outlineTemp:[{value:""}],outline:[],paperId:null,entry:""},step3Form:{paper:[],curIndex:0,errorFlag:!1,isMsgReceiving:!1},exportType:[{value:"pdf",name:"pdf"},{value:"docx",name:"word"},{value:"html",name:"html"}]}},computed:{device(){return this.$store.state.app.device}},beforeDestroy(){this.loading&&this.loading.close(),this.controller&&this.controller.abort()},mounted(){},methods:{step1Click(e){this.$refs[e].validate(async e=>{if(!e)return!1;this.controller.abort(),this.loading=this.$loading({target:document.getElementById("step1Form"),lock:!0,text:"生成大纲中",spinner:"el-icon-loading",background:"rgba(182,196,234,0.7)"}),await o(this.step1Form).then(async e=>{if(200===e.code){let t;this.paperId=e.data,this.controller=new AbortController,await l({paperId:this.paperId,signal:this.controller.signal,onDownloadProgress:({event:e})=>{const r=e.target,{responseText:s}=r,i=s.lastIndexOf("\n",s.length-2);let a=s;-1!==i&&(a=s.substring(i));try{t=JSON.parse(a)}catch(o){}}});const r=/```json\s+(.*?)\s+```/s,s=t.text.match(r);if(s){const e=s[1];this.step2Form.outlineTemp=JSON.parse(e).map(e=>({value:e})),this.active=1}else this.step2Form.outlineTemp=JSON.parse(t.text).map(e=>({value:e}))}}).finally(e=>{this.loading.close()})})},step2Click(e){this.$refs[e].validate(async e=>{if(!e)return!1;{this.step3Form.errorFlag=!1,this.controller.abort(),this.step2Form.outline=this.step2Form.outlineTemp.map(e=>e.value),this.step2Form.paperId=this.paperId;let e=0;this.step3Form.paper=[],this.loading=this.$loading({target:document.getElementById("step2Form"),lock:!0,text:"生成论文中",spinner:"el-icon-loading",background:"rgba(182,196,234,0.7)"});for(const t of this.step2Form.outline){if(this.step3Form.errorFlag)return;this.step3Form.isMsgReceiving=!0,this.step2Form.entry=t,this.step3Form.paper.push(""),this.controller=new AbortController,await n({data:this.step2Form,signal:this.controller.signal,onDownloadProgress:({event:t})=>{this.active++,this.loading.close();const r=t.target,{responseText:s}=r,i=s.lastIndexOf("\n",s.length-2);let a=s;-1!==i&&(a=s.substring(i));try{const t=JSON.parse(a).text;if(-1!==t.indexOf("接收消息处理异常"))this.$set(this.step3Form.paper,e,'<span style="color: darksalmon">消息异常，请等待几秒后重试</span>');else{const r=/```json\s+(.*?)\s+```/s,s=t.match(r);let i="";if(s){const e=JSON.parse(s[1]);i+="**"+e[0]+"**",i+="\n\n"+e[1]}else i=t;this.$set(this.step3Form.paper,e,Object(m["marked"])(i+Object(g["c"])()))}}catch(o){}}}).catch(()=>{this.step3Form.curIndex=e,this.step3Form.errorFlag=!0}).finally(t=>{Object(g["a"])(),e++,this.step3Form.isMsgReceiving=!1})}}})},stopMessage(){this.step3Form.isMsgReceiving&&(this.controller.abort(),this.step3Form.isMsgReceiving=!1)},async retryMessage(){this.step3Form.errorFlag=!1,this.controller.abort();const e=JSON.parse(JSON.stringify(this.step2Form.outline)),t=e.splice(this.step3Form.curIndex);let r=this.step3Form.curIndex;for(const s of t){if(this.step3Form.errorFlag)return;this.step3Form.isMsgReceiving=!0,this.step2Form.entry=s,this.step3Form.paper.push(""),this.controller=new AbortController,await n({data:this.step2Form,signal:this.controller.signal,onDownloadProgress:({event:e})=>{const t=e.target,{responseText:s}=t,i=s.lastIndexOf("\n",s.length-2);let a=s;-1!==i&&(a=s.substring(i));try{const e=JSON.parse(a).text;if(-1!==e.indexOf("接收消息处理异常"))this.$set(this.step3Form.paper,r,'<span style="color: darksalmon">消息异常，请等待几秒后重试</span>');else{const t=/```json\s+(.*?)\s+```/s,s=e.match(t);let i="";if(s){const e=JSON.parse(s[1]);i+="**"+e[0]+"**",i+="\n\n"+e[1]}else i=e;this.$set(this.step3Form.paper,r,Object(m["marked"])(i+Object(g["c"])()))}}catch(o){}}}).catch(()=>{this.step3Form.curIndex=r,this.step3Form.errorFlag=!0}).finally(e=>{r++,Object(g["a"])(),this.step3Form.isMsgReceiving=!1})}},exportPaper(e,t){p(e,t).then(e=>{200===e.code&&Object(h["a"])(e.data)})},openHisDialog(){c(this.hisQuery).then(e=>{200===e.code&&(this.hisTableData=e.data,this.hisDialogVisible=!0)})},hisCurrentChange(e){this.hisQuery.pageNum=e,this.openHisDialog()},hisSizeChange(e){this.hisQuery.pageSize=e,this.openHisDialog()},paperPreview(e){d(e).then(e=>{this.paperPreviewData=e.data.map(e=>(e.content=Object(m["marked"])(e.content?e.content:""),e)),0!==this.paperPreviewData.length?this.paperPreviewVisible=!0:this.$message.error("未生成论文，无法预览")})},paperDelete(e){u(e).then(e=>{this.openHisDialog()})},rewritePaper(e){0===this.active&&(this.step1Form=e,this.step1Form.wordNum+="",this.hisDialogVisible=!1)},removeOutline(e){const t=this.step2Form.outlineTemp.indexOf(e);-1!==t&&this.step2Form.outlineTemp.splice(t,1)},goBackOne(){this.active=0,this.stopMessage()},addOutline(){this.step2Form.outlineTemp.push({value:""})}}},b=v,f=(r("8397"),r("0c7c")),w=Object(f["a"])(b,s,i,!1,null,"680c6e22",null);t["default"]=w.exports}}]);