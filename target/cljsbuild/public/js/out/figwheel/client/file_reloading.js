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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34774_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34774_SHARP_));
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
var seq__34775 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34776 = null;
var count__34777 = (0);
var i__34778 = (0);
while(true){
if((i__34778 < count__34777)){
var n = cljs.core._nth.call(null,chunk__34776,i__34778);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34779 = seq__34775;
var G__34780 = chunk__34776;
var G__34781 = count__34777;
var G__34782 = (i__34778 + (1));
seq__34775 = G__34779;
chunk__34776 = G__34780;
count__34777 = G__34781;
i__34778 = G__34782;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34775);
if(temp__5457__auto__){
var seq__34775__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34775__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34775__$1);
var G__34783 = cljs.core.chunk_rest.call(null,seq__34775__$1);
var G__34784 = c__4461__auto__;
var G__34785 = cljs.core.count.call(null,c__4461__auto__);
var G__34786 = (0);
seq__34775 = G__34783;
chunk__34776 = G__34784;
count__34777 = G__34785;
i__34778 = G__34786;
continue;
} else {
var n = cljs.core.first.call(null,seq__34775__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__34787 = cljs.core.next.call(null,seq__34775__$1);
var G__34788 = null;
var G__34789 = (0);
var G__34790 = (0);
seq__34775 = G__34787;
chunk__34776 = G__34788;
count__34777 = G__34789;
i__34778 = G__34790;
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
return cljs.core.some.call(null,(function (p__34791){
var vec__34792 = p__34791;
var _ = cljs.core.nth.call(null,vec__34792,(0),null);
var v = cljs.core.nth.call(null,vec__34792,(1),null);
var and__4036__auto__ = v;
if(cljs.core.truth_(and__4036__auto__)){
return v.call(null,dep);
} else {
return and__4036__auto__;
}
}),cljs.core.filter.call(null,(function (p__34795){
var vec__34796 = p__34795;
var k = cljs.core.nth.call(null,vec__34796,(0),null);
var v = cljs.core.nth.call(null,vec__34796,(1),null);
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

var seq__34808_34816 = cljs.core.seq.call(null,deps);
var chunk__34809_34817 = null;
var count__34810_34818 = (0);
var i__34811_34819 = (0);
while(true){
if((i__34811_34819 < count__34810_34818)){
var dep_34820 = cljs.core._nth.call(null,chunk__34809_34817,i__34811_34819);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34820;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34820));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34820,(depth + (1)),state);
} else {
}


var G__34821 = seq__34808_34816;
var G__34822 = chunk__34809_34817;
var G__34823 = count__34810_34818;
var G__34824 = (i__34811_34819 + (1));
seq__34808_34816 = G__34821;
chunk__34809_34817 = G__34822;
count__34810_34818 = G__34823;
i__34811_34819 = G__34824;
continue;
} else {
var temp__5457__auto___34825 = cljs.core.seq.call(null,seq__34808_34816);
if(temp__5457__auto___34825){
var seq__34808_34826__$1 = temp__5457__auto___34825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34808_34826__$1)){
var c__4461__auto___34827 = cljs.core.chunk_first.call(null,seq__34808_34826__$1);
var G__34828 = cljs.core.chunk_rest.call(null,seq__34808_34826__$1);
var G__34829 = c__4461__auto___34827;
var G__34830 = cljs.core.count.call(null,c__4461__auto___34827);
var G__34831 = (0);
seq__34808_34816 = G__34828;
chunk__34809_34817 = G__34829;
count__34810_34818 = G__34830;
i__34811_34819 = G__34831;
continue;
} else {
var dep_34832 = cljs.core.first.call(null,seq__34808_34826__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = dep_34832;
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_34832));
} else {
return and__4036__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_34832,(depth + (1)),state);
} else {
}


var G__34833 = cljs.core.next.call(null,seq__34808_34826__$1);
var G__34834 = null;
var G__34835 = (0);
var G__34836 = (0);
seq__34808_34816 = G__34833;
chunk__34809_34817 = G__34834;
count__34810_34818 = G__34835;
i__34811_34819 = G__34836;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34812){
var vec__34813 = p__34812;
var seq__34814 = cljs.core.seq.call(null,vec__34813);
var first__34815 = cljs.core.first.call(null,seq__34814);
var seq__34814__$1 = cljs.core.next.call(null,seq__34814);
var x = first__34815;
var xs = seq__34814__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34813,seq__34814,first__34815,seq__34814__$1,x,xs,get_deps__$1){
return (function (p1__34799_SHARP_){
return clojure.set.difference.call(null,p1__34799_SHARP_,x);
});})(vec__34813,seq__34814,first__34815,seq__34814__$1,x,xs,get_deps__$1))
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
var seq__34837 = cljs.core.seq.call(null,provides);
var chunk__34838 = null;
var count__34839 = (0);
var i__34840 = (0);
while(true){
if((i__34840 < count__34839)){
var prov = cljs.core._nth.call(null,chunk__34838,i__34840);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34841_34849 = cljs.core.seq.call(null,requires);
var chunk__34842_34850 = null;
var count__34843_34851 = (0);
var i__34844_34852 = (0);
while(true){
if((i__34844_34852 < count__34843_34851)){
var req_34853 = cljs.core._nth.call(null,chunk__34842_34850,i__34844_34852);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34853,prov);


var G__34854 = seq__34841_34849;
var G__34855 = chunk__34842_34850;
var G__34856 = count__34843_34851;
var G__34857 = (i__34844_34852 + (1));
seq__34841_34849 = G__34854;
chunk__34842_34850 = G__34855;
count__34843_34851 = G__34856;
i__34844_34852 = G__34857;
continue;
} else {
var temp__5457__auto___34858 = cljs.core.seq.call(null,seq__34841_34849);
if(temp__5457__auto___34858){
var seq__34841_34859__$1 = temp__5457__auto___34858;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34841_34859__$1)){
var c__4461__auto___34860 = cljs.core.chunk_first.call(null,seq__34841_34859__$1);
var G__34861 = cljs.core.chunk_rest.call(null,seq__34841_34859__$1);
var G__34862 = c__4461__auto___34860;
var G__34863 = cljs.core.count.call(null,c__4461__auto___34860);
var G__34864 = (0);
seq__34841_34849 = G__34861;
chunk__34842_34850 = G__34862;
count__34843_34851 = G__34863;
i__34844_34852 = G__34864;
continue;
} else {
var req_34865 = cljs.core.first.call(null,seq__34841_34859__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34865,prov);


var G__34866 = cljs.core.next.call(null,seq__34841_34859__$1);
var G__34867 = null;
var G__34868 = (0);
var G__34869 = (0);
seq__34841_34849 = G__34866;
chunk__34842_34850 = G__34867;
count__34843_34851 = G__34868;
i__34844_34852 = G__34869;
continue;
}
} else {
}
}
break;
}


