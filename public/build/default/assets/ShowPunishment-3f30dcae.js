import{u as G,A as Y}from"./AppLayout-618a91c1.js";import{o as i,d as o,a as e,r as N,A as Z,N as J,x as H,R as q,F as A,g as L,n as z,f as m,t as l,c as g,e as y,b as r,S as Q,T as W,l as X,q as ee,w as d,k as te,u as t,_ as se,j as h,Z as P}from"./app-c5b9eb34.js";import{D as x}from"./DtRowItem-7930aca6.js";import{_ as C}from"./CommonStatusBadge-043f164b.js";import{I as ae}from"./Icon-cc46e8c2.js";import{L as K}from"./LoadingSpinner-75a8fd26.js";import{_ as ne}from"./Chart-ebfcd24a.js";import{r as U}from"./EyeIcon-673f6e76.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-369b2986.js";function le(s,D){return i(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])}function ie(s,D){return i(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"})])}const oe={class:"flex flex-col"},re={id:"tableSection",class:"flex flex-col"},de={class:"overflow-x-auto"},ce={class:"inline-block min-w-full align-middle"},ue={class:"overflow-hidden"},he={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},_e={class:"bg-gray-100 dark:bg-gray-700"},ye={class:"inline-flex items-center"},me=["onClick"],fe={key:0,class:"divide-y divide-gray-200 dark:divide-gray-700"},pe={key:0},xe=["colspan"],ge={key:1},ve=["colspan"],ke={key:0,class:"flex items-center justify-center"},O={__name:"ArrayTable",props:{data:{required:!1,default:()=>[],type:Array},url:{required:!1,type:String},header:{required:!0,type:Array}},setup(s){const D=s,n=N(!0),k=N([]);Z(()=>{D.url?(n.value=!0,J.get(D.url).then(_=>{k.value=_.data.data}).catch(_=>{console.error("Error fetching data",_)}).finally(()=>{n.value=!1})):k.value=D.data});const p=N(""),b=N(""),$=H(()=>{let _=[...k.value];return p.value&&_.sort((I,f)=>{let v=E(I,p.value),c=E(f,p.value);if(v===void 0&&c===void 0)return 0;if(v===void 0)return 1;if(c===void 0)return-1;let w=0;return typeof v=="string"?w=v.localeCompare(c):(v<c&&(w=-1),v>c&&(w=1)),b.value==="desc"?-w:w}),_});function E(_,I){return I.split(".").reduce((f,v)=>(f||{})[v],_)}function j(_){p.value===_?b.value==="asc"?b.value="desc":(p.value="",b.value=""):(p.value=_,b.value="asc")}const V=H(()=>p.value?p.value.replace("-",""):""),T=H(()=>b.value==="desc"?"desc":"asc");return(_,I)=>(i(),o("div",oe,[e("div",re,[e("div",de,[e("div",ce,[e("div",ue,[e("table",he,[e("thead",_e,[e("tr",null,[q(_.$slots,"header",{},()=>[(i(!0),o(A,null,L(s.header,f=>(i(),o("th",{key:f.key,scope:"col",class:z(["px-4 py-3 text-xs font-semibold text-left text-gray-400 dark:text-gray-300",[f.class?f.class:""]])},[e("div",ye,[e("div",{class:"inline-flex items-center uppercase cursor-pointer",onClick:v=>f.sortable?j(f.key):null},[m(l(f.label)+" ",1),f.sortable?(i(),g(ae,{key:0,name:V.value===f.key?T.value==="asc"?"sort-up":"sort-down":"sort-updown",class:z(["inline-block w-3 h-3 ml-1 text-gray-400 dark:text-gray-300",[V.value===f.key?"text-light-blue-500 dark:text-light-blue-400":""]])},null,8,["name","class"])):y("",!0)],8,me)])],2))),128))])])]),n.value?y("",!0):(i(),o("tbody",fe,[(i(!0),o(A,null,L($.value,f=>(i(),o("tr",{key:f.id},[q(_.$slots,"default",{item:f,data:$.value},()=>[(i(!0),o(A,null,L(s.header,v=>(i(),o("td",{key:v.key,class:"px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100"},l(f[v.key]),1))),128))])]))),128)),$.value.length<=0?(i(),o("tr",pe,[e("td",{colspan:s.header.length,class:"px-4 py-3 text-sm font-medium text-center text-gray-500 dark:text-gray-300"},l(_.__("No data found")),9,xe)])):y("",!0)])),n.value?(i(),o("tfoot",ge,[e("tr",null,[e("td",{colspan:s.header.length,class:"px-4 py-3 text-sm font-medium text-center text-gray-500 dark:text-gray-300"},[n.value?(i(),o("div",ke,[r(K,{class:"w-6 h-6",loading:n.value},null,8,["loading"])])):y("",!0)],8,ve)])])):y("",!0)])])])])])]))}},be={class:"px-2 py-4 mx-auto md:py-12 md:px-10 max-w-7xl"},we={class:"flex justify-between mb-8"},Se={class:"flex items-center"},Pe={class:"text-lg font-bold text-gray-500 md:text-3xl dark:text-gray-300"},De={class:"ml-3 text-lg"},$e={class:"flex flex-col space-y-8 text-gray-800 dark:text-gray-300"},Ce={class:"grid w-full gap-2 md:grid-cols-3"},Ie={class:"w-full grid-cols-3 gap-6 p-2 leading-8 bg-white rounded shadow dark:bg-cool-gray-800 md:p-5 md:col-span-2 md:grid"},Ae={class:"col-span-3 -mb-4 text-lg font-bold text-gray-500 dark:text-gray-400"},Ne={class:"font-semibold text-gray-500 dark:text-gray-400"},Le={class:"font-bold"},Ee={class:"font-semibold text-gray-500"},Ve={class:"font-bold"},Te={class:"font-semibold text-gray-500"},je={class:"font-bold"},Fe={class:"font-semibold text-gray-500"},He={key:0},Ue={class:"flex items-center"},Oe={class:"flex-shrink-0 w-8 h-8"},ze=["src"],Me={class:"ml-2"},Be={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Re={key:1,class:"italic text-red-500"},qe={key:1},Ke={class:"flex items-center"},Ge={class:"flex-shrink-0 w-8 h-8"},Ye=["src"],Ze={class:"ml-2"},Je=["content"],Qe={class:"italic text-red-500"},We={key:2,class:"flex items-center space-x-2"},Xe=e("img",{class:"w-8 h-8",src:"/images/pc_head.png",alt:""},null,-1),et={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},tt={class:"font-semibold text-gray-500"},st={class:"font-bold"},at={key:0},nt={class:"font-semibold text-gray-500"},lt={class:"font-bold"},it={class:"font-semibold text-gray-500"},ot={class:"flex items-center font-bold"},rt=["src","alt"],dt={class:"font-semibold text-gray-500"},ct={class:"flex flex-col font-bold"},ut={class:"text-xs text-gray-500 dark:text-gray-400"},ht={class:"font-semibold text-gray-500"},_t={key:0,class:"flex flex-col font-bold"},yt={class:"text-xs text-gray-500 dark:text-gray-400"},mt={key:1,class:"font-bold"},ft={class:"font-semibold text-gray-500"},pt={class:"mt-1 font-bold leading-normal"},xt={class:"font-semibold text-gray-500"},gt={class:"mt-1 font-bold leading-normal"},vt={class:"font-semibold text-gray-500"},kt={class:"font-bold"},bt={class:"font-semibold text-gray-500"},wt={key:0},St={class:"flex items-center"},Pt={class:"flex-shrink-0 w-8 h-8"},Dt=["src"],$t={class:"ml-2"},Ct={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},It={key:1,class:"italic text-red-500"},At={key:1,class:"flex items-center space-x-2"},Nt=e("img",{class:"w-8 h-8",src:"/images/console_head.png",alt:""},null,-1),Lt={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},Et={class:"font-semibold text-gray-500"},Vt={key:0},Tt={class:"flex items-center"},jt={class:"flex-shrink-0 w-8 h-8"},Ft=["src"],Ht={class:"ml-2"},Ut={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Ot={key:1,class:"italic text-red-500"},zt={key:1,class:"flex items-center space-x-2"},Mt=e("img",{class:"w-8 h-8",src:"/images/console_head.png",alt:""},null,-1),Bt={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},Rt={class:"font-semibold text-gray-500"},qt={class:"flex flex-col font-bold"},Kt={class:"text-xs text-gray-500 dark:text-gray-400"},Gt={class:"font-semibold text-gray-500"},Yt={class:"mt-1 font-bold leading-normal"},Zt={key:2},Jt={class:"font-semibold text-gray-500"},Qt={class:"font-bold mt-1 leading-normal"},Wt={key:3},Xt={class:"font-semibold text-gray-500"},es={class:"font-bold mt-0.5 leading-normal"},ts={key:4},ss={class:"font-semibold text-gray-500"},as={key:0},ns={class:"flex flex-wrap gap-2"},ls=["title","href"],is=["disabled"],os={key:2,class:"text-xs text-red-400"},rs={class:"w-full p-2 bg-white rounded shadow dark:bg-cool-gray-800 md:p-5 md:col-span-1"},ds={class:"col-span-3 text-lg font-bold text-gray-500 dark:text-gray-400"},cs={key:1,class:"flex items-center justify-center"},us={class:"text-sm leading-9 list-disc list-inside"},hs={key:2,class:"flex items-center justify-center w-full h-full text-sm italic text-center"},_s={key:3,class:"flex items-center justify-center w-full h-full text-sm italic text-center"},ys=e("br",null,null,-1),ms={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},fs={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},ps={class:"px-3 py-4 whitespace-nowrap"},xs={class:"flex items-center"},gs=["content"],vs=["src"],ks={class:"px-6 py-4 whitespace-nowrap"},bs={key:0},ws={class:"flex items-center"},Ss={class:"flex-shrink-0 h-7 w-7"},Ps=["src"],Ds={class:"ml-2"},$s={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Cs={key:1,class:"italic text-red-500"},Is={key:1},As={class:"flex items-center"},Ns={class:"flex-shrink-0 h-7 w-7"},Ls=["src"],Es={class:"ml-2"},Vs=["content"],Ts={class:"italic text-red-500"},js={key:2,class:"flex items-center space-x-2"},Fs=e("img",{class:"h-7 w-7",src:"/images/pc_head.png",alt:""},null,-1),Hs={class:"text-xs font-bold text-gray-500 dark:text-gray-400"},Us={key:0},Os={key:1,class:"italic text-gray-400"},zs={class:"px-6 py-4 whitespace-nowrap"},Ms={key:0},Bs={class:"flex items-center"},Rs={class:"flex-shrink-0 h-7 w-7"},qs=["src"],Ks={class:"ml-2"},Gs={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Ys={key:1,class:"italic text-red-500"},Zs={key:1,class:"flex items-center space-x-2"},Js=e("img",{class:"h-7 w-7",src:"/images/console_head.png",alt:""},null,-1),Qs={class:"text-xs font-bold text-gray-500 dark:text-gray-400"},Ws=["title"],Xs=["title"],ea=["title"],ta={key:1,class:"italic text-gray-400"},sa={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},aa={key:0},na={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},la={class:"text-sm"},ia={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},oa={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},ra={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},da={class:"flex items-center"},ca=["content"],ua=["src"],ha={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},_a={class:"flex items-center"},ya={class:"font-extrabold text-gray-700 dark:text-gray-300"},ma={class:"whitespace-nowrap"},fa=["title"],pa=["title"],xa={key:1,class:"text-gray-400"},ga={class:"whitespace-nowrap"},va={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},ka={key:1},ba={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},wa={class:"text-sm"},Sa={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},Pa={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},Da={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},$a={class:"flex items-center"},Ca=["content"],Ia=["src"],Aa={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},Na={class:"flex items-center"},La={class:"flex-shrink-0 h-7 w-7"},Ea=["src"],Va={class:"ml-2"},Ta={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},ja={key:1,class:"italic text-red-500"},Fa={class:"whitespace-nowrap"},Ha=["title"],Ua=["title"],Oa={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},Qa={__name:"ShowPunishment",props:{punishment:Object,permissions:Object},setup(s){var v;const D=s,{__:n}=te(),{formatTimeAgoToNow:k,formatToDayDateString:p,secondsToHMS:b}=G(),$=(v=Q().props.banwarden)==null?void 0:v.canShowMaskedIp,E=[{key:"id",label:n("#"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n(""),sortable:!0,class:"text-left w-12"},{key:"type.value",sortable:!0,label:n("Type"),class:"text-center w-1/12"},{key:"uuid",sortable:!0,label:n("Player")},...$?[{key:"ip_address",sortable:!0,label:n("IP Address"),class:"text-center"}]:[],{key:"creator_username",sortable:!0,label:n("Staff")},{key:"reason",sortable:!0,label:n("Reason")},{key:"start_at",sortable:!0,label:n("Date")},{key:"end_at",sortable:!0,label:n("Expires")},{key:"is_active",label:n("Status"),sortable:!0,class:"text-center"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],j=[{key:"id",label:n("ID"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n("Flag"),sortable:!0,class:"text-left w-12"},{key:"player_displayname",label:n("Display name"),sortable:!0},{key:"ip_address",sortable:!0,label:n("IP Address"),class:"text-center"},{key:"session_started_at",label:n("Started"),sortable:!0},{key:"session_ended_at",label:n("Ended"),sortable:!0},{key:"server_id",label:n("Server"),sortable:!0},{key:"play_time",label:n("Play Time"),sortable:!0,class:"text-right"},{key:"afk_time",label:n("Afk Time"),sortable:!0,class:"text-right"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],V=[{key:"id",label:n("ID"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n("Flag"),sortable:!0,class:"text-left w-12"},{key:"username",label:n("Player"),sortable:!0},{key:"ip_address",sortable:!0,label:n("Last IP Address"),class:"text-center"},{key:"last_seen_at",label:n("Last Seen"),sortable:!0},{key:"first_seen_at",label:n("First Seen"),sortable:!0},{key:"play_time",label:n("Play Time"),sortable:!0,class:"text-right"},{key:"punishments_count",label:n("Punishments"),sortable:!0,class:"text-right"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],T=N(null),_=W({file:null}),I=()=>{T.value.click()},f=c=>{const w=c.target.files[0];w&&(_.file=w,_.post(route("player.punishment.evidence.store",D.punishment.id)))};return(c,w)=>{const F=X("InertiaLink"),u=ee("tippy");return i(),g(Y,null,{default:d(()=>{var M,B;return[r(se,{title:t(n)("Punishments")},null,8,["title"]),e("div",be,[e("div",we,[e("div",Se,[e("h1",Pe,l(t(n)("Punishment #:id",{id:s.punishment.id,punish:s.punishment.type.value})),1),e("span",De,[r(C,{status:s.punishment.type.value},null,8,["status"]),r(C,{status:s.punishment.is_active?"active":"inactive"},null,8,["status"]),s.punishment.is_active&&s.punishment.end_at==null?(i(),g(C,{key:0,status:"permanent"})):y("",!0)])])]),e("div",$e,[e("div",Ce,[e("div",Ie,[e("h3",Ae,l(t(n)("Punishment Details")),1),e("div",null,[e("p",Ne,l(t(n)("Type")),1),e("p",Le,[r(C,{status:s.punishment.type.value},null,8,["status"])])]),e("div",null,[e("p",Ee,l(t(n)("ID")),1),e("p",Ve,l(s.punishment.id),1)]),e("div",null,[e("p",Te,l(t(n)("Status")),1),e("p",je,[r(C,{status:s.punishment.is_active?"active":"inactive"},null,8,["status"])])]),e("div",null,[e("p",Fe,l(t(n)("Player")),1),s.punishment.uuid&&s.punishment.victim_player?(i(),o("div",He,[e("div",Ue,[e("div",Oe,[e("img",{class:"w-8 h-8",src:s.punishment.victim_player.avatar_url,alt:""},null,8,ze)]),e("div",Me,[h((i(),g(t(P),{as:"a",href:c.route("player.show",s.punishment.victim_player.uuid),class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.victim_player.uuid},{default:d(()=>[s.punishment.victim_player.username?(i(),o("span",Be,l(s.punishment.victim_player.username),1)):(i(),o("span",Re,l(t(n)("Unknown")),1))]),_:1},8,["href","content"])),[[u]])])])])):s.punishment.uuid?(i(),o("div",qe,[e("div",Ke,[e("div",Ge,[e("img",{class:"w-8 h-8",src:c.route("player.avatar.get",s.punishment.uuid),alt:""},null,8,Ye)]),e("div",Ze,[h((i(),o("div",{class:"font-medium text-gray-900 dark:text-gray-200",content:s.punishment.uuid},[e("span",Qe,l(t(n)("Unknown")),1)],8,Je)),[[u]])])])])):(i(),o("div",We,[Xe,e("span",et,l(t(n)("IP :punish",{punish:s.punishment.type.key})),1)]))]),e("div",null,[e("p",tt,l(t(n)("IP :punish",{punish:s.punishment.type.value})),1),e("p",st,l(s.punishment.is_ipban?t(n)("Yes"):t(n)("No")),1)]),t($)?(i(),o("div",at,[e("p",nt,l(t(n)("IP Address")),1),e("p",lt,l(s.punishment.ip_address||s.punishment.masked_ip_address||t(n)("None")),1)])):y("",!0),e("div",null,[e("p",it,l(t(n)("Country")),1),e("div",ot,[e("img",{src:s.punishment.country.photo_path,alt:s.punishment.country.iso_code,class:"w-8 h-8 mr-2"},null,8,rt),m(" "+l(s.punishment.country.name),1)])]),e("div",null,[e("p",dt,l(t(n)("Date")),1),e("div",ct,[e("span",null,l(t(k)(s.punishment.start_at)),1),e("span",ut,l(t(p)(s.punishment.start_at)),1)])]),e("div",null,[e("p",ht,l(t(n)("Expires")),1),s.punishment.end_at?(i(),o("div",_t,[e("span",null,l(t(k)(s.punishment.end_at)),1),e("span",yt,l(t(p)(s.punishment.end_at)),1)])):(i(),o("div",mt,l(t(n)("Never")),1))]),e("div",null,[e("p",ft,l(t(n)("Reason")),1),e("p",pt,l(s.punishment.reason),1)]),e("div",null,[e("p",xt,l(t(n)("Notes")),1),e("p",gt,l(s.punishment.notes??t(n)("-")),1)]),e("div",null,[e("p",vt,l(t(n)("Server Scope")),1),e("p",kt,l(s.punishment.server_scope),1)]),e("div",null,[e("p",bt,l(t(n)("Punished by")),1),e("div",null,[s.punishment.creator_uuid?(i(),o("div",wt,[e("div",St,[e("div",Pt,[e("img",{class:"w-8 h-8",src:s.punishment.creator_player?s.punishment.creator_player.avatar_url:c.route("player.avatar.get",s.punishment.creator_uuid),alt:""},null,8,Dt)]),e("div",$t,[h((i(),g(t(P),{as:"a",href:s.punishment.creator_player?c.route("player.show",s.punishment.creator_player.uuid):"#",class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.creator_uuid},{default:d(()=>{var a,S;return[(a=s.punishment.creator_player)!=null&&a.username||s.punishment.creator_username?(i(),o("span",Ct,l(((S=s.punishment.creator_player)==null?void 0:S.username)||s.punishment.creator_username),1)):(i(),o("span",It,l(t(n)("Unknown")),1))]}),_:1},8,["href","content"])),[[u]])])])])):(i(),o("div",At,[Nt,e("span",Lt,l(t(n)("CONSOLE")),1)]))])]),s.punishment.removed_at&&(s.punishment.remover_uuid||s.punishment.remover_username)?(i(),o(A,{key:1},[e("div",null,[e("p",Et,l(t(n)("Pardon by")),1),e("div",null,[s.punishment.remover_uuid?(i(),o("div",Vt,[e("div",Tt,[e("div",jt,[e("img",{class:"w-8 h-8",src:s.punishment.remover_player?s.punishment.remover_player.avatar_url:c.route("player.avatar.get",s.punishment.remover_uuid),alt:""},null,8,Ft)]),e("div",Ht,[h((i(),g(t(P),{as:"a",href:s.punishment.remover_player?c.route("player.show",s.punishment.remover_player.uuid):"#",class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.remover_uuid},{default:d(()=>{var a,S;return[(a=s.punishment.remover_player)!=null&&a.username||s.punishment.creator_username?(i(),o("span",Ut,l(((S=s.punishment.remover_player)==null?void 0:S.username)||s.punishment.creator_username),1)):(i(),o("span",Ot,l(t(n)("Unknown")),1))]}),_:1},8,["href","content"])),[[u]])])])])):(i(),o("div",zt,[Mt,e("span",Bt,l(t(n)("CONSOLE")),1)]))])]),e("div",null,[e("p",Rt,l(t(n)("Pardon at")),1),e("div",qt,[e("span",null,l(t(k)(s.punishment.removed_at)),1),e("span",Kt,l(t(p)(s.punishment.removed_at)),1)])]),e("div",null,[e("p",Gt,l(t(n)("Pardon Reason")),1),e("p",Yt,l(s.punishment.removed_reason??t(n)("-")),1)])],64)):y("",!0),s.punishment.plugin_punishment_id?(i(),o("div",Zt,[e("p",Jt,l(t(n)("Plugin Punishment ID")),1),e("p",Qt,l(s.punishment.plugin_punishment_id),1)])):y("",!0),s.punishment.origin_server_name?(i(),o("div",Wt,[e("p",Xt,l(t(n)("Origin Server")),1),e("p",es,l(s.punishment.origin_server_name),1)])):y("",!0),s.permissions.canViewEvidence?(i(),o("div",ts,[e("p",ss,l(t(n)("Uploaded Evidence")),1),s.punishment.evidences<=0&&!s.permissions.canCreateEvidence?(i(),o("p",as,l("-"))):y("",!0),e("div",ns,[(i(!0),o(A,null,L(s.punishment.evidences,a=>h((i(),o("a",{key:a.id,title:a.file_name,target:"_blank",href:c.route("player.punishment.evidence.show",{playerPunishment:s.punishment.id,evidence:a.id}),class:"p-1.5 dark:bg-gray-900 bg-gray-200 rounded"},[r(t(le),{class:"w-6 h-6 p-0.5"})],8,ls)),[[u]])),128)),s.permissions.canCreateEvidence?(i(),o("input",{key:0,ref_key:"fileRef",ref:T,type:"file",class:"hidden",onInput:f},null,544)):y("",!0),s.permissions.canCreateEvidence?(i(),o("button",{key:1,disabled:t(_).processing,class:"p-1.5 dark:bg-gray-900 bg-gray-200 rounded",onClick:I},[t(_).processing?y("",!0):(i(),g(t(ie),{key:0,class:"w-6 h-6 p-0.5"})),r(K,{loading:t(_).processing,class:"w-6 h-6 p-1"},null,8,["loading"])],8,is)):y("",!0),t(_).errors.file?(i(),o("p",os,l(t(_).errors.file),1)):y("",!0)])])):y("",!0)]),e("div",rs,[e("h3",ds,l(t(n)("AI Insights")),1),s.punishment.insights&&s.punishment.insights.score?(i(),g(ne,{key:0,options:{series:[{type:"gauge",startAngle:180,endAngle:0,center:["50%","75%"],radius:"90%",min:0,max:1,splitNumber:8,axisLine:{lineStyle:{width:6,color:[[.25,"#7CFFB2"],[.5,"#58D9F9"],[.75,"#FDDD60"],[1,"#FF6E76"]]}},pointer:{icon:"path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",length:"12%",width:20,offsetCenter:[0,"-60%"],itemStyle:{color:"auto"}},axisTick:{length:12,lineStyle:{color:"auto",width:2}},splitLine:{length:20,lineStyle:{color:"auto",width:5}},axisLabel:{color:"#464646",fontSize:20,distance:-60,rotate:"tangential",formatter:function(a){return""}},title:{offsetCenter:[0,"-10%"],fontSize:20},detail:{fontSize:30,offsetCenter:[0,"-35%"],valueAnimation:!0,formatter:function(a){return Math.round(a*100)+""},color:"inherit"},data:[{value:((M=s.punishment.insights)==null?void 0:M.score)/100,name:t(n)("Score")}]}]},height:"250px",autoresize:!0},null,8,["options"])):y("",!0),s.punishment.insights&&s.punishment.insights.insights?(i(),o("div",cs,[e("ul",us,[(i(!0),o(A,null,L((B=s.punishment.insights)==null?void 0:B.insights,a=>(i(),o("li",{key:a},l(a),1))),128))])])):y("",!0),s.punishment.insights?y("",!0):(i(),o("div",hs,l(t(n)("No insights available! Check back later.")),1)),s.punishment.insights&&s.punishment.insights.status==="generating"?(i(),o("div",_s,[m(l(t(n)("Generating insights. Hang tight!"))+" ",1),ys,m(" "+l(t(n)("Please refresh the page after few seconds.")),1)])):y("",!0)])]),e("div",null,[e("h3",ms,l(t(n)("Last 5 Punishments")),1),e("div",fs,[r(O,{url:c.route("player.punishment.show.history",s.punishment.id),header:E,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[r(x,null,{default:d(()=>[h((i(),g(t(P),{as:"a",href:c.route("player.punishment.show",a.id),class:z(["cursor-pointer focus:outline-none hover:underline",a.is_active?"font-bold dark:text-gray-300":""]),content:t(n)("View details")},{default:d(()=>[m(l(a.id),1)]),_:2},1032,["href","class","content"])),[[u]])]),_:2},1024),e("td",ps,[e("div",xs,[h((i(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,vs)],8,gs)),[[u]])])]),r(x,{class:"text-center"},{default:d(()=>[r(C,{status:a.type.value},null,8,["status"])]),_:2},1024),e("td",ks,[a.uuid&&a.victim_player?(i(),o("div",bs,[e("div",ws,[e("div",Ss,[e("img",{class:"h-7 w-7",src:a.victim_player.avatar_url,alt:""},null,8,Ps)]),e("div",Ds,[h((i(),g(t(P),{as:"a",href:c.route("player.show",a.victim_player.uuid),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.victim_player.uuid},{default:d(()=>[a.victim_player.username?(i(),o("span",$s,l(a.victim_player.username),1)):(i(),o("span",Cs,l(t(n)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])])):a.uuid?(i(),o("div",Is,[e("div",As,[e("div",Ns,[e("img",{class:"h-7 w-7",src:c.route("player.avatar.get",a.uuid),alt:""},null,8,Ls)]),e("div",Es,[h((i(),o("div",{class:"text-sm font-medium text-gray-900 dark:text-gray-200",content:a.uuid},[e("span",Ts,l(t(n)("Unknown")),1)],8,Vs)),[[u]])])])])):(i(),o("div",js,[Fs,e("span",Hs,l(t(n)("IP :punish",{punish:a.type.key})),1)]))]),t($)?(i(),g(x,{key:0,class:"text-center"},{default:d(()=>[a.ip_address||a.masked_ip_address?(i(),o("span",Us,l(a.ip_address||a.masked_ip_address),1)):(i(),o("span",Os,l(t(n)("None")),1))]),_:2},1024)):y("",!0),e("td",zs,[a.creator_uuid?(i(),o("div",Ms,[e("div",Bs,[e("div",Rs,[e("img",{class:"h-7 w-7",src:a.creator_player?a.creator_player.avatar_url:c.route("player.avatar.get",a.creator_uuid),alt:""},null,8,qs)]),e("div",Ks,[h((i(),g(t(P),{as:"a",href:a.creator_player?c.route("player.show",a.creator_player.uuid):"#",class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.creator_uuid},{default:d(()=>{var S,R;return[(S=a.creator_player)!=null&&S.username||a.creator_username?(i(),o("span",Gs,l(((R=a.creator_player)==null?void 0:R.username)||a.creator_username),1)):(i(),o("span",Ys,l(t(n)("Unknown")),1))]}),_:2},1032,["href","content"])),[[u]])])])])):(i(),o("div",Zs,[Js,e("span",Qs,l(t(n)("CONSOLE")),1)]))]),r(x,null,{default:d(()=>[h((i(),o("p",{title:a.reason,class:"w-20 truncate"},[m(l(a.reason),1)],8,Ws)),[[u]])]),_:2},1024),r(x,{class:"whitespace-nowrap"},{default:d(()=>[h((i(),o("span",{title:t(p)(a.start_at)},[m(l(t(k)(a.start_at)),1)],8,Xs)),[[u]])]),_:2},1024),r(x,{class:"whitespace-nowrap"},{default:d(()=>[a.end_at?h((i(),o("span",{key:0,title:t(p)(a.end_at)},[m(l(t(k)(a.end_at)),1)],8,ea)),[[u]]):(i(),o("span",ta,l(t(n)("None")),1))]),_:2},1024),r(x,{class:"text-center"},{default:d(()=>[r(C,{status:a.is_active?"active":"inactive"},null,8,["status"])]),_:2},1024),e("td",sa,[h((i(),g(t(P),{title:t(n)("View details"),as:"a",href:c.route("player.punishment.show",a.id),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["title","href"])),[[u]])])]),_:1},8,["url"])])]),s.permissions.canViewSessions?(i(),o("div",aa,[e("h3",na,[m(l(t(n)("Last 5 Sessions"))+" ",1),e("span",la,l(t(n)("(before this punishment)")),1)]),e("div",ia,[r(O,{url:c.route("player.punishment.show.session",s.punishment.id),header:j,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[e("td",oa,l(a.id),1),e("td",ra,[e("div",da,[h((i(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,ua)],8,ca)),[[u]])])]),e("td",ha,[e("div",_a,[r(F,{as:"a",href:c.route("player.intel.session.show",{player:a.player_uuid,session:a.id}),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline"},{default:d(()=>[e("span",ya,l(a.player_displayname)+" ("+l(a.player_username)+") ",1)]),_:2},1032,["href"])])]),r(x,{class:"text-center"},{default:d(()=>[h((i(),o("span",ma,[m(l(a.player_ip_address||"-"),1)])),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((i(),o("span",{class:"whitespace-nowrap",title:t(p)(a.session_started_at)},[m(l(t(k)(a.session_started_at)),1)],8,fa)),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[a.session_ended_at?h((i(),o("span",{key:0,class:"whitespace-nowrap",title:t(p)(a.session_ended_at)},[m(l(t(k)(a.session_ended_at)),1)],8,pa)),[[u]]):(i(),o("span",xa,"—"))]),_:2},1024),r(x,null,{default:d(()=>[h((i(),o("span",ga,[m(l(a.server.name),1)])),[[u]])]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(l(t(b)(a.play_time,!0)),1)]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(l(t(b)(a.afk_time,!0)),1)]),_:2},1024),e("td",va,[h((i(),g(F,{as:"a",href:c.route("player.intel.session.show",{player:a.player_uuid,session:a.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:t(n)("View Session Details")},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[u]])])]),_:1},8,["url"])])])):y("",!0),s.permissions.canViewAlts?(i(),o("div",ka,[e("h3",ba,[m(l(t(n)("Possible Alts"))+" ",1),e("span",wa,l(t(n)("(players with similar ip address)")),1)]),e("div",Sa,[r(O,{url:c.route("player.punishment.show.alt",s.punishment.id),header:V,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[e("td",Pa,l(a.id),1),e("td",Da,[e("div",$a,[h((i(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,Ia)],8,Ca)),[[u]])])]),e("td",Aa,[e("div",Na,[e("div",La,[e("img",{class:"h-7 w-7",src:a.avatar_url,alt:""},null,8,Ea)]),e("div",Va,[h((i(),g(t(P),{as:"a",href:c.route("player.show",a.uuid),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.uuid},{default:d(()=>[a.username?(i(),o("span",Ta,l(a.username),1)):(i(),o("span",ja,l(t(n)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])]),r(x,{class:"text-center"},{default:d(()=>[h((i(),o("span",Fa,[m(l(a.ip_address||"-"),1)])),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((i(),o("span",{class:"whitespace-nowrap",title:t(p)(a.last_seen_at)},[m(l(t(k)(a.last_seen_at)),1)],8,Ha)),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((i(),o("span",{class:"whitespace-nowrap",title:t(p)(a.first_seen_at)},[m(l(t(k)(a.first_seen_at)),1)],8,Ua)),[[u]])]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(l(t(b)(a.play_time,!0)),1)]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(l(a.punishments_count),1)]),_:2},1024),e("td",Oa,[h((i(),g(F,{as:"a",href:c.route("player.show",{player:a.uuid}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:t(n)("View Details")},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[u]])])]),_:1},8,["url"])])])):y("",!0)])])]}),_:1})}}};export{Qa as default};
