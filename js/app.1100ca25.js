(function(t){function e(e){for(var r,a,c=e[0],u=e[1],s=e[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return u.p+"js/"+({about:"about",category:"category"}[t]||t)+"."+{about:"0937e322",category:"a9a983c9"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,category:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({about:"about",category:"category"}[t]||t)+"."+{about:"5257e6d6",category:"ce95a4d7"}[t]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){s=d[c],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"1c60":function(t,e){!function(t,e){function n(){var n=i.getBoundingClientRect().width;e=e||540,n>e&&(n=e);var r=100*n/t;c.innerHTML="html{font-size:"+r+"px;}"}var r,a=document,o=window,i=a.documentElement,c=document.createElement("style");if(i.firstElementChild)i.firstElementChild.appendChild(c);else{var u=a.createElement("div");u.appendChild(c),a.write(u.innerHTML),u=null}n(),o.addEventListener("resize",(function(){clearTimeout(r),r=setTimeout(n,300)}),!1),o.addEventListener("pageshow",(function(t){t.persisted&&(clearTimeout(r),r=setTimeout(n,300))}),!1),"complete"===a.readyState?a.body.style.fontSize="16px":a.addEventListener("DOMContentLoaded",(function(t){a.body.style.fontSize="16px"}),!1)}(720,750)},3194:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{"enter-active-class":"slideInRight animated","leave-active-class":"slideOutRight animated"}},[n("router-view",{staticClass:"page"})],1),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("首页")]),n("router-link",{attrs:{to:"/cat"}},[t._v("分类")]),n("router-link",{attrs:{to:"/cart"}},[t._v("购物车")]),n("router-link",{attrs:{to:"/user"}},[t._v("我的")])],1)],1)},o=[],i={data:function(){return{active:0}},created:function(){console.log(this.$router)}},c=i,u=(n("034f"),n("2877")),s=Object(u["a"])(c,a,o,!1,null,null,null),l=s.exports,d=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Header"),n("van-tabs",{staticClass:"htabs",attrs:{animated:"","lazy-render":"","title-active-color":"#f30"},on:{change:t.changeHd},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabs,(function(t){return n("van-tab",{key:t.page_id,attrs:{title:t.name}},[n("Page",{attrs:{item:t}})],1)})),1)],1)},m=[],h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("a",{staticClass:"logo",attrs:{href:""}},[r("img",{attrs:{src:n("cf05"),height:"18",alt:""}})]),r("input",{attrs:{type:"text"}}),r("div",{staticClass:"btn"},[r("img",{attrs:{src:n("c121"),height:"22",alt:""}})])])}],v={},g=v,b=(n("8baf"),Object(u["a"])(g,h,f,!1,null,null,null)),_=b.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.sections,(function(e,r){return n("div",{key:r},["gallery"==e.view_type?n("div",[n("van-swipe",t._l(e.body.items,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{style:{width:t.w/100+"rem",height:t.h/100+"rem"},attrs:{src:t.img_url}})])})),1)],1):t._e(),"cells_auto_fill"==e.view_type?n("div",{style:{position:"relative",width:e.body.w/100+"rem",height:e.body.h/100+"rem"}},t._l(e.body.items,(function(t,e){return n("div",{key:e,style:{position:"absolute",width:t.w/100+"rem",height:t.h/100+"rem",left:t.x?t.x/100+"rem":0,top:t.y?t.y/100+"rem":0}},[n("img",{attrs:{src:t.img_url,width:"100%",alt:""}})])})),0):t._e(),"divider_line"==e.view_type?n("div",{style:{height:e.body.line_height/100+"rem","background-color":e.body.line_color}}):t._e(),"list_three_type4"==e.view_type?n("div",{staticClass:"row",staticStyle:{padding:"0.20rem"}},t._l(e.body.items,(function(e,r){return n("div",{key:r,staticClass:"col",style:{"margin-left":1==r?".2rem":0,"margin-right":1==r?".2rem":0}},[n("img",{attrs:{src:e.img_url,width:"100%",alt:""}}),n("h5",[t._v(t._s(e.product_name))]),n("p",[t._v(t._s(e.product_brief))]),n("p",[t._v(t._s(e.product_price))])])})),0):t._e(),"list_two_type13"==e.view_type?n("div",{staticClass:"row",staticStyle:{padding:"0.20rem"}},t._l(e.body.items,(function(r,a){return n("div",{key:a,staticClass:"col tac",style:{"margin-left":1==a?".2rem":0}},[n("img",{attrs:{src:r.img_url,width:"100%",alt:""}}),n("h5",[t._v(t._s(r.product_name))]),n("p",[t._v(t._s(r.product_brief))]),n("p",[t._v(t._s(r.product_price))]),n("van-button",{attrs:{color:e.body.btn_color,size:"small",text:r.btn_txt?r.btn_txt:"立即购买"}})],1)})),0):t._e()])})),0)},w=[],k=(n("99af"),{props:["item"],data:function(){return{sections:[]}},created:function(){this.getSections()},methods:{getSections:function(){var t=this;this.$http.get("http://www.520mg.com/mi/page.php?page_id=".concat(this.item.page_id,"&page_type=").concat(this.item.page_type)).then((function(e){t.sections=e.data.data.data.sections,console.log(t.sections)})).catch((function(t){}))}}}),C=k,E=(n("f321"),Object(u["a"])(C,y,w,!1,null,null,null)),A=E.exports,O={name:"Home",data:function(){return{active:0,tabs:[]}},created:function(){this.getPage()},methods:{changeHd:function(){var t=document.querySelector(".htabs .van-tabs__content");t.scrollTop=0},getPage:function(){var t=this;this.$http.get("http://www.520mg.com/mi/page.php").then((function(e){console.log(e.data),t.tabs=e.data.data.tabs}))}},components:{Header:_,Page:A}},j=O,x=(n("cccb"),Object(u["a"])(j,p,m,!1,null,null,null)),S=x.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"ucard"},[n("div",{staticClass:"pic"},[n("van-icon",{attrs:{name:"user-circle-o",size:".5rem",color:"#fff"}})],1),n("div",{staticClass:"umsg"},[t.uname?n("p",[t._v("欢迎回来 "+t._s(t.uname)+" | "),n("span",{on:{click:t.logOut}},[t._v("注销")])]):n("p",[t._v("游客请 "),n("span",{on:{click:function(e){return t.$router.push("/login?redirect=/user")}}},[t._v(" 登录")])])])])])},I=[];n("ac1f"),n("1276");function T(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",a=t+"="+escape(e)+";";if(n){var o=new Date;o.setDate(o.getDate()+n),a+="expires="+o+";"}a+="path="+r+";",document.cookie=a,console.log(a)}function Z(t){for(var e=document.cookie,n=e.split("; "),r=0;r<n.length;r++){var a=n[r].split("=");if(a[0]==t)return unescape(a[1])}}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new Date;n.setTime(0),document.cookie=t+"=;expires="+n+";path="+e}var R={getCookie:Z,setCookie:T,delCookie:G},L={data:function(){return{uname:""}},created:function(){this.uname=R.getCookie("uname")},methods:{logOut:function(){var t=this;this.$http({method:"POST",url:"http://www.520mg.com/member/index_login.php",data:"dopost=exit",configs:{withCredentials:!0}}).then((function(e){1==e.data.status?(R.delCookie("uname"),t.uname="",t.$toast.success("注销成功")):t.$toast.fail("注销失败")}))}}},D=L,P=(n("e8c3"),Object(u["a"])(D,M,I,!1,null,null,null)),U=P.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("产品")]),n("h2",[t._v("产品参数:"+t._s(t.$route.params.id))]),t.$route.query.from?n("h2",[t._v("查询参数:"+t._s(t.$route.query.from))]):t._e(),n("h3",[t._v("path:"+t._s(t.$route.path))]),n("button",{on:{click:function(e){return t.$router.go(-1)}}},[t._v("返回")]),n("button",{on:{click:function(e){return t.$router.back()}}},[t._v("返回back")]),n("br"),n("button",{on:{click:function(e){return t.$router.go(1)}}},[t._v("前进")]),n("button",{on:{click:function(e){return t.$router.forward()}}},[t._v("前进forard")]),t._v(" "),n("br"),n("button",{on:{click:function(e){return t.$router.push("/")}}},[t._v("首页")]),n("button",{on:{click:function(e){return t.$router.replace("/")}}},[t._v("首页replace(不留当前页面历史记录)")]),n("router-link",{attrs:{to:{name:"Home"}}},[t._v("切换到首页按路由的名称")]),t._v(" "),n("br"),n("router-link",{attrs:{to:{name:"Produce",params:{id:"mumu"}}}},[t._v("切换到produce")]),n("br"),n("router-link",{attrs:{to:{path:"/produce/xyz?from=中国"}}},[t._v("切换到produce-path")])],1)},Q=[],N={},Y=Object(u["a"])(N,$,Q,!1,null,null,null),V=Y.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("404")]),n("p",[t._v("糟糕，页面被外星人劫走了")]),n("button",{on:{click:function(e){return t.$router.replace("/")}}},[t._v("首页")])])},z=[],F={},W=Object(u["a"])(F,H,z,!1,null,null,null),B=W.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"登录","left-arrow":""},on:{"click-left":function(e){return t.$router.go(-1)}}}),n("van-cell-group",{staticStyle:{"margin-top":"15px"}},[n("van-field",{attrs:{placeholder:"请输入用户名"},model:{value:t.uname,callback:function(e){t.uname=e},expression:"uname"}}),n("van-field",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:t.upwd,callback:function(e){t.upwd=e},expression:"upwd"}})],1),n("div",{staticStyle:{margin:"15px"}},[n("van-button",{attrs:{color:"#f30",block:"",round:""},on:{click:t.login}},[t._v("登录")])],1)],1)},X=[],q=(n("5319"),{data:function(){return{uname:"",upwd:""}},methods:{login:function(){var t=this;this.$http({method:"POST",url:"http://www.520mg.com/member/index_login.php",data:"fmdo=login&dopost=login&userid=".concat(this.uname,"&pwd=").concat(this.upwd),configs:{withCredentials:!0}}).then((function(e){if(console.log(e.data),1==e.data.status){t.$notify({type:"success",message:e.data.msg}),R.setCookie("uname",t.uname);var n=t.$route.query.redirect;console.log("redirect",n),n?t.$router.replace(n):t.$router.replace("/user")}else t.$notify({type:"danger",message:e.data.msg})}))}}}),K=q,tt=(n("d6db"),Object(u["a"])(K,J,X,!1,null,null,null)),et=tt.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("购物车")])])}],at={beforeRouteLeave:function(t,e,n){var r=window.confirm("现在商品是10周内最便宜的价格\n您确定要离开吗?");r?n():n(!1)}},ot=at,it=Object(u["a"])(ot,nt,rt,!1,null,null,null),ct=it.exports;r["a"].use(d["a"]);var ut=[{path:"/",name:"Home",component:S,alias:["/home","/main"]},{path:"/produce/:id",name:"Produce",component:V},{path:"/user",name:"User",component:U},{path:"/cart",name:"Cart",component:ct},{path:"/set",redirect:"/user"},{path:"/login",name:"Login",component:et},{path:"/cat",name:"Category",component:function(){return n.e("category").then(n.bind(null,"4886"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",name:"NoMatch",component:B}],st=new d["a"]({routes:ut});st.beforeEach((function(t,e,n){t.meta.requireAuth?R.getCookie("uname")?n():n("/login?redirect="+t.path):n()}));var lt=st,dt=n("2f62");r["a"].use(dt["a"]);var pt=new dt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),mt=(n("1c60"),n("d16e"),n("b970")),ht=(n("157a"),n("f564")),ft=n("d399"),vt=n("bc3a"),gt=n.n(vt);r["a"].use(mt["a"]),r["a"].use(ht["a"]),r["a"].use(ft["a"]),gt.a.defaults.baseURL="http://520mg.com",gt.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r["a"].prototype.$http=gt.a,r["a"].config.productionTip=!1,new r["a"]({router:lt,store:pt,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},6860:function(t,e,n){},"7be2":function(t,e,n){},"85ec":function(t,e,n){},"8baf":function(t,e,n){"use strict";var r=n("6860"),a=n.n(r);a.a},c121:function(t,e,n){t.exports=n.p+"img/user.23496a01.png"},cccb:function(t,e,n){"use strict";var r=n("5ced"),a=n.n(r);a.a},cf05:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"},d16e:function(t,e,n){},d6db:function(t,e,n){"use strict";var r=n("e67a"),a=n.n(r);a.a},e67a:function(t,e,n){},e8c3:function(t,e,n){"use strict";var r=n("7be2"),a=n.n(r);a.a},f321:function(t,e,n){"use strict";var r=n("3194"),a=n.n(r);a.a}});
//# sourceMappingURL=app.1100ca25.js.map