var G__34870 = seq__34837;
var G__34871 = chunk__34838;
var G__34872 = count__34839;
var G__34873 = (i__34840 + (1));
seq__34837 = G__34870;
chunk__34838 = G__34871;
count__34839 = G__34872;
i__34840 = G__34873;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34837);
if(temp__5457__auto__){
var seq__34837__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34837__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__34837__$1);
var G__34874 = cljs.core.chunk_rest.call(null,seq__34837__$1);
var G__34875 = c__4461__auto__;
var G__34876 = cljs.core.count.call(null,c__4461__auto__);
var G__34877 = (0);
seq__34837 = G__34874;
chunk__34838 = G__34875;
count__34839 = G__34876;
i__34840 = G__34877;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34837__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34845_34878 = cljs.core.seq.call(null,requires);
var chunk__34846_34879 = null;
var count__34847_34880 = (0);
var i__34848_34881 = (0);
while(true){
if((i__34848_34881 < count__34847_34880)){
var req_34882 = cljs.core._nth.call(null,chunk__34846_34879,i__34848_34881);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34882,prov);


var G__34883 = seq__34845_34878;
var G__34884 = chunk__34846_34879;
var G__34885 = count__34847_34880;
var G__34886 = (i__34848_34881 + (1));
seq__34845_34878 = G__34883;
chunk__34846_34879 = G__34884;
count__34847_34880 = G__34885;
i__34848_34881 = G__34886;
continue;
} else {
var temp__5457__auto___34887__$1 = cljs.core.seq.call(null,seq__34845_34878);
if(temp__5457__auto___34887__$1){
var seq__34845_34888__$1 = temp__5457__auto___34887__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34845_34888__$1)){
var c__4461__auto___34889 = cljs.core.chunk_first.call(null,seq__34845_34888__$1);
var G__34890 = cljs.core.chunk_rest.call(null,seq__34845_34888__$1);
var G__34891 = c__4461__auto___34889;
var G__34892 = cljs.core.count.call(null,c__4461__auto___34889);
var G__34893 = (0);
seq__34845_34878 = G__34890;
chunk__34846_34879 = G__34891;
count__34847_34880 = G__34892;
i__34848_34881 = G__34893;
continue;
} else {
var req_34894 = cljs.core.first.call(null,seq__34845_34888__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34894,prov);


var G__34895 = cljs.core.next.call(null,seq__34845_34888__$1);
var G__34896 = null;
var G__34897 = (0);
var G__34898 = (0);
seq__34845_34878 = G__34895;
chunk__34846_34879 = G__34896;
count__34847_34880 = G__34897;
i__34848_34881 = G__34898;
continue;
}
} else {
}
}
break;
}


