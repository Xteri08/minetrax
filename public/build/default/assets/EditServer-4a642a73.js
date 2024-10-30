import{L as y}from"./LoadingButton-b0cbf09b.js";import{X as g}from"./XInput-1444ba9c.js";import{X as w}from"./XSelect-b7a9aaf5.js";import{X as V}from"./XCheckbox-b5048fef.js";import{T as x,l as t,o as k,c as S,w as u,b as n,a as s,t as _,i as q,f as U}from"./app-3a344ed6.js";import{_ as E}from"./AdminLayout-ab1ce049.js";import{_ as j}from"./_plugin-vue_export-helper-c27b6911.js";import"./AppLayout-af0b6bfa.js";import"./Icon-df033d91.js";import"./useAuthorizable-0b0b1f26.js";import"./use-resolve-button-type-595b1872.js";import"./open-closed-8a07f68a.js";import"./CloudArrowDownIcon-5ee2e417.js";import"./index-890015eb.js";const A={components:{AdminLayout:E,XCheckbox:V,XSelect:w,LoadingButton:y,XInput:g},props:{versionsArray:Array,server:{type:Object,default:null}},data(){var l,r,a,p,e,d;return{form:x({name:this.server.name,join_port:this.server.join_port,query_port:this.server.query_port,webquery_port:this.server.webquery_port,minecraft_version:this.server.minecraft_version,type:this.server.type,hostname:this.server.hostname,ip_address:this.server.ip_address,is_server_intel_enabled:this.server.is_server_intel_enabled,is_player_intel_enabled:this.server.is_player_intel_enabled,is_ingame_chat_enabled:this.server.is_ingame_chat_enabled,settings:{server_identifier:((r=(l=this.server)==null?void 0:l.settings)==null?void 0:r.server_identifier)??null,is_skin_change_via_web_allowed:((p=(a=this.server)==null?void 0:a.settings)==null?void 0:p.is_skin_change_via_web_allowed)??!1,is_banwarden_enabled:((d=(e=this.server)==null?void 0:e.settings)==null?void 0:d.is_banwarden_enabled)??!1},order:this.server.order}),typeArray:{0:"Paper",1:"Spigot",2:"Forge",3:"Bukkit",4:"Vanilla"}}},methods:{updateServer(){this.form.put(route("admin.server.update",this.server.id),{preserveScroll:!1})}}},B={class:"py-12 px-10 max-w-5xl mx-auto"},P={class:"flex justify-between mb-8"},I={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},L={class:"mt-10 sm:mt-0"},C={class:""},T={class:"mt-5 md:mt-0 md:col-span-2"},W={class:"shadow overflow-hidden sm:rounded-md"},X={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},N={class:"grid grid-cols-6 gap-6"},H={class:"col-span-6 sm:col-span-3"},M={class:"col-span-6 sm:col-span-3"},Q={class:"col-span-6 sm:col-span-3"},R={class:"col-span-6 sm:col-span-3"},D={class:"col-span-6 sm:col-span-2"},F={class:"col-span-6 sm:col-span-2"},G={class:"col-span-6 sm:col-span-2"},J={class:"col-span-6 sm:col-span-6"},O={class:"grid grid-cols-2 gap-6"},z={class:"text-xs text-gray-400 flex items-center"},K={class:"col-span-6 sm:col-span-3"},Y={class:"col-span-6 sm:col-span-3"},Z={class:"flex items-center col-span-6 sm:col-span-6"},$={class:"flex items-center col-span-6 sm:col-span-6"},ee={class:"flex items-center col-span-6 sm:col-span-6"},re={class:"flex items-center col-span-6 sm:col-span-6"},le={class:"flex items-center col-span-6 sm:col-span-6"},oe={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function se(l,r,a,p,e,d){const b=t("app-head"),c=t("inertia-link"),i=t("x-input"),f=t("x-select"),m=t("x-checkbox"),v=t("loading-button"),h=t("AdminLayout");return k(),S(h,null,{default:u(()=>[n(b,{title:l.__("Edit Server: :name",{name:a.server.name})},null,8,["title"]),s("div",B,[s("div",P,[s("h1",I,_(l.__("Edit Server: :name",{name:a.server.name})),1),n(c,{href:l.route("admin.server.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:u(()=>[s("span",null,_(l.__("Cancel")),1)]),_:1},8,["href"])]),s("div",L,[s("div",C,[s("div",T,[s("form",{onSubmit:r[15]||(r[15]=q((...o)=>d.updateServer&&d.updateServer(...o),["prevent"]))},[s("div",W,[s("div",X,[s("div",N,[s("div",H,[n(i,{id:"name",modelValue:e.form.name,"onUpdate:modelValue":r[0]||(r[0]=o=>e.form.name=o),label:l.__("Server Name"),help:l.__("Publicly visible name of the server (e.g., Survival, Skyblock, Lifesteal, Practice, etc.)."),error:e.form.errors.name,type:"text",name:"name","help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])]),s("div",M,[n(i,{id:"server_identifier",modelValue:e.form.settings.server_identifier,"onUpdate:modelValue":r[1]||(r[1]=o=>e.form.settings.server_identifier=o),label:l.__("Server Identifier"),help:l.__("Unique identifier for the server, used for identification in proxy configurations and ban management plugins (e.g., s1, server1, lifesteal, survival1, proxy, etc.)."),error:e.form.errors["settings.server_identifier"],type:"text",name:"server_identifier","help-error-flex":"flex-col"},null,8,["modelValue","label","help","error"])]),s("div",Q,[n(i,{id:"hostname",modelValue:e.form.hostname,"onUpdate:modelValue":r[2]||(r[2]=o=>e.form.hostname=o),label:l.__("Hostname"),error:e.form.errors.hostname,help:l.__("Publicly visible join address of the server. Eg: play.example.com"),type:"text",name:"hostname","help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),s("div",R,[n(i,{id:"order",modelValue:e.form.order,"onUpdate:modelValue":r[3]||(r[3]=o=>e.form.order=o),label:l.__("Weight"),error:e.form.errors.order,help:l.__("Higher the weight, higher the priority. Eg: 1,3,10 etc. Can be left empty."),type:"number",name:"order","help-error-flex":"flex-col"},null,8,["modelValue","label","error","help"])]),s("div",D,[n(i,{id:"ip_address",modelValue:e.form.ip_address,"onUpdate:modelValue":r[4]||(r[4]=o=>e.form.ip_address=o),label:l.__("IP Address"),error:e.form.errors.ip_address,autocomplete:"ip_address",type:"text",name:"ip_address","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",F,[n(i,{id:"join_port",modelValue:e.form.join_port,"onUpdate:modelValue":r[5]||(r[5]=o=>e.form.join_port=o),label:l.__("Join Port"),error:e.form.errors.join_port,type:"text",name:"join_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",G,[n(i,{id:"query_port",modelValue:e.form.query_port,"onUpdate:modelValue":r[6]||(r[6]=o=>e.form.query_port=o),label:l.__("Query Port"),error:e.form.errors.query_port,type:"text",name:"query_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"])]),s("div",J,[s("div",O,[n(i,{id:"webquery_port",modelValue:e.form.webquery_port,"onUpdate:modelValue":r[7]||(r[7]=o=>e.form.webquery_port=o),label:l.__("Webquery Port"),error:e.form.errors.webquery_port,type:"text",name:"webquery_port","help-error-flex":"flex-col"},null,8,["modelValue","label","error"]),s("div",z,_(l.__("WebQuery port is a new port which MineTrax plugin will open for secure connection between server and web. Enter a port value which is available and can be open. Eg: 25569")),1)])]),s("div",K,[n(f,{id:"type",modelValue:e.form.type,"onUpdate:modelValue":r[8]||(r[8]=o=>e.form.type=o),placeholder:l.__("Select server type"),"disable-null":!0,required:!0,name:"type",error:e.form.errors.type,label:l.__("Server Type"),"select-list":e.typeArray},null,8,["modelValue","placeholder","error","label","select-list"])]),s("div",Y,[n(f,{id:"minecraft_version",modelValue:e.form.minecraft_version,"onUpdate:modelValue":r[9]||(r[9]=o=>e.form.minecraft_version=o),name:"minecraft_version",error:e.form.errors.minecraft_version,label:l.__("Version"),"select-list":a.versionsArray},null,8,["modelValue","error","label","select-list"])]),s("div",Z,[n(m,{id:"is_server_intel_enabled",modelValue:e.form.is_server_intel_enabled,"onUpdate:modelValue":r[10]||(r[10]=o=>e.form.is_server_intel_enabled=o),label:l.__("Enable Server Intel / Analytics"),help:l.__("If enabled, server analytics data (performance metric, join activity etc) will be captured for this server via plugin."),name:"is_server_intel_enabled"},null,8,["modelValue","label","help"])]),s("div",$,[n(m,{id:"is_player_intel_enabled",modelValue:e.form.is_player_intel_enabled,"onUpdate:modelValue":r[11]||(r[11]=o=>e.form.is_player_intel_enabled=o),label:l.__("Enable Player Intel / Analytics"),help:l.__("If enabled, player intel & statistics data will be captured for this server via plugin."),name:"is_player_intel_enabled"},null,8,["modelValue","label","help"])]),s("div",ee,[n(m,{id:"is_ingame_chat_enabled",modelValue:e.form.is_ingame_chat_enabled,"onUpdate:modelValue":r[12]||(r[12]=o=>e.form.is_ingame_chat_enabled=o),label:l.__("Enable In-Game Chat"),help:l.__("Enable in-game chat for this server, which allow users to view & chat to in-game players from website."),name:"is_ingame_chat_enabled"},null,8,["modelValue","label","help"])]),s("div",re,[n(m,{id:"is_skin_change_via_web_allowed",modelValue:e.form.settings.is_skin_change_via_web_allowed,"onUpdate:modelValue":r[13]||(r[13]=o=>e.form.settings.is_skin_change_via_web_allowed=o),label:l.__("Enable Skin Change via Web (SkinsRestorer)"),help:l.__("Allow user to change their linked players skin via web for this server. This will require SkinsRestorer plugin to be installed on the server."),name:"is_skin_change_via_web_allowed"},null,8,["modelValue","label","help"])]),s("div",le,[n(m,{id:"is_banwarden_enabled",modelValue:e.form.settings.is_banwarden_enabled,"onUpdate:modelValue":r[14]||(r[14]=o=>e.form.settings.is_banwarden_enabled=o),label:l.__("Enable BanWarden"),help:l.__("BanWarden allows you to manage all your punishments (bans, mutes, kicks etc) from the web. This requires a ban plugin to be installed on the server Eg: LiteBans, LibertyBans etc."),name:"is_banwarden_enabled"},null,8,["modelValue","label","help"])])])]),s("div",oe,[n(v,{loading:e.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:u(()=>[U(_(l.__("Update Server")),1)]),_:1},8,["loading"])])])],32)])])])])]),_:1})}const ye=j(A,[["render",se]]);export{ye as default};
