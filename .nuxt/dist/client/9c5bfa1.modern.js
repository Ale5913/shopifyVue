(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{378:function(e,t,l){var content=l(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(6).default)("01bddff6",content,!0,{sourceMap:!1})},429:function(e,t,l){"use strict";l(378)},430:function(e,t,l){var n=l(5)(!1);n.push([e.i,".billing-addr[data-v-7dc83e79]{color:var(--c-black)}.billing-addr p[data-v-7dc83e79]{margin:0;line-height:1.43}.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:20px}@media(max-width:1023px){.billing-addr p.billing-phone[data-v-7dc83e79]{margin-top:15px}}.billing-addr p.billing-phone>a[data-v-7dc83e79]{display:inline-flex;align-items:center;color:var(--c-black)}.billing-addr p.billing-phone>a .sf-icon[data-v-7dc83e79]{margin-right:5px}.billing-addr p.billing-phone>a svg path[data-v-7dc83e79]{transition:all .3s ease 0s}.billing-addr p.billing-phone>a[data-v-7dc83e79]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}",""]),e.exports=n},436:function(e,t,l){"use strict";var n=l(9),r={name:"UserBillingAddress",props:{address:{default:{},type:Object}},components:{SfIcon:n.a}},o=(l(429),l(0)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"billing-addr",attrs:{address:e.address}},[l("section",[e.address.name?l("p",[e._v(e._s(e.address.name))]):e._e(),e._v(" "),e.address.address2||e.address.company?l("p",[e._v(e._s(e.address.address2)),e.address.address2?l("span",[e._v(",")]):e._e(),e._v(" "+e._s(e.address.company))]):e._e(),e._v(" "),e.address.formattedArea?l("p",[e._v(e._s(e.address.formattedArea))]):e._e(),e._v(" "),e.address.zip?l("p",[e._v(e._s(e.address.zip))]):e._e(),e._v(" "),e.address.phone?l("p",{staticClass:"billing-phone"},[l("a",{attrs:{href:"tel:"+e.address.phone}},[l("SfIcon",{attrs:{size:"18px",viewBox:"0 0 18 18",icon:"phone"}}),e._v(" "+e._s(e.address.phone))],1)]):e._e()])])}),[],!1,null,"7dc83e79",null);t.a=component.exports},437:function(e,t,l){"use strict";l(10);var n=l(7),r=(l(36),l(170)),o=l(12),d=l(328),c=l(322),m=l(56),f=l(42),v=l(1);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,l)}return t}function h(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}Object(f.c)("required",h(h({},m.g),{},{message:"This field is required"})),Object(f.c)("min",h(h({},m.d),{},{message:"The field should have at least {length} characters"})),Object(f.c)("max",h(h({},m.c),{},{message:"The field should have maximum {length} characters"})),Object(f.c)("oneOf",h(h({},m.e),{},{message:"Invalid country"})),Object(f.c)("regex",h(h({},m.f),{},{message:"Invalid phone number"}));var y={name:"BillingAddressForm",components:{SfInput:r.a,SfButton:o.a,SfSelect:d.a,SfCheckbox:c.a,ValidationProvider:f.b,ValidationObserver:f.a},props:{address:{type:Object,default:()=>({id:Math.random().toString().substr(2),firstName:"",lastName:"",streetName:"",apartment:"",city:"",state:"",postalCode:"",country:"",phone:"",company:"",isDefault:!1})},isNew:{type:Boolean,required:!0}},setup(e,t){var{emit:l}=t,form=Object(v.ref)({id:e.address.id,firstName:e.address.firstName,lastName:e.address.lastName,streetName:e.address.address1,apartment:e.address.address2,city:e.address.city,state:e.address.province,postalCode:e.address.zip,country:"United States",company:e.address.company,phone:e.address.phone,isDefault:e.address.isDefault});return{form:form,submitForm:()=>{l("submit",{form:form,onComplete:()=>{},onError:()=>{}})},provience:[{name:"Alabama",label:"Alabama"},{name:"American Samoa",label:"American Samoa"},{name:"Arizona",label:"Arizona"},{name:"Arkansas",label:"Arkansas"},{name:"Armed Forces Americas",label:"Armed Forces Americas"},{name:"Armed Forces Europe",label:"Armed Forces Europe"},{name:"Armed Forces Pacific",label:"Armed Forces Pacific"},{name:"California",label:"California"},{name:"Colorado",label:"Colorado"},{name:"Connecticut",label:"Connecticut"},{name:"Delaware",label:"Delaware"},{name:"District of Columbia",label:"District of Columbia"},{name:"Federated States of Micronesia",label:"Federated States of Micronesia"},{name:"Florida",label:"Florida"},{name:"Georgia",label:"Georgia"},{name:"Guam",label:"Guam"},{name:"Hawaii",label:"Hawaii"},{name:"Idaho",label:"Idaho"},{name:"Illinois",label:"Illinois"},{name:"Indiana",label:"Indiana"},{name:"Iowa",label:"Iowa"},{name:"Kansas",label:"Kansas"},{name:"Kentucky",label:"Kentucky"},{name:"Louisiana",label:"Louisiana"},{name:"Maine",label:"Maine"},{name:"Marshall Islands",label:"Marshall Islands"},{name:"Maryland",label:"Maryland"},{name:"Massachusetts",label:"Massachusetts"},{name:"Michigan",label:"Michigan"},{name:"Minnesota",label:"Minnesota"},{name:"Mississippi",label:"Mississippi"},{name:"Missouri",label:"Missouri"},{name:"Montana",label:"Montana"},{name:"Nebraska",label:"Nebraska"},{name:"Nevada",label:"Nevada"},{name:"New Hampshire",label:"New Hampshire"},{name:"New Jersey",label:"New Jersey"},{name:"New Mexico",label:"New Mexico"},{name:"New York",label:"New York"},{name:"North Carolina",label:"North Carolina"},{name:"North Dakota",label:"North Dakota"},{name:"Northern Mariana Islands",label:"Northern Mariana Islands"},{name:"Ohio",label:"Ohio"},{name:"Oklahoma",label:"Oklahoma"},{name:"Oregon",label:"Oregon"},{name:"Palau",label:"Palau"},{name:"Pennsylvania",label:"Pennsylvania"},{name:"Puerto Rico",label:"Puerto Rico"},{name:"Rhode Island",label:"Rhode Island"},{name:"South Carolina",label:"South Carolina"},{name:"South Dakota",label:"South Dakota"},{name:"Tennessee",label:"Tennessee"},{name:"Texas",label:"Texas"},{name:"Utah",label:"Utah"},{name:"Vermont",label:"Vermont"},{name:"Virgin Islands",label:"U.S. Virgin Islands"},{name:"Virginia",label:"Virginia"},{name:"Washington",label:"Washington"},{name:"West Virginia",label:"West Virginia"},{name:"Wisconsin",label:"Wisconsin"},{name:"Wyoming",label:"Wyoming"}]}}},x=l(0),component=Object(x.a)(y,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"my_account_content container-small"},[l("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.handleSubmit;return[l("form",{staticClass:"form",attrs:{id:"billing-details-form"},on:{submit:function(t){return t.preventDefault(),n(e.submitForm)}}},[l("div",{staticClass:"row"},[l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_firstName",name:"firstName",label:"First Name",valid:!n[0],errorMessage:n[0]},model:{value:e.form.firstName,callback:function(t){e.$set(e.form,"firstName",t)},expression:"form.firstName"}})]}}],null,!0)}),e._v(" "),l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_lastName",name:"lastName",label:"Last Name",valid:!n[0],errorMessage:n[0]},model:{value:e.form.lastName,callback:function(t){e.$set(e.form,"lastName",t)},expression:"form.lastName"}})]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"row"},[l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:5",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_streetName",name:"streetName",label:"Street Name",valid:!n[0],errorMessage:n[0]},model:{value:e.form.streetName,callback:function(t){e.$set(e.form,"streetName",t)},expression:"form.streetName"}})]}}],null,!0)}),e._v(" "),l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:1",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_apartment",name:"apartment",label:"House/Apartment number",valid:!n[0],errorMessage:n[0]},model:{value:e.form.apartment,callback:function(t){e.$set(e.form,"apartment",t)},expression:"form.apartment"}})]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"row"},[l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:2",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_city",name:"city",label:"City",valid:!n[0],errorMessage:n[0]},model:{value:e.form.city,callback:function(t){e.$set(e.form,"city",t)},expression:"form.city"}})]}}],null,!0)}),e._v(" "),l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|oneOf:"+e.provience.map((function(e){return e.name})).join(",")},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfSelect",{staticClass:"form__select sf-select--underlined form__element",attrs:{"data-cy":"billing-details-input_state",name:"state",label:"State/Province",valid:!n[0],errorMessage:n[0]},model:{value:e.form.state,callback:function(t){e.$set(e.form,"state",t)},expression:"form.state"}},e._l(e.provience,(function(t){var n=t.name,label=t.label;return l("SfSelectOption",{key:n,attrs:{value:n}},[e._v("\n              "+e._s(label)+"\n            ")])})),1)]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"row"},[l("ValidationProvider",{staticClass:"col-6",attrs:{rules:"required|min:4",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_zipCode",name:"zipCode",label:"Zipcode",valid:!n[0],errorMessage:n[0]},model:{value:e.form.postalCode,callback:function(t){e.$set(e.form,"postalCode",t)},expression:"form.postalCode"}})]}}],null,!0)}),e._v(" "),l("ValidationProvider",{staticClass:"col-6",attrs:{tag:"div"}},[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_company",name:"company",label:"Company",tag:"div"},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})],1),e._v(" "),l("ValidationProvider",{staticClass:"col-12",attrs:{rules:"required|min:8|max:15|regex:^(\\+?\\d[0-9]+)$",tag:"div"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[l("SfInput",{staticClass:"form__element",attrs:{"data-cy":"billing-details-input_phoneNumber",name:"phone",label:"Phone number",valid:!n[0],errorMessage:n[0]},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})]}}],null,!0)})],1),e._v(" "),l("div",{staticClass:"my-account-bottom-action-wrap"},[l("div",{staticClass:"form__button_wrap"},[l("SfButton",{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_update"},nativeOn:{click:function(t){return e.scrollToTop()}}},[e._v("\n            "+e._s(e.isNew?"Add To My Address Book":"Update My Address Book")+"\n          ")])],1),e._v(" "),l("div",{staticClass:"form__button_wrap"},[l("SfButton",{staticClass:"form__button",attrs:{"data-cy":"billing-details-btn_cancel"},on:{click:function(t){e.$parent.edittingAddress=!1,e.scrollToTop()}}},[e._v("Cancel")])],1)])])]}}])})],1)}),[],!1,null,null,null);t.a=component.exports},513:function(e,t,l){var content=l(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(6).default)("ed832812",content,!0,{sourceMap:!1})},656:function(e,t,l){"use strict";l(513)},657:function(e,t,l){var n=l(5)(!1);n.push([e.i,".billing-list[data-v-6983b80c]{display:flex;flex-wrap:wrap;margin-left:-10px;margin-right:-10px}.billing-list .billing[data-v-6983b80c]{padding-left:10px;padding-right:10px;flex:0 0 50%;max-width:50%;min-height:180px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]{flex:0 0 100%;max-width:100%}}.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:20px}@media(max-width:767px){.billing-list .billing[data-v-6983b80c]:nth-child(n+3){margin-top:0}}@media(max-width:767px){.billing-list .billing+.billing[data-v-6983b80c]{margin-top:20px}}.billing-list .billing .billing__wrap[data-v-6983b80c]{border:1px solid var(--_c-gray-DDDDDD);border-radius:6px;padding:20px 15px 15px 20px;height:100%;display:flex;flex-direction:column;justify-content:space-between}.billing-list .billing.add-address-btn .billing__wrap[data-v-6983b80c]{padding:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer}.billing-list .billing.add-address-btn .billing__wrap:hover .sf-button[data-v-6983b80c]{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]{color:var(--c-black);--icon-color:var(--c-black);text-decoration:none;display:flex;align-items:center;font-weight:400;transition:all .3s ease 0s}.billing-list .billing.add-address-btn .sf-button[data-v-6983b80c]:hover{color:var(--c-primary);--icon-color:var(--c-primary)}.billing-list .billing.add-address-btn .sf-button .sf-icon[data-v-6983b80c]{width:21px;height:21px;margin-right:10px}.billing-list .billing.add-address-btn .sf-button .sf-icon svg path[data-v-6983b80c]{transition:all .3s ease 0s}.billing__actions[data-v-6983b80c]{display:flex;justify-content:flex-end;margin-top:28px}@media(max-width:1023px){.billing__actions[data-v-6983b80c]{margin-top:10px}}.billing__actions .sf-button[data-v-6983b80c]{color:var(--c-primary);font-size:12px;transition:all .3s ease 0s}.billing__actions .sf-button+.sf-button[data-v-6983b80c]{border-left:1px solid var(--_c-gray-888888);margin-left:10px;padding-left:10px}.billing__actions .sf-button[data-v-6983b80c]:hover{color:var(--_c-black-171717)}.address-loader[data-v-6983b80c]{margin:100px 0}",""]),e.exports=n},695:function(e,t,l){"use strict";l.r(t);var n=l(4),r=l(12),o=l(9),d=l(75),c=l(336),m=l(335),f=l(436),v=l(437),_=l(11),h=l(1),y=l(8),x=l(95),C={name:"AdressBook",components:{SfButton:r.a,SfIcon:o.a,SfHeading:d.a,SfLoader:c.a,SfNotification:m.a,UserBillingAddress:f.a,BillingAddressForm:v.a},props:{title:{type:String,default:"Address Book"}},data:()=>({visible:!1,addressToRemove:{}}),methods:{ConfirmRemove(address){this.visible=!0,this.addressToRemove=address},handleRemove(address){var e=this;return Object(n.a)((function*(){e.isLoadervisible=!0,yield e.removeAddress(address).then((()=>{e.visible=!1}))}))()}},setup(){var{billing:e,load:t,addAddress:l,deleteAddress:r,updateAddress:o,loading:d}=Object(_.k)(),c=Object(h.computed)((()=>_.o.getAddresses(e.value))),m=Object(h.ref)(!1),f=Object(h.ref)(void 0),v=Object(h.computed)((()=>!f.value)),{send:C}=Object(x.a)(),S=function(){var l=Object(n.a)((function*(address){return yield r({address:address}).then((()=>{e.value?(t(),C({key:"address_removed",message:"Address has been removed successfully",type:"success",title:"Address removed!",icon:"check"})):C({key:"address_removed",message:"Something went wrong, please retry",type:"danger",title:"Remove address failed!"})}))}));return function(e){return l.apply(this,arguments)}}(),k=function(){var r=Object(n.a)((function*(n){var{form:form,onComplete:r,onError:d}=n;try{var c=v.value?l:o,_="Addressbook updated successfully";v.value&&(_="Address added successfully");var data=yield c({address:form.value}).then((()=>{e.value?(t(),C({key:"address_success",message:_,type:"success",title:"Success!",icon:"check"})):C({key:"address_failed",message:"Somethig went wrong, please retry",type:"danger",title:"Failed!"})}));m.value=!1,f.value=void 0,yield r(data)}catch(e){d(e)}}));return function(e){return r.apply(this,arguments)}}();return Object(y.onSSR)(Object(n.a)((function*(){yield t()}))),{changeAddress:function(){var address=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;f.value=address,m.value=!0},updateAddress:o,removeAddress:S,saveAddress:k,userBillingGetters:_.o,addresses:c,edittingAddress:m,activeAddress:f,isNewAddress:v,loading:d}}},S=(l(656),l(0)),component=Object(S.a)(C,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"my_account_content_wrap"},[l("div",{staticClass:"my_accoutn_title_wrap"},[l("SfHeading",{staticClass:"my_accoutn_title",attrs:{level:1,title:e.title}})],1),e._v(" "),e.edittingAddress?l("div",{staticClass:"tab-orphan"},[l("div",{attrs:{"data-cy":"billing-details-tab_change"}},[l("BillingAddressForm",{attrs:{address:e.activeAddress,isNew:e.isNewAddress},on:{submit:e.saveAddress}})],1)]):l("div",{staticClass:"tab-orphan"},[l("transition",{attrs:{name:"sf-collapse-top",mode:"out-in"}},[l("div",{staticClass:"notifications"},[e.loading?e._e():l("SfNotification",{attrs:{visible:e.visible,title:"Are you sure?",message:"Are you sure you would like to remove this address from your account?",type:"secondary"},scopedSlots:e._u([{key:"action",fn:function(){return[l("div",{staticClass:"button-wrap"},[l("SfButton",{on:{click:function(t){return e.handleRemove(e.addressToRemove)}}},[e._v("Yes")]),e._v(" "),l("SfButton",{on:{click:function(t){e.visible=!1}}},[e._v("Cancel")])],1)]},proxy:!0},{key:"close",fn:function(){return[l("div")]},proxy:!0}],null,!1,1994956572)})],1)]),e._v(" "),e.loading?l("SfLoader",{staticClass:"address-loader",class:{loading:e.loading},attrs:{loading:e.loading}},[l("div")]):e._e(),e._v(" "),e.loading?e._e():l("div",{attrs:{"data-cy":"billing-details-tab_details"}},[l("div",{staticClass:"billing-list"},[e._l(e.addresses,(function(address){return l("div",{key:e.userBillingGetters.getId(address),staticClass:"billing"},[l("div",{staticClass:"billing__wrap"},[l("div",{staticClass:"billing__content"},[l("div",{staticClass:"billing__address"},[l("UserBillingAddress",{attrs:{address:address}})],1)]),e._v(" "),l("div",{staticClass:"billing__actions"},[l("SfButton",{staticClass:" sf-button--text",attrs:{"data-cy":"billing-details-btn_change"},on:{click:function(t){e.changeAddress(address),e.scrollToTop()}}},[e._v("\n                Edit\n              ")]),e._v(" "),l("SfButton",{staticClass:"billing__button-delete sf-button--text",attrs:{"data-cy":"billing-details-btn_delete"},on:{click:function(t){return e.ConfirmRemove(address)}}},[e._v("\n                Delete\n              ")])],1)])])})),e._v(" "),l("div",{staticClass:"billing add-address-btn"},[l("div",{staticClass:"billing__wrap",on:{click:function(t){e.changeAddress(),e.scrollToTop()}}},[l("SfButton",{staticClass:"action-button sf-button--text",attrs:{"data-cy":"billing-details-btn_add"}},[l("SfIcon",{attrs:{icon:"plus"}}),e._v("\n              Add Address\n            ")],1)],1)])],2)])],1)])}),[],!1,null,"6983b80c",null);t.default=component.exports}}]);