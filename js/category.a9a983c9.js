(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["category"],{"32e3":function(t,e,n){"use strict";var a=n("f33f"),c=n.n(a);c.a},4886:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category"},[n("van-nav-bar",{attrs:{title:"分类","left-arrow":""}},[n("van-icon",{attrs:{slot:"right",name:"search"},slot:"right"})],1),n("div",{staticClass:"content"},[n("div",{ref:"left",staticClass:"left"},t._l(t.cate,(function(e,a){return n("div",{key:a,staticClass:"item",class:{active:a==t.current},on:{click:function(e){return t.changeCur(a)}}},[t._v(" "+t._s(e.category_name)+" ")])})),0),n("div",{staticClass:"right"})])],1)},c=[],s={data:function(){return{cate:[],current:0}},created:function(){this.getCate()},methods:{changeCur:function(t){this.current=t;var e=this.$refs.left,n=document.querySelectorAll(".left .item"),a=n[t],c=e.offsetHeight;e.scrollTop=a.offsetTop-c/2-a.offsetHeight/2},getCate:function(){var t=this;this.$http.get("/mi/category.php").then((function(e){t.cate=e.data.data})).catch((function(t){console.log(t)}))}},components:{}},r=s,i=(n("32e3"),n("2877")),o=Object(i["a"])(r,a,c,!1,null,"15b1e465",null);e["default"]=o.exports},f33f:function(t,e,n){}}]);
//# sourceMappingURL=category.a9a983c9.js.map