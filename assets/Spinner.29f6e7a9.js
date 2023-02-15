import{d as f,I as h,_ as p,r as d,o as a,c as l,f as r,t as y,F as w,l as C,k as c,v as u,a as n,w as v,n as g,b,q as M}from"./index.23bbb581.js";const _=f({name:"BaseTextInput",components:{Icon:h},data:()=>({isPasswordInput:!0}),props:{label:{type:String,required:!0},placeholder:{type:String,required:!0},modelValue:{type:String},maxlength:{type:Number,required:!1},type:{type:String,required:!0,default:"text"},resetPassword:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},inputAttributes:{type:Object,default:{}}},methods:{updateModelValue(e){this.$emit("update:modelValue",e.target.value)},togglePasswordVisibility(){var o;const e=(o=document==null?void 0:document.querySelector(".password__toggler"))==null?void 0:o.previousElementSibling;(e==null?void 0:e.getAttribute("type"))==="password"?(e==null||e.setAttribute("type","text"),this.isPasswordInput=!1):(e==null||e.setAttribute("type","password"),this.isPasswordInput=!0)}},computed:{isPassword(){return this.type.toLowerCase().trim()==="password"},passwordField(){return this.isPassword?"password":"text"}}});const V={class:"form__field"},N=["for"],I={class:"password__input__field"},L=["type","id","placeholder","value"],k={key:0,class:"forgotten_password"},P=["type","id","placeholder","value","maxlength"];function z(e,t,o,A,H,D){const s=d("Icon"),m=d("RouterLink");return a(),l("div",V,[r("label",{for:e.label},y(e.label),9,N),e.isPassword?(a(),l(w,{key:0},[r("div",I,[r("input",C({type:e.passwordField,id:e.label,placeholder:e.placeholder,onInput:t[0]||(t[0]=(...i)=>e.updateModelValue&&e.updateModelValue(...i)),value:e.modelValue},e.inputAttributes),null,16,L),c(n(s,{icon:"mdi:eye-off-outline",class:"password__toggler",onClick:e.togglePasswordVisibility},null,8,["onClick"]),[[u,!e.isPasswordInput&&e.showIcon]]),c(n(s,{icon:"mdi:eye-outline",class:"password__toggler",onClick:e.togglePasswordVisibility},null,8,["onClick"]),[[u,e.isPasswordInput&&e.showIcon]])]),e.resetPassword?(a(),l("div",k,[n(m,{to:{name:"reset-password"}},{default:v(()=>[b("Forgotten password? ")]),_:1})])):g("",!0)],64)):(a(),l("input",{key:1,type:e.type,id:e.label,placeholder:e.placeholder,onInput:t[1]||(t[1]=(...i)=>e.updateModelValue&&e.updateModelValue(...i)),value:e.modelValue,maxlength:e.maxlength},null,40,P))])}const F=p(_,[["render",z]]),S={},B={version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100"},$=M(`<path fill="none" d="M0,0h100v100H0V0z"></path><path d="M50,2L50,2c2.3,0,4.2,2.7,4.2,6v12c0,3.3-1.9,6-4.2,6l0,0c-2.3,0-4.2-2.7-4.2-6V8C45.8,4.7,47.7,2,50,2z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-1s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M74,8.4L74,8.4c2,1.2,2.3,4.4,0.6,7.3l-6,10.4C67,29,64,30.4,62,29.2l0,0c-2-1.2-2.3-4.4-0.6-7.3l6-10.4
    	C69,8.7,72,7.3,74,8.4z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.9166666666666666s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M91.6,26L91.6,26c1.2,2-0.2,5-3.1,6.6l-10.4,6c-2.9,1.7-6.1,1.4-7.3-0.6l0,0c-1.2-2,0.2-5,3.1-6.6l10.4-6
    	C87.1,23.7,90.4,24,91.6,26z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.8333333333333334s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M98,50L98,50c0,2.3-2.7,4.2-6,4.2H80c-3.3,0-6-1.9-6-4.2l0,0c0-2.3,2.7-4.2,6-4.2h12C95.3,45.8,98,47.7,98,50z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.75s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M91.6,74L91.6,74c-1.2,2-4.4,2.3-7.3,0.6l-10.4-6C71,67,69.6,64,70.8,62l0,0c1.2-2,4.4-2.3,7.3-0.6l10.4,6
    	C91.3,69,92.7,72,91.6,74z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.6666666666666666s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M74,91.6L74,91.6c-2,1.2-5-0.2-6.6-3.1l-6-10.4c-1.7-2.9-1.4-6.1,0.6-7.3l0,0c2-1.2,5,0.2,6.6,3.1l6,10.4
    	C76.3,87.1,76,90.4,74,91.6z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.5833333333333334s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M50,98L50,98c-2.3,0-4.2-2.7-4.2-6V80c0-3.3,1.9-6,4.2-6l0,0c2.3,0,4.2,2.7,4.2,6v12C54.2,95.3,52.3,98,50,98z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.5s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M26,91.6L26,91.6c-2-1.2-2.3-4.4-0.6-7.3l6-10.4C33,71,36,69.6,38,70.8l0,0c2,1.2,2.3,4.4,0.6,7.3l-6,10.4
    	C31,91.3,28,92.7,26,91.6z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.4166666666666667s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M8.4,74L8.4,74c-1.2-2,0.2-5,3.1-6.6l10.4-6c2.9-1.7,6.1-1.4,7.3,0.6l0,0c1.2,2-0.2,5-3.1,6.6l-10.4,6
    	C12.9,76.3,9.6,76,8.4,74z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.3333333333333333s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M2,50L2,50c0-2.3,2.7-4.2,6-4.2h12c3.3,0,6,1.9,6,4.2l0,0c0,2.3-2.7,4.2-6,4.2H8C4.7,54.2,2,52.3,2,50z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.25s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M8.4,26L8.4,26c1.2-2,4.4-2.3,7.3-0.6l10.4,6C29,33,30.4,36,29.2,38l0,0c-1.2,2-4.4,2.3-7.3,0.6l-10.4-6
    	C8.7,31,7.3,28,8.4,26z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.16666666666666666s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path><path d="M26,8.4L26,8.4c2-1.2,5,0.2,6.6,3.1l6,10.4c1.7,2.9,1.4,6.1-0.6,7.3l0,0c-2,1.2-5-0.2-6.6-3.1l-6-10.4
    	C23.7,12.9,24,9.6,26,8.4z" fill="currentColor"><animate accumulate="none" additive="replace" attributeName="opacity" begin="-0.08333333333333333s" calcMode="linear" dur="1s" fill="remove" from="1" repeatCount="indefinite" restart="always" to="0"></animate></path>`,13),q=[$];function T(e,t){return a(),l("svg",B,q)}const R=p(S,[["render",T]]);export{F as B,R as S};
