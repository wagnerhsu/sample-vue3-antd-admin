"use strict";(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[829],{99990:function(t,e,a){a.d(e,{Z:function(){return o}});var s=a(66252),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"},i=a(33058);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=function(t,e){var a=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),s.forEach((function(e){r(t,e,a[e])}))}return t}({},t,e.attrs);return s.Wm(i.Z,s.dG(a,{icon:n}),null)};l.displayName="LeftCircleOutlined",l.inheritAttrs=!1;var o=l},99443:function(t,e,a){a.d(e,{Z:function(){return o}});var s=a(66252),n={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"},i=a(33058);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l=function(t,e){var a=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),s.forEach((function(e){r(t,e,a[e])}))}return t}({},t,e.attrs);return s.Wm(i.Z,s.dG(a,{icon:n}),null)};l.displayName="RightCircleOutlined",l.inheritAttrs=!1;var o=l},6153:function(t,e,a){a.a(t,(async function(t){a(16388);var s=a(30637),n=(a(84324),a(95878)),i=a(66252),r=a(2262),l=a(99990),o=a(99443),c=a(97810),u=a(42119),d=a(33022),f=t([c,d]);[c,d]=f.then?await f:f;const h={class:"custom-slick-arrow",style:{left:"10px"}},m={class:"custom-slick-arrow",style:{right:"10px"}},b=["src"],p=["href"],v=["src"],w=["src"];e.Z=(0,i.aZ)({name:"LoLHeroInfo",setup(t){const e=(0,u.yj)(),a=(0,d.D7)(),f=(0,r.iH)({});return(0,i.bv)((async()=>{const{data:t}=await(0,c.YA)({id:e.params.id});f.value=t,a.updateTabTitle(`${e.meta.title}(${f.value.title})`)})),(t,e)=>((0,i.wg)(),(0,i.j4)((0,r.SU)(n.ZP),{bordered:!1},{default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(n.ZP).Grid,{style:{width:"25%"},hoverable:!1,bordered:!1},{default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(n.ZP),{class:"posters",bordered:!1},{cover:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(s.C),{arrows:"",dots:!1},{prevArrow:(0,i.w5)((()=>[(0,i._)("div",h,[(0,i.Wm)((0,r.SU)(l.Z))])])),nextArrow:(0,i.w5)((()=>[(0,i._)("div",m,[(0,i.Wm)((0,r.SU)(o.Z))])])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.value.posters,(t=>((0,i.wg)(),(0,i.iD)("img",{key:t,src:t,alt:""},null,8,b)))),128))])),_:1})])),default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(n.ZP).Meta,{title:`${f.value.name}  ${f.value.title}`},{description:(0,i.w5)((()=>[(0,i._)("a",{href:`https://101.qq.com/#/hero-detail?heroid=${f.value.heroId}&datatype=5v5`,target:"_blank"}," 详细资料 ",8,p)])),_:1},8,["title"])])),_:1})])),_:1}),(0,i.Wm)((0,r.SU)(n.ZP).Grid,{class:"skins",style:{width:"75%"},hoverable:!1,bordered:!1},{default:(0,i.w5)((()=>[(0,i.Wm)((0,r.SU)(s.C),{arrows:"",effect:"fade","dots-class":"slick-dots slick-thumb"},{customPaging:(0,i.w5)((t=>[(0,i._)("a",null,[(0,i._)("img",{src:f.value.skins[t.i]},null,8,v)])])),default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.value.skins,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t},[(0,i._)("img",{src:t},null,8,w)])))),128))])),_:1})])),_:1})])),_:1}))}})}))},97810:function(t,e,a){a.a(t,(async function(t){a.d(e,{BP:function(){return i},zi:function(){return r},YA:function(){return l}});var s=a(30803),n=t([s]);function i(t){return(0,s.W)({url:"/demos/wzry/hero_list",method:"get",params:t},{isMock:!0,isGetDataDirectly:!1})}function r(t){return(0,s.W)({url:"/demos/lol/hero_list",method:"get",params:t},{isMock:!0,isGetDataDirectly:!1})}function l(t){return(0,s.W)({url:"/demos/lol/hero_info",method:"get",params:t},{isMock:!0,isGetDataDirectly:!1})}s=(n.then?await n:n)[0]}))},33022:function(t,e,a){a.a(t,(async function(t){a.d(e,{P6:function(){return c},D7:function(){return u}});var s=a(95684),n=(a(49266),a(36710)),i=a(31862),r=a(69179),l=a(46202),o=t([i]);i=(o.then?await o:o)[0];const c=[l.wU,l.yN,l.gS],u=(0,s.Q_)({id:"tabs-view",state:()=>({tabsList:[]}),getters:{getTabsList:t=>t.tabsList.filter((t=>!t.meta?.hideInTabs&&i.ZP.hasRoute(t.name)))},actions:{delCompFormClosedTabs(t){const e=(0,r.P)(),a=i.ZP.getRoutes(),s=t.reduce(((t,e)=>{if(e.name&&i.ZP.hasRoute(e.name)){const s=a.find((t=>t.name===e.name))?.components?.default?.name;s&&t.push(s)}return t}),[]);e.remove(s)},initTabs(t){this.tabsList=t},addTabs(t){if(c.includes(t.name))return!1;return this.tabsList.some((e=>e.fullPath==t.fullPath))||this.tabsList.push(t),!0},closeLeftTabs(t){const e=this.tabsList.findIndex((e=>e.fullPath==t.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(0,e))},closeRightTabs(t){const e=this.tabsList.findIndex((e=>e.fullPath==t.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(e+1))},closeOtherTabs(t){const e=this.tabsList.findIndex((e=>e.fullPath===t.fullPath));if(-1!==e){const t=this.tabsList.splice(e,1);this.delCompFormClosedTabs(this.tabsList),this.tabsList=t}},closeCurrentTab(t){const e=this.tabsList.findIndex((e=>e.fullPath==t.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(e,1))},closeAllTabs(){this.delCompFormClosedTabs(this.tabsList),this.tabsList=[],localStorage.removeItem(n.sL)},updateTabTitle(t){const e=i.ZP.currentRoute.value,a=this.tabsList.find((t=>t.fullPath===e.fullPath));a&&(a.meta.title=t)}}})}))},26829:function(t,e,a){a.a(t,(async function(t){a.r(e);var s=a(4591),n=(a(26471),a(83744)),i=t([s]);s=(i.then?await i:i)[0];const r=(0,n.Z)(s.Z,[["__scopeId","data-v-718f6111"]]);e.default=r}))},4591:function(t,e,a){a.a(t,(async function(t){a.d(e,{Z:function(){return s.Z}});var s=a(6153),n=t([s]);s=(n.then?await n:n)[0]}))},26471:function(){}}]);