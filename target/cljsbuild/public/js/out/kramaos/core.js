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
<<<<<<< HEAD
goog.require('kramaos.components.single_tutorial');
kramaos.core.kosmos_navbar = (function kramaos$core$kosmos_navbar(backgroundColor,logo,classColor,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menuBack",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),backgroundColor], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui secondary container menu "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"class","class",-2030961996),"ui middle aligned image logo"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right.menu.navbar","div.right.menu.navbar",1494591055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classColor], null),kramaos.components.navbar.community_menu.call(null,color),kramaos.components.navbar.products_menu.call(null,color),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),"Contact Us"], null)], null)], null)], null);
});
kramaos.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/kosmos",new cljs.core.Keyword(null,"kosmos","kosmos",-1574891219)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/tutorials",new cljs.core.Keyword(null,"tutorials","tutorials",1876456269)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/single-tutorial",new cljs.core.Keyword(null,"single-tutorial-page","single-tutorial-page",403563291)], null)], null));
kramaos.core.path_for = (function kramaos$core$path_for(var_args){
var args__4647__auto__ = [];
var len__4641__auto___28159 = arguments.length;
var i__4642__auto___28160 = (0);
while(true){
if((i__4642__auto___28160 < len__4641__auto___28159)){
args__4647__auto__.push((arguments[i__4642__auto___28160]));

var G__28161 = (i__4642__auto___28160 + (1));
i__4642__auto___28160 = G__28161;
=======
kramaos.core.kosmos_navbar = (function kramaos$core$kosmos_navbar(backgroundColor,logo,classColor,color){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menuBack",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),backgroundColor], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui secondary container menu "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"/"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),logo,new cljs.core.Keyword(null,"class","class",-2030961996),"ui middle aligned image logo"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right.menu.navbar","div.right.menu.navbar",1494591055),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classColor], null),kramaos.components.navbar.community_menu.call(null,color),kramaos.components.navbar.products_menu.call(null,color),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"item"], null),"Contact Us"], null)], null)], null)], null);
});
kramaos.core.router = reitit.frontend.router.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/kosmos",new cljs.core.Keyword(null,"kosmos","kosmos",-1574891219)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/tutorials",new cljs.core.Keyword(null,"tutorials","tutorials",1876456269)], null)], null));
kramaos.core.path_for = (function kramaos$core$path_for(var_args){
var args__4647__auto__ = [];
var len__4641__auto___38722 = arguments.length;
var i__4642__auto___38723 = (0);
while(true){
if((i__4642__auto___38723 < len__4641__auto___38722)){
args__4647__auto__.push((arguments[i__4642__auto___38723]));

var G__38724 = (i__4642__auto___38723 + (1));
i__4642__auto___38723 = G__38724;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return kramaos.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

<<<<<<< HEAD
kramaos.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__28155){
var vec__28156 = p__28155;
var params = cljs.core.nth.call(null,vec__28156,(0),null);
=======
kramaos.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__38718){
var vec__38719 = p__38718;
var params = cljs.core.nth.call(null,vec__38719,(0),null);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,kramaos.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.call(null,kramaos.core.router,route));
}
});

kramaos.core.path_for.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
<<<<<<< HEAD
kramaos.core.path_for.cljs$lang$applyTo = (function (seq28153){
var G__28154 = cljs.core.first.call(null,seq28153);
var seq28153__$1 = cljs.core.next.call(null,seq28153);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28154,seq28153__$1);
=======
kramaos.core.path_for.cljs$lang$applyTo = (function (seq38716){
var G__38717 = cljs.core.first.call(null,seq38716);
var seq38716__$1 = cljs.core.next.call(null,seq38716);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38717,seq38716__$1);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});

