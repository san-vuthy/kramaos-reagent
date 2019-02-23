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
}catch (e50312){if((e50312 instanceof Error)){
var e = e50312;
return "Error: Unable to stringify";
} else {
throw e50312;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__50315 = arguments.length;
switch (G__50315) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__50313_SHARP_){
if(typeof p1__50313_SHARP_ === 'string'){
return p1__50313_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__50313_SHARP_);
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
var len__4641__auto___50318 = arguments.length;
var i__4642__auto___50319 = (0);
while(true){
if((i__4642__auto___50319 < len__4641__auto___50318)){
args__4647__auto__.push((arguments[i__4642__auto___50319]));

var G__50320 = (i__4642__auto___50319 + (1));
i__4642__auto___50319 = G__50320;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq50317){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50317));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___50322 = arguments.length;
var i__4642__auto___50323 = (0);
while(true){
if((i__4642__auto___50323 < len__4641__auto___50322)){
args__4647__auto__.push((arguments[i__4642__auto___50323]));

var G__50324 = (i__4642__auto___50323 + (1));
i__4642__auto___50323 = G__50324;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq50321){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50321));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__50325){
var map__50326 = p__50325;
var map__50326__$1 = (((((!((map__50326 == null))))?(((((map__50326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50326):map__50326);
var message = cljs.core.get.call(null,map__50326__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__50326__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33157__auto___50405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___50405,ch){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___50405,ch){
return (function (state_50377){
var state_val_50378 = (state_50377[(1)]);
if((state_val_50378 === (7))){
var inst_50373 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
var statearr_50379_50406 = state_50377__$1;
(statearr_50379_50406[(2)] = inst_50373);

(statearr_50379_50406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (1))){
var state_50377__$1 = state_50377;
var statearr_50380_50407 = state_50377__$1;
(statearr_50380_50407[(2)] = null);

(statearr_50380_50407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (4))){
var inst_50330 = (state_50377[(7)]);
var inst_50330__$1 = (state_50377[(2)]);
var state_50377__$1 = (function (){var statearr_50381 = state_50377;
(statearr_50381[(7)] = inst_50330__$1);

return statearr_50381;
})();
if(cljs.core.truth_(inst_50330__$1)){
var statearr_50382_50408 = state_50377__$1;
(statearr_50382_50408[(1)] = (5));

} else {
var statearr_50383_50409 = state_50377__$1;
(statearr_50383_50409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (15))){
var inst_50337 = (state_50377[(8)]);
var inst_50352 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50337);
var inst_50353 = cljs.core.first.call(null,inst_50352);
var inst_50354 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_50353);
var inst_50355 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50354)].join('');
var inst_50356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_50355);
var state_50377__$1 = state_50377;
var statearr_50384_50410 = state_50377__$1;
(statearr_50384_50410[(2)] = inst_50356);

(statearr_50384_50410[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (13))){
var inst_50361 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
var statearr_50385_50411 = state_50377__$1;
(statearr_50385_50411[(2)] = inst_50361);

(statearr_50385_50411[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (6))){
var state_50377__$1 = state_50377;
var statearr_50386_50412 = state_50377__$1;
(statearr_50386_50412[(2)] = null);

(statearr_50386_50412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (17))){
var inst_50359 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
var statearr_50387_50413 = state_50377__$1;
(statearr_50387_50413[(2)] = inst_50359);

(statearr_50387_50413[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (3))){
var inst_50375 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50377__$1,inst_50375);
} else {
if((state_val_50378 === (12))){
var inst_50336 = (state_50377[(9)]);
var inst_50350 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_50336,opts);
var state_50377__$1 = state_50377;
if(inst_50350){
var statearr_50388_50414 = state_50377__$1;
(statearr_50388_50414[(1)] = (15));

} else {
var statearr_50389_50415 = state_50377__$1;
(statearr_50389_50415[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (2))){
var state_50377__$1 = state_50377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50377__$1,(4),ch);
} else {
if((state_val_50378 === (11))){
var inst_50337 = (state_50377[(8)]);
var inst_50342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50343 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_50337);
var inst_50344 = cljs.core.async.timeout.call(null,(1000));
var inst_50345 = [inst_50343,inst_50344];
var inst_50346 = (new cljs.core.PersistentVector(null,2,(5),inst_50342,inst_50345,null));
var state_50377__$1 = state_50377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50377__$1,(14),inst_50346);
} else {
if((state_val_50378 === (9))){
var inst_50337 = (state_50377[(8)]);
var inst_50363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_50364 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_50337);
var inst_50365 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_50364);
var inst_50366 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_50365)].join('');
var inst_50367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_50366);
var state_50377__$1 = (function (){var statearr_50390 = state_50377;
(statearr_50390[(10)] = inst_50363);

return statearr_50390;
})();
var statearr_50391_50416 = state_50377__$1;
(statearr_50391_50416[(2)] = inst_50367);

(statearr_50391_50416[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (5))){
var inst_50330 = (state_50377[(7)]);
var inst_50332 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_50333 = (new cljs.core.PersistentArrayMap(null,2,inst_50332,null));
var inst_50334 = (new cljs.core.PersistentHashSet(null,inst_50333,null));
var inst_50335 = figwheel.client.focus_msgs.call(null,inst_50334,inst_50330);
var inst_50336 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_50335);
var inst_50337 = cljs.core.first.call(null,inst_50335);
var inst_50338 = figwheel.client.autoload_QMARK_.call(null);
var state_50377__$1 = (function (){var statearr_50392 = state_50377;
(statearr_50392[(9)] = inst_50336);

(statearr_50392[(8)] = inst_50337);

return statearr_50392;
})();
if(cljs.core.truth_(inst_50338)){
var statearr_50393_50417 = state_50377__$1;
(statearr_50393_50417[(1)] = (8));

} else {
var statearr_50394_50418 = state_50377__$1;
(statearr_50394_50418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (14))){
var inst_50348 = (state_50377[(2)]);
var state_50377__$1 = state_50377;
var statearr_50395_50419 = state_50377__$1;
(statearr_50395_50419[(2)] = inst_50348);

(statearr_50395_50419[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (16))){
var state_50377__$1 = state_50377;
var statearr_50396_50420 = state_50377__$1;
(statearr_50396_50420[(2)] = null);

(statearr_50396_50420[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (10))){
var inst_50369 = (state_50377[(2)]);
var state_50377__$1 = (function (){var statearr_50397 = state_50377;
(statearr_50397[(11)] = inst_50369);

return statearr_50397;
})();
var statearr_50398_50421 = state_50377__$1;
(statearr_50398_50421[(2)] = null);

(statearr_50398_50421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50378 === (8))){
var inst_50336 = (state_50377[(9)]);
var inst_50340 = figwheel.client.reload_file_state_QMARK_.call(null,inst_50336,opts);
var state_50377__$1 = state_50377;
if(cljs.core.truth_(inst_50340)){
var statearr_50399_50422 = state_50377__$1;
(statearr_50399_50422[(1)] = (11));

} else {
var statearr_50400_50423 = state_50377__$1;
(statearr_50400_50423[(1)] = (12));

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
});})(c__33157__auto___50405,ch))
;
return ((function (switch__32990__auto__,c__33157__auto___50405,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50401 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50401[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__);

(statearr_50401[(1)] = (1));

return statearr_50401;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1 = (function (state_50377){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50402){if((e50402 instanceof Object)){
var ex__32994__auto__ = e50402;
var statearr_50403_50424 = state_50377;
(statearr_50403_50424[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50425 = state_50377;
state_50377 = G__50425;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__ = function(state_50377){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1.call(this,state_50377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32991__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___50405,ch))
})();
var state__33159__auto__ = (function (){var statearr_50404 = f__33158__auto__.call(null);
(statearr_50404[(6)] = c__33157__auto___50405);

return statearr_50404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___50405,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__50426_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__50426_SHARP_));
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
var base_path_50432 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_50432){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50428 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50429 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50430 = true;
var _STAR_print_fn_STAR__temp_val__50431 = ((function (_STAR_print_newline_STAR__orig_val__50428,_STAR_print_fn_STAR__orig_val__50429,_STAR_print_newline_STAR__temp_val__50430,sb,base_path_50432){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__50428,_STAR_print_fn_STAR__orig_val__50429,_STAR_print_newline_STAR__temp_val__50430,sb,base_path_50432))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50430;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50431;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50429;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50428;
}}catch (e50427){if((e50427 instanceof Error)){
var e = e50427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_50432], null));
} else {
var e = e50427;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_50432))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__50433){
var map__50434 = p__50433;
var map__50434__$1 = (((((!((map__50434 == null))))?(((((map__50434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50434):map__50434);
var opts = map__50434__$1;
var build_id = cljs.core.get.call(null,map__50434__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__50434,map__50434__$1,opts,build_id){
return (function (p__50436){
var vec__50437 = p__50436;
var seq__50438 = cljs.core.seq.call(null,vec__50437);
var first__50439 = cljs.core.first.call(null,seq__50438);
var seq__50438__$1 = cljs.core.next.call(null,seq__50438);
var map__50440 = first__50439;
var map__50440__$1 = (((((!((map__50440 == null))))?(((((map__50440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50440):map__50440);
var msg = map__50440__$1;
var msg_name = cljs.core.get.call(null,map__50440__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50438__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__50437,seq__50438,first__50439,seq__50438__$1,map__50440,map__50440__$1,msg,msg_name,_,map__50434,map__50434__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__50437,seq__50438,first__50439,seq__50438__$1,map__50440,map__50440__$1,msg,msg_name,_,map__50434,map__50434__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__50434,map__50434__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__50442){
var vec__50443 = p__50442;
var seq__50444 = cljs.core.seq.call(null,vec__50443);
var first__50445 = cljs.core.first.call(null,seq__50444);
var seq__50444__$1 = cljs.core.next.call(null,seq__50444);
var map__50446 = first__50445;
var map__50446__$1 = (((((!((map__50446 == null))))?(((((map__50446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50446):map__50446);
var msg = map__50446__$1;
var msg_name = cljs.core.get.call(null,map__50446__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50444__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__50448){
var map__50449 = p__50448;
var map__50449__$1 = (((((!((map__50449 == null))))?(((((map__50449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50449):map__50449);
var on_compile_warning = cljs.core.get.call(null,map__50449__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__50449__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__50449,map__50449__$1,on_compile_warning,on_compile_fail){
return (function (p__50451){
var vec__50452 = p__50451;
var seq__50453 = cljs.core.seq.call(null,vec__50452);
var first__50454 = cljs.core.first.call(null,seq__50453);
var seq__50453__$1 = cljs.core.next.call(null,seq__50453);
var map__50455 = first__50454;
var map__50455__$1 = (((((!((map__50455 == null))))?(((((map__50455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50455):map__50455);
var msg = map__50455__$1;
var msg_name = cljs.core.get.call(null,map__50455__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__50453__$1;
var pred__50457 = cljs.core._EQ_;
var expr__50458 = msg_name;
if(cljs.core.truth_(pred__50457.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__50458))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__50457.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__50458))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__50449,map__50449__$1,on_compile_warning,on_compile_fail))
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,msg_hist,msg_names,msg){
return (function (state_50547){
var state_val_50548 = (state_50547[(1)]);
if((state_val_50548 === (7))){
var inst_50467 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
if(cljs.core.truth_(inst_50467)){
var statearr_50549_50596 = state_50547__$1;
(statearr_50549_50596[(1)] = (8));

} else {
var statearr_50550_50597 = state_50547__$1;
(statearr_50550_50597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (20))){
var inst_50541 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50551_50598 = state_50547__$1;
(statearr_50551_50598[(2)] = inst_50541);

(statearr_50551_50598[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (27))){
var inst_50537 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50552_50599 = state_50547__$1;
(statearr_50552_50599[(2)] = inst_50537);

(statearr_50552_50599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (1))){
var inst_50460 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_50547__$1 = state_50547;
if(cljs.core.truth_(inst_50460)){
var statearr_50553_50600 = state_50547__$1;
(statearr_50553_50600[(1)] = (2));

} else {
var statearr_50554_50601 = state_50547__$1;
(statearr_50554_50601[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (24))){
var inst_50539 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50555_50602 = state_50547__$1;
(statearr_50555_50602[(2)] = inst_50539);

(statearr_50555_50602[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (4))){
var inst_50545 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50547__$1,inst_50545);
} else {
if((state_val_50548 === (15))){
var inst_50543 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50556_50603 = state_50547__$1;
(statearr_50556_50603[(2)] = inst_50543);

(statearr_50556_50603[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (21))){
var inst_50496 = (state_50547[(2)]);
var inst_50497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50498 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50497);
var state_50547__$1 = (function (){var statearr_50557 = state_50547;
(statearr_50557[(7)] = inst_50496);

return statearr_50557;
})();
var statearr_50558_50604 = state_50547__$1;
(statearr_50558_50604[(2)] = inst_50498);

(statearr_50558_50604[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (31))){
var inst_50526 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50526){
var statearr_50559_50605 = state_50547__$1;
(statearr_50559_50605[(1)] = (34));

} else {
var statearr_50560_50606 = state_50547__$1;
(statearr_50560_50606[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (32))){
var inst_50535 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50561_50607 = state_50547__$1;
(statearr_50561_50607[(2)] = inst_50535);

(statearr_50561_50607[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (33))){
var inst_50522 = (state_50547[(2)]);
var inst_50523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50524 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50523);
var state_50547__$1 = (function (){var statearr_50562 = state_50547;
(statearr_50562[(8)] = inst_50522);

return statearr_50562;
})();
var statearr_50563_50608 = state_50547__$1;
(statearr_50563_50608[(2)] = inst_50524);

(statearr_50563_50608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (13))){
var inst_50481 = figwheel.client.heads_up.clear.call(null);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(16),inst_50481);
} else {
if((state_val_50548 === (22))){
var inst_50502 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50503 = figwheel.client.heads_up.append_warning_message.call(null,inst_50502);
var state_50547__$1 = state_50547;
var statearr_50564_50609 = state_50547__$1;
(statearr_50564_50609[(2)] = inst_50503);

(statearr_50564_50609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (36))){
var inst_50533 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50565_50610 = state_50547__$1;
(statearr_50565_50610[(2)] = inst_50533);

(statearr_50565_50610[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (29))){
var inst_50513 = (state_50547[(2)]);
var inst_50514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50515 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50514);
var state_50547__$1 = (function (){var statearr_50566 = state_50547;
(statearr_50566[(9)] = inst_50513);

return statearr_50566;
})();
var statearr_50567_50611 = state_50547__$1;
(statearr_50567_50611[(2)] = inst_50515);

(statearr_50567_50611[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (6))){
var inst_50462 = (state_50547[(10)]);
var state_50547__$1 = state_50547;
var statearr_50568_50612 = state_50547__$1;
(statearr_50568_50612[(2)] = inst_50462);

(statearr_50568_50612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (28))){
var inst_50509 = (state_50547[(2)]);
var inst_50510 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50511 = figwheel.client.heads_up.display_warning.call(null,inst_50510);
var state_50547__$1 = (function (){var statearr_50569 = state_50547;
(statearr_50569[(11)] = inst_50509);

return statearr_50569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(29),inst_50511);
} else {
if((state_val_50548 === (25))){
var inst_50507 = figwheel.client.heads_up.clear.call(null);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(28),inst_50507);
} else {
if((state_val_50548 === (34))){
var inst_50528 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(37),inst_50528);
} else {
if((state_val_50548 === (17))){
var inst_50487 = (state_50547[(2)]);
var inst_50488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50489 = figwheel.client.auto_jump_to_error.call(null,opts,inst_50488);
var state_50547__$1 = (function (){var statearr_50570 = state_50547;
(statearr_50570[(12)] = inst_50487);

return statearr_50570;
})();
var statearr_50571_50613 = state_50547__$1;
(statearr_50571_50613[(2)] = inst_50489);

(statearr_50571_50613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (3))){
var inst_50479 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50479){
var statearr_50572_50614 = state_50547__$1;
(statearr_50572_50614[(1)] = (13));

} else {
var statearr_50573_50615 = state_50547__$1;
(statearr_50573_50615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (12))){
var inst_50475 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50574_50616 = state_50547__$1;
(statearr_50574_50616[(2)] = inst_50475);

(statearr_50574_50616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (2))){
var inst_50462 = (state_50547[(10)]);
var inst_50462__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_50547__$1 = (function (){var statearr_50575 = state_50547;
(statearr_50575[(10)] = inst_50462__$1);

return statearr_50575;
})();
if(cljs.core.truth_(inst_50462__$1)){
var statearr_50576_50617 = state_50547__$1;
(statearr_50576_50617[(1)] = (5));

} else {
var statearr_50577_50618 = state_50547__$1;
(statearr_50577_50618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (23))){
var inst_50505 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50505){
var statearr_50578_50619 = state_50547__$1;
(statearr_50578_50619[(1)] = (25));

} else {
var statearr_50579_50620 = state_50547__$1;
(statearr_50579_50620[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (35))){
var state_50547__$1 = state_50547;
var statearr_50580_50621 = state_50547__$1;
(statearr_50580_50621[(2)] = null);

(statearr_50580_50621[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (19))){
var inst_50500 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50500){
var statearr_50581_50622 = state_50547__$1;
(statearr_50581_50622[(1)] = (22));

} else {
var statearr_50582_50623 = state_50547__$1;
(statearr_50582_50623[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (11))){
var inst_50471 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50583_50624 = state_50547__$1;
(statearr_50583_50624[(2)] = inst_50471);

(statearr_50583_50624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (9))){
var inst_50473 = figwheel.client.heads_up.clear.call(null);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(12),inst_50473);
} else {
if((state_val_50548 === (5))){
var inst_50464 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_50547__$1 = state_50547;
var statearr_50584_50625 = state_50547__$1;
(statearr_50584_50625[(2)] = inst_50464);

(statearr_50584_50625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (14))){
var inst_50491 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50491){
var statearr_50585_50626 = state_50547__$1;
(statearr_50585_50626[(1)] = (18));

} else {
var statearr_50586_50627 = state_50547__$1;
(statearr_50586_50627[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (26))){
var inst_50517 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_50547__$1 = state_50547;
if(inst_50517){
var statearr_50587_50628 = state_50547__$1;
(statearr_50587_50628[(1)] = (30));

} else {
var statearr_50588_50629 = state_50547__$1;
(statearr_50588_50629[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (16))){
var inst_50483 = (state_50547[(2)]);
var inst_50484 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50485 = figwheel.client.heads_up.display_exception.call(null,inst_50484);
var state_50547__$1 = (function (){var statearr_50589 = state_50547;
(statearr_50589[(13)] = inst_50483);

return statearr_50589;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(17),inst_50485);
} else {
if((state_val_50548 === (30))){
var inst_50519 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50520 = figwheel.client.heads_up.display_warning.call(null,inst_50519);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(33),inst_50520);
} else {
if((state_val_50548 === (10))){
var inst_50477 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50590_50630 = state_50547__$1;
(statearr_50590_50630[(2)] = inst_50477);

(statearr_50590_50630[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (18))){
var inst_50493 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_50494 = figwheel.client.heads_up.display_exception.call(null,inst_50493);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(21),inst_50494);
} else {
if((state_val_50548 === (37))){
var inst_50530 = (state_50547[(2)]);
var state_50547__$1 = state_50547;
var statearr_50591_50631 = state_50547__$1;
(statearr_50591_50631[(2)] = inst_50530);

(statearr_50591_50631[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50548 === (8))){
var inst_50469 = figwheel.client.heads_up.flash_loaded.call(null);
var state_50547__$1 = state_50547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50547__$1,(11),inst_50469);
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
});})(c__33157__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32990__auto__,c__33157__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0 = (function (){
var statearr_50592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50592[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__);

(statearr_50592[(1)] = (1));

return statearr_50592;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1 = (function (state_50547){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50593){if((e50593 instanceof Object)){
var ex__32994__auto__ = e50593;
var statearr_50594_50632 = state_50547;
(statearr_50594_50632[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50633 = state_50547;
state_50547 = G__50633;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__ = function(state_50547){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1.call(this,state_50547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,msg_hist,msg_names,msg))
})();
var state__33159__auto__ = (function (){var statearr_50595 = f__33158__auto__.call(null);
(statearr_50595[(6)] = c__33157__auto__);

return statearr_50595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,msg_hist,msg_names,msg))
);

return c__33157__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33157__auto___50662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___50662,ch){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___50662,ch){
return (function (state_50648){
var state_val_50649 = (state_50648[(1)]);
if((state_val_50649 === (1))){
var state_50648__$1 = state_50648;
var statearr_50650_50663 = state_50648__$1;
(statearr_50650_50663[(2)] = null);

(statearr_50650_50663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50649 === (2))){
var state_50648__$1 = state_50648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50648__$1,(4),ch);
} else {
if((state_val_50649 === (3))){
var inst_50646 = (state_50648[(2)]);
var state_50648__$1 = state_50648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50648__$1,inst_50646);
} else {
if((state_val_50649 === (4))){
var inst_50636 = (state_50648[(7)]);
var inst_50636__$1 = (state_50648[(2)]);
var state_50648__$1 = (function (){var statearr_50651 = state_50648;
(statearr_50651[(7)] = inst_50636__$1);

return statearr_50651;
})();
if(cljs.core.truth_(inst_50636__$1)){
var statearr_50652_50664 = state_50648__$1;
(statearr_50652_50664[(1)] = (5));

} else {
var statearr_50653_50665 = state_50648__$1;
(statearr_50653_50665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50649 === (5))){
var inst_50636 = (state_50648[(7)]);
var inst_50638 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_50636);
var state_50648__$1 = state_50648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50648__$1,(8),inst_50638);
} else {
if((state_val_50649 === (6))){
var state_50648__$1 = state_50648;
var statearr_50654_50666 = state_50648__$1;
(statearr_50654_50666[(2)] = null);

(statearr_50654_50666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50649 === (7))){
var inst_50644 = (state_50648[(2)]);
var state_50648__$1 = state_50648;
var statearr_50655_50667 = state_50648__$1;
(statearr_50655_50667[(2)] = inst_50644);

(statearr_50655_50667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50649 === (8))){
var inst_50640 = (state_50648[(2)]);
var state_50648__$1 = (function (){var statearr_50656 = state_50648;
(statearr_50656[(8)] = inst_50640);

return statearr_50656;
})();
var statearr_50657_50668 = state_50648__$1;
(statearr_50657_50668[(2)] = null);

(statearr_50657_50668[(1)] = (2));


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
});})(c__33157__auto___50662,ch))
;
return ((function (switch__32990__auto__,c__33157__auto___50662,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50658 = [null,null,null,null,null,null,null,null,null];
(statearr_50658[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32991__auto__);

(statearr_50658[(1)] = (1));

return statearr_50658;
});
var figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1 = (function (state_50648){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50659){if((e50659 instanceof Object)){
var ex__32994__auto__ = e50659;
var statearr_50660_50669 = state_50648;
(statearr_50660_50669[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50670 = state_50648;
state_50648 = G__50670;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__ = function(state_50648){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1.call(this,state_50648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32991__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32991__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___50662,ch))
})();
var state__33159__auto__ = (function (){var statearr_50661 = f__33158__auto__.call(null);
(statearr_50661[(6)] = c__33157__auto___50662);

return statearr_50661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___50662,ch))
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_50676){
var state_val_50677 = (state_50676[(1)]);
if((state_val_50677 === (1))){
var inst_50671 = cljs.core.async.timeout.call(null,(3000));
var state_50676__$1 = state_50676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50676__$1,(2),inst_50671);
} else {
if((state_val_50677 === (2))){
var inst_50673 = (state_50676[(2)]);
var inst_50674 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_50676__$1 = (function (){var statearr_50678 = state_50676;
(statearr_50678[(7)] = inst_50673);

return statearr_50678;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50676__$1,inst_50674);
} else {
return null;
}
}
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50679 = [null,null,null,null,null,null,null,null];
(statearr_50679[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__);

(statearr_50679[(1)] = (1));

return statearr_50679;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1 = (function (state_50676){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50680){if((e50680 instanceof Object)){
var ex__32994__auto__ = e50680;
var statearr_50681_50683 = state_50676;
(statearr_50681_50683[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50684 = state_50676;
state_50676 = G__50684;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__ = function(state_50676){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1.call(this,state_50676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32991__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_50682 = f__33158__auto__.call(null);
(statearr_50682[(6)] = c__33157__auto__);

return statearr_50682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
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
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function (state_50691){
var state_val_50692 = (state_50691[(1)]);
if((state_val_50692 === (1))){
var inst_50685 = cljs.core.async.timeout.call(null,(2000));
var state_50691__$1 = state_50691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50691__$1,(2),inst_50685);
} else {
if((state_val_50692 === (2))){
var inst_50687 = (state_50691[(2)]);
var inst_50688 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_50689 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_50688);
var state_50691__$1 = (function (){var statearr_50693 = state_50691;
(statearr_50693[(7)] = inst_50687);

return statearr_50693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50691__$1,inst_50689);
} else {
return null;
}
}
});})(c__33157__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0 = (function (){
var statearr_50694 = [null,null,null,null,null,null,null,null];
(statearr_50694[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__);

(statearr_50694[(1)] = (1));

return statearr_50694;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1 = (function (state_50691){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_50691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e50695){if((e50695 instanceof Object)){
var ex__32994__auto__ = e50695;
var statearr_50696_50698 = state_50691;
(statearr_50696_50698[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50699 = state_50691;
state_50691 = G__50699;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__ = function(state_50691){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1.call(this,state_50691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33159__auto__ = (function (){var statearr_50697 = f__33158__auto__.call(null);
(statearr_50697[(6)] = c__33157__auto__);

return statearr_50697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,figwheel_version,temp__5457__auto__))
);

return c__33157__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__50700){
var map__50701 = p__50700;
var map__50701__$1 = (((((!((map__50701 == null))))?(((((map__50701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50701):map__50701);
var file = cljs.core.get.call(null,map__50701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__50701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__50701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__50703 = "";
var G__50703__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50703),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__50703);
var G__50703__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50703__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__50703__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50703__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__50703__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__50704){
var map__50705 = p__50704;
var map__50705__$1 = (((((!((map__50705 == null))))?(((((map__50705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50705):map__50705);
var ed = map__50705__$1;
var formatted_exception = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__50705__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__50707_50711 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__50708_50712 = null;
var count__50709_50713 = (0);
var i__50710_50714 = (0);
while(true){
if((i__50710_50714 < count__50709_50713)){
var msg_50715 = cljs.core._nth.call(null,chunk__50708_50712,i__50710_50714);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50715);


var G__50716 = seq__50707_50711;
var G__50717 = chunk__50708_50712;
var G__50718 = count__50709_50713;
var G__50719 = (i__50710_50714 + (1));
seq__50707_50711 = G__50716;
chunk__50708_50712 = G__50717;
count__50709_50713 = G__50718;
i__50710_50714 = G__50719;
continue;
} else {
var temp__5457__auto___50720 = cljs.core.seq.call(null,seq__50707_50711);
if(temp__5457__auto___50720){
var seq__50707_50721__$1 = temp__5457__auto___50720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50707_50721__$1)){
var c__4461__auto___50722 = cljs.core.chunk_first.call(null,seq__50707_50721__$1);
var G__50723 = cljs.core.chunk_rest.call(null,seq__50707_50721__$1);
var G__50724 = c__4461__auto___50722;
var G__50725 = cljs.core.count.call(null,c__4461__auto___50722);
var G__50726 = (0);
seq__50707_50711 = G__50723;
chunk__50708_50712 = G__50724;
count__50709_50713 = G__50725;
i__50710_50714 = G__50726;
continue;
} else {
var msg_50727 = cljs.core.first.call(null,seq__50707_50721__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_50727);


var G__50728 = cljs.core.next.call(null,seq__50707_50721__$1);
var G__50729 = null;
var G__50730 = (0);
var G__50731 = (0);
seq__50707_50711 = G__50728;
chunk__50708_50712 = G__50729;
count__50709_50713 = G__50730;
i__50710_50714 = G__50731;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__50732){
var map__50733 = p__50732;
var map__50733__$1 = (((((!((map__50733 == null))))?(((((map__50733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50733):map__50733);
var w = map__50733__$1;
var message = cljs.core.get.call(null,map__50733__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__50735 = cljs.core.seq.call(null,plugins);
var chunk__50736 = null;
var count__50737 = (0);
var i__50738 = (0);
while(true){
if((i__50738 < count__50737)){
var vec__50739 = cljs.core._nth.call(null,chunk__50736,i__50738);
var k = cljs.core.nth.call(null,vec__50739,(0),null);
var plugin = cljs.core.nth.call(null,vec__50739,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50745 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50735,chunk__50736,count__50737,i__50738,pl_50745,vec__50739,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_50745.call(null,msg_hist);
});})(seq__50735,chunk__50736,count__50737,i__50738,pl_50745,vec__50739,k,plugin))
);
} else {
}


var G__50746 = seq__50735;
var G__50747 = chunk__50736;
var G__50748 = count__50737;
var G__50749 = (i__50738 + (1));
seq__50735 = G__50746;
chunk__50736 = G__50747;
count__50737 = G__50748;
i__50738 = G__50749;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__50735);
if(temp__5457__auto__){
var seq__50735__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50735__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__50735__$1);
var G__50750 = cljs.core.chunk_rest.call(null,seq__50735__$1);
var G__50751 = c__4461__auto__;
var G__50752 = cljs.core.count.call(null,c__4461__auto__);
var G__50753 = (0);
seq__50735 = G__50750;
chunk__50736 = G__50751;
count__50737 = G__50752;
i__50738 = G__50753;
continue;
} else {
var vec__50742 = cljs.core.first.call(null,seq__50735__$1);
var k = cljs.core.nth.call(null,vec__50742,(0),null);
var plugin = cljs.core.nth.call(null,vec__50742,(1),null);
if(cljs.core.truth_(plugin)){
var pl_50754 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__50735,chunk__50736,count__50737,i__50738,pl_50754,vec__50742,k,plugin,seq__50735__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_50754.call(null,msg_hist);
});})(seq__50735,chunk__50736,count__50737,i__50738,pl_50754,vec__50742,k,plugin,seq__50735__$1,temp__5457__auto__))
);
} else {
}


var G__50755 = cljs.core.next.call(null,seq__50735__$1);
var G__50756 = null;
var G__50757 = (0);
var G__50758 = (0);
seq__50735 = G__50755;
chunk__50736 = G__50756;
count__50737 = G__50757;
i__50738 = G__50758;
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
var G__50760 = arguments.length;
switch (G__50760) {
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

var seq__50761_50766 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__50762_50767 = null;
var count__50763_50768 = (0);
var i__50764_50769 = (0);
while(true){
if((i__50764_50769 < count__50763_50768)){
var msg_50770 = cljs.core._nth.call(null,chunk__50762_50767,i__50764_50769);
figwheel.client.socket.handle_incoming_message.call(null,msg_50770);


var G__50771 = seq__50761_50766;
var G__50772 = chunk__50762_50767;
var G__50773 = count__50763_50768;
var G__50774 = (i__50764_50769 + (1));
seq__50761_50766 = G__50771;
chunk__50762_50767 = G__50772;
count__50763_50768 = G__50773;
i__50764_50769 = G__50774;
continue;
} else {
var temp__5457__auto___50775 = cljs.core.seq.call(null,seq__50761_50766);
if(temp__5457__auto___50775){
var seq__50761_50776__$1 = temp__5457__auto___50775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50761_50776__$1)){
var c__4461__auto___50777 = cljs.core.chunk_first.call(null,seq__50761_50776__$1);
var G__50778 = cljs.core.chunk_rest.call(null,seq__50761_50776__$1);
var G__50779 = c__4461__auto___50777;
var G__50780 = cljs.core.count.call(null,c__4461__auto___50777);
var G__50781 = (0);
seq__50761_50766 = G__50778;
chunk__50762_50767 = G__50779;
count__50763_50768 = G__50780;
i__50764_50769 = G__50781;
continue;
} else {
var msg_50782 = cljs.core.first.call(null,seq__50761_50776__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_50782);


var G__50783 = cljs.core.next.call(null,seq__50761_50776__$1);
var G__50784 = null;
var G__50785 = (0);
var G__50786 = (0);
seq__50761_50766 = G__50783;
chunk__50762_50767 = G__50784;
count__50763_50768 = G__50785;
i__50764_50769 = G__50786;
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
var len__4641__auto___50791 = arguments.length;
var i__4642__auto___50792 = (0);
while(true){
if((i__4642__auto___50792 < len__4641__auto___50791)){
args__4647__auto__.push((arguments[i__4642__auto___50792]));

var G__50793 = (i__4642__auto___50792 + (1));
i__4642__auto___50792 = G__50793;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__50788){
var map__50789 = p__50788;
var map__50789__$1 = (((((!((map__50789 == null))))?(((((map__50789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50789):map__50789);
var opts = map__50789__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq50787){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50787));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e50794){if((e50794 instanceof Error)){
var e = e50794;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e50794;

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
return (function (p__50795){
var map__50796 = p__50795;
var map__50796__$1 = (((((!((map__50796 == null))))?(((((map__50796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50796):map__50796);
var msg_name = cljs.core.get.call(null,map__50796__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547002189850
