webpackJsonp([6],{112:function(t,e,i){"use strict";var n=i(52);e.a=new n.a},113:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"e",function(){return s}),i.d(e,"f",function(){return r}),i.d(e,"h",function(){return c}),i.d(e,"i",function(){return l}),i.d(e,"g",function(){return h}),i.d(e,"d",function(){return u});var n="ENABLE_PAGE_TRANSITION",a="DISABLE_PAGE_TRANSITION",o="SET_PAGE_SWITCHING",s="SET_PAGE_TRANSITION_NAME",r="SET_APP_HEADER",c="SET_APP_BOTTOM_NAV",l="ACTIVATE_APP_BOTTOM_NAV",h="SET_SIDEBAR_VISIBILITY",u="SAVE_SCROLLTOP"},156:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(157),a=i.n(n),o=i(111),s=(i.n(o),i(52)),r=i(398),c=i.n(r),l=i(159),h=i(404),u=i.n(h),p=s.a.prototype.$loading=new s.a(u.a).$mount(),d=i.i(l.a)(),f=d.app,v=d.router,m=d.store;document.body.appendChild(p.$el),c.a.attach(document.body),s.a.mixin({beforeRouteUpdate:function(t,e,i){var n=this.$options.asyncData;n?(p.start(),n.call(this,{store:this.$store,route:t}).then(function(){p.finish(),i()}).catch(i)):i()},beforeRouteEnter:function(t,e,i){i(function(e){e.$el.scrollTop=e.$store.state.appShell.historyPageScrollTop[t.fullPath]||0})},beforeRouteLeave:function(t,e,i){this.$store.dispatch("appShell/saveScrollTop",{path:e.fullPath,scrollTop:this.$el.scrollTop}),i()}}),v.beforeResolve(function(t,e,i){var n=v.getMatchedComponents(t),o=v.getMatchedComponents(e),s=!1,r=n.filter(function(t,e){return s||(s=o[e]!==t)});if(!r.length)return i();p.start(),a.a.all(r.map(function(e){if(e.asyncData&&(!e.asyncDataFetched||t.meta.notKeepAlive))return e.asyncData({store:m,route:t}).then(function(){e.asyncDataFetched=!0})})).then(function(){p.finish(),i()}).catch(i)}),v.onReady(function(){return f.$mount("#app")})},159:function(t,e,i){"use strict";function n(){var t=i.i(l.a)();return{app:new s.a(o()({router:t,store:h.a},p.a)),router:t,store:h.a}}e.a=n;var a=i(53),o=i.n(a),s=i(52),r=i(416),c=i.n(r),l=i(167),h=i(168),u=i(400),p=i.n(u),d=i(406),f=i.n(d);s.a.use(c.a),s.a.component("icon",f.a),s.a.config.productionTip=!1,f.a.register({"svg-sentiment-very-satisfied":{width:48,height:48,d:"M23.99 4C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16zm2-20.12L28.12 22l2.12-2.12L32.36 22l2.13-2.12-4.25-4.24zm-8.24 0L19.88 22 22 19.88l-4.24-4.24-4.25 4.24L15.64 22zM24 35c4.66 0 8.62-2.92 10.22-7H13.78c1.6 4.08 5.56 7 10.22 7z"}})},160:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(53),a=i.n(n),o=i(54),s=i(402),r=i.n(s),c=i(403),l=i.n(c),h=i(401),u=i.n(h);e.default={name:"app",components:{AppHeader:r.a,AppSidebar:l.a,AppBottomNavigator:u.a},data:function(){return{}},computed:a()({},i.i(o.a)("appShell",["appHeader","appBottomNavigator","pageTransitionName"])),methods:a()({},i.i(o.b)("appShell",["setPageSwitching"]),i.i(o.b)("appShell/appSidebar",["showSidebar","hideSidebar"]),i.i(o.b)("appShell/appBottomNavigator",["activateBottomNav"]),{handleBeforeEnter:function(t){this.setPageSwitching(!0)},handleAfterEnter:function(t){this.setPageSwitching(!1)},handleClickHeaderBack:function(){this.$router.go(-1)},handleClickHeaderMenu:function(){this.showSidebar()},handleHideSidebar:function(){this.hideSidebar()},handleShowSidebar:function(){this.showSidebar()},handleClickBottomNav:function(t){var e=t.name;this.activateBottomNav(e)}})}},161:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(53),a=i.n(n),o=i(54),s=i(112);e.default={name:"app-bottom-navigator",computed:a()({},i.i(o.a)("appShell/appBottomNavigator",["show","navs"])),methods:{handleNavClick:function(t,e){var i={name:e};this.$emit("click-nav",i),s.a.$emit("app-bottom-navigator:click-nav",i),t&&this.$router.replace(t)}}}},162:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(53),a=i.n(n),o=i(54),s=i(112);e.default={name:"appHeader",computed:a()({},i.i(o.a)("appShell/appHeader",["show","showMenu","showBack","showLogo","logoIcon","title","actions"]),i.i(o.a)("appShell",["isPageSwitching"])),methods:{handleClick:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.actionIdx,n=e.route;if(!this.isPageSwitching){var a={};"action"===t&&(a.actionIdx=i),this.$emit("click-"+t,a),s.a.$emit("app-header:click-"+t,a),n&&this.$router.push(n)}}}}},163:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(53),a=i.n(n),o=i(54),s=i(405),r=i.n(s);e.default={components:{Sidebar:r.a},computed:a()({},i.i(o.a)("appShell/appSidebar",["show","title","user","blocks"]),{sidebarStatus:{get:function(){return this.show},set:function(t){t?this.$emit("show-sidebar"):this.$emit("hide-sidebar")}}}),methods:{close:function(){this.sidebarStatus=!1},closeAndGo:function(t){this.$router.push(t),this.close()}}}},164:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{percent:0,show:!1,canSuccess:!0,duration:3e3,height:"2px",color:"#ffca2b",failedColor:"#ff0000"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,t.$nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},165:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(399),a=i.n(n),o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};e.default={props:{value:{type:Boolean,default:!1},width:{type:Number,default:.75}},data:function(){return{showStatus:this.value,startX:0,startY:0,wrapperClass:{expand:!1,collapse:!0,"w-left":!0},opacity:0,iscroll:null}},computed:{itsWidth:function(){return this.width<1?Math.round(this.width*document.documentElement.clientWidth):this.width},widthProp:function(){return this.itsWidth+"px"}},watch:{value:function(){this.showStatus=this.value},showStatus:function(t){this.toggleScroll(t),this.$emit("input",t)}},methods:{toggleTouchStart:function(t){if(!this.wrapperClass.expand){var e=t.touches[0],i=e.clientX,n=e.clientY;this.startX=i,this.startY=n}},toggleTouchMove:function(t){var e=this;if(!this.wrapperClass.expand){var i=t.touches[0],n=i.clientX,a=i.clientY,o=n-this.startX;o>5&&Math.abs(a-this.startY)/o<.577&&(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.bindScroll(t)}))}},toggleClick:function(t){this.iscroll&&this.forceToggleScroll(!1)},bindScroll:function(t){var e=this;this.iscroll||(this.iscroll=new a.a(this.$refs.sidebarWrapper,{eventPassthrough:!0,scrollY:!1,scrollX:!0,bounce:!1,startX:-this.itsWidth}),this.changeOpacity(),this.iscroll.on("scrollEnd",function(){var t=e.iscroll,i=t.directionX,n=t.x;return 0===n?void(e.showStatus=!0):n===-e.itsWidth?(e.unbindScroll(),void(e.showStatus=!1)):void(i>0?e.forceToggleScroll(!1):i<0?e.forceToggleScroll(!0):e.showStatus=!e.showStatus)}),t&&this.iscroll._start(t))},unbindScroll:function(){this.iscroll&&(this.iscroll.destroy(),this.iscroll=null,this.wrapperClass.expand=!1,this.wrapperClass.collapse=!0,this.opacity=0,this.$refs.sidebarScroller.setAttribute("style","padding-left:"+this.widthProp))},toggleScroll:function(t){var e=this;t?(this.wrapperClass.expand=!0,this.wrapperClass.collapse=!1,this.$nextTick(function(){e.iscroll||e.bindScroll(),e.iscroll.x<0&&setTimeout(function(){e.iscroll&&e.iscroll.scrollTo(0,0,200)},10)})):this.iscroll&&this.iscroll.x>-this.itsWidth&&setTimeout(function(){e.iscroll.scrollTo(-e.itsWidth,0,200)})},forceToggleScroll:function(t){this.showStatus===t?this.toggleScroll(t):this.showStatus=t},changeOpacity:function(){this.wrapperClass.expand&&this.iscroll&&(this.opacity=(this.iscroll.x+this.itsWidth)/this.itsWidth*.5,o(this.changeOpacity.bind(this)))}}}},166:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(52),a={};e.default={name:"icon",props:{name:{type:String,validator:function(t){return t?t in a||(n.a.util.warn('Invalid prop: prop "icon" is referring to an unregistered icon "'+t+'".\nPlesase make sure you have imported this icon before using it.',this),!1):null}},scale:[Number,String],spin:Boolean,inverse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(n.a.util.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},clazz:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse}},icon:function(){return this.name?a[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,i=t.height;return Math.max(e,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(e){e.outerScale=t.normalizedScale});var e=0,i=0;this.$children.forEach(function(t){e=Math.max(e,t.width),i=Math.max(i,t.height)}),this.childrenWidth=e,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var e in t){var i=t[e];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),a[e]=i}},icons:a}},167:function(t,e,i){"use strict";function n(){var t=new s.a({mode:"history",routes:[{path:"/",name:"home",component:c},{path:"/detail/:id",name:"detail",component:l,meta:{notKeepAlive:!0}},{path:"/user",name:"user",component:u},{path:"/search",name:"search",component:p},{path:"/404",name:"notFound",component:h}]});return t.beforeEach(function(e,i,n){if(t.app.$store&&t.app.$store.state.appShell.needPageTransition){var o=a(e,i)?"slide-left":"slide-right";t.app.$store.commit("appShell/"+r.e,{pageTransitionName:o})}n()}),t}function a(t,e){if(t.name&&-1!==d.indexOf(t.name))return v.length=0,!1;if(e.name&&-1!==d.indexOf(e.name))return v.push(t.fullPath),!0;if(t.name&&-1!==f.indexOf(t.name))return v.push(t.fullPath),!0;var i=v.indexOf(t.fullPath);return-1!==i?(v.length=i+1,!1):(v.push(t.fullPath),!0)}e.a=n;var o=i(52),s=i(414),r=i(113),c=function(){return i.e(2).then(i.bind(null,421))},l=function(){return i.e(3).then(i.bind(null,420))},h=function(){return i.e(4).then(i.bind(null,422))},u=function(){return i.e(0).then(i.bind(null,424))},p=function(){return i.e(1).then(i.bind(null,423))};o.a.use(s.a);var d=["home"],f=["search"],v=[]},168:function(t,e,i){"use strict";var n=i(52),a=i(54),o=i(169);n.a.use(a.c),e.a=new a.c.Store({modules:{appShell:o.a}})},169:function(t,e,i){"use strict";var n,a,o=i(114),s=i.n(o),r=i(171),c=i.n(r),l=i(113),h={needPageTransition:!0,isPageSwitching:!1,pageTransitionName:"",historyPageScrollTop:{}},u={enablePageTransition:function(t){(0,t.commit)(l.a,!0)},disablePageTransition:function(t){(0,t.commit)(l.b,!1)},setPageSwitching:function(t,e){(0,t.commit)(l.c,e)},saveScrollTop:function(t,e){var i=t.commit,n=e.path,a=e.scrollTop;i(l.d,{path:n,scrollTop:a})}},p=(n={},c()(n,l.c,function(t,e){t.isPageSwitching=e}),c()(n,l.e,function(t,e){var i=e.pageTransitionName;t.pageTransitionName=i}),c()(n,l.d,function(t,e){var i=e.path,n=e.scrollTop;t.historyPageScrollTop[i]=n}),n);e.a={namespaced:!0,actions:u,mutations:p,state:h,modules:{appHeader:{namespaced:!0,state:{show:!0,title:"Lavas",logoIcon:"",showMenu:!0,showBack:!1,showLogo:!0,actions:[]},actions:{setAppHeader:function(t,e){(0,t.commit)(l.f,e)}},mutations:c()({},l.f,function(t,e){t=s()(t,e)})},appSidebar:{namespaced:!0,state:{show:!1,title:{imageLeft:"",altLeft:"",svgLeft:"",iconLeft:"home",text:"Home",imageRight:"",altRight:"",svgRight:"",iconRight:""},blocks:[{sublistTitle:"Sublist1",list:[{text:"Detail Page 1",icon:"sentiment_satisfied",route:"/detail/1"},{text:"Detail Page 2",image:"https://github.com/google/material-design-icons/blob/master/social/2x_web/ic_mood_bad_black_48dp.png?raw=true",alt:"mood-bad",route:"/detail/2"},{text:"Detail Page 3",svg:"svg-sentiment-very-satisfied",route:"/detail/3"}]}]},actions:{showSidebar:function(t){(0,t.commit)(l.g,!0)},hideSidebar:function(t){(0,t.commit)(l.g,!1)}},mutations:c()({},l.g,function(t,e){t.show=e})},appBottomNavigator:{namespaced:!0,state:{show:!0,navs:[{name:"home",icon:"home",text:"主页",active:!0,route:{name:"home",path:"/"}},{name:"user",icon:"person",text:"个人中心",route:"/user"}]},actions:{hideBottomNav:function(t){(0,t.commit)(l.h,{show:!1})},showBottomNav:function(t){(0,t.commit)(l.h,{show:!0})},activateBottomNav:function(t,e){(0,t.commit)(l.i,e)}},mutations:(a={},c()(a,l.i,function(t,e){t.navs=t.navs.map(function(t){return t.active=t.name===e,t})}),c()(a,l.h,function(t,e){t=s()(t,e)}),a)}}}},390:function(t,e){},391:function(t,e){},392:function(t,e){},393:function(t,e){},394:function(t,e){},395:function(t,e){},396:function(t,e){},397:function(t,e){},400:function(t,e,i){function n(t){i(396),i(397)}var a=i(33)(i(160),i(413),n,"data-v-be17d0f4",null);t.exports=a.exports},401:function(t,e,i){function n(t){i(390)}var a=i(33)(i(161),i(407),n,"data-v-1c8a1d89",null);t.exports=a.exports},402:function(t,e,i){function n(t){i(394)}var a=i(33)(i(162),i(411),n,"data-v-7c0e5c80",null);t.exports=a.exports},403:function(t,e,i){function n(t){i(395)}var a=i(33)(i(163),i(412),n,"data-v-ad64d50e",null);t.exports=a.exports},404:function(t,e,i){function n(t){i(391)}var a=i(33)(i(164),i(408),n,"data-v-37cce6d0",null);t.exports=a.exports},405:function(t,e,i){function n(t){i(392)}var a=i(33)(i(165),i(409),n,"data-v-5f82134e",null);t.exports=a.exports},406:function(t,e,i){function n(t){i(393)}var a=i(33)(i(166),i(410),n,null,null);t.exports=a.exports},407:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-up"}},[i("footer",{directives:[{name:"show",rawName:"v-show",value:t.show&&t.navs.length,expression:"show && navs.length"}],staticClass:"app-bottom-navigator-wrapper"},[t._t("navs",[i("v-bottom-nav",{staticClass:"transparent",attrs:{value:t.show,absolute:""}},t._l(t.navs,function(e){return i("v-btn",{key:e.name,attrs:{value:e.active,flat:"",primary:""},nativeOn:{click:function(i){t.handleNavClick(e.route,e.name)}}},[i("span",[t._v(t._s(e.text))]),t._v(" "),e.svg?i("icon",{staticClass:"app-header-icon",attrs:{name:e.svg}}):e.icon?i("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.icon))]):t._e()],1)}))])],2)])},staticRenderFns:[]}},408:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"progress",style:{width:t.percent+"%",height:t.height,"background-color":t.canSuccess?t.color:t.failedColor,opacity:t.show?1:0}})},staticRenderFns:[]}},409:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"sidebarWrapper",staticClass:"sidebar-wrapper",class:t.wrapperClass},[i("div",{ref:"sidebarScroller",staticClass:"sidebar-scroller",style:{"padding-left":t.widthProp}},[i("div",{staticClass:"sidebar-main",style:{width:t.widthProp},on:{scroll:function(t){t.stopPropagation()}}},[t._t("default")],2),t._v(" "),i("div",{ref:"sidebarToggle",staticClass:"touch-toggle",style:{opacity:t.opacity,"padding-left":t.widthProp},on:{touchstart:t.toggleTouchStart,touchmove:t.toggleTouchMove,click:function(e){e.stopPropagation(),e.preventDefault(),t.toggleClick(e)}}})])])},staticRenderFns:[]}},410:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{class:t.clazz,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(e){return i("path",t._b({},"path",e,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(e){return i("polygon",t._b({},"polygon",e,!1))}):t._e(),t._v("\b\n    "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.icon.raw)}})]:t._e()])],2)},staticRenderFns:[]}},411:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide-down"}},[i("header",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"app-header-wrapper"},[i("div",{staticClass:"app-header-left"},[t.showMenu?i("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("menu")}}},[i("v-icon",{staticClass:"app-header-icon"},[t._v("menu")])],1):t._e(),t._v(" "),t.showBack?i("v-btn",{attrs:{icon:""},nativeOn:{click:function(e){t.handleClick("back")}}},[i("v-icon",{staticClass:"app-header-icon"},[t._v("arrow_back")])],1):t._e(),t._v(" "),t.showLogo?i("div",{on:{click:function(e){t.handleClick("logo")}}},[t._t("logo",[t.logoIcon?i("icon",{staticClass:"app-header-icon",attrs:{name:t.logoIcon}}):t._e()])],2):t._e()],1),t._v(" "),i("div",{staticClass:"app-header-middle"},[t._t("title",[t._v("\n                "+t._s(t.title)+"\n            ")])],2),t._v(" "),i("div",{staticClass:"app-header-right"},[t._l(t.actions,function(e,n){return t._t("actions",[i("v-btn",{attrs:{icon:"icon"},nativeOn:{click:function(i){t.handleClick("action",{actionIdx:n,route:e.route})}}},[e.svg?i("icon",{staticClass:"app-header-icon",attrs:{name:e.svg}}):e.icon?i("v-icon",{staticClass:"app-header-icon"},[t._v(t._s(e.icon))]):t._e()],1)],{icon:e.icon,route:e.route})})],2)])])},staticRenderFns:[]}},412:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("sidebar",{model:{value:t.sidebarStatus,callback:function(e){t.sidebarStatus=e},expression:"sidebarStatus"}},[i("div",{staticClass:"app-sidebar-content"},[t.title?i("div",{staticClass:"app-sidebar-title",on:{click:function(e){e.stopPropagation(),t.closeAndGo("/")}}},[i("span",{staticClass:"app-sidebar-title-left-icon"},[t.title.imageLeft?i("img",{attrs:{src:t.title.imageLeft,alt:t.title.altLeft}}):t.title.svgLeft?i("icon",{attrs:{name:t.title.svgLeft}}):t.title.iconLeft?i("v-icon",{attrs:{light:""}},[t._v(t._s(t.title.iconLeft))]):t._e()],1),t._v(" "),i("span",[t._v(t._s(t.title.text))]),t._v(" "),t._t("logo",[i("span",{staticClass:"app-sidebar-title-right-logo"},[t.title.imageRight?i("img",{attrs:{src:t.title.imageRight,alt:t.title.altRight}}):t.title.svgRight?i("icon",{attrs:{name:t.title.svgRight}}):t.title.iconRight?i("v-icon",[t._v(t._s(t.title.iconRight))]):t._e()],1)])],2):t._e(),t._v(" "),t.user?i("div",{staticClass:"app-sidebar-user"},[i("div",{staticClass:"user-avatar"},[i("v-icon",{staticClass:"user-avatar-icon",attrs:{light:""}},[t._v("face")])],1),t._v(" "),i("div",{staticClass:"user-info"},[i("div",{staticClass:"user-name"},[i("v-icon",[t._v("person")]),t._v(t._s(t.user.name))],1),t._v(" "),i("div",{staticClass:"user-location"},[i("v-icon",[t._v("room")]),t._v(t._s(t.user.location))],1),t._v(" "),i("div",{staticClass:"user-email"},[i("v-icon",[t._v("email")]),t._v(t._s(t.user.email))],1)])]):t._e(),t._v(" "),t.blocks?i("div",{staticClass:"app-sidebar-blocks"},[i("ul",t._l(t.blocks,function(e,n){return i("li",{key:n,staticClass:"app-sidebar-block"},[e.sublistTitle?i("div",{staticClass:"sub-list-title"},[t._v(t._s(e.sublistTitle))]):t._e(),t._v(" "),e.list?i("ul",t._l(e.list,function(e){return i("li",{key:e.text,on:{click:function(i){i.stopPropagation(),t.closeAndGo(e.route)}}},[e.icon||e.image||e.svg?i("span",{staticClass:"app-sidebar-block-left-icon"},[e.image?i("img",{attrs:{src:e.image,alt:e.alt}}):e.svg?i("icon",{attrs:{name:e.svg}}):e.icon?i("v-icon",[t._v(t._s(e.icon))]):t._e()],1):t._e(),t._v(" "),e.text?i("span",{staticClass:"app-sidebar-block-text"},[t._v(t._s(e.text))]):t._e()])})):t._e()])}))]):t._e()])])},staticRenderFns:[]}},413:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"app-shell app-shell-bottom-navigation"},[i("app-header",{staticClass:"app-shell-header",on:{"click-menu":t.handleClickHeaderMenu,"click-back":t.handleClickHeaderBack}}),t._v(" "),i("app-sidebar",{on:{"hide-sidebar":t.handleHideSidebar,"show-sidebar":t.handleShowSidebar}}),t._v(" "),i("div",{staticClass:"app-view-wrapper"},[i("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[i("keep-alive",[t.$route.meta.notKeepAlive?t._e():i("router-view",{key:t.$route.fullPath,staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show,"app-view-with-footer":t.appBottomNavigator.show}})],1)],1),t._v(" "),i("transition",{attrs:{name:t.pageTransitionName},on:{"before-enter":t.handleBeforeEnter,"after-enter":t.handleAfterEnter}},[t.$route.meta.notKeepAlive?i("router-view",{key:t.$route.fullPath,staticClass:"app-view",class:{"app-view-with-header":t.appHeader.show,"app-view-with-footer":t.appBottomNavigator.show}}):t._e()],1)],1),t._v(" "),i("app-bottom-navigator",{staticClass:"app-shell-footer",on:{"click-nav":t.handleClickBottomNav}})],1)])},staticRenderFns:[]}},417:function(t,e,i){i(111),t.exports=i(156)}},[417]);
//# sourceMappingURL=app.323f4461730913d0cfde.js.map