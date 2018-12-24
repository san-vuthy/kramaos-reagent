// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Returns a cursor from the state atom.
 */
reagent.session.cursor = (function reagent$session$cursor(ks){
return reagent.core.cursor.call(null,reagent.session.state,ks);
});
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33555 = arguments.length;
var i__4642__auto___33556 = (0);
while(true){
if((i__4642__auto___33556 < len__4641__auto___33555)){
args__4647__auto__.push((arguments[i__4642__auto___33556]));

var G__33557 = (i__4642__auto___33556 + (1));
i__4642__auto___33556 = G__33557;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33551){
var vec__33552 = p__33551;
var default$ = cljs.core.nth.call(null,vec__33552,(0),null);
var temp_a = reagent.session.cursor.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
if((!((cljs.core.deref.call(null,temp_a) == null)))){
return cljs.core.deref.call(null,temp_a);
} else {
return default$;
}
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get.cljs$lang$applyTo = (function (seq33549){
var G__33550 = cljs.core.first.call(null,seq33549);
var seq33549__$1 = cljs.core.next.call(null,seq33549);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33550,seq33549__$1);
});

reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33564 = arguments.length;
var i__4642__auto___33565 = (0);
while(true){
if((i__4642__auto___33565 < len__4641__auto___33564)){
args__4647__auto__.push((arguments[i__4642__auto___33565]));

var G__33566 = (i__4642__auto___33565 + (1));
i__4642__auto___33565 = G__33566;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33560){
var vec__33561 = p__33560;
var default$ = cljs.core.nth.call(null,vec__33561,(0),null);
var or__4047__auto__ = cljs.core.deref.call(null,reagent.session.cursor.call(null,ks));
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return default$;
}
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in.cljs$lang$applyTo = (function (seq33558){
var G__33559 = cljs.core.first.call(null,seq33558);
var seq33558__$1 = cljs.core.next.call(null,seq33558);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33559,seq33558__$1);
});

/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33569 = arguments.length;
var i__4642__auto___33570 = (0);
while(true){
if((i__4642__auto___33570 < len__4641__auto___33569)){
args__4647__auto__.push((arguments[i__4642__auto___33570]));

var G__33571 = (i__4642__auto___33570 + (1));
i__4642__auto___33570 = G__33571;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq33567){
var G__33568 = cljs.core.first.call(null,seq33567);
var seq33567__$1 = cljs.core.next.call(null,seq33567);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33568,seq33567__$1);
});

/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc_in,ks,v);
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33578 = arguments.length;
var i__4642__auto___33579 = (0);
while(true){
if((i__4642__auto___33579 < len__4641__auto___33578)){
args__4647__auto__.push((arguments[i__4642__auto___33579]));

var G__33580 = (i__4642__auto___33579 + (1));
i__4642__auto___33579 = G__33580;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__33574){
var vec__33575 = p__33574;
var default$ = cljs.core.nth.call(null,vec__33575,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq33572){
var G__33573 = cljs.core.first.call(null,seq33572);
var seq33572__$1 = cljs.core.next.call(null,seq33572);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33573,seq33572__$1);
});

/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33587 = arguments.length;
var i__4642__auto___33588 = (0);
while(true){
if((i__4642__auto___33588 < len__4641__auto___33587)){
args__4647__auto__.push((arguments[i__4642__auto___33588]));

var G__33589 = (i__4642__auto___33588 + (1));
i__4642__auto___33588 = G__33589;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__33583){
var vec__33584 = p__33583;
var default$ = cljs.core.nth.call(null,vec__33584,(0),null);
var cur = reagent.session.get_in.call(null,ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq33581){
var G__33582 = cljs.core.first.call(null,seq33581);
var seq33581__$1 = cljs.core.next.call(null,seq33581);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33582,seq33581__$1);
});

/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33594 = arguments.length;
var i__4642__auto___33595 = (0);
while(true){
if((i__4642__auto___33595 < len__4641__auto___33594)){
args__4647__auto__.push((arguments[i__4642__auto___33595]));

var G__33596 = (i__4642__auto___33595 + (1));
i__4642__auto___33595 = G__33596;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33590_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__33590_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq33591){
var G__33592 = cljs.core.first.call(null,seq33591);
var seq33591__$1 = cljs.core.next.call(null,seq33591);
var G__33593 = cljs.core.first.call(null,seq33591__$1);
var seq33591__$2 = cljs.core.next.call(null,seq33591__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33592,G__33593,seq33591__$2);
});

/**
 * Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___33601 = arguments.length;
var i__4642__auto___33602 = (0);
while(true){
if((i__4642__auto___33602 < len__4641__auto___33601)){
args__4647__auto__.push((arguments[i__4642__auto___33602]));

var G__33603 = (i__4642__auto___33602 + (1));
i__4642__auto___33602 = G__33603;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((2) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((2)),(0),null)):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4648__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__33597_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__33597_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq33598){
var G__33599 = cljs.core.first.call(null,seq33598);
var seq33598__$1 = cljs.core.next.call(null,seq33598);
var G__33600 = cljs.core.first.call(null,seq33598__$1);
var seq33598__$2 = cljs.core.next.call(null,seq33598__$1);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33599,G__33600,seq33598__$2);
});


//# sourceMappingURL=session.js.map?rel=1545637589836
