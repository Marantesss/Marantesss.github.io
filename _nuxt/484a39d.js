(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{227:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("e1d86786",content,!0,{sourceMap:!1})},228:function(t,e,n){var content=n(245);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1b7833da",content,!0,{sourceMap:!1})},229:function(t,e,n){var content=n(247);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1930a9a0",content,!0,{sourceMap:!1})},230:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative h-screen grid grid-cols-5 circle-clip header-min-height"},[r("div",{staticClass:"md:col-span-2 md:inline hidden h-full bg-blue-900"}),t._v(" "),r("div",{staticClass:"md:col-span-3 col-span-5 h-full bg-blue-100"}),t._v(" "),r("div",{staticClass:"absolute h-full w-full"},[r("div",{staticClass:"h-full flex"},[r("div",{staticClass:"md:w-1/2 md:flex hidden justify-center"},[r("img",{attrs:{src:n(234)}})]),t._v(" "),r("div",{staticClass:"h-full flex items-center justify-center md:justify-start w-full md:w-1/2"},[r("div",{staticClass:"hero-card md:p-0 p-8"},[r("h1",{staticClass:"text-left title-font hero-title"},[t._v("Gonçalo")]),t._v(" "),r("h1",{staticClass:"text-right title-font hero-title"},[t._v("Marantes")]),t._v(" "),r("h2",{staticClass:"text-3xl title-font"},[t._v("\n            I like anything software related. I also do pretty stuff like\n            rainbows and unicorns.\n          ")]),t._v(" "),r("button",{staticClass:"mt-2 uppercase bg-pink-300 hover:bg-pink-400 text-white py-2 px-4 rounded-full"},[t._v("\n            Get in touch with me\n          ")])])])])])])}],l={name:"Header",data:function(){return{navbarItems:[{name:"Home",route:"/"},{name:"Blog",route:"/blog"}]}}},o=(n(235),n(22)),component=Object(o.a)(l,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"4ceff35c",null);e.default=component.exports},231:function(t,e,n){"use strict";n.r(e);var r=n(232),l=n(233),o={name:"ExpertiseSection",components:{SectionTitle:r.default,ExpertiseCard:l.default},data:function(){return{cards:[{imageName:"ui-ux",title:"UI/UX",description:"I use all the mainstream design programs to build landing pages, user flow, wireframing, prototyping",color:"#CCD4BF"},{imageName:"branding",title:"Branding",description:"I really enjoy creating brands and visual identities. I usually make marketing materials, color and tyopography kits",color:"#E7CBA9"},{imageName:"frontend",title:"Frontend Development",description:"I don’t just envison and design pretty stuff, I can also implement it",color:"#EEBAB2"},{imageName:"backend",title:"Backend Development",description:"Besides the casual vanilla PHP I mostly use nodeJS",color:"#F7F6CF"},{imageName:"database",title:"Database Development",description:"Have no fear, relational databases are also a confort area for me",color:"#DFF2F6"},{imageName:"teamwork",title:"Teamwork",description:"I’m a team player and I’m not really fond of  working alone",color:"#BEB4C5"}]}}},c=n(22),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("SectionTitle",{attrs:{title:"What I Know"}}),this._v(" "),e("div",{staticClass:"flex flex-wrap mt-12"},this._l(this.cards,(function(t){return e("div",{key:t.title,staticClass:"w-full md:w-1/2 lg:w-1/3 flex justify-center p-4"},[e("ExpertiseCard",{attrs:{"image-name":t.imageName,title:t.title,description:t.description,color:t.color}})],1)})),0)],1)}),[],!1,null,"d6a63b4e",null);e.default=component.exports;installComponents(component,{SectionTitle:n(232).default,ExpertiseCard:n(233).default})},232:function(t,e,n){"use strict";n.r(e);var r={name:"SectionTitle",props:{title:{type:String,default:"Title"}}},l=n(22),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center flex-col"},[e("h1",{staticClass:"title-font text-4xl uppercase",domProps:{textContent:this._s(this.title)}}),this._v(" "),e("span",{staticClass:"w-32 h-1 bg-blue-900"})])}),[],!1,null,"caea173e",null);e.default=component.exports},233:function(t,e,n){"use strict";n.r(e);var r={name:"ExpertiseCard",props:{imageName:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},color:{type:String,default:""}}},l=n(22),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center w-64 h-64 text-center"},[r("div",{staticClass:"rounded-full w-24 h-24 flex items-center justify-center",style:{backgroundColor:t.color}},[r("img",{attrs:{src:n(237)("./"+t.imageName+".png")}})]),t._v(" "),r("h3",{staticClass:"text-lg font-bold uppercase py-4",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{domProps:{textContent:t._s(t.description)}})])}),[],!1,null,"50aa4188",null);e.default=component.exports},234:function(t,e,n){t.exports=n.p+"img/test.448cb1c.png"},235:function(t,e,n){"use strict";n(227)},236:function(t,e,n){(e=n(25)(!1)).push([t.i,".header-min-height[data-v-4ceff35c]{min-height:500px}.hero-card[data-v-4ceff35c]{width:40rem}.hero-title[data-v-4ceff35c]{font-size:6rem}",""]),t.exports=e},237:function(t,e,n){var map={"./backend.png":238,"./branding.png":239,"./database.png":240,"./frontend.png":241,"./teamwork.png":242,"./ui-ux.png":243};function r(t){var e=l(t);return n(e)}function l(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=l,t.exports=r,r.id=237},238:function(t,e,n){t.exports=n.p+"img/backend.c80b016.png"},239:function(t,e,n){t.exports=n.p+"img/branding.8559645.png"},240:function(t,e,n){t.exports=n.p+"img/database.bb0b623.png"},241:function(t,e,n){t.exports=n.p+"img/frontend.2263e04.png"},242:function(t,e,n){t.exports=n.p+"img/teamwork.94b3c0b.png"},243:function(t,e,n){t.exports=n.p+"img/ui-ux.7018126.png"},244:function(t,e,n){"use strict";n(228)},245:function(t,e,n){(e=n(25)(!1)).push([t.i,'.random-container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.title{font-family:"Poiret One";display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}',""]),t.exports=e},246:function(t,e,n){"use strict";n(229)},247:function(t,e,n){(e=n(25)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),t.exports=e},260:function(t,e,n){"use strict";n.r(e);n(246);var r=n(22),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),e("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),e("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E"}})])}),[],!1,null,null,null);e.default=component.exports},263:function(t,e,n){"use strict";n.r(e);var r=n(230),l=n(231),o={name:"Index",layout:"default",components:{Header:r.default,ExpertiseSection:l.default},data:function(){return{}},head:{title:"Marantesss 👋 - Home"}},c=(n(244),n(22)),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("div",{staticClass:"container mx-auto my-6"},[e("ExpertiseSection")],1),this._v(" "),e("div",{staticClass:"random-container"},[e("div",[e("Logo"),this._v(" "),e("h1",{staticClass:"title"},[this._v("marantesss-website")]),this._v(" "),this._m(0)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n          Documentation\n        ")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[this._v("\n          GitHub\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(230).default,ExpertiseSection:n(231).default,Logo:n(260).default})}}]);