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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47311_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47311_SHARP_));
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
var seq__47312 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47313 = null;
var count__47314 = (0);
var i__47315 = (0);
while(true){
if((i__47315 < count__47314)){
var n = cljs.core._nth.call(null,chunk__47313,i__47315);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47316 = seq__47312;
var G__47317 = chunk__47313;
var G__47318 = count__47314;
var G__47319 = (i__47315 + (1));
seq__47312 = G__47316;
chunk__47313 = G__47317;
count__47314 = G__47318;
i__47315 = G__47319;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47312);
if(temp__5457__auto__){
var seq__47312__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47312__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47312__$1);
var G__47320 = cljs.core.chunk_rest.call(null,seq__47312__$1);
var G__47321 = c__4461__auto__;
var G__47322 = cljs.core.count.call(null,c__4461__auto__);
var G__47323 = (0);
seq__47312 = G__47320;
chunk__47313 = G__47321;
count__47314 = G__47322;
i__47315 = G__47323;
continue;
} else {
var n = cljs.core.first.call(null,seq__47312__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47324 = cljs.core.next.call(null,seq__47312__$1);
var G__47325 = null;
var G__47326 = (0);
var G__47327 = (0);
seq__47312 = G__47324;
chunk__47313 = G__47325;
count__47314 = G__47326;
i__47315 = G__47327;
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
return cljs.core.some.call(null,(function (p__47328){
var vec__47329 = p__47328;
var _ = cljs.core.nth.call(null,vec__47329,(0),null);
var v = cljs.core.nth.call(null,vec__47329,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__47332){
var vec__47333 = p__47332;
var k = cljs.core.nth.call(null,vec__47333,(0),null);
var v = cljs.core.nth.call(null,vec__47333,(1),null);
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

var seq__47345_47353 = cljs.core.seq.call(null,deps);
var chunk__47346_47354 = null;
var count__47347_47355 = (0);
var i__47348_47356 = (0);
while(true){
if((i__47348_47356 < count__47347_47355)){
var dep_47357 = cljs.core._nth.call(null,chunk__47346_47354,i__47348_47356);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47357;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47357));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47357,(depth + (1)),state);
} else {
}


var G__47358 = seq__47345_47353;
var G__47359 = chunk__47346_47354;
var G__47360 = count__47347_47355;
var G__47361 = (i__47348_47356 + (1));
seq__47345_47353 = G__47358;
chunk__47346_47354 = G__47359;
count__47347_47355 = G__47360;
i__47348_47356 = G__47361;
continue;
} else {
var temp__5457__auto___47362 = cljs.core.seq.call(null,seq__47345_47353);
if(temp__5457__auto___47362){
var seq__47345_47363__$1 = temp__5457__auto___47362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47345_47363__$1)){
var c__4461__auto___47364 = cljs.core.chunk_first.call(null,seq__47345_47363__$1);
var G__47365 = cljs.core.chunk_rest.call(null,seq__47345_47363__$1);
var G__47366 = c__4461__auto___47364;
var G__47367 = cljs.core.count.call(null,c__4461__auto___47364);
var G__47368 = (0);
seq__47345_47353 = G__47365;
chunk__47346_47354 = G__47366;
count__47347_47355 = G__47367;
i__47348_47356 = G__47368;
continue;
} else {
var dep_47369 = cljs.core.first.call(null,seq__47345_47363__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47369;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47369));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47369,(depth + (1)),state);
} else {
}


var G__47370 = cljs.core.next.call(null,seq__47345_47363__$1);
var G__47371 = null;
var G__47372 = (0);
var G__47373 = (0);
seq__47345_47353 = G__47370;
chunk__47346_47354 = G__47371;
count__47347_47355 = G__47372;
i__47348_47356 = G__47373;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47349){
var vec__47350 = p__47349;
var seq__47351 = cljs.core.seq.call(null,vec__47350);
var first__47352 = cljs.core.first.call(null,seq__47351);
var seq__47351__$1 = cljs.core.next.call(null,seq__47351);
var x = first__47352;
var xs = seq__47351__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47350,seq__47351,first__47352,seq__47351__$1,x,xs,get_deps__$1){
return (function (p1__47336_SHARP_){
return clojure.set.difference.call(null,p1__47336_SHARP_,x);
});})(vec__47350,seq__47351,first__47352,seq__47351__$1,x,xs,get_deps__$1))
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
var seq__47374 = cljs.core.seq.call(null,provides);
var chunk__47375 = null;
var count__47376 = (0);
var i__47377 = (0);
while(true){
if((i__47377 < count__47376)){
var prov = cljs.core._nth.call(null,chunk__47375,i__47377);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47378_47386 = cljs.core.seq.call(null,requires);
var chunk__47379_47387 = null;
var count__47380_47388 = (0);
var i__47381_47389 = (0);
while(true){
if((i__47381_47389 < count__47380_47388)){
var req_47390 = cljs.core._nth.call(null,chunk__47379_47387,i__47381_47389);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47390,prov);


var G__47391 = seq__47378_47386;
var G__47392 = chunk__47379_47387;
var G__47393 = count__47380_47388;
var G__47394 = (i__47381_47389 + (1));
seq__47378_47386 = G__47391;
chunk__47379_47387 = G__47392;
count__47380_47388 = G__47393;
i__47381_47389 = G__47394;
continue;
} else {
var temp__5457__auto___47395 = cljs.core.seq.call(null,seq__47378_47386);
if(temp__5457__auto___47395){
var seq__47378_47396__$1 = temp__5457__auto___47395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47378_47396__$1)){
var c__4461__auto___47397 = cljs.core.chunk_first.call(null,seq__47378_47396__$1);
var G__47398 = cljs.core.chunk_rest.call(null,seq__47378_47396__$1);
var G__47399 = c__4461__auto___47397;
var G__47400 = cljs.core.count.call(null,c__4461__auto___47397);
var G__47401 = (0);
seq__47378_47386 = G__47398;
chunk__47379_47387 = G__47399;
count__47380_47388 = G__47400;
i__47381_47389 = G__47401;
continue;
} else {
var req_47402 = cljs.core.first.call(null,seq__47378_47396__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47402,prov);


var G__47403 = cljs.core.next.call(null,seq__47378_47396__$1);
var G__47404 = null;
var G__47405 = (0);
var G__47406 = (0);
seq__47378_47386 = G__47403;
chunk__47379_47387 = G__47404;
count__47380_47388 = G__47405;
i__47381_47389 = G__47406;
continue;
}
} else {
}
}
break;
}


