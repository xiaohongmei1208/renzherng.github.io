/* empty css             */import{M as N,C as D}from"./Collapse-b7e57712.js";import{d as g,r as y,T as E,U as F,V as R,o as m,D as b,w as p,f as w,C as B,p as f,F as L,K as S,h as T,H as I,_ as k,j as V,M as $,S as H,y as M,u as J,a as O,k as P,m as j,n as q,g as i,x as K,q as U}from"./index-393dd0cf.js";/* empty css               *//* empty css                     *//* empty css                  */const z=g({__name:"breadcrumb",setup(x){let s=y([]);const a=S(),r=()=>{let c=a.matched.filter(o=>o.meta&&o.meta.title);s.value=c.slice(1)};return r(),E(()=>a.path,()=>r()),(c,o)=>{const _=F,u=R;return m(),b(u,{separator:"/"},{default:p(()=>[(m(!0),w(L,null,B(f(s),d=>(m(),b(_,null,{default:p(()=>[T(I(d.meta.title),1)]),_:2},1024))),256))]),_:1})}}});const G=k(z,[["__scopeId","data-v-fa597538"]]),Q=g({__name:"tabs",setup(x){const s=M(),a=S(),r=J(),c=V(()=>s.getters.getTabs),o=y(""),_=()=>{o.value=a.path},u=()=>{const{path:e,meta:t}=a,n={path:e,title:t.title};s.commit("addTabe",n)};E(()=>a.path,()=>{_(),u()});const d=()=>{window.addEventListener("beforeunload",()=>{sessionStorage.setItem("tabsView",JSON.stringify(c.value))});let e=sessionStorage.getItem("tabsView");if(e){let t=JSON.parse(e);t.length>0&&(s.state.tabsList=t)}};$(()=>{d(),_(),u()});const h=e=>{const{props:t}=e;r.push({path:t.name})},A=e=>{if(console.log(e),e==="/systemnotification")return;const t=c.value;let n=o.value;n===e&&t.forEach((l,v)=>{if(l.path===e){const C=t[v+1]||t[v-1];C&&(n=C.path)}}),o.value=n,s.state.tabsList=t.filter(l=>l.path!==e),r.push({path:n})};return(e,t)=>{const n=H;return m(!0),w(L,null,B(f(c),l=>(m(),b(n,{key:l,class:"mx-1",closable:"","disable-transitions":!1,onClick:h,onClose:v=>A(l.path),style:{"margin-right":"10px","margin-bottom":"20px"}},{default:p(()=>[T(I(l.title),1)]),_:2},1032,["onClose"]))),128)}}}),W={class:"breadcrumb_Header"},X=g({__name:"index",setup(x){const s=M(),a=V(()=>s.getters.getCollapse);let r=O([{path:"/systemnotification",meta:{title:"系统通知",icon:"Aim",roles:[""]},children:[]},{path:"/systemStrategy",meta:{title:"系统策略",icon:"Apple",roles:[""]},children:[{path:"/passwordPolicy",meta:{title:"密码策略",icon:"BellFilled",roles:[""]}},{path:"/LoginPolicy",meta:{title:"登陆策略",icon:"Briefcase",roles:[""]}}]},{path:"/LICENSE",meta:{title:"LICENSE授权",icon:"DocumentCopy",roles:[""]}}]);return(c,o)=>{const _=P,u=U("router-view"),d=j,h=q;return m(),b(h,{class:"container"},{default:p(()=>[i(_,{class:"aside",width:f(a)?"auto":"250px"},{default:p(()=>[i(N,{menuList:f(r)},null,8,["menuList"])]),_:1},8,["width"]),i(d,null,{default:p(()=>[K("div",W,[i(D),i(G)]),i(Q),i(u)]),_:1})]),_:1})}}});const oe=k(X,[["__scopeId","data-v-76168b6a"]]);export{oe as default};
