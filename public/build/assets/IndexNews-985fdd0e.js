import{_ as T}from"./AdminLayout-cf4e9002.js";import{u as j}from"./useAuthorizable-ad6a95c3.js";import{u as I,I as _}from"./AppLayout-e8e9e144.js";import{l as m,q as k,o as t,c as r,w as n,k as C,b as i,u as s,a,t as o,e as x,d as c,j as u,f as E}from"./app-75c47b55.js";import{D as y,_ as V}from"./DtRowItem-becf00fe.js";import{r as A}from"./EyeIcon-6b9e7415.js";import{r as B}from"./PencilSquareIcon-8ef2fe14.js";import{r as $}from"./TrashIcon-80de9b62.js";import"./use-resolve-button-type-00fbb76a.js";import"./CloudArrowDownIcon-3af178f4.js";import"./index-77cea35f.js";import"./XMarkIcon-51958feb.js";const L={class:"px-10 py-8 mx-auto text-gray-400"},M={class:"flex justify-between mb-4"},O={class:"text-3xl font-bold text-gray-500 dark:text-gray-300"},P={class:"flex"},R={class:"px-4 py-4 text-sm font-medium text-center text-gray-800 whitespace-nowrap dark:text-gray-200"},S={class:"px-4"},q={class:"text-sm text-gray-900"},z={key:0,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-light-blue-100 text-light-blue-800 dark:bg-light-blue-700 dark:bg-opacity-25 dark:text-light-blue-400"},H={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 dark:bg-orange-700 dark:bg-opacity-25 dark:text-orange-400"},F={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-700 dark:bg-opacity-25 dark:text-green-400"},G={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800"},J={class:"px-4 whitespace-nowrap"},K={class:"flex items-center"},Q={key:0,class:"flex-shrink-0 h-10 w-14"},U=["src"],W={class:"ml-4"},X={class:"text-sm font-medium text-gray-900 dark:text-gray-300"},Y=["title"],Z={class:"px-6 py-4 space-x-2 text-sm font-medium text-right whitespace-nowrap"},fe={__name:"IndexNews",props:{newslist:Object,filters:Object},setup(g){const{can:h}=j(),{__:l}=C(),{formatTimeAgoToNow:b,formatToDayDateString:w}=I(),v=[{key:"id",label:l("ID"),sortable:!0,class:"text-center"},{key:"type",sortable:!0,label:l("Type")},{key:"title",sortable:!0,label:l("Title")},{key:"published_at",label:l("Published"),sortable:!0},{key:"is_pinned",label:l("Pinned"),sortable:!0},{key:"created_at",label:l("Created"),sortable:!0,class:"w-1/12"},{key:"actions",label:l("Actions"),sortable:!1,class:"w-1/12 text-right"}];return(p,ee)=>{const N=m("app-head"),f=m("InertiaLink"),d=k("tippy"),D=k("confirm");return t(),r(T,null,{default:n(()=>[i(N,{title:s(l)("Manage News")},null,8,["title"]),a("div",L,[a("div",M,[a("h1",O,o(s(l)("Manage News")),1),a("div",P,[s(h)("create news")?(t(),r(f,{key:0,href:p.route("admin.news.create"),class:"inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray"},{default:n(()=>[a("span",null,o(s(l)("Create News")),1)]),_:1},8,["href"])):x("",!0)])]),i(V,{class:"bg-white rounded shadow dark:bg-gray-800",header:v,data:g.newslist,filters:g.filters},{default:n(({item:e})=>[a("td",R,o(e.id),1),a("td",S,[a("div",q,[e.type.value===0?(t(),c("span",z,o(e.type.key),1)):e.type.value===1?(t(),c("span",H,o(e.type.key),1)):e.type.value===2?(t(),c("span",F,o(e.type.key),1)):(t(),c("span",G,o(e.type.key),1))])]),a("td",J,[a("div",K,[e.photo_url?(t(),c("div",Q,[a("img",{class:"h-10 w-14",src:e.photo_url,alt:""},null,8,U)])):x("",!0),a("div",W,[a("div",X,o(e.title),1)])])]),i(y,null,{default:n(()=>[e.published_at?u((t(),r(_,{key:0,content:s(b)(e.published_at),class:"text-green-500 focus:outline-none",name:"check-circle"},null,8,["content"])),[[d]]):(t(),r(_,{key:1,class:"text-red-500",name:"cross-circle"}))]),_:2},1024),i(y,null,{default:n(()=>[e.is_pinned?(t(),r(_,{key:0,class:"text-green-500",name:"check-circle"})):(t(),r(_,{key:1,class:"text-red-500",name:"cross-circle"}))]),_:2},1024),i(y,null,{default:n(()=>[u((t(),c("span",{title:s(w)(e.created_at)},[E(o(s(b)(e.created_at)),1)],8,Y)),[[d]])]),_:2},1024),a("td",Z,[u((t(),r(f,{as:"a",href:p.route("news.show",e.slug),class:"inline-flex items-center justify-center text-blue-500 hover:text-blue-800",title:s(l)("View News")},{default:n(()=>[i(s(A),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[d]]),s(h)("update news")?u((t(),r(f,{key:0,as:"a",href:p.route("admin.news.edit",e.id),class:"inline-flex items-center justify-center text-yellow-600 dark:text-yellow-500 hover:text-yellow-800 dark:hover:text-yellow-800",title:s(l)("Edit News")},{default:n(()=>[i(s(B),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[d]]):x("",!0),s(h)("delete news")?u((t(),r(f,{key:1,as:"button",method:"DELETE",href:p.route("admin.news.delete",e.id),class:"inline-flex items-center justify-center text-red-600 hover:text-red-900 focus:outline-none",title:s(l)("Delete News")},{default:n(()=>[i(s($),{class:"inline-block w-5 h-5"})]),_:2},1032,["href","title"])),[[D,{message:"Are you sure you want to delete this News permanently?"}],[d]]):x("",!0)])]),_:1},8,["data","filters"])])]),_:1})}}};export{fe as default};
