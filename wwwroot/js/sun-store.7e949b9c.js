(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"035f":function(t,e,n){"use strict";e["a"]=function(t){return t.roles.some((function(t){return"Admin"===t}))}},"127b":function(t,e,n){"use strict";var r=n("2a40"),a=n("2923"),o=n("4228"),i=n("fe3e"),c=n("6049"),s=n("1c4e"),u=n("2e5c");e["a"]={state:r["a"],actions:{loadAllSections:a["a"],makeRoutesFromSections:o["a"],registerAllSectionsTypes:i["a"]},getters:{getSection:c["a"],getSectionType:s["a"]},mutations:{registerSectionType:u["a"]}}},"1c4e":function(t,e,n){"use strict";e["a"]=function(t){return function(e){return e?t.sectionsTypes[e.toLowerCase()]:null}}},"1d8f":function(t,e,n){"use strict";(function(t,r){var a=n("967e"),o=n.n(a),i=(n("a481"),n("96cf"),n("fa84")),c=n.n(i),s=n("6fb1"),u=n("a18c"),l=n("3dfd");e["a"]=function(e,n){return t(r.Auth.Login,{nameOrEmail:n.nameOrEmail,password:n.password,skipLock:null===n||void 0===n?void 0:n.skipLock}).then(c()(o.a.mark((function t(){var r;return o.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("loadMyUserInfo");case 2:return t.next=4,e.dispatch("loadAllCategories");case 4:return t.next=6,e.dispatch("setAllRoutes");case 6:return t.next=8,e.dispatch("loadAllMenuItems");case 8:l["a"].$successNotify(l["a"].$t("Login.successNotify")),n.ret&&(r=u["b"].resolve(n.ret),r&&Object(s["routeHasAccess"])(r.route)&&u["b"].replace(r.route));case 10:case"end":return t.stop()}}),t)}))))}}).call(this,n("b775")["default"],n("3a75")["default"])},"1e4a":function(t,e,n){"use strict";var r=n("f5d5"),a=n("a040"),o=n("2fe3"),i=n("b591");e["a"]={state:r["a"],actions:{loadAllMenuItems:a["a"]},getters:{getMenu:o["a"]},mutations:{prepareAllMenuItems:i["a"]}}},"287e":function(t,e,n){"use strict";var r=n("967e"),a=n.n(r),o=(n("7f7f"),n("7514"),n("4db1")),i=n.n(o),c=(n("96cf"),n("fa84")),s=n.n(c),u=n("8c4f"),l=n("6fb1"),f=n("257b"),d=n("dc0b"),p=n("a18c");function m(){return m=s()(a.a.mark((function t(e){var n,r,o,c,s,m;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch("makeRoutesFromCategories");case 2:return n=t.sent,t.next=5,e.dispatch("makeRoutesFromSections");case 5:r=t.sent,o=[].concat(i()(f["authRoutes"]),i()(f["accountRoutes"]),i()(f["miscRoutes"]),i()(f["personalRoutes"]),i()(f["adminRoutes"]),i()(d["siteRoutes"]),i()(n),i()(r),i()(f["pageNotFoundRoute"])),config.Global.HomePageRedirect&&(c=o.find((function(t){return"Home"===t.name})),c&&(c.redirect=config.Global.HomePageRedirect)),s=o.filter((function(t){return Object(l["routeHasAccess"])(t)})),m=new u["a"]({mode:"history",routes:s}),p["b"].matcher=m.matcher,console.info("%cRoutes registered",l["consoleInit"],config.Dev.LogInitExtended?s:"");case 12:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}e["a"]=function(t){return m.apply(this,arguments)}},2923:function(t,e,n){"use strict";(function(t,r){n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("06db"),n("7f7f");var a=n("6fb1");function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}e["a"]=function(e){return t(r.Sections.GetAllSections,{skipLock:!0}).then((function(t){console.info("%cLoadAllSections",a["consoleInit"],config.Dev.LogInitExtended?t.data:""),e.state.allSections={};var n,r=o(t.data);try{for(r.s();!(n=r.n()).done;){var i=n.value;e.state.allSections[i.name.toLowerCase()]=i}}catch(c){r.e(c)}finally{r.f()}}))}}).call(this,n("b775")["default"],n("3a75")["default"])},"2a40":function(t,e,n){"use strict";e["a"]={allSections:null,sectionsTypes:null}},"2e26":function(t,e,n){"use strict";e["a"]={showDeletedElements:!1}},"2e5c":function(t,e,n){"use strict";n("7f7f");var r=n("2b0e");e["a"]=function(t,e){t.sectionsTypes||(t.sectionsTypes={}),r["default"].set(t.sectionsTypes,e.name.toLowerCase(),e)}},"2fe3":function(t,e,n){"use strict";function r(t){return function(e){return t.namedMenuItems&&e?t.namedMenuItems[e.toLowerCase()]:null}}n.d(e,"a",(function(){return r}))},3525:function(t,e,n){"use strict";e["a"]={routeAliases:null}},3956:function(t,e,n){"use strict";var r=n("e682");n.d(e,"b",(function(){return r["a"]}));var a=n("7b2f");n.d(e,"c",(function(){return a["a"]}));var o=n("46a0");n.d(e,"d",(function(){return o["a"]}));var i=n("127b");n.d(e,"h",(function(){return i["a"]}));var c=n("756a");n.d(e,"e",(function(){return c["a"]}));var s=n("1e4a");n.d(e,"f",(function(){return s["a"]}));var u=n("a550");n.d(e,"g",(function(){return u["b"]})),n.d(e,"a",(function(){return u["a"]}));var l=n("4360");n.d(e,"i",(function(){return l["b"]}))},"3b59":function(t,e,n){"use strict";(function(t,r){n("7f7f"),n("551c"),n("06db"),n("097d");var a=n("6fb1"),o=n("a18c");e["a"]=function(){t(r.Auth.Logout,void 0,void 0,void 0,!0).finally((function(){Object(a["removeTokens"])(),"Home"!==o["b"].currentRoute.name&&o["b"].push({name:"Home"})}))}}).call(this,n("b775")["default"],n("3a75")["default"])},4228:function(t,e,n){"use strict";var r=n("4db1"),a=n.n(r);n("ac6a"),n("cadf"),n("06db"),n("8615");e["a"]=function(t){var e=[];if(t.state.allSections)for(var n=0,r=Object.values(t.state.allSections);n<r.length;n++){var o=r[n],i=t.getters.getSectionType(o.type);e.push.apply(e,a()(i.getRoutes(o)))}return e}},4360:function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r}));n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d");var r,a=n("c47a"),o=n.n(a),i=n("2f62"),c=n("3956"),s=n("6fb1");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}t.use(i["a"]),e["a"]=function(){return r=new i["a"].Store(l(l({},c["g"]),{},{modules:{admin:c["b"],auth:c["c"],categories:c["d"],sections:c["h"],layouts:c["e"],menu:c["f"]}})),Object(s["initLongTokenFromLocalStorage"])(r),r.state.initializedPromise=r.dispatch("initStore"),r}}).call(this,n("2b0e")["default"])},"46a0":function(t,e,n){"use strict";var r=n("e47b"),a=n("515f"),o=n("6e08"),i=n("b530");e["a"]={state:r["a"],actions:{loadAllCategories:a["a"]},getters:{getCategory:o["a"]},mutations:{prepareAllCategories:i["a"]}}},"4d15":function(t,e,n){"use strict";e["a"]=function(){}},"4d2b":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),e["b"]={initializeState:"none",initializedPromise:null,currentPage:null};var r={None:"none",Running:"running",Error:"error",Done:"done"}},"515f":function(t,e,n){"use strict";(function(t,r){var a=n("6fb1");e["a"]=function(e,n){return t(r.Categories.GetAllCategoriesAndAccesses,{skipLock:null===n||void 0===n?void 0:n.skipLock}).then((function(t){console.info("%cLoadAllCategories",a["consoleInit"],config.Dev.LogInitExtended?t.data:""),e.commit("prepareAllCategories",t.data)}))}}).call(this,n("b775")["default"],n("3a75")["default"])},"57a8":function(t,e,n){"use strict";var r=n("2b0e"),a=n("6fb1");e["a"]=function(t,e){e.photo=Object(a["avatarPath"])(e.photo),e.avatar=Object(a["avatarPath"])(e.avatar),r["default"].set(t,"roles",e.roles),delete e.roles,r["default"].set(t,"user",e)}},5931:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return o}));var r=n("3956");function a(t){return t.initializeState===r["a"].Done}function o(t){return t.initializeState===r["a"].Error}},"5ffc":function(t,e,n){"use strict";e["a"]={user:null,roles:["Unregistered"]}},6049:function(t,e,n){"use strict";e["a"]=function(t){return function(e){return e?t.allSections[e.toLowerCase()]:null}}},"6e08":function(t,e,n){"use strict";e["a"]=function(t){return function(e){return t.all&&e?t.all[e.toLowerCase()]:null}}},"756a":function(t,e,n){"use strict";var r=n("fa41"),a=n("e01c"),o=n("c918"),i=n("c68c"),c=n("c4dc");e["a"]={state:r["a"],actions:{makeRoutesFromCategories:a["a"],registerAllLayouts:o["a"]},getters:{getLayout:i["a"]},mutations:{registerLayout:c["a"]}}},"7b2f":function(t,e,n){"use strict";var r=n("5ffc"),a=n("e1a7"),o=n("1d8f"),i=n("3b59"),c=n("035f"),s=n("da66"),u=n("57a8");e["a"]={state:r["a"],actions:{loadMyUserInfo:a["a"],login:o["a"],logout:i["a"]},getters:{isAdmin:c["a"]},mutations:{clearAllUserRelatedData:s["a"],setUserInfo:u["a"]}}},a040:function(t,e,n){"use strict";(function(t,r){var a=n("6fb1");e["a"]=function(e,n){return t(r.Menu.GetAllMenuItems,{skipLock:null===n||void 0===n?void 0:n.skipLock}).then((function(t){console.info("%cLoadAllMenuItems",a["consoleInit"],config.Dev.LogInitExtended?t.data:""),e.commit("prepareAllMenuItems",t.data)}))}}).call(this,n("b775")["default"],n("3a75")["default"])},a550:function(t,e,n){"use strict";var r=n("4d2b"),a=n("e9e0"),o=n("287e"),i=n("5931");n.d(e,"a",(function(){return r["a"]})),e["b"]={state:r["b"],getters:{isInitialized:i["b"],initializeError:i["a"]},actions:{initStore:a["a"],setAllRoutes:o["a"]}}},b530:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("fd24"),n("ac6a"),n("cadf"),n("06db"),n("8615"),n("7f7f");var r=n("02ef"),a=n("6fb1");function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){function n(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(e&&(t.all[e.name.toLowerCase()]=e,e.layoutName&&(r=e),r&&(e.sectionRoot=r),e.subCategories)){var a,i=o(e.subCategories);try{for(i.s();!(a=i.n()).done;){var c=a.value;c.parent=e,n(c,r)}}catch(s){i.e(s)}finally{i.f()}}}function i(t){var e;if(t){var n=!1;if(t.subCategories){var r,a=o(t.subCategories);try{for(a.s();!(r=a.n()).done;){var c=r.value;i(c)&&(n=!0)}}catch(s){a.e(s)}finally{a.f()}}return(null===(e=t.categoryPersonalAccess)||void 0===e?void 0:e.MaterialWrite)&&(n=!0),t.canSomeChildrenWriteMaterial=n,n}}function c(){for(var e=0,n=Object.values(t.all);e<n.length;e++){var a=n[e];Object.setPrototypeOf(a,r["Category"].prototype)}}t.root=e,t.all={},n(e),i(e),c(),console.info("%cCategories prepared",a["consoleInit"],config.Dev.LogInitExtended?t.all:"")}},b591:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("6b54"),n("7f7f"),n("ac6a"),n("cadf"),n("06db"),n("8615");var r=n("6fb1"),a=n("a18c");function o(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=i(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function i(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){var n,i={},c=o(e);try{for(c.s();!(n=c.n()).done;){var s=n.value;i[s.id.toString()]=s}}catch(S){c.e(S)}finally{c.f()}var u,l=o(e);try{for(l.s();!(u=l.n()).done;){var f=u.value;if(f.parentId){var d=i[f.parentId.toString()];if(!d)continue;d.subMenuItems||(d.subMenuItems=[]),d.subMenuItems.push(f),f.parent=d}}}catch(S){l.e(S)}finally{l.f()}t.namedMenuItems={};for(var p=0,m=Object.values(i);p<m.length;p++){var b=m[p];b.name&&(t.namedMenuItems[b.name.toLowerCase()]=b)}var v,y=o(e);try{for(y.s();!(v=y.n()).done;){var g,h=v.value;if(h.routeName)h.to={name:h.routeName,params:null!==(g=h.routeParamsJson)&&void 0!==g?g:void 0},h.path=a["b"].resolve(h.to).href}}catch(S){y.e(S)}finally{y.f()}console.info("%cMenuItems prepared",r["consoleInit"],config.Dev.LogInitExtended?{named:t.namedMenuItems,all:e}:"")}},c4dc:function(t,e,n){"use strict";n("7f7f");var r=n("2b0e");e["a"]=function(t,e){t.all||(t.all={}),r["default"].set(t.all,e.name.toLowerCase(),e)}},c68c:function(t,e,n){"use strict";e["a"]=function(t){return function(e){return e?t.all[e.toLowerCase()]:null}}},c918:function(t,e,n){"use strict";var r=n("967e"),a=n.n(r),o=(n("96cf"),n("fa84")),i=n.n(o),c=n("dc0b"),s=n("f439"),u=n("ee33"),l=n("b7af"),f=n("6fb1");function d(){return d=i()(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("registerLayout",s["articlesLayout"]),e.commit("registerLayout",s["articles1Layout"]),e.commit("registerLayout",s["articles2Layout"]),e.commit("registerLayout",u["blogLayout"]),e.commit("registerLayout",l["forum0Layout"]),e.commit("registerLayout",l["forum1Layout"]),e.commit("registerLayout",l["forum2Layout"]),Object(c["registerLayoutsSite"])(e),console.info("%cLayouts registered",f["consoleInit"],config.Dev.LogInitExtended?e.state.all:"");case 9:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}e["a"]=function(t){return d.apply(this,arguments)}},da66:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("3956");function a(t){t.user=null,t.roles=["Unregistered"],r["i"].state.categories.root=null,r["i"].state.categories.all=null,r["i"].state.menu.namedMenuItems=null,r["i"].state.sections.allSections=null,r["i"].state.admin.showDeletedElements=!1}},e01c:function(t,e,n){"use strict";var r=n("4db1"),a=n.n(r);n("ac6a"),n("cadf"),n("06db"),n("8615");e["a"]=function(t){for(var e=[],n=0,r=Object.values(t.rootState.categories.all);n<r.length;n++){var o=r[n];if(o.layoutName){var i=t.getters.getLayout(o.layoutName);if(!i)continue;e.push.apply(e,a()(i.getRoutes(o))),i.setCategoryRoute(o)}}return e}},e1a7:function(t,e,n){"use strict";(function(t,r){n("551c"),n("06db"),n("097d");var a=n("6fb1");e["a"]=function(e,n){return t(r.Personal.GetMyUserInfo,{skipLock:null===n||void 0===n?void 0:n.skipLock,showErrorsNotifications:!1,blockErrorsNotifications:!0}).then((function(t){e.commit("setUserInfo",t.data)})).catch((function(){console.error("%cTokens removed",a["consoleTokens"]),Object(a["removeTokens"])()})).finally((function(){}))}}).call(this,n("b775")["default"],n("3a75")["default"])},e47b:function(t,e,n){"use strict";e["a"]={root:null,all:null}},e682:function(t,e,n){"use strict";var r=n("2e26");e["a"]={state:r["a"]}},e9e0:function(t,e,n){"use strict";var r=n("967e"),a=n.n(r),o=(n("7f7f"),n("96cf"),n("fa84")),i=n.n(o),c=n("6fb1"),s=n("3956"),u=n("2b0e");function l(){return l=i()(a.a.mark((function t(e){var r,o;return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.info("%cStart init store",c["consoleInit"]),e.state.initializeState=s["a"].Running,t.prev=2,t.prev=3,!Object(c["hasLongToken"])()){t.next=7;break}return t.next=7,e.dispatch("loadMyUserInfo");case 7:t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](3);case 11:return t.next=13,Object(c["getDynamicConfig"])();case 13:return r={Russian:"ru",English:"en-us"},u["default"].prototype.i18n.locale=r[config.Global.Locale],t.next=17,e.dispatch("loadAllCategories");case 17:return t.next=19,e.dispatch("registerAllLayouts");case 19:return t.next=21,e.dispatch("registerAllSectionsTypes");case 21:return t.next=23,e.dispatch("loadAllSections");case 23:return t.next=25,e.dispatch("setAllRoutes");case 25:return t.next=27,e.dispatch("loadAllMenuItems");case 27:Object(c["makeBreadcrumbs"])(),o=u["default"].prototype.$iconsSets[config.Global.IconsSet],o&&(u["default"].prototype.$iconsSet=o,u["default"].prototype.$q.iconSet.set(n("e556")("./".concat(o.name,".js")).default)),e.state.initializeState=s["a"].Done,t.next=37;break;case 33:t.prev=33,t.t1=t["catch"](2),console.error(t.t1),e.state.initializeState=s["a"].Error;case 37:case"end":return t.stop()}}),t,null,[[2,33],[3,9]])}))),l.apply(this,arguments)}e["a"]=function(t){return l.apply(this,arguments)}},f5d5:function(t,e,n){"use strict";e["a"]={namedMenuItems:null}},fa41:function(t,e,n){"use strict";e["a"]={all:null}},fe3e:function(t,e,n){"use strict";var r=n("967e"),a=n.n(r),o=(n("96cf"),n("fa84")),i=n.n(o),c=n("dc0b"),s=n("6fb1"),u=n("ee33"),l=n("166a");function f(){return f=i()(a.a.mark((function t(e){return a.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.commit("registerSectionType",u["postsSection"]),e.commit("registerSectionType",l["activitiesSection"]),Object(c["registerSectionsSite"])(e),console.info("%cSections types registered",s["consoleInit"],config.Dev.LogInitExtended?e.state.sectionsTypes:"");case 4:case"end":return t.stop()}}),t)}))),f.apply(this,arguments)}e["a"]=function(t){return f.apply(this,arguments)}}}]);