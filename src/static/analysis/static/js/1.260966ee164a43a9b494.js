webpackJsonp([1],{"+xLe":function(t,e,i){var n=i("1D9S");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("07b1ee44",n,!0,{})},"0Y71":function(t,e,i){"use strict";var n=i("woOf"),a=i.n(n),s=i("Dd8w"),r=i.n(s),o=i("NYxO"),l=i("eAgk");e.a={name:"FilterListSANS1D",extends:l.a,computed:r()({},i.i(o.a)("SANS",{fetched:function(t){return t.fetched},uploaded:function(t){return t.uploaded}}),i.i(o.a)("SANS/Fit",{selected:function(t){return t.filters}}),{allFiles:function(){return a()({},this.fetched,this.uploaded)}}),methods:r()({},i.i(o.c)("SANS/Fit",["updateFilters"]))}},"1D9S":function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,".fa-circle.non-constant{color:green!important;font-size:100%}.fa-circle.constant{color:brown!important;font-size:100%}","",{version:3,sources:["/home/rhf/git/plotfit-vuetify/src/components/Sidebar/SANS/Fit/FitInitialValuesAndEquation.vue"],names:[],mappings:"AACA,wBACE,sBAAwB,AACxB,cAAgB,CACjB,AACD,oBACE,sBAAwB,AACxB,cAAgB,CACjB",file:"FitInitialValuesAndEquation.vue",sourcesContent:["\n.fa-circle.non-constant {\n  color: green !important;\n  font-size: 100%;\n}\n.fa-circle.constant {\n  color: brown !important;\n  font-size: 100%;\n}\n"],sourceRoot:""}])},"2f/t":function(t,e,i){var n=i("R43g");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("013b3083",n,!0,{})},"2kvH":function(t,e,i){"use strict";var n=i("gSgP"),a=i("bb7g");var s=function(t){i("LO6D")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-68a14868",null);e.a=r.exports},"4l2c":function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-tooltip",{attrs:{top:"","close-delay":1}},[i("v-btn",{attrs:{slot:"activator",block:"",outline:"",color:"success",disabled:t.isFitting},on:{click:t.setInitialValues},slot:"activator"},[i("v-icon",{attrs:{left:""}},[t._v("fa-line-chart")]),t._v(" "),i("span",[t._v(t._s(t.isFitting?"Fitting...":"Fit"))])],1),t._v(" "),i("span",[t._v("Click to fit")])],1),t._v(" "),i("v-subheader",{staticClass:"pl-0"},[t._v("Fit Equation:")]),t._v(" "),i("v-text-field",{ref:"fitEquation",staticClass:"ml-2 pr-2 pt-0",attrs:{id:"fitEquationInput",rules:[t.validateEquation],required:""},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.enterEquation(e.target.value)}},model:{value:t.equation,callback:function(e){t.equation=e},expression:"equation"}}),t._v(" "),i("v-subheader",{staticClass:"pl-0"},[t._v("Initial Values:")]),t._v(" "),t._l(t.initialValues,function(e,n){return i("v-text-field",{key:n,staticClass:"ml-2 pr-2",attrs:{label:e.coefficient,hint:"Edit initial value for fit coefficients","append-icon":e.constant?"fa-circle constant":"fa-circle non-constant","append-icon-cb":function(){return t.toggleConstant(e.constant,n)},"prepend-icon":t.pickIndex===n?"cancel":"fa-crosshairs","prepend-icon-cb":function(){return t.pickIndex===n?t.togglePick(!1,n):t.togglePick(!0,n)},type:"number"},on:{input:t.inputInitialValues},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.inputInitialValues(e)}},model:{value:e.value,callback:function(i){t.$set(e,"value",t._n(i))},expression:"item.value"}})})],2)},staticRenderFns:[]};e.a=n},D6B4:function(t,e,i){"use strict";var n=i("woOf"),a=i.n(n),s=i("Dd8w"),r=i.n(s),o=i("NYxO"),l=i("hBjw");e.a={name:"FilesListSANS1D",extends:l.a,computed:r()({},i.i(o.a)("SANS",{fetched:function(t){return t.fetched},uploaded:function(t){return t.uploaded}}),i.i(o.a)("SANS/Fit",{filesSelected:function(t){return t.filesSelected},filters:function(t){return t.filters},fileToFit:function(t){return t.fileToFit}}),{selected:{get:function(){return this.filesSelected},set:function(t){-1===t.indexOf(this.fileToFit)&&this.updateFileToFit(null),this.updateFilesSelected(t)}},allFiles:function(){return a()({},this.fetched,this.uploaded)}}),methods:r()({},i.i(o.c)("SANS/Fit",["updateFilesSelected","updateFileToFit"]))}},Gi67:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitSettings.vue",sourceRoot:""}])},HwYe:function(t,e,i){"use strict";var n=i("n+3U"),a=i("ewqh");var s=function(t){i("2f/t")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-f9e9f72a",null);e.a=r.exports},JijG:function(t,e,i){"use strict";var n=i("zvm9"),a=i("ouWU");var s=function(t){i("rndA")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-96619e14",null);e.a=r.exports},LO6D:function(t,e,i){var n=i("dK9r");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("12ddf418",n,!0,{})},N2vv:function(t,e,i){"use strict";var n=i("uzfD"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},"OK/T":function(t,e,i){"use strict";var n=i("mcHu"),a=i("4l2c");var s=function(t){i("+xLe")},r=i("VU/8")(n.a,a.a,!1,s,null,null);e.a=r.exports},PJxK:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitList.vue",sourceRoot:""}])},PpJ3:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-file-explorer",{attrs:{collapse:!1}}),t._v(" "),t.isFilesPlotted?i("v-scales"):t._e(),t._v(" "),t.isFilesPlotted?i("v-transformations"):t._e(),t._v(" "),t.isFileFit?i("v-fit-configuration",{attrs:{collapse:!1}}):t._e()],1)},staticRenderFns:[]};e.a=n},Ptqg:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitSelect.vue",sourceRoot:""}])},Pun9:function(t,e,i){"use strict";var n=i("iSv5"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},R43g:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitConfiguration.vue",sourceRoot:""}])},RCxm:function(t,e,i){"use strict";var n=i("RTqs"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},RTqs:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("cUK+");e.a={name:"FitListSANS1D",extends:r.a,computed:a()({},i.i(s.a)("SANS/Fit",{filesToFit:function(t){return t.filesSelected},fileToFit:function(t){return t.fileToFit}}),{selected:{get:function(){return this.fileToFit},set:function(t){this.updateFileToFit(t)}}}),methods:a()({},i.i(s.c)("SANS/Fit",["updateFileToFit"]))}},TRkn:function(t,e,i){"use strict";var n=i("d1/u"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},YkOM:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SidebarSANS1DFit.vue",sourceRoot:""}])},YxwQ:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("hsdx"),a=i("PpJ3");var s=function(t){i("xWIg")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-3cfea408",null);e.default=r.exports},bKz6:function(t,e,i){"use strict";var n=i("euYB"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},bb7g:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-expansion-panel",{attrs:{flat:""}},[i("v-expansion-panel-content",{attrs:{value:!t.collapse}},[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Transformations")]),t._v(" "),i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{ref:"xTransformation",attrs:{label:"X Transformation",rules:[t.validateX,t.validateLength],required:""},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.enterX(e)}},model:{value:t.xTransformation,callback:function(e){t.xTransformation=e},expression:"xTransformation"}}),t._v(" "),i("v-text-field",{ref:"yTransformation",attrs:{label:"Y Transformation",rules:[t.validateY,t.validateLength],required:""},nativeOn:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.enterY(e)}},model:{value:t.yTransformation,callback:function(e){t.yTransformation=e},expression:"yTransformation"}}),t._v(" "),i("v-btn",{attrs:{block:"",outline:"",disabled:!t.canEnter,color:"success"},on:{click:t.setAllTransformations}},[t._v("\n            Transform Data\n          ")]),t._v(" "),i("v-btn",{attrs:{block:"",outline:"",color:"warning"},on:{click:t.resetAllTransformations}},[i("v-icon",{attrs:{left:""}},[t._v("fa-undo")]),t._v(" "),i("span",[t._v("Reset Transformations")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};e.a=n},bqXt:function(t,e,i){var n=i("PJxK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("4af26f5f",n,!0,{})},"cUK+":function(t,e,i){"use strict";var n=i("eOmU"),a=i("pxVs");var s=function(t){i("bqXt")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-1050683a",null);e.a=r.exports},cZx4:function(t,e,i){"use strict";var n=i("D6B4"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},cePi:function(t,e,i){"use strict";e.a={name:"FitSettings",created:function(){this.initEditValues()},data:function(){return{editDamping:null,editGradient:null,editIterations:null,editError:null}},methods:{initEditValues:function(){this.editDamping=this.defaultSettings.damping.value,this.editGradient=this.defaultSettings.gradientDifference.value,this.editIterations=this.defaultSettings.maxIterations.value,this.editError=this.defaultSettings.errorTolerance.value}}}},"d1/u":function(t,e,i){"use strict";var n=i("7AAg"),a=i("s0FX"),s=i("cZx4"),r=i("RCxm");e.a={name:"FileExplorerSANS1D",extends:n.a,components:{"v-filter-list":a.a,"v-files-list":s.a,"v-fit-list":r.a}}},dK9r:function(t,e,i){(t.exports=i("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Transformations.vue",sourceRoot:""}])},eOmU:function(t,e,i){"use strict";e.a={name:"FitList",watch:{filesToFit:function(){this.filesToFit.length||(this.selected=null)}}}},euYB:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("mYpF");e.a={name:"FitSettingsSANS1D",extends:r.a,computed:a()({},i.i(s.a)("SANS/Fit",{defaultSettings:function(t){return t.defaultFitSettings}})),methods:a()({},i.i(s.c)("SANS/Fit",["setFitDamping","setFitGradient","setFitIterations","setFitError","resetFitSettings"]),{resetEditFitSettings:function(){this.initEditValues(),this.resetFitSettings()}})}},ewqh:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-expansion-panel",{attrs:{flat:""}},[i("v-expansion-panel-content",{attrs:{value:!t.collapse}},[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Fit Configuration")]),t._v(" "),i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-subheader",{staticClass:"pl-0"},[t._v("Fit Selection:")])],1),t._v(" "),i("v-flex",{attrs:{xs12:"","pl-2":""}},[i("v-fit-select")],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("v-fit-iv-eq")],1)],1)],1)],1)],1),t._v(" "),i("v-expansion-panel",[i("v-expansion-panel-content",{attrs:{value:!1}},[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Levenberg Settings")]),t._v(" "),i("v-container",[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"","pl-2":""}},[i("v-fit-settings")],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};e.a=n},gSgP:function(t,e,i){"use strict";var n=i("QttI"),a=i.n(n);e.a={name:"Transformations",props:{collapse:{type:Boolean,default:!0}},data:function(){return{xTransformation:"",yTransformation:"",errorX:!1,errorY:!1}},computed:{canEnter:function(){return!this.errorY&&!this.errorX&&this.xTransformation.length>0&&this.yTransformation.length>0}},methods:{validateX:function(t){return this.errorX=!this.validateEntry(t),!this.errorX||"Transformation should include constants or coefficients (x or y)."},validateY:function(t){return this.errorY=!this.validateEntry(t),!this.errorY||"Transformation should include constants or coefficients (x or y)."},validateEntry:function(t){var e=null;try{e=a.a.parse(t)}catch(t){return!1}return 0===e.filter(function(t){return t.isSymbolNode&&"x"!==t.name&&"y"!==t.name}).length},validateLength:function(t){return 0!==t.length||"There must be a transformation."}},watch:{xTrans:function(){this.xTransformation=this.xTrans},yTrans:function(){this.yTransformation=this.yTrans}}}},hsdx:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("TRkn"),o=i("Pun9"),l=i("N2vv"),u=i("HwYe");e.a={name:"SidebarSANSFit",components:{"v-file-explorer":r.a,"v-scales":o.a,"v-transformations":l.a,"v-fit-configuration":u.a},computed:a()({},i.i(s.b)("SANS/Fit",["isFilesPlotted","isFileFit"]))}},iSv5:function(t,e,i){"use strict";var n=i("fZjL"),a=i.n(n),s=i("Dd8w"),r=i.n(s),o=i("NYxO"),l=i("Cfw1");e.a={name:"ScalesSANS1D",extends:l.a,computed:r()({},i.i(o.a)("SANS/Fit",{scales:function(t){return t.scale},xScaleLabel:function(t){return t.plotScale.x.label},yScaleLabel:function(t){return t.plotScale.y.label}}),{xScales:function(){return a()(this.scales.x)},selectX:{get:function(){return this.xScaleLabel},set:function(t){this.setXScale(t)}},yScales:function(){return a()(this.scales.y)},selectY:{get:function(){return this.yScaleLabel},set:function(t){this.setYScale(t)}}}),methods:r()({},i.i(o.c)("SANS/Fit",["resetScales","setYScale","setXScale"]),{resetPlotScales:function(){"x"===this.xScaleLabel&&"y"===this.yScaleLabel||this.resetScales()}})}},mYpF:function(t,e,i){"use strict";var n=i("cePi"),a=i("zRvI");var s=function(t){i("sou/")},r=i("VU/8")(n.a,a.a,!1,s,"data-v-076815e2",null);e.a=r.exports},mcHu:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("M4fF"),o=i.n(r),l=i("QttI"),u=i.n(l),c=i("aCc6");e.a={name:"FitInitialValuesAndEquation",created:function(){this.setFitEquation(),this.equation=this.fitEquation,this.setFitInitialValues(),this.initialValues=o.a.cloneDeep(this.fitInitialValues),c.a.$on("update-initial-value-pick-SANS",this.updateInitialValueWithPick)},destroyed:function(){c.a.$off("update-initial-value-pick-SANS")},data:function(){return{equation:"",initialValues:{},pickIndex:null}},computed:a()({},i.i(s.a)("SANS/Fit",{fitEquation:function(t){return t.fitEquation},fitInitialValues:function(t){return t.fitInitialValues},isFitting:function(t){return t.isFitting}}),{coefficients:function(){return this.fitInitialValues.map(function(t){return t.coefficient})}}),methods:a()({},i.i(s.c)("SANS/Fit",["setFitEquation","addFitInitialValue","removeFitInitialValue","updateFitEquation","setFitInitialValues"]),{enterEquation:function(){var t=this;if(!0===this.validateEntry(this.equation)&&this.fitEquation!==this.equation){var e=this.filterCoefficients(this.equation),i=e.filter(function(e){return-1===t.coefficients.indexOf(e)&&"x"!==e&&"X"!==e}),n=this.coefficients.filter(function(t){return-1===e.indexOf(t)&&"x"!==t&&"X"!==t});i.length&&this.addFitInitialValue(i),n.length&&this.removeFitInitialValue(n),this.updateFitEquation(this.equation),c.a.$emit("refit-data-SANS1D")}},validateEquation:function(t){return this.validateEntry(t)},validateEntry:function(t){try{var e=this.filterCoefficients(t),i={};if(e.forEach(function(t){i[t]=1}),-1!==e.indexOf("y")||-1!==e.indexOf("Y"))throw new Error("Cannot use y in the equation.");return u.a.eval(t,i),!0}catch(t){return t.message}},filterCoefficients:function(t){return u.a.parse(t).filter(function(t){return t.isSymbolNode}).map(function(t){return t.name})},toggleConstant:function(t,e){this.initialValues[e].constant=!t},setInitialValues:function(){var t=this;if(!0===this.validateEntry(this.equation)){if(this.setFitInitialValues(this.initialValues),this.fitEquation!==this.equation){var e=this.filterCoefficients(this.equation),i=e.filter(function(e){return-1===t.coefficients.indexOf(e)&&"x"!==e&&"X"!==e}),n=this.coefficients.filter(function(t){return-1===e.indexOf(t)&&"x"!==t&&"X"!==t});i.length&&this.addFitInitialValue(i),n.length&&this.removeFitInitialValue(n),this.updateFitEquation(this.equation)}c.a.$emit("refit-data-SANS1D")}},inputInitialValues:function(){c.a.$emit("revise-fit-line-SANS1D",this.initialValues)},togglePick:function(t,e){t?(c.a.$emit("toggle-pick-area-SANS",!0),this.pickIndex=e):(c.a.$emit("toggle-pick-area-SANS",!1),this.resetPickIndex())},updateInitialValueWithPick:function(t){this.initialValues[this.pickIndex].value=+t.toFixed(2),this.resetPickIndex(),c.a.$emit("revise-fit-line-SANS1D",this.initialValues)},resetPickIndex:function(){this.pickIndex=null}}),watch:{fitEquation:function(t,e){t!==e&&(this.equation=t)},fitInitialValues:function(t){this.initialValues=o.a.cloneDeep(t)}}}},"n+3U":function(t,e,i){"use strict";var n=i("JijG"),a=i("OK/T"),s=i("bKz6");e.a={name:"FitConfiguration",props:{collapse:{type:Boolean,default:!0}},components:{"v-fit-select":n.a,"v-fit-iv-eq":a.a,"v-fit-settings":s.a}}},ouWU:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{staticClass:"pt-0",attrs:{items:t.fitKeys,placeholder:"Select fit type"},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})},staticRenderFns:[]};e.a=n},pxVs:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{ref:"fitList",attrs:{label:"Fit",items:t.filesToFit,autocomplete:"",chips:"","deletable-chips":"",placeholder:t.filesToFit.length?"Select a file to fit":"No files to fit",hint:"Pick a file to fit","max-height":"250",disabled:!t.filesToFit.length},on:{change:function(e){t.$refs.fitList.isActive=e.length>1}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},staticRenderFns:[]};e.a=n},rndA:function(t,e,i){var n=i("Ptqg");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("76803ed2",n,!0,{})},s0FX:function(t,e,i){"use strict";var n=i("0Y71"),a=i("VU/8")(n.a,null,!1,null,null,null);e.a=a.exports},"sou/":function(t,e,i){var n=i("Gi67");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("559c4744",n,!0,{})},uzfD:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO"),r=i("2kvH");e.a={name:"TransformationsSANS1D",extends:r.a,created:function(){this.xTransformation=this.transformations.x,this.yTransformation=this.transformations.y},computed:a()({},i.i(s.a)("SANS/Fit",{transformations:function(t){return t.transformations},xTrans:function(t){return t.transformations.x},yTrans:function(t){return t.transformations.y}})),methods:a()({},i.i(s.c)("SANS/Fit",["resetTransformations","transformData","setXTransformation","setYTransformation","setTransformations"]),{resetAllTransformations:function(){this.resetTransformations(),this.transformData()},enterX:function(){this.canEnter&&(this.setXTransformation(this.xTransformation),this.transformData())},enterY:function(){this.canEnter&&(this.setYTransformation(this.yTransformation),this.transformData())},setAllTransformations:function(){this.canEnter&&(this.setTransformations({x:this.xTransformation,y:this.yTransformation}),this.transformData())}})}},xWIg:function(t,e,i){var n=i("YkOM");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("26d7fca0",n,!0,{})},zRvI:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-slider",{attrs:{label:"Damping - "+t.editDamping.toFixed(1),step:t.defaultSettings.damping.increment,min:t.defaultSettings.damping.min,max:t.defaultSettings.damping.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitDamping(t.editDamping)}},model:{value:t.editDamping,callback:function(e){t.editDamping=e},expression:"editDamping"}}),t._v(" "),i("v-slider",{attrs:{label:"Gradient - "+t.editGradient.toFixed(1),step:t.defaultSettings.gradientDifference.increment,min:t.defaultSettings.gradientDifference.min,max:t.defaultSettings.gradientDifference.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitGradient(t.editGradient)}},model:{value:t.editGradient,callback:function(e){t.editGradient=e},expression:"editGradient"}}),t._v(" "),i("v-slider",{attrs:{label:"Iterations - "+t.editIterations,step:t.defaultSettings.maxIterations.increment,min:t.defaultSettings.maxIterations.min,max:t.defaultSettings.maxIterations.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitIterations(t.editIterations)}},model:{value:t.editIterations,callback:function(e){t.editIterations=e},expression:"editIterations"}}),t._v(" "),i("v-slider",{attrs:{label:"Error - "+t.editError.toFixed(1),step:t.defaultSettings.errorTolerance.increment,min:t.defaultSettings.errorTolerance.min,max:t.defaultSettings.errorTolerance.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitError(t.editError)}},model:{value:t.editError,callback:function(e){t.editError=e},expression:"editError"}}),t._v(" "),i("v-tooltip",{attrs:{top:"","close-delay":1}},[i("v-btn",{attrs:{slot:"activator",block:"",outline:"",color:"warning"},on:{click:t.resetEditFitSettings},slot:"activator"},[i("v-icon",{attrs:{left:""}},[t._v("fa-undo")]),t._v(" "),i("span",[t._v("Reset Levenberg")])],1),t._v(" "),i("span",[t._v("Click to reset levenberg settings")])],1)],1)},staticRenderFns:[]};e.a=n},zvm9:function(t,e,i){"use strict";var n=i("Dd8w"),a=i.n(n),s=i("NYxO");e.a={name:"FitSelect",created:function(){this.select="Linear"},computed:a()({},i.i(s.b)("SANS/Fit",["fitKeys"]),i.i(s.a)("SANS/Fit",{fitType:function(t){return t.fitType}}),{select:{get:function(){return this.fitType},set:function(t){this.setFitType(t),this.transformData()}}}),methods:a()({},i.i(s.c)("SANS/Fit",["setFitType","transformData"]))}}});