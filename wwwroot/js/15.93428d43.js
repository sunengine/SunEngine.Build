(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{"0199":function(s,e,t){"use strict";(function(s){var a=t("6fb1");e["a"]={name:"ResetPassword",mixins:[s],data:function(){return{email:"",submitting:!1,start:!0,done:!1,captchaText:"",captchaToken:null}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Personal")},rules:function(){return a["emailRules"].call(this)}},methods:{send:function(){var s=this;this.$refs.email.validate(),this.$refs.captcha.validate(),this.$refs.email.hasError||this.$refs.captcha.hasError||(this.submitting=!0,this.$request(this.$Api.Account.ResetPasswordSendEmail,{Email:this.email,CaptchaToken:this.captchaToken,CaptchaText:this.captchaText}).then((function(){s.done=!0,s.submitting=!1})).catch((function(e){var t,a;s.$errorNotify(e),s.submitting=!1,"CaptchaValidationError"===(null===e||void 0===e||null===(t=e.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.code)&&s.$refs.captcha.GetToken()})))}},beforeCreate:function(){this.$config.components.Captcha=t("a996").Captcha},created:function(){this.title=this.$tl("title")}}}).call(this,t("7c53")["default"])},"0c79":function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"change-password flex column page-padding"},[t("div",{staticClass:"flex flex-center"},[t("PageHeader",{attrs:{title:s.title}})],1),t("div",{staticClass:"flex flex-center grow"},[t("div",{staticClass:"center-form"},[t("q-input",{ref:"passwordOld",staticClass:"change-password__password-old",attrs:{type:s.showPasswordOld?"text":"password",label:s.$tl("passwordOld"),rules:s.rules.passwordOld},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangePassword.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPasswordOld?s.$iconsSet.ChangePassword.eye:s.$iconsSet.ChangePassword.eyeSlash},on:{click:function(e){s.showPasswordOld=!s.showPasswordOld}}})]},proxy:!0}]),model:{value:s.passwordOld,callback:function(e){s.passwordOld=e},expression:"passwordOld"}}),t("q-input",{ref:"password",staticClass:"change-password__password1",attrs:{type:s.showPassword?"text":"password",label:s.$tl("password"),rules:s.rules.password},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangePassword.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPassword?s.$iconsSet.ChangePassword.eye:s.$iconsSet.ChangePassword.eyeSlash},on:{click:function(e){s.showPassword=!s.showPassword}}})]},proxy:!0}]),model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),t("q-input",{ref:"password2",staticClass:"change-password__password2",attrs:{type:s.showPassword2?"text":"password",label:s.$tl("password2"),rules:s.rules.password2},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangePassword.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPassword2?s.$iconsSet.ChangePassword.eye:s.$iconsSet.ChangePassword.eyeSlash},on:{click:function(e){s.showPassword2=!s.showPassword2}}})]},proxy:!0}]),model:{value:s.password2,callback:function(e){s.password2=e},expression:"password2"}}),t("q-btn",{staticClass:"send-btn q-mt-lg full-width",attrs:{"no-caps":"",icon:s.$iconsSet.ChangePassword.save,label:s.$tl("changeBtn"),loading:s.submitting},on:{click:s.changePassword}},[t("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1)])])},n=[],r=t("4db1"),o=t.n(r),i=t("e856"),l=t("6fb1"),c={name:"ChangePassword",mixins:[i["Page"]],data:function(){return{passwordOld:"",password:"",password2:"",submitting:!1,showPasswordOld:!1,showPassword:!1,showPassword2:!1}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Personal")},rules:function(){var s=this,e=l["passwordRules"].call(this);return{passwordOld:[function(e){return!!e||s.$t("Global.validation.password.passwordOld")}],password:e,password2:[].concat(o()(e),[function(e){return s.password===s.password2||s.$t("Global.validation.password.passwordsNotEquals")}])}}},methods:{changePassword:function(){var s=this;this.$refs.passwordOld.validate(),this.$refs.password.validate(),this.$refs.password2.validate(),this.$refs.passwordOld.hasError||this.$refs.password.hasError||this.$refs.password2.hasError||(this.submitting=!0,this.$request(this.$Api.Account.ChangePassword,{passwordOld:this.passwordOld,passwordNew:this.password}).then((function(e){s.$successNotify(),s.submitting=!1,s.$router.back()})).catch((function(e){s.$errorNotify(e.response.data),s.submitting=!1})))}},created:function(){this.title=this.$tl("title")}},d=c,u=t("2877"),p=t("27f9"),w=t("0016"),h=t("9c40"),f=t("eebe"),m=t.n(f),g=Object(u["a"])(d,a,n,!1,null,null,null);e["a"]=g.exports;m()(g,"components",{QInput:p["a"],QIcon:w["a"],QBtn:h["a"]})},"697e":function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"change-email flex column page-padding"},[t("div",{staticClass:"flex flex-center"},[t("PageHeader",{attrs:{title:s.title}})],1),t("div",{staticClass:"flex flex-center grow"},[s.done?t("q-banner",{staticClass:"change-email__success-notify bg-positive text-white",scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangeEmail.envelope,size:"2em"}})]},proxy:!0}])},[s._v("\n\t\t\t"+s._s(s.$tl("successNotify"))+"\n\t\t")]):t("div",{staticClass:"center-form"},[t("q-input",{ref:"password",staticClass:"change-email__password",attrs:{type:s.showPassword?"text":"password",label:s.$tl("password"),rules:s.rules.password},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangeEmail.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPassword?s.$iconsSet.ChangeEmail.eye:s.$iconsSet.ChangeEmail.eyeSlash},on:{click:function(e){s.showPassword=!s.showPassword}}})]},proxy:!0}],null,!1,4250325864),model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),t("q-input",{ref:"email",staticClass:"change-email__email",attrs:{type:"email",label:s.$tl("newEmail"),rules:s.rules.email},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangeEmail.envelope}})]},proxy:!0}],null,!1,341257718),model:{value:s.email,callback:function(e){s.email=e},expression:"email"}}),t("q-btn",{staticClass:"send-btn q-mt-lg full-width",attrs:{"no-caps":"",icon:s.$iconsSet.ChangeEmail.save,label:s.$tl("saveBtn"),loading:s.submitting},on:{click:s.save}},[t("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1)],1)])},n=[],r=t("967e"),o=t.n(r),i=(t("96cf"),t("fa84")),l=t.n(i),c=t("e856"),d=t("6fb1"),u={name:"ChangeEmail",mixins:[c["Page"]],data:function(){return{email:"",password:"",submitting:!1,done:!1,showPassword:!1}},computed:{breadcrumbsCategory:function(){return this.$getBreadcrumbs("Personal")},rules:function(){var s=this;return{password:[function(e){return!!e||s.$t("Global.validation.password.required")}],email:d["emailRules"].call(this)}}},methods:{save:function(){var s=this;return l()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s.$refs.email.validate(),s.$refs.password.validate(),!s.$refs.email.hasError&&!s.$refs.password.hasError){e.next=4;break}return e.abrupt("return");case 4:return s.submitting=!0,e.next=7,s.$request(s.$Api.Account.ChangeEmail,{password:s.password,email:s.email}).then((function(){s.done=!0})).catch((function(e){s.submitting=!1,s.$errorNotify(e)}));case 7:case"end":return e.stop()}}),e)})))()}},created:function(){var s=this;return l()(o.a.mark((function e(){return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s.title=s.$tl("title");case 1:case"end":return e.stop()}}),e)})))()}},p=u,w=t("2877"),h=t("27f9"),f=t("0016"),m=t("9c40"),g=t("54e1"),$=t("eebe"),b=t.n($),v=Object(w["a"])(p,a,n,!1,null,null,null);e["a"]=v.exports;b()(v,"components",{QInput:h["a"],QIcon:f["a"],QBtn:m["a"],QBanner:g["a"]})},"95d3":function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"reset-password-set-new flex middle page-padding"},[s.done?t("q-banner",{staticClass:"reset-password-set-new__banner-success bg-positive text-white",scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPasswordSetNew.key,size:"2em"}})]},proxy:!0}])},[s._v("\n\t\t"+s._s(s.$tl("successMessage"))+"\n\t\t"),t("router-link",{attrs:{to:{name:"Login"}}},[s._v(s._s(s.$tl("enter")))]),s._v("\n\t\t.\n\t")],1):t("div",{staticClass:"center-form"},[t("q-input",{ref:"password",staticClass:"reset-password-set-new__password",attrs:{type:s.showPassword?"text":"password",label:s.$tl("password"),rules:s.rules.password},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPasswordSetNew.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPassword?s.$iconsSet.ResetPasswordSetNew.eye:s.$iconsSet.ResetPasswordSetNew.eyeSlash},on:{click:function(e){s.showPassword=!s.showPassword}}})]},proxy:!0}],null,!1,379489398),model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}),t("q-input",{ref:"password2",staticClass:"reset-password-set-new__password2",attrs:{type:s.showPassword2?"text":"password",label:s.$tl("password2"),rules:s.rules.password2},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPasswordSetNew.key}})]},proxy:!0},{key:"append",fn:function(){return[t("q-icon",{staticClass:"cursor-pointer",attrs:{name:s.showPassword2?s.$iconsSet.ResetPasswordSetNew.eye:s.$iconsSet.ResetPasswordSetNew.eyeSlash},on:{click:function(e){s.showPassword2=!s.showPassword2}}})]},proxy:!0}],null,!1,3696774436),model:{value:s.password2,callback:function(e){s.password2=e},expression:"password2"}}),t("q-btn",{staticClass:"q-mt-md send-btn full-width",attrs:{label:s.$tl("saveBtn"),loading:s.submitting},on:{click:s.changePassword}},[t("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1)],1)},n=[],r=t("4db1"),o=t.n(r),i=t("e856"),l=t("6fb1"),c={name:"ResetPasswordSetNew",mixins:[i["Page"]],data:function(){return{password:"",password2:"",submitting:!1,done:!1,showPassword:!1,showPassword2:!1}},computed:{rules:function(){var s=this,e=l["passwordRules"].call(this);return{password:e,password2:[].concat(o()(e),[function(e){return s.password===s.password2||s.$t("Global.validation.password.passwordsNotEquals")}])}}},methods:{changePassword:function(){var s=this;this.$refs.password.validate(),this.$refs.password2.validate(),this.$refs.password.hasError||this.$refs.password2.hasError||(this.submitting=!0,this.$request(this.$Api.Account.ResetPasswordSetNew,{uid:this.$route.query.uid,token:this.$route.query.token,newPassword:this.password}).then((function(){s.done=!0})).catch((function(e){s.$errorNotify(e.response.data),s.submitting=!1})))}},created:function(){this.title=this.$tl("title")}},d=c,u=t("2877"),p=t("27f9"),w=t("0016"),h=t("9c40"),f=t("54e1"),m=t("eebe"),g=t.n(m),$=Object(u["a"])(d,a,n,!1,null,null,null);e["a"]=$.exports;g()($,"components",{QInput:p["a"],QIcon:w["a"],QBtn:h["a"],QBanner:f["a"]})},"9d71":function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"reset-password-failed flex middle page-padding"},[t("q-banner",{staticClass:"bg-negative text-white",attrs:{rounded:""},scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPasswordFailed.failed,size:"2em"}})]},proxy:!0}])},[s._v("\n\t\t"+s._s(s.$tl("message"))+"\n\t")])],1)},n=[],r=t("e856"),o={name:"ResetPasswordFailed",mixins:[r["Page"]],created:function(){this.title=this.$tl("title")}},i=o,l=t("2877"),c=t("54e1"),d=t("0016"),u=t("eebe"),p=t.n(u),w=Object(l["a"])(i,a,n,!1,null,null,null);e["a"]=w.exports;p()(w,"components",{QBanner:c["a"],QIcon:d["a"]})},cf14:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"change-email-result flex middle page-padding"},[s.success?t("q-banner",{staticClass:"change-email-result__success-banner bg-positive text-white",scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangeEmailResult.success,size:"2em"}})]},proxy:!0}],null,!1,1146822770)},[s._v("\n\t\t"+s._s(s.$tl("success"))+"\n\t")]):t("q-banner",{staticClass:"change-email-result__error-banner bg-negative text-white",scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ChangeEmailResult.failed,size:"2em"}})]},proxy:!0}])},[s._v("\n\t\t"+s._s(s.$tl("error"))+"\n\t")])],1)},n=[],r=t("e856"),o={name:"ChangeEmailResult",mixins:[r["Page"]],computed:{success:function(){return"ok"===this.$route.query["result"]}},created:function(){this.title=this.$tl("title")}},i=o,l=t("2877"),c=t("54e1"),d=t("0016"),u=t("eebe"),p=t.n(u),w=Object(l["a"])(i,a,n,!1,null,null,null);e["a"]=w.exports;p()(w,"components",{QBanner:c["a"],QIcon:d["a"]})},ed28a:function(s,e,t){"use strict";var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("SunPage",{staticClass:"reset-password flex middle page-padding"},[s.done?t("q-banner",{staticClass:"reset-password__banner-success bg-positive text-white",scopedSlots:s._u([{key:"avatar",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPassword.envelope,size:"2em"}})]},proxy:!0}])},[s._v("\n\t\t"+s._s(s.$tl("success"))+"\n\t")]):t("div",{staticClass:"center-form q-gutter-y-sm"},[t("q-input",{ref:"email",staticClass:"reset-password__email",attrs:{type:"email",label:s.$tl("email"),rules:s.rules},scopedSlots:s._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:s.$iconsSet.ResetPassword.envelope}})]},proxy:!0}],null,!1,3655413910),model:{value:s.email,callback:function(e){s.email=e},expression:"email"}}),t("Captcha",{ref:"captcha",on:{getToken:function(e){return s.captchaToken=e}},model:{value:s.captchaText,callback:function(e){s.captchaText=e},expression:"captchaText"}}),t("q-btn",{staticClass:"send-btn full-width",attrs:{label:s.$tl("resetPasswordBtn"),loading:s.submitting},on:{click:s.send}},[t("LoaderSent",{attrs:{slot:"loading"},slot:"loading"})],1)],1)],1)},n=[],r=t("0199"),o=r["a"],i=t("2877"),l=t("27f9"),c=t("0016"),d=t("9c40"),u=t("54e1"),p=t("eebe"),w=t.n(p),h=Object(i["a"])(o,a,n,!1,null,null,null);e["a"]=h.exports;w()(h,"components",{QInput:l["a"],QIcon:c["a"],QBtn:d["a"],QBanner:u["a"]})}}]);