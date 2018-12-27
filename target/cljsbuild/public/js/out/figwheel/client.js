// Compiled by ClojureScript 1.10.439 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.17";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
<<<<<<< HEAD
}catch (e42476){if((e42476 instanceof Error)){
var e = e42476;
return "Error: Unable to stringify";
} else {
throw e42476;
=======
}catch (e50416){if((e50416 instanceof Error)){
var e = e50416;
return "Error: Unable to stringify";
} else {
throw e50416;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
<<<<<<< HEAD
var G__42479 = arguments.length;
switch (G__42479) {
=======
var G__50419 = arguments.length;
switch (G__50419) {
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
<<<<<<< HEAD
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42477_SHARP_){
if(typeof p1__42477_SHARP_ === 'string'){
return p1__42477_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42477_SHARP_);
=======
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50417_SHARP_){
if(typeof p1__50417_SHARP_ === 'string'){
return p1__50417_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50417_SHARP_);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4647__auto__ = [];
<<<<<<< HEAD
var len__4641__auto___42482 = arguments.length;
var i__4642__auto___42483 = (0);
while(true){
if((i__4642__auto___42483 < len__4641__auto___42482)){
args__4647__auto__.push((arguments[i__4642__auto___42483]));

var G__42484 = (i__4642__auto___42483 + (1));
i__4642__auto___42483 = G__42484;
=======
var len__4641__auto___50422 = arguments.length;
var i__4642__auto___50423 = (0);
while(true){
if((i__4642__auto___50423 < len__4641__auto___50422)){
args__4647__auto__.push((arguments[i__4642__auto___50423]));

var G__50424 = (i__4642__auto___50423 + (1));
i__4642__auto___50423 = G__50424;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42481){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42481));
=======
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50421){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50421));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
<<<<<<< HEAD
var len__4641__auto___42486 = arguments.length;
var i__4642__auto___42487 = (0);
while(true){
if((i__4642__auto___42487 < len__4641__auto___42486)){
args__4647__auto__.push((arguments[i__4642__auto___42487]));

var G__42488 = (i__4642__auto___42487 + (1));
i__4642__auto___42487 = G__42488;
=======
var len__4641__auto___50426 = arguments.length;
var i__4642__auto___50427 = (0);
while(true){
if((i__4642__auto___50427 < len__4641__auto___50426)){
args__4647__auto__.push((arguments[i__4642__auto___50427]));

var G__50428 = (i__4642__auto___50427 + (1));
i__4642__auto___50427 = G__50428;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42485){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42485));
=======
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50425){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50425));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
<<<<<<< HEAD
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42489){
var map__42490 = p__42489;
var map__42490__$1 = (((((!((map__42490 == null))))?(((((map__42490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42490):map__42490);
var message = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42490__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
=======
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50429){
var map__50430 = p__50429;
var map__50430__$1 = (((((!((map__50430 == null))))?(((((map__50430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50430):map__50430);
var message = cljs.core.get.call(null,map__50430__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50430__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4047__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4036__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4036__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4036__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
<<<<<<< HEAD
var c__27910__auto___42569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto___42569,ch){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto___42569,ch){
return (function (state_42541){
var state_val_42542 = (state_42541[(1)]);
if((state_val_42542 === (7))){
var inst_42537 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42543_42570 = state_42541__$1;
(statearr_42543_42570[(2)] = inst_42537);

(statearr_42543_42570[(1)] = (3));
=======
var c__33157__auto___50509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___50509,ch){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___50509,ch){
return (function (state_50481){
var state_val_50482 = (state_50481[(1)]);
if((state_val_50482 === (7))){
var inst_50477 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
var statearr_50483_50510 = state_50481__$1;
(statearr_50483_50510[(2)] = inst_50477);

(statearr_50483_50510[(1)] = (3));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (1))){
var state_42541__$1 = state_42541;
var statearr_42544_42571 = state_42541__$1;
(statearr_42544_42571[(2)] = null);

(statearr_42544_42571[(1)] = (2));
=======
if((state_val_50482 === (1))){
var state_50481__$1 = state_50481;
var statearr_50484_50511 = state_50481__$1;
(statearr_50484_50511[(2)] = null);

(statearr_50484_50511[(1)] = (2));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (4))){
var inst_42494 = (state_42541[(7)]);
var inst_42494__$1 = (state_42541[(2)]);
var state_42541__$1 = (function (){var statearr_42545 = state_42541;
(statearr_42545[(7)] = inst_42494__$1);

return statearr_42545;
})();
if(cljs.core.truth_(inst_42494__$1)){
var statearr_42546_42572 = state_42541__$1;
(statearr_42546_42572[(1)] = (5));

} else {
var statearr_42547_42573 = state_42541__$1;
(statearr_42547_42573[(1)] = (6));
=======
if((state_val_50482 === (4))){
var inst_50434 = (state_50481[(7)]);
var inst_50434__$1 = (state_50481[(2)]);
var state_50481__$1 = (function (){var statearr_50485 = state_50481;
(statearr_50485[(7)] = inst_50434__$1);

return statearr_50485;
})();
if(cljs.core.truth_(inst_50434__$1)){
var statearr_50486_50512 = state_50481__$1;
(statearr_50486_50512[(1)] = (5));

} else {
var statearr_50487_50513 = state_50481__$1;
(statearr_50487_50513[(1)] = (6));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (15))){
var inst_42501 = (state_42541[(8)]);
var inst_42516 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42501);
var inst_42517 = cljs.core.first.call(null,inst_42516);
var inst_42518 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42517);
var inst_42519 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42518)].join('');
var inst_42520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42519);
var state_42541__$1 = state_42541;
var statearr_42548_42574 = state_42541__$1;
(statearr_42548_42574[(2)] = inst_42520);

(statearr_42548_42574[(1)] = (17));
=======
if((state_val_50482 === (15))){
var inst_50441 = (state_50481[(8)]);
var inst_50456 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50441);
var inst_50457 = cljs.core.first.call(null,inst_50456);
var inst_50458 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50457);
var inst_50459 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50458)].join('');
var inst_50460 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50459);
var state_50481__$1 = state_50481;
var statearr_50488_50514 = state_50481__$1;
(statearr_50488_50514[(2)] = inst_50460);

(statearr_50488_50514[(1)] = (17));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (13))){
var inst_42525 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42549_42575 = state_42541__$1;
(statearr_42549_42575[(2)] = inst_42525);

(statearr_42549_42575[(1)] = (10));
=======
if((state_val_50482 === (13))){
var inst_50465 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
var statearr_50489_50515 = state_50481__$1;
(statearr_50489_50515[(2)] = inst_50465);

(statearr_50489_50515[(1)] = (10));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (6))){
var state_42541__$1 = state_42541;
var statearr_42550_42576 = state_42541__$1;
(statearr_42550_42576[(2)] = null);

(statearr_42550_42576[(1)] = (7));
=======
if((state_val_50482 === (6))){
var state_50481__$1 = state_50481;
var statearr_50490_50516 = state_50481__$1;
(statearr_50490_50516[(2)] = null);

(statearr_50490_50516[(1)] = (7));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (17))){
var inst_42523 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42551_42577 = state_42541__$1;
(statearr_42551_42577[(2)] = inst_42523);

(statearr_42551_42577[(1)] = (13));
=======
if((state_val_50482 === (17))){
var inst_50463 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
var statearr_50491_50517 = state_50481__$1;
(statearr_50491_50517[(2)] = inst_50463);

(statearr_50491_50517[(1)] = (13));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (3))){
var inst_42539 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42541__$1,inst_42539);
} else {
if((state_val_42542 === (12))){
var inst_42500 = (state_42541[(9)]);
var inst_42514 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42500,opts);
var state_42541__$1 = state_42541;
if(inst_42514){
var statearr_42552_42578 = state_42541__$1;
(statearr_42552_42578[(1)] = (15));

} else {
var statearr_42553_42579 = state_42541__$1;
(statearr_42553_42579[(1)] = (16));
=======
if((state_val_50482 === (3))){
var inst_50479 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50481__$1,inst_50479);
} else {
if((state_val_50482 === (12))){
var inst_50440 = (state_50481[(9)]);
var inst_50454 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50440,opts);
var state_50481__$1 = state_50481;
if(inst_50454){
var statearr_50492_50518 = state_50481__$1;
(statearr_50492_50518[(1)] = (15));

} else {
var statearr_50493_50519 = state_50481__$1;
(statearr_50493_50519[(1)] = (16));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (2))){
var state_42541__$1 = state_42541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42541__$1,(4),ch);
} else {
if((state_val_42542 === (11))){
var inst_42501 = (state_42541[(8)]);
var inst_42506 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42507 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42501);
var inst_42508 = cljs.core.async.timeout.call(null,(1000));
var inst_42509 = [inst_42507,inst_42508];
var inst_42510 = (new cljs.core.PersistentVector(null,2,(5),inst_42506,inst_42509,null));
var state_42541__$1 = state_42541;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42541__$1,(14),inst_42510);
} else {
if((state_val_42542 === (9))){
var inst_42501 = (state_42541[(8)]);
var inst_42527 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42528 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42501);
var inst_42529 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42528);
var inst_42530 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42529)].join('');
var inst_42531 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42530);
var state_42541__$1 = (function (){var statearr_42554 = state_42541;
(statearr_42554[(10)] = inst_42527);

return statearr_42554;
})();
var statearr_42555_42580 = state_42541__$1;
(statearr_42555_42580[(2)] = inst_42531);

(statearr_42555_42580[(1)] = (10));
=======
if((state_val_50482 === (2))){
var state_50481__$1 = state_50481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50481__$1,(4),ch);
} else {
if((state_val_50482 === (11))){
var inst_50441 = (state_50481[(8)]);
var inst_50446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50447 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50441);
var inst_50448 = cljs.core.async.timeout.call(null,(1000));
var inst_50449 = [inst_50447,inst_50448];
var inst_50450 = (new cljs.core.PersistentVector(null,2,(5),inst_50446,inst_50449,null));
var state_50481__$1 = state_50481;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50481__$1,(14),inst_50450);
} else {
if((state_val_50482 === (9))){
var inst_50441 = (state_50481[(8)]);
var inst_50467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50468 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50441);
var inst_50469 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50468);
var inst_50470 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50469)].join('');
var inst_50471 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50470);
var state_50481__$1 = (function (){var statearr_50494 = state_50481;
(statearr_50494[(10)] = inst_50467);

return statearr_50494;
})();
var statearr_50495_50520 = state_50481__$1;
(statearr_50495_50520[(2)] = inst_50471);

(statearr_50495_50520[(1)] = (10));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (5))){
var inst_42494 = (state_42541[(7)]);
var inst_42496 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42497 = (new cljs.core.PersistentArrayMap(null,2,inst_42496,null));
var inst_42498 = (new cljs.core.PersistentHashSet(null,inst_42497,null));
var inst_42499 = figwheel.client.focus_msgs.call(null,inst_42498,inst_42494);
var inst_42500 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42499);
var inst_42501 = cljs.core.first.call(null,inst_42499);
var inst_42502 = figwheel.client.autoload_QMARK_.call(null);
var state_42541__$1 = (function (){var statearr_42556 = state_42541;
(statearr_42556[(9)] = inst_42500);

(statearr_42556[(8)] = inst_42501);

return statearr_42556;
})();
if(cljs.core.truth_(inst_42502)){
var statearr_42557_42581 = state_42541__$1;
(statearr_42557_42581[(1)] = (8));

} else {
var statearr_42558_42582 = state_42541__$1;
(statearr_42558_42582[(1)] = (9));
=======
if((state_val_50482 === (5))){
var inst_50434 = (state_50481[(7)]);
var inst_50436 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50437 = (new cljs.core.PersistentArrayMap(null,2,inst_50436,null));
var inst_50438 = (new cljs.core.PersistentHashSet(null,inst_50437,null));
var inst_50439 = figwheel.client.focus_msgs.call(null,inst_50438,inst_50434);
var inst_50440 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50439);
var inst_50441 = cljs.core.first.call(null,inst_50439);
var inst_50442 = figwheel.client.autoload_QMARK_.call(null);
var state_50481__$1 = (function (){var statearr_50496 = state_50481;
(statearr_50496[(8)] = inst_50441);

(statearr_50496[(9)] = inst_50440);

return statearr_50496;
})();
if(cljs.core.truth_(inst_50442)){
var statearr_50497_50521 = state_50481__$1;
(statearr_50497_50521[(1)] = (8));

} else {
var statearr_50498_50522 = state_50481__$1;
(statearr_50498_50522[(1)] = (9));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (14))){
var inst_42512 = (state_42541[(2)]);
var state_42541__$1 = state_42541;
var statearr_42559_42583 = state_42541__$1;
(statearr_42559_42583[(2)] = inst_42512);

(statearr_42559_42583[(1)] = (13));
=======
if((state_val_50482 === (14))){
var inst_50452 = (state_50481[(2)]);
var state_50481__$1 = state_50481;
var statearr_50499_50523 = state_50481__$1;
(statearr_50499_50523[(2)] = inst_50452);

(statearr_50499_50523[(1)] = (13));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (16))){
var state_42541__$1 = state_42541;
var statearr_42560_42584 = state_42541__$1;
(statearr_42560_42584[(2)] = null);

(statearr_42560_42584[(1)] = (17));
=======
if((state_val_50482 === (16))){
var state_50481__$1 = state_50481;
var statearr_50500_50524 = state_50481__$1;
(statearr_50500_50524[(2)] = null);

(statearr_50500_50524[(1)] = (17));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (10))){
var inst_42533 = (state_42541[(2)]);
var state_42541__$1 = (function (){var statearr_42561 = state_42541;
(statearr_42561[(11)] = inst_42533);

return statearr_42561;
})();
var statearr_42562_42585 = state_42541__$1;
(statearr_42562_42585[(2)] = null);

(statearr_42562_42585[(1)] = (2));
=======
if((state_val_50482 === (10))){
var inst_50473 = (state_50481[(2)]);
var state_50481__$1 = (function (){var statearr_50501 = state_50481;
(statearr_50501[(11)] = inst_50473);

return statearr_50501;
})();
var statearr_50502_50525 = state_50481__$1;
(statearr_50502_50525[(2)] = null);

(statearr_50502_50525[(1)] = (2));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42542 === (8))){
var inst_42500 = (state_42541[(9)]);
var inst_42504 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42500,opts);
var state_42541__$1 = state_42541;
if(cljs.core.truth_(inst_42504)){
var statearr_42563_42586 = state_42541__$1;
(statearr_42563_42586[(1)] = (11));

} else {
var statearr_42564_42587 = state_42541__$1;
(statearr_42564_42587[(1)] = (12));
=======
if((state_val_50482 === (8))){
var inst_50440 = (state_50481[(9)]);
var inst_50444 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50440,opts);
var state_50481__$1 = state_50481;
if(cljs.core.truth_(inst_50444)){
var statearr_50503_50526 = state_50481__$1;
(statearr_50503_50526[(1)] = (11));

} else {
var statearr_50504_50527 = state_50481__$1;
(statearr_50504_50527[(1)] = (12));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

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
<<<<<<< HEAD
});})(c__27910__auto___42569,ch))
;
return ((function (switch__27887__auto__,c__27910__auto___42569,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_42565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42565[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__);

(statearr_42565[(1)] = (1));

return statearr_42565;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1 = (function (state_42541){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_42541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e42566){if((e42566 instanceof Object)){
var ex__27891__auto__ = e42566;
var statearr_42567_42588 = state_42541;
(statearr_42567_42588[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42589 = state_42541;
state_42541 = G__42589;
continue;
} else {
return ret_value__27889__auto__;
=======
});})(c__33157__auto___50509,ch))
;
return ((function (switch__32990__auto__,c__33157__auto___50509,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50505 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50505[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__);

(statearr_50505[(1)] = (1));

return statearr_50505;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1 = (function (state_50481){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50506){if((e50506 instanceof Object)){
var ex__32994__auto__ = e50506;
var statearr_50507_50528 = state_50481;
(statearr_50507_50528[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50529 = state_50481;
state_50481 = G__50529;
continue;
} else {
return ret_value__32992__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
break;
}
});
<<<<<<< HEAD
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = function(state_42541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1.call(this,state_42541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto___42569,ch))
})();
var state__27912__auto__ = (function (){var statearr_42568 = f__27911__auto__.call(null);
(statearr_42568[(6)] = c__27910__auto___42569);

return statearr_42568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto___42569,ch))
=======
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__ = function(state_50481){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1.call(this,state_50481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___50509,ch))
})();
var state__33159__auto__ = (function (){var statearr_50508 = f__33158__auto__.call(null);
(statearr_50508[(6)] = c__33157__auto___50509);

return statearr_50508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___50509,ch))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
<<<<<<< HEAD
return cljs.core.take_while.call(null,(function (p1__42590_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42590_SHARP_));
=======
return cljs.core.take_while.call(null,(function (p1__50530_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50530_SHARP_));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
<<<<<<< HEAD
var base_path_42596 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42596){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42592 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42593 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42594 = true;
var _STAR_print_fn_STAR__temp_val__42595 = ((function (_STAR_print_newline_STAR__orig_val__42592,_STAR_print_fn_STAR__orig_val__42593,_STAR_print_newline_STAR__temp_val__42594,sb,base_path_42596){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__42592,_STAR_print_fn_STAR__orig_val__42593,_STAR_print_newline_STAR__temp_val__42594,sb,base_path_42596))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42594;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42595;
=======
var base_path_50536 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50536){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50532 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50533 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50534 = true;
var _STAR_print_fn_STAR__temp_val__50535 = ((function (_STAR_print_newline_STAR__orig_val__50532,_STAR_print_fn_STAR__orig_val__50533,_STAR_print_newline_STAR__temp_val__50534,sb,base_path_50536){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__50532,_STAR_print_fn_STAR__orig_val__50533,_STAR_print_newline_STAR__temp_val__50534,sb,base_path_50536))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50534;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50535;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
<<<<<<< HEAD
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42593;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42592;
}}catch (e42591){if((e42591 instanceof Error)){
var e = e42591;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42596], null));
} else {
var e = e42591;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42596))
=======
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50533;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50532;
}}catch (e50531){if((e50531 instanceof Error)){
var e = e50531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50536], null));
} else {
var e = e50531;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_50536))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
<<<<<<< HEAD
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42597){
var map__42598 = p__42597;
var map__42598__$1 = (((((!((map__42598 == null))))?(((((map__42598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42598):map__42598);
var opts = map__42598__$1;
var build_id = cljs.core.get.call(null,map__42598__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42598,map__42598__$1,opts,build_id){
return (function (p__42600){
var vec__42601 = p__42600;
var seq__42602 = cljs.core.seq.call(null,vec__42601);
var first__42603 = cljs.core.first.call(null,seq__42602);
var seq__42602__$1 = cljs.core.next.call(null,seq__42602);
var map__42604 = first__42603;
var map__42604__$1 = (((((!((map__42604 == null))))?(((((map__42604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42604):map__42604);
var msg = map__42604__$1;
var msg_name = cljs.core.get.call(null,map__42604__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42602__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42601,seq__42602,first__42603,seq__42602__$1,map__42604,map__42604__$1,msg,msg_name,_,map__42598,map__42598__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42601,seq__42602,first__42603,seq__42602__$1,map__42604,map__42604__$1,msg,msg_name,_,map__42598,map__42598__$1,opts,build_id))
=======
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50537){
var map__50538 = p__50537;
var map__50538__$1 = (((((!((map__50538 == null))))?(((((map__50538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50538):map__50538);
var opts = map__50538__$1;
var build_id = cljs.core.get.call(null,map__50538__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50538,map__50538__$1,opts,build_id){
return (function (p__50540){
var vec__50541 = p__50540;
var seq__50542 = cljs.core.seq.call(null,vec__50541);
var first__50543 = cljs.core.first.call(null,seq__50542);
var seq__50542__$1 = cljs.core.next.call(null,seq__50542);
var map__50544 = first__50543;
var map__50544__$1 = (((((!((map__50544 == null))))?(((((map__50544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50544):map__50544);
var msg = map__50544__$1;
var msg_name = cljs.core.get.call(null,map__50544__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50542__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50541,seq__50542,first__50543,seq__50542__$1,map__50544,map__50544__$1,msg,msg_name,_,map__50538,map__50538__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50541,seq__50542,first__50543,seq__50542__$1,map__50544,map__50544__$1,msg,msg_name,_,map__50538,map__50538__$1,opts,build_id))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
);
} else {
return null;
}
});
<<<<<<< HEAD
;})(map__42598,map__42598__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42606){
var vec__42607 = p__42606;
var seq__42608 = cljs.core.seq.call(null,vec__42607);
var first__42609 = cljs.core.first.call(null,seq__42608);
var seq__42608__$1 = cljs.core.next.call(null,seq__42608);
var map__42610 = first__42609;
var map__42610__$1 = (((((!((map__42610 == null))))?(((((map__42610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42610):map__42610);
var msg = map__42610__$1;
var msg_name = cljs.core.get.call(null,map__42610__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42608__$1;
=======
;})(map__50538,map__50538__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50546){
var vec__50547 = p__50546;
var seq__50548 = cljs.core.seq.call(null,vec__50547);
var first__50549 = cljs.core.first.call(null,seq__50548);
var seq__50548__$1 = cljs.core.next.call(null,seq__50548);
var map__50550 = first__50549;
var map__50550__$1 = (((((!((map__50550 == null))))?(((((map__50550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50550):map__50550);
var msg = map__50550__$1;
var msg_name = cljs.core.get.call(null,map__50550__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50548__$1;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
<<<<<<< HEAD
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42612){
var map__42613 = p__42612;
var map__42613__$1 = (((((!((map__42613 == null))))?(((((map__42613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42613):map__42613);
var on_compile_warning = cljs.core.get.call(null,map__42613__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42613__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42613,map__42613__$1,on_compile_warning,on_compile_fail){
return (function (p__42615){
var vec__42616 = p__42615;
var seq__42617 = cljs.core.seq.call(null,vec__42616);
var first__42618 = cljs.core.first.call(null,seq__42617);
var seq__42617__$1 = cljs.core.next.call(null,seq__42617);
var map__42619 = first__42618;
var map__42619__$1 = (((((!((map__42619 == null))))?(((((map__42619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42619):map__42619);
var msg = map__42619__$1;
var msg_name = cljs.core.get.call(null,map__42619__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42617__$1;
var pred__42621 = cljs.core._EQ_;
var expr__42622 = msg_name;
if(cljs.core.truth_(pred__42621.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42622))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42621.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42622))){
=======
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50552){
var map__50553 = p__50552;
var map__50553__$1 = (((((!((map__50553 == null))))?(((((map__50553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50553):map__50553);
var on_compile_warning = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50553__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50553,map__50553__$1,on_compile_warning,on_compile_fail){
return (function (p__50555){
var vec__50556 = p__50555;
var seq__50557 = cljs.core.seq.call(null,vec__50556);
var first__50558 = cljs.core.first.call(null,seq__50557);
var seq__50557__$1 = cljs.core.next.call(null,seq__50557);
var map__50559 = first__50558;
var map__50559__$1 = (((((!((map__50559 == null))))?(((((map__50559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50559):map__50559);
var msg = map__50559__$1;
var msg_name = cljs.core.get.call(null,map__50559__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50557__$1;
var pred__50561 = cljs.core._EQ_;
var expr__50562 = msg_name;
if(cljs.core.truth_(pred__50561.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50562))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50561.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50562))){
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
<<<<<<< HEAD
;})(map__42613,map__42613__$1,on_compile_warning,on_compile_fail))
=======
;})(map__50553,map__50553__$1,on_compile_warning,on_compile_fail))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
<<<<<<< HEAD
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__,msg_hist,msg_names,msg){
return (function (state_42711){
var state_val_42712 = (state_42711[(1)]);
if((state_val_42712 === (7))){
var inst_42631 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
if(cljs.core.truth_(inst_42631)){
var statearr_42713_42760 = state_42711__$1;
(statearr_42713_42760[(1)] = (8));

} else {
var statearr_42714_42761 = state_42711__$1;
(statearr_42714_42761[(1)] = (9));
=======
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,msg_hist,msg_names,msg){
return (function (state_50651){
var state_val_50652 = (state_50651[(1)]);
if((state_val_50652 === (7))){
var inst_50571 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
if(cljs.core.truth_(inst_50571)){
var statearr_50653_50700 = state_50651__$1;
(statearr_50653_50700[(1)] = (8));

} else {
var statearr_50654_50701 = state_50651__$1;
(statearr_50654_50701[(1)] = (9));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (20))){
var inst_42705 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42715_42762 = state_42711__$1;
(statearr_42715_42762[(2)] = inst_42705);

(statearr_42715_42762[(1)] = (15));
=======
if((state_val_50652 === (20))){
var inst_50645 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50655_50702 = state_50651__$1;
(statearr_50655_50702[(2)] = inst_50645);

(statearr_50655_50702[(1)] = (15));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (27))){
var inst_42701 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42716_42763 = state_42711__$1;
(statearr_42716_42763[(2)] = inst_42701);

(statearr_42716_42763[(1)] = (24));
=======
if((state_val_50652 === (27))){
var inst_50641 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50656_50703 = state_50651__$1;
(statearr_50656_50703[(2)] = inst_50641);

(statearr_50656_50703[(1)] = (24));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (1))){
var inst_42624 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42711__$1 = state_42711;
if(cljs.core.truth_(inst_42624)){
var statearr_42717_42764 = state_42711__$1;
(statearr_42717_42764[(1)] = (2));

} else {
var statearr_42718_42765 = state_42711__$1;
(statearr_42718_42765[(1)] = (3));
=======
if((state_val_50652 === (1))){
var inst_50564 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50651__$1 = state_50651;
if(cljs.core.truth_(inst_50564)){
var statearr_50657_50704 = state_50651__$1;
(statearr_50657_50704[(1)] = (2));

} else {
var statearr_50658_50705 = state_50651__$1;
(statearr_50658_50705[(1)] = (3));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (24))){
var inst_42703 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42719_42766 = state_42711__$1;
(statearr_42719_42766[(2)] = inst_42703);

(statearr_42719_42766[(1)] = (20));
=======
if((state_val_50652 === (24))){
var inst_50643 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50659_50706 = state_50651__$1;
(statearr_50659_50706[(2)] = inst_50643);

(statearr_50659_50706[(1)] = (20));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (4))){
var inst_42709 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42711__$1,inst_42709);
} else {
if((state_val_42712 === (15))){
var inst_42707 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42720_42767 = state_42711__$1;
(statearr_42720_42767[(2)] = inst_42707);

(statearr_42720_42767[(1)] = (4));
=======
if((state_val_50652 === (4))){
var inst_50649 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50651__$1,inst_50649);
} else {
if((state_val_50652 === (15))){
var inst_50647 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50660_50707 = state_50651__$1;
(statearr_50660_50707[(2)] = inst_50647);

(statearr_50660_50707[(1)] = (4));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (21))){
var inst_42660 = (state_42711[(2)]);
var inst_42661 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42662 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42661);
var state_42711__$1 = (function (){var statearr_42721 = state_42711;
(statearr_42721[(7)] = inst_42660);

return statearr_42721;
})();
var statearr_42722_42768 = state_42711__$1;
(statearr_42722_42768[(2)] = inst_42662);

(statearr_42722_42768[(1)] = (20));
=======
if((state_val_50652 === (21))){
var inst_50600 = (state_50651[(2)]);
var inst_50601 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50602 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50601);
var state_50651__$1 = (function (){var statearr_50661 = state_50651;
(statearr_50661[(7)] = inst_50600);

return statearr_50661;
})();
var statearr_50662_50708 = state_50651__$1;
(statearr_50662_50708[(2)] = inst_50602);

(statearr_50662_50708[(1)] = (20));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (31))){
var inst_42690 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42690){
var statearr_42723_42769 = state_42711__$1;
(statearr_42723_42769[(1)] = (34));

} else {
var statearr_42724_42770 = state_42711__$1;
(statearr_42724_42770[(1)] = (35));
=======
if((state_val_50652 === (31))){
var inst_50630 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50630){
var statearr_50663_50709 = state_50651__$1;
(statearr_50663_50709[(1)] = (34));

} else {
var statearr_50664_50710 = state_50651__$1;
(statearr_50664_50710[(1)] = (35));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (32))){
var inst_42699 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42725_42771 = state_42711__$1;
(statearr_42725_42771[(2)] = inst_42699);

(statearr_42725_42771[(1)] = (27));
=======
if((state_val_50652 === (32))){
var inst_50639 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50665_50711 = state_50651__$1;
(statearr_50665_50711[(2)] = inst_50639);

(statearr_50665_50711[(1)] = (27));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (33))){
var inst_42686 = (state_42711[(2)]);
var inst_42687 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42688 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42687);
var state_42711__$1 = (function (){var statearr_42726 = state_42711;
(statearr_42726[(8)] = inst_42686);

return statearr_42726;
})();
var statearr_42727_42772 = state_42711__$1;
(statearr_42727_42772[(2)] = inst_42688);

(statearr_42727_42772[(1)] = (32));
=======
if((state_val_50652 === (33))){
var inst_50626 = (state_50651[(2)]);
var inst_50627 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50628 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50627);
var state_50651__$1 = (function (){var statearr_50666 = state_50651;
(statearr_50666[(8)] = inst_50626);

return statearr_50666;
})();
var statearr_50667_50712 = state_50651__$1;
(statearr_50667_50712[(2)] = inst_50628);

(statearr_50667_50712[(1)] = (32));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (13))){
var inst_42645 = figwheel.client.heads_up.clear.call(null);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(16),inst_42645);
} else {
if((state_val_42712 === (22))){
var inst_42666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42667 = figwheel.client.heads_up.append_warning_message.call(null,inst_42666);
var state_42711__$1 = state_42711;
var statearr_42728_42773 = state_42711__$1;
(statearr_42728_42773[(2)] = inst_42667);

(statearr_42728_42773[(1)] = (24));
=======
if((state_val_50652 === (13))){
var inst_50585 = figwheel.client.heads_up.clear.call(null);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(16),inst_50585);
} else {
if((state_val_50652 === (22))){
var inst_50606 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50607 = figwheel.client.heads_up.append_warning_message.call(null,inst_50606);
var state_50651__$1 = state_50651;
var statearr_50668_50713 = state_50651__$1;
(statearr_50668_50713[(2)] = inst_50607);

(statearr_50668_50713[(1)] = (24));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (36))){
var inst_42697 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42729_42774 = state_42711__$1;
(statearr_42729_42774[(2)] = inst_42697);

(statearr_42729_42774[(1)] = (32));
=======
if((state_val_50652 === (36))){
var inst_50637 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50669_50714 = state_50651__$1;
(statearr_50669_50714[(2)] = inst_50637);

(statearr_50669_50714[(1)] = (32));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (29))){
var inst_42677 = (state_42711[(2)]);
var inst_42678 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42679 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42678);
var state_42711__$1 = (function (){var statearr_42730 = state_42711;
(statearr_42730[(9)] = inst_42677);

return statearr_42730;
})();
var statearr_42731_42775 = state_42711__$1;
(statearr_42731_42775[(2)] = inst_42679);

(statearr_42731_42775[(1)] = (27));
=======
if((state_val_50652 === (29))){
var inst_50617 = (state_50651[(2)]);
var inst_50618 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50619 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50618);
var state_50651__$1 = (function (){var statearr_50670 = state_50651;
(statearr_50670[(9)] = inst_50617);

return statearr_50670;
})();
var statearr_50671_50715 = state_50651__$1;
(statearr_50671_50715[(2)] = inst_50619);

(statearr_50671_50715[(1)] = (27));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (6))){
var inst_42626 = (state_42711[(10)]);
var state_42711__$1 = state_42711;
var statearr_42732_42776 = state_42711__$1;
(statearr_42732_42776[(2)] = inst_42626);

(statearr_42732_42776[(1)] = (7));
=======
if((state_val_50652 === (6))){
var inst_50566 = (state_50651[(10)]);
var state_50651__$1 = state_50651;
var statearr_50672_50716 = state_50651__$1;
(statearr_50672_50716[(2)] = inst_50566);

(statearr_50672_50716[(1)] = (7));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (28))){
var inst_42673 = (state_42711[(2)]);
var inst_42674 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42675 = figwheel.client.heads_up.display_warning.call(null,inst_42674);
var state_42711__$1 = (function (){var statearr_42733 = state_42711;
(statearr_42733[(11)] = inst_42673);

return statearr_42733;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(29),inst_42675);
} else {
if((state_val_42712 === (25))){
var inst_42671 = figwheel.client.heads_up.clear.call(null);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(28),inst_42671);
} else {
if((state_val_42712 === (34))){
var inst_42692 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(37),inst_42692);
} else {
if((state_val_42712 === (17))){
var inst_42651 = (state_42711[(2)]);
var inst_42652 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42653 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42652);
var state_42711__$1 = (function (){var statearr_42734 = state_42711;
(statearr_42734[(12)] = inst_42651);

return statearr_42734;
})();
var statearr_42735_42777 = state_42711__$1;
(statearr_42735_42777[(2)] = inst_42653);

(statearr_42735_42777[(1)] = (15));
=======
if((state_val_50652 === (28))){
var inst_50613 = (state_50651[(2)]);
var inst_50614 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50615 = figwheel.client.heads_up.display_warning.call(null,inst_50614);
var state_50651__$1 = (function (){var statearr_50673 = state_50651;
(statearr_50673[(11)] = inst_50613);

return statearr_50673;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(29),inst_50615);
} else {
if((state_val_50652 === (25))){
var inst_50611 = figwheel.client.heads_up.clear.call(null);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(28),inst_50611);
} else {
if((state_val_50652 === (34))){
var inst_50632 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(37),inst_50632);
} else {
if((state_val_50652 === (17))){
var inst_50591 = (state_50651[(2)]);
var inst_50592 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50593 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50592);
var state_50651__$1 = (function (){var statearr_50674 = state_50651;
(statearr_50674[(12)] = inst_50591);

return statearr_50674;
})();
var statearr_50675_50717 = state_50651__$1;
(statearr_50675_50717[(2)] = inst_50593);

(statearr_50675_50717[(1)] = (15));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (3))){
var inst_42643 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42643){
var statearr_42736_42778 = state_42711__$1;
(statearr_42736_42778[(1)] = (13));

} else {
var statearr_42737_42779 = state_42711__$1;
(statearr_42737_42779[(1)] = (14));
=======
if((state_val_50652 === (3))){
var inst_50583 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50583){
var statearr_50676_50718 = state_50651__$1;
(statearr_50676_50718[(1)] = (13));

} else {
var statearr_50677_50719 = state_50651__$1;
(statearr_50677_50719[(1)] = (14));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (12))){
var inst_42639 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42738_42780 = state_42711__$1;
(statearr_42738_42780[(2)] = inst_42639);

(statearr_42738_42780[(1)] = (10));
=======
if((state_val_50652 === (12))){
var inst_50579 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50678_50720 = state_50651__$1;
(statearr_50678_50720[(2)] = inst_50579);

(statearr_50678_50720[(1)] = (10));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (2))){
var inst_42626 = (state_42711[(10)]);
var inst_42626__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42711__$1 = (function (){var statearr_42739 = state_42711;
(statearr_42739[(10)] = inst_42626__$1);

return statearr_42739;
})();
if(cljs.core.truth_(inst_42626__$1)){
var statearr_42740_42781 = state_42711__$1;
(statearr_42740_42781[(1)] = (5));

} else {
var statearr_42741_42782 = state_42711__$1;
(statearr_42741_42782[(1)] = (6));
=======
if((state_val_50652 === (2))){
var inst_50566 = (state_50651[(10)]);
var inst_50566__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50651__$1 = (function (){var statearr_50679 = state_50651;
(statearr_50679[(10)] = inst_50566__$1);

return statearr_50679;
})();
if(cljs.core.truth_(inst_50566__$1)){
var statearr_50680_50721 = state_50651__$1;
(statearr_50680_50721[(1)] = (5));

} else {
var statearr_50681_50722 = state_50651__$1;
(statearr_50681_50722[(1)] = (6));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (23))){
var inst_42669 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42669){
var statearr_42742_42783 = state_42711__$1;
(statearr_42742_42783[(1)] = (25));

} else {
var statearr_42743_42784 = state_42711__$1;
(statearr_42743_42784[(1)] = (26));
=======
if((state_val_50652 === (23))){
var inst_50609 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50609){
var statearr_50682_50723 = state_50651__$1;
(statearr_50682_50723[(1)] = (25));

} else {
var statearr_50683_50724 = state_50651__$1;
(statearr_50683_50724[(1)] = (26));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (35))){
var state_42711__$1 = state_42711;
var statearr_42744_42785 = state_42711__$1;
(statearr_42744_42785[(2)] = null);

(statearr_42744_42785[(1)] = (36));
=======
if((state_val_50652 === (35))){
var state_50651__$1 = state_50651;
var statearr_50684_50725 = state_50651__$1;
(statearr_50684_50725[(2)] = null);

(statearr_50684_50725[(1)] = (36));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (19))){
var inst_42664 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42664){
var statearr_42745_42786 = state_42711__$1;
(statearr_42745_42786[(1)] = (22));

} else {
var statearr_42746_42787 = state_42711__$1;
(statearr_42746_42787[(1)] = (23));
=======
if((state_val_50652 === (19))){
var inst_50604 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50604){
var statearr_50685_50726 = state_50651__$1;
(statearr_50685_50726[(1)] = (22));

} else {
var statearr_50686_50727 = state_50651__$1;
(statearr_50686_50727[(1)] = (23));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (11))){
var inst_42635 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42747_42788 = state_42711__$1;
(statearr_42747_42788[(2)] = inst_42635);

(statearr_42747_42788[(1)] = (10));
=======
if((state_val_50652 === (11))){
var inst_50575 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50687_50728 = state_50651__$1;
(statearr_50687_50728[(2)] = inst_50575);

(statearr_50687_50728[(1)] = (10));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (9))){
var inst_42637 = figwheel.client.heads_up.clear.call(null);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(12),inst_42637);
} else {
if((state_val_42712 === (5))){
var inst_42628 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42711__$1 = state_42711;
var statearr_42748_42789 = state_42711__$1;
(statearr_42748_42789[(2)] = inst_42628);

(statearr_42748_42789[(1)] = (7));
=======
if((state_val_50652 === (9))){
var inst_50577 = figwheel.client.heads_up.clear.call(null);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(12),inst_50577);
} else {
if((state_val_50652 === (5))){
var inst_50568 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50651__$1 = state_50651;
var statearr_50688_50729 = state_50651__$1;
(statearr_50688_50729[(2)] = inst_50568);

(statearr_50688_50729[(1)] = (7));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (14))){
var inst_42655 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42655){
var statearr_42749_42790 = state_42711__$1;
(statearr_42749_42790[(1)] = (18));

} else {
var statearr_42750_42791 = state_42711__$1;
(statearr_42750_42791[(1)] = (19));
=======
if((state_val_50652 === (14))){
var inst_50595 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50595){
var statearr_50689_50730 = state_50651__$1;
(statearr_50689_50730[(1)] = (18));

} else {
var statearr_50690_50731 = state_50651__$1;
(statearr_50690_50731[(1)] = (19));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (26))){
var inst_42681 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42711__$1 = state_42711;
if(inst_42681){
var statearr_42751_42792 = state_42711__$1;
(statearr_42751_42792[(1)] = (30));

} else {
var statearr_42752_42793 = state_42711__$1;
(statearr_42752_42793[(1)] = (31));
=======
if((state_val_50652 === (26))){
var inst_50621 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50651__$1 = state_50651;
if(inst_50621){
var statearr_50691_50732 = state_50651__$1;
(statearr_50691_50732[(1)] = (30));

} else {
var statearr_50692_50733 = state_50651__$1;
(statearr_50692_50733[(1)] = (31));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (16))){
var inst_42647 = (state_42711[(2)]);
var inst_42648 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42649 = figwheel.client.heads_up.display_exception.call(null,inst_42648);
var state_42711__$1 = (function (){var statearr_42753 = state_42711;
(statearr_42753[(13)] = inst_42647);

return statearr_42753;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(17),inst_42649);
} else {
if((state_val_42712 === (30))){
var inst_42683 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42684 = figwheel.client.heads_up.display_warning.call(null,inst_42683);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(33),inst_42684);
} else {
if((state_val_42712 === (10))){
var inst_42641 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42754_42794 = state_42711__$1;
(statearr_42754_42794[(2)] = inst_42641);

(statearr_42754_42794[(1)] = (4));
=======
if((state_val_50652 === (16))){
var inst_50587 = (state_50651[(2)]);
var inst_50588 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50589 = figwheel.client.heads_up.display_exception.call(null,inst_50588);
var state_50651__$1 = (function (){var statearr_50693 = state_50651;
(statearr_50693[(13)] = inst_50587);

return statearr_50693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(17),inst_50589);
} else {
if((state_val_50652 === (30))){
var inst_50623 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50624 = figwheel.client.heads_up.display_warning.call(null,inst_50623);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(33),inst_50624);
} else {
if((state_val_50652 === (10))){
var inst_50581 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50694_50734 = state_50651__$1;
(statearr_50694_50734[(2)] = inst_50581);

(statearr_50694_50734[(1)] = (4));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (18))){
var inst_42657 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42658 = figwheel.client.heads_up.display_exception.call(null,inst_42657);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(21),inst_42658);
} else {
if((state_val_42712 === (37))){
var inst_42694 = (state_42711[(2)]);
var state_42711__$1 = state_42711;
var statearr_42755_42795 = state_42711__$1;
(statearr_42755_42795[(2)] = inst_42694);

(statearr_42755_42795[(1)] = (36));
=======
if((state_val_50652 === (18))){
var inst_50597 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50598 = figwheel.client.heads_up.display_exception.call(null,inst_50597);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(21),inst_50598);
} else {
if((state_val_50652 === (37))){
var inst_50634 = (state_50651[(2)]);
var state_50651__$1 = state_50651;
var statearr_50695_50735 = state_50651__$1;
(statearr_50695_50735[(2)] = inst_50634);

(statearr_50695_50735[(1)] = (36));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42712 === (8))){
var inst_42633 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42711__$1 = state_42711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42711__$1,(11),inst_42633);
=======
if((state_val_50652 === (8))){
var inst_50573 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50651__$1 = state_50651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50651__$1,(11),inst_50573);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
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
<<<<<<< HEAD
});})(c__27910__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27887__auto__,c__27910__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0 = (function (){
var statearr_42756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42756[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__);

(statearr_42756[(1)] = (1));

return statearr_42756;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1 = (function (state_42711){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_42711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e42757){if((e42757 instanceof Object)){
var ex__27891__auto__ = e42757;
var statearr_42758_42796 = state_42711;
(statearr_42758_42796[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42797 = state_42711;
state_42711 = G__42797;
continue;
} else {
return ret_value__27889__auto__;
=======
});})(c__33157__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32990__auto__,c__33157__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0 = (function (){
var statearr_50696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50696[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__);

(statearr_50696[(1)] = (1));

return statearr_50696;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1 = (function (state_50651){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50697){if((e50697 instanceof Object)){
var ex__32994__auto__ = e50697;
var statearr_50698_50736 = state_50651;
(statearr_50698_50736[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50737 = state_50651;
state_50651 = G__50737;
continue;
} else {
return ret_value__32992__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
break;
}
});
<<<<<<< HEAD
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = function(state_42711){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1.call(this,state_42711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__,msg_hist,msg_names,msg))
})();
var state__27912__auto__ = (function (){var statearr_42759 = f__27911__auto__.call(null);
(statearr_42759[(6)] = c__27910__auto__);

return statearr_42759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__,msg_hist,msg_names,msg))
);

return c__27910__auto__;
=======
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__ = function(state_50651){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1.call(this,state_50651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,msg_hist,msg_names,msg))
})();
var state__33159__auto__ = (function (){var statearr_50699 = f__33158__auto__.call(null);
(statearr_50699[(6)] = c__33157__auto__);

return statearr_50699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,msg_hist,msg_names,msg))
);

return c__33157__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

<<<<<<< HEAD
var c__27910__auto___42826 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto___42826,ch){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto___42826,ch){
return (function (state_42812){
var state_val_42813 = (state_42812[(1)]);
if((state_val_42813 === (1))){
var state_42812__$1 = state_42812;
var statearr_42814_42827 = state_42812__$1;
(statearr_42814_42827[(2)] = null);

(statearr_42814_42827[(1)] = (2));
=======
var c__33157__auto___50766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___50766,ch){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___50766,ch){
return (function (state_50752){
var state_val_50753 = (state_50752[(1)]);
if((state_val_50753 === (1))){
var state_50752__$1 = state_50752;
var statearr_50754_50767 = state_50752__$1;
(statearr_50754_50767[(2)] = null);

(statearr_50754_50767[(1)] = (2));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42813 === (2))){
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42812__$1,(4),ch);
} else {
if((state_val_42813 === (3))){
var inst_42810 = (state_42812[(2)]);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42812__$1,inst_42810);
} else {
if((state_val_42813 === (4))){
var inst_42800 = (state_42812[(7)]);
var inst_42800__$1 = (state_42812[(2)]);
var state_42812__$1 = (function (){var statearr_42815 = state_42812;
(statearr_42815[(7)] = inst_42800__$1);

return statearr_42815;
})();
if(cljs.core.truth_(inst_42800__$1)){
var statearr_42816_42828 = state_42812__$1;
(statearr_42816_42828[(1)] = (5));

} else {
var statearr_42817_42829 = state_42812__$1;
(statearr_42817_42829[(1)] = (6));
=======
if((state_val_50753 === (2))){
var state_50752__$1 = state_50752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50752__$1,(4),ch);
} else {
if((state_val_50753 === (3))){
var inst_50750 = (state_50752[(2)]);
var state_50752__$1 = state_50752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50752__$1,inst_50750);
} else {
if((state_val_50753 === (4))){
var inst_50740 = (state_50752[(7)]);
var inst_50740__$1 = (state_50752[(2)]);
var state_50752__$1 = (function (){var statearr_50755 = state_50752;
(statearr_50755[(7)] = inst_50740__$1);

return statearr_50755;
})();
if(cljs.core.truth_(inst_50740__$1)){
var statearr_50756_50768 = state_50752__$1;
(statearr_50756_50768[(1)] = (5));

} else {
var statearr_50757_50769 = state_50752__$1;
(statearr_50757_50769[(1)] = (6));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42813 === (5))){
var inst_42800 = (state_42812[(7)]);
var inst_42802 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42800);
var state_42812__$1 = state_42812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42812__$1,(8),inst_42802);
} else {
if((state_val_42813 === (6))){
var state_42812__$1 = state_42812;
var statearr_42818_42830 = state_42812__$1;
(statearr_42818_42830[(2)] = null);

(statearr_42818_42830[(1)] = (7));
=======
if((state_val_50753 === (5))){
var inst_50740 = (state_50752[(7)]);
var inst_50742 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50740);
var state_50752__$1 = state_50752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50752__$1,(8),inst_50742);
} else {
if((state_val_50753 === (6))){
var state_50752__$1 = state_50752;
var statearr_50758_50770 = state_50752__$1;
(statearr_50758_50770[(2)] = null);

(statearr_50758_50770[(1)] = (7));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42813 === (7))){
var inst_42808 = (state_42812[(2)]);
var state_42812__$1 = state_42812;
var statearr_42819_42831 = state_42812__$1;
(statearr_42819_42831[(2)] = inst_42808);

(statearr_42819_42831[(1)] = (3));
=======
if((state_val_50753 === (7))){
var inst_50748 = (state_50752[(2)]);
var state_50752__$1 = state_50752;
var statearr_50759_50771 = state_50752__$1;
(statearr_50759_50771[(2)] = inst_50748);

(statearr_50759_50771[(1)] = (3));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
<<<<<<< HEAD
if((state_val_42813 === (8))){
var inst_42804 = (state_42812[(2)]);
var state_42812__$1 = (function (){var statearr_42820 = state_42812;
(statearr_42820[(8)] = inst_42804);

return statearr_42820;
})();
var statearr_42821_42832 = state_42812__$1;
(statearr_42821_42832[(2)] = null);

(statearr_42821_42832[(1)] = (2));
=======
if((state_val_50753 === (8))){
var inst_50744 = (state_50752[(2)]);
var state_50752__$1 = (function (){var statearr_50760 = state_50752;
(statearr_50760[(8)] = inst_50744);

return statearr_50760;
})();
var statearr_50761_50772 = state_50752__$1;
(statearr_50761_50772[(2)] = null);

(statearr_50761_50772[(1)] = (2));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


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
<<<<<<< HEAD
});})(c__27910__auto___42826,ch))
;
return ((function (switch__27887__auto__,c__27910__auto___42826,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_42822 = [null,null,null,null,null,null,null,null,null];
(statearr_42822[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27888__auto__);

(statearr_42822[(1)] = (1));

return statearr_42822;
});
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1 = (function (state_42812){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_42812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e42823){if((e42823 instanceof Object)){
var ex__27891__auto__ = e42823;
var statearr_42824_42833 = state_42812;
(statearr_42824_42833[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42834 = state_42812;
state_42812 = G__42834;
continue;
} else {
return ret_value__27889__auto__;
=======
});})(c__33157__auto___50766,ch))
;
return ((function (switch__32990__auto__,c__33157__auto___50766,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50762 = [null,null,null,null,null,null,null,null,null];
(statearr_50762[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32991__auto__);

(statearr_50762[(1)] = (1));

return statearr_50762;
});
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1 = (function (state_50752){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50763){if((e50763 instanceof Object)){
var ex__32994__auto__ = e50763;
var statearr_50764_50773 = state_50752;
(statearr_50764_50773[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50774 = state_50752;
state_50752 = G__50774;
continue;
} else {
return ret_value__32992__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
break;
}
});
<<<<<<< HEAD
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = function(state_42812){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1.call(this,state_42812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto___42826,ch))
})();
var state__27912__auto__ = (function (){var statearr_42825 = f__27911__auto__.call(null);
(statearr_42825[(6)] = c__27910__auto___42826);

return statearr_42825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto___42826,ch))
=======
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__ = function(state_50752){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1.call(this,state_50752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___50766,ch))
})();
var state__33159__auto__ = (function (){var statearr_50765 = f__33158__auto__.call(null);
(statearr_50765[(6)] = c__33157__auto___50766);

return statearr_50765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___50766,ch))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
<<<<<<< HEAD
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__){
return (function (state_42840){
var state_val_42841 = (state_42840[(1)]);
if((state_val_42841 === (1))){
var inst_42835 = cljs.core.async.timeout.call(null,(3000));
var state_42840__$1 = state_42840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42840__$1,(2),inst_42835);
} else {
if((state_val_42841 === (2))){
var inst_42837 = (state_42840[(2)]);
var inst_42838 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42840__$1 = (function (){var statearr_42842 = state_42840;
(statearr_42842[(7)] = inst_42837);

return statearr_42842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42840__$1,inst_42838);
=======
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_50780){
var state_val_50781 = (state_50780[(1)]);
if((state_val_50781 === (1))){
var inst_50775 = cljs.core.async.timeout.call(null,(3000));
var state_50780__$1 = state_50780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50780__$1,(2),inst_50775);
} else {
if((state_val_50781 === (2))){
var inst_50777 = (state_50780[(2)]);
var inst_50778 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50780__$1 = (function (){var statearr_50782 = state_50780;
(statearr_50782[(7)] = inst_50777);

return statearr_50782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50780__$1,inst_50778);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
} else {
return null;
}
}
<<<<<<< HEAD
});})(c__27910__auto__))
;
return ((function (switch__27887__auto__,c__27910__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_42843 = [null,null,null,null,null,null,null,null];
(statearr_42843[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__);

(statearr_42843[(1)] = (1));

return statearr_42843;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1 = (function (state_42840){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_42840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e42844){if((e42844 instanceof Object)){
var ex__27891__auto__ = e42844;
var statearr_42845_42847 = state_42840;
(statearr_42845_42847[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42848 = state_42840;
state_42840 = G__42848;
continue;
} else {
return ret_value__27889__auto__;
=======
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50783 = [null,null,null,null,null,null,null,null];
(statearr_50783[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__);

(statearr_50783[(1)] = (1));

return statearr_50783;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1 = (function (state_50780){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50784){if((e50784 instanceof Object)){
var ex__32994__auto__ = e50784;
var statearr_50785_50787 = state_50780;
(statearr_50785_50787[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50788 = state_50780;
state_50780 = G__50788;
continue;
} else {
return ret_value__32992__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
break;
}
});
<<<<<<< HEAD
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = function(state_42840){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1.call(this,state_42840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__))
})();
var state__27912__auto__ = (function (){var statearr_42846 = f__27911__auto__.call(null);
(statearr_42846[(6)] = c__27910__auto__);

return statearr_42846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__))
);

return c__27910__auto__;
=======
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__ = function(state_50780){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1.call(this,state_50780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_50786 = f__33158__auto__.call(null);
(statearr_50786[(6)] = c__33157__auto__);

return statearr_50786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
<<<<<<< HEAD
var c__27910__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__27911__auto__ = (function (){var switch__27887__auto__ = ((function (c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function (state_42855){
var state_val_42856 = (state_42855[(1)]);
if((state_val_42856 === (1))){
var inst_42849 = cljs.core.async.timeout.call(null,(2000));
var state_42855__$1 = state_42855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42855__$1,(2),inst_42849);
} else {
if((state_val_42856 === (2))){
var inst_42851 = (state_42855[(2)]);
var inst_42852 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42853 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42852);
var state_42855__$1 = (function (){var statearr_42857 = state_42855;
(statearr_42857[(7)] = inst_42851);

return statearr_42857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42855__$1,inst_42853);
=======
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function (state_50795){
var state_val_50796 = (state_50795[(1)]);
if((state_val_50796 === (1))){
var inst_50789 = cljs.core.async.timeout.call(null,(2000));
var state_50795__$1 = state_50795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50795__$1,(2),inst_50789);
} else {
if((state_val_50796 === (2))){
var inst_50791 = (state_50795[(2)]);
var inst_50792 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50793 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50792);
var state_50795__$1 = (function (){var statearr_50797 = state_50795;
(statearr_50797[(7)] = inst_50791);

return statearr_50797;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50795__$1,inst_50793);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
} else {
return null;
}
}
<<<<<<< HEAD
});})(c__27910__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__27887__auto__,c__27910__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_42858 = [null,null,null,null,null,null,null,null];
(statearr_42858[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__);

(statearr_42858[(1)] = (1));

return statearr_42858;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1 = (function (state_42855){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_42855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e42859){if((e42859 instanceof Object)){
var ex__27891__auto__ = e42859;
var statearr_42860_42862 = state_42855;
(statearr_42860_42862[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42863 = state_42855;
state_42855 = G__42863;
continue;
} else {
return ret_value__27889__auto__;
=======
});})(c__33157__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50798 = [null,null,null,null,null,null,null,null];
(statearr_50798[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__);

(statearr_50798[(1)] = (1));

return statearr_50798;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1 = (function (state_50795){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50799){if((e50799 instanceof Object)){
var ex__32994__auto__ = e50799;
var statearr_50800_50802 = state_50795;
(statearr_50800_50802[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50803 = state_50795;
state_50795 = G__50803;
continue;
} else {
return ret_value__32992__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
}
break;
}
});
<<<<<<< HEAD
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = function(state_42855){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1.call(this,state_42855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27910__auto__,figwheel_version,temp__5457__auto__))
})();
var state__27912__auto__ = (function (){var statearr_42861 = f__27911__auto__.call(null);
(statearr_42861[(6)] = c__27910__auto__);

return statearr_42861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27912__auto__);
});})(c__27910__auto__,figwheel_version,temp__5457__auto__))
);

return c__27910__auto__;
=======
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__ = function(state_50795){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1.call(this,state_50795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33159__auto__ = (function (){var statearr_50801 = f__33158__auto__.call(null);
(statearr_50801[(6)] = c__33157__auto__);

return statearr_50801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,figwheel_version,temp__5457__auto__))
);

return c__33157__auto__;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
<<<<<<< HEAD
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42864){
var map__42865 = p__42864;
var map__42865__$1 = (((((!((map__42865 == null))))?(((((map__42865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42865):map__42865);
var file = cljs.core.get.call(null,map__42865__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42865__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42865__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42867 = "";
var G__42867__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42867),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42867);
var G__42867__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42867__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42867__$1);
=======
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50804){
var map__50805 = p__50804;
var map__50805__$1 = (((((!((map__50805 == null))))?(((((map__50805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50805):map__50805);
var file = cljs.core.get.call(null,map__50805__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50805__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50805__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50807 = "";
var G__50807__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50807),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50807);
var G__50807__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50807__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50807__$1);
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
<<<<<<< HEAD
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42867__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42867__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42868){
var map__42869 = p__42868;
var map__42869__$1 = (((((!((map__42869 == null))))?(((((map__42869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42869):map__42869);
var ed = map__42869__$1;
var formatted_exception = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42869__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42871_42875 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42872_42876 = null;
var count__42873_42877 = (0);
var i__42874_42878 = (0);
while(true){
if((i__42874_42878 < count__42873_42877)){
var msg_42879 = cljs.core._nth.call(null,chunk__42872_42876,i__42874_42878);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42879);


var G__42880 = seq__42871_42875;
var G__42881 = chunk__42872_42876;
var G__42882 = count__42873_42877;
var G__42883 = (i__42874_42878 + (1));
seq__42871_42875 = G__42880;
chunk__42872_42876 = G__42881;
count__42873_42877 = G__42882;
i__42874_42878 = G__42883;
continue;
} else {
var temp__5457__auto___42884 = cljs.core.seq.call(null,seq__42871_42875);
if(temp__5457__auto___42884){
var seq__42871_42885__$1 = temp__5457__auto___42884;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42871_42885__$1)){
var c__4461__auto___42886 = cljs.core.chunk_first.call(null,seq__42871_42885__$1);
var G__42887 = cljs.core.chunk_rest.call(null,seq__42871_42885__$1);
var G__42888 = c__4461__auto___42886;
var G__42889 = cljs.core.count.call(null,c__4461__auto___42886);
var G__42890 = (0);
seq__42871_42875 = G__42887;
chunk__42872_42876 = G__42888;
count__42873_42877 = G__42889;
i__42874_42878 = G__42890;
continue;
} else {
var msg_42891 = cljs.core.first.call(null,seq__42871_42885__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42891);


var G__42892 = cljs.core.next.call(null,seq__42871_42885__$1);
var G__42893 = null;
var G__42894 = (0);
var G__42895 = (0);
seq__42871_42875 = G__42892;
chunk__42872_42876 = G__42893;
count__42873_42877 = G__42894;
i__42874_42878 = G__42895;
=======
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50807__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50807__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50808){
var map__50809 = p__50808;
var map__50809__$1 = (((((!((map__50809 == null))))?(((((map__50809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50809):map__50809);
var ed = map__50809__$1;
var formatted_exception = cljs.core.get.call(null,map__50809__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50809__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50809__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50811_50815 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50812_50816 = null;
var count__50813_50817 = (0);
var i__50814_50818 = (0);
while(true){
if((i__50814_50818 < count__50813_50817)){
var msg_50819 = cljs.core._nth.call(null,chunk__50812_50816,i__50814_50818);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50819);


var G__50820 = seq__50811_50815;
var G__50821 = chunk__50812_50816;
var G__50822 = count__50813_50817;
var G__50823 = (i__50814_50818 + (1));
seq__50811_50815 = G__50820;
chunk__50812_50816 = G__50821;
count__50813_50817 = G__50822;
i__50814_50818 = G__50823;
continue;
} else {
var temp__5457__auto___50824 = cljs.core.seq.call(null,seq__50811_50815);
if(temp__5457__auto___50824){
var seq__50811_50825__$1 = temp__5457__auto___50824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50811_50825__$1)){
var c__4461__auto___50826 = cljs.core.chunk_first.call(null,seq__50811_50825__$1);
var G__50827 = cljs.core.chunk_rest.call(null,seq__50811_50825__$1);
var G__50828 = c__4461__auto___50826;
var G__50829 = cljs.core.count.call(null,c__4461__auto___50826);
var G__50830 = (0);
seq__50811_50815 = G__50827;
chunk__50812_50816 = G__50828;
count__50813_50817 = G__50829;
i__50814_50818 = G__50830;
continue;
} else {
var msg_50831 = cljs.core.first.call(null,seq__50811_50825__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50831);


var G__50832 = cljs.core.next.call(null,seq__50811_50825__$1);
var G__50833 = null;
var G__50834 = (0);
var G__50835 = (0);
seq__50811_50815 = G__50832;
chunk__50812_50816 = G__50833;
count__50813_50817 = G__50834;
i__50814_50818 = G__50835;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
<<<<<<< HEAD
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42896){
var map__42897 = p__42896;
var map__42897__$1 = (((((!((map__42897 == null))))?(((((map__42897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42897):map__42897);
var w = map__42897__$1;
var message = cljs.core.get.call(null,map__42897__$1,new cljs.core.Keyword(null,"message","message",-406056002));
=======
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50836){
var map__50837 = p__50836;
var map__50837__$1 = (((((!((map__50837 == null))))?(((((map__50837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50837):map__50837);
var w = map__50837__$1;
var message = cljs.core.get.call(null,map__50837__$1,new cljs.core.Keyword(null,"message","message",-406056002));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,364,364,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,356,356,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4036__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4036__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
<<<<<<< HEAD
var seq__42899 = cljs.core.seq.call(null,plugins);
var chunk__42900 = null;
var count__42901 = (0);
var i__42902 = (0);
while(true){
if((i__42902 < count__42901)){
var vec__42903 = cljs.core._nth.call(null,chunk__42900,i__42902);
var k = cljs.core.nth.call(null,vec__42903,(0),null);
var plugin = cljs.core.nth.call(null,vec__42903,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42909 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42899,chunk__42900,count__42901,i__42902,pl_42909,vec__42903,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42909.call(null,msg_hist);
});})(seq__42899,chunk__42900,count__42901,i__42902,pl_42909,vec__42903,k,plugin))
=======
var seq__50839 = cljs.core.seq.call(null,plugins);
var chunk__50840 = null;
var count__50841 = (0);
var i__50842 = (0);
while(true){
if((i__50842 < count__50841)){
var vec__50843 = cljs.core._nth.call(null,chunk__50840,i__50842);
var k = cljs.core.nth.call(null,vec__50843,(0),null);
var plugin = cljs.core.nth.call(null,vec__50843,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50849 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50839,chunk__50840,count__50841,i__50842,pl_50849,vec__50843,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50849.call(null,msg_hist);
});})(seq__50839,chunk__50840,count__50841,i__50842,pl_50849,vec__50843,k,plugin))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
);
} else {
}


<<<<<<< HEAD
var G__42910 = seq__42899;
var G__42911 = chunk__42900;
var G__42912 = count__42901;
var G__42913 = (i__42902 + (1));
seq__42899 = G__42910;
chunk__42900 = G__42911;
count__42901 = G__42912;
i__42902 = G__42913;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__42899);
if(temp__5457__auto__){
var seq__42899__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42899__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__42899__$1);
var G__42914 = cljs.core.chunk_rest.call(null,seq__42899__$1);
var G__42915 = c__4461__auto__;
var G__42916 = cljs.core.count.call(null,c__4461__auto__);
var G__42917 = (0);
seq__42899 = G__42914;
chunk__42900 = G__42915;
count__42901 = G__42916;
i__42902 = G__42917;
continue;
} else {
var vec__42906 = cljs.core.first.call(null,seq__42899__$1);
var k = cljs.core.nth.call(null,vec__42906,(0),null);
var plugin = cljs.core.nth.call(null,vec__42906,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42918 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42899,chunk__42900,count__42901,i__42902,pl_42918,vec__42906,k,plugin,seq__42899__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42918.call(null,msg_hist);
});})(seq__42899,chunk__42900,count__42901,i__42902,pl_42918,vec__42906,k,plugin,seq__42899__$1,temp__5457__auto__))
=======
var G__50850 = seq__50839;
var G__50851 = chunk__50840;
var G__50852 = count__50841;
var G__50853 = (i__50842 + (1));
seq__50839 = G__50850;
chunk__50840 = G__50851;
count__50841 = G__50852;
i__50842 = G__50853;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50839);
if(temp__5457__auto__){
var seq__50839__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50839__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__50839__$1);
var G__50854 = cljs.core.chunk_rest.call(null,seq__50839__$1);
var G__50855 = c__4461__auto__;
var G__50856 = cljs.core.count.call(null,c__4461__auto__);
var G__50857 = (0);
seq__50839 = G__50854;
chunk__50840 = G__50855;
count__50841 = G__50856;
i__50842 = G__50857;
continue;
} else {
var vec__50846 = cljs.core.first.call(null,seq__50839__$1);
var k = cljs.core.nth.call(null,vec__50846,(0),null);
var plugin = cljs.core.nth.call(null,vec__50846,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50858 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50839,chunk__50840,count__50841,i__50842,pl_50858,vec__50846,k,plugin,seq__50839__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50858.call(null,msg_hist);
});})(seq__50839,chunk__50840,count__50841,i__50842,pl_50858,vec__50846,k,plugin,seq__50839__$1,temp__5457__auto__))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
);
} else {
}


<<<<<<< HEAD
var G__42919 = cljs.core.next.call(null,seq__42899__$1);
var G__42920 = null;
var G__42921 = (0);
var G__42922 = (0);
seq__42899 = G__42919;
chunk__42900 = G__42920;
count__42901 = G__42921;
i__42902 = G__42922;
=======
var G__50859 = cljs.core.next.call(null,seq__50839__$1);
var G__50860 = null;
var G__50861 = (0);
var G__50862 = (0);
seq__50839 = G__50859;
chunk__50840 = G__50860;
count__50841 = G__50861;
i__50842 = G__50862;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
<<<<<<< HEAD
var G__42924 = arguments.length;
switch (G__42924) {
=======
var G__50864 = arguments.length;
switch (G__50864) {
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

<<<<<<< HEAD
var seq__42925_42930 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42926_42931 = null;
var count__42927_42932 = (0);
var i__42928_42933 = (0);
while(true){
if((i__42928_42933 < count__42927_42932)){
var msg_42934 = cljs.core._nth.call(null,chunk__42926_42931,i__42928_42933);
figwheel.client.socket.handle_incoming_message.call(null,msg_42934);


var G__42935 = seq__42925_42930;
var G__42936 = chunk__42926_42931;
var G__42937 = count__42927_42932;
var G__42938 = (i__42928_42933 + (1));
seq__42925_42930 = G__42935;
chunk__42926_42931 = G__42936;
count__42927_42932 = G__42937;
i__42928_42933 = G__42938;
continue;
} else {
var temp__5457__auto___42939 = cljs.core.seq.call(null,seq__42925_42930);
if(temp__5457__auto___42939){
var seq__42925_42940__$1 = temp__5457__auto___42939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42925_42940__$1)){
var c__4461__auto___42941 = cljs.core.chunk_first.call(null,seq__42925_42940__$1);
var G__42942 = cljs.core.chunk_rest.call(null,seq__42925_42940__$1);
var G__42943 = c__4461__auto___42941;
var G__42944 = cljs.core.count.call(null,c__4461__auto___42941);
var G__42945 = (0);
seq__42925_42930 = G__42942;
chunk__42926_42931 = G__42943;
count__42927_42932 = G__42944;
i__42928_42933 = G__42945;
continue;
} else {
var msg_42946 = cljs.core.first.call(null,seq__42925_42940__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42946);


var G__42947 = cljs.core.next.call(null,seq__42925_42940__$1);
var G__42948 = null;
var G__42949 = (0);
var G__42950 = (0);
seq__42925_42930 = G__42947;
chunk__42926_42931 = G__42948;
count__42927_42932 = G__42949;
i__42928_42933 = G__42950;
=======
var seq__50865_50870 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50866_50871 = null;
var count__50867_50872 = (0);
var i__50868_50873 = (0);
while(true){
if((i__50868_50873 < count__50867_50872)){
var msg_50874 = cljs.core._nth.call(null,chunk__50866_50871,i__50868_50873);
figwheel.client.socket.handle_incoming_message.call(null,msg_50874);


var G__50875 = seq__50865_50870;
var G__50876 = chunk__50866_50871;
var G__50877 = count__50867_50872;
var G__50878 = (i__50868_50873 + (1));
seq__50865_50870 = G__50875;
chunk__50866_50871 = G__50876;
count__50867_50872 = G__50877;
i__50868_50873 = G__50878;
continue;
} else {
var temp__5457__auto___50879 = cljs.core.seq.call(null,seq__50865_50870);
if(temp__5457__auto___50879){
var seq__50865_50880__$1 = temp__5457__auto___50879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50865_50880__$1)){
var c__4461__auto___50881 = cljs.core.chunk_first.call(null,seq__50865_50880__$1);
var G__50882 = cljs.core.chunk_rest.call(null,seq__50865_50880__$1);
var G__50883 = c__4461__auto___50881;
var G__50884 = cljs.core.count.call(null,c__4461__auto___50881);
var G__50885 = (0);
seq__50865_50870 = G__50882;
chunk__50866_50871 = G__50883;
count__50867_50872 = G__50884;
i__50868_50873 = G__50885;
continue;
} else {
var msg_50886 = cljs.core.first.call(null,seq__50865_50880__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50886);


var G__50887 = cljs.core.next.call(null,seq__50865_50880__$1);
var G__50888 = null;
var G__50889 = (0);
var G__50890 = (0);
seq__50865_50870 = G__50887;
chunk__50866_50871 = G__50888;
count__50867_50872 = G__50889;
i__50868_50873 = G__50890;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4647__auto__ = [];
<<<<<<< HEAD
var len__4641__auto___42955 = arguments.length;
var i__4642__auto___42956 = (0);
while(true){
if((i__4642__auto___42956 < len__4641__auto___42955)){
args__4647__auto__.push((arguments[i__4642__auto___42956]));

var G__42957 = (i__4642__auto___42956 + (1));
i__4642__auto___42956 = G__42957;
=======
var len__4641__auto___50895 = arguments.length;
var i__4642__auto___50896 = (0);
while(true){
if((i__4642__auto___50896 < len__4641__auto___50895)){
args__4647__auto__.push((arguments[i__4642__auto___50896]));

var G__50897 = (i__4642__auto___50896 + (1));
i__4642__auto___50896 = G__50897;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

<<<<<<< HEAD
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__42952){
var map__42953 = p__42952;
var map__42953__$1 = (((((!((map__42953 == null))))?(((((map__42953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42953):map__42953);
var opts = map__42953__$1;
=======
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50892){
var map__50893 = p__50892;
var map__50893__$1 = (((((!((map__50893 == null))))?(((((map__50893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50893):map__50893);
var opts = map__50893__$1;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
<<<<<<< HEAD
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq42951){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42951));
=======
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50891){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50891));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
<<<<<<< HEAD
}catch (e42958){if((e42958 instanceof Error)){
var e = e42958;
=======
}catch (e50898){if((e50898 instanceof Error)){
var e = e50898;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
<<<<<<< HEAD
throw e42958;
=======
throw e50898;
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
<<<<<<< HEAD
return (function (p__42959){
var map__42960 = p__42959;
var map__42960__$1 = (((((!((map__42960 == null))))?(((((map__42960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42960):map__42960);
var msg_name = cljs.core.get.call(null,map__42960__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
=======
return (function (p__50899){
var map__50900 = p__50899;
var map__50900__$1 = (((((!((map__50900 == null))))?(((((map__50900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50900):map__50900);
var msg_name = cljs.core.get.call(null,map__50900__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

<<<<<<< HEAD
//# sourceMappingURL=client.js.map?rel=1545893258680
=======
//# sourceMappingURL=client.js.map?rel=1545871991567
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
