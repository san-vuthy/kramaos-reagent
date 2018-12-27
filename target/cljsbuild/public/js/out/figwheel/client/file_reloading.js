// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4047__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4047__auto__){
return or__4047__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4047__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__38388_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__38388_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__38389 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__38390 = null;
var count__38391 = (0);
var i__38392 = (0);
while(true){
if((i__38392 < count__38391)){
var n = cljs.core._nth.call(null,chunk__38390,i__38392);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38393 = seq__38389;
var G__38394 = chunk__38390;
var G__38395 = count__38391;
var G__38396 = (i__38392 + (1));
seq__38389 = G__38393;
chunk__38390 = G__38394;
count__38391 = G__38395;
i__38392 = G__38396;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38389);
if(temp__5457__auto__){
var seq__38389__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38389__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38389__$1);
var G__38397 = cljs.core.chunk_rest.call(null,seq__38389__$1);
var G__38398 = c__4461__auto__;
var G__38399 = cljs.core.count.call(null,c__4461__auto__);
var G__38400 = (0);
seq__38389 = G__38397;
chunk__38390 = G__38398;
count__38391 = G__38399;
i__38392 = G__38400;
continue;
} else {
var n = cljs.core.first.call(null,seq__38389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__38401 = cljs.core.next.call(null,seq__38389__$1);
var G__38402 = null;
var G__38403 = (0);
var G__38404 = (0);
seq__38389 = G__38401;
chunk__38390 = G__38402;
count__38391 = G__38403;
i__38392 = G__38404;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__38405){
var vec__38406 = p__38405;
var _ = cljs.core.nth.call(null,vec__38406,(0),null);
var v = cljs.core.nth.call(null,vec__38406,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__38409){
var vec__38410 = p__38409;
var k = cljs.core.nth.call(null,vec__38410,(0),null);
var v = cljs.core.nth.call(null,vec__38410,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__38422_38430 = cljs.core.seq.call(null,deps);
var chunk__38423_38431 = null;
var count__38424_38432 = (0);
var i__38425_38433 = (0);
while(true){
if((i__38425_38433 < count__38424_38432)){
var dep_38434 = cljs.core._nth.call(null,chunk__38423_38431,i__38425_38433);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_38434;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38434));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38434,(depth + (1)),state);
} else {
}


var G__38435 = seq__38422_38430;
var G__38436 = chunk__38423_38431;
var G__38437 = count__38424_38432;
var G__38438 = (i__38425_38433 + (1));
seq__38422_38430 = G__38435;
chunk__38423_38431 = G__38436;
count__38424_38432 = G__38437;
i__38425_38433 = G__38438;
continue;
} else {
var temp__5457__auto___38439 = cljs.core.seq.call(null,seq__38422_38430);
if(temp__5457__auto___38439){
var seq__38422_38440__$1 = temp__5457__auto___38439;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38422_38440__$1)){
var c__4461__auto___38441 = cljs.core.chunk_first.call(null,seq__38422_38440__$1);
var G__38442 = cljs.core.chunk_rest.call(null,seq__38422_38440__$1);
var G__38443 = c__4461__auto___38441;
var G__38444 = cljs.core.count.call(null,c__4461__auto___38441);
var G__38445 = (0);
seq__38422_38430 = G__38442;
chunk__38423_38431 = G__38443;
count__38424_38432 = G__38444;
i__38425_38433 = G__38445;
continue;
} else {
var dep_38446 = cljs.core.first.call(null,seq__38422_38440__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_38446;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_38446));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_38446,(depth + (1)),state);
} else {
}


var G__38447 = cljs.core.next.call(null,seq__38422_38440__$1);
var G__38448 = null;
var G__38449 = (0);
var G__38450 = (0);
seq__38422_38430 = G__38447;
chunk__38423_38431 = G__38448;
count__38424_38432 = G__38449;
i__38425_38433 = G__38450;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__38426){
var vec__38427 = p__38426;
var seq__38428 = cljs.core.seq.call(null,vec__38427);
var first__38429 = cljs.core.first.call(null,seq__38428);
var seq__38428__$1 = cljs.core.next.call(null,seq__38428);
var x = first__38429;
var xs = seq__38428__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__38427,seq__38428,first__38429,seq__38428__$1,x,xs,get_deps__$1){
return (function (p1__38413_SHARP_){
return clojure.set.difference.call(null,p1__38413_SHARP_,x);
});})(vec__38427,seq__38428,first__38429,seq__38428__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__38451 = cljs.core.seq.call(null,provides);
var chunk__38452 = null;
var count__38453 = (0);
var i__38454 = (0);
while(true){
if((i__38454 < count__38453)){
var prov = cljs.core._nth.call(null,chunk__38452,i__38454);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38455_38463 = cljs.core.seq.call(null,requires);
var chunk__38456_38464 = null;
var count__38457_38465 = (0);
var i__38458_38466 = (0);
while(true){
if((i__38458_38466 < count__38457_38465)){
var req_38467 = cljs.core._nth.call(null,chunk__38456_38464,i__38458_38466);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38467,prov);


var G__38468 = seq__38455_38463;
var G__38469 = chunk__38456_38464;
var G__38470 = count__38457_38465;
var G__38471 = (i__38458_38466 + (1));
seq__38455_38463 = G__38468;
chunk__38456_38464 = G__38469;
count__38457_38465 = G__38470;
i__38458_38466 = G__38471;
continue;
} else {
var temp__5457__auto___38472 = cljs.core.seq.call(null,seq__38455_38463);
if(temp__5457__auto___38472){
var seq__38455_38473__$1 = temp__5457__auto___38472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38455_38473__$1)){
var c__4461__auto___38474 = cljs.core.chunk_first.call(null,seq__38455_38473__$1);
var G__38475 = cljs.core.chunk_rest.call(null,seq__38455_38473__$1);
var G__38476 = c__4461__auto___38474;
var G__38477 = cljs.core.count.call(null,c__4461__auto___38474);
var G__38478 = (0);
seq__38455_38463 = G__38475;
chunk__38456_38464 = G__38476;
count__38457_38465 = G__38477;
i__38458_38466 = G__38478;
continue;
} else {
var req_38479 = cljs.core.first.call(null,seq__38455_38473__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38479,prov);


var G__38480 = cljs.core.next.call(null,seq__38455_38473__$1);
var G__38481 = null;
var G__38482 = (0);
var G__38483 = (0);
seq__38455_38463 = G__38480;
chunk__38456_38464 = G__38481;
count__38457_38465 = G__38482;
i__38458_38466 = G__38483;
continue;
}
} else {
}
}
break;
}


