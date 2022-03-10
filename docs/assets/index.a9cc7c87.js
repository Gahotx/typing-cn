var Y=Object.defineProperty;var S=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var z=(e,l,a)=>l in e?Y(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,I=(e,l)=>{for(var a in l||(l={}))Z.call(l,a)&&z(e,a,l[a]);if(S)for(var a of S(l))ee.call(l,a)&&z(e,a,l[a]);return e};import{r as c,u as te,j as t,c as le,a as ae,b as ue,d as ne,e as s,R as m,C as b,f as oe,B as h,g as ie,h as re,I as se,i as ce,k as be,l as xe,S as de,P as he,H as ge,A as me,m as Ce,n as F,M as T,T as Ee,o as y,p as O,q as fe,s as Be,F as Fe,t as pe,v as Ae}from"./vendor.6632ab2d.js";const ye=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}};ye();const De="modulepreload",j={},ke="/",C=function(l,a){return!a||a.length===0?l():Promise.all(a.map(o=>{if(o=`${ke}${o}`,o in j)return;j[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const r=document.createElement("link");if(r.rel=n?"stylesheet":De,n||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),n)return new Promise((f,E)=>{r.addEventListener("load",f),r.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>l())},ve=c.exports.lazy(()=>C(()=>import("./Fingers.0442e008.js"),["assets/Fingers.0442e008.js","assets/Fingers.f1ffaaf2.css","assets/vendor.6632ab2d.js","assets/wordTool.6c2aaa8f.js"])),we=c.exports.lazy(()=>C(()=>import("./Monkey.dbc8801a.js"),["assets/Monkey.dbc8801a.js","assets/Monkey.2e6d4b9d.css","assets/vendor.6632ab2d.js","assets/wordTool.6c2aaa8f.js","assets/ReloadBtn.2556b6d5.js","assets/ReloadBtn.890011c9.css"])),_e=c.exports.lazy(()=>C(()=>import("./Sentence.9ae5b5f6.js"),["assets/Sentence.9ae5b5f6.js","assets/Sentence.dbaa76df.css","assets/vendor.6632ab2d.js","assets/wordTool.6c2aaa8f.js","assets/ReloadBtn.2556b6d5.js","assets/ReloadBtn.890011c9.css"])),Se=c.exports.lazy(()=>C(()=>import("./Training.1cc5eb3e.js"),["assets/Training.1cc5eb3e.js","assets/Training.6be43a3a.css","assets/vendor.6632ab2d.js"])),ze=c.exports.lazy(()=>C(()=>import("./Test.513c1724.js"),["assets/Test.513c1724.js","assets/Test.1dbd0401.css","assets/vendor.6632ab2d.js"])),Ie=c.exports.lazy(()=>C(()=>import("./About.5b07a161.js"),["assets/About.5b07a161.js","assets/About.197ba4de.css","assets/vendor.6632ab2d.js"])),Te=()=>te([{path:"/",element:t(ve,{})},{path:"/monkey",element:t(we,{})},{path:"/sentence",element:t(_e,{})},{path:"/training",element:t(Se,{})},{path:"/test",element:t(ze,{})},{path:"/about",element:t(Ie,{})}]),d={session:{get:e=>{const l=window.sessionStorage.getItem(e);return l&&JSON.parse(l)},set:(e,l)=>{const a=JSON.stringify(l);window.sessionStorage.setItem(e,a)},remove:e=>{window.sessionStorage.removeItem(e)}},local:{get:e=>{const l=window.localStorage.getItem(e);return l&&JSON.parse(l)},set:(e,l)=>{const a=JSON.stringify(l);window.localStorage.setItem(e,a)},remove:e=>{window.localStorage.removeItem(e)}}},P="UI_SCALE",$="UI_THEME",M="WORDS_MODE",L="COUNTDOWN_TIME",U="CUSTOMER_WORDS",W="BACK_IMG_URL",Oe={uiScale:d.local.get(P)||"s",uiTheme:d.local.get($)||"",wordsMode:d.local.get(M)||"1",countdownTime:d.local.get(L)||"60",customerWords:d.local.get(U)||[],backImgUrl:d.local.get(W)||""},je={setUiScale:(e,l)=>(d.local.set(P,l),{uiScale:l}),setUiTheme:(e,l)=>(d.local.set($,l),{uiTheme:l}),setWordsMode:(e,l)=>(d.local.set(M,l),{wordsMode:l}),setCountdownTime:(e,l)=>(d.local.set(L,l),{countdownTime:l}),saveCustomerWords:(e,l)=>(d.local.set(U,l),{customerWords:l}),setBackImgUrl:(e,l)=>(d.local.set(W,l),{backImgUrl:l})};var Re={state:Oe,reducer:je},Ne={root:Re};const Pe=e=>({$state:I({},e)}),$e=e=>({$dispatch(l,a){e({type:l,payload:a})}});function q(e){return le(Pe,$e)(e)}const Me=(e,l)=>(a=l,o)=>e[o.type]?Object.assign({},a,e[o.type](a,o.payload)):a,Le=Object.entries(Ne).reduce((e,[l,a])=>(Object.assign(e,{[l]:Me(a.reducer,a.state)}),e),{}),Ue=ae(ue(Le));const We=[{label:"\u90AE\u4EF6",text:"youjian"},{label:"\u79BB\u5F00",text:"likai"},{label:"\u51C6\u5907",text:"zhunbei"},{label:"\u5E86\u795D",text:"qingzhu"},{label:"\u5BBF\u820D",text:"sushe"},{label:"\u6CE8\u610F",text:"zhuyi"},{label:"\u975E\u5E38",text:"feichang"},{label:"\u5BB6\u5EAD",text:"jiating"},{label:"\u53BB\u5E74",text:"qunian"},{label:"\u70B9\u5FC3",text:"dianxin"},{label:"\u4E0A\u8BFE",text:"shangke"},{label:"\u7F8E\u4E3D",text:"meili"},{label:"\u5FB7\u56FD",text:"deguo"},{label:"\u4E00\u5B9A",text:"yiding"},{label:"\u7740\u6025",text:"zhaoji"},{label:"\u94C5\u7B14",text:"qianbi"},{label:"\u75DB\u82E6",text:"tongku"},{label:"\u5FC5\u987B",text:"bixu"},{label:"\u75C5\u4EBA",text:"bingren"},{label:"\u73B0\u5728",text:"xianzai"},{label:"\u725B\u5976",text:"niunai"},{label:"\u6708\u4EAE",text:"yueliang"},{label:"\u65E9\u4E0A",text:"zaoshang"},{label:"\u7B80\u5355",text:"jiandan"},{label:"\u74F6\u5B50",text:"pingzi"},{label:"\u54E5\u54E5",text:"gege"},{label:"\u97F3\u4E50",text:"yinyue"},{label:"\u7B77\u5B50",text:"kuaizi"},{label:"\u8FD8\u662F",text:"haishi"},{label:"\u684C\u5B50",text:"zhuozi"},{label:"\u770B\u89C1",text:"kanjian"},{label:"\u4E00\u8FB9",text:"yibian"},{label:"\u5927\u58F0",text:"dasheng"},{label:"\u98CE\u666F",text:"fengjing"},{label:"\u9910\u5385",text:"canting"},{label:"\u6728\u5934",text:"mutou"},{label:"\u65B0\u5E74",text:"xinnian"},{label:"\u5634\u5DF4",text:"zuiba"},{label:"\u5E94\u8BE5",text:"yinggai"},{label:"\u8FC7\u6765",text:"guolai"},{label:"\u4ECA\u5929",text:"jintian"},{label:"\u771F\u597D",text:"zhenhao"},{label:"\u5965\u5229\u5965",text:"aoliao"},{label:"\u952E\u76D8",text:"jianpan"},{label:"\u771F\u5B9E",text:"zhenshi"},{label:"\u4F18\u8054",text:"youlian"},{label:"\u84DD\u7259",text:"lanya"},{label:"\u65E0\u7EBF",text:"wuxian"},{label:"\u4E09\u660E\u6CBB",text:"sanmingzhi"},{label:"\u80F6\u6761",text:"jiaotiao"},{label:"\u661F\u591C",text:"xingye"},{label:"\u5976\u6CB9",text:"naiyou"},{label:"\u718A\u732B",text:"xiongmao"},{label:"\u53EF\u4E50",text:"kele"},{label:"\u6D77\u5916",text:"haiwai"},{label:"\u77E9\u9635",text:"juzhen"},{label:"\u5851\u6599",text:"suliao"},{label:"\u5927\u9AA8",text:"dagu"},{label:"\u8425\u5730",text:"yingdi"},{label:"\u65E0\u9650",text:"wuxian"},{label:"\u865A\u62DF",text:"xuni"},{label:"\u7535\u73A9",text:"dianwan"},{label:"\u5FBD\u7AE0",text:"huizhang"},{label:"\u5317\u6781\u5708",text:"beijiquan"},{label:"\u4EC1\u738B",text:"renwang"},{label:"\u602A\u7269",text:"guaiwu"},{label:"\u730E\u4EBA",text:"lieren"},{label:"\u5927\u4F6C",text:"dalao"},{label:"\u5F00\u8F66",text:"kaiche"},{label:"\u4EE3\u7EC4",text:"daizu"},{label:"\u4E9A\u514B\u529B",text:"yakeli"},{label:"\u9EC4\u94DC",text:"huangtong"},{label:"\u4E0D\u9508\u94A2",text:"buxiugang"},{label:"\u94DD\u952D",text:"lvding"},{label:"\u6CE8\u5851",text:"zhusu"},{label:"\u83E0\u841D",text:"boluo"},{label:"\u9713\u8679",text:"nihong"},{label:"\u87BA\u4E1D",text:"luosi"},{label:"\u536B\u661F\u8F74",text:"weixingzhou"},{label:"\u7EA2\u767D\u673A",text:"hongbaiji"},{label:"\u5E7B\u5F71",text:"huanying"},{label:"\u65E5\u6587",text:"riwen"},{label:"\u4FC4\u6587",text:"ewen"},{label:"\u952E\u5E3D",text:"jianmao"},{label:"\u5957\u4EF6",text:"taojian"},{label:"\u78B3\u7EA4\u7EF4",text:"tanxianwei"},{label:"\u73BB\u7EA4",text:"boxian"},{label:"\u70ED\u5347\u534E",text:"reshenghua"},{label:"\u5934\u53D1",text:"toufa"},{label:"\u5BA2\u5385",text:"keting"},{label:"\u6E38\u6CF3\u6C60",text:"youyongchi"},{label:"\u5468\u672B",text:"zhoumo"},{label:"\u5F1F\u5F1F",text:"didi"},{label:"\u53EF\u7231",text:"keai"},{label:"\u9E66\u9E49",text:"yingwu"},{label:"\u6F02\u767D",text:"piaobai"},{label:"\u7535\u6CF3",text:"dianyong"},{label:"\u6B66\u58EB\u9053",text:"wushidao"},{label:"\u7801\u519C",text:"manong"},{label:"\u8109\u51B2",text:"maichong"},{label:"\u84B8\u6C7D\u6CE2",text:"zhengqibo"},{label:"\u9752\u67E0",text:"qingning"},{label:"\u58F0\u6CE2",text:"shengbo"},{label:"\u6A44\u6984",text:"ganlan"},{label:"\u524D\u950B",text:"qianfeng"},{label:"\u6DF1\u7A7A",text:"shenkong"},{label:"\u539F\u70B9",text:"yuandian"},{label:"\u6A31\u82B1",text:"yinghua"},{label:"\u539F\u5382",text:"yuanchang"},{label:"\u9759\u7535\u5BB9",text:"jingdianrong"},{label:"\u629B\u5149",text:"paoguang"},{label:"\u4F73\u8FBE\u9686",text:"jiadalong"},{label:"\u5B81\u829D",text:"ningzhi"},{label:"\u5317\u6781\u661F",text:"beijixing"},{label:"\u9000\u70E7",text:"tuishao"},{label:"\u5403\u74DC",text:"chigua"},{label:"\u89E3\u6BD2",text:"jiedu"},{label:"\u6478\u9C7C",text:"moyu"},{label:"\u6A31\u6843",text:"yingtao"},{label:"\u6811\u61D2",text:"shulan"},{label:"\u6A21\u62DF",text:"moni"},{label:"\u6FC0\u5149",text:"jiguang"},{label:"\u9633\u6781",text:"yangji"},{label:"\u55B7\u6D82",text:"pentu"},{label:"\u4FBF\u5F53",text:"biandang"},{label:"\u591C\u884C\u8005",text:"yexingzhe"},{label:"\u9524\u5934\u9CA8",text:"chuitousha"},{label:"\u6838\u5B50",text:"hezi"},{label:"\u6D82\u6539",text:"tugai"},{label:"\u795E\u4F51",text:"shenyou"},{label:"\u6CE8\u97F3",text:"zhuyin"},{label:"\u6843\u82B1",text:"taohua"},{label:"\u6697\u9ED1",text:"anhei"},{label:"\u6D77\u5CB8",text:"haian"},{label:"\u5DE7\u514B\u529B",text:"qiaokeli"},{label:"\u65AF\u5DF4\u8FBE",text:"sibada"},{label:"\u9B3C\u9B42",text:"guihun"},{label:"\u7206\u88C2",text:"baolie"},{label:"\u7EFF\u6D32",text:"lvzhou"},{label:"\u6807\u672C",text:"biaoben"},{label:"\u5DEB\u5996",text:"wuyao"},{label:"\u6C38\u6052",text:"yongheng"},{label:"\u5976\u6614",text:"naixi"},{label:"\u6CB3\u9A6C",text:"hema"},{label:"\u4F7F\u547D",text:"shiming"},{label:"\u53EC\u5524",text:"zhaohuan"},{label:"\u9ED1\u8272",text:"heise"},{label:"\u884C\u52A8",text:"xingdong"},{label:"\u767D\u8272",text:"baise"},{label:"\u725B\u5934",text:"niutou"},{label:"\u4E2A\u6027",text:"gexing"},{label:"\u6218\u795E",text:"zhanshen"},{label:"\u73B0\u4EE3",text:"xiandai"},{label:"\u6218\u4E89",text:"zhanzheng"},{label:"\u51EF\u534E",text:"kaihua"},{label:"\u7CBE\u5FAE\u79D1",text:"jingweike"},{label:"\u7A7A\u95F4",text:"kongjian"},{label:"\u4E1C\u65B9",text:"dongfang"},{label:"\u5C71\u6C34",text:"shanshui"},{label:"\u5FAE\u5149",text:"weiguang"},{label:"\u897F\u88C5",text:"xizhuang"},{label:"\u8840\u7F18",text:"xueyuan"},{label:"\u8BC5\u5492",text:"zuzhou"},{label:"\u94A2\u677F",text:"gangban"},{label:"\u6253\u5361",text:"daka"},{label:"\u7B7E\u5230",text:"qiandao"},{label:"\u4E0A\u73ED",text:"shangban"},{label:"\u53CC\u6A21",text:"shuangmo"},{label:"\u5355\u6A21",text:"danmo"},{label:"\u5212\u6C34",text:"huashui"},{label:"\u5916\u5356",text:"waimai"},{label:"\u8D5E\u52A9",text:"zanzhu"},{label:"\u6253\u8D4F",text:"dashang"},{label:"\u673A\u68B0",text:"jixie"},{label:"\u5F00\u5173",text:"kaiguan"},{label:"\u6E38\u620F",text:"youxi"},{label:"\u65E0\u654C",text:"wudi"},{label:"\u778E\u773C",text:"xiayan"},{label:"\u5FC3\u6001",text:"xintai"},{label:"\u7167\u7247",text:"zhaopian"},{label:"\u6DA6\u6ED1",text:"runhua"},{label:"\u8054\u673A",text:"lianji"},{label:"\u914D\u91CD",text:"peizhong"},{label:"\u8BBE\u8BA1",text:"sheji"},{label:"\u88C5\u9970",text:"zhuangshi"},{label:"\u94ED\u724C",text:"mingpai"},{label:"\u5B9A\u5236",text:"dingzhi"},{label:"\u72EC\u6728\u821F",text:"dumuzhou"},{label:"\u8FB9\u7267",text:"bianmu"},{label:"\u4EA7\u54C1",text:"chanpin"},{label:"\u9F20\u6807",text:"shubiao"},{label:"\u5916\u8BBE",text:"waishe"},{label:"\u4EA4\u6D41",text:"jiaoliu"},{label:"\u78E8\u7802",text:"mosha"},{label:"\u900F\u5149",text:"touguang"},{label:"\u6253\u5B57",text:"dazi"},{label:"\u73A9\u5177",text:"wanju"},{label:"\u54C1\u724C",text:"pinpai"},{label:"\u5DE5\u4F5C\u5BA4",text:"gongzuoshi"}];function qe(e){return ne(e,{removeSpace:!0,removeTone:!0})}var Ve={setSiteIcon(e,l){var r;const a=document.createElement("canvas");a.height=64,a.width=64;const o=a.getContext("2d");o&&(o.fillStyle=e,o.fillRect(0,0,64,64));const n=a.getContext("2d");n&&(n.font="24px Arial",n.fillStyle=l,n.fillText("TCN",7,42));const i=a.toDataURL("image/jpg");(r=document.getElementById("site-icon"))==null||r.setAttribute("href",i)}},D=[{name:"default",bgColor:"#282c34",textColor:"#fffffe"},{name:"oblivion",bgColor:"#464746",textColor:"#ffac00"},{name:"carbon",bgColor:"#575d5e",textColor:"#ed6b21"},{name:"2600",bgColor:"#6c3b7b",textColor:"#f8cc2a"},{name:"olivia",bgColor:"#363434",textColor:"#e8c4b8"},{name:"9009",bgColor:"#b6b09a",textColor:"#2e2f33"},{name:"godspeed",bgColor:"#6A97B5",textColor:"#faee69"},{name:"nautilus",bgColor:"#102c4e",textColor:"#eac004"},{name:"avocado",bgColor:"rgb(101,145,91)",textColor:"rgb(239,234,155)"},{name:"konmomo",bgColor:"#f7f2ea",textColor:"rgb(244,84,124)"},{name:"space cadet",bgColor:"#0073a2",textColor:"#ffffff"},{name:"shoko",bgColor:"#ced7e0",textColor:"#7599b1"},{name:"ph yellow",bgColor:"#000000",textColor:"#ff9900"},{name:"yeeti",bgColor:"#81B9D0",textColor:"#ffffff"},{name:"botanical",bgColor:"rgb(167,183,174)",textColor:"rgb(74,93,87)"},{name:"aqua",bgColor:"#056e7f",textColor:"#7cc3c1"},{name:"striker",bgColor:"#124883",textColor:"#d7dcda"},{name:"8008",bgColor:"#333a45",textColor:"#f44c7f"},{name:"darling",bgColor:"#fec8cd",textColor:"#a30000"},{name:"dracula",bgColor:"#282a36",textColor:"#bd93f9"}];const R=e=>{Ve.setSiteIcon(e.bgColor,e.textColor);const l=document.querySelector("#current-theme");if(!l)return;const a=l.getAttribute("href")||"";l.setAttribute("href",a.substring(0,a.lastIndexOf("/"))+`/${e.name.replace(" ","-")}.css`)};var He="/assets/wechatpay.d879e1bb.jpg",Qe="/assets/alipay.43db5136.jpg";const Ge=()=>s(m,{className:"PayQrCode__imgbox",children:[t(b,{className:"PayQrCode__img",flex:"auto",children:t("img",{src:He,alt:"wechatpay"})}),t(b,{className:"PayQrCode__divide",flex:"30px"}),t(b,{className:"PayQrCode__img",flex:"auto",children:t("img",{src:Qe,alt:"alipay"})})]}),Je=e=>s("div",{children:[s("div",{children:["\u54C8\u55BD~\u73A9\u7684\u5F00\u5FC3\u5417\uFF1F\u5F00\u5FC3\u7684\u8BDD\u8BF7\u6211\u559D\u676F\u5496\u5561",t(oe,{}),"\u5982\u4F55~"]}),t(Ge,{}),s("div",{children:[t(h,{type:"link",onClick:()=>e.go("/about"),children:"\u5173\u4E8E\u8FD9\u4E2A\u7F51\u7AD9"}),t("span",{children:"\u7ED9\u4F60\u4E00\u4E2A\u6253\u8D4F\u6211\u7684\u7406\u7531~"})]})]}),Ke=/^[\u2E80-\u9FFF]+$/,N=We.map(e=>e.label).join("|"),k={"/":[1,1,1],"/monkey":[1,1,0],"/sentence":[1,0,0],"/training":[1,0,0],"/test":[1,0,0],"/about":[1,0,0]},Xe=e=>{const[l,a]=c.exports.useState(!1),[o,n]=c.exports.useState(!1),[i,r]=c.exports.useState(e.$state.root.wordsMode),f=c.exports.useRef(N),[E,v]=c.exports.useState(e.$state.root.customerWords&&e.$state.root.customerWords.length!==0?e.$state.root.customerWords.map(u=>u.label).join("|"):N),[V,w]=c.exports.useState([]),{search:p,pathname:A}=ie(),H=re(),Q=u=>{e.$dispatch("setUiScale",u.target.value)},G=()=>{if(i==="1"){e.$dispatch("setWordsMode",i),a(!1);return}const u=Array.from(new Set(E.split("|").filter(Boolean))),x=[];if(u.length===0&&x.push("\u8BF7\u8F93\u5165\u5B57\u8BCD\uFF0C\u5E76\u4EE5\u7B26\u53F7|\u95F4\u9694"),u.forEach(B=>{Ke.test(B)||x.push(B)}),w(x),x.length===0){e.$dispatch("setWordsMode",i),v(u.join("|")),console.time("getPinyin");const B=u.map(_=>({label:_,text:qe(_)}));console.timeEnd("getPinyin"),e.$dispatch("saveCustomerWords",B),a(!1)}},J=u=>{r(u),w([])},K=u=>{v(u.target.value)},X=u=>{window.location.href=window.location.href.split("?")[0],e.$dispatch("setUiTheme",u.name)},g=u=>{H(u)};return c.exports.useEffect(()=>{if(p){const u=D.find(x=>x.name===p.slice(1).replace("-"," "));u&&R(u)}else if(e.$state.root.uiTheme){const u=D.find(x=>x.name===e.$state.root.uiTheme);u&&R(u)}},[p,e.$state.root.uiTheme]),s("div",{className:"app-header",children:[t(m,{children:s(b,{flex:"auto",children:[t(h,{tabIndex:-1,type:"link",icon:t(se,{}),onClick:()=>g(""),children:"\u6A21\u5F0F1(\u9650\u65F6)"}),t(h,{tabIndex:-1,type:"link",icon:t(ce,{}),onClick:()=>g("monkey"),children:"\u6A21\u5F0F2(\u8BA1\u65F6)"}),t(h,{tabIndex:-1,type:"link",icon:t(be,{}),onClick:()=>g("sentence"),children:"\u6A21\u5F0F3(\u53E5\u5B50)"}),t(h,{tabIndex:-1,type:"link",icon:t(xe,{}),onClick:()=>g("training"),children:"\u6307\u6CD5\u7EC3\u4E60"}),t(h,{tabIndex:-1,type:"link",icon:t(de,{}),onClick:()=>g("test"),children:"\u6309\u952E\u58F0\u97F3\u53CD\u9988"}),t(he,{placement:"bottomLeft",content:t(Je,{go:g}),children:t(h,{tabIndex:-1,className:"heartBeat",type:"link",icon:t(ge,{twoToneColor:"#9D0500"}),onClick:()=>g("about"),children:"\u6C42\u6253\u8D4F"})})]})}),t(m,{style:{marginTop:"10px"},children:s(b,{flex:"auto",children:[t(h,{tabIndex:-1,type:"link",style:{display:k[A][0]?"":"none"},icon:t(me,{}),onClick:()=>n(!0),children:"\u4E3B\u9898"}),t(h,{tabIndex:-1,type:"link",style:{display:k[A][1]?"":"none"},icon:t(Ce,{}),onClick:()=>a(!0),children:"\u8BCD\u7EC4\u8BBE\u7F6E"}),s("div",{style:{display:k[A][2]?"inline-block":"none"},children:[t("span",{className:"radio-text",children:"\xA0\xA0\xA0\xA0UI\u5C3A\u5BF8:\xA0\xA0"}),s(F.Group,{onChange:Q,defaultValue:e.$state.root.uiScale,children:[t(F,{tabIndex:-1,value:"s",children:"\u6B63\u5E38"}),t(F,{tabIndex:-1,value:"m",children:"\u5927"}),t(F,{tabIndex:-1,value:"l",children:"\u7279\u5927"})]})]})]})}),s(T,{className:"header-modal-setting",title:"",visible:l,closable:!1,maskClosable:!1,footer:t(Ee,{placement:"left",title:"\u5C06\u81EA\u52A8\u53BB\u9664\u91CD\u590D\u8BCD\u7EC4",children:t(h,{tabIndex:-1,className:"header-modal-confirm-btn",type:"primary",onClick:G,children:"\u786E\u5B9A"})}),children:[s(y,{defaultActiveKey:i,onChange:J,children:[t(y.TabPane,{tab:"\u9ED8\u8BA4\u8BCD\u7EC4",children:t(O.TextArea,{autoSize:{minRows:9,maxRows:16},disabled:!0,defaultValue:f.current})},"1"),t(y.TabPane,{tab:"\u81EA\u5B9A\u4E49\u8BCD\u7EC4",children:t(O.TextArea,{autoSize:{minRows:9,maxRows:16},value:E,onChange:K})},"2")]}),s(m,{className:"header-modal--words-length",children:[t(b,{span:12,children:t(m,{gutter:6,className:"error-word",children:V.map((u,x)=>t(b,{children:u},x))})}),s(b,{span:12,className:"header-modal--total",children:["\u5171(",i==="1"?f.current.split("|").length:E.split("|").filter(Boolean).length,")\u4E2A\u8BCD"]})]})]}),t(T,{className:"header-modal-theme",title:"",visible:o,footer:"",onCancel:()=>n(!1),children:s(m,{justify:"space-around",className:"header-modal-theme--box",children:[D.map((u,x)=>t(b,{flex:"100px",className:"theme-display-block",style:{backgroundColor:u.bgColor,color:u.textColor},onClick:()=>X(u),children:u.name},x)),t(b,{flex:"100px"}),t(b,{flex:"100px"}),t(b,{flex:"100px"}),t(b,{flex:"100px"})]})})]})};var Ye=q(Xe);const Ze=e=>t("div",{className:"app-footer",children:e.$state.root.backImgUrl&&t("img",{className:"back__img",src:e.$state.root.backImgUrl,alt:""})});var et=q(Ze);const tt=()=>t(fe,{store:Ue,children:t("div",{className:"app-main",children:s(Be,{basename:"/",children:[t(Ye,{}),t(c.exports.Suspense,{fallback:t(Fe,{}),children:t(Te,{})}),t(et,{})]})})});console.log("BASE_URL: ","/");pe.render(t(Ae.StrictMode,{children:t(tt,{})}),document.getElementById("root"));export{Ge as P,C as _,We as d,q as s};
