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
var G__33146__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33147__i = 0, G__33147__a = new Array(arguments.length -  0);
while (G__33147__i < G__33147__a.length) {G__33147__a[G__33147__i] = arguments[G__33147__i + 0]; ++G__33147__i;}
  args = new cljs.core.IndexedSeq(G__33147__a,0,null);
} 
return G__33146__delegate.call(this,args);};
G__33146.cljs$lang$maxFixedArity = 0;
G__33146.cljs$lang$applyTo = (function (arglist__33148){
var args = cljs.core.seq(arglist__33148);
return G__33146__delegate(args);
});
G__33146.cljs$core$IFn$_invoke$arity$variadic = G__33146__delegate;
return G__33146;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33149__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__33149 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33150__i = 0, G__33150__a = new Array(arguments.length -  0);
while (G__33150__i < G__33150__a.length) {G__33150__a[G__33150__i] = arguments[G__33150__i + 0]; ++G__33150__i;}
  args = new cljs.core.IndexedSeq(G__33150__a,0,null);
} 
return G__33149__delegate.call(this,args);};
G__33149.cljs$lang$maxFixedArity = 0;
G__33149.cljs$lang$applyTo = (function (arglist__33151){
var args = cljs.core.seq(arglist__33151);
return G__33149__delegate(args);
});
G__33149.cljs$core$IFn$_invoke$arity$variadic = G__33149__delegate;
return G__33149;
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

//# sourceMappingURL=debug.js.map?rel=1545662207765
