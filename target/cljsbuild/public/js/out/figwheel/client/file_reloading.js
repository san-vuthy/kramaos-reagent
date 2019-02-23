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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47217_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47217_SHARP_));
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
var seq__47218 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47219 = null;
var count__47220 = (0);
var i__47221 = (0);
while(true){
if((i__47221 < count__47220)){
var n = cljs.core._nth.call(null,chunk__47219,i__47221);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47222 = seq__47218;
var G__47223 = chunk__47219;
var G__47224 = count__47220;
var G__47225 = (i__47221 + (1));
seq__47218 = G__47222;
chunk__47219 = G__47223;
count__47220 = G__47224;
i__47221 = G__47225;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47218);
if(temp__5457__auto__){
var seq__47218__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47218__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47218__$1);
var G__47226 = cljs.core.chunk_rest.call(null,seq__47218__$1);
var G__47227 = c__4461__auto__;
var G__47228 = cljs.core.count.call(null,c__4461__auto__);
var G__47229 = (0);
seq__47218 = G__47226;
chunk__47219 = G__47227;
count__47220 = G__47228;
i__47221 = G__47229;
continue;
} else {
var n = cljs.core.first.call(null,seq__47218__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__47230 = cljs.core.next.call(null,seq__47218__$1);
var G__47231 = null;
var G__47232 = (0);
var G__47233 = (0);
seq__47218 = G__47230;
chunk__47219 = G__47231;
count__47220 = G__47232;
i__47221 = G__47233;
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
return cljs.core.some.call(null,(function (p__47234){
var vec__47235 = p__47234;
var _ = cljs.core.nth.call(null,vec__47235,(0),null);
var v = cljs.core.nth.call(null,vec__47235,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__47238){
var vec__47239 = p__47238;
var k = cljs.core.nth.call(null,vec__47239,(0),null);
var v = cljs.core.nth.call(null,vec__47239,(1),null);
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

var seq__47251_47259 = cljs.core.seq.call(null,deps);
var chunk__47252_47260 = null;
var count__47253_47261 = (0);
var i__47254_47262 = (0);
while(true){
if((i__47254_47262 < count__47253_47261)){
var dep_47263 = cljs.core._nth.call(null,chunk__47252_47260,i__47254_47262);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47263;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47263));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47263,(depth + (1)),state);
} else {
}


var G__47264 = seq__47251_47259;
var G__47265 = chunk__47252_47260;
var G__47266 = count__47253_47261;
var G__47267 = (i__47254_47262 + (1));
seq__47251_47259 = G__47264;
chunk__47252_47260 = G__47265;
count__47253_47261 = G__47266;
i__47254_47262 = G__47267;
continue;
} else {
var temp__5457__auto___47268 = cljs.core.seq.call(null,seq__47251_47259);
if(temp__5457__auto___47268){
var seq__47251_47269__$1 = temp__5457__auto___47268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47251_47269__$1)){
var c__4461__auto___47270 = cljs.core.chunk_first.call(null,seq__47251_47269__$1);
var G__47271 = cljs.core.chunk_rest.call(null,seq__47251_47269__$1);
var G__47272 = c__4461__auto___47270;
var G__47273 = cljs.core.count.call(null,c__4461__auto___47270);
var G__47274 = (0);
seq__47251_47259 = G__47271;
chunk__47252_47260 = G__47272;
count__47253_47261 = G__47273;
i__47254_47262 = G__47274;
continue;
} else {
var dep_47275 = cljs.core.first.call(null,seq__47251_47269__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_47275;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_47275));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_47275,(depth + (1)),state);
} else {
}


var G__47276 = cljs.core.next.call(null,seq__47251_47269__$1);
var G__47277 = null;
var G__47278 = (0);
var G__47279 = (0);
seq__47251_47259 = G__47276;
chunk__47252_47260 = G__47277;
count__47253_47261 = G__47278;
i__47254_47262 = G__47279;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47255){
var vec__47256 = p__47255;
var seq__47257 = cljs.core.seq.call(null,vec__47256);
var first__47258 = cljs.core.first.call(null,seq__47257);
var seq__47257__$1 = cljs.core.next.call(null,seq__47257);
var x = first__47258;
var xs = seq__47257__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47256,seq__47257,first__47258,seq__47257__$1,x,xs,get_deps__$1){
return (function (p1__47242_SHARP_){
return clojure.set.difference.call(null,p1__47242_SHARP_,x);
});})(vec__47256,seq__47257,first__47258,seq__47257__$1,x,xs,get_deps__$1))
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
var seq__47280 = cljs.core.seq.call(null,provides);
var chunk__47281 = null;
var count__47282 = (0);
var i__47283 = (0);
while(true){
if((i__47283 < count__47282)){
var prov = cljs.core._nth.call(null,chunk__47281,i__47283);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47284_47292 = cljs.core.seq.call(null,requires);
var chunk__47285_47293 = null;
var count__47286_47294 = (0);
var i__47287_47295 = (0);
while(true){
if((i__47287_47295 < count__47286_47294)){
var req_47296 = cljs.core._nth.call(null,chunk__47285_47293,i__47287_47295);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47296,prov);


var G__47297 = seq__47284_47292;
var G__47298 = chunk__47285_47293;
var G__47299 = count__47286_47294;
var G__47300 = (i__47287_47295 + (1));
seq__47284_47292 = G__47297;
chunk__47285_47293 = G__47298;
count__47286_47294 = G__47299;
i__47287_47295 = G__47300;
continue;
} else {
var temp__5457__auto___47301 = cljs.core.seq.call(null,seq__47284_47292);
if(temp__5457__auto___47301){
var seq__47284_47302__$1 = temp__5457__auto___47301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47284_47302__$1)){
var c__4461__auto___47303 = cljs.core.chunk_first.call(null,seq__47284_47302__$1);
var G__47304 = cljs.core.chunk_rest.call(null,seq__47284_47302__$1);
var G__47305 = c__4461__auto___47303;
var G__47306 = cljs.core.count.call(null,c__4461__auto___47303);
var G__47307 = (0);
seq__47284_47292 = G__47304;
chunk__47285_47293 = G__47305;
count__47286_47294 = G__47306;
i__47287_47295 = G__47307;
continue;
} else {
var req_47308 = cljs.core.first.call(null,seq__47284_47302__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47308,prov);


var G__47309 = cljs.core.next.call(null,seq__47284_47302__$1);
var G__47310 = null;
var G__47311 = (0);
var G__47312 = (0);
seq__47284_47292 = G__47309;
chunk__47285_47293 = G__47310;
count__47286_47294 = G__47311;
i__47287_47295 = G__47312;
continue;
}
} else {
}
}
break;
}


