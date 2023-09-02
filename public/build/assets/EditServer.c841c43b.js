import{L as h}from"./LoadingButton.ea82aaf2.js";import{X as y}from"./XInput.24351c5f.js";import{X as g}from"./XSelect.c7a6914e.js";import{X as x}from"./XCheckbox.5175a09c.js";import{_ as V,T as w,c as S,w as p,l as n,o as k,b as t,a as r,t as a,j as q,f as j}from"./app.6b182e4c.js";import{_ as U}from"./AdminLayout.3d7e458f.js";import"./AppLayout.d39f3a6a.js";import"./useAuthorizable.ba3a8fc0.js";const A={components:{AdminLayout:U,XCheckbox:x,XSelect:g,LoadingButton:h,XInput:y},props:{versionsArray:Array,server:{type:Object,default:null}},data(){return{form:w({name:this.server.name,join_port:this.server.join_port,query_port:this.server.query_port,webquery_port:this.server.webquery_port,minecraft_version:this.server.minecraft_version,type:this.server.type,hostname:this.server.hostname,ip_address:this.server.ip_address,is_server_intel_enabled:this.server.is_server_intel_enabled,is_player_intel_enabled:this.server.is_player_intel_enabled,is_ingame_chat_enabled:this.server.is_ingame_chat_enabled,settings:this.server.settings}),typeArray:{0:"Paper",1:"Spigot",2:"Forge",3:"Bukkit",4:"Vanilla"}}},methods:{updateServer(){this.form.put(route("admin.server.update",this.server.id),{preserveScroll:!1})}}},E={class:"py-12 px-10 max-w-5xl mx-auto"},I={class:"flex justify-between mb-8"},P={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},X={class:"mt-10 sm:mt-0"},B={class:""},C={class:"mt-5 md:mt-0 md:col-span-2"},L={class:"shadow overflow-hidden sm:rounded-md"},T={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},N={class:"grid grid-cols-6 gap-6"},M={class:"col-span-6 sm:col-span-3"},Q={class:"col-span-6 sm:col-span-3"},W={class:"col-span-6 sm:col-span-2"},D={class:"col-span-6 sm:col-span-2"},F={class:"col-span-6 sm:col-span-2"},G={class:"col-span-6 sm:col-span-6"},H={class:"grid grid-cols-2 gap-6"},J={class:"text-xs text-gray-400 flex items-center"},O={class:"col-span-6 sm:col-span-3"},z={class:"col-span-6 sm:col-span-3"},K={class:"flex items-center col-span-6 sm:col-span-6"},R={class:"flex items-center col-span-6 sm:col-span-6"},Y={class:"flex items-center col-span-6 sm:col-span-6"},Z={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function $(l,o,m,ee,e,_){const c=n("app-head"),f=n("inertia-link"),i=n("x-input"),u=n("x-select"),d=n("x-checkbox"),b=n("loading-button"),v=n("AdminLayout");return k(),S(v,null,{default:p(()=>[t(c,{title:l.__("Edit Server: :name",{name:m.server.name})},null,8,["title"]),r("div",E,[r("div",I,[r("h1",P,a(l.__("Edit Server: :name",{name:m.server.name})),1),t(f,{href:l.route("admin.server.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:p(()=>[r("span",null,a(l.__("Cancel")),1)]),_:1},8,["href"])]),r("div",X,[r("div",B,[r("div",C,[r("form",{onSubmit:o[11]||(o[11]=q((...s)=>_.updateServer&&_.updateServer(...s),["prevent"]))},[r("div",L,[r("div",T,[r("div",N,[r("div",M,[t(i,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s),label:l.__("Server Name"),help:l.__("This name will help to identify this server. Eg: Survival, Skyblock, etc."),error:e.form.errors.name,type:"text",name:"name","help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])]),r("div",Q,[t(i,{id:"hostname",modelValue:e.form.hostname,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.hostname=s),label:l.__("Hostname"),error:e.form.errors.hostname,help:l.__("Publicly visible join address of the server. Eg: play.example.com"),type:"text",name:"hostname","help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),r("div",W,[t(i,{id:"ip_address",modelValue:e.form.ip_address,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.ip_address=s),label:l.__("IP Address"),error:e.form.errors.ip_address,autocomplete:"ip_address",type:"text",name:"ip_address","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),r("div",D,[t(i,{id:"join_port",modelValue:e.form.join_port,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.join_port=s),label:l.__("Join Port"),error:e.form.errors.join_port,type:"text",name:"join_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),r("div",F,[t(i,{id:"query_port",modelValue:e.form.query_port,"onUpdate:modelValue":o[4]||(o[4]=s=>e.form.query_port=s),label:l.__("Query Port"),error:e.form.errors.query_port,type:"text",name:"query_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),r("div",G,[r("div",H,[t(i,{id:"webquery_port",modelValue:e.form.webquery_port,"onUpdate:modelValue":o[5]||(o[5]=s=>e.form.webquery_port=s),label:l.__("Webquery Port"),error:e.form.errors.webquery_port,type:"text",name:"webquery_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"]),r("div",J,a(l.__("WebQuery port is a new port which MineTrax plugin will open for secure connection between server and web. Enter a port value which is available and can be open. Eg: 25569")),1)])]),r("div",O,[t(u,{id:"type",modelValue:e.form.type,"onUpdate:modelValue":o[6]||(o[6]=s=>e.form.type=s),placeholder:l.__("Select server type"),"disable-null":!0,required:!0,name:"type",error:e.form.errors.type,label:l.__("Server Type"),"select-list":e.typeArray},null,8,["modelValue","placeholder","error","label","select-list"])]),r("div",z,[t(u,{id:"minecraft_version",modelValue:e.form.minecraft_version,"onUpdate:modelValue":o[7]||(o[7]=s=>e.form.minecraft_version=s),name:"minecraft_version",error:e.form.errors.minecraft_version,label:l.__("Version"),"select-list":m.versionsArray},null,8,["modelValue","error","label","select-list"])]),r("div",K,[t(d,{id:"is_server_intel_enabled",modelValue:e.form.is_server_intel_enabled,"onUpdate:modelValue":o[8]||(o[8]=s=>e.form.is_server_intel_enabled=s),label:l.__("Enable Server Intel / Analytics"),help:l.__("If enabled, server analytics data (performance metric, join activity etc) will be captured for this server via plugin."),name:"is_server_intel_enabled"},null,8,["modelValue","label","help"])]),r("div",R,[t(d,{id:"is_player_intel_enabled",modelValue:e.form.is_player_intel_enabled,"onUpdate:modelValue":o[9]||(o[9]=s=>e.form.is_player_intel_enabled=s),label:l.__("Enable Player Intel / Analytics"),help:l.__("If enabled, player intel & statistics data will be captured for this server via plugin."),name:"is_player_intel_enabled"},null,8,["modelValue","label","help"])]),r("div",Y,[t(d,{id:"is_ingame_chat_enabled",modelValue:e.form.is_ingame_chat_enabled,"onUpdate:modelValue":o[10]||(o[10]=s=>e.form.is_ingame_chat_enabled=s),label:l.__("Enable In-Game Chat"),help:l.__("Enable in-game chat for this server, which allow users to view & chat to in-game players from website."),name:"is_ingame_chat_enabled"},null,8,["modelValue","label","help"])])])]),r("div",Z,[t(b,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:p(()=>[j(a(l.__("Update Server")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const me=V(A,[["render",$]]);export{me as default};
