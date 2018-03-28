webpackJsonp([35],{"0eeT":function(e,t,a){"use strict";t.a={name:"Scales",props:{collapse:{type:Boolean,default:!0}}}},"2qby":function(e,t,a){"use strict";var s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panel",{attrs:{flat:""}},[a("v-expansion-panel-content",{attrs:{value:!e.collapse}},[a("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Scales")]),e._v(" "),a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{label:"X Scale",items:e.xScales,hint:"Select X Scale"},model:{value:e.selectX,callback:function(t){e.selectX=t},expression:"selectX"}}),e._v(" "),a("v-select",{attrs:{label:"Y Scale",items:e.yScales,hint:"Select Y Scale"},model:{value:e.selectY,callback:function(t){e.selectY=t},expression:"selectY"}}),e._v(" "),a("v-tooltip",{attrs:{top:"","close-delay":1}},[a("v-btn",{attrs:{slot:"activator",block:"",outline:"",color:"warning"},on:{click:e.resetPlotScales},slot:"activator"},[a("v-icon",{attrs:{left:""}},[e._v("fa-undo")]),e._v(" "),a("span",[e._v("Reset Scales")])],1),e._v(" "),a("span",[e._v("Click to reset plot scales")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};t.a=s},"3Qo6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("NsUe"),c=a("VU/8")(s.a,null,!1,null,null,null);t.default=c.exports},Cfw1:function(e,t,a){"use strict";var s=a("0eeT"),c=a("2qby");var l=function(e){a("T9hG")},n=a("VU/8")(s.a,c.a,!1,l,"data-v-2ca4f5f8",null);t.a=n.exports},DsWh:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Scales.vue",sourceRoot:""}])},NsUe:function(e,t,a){"use strict";var s=a("fZjL"),c=a.n(s),l=a("Dd8w"),n=a.n(l),i=a("NYxO"),o=a("Cfw1"),r=a("aCc6");t.a={name:"ScalesSANSStitch",extends:o.a,computed:n()({},a.i(i.a)("SANS/Stitch",{scales:function(e){return e.scale},xScaleLabel:function(e){return e.plotScale.x.label},yScaleLabel:function(e){return e.plotScale.y.label}}),{xScales:function(){return c()(this.scales.x)},selectX:{get:function(){return this.xScaleLabel},set:function(e){this.setXScale(e).then(function(){r.a.$emit("redraw-chart-sans-stitch")}).catch(function(e){r.a.$emit("add-notification",e.message,"error")})}},yScales:function(){return c()(this.scales.y)},selectY:{get:function(){return this.yScaleLabel},set:function(e){this.setYScale(e).then(function(){r.a.$emit("redraw-chart-sans-stitch")}).catch(function(e){r.a.$emit("add-notification",e.message,"error")})}}}),methods:n()({},a.i(i.c)("SANS/Stitch",["resetScales","setYScale","setXScale"]),{resetPlotScales:function(){"x"===this.xScaleLabel&&"y"===this.yScaleLabel||this.resetScales().then(function(){r.a.$emit("redraw-chart-sans-stitch")}).catch(function(e){r.a.$emit("add-notification",e.message,"error")})}})}},T9hG:function(e,t,a){var s=a("DsWh");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);a("rjj0")("0b3e2178",s,!0,{})}});