var G__34899 = cljs.core.next.call(null,seq__34837__$1);
var G__34900 = null;
var G__34901 = (0);
var G__34902 = (0);
seq__34837 = G__34899;
chunk__34838 = G__34900;
count__34839 = G__34901;
i__34840 = G__34902;
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
var seq__34903_34907 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34904_34908 = null;
var count__34905_34909 = (0);
var i__34906_34910 = (0);
while(true){
if((i__34906_34910 < count__34905_34909)){
var ns_34911 = cljs.core._nth.call(null,chunk__34904_34908,i__34906_34910);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34911);


var G__34912 = seq__34903_34907;
var G__34913 = chunk__34904_34908;
var G__34914 = count__34905_34909;
var G__34915 = (i__34906_34910 + (1));
seq__34903_34907 = G__34912;
chunk__34904_34908 = G__34913;
count__34905_34909 = G__34914;
i__34906_34910 = G__34915;
continue;
} else {
var temp__5457__auto___34916 = cljs.core.seq.call(null,seq__34903_34907);
if(temp__5457__auto___34916){
var seq__34903_34917__$1 = temp__5457__auto___34916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903_34917__$1)){
var c__4461__auto___34918 = cljs.core.chunk_first.call(null,seq__34903_34917__$1);
var G__34919 = cljs.core.chunk_rest.call(null,seq__34903_34917__$1);
var G__34920 = c__4461__auto___34918;
var G__34921 = cljs.core.count.call(null,c__4461__auto___34918);
var G__34922 = (0);
seq__34903_34907 = G__34919;
chunk__34904_34908 = G__34920;
count__34905_34909 = G__34921;
i__34906_34910 = G__34922;
continue;
} else {
var ns_34923 = cljs.core.first.call(null,seq__34903_34917__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34923);


var G__34924 = cljs.core.next.call(null,seq__34903_34917__$1);
var G__34925 = null;
var G__34926 = (0);
var G__34927 = (0);
seq__34903_34907 = G__34924;
chunk__34904_34908 = G__34925;
count__34905_34909 = G__34926;
i__34906_34910 = G__34927;
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
var G__34928__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34928 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34929__i = 0, G__34929__a = new Array(arguments.length -  0);
while (G__34929__i < G__34929__a.length) {G__34929__a[G__34929__i] = arguments[G__34929__i + 0]; ++G__34929__i;}
  args = new cljs.core.IndexedSeq(G__34929__a,0,null);
} 
return G__34928__delegate.call(this,args);};
G__34928.cljs$lang$maxFixedArity = 0;
G__34928.cljs$lang$applyTo = (function (arglist__34930){
var args = cljs.core.seq(arglist__34930);
return G__34928__delegate(args);
});
G__34928.cljs$core$IFn$_invoke$arity$variadic = G__34928__delegate;
return G__34928;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__34931_SHARP_,p2__34932_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34931_SHARP_)),p2__34932_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__34933_SHARP_,p2__34934_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34933_SHARP_),p2__34934_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__34935 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__34935.addCallback(((function (G__34935){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__34935))
);

G__34935.addErrback(((function (G__34935){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__34935))
);

return G__34935;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34936){if((e34936 instanceof Error)){
var e = e34936;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34936;

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
}catch (e34937){if((e34937 instanceof Error)){
var e = e34937;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34937;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34938 = cljs.core._EQ_;
var expr__34939 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34938.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34939))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__34938.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34939))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__34938.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34939))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__34938,expr__34939){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34938,expr__34939))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34941,callback){
var map__34942 = p__34941;
var map__34942__$1 = (((((!((map__34942 == null))))?(((((map__34942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34942):map__34942);
var file_msg = map__34942__$1;
var request_url = cljs.core.get.call(null,map__34942__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4047__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__34942,map__34942__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34942,map__34942__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__){
return (function (state_34980){
var state_val_34981 = (state_34980[(1)]);
if((state_val_34981 === (7))){
var inst_34976 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34982_35008 = state_34980__$1;
(statearr_34982_35008[(2)] = inst_34976);

(statearr_34982_35008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (1))){
var state_34980__$1 = state_34980;
var statearr_34983_35009 = state_34980__$1;
(statearr_34983_35009[(2)] = null);

(statearr_34983_35009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (4))){
var inst_34946 = (state_34980[(7)]);
var inst_34946__$1 = (state_34980[(2)]);
var state_34980__$1 = (function (){var statearr_34984 = state_34980;
(statearr_34984[(7)] = inst_34946__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34946__$1)){
var statearr_34985_35010 = state_34980__$1;
(statearr_34985_35010[(1)] = (5));

} else {
var statearr_34986_35011 = state_34980__$1;
(statearr_34986_35011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (15))){
var inst_34959 = (state_34980[(8)]);
var inst_34961 = (state_34980[(9)]);
var inst_34963 = inst_34961.call(null,inst_34959);
var state_34980__$1 = state_34980;
var statearr_34987_35012 = state_34980__$1;
(statearr_34987_35012[(2)] = inst_34963);

(statearr_34987_35012[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (13))){
var inst_34970 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34988_35013 = state_34980__$1;
(statearr_34988_35013[(2)] = inst_34970);

(statearr_34988_35013[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (6))){
var state_34980__$1 = state_34980;
var statearr_34989_35014 = state_34980__$1;
(statearr_34989_35014[(2)] = null);

(statearr_34989_35014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (17))){
var inst_34967 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
var statearr_34990_35015 = state_34980__$1;
(statearr_34990_35015[(2)] = inst_34967);

(statearr_34990_35015[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (3))){
var inst_34978 = (state_34980[(2)]);
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34980__$1,inst_34978);
} else {
if((state_val_34981 === (12))){
var state_34980__$1 = state_34980;
var statearr_34991_35016 = state_34980__$1;
(statearr_34991_35016[(2)] = null);

(statearr_34991_35016[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (2))){
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34980__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34981 === (11))){
var inst_34951 = (state_34980[(10)]);
var inst_34957 = figwheel.client.file_reloading.blocking_load.call(null,inst_34951);
var state_34980__$1 = state_34980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34980__$1,(14),inst_34957);
} else {
if((state_val_34981 === (9))){
var inst_34951 = (state_34980[(10)]);
var state_34980__$1 = state_34980;
if(cljs.core.truth_(inst_34951)){
var statearr_34992_35017 = state_34980__$1;
(statearr_34992_35017[(1)] = (11));

} else {
var statearr_34993_35018 = state_34980__$1;
(statearr_34993_35018[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (5))){
var inst_34946 = (state_34980[(7)]);
var inst_34952 = (state_34980[(11)]);
var inst_34951 = cljs.core.nth.call(null,inst_34946,(0),null);
var inst_34952__$1 = cljs.core.nth.call(null,inst_34946,(1),null);
var state_34980__$1 = (function (){var statearr_34994 = state_34980;
(statearr_34994[(10)] = inst_34951);

(statearr_34994[(11)] = inst_34952__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34952__$1)){
var statearr_34995_35019 = state_34980__$1;
(statearr_34995_35019[(1)] = (8));

} else {
var statearr_34996_35020 = state_34980__$1;
(statearr_34996_35020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (14))){
var inst_34951 = (state_34980[(10)]);
var inst_34961 = (state_34980[(9)]);
var inst_34959 = (state_34980[(2)]);
var inst_34960 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34961__$1 = cljs.core.get.call(null,inst_34960,inst_34951);
var state_34980__$1 = (function (){var statearr_34997 = state_34980;
(statearr_34997[(8)] = inst_34959);

(statearr_34997[(9)] = inst_34961__$1);

return statearr_34997;
})();
if(cljs.core.truth_(inst_34961__$1)){
var statearr_34998_35021 = state_34980__$1;
(statearr_34998_35021[(1)] = (15));

} else {
var statearr_34999_35022 = state_34980__$1;
(statearr_34999_35022[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (16))){
var inst_34959 = (state_34980[(8)]);
var inst_34965 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34959);
var state_34980__$1 = state_34980;
var statearr_35000_35023 = state_34980__$1;
(statearr_35000_35023[(2)] = inst_34965);

(statearr_35000_35023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (10))){
var inst_34972 = (state_34980[(2)]);
var state_34980__$1 = (function (){var statearr_35001 = state_34980;
(statearr_35001[(12)] = inst_34972);

return statearr_35001;
})();
var statearr_35002_35024 = state_34980__$1;
(statearr_35002_35024[(2)] = null);

(statearr_35002_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34981 === (8))){
var inst_34952 = (state_34980[(11)]);
var inst_34954 = eval(inst_34952);
var state_34980__$1 = state_34980;
var statearr_35003_35025 = state_34980__$1;
(statearr_35003_35025[(2)] = inst_34954);

(statearr_35003_35025[(1)] = (10));


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
});})(c__31086__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30992__auto__ = null;
var figwheel$client$file_reloading$state_machine__30992__auto____0 = (function (){
var statearr_35004 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35004[(0)] = figwheel$client$file_reloading$state_machine__30992__auto__);

(statearr_35004[(1)] = (1));

return statearr_35004;
});
var figwheel$client$file_reloading$state_machine__30992__auto____1 = (function (state_34980){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_34980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e35005){if((e35005 instanceof Object)){
var ex__30995__auto__ = e35005;
var statearr_35006_35026 = state_34980;
(statearr_35006_35026[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35027 = state_34980;
state_34980 = G__35027;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30992__auto__ = function(state_34980){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30992__auto____1.call(this,state_34980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30992__auto____0;
figwheel$client$file_reloading$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30992__auto____1;
return figwheel$client$file_reloading$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__))
})();
var state__31088__auto__ = (function (){var statearr_35007 = f__31087__auto__.call(null);
(statearr_35007[(6)] = c__31086__auto__);

return statearr_35007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__))
);

return c__31086__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35029 = arguments.length;
switch (G__35029) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35031,callback){
var map__35032 = p__35031;
var map__35032__$1 = (((((!((map__35032 == null))))?(((((map__35032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35032):map__35032);
var file_msg = map__35032__$1;
var namespace = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35032,map__35032__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35032,map__35032__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35034){
var map__35035 = p__35034;
var map__35035__$1 = (((((!((map__35035 == null))))?(((((map__35035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35035):map__35035);
var file_msg = map__35035__$1;
var namespace = cljs.core.get.call(null,map__35035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35037){
var map__35038 = p__35037;
var map__35038__$1 = (((((!((map__35038 == null))))?(((((map__35038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35038):map__35038);
var file_msg = map__35038__$1;
var namespace = cljs.core.get.call(null,map__35038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35040,callback){
var map__35041 = p__35040;
var map__35041__$1 = (((((!((map__35041 == null))))?(((((map__35041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35041):map__35041);
var file_msg = map__35041__$1;
var request_url = cljs.core.get.call(null,map__35041__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35041__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__31086__auto___35091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___35091,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___35091,out){
return (function (state_35076){
var state_val_35077 = (state_35076[(1)]);
if((state_val_35077 === (1))){
var inst_35050 = cljs.core.seq.call(null,files);
var inst_35051 = cljs.core.first.call(null,inst_35050);
var inst_35052 = cljs.core.next.call(null,inst_35050);
var inst_35053 = files;
var state_35076__$1 = (function (){var statearr_35078 = state_35076;
(statearr_35078[(7)] = inst_35052);

(statearr_35078[(8)] = inst_35051);

(statearr_35078[(9)] = inst_35053);

return statearr_35078;
})();
var statearr_35079_35092 = state_35076__$1;
(statearr_35079_35092[(2)] = null);

(statearr_35079_35092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (2))){
var inst_35053 = (state_35076[(9)]);
var inst_35059 = (state_35076[(10)]);
var inst_35058 = cljs.core.seq.call(null,inst_35053);
var inst_35059__$1 = cljs.core.first.call(null,inst_35058);
var inst_35060 = cljs.core.next.call(null,inst_35058);
var inst_35061 = (inst_35059__$1 == null);
var inst_35062 = cljs.core.not.call(null,inst_35061);
var state_35076__$1 = (function (){var statearr_35080 = state_35076;
(statearr_35080[(11)] = inst_35060);

(statearr_35080[(10)] = inst_35059__$1);

return statearr_35080;
})();
if(inst_35062){
var statearr_35081_35093 = state_35076__$1;
(statearr_35081_35093[(1)] = (4));

} else {
var statearr_35082_35094 = state_35076__$1;
(statearr_35082_35094[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (3))){
var inst_35074 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35076__$1,inst_35074);
} else {
if((state_val_35077 === (4))){
var inst_35059 = (state_35076[(10)]);
var inst_35064 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35059);
var state_35076__$1 = state_35076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35076__$1,(7),inst_35064);
} else {
if((state_val_35077 === (5))){
var inst_35070 = cljs.core.async.close_BANG_.call(null,out);
var state_35076__$1 = state_35076;
var statearr_35083_35095 = state_35076__$1;
(statearr_35083_35095[(2)] = inst_35070);

(statearr_35083_35095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (6))){
var inst_35072 = (state_35076[(2)]);
var state_35076__$1 = state_35076;
var statearr_35084_35096 = state_35076__$1;
(statearr_35084_35096[(2)] = inst_35072);

(statearr_35084_35096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35077 === (7))){
var inst_35060 = (state_35076[(11)]);
var inst_35066 = (state_35076[(2)]);
var inst_35067 = cljs.core.async.put_BANG_.call(null,out,inst_35066);
var inst_35053 = inst_35060;
var state_35076__$1 = (function (){var statearr_35085 = state_35076;
(statearr_35085[(12)] = inst_35067);

(statearr_35085[(9)] = inst_35053);

return statearr_35085;
})();
var statearr_35086_35097 = state_35076__$1;
(statearr_35086_35097[(2)] = null);

(statearr_35086_35097[(1)] = (2));


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
});})(c__31086__auto___35091,out))
;
return ((function (switch__30991__auto__,c__31086__auto___35091,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____0 = (function (){
var statearr_35087 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35087[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__);

(statearr_35087[(1)] = (1));

return statearr_35087;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____1 = (function (state_35076){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_35076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e35088){if((e35088 instanceof Object)){
var ex__30995__auto__ = e35088;
var statearr_35089_35098 = state_35076;
(statearr_35089_35098[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_35076;
state_35076 = G__35099;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__ = function(state_35076){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____1.call(this,state_35076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___35091,out))
})();
var state__31088__auto__ = (function (){var statearr_35090 = f__31087__auto__.call(null);
(statearr_35090[(6)] = c__31086__auto___35091);

return statearr_35090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___35091,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35100,opts){
var map__35101 = p__35100;
var map__35101__$1 = (((((!((map__35101 == null))))?(((((map__35101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35101):map__35101);
var eval_body = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35101__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e35103){var e = e35103;
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
return (function (p1__35104_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35104_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__35105){
var vec__35106 = p__35105;
var k = cljs.core.nth.call(null,vec__35106,(0),null);
var v = cljs.core.nth.call(null,vec__35106,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35109){
var vec__35110 = p__35109;
var k = cljs.core.nth.call(null,vec__35110,(0),null);
var v = cljs.core.nth.call(null,vec__35110,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35116,p__35117){
var map__35118 = p__35116;
var map__35118__$1 = (((((!((map__35118 == null))))?(((((map__35118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35118):map__35118);
var opts = map__35118__$1;
var before_jsload = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35118__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35119 = p__35117;
var map__35119__$1 = (((((!((map__35119 == null))))?(((((map__35119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35119):map__35119);
var msg = map__35119__$1;
var files = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35119__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35273){
var state_val_35274 = (state_35273[(1)]);
if((state_val_35274 === (7))){
var inst_35134 = (state_35273[(7)]);
var inst_35135 = (state_35273[(8)]);
var inst_35133 = (state_35273[(9)]);
var inst_35136 = (state_35273[(10)]);
var inst_35141 = cljs.core._nth.call(null,inst_35134,inst_35136);
var inst_35142 = figwheel.client.file_reloading.eval_body.call(null,inst_35141,opts);
var inst_35143 = (inst_35136 + (1));
var tmp35275 = inst_35134;
var tmp35276 = inst_35135;
var tmp35277 = inst_35133;
var inst_35133__$1 = tmp35277;
var inst_35134__$1 = tmp35275;
var inst_35135__$1 = tmp35276;
var inst_35136__$1 = inst_35143;
var state_35273__$1 = (function (){var statearr_35278 = state_35273;
(statearr_35278[(7)] = inst_35134__$1);

(statearr_35278[(11)] = inst_35142);

(statearr_35278[(8)] = inst_35135__$1);

(statearr_35278[(9)] = inst_35133__$1);

(statearr_35278[(10)] = inst_35136__$1);

return statearr_35278;
})();
var statearr_35279_35362 = state_35273__$1;
(statearr_35279_35362[(2)] = null);

(statearr_35279_35362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (20))){
var inst_35176 = (state_35273[(12)]);
var inst_35184 = figwheel.client.file_reloading.sort_files.call(null,inst_35176);
var state_35273__$1 = state_35273;
var statearr_35280_35363 = state_35273__$1;
(statearr_35280_35363[(2)] = inst_35184);

(statearr_35280_35363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (27))){
var state_35273__$1 = state_35273;
var statearr_35281_35364 = state_35273__$1;
(statearr_35281_35364[(2)] = null);

(statearr_35281_35364[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (1))){
var inst_35125 = (state_35273[(13)]);
var inst_35122 = before_jsload.call(null,files);
var inst_35123 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35124 = (function (){return ((function (inst_35125,inst_35122,inst_35123,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35113_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35113_SHARP_);
});
;})(inst_35125,inst_35122,inst_35123,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35125__$1 = cljs.core.filter.call(null,inst_35124,files);
var inst_35126 = cljs.core.not_empty.call(null,inst_35125__$1);
var state_35273__$1 = (function (){var statearr_35282 = state_35273;
(statearr_35282[(14)] = inst_35122);

(statearr_35282[(15)] = inst_35123);

(statearr_35282[(13)] = inst_35125__$1);

return statearr_35282;
})();
if(cljs.core.truth_(inst_35126)){
var statearr_35283_35365 = state_35273__$1;
(statearr_35283_35365[(1)] = (2));

} else {
var statearr_35284_35366 = state_35273__$1;
(statearr_35284_35366[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (24))){
var state_35273__$1 = state_35273;
var statearr_35285_35367 = state_35273__$1;
(statearr_35285_35367[(2)] = null);

(statearr_35285_35367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (39))){
var inst_35226 = (state_35273[(16)]);
var state_35273__$1 = state_35273;
var statearr_35286_35368 = state_35273__$1;
(statearr_35286_35368[(2)] = inst_35226);

(statearr_35286_35368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (46))){
var inst_35268 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35287_35369 = state_35273__$1;
(statearr_35287_35369[(2)] = inst_35268);

(statearr_35287_35369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (4))){
var inst_35170 = (state_35273[(2)]);
var inst_35171 = cljs.core.List.EMPTY;
var inst_35172 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35171);
var inst_35173 = (function (){return ((function (inst_35170,inst_35171,inst_35172,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35114_SHARP_){
var and__4036__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35114_SHARP_);
if(cljs.core.truth_(and__4036__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35114_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35114_SHARP_))));
} else {
return and__4036__auto__;
}
});
;})(inst_35170,inst_35171,inst_35172,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35174 = cljs.core.filter.call(null,inst_35173,files);
var inst_35175 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35176 = cljs.core.concat.call(null,inst_35174,inst_35175);
var state_35273__$1 = (function (){var statearr_35288 = state_35273;
(statearr_35288[(17)] = inst_35172);

(statearr_35288[(18)] = inst_35170);

(statearr_35288[(12)] = inst_35176);

return statearr_35288;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35289_35370 = state_35273__$1;
(statearr_35289_35370[(1)] = (16));

} else {
var statearr_35290_35371 = state_35273__$1;
(statearr_35290_35371[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (15))){
var inst_35160 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35291_35372 = state_35273__$1;
(statearr_35291_35372[(2)] = inst_35160);

(statearr_35291_35372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (21))){
var inst_35186 = (state_35273[(19)]);
var inst_35186__$1 = (state_35273[(2)]);
var inst_35187 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35186__$1);
var state_35273__$1 = (function (){var statearr_35292 = state_35273;
(statearr_35292[(19)] = inst_35186__$1);

return statearr_35292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35273__$1,(22),inst_35187);
} else {
if((state_val_35274 === (31))){
var inst_35271 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35273__$1,inst_35271);
} else {
if((state_val_35274 === (32))){
var inst_35226 = (state_35273[(16)]);
var inst_35231 = inst_35226.cljs$lang$protocol_mask$partition0$;
var inst_35232 = (inst_35231 & (64));
var inst_35233 = inst_35226.cljs$core$ISeq$;
var inst_35234 = (cljs.core.PROTOCOL_SENTINEL === inst_35233);
var inst_35235 = ((inst_35232) || (inst_35234));
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35235)){
var statearr_35293_35373 = state_35273__$1;
(statearr_35293_35373[(1)] = (35));

} else {
var statearr_35294_35374 = state_35273__$1;
(statearr_35294_35374[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (40))){
var inst_35248 = (state_35273[(20)]);
var inst_35247 = (state_35273[(2)]);
var inst_35248__$1 = cljs.core.get.call(null,inst_35247,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35249 = cljs.core.get.call(null,inst_35247,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35250 = cljs.core.not_empty.call(null,inst_35248__$1);
var state_35273__$1 = (function (){var statearr_35295 = state_35273;
(statearr_35295[(21)] = inst_35249);

(statearr_35295[(20)] = inst_35248__$1);

return statearr_35295;
})();
if(cljs.core.truth_(inst_35250)){
var statearr_35296_35375 = state_35273__$1;
(statearr_35296_35375[(1)] = (41));

} else {
var statearr_35297_35376 = state_35273__$1;
(statearr_35297_35376[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (33))){
var state_35273__$1 = state_35273;
var statearr_35298_35377 = state_35273__$1;
(statearr_35298_35377[(2)] = false);

(statearr_35298_35377[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (13))){
var inst_35146 = (state_35273[(22)]);
var inst_35150 = cljs.core.chunk_first.call(null,inst_35146);
var inst_35151 = cljs.core.chunk_rest.call(null,inst_35146);
var inst_35152 = cljs.core.count.call(null,inst_35150);
var inst_35133 = inst_35151;
var inst_35134 = inst_35150;
var inst_35135 = inst_35152;
var inst_35136 = (0);
var state_35273__$1 = (function (){var statearr_35299 = state_35273;
(statearr_35299[(7)] = inst_35134);

(statearr_35299[(8)] = inst_35135);

(statearr_35299[(9)] = inst_35133);

(statearr_35299[(10)] = inst_35136);

return statearr_35299;
})();
var statearr_35300_35378 = state_35273__$1;
(statearr_35300_35378[(2)] = null);

(statearr_35300_35378[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (22))){
var inst_35189 = (state_35273[(23)]);
var inst_35190 = (state_35273[(24)]);
var inst_35186 = (state_35273[(19)]);
var inst_35194 = (state_35273[(25)]);
var inst_35189__$1 = (state_35273[(2)]);
var inst_35190__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35189__$1);
var inst_35191 = (function (){var all_files = inst_35186;
var res_SINGLEQUOTE_ = inst_35189__$1;
var res = inst_35190__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35189,inst_35190,inst_35186,inst_35194,inst_35189__$1,inst_35190__$1,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35115_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35115_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35189,inst_35190,inst_35186,inst_35194,inst_35189__$1,inst_35190__$1,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35192 = cljs.core.filter.call(null,inst_35191,inst_35189__$1);
var inst_35193 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35193);
var inst_35195 = cljs.core.not_empty.call(null,inst_35194__$1);
var state_35273__$1 = (function (){var statearr_35301 = state_35273;
(statearr_35301[(23)] = inst_35189__$1);

(statearr_35301[(24)] = inst_35190__$1);

(statearr_35301[(26)] = inst_35192);

(statearr_35301[(25)] = inst_35194__$1);

return statearr_35301;
})();
if(cljs.core.truth_(inst_35195)){
var statearr_35302_35379 = state_35273__$1;
(statearr_35302_35379[(1)] = (23));

} else {
var statearr_35303_35380 = state_35273__$1;
(statearr_35303_35380[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (36))){
var state_35273__$1 = state_35273;
var statearr_35304_35381 = state_35273__$1;
(statearr_35304_35381[(2)] = false);

(statearr_35304_35381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (41))){
var inst_35248 = (state_35273[(20)]);
var inst_35252 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35253 = cljs.core.map.call(null,inst_35252,inst_35248);
var inst_35254 = cljs.core.pr_str.call(null,inst_35253);
var inst_35255 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35254)].join('');
var inst_35256 = figwheel.client.utils.log.call(null,inst_35255);
var state_35273__$1 = state_35273;
var statearr_35305_35382 = state_35273__$1;
(statearr_35305_35382[(2)] = inst_35256);

(statearr_35305_35382[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (43))){
var inst_35249 = (state_35273[(21)]);
var inst_35259 = (state_35273[(2)]);
var inst_35260 = cljs.core.not_empty.call(null,inst_35249);
var state_35273__$1 = (function (){var statearr_35306 = state_35273;
(statearr_35306[(27)] = inst_35259);

return statearr_35306;
})();
if(cljs.core.truth_(inst_35260)){
var statearr_35307_35383 = state_35273__$1;
(statearr_35307_35383[(1)] = (44));

} else {
var statearr_35308_35384 = state_35273__$1;
(statearr_35308_35384[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (29))){
var inst_35189 = (state_35273[(23)]);
var inst_35190 = (state_35273[(24)]);
var inst_35186 = (state_35273[(19)]);
var inst_35192 = (state_35273[(26)]);
var inst_35226 = (state_35273[(16)]);
var inst_35194 = (state_35273[(25)]);
var inst_35222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35225 = (function (){var all_files = inst_35186;
var res_SINGLEQUOTE_ = inst_35189;
var res = inst_35190;
var files_not_loaded = inst_35192;
var dependencies_that_loaded = inst_35194;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35226,inst_35194,inst_35222,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35224){
var map__35309 = p__35224;
var map__35309__$1 = (((((!((map__35309 == null))))?(((((map__35309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35309):map__35309);
var namespace = cljs.core.get.call(null,map__35309__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35226,inst_35194,inst_35222,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35226__$1 = cljs.core.group_by.call(null,inst_35225,inst_35192);
var inst_35228 = (inst_35226__$1 == null);
var inst_35229 = cljs.core.not.call(null,inst_35228);
var state_35273__$1 = (function (){var statearr_35311 = state_35273;
(statearr_35311[(16)] = inst_35226__$1);

(statearr_35311[(28)] = inst_35222);

return statearr_35311;
})();
if(inst_35229){
var statearr_35312_35385 = state_35273__$1;
(statearr_35312_35385[(1)] = (32));

} else {
var statearr_35313_35386 = state_35273__$1;
(statearr_35313_35386[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (44))){
var inst_35249 = (state_35273[(21)]);
var inst_35262 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35249);
var inst_35263 = cljs.core.pr_str.call(null,inst_35262);
var inst_35264 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35263)].join('');
var inst_35265 = figwheel.client.utils.log.call(null,inst_35264);
var state_35273__$1 = state_35273;
var statearr_35314_35387 = state_35273__$1;
(statearr_35314_35387[(2)] = inst_35265);

(statearr_35314_35387[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (6))){
var inst_35167 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35315_35388 = state_35273__$1;
(statearr_35315_35388[(2)] = inst_35167);

(statearr_35315_35388[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (28))){
var inst_35192 = (state_35273[(26)]);
var inst_35219 = (state_35273[(2)]);
var inst_35220 = cljs.core.not_empty.call(null,inst_35192);
var state_35273__$1 = (function (){var statearr_35316 = state_35273;
(statearr_35316[(29)] = inst_35219);

return statearr_35316;
})();
if(cljs.core.truth_(inst_35220)){
var statearr_35317_35389 = state_35273__$1;
(statearr_35317_35389[(1)] = (29));

} else {
var statearr_35318_35390 = state_35273__$1;
(statearr_35318_35390[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (25))){
var inst_35190 = (state_35273[(24)]);
var inst_35206 = (state_35273[(2)]);
var inst_35207 = cljs.core.not_empty.call(null,inst_35190);
var state_35273__$1 = (function (){var statearr_35319 = state_35273;
(statearr_35319[(30)] = inst_35206);

return statearr_35319;
})();
if(cljs.core.truth_(inst_35207)){
var statearr_35320_35391 = state_35273__$1;
(statearr_35320_35391[(1)] = (26));

} else {
var statearr_35321_35392 = state_35273__$1;
(statearr_35321_35392[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (34))){
var inst_35242 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35242)){
var statearr_35322_35393 = state_35273__$1;
(statearr_35322_35393[(1)] = (38));

} else {
var statearr_35323_35394 = state_35273__$1;
(statearr_35323_35394[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (17))){
var state_35273__$1 = state_35273;
var statearr_35324_35395 = state_35273__$1;
(statearr_35324_35395[(2)] = recompile_dependents);

(statearr_35324_35395[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (3))){
var state_35273__$1 = state_35273;
var statearr_35325_35396 = state_35273__$1;
(statearr_35325_35396[(2)] = null);

(statearr_35325_35396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (12))){
var inst_35163 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35326_35397 = state_35273__$1;
(statearr_35326_35397[(2)] = inst_35163);

(statearr_35326_35397[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (2))){
var inst_35125 = (state_35273[(13)]);
var inst_35132 = cljs.core.seq.call(null,inst_35125);
var inst_35133 = inst_35132;
var inst_35134 = null;
var inst_35135 = (0);
var inst_35136 = (0);
var state_35273__$1 = (function (){var statearr_35327 = state_35273;
(statearr_35327[(7)] = inst_35134);

(statearr_35327[(8)] = inst_35135);

(statearr_35327[(9)] = inst_35133);

(statearr_35327[(10)] = inst_35136);

return statearr_35327;
})();
var statearr_35328_35398 = state_35273__$1;
(statearr_35328_35398[(2)] = null);

(statearr_35328_35398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (23))){
var inst_35189 = (state_35273[(23)]);
var inst_35190 = (state_35273[(24)]);
var inst_35186 = (state_35273[(19)]);
var inst_35192 = (state_35273[(26)]);
var inst_35194 = (state_35273[(25)]);
var inst_35197 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35199 = (function (){var all_files = inst_35186;
var res_SINGLEQUOTE_ = inst_35189;
var res = inst_35190;
var files_not_loaded = inst_35192;
var dependencies_that_loaded = inst_35194;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35197,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35198){
var map__35329 = p__35198;
var map__35329__$1 = (((((!((map__35329 == null))))?(((((map__35329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35329):map__35329);
var request_url = cljs.core.get.call(null,map__35329__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35197,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35200 = cljs.core.reverse.call(null,inst_35194);
var inst_35201 = cljs.core.map.call(null,inst_35199,inst_35200);
var inst_35202 = cljs.core.pr_str.call(null,inst_35201);
var inst_35203 = figwheel.client.utils.log.call(null,inst_35202);
var state_35273__$1 = (function (){var statearr_35331 = state_35273;
(statearr_35331[(31)] = inst_35197);

return statearr_35331;
})();
var statearr_35332_35399 = state_35273__$1;
(statearr_35332_35399[(2)] = inst_35203);

(statearr_35332_35399[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (35))){
var state_35273__$1 = state_35273;
var statearr_35333_35400 = state_35273__$1;
(statearr_35333_35400[(2)] = true);

(statearr_35333_35400[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (19))){
var inst_35176 = (state_35273[(12)]);
var inst_35182 = figwheel.client.file_reloading.expand_files.call(null,inst_35176);
var state_35273__$1 = state_35273;
var statearr_35334_35401 = state_35273__$1;
(statearr_35334_35401[(2)] = inst_35182);

(statearr_35334_35401[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (11))){
var state_35273__$1 = state_35273;
var statearr_35335_35402 = state_35273__$1;
(statearr_35335_35402[(2)] = null);

(statearr_35335_35402[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (9))){
var inst_35165 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35336_35403 = state_35273__$1;
(statearr_35336_35403[(2)] = inst_35165);

(statearr_35336_35403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (5))){
var inst_35135 = (state_35273[(8)]);
var inst_35136 = (state_35273[(10)]);
var inst_35138 = (inst_35136 < inst_35135);
var inst_35139 = inst_35138;
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35139)){
var statearr_35337_35404 = state_35273__$1;
(statearr_35337_35404[(1)] = (7));

} else {
var statearr_35338_35405 = state_35273__$1;
(statearr_35338_35405[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (14))){
var inst_35146 = (state_35273[(22)]);
var inst_35155 = cljs.core.first.call(null,inst_35146);
var inst_35156 = figwheel.client.file_reloading.eval_body.call(null,inst_35155,opts);
var inst_35157 = cljs.core.next.call(null,inst_35146);
var inst_35133 = inst_35157;
var inst_35134 = null;
var inst_35135 = (0);
var inst_35136 = (0);
var state_35273__$1 = (function (){var statearr_35339 = state_35273;
(statearr_35339[(7)] = inst_35134);

(statearr_35339[(8)] = inst_35135);

(statearr_35339[(9)] = inst_35133);

(statearr_35339[(32)] = inst_35156);

(statearr_35339[(10)] = inst_35136);

return statearr_35339;
})();
var statearr_35340_35406 = state_35273__$1;
(statearr_35340_35406[(2)] = null);

(statearr_35340_35406[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (45))){
var state_35273__$1 = state_35273;
var statearr_35341_35407 = state_35273__$1;
(statearr_35341_35407[(2)] = null);

(statearr_35341_35407[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (26))){
var inst_35189 = (state_35273[(23)]);
var inst_35190 = (state_35273[(24)]);
var inst_35186 = (state_35273[(19)]);
var inst_35192 = (state_35273[(26)]);
var inst_35194 = (state_35273[(25)]);
var inst_35209 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35211 = (function (){var all_files = inst_35186;
var res_SINGLEQUOTE_ = inst_35189;
var res = inst_35190;
var files_not_loaded = inst_35192;
var dependencies_that_loaded = inst_35194;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35209,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35210){
var map__35342 = p__35210;
var map__35342__$1 = (((((!((map__35342 == null))))?(((((map__35342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35342):map__35342);
var namespace = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35342__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35209,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35212 = cljs.core.map.call(null,inst_35211,inst_35190);
var inst_35213 = cljs.core.pr_str.call(null,inst_35212);
var inst_35214 = figwheel.client.utils.log.call(null,inst_35213);
var inst_35215 = (function (){var all_files = inst_35186;
var res_SINGLEQUOTE_ = inst_35189;
var res = inst_35190;
var files_not_loaded = inst_35192;
var dependencies_that_loaded = inst_35194;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35209,inst_35211,inst_35212,inst_35213,inst_35214,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35189,inst_35190,inst_35186,inst_35192,inst_35194,inst_35209,inst_35211,inst_35212,inst_35213,inst_35214,state_val_35274,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35216 = setTimeout(inst_35215,(10));
var state_35273__$1 = (function (){var statearr_35344 = state_35273;
(statearr_35344[(33)] = inst_35209);

(statearr_35344[(34)] = inst_35214);

return statearr_35344;
})();
var statearr_35345_35408 = state_35273__$1;
(statearr_35345_35408[(2)] = inst_35216);

(statearr_35345_35408[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (16))){
var state_35273__$1 = state_35273;
var statearr_35346_35409 = state_35273__$1;
(statearr_35346_35409[(2)] = reload_dependents);

(statearr_35346_35409[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (38))){
var inst_35226 = (state_35273[(16)]);
var inst_35244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35226);
var state_35273__$1 = state_35273;
var statearr_35347_35410 = state_35273__$1;
(statearr_35347_35410[(2)] = inst_35244);

(statearr_35347_35410[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (30))){
var state_35273__$1 = state_35273;
var statearr_35348_35411 = state_35273__$1;
(statearr_35348_35411[(2)] = null);

(statearr_35348_35411[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (10))){
var inst_35146 = (state_35273[(22)]);
var inst_35148 = cljs.core.chunked_seq_QMARK_.call(null,inst_35146);
var state_35273__$1 = state_35273;
if(inst_35148){
var statearr_35349_35412 = state_35273__$1;
(statearr_35349_35412[(1)] = (13));

} else {
var statearr_35350_35413 = state_35273__$1;
(statearr_35350_35413[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (18))){
var inst_35180 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
if(cljs.core.truth_(inst_35180)){
var statearr_35351_35414 = state_35273__$1;
(statearr_35351_35414[(1)] = (19));

} else {
var statearr_35352_35415 = state_35273__$1;
(statearr_35352_35415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (42))){
var state_35273__$1 = state_35273;
var statearr_35353_35416 = state_35273__$1;
(statearr_35353_35416[(2)] = null);

(statearr_35353_35416[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (37))){
var inst_35239 = (state_35273[(2)]);
var state_35273__$1 = state_35273;
var statearr_35354_35417 = state_35273__$1;
(statearr_35354_35417[(2)] = inst_35239);

(statearr_35354_35417[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35274 === (8))){
var inst_35146 = (state_35273[(22)]);
var inst_35133 = (state_35273[(9)]);
var inst_35146__$1 = cljs.core.seq.call(null,inst_35133);
var state_35273__$1 = (function (){var statearr_35355 = state_35273;
(statearr_35355[(22)] = inst_35146__$1);

return statearr_35355;
})();
if(inst_35146__$1){
var statearr_35356_35418 = state_35273__$1;
(statearr_35356_35418[(1)] = (10));

} else {
var statearr_35357_35419 = state_35273__$1;
(statearr_35357_35419[(1)] = (11));

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
});})(c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30991__auto__,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____0 = (function (){
var statearr_35358 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35358[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__);

(statearr_35358[(1)] = (1));

return statearr_35358;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____1 = (function (state_35273){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_35273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e35359){if((e35359 instanceof Object)){
var ex__30995__auto__ = e35359;
var statearr_35360_35420 = state_35273;
(statearr_35360_35420[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35421 = state_35273;
state_35273 = G__35421;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__ = function(state_35273){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____1.call(this,state_35273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__31088__auto__ = (function (){var statearr_35361 = f__31087__auto__.call(null);
(statearr_35361[(6)] = c__31086__auto__);

return statearr_35361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__,map__35118,map__35118__$1,opts,before_jsload,on_jsload,reload_dependents,map__35119,map__35119__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__31086__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35424,link){
var map__35425 = p__35424;
var map__35425__$1 = (((((!((map__35425 == null))))?(((((map__35425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35425.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35425):map__35425);
var file = cljs.core.get.call(null,map__35425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__35425,map__35425__$1,file){
return (function (p1__35422_SHARP_,p2__35423_SHARP_){
if(cljs.core._EQ_.call(null,p1__35422_SHARP_,p2__35423_SHARP_)){
return p1__35422_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__35425,map__35425__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35428){
var map__35429 = p__35428;
var map__35429__$1 = (((((!((map__35429 == null))))?(((((map__35429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35429):map__35429);
var match_length = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35429__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35427_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35427_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35431_SHARP_,p2__35432_SHARP_){
return cljs.core.assoc.call(null,p1__35431_SHARP_,cljs.core.get.call(null,p2__35432_SHARP_,key),p2__35432_SHARP_);
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
var loaded_f_datas_35433 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35433);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35433);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35434,p__35435){
var map__35436 = p__35434;
var map__35436__$1 = (((((!((map__35436 == null))))?(((((map__35436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35436):map__35436);
var on_cssload = cljs.core.get.call(null,map__35436__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35437 = p__35435;
var map__35437__$1 = (((((!((map__35437 == null))))?(((((map__35437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35437):map__35437);
var files_msg = map__35437__$1;
var files = cljs.core.get.call(null,map__35437__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1545637594514
