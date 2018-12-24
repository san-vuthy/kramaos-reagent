// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36237){
var map__36238 = p__36237;
var map__36238__$1 = (((((!((map__36238 == null))))?(((((map__36238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36238):map__36238);
var m = map__36238__$1;
var n = cljs.core.get.call(null,map__36238__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36238__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36240_36262 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36241_36263 = null;
var count__36242_36264 = (0);
var i__36243_36265 = (0);
while(true){
if((i__36243_36265 < count__36242_36264)){
var f_36266 = cljs.core._nth.call(null,chunk__36241_36263,i__36243_36265);
cljs.core.println.call(null,"  ",f_36266);


var G__36267 = seq__36240_36262;
var G__36268 = chunk__36241_36263;
var G__36269 = count__36242_36264;
var G__36270 = (i__36243_36265 + (1));
seq__36240_36262 = G__36267;
chunk__36241_36263 = G__36268;
count__36242_36264 = G__36269;
i__36243_36265 = G__36270;
continue;
} else {
var temp__5457__auto___36271 = cljs.core.seq.call(null,seq__36240_36262);
if(temp__5457__auto___36271){
var seq__36240_36272__$1 = temp__5457__auto___36271;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36240_36272__$1)){
var c__4461__auto___36273 = cljs.core.chunk_first.call(null,seq__36240_36272__$1);
var G__36274 = cljs.core.chunk_rest.call(null,seq__36240_36272__$1);
var G__36275 = c__4461__auto___36273;
var G__36276 = cljs.core.count.call(null,c__4461__auto___36273);
var G__36277 = (0);
seq__36240_36262 = G__36274;
chunk__36241_36263 = G__36275;
count__36242_36264 = G__36276;
i__36243_36265 = G__36277;
continue;
} else {
var f_36278 = cljs.core.first.call(null,seq__36240_36272__$1);
cljs.core.println.call(null,"  ",f_36278);


var G__36279 = cljs.core.next.call(null,seq__36240_36272__$1);
var G__36280 = null;
var G__36281 = (0);
var G__36282 = (0);
seq__36240_36262 = G__36279;
chunk__36241_36263 = G__36280;
count__36242_36264 = G__36281;
i__36243_36265 = G__36282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36283 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36283);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36283)))?cljs.core.second.call(null,arglists_36283):arglists_36283));
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
var seq__36244_36284 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36245_36285 = null;
var count__36246_36286 = (0);
var i__36247_36287 = (0);
while(true){
if((i__36247_36287 < count__36246_36286)){
var vec__36248_36288 = cljs.core._nth.call(null,chunk__36245_36285,i__36247_36287);
var name_36289 = cljs.core.nth.call(null,vec__36248_36288,(0),null);
var map__36251_36290 = cljs.core.nth.call(null,vec__36248_36288,(1),null);
var map__36251_36291__$1 = (((((!((map__36251_36290 == null))))?(((((map__36251_36290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36251_36290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36251_36290):map__36251_36290);
var doc_36292 = cljs.core.get.call(null,map__36251_36291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36293 = cljs.core.get.call(null,map__36251_36291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36289);

cljs.core.println.call(null," ",arglists_36293);

if(cljs.core.truth_(doc_36292)){
cljs.core.println.call(null," ",doc_36292);
} else {
}


var G__36294 = seq__36244_36284;
var G__36295 = chunk__36245_36285;
var G__36296 = count__36246_36286;
var G__36297 = (i__36247_36287 + (1));
seq__36244_36284 = G__36294;
chunk__36245_36285 = G__36295;
count__36246_36286 = G__36296;
i__36247_36287 = G__36297;
continue;
} else {
var temp__5457__auto___36298 = cljs.core.seq.call(null,seq__36244_36284);
if(temp__5457__auto___36298){
var seq__36244_36299__$1 = temp__5457__auto___36298;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36244_36299__$1)){
var c__4461__auto___36300 = cljs.core.chunk_first.call(null,seq__36244_36299__$1);
var G__36301 = cljs.core.chunk_rest.call(null,seq__36244_36299__$1);
var G__36302 = c__4461__auto___36300;
var G__36303 = cljs.core.count.call(null,c__4461__auto___36300);
var G__36304 = (0);
seq__36244_36284 = G__36301;
chunk__36245_36285 = G__36302;
count__36246_36286 = G__36303;
i__36247_36287 = G__36304;
continue;
} else {
var vec__36253_36305 = cljs.core.first.call(null,seq__36244_36299__$1);
var name_36306 = cljs.core.nth.call(null,vec__36253_36305,(0),null);
var map__36256_36307 = cljs.core.nth.call(null,vec__36253_36305,(1),null);
var map__36256_36308__$1 = (((((!((map__36256_36307 == null))))?(((((map__36256_36307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36256_36307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36256_36307):map__36256_36307);
var doc_36309 = cljs.core.get.call(null,map__36256_36308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36310 = cljs.core.get.call(null,map__36256_36308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36306);

cljs.core.println.call(null," ",arglists_36310);

if(cljs.core.truth_(doc_36309)){
cljs.core.println.call(null," ",doc_36309);
} else {
}


var G__36311 = cljs.core.next.call(null,seq__36244_36299__$1);
var G__36312 = null;
var G__36313 = (0);
var G__36314 = (0);
seq__36244_36284 = G__36311;
chunk__36245_36285 = G__36312;
count__36246_36286 = G__36313;
i__36247_36287 = G__36314;
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

var seq__36258 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36259 = null;
var count__36260 = (0);
var i__36261 = (0);
while(true){
if((i__36261 < count__36260)){
var role = cljs.core._nth.call(null,chunk__36259,i__36261);
var temp__5457__auto___36315__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36315__$1)){
var spec_36316 = temp__5457__auto___36315__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36316));
} else {
}


var G__36317 = seq__36258;
var G__36318 = chunk__36259;
var G__36319 = count__36260;
var G__36320 = (i__36261 + (1));
seq__36258 = G__36317;
chunk__36259 = G__36318;
count__36260 = G__36319;
i__36261 = G__36320;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36258);
if(temp__5457__auto____$1){
var seq__36258__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36258__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36258__$1);
var G__36321 = cljs.core.chunk_rest.call(null,seq__36258__$1);
var G__36322 = c__4461__auto__;
var G__36323 = cljs.core.count.call(null,c__4461__auto__);
var G__36324 = (0);
seq__36258 = G__36321;
chunk__36259 = G__36322;
count__36260 = G__36323;
i__36261 = G__36324;
continue;
} else {
var role = cljs.core.first.call(null,seq__36258__$1);
var temp__5457__auto___36325__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36325__$2)){
var spec_36326 = temp__5457__auto___36325__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36326));
} else {
}


var G__36327 = cljs.core.next.call(null,seq__36258__$1);
var G__36328 = null;
var G__36329 = (0);
var G__36330 = (0);
seq__36258 = G__36327;
chunk__36259 = G__36328;
count__36260 = G__36329;
i__36261 = G__36330;
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

//# sourceMappingURL=repl.js.map?rel=1545637596629
