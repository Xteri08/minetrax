import{u as y,A as g}from"./AppLayout-af0b6bfa.js";import{q as k,o as n,c as p,w as o,k as v,b as a,u as e,_ as D,a as s,t as r,Z as c,f as u,j as f,d as w}from"./app-3a344ed6.js";import{_ as j}from"./DataTable-948c728d.js";import{D as h}from"./DtRowItem-76ce7e5d.js";import{r as A}from"./CloudArrowDownIcon-5ee2e417.js";import{r as N}from"./EyeIcon-12d09960.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Icon-df033d91.js";import"./useAuthorizable-0b0b1f26.js";import"./vue-multiselect.esm-c1be1a5f.js";import"./XMarkIcon-139c10a2.js";import"./use-resolve-button-type-595b1872.js";import"./hidden-e0f2b245.js";import"./open-closed-8a07f68a.js";const T={class:"py-4 px-2 md:py-12 md:px-10 max-w-7xl mx-auto"},B={class:"flex justify-between mb-8"},S={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},V={class:"flex"},$={class:"flex flex-col md:flex-row md:space-x-4"},C=["title"],H={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},I=["href","title"],W={__name:"IndexDownload",props:{downloads:Object,filters:Object},setup(m){const{__:t}=v(),{formatTimeAgoToNow:_,formatToDayDateString:x}=y(),b=[{key:"name",sortable:!0,label:t("Name"),filterable:{type:"text"}},{key:"download_count",label:t("Download Count"),sortable:!0,class:"text-center hidden md:table-cell"},{key:"created_at",label:t("Added"),sortable:!0,class:"w-1/12 hidden md:table-cell"},{key:"actions",label:t("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(d,O)=>{const i=k("tippy");return n(),p(g,null,{default:o(()=>[a(D,{title:e(t)("Downloads")},null,8,["title"]),s("div",T,[s("div",B,[s("h1",S,r(e(t)("Downloads")),1),s("div",V,[a(e(c),{href:d.route("home"),class:"inline-flex items-center px-4 py-2 bg-gray-400 dark:bg-cool-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:o(()=>[s("span",null,r(e(t)("Homepage")),1)]),_:1},8,["href"])])]),s("div",$,[a(j,{class:"bg-white rounded shadow dark:bg-gray-800 w-full",header:b,data:m.downloads,filters:m.filters},{default:o(({item:l})=>[a(h,null,{default:o(()=>[a(e(c),{href:d.route("download.show",l.slug),class:"hover:text-light-blue-400 hover:underline"},{default:o(()=>[u(r(l.name),1)]),_:2},1032,["href"])]),_:2},1024),a(h,{class:"text-center hidden md:table-cell"},{default:o(()=>[u(r(l.download_count),1)]),_:2},1024),a(h,{class:"whitespace-nowrap hidden md:table-cell"},{default:o(()=>[f((n(),w("span",{title:e(x)(l.created_at)},[u(r(e(_)(l.created_at)),1)],8,C)),[[i]])]),_:2},1024),s("td",H,[f((n(),w("a",{href:d.route("download.download",l.slug),target:"_blank",class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:e(t)("Download")},[a(e(A),{class:"inline-block w-5 h-5"})],8,I)),[[i]]),f((n(),p(e(c),{as:"a",href:d.route("download.show",l.slug),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:e(t)("Show Details")},{default:o(()=>[a(e(N),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[i]])])]),_:1},8,["data","filters"])])])]),_:1})}}};export{W as default};
