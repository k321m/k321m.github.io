(function(){"use strict";var t={1750:function(t,e,n){var o=n(144),r=n(998),i=n(3059),s=function(){var t=this,e=t._self._c;return e(r.Z,[e(i.Z,[e("PortfolioNavBar"),e("router-view"),e("PortfolioFooter")],1)],1)},a=[],u=n(704),l=n(6312),c=n(3687),f=n(626),d=n(8073),v=function(){var t=this,e=t._self._c;return e(u.Z,{attrs:{app:"",height:"90"},scopedSlots:t._u([{key:"extension",fn:function(){return[e(d.Z,{attrs:{grow:""}},t._l(t.items,(function(n){return e(f.Z,{key:n,attrs:{to:n.path}},[t._v(" "+t._s(n.title)+" ")])})),1)]},proxy:!0}])},[e(c.Z),e(l.Z,[e("h1",{staticClass:"mt-5"},[t._v("Misaki's Portfolio Page")])]),e(c.Z)],1)},p=[],h={name:"PortfolioNavBar",data:()=>({items:[{title:"About Me",path:"/"},{title:"Works",path:"/works"}]})},m=h,_=n(1001),Z=(0,_.Z)(m,v,p,!1,null,null,null),b=Z.exports,y=function(){var t=this,e=t._self._c;return e("div")},g=[],P={},k=(0,_.Z)(P,y,g,!1,null,null,null),w=k.exports,x={name:"App",data:()=>({}),components:{PortfolioNavBar:b,PortfolioFooter:w}},C=x,M=(0,_.Z)(C,s,a,!1,null,null,null),j=M.exports,O=n(8345),A=n(2118),T=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(A.Z,[e("AboutMeProfile"),e("AboutMeEducatoin")],1)},S=[],W=n(266),E=n(5495),q=n(1713),B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ma-5"},[e(q.Z,[e(W.Z,{attrs:{cols:"6"}},[e(E.Z,{staticClass:"rounded-circle",attrs:{width:350,src:t.imgPath}})],1),e(W.Z,{attrs:{cols:"6","align-self":"center"}},[e("div",[e("span",{staticClass:"mt-3 text-h4 font-weight-black"},[t._v("岸 美咲希")]),e("span",{staticClass:"text-h5 font-weight-medium text--secondary ml-3"},[t._v("Kishi Misaki")])]),e("p",{staticClass:"mt-3"},[t._v(" 東京電機大学未来科学部情報メディア学科 学部４年"),e("br"),t._v(" メディア応用研究室所属 ")])])],1)],1)},V=[],D={name:"AboutMeProfile",data:()=>({imgPath:n(5197)})},G=D,J=(0,_.Z)(G,B,V,!1,null,null,null),N=J.exports,F=n(8893),X=n(2082),H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10"},[e("h1",[t._v("Education")]),e(q.Z,{staticClass:"mt-3"},[e(F.Z,{attrs:{dense:""}},t._l(t.items,(function(n){return e(X.Z,{key:n},[e("div",{staticClass:"text--secondary"},[t._v(" "+t._s(n.time)+" ")]),e("strong",[t._v(" "+t._s(n.title)+" ")])])})),1)],1)],1)},I=[],K={name:"AboutMeEducation",data:()=>({items:[{title:"東京女学館高等学校 卒業",time:"2019年3月"},{title:"東京電機大学未来科学部情報メディア学科 入学",time:"2019年4月"},{title:"東京電機大学未来科学部情報メディア学科 卒業予定",time:"2023年3月"},{title:"東京電機大学大学院未来科学科情報メディア学専攻 進学予定",time:"2023年4月"}]})},L=K,U=(0,_.Z)(L,H,I,!1,null,null,null),$=U.exports,z=(0,o.aZ)({name:"AboutMeView",components:{AboutMeProfile:N,AboutMeEducatoin:$}}),Q=z,R=(0,_.Z)(Q,T,S,!1,null,null,null),Y=R.exports,tt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(A.Z,[e("div",[e("h1",{staticClass:"mb-5"},[t._v("Works")])]),e("WorksCards")],1)],1)},et=[],nt=n(6190),ot=n(579),rt=n(4886),it=n(4127),st=n(4324),at=function(){var t=this,e=t._self._c;return e("div",[e(q.Z,t._l(t.works,(function(n){return e(W.Z,{key:n,attrs:{cols:"6"}},[e(ot.Z,{attrs:{height:"300"}},[e(rt.EB,{staticClass:"text-h5 font-weight-bold"},[t._v(t._s(n.title))]),t._l(n.usedTechniques,(function(n){return e(it.Z,{key:n,staticClass:"ml-4",attrs:{label:""}},[e(st.Z,{attrs:{left:""}},[t._v("mdi-label")]),t._v(" "+t._s(n)+" ")],1)})),e(rt.ZB,{staticClass:"text-body-1"},[t._v(" "+t._s(n.description)+" ")]),e(c.Z),e(rt.h7,{staticClass:"justify-end"},[e(nt.Z,{staticClass:"ma-5 card-actions",attrs:{outlined:"",large:"",color:"indigo"}},[t._v("detail")])],1)],2)],1)})),1)],1)},ut=[],lt={name:"WorksCards",data:()=>({works:[{title:"ポートフォリオ",description:"GitHubPagesを用いてポートフォリを作成しました。Vue.jsを勉強したかったためVueCLIで作成しました。",usedTechniques:["Vue.js","Node.js"]},{title:"Adobe XDワークショップに登壇",description:"「アドビ株式会社」が本学でAdobe XDのワークショップを開催するにあたり、学生講師として指名され、モバイル名刺のプロトタイプおよびその教材を、アドビのエバンジェリストの方と二人で開発しました。",usedTechniques:["Adobe XD"]},{title:"GamePit インディーズゲーム開発",description:"「ストライキ・ストライク」という3DCGアクションゲームを制作し、GamePit Tokyo 2022に出展しました。",usedTechniques:["Unity","C#"]},{title:"Webアプリケーション開発",description:"大学の授業で4名1チームとなり、JavaでWebアプリケーションを開発しました。",usedTechniques:["Java","Java Servlet","JSP"]}]})},ct=lt,ft=(0,_.Z)(ct,at,ut,!1,null,"7a09cbdc",null),dt=ft.exports,vt=(0,o.aZ)({name:"WorksView",components:{WorksCards:dt}}),pt=vt,ht=(0,_.Z)(pt,tt,et,!1,null,null,null),mt=ht.exports;o.ZP.use(O.ZP);const _t=[{path:"/",name:"aboutMe",component:Y},{path:"/works",name:"works",component:mt}],Zt=new O.ZP({mode:"history",base:"",routes:_t});var bt=Zt,yt=n(6560);o.ZP.use(yt.Z);var gt=new yt.Z({});o.ZP.config.productionTip=!1,new o.ZP({router:bt,vuetify:gt,render:t=>t(j)}).$mount("#app")},5197:function(t,e,n){t.exports=n.p+"img/profile.a543c2f1.jpg"}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,i){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],i=t[c][2];for(var a=!0,u=0;u<o.length;u++)(!1&i||s>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(a=!1,i<s&&(s=i));if(a){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,r,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,i,s=o[0],a=o[1],u=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(u)var c=u(n)}for(e&&e(o);l<s.length;l++)i=s[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkk321m"]=self["webpackChunkk321m"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1750)}));o=n.O(o)})();
//# sourceMappingURL=app.701f7bf9.js.map