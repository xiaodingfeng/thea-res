(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0bd5"],{"9e3f":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e._self._c;return t("div")},u=[],s=(r("14d9"),r("e75b")),c={mounted(){if(!this.$route.query.code)return this.$message.error("参数异常"),void this.$router.push("/");Object(s["b"])(this.$route.query.code).then(e=>{200===e.code&&this.$router.push({name:"ChatRoom",query:{roomId:e.data}})}).catch(()=>{this.$router.push("/")})},methods:{}},h=c,n=r("0c7c"),d=Object(n["a"])(h,o,u,!1,null,"f7f22834",null);t["default"]=d.exports}}]);