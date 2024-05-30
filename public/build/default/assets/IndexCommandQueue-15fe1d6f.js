import{_ as q}from"./AdminLayout-39a088b1.js";import{u as T}from"./useAuthorizable-4eb80770.js";import{u as j}from"./AppLayout-61780049.js";import{l as b,q as v,o as r,c as m,w as o,k as E,b as l,u as a,a as d,t as s,j as c,f as u,e as g,d as n}from"./app-36941795.js";import{D as i,_ as I}from"./DtRowItem-847b574c.js";import{_ as N}from"./CommonStatusBadge-2455511f.js";import{r as B}from"./ArrowPathIcon-9a2312ce.js";import{r as L}from"./TrashIcon-51b0a2c1.js";import"./use-resolve-button-type-3019aa78.js";import"./open-closed-d7f55052.js";import"./CloudArrowDownIcon-cef84ce3.js";import"./index-fd5cea4d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-64bdcc8f.js";import"./vue-multiselect.esm-cd21c9ae.js";import"./XMarkIcon-3276e35f.js";import"./hidden-15c50a1b.js";const R={class:"px-10 py-8 mx-auto text-gray-400"},S={class:"flex justify-between mb-4"},V={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},$={class:"flex"},H={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},O=["title"],Q={key:1,class:"text-gray-500 italic"},F={class:"text-xs dark:text-gray-500"},P=["title"],z={key:1,class:"text-gray-500 italic"},U={key:0,class:"text-gray-600 dark:text-gray-400"},G={key:1,class:"text-red-500 italic"},J={key:1,class:"italic text-gray-500"},K=["title"],M={key:1,class:"italic"},W=["title"],X={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},fe={__name:"IndexCommandQueue",props:{commandQueues:Object,filters:Object},setup(k){const{can:y}=T(),{__:t}=E(),{formatTimeAgoToNow:f,formatToDayDateString:x}=j(),C=[{key:"id",label:t("ID"),sortable:!0},{key:"parsed_command",label:t("Command"),sortable:!0,filterable:{type:"text"}},{key:"server_id",sortable:!0,label:t("Server"),filterable:{key:"server.name",type:"text"}},{key:"status",label:t("Status"),sortable:!0,filterable:{type:"multiselect",options:["pending","running","failed","cancelled","deferred","completed"]}},{key:"last_attempt_at",sortable:!0,label:t("Last Attempted"),class:"whitespace-nowrap"},{key:"execute_at",sortable:!0,label:t("Execute At"),class:"whitespace-nowrap"},{key:"tag",sortable:!0,label:t("Tags"),filterable:{type:"text"}},{key:"player_id",sortable:!0,label:t("For Player"),class:"whitespace-nowrap",filterable:{key:"player.username",type:"text"}},{key:"output",label:t("Output"),sortable:!0,filterable:{type:"text"}},{key:"created_at",sortable:!0,label:t("Created"),class:"whitespace-nowrap"},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(_,Y)=>{const D=b("app-head"),h=b("InertiaLink"),A=b("inertia-link"),w=v("confirm"),p=v("tippy");return r(),m(q,null,{default:o(()=>[l(D,{title:a(t)("Command History")},null,8,["title"]),d("div",R,[d("div",S,[d("h1",V,s(a(t)("Command History")),1),d("div",$,[a(y)("create command_queues")?c((r(),m(h,{key:0,href:_.route("admin.command-queue.retry"),method:"post",as:"button",class:"mr-2 inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-green-500 border border-transparent rounded-md hover:bg-green-700 active:bg-green-900 focus:outline-none focus:border-green-900 focus:shadow-outline-gray"},{default:o(()=>[u(s(a(t)("Retry All Failed")),1)]),_:1},8,["href"])),[[w,{message:"Are you sure you wanna retry all failed & cancelled command queues? Please note that failed commands automatically get retried till they reach the max attempts."}]]):g("",!0)])]),l(I,{class:"bg-white rounded shadow dark:bg-gray-800",header:C,data:k.commandQueues,filters:k.filters},{default:o(({item:e})=>[d("td",H,s(e.id),1),l(i,{class:"text-left font-mono"},{default:o(()=>[u(s(e.parsed_command),1)]),_:2},1024),l(i,{class:"text-left whitespace-nowrap"},{default:o(()=>[u(s(e.server.name),1)]),_:2},1024),l(i,{class:"text-left"},{default:o(()=>[l(N,{status:e.status.value},null,8,["status"])]),_:2},1024),l(i,null,{default:o(()=>[e.last_attempt_at?c((r(),n("div",{key:0,class:"whitespace-nowrap",title:a(x)(e.last_attempt_at)},[u(s(a(f)(e.last_attempt_at)),1)],8,O)),[[p]]):(r(),n("div",Q,s("not yet"))),d("div",F,s(a(t)("Attempts: :attempts/:max_attempts",{attempts:e.attempts,max_attempts:e.max_attempts??1})),1)]),_:2},1024),l(i,null,{default:o(()=>[e.execute_at?c((r(),n("div",{key:0,class:"text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap",title:a(x)(e.execute_at)},[u(s(a(f)(e.execute_at)),1)],8,P)),[[p]]):(r(),n("div",z,s("no delay")))]),_:2},1024),l(i,{class:"text-left"},{default:o(()=>[u(s(e.tag??a(t)("none")),1)]),_:2},1024),l(i,{class:"text-center"},{default:o(()=>[e.player_id?c((r(),m(A,{key:0,as:"a",href:_.route("player.show",e.player.uuid),class:"text-sm font-medium text-gray-900 dark:text-gray-400 focus:outline-none cursor-pointer hover:underline",content:e.player.uuid},{default:o(()=>[e.player.username?(r(),n("span",U,s(e.player.username),1)):(r(),n("span",G,s(a(t)("Unknown")),1))]),_:2},1032,["href","content"])),[[p]]):(r(),n("div",J,s(a(t)("none")),1))]),_:2},1024),l(i,{class:"text-left"},{default:o(()=>[e.output?(r(),n("span",{key:0,class:"truncate",title:e.output},s(e.output.length>10?e.output.substring(0,10)+"...":e.output),9,K)):(r(),n("span",M,s(a(t)("none")),1))]),_:2},1024),l(i,null,{default:o(()=>[c((r(),n("div",{class:"text-sm font-medium text-gray-900 dark:text-gray-300 whitespace-nowrap",title:a(x)(e.created_at)},[u(s(a(f)(e.created_at)),1)],8,W)),[[p]])]),_:2},1024),d("td",X,[a(y)("create command_queues")&&["failed","cancelled"].includes(e.status.value)?c((r(),m(h,{key:0,as:"button",method:"post",data:{id:e.id},href:_.route("admin.command-queue.retry"),class:"inline-flex items-center justify-center text-green-600 dark:text-green-500 hover:text-green-800 dark:hover:text-green-800",title:a(t)("Retry Command")},{default:o(()=>[l(a(B),{class:"inline-block w-5 h-5"})]),_:2},1032,["data","href","title"])),[[p]]):g("",!0),a(y)("delete command_queues")&&["pending","failed","cancelled","completed","deferred"].includes(e.status.value)?c((r(),m(h,{key:1,as:"button",method:"DELETE",data:{id:e.id},href:_.route("admin.command-queue.delete"),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:a(t)("Delete Command")},{default:o(()=>[l(a(L),{class:"inline-block w-5 h-5"})]),_:2},1032,["data","href","title"])),[[w,{message:"Are you sure you want to delete this command history?"}],[p]]):g("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{fe as default};
