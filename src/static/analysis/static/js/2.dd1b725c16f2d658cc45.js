webpackJsonp([2],{"0Y71":function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("eAgk");e.a={name:"FilterListSANS1D",extends:r.a,computed:a()({},n.i(s.a)("SANS",{fetched:function(t){return t.fetched},uploaded:function(t){return t.uploaded}}),n.i(s.a)("SANS/Fit",{selected:function(t){return t.filters}})),methods:a()({},n.i(s.d)("SANS/Fit",["updateFilters"]))}},"20W5":function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SidebarSANS1DFit.vue",sourceRoot:""}])},"2kvH":function(t,e,n){"use strict";var i=n("gSgP"),a=n("4Rd6");var s=function(t){n("vbLR")},r=n("VU/8")(i.a,a.a,!1,s,"data-v-3d510e25",null);e.a=r.exports},"4Rd6":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",{attrs:{flat:""}},[n("v-expansion-panel-content",{attrs:{value:!t.collapse}},[n("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Transformations")]),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{ref:"xTransformation",attrs:{label:"X Transformation",rules:[t.validateX,t.validateLength],required:""},nativeOn:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enterX(e):null}},model:{value:t.xTransformation,callback:function(e){t.xTransformation=e},expression:"xTransformation"}}),t._v(" "),n("v-text-field",{ref:"yTransformation",attrs:{label:"Y Transformation",rules:[t.validateY,t.validateLength],required:""},nativeOn:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.enterY(e):null}},model:{value:t.yTransformation,callback:function(e){t.yTransformation=e},expression:"yTransformation"}}),t._v(" "),n("v-btn",{attrs:{block:"",outline:"",disabled:!t.canEnter,color:"success"},on:{click:t.setAllTransformations}},[t._v("\n            Transform Data\n          ")]),t._v(" "),n("v-btn",{attrs:{block:"",outline:"",color:"warning"},on:{click:t.resetAllTransformations}},[n("v-icon",{attrs:{left:""}},[t._v("fa-undo")]),t._v(" "),n("span",[t._v("Reset Transformations")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};e.a=i},"4q0C":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",[n("v-expansion-panel-content",{attrs:{value:!t.collapse}},[n("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Levenberg Settings")]),t._v(" "),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"","pl-2":""}},[n("v-slider",{attrs:{label:"Damping - "+t.editDamping.toFixed(1),step:t.defaultSettings.damping.increment,min:t.defaultSettings.damping.min,max:t.defaultSettings.damping.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitDamping(t.editDamping)}},model:{value:t.editDamping,callback:function(e){t.editDamping=e},expression:"editDamping"}}),t._v(" "),n("v-slider",{attrs:{label:"Gradient - "+t.editGradient.toFixed(1),step:t.defaultSettings.gradientDifference.increment,min:t.defaultSettings.gradientDifference.min,max:t.defaultSettings.gradientDifference.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitGradient(t.editGradient)}},model:{value:t.editGradient,callback:function(e){t.editGradient=e},expression:"editGradient"}}),t._v(" "),n("v-slider",{attrs:{label:"Iterations - "+t.editIterations,step:t.defaultSettings.maxIterations.increment,min:t.defaultSettings.maxIterations.min,max:t.defaultSettings.maxIterations.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitIterations(t.editIterations)}},model:{value:t.editIterations,callback:function(e){t.editIterations=e},expression:"editIterations"}}),t._v(" "),n("v-slider",{attrs:{label:"Error - "+t.editError.toFixed(1),step:t.defaultSettings.errorTolerance.increment,min:t.defaultSettings.errorTolerance.min,max:t.defaultSettings.errorTolerance.max,ticks:"","thumb-label":""},nativeOn:{mouseup:function(e){t.setFitError(t.editError)}},model:{value:t.editError,callback:function(e){t.editError=e},expression:"editError"}}),t._v(" "),n("v-tooltip",{attrs:{top:"","close-delay":1}},[n("v-btn",{attrs:{slot:"activator",block:"",outline:"",color:"warning"},on:{click:t.resetEditFitSettings},slot:"activator"},[n("v-icon",{attrs:{left:""}},[t._v("fa-undo")]),t._v(" "),n("span",[t._v("Reset Levenberg")])],1),t._v(" "),n("span",[t._v("Click to reset levenberg settings")])],1)],1)],1)],1)],1)],1)},staticRenderFns:[]};e.a=i},AtG2:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,".fa-circle.non-constant{color:green!important;font-size:100%}.fa-circle.constant{color:brown!important;font-size:100%}","",{version:3,sources:["/home/rhf/git/WebAnalysis/src/components/FitEquations/FitEquation.vue"],names:[],mappings:"AACA,wBACE,sBAAwB,AACxB,cAAgB,CACjB,AACD,oBACE,sBAAwB,AACxB,cAAgB,CACjB",file:"FitEquation.vue",sourcesContent:["\n.fa-circle.non-constant {\n  color: green !important;\n  font-size: 100%;\n}\n.fa-circle.constant {\n  color: brown !important;\n  font-size: 100%;\n}\n"],sourceRoot:""}])},D6B4:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("hBjw"),o=n("aCc6");e.a={name:"FilesListSANS1D",extends:r.a,computed:a()({},n.i(s.a)("SANS",{fetched:function(t){return t.fetched},uploaded:function(t){return t.uploaded}}),n.i(s.a)("SANS/Fit",{filesSelected:function(t){return t.filesSelected},filters:function(t){return t.filters},fileToFit:function(t){return t.fileToFit}}),{selected:{get:function(){return this.filesSelected},set:function(t){var e=this.filesSelected.length,n=t.indexOf(this.fileToFit);0!==e&&-1===n&&this.updateFileToFit(null);var i={filelist:t,group:"SANS"};this.updateFilesSelected(i).then(function(){o.a.$emit("redraw-chart-sans-fit")}).catch(function(t){o.a.$emit("add-notification",t.message,"error")})}}}),methods:a()({},n.i(s.c)("SANS/Fit",["updateFileToFit","updateFilesSelected"]))}},Eev2:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Transformations.vue",sourceRoot:""}])},F5Pw:function(t,e,n){"use strict";var i=n("oCMJ"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},N2vv:function(t,e,n){"use strict";var i=n("uzfD"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},Pun9:function(t,e,n){"use strict";var i=n("iSv5"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},RCxm:function(t,e,n){"use strict";var i=n("RTqs"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},RTqs:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("cUK+");e.a={name:"FitListSANS1D",extends:r.a,computed:a()({},n.i(s.a)("SANS/Fit",{filesToFit:function(t){return t.filesSelected},fileToFit:function(t){return t.fileToFit}})),methods:a()({},n.i(s.c)("SANS/Fit",["updateFileToFit"]))}},TRkn:function(t,e,n){"use strict";var i=n("d1/u"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},YxwQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("hsdx"),a=n("chvh");var s=function(t){n("jOPP")},r=n("VU/8")(i.a,a.a,!1,s,"data-v-f51b6f3c",null);e.default=r.exports},ZYts:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-select",{ref:"fitList",attrs:{label:"Fit",items:t.filesToFit,autocomplete:"",chips:"","deletable-chips":"",placeholder:t.filesToFit.length?"Select a file to fit":"No files to fit",hint:"Pick a file to fit","max-height":"250",disabled:!t.filesToFit.length},on:{change:function(e){t.$refs.fitList.isActive=e.length>1}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},staticRenderFns:[]};e.a=i},bKz6:function(t,e,n){"use strict";var i=n("euYB"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},"cUK+":function(t,e,n){"use strict";var i=n("eOmU"),a=n("ZYts");var s=function(t){n("iYHp")},r=n("VU/8")(i.a,a.a,!1,s,"data-v-6b844111",null);e.a=r.exports},cZx4:function(t,e,n){"use strict";var i=n("D6B4"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},cePi:function(t,e,n){"use strict";e.a={name:"FitSettings",created:function(){this.initEditValues()},props:{collapse:{type:Boolean,default:!0}},data:function(){return{editDamping:null,editGradient:null,editIterations:null,editError:null}},methods:{initEditValues:function(){this.editDamping=this.defaultSettings.damping.value,this.editGradient=this.defaultSettings.gradientDifference.value,this.editIterations=this.defaultSettings.maxIterations.value,this.editError=this.defaultSettings.errorTolerance.value}}}},chvh:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-file-explorer",{attrs:{collapse:!1}}),t._v(" "),t.isFilesPlotted?n("v-scales"):t._e(),t._v(" "),t.isFilesPlotted?n("v-transformations"):t._e(),t._v(" "),t.isFileFit?n("v-fit-equation",{attrs:{collapse:!1}}):t._e(),t._v(" "),t.isFileFit?n("v-fit-settings"):t._e()],1)},staticRenderFns:[]};e.a=i},cujh:function(t,e,n){var i=n("r6gZ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("4bb4fbce",i,!0,{})},"d1/u":function(t,e,n){"use strict";var i=n("7AAg"),a=n("s0FX"),s=n("cZx4"),r=n("RCxm");e.a={name:"FileExplorerSANS1D",extends:i.a,components:{"v-filter-list":a.a,"v-files-list":s.a,"v-fit-list":r.a}}},eOmU:function(t,e,n){"use strict";var i=n("aCc6");e.a={name:"FitList",computed:{selected:{get:function(){return this.fileToFit},set:function(t){var e="redraw-chart-"+this.$route.meta.group.toLowerCase()+"-fit";this.updateFileToFit(t).then(function(){i.a.$emit(e)}).catch(function(t){i.a.$emit("add-notification",t.message,"error")})}}}}},eWSk:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panel",{attrs:{flat:""}},[n("v-expansion-panel-content",{attrs:{value:!t.collapse}},[n("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[t._v("Fit Configuration")]),t._v(" "),n("v-card",[n("v-card-text",{staticClass:"pb-0"},[n("v-tooltip",{attrs:{top:"","close-delay":1}},[n("v-btn",{attrs:{slot:"activator",block:"",outline:"",color:"success",disabled:t.isFitting||!t.isAllValid},on:{click:t.fitData},slot:"activator"},[n("span",[t._v(t._s(t.isFitting?"Fitting...":"Perform Fit"))])]),t._v(" "),n("span",[t._v("Click to fit")])],1)],1)],1),t._v(" "),n("v-card",[n("v-card-text",{staticClass:"pb-0"},t._l(t.selected,function(e,i){return n("v-layout",{key:i,attrs:{row:"",wrap:""}},[t.multipleEquations?n("v-flex",{attrs:{xs2:""}},[0===i?n("v-btn",{attrs:{small:"",flat:"",icon:"",color:"success"},on:{click:function(e){t.addEquation(t.fitKeys[0])}}},[n("v-icon",[t._v("add_circle")])],1):n("v-btn",{attrs:{small:"",flat:"",icon:"",color:"error"},on:{click:function(e){t.removeEquation(i)}}},[n("v-icon",[t._v("cancel")])],1)],1):t._e(),t._v(" "),n("v-flex",{class:t.multipleEquations?"xs10":"xs12"},[n("v-subheader",{staticClass:"pl-0 pr-2 mb-3",staticStyle:{cursor:"pointer","border-bottom":"1px solid grey",height:"30px"},on:{click:function(e){t.toggleShowEquation(i)}}},[n("span",[t._v("Fit #"+t._s(i+1))]),t._v(" "),n("v-spacer"),t._v(" "),n("span",[n("i",{class:t.showEquation[i]?"fa fa-angle-up":"fa fa-angle-down"})])],1)],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("v-slide-y-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showEquation[i],expression:"showEquation[index]"}]},[n("v-select",{attrs:{items:t.fitKeys,value:t.selected[i].name,label:"Fit Type"},on:{input:function(e){t.updateSelect(e,i)}}}),t._v(" "),n("v-text-field",{attrs:{label:"Fit Equation",value:t.selected[i].equation,error:!e.valid,hint:e.valid?"":"Invalid equation.",placeholder:"Type an equation"},on:{input:function(e){t.equationInput(e,i)}}}),t._v(" "),n("v-subheader",{staticClass:"pl-0 pr-0 mb-3",staticStyle:{cursor:"pointer","border-bottom":"1px solid grey",height:"30px"},on:{click:function(e){t.toggleShowIV(i)}}},[t._v("Initial Values\n                  "),n("v-spacer"),t._v(" "),n("span",[n("i",{class:t.showIV[i]?"fa fa-angle-up":"fa fa-angle-down"})])],1),t._v(" "),n("v-slide-y-transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showIV[i],expression:"showIV[index]"}]},t._l(e.initialValues,function(e,a){return n("v-text-field",{key:a,attrs:{"prepend-icon":t.pickIndex===i&&a===t.pickIvIndex?"cancel":"fa-crosshairs","prepend-icon-cb":function(){return t.pickIndex===i&&a===t.pickIvIndex?t.togglePick(!1,i,a):t.togglePick(!0,i,a)},"append-icon":e.constant?"fa-circle constant":"fa-circle non-constant","append-icon-cb":function(){return t.setCoefficientConstant({index:i,ivIndex:a,value:!e.constant})},type:"number",label:e.coefficient,value:e.value},on:{input:function(e){t.coefficientInput({index:i,value:e,ivIndex:a})}}})}))])],1)])],1)],1)})),t._v(" "),n("v-card-text",[n("v-subheader",{staticClass:"pl-0"},[t._v("Final Equation:")]),t._v(" "),n("p",[t._v("y = "+t._s(t.finalEquation))]),t._v(" "),n("v-divider")],1)],1)],1)],1)},staticRenderFns:[]};e.a=i},euYB:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("mYpF");e.a={name:"FitSettingsSANS1D",extends:r.a,computed:a()({},n.i(s.a)("SANS/Fit",{defaultSettings:function(t){return t.defaultFitSettings}})),methods:a()({},n.i(s.d)("SANS/Fit",["setFitDamping","setFitGradient","setFitIterations","setFitError","resetFitSettings"]),{resetEditFitSettings:function(){this.initEditValues(),this.resetFitSettings()}})}},gSgP:function(t,e,n){"use strict";var i=n("QttI"),a=n.n(i),s=n("aCc6");e.a={name:"Transformations",props:{collapse:{type:Boolean,default:!0}},data:function(){return{xTransformation:"",yTransformation:"",errorX:!1,errorY:!1}},computed:{canEnter:function(){return!this.errorY&&!this.errorX&&this.xTransformation.length>0&&this.yTransformation.length>0},redrawName:function(){return"redraw-chart-"+this.$route.meta.group.toLowerCase()+"-"+this.$route.meta.feature.toLowerCase()}},methods:{validateX:function(t){return this.errorX=!this.validateEntry(t),!this.errorX||"Transformation should include constants or coefficients (x or y)."},validateY:function(t){return this.errorY=!this.validateEntry(t),!this.errorY||"Transformation should include constants or coefficients (x or y)."},validateEntry:function(t){var e=null;try{e=a.a.parse(t)}catch(t){return!1}return 0===e.filter(function(t){return t.isSymbolNode&&"x"!==t.name&&"y"!==t.name}).length},validateLength:function(t){return 0!==t.length||"There must be a transformation."},resetAllTransformations:function(){var t=this;this.resetTransformations().then(function(){return t.transformData()}).then(function(){s.a.$emit(t.redrawName)}).catch(function(t){s.a.$emit("add-notification",t.message,"error")})},enterX:function(){var t=this;this.canEnter&&this.setXTransformation(this.xTransformation).then(function(){return t.transformData()}).then(function(){s.a.$emit(t.redrawName)}).catch(function(t){s.a.$emit("add-notification",t.message,"error")})},enterY:function(){var t=this;this.canEnter&&this.setYTransformation(this.yTransformation).then(function(){return t.transformData()}).then(function(){s.a.$emit(t.redrawName)}).catch(function(t){s.a.$emit("add-notification",t.message,"error")})},setAllTransformations:function(){var t=this;this.canEnter&&this.setXTransformation(this.xTransformation).then(function(){return t.setYTransformation(t.yTransformation)}).then(function(){return t.transformData()}).then(function(){s.a.$emit(t.redrawName)}).catch(function(t){s.a.$emit("add-notification",t.message,"error")})}},watch:{xTrans:function(){this.xTransformation=this.xTrans},yTrans:function(){this.yTransformation=this.yTrans}}}},hsdx:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("TRkn"),o=n("Pun9"),l=n("N2vv"),c=n("bKz6"),u=n("F5Pw");e.a={name:"SidebarSANSFit",components:{"v-file-explorer":r.a,"v-scales":o.a,"v-transformations":l.a,"v-fit-settings":c.a,"v-fit-equation":u.a},computed:a()({},n.i(s.b)("SANS/Fit",["isFilesPlotted","isFileFit"]))}},iSv5:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("Cfw1");e.a={name:"ScalesSANS1D",extends:r.a,computed:a()({},n.i(s.a)("SANS/Fit",{scales:function(t){return t.scale},xScaleLabel:function(t){return t.plotScale.x.label},yScaleLabel:function(t){return t.plotScale.y.label}})),methods:a()({},n.i(s.c)("SANS/Fit",["resetScales","setYScale","setXScale"]))}},iYHp:function(t,e,n){var i=n("vdGT");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("77636744",i,!0,{})},jOPP:function(t,e,n){var i=n("20W5");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("7dfcca6c",i,!0,{})},mOlu:function(t,e,n){var i=n("AtG2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("0bbecbd5",i,!0,{})},mYpF:function(t,e,n){"use strict";var i=n("cePi"),a=n("4q0C");var s=function(t){n("cujh")},r=n("VU/8")(i.a,a.a,!1,s,"data-v-28ecca6c",null);e.a=r.exports},oCMJ:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("vVxY"),o=n("aCc6");e.a={name:"FitEquationSANS",extends:r.a,computed:a()({},n.i(s.a)("SANS/Fit",{fits:function(t){return t.fits}}),n.i(s.b)("SANS/Fit",["splitFitData","fitInitialValues","finalEquation"]),n.i(s.a)("SANS/Fit",{fits:function(t){return t.fits},fileToFit:function(t){return t.fileToFit},selectedData:function(t){return t.selectedData},isFitting:function(t){return t.isFitting},equationEditSelect:function(t){return t.equationEditSelect}})),methods:a()({},n.i(s.c)("SANS/Fit",["addToSelect","updateSelectAtIndex","removeSelectAtIndex","updateInitialValue","removeInitialValues","addInitialValues","setSelectValid","setSelectEquation","setCoefficientConstant","setFitType","setEquationEditSelect","transformData"]),{fitData:function(){this.transformData().then(function(){o.a.$emit("redraw-chart-sans-fit")}).catch(function(t){o.a.$emit("add-notification",t.message,"error")})}})}},pIJI:function(t,e,n){"use strict";var i=n("fZjL"),a=n.n(i),s=n("M4fF"),r=n.n(s),o=n("QttI"),l=n.n(o),c=n("7+uW"),u=n("aCc6");e.a={name:"FitEquation",props:{collapse:{type:Boolean,default:!0},multipleEquations:{type:Boolean,default:!1}},data:function(){return{pickIndex:null,pickIvIndex:null,showEquation:[],showIV:[]}},created:function(){u.a.$on("update-initial-value-pick-"+this.$route.meta.group,this.updateInitialValueWithPick),this.addEquation(this.fitKeys[0])},destroyed:function(){u.a.$off("update-initial-value-pick-"+this.$route.meta.group)},beforeDestroy:function(){this.setEquationEditSelect([])},computed:{fitKeys:function(){return a()(this.fits)},items:function(){var t=this,e={};return this.fitKeys.forEach(function(n){e[n]={name:n,equation:t.fits[n].equation,initialValues:t.fits[n].initialValues,valid:!0}}),e},isAllValid:function(){for(var t=0,e=this.selected.length;t<e;t+=1)if(!this.selected[t].valid)return!1;return!0},selected:{get:function(){return this.equationEditSelect}}},methods:{evaluateInitialGuess:function(t){for(var e=t.initialValues,n=a()(e),i=n.length,s=0;s<i;s+=1){var r=e[n[s]].value;if("string"==typeof r){var o=this.computeGuess(r,this.splitFitData);t.initialValues[n[s]].value=o}}return t},computeGuess:function(t,e){var n=void 0;try{var i=l.a.compile(t);if(n=""===t?1:i.eval(e),Array.isArray(n))throw"Function must return a single value, not an array.";return n}catch(t){return u.a.$emit("add-notification",t,"warning"),1}},updateSelect:function(t,e){var n=this,i=this.evaluateInitialGuess(r.a.cloneDeep(this.items[t]));this.updateSelectAtIndex({index:e,temp:i}).then(function(){return n.setFitType(t)}).then(function(){"FitEquationSANS"===n.$options.name&&n.fitData(),"FitEquationTAS"===n.$options.name&&u.a.$emit("revise-fit-line-tas",n.fitInitialValues)}).catch(function(t){u.a.$emit("add-notification",t.message,"error")})},addEquation:function(t){var e=this.evaluateInitialGuess(r.a.cloneDeep(this.items[t]));this.addToSelect(e),"FitEquationTAS"===this.$options.name&&u.a.$emit("revise-fit-line-tas",this.fitInitialValues),this.showEquation.push(!0),this.showIV.push(!0)},removeEquation:function(t){var e=this;this.removeSelectAtIndex(t).then(function(){"FitEquationTAS"===e.$options.name&&u.a.$emit("revise-fit-line-tas",e.fitInitialValues),e.showEquation.splice(t,1),e.showIV.splice(t,1)}).catch(function(t){u.a.$emit("add-notification",t.message,"error")})},getParameters:function(t){var e=l.a.parse(t).filter(function(t){return t.isSymbolNode&&"x"!==t.name}).map(function(t){return t.name});return r.a.uniq(e)},checkEquation:function(t){if(""===t)return!1;try{l.a.compile(t)}catch(t){return!1}return!0},compareParameters:function(t,e,n){if(!r.a.isEqual(t,e)){var i=t.filter(function(t){return-1===e.indexOf(t)}),a=e.filter(function(e){return-1===t.indexOf(e)});i.length&&this.deleteParameters(n,i),a.length&&this.addParameters(n,a,e)}},deleteParameters:function(t,e){this.removeInitialValues({index:t,keys:e})},addParameters:function(t,e,n){this.addInitialValues({index:t,keys:e,newParameters:n})},equationInput:function(t,e){if(this.checkEquation(t)){this.setSelectValid({index:e,value:!0}),this.setSelectEquation({index:e,equation:t});var n=this.selected[e].initialValues.map(function(t){return t.coefficient}),i=this.getParameters(t);this.compareParameters(n,i,e)}else this.setSelectValid({index:e,value:!1})},resetPickIndex:function(){this.pickIndex=null,this.pickIvIndex=null},toggleShowEquation:function(t){c.a.set(this.showEquation,t,!this.showEquation[t])},toggleShowIV:function(t){c.a.set(this.showIV,t,!this.showIV[t])},togglePick:function(t,e,n){var i="toggle-pick-area-"+this.$route.meta.group;t?(u.a.$emit(i,!0),this.pickIndex=e,this.pickIvIndex=n):(u.a.$emit(i,!1),this.resetPickIndex())},updateInitialValueWithPick:function(t){var e=this,n="revise-fit-line-"+this.$route.meta.group.toLowerCase();this.updateInitialValue({index:this.pickIndex,ivIndex:this.pickIvIndex,value:+t.toFixed(4)}).then(function(){e.resetPickIndex(),u.a.$emit(n,e.fitInitialValues)}).catch(function(t){u.a.$emit("add-notification",t.message,"error")})},coefficientInput:function(t){var e=this,n="revise-fit-line-"+this.$route.meta.group.toLowerCase();this.updateInitialValue(t).then(function(){u.a.$emit(n,e.fitInitialValues)}).catch(function(t){u.a.$emit("add-notification",t.message,"error")})}}}},r6gZ:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitSettings.vue",sourceRoot:""}])},s0FX:function(t,e,n){"use strict";var i=n("0Y71"),a=n("VU/8")(i.a,null,!1,null,null,null);e.a=a.exports},uzfD:function(t,e,n){"use strict";var i=n("Dd8w"),a=n.n(i),s=n("NYxO"),r=n("2kvH");e.a={name:"TransformationsSANS1D",extends:r.a,created:function(){this.xTransformation=this.transformations.x,this.yTransformation=this.transformations.y},computed:a()({},n.i(s.a)("SANS/Fit",{transformations:function(t){return t.transformations},xTrans:function(t){return t.transformations.x},yTrans:function(t){return t.transformations.y}})),methods:a()({},n.i(s.c)("SANS/Fit",["resetTransformations","transformData","setXTransformation","setYTransformation"]))}},vVxY:function(t,e,n){"use strict";var i=n("pIJI"),a=n("eWSk");var s=function(t){n("mOlu")},r=n("VU/8")(i.a,a.a,!1,s,null,null);e.a=r.exports},vbLR:function(t,e,n){var i=n("Eev2");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("05c40285",i,!0,{})},vdGT:function(t,e,n){(t.exports=n("FZ+f")(!0)).push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"FitList.vue",sourceRoot:""}])}});