var G__47313 = seq__47280;
var G__47314 = chunk__47281;
var G__47315 = count__47282;
var G__47316 = (i__47283 + (1));
seq__47280 = G__47313;
chunk__47281 = G__47314;
count__47282 = G__47315;
i__47283 = G__47316;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__47280);
if(temp__5457__auto__){
var seq__47280__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47280__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__47280__$1);
var G__47317 = cljs.core.chunk_rest.call(null,seq__47280__$1);
var G__47318 = c__4461__auto__;
var G__47319 = cljs.core.count.call(null,c__4461__auto__);
var G__47320 = (0);
seq__47280 = G__47317;
chunk__47281 = G__47318;
count__47282 = G__47319;
i__47283 = G__47320;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47280__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47288_47321 = cljs.core.seq.call(null,requires);
var chunk__47289_47322 = null;
var count__47290_47323 = (0);
var i__47291_47324 = (0);
while(true){
if((i__47291_47324 < count__47290_47323)){
var req_47325 = cljs.core._nth.call(null,chunk__47289_47322,i__47291_47324);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47325,prov);


var G__47326 = seq__47288_47321;
var G__47327 = chunk__47289_47322;
var G__47328 = count__47290_47323;
var G__47329 = (i__47291_47324 + (1));
seq__47288_47321 = G__47326;
chunk__47289_47322 = G__47327;
count__47290_47323 = G__47328;
i__47291_47324 = G__47329;
continue;
} else {
var temp__5457__auto___47330__$1 = cljs.core.seq.call(null,seq__47288_47321);
if(temp__5457__auto___47330__$1){
var seq__47288_47331__$1 = temp__5457__auto___47330__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47288_47331__$1)){
var c__4461__auto___47332 = cljs.core.chunk_first.call(null,seq__47288_47331__$1);
var G__47333 = cljs.core.chunk_rest.call(null,seq__47288_47331__$1);
var G__47334 = c__4461__auto___47332;
var G__47335 = cljs.core.count.call(null,c__4461__auto___47332);
var G__47336 = (0);
seq__47288_47321 = G__47333;
chunk__47289_47322 = G__47334;
count__47290_47323 = G__47335;
i__47291_47324 = G__47336;
continue;
} else {
var req_47337 = cljs.core.first.call(null,seq__47288_47331__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47337,prov);


var G__47338 = cljs.core.next.call(null,seq__47288_47331__$1);
var G__47339 = null;
var G__47340 = (0);
var G__47341 = (0);
seq__47288_47321 = G__47338;
chunk__47289_47322 = G__47339;
count__47290_47323 = G__47340;
i__47291_47324 = G__47341;
continue;
}
} else {
}
}
break;
}


