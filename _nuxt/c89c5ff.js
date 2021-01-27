(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{268:function(t,e,l){"use strict";l.r(e);var n=l(9),r={name:"PostCard",components:{Button:l(234).default,ClockIcon:n.a},props:{image:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},time:{type:String,default:"1 minute"},tags:{type:Array,default:function(){return[]}},url:{type:String,default:void 0},author:{type:String,default:"Gonçalo Marantes"},date:{type:String,default:"sometime"},gradientClasses:{type:String,default:"bg-gradient-to-r from-green-400 to-blue-500"}},data:function(){return{isMouseOver:!1}},methods:{toggleMouseOver:function(){this.isMouseOver=!this.isMouseOver},formatDate:function(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}},o=l(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto lg:h-84 flex flex-col lg:flex-row bg-white rounded-lg shadow-xl overflow-hidden"},[l("div",{staticClass:"overflow-hidden lg:w-84 lg:h-full h-40"},[l("dynamic-image",{staticClass:"h-full w-full object-cover transform duration-500",class:{"scale-125":t.isMouseOver},attrs:{filename:t.image}})],1),t._v(" "),l("div",{staticClass:"w-full p-4 flex flex-col justify-between overflow-auto"},[l("div",{staticClass:"lg:h-32 h-full"},[l("h4",{staticClass:"text-2xl text-gray-900 font-bold leading-tight line-clamp-2",domProps:{textContent:t._s(t.title)}}),t._v(" "),l("div",{staticClass:"py-2 grid grid-cols-3 items-center w-full text-sm text-gray-500"},[l("div",{staticClass:"col-span-1"},[t._v("Posted "+t._s(t.formatDate(t.date)))]),t._v(" "),l("div",{staticClass:"flex col-span-1 items-center justify-center"},[l("clock-icon",{attrs:{size:"1x"}}),t._v(" "),l("span",{staticClass:"pl-2"},[t._v(" "+t._s(t.time)+" ")])],1),t._v(" "),l("div",{staticClass:"col-span-1 flex justify-end"},t._l(t.tags,(function(e){return l("span",{key:e,staticClass:"mr-2"},[t._v("\n            #"),l("span",{staticClass:"underline"},[t._v(t._s(e))])])})),0)]),t._v(" "),l("p",{staticClass:"pt-2 text-base text-gray-500 leading-normal line-clamp-5",domProps:{textContent:t._s(t.description)}})]),t._v(" "),l("div",{staticClass:"flex justify-between items-center py-2"},[l("div",{staticClass:"text-gray-500"},[t._v("\n        By "),l("span",{staticClass:"text-dark-blue",domProps:{textContent:t._s(t.author)}})]),t._v(" "),l("NuxtLink",{attrs:{to:"/blog/"+t.url}},[l("Button",{attrs:{"is-text":""},nativeOn:{mouseenter:function(e){return t.toggleMouseOver(e)},mouseleave:function(e){return t.toggleMouseOver(e)}}},[t._v("Read Article")])],1)],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicImage:l(259).default,Button:l(234).default})},300:function(t,e,l){"use strict";l.r(e);var n=l(13),r=(l(32),l(4)),o=l(268),c=l(261),d={name:"Blog",components:{PostCard:o.default,Header:c.default},layout:"default",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var l,r,o,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=t.$content,e.next=3,l("blog").sortBy("publishedAt","desc").without(["body","toc"]).skip(1).fetch();case 3:return r=e.sent,e.next=6,l("blog").sortBy("publishedAt","desc").without(["body","toc"]).limit(1).fetch();case 6:return o=e.sent,c=Object(n.a)(o,1),d=c[0],e.abrupt("return",{latestPost:d,posts:r});case 10:case"end":return e.stop()}}),e)})))()}},f=l(14),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("SocialHead",{attrs:{title:"Blog"}}),t._v(" "),l("Header"),t._v(" "),l("div",{staticClass:"container mx-auto px-2 md:px-0"},[l("section",{staticClass:"my-4"},[t._m(0),t._v(" "),l("div",{staticClass:"py-4"},[l("PostCard",{attrs:{image:t.latestPost.image,title:t.latestPost.title,description:t.latestPost.description,author:t.latestPost.author,date:t.latestPost.publishedAt,url:t.latestPost.slug,tags:t.latestPost.tags,time:t.latestPost.time}})],1),t._v(" "),t._m(1),t._v(" "),0===t.posts.lentgh?t._l(t.posts,(function(t){return l("div",{key:t.title,staticClass:"py-4"},[l("PostCard",{attrs:{image:t.image,title:t.title,description:t.description,author:t.author,date:t.publishedAt,url:t.slug,tags:t.tags,time:t.time}})],1)})):[t._m(2)]],2)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"text-2xl text-gray-500"},[e("span",{staticClass:"text-dark-blue"},[this._v("Latest")]),this._v(" Article\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"text-2xl text-gray-500"},[e("span",{staticClass:"text-dark-blue"},[this._v("All")]),this._v(" Articles\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex justify-center py-6"},[e("p",{staticClass:"text-gray-500"},[this._v("\n            Hmmm... Nothing seems to be here. Looks like you'll have to wait a\n            while for me be creative!\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialHead:l(260).default,Header:l(261).default,PostCard:l(268).default})}}]);