var G__47407 = seq__47374;
var G__47408 = chunk__47375;
var G__47409 = count__47376;
var G__47410 = (i__47377 + (1));
seq__47374 = G__47407;
chunk__47375 = G__47408;
count__47376 = G__47409;
i__47377 = G__47410;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47374);
if(temp__5457__auto__){
var seq__47374__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47374__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47374__$1);
var G__47411 = cljs.core.chunk_rest.call(null,seq__47374__$1);
var G__47412 = c__4461__auto__;
var G__47413 = cljs.core.count.call(null,c__4461__auto__);
var G__47414 = (0);
seq__47374 = G__47411;
chunk__47375 = G__47412;
count__47376 = G__47413;
i__47377 = G__47414;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47374__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47382_47415 = cljs.core.seq.call(null,requires);
var chunk__47383_47416 = null;
var count__47384_47417 = (0);
var i__47385_47418 = (0);
while(true){
if((i__47385_47418 < count__47384_47417)){
var req_47419 = cljs.core._nth.call(null,chunk__47383_47416,i__47385_47418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47419,prov);


var G__47420 = seq__47382_47415;
var G__47421 = chunk__47383_47416;
var G__47422 = count__47384_47417;
var G__47423 = (i__47385_47418 + (1));
seq__47382_47415 = G__47420;
chunk__47383_47416 = G__47421;
count__47384_47417 = G__47422;
i__47385_47418 = G__47423;
continue;
} else {
var temp__5457__auto___47424__$1 = cljs.core.seq.call(null,seq__47382_47415);
if(temp__5457__auto___47424__$1){
var seq__47382_47425__$1 = temp__5457__auto___47424__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47382_47425__$1)){
var c__4461__auto___47426 = cljs.core.chunk_first.call(null,seq__47382_47425__$1);
var G__47427 = cljs.core.chunk_rest.call(null,seq__47382_47425__$1);
var G__47428 = c__4461__auto___47426;
var G__47429 = cljs.core.count.call(null,c__4461__auto___47426);
var G__47430 = (0);
seq__47382_47415 = G__47427;
chunk__47383_47416 = G__47428;
count__47384_47417 = G__47429;
i__47385_47418 = G__47430;
continue;
} else {
var req_47431 = cljs.core.first.call(null,seq__47382_47425__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47431,prov);


var G__47432 = cljs.core.next.call(null,seq__47382_47425__$1);
var G__47433 = null;
var G__47434 = (0);
var G__47435 = (0);
seq__47382_47415 = G__47432;
chunk__47383_47416 = G__47433;
count__47384_47417 = G__47434;
i__47385_47418 = G__47435;
continue;
}
} else {
}
}
break;
}


var G__47436 = cljs.core.next.call(null,seq__47374__$1);
var G__47437 = null;
var G__47438 = (0);
var G__47439 = (0);
seq__47374 = G__47436;
chunk__47375 = G__47437;
count__47376 = G__47438;
i__47377 = G__47439;
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
var seq__47440_47444 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47441_47445 = null;
var count__47442_47446 = (0);
var i__47443_47447 = (0);
while(true){
if((i__47443_47447 < count__47442_47446)){
var ns_47448 = cljs.core._nth.call(null,chunk__47441_47445,i__47443_47447);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47448);


var G__47449 = seq__47440_47444;
var G__47450 = chunk__47441_47445;
var G__47451 = count__47442_47446;
var G__47452 = (i__47443_47447 + (1));
seq__47440_47444 = G__47449;
chunk__47441_47445 = G__47450;
count__47442_47446 = G__47451;
i__47443_47447 = G__47452;
continue;
} else {
var temp__5457__auto___47453 = cljs.core.seq.call(null,seq__47440_47444);
if(temp__5457__auto___47453){
var seq__47440_47454__$1 = temp__5457__auto___47453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47440_47454__$1)){
var c__4461__auto___47455 = cljs.core.chunk_first.call(null,seq__47440_47454__$1);
var G__47456 = cljs.core.chunk_rest.call(null,seq__47440_47454__$1);
var G__47457 = c__4461__auto___47455;
var G__47458 = cljs.core.count.call(null,c__4461__auto___47455);
var G__47459 = (0);
seq__47440_47444 = G__47456;
chunk__47441_47445 = G__47457;
count__47442_47446 = G__47458;
i__47443_47447 = G__47459;
continue;
} else {
var ns_47460 = cljs.core.first.call(null,seq__47440_47454__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47460);


var G__47461 = cljs.core.next.call(null,seq__47440_47454__$1);
var G__47462 = null;
var G__47463 = (0);
var G__47464 = (0);
seq__47440_47444 = G__47461;
chunk__47441_47445 = G__47462;
count__47442_47446 = G__47463;
i__47443_47447 = G__47464;
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

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__47465__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47466__i = 0, G__47466__a = new Array(arguments.length -  0);
while (G__47466__i < G__47466__a.length) {G__47466__a[G__47466__i] = arguments[G__47466__i + 0]; ++G__47466__i;}
  args = new cljs.core.IndexedSeq(G__47466__a,0,null);
} 
return G__47465__delegate.call(this,args);};
G__47465.cljs$lang$maxFixedArity = 0;
G__47465.cljs$lang$applyTo = (function (arglist__47467){
var args = cljs.core.seq(arglist__47467);
return G__47465__delegate(args);
});
G__47465.cljs$core$IFn$_invoke$arity$variadic = G__47465__delegate;
return G__47465;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47468_SHARP_,p2__47469_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47468_SHARP_)),p2__47469_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47470_SHARP_,p2__47471_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47470_SHARP_),p2__47471_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47472 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47472.addCallback(((function (G__47472){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47472))
);

G__47472.addErrback(((function (G__47472){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47472))
);

return G__47472;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47473){if((e47473 instanceof Error)){
var e = e47473;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47473;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47474){if((e47474 instanceof Error)){
var e = e47474;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47474;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47475 = cljs.core._EQ_;
var expr__47476 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47475.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47476))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47475.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47476))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47475.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47476))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47475,expr__47476){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47475,expr__47476))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47478,callback){
var map__47479 = p__47478;
var map__47479__$1 = (((((!((map__47479 == null))))?(((((map__47479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47479):map__47479);
var file_msg = map__47479__$1;
var request_url = cljs.core.get.call(null,map__47479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47479,map__47479__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47479,map__47479__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_47517){
var state_val_47518 = (state_47517[(1)]);
if((state_val_47518 === (7))){
var inst_47513 = (state_47517[(2)]);
var state_47517__$1 = state_47517;
var statearr_47519_47545 = state_47517__$1;
(statearr_47519_47545[(2)] = inst_47513);

(statearr_47519_47545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (1))){
var state_47517__$1 = state_47517;
var statearr_47520_47546 = state_47517__$1;
(statearr_47520_47546[(2)] = null);

(statearr_47520_47546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (4))){
var inst_47483 = (state_47517[(7)]);
var inst_47483__$1 = (state_47517[(2)]);
var state_47517__$1 = (function (){var statearr_47521 = state_47517;
(statearr_47521[(7)] = inst_47483__$1);

return statearr_47521;
})();
if(cljs.core.truth_(inst_47483__$1)){
var statearr_47522_47547 = state_47517__$1;
(statearr_47522_47547[(1)] = (5));

} else {
var statearr_47523_47548 = state_47517__$1;
(statearr_47523_47548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (15))){
var inst_47496 = (state_47517[(8)]);
var inst_47498 = (state_47517[(9)]);
var inst_47500 = inst_47498.call(null,inst_47496);
var state_47517__$1 = state_47517;
var statearr_47524_47549 = state_47517__$1;
(statearr_47524_47549[(2)] = inst_47500);

(statearr_47524_47549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (13))){
var inst_47507 = (state_47517[(2)]);
var state_47517__$1 = state_47517;
var statearr_47525_47550 = state_47517__$1;
(statearr_47525_47550[(2)] = inst_47507);

(statearr_47525_47550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (6))){
var state_47517__$1 = state_47517;
var statearr_47526_47551 = state_47517__$1;
(statearr_47526_47551[(2)] = null);

(statearr_47526_47551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (17))){
var inst_47504 = (state_47517[(2)]);
var state_47517__$1 = state_47517;
var statearr_47527_47552 = state_47517__$1;
(statearr_47527_47552[(2)] = inst_47504);

(statearr_47527_47552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (3))){
var inst_47515 = (state_47517[(2)]);
var state_47517__$1 = state_47517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47517__$1,inst_47515);
} else {
if((state_val_47518 === (12))){
var state_47517__$1 = state_47517;
var statearr_47528_47553 = state_47517__$1;
(statearr_47528_47553[(2)] = null);

(statearr_47528_47553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (2))){
var state_47517__$1 = state_47517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47517__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47518 === (11))){
var inst_47488 = (state_47517[(10)]);
var inst_47494 = figwheel.client.file_reloading.blocking_load.call(null,inst_47488);
var state_47517__$1 = state_47517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47517__$1,(14),inst_47494);
} else {
if((state_val_47518 === (9))){
var inst_47488 = (state_47517[(10)]);
var state_47517__$1 = state_47517;
if(cljs.core.truth_(inst_47488)){
var statearr_47529_47554 = state_47517__$1;
(statearr_47529_47554[(1)] = (11));

} else {
var statearr_47530_47555 = state_47517__$1;
(statearr_47530_47555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (5))){
var inst_47489 = (state_47517[(11)]);
var inst_47483 = (state_47517[(7)]);
var inst_47488 = cljs.core.nth.call(null,inst_47483,(0),null);
var inst_47489__$1 = cljs.core.nth.call(null,inst_47483,(1),null);
var state_47517__$1 = (function (){var statearr_47531 = state_47517;
(statearr_47531[(11)] = inst_47489__$1);

(statearr_47531[(10)] = inst_47488);

return statearr_47531;
})();
if(cljs.core.truth_(inst_47489__$1)){
var statearr_47532_47556 = state_47517__$1;
(statearr_47532_47556[(1)] = (8));

} else {
var statearr_47533_47557 = state_47517__$1;
(statearr_47533_47557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (14))){
var inst_47498 = (state_47517[(9)]);
var inst_47488 = (state_47517[(10)]);
var inst_47496 = (state_47517[(2)]);
var inst_47497 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47498__$1 = cljs.core.get.call(null,inst_47497,inst_47488);
var state_47517__$1 = (function (){var statearr_47534 = state_47517;
(statearr_47534[(8)] = inst_47496);

(statearr_47534[(9)] = inst_47498__$1);

return statearr_47534;
})();
if(cljs.core.truth_(inst_47498__$1)){
var statearr_47535_47558 = state_47517__$1;
(statearr_47535_47558[(1)] = (15));

} else {
var statearr_47536_47559 = state_47517__$1;
(statearr_47536_47559[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (16))){
var inst_47496 = (state_47517[(8)]);
var inst_47502 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47496);
var state_47517__$1 = state_47517;
var statearr_47537_47560 = state_47517__$1;
(statearr_47537_47560[(2)] = inst_47502);

(statearr_47537_47560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (10))){
var inst_47509 = (state_47517[(2)]);
var state_47517__$1 = (function (){var statearr_47538 = state_47517;
(statearr_47538[(12)] = inst_47509);

return statearr_47538;
})();
var statearr_47539_47561 = state_47517__$1;
(statearr_47539_47561[(2)] = null);

(statearr_47539_47561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47518 === (8))){
var inst_47489 = (state_47517[(11)]);
var inst_47491 = eval(inst_47489);
var state_47517__$1 = state_47517;
var statearr_47540_47562 = state_47517__$1;
(statearr_47540_47562[(2)] = inst_47491);

(statearr_47540_47562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32991__auto__ = null;
var figwheel$client$file_reloading$state_machine__32991__auto____0 = (function (){
var statearr_47541 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47541[(0)] = figwheel$client$file_reloading$state_machine__32991__auto__);

(statearr_47541[(1)] = (1));

return statearr_47541;
});
var figwheel$client$file_reloading$state_machine__32991__auto____1 = (function (state_47517){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47542){if((e47542 instanceof Object)){
var ex__32994__auto__ = e47542;
var statearr_47543_47563 = state_47517;
(statearr_47543_47563[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47564 = state_47517;
state_47517 = G__47564;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32991__auto__ = function(state_47517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32991__auto____1.call(this,state_47517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32991__auto____0;
figwheel$client$file_reloading$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32991__auto____1;
return figwheel$client$file_reloading$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_47544 = f__33158__auto__.call(null);
(statearr_47544[(6)] = c__33157__auto__);

return statearr_47544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47566 = arguments.length;
switch (G__47566) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47568,callback){
var map__47569 = p__47568;
var map__47569__$1 = (((((!((map__47569 == null))))?(((((map__47569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47569):map__47569);
var file_msg = map__47569__$1;
var namespace = cljs.core.get.call(null,map__47569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47569,map__47569__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47569,map__47569__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47571){
var map__47572 = p__47571;
var map__47572__$1 = (((((!((map__47572 == null))))?(((((map__47572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47572):map__47572);
var file_msg = map__47572__$1;
var namespace = cljs.core.get.call(null,map__47572__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47574){
var map__47575 = p__47574;
var map__47575__$1 = (((((!((map__47575 == null))))?(((((map__47575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47575):map__47575);
var file_msg = map__47575__$1;
var namespace = cljs.core.get.call(null,map__47575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4036__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4036__auto__){
var or__4047__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
var or__4047__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4047__auto____$1)){
return or__4047__auto____$1;
} else {
var or__4047__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4047__auto____$2)){
return or__4047__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4036__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47577,callback){
var map__47578 = p__47577;
var map__47578__$1 = (((((!((map__47578 == null))))?(((((map__47578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47578):map__47578);
var file_msg = map__47578__$1;
var request_url = cljs.core.get.call(null,map__47578__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33157__auto___47628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___47628,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___47628,out){
return (function (state_47613){
var state_val_47614 = (state_47613[(1)]);
if((state_val_47614 === (1))){
var inst_47587 = cljs.core.seq.call(null,files);
var inst_47588 = cljs.core.first.call(null,inst_47587);
var inst_47589 = cljs.core.next.call(null,inst_47587);
var inst_47590 = files;
var state_47613__$1 = (function (){var statearr_47615 = state_47613;
(statearr_47615[(7)] = inst_47589);

(statearr_47615[(8)] = inst_47588);

(statearr_47615[(9)] = inst_47590);

return statearr_47615;
})();
var statearr_47616_47629 = state_47613__$1;
(statearr_47616_47629[(2)] = null);

(statearr_47616_47629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (2))){
var inst_47596 = (state_47613[(10)]);
var inst_47590 = (state_47613[(9)]);
var inst_47595 = cljs.core.seq.call(null,inst_47590);
var inst_47596__$1 = cljs.core.first.call(null,inst_47595);
var inst_47597 = cljs.core.next.call(null,inst_47595);
var inst_47598 = (inst_47596__$1 == null);
var inst_47599 = cljs.core.not.call(null,inst_47598);
var state_47613__$1 = (function (){var statearr_47617 = state_47613;
(statearr_47617[(11)] = inst_47597);

(statearr_47617[(10)] = inst_47596__$1);

return statearr_47617;
})();
if(inst_47599){
var statearr_47618_47630 = state_47613__$1;
(statearr_47618_47630[(1)] = (4));

} else {
var statearr_47619_47631 = state_47613__$1;
(statearr_47619_47631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (3))){
var inst_47611 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47613__$1,inst_47611);
} else {
if((state_val_47614 === (4))){
var inst_47596 = (state_47613[(10)]);
var inst_47601 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47596);
var state_47613__$1 = state_47613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47613__$1,(7),inst_47601);
} else {
if((state_val_47614 === (5))){
var inst_47607 = cljs.core.async.close_BANG_.call(null,out);
var state_47613__$1 = state_47613;
var statearr_47620_47632 = state_47613__$1;
(statearr_47620_47632[(2)] = inst_47607);

(statearr_47620_47632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (6))){
var inst_47609 = (state_47613[(2)]);
var state_47613__$1 = state_47613;
var statearr_47621_47633 = state_47613__$1;
(statearr_47621_47633[(2)] = inst_47609);

(statearr_47621_47633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47614 === (7))){
var inst_47597 = (state_47613[(11)]);
var inst_47603 = (state_47613[(2)]);
var inst_47604 = cljs.core.async.put_BANG_.call(null,out,inst_47603);
var inst_47590 = inst_47597;
var state_47613__$1 = (function (){var statearr_47622 = state_47613;
(statearr_47622[(12)] = inst_47604);

(statearr_47622[(9)] = inst_47590);

return statearr_47622;
})();
var statearr_47623_47634 = state_47613__$1;
(statearr_47623_47634[(2)] = null);

(statearr_47623_47634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33157__auto___47628,out))
;
return ((function (switch__32990__auto__,c__33157__auto___47628,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0 = (function (){
var statearr_47624 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47624[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__);

(statearr_47624[(1)] = (1));

return statearr_47624;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1 = (function (state_47613){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47625){if((e47625 instanceof Object)){
var ex__32994__auto__ = e47625;
var statearr_47626_47635 = state_47613;
(statearr_47626_47635[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47636 = state_47613;
state_47613 = G__47636;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__ = function(state_47613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1.call(this,state_47613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___47628,out))
})();
var state__33159__auto__ = (function (){var statearr_47627 = f__33158__auto__.call(null);
(statearr_47627[(6)] = c__33157__auto___47628);

return statearr_47627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___47628,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47637,opts){
var map__47638 = p__47637;
var map__47638__$1 = (((((!((map__47638 == null))))?(((((map__47638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47638):map__47638);
var eval_body = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4036__auto__ = eval_body;
if(cljs.core.truth_(and__4036__auto__)){
return typeof eval_body === 'string';
} else {
return and__4036__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e47640){var e = e47640;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__47641_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47641_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__47642){
var vec__47643 = p__47642;
var k = cljs.core.nth.call(null,vec__47643,(0),null);
var v = cljs.core.nth.call(null,vec__47643,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47646){
var vec__47647 = p__47646;
var k = cljs.core.nth.call(null,vec__47647,(0),null);
var v = cljs.core.nth.call(null,vec__47647,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47653,p__47654){
var map__47655 = p__47653;
var map__47655__$1 = (((((!((map__47655 == null))))?(((((map__47655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47655):map__47655);
var opts = map__47655__$1;
var before_jsload = cljs.core.get.call(null,map__47655__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47655__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47655__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47656 = p__47654;
var map__47656__$1 = (((((!((map__47656 == null))))?(((((map__47656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47656):map__47656);
var msg = map__47656__$1;
var files = cljs.core.get.call(null,map__47656__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47656__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47656__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47810){
var state_val_47811 = (state_47810[(1)]);
if((state_val_47811 === (7))){
var inst_47670 = (state_47810[(7)]);
var inst_47671 = (state_47810[(8)]);
var inst_47672 = (state_47810[(9)]);
var inst_47673 = (state_47810[(10)]);
var inst_47678 = cljs.core._nth.call(null,inst_47671,inst_47673);
var inst_47679 = figwheel.client.file_reloading.eval_body.call(null,inst_47678,opts);
var inst_47680 = (inst_47673 + (1));
var tmp47812 = inst_47670;
var tmp47813 = inst_47671;
var tmp47814 = inst_47672;
var inst_47670__$1 = tmp47812;
var inst_47671__$1 = tmp47813;
var inst_47672__$1 = tmp47814;
var inst_47673__$1 = inst_47680;
var state_47810__$1 = (function (){var statearr_47815 = state_47810;
(statearr_47815[(11)] = inst_47679);

(statearr_47815[(7)] = inst_47670__$1);

(statearr_47815[(8)] = inst_47671__$1);

(statearr_47815[(9)] = inst_47672__$1);

(statearr_47815[(10)] = inst_47673__$1);

return statearr_47815;
})();
var statearr_47816_47899 = state_47810__$1;
(statearr_47816_47899[(2)] = null);

(statearr_47816_47899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (20))){
var inst_47713 = (state_47810[(12)]);
var inst_47721 = figwheel.client.file_reloading.sort_files.call(null,inst_47713);
var state_47810__$1 = state_47810;
var statearr_47817_47900 = state_47810__$1;
(statearr_47817_47900[(2)] = inst_47721);

(statearr_47817_47900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (27))){
var state_47810__$1 = state_47810;
var statearr_47818_47901 = state_47810__$1;
(statearr_47818_47901[(2)] = null);

(statearr_47818_47901[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (1))){
var inst_47662 = (state_47810[(13)]);
var inst_47659 = before_jsload.call(null,files);
var inst_47660 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47661 = (function (){return ((function (inst_47662,inst_47659,inst_47660,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47650_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47650_SHARP_);
});
;})(inst_47662,inst_47659,inst_47660,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47662__$1 = cljs.core.filter.call(null,inst_47661,files);
var inst_47663 = cljs.core.not_empty.call(null,inst_47662__$1);
var state_47810__$1 = (function (){var statearr_47819 = state_47810;
(statearr_47819[(14)] = inst_47659);

(statearr_47819[(15)] = inst_47660);

(statearr_47819[(13)] = inst_47662__$1);

return statearr_47819;
})();
if(cljs.core.truth_(inst_47663)){
var statearr_47820_47902 = state_47810__$1;
(statearr_47820_47902[(1)] = (2));

} else {
var statearr_47821_47903 = state_47810__$1;
(statearr_47821_47903[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (24))){
var state_47810__$1 = state_47810;
var statearr_47822_47904 = state_47810__$1;
(statearr_47822_47904[(2)] = null);

(statearr_47822_47904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (39))){
var inst_47763 = (state_47810[(16)]);
var state_47810__$1 = state_47810;
var statearr_47823_47905 = state_47810__$1;
(statearr_47823_47905[(2)] = inst_47763);

(statearr_47823_47905[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (46))){
var inst_47805 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47824_47906 = state_47810__$1;
(statearr_47824_47906[(2)] = inst_47805);

(statearr_47824_47906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (4))){
var inst_47707 = (state_47810[(2)]);
var inst_47708 = cljs.core.List.EMPTY;
var inst_47709 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47708);
var inst_47710 = (function (){return ((function (inst_47707,inst_47708,inst_47709,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47651_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47651_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47651_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47651_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_47707,inst_47708,inst_47709,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47711 = cljs.core.filter.call(null,inst_47710,files);
var inst_47712 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47713 = cljs.core.concat.call(null,inst_47711,inst_47712);
var state_47810__$1 = (function (){var statearr_47825 = state_47810;
(statearr_47825[(17)] = inst_47709);

(statearr_47825[(18)] = inst_47707);

(statearr_47825[(12)] = inst_47713);

return statearr_47825;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47826_47907 = state_47810__$1;
(statearr_47826_47907[(1)] = (16));

} else {
var statearr_47827_47908 = state_47810__$1;
(statearr_47827_47908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (15))){
var inst_47697 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47828_47909 = state_47810__$1;
(statearr_47828_47909[(2)] = inst_47697);

(statearr_47828_47909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (21))){
var inst_47723 = (state_47810[(19)]);
var inst_47723__$1 = (state_47810[(2)]);
var inst_47724 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47723__$1);
var state_47810__$1 = (function (){var statearr_47829 = state_47810;
(statearr_47829[(19)] = inst_47723__$1);

return statearr_47829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47810__$1,(22),inst_47724);
} else {
if((state_val_47811 === (31))){
var inst_47808 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47810__$1,inst_47808);
} else {
if((state_val_47811 === (32))){
var inst_47763 = (state_47810[(16)]);
var inst_47768 = inst_47763.cljs$lang$protocol_mask$partition0$;
var inst_47769 = (inst_47768 & (64));
var inst_47770 = inst_47763.cljs$core$ISeq$;
var inst_47771 = (cljs.core.PROTOCOL_SENTINEL === inst_47770);
var inst_47772 = ((inst_47769) || (inst_47771));
var state_47810__$1 = state_47810;
if(cljs.core.truth_(inst_47772)){
var statearr_47830_47910 = state_47810__$1;
(statearr_47830_47910[(1)] = (35));

} else {
var statearr_47831_47911 = state_47810__$1;
(statearr_47831_47911[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (40))){
var inst_47785 = (state_47810[(20)]);
var inst_47784 = (state_47810[(2)]);
var inst_47785__$1 = cljs.core.get.call(null,inst_47784,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47786 = cljs.core.get.call(null,inst_47784,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47787 = cljs.core.not_empty.call(null,inst_47785__$1);
var state_47810__$1 = (function (){var statearr_47832 = state_47810;
(statearr_47832[(21)] = inst_47786);

(statearr_47832[(20)] = inst_47785__$1);

return statearr_47832;
})();
if(cljs.core.truth_(inst_47787)){
var statearr_47833_47912 = state_47810__$1;
(statearr_47833_47912[(1)] = (41));

} else {
var statearr_47834_47913 = state_47810__$1;
(statearr_47834_47913[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (33))){
var state_47810__$1 = state_47810;
var statearr_47835_47914 = state_47810__$1;
(statearr_47835_47914[(2)] = false);

(statearr_47835_47914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (13))){
var inst_47683 = (state_47810[(22)]);
var inst_47687 = cljs.core.chunk_first.call(null,inst_47683);
var inst_47688 = cljs.core.chunk_rest.call(null,inst_47683);
var inst_47689 = cljs.core.count.call(null,inst_47687);
var inst_47670 = inst_47688;
var inst_47671 = inst_47687;
var inst_47672 = inst_47689;
var inst_47673 = (0);
var state_47810__$1 = (function (){var statearr_47836 = state_47810;
(statearr_47836[(7)] = inst_47670);

(statearr_47836[(8)] = inst_47671);

(statearr_47836[(9)] = inst_47672);

(statearr_47836[(10)] = inst_47673);

return statearr_47836;
})();
var statearr_47837_47915 = state_47810__$1;
(statearr_47837_47915[(2)] = null);

(statearr_47837_47915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (22))){
var inst_47723 = (state_47810[(19)]);
var inst_47726 = (state_47810[(23)]);
var inst_47727 = (state_47810[(24)]);
var inst_47731 = (state_47810[(25)]);
var inst_47726__$1 = (state_47810[(2)]);
var inst_47727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47726__$1);
var inst_47728 = (function (){var all_files = inst_47723;
var res_SINGLEQUOTE_ = inst_47726__$1;
var res = inst_47727__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47723,inst_47726,inst_47727,inst_47731,inst_47726__$1,inst_47727__$1,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47652_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47652_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47723,inst_47726,inst_47727,inst_47731,inst_47726__$1,inst_47727__$1,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47729 = cljs.core.filter.call(null,inst_47728,inst_47726__$1);
var inst_47730 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47731__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47730);
var inst_47732 = cljs.core.not_empty.call(null,inst_47731__$1);
var state_47810__$1 = (function (){var statearr_47838 = state_47810;
(statearr_47838[(23)] = inst_47726__$1);

(statearr_47838[(24)] = inst_47727__$1);

(statearr_47838[(25)] = inst_47731__$1);

(statearr_47838[(26)] = inst_47729);

return statearr_47838;
})();
if(cljs.core.truth_(inst_47732)){
var statearr_47839_47916 = state_47810__$1;
(statearr_47839_47916[(1)] = (23));

} else {
var statearr_47840_47917 = state_47810__$1;
(statearr_47840_47917[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (36))){
var state_47810__$1 = state_47810;
var statearr_47841_47918 = state_47810__$1;
(statearr_47841_47918[(2)] = false);

(statearr_47841_47918[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (41))){
var inst_47785 = (state_47810[(20)]);
var inst_47789 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47790 = cljs.core.map.call(null,inst_47789,inst_47785);
var inst_47791 = cljs.core.pr_str.call(null,inst_47790);
var inst_47792 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47791)].join('');
var inst_47793 = figwheel.client.utils.log.call(null,inst_47792);
var state_47810__$1 = state_47810;
var statearr_47842_47919 = state_47810__$1;
(statearr_47842_47919[(2)] = inst_47793);

(statearr_47842_47919[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (43))){
var inst_47786 = (state_47810[(21)]);
var inst_47796 = (state_47810[(2)]);
var inst_47797 = cljs.core.not_empty.call(null,inst_47786);
var state_47810__$1 = (function (){var statearr_47843 = state_47810;
(statearr_47843[(27)] = inst_47796);

return statearr_47843;
})();
if(cljs.core.truth_(inst_47797)){
var statearr_47844_47920 = state_47810__$1;
(statearr_47844_47920[(1)] = (44));

} else {
var statearr_47845_47921 = state_47810__$1;
(statearr_47845_47921[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (29))){
var inst_47763 = (state_47810[(16)]);
var inst_47723 = (state_47810[(19)]);
var inst_47726 = (state_47810[(23)]);
var inst_47727 = (state_47810[(24)]);
var inst_47731 = (state_47810[(25)]);
var inst_47729 = (state_47810[(26)]);
var inst_47759 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47762 = (function (){var all_files = inst_47723;
var res_SINGLEQUOTE_ = inst_47726;
var res = inst_47727;
var files_not_loaded = inst_47729;
var dependencies_that_loaded = inst_47731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47763,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47759,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47761){
var map__47846 = p__47761;
var map__47846__$1 = (((((!((map__47846 == null))))?(((((map__47846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47846):map__47846);
var namespace = cljs.core.get.call(null,map__47846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47763,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47759,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47763__$1 = cljs.core.group_by.call(null,inst_47762,inst_47729);
var inst_47765 = (inst_47763__$1 == null);
var inst_47766 = cljs.core.not.call(null,inst_47765);
var state_47810__$1 = (function (){var statearr_47848 = state_47810;
(statearr_47848[(16)] = inst_47763__$1);

(statearr_47848[(28)] = inst_47759);

return statearr_47848;
})();
if(inst_47766){
var statearr_47849_47922 = state_47810__$1;
(statearr_47849_47922[(1)] = (32));

} else {
var statearr_47850_47923 = state_47810__$1;
(statearr_47850_47923[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (44))){
var inst_47786 = (state_47810[(21)]);
var inst_47799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47786);
var inst_47800 = cljs.core.pr_str.call(null,inst_47799);
var inst_47801 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47800)].join('');
var inst_47802 = figwheel.client.utils.log.call(null,inst_47801);
var state_47810__$1 = state_47810;
var statearr_47851_47924 = state_47810__$1;
(statearr_47851_47924[(2)] = inst_47802);

(statearr_47851_47924[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (6))){
var inst_47704 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47852_47925 = state_47810__$1;
(statearr_47852_47925[(2)] = inst_47704);

(statearr_47852_47925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (28))){
var inst_47729 = (state_47810[(26)]);
var inst_47756 = (state_47810[(2)]);
var inst_47757 = cljs.core.not_empty.call(null,inst_47729);
var state_47810__$1 = (function (){var statearr_47853 = state_47810;
(statearr_47853[(29)] = inst_47756);

return statearr_47853;
})();
if(cljs.core.truth_(inst_47757)){
var statearr_47854_47926 = state_47810__$1;
(statearr_47854_47926[(1)] = (29));

} else {
var statearr_47855_47927 = state_47810__$1;
(statearr_47855_47927[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (25))){
var inst_47727 = (state_47810[(24)]);
var inst_47743 = (state_47810[(2)]);
var inst_47744 = cljs.core.not_empty.call(null,inst_47727);
var state_47810__$1 = (function (){var statearr_47856 = state_47810;
(statearr_47856[(30)] = inst_47743);

return statearr_47856;
})();
if(cljs.core.truth_(inst_47744)){
var statearr_47857_47928 = state_47810__$1;
(statearr_47857_47928[(1)] = (26));

} else {
var statearr_47858_47929 = state_47810__$1;
(statearr_47858_47929[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (34))){
var inst_47779 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
if(cljs.core.truth_(inst_47779)){
var statearr_47859_47930 = state_47810__$1;
(statearr_47859_47930[(1)] = (38));

} else {
var statearr_47860_47931 = state_47810__$1;
(statearr_47860_47931[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (17))){
var state_47810__$1 = state_47810;
var statearr_47861_47932 = state_47810__$1;
(statearr_47861_47932[(2)] = recompile_dependents);

(statearr_47861_47932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (3))){
var state_47810__$1 = state_47810;
var statearr_47862_47933 = state_47810__$1;
(statearr_47862_47933[(2)] = null);

(statearr_47862_47933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (12))){
var inst_47700 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47863_47934 = state_47810__$1;
(statearr_47863_47934[(2)] = inst_47700);

(statearr_47863_47934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (2))){
var inst_47662 = (state_47810[(13)]);
var inst_47669 = cljs.core.seq.call(null,inst_47662);
var inst_47670 = inst_47669;
var inst_47671 = null;
var inst_47672 = (0);
var inst_47673 = (0);
var state_47810__$1 = (function (){var statearr_47864 = state_47810;
(statearr_47864[(7)] = inst_47670);

(statearr_47864[(8)] = inst_47671);

(statearr_47864[(9)] = inst_47672);

(statearr_47864[(10)] = inst_47673);

return statearr_47864;
})();
var statearr_47865_47935 = state_47810__$1;
(statearr_47865_47935[(2)] = null);

(statearr_47865_47935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (23))){
var inst_47723 = (state_47810[(19)]);
var inst_47726 = (state_47810[(23)]);
var inst_47727 = (state_47810[(24)]);
var inst_47731 = (state_47810[(25)]);
var inst_47729 = (state_47810[(26)]);
var inst_47734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47736 = (function (){var all_files = inst_47723;
var res_SINGLEQUOTE_ = inst_47726;
var res = inst_47727;
var files_not_loaded = inst_47729;
var dependencies_that_loaded = inst_47731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47734,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47735){
var map__47866 = p__47735;
var map__47866__$1 = (((((!((map__47866 == null))))?(((((map__47866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47866):map__47866);
var request_url = cljs.core.get.call(null,map__47866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47734,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47737 = cljs.core.reverse.call(null,inst_47731);
var inst_47738 = cljs.core.map.call(null,inst_47736,inst_47737);
var inst_47739 = cljs.core.pr_str.call(null,inst_47738);
var inst_47740 = figwheel.client.utils.log.call(null,inst_47739);
var state_47810__$1 = (function (){var statearr_47868 = state_47810;
(statearr_47868[(31)] = inst_47734);

return statearr_47868;
})();
var statearr_47869_47936 = state_47810__$1;
(statearr_47869_47936[(2)] = inst_47740);

(statearr_47869_47936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (35))){
var state_47810__$1 = state_47810;
var statearr_47870_47937 = state_47810__$1;
(statearr_47870_47937[(2)] = true);

(statearr_47870_47937[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (19))){
var inst_47713 = (state_47810[(12)]);
var inst_47719 = figwheel.client.file_reloading.expand_files.call(null,inst_47713);
var state_47810__$1 = state_47810;
var statearr_47871_47938 = state_47810__$1;
(statearr_47871_47938[(2)] = inst_47719);

(statearr_47871_47938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (11))){
var state_47810__$1 = state_47810;
var statearr_47872_47939 = state_47810__$1;
(statearr_47872_47939[(2)] = null);

(statearr_47872_47939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (9))){
var inst_47702 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47873_47940 = state_47810__$1;
(statearr_47873_47940[(2)] = inst_47702);

(statearr_47873_47940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (5))){
var inst_47672 = (state_47810[(9)]);
var inst_47673 = (state_47810[(10)]);
var inst_47675 = (inst_47673 < inst_47672);
var inst_47676 = inst_47675;
var state_47810__$1 = state_47810;
if(cljs.core.truth_(inst_47676)){
var statearr_47874_47941 = state_47810__$1;
(statearr_47874_47941[(1)] = (7));

} else {
var statearr_47875_47942 = state_47810__$1;
(statearr_47875_47942[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (14))){
var inst_47683 = (state_47810[(22)]);
var inst_47692 = cljs.core.first.call(null,inst_47683);
var inst_47693 = figwheel.client.file_reloading.eval_body.call(null,inst_47692,opts);
var inst_47694 = cljs.core.next.call(null,inst_47683);
var inst_47670 = inst_47694;
var inst_47671 = null;
var inst_47672 = (0);
var inst_47673 = (0);
var state_47810__$1 = (function (){var statearr_47876 = state_47810;
(statearr_47876[(7)] = inst_47670);

(statearr_47876[(8)] = inst_47671);

(statearr_47876[(9)] = inst_47672);

(statearr_47876[(10)] = inst_47673);

(statearr_47876[(32)] = inst_47693);

return statearr_47876;
})();
var statearr_47877_47943 = state_47810__$1;
(statearr_47877_47943[(2)] = null);

(statearr_47877_47943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (45))){
var state_47810__$1 = state_47810;
var statearr_47878_47944 = state_47810__$1;
(statearr_47878_47944[(2)] = null);

(statearr_47878_47944[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (26))){
var inst_47723 = (state_47810[(19)]);
var inst_47726 = (state_47810[(23)]);
var inst_47727 = (state_47810[(24)]);
var inst_47731 = (state_47810[(25)]);
var inst_47729 = (state_47810[(26)]);
var inst_47746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47748 = (function (){var all_files = inst_47723;
var res_SINGLEQUOTE_ = inst_47726;
var res = inst_47727;
var files_not_loaded = inst_47729;
var dependencies_that_loaded = inst_47731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47746,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47747){
var map__47879 = p__47747;
var map__47879__$1 = (((((!((map__47879 == null))))?(((((map__47879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47879):map__47879);
var namespace = cljs.core.get.call(null,map__47879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47746,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47749 = cljs.core.map.call(null,inst_47748,inst_47727);
var inst_47750 = cljs.core.pr_str.call(null,inst_47749);
var inst_47751 = figwheel.client.utils.log.call(null,inst_47750);
var inst_47752 = (function (){var all_files = inst_47723;
var res_SINGLEQUOTE_ = inst_47726;
var res = inst_47727;
var files_not_loaded = inst_47729;
var dependencies_that_loaded = inst_47731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47746,inst_47748,inst_47749,inst_47750,inst_47751,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47723,inst_47726,inst_47727,inst_47731,inst_47729,inst_47746,inst_47748,inst_47749,inst_47750,inst_47751,state_val_47811,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47753 = setTimeout(inst_47752,(10));
var state_47810__$1 = (function (){var statearr_47881 = state_47810;
(statearr_47881[(33)] = inst_47746);

(statearr_47881[(34)] = inst_47751);

return statearr_47881;
})();
var statearr_47882_47945 = state_47810__$1;
(statearr_47882_47945[(2)] = inst_47753);

(statearr_47882_47945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (16))){
var state_47810__$1 = state_47810;
var statearr_47883_47946 = state_47810__$1;
(statearr_47883_47946[(2)] = reload_dependents);

(statearr_47883_47946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (38))){
var inst_47763 = (state_47810[(16)]);
var inst_47781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47763);
var state_47810__$1 = state_47810;
var statearr_47884_47947 = state_47810__$1;
(statearr_47884_47947[(2)] = inst_47781);

(statearr_47884_47947[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (30))){
var state_47810__$1 = state_47810;
var statearr_47885_47948 = state_47810__$1;
(statearr_47885_47948[(2)] = null);

(statearr_47885_47948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (10))){
var inst_47683 = (state_47810[(22)]);
var inst_47685 = cljs.core.chunked_seq_QMARK_.call(null,inst_47683);
var state_47810__$1 = state_47810;
if(inst_47685){
var statearr_47886_47949 = state_47810__$1;
(statearr_47886_47949[(1)] = (13));

} else {
var statearr_47887_47950 = state_47810__$1;
(statearr_47887_47950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (18))){
var inst_47717 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
if(cljs.core.truth_(inst_47717)){
var statearr_47888_47951 = state_47810__$1;
(statearr_47888_47951[(1)] = (19));

} else {
var statearr_47889_47952 = state_47810__$1;
(statearr_47889_47952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (42))){
var state_47810__$1 = state_47810;
var statearr_47890_47953 = state_47810__$1;
(statearr_47890_47953[(2)] = null);

(statearr_47890_47953[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (37))){
var inst_47776 = (state_47810[(2)]);
var state_47810__$1 = state_47810;
var statearr_47891_47954 = state_47810__$1;
(statearr_47891_47954[(2)] = inst_47776);

(statearr_47891_47954[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47811 === (8))){
var inst_47670 = (state_47810[(7)]);
var inst_47683 = (state_47810[(22)]);
var inst_47683__$1 = cljs.core.seq.call(null,inst_47670);
var state_47810__$1 = (function (){var statearr_47892 = state_47810;
(statearr_47892[(22)] = inst_47683__$1);

return statearr_47892;
})();
if(inst_47683__$1){
var statearr_47893_47955 = state_47810__$1;
(statearr_47893_47955[(1)] = (10));

} else {
var statearr_47894_47956 = state_47810__$1;
(statearr_47894_47956[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32990__auto__,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0 = (function (){
var statearr_47895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47895[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__);

(statearr_47895[(1)] = (1));

return statearr_47895;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1 = (function (state_47810){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47896){if((e47896 instanceof Object)){
var ex__32994__auto__ = e47896;
var statearr_47897_47957 = state_47810;
(statearr_47897_47957[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47958 = state_47810;
state_47810 = G__47958;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__ = function(state_47810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1.call(this,state_47810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33159__auto__ = (function (){var statearr_47898 = f__33158__auto__.call(null);
(statearr_47898[(6)] = c__33157__auto__);

return statearr_47898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,map__47655,map__47655__$1,opts,before_jsload,on_jsload,reload_dependents,map__47656,map__47656__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33157__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47961,link){
var map__47962 = p__47961;
var map__47962__$1 = (((((!((map__47962 == null))))?(((((map__47962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47962):map__47962);
var file = cljs.core.get.call(null,map__47962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__47962,map__47962__$1,file){
return (function (p1__47959_SHARP_,p2__47960_SHARP_){
if(cljs.core._EQ_.call(null,p1__47959_SHARP_,p2__47960_SHARP_)){
return p1__47959_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__47962,map__47962__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47965){
var map__47966 = p__47965;
var map__47966__$1 = (((((!((map__47966 == null))))?(((((map__47966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47966):map__47966);
var match_length = cljs.core.get.call(null,map__47966__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47966__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47964_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47964_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47968_SHARP_,p2__47969_SHARP_){
return cljs.core.assoc.call(null,p1__47968_SHARP_,cljs.core.get.call(null,p2__47969_SHARP_,key),p2__47969_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_47970 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47970);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47970);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47971,p__47972){
var map__47973 = p__47971;
var map__47973__$1 = (((((!((map__47973 == null))))?(((((map__47973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47973):map__47973);
var on_cssload = cljs.core.get.call(null,map__47973__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47974 = p__47972;
var map__47974__$1 = (((((!((map__47974 == null))))?(((((map__47974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47974):map__47974);
var files_msg = map__47974__$1;
var files = cljs.core.get.call(null,map__47974__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1545871979740
