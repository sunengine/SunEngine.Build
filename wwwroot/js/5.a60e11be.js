(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"3f89":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SunPage",{staticClass:"register flex flex-center page-padding"},[e.done?n("q-banner",{staticClass:"bg-positive",scopedSlots:e._u([{key:"avatar",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Register.envelope,size:"2em"}})]},proxy:!0}])},[e._v("\n\t\t"+e._s(e.$tl("emailSent"))+"\n\t")]):n("div",{staticClass:"center-form q-gutter-y-xs"},[n("q-input",{ref:"userName",attrs:{label:e.$tl("userName"),rules:e.rules.userName},on:{keyup:e.checkUserNameInDb},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Register.user}})]},proxy:!0}],null,!1,807945482),model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}}),n("q-input",{ref:"email",attrs:{type:"email",label:e.$tl("email"),rules:e.rules.email},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Register.envelope}})]},proxy:!0}],null,!1,3455206197),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{ref:"password",attrs:{type:e.showPassword?"text":"password",label:e.$tl("password"),rules:e.rules.password},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Register.key}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.showPassword?e.$iconsSet.Register.eye:e.$iconsSet.Register.eyeSlash},on:{click:function(t){e.showPassword=!e.showPassword}}})]},proxy:!0}],null,!1,607452011),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("q-input",{ref:"password2",attrs:{type:e.showPassword2?"text":"password",label:e.$tl("password2"),rules:e.rules.password2},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Register.key}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.showPassword2?e.$iconsSet.Register.eye:e.$iconsSet.Register.eyeSlash},on:{click:function(t){e.showPassword2=!e.showPassword2}}})]},proxy:!0}],null,!1,572610233),model:{value:e.password2,callback:function(t){e.password2=t},expression:"password2"}}),e.registerConfirmText?n("div",{staticClass:"q-mb-lg q-mt-md flex align-center"},[n("q-toggle",{model:{value:e.acceptConfirm,callback:function(t){e.acceptConfirm=t},expression:"acceptConfirm"}}),n("div",{attrs:{id:"register__confirm-text"},domProps:{innerHTML:e._s(e.registerConfirmText)}})],1):e._e(),n("Captcha",{ref:"captcha",on:{getToken:function(t){return e.captchaToken=t}},model:{value:e.captchaText,callback:function(t){e.captchaText=t},expression:"captchaText"}}),n("q-btn",{class:{"send-btn":!0,"bg-grey":!!e.registerConfirmText&&!e.acceptConfirm},staticStyle:{width:"100%"},attrs:{disable:!!e.registerConfirmText&&!e.acceptConfirm,label:e.$tl("registerBtn"),loading:e.submitting},on:{click:e.register}},[n("LoaderSent",{attrs:{slot:"loading"},slot:"loading"},[e._v("\n\t\t\t\t"+e._s(e.$tl("registering"))+"\n\t\t\t")])],1)],1)],1)},r=[],a=n("9ff2"),i=a["a"],o=n("2877"),c=n("27f9"),l=n("0016"),u=n("9564"),m=n("9c40"),p=n("54e1"),f=n("eebe"),d=n.n(f),h=Object(o["a"])(i,s,r,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QInput:c["a"],QIcon:l["a"],QToggle:u["a"],QBtn:m["a"],QBanner:p["a"]})},"4fa5":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SunPage",{staticClass:"login flex flex-center page-padding"},[n("div",{staticClass:"center-form"},[n("q-form",{on:{submit:e.login}},[n("q-input",{ref:"nameOrEmail",attrs:{label:e.$tl("nameOrEmail"),rules:[function(t){return!!t||e.$tl("validation.nameOrEmail.required")}]},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Login.user}})]},proxy:!0}]),model:{value:e.nameOrEmail,callback:function(t){e.nameOrEmail=t},expression:"nameOrEmail"}}),n("q-input",{ref:"password",attrs:{type:e.showPassword?"text":"password",label:e.$tl("password"),rules:[function(t){return!!t||e.$tl("validation.password.required")}]},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.Login.key}})]},proxy:!0},{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.showPassword?e.$iconsSet.Login.eye:e.$iconsSet.Login.eyeSlash},on:{click:function(t){e.showPassword=!e.showPassword}}})]},proxy:!0}]),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("q-btn",{staticClass:"send-btn full-width",attrs:{type:"submit",label:e.$tl("enterBtn"),loading:e.submitting}},[n("LoaderSent",{attrs:{slot:"loading"},slot:"loading"},[e._v("\n\t\t\t\t\t"+e._s(e.$tl("entering"))+"\n\t\t\t\t")])],1),n("div",{staticClass:"text-center q-mt-lg"},[n("router-link",{attrs:{to:{name:"ResetPassword"}}},[n("q-icon",{staticClass:"q-mr-sm",attrs:{name:e.$iconsSet.Login.question}}),n("span",[e._v(e._s(e.$tl("forgotPassword")))])],1)],1)],1)],1)])},r=[],a=(n("a481"),n("7f7f"),n("e856")),i={name:"Login",mixins:[a["Page"]],props:{ret:{type:String,required:!1}},data:function(){return{nameOrEmail:null,password:null,submitting:!1,showPassword:!1}},methods:{login:function(){var e=this;this.$refs.nameOrEmail.validate(),this.$refs.password.validate(),this.$refs.nameOrEmail.hasError||this.$refs.password.hasError||(this.submitting=!0,this.$store.dispatch("login",{nameOrEmail:this.nameOrEmail,password:this.password}).then((function(t){try{e.ret&&"Login"!==e.$route.name?e.$router.replace(e.ret):e.$router.replace({name:"Home"})}catch(t){e.$router.replace({name:"Home"})}})).catch((function(t){console.log(t),e.submitting=!1,e.$errorNotify(t)})))}},created:function(){this.title=this.$tl("title")}},o=i,c=n("2877"),l=n("0378"),u=n("27f9"),m=n("0016"),p=n("9c40"),f=n("eebe"),d=n.n(f),h=Object(c["a"])(o,s,r,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QForm:l["a"],QInput:u["a"],QIcon:m["a"],QBtn:p["a"]})},"64ce":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-list",{staticClass:"login-register-menu sun-second-menu q-py-sm"},[n("q-item",{attrs:{to:{name:"Login",params:{ret:e.ret}}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.LoginRegisterMenu.signIn}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(e.$tl("enter")))])],1)],1),n("q-item",{attrs:{to:{name:"Register"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.LoginRegisterMenu.register}})],1),n("q-item-section",[n("q-item-label",[e._v(e._s(e.$tl("register")))])],1)],1)],1)},r=[],a={name:"LoginRegisterMenu",computed:{ret:function(){return this.$route.path}}},i=a,o=n("2877"),c=n("1c1c"),l=n("66e5"),u=n("4074"),m=n("0016"),p=n("0170"),f=n("eebe"),d=n.n(f),h=Object(o["a"])(i,s,r,!1,null,null,null);t["a"]=h.exports;d()(h,"components",{QList:c["a"],QItem:l["a"],QItemSection:u["a"],QIcon:m["a"],QItemLabel:p["a"]})},"9ff2":function(e,t,n){"use strict";(function(e,s){n("ac6a"),n("ac4d"),n("8a81"),n("5df3"),n("1c4c"),n("7f7f"),n("6b54"),n("06db");var r=n("4db1"),a=n.n(r),i=n("6fb1");function o(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=c(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var s=0,r=function(){};return{s:r,n:function(){return s>=e.length?{done:!0}:{done:!1,value:e[s++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){o=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(o)throw a}}}}function c(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,s=new Array(t);n<t;n++)s[n]=e[n];return s}t["a"]={name:"Register",components:{Captcha:e("comp","Captcha")},mixins:[s],data:function(){return{userName:"",email:"",password:"",password2:"",submitting:!1,done:!1,showPassword:!1,showPassword2:!1,userNameInDb:!1,captchaText:"",captchaToken:null,acceptConfirm:!1}},computed:{registerConfirmText:function(){return config.Register.ConfirmText},rules:function(){var e=this,t=i["passwordRules"].call(this);return{userName:i["userNameRules"].call(this),email:i["emailRules"].call(this),password:t,password2:[].concat(a()(t),[function(t){return e.password===e.password2||e.$t("Global.validation.password.passwordsNotEquals")}])}}},methods:{addTargetBlankOnLinks:function(){if(this.registerConfirmText){var e,t=document.getElementById("register__confirm-text"),n=t.getElementsByTagName("a"),s=o(n);try{for(s.s();!(e=s.n()).done;){var r=e.value;r.classList.add("link"),r.setAttribute("target","_blank")}}catch(a){s.e(a)}finally{s.f()}}},checkUserNameInDb:function(){clearTimeout(this.timeout),this.timeout=setTimeout(this.checkUserNameInDbDo,500)},checkUserNameInDbDo:function(){var e=this;this.$request(this.$Api.Auth.CheckUserNameInDb,{userName:this.userName}).then((function(t){e.userNameInDb=t.data.yes,e.$refs.userName.validate()}))},register:function(){var e=this;this.$refs.userName.validate(),this.$refs.email.validate(),this.$refs.password.validate(),this.$refs.password2.validate(),this.$refs.captcha.validate(),this.$refs.userName.hasError||this.$refs.email.hasError||this.$refs.password.hasError||this.$refs.password2.hasError||this.$refs.captcha.hasError||(this.submitting=!0,this.$request(this.$Api.Auth.Register,{UserName:this.userName,Email:this.email,Password:this.password,CaptchaToken:this.captchaToken,CaptchaText:this.captchaText}).then((function(){e.done=!0})).catch((function(t){var n,s;e.$errorNotify(t),e.submitting=!1,"CaptchaValidationError"===(null===t||void 0===t||null===(n=t.response)||void 0===n||null===(s=n.data)||void 0===s?void 0:s.code)&&e.$refs.captcha.GetToken()})))}},mounted:function(){this.addTargetBlankOnLinks()},created:function(){this.title=this.$tl("title")}}}).call(this,n("9bb5")["default"],n("7c53")["default"])},c877:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SunPage",{staticClass:"register-email-result flex middle page-padding"},[e.success?n("q-banner",{staticClass:"bg-positive text-white",scopedSlots:e._u([{key:"avatar",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.RegisterEmailResult.success,size:"2em"}})]},proxy:!0}],null,!1,3310080445)},[e._v("\n\t\t"+e._s(e.$tl("success"))+"\n\t\t"),n("a",{attrs:{href:e.$router.resolve({name:"Login"}).href},on:{click:function(t){return t.preventDefault(),function(){e.$router.push({name:"Home"}),e.$router.push({name:"Login"})}()}}},[e._v("\n\t\t\t"+e._s(e.$tl("enter")))]),e._v("\n\t\t.\n\t")]):n("q-banner",{staticClass:"bg-negative text-white",scopedSlots:e._u([{key:"avatar",fn:function(){return[n("q-icon",{attrs:{name:e.$iconsSet.RegisterEmailResult.failed,size:"2em"}})]},proxy:!0}])},[e._v("\n\t\t"+e._s(e.$tl("error"))+"\n\t")])],1)},r=[],a=n("e856"),i={name:"RegisterEmailResult",mixins:[a["Page"]],computed:{success:function(){return"ok"===this.$route.query["result"]}},created:function(){this.title=this.$tl("title")}},o=i,c=n("2877"),l=n("54e1"),u=n("0016"),m=n("eebe"),p=n.n(m),f=Object(c["a"])(o,s,r,!1,null,null,null);t["a"]=f.exports;p()(f,"components",{QBanner:l["a"],QIcon:u["a"]})},ea24:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-menu sun-second-menu"},[n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{to:{name:"User",params:{link:e.user.link}}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.UserMenu.profile}})],1),n("q-item-section",[n("q-item-label",[e._v("\n\t\t\t\t"+e._s(e.$tl("profile"))+"\n\t\t\t")])],1)],1),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{to:{name:"Personal"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.UserMenu.personal}})],1),n("q-item-section",[n("q-item-label",{attrs:{lines:1}},[e._v("\n\t\t\t\t"+e._s(e.$tl("yourAccount"))+"\n\t\t\t")])],1)],1),e.isAdmin?n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{to:{name:"AdminInformation"}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.UserMenu.admin}})],1),n("q-item-section",[n("q-item-label",[e._v("\n\t\t\t\t"+e._s(e.$tl("adminPanel"))+"\n\t\t\t")])],1)],1):e._e(),n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},nativeOn:{click:function(t){return e.logout()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:e.$iconsSet.UserMenu.signOut}})],1),n("q-item-section",[n("q-item-label",[e._v("\n\t\t\t\t"+e._s(e.$tl("exit"))+"\n\t\t\t")])],1)],1)],1)},r=[],a=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("06db"),n("456d"),n("c47a")),i=n.n(a),o=n("2f62");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={name:"UserMenu",computed:l({isAdmin:function(){return this.$store.state.auth.roles.some((function(e){return"Admin"===e}))}},Object(o["c"])({user:function(e){return e.auth.user}})),methods:{logout:function(){var e=this,t=this.$tl("logoutNotify");this.$store.dispatch("logout").then((function(){e.$q.notify({message:t,timeout:2e3,color:"info",position:"top"})}))}}},m=u,p=n("2877"),f=n("66e5"),d=n("4074"),h=n("0016"),g=n("0170"),v=n("7f67"),b=n("eebe"),w=n.n(b),$=Object(p["a"])(m,s,r,!1,null,null,null);t["a"]=$.exports;w()($,"components",{QItem:f["a"],QItemSection:d["a"],QIcon:h["a"],QItemLabel:g["a"]}),w()($,"directives",{ClosePopup:v["a"]})}}]);