// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42098 = arguments.length;
switch (G__42098) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42099 = (function (f,blockable,meta42100){
this.f = f;
this.blockable = blockable;
this.meta42100 = meta42100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42101,meta42100__$1){
var self__ = this;
var _42101__$1 = this;
return (new cljs.core.async.t_cljs$core$async42099(self__.f,self__.blockable,meta42100__$1));
});

cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42101){
var self__ = this;
var _42101__$1 = this;
return self__.meta42100;
});

cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async42099.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async42099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42100","meta42100",-851865850,null)], null);
});

cljs.core.async.t_cljs$core$async42099.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42099";

cljs.core.async.t_cljs$core$async42099.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42099");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42099.
 */
cljs.core.async.__GT_t_cljs$core$async42099 = (function cljs$core$async$__GT_t_cljs$core$async42099(f__$1,blockable__$1,meta42100){
return (new cljs.core.async.t_cljs$core$async42099(f__$1,blockable__$1,meta42100));
});

}

return (new cljs.core.async.t_cljs$core$async42099(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__42105 = arguments.length;
switch (G__42105) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__42108 = arguments.length;
switch (G__42108) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__42111 = arguments.length;
switch (G__42111) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_42113 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_42113);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_42113,ret){
return (function (){
return fn1.call(null,val_42113);
});})(val_42113,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__42115 = arguments.length;
switch (G__42115) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___42117 = n;
var x_42118 = (0);
while(true){
if((x_42118 < n__4518__auto___42117)){
(a[x_42118] = (0));

var G__42119 = (x_42118 + (1));
x_42118 = G__42119;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__42120 = (i + (1));
i = G__42120;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42121 = (function (flag,meta42122){
this.flag = flag;
this.meta42122 = meta42122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_42123,meta42122__$1){
var self__ = this;
var _42123__$1 = this;
return (new cljs.core.async.t_cljs$core$async42121(self__.flag,meta42122__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_42123){
var self__ = this;
var _42123__$1 = this;
return self__.meta42122;
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42122","meta42122",-1520173393,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async42121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42121";

cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42121");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42121.
 */
cljs.core.async.__GT_t_cljs$core$async42121 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42121(flag__$1,meta42122){
return (new cljs.core.async.t_cljs$core$async42121(flag__$1,meta42122));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async42121(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42124 = (function (flag,cb,meta42125){
this.flag = flag;
this.cb = cb;
this.meta42125 = meta42125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42126,meta42125__$1){
var self__ = this;
var _42126__$1 = this;
return (new cljs.core.async.t_cljs$core$async42124(self__.flag,self__.cb,meta42125__$1));
});

cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42126){
var self__ = this;
var _42126__$1 = this;
return self__.meta42125;
});

cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async42124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async42124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42125","meta42125",1269431825,null)], null);
});

cljs.core.async.t_cljs$core$async42124.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42124";

cljs.core.async.t_cljs$core$async42124.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42124");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42124.
 */
cljs.core.async.__GT_t_cljs$core$async42124 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42124(flag__$1,cb__$1,meta42125){
return (new cljs.core.async.t_cljs$core$async42124(flag__$1,cb__$1,meta42125));
});

}

return (new cljs.core.async.t_cljs$core$async42124(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42127_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42128_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42128_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__42129 = (i + (1));
i = G__42129;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42135 = arguments.length;
var i__4642__auto___42136 = (0);
while(true){
if((i__4642__auto___42136 < len__4641__auto___42135)){
args__4647__auto__.push((arguments[i__4642__auto___42136]));

var G__42137 = (i__4642__auto___42136 + (1));
i__4642__auto___42136 = G__42137;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42132){
var map__42133 = p__42132;
var map__42133__$1 = (((((!((map__42133 == null))))?(((((map__42133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42133):map__42133);
var opts = map__42133__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42130){
var G__42131 = cljs.core.first.call(null,seq42130);
var seq42130__$1 = cljs.core.next.call(null,seq42130);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42131,seq42130__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__42139 = arguments.length;
switch (G__42139) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33157__auto___42185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42185){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42185){
return (function (state_42163){
var state_val_42164 = (state_42163[(1)]);
if((state_val_42164 === (7))){
var inst_42159 = (state_42163[(2)]);
var state_42163__$1 = state_42163;
var statearr_42165_42186 = state_42163__$1;
(statearr_42165_42186[(2)] = inst_42159);

(statearr_42165_42186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (1))){
var state_42163__$1 = state_42163;
var statearr_42166_42187 = state_42163__$1;
(statearr_42166_42187[(2)] = null);

(statearr_42166_42187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (4))){
var inst_42142 = (state_42163[(7)]);
var inst_42142__$1 = (state_42163[(2)]);
var inst_42143 = (inst_42142__$1 == null);
var state_42163__$1 = (function (){var statearr_42167 = state_42163;
(statearr_42167[(7)] = inst_42142__$1);

return statearr_42167;
})();
if(cljs.core.truth_(inst_42143)){
var statearr_42168_42188 = state_42163__$1;
(statearr_42168_42188[(1)] = (5));

} else {
var statearr_42169_42189 = state_42163__$1;
(statearr_42169_42189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (13))){
var state_42163__$1 = state_42163;
var statearr_42170_42190 = state_42163__$1;
(statearr_42170_42190[(2)] = null);

(statearr_42170_42190[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (6))){
var inst_42142 = (state_42163[(7)]);
var state_42163__$1 = state_42163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42163__$1,(11),to,inst_42142);
} else {
if((state_val_42164 === (3))){
var inst_42161 = (state_42163[(2)]);
var state_42163__$1 = state_42163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42163__$1,inst_42161);
} else {
if((state_val_42164 === (12))){
var state_42163__$1 = state_42163;
var statearr_42171_42191 = state_42163__$1;
(statearr_42171_42191[(2)] = null);

(statearr_42171_42191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (2))){
var state_42163__$1 = state_42163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42163__$1,(4),from);
} else {
if((state_val_42164 === (11))){
var inst_42152 = (state_42163[(2)]);
var state_42163__$1 = state_42163;
if(cljs.core.truth_(inst_42152)){
var statearr_42172_42192 = state_42163__$1;
(statearr_42172_42192[(1)] = (12));

} else {
var statearr_42173_42193 = state_42163__$1;
(statearr_42173_42193[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (9))){
var state_42163__$1 = state_42163;
var statearr_42174_42194 = state_42163__$1;
(statearr_42174_42194[(2)] = null);

(statearr_42174_42194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (5))){
var state_42163__$1 = state_42163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42175_42195 = state_42163__$1;
(statearr_42175_42195[(1)] = (8));

} else {
var statearr_42176_42196 = state_42163__$1;
(statearr_42176_42196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (14))){
var inst_42157 = (state_42163[(2)]);
var state_42163__$1 = state_42163;
var statearr_42177_42197 = state_42163__$1;
(statearr_42177_42197[(2)] = inst_42157);

(statearr_42177_42197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (10))){
var inst_42149 = (state_42163[(2)]);
var state_42163__$1 = state_42163;
var statearr_42178_42198 = state_42163__$1;
(statearr_42178_42198[(2)] = inst_42149);

(statearr_42178_42198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42164 === (8))){
var inst_42146 = cljs.core.async.close_BANG_.call(null,to);
var state_42163__$1 = state_42163;
var statearr_42179_42199 = state_42163__$1;
(statearr_42179_42199[(2)] = inst_42146);

(statearr_42179_42199[(1)] = (10));


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
});})(c__33157__auto___42185))
;
return ((function (switch__32990__auto__,c__33157__auto___42185){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42180 = [null,null,null,null,null,null,null,null];
(statearr_42180[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42180[(1)] = (1));

return statearr_42180;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42163){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42181){if((e42181 instanceof Object)){
var ex__32994__auto__ = e42181;
var statearr_42182_42200 = state_42163;
(statearr_42182_42200[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42201 = state_42163;
state_42163 = G__42201;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42185))
})();
var state__33159__auto__ = (function (){var statearr_42183 = f__33158__auto__.call(null);
(statearr_42183[(6)] = c__33157__auto___42185);

return statearr_42183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42185))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42202){
var vec__42203 = p__42202;
var v = cljs.core.nth.call(null,vec__42203,(0),null);
var p = cljs.core.nth.call(null,vec__42203,(1),null);
var job = vec__42203;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33157__auto___42374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results){
return (function (state_42210){
var state_val_42211 = (state_42210[(1)]);
if((state_val_42211 === (1))){
var state_42210__$1 = state_42210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42210__$1,(2),res,v);
} else {
if((state_val_42211 === (2))){
var inst_42207 = (state_42210[(2)]);
var inst_42208 = cljs.core.async.close_BANG_.call(null,res);
var state_42210__$1 = (function (){var statearr_42212 = state_42210;
(statearr_42212[(7)] = inst_42207);

return statearr_42212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42210__$1,inst_42208);
} else {
return null;
}
}
});})(c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results))
;
return ((function (switch__32990__auto__,c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42213 = [null,null,null,null,null,null,null,null];
(statearr_42213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42213[(1)] = (1));

return statearr_42213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42210){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42214){if((e42214 instanceof Object)){
var ex__32994__auto__ = e42214;
var statearr_42215_42375 = state_42210;
(statearr_42215_42375[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42376 = state_42210;
state_42210 = G__42376;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results))
})();
var state__33159__auto__ = (function (){var statearr_42216 = f__33158__auto__.call(null);
(statearr_42216[(6)] = c__33157__auto___42374);

return statearr_42216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42374,res,vec__42203,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42217){
var vec__42218 = p__42217;
var v = cljs.core.nth.call(null,vec__42218,(0),null);
var p = cljs.core.nth.call(null,vec__42218,(1),null);
var job = vec__42218;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___42377 = n;
var __42378 = (0);
while(true){
if((__42378 < n__4518__auto___42377)){
var G__42221_42379 = type;
var G__42221_42380__$1 = (((G__42221_42379 instanceof cljs.core.Keyword))?G__42221_42379.fqn:null);
switch (G__42221_42380__$1) {
case "compute":
var c__33157__auto___42382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42378,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (__42378,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function (state_42234){
var state_val_42235 = (state_42234[(1)]);
if((state_val_42235 === (1))){
var state_42234__$1 = state_42234;
var statearr_42236_42383 = state_42234__$1;
(statearr_42236_42383[(2)] = null);

(statearr_42236_42383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (2))){
var state_42234__$1 = state_42234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42234__$1,(4),jobs);
} else {
if((state_val_42235 === (3))){
var inst_42232 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42234__$1,inst_42232);
} else {
if((state_val_42235 === (4))){
var inst_42224 = (state_42234[(2)]);
var inst_42225 = process.call(null,inst_42224);
var state_42234__$1 = state_42234;
if(cljs.core.truth_(inst_42225)){
var statearr_42237_42384 = state_42234__$1;
(statearr_42237_42384[(1)] = (5));

} else {
var statearr_42238_42385 = state_42234__$1;
(statearr_42238_42385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (5))){
var state_42234__$1 = state_42234;
var statearr_42239_42386 = state_42234__$1;
(statearr_42239_42386[(2)] = null);

(statearr_42239_42386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (6))){
var state_42234__$1 = state_42234;
var statearr_42240_42387 = state_42234__$1;
(statearr_42240_42387[(2)] = null);

(statearr_42240_42387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42235 === (7))){
var inst_42230 = (state_42234[(2)]);
var state_42234__$1 = state_42234;
var statearr_42241_42388 = state_42234__$1;
(statearr_42241_42388[(2)] = inst_42230);

(statearr_42241_42388[(1)] = (3));


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
});})(__42378,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
;
return ((function (__42378,switch__32990__auto__,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42242 = [null,null,null,null,null,null,null];
(statearr_42242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42242[(1)] = (1));

return statearr_42242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42234){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42243){if((e42243 instanceof Object)){
var ex__32994__auto__ = e42243;
var statearr_42244_42389 = state_42234;
(statearr_42244_42389[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42390 = state_42234;
state_42234 = G__42390;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42234){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(__42378,switch__32990__auto__,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42245 = f__33158__auto__.call(null);
(statearr_42245[(6)] = c__33157__auto___42382);

return statearr_42245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(__42378,c__33157__auto___42382,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
);


break;
case "async":
var c__33157__auto___42391 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42378,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (__42378,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function (state_42258){
var state_val_42259 = (state_42258[(1)]);
if((state_val_42259 === (1))){
var state_42258__$1 = state_42258;
var statearr_42260_42392 = state_42258__$1;
(statearr_42260_42392[(2)] = null);

(statearr_42260_42392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42259 === (2))){
var state_42258__$1 = state_42258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42258__$1,(4),jobs);
} else {
if((state_val_42259 === (3))){
var inst_42256 = (state_42258[(2)]);
var state_42258__$1 = state_42258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42258__$1,inst_42256);
} else {
if((state_val_42259 === (4))){
var inst_42248 = (state_42258[(2)]);
var inst_42249 = async.call(null,inst_42248);
var state_42258__$1 = state_42258;
if(cljs.core.truth_(inst_42249)){
var statearr_42261_42393 = state_42258__$1;
(statearr_42261_42393[(1)] = (5));

} else {
var statearr_42262_42394 = state_42258__$1;
(statearr_42262_42394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42259 === (5))){
var state_42258__$1 = state_42258;
var statearr_42263_42395 = state_42258__$1;
(statearr_42263_42395[(2)] = null);

(statearr_42263_42395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42259 === (6))){
var state_42258__$1 = state_42258;
var statearr_42264_42396 = state_42258__$1;
(statearr_42264_42396[(2)] = null);

(statearr_42264_42396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42259 === (7))){
var inst_42254 = (state_42258[(2)]);
var state_42258__$1 = state_42258;
var statearr_42265_42397 = state_42258__$1;
(statearr_42265_42397[(2)] = inst_42254);

(statearr_42265_42397[(1)] = (3));


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
});})(__42378,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
;
return ((function (__42378,switch__32990__auto__,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42266 = [null,null,null,null,null,null,null];
(statearr_42266[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42266[(1)] = (1));

return statearr_42266;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42258){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42267){if((e42267 instanceof Object)){
var ex__32994__auto__ = e42267;
var statearr_42268_42398 = state_42258;
(statearr_42268_42398[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42399 = state_42258;
state_42258 = G__42399;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(__42378,switch__32990__auto__,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42269 = f__33158__auto__.call(null);
(statearr_42269[(6)] = c__33157__auto___42391);

return statearr_42269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(__42378,c__33157__auto___42391,G__42221_42379,G__42221_42380__$1,n__4518__auto___42377,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42221_42380__$1)].join('')));

}

var G__42400 = (__42378 + (1));
__42378 = G__42400;
continue;
} else {
}
break;
}

var c__33157__auto___42401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42401,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42401,jobs,results,process,async){
return (function (state_42291){
var state_val_42292 = (state_42291[(1)]);
if((state_val_42292 === (1))){
var state_42291__$1 = state_42291;
var statearr_42293_42402 = state_42291__$1;
(statearr_42293_42402[(2)] = null);

(statearr_42293_42402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (2))){
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42291__$1,(4),from);
} else {
if((state_val_42292 === (3))){
var inst_42289 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42291__$1,inst_42289);
} else {
if((state_val_42292 === (4))){
var inst_42272 = (state_42291[(7)]);
var inst_42272__$1 = (state_42291[(2)]);
var inst_42273 = (inst_42272__$1 == null);
var state_42291__$1 = (function (){var statearr_42294 = state_42291;
(statearr_42294[(7)] = inst_42272__$1);

return statearr_42294;
})();
if(cljs.core.truth_(inst_42273)){
var statearr_42295_42403 = state_42291__$1;
(statearr_42295_42403[(1)] = (5));

} else {
var statearr_42296_42404 = state_42291__$1;
(statearr_42296_42404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (5))){
var inst_42275 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42291__$1 = state_42291;
var statearr_42297_42405 = state_42291__$1;
(statearr_42297_42405[(2)] = inst_42275);

(statearr_42297_42405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (6))){
var inst_42272 = (state_42291[(7)]);
var inst_42277 = (state_42291[(8)]);
var inst_42277__$1 = cljs.core.async.chan.call(null,(1));
var inst_42278 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42279 = [inst_42272,inst_42277__$1];
var inst_42280 = (new cljs.core.PersistentVector(null,2,(5),inst_42278,inst_42279,null));
var state_42291__$1 = (function (){var statearr_42298 = state_42291;
(statearr_42298[(8)] = inst_42277__$1);

return statearr_42298;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(8),jobs,inst_42280);
} else {
if((state_val_42292 === (7))){
var inst_42287 = (state_42291[(2)]);
var state_42291__$1 = state_42291;
var statearr_42299_42406 = state_42291__$1;
(statearr_42299_42406[(2)] = inst_42287);

(statearr_42299_42406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42292 === (8))){
var inst_42277 = (state_42291[(8)]);
var inst_42282 = (state_42291[(2)]);
var state_42291__$1 = (function (){var statearr_42300 = state_42291;
(statearr_42300[(9)] = inst_42282);

return statearr_42300;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42291__$1,(9),results,inst_42277);
} else {
if((state_val_42292 === (9))){
var inst_42284 = (state_42291[(2)]);
var state_42291__$1 = (function (){var statearr_42301 = state_42291;
(statearr_42301[(10)] = inst_42284);

return statearr_42301;
})();
var statearr_42302_42407 = state_42291__$1;
(statearr_42302_42407[(2)] = null);

(statearr_42302_42407[(1)] = (2));


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
});})(c__33157__auto___42401,jobs,results,process,async))
;
return ((function (switch__32990__auto__,c__33157__auto___42401,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42303[(1)] = (1));

return statearr_42303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42291){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42304){if((e42304 instanceof Object)){
var ex__32994__auto__ = e42304;
var statearr_42305_42408 = state_42291;
(statearr_42305_42408[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42409 = state_42291;
state_42291 = G__42409;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42291){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42401,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42306 = f__33158__auto__.call(null);
(statearr_42306[(6)] = c__33157__auto___42401);

return statearr_42306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42401,jobs,results,process,async))
);


var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,jobs,results,process,async){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,jobs,results,process,async){
return (function (state_42344){
var state_val_42345 = (state_42344[(1)]);
if((state_val_42345 === (7))){
var inst_42340 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42346_42410 = state_42344__$1;
(statearr_42346_42410[(2)] = inst_42340);

(statearr_42346_42410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (20))){
var state_42344__$1 = state_42344;
var statearr_42347_42411 = state_42344__$1;
(statearr_42347_42411[(2)] = null);

(statearr_42347_42411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (1))){
var state_42344__$1 = state_42344;
var statearr_42348_42412 = state_42344__$1;
(statearr_42348_42412[(2)] = null);

(statearr_42348_42412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (4))){
var inst_42309 = (state_42344[(7)]);
var inst_42309__$1 = (state_42344[(2)]);
var inst_42310 = (inst_42309__$1 == null);
var state_42344__$1 = (function (){var statearr_42349 = state_42344;
(statearr_42349[(7)] = inst_42309__$1);

return statearr_42349;
})();
if(cljs.core.truth_(inst_42310)){
var statearr_42350_42413 = state_42344__$1;
(statearr_42350_42413[(1)] = (5));

} else {
var statearr_42351_42414 = state_42344__$1;
(statearr_42351_42414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (15))){
var inst_42322 = (state_42344[(8)]);
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42344__$1,(18),to,inst_42322);
} else {
if((state_val_42345 === (21))){
var inst_42335 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42352_42415 = state_42344__$1;
(statearr_42352_42415[(2)] = inst_42335);

(statearr_42352_42415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (13))){
var inst_42337 = (state_42344[(2)]);
var state_42344__$1 = (function (){var statearr_42353 = state_42344;
(statearr_42353[(9)] = inst_42337);

return statearr_42353;
})();
var statearr_42354_42416 = state_42344__$1;
(statearr_42354_42416[(2)] = null);

(statearr_42354_42416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (6))){
var inst_42309 = (state_42344[(7)]);
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42344__$1,(11),inst_42309);
} else {
if((state_val_42345 === (17))){
var inst_42330 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
if(cljs.core.truth_(inst_42330)){
var statearr_42355_42417 = state_42344__$1;
(statearr_42355_42417[(1)] = (19));

} else {
var statearr_42356_42418 = state_42344__$1;
(statearr_42356_42418[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (3))){
var inst_42342 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42344__$1,inst_42342);
} else {
if((state_val_42345 === (12))){
var inst_42319 = (state_42344[(10)]);
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42344__$1,(14),inst_42319);
} else {
if((state_val_42345 === (2))){
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42344__$1,(4),results);
} else {
if((state_val_42345 === (19))){
var state_42344__$1 = state_42344;
var statearr_42357_42419 = state_42344__$1;
(statearr_42357_42419[(2)] = null);

(statearr_42357_42419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (11))){
var inst_42319 = (state_42344[(2)]);
var state_42344__$1 = (function (){var statearr_42358 = state_42344;
(statearr_42358[(10)] = inst_42319);

return statearr_42358;
})();
var statearr_42359_42420 = state_42344__$1;
(statearr_42359_42420[(2)] = null);

(statearr_42359_42420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (9))){
var state_42344__$1 = state_42344;
var statearr_42360_42421 = state_42344__$1;
(statearr_42360_42421[(2)] = null);

(statearr_42360_42421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (5))){
var state_42344__$1 = state_42344;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42361_42422 = state_42344__$1;
(statearr_42361_42422[(1)] = (8));

} else {
var statearr_42362_42423 = state_42344__$1;
(statearr_42362_42423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (14))){
var inst_42322 = (state_42344[(8)]);
var inst_42324 = (state_42344[(11)]);
var inst_42322__$1 = (state_42344[(2)]);
var inst_42323 = (inst_42322__$1 == null);
var inst_42324__$1 = cljs.core.not.call(null,inst_42323);
var state_42344__$1 = (function (){var statearr_42363 = state_42344;
(statearr_42363[(8)] = inst_42322__$1);

(statearr_42363[(11)] = inst_42324__$1);

return statearr_42363;
})();
if(inst_42324__$1){
var statearr_42364_42424 = state_42344__$1;
(statearr_42364_42424[(1)] = (15));

} else {
var statearr_42365_42425 = state_42344__$1;
(statearr_42365_42425[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (16))){
var inst_42324 = (state_42344[(11)]);
var state_42344__$1 = state_42344;
var statearr_42366_42426 = state_42344__$1;
(statearr_42366_42426[(2)] = inst_42324);

(statearr_42366_42426[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (10))){
var inst_42316 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42367_42427 = state_42344__$1;
(statearr_42367_42427[(2)] = inst_42316);

(statearr_42367_42427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (18))){
var inst_42327 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42368_42428 = state_42344__$1;
(statearr_42368_42428[(2)] = inst_42327);

(statearr_42368_42428[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (8))){
var inst_42313 = cljs.core.async.close_BANG_.call(null,to);
var state_42344__$1 = state_42344;
var statearr_42369_42429 = state_42344__$1;
(statearr_42369_42429[(2)] = inst_42313);

(statearr_42369_42429[(1)] = (10));


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
}
}
}
}
});})(c__33157__auto__,jobs,results,process,async))
;
return ((function (switch__32990__auto__,c__33157__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_42370 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42370[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__);

(statearr_42370[(1)] = (1));

return statearr_42370;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1 = (function (state_42344){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42371){if((e42371 instanceof Object)){
var ex__32994__auto__ = e42371;
var statearr_42372_42430 = state_42344;
(statearr_42372_42430[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42431 = state_42344;
state_42344 = G__42431;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__ = function(state_42344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1.call(this,state_42344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,jobs,results,process,async))
})();
var state__33159__auto__ = (function (){var statearr_42373 = f__33158__auto__.call(null);
(statearr_42373[(6)] = c__33157__auto__);

return statearr_42373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,jobs,results,process,async))
);

return c__33157__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__42433 = arguments.length;
switch (G__42433) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__42436 = arguments.length;
switch (G__42436) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__42439 = arguments.length;
switch (G__42439) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33157__auto___42488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42488,tc,fc){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42488,tc,fc){
return (function (state_42465){
var state_val_42466 = (state_42465[(1)]);
if((state_val_42466 === (7))){
var inst_42461 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
var statearr_42467_42489 = state_42465__$1;
(statearr_42467_42489[(2)] = inst_42461);

(statearr_42467_42489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (1))){
var state_42465__$1 = state_42465;
var statearr_42468_42490 = state_42465__$1;
(statearr_42468_42490[(2)] = null);

(statearr_42468_42490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (4))){
var inst_42442 = (state_42465[(7)]);
var inst_42442__$1 = (state_42465[(2)]);
var inst_42443 = (inst_42442__$1 == null);
var state_42465__$1 = (function (){var statearr_42469 = state_42465;
(statearr_42469[(7)] = inst_42442__$1);

return statearr_42469;
})();
if(cljs.core.truth_(inst_42443)){
var statearr_42470_42491 = state_42465__$1;
(statearr_42470_42491[(1)] = (5));

} else {
var statearr_42471_42492 = state_42465__$1;
(statearr_42471_42492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (13))){
var state_42465__$1 = state_42465;
var statearr_42472_42493 = state_42465__$1;
(statearr_42472_42493[(2)] = null);

(statearr_42472_42493[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (6))){
var inst_42442 = (state_42465[(7)]);
var inst_42448 = p.call(null,inst_42442);
var state_42465__$1 = state_42465;
if(cljs.core.truth_(inst_42448)){
var statearr_42473_42494 = state_42465__$1;
(statearr_42473_42494[(1)] = (9));

} else {
var statearr_42474_42495 = state_42465__$1;
(statearr_42474_42495[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (3))){
var inst_42463 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42465__$1,inst_42463);
} else {
if((state_val_42466 === (12))){
var state_42465__$1 = state_42465;
var statearr_42475_42496 = state_42465__$1;
(statearr_42475_42496[(2)] = null);

(statearr_42475_42496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (2))){
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42465__$1,(4),ch);
} else {
if((state_val_42466 === (11))){
var inst_42442 = (state_42465[(7)]);
var inst_42452 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42465__$1,(8),inst_42452,inst_42442);
} else {
if((state_val_42466 === (9))){
var state_42465__$1 = state_42465;
var statearr_42476_42497 = state_42465__$1;
(statearr_42476_42497[(2)] = tc);

(statearr_42476_42497[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (5))){
var inst_42445 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42446 = cljs.core.async.close_BANG_.call(null,fc);
var state_42465__$1 = (function (){var statearr_42477 = state_42465;
(statearr_42477[(8)] = inst_42445);

return statearr_42477;
})();
var statearr_42478_42498 = state_42465__$1;
(statearr_42478_42498[(2)] = inst_42446);

(statearr_42478_42498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (14))){
var inst_42459 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
var statearr_42479_42499 = state_42465__$1;
(statearr_42479_42499[(2)] = inst_42459);

(statearr_42479_42499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (10))){
var state_42465__$1 = state_42465;
var statearr_42480_42500 = state_42465__$1;
(statearr_42480_42500[(2)] = fc);

(statearr_42480_42500[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42466 === (8))){
var inst_42454 = (state_42465[(2)]);
var state_42465__$1 = state_42465;
if(cljs.core.truth_(inst_42454)){
var statearr_42481_42501 = state_42465__$1;
(statearr_42481_42501[(1)] = (12));

} else {
var statearr_42482_42502 = state_42465__$1;
(statearr_42482_42502[(1)] = (13));

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
});})(c__33157__auto___42488,tc,fc))
;
return ((function (switch__32990__auto__,c__33157__auto___42488,tc,fc){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42483 = [null,null,null,null,null,null,null,null,null];
(statearr_42483[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42483[(1)] = (1));

return statearr_42483;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42465){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42484){if((e42484 instanceof Object)){
var ex__32994__auto__ = e42484;
var statearr_42485_42503 = state_42465;
(statearr_42485_42503[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42504 = state_42465;
state_42465 = G__42504;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42488,tc,fc))
})();
var state__33159__auto__ = (function (){var statearr_42486 = f__33158__auto__.call(null);
(statearr_42486[(6)] = c__33157__auto___42488);

return statearr_42486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42488,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_42525){
var state_val_42526 = (state_42525[(1)]);
if((state_val_42526 === (7))){
var inst_42521 = (state_42525[(2)]);
var state_42525__$1 = state_42525;
var statearr_42527_42545 = state_42525__$1;
(statearr_42527_42545[(2)] = inst_42521);

(statearr_42527_42545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (1))){
var inst_42505 = init;
var state_42525__$1 = (function (){var statearr_42528 = state_42525;
(statearr_42528[(7)] = inst_42505);

return statearr_42528;
})();
var statearr_42529_42546 = state_42525__$1;
(statearr_42529_42546[(2)] = null);

(statearr_42529_42546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (4))){
var inst_42508 = (state_42525[(8)]);
var inst_42508__$1 = (state_42525[(2)]);
var inst_42509 = (inst_42508__$1 == null);
var state_42525__$1 = (function (){var statearr_42530 = state_42525;
(statearr_42530[(8)] = inst_42508__$1);

return statearr_42530;
})();
if(cljs.core.truth_(inst_42509)){
var statearr_42531_42547 = state_42525__$1;
(statearr_42531_42547[(1)] = (5));

} else {
var statearr_42532_42548 = state_42525__$1;
(statearr_42532_42548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (6))){
var inst_42508 = (state_42525[(8)]);
var inst_42512 = (state_42525[(9)]);
var inst_42505 = (state_42525[(7)]);
var inst_42512__$1 = f.call(null,inst_42505,inst_42508);
var inst_42513 = cljs.core.reduced_QMARK_.call(null,inst_42512__$1);
var state_42525__$1 = (function (){var statearr_42533 = state_42525;
(statearr_42533[(9)] = inst_42512__$1);

return statearr_42533;
})();
if(inst_42513){
var statearr_42534_42549 = state_42525__$1;
(statearr_42534_42549[(1)] = (8));

} else {
var statearr_42535_42550 = state_42525__$1;
(statearr_42535_42550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (3))){
var inst_42523 = (state_42525[(2)]);
var state_42525__$1 = state_42525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42525__$1,inst_42523);
} else {
if((state_val_42526 === (2))){
var state_42525__$1 = state_42525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42525__$1,(4),ch);
} else {
if((state_val_42526 === (9))){
var inst_42512 = (state_42525[(9)]);
var inst_42505 = inst_42512;
var state_42525__$1 = (function (){var statearr_42536 = state_42525;
(statearr_42536[(7)] = inst_42505);

return statearr_42536;
})();
var statearr_42537_42551 = state_42525__$1;
(statearr_42537_42551[(2)] = null);

(statearr_42537_42551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (5))){
var inst_42505 = (state_42525[(7)]);
var state_42525__$1 = state_42525;
var statearr_42538_42552 = state_42525__$1;
(statearr_42538_42552[(2)] = inst_42505);

(statearr_42538_42552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (10))){
var inst_42519 = (state_42525[(2)]);
var state_42525__$1 = state_42525;
var statearr_42539_42553 = state_42525__$1;
(statearr_42539_42553[(2)] = inst_42519);

(statearr_42539_42553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42526 === (8))){
var inst_42512 = (state_42525[(9)]);
var inst_42515 = cljs.core.deref.call(null,inst_42512);
var state_42525__$1 = state_42525;
var statearr_42540_42554 = state_42525__$1;
(statearr_42540_42554[(2)] = inst_42515);

(statearr_42540_42554[(1)] = (10));


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
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32991__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32991__auto____0 = (function (){
var statearr_42541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42541[(0)] = cljs$core$async$reduce_$_state_machine__32991__auto__);

(statearr_42541[(1)] = (1));

return statearr_42541;
});
var cljs$core$async$reduce_$_state_machine__32991__auto____1 = (function (state_42525){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42542){if((e42542 instanceof Object)){
var ex__32994__auto__ = e42542;
var statearr_42543_42555 = state_42525;
(statearr_42543_42555[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42556 = state_42525;
state_42525 = G__42556;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32991__auto__ = function(state_42525){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32991__auto____1.call(this,state_42525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32991__auto____0;
cljs$core$async$reduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32991__auto____1;
return cljs$core$async$reduce_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_42544 = f__33158__auto__.call(null);
(statearr_42544[(6)] = c__33157__auto__);

return statearr_42544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__,f__$1){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__,f__$1){
return (function (state_42562){
var state_val_42563 = (state_42562[(1)]);
if((state_val_42563 === (1))){
var inst_42557 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42562__$1,(2),inst_42557);
} else {
if((state_val_42563 === (2))){
var inst_42559 = (state_42562[(2)]);
var inst_42560 = f__$1.call(null,inst_42559);
var state_42562__$1 = state_42562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42562__$1,inst_42560);
} else {
return null;
}
}
});})(c__33157__auto__,f__$1))
;
return ((function (switch__32990__auto__,c__33157__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32991__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32991__auto____0 = (function (){
var statearr_42564 = [null,null,null,null,null,null,null];
(statearr_42564[(0)] = cljs$core$async$transduce_$_state_machine__32991__auto__);

(statearr_42564[(1)] = (1));

return statearr_42564;
});
var cljs$core$async$transduce_$_state_machine__32991__auto____1 = (function (state_42562){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42565){if((e42565 instanceof Object)){
var ex__32994__auto__ = e42565;
var statearr_42566_42568 = state_42562;
(statearr_42566_42568[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42569 = state_42562;
state_42562 = G__42569;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32991__auto__ = function(state_42562){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32991__auto____1.call(this,state_42562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32991__auto____0;
cljs$core$async$transduce_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32991__auto____1;
return cljs$core$async$transduce_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__,f__$1))
})();
var state__33159__auto__ = (function (){var statearr_42567 = f__33158__auto__.call(null);
(statearr_42567[(6)] = c__33157__auto__);

return statearr_42567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__,f__$1))
);

return c__33157__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42571 = arguments.length;
switch (G__42571) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_42596){
var state_val_42597 = (state_42596[(1)]);
if((state_val_42597 === (7))){
var inst_42578 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42598_42619 = state_42596__$1;
(statearr_42598_42619[(2)] = inst_42578);

(statearr_42598_42619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (1))){
var inst_42572 = cljs.core.seq.call(null,coll);
var inst_42573 = inst_42572;
var state_42596__$1 = (function (){var statearr_42599 = state_42596;
(statearr_42599[(7)] = inst_42573);

return statearr_42599;
})();
var statearr_42600_42620 = state_42596__$1;
(statearr_42600_42620[(2)] = null);

(statearr_42600_42620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (4))){
var inst_42573 = (state_42596[(7)]);
var inst_42576 = cljs.core.first.call(null,inst_42573);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42596__$1,(7),ch,inst_42576);
} else {
if((state_val_42597 === (13))){
var inst_42590 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42601_42621 = state_42596__$1;
(statearr_42601_42621[(2)] = inst_42590);

(statearr_42601_42621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (6))){
var inst_42581 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
if(cljs.core.truth_(inst_42581)){
var statearr_42602_42622 = state_42596__$1;
(statearr_42602_42622[(1)] = (8));

} else {
var statearr_42603_42623 = state_42596__$1;
(statearr_42603_42623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (3))){
var inst_42594 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42596__$1,inst_42594);
} else {
if((state_val_42597 === (12))){
var state_42596__$1 = state_42596;
var statearr_42604_42624 = state_42596__$1;
(statearr_42604_42624[(2)] = null);

(statearr_42604_42624[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (2))){
var inst_42573 = (state_42596[(7)]);
var state_42596__$1 = state_42596;
if(cljs.core.truth_(inst_42573)){
var statearr_42605_42625 = state_42596__$1;
(statearr_42605_42625[(1)] = (4));

} else {
var statearr_42606_42626 = state_42596__$1;
(statearr_42606_42626[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (11))){
var inst_42587 = cljs.core.async.close_BANG_.call(null,ch);
var state_42596__$1 = state_42596;
var statearr_42607_42627 = state_42596__$1;
(statearr_42607_42627[(2)] = inst_42587);

(statearr_42607_42627[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (9))){
var state_42596__$1 = state_42596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42608_42628 = state_42596__$1;
(statearr_42608_42628[(1)] = (11));

} else {
var statearr_42609_42629 = state_42596__$1;
(statearr_42609_42629[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (5))){
var inst_42573 = (state_42596[(7)]);
var state_42596__$1 = state_42596;
var statearr_42610_42630 = state_42596__$1;
(statearr_42610_42630[(2)] = inst_42573);

(statearr_42610_42630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (10))){
var inst_42592 = (state_42596[(2)]);
var state_42596__$1 = state_42596;
var statearr_42611_42631 = state_42596__$1;
(statearr_42611_42631[(2)] = inst_42592);

(statearr_42611_42631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42597 === (8))){
var inst_42573 = (state_42596[(7)]);
var inst_42583 = cljs.core.next.call(null,inst_42573);
var inst_42573__$1 = inst_42583;
var state_42596__$1 = (function (){var statearr_42612 = state_42596;
(statearr_42612[(7)] = inst_42573__$1);

return statearr_42612;
})();
var statearr_42613_42632 = state_42596__$1;
(statearr_42613_42632[(2)] = null);

(statearr_42613_42632[(1)] = (2));


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
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_42614 = [null,null,null,null,null,null,null,null];
(statearr_42614[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_42614[(1)] = (1));

return statearr_42614;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_42596){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42615){if((e42615 instanceof Object)){
var ex__32994__auto__ = e42615;
var statearr_42616_42633 = state_42596;
(statearr_42616_42633[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42615;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42634 = state_42596;
state_42596 = G__42634;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_42596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_42596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_42617 = f__33158__auto__.call(null);
(statearr_42617[(6)] = c__33157__auto__);

return statearr_42617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42635 = (function (ch,cs,meta42636){
this.ch = ch;
this.cs = cs;
this.meta42636 = meta42636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42637,meta42636__$1){
var self__ = this;
var _42637__$1 = this;
return (new cljs.core.async.t_cljs$core$async42635(self__.ch,self__.cs,meta42636__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42637){
var self__ = this;
var _42637__$1 = this;
return self__.meta42636;
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42636","meta42636",507115522,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42635.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42635.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42635";

cljs.core.async.t_cljs$core$async42635.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42635");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42635.
 */
cljs.core.async.__GT_t_cljs$core$async42635 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42635(ch__$1,cs__$1,meta42636){
return (new cljs.core.async.t_cljs$core$async42635(ch__$1,cs__$1,meta42636));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42635(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33157__auto___42857 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___42857,cs,m,dchan,dctr,done){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___42857,cs,m,dchan,dctr,done){
return (function (state_42772){
var state_val_42773 = (state_42772[(1)]);
if((state_val_42773 === (7))){
var inst_42768 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42774_42858 = state_42772__$1;
(statearr_42774_42858[(2)] = inst_42768);

(statearr_42774_42858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (20))){
var inst_42671 = (state_42772[(7)]);
var inst_42683 = cljs.core.first.call(null,inst_42671);
var inst_42684 = cljs.core.nth.call(null,inst_42683,(0),null);
var inst_42685 = cljs.core.nth.call(null,inst_42683,(1),null);
var state_42772__$1 = (function (){var statearr_42775 = state_42772;
(statearr_42775[(8)] = inst_42684);

return statearr_42775;
})();
if(cljs.core.truth_(inst_42685)){
var statearr_42776_42859 = state_42772__$1;
(statearr_42776_42859[(1)] = (22));

} else {
var statearr_42777_42860 = state_42772__$1;
(statearr_42777_42860[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (27))){
var inst_42720 = (state_42772[(9)]);
var inst_42715 = (state_42772[(10)]);
var inst_42713 = (state_42772[(11)]);
var inst_42640 = (state_42772[(12)]);
var inst_42720__$1 = cljs.core._nth.call(null,inst_42713,inst_42715);
var inst_42721 = cljs.core.async.put_BANG_.call(null,inst_42720__$1,inst_42640,done);
var state_42772__$1 = (function (){var statearr_42778 = state_42772;
(statearr_42778[(9)] = inst_42720__$1);

return statearr_42778;
})();
if(cljs.core.truth_(inst_42721)){
var statearr_42779_42861 = state_42772__$1;
(statearr_42779_42861[(1)] = (30));

} else {
var statearr_42780_42862 = state_42772__$1;
(statearr_42780_42862[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (1))){
var state_42772__$1 = state_42772;
var statearr_42781_42863 = state_42772__$1;
(statearr_42781_42863[(2)] = null);

(statearr_42781_42863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (24))){
var inst_42671 = (state_42772[(7)]);
var inst_42690 = (state_42772[(2)]);
var inst_42691 = cljs.core.next.call(null,inst_42671);
var inst_42649 = inst_42691;
var inst_42650 = null;
var inst_42651 = (0);
var inst_42652 = (0);
var state_42772__$1 = (function (){var statearr_42782 = state_42772;
(statearr_42782[(13)] = inst_42652);

(statearr_42782[(14)] = inst_42651);

(statearr_42782[(15)] = inst_42650);

(statearr_42782[(16)] = inst_42690);

(statearr_42782[(17)] = inst_42649);

return statearr_42782;
})();
var statearr_42783_42864 = state_42772__$1;
(statearr_42783_42864[(2)] = null);

(statearr_42783_42864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (39))){
var state_42772__$1 = state_42772;
var statearr_42787_42865 = state_42772__$1;
(statearr_42787_42865[(2)] = null);

(statearr_42787_42865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (4))){
var inst_42640 = (state_42772[(12)]);
var inst_42640__$1 = (state_42772[(2)]);
var inst_42641 = (inst_42640__$1 == null);
var state_42772__$1 = (function (){var statearr_42788 = state_42772;
(statearr_42788[(12)] = inst_42640__$1);

return statearr_42788;
})();
if(cljs.core.truth_(inst_42641)){
var statearr_42789_42866 = state_42772__$1;
(statearr_42789_42866[(1)] = (5));

} else {
var statearr_42790_42867 = state_42772__$1;
(statearr_42790_42867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (15))){
var inst_42652 = (state_42772[(13)]);
var inst_42651 = (state_42772[(14)]);
var inst_42650 = (state_42772[(15)]);
var inst_42649 = (state_42772[(17)]);
var inst_42667 = (state_42772[(2)]);
var inst_42668 = (inst_42652 + (1));
var tmp42784 = inst_42651;
var tmp42785 = inst_42650;
var tmp42786 = inst_42649;
var inst_42649__$1 = tmp42786;
var inst_42650__$1 = tmp42785;
var inst_42651__$1 = tmp42784;
var inst_42652__$1 = inst_42668;
var state_42772__$1 = (function (){var statearr_42791 = state_42772;
(statearr_42791[(13)] = inst_42652__$1);

(statearr_42791[(14)] = inst_42651__$1);

(statearr_42791[(15)] = inst_42650__$1);

(statearr_42791[(17)] = inst_42649__$1);

(statearr_42791[(18)] = inst_42667);

return statearr_42791;
})();
var statearr_42792_42868 = state_42772__$1;
(statearr_42792_42868[(2)] = null);

(statearr_42792_42868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (21))){
var inst_42694 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42796_42869 = state_42772__$1;
(statearr_42796_42869[(2)] = inst_42694);

(statearr_42796_42869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (31))){
var inst_42720 = (state_42772[(9)]);
var inst_42724 = done.call(null,null);
var inst_42725 = cljs.core.async.untap_STAR_.call(null,m,inst_42720);
var state_42772__$1 = (function (){var statearr_42797 = state_42772;
(statearr_42797[(19)] = inst_42724);

return statearr_42797;
})();
var statearr_42798_42870 = state_42772__$1;
(statearr_42798_42870[(2)] = inst_42725);

(statearr_42798_42870[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (32))){
var inst_42712 = (state_42772[(20)]);
var inst_42715 = (state_42772[(10)]);
var inst_42714 = (state_42772[(21)]);
var inst_42713 = (state_42772[(11)]);
var inst_42727 = (state_42772[(2)]);
var inst_42728 = (inst_42715 + (1));
var tmp42793 = inst_42712;
var tmp42794 = inst_42714;
var tmp42795 = inst_42713;
var inst_42712__$1 = tmp42793;
var inst_42713__$1 = tmp42795;
var inst_42714__$1 = tmp42794;
var inst_42715__$1 = inst_42728;
var state_42772__$1 = (function (){var statearr_42799 = state_42772;
(statearr_42799[(20)] = inst_42712__$1);

(statearr_42799[(10)] = inst_42715__$1);

(statearr_42799[(21)] = inst_42714__$1);

(statearr_42799[(11)] = inst_42713__$1);

(statearr_42799[(22)] = inst_42727);

return statearr_42799;
})();
var statearr_42800_42871 = state_42772__$1;
(statearr_42800_42871[(2)] = null);

(statearr_42800_42871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (40))){
var inst_42740 = (state_42772[(23)]);
var inst_42744 = done.call(null,null);
var inst_42745 = cljs.core.async.untap_STAR_.call(null,m,inst_42740);
var state_42772__$1 = (function (){var statearr_42801 = state_42772;
(statearr_42801[(24)] = inst_42744);

return statearr_42801;
})();
var statearr_42802_42872 = state_42772__$1;
(statearr_42802_42872[(2)] = inst_42745);

(statearr_42802_42872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (33))){
var inst_42731 = (state_42772[(25)]);
var inst_42733 = cljs.core.chunked_seq_QMARK_.call(null,inst_42731);
var state_42772__$1 = state_42772;
if(inst_42733){
var statearr_42803_42873 = state_42772__$1;
(statearr_42803_42873[(1)] = (36));

} else {
var statearr_42804_42874 = state_42772__$1;
(statearr_42804_42874[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (13))){
var inst_42661 = (state_42772[(26)]);
var inst_42664 = cljs.core.async.close_BANG_.call(null,inst_42661);
var state_42772__$1 = state_42772;
var statearr_42805_42875 = state_42772__$1;
(statearr_42805_42875[(2)] = inst_42664);

(statearr_42805_42875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (22))){
var inst_42684 = (state_42772[(8)]);
var inst_42687 = cljs.core.async.close_BANG_.call(null,inst_42684);
var state_42772__$1 = state_42772;
var statearr_42806_42876 = state_42772__$1;
(statearr_42806_42876[(2)] = inst_42687);

(statearr_42806_42876[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (36))){
var inst_42731 = (state_42772[(25)]);
var inst_42735 = cljs.core.chunk_first.call(null,inst_42731);
var inst_42736 = cljs.core.chunk_rest.call(null,inst_42731);
var inst_42737 = cljs.core.count.call(null,inst_42735);
var inst_42712 = inst_42736;
var inst_42713 = inst_42735;
var inst_42714 = inst_42737;
var inst_42715 = (0);
var state_42772__$1 = (function (){var statearr_42807 = state_42772;
(statearr_42807[(20)] = inst_42712);

(statearr_42807[(10)] = inst_42715);

(statearr_42807[(21)] = inst_42714);

(statearr_42807[(11)] = inst_42713);

return statearr_42807;
})();
var statearr_42808_42877 = state_42772__$1;
(statearr_42808_42877[(2)] = null);

(statearr_42808_42877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (41))){
var inst_42731 = (state_42772[(25)]);
var inst_42747 = (state_42772[(2)]);
var inst_42748 = cljs.core.next.call(null,inst_42731);
var inst_42712 = inst_42748;
var inst_42713 = null;
var inst_42714 = (0);
var inst_42715 = (0);
var state_42772__$1 = (function (){var statearr_42809 = state_42772;
(statearr_42809[(20)] = inst_42712);

(statearr_42809[(10)] = inst_42715);

(statearr_42809[(21)] = inst_42714);

(statearr_42809[(11)] = inst_42713);

(statearr_42809[(27)] = inst_42747);

return statearr_42809;
})();
var statearr_42810_42878 = state_42772__$1;
(statearr_42810_42878[(2)] = null);

(statearr_42810_42878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (43))){
var state_42772__$1 = state_42772;
var statearr_42811_42879 = state_42772__$1;
(statearr_42811_42879[(2)] = null);

(statearr_42811_42879[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (29))){
var inst_42756 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42812_42880 = state_42772__$1;
(statearr_42812_42880[(2)] = inst_42756);

(statearr_42812_42880[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (44))){
var inst_42765 = (state_42772[(2)]);
var state_42772__$1 = (function (){var statearr_42813 = state_42772;
(statearr_42813[(28)] = inst_42765);

return statearr_42813;
})();
var statearr_42814_42881 = state_42772__$1;
(statearr_42814_42881[(2)] = null);

(statearr_42814_42881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (6))){
var inst_42704 = (state_42772[(29)]);
var inst_42703 = cljs.core.deref.call(null,cs);
var inst_42704__$1 = cljs.core.keys.call(null,inst_42703);
var inst_42705 = cljs.core.count.call(null,inst_42704__$1);
var inst_42706 = cljs.core.reset_BANG_.call(null,dctr,inst_42705);
var inst_42711 = cljs.core.seq.call(null,inst_42704__$1);
var inst_42712 = inst_42711;
var inst_42713 = null;
var inst_42714 = (0);
var inst_42715 = (0);
var state_42772__$1 = (function (){var statearr_42815 = state_42772;
(statearr_42815[(20)] = inst_42712);

(statearr_42815[(10)] = inst_42715);

(statearr_42815[(29)] = inst_42704__$1);

(statearr_42815[(21)] = inst_42714);

(statearr_42815[(11)] = inst_42713);

(statearr_42815[(30)] = inst_42706);

return statearr_42815;
})();
var statearr_42816_42882 = state_42772__$1;
(statearr_42816_42882[(2)] = null);

(statearr_42816_42882[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (28))){
var inst_42712 = (state_42772[(20)]);
var inst_42731 = (state_42772[(25)]);
var inst_42731__$1 = cljs.core.seq.call(null,inst_42712);
var state_42772__$1 = (function (){var statearr_42817 = state_42772;
(statearr_42817[(25)] = inst_42731__$1);

return statearr_42817;
})();
if(inst_42731__$1){
var statearr_42818_42883 = state_42772__$1;
(statearr_42818_42883[(1)] = (33));

} else {
var statearr_42819_42884 = state_42772__$1;
(statearr_42819_42884[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (25))){
var inst_42715 = (state_42772[(10)]);
var inst_42714 = (state_42772[(21)]);
var inst_42717 = (inst_42715 < inst_42714);
var inst_42718 = inst_42717;
var state_42772__$1 = state_42772;
if(cljs.core.truth_(inst_42718)){
var statearr_42820_42885 = state_42772__$1;
(statearr_42820_42885[(1)] = (27));

} else {
var statearr_42821_42886 = state_42772__$1;
(statearr_42821_42886[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (34))){
var state_42772__$1 = state_42772;
var statearr_42822_42887 = state_42772__$1;
(statearr_42822_42887[(2)] = null);

(statearr_42822_42887[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (17))){
var state_42772__$1 = state_42772;
var statearr_42823_42888 = state_42772__$1;
(statearr_42823_42888[(2)] = null);

(statearr_42823_42888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (3))){
var inst_42770 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42772__$1,inst_42770);
} else {
if((state_val_42773 === (12))){
var inst_42699 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42824_42889 = state_42772__$1;
(statearr_42824_42889[(2)] = inst_42699);

(statearr_42824_42889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (2))){
var state_42772__$1 = state_42772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42772__$1,(4),ch);
} else {
if((state_val_42773 === (23))){
var state_42772__$1 = state_42772;
var statearr_42825_42890 = state_42772__$1;
(statearr_42825_42890[(2)] = null);

(statearr_42825_42890[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (35))){
var inst_42754 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42826_42891 = state_42772__$1;
(statearr_42826_42891[(2)] = inst_42754);

(statearr_42826_42891[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (19))){
var inst_42671 = (state_42772[(7)]);
var inst_42675 = cljs.core.chunk_first.call(null,inst_42671);
var inst_42676 = cljs.core.chunk_rest.call(null,inst_42671);
var inst_42677 = cljs.core.count.call(null,inst_42675);
var inst_42649 = inst_42676;
var inst_42650 = inst_42675;
var inst_42651 = inst_42677;
var inst_42652 = (0);
var state_42772__$1 = (function (){var statearr_42827 = state_42772;
(statearr_42827[(13)] = inst_42652);

(statearr_42827[(14)] = inst_42651);

(statearr_42827[(15)] = inst_42650);

(statearr_42827[(17)] = inst_42649);

return statearr_42827;
})();
var statearr_42828_42892 = state_42772__$1;
(statearr_42828_42892[(2)] = null);

(statearr_42828_42892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (11))){
var inst_42671 = (state_42772[(7)]);
var inst_42649 = (state_42772[(17)]);
var inst_42671__$1 = cljs.core.seq.call(null,inst_42649);
var state_42772__$1 = (function (){var statearr_42829 = state_42772;
(statearr_42829[(7)] = inst_42671__$1);

return statearr_42829;
})();
if(inst_42671__$1){
var statearr_42830_42893 = state_42772__$1;
(statearr_42830_42893[(1)] = (16));

} else {
var statearr_42831_42894 = state_42772__$1;
(statearr_42831_42894[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (9))){
var inst_42701 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42832_42895 = state_42772__$1;
(statearr_42832_42895[(2)] = inst_42701);

(statearr_42832_42895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (5))){
var inst_42647 = cljs.core.deref.call(null,cs);
var inst_42648 = cljs.core.seq.call(null,inst_42647);
var inst_42649 = inst_42648;
var inst_42650 = null;
var inst_42651 = (0);
var inst_42652 = (0);
var state_42772__$1 = (function (){var statearr_42833 = state_42772;
(statearr_42833[(13)] = inst_42652);

(statearr_42833[(14)] = inst_42651);

(statearr_42833[(15)] = inst_42650);

(statearr_42833[(17)] = inst_42649);

return statearr_42833;
})();
var statearr_42834_42896 = state_42772__$1;
(statearr_42834_42896[(2)] = null);

(statearr_42834_42896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (14))){
var state_42772__$1 = state_42772;
var statearr_42835_42897 = state_42772__$1;
(statearr_42835_42897[(2)] = null);

(statearr_42835_42897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (45))){
var inst_42762 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42836_42898 = state_42772__$1;
(statearr_42836_42898[(2)] = inst_42762);

(statearr_42836_42898[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (26))){
var inst_42704 = (state_42772[(29)]);
var inst_42758 = (state_42772[(2)]);
var inst_42759 = cljs.core.seq.call(null,inst_42704);
var state_42772__$1 = (function (){var statearr_42837 = state_42772;
(statearr_42837[(31)] = inst_42758);

return statearr_42837;
})();
if(inst_42759){
var statearr_42838_42899 = state_42772__$1;
(statearr_42838_42899[(1)] = (42));

} else {
var statearr_42839_42900 = state_42772__$1;
(statearr_42839_42900[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (16))){
var inst_42671 = (state_42772[(7)]);
var inst_42673 = cljs.core.chunked_seq_QMARK_.call(null,inst_42671);
var state_42772__$1 = state_42772;
if(inst_42673){
var statearr_42840_42901 = state_42772__$1;
(statearr_42840_42901[(1)] = (19));

} else {
var statearr_42841_42902 = state_42772__$1;
(statearr_42841_42902[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (38))){
var inst_42751 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42842_42903 = state_42772__$1;
(statearr_42842_42903[(2)] = inst_42751);

(statearr_42842_42903[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (30))){
var state_42772__$1 = state_42772;
var statearr_42843_42904 = state_42772__$1;
(statearr_42843_42904[(2)] = null);

(statearr_42843_42904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (10))){
var inst_42652 = (state_42772[(13)]);
var inst_42650 = (state_42772[(15)]);
var inst_42660 = cljs.core._nth.call(null,inst_42650,inst_42652);
var inst_42661 = cljs.core.nth.call(null,inst_42660,(0),null);
var inst_42662 = cljs.core.nth.call(null,inst_42660,(1),null);
var state_42772__$1 = (function (){var statearr_42844 = state_42772;
(statearr_42844[(26)] = inst_42661);

return statearr_42844;
})();
if(cljs.core.truth_(inst_42662)){
var statearr_42845_42905 = state_42772__$1;
(statearr_42845_42905[(1)] = (13));

} else {
var statearr_42846_42906 = state_42772__$1;
(statearr_42846_42906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (18))){
var inst_42697 = (state_42772[(2)]);
var state_42772__$1 = state_42772;
var statearr_42847_42907 = state_42772__$1;
(statearr_42847_42907[(2)] = inst_42697);

(statearr_42847_42907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (42))){
var state_42772__$1 = state_42772;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42772__$1,(45),dchan);
} else {
if((state_val_42773 === (37))){
var inst_42740 = (state_42772[(23)]);
var inst_42640 = (state_42772[(12)]);
var inst_42731 = (state_42772[(25)]);
var inst_42740__$1 = cljs.core.first.call(null,inst_42731);
var inst_42741 = cljs.core.async.put_BANG_.call(null,inst_42740__$1,inst_42640,done);
var state_42772__$1 = (function (){var statearr_42848 = state_42772;
(statearr_42848[(23)] = inst_42740__$1);

return statearr_42848;
})();
if(cljs.core.truth_(inst_42741)){
var statearr_42849_42908 = state_42772__$1;
(statearr_42849_42908[(1)] = (39));

} else {
var statearr_42850_42909 = state_42772__$1;
(statearr_42850_42909[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42773 === (8))){
var inst_42652 = (state_42772[(13)]);
var inst_42651 = (state_42772[(14)]);
var inst_42654 = (inst_42652 < inst_42651);
var inst_42655 = inst_42654;
var state_42772__$1 = state_42772;
if(cljs.core.truth_(inst_42655)){
var statearr_42851_42910 = state_42772__$1;
(statearr_42851_42910[(1)] = (10));

} else {
var statearr_42852_42911 = state_42772__$1;
(statearr_42852_42911[(1)] = (11));

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
});})(c__33157__auto___42857,cs,m,dchan,dctr,done))
;
return ((function (switch__32990__auto__,c__33157__auto___42857,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32991__auto__ = null;
var cljs$core$async$mult_$_state_machine__32991__auto____0 = (function (){
var statearr_42853 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42853[(0)] = cljs$core$async$mult_$_state_machine__32991__auto__);

(statearr_42853[(1)] = (1));

return statearr_42853;
});
var cljs$core$async$mult_$_state_machine__32991__auto____1 = (function (state_42772){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_42772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e42854){if((e42854 instanceof Object)){
var ex__32994__auto__ = e42854;
var statearr_42855_42912 = state_42772;
(statearr_42855_42912[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42913 = state_42772;
state_42772 = G__42913;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32991__auto__ = function(state_42772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32991__auto____1.call(this,state_42772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32991__auto____0;
cljs$core$async$mult_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32991__auto____1;
return cljs$core$async$mult_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___42857,cs,m,dchan,dctr,done))
})();
var state__33159__auto__ = (function (){var statearr_42856 = f__33158__auto__.call(null);
(statearr_42856[(6)] = c__33157__auto___42857);

return statearr_42856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___42857,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42915 = arguments.length;
switch (G__42915) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___42927 = arguments.length;
var i__4642__auto___42928 = (0);
while(true){
if((i__4642__auto___42928 < len__4641__auto___42927)){
args__4647__auto__.push((arguments[i__4642__auto___42928]));

var G__42929 = (i__4642__auto___42928 + (1));
i__4642__auto___42928 = G__42929;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42921){
var map__42922 = p__42921;
var map__42922__$1 = (((((!((map__42922 == null))))?(((((map__42922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42922.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42922):map__42922);
var opts = map__42922__$1;
var statearr_42924_42930 = state;
(statearr_42924_42930[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__42922,map__42922__$1,opts){
return (function (val){
var statearr_42925_42931 = state;
(statearr_42925_42931[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42922,map__42922__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_42926_42932 = state;
(statearr_42926_42932[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42917){
var G__42918 = cljs.core.first.call(null,seq42917);
var seq42917__$1 = cljs.core.next.call(null,seq42917);
var G__42919 = cljs.core.first.call(null,seq42917__$1);
var seq42917__$2 = cljs.core.next.call(null,seq42917__$1);
var G__42920 = cljs.core.first.call(null,seq42917__$2);
var seq42917__$3 = cljs.core.next.call(null,seq42917__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42918,G__42919,G__42920,seq42917__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42933 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42933 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42934){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42934 = meta42934;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42935,meta42934__$1){
var self__ = this;
var _42935__$1 = this;
return (new cljs.core.async.t_cljs$core$async42933(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42934__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42935){
var self__ = this;
var _42935__$1 = this;
return self__.meta42934;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42934","meta42934",-836660894,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42933.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42933.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42933";

cljs.core.async.t_cljs$core$async42933.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async42933");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42933.
 */
cljs.core.async.__GT_t_cljs$core$async42933 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42933(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42934){
return (new cljs.core.async.t_cljs$core$async42933(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42934));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42933(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33157__auto___43097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43037){
var state_val_43038 = (state_43037[(1)]);
if((state_val_43038 === (7))){
var inst_42952 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
var statearr_43039_43098 = state_43037__$1;
(statearr_43039_43098[(2)] = inst_42952);

(statearr_43039_43098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (20))){
var inst_42964 = (state_43037[(7)]);
var state_43037__$1 = state_43037;
var statearr_43040_43099 = state_43037__$1;
(statearr_43040_43099[(2)] = inst_42964);

(statearr_43040_43099[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (27))){
var state_43037__$1 = state_43037;
var statearr_43041_43100 = state_43037__$1;
(statearr_43041_43100[(2)] = null);

(statearr_43041_43100[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (1))){
var inst_42939 = (state_43037[(8)]);
var inst_42939__$1 = calc_state.call(null);
var inst_42941 = (inst_42939__$1 == null);
var inst_42942 = cljs.core.not.call(null,inst_42941);
var state_43037__$1 = (function (){var statearr_43042 = state_43037;
(statearr_43042[(8)] = inst_42939__$1);

return statearr_43042;
})();
if(inst_42942){
var statearr_43043_43101 = state_43037__$1;
(statearr_43043_43101[(1)] = (2));

} else {
var statearr_43044_43102 = state_43037__$1;
(statearr_43044_43102[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (24))){
var inst_42997 = (state_43037[(9)]);
var inst_42988 = (state_43037[(10)]);
var inst_43011 = (state_43037[(11)]);
var inst_43011__$1 = inst_42988.call(null,inst_42997);
var state_43037__$1 = (function (){var statearr_43045 = state_43037;
(statearr_43045[(11)] = inst_43011__$1);

return statearr_43045;
})();
if(cljs.core.truth_(inst_43011__$1)){
var statearr_43046_43103 = state_43037__$1;
(statearr_43046_43103[(1)] = (29));

} else {
var statearr_43047_43104 = state_43037__$1;
(statearr_43047_43104[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (4))){
var inst_42955 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_42955)){
var statearr_43048_43105 = state_43037__$1;
(statearr_43048_43105[(1)] = (8));

} else {
var statearr_43049_43106 = state_43037__$1;
(statearr_43049_43106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (15))){
var inst_42982 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_42982)){
var statearr_43050_43107 = state_43037__$1;
(statearr_43050_43107[(1)] = (19));

} else {
var statearr_43051_43108 = state_43037__$1;
(statearr_43051_43108[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (21))){
var inst_42987 = (state_43037[(12)]);
var inst_42987__$1 = (state_43037[(2)]);
var inst_42988 = cljs.core.get.call(null,inst_42987__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42989 = cljs.core.get.call(null,inst_42987__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42990 = cljs.core.get.call(null,inst_42987__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43037__$1 = (function (){var statearr_43052 = state_43037;
(statearr_43052[(13)] = inst_42989);

(statearr_43052[(12)] = inst_42987__$1);

(statearr_43052[(10)] = inst_42988);

return statearr_43052;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43037__$1,(22),inst_42990);
} else {
if((state_val_43038 === (31))){
var inst_43019 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_43019)){
var statearr_43053_43109 = state_43037__$1;
(statearr_43053_43109[(1)] = (32));

} else {
var statearr_43054_43110 = state_43037__$1;
(statearr_43054_43110[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (32))){
var inst_42996 = (state_43037[(14)]);
var state_43037__$1 = state_43037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43037__$1,(35),out,inst_42996);
} else {
if((state_val_43038 === (33))){
var inst_42987 = (state_43037[(12)]);
var inst_42964 = inst_42987;
var state_43037__$1 = (function (){var statearr_43055 = state_43037;
(statearr_43055[(7)] = inst_42964);

return statearr_43055;
})();
var statearr_43056_43111 = state_43037__$1;
(statearr_43056_43111[(2)] = null);

(statearr_43056_43111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (13))){
var inst_42964 = (state_43037[(7)]);
var inst_42971 = inst_42964.cljs$lang$protocol_mask$partition0$;
var inst_42972 = (inst_42971 & (64));
var inst_42973 = inst_42964.cljs$core$ISeq$;
var inst_42974 = (cljs.core.PROTOCOL_SENTINEL === inst_42973);
var inst_42975 = ((inst_42972) || (inst_42974));
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_42975)){
var statearr_43057_43112 = state_43037__$1;
(statearr_43057_43112[(1)] = (16));

} else {
var statearr_43058_43113 = state_43037__$1;
(statearr_43058_43113[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (22))){
var inst_42997 = (state_43037[(9)]);
var inst_42996 = (state_43037[(14)]);
var inst_42995 = (state_43037[(2)]);
var inst_42996__$1 = cljs.core.nth.call(null,inst_42995,(0),null);
var inst_42997__$1 = cljs.core.nth.call(null,inst_42995,(1),null);
var inst_42998 = (inst_42996__$1 == null);
var inst_42999 = cljs.core._EQ_.call(null,inst_42997__$1,change);
var inst_43000 = ((inst_42998) || (inst_42999));
var state_43037__$1 = (function (){var statearr_43059 = state_43037;
(statearr_43059[(9)] = inst_42997__$1);

(statearr_43059[(14)] = inst_42996__$1);

return statearr_43059;
})();
if(cljs.core.truth_(inst_43000)){
var statearr_43060_43114 = state_43037__$1;
(statearr_43060_43114[(1)] = (23));

} else {
var statearr_43061_43115 = state_43037__$1;
(statearr_43061_43115[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (36))){
var inst_42987 = (state_43037[(12)]);
var inst_42964 = inst_42987;
var state_43037__$1 = (function (){var statearr_43062 = state_43037;
(statearr_43062[(7)] = inst_42964);

return statearr_43062;
})();
var statearr_43063_43116 = state_43037__$1;
(statearr_43063_43116[(2)] = null);

(statearr_43063_43116[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (29))){
var inst_43011 = (state_43037[(11)]);
var state_43037__$1 = state_43037;
var statearr_43064_43117 = state_43037__$1;
(statearr_43064_43117[(2)] = inst_43011);

(statearr_43064_43117[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (6))){
var state_43037__$1 = state_43037;
var statearr_43065_43118 = state_43037__$1;
(statearr_43065_43118[(2)] = false);

(statearr_43065_43118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (28))){
var inst_43007 = (state_43037[(2)]);
var inst_43008 = calc_state.call(null);
var inst_42964 = inst_43008;
var state_43037__$1 = (function (){var statearr_43066 = state_43037;
(statearr_43066[(7)] = inst_42964);

(statearr_43066[(15)] = inst_43007);

return statearr_43066;
})();
var statearr_43067_43119 = state_43037__$1;
(statearr_43067_43119[(2)] = null);

(statearr_43067_43119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (25))){
var inst_43033 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
var statearr_43068_43120 = state_43037__$1;
(statearr_43068_43120[(2)] = inst_43033);

(statearr_43068_43120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (34))){
var inst_43031 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
var statearr_43069_43121 = state_43037__$1;
(statearr_43069_43121[(2)] = inst_43031);

(statearr_43069_43121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (17))){
var state_43037__$1 = state_43037;
var statearr_43070_43122 = state_43037__$1;
(statearr_43070_43122[(2)] = false);

(statearr_43070_43122[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (3))){
var state_43037__$1 = state_43037;
var statearr_43071_43123 = state_43037__$1;
(statearr_43071_43123[(2)] = false);

(statearr_43071_43123[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (12))){
var inst_43035 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43037__$1,inst_43035);
} else {
if((state_val_43038 === (2))){
var inst_42939 = (state_43037[(8)]);
var inst_42944 = inst_42939.cljs$lang$protocol_mask$partition0$;
var inst_42945 = (inst_42944 & (64));
var inst_42946 = inst_42939.cljs$core$ISeq$;
var inst_42947 = (cljs.core.PROTOCOL_SENTINEL === inst_42946);
var inst_42948 = ((inst_42945) || (inst_42947));
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_42948)){
var statearr_43072_43124 = state_43037__$1;
(statearr_43072_43124[(1)] = (5));

} else {
var statearr_43073_43125 = state_43037__$1;
(statearr_43073_43125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (23))){
var inst_42996 = (state_43037[(14)]);
var inst_43002 = (inst_42996 == null);
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_43002)){
var statearr_43074_43126 = state_43037__$1;
(statearr_43074_43126[(1)] = (26));

} else {
var statearr_43075_43127 = state_43037__$1;
(statearr_43075_43127[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (35))){
var inst_43022 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
if(cljs.core.truth_(inst_43022)){
var statearr_43076_43128 = state_43037__$1;
(statearr_43076_43128[(1)] = (36));

} else {
var statearr_43077_43129 = state_43037__$1;
(statearr_43077_43129[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (19))){
var inst_42964 = (state_43037[(7)]);
var inst_42984 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42964);
var state_43037__$1 = state_43037;
var statearr_43078_43130 = state_43037__$1;
(statearr_43078_43130[(2)] = inst_42984);

(statearr_43078_43130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (11))){
var inst_42964 = (state_43037[(7)]);
var inst_42968 = (inst_42964 == null);
var inst_42969 = cljs.core.not.call(null,inst_42968);
var state_43037__$1 = state_43037;
if(inst_42969){
var statearr_43079_43131 = state_43037__$1;
(statearr_43079_43131[(1)] = (13));

} else {
var statearr_43080_43132 = state_43037__$1;
(statearr_43080_43132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (9))){
var inst_42939 = (state_43037[(8)]);
var state_43037__$1 = state_43037;
var statearr_43081_43133 = state_43037__$1;
(statearr_43081_43133[(2)] = inst_42939);

(statearr_43081_43133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (5))){
var state_43037__$1 = state_43037;
var statearr_43082_43134 = state_43037__$1;
(statearr_43082_43134[(2)] = true);

(statearr_43082_43134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (14))){
var state_43037__$1 = state_43037;
var statearr_43083_43135 = state_43037__$1;
(statearr_43083_43135[(2)] = false);

(statearr_43083_43135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (26))){
var inst_42997 = (state_43037[(9)]);
var inst_43004 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42997);
var state_43037__$1 = state_43037;
var statearr_43084_43136 = state_43037__$1;
(statearr_43084_43136[(2)] = inst_43004);

(statearr_43084_43136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (16))){
var state_43037__$1 = state_43037;
var statearr_43085_43137 = state_43037__$1;
(statearr_43085_43137[(2)] = true);

(statearr_43085_43137[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (38))){
var inst_43027 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
var statearr_43086_43138 = state_43037__$1;
(statearr_43086_43138[(2)] = inst_43027);

(statearr_43086_43138[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (30))){
var inst_42997 = (state_43037[(9)]);
var inst_42989 = (state_43037[(13)]);
var inst_42988 = (state_43037[(10)]);
var inst_43014 = cljs.core.empty_QMARK_.call(null,inst_42988);
var inst_43015 = inst_42989.call(null,inst_42997);
var inst_43016 = cljs.core.not.call(null,inst_43015);
var inst_43017 = ((inst_43014) && (inst_43016));
var state_43037__$1 = state_43037;
var statearr_43087_43139 = state_43037__$1;
(statearr_43087_43139[(2)] = inst_43017);

(statearr_43087_43139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (10))){
var inst_42939 = (state_43037[(8)]);
var inst_42960 = (state_43037[(2)]);
var inst_42961 = cljs.core.get.call(null,inst_42960,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42962 = cljs.core.get.call(null,inst_42960,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42963 = cljs.core.get.call(null,inst_42960,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42964 = inst_42939;
var state_43037__$1 = (function (){var statearr_43088 = state_43037;
(statearr_43088[(16)] = inst_42961);

(statearr_43088[(17)] = inst_42962);

(statearr_43088[(7)] = inst_42964);

(statearr_43088[(18)] = inst_42963);

return statearr_43088;
})();
var statearr_43089_43140 = state_43037__$1;
(statearr_43089_43140[(2)] = null);

(statearr_43089_43140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (18))){
var inst_42979 = (state_43037[(2)]);
var state_43037__$1 = state_43037;
var statearr_43090_43141 = state_43037__$1;
(statearr_43090_43141[(2)] = inst_42979);

(statearr_43090_43141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (37))){
var state_43037__$1 = state_43037;
var statearr_43091_43142 = state_43037__$1;
(statearr_43091_43142[(2)] = null);

(statearr_43091_43142[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43038 === (8))){
var inst_42939 = (state_43037[(8)]);
var inst_42957 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42939);
var state_43037__$1 = state_43037;
var statearr_43092_43143 = state_43037__$1;
(statearr_43092_43143[(2)] = inst_42957);

(statearr_43092_43143[(1)] = (10));


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
});})(c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32990__auto__,c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32991__auto__ = null;
var cljs$core$async$mix_$_state_machine__32991__auto____0 = (function (){
var statearr_43093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43093[(0)] = cljs$core$async$mix_$_state_machine__32991__auto__);

(statearr_43093[(1)] = (1));

return statearr_43093;
});
var cljs$core$async$mix_$_state_machine__32991__auto____1 = (function (state_43037){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43094){if((e43094 instanceof Object)){
var ex__32994__auto__ = e43094;
var statearr_43095_43144 = state_43037;
(statearr_43095_43144[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43145 = state_43037;
state_43037 = G__43145;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32991__auto__ = function(state_43037){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32991__auto____1.call(this,state_43037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32991__auto____0;
cljs$core$async$mix_$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32991__auto____1;
return cljs$core$async$mix_$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33159__auto__ = (function (){var statearr_43096 = f__33158__auto__.call(null);
(statearr_43096[(6)] = c__33157__auto___43097);

return statearr_43096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43097,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43147 = arguments.length;
switch (G__43147) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__43151 = arguments.length;
switch (G__43151) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__43149_SHARP_){
if(cljs.core.truth_(p1__43149_SHARP_.call(null,topic))){
return p1__43149_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43149_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43152 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43153){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43153 = meta43153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43154,meta43153__$1){
var self__ = this;
var _43154__$1 = this;
return (new cljs.core.async.t_cljs$core$async43152(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43153__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43154){
var self__ = this;
var _43154__$1 = this;
return self__.meta43153;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43153","meta43153",-928168443,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43152";

cljs.core.async.t_cljs$core$async43152.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43152");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43152.
 */
cljs.core.async.__GT_t_cljs$core$async43152 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43153){
return (new cljs.core.async.t_cljs$core$async43152(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43153));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43152(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33157__auto___43272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43272,mults,ensure_mult,p){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43272,mults,ensure_mult,p){
return (function (state_43226){
var state_val_43227 = (state_43226[(1)]);
if((state_val_43227 === (7))){
var inst_43222 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43228_43273 = state_43226__$1;
(statearr_43228_43273[(2)] = inst_43222);

(statearr_43228_43273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (20))){
var state_43226__$1 = state_43226;
var statearr_43229_43274 = state_43226__$1;
(statearr_43229_43274[(2)] = null);

(statearr_43229_43274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (1))){
var state_43226__$1 = state_43226;
var statearr_43230_43275 = state_43226__$1;
(statearr_43230_43275[(2)] = null);

(statearr_43230_43275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (24))){
var inst_43205 = (state_43226[(7)]);
var inst_43214 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43205);
var state_43226__$1 = state_43226;
var statearr_43231_43276 = state_43226__$1;
(statearr_43231_43276[(2)] = inst_43214);

(statearr_43231_43276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (4))){
var inst_43157 = (state_43226[(8)]);
var inst_43157__$1 = (state_43226[(2)]);
var inst_43158 = (inst_43157__$1 == null);
var state_43226__$1 = (function (){var statearr_43232 = state_43226;
(statearr_43232[(8)] = inst_43157__$1);

return statearr_43232;
})();
if(cljs.core.truth_(inst_43158)){
var statearr_43233_43277 = state_43226__$1;
(statearr_43233_43277[(1)] = (5));

} else {
var statearr_43234_43278 = state_43226__$1;
(statearr_43234_43278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (15))){
var inst_43199 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43235_43279 = state_43226__$1;
(statearr_43235_43279[(2)] = inst_43199);

(statearr_43235_43279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (21))){
var inst_43219 = (state_43226[(2)]);
var state_43226__$1 = (function (){var statearr_43236 = state_43226;
(statearr_43236[(9)] = inst_43219);

return statearr_43236;
})();
var statearr_43237_43280 = state_43226__$1;
(statearr_43237_43280[(2)] = null);

(statearr_43237_43280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (13))){
var inst_43181 = (state_43226[(10)]);
var inst_43183 = cljs.core.chunked_seq_QMARK_.call(null,inst_43181);
var state_43226__$1 = state_43226;
if(inst_43183){
var statearr_43238_43281 = state_43226__$1;
(statearr_43238_43281[(1)] = (16));

} else {
var statearr_43239_43282 = state_43226__$1;
(statearr_43239_43282[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (22))){
var inst_43211 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43211)){
var statearr_43240_43283 = state_43226__$1;
(statearr_43240_43283[(1)] = (23));

} else {
var statearr_43241_43284 = state_43226__$1;
(statearr_43241_43284[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (6))){
var inst_43157 = (state_43226[(8)]);
var inst_43207 = (state_43226[(11)]);
var inst_43205 = (state_43226[(7)]);
var inst_43205__$1 = topic_fn.call(null,inst_43157);
var inst_43206 = cljs.core.deref.call(null,mults);
var inst_43207__$1 = cljs.core.get.call(null,inst_43206,inst_43205__$1);
var state_43226__$1 = (function (){var statearr_43242 = state_43226;
(statearr_43242[(11)] = inst_43207__$1);

(statearr_43242[(7)] = inst_43205__$1);

return statearr_43242;
})();
if(cljs.core.truth_(inst_43207__$1)){
var statearr_43243_43285 = state_43226__$1;
(statearr_43243_43285[(1)] = (19));

} else {
var statearr_43244_43286 = state_43226__$1;
(statearr_43244_43286[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (25))){
var inst_43216 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43245_43287 = state_43226__$1;
(statearr_43245_43287[(2)] = inst_43216);

(statearr_43245_43287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (17))){
var inst_43181 = (state_43226[(10)]);
var inst_43190 = cljs.core.first.call(null,inst_43181);
var inst_43191 = cljs.core.async.muxch_STAR_.call(null,inst_43190);
var inst_43192 = cljs.core.async.close_BANG_.call(null,inst_43191);
var inst_43193 = cljs.core.next.call(null,inst_43181);
var inst_43167 = inst_43193;
var inst_43168 = null;
var inst_43169 = (0);
var inst_43170 = (0);
var state_43226__$1 = (function (){var statearr_43246 = state_43226;
(statearr_43246[(12)] = inst_43168);

(statearr_43246[(13)] = inst_43169);

(statearr_43246[(14)] = inst_43170);

(statearr_43246[(15)] = inst_43192);

(statearr_43246[(16)] = inst_43167);

return statearr_43246;
})();
var statearr_43247_43288 = state_43226__$1;
(statearr_43247_43288[(2)] = null);

(statearr_43247_43288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (3))){
var inst_43224 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43226__$1,inst_43224);
} else {
if((state_val_43227 === (12))){
var inst_43201 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43248_43289 = state_43226__$1;
(statearr_43248_43289[(2)] = inst_43201);

(statearr_43248_43289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (2))){
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43226__$1,(4),ch);
} else {
if((state_val_43227 === (23))){
var state_43226__$1 = state_43226;
var statearr_43249_43290 = state_43226__$1;
(statearr_43249_43290[(2)] = null);

(statearr_43249_43290[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (19))){
var inst_43157 = (state_43226[(8)]);
var inst_43207 = (state_43226[(11)]);
var inst_43209 = cljs.core.async.muxch_STAR_.call(null,inst_43207);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43226__$1,(22),inst_43209,inst_43157);
} else {
if((state_val_43227 === (11))){
var inst_43181 = (state_43226[(10)]);
var inst_43167 = (state_43226[(16)]);
var inst_43181__$1 = cljs.core.seq.call(null,inst_43167);
var state_43226__$1 = (function (){var statearr_43250 = state_43226;
(statearr_43250[(10)] = inst_43181__$1);

return statearr_43250;
})();
if(inst_43181__$1){
var statearr_43251_43291 = state_43226__$1;
(statearr_43251_43291[(1)] = (13));

} else {
var statearr_43252_43292 = state_43226__$1;
(statearr_43252_43292[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (9))){
var inst_43203 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43253_43293 = state_43226__$1;
(statearr_43253_43293[(2)] = inst_43203);

(statearr_43253_43293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (5))){
var inst_43164 = cljs.core.deref.call(null,mults);
var inst_43165 = cljs.core.vals.call(null,inst_43164);
var inst_43166 = cljs.core.seq.call(null,inst_43165);
var inst_43167 = inst_43166;
var inst_43168 = null;
var inst_43169 = (0);
var inst_43170 = (0);
var state_43226__$1 = (function (){var statearr_43254 = state_43226;
(statearr_43254[(12)] = inst_43168);

(statearr_43254[(13)] = inst_43169);

(statearr_43254[(14)] = inst_43170);

(statearr_43254[(16)] = inst_43167);

return statearr_43254;
})();
var statearr_43255_43294 = state_43226__$1;
(statearr_43255_43294[(2)] = null);

(statearr_43255_43294[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (14))){
var state_43226__$1 = state_43226;
var statearr_43259_43295 = state_43226__$1;
(statearr_43259_43295[(2)] = null);

(statearr_43259_43295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (16))){
var inst_43181 = (state_43226[(10)]);
var inst_43185 = cljs.core.chunk_first.call(null,inst_43181);
var inst_43186 = cljs.core.chunk_rest.call(null,inst_43181);
var inst_43187 = cljs.core.count.call(null,inst_43185);
var inst_43167 = inst_43186;
var inst_43168 = inst_43185;
var inst_43169 = inst_43187;
var inst_43170 = (0);
var state_43226__$1 = (function (){var statearr_43260 = state_43226;
(statearr_43260[(12)] = inst_43168);

(statearr_43260[(13)] = inst_43169);

(statearr_43260[(14)] = inst_43170);

(statearr_43260[(16)] = inst_43167);

return statearr_43260;
})();
var statearr_43261_43296 = state_43226__$1;
(statearr_43261_43296[(2)] = null);

(statearr_43261_43296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (10))){
var inst_43168 = (state_43226[(12)]);
var inst_43169 = (state_43226[(13)]);
var inst_43170 = (state_43226[(14)]);
var inst_43167 = (state_43226[(16)]);
var inst_43175 = cljs.core._nth.call(null,inst_43168,inst_43170);
var inst_43176 = cljs.core.async.muxch_STAR_.call(null,inst_43175);
var inst_43177 = cljs.core.async.close_BANG_.call(null,inst_43176);
var inst_43178 = (inst_43170 + (1));
var tmp43256 = inst_43168;
var tmp43257 = inst_43169;
var tmp43258 = inst_43167;
var inst_43167__$1 = tmp43258;
var inst_43168__$1 = tmp43256;
var inst_43169__$1 = tmp43257;
var inst_43170__$1 = inst_43178;
var state_43226__$1 = (function (){var statearr_43262 = state_43226;
(statearr_43262[(12)] = inst_43168__$1);

(statearr_43262[(13)] = inst_43169__$1);

(statearr_43262[(14)] = inst_43170__$1);

(statearr_43262[(17)] = inst_43177);

(statearr_43262[(16)] = inst_43167__$1);

return statearr_43262;
})();
var statearr_43263_43297 = state_43226__$1;
(statearr_43263_43297[(2)] = null);

(statearr_43263_43297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (18))){
var inst_43196 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43264_43298 = state_43226__$1;
(statearr_43264_43298[(2)] = inst_43196);

(statearr_43264_43298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (8))){
var inst_43169 = (state_43226[(13)]);
var inst_43170 = (state_43226[(14)]);
var inst_43172 = (inst_43170 < inst_43169);
var inst_43173 = inst_43172;
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43173)){
var statearr_43265_43299 = state_43226__$1;
(statearr_43265_43299[(1)] = (10));

} else {
var statearr_43266_43300 = state_43226__$1;
(statearr_43266_43300[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__33157__auto___43272,mults,ensure_mult,p))
;
return ((function (switch__32990__auto__,c__33157__auto___43272,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43267[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43267[(1)] = (1));

return statearr_43267;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43226){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43268){if((e43268 instanceof Object)){
var ex__32994__auto__ = e43268;
var statearr_43269_43301 = state_43226;
(statearr_43269_43301[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43302 = state_43226;
state_43226 = G__43302;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43272,mults,ensure_mult,p))
})();
var state__33159__auto__ = (function (){var statearr_43270 = f__33158__auto__.call(null);
(statearr_43270[(6)] = c__33157__auto___43272);

return statearr_43270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43272,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__43304 = arguments.length;
switch (G__43304) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__43307 = arguments.length;
switch (G__43307) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__43310 = arguments.length;
switch (G__43310) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33157__auto___43377 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43349){
var state_val_43350 = (state_43349[(1)]);
if((state_val_43350 === (7))){
var state_43349__$1 = state_43349;
var statearr_43351_43378 = state_43349__$1;
(statearr_43351_43378[(2)] = null);

(statearr_43351_43378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (1))){
var state_43349__$1 = state_43349;
var statearr_43352_43379 = state_43349__$1;
(statearr_43352_43379[(2)] = null);

(statearr_43352_43379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (4))){
var inst_43313 = (state_43349[(7)]);
var inst_43315 = (inst_43313 < cnt);
var state_43349__$1 = state_43349;
if(cljs.core.truth_(inst_43315)){
var statearr_43353_43380 = state_43349__$1;
(statearr_43353_43380[(1)] = (6));

} else {
var statearr_43354_43381 = state_43349__$1;
(statearr_43354_43381[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (15))){
var inst_43345 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43355_43382 = state_43349__$1;
(statearr_43355_43382[(2)] = inst_43345);

(statearr_43355_43382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (13))){
var inst_43338 = cljs.core.async.close_BANG_.call(null,out);
var state_43349__$1 = state_43349;
var statearr_43356_43383 = state_43349__$1;
(statearr_43356_43383[(2)] = inst_43338);

(statearr_43356_43383[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (6))){
var state_43349__$1 = state_43349;
var statearr_43357_43384 = state_43349__$1;
(statearr_43357_43384[(2)] = null);

(statearr_43357_43384[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (3))){
var inst_43347 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43349__$1,inst_43347);
} else {
if((state_val_43350 === (12))){
var inst_43335 = (state_43349[(8)]);
var inst_43335__$1 = (state_43349[(2)]);
var inst_43336 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43335__$1);
var state_43349__$1 = (function (){var statearr_43358 = state_43349;
(statearr_43358[(8)] = inst_43335__$1);

return statearr_43358;
})();
if(cljs.core.truth_(inst_43336)){
var statearr_43359_43385 = state_43349__$1;
(statearr_43359_43385[(1)] = (13));

} else {
var statearr_43360_43386 = state_43349__$1;
(statearr_43360_43386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (2))){
var inst_43312 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43313 = (0);
var state_43349__$1 = (function (){var statearr_43361 = state_43349;
(statearr_43361[(7)] = inst_43313);

(statearr_43361[(9)] = inst_43312);

return statearr_43361;
})();
var statearr_43362_43387 = state_43349__$1;
(statearr_43362_43387[(2)] = null);

(statearr_43362_43387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (11))){
var inst_43313 = (state_43349[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43349,(10),Object,null,(9));
var inst_43322 = chs__$1.call(null,inst_43313);
var inst_43323 = done.call(null,inst_43313);
var inst_43324 = cljs.core.async.take_BANG_.call(null,inst_43322,inst_43323);
var state_43349__$1 = state_43349;
var statearr_43363_43388 = state_43349__$1;
(statearr_43363_43388[(2)] = inst_43324);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (9))){
var inst_43313 = (state_43349[(7)]);
var inst_43326 = (state_43349[(2)]);
var inst_43327 = (inst_43313 + (1));
var inst_43313__$1 = inst_43327;
var state_43349__$1 = (function (){var statearr_43364 = state_43349;
(statearr_43364[(7)] = inst_43313__$1);

(statearr_43364[(10)] = inst_43326);

return statearr_43364;
})();
var statearr_43365_43389 = state_43349__$1;
(statearr_43365_43389[(2)] = null);

(statearr_43365_43389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (5))){
var inst_43333 = (state_43349[(2)]);
var state_43349__$1 = (function (){var statearr_43366 = state_43349;
(statearr_43366[(11)] = inst_43333);

return statearr_43366;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43349__$1,(12),dchan);
} else {
if((state_val_43350 === (14))){
var inst_43335 = (state_43349[(8)]);
var inst_43340 = cljs.core.apply.call(null,f,inst_43335);
var state_43349__$1 = state_43349;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43349__$1,(16),out,inst_43340);
} else {
if((state_val_43350 === (16))){
var inst_43342 = (state_43349[(2)]);
var state_43349__$1 = (function (){var statearr_43367 = state_43349;
(statearr_43367[(12)] = inst_43342);

return statearr_43367;
})();
var statearr_43368_43390 = state_43349__$1;
(statearr_43368_43390[(2)] = null);

(statearr_43368_43390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (10))){
var inst_43317 = (state_43349[(2)]);
var inst_43318 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43349__$1 = (function (){var statearr_43369 = state_43349;
(statearr_43369[(13)] = inst_43317);

return statearr_43369;
})();
var statearr_43370_43391 = state_43349__$1;
(statearr_43370_43391[(2)] = inst_43318);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43349__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43350 === (8))){
var inst_43331 = (state_43349[(2)]);
var state_43349__$1 = state_43349;
var statearr_43371_43392 = state_43349__$1;
(statearr_43371_43392[(2)] = inst_43331);

(statearr_43371_43392[(1)] = (5));


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
});})(c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32990__auto__,c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43372 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43372[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43372[(1)] = (1));

return statearr_43372;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43349){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43349);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43373){if((e43373 instanceof Object)){
var ex__32994__auto__ = e43373;
var statearr_43374_43393 = state_43349;
(statearr_43374_43393[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43349);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43394 = state_43349;
state_43349 = G__43394;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33159__auto__ = (function (){var statearr_43375 = f__33158__auto__.call(null);
(statearr_43375[(6)] = c__33157__auto___43377);

return statearr_43375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43377,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43397 = arguments.length;
switch (G__43397) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43451,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43451,out){
return (function (state_43429){
var state_val_43430 = (state_43429[(1)]);
if((state_val_43430 === (7))){
var inst_43408 = (state_43429[(7)]);
var inst_43409 = (state_43429[(8)]);
var inst_43408__$1 = (state_43429[(2)]);
var inst_43409__$1 = cljs.core.nth.call(null,inst_43408__$1,(0),null);
var inst_43410 = cljs.core.nth.call(null,inst_43408__$1,(1),null);
var inst_43411 = (inst_43409__$1 == null);
var state_43429__$1 = (function (){var statearr_43431 = state_43429;
(statearr_43431[(7)] = inst_43408__$1);

(statearr_43431[(9)] = inst_43410);

(statearr_43431[(8)] = inst_43409__$1);

return statearr_43431;
})();
if(cljs.core.truth_(inst_43411)){
var statearr_43432_43452 = state_43429__$1;
(statearr_43432_43452[(1)] = (8));

} else {
var statearr_43433_43453 = state_43429__$1;
(statearr_43433_43453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (1))){
var inst_43398 = cljs.core.vec.call(null,chs);
var inst_43399 = inst_43398;
var state_43429__$1 = (function (){var statearr_43434 = state_43429;
(statearr_43434[(10)] = inst_43399);

return statearr_43434;
})();
var statearr_43435_43454 = state_43429__$1;
(statearr_43435_43454[(2)] = null);

(statearr_43435_43454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (4))){
var inst_43399 = (state_43429[(10)]);
var state_43429__$1 = state_43429;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43429__$1,(7),inst_43399);
} else {
if((state_val_43430 === (6))){
var inst_43425 = (state_43429[(2)]);
var state_43429__$1 = state_43429;
var statearr_43436_43455 = state_43429__$1;
(statearr_43436_43455[(2)] = inst_43425);

(statearr_43436_43455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (3))){
var inst_43427 = (state_43429[(2)]);
var state_43429__$1 = state_43429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43429__$1,inst_43427);
} else {
if((state_val_43430 === (2))){
var inst_43399 = (state_43429[(10)]);
var inst_43401 = cljs.core.count.call(null,inst_43399);
var inst_43402 = (inst_43401 > (0));
var state_43429__$1 = state_43429;
if(cljs.core.truth_(inst_43402)){
var statearr_43438_43456 = state_43429__$1;
(statearr_43438_43456[(1)] = (4));

} else {
var statearr_43439_43457 = state_43429__$1;
(statearr_43439_43457[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (11))){
var inst_43399 = (state_43429[(10)]);
var inst_43418 = (state_43429[(2)]);
var tmp43437 = inst_43399;
var inst_43399__$1 = tmp43437;
var state_43429__$1 = (function (){var statearr_43440 = state_43429;
(statearr_43440[(10)] = inst_43399__$1);

(statearr_43440[(11)] = inst_43418);

return statearr_43440;
})();
var statearr_43441_43458 = state_43429__$1;
(statearr_43441_43458[(2)] = null);

(statearr_43441_43458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (9))){
var inst_43409 = (state_43429[(8)]);
var state_43429__$1 = state_43429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43429__$1,(11),out,inst_43409);
} else {
if((state_val_43430 === (5))){
var inst_43423 = cljs.core.async.close_BANG_.call(null,out);
var state_43429__$1 = state_43429;
var statearr_43442_43459 = state_43429__$1;
(statearr_43442_43459[(2)] = inst_43423);

(statearr_43442_43459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (10))){
var inst_43421 = (state_43429[(2)]);
var state_43429__$1 = state_43429;
var statearr_43443_43460 = state_43429__$1;
(statearr_43443_43460[(2)] = inst_43421);

(statearr_43443_43460[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43430 === (8))){
var inst_43408 = (state_43429[(7)]);
var inst_43410 = (state_43429[(9)]);
var inst_43409 = (state_43429[(8)]);
var inst_43399 = (state_43429[(10)]);
var inst_43413 = (function (){var cs = inst_43399;
var vec__43404 = inst_43408;
var v = inst_43409;
var c = inst_43410;
return ((function (cs,vec__43404,v,c,inst_43408,inst_43410,inst_43409,inst_43399,state_val_43430,c__33157__auto___43451,out){
return (function (p1__43395_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43395_SHARP_);
});
;})(cs,vec__43404,v,c,inst_43408,inst_43410,inst_43409,inst_43399,state_val_43430,c__33157__auto___43451,out))
})();
var inst_43414 = cljs.core.filterv.call(null,inst_43413,inst_43399);
var inst_43399__$1 = inst_43414;
var state_43429__$1 = (function (){var statearr_43444 = state_43429;
(statearr_43444[(10)] = inst_43399__$1);

return statearr_43444;
})();
var statearr_43445_43461 = state_43429__$1;
(statearr_43445_43461[(2)] = null);

(statearr_43445_43461[(1)] = (2));


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
});})(c__33157__auto___43451,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43451,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43446 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43446[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43446[(1)] = (1));

return statearr_43446;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43429){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43447){if((e43447 instanceof Object)){
var ex__32994__auto__ = e43447;
var statearr_43448_43462 = state_43429;
(statearr_43448_43462[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43463 = state_43429;
state_43429 = G__43463;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43451,out))
})();
var state__33159__auto__ = (function (){var statearr_43449 = f__33158__auto__.call(null);
(statearr_43449[(6)] = c__33157__auto___43451);

return statearr_43449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43451,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43465 = arguments.length;
switch (G__43465) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43510,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43510,out){
return (function (state_43489){
var state_val_43490 = (state_43489[(1)]);
if((state_val_43490 === (7))){
var inst_43471 = (state_43489[(7)]);
var inst_43471__$1 = (state_43489[(2)]);
var inst_43472 = (inst_43471__$1 == null);
var inst_43473 = cljs.core.not.call(null,inst_43472);
var state_43489__$1 = (function (){var statearr_43491 = state_43489;
(statearr_43491[(7)] = inst_43471__$1);

return statearr_43491;
})();
if(inst_43473){
var statearr_43492_43511 = state_43489__$1;
(statearr_43492_43511[(1)] = (8));

} else {
var statearr_43493_43512 = state_43489__$1;
(statearr_43493_43512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (1))){
var inst_43466 = (0);
var state_43489__$1 = (function (){var statearr_43494 = state_43489;
(statearr_43494[(8)] = inst_43466);

return statearr_43494;
})();
var statearr_43495_43513 = state_43489__$1;
(statearr_43495_43513[(2)] = null);

(statearr_43495_43513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (4))){
var state_43489__$1 = state_43489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43489__$1,(7),ch);
} else {
if((state_val_43490 === (6))){
var inst_43484 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43496_43514 = state_43489__$1;
(statearr_43496_43514[(2)] = inst_43484);

(statearr_43496_43514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (3))){
var inst_43486 = (state_43489[(2)]);
var inst_43487 = cljs.core.async.close_BANG_.call(null,out);
var state_43489__$1 = (function (){var statearr_43497 = state_43489;
(statearr_43497[(9)] = inst_43486);

return statearr_43497;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43489__$1,inst_43487);
} else {
if((state_val_43490 === (2))){
var inst_43466 = (state_43489[(8)]);
var inst_43468 = (inst_43466 < n);
var state_43489__$1 = state_43489;
if(cljs.core.truth_(inst_43468)){
var statearr_43498_43515 = state_43489__$1;
(statearr_43498_43515[(1)] = (4));

} else {
var statearr_43499_43516 = state_43489__$1;
(statearr_43499_43516[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (11))){
var inst_43466 = (state_43489[(8)]);
var inst_43476 = (state_43489[(2)]);
var inst_43477 = (inst_43466 + (1));
var inst_43466__$1 = inst_43477;
var state_43489__$1 = (function (){var statearr_43500 = state_43489;
(statearr_43500[(10)] = inst_43476);

(statearr_43500[(8)] = inst_43466__$1);

return statearr_43500;
})();
var statearr_43501_43517 = state_43489__$1;
(statearr_43501_43517[(2)] = null);

(statearr_43501_43517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (9))){
var state_43489__$1 = state_43489;
var statearr_43502_43518 = state_43489__$1;
(statearr_43502_43518[(2)] = null);

(statearr_43502_43518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (5))){
var state_43489__$1 = state_43489;
var statearr_43503_43519 = state_43489__$1;
(statearr_43503_43519[(2)] = null);

(statearr_43503_43519[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (10))){
var inst_43481 = (state_43489[(2)]);
var state_43489__$1 = state_43489;
var statearr_43504_43520 = state_43489__$1;
(statearr_43504_43520[(2)] = inst_43481);

(statearr_43504_43520[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43490 === (8))){
var inst_43471 = (state_43489[(7)]);
var state_43489__$1 = state_43489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43489__$1,(11),out,inst_43471);
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
});})(c__33157__auto___43510,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43510,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43505[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43505[(1)] = (1));

return statearr_43505;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43489){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43506){if((e43506 instanceof Object)){
var ex__32994__auto__ = e43506;
var statearr_43507_43521 = state_43489;
(statearr_43507_43521[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43522 = state_43489;
state_43489 = G__43522;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43510,out))
})();
var state__33159__auto__ = (function (){var statearr_43508 = f__33158__auto__.call(null);
(statearr_43508[(6)] = c__33157__auto___43510);

return statearr_43508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43510,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43524 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43524 = (function (f,ch,meta43525){
this.f = f;
this.ch = ch;
this.meta43525 = meta43525;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43526,meta43525__$1){
var self__ = this;
var _43526__$1 = this;
return (new cljs.core.async.t_cljs$core$async43524(self__.f,self__.ch,meta43525__$1));
});

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43526){
var self__ = this;
var _43526__$1 = this;
return self__.meta43525;
});

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43527 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43527 = (function (f,ch,meta43525,_,fn1,meta43528){
this.f = f;
this.ch = ch;
this.meta43525 = meta43525;
this._ = _;
this.fn1 = fn1;
this.meta43528 = meta43528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43529,meta43528__$1){
var self__ = this;
var _43529__$1 = this;
return (new cljs.core.async.t_cljs$core$async43527(self__.f,self__.ch,self__.meta43525,self__._,self__.fn1,meta43528__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43529){
var self__ = this;
var _43529__$1 = this;
return self__.meta43528;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43523_SHARP_){
return f1.call(null,(((p1__43523_SHARP_ == null))?null:self__.f.call(null,p1__43523_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43525","meta43525",-1567919128,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43524","cljs.core.async/t_cljs$core$async43524",1248841456,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43528","meta43528",871702512,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43527";

cljs.core.async.t_cljs$core$async43527.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43527");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43527.
 */
cljs.core.async.__GT_t_cljs$core$async43527 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43527(f__$1,ch__$1,meta43525__$1,___$2,fn1__$1,meta43528){
return (new cljs.core.async.t_cljs$core$async43527(f__$1,ch__$1,meta43525__$1,___$2,fn1__$1,meta43528));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43527(self__.f,self__.ch,self__.meta43525,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43524.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43524.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43525","meta43525",-1567919128,null)], null);
});

cljs.core.async.t_cljs$core$async43524.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43524.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43524";

cljs.core.async.t_cljs$core$async43524.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43524");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43524.
 */
cljs.core.async.__GT_t_cljs$core$async43524 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43524(f__$1,ch__$1,meta43525){
return (new cljs.core.async.t_cljs$core$async43524(f__$1,ch__$1,meta43525));
});

}

return (new cljs.core.async.t_cljs$core$async43524(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43530 = (function (f,ch,meta43531){
this.f = f;
this.ch = ch;
this.meta43531 = meta43531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43532,meta43531__$1){
var self__ = this;
var _43532__$1 = this;
return (new cljs.core.async.t_cljs$core$async43530(self__.f,self__.ch,meta43531__$1));
});

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43532){
var self__ = this;
var _43532__$1 = this;
return self__.meta43531;
});

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43531","meta43531",307224206,null)], null);
});

cljs.core.async.t_cljs$core$async43530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43530";

cljs.core.async.t_cljs$core$async43530.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43530.
 */
cljs.core.async.__GT_t_cljs$core$async43530 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43530(f__$1,ch__$1,meta43531){
return (new cljs.core.async.t_cljs$core$async43530(f__$1,ch__$1,meta43531));
});

}

return (new cljs.core.async.t_cljs$core$async43530(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43533 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43533 = (function (p,ch,meta43534){
this.p = p;
this.ch = ch;
this.meta43534 = meta43534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43535,meta43534__$1){
var self__ = this;
var _43535__$1 = this;
return (new cljs.core.async.t_cljs$core$async43533(self__.p,self__.ch,meta43534__$1));
});

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43535){
var self__ = this;
var _43535__$1 = this;
return self__.meta43534;
});

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43533.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43534","meta43534",-603809658,null)], null);
});

cljs.core.async.t_cljs$core$async43533.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43533.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43533";

cljs.core.async.t_cljs$core$async43533.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async43533");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43533.
 */
cljs.core.async.__GT_t_cljs$core$async43533 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43533(p__$1,ch__$1,meta43534){
return (new cljs.core.async.t_cljs$core$async43533(p__$1,ch__$1,meta43534));
});

}

return (new cljs.core.async.t_cljs$core$async43533(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43537 = arguments.length;
switch (G__43537) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43577,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43577,out){
return (function (state_43558){
var state_val_43559 = (state_43558[(1)]);
if((state_val_43559 === (7))){
var inst_43554 = (state_43558[(2)]);
var state_43558__$1 = state_43558;
var statearr_43560_43578 = state_43558__$1;
(statearr_43560_43578[(2)] = inst_43554);

(statearr_43560_43578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (1))){
var state_43558__$1 = state_43558;
var statearr_43561_43579 = state_43558__$1;
(statearr_43561_43579[(2)] = null);

(statearr_43561_43579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (4))){
var inst_43540 = (state_43558[(7)]);
var inst_43540__$1 = (state_43558[(2)]);
var inst_43541 = (inst_43540__$1 == null);
var state_43558__$1 = (function (){var statearr_43562 = state_43558;
(statearr_43562[(7)] = inst_43540__$1);

return statearr_43562;
})();
if(cljs.core.truth_(inst_43541)){
var statearr_43563_43580 = state_43558__$1;
(statearr_43563_43580[(1)] = (5));

} else {
var statearr_43564_43581 = state_43558__$1;
(statearr_43564_43581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (6))){
var inst_43540 = (state_43558[(7)]);
var inst_43545 = p.call(null,inst_43540);
var state_43558__$1 = state_43558;
if(cljs.core.truth_(inst_43545)){
var statearr_43565_43582 = state_43558__$1;
(statearr_43565_43582[(1)] = (8));

} else {
var statearr_43566_43583 = state_43558__$1;
(statearr_43566_43583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (3))){
var inst_43556 = (state_43558[(2)]);
var state_43558__$1 = state_43558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43558__$1,inst_43556);
} else {
if((state_val_43559 === (2))){
var state_43558__$1 = state_43558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43558__$1,(4),ch);
} else {
if((state_val_43559 === (11))){
var inst_43548 = (state_43558[(2)]);
var state_43558__$1 = state_43558;
var statearr_43567_43584 = state_43558__$1;
(statearr_43567_43584[(2)] = inst_43548);

(statearr_43567_43584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (9))){
var state_43558__$1 = state_43558;
var statearr_43568_43585 = state_43558__$1;
(statearr_43568_43585[(2)] = null);

(statearr_43568_43585[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (5))){
var inst_43543 = cljs.core.async.close_BANG_.call(null,out);
var state_43558__$1 = state_43558;
var statearr_43569_43586 = state_43558__$1;
(statearr_43569_43586[(2)] = inst_43543);

(statearr_43569_43586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (10))){
var inst_43551 = (state_43558[(2)]);
var state_43558__$1 = (function (){var statearr_43570 = state_43558;
(statearr_43570[(8)] = inst_43551);

return statearr_43570;
})();
var statearr_43571_43587 = state_43558__$1;
(statearr_43571_43587[(2)] = null);

(statearr_43571_43587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43559 === (8))){
var inst_43540 = (state_43558[(7)]);
var state_43558__$1 = state_43558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43558__$1,(11),out,inst_43540);
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
});})(c__33157__auto___43577,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43577,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43572 = [null,null,null,null,null,null,null,null,null];
(statearr_43572[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43572[(1)] = (1));

return statearr_43572;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43558){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43573){if((e43573 instanceof Object)){
var ex__32994__auto__ = e43573;
var statearr_43574_43588 = state_43558;
(statearr_43574_43588[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43589 = state_43558;
state_43558 = G__43589;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43577,out))
})();
var state__33159__auto__ = (function (){var statearr_43575 = f__33158__auto__.call(null);
(statearr_43575[(6)] = c__33157__auto___43577);

return statearr_43575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43577,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43591 = arguments.length;
switch (G__43591) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33157__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto__){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto__){
return (function (state_43654){
var state_val_43655 = (state_43654[(1)]);
if((state_val_43655 === (7))){
var inst_43650 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43656_43694 = state_43654__$1;
(statearr_43656_43694[(2)] = inst_43650);

(statearr_43656_43694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (20))){
var inst_43620 = (state_43654[(7)]);
var inst_43631 = (state_43654[(2)]);
var inst_43632 = cljs.core.next.call(null,inst_43620);
var inst_43606 = inst_43632;
var inst_43607 = null;
var inst_43608 = (0);
var inst_43609 = (0);
var state_43654__$1 = (function (){var statearr_43657 = state_43654;
(statearr_43657[(8)] = inst_43606);

(statearr_43657[(9)] = inst_43607);

(statearr_43657[(10)] = inst_43631);

(statearr_43657[(11)] = inst_43609);

(statearr_43657[(12)] = inst_43608);

return statearr_43657;
})();
var statearr_43658_43695 = state_43654__$1;
(statearr_43658_43695[(2)] = null);

(statearr_43658_43695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (1))){
var state_43654__$1 = state_43654;
var statearr_43659_43696 = state_43654__$1;
(statearr_43659_43696[(2)] = null);

(statearr_43659_43696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (4))){
var inst_43595 = (state_43654[(13)]);
var inst_43595__$1 = (state_43654[(2)]);
var inst_43596 = (inst_43595__$1 == null);
var state_43654__$1 = (function (){var statearr_43660 = state_43654;
(statearr_43660[(13)] = inst_43595__$1);

return statearr_43660;
})();
if(cljs.core.truth_(inst_43596)){
var statearr_43661_43697 = state_43654__$1;
(statearr_43661_43697[(1)] = (5));

} else {
var statearr_43662_43698 = state_43654__$1;
(statearr_43662_43698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (15))){
var state_43654__$1 = state_43654;
var statearr_43666_43699 = state_43654__$1;
(statearr_43666_43699[(2)] = null);

(statearr_43666_43699[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (21))){
var state_43654__$1 = state_43654;
var statearr_43667_43700 = state_43654__$1;
(statearr_43667_43700[(2)] = null);

(statearr_43667_43700[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (13))){
var inst_43606 = (state_43654[(8)]);
var inst_43607 = (state_43654[(9)]);
var inst_43609 = (state_43654[(11)]);
var inst_43608 = (state_43654[(12)]);
var inst_43616 = (state_43654[(2)]);
var inst_43617 = (inst_43609 + (1));
var tmp43663 = inst_43606;
var tmp43664 = inst_43607;
var tmp43665 = inst_43608;
var inst_43606__$1 = tmp43663;
var inst_43607__$1 = tmp43664;
var inst_43608__$1 = tmp43665;
var inst_43609__$1 = inst_43617;
var state_43654__$1 = (function (){var statearr_43668 = state_43654;
(statearr_43668[(14)] = inst_43616);

(statearr_43668[(8)] = inst_43606__$1);

(statearr_43668[(9)] = inst_43607__$1);

(statearr_43668[(11)] = inst_43609__$1);

(statearr_43668[(12)] = inst_43608__$1);

return statearr_43668;
})();
var statearr_43669_43701 = state_43654__$1;
(statearr_43669_43701[(2)] = null);

(statearr_43669_43701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (22))){
var state_43654__$1 = state_43654;
var statearr_43670_43702 = state_43654__$1;
(statearr_43670_43702[(2)] = null);

(statearr_43670_43702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (6))){
var inst_43595 = (state_43654[(13)]);
var inst_43604 = f.call(null,inst_43595);
var inst_43605 = cljs.core.seq.call(null,inst_43604);
var inst_43606 = inst_43605;
var inst_43607 = null;
var inst_43608 = (0);
var inst_43609 = (0);
var state_43654__$1 = (function (){var statearr_43671 = state_43654;
(statearr_43671[(8)] = inst_43606);

(statearr_43671[(9)] = inst_43607);

(statearr_43671[(11)] = inst_43609);

(statearr_43671[(12)] = inst_43608);

return statearr_43671;
})();
var statearr_43672_43703 = state_43654__$1;
(statearr_43672_43703[(2)] = null);

(statearr_43672_43703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (17))){
var inst_43620 = (state_43654[(7)]);
var inst_43624 = cljs.core.chunk_first.call(null,inst_43620);
var inst_43625 = cljs.core.chunk_rest.call(null,inst_43620);
var inst_43626 = cljs.core.count.call(null,inst_43624);
var inst_43606 = inst_43625;
var inst_43607 = inst_43624;
var inst_43608 = inst_43626;
var inst_43609 = (0);
var state_43654__$1 = (function (){var statearr_43673 = state_43654;
(statearr_43673[(8)] = inst_43606);

(statearr_43673[(9)] = inst_43607);

(statearr_43673[(11)] = inst_43609);

(statearr_43673[(12)] = inst_43608);

return statearr_43673;
})();
var statearr_43674_43704 = state_43654__$1;
(statearr_43674_43704[(2)] = null);

(statearr_43674_43704[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (3))){
var inst_43652 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43654__$1,inst_43652);
} else {
if((state_val_43655 === (12))){
var inst_43640 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43675_43705 = state_43654__$1;
(statearr_43675_43705[(2)] = inst_43640);

(statearr_43675_43705[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (2))){
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43654__$1,(4),in$);
} else {
if((state_val_43655 === (23))){
var inst_43648 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43676_43706 = state_43654__$1;
(statearr_43676_43706[(2)] = inst_43648);

(statearr_43676_43706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (19))){
var inst_43635 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43677_43707 = state_43654__$1;
(statearr_43677_43707[(2)] = inst_43635);

(statearr_43677_43707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (11))){
var inst_43606 = (state_43654[(8)]);
var inst_43620 = (state_43654[(7)]);
var inst_43620__$1 = cljs.core.seq.call(null,inst_43606);
var state_43654__$1 = (function (){var statearr_43678 = state_43654;
(statearr_43678[(7)] = inst_43620__$1);

return statearr_43678;
})();
if(inst_43620__$1){
var statearr_43679_43708 = state_43654__$1;
(statearr_43679_43708[(1)] = (14));

} else {
var statearr_43680_43709 = state_43654__$1;
(statearr_43680_43709[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (9))){
var inst_43642 = (state_43654[(2)]);
var inst_43643 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43654__$1 = (function (){var statearr_43681 = state_43654;
(statearr_43681[(15)] = inst_43642);

return statearr_43681;
})();
if(cljs.core.truth_(inst_43643)){
var statearr_43682_43710 = state_43654__$1;
(statearr_43682_43710[(1)] = (21));

} else {
var statearr_43683_43711 = state_43654__$1;
(statearr_43683_43711[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (5))){
var inst_43598 = cljs.core.async.close_BANG_.call(null,out);
var state_43654__$1 = state_43654;
var statearr_43684_43712 = state_43654__$1;
(statearr_43684_43712[(2)] = inst_43598);

(statearr_43684_43712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (14))){
var inst_43620 = (state_43654[(7)]);
var inst_43622 = cljs.core.chunked_seq_QMARK_.call(null,inst_43620);
var state_43654__$1 = state_43654;
if(inst_43622){
var statearr_43685_43713 = state_43654__$1;
(statearr_43685_43713[(1)] = (17));

} else {
var statearr_43686_43714 = state_43654__$1;
(statearr_43686_43714[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (16))){
var inst_43638 = (state_43654[(2)]);
var state_43654__$1 = state_43654;
var statearr_43687_43715 = state_43654__$1;
(statearr_43687_43715[(2)] = inst_43638);

(statearr_43687_43715[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43655 === (10))){
var inst_43607 = (state_43654[(9)]);
var inst_43609 = (state_43654[(11)]);
var inst_43614 = cljs.core._nth.call(null,inst_43607,inst_43609);
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43654__$1,(13),out,inst_43614);
} else {
if((state_val_43655 === (18))){
var inst_43620 = (state_43654[(7)]);
var inst_43629 = cljs.core.first.call(null,inst_43620);
var state_43654__$1 = state_43654;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43654__$1,(20),out,inst_43629);
} else {
if((state_val_43655 === (8))){
var inst_43609 = (state_43654[(11)]);
var inst_43608 = (state_43654[(12)]);
var inst_43611 = (inst_43609 < inst_43608);
var inst_43612 = inst_43611;
var state_43654__$1 = state_43654;
if(cljs.core.truth_(inst_43612)){
var statearr_43688_43716 = state_43654__$1;
(statearr_43688_43716[(1)] = (10));

} else {
var statearr_43689_43717 = state_43654__$1;
(statearr_43689_43717[(1)] = (11));

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
}
}
}
}
}
}
});})(c__33157__auto__))
;
return ((function (switch__32990__auto__,c__33157__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0 = (function (){
var statearr_43690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43690[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__);

(statearr_43690[(1)] = (1));

return statearr_43690;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1 = (function (state_43654){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43691){if((e43691 instanceof Object)){
var ex__32994__auto__ = e43691;
var statearr_43692_43718 = state_43654;
(statearr_43692_43718[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43719 = state_43654;
state_43654 = G__43719;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__ = function(state_43654){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1.call(this,state_43654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32991__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto__))
})();
var state__33159__auto__ = (function (){var statearr_43693 = f__33158__auto__.call(null);
(statearr_43693[(6)] = c__33157__auto__);

return statearr_43693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto__))
);

return c__33157__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43721 = arguments.length;
switch (G__43721) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43724 = arguments.length;
switch (G__43724) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43727 = arguments.length;
switch (G__43727) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43774,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43774,out){
return (function (state_43751){
var state_val_43752 = (state_43751[(1)]);
if((state_val_43752 === (7))){
var inst_43746 = (state_43751[(2)]);
var state_43751__$1 = state_43751;
var statearr_43753_43775 = state_43751__$1;
(statearr_43753_43775[(2)] = inst_43746);

(statearr_43753_43775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (1))){
var inst_43728 = null;
var state_43751__$1 = (function (){var statearr_43754 = state_43751;
(statearr_43754[(7)] = inst_43728);

return statearr_43754;
})();
var statearr_43755_43776 = state_43751__$1;
(statearr_43755_43776[(2)] = null);

(statearr_43755_43776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (4))){
var inst_43731 = (state_43751[(8)]);
var inst_43731__$1 = (state_43751[(2)]);
var inst_43732 = (inst_43731__$1 == null);
var inst_43733 = cljs.core.not.call(null,inst_43732);
var state_43751__$1 = (function (){var statearr_43756 = state_43751;
(statearr_43756[(8)] = inst_43731__$1);

return statearr_43756;
})();
if(inst_43733){
var statearr_43757_43777 = state_43751__$1;
(statearr_43757_43777[(1)] = (5));

} else {
var statearr_43758_43778 = state_43751__$1;
(statearr_43758_43778[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (6))){
var state_43751__$1 = state_43751;
var statearr_43759_43779 = state_43751__$1;
(statearr_43759_43779[(2)] = null);

(statearr_43759_43779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (3))){
var inst_43748 = (state_43751[(2)]);
var inst_43749 = cljs.core.async.close_BANG_.call(null,out);
var state_43751__$1 = (function (){var statearr_43760 = state_43751;
(statearr_43760[(9)] = inst_43748);

return statearr_43760;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43751__$1,inst_43749);
} else {
if((state_val_43752 === (2))){
var state_43751__$1 = state_43751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43751__$1,(4),ch);
} else {
if((state_val_43752 === (11))){
var inst_43731 = (state_43751[(8)]);
var inst_43740 = (state_43751[(2)]);
var inst_43728 = inst_43731;
var state_43751__$1 = (function (){var statearr_43761 = state_43751;
(statearr_43761[(10)] = inst_43740);

(statearr_43761[(7)] = inst_43728);

return statearr_43761;
})();
var statearr_43762_43780 = state_43751__$1;
(statearr_43762_43780[(2)] = null);

(statearr_43762_43780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (9))){
var inst_43731 = (state_43751[(8)]);
var state_43751__$1 = state_43751;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43751__$1,(11),out,inst_43731);
} else {
if((state_val_43752 === (5))){
var inst_43728 = (state_43751[(7)]);
var inst_43731 = (state_43751[(8)]);
var inst_43735 = cljs.core._EQ_.call(null,inst_43731,inst_43728);
var state_43751__$1 = state_43751;
if(inst_43735){
var statearr_43764_43781 = state_43751__$1;
(statearr_43764_43781[(1)] = (8));

} else {
var statearr_43765_43782 = state_43751__$1;
(statearr_43765_43782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (10))){
var inst_43743 = (state_43751[(2)]);
var state_43751__$1 = state_43751;
var statearr_43766_43783 = state_43751__$1;
(statearr_43766_43783[(2)] = inst_43743);

(statearr_43766_43783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43752 === (8))){
var inst_43728 = (state_43751[(7)]);
var tmp43763 = inst_43728;
var inst_43728__$1 = tmp43763;
var state_43751__$1 = (function (){var statearr_43767 = state_43751;
(statearr_43767[(7)] = inst_43728__$1);

return statearr_43767;
})();
var statearr_43768_43784 = state_43751__$1;
(statearr_43768_43784[(2)] = null);

(statearr_43768_43784[(1)] = (2));


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
});})(c__33157__auto___43774,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43774,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43769[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43769[(1)] = (1));

return statearr_43769;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43751){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43770){if((e43770 instanceof Object)){
var ex__32994__auto__ = e43770;
var statearr_43771_43785 = state_43751;
(statearr_43771_43785[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43770;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43786 = state_43751;
state_43751 = G__43786;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43774,out))
})();
var state__33159__auto__ = (function (){var statearr_43772 = f__33158__auto__.call(null);
(statearr_43772[(6)] = c__33157__auto___43774);

return statearr_43772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43774,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43788 = arguments.length;
switch (G__43788) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43854,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43854,out){
return (function (state_43826){
var state_val_43827 = (state_43826[(1)]);
if((state_val_43827 === (7))){
var inst_43822 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43828_43855 = state_43826__$1;
(statearr_43828_43855[(2)] = inst_43822);

(statearr_43828_43855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (1))){
var inst_43789 = (new Array(n));
var inst_43790 = inst_43789;
var inst_43791 = (0);
var state_43826__$1 = (function (){var statearr_43829 = state_43826;
(statearr_43829[(7)] = inst_43790);

(statearr_43829[(8)] = inst_43791);

return statearr_43829;
})();
var statearr_43830_43856 = state_43826__$1;
(statearr_43830_43856[(2)] = null);

(statearr_43830_43856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (4))){
var inst_43794 = (state_43826[(9)]);
var inst_43794__$1 = (state_43826[(2)]);
var inst_43795 = (inst_43794__$1 == null);
var inst_43796 = cljs.core.not.call(null,inst_43795);
var state_43826__$1 = (function (){var statearr_43831 = state_43826;
(statearr_43831[(9)] = inst_43794__$1);

return statearr_43831;
})();
if(inst_43796){
var statearr_43832_43857 = state_43826__$1;
(statearr_43832_43857[(1)] = (5));

} else {
var statearr_43833_43858 = state_43826__$1;
(statearr_43833_43858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (15))){
var inst_43816 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43834_43859 = state_43826__$1;
(statearr_43834_43859[(2)] = inst_43816);

(statearr_43834_43859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (13))){
var state_43826__$1 = state_43826;
var statearr_43835_43860 = state_43826__$1;
(statearr_43835_43860[(2)] = null);

(statearr_43835_43860[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (6))){
var inst_43791 = (state_43826[(8)]);
var inst_43812 = (inst_43791 > (0));
var state_43826__$1 = state_43826;
if(cljs.core.truth_(inst_43812)){
var statearr_43836_43861 = state_43826__$1;
(statearr_43836_43861[(1)] = (12));

} else {
var statearr_43837_43862 = state_43826__$1;
(statearr_43837_43862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (3))){
var inst_43824 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43826__$1,inst_43824);
} else {
if((state_val_43827 === (12))){
var inst_43790 = (state_43826[(7)]);
var inst_43814 = cljs.core.vec.call(null,inst_43790);
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43826__$1,(15),out,inst_43814);
} else {
if((state_val_43827 === (2))){
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43826__$1,(4),ch);
} else {
if((state_val_43827 === (11))){
var inst_43806 = (state_43826[(2)]);
var inst_43807 = (new Array(n));
var inst_43790 = inst_43807;
var inst_43791 = (0);
var state_43826__$1 = (function (){var statearr_43838 = state_43826;
(statearr_43838[(10)] = inst_43806);

(statearr_43838[(7)] = inst_43790);

(statearr_43838[(8)] = inst_43791);

return statearr_43838;
})();
var statearr_43839_43863 = state_43826__$1;
(statearr_43839_43863[(2)] = null);

(statearr_43839_43863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (9))){
var inst_43790 = (state_43826[(7)]);
var inst_43804 = cljs.core.vec.call(null,inst_43790);
var state_43826__$1 = state_43826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43826__$1,(11),out,inst_43804);
} else {
if((state_val_43827 === (5))){
var inst_43799 = (state_43826[(11)]);
var inst_43790 = (state_43826[(7)]);
var inst_43794 = (state_43826[(9)]);
var inst_43791 = (state_43826[(8)]);
var inst_43798 = (inst_43790[inst_43791] = inst_43794);
var inst_43799__$1 = (inst_43791 + (1));
var inst_43800 = (inst_43799__$1 < n);
var state_43826__$1 = (function (){var statearr_43840 = state_43826;
(statearr_43840[(11)] = inst_43799__$1);

(statearr_43840[(12)] = inst_43798);

return statearr_43840;
})();
if(cljs.core.truth_(inst_43800)){
var statearr_43841_43864 = state_43826__$1;
(statearr_43841_43864[(1)] = (8));

} else {
var statearr_43842_43865 = state_43826__$1;
(statearr_43842_43865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (14))){
var inst_43819 = (state_43826[(2)]);
var inst_43820 = cljs.core.async.close_BANG_.call(null,out);
var state_43826__$1 = (function (){var statearr_43844 = state_43826;
(statearr_43844[(13)] = inst_43819);

return statearr_43844;
})();
var statearr_43845_43866 = state_43826__$1;
(statearr_43845_43866[(2)] = inst_43820);

(statearr_43845_43866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (10))){
var inst_43810 = (state_43826[(2)]);
var state_43826__$1 = state_43826;
var statearr_43846_43867 = state_43826__$1;
(statearr_43846_43867[(2)] = inst_43810);

(statearr_43846_43867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43827 === (8))){
var inst_43799 = (state_43826[(11)]);
var inst_43790 = (state_43826[(7)]);
var tmp43843 = inst_43790;
var inst_43790__$1 = tmp43843;
var inst_43791 = inst_43799;
var state_43826__$1 = (function (){var statearr_43847 = state_43826;
(statearr_43847[(7)] = inst_43790__$1);

(statearr_43847[(8)] = inst_43791);

return statearr_43847;
})();
var statearr_43848_43868 = state_43826__$1;
(statearr_43848_43868[(2)] = null);

(statearr_43848_43868[(1)] = (2));


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
});})(c__33157__auto___43854,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43854,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43849[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43849[(1)] = (1));

return statearr_43849;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43826){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43850){if((e43850 instanceof Object)){
var ex__32994__auto__ = e43850;
var statearr_43851_43869 = state_43826;
(statearr_43851_43869[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43870 = state_43826;
state_43826 = G__43870;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43854,out))
})();
var state__33159__auto__ = (function (){var statearr_43852 = f__33158__auto__.call(null);
(statearr_43852[(6)] = c__33157__auto___43854);

return statearr_43852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43854,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43872 = arguments.length;
switch (G__43872) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33157__auto___43942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33157__auto___43942,out){
return (function (){
var f__33158__auto__ = (function (){var switch__32990__auto__ = ((function (c__33157__auto___43942,out){
return (function (state_43914){
var state_val_43915 = (state_43914[(1)]);
if((state_val_43915 === (7))){
var inst_43910 = (state_43914[(2)]);
var state_43914__$1 = state_43914;
var statearr_43916_43943 = state_43914__$1;
(statearr_43916_43943[(2)] = inst_43910);

(statearr_43916_43943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (1))){
var inst_43873 = [];
var inst_43874 = inst_43873;
var inst_43875 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43914__$1 = (function (){var statearr_43917 = state_43914;
(statearr_43917[(7)] = inst_43874);

(statearr_43917[(8)] = inst_43875);

return statearr_43917;
})();
var statearr_43918_43944 = state_43914__$1;
(statearr_43918_43944[(2)] = null);

(statearr_43918_43944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (4))){
var inst_43878 = (state_43914[(9)]);
var inst_43878__$1 = (state_43914[(2)]);
var inst_43879 = (inst_43878__$1 == null);
var inst_43880 = cljs.core.not.call(null,inst_43879);
var state_43914__$1 = (function (){var statearr_43919 = state_43914;
(statearr_43919[(9)] = inst_43878__$1);

return statearr_43919;
})();
if(inst_43880){
var statearr_43920_43945 = state_43914__$1;
(statearr_43920_43945[(1)] = (5));

} else {
var statearr_43921_43946 = state_43914__$1;
(statearr_43921_43946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (15))){
var inst_43904 = (state_43914[(2)]);
var state_43914__$1 = state_43914;
var statearr_43922_43947 = state_43914__$1;
(statearr_43922_43947[(2)] = inst_43904);

(statearr_43922_43947[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (13))){
var state_43914__$1 = state_43914;
var statearr_43923_43948 = state_43914__$1;
(statearr_43923_43948[(2)] = null);

(statearr_43923_43948[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (6))){
var inst_43874 = (state_43914[(7)]);
var inst_43899 = inst_43874.length;
var inst_43900 = (inst_43899 > (0));
var state_43914__$1 = state_43914;
if(cljs.core.truth_(inst_43900)){
var statearr_43924_43949 = state_43914__$1;
(statearr_43924_43949[(1)] = (12));

} else {
var statearr_43925_43950 = state_43914__$1;
(statearr_43925_43950[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (3))){
var inst_43912 = (state_43914[(2)]);
var state_43914__$1 = state_43914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43914__$1,inst_43912);
} else {
if((state_val_43915 === (12))){
var inst_43874 = (state_43914[(7)]);
var inst_43902 = cljs.core.vec.call(null,inst_43874);
var state_43914__$1 = state_43914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43914__$1,(15),out,inst_43902);
} else {
if((state_val_43915 === (2))){
var state_43914__$1 = state_43914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43914__$1,(4),ch);
} else {
if((state_val_43915 === (11))){
var inst_43878 = (state_43914[(9)]);
var inst_43882 = (state_43914[(10)]);
var inst_43892 = (state_43914[(2)]);
var inst_43893 = [];
var inst_43894 = inst_43893.push(inst_43878);
var inst_43874 = inst_43893;
var inst_43875 = inst_43882;
var state_43914__$1 = (function (){var statearr_43926 = state_43914;
(statearr_43926[(7)] = inst_43874);

(statearr_43926[(11)] = inst_43892);

(statearr_43926[(8)] = inst_43875);

(statearr_43926[(12)] = inst_43894);

return statearr_43926;
})();
var statearr_43927_43951 = state_43914__$1;
(statearr_43927_43951[(2)] = null);

(statearr_43927_43951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (9))){
var inst_43874 = (state_43914[(7)]);
var inst_43890 = cljs.core.vec.call(null,inst_43874);
var state_43914__$1 = state_43914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43914__$1,(11),out,inst_43890);
} else {
if((state_val_43915 === (5))){
var inst_43878 = (state_43914[(9)]);
var inst_43875 = (state_43914[(8)]);
var inst_43882 = (state_43914[(10)]);
var inst_43882__$1 = f.call(null,inst_43878);
var inst_43883 = cljs.core._EQ_.call(null,inst_43882__$1,inst_43875);
var inst_43884 = cljs.core.keyword_identical_QMARK_.call(null,inst_43875,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43885 = ((inst_43883) || (inst_43884));
var state_43914__$1 = (function (){var statearr_43928 = state_43914;
(statearr_43928[(10)] = inst_43882__$1);

return statearr_43928;
})();
if(cljs.core.truth_(inst_43885)){
var statearr_43929_43952 = state_43914__$1;
(statearr_43929_43952[(1)] = (8));

} else {
var statearr_43930_43953 = state_43914__$1;
(statearr_43930_43953[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (14))){
var inst_43907 = (state_43914[(2)]);
var inst_43908 = cljs.core.async.close_BANG_.call(null,out);
var state_43914__$1 = (function (){var statearr_43932 = state_43914;
(statearr_43932[(13)] = inst_43907);

return statearr_43932;
})();
var statearr_43933_43954 = state_43914__$1;
(statearr_43933_43954[(2)] = inst_43908);

(statearr_43933_43954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (10))){
var inst_43897 = (state_43914[(2)]);
var state_43914__$1 = state_43914;
var statearr_43934_43955 = state_43914__$1;
(statearr_43934_43955[(2)] = inst_43897);

(statearr_43934_43955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43915 === (8))){
var inst_43878 = (state_43914[(9)]);
var inst_43874 = (state_43914[(7)]);
var inst_43882 = (state_43914[(10)]);
var inst_43887 = inst_43874.push(inst_43878);
var tmp43931 = inst_43874;
var inst_43874__$1 = tmp43931;
var inst_43875 = inst_43882;
var state_43914__$1 = (function (){var statearr_43935 = state_43914;
(statearr_43935[(7)] = inst_43874__$1);

(statearr_43935[(14)] = inst_43887);

(statearr_43935[(8)] = inst_43875);

return statearr_43935;
})();
var statearr_43936_43956 = state_43914__$1;
(statearr_43936_43956[(2)] = null);

(statearr_43936_43956[(1)] = (2));


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
});})(c__33157__auto___43942,out))
;
return ((function (switch__32990__auto__,c__33157__auto___43942,out){
return (function() {
var cljs$core$async$state_machine__32991__auto__ = null;
var cljs$core$async$state_machine__32991__auto____0 = (function (){
var statearr_43937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43937[(0)] = cljs$core$async$state_machine__32991__auto__);

(statearr_43937[(1)] = (1));

return statearr_43937;
});
var cljs$core$async$state_machine__32991__auto____1 = (function (state_43914){
while(true){
var ret_value__32992__auto__ = (function (){try{while(true){
var result__32993__auto__ = switch__32990__auto__.call(null,state_43914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32993__auto__;
}
break;
}
}catch (e43938){if((e43938 instanceof Object)){
var ex__32994__auto__ = e43938;
var statearr_43939_43957 = state_43914;
(statearr_43939_43957[(5)] = ex__32994__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32992__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43958 = state_43914;
state_43914 = G__43958;
continue;
} else {
return ret_value__32992__auto__;
}
break;
}
});
cljs$core$async$state_machine__32991__auto__ = function(state_43914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32991__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32991__auto____1.call(this,state_43914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32991__auto____0;
cljs$core$async$state_machine__32991__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32991__auto____1;
return cljs$core$async$state_machine__32991__auto__;
})()
;})(switch__32990__auto__,c__33157__auto___43942,out))
})();
var state__33159__auto__ = (function (){var statearr_43940 = f__33158__auto__.call(null);
(statearr_43940[(6)] = c__33157__auto___43942);

return statearr_43940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33159__auto__);
});})(c__33157__auto___43942,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547002176859
