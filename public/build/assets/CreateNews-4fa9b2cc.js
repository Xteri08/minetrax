import{_ as w}from"./InputError-75b6a878.js";import{_ as k}from"./SecondaryButton-5b9d58de.js";import{L as N}from"./LoadingButton-273a5680.js";import{X as P}from"./XInput-d1bcdeaa.js";import{E as C}from"./easymde-89803663.js";import{X as V}from"./XSelect-ca0e17f5.js";import{_ as j,T as A,l as i,o as E,c as D,w as c,b as l,a as e,t as n,i as p,j as m,v as M,m as S,p as U,f as _,N as u}from"./app-75c47b55.js";import{_ as L}from"./AdminLayout-cf4e9002.js";import"./AppLayout-e8e9e144.js";import"./useAuthorizable-ad6a95c3.js";import"./use-resolve-button-type-00fbb76a.js";import"./CloudArrowDownIcon-3af178f4.js";import"./index-77cea35f.js";const B={components:{AdminLayout:L,XSelect:V,JetInputError:w,LoadingButton:N,JetSecondaryButton:k,XInput:P},data(){return{form:A({title:"",body:"",type:0,is_published:!0,is_pinned:!1,is_commentable:!0,photo:null}),photoPreview:null,easyMDE:null}},mounted(){this.easyMDE=new C({previewClass:"editor-preview prose max-w-none"})},methods:{addNews(){this.$refs.photo&&(this.form.photo=this.$refs.photo.files[0]),this.form.body=this.easyMDE.value(),this.form.post(route("admin.news.store"),{})},updatePhotoPreview(){const o=new FileReader;o.onload=t=>{this.photoPreview=t.target.result},o.readAsDataURL(this.$refs.photo.files[0])},selectNewPhoto(){this.$refs.photo.click()}}},I={class:"py-12 px-10 max-w-6xl mx-auto"},T={class:"flex justify-between mb-8"},X={class:"font-bold text-3xl text-gray-500 dark:text-gray-300"},z={class:"mt-10 sm:mt-0"},J={class:"mt-5 md:mt-0"},R={class:"shadow overflow-hidden sm:rounded-md"},F={class:"px-4 py-5 bg-white dark:bg-cool-gray-800 sm:p-6"},G={class:"grid grid-cols-6 gap-6"},O={class:"col-span-6 sm:col-span-6"},q={class:"col-span-6 sm:col-span-6"},H={class:"col-span-6 sm:col-span-6"},K={class:"col-span-6 sm:col-span-3"},Q={for:"photo",class:"block text-sm font-medium text-gray-700 dark:text-gray-400"},W={class:"mt-2"},Y={class:"flex items-center col-span-6 sm:col-span-3"},Z={class:"text-base font-medium text-gray-900 dark:text-gray-400"},$={class:"mt-4 flex space-x-4"},ee={class:"flex items-start"},se={class:"flex items-center h-5"},oe={class:"ml-3 text-sm"},te={for:"is_published",class:"font-medium text-gray-700 dark:text-gray-300"},re={class:"flex items-start"},le={class:"flex items-center h-5"},ne={class:"ml-3 text-sm"},ie={for:"is_pinned",class:"font-medium text-gray-700 dark:text-gray-300"},ae={class:"flex items-start"},de={class:"flex items-center h-5"},me={class:"ml-3 text-sm"},ce={for:"is_commentable",class:"font-medium text-gray-700 dark:text-gray-300"},ue={class:"px-4 py-3 bg-gray-50 dark:bg-cool-gray-800 sm:px-6 flex justify-end"};function pe(o,t,_e,fe,s,a){const f=i("app-head"),h=i("inertia-link"),b=i("x-select"),g=i("x-input"),d=i("jet-input-error"),y=i("jet-secondary-button"),x=i("loading-button"),v=i("AdminLayout");return E(),D(v,null,{default:c(()=>[l(f,{title:"Create News"}),e("div",I,[e("div",T,[e("h1",X,n(o.__("Create News")),1),l(h,{href:o.route("admin.news.index"),class:"inline-flex items-center px-4 py-2 bg-gray-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-500 active:bg-gray-600 focus:outline-none focus:border-gray-500 focus:shadow-outline-gray transition ease-in-out duration-150"},{default:c(()=>[e("span",null,n(o.__("Cancel")),1)]),_:1},8,["href"])]),e("div",z,[e("div",J,[e("form",{onSubmit:t[7]||(t[7]=p((...r)=>a.addNews&&a.addNews(...r),["prevent"]))},[e("div",R,[e("div",F,[e("div",G,[e("div",O,[l(b,{id:"type",modelValue:s.form.type,"onUpdate:modelValue":t[0]||(t[0]=r=>s.form.type=r),name:"type",error:s.form.errors.type,label:o.__("News Category"),"select-list":{0:o.__("General"),1:o.__("Announcement"),2:o.__("Event")}},null,8,["modelValue","error","label","select-list"])]),e("div",q,[l(g,{id:"title",modelValue:s.form.title,"onUpdate:modelValue":t[1]||(t[1]=r=>s.form.title=r),label:o.__("Title"),error:s.form.errors.title,type:"text",name:"title","help-error-flex":"flex-row"},null,8,["modelValue","label","error"])]),e("div",H,[m(e("textarea",{id:"body","onUpdate:modelValue":t[2]||(t[2]=r=>s.form.body=r),"aria-label":"body",name:"body",class:"mt-1 focus:ring-light-blue-500 focus:border-light-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"},null,512),[[M,s.form.body]]),l(d,{message:s.form.errors.body,class:"mt-2"},null,8,["message"])]),e("div",K,[e("input",{id:"photo",ref:"photo",type:"file",class:"hidden",onChange:t[3]||(t[3]=(...r)=>a.updatePhotoPreview&&a.updatePhotoPreview(...r))},null,544),e("label",Q,n(o.__("Image")),1),m(e("div",W,[e("span",{class:"block rounded w-48 h-32",style:U("background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('"+s.photoPreview+"');")},null,4)],512),[[S,s.photoPreview]]),l(y,{class:"mt-2 mr-2",type:"button",onClick:p(a.selectNewPhoto,["prevent"])},{default:c(()=>[_(n(o.__("Select A New Image")),1)]),_:1},8,["onClick"]),l(d,{message:s.form.errors.photo,class:"mt-2"},null,8,["message"])]),e("div",Y,[e("fieldset",null,[e("legend",Z,n(o.__("Options")),1),e("div",$,[e("div",ee,[e("div",se,[m(e("input",{id:"is_published","onUpdate:modelValue":t[4]||(t[4]=r=>s.form.is_published=r),name:"is_published",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[u,s.form.is_published]])]),e("div",oe,[e("label",te,n(o.__("Published")),1)])]),e("div",re,[e("div",le,[m(e("input",{id:"is_pinned","onUpdate:modelValue":t[5]||(t[5]=r=>s.form.is_pinned=r),name:"is_pinned",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[u,s.form.is_pinned]])]),e("div",ne,[e("label",ie,n(o.__("Pinned")),1)])]),e("div",ae,[e("div",de,[m(e("input",{id:"is_commentable","onUpdate:modelValue":t[6]||(t[6]=r=>s.form.is_commentable=r),name:"is_commentable",type:"checkbox",class:"focus:ring-light-blue-400 h-4 w-4 text-light-blue-500 border-gray-300 rounded dark:border-gray-900 rounded dark:bg-cool-gray-900"},null,512),[[u,s.form.is_commentable]])]),e("div",me,[e("label",ce,n(o.__("Allow Comments")),1)])])]),l(d,{message:s.form.errors.is_pinned,class:"mt-2"},null,8,["message"]),l(d,{message:s.form.errors.is_published,class:"mt-2"},null,8,["message"]),l(d,{message:s.form.errors.is_commentable,class:"mt-2"},null,8,["message"])])])])]),e("div",ue,[l(x,{loading:s.form.processing,class:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-light-blue-500 hover:bg-light-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500 disabled:opacity-50",type:"submit"},{default:c(()=>[_(n(o.__("Add News")),1)]),_:1},8,["loading"])])])],32)])])])]),_:1})}const Ae=j(B,[["render",pe]]);export{Ae as default};
