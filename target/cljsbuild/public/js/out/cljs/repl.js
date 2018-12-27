// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40881){
var map__40882 = p__40881;
var map__40882__$1 = (((((!((map__40882 == null))))?(((((map__40882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40882):map__40882);
var m = map__40882__$1;
var n = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__40882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40884_40906 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40885_40907 = null;
var count__40886_40908 = (0);
var i__40887_40909 = (0);
while(true){
if((i__40887_40909 < count__40886_40908)){
var f_40910 = cljs.core._nth.call(null,chunk__40885_40907,i__40887_40909);
cljs.core.println.call(null,"  ",f_40910);


var G__40911 = seq__40884_40906;
var G__40912 = chunk__40885_40907;
var G__40913 = count__40886_40908;
var G__40914 = (i__40887_40909 + (1));
seq__40884_40906 = G__40911;
chunk__40885_40907 = G__40912;
count__40886_40908 = G__40913;
i__40887_40909 = G__40914;
continue;
} else {
var temp__5457__auto___40915 = cljs.core.seq.call(null,seq__40884_40906);
if(temp__5457__auto___40915){
var seq__40884_40916__$1 = temp__5457__auto___40915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40884_40916__$1)){
var c__4461__auto___40917 = cljs.core.chunk_first.call(null,seq__40884_40916__$1);
var G__40918 = cljs.core.chunk_rest.call(null,seq__40884_40916__$1);
var G__40919 = c__4461__auto___40917;
var G__40920 = cljs.core.count.call(null,c__4461__auto___40917);
var G__40921 = (0);
seq__40884_40906 = G__40918;
chunk__40885_40907 = G__40919;
count__40886_40908 = G__40920;
i__40887_40909 = G__40921;
continue;
} else {
var f_40922 = cljs.core.first.call(null,seq__40884_40916__$1);
cljs.core.println.call(null,"  ",f_40922);


var G__40923 = cljs.core.next.call(null,seq__40884_40916__$1);
var G__40924 = null;
var G__40925 = (0);
var G__40926 = (0);
seq__40884_40906 = G__40923;
chunk__40885_40907 = G__40924;
count__40886_40908 = G__40925;
i__40887_40909 = G__40926;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40927 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40927);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40927)))?cljs.core.second.call(null,arglists_40927):arglists_40927));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40888_40928 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40889_40929 = null;
var count__40890_40930 = (0);
var i__40891_40931 = (0);
while(true){
if((i__40891_40931 < count__40890_40930)){
var vec__40892_40932 = cljs.core._nth.call(null,chunk__40889_40929,i__40891_40931);
var name_40933 = cljs.core.nth.call(null,vec__40892_40932,(0),null);
var map__40895_40934 = cljs.core.nth.call(null,vec__40892_40932,(1),null);
var map__40895_40935__$1 = (((((!((map__40895_40934 == null))))?(((((map__40895_40934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40895_40934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40895_40934):map__40895_40934);
var doc_40936 = cljs.core.get.call(null,map__40895_40935__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40937 = cljs.core.get.call(null,map__40895_40935__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40933);

cljs.core.println.call(null," ",arglists_40937);

if(cljs.core.truth_(doc_40936)){
cljs.core.println.call(null," ",doc_40936);
} else {
}


var G__40938 = seq__40888_40928;
var G__40939 = chunk__40889_40929;
var G__40940 = count__40890_40930;
var G__40941 = (i__40891_40931 + (1));
seq__40888_40928 = G__40938;
chunk__40889_40929 = G__40939;
count__40890_40930 = G__40940;
i__40891_40931 = G__40941;
continue;
} else {
var temp__5457__auto___40942 = cljs.core.seq.call(null,seq__40888_40928);
if(temp__5457__auto___40942){
var seq__40888_40943__$1 = temp__5457__auto___40942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40888_40943__$1)){
var c__4461__auto___40944 = cljs.core.chunk_first.call(null,seq__40888_40943__$1);
var G__40945 = cljs.core.chunk_rest.call(null,seq__40888_40943__$1);
var G__40946 = c__4461__auto___40944;
var G__40947 = cljs.core.count.call(null,c__4461__auto___40944);
var G__40948 = (0);
seq__40888_40928 = G__40945;
chunk__40889_40929 = G__40946;
count__40890_40930 = G__40947;
i__40891_40931 = G__40948;
continue;
} else {
var vec__40897_40949 = cljs.core.first.call(null,seq__40888_40943__$1);
var name_40950 = cljs.core.nth.call(null,vec__40897_40949,(0),null);
var map__40900_40951 = cljs.core.nth.call(null,vec__40897_40949,(1),null);
var map__40900_40952__$1 = (((((!((map__40900_40951 == null))))?(((((map__40900_40951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40900_40951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40900_40951):map__40900_40951);
var doc_40953 = cljs.core.get.call(null,map__40900_40952__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40954 = cljs.core.get.call(null,map__40900_40952__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_40950);

cljs.core.println.call(null," ",arglists_40954);

if(cljs.core.truth_(doc_40953)){
cljs.core.println.call(null," ",doc_40953);
} else {
}


var G__40955 = cljs.core.next.call(null,seq__40888_40943__$1);
var G__40956 = null;
var G__40957 = (0);
var G__40958 = (0);
seq__40888_40928 = G__40955;
chunk__40889_40929 = G__40956;
count__40890_40930 = G__40957;
i__40891_40931 = G__40958;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__40902 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40903 = null;
var count__40904 = (0);
var i__40905 = (0);
while(true){
if((i__40905 < count__40904)){
var role = cljs.core._nth.call(null,chunk__40903,i__40905);
var temp__5457__auto___40959__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40959__$1)){
var spec_40960 = temp__5457__auto___40959__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40960));
} else {
}


var G__40961 = seq__40902;
var G__40962 = chunk__40903;
var G__40963 = count__40904;
var G__40964 = (i__40905 + (1));
seq__40902 = G__40961;
chunk__40903 = G__40962;
count__40904 = G__40963;
i__40905 = G__40964;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__40902);
if(temp__5457__auto____$1){
var seq__40902__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40902__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__40902__$1);
var G__40965 = cljs.core.chunk_rest.call(null,seq__40902__$1);
var G__40966 = c__4461__auto__;
var G__40967 = cljs.core.count.call(null,c__4461__auto__);
var G__40968 = (0);
seq__40902 = G__40965;
chunk__40903 = G__40966;
count__40904 = G__40967;
i__40905 = G__40968;
continue;
} else {
var role = cljs.core.first.call(null,seq__40902__$1);
var temp__5457__auto___40969__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40969__$2)){
var spec_40970 = temp__5457__auto___40969__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_40970));
} else {
}


var G__40971 = cljs.core.next.call(null,seq__40902__$1);
var G__40972 = null;
var G__40973 = (0);
var G__40974 = (0);
seq__40902 = G__40971;
chunk__40903 = G__40972;
count__40904 = G__40973;
i__40905 = G__40974;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1545662218813
