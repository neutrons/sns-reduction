webpackJsonp([44],{"0AIT":function(t,a,e){"use strict";var n=e("KRmZ"),i=e("ZCYH"),r=e("VU/8")(n.a,i.a,!1,null,null,null);a.a=r.exports},"94JA":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("sfBy"),i=e("VU/8")(n.a,null,!1,null,null,null);a.default=i.exports},KRmZ:function(t,a,e){"use strict";var n=e("b56K");a.a={name:"EditChartButton",props:{disable:{type:Boolean,default:!0}},mixins:[n.a],methods:{goToEdit:function(){var t=this.$router.resolve({name:"EditChart",query:{editChartData:this.editChartData}});window.open(t.href,"_blank")}}}},ZCYH:function(t,a,e){"use strict";var n={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-tooltip",{attrs:{top:"","close-delay":1,disabled:t.disable}},[e("v-btn",{attrs:{slot:"activator",flat:"",small:"",icon:t.isBreakpointSmall,disabled:t.disable},on:{click:t.goToEdit},slot:"activator"},[e("span",{staticClass:"hidden-md-and-down"},[t._v("Edit Chart")]),t._v(" "),e("v-icon",{attrs:{right:!t.isBreakpointSmall}},[t._v("fa-pencil-square")])],1),t._v(" "),e("span",[t._v("Click to edit and save chart.")])],1)},staticRenderFns:[]};a.a=n},sfBy:function(t,a,e){"use strict";var n=e("mvHQ"),i=e.n(n),r=e("Dd8w"),l=e.n(r),s=e("NYxO"),o=e("0AIT");a.a={name:"SANSStitchEditChartButton",extends:o.a,computed:l()({},e.i(s.a)("SANS/Stitch",{label:function(t){return t.label},plotScale:function(t){return t.plotScale},fields:function(t){return t.field}}),e.i(s.b)("SANS/Stitch",["getChartConfigurations"]),{axis:function(){return{x:"log(x)"===this.plotScale.x.label?"log":"linear",y:"log(y)"===this.plotScale.y.label?"log":"linear"}},editChartData:function(){return i()({data:this.packageData(),labels:this.label,axis:this.axis,type:"1D"})}}),methods:{packageData:function(){var t=this,a=[];return this.getChartConfigurations.data.forEach(function(e){a.push({name:e.key,x:e.values.map(function(a){return a[t.fields.x]}),y:e.values.map(function(a){return a[t.fields.y]}),error_y:e.values.map(function(t){return t.error}).map(function(t){return{type:"data",array:t,visible:!0}})})}),a}}}}});