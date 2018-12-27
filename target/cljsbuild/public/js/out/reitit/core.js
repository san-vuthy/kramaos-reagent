// Compiled by ClojureScript 1.10.439 {}
goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('meta_merge.core');
goog.require('clojure.string');
goog.require('reitit.segment');
goog.require('reitit.impl');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.expand[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,opts);
} else {
var m__4348__auto____$1 = (reitit.core.expand["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,opts);
} else {
throw cljs.core.missing_protocol.call(null,"Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

goog.object.set(reitit.core.expand,"function",(function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
}));

goog.object.set(reitit.core.Expand,"null",true);

goog.object.set(reitit.core.expand,"null",(function (_,___$1){
return null;
}));
reitit.core.walk = (function reitit$core$walk(raw_routes,p__33649){
var map__33650 = p__33649;
var map__33650__$1 = (((((!((map__33650 == null))))?(((((map__33650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33650.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33650):map__33650);
var opts = map__33650__$1;
var path = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.call(null,map__33650__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = ((function (map__33650,map__33650__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.call(null,((function (map__33650,map__33650__$1,opts,path,data,routes,expand){
return (function (p1__33647_SHARP_,p2__33648_SHARP_){
return cljs.core.into.call(null,p1__33647_SHARP_,walk_one.call(null,p,m,p2__33648_SHARP_));
});})(map__33650,map__33650__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__33650,map__33650__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__33650,map__33650__$1,opts,path,data,routes,expand){
return (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,routes__$1))){
return walk_many.call(null,pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first.call(null,routes__$1) === 'string'){
var vec__33661 = routes__$1;
var seq__33662 = cljs.core.seq.call(null,vec__33661);
var first__33663 = cljs.core.first.call(null,seq__33662);
var seq__33662__$1 = cljs.core.next.call(null,seq__33662);
var path__$1 = first__33663;
var vec__33664 = seq__33662__$1;
var maybe_arg = cljs.core.nth.call(null,vec__33664,(0),null);
var args = vec__33664;
var vec__33667 = ((((cljs.core.vector_QMARK_.call(null,maybe_arg)) || (((cljs.core.sequential_QMARK_.call(null,maybe_arg)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest.call(null,args)], null));
var data__$1 = cljs.core.nth.call(null,vec__33667,(0),null);
var childs = cljs.core.nth.call(null,vec__33667,(1),null);
var macc__$1 = cljs.core.into.call(null,macc,expand.call(null,data__$1,opts));
var child_routes = walk_many.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.call(null,cljs.core.identity,childs));
if(cljs.core.seq.call(null,childs)){
return cljs.core.seq.call(null,child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__33650,map__33650__$1,opts,path,data,routes,expand))
;
return walk_one.call(null,path,cljs.core.mapv.call(null,cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.call(null,(function (p1__33670_SHARP_){
return cljs.core.update.call(null,p1__33670_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.call(null,(function (acc,p__33671){
var vec__33672 = p__33671;
var k = cljs.core.nth.call(null,vec__33672,(0),null);
var v = cljs.core.nth.call(null,vec__33672,(1),null);
return meta_merge.core.meta_merge.call(null,acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__33676){
var map__33677 = p__33676;
var map__33677__$1 = (((((!((map__33677 == null))))?(((((map__33677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33677):map__33677);
var opts = map__33677__$1;
var coerce = cljs.core.get.call(null,map__33677__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__33679 = reitit.core.map_data.call(null,reitit.core.merge_data,reitit.core.walk.call(null,raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,((function (G__33679,map__33677,map__33677__$1,opts,coerce){
return (function (p1__33675_SHARP_){
return coerce.call(null,p1__33675_SHARP_,opts);
});})(G__33679,map__33677,map__33677__$1,opts,coerce))
),G__33679);
} else {
return G__33679;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
var G__33681 = (function (){var G__33685 = routes;
var vec__33686 = G__33685;
var seq__33687 = cljs.core.seq.call(null,vec__33686);
var first__33688 = cljs.core.first.call(null,seq__33687);
var seq__33687__$1 = cljs.core.next.call(null,seq__33687);
var r = first__33688;
var rest = seq__33687__$1;
var acc = cljs.core.PersistentArrayMap.EMPTY;
var G__33685__$1 = G__33685;
var acc__$1 = acc;
while(true){
var vec__33689 = G__33685__$1;
var seq__33690 = cljs.core.seq.call(null,vec__33689);
var first__33691 = cljs.core.first.call(null,seq__33690);
var seq__33690__$1 = cljs.core.next.call(null,seq__33690);
var r__$1 = first__33691;
var rest__$1 = seq__33690__$1;
var acc__$2 = acc__$1;
if(cljs.core.seq.call(null,rest__$1)){
var conflicting = cljs.core.set.call(null,cljs.core.keep.call(null,((function (G__33685__$1,acc__$1,vec__33689,seq__33690,first__33691,seq__33690__$1,r__$1,rest__$1,acc__$2,G__33685,vec__33686,seq__33687,first__33688,seq__33687__$1,r,rest,acc){
return (function (p1__33680_SHARP_){
if(reitit.impl.conflicting_routes_QMARK_.call(null,r__$1,p1__33680_SHARP_)){
return p1__33680_SHARP_;
} else {
return null;
}
});})(G__33685__$1,acc__$1,vec__33689,seq__33690,first__33691,seq__33690__$1,r__$1,rest__$1,acc__$2,G__33685,vec__33686,seq__33687,first__33688,seq__33687__$1,r,rest,acc))
,rest__$1));
var G__33692 = rest__$1;
var G__33693 = cljs.core.update.call(null,acc__$2,r__$1,cljs.core.fnil.call(null,cljs.core.comp.call(null,cljs.core.set,cljs.core.concat),cljs.core.PersistentHashSet.EMPTY),conflicting);
G__33685__$1 = G__33692;
acc__$1 = G__33693;
continue;
} else {
return acc__$2;
}
break;
}
})();
var G__33681__$1 = (((G__33681 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),G__33681));
var G__33681__$2 = (((G__33681__$1 == null))?null:cljs.core.seq.call(null,G__33681__$1));
if((G__33681__$2 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33681__$2);
}
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.call(null,(function (p__33694){
var vec__33695 = p__33694;
var vec__33698 = cljs.core.nth.call(null,vec__33695,(0),null);
var path = cljs.core.nth.call(null,vec__33698,(0),null);
var vals = cljs.core.nth.call(null,vec__33695,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__33701 = routes;
var G__33701__$1 = (((G__33701 == null))?null:cljs.core.group_by.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__33701));
var G__33701__$2 = (((G__33701__$1 == null))?null:cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first),G__33701__$1));
var G__33701__$3 = (((G__33701__$2 == null))?null:cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.second),G__33701__$2));
var G__33701__$4 = (((G__33701__$3 == null))?null:cljs.core.seq.call(null,G__33701__$3));
var G__33701__$5 = (((G__33701__$4 == null))?null:cljs.core.map.call(null,((function (G__33701,G__33701__$1,G__33701__$2,G__33701__$3,G__33701__$4){
return (function (p__33702){
var vec__33703 = p__33702;
var k = cljs.core.nth.call(null,vec__33703,(0),null);
var v = cljs.core.nth.call(null,vec__33703,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set.call(null,v)], null);
});})(G__33701,G__33701__$1,G__33701__$2,G__33701__$3,G__33701__$4))
,G__33701__$4));
if((G__33701__$5 == null)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33701__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.call(null,cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.call(null,(function (p__33706){
var vec__33707 = p__33706;
var name = cljs.core.nth.call(null,vec__33707,(0),null);
var vals = cljs.core.nth.call(null,vec__33707,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n-> ",cljs.core.mapv.call(null,cljs.core.first,vals))),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.call(null,f.call(null,conflicts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__33710,_){
var vec__33711 = p__33710;
var ___$1 = cljs.core.nth.call(null,vec__33711,(0),null);
var map__33714 = cljs.core.nth.call(null,vec__33711,(1),null);
var map__33714__$1 = (((((!((map__33714 == null))))?(((((map__33714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33714):map__33714);
var name = cljs.core.get.call(null,map__33714__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33716_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__33716_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__33717,p__33718){
var vec__33719 = p__33717;
var p = cljs.core.nth.call(null,vec__33719,(0),null);
var m = cljs.core.nth.call(null,vec__33719,(1),null);
var route = vec__33719;
var map__33722 = p__33718;
var map__33722__$1 = (((((!((map__33722 == null))))?(((((map__33722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33722):map__33722);
var opts = map__33722__$1;
var compile = cljs.core.get.call(null,map__33722__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?compile.call(null,route,opts):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (p1__33724_SHARP_){
return reitit.core.compile_route.call(null,p1__33724_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.partial.call(null,cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return cljs.core.select_keys.call(null,reitit.impl.create.call(null,route),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"data","data",-232669377)], null));
});

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.router_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.router_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.compiled_routes["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.options[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.options["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.route_names[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$);
} else {
var m__4348__auto____$1 = (reitit.core.route_names["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,path);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_path["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,path);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__33726 = arguments.length;
switch (G__33726) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,name);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4347__auto__ = (((this$ == null))?null:this$);
var m__4348__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,this$,name,path_params);
} else {
var m__4348__auto____$1 = (reitit.core.match_by_name["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,this$,name,path_params);
} else {
throw cljs.core.missing_protocol.call(null,"Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,reitit.core.Router,x);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33730,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33734 = k33730;
var G__33734__$1 = (((G__33734 instanceof cljs.core.Keyword))?G__33734.fqn:null);
switch (G__33734__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33730,else__4304__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33735){
var vec__33736 = p__33735;
var k__4324__auto__ = cljs.core.nth.call(null,vec__33736,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__33736,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.Match{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33729){
var self__ = this;
var G__33729__$1 = this;
return (new cljs.core.RecordIter((0),G__33729__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33731,other33732){
var self__ = this;
var this33731__$1 = this;
return (((!((other33732 == null)))) && ((this33731__$1.constructor === other33732.constructor)) && (cljs.core._EQ_.call(null,this33731__$1.template,other33732.template)) && (cljs.core._EQ_.call(null,this33731__$1.data,other33732.data)) && (cljs.core._EQ_.call(null,this33731__$1.result,other33732.result)) && (cljs.core._EQ_.call(null,this33731__$1.path_params,other33732.path_params)) && (cljs.core._EQ_.call(null,this33731__$1.path,other33732.path)) && (cljs.core._EQ_.call(null,this33731__$1.__extmap,other33732.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33729){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33739 = cljs.core.keyword_identical_QMARK_;
var expr__33740 = k__4309__auto__;
if(cljs.core.truth_(pred__33739.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33740))){
return (new reitit.core.Match(G__33729,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33739.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33740))){
return (new reitit.core.Match(self__.template,G__33729,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33739.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33740))){
return (new reitit.core.Match(self__.template,self__.data,G__33729,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33739.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33740))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__33729,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33739.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__33740))){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__33729,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__33729),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33729){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__33729,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__33733){
var extmap__4340__auto__ = (function (){var G__33742 = cljs.core.dissoc.call(null,G__33733,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.record_QMARK_.call(null,G__33733)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33742);
} else {
return G__33742;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33733),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33733),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33733),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33733),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33733),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4301__auto__,k__4302__auto__){
var self__ = this;
var this__4301__auto____$1 = this;
return this__4301__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4302__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4303__auto__,k33745,else__4304__auto__){
var self__ = this;
var this__4303__auto____$1 = this;
var G__33749 = k33745;
var G__33749__$1 = (((G__33749 instanceof cljs.core.Keyword))?G__33749.fqn:null);
switch (G__33749__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33745,else__4304__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4320__auto__,f__4321__auto__,init__4322__auto__){
var self__ = this;
var this__4320__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4320__auto____$1){
return (function (ret__4323__auto__,p__33750){
var vec__33751 = p__33750;
var k__4324__auto__ = cljs.core.nth.call(null,vec__33751,(0),null);
var v__4325__auto__ = cljs.core.nth.call(null,vec__33751,(1),null);
return f__4321__auto__.call(null,ret__4323__auto__,k__4324__auto__,v__4325__auto__);
});})(this__4320__auto____$1))
,init__4322__auto__,this__4320__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4315__auto__,writer__4316__auto__,opts__4317__auto__){
var self__ = this;
var this__4315__auto____$1 = this;
var pr_pair__4318__auto__ = ((function (this__4315__auto____$1){
return (function (keyval__4319__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,cljs.core.pr_writer,""," ","",opts__4317__auto__,keyval__4319__auto__);
});})(this__4315__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4316__auto__,pr_pair__4318__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4317__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33744){
var self__ = this;
var G__33744__$1 = this;
return (new cljs.core.RecordIter((0),G__33744__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4299__auto__){
var self__ = this;
var this__4299__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4296__auto__){
var self__ = this;
var this__4296__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4305__auto__){
var self__ = this;
var this__4305__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4297__auto__){
var self__ = this;
var this__4297__auto____$1 = this;
var h__4159__auto__ = self__.__hash;
if((!((h__4159__auto__ == null)))){
return h__4159__auto__;
} else {
var h__4159__auto____$1 = ((function (h__4159__auto__,this__4297__auto____$1){
return (function (coll__4298__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll.call(null,coll__4298__auto__));
});})(h__4159__auto__,this__4297__auto____$1))
.call(null,this__4297__auto____$1);
self__.__hash = h__4159__auto____$1;

return h__4159__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33746,other33747){
var self__ = this;
var this33746__$1 = this;
return (((!((other33747 == null)))) && ((this33746__$1.constructor === other33747.constructor)) && (cljs.core._EQ_.call(null,this33746__$1.template,other33747.template)) && (cljs.core._EQ_.call(null,this33746__$1.data,other33747.data)) && (cljs.core._EQ_.call(null,this33746__$1.result,other33747.result)) && (cljs.core._EQ_.call(null,this33746__$1.path_params,other33747.path_params)) && (cljs.core._EQ_.call(null,this33746__$1.required,other33747.required)) && (cljs.core._EQ_.call(null,this33746__$1.__extmap,other33747.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4310__auto__,k__4311__auto__){
var self__ = this;
var this__4310__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4311__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4310__auto____$1),self__.__meta),k__4311__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4311__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4308__auto__,k__4309__auto__,G__33744){
var self__ = this;
var this__4308__auto____$1 = this;
var pred__33754 = cljs.core.keyword_identical_QMARK_;
var expr__33755 = k__4309__auto__;
if(cljs.core.truth_(pred__33754.call(null,new cljs.core.Keyword(null,"template","template",-702405684),expr__33755))){
return (new reitit.core.PartialMatch(G__33744,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33754.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__33755))){
return (new reitit.core.PartialMatch(self__.template,G__33744,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33754.call(null,new cljs.core.Keyword(null,"result","result",1415092211),expr__33755))){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__33744,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33754.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),expr__33755))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__33744,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33754.call(null,new cljs.core.Keyword(null,"required","required",1807647006),expr__33755))){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__33744,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4309__auto__,G__33744),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4313__auto__){
var self__ = this;
var this__4313__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4300__auto__,G__33744){
var self__ = this;
var this__4300__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__33744,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4306__auto__,entry__4307__auto__){
var self__ = this;
var this__4306__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4307__auto__)){
return this__4306__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4307__auto__,(0)),cljs.core._nth.call(null,entry__4307__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4306__auto____$1,entry__4307__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4344__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4344__auto__,writer__4345__auto__){
return cljs.core._write.call(null,writer__4345__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__33748){
var extmap__4340__auto__ = (function (){var G__33757 = cljs.core.dissoc.call(null,G__33748,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006));
if(cljs.core.record_QMARK_.call(null,G__33748)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__33757);
} else {
return G__33757;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__33748),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__33748),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__33748),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__33748),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__33748),null,cljs.core.not_empty.call(null,extmap__4340__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__33760 = arguments.length;
switch (G__33760) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.call(null,this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5455__auto__ = reitit.core.match_by_name.call(null,this$,name,path_params);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
if((!(reitit.core.partial_match_QMARK_.call(null,match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params.call(null,new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__33763 = arguments.length;
switch (G__33763) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.call(null,match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__33764 = match;
var G__33764__$1 = (((G__33764 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33764));
if((G__33764__$1 == null)){
return null;
} else {
var G__33765 = G__33764__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33765),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string.call(null,query_params))].join('');
} else {
return G__33765;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__33767,_){
var vec__33768 = p__33767;
var ___$1 = cljs.core.nth.call(null,vec__33768,(0),null);
var map__33771 = cljs.core.nth.call(null,vec__33768,(1),null);
var map__33771__$1 = (((((!((map__33771 == null))))?(((((map__33771.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33771.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33771):map__33771);
var handler = cljs.core.get.call(null,map__33771__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.call(null,reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__33775 = arguments.length;
switch (G__33775) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33776 = cljs.core.reduce.call(null,((function (names){
return (function (p__33779,p__33780){
var vec__33781 = p__33779;
var pl = cljs.core.nth.call(null,vec__33781,(0),null);
var nl = cljs.core.nth.call(null,vec__33781,(1),null);
var vec__33784 = p__33780;
var p = cljs.core.nth.call(null,vec__33784,(0),null);
var map__33787 = cljs.core.nth.call(null,vec__33784,(1),null);
var map__33787__$1 = (((((!((map__33787 == null))))?(((((map__33787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33787):map__33787);
var data = map__33787__$1;
var name = cljs.core.get.call(null,map__33787__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33784,(2),null);
var map__33789 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33789__$1 = (((((!((map__33789 == null))))?(((((map__33789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33789):map__33789);
var route = map__33789__$1;
var path_params = cljs.core.get.call(null,map__33789__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33789,map__33789__$1,route,path_params,vec__33781,pl,nl,vec__33784,p,map__33787,map__33787__$1,data,name,result,names){
return (function (p1__33773_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33773_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33773_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33773_SHARP_,path_params);
}
});})(map__33789,map__33789__$1,route,path_params,vec__33781,pl,nl,vec__33784,p,map__33787,map__33787__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,pl,route),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33776,(0),null);
var nl = cljs.core.nth.call(null,vec__33776,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33791 = (function (compiled_routes,opts,names,vec__33776,pl,nl,lookup,routes,meta33792){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33776 = vec__33776;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33792 = meta33792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_33793,meta33792__$1){
var self__ = this;
var _33793__$1 = this;
return (new reitit.core.t_reitit$core33791(self__.compiled_routes,self__.opts,self__.names,self__.vec__33776,self__.pl,self__.nl,self__.lookup,self__.routes,meta33792__$1));
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_33793){
var self__ = this;
var _33793__$1 = this;
return self__.meta33792;
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1,names,vec__33776,pl,nl,lookup,routes){
return (function (___$2,route){
var temp__5455__auto__ = new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(route).call(null,path);
if(cljs.core.truth_(temp__5455__auto__)){
var path_params = temp__5455__auto__;
return cljs.core.reduced.call(null,reitit.core.__GT_Match.call(null,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(route),reitit.impl.url_decode_coll.call(null,path_params),path));
} else {
return null;
}
});})(___$1,names,vec__33776,pl,nl,lookup,routes))
,null,self__.pl);
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.getBasis = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33776","vec__33776",1636121691,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33792","meta33792",2069483672,null)], null);
});})(names,vec__33776,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33791.cljs$lang$type = true;

reitit.core.t_reitit$core33791.cljs$lang$ctorStr = "reitit.core/t_reitit$core33791";

reitit.core.t_reitit$core33791.cljs$lang$ctorPrWriter = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33791");
});})(names,vec__33776,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33791.
 */
reitit.core.__GT_t_reitit$core33791 = ((function (names,vec__33776,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33791(compiled_routes__$1,opts__$1,names__$1,vec__33776__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33792){
return (new reitit.core.t_reitit$core33791(compiled_routes__$1,opts__$1,names__$1,vec__33776__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33792));
});})(names,vec__33776,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33791(compiled_routes,opts,names,vec__33776,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__33797 = arguments.length;
switch (G__33797) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5457__auto___33815 = cljs.core.seq.call(null,cljs.core.filter.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5457__auto___33815){
var wilds_33816 = temp__5457__auto___33815;
throw cljs.core.ex_info.call(null,["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_33816)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_33816,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33798 = cljs.core.reduce.call(null,((function (names){
return (function (p__33801,p__33802){
var vec__33803 = p__33801;
var pl = cljs.core.nth.call(null,vec__33803,(0),null);
var nl = cljs.core.nth.call(null,vec__33803,(1),null);
var vec__33806 = p__33802;
var p = cljs.core.nth.call(null,vec__33806,(0),null);
var map__33809 = cljs.core.nth.call(null,vec__33806,(1),null);
var map__33809__$1 = (((((!((map__33809 == null))))?(((((map__33809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33809):map__33809);
var data = map__33809__$1;
var name = cljs.core.get.call(null,map__33809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33806,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,((function (vec__33803,pl,nl,vec__33806,p,map__33809,map__33809__$1,data,name,result,names){
return (function (p1__33795_SHARP_){
return reitit.core.__GT_Match.call(null,p,data,result,p1__33795_SHARP_,p);
});})(vec__33803,pl,nl,vec__33806,p,map__33809,map__33809__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33798,(0),null);
var nl = cljs.core.nth.call(null,vec__33798,(1),null);
var data = reitit.impl.fast_map.call(null,pl);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33811 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33811 = (function (compiled_routes,opts,names,vec__33798,pl,nl,data,lookup,routes,meta33812){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33798 = vec__33798;
this.pl = pl;
this.nl = nl;
this.data = data;
this.lookup = lookup;
this.routes = routes;
this.meta33812 = meta33812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_33813,meta33812__$1){
var self__ = this;
var _33813__$1 = this;
return (new reitit.core.t_reitit$core33811(self__.compiled_routes,self__.opts,self__.names,self__.vec__33798,self__.pl,self__.nl,self__.data,self__.lookup,self__.routes,meta33812__$1));
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_33813){
var self__ = this;
var _33813__$1 = this;
return self__.meta33812;
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get.call(null,self__.data,path);
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.getBasis = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33798","vec__33798",-1927965199,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33812","meta33812",-445225579,null)], null);
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core33811.cljs$lang$type = true;

reitit.core.t_reitit$core33811.cljs$lang$ctorStr = "reitit.core/t_reitit$core33811";

reitit.core.t_reitit$core33811.cljs$lang$ctorPrWriter = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33811");
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33811.
 */
reitit.core.__GT_t_reitit$core33811 = ((function (names,vec__33798,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33811(compiled_routes__$1,opts__$1,names__$1,vec__33798__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33812){
return (new reitit.core.t_reitit$core33811(compiled_routes__$1,opts__$1,names__$1,vec__33798__$1,pl__$1,nl__$1,data__$1,lookup__$1,routes__$1,meta33812));
});})(names,vec__33798,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33811(compiled_routes,opts,names,vec__33798,pl,nl,data,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__33819 = arguments.length;
switch (G__33819) {
case 1:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.segment_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var vec__33820 = cljs.core.reduce.call(null,((function (names){
return (function (p__33823,p__33824){
var vec__33825 = p__33823;
var pl = cljs.core.nth.call(null,vec__33825,(0),null);
var nl = cljs.core.nth.call(null,vec__33825,(1),null);
var vec__33828 = p__33824;
var p = cljs.core.nth.call(null,vec__33828,(0),null);
var map__33831 = cljs.core.nth.call(null,vec__33828,(1),null);
var map__33831__$1 = (((((!((map__33831 == null))))?(((((map__33831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33831):map__33831);
var data = map__33831__$1;
var name = cljs.core.get.call(null,map__33831__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.call(null,vec__33828,(2),null);
var map__33833 = reitit.impl.create.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__33833__$1 = (((((!((map__33833 == null))))?(((((map__33833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33833):map__33833);
var route = map__33833__$1;
var path_params = cljs.core.get.call(null,map__33833__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__33833,map__33833__$1,route,path_params,vec__33825,pl,nl,vec__33828,p,map__33831,map__33831__$1,data,name,result,names){
return (function (p1__33817_SHARP_){
var temp__5455__auto__ = reitit.impl.path_for.call(null,route,p1__33817_SHARP_);
if(cljs.core.truth_(temp__5455__auto__)){
var path = temp__5455__auto__;
return reitit.core.__GT_Match.call(null,p,data,result,p1__33817_SHARP_,path);
} else {
return reitit.core.__GT_PartialMatch.call(null,p,data,result,p1__33817_SHARP_,path_params);
}
});})(map__33833,map__33833__$1,route,path_params,vec__33825,pl,nl,vec__33828,p,map__33831,map__33831__$1,data,name,result,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert.call(null,pl,p,reitit.core.__GT_Match.call(null,p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.call(null,nl,name,f):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.call(null,vec__33820,(0),null);
var nl = cljs.core.nth.call(null,vec__33820,(1),null);
var lookup = reitit.impl.fast_map.call(null,nl);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33835 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33835 = (function (compiled_routes,opts,names,vec__33820,pl,nl,lookup,routes,meta33836){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__33820 = vec__33820;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta33836 = meta33836;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_33837,meta33836__$1){
var self__ = this;
var _33837__$1 = this;
return (new reitit.core.t_reitit$core33835(self__.compiled_routes,self__.opts,self__.names,self__.vec__33820,self__.pl,self__.nl,self__.lookup,self__.routes,meta33836__$1));
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_33837){
var self__ = this;
var _33837__$1 = this;
return self__.meta33836;
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.segment.lookup.call(null,self__.pl,path);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll.call(null,new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match))),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,null);
} else {
return null;
}
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5455__auto__ = reitit.impl.fast_get.call(null,self__.lookup,name);
if(cljs.core.truth_(temp__5455__auto__)){
var match = temp__5455__auto__;
return match.call(null,reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.getBasis = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__33820","vec__33820",526434077,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta33836","meta33836",-952715570,null)], null);
});})(names,vec__33820,pl,nl,lookup,routes))
;

reitit.core.t_reitit$core33835.cljs$lang$type = true;

reitit.core.t_reitit$core33835.cljs$lang$ctorStr = "reitit.core/t_reitit$core33835";

reitit.core.t_reitit$core33835.cljs$lang$ctorPrWriter = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33835");
});})(names,vec__33820,pl,nl,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33835.
 */
reitit.core.__GT_t_reitit$core33835 = ((function (names,vec__33820,pl,nl,lookup,routes){
return (function reitit$core$__GT_t_reitit$core33835(compiled_routes__$1,opts__$1,names__$1,vec__33820__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33836){
return (new reitit.core.t_reitit$core33835(compiled_routes__$1,opts__$1,names__$1,vec__33820__$1,pl__$1,nl__$1,lookup__$1,routes__$1,meta33836));
});})(names,vec__33820,pl,nl,lookup,routes))
;

}

return (new reitit.core.t_reitit$core33835(compiled_routes,opts,names,vec__33820,pl,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.segment_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__33840 = arguments.length;
switch (G__33840) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4047__auto__ = cljs.core.not_EQ_.call(null,cljs.core.count.call(null,compiled_routes),(1));
if(or__4047__auto__){
return or__4047__auto__;
} else {
return cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.call(null,[":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__33841 = reitit.core.find_names.call(null,compiled_routes,opts);
var n = cljs.core.nth.call(null,vec__33841,(0),null);
var names = vec__33841;
var vec__33844 = compiled_routes;
var vec__33847 = cljs.core.nth.call(null,vec__33844,(0),null);
var p = cljs.core.nth.call(null,vec__33847,(0),null);
var data = cljs.core.nth.call(null,vec__33847,(1),null);
var result = cljs.core.nth.call(null,vec__33847,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match.call(null,p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33850 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33850 = (function (p,names,match,vec__33844,data,compiled_routes,routes,vec__33847,n,vec__33841,result,opts,meta33851){
this.p = p;
this.names = names;
this.match = match;
this.vec__33844 = vec__33844;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.vec__33847 = vec__33847;
this.n = n;
this.vec__33841 = vec__33841;
this.result = result;
this.opts = opts;
this.meta33851 = meta33851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_33852,meta33851__$1){
var self__ = this;
var _33852__$1 = this;
return (new reitit.core.t_reitit$core33850(self__.p,self__.names,self__.match,self__.vec__33844,self__.data,self__.compiled_routes,self__.routes,self__.vec__33847,self__.n,self__.vec__33841,self__.result,self__.opts,meta33851__$1));
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_33852){
var self__ = this;
var _33852__$1 = this;
return self__.meta33851;
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$options$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,self__.n,name)){
return reitit.impl.fast_assoc.call(null,self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params.call(null,path_params));
} else {
return null;
}
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.getBasis = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"vec__33844","vec__33844",-1141560122,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__33847","vec__33847",1824472298,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__33841","vec__33841",-907353452,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta33851","meta33851",-330036622,null)], null);
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core33850.cljs$lang$type = true;

reitit.core.t_reitit$core33850.cljs$lang$ctorStr = "reitit.core/t_reitit$core33850";

reitit.core.t_reitit$core33850.cljs$lang$ctorPrWriter = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33850");
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33850.
 */
reitit.core.__GT_t_reitit$core33850 = ((function (vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core33850(p__$2,names__$1,match__$1,vec__33844__$1,data__$1,compiled_routes__$1,routes__$1,vec__33847__$1,n__$1,vec__33841__$1,result__$1,opts__$1,meta33851){
return (new reitit.core.t_reitit$core33850(p__$2,names__$1,match__$1,vec__33844__$1,data__$1,compiled_routes__$1,routes__$1,vec__33847__$1,n__$1,vec__33841__$1,result__$1,opts__$1,meta33851));
});})(vec__33841,n,names,vec__33844,vec__33847,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core33850(p__$1,names,match,vec__33844,data,compiled_routes,routes,vec__33847,n,vec__33841,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__33855 = arguments.length;
switch (G__33855) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.call(null,compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__33856 = cljs.core.group_by.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var map__33856__$1 = (((((!((map__33856 == null))))?(((((map__33856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33856):map__33856);
var wild = cljs.core.get.call(null,map__33856__$1,true);
var lookup = cljs.core.get.call(null,map__33856__$1,false);
var __GT_static_router = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.call(null,wild,opts);
var static_router = __GT_static_router.call(null,lookup,opts);
var names = reitit.core.find_names.call(null,compiled_routes,opts);
var routes = reitit.core.uncompile_routes.call(null,compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core33858 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core33858 = (function (names,compiled_routes,routes,__GT_static_router,lookup,wild,map__33856,static_router,opts,wildcard_router,meta33859){
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.map__33856 = map__33856;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta33859 = meta33859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core33858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33860,meta33859__$1){
var self__ = this;
var _33860__$1 = this;
return (new reitit.core.t_reitit$core33858(self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.map__33856,self__.static_router,self__.opts,self__.wildcard_router,meta33859__$1));
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_33860){
var self__ = this;
var _33860__$1 = this;
return self__.meta33859;
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$routes$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$options$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_path.call(null,self__.static_router,path);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_path.call(null,self__.wildcard_router,path);
}
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name);
}
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4047__auto__ = reitit.core.match_by_name.call(null,self__.static_router,name,path_params);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return reitit.core.match_by_name.call(null,self__.wildcard_router,name,path_params);
}
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.getBasis = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"map__33856","map__33856",-1188571886,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta33859","meta33859",-2065364339,null)], null);
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core33858.cljs$lang$type = true;

reitit.core.t_reitit$core33858.cljs$lang$ctorStr = "reitit.core/t_reitit$core33858";

reitit.core.t_reitit$core33858.cljs$lang$ctorPrWriter = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"reitit.core/t_reitit$core33858");
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core33858.
 */
reitit.core.__GT_t_reitit$core33858 = ((function (map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core33858(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,map__33856__$2,static_router__$1,opts__$1,wildcard_router__$1,meta33859){
return (new reitit.core.t_reitit$core33858(names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,map__33856__$2,static_router__$1,opts__$1,wildcard_router__$1,meta33859));
});})(map__33856,map__33856__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core33858(names,compiled_routes,routes,__GT_static_router,lookup,wild,map__33856__$1,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes (default `reitit.core/throw-on-conflicts!`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__33863 = arguments.length;
switch (G__33863) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.call(null,raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__33864 = cljs.core.merge.call(null,reitit.core.default_router_options,opts);
var map__33864__$1 = (((((!((map__33864 == null))))?(((((map__33864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33864):map__33864);
var opts__$1 = map__33864__$1;
var router = cljs.core.get.call(null,map__33864__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes.call(null,raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes.call(null,routes);
var name_conflicting = reitit.core.name_conflicting_routes.call(null,routes);
var compiled_routes = reitit.core.compile_routes.call(null,routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$.call(null,cljs.core.some.call(null,reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_.call(null,reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.linear_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5457__auto___33867 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33867)){
var validate_33868 = temp__5457__auto___33867;
validate_33868.call(null,compiled_routes,opts__$1);
} else {
}

var temp__5457__auto___33869 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5457__auto___33869)){
var conflicts_33870 = temp__5457__auto___33869;
if(cljs.core.truth_(path_conflicting)){
conflicts_33870.call(null,path_conflicting);
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_.call(null,reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return router__$1.call(null,compiled_routes,opts__$1);
});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map?rel=1545662210132
