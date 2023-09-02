import{I as D,u as N}from"./AppLayout.d39f3a6a.js";import{_ as I,ab as v,o as t,d as r,a as o,t as a,e as n,F as b,g as B,s as g,v as V,aa as C,b as c,w as h,f as d,l as k,q as w,Y as S,c as T,k as E}from"./app.6b182e4c.js";const F={components:{Icon:D},setup(){const{formatTimeAgoToNow:e,formatToDayDateString:i}=N();return{formatTimeAgoToNow:e,formatToDayDateString:i}},data(){return{shouts:[],message:"",error:null,loading:!0,sending:!1,shoutQueryInterval:null}},created(){axios.get(route("shout.index")).then(e=>{this.shouts=e.data}).finally(()=>{this.loading=!1}),v?Echo.channel("shouts").listen("ShoutCreated",e=>{this.shouts.unshift(e.data)}):this.shoutQueryInterval=setInterval(()=>this.pollServerForNewShouts(),5e3)},unmounted(){this.shoutQueryInterval&&clearInterval(this.shoutQueryInterval)},methods:{sendShout(){this.sending=!0,this.error=null,axios.post(route("shout.store"),{message:this.message}).then(e=>{e.status===200&&this.shouts.unshift(e.data)}).catch(e=>{e.response.status===422?this.error=e.response.data.errors.message[0]:e.response.status===403?this.error=e.response.data.message:this.error=this.__("Something went wrong. Try again.")}).finally(()=>{this.message="",this.sending=!1,this.$nextTick(()=>{this.$refs.inputbox.focus()})})},pollServerForNewShouts(){if(v)return;const e=this.shouts.length>0?this.shouts[0].id:0;axios.get(route("shout.index",{after:e})).then(i=>{const f=i.data;f.length>0&&(this.shouts=[...f,...this.shouts])})}}},Q={key:0},j={class:"p-3 space-y-4 bg-white rounded shadow dark:bg-cool-gray-800"},A={class:"font-extrabold text-gray-800 dark:text-gray-200"},K={class:"flex-col space-y-4 overflow-auto max-h-96 hide-scrollbar"},M={key:0,class:"space-y-4"},L=E('<div class="w-full max-w-sm mx-auto"><div class="flex space-x-4 animate-pulse"><div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-cool-gray-700"></div><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div><div class="w-full max-w-sm mx-auto"><div class="flex space-x-4 animate-pulse"><div class="w-8 h-8 bg-gray-300 rounded-full dark:bg-cool-gray-700"></div><div class="flex-1 py-1 space-y-1"><div class="w-3/4 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div><div class="w-5/6 h-4 bg-gray-300 rounded dark:bg-cool-gray-700"></div></div></div></div>',2),R=[L],U={key:0,class:"flex"},q={class:"items-start order-2 max-w-xs mx-2 space-y-2 text-sm"},z={class:"flex flex-col inline-block px-4 py-2 text-gray-700 bg-gray-100 rounded-tl-lg rounded-2xl dark:bg-cool-gray-600 dark:bg-opacity-25 dark:text-gray-200"},H=["title"],O={class:"text-justify"},W=["src"],Y={key:1,class:"flex justify-end"},G={class:"items-start order-1 max-w-xs mx-2 space-y-2 text-sm"},J={class:"flex flex-col inline-block px-4 py-2 text-gray-700 rounded-tr-lg rounded-2xl bg-light-blue-100 dark:bg-cool-gray-900 dark:bg-opacity-40 dark:text-gray-200"},P={class:"text-right"},X=["title"],Z={class:"text-justify"},$=["src"],ee={key:1,class:"italic text-gray-500 dark:text-gray-400 text-center"},se={key:0},te=["disabled","placeholder"],re={key:1,class:"text-xs text-red-400"},oe={key:1,class:"text-sm text-center text-gray-600 dark:text-gray-400"};function ae(e,i,f,y,l,p){const u=k("inertia-link"),m=k("icon"),_=w("tippy"),x=w("confirm");return e.$page.props.generalSettings.enable_shoutbox?(t(),r("div",Q,[o("div",j,[o("h3",A,a(e.__("Shout Box")),1),o("div",K,[l.loading?(t(),r("div",M,R)):n("",!0),(t(!0),r(b,null,B(l.shouts,s=>(t(),r("div",{key:s.id,class:"chat-message"},[!e.$page.props.auth.user||s.user_id!==e.$page.props.auth.user.id?(t(),r("div",U,[o("div",q,[o("div",z,[o("div",null,[c(u,{as:"span",href:e.route("user.public.get",s.user.username),class:"font-semibold cursor-pointer hover:underline",style:S([s.user.roles[0].color?{color:s.user.roles[0].color}:null])},{default:h(()=>[d(a(s.user.username),1)]),_:2},1032,["href","style"]),g((t(),r("span",{class:"ml-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none",title:y.formatToDayDateString(s.created_at)},[d(a(y.formatTimeAgoToNow(s.created_at,!1)),1)],8,H)),[[_]])]),o("span",O,a(s.message),1)])]),o("img",{src:s.user.profile_photo_url,alt:"My profile",class:"order-1 w-8 h-8 mt-2 rounded-full"},null,8,W),e.$page.props.auth.user&&s.permissions.delete?g((t(),T(u,{key:0,class:"order-3 focus:outline-none","preserve-state":!1,as:"button",method:"delete",href:e.route("shout.delete",s.id)},{default:h(()=>[c(m,{class:"w-4 h-4 text-gray-200 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-500",name:"trash"})]),_:2},1032,["href"])),[[x,{message:e.__("Delete this shout permanently?")}]]):n("",!0)])):(t(),r("div",Y,[e.$page.props.auth.user&&s.permissions.delete?g((t(),T(u,{key:0,class:"focus:outline-none","preserve-state":!1,as:"button",method:"delete",href:e.route("shout.delete",s.id)},{default:h(()=>[c(m,{class:"w-4 h-4 text-gray-200 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-500",name:"trash"})]),_:2},1032,["href"])),[[x,{message:e.__("Delete this shout permanently?")}]]):n("",!0),o("div",G,[o("div",J,[o("div",P,[g((t(),r("span",{class:"mr-1 text-xs text-gray-500 dark:text-gray-400 focus:outline-none",title:y.formatToDayDateString(s.created_at)},[d(a(y.formatTimeAgoToNow(s.created_at,!1)),1)],8,X)),[[_]]),c(u,{as:"span",href:e.route("user.public.get",s.user.username),class:"font-semibold cursor-pointer hover:underline",style:S([s.user.roles[0].color?{color:s.user.roles[0].color}:null])},{default:h(()=>[d(a(s.user.username),1)]),_:2},1032,["href","style"])]),o("span",Z,a(s.message),1)])]),o("img",{src:s.user.profile_photo_url,alt:"My profile",class:"order-2 w-8 h-8 mt-2 rounded-full"},null,8,$)]))]))),128)),!l.loading&&(!l.shouts||l.shouts.length<=0)?(t(),r("div",ee,a(e.__("No shouts yet.")),1)):n("",!0)]),e.$page.props.auth.user?(t(),r("div",se,[l.loading?n("",!0):g((t(),r("input",{key:0,ref:"inputbox","onUpdate:modelValue":i[0]||(i[0]=s=>l.message=s),disabled:l.sending,"aria-label":"Shout",class:"block w-full mt-1 bg-gray-100 border-none rounded-md focus:ring-gray-300 sm:text-sm disabled:opacity-50 focus:bg-white dark:bg-cool-gray-900 dark:text-gray-200 dark:focus:ring-gray-700",type:"text",placeholder:e.__("Say something.."),onKeypress:i[1]||(i[1]=C((...s)=>p.sendShout&&p.sendShout(...s),["enter"]))},null,40,te)),[[V,l.message]]),l.error?(t(),r("span",re,a(l.error),1)):n("",!0)])):(t(),r("div",oe,[c(u,{class:"font-semibold text-light-blue-500",href:e.route("login")},{default:h(()=>[d(a(e.__("Login")),1)]),_:1},8,["href"]),e.$page.props.hasRegistrationFeature?(t(),r(b,{key:0},[d(a(" "+e.__("or"))+" ",1),c(u,{class:"font-semibold text-light-blue-500",href:e.route("register")},{default:h(()=>[d(a(e.__("Register")),1)]),_:1},8,["href"])],64)):n("",!0),d(" "+a(e.__("to Shout")),1)]))])])):n("",!0)}const ne=I(F,[["render",ae]]);export{ne as S};
