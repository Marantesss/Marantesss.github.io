(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(t,e,n){"use strict";n.r(e);var o=n(9),r={name:"Navbar",components:{MenuIcon:o.e,XIcon:o.g},data:function(){return{isMenuOpen:!1,scrollPosition:null,routes:[{name:"Home",path:"/"},{name:"Blog",path:"/blog"}]}},computed:{isDetached:function(){return this.scrollPosition>50}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{updateScroll:function(){this.scrollPosition=window.scrollY},toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen}}},c=(n(219),n(19)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[t.isMenuOpen?n("XIcon",{staticClass:"menu-button",class:{"detached-menu-button":t.isDetached&&!t.isMenuOpen},attrs:{size:"4x"},on:{click:t.toggleMenu}}):n("MenuIcon",{staticClass:"menu-button",class:{"detached-menu-button":t.isDetached},attrs:{size:"4x"},on:{click:t.toggleMenu}}),t._v(" "),n("div",{staticClass:"menu",class:{"opened-menu":t.isMenuOpen}},[n("ul",{staticClass:"text-center m-auto p-2"},t._l(t.routes,(function(e){return n("li",{key:e.name,staticClass:"menu-item",class:t.$nuxt.$route.path===e.path?"underline":"",on:{click:t.toggleMenu}},[n("NuxtLink",{attrs:{to:e.path}},[t._v("\n          "+t._s(e.name)+"\n        ")])],1)})),0)])],1)}),[],!1,null,"50de3990",null);e.default=component.exports},151:function(t,e,n){var content=n(220);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("3fdb076e",content,!0,{sourceMap:!1})},152:function(t,e,n){var content=n(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("56b15182",content,!0,{sourceMap:!1})},168:function(t,e,n){"use strict";var o=n(111),r=n(73),c={name:"Default",components:{Navbar:o.default,Footer:r.default}},d=(n(221),n(19)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Navbar"),this._v(" "),e("Nuxt"),this._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Navbar:n(111).default,Footer:n(73).default})},173:function(t,e,n){n(174),t.exports=n(175)},213:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("38dfa7e4",content,!0,{sourceMap:!1})},214:function(t,e,n){(e=n(27)(!1)).push([t.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}button{background-color:transparent;background-image:none}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}fieldset,ol,ul{margin:0;padding:0}ol,ul{list-style:none}html{font-family:Montserrat,Segoe UI,sans-serif;line-height:1.5}*,:after,:before{box-sizing:border-box;border:0 solid #e2e8f0}hr{border-top-width:1px}img{border-style:solid}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}table{border-collapse:collapse}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,optgroup,select,textarea{padding:0;line-height:inherit;color:inherit}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.bg-transparent{background-color:transparent}.bg-white{--bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--bg-opacity))}.bg-blue-900{--bg-opacity:1;background-color:#2a4365;background-color:rgba(42,67,101,var(--bg-opacity))}.bg-pink-400{--bg-opacity:1;background-color:#f687b3;background-color:rgba(246,135,179,var(--bg-opacity))}.bg-dark-blue{--bg-opacity:1;background-color:#073b4c;background-color:rgba(7,59,76,var(--bg-opacity))}.bg-light-blue{--bg-opacity:1;background-color:#dff2f6;background-color:rgba(223,242,246,var(--bg-opacity))}.hover\\:bg-gray-600:hover{--bg-opacity:1;background-color:#718096;background-color:rgba(113,128,150,var(--bg-opacity))}.bg-gradient-to-r{background-image:linear-gradient(90deg,var(--gradient-color-stops))}.from-yellow-400{--gradient-from-color:#f6e05e;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(246,224,94,0))}.from-green-400{--gradient-from-color:#68d391;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(104,211,145,0))}.from-blue-900{--gradient-from-color:#2a4365;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(42,67,101,0))}.from-purple-400{--gradient-from-color:#b794f4;--gradient-color-stops:var(--gradient-from-color),var(--gradient-to-color,rgba(183,148,244,0))}.to-red-500{--gradient-to-color:#f56565}.to-red-800{--gradient-to-color:#9b2c2c}.to-orange-500{--gradient-to-color:#ed8936}.to-blue-500{--gradient-to-color:#4299e1}.rounded-lg{border-radius:.5rem}.rounded-full{border-radius:9999px}.cursor-pointer{cursor:pointer}.inline-block{display:inline-block}.flex{display:flex}.table{display:table}.grid{display:grid}.hidden{display:none}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.flex-shrink-0{flex-shrink:0}.order-first{order:-9999}.order-last{order:9999}.font-title{font-family:Poiret One,Montserrat,sans-serif}.font-bold{font-weight:700}.h-1{height:.25rem}.h-12{height:3rem}.h-24{height:6rem}.h-40{height:10rem}.h-64{height:16rem}.h-84{height:21rem}.h-full{height:100%}.h-screen{height:100vh}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-3xl{font-size:1.875rem}.text-4xl{font-size:2.25rem}.leading-tight{line-height:1.25}.leading-normal{line-height:1.5}.m-2{margin:.5rem}.m-auto{margin:auto}.my-32{margin-top:8rem;margin-bottom:8rem}.mx-auto{margin-left:auto;margin-right:auto}.ml-6{margin-left:1.5rem}.mt-12{margin-top:3rem}.mt-32{margin-top:8rem}.max-w-sm{max-width:24rem}.min-h-screen{min-height:100vh}.object-cover{-o-object-fit:cover;object-fit:cover}.overflow-hidden{overflow:hidden}.p-2{padding:.5rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.p-12{padding:3rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.pt-1{padding-top:.25rem}.pt-2{padding-top:.5rem}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.left-0{left:0}.shadow-xl{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-white{--text-opacity:1;color:#fff;color:rgba(255,255,255,var(--text-opacity))}.text-gray-600{--text-opacity:1;color:#718096;color:rgba(113,128,150,var(--text-opacity))}.text-gray-700{--text-opacity:1;color:#4a5568;color:rgba(74,85,104,var(--text-opacity))}.text-gray-900{--text-opacity:1;color:#1a202c;color:rgba(26,32,44,var(--text-opacity))}.uppercase{text-transform:uppercase}.underline{text-decoration:underline}.w-12{width:3rem}.w-24{width:6rem}.w-32{width:8rem}.w-64{width:16rem}.w-full{width:100%}.w-screen{width:100vw}.z-10{z-index:10}.z-20{z-index:20}.gap-6{grid-gap:1.5rem;gap:1.5rem}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-5{grid-template-columns:repeat(5,minmax(0,1fr))}.grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.col-span-4{grid-column:span 4/span 4}.col-span-5{grid-column:span 5/span 5}.col-span-8{grid-column:span 8/span 8}.transition-all{transition-property:all}.transition{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-200{transition-duration:.2s}@-webkit-keyframes spin{to{transform:rotate(1turn)}}@keyframes spin{to{transform:rotate(1turn)}}@-webkit-keyframes ping{75%,to{transform:scale(2);opacity:0}}@keyframes ping{75%,to{transform:scale(2);opacity:0}}@-webkit-keyframes pulse{50%{opacity:.5}}@keyframes pulse{50%{opacity:.5}}@-webkit-keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@keyframes bounce{0%,to{transform:translateY(-25%);-webkit-animation-timing-function:cubic-bezier(.8,0,1,1);animation-timing-function:cubic-bezier(.8,0,1,1)}50%{transform:none;-webkit-animation-timing-function:cubic-bezier(0,0,.2,1);animation-timing-function:cubic-bezier(0,0,.2,1)}}@media (min-width:640px){.sm\\:container{width:100%}}@media (min-width:640px) and (min-width:640px){.sm\\:container{max-width:640px}}@media (min-width:640px) and (min-width:768px){.sm\\:container{max-width:768px}}@media (min-width:640px) and (min-width:1024px){.sm\\:container{max-width:1024px}}@media (min-width:640px) and (min-width:1280px){.sm\\:container{max-width:1280px}}@media (min-width:768px){.md\\:container{width:100%}}@media (min-width:768px) and (min-width:640px){.md\\:container{max-width:640px}}@media (min-width:768px) and (min-width:768px){.md\\:container{max-width:768px}}@media (min-width:768px) and (min-width:1024px){.md\\:container{max-width:1024px}}@media (min-width:768px) and (min-width:1280px){.md\\:container{max-width:1280px}}@media (min-width:768px){.md\\:inline{display:inline}.md\\:flex{display:flex}.md\\:justify-start{justify-content:flex-start}.md\\:p-0{padding:0}.md\\:w-1\\/2{width:50%}.md\\:col-span-2{grid-column:span 2/span 2}.md\\:col-span-3{grid-column:span 3/span 3}.md\\:col-span-6{grid-column:span 6/span 6}}@media (min-width:1024px){.lg\\:container{width:100%}}@media (min-width:1024px) and (min-width:640px){.lg\\:container{max-width:640px}}@media (min-width:1024px) and (min-width:768px){.lg\\:container{max-width:768px}}@media (min-width:1024px) and (min-width:1024px){.lg\\:container{max-width:1024px}}@media (min-width:1024px) and (min-width:1280px){.lg\\:container{max-width:1280px}}@media (min-width:1024px){.lg\\:p-6{padding:1.5rem}.lg\\:w-1\\/3{width:33.333333%}}@media (min-width:1280px){.xl\\:container{width:100%}}@media (min-width:1280px) and (min-width:640px){.xl\\:container{max-width:640px}}@media (min-width:1280px) and (min-width:768px){.xl\\:container{max-width:768px}}@media (min-width:1280px) and (min-width:1024px){.xl\\:container{max-width:1024px}}@media (min-width:1280px) and (min-width:1280px){.xl\\:container{max-width:1280px}}@media (min-width:1280px){.xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}',""]),t.exports=e},215:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("f52d43e0",content,!0,{sourceMap:!1})},216:function(t,e,n){(e=n(27)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Poiret+One&display=swap);"]),e.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Poiret+One&display=swap);"]),e.push([t.i,"@media only screen and (max-height:500px){.circle-clip{-webkit-clip-path:none!important;clip-path:none!important}}.circle-clip{-webkit-clip-path:circle(300vh at 50% -200vh);clip-path:circle(300vh at 50% -200vh)}",""]),t.exports=e},219:function(t,e,n){"use strict";n(151)},220:function(t,e,n){(e=n(27)(!1)).push([t.i,".menu-button[data-v-50de3990]{right:0;top:0;background-color:transparent;margin:.5rem;position:fixed;z-index:20;border-radius:.5rem;cursor:pointer}.menu-button[data-v-50de3990]:hover{--bg-opacity:1;background-color:#cbd5e0;background-color:rgba(203,213,224,var(--bg-opacity))}.detached-menu-button[data-v-50de3990]{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.detached-menu-button[data-v-50de3990],.menu[data-v-50de3990]{--bg-opacity:1;background-color:#dff2f6;background-color:rgba(223,242,246,var(--bg-opacity))}.menu[data-v-50de3990]{position:fixed;z-index:10;top:0;left:0;height:100vh;width:100vw;display:flex;align-items:center;justify-content:center;clip-path:circle(0 at 100% 0);-webkit-clip-path:circle(0 at 100% 0);transition-property:all;transition-timing-function:cubic-bezier(0,0,.2,1);transition-duration:1s}.opened-menu[data-v-50de3990]{clip-path:circle(200% at 100% 0);-webkit-clip-path:circle(200% at 100% 0)}.menu-item[data-v-50de3990]{font-family:Poiret One,Montserrat,sans-serif;font-size:2.25rem;padding-top:1rem;padding-bottom:1rem}.menu-item[data-v-50de3990]:hover{text-decoration:underline}",""]),t.exports=e},221:function(t,e,n){"use strict";n(152)},222:function(t,e,n){(e=n(27)(!1)).push([t.i,'body{position:relative;overflow-y:scroll}body:after{content:"";display:block;height:10rem}*,:after,:before{box-sizing:border-box;margin:0}',""]),t.exports=e},73:function(t,e,n){"use strict";n.r(e);var o=n(9),r={name:"Footer",components:{GithubIcon:o.a,LinkedinIcon:o.c,InstagramIcon:o.b,TwitterIcon:o.f,MailIcon:o.d},data:function(){return{socials:[{icon:o.a,link:"https://github.com/Marantesss"},{icon:o.c,link:"https://www.linkedin.com/in/goncalomarantes/"},{icon:o.b,link:"https://www.instagram.com/marantesss/"},{icon:o.f,link:"https://twitter.com/marantesss"},{icon:o.d,link:"mailto:goncalojmarantes@gmail.com"}]}},computed:{getCurrentYear:function(){return(new Date).getFullYear()}}},c=n(19),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"h-40 w-full bg-dark-blue text-white py-4 absolute bottom-0"},[n("div",{staticClass:"w-64 py-2 mx-auto flex justify-around"},t._l(t.socials,(function(t){return n("span",{key:t.icon,staticClass:"transition duration-200 ease-in-out hover:bg-gray-600 p-2 rounded-full cursor-pointer"},[n("a",{attrs:{href:t.link}},[n(t.icon,{tag:"component"})],1)])})),0),t._v(" "),n("div",{staticClass:"py-2 mx-auto text-center"},[t._m(0),t._v(" "),n("p",[t._v("\n      "+t._s(t.getCurrentYear)+" - "),n("span",{staticClass:"font-bold"},[t._v("Gonçalo Marantes")])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n      All icons provided by\n      "),e("a",{staticClass:"underline",attrs:{href:"https://feathericons.com/"}},[this._v("Feather")]),this._v("\n      and\n      "),e("a",{staticClass:"underline",attrs:{href:"https://www.flaticon.com/"}},[this._v("Flaticon")])])}],!1,null,"41b8659a",null);e.default=component.exports;installComponents(component,{Footer:n(73).default})}},[[173,4,1,5]]]);