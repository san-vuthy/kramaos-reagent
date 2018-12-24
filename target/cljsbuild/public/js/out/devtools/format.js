// Compiled by ClojureScript 1.10.439 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._header[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._header["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._has_body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._has_body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4347__auto__ = (((value == null))?null:value);
var m__4348__auto__ = (devtools.format._body[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,value);
} else {
var m__4348__auto____$1 = (devtools.format._body["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29005 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29005["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29006 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29006["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29007 = temp__5455__auto____$2;
return (o29007["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29008 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29008["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29009 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29009["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29010 = temp__5455__auto____$2;
return (o29010["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29011 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29011["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29012 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29012["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29013 = temp__5455__auto____$2;
return (o29013["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29014 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29014["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29015 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29015["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29016 = temp__5455__auto____$2;
return (o29016["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29017 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29017["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29018 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29018["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29019 = temp__5455__auto____$2;
return (o29019["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29020 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29020["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29021 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29021["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29022 = temp__5455__auto____$2;
return (o29022["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o29023 = temp__5455__auto__;
var temp__5455__auto____$1 = (o29023["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o29024 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o29024["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o29025 = temp__5455__auto____$2;
return (o29025["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29027 = arguments.length;
var i__4642__auto___29028 = (0);
while(true){
if((i__4642__auto___29028 < len__4641__auto___29027)){
args__4647__auto__.push((arguments[i__4642__auto___29028]));

var G__29029 = (i__4642__auto___29028 + (1));
i__4642__auto___29028 = G__29029;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq29026){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29026));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29031 = arguments.length;
var i__4642__auto___29032 = (0);
while(true){
if((i__4642__auto___29032 < len__4641__auto___29031)){
args__4647__auto__.push((arguments[i__4642__auto___29032]));

var G__29033 = (i__4642__auto___29032 + (1));
i__4642__auto___29032 = G__29033;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq29030){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29030));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29035 = arguments.length;
var i__4642__auto___29036 = (0);
while(true){
if((i__4642__auto___29036 < len__4641__auto___29035)){
args__4647__auto__.push((arguments[i__4642__auto___29036]));

var G__29037 = (i__4642__auto___29036 + (1));
i__4642__auto___29036 = G__29037;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq29034){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29034));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29039 = arguments.length;
var i__4642__auto___29040 = (0);
while(true){
if((i__4642__auto___29040 < len__4641__auto___29039)){
args__4647__auto__.push((arguments[i__4642__auto___29040]));

var G__29041 = (i__4642__auto___29040 + (1));
i__4642__auto___29040 = G__29041;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq29038){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29038));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29043 = arguments.length;
var i__4642__auto___29044 = (0);
while(true){
if((i__4642__auto___29044 < len__4641__auto___29043)){
args__4647__auto__.push((arguments[i__4642__auto___29044]));

var G__29045 = (i__4642__auto___29044 + (1));
i__4642__auto___29044 = G__29045;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq29042){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29042));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29047 = arguments.length;
var i__4642__auto___29048 = (0);
while(true){
if((i__4642__auto___29048 < len__4641__auto___29047)){
args__4647__auto__.push((arguments[i__4642__auto___29048]));

var G__29049 = (i__4642__auto___29048 + (1));
i__4642__auto___29048 = G__29049;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq29046){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29046));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29051 = arguments.length;
var i__4642__auto___29052 = (0);
while(true){
if((i__4642__auto___29052 < len__4641__auto___29051)){
args__4647__auto__.push((arguments[i__4642__auto___29052]));

var G__29053 = (i__4642__auto___29052 + (1));
i__4642__auto___29052 = G__29053;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq29050){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29050));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29061 = arguments.length;
var i__4642__auto___29062 = (0);
while(true){
if((i__4642__auto___29062 < len__4641__auto___29061)){
args__4647__auto__.push((arguments[i__4642__auto___29062]));

var G__29063 = (i__4642__auto___29062 + (1));
i__4642__auto___29062 = G__29063;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__29057){
var vec__29058 = p__29057;
var state_override = cljs.core.nth.call(null,vec__29058,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__29058,state_override){
return (function (p1__29054_SHARP_){
return cljs.core.merge.call(null,p1__29054_SHARP_,state_override);
});})(vec__29058,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq29055){
var G__29056 = cljs.core.first.call(null,seq29055);
var seq29055__$1 = cljs.core.next.call(null,seq29055);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29056,seq29055__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29065 = arguments.length;
var i__4642__auto___29066 = (0);
while(true){
if((i__4642__auto___29066 < len__4641__auto___29065)){
args__4647__auto__.push((arguments[i__4642__auto___29066]));

var G__29067 = (i__4642__auto___29066 + (1));
i__4642__auto___29066 = G__29067;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq29064){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29064));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4647__auto__ = [];
var len__4641__auto___29070 = arguments.length;
var i__4642__auto___29071 = (0);
while(true){
if((i__4642__auto___29071 < len__4641__auto___29070)){
args__4647__auto__.push((arguments[i__4642__auto___29071]));

var G__29072 = (i__4642__auto___29071 + (1));
i__4642__auto___29071 = G__29072;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq29068){
var G__29069 = cljs.core.first.call(null,seq29068);
var seq29068__$1 = cljs.core.next.call(null,seq29068);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29069,seq29068__$1);
});


//# sourceMappingURL=format.js.map?rel=1545637583803
