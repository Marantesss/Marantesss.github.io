(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{230:function(t,e,n){"use strict";n.r(e);var r={name:"SectionTitle",props:{title:{type:String,default:"Title"}}},o=n(19),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center items-center flex-col"},[e("h1",{staticClass:"font-title text-4xl uppercase",domProps:{textContent:this._s(this.title)}}),this._v(" "),e("span",{staticClass:"w-32 h-1 bg-blue-900"})])}),[],!1,null,"2f9e1ed2",null);e.default=component.exports},231:function(t,e,n){"use strict";n.r(e);var r={name:"Button",props:{colorClass:{type:String,default:""}}},o=(n(245),n(19)),component=Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"my-button",class:this.colorClass,attrs:{type:"button"}},[this._t("default")],2)}),[],!1,null,"1ef8bb9f",null);e.default=component.exports;installComponents(component,{Button:n(231).default})},232:function(t,e,n){var content=n(246);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("27b75ab3",content,!0,{sourceMap:!1})},233:function(t,e,n){var content=n(248);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7728407d",content,!0,{sourceMap:!1})},234:function(t,e,n){var map={"./backend.png":249,"./branding.png":250,"./database.png":251,"./frontend.png":252,"./graduation.png":253,"./microchip.png":254,"./teamwork.png":255,"./ui-ux.png":256};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=234},235:function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("5db9ca35",content,!0,{sourceMap:!1})},236:function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("7f3ab059",content,!0,{sourceMap:!1})},237:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:w-1/2 md:flex hidden justify-center"},[e("img",{attrs:{src:n(244)}})])}],o={name:"Header",components:{Button:n(231).default},data:function(){return{navbarItems:[{name:"Home",route:"/"},{name:"Blog",route:"/blog"}]}}},l=(n(247),n(19)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"relative h-screen grid grid-cols-5 circle-clip header-min-height"},[n("div",{staticClass:"md:col-span-2 md:inline hidden h-full bg-dark-blue"}),t._v(" "),n("div",{staticClass:"md:col-span-3 col-span-5 h-full bg-light-blue"}),t._v(" "),n("div",{staticClass:"absolute h-full w-full"},[n("div",{staticClass:"h-full flex"},[t._m(0),t._v(" "),n("div",{staticClass:"h-full flex items-center justify-center md:justify-start w-full md:w-1/2"},[n("div",{staticClass:"hero-card md:p-0 p-8"},[n("h1",{staticClass:"text-gray-700 text-left font-title hero-title"},[t._v("\n            Gonçalo\n          ")]),t._v(" "),n("h1",{staticClass:"text-gray-700 text-right font-title hero-title"},[t._v("\n            Marantes\n          ")]),t._v(" "),n("h2",{staticClass:"text-3xl font-title text-gray-700"},[t._v("\n            I like anything software related. I also do pretty stuff like\n            rainbows and unicorns.\n          ")]),t._v(" "),n("Button",{attrs:{"color-class":"bg-pink-400"}},[t._v("Get in touch with me")])],1)])])])])}),r,!1,null,"117a31cf",null);e.default=component.exports;installComponents(component,{Button:n(231).default})},238:function(t,e,n){"use strict";n.r(e);var r=n(230),o=n(241),l={name:"ExpertiseSection",components:{SectionTitle:r.default,ExpertiseCard:o.default},data:function(){return{cards:[{imageName:"ui-ux",title:"UI/UX",description:"I use all the mainstream design programs to build landing pages, user flow, wireframing, prototyping",color:"#CCD4BF"},{imageName:"branding",title:"Branding",description:"I really enjoy creating brands and visual identities. I usually make marketing materials, color and tyopography kits",color:"#E7CBA9"},{imageName:"frontend",title:"Frontend Development",description:"I don’t just envison and design pretty stuff, I can also implement it",color:"#EEBAB2"},{imageName:"backend",title:"Backend Development",description:"Besides the casual vanilla PHP I mostly use nodeJS",color:"#F7F6CF"},{imageName:"database",title:"Database Development",description:"Have no fear, relational databases are also a confort area for me",color:"#DFF2F6"},{imageName:"teamwork",title:"Teamwork",description:"I’m a team player and I’m not really fond of  working alone",color:"#BEB4C5"}]}}},c=n(19),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("SectionTitle",{attrs:{title:"What I Know"}}),this._v(" "),e("div",{staticClass:"flex flex-wrap mt-12"},this._l(this.cards,(function(t){return e("div",{key:t.title,staticClass:"w-full md:w-1/2 lg:w-1/3 flex justify-center p-4"},[e("ExpertiseCard",{attrs:{"image-name":t.imageName,title:t.title,description:t.description,color:t.color}})],1)})),0)],1)}),[],!1,null,"d6a63b4e",null);e.default=component.exports;installComponents(component,{SectionTitle:n(230).default,ExpertiseCard:n(241).default})},239:function(t,e,n){"use strict";n.r(e);var r=n(230),o=n(242),l={name:"ExperienceSection",components:{SectionTitle:r.default,ExperienceCard:o.default},data:function(){return{cards:[{imageName:"graduation",title:"FEUP",description:"MIEIC"},{imageName:"microchip",title:"SPeCS",description:"Intern"}]}}},c=n(19),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("SectionTitle",{attrs:{title:"Where I've Been"}}),this._v(" "),e("div",{staticClass:"flex flex-wrap mt-12 justify-center"},this._l(this.cards,(function(t){return e("div",{key:t.title,staticClass:"p-2"},[e("ExperienceCard",{attrs:{"image-name":t.imageName,title:t.title,description:t.description}})],1)})),0)],1)}),[],!1,null,"66475476",null);e.default=component.exports;installComponents(component,{SectionTitle:n(230).default,ExperienceCard:n(242).default})},240:function(t,e,n){"use strict";n.r(e);var r=n(230),o=n(243),l={name:"ProjectSection",components:{SectionTitle:r.default,ProjectCard:o.default},data:function(){return{cards:[{imageName:"test",imagePosition:"right",title:"Project: Orwell",description:"React, Bulma, Figma, Affinity Design, Node, Express, Knex, PostgreSQL",gradientClasses:"bg-gradient-to-r from-blue-900 to-red-800"},{imageName:"test",imagePosition:"left",title:"Calculadora Fiscal",description:"Nuxt, Bulma, Figma",gradientClasses:"bg-gradient-to-r from-yellow-400 to-orange-500"},{imageName:"test",imagePosition:"right",title:"IEEE UP SB Website",description:"Vue, Vuetify, Django, PostgreSQL",gradientClasses:"bg-gradient-to-r from-green-400 to-blue-500"},{imageName:"test",imagePosition:"left",title:"Scope: 360 Dashboard",description:"Vue, Vuetify, Node, Knex, PostgreSQL",gradientClasses:"bg-gradient-to-r from-purple-400 to-red-500"}]}}},c=n(19),component=Object(c.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("SectionTitle",{attrs:{title:"What I've been up to"}}),this._v(" "),e("div",{staticClass:"grid gap-6 grid-cols-1 xl:grid-cols-2 mt-12"},this._l(this.cards,(function(t){return e("div",{key:t.title,staticClass:"w-full h-full p-2"},[e("ProjectCard",{attrs:{"image-name":t.imageName,"image-position":t.imagePosition,title:t.title,description:t.description,"gradient-classes":t.gradientClasses}})],1)})),0)],1)}),[],!1,null,"773e3cc0",null);e.default=component.exports;installComponents(component,{SectionTitle:n(230).default,ProjectCard:n(243).default})},241:function(t,e,n){"use strict";n.r(e);var r={name:"ExpertiseCard",props:{imageName:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},color:{type:String,default:""}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col items-center w-64 h-64 text-center"},[r("div",{staticClass:"rounded-full w-24 h-24 flex items-center justify-center",style:{backgroundColor:t.color}},[r("img",{attrs:{src:n(234)("./"+t.imageName+".png")}})]),t._v(" "),r("h3",{staticClass:"text-lg text-gray-900 leading-tight uppercase py-4",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"text-base text-gray-600 leading-normal",domProps:{textContent:t._s(t.description)}})])}),[],!1,null,"16560fb3",null);e.default=component.exports},242:function(t,e,n){"use strict";n.r(e);var r={name:"ExperienceCard",props:{imageName:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""}}},o=n(19),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl"},[e("div",{staticClass:"flex-shrink-0"},[e("img",{staticClass:"h-12 w-12",attrs:{src:n(234)("./"+this.imageName+".png"),alt:"ChitChat Logo"}})]),this._v(" "),e("div",{staticClass:"ml-6 pt-1"},[e("h4",{staticClass:"text-lg text-gray-900 leading-tight",domProps:{textContent:this._s(this.title)}}),this._v(" "),e("p",{staticClass:"text-base text-gray-600 leading-normal",domProps:{textContent:this._s(this.description)}})])])}),[],!1,null,"4fd2332c",null);e.default=component.exports},243:function(t,e,n){"use strict";n.r(e);var r={name:"ProjectCard",components:{Button:n(231).default},props:{imageName:{type:String,default:""},imagePosition:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},gradientClasses:{type:String,default:"from-green-400 to-blue-500"}}},o=(n(259),n(19)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full h-84 mx-auto grid grid-cols-12 bg-white rounded-lg shadow-xl overflow-hidden"},[r("div",{staticClass:"col-span-4 md:col-span-6",class:"right"===t.imagePosition?"order-last":"order-first"},[r("img",{staticClass:"w-full h-full object-cover",attrs:{src:n(257)("./"+t.imageName+".jpg"),alt:"ChitChat Logo"}})]),t._v(" "),r("div",{staticClass:"col-span-8 md:col-span-6 ml-6 p-12 lg:p-6 flex flex-col justify-between"},[r("div",[r("h4",{staticClass:"text-4xl text-gray-900 leading-tight",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("p",{staticClass:"pt-2 text-base text-gray-600 leading-normal",domProps:{textContent:t._s(t.description)}})]),t._v(" "),r("Button",{attrs:{"color-class":t.gradientClasses}},[t._v("View Project")])],1)])}),[],!1,null,"d2e900c8",null);e.default=component.exports;installComponents(component,{Button:n(231).default})},244:function(t,e,n){t.exports=n.p+"img/test.448cb1c.png"},245:function(t,e,n){"use strict";n(232)},246:function(t,e,n){(e=n(27)(!1)).push([t.i,".my-button[data-v-1ef8bb9f]{text-transform:uppercase;display:inline-block;padding:.5rem 1rem;--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity));border-radius:9999px;transition-property:all;transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:.2s}.my-button[data-v-1ef8bb9f]:hover{opacity:.75}",""]),t.exports=e},247:function(t,e,n){"use strict";n(233)},248:function(t,e,n){(e=n(27)(!1)).push([t.i,".header-min-height[data-v-117a31cf]{min-height:500px}.hero-card[data-v-117a31cf]{width:40rem}.hero-title[data-v-117a31cf]{font-size:6rem}",""]),t.exports=e},249:function(t,e,n){t.exports=n.p+"img/backend.c80b016.png"},250:function(t,e,n){t.exports=n.p+"img/branding.8559645.png"},251:function(t,e,n){t.exports=n.p+"img/database.bb0b623.png"},252:function(t,e,n){t.exports=n.p+"img/frontend.2263e04.png"},253:function(t,e,n){t.exports=n.p+"img/graduation.55f9f77.png"},254:function(t,e,n){t.exports=n.p+"img/microchip.db25df4.png"},255:function(t,e,n){t.exports=n.p+"img/teamwork.94b3c0b.png"},256:function(t,e,n){t.exports=n.p+"img/ui-ux.7018126.png"},257:function(t,e,n){var map={"./test.jpg":258};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=257},258:function(t,e,n){t.exports=n.p+"img/test.978ec57.jpg"},259:function(t,e,n){"use strict";n(235)},260:function(t,e,n){(e=n(27)(!1)).push([t.i,".card-button[data-v-d2e900c8]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}",""]),t.exports=e},261:function(t,e,n){"use strict";n(236)},262:function(t,e,n){(e=n(27)(!1)).push([t.i,"",""]),t.exports=e},277:function(t,e,n){"use strict";n.r(e);var r=n(237),o=n(238),l=n(239),c=n(240),d={name:"Index",layout:"default",components:{Header:r.default,ExpertiseSection:o.default,ExperienceSection:l.default,ProjectSection:c.default},data:function(){return{}},head:{title:"Marantesss 👋 - Home"}},f=(n(261),n(19)),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("div",{staticClass:"container mx-auto"},[e("div",{staticClass:"mt-32 flex justify-center items-center"},[e("ExpertiseSection")],1),this._v(" "),e("div",{staticClass:"mt-32 flex justify-center items-center"},[e("ExperienceSection")],1),this._v(" "),e("div",{staticClass:"my-32 flex justify-center items-center"},[e("ProjectSection")],1)])],1)}),[],!1,null,"f35cbb0c",null);e.default=component.exports;installComponents(component,{Header:n(237).default,ExpertiseSection:n(238).default,ExperienceSection:n(239).default,ProjectSection:n(240).default})}}]);