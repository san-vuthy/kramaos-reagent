// Compiled by ClojureScript 1.10.439 {}
goog.provide('kramaos.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('reitit.frontend');
goog.require('clerk.core');
goog.require('accountant.core');
goog.require('kramaos.components.navbar');
goog.require('kramaos.components.footer');
goog.require('kramaos.components.index');
goog.require('kramaos.components.kosmos');
goog.require('kramaos.components.tutorials');
goog.require('kramaos.components.contact');
kramaos.core.menu = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu","menu",352255198),false], null));
kramaos.core.menuToggle = (function kramaos$core$menuToggle(){
return cljs.core.swap_BANG_.call(null,kramaos.core.menu,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.core.menu),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null))));
});
kramaos.core.bars_icon = (function kramaos$core$bars_icon(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item bars-icon",new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return kramaos.core.menuToggle.call(null);
})], null),(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.core.menu),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"times icon"], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bars icon"], null)], null))], null);
});
kramaos.core.sideMenu = (function kramaos$core$sideMenu(animation){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.animated.ui.left.vertical.inverted.labeled.icon.sidebar.menu.overlay.visible","div.animated.ui.left.vertical.inverted.labeled.icon.sidebar.menu.overlay.visible",-1756765193),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),animation], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Products"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"href","href",-793805698),"https://koompi.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Hardware-Koompi"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"href","href",-793805698),"/kosmos"], null),"OS-kosmos"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"header"], null),"Community"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"href","href",-793805698),"https://forum.koompi.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Question and Answer"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item",new cljs.core.Keyword(null,"href","href",-793805698),"https://lab.krama.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),"Projects"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"header",new cljs.core.Keyword(null,"href","href",-793805698),"/contact"], null),"Contact"], null)], null)], null);
});
kramaos.core.menuToggleIcon = (function kramaos$core$menuToggleIcon(){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.core.menu),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null)))){
return kramaos.core.sideMenu.call(null,"slideInLeft");
} else {
return kramaos.core.sideMenu.call(null,"slideOutLeft");
}
});
kramaos.core.kosmos_navbar = (function kramaos$core$kosmos_navbar(backgroundColor,logo,classColor,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menuBack",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),backgroundColor], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui secondary container menu "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"class","class",-2030961996),"ui middle aligned image logo"], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right.menu.navbar","div.right.menu.navbar",1494591055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classColor], null),kramaos.components.navbar.community_menu.call(null,color),kramaos.components.navbar.products_menu.call(null,color),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"item computer or lower hidden",new cljs.core.Keyword(null,"href","href",-793805698),"/contact"], null),"Contact Us"], null),kramaos.core.menuToggleIcon.call(null),kramaos.core.bars_icon.call(null)], null)], null)], null);
});
kramaos.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/kosmos",new cljs.core.Keyword(null,"kosmos","kosmos",-1574891219)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/tutorials",new cljs.core.Keyword(null,"tutorials","tutorials",1876456269)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/contact",new cljs.core.Keyword(null,"contact","contact",609093372)], null)], null));
kramaos.core.path_for = (function kramaos$core$path_for(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28139 = arguments.length;
var i__4642__auto___28140 = (0);
while(true){
if((i__4642__auto___28140 < len__4641__auto___28139)){
args__4647__auto__.push((arguments[i__4642__auto___28140]));

var G__28141 = (i__4642__auto___28140 + (1));
i__4642__auto___28140 = G__28141;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return kramaos.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

kramaos.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__28135){
var vec__28136 = p__28135;
var params = cljs.core.nth.call(null,vec__28136,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,kramaos.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,kramaos.core.router,route));
}
});

kramaos.core.path_for.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
kramaos.core.path_for.cljs$lang$applyTo = (function (seq28133){
var G__28134 = cljs.core.first.call(null,seq28133);
var seq28133__$1 = cljs.core.next.call(null,seq28133);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28134,seq28133__$1);
});

kramaos.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
kramaos.core.home_page = (function kramaos$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),kramaos.components.index.index.call(null)], null);
});
});
kramaos.core.kosmos_page = (function kramaos$core$kosmos_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#fff","/img/logo/logo-purple.png","navbar-white","black"),kramaos.components.kosmos.kosmos.call(null)], null);
});
});
kramaos.core.tutorials_page = (function kramaos$core$tutorials_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kramaos.components.tutorials.tutorial,"BROS PANHA PLOCK"], null)], null);
});
});
kramaos.core.contact_page = (function kramaos$core$contact_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kramaos.components.contact.contact], null)], null);
});
});
kramaos.core.admin_page = (function kramaos$core$admin_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello World"], null);
});
});
kramaos.core.page_for = (function kramaos$core$page_for(route){
var G__28142 = route;
var G__28142__$1 = (((G__28142 instanceof cljs.core.Keyword))?G__28142.fqn:null);
switch (G__28142__$1) {
case "index":
return new cljs.core.Var(function(){return kramaos.core.home_page;},new cljs.core.Symbol("kramaos.core","home-page","kramaos.core/home-page",1946583204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/kramaos/core.cljs",16,1,90,90,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.home_page)?kramaos.core.home_page.cljs$lang$test:null)]));

break;
case "kosmos":
return new cljs.core.Var(function(){return kramaos.core.kosmos_page;},new cljs.core.Symbol("kramaos.core","kosmos-page","kramaos.core/kosmos-page",-871829068,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"kosmos-page","kosmos-page",122694899,null),"src/cljs/kramaos/core.cljs",18,1,96,96,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.kosmos_page)?kramaos.core.kosmos_page.cljs$lang$test:null)]));

break;
case "tutorials":
return new cljs.core.Var(function(){return kramaos.core.tutorials_page;},new cljs.core.Symbol("kramaos.core","tutorials-page","kramaos.core/tutorials-page",-258168550,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"tutorials-page","tutorials-page",1046768863,null),"src/cljs/kramaos/core.cljs",21,1,102,102,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.tutorials_page)?kramaos.core.tutorials_page.cljs$lang$test:null)]));

break;
case "contact":
return new cljs.core.Var(function(){return kramaos.core.contact_page;},new cljs.core.Symbol("kramaos.core","contact-page","kramaos.core/contact-page",799419880,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"contact-page","contact-page",-463507667,null),"src/cljs/kramaos/core.cljs",19,1,108,108,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.contact_page)?kramaos.core.contact_page.cljs$lang$test:null)]));

break;
case "admin":
return new cljs.core.Var(function(){return kramaos.core.admin_page;},new cljs.core.Symbol("kramaos.core","admin-page","kramaos.core/admin-page",1353860440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"admin-page","admin-page",-2015656035,null),"src/cljs/kramaos/core.cljs",17,1,114,114,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.admin_page)?kramaos.core.admin_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28142__$1)].join('')));

}
});
kramaos.core.current_page = (function kramaos$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get.call(null,new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kramaos.components.footer.footer], null)], null)], null);
});
});
kramaos.core.mount_root = (function kramaos$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kramaos.core.current_page], null),document.getElementById("app"));
});
kramaos.core.init_BANG_ = (function kramaos$core$init_BANG_(){
clerk.core.initialize_BANG_.call(null);

accountant.core.configure_navigation_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.call(null,kramaos.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render.call(null,clerk.core.after_render_BANG_);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),kramaos.core.page_for.call(null,current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_.call(null,path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$.call(null,reitit.frontend.match_by_path.call(null,kramaos.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_.call(null);

return kramaos.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1548317822927
