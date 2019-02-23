// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__50832__delegate = function (x__50811__auto__){
if(cljs.core.truth_(kramaos.core.mount_root)){
return cljs.core.apply.call(null,kramaos.core.mount_root,x__50811__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("kramaos.core/mount-root"),"' is missing"].join(''));
}
};
var G__50832 = function (var_args){
var x__50811__auto__ = null;
if (arguments.length > 0) {
var G__50833__i = 0, G__50833__a = new Array(arguments.length -  0);
while (G__50833__i < G__50833__a.length) {G__50833__a[G__50833__i] = arguments[G__50833__i + 0]; ++G__50833__i;}
  x__50811__auto__ = new cljs.core.IndexedSeq(G__50833__a,0,null);
} 
return G__50832__delegate.call(this,x__50811__auto__);};
G__50832.cljs$lang$maxFixedArity = 0;
G__50832.cljs$lang$applyTo = (function (arglist__50834){
var x__50811__auto__ = cljs.core.seq(arglist__50834);
return G__50832__delegate(x__50811__auto__);
});
G__50832.cljs$core$IFn$_invoke$arity$variadic = G__50832__delegate;
return G__50832;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1547002190023
