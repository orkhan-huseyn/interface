(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-slices"],{1276:function(t,e,s){"use strict";var i=s("d784"),n=s("44e7"),r=s("825a"),o=s("1d80"),l=s("4840"),a=s("8aa5"),c=s("50c4"),d=s("14c3"),u=s("9263"),v=s("d039"),p=[].push,g=Math.min,f=4294967295,h=!v((function(){return!RegExp(f,"y")}));i("split",2,(function(t,e,s){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var i=String(o(this)),r=void 0===s?f:s>>>0;if(0===r)return[];if(void 0===t)return[i];if(!n(t))return e.call(i,t,r);var l,a,c,d=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,v+"g");while(l=u.call(h,i)){if(a=h.lastIndex,a>g&&(d.push(i.slice(g,l.index)),l.length>1&&l.index<i.length&&p.apply(d,l.slice(1)),c=l[0].length,g=a,d.length>=r))break;h.lastIndex===l.index&&h.lastIndex++}return g===i.length?!c&&h.test("")||d.push(""):d.push(i.slice(g)),d.length>r?d.slice(0,r):d}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var n=o(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n,s):i.call(String(n),e,s)},function(t,n){var o=s(i,t,this,n,i!==e);if(o.done)return o.value;var u=r(t),v=String(this),p=l(u,RegExp),m=u.unicode,b=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),x=new p(h?u:"^(?:"+u.source+")",b),y=void 0===n?f:n>>>0;if(0===y)return[];if(0===v.length)return null===d(x,v)?[v]:[];var w=0,C=0,k=[];while(C<v.length){x.lastIndex=h?C:0;var _,S=d(x,h?v:v.slice(C));if(null===S||(_=g(c(x.lastIndex+(h?0:C)),v.length))===w)C=a(v,C,m);else{if(k.push(v.slice(w,C)),k.length===y)return k;for(var P=1;P<=S.length-1;P++)if(k.push(S[P]),k.length===y)return k;C=w=_}}return k.push(v.slice(w)),k}]}),!h)},"5f09":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dvs-fixed dvs-z-9999",staticStyle:{top:"30px",right:"30px"}},[t.showEditor?s("div",{staticClass:"dvs-z-50 dvs-min-w-96 dvs-z-50 dvs-rounded dvs-bg-admin-bg dvs-text-admin-fg dvs-shadow-lg dvs-flex dvs-items-stretch",staticStyle:{height:"calc(100vh - 50px)"}},[s("div",{staticClass:"dvs-left-0 dvs-z-10 dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg",style:{position:"relative",bottom:"auto",width:"175px",margin:0},attrs:{id:"dvs-admin-sidebar"}},[s("ul",[s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(e){t.showType="desktop"}}},[t._v("Desktop")]),s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(e){t.showType="tablet"}}},[t._v("Tablet")]),s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(e){t.showType="mobile"}}},[t._v("Mobile")])]),s("div",{staticClass:"dvs-absolute dvs-text-xs dvs-left-0 dvs-right-0 dvs-bottom-0 dvs-p-4"},[s("button",{staticClass:"dvs-btn dvs-btn-primary dvs-w-full dvs-mb-2",on:{click:t.closeEditor}},[t._v(" Done ")])])]),s("div",{staticClass:"dvs-p-8   overflow-y-scroll"},[s("div",[s("div",[s("div",["desktop"===t.showType?s("slice-settings-section",{attrs:{value:t.slice.settings,"background-color":t.backgroundColor,color:t.color,"responsive-mode":"desktop"},on:{resetstyles:t.resetStyles,setmarginpadding:t.setMarginPadding,setbackground:t.setBackground,setforeground:t.setForeground}}):t._e(),"tablet"===t.showType?s("slice-settings-section",{attrs:{value:t.slice.settings,"background-color":t.backgroundColor,color:t.color,"responsive-mode":"tablet"},on:{resetstyles:t.resetStyles,setmarginpadding:t.setMarginPadding,setbackground:t.setBackground,setforeground:t.setForeground}}):t._e(),"mobile"===t.showType?s("slice-settings-section",{attrs:{value:t.slice.settings,"background-color":t.backgroundColor,"responsive-mode":"mobile"},on:{resetstyles:t.resetStyles,setmarginpadding:t.setMarginPadding,setbackground:t.setBackground,setforeground:t.setForeground}}):t._e()],1)])])])]):t._e()])},n=[],r=(s("99af"),s("fb6a"),s("5530")),o=s("2f62"),l=s("2b0e"),a=s("29ec"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",{staticClass:"dvs-uppercase dvs-mb-2"},[t._v(t._s(t.responsiveMode))]),s("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[s("label",[t._v("ID of Slice")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.settings.id,expression:"settings.id"}],attrs:{type:"text"},domProps:{value:t.settings.id},on:{input:function(e){e.target.composing||t.$set(t.settings,"id",e.target.value)}}})]),t._m(0),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-my-4",attrs:{id:"dvs-slice-manager-margins-padding"}},[s("div",{staticClass:"dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg"},[s("div",{staticClass:"dvs-flex dvs-p-2 dvs-pb-0"},[s("div",{staticClass:"dvs-text-xs dvs-uppercase dvs-w-1/3"},[t._v("Margin")]),s("div",{staticClass:"dvs-w-1/3 dvs-text-center"},[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("margin","top")},on:{keyup:function(e){return t.setMargin("top",e)},click:function(e){return t.setMargin("top",e)}}})])]),s("div",{staticClass:"dvs-flex dvs-items-center dvs-px-2"},[s("div",[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("margin","left")},on:{keyup:function(e){return t.setMargin("left",e)},click:function(e){return t.setMargin("left",e)}}})]),s("div",{staticClass:"dvs-p-2"},[s("div",{staticClass:"dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"},[s("div",{staticClass:"dvs-flex dvs-p-2 dvs-pb-0"},[s("div",{staticClass:"dvs-text-xs dvs-uppercase dvs-w-1/3"},[t._v("Padding")]),s("div",{staticClass:"dvs-w-1/3 dvs-text-center"},[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("padding","top")},on:{keyup:function(e){return t.setPadding("top",e)},click:function(e){return t.setPadding("top",e)}}})])]),s("div",{staticClass:"dvs-flex dvs-items-center dvs-px-2"},[s("div",[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("padding","left")},on:{keyup:function(e){return t.setPadding("left",e)},click:function(e){return t.setPadding("left",e)}}})]),t._m(1),s("div",[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("padding","right")},on:{keyup:function(e){return t.setPadding("right",e)},click:function(e){return t.setPadding("right",e)}}})])]),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-2 dvs-pt-0"},[s("div",{staticClass:"dvs-text-center"},[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("padding","bottom")},on:{keyup:function(e){return t.setPadding("bottom",e)},click:function(e){return t.setPadding("bottom",e)}}})])])])]),s("div",[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("margin","right")},on:{keyup:function(e){return t.setMargin("right",e)},click:function(e){return t.setMargin("right",e)}}})])]),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-2 dvs-pt-0"},[s("div",{staticClass:"dvs-text-center"},[s("input",{staticClass:"dvs-text-black",attrs:{type:"text"},domProps:{value:t.getStyle("margin","bottom")},on:{keyup:function(e){return t.setMargin("bottom",e)},click:function(e){return t.setMargin("bottom",e)}}})])])])]),s("div",{staticClass:"dvs-mb-8"},[t._m(2),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackgroundColor,expression:"showBackgroundColor"}]},[s("color-picker",{model:{value:t.bg,callback:function(e){t.bg=e},expression:"bg"}})],1),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showBackgroundColor,expression:"!showBackgroundColor"}],staticClass:"dvs-btn dvs-btn-primary dvs-mr-2 dvs-text-xs",on:{click:function(e){t.showBackgroundColor=!0}}},[t._v(" Set Background Color ")])]),s("div",{staticClass:"dvs-mb-8"},[t._m(3),s("div",{directives:[{name:"show",rawName:"v-show",value:t.showTextColor,expression:"showTextColor"}]},[s("color-picker",{model:{value:t.textColor,callback:function(e){t.textColor=e},expression:"textColor"}})],1),s("button",{directives:[{name:"show",rawName:"v-show",value:!t.showTextColor,expression:"!showTextColor"}],staticClass:"dvs-btn dvs-btn-primary dvs-mr-2 dvs-text-xs",on:{click:function(e){t.showTextColor=!0}}},[t._v(" Set Text Color ")])]),s("button",{staticClass:"dvs-btn dvs-rounded dvs-btn-secondary dvs-text-xs",on:{click:t.resetStyles}},[t._v(" Reset all Settings ")])])},d=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[t._v("Margins and Padding")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dvs-p-2"},[s("div",{staticClass:"dvs-bg-white dvs-w-24 dvs-h-24"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"dvs-fieldset dvs-mt-8"},[s("label",[t._v("Background Color")]),s("p",{staticClass:"dvs-mb-4 dvs-text-xs"},[t._v("Note: Background color effects all responsive sizes")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("fieldset",{staticClass:"dvs-fieldset dvs-mt-8"},[s("label",[t._v("Text Color")]),s("p",{staticClass:"dvs-mb-4 dvs-text-xs"},[t._v("Note: Text color effects all responsive sizes")])])}],u=s("e21f").default,v={name:"DeviseSliceSettingsSection",components:{"color-picker":u},props:{value:{type:Object,required:!0},responsiveMode:{type:String,required:!0},backgroundColor:{type:Object,default:null},color:{type:Object,default:null}},data:function(){return{showBackgroundColor:!1,showTextColor:!1}},computed:{settings:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},bg:{get:function(){return this.backgroundColor},set:function(t){this.$emit("setbackground",t)}},textColor:{get:function(){return this.color},set:function(t){this.$emit("setforeground",t)}},theId:{get:function(){return this.id},set:function(t){this.$emit("setId",t)}}},methods:{setMargin:function(t,e){var s=e.target.value;this.$emit("setmarginpadding",{responsiveMode:this.responsiveMode,type:"margin",position:t,value:s})},setPadding:function(t,e){var s=e.target.value;this.$emit("setmarginpadding",{responsiveMode:this.responsiveMode,type:"padding",position:t,value:s})},getStyle:function(t,e){if("margin"===t||"padding"===t){var s="";if("desktop"!==this.responsiveMode&&(s="".concat(this.responsiveMode,"_")),"undefined"!==typeof this.value[s+t]&&"undefined"!==typeof this.value[s+t][e])return this.value[s+t][e]}return 0},resetStyles:function(){this.$emit("resetstyles",this.responsiveMode)}}},p=v,g=s("2877"),f=Object(g["a"])(p,c,d,!1,null,null,null),h=f.exports,m=s("66cb"),b={name:"SliceSettings",components:{SliceSettingsSection:h},mixins:[a["a"]],data:function(){return{showEditor:!1,backgroundColor:null,color:null,slice:{},controlStyles:{right:null,top:null},showType:"desktop"}},computed:Object(r["a"])({},Object(o["c"])("devise",["component","sliceConfig"])),created:function(){this.backgroundColor=m("#fff").toRgb(),this.color=m("#000").toRgb()},mounted:function(){this.addListeners()},methods:{addListeners:function(){var t=this;window.deviseSettings.$bus.$on("open-slice-settings",(function(e){t.showEditor=!0,l["default"].set(t,"slice",e),t.slice.settings.backgroundColor?t.backgroundColor=m(t.slice.settings.backgroundColor).toRgb():t.backgroundColor=m("#fff").toRgb()})),window.deviseSettings.$bus.$on("devise-close-sidebar",(function(){t.closeEditor()}))},closeEditor:function(){this.showEditor=!1,this.showType="desktop",l["default"].set(this,"slice",{})},resetStyles:function(){this.$set(this.slice,"settings",{}),this.backgroundColor=m("#fff").toRgb()},setMarginPadding:function(t){"desktop"===t.responsiveMode&&this.setDesktopMarginPadding(t),"tablet"===t.responsiveMode&&this.setTabletMarginPadding(t),"mobile"===t.responsiveMode&&this.setMobileMarginPadding(t)},setDesktopMarginPadding:function(t){"margin"===t.type&&"undefined"===typeof this.slice.settings.margin&&this.$set(this.slice.settings,"margin",{}),"padding"===t.type&&"undefined"===typeof this.slice.settings.padding&&this.$set(this.slice.settings,"padding",{}),this.$set(this.slice.settings[t.type],t.position,t.value)},setTabletMarginPadding:function(t){"margin"===t.type&&"undefined"===typeof this.slice.settings.tablet_margin&&this.$set(this.slice.settings,"tablet_margin",{}),"padding"===t.type&&"undefined"===typeof this.slice.settings.tablet_padding&&this.$set(this.slice.settings,"tablet_padding",{}),this.$set(this.slice.settings["tablet_".concat(t.type)],t.position,t.value)},setMobileMarginPadding:function(t){"margin"===t.type&&"undefined"===typeof this.slice.settings.mobile_margin&&this.$set(this.slice.settings,"mobile_margin",{}),"padding"===t.type&&"undefined"===typeof this.slice.settings.mobile_padding&&this.$set(this.slice.settings,"mobile_padding",{}),this.$set(this.slice.settings["mobile_".concat(t.type)],t.position,t.value)},setBackground:function(t){this.$set(this.slice.settings,"backgroundColor","rgba(".concat(t.rgba.r,",").concat(t.rgba.g,",").concat(t.rgba.b,",").concat(t.rgba.a,")"))},setForeground:function(t){this.$set(this.slice.settings,"color","rgba(".concat(t.rgba.r,",").concat(t.rgba.g,",").concat(t.rgba.b,",").concat(t.rgba.a,")"))}}},x=b,y=Object(g["a"])(x,i,n,!1,null,null,null);e["default"]=y.exports},8795:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dvs-relative dvs-mb-8"},[s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-4 dvs-pb-8  dvs-text-admin-fg  dvs-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],ref:"filter",staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:"Type to begin searching"},domProps:{value:t.filter},on:{input:function(e){e.target.composing||(t.filter=e.target.value)}}}),s("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===t.filter},on:{click:function(e){t.filter=""}}},[s("x-icon")],1)]),t.allDirectories.length>0?s("div",[s("div",[t._l(t.allDirectories,(function(e,i){return s("slice-selector-directory",{key:i,attrs:{"allowed-views":t.allowedViews,directory:e,value:t.value},on:{input:t.update}})})),s("div",{staticClass:"dvs-h-32"})],2)]):t._e()])},n=[],r=(s("99af"),s("a623"),s("4de4"),s("7db0"),s("caad"),s("d81d"),s("b0c0"),s("d3b7"),s("ac1f"),s("2532"),s("1276"),s("5530")),o=s("2f62"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.currentDirectoryFiles.length>0?s("div",{staticClass:"dvs-mb-8 dvs-w-full dvs-text-admin-fg"},[s("div",{staticClass:"dvs-uppercase dvs-text-sm dvs-ml-2 dvs-mb-2 dvs-w-full dvs-pb-2 dvs-opacity-75"},[t._v(" "+t._s(t.name)+" ")]),s("div",{staticClass:"dvs-flex dvs-flex-wrap dvs-items-stretch"},t._l(t.currentDirectoryFiles,(function(e,i){return s("div",{key:i,staticClass:"dvs-cursor-pointer dvs-w-1/3 dvs-mb-1 dvs-flex dvs-justify-stretch dvs-items-stretch dvs-p-2 dvs-border-box",staticStyle:{"min-width":"240px"},on:{click:function(s){return t.toggleSelectSlice(e)}}},[s("div",{staticClass:"dvs-w-full dvs-shadow dvs-rounded",class:t.isSelected(e)},[s("slice-selector-slice",{staticClass:"dvs-mr-4",attrs:{file:e}})],1)])})),0)]):t._e()},a=[],c=(s("5319"),s("498a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dvs-p-4 dvs-flex dvs-flex-col dvs-justify-between dvs-items-between dvs-w-full dvs-border-box"},[t.preview?s("slice-diagram",{staticClass:"dvs-mb-4",attrs:{file:t.file,"height-of-preview":200}}):t._e(),s("div",[s("div",{staticClass:"dvs-cursor-pointer"},[t._v(t._s(t.file.name))]),t.description?s("div",{staticClass:"dvs-text-2xs dvs-mb-2 dvs-opacity-75"},[t._v(t._s(t.description))]):t._e(),t.childSlot?s("div",{staticClass:"dvs-text-xs dvs-flex dvs-items-align dvs-opacity-75"},[s("information-circle-icon",{staticClass:"dvs-mr-1"}),t._v("Can contain sub-slices ")],1):t._e(),t.database?s("div",{staticClass:"dvs-text-xs dvs-flex dvs-items-align dvs-opacity-75"},[s("cube-icon",{staticClass:"dvs-mr-1"}),t._v("Database driven ")],1):t._e()])],1)}),d=[],u=(s("a4d3"),s("e01a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dvs-flex dvs-justify-center",staticStyle:{"font-size":"12px"}},[t.preview?s("div",{staticClass:"dvs-my-4 dvs-p-4 dvs-shadow-lg dvs-rounded-sm dvs-overflow-hidden",staticStyle:{"background-color":"rgba(0,0,0,0.1)"},style:{width:t.width,height:t.heightOfPreview+30+"px"}},[s("div",{staticClass:"dvs-overflow-hidden dvs-rounded-sm dvs--mx-1",domProps:{innerHTML:t._s(t.preview)}},[t._v(" "+t._s(t.component)+" ")])]):t._e()])}),v=[],p=(s("a9e3"),s("53ca")),g=s("cc86"),f={props:{file:{type:Object,required:!0},heightOfPreview:{type:Number,required:!0,default:200}},data:function(){return{hasPreview:!1,totalHeight:0,width:"100%"}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])("devise",["componentFromView"])),{},{component:function(){return this.componentFromView(this.file.value)},preview:function(){var t=this.componentFromView(this.file.value);if(t.preview){var e=this.buildPreview(t.preview);if(e)return e}return!1}}),mounted:function(){this.checkHasPreview(),this.setWidth()},methods:{checkHasPreview:function(){this.component.preview&&this.preview&&(this.hasPreview=!0)},setWidth:function(){this.component.previewWidth&&this.component.previewWidth<1&&(this.width="".concat(100*this.component.previewWidth,"%"))},buildPreview:function(t){var e=this;if("object"!==Object(p["a"])(t))return!1;var s="",i=[];return this.totalHeight=0,t.map((function(t){var s=/\{(.*)\}(.*)/g,n=s.exec(t);if(n){i.push(n);var r=parseInt(n[2],0);e.totalHeight+=r>0?parseInt(n[2],0):25}return!1})),i.map((function(t){var i=" ",n=e.getPreviewHtmlParts(t[1],parseInt(t[2],0));return n.map((function(t){return"undefined"!==typeof t&&(i+=t),t})),s+=i,t})),s},getPreviewHtmlParts:function(t,e){var s=this,i=[],n=t.split(","),r="auto";if(e>1&&!isNaN(e)){var o=e*(this.heightOfPreview/this.totalHeight);r="".concat(o>e?e:o,"px")}return i.push('<div class="dvs-flex dvs-justify-between align-center dvs-mb-2" style="height:'.concat(r,'">')),i=i.concat(n.map((function(t){return s.getPreviewHtmlPart(t.trim(),n.length,r)}))),i.push("</div>"),i},getPreviewHtmlPart:function(t,e,s){var i=t.substring(0,1),n=t.substring(1),r="".concat(1/e*100,"%"),o="width:".concat(r,";padding:2px;"),l="";if("B"===i){"auto"===s&&(s=100),n.includes("bg")?o+="background-color:rgba(0,0,0,0.2);":o+="background-color:rgba(0,0,0,0.0);";var a=.75*s;return n.includes("s")&&(a=.5*s),n.includes("xs")&&(a=.25*s),o+="height:".concat(a,"px"),'<div style="'.concat(o,'" class="dvs-text-center dvs-relative dvs-mx-1">&nbsp;</div>')}if("I"===i){"auto"===s&&(s=100);var c=.75*s;return n.includes("s")&&(c=.5*s,l+="dvs-mt-1 dvs-ml-1"),n.includes("xs")&&(c=.25*s,l+="dvs-m-0"),o+="height:".concat(c,"px;color:rgba(0,0,0,0.5);"),'<div style="'.concat(o,'background-color:rgba(0,0,0,0.2)" class="dvs-text-center dvs-relative dvs-mx-1"><svg stroke="currentColor" fill="currentColor" width="20px" height="20px" class="ion__svg dvs-absolute dvs-top-0 dvs-left-0 dvs-mt-4 dvs-ml-4 ').concat(l,'" viewBox="0 0 512 512"><path d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8zm194.1-58l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3zm44.4-86.4c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z"/><path d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z"/></svg></div>')}if("V"===i){"auto"===s&&(s=100);var d=.75*s;return n.includes("s")&&(d=.5*s,l+="dvs-mt-1 dvs-ml-1"),n.includes("xs")&&(d=.25*s,l+="dvs-m-0"),o+="height:".concat(d,"px;color:rgba(0,0,0,0.5);"),'<div style="'.concat(o,'background-color:rgba(0,0,0,0.2)" class="dvs-text-center dvs-relative dvs-mx-1"><svg stroke="currentColor" fill="currentColor" width="20px" height="20px" class="ion__svg dvs-absolute dvs-top-0 dvs-left-0 dvs-mt-4 dvs-ml-4 ').concat(l,'" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z"/></svg></div>')}if("T"===i){var u="Lorem ipsum dolar imet";if(n.includes("c")&&(o+="text-align:center;"),n.includes("r")&&(o+="text-align:right;"),n.includes("l")&&(o+="font-size:rem;"),n.includes("xl")&&(o+="font-size:1.25em;"),n.includes("s")&&(o+="font-size:0.50em;"),n.includes("b")&&(o+="font-weight:700;"),n.includes("i")&&(o+="font-style:italic"),n.includes("~")){var v=/~([0-9]*)/g,p=v.exec(n);u=g({count:p[1],units:"words"})}if(n.includes("-")){var f=/-([T,C,M]*)/g,h=f.exec(n);"C"===h[1]&&(o+="display:flex; align-items:center"),"B"===h[1]&&(o+="display:flex; align-items:end")}return'<div style="'.concat(o,'" class=" dvs-mx-1">').concat(u,"</div>")}if("F"===i){var m='<div class="dvs-flex dvs-flex-col dvs-w-full">',b='<div style="background-color:rgba(255,255,255,0.8);height:20px;" class="dvs-p-1 dvs-w-full dvs-mb-4"></div>',x='<div style="background-color:rgba(255,255,255,0.8);height:60px;" class="dvs-p-1 dvs-w-full dvs-mb-4"></div>',y='<div style="background-color:rgba(255,255,255,0.8);height:30px;" class="dvs-p-1 dvs-w-full dvs-rounded-sm dvs-mb-4 dvs-flex dvs-justify-center dvs-items-center dvs-uppercase dvs-text-xs">Click Me!</div>';return n.includes("xs")||(m+=b),n.includes("l")&&(m+=b,m+=b,m+=x),n.includes("s")||n.includes("l")||(m+=x),m+=y,m+="</div>",m}return null}}},h=f,m=s("2877"),b=Object(m["a"])(h,u,v,!1,null,null,null),x=b.exports,y={name:"DeviseSliceSelectorSlice",components:{CubeIcon:function(){return s.e("devise-icons").then(s.bind(null,"d454"))},InformationCircleIcon:function(){return s.e("devise-icons").then(s.bind(null,"09ad"))},SliceDiagram:x},props:{file:{required:!0,type:Object}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])("devise",["componentFromView"])),{},{sliceComponent:function(){return this.componentFromView(this.file.value)},description:function(){return!(!this.sliceComponent||!this.sliceComponent.description)&&this.sliceComponent.description},childSlot:function(){return!!this.sliceComponent&&this.sliceComponent.has_child_slot},database:function(){return!!this.sliceComponent&&this.sliceComponent.database},preview:function(){return!(!this.sliceComponent||!this.sliceComponent.preview)}})},w=y,C=Object(m["a"])(w,c,d,!1,null,null,null),k=C.exports,_={name:"DeviseSliceSelectorDirectory",components:{SliceSelectorSlice:k},props:{directory:{required:!0,type:Object},value:{type:Object,default:function(){}},allowedViews:{type:Array,default:null}},computed:Object(r["a"])(Object(r["a"])({},Object(o["c"])("devise",["componentFromView"])),{},{currentDirectoryFiles:function(){var t=this;return this.allowedViews&&this.allowedViews.length?this.directory.files.filter((function(e){return t.allowedViews.includes(e.value)})):this.directory.files},name:function(){return this.directory.path.trim().replace("."," ")}}),methods:{isSelected:function(t){return null!==this.value&&t.value===this.value.value?["dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"]:["dvs-bg-admin-fg dvs-text-admin-bg"]},toggleSelectSlice:function(t){this.value&&t.value===this.value.value?this.$emit("input",null):this.$emit("input",t)}}},S=_,P=Object(m["a"])(S,l,a,!1,null,null,null),M=P.exports,O={components:{SliceSelectorDirectory:M,XIcon:function(){return s.e("devise-icons").then(s.bind(null,"1a4e"))}},props:{value:{type:Object,default:function(){}},modelQuery:{type:Object,default:function(){}}},data:function(){return{directoryStack:[],filter:null}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(o["e"])("devise",["modelQueries"])),Object(o["c"])("devise",["slicesDirectories"])),{},{allDirectories:function(){return null!==this.filter&&""!==this.filter?this.filteredDirectories:this.slicesDirectories.directories&&this.slicesDirectories.directories.length>0?this.getDirectories(JSON.parse(JSON.stringify(this.slicesDirectories.directories)),0):[]},allowedViews:function(){var t=this;if(this.modelQuery&&null!==this.modelQuery.key){var e=this.modelQueries.find((function(e){return e.key===t.modelQuery.key}));return e.views}return null},filteredDirectories:function(){var t=this.filter.toLowerCase().split(" "),e=this.getDirectories(JSON.parse(JSON.stringify(this.slicesDirectories.directories)),0).filter((function(e){if(t.every((function(t){return e.path.toLowerCase().includes(t)})))return!0;var s=e.files;return s=s.filter((function(e){return t.every((function(t){return e.value.toLowerCase().includes(t)}))})),!!s.length&&(e.files=s,!0)}));return e}}),mounted:function(){this.$refs.filter.focus()},methods:{getDirectoryFiles:function(t,e){return e=t.find((function(t){return t.dirName===e})),e},getDirectories:function(t){var e=this,s=[];return t.map((function(t){return s.push(t),t.directories&&t.directories.length>0&&(s=s.concat(e.getDirectories(t.directories))),t})),s},filteredFiles:function(t){var e=this.filter.toLowerCase();return t.files.filter((function(t){return!!t.name.toLowerCase().includes(e)}))},update:function(t){this.$emit("input",t)}}},j=O,$=Object(m["a"])(j,i,n,!1,null,null,null);e["default"]=$.exports},a623:function(t,e,s){"use strict";var i=s("23e7"),n=s("b727").every,r=s("a640"),o=s("ae40"),l=r("every"),a=o("every");i({target:"Array",proto:!0,forced:!l||!a},{every:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},bd9f:function(t,e){var s={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]};t.exports=s},cc86:function(t,e,s){(function(e){function i(){var i=arguments.length?arguments[0]:{},r=i.count||1,o=i.units||"sentences",l=i.sentenceLowerBound||5,a=i.sentenceUpperBound||15,c=i.paragraphLowerBound||3,d=i.paragraphUpperBound||7,u=i.format||"plain",v=i.words||s("bd9f").words,p=i.random||Math.random,g=i.suffix;if(!g){var f=t.exports,h="undefined"!==typeof product&&"ReactNative"===product.navigator,m="undefined"!==typeof e&&"win32"===e.platform;g=!h&&f&&m?"\r\n":"\n"}function b(t,e){return Math.floor(p()*(e-t+1)+t)}function x(t){return t[b(0,t.length-1)]}function y(t,e,s){var i="",n={min:0,max:b(e,s)};while(n.min<n.max)i+=" "+x(t),n.min++;return i.length&&(i=i.slice(1),i=i.charAt(0).toUpperCase()+i.slice(1)),i}function w(t,e,s,i,n){var r="",o={min:0,max:b(e,s)};while(o.min<o.max)r+=". "+y(t,i,n),o.min++;return r.length&&(r=r.slice(2),r+="."),r}o=n(o.toLowerCase());var C,k,_={min:0,max:r},S="";"html"===u&&(C="<p>",k="</p>");while(_.min<_.max){switch(o.toLowerCase()){case"words":S+=" "+x(v);break;case"sentences":S+=". "+y(v,l,a);break;case"paragraphs":var P=w(v,c,d,l,a);"html"===u?(P=C+P+k,_.min<_.max-1&&(P+=g)):_.min<_.max-1&&(P+=g+g),S+=P;break}_.min++}if(S.length){var M=0;0===S.indexOf(". ")?M=2:0!==S.indexOf(".")&&0!==S.indexOf(" ")||(M=1),S=S.slice(M),"sentences"===o&&(S+=".")}return S}function n(t){return-1===t.indexOf("s",t.length-1)?t+"s":t}t.exports=i}).call(this,s("4362"))}}]);
//# sourceMappingURL=devise-slices.e18c1bac.js.map