import{_ as N}from"./AdminLayout.3d7e458f.js";import{u as O}from"./useAuthorizable.ba3a8fc0.js";import{u as P}from"./AppLayout.d39f3a6a.js";import{H as S,O as q,c as d,w as l,I as V,o as n,b as i,u as e,a as s,f as x,t as r,e as y,s as b,d as c,U as v,l as D,q as T}from"./app.6b182e4c.js";import{D as _,_ as $}from"./DtRowItem.87e565b2.js";import{u as L}from"./index.96a8ed80.js";import{_ as Q}from"./AlertCard.325d9d93.js";import{r as W}from"./EyeIcon.953a6f5c.js";import{r as M}from"./PencilSquareIcon.d4888a1d.js";import{r as H}from"./TrashIcon.02a3842e.js";import"./XMarkIcon.8b0cc818.js";import"./index.9e03a68d.js";const R={class:"px-10 py-8 mx-auto text-gray-400"},Y={class:"italic text-gray-400 dark:text-gray-500"},z={class:"flex justify-between mb-8"},F={class:"font-bold text-3xl text-gray-500 dark:text-gray-300 flex items-center"},U={class:"flex"},G={class:"hidden md:inline"},J={class:"px-4 py-4 text-sm text-center text-gray-800 whitespace-nowrap dark:text-gray-200 font-bold"},K={class:"flex items-center"},X={class:"flex-shrink-0 h-10 w-10"},Z=["src"],ee={class:"ml-4"},te={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},re={class:"text-sm text-gray-500 dark:text-gray-400"},se={class:"text-sm text-gray-900 dark:text-gray-300"},ae={class:"text-sm text-gray-500 dark:text-gray-400"},oe={class:"px-4 space-y-1 whitespace-nowrap"},ne={class:"flex"},le={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-opacity-25 dark:text-green-400"},ie={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-opacity-25 dark:text-red-400"},de={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-opacity-25 dark:text-gray-400"},ce={class:"flex"},ue={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-opacity-25 dark:text-green-400"},fe={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800 dark:bg-opacity-25 dark:text-red-400"},xe={key:2},ye={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 dark:bg-opacity-25 dark:text-gray-400"},he=["title"],ge={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},Ce={__name:"IndexServer",props:{canCreateBungeeServer:Boolean,servers:Object,filters:Object},setup(h){const A=h,{can:g}=O(),{__:t}=V(),{formatTimeAgoToNow:B,formatToDayDateString:C}=P(),k=L("show-bungee-server-missing-alert",!0),I=[{key:"id",label:t("ID"),sortable:!0,class:"text-center font-bold"},{key:"name",sortable:!0,label:t("Name")},{key:"ip_address",label:t("IP:Port"),sortable:!0},{key:"type",label:t("Type"),sortable:!0},{key:"status",sortable:!1,label:t("Status")},{key:"minecraft_version",sortable:!0,label:t("Version")},{key:"created_at",sortable:!0,label:t("Added")},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}],m=S({}),u=S({});return q(()=>{A.servers.data.forEach(o=>{axios.get(route("server.ping.get",o.id)).then(()=>{v(()=>m[o.id]=1)}).catch(()=>{v(()=>m[o.id]=-1)}),o.type.value!==5&&o.webquery_port?axios.get(route("server.webquery.get",o.id)).then(()=>{v(()=>u[o.id]=1)}).catch(()=>{v(()=>u[o.id]=-1)}):u[o.id]=0})}),(o,w)=>{const j=D("app-head"),f=D("InertiaLink"),p=T("tippy"),E=T("confirm");return n(),d(N,null,{default:l(()=>[i(j,{title:e(t)("Manage Servers")},null,8,["title"]),s("div",R,[h.canCreateBungeeServer&&e(k)?(n(),d(Q,{key:0,"close-button":!0,"text-color":"text-light-blue-800 dark:text-light-blue-500","border-color":"border-light-blue-500",onClose:w[0]||(w[0]=a=>k.value=!1)},{body:l(()=>[x(r(e(t)("Adding Proxy server is recommended if you are adding more than 1 server to MineTrax, so that it can be used to show whole network player count in homepage."))+" ",1),s("p",Y,r(e(t)("Note: This is not an error. You can safely ignore this message if you don't want to add proxy server.")),1)]),default:l(()=>[x(r(e(t)("You don't have Bungee/Proxy Server Added!"))+" ",1)]),_:1})):y("",!0),s("div",z,[s("h1",F,[x(r(e(t)("Servers"))+" ",1),e(g)("create servers")?b((n(),d(f,{key:0,as:"button",title:e(t)("MineTrax automatically sync player stats every hour or as per schedule define in .env file. Click here to force a sync now."),href:o.route("admin.server.force-scan"),method:"post",class:"ml-2 inline-flex items-center px-4 py-2 border-2 border-red-600 rounded-md font-semibold text-xs text-red-600 uppercase tracking-widest focus:outline-none transition ease-in-out duration-150 dark:text-red-500 dark:border-red-700 hover:border-red-300 dark:hover:border-red-500 hover:bg-red-500 hover:text-white dark:hover:text-white"},{default:l(()=>[s("span",null,r(e(t)("Sync Player Statistics")),1)]),_:1},8,["title","href"])),[[p]]):y("",!0)]),s("div",U,[e(g)("create servers")?(n(),d(f,{key:0,href:o.route("admin.server.create"),class:"mr-1 inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:l(()=>[s("span",null,r(e(t)("Add")),1),s("span",G,"\xA0"+r(e(t)("Server")),1)]),_:1},8,["href"])):y("",!0),e(g)("create servers")&&h.canCreateBungeeServer?(n(),d(f,{key:1,href:o.route("admin.server.create-bungee"),class:"inline-flex items-center px-4 py-2 border-2 border-gray-800 rounded-md font-semibold text-xs text-gray-800 uppercase tracking-widest focus:outline-none focus:border-gray-900 transition ease-in-out duration-150 dark:text-gray-300 dark:border-gray-700 dark:hover:border-gray-500"},{default:l(()=>[s("span",null,r(e(t)("Add Proxy Server")),1)]),_:1},8,["href"])):y("",!0)])]),i($,{class:"bg-white rounded shadow dark:bg-gray-800",header:I,data:h.servers,filters:h.filters},{default:l(({item:a})=>[s("td",J,r(a.id),1),i(_,null,{default:l(()=>[s("div",K,[s("div",X,[s("img",{class:"h-10 w-10",src:a.country.photo_path,alt:"Country Flag"},null,8,Z)]),s("div",ee,[s("div",te,r(a.name),1),s("div",re,r(a.hostname),1)])])]),_:2},1024),i(_,null,{default:l(()=>[s("div",se,r(a.ip_address)+" : "+r(a.join_port),1),s("div",ae,r(e(t)("WebQuery: :webquery_port",{webquery_port:a.webquery_port||e(t)("not set")})),1)]),_:2},1024),i(_,null,{default:l(()=>[x(r(a.type.key),1)]),_:2},1024),s("td",oe,[s("div",ne,[m[a.id]===1?(n(),c("span",le,r(e(t)("Server Online")),1)):m[a.id]===-1?(n(),c("span",ie,r(e(t)("Server Offline")),1)):(n(),c("span",de,r(e(t)("Loading"))+"...",1))]),s("div",ce,[u[a.id]===1?(n(),c("span",ue,r(e(t)("WebQuery Online")),1)):u[a.id]===-1?(n(),c("span",fe,r(e(t)("WebQuery Offline")),1)):u[a.id]===0?(n(),c("span",xe)):(n(),c("span",ye,r(e(t)("Loading"))+"...",1))])]),i(_,null,{default:l(()=>[x(r(a.minecraft_version),1)]),_:2},1024),i(_,null,{default:l(()=>[b((n(),c("span",{title:e(C)(a.created_at)},[x(r(e(B)(a.created_at)),1)],8,he)),[[p]])]),_:2},1024),s("td",ge,[b((n(),d(f,{as:"a",title:e(t)("View Server Intel"),href:o.route("admin.server.show",a.id),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:l(()=>[i(e(W),{class:"inline-block w-5 h-5"})]),_:2},1032,["title","href"])),[[p]]),e(g)("update servers")?b((n(),d(f,{key:0,as:"a",href:o.route("admin.server.edit",a.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:e(t)("Edit Server")},{default:l(()=>[i(e(M),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[p]]):y("",!0),e(g)("delete servers")?b((n(),d(f,{key:1,as:"button",method:"DELETE",href:o.route("admin.server.delete",a.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:e(t)("Delete Server")},{default:l(()=>[i(e(H),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[E,{title:"Delete Server?",message:"Are you sure you want to delete this Server permanently? Deleting a Server will also delete all of its associated data including all of its Player & Server Intel data. This action cannot be undone."}],[p]]):y("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{Ce as default};
