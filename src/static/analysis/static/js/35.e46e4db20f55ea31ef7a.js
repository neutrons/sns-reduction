webpackJsonp([35],{RGXW:function(e,t,o){var s=o("YUnm");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o("rjj0")("5893bb3e",s,!0,{})},YUnm:function(e,t,o){(e.exports=o("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"ToggleZoomBrush.vue",sourceRoot:""}])},hc9F:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("skdi"),i=o("tTQ/");var n=function(e){o("RGXW")},r=o("VU/8")(s.a,i.a,!1,n,"data-v-df806260",null);t.default=r.exports},skdi:function(e,t,o){"use strict";var s=o("Dd8w"),i=o.n(s),n=o("NYxO"),r=o("b56K"),l=o("aCc6");t.a={name:"ToggleZoomBrush",mixins:[r.a],computed:i()({},o.i(n.b)("SANS/Stitch",{isZoomBrush:function(e){return e.isZoomBrush},filesSelected:function(e){return e.filesSelected}}),{toggle:{get:function(){return this.isZoomBrush},set:function(e){if(this.filesSelected.length>1)this.$emit("toggle-edit",e);else{l.a.$emit("add-notification","Need two or more lines to select.","error")}}},label:function(){return this.toggle?"Zoom":"Brush"}}),methods:i()({},o.i(n.c)("SANS/Stitch",["toggleZoomBrush"]))}},"tTQ/":function(e,t,o){"use strict";var s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-btn",{attrs:{flat:"",small:"",icon:e.isBreakpointSmall,disabled:e.filesSelected.length<2},on:{click:function(t){e.toggle=!e.toggle}}},[o("span",{staticClass:"hidden-md-and-down"},[e._v(e._s(e.isZoomBrush?"Select":"Zoom"))]),e._v(" "),o("v-icon",{attrs:{right:!e.isBreakpointSmall}},[e._v(e._s(e.isZoomBrush?"crop_free":"zoom_in"))])],1)},staticRenderFns:[]};t.a=s}});