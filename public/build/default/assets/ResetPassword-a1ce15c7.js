import{r as v,T as V,x as P,l as N,o as n,c,w as m,b as i,a,u as e,d as f,t as d,J as S,e as w,f as y,i as R}from"./app-5591505d.js";import{s as A}from"./vue-multiselect.esm-55dca288.js";import{X as _}from"./XInput-d72fea2d.js";import{A as B}from"./AppLayout-56cad4f4.js";import{L as C}from"./LoadingButton-adf666fd.js";import{_ as g}from"./AlertCard-a8ee50a3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-c5ac9d3b.js";import"./useAuthorizable-1f4065db.js";import"./XMarkIcon-17629808.js";const U={class:"max-w-6xl px-2 py-3 mx-auto space-y-4 md:py-12 md:px-10"},L={class:"flex flex-col md:flex-row md:items-center md:justify-between"},j={key:0,class:"text-lg mb-2 md:mb-0 md:text-2xl font-bold text-gray-700 dark:text-gray-200"},q={key:1,class:"text-lg italic mb-2 md:mb-0 md:text-2xl font-bold text-gray-500 dark:text-gray-500"},D={key:0,class:"text-xs text-gray-500 dark:text-gray-500"},H={as:"div",class:"w-full p-6 text-gray-500 rounded-lg text-medium dark:text-gray-400 bg-white shadow dark:bg-gray-800"},T=["onSubmit"],X={class:"grid grid-cols-6 gap-6"},E={class:"col-span-6 sm:col-span-3"},F={class:"col-span-6 sm:col-span-3"},I={class:"col-span-6 sm:col-span-6"},J={class:"mt-6"},ee={__name:"ResetPassword",props:{uuid:{type:String,required:!1},players:{type:Array,required:!0},cooldown:{type:Number}},setup(u){const p=u;let r=v(p.players[0]);const b=p.players.find(o=>o.uuid===p.uuid);b&&(r.value=b);const s=V({player_uuid:null,new_password:null,new_password_confirmation:null,reason:null}),x=()=>{s.player_uuid=r.value.uuid,s.post(route("reset-player-password.update"),{onSuccess:()=>{s.reset()}})},h=P(()=>s.processing||!r.value);return(o,l)=>{const k=N("AppHead");return n(),c(B,null,{default:m(()=>[i(k,{title:o.__("Reset Player Password")},null,8,["title"]),a("div",U,[a("div",L,[e(r)?(n(),f("h2",j,d(o.__("Reset password for :username",{username:e(r).username})),1)):(n(),f("h2",q,d(o.__("No Linked Players")),1)),i(e(A),{id:"username",modelValue:e(r),"onUpdate:modelValue":l[0]||(l[0]=t=>S(r)?r.value=t:r=t),class:"w-full md:w-1/3 bg-gray-300 border-gray-300 rounded-md shadow-sm focus:ring-light-blue-500 focus:border-light-blue-500 sm:text-sm dark:bg-gray-900",options:u.players,multiple:!1,placeholder:o.__("Search")+"...",label:"username","allow-empty":!1,"deselect-label":o.__("Can't remove"),"track-by":"id"},null,8,["modelValue","options","placeholder","deselect-label"])]),e(r)?(n(),f("p",D,d(o.__("Player Uuid"))+": "+d(e(r).uuid),1)):w("",!0),u.cooldown?(n(),c(g,{key:1,"text-color":"text-yellow-800 dark:text-yellow-500","border-color":"border-yellow-500"},{default:m(()=>[y(d(o.__("You are on a cooldown! Please wait for :cooldown seconds before you can try again.",{cooldown:u.cooldown})),1)]),_:1})):w("",!0),e(r)?w("",!0):(n(),c(g,{key:2,"text-color":"text-red-800 dark:text-red-500","border-color":"border-red-500"},{default:m(()=>[y(d(o.__("No linked players found. Please link a player to your account.")),1)]),_:1})),a("div",H,[a("form",{class:"w-full mt-4",onSubmit:R(x,["prevent"])},[a("div",X,[a("div",E,[i(_,{id:"new_password",modelValue:e(s).new_password,"onUpdate:modelValue":l[1]||(l[1]=t=>e(s).new_password=t),label:o.__("New Password"),error:e(s).errors.new_password,type:"password",name:"new_password","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),a("div",F,[i(_,{id:"new_password_confirmation",modelValue:e(s).new_password_confirmation,"onUpdate:modelValue":l[2]||(l[2]=t=>e(s).new_password_confirmation=t),label:o.__("Confirm Password"),type:"password",name:"new_password_confirmation","help-error-flex":"flex-row"},null,8,["modelValue","label"])]),a("div",I,[i(_,{id:"reason",modelValue:e(s).reason,"onUpdate:modelValue":l[3]||(l[3]=t=>e(s).reason=t),label:o.__("Reason"),error:e(s).errors.reason,type:"text",name:"reason","help-error-flex":"flex-row",help:o.__("Small reason why are you changing the password?")},null,8,["modelValue","label","error","help"])])]),a("div",J,[i(C,{loading:e(s).processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",disabled:h.value,type:"submit"},{default:m(()=>[y(d(o.__("Reset Player Password")),1)]),_:1},8,["loading","disabled"])])],40,T)])])]),_:1})}}};export{ee as default};