kramaos.core.path_for.call(null,new cljs.core.Keyword(null,"about","about",1423892543));
kramaos.core.home_page = (function kramaos$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),kramaos.components.index.index.call(null)], null);
<<<<<<< HEAD
});
});
kramaos.core.kosmos_page = (function kramaos$core$kosmos_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#fff","/img/logo/logo-purple.png","navbar-white","black"),kramaos.components.kosmos.kosmos.call(null)], null);
});
});
kramaos.core.single_tutorial_page = (function kramaos$core$single_tutorial_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),kramaos.components.single_tutorial.single_tutorial.call(null)], null);
=======
});
});
kramaos.core.kosmos_page = (function kramaos$core$kosmos_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#fff","/img/logo/logo-purple.png","navbar-white","black"),kramaos.components.kosmos.kosmos.call(null)], null);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});
});
kramaos.core.tutorials_page = (function kramaos$core$tutorials_page(){
return (function (){
<<<<<<< HEAD
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#fff","/img/logo/logo-purple.png","navbar-white","black"),kramaos.components.tutorials.tutorial.call(null)], null);
=======
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),kramaos.core.kosmos_navbar.call(null,"#321653","/img/logo/logo-white.png","navbar-purple","white"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [kramaos.components.tutorials.tutorial,"BROS PANHA PLOCK"], null)], null);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});
});
kramaos.core.admin_page = (function kramaos$core$admin_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello World"], null);
});
});
kramaos.core.page_for = (function kramaos$core$page_for(route){
<<<<<<< HEAD
var G__28162 = route;
var G__28162__$1 = (((G__28162 instanceof cljs.core.Keyword))?G__28162.fqn:null);
switch (G__28162__$1) {
case "index":
return new cljs.core.Var(function(){return kramaos.core.home_page;},new cljs.core.Symbol("kramaos.core","home-page","kramaos.core/home-page",1946583204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/home/koompi/MEGA/kramaos/src/cljs/kramaos/core.cljs",16,1,57,57,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.home_page)?kramaos.core.home_page.cljs$lang$test:null)]));

break;
case "kosmos":
return new cljs.core.Var(function(){return kramaos.core.kosmos_page;},new cljs.core.Symbol("kramaos.core","kosmos-page","kramaos.core/kosmos-page",-871829068,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"kosmos-page","kosmos-page",122694899,null),"/home/koompi/MEGA/kramaos/src/cljs/kramaos/core.cljs",18,1,63,63,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.kosmos_page)?kramaos.core.kosmos_page.cljs$lang$test:null)]));

break;
case "tutorials":
return new cljs.core.Var(function(){return kramaos.core.tutorials_page;},new cljs.core.Symbol("kramaos.core","tutorials-page","kramaos.core/tutorials-page",-258168550,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"tutorials-page","tutorials-page",1046768863,null),"/home/koompi/MEGA/kramaos/src/cljs/kramaos/core.cljs",21,1,75,75,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.tutorials_page)?kramaos.core.tutorials_page.cljs$lang$test:null)]));

break;
case "single-tutorial-page":
return new cljs.core.Var(function(){return kramaos.core.single_tutorial_page;},new cljs.core.Symbol("kramaos.core","single-tutorial-page","kramaos.core/single-tutorial-page",-1593890849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"single-tutorial-page","single-tutorial-page",2044094818,null),"/home/koompi/MEGA/kramaos/src/cljs/kramaos/core.cljs",27,1,69,69,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.single_tutorial_page)?kramaos.core.single_tutorial_page.cljs$lang$test:null)]));

break;
case "admin":
return new cljs.core.Var(function(){return kramaos.core.admin_page;},new cljs.core.Symbol("kramaos.core","admin-page","kramaos.core/admin-page",1353860440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"admin-page","admin-page",-2015656035,null),"/home/koompi/MEGA/kramaos/src/cljs/kramaos/core.cljs",17,1,81,81,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.admin_page)?kramaos.core.admin_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28162__$1)].join('')));
=======
var G__38725 = route;
var G__38725__$1 = (((G__38725 instanceof cljs.core.Keyword))?G__38725.fqn:null);
switch (G__38725__$1) {
case "index":
return new cljs.core.Var(function(){return kramaos.core.home_page;},new cljs.core.Symbol("kramaos.core","home-page","kramaos.core/home-page",1946583204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/kramaos/core.cljs",16,1,54,54,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.home_page)?kramaos.core.home_page.cljs$lang$test:null)]));

break;
case "kosmos":
return new cljs.core.Var(function(){return kramaos.core.kosmos_page;},new cljs.core.Symbol("kramaos.core","kosmos-page","kramaos.core/kosmos-page",-871829068,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"kosmos-page","kosmos-page",122694899,null),"src/cljs/kramaos/core.cljs",18,1,60,60,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.kosmos_page)?kramaos.core.kosmos_page.cljs$lang$test:null)]));

break;
case "tutorials":
return new cljs.core.Var(function(){return kramaos.core.tutorials_page;},new cljs.core.Symbol("kramaos.core","tutorials-page","kramaos.core/tutorials-page",-258168550,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"tutorials-page","tutorials-page",1046768863,null),"src/cljs/kramaos/core.cljs",21,1,66,66,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.tutorials_page)?kramaos.core.tutorials_page.cljs$lang$test:null)]));

break;
case "admin":
return new cljs.core.Var(function(){return kramaos.core.admin_page;},new cljs.core.Symbol("kramaos.core","admin-page","kramaos.core/admin-page",1353860440,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"kramaos.core","kramaos.core",1616423552,null),new cljs.core.Symbol(null,"admin-page","admin-page",-2015656035,null),"src/cljs/kramaos/core.cljs",17,1,72,72,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(kramaos.core.admin_page)?kramaos.core.admin_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38725__$1)].join('')));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

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

<<<<<<< HEAD
//# sourceMappingURL=core.js.map?rel=1545899809032
=======
//# sourceMappingURL=core.js.map?rel=1545871948258
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
