(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"118b":function(t,e,a){"use strict";a.d(e,"d",(function(){return u})),a.d(e,"a",(function(){return m})),a.d(e,"c",(function(){return d})),a.d(e,"b",(function(){return f}));a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("6b54"),a("06db"),a("7f7f"),a("28a5"),a("6762"),a("2fdb");var r=a("4db1"),i=a.n(r),n=a("2b0e"),s=a("3956");function o(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=l(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,n=t},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw n}}}}function l(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function u(){var t=h(s["i"].state.categories.root);return i()(t.children)}function m(t){return t.includes(",")?f(t):d(t)}function d(t){var e=h(s["i"].getters.getCategory(t));return e=e.selectable?[e]:i()(e.children),e}function f(t){var e,a=t.split(",").map((function(t){return t.trim()})),r=[],i=o(a);try{for(i.s();!(e=i.n()).done;){var n=e.value,l=h(s["i"].getters.getCategory(n));l&&r.push(l)}}catch(c){i.e(c)}finally{i.f()}return r}function h(t){var e,a;if(!t)return null;if(t.subCategories){a=[];var r,i=o(t.subCategories);try{for(i.s();!(r=i.n()).done;){var s=r.value,l=h(s);l&&a.push(l)}}catch(u){i.e(u)}finally{i.f()}}a&&0===a.length&&(a=null);var c={title:t.title,name:t.name,category:t,children:a,selectable:!1};if(null===(e=t.categoryPersonalAccess)||void 0===e?void 0:e.MaterialWrite)t.isMaterialsContainer?(c.icon=n["default"].prototype.$iconsSet.global.category,c.iconColor="green-5",c.selectable=!0):a&&(c.selectable=!1);else if(!a)return null;return c}},"176d":function(t,e,a){},"2aac":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SunPage",{staticClass:"material"},[t.material?a("div",{staticClass:"page-padding"},[a("article",[t.showTitle?a("PageHeader",{attrs:{title:t.material.title,subTitle:t.material.subTitle}}):t._e(),a("div",{staticClass:"material__text q-mb-lg",domProps:{innerHTML:t._s(t.material.text)}}),a("footer",[t.showFooter&&t.material.tags&&t.material.tags.length>0?a("div",{staticClass:"material__tags q-mt-lg"},[t._v("\n\t\t\t\t\t"+t._s(t.$tl("tags"))+"\n\t\t\t\t\t"),t._l(t.material.tags,(function(e){return a("q-chip",{key:e,staticClass:"q-mx-xs",attrs:{dense:""}},[t._v("\n\t\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t\t")])}))],2):t._e(),t.showFooter?a("div",{staticClass:"material__footer q-gutter-x-lg q-py-sm flex align-center"},[t.showUser?a("div",{staticClass:"material__author q-mr-md"},[a("router-link",{staticClass:"link user-link",attrs:{to:{name:"User",params:{link:t.material.authorLink}}}},[a("q-avatar",{staticClass:"avatar material__avatar"},[a("img",{attrs:{src:t.$avatarPath(t.material.authorAvatar)}})]),t._v(t._s(t.material.authorName)+"\n\t\t\t\t\t\t")],1)],1):t._e(),a("q-space"),t.canEdit?a("div",{staticClass:"material-edit-btn edit-btn-block"},[a("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$router.push({name:"EditMaterial",params:{id:t.material.id}})}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$tl("edit")))])]):t._e(),!t.material.deletedDate&&t.canDelete?a("div",{staticClass:"material-footer-info-block"},[a("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.deleteMaterial(e)}}},[a("q-icon",{attrs:{name:t.$iconsSet.Material.delete}})],1)]):t._e(),t.material.deletedDate&&t.canRestore?a("div",{staticClass:"material-footer-info-block"},[a("a",{staticClass:"link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.restoreMaterial(e)}}},[a("q-icon",{attrs:{name:t.$iconsSet.Material.restore}})],1)]):t._e(),t.showVisitsCount?a("div",{staticClass:"material__visits material-footer-info-block"},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.$iconsSet.Material.visits}}),t._v("\n\t\t\t\t\t\t"+t._s(t.material.visitsCount)+"\n\t\t\t\t\t")],1):t._e(),t.showDate?a("div",{staticClass:"material__date material-footer-info-block"},[a("q-icon",{staticClass:"q-mr-xs",attrs:{name:t.$iconsSet.Material.publishDate}}),a("time",{attrs:{datetime:t.$formatToSemTime(t.material.publishDate)}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$formatDate(t.material.publishDate))+"\n\t\t\t\t\t\t")])],1):t._e()],1):t._e()])],1),a("div",{staticClass:"clear"})]):t._e(),t.material&&t.comments&&t.comments.length>0?a("div",{staticClass:"material__comments",attrs:{id:"material-comments"}},[a("hr",{staticClass:"material__comments-sep"}),t._l(t.comments,(function(e,r){return a("div",{key:e.id},[a("CommentContainer",{staticClass:"page-padding",attrs:{comment:e,checkLastOwn:t.checkLastOwn,categoryPersonalAccess:t.categoryPersonalAccess,isLast:r===t.maxCommentNumber}}),a("hr",{staticClass:"material__comments-sep"})],1)}))],2):t._e(),t.material&&t.comments?t._e():a("LoaderWait"),t.canCommentWrite?a("div",{staticClass:"material__write-comment q-mt-md"},[a("CreateComment",{staticClass:"page-padding",attrs:{materialId:t.material.id},on:{done:t.commentAdded}})],1):t._e()],1)},i=[],n=a("2ce9"),s=n["a"],o=(a("496b"),a("2877")),l=a("b047"),c=a("cb32"),u=a("2c91"),m=a("0016"),d=a("eebe"),f=a.n(d),h=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=h.exports;f()(h,"components",{QChip:l["a"],QAvatar:c["a"],QSpace:u["a"],QIcon:m["a"]})},"2ce9":function(t,e,a){"use strict";(function(t){a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("06db");var r=a("967e"),i=a.n(r),n=(a("96cf"),a("fa84")),s=a.n(n),o=(a("a481"),a("28a5"),a("9d68")),l=a("4cc9"),c=a("8a9f"),u=a("c8f1"),m=a("a4c0"),d=a("4bdd"),f=a("cdde"),h=a("bd4c"),g=a("0831");function v(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=p(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s=!0,o=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return s=t.done,t},e:function(t){o=!0,n=t},f:function(){try{s||null==a.return||a.return()}finally{if(o)throw n}}}}function p(t,e){if(t){if("string"===typeof t)return b(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var y=g["a"].getScrollTarget,$=g["a"].setScrollPosition;e["a"]={name:"Material",mixins:[t],props:{idOrName:{type:String,required:!0},categoryName:{type:String,required:!0}},data:function(){return{material:null,comments:null,page:null,headersPrepared:!1}},watch:{$route:function(t,e){if(t.path!==e.path)this.loadData();else{var a=document.getElementById(this.$route.hash.substring(1));$(y(a),a.offsetTop,300)}}},computed:{maxCommentNumber:function(){return this.comments.length-1},category:function(){return this.$store.getters.getCategory(this.categoryName)},showTitle:function(){var t,e;return this.category&&!((null===(t=this.category.settingsJson)||void 0===t?void 0:t.hideTitle)||(null===(e=this.material.settingsJson)||void 0===e?void 0:e.hideTitle))},hideBreadcrumbs:function(){var t,e,a,r;return(null===(t=this.category)||void 0===t||null===(e=t.settingsJson)||void 0===e?void 0:e.hideBreadcrumbs)||(null===(a=this.material)||void 0===a||null===(r=a.settingsJson)||void 0===r?void 0:r.hideBreadcrumbs)},showDate:function(){return this.category&&(this.showFooter||this.canEdit)},showVisitsCount:function(){return this.category&&(this.showFooter||this.canEdit)},showUser:function(){return this.category&&(this.showFooter||this.canEdit)},showFooter:function(){var t,e;return!!this.category&&(!!this.category.categoryPersonalAccess.MaterialEditAny||!((null===(t=this.category.settingsJson)||void 0===t?void 0:t.hideFooter)||(null===(e=this.material.settingsJson)||void 0===e?void 0:e.hideFooter)))},canCommentWrite:function(){return!(!this.material||this.material.isCommentsBlocked)&&this.category.categoryPersonalAccess.CommentWrite},categoryPersonalAccess:function(){return this.category.categoryPersonalAccess},canEdit:function(){if(!this.material||!this.comments)return!1;if(!this.$store.state.auth.user)return!1;var t=this.$store.getters.getCategory(this.material.categoryName);if(t.categoryPersonalAccess.MaterialEditAny)return!0;if(this.material.authorId!==this.$store.state.auth.user.id)return!1;if(!t.categoryPersonalAccess.MaterialEditOwnIfHasReplies&&this.comments.length>=1&&!this.checkLastOwn(this.comments[0]))return!1;if(!t.categoryPersonalAccess.MaterialEditOwnIfTimeNotExceeded){var e=new Date,a=new Date(this.material.publishDate),r=h["a"].addToDate(a,{minutes:config.Materials.TimeToOwnEditInMinutes});if(r<e)return!1}return!!t.categoryPersonalAccess.MaterialEditOwn},canDelete:function(){return c["a"].call(this)},canRestore:function(){return u["a"].call(this)}},methods:{prepareParagraphs:function(){if(!this.headersPrepared){var t,e=this.$el.getElementsByClassName("material__text")[0],a=e.querySelectorAll("h1,h2,h3,h4,h5,h6"),r=this.$router,i=this.$successNotify.bind(this),n=this.$tl.bind(this),s={},o=v(a);try{var l=function(){var e=t.value;if(e.classList.contains("no-anchor"))return"continue";var a=document.createElement("a");a.classList.add("header-anchor"),a.classList.add("link");var o=encodeURIComponent(e.innerText);while(s[o])o+="1";s[o]=!0,e.id=o,a.href=window.location.href.split("#")[0]+"#"+o,a.addEventListener("click",(function(t){return t.preventDefault(),Object(f["a"])(a.href).then((function(){return i(n("linkCopied"))})).catch((function(){return r.replace(a.href)})),!1})),a.innerText="#",e.appendChild(a)};for(o.s();!(t=o.n()).done;)l()}catch(u){o.e(u)}finally{o.f()}if(this.headersPrepared=!0,this.$route.hash){var c=document.getElementById(this.$route.hash.substring(1));$(y(c),c.offsetTop,300)}}},prepareLocalLinks:function(){m["a"].call(this,this.$el,"material__text")},loadDataMaterial:function(){var t=this;return this.$request(this.$Api.Materials.Get,{idOrName:this.idOrName}).then((function(e){if(t.material=e.data,t.material.settingsJson)try{t.material.settingsJson=JSON.parse(t.material.settingsJson)}catch(a){}t.title=t.material.title,t.$nextTick((function(){var e;t.prepareLocalLinks(),t.prepareParagraphs(),(null===(e=t.material.settingsJson)||void 0===e?void 0:e.allowInnerJavaScript)&&Object(d["a"])(t.$el)}))}))},loadDataComments:function(){var t=this;return s()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request(t.$Api.Comments.GetMaterialComments,{materialId:t.material.id}).then((function(e){t.comments=e.data,t.$nextTick((function(){if(this.$route.hash){var t=document.getElementById(this.$route.hash.substring(1));$(y(t),t.offsetTop,300)}}))}));case 2:case"end":return e.stop()}}),e)})))()},checkLastOwn:function(t){if(!this.comments)return!1;for(var e=this.$store.state.auth.user.id,a=this.comments.indexOf(t),r=a;r<this.comments.length;r++)if(this.comments[r].authorId!==e)return!1;return!0},deleteMaterial:function(){var t=this;return s()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:o["a"].call(t);case 1:case"end":return e.stop()}}),e)})))()},restoreMaterial:function(){var t=this;return s()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:l["a"].call(t);case 1:case"end":return e.stop()}}),e)})))()},commentAdded:function(){var t=this;return s()(i.a.mark((function e(){var a,r,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$route.fullPath,r=a.lastIndexOf("#"),n=a.substring(0,r),window.history.pushState("",document.title,n),e.next=6,t.loadData();case 6:case"end":return e.stop()}}),e)})))()},loadData:function(){var t=this;return s()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.headersPrepared=!1,e.next=3,t.loadDataMaterial();case 3:return e.next=5,t.loadDataComments();case 5:case"end":return e.stop()}}),e)})))()}},beforeCreate:function(){this.$options.centered=!0,this.$options.components.CommentContainer=a("9302").CommentContainer,this.$options.components.CreateComment=a("9302").CreateComment,this.$options.components.Article=a("f439").Article},created:function(){this.loadData()}}}).call(this,a("7c53")["default"])},"3b70":function(t,e,a){"use strict";var r=a("176d"),i=a.n(r);i.a},"496b":function(t,e,a){"use strict";var r=a("e801"),i=a.n(r);i.a},"4a0e":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SunPage",{staticClass:"create-material q-pa-md"},[a("MaterialForm",{ref:"form",staticClass:"create-material__material-form",attrs:{material:t.material,categoriesNames:t.categoriesNames}}),a("div",{staticClass:"create-material__btn-block q-mt-md"},[a("q-btn",{staticClass:"send-btn",attrs:{icon:t.$iconsSet.CreateMaterial.save,"no-caps":"",loading:t.loading,label:t.$tl("sendBtn"),color:"send"},on:{click:t.send}},[a("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1),a("q-btn",{staticClass:"cancel-btn q-ml-sm",attrs:{"no-caps":"",icon:t.$iconsSet.CreateMaterial.cancel,label:t.$t("Global.btn.cancel"),color:"warning"},on:{click:function(e){return t.$router.back()}}})],1)],1)},i=[],n=a("5469"),s=n["a"],o=a("2877"),l=a("9c40"),c=a("eebe"),u=a.n(c),m=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=m.exports;u()(m,"components",{QBtn:l["a"]})},"4bdd":function(t,e,a){"use strict";a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("06db");function r(t,e){var a;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(a=i(t))||e&&t&&"number"===typeof t.length){a&&(t=a);var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==a.return||a.return()}finally{if(l)throw s}}}}function i(t,e){if(t){if("string"===typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}e["a"]=function(t){var e,a=t.getElementsByTagName("script"),i=r(a);try{for(i.s();!(e=i.n()).done;){var n=e.value,s=document.createElement("script");s.innerHTML=n.innerText;var o=n.parentNode,l=n.nextSibling;n.remove(),o.insertBefore(s,l)}}catch(c){i.e(c)}finally{i.f()}}},"4cc9":function(t,e,a){"use strict";e["a"]=function(){var t=this,e=this.$tl("restoreDialogTitle"),a=this.$tl("restoreDialogMessage"),r=this.$tl("restoreDialogOk"),i=this.$tl("restoreDialogCancel");this.$q.dialog({title:e,message:a,ok:r,cancel:i}).onOk((function(){t.$request(t.$Api.Materials.Restore,{id:t.material.id}).then((function(){var e=t.$tl("restoreSuccess");t.$successNotify(e),t.$router.push(t.category.getRoute())})).catch((function(t){console.log("error",t)}))}))}},5469:function(t,e,a){"use strict";(function(t,r){a("a481"),a("7f7f");e["a"]={name:"CreateMaterial",mixins:[t],props:{categoriesNames:{type:String,required:!0},categoriesNamesExclude:{type:String,required:!1},initialCategoryName:{type:String,required:!1,default:""}},data:function(){var t=this,e=function(){if(t.initialCategoryName){var e,a=t.$store.getters.getCategory(t.initialCategoryName);return a&&a.isMaterialsContainer&&(null===(e=a.categoryPersonalAccess)||void 0===e?void 0:e.MaterialWrite)?t.initialCategoryName:null}return null};return{material:{name:null,title:"",text:"",subTitle:null,settingsJson:null,tags:[],categoryName:e(),isCommentsBlocked:!1,isHidden:!1},loading:!1}},methods:{send:function(){var t=this;if(this.$refs.form.start=!1,this.$refs.form.validate(),!this.$refs.form.hasError){this.loading=!0;var e={categoryName:this.material.categoryName,title:this.material.title,text:this.material.text,tags:this.material.tags.join(",")};this.material.name&&(e.name=this.material.name),this.material.subTitle&&(e.subTitle=this.material.subTitle),this.material.settingsJson&&(e.settingsJson=this.material.settingsJson),this.$request(this.$Api.Materials.Create,e).then((function(){t.$successNotify(),t.$router.replace(t.$refs.form.category.getRoute())})).catch((function(e){t.$errorNotify(e),t.loading=!1}))}}},beforeCreate:function(){this.$options.components.MaterialForm=r("material","MaterialForm")},created:function(){this.title=this.$tl("title")}}}).call(this,a("7c53")["default"],a("9bb5")["default"])},"57a3":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("SunPage",{staticClass:"edit-material q-pa-md"},[t.material.deletedDate?a("div",{staticClass:"edit-material__delete-date text-red"},[a("q-chip",{attrs:{icon:"fas fa-trash",color:"red","text-color":"white",label:t.$tl("deleted")}})],1):t._e(),a("MaterialForm",{ref:"form",staticClass:"edit-material__material-form",attrs:{material:t.material}}),a("div",{staticClass:"edit-material__btn-block flex q-gutter-md q-mt-lg"},[a("q-btn",{staticClass:"send-btn",attrs:{icon:t.$iconsSet.EditMaterial.save,"no-caps":"",loading:t.loading,label:t.$tl("saveBtn")},on:{click:t.save}},[a("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1),a("q-btn",{staticClass:"cancel-btn",attrs:{"no-caps":"",icon:t.$iconsSet.EditMaterial.cancel,label:t.$tl("cancelBtn")},on:{click:function(e){return t.$router.back()}}}),a("q-space"),!t.material.deletedDate&&t.canDelete?a("q-btn",{staticClass:"delete-btn",attrs:{"no-caps":"",icon:t.$iconsSet.EditMaterial.delete,label:t.$tl("deleteBtn")},on:{click:t.deleteMaterial}}):t._e(),t.material.deletedDate&&t.canRestore?a("q-btn",{staticClass:"restore-btn",attrs:{"no-caps":"",icon:"fas fa-trash-restore",label:t.$tl("restoreBtn")},on:{click:t.restoreMaterial}}):t._e()],1)],1)},i=[],n=a("b785"),s=n["a"],o=a("2877"),l=a("b047"),c=a("9c40"),u=a("2c91"),m=a("eebe"),d=a.n(m),f=Object(o["a"])(s,r,i,!1,null,null,null);e["a"]=f.exports;d()(f,"components",{QChip:l["a"],QBtn:c["a"],QSpace:u["a"]})},"8a9f":function(t,e,a){"use strict";var r=a("bd4c");e["a"]=function(){if(!this.material||!this.comments)return!1;if(!this.$store.state.auth.user)return!1;if(this.category.categoryPersonalAccess.MaterialDeleteAny)return!0;if(this.material.authorId!==this.$store.state.auth.user.id)return!1;if(!this.category.categoryPersonalAccess.MaterialDeleteOwnIfHasReplies&&this.comments.length>=1&&!this.checkLastOwn(this.comments[0]))return!1;if(!this.category.categoryPersonalAccess.MaterialDeleteOwnIfTimeNotExceeded){var t=new Date,e=this.material.publishDate,a=r["a"].addToDate(e,{minutes:config.Materials.TimeToOwnDeleteInMinutes});if(a<t)return!1}return!!this.category.categoryPersonalAccess.MaterialDeleteOwn}},"9d68":function(t,e,a){"use strict";e["a"]=function(){var t=this,e=this.$tl("deleteDialogTitle"),a=this.$tl("deleteDialogMessage"),r=this.$tl("deleteDialogOk"),i=this.$tl("deleteDialogCancel");this.$q.dialog({title:e,message:a,ok:r,cancel:i}).onOk((function(){t.$request(t.$Api.Materials.Delete,{id:t.material.id}).then((function(){var e=t.$tl("deleteSuccess");t.$successNotify(e),t.$router.push(t.category.getRoute())})).catch((function(t){console.log("error",t)}))}))}},a84c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"material-form q-gutter-y-xs"},[t.canEditName?a("q-input",{ref:"name",staticClass:"material-form__name",attrs:{label:t.$tl("name"),rules:t.rules.name},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{color:"info",name:t.$iconsSet.global.tooltip}},[a("q-tooltip",[t._v("\n\t\t\t\t\t\t"+t._s(t.$tl("tooltips.name"))+"\n\t\t\t\t\t")])],1)]},proxy:!0}],null,!1,3054781001),model:{value:t.material.name,callback:function(e){t.$set(t.material,"name",e)},expression:"material.name"}}):t._e(),a("q-input",{ref:"title",staticClass:"material-form__title",attrs:{label:t.$tl("title"),rules:t.rules.title},model:{value:t.material.title,callback:function(e){t.$set(t.material,"title",e)},expression:"material.title"}}),t.isSubTitleEditable?a("q-input",{ref:"subTitle",staticClass:"material-form__sub-title q-mb-sm",attrs:{type:"textarea",autogrow:"",label:t.$tl("subTitle"),rules:t.rules.subTitle},model:{value:t.material.subTitle,callback:function(e){t.$set(t.material,"subTitle",e)},expression:"material.subTitle"}}):t._e(),a("SunEditor",{ref:"htmlEditor",staticClass:"material-form__text-editor",attrs:{bottomSlots:"","content-class":"material__text",toolbar:t.editorToolbar,rules:t.rules.text},model:{value:t.material.text,callback:function(e){t.$set(t.material,"text",e)},expression:"material.text"}}),a("q-select",{staticClass:"material-form__tags",attrs:{"bottom-slots":"","use-input":"","use-chips":"",multiple:"",label:t.$tl("tags"),"hide-dropdown-icon":"","input-debounce":"0","new-value-mode":"add-unique"},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:t.$iconsSet.MaterialForm.tags}})]},proxy:!0}]),model:{value:t.material.tags,callback:function(e){t.$set(t.material,"tags",e)},expression:"material.tags"}}),a("CategoriesInput",{attrs:{categoriesNames:t.categoriesNames,showIcon:"",showIcons:"",label:t.$tl("selectCategory")},model:{value:t.material.categoryName,callback:function(e){t.$set(t.material,"categoryName",e)},expression:"material.categoryName"}}),t.canEditSettingsJson?a("q-input",{ref:"settingsJson",staticClass:"material-form__settings-json",attrs:{type:"textarea",clearable:"",autogrow:"",label:t.$tl("settingsJson"),rules:t.rules.settingsJson},model:{value:t.material.settingsJson,callback:function(e){t.$set(t.material,"settingsJson",e)},expression:"material.settingsJson"}}):t._e(),a("div",{staticClass:"material-form__block-comments"},[t.canBlockComments?a("q-checkbox",{ref:"isCommentsBlocked",attrs:{"toggle-indeterminate":!1,label:t.$tl("blockComments")},model:{value:t.material.isCommentsBlocked,callback:function(e){t.$set(t.material,"isCommentsBlocked",e)},expression:"material.isCommentsBlocked"}}):t._e()],1),a("div",{staticClass:"material-form__hide"},[t.canHide?a("q-checkbox",{ref:"isHidden",attrs:{"toggle-indeterminate":!1,label:t.$tl("hide")},model:{value:t.material.isHidden,callback:function(e){t.$set(t.material,"isHidden",e)},expression:"material.isHidden"}}):t._e()],1)],1)},i=[],n=(a("6762"),a("2fdb"),a("7f7f"),a("6fb1"));function s(){var t=this;return{name:[function(e){return!e||/^[a-zA-Z0-9-]+$/.test(e)||t.$tl("validation.name.allowedChars")},function(e){return!e||!/^[0-9]+$/.test(e)||t.$tl("validation.name.numberNotAllowed")},function(e){return!e||e.length>=3||t.$tl("validation.name.minLength")},function(e){return!e||e.length<=config.DbColumnSizes.Materials_Name||t.$tl("validation.name.maxLength")}],title:[function(e){return!!e||t.$tl("validation.title.required")},function(e){return e.length>=3||t.$tl("validation.title.minLength")},function(e){return e.length<=config.DbColumnSizes.Materials_Title||t.$tl("validation.title.maxLength")}],subTitle:[function(e){return!e||e.length<=config.DbColumnSizes.Materials_SubTitle||t.$tl("validation.subTitle.maxLength")}],text:[function(e){return!!e||t.$tl("validation.text.required")},function(e){var a,r,i;return Object(n["htmlTextSizeOrHasImage"])(null===(a=t.$refs)||void 0===a||null===(r=a.htmlEditor)||void 0===r||null===(i=r.$refs)||void 0===i?void 0:i.content,5)||t.$tl("validation.text.htmlTextSizeOrHasImage")}],settingsJson:[function(e){return!e||Object(n["isJson"])(e)||t.$tl("validation.settingsJson.jsonFormatError")}]}}var o={name:"MaterialForm",props:{material:{type:Object,required:!0},categoriesNames:{type:String,required:!1,default:"Root"}},data:function(){return{start:!0}},computed:{hasError:function(){var t,e;return this.$refs.title.hasError||this.$refs.htmlEditor.hasError||!this.material.categoryName||(null===(t=this.$refs.description)||void 0===t?void 0:t.hasError)||(null===(e=this.$refs.name)||void 0===e?void 0:e.hasError)},canEditName:function(){var t;return this.$store.state.auth.roles.includes("Admin")&&(null===(t=this.category)||void 0===t?void 0:t.isMaterialsNameEditable)},canHide:function(){var t,e;return null===(t=this.category)||void 0===t||null===(e=t.categoryPersonalAccess)||void 0===e?void 0:e.MaterialHide},canEditSettingsJson:function(){var t,e;return null===(t=this.category)||void 0===t||null===(e=t.categoryPersonalAccess)||void 0===e?void 0:e.MaterialEditSettingsJson},canBlockComments:function(){var t,e;return null===(t=this.category)||void 0===t||null===(e=t.categoryPersonalAccess)||void 0===e?void 0:e.MaterialBlockCommentsAny},categoryTitle:function(){var t;return null===(t=this.category)||void 0===t?void 0:t.title},category:function(){return this.$store.getters.getCategory(this.material.categoryName)},isSubTitleEditable:function(){var t;return null===(t=this.category)||void 0===t?void 0:t.isMaterialsSubTitleEditable}},methods:{validate:function(){var t,e,a;null===(t=this.$refs.name)||void 0===t||t.validate(),this.$refs.title.validate(),null===(e=this.$refs.subTitle)||void 0===e||e.validate(),this.$refs.htmlEditor.validate(),null===(a=this.$refs.settingsJson)||void 0===a||a.validate()}},beforeCreate:function(){this.rules=s.call(this),this.editorToolbar=JSON.parse(config.Editor.MaterialToolbar),this.$options.components.CategoriesInput=a("a996").CategoriesInput}},l=o,c=(a("3b70"),a("2877")),u=a("27f9"),m=a("0016"),d=a("05c0"),f=a("ddd8"),h=a("8f8e"),g=a("d66b"),v=a("eebe"),p=a.n(v),b=Object(c["a"])(l,r,i,!1,null,null,null);e["a"]=b.exports;p()(b,"components",{QInput:u["a"],QIcon:m["a"],QTooltip:d["a"],QSelect:f["a"],QCheckbox:h["a"],QEditor:g["a"]})},b785:function(t,e,a){"use strict";(function(t){var r=a("967e"),i=a.n(r),n=(a("a481"),a("7f7f"),a("96cf"),a("fa84")),s=a.n(n),o=(a("c5f6"),a("b707"));e["a"]={name:"EditMaterial",mixins:[t],props:{id:{type:Number,required:!0}},data:function(){return{material:{name:null,title:"",text:"",subTitle:null,settingsJson:null,tags:[],isHidden:!1,isBlockComments:!1},comments:null,loading:!1}},computed:{categoryNodes:function(){return Object(o["getWhereToMove"])(this.$store)},category:function(){return this.$store.getters.getCategory(this.material.categoryName)},canDelete:function(){return o["canDeleteMaterial"].call(this)},canRestore:function(){return o["canRestoreMaterial"].call(this)}},methods:{deleteMaterial:function(){o["deleteMaterial"].call(this)},restoreMaterial:function(){o["restoreMaterial"].call(this)},save:function(){var t=this;return s()(i.a.mark((function e(){var a;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.start=!1,t.$refs.form.validate(),!t.$refs.form.hasError){e.next=4;break}return e.abrupt("return");case 4:return t.loading=!0,a={id:t.id,categoryName:t.material.categoryName,title:t.material.title,text:t.material.text,tags:t.material.tags.join(","),isHidden:t.material.isHidden,isCommentsBlocked:t.material.isCommentsBlocked},t.material.name&&(a.name=t.material.name),t.material.subTitle&&(a.subTitle=t.material.subTitle),t.material.settingsJson&&(a.settingsJson=t.material.settingsJson),e.next=11,t.$request(t.$Api.Materials.Update,a).then((function(){t.$successNotify(),t.$router.replace(t.category.getRoute())})).catch((function(e){t.$errorNotify(e),t.loading=!1}));case 11:case"end":return e.stop()}}),e)})))()},loadData:function(){var t=this;return s()(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$request(t.$Api.Materials.Get,{idOrName:t.id}).then((function(e){t.material=e.data}));case 2:return e.next=4,t.$request(t.$Api.Comments.GetMaterialComments,{materialId:t.material.id}).then((function(e){t.comments=e.data}));case 4:case"end":return e.stop()}}),e)})))()}},beforeCreate:function(){this.$options.components.MaterialForm=a("b707").MaterialForm},created:function(){this.title=this.$tl("title"),this.loadData()}}}).call(this,a("7c53")["default"])},c18f:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.material?a("div",{staticClass:"material-inline full-height"},[a("div",{staticClass:"material-inline__text full-height",domProps:{innerHTML:t._s(t.material.text)}})]):t._e()},i=[],n=(a("7f7f"),a("4bdd")),s={name:"MaterialInline",props:{name:{type:String,required:!0}},data:function(){return{material:null}},methods:{loadMaterial:function(){var t=this;this.$request(this.$Api.Materials.Get,{idOrName:this.name}).then((function(e){t.material=e.data,t.$emit("loaded"),t.$nextTick((function(e){Object(n["a"])(t.$el)}))})).catch((function(t){console.log("error",t)}))}},created:function(){this.loadMaterial()}},o=s,l=a("2877"),c=Object(l["a"])(o,r,i,!1,null,null,null);e["a"]=c.exports},c8f1:function(t,e,a){"use strict";e["a"]=function(){return this.category.categoryPersonalAccess.MaterialDeleteAny}},e801:function(t,e,a){}}]);