var G__38484 = seq__38451;
var G__38485 = chunk__38452;
var G__38486 = count__38453;
var G__38487 = (i__38454 + (1));
seq__38451 = G__38484;
chunk__38452 = G__38485;
count__38453 = G__38486;
i__38454 = G__38487;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38451);
if(temp__5457__auto__){
var seq__38451__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38451__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__38451__$1);
var G__38488 = cljs.core.chunk_rest.call(null,seq__38451__$1);
var G__38489 = c__4461__auto__;
var G__38490 = cljs.core.count.call(null,c__4461__auto__);
var G__38491 = (0);
seq__38451 = G__38488;
chunk__38452 = G__38489;
count__38453 = G__38490;
i__38454 = G__38491;
continue;
} else {
var prov = cljs.core.first.call(null,seq__38451__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__38459_38492 = cljs.core.seq.call(null,requires);
var chunk__38460_38493 = null;
var count__38461_38494 = (0);
var i__38462_38495 = (0);
while(true){
if((i__38462_38495 < count__38461_38494)){
var req_38496 = cljs.core._nth.call(null,chunk__38460_38493,i__38462_38495);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38496,prov);


var G__38497 = seq__38459_38492;
var G__38498 = chunk__38460_38493;
var G__38499 = count__38461_38494;
var G__38500 = (i__38462_38495 + (1));
seq__38459_38492 = G__38497;
chunk__38460_38493 = G__38498;
count__38461_38494 = G__38499;
i__38462_38495 = G__38500;
continue;
} else {
var temp__5457__auto___38501__$1 = cljs.core.seq.call(null,seq__38459_38492);
if(temp__5457__auto___38501__$1){
var seq__38459_38502__$1 = temp__5457__auto___38501__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38459_38502__$1)){
var c__4461__auto___38503 = cljs.core.chunk_first.call(null,seq__38459_38502__$1);
var G__38504 = cljs.core.chunk_rest.call(null,seq__38459_38502__$1);
var G__38505 = c__4461__auto___38503;
var G__38506 = cljs.core.count.call(null,c__4461__auto___38503);
var G__38507 = (0);
seq__38459_38492 = G__38504;
chunk__38460_38493 = G__38505;
count__38461_38494 = G__38506;
i__38462_38495 = G__38507;
continue;
} else {
var req_38508 = cljs.core.first.call(null,seq__38459_38502__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_38508,prov);


var G__38509 = cljs.core.next.call(null,seq__38459_38502__$1);
var G__38510 = null;
var G__38511 = (0);
var G__38512 = (0);
seq__38459_38492 = G__38509;
chunk__38460_38493 = G__38510;
count__38461_38494 = G__38511;
i__38462_38495 = G__38512;
continue;
}
} else {
}
}
break;
}


var G__38513 = cljs.core.next.call(null,seq__38451__$1);
var G__38514 = null;
var G__38515 = (0);
var G__38516 = (0);
seq__38451 = G__38513;
chunk__38452 = G__38514;
count__38453 = G__38515;
i__38454 = G__38516;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__38517_38521 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__38518_38522 = null;
var count__38519_38523 = (0);
var i__38520_38524 = (0);
while(true){
if((i__38520_38524 < count__38519_38523)){
var ns_38525 = cljs.core._nth.call(null,chunk__38518_38522,i__38520_38524);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38525);


var G__38526 = seq__38517_38521;
var G__38527 = chunk__38518_38522;
var G__38528 = count__38519_38523;
var G__38529 = (i__38520_38524 + (1));
seq__38517_38521 = G__38526;
chunk__38518_38522 = G__38527;
count__38519_38523 = G__38528;
i__38520_38524 = G__38529;
continue;
} else {
var temp__5457__auto___38530 = cljs.core.seq.call(null,seq__38517_38521);
if(temp__5457__auto___38530){
var seq__38517_38531__$1 = temp__5457__auto___38530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38517_38531__$1)){
var c__4461__auto___38532 = cljs.core.chunk_first.call(null,seq__38517_38531__$1);
var G__38533 = cljs.core.chunk_rest.call(null,seq__38517_38531__$1);
var G__38534 = c__4461__auto___38532;
var G__38535 = cljs.core.count.call(null,c__4461__auto___38532);
var G__38536 = (0);
seq__38517_38521 = G__38533;
chunk__38518_38522 = G__38534;
count__38519_38523 = G__38535;
i__38520_38524 = G__38536;
continue;
} else {
var ns_38537 = cljs.core.first.call(null,seq__38517_38531__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_38537);


var G__38538 = cljs.core.next.call(null,seq__38517_38531__$1);
var G__38539 = null;
var G__38540 = (0);
var G__38541 = (0);
seq__38517_38521 = G__38538;
chunk__38518_38522 = G__38539;
count__38519_38523 = G__38540;
i__38520_38524 = G__38541;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4047__auto__ = goog.require__;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return goog.require;
}
})();

goog.isProvid