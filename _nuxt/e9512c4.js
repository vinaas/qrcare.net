(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{308:function(t,e,r){"use strict";r.r(e);var n=r(28),o=(r(70),r(291)),c=(r(207),{data:function(){return{productItem:{},swiperOptions:{slidesPerView:1,spaceBetween:30,speed:2e3,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",dynamicBullets:!0}}}},components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide},methods:{getProductItem:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("/api/Organizations/"+t.$route.params.org+"/sellProducts/"+t.$route.params.id);case 3:t.productItem=e.sent,console.log("%c_id.vue line:60 object","color: #007acc;",t.productItem),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getProductItem();case 2:case"end":return e.stop()}}),e)})))()}}),l=r(53),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view_main bg-color-gray"},[r("div",{staticClass:"container bg-color-gray"},[t.productItem.imageUrls?r("b-card",{staticClass:"mb-2 mt-3",attrs:{tag:"article"}},[r("div",{staticClass:"text-center mb-3"},[r("swiper",{ref:"carousel",staticClass:"swiper",attrs:{autoplay:!0,"auto-update":!0,"auto-destroy":!0,options:t.swiperOptions}},[t._l(t.productItem.imageUrls,(function(t,e){return r("swiper-slide",{key:e},[r("b-img",{staticStyle:{width:"200px",height:"200px","object-fit":"contain"},attrs:{src:t,fluid:"",alt:"Responsive image"}})],1)})),t._v(" "),r("div",{staticClass:"swiper-pagination swiper-pagination-h",attrs:{slot:"pagination"},slot:"pagination"})],2)],1),t._v(" "),r("b-card-title",{staticClass:"fs-14 font-weight-bold text-uppercase mt-3 text-primary"},[t._v(t._s(t.productItem.title))]),t._v(" "),r("b-card-text",{staticClass:"fs-14 text-justify mb-1"},[t._v("\r\n                Thương hiệu: "),r("span",{staticClass:"text-capitalize text-warning"},[t._v(t._s(t.productItem.manufacturer))])]),t._v(" "),r("b-card-text",{staticClass:"fs-14 text-justify"},[t._v("\r\n                "+t._s(t.productItem.description)+"\r\n            ")]),t._v(" "),r("a",{attrs:{href:t.productItem.originProductUrl,target:"_blank",rel:"noopener noreferrer"}},[r("b-button",{staticClass:"w-100 fs-12 text-uppercase",attrs:{variant:"primary"}},[t._v("Xem thêm thông tin")])],1)],1):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}}]);