var G__47342 = cljs.core.next.call(null,seq__47280__$1);
var G__47343 = null;
var G__47344 = (0);
var G__47345 = (0);
seq__47280 = G__47342;
chunk__47281 = G__47343;
count__47282 = G__47344;
i__47283 = G__47345;
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
var seq__47346_47350 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47347_47351 = null;
var count__47348_47352 = (0);
var i__47349_47353 = (0);
while(true){
if((i__47349_47353 < count__47348_47352)){
var ns_47354 = cljs.core._nth.call(null,chunk__47347_47351,i__47349_47353);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47354);


var G__47355 = seq__47346_47350;
var G__47356 = chunk__47347_47351;
var G__47357 = count__47348_47352;
var G__47358 = (i__47349_47353 + (1));
seq__47346_47350 = G__47355;
chunk__47347_47351 = G__47356;
count__47348_47352 = G__47357;
i__47349_47353 = G__47358;
continue;
} else {
var temp__5457__auto___47359 = cljs.core.seq.call(null,seq__47346_47350);
if(temp__5457__auto___47359){
var seq__47346_47360__$1 = temp__5457__auto___47359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47346_47360__$1)){
var c__4461__auto___47361 = cljs.core.chunk_first.call(null,seq__47346_47360__$1);
var G__47362 = cljs.core.chunk_rest.call(null,seq__47346_47360__$1);
var G__47363 = c__4461__auto___47361;
var G__47364 = cljs.core.count.call(null,c__4461__auto___47361);
var G__47365 = (0);
seq__47346_47350 = G__47362;
chunk__47347_47351 = G__47363;
count__47348_47352 = G__47364;
i__47349_47353 = G__47365;
continue;
} else {
var ns_47366 = cljs.core.first.call(null,seq__47346_47360__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47366);


var G__47367 = cljs.core.next.call(null,seq__47346_47360__$1);
var G__47368 = null;
var G__47369 = (0);
var G__47370 = (0);
seq__47346_47350 = G__47367;
chunk__47347_47351 = G__47368;
count__47348_47352 = G__47369;
i__47349_47353 = G__47370;
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
var G__47371__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47371 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47372__i = 0, G__47372__a = new Array(arguments.length -  0);
while (G__47372__i < G__47372__a.length) {G__47372__a[G__47372__i] = arguments[G__47372__i + 0]; ++G__47372__i;}
  args = new cljs.core.IndexedSeq(G__47372__a,0,null);
} 
return G__47371__delegate.call(this,args);};
G__47371.cljs$lang$maxFixedArity = 0;
G__47371.cljs$lang$applyTo = (function (arglist__47373){
var args = cljs.core.seq(arglist__47373);
return G__47371__delegate(args);
});
G__47371.cljs$core$IFn$_invoke$arity$variadic = G__47371__delegate;
return G__47371;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__47374_SHARP_,p2__47375_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47374_SHARP_)),p2__47375_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__47376_SHARP_,p2__47377_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__47376_SHARP_),p2__47377_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__47378 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__47378.addCallback(((function (G__47378){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__47378))
);

G__47378.addErrback(((function (G__47378){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__47378))
);

return G__47378;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47379){if((e47379 instanceof Error)){
var e = e47379;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47379;

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
}catch (e47380){if((e47380 instanceof Error)){
var e = e47380;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47380;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47381 = cljs.core._EQ_;
var expr__47382 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47381.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47382))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__47381.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47382))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__47381.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47382))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__47381,expr__47382){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47381,expr__47382))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47384,callback){
var map__47385 = p__47384;
var map__47385__$1 = (((((!((map__47385 == null))))?(((((map__47385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47385.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47385):map__47385);
var file_msg = map__47385__$1;
var request_url = cljs.core.get.call(null,map__47385__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__47385,map__47385__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47385,map__47385__$1,file_msg,request_url))
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
return (function (state_47423){
var state_val_47424 = (state_47423[(1)]);
if((state_val_47424 === (7))){
var inst_47419 = (state_47423[(2)]);
var state_47423__$1 = state_47423;
var statearr_47425_47451 = state_47423__$1;
(statearr_47425_47451[(2)] = inst_47419);

(statearr_47425_47451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (1))){
var state_47423__$1 = state_47423;
var statearr_47426_47452 = state_47423__$1;
(statearr_47426_47452[(2)] = null);

(statearr_47426_47452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (4))){
var inst_47389 = (state_47423[(7)]);
var inst_47389__$1 = (state_47423[(2)]);
var state_47423__$1 = (function (){var statearr_47427 = state_47423;
(statearr_47427[(7)] = inst_47389__$1);

return statearr_47427;
})();
if(cljs.core.truth_(inst_47389__$1)){
var statearr_47428_47453 = state_47423__$1;
(statearr_47428_47453[(1)] = (5));

} else {
var statearr_47429_47454 = state_47423__$1;
(statearr_47429_47454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (15))){
var inst_47404 = (state_47423[(8)]);
var inst_47402 = (state_47423[(9)]);
var inst_47406 = inst_47404.call(null,inst_47402);
var state_47423__$1 = state_47423;
var statearr_47430_47455 = state_47423__$1;
(statearr_47430_47455[(2)] = inst_47406);

(statearr_47430_47455[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (13))){
var inst_47413 = (state_47423[(2)]);
var state_47423__$1 = state_47423;
var statearr_47431_47456 = state_47423__$1;
(statearr_47431_47456[(2)] = inst_47413);

(statearr_47431_47456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (6))){
var state_47423__$1 = state_47423;
var statearr_47432_47457 = state_47423__$1;
(statearr_47432_47457[(2)] = null);

(statearr_47432_47457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (17))){
var inst_47410 = (state_47423[(2)]);
var state_47423__$1 = state_47423;
var statearr_47433_47458 = state_47423__$1;
(statearr_47433_47458[(2)] = inst_47410);

(statearr_47433_47458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (3))){
var inst_47421 = (state_47423[(2)]);
var state_47423__$1 = state_47423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47423__$1,inst_47421);
} else {
if((state_val_47424 === (12))){
var state_47423__$1 = state_47423;
var statearr_47434_47459 = state_47423__$1;
(statearr_47434_47459[(2)] = null);

(statearr_47434_47459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (2))){
var state_47423__$1 = state_47423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47423__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47424 === (11))){
var inst_47394 = (state_47423[(10)]);
var inst_47400 = figwheel.client.file_reloading.blocking_load.call(null,inst_47394);
var state_47423__$1 = state_47423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47423__$1,(14),inst_47400);
} else {
if((state_val_47424 === (9))){
var inst_47394 = (state_47423[(10)]);
var state_47423__$1 = state_47423;
if(cljs.core.truth_(inst_47394)){
var statearr_47435_47460 = state_47423__$1;
(statearr_47435_47460[(1)] = (11));

} else {
var statearr_47436_47461 = state_47423__$1;
(statearr_47436_47461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (5))){
var inst_47395 = (state_47423[(11)]);
var inst_47389 = (state_47423[(7)]);
var inst_47394 = cljs.core.nth.call(null,inst_47389,(0),null);
var inst_47395__$1 = cljs.core.nth.call(null,inst_47389,(1),null);
var state_47423__$1 = (function (){var statearr_47437 = state_47423;
(statearr_47437[(11)] = inst_47395__$1);

(statearr_47437[(10)] = inst_47394);

return statearr_47437;
})();
if(cljs.core.truth_(inst_47395__$1)){
var statearr_47438_47462 = state_47423__$1;
(statearr_47438_47462[(1)] = (8));

} else {
var statearr_47439_47463 = state_47423__$1;
(statearr_47439_47463[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (14))){
var inst_47394 = (state_47423[(10)]);
var inst_47404 = (state_47423[(8)]);
var inst_47402 = (state_47423[(2)]);
var inst_47403 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47404__$1 = cljs.core.get.call(null,inst_47403,inst_47394);
var state_47423__$1 = (function (){var statearr_47440 = state_47423;
(statearr_47440[(8)] = inst_47404__$1);

(statearr_47440[(9)] = inst_47402);

return statearr_47440;
})();
if(cljs.core.truth_(inst_47404__$1)){
var statearr_47441_47464 = state_47423__$1;
(statearr_47441_47464[(1)] = (15));

} else {
var statearr_47442_47465 = state_47423__$1;
(statearr_47442_47465[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (16))){
var inst_47402 = (state_47423[(9)]);
var inst_47408 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47402);
var state_47423__$1 = state_47423;
var statearr_47443_47466 = state_47423__$1;
(statearr_47443_47466[(2)] = inst_47408);

(statearr_47443_47466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (10))){
var inst_47415 = (state_47423[(2)]);
var state_47423__$1 = (function (){var statearr_47444 = state_47423;
(statearr_47444[(12)] = inst_47415);

return statearr_47444;
})();
var statearr_47445_47467 = state_47423__$1;
(statearr_47445_47467[(2)] = null);

(statearr_47445_47467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47424 === (8))){
var inst_47395 = (state_47423[(11)]);
var inst_47397 = eval(inst_47395);
var state_47423__$1 = state_47423;
var statearr_47446_47468 = state_47423__$1;
(statearr_47446_47468[(2)] = inst_47397);

(statearr_47446_47468[(1)] = (10));


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
var statearr_47447 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47447[(0)] = figwheel$client$file_reloading$state_machine__32991__auto__);

(statearr_47447[(1)] = (1));

return statearr_47447;
});
var figwheel$client$file_reloading$state_machine__32991__auto____1 = (function (state_47423){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47448){if((e47448 instanceof Object)){
var ex__32994__auto__ = e47448;
var statearr_47449_47469 = state_47423;
(statearr_47449_47469[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47470 = state_47423;
state_47423 = G__47470;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32991__auto__ = function(state_47423){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32991__auto____1.call(this,state_47423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32991__auto____0;
figwheel$client$file_reloading$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32991__auto____1;
return figwheel$client$file_reloading$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_47450 = f__33158__auto__.call(null);
(statearr_47450[(6)] = c__33157__auto__);

return statearr_47450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__47472 = arguments.length;
switch (G__47472) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47474,callback){
var map__47475 = p__47474;
var map__47475__$1 = (((((!((map__47475 == null))))?(((((map__47475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47475):map__47475);
var file_msg = map__47475__$1;
var namespace = cljs.core.get.call(null,map__47475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47475,map__47475__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47475,map__47475__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47477){
var map__47478 = p__47477;
var map__47478__$1 = (((((!((map__47478 == null))))?(((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47478):map__47478);
var file_msg = map__47478__$1;
var namespace = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47480){
var map__47481 = p__47480;
var map__47481__$1 = (((((!((map__47481 == null))))?(((((map__47481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47481):map__47481);
var file_msg = map__47481__$1;
var namespace = cljs.core.get.call(null,map__47481__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47483,callback){
var map__47484 = p__47483;
var map__47484__$1 = (((((!((map__47484 == null))))?(((((map__47484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47484):map__47484);
var file_msg = map__47484__$1;
var request_url = cljs.core.get.call(null,map__47484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47484__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33157__auto___47534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___47534,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___47534,out){
return (function (state_47519){
var state_val_47520 = (state_47519[(1)]);
if((state_val_47520 === (1))){
var inst_47493 = cljs.core.seq.call(null,files);
var inst_47494 = cljs.core.first.call(null,inst_47493);
var inst_47495 = cljs.core.next.call(null,inst_47493);
var inst_47496 = files;
var state_47519__$1 = (function (){var statearr_47521 = state_47519;
(statearr_47521[(7)] = inst_47496);

(statearr_47521[(8)] = inst_47495);

(statearr_47521[(9)] = inst_47494);

return statearr_47521;
})();
var statearr_47522_47535 = state_47519__$1;
(statearr_47522_47535[(2)] = null);

(statearr_47522_47535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47520 === (2))){
var inst_47496 = (state_47519[(7)]);
var inst_47502 = (state_47519[(10)]);
var inst_47501 = cljs.core.seq.call(null,inst_47496);
var inst_47502__$1 = cljs.core.first.call(null,inst_47501);
var inst_47503 = cljs.core.next.call(null,inst_47501);
var inst_47504 = (inst_47502__$1 == null);
var inst_47505 = cljs.core.not.call(null,inst_47504);
var state_47519__$1 = (function (){var statearr_47523 = state_47519;
(statearr_47523[(10)] = inst_47502__$1);

(statearr_47523[(11)] = inst_47503);

return statearr_47523;
})();
if(inst_47505){
var statearr_47524_47536 = state_47519__$1;
(statearr_47524_47536[(1)] = (4));

} else {
var statearr_47525_47537 = state_47519__$1;
(statearr_47525_47537[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47520 === (3))){
var inst_47517 = (state_47519[(2)]);
var state_47519__$1 = state_47519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47519__$1,inst_47517);
} else {
if((state_val_47520 === (4))){
var inst_47502 = (state_47519[(10)]);
var inst_47507 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47502);
var state_47519__$1 = state_47519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47519__$1,(7),inst_47507);
} else {
if((state_val_47520 === (5))){
var inst_47513 = cljs.core.async.close_BANG_.call(null,out);
var state_47519__$1 = state_47519;
var statearr_47526_47538 = state_47519__$1;
(statearr_47526_47538[(2)] = inst_47513);

(statearr_47526_47538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47520 === (6))){
var inst_47515 = (state_47519[(2)]);
var state_47519__$1 = state_47519;
var statearr_47527_47539 = state_47519__$1;
(statearr_47527_47539[(2)] = inst_47515);

(statearr_47527_47539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47520 === (7))){
var inst_47503 = (state_47519[(11)]);
var inst_47509 = (state_47519[(2)]);
var inst_47510 = cljs.core.async.put_BANG_.call(null,out,inst_47509);
var inst_47496 = inst_47503;
var state_47519__$1 = (function (){var statearr_47528 = state_47519;
(statearr_47528[(7)] = inst_47496);

(statearr_47528[(12)] = inst_47510);

return statearr_47528;
})();
var statearr_47529_47540 = state_47519__$1;
(statearr_47529_47540[(2)] = null);

(statearr_47529_47540[(1)] = (2));


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
});})(c__33157__auto___47534,out))
;
return ((function (switch__32990__auto__,c__33157__auto___47534,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0 = (function (){
var statearr_47530 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47530[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__);

(statearr_47530[(1)] = (1));

return statearr_47530;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1 = (function (state_47519){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47531){if((e47531 instanceof Object)){
var ex__32994__auto__ = e47531;
var statearr_47532_47541 = state_47519;
(statearr_47532_47541[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47542 = state_47519;
state_47519 = G__47542;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__ = function(state_47519){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1.call(this,state_47519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___47534,out))
})();
var state__33159__auto__ = (function (){var statearr_47533 = f__33158__auto__.call(null);
(statearr_47533[(6)] = c__33157__auto___47534);

return statearr_47533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___47534,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47543,opts){
var map__47544 = p__47543;
var map__47544__$1 = (((((!((map__47544 == null))))?(((((map__47544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47544):map__47544);
var eval_body = cljs.core.get.call(null,map__47544__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e47546){var e = e47546;
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
return (function (p1__47547_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47547_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47548){
var vec__47549 = p__47548;
var k = cljs.core.nth.call(null,vec__47549,(0),null);
var v = cljs.core.nth.call(null,vec__47549,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47552){
var vec__47553 = p__47552;
var k = cljs.core.nth.call(null,vec__47553,(0),null);
var v = cljs.core.nth.call(null,vec__47553,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47559,p__47560){
var map__47561 = p__47559;
var map__47561__$1 = (((((!((map__47561 == null))))?(((((map__47561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47561):map__47561);
var opts = map__47561__$1;
var before_jsload = cljs.core.get.call(null,map__47561__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47561__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47561__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47562 = p__47560;
var map__47562__$1 = (((((!((map__47562 == null))))?(((((map__47562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47562):map__47562);
var msg = map__47562__$1;
var files = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47562__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47716){
var state_val_47717 = (state_47716[(1)]);
if((state_val_47717 === (7))){
var inst_47577 = (state_47716[(7)]);
var inst_47576 = (state_47716[(8)]);
var inst_47579 = (state_47716[(9)]);
var inst_47578 = (state_47716[(10)]);
var inst_47584 = cljs.core._nth.call(null,inst_47577,inst_47579);
var inst_47585 = figwheel.client.file_reloading.eval_body.call(null,inst_47584,opts);
var inst_47586 = (inst_47579 + (1));
var tmp47718 = inst_47577;
var tmp47719 = inst_47576;
var tmp47720 = inst_47578;
var inst_47576__$1 = tmp47719;
var inst_47577__$1 = tmp47718;
var inst_47578__$1 = tmp47720;
var inst_47579__$1 = inst_47586;
var state_47716__$1 = (function (){var statearr_47721 = state_47716;
(statearr_47721[(11)] = inst_47585);

(statearr_47721[(7)] = inst_47577__$1);

(statearr_47721[(8)] = inst_47576__$1);

(statearr_47721[(9)] = inst_47579__$1);

(statearr_47721[(10)] = inst_47578__$1);

return statearr_47721;
})();
var statearr_47722_47805 = state_47716__$1;
(statearr_47722_47805[(2)] = null);

(statearr_47722_47805[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (20))){
var inst_47619 = (state_47716[(12)]);
var inst_47627 = figwheel.client.file_reloading.sort_files.call(null,inst_47619);
var state_47716__$1 = state_47716;
var statearr_47723_47806 = state_47716__$1;
(statearr_47723_47806[(2)] = inst_47627);

(statearr_47723_47806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (27))){
var state_47716__$1 = state_47716;
var statearr_47724_47807 = state_47716__$1;
(statearr_47724_47807[(2)] = null);

(statearr_47724_47807[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (1))){
var inst_47568 = (state_47716[(13)]);
var inst_47565 = before_jsload.call(null,files);
var inst_47566 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47567 = (function (){return ((function (inst_47568,inst_47565,inst_47566,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47556_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47556_SHARP_);
});
;})(inst_47568,inst_47565,inst_47566,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47568__$1 = cljs.core.filter.call(null,inst_47567,files);
var inst_47569 = cljs.core.not_empty.call(null,inst_47568__$1);
var state_47716__$1 = (function (){var statearr_47725 = state_47716;
(statearr_47725[(14)] = inst_47565);

(statearr_47725[(13)] = inst_47568__$1);

(statearr_47725[(15)] = inst_47566);

return statearr_47725;
})();
if(cljs.core.truth_(inst_47569)){
var statearr_47726_47808 = state_47716__$1;
(statearr_47726_47808[(1)] = (2));

} else {
var statearr_47727_47809 = state_47716__$1;
(statearr_47727_47809[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (24))){
var state_47716__$1 = state_47716;
var statearr_47728_47810 = state_47716__$1;
(statearr_47728_47810[(2)] = null);

(statearr_47728_47810[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (39))){
var inst_47669 = (state_47716[(16)]);
var state_47716__$1 = state_47716;
var statearr_47729_47811 = state_47716__$1;
(statearr_47729_47811[(2)] = inst_47669);

(statearr_47729_47811[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (46))){
var inst_47711 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47730_47812 = state_47716__$1;
(statearr_47730_47812[(2)] = inst_47711);

(statearr_47730_47812[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (4))){
var inst_47613 = (state_47716[(2)]);
var inst_47614 = cljs.core.List.EMPTY;
var inst_47615 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47614);
var inst_47616 = (function (){return ((function (inst_47613,inst_47614,inst_47615,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47557_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47557_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47557_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47557_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_47613,inst_47614,inst_47615,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47617 = cljs.core.filter.call(null,inst_47616,files);
var inst_47618 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47619 = cljs.core.concat.call(null,inst_47617,inst_47618);
var state_47716__$1 = (function (){var statearr_47731 = state_47716;
(statearr_47731[(17)] = inst_47613);

(statearr_47731[(12)] = inst_47619);

(statearr_47731[(18)] = inst_47615);

return statearr_47731;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47732_47813 = state_47716__$1;
(statearr_47732_47813[(1)] = (16));

} else {
var statearr_47733_47814 = state_47716__$1;
(statearr_47733_47814[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (15))){
var inst_47603 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47734_47815 = state_47716__$1;
(statearr_47734_47815[(2)] = inst_47603);

(statearr_47734_47815[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (21))){
var inst_47629 = (state_47716[(19)]);
var inst_47629__$1 = (state_47716[(2)]);
var inst_47630 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47629__$1);
var state_47716__$1 = (function (){var statearr_47735 = state_47716;
(statearr_47735[(19)] = inst_47629__$1);

return statearr_47735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47716__$1,(22),inst_47630);
} else {
if((state_val_47717 === (31))){
var inst_47714 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47716__$1,inst_47714);
} else {
if((state_val_47717 === (32))){
var inst_47669 = (state_47716[(16)]);
var inst_47674 = inst_47669.cljs$lang$protocol_mask$partition0$;
var inst_47675 = (inst_47674 & (64));
var inst_47676 = inst_47669.cljs$core$ISeq$;
var inst_47677 = (cljs.core.PROTOCOL_SENTINEL === inst_47676);
var inst_47678 = ((inst_47675) || (inst_47677));
var state_47716__$1 = state_47716;
if(cljs.core.truth_(inst_47678)){
var statearr_47736_47816 = state_47716__$1;
(statearr_47736_47816[(1)] = (35));

} else {
var statearr_47737_47817 = state_47716__$1;
(statearr_47737_47817[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (40))){
var inst_47691 = (state_47716[(20)]);
var inst_47690 = (state_47716[(2)]);
var inst_47691__$1 = cljs.core.get.call(null,inst_47690,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47692 = cljs.core.get.call(null,inst_47690,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47693 = cljs.core.not_empty.call(null,inst_47691__$1);
var state_47716__$1 = (function (){var statearr_47738 = state_47716;
(statearr_47738[(21)] = inst_47692);

(statearr_47738[(20)] = inst_47691__$1);

return statearr_47738;
})();
if(cljs.core.truth_(inst_47693)){
var statearr_47739_47818 = state_47716__$1;
(statearr_47739_47818[(1)] = (41));

} else {
var statearr_47740_47819 = state_47716__$1;
(statearr_47740_47819[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (33))){
var state_47716__$1 = state_47716;
var statearr_47741_47820 = state_47716__$1;
(statearr_47741_47820[(2)] = false);

(statearr_47741_47820[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (13))){
var inst_47589 = (state_47716[(22)]);
var inst_47593 = cljs.core.chunk_first.call(null,inst_47589);
var inst_47594 = cljs.core.chunk_rest.call(null,inst_47589);
var inst_47595 = cljs.core.count.call(null,inst_47593);
var inst_47576 = inst_47594;
var inst_47577 = inst_47593;
var inst_47578 = inst_47595;
var inst_47579 = (0);
var state_47716__$1 = (function (){var statearr_47742 = state_47716;
(statearr_47742[(7)] = inst_47577);

(statearr_47742[(8)] = inst_47576);

(statearr_47742[(9)] = inst_47579);

(statearr_47742[(10)] = inst_47578);

return statearr_47742;
})();
var statearr_47743_47821 = state_47716__$1;
(statearr_47743_47821[(2)] = null);

(statearr_47743_47821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (22))){
var inst_47629 = (state_47716[(19)]);
var inst_47637 = (state_47716[(23)]);
var inst_47633 = (state_47716[(24)]);
var inst_47632 = (state_47716[(25)]);
var inst_47632__$1 = (state_47716[(2)]);
var inst_47633__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47632__$1);
var inst_47634 = (function (){var all_files = inst_47629;
var res_SINGLEQUOTE_ = inst_47632__$1;
var res = inst_47633__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47629,inst_47637,inst_47633,inst_47632,inst_47632__$1,inst_47633__$1,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47558_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47558_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47629,inst_47637,inst_47633,inst_47632,inst_47632__$1,inst_47633__$1,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47635 = cljs.core.filter.call(null,inst_47634,inst_47632__$1);
var inst_47636 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47637__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47636);
var inst_47638 = cljs.core.not_empty.call(null,inst_47637__$1);
var state_47716__$1 = (function (){var statearr_47744 = state_47716;
(statearr_47744[(23)] = inst_47637__$1);

(statearr_47744[(26)] = inst_47635);

(statearr_47744[(24)] = inst_47633__$1);

(statearr_47744[(25)] = inst_47632__$1);

return statearr_47744;
})();
if(cljs.core.truth_(inst_47638)){
var statearr_47745_47822 = state_47716__$1;
(statearr_47745_47822[(1)] = (23));

} else {
var statearr_47746_47823 = state_47716__$1;
(statearr_47746_47823[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (36))){
var state_47716__$1 = state_47716;
var statearr_47747_47824 = state_47716__$1;
(statearr_47747_47824[(2)] = false);

(statearr_47747_47824[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (41))){
var inst_47691 = (state_47716[(20)]);
var inst_47695 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47696 = cljs.core.map.call(null,inst_47695,inst_47691);
var inst_47697 = cljs.core.pr_str.call(null,inst_47696);
var inst_47698 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47697)].join('');
var inst_47699 = figwheel.client.utils.log.call(null,inst_47698);
var state_47716__$1 = state_47716;
var statearr_47748_47825 = state_47716__$1;
(statearr_47748_47825[(2)] = inst_47699);

(statearr_47748_47825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (43))){
var inst_47692 = (state_47716[(21)]);
var inst_47702 = (state_47716[(2)]);
var inst_47703 = cljs.core.not_empty.call(null,inst_47692);
var state_47716__$1 = (function (){var statearr_47749 = state_47716;
(statearr_47749[(27)] = inst_47702);

return statearr_47749;
})();
if(cljs.core.truth_(inst_47703)){
var statearr_47750_47826 = state_47716__$1;
(statearr_47750_47826[(1)] = (44));

} else {
var statearr_47751_47827 = state_47716__$1;
(statearr_47751_47827[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (29))){
var inst_47629 = (state_47716[(19)]);
var inst_47637 = (state_47716[(23)]);
var inst_47635 = (state_47716[(26)]);
var inst_47633 = (state_47716[(24)]);
var inst_47669 = (state_47716[(16)]);
var inst_47632 = (state_47716[(25)]);
var inst_47665 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47668 = (function (){var all_files = inst_47629;
var res_SINGLEQUOTE_ = inst_47632;
var res = inst_47633;
var files_not_loaded = inst_47635;
var dependencies_that_loaded = inst_47637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47669,inst_47632,inst_47665,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47667){
var map__47752 = p__47667;
var map__47752__$1 = (((((!((map__47752 == null))))?(((((map__47752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47752):map__47752);
var namespace = cljs.core.get.call(null,map__47752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47669,inst_47632,inst_47665,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47669__$1 = cljs.core.group_by.call(null,inst_47668,inst_47635);
var inst_47671 = (inst_47669__$1 == null);
var inst_47672 = cljs.core.not.call(null,inst_47671);
var state_47716__$1 = (function (){var statearr_47754 = state_47716;
(statearr_47754[(28)] = inst_47665);

(statearr_47754[(16)] = inst_47669__$1);

return statearr_47754;
})();
if(inst_47672){
var statearr_47755_47828 = state_47716__$1;
(statearr_47755_47828[(1)] = (32));

} else {
var statearr_47756_47829 = state_47716__$1;
(statearr_47756_47829[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (44))){
var inst_47692 = (state_47716[(21)]);
var inst_47705 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47692);
var inst_47706 = cljs.core.pr_str.call(null,inst_47705);
var inst_47707 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47706)].join('');
var inst_47708 = figwheel.client.utils.log.call(null,inst_47707);
var state_47716__$1 = state_47716;
var statearr_47757_47830 = state_47716__$1;
(statearr_47757_47830[(2)] = inst_47708);

(statearr_47757_47830[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (6))){
var inst_47610 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47758_47831 = state_47716__$1;
(statearr_47758_47831[(2)] = inst_47610);

(statearr_47758_47831[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (28))){
var inst_47635 = (state_47716[(26)]);
var inst_47662 = (state_47716[(2)]);
var inst_47663 = cljs.core.not_empty.call(null,inst_47635);
var state_47716__$1 = (function (){var statearr_47759 = state_47716;
(statearr_47759[(29)] = inst_47662);

return statearr_47759;
})();
if(cljs.core.truth_(inst_47663)){
var statearr_47760_47832 = state_47716__$1;
(statearr_47760_47832[(1)] = (29));

} else {
var statearr_47761_47833 = state_47716__$1;
(statearr_47761_47833[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (25))){
var inst_47633 = (state_47716[(24)]);
var inst_47649 = (state_47716[(2)]);
var inst_47650 = cljs.core.not_empty.call(null,inst_47633);
var state_47716__$1 = (function (){var statearr_47762 = state_47716;
(statearr_47762[(30)] = inst_47649);

return statearr_47762;
})();
if(cljs.core.truth_(inst_47650)){
var statearr_47763_47834 = state_47716__$1;
(statearr_47763_47834[(1)] = (26));

} else {
var statearr_47764_47835 = state_47716__$1;
(statearr_47764_47835[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (34))){
var inst_47685 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
if(cljs.core.truth_(inst_47685)){
var statearr_47765_47836 = state_47716__$1;
(statearr_47765_47836[(1)] = (38));

} else {
var statearr_47766_47837 = state_47716__$1;
(statearr_47766_47837[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (17))){
var state_47716__$1 = state_47716;
var statearr_47767_47838 = state_47716__$1;
(statearr_47767_47838[(2)] = recompile_dependents);

(statearr_47767_47838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (3))){
var state_47716__$1 = state_47716;
var statearr_47768_47839 = state_47716__$1;
(statearr_47768_47839[(2)] = null);

(statearr_47768_47839[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (12))){
var inst_47606 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47769_47840 = state_47716__$1;
(statearr_47769_47840[(2)] = inst_47606);

(statearr_47769_47840[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (2))){
var inst_47568 = (state_47716[(13)]);
var inst_47575 = cljs.core.seq.call(null,inst_47568);
var inst_47576 = inst_47575;
var inst_47577 = null;
var inst_47578 = (0);
var inst_47579 = (0);
var state_47716__$1 = (function (){var statearr_47770 = state_47716;
(statearr_47770[(7)] = inst_47577);

(statearr_47770[(8)] = inst_47576);

(statearr_47770[(9)] = inst_47579);

(statearr_47770[(10)] = inst_47578);

return statearr_47770;
})();
var statearr_47771_47841 = state_47716__$1;
(statearr_47771_47841[(2)] = null);

(statearr_47771_47841[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (23))){
var inst_47629 = (state_47716[(19)]);
var inst_47637 = (state_47716[(23)]);
var inst_47635 = (state_47716[(26)]);
var inst_47633 = (state_47716[(24)]);
var inst_47632 = (state_47716[(25)]);
var inst_47640 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47642 = (function (){var all_files = inst_47629;
var res_SINGLEQUOTE_ = inst_47632;
var res = inst_47633;
var files_not_loaded = inst_47635;
var dependencies_that_loaded = inst_47637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47640,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47641){
var map__47772 = p__47641;
var map__47772__$1 = (((((!((map__47772 == null))))?(((((map__47772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47772):map__47772);
var request_url = cljs.core.get.call(null,map__47772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47640,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47643 = cljs.core.reverse.call(null,inst_47637);
var inst_47644 = cljs.core.map.call(null,inst_47642,inst_47643);
var inst_47645 = cljs.core.pr_str.call(null,inst_47644);
var inst_47646 = figwheel.client.utils.log.call(null,inst_47645);
var state_47716__$1 = (function (){var statearr_47774 = state_47716;
(statearr_47774[(31)] = inst_47640);

return statearr_47774;
})();
var statearr_47775_47842 = state_47716__$1;
(statearr_47775_47842[(2)] = inst_47646);

(statearr_47775_47842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (35))){
var state_47716__$1 = state_47716;
var statearr_47776_47843 = state_47716__$1;
(statearr_47776_47843[(2)] = true);

(statearr_47776_47843[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (19))){
var inst_47619 = (state_47716[(12)]);
var inst_47625 = figwheel.client.file_reloading.expand_files.call(null,inst_47619);
var state_47716__$1 = state_47716;
var statearr_47777_47844 = state_47716__$1;
(statearr_47777_47844[(2)] = inst_47625);

(statearr_47777_47844[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (11))){
var state_47716__$1 = state_47716;
var statearr_47778_47845 = state_47716__$1;
(statearr_47778_47845[(2)] = null);

(statearr_47778_47845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (9))){
var inst_47608 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47779_47846 = state_47716__$1;
(statearr_47779_47846[(2)] = inst_47608);

(statearr_47779_47846[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (5))){
var inst_47579 = (state_47716[(9)]);
var inst_47578 = (state_47716[(10)]);
var inst_47581 = (inst_47579 < inst_47578);
var inst_47582 = inst_47581;
var state_47716__$1 = state_47716;
if(cljs.core.truth_(inst_47582)){
var statearr_47780_47847 = state_47716__$1;
(statearr_47780_47847[(1)] = (7));

} else {
var statearr_47781_47848 = state_47716__$1;
(statearr_47781_47848[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (14))){
var inst_47589 = (state_47716[(22)]);
var inst_47598 = cljs.core.first.call(null,inst_47589);
var inst_47599 = figwheel.client.file_reloading.eval_body.call(null,inst_47598,opts);
var inst_47600 = cljs.core.next.call(null,inst_47589);
var inst_47576 = inst_47600;
var inst_47577 = null;
var inst_47578 = (0);
var inst_47579 = (0);
var state_47716__$1 = (function (){var statearr_47782 = state_47716;
(statearr_47782[(7)] = inst_47577);

(statearr_47782[(8)] = inst_47576);

(statearr_47782[(9)] = inst_47579);

(statearr_47782[(32)] = inst_47599);

(statearr_47782[(10)] = inst_47578);

return statearr_47782;
})();
var statearr_47783_47849 = state_47716__$1;
(statearr_47783_47849[(2)] = null);

(statearr_47783_47849[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (45))){
var state_47716__$1 = state_47716;
var statearr_47784_47850 = state_47716__$1;
(statearr_47784_47850[(2)] = null);

(statearr_47784_47850[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (26))){
var inst_47629 = (state_47716[(19)]);
var inst_47637 = (state_47716[(23)]);
var inst_47635 = (state_47716[(26)]);
var inst_47633 = (state_47716[(24)]);
var inst_47632 = (state_47716[(25)]);
var inst_47652 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47654 = (function (){var all_files = inst_47629;
var res_SINGLEQUOTE_ = inst_47632;
var res = inst_47633;
var files_not_loaded = inst_47635;
var dependencies_that_loaded = inst_47637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47652,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47653){
var map__47785 = p__47653;
var map__47785__$1 = (((((!((map__47785 == null))))?(((((map__47785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47785):map__47785);
var namespace = cljs.core.get.call(null,map__47785__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47785__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47652,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47655 = cljs.core.map.call(null,inst_47654,inst_47633);
var inst_47656 = cljs.core.pr_str.call(null,inst_47655);
var inst_47657 = figwheel.client.utils.log.call(null,inst_47656);
var inst_47658 = (function (){var all_files = inst_47629;
var res_SINGLEQUOTE_ = inst_47632;
var res = inst_47633;
var files_not_loaded = inst_47635;
var dependencies_that_loaded = inst_47637;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47652,inst_47654,inst_47655,inst_47656,inst_47657,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47629,inst_47637,inst_47635,inst_47633,inst_47632,inst_47652,inst_47654,inst_47655,inst_47656,inst_47657,state_val_47717,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47659 = setTimeout(inst_47658,(10));
var state_47716__$1 = (function (){var statearr_47787 = state_47716;
(statearr_47787[(33)] = inst_47652);

(statearr_47787[(34)] = inst_47657);

return statearr_47787;
})();
var statearr_47788_47851 = state_47716__$1;
(statearr_47788_47851[(2)] = inst_47659);

(statearr_47788_47851[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (16))){
var state_47716__$1 = state_47716;
var statearr_47789_47852 = state_47716__$1;
(statearr_47789_47852[(2)] = reload_dependents);

(statearr_47789_47852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (38))){
var inst_47669 = (state_47716[(16)]);
var inst_47687 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47669);
var state_47716__$1 = state_47716;
var statearr_47790_47853 = state_47716__$1;
(statearr_47790_47853[(2)] = inst_47687);

(statearr_47790_47853[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (30))){
var state_47716__$1 = state_47716;
var statearr_47791_47854 = state_47716__$1;
(statearr_47791_47854[(2)] = null);

(statearr_47791_47854[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (10))){
var inst_47589 = (state_47716[(22)]);
var inst_47591 = cljs.core.chunked_seq_QMARK_.call(null,inst_47589);
var state_47716__$1 = state_47716;
if(inst_47591){
var statearr_47792_47855 = state_47716__$1;
(statearr_47792_47855[(1)] = (13));

} else {
var statearr_47793_47856 = state_47716__$1;
(statearr_47793_47856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (18))){
var inst_47623 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
if(cljs.core.truth_(inst_47623)){
var statearr_47794_47857 = state_47716__$1;
(statearr_47794_47857[(1)] = (19));

} else {
var statearr_47795_47858 = state_47716__$1;
(statearr_47795_47858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (42))){
var state_47716__$1 = state_47716;
var statearr_47796_47859 = state_47716__$1;
(statearr_47796_47859[(2)] = null);

(statearr_47796_47859[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (37))){
var inst_47682 = (state_47716[(2)]);
var state_47716__$1 = state_47716;
var statearr_47797_47860 = state_47716__$1;
(statearr_47797_47860[(2)] = inst_47682);

(statearr_47797_47860[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47717 === (8))){
var inst_47589 = (state_47716[(22)]);
var inst_47576 = (state_47716[(8)]);
var inst_47589__$1 = cljs.core.seq.call(null,inst_47576);
var state_47716__$1 = (function (){var statearr_47798 = state_47716;
(statearr_47798[(22)] = inst_47589__$1);

return statearr_47798;
})();
if(inst_47589__$1){
var statearr_47799_47861 = state_47716__$1;
(statearr_47799_47861[(1)] = (10));

} else {
var statearr_47800_47862 = state_47716__$1;
(statearr_47800_47862[(1)] = (11));

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
});})(c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32990__auto__,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0 = (function (){
var statearr_47801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47801[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__);

(statearr_47801[(1)] = (1));

return statearr_47801;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1 = (function (state_47716){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_47716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e47802){if((e47802 instanceof Object)){
var ex__32994__auto__ = e47802;
var statearr_47803_47863 = state_47716;
(statearr_47803_47863[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47802;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47864 = state_47716;
state_47716 = G__47864;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__ = function(state_47716){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1.call(this,state_47716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33159__auto__ = (function (){var statearr_47804 = f__33158__auto__.call(null);
(statearr_47804[(6)] = c__33157__auto__);

return statearr_47804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,map__47561,map__47561__$1,opts,before_jsload,on_jsload,reload_dependents,map__47562,map__47562__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33157__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47867,link){
var map__47868 = p__47867;
var map__47868__$1 = (((((!((map__47868 == null))))?(((((map__47868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47868.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47868):map__47868);
var file = cljs.core.get.call(null,map__47868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__47868,map__47868__$1,file){
return (function (p1__47865_SHARP_,p2__47866_SHARP_){
if(cljs.core._EQ_.call(null,p1__47865_SHARP_,p2__47866_SHARP_)){
return p1__47865_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__47868,map__47868__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47871){
var map__47872 = p__47871;
var map__47872__$1 = (((((!((map__47872 == null))))?(((((map__47872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47872):map__47872);
var match_length = cljs.core.get.call(null,map__47872__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47872__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47870_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47870_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47874_SHARP_,p2__47875_SHARP_){
return cljs.core.assoc.call(null,p1__47874_SHARP_,cljs.core.get.call(null,p2__47875_SHARP_,key),p2__47875_SHARP_);
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
var loaded_f_datas_47876 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47876);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47876);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47877,p__47878){
var map__47879 = p__47877;
var map__47879__$1 = (((((!((map__47879 == null))))?(((((map__47879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47879):map__47879);
var on_cssload = cljs.core.get.call(null,map__47879__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47880 = p__47878;
var map__47880__$1 = (((((!((map__47880 == null))))?(((((map__47880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47880):map__47880);
var files_msg = map__47880__$1;
var files = cljs.core.get.call(null,map__47880__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1547002184276
