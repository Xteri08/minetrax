import{u as Z,A as J}from"./AppLayout-87a341ab.js";import{o as l,d as o,a as e,r as E,A as Q,N as W,x as H,R as q,F as I,g as A,n as M,f as m,t as i,c as g,e as _,b as r,S as X,T as ee,l as te,q as K,w as d,k as se,u as t,_ as ae,j as h,Z as S}from"./app-c3c5fbdb.js";import{D as x}from"./DtRowItem-62594dfe.js";import{_ as C}from"./CommonStatusBadge-7755280c.js";import{I as ne}from"./Icon-d029d847.js";import{L as G}from"./LoadingSpinner-feaebbba.js";import{_ as le}from"./Chart-259c19f6.js";import{r as U}from"./EyeIcon-4acf2261.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./useAuthorizable-cdd101fc.js";function ie(s,P){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])}function oe(s,P){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v12m6-6H6"})])}function re(s,P){return l(),o("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[e("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z","clip-rule":"evenodd"})])}const de={class:"flex flex-col"},ce={id:"tableSection",class:"flex flex-col"},ue={class:"overflow-x-auto"},he={class:"inline-block min-w-full align-middle"},_e={class:"overflow-hidden"},ye={class:"min-w-full divide-y divide-gray-200 dark:divide-gray-700"},me={class:"bg-gray-100 dark:bg-gray-700"},fe={class:"inline-flex items-center"},pe=["onClick"],xe={key:0,class:"divide-y divide-gray-200 dark:divide-gray-700"},ge={key:0},ve=["colspan"],ke={key:1},we=["colspan"],be={key:0,class:"flex items-center justify-center"},z={__name:"ArrayTable",props:{data:{required:!1,default:()=>[],type:Array},url:{required:!1,type:String},header:{required:!0,type:Array}},setup(s){const P=s,n=E(!0),k=E([]);Q(()=>{P.url?(n.value=!0,W.get(P.url).then(y=>{k.value=y.data.data}).catch(y=>{console.error("Error fetching data",y)}).finally(()=>{n.value=!1})):k.value=P.data});const p=E(""),w=E(""),$=H(()=>{let y=[...k.value];return p.value&&y.sort((L,f)=>{let v=N(L,p.value),c=N(f,p.value);if(v===void 0&&c===void 0)return 0;if(v===void 0)return 1;if(c===void 0)return-1;let b=0;return typeof v=="string"?b=v.localeCompare(c):(v<c&&(b=-1),v>c&&(b=1)),w.value==="desc"?-b:b}),y});function N(y,L){return L.split(".").reduce((f,v)=>(f||{})[v],y)}function j(y){p.value===y?w.value==="asc"?w.value="desc":(p.value="",w.value=""):(p.value=y,w.value="asc")}const V=H(()=>p.value?p.value.replace("-",""):""),T=H(()=>w.value==="desc"?"desc":"asc");return(y,L)=>(l(),o("div",de,[e("div",ce,[e("div",ue,[e("div",he,[e("div",_e,[e("table",ye,[e("thead",me,[e("tr",null,[q(y.$slots,"header",{},()=>[(l(!0),o(I,null,A(s.header,f=>(l(),o("th",{key:f.key,scope:"col",class:M(["px-4 py-3 text-xs font-semibold text-left text-gray-400 dark:text-gray-300",[f.class?f.class:""]])},[e("div",fe,[e("div",{class:"inline-flex items-center uppercase cursor-pointer",onClick:v=>f.sortable?j(f.key):null},[m(i(f.label)+" ",1),f.sortable?(l(),g(ne,{key:0,name:V.value===f.key?T.value==="asc"?"sort-up":"sort-down":"sort-updown",class:M(["inline-block w-3 h-3 ml-1 text-gray-400 dark:text-gray-300",[V.value===f.key?"text-light-blue-500 dark:text-light-blue-400":""]])},null,8,["name","class"])):_("",!0)],8,pe)])],2))),128))])])]),n.value?_("",!0):(l(),o("tbody",xe,[(l(!0),o(I,null,A($.value,f=>(l(),o("tr",{key:f.id},[q(y.$slots,"default",{item:f,data:$.value},()=>[(l(!0),o(I,null,A(s.header,v=>(l(),o("td",{key:v.key,class:"px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-100"},i(f[v.key]),1))),128))])]))),128)),$.value.length<=0?(l(),o("tr",ge,[e("td",{colspan:s.header.length,class:"px-4 py-3 text-sm font-medium text-center text-gray-500 dark:text-gray-300"},i(y.__("No data found")),9,ve)])):_("",!0)])),n.value?(l(),o("tfoot",ke,[e("tr",null,[e("td",{colspan:s.header.length,class:"px-4 py-3 text-sm font-medium text-center text-gray-500 dark:text-gray-300"},[n.value?(l(),o("div",be,[r(G,{class:"w-6 h-6",loading:n.value},null,8,["loading"])])):_("",!0)],8,we)])])):_("",!0)])])])])])]))}},Se={class:"px-2 py-4 mx-auto md:py-12 md:px-10 max-w-7xl"},Pe={class:"flex justify-between mb-8"},De={class:"flex items-center"},$e={class:"text-lg font-bold text-gray-500 md:text-3xl dark:text-gray-300"},Ce={class:"ml-3 text-lg"},Le={class:"flex flex-col space-y-8 text-gray-800 dark:text-gray-300"},Ie={class:"grid w-full gap-2 md:grid-cols-3"},Ee={class:"w-full grid-cols-3 gap-6 p-2 leading-8 bg-white rounded shadow dark:bg-cool-gray-800 md:p-5 md:col-span-2 md:grid"},Ae={class:"col-span-3 -mb-4 text-lg font-bold text-gray-500 dark:text-gray-400"},Ne={class:"font-semibold text-gray-500 dark:text-gray-400"},Ve={class:"font-bold"},Te={class:"font-semibold text-gray-500"},je={class:"font-bold"},Fe={class:"font-semibold text-gray-500"},He={class:"font-bold"},Ue={class:"font-semibold text-gray-500"},ze={key:0},Me={class:"flex items-center"},Oe={class:"flex-shrink-0 w-8 h-8"},Be=["src"],Re={class:"ml-2"},qe={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Ke={key:1,class:"italic text-red-500"},Ge={key:1},Ye={class:"flex items-center"},Ze={class:"flex-shrink-0 w-8 h-8"},Je=["src"],Qe={class:"ml-2"},We=["content"],Xe={class:"italic text-red-500"},et={key:2,class:"flex items-center space-x-2"},tt=e("img",{class:"w-8 h-8",src:"/images/pc_head.png",alt:""},null,-1),st={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},at={class:"font-semibold text-gray-500"},nt={class:"font-bold"},lt={key:0},it={class:"font-semibold text-gray-500"},ot={class:"font-bold"},rt={class:"font-semibold text-gray-500"},dt={class:"flex items-center font-bold"},ct=["src","alt"],ut={class:"font-semibold text-gray-500"},ht={class:"flex flex-col font-bold"},_t={class:"text-xs text-gray-500 dark:text-gray-400"},yt={class:"font-semibold text-gray-500"},mt={key:0,class:"flex flex-col font-bold"},ft={class:"text-xs text-gray-500 dark:text-gray-400"},pt={key:1,class:"font-bold"},xt={class:"font-semibold text-gray-500"},gt={class:"mt-1 font-bold leading-normal"},vt={class:"font-semibold text-gray-500"},kt={class:"mt-1 font-bold leading-normal"},wt={class:"font-semibold text-gray-500"},bt={class:"font-bold"},St={class:"font-semibold text-gray-500"},Pt={key:0},Dt={class:"flex items-center"},$t={class:"flex-shrink-0 w-8 h-8"},Ct=["src"],Lt={class:"ml-2"},It={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Et={key:1,class:"italic text-red-500"},At={key:1,class:"flex items-center space-x-2"},Nt=e("img",{class:"w-8 h-8",src:"/images/console_head.png",alt:""},null,-1),Vt={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},Tt={class:"font-semibold text-gray-500"},jt={key:0},Ft={class:"flex items-center"},Ht={class:"flex-shrink-0 w-8 h-8"},Ut=["src"],zt={class:"ml-2"},Mt={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Ot={key:1,class:"italic text-red-500"},Bt={key:1,class:"flex items-center space-x-2"},Rt=e("img",{class:"w-8 h-8",src:"/images/console_head.png",alt:""},null,-1),qt={class:"text-sm font-bold text-gray-500 dark:text-gray-400"},Kt={class:"font-semibold text-gray-500"},Gt={class:"flex flex-col font-bold"},Yt={class:"text-xs text-gray-500 dark:text-gray-400"},Zt={class:"font-semibold text-gray-500"},Jt={class:"mt-1 font-bold leading-normal"},Qt={key:2},Wt={class:"font-semibold text-gray-500"},Xt={class:"mt-1 font-bold leading-normal"},es={key:3},ts={class:"font-semibold text-gray-500"},ss={class:"font-bold mt-0.5 leading-normal"},as={key:4},ns={class:"font-semibold text-gray-500"},ls={key:0},is={class:"flex flex-wrap gap-2"},os=["title","href"],rs=["disabled"],ds={key:2,class:"text-xs text-red-400"},cs={class:"w-full p-2 bg-white rounded shadow dark:bg-cool-gray-800 md:p-5 md:col-span-1"},us={class:"col-span-3 text-lg font-bold text-gray-500 dark:text-gray-400"},hs={key:1,class:"flex items-center justify-center"},_s={class:"text-sm leading-9 list-disc list-inside"},ys={key:2,class:"flex items-center justify-center w-full h-full text-sm italic text-center"},ms={key:3,class:"flex items-center justify-center w-full h-full text-sm italic text-center"},fs=e("br",null,null,-1),ps={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},xs={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},gs={class:"px-3 py-4 whitespace-nowrap"},vs={class:"flex items-center"},ks=["content"],ws=["src"],bs={class:"px-6 py-4 whitespace-nowrap"},Ss={key:0},Ps={class:"flex items-center"},Ds={class:"flex-shrink-0 h-7 w-7"},$s=["src"],Cs={class:"ml-2"},Ls={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Is={key:1,class:"italic text-red-500"},Es={key:1},As={class:"flex items-center"},Ns={class:"flex-shrink-0 h-7 w-7"},Vs=["src"],Ts={class:"ml-2"},js=["content"],Fs={class:"italic text-red-500"},Hs={key:2,class:"flex items-center space-x-2"},Us=e("img",{class:"h-7 w-7",src:"/images/pc_head.png",alt:""},null,-1),zs={class:"text-xs font-bold text-gray-500 dark:text-gray-400"},Ms={key:0},Os={key:1,class:"italic text-gray-400"},Bs={class:"px-6 py-4 whitespace-nowrap"},Rs={key:0},qs={class:"flex items-center"},Ks={class:"flex-shrink-0 h-7 w-7"},Gs=["src"],Ys={class:"ml-2"},Zs={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Js={key:1,class:"italic text-red-500"},Qs={key:1,class:"flex items-center space-x-2"},Ws=e("img",{class:"h-7 w-7",src:"/images/console_head.png",alt:""},null,-1),Xs={class:"text-xs font-bold text-gray-500 dark:text-gray-400"},ea=["title"],ta=["title"],sa=["title"],aa={key:1,class:"italic text-gray-400"},na={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},la={key:0},ia={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},oa={class:"text-sm"},ra={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},da={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},ca={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},ua={class:"flex items-center"},ha=["content"],_a=["src"],ya={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},ma={class:"flex items-center"},fa={class:"font-extrabold text-gray-700 dark:text-gray-300"},pa={class:"whitespace-nowrap"},xa=["title"],ga=["title"],va={key:1,class:"text-gray-400"},ka={class:"whitespace-nowrap"},wa={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},ba={key:1},Sa={class:"mb-2 text-2xl font-bold text-gray-500 dark:text-gray-300"},Pa={class:"text-sm"},Da={class:"w-full bg-white rounded shadow dark:bg-cool-gray-800"},$a={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},Ca={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},La={class:"flex items-center"},Ia=["content"],Ea=["src"],Aa={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},Na={class:"flex items-center"},Va={class:"flex-shrink-0 h-7 w-7"},Ta=["src"],ja={class:"ml-2"},Fa={key:0,class:"font-extrabold text-gray-700 dark:text-gray-300"},Ha={key:1,class:"italic text-red-500"},Ua={class:"whitespace-nowrap"},za=["title"],Ma=["title"],Oa={class:"px-4 py-3 text-sm font-medium text-center whitespace-nowrap"},Xa={__name:"ShowPunishment",props:{punishment:Object,permissions:Object},setup(s){var v;const P=s,{__:n}=se(),{formatTimeAgoToNow:k,formatToDayDateString:p,secondsToHMS:w}=Z(),$=(v=X().props.banwarden)==null?void 0:v.canShowMaskedIp,N=[{key:"id",label:n("#"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n(""),sortable:!0,class:"text-left w-12"},{key:"type.value",sortable:!0,label:n("Type"),class:"text-center w-1/12"},{key:"uuid",sortable:!0,label:n("Player")},...$?[{key:"ip_address",sortable:!0,label:n("IP Address"),class:"text-center"}]:[],{key:"creator_username",sortable:!0,label:n("Staff")},{key:"reason",sortable:!0,label:n("Reason")},{key:"start_at",sortable:!0,label:n("Date")},{key:"end_at",sortable:!0,label:n("Expires")},{key:"is_active",label:n("Status"),sortable:!0,class:"text-center"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],j=[{key:"id",label:n("ID"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n("Flag"),sortable:!0,class:"text-left w-12"},{key:"player_displayname",label:n("Display name"),sortable:!0},{key:"ip_address",sortable:!0,label:n("IP Address"),class:"text-center"},{key:"session_started_at",label:n("Started"),sortable:!0},{key:"session_ended_at",label:n("Ended"),sortable:!0},{key:"server_id",label:n("Server"),sortable:!0},{key:"play_time",label:n("Play Time"),sortable:!0,class:"text-right"},{key:"afk_time",label:n("Afk Time"),sortable:!0,class:"text-right"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],V=[{key:"id",label:n("ID"),sortable:!0,class:"text-left w-12"},{key:"country_id",label:n("Flag"),sortable:!0,class:"text-left w-12"},{key:"username",label:n("Player"),sortable:!0},{key:"ip_address",sortable:!0,label:n("Last IP Address"),class:"text-center"},{key:"last_seen_at",label:n("Last Seen"),sortable:!0},{key:"first_seen_at",label:n("First Seen"),sortable:!0},{key:"play_time",label:n("Play Time"),sortable:!0,class:"text-right"},{key:"punishments_count",label:n("Punishments"),sortable:!0,class:"text-right"},{key:"actions",label:n(""),sortable:!1,class:"w-1 text-right"}],T=E(null),y=ee({file:null}),L=()=>{T.value.click()},f=c=>{const b=c.target.files[0];b&&(y.file=b,y.post(route("player.punishment.evidence.store",P.punishment.id)))};return(c,b)=>{const F=te("InertiaLink"),u=K("tippy"),Y=K("confirm");return l(),g(J,null,{default:d(()=>{var O,B;return[r(ae,{title:t(n)("Punishments")},null,8,["title"]),e("div",Se,[e("div",Pe,[e("div",De,[e("h1",$e,i(t(n)("Punishment #:id",{id:s.punishment.id,punish:s.punishment.type.value})),1),e("span",Ce,[r(C,{status:s.punishment.type.value},null,8,["status"]),r(C,{status:s.punishment.is_active?"active":"inactive"},null,8,["status"]),s.punishment.is_active&&s.punishment.end_at==null?(l(),g(C,{key:0,status:"permanent"})):_("",!0)])])]),e("div",Le,[e("div",Ie,[e("div",Ee,[e("h3",Ae,i(t(n)("Punishment Details")),1),e("div",null,[e("p",Ne,i(t(n)("Type")),1),e("p",Ve,[r(C,{status:s.punishment.type.value},null,8,["status"])])]),e("div",null,[e("p",Te,i(t(n)("ID")),1),e("p",je,i(s.punishment.id),1)]),e("div",null,[e("p",Fe,i(t(n)("Status")),1),e("p",He,[r(C,{status:s.punishment.is_active?"active":"inactive"},null,8,["status"])])]),e("div",null,[e("p",Ue,i(t(n)("Player")),1),s.punishment.uuid&&s.punishment.victim_player?(l(),o("div",ze,[e("div",Me,[e("div",Oe,[e("img",{class:"w-8 h-8",src:s.punishment.victim_player.avatar_url,alt:""},null,8,Be)]),e("div",Re,[h((l(),g(t(S),{as:"a",href:c.route("player.show",s.punishment.victim_player.uuid),class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.victim_player.uuid},{default:d(()=>[s.punishment.victim_player.username?(l(),o("span",qe,i(s.punishment.victim_player.username),1)):(l(),o("span",Ke,i(t(n)("Unknown")),1))]),_:1},8,["href","content"])),[[u]])])])])):s.punishment.uuid?(l(),o("div",Ge,[e("div",Ye,[e("div",Ze,[e("img",{class:"w-8 h-8",src:c.route("player.avatar.get",s.punishment.uuid),alt:""},null,8,Je)]),e("div",Qe,[h((l(),o("div",{class:"font-medium text-gray-900 dark:text-gray-200",content:s.punishment.uuid},[e("span",Xe,i(t(n)("Unknown")),1)],8,We)),[[u]])])])])):(l(),o("div",et,[tt,e("span",st,i(t(n)("IP :punish",{punish:s.punishment.type.key})),1)]))]),e("div",null,[e("p",at,i(t(n)("IP :punish",{punish:s.punishment.type.value})),1),e("p",nt,i(s.punishment.is_ipban?t(n)("Yes"):t(n)("No")),1)]),t($)?(l(),o("div",lt,[e("p",it,i(t(n)("IP Address")),1),e("p",ot,i(s.punishment.ip_address||s.punishment.masked_ip_address||t(n)("None")),1)])):_("",!0),e("div",null,[e("p",rt,i(t(n)("Country")),1),e("div",dt,[e("img",{src:s.punishment.country.photo_path,alt:s.punishment.country.iso_code,class:"w-8 h-8 mr-2"},null,8,ct),m(" "+i(s.punishment.country.name),1)])]),e("div",null,[e("p",ut,i(t(n)("Date")),1),e("div",ht,[e("span",null,i(t(k)(s.punishment.start_at)),1),e("span",_t,i(t(p)(s.punishment.start_at)),1)])]),e("div",null,[e("p",yt,i(t(n)("Expires")),1),s.punishment.end_at?(l(),o("div",mt,[e("span",null,i(t(k)(s.punishment.end_at)),1),e("span",ft,i(t(p)(s.punishment.end_at)),1)])):(l(),o("div",pt,i(t(n)("Never")),1))]),e("div",null,[e("p",xt,i(t(n)("Reason")),1),e("p",gt,i(s.punishment.reason),1)]),e("div",null,[e("p",vt,i(t(n)("Notes")),1),e("p",kt,i(s.punishment.notes??t(n)("-")),1)]),e("div",null,[e("p",wt,i(t(n)("Server Scope")),1),e("p",bt,i(s.punishment.server_scope),1)]),e("div",null,[e("p",St,i(t(n)("Punished by")),1),e("div",null,[s.punishment.creator_uuid?(l(),o("div",Pt,[e("div",Dt,[e("div",$t,[e("img",{class:"w-8 h-8",src:s.punishment.creator_player?s.punishment.creator_player.avatar_url:c.route("player.avatar.get",s.punishment.creator_uuid),alt:""},null,8,Ct)]),e("div",Lt,[h((l(),g(t(S),{as:"a",href:s.punishment.creator_player?c.route("player.show",s.punishment.creator_player.uuid):"#",class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.creator_uuid},{default:d(()=>{var a,D;return[(a=s.punishment.creator_player)!=null&&a.username||s.punishment.creator_username?(l(),o("span",It,i(((D=s.punishment.creator_player)==null?void 0:D.username)||s.punishment.creator_username),1)):(l(),o("span",Et,i(t(n)("Unknown")),1))]}),_:1},8,["href","content"])),[[u]])])])])):(l(),o("div",At,[Nt,e("span",Vt,i(t(n)("CONSOLE")),1)]))])]),s.punishment.removed_at&&(s.punishment.remover_uuid||s.punishment.remover_username)?(l(),o(I,{key:1},[e("div",null,[e("p",Tt,i(t(n)("Pardon by")),1),e("div",null,[s.punishment.remover_uuid?(l(),o("div",jt,[e("div",Ft,[e("div",Ht,[e("img",{class:"w-8 h-8",src:s.punishment.remover_player?s.punishment.remover_player.avatar_url:c.route("player.avatar.get",s.punishment.remover_uuid),alt:""},null,8,Ut)]),e("div",zt,[h((l(),g(t(S),{as:"a",href:s.punishment.remover_player?c.route("player.show",s.punishment.remover_player.uuid):"#",class:"font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:s.punishment.remover_uuid},{default:d(()=>{var a,D;return[(a=s.punishment.remover_player)!=null&&a.username||s.punishment.creator_username?(l(),o("span",Mt,i(((D=s.punishment.remover_player)==null?void 0:D.username)||s.punishment.creator_username),1)):(l(),o("span",Ot,i(t(n)("Unknown")),1))]}),_:1},8,["href","content"])),[[u]])])])])):(l(),o("div",Bt,[Rt,e("span",qt,i(t(n)("CONSOLE")),1)]))])]),e("div",null,[e("p",Kt,i(t(n)("Pardon at")),1),e("div",Gt,[e("span",null,i(t(k)(s.punishment.removed_at)),1),e("span",Yt,i(t(p)(s.punishment.removed_at)),1)])]),e("div",null,[e("p",Zt,i(t(n)("Pardon Reason")),1),e("p",Jt,i(s.punishment.removed_reason??t(n)("-")),1)])],64)):_("",!0),s.punishment.plugin_punishment_id?(l(),o("div",Qt,[e("p",Wt,i(t(n)("Plugin Punishment ID")),1),e("p",Xt,i(s.punishment.plugin_punishment_id),1)])):_("",!0),s.punishment.origin_server_name?(l(),o("div",es,[e("p",ts,i(t(n)("Origin Server")),1),e("p",ss,i(s.punishment.origin_server_name),1)])):_("",!0),s.permissions.canViewEvidence?(l(),o("div",as,[e("p",ns,i(t(n)("Uploaded Evidence")),1),s.punishment.evidences<=0&&!s.permissions.canCreateEvidence?(l(),o("p",ls,i("-"))):_("",!0),e("div",is,[(l(!0),o(I,null,A(s.punishment.evidences,a=>(l(),o("div",{key:a.id,class:"p-1.5 relative dark:bg-gray-900 bg-gray-200 rounded group"},[h((l(),o("a",{target:"_blank",title:t(n)("View :file",{file:a.file_name}),href:c.route("player.punishment.evidence.show",{playerPunishment:s.punishment.id,evidence:a.id})},[r(t(ie),{class:"w-6 h-6 p-0.5"})],8,os)),[[u]]),s.permissions.canDeleteEvidence?h((l(),g(t(S),{key:0,as:"button",class:"block",method:"DELETE",href:c.route("player.punishment.evidence.delete",{playerPunishment:s.punishment.id,evidence:a.id})},{default:d(()=>[r(t(re),{class:"opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-red-400 absolute -top-2 -right-2 w-5 h-5 p-0.5 text-gray-500 dark:text-gray-200 cursor-pointer"})]),_:2},1032,["href"])),[[Y,{message:"Are you sure you want to delete this evidence?"}],[u]]):_("",!0)]))),128)),s.permissions.canCreateEvidence?(l(),o("input",{key:0,ref_key:"fileRef",ref:T,type:"file",class:"hidden",onInput:f},null,544)):_("",!0),s.permissions.canCreateEvidence?(l(),o("button",{key:1,disabled:t(y).processing,class:"p-1.5 dark:bg-gray-900 bg-gray-200 rounded",onClick:L},[t(y).processing?_("",!0):(l(),g(t(oe),{key:0,class:"w-6 h-6 p-0.5"})),r(G,{loading:t(y).processing,class:"w-6 h-6 p-1"},null,8,["loading"])],8,rs)):_("",!0),t(y).errors.file?(l(),o("p",ds,i(t(y).errors.file),1)):_("",!0)])])):_("",!0)]),e("div",cs,[e("h3",us,i(t(n)("AI Insights")),1),s.punishment.insights&&s.punishment.insights.score?(l(),g(le,{key:0,options:{series:[{type:"gauge",startAngle:180,endAngle:0,center:["50%","75%"],radius:"90%",min:0,max:1,splitNumber:8,axisLine:{lineStyle:{width:6,color:[[.25,"#7CFFB2"],[.5,"#58D9F9"],[.75,"#FDDD60"],[1,"#FF6E76"]]}},pointer:{icon:"path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",length:"12%",width:20,offsetCenter:[0,"-60%"],itemStyle:{color:"auto"}},axisTick:{length:12,lineStyle:{color:"auto",width:2}},splitLine:{length:20,lineStyle:{color:"auto",width:5}},axisLabel:{color:"#464646",fontSize:20,distance:-60,rotate:"tangential",formatter:function(a){return""}},title:{offsetCenter:[0,"-10%"],fontSize:20},detail:{fontSize:30,offsetCenter:[0,"-35%"],valueAnimation:!0,formatter:function(a){return Math.round(a*100)+""},color:"inherit"},data:[{value:((O=s.punishment.insights)==null?void 0:O.score)/100,name:t(n)("Score")}]}]},height:"250px",autoresize:!0},null,8,["options"])):_("",!0),s.punishment.insights&&s.punishment.insights.insights?(l(),o("div",hs,[e("ul",_s,[(l(!0),o(I,null,A((B=s.punishment.insights)==null?void 0:B.insights,a=>(l(),o("li",{key:a},i(a),1))),128))])])):_("",!0),s.punishment.insights?_("",!0):(l(),o("div",ys,i(t(n)("No insights available! Check back later.")),1)),s.punishment.insights&&s.punishment.insights.status==="generating"?(l(),o("div",ms,[m(i(t(n)("Generating insights. Hang tight!"))+" ",1),fs,m(" "+i(t(n)("Please refresh the page after few seconds.")),1)])):_("",!0)])]),e("div",null,[e("h3",ps,i(t(n)("Last 5 Punishments")),1),e("div",xs,[r(z,{url:c.route("player.punishment.show.history",s.punishment.id),header:N,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[r(x,null,{default:d(()=>[h((l(),g(t(S),{as:"a",href:c.route("player.punishment.show",a.id),class:M(["cursor-pointer focus:outline-none hover:underline",a.is_active?"font-bold dark:text-gray-300":""]),content:t(n)("View details")},{default:d(()=>[m(i(a.id),1)]),_:2},1032,["href","class","content"])),[[u]])]),_:2},1024),e("td",gs,[e("div",vs,[h((l(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,ws)],8,ks)),[[u]])])]),r(x,{class:"text-center"},{default:d(()=>[r(C,{status:a.type.value},null,8,["status"])]),_:2},1024),e("td",bs,[a.uuid&&a.victim_player?(l(),o("div",Ss,[e("div",Ps,[e("div",Ds,[e("img",{class:"h-7 w-7",src:a.victim_player.avatar_url,alt:""},null,8,$s)]),e("div",Cs,[h((l(),g(t(S),{as:"a",href:c.route("player.show",a.victim_player.uuid),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.victim_player.uuid},{default:d(()=>[a.victim_player.username?(l(),o("span",Ls,i(a.victim_player.username),1)):(l(),o("span",Is,i(t(n)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])])):a.uuid?(l(),o("div",Es,[e("div",As,[e("div",Ns,[e("img",{class:"h-7 w-7",src:c.route("player.avatar.get",a.uuid),alt:""},null,8,Vs)]),e("div",Ts,[h((l(),o("div",{class:"text-sm font-medium text-gray-900 dark:text-gray-200",content:a.uuid},[e("span",Fs,i(t(n)("Unknown")),1)],8,js)),[[u]])])])])):(l(),o("div",Hs,[Us,e("span",zs,i(t(n)("IP :punish",{punish:a.type.key})),1)]))]),t($)?(l(),g(x,{key:0,class:"text-center"},{default:d(()=>[a.ip_address||a.masked_ip_address?(l(),o("span",Ms,i(a.ip_address||a.masked_ip_address),1)):(l(),o("span",Os,i(t(n)("None")),1))]),_:2},1024)):_("",!0),e("td",Bs,[a.creator_uuid?(l(),o("div",Rs,[e("div",qs,[e("div",Ks,[e("img",{class:"h-7 w-7",src:a.creator_player?a.creator_player.avatar_url:c.route("player.avatar.get",a.creator_uuid),alt:""},null,8,Gs)]),e("div",Ys,[h((l(),g(t(S),{as:"a",href:a.creator_player?c.route("player.show",a.creator_player.uuid):"#",class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.creator_uuid},{default:d(()=>{var D,R;return[(D=a.creator_player)!=null&&D.username||a.creator_username?(l(),o("span",Zs,i(((R=a.creator_player)==null?void 0:R.username)||a.creator_username),1)):(l(),o("span",Js,i(t(n)("Unknown")),1))]}),_:2},1032,["href","content"])),[[u]])])])])):(l(),o("div",Qs,[Ws,e("span",Xs,i(t(n)("CONSOLE")),1)]))]),r(x,null,{default:d(()=>[h((l(),o("p",{title:a.reason,class:"w-20 truncate"},[m(i(a.reason),1)],8,ea)),[[u]])]),_:2},1024),r(x,{class:"whitespace-nowrap"},{default:d(()=>[h((l(),o("span",{title:t(p)(a.start_at)},[m(i(t(k)(a.start_at)),1)],8,ta)),[[u]])]),_:2},1024),r(x,{class:"whitespace-nowrap"},{default:d(()=>[a.end_at?h((l(),o("span",{key:0,title:t(p)(a.end_at)},[m(i(t(k)(a.end_at)),1)],8,sa)),[[u]]):(l(),o("span",aa,i(t(n)("None")),1))]),_:2},1024),r(x,{class:"text-center"},{default:d(()=>[r(C,{status:a.is_active?"active":"inactive"},null,8,["status"])]),_:2},1024),e("td",na,[h((l(),g(t(S),{title:t(n)("View details"),as:"a",href:c.route("player.punishment.show",a.id),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800"},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["title","href"])),[[u]])])]),_:1},8,["url"])])]),s.permissions.canViewSessions?(l(),o("div",la,[e("h3",ia,[m(i(t(n)("Last 5 Sessions"))+" ",1),e("span",oa,i(t(n)("(before this punishment)")),1)]),e("div",ra,[r(z,{url:c.route("player.punishment.show.session",s.punishment.id),header:j,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[e("td",da,i(a.id),1),e("td",ca,[e("div",ua,[h((l(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,_a)],8,ha)),[[u]])])]),e("td",ya,[e("div",ma,[r(F,{as:"a",href:c.route("player.intel.session.show",{player:a.player_uuid,session:a.id}),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline"},{default:d(()=>[e("span",fa,i(a.player_displayname)+" ("+i(a.player_username)+") ",1)]),_:2},1032,["href"])])]),r(x,{class:"text-center"},{default:d(()=>[h((l(),o("span",pa,[m(i(a.player_ip_address||"-"),1)])),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((l(),o("span",{class:"whitespace-nowrap",title:t(p)(a.session_started_at)},[m(i(t(k)(a.session_started_at)),1)],8,xa)),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[a.session_ended_at?h((l(),o("span",{key:0,class:"whitespace-nowrap",title:t(p)(a.session_ended_at)},[m(i(t(k)(a.session_ended_at)),1)],8,ga)),[[u]]):(l(),o("span",va,"—"))]),_:2},1024),r(x,null,{default:d(()=>[h((l(),o("span",ka,[m(i(a.server.name),1)])),[[u]])]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(i(t(w)(a.play_time,!0)),1)]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(i(t(w)(a.afk_time,!0)),1)]),_:2},1024),e("td",wa,[h((l(),g(F,{as:"a",href:c.route("player.intel.session.show",{player:a.player_uuid,session:a.id}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:t(n)("View Session Details")},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[u]])])]),_:1},8,["url"])])])):_("",!0),s.permissions.canViewAlts?(l(),o("div",ba,[e("h3",Sa,[m(i(t(n)("Possible Alts"))+" ",1),e("span",Pa,i(t(n)("(players with similar ip address)")),1)]),e("div",Da,[r(z,{url:c.route("player.punishment.show.alt",s.punishment.id),header:V,class:"w-full bg-white rounded shadow dark:bg-gray-800"},{default:d(({item:a})=>[e("td",$a,i(a.id),1),e("td",Ca,[e("div",La,[h((l(),o("div",{class:"flex-shrink-0 w-8 h-8 focus:outline-none",content:a.country.name},[e("img",{class:"w-8 h-8",src:a.country.photo_path,alt:""},null,8,Ea)],8,Ia)),[[u]])])]),e("td",Aa,[e("div",Na,[e("div",Va,[e("img",{class:"h-7 w-7",src:a.avatar_url,alt:""},null,8,Ta)]),e("div",ja,[h((l(),g(t(S),{as:"a",href:c.route("player.show",a.uuid),class:"text-sm font-medium text-gray-900 cursor-pointer dark:text-gray-200 focus:outline-none hover:underline",content:a.uuid},{default:d(()=>[a.username?(l(),o("span",Fa,i(a.username),1)):(l(),o("span",Ha,i(t(n)("Unknown")),1))]),_:2},1032,["href","content"])),[[u]])])])]),r(x,{class:"text-center"},{default:d(()=>[h((l(),o("span",Ua,[m(i(a.ip_address||"-"),1)])),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((l(),o("span",{class:"whitespace-nowrap",title:t(p)(a.last_seen_at)},[m(i(t(k)(a.last_seen_at)),1)],8,za)),[[u]])]),_:2},1024),r(x,null,{default:d(()=>[h((l(),o("span",{class:"whitespace-nowrap",title:t(p)(a.first_seen_at)},[m(i(t(k)(a.first_seen_at)),1)],8,Ma)),[[u]])]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(i(t(w)(a.play_time,!0)),1)]),_:2},1024),r(x,{class:"text-right"},{default:d(()=>[m(i(a.punishments_count),1)]),_:2},1024),e("td",Oa,[h((l(),g(F,{as:"a",href:c.route("player.show",{player:a.uuid}),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:t(n)("View Details")},{default:d(()=>[r(t(U),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[u]])])]),_:1},8,["url"])])])):_("",!0)])])]}),_:1})}}};export{Xa as default};
