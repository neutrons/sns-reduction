webpackJsonp([8],{"/saQ":function(e,t,i){var s=i("f+dZ");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("026a4e30",s,!0,{})},"894z":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("9GL3");var n=function(e){i("/saQ")},a=i("VU/8")(s.a,null,!1,n,null,null);t.default=a.exports},"9GL3":function(e,t,i){"use strict";var s=i("Dd8w"),n=i.n(s),a=i("NYxO"),l=i("dhG+"),o=i("5xas"),r=i("tEiA");t.a={name:"SidebarSANS1DBrowse",extends:r.a,mixins:[l.a,o.a],data:function(){return{}},computed:n()({},i.i(a.b)("SANS",["getURLs","getSavedFile"]),i.i(a.a)("SANS",{fetched:function(e){return e.fetched},uploaded:function(e){return e.uploaded}})),methods:n()({},i.i(a.c)("SANS",["storeData","updateTags"]),i.i(a.c)("SANS/Browse",["setBrowseData"]))}},DMTg:function(e,t,i){"use strict";var s={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-expansion-panel",{attrs:{expand:""}},[i("v-expansion-panel-content",{attrs:{value:!0}},[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Browse Files")]),e._v(" "),i("v-card",[i("v-card-text",[i("v-tooltip",{attrs:{bottom:"","close-delay":1}},[i("v-select",{attrs:{slot:"activator","prepend-icon":"keyboard_arrow_left","prepend-icon-cb":function(){return e.move("left")},"append-icon":"keyboard_arrow_right","append-icon-cb":function(){return e.move("right")},items:e.fileList,"single-line":"",chips:"","deletable-chips":"",bottom:"","hide-details":"",placeholder:e.fileList.length>0?"Select a file to browse":"Fetch or upload files","max-height":"150",autocomplete:""},slot:"activator",model:{value:e.selectedFile,callback:function(t){e.selectedFile=t},expression:"selectedFile"}}),e._v(" "),i("span",[e._v("Use arrow keys "),i("code",[i("i",{staticClass:"fa fa-caret-left"}),e._v(" | "),i("i",{staticClass:"fa fa-caret-right"})]),e._v(" to browse data.")])],1)],1)],1)],1),e._v(" "),i("v-expansion-panel-content",{attrs:{value:!0}},[i("div",{staticClass:"title",attrs:{slot:"header"},slot:"header"},[e._v("Tags")]),e._v(" "),i("v-card",[i("v-card-text",[i("v-tooltip",{attrs:{right:"","close-delay":1,disabled:!e.edit}},[i("v-select",{ref:"tagSelect",attrs:{slot:"activator","prepend-icon":e.edit?"cancel":"edit","prepend-icon-cb":e.toggleEdit,multiple:"",chips:"","deletable-chips":"",tags:"",items:e.allTags,readonly:!e.edit},on:{input:e.tagListChange},slot:"activator",model:{value:e.selectedTags,callback:function(t){e.selectedTags=t},expression:"selectedTags"}}),e._v(" "),i("span",[e._v("Press "),i("code",[e._v("tab")]),e._v(" or "),i("code",[e._v("enter")]),e._v(" to add tag.")])],1)],1)],1)],1)],1)},staticRenderFns:[]};t.a=s},bPCU:function(e,t,i){var s=i("qlGs");"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i("rjj0")("048f7bef",s,!0,{})},"f+dZ":function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"SidebarSANS1DBrowse.vue",sourceRoot:""}])},"mkh+":function(e,t,i){"use strict";var s=i("fZjL"),n=i.n(s),a=i("woOf"),l=i.n(a),o=i("M4fF"),r=i.n(o);t.a={name:"SidebarBrowse",data:function(){return{edit:!1,selectedFile:null,tempSelectedTags:[],selectedTags:[],tags:[],active:!1}},computed:{allFiles:function(){return l()({},this.fetched,this.uploaded)},fileList:function(){return r.a.uniq(n()(this.allFiles))},uKeys:function(){return n()(this.uploaded)},uTags:function(){var e=this;return this.uKeys.length?this.uKeys.map(function(t){return e.uploaded[t].tags}).reduce(function(e,t){return e.concat(t)}):[]},fKeys:function(){return n()(this.fetched)},fTags:function(){var e=this;return this.fKeys.length?this.fKeys.map(function(t){return e.fetched[t].tags}).reduce(function(e,t){return e.concat(t)}):[]},allTags:function(){return this.fTags.length||this.uTags.length?this.fTags.concat(this.uTags):[]}},methods:{tagListChange:function(){var e={loadType:this.allFiles[this.selectedFile].loadType,filename:this.selectedFile,tags:this.selectedTags};this.updateTags(e)},move:function(e){if(this.fileList.length){var t=this.fileList.indexOf(this.selectedFile),i=this.fileList.length-1;this.selectedFile="right"===e?this.fileList[t===i?0:t+1]:this.fileList[0===t?i:t-1]}},toggleEdit:function(){this.fileList.length&&null!==this.selectedFile&&(this.edit=!this.edit,this.edit||(this.$refs.tagSelect.isActive=!1))},onKeyUp:function(e){var t="ArrowRight"===e.key||"ArrowRight"===e.code,i="ArrowLeft"===e.key||"ArrowLeft"===e.code;(t||i)&&this.move(t?"right":"left")}},activated:function(){this.fileList.length&&null===this.selectedFile&&(this.selectedFile=this.fileList[0]),this.active=!0,window.addEventListener("keyup",this.onKeyUp)},deactivated:function(){this.active=!1,window.removeEventListener("keyup",this.onKeyUp)},watch:{fileList:function(){this.fileList.length&&null===this.selectedFile&&this.active&&(this.selectedFile=this.fileList[0])},selectedFile:function(){if(null===this.selectedFile)this.xPoint=null,this.yPoint=null,this.errorPoint=null,this.tempSelectedTags=[],this.selectedTags=[],this.setBrowseData([]);else{this.selectedTags=this.allFiles[this.selectedFile].tags;var e=this.getSavedFile(this.selectedFile);"999"===e?this.read1DData(this.getURLs([this.selectedFile]),[],"QuickPlot"):this.setBrowseData(e)}}}}},qlGs:function(e,t,i){(e.exports=i("FZ+f")(!0)).push([e.i,".input-group__details:before{width:85%}.input-group__details:after{visibility:hidden}.input-group__prepend-icon{padding-left:5px!important}.input-group__append-icon{padding:0 25px!important}.input-group__append-icon:focus{outline:none!important}","",{version:3,sources:["/home/rhf/git/plotfit-vuetify/src/components/Sidebar/SidebarBrowse.vue"],names:[],mappings:"AACA,6BACE,SAAW,CACZ,AACD,4BACE,iBAAmB,CACpB,AACD,2BACE,0BAA6B,CAC9B,AACD,0BACE,wBAA6B,CAC9B,AACD,gCACE,sBAAyB,CAC1B",file:"SidebarBrowse.vue",sourcesContent:["\n.input-group__details::before {\n  width: 85%;\n}\n.input-group__details::after {\n  visibility: hidden;\n}\n.input-group__prepend-icon {\n  padding-left: 5px !important;\n}\n.input-group__append-icon {\n  padding: 0px 25px !important;\n}\n.input-group__append-icon:focus {\n  outline: none !important;\n}\n"],sourceRoot:""}])},tEiA:function(e,t,i){"use strict";var s=i("mkh+"),n=i("DMTg");var a=function(e){i("bPCU")},l=i("VU/8")(s.a,n.a,!1,a,null,null);t.a=l.exports}});