(self.webpackChunkvue3_antd_admin=self.webpackChunkvue3_antd_admin||[]).push([[452],{1938:function(e,t,n){"use strict";n.a(e,(async function(e){n(84324);var a=n(95878),r=(n(58293),n(45542)),o=n(66252),l=n(2262),c=n(76478),i=n(89737),s=e([c]);c=(s.then?await s:s)[0];const u=(0,o.Uk)(" 查询表格-查询表单使用示例 ");t.Z=(0,o.aZ)({setup(e){const t=(0,l.iH)(),n=e=>{e&&t.value?.getQueryFormRef().updateSchema([{field:"price",componentProps:{options:[{label:"0-199",value:"0-199"},{label:"200-999",value:"200-999"}]}}])},s=async e=>new Promise((t=>{setTimeout((()=>{t({list:i.d,...e})}),500)}));return(e,d)=>((0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)((0,l.SU)(r.Z),{message:"查询表格",type:"info","show-icon":""},{description:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)((0,l.SU)(a.ZP),{title:"查询表单基本使用示例",style:{"margin-top":"20px"}},{default:(0,o.w5)((()=>[(0,o.Wm)((0,l.SU)(c.t),{ref_key:"dynamicTableRef",ref:t,size:"small",bordered:"","data-request":s,columns:(0,l.SU)(i.z),rowKey:"heroid",onToggleAdvanced:n},null,8,["columns"])])),_:1})]))}})}))},91030:function(e,t,n){"use strict";n.d(t,{n:function(){return o}});var a=n(66252),r=n(2262);function o(e,t){return{initSortable:function(){(0,a.Y3)((async()=>{if(!e)return;(await n.e(474).then(n.bind(n,51474))).default.create((0,r.SU)(e),{animation:500,delay:400,delayOnTouchOnly:!0,...t})}))}}}},89737:function(e,t,n){"use strict";n.d(t,{d:function(){return c},z:function(){return i}});n(93300);var a=n(96461),r=n(66252);const o=["王路飞","王大蛇","李白","刺客伍六七"],l=["西装","领带","裙子","包包"],c=Array.from({length:30}).map(((e,t)=>({id:t+1,date:(new Date).toLocaleString(),name:o[~~(4*Math.random())],clothes:l[~~(4*Math.random())],price:~~(1e3*Math.random()),gender:~~(2*Math.random()),status:~~(2*Math.random())}))),i=[{title:"姓名",align:"center",dataIndex:"name",formItemProps:{required:!0}},{title:"性别",align:"center",dataIndex:"gender",formItemProps:{component:"Select",componentProps:({schemaFormRef:e,formModel:t})=>({options:[{label:"男",value:1},{label:"女",value:0}],onChange(){var n;e.updateSchema({field:"clothes",componentProps:{options:(n=t.gender,1===n?[{label:"西装",value:1},{label:"领带",value:0}]:0===n?[{label:"裙子",value:1},{label:"包包",value:0}]:[])}}),t.clothes=void 0}})},bodyCell:({record:e})=>(0,r.Wm)(r.HY,null,[["女","男"][e.gender]])},{title:"衣服",align:"center",dataIndex:"clothes",formItemProps:{component:"Select"}},{title:"价格",align:"center",dataIndex:"price",formItemProps:{component:"Select"},bodyCell:({record:e})=>(0,r.Wm)(r.HY,null,[[e.price],(0,r.Uk)("元")])},{title:"状态",align:"center",dataIndex:"status",formItemProps:{component:"Select",componentProps:{request:()=>new Promise((e=>{setTimeout((()=>{e([{label:"已售罄",value:0},{label:"热卖中",value:1}])}),1500)}))}},bodyCell:({record:e})=>(0,r.Wm)(a.Z,{color:1==e.status?"red":"default"},{default:()=>[["已售罄","热卖中"][e.status]]})}]},80946:function(e,t,n){"use strict";n.a(e,(async function(e){n.r(t);var a=n(92846),r=e([a]);const o=(a=(r.then?await r:r)[0]).Z;t.default=o}))},12316:function(e,t,n){"use strict";n.d(t,{C:function(){return s}});n(48675),n(3462);var a=n(93162),r=n(7869),o=n.n(r);function l(e,t){for(var n,a={},r={s:{c:1e7,r:1e7},e:{c:0,r:0}},l=0;l!=e.length;++l)for(var c=0;c!=e[l].length;++c){r.s.r>l&&(r.s.r=l),r.s.c>c&&(r.s.c=c),r.e.r<l&&(r.e.r=l),r.e.c<c&&(r.e.c=c);var i={v:e[l][c]};if(null!=i.v){var s=o().utils.encode_cell({c:c,r:l});"number"==typeof i.v?i.t="n":"boolean"==typeof i.v?i.t="b":i.v instanceof Date?(i.t="n",i.z=o().SSF._table[14],i.v=(n=i.v,void 0&&(n+=1462),(Date.parse(n)-new Date(Date.UTC(1899,11,30)))/864e5)):i.t="s",a[s]=i}}return r.s.c<1e7&&(a["!ref"]=o().utils.encode_range(r)),a}function c(){if(!(this instanceof c))return new c;this.SheetNames=[],this.Sheets={}}function i(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),a=0;a!=e.length;++a)n[a]=255&e.charCodeAt(a);return t}function s({multiHeader:e=[],header:t,data:n,filename:r,merges:s=[],autoWidth:u=!0,bookType:d="xlsx"}={}){r=r||"excel-list",(n=[...n]).unshift(t);for(let t=e.length-1;t>-1;t--)n.unshift(e[t]);var f="SheetJS",m=new c,h=l(n);if(s.length>0&&(h["!merges"]||(h["!merges"]=[]),s.forEach((e=>{h["!merges"].push(o().utils.decode_range(e))}))),u){const e=n.map((e=>e.map((e=>null==e?{wch:10}:e.toString().charCodeAt(0)>255?{wch:2*e.toString().length}:{wch:e.toString().length}))));let t=e[0];for(let n=1;n<e.length;n++)for(let a=0;a<e[n].length;a++)t[a].wch<e[n][a].wch&&(t[a].wch=e[n][a].wch);h["!cols"]=t}m.SheetNames.push(f),m.Sheets.SheetJS=h;var p=o().write(m,{bookType:d,bookSST:!1,type:"binary"});(0,a.saveAs)(new Blob([i(p)],{type:"application/octet-stream"}),`${r}.${d}`)}},92846:function(e,t,n){"use strict";n.a(e,(async function(e){n.d(t,{Z:function(){return a.Z}});var a=n(1938),r=e([a]);a=(r.then?await r:r)[0]}))},55382:function(){},72095:function(){},61219:function(){}}]);