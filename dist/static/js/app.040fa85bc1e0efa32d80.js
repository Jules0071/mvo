webpackJsonp([1],{"2G9I":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),i=n("mvHQ"),r=n.n(i),o=n("Gu7T"),c=n.n(o),a=n("Xxa5"),u=n.n(a),p=n("exGp"),v=n.n(p),f=n("d7EF"),l=n.n(f),d={props:["options"],data:function(){return{observer:null}},mounted:function(){var e=this,t=this.options||{};this.observer=new IntersectionObserver(function(t){var n=l()(t,1)[0];n&&n.isIntersecting&&(e.$emit("intersect"),console.log("observer"))},t),this.observer.observe(this.$refs.observer)},destroyed:function(){}},m={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"observer",staticClass:"observer"},[this._t("default")],2)},staticRenderFns:[]};var h=n("VU/8")(d,m,!1,function(e){n("RWR7")},null,null).exports,b={name:"Section",components:{Observer:h},props:{item:{type:Object}},data:function(){return{active:!1}},methods:{intersect:function(){this.$emit("intersect",this.item.id)}},mounted:function(){var e=this;setTimeout(function(){e.active=!0},100)}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("observer",{on:{intersect:this.intersect}},[t("section",{ref:"section",staticClass:"mv-section"},[t("h1",{class:{active:this.active}},[this._v(this._s(this.item.id)+" as")])])])},staticRenderFns:[]};var g={name:"App",components:{"mv-section":n("VU/8")(b,_,!1,function(e){n("Ur4v")},null,null).exports,"mv-observer":h},data:function(){return{page:1,items:[],sections:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]}},methods:{getInitialSections:function(){var e=this;return v()(u.a.mark(function t(){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("sections.json");case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}},t,e)}))()},intersected:function(){var e=this;return v()(u.a.mark(function t(){var n,s;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://jsonplaceholder.typicode.com/comments?_page="+e.page+"&_limit=1");case 2:return n=t.sent,e.page++,t.next=6,n.json();case 6:s=t.sent,e.items=[].concat(c()(e.items),c()(s));case 8:case"end":return t.stop()}},t,e)}))()},log:function(e){}},mounted:function(){r()(this.sections);this.getInitialSections()}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},e._l(e.sections,function(t){return n("mv-section",{key:t.id,attrs:{item:t},on:{intersect:e.log}})}),1)},staticRenderFns:[]};var w=n("VU/8")(g,x,!1,function(e){n("2G9I")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:w},template:"<App/>"})},RWR7:function(e,t){},Ur4v:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.040fa85bc1e0efa32d80.js.map