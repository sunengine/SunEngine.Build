(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"024a":function(t,e,n){},"037d":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SunPage",{staticClass:"cypher-secrets page-padding"},[n("PageHeader",{attrs:{title:t.title}}),n("div",{staticClass:"cypher-secrets__btn-block q-gutter-md q-mt-sm"},[n("q-btn",{staticClass:"cypher-secrets__short-jwt",attrs:{"no-caps":"",icon:t.$iconsSet.CypherSecrets.key,color:"warning",label:"ShortJwt"},on:{click:t.shortJwt}}),n("q-btn",{staticClass:"cypher-secrets__short-long-2jwt",attrs:{"no-caps":"",icon:t.$iconsSet.CypherSecrets.key,color:"warning",label:"Long2Jwt"},on:{click:t.long2Jwt}}),n("q-btn",{staticClass:"cypher-secrets__short-email-change",attrs:{"no-caps":"",icon:t.$iconsSet.CypherSecrets.key,color:"warning",label:"EmailChange"},on:{click:t.emailChange}})],1)],1)},s=[],a=n("e856"),r={name:"CypherSecrets",mixins:[a["Page"]],computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")}},methods:{shortJwt:function(){var t=this;this.$request(this.$AdminApi.CypherSecretsAdmin.ResetCypher,{name:"ShortJwt"}).then((function(e){return t.$successNotify()}))},long2Jwt:function(){var t=this;this.$request(this.$AdminApi.CypherSecretsAdmin.ResetCypher,{name:"Long2Jwt"}).then((function(e){return t.$successNotify()}))},emailChange:function(){var t=this;this.$request(this.$AdminApi.CypherSecretsAdmin.ResetCypher,{name:"EmailChange"}).then((function(e){return t.$successNotify()}))}},created:function(){this.title=this.$tl("title")}},o=r,l=n("2877"),c=n("eebe"),u=n.n(c),m=n("9c40"),d=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=d.exports;u()(d,"components",{QBtn:m["a"]})},"2e02":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SunPage",{staticClass:"deleted-elements page-padding"},[n("PageHeader",{attrs:{title:t.title}}),n("q-checkbox",{staticClass:"deleted-elements__show-deleted",attrs:{"toggle-indeterminate":!1},model:{value:t.$store.state.admin.showDeletedElements,callback:function(e){t.$set(t.$store.state.admin,"showDeletedElements",e)},expression:"$store.state.admin.showDeletedElements"}},[t._v("\n\t\t"+t._s(t.$tl("showDeleted"))+"\n\t")]),n("div",{staticClass:"deleted-elements__info-box"},[t._v("\n\t\t"+t._s(t.$tl("info1"))+"\n\t\t"),n("br"),n("br"),t._v("\n\t\t"+t._s(t.$tl("info2"))+"\n\t\t"),n("br"),n("br"),t._v("\n\t\t"+t._s(t.$tl("info3"))+"\n\t")]),n("q-btn",{staticClass:"q-mt-md",attrs:{color:"primary","no-caps":"",icon:t.$iconsSet.DeletedElements.trashBtn,label:t.$tl("btnDeleteAllMarkedComments"),loading:t.loading},on:{click:function(e){return t.deleteAllMarkedComments()}}},[n("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1)},s=[],a=n("e856"),r={name:"DeletedElements",mixins:[a["Page"]],data:function(){return{loading:!1}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")}},created:function(){this.title=this.$tl("title")},methods:{deleteAllMarkedComments:function(){var t=this;this.loading=!0,this.$request(this.$AdminApi.DeletedElements.DeleteAllMarkedComments).then((function(e){t.loading=!1;var n={materialsCount:e.data.deletedMaterials,commentsCount:e.data.deletedComments};t.$successNotify(t.$tl("deleteSuccess",n))})).catch((function(e){t.loading=!1,t.$errorNotify(e)}))}}},o=r,l=(n("95bb"),n("2877")),c=n("eebe"),u=n.n(c),m=n("8f8e"),d=n("9c40"),f=Object(l["a"])(o,i,s,!1,null,null,null);e["a"]=f.exports;u()(f,"components",{QCheckbox:m["a"],QBtn:d["a"]})},"4c53":function(t,e,n){"use strict";var i=n("024a"),s=n.n(i);s.a},"62c3":function(t,e,n){"use strict";(function(t){n("8e6e"),n("cadf"),n("06db"),n("456d");var i=n("967e"),s=n.n(i),a=(n("96cf"),n("fa84")),r=n.n(a),o=n("c47a"),l=n.n(o),c=(n("28a5"),n("a481"),n("7f7f"),n("118e")),u=n.n(c),m=(n("6762"),n("2fdb"),n("ac4d"),n("8a81"),n("ac6a"),n("e856"));function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){l()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e["a"]={name:"ConfigurationAdmin",mixins:[m["Page"]],data:function(){return{filter:"",configurationGroups:null,configurationGroupsFiltered:null,tokens:null,allRoles:null,enums:null,loading:!1}},watch:{filter:"buildTable"},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")},filterLowerCase:function(){return this.filter.toLowerCase()},sunEditorButtons:function(){return[["bold","italic","strike","underline"],["token","link","addImages"],["unordered","ordered"],["undo","redo"],["removeFormat","viewsource","fullscreen","clear"]]}},methods:{loadRoles:function(){var t=this;return this.$request(this.$AdminApi.UserRolesAdmin.GetAllRoles).then((function(e){t.allRoles=e.data,t.allRoles.push({name:"Unregistered",title:"Unregistered"})}))},filterItems:function(){this.filter||(this.configurationGroupsFiltered=this.configurationGroups);var t=[],e=!0,n=!1,i=void 0;try{for(var s,a=this.configurationGroups[Symbol.iterator]();!(e=(s=a.next()).done);e=!0){var r=s.value;if(r.filterStr.includes(this.filterLowerCase))t.push(r);else{r.items;var o=u()(r,["items"]);o.items=[];var l=!0,c=!1,m=void 0;try{for(var d,f=r.items[Symbol.iterator]();!(l=(d=f.next()).done);l=!0){var p=d.value;p.filterStr.includes(this.filterLowerCase)&&o.items.push(p)}}catch(h){c=!0,m=h}finally{try{l||null==f.return||f.return()}finally{if(c)throw m}}o.items.length>0&&t.push(o)}}}catch(h){n=!0,i=h}finally{try{e||null==a.return||a.return()}finally{if(n)throw i}}this.configurationGroupsFiltered=t.length>0?t:null},getItemTitle:function(t){var e=this.$options.name+".items."+t.name;return this.$te(e)&&this.$t(e)?this.$t(e):t.name},getItemSubTitle:function(t){var e=this.$options.name+".tooltips."+t.name;return this.$te(e)&&this.$t(e)?this.$t(e):null},getGroupTitle:function(t){var e=this.$options.name+".groupTitles."+t.name;return this.$te(e)&&this.$t(e)?this.$t(e):t.name},getGroupSubTitle:function(t){var e=this.$options.name+".groupSubTitles."+t.name;return this.$te(e)&&this.$t(e)?this.$t(e).replace(/((http:\/\/|https:\/\/)[^\s]+?)(\s|$)/gi,'<a href="$1" target="_blank">$1</a>'):null},resetConfiguration:function(){var t=this;return this.loadConfiguration().then((function(e){t.$successNotify(t.$tl("resetSuccessNotify"),"info")}))},buildTable:function(t){var e=this;function n(t){var e=t.split(":");return[e[0],e.splice(1).join(":")]}var i=function(t){t.localTitle=e.getGroupTitle(t),t.localSubTitle=e.getGroupSubTitle(t),t.filterStr=(t.name+" ! "+t.localTitle+" ! "+t.localSubTitle).toLocaleLowerCase()},s=function(t){t.localTitle=e.getItemTitle(t),t.localSubTitle=e.getItemSubTitle(t),t.filterStr=(t.name+" ! "+t.localTitle+" ! "+t.localSubTitle).toLocaleLowerCase()},a=n(t[0].name),r=f({shortName:a[1]},t[0]);s(r);var o=[{name:a[0],items:[r]}];i(o[0]),r.group=o[0],t.reduce((function(t,e,a,r){var l=n(t.name),c=n(e.name),u=f({shortName:c[1]},e);if(s(u),l[0]===c[0])o[o.length-1].items.push(u);else{var m={name:c[0],fullName:e.name,items:[u]};i(m),o.push(m)}return e})),this.configurationGroups=o},doFilter:function(){this.filterItems()},loadConfiguration:function(){var t=this;return this.$request(this.$AdminApi.ConfigurationAdmin.LoadConfiguration).then((function(e){t.enums=e.data.enums,t.buildTable(e.data.configItems)}))},uploadConfiguration:function(){var t=this,e=new FormData,n=!0,i=!1,a=void 0;try{for(var o,l=this.configurationGroups[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value,u=!0,m=!1,d=void 0;try{for(var f,p=c.items[Symbol.iterator]();!(u=(f=p.next()).done);u=!0){var h=f.value;e.append(h.name,h.value)}}catch(g){m=!0,d=g}finally{try{u||null==p.return||p.return()}finally{if(m)throw d}}}}catch(g){i=!0,a=g}finally{try{n||null==l.return||l.return()}finally{if(i)throw a}}return this.loading=!0,this.$request(this.$AdminApi.ConfigurationAdmin.UploadConfiguration,e).then(function(){var e=r()(s.a.mark((function e(n){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$successNotify(),t.loading=!1,e.next=4,t.loadConfiguration();case 4:t.doFilter();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},beforeCreate:function(){this.$options.components.ConfigItem=t("sections","ConfigItem")},created:function(){var t=this;return r()(s.a.mark((function e(){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.filterItems=t.$throttle(t.filterItems,1e3),t.title=t.$tl("title"),e.next=4,t.loadRoles();case 4:return e.next=6,t.loadConfiguration();case 6:t.doFilter();case 7:case"end":return e.stop()}}),e)})))()}}}).call(this,n("9bb5")["default"])},"842a":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SunPage",{staticClass:"images-cleaner page-padding"},[n("PageHeader",{attrs:{title:t.title}}),n("q-banner",{staticClass:"bg-amber-2 q-mb-md",attrs:{rounded:""}},[t._v("\n\t\t"+t._s(t.$tl("info"))+"\n\t")]),n("div",{staticClass:"images-cleaner__btn-block q-gutter-md flex q-mb-xl"},[t.images?n("q-btn",{staticClass:"send-btn",attrs:{icon:t.$iconsSet.ImagesCleaner.clean,loading:t.loading,"no-caps":"",label:t.$tl("clearBtn")},on:{click:function(e){return t.clear()}}},[n("LoaderSent",{attrs:{slot:"loading"},slot:"loading"},[t._v("\n\t\t\t\t"+t._s(t.$tl("working"))+"\n\t\t\t")])],1):t._e(),n("q-space"),n("q-btn",{staticClass:"refresh-btn q-ml",attrs:{"no-caps":"",color:"info",icon:t.$iconsSet.ImagesCleaner.refresh,label:t.$tl("refreshBtn")},on:{click:function(e){return t.reloadImages()}}})],1),t.images?n("div",{staticClass:"images-cleaner__img-block img flex row q-col-gutter-sm"},t._l(t.images,(function(e){return n("img",{staticClass:"images-cleaner__clean-img",attrs:{src:t.$imagePath(e),height:"80",width:"80"}})})),0):n("q-banner",{staticClass:"images-cleaner__empty-result bg-grey-3",attrs:{rounded:""}},[t._v("\n\t\t"+t._s(t.$tl("emptyResult"))+"\n\t")])],1)},s=[],a=n("967e"),r=n.n(a),o=(n("96cf"),n("fa84")),l=n.n(o),c=(n("551c"),n("06db"),n("097d"),n("e856")),u={name:"ImagesCleaner",mixins:[c["Page"]],data:function(){return{imagesDeleted:null,images:null,loading:!1}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")}},methods:{clear:function(){var t=this;this.loading=!0,this.$request(this.$AdminApi.ImagesCleaner.DeleteImages).then((function(e){t.imagesDeleted=e.data.imagesDeleted,t.$successNotify(t.$tl("clearCount")+t.imagesDeleted),t.loadImages()})).catch((function(e){t.$errorNotify(e)})).finally((function(e){t.loading=!1}))},loadImages:function(){var t=this;this.$request(this.$AdminApi.ImagesCleaner.GetAllImages).then((function(e){0!==e.data.length?t.images=e.data:t.images=null})).catch((function(e){t.$errorNotify(e)}))},reloadImages:function(){var t=this;return l()(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.loadImages();case 2:t.images?t.$successNotify():t.$successNotify(t.$tl("emptyResult"));case 3:case"end":return e.stop()}}),e)})))()}},created:function(){this.title=this.$tl("title"),this.loadImages()}},m=u,d=(n("d8f8"),n("2877")),f=n("eebe"),p=n.n(f),h=n("54e1"),g=n("9c40"),v=n("2c91"),_=Object(d["a"])(m,i,s,!1,null,null,null);e["a"]=_.exports;p()(_,"components",{QBanner:h["a"],QBtn:g["a"],QSpace:v["a"]})},9090:function(t,e,n){},"95bb":function(t,e,n){"use strict";var i=n("9eff"),s=n.n(i);s.a},"9eff":function(t,e,n){},b2f7:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SunPage",{staticClass:"configuration-admin page-padding"},[n("PageHeader",{attrs:{title:t.title}},[n("q-input",{attrs:{dense:"",placeholder:t.$tl("filter"),clearable:""},on:{input:t.doFilter},scopedSlots:t._u([{key:"before",fn:function(){return[n("q-icon",{attrs:{name:t.$iconsSet.ConfigurationAdmin.search}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),t.configurationGroups?n("div",[n("q-markup-table",{attrs:{"wrap-cells":"",flat:"",bordered:""}},[t.configurationGroupsFiltered?n("tbody",[t._l(t.configurationGroupsFiltered,(function(e){return[n("tr",{staticClass:"configuration-admin__group-header-tr"},[n("td",{staticClass:"configuration-admin__group-header-td q-gutter-y-sm",attrs:{colspan:"2"}},[n("div",{staticClass:"configuration-admin__group-title"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(e.localTitle)+"\n\t\t\t\t\t\t\t")]),n("div",{staticClass:"configuration-admin__group-sub-title",domProps:{innerHTML:t._s(e.localSubTitle)}})])]),t._l(e.items,(function(e){return n("tr",[n("td",{staticClass:"configuration-admin__name-column"},[n("div",{staticClass:"flex no-wrap align-center"},[n("div",[t._v(t._s(e.localTitle))]),n("q-space"),e.localSubTitle?n("div",[n("q-icon",{staticClass:"text-blue",attrs:{name:t.$iconsSet.ConfigurationAdmin.question,size:"xs",right:""}},[n("q-tooltip",{attrs:{anchor:"bottom middle",self:"top middle","max-width":"200px"}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(e.localSubTitle)+"\n\t\t\t\t\t\t\t\t\t\t")])],1)],1):t._e()],1)]),n("td",{staticClass:"configuration-admin__value-column"},[n("ConfigItem",{attrs:{enums:t.enums,allRoles:t.allRoles,item:e}})],1)])}))]}))],2):n("tbody",[n("tr",[n("td",[t._v(t._s(t.$tl("noResults")))])])])]),n("q-page-sticky",{attrs:{position:"bottom-left",offset:[34,12]}},[n("q-btn",{staticClass:"send-btn",attrs:{"no-caps":"",icon:t.$iconsSet.ConfigurationAdmin.save,loading:t.loading,label:t.$tl("saveBtn")},on:{click:t.uploadConfiguration},scopedSlots:t._u([{key:"loading",fn:function(){return[n("LoaderSent")]},proxy:!0}],null,!1,1039793523)})],1),n("q-page-sticky",{attrs:{position:"bottom-right",offset:[34,12]}},[n("q-btn",{staticClass:"reset-btn q-mr-md",attrs:{"no-caps":"",icon:t.$iconsSet.ConfigurationAdmin.reset,label:t.$tl("resetBtn")},on:{click:t.resetConfiguration}},[n("q-tooltip",{attrs:{delay:800}},[t._v("\n\t\t\t\t\t"+t._s(t.$tl("resetBtnTooltip"))+"\n\t\t\t\t")])],1),n("q-btn",{staticClass:"cancel-btn",attrs:{"no-caps":"",icon:t.$iconsSet.ConfigurationAdmin.cancel,label:t.$tl("cancelBtn")},on:{click:function(e){return t.$router.back()}}})],1),n("br")],1):n("LoaderWait")],1)},s=[],a=n("62c3"),r=a["a"],o=(n("4c53"),n("2877")),l=n("eebe"),c=n.n(l),u=n("27f9"),m=n("0016"),d=n("2bb1"),f=n("2c91"),p=n("05c0"),h=n("de5e"),g=n("9c40"),v=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=v.exports;c()(v,"components",{QInput:u["a"],QIcon:m["a"],QMarkupTable:d["a"],QSpace:f["a"],QTooltip:p["a"],QPageSticky:h["a"],QBtn:g["a"]})},c8bd:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("q-list",{staticClass:"admin-menu sun-second-menu",attrs:{"no-border":""}},[n("q-item",{attrs:{exact:"",to:{name:"AdminInformation"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.AdminInformation}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("adminInformation")))]),t.adminInformationCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.adminInformationCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"ConfigurationAdmin"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.ConfigurationAdmin}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("configuration")))]),t.configurationCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.configurationCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"MenuItemsAdmin"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.MenuItemsAdmin}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("menuItems")))]),t.menuItemsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.menuItemsCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"CategoriesAdmin"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.CategoriesAdmin}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("categories")))]),t.categoriesCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.categoriesCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"SectionsAdmin"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.SectionsAdmin}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("sections")))]),t.sectionsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.sectionsCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"SkinsAdmin"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.SkinsAdmin}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("skins")))]),t.skinsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.skinsCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"RolesPage"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.RolesPage}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("rolesUsers")))]),t.rolesUsersCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.rolesUsersCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"RolesPermissions"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.RolesPermissions}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("rolesPermissions")))]),t.rolesPermissionsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.rolesPermissionsCaption))]):t._e()],1)],1),n("q-expansion-item",{attrs:{label:t.$tl("systemTools"),"expand-separator":"",caption:t.systemToolsCaption,icon:t.$iconsSet.AdminMenu.systemTools}},[n("q-item",{attrs:{clickable:""},on:{click:t.resetCache}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{color:"info",name:t.$iconsSet.AdminMenu.resetCache}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("resetCache")))]),t.resetCacheCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.resetCacheCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"DeletedElements"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.DeletedElements}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("deletedElements")))]),t.deletedElementsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.deletedElementsCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"ImagesCleaner"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.ImagesCleaner}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("imagesCleaner")))]),t.imagesCleanerCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.imagesCleanerCaption))]):t._e()],1)],1),n("q-item",{attrs:{to:{name:"CypherSecrets"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:t.$iconsSet.AdminMenu.CypherSecrets}})],1),n("q-item-section",[n("q-item-label",[t._v(t._s(t.$tl("cypherSecrets")))]),t.cypherSecretsCaption?n("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.cypherSecretsCaption))]):t._e()],1)],1)],1)],1)],1)},s=[],a={name:"AdminMenu",computed:{adminInformationCaption:function(){var t;return null!==(t=this.$tl("adminInformationCaption"))&&void 0!==t?t:null},menuItemsCaption:function(){var t;return null!==(t=this.$tl("menuItemsCaption"))&&void 0!==t?t:null},categoriesCaption:function(){var t;return null!==(t=this.$tl("categoriesCaption"))&&void 0!==t?t:null},sectionsCaption:function(){var t;return null!==(t=this.$tl("cypherSecretsCaption"))&&void 0!==t?t:null},skinsCaption:function(){var t;return null!==(t=this.$tl("skinsCaption"))&&void 0!==t?t:null},rolesUsersCaption:function(){var t;return null!==(t=this.$tl("rolesUsersCaption"))&&void 0!==t?t:null},rolesPermissionsCaption:function(){var t;return null!==(t=this.$tl("rolesPermissionsCaption"))&&void 0!==t?t:null},configurationCaption:function(){var t;return null!==(t=this.$tl("configurationCaption"))&&void 0!==t?t:null},systemToolsCaption:function(){var t;return null!==(t=this.$tl("systemToolsCaption"))&&void 0!==t?t:null},imagesCleanerCaption:function(){var t;return null!==(t=this.$tl("imagesCleanerCaption"))&&void 0!==t?t:null},deletedElementsCaption:function(){var t;return null!==(t=this.$tl("deletedElementsCaption"))&&void 0!==t?t:null},cypherSecretsCaption:function(){var t;return null!==(t=this.$tl("cypherSecretsCaption"))&&void 0!==t?t:null},resetCacheCaption:function(){var t;return null!==(t=this.$tl("resetCacheCaption"))&&void 0!==t?t:null}},methods:{resetCache:function(){var t=this;this.$request(this.$AdminApi.CacheAdmin.ResetAllCache).then((function(e){t.$successNotify(t.$tl("resetCacheSuccess"))}))}}},r=a,o=n("2877"),l=n("eebe"),c=n.n(l),u=n("1c1c"),m=n("66e5"),d=n("4074"),f=n("0016"),p=n("0170"),h=n("3b73"),g=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=g.exports;c()(g,"components",{QList:u["a"],QItem:m["a"],QItemSection:d["a"],QIcon:f["a"],QItemLabel:p["a"],QExpansionItem:h["a"]})},d8f8:function(t,e,n){"use strict";var i=n("9090"),s=n.n(i);s.a},dd66:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SunPage",{staticClass:"admin-page page-padding"},[n("PageHeader",{attrs:{title:t.title}}),n("q-expansion-item",{staticClass:"q-mb-md shadow-1 overflow-hidden",staticStyle:{"border-radius":"24px"},attrs:{"expand-icon-class":"text-white","header-class":"bg-pink-11 text-white",label:t.$tl("support"),icon:t.$iconsSet.AdminInformation.support}},[n("div",{staticClass:"q-pa-lg"},[t._v("\n\t\t\t"+t._s(t.$tl("supportInfo"))+"\n\t\t\t"),n("ul",[n("li",[n("a",{staticClass:"link",attrs:{href:"https://my.qiwi.com/Dmytryi-P9qqHzXldd?noCache=true",target:"_blank"}},[t._v("\n\t\t\t\t\t\tQIWI\n\t\t\t\t\t")])]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://yasobe.ru/na/SunEngine",target:"_blank"}},[t._v("Yandex.Money")])]),n("li",[n("a",{staticClass:"link",attrs:{href:"https://paypal.me/dmitrijpolyanin",target:"_blank"}},[t._v("\n\t\t\t\t\t\tPayPal\n\t\t\t\t\t")])])])])]),n("q-markup-table",[n("tbody",[t.siteName?n("tr",[n("td",[t._v(t._s(t.$tl("siteName")))]),n("td",[t._v(t._s(t.siteName))])]):t._e(),t.serverInfo&&t.serverInfo.Name?n("tr",[n("td",[t._v(t._s(t.$tl("serverName")))]),n("td",[t._v(t._s(t.serverInfo.Name))])]):t._e(),t.serverInfo&&t.serverInfo.ServerVersion?n("tr",[n("td",[t._v(t._s(t.$tl("serverVersion")))]),n("td",[t._v(t._s(t.serverInfo.ServerVersion))])]):t._e(),t.serverInfo&&t.serverInfo.ServerRepository?n("tr",[n("td",[t._v(t._s(t.$tl("serverRepository")))]),n("td",[n("a",{attrs:{href:t.serverInfo.ServerRepository,target:"_blank"}},[t._v(t._s(t.serverInfo.ServerRepository))])])]):t._e(),t.sunEngineVersion?n("tr",[n("td",[t._v(t._s(t.$tl("sunEngineVersion")))]),n("td",[t._v(t._s(t.sunEngineVersion))])]):t._e(),t.showClientName&&t.clientName?n("tr",[n("td",[t._v(t._s(t.$tl("clientName")))]),n("td",[t._v(t._s(t.clientName))])]):t._e(),t.clientVersion!==t.sunEngineVersion&&t.clientVersion?n("tr",[n("td",[t._v(t._s(t.$tl("clientVersion")))]),n("td",[t._v(t._s(t.clientVersion))])]):t._e(),t.dotNetVersion?n("tr",[n("td",[t._v(t._s(t.$tl("dotNetVersion")))]),n("td",[t._v(t._s(t.dotNetVersion))])]):t._e(),t.quasarVersion?n("tr",[n("td",[t._v(t._s(t.$tl("quasarVersion")))]),n("td",[t._v(t._s(t.quasarVersion))])]):t._e(),t.vueJsVersion?n("tr",[n("td",[t._v(t._s(t.$tl("vueJsVersion")))]),n("td",[t._v(t._s(t.vueJsVersion))])]):t._e(),t.serverInfo&&t.serverInfo.Maintainer?n("tr",[n("td",[t._v(t._s(t.$tl("maintainer")))]),n("td",[t._v(t._s(t.serverInfo.Maintainer))])]):t._e(),t.serverInfo&&t.serverInfo.MaintainerContacts&&t.serverInfo.MaintainerContacts.length>0?n("tr",[n("td",[t._v(t._s(t.$tl("maintainerContacts")))]),n("td",{staticClass:"q-gutter-y-xs"},t._l(t.serverInfo.MaintainerContacts,(function(e){return n("div",[e.startsWith("http")?n("a",{staticClass:"link",attrs:{href:e,target:"_blank"}},[t._v(t._s(e))]):n("span",[t._v(t._s(e))])])})),0)]):t._e(),t.serverInfo&&t.serverInfo.Description?n("tr",[n("td",[t._v(t._s(t.$tl("description")))]),n("td",[t._v(t._s(t.serverInfo.Description))])]):t._e(),t.additionalData?t._l(t.additionalData,(function(e,i){return n("tr",[n("td",[t._v(t._s(i))]),n("td",[t._v(t._s(e))])])})):t._e(),n("tr",[n("td",[t._v(t._s(t.$tl("sunEngineRepository")))]),n("td",[n("a",{staticClass:"link",attrs:{href:"https://github.com/sunengine/SunEngine",target:"_blank"}},[t._v("https://github.com/sunengine/SunEngine")])])]),n("tr",[n("td",[t._v(t._s(t.$tl("sunEngineSkinsRepository")))]),n("td",[n("a",{staticClass:"link",attrs:{href:"https://github.com/sunengine/SunEngine.Skins",target:"_blank"}},[t._v("https://github.com/sunengine/SunEngine.Skins")])])])],2)])],1)},s=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("967e")),r=n.n(a),o=(n("96cf"),n("fa84")),l=n.n(o),c=(n("7f7f"),n("c47a")),u=n.n(c),m=n("118e"),d=n.n(m),f=n("e856"),p=n("2b0e");function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){u()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var v={name:"AdminInformation",mixins:[f["Page"]],data:function(){return{serverInfo:null,sunEngineVersion:null,dotNetVersion:null}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Admin")},siteName:function(){return config.Global.SiteName},additionalData:function(){var t=g({},this.serverInfo),e=(t.Name,t.ServerVersion,t.Maintainer,t.MaintainerContacts,t.Description,t.ServerRepository,d()(t,["Name","ServerVersion","Maintainer","MaintainerContacts","Description","ServerRepository"]));return e},clientVersion:function(){return{name:"sunengine-client",version:"2.9.7",description:"SunEngine - web engine with support of blog, forum and articles functionality",productName:"SunEngine",author:"Dmitrij Polianin",private:!0,scripts:{"dev run":"quasar dev"},dependencies:{"@quasar/extras":"^1.6.0",axios:"^0.18.1","js-lock":"^0.1.1",quasar:"^1.9.10","vue-i18n":"^8.15.3"},devDependencies:{"@quasar/app":"^1.5.8","babel-preset-proposals":"^0.1.0",glob:"^7.1.4",path:"^0.12.7","quasar-app-extension-ide-helper":"^1.0.0-alpha.3","webpack-deep-scope-plugin":"^1.6.2"},engines:{node:">= 8.9.0",npm:">= 5.6.0",yarn:">= 1.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}.version},clientName:function(){return{name:"sunengine-client",version:"2.9.7",description:"SunEngine - web engine with support of blog, forum and articles functionality",productName:"SunEngine",author:"Dmitrij Polianin",private:!0,scripts:{"dev run":"quasar dev"},dependencies:{"@quasar/extras":"^1.6.0",axios:"^0.18.1","js-lock":"^0.1.1",quasar:"^1.9.10","vue-i18n":"^8.15.3"},devDependencies:{"@quasar/app":"^1.5.8","babel-preset-proposals":"^0.1.0",glob:"^7.1.4",path:"^0.12.7","quasar-app-extension-ide-helper":"^1.0.0-alpha.3","webpack-deep-scope-plugin":"^1.6.2"},engines:{node:">= 8.9.0",npm:">= 5.6.0",yarn:">= 1.6.0"},browserslist:["> 1%","last 2 versions","not ie <= 10"]}.name},showClientName:function(){return"sunengine-client"!==this.clientName},quasarVersion:function(){return this.$q.version},vueJsVersion:function(){return p["default"].version}},methods:{getServerInfo:function(){var t=this;return this.$request(this.$AdminApi.ServerInfoAdmin.GetServerInfo).then((function(e){t.serverInfo=e.data.ServerInfo}))},getDotNetVersion:function(){var t=this;return this.$request(this.$AdminApi.ServerInfoAdmin.DotnetVersion).then((function(e){t.dotNetVersion=e.data}))},getSunEngineVersion:function(){var t=this;return this.$request(this.$AdminApi.ServerInfoAdmin.Version).then((function(e){t.sunEngineVersion=e.data.version}))}},created:function(){var t=this;return l()(r.a.mark((function e(){return r.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.title=t.$tl("title"),e.next=3,t.getServerInfo();case 3:return e.next=5,t.getSunEngineVersion();case 5:return e.next=7,t.getDotNetVersion();case 7:case"end":return e.stop()}}),e)})))()}},_=v,b=n("2877"),C=n("eebe"),$=n.n(C),q=n("3b73"),y=n("2bb1"),S=Object(b["a"])(_,i,s,!1,null,null,null);e["a"]=S.exports;$()(S,"components",{QExpansionItem:q["a"],QMarkupTable:y["a"]})}}]);