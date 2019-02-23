// Compiled by ClojureScript 1.10.439 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37100__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37100 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37101__i = 0, G__37101__a = new Array(arguments.length -  0);
while (G__37101__i < G__37101__a.length) {G__37101__a[G__37101__i] = arguments[G__37101__i + 0]; ++G__37101__i;}
  args = new cljs.core.IndexedSeq(G__37101__a,0,null);
} 
return G__37100__delegate.call(this,args);};
G__37100.cljs$lang$maxFixedArity = 0;
G__37100.cljs$lang$applyTo = (function (arglist__37102){
var args = cljs.core.seq(arglist__37102);
return G__37100__delegate(args);
});
G__37100.cljs$core$IFn$_invoke$arity$variadic = G__37100__delegate;
return G__37100;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37103__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__37103 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37104__i = 0, G__37104__a = new Array(arguments.length -  0);
while (G__37104__i < G__37104__a.length) {G__37104__a[G__37104__i] = arguments[G__37104__i + 0]; ++G__37104__i;}
  args = new cljs.core.IndexedSeq(G__37104__a,0,null);
} 
return G__37103__delegate.call(this,args);};
G__37103.cljs$lang$maxFixedArity = 0;
G__37103.cljs$lang$applyTo = (function (arglist__37105){
var args = cljs.core.seq(arglist__37105);
return G__37103__delegate(args);
});
G__37103.cljs$core$IFn$_invoke$arity$variadic = G__37103__delegate;
return G__37103;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1547002161055
