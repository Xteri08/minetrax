import{q as h,o as c,c as v,w as o,k as w,b as a,u as l,A as x,a as s,t as i,j as d,d as p,f as _}from"./app-75c47b55.js";import{u as b}from"./AppLayout-e8e9e144.js";import{_ as g}from"./AdminLayout-cf4e9002.js";import{_ as k}from"./ServerIntelServerSelector-6d6d5166.js";import{D as f,_ as D}from"./DtRowItem-becf00fe.js";import"./useAuthorizable-ad6a95c3.js";import"./use-resolve-button-type-00fbb76a.js";import"./CloudArrowDownIcon-3af178f4.js";import"./index-77cea35f.js";import"./XSelect-ca0e17f5.js";import"./XMarkIcon-51958feb.js";const C={class:"p-4 mx-auto space-y-4 px-10"},S={class:"px-4 py-4 text-sm font-medium text-gray-800 whitespace-nowrap dark:text-gray-200"},T={class:"px-4"},j={class:"text-sm text-gray-800 dark:text-gray-200"},B={class:"whitespace-pre-wrap"},H=["title"],I=["title"],K={__name:"Consolelog",props:{serverList:{type:Object},filters:{type:Object},consoleHistory:{type:Object}},setup(r){const{__:e}=w(),{formatTimeAgoToNow:m,formatToDayDateString:u}=b(),y=[{key:"id",label:e("ID"),sortable:!0,class:"text-left"},{key:"data",label:e("Data"),sortable:!1},{key:"server_id",label:e("Server"),sortable:!0},{key:"created_at",label:e("Created"),sortable:!0}];return(L,N)=>{const n=h("tippy");return c(),v(g,null,{default:o(()=>[a(x,{title:l(e)("ConsoleLog - ServerIntel")},null,8,["title"]),s("div",C,[a(k,{title:l(e)("ConsoleLog"),"server-list":r.serverList,filters:r.filters},null,8,["title","server-list","filters"]),s("div",null,[a(D,{class:"bg-white rounded shadow dark:bg-gray-800",header:y,data:r.consoleHistory,filters:r.filters},{default:o(({item:t})=>[s("td",S,i(t.id),1),s("td",T,[s("div",j,[s("pre",B,i(t.data),1)])]),a(f,null,{default:o(()=>[d((c(),p("span",{class:"whitespace-nowrap",title:`Server ID: ${t.server.id}`},[_(i(t.server.name),1)],8,H)),[[n]])]),_:2},1024),a(f,null,{default:o(()=>[d((c(),p("span",{class:"whitespace-nowrap",title:l(u)(t.created_at)},[_(i(l(m)(t.created_at)),1)],8,I)),[[n]])]),_:2},1024)]),_:1},8,["data","filters"])])])]),_:1})}}};export{K as default};
