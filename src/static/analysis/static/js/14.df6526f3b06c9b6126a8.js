webpackJsonp([14],{"2Il2":function(t,a,e){"use strict";var s=e("Dd8w"),i=e.n(s),r=e("NYxO"),n=e("vblN"),o=e("dhG+"),l=e("xXWT");a.a={name:"TAS",mixins:[o.a,l.a,n.a],components:{"v-chart":function(){return e.e(28).then(e.bind(null,"8aIV"))},"v-fit-results-table":function(){return e.e(34).then(e.bind(null,"S/At"))},"v-fitted-data-table":function(){return e.e(26).then(e.bind(null,"6SpN"))},"v-metadata-table":function(){return e.e(23).then(e.bind(null,"gvI7"))}},computed:i()({},e.i(r.b)("TAS",["getURLs","getSavedFile"]),e.i(r.a)("TAS/Fit",{filesToPlot:function(t){return t.filesSelected},fileToFit:function(t){return t.fileToFit}}),e.i(r.b)("TAS/Fit",["isDefaultFieldsDifferent"])),methods:i()({},e.i(r.c)("TAS",["storeData"]),e.i(r.c)("TAS/Fit",["setCurrentData","resetAll","transformData","resetBrushSelection"]),e.i(r.d)("TAS/Fit",["resetFitConfiguration"])),watch:{fileToFit:function(){null===this.fileToFit&&(this.resetBrushSelection(),this.resetFitConfiguration())}}}},ICUt:function(t,a,e){"use strict";var s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("keep-alive",[e("v-chart",{attrs:{ID:"TAS-Fit"},scopedSlots:t._u([{key:"tabs-slot",fn:function(a){return[e("v-slide-y-transition",[e("v-flex",{directives:[{name:"show",rawName:"v-show",value:a.showTabs,expression:"props.showTabs"}],attrs:{xs12:""}},[e("v-tabs",{model:{value:a.activeParentTab,callback:function(e){t.$set(a,"activeParentTab",e)},expression:"props.activeParentTab"}},[e("v-tabs-bar",[a.metadataLength>0?e("v-tabs-item",{attrs:{href:"#tab-metadata",ripple:""}},[t._v("Metadata")]):t._e(),t._v(" "),a.fileToFit?e("v-tabs-item",{attrs:{href:"#tab-fit",ripple:""}},[t._v("Fit")]):t._e(),t._v(" "),e("v-tabs-slider",{attrs:{color:"accent"}})],1),t._v(" "),e("v-tabs-items",[a.metadataLength>0?e("v-tabs-content",{attrs:{id:"tab-metadata",ripple:""}},[e("v-tabs",{attrs:{"mobile-break-point":"300px"}},[e("v-tabs-bar",[e("v-tabs-slider",{attrs:{color:"accent"}}),t._v(" "),t._l(a.metadata,function(a,s){return e("v-tabs-item",{key:s,attrs:{href:"#md-"+s}},[t._v("\n                            "+t._s(s)+"\n                            ")])})],2),t._v(" "),e("v-tabs-items",t._l(a.metadata,function(s,i){return e("v-tabs-content",{key:i,attrs:{id:"md-"+i}},[e("v-card",[a.metadataLength>0?e("v-card-text",{staticClass:"tab-card-text"},[e("v-metadata-table",{attrs:{metadata:s}})],1):e("v-card-text",{staticClass:"tab-card-text"},[t._v("\n                                  No metadata to be shown.\n                                ")])],1)],1)}))],1)],1):t._e(),t._v(" "),a.fileToFit?e("v-tabs-content",{attrs:{id:"tab-fit",ripple:""}},[e("v-tabs",[e("v-tabs-bar",[e("v-tabs-slider",{attrs:{color:"accent"}}),t._v(" "),e("v-tabs-item",{attrs:{href:"fit-results"}},[t._v("\n                              Fit Results\n                            ")]),t._v(" "),e("v-tabs-item",{attrs:{href:"fit-data"}},[t._v("\n                              Fitted Data\n                            ")])],1),t._v(" "),e("v-tabs-items",[e("v-tabs-content",{attrs:{id:"fit-results"}},[e("v-card",[e("v-card-text",{staticClass:"tab-card-text"},[e("v-fit-results-table",{attrs:{"x-scale":a.xScale}})],1)],1)],1),t._v(" "),e("v-tabs-content",{attrs:{id:"fit-data"}},[e("v-card",[e("v-card-text",{staticClass:"tab-card-text"},[e("v-fitted-data-table",{attrs:{"fitted-data":a.fittedData,"file-to-fit":a.fileToFit}})],1)],1)],1)],1)],1)],1):t._e()],1)],1)],1)],1)]}}])})],1)],1)},staticRenderFns:[]};a.a=s},g9fQ:function(t,a,e){var s=e("r/h7");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e("rjj0")("5a4d5d76",s,!0,{})},quJ0:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("2Il2"),i=e("ICUt");var r=function(t){e("g9fQ")},n=e("VU/8")(s.a,i.a,!1,r,"data-v-987c06d8",null);a.default=n.exports},"r/h7":function(t,a,e){(t.exports=e("FZ+f")(!0)).push([t.i,".tab-card-text[data-v-987c06d8]{max-height:350px;overflow-y:auto}","",{version:3,sources:["/home/rhf/git/plotfit-vuetify/src/components/FitData/TAS.vue"],names:[],mappings:"AACA,gCACE,iBAAkB,AAClB,eAAiB,CAClB",file:"TAS.vue",sourcesContent:["\n.tab-card-text[data-v-987c06d8] {\n  max-height: 350px;\n  overflow-y: auto;\n}\n"],sourceRoot:""}])}});