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
}catch (e36525){if((e36525 instanceof Error)){
var e = e36525;
return "Error: Unable to stringify";
} else {
throw e36525;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36528 = arguments.length;
switch (G__36528) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36526_SHARP_){
if(typeof p1__36526_SHARP_ === 'string'){
return p1__36526_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36526_SHARP_);
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
var len__4641__auto___36531 = arguments.length;
var i__4642__auto___36532 = (0);
while(true){
if((i__4642__auto___36532 < len__4641__auto___36531)){
args__4647__auto__.push((arguments[i__4642__auto___36532]));

var G__36533 = (i__4642__auto___36532 + (1));
i__4642__auto___36532 = G__36533;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36530){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36530));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4647__auto__ = [];
var len__4641__auto___36535 = arguments.length;
var i__4642__auto___36536 = (0);
while(true){
if((i__4642__auto___36536 < len__4641__auto___36535)){
args__4647__auto__.push((arguments[i__4642__auto___36536]));

var G__36537 = (i__4642__auto___36536 + (1));
i__4642__auto___36536 = G__36537;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36534){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36534));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36538){
var map__36539 = p__36538;
var map__36539__$1 = (((((!((map__36539 == null))))?(((((map__36539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36539):map__36539);
var message = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36539__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__31086__auto___36618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___36618,ch){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___36618,ch){
return (function (state_36590){
var state_val_36591 = (state_36590[(1)]);
if((state_val_36591 === (7))){
var inst_36586 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36592_36619 = state_36590__$1;
(statearr_36592_36619[(2)] = inst_36586);

(statearr_36592_36619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (1))){
var state_36590__$1 = state_36590;
var statearr_36593_36620 = state_36590__$1;
(statearr_36593_36620[(2)] = null);

(statearr_36593_36620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (4))){
var inst_36543 = (state_36590[(7)]);
var inst_36543__$1 = (state_36590[(2)]);
var state_36590__$1 = (function (){var statearr_36594 = state_36590;
(statearr_36594[(7)] = inst_36543__$1);

return statearr_36594;
})();
if(cljs.core.truth_(inst_36543__$1)){
var statearr_36595_36621 = state_36590__$1;
(statearr_36595_36621[(1)] = (5));

} else {
var statearr_36596_36622 = state_36590__$1;
(statearr_36596_36622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (15))){
var inst_36550 = (state_36590[(8)]);
var inst_36565 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36550);
var inst_36566 = cljs.core.first.call(null,inst_36565);
var inst_36567 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36566);
var inst_36568 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36567)].join('');
var inst_36569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36568);
var state_36590__$1 = state_36590;
var statearr_36597_36623 = state_36590__$1;
(statearr_36597_36623[(2)] = inst_36569);

(statearr_36597_36623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (13))){
var inst_36574 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36598_36624 = state_36590__$1;
(statearr_36598_36624[(2)] = inst_36574);

(statearr_36598_36624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (6))){
var state_36590__$1 = state_36590;
var statearr_36599_36625 = state_36590__$1;
(statearr_36599_36625[(2)] = null);

(statearr_36599_36625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (17))){
var inst_36572 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36600_36626 = state_36590__$1;
(statearr_36600_36626[(2)] = inst_36572);

(statearr_36600_36626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (3))){
var inst_36588 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36590__$1,inst_36588);
} else {
if((state_val_36591 === (12))){
var inst_36549 = (state_36590[(9)]);
var inst_36563 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36549,opts);
var state_36590__$1 = state_36590;
if(inst_36563){
var statearr_36601_36627 = state_36590__$1;
(statearr_36601_36627[(1)] = (15));

} else {
var statearr_36602_36628 = state_36590__$1;
(statearr_36602_36628[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (2))){
var state_36590__$1 = state_36590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36590__$1,(4),ch);
} else {
if((state_val_36591 === (11))){
var inst_36550 = (state_36590[(8)]);
var inst_36555 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36556 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36550);
var inst_36557 = cljs.core.async.timeout.call(null,(1000));
var inst_36558 = [inst_36556,inst_36557];
var inst_36559 = (new cljs.core.PersistentVector(null,2,(5),inst_36555,inst_36558,null));
var state_36590__$1 = state_36590;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36590__$1,(14),inst_36559);
} else {
if((state_val_36591 === (9))){
var inst_36550 = (state_36590[(8)]);
var inst_36576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36577 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36550);
var inst_36578 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36577);
var inst_36579 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36578)].join('');
var inst_36580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36579);
var state_36590__$1 = (function (){var statearr_36603 = state_36590;
(statearr_36603[(10)] = inst_36576);

return statearr_36603;
})();
var statearr_36604_36629 = state_36590__$1;
(statearr_36604_36629[(2)] = inst_36580);

(statearr_36604_36629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (5))){
var inst_36543 = (state_36590[(7)]);
var inst_36545 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36546 = (new cljs.core.PersistentArrayMap(null,2,inst_36545,null));
var inst_36547 = (new cljs.core.PersistentHashSet(null,inst_36546,null));
var inst_36548 = figwheel.client.focus_msgs.call(null,inst_36547,inst_36543);
var inst_36549 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36548);
var inst_36550 = cljs.core.first.call(null,inst_36548);
var inst_36551 = figwheel.client.autoload_QMARK_.call(null);
var state_36590__$1 = (function (){var statearr_36605 = state_36590;
(statearr_36605[(8)] = inst_36550);

(statearr_36605[(9)] = inst_36549);

return statearr_36605;
})();
if(cljs.core.truth_(inst_36551)){
var statearr_36606_36630 = state_36590__$1;
(statearr_36606_36630[(1)] = (8));

} else {
var statearr_36607_36631 = state_36590__$1;
(statearr_36607_36631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (14))){
var inst_36561 = (state_36590[(2)]);
var state_36590__$1 = state_36590;
var statearr_36608_36632 = state_36590__$1;
(statearr_36608_36632[(2)] = inst_36561);

(statearr_36608_36632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (16))){
var state_36590__$1 = state_36590;
var statearr_36609_36633 = state_36590__$1;
(statearr_36609_36633[(2)] = null);

(statearr_36609_36633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (10))){
var inst_36582 = (state_36590[(2)]);
var state_36590__$1 = (function (){var statearr_36610 = state_36590;
(statearr_36610[(11)] = inst_36582);

return statearr_36610;
})();
var statearr_36611_36634 = state_36590__$1;
(statearr_36611_36634[(2)] = null);

(statearr_36611_36634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36591 === (8))){
var inst_36549 = (state_36590[(9)]);
var inst_36553 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36549,opts);
var state_36590__$1 = state_36590;
if(cljs.core.truth_(inst_36553)){
var statearr_36612_36635 = state_36590__$1;
(statearr_36612_36635[(1)] = (11));

} else {
var statearr_36613_36636 = state_36590__$1;
(statearr_36613_36636[(1)] = (12));

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
});})(c__31086__auto___36618,ch))
;
return ((function (switch__30991__auto__,c__31086__auto___36618,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____0 = (function (){
var statearr_36614 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36614[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__);

(statearr_36614[(1)] = (1));

return statearr_36614;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____1 = (function (state_36590){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_36590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e36615){if((e36615 instanceof Object)){
var ex__30995__auto__ = e36615;
var statearr_36616_36637 = state_36590;
(statearr_36616_36637[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36638 = state_36590;
state_36590 = G__36638;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__ = function(state_36590){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____1.call(this,state_36590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30992__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___36618,ch))
})();
var state__31088__auto__ = (function (){var statearr_36617 = f__31087__auto__.call(null);
(statearr_36617[(6)] = c__31086__auto___36618);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___36618,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36639_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36639_SHARP_));
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
var base_path_36645 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36645){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36641 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36642 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36643 = true;
var _STAR_print_fn_STAR__temp_val__36644 = ((function (_STAR_print_newline_STAR__orig_val__36641,_STAR_print_fn_STAR__orig_val__36642,_STAR_print_newline_STAR__temp_val__36643,sb,base_path_36645){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__36641,_STAR_print_fn_STAR__orig_val__36642,_STAR_print_newline_STAR__temp_val__36643,sb,base_path_36645))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36643;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36644;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36642;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36641;
}}catch (e36640){if((e36640 instanceof Error)){
var e = e36640;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36645], null));
} else {
var e = e36640;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36645))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36646){
var map__36647 = p__36646;
var map__36647__$1 = (((((!((map__36647 == null))))?(((((map__36647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36647):map__36647);
var opts = map__36647__$1;
var build_id = cljs.core.get.call(null,map__36647__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36647,map__36647__$1,opts,build_id){
return (function (p__36649){
var vec__36650 = p__36649;
var seq__36651 = cljs.core.seq.call(null,vec__36650);
var first__36652 = cljs.core.first.call(null,seq__36651);
var seq__36651__$1 = cljs.core.next.call(null,seq__36651);
var map__36653 = first__36652;
var map__36653__$1 = (((((!((map__36653 == null))))?(((((map__36653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36653):map__36653);
var msg = map__36653__$1;
var msg_name = cljs.core.get.call(null,map__36653__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36651__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36650,seq__36651,first__36652,seq__36651__$1,map__36653,map__36653__$1,msg,msg_name,_,map__36647,map__36647__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36650,seq__36651,first__36652,seq__36651__$1,map__36653,map__36653__$1,msg,msg_name,_,map__36647,map__36647__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36647,map__36647__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36655){
var vec__36656 = p__36655;
var seq__36657 = cljs.core.seq.call(null,vec__36656);
var first__36658 = cljs.core.first.call(null,seq__36657);
var seq__36657__$1 = cljs.core.next.call(null,seq__36657);
var map__36659 = first__36658;
var map__36659__$1 = (((((!((map__36659 == null))))?(((((map__36659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36659):map__36659);
var msg = map__36659__$1;
var msg_name = cljs.core.get.call(null,map__36659__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36657__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36661){
var map__36662 = p__36661;
var map__36662__$1 = (((((!((map__36662 == null))))?(((((map__36662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36662):map__36662);
var on_compile_warning = cljs.core.get.call(null,map__36662__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36662__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36662,map__36662__$1,on_compile_warning,on_compile_fail){
return (function (p__36664){
var vec__36665 = p__36664;
var seq__36666 = cljs.core.seq.call(null,vec__36665);
var first__36667 = cljs.core.first.call(null,seq__36666);
var seq__36666__$1 = cljs.core.next.call(null,seq__36666);
var map__36668 = first__36667;
var map__36668__$1 = (((((!((map__36668 == null))))?(((((map__36668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36668):map__36668);
var msg = map__36668__$1;
var msg_name = cljs.core.get.call(null,map__36668__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36666__$1;
var pred__36670 = cljs.core._EQ_;
var expr__36671 = msg_name;
if(cljs.core.truth_(pred__36670.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36671))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36670.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36671))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36662,map__36662__$1,on_compile_warning,on_compile_fail))
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__,msg_hist,msg_names,msg){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__,msg_hist,msg_names,msg){
return (function (state_36760){
var state_val_36761 = (state_36760[(1)]);
if((state_val_36761 === (7))){
var inst_36680 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
if(cljs.core.truth_(inst_36680)){
var statearr_36762_36809 = state_36760__$1;
(statearr_36762_36809[(1)] = (8));

} else {
var statearr_36763_36810 = state_36760__$1;
(statearr_36763_36810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (20))){
var inst_36754 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36764_36811 = state_36760__$1;
(statearr_36764_36811[(2)] = inst_36754);

(statearr_36764_36811[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (27))){
var inst_36750 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36765_36812 = state_36760__$1;
(statearr_36765_36812[(2)] = inst_36750);

(statearr_36765_36812[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (1))){
var inst_36673 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36760__$1 = state_36760;
if(cljs.core.truth_(inst_36673)){
var statearr_36766_36813 = state_36760__$1;
(statearr_36766_36813[(1)] = (2));

} else {
var statearr_36767_36814 = state_36760__$1;
(statearr_36767_36814[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (24))){
var inst_36752 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36768_36815 = state_36760__$1;
(statearr_36768_36815[(2)] = inst_36752);

(statearr_36768_36815[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (4))){
var inst_36758 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36760__$1,inst_36758);
} else {
if((state_val_36761 === (15))){
var inst_36756 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36769_36816 = state_36760__$1;
(statearr_36769_36816[(2)] = inst_36756);

(statearr_36769_36816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (21))){
var inst_36709 = (state_36760[(2)]);
var inst_36710 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36711 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36710);
var state_36760__$1 = (function (){var statearr_36770 = state_36760;
(statearr_36770[(7)] = inst_36709);

return statearr_36770;
})();
var statearr_36771_36817 = state_36760__$1;
(statearr_36771_36817[(2)] = inst_36711);

(statearr_36771_36817[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (31))){
var inst_36739 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36739){
var statearr_36772_36818 = state_36760__$1;
(statearr_36772_36818[(1)] = (34));

} else {
var statearr_36773_36819 = state_36760__$1;
(statearr_36773_36819[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (32))){
var inst_36748 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36774_36820 = state_36760__$1;
(statearr_36774_36820[(2)] = inst_36748);

(statearr_36774_36820[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (33))){
var inst_36735 = (state_36760[(2)]);
var inst_36736 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36737 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36736);
var state_36760__$1 = (function (){var statearr_36775 = state_36760;
(statearr_36775[(8)] = inst_36735);

return statearr_36775;
})();
var statearr_36776_36821 = state_36760__$1;
(statearr_36776_36821[(2)] = inst_36737);

(statearr_36776_36821[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (13))){
var inst_36694 = figwheel.client.heads_up.clear.call(null);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(16),inst_36694);
} else {
if((state_val_36761 === (22))){
var inst_36715 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36716 = figwheel.client.heads_up.append_warning_message.call(null,inst_36715);
var state_36760__$1 = state_36760;
var statearr_36777_36822 = state_36760__$1;
(statearr_36777_36822[(2)] = inst_36716);

(statearr_36777_36822[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (36))){
var inst_36746 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36778_36823 = state_36760__$1;
(statearr_36778_36823[(2)] = inst_36746);

(statearr_36778_36823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (29))){
var inst_36726 = (state_36760[(2)]);
var inst_36727 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36728 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36727);
var state_36760__$1 = (function (){var statearr_36779 = state_36760;
(statearr_36779[(9)] = inst_36726);

return statearr_36779;
})();
var statearr_36780_36824 = state_36760__$1;
(statearr_36780_36824[(2)] = inst_36728);

(statearr_36780_36824[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (6))){
var inst_36675 = (state_36760[(10)]);
var state_36760__$1 = state_36760;
var statearr_36781_36825 = state_36760__$1;
(statearr_36781_36825[(2)] = inst_36675);

(statearr_36781_36825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (28))){
var inst_36722 = (state_36760[(2)]);
var inst_36723 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36724 = figwheel.client.heads_up.display_warning.call(null,inst_36723);
var state_36760__$1 = (function (){var statearr_36782 = state_36760;
(statearr_36782[(11)] = inst_36722);

return statearr_36782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(29),inst_36724);
} else {
if((state_val_36761 === (25))){
var inst_36720 = figwheel.client.heads_up.clear.call(null);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(28),inst_36720);
} else {
if((state_val_36761 === (34))){
var inst_36741 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(37),inst_36741);
} else {
if((state_val_36761 === (17))){
var inst_36700 = (state_36760[(2)]);
var inst_36701 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36702 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36701);
var state_36760__$1 = (function (){var statearr_36783 = state_36760;
(statearr_36783[(12)] = inst_36700);

return statearr_36783;
})();
var statearr_36784_36826 = state_36760__$1;
(statearr_36784_36826[(2)] = inst_36702);

(statearr_36784_36826[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (3))){
var inst_36692 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36692){
var statearr_36785_36827 = state_36760__$1;
(statearr_36785_36827[(1)] = (13));

} else {
var statearr_36786_36828 = state_36760__$1;
(statearr_36786_36828[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (12))){
var inst_36688 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36787_36829 = state_36760__$1;
(statearr_36787_36829[(2)] = inst_36688);

(statearr_36787_36829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (2))){
var inst_36675 = (state_36760[(10)]);
var inst_36675__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36760__$1 = (function (){var statearr_36788 = state_36760;
(statearr_36788[(10)] = inst_36675__$1);

return statearr_36788;
})();
if(cljs.core.truth_(inst_36675__$1)){
var statearr_36789_36830 = state_36760__$1;
(statearr_36789_36830[(1)] = (5));

} else {
var statearr_36790_36831 = state_36760__$1;
(statearr_36790_36831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (23))){
var inst_36718 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36718){
var statearr_36791_36832 = state_36760__$1;
(statearr_36791_36832[(1)] = (25));

} else {
var statearr_36792_36833 = state_36760__$1;
(statearr_36792_36833[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (35))){
var state_36760__$1 = state_36760;
var statearr_36793_36834 = state_36760__$1;
(statearr_36793_36834[(2)] = null);

(statearr_36793_36834[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (19))){
var inst_36713 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36713){
var statearr_36794_36835 = state_36760__$1;
(statearr_36794_36835[(1)] = (22));

} else {
var statearr_36795_36836 = state_36760__$1;
(statearr_36795_36836[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (11))){
var inst_36684 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36796_36837 = state_36760__$1;
(statearr_36796_36837[(2)] = inst_36684);

(statearr_36796_36837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (9))){
var inst_36686 = figwheel.client.heads_up.clear.call(null);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(12),inst_36686);
} else {
if((state_val_36761 === (5))){
var inst_36677 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36760__$1 = state_36760;
var statearr_36797_36838 = state_36760__$1;
(statearr_36797_36838[(2)] = inst_36677);

(statearr_36797_36838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (14))){
var inst_36704 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36704){
var statearr_36798_36839 = state_36760__$1;
(statearr_36798_36839[(1)] = (18));

} else {
var statearr_36799_36840 = state_36760__$1;
(statearr_36799_36840[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (26))){
var inst_36730 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36760__$1 = state_36760;
if(inst_36730){
var statearr_36800_36841 = state_36760__$1;
(statearr_36800_36841[(1)] = (30));

} else {
var statearr_36801_36842 = state_36760__$1;
(statearr_36801_36842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (16))){
var inst_36696 = (state_36760[(2)]);
var inst_36697 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36698 = figwheel.client.heads_up.display_exception.call(null,inst_36697);
var state_36760__$1 = (function (){var statearr_36802 = state_36760;
(statearr_36802[(13)] = inst_36696);

return statearr_36802;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(17),inst_36698);
} else {
if((state_val_36761 === (30))){
var inst_36732 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36733 = figwheel.client.heads_up.display_warning.call(null,inst_36732);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(33),inst_36733);
} else {
if((state_val_36761 === (10))){
var inst_36690 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36803_36843 = state_36760__$1;
(statearr_36803_36843[(2)] = inst_36690);

(statearr_36803_36843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (18))){
var inst_36706 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36707 = figwheel.client.heads_up.display_exception.call(null,inst_36706);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(21),inst_36707);
} else {
if((state_val_36761 === (37))){
var inst_36743 = (state_36760[(2)]);
var state_36760__$1 = state_36760;
var statearr_36804_36844 = state_36760__$1;
(statearr_36804_36844[(2)] = inst_36743);

(statearr_36804_36844[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36761 === (8))){
var inst_36682 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36760__$1 = state_36760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36760__$1,(11),inst_36682);
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
});})(c__31086__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30991__auto__,c__31086__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____0 = (function (){
var statearr_36805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36805[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__);

(statearr_36805[(1)] = (1));

return statearr_36805;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____1 = (function (state_36760){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_36760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e36806){if((e36806 instanceof Object)){
var ex__30995__auto__ = e36806;
var statearr_36807_36845 = state_36760;
(statearr_36807_36845[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36846 = state_36760;
state_36760 = G__36846;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__ = function(state_36760){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____1.call(this,state_36760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__,msg_hist,msg_names,msg))
})();
var state__31088__auto__ = (function (){var statearr_36808 = f__31087__auto__.call(null);
(statearr_36808[(6)] = c__31086__auto__);

return statearr_36808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__,msg_hist,msg_names,msg))
);

return c__31086__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__31086__auto___36875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___36875,ch){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___36875,ch){
return (function (state_36861){
var state_val_36862 = (state_36861[(1)]);
if((state_val_36862 === (1))){
var state_36861__$1 = state_36861;
var statearr_36863_36876 = state_36861__$1;
(statearr_36863_36876[(2)] = null);

(statearr_36863_36876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36862 === (2))){
var state_36861__$1 = state_36861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36861__$1,(4),ch);
} else {
if((state_val_36862 === (3))){
var inst_36859 = (state_36861[(2)]);
var state_36861__$1 = state_36861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36861__$1,inst_36859);
} else {
if((state_val_36862 === (4))){
var inst_36849 = (state_36861[(7)]);
var inst_36849__$1 = (state_36861[(2)]);
var state_36861__$1 = (function (){var statearr_36864 = state_36861;
(statearr_36864[(7)] = inst_36849__$1);

return statearr_36864;
})();
if(cljs.core.truth_(inst_36849__$1)){
var statearr_36865_36877 = state_36861__$1;
(statearr_36865_36877[(1)] = (5));

} else {
var statearr_36866_36878 = state_36861__$1;
(statearr_36866_36878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36862 === (5))){
var inst_36849 = (state_36861[(7)]);
var inst_36851 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36849);
var state_36861__$1 = state_36861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36861__$1,(8),inst_36851);
} else {
if((state_val_36862 === (6))){
var state_36861__$1 = state_36861;
var statearr_36867_36879 = state_36861__$1;
(statearr_36867_36879[(2)] = null);

(statearr_36867_36879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36862 === (7))){
var inst_36857 = (state_36861[(2)]);
var state_36861__$1 = state_36861;
var statearr_36868_36880 = state_36861__$1;
(statearr_36868_36880[(2)] = inst_36857);

(statearr_36868_36880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36862 === (8))){
var inst_36853 = (state_36861[(2)]);
var state_36861__$1 = (function (){var statearr_36869 = state_36861;
(statearr_36869[(8)] = inst_36853);

return statearr_36869;
})();
var statearr_36870_36881 = state_36861__$1;
(statearr_36870_36881[(2)] = null);

(statearr_36870_36881[(1)] = (2));


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
});})(c__31086__auto___36875,ch))
;
return ((function (switch__30991__auto__,c__31086__auto___36875,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30992__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30992__auto____0 = (function (){
var statearr_36871 = [null,null,null,null,null,null,null,null,null];
(statearr_36871[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30992__auto__);

(statearr_36871[(1)] = (1));

return statearr_36871;
});
var figwheel$client$heads_up_plugin_$_state_machine__30992__auto____1 = (function (state_36861){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_36861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e36872){if((e36872 instanceof Object)){
var ex__30995__auto__ = e36872;
var statearr_36873_36882 = state_36861;
(statearr_36873_36882[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36883 = state_36861;
state_36861 = G__36883;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30992__auto__ = function(state_36861){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30992__auto____1.call(this,state_36861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30992__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30992__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___36875,ch))
})();
var state__31088__auto__ = (function (){var statearr_36874 = f__31087__auto__.call(null);
(statearr_36874[(6)] = c__31086__auto___36875);

return statearr_36874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___36875,ch))
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__){
return (function (state_36889){
var state_val_36890 = (state_36889[(1)]);
if((state_val_36890 === (1))){
var inst_36884 = cljs.core.async.timeout.call(null,(3000));
var state_36889__$1 = state_36889;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36889__$1,(2),inst_36884);
} else {
if((state_val_36890 === (2))){
var inst_36886 = (state_36889[(2)]);
var inst_36887 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36889__$1 = (function (){var statearr_36891 = state_36889;
(statearr_36891[(7)] = inst_36886);

return statearr_36891;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36889__$1,inst_36887);
} else {
return null;
}
}
});})(c__31086__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____0 = (function (){
var statearr_36892 = [null,null,null,null,null,null,null,null];
(statearr_36892[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__);

(statearr_36892[(1)] = (1));

return statearr_36892;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____1 = (function (state_36889){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_36889);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e36893){if((e36893 instanceof Object)){
var ex__30995__auto__ = e36893;
var statearr_36894_36896 = state_36889;
(statearr_36894_36896[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36897 = state_36889;
state_36889 = G__36897;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__ = function(state_36889){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____1.call(this,state_36889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30992__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__))
})();
var state__31088__auto__ = (function (){var statearr_36895 = f__31087__auto__.call(null);
(statearr_36895[(6)] = c__31086__auto__);

return statearr_36895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__))
);

return c__31086__auto__;
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__,figwheel_version,temp__5457__auto__){
return (function (state_36904){
var state_val_36905 = (state_36904[(1)]);
if((state_val_36905 === (1))){
var inst_36898 = cljs.core.async.timeout.call(null,(2000));
var state_36904__$1 = state_36904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36904__$1,(2),inst_36898);
} else {
if((state_val_36905 === (2))){
var inst_36900 = (state_36904[(2)]);
var inst_36901 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_36902 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36901);
var state_36904__$1 = (function (){var statearr_36906 = state_36904;
(statearr_36906[(7)] = inst_36900);

return statearr_36906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36904__$1,inst_36902);
} else {
return null;
}
}
});})(c__31086__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____0 = (function (){
var statearr_36907 = [null,null,null,null,null,null,null,null];
(statearr_36907[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__);

(statearr_36907[(1)] = (1));

return statearr_36907;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____1 = (function (state_36904){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_36904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e36908){if((e36908 instanceof Object)){
var ex__30995__auto__ = e36908;
var statearr_36909_36911 = state_36904;
(statearr_36909_36911[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_36904;
state_36904 = G__36912;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__ = function(state_36904){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____1.call(this,state_36904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__,figwheel_version,temp__5457__auto__))
})();
var state__31088__auto__ = (function (){var statearr_36910 = f__31087__auto__.call(null);
(statearr_36910[(6)] = c__31086__auto__);

return statearr_36910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__,figwheel_version,temp__5457__auto__))
);

return c__31086__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36913){
var map__36914 = p__36913;
var map__36914__$1 = (((((!((map__36914 == null))))?(((((map__36914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36914.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36914):map__36914);
var file = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36914__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36916 = "";
var G__36916__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36916),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__36916);
var G__36916__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36916__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__36916__$1);
if(cljs.core.truth_((function (){var and__4036__auto__ = line;
if(cljs.core.truth_(and__4036__auto__)){
return column;
} else {
return and__4036__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36916__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__36916__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36917){
var map__36918 = p__36917;
var map__36918__$1 = (((((!((map__36918 == null))))?(((((map__36918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36918):map__36918);
var ed = map__36918__$1;
var formatted_exception = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36918__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36920_36924 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36921_36925 = null;
var count__36922_36926 = (0);
var i__36923_36927 = (0);
while(true){
if((i__36923_36927 < count__36922_36926)){
var msg_36928 = cljs.core._nth.call(null,chunk__36921_36925,i__36923_36927);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36928);


var G__36929 = seq__36920_36924;
var G__36930 = chunk__36921_36925;
var G__36931 = count__36922_36926;
var G__36932 = (i__36923_36927 + (1));
seq__36920_36924 = G__36929;
chunk__36921_36925 = G__36930;
count__36922_36926 = G__36931;
i__36923_36927 = G__36932;
continue;
} else {
var temp__5457__auto___36933 = cljs.core.seq.call(null,seq__36920_36924);
if(temp__5457__auto___36933){
var seq__36920_36934__$1 = temp__5457__auto___36933;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36920_36934__$1)){
var c__4461__auto___36935 = cljs.core.chunk_first.call(null,seq__36920_36934__$1);
var G__36936 = cljs.core.chunk_rest.call(null,seq__36920_36934__$1);
var G__36937 = c__4461__auto___36935;
var G__36938 = cljs.core.count.call(null,c__4461__auto___36935);
var G__36939 = (0);
seq__36920_36924 = G__36936;
chunk__36921_36925 = G__36937;
count__36922_36926 = G__36938;
i__36923_36927 = G__36939;
continue;
} else {
var msg_36940 = cljs.core.first.call(null,seq__36920_36934__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36940);


var G__36941 = cljs.core.next.call(null,seq__36920_36934__$1);
var G__36942 = null;
var G__36943 = (0);
var G__36944 = (0);
seq__36920_36924 = G__36941;
chunk__36921_36925 = G__36942;
count__36922_36926 = G__36943;
i__36923_36927 = G__36944;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36945){
var map__36946 = p__36945;
var map__36946__$1 = (((((!((map__36946 == null))))?(((((map__36946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36946):map__36946);
var w = map__36946__$1;
var message = cljs.core.get.call(null,map__36946__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36948 = cljs.core.seq.call(null,plugins);
var chunk__36949 = null;
var count__36950 = (0);
var i__36951 = (0);
while(true){
if((i__36951 < count__36950)){
var vec__36952 = cljs.core._nth.call(null,chunk__36949,i__36951);
var k = cljs.core.nth.call(null,vec__36952,(0),null);
var plugin = cljs.core.nth.call(null,vec__36952,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36958 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36948,chunk__36949,count__36950,i__36951,pl_36958,vec__36952,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36958.call(null,msg_hist);
});})(seq__36948,chunk__36949,count__36950,i__36951,pl_36958,vec__36952,k,plugin))
);
} else {
}


var G__36959 = seq__36948;
var G__36960 = chunk__36949;
var G__36961 = count__36950;
var G__36962 = (i__36951 + (1));
seq__36948 = G__36959;
chunk__36949 = G__36960;
count__36950 = G__36961;
i__36951 = G__36962;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36948);
if(temp__5457__auto__){
var seq__36948__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36948__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__36948__$1);
var G__36963 = cljs.core.chunk_rest.call(null,seq__36948__$1);
var G__36964 = c__4461__auto__;
var G__36965 = cljs.core.count.call(null,c__4461__auto__);
var G__36966 = (0);
seq__36948 = G__36963;
chunk__36949 = G__36964;
count__36950 = G__36965;
i__36951 = G__36966;
continue;
} else {
var vec__36955 = cljs.core.first.call(null,seq__36948__$1);
var k = cljs.core.nth.call(null,vec__36955,(0),null);
var plugin = cljs.core.nth.call(null,vec__36955,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36967 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36948,chunk__36949,count__36950,i__36951,pl_36967,vec__36955,k,plugin,seq__36948__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36967.call(null,msg_hist);
});})(seq__36948,chunk__36949,count__36950,i__36951,pl_36967,vec__36955,k,plugin,seq__36948__$1,temp__5457__auto__))
);
} else {
}


var G__36968 = cljs.core.next.call(null,seq__36948__$1);
var G__36969 = null;
var G__36970 = (0);
var G__36971 = (0);
seq__36948 = G__36968;
chunk__36949 = G__36969;
count__36950 = G__36970;
i__36951 = G__36971;
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
var G__36973 = arguments.length;
switch (G__36973) {
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

var seq__36974_36979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__36975_36980 = null;
var count__36976_36981 = (0);
var i__36977_36982 = (0);
while(true){
if((i__36977_36982 < count__36976_36981)){
var msg_36983 = cljs.core._nth.call(null,chunk__36975_36980,i__36977_36982);
figwheel.client.socket.handle_incoming_message.call(null,msg_36983);


var G__36984 = seq__36974_36979;
var G__36985 = chunk__36975_36980;
var G__36986 = count__36976_36981;
var G__36987 = (i__36977_36982 + (1));
seq__36974_36979 = G__36984;
chunk__36975_36980 = G__36985;
count__36976_36981 = G__36986;
i__36977_36982 = G__36987;
continue;
} else {
var temp__5457__auto___36988 = cljs.core.seq.call(null,seq__36974_36979);
if(temp__5457__auto___36988){
var seq__36974_36989__$1 = temp__5457__auto___36988;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36974_36989__$1)){
var c__4461__auto___36990 = cljs.core.chunk_first.call(null,seq__36974_36989__$1);
var G__36991 = cljs.core.chunk_rest.call(null,seq__36974_36989__$1);
var G__36992 = c__4461__auto___36990;
var G__36993 = cljs.core.count.call(null,c__4461__auto___36990);
var G__36994 = (0);
seq__36974_36979 = G__36991;
chunk__36975_36980 = G__36992;
count__36976_36981 = G__36993;
i__36977_36982 = G__36994;
continue;
} else {
var msg_36995 = cljs.core.first.call(null,seq__36974_36989__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_36995);


var G__36996 = cljs.core.next.call(null,seq__36974_36989__$1);
var G__36997 = null;
var G__36998 = (0);
var G__36999 = (0);
seq__36974_36979 = G__36996;
chunk__36975_36980 = G__36997;
count__36976_36981 = G__36998;
i__36977_36982 = G__36999;
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
var len__4641__auto___37004 = arguments.length;
var i__4642__auto___37005 = (0);
while(true){
if((i__4642__auto___37005 < len__4641__auto___37004)){
args__4647__auto__.push((arguments[i__4642__auto___37005]));

var G__37006 = (i__4642__auto___37005 + (1));
i__4642__auto___37005 = G__37006;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37001){
var map__37002 = p__37001;
var map__37002__$1 = (((((!((map__37002 == null))))?(((((map__37002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37002):map__37002);
var opts = map__37002__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37000){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37000));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37007){if((e37007 instanceof Error)){
var e = e37007;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37007;

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
return (function (p__37008){
var map__37009 = p__37008;
var map__37009__$1 = (((((!((map__37009 == null))))?(((((map__37009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37009):map__37009);
var msg_name = cljs.core.get.call(null,map__37009__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1545637597427
