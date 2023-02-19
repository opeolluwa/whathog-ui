import{B,S as v}from"./Spinner.29f6e7a9.js";import{B as w}from"./BaseButton.3c58cd34.js";import{d as b,D as y,E as U,G as L,_ as k,r as d,o as I,c as T,f as t,j as C,a as n,w as u,b as c,k as f,v as g,p as R,e as $}from"./index.23bbb581.js";import{S as A}from"./SocialAccountAuth.c1657299.js";const r=y(),D=b({name:"AuthView",components:{BaseTextInput:B,BaseButton:w,Spinner:v,SocialAccountAuth:A},data:()=>({form:{email:"",password:"",firstname:"",lastname:""},isLoading:!1,apiResponseMsg:""}),methods:{async signUp(){this.isLoading=!0;const{email:e,password:s,firstname:p,lastname:m}=this.form;try{const{data:a}=await U.post("/auth/sign-up",{email:e,firstname:p,lastname:m,password:s});console.log(JSON.stringify(a)),a.success?(r.success(a.message),setTimeout(()=>{this.$router.push({name:"confirm-otp"})},200),L({key:"confirm-account-token",value:a.data.token})):r.error(a.message),this.apiResponseMsg=a.message,this.isLoading=!1;return}catch(a){this.isLoading=!1;const{data:i}=a.response;i.success||(this.apiResponseMsg=i.message,r.error(i.message))}}},computed:{disabledState(){return this.isLoading===!0}}});const _=e=>(R("data-v-dbd22c46"),e=e(),$(),e),M={id:"sign__up__page"},N={class:"container"},x=_(()=>t("div",null,null,-1)),j=_(()=>t("div",{class:"title"},[t("h1",null,"Sign Up"),t("p",{class:"sub__her__text"},"Create an account to begin")],-1)),z={class:"goto__sign__up"};function E(e,s,p,m,a,i){const l=d("BaseTextInput"),h=d("Spinner"),V=d("BaseButton"),S=d("RouterLink");return I(),T("div",M,[t("div",N,[x,t("div",null,[j,t("form",{action:"",method:"post",onSubmit:s[4]||(s[4]=C((...o)=>e.signUp&&e.signUp(...o),["prevent"]))},[n(l,{placeholder:"Jane",label:"firstname",modelValue:e.form.firstname,"onUpdate:modelValue":s[0]||(s[0]=o=>e.form.firstname=o),type:"text",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"Doe",label:"lastname",modelValue:e.form.lastname,"onUpdate:modelValue":s[1]||(s[1]=o=>e.form.lastname=o),type:"text",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"jane@mailer.com",label:"email",modelValue:e.form.email,"onUpdate:modelValue":s[2]||(s[2]=o=>e.form.email=o),type:"email",class:"field"},null,8,["modelValue"]),n(l,{placeholder:"**********",type:"password",label:"password",modelValue:e.form.password,"onUpdate:modelValue":s[3]||(s[3]=o=>e.form.password=o),class:"field"},null,8,["modelValue"]),n(V,{text:"",disabled:e.disabledState},{default:u(()=>[f(t("span",null,"Sign Up",512),[[g,!e.isLoading]]),f(n(h,{"animation-duration":1e3,size:30,color:"#ffffff"},null,512),[[g,e.isLoading]])]),_:1},8,["disabled"])],32),t("small",z,[c("Already have an account? "),n(S,{to:{name:"login"},class:"emphasis",style:{"font-size":"13px"}},{default:u(()=>[c("Login ")]),_:1})])])])])}const F=k(D,[["render",E],["__scopeId","data-v-dbd22c46"]]);export{F as default};