(function(t){function a(a){for(var e,r,n=a[0],c=a[1],l=a[2],u=0,p=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);v&&v(a);while(p.length)p.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,a=0;a<s.length;a++){for(var i=s[a],e=!0,n=1;n<i.length;n++){var c=i[n];0!==o[c]&&(e=!1)}e&&(s.splice(a--,1),t=r(r.s=i[0]))}return t}var e={},o={app:0},s=[];function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,a,i){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(i,e,function(a){return t[a]}.bind(null,e));return i},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var v=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"034f":function(t,a,i){"use strict";var e=i("8a23"),o=i.n(e);o.a},"37c5":function(t,a,i){t.exports=i.p+"img/PortFolio.2ccf5d38.png"},"3e32":function(t,a,i){"use strict";var e=i("c40f"),o=i.n(e);o.a},"4fc5":function(t,a,i){t.exports=i.p+"img/daily.2e25a88a.png"},"56d7":function(t,a,i){"use strict";i.r(a);i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),o=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app",[i("Toolbar"),i("v-content",{attrs:{id:"main-container"}},[i("router-view")],1),i("Footer")],1)},s=[],r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app-bar",{attrs:{flat:"",absolute:"",color:"white",dark:"",height:t.getHeight}},[i("v-container",{staticClass:"pa-0"},[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"pa-0",attrs:{cols:"10"}},[i("div",{staticClass:"black--text",class:t.getFontSize},[t._v(" Johan Stiven Tinjaca ")]),i("div",{staticClass:"black--text pa-0",class:t.getFontSizeFullStack},[t._v(" Full Stack Developer ")])]),i("v-col",{staticClass:" d-none align-end flex-column  d-md-flex",attrs:{cols:"2"}},[i("div",{staticClass:"d-flex"},[i("v-list-item",{attrs:{light:""},on:{click:function(a){return t.$vuetify.goTo("#about",t.options)}}},[i("v-list-item-title",{staticClass:"title text-link"},[t._v(" About me ")])],1),i("v-list-item",{attrs:{light:""},on:{click:function(a){return t.$vuetify.goTo("#portfolio",t.options)}}},[i("v-list-item-title",{staticClass:"title text-link"},[t._v(" My Work ")])],1),i("v-list-item",{attrs:{light:""},on:{click:function(a){return t.$vuetify.goTo("#contact",t.options)}}},[i("v-list-item-title",{staticClass:"title text-link"},[t._v(" Contact ")])],1)],1)]),i("v-col",{staticClass:"d-flex align-end flex-column d-md-none",attrs:{cols:"2"}},[i("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-app-bar-nav-icon",t._g({staticClass:"black"},e))]}}])},[i("v-list",[i("v-list-item",{attrs:{color:"success"},on:{click:function(a){return t.$vuetify.goTo("#about",t.options)}}},[i("v-list-item-title",[t._v("About me")])],1),i("v-list-item",{attrs:{color:"success"},on:{click:function(a){return t.$vuetify.goTo("#portfolio",t.options)}}},[i("v-list-item-title",[t._v("My Work")])],1),i("v-list-item",{attrs:{color:"success"},on:{click:function(a){return t.$vuetify.goTo("#contact",t.options)}}},[i("v-list-item-title",[t._v("Contact")])],1)],1)],1)],1)],1)],1)],1)},n=[],c={name:"Toolbar",components:{},data:function(){return{options:{duration:300,offset:0,easing:"easeInOutCubic"}}},computed:{getHeight:function(){return this.$vuetify.breakpoint.xs?60:"120"},getFontSize:function(){return this.$vuetify.breakpoint.xs?"subheading":"display-1"},getFontSizeFullStack:function(){return this.$vuetify.breakpoint.xs?"caption":"body-2"},cols:function(){var t=this.$vuetify.breakpoint,a=t.lg,i=t.sm;return a?[3,9]:i?[9,3]:[10,2]}}},l=c,v=(i("3e32"),i("2877")),u=i("6544"),p=i.n(u),d=i("40dc"),m=i("5bc1"),f=i("62ad"),h=i("a523"),g=i("8860"),b=i("da13"),_=i("5d23"),x=i("e449"),C=i("0fd9"),w=Object(v["a"])(l,r,n,!1,null,"f1aa6594",null),k=w.exports;p()(w,{VAppBar:d["a"],VAppBarNavIcon:m["a"],VCol:f["a"],VContainer:h["a"],VList:g["a"],VListItem:b["a"],VListItemTitle:_["a"],VMenu:x["a"],VRow:C["a"]});var y=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-footer",{staticClass:"font-weight-medium",attrs:{app:"",absolute:""}},[i("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" "),i("strong",[t._v("Johan Stiven Tinjaca")])])],1)},j=[],V={},S=V,T=i("553a"),O=Object(v["a"])(S,y,j,!1,null,null,null),$=O.exports;p()(O,{VCol:f["a"],VFooter:T["a"]});var F={name:"App",components:{Toolbar:k,Footer:$},data:function(){return{}},created:function(){document.title="Johan Tinjaca Portfolio."}},L=F,I=(i("034f"),i("7496")),M=i("a75b"),P=Object(v["a"])(L,o,s,!1,null,null,null),A=P.exports;p()(P,{VApp:I["a"],VContent:M["a"]});var D=i("8c4f"),J=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"home"},[i("v-img",{staticClass:"white--text align-end",attrs:{dark:"","max-height":"500px",src:"https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}},[i("v-container",{attrs:{"fill-height":""}},[i("v-row",[i("v-col",{staticClass:"white--text",attrs:{cols:"12",justify:"end","align-self":"stretch"}},[i("div",{class:t.getFontSize},[i("strong",[t._v(" Let's build some Apps. ")])])])],1)],1)],1),i("v-container",{staticClass:"mt-5"},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"display-1",attrs:{id:"about"}},[t._v(" About me ")])]),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"body-1 px-4"},[t._v(" "+t._s(t.aboutText)+" ")])])],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"display-1",attrs:{id:"portfolio"}},[t._v(" My Work ")])]),i("v-col",[i("Portfolio")],1)],1),i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"display-1",attrs:{id:"contact"}},[t._v(" Contact ")])]),i("v-col",{attrs:{cols:"12"}},[i("Contact")],1)],1)],1)],1)},H=[],B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",md:t.cols[0]}},[e("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("4fc5"),gradient:"to bottom left, rgba(100,115,201,.33), rgba(25,32,72,.7)",position:"top"}},[e("v-card-title",[t._v("Daily Food Intake")])],1),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("This project is a mobile web app that helps you to track the daily food intake that you should eat and show a histogram with daily progress.")])]),e("v-card-text",{staticClass:"text--primary"},[e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-react")])],1),t._v(" React ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-ruby")])],1),t._v(" Ruby ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-html5")])],1),t._v(" HTML 5 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-css3")])],1),t._v(" CSS 3 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-bootstrap")])],1),t._v(" Bootstrap ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-javascript")])],1),t._v(" JavaScript ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-ruby-on-rails")])],1),t._v(" Rails ")],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"black",text:"",href:"https://fast-shelf-63763.herokuapp.com/",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("Live Demo")]),t._v(" "),e("v-icon",[t._v("mdi-link-box")])],1),e("v-btn",{attrs:{color:"black",text:"",href:"https://github.com/jstiven01/daily-food-intake-app",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("View Source ")]),t._v(" "),e("v-icon",[t._v("mdi-github-circle")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:t.cols[0]}},[e("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("37c5"),gradient:"to bottom left, rgba(100,115,201,.33), rgba(25,32,72,.7)",position:"top"}},[e("v-card-title",[t._v("Personal Portfolio")])],1),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("This personal portfolio to show my experience and expertise as a software developer.")])]),e("v-card-text",{staticClass:"text--primary"},[e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-vuejs")])],1),t._v(" Vuejs ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-vuetify")])],1),t._v(" Vuetify ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-css3")])],1),t._v(" CSS 3 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-html5")])],1),t._v(" HTML 5 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-javascript")])],1),t._v(" JavaScript ")],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"black",text:"",href:"https://jstiven01.github.io/",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("Live Demo")]),t._v(" "),e("v-icon",[t._v("mdi-link-box")])],1),e("v-btn",{attrs:{color:"black",text:"",href:"https://github.com/jstiven01/personal-portfolio",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("View Source ")]),t._v(" "),e("v-icon",[t._v("mdi-github-circle")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:t.cols[0]}},[e("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("ebf8"),gradient:"to bottom left, rgba(100,115,201,.33), rgba(25,32,72,.7)",position:"top"}},[e("v-card-title",[t._v("Facebook Clone")])],1),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("This project is about building a large portion of the core Facebook user functionality.")])]),e("v-card-text",{staticClass:"text--primary"},[e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-ruby")])],1),t._v(" Ruby ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-html5")])],1),t._v(" HTML 5 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-css3")])],1),t._v(" CSS 3 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-bootstrap")])],1),t._v(" Bootstrap ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-ruby-on-rails")])],1),t._v(" Rails ")],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"black",text:"",href:"https://intense-reaches-58174.herokuapp.com/users/sign_in",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("Live Demo")]),t._v(" "),e("v-icon",[t._v("mdi-link-box")])],1),e("v-btn",{attrs:{color:"black",text:"",href:"https://github.com/jstiven01/facebook-clone",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("View Source ")]),t._v(" "),e("v-icon",[t._v("mdi-github-circle")])],1)],1)],1)],1),e("v-col",{attrs:{cols:"12",md:t.cols[0]}},[e("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:i("7075"),gradient:"to bottom left, rgba(100,115,201,.33), rgba(25,32,72,.7)","aspect-ratio":"1",contain:""}},[e("v-card-title",[t._v("Battleship Game")])],1),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v("This project is about implementing the battleship game using JavaScript.Test-Driven Development (TDD) was implemented with the Jest framework.")])]),e("v-card-text",{staticClass:"text--primary"},[e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-javascript")])],1),t._v(" JavaScript ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-html5")])],1),t._v(" HTML 5 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-language-css3")])],1),t._v(" CSS 3 ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-bootstrap")])],1),t._v(" Bootstrap ")],1),e("v-chip",{staticClass:"ma-2",attrs:{color:"indigo","text-color":"white"}},[e("v-avatar",{attrs:{left:""}},[e("v-icon",[t._v("mdi-webpack")])],1),t._v(" Webpack ")],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"black",text:"",href:"https://jstiven01.github.io/js-battleship/",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("Live Demo")]),t._v(" "),e("v-icon",[t._v("mdi-link-box")])],1),e("v-btn",{attrs:{color:"black",text:"",href:"https://github.com/jstiven01/js-battleship",target:"_blank"}},[e("span",{staticClass:"link-underline"},[t._v("View Source ")]),t._v(" "),e("v-icon",[t._v("mdi-github-circle")])],1)],1)],1)],1)],1)],1)},R=[],E={computed:{cols:function(){var t=this.$vuetify.breakpoint,a=t.lg,i=t.md;return a?[6,6]:i?[6,6]:[10,2]}}},z=E,W=(i("a050"),i("8212")),G=i("8336"),q=i("b0af"),N=i("99d9"),Q=i("cc20"),Y=i("132d"),K=i("adda"),U=Object(v["a"])(z,B,R,!1,null,"1bda1e41",null),X=U.exports;p()(U,{VAvatar:W["a"],VBtn:G["a"],VCard:q["a"],VCardActions:N["a"],VCardText:N["b"],VCardTitle:N["c"],VChip:Q["a"],VCol:f["a"],VContainer:h["a"],VIcon:Y["a"],VImg:K["a"],VRow:C["a"]});var Z=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"d-flex flex-column flex-md-row col-md-5 mx-auto text-center"},[i("v-list-item",{staticClass:"mx-auto"},[i("v-list-item-icon",{staticClass:"mx-1"},[i("v-icon",[t._v("mdi-email")])],1),i("v-list-item-title",[i("a",{attrs:{target:"_top",href:"mailto:stiven10@gmail.com"}},[t._v("stiven10@gmail.com")])])],1),i("v-list-item",{staticClass:"mx-auto"},[i("v-list-item-icon",{staticClass:"mx-1"},[i("v-icon",[t._v("mdi-linkedin")])],1),i("v-list-item-title",[i("a",{attrs:{href:"https://www.linkedin.com/in/johanstiventinjaca/"}},[t._v("LinkedIn")])])],1),i("v-list-item",{staticClass:"mx-auto"},[i("v-list-item-icon",{staticClass:"mx-1"},[i("v-icon",[t._v("mdi-github-circle")])],1),i("v-list-item-title",[i("a",{attrs:{href:"https://github.com/jstiven01"}},[t._v("GitHub")])])],1)],1)},tt=[],at={},it=at,et=i("34c3"),ot=Object(v["a"])(it,Z,tt,!1,null,null,null),st=ot.exports;p()(ot,{VIcon:Y["a"],VListItem:b["a"],VListItemIcon:et["a"],VListItemTitle:_["a"]});var rt={name:"Home",components:{Portfolio:X,Contact:st},data:function(){return{aboutText:"I have been a software developer for more than 15 years at different systems like financial, ERP, open-source systems, etc. Currently, I am passionate about web development and Machine Learning. A person with teamwork abilities, strengths in objective decision making, willingness for learning and knowledge, skilled at development and testing software, planning, management and implementation of projects."}},computed:{getFontSize:function(){return this.$vuetify.breakpoint.xs?"title":"headline"}}},nt=rt,ct=Object(v["a"])(nt,J,H,!1,null,null,null),lt=ct.exports;p()(ct,{VCol:f["a"],VContainer:h["a"],VImg:K["a"],VRow:C["a"]}),e["a"].use(D["a"]);var vt=[{path:"/",name:"Home",component:lt},{path:"/about",name:"About"}],ut=new D["a"]({mode:"history",base:"/",routes:vt}),pt=ut,dt=(i("5363"),i("f309"));e["a"].use(dt["a"],{iconfont:"mdi"});var mt=new dt["a"]({});e["a"].config.productionTip=!1,new e["a"]({router:pt,vuetify:mt,render:function(t){return t(A)}}).$mount("#app")},7075:function(t,a,i){t.exports=i.p+"img/jsBattle.dc11d983.png"},"73ff":function(t,a,i){},"8a23":function(t,a,i){},a050:function(t,a,i){"use strict";var e=i("73ff"),o=i.n(e);o.a},c40f:function(t,a,i){},ebf8:function(t,a,i){t.exports=i.p+"img/fbclone.9c5c96de.png"}});
//# sourceMappingURL=app.75080d69.js.map