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
var G__31146 = arguments.length;
switch (G__31146) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31147 = (function (f,blockable,meta31148){
this.f = f;
this.blockable = blockable;
this.meta31148 = meta31148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31149,meta31148__$1){
var self__ = this;
var _31149__$1 = this;
return (new cljs.core.async.t_cljs$core$async31147(self__.f,self__.blockable,meta31148__$1));
});

cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31149){
var self__ = this;
var _31149__$1 = this;
return self__.meta31148;
});

cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31147.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31147.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31148","meta31148",1480412683,null)], null);
});

cljs.core.async.t_cljs$core$async31147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31147";

cljs.core.async.t_cljs$core$async31147.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31147");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31147.
 */
cljs.core.async.__GT_t_cljs$core$async31147 = (function cljs$core$async$__GT_t_cljs$core$async31147(f__$1,blockable__$1,meta31148){
return (new cljs.core.async.t_cljs$core$async31147(f__$1,blockable__$1,meta31148));
});

}

return (new cljs.core.async.t_cljs$core$async31147(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31153 = arguments.length;
switch (G__31153) {
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
var G__31156 = arguments.length;
switch (G__31156) {
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
var G__31159 = arguments.length;
switch (G__31159) {
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
var val_31161 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31161);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31161,ret){
return (function (){
return fn1.call(null,val_31161);
});})(val_31161,ret))
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
var G__31163 = arguments.length;
switch (G__31163) {
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
var n__4518__auto___31165 = n;
var x_31166 = (0);
while(true){
if((x_31166 < n__4518__auto___31165)){
(a[x_31166] = (0));

var G__31167 = (x_31166 + (1));
x_31166 = G__31167;
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

var G__31168 = (i + (1));
i = G__31168;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31169 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31169 = (function (flag,meta31170){
this.flag = flag;
this.meta31170 = meta31170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31171,meta31170__$1){
var self__ = this;
var _31171__$1 = this;
return (new cljs.core.async.t_cljs$core$async31169(self__.flag,meta31170__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31171){
var self__ = this;
var _31171__$1 = this;
return self__.meta31170;
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31170","meta31170",-558076829,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31169";

cljs.core.async.t_cljs$core$async31169.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31169");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31169.
 */
cljs.core.async.__GT_t_cljs$core$async31169 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31169(flag__$1,meta31170){
return (new cljs.core.async.t_cljs$core$async31169(flag__$1,meta31170));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31169(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31172 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31172 = (function (flag,cb,meta31173){
this.flag = flag;
this.cb = cb;
this.meta31173 = meta31173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31174,meta31173__$1){
var self__ = this;
var _31174__$1 = this;
return (new cljs.core.async.t_cljs$core$async31172(self__.flag,self__.cb,meta31173__$1));
});

cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31174){
var self__ = this;
var _31174__$1 = this;
return self__.meta31173;
});

cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31173","meta31173",-1383713606,null)], null);
});

cljs.core.async.t_cljs$core$async31172.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31172.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31172";

cljs.core.async.t_cljs$core$async31172.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31172");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31172.
 */
cljs.core.async.__GT_t_cljs$core$async31172 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31172(flag__$1,cb__$1,meta31173){
return (new cljs.core.async.t_cljs$core$async31172(flag__$1,cb__$1,meta31173));
});

}

return (new cljs.core.async.t_cljs$core$async31172(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31175_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31175_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31176_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31176_SHARP_,port], null));
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
var G__31177 = (i + (1));
i = G__31177;
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
var len__4641__auto___31183 = arguments.length;
var i__4642__auto___31184 = (0);
while(true){
if((i__4642__auto___31184 < len__4641__auto___31183)){
args__4647__auto__.push((arguments[i__4642__auto___31184]));

var G__31185 = (i__4642__auto___31184 + (1));
i__4642__auto___31184 = G__31185;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31180){
var map__31181 = p__31180;
var map__31181__$1 = (((((!((map__31181 == null))))?(((((map__31181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31181):map__31181);
var opts = map__31181__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31178){
var G__31179 = cljs.core.first.call(null,seq31178);
var seq31178__$1 = cljs.core.next.call(null,seq31178);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31179,seq31178__$1);
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
var G__31187 = arguments.length;
switch (G__31187) {
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
var c__31086__auto___31233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___31233){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___31233){
return (function (state_31211){
var state_val_31212 = (state_31211[(1)]);
if((state_val_31212 === (7))){
var inst_31207 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31213_31234 = state_31211__$1;
(statearr_31213_31234[(2)] = inst_31207);

(statearr_31213_31234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (1))){
var state_31211__$1 = state_31211;
var statearr_31214_31235 = state_31211__$1;
(statearr_31214_31235[(2)] = null);

(statearr_31214_31235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (4))){
var inst_31190 = (state_31211[(7)]);
var inst_31190__$1 = (state_31211[(2)]);
var inst_31191 = (inst_31190__$1 == null);
var state_31211__$1 = (function (){var statearr_31215 = state_31211;
(statearr_31215[(7)] = inst_31190__$1);

return statearr_31215;
})();
if(cljs.core.truth_(inst_31191)){
var statearr_31216_31236 = state_31211__$1;
(statearr_31216_31236[(1)] = (5));

} else {
var statearr_31217_31237 = state_31211__$1;
(statearr_31217_31237[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (13))){
var state_31211__$1 = state_31211;
var statearr_31218_31238 = state_31211__$1;
(statearr_31218_31238[(2)] = null);

(statearr_31218_31238[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (6))){
var inst_31190 = (state_31211[(7)]);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31211__$1,(11),to,inst_31190);
} else {
if((state_val_31212 === (3))){
var inst_31209 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31211__$1,inst_31209);
} else {
if((state_val_31212 === (12))){
var state_31211__$1 = state_31211;
var statearr_31219_31239 = state_31211__$1;
(statearr_31219_31239[(2)] = null);

(statearr_31219_31239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (2))){
var state_31211__$1 = state_31211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31211__$1,(4),from);
} else {
if((state_val_31212 === (11))){
var inst_31200 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
if(cljs.core.truth_(inst_31200)){
var statearr_31220_31240 = state_31211__$1;
(statearr_31220_31240[(1)] = (12));

} else {
var statearr_31221_31241 = state_31211__$1;
(statearr_31221_31241[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (9))){
var state_31211__$1 = state_31211;
var statearr_31222_31242 = state_31211__$1;
(statearr_31222_31242[(2)] = null);

(statearr_31222_31242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (5))){
var state_31211__$1 = state_31211;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31223_31243 = state_31211__$1;
(statearr_31223_31243[(1)] = (8));

} else {
var statearr_31224_31244 = state_31211__$1;
(statearr_31224_31244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (14))){
var inst_31205 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31225_31245 = state_31211__$1;
(statearr_31225_31245[(2)] = inst_31205);

(statearr_31225_31245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (10))){
var inst_31197 = (state_31211[(2)]);
var state_31211__$1 = state_31211;
var statearr_31226_31246 = state_31211__$1;
(statearr_31226_31246[(2)] = inst_31197);

(statearr_31226_31246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31212 === (8))){
var inst_31194 = cljs.core.async.close_BANG_.call(null,to);
var state_31211__$1 = state_31211;
var statearr_31227_31247 = state_31211__$1;
(statearr_31227_31247[(2)] = inst_31194);

(statearr_31227_31247[(1)] = (10));


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
});})(c__31086__auto___31233))
;
return ((function (switch__30991__auto__,c__31086__auto___31233){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_31228 = [null,null,null,null,null,null,null,null];
(statearr_31228[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_31228[(1)] = (1));

return statearr_31228;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_31211){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31229){if((e31229 instanceof Object)){
var ex__30995__auto__ = e31229;
var statearr_31230_31248 = state_31211;
(statearr_31230_31248[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31249 = state_31211;
state_31211 = G__31249;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_31211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_31211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___31233))
})();
var state__31088__auto__ = (function (){var statearr_31231 = f__31087__auto__.call(null);
(statearr_31231[(6)] = c__31086__auto___31233);

return statearr_31231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___31233))
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
return (function (p__31250){
var vec__31251 = p__31250;
var v = cljs.core.nth.call(null,vec__31251,(0),null);
var p = cljs.core.nth.call(null,vec__31251,(1),null);
var job = vec__31251;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31086__auto___31422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results){
return (function (state_31258){
var state_val_31259 = (state_31258[(1)]);
if((state_val_31259 === (1))){
var state_31258__$1 = state_31258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31258__$1,(2),res,v);
} else {
if((state_val_31259 === (2))){
var inst_31255 = (state_31258[(2)]);
var inst_31256 = cljs.core.async.close_BANG_.call(null,res);
var state_31258__$1 = (function (){var statearr_31260 = state_31258;
(statearr_31260[(7)] = inst_31255);

return statearr_31260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31258__$1,inst_31256);
} else {
return null;
}
}
});})(c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results))
;
return ((function (switch__30991__auto__,c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_31261 = [null,null,null,null,null,null,null,null];
(statearr_31261[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__);

(statearr_31261[(1)] = (1));

return statearr_31261;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1 = (function (state_31258){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31262){if((e31262 instanceof Object)){
var ex__30995__auto__ = e31262;
var statearr_31263_31423 = state_31258;
(statearr_31263_31423[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31424 = state_31258;
state_31258 = G__31424;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = function(state_31258){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1.call(this,state_31258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results))
})();
var state__31088__auto__ = (function (){var statearr_31264 = f__31087__auto__.call(null);
(statearr_31264[(6)] = c__31086__auto___31422);

return statearr_31264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___31422,res,vec__31251,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31265){
var vec__31266 = p__31265;
var v = cljs.core.nth.call(null,vec__31266,(0),null);
var p = cljs.core.nth.call(null,vec__31266,(1),null);
var job = vec__31266;
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
var n__4518__auto___31425 = n;
var __31426 = (0);
while(true){
if((__31426 < n__4518__auto___31425)){
var G__31269_31427 = type;
var G__31269_31428__$1 = (((G__31269_31427 instanceof cljs.core.Keyword))?G__31269_31427.fqn:null);
switch (G__31269_31428__$1) {
case "compute":
var c__31086__auto___31430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31426,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (__31426,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function (state_31282){
var state_val_31283 = (state_31282[(1)]);
if((state_val_31283 === (1))){
var state_31282__$1 = state_31282;
var statearr_31284_31431 = state_31282__$1;
(statearr_31284_31431[(2)] = null);

(statearr_31284_31431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (2))){
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31282__$1,(4),jobs);
} else {
if((state_val_31283 === (3))){
var inst_31280 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31282__$1,inst_31280);
} else {
if((state_val_31283 === (4))){
var inst_31272 = (state_31282[(2)]);
var inst_31273 = process.call(null,inst_31272);
var state_31282__$1 = state_31282;
if(cljs.core.truth_(inst_31273)){
var statearr_31285_31432 = state_31282__$1;
(statearr_31285_31432[(1)] = (5));

} else {
var statearr_31286_31433 = state_31282__$1;
(statearr_31286_31433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (5))){
var state_31282__$1 = state_31282;
var statearr_31287_31434 = state_31282__$1;
(statearr_31287_31434[(2)] = null);

(statearr_31287_31434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (6))){
var state_31282__$1 = state_31282;
var statearr_31288_31435 = state_31282__$1;
(statearr_31288_31435[(2)] = null);

(statearr_31288_31435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31283 === (7))){
var inst_31278 = (state_31282[(2)]);
var state_31282__$1 = state_31282;
var statearr_31289_31436 = state_31282__$1;
(statearr_31289_31436[(2)] = inst_31278);

(statearr_31289_31436[(1)] = (3));


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
});})(__31426,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
;
return ((function (__31426,switch__30991__auto__,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_31290 = [null,null,null,null,null,null,null];
(statearr_31290[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__);

(statearr_31290[(1)] = (1));

return statearr_31290;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1 = (function (state_31282){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31291){if((e31291 instanceof Object)){
var ex__30995__auto__ = e31291;
var statearr_31292_31437 = state_31282;
(statearr_31292_31437[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31282;
state_31282 = G__31438;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = function(state_31282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1.call(this,state_31282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__;
})()
;})(__31426,switch__30991__auto__,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
})();
var state__31088__auto__ = (function (){var statearr_31293 = f__31087__auto__.call(null);
(statearr_31293[(6)] = c__31086__auto___31430);

return statearr_31293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(__31426,c__31086__auto___31430,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
);


break;
case "async":
var c__31086__auto___31439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31426,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (__31426,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function (state_31306){
var state_val_31307 = (state_31306[(1)]);
if((state_val_31307 === (1))){
var state_31306__$1 = state_31306;
var statearr_31308_31440 = state_31306__$1;
(statearr_31308_31440[(2)] = null);

(statearr_31308_31440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31307 === (2))){
var state_31306__$1 = state_31306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31306__$1,(4),jobs);
} else {
if((state_val_31307 === (3))){
var inst_31304 = (state_31306[(2)]);
var state_31306__$1 = state_31306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31306__$1,inst_31304);
} else {
if((state_val_31307 === (4))){
var inst_31296 = (state_31306[(2)]);
var inst_31297 = async.call(null,inst_31296);
var state_31306__$1 = state_31306;
if(cljs.core.truth_(inst_31297)){
var statearr_31309_31441 = state_31306__$1;
(statearr_31309_31441[(1)] = (5));

} else {
var statearr_31310_31442 = state_31306__$1;
(statearr_31310_31442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31307 === (5))){
var state_31306__$1 = state_31306;
var statearr_31311_31443 = state_31306__$1;
(statearr_31311_31443[(2)] = null);

(statearr_31311_31443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31307 === (6))){
var state_31306__$1 = state_31306;
var statearr_31312_31444 = state_31306__$1;
(statearr_31312_31444[(2)] = null);

(statearr_31312_31444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31307 === (7))){
var inst_31302 = (state_31306[(2)]);
var state_31306__$1 = state_31306;
var statearr_31313_31445 = state_31306__$1;
(statearr_31313_31445[(2)] = inst_31302);

(statearr_31313_31445[(1)] = (3));


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
});})(__31426,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
;
return ((function (__31426,switch__30991__auto__,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_31314 = [null,null,null,null,null,null,null];
(statearr_31314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__);

(statearr_31314[(1)] = (1));

return statearr_31314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1 = (function (state_31306){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31315){if((e31315 instanceof Object)){
var ex__30995__auto__ = e31315;
var statearr_31316_31446 = state_31306;
(statearr_31316_31446[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31447 = state_31306;
state_31306 = G__31447;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = function(state_31306){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1.call(this,state_31306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__;
})()
;})(__31426,switch__30991__auto__,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
})();
var state__31088__auto__ = (function (){var statearr_31317 = f__31087__auto__.call(null);
(statearr_31317[(6)] = c__31086__auto___31439);

return statearr_31317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(__31426,c__31086__auto___31439,G__31269_31427,G__31269_31428__$1,n__4518__auto___31425,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31269_31428__$1)].join('')));

}

var G__31448 = (__31426 + (1));
__31426 = G__31448;
continue;
} else {
}
break;
}

var c__31086__auto___31449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___31449,jobs,results,process,async){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___31449,jobs,results,process,async){
return (function (state_31339){
var state_val_31340 = (state_31339[(1)]);
if((state_val_31340 === (1))){
var state_31339__$1 = state_31339;
var statearr_31341_31450 = state_31339__$1;
(statearr_31341_31450[(2)] = null);

(statearr_31341_31450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (2))){
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31339__$1,(4),from);
} else {
if((state_val_31340 === (3))){
var inst_31337 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31339__$1,inst_31337);
} else {
if((state_val_31340 === (4))){
var inst_31320 = (state_31339[(7)]);
var inst_31320__$1 = (state_31339[(2)]);
var inst_31321 = (inst_31320__$1 == null);
var state_31339__$1 = (function (){var statearr_31342 = state_31339;
(statearr_31342[(7)] = inst_31320__$1);

return statearr_31342;
})();
if(cljs.core.truth_(inst_31321)){
var statearr_31343_31451 = state_31339__$1;
(statearr_31343_31451[(1)] = (5));

} else {
var statearr_31344_31452 = state_31339__$1;
(statearr_31344_31452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (5))){
var inst_31323 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31339__$1 = state_31339;
var statearr_31345_31453 = state_31339__$1;
(statearr_31345_31453[(2)] = inst_31323);

(statearr_31345_31453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (6))){
var inst_31320 = (state_31339[(7)]);
var inst_31325 = (state_31339[(8)]);
var inst_31325__$1 = cljs.core.async.chan.call(null,(1));
var inst_31326 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31327 = [inst_31320,inst_31325__$1];
var inst_31328 = (new cljs.core.PersistentVector(null,2,(5),inst_31326,inst_31327,null));
var state_31339__$1 = (function (){var statearr_31346 = state_31339;
(statearr_31346[(8)] = inst_31325__$1);

return statearr_31346;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31339__$1,(8),jobs,inst_31328);
} else {
if((state_val_31340 === (7))){
var inst_31335 = (state_31339[(2)]);
var state_31339__$1 = state_31339;
var statearr_31347_31454 = state_31339__$1;
(statearr_31347_31454[(2)] = inst_31335);

(statearr_31347_31454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31340 === (8))){
var inst_31325 = (state_31339[(8)]);
var inst_31330 = (state_31339[(2)]);
var state_31339__$1 = (function (){var statearr_31348 = state_31339;
(statearr_31348[(9)] = inst_31330);

return statearr_31348;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31339__$1,(9),results,inst_31325);
} else {
if((state_val_31340 === (9))){
var inst_31332 = (state_31339[(2)]);
var state_31339__$1 = (function (){var statearr_31349 = state_31339;
(statearr_31349[(10)] = inst_31332);

return statearr_31349;
})();
var statearr_31350_31455 = state_31339__$1;
(statearr_31350_31455[(2)] = null);

(statearr_31350_31455[(1)] = (2));


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
});})(c__31086__auto___31449,jobs,results,process,async))
;
return ((function (switch__30991__auto__,c__31086__auto___31449,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_31351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31351[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__);

(statearr_31351[(1)] = (1));

return statearr_31351;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1 = (function (state_31339){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31352){if((e31352 instanceof Object)){
var ex__30995__auto__ = e31352;
var statearr_31353_31456 = state_31339;
(statearr_31353_31456[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31457 = state_31339;
state_31339 = G__31457;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = function(state_31339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1.call(this,state_31339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___31449,jobs,results,process,async))
})();
var state__31088__auto__ = (function (){var statearr_31354 = f__31087__auto__.call(null);
(statearr_31354[(6)] = c__31086__auto___31449);

return statearr_31354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___31449,jobs,results,process,async))
);


var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__,jobs,results,process,async){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__,jobs,results,process,async){
return (function (state_31392){
var state_val_31393 = (state_31392[(1)]);
if((state_val_31393 === (7))){
var inst_31388 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31394_31458 = state_31392__$1;
(statearr_31394_31458[(2)] = inst_31388);

(statearr_31394_31458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (20))){
var state_31392__$1 = state_31392;
var statearr_31395_31459 = state_31392__$1;
(statearr_31395_31459[(2)] = null);

(statearr_31395_31459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (1))){
var state_31392__$1 = state_31392;
var statearr_31396_31460 = state_31392__$1;
(statearr_31396_31460[(2)] = null);

(statearr_31396_31460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (4))){
var inst_31357 = (state_31392[(7)]);
var inst_31357__$1 = (state_31392[(2)]);
var inst_31358 = (inst_31357__$1 == null);
var state_31392__$1 = (function (){var statearr_31397 = state_31392;
(statearr_31397[(7)] = inst_31357__$1);

return statearr_31397;
})();
if(cljs.core.truth_(inst_31358)){
var statearr_31398_31461 = state_31392__$1;
(statearr_31398_31461[(1)] = (5));

} else {
var statearr_31399_31462 = state_31392__$1;
(statearr_31399_31462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (15))){
var inst_31370 = (state_31392[(8)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31392__$1,(18),to,inst_31370);
} else {
if((state_val_31393 === (21))){
var inst_31383 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31400_31463 = state_31392__$1;
(statearr_31400_31463[(2)] = inst_31383);

(statearr_31400_31463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (13))){
var inst_31385 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31401 = state_31392;
(statearr_31401[(9)] = inst_31385);

return statearr_31401;
})();
var statearr_31402_31464 = state_31392__$1;
(statearr_31402_31464[(2)] = null);

(statearr_31402_31464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (6))){
var inst_31357 = (state_31392[(7)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(11),inst_31357);
} else {
if((state_val_31393 === (17))){
var inst_31378 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
if(cljs.core.truth_(inst_31378)){
var statearr_31403_31465 = state_31392__$1;
(statearr_31403_31465[(1)] = (19));

} else {
var statearr_31404_31466 = state_31392__$1;
(statearr_31404_31466[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (3))){
var inst_31390 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31392__$1,inst_31390);
} else {
if((state_val_31393 === (12))){
var inst_31367 = (state_31392[(10)]);
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(14),inst_31367);
} else {
if((state_val_31393 === (2))){
var state_31392__$1 = state_31392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31392__$1,(4),results);
} else {
if((state_val_31393 === (19))){
var state_31392__$1 = state_31392;
var statearr_31405_31467 = state_31392__$1;
(statearr_31405_31467[(2)] = null);

(statearr_31405_31467[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (11))){
var inst_31367 = (state_31392[(2)]);
var state_31392__$1 = (function (){var statearr_31406 = state_31392;
(statearr_31406[(10)] = inst_31367);

return statearr_31406;
})();
var statearr_31407_31468 = state_31392__$1;
(statearr_31407_31468[(2)] = null);

(statearr_31407_31468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (9))){
var state_31392__$1 = state_31392;
var statearr_31408_31469 = state_31392__$1;
(statearr_31408_31469[(2)] = null);

(statearr_31408_31469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (5))){
var state_31392__$1 = state_31392;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31409_31470 = state_31392__$1;
(statearr_31409_31470[(1)] = (8));

} else {
var statearr_31410_31471 = state_31392__$1;
(statearr_31410_31471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (14))){
var inst_31370 = (state_31392[(8)]);
var inst_31372 = (state_31392[(11)]);
var inst_31370__$1 = (state_31392[(2)]);
var inst_31371 = (inst_31370__$1 == null);
var inst_31372__$1 = cljs.core.not.call(null,inst_31371);
var state_31392__$1 = (function (){var statearr_31411 = state_31392;
(statearr_31411[(8)] = inst_31370__$1);

(statearr_31411[(11)] = inst_31372__$1);

return statearr_31411;
})();
if(inst_31372__$1){
var statearr_31412_31472 = state_31392__$1;
(statearr_31412_31472[(1)] = (15));

} else {
var statearr_31413_31473 = state_31392__$1;
(statearr_31413_31473[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (16))){
var inst_31372 = (state_31392[(11)]);
var state_31392__$1 = state_31392;
var statearr_31414_31474 = state_31392__$1;
(statearr_31414_31474[(2)] = inst_31372);

(statearr_31414_31474[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (10))){
var inst_31364 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31415_31475 = state_31392__$1;
(statearr_31415_31475[(2)] = inst_31364);

(statearr_31415_31475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (18))){
var inst_31375 = (state_31392[(2)]);
var state_31392__$1 = state_31392;
var statearr_31416_31476 = state_31392__$1;
(statearr_31416_31476[(2)] = inst_31375);

(statearr_31416_31476[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31393 === (8))){
var inst_31361 = cljs.core.async.close_BANG_.call(null,to);
var state_31392__$1 = state_31392;
var statearr_31417_31477 = state_31392__$1;
(statearr_31417_31477[(2)] = inst_31361);

(statearr_31417_31477[(1)] = (10));


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
});})(c__31086__auto__,jobs,results,process,async))
;
return ((function (switch__30991__auto__,c__31086__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_31418 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31418[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__);

(statearr_31418[(1)] = (1));

return statearr_31418;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1 = (function (state_31392){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31419){if((e31419 instanceof Object)){
var ex__30995__auto__ = e31419;
var statearr_31420_31478 = state_31392;
(statearr_31420_31478[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31479 = state_31392;
state_31392 = G__31479;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__ = function(state_31392){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1.call(this,state_31392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__,jobs,results,process,async))
})();
var state__31088__auto__ = (function (){var statearr_31421 = f__31087__auto__.call(null);
(statearr_31421[(6)] = c__31086__auto__);

return statearr_31421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__,jobs,results,process,async))
);

return c__31086__auto__;
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
var G__31481 = arguments.length;
switch (G__31481) {
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
var G__31484 = arguments.length;
switch (G__31484) {
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
var G__31487 = arguments.length;
switch (G__31487) {
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
var c__31086__auto___31536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___31536,tc,fc){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___31536,tc,fc){
return (function (state_31513){
var state_val_31514 = (state_31513[(1)]);
if((state_val_31514 === (7))){
var inst_31509 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31515_31537 = state_31513__$1;
(statearr_31515_31537[(2)] = inst_31509);

(statearr_31515_31537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (1))){
var state_31513__$1 = state_31513;
var statearr_31516_31538 = state_31513__$1;
(statearr_31516_31538[(2)] = null);

(statearr_31516_31538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (4))){
var inst_31490 = (state_31513[(7)]);
var inst_31490__$1 = (state_31513[(2)]);
var inst_31491 = (inst_31490__$1 == null);
var state_31513__$1 = (function (){var statearr_31517 = state_31513;
(statearr_31517[(7)] = inst_31490__$1);

return statearr_31517;
})();
if(cljs.core.truth_(inst_31491)){
var statearr_31518_31539 = state_31513__$1;
(statearr_31518_31539[(1)] = (5));

} else {
var statearr_31519_31540 = state_31513__$1;
(statearr_31519_31540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (13))){
var state_31513__$1 = state_31513;
var statearr_31520_31541 = state_31513__$1;
(statearr_31520_31541[(2)] = null);

(statearr_31520_31541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (6))){
var inst_31490 = (state_31513[(7)]);
var inst_31496 = p.call(null,inst_31490);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31496)){
var statearr_31521_31542 = state_31513__$1;
(statearr_31521_31542[(1)] = (9));

} else {
var statearr_31522_31543 = state_31513__$1;
(statearr_31522_31543[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (3))){
var inst_31511 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31513__$1,inst_31511);
} else {
if((state_val_31514 === (12))){
var state_31513__$1 = state_31513;
var statearr_31523_31544 = state_31513__$1;
(statearr_31523_31544[(2)] = null);

(statearr_31523_31544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (2))){
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31513__$1,(4),ch);
} else {
if((state_val_31514 === (11))){
var inst_31490 = (state_31513[(7)]);
var inst_31500 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31513__$1,(8),inst_31500,inst_31490);
} else {
if((state_val_31514 === (9))){
var state_31513__$1 = state_31513;
var statearr_31524_31545 = state_31513__$1;
(statearr_31524_31545[(2)] = tc);

(statearr_31524_31545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (5))){
var inst_31493 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31494 = cljs.core.async.close_BANG_.call(null,fc);
var state_31513__$1 = (function (){var statearr_31525 = state_31513;
(statearr_31525[(8)] = inst_31493);

return statearr_31525;
})();
var statearr_31526_31546 = state_31513__$1;
(statearr_31526_31546[(2)] = inst_31494);

(statearr_31526_31546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (14))){
var inst_31507 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
var statearr_31527_31547 = state_31513__$1;
(statearr_31527_31547[(2)] = inst_31507);

(statearr_31527_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (10))){
var state_31513__$1 = state_31513;
var statearr_31528_31548 = state_31513__$1;
(statearr_31528_31548[(2)] = fc);

(statearr_31528_31548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31514 === (8))){
var inst_31502 = (state_31513[(2)]);
var state_31513__$1 = state_31513;
if(cljs.core.truth_(inst_31502)){
var statearr_31529_31549 = state_31513__$1;
(statearr_31529_31549[(1)] = (12));

} else {
var statearr_31530_31550 = state_31513__$1;
(statearr_31530_31550[(1)] = (13));

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
});})(c__31086__auto___31536,tc,fc))
;
return ((function (switch__30991__auto__,c__31086__auto___31536,tc,fc){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_31531 = [null,null,null,null,null,null,null,null,null];
(statearr_31531[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_31531[(1)] = (1));

return statearr_31531;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_31513){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31532){if((e31532 instanceof Object)){
var ex__30995__auto__ = e31532;
var statearr_31533_31551 = state_31513;
(statearr_31533_31551[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31552 = state_31513;
state_31513 = G__31552;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_31513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_31513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___31536,tc,fc))
})();
var state__31088__auto__ = (function (){var statearr_31534 = f__31087__auto__.call(null);
(statearr_31534[(6)] = c__31086__auto___31536);

return statearr_31534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___31536,tc,fc))
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__){
return (function (state_31573){
var state_val_31574 = (state_31573[(1)]);
if((state_val_31574 === (7))){
var inst_31569 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31575_31593 = state_31573__$1;
(statearr_31575_31593[(2)] = inst_31569);

(statearr_31575_31593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (1))){
var inst_31553 = init;
var state_31573__$1 = (function (){var statearr_31576 = state_31573;
(statearr_31576[(7)] = inst_31553);

return statearr_31576;
})();
var statearr_31577_31594 = state_31573__$1;
(statearr_31577_31594[(2)] = null);

(statearr_31577_31594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (4))){
var inst_31556 = (state_31573[(8)]);
var inst_31556__$1 = (state_31573[(2)]);
var inst_31557 = (inst_31556__$1 == null);
var state_31573__$1 = (function (){var statearr_31578 = state_31573;
(statearr_31578[(8)] = inst_31556__$1);

return statearr_31578;
})();
if(cljs.core.truth_(inst_31557)){
var statearr_31579_31595 = state_31573__$1;
(statearr_31579_31595[(1)] = (5));

} else {
var statearr_31580_31596 = state_31573__$1;
(statearr_31580_31596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (6))){
var inst_31553 = (state_31573[(7)]);
var inst_31556 = (state_31573[(8)]);
var inst_31560 = (state_31573[(9)]);
var inst_31560__$1 = f.call(null,inst_31553,inst_31556);
var inst_31561 = cljs.core.reduced_QMARK_.call(null,inst_31560__$1);
var state_31573__$1 = (function (){var statearr_31581 = state_31573;
(statearr_31581[(9)] = inst_31560__$1);

return statearr_31581;
})();
if(inst_31561){
var statearr_31582_31597 = state_31573__$1;
(statearr_31582_31597[(1)] = (8));

} else {
var statearr_31583_31598 = state_31573__$1;
(statearr_31583_31598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (3))){
var inst_31571 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31573__$1,inst_31571);
} else {
if((state_val_31574 === (2))){
var state_31573__$1 = state_31573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31573__$1,(4),ch);
} else {
if((state_val_31574 === (9))){
var inst_31560 = (state_31573[(9)]);
var inst_31553 = inst_31560;
var state_31573__$1 = (function (){var statearr_31584 = state_31573;
(statearr_31584[(7)] = inst_31553);

return statearr_31584;
})();
var statearr_31585_31599 = state_31573__$1;
(statearr_31585_31599[(2)] = null);

(statearr_31585_31599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (5))){
var inst_31553 = (state_31573[(7)]);
var state_31573__$1 = state_31573;
var statearr_31586_31600 = state_31573__$1;
(statearr_31586_31600[(2)] = inst_31553);

(statearr_31586_31600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (10))){
var inst_31567 = (state_31573[(2)]);
var state_31573__$1 = state_31573;
var statearr_31587_31601 = state_31573__$1;
(statearr_31587_31601[(2)] = inst_31567);

(statearr_31587_31601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31574 === (8))){
var inst_31560 = (state_31573[(9)]);
var inst_31563 = cljs.core.deref.call(null,inst_31560);
var state_31573__$1 = state_31573;
var statearr_31588_31602 = state_31573__$1;
(statearr_31588_31602[(2)] = inst_31563);

(statearr_31588_31602[(1)] = (10));


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
});})(c__31086__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30992__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30992__auto____0 = (function (){
var statearr_31589 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31589[(0)] = cljs$core$async$reduce_$_state_machine__30992__auto__);

(statearr_31589[(1)] = (1));

return statearr_31589;
});
var cljs$core$async$reduce_$_state_machine__30992__auto____1 = (function (state_31573){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31590){if((e31590 instanceof Object)){
var ex__30995__auto__ = e31590;
var statearr_31591_31603 = state_31573;
(statearr_31591_31603[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31604 = state_31573;
state_31573 = G__31604;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30992__auto__ = function(state_31573){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30992__auto____1.call(this,state_31573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30992__auto____0;
cljs$core$async$reduce_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30992__auto____1;
return cljs$core$async$reduce_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__))
})();
var state__31088__auto__ = (function (){var statearr_31592 = f__31087__auto__.call(null);
(statearr_31592[(6)] = c__31086__auto__);

return statearr_31592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__))
);

return c__31086__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__,f__$1){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__,f__$1){
return (function (state_31610){
var state_val_31611 = (state_31610[(1)]);
if((state_val_31611 === (1))){
var inst_31605 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31610__$1,(2),inst_31605);
} else {
if((state_val_31611 === (2))){
var inst_31607 = (state_31610[(2)]);
var inst_31608 = f__$1.call(null,inst_31607);
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31610__$1,inst_31608);
} else {
return null;
}
}
});})(c__31086__auto__,f__$1))
;
return ((function (switch__30991__auto__,c__31086__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30992__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30992__auto____0 = (function (){
var statearr_31612 = [null,null,null,null,null,null,null];
(statearr_31612[(0)] = cljs$core$async$transduce_$_state_machine__30992__auto__);

(statearr_31612[(1)] = (1));

return statearr_31612;
});
var cljs$core$async$transduce_$_state_machine__30992__auto____1 = (function (state_31610){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31613){if((e31613 instanceof Object)){
var ex__30995__auto__ = e31613;
var statearr_31614_31616 = state_31610;
(statearr_31614_31616[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31617 = state_31610;
state_31610 = G__31617;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30992__auto__ = function(state_31610){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30992__auto____1.call(this,state_31610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30992__auto____0;
cljs$core$async$transduce_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30992__auto____1;
return cljs$core$async$transduce_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__,f__$1))
})();
var state__31088__auto__ = (function (){var statearr_31615 = f__31087__auto__.call(null);
(statearr_31615[(6)] = c__31086__auto__);

return statearr_31615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__,f__$1))
);

return c__31086__auto__;
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
var G__31619 = arguments.length;
switch (G__31619) {
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__){
return (function (state_31644){
var state_val_31645 = (state_31644[(1)]);
if((state_val_31645 === (7))){
var inst_31626 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31646_31667 = state_31644__$1;
(statearr_31646_31667[(2)] = inst_31626);

(statearr_31646_31667[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (1))){
var inst_31620 = cljs.core.seq.call(null,coll);
var inst_31621 = inst_31620;
var state_31644__$1 = (function (){var statearr_31647 = state_31644;
(statearr_31647[(7)] = inst_31621);

return statearr_31647;
})();
var statearr_31648_31668 = state_31644__$1;
(statearr_31648_31668[(2)] = null);

(statearr_31648_31668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (4))){
var inst_31621 = (state_31644[(7)]);
var inst_31624 = cljs.core.first.call(null,inst_31621);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31644__$1,(7),ch,inst_31624);
} else {
if((state_val_31645 === (13))){
var inst_31638 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31649_31669 = state_31644__$1;
(statearr_31649_31669[(2)] = inst_31638);

(statearr_31649_31669[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (6))){
var inst_31629 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31629)){
var statearr_31650_31670 = state_31644__$1;
(statearr_31650_31670[(1)] = (8));

} else {
var statearr_31651_31671 = state_31644__$1;
(statearr_31651_31671[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (3))){
var inst_31642 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31644__$1,inst_31642);
} else {
if((state_val_31645 === (12))){
var state_31644__$1 = state_31644;
var statearr_31652_31672 = state_31644__$1;
(statearr_31652_31672[(2)] = null);

(statearr_31652_31672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (2))){
var inst_31621 = (state_31644[(7)]);
var state_31644__$1 = state_31644;
if(cljs.core.truth_(inst_31621)){
var statearr_31653_31673 = state_31644__$1;
(statearr_31653_31673[(1)] = (4));

} else {
var statearr_31654_31674 = state_31644__$1;
(statearr_31654_31674[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (11))){
var inst_31635 = cljs.core.async.close_BANG_.call(null,ch);
var state_31644__$1 = state_31644;
var statearr_31655_31675 = state_31644__$1;
(statearr_31655_31675[(2)] = inst_31635);

(statearr_31655_31675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (9))){
var state_31644__$1 = state_31644;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31656_31676 = state_31644__$1;
(statearr_31656_31676[(1)] = (11));

} else {
var statearr_31657_31677 = state_31644__$1;
(statearr_31657_31677[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (5))){
var inst_31621 = (state_31644[(7)]);
var state_31644__$1 = state_31644;
var statearr_31658_31678 = state_31644__$1;
(statearr_31658_31678[(2)] = inst_31621);

(statearr_31658_31678[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (10))){
var inst_31640 = (state_31644[(2)]);
var state_31644__$1 = state_31644;
var statearr_31659_31679 = state_31644__$1;
(statearr_31659_31679[(2)] = inst_31640);

(statearr_31659_31679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31645 === (8))){
var inst_31621 = (state_31644[(7)]);
var inst_31631 = cljs.core.next.call(null,inst_31621);
var inst_31621__$1 = inst_31631;
var state_31644__$1 = (function (){var statearr_31660 = state_31644;
(statearr_31660[(7)] = inst_31621__$1);

return statearr_31660;
})();
var statearr_31661_31680 = state_31644__$1;
(statearr_31661_31680[(2)] = null);

(statearr_31661_31680[(1)] = (2));


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
});})(c__31086__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_31662 = [null,null,null,null,null,null,null,null];
(statearr_31662[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_31662[(1)] = (1));

return statearr_31662;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_31644){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31663){if((e31663 instanceof Object)){
var ex__30995__auto__ = e31663;
var statearr_31664_31681 = state_31644;
(statearr_31664_31681[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31682 = state_31644;
state_31644 = G__31682;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_31644){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_31644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__))
})();
var state__31088__auto__ = (function (){var statearr_31665 = f__31087__auto__.call(null);
(statearr_31665[(6)] = c__31086__auto__);

return statearr_31665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__))
);

return c__31086__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31683 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31683 = (function (ch,cs,meta31684){
this.ch = ch;
this.cs = cs;
this.meta31684 = meta31684;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31685,meta31684__$1){
var self__ = this;
var _31685__$1 = this;
return (new cljs.core.async.t_cljs$core$async31683(self__.ch,self__.cs,meta31684__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31685){
var self__ = this;
var _31685__$1 = this;
return self__.meta31684;
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31684","meta31684",1744681749,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31683.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31683.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31683";

cljs.core.async.t_cljs$core$async31683.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31683");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31683.
 */
cljs.core.async.__GT_t_cljs$core$async31683 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31683(ch__$1,cs__$1,meta31684){
return (new cljs.core.async.t_cljs$core$async31683(ch__$1,cs__$1,meta31684));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31683(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31086__auto___31905 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___31905,cs,m,dchan,dctr,done){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___31905,cs,m,dchan,dctr,done){
return (function (state_31820){
var state_val_31821 = (state_31820[(1)]);
if((state_val_31821 === (7))){
var inst_31816 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31822_31906 = state_31820__$1;
(statearr_31822_31906[(2)] = inst_31816);

(statearr_31822_31906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (20))){
var inst_31719 = (state_31820[(7)]);
var inst_31731 = cljs.core.first.call(null,inst_31719);
var inst_31732 = cljs.core.nth.call(null,inst_31731,(0),null);
var inst_31733 = cljs.core.nth.call(null,inst_31731,(1),null);
var state_31820__$1 = (function (){var statearr_31823 = state_31820;
(statearr_31823[(8)] = inst_31732);

return statearr_31823;
})();
if(cljs.core.truth_(inst_31733)){
var statearr_31824_31907 = state_31820__$1;
(statearr_31824_31907[(1)] = (22));

} else {
var statearr_31825_31908 = state_31820__$1;
(statearr_31825_31908[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (27))){
var inst_31761 = (state_31820[(9)]);
var inst_31768 = (state_31820[(10)]);
var inst_31688 = (state_31820[(11)]);
var inst_31763 = (state_31820[(12)]);
var inst_31768__$1 = cljs.core._nth.call(null,inst_31761,inst_31763);
var inst_31769 = cljs.core.async.put_BANG_.call(null,inst_31768__$1,inst_31688,done);
var state_31820__$1 = (function (){var statearr_31826 = state_31820;
(statearr_31826[(10)] = inst_31768__$1);

return statearr_31826;
})();
if(cljs.core.truth_(inst_31769)){
var statearr_31827_31909 = state_31820__$1;
(statearr_31827_31909[(1)] = (30));

} else {
var statearr_31828_31910 = state_31820__$1;
(statearr_31828_31910[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (1))){
var state_31820__$1 = state_31820;
var statearr_31829_31911 = state_31820__$1;
(statearr_31829_31911[(2)] = null);

(statearr_31829_31911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (24))){
var inst_31719 = (state_31820[(7)]);
var inst_31738 = (state_31820[(2)]);
var inst_31739 = cljs.core.next.call(null,inst_31719);
var inst_31697 = inst_31739;
var inst_31698 = null;
var inst_31699 = (0);
var inst_31700 = (0);
var state_31820__$1 = (function (){var statearr_31830 = state_31820;
(statearr_31830[(13)] = inst_31699);

(statearr_31830[(14)] = inst_31700);

(statearr_31830[(15)] = inst_31697);

(statearr_31830[(16)] = inst_31698);

(statearr_31830[(17)] = inst_31738);

return statearr_31830;
})();
var statearr_31831_31912 = state_31820__$1;
(statearr_31831_31912[(2)] = null);

(statearr_31831_31912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (39))){
var state_31820__$1 = state_31820;
var statearr_31835_31913 = state_31820__$1;
(statearr_31835_31913[(2)] = null);

(statearr_31835_31913[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (4))){
var inst_31688 = (state_31820[(11)]);
var inst_31688__$1 = (state_31820[(2)]);
var inst_31689 = (inst_31688__$1 == null);
var state_31820__$1 = (function (){var statearr_31836 = state_31820;
(statearr_31836[(11)] = inst_31688__$1);

return statearr_31836;
})();
if(cljs.core.truth_(inst_31689)){
var statearr_31837_31914 = state_31820__$1;
(statearr_31837_31914[(1)] = (5));

} else {
var statearr_31838_31915 = state_31820__$1;
(statearr_31838_31915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (15))){
var inst_31699 = (state_31820[(13)]);
var inst_31700 = (state_31820[(14)]);
var inst_31697 = (state_31820[(15)]);
var inst_31698 = (state_31820[(16)]);
var inst_31715 = (state_31820[(2)]);
var inst_31716 = (inst_31700 + (1));
var tmp31832 = inst_31699;
var tmp31833 = inst_31697;
var tmp31834 = inst_31698;
var inst_31697__$1 = tmp31833;
var inst_31698__$1 = tmp31834;
var inst_31699__$1 = tmp31832;
var inst_31700__$1 = inst_31716;
var state_31820__$1 = (function (){var statearr_31839 = state_31820;
(statearr_31839[(13)] = inst_31699__$1);

(statearr_31839[(14)] = inst_31700__$1);

(statearr_31839[(15)] = inst_31697__$1);

(statearr_31839[(16)] = inst_31698__$1);

(statearr_31839[(18)] = inst_31715);

return statearr_31839;
})();
var statearr_31840_31916 = state_31820__$1;
(statearr_31840_31916[(2)] = null);

(statearr_31840_31916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (21))){
var inst_31742 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31844_31917 = state_31820__$1;
(statearr_31844_31917[(2)] = inst_31742);

(statearr_31844_31917[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (31))){
var inst_31768 = (state_31820[(10)]);
var inst_31772 = done.call(null,null);
var inst_31773 = cljs.core.async.untap_STAR_.call(null,m,inst_31768);
var state_31820__$1 = (function (){var statearr_31845 = state_31820;
(statearr_31845[(19)] = inst_31772);

return statearr_31845;
})();
var statearr_31846_31918 = state_31820__$1;
(statearr_31846_31918[(2)] = inst_31773);

(statearr_31846_31918[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (32))){
var inst_31761 = (state_31820[(9)]);
var inst_31760 = (state_31820[(20)]);
var inst_31763 = (state_31820[(12)]);
var inst_31762 = (state_31820[(21)]);
var inst_31775 = (state_31820[(2)]);
var inst_31776 = (inst_31763 + (1));
var tmp31841 = inst_31761;
var tmp31842 = inst_31760;
var tmp31843 = inst_31762;
var inst_31760__$1 = tmp31842;
var inst_31761__$1 = tmp31841;
var inst_31762__$1 = tmp31843;
var inst_31763__$1 = inst_31776;
var state_31820__$1 = (function (){var statearr_31847 = state_31820;
(statearr_31847[(9)] = inst_31761__$1);

(statearr_31847[(20)] = inst_31760__$1);

(statearr_31847[(22)] = inst_31775);

(statearr_31847[(12)] = inst_31763__$1);

(statearr_31847[(21)] = inst_31762__$1);

return statearr_31847;
})();
var statearr_31848_31919 = state_31820__$1;
(statearr_31848_31919[(2)] = null);

(statearr_31848_31919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (40))){
var inst_31788 = (state_31820[(23)]);
var inst_31792 = done.call(null,null);
var inst_31793 = cljs.core.async.untap_STAR_.call(null,m,inst_31788);
var state_31820__$1 = (function (){var statearr_31849 = state_31820;
(statearr_31849[(24)] = inst_31792);

return statearr_31849;
})();
var statearr_31850_31920 = state_31820__$1;
(statearr_31850_31920[(2)] = inst_31793);

(statearr_31850_31920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (33))){
var inst_31779 = (state_31820[(25)]);
var inst_31781 = cljs.core.chunked_seq_QMARK_.call(null,inst_31779);
var state_31820__$1 = state_31820;
if(inst_31781){
var statearr_31851_31921 = state_31820__$1;
(statearr_31851_31921[(1)] = (36));

} else {
var statearr_31852_31922 = state_31820__$1;
(statearr_31852_31922[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (13))){
var inst_31709 = (state_31820[(26)]);
var inst_31712 = cljs.core.async.close_BANG_.call(null,inst_31709);
var state_31820__$1 = state_31820;
var statearr_31853_31923 = state_31820__$1;
(statearr_31853_31923[(2)] = inst_31712);

(statearr_31853_31923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (22))){
var inst_31732 = (state_31820[(8)]);
var inst_31735 = cljs.core.async.close_BANG_.call(null,inst_31732);
var state_31820__$1 = state_31820;
var statearr_31854_31924 = state_31820__$1;
(statearr_31854_31924[(2)] = inst_31735);

(statearr_31854_31924[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (36))){
var inst_31779 = (state_31820[(25)]);
var inst_31783 = cljs.core.chunk_first.call(null,inst_31779);
var inst_31784 = cljs.core.chunk_rest.call(null,inst_31779);
var inst_31785 = cljs.core.count.call(null,inst_31783);
var inst_31760 = inst_31784;
var inst_31761 = inst_31783;
var inst_31762 = inst_31785;
var inst_31763 = (0);
var state_31820__$1 = (function (){var statearr_31855 = state_31820;
(statearr_31855[(9)] = inst_31761);

(statearr_31855[(20)] = inst_31760);

(statearr_31855[(12)] = inst_31763);

(statearr_31855[(21)] = inst_31762);

return statearr_31855;
})();
var statearr_31856_31925 = state_31820__$1;
(statearr_31856_31925[(2)] = null);

(statearr_31856_31925[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (41))){
var inst_31779 = (state_31820[(25)]);
var inst_31795 = (state_31820[(2)]);
var inst_31796 = cljs.core.next.call(null,inst_31779);
var inst_31760 = inst_31796;
var inst_31761 = null;
var inst_31762 = (0);
var inst_31763 = (0);
var state_31820__$1 = (function (){var statearr_31857 = state_31820;
(statearr_31857[(9)] = inst_31761);

(statearr_31857[(20)] = inst_31760);

(statearr_31857[(12)] = inst_31763);

(statearr_31857[(27)] = inst_31795);

(statearr_31857[(21)] = inst_31762);

return statearr_31857;
})();
var statearr_31858_31926 = state_31820__$1;
(statearr_31858_31926[(2)] = null);

(statearr_31858_31926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (43))){
var state_31820__$1 = state_31820;
var statearr_31859_31927 = state_31820__$1;
(statearr_31859_31927[(2)] = null);

(statearr_31859_31927[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (29))){
var inst_31804 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31860_31928 = state_31820__$1;
(statearr_31860_31928[(2)] = inst_31804);

(statearr_31860_31928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (44))){
var inst_31813 = (state_31820[(2)]);
var state_31820__$1 = (function (){var statearr_31861 = state_31820;
(statearr_31861[(28)] = inst_31813);

return statearr_31861;
})();
var statearr_31862_31929 = state_31820__$1;
(statearr_31862_31929[(2)] = null);

(statearr_31862_31929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (6))){
var inst_31752 = (state_31820[(29)]);
var inst_31751 = cljs.core.deref.call(null,cs);
var inst_31752__$1 = cljs.core.keys.call(null,inst_31751);
var inst_31753 = cljs.core.count.call(null,inst_31752__$1);
var inst_31754 = cljs.core.reset_BANG_.call(null,dctr,inst_31753);
var inst_31759 = cljs.core.seq.call(null,inst_31752__$1);
var inst_31760 = inst_31759;
var inst_31761 = null;
var inst_31762 = (0);
var inst_31763 = (0);
var state_31820__$1 = (function (){var statearr_31863 = state_31820;
(statearr_31863[(9)] = inst_31761);

(statearr_31863[(20)] = inst_31760);

(statearr_31863[(29)] = inst_31752__$1);

(statearr_31863[(30)] = inst_31754);

(statearr_31863[(12)] = inst_31763);

(statearr_31863[(21)] = inst_31762);

return statearr_31863;
})();
var statearr_31864_31930 = state_31820__$1;
(statearr_31864_31930[(2)] = null);

(statearr_31864_31930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (28))){
var inst_31760 = (state_31820[(20)]);
var inst_31779 = (state_31820[(25)]);
var inst_31779__$1 = cljs.core.seq.call(null,inst_31760);
var state_31820__$1 = (function (){var statearr_31865 = state_31820;
(statearr_31865[(25)] = inst_31779__$1);

return statearr_31865;
})();
if(inst_31779__$1){
var statearr_31866_31931 = state_31820__$1;
(statearr_31866_31931[(1)] = (33));

} else {
var statearr_31867_31932 = state_31820__$1;
(statearr_31867_31932[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (25))){
var inst_31763 = (state_31820[(12)]);
var inst_31762 = (state_31820[(21)]);
var inst_31765 = (inst_31763 < inst_31762);
var inst_31766 = inst_31765;
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31766)){
var statearr_31868_31933 = state_31820__$1;
(statearr_31868_31933[(1)] = (27));

} else {
var statearr_31869_31934 = state_31820__$1;
(statearr_31869_31934[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (34))){
var state_31820__$1 = state_31820;
var statearr_31870_31935 = state_31820__$1;
(statearr_31870_31935[(2)] = null);

(statearr_31870_31935[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (17))){
var state_31820__$1 = state_31820;
var statearr_31871_31936 = state_31820__$1;
(statearr_31871_31936[(2)] = null);

(statearr_31871_31936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (3))){
var inst_31818 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31820__$1,inst_31818);
} else {
if((state_val_31821 === (12))){
var inst_31747 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31872_31937 = state_31820__$1;
(statearr_31872_31937[(2)] = inst_31747);

(statearr_31872_31937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (2))){
var state_31820__$1 = state_31820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31820__$1,(4),ch);
} else {
if((state_val_31821 === (23))){
var state_31820__$1 = state_31820;
var statearr_31873_31938 = state_31820__$1;
(statearr_31873_31938[(2)] = null);

(statearr_31873_31938[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (35))){
var inst_31802 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31874_31939 = state_31820__$1;
(statearr_31874_31939[(2)] = inst_31802);

(statearr_31874_31939[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (19))){
var inst_31719 = (state_31820[(7)]);
var inst_31723 = cljs.core.chunk_first.call(null,inst_31719);
var inst_31724 = cljs.core.chunk_rest.call(null,inst_31719);
var inst_31725 = cljs.core.count.call(null,inst_31723);
var inst_31697 = inst_31724;
var inst_31698 = inst_31723;
var inst_31699 = inst_31725;
var inst_31700 = (0);
var state_31820__$1 = (function (){var statearr_31875 = state_31820;
(statearr_31875[(13)] = inst_31699);

(statearr_31875[(14)] = inst_31700);

(statearr_31875[(15)] = inst_31697);

(statearr_31875[(16)] = inst_31698);

return statearr_31875;
})();
var statearr_31876_31940 = state_31820__$1;
(statearr_31876_31940[(2)] = null);

(statearr_31876_31940[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (11))){
var inst_31697 = (state_31820[(15)]);
var inst_31719 = (state_31820[(7)]);
var inst_31719__$1 = cljs.core.seq.call(null,inst_31697);
var state_31820__$1 = (function (){var statearr_31877 = state_31820;
(statearr_31877[(7)] = inst_31719__$1);

return statearr_31877;
})();
if(inst_31719__$1){
var statearr_31878_31941 = state_31820__$1;
(statearr_31878_31941[(1)] = (16));

} else {
var statearr_31879_31942 = state_31820__$1;
(statearr_31879_31942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (9))){
var inst_31749 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31880_31943 = state_31820__$1;
(statearr_31880_31943[(2)] = inst_31749);

(statearr_31880_31943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (5))){
var inst_31695 = cljs.core.deref.call(null,cs);
var inst_31696 = cljs.core.seq.call(null,inst_31695);
var inst_31697 = inst_31696;
var inst_31698 = null;
var inst_31699 = (0);
var inst_31700 = (0);
var state_31820__$1 = (function (){var statearr_31881 = state_31820;
(statearr_31881[(13)] = inst_31699);

(statearr_31881[(14)] = inst_31700);

(statearr_31881[(15)] = inst_31697);

(statearr_31881[(16)] = inst_31698);

return statearr_31881;
})();
var statearr_31882_31944 = state_31820__$1;
(statearr_31882_31944[(2)] = null);

(statearr_31882_31944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (14))){
var state_31820__$1 = state_31820;
var statearr_31883_31945 = state_31820__$1;
(statearr_31883_31945[(2)] = null);

(statearr_31883_31945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (45))){
var inst_31810 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31884_31946 = state_31820__$1;
(statearr_31884_31946[(2)] = inst_31810);

(statearr_31884_31946[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (26))){
var inst_31752 = (state_31820[(29)]);
var inst_31806 = (state_31820[(2)]);
var inst_31807 = cljs.core.seq.call(null,inst_31752);
var state_31820__$1 = (function (){var statearr_31885 = state_31820;
(statearr_31885[(31)] = inst_31806);

return statearr_31885;
})();
if(inst_31807){
var statearr_31886_31947 = state_31820__$1;
(statearr_31886_31947[(1)] = (42));

} else {
var statearr_31887_31948 = state_31820__$1;
(statearr_31887_31948[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (16))){
var inst_31719 = (state_31820[(7)]);
var inst_31721 = cljs.core.chunked_seq_QMARK_.call(null,inst_31719);
var state_31820__$1 = state_31820;
if(inst_31721){
var statearr_31888_31949 = state_31820__$1;
(statearr_31888_31949[(1)] = (19));

} else {
var statearr_31889_31950 = state_31820__$1;
(statearr_31889_31950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (38))){
var inst_31799 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31890_31951 = state_31820__$1;
(statearr_31890_31951[(2)] = inst_31799);

(statearr_31890_31951[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (30))){
var state_31820__$1 = state_31820;
var statearr_31891_31952 = state_31820__$1;
(statearr_31891_31952[(2)] = null);

(statearr_31891_31952[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (10))){
var inst_31700 = (state_31820[(14)]);
var inst_31698 = (state_31820[(16)]);
var inst_31708 = cljs.core._nth.call(null,inst_31698,inst_31700);
var inst_31709 = cljs.core.nth.call(null,inst_31708,(0),null);
var inst_31710 = cljs.core.nth.call(null,inst_31708,(1),null);
var state_31820__$1 = (function (){var statearr_31892 = state_31820;
(statearr_31892[(26)] = inst_31709);

return statearr_31892;
})();
if(cljs.core.truth_(inst_31710)){
var statearr_31893_31953 = state_31820__$1;
(statearr_31893_31953[(1)] = (13));

} else {
var statearr_31894_31954 = state_31820__$1;
(statearr_31894_31954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (18))){
var inst_31745 = (state_31820[(2)]);
var state_31820__$1 = state_31820;
var statearr_31895_31955 = state_31820__$1;
(statearr_31895_31955[(2)] = inst_31745);

(statearr_31895_31955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (42))){
var state_31820__$1 = state_31820;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31820__$1,(45),dchan);
} else {
if((state_val_31821 === (37))){
var inst_31779 = (state_31820[(25)]);
var inst_31788 = (state_31820[(23)]);
var inst_31688 = (state_31820[(11)]);
var inst_31788__$1 = cljs.core.first.call(null,inst_31779);
var inst_31789 = cljs.core.async.put_BANG_.call(null,inst_31788__$1,inst_31688,done);
var state_31820__$1 = (function (){var statearr_31896 = state_31820;
(statearr_31896[(23)] = inst_31788__$1);

return statearr_31896;
})();
if(cljs.core.truth_(inst_31789)){
var statearr_31897_31956 = state_31820__$1;
(statearr_31897_31956[(1)] = (39));

} else {
var statearr_31898_31957 = state_31820__$1;
(statearr_31898_31957[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31821 === (8))){
var inst_31699 = (state_31820[(13)]);
var inst_31700 = (state_31820[(14)]);
var inst_31702 = (inst_31700 < inst_31699);
var inst_31703 = inst_31702;
var state_31820__$1 = state_31820;
if(cljs.core.truth_(inst_31703)){
var statearr_31899_31958 = state_31820__$1;
(statearr_31899_31958[(1)] = (10));

} else {
var statearr_31900_31959 = state_31820__$1;
(statearr_31900_31959[(1)] = (11));

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
});})(c__31086__auto___31905,cs,m,dchan,dctr,done))
;
return ((function (switch__30991__auto__,c__31086__auto___31905,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30992__auto__ = null;
var cljs$core$async$mult_$_state_machine__30992__auto____0 = (function (){
var statearr_31901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31901[(0)] = cljs$core$async$mult_$_state_machine__30992__auto__);

(statearr_31901[(1)] = (1));

return statearr_31901;
});
var cljs$core$async$mult_$_state_machine__30992__auto____1 = (function (state_31820){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_31820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e31902){if((e31902 instanceof Object)){
var ex__30995__auto__ = e31902;
var statearr_31903_31960 = state_31820;
(statearr_31903_31960[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31961 = state_31820;
state_31820 = G__31961;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30992__auto__ = function(state_31820){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30992__auto____1.call(this,state_31820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30992__auto____0;
cljs$core$async$mult_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30992__auto____1;
return cljs$core$async$mult_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___31905,cs,m,dchan,dctr,done))
})();
var state__31088__auto__ = (function (){var statearr_31904 = f__31087__auto__.call(null);
(statearr_31904[(6)] = c__31086__auto___31905);

return statearr_31904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___31905,cs,m,dchan,dctr,done))
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
var G__31963 = arguments.length;
switch (G__31963) {
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
var len__4641__auto___31975 = arguments.length;
var i__4642__auto___31976 = (0);
while(true){
if((i__4642__auto___31976 < len__4641__auto___31975)){
args__4647__auto__.push((arguments[i__4642__auto___31976]));

var G__31977 = (i__4642__auto___31976 + (1));
i__4642__auto___31976 = G__31977;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31969){
var map__31970 = p__31969;
var map__31970__$1 = (((((!((map__31970 == null))))?(((((map__31970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31970):map__31970);
var opts = map__31970__$1;
var statearr_31972_31978 = state;
(statearr_31972_31978[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__31970,map__31970__$1,opts){
return (function (val){
var statearr_31973_31979 = state;
(statearr_31973_31979[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31970,map__31970__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31974_31980 = state;
(statearr_31974_31980[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31965){
var G__31966 = cljs.core.first.call(null,seq31965);
var seq31965__$1 = cljs.core.next.call(null,seq31965);
var G__31967 = cljs.core.first.call(null,seq31965__$1);
var seq31965__$2 = cljs.core.next.call(null,seq31965__$1);
var G__31968 = cljs.core.first.call(null,seq31965__$2);
var seq31965__$3 = cljs.core.next.call(null,seq31965__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31966,G__31967,G__31968,seq31965__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31981 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31982){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31982 = meta31982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31983,meta31982__$1){
var self__ = this;
var _31983__$1 = this;
return (new cljs.core.async.t_cljs$core$async31981(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31982__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31983){
var self__ = this;
var _31983__$1 = this;
return self__.meta31982;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31981.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31982","meta31982",-2016833098,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31981.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31981";

cljs.core.async.t_cljs$core$async31981.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31981");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31981.
 */
cljs.core.async.__GT_t_cljs$core$async31981 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31981(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31982){
return (new cljs.core.async.t_cljs$core$async31981(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31982));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31981(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31086__auto___32145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32085){
var state_val_32086 = (state_32085[(1)]);
if((state_val_32086 === (7))){
var inst_32000 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32087_32146 = state_32085__$1;
(statearr_32087_32146[(2)] = inst_32000);

(statearr_32087_32146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (20))){
var inst_32012 = (state_32085[(7)]);
var state_32085__$1 = state_32085;
var statearr_32088_32147 = state_32085__$1;
(statearr_32088_32147[(2)] = inst_32012);

(statearr_32088_32147[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (27))){
var state_32085__$1 = state_32085;
var statearr_32089_32148 = state_32085__$1;
(statearr_32089_32148[(2)] = null);

(statearr_32089_32148[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (1))){
var inst_31987 = (state_32085[(8)]);
var inst_31987__$1 = calc_state.call(null);
var inst_31989 = (inst_31987__$1 == null);
var inst_31990 = cljs.core.not.call(null,inst_31989);
var state_32085__$1 = (function (){var statearr_32090 = state_32085;
(statearr_32090[(8)] = inst_31987__$1);

return statearr_32090;
})();
if(inst_31990){
var statearr_32091_32149 = state_32085__$1;
(statearr_32091_32149[(1)] = (2));

} else {
var statearr_32092_32150 = state_32085__$1;
(statearr_32092_32150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (24))){
var inst_32036 = (state_32085[(9)]);
var inst_32059 = (state_32085[(10)]);
var inst_32045 = (state_32085[(11)]);
var inst_32059__$1 = inst_32036.call(null,inst_32045);
var state_32085__$1 = (function (){var statearr_32093 = state_32085;
(statearr_32093[(10)] = inst_32059__$1);

return statearr_32093;
})();
if(cljs.core.truth_(inst_32059__$1)){
var statearr_32094_32151 = state_32085__$1;
(statearr_32094_32151[(1)] = (29));

} else {
var statearr_32095_32152 = state_32085__$1;
(statearr_32095_32152[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (4))){
var inst_32003 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32003)){
var statearr_32096_32153 = state_32085__$1;
(statearr_32096_32153[(1)] = (8));

} else {
var statearr_32097_32154 = state_32085__$1;
(statearr_32097_32154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (15))){
var inst_32030 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32030)){
var statearr_32098_32155 = state_32085__$1;
(statearr_32098_32155[(1)] = (19));

} else {
var statearr_32099_32156 = state_32085__$1;
(statearr_32099_32156[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (21))){
var inst_32035 = (state_32085[(12)]);
var inst_32035__$1 = (state_32085[(2)]);
var inst_32036 = cljs.core.get.call(null,inst_32035__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32037 = cljs.core.get.call(null,inst_32035__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32038 = cljs.core.get.call(null,inst_32035__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32085__$1 = (function (){var statearr_32100 = state_32085;
(statearr_32100[(9)] = inst_32036);

(statearr_32100[(12)] = inst_32035__$1);

(statearr_32100[(13)] = inst_32037);

return statearr_32100;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32085__$1,(22),inst_32038);
} else {
if((state_val_32086 === (31))){
var inst_32067 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32067)){
var statearr_32101_32157 = state_32085__$1;
(statearr_32101_32157[(1)] = (32));

} else {
var statearr_32102_32158 = state_32085__$1;
(statearr_32102_32158[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (32))){
var inst_32044 = (state_32085[(14)]);
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32085__$1,(35),out,inst_32044);
} else {
if((state_val_32086 === (33))){
var inst_32035 = (state_32085[(12)]);
var inst_32012 = inst_32035;
var state_32085__$1 = (function (){var statearr_32103 = state_32085;
(statearr_32103[(7)] = inst_32012);

return statearr_32103;
})();
var statearr_32104_32159 = state_32085__$1;
(statearr_32104_32159[(2)] = null);

(statearr_32104_32159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (13))){
var inst_32012 = (state_32085[(7)]);
var inst_32019 = inst_32012.cljs$lang$protocol_mask$partition0$;
var inst_32020 = (inst_32019 & (64));
var inst_32021 = inst_32012.cljs$core$ISeq$;
var inst_32022 = (cljs.core.PROTOCOL_SENTINEL === inst_32021);
var inst_32023 = ((inst_32020) || (inst_32022));
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32023)){
var statearr_32105_32160 = state_32085__$1;
(statearr_32105_32160[(1)] = (16));

} else {
var statearr_32106_32161 = state_32085__$1;
(statearr_32106_32161[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (22))){
var inst_32044 = (state_32085[(14)]);
var inst_32045 = (state_32085[(11)]);
var inst_32043 = (state_32085[(2)]);
var inst_32044__$1 = cljs.core.nth.call(null,inst_32043,(0),null);
var inst_32045__$1 = cljs.core.nth.call(null,inst_32043,(1),null);
var inst_32046 = (inst_32044__$1 == null);
var inst_32047 = cljs.core._EQ_.call(null,inst_32045__$1,change);
var inst_32048 = ((inst_32046) || (inst_32047));
var state_32085__$1 = (function (){var statearr_32107 = state_32085;
(statearr_32107[(14)] = inst_32044__$1);

(statearr_32107[(11)] = inst_32045__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32108_32162 = state_32085__$1;
(statearr_32108_32162[(1)] = (23));

} else {
var statearr_32109_32163 = state_32085__$1;
(statearr_32109_32163[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (36))){
var inst_32035 = (state_32085[(12)]);
var inst_32012 = inst_32035;
var state_32085__$1 = (function (){var statearr_32110 = state_32085;
(statearr_32110[(7)] = inst_32012);

return statearr_32110;
})();
var statearr_32111_32164 = state_32085__$1;
(statearr_32111_32164[(2)] = null);

(statearr_32111_32164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (29))){
var inst_32059 = (state_32085[(10)]);
var state_32085__$1 = state_32085;
var statearr_32112_32165 = state_32085__$1;
(statearr_32112_32165[(2)] = inst_32059);

(statearr_32112_32165[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (6))){
var state_32085__$1 = state_32085;
var statearr_32113_32166 = state_32085__$1;
(statearr_32113_32166[(2)] = false);

(statearr_32113_32166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (28))){
var inst_32055 = (state_32085[(2)]);
var inst_32056 = calc_state.call(null);
var inst_32012 = inst_32056;
var state_32085__$1 = (function (){var statearr_32114 = state_32085;
(statearr_32114[(7)] = inst_32012);

(statearr_32114[(15)] = inst_32055);

return statearr_32114;
})();
var statearr_32115_32167 = state_32085__$1;
(statearr_32115_32167[(2)] = null);

(statearr_32115_32167[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (25))){
var inst_32081 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32116_32168 = state_32085__$1;
(statearr_32116_32168[(2)] = inst_32081);

(statearr_32116_32168[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (34))){
var inst_32079 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32117_32169 = state_32085__$1;
(statearr_32117_32169[(2)] = inst_32079);

(statearr_32117_32169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (17))){
var state_32085__$1 = state_32085;
var statearr_32118_32170 = state_32085__$1;
(statearr_32118_32170[(2)] = false);

(statearr_32118_32170[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (3))){
var state_32085__$1 = state_32085;
var statearr_32119_32171 = state_32085__$1;
(statearr_32119_32171[(2)] = false);

(statearr_32119_32171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (12))){
var inst_32083 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32085__$1,inst_32083);
} else {
if((state_val_32086 === (2))){
var inst_31987 = (state_32085[(8)]);
var inst_31992 = inst_31987.cljs$lang$protocol_mask$partition0$;
var inst_31993 = (inst_31992 & (64));
var inst_31994 = inst_31987.cljs$core$ISeq$;
var inst_31995 = (cljs.core.PROTOCOL_SENTINEL === inst_31994);
var inst_31996 = ((inst_31993) || (inst_31995));
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_31996)){
var statearr_32120_32172 = state_32085__$1;
(statearr_32120_32172[(1)] = (5));

} else {
var statearr_32121_32173 = state_32085__$1;
(statearr_32121_32173[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (23))){
var inst_32044 = (state_32085[(14)]);
var inst_32050 = (inst_32044 == null);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32050)){
var statearr_32122_32174 = state_32085__$1;
(statearr_32122_32174[(1)] = (26));

} else {
var statearr_32123_32175 = state_32085__$1;
(statearr_32123_32175[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (35))){
var inst_32070 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
if(cljs.core.truth_(inst_32070)){
var statearr_32124_32176 = state_32085__$1;
(statearr_32124_32176[(1)] = (36));

} else {
var statearr_32125_32177 = state_32085__$1;
(statearr_32125_32177[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (19))){
var inst_32012 = (state_32085[(7)]);
var inst_32032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32012);
var state_32085__$1 = state_32085;
var statearr_32126_32178 = state_32085__$1;
(statearr_32126_32178[(2)] = inst_32032);

(statearr_32126_32178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (11))){
var inst_32012 = (state_32085[(7)]);
var inst_32016 = (inst_32012 == null);
var inst_32017 = cljs.core.not.call(null,inst_32016);
var state_32085__$1 = state_32085;
if(inst_32017){
var statearr_32127_32179 = state_32085__$1;
(statearr_32127_32179[(1)] = (13));

} else {
var statearr_32128_32180 = state_32085__$1;
(statearr_32128_32180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (9))){
var inst_31987 = (state_32085[(8)]);
var state_32085__$1 = state_32085;
var statearr_32129_32181 = state_32085__$1;
(statearr_32129_32181[(2)] = inst_31987);

(statearr_32129_32181[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (5))){
var state_32085__$1 = state_32085;
var statearr_32130_32182 = state_32085__$1;
(statearr_32130_32182[(2)] = true);

(statearr_32130_32182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (14))){
var state_32085__$1 = state_32085;
var statearr_32131_32183 = state_32085__$1;
(statearr_32131_32183[(2)] = false);

(statearr_32131_32183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (26))){
var inst_32045 = (state_32085[(11)]);
var inst_32052 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32045);
var state_32085__$1 = state_32085;
var statearr_32132_32184 = state_32085__$1;
(statearr_32132_32184[(2)] = inst_32052);

(statearr_32132_32184[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (16))){
var state_32085__$1 = state_32085;
var statearr_32133_32185 = state_32085__$1;
(statearr_32133_32185[(2)] = true);

(statearr_32133_32185[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (38))){
var inst_32075 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32134_32186 = state_32085__$1;
(statearr_32134_32186[(2)] = inst_32075);

(statearr_32134_32186[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (30))){
var inst_32036 = (state_32085[(9)]);
var inst_32037 = (state_32085[(13)]);
var inst_32045 = (state_32085[(11)]);
var inst_32062 = cljs.core.empty_QMARK_.call(null,inst_32036);
var inst_32063 = inst_32037.call(null,inst_32045);
var inst_32064 = cljs.core.not.call(null,inst_32063);
var inst_32065 = ((inst_32062) && (inst_32064));
var state_32085__$1 = state_32085;
var statearr_32135_32187 = state_32085__$1;
(statearr_32135_32187[(2)] = inst_32065);

(statearr_32135_32187[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (10))){
var inst_31987 = (state_32085[(8)]);
var inst_32008 = (state_32085[(2)]);
var inst_32009 = cljs.core.get.call(null,inst_32008,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32010 = cljs.core.get.call(null,inst_32008,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32011 = cljs.core.get.call(null,inst_32008,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32012 = inst_31987;
var state_32085__$1 = (function (){var statearr_32136 = state_32085;
(statearr_32136[(16)] = inst_32009);

(statearr_32136[(17)] = inst_32011);

(statearr_32136[(7)] = inst_32012);

(statearr_32136[(18)] = inst_32010);

return statearr_32136;
})();
var statearr_32137_32188 = state_32085__$1;
(statearr_32137_32188[(2)] = null);

(statearr_32137_32188[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (18))){
var inst_32027 = (state_32085[(2)]);
var state_32085__$1 = state_32085;
var statearr_32138_32189 = state_32085__$1;
(statearr_32138_32189[(2)] = inst_32027);

(statearr_32138_32189[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (37))){
var state_32085__$1 = state_32085;
var statearr_32139_32190 = state_32085__$1;
(statearr_32139_32190[(2)] = null);

(statearr_32139_32190[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32086 === (8))){
var inst_31987 = (state_32085[(8)]);
var inst_32005 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31987);
var state_32085__$1 = state_32085;
var statearr_32140_32191 = state_32085__$1;
(statearr_32140_32191[(2)] = inst_32005);

(statearr_32140_32191[(1)] = (10));


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
});})(c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30991__auto__,c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30992__auto__ = null;
var cljs$core$async$mix_$_state_machine__30992__auto____0 = (function (){
var statearr_32141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32141[(0)] = cljs$core$async$mix_$_state_machine__30992__auto__);

(statearr_32141[(1)] = (1));

return statearr_32141;
});
var cljs$core$async$mix_$_state_machine__30992__auto____1 = (function (state_32085){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32142){if((e32142 instanceof Object)){
var ex__30995__auto__ = e32142;
var statearr_32143_32192 = state_32085;
(statearr_32143_32192[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32193 = state_32085;
state_32085 = G__32193;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30992__auto__ = function(state_32085){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30992__auto____1.call(this,state_32085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30992__auto____0;
cljs$core$async$mix_$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30992__auto____1;
return cljs$core$async$mix_$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31088__auto__ = (function (){var statearr_32144 = f__31087__auto__.call(null);
(statearr_32144[(6)] = c__31086__auto___32145);

return statearr_32144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32145,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32195 = arguments.length;
switch (G__32195) {
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
var G__32199 = arguments.length;
switch (G__32199) {
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
return (function (p1__32197_SHARP_){
if(cljs.core.truth_(p1__32197_SHARP_.call(null,topic))){
return p1__32197_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32197_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32200 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32201){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32201 = meta32201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32202,meta32201__$1){
var self__ = this;
var _32202__$1 = this;
return (new cljs.core.async.t_cljs$core$async32200(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32201__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32202){
var self__ = this;
var _32202__$1 = this;
return self__.meta32201;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32201","meta32201",-48965137,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32200";

cljs.core.async.t_cljs$core$async32200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32200");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32200.
 */
cljs.core.async.__GT_t_cljs$core$async32200 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32201){
return (new cljs.core.async.t_cljs$core$async32200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32201));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32200(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31086__auto___32320 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32320,mults,ensure_mult,p){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32320,mults,ensure_mult,p){
return (function (state_32274){
var state_val_32275 = (state_32274[(1)]);
if((state_val_32275 === (7))){
var inst_32270 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32276_32321 = state_32274__$1;
(statearr_32276_32321[(2)] = inst_32270);

(statearr_32276_32321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (20))){
var state_32274__$1 = state_32274;
var statearr_32277_32322 = state_32274__$1;
(statearr_32277_32322[(2)] = null);

(statearr_32277_32322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (1))){
var state_32274__$1 = state_32274;
var statearr_32278_32323 = state_32274__$1;
(statearr_32278_32323[(2)] = null);

(statearr_32278_32323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (24))){
var inst_32253 = (state_32274[(7)]);
var inst_32262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32253);
var state_32274__$1 = state_32274;
var statearr_32279_32324 = state_32274__$1;
(statearr_32279_32324[(2)] = inst_32262);

(statearr_32279_32324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (4))){
var inst_32205 = (state_32274[(8)]);
var inst_32205__$1 = (state_32274[(2)]);
var inst_32206 = (inst_32205__$1 == null);
var state_32274__$1 = (function (){var statearr_32280 = state_32274;
(statearr_32280[(8)] = inst_32205__$1);

return statearr_32280;
})();
if(cljs.core.truth_(inst_32206)){
var statearr_32281_32325 = state_32274__$1;
(statearr_32281_32325[(1)] = (5));

} else {
var statearr_32282_32326 = state_32274__$1;
(statearr_32282_32326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (15))){
var inst_32247 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32283_32327 = state_32274__$1;
(statearr_32283_32327[(2)] = inst_32247);

(statearr_32283_32327[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (21))){
var inst_32267 = (state_32274[(2)]);
var state_32274__$1 = (function (){var statearr_32284 = state_32274;
(statearr_32284[(9)] = inst_32267);

return statearr_32284;
})();
var statearr_32285_32328 = state_32274__$1;
(statearr_32285_32328[(2)] = null);

(statearr_32285_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (13))){
var inst_32229 = (state_32274[(10)]);
var inst_32231 = cljs.core.chunked_seq_QMARK_.call(null,inst_32229);
var state_32274__$1 = state_32274;
if(inst_32231){
var statearr_32286_32329 = state_32274__$1;
(statearr_32286_32329[(1)] = (16));

} else {
var statearr_32287_32330 = state_32274__$1;
(statearr_32287_32330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (22))){
var inst_32259 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32259)){
var statearr_32288_32331 = state_32274__$1;
(statearr_32288_32331[(1)] = (23));

} else {
var statearr_32289_32332 = state_32274__$1;
(statearr_32289_32332[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (6))){
var inst_32253 = (state_32274[(7)]);
var inst_32255 = (state_32274[(11)]);
var inst_32205 = (state_32274[(8)]);
var inst_32253__$1 = topic_fn.call(null,inst_32205);
var inst_32254 = cljs.core.deref.call(null,mults);
var inst_32255__$1 = cljs.core.get.call(null,inst_32254,inst_32253__$1);
var state_32274__$1 = (function (){var statearr_32290 = state_32274;
(statearr_32290[(7)] = inst_32253__$1);

(statearr_32290[(11)] = inst_32255__$1);

return statearr_32290;
})();
if(cljs.core.truth_(inst_32255__$1)){
var statearr_32291_32333 = state_32274__$1;
(statearr_32291_32333[(1)] = (19));

} else {
var statearr_32292_32334 = state_32274__$1;
(statearr_32292_32334[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (25))){
var inst_32264 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32293_32335 = state_32274__$1;
(statearr_32293_32335[(2)] = inst_32264);

(statearr_32293_32335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (17))){
var inst_32229 = (state_32274[(10)]);
var inst_32238 = cljs.core.first.call(null,inst_32229);
var inst_32239 = cljs.core.async.muxch_STAR_.call(null,inst_32238);
var inst_32240 = cljs.core.async.close_BANG_.call(null,inst_32239);
var inst_32241 = cljs.core.next.call(null,inst_32229);
var inst_32215 = inst_32241;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32274__$1 = (function (){var statearr_32294 = state_32274;
(statearr_32294[(12)] = inst_32216);

(statearr_32294[(13)] = inst_32217);

(statearr_32294[(14)] = inst_32218);

(statearr_32294[(15)] = inst_32215);

(statearr_32294[(16)] = inst_32240);

return statearr_32294;
})();
var statearr_32295_32336 = state_32274__$1;
(statearr_32295_32336[(2)] = null);

(statearr_32295_32336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (3))){
var inst_32272 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32274__$1,inst_32272);
} else {
if((state_val_32275 === (12))){
var inst_32249 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32296_32337 = state_32274__$1;
(statearr_32296_32337[(2)] = inst_32249);

(statearr_32296_32337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (2))){
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32274__$1,(4),ch);
} else {
if((state_val_32275 === (23))){
var state_32274__$1 = state_32274;
var statearr_32297_32338 = state_32274__$1;
(statearr_32297_32338[(2)] = null);

(statearr_32297_32338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (19))){
var inst_32255 = (state_32274[(11)]);
var inst_32205 = (state_32274[(8)]);
var inst_32257 = cljs.core.async.muxch_STAR_.call(null,inst_32255);
var state_32274__$1 = state_32274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32274__$1,(22),inst_32257,inst_32205);
} else {
if((state_val_32275 === (11))){
var inst_32229 = (state_32274[(10)]);
var inst_32215 = (state_32274[(15)]);
var inst_32229__$1 = cljs.core.seq.call(null,inst_32215);
var state_32274__$1 = (function (){var statearr_32298 = state_32274;
(statearr_32298[(10)] = inst_32229__$1);

return statearr_32298;
})();
if(inst_32229__$1){
var statearr_32299_32339 = state_32274__$1;
(statearr_32299_32339[(1)] = (13));

} else {
var statearr_32300_32340 = state_32274__$1;
(statearr_32300_32340[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (9))){
var inst_32251 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32301_32341 = state_32274__$1;
(statearr_32301_32341[(2)] = inst_32251);

(statearr_32301_32341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (5))){
var inst_32212 = cljs.core.deref.call(null,mults);
var inst_32213 = cljs.core.vals.call(null,inst_32212);
var inst_32214 = cljs.core.seq.call(null,inst_32213);
var inst_32215 = inst_32214;
var inst_32216 = null;
var inst_32217 = (0);
var inst_32218 = (0);
var state_32274__$1 = (function (){var statearr_32302 = state_32274;
(statearr_32302[(12)] = inst_32216);

(statearr_32302[(13)] = inst_32217);

(statearr_32302[(14)] = inst_32218);

(statearr_32302[(15)] = inst_32215);

return statearr_32302;
})();
var statearr_32303_32342 = state_32274__$1;
(statearr_32303_32342[(2)] = null);

(statearr_32303_32342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (14))){
var state_32274__$1 = state_32274;
var statearr_32307_32343 = state_32274__$1;
(statearr_32307_32343[(2)] = null);

(statearr_32307_32343[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (16))){
var inst_32229 = (state_32274[(10)]);
var inst_32233 = cljs.core.chunk_first.call(null,inst_32229);
var inst_32234 = cljs.core.chunk_rest.call(null,inst_32229);
var inst_32235 = cljs.core.count.call(null,inst_32233);
var inst_32215 = inst_32234;
var inst_32216 = inst_32233;
var inst_32217 = inst_32235;
var inst_32218 = (0);
var state_32274__$1 = (function (){var statearr_32308 = state_32274;
(statearr_32308[(12)] = inst_32216);

(statearr_32308[(13)] = inst_32217);

(statearr_32308[(14)] = inst_32218);

(statearr_32308[(15)] = inst_32215);

return statearr_32308;
})();
var statearr_32309_32344 = state_32274__$1;
(statearr_32309_32344[(2)] = null);

(statearr_32309_32344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (10))){
var inst_32216 = (state_32274[(12)]);
var inst_32217 = (state_32274[(13)]);
var inst_32218 = (state_32274[(14)]);
var inst_32215 = (state_32274[(15)]);
var inst_32223 = cljs.core._nth.call(null,inst_32216,inst_32218);
var inst_32224 = cljs.core.async.muxch_STAR_.call(null,inst_32223);
var inst_32225 = cljs.core.async.close_BANG_.call(null,inst_32224);
var inst_32226 = (inst_32218 + (1));
var tmp32304 = inst_32216;
var tmp32305 = inst_32217;
var tmp32306 = inst_32215;
var inst_32215__$1 = tmp32306;
var inst_32216__$1 = tmp32304;
var inst_32217__$1 = tmp32305;
var inst_32218__$1 = inst_32226;
var state_32274__$1 = (function (){var statearr_32310 = state_32274;
(statearr_32310[(12)] = inst_32216__$1);

(statearr_32310[(13)] = inst_32217__$1);

(statearr_32310[(14)] = inst_32218__$1);

(statearr_32310[(15)] = inst_32215__$1);

(statearr_32310[(17)] = inst_32225);

return statearr_32310;
})();
var statearr_32311_32345 = state_32274__$1;
(statearr_32311_32345[(2)] = null);

(statearr_32311_32345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (18))){
var inst_32244 = (state_32274[(2)]);
var state_32274__$1 = state_32274;
var statearr_32312_32346 = state_32274__$1;
(statearr_32312_32346[(2)] = inst_32244);

(statearr_32312_32346[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32275 === (8))){
var inst_32217 = (state_32274[(13)]);
var inst_32218 = (state_32274[(14)]);
var inst_32220 = (inst_32218 < inst_32217);
var inst_32221 = inst_32220;
var state_32274__$1 = state_32274;
if(cljs.core.truth_(inst_32221)){
var statearr_32313_32347 = state_32274__$1;
(statearr_32313_32347[(1)] = (10));

} else {
var statearr_32314_32348 = state_32274__$1;
(statearr_32314_32348[(1)] = (11));

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
});})(c__31086__auto___32320,mults,ensure_mult,p))
;
return ((function (switch__30991__auto__,c__31086__auto___32320,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32315[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32315[(1)] = (1));

return statearr_32315;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32274){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32316){if((e32316 instanceof Object)){
var ex__30995__auto__ = e32316;
var statearr_32317_32349 = state_32274;
(statearr_32317_32349[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32350 = state_32274;
state_32274 = G__32350;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32320,mults,ensure_mult,p))
})();
var state__31088__auto__ = (function (){var statearr_32318 = f__31087__auto__.call(null);
(statearr_32318[(6)] = c__31086__auto___32320);

return statearr_32318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32320,mults,ensure_mult,p))
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
var G__32352 = arguments.length;
switch (G__32352) {
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
var G__32355 = arguments.length;
switch (G__32355) {
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
var G__32358 = arguments.length;
switch (G__32358) {
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
var c__31086__auto___32425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32397){
var state_val_32398 = (state_32397[(1)]);
if((state_val_32398 === (7))){
var state_32397__$1 = state_32397;
var statearr_32399_32426 = state_32397__$1;
(statearr_32399_32426[(2)] = null);

(statearr_32399_32426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (1))){
var state_32397__$1 = state_32397;
var statearr_32400_32427 = state_32397__$1;
(statearr_32400_32427[(2)] = null);

(statearr_32400_32427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (4))){
var inst_32361 = (state_32397[(7)]);
var inst_32363 = (inst_32361 < cnt);
var state_32397__$1 = state_32397;
if(cljs.core.truth_(inst_32363)){
var statearr_32401_32428 = state_32397__$1;
(statearr_32401_32428[(1)] = (6));

} else {
var statearr_32402_32429 = state_32397__$1;
(statearr_32402_32429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (15))){
var inst_32393 = (state_32397[(2)]);
var state_32397__$1 = state_32397;
var statearr_32403_32430 = state_32397__$1;
(statearr_32403_32430[(2)] = inst_32393);

(statearr_32403_32430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (13))){
var inst_32386 = cljs.core.async.close_BANG_.call(null,out);
var state_32397__$1 = state_32397;
var statearr_32404_32431 = state_32397__$1;
(statearr_32404_32431[(2)] = inst_32386);

(statearr_32404_32431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (6))){
var state_32397__$1 = state_32397;
var statearr_32405_32432 = state_32397__$1;
(statearr_32405_32432[(2)] = null);

(statearr_32405_32432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (3))){
var inst_32395 = (state_32397[(2)]);
var state_32397__$1 = state_32397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32397__$1,inst_32395);
} else {
if((state_val_32398 === (12))){
var inst_32383 = (state_32397[(8)]);
var inst_32383__$1 = (state_32397[(2)]);
var inst_32384 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32383__$1);
var state_32397__$1 = (function (){var statearr_32406 = state_32397;
(statearr_32406[(8)] = inst_32383__$1);

return statearr_32406;
})();
if(cljs.core.truth_(inst_32384)){
var statearr_32407_32433 = state_32397__$1;
(statearr_32407_32433[(1)] = (13));

} else {
var statearr_32408_32434 = state_32397__$1;
(statearr_32408_32434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (2))){
var inst_32360 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32361 = (0);
var state_32397__$1 = (function (){var statearr_32409 = state_32397;
(statearr_32409[(9)] = inst_32360);

(statearr_32409[(7)] = inst_32361);

return statearr_32409;
})();
var statearr_32410_32435 = state_32397__$1;
(statearr_32410_32435[(2)] = null);

(statearr_32410_32435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (11))){
var inst_32361 = (state_32397[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32397,(10),Object,null,(9));
var inst_32370 = chs__$1.call(null,inst_32361);
var inst_32371 = done.call(null,inst_32361);
var inst_32372 = cljs.core.async.take_BANG_.call(null,inst_32370,inst_32371);
var state_32397__$1 = state_32397;
var statearr_32411_32436 = state_32397__$1;
(statearr_32411_32436[(2)] = inst_32372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (9))){
var inst_32361 = (state_32397[(7)]);
var inst_32374 = (state_32397[(2)]);
var inst_32375 = (inst_32361 + (1));
var inst_32361__$1 = inst_32375;
var state_32397__$1 = (function (){var statearr_32412 = state_32397;
(statearr_32412[(10)] = inst_32374);

(statearr_32412[(7)] = inst_32361__$1);

return statearr_32412;
})();
var statearr_32413_32437 = state_32397__$1;
(statearr_32413_32437[(2)] = null);

(statearr_32413_32437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (5))){
var inst_32381 = (state_32397[(2)]);
var state_32397__$1 = (function (){var statearr_32414 = state_32397;
(statearr_32414[(11)] = inst_32381);

return statearr_32414;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32397__$1,(12),dchan);
} else {
if((state_val_32398 === (14))){
var inst_32383 = (state_32397[(8)]);
var inst_32388 = cljs.core.apply.call(null,f,inst_32383);
var state_32397__$1 = state_32397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32397__$1,(16),out,inst_32388);
} else {
if((state_val_32398 === (16))){
var inst_32390 = (state_32397[(2)]);
var state_32397__$1 = (function (){var statearr_32415 = state_32397;
(statearr_32415[(12)] = inst_32390);

return statearr_32415;
})();
var statearr_32416_32438 = state_32397__$1;
(statearr_32416_32438[(2)] = null);

(statearr_32416_32438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (10))){
var inst_32365 = (state_32397[(2)]);
var inst_32366 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32397__$1 = (function (){var statearr_32417 = state_32397;
(statearr_32417[(13)] = inst_32365);

return statearr_32417;
})();
var statearr_32418_32439 = state_32397__$1;
(statearr_32418_32439[(2)] = inst_32366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32397__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32398 === (8))){
var inst_32379 = (state_32397[(2)]);
var state_32397__$1 = state_32397;
var statearr_32419_32440 = state_32397__$1;
(statearr_32419_32440[(2)] = inst_32379);

(statearr_32419_32440[(1)] = (5));


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
});})(c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30991__auto__,c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32420 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32420[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32420[(1)] = (1));

return statearr_32420;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32397){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32421){if((e32421 instanceof Object)){
var ex__30995__auto__ = e32421;
var statearr_32422_32441 = state_32397;
(statearr_32422_32441[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32442 = state_32397;
state_32397 = G__32442;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31088__auto__ = (function (){var statearr_32423 = f__31087__auto__.call(null);
(statearr_32423[(6)] = c__31086__auto___32425);

return statearr_32423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32425,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32445 = arguments.length;
switch (G__32445) {
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
var c__31086__auto___32499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32499,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32499,out){
return (function (state_32477){
var state_val_32478 = (state_32477[(1)]);
if((state_val_32478 === (7))){
var inst_32457 = (state_32477[(7)]);
var inst_32456 = (state_32477[(8)]);
var inst_32456__$1 = (state_32477[(2)]);
var inst_32457__$1 = cljs.core.nth.call(null,inst_32456__$1,(0),null);
var inst_32458 = cljs.core.nth.call(null,inst_32456__$1,(1),null);
var inst_32459 = (inst_32457__$1 == null);
var state_32477__$1 = (function (){var statearr_32479 = state_32477;
(statearr_32479[(9)] = inst_32458);

(statearr_32479[(7)] = inst_32457__$1);

(statearr_32479[(8)] = inst_32456__$1);

return statearr_32479;
})();
if(cljs.core.truth_(inst_32459)){
var statearr_32480_32500 = state_32477__$1;
(statearr_32480_32500[(1)] = (8));

} else {
var statearr_32481_32501 = state_32477__$1;
(statearr_32481_32501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (1))){
var inst_32446 = cljs.core.vec.call(null,chs);
var inst_32447 = inst_32446;
var state_32477__$1 = (function (){var statearr_32482 = state_32477;
(statearr_32482[(10)] = inst_32447);

return statearr_32482;
})();
var statearr_32483_32502 = state_32477__$1;
(statearr_32483_32502[(2)] = null);

(statearr_32483_32502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (4))){
var inst_32447 = (state_32477[(10)]);
var state_32477__$1 = state_32477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32477__$1,(7),inst_32447);
} else {
if((state_val_32478 === (6))){
var inst_32473 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32484_32503 = state_32477__$1;
(statearr_32484_32503[(2)] = inst_32473);

(statearr_32484_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (3))){
var inst_32475 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32477__$1,inst_32475);
} else {
if((state_val_32478 === (2))){
var inst_32447 = (state_32477[(10)]);
var inst_32449 = cljs.core.count.call(null,inst_32447);
var inst_32450 = (inst_32449 > (0));
var state_32477__$1 = state_32477;
if(cljs.core.truth_(inst_32450)){
var statearr_32486_32504 = state_32477__$1;
(statearr_32486_32504[(1)] = (4));

} else {
var statearr_32487_32505 = state_32477__$1;
(statearr_32487_32505[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (11))){
var inst_32447 = (state_32477[(10)]);
var inst_32466 = (state_32477[(2)]);
var tmp32485 = inst_32447;
var inst_32447__$1 = tmp32485;
var state_32477__$1 = (function (){var statearr_32488 = state_32477;
(statearr_32488[(10)] = inst_32447__$1);

(statearr_32488[(11)] = inst_32466);

return statearr_32488;
})();
var statearr_32489_32506 = state_32477__$1;
(statearr_32489_32506[(2)] = null);

(statearr_32489_32506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (9))){
var inst_32457 = (state_32477[(7)]);
var state_32477__$1 = state_32477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32477__$1,(11),out,inst_32457);
} else {
if((state_val_32478 === (5))){
var inst_32471 = cljs.core.async.close_BANG_.call(null,out);
var state_32477__$1 = state_32477;
var statearr_32490_32507 = state_32477__$1;
(statearr_32490_32507[(2)] = inst_32471);

(statearr_32490_32507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (10))){
var inst_32469 = (state_32477[(2)]);
var state_32477__$1 = state_32477;
var statearr_32491_32508 = state_32477__$1;
(statearr_32491_32508[(2)] = inst_32469);

(statearr_32491_32508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32478 === (8))){
var inst_32458 = (state_32477[(9)]);
var inst_32457 = (state_32477[(7)]);
var inst_32447 = (state_32477[(10)]);
var inst_32456 = (state_32477[(8)]);
var inst_32461 = (function (){var cs = inst_32447;
var vec__32452 = inst_32456;
var v = inst_32457;
var c = inst_32458;
return ((function (cs,vec__32452,v,c,inst_32458,inst_32457,inst_32447,inst_32456,state_val_32478,c__31086__auto___32499,out){
return (function (p1__32443_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32443_SHARP_);
});
;})(cs,vec__32452,v,c,inst_32458,inst_32457,inst_32447,inst_32456,state_val_32478,c__31086__auto___32499,out))
})();
var inst_32462 = cljs.core.filterv.call(null,inst_32461,inst_32447);
var inst_32447__$1 = inst_32462;
var state_32477__$1 = (function (){var statearr_32492 = state_32477;
(statearr_32492[(10)] = inst_32447__$1);

return statearr_32492;
})();
var statearr_32493_32509 = state_32477__$1;
(statearr_32493_32509[(2)] = null);

(statearr_32493_32509[(1)] = (2));


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
});})(c__31086__auto___32499,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32499,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32494[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32494[(1)] = (1));

return statearr_32494;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32477){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32495){if((e32495 instanceof Object)){
var ex__30995__auto__ = e32495;
var statearr_32496_32510 = state_32477;
(statearr_32496_32510[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32511 = state_32477;
state_32477 = G__32511;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32499,out))
})();
var state__31088__auto__ = (function (){var statearr_32497 = f__31087__auto__.call(null);
(statearr_32497[(6)] = c__31086__auto___32499);

return statearr_32497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32499,out))
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
var G__32513 = arguments.length;
switch (G__32513) {
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
var c__31086__auto___32558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32558,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32558,out){
return (function (state_32537){
var state_val_32538 = (state_32537[(1)]);
if((state_val_32538 === (7))){
var inst_32519 = (state_32537[(7)]);
var inst_32519__$1 = (state_32537[(2)]);
var inst_32520 = (inst_32519__$1 == null);
var inst_32521 = cljs.core.not.call(null,inst_32520);
var state_32537__$1 = (function (){var statearr_32539 = state_32537;
(statearr_32539[(7)] = inst_32519__$1);

return statearr_32539;
})();
if(inst_32521){
var statearr_32540_32559 = state_32537__$1;
(statearr_32540_32559[(1)] = (8));

} else {
var statearr_32541_32560 = state_32537__$1;
(statearr_32541_32560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (1))){
var inst_32514 = (0);
var state_32537__$1 = (function (){var statearr_32542 = state_32537;
(statearr_32542[(8)] = inst_32514);

return statearr_32542;
})();
var statearr_32543_32561 = state_32537__$1;
(statearr_32543_32561[(2)] = null);

(statearr_32543_32561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (4))){
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32537__$1,(7),ch);
} else {
if((state_val_32538 === (6))){
var inst_32532 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32544_32562 = state_32537__$1;
(statearr_32544_32562[(2)] = inst_32532);

(statearr_32544_32562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (3))){
var inst_32534 = (state_32537[(2)]);
var inst_32535 = cljs.core.async.close_BANG_.call(null,out);
var state_32537__$1 = (function (){var statearr_32545 = state_32537;
(statearr_32545[(9)] = inst_32534);

return statearr_32545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32537__$1,inst_32535);
} else {
if((state_val_32538 === (2))){
var inst_32514 = (state_32537[(8)]);
var inst_32516 = (inst_32514 < n);
var state_32537__$1 = state_32537;
if(cljs.core.truth_(inst_32516)){
var statearr_32546_32563 = state_32537__$1;
(statearr_32546_32563[(1)] = (4));

} else {
var statearr_32547_32564 = state_32537__$1;
(statearr_32547_32564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (11))){
var inst_32514 = (state_32537[(8)]);
var inst_32524 = (state_32537[(2)]);
var inst_32525 = (inst_32514 + (1));
var inst_32514__$1 = inst_32525;
var state_32537__$1 = (function (){var statearr_32548 = state_32537;
(statearr_32548[(10)] = inst_32524);

(statearr_32548[(8)] = inst_32514__$1);

return statearr_32548;
})();
var statearr_32549_32565 = state_32537__$1;
(statearr_32549_32565[(2)] = null);

(statearr_32549_32565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (9))){
var state_32537__$1 = state_32537;
var statearr_32550_32566 = state_32537__$1;
(statearr_32550_32566[(2)] = null);

(statearr_32550_32566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (5))){
var state_32537__$1 = state_32537;
var statearr_32551_32567 = state_32537__$1;
(statearr_32551_32567[(2)] = null);

(statearr_32551_32567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (10))){
var inst_32529 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32552_32568 = state_32537__$1;
(statearr_32552_32568[(2)] = inst_32529);

(statearr_32552_32568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (8))){
var inst_32519 = (state_32537[(7)]);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32537__$1,(11),out,inst_32519);
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
});})(c__31086__auto___32558,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32558,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32553 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32553[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32553[(1)] = (1));

return statearr_32553;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32537){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32554){if((e32554 instanceof Object)){
var ex__30995__auto__ = e32554;
var statearr_32555_32569 = state_32537;
(statearr_32555_32569[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32570 = state_32537;
state_32537 = G__32570;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32558,out))
})();
var state__31088__auto__ = (function (){var statearr_32556 = f__31087__auto__.call(null);
(statearr_32556[(6)] = c__31086__auto___32558);

return statearr_32556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32558,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32572 = (function (f,ch,meta32573){
this.f = f;
this.ch = ch;
this.meta32573 = meta32573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32574,meta32573__$1){
var self__ = this;
var _32574__$1 = this;
return (new cljs.core.async.t_cljs$core$async32572(self__.f,self__.ch,meta32573__$1));
});

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32574){
var self__ = this;
var _32574__$1 = this;
return self__.meta32573;
});

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32575 = (function (f,ch,meta32573,_,fn1,meta32576){
this.f = f;
this.ch = ch;
this.meta32573 = meta32573;
this._ = _;
this.fn1 = fn1;
this.meta32576 = meta32576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32577,meta32576__$1){
var self__ = this;
var _32577__$1 = this;
return (new cljs.core.async.t_cljs$core$async32575(self__.f,self__.ch,self__.meta32573,self__._,self__.fn1,meta32576__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32577){
var self__ = this;
var _32577__$1 = this;
return self__.meta32576;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32571_SHARP_){
return f1.call(null,(((p1__32571_SHARP_ == null))?null:self__.f.call(null,p1__32571_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32573","meta32573",-1103411482,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32572","cljs.core.async/t_cljs$core$async32572",-679768015,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32576","meta32576",1581254247,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32575";

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32575");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32575.
 */
cljs.core.async.__GT_t_cljs$core$async32575 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32575(f__$1,ch__$1,meta32573__$1,___$2,fn1__$1,meta32576){
return (new cljs.core.async.t_cljs$core$async32575(f__$1,ch__$1,meta32573__$1,___$2,fn1__$1,meta32576));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32575(self__.f,self__.ch,self__.meta32573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32573","meta32573",-1103411482,null)], null);
});

cljs.core.async.t_cljs$core$async32572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32572";

cljs.core.async.t_cljs$core$async32572.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32572");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32572.
 */
cljs.core.async.__GT_t_cljs$core$async32572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32572(f__$1,ch__$1,meta32573){
return (new cljs.core.async.t_cljs$core$async32572(f__$1,ch__$1,meta32573));
});

}

return (new cljs.core.async.t_cljs$core$async32572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32578 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32578 = (function (f,ch,meta32579){
this.f = f;
this.ch = ch;
this.meta32579 = meta32579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32580,meta32579__$1){
var self__ = this;
var _32580__$1 = this;
return (new cljs.core.async.t_cljs$core$async32578(self__.f,self__.ch,meta32579__$1));
});

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32580){
var self__ = this;
var _32580__$1 = this;
return self__.meta32579;
});

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32579","meta32579",1366694653,null)], null);
});

cljs.core.async.t_cljs$core$async32578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32578";

cljs.core.async.t_cljs$core$async32578.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32578");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32578.
 */
cljs.core.async.__GT_t_cljs$core$async32578 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32578(f__$1,ch__$1,meta32579){
return (new cljs.core.async.t_cljs$core$async32578(f__$1,ch__$1,meta32579));
});

}

return (new cljs.core.async.t_cljs$core$async32578(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32581 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32581 = (function (p,ch,meta32582){
this.p = p;
this.ch = ch;
this.meta32582 = meta32582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32583,meta32582__$1){
var self__ = this;
var _32583__$1 = this;
return (new cljs.core.async.t_cljs$core$async32581(self__.p,self__.ch,meta32582__$1));
});

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32583){
var self__ = this;
var _32583__$1 = this;
return self__.meta32582;
});

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32581.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32582","meta32582",-129259475,null)], null);
});

cljs.core.async.t_cljs$core$async32581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32581";

cljs.core.async.t_cljs$core$async32581.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32581");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32581.
 */
cljs.core.async.__GT_t_cljs$core$async32581 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32581(p__$1,ch__$1,meta32582){
return (new cljs.core.async.t_cljs$core$async32581(p__$1,ch__$1,meta32582));
});

}

return (new cljs.core.async.t_cljs$core$async32581(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32585 = arguments.length;
switch (G__32585) {
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
var c__31086__auto___32625 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32625,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32625,out){
return (function (state_32606){
var state_val_32607 = (state_32606[(1)]);
if((state_val_32607 === (7))){
var inst_32602 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
var statearr_32608_32626 = state_32606__$1;
(statearr_32608_32626[(2)] = inst_32602);

(statearr_32608_32626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (1))){
var state_32606__$1 = state_32606;
var statearr_32609_32627 = state_32606__$1;
(statearr_32609_32627[(2)] = null);

(statearr_32609_32627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (4))){
var inst_32588 = (state_32606[(7)]);
var inst_32588__$1 = (state_32606[(2)]);
var inst_32589 = (inst_32588__$1 == null);
var state_32606__$1 = (function (){var statearr_32610 = state_32606;
(statearr_32610[(7)] = inst_32588__$1);

return statearr_32610;
})();
if(cljs.core.truth_(inst_32589)){
var statearr_32611_32628 = state_32606__$1;
(statearr_32611_32628[(1)] = (5));

} else {
var statearr_32612_32629 = state_32606__$1;
(statearr_32612_32629[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (6))){
var inst_32588 = (state_32606[(7)]);
var inst_32593 = p.call(null,inst_32588);
var state_32606__$1 = state_32606;
if(cljs.core.truth_(inst_32593)){
var statearr_32613_32630 = state_32606__$1;
(statearr_32613_32630[(1)] = (8));

} else {
var statearr_32614_32631 = state_32606__$1;
(statearr_32614_32631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (3))){
var inst_32604 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32606__$1,inst_32604);
} else {
if((state_val_32607 === (2))){
var state_32606__$1 = state_32606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32606__$1,(4),ch);
} else {
if((state_val_32607 === (11))){
var inst_32596 = (state_32606[(2)]);
var state_32606__$1 = state_32606;
var statearr_32615_32632 = state_32606__$1;
(statearr_32615_32632[(2)] = inst_32596);

(statearr_32615_32632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (9))){
var state_32606__$1 = state_32606;
var statearr_32616_32633 = state_32606__$1;
(statearr_32616_32633[(2)] = null);

(statearr_32616_32633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (5))){
var inst_32591 = cljs.core.async.close_BANG_.call(null,out);
var state_32606__$1 = state_32606;
var statearr_32617_32634 = state_32606__$1;
(statearr_32617_32634[(2)] = inst_32591);

(statearr_32617_32634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (10))){
var inst_32599 = (state_32606[(2)]);
var state_32606__$1 = (function (){var statearr_32618 = state_32606;
(statearr_32618[(8)] = inst_32599);

return statearr_32618;
})();
var statearr_32619_32635 = state_32606__$1;
(statearr_32619_32635[(2)] = null);

(statearr_32619_32635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32607 === (8))){
var inst_32588 = (state_32606[(7)]);
var state_32606__$1 = state_32606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32606__$1,(11),out,inst_32588);
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
});})(c__31086__auto___32625,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32625,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32620 = [null,null,null,null,null,null,null,null,null];
(statearr_32620[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32620[(1)] = (1));

return statearr_32620;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32606){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32621){if((e32621 instanceof Object)){
var ex__30995__auto__ = e32621;
var statearr_32622_32636 = state_32606;
(statearr_32622_32636[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32637 = state_32606;
state_32606 = G__32637;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32625,out))
})();
var state__31088__auto__ = (function (){var statearr_32623 = f__31087__auto__.call(null);
(statearr_32623[(6)] = c__31086__auto___32625);

return statearr_32623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32625,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32639 = arguments.length;
switch (G__32639) {
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
var c__31086__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto__){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto__){
return (function (state_32702){
var state_val_32703 = (state_32702[(1)]);
if((state_val_32703 === (7))){
var inst_32698 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
var statearr_32704_32742 = state_32702__$1;
(statearr_32704_32742[(2)] = inst_32698);

(statearr_32704_32742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (20))){
var inst_32668 = (state_32702[(7)]);
var inst_32679 = (state_32702[(2)]);
var inst_32680 = cljs.core.next.call(null,inst_32668);
var inst_32654 = inst_32680;
var inst_32655 = null;
var inst_32656 = (0);
var inst_32657 = (0);
var state_32702__$1 = (function (){var statearr_32705 = state_32702;
(statearr_32705[(8)] = inst_32679);

(statearr_32705[(9)] = inst_32655);

(statearr_32705[(10)] = inst_32657);

(statearr_32705[(11)] = inst_32656);

(statearr_32705[(12)] = inst_32654);

return statearr_32705;
})();
var statearr_32706_32743 = state_32702__$1;
(statearr_32706_32743[(2)] = null);

(statearr_32706_32743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (1))){
var state_32702__$1 = state_32702;
var statearr_32707_32744 = state_32702__$1;
(statearr_32707_32744[(2)] = null);

(statearr_32707_32744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (4))){
var inst_32643 = (state_32702[(13)]);
var inst_32643__$1 = (state_32702[(2)]);
var inst_32644 = (inst_32643__$1 == null);
var state_32702__$1 = (function (){var statearr_32708 = state_32702;
(statearr_32708[(13)] = inst_32643__$1);

return statearr_32708;
})();
if(cljs.core.truth_(inst_32644)){
var statearr_32709_32745 = state_32702__$1;
(statearr_32709_32745[(1)] = (5));

} else {
var statearr_32710_32746 = state_32702__$1;
(statearr_32710_32746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (15))){
var state_32702__$1 = state_32702;
var statearr_32714_32747 = state_32702__$1;
(statearr_32714_32747[(2)] = null);

(statearr_32714_32747[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (21))){
var state_32702__$1 = state_32702;
var statearr_32715_32748 = state_32702__$1;
(statearr_32715_32748[(2)] = null);

(statearr_32715_32748[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (13))){
var inst_32655 = (state_32702[(9)]);
var inst_32657 = (state_32702[(10)]);
var inst_32656 = (state_32702[(11)]);
var inst_32654 = (state_32702[(12)]);
var inst_32664 = (state_32702[(2)]);
var inst_32665 = (inst_32657 + (1));
var tmp32711 = inst_32655;
var tmp32712 = inst_32656;
var tmp32713 = inst_32654;
var inst_32654__$1 = tmp32713;
var inst_32655__$1 = tmp32711;
var inst_32656__$1 = tmp32712;
var inst_32657__$1 = inst_32665;
var state_32702__$1 = (function (){var statearr_32716 = state_32702;
(statearr_32716[(9)] = inst_32655__$1);

(statearr_32716[(10)] = inst_32657__$1);

(statearr_32716[(14)] = inst_32664);

(statearr_32716[(11)] = inst_32656__$1);

(statearr_32716[(12)] = inst_32654__$1);

return statearr_32716;
})();
var statearr_32717_32749 = state_32702__$1;
(statearr_32717_32749[(2)] = null);

(statearr_32717_32749[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (22))){
var state_32702__$1 = state_32702;
var statearr_32718_32750 = state_32702__$1;
(statearr_32718_32750[(2)] = null);

(statearr_32718_32750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (6))){
var inst_32643 = (state_32702[(13)]);
var inst_32652 = f.call(null,inst_32643);
var inst_32653 = cljs.core.seq.call(null,inst_32652);
var inst_32654 = inst_32653;
var inst_32655 = null;
var inst_32656 = (0);
var inst_32657 = (0);
var state_32702__$1 = (function (){var statearr_32719 = state_32702;
(statearr_32719[(9)] = inst_32655);

(statearr_32719[(10)] = inst_32657);

(statearr_32719[(11)] = inst_32656);

(statearr_32719[(12)] = inst_32654);

return statearr_32719;
})();
var statearr_32720_32751 = state_32702__$1;
(statearr_32720_32751[(2)] = null);

(statearr_32720_32751[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (17))){
var inst_32668 = (state_32702[(7)]);
var inst_32672 = cljs.core.chunk_first.call(null,inst_32668);
var inst_32673 = cljs.core.chunk_rest.call(null,inst_32668);
var inst_32674 = cljs.core.count.call(null,inst_32672);
var inst_32654 = inst_32673;
var inst_32655 = inst_32672;
var inst_32656 = inst_32674;
var inst_32657 = (0);
var state_32702__$1 = (function (){var statearr_32721 = state_32702;
(statearr_32721[(9)] = inst_32655);

(statearr_32721[(10)] = inst_32657);

(statearr_32721[(11)] = inst_32656);

(statearr_32721[(12)] = inst_32654);

return statearr_32721;
})();
var statearr_32722_32752 = state_32702__$1;
(statearr_32722_32752[(2)] = null);

(statearr_32722_32752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (3))){
var inst_32700 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32702__$1,inst_32700);
} else {
if((state_val_32703 === (12))){
var inst_32688 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
var statearr_32723_32753 = state_32702__$1;
(statearr_32723_32753[(2)] = inst_32688);

(statearr_32723_32753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (2))){
var state_32702__$1 = state_32702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32702__$1,(4),in$);
} else {
if((state_val_32703 === (23))){
var inst_32696 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
var statearr_32724_32754 = state_32702__$1;
(statearr_32724_32754[(2)] = inst_32696);

(statearr_32724_32754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (19))){
var inst_32683 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
var statearr_32725_32755 = state_32702__$1;
(statearr_32725_32755[(2)] = inst_32683);

(statearr_32725_32755[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (11))){
var inst_32668 = (state_32702[(7)]);
var inst_32654 = (state_32702[(12)]);
var inst_32668__$1 = cljs.core.seq.call(null,inst_32654);
var state_32702__$1 = (function (){var statearr_32726 = state_32702;
(statearr_32726[(7)] = inst_32668__$1);

return statearr_32726;
})();
if(inst_32668__$1){
var statearr_32727_32756 = state_32702__$1;
(statearr_32727_32756[(1)] = (14));

} else {
var statearr_32728_32757 = state_32702__$1;
(statearr_32728_32757[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (9))){
var inst_32690 = (state_32702[(2)]);
var inst_32691 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32702__$1 = (function (){var statearr_32729 = state_32702;
(statearr_32729[(15)] = inst_32690);

return statearr_32729;
})();
if(cljs.core.truth_(inst_32691)){
var statearr_32730_32758 = state_32702__$1;
(statearr_32730_32758[(1)] = (21));

} else {
var statearr_32731_32759 = state_32702__$1;
(statearr_32731_32759[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (5))){
var inst_32646 = cljs.core.async.close_BANG_.call(null,out);
var state_32702__$1 = state_32702;
var statearr_32732_32760 = state_32702__$1;
(statearr_32732_32760[(2)] = inst_32646);

(statearr_32732_32760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (14))){
var inst_32668 = (state_32702[(7)]);
var inst_32670 = cljs.core.chunked_seq_QMARK_.call(null,inst_32668);
var state_32702__$1 = state_32702;
if(inst_32670){
var statearr_32733_32761 = state_32702__$1;
(statearr_32733_32761[(1)] = (17));

} else {
var statearr_32734_32762 = state_32702__$1;
(statearr_32734_32762[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (16))){
var inst_32686 = (state_32702[(2)]);
var state_32702__$1 = state_32702;
var statearr_32735_32763 = state_32702__$1;
(statearr_32735_32763[(2)] = inst_32686);

(statearr_32735_32763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32703 === (10))){
var inst_32655 = (state_32702[(9)]);
var inst_32657 = (state_32702[(10)]);
var inst_32662 = cljs.core._nth.call(null,inst_32655,inst_32657);
var state_32702__$1 = state_32702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32702__$1,(13),out,inst_32662);
} else {
if((state_val_32703 === (18))){
var inst_32668 = (state_32702[(7)]);
var inst_32677 = cljs.core.first.call(null,inst_32668);
var state_32702__$1 = state_32702;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32702__$1,(20),out,inst_32677);
} else {
if((state_val_32703 === (8))){
var inst_32657 = (state_32702[(10)]);
var inst_32656 = (state_32702[(11)]);
var inst_32659 = (inst_32657 < inst_32656);
var inst_32660 = inst_32659;
var state_32702__$1 = state_32702;
if(cljs.core.truth_(inst_32660)){
var statearr_32736_32764 = state_32702__$1;
(statearr_32736_32764[(1)] = (10));

} else {
var statearr_32737_32765 = state_32702__$1;
(statearr_32737_32765[(1)] = (11));

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
});})(c__31086__auto__))
;
return ((function (switch__30991__auto__,c__31086__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____0 = (function (){
var statearr_32738 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32738[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__);

(statearr_32738[(1)] = (1));

return statearr_32738;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____1 = (function (state_32702){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32739){if((e32739 instanceof Object)){
var ex__30995__auto__ = e32739;
var statearr_32740_32766 = state_32702;
(statearr_32740_32766[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32767 = state_32702;
state_32702 = G__32767;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__ = function(state_32702){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____1.call(this,state_32702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30992__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto__))
})();
var state__31088__auto__ = (function (){var statearr_32741 = f__31087__auto__.call(null);
(statearr_32741[(6)] = c__31086__auto__);

return statearr_32741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto__))
);

return c__31086__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32769 = arguments.length;
switch (G__32769) {
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
var G__32772 = arguments.length;
switch (G__32772) {
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
var G__32775 = arguments.length;
switch (G__32775) {
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
var c__31086__auto___32822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32822,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32822,out){
return (function (state_32799){
var state_val_32800 = (state_32799[(1)]);
if((state_val_32800 === (7))){
var inst_32794 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32801_32823 = state_32799__$1;
(statearr_32801_32823[(2)] = inst_32794);

(statearr_32801_32823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (1))){
var inst_32776 = null;
var state_32799__$1 = (function (){var statearr_32802 = state_32799;
(statearr_32802[(7)] = inst_32776);

return statearr_32802;
})();
var statearr_32803_32824 = state_32799__$1;
(statearr_32803_32824[(2)] = null);

(statearr_32803_32824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (4))){
var inst_32779 = (state_32799[(8)]);
var inst_32779__$1 = (state_32799[(2)]);
var inst_32780 = (inst_32779__$1 == null);
var inst_32781 = cljs.core.not.call(null,inst_32780);
var state_32799__$1 = (function (){var statearr_32804 = state_32799;
(statearr_32804[(8)] = inst_32779__$1);

return statearr_32804;
})();
if(inst_32781){
var statearr_32805_32825 = state_32799__$1;
(statearr_32805_32825[(1)] = (5));

} else {
var statearr_32806_32826 = state_32799__$1;
(statearr_32806_32826[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (6))){
var state_32799__$1 = state_32799;
var statearr_32807_32827 = state_32799__$1;
(statearr_32807_32827[(2)] = null);

(statearr_32807_32827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (3))){
var inst_32796 = (state_32799[(2)]);
var inst_32797 = cljs.core.async.close_BANG_.call(null,out);
var state_32799__$1 = (function (){var statearr_32808 = state_32799;
(statearr_32808[(9)] = inst_32796);

return statearr_32808;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32799__$1,inst_32797);
} else {
if((state_val_32800 === (2))){
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32799__$1,(4),ch);
} else {
if((state_val_32800 === (11))){
var inst_32779 = (state_32799[(8)]);
var inst_32788 = (state_32799[(2)]);
var inst_32776 = inst_32779;
var state_32799__$1 = (function (){var statearr_32809 = state_32799;
(statearr_32809[(7)] = inst_32776);

(statearr_32809[(10)] = inst_32788);

return statearr_32809;
})();
var statearr_32810_32828 = state_32799__$1;
(statearr_32810_32828[(2)] = null);

(statearr_32810_32828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (9))){
var inst_32779 = (state_32799[(8)]);
var state_32799__$1 = state_32799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,(11),out,inst_32779);
} else {
if((state_val_32800 === (5))){
var inst_32776 = (state_32799[(7)]);
var inst_32779 = (state_32799[(8)]);
var inst_32783 = cljs.core._EQ_.call(null,inst_32779,inst_32776);
var state_32799__$1 = state_32799;
if(inst_32783){
var statearr_32812_32829 = state_32799__$1;
(statearr_32812_32829[(1)] = (8));

} else {
var statearr_32813_32830 = state_32799__$1;
(statearr_32813_32830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (10))){
var inst_32791 = (state_32799[(2)]);
var state_32799__$1 = state_32799;
var statearr_32814_32831 = state_32799__$1;
(statearr_32814_32831[(2)] = inst_32791);

(statearr_32814_32831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32800 === (8))){
var inst_32776 = (state_32799[(7)]);
var tmp32811 = inst_32776;
var inst_32776__$1 = tmp32811;
var state_32799__$1 = (function (){var statearr_32815 = state_32799;
(statearr_32815[(7)] = inst_32776__$1);

return statearr_32815;
})();
var statearr_32816_32832 = state_32799__$1;
(statearr_32816_32832[(2)] = null);

(statearr_32816_32832[(1)] = (2));


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
});})(c__31086__auto___32822,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32822,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32817 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32817[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32817[(1)] = (1));

return statearr_32817;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32799){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32818){if((e32818 instanceof Object)){
var ex__30995__auto__ = e32818;
var statearr_32819_32833 = state_32799;
(statearr_32819_32833[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32834 = state_32799;
state_32799 = G__32834;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32822,out))
})();
var state__31088__auto__ = (function (){var statearr_32820 = f__31087__auto__.call(null);
(statearr_32820[(6)] = c__31086__auto___32822);

return statearr_32820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32822,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32836 = arguments.length;
switch (G__32836) {
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
var c__31086__auto___32902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32902,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32902,out){
return (function (state_32874){
var state_val_32875 = (state_32874[(1)]);
if((state_val_32875 === (7))){
var inst_32870 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32876_32903 = state_32874__$1;
(statearr_32876_32903[(2)] = inst_32870);

(statearr_32876_32903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (1))){
var inst_32837 = (new Array(n));
var inst_32838 = inst_32837;
var inst_32839 = (0);
var state_32874__$1 = (function (){var statearr_32877 = state_32874;
(statearr_32877[(7)] = inst_32838);

(statearr_32877[(8)] = inst_32839);

return statearr_32877;
})();
var statearr_32878_32904 = state_32874__$1;
(statearr_32878_32904[(2)] = null);

(statearr_32878_32904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (4))){
var inst_32842 = (state_32874[(9)]);
var inst_32842__$1 = (state_32874[(2)]);
var inst_32843 = (inst_32842__$1 == null);
var inst_32844 = cljs.core.not.call(null,inst_32843);
var state_32874__$1 = (function (){var statearr_32879 = state_32874;
(statearr_32879[(9)] = inst_32842__$1);

return statearr_32879;
})();
if(inst_32844){
var statearr_32880_32905 = state_32874__$1;
(statearr_32880_32905[(1)] = (5));

} else {
var statearr_32881_32906 = state_32874__$1;
(statearr_32881_32906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (15))){
var inst_32864 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32882_32907 = state_32874__$1;
(statearr_32882_32907[(2)] = inst_32864);

(statearr_32882_32907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (13))){
var state_32874__$1 = state_32874;
var statearr_32883_32908 = state_32874__$1;
(statearr_32883_32908[(2)] = null);

(statearr_32883_32908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (6))){
var inst_32839 = (state_32874[(8)]);
var inst_32860 = (inst_32839 > (0));
var state_32874__$1 = state_32874;
if(cljs.core.truth_(inst_32860)){
var statearr_32884_32909 = state_32874__$1;
(statearr_32884_32909[(1)] = (12));

} else {
var statearr_32885_32910 = state_32874__$1;
(statearr_32885_32910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (3))){
var inst_32872 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32874__$1,inst_32872);
} else {
if((state_val_32875 === (12))){
var inst_32838 = (state_32874[(7)]);
var inst_32862 = cljs.core.vec.call(null,inst_32838);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32874__$1,(15),out,inst_32862);
} else {
if((state_val_32875 === (2))){
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32874__$1,(4),ch);
} else {
if((state_val_32875 === (11))){
var inst_32854 = (state_32874[(2)]);
var inst_32855 = (new Array(n));
var inst_32838 = inst_32855;
var inst_32839 = (0);
var state_32874__$1 = (function (){var statearr_32886 = state_32874;
(statearr_32886[(10)] = inst_32854);

(statearr_32886[(7)] = inst_32838);

(statearr_32886[(8)] = inst_32839);

return statearr_32886;
})();
var statearr_32887_32911 = state_32874__$1;
(statearr_32887_32911[(2)] = null);

(statearr_32887_32911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (9))){
var inst_32838 = (state_32874[(7)]);
var inst_32852 = cljs.core.vec.call(null,inst_32838);
var state_32874__$1 = state_32874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32874__$1,(11),out,inst_32852);
} else {
if((state_val_32875 === (5))){
var inst_32838 = (state_32874[(7)]);
var inst_32842 = (state_32874[(9)]);
var inst_32847 = (state_32874[(11)]);
var inst_32839 = (state_32874[(8)]);
var inst_32846 = (inst_32838[inst_32839] = inst_32842);
var inst_32847__$1 = (inst_32839 + (1));
var inst_32848 = (inst_32847__$1 < n);
var state_32874__$1 = (function (){var statearr_32888 = state_32874;
(statearr_32888[(12)] = inst_32846);

(statearr_32888[(11)] = inst_32847__$1);

return statearr_32888;
})();
if(cljs.core.truth_(inst_32848)){
var statearr_32889_32912 = state_32874__$1;
(statearr_32889_32912[(1)] = (8));

} else {
var statearr_32890_32913 = state_32874__$1;
(statearr_32890_32913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (14))){
var inst_32867 = (state_32874[(2)]);
var inst_32868 = cljs.core.async.close_BANG_.call(null,out);
var state_32874__$1 = (function (){var statearr_32892 = state_32874;
(statearr_32892[(13)] = inst_32867);

return statearr_32892;
})();
var statearr_32893_32914 = state_32874__$1;
(statearr_32893_32914[(2)] = inst_32868);

(statearr_32893_32914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (10))){
var inst_32858 = (state_32874[(2)]);
var state_32874__$1 = state_32874;
var statearr_32894_32915 = state_32874__$1;
(statearr_32894_32915[(2)] = inst_32858);

(statearr_32894_32915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32875 === (8))){
var inst_32838 = (state_32874[(7)]);
var inst_32847 = (state_32874[(11)]);
var tmp32891 = inst_32838;
var inst_32838__$1 = tmp32891;
var inst_32839 = inst_32847;
var state_32874__$1 = (function (){var statearr_32895 = state_32874;
(statearr_32895[(7)] = inst_32838__$1);

(statearr_32895[(8)] = inst_32839);

return statearr_32895;
})();
var statearr_32896_32916 = state_32874__$1;
(statearr_32896_32916[(2)] = null);

(statearr_32896_32916[(1)] = (2));


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
});})(c__31086__auto___32902,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32902,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32897[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32897[(1)] = (1));

return statearr_32897;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32874){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32898){if((e32898 instanceof Object)){
var ex__30995__auto__ = e32898;
var statearr_32899_32917 = state_32874;
(statearr_32899_32917[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32918 = state_32874;
state_32874 = G__32918;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32902,out))
})();
var state__31088__auto__ = (function (){var statearr_32900 = f__31087__auto__.call(null);
(statearr_32900[(6)] = c__31086__auto___32902);

return statearr_32900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32902,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32920 = arguments.length;
switch (G__32920) {
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
var c__31086__auto___32990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31086__auto___32990,out){
return (function (){
var f__31087__auto__ = (function (){var switch__30991__auto__ = ((function (c__31086__auto___32990,out){
return (function (state_32962){
var state_val_32963 = (state_32962[(1)]);
if((state_val_32963 === (7))){
var inst_32958 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32964_32991 = state_32962__$1;
(statearr_32964_32991[(2)] = inst_32958);

(statearr_32964_32991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (1))){
var inst_32921 = [];
var inst_32922 = inst_32921;
var inst_32923 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32962__$1 = (function (){var statearr_32965 = state_32962;
(statearr_32965[(7)] = inst_32922);

(statearr_32965[(8)] = inst_32923);

return statearr_32965;
})();
var statearr_32966_32992 = state_32962__$1;
(statearr_32966_32992[(2)] = null);

(statearr_32966_32992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (4))){
var inst_32926 = (state_32962[(9)]);
var inst_32926__$1 = (state_32962[(2)]);
var inst_32927 = (inst_32926__$1 == null);
var inst_32928 = cljs.core.not.call(null,inst_32927);
var state_32962__$1 = (function (){var statearr_32967 = state_32962;
(statearr_32967[(9)] = inst_32926__$1);

return statearr_32967;
})();
if(inst_32928){
var statearr_32968_32993 = state_32962__$1;
(statearr_32968_32993[(1)] = (5));

} else {
var statearr_32969_32994 = state_32962__$1;
(statearr_32969_32994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (15))){
var inst_32952 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32970_32995 = state_32962__$1;
(statearr_32970_32995[(2)] = inst_32952);

(statearr_32970_32995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (13))){
var state_32962__$1 = state_32962;
var statearr_32971_32996 = state_32962__$1;
(statearr_32971_32996[(2)] = null);

(statearr_32971_32996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (6))){
var inst_32922 = (state_32962[(7)]);
var inst_32947 = inst_32922.length;
var inst_32948 = (inst_32947 > (0));
var state_32962__$1 = state_32962;
if(cljs.core.truth_(inst_32948)){
var statearr_32972_32997 = state_32962__$1;
(statearr_32972_32997[(1)] = (12));

} else {
var statearr_32973_32998 = state_32962__$1;
(statearr_32973_32998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (3))){
var inst_32960 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32962__$1,inst_32960);
} else {
if((state_val_32963 === (12))){
var inst_32922 = (state_32962[(7)]);
var inst_32950 = cljs.core.vec.call(null,inst_32922);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32962__$1,(15),out,inst_32950);
} else {
if((state_val_32963 === (2))){
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32962__$1,(4),ch);
} else {
if((state_val_32963 === (11))){
var inst_32930 = (state_32962[(10)]);
var inst_32926 = (state_32962[(9)]);
var inst_32940 = (state_32962[(2)]);
var inst_32941 = [];
var inst_32942 = inst_32941.push(inst_32926);
var inst_32922 = inst_32941;
var inst_32923 = inst_32930;
var state_32962__$1 = (function (){var statearr_32974 = state_32962;
(statearr_32974[(11)] = inst_32942);

(statearr_32974[(7)] = inst_32922);

(statearr_32974[(8)] = inst_32923);

(statearr_32974[(12)] = inst_32940);

return statearr_32974;
})();
var statearr_32975_32999 = state_32962__$1;
(statearr_32975_32999[(2)] = null);

(statearr_32975_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (9))){
var inst_32922 = (state_32962[(7)]);
var inst_32938 = cljs.core.vec.call(null,inst_32922);
var state_32962__$1 = state_32962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32962__$1,(11),out,inst_32938);
} else {
if((state_val_32963 === (5))){
var inst_32930 = (state_32962[(10)]);
var inst_32926 = (state_32962[(9)]);
var inst_32923 = (state_32962[(8)]);
var inst_32930__$1 = f.call(null,inst_32926);
var inst_32931 = cljs.core._EQ_.call(null,inst_32930__$1,inst_32923);
var inst_32932 = cljs.core.keyword_identical_QMARK_.call(null,inst_32923,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32933 = ((inst_32931) || (inst_32932));
var state_32962__$1 = (function (){var statearr_32976 = state_32962;
(statearr_32976[(10)] = inst_32930__$1);

return statearr_32976;
})();
if(cljs.core.truth_(inst_32933)){
var statearr_32977_33000 = state_32962__$1;
(statearr_32977_33000[(1)] = (8));

} else {
var statearr_32978_33001 = state_32962__$1;
(statearr_32978_33001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (14))){
var inst_32955 = (state_32962[(2)]);
var inst_32956 = cljs.core.async.close_BANG_.call(null,out);
var state_32962__$1 = (function (){var statearr_32980 = state_32962;
(statearr_32980[(13)] = inst_32955);

return statearr_32980;
})();
var statearr_32981_33002 = state_32962__$1;
(statearr_32981_33002[(2)] = inst_32956);

(statearr_32981_33002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (10))){
var inst_32945 = (state_32962[(2)]);
var state_32962__$1 = state_32962;
var statearr_32982_33003 = state_32962__$1;
(statearr_32982_33003[(2)] = inst_32945);

(statearr_32982_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32963 === (8))){
var inst_32922 = (state_32962[(7)]);
var inst_32930 = (state_32962[(10)]);
var inst_32926 = (state_32962[(9)]);
var inst_32935 = inst_32922.push(inst_32926);
var tmp32979 = inst_32922;
var inst_32922__$1 = tmp32979;
var inst_32923 = inst_32930;
var state_32962__$1 = (function (){var statearr_32983 = state_32962;
(statearr_32983[(7)] = inst_32922__$1);

(statearr_32983[(14)] = inst_32935);

(statearr_32983[(8)] = inst_32923);

return statearr_32983;
})();
var statearr_32984_33004 = state_32962__$1;
(statearr_32984_33004[(2)] = null);

(statearr_32984_33004[(1)] = (2));


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
});})(c__31086__auto___32990,out))
;
return ((function (switch__30991__auto__,c__31086__auto___32990,out){
return (function() {
var cljs$core$async$state_machine__30992__auto__ = null;
var cljs$core$async$state_machine__30992__auto____0 = (function (){
var statearr_32985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32985[(0)] = cljs$core$async$state_machine__30992__auto__);

(statearr_32985[(1)] = (1));

return statearr_32985;
});
var cljs$core$async$state_machine__30992__auto____1 = (function (state_32962){
while(true){
var ret_value__30993__auto__ = (function (){try{while(true){
var result__30994__auto__ = switch__30991__auto__.call(null,state_32962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30994__auto__;
}
break;
}
}catch (e32986){if((e32986 instanceof Object)){
var ex__30995__auto__ = e32986;
var statearr_32987_33005 = state_32962;
(statearr_32987_33005[(5)] = ex__30995__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30993__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33006 = state_32962;
state_32962 = G__33006;
continue;
} else {
return ret_value__30993__auto__;
}
break;
}
});
cljs$core$async$state_machine__30992__auto__ = function(state_32962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30992__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30992__auto____1.call(this,state_32962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30992__auto____0;
cljs$core$async$state_machine__30992__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30992__auto____1;
return cljs$core$async$state_machine__30992__auto__;
})()
;})(switch__30991__auto__,c__31086__auto___32990,out))
})();
var state__31088__auto__ = (function (){var statearr_32988 = f__31087__auto__.call(null);
(statearr_32988[(6)] = c__31086__auto___32990);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31088__auto__);
});})(c__31086__auto___32990,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545637587925
