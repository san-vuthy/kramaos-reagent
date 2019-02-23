// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49344){
var map__49345 = p__49344;
var map__49345__$1 = (((((!((map__49345 == null))))?(((((map__49345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49345):map__49345);
var m = map__49345__$1;
var n = cljs.core.get.call(null,map__49345__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49345__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__49347_49369 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49348_49370 = null;
var count__49349_49371 = (0);
var i__49350_49372 = (0);
while(true){
if((i__49350_49372 < count__49349_49371)){
var f_49373 = cljs.core._nth.call(null,chunk__49348_49370,i__49350_49372);
cljs.core.println.call(null,"  ",f_49373);


var G__49374 = seq__49347_49369;
var G__49375 = chunk__49348_49370;
var G__49376 = count__49349_49371;
var G__49377 = (i__49350_49372 + (1));
seq__49347_49369 = G__49374;
chunk__49348_49370 = G__49375;
count__49349_49371 = G__49376;
i__49350_49372 = G__49377;
continue;
} else {
var temp__5457__auto___49378 = cljs.core.seq.call(null,seq__49347_49369);
if(temp__5457__auto___49378){
var seq__49347_49379__$1 = temp__5457__auto___49378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49347_49379__$1)){
var c__4461__auto___49380 = cljs.core.chunk_first.call(null,seq__49347_49379__$1);
var G__49381 = cljs.core.chunk_rest.call(null,seq__49347_49379__$1);
var G__49382 = c__4461__auto___49380;
var G__49383 = cljs.core.count.call(null,c__4461__auto___49380);
var G__49384 = (0);
seq__49347_49369 = G__49381;
chunk__49348_49370 = G__49382;
count__49349_49371 = G__49383;
i__49350_49372 = G__49384;
continue;
} else {
var f_49385 = cljs.core.first.call(null,seq__49347_49379__$1);
cljs.core.println.call(null,"  ",f_49385);


var G__49386 = cljs.core.next.call(null,seq__49347_49379__$1);
var G__49387 = null;
var G__49388 = (0);
var G__49389 = (0);
seq__49347_49369 = G__49386;
chunk__49348_49370 = G__49387;
count__49349_49371 = G__49388;
i__49350_49372 = G__49389;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49390 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49390);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49390)))?cljs.core.second.call(null,arglists_49390):arglists_49390));
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
var seq__49351_49391 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49352_49392 = null;
var count__49353_49393 = (0);
var i__49354_49394 = (0);
while(true){
if((i__49354_49394 < count__49353_49393)){
var vec__49355_49395 = cljs.core._nth.call(null,chunk__49352_49392,i__49354_49394);
var name_49396 = cljs.core.nth.call(null,vec__49355_49395,(0),null);
var map__49358_49397 = cljs.core.nth.call(null,vec__49355_49395,(1),null);
var map__49358_49398__$1 = (((((!((map__49358_49397 == null))))?(((((map__49358_49397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49358_49397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49358_49397):map__49358_49397);
var doc_49399 = cljs.core.get.call(null,map__49358_49398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49400 = cljs.core.get.call(null,map__49358_49398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49396);

cljs.core.println.call(null," ",arglists_49400);

if(cljs.core.truth_(doc_49399)){
cljs.core.println.call(null," ",doc_49399);
} else {
}


var G__49401 = seq__49351_49391;
var G__49402 = chunk__49352_49392;
var G__49403 = count__49353_49393;
var G__49404 = (i__49354_49394 + (1));
seq__49351_49391 = G__49401;
chunk__49352_49392 = G__49402;
count__49353_49393 = G__49403;
i__49354_49394 = G__49404;
continue;
} else {
var temp__5457__auto___49405 = cljs.core.seq.call(null,seq__49351_49391);
if(temp__5457__auto___49405){
var seq__49351_49406__$1 = temp__5457__auto___49405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49351_49406__$1)){
var c__4461__auto___49407 = cljs.core.chunk_first.call(null,seq__49351_49406__$1);
var G__49408 = cljs.core.chunk_rest.call(null,seq__49351_49406__$1);
var G__49409 = c__4461__auto___49407;
var G__49410 = cljs.core.count.call(null,c__4461__auto___49407);
var G__49411 = (0);
seq__49351_49391 = G__49408;
chunk__49352_49392 = G__49409;
count__49353_49393 = G__49410;
i__49354_49394 = G__49411;
continue;
} else {
var vec__49360_49412 = cljs.core.first.call(null,seq__49351_49406__$1);
var name_49413 = cljs.core.nth.call(null,vec__49360_49412,(0),null);
var map__49363_49414 = cljs.core.nth.call(null,vec__49360_49412,(1),null);
var map__49363_49415__$1 = (((((!((map__49363_49414 == null))))?(((((map__49363_49414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49363_49414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49363_49414):map__49363_49414);
var doc_49416 = cljs.core.get.call(null,map__49363_49415__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49417 = cljs.core.get.call(null,map__49363_49415__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49413);

cljs.core.println.call(null," ",arglists_49417);

if(cljs.core.truth_(doc_49416)){
cljs.core.println.call(null," ",doc_49416);
} else {
}


var G__49418 = cljs.core.next.call(null,seq__49351_49406__$1);
var G__49419 = null;
var G__49420 = (0);
var G__49421 = (0);
seq__49351_49391 = G__49418;
chunk__49352_49392 = G__49419;
count__49353_49393 = G__49420;
i__49354_49394 = G__49421;
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

var seq__49365 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49366 = null;
var count__49367 = (0);
var i__49368 = (0);
while(true){
if((i__49368 < count__49367)){
var role = cljs.core._nth.call(null,chunk__49366,i__49368);
var temp__5457__auto___49422__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49422__$1)){
var spec_49423 = temp__5457__auto___49422__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49423));
} else {
}


var G__49424 = seq__49365;
var G__49425 = chunk__49366;
var G__49426 = count__49367;
var G__49427 = (i__49368 + (1));
seq__49365 = G__49424;
chunk__49366 = G__49425;
count__49367 = G__49426;
i__49368 = G__49427;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__49365);
if(temp__5457__auto____$1){
var seq__49365__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49365__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__49365__$1);
var G__49428 = cljs.core.chunk_rest.call(null,seq__49365__$1);
var G__49429 = c__4461__auto__;
var G__49430 = cljs.core.count.call(null,c__4461__auto__);
var G__49431 = (0);
seq__49365 = G__49428;
chunk__49366 = G__49429;
count__49367 = G__49430;
i__49368 = G__49431;
continue;
} else {
var role = cljs.core.first.call(null,seq__49365__$1);
var temp__5457__auto___49432__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49432__$2)){
var spec_49433 = temp__5457__auto___49432__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49433));
} else {
}


var G__49434 = cljs.core.next.call(null,seq__49365__$1);
var G__49435 = null;
var G__49436 = (0);
var G__49437 = (0);
seq__49365 = G__49434;
chunk__49366 = G__49435;
count__49367 = G__49436;
i__49368 = G__49437;
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

//# sourceMappingURL=repl.js.map?rel=1547002188106
