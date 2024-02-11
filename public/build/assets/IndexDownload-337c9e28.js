import{u as y,A as g}from"./AppLayout-e8e9e144.js";import{q as k,o as n,c as p,w as o,k as v,b as a,u as e,A as D,a as l,t as r,$ as c,f as u,j as f,d as m}from"./app-75c47b55.js";import{D as h,_ as A}from"./DtRowItem-becf00fe.js";import{r as j}from"./CloudArrowDownIcon-3af178f4.js";import{r as N}from"./EyeIcon-6b9e7415.js";import"./useAuthorizable-ad6a95c3.js";import"./XMarkIcon-51958feb.js";const T={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},B={class:"flex justify-between mb-8"},H={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},S={class:"flex"},V={class:"flex flex-col md:flex-row md:space-x-4"},$=["title"],C={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},I=["href","title"],J={__name:"IndexDownload",props:{downloads:Object,filters:Object},setup(w){const{__:t}=v(),{formatTimeAgoToNow:x,formatToDayDateString:_}=y(),b=[{key:"name",sortable:!0,label:t("Name")},{key:"download_count",label:t("Download Count"),sortable:!0,class:"text-center hidden md:table-cell"},{key:"created_at",label:t("Added"),sortable:!0,class:"w-1/12 hidden md:table-cell"},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(d,O)=>{const i=k("tippy");return n(),p(g,null,{default:o(()=>[a(D,{title:e(t)("Downloads")},null,8,["title"]),l("div",T,[l("div",B,[l("h1",H,r(e(t)("Downloads")),1),l("div",S,[a(e(c),{href:d.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:o(()=>[l("span",null,r(e(t)("Homepage")),1)]),_:1},8,["href"])])]),l("div",V,[a(A,{class:"bg-white rounded shadow dark:bg-gray-800 w-full",header:b,data:w.downloads,filters:w.filters},{default:o(({item:s})=>[a(h,null,{default:o(()=>[a(e(c),{href:d.route("download.show",s.slug),class:"hover:text-light-blue-400 hover:underline"},{default:o(()=>[u(r(s.name),1)]),_:2},1032,["href"])]),_:2},1024),a(h,{class:"text-center hidden md:table-cell"},{default:o(()=>[u(r(s.download_count),1)]),_:2},1024),a(h,{class:"whitespace-nowrap hidden md:table-cell"},{default:o(()=>[f((n(),m("span",{title:e(_)(s.created_at)},[u(r(e(x)(s.created_at)),1)],8,$)),[[i]])]),_:2},1024),l("td",C,[f((n(),m("a",{href:d.route("download.download",s.slug),target:"_blank",class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:e(t)("Download")},[a(e(j),{class:"inline-block w-5 h-5"})],8,I)),[[i]]),f((n(),p(e(c),{as:"a",href:d.route("download.show",s.slug),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:e(t)("Show Details")},{default:o(()=>[a(e(N),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[i]])])]),_:1},8,["data","filters"])])])]),_:1})}}};export{J as default};
