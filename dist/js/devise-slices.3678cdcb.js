(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["devise-slices"],{"28a5":function(e,t,s){"use strict";var i=s("aae3"),n=s("cb7c"),r=s("ebd6"),o=s("0390"),c=s("9def"),a=s("5f1b"),d=s("520a"),l=s("79e5"),u=Math.min,v=[].push,p="split",g="length",f="lastIndex",h=4294967295,m=!l(function(){RegExp(h,"y")});s("214f")("split",2,function(e,t,s,l){var b;return b="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[g]||2!="ab"[p](/(?:ab)*/)[g]||4!="."[p](/(.?)(.?)/)[g]||"."[p](/()()/)[g]>1||""[p](/.?/)[g]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!i(e))return s.call(n,e,t);var r,o,c,a=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,p=void 0===t?h:t>>>0,m=new RegExp(e.source,l+"g");while(r=d.call(m,n)){if(o=m[f],o>u&&(a.push(n.slice(u,r.index)),r[g]>1&&r.index<n[g]&&v.apply(a,r.slice(1)),c=r[0][g],u=o,a[g]>=p))break;m[f]===r.index&&m[f]++}return u===n[g]?!c&&m.test("")||a.push(""):a.push(n.slice(u)),a[g]>p?a.slice(0,p):a}:"0"[p](void 0,0)[g]?function(e,t){return void 0===e&&0===t?[]:s.call(this,e,t)}:s,[function(s,i){var n=e(this),r=void 0==s?void 0:s[t];return void 0!==r?r.call(s,n,i):b.call(String(n),s,i)},function(e,t){var i=l(b,e,this,t,b!==s);if(i.done)return i.value;var d=n(e),v=String(this),p=r(d,RegExp),g=d.unicode,f=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new p(m?d:"^(?:"+d.source+")",f),w=void 0===t?h:t>>>0;if(0===w)return[];if(0===v.length)return null===a(x,v)?[v]:[];var y=0,C=0,k=[];while(C<v.length){x.lastIndex=m?C:0;var _,S=a(x,m?v:v.slice(C));if(null===S||(_=u(c(x.lastIndex+(m?0:C)),v.length))===y)C=o(v,C,g);else{if(k.push(v.slice(y,C)),k.length===w)return k;for(var P=1;P<=S.length-1;P++)if(k.push(S[P]),k.length===w)return k;C=y=_}}return k.push(v.slice(y)),k}]})},"5f09":function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-fixed dvs-z-9999",staticStyle:{top:"30px",right:"30px"}},[e.showEditor?s("div",{staticClass:"dvs-z-50 dvs-min-w-96 dvs-z-50 dvs-rounded dvs-bg-admin-bg dvs-text-admin-fg dvs-shadow-lg dvs-flex dvs-items-stretch"},[s("div",{staticClass:"dvs-pin-l dvs-z-10 dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg",style:{position:"relative",bottom:"auto",width:"175px",margin:0},attrs:{id:"dvs-admin-sidebar"}},[s("ul",[s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(t){e.showType="desktop"}}},[e._v("Desktop")]),s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(t){e.showType="tablet"}}},[e._v("Tablet")]),s("li",{staticClass:"dvs-cursor-pointer",on:{click:function(t){e.showType="mobile"}}},[e._v("Mobile")])]),s("div",{staticClass:"dvs-absolute dvs-text-xs dvs-pin-l dvs-pin-r dvs-pin-b dvs-p-4"},[s("button",{staticClass:"dvs-btn dvs-btn-primary dvs-w-full dvs-mb-2",on:{click:e.closeEditor}},[e._v("Done")])])]),s("div",{staticClass:"dvs-p-8"},[s("div",{directives:[{name:"bar",rawName:"v-bar"}],staticStyle:{height:"calc(100vh - 150px)"}},[s("div",[s("div",["desktop"===e.showType?s("slice-settings-section",{attrs:{value:e.slice.settings,backgroundColor:e.backgroundColor,color:e.color,"responsive-mode":"desktop"},on:{resetstyles:e.resetStyles,setmarginpadding:e.setMarginPadding,setbackground:e.setBackground,setforeground:e.setForeground}}):e._e(),"tablet"===e.showType?s("slice-settings-section",{attrs:{value:e.slice.settings,backgroundColor:e.backgroundColor,color:e.color,"responsive-mode":"tablet"},on:{resetstyles:e.resetStyles,setmarginpadding:e.setMarginPadding,setbackground:e.setBackground,setforeground:e.setForeground}}):e._e(),"mobile"===e.showType?s("slice-settings-section",{attrs:{value:e.slice.settings,backgroundColor:e.backgroundColor,"responsive-mode":"mobile"},on:{resetstyles:e.resetStyles,setmarginpadding:e.setMarginPadding,setbackground:e.setBackground,setforeground:e.setForeground}}):e._e()],1)])])])]):e._e()])},n=[],r=s("cebc"),o=s("2f62"),c=s("a026"),a=s("29ec"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h3",{staticClass:"dvs-uppercase dvs-mb-2"},[e._v(e._s(e.responsiveMode))]),s("fieldset",{staticClass:"dvs-fieldset dvs-mb-8"},[s("label",[e._v("ID of Slice")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.id,expression:"settings.id"}],attrs:{type:"text"},domProps:{value:e.settings.id},on:{input:function(t){t.target.composing||e.$set(e.settings,"id",t.target.value)}}})]),e._m(0),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-my-4",attrs:{id:"dvs-slice-manager-margins-padding"}},[s("div",{staticClass:"dvs-bg-admin-secondary-bg dvs-text-admin-secondary-fg"},[s("div",{staticClass:"dvs-flex dvs-p-2 dvs-pb-0"},[s("div",{staticClass:"dvs-text-xs dvs-uppercase dvs-w-1/3"},[e._v("Margin")]),s("div",{staticClass:"dvs-w-1/3 dvs-text-center"},[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("margin","top")},on:{keyup:function(t){return e.setMargin("top",t)},click:function(t){return e.setMargin("top",t)}}})])]),s("div",{staticClass:"dvs-flex dvs-items-center dvs-px-2"},[s("div",[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("margin","left")},on:{keyup:function(t){return e.setMargin("left",t)},click:function(t){return e.setMargin("left",t)}}})]),s("div",{staticClass:"dvs-p-2"},[s("div",{staticClass:"dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"},[s("div",{staticClass:"dvs-flex dvs-p-2 dvs-pb-0"},[s("div",{staticClass:"dvs-text-xs dvs-uppercase dvs-w-1/3"},[e._v("Padding")]),s("div",{staticClass:"dvs-w-1/3 dvs-text-center"},[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("padding","top")},on:{keyup:function(t){return e.setPadding("top",t)},click:function(t){return e.setPadding("top",t)}}})])]),s("div",{staticClass:"dvs-flex dvs-items-center dvs-px-2"},[s("div",[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("padding","left")},on:{keyup:function(t){return e.setPadding("left",t)},click:function(t){return e.setPadding("left",t)}}})]),e._m(1),s("div",[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("padding","right")},on:{keyup:function(t){return e.setPadding("right",t)},click:function(t){return e.setPadding("right",t)}}})])]),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-2 dvs-pt-0"},[s("div",{staticClass:"dvs-text-center"},[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("padding","bottom")},on:{keyup:function(t){return e.setPadding("bottom",t)},click:function(t){return e.setPadding("bottom",t)}}})])])])]),s("div",[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("margin","right")},on:{keyup:function(t){return e.setMargin("right",t)},click:function(t){return e.setMargin("right",t)}}})])]),s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-2 dvs-pt-0"},[s("div",{staticClass:"dvs-text-center"},[s("input",{attrs:{type:"number"},domProps:{value:e.getStyle("margin","bottom")},on:{keyup:function(t){return e.setMargin("bottom",t)},click:function(t){return e.setMargin("bottom",t)}}})])])])]),s("div",{staticClass:"dvs-mb-8"},[e._m(2),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showBackgroundColor,expression:"showBackgroundColor"}]},[s("sketch-picker",{model:{value:e.bg,callback:function(t){e.bg=t},expression:"bg"}})],1),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.showBackgroundColor,expression:"!showBackgroundColor"}],staticClass:"dvs-btn dvs-btn-primary dvs-mr-2 dvs-text-xs",on:{click:function(t){e.showBackgroundColor=!0}}},[e._v("Set Background Color")])]),s("div",{staticClass:"dvs-mb-8"},[e._m(3),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showTextColor,expression:"showTextColor"}]},[s("sketch-picker",{model:{value:e.textColor,callback:function(t){e.textColor=t},expression:"textColor"}})],1),s("button",{directives:[{name:"show",rawName:"v-show",value:!e.showTextColor,expression:"!showTextColor"}],staticClass:"dvs-btn dvs-btn-primary dvs-mr-2 dvs-text-xs",on:{click:function(t){e.showTextColor=!0}}},[e._v("Set Text Color")])]),s("button",{staticClass:"dvs-btn dvs-rounded dvs-btn-secondary dvs-text-xs",on:{click:e.resetStyles}},[e._v("Reset all Settings")])])},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("fieldset",{staticClass:"dvs-fieldset"},[s("label",[e._v("Margins and Padding")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-p-2"},[s("div",{staticClass:"dvs-bg-white dvs-w-24 dvs-h-24"},[e._v(" ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("fieldset",{staticClass:"dvs-fieldset dvs-mt-8"},[s("label",[e._v("Background Color")]),s("p",{staticClass:"dvs-mb-4 dvs-text-xs"},[e._v("Note: Background color effects all responsive sizes")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("fieldset",{staticClass:"dvs-fieldset dvs-mt-8"},[s("label",[e._v("Text Color")]),s("p",{staticClass:"dvs-mb-4 dvs-text-xs"},[e._v("Note: Text color effects all responsive sizes")])])}],u=s("c345"),v={data:function(){return{showBackgroundColor:!1,showTextColor:!1}},props:["value","responsiveMode","backgroundColor","color"],computed:{settings:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},bg:{get:function(){return this.backgroundColor},set:function(e){this.$emit("setbackground",e)}},textColor:{get:function(){return this.color},set:function(e){this.$emit("setforeground",e)}},theId:{get:function(){return this.id},set:function(e){this.$emit("setId",e)}}},methods:{setMargin:function(e,t){var s=t.target.value;this.$emit("setmarginpadding",{responsiveMode:this.responsiveMode,type:"margin",position:e,value:s})},setPadding:function(e,t){var s=t.target.value;this.$emit("setmarginpadding",{responsiveMode:this.responsiveMode,type:"padding",position:e,value:s})},getStyle:function(e,t){if("margin"===e||"padding"===e){var s="";if("desktop"!==this.responsiveMode&&(s="".concat(this.responsiveMode,"_")),"undefined"!==typeof this.value[s+e]&&"undefined"!==typeof this.value[s+e][t])return this.value[s+e][t]}return 0},resetStyles:function(){this.$emit("resetstyles",this.responsiveMode)}},components:{"sketch-picker":u["Sketch"]}},p=v,g=s("0c7c"),f=Object(g["a"])(p,d,l,!1,null,null,null),h=f.exports,m=s("66cb"),b={name:"SliceSettings",data:function(){return{showEditor:!1,backgroundColor:null,color:null,slice:{},controlStyles:{right:null,top:null},showType:"desktop"}},created:function(){this.backgroundColor=m("#fff").toRgb(),this.color=m("#000").toRgb()},mounted:function(){this.addListeners()},methods:{addListeners:function(){var e=this;window.deviseSettings.$bus.$on("open-slice-settings",function(t){e.showEditor=!0,c["default"].set(e,"slice",t),e.slice.settings.backgroundColor?e.backgroundColor=m(e.slice.settings.backgroundColor).toRgb():e.backgroundColor=m("#fff").toRgb()}),window.deviseSettings.$bus.$on("devise-close-sidebar",function(){e.closeEditor()})},closeEditor:function(){this.showEditor=!1,this.showType="desktop",c["default"].set(this,"slice",{})},resetStyles:function(){this.$set(this.slice,"settings",{}),this.backgroundColor=m("#fff").toRgb()},setMarginPadding:function(e){"desktop"===e.responsiveMode&&this.setDesktopMarginPadding(e),"tablet"===e.responsiveMode&&this.setTabletMarginPadding(e),"mobile"===e.responsiveMode&&this.setMobileMarginPadding(e)},setDesktopMarginPadding:function(e){"undefined"===typeof this.slice.settings.margin&&this.$set(this.slice.settings,"margin",{}),"undefined"===typeof this.slice.settings.padding&&this.$set(this.slice.settings,"padding",{}),this.$set(this.slice.settings[e.type],e.position,e.value)},setTabletMarginPadding:function(e){"undefined"===typeof this.slice.settings.tablet_margin&&this.$set(this.slice.settings,"tablet_margin",{}),"undefined"===typeof this.slice.settings.tablet_padding&&this.$set(this.slice.settings,"tablet_padding",{}),this.$set(this.slice.settings["tablet_".concat(e.type)],e.position,e.value)},setMobileMarginPadding:function(e){"undefined"===typeof this.slice.settings.mobile_margin&&this.$set(this.slice.settings,"mobile_margin",{}),"undefined"===typeof this.slice.settings.mobile_padding&&this.$set(this.slice.settings,"mobile_padding",{}),this.$set(this.slice.settings["mobile_".concat(e.type)],e.position,e.value)},setBackground:function(e){this.$set(this.slice.settings,"backgroundColor","rgba(".concat(e.rgba.r,",").concat(e.rgba.g,",").concat(e.rgba.b,",").concat(e.rgba.a,")"))},setForeground:function(e){this.$set(this.slice.settings,"color","rgba(".concat(e.rgba.r,",").concat(e.rgba.g,",").concat(e.rgba.b,",").concat(e.rgba.a,")"))}},computed:Object(r["a"])({},Object(o["c"])("devise",["component","sliceConfig"])),mixins:[a["a"]],components:{SliceSettingsSection:h}},x=b,w=Object(g["a"])(x,i,n,!1,null,null,null);t["default"]=w.exports},8795:function(e,t,s){"use strict";s.r(t);var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-relative dvs-mb-8"},[s("div",{staticClass:"dvs-flex dvs-justify-center dvs-p-4 dvs-pb-8  dvs-text-admin-fg  dvs-w-full"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],ref:"filter",staticClass:"dvs-bg-transparent dvs-border-b-2 dvs-px-12 dvs-py-2 dvs-text-admin-fg dvs-outline-none dvs-placeholder-admin-fg dvs-text-center",attrs:{type:"text",placeholder:"Type to begin searching"},domProps:{value:e.filter},on:{input:function(t){t.target.composing||(e.filter=t.target.value)}}}),s("div",{staticClass:"dvs-cursor-pointer",class:{"dvs-opacity-50":""===e.searchTerm},on:{click:function(t){e.filter=""}}},[s("x-icon")],1)]),this.allDirectories.length>0?s("div",[s("div",[e._l(this.allDirectories,function(t,i){return s("slice-selector-directory",{key:i,attrs:{directory:t,value:e.value},on:{input:e.update}})}),s("div",{staticClass:"dvs-h-32"},[e._v(" ")])],2)]):e._e()])},n=[],r=(s("28a5"),s("f499")),o=s.n(r),c=s("cebc"),a=(s("7f7f"),s("6762"),s("2fdb"),s("7514"),s("2f62")),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-mb-8 dvs-w-full dvs-text-admin-fg"},[s("div",{staticClass:"dvs-uppercase dvs-text-sm dvs-ml-2 dvs-mb-2 dvs-w-full dvs-pb-2 dvs-opacity-75"},[e._v("\n    "+e._s(this.name)+"\n  ")]),s("div",{staticClass:"dvs-flex dvs-flex-wrap dvs-items-stretch"},e._l(e.currentDirectoryFiles,function(t,i){return s("div",{key:i,staticClass:"dvs-cursor-pointer dvs-w-1/3 dvs-mb-1 dvs-flex dvs-justify-stretch dvs-items-stretch dvs-p-2 dvs-border-box",on:{click:function(s){return e.toggleSelectSlice(t)}}},[s("div",{staticClass:"dvs-w-full dvs-shadow dvs-rounded",class:e.isSelected(t)},[s("slice-selector-slice",{staticClass:"dvs-mr-4",attrs:{file:t}})],1)])}),0)])},l=[],u=(s("a481"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-p-4 dvs-flex dvs-flex-col dvs-justify-between dvs-items-between dvs-w-full dvs-border-box"},[e.preview?s("slice-diagram",{staticClass:"dvs-mb-4",attrs:{file:e.file,"height-of-preview":200}}):e._e(),s("div",[s("div",{staticClass:"dvs-cursor-pointer"},[e._v(e._s(e.file.name))]),e.description?s("div",{staticClass:"dvs-text-2xs dvs-mb-2 dvs-opacity-75"},[e._v(e._s(e.description))]):e._e(),e.childSlot?s("div",{staticClass:"dvs-text-xs dvs-flex dvs-items-align dvs-opacity-75"},[s("information-circle-icon",{staticClass:"dvs-mr-1"}),e._v("Can contain sub-slices\n    ")],1):e._e(),e.database?s("div",{staticClass:"dvs-text-xs dvs-flex dvs-items-align dvs-opacity-75"},[s("cube-icon",{staticClass:"dvs-mr-1"}),e._v("Database driven\n    ")],1):e._e()])],1)}),v=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"dvs-flex dvs-justify-center",staticStyle:{"font-size":"12px"}},[e.preview?s("div",{staticClass:"dvs-my-4 dvs-p-4 dvs-shadow-lg dvs-rounded-sm dvs-overflow-hidden",staticStyle:{"background-color":"rgba(0,0,0,0.1)"},style:{width:e.width,height:e.heightOfPreview+30+"px"}},[s("div",{staticClass:"dvs-overflow-hidden dvs-rounded-sm dvs--mx-1",domProps:{innerHTML:e._s(e.preview)}},[e._v(e._s(e.component))])]):e._e()])},g=[],f=(s("c5f6"),s("e814")),h=s.n(f),m=s("7618"),b=s("cc86"),x={data:function(){return{hasPreview:!1,totalHeight:0,width:"100%"}},mounted:function(){this.checkHasPreview(),this.setWidth()},methods:{checkHasPreview:function(){this.component.preview&&this.preview&&(this.hasPreview=!0)},setWidth:function(){this.component.previewWidth&&this.component.previewWidth<1&&(this.width="".concat(100*this.component.previewWidth,"%"))},buildPreview:function(e){var t=this;if("object"!==Object(m["a"])(e))return!1;var s="",i=[];return this.totalHeight=0,e.map(function(e){var s=/\{(.*)\}(.*)/g,n=s.exec(e);if(n){i.push(n);var r=h()(n[2],0);t.totalHeight+=r>0?h()(n[2],0):25}return!1}),i.map(function(e){var i=" ",n=t.getPreviewHtmlParts(e[1],h()(e[2],0));return n.map(function(e){return"undefined"!==typeof e&&(i+=e),e}),s+=i,e}),s},getPreviewHtmlParts:function(e,t){var s=this,i=[],n=e.split(","),r="auto";if(t>1&&!isNaN(t)){var o=t*(this.heightOfPreview/this.totalHeight);r="".concat(o>t?t:o,"px")}return i.push('<div class="dvs-flex dvs-justify-between align-center dvs-mb-2" style="height:'.concat(r,'">')),i=i.concat(n.map(function(e){return s.getPreviewHtmlPart(e.trim(),n.length,r)})),i.push("</div>"),i},getPreviewHtmlPart:function(e,t,s){var i=e.substring(0,1),n=e.substring(1),r="".concat(1/t*100,"%"),o="width:".concat(r,";padding:2px;"),c="";if("B"===i){"auto"===s&&(s=100),n.includes("bg")?o+="background-color:rgba(0,0,0,0.2);":o+="background-color:rgba(0,0,0,0.0);";var a=.75*s;return n.includes("s")&&(a=.5*s),n.includes("xs")&&(a=.25*s),o+="height:".concat(a,"px"),'<div style="'.concat(o,'" class="dvs-text-center dvs-relative dvs-mx-1">&nbsp;</div>')}if("I"===i){"auto"===s&&(s=100);var d=.75*s;return n.includes("s")&&(d=.5*s,c+="mt-1 ml-1"),n.includes("xs")&&(d=.25*s,c+="m-0"),o+="height:".concat(d,"px;color:rgba(0,0,0,0.5);"),'<div style="'.concat(o,'background-color:rgba(0,0,0,0.2)" class="dvs-text-center dvs-relative dvs-mx-1"><svg stroke="currentColor" fill="currentColor" width="20px" height="20px" class="ion__svg dvs-absolute dvs-pin-t dvs-pin-l dvs-mt-4 dvs-ml-4 ').concat(c,'" viewBox="0 0 512 512"><path d="M112.6 312.3h190.7c4.5 0 7.1-5.1 4.5-8.8l-95.4-153.4c-2.2-3.2-6.9-3.2-9.1 0L108 303.5c-2.6 3.7.1 8.8 4.6 8.8zm194.1-58l35 55.7c1 1.5 2.7 2.4 4.5 2.4h53.2c4.5 0 7.1-5.1 4.5-8.8l-61.6-87.7c-2.2-3.2-6.9-3.2-9.1 0L306.6 248c-1.2 1.8-1.2 4.3.1 6.3zm44.4-86.4c13.1-1.3 23.7-11.9 25-25 1.8-17.7-13-32.5-30.7-30.7-13.1 1.3-23.7 11.9-25 25-1.7 17.7 13 32.5 30.7 30.7z"/><path d="M432 48H80c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm-2.7 280c0 4.4-3.6 8-8 8H90.7c-4.4 0-8-3.6-8-8V90.7c0-4.4 3.6-8 8-8h330.7c4.4 0 8 3.6 8 8V328z"/></svg></div>')}if("V"===i){"auto"===s&&(s=100);var l=.75*s;return n.includes("s")&&(l=.5*s,c+="mt-1 ml-1"),n.includes("xs")&&(l=.25*s,c+="m-0"),o+="height:".concat(l,"px;color:rgba(0,0,0,0.5);"),'<div style="'.concat(o,'background-color:rgba(0,0,0,0.2)" class="dvs-text-center dvs-relative dvs-mx-1"><svg stroke="currentColor" fill="currentColor" width="20px" height="20px" class="ion__svg dvs-absolute dvs-pin-t dvs-pin-l dvs-mt-4 dvs-ml-4 ').concat(c,'" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm83.8 211.9l-137.2 83c-2.9 1.8-6.7-.4-6.7-3.9V173c0-3.5 3.7-5.7 6.7-3.9l137.2 83c2.9 1.7 2.9 6.1 0 7.8z"/></svg></div>')}if("T"===i){var u="Lorem ipsum dolar imet";if(n.includes("c")&&(o+="text-align:center;"),n.includes("r")&&(o+="text-align:right;"),n.includes("l")&&(o+="font-size:rem;"),n.includes("xl")&&(o+="font-size:1.25em;"),n.includes("s")&&(o+="font-size:0.50em;"),n.includes("b")&&(o+="font-weight:700;"),n.includes("i")&&(o+="font-style:italic"),n.includes("~")){var v=/~([0-9]*)/g,p=v.exec(n);u=b({count:p[1],units:"words"})}if(n.includes("-")){var g=/-([T,C,M]*)/g,f=g.exec(n);"C"===f[1]&&(o+="display:flex; align-items:center"),"B"===f[1]&&(o+="display:flex; align-items:end")}return'<div style="'.concat(o,'" class=" dvs-mx-1">').concat(u,"</div>")}if("F"===i){var h='<div class="dvs-flex dvs-flex-col dvs-w-full">',m='<div style="background-color:rgba(255,255,255,0.8);height:20px;" class="dvs-p-1 dvs-w-full dvs-mb-4"></div>',x='<div style="background-color:rgba(255,255,255,0.8);height:60px;" class="dvs-p-1 dvs-w-full dvs-mb-4"></div>',w='<div style="background-color:rgba(255,255,255,0.8);height:30px;" class="dvs-p-1 dvs-w-full dvs-rounded-sm dvs-mb-4 dvs-flex dvs-justify-center dvs-items-center dvs-uppercase dvs-text-xs">Click Me!</div>';return n.includes("xs")||(h+=m),n.includes("l")&&(h+=m,h+=m,h+=x),n.includes("s")||n.includes("l")||(h+=x),h+=w,h+="</div>",h}return null}},computed:Object(c["a"])({},Object(a["c"])("devise",["componentFromView"]),{component:function(){return this.componentFromView(this.file.value)},preview:function(){var e=this.componentFromView(this.file.value);if(e.preview){var t=this.buildPreview(e.preview);if(t)return t}return!1}}),props:{file:{type:Object,required:!0},heightOfPreview:{type:Number,required:!0,default:200}}},w=x,y=s("0c7c"),C=Object(y["a"])(w,p,g,!1,null,null,null),k=C.exports,_={computed:Object(c["a"])({},Object(a["c"])("devise",["componentFromView"]),{sliceComponent:function(){return this.componentFromView(this.file.value)},description:function(){return!(!this.sliceComponent||!this.sliceComponent.description)&&this.sliceComponent.description},childSlot:function(){return!!this.sliceComponent&&this.sliceComponent.has_child_slot},database:function(){return!!this.sliceComponent&&this.sliceComponent.database},preview:function(){return!(!this.sliceComponent||!this.sliceComponent.preview)}}),props:{file:{required:!0,type:Object}},components:{CubeIcon:function(){return s.e("devise-icons").then(s.bind(null,"d454"))},InformationCircleIcon:function(){return s.e("devise-icons").then(s.bind(null,"09ad"))},SliceDiagram:k}},S=_,P=Object(y["a"])(S,u,v,!1,null,null,null),M=P.exports,$={methods:{isSelected:function(e){return null!==this.value&&e.value===this.value.value?["dvs-bg-admin-highlight-bg dvs-text-admin-highlight-fg"]:["dvs-bg-admin-fg dvs-text-admin-bg"]},toggleSelectSlice:function(e){this.value&&e.value===this.value.value?this.$emit("input",null):this.$emit("input",e)}},computed:Object(c["a"])({},Object(a["c"])("devise",["componentFromView"]),{currentDirectoryFiles:function(){return this.directory.files},name:function(){return this.directory.path.trim().replace("."," ")}}),props:{directory:{required:!0,type:Object},value:{required:!0}},components:{SliceSelectorSlice:M}},j=$,O=Object(y["a"])(j,d,l,!1,null,null,null),D=O.exports,T={data:function(){return{directoryStack:[],filter:null}},mounted:function(){this.$refs.filter.focus()},methods:{getDirectoryFiles:function(e,t){return t=e.find(function(e){return e.dirName===t}),t},getDirectories:function(e){var t=this,s=[];return e.map(function(e){return s.push(e),e.directories&&e.directories.length>0&&(s=s.concat(t.getDirectories(e.directories))),e}),s},filteredFiles:function(e){var t=this.filter.toLowerCase();return e.files.filter(function(e){return!!e.name.toLowerCase().includes(t)})},update:function(e){this.$emit("input",e)}},computed:Object(c["a"])({},Object(a["c"])("devise",["slicesDirectories"]),{allDirectories:function(){return null!==this.filter&&""!==this.filter?this.filteredDirectories:this.slicesDirectories.directories&&this.slicesDirectories.directories.length>0?this.getDirectories(JSON.parse(o()(this.slicesDirectories.directories)),0):[]},filteredDirectories:function(){var e=this.filter.toLowerCase().split(" "),t=this.getDirectories(JSON.parse(o()(this.slicesDirectories.directories)),0).filter(function(t){if(e.every(function(e){return t.path.toLowerCase().includes(e)}))return!0;var s=t.files;return s=s.filter(function(t){return e.every(function(e){return t.value.toLowerCase().includes(e)})}),!!s.length&&(t.files=s,!0)});return t}}),props:{value:{type:Object}},components:{SliceSelectorDirectory:D}},B=T,E=Object(y["a"])(B,i,n,!1,null,null,null);t["default"]=E.exports},bd9f:function(e,t){var s={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]};e.exports=s},cc86:function(e,t,s){(function(t){function i(){var i=arguments.length?arguments[0]:{},r=i.count||1,o=i.units||"sentences",c=i.sentenceLowerBound||5,a=i.sentenceUpperBound||15,d=i.paragraphLowerBound||3,l=i.paragraphUpperBound||7,u=i.format||"plain",v=i.words||s("bd9f").words,p=i.random||Math.random,g=i.suffix;if(!g){var f=e.exports,h="undefined"!==typeof product&&"ReactNative"===product.navigator,m="undefined"!==typeof t&&"win32"===t.platform;g=!h&&f&&m?"\r\n":"\n"}function b(e,t){return Math.floor(p()*(t-e+1)+e)}function x(e){return e[b(0,e.length-1)]}function w(e,t,s){var i="",n={min:0,max:b(t,s)};while(n.min<n.max)i+=" "+x(e),n.min++;return i.length&&(i=i.slice(1),i=i.charAt(0).toUpperCase()+i.slice(1)),i}function y(e,t,s,i,n){var r="",o={min:0,max:b(t,s)};while(o.min<o.max)r+=". "+w(e,i,n),o.min++;return r.length&&(r=r.slice(2),r+="."),r}o=n(o.toLowerCase());var C,k,_={min:0,max:r},S="";"html"===u&&(C="<p>",k="</p>");while(_.min<_.max){switch(o.toLowerCase()){case"words":S+=" "+x(v);break;case"sentences":S+=". "+w(v,c,a);break;case"paragraphs":var P=y(v,d,l,c,a);"html"===u?(P=C+P+k,_.min<_.max-1&&(P+=g)):_.min<_.max-1&&(P+=g+g),S+=P;break}_.min++}if(S.length){var M=0;0===S.indexOf(". ")?M=2:0!==S.indexOf(".")&&0!==S.indexOf(" ")||(M=1),S=S.slice(M),"sentences"===o&&(S+=".")}return S}function n(e){return-1===e.indexOf("s",e.length-1)?e+"s":e}e.exports=i}).call(this,s("4362"))}}]);
//# sourceMappingURL=devise-slices.3678cdcb.js.map