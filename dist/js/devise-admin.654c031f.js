(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-admin"],{5118:function(e,t,n){(function(e){var i="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,a=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(a.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new s(a.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("24aa"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var i,a=1,s={},o=!1,r=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?m():v()?p():e.MessageChannel?h():r&&"onreadystatechange"in r.createElement("script")?g():b(),d.setImmediate=u,d.clearImmediate=c}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[a]=o,i(a),a++}function c(e){delete s[e]}function l(e){var t=e.callback,i=e.args;switch(i.length){case 0:t();break;case 1:t(i[0]);break;case 2:t(i[0],i[1]);break;case 3:t(i[0],i[1],i[2]);break;default:t.apply(n,i);break}}function f(e){if(o)setTimeout(f,0,e);else{var t=s[e];if(t){o=!0;try{l(t)}finally{c(e),o=!1}}}}function m(){i=function(e){t.nextTick(function(){f(e)})}}function v(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function p(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),i=function(n){e.postMessage(t+n,"*")}}function h(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},i=function(t){e.port2.postMessage(t)}}function g(){var e=r.documentElement;i=function(t){var n=r.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function b(){i=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("24aa"),n("4362"))},"95f1":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.deviseOptions.adminClass],attrs:{id:"devise-admin"}},[n("panel",{directives:[{name:"tuck",rawName:"v-tuck"}],staticClass:"dvs-m-8 dvs-fixed dvs-z-9980",staticStyle:{"min-width":"360px"},attrs:{"panel-style":e.theme.panel}},[n("div",{staticClass:"dvs-flex"},[n("div",{staticClass:"dvs-flex dvs-flex-col dvs-relative",style:e.theme.panelSidebar},[n("preview-mode"),e._l(e.allowedAdminMenu,function(t,i){return[n("button",{key:i,staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-border-b",style:e.checkActivePanelSidebar(t),on:{click:function(n){return n.preventDefault(),e.loadAdminPage(t)}}},[n(t.icon,{tag:"component",staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1)]}),n("a",{staticClass:"dvs-outline-none dvs-transitions-hover-slow dvs-cursor-pointer dvs-border-b",style:e.theme.panelSidebar,attrs:{href:"/logout}",onclick:"event.preventDefault(); document.getElementById('dvs-logout-form').submit();"}},[n("power-icon",{staticClass:"dvs-m-4",attrs:{w:"25",h:"25"}})],1),n("form",{staticStyle:{display:"none"},attrs:{id:"dvs-logout-form",action:"/logout",method:"POST"}},[n("input",{attrs:{type:"hidden",name:"_token"},domProps:{value:e.csrf_field}})])],2),n("div",{directives:[{name:"bar",rawName:"v-bar",value:{preventParentScroll:!0},expression:"{preventParentScroll: true}"}],ref:"admin-route-wrapper",staticClass:"dvs-max-h-screenpad dvs-flex-grow",attrs:{id:"dvs-admin-content-container"}},[n("div",[n("div",[n("transition",{attrs:{name:"dvs-fade",mode:"out-in"}},[n("router-view",{attrs:{name:"devise"}})],1)],1)])])])]),n("portal-target",{staticClass:"dvs-relative dvs-z-9999",attrs:{name:"devise-root"}}),n("media-manager",{staticClass:"dvs-z-9999"}),n("slice-settings"),n("loadbar",{staticClass:"dvs-relative dvs-z-9999"}),n("loading-screen",{staticClass:"dvs-relative dvs-z-9999"})],1)},a=[],s=n("a4bb"),o=n.n(s),r=(n("7f7f"),n("5176")),d=n.n(r),u=n("cebc"),c=n("a026"),l=n("2f62"),f=n("5118"),m={name:"Administration",data:function(){return{everythingIsLoaded:!1}},mounted:function(){var e=this;c["default"].component("help",function(){return n.e("devise-utilities").then(n.bind(null,"a31e"))}),setTimeout(function(){e.everythingIsLoaded=!0},2e3),Object(f["setInterval"])(function(){e.pollIfLoggedIn()},3e4)},methods:Object(u["a"])({},Object(l["b"])("devise",["getLanguages"]),{loadAdminPage:function(e){"media-manager"===e.routeName?window.deviseSettings.$bus.$emit("devise-launch-media-manager",{}):"undefined"!==typeof e.routeParams?this.goToPage(e.routeName,e.routeParams):this.goToPage(e.routeName)},checkActivePanelSidebar:function(e){var t=d()({},this.theme.panelSidebar);return this.$route.meta&&this.$route.meta.parentRouteName&&("devise-pages-view"===this.$route.name&&this.$route.params.pageId===this.currentPage.id&&"devise-pages-view"===e.routeName&&(t.background=this.theme.panelSidebar.secondaryColor),e.routeName!==this.$route.meta.parentRouteName||"devise-pages-view"===this.$route.name&&this.$route.params.pageId===this.currentPage.id||(t.background=this.theme.panelSidebar.secondaryColor)),t},pollIfLoggedIn:function(){this.getLanguages().then(function(){},function(e){window.location.reload(!0)})}}),computed:Object(u["a"])({},Object(l["e"])("devise",["adminMenu"]),{allowedAdminMenu:function(){var e=this;return o()(this.adminMenu).filter(function(t){return!e.adminMenu[t].permissions||e.can(e.adminMenu[t].permissions)}).reduce(function(t,n){return t[n]=e.adminMenu[n],t},{})},user:function(){return window.deviseSettings.$user},csrf_field:function(){return window.axios.defaults.headers.common["X-CSRF-TOKEN"]}}),components:{Loadbar:function(){return n.e("devise-utilities").then(n.bind(null,"69bf"))},LoadingScreen:function(){return n.e("devise-utilities").then(n.bind(null,"f10a"))},MediaEditor:function(){return n.e("devise-media").then(n.bind(null,"3d71"))},MediaManager:function(){return n.e("devise-media").then(n.bind(null,"0dea"))},PreviewMode:function(){return n.e("devise-previewmode").then(n.bind(null,"6ae2"))},BackIcon:function(){return n.e("devise-icons").then(n.bind(null,"f6e6"))},CogIcon:function(){return n.e("devise-icons").then(n.bind(null,"8dd5"))},CreateIcon:function(){return n.e("devise-icons").then(n.bind(null,"39b0"))},CubeIcon:function(){return n.e("devise-icons").then(n.bind(null,"d454"))},DocumentIcon:function(){return n.e("devise-icons").then(n.bind(null,"382d"))},ImageIcon:function(){return n.e("devise-icons").then(n.bind(null,"fab7"))},Panel:function(){return n.e("devise-utilities").then(n.bind(null,"cb57"))},PowerIcon:function(){return n.e("devise-icons").then(n.bind(null,"95ae"))},SaveIcon:function(){return n.e("devise-icons").then(n.bind(null,"854f"))},SliceSettings:function(){return n.e("devise-slices").then(n.bind(null,"5f09"))}}},v=m,p=n("0c7c"),h=Object(p["a"])(v,i,a,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=devise-admin.654c031f.js.map