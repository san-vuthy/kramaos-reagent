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
var G__31147 = arguments.length;
switch (G__31147) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31148 = (function (f,blockable,meta31149){
this.f = f;
this.blockable = blockable;
this.meta31149 = meta31149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31150,meta31149__$1){
var self__ = this;
var _31150__$1 = this;
return (new cljs.core.async.t_cljs$core$async31148(self__.f,self__.blockable,meta31149__$1));
});

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31150){
var self__ = this;
var _31150__$1 = this;
return self__.meta31149;
});

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31149","meta31149",-739672363,null)], null);
});

cljs.core.async.t_cljs$core$async31148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31148";

cljs.core.async.t_cljs$core$async31148.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31148");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31148.
 */
cljs.core.async.__GT_t_cljs$core$async31148 = (function cljs$core$async$__GT_t_cljs$core$async31148(f__$1,blockable__$1,meta31149){
return (new cljs.core.async.t_cljs$core$async31148(f__$1,blockable__$1,meta31149));
});

}

return (new cljs.core.async.t_cljs$core$async31148(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__31154 = arguments.length;
switch (G__31154) {
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
var G__31157 = arguments.length;
switch (G__31157) {
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
var G__31160 = arguments.length;
switch (G__31160) {
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
var val_31162 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31162);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31162,ret){
return (function (){
return fn1.call(null,val_31162);
});})(val_31162,ret))
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
var G__31164 = arguments.length;
switch (G__31164) {
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
var n__4518__auto___31166 = n;
var x_31167 = (0);
while(true){
if((x_31167 < n__4518__auto___31166)){
(a[x_31167] = (0));

var G__31168 = (x_31167 + (1));
x_31167 = G__31168;
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

var G__31169 = (i + (1));
i = G__31169;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31170 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31170 = (function (flag,meta31171){
this.flag = flag;
this.meta31171 = meta31171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31172,meta31171__$1){
var self__ = this;
var _31172__$1 = this;
return (new cljs.core.async.t_cljs$core$async31170(self__.flag,meta31171__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31172){
var self__ = this;
var _31172__$1 = this;
return self__.meta31171;
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31171","meta31171",-16087981,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31170";

cljs.core.async.t_cljs$core$async31170.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31170");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31170.
 */
cljs.core.async.__GT_t_cljs$core$async31170 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31170(flag__$1,meta31171){
return (new cljs.core.async.t_cljs$core$async31170(flag__$1,meta31171));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31170(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31173 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31173 = (function (flag,cb,meta31174){
this.flag = flag;
this.cb = cb;
this.meta31174 = meta31174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31175,meta31174__$1){
var self__ = this;
var _31175__$1 = this;
return (new cljs.core.async.t_cljs$core$async31173(self__.flag,self__.cb,meta31174__$1));
});

cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31175){
var self__ = this;
var _31175__$1 = this;
return self__.meta31174;
});

cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31173.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31174","meta31174",905491078,null)], null);
});

cljs.core.async.t_cljs$core$async31173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31173";

cljs.core.async.t_cljs$core$async31173.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31173");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31173.
 */
cljs.core.async.__GT_t_cljs$core$async31173 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31173(flag__$1,cb__$1,meta31174){
return (new cljs.core.async.t_cljs$core$async31173(flag__$1,cb__$1,meta31174));
});

}

return (new cljs.core.async.t_cljs$core$async31173(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31176_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31176_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31177_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31177_SHARP_,port], null));
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
var G__31178 = (i + (1));
i = G__31178;
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
var len__4641__auto___31184 = arguments.length;
var i__4642__auto___31185 = (0);
while(true){
if((i__4642__auto___31185 < len__4641__auto___31184)){
args__4647__auto__.push((arguments[i__4642__auto___31185]));

var G__31186 = (i__4642__auto___31185 + (1));
i__4642__auto___31185 = G__31186;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31181){
var map__31182 = p__31181;
var map__31182__$1 = (((((!((map__31182 == null))))?(((((map__31182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182):map__31182);
var opts = map__31182__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31179){
var G__31180 = cljs.core.first.call(null,seq31179);
var seq31179__$1 = cljs.core.next.call(null,seq31179);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31180,seq31179__$1);
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
var G__31188 = arguments.length;
switch (G__31188) {
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
var c__31087__auto___31234 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31234){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___31234){
return (function (state_31212){
var state_val_31213 = (state_31212[(1)]);
if((state_val_31213 === (7))){
var inst_31208 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31214_31235 = state_31212__$1;
(statearr_31214_31235[(2)] = inst_31208);

(statearr_31214_31235[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (1))){
var state_31212__$1 = state_31212;
var statearr_31215_31236 = state_31212__$1;
(statearr_31215_31236[(2)] = null);

(statearr_31215_31236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (4))){
var inst_31191 = (state_31212[(7)]);
var inst_31191__$1 = (state_31212[(2)]);
var inst_31192 = (inst_31191__$1 == null);
var state_31212__$1 = (function (){var statearr_31216 = state_31212;
(statearr_31216[(7)] = inst_31191__$1);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31192)){
var statearr_31217_31237 = state_31212__$1;
(statearr_31217_31237[(1)] = (5));

} else {
var statearr_31218_31238 = state_31212__$1;
(statearr_31218_31238[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (13))){
var state_31212__$1 = state_31212;
var statearr_31219_31239 = state_31212__$1;
(statearr_31219_31239[(2)] = null);

(statearr_31219_31239[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (6))){
var inst_31191 = (state_31212[(7)]);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31212__$1,(11),to,inst_31191);
} else {
if((state_val_31213 === (3))){
var inst_31210 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31212__$1,inst_31210);
} else {
if((state_val_31213 === (12))){
var state_31212__$1 = state_31212;
var statearr_31220_31240 = state_31212__$1;
(statearr_31220_31240[(2)] = null);

(statearr_31220_31240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (2))){
var state_31212__$1 = state_31212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31212__$1,(4),from);
} else {
if((state_val_31213 === (11))){
var inst_31201 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
if(cljs.core.truth_(inst_31201)){
var statearr_31221_31241 = state_31212__$1;
(statearr_31221_31241[(1)] = (12));

} else {
var statearr_31222_31242 = state_31212__$1;
(statearr_31222_31242[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (9))){
var state_31212__$1 = state_31212;
var statearr_31223_31243 = state_31212__$1;
(statearr_31223_31243[(2)] = null);

(statearr_31223_31243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (5))){
var state_31212__$1 = state_31212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31224_31244 = state_31212__$1;
(statearr_31224_31244[(1)] = (8));

} else {
var statearr_31225_31245 = state_31212__$1;
(statearr_31225_31245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (14))){
var inst_31206 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31226_31246 = state_31212__$1;
(statearr_31226_31246[(2)] = inst_31206);

(statearr_31226_31246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (10))){
var inst_31198 = (state_31212[(2)]);
var state_31212__$1 = state_31212;
var statearr_31227_31247 = state_31212__$1;
(statearr_31227_31247[(2)] = inst_31198);

(statearr_31227_31247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31213 === (8))){
var inst_31195 = cljs.core.async.close_BANG_.call(null,to);
var state_31212__$1 = state_31212;
var statearr_31228_31248 = state_31212__$1;
(statearr_31228_31248[(2)] = inst_31195);

(statearr_31228_31248[(1)] = (10));


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
});})(c__31087__auto___31234))
;
return ((function (switch__30992__auto__,c__31087__auto___31234){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_31229 = [null,null,null,null,null,null,null,null];
(statearr_31229[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_31229[(1)] = (1));

return statearr_31229;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_31212){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31230){if((e31230 instanceof Object)){
var ex__30996__auto__ = e31230;
var statearr_31231_31249 = state_31212;
(statearr_31231_31249[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31250 = state_31212;
state_31212 = G__31250;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_31212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_31212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___31234))
})();
var state__31089__auto__ = (function (){var statearr_31232 = f__31088__auto__.call(null);
(statearr_31232[(6)] = c__31087__auto___31234);

return statearr_31232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31234))
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
return (function (p__31251){
var vec__31252 = p__31251;
var v = cljs.core.nth.call(null,vec__31252,(0),null);
var p = cljs.core.nth.call(null,vec__31252,(1),null);
var job = vec__31252;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__31087__auto___31423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results){
return (function (state_31259){
var state_val_31260 = (state_31259[(1)]);
if((state_val_31260 === (1))){
var state_31259__$1 = state_31259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31259__$1,(2),res,v);
} else {
if((state_val_31260 === (2))){
var inst_31256 = (state_31259[(2)]);
var inst_31257 = cljs.core.async.close_BANG_.call(null,res);
var state_31259__$1 = (function (){var statearr_31261 = state_31259;
(statearr_31261[(7)] = inst_31256);

return statearr_31261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31259__$1,inst_31257);
} else {
return null;
}
}
});})(c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results))
;
return ((function (switch__30992__auto__,c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_31262 = [null,null,null,null,null,null,null,null];
(statearr_31262[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__);

(statearr_31262[(1)] = (1));

return statearr_31262;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1 = (function (state_31259){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31263){if((e31263 instanceof Object)){
var ex__30996__auto__ = e31263;
var statearr_31264_31424 = state_31259;
(statearr_31264_31424[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31425 = state_31259;
state_31259 = G__31425;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = function(state_31259){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1.call(this,state_31259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results))
})();
var state__31089__auto__ = (function (){var statearr_31265 = f__31088__auto__.call(null);
(statearr_31265[(6)] = c__31087__auto___31423);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31423,res,vec__31252,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31266){
var vec__31267 = p__31266;
var v = cljs.core.nth.call(null,vec__31267,(0),null);
var p = cljs.core.nth.call(null,vec__31267,(1),null);
var job = vec__31267;
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
var n__4518__auto___31426 = n;
var __31427 = (0);
while(true){
if((__31427 < n__4518__auto___31426)){
var G__31270_31428 = type;
var G__31270_31429__$1 = (((G__31270_31428 instanceof cljs.core.Keyword))?G__31270_31428.fqn:null);
switch (G__31270_31429__$1) {
case "compute":
var c__31087__auto___31431 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31427,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (__31427,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function (state_31283){
var state_val_31284 = (state_31283[(1)]);
if((state_val_31284 === (1))){
var state_31283__$1 = state_31283;
var statearr_31285_31432 = state_31283__$1;
(statearr_31285_31432[(2)] = null);

(statearr_31285_31432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (2))){
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31283__$1,(4),jobs);
} else {
if((state_val_31284 === (3))){
var inst_31281 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31283__$1,inst_31281);
} else {
if((state_val_31284 === (4))){
var inst_31273 = (state_31283[(2)]);
var inst_31274 = process.call(null,inst_31273);
var state_31283__$1 = state_31283;
if(cljs.core.truth_(inst_31274)){
var statearr_31286_31433 = state_31283__$1;
(statearr_31286_31433[(1)] = (5));

} else {
var statearr_31287_31434 = state_31283__$1;
(statearr_31287_31434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (5))){
var state_31283__$1 = state_31283;
var statearr_31288_31435 = state_31283__$1;
(statearr_31288_31435[(2)] = null);

(statearr_31288_31435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (6))){
var state_31283__$1 = state_31283;
var statearr_31289_31436 = state_31283__$1;
(statearr_31289_31436[(2)] = null);

(statearr_31289_31436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31284 === (7))){
var inst_31279 = (state_31283[(2)]);
var state_31283__$1 = state_31283;
var statearr_31290_31437 = state_31283__$1;
(statearr_31290_31437[(2)] = inst_31279);

(statearr_31290_31437[(1)] = (3));


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
});})(__31427,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
;
return ((function (__31427,switch__30992__auto__,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_31291 = [null,null,null,null,null,null,null];
(statearr_31291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__);

(statearr_31291[(1)] = (1));

return statearr_31291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1 = (function (state_31283){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31292){if((e31292 instanceof Object)){
var ex__30996__auto__ = e31292;
var statearr_31293_31438 = state_31283;
(statearr_31293_31438[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31439 = state_31283;
state_31283 = G__31439;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = function(state_31283){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1.call(this,state_31283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__;
})()
;})(__31427,switch__30992__auto__,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31294 = f__31088__auto__.call(null);
(statearr_31294[(6)] = c__31087__auto___31431);

return statearr_31294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(__31427,c__31087__auto___31431,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
);


break;
case "async":
var c__31087__auto___31440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31427,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (__31427,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function (state_31307){
var state_val_31308 = (state_31307[(1)]);
if((state_val_31308 === (1))){
var state_31307__$1 = state_31307;
var statearr_31309_31441 = state_31307__$1;
(statearr_31309_31441[(2)] = null);

(statearr_31309_31441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (2))){
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31307__$1,(4),jobs);
} else {
if((state_val_31308 === (3))){
var inst_31305 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31307__$1,inst_31305);
} else {
if((state_val_31308 === (4))){
var inst_31297 = (state_31307[(2)]);
var inst_31298 = async.call(null,inst_31297);
var state_31307__$1 = state_31307;
if(cljs.core.truth_(inst_31298)){
var statearr_31310_31442 = state_31307__$1;
(statearr_31310_31442[(1)] = (5));

} else {
var statearr_31311_31443 = state_31307__$1;
(statearr_31311_31443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (5))){
var state_31307__$1 = state_31307;
var statearr_31312_31444 = state_31307__$1;
(statearr_31312_31444[(2)] = null);

(statearr_31312_31444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (6))){
var state_31307__$1 = state_31307;
var statearr_31313_31445 = state_31307__$1;
(statearr_31313_31445[(2)] = null);

(statearr_31313_31445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31308 === (7))){
var inst_31303 = (state_31307[(2)]);
var state_31307__$1 = state_31307;
var statearr_31314_31446 = state_31307__$1;
(statearr_31314_31446[(2)] = inst_31303);

(statearr_31314_31446[(1)] = (3));


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
});})(__31427,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
;
return ((function (__31427,switch__30992__auto__,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_31315 = [null,null,null,null,null,null,null];
(statearr_31315[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__);

(statearr_31315[(1)] = (1));

return statearr_31315;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1 = (function (state_31307){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31316){if((e31316 instanceof Object)){
var ex__30996__auto__ = e31316;
var statearr_31317_31447 = state_31307;
(statearr_31317_31447[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31316;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31448 = state_31307;
state_31307 = G__31448;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = function(state_31307){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1.call(this,state_31307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__;
})()
;})(__31427,switch__30992__auto__,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31318 = f__31088__auto__.call(null);
(statearr_31318[(6)] = c__31087__auto___31440);

return statearr_31318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(__31427,c__31087__auto___31440,G__31270_31428,G__31270_31429__$1,n__4518__auto___31426,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31270_31429__$1)].join('')));

}

var G__31449 = (__31427 + (1));
__31427 = G__31449;
continue;
} else {
}
break;
}

var c__31087__auto___31450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31450,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___31450,jobs,results,process,async){
return (function (state_31340){
var state_val_31341 = (state_31340[(1)]);
if((state_val_31341 === (1))){
var state_31340__$1 = state_31340;
var statearr_31342_31451 = state_31340__$1;
(statearr_31342_31451[(2)] = null);

(statearr_31342_31451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (2))){
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31340__$1,(4),from);
} else {
if((state_val_31341 === (3))){
var inst_31338 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31340__$1,inst_31338);
} else {
if((state_val_31341 === (4))){
var inst_31321 = (state_31340[(7)]);
var inst_31321__$1 = (state_31340[(2)]);
var inst_31322 = (inst_31321__$1 == null);
var state_31340__$1 = (function (){var statearr_31343 = state_31340;
(statearr_31343[(7)] = inst_31321__$1);

return statearr_31343;
})();
if(cljs.core.truth_(inst_31322)){
var statearr_31344_31452 = state_31340__$1;
(statearr_31344_31452[(1)] = (5));

} else {
var statearr_31345_31453 = state_31340__$1;
(statearr_31345_31453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (5))){
var inst_31324 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31340__$1 = state_31340;
var statearr_31346_31454 = state_31340__$1;
(statearr_31346_31454[(2)] = inst_31324);

(statearr_31346_31454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (6))){
var inst_31326 = (state_31340[(8)]);
var inst_31321 = (state_31340[(7)]);
var inst_31326__$1 = cljs.core.async.chan.call(null,(1));
var inst_31327 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31328 = [inst_31321,inst_31326__$1];
var inst_31329 = (new cljs.core.PersistentVector(null,2,(5),inst_31327,inst_31328,null));
var state_31340__$1 = (function (){var statearr_31347 = state_31340;
(statearr_31347[(8)] = inst_31326__$1);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31340__$1,(8),jobs,inst_31329);
} else {
if((state_val_31341 === (7))){
var inst_31336 = (state_31340[(2)]);
var state_31340__$1 = state_31340;
var statearr_31348_31455 = state_31340__$1;
(statearr_31348_31455[(2)] = inst_31336);

(statearr_31348_31455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31341 === (8))){
var inst_31326 = (state_31340[(8)]);
var inst_31331 = (state_31340[(2)]);
var state_31340__$1 = (function (){var statearr_31349 = state_31340;
(statearr_31349[(9)] = inst_31331);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31340__$1,(9),results,inst_31326);
} else {
if((state_val_31341 === (9))){
var inst_31333 = (state_31340[(2)]);
var state_31340__$1 = (function (){var statearr_31350 = state_31340;
(statearr_31350[(10)] = inst_31333);

return statearr_31350;
})();
var statearr_31351_31456 = state_31340__$1;
(statearr_31351_31456[(2)] = null);

(statearr_31351_31456[(1)] = (2));


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
});})(c__31087__auto___31450,jobs,results,process,async))
;
return ((function (switch__30992__auto__,c__31087__auto___31450,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_31352 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31352[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__);

(statearr_31352[(1)] = (1));

return statearr_31352;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1 = (function (state_31340){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31340);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31353){if((e31353 instanceof Object)){
var ex__30996__auto__ = e31353;
var statearr_31354_31457 = state_31340;
(statearr_31354_31457[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31340;
state_31340 = G__31458;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = function(state_31340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1.call(this,state_31340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___31450,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31355 = f__31088__auto__.call(null);
(statearr_31355[(6)] = c__31087__auto___31450);

return statearr_31355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31450,jobs,results,process,async))
);


var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,jobs,results,process,async){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto__,jobs,results,process,async){
return (function (state_31393){
var state_val_31394 = (state_31393[(1)]);
if((state_val_31394 === (7))){
var inst_31389 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31395_31459 = state_31393__$1;
(statearr_31395_31459[(2)] = inst_31389);

(statearr_31395_31459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (20))){
var state_31393__$1 = state_31393;
var statearr_31396_31460 = state_31393__$1;
(statearr_31396_31460[(2)] = null);

(statearr_31396_31460[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (1))){
var state_31393__$1 = state_31393;
var statearr_31397_31461 = state_31393__$1;
(statearr_31397_31461[(2)] = null);

(statearr_31397_31461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (4))){
var inst_31358 = (state_31393[(7)]);
var inst_31358__$1 = (state_31393[(2)]);
var inst_31359 = (inst_31358__$1 == null);
var state_31393__$1 = (function (){var statearr_31398 = state_31393;
(statearr_31398[(7)] = inst_31358__$1);

return statearr_31398;
})();
if(cljs.core.truth_(inst_31359)){
var statearr_31399_31462 = state_31393__$1;
(statearr_31399_31462[(1)] = (5));

} else {
var statearr_31400_31463 = state_31393__$1;
(statearr_31400_31463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (15))){
var inst_31371 = (state_31393[(8)]);
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31393__$1,(18),to,inst_31371);
} else {
if((state_val_31394 === (21))){
var inst_31384 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31401_31464 = state_31393__$1;
(statearr_31401_31464[(2)] = inst_31384);

(statearr_31401_31464[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (13))){
var inst_31386 = (state_31393[(2)]);
var state_31393__$1 = (function (){var statearr_31402 = state_31393;
(statearr_31402[(9)] = inst_31386);

return statearr_31402;
})();
var statearr_31403_31465 = state_31393__$1;
(statearr_31403_31465[(2)] = null);

(statearr_31403_31465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (6))){
var inst_31358 = (state_31393[(7)]);
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31393__$1,(11),inst_31358);
} else {
if((state_val_31394 === (17))){
var inst_31379 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
if(cljs.core.truth_(inst_31379)){
var statearr_31404_31466 = state_31393__$1;
(statearr_31404_31466[(1)] = (19));

} else {
var statearr_31405_31467 = state_31393__$1;
(statearr_31405_31467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (3))){
var inst_31391 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31393__$1,inst_31391);
} else {
if((state_val_31394 === (12))){
var inst_31368 = (state_31393[(10)]);
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31393__$1,(14),inst_31368);
} else {
if((state_val_31394 === (2))){
var state_31393__$1 = state_31393;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31393__$1,(4),results);
} else {
if((state_val_31394 === (19))){
var state_31393__$1 = state_31393;
var statearr_31406_31468 = state_31393__$1;
(statearr_31406_31468[(2)] = null);

(statearr_31406_31468[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (11))){
var inst_31368 = (state_31393[(2)]);
var state_31393__$1 = (function (){var statearr_31407 = state_31393;
(statearr_31407[(10)] = inst_31368);

return statearr_31407;
})();
var statearr_31408_31469 = state_31393__$1;
(statearr_31408_31469[(2)] = null);

(statearr_31408_31469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (9))){
var state_31393__$1 = state_31393;
var statearr_31409_31470 = state_31393__$1;
(statearr_31409_31470[(2)] = null);

(statearr_31409_31470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (5))){
var state_31393__$1 = state_31393;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31410_31471 = state_31393__$1;
(statearr_31410_31471[(1)] = (8));

} else {
var statearr_31411_31472 = state_31393__$1;
(statearr_31411_31472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (14))){
var inst_31373 = (state_31393[(11)]);
var inst_31371 = (state_31393[(8)]);
var inst_31371__$1 = (state_31393[(2)]);
var inst_31372 = (inst_31371__$1 == null);
var inst_31373__$1 = cljs.core.not.call(null,inst_31372);
var state_31393__$1 = (function (){var statearr_31412 = state_31393;
(statearr_31412[(11)] = inst_31373__$1);

(statearr_31412[(8)] = inst_31371__$1);

return statearr_31412;
})();
if(inst_31373__$1){
var statearr_31413_31473 = state_31393__$1;
(statearr_31413_31473[(1)] = (15));

} else {
var statearr_31414_31474 = state_31393__$1;
(statearr_31414_31474[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (16))){
var inst_31373 = (state_31393[(11)]);
var state_31393__$1 = state_31393;
var statearr_31415_31475 = state_31393__$1;
(statearr_31415_31475[(2)] = inst_31373);

(statearr_31415_31475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (10))){
var inst_31365 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31416_31476 = state_31393__$1;
(statearr_31416_31476[(2)] = inst_31365);

(statearr_31416_31476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (18))){
var inst_31376 = (state_31393[(2)]);
var state_31393__$1 = state_31393;
var statearr_31417_31477 = state_31393__$1;
(statearr_31417_31477[(2)] = inst_31376);

(statearr_31417_31477[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31394 === (8))){
var inst_31362 = cljs.core.async.close_BANG_.call(null,to);
var state_31393__$1 = state_31393;
var statearr_31418_31478 = state_31393__$1;
(statearr_31418_31478[(2)] = inst_31362);

(statearr_31418_31478[(1)] = (10));


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
});})(c__31087__auto__,jobs,results,process,async))
;
return ((function (switch__30992__auto__,c__31087__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_31419 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31419[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__);

(statearr_31419[(1)] = (1));

return statearr_31419;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1 = (function (state_31393){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31420){if((e31420 instanceof Object)){
var ex__30996__auto__ = e31420;
var statearr_31421_31479 = state_31393;
(statearr_31421_31479[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31480 = state_31393;
state_31393 = G__31480;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__ = function(state_31393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1.call(this,state_31393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto__,jobs,results,process,async))
})();
var state__31089__auto__ = (function (){var statearr_31422 = f__31088__auto__.call(null);
(statearr_31422[(6)] = c__31087__auto__);

return statearr_31422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,jobs,results,process,async))
);

return c__31087__auto__;
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
var G__31482 = arguments.length;
switch (G__31482) {
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
var G__31485 = arguments.length;
switch (G__31485) {
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
var G__31488 = arguments.length;
switch (G__31488) {
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
var c__31087__auto___31537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31537,tc,fc){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___31537,tc,fc){
return (function (state_31514){
var state_val_31515 = (state_31514[(1)]);
if((state_val_31515 === (7))){
var inst_31510 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31516_31538 = state_31514__$1;
(statearr_31516_31538[(2)] = inst_31510);

(statearr_31516_31538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (1))){
var state_31514__$1 = state_31514;
var statearr_31517_31539 = state_31514__$1;
(statearr_31517_31539[(2)] = null);

(statearr_31517_31539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (4))){
var inst_31491 = (state_31514[(7)]);
var inst_31491__$1 = (state_31514[(2)]);
var inst_31492 = (inst_31491__$1 == null);
var state_31514__$1 = (function (){var statearr_31518 = state_31514;
(statearr_31518[(7)] = inst_31491__$1);

return statearr_31518;
})();
if(cljs.core.truth_(inst_31492)){
var statearr_31519_31540 = state_31514__$1;
(statearr_31519_31540[(1)] = (5));

} else {
var statearr_31520_31541 = state_31514__$1;
(statearr_31520_31541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (13))){
var state_31514__$1 = state_31514;
var statearr_31521_31542 = state_31514__$1;
(statearr_31521_31542[(2)] = null);

(statearr_31521_31542[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (6))){
var inst_31491 = (state_31514[(7)]);
var inst_31497 = p.call(null,inst_31491);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31497)){
var statearr_31522_31543 = state_31514__$1;
(statearr_31522_31543[(1)] = (9));

} else {
var statearr_31523_31544 = state_31514__$1;
(statearr_31523_31544[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (3))){
var inst_31512 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31514__$1,inst_31512);
} else {
if((state_val_31515 === (12))){
var state_31514__$1 = state_31514;
var statearr_31524_31545 = state_31514__$1;
(statearr_31524_31545[(2)] = null);

(statearr_31524_31545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (2))){
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31514__$1,(4),ch);
} else {
if((state_val_31515 === (11))){
var inst_31491 = (state_31514[(7)]);
var inst_31501 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31514__$1,(8),inst_31501,inst_31491);
} else {
if((state_val_31515 === (9))){
var state_31514__$1 = state_31514;
var statearr_31525_31546 = state_31514__$1;
(statearr_31525_31546[(2)] = tc);

(statearr_31525_31546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (5))){
var inst_31494 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31495 = cljs.core.async.close_BANG_.call(null,fc);
var state_31514__$1 = (function (){var statearr_31526 = state_31514;
(statearr_31526[(8)] = inst_31494);

return statearr_31526;
})();
var statearr_31527_31547 = state_31514__$1;
(statearr_31527_31547[(2)] = inst_31495);

(statearr_31527_31547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (14))){
var inst_31508 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
var statearr_31528_31548 = state_31514__$1;
(statearr_31528_31548[(2)] = inst_31508);

(statearr_31528_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (10))){
var state_31514__$1 = state_31514;
var statearr_31529_31549 = state_31514__$1;
(statearr_31529_31549[(2)] = fc);

(statearr_31529_31549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31515 === (8))){
var inst_31503 = (state_31514[(2)]);
var state_31514__$1 = state_31514;
if(cljs.core.truth_(inst_31503)){
var statearr_31530_31550 = state_31514__$1;
(statearr_31530_31550[(1)] = (12));

} else {
var statearr_31531_31551 = state_31514__$1;
(statearr_31531_31551[(1)] = (13));

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
});})(c__31087__auto___31537,tc,fc))
;
return ((function (switch__30992__auto__,c__31087__auto___31537,tc,fc){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_31532 = [null,null,null,null,null,null,null,null,null];
(statearr_31532[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_31532[(1)] = (1));

return statearr_31532;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_31514){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31533){if((e31533 instanceof Object)){
var ex__30996__auto__ = e31533;
var statearr_31534_31552 = state_31514;
(statearr_31534_31552[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31553 = state_31514;
state_31514 = G__31553;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_31514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_31514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___31537,tc,fc))
})();
var state__31089__auto__ = (function (){var statearr_31535 = f__31088__auto__.call(null);
(statearr_31535[(6)] = c__31087__auto___31537);

return statearr_31535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31537,tc,fc))
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
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto__){
return (function (state_31574){
var state_val_31575 = (state_31574[(1)]);
if((state_val_31575 === (7))){
var inst_31570 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31576_31594 = state_31574__$1;
(statearr_31576_31594[(2)] = inst_31570);

(statearr_31576_31594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (1))){
var inst_31554 = init;
var state_31574__$1 = (function (){var statearr_31577 = state_31574;
(statearr_31577[(7)] = inst_31554);

return statearr_31577;
})();
var statearr_31578_31595 = state_31574__$1;
(statearr_31578_31595[(2)] = null);

(statearr_31578_31595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (4))){
var inst_31557 = (state_31574[(8)]);
var inst_31557__$1 = (state_31574[(2)]);
var inst_31558 = (inst_31557__$1 == null);
var state_31574__$1 = (function (){var statearr_31579 = state_31574;
(statearr_31579[(8)] = inst_31557__$1);

return statearr_31579;
})();
if(cljs.core.truth_(inst_31558)){
var statearr_31580_31596 = state_31574__$1;
(statearr_31580_31596[(1)] = (5));

} else {
var statearr_31581_31597 = state_31574__$1;
(statearr_31581_31597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (6))){
var inst_31557 = (state_31574[(8)]);
var inst_31561 = (state_31574[(9)]);
var inst_31554 = (state_31574[(7)]);
var inst_31561__$1 = f.call(null,inst_31554,inst_31557);
var inst_31562 = cljs.core.reduced_QMARK_.call(null,inst_31561__$1);
var state_31574__$1 = (function (){var statearr_31582 = state_31574;
(statearr_31582[(9)] = inst_31561__$1);

return statearr_31582;
})();
if(inst_31562){
var statearr_31583_31598 = state_31574__$1;
(statearr_31583_31598[(1)] = (8));

} else {
var statearr_31584_31599 = state_31574__$1;
(statearr_31584_31599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (3))){
var inst_31572 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31574__$1,inst_31572);
} else {
if((state_val_31575 === (2))){
var state_31574__$1 = state_31574;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31574__$1,(4),ch);
} else {
if((state_val_31575 === (9))){
var inst_31561 = (state_31574[(9)]);
var inst_31554 = inst_31561;
var state_31574__$1 = (function (){var statearr_31585 = state_31574;
(statearr_31585[(7)] = inst_31554);

return statearr_31585;
})();
var statearr_31586_31600 = state_31574__$1;
(statearr_31586_31600[(2)] = null);

(statearr_31586_31600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (5))){
var inst_31554 = (state_31574[(7)]);
var state_31574__$1 = state_31574;
var statearr_31587_31601 = state_31574__$1;
(statearr_31587_31601[(2)] = inst_31554);

(statearr_31587_31601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (10))){
var inst_31568 = (state_31574[(2)]);
var state_31574__$1 = state_31574;
var statearr_31588_31602 = state_31574__$1;
(statearr_31588_31602[(2)] = inst_31568);

(statearr_31588_31602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31575 === (8))){
var inst_31561 = (state_31574[(9)]);
var inst_31564 = cljs.core.deref.call(null,inst_31561);
var state_31574__$1 = state_31574;
var statearr_31589_31603 = state_31574__$1;
(statearr_31589_31603[(2)] = inst_31564);

(statearr_31589_31603[(1)] = (10));


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
});})(c__31087__auto__))
;
return ((function (switch__30992__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30993__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30993__auto____0 = (function (){
var statearr_31590 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31590[(0)] = cljs$core$async$reduce_$_state_machine__30993__auto__);

(statearr_31590[(1)] = (1));

return statearr_31590;
});
var cljs$core$async$reduce_$_state_machine__30993__auto____1 = (function (state_31574){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31574);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31591){if((e31591 instanceof Object)){
var ex__30996__auto__ = e31591;
var statearr_31592_31604 = state_31574;
(statearr_31592_31604[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31574);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31605 = state_31574;
state_31574 = G__31605;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30993__auto__ = function(state_31574){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30993__auto____1.call(this,state_31574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30993__auto____0;
cljs$core$async$reduce_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30993__auto____1;
return cljs$core$async$reduce_$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_31593 = f__31088__auto__.call(null);
(statearr_31593[(6)] = c__31087__auto__);

return statearr_31593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__,f__$1){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto__,f__$1){
return (function (state_31611){
var state_val_31612 = (state_31611[(1)]);
if((state_val_31612 === (1))){
var inst_31606 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31611__$1,(2),inst_31606);
} else {
if((state_val_31612 === (2))){
var inst_31608 = (state_31611[(2)]);
var inst_31609 = f__$1.call(null,inst_31608);
var state_31611__$1 = state_31611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31611__$1,inst_31609);
} else {
return null;
}
}
});})(c__31087__auto__,f__$1))
;
return ((function (switch__30992__auto__,c__31087__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30993__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30993__auto____0 = (function (){
var statearr_31613 = [null,null,null,null,null,null,null];
(statearr_31613[(0)] = cljs$core$async$transduce_$_state_machine__30993__auto__);

(statearr_31613[(1)] = (1));

return statearr_31613;
});
var cljs$core$async$transduce_$_state_machine__30993__auto____1 = (function (state_31611){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31614){if((e31614 instanceof Object)){
var ex__30996__auto__ = e31614;
var statearr_31615_31617 = state_31611;
(statearr_31615_31617[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31618 = state_31611;
state_31611 = G__31618;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30993__auto__ = function(state_31611){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30993__auto____1.call(this,state_31611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30993__auto____0;
cljs$core$async$transduce_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30993__auto____1;
return cljs$core$async$transduce_$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto__,f__$1))
})();
var state__31089__auto__ = (function (){var statearr_31616 = f__31088__auto__.call(null);
(statearr_31616[(6)] = c__31087__auto__);

return statearr_31616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__,f__$1))
);

return c__31087__auto__;
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
var G__31620 = arguments.length;
switch (G__31620) {
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
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto__){
return (function (state_31645){
var state_val_31646 = (state_31645[(1)]);
if((state_val_31646 === (7))){
var inst_31627 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31647_31668 = state_31645__$1;
(statearr_31647_31668[(2)] = inst_31627);

(statearr_31647_31668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (1))){
var inst_31621 = cljs.core.seq.call(null,coll);
var inst_31622 = inst_31621;
var state_31645__$1 = (function (){var statearr_31648 = state_31645;
(statearr_31648[(7)] = inst_31622);

return statearr_31648;
})();
var statearr_31649_31669 = state_31645__$1;
(statearr_31649_31669[(2)] = null);

(statearr_31649_31669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (4))){
var inst_31622 = (state_31645[(7)]);
var inst_31625 = cljs.core.first.call(null,inst_31622);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31645__$1,(7),ch,inst_31625);
} else {
if((state_val_31646 === (13))){
var inst_31639 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31650_31670 = state_31645__$1;
(statearr_31650_31670[(2)] = inst_31639);

(statearr_31650_31670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (6))){
var inst_31630 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31630)){
var statearr_31651_31671 = state_31645__$1;
(statearr_31651_31671[(1)] = (8));

} else {
var statearr_31652_31672 = state_31645__$1;
(statearr_31652_31672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (3))){
var inst_31643 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31645__$1,inst_31643);
} else {
if((state_val_31646 === (12))){
var state_31645__$1 = state_31645;
var statearr_31653_31673 = state_31645__$1;
(statearr_31653_31673[(2)] = null);

(statearr_31653_31673[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (2))){
var inst_31622 = (state_31645[(7)]);
var state_31645__$1 = state_31645;
if(cljs.core.truth_(inst_31622)){
var statearr_31654_31674 = state_31645__$1;
(statearr_31654_31674[(1)] = (4));

} else {
var statearr_31655_31675 = state_31645__$1;
(statearr_31655_31675[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (11))){
var inst_31636 = cljs.core.async.close_BANG_.call(null,ch);
var state_31645__$1 = state_31645;
var statearr_31656_31676 = state_31645__$1;
(statearr_31656_31676[(2)] = inst_31636);

(statearr_31656_31676[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (9))){
var state_31645__$1 = state_31645;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31657_31677 = state_31645__$1;
(statearr_31657_31677[(1)] = (11));

} else {
var statearr_31658_31678 = state_31645__$1;
(statearr_31658_31678[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (5))){
var inst_31622 = (state_31645[(7)]);
var state_31645__$1 = state_31645;
var statearr_31659_31679 = state_31645__$1;
(statearr_31659_31679[(2)] = inst_31622);

(statearr_31659_31679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (10))){
var inst_31641 = (state_31645[(2)]);
var state_31645__$1 = state_31645;
var statearr_31660_31680 = state_31645__$1;
(statearr_31660_31680[(2)] = inst_31641);

(statearr_31660_31680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31646 === (8))){
var inst_31622 = (state_31645[(7)]);
var inst_31632 = cljs.core.next.call(null,inst_31622);
var inst_31622__$1 = inst_31632;
var state_31645__$1 = (function (){var statearr_31661 = state_31645;
(statearr_31661[(7)] = inst_31622__$1);

return statearr_31661;
})();
var statearr_31662_31681 = state_31645__$1;
(statearr_31662_31681[(2)] = null);

(statearr_31662_31681[(1)] = (2));


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
});})(c__31087__auto__))
;
return ((function (switch__30992__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_31663 = [null,null,null,null,null,null,null,null];
(statearr_31663[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_31663[(1)] = (1));

return statearr_31663;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_31645){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31664){if((e31664 instanceof Object)){
var ex__30996__auto__ = e31664;
var statearr_31665_31682 = state_31645;
(statearr_31665_31682[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31664;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31683 = state_31645;
state_31645 = G__31683;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_31645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_31645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_31666 = f__31088__auto__.call(null);
(statearr_31666[(6)] = c__31087__auto__);

return statearr_31666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31684 = (function (ch,cs,meta31685){
this.ch = ch;
this.cs = cs;
this.meta31685 = meta31685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31686,meta31685__$1){
var self__ = this;
var _31686__$1 = this;
return (new cljs.core.async.t_cljs$core$async31684(self__.ch,self__.cs,meta31685__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31686){
var self__ = this;
var _31686__$1 = this;
return self__.meta31685;
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31685","meta31685",-418085579,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31684";

cljs.core.async.t_cljs$core$async31684.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31684");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31684.
 */
cljs.core.async.__GT_t_cljs$core$async31684 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31684(ch__$1,cs__$1,meta31685){
return (new cljs.core.async.t_cljs$core$async31684(ch__$1,cs__$1,meta31685));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31684(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__31087__auto___31906 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___31906,cs,m,dchan,dctr,done){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___31906,cs,m,dchan,dctr,done){
return (function (state_31821){
var state_val_31822 = (state_31821[(1)]);
if((state_val_31822 === (7))){
var inst_31817 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31823_31907 = state_31821__$1;
(statearr_31823_31907[(2)] = inst_31817);

(statearr_31823_31907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (20))){
var inst_31720 = (state_31821[(7)]);
var inst_31732 = cljs.core.first.call(null,inst_31720);
var inst_31733 = cljs.core.nth.call(null,inst_31732,(0),null);
var inst_31734 = cljs.core.nth.call(null,inst_31732,(1),null);
var state_31821__$1 = (function (){var statearr_31824 = state_31821;
(statearr_31824[(8)] = inst_31733);

return statearr_31824;
})();
if(cljs.core.truth_(inst_31734)){
var statearr_31825_31908 = state_31821__$1;
(statearr_31825_31908[(1)] = (22));

} else {
var statearr_31826_31909 = state_31821__$1;
(statearr_31826_31909[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (27))){
var inst_31764 = (state_31821[(9)]);
var inst_31689 = (state_31821[(10)]);
var inst_31769 = (state_31821[(11)]);
var inst_31762 = (state_31821[(12)]);
var inst_31769__$1 = cljs.core._nth.call(null,inst_31762,inst_31764);
var inst_31770 = cljs.core.async.put_BANG_.call(null,inst_31769__$1,inst_31689,done);
var state_31821__$1 = (function (){var statearr_31827 = state_31821;
(statearr_31827[(11)] = inst_31769__$1);

return statearr_31827;
})();
if(cljs.core.truth_(inst_31770)){
var statearr_31828_31910 = state_31821__$1;
(statearr_31828_31910[(1)] = (30));

} else {
var statearr_31829_31911 = state_31821__$1;
(statearr_31829_31911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (1))){
var state_31821__$1 = state_31821;
var statearr_31830_31912 = state_31821__$1;
(statearr_31830_31912[(2)] = null);

(statearr_31830_31912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (24))){
var inst_31720 = (state_31821[(7)]);
var inst_31739 = (state_31821[(2)]);
var inst_31740 = cljs.core.next.call(null,inst_31720);
var inst_31698 = inst_31740;
var inst_31699 = null;
var inst_31700 = (0);
var inst_31701 = (0);
var state_31821__$1 = (function (){var statearr_31831 = state_31821;
(statearr_31831[(13)] = inst_31699);

(statearr_31831[(14)] = inst_31700);

(statearr_31831[(15)] = inst_31698);

(statearr_31831[(16)] = inst_31739);

(statearr_31831[(17)] = inst_31701);

return statearr_31831;
})();
var statearr_31832_31913 = state_31821__$1;
(statearr_31832_31913[(2)] = null);

(statearr_31832_31913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (39))){
var state_31821__$1 = state_31821;
var statearr_31836_31914 = state_31821__$1;
(statearr_31836_31914[(2)] = null);

(statearr_31836_31914[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (4))){
var inst_31689 = (state_31821[(10)]);
var inst_31689__$1 = (state_31821[(2)]);
var inst_31690 = (inst_31689__$1 == null);
var state_31821__$1 = (function (){var statearr_31837 = state_31821;
(statearr_31837[(10)] = inst_31689__$1);

return statearr_31837;
})();
if(cljs.core.truth_(inst_31690)){
var statearr_31838_31915 = state_31821__$1;
(statearr_31838_31915[(1)] = (5));

} else {
var statearr_31839_31916 = state_31821__$1;
(statearr_31839_31916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (15))){
var inst_31699 = (state_31821[(13)]);
var inst_31700 = (state_31821[(14)]);
var inst_31698 = (state_31821[(15)]);
var inst_31701 = (state_31821[(17)]);
var inst_31716 = (state_31821[(2)]);
var inst_31717 = (inst_31701 + (1));
var tmp31833 = inst_31699;
var tmp31834 = inst_31700;
var tmp31835 = inst_31698;
var inst_31698__$1 = tmp31835;
var inst_31699__$1 = tmp31833;
var inst_31700__$1 = tmp31834;
var inst_31701__$1 = inst_31717;
var state_31821__$1 = (function (){var statearr_31840 = state_31821;
(statearr_31840[(13)] = inst_31699__$1);

(statearr_31840[(14)] = inst_31700__$1);

(statearr_31840[(18)] = inst_31716);

(statearr_31840[(15)] = inst_31698__$1);

(statearr_31840[(17)] = inst_31701__$1);

return statearr_31840;
})();
var statearr_31841_31917 = state_31821__$1;
(statearr_31841_31917[(2)] = null);

(statearr_31841_31917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (21))){
var inst_31743 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31845_31918 = state_31821__$1;
(statearr_31845_31918[(2)] = inst_31743);

(statearr_31845_31918[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (31))){
var inst_31769 = (state_31821[(11)]);
var inst_31773 = done.call(null,null);
var inst_31774 = cljs.core.async.untap_STAR_.call(null,m,inst_31769);
var state_31821__$1 = (function (){var statearr_31846 = state_31821;
(statearr_31846[(19)] = inst_31773);

return statearr_31846;
})();
var statearr_31847_31919 = state_31821__$1;
(statearr_31847_31919[(2)] = inst_31774);

(statearr_31847_31919[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (32))){
var inst_31761 = (state_31821[(20)]);
var inst_31764 = (state_31821[(9)]);
var inst_31763 = (state_31821[(21)]);
var inst_31762 = (state_31821[(12)]);
var inst_31776 = (state_31821[(2)]);
var inst_31777 = (inst_31764 + (1));
var tmp31842 = inst_31761;
var tmp31843 = inst_31763;
var tmp31844 = inst_31762;
var inst_31761__$1 = tmp31842;
var inst_31762__$1 = tmp31844;
var inst_31763__$1 = tmp31843;
var inst_31764__$1 = inst_31777;
var state_31821__$1 = (function (){var statearr_31848 = state_31821;
(statearr_31848[(20)] = inst_31761__$1);

(statearr_31848[(9)] = inst_31764__$1);

(statearr_31848[(21)] = inst_31763__$1);

(statearr_31848[(12)] = inst_31762__$1);

(statearr_31848[(22)] = inst_31776);

return statearr_31848;
})();
var statearr_31849_31920 = state_31821__$1;
(statearr_31849_31920[(2)] = null);

(statearr_31849_31920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (40))){
var inst_31789 = (state_31821[(23)]);
var inst_31793 = done.call(null,null);
var inst_31794 = cljs.core.async.untap_STAR_.call(null,m,inst_31789);
var state_31821__$1 = (function (){var statearr_31850 = state_31821;
(statearr_31850[(24)] = inst_31793);

return statearr_31850;
})();
var statearr_31851_31921 = state_31821__$1;
(statearr_31851_31921[(2)] = inst_31794);

(statearr_31851_31921[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (33))){
var inst_31780 = (state_31821[(25)]);
var inst_31782 = cljs.core.chunked_seq_QMARK_.call(null,inst_31780);
var state_31821__$1 = state_31821;
if(inst_31782){
var statearr_31852_31922 = state_31821__$1;
(statearr_31852_31922[(1)] = (36));

} else {
var statearr_31853_31923 = state_31821__$1;
(statearr_31853_31923[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (13))){
var inst_31710 = (state_31821[(26)]);
var inst_31713 = cljs.core.async.close_BANG_.call(null,inst_31710);
var state_31821__$1 = state_31821;
var statearr_31854_31924 = state_31821__$1;
(statearr_31854_31924[(2)] = inst_31713);

(statearr_31854_31924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (22))){
var inst_31733 = (state_31821[(8)]);
var inst_31736 = cljs.core.async.close_BANG_.call(null,inst_31733);
var state_31821__$1 = state_31821;
var statearr_31855_31925 = state_31821__$1;
(statearr_31855_31925[(2)] = inst_31736);

(statearr_31855_31925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (36))){
var inst_31780 = (state_31821[(25)]);
var inst_31784 = cljs.core.chunk_first.call(null,inst_31780);
var inst_31785 = cljs.core.chunk_rest.call(null,inst_31780);
var inst_31786 = cljs.core.count.call(null,inst_31784);
var inst_31761 = inst_31785;
var inst_31762 = inst_31784;
var inst_31763 = inst_31786;
var inst_31764 = (0);
var state_31821__$1 = (function (){var statearr_31856 = state_31821;
(statearr_31856[(20)] = inst_31761);

(statearr_31856[(9)] = inst_31764);

(statearr_31856[(21)] = inst_31763);

(statearr_31856[(12)] = inst_31762);

return statearr_31856;
})();
var statearr_31857_31926 = state_31821__$1;
(statearr_31857_31926[(2)] = null);

(statearr_31857_31926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (41))){
var inst_31780 = (state_31821[(25)]);
var inst_31796 = (state_31821[(2)]);
var inst_31797 = cljs.core.next.call(null,inst_31780);
var inst_31761 = inst_31797;
var inst_31762 = null;
var inst_31763 = (0);
var inst_31764 = (0);
var state_31821__$1 = (function (){var statearr_31858 = state_31821;
(statearr_31858[(20)] = inst_31761);

(statearr_31858[(9)] = inst_31764);

(statearr_31858[(21)] = inst_31763);

(statearr_31858[(12)] = inst_31762);

(statearr_31858[(27)] = inst_31796);

return statearr_31858;
})();
var statearr_31859_31927 = state_31821__$1;
(statearr_31859_31927[(2)] = null);

(statearr_31859_31927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (43))){
var state_31821__$1 = state_31821;
var statearr_31860_31928 = state_31821__$1;
(statearr_31860_31928[(2)] = null);

(statearr_31860_31928[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (29))){
var inst_31805 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31861_31929 = state_31821__$1;
(statearr_31861_31929[(2)] = inst_31805);

(statearr_31861_31929[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (44))){
var inst_31814 = (state_31821[(2)]);
var state_31821__$1 = (function (){var statearr_31862 = state_31821;
(statearr_31862[(28)] = inst_31814);

return statearr_31862;
})();
var statearr_31863_31930 = state_31821__$1;
(statearr_31863_31930[(2)] = null);

(statearr_31863_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (6))){
var inst_31753 = (state_31821[(29)]);
var inst_31752 = cljs.core.deref.call(null,cs);
var inst_31753__$1 = cljs.core.keys.call(null,inst_31752);
var inst_31754 = cljs.core.count.call(null,inst_31753__$1);
var inst_31755 = cljs.core.reset_BANG_.call(null,dctr,inst_31754);
var inst_31760 = cljs.core.seq.call(null,inst_31753__$1);
var inst_31761 = inst_31760;
var inst_31762 = null;
var inst_31763 = (0);
var inst_31764 = (0);
var state_31821__$1 = (function (){var statearr_31864 = state_31821;
(statearr_31864[(20)] = inst_31761);

(statearr_31864[(30)] = inst_31755);

(statearr_31864[(9)] = inst_31764);

(statearr_31864[(21)] = inst_31763);

(statearr_31864[(12)] = inst_31762);

(statearr_31864[(29)] = inst_31753__$1);

return statearr_31864;
})();
var statearr_31865_31931 = state_31821__$1;
(statearr_31865_31931[(2)] = null);

(statearr_31865_31931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (28))){
var inst_31761 = (state_31821[(20)]);
var inst_31780 = (state_31821[(25)]);
var inst_31780__$1 = cljs.core.seq.call(null,inst_31761);
var state_31821__$1 = (function (){var statearr_31866 = state_31821;
(statearr_31866[(25)] = inst_31780__$1);

return statearr_31866;
})();
if(inst_31780__$1){
var statearr_31867_31932 = state_31821__$1;
(statearr_31867_31932[(1)] = (33));

} else {
var statearr_31868_31933 = state_31821__$1;
(statearr_31868_31933[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (25))){
var inst_31764 = (state_31821[(9)]);
var inst_31763 = (state_31821[(21)]);
var inst_31766 = (inst_31764 < inst_31763);
var inst_31767 = inst_31766;
var state_31821__$1 = state_31821;
if(cljs.core.truth_(inst_31767)){
var statearr_31869_31934 = state_31821__$1;
(statearr_31869_31934[(1)] = (27));

} else {
var statearr_31870_31935 = state_31821__$1;
(statearr_31870_31935[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (34))){
var state_31821__$1 = state_31821;
var statearr_31871_31936 = state_31821__$1;
(statearr_31871_31936[(2)] = null);

(statearr_31871_31936[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (17))){
var state_31821__$1 = state_31821;
var statearr_31872_31937 = state_31821__$1;
(statearr_31872_31937[(2)] = null);

(statearr_31872_31937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (3))){
var inst_31819 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31821__$1,inst_31819);
} else {
if((state_val_31822 === (12))){
var inst_31748 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31873_31938 = state_31821__$1;
(statearr_31873_31938[(2)] = inst_31748);

(statearr_31873_31938[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (2))){
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31821__$1,(4),ch);
} else {
if((state_val_31822 === (23))){
var state_31821__$1 = state_31821;
var statearr_31874_31939 = state_31821__$1;
(statearr_31874_31939[(2)] = null);

(statearr_31874_31939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (35))){
var inst_31803 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31875_31940 = state_31821__$1;
(statearr_31875_31940[(2)] = inst_31803);

(statearr_31875_31940[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (19))){
var inst_31720 = (state_31821[(7)]);
var inst_31724 = cljs.core.chunk_first.call(null,inst_31720);
var inst_31725 = cljs.core.chunk_rest.call(null,inst_31720);
var inst_31726 = cljs.core.count.call(null,inst_31724);
var inst_31698 = inst_31725;
var inst_31699 = inst_31724;
var inst_31700 = inst_31726;
var inst_31701 = (0);
var state_31821__$1 = (function (){var statearr_31876 = state_31821;
(statearr_31876[(13)] = inst_31699);

(statearr_31876[(14)] = inst_31700);

(statearr_31876[(15)] = inst_31698);

(statearr_31876[(17)] = inst_31701);

return statearr_31876;
})();
var statearr_31877_31941 = state_31821__$1;
(statearr_31877_31941[(2)] = null);

(statearr_31877_31941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (11))){
var inst_31720 = (state_31821[(7)]);
var inst_31698 = (state_31821[(15)]);
var inst_31720__$1 = cljs.core.seq.call(null,inst_31698);
var state_31821__$1 = (function (){var statearr_31878 = state_31821;
(statearr_31878[(7)] = inst_31720__$1);

return statearr_31878;
})();
if(inst_31720__$1){
var statearr_31879_31942 = state_31821__$1;
(statearr_31879_31942[(1)] = (16));

} else {
var statearr_31880_31943 = state_31821__$1;
(statearr_31880_31943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (9))){
var inst_31750 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31881_31944 = state_31821__$1;
(statearr_31881_31944[(2)] = inst_31750);

(statearr_31881_31944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (5))){
var inst_31696 = cljs.core.deref.call(null,cs);
var inst_31697 = cljs.core.seq.call(null,inst_31696);
var inst_31698 = inst_31697;
var inst_31699 = null;
var inst_31700 = (0);
var inst_31701 = (0);
var state_31821__$1 = (function (){var statearr_31882 = state_31821;
(statearr_31882[(13)] = inst_31699);

(statearr_31882[(14)] = inst_31700);

(statearr_31882[(15)] = inst_31698);

(statearr_31882[(17)] = inst_31701);

return statearr_31882;
})();
var statearr_31883_31945 = state_31821__$1;
(statearr_31883_31945[(2)] = null);

(statearr_31883_31945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (14))){
var state_31821__$1 = state_31821;
var statearr_31884_31946 = state_31821__$1;
(statearr_31884_31946[(2)] = null);

(statearr_31884_31946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (45))){
var inst_31811 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31885_31947 = state_31821__$1;
(statearr_31885_31947[(2)] = inst_31811);

(statearr_31885_31947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (26))){
var inst_31753 = (state_31821[(29)]);
var inst_31807 = (state_31821[(2)]);
var inst_31808 = cljs.core.seq.call(null,inst_31753);
var state_31821__$1 = (function (){var statearr_31886 = state_31821;
(statearr_31886[(31)] = inst_31807);

return statearr_31886;
})();
if(inst_31808){
var statearr_31887_31948 = state_31821__$1;
(statearr_31887_31948[(1)] = (42));

} else {
var statearr_31888_31949 = state_31821__$1;
(statearr_31888_31949[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (16))){
var inst_31720 = (state_31821[(7)]);
var inst_31722 = cljs.core.chunked_seq_QMARK_.call(null,inst_31720);
var state_31821__$1 = state_31821;
if(inst_31722){
var statearr_31889_31950 = state_31821__$1;
(statearr_31889_31950[(1)] = (19));

} else {
var statearr_31890_31951 = state_31821__$1;
(statearr_31890_31951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (38))){
var inst_31800 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31891_31952 = state_31821__$1;
(statearr_31891_31952[(2)] = inst_31800);

(statearr_31891_31952[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (30))){
var state_31821__$1 = state_31821;
var statearr_31892_31953 = state_31821__$1;
(statearr_31892_31953[(2)] = null);

(statearr_31892_31953[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (10))){
var inst_31699 = (state_31821[(13)]);
var inst_31701 = (state_31821[(17)]);
var inst_31709 = cljs.core._nth.call(null,inst_31699,inst_31701);
var inst_31710 = cljs.core.nth.call(null,inst_31709,(0),null);
var inst_31711 = cljs.core.nth.call(null,inst_31709,(1),null);
var state_31821__$1 = (function (){var statearr_31893 = state_31821;
(statearr_31893[(26)] = inst_31710);

return statearr_31893;
})();
if(cljs.core.truth_(inst_31711)){
var statearr_31894_31954 = state_31821__$1;
(statearr_31894_31954[(1)] = (13));

} else {
var statearr_31895_31955 = state_31821__$1;
(statearr_31895_31955[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (18))){
var inst_31746 = (state_31821[(2)]);
var state_31821__$1 = state_31821;
var statearr_31896_31956 = state_31821__$1;
(statearr_31896_31956[(2)] = inst_31746);

(statearr_31896_31956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (42))){
var state_31821__$1 = state_31821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31821__$1,(45),dchan);
} else {
if((state_val_31822 === (37))){
var inst_31789 = (state_31821[(23)]);
var inst_31689 = (state_31821[(10)]);
var inst_31780 = (state_31821[(25)]);
var inst_31789__$1 = cljs.core.first.call(null,inst_31780);
var inst_31790 = cljs.core.async.put_BANG_.call(null,inst_31789__$1,inst_31689,done);
var state_31821__$1 = (function (){var statearr_31897 = state_31821;
(statearr_31897[(23)] = inst_31789__$1);

return statearr_31897;
})();
if(cljs.core.truth_(inst_31790)){
var statearr_31898_31957 = state_31821__$1;
(statearr_31898_31957[(1)] = (39));

} else {
var statearr_31899_31958 = state_31821__$1;
(statearr_31899_31958[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31822 === (8))){
var inst_31700 = (state_31821[(14)]);
var inst_31701 = (state_31821[(17)]);
var inst_31703 = (inst_31701 < inst_31700);
var inst_31704 = inst_31703;
var state_31821__$1 = state_31821;
if(cljs.core.truth_(inst_31704)){
var statearr_31900_31959 = state_31821__$1;
(statearr_31900_31959[(1)] = (10));

} else {
var statearr_31901_31960 = state_31821__$1;
(statearr_31901_31960[(1)] = (11));

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
});})(c__31087__auto___31906,cs,m,dchan,dctr,done))
;
return ((function (switch__30992__auto__,c__31087__auto___31906,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30993__auto__ = null;
var cljs$core$async$mult_$_state_machine__30993__auto____0 = (function (){
var statearr_31902 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31902[(0)] = cljs$core$async$mult_$_state_machine__30993__auto__);

(statearr_31902[(1)] = (1));

return statearr_31902;
});
var cljs$core$async$mult_$_state_machine__30993__auto____1 = (function (state_31821){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_31821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e31903){if((e31903 instanceof Object)){
var ex__30996__auto__ = e31903;
var statearr_31904_31961 = state_31821;
(statearr_31904_31961[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31962 = state_31821;
state_31821 = G__31962;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30993__auto__ = function(state_31821){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30993__auto____1.call(this,state_31821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30993__auto____0;
cljs$core$async$mult_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30993__auto____1;
return cljs$core$async$mult_$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___31906,cs,m,dchan,dctr,done))
})();
var state__31089__auto__ = (function (){var statearr_31905 = f__31088__auto__.call(null);
(statearr_31905[(6)] = c__31087__auto___31906);

return statearr_31905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___31906,cs,m,dchan,dctr,done))
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
var G__31964 = arguments.length;
switch (G__31964) {
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
var len__4641__auto___31976 = arguments.length;
var i__4642__auto___31977 = (0);
while(true){
if((i__4642__auto___31977 < len__4641__auto___31976)){
args__4647__auto__.push((arguments[i__4642__auto___31977]));

var G__31978 = (i__4642__auto___31977 + (1));
i__4642__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31970){
var map__31971 = p__31970;
var map__31971__$1 = (((((!((map__31971 == null))))?(((((map__31971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31971):map__31971);
var opts = map__31971__$1;
var statearr_31973_31979 = state;
(statearr_31973_31979[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__31971,map__31971__$1,opts){
return (function (val){
var statearr_31974_31980 = state;
(statearr_31974_31980[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31971,map__31971__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_31975_31981 = state;
(statearr_31975_31981[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31966){
var G__31967 = cljs.core.first.call(null,seq31966);
var seq31966__$1 = cljs.core.next.call(null,seq31966);
var G__31968 = cljs.core.first.call(null,seq31966__$1);
var seq31966__$2 = cljs.core.next.call(null,seq31966__$1);
var G__31969 = cljs.core.first.call(null,seq31966__$2);
var seq31966__$3 = cljs.core.next.call(null,seq31966__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31967,G__31968,G__31969,seq31966__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31982 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31982 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31983){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31983 = meta31983;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31984,meta31983__$1){
var self__ = this;
var _31984__$1 = this;
return (new cljs.core.async.t_cljs$core$async31982(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31983__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31984){
var self__ = this;
var _31984__$1 = this;
return self__.meta31983;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31982.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31983","meta31983",-1747079396,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31982.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31982.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31982";

cljs.core.async.t_cljs$core$async31982.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async31982");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31982.
 */
cljs.core.async.__GT_t_cljs$core$async31982 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31982(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31983){
return (new cljs.core.async.t_cljs$core$async31982(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31983));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31982(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31087__auto___32146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32086){
var state_val_32087 = (state_32086[(1)]);
if((state_val_32087 === (7))){
var inst_32001 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32088_32147 = state_32086__$1;
(statearr_32088_32147[(2)] = inst_32001);

(statearr_32088_32147[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (20))){
var inst_32013 = (state_32086[(7)]);
var state_32086__$1 = state_32086;
var statearr_32089_32148 = state_32086__$1;
(statearr_32089_32148[(2)] = inst_32013);

(statearr_32089_32148[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (27))){
var state_32086__$1 = state_32086;
var statearr_32090_32149 = state_32086__$1;
(statearr_32090_32149[(2)] = null);

(statearr_32090_32149[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (1))){
var inst_31988 = (state_32086[(8)]);
var inst_31988__$1 = calc_state.call(null);
var inst_31990 = (inst_31988__$1 == null);
var inst_31991 = cljs.core.not.call(null,inst_31990);
var state_32086__$1 = (function (){var statearr_32091 = state_32086;
(statearr_32091[(8)] = inst_31988__$1);

return statearr_32091;
})();
if(inst_31991){
var statearr_32092_32150 = state_32086__$1;
(statearr_32092_32150[(1)] = (2));

} else {
var statearr_32093_32151 = state_32086__$1;
(statearr_32093_32151[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (24))){
var inst_32046 = (state_32086[(9)]);
var inst_32037 = (state_32086[(10)]);
var inst_32060 = (state_32086[(11)]);
var inst_32060__$1 = inst_32037.call(null,inst_32046);
var state_32086__$1 = (function (){var statearr_32094 = state_32086;
(statearr_32094[(11)] = inst_32060__$1);

return statearr_32094;
})();
if(cljs.core.truth_(inst_32060__$1)){
var statearr_32095_32152 = state_32086__$1;
(statearr_32095_32152[(1)] = (29));

} else {
var statearr_32096_32153 = state_32086__$1;
(statearr_32096_32153[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (4))){
var inst_32004 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32004)){
var statearr_32097_32154 = state_32086__$1;
(statearr_32097_32154[(1)] = (8));

} else {
var statearr_32098_32155 = state_32086__$1;
(statearr_32098_32155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (15))){
var inst_32031 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32031)){
var statearr_32099_32156 = state_32086__$1;
(statearr_32099_32156[(1)] = (19));

} else {
var statearr_32100_32157 = state_32086__$1;
(statearr_32100_32157[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (21))){
var inst_32036 = (state_32086[(12)]);
var inst_32036__$1 = (state_32086[(2)]);
var inst_32037 = cljs.core.get.call(null,inst_32036__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32038 = cljs.core.get.call(null,inst_32036__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32039 = cljs.core.get.call(null,inst_32036__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32086__$1 = (function (){var statearr_32101 = state_32086;
(statearr_32101[(12)] = inst_32036__$1);

(statearr_32101[(13)] = inst_32038);

(statearr_32101[(10)] = inst_32037);

return statearr_32101;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32086__$1,(22),inst_32039);
} else {
if((state_val_32087 === (31))){
var inst_32068 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32068)){
var statearr_32102_32158 = state_32086__$1;
(statearr_32102_32158[(1)] = (32));

} else {
var statearr_32103_32159 = state_32086__$1;
(statearr_32103_32159[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (32))){
var inst_32045 = (state_32086[(14)]);
var state_32086__$1 = state_32086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32086__$1,(35),out,inst_32045);
} else {
if((state_val_32087 === (33))){
var inst_32036 = (state_32086[(12)]);
var inst_32013 = inst_32036;
var state_32086__$1 = (function (){var statearr_32104 = state_32086;
(statearr_32104[(7)] = inst_32013);

return statearr_32104;
})();
var statearr_32105_32160 = state_32086__$1;
(statearr_32105_32160[(2)] = null);

(statearr_32105_32160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (13))){
var inst_32013 = (state_32086[(7)]);
var inst_32020 = inst_32013.cljs$lang$protocol_mask$partition0$;
var inst_32021 = (inst_32020 & (64));
var inst_32022 = inst_32013.cljs$core$ISeq$;
var inst_32023 = (cljs.core.PROTOCOL_SENTINEL === inst_32022);
var inst_32024 = ((inst_32021) || (inst_32023));
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32024)){
var statearr_32106_32161 = state_32086__$1;
(statearr_32106_32161[(1)] = (16));

} else {
var statearr_32107_32162 = state_32086__$1;
(statearr_32107_32162[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (22))){
var inst_32046 = (state_32086[(9)]);
var inst_32045 = (state_32086[(14)]);
var inst_32044 = (state_32086[(2)]);
var inst_32045__$1 = cljs.core.nth.call(null,inst_32044,(0),null);
var inst_32046__$1 = cljs.core.nth.call(null,inst_32044,(1),null);
var inst_32047 = (inst_32045__$1 == null);
var inst_32048 = cljs.core._EQ_.call(null,inst_32046__$1,change);
var inst_32049 = ((inst_32047) || (inst_32048));
var state_32086__$1 = (function (){var statearr_32108 = state_32086;
(statearr_32108[(9)] = inst_32046__$1);

(statearr_32108[(14)] = inst_32045__$1);

return statearr_32108;
})();
if(cljs.core.truth_(inst_32049)){
var statearr_32109_32163 = state_32086__$1;
(statearr_32109_32163[(1)] = (23));

} else {
var statearr_32110_32164 = state_32086__$1;
(statearr_32110_32164[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (36))){
var inst_32036 = (state_32086[(12)]);
var inst_32013 = inst_32036;
var state_32086__$1 = (function (){var statearr_32111 = state_32086;
(statearr_32111[(7)] = inst_32013);

return statearr_32111;
})();
var statearr_32112_32165 = state_32086__$1;
(statearr_32112_32165[(2)] = null);

(statearr_32112_32165[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (29))){
var inst_32060 = (state_32086[(11)]);
var state_32086__$1 = state_32086;
var statearr_32113_32166 = state_32086__$1;
(statearr_32113_32166[(2)] = inst_32060);

(statearr_32113_32166[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (6))){
var state_32086__$1 = state_32086;
var statearr_32114_32167 = state_32086__$1;
(statearr_32114_32167[(2)] = false);

(statearr_32114_32167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (28))){
var inst_32056 = (state_32086[(2)]);
var inst_32057 = calc_state.call(null);
var inst_32013 = inst_32057;
var state_32086__$1 = (function (){var statearr_32115 = state_32086;
(statearr_32115[(15)] = inst_32056);

(statearr_32115[(7)] = inst_32013);

return statearr_32115;
})();
var statearr_32116_32168 = state_32086__$1;
(statearr_32116_32168[(2)] = null);

(statearr_32116_32168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (25))){
var inst_32082 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32117_32169 = state_32086__$1;
(statearr_32117_32169[(2)] = inst_32082);

(statearr_32117_32169[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (34))){
var inst_32080 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32118_32170 = state_32086__$1;
(statearr_32118_32170[(2)] = inst_32080);

(statearr_32118_32170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (17))){
var state_32086__$1 = state_32086;
var statearr_32119_32171 = state_32086__$1;
(statearr_32119_32171[(2)] = false);

(statearr_32119_32171[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (3))){
var state_32086__$1 = state_32086;
var statearr_32120_32172 = state_32086__$1;
(statearr_32120_32172[(2)] = false);

(statearr_32120_32172[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (12))){
var inst_32084 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32086__$1,inst_32084);
} else {
if((state_val_32087 === (2))){
var inst_31988 = (state_32086[(8)]);
var inst_31993 = inst_31988.cljs$lang$protocol_mask$partition0$;
var inst_31994 = (inst_31993 & (64));
var inst_31995 = inst_31988.cljs$core$ISeq$;
var inst_31996 = (cljs.core.PROTOCOL_SENTINEL === inst_31995);
var inst_31997 = ((inst_31994) || (inst_31996));
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_31997)){
var statearr_32121_32173 = state_32086__$1;
(statearr_32121_32173[(1)] = (5));

} else {
var statearr_32122_32174 = state_32086__$1;
(statearr_32122_32174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (23))){
var inst_32045 = (state_32086[(14)]);
var inst_32051 = (inst_32045 == null);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32051)){
var statearr_32123_32175 = state_32086__$1;
(statearr_32123_32175[(1)] = (26));

} else {
var statearr_32124_32176 = state_32086__$1;
(statearr_32124_32176[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (35))){
var inst_32071 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
if(cljs.core.truth_(inst_32071)){
var statearr_32125_32177 = state_32086__$1;
(statearr_32125_32177[(1)] = (36));

} else {
var statearr_32126_32178 = state_32086__$1;
(statearr_32126_32178[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (19))){
var inst_32013 = (state_32086[(7)]);
var inst_32033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32013);
var state_32086__$1 = state_32086;
var statearr_32127_32179 = state_32086__$1;
(statearr_32127_32179[(2)] = inst_32033);

(statearr_32127_32179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (11))){
var inst_32013 = (state_32086[(7)]);
var inst_32017 = (inst_32013 == null);
var inst_32018 = cljs.core.not.call(null,inst_32017);
var state_32086__$1 = state_32086;
if(inst_32018){
var statearr_32128_32180 = state_32086__$1;
(statearr_32128_32180[(1)] = (13));

} else {
var statearr_32129_32181 = state_32086__$1;
(statearr_32129_32181[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (9))){
var inst_31988 = (state_32086[(8)]);
var state_32086__$1 = state_32086;
var statearr_32130_32182 = state_32086__$1;
(statearr_32130_32182[(2)] = inst_31988);

(statearr_32130_32182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (5))){
var state_32086__$1 = state_32086;
var statearr_32131_32183 = state_32086__$1;
(statearr_32131_32183[(2)] = true);

(statearr_32131_32183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (14))){
var state_32086__$1 = state_32086;
var statearr_32132_32184 = state_32086__$1;
(statearr_32132_32184[(2)] = false);

(statearr_32132_32184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (26))){
var inst_32046 = (state_32086[(9)]);
var inst_32053 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32046);
var state_32086__$1 = state_32086;
var statearr_32133_32185 = state_32086__$1;
(statearr_32133_32185[(2)] = inst_32053);

(statearr_32133_32185[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (16))){
var state_32086__$1 = state_32086;
var statearr_32134_32186 = state_32086__$1;
(statearr_32134_32186[(2)] = true);

(statearr_32134_32186[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (38))){
var inst_32076 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32135_32187 = state_32086__$1;
(statearr_32135_32187[(2)] = inst_32076);

(statearr_32135_32187[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (30))){
var inst_32038 = (state_32086[(13)]);
var inst_32046 = (state_32086[(9)]);
var inst_32037 = (state_32086[(10)]);
var inst_32063 = cljs.core.empty_QMARK_.call(null,inst_32037);
var inst_32064 = inst_32038.call(null,inst_32046);
var inst_32065 = cljs.core.not.call(null,inst_32064);
var inst_32066 = ((inst_32063) && (inst_32065));
var state_32086__$1 = state_32086;
var statearr_32136_32188 = state_32086__$1;
(statearr_32136_32188[(2)] = inst_32066);

(statearr_32136_32188[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (10))){
var inst_31988 = (state_32086[(8)]);
var inst_32009 = (state_32086[(2)]);
var inst_32010 = cljs.core.get.call(null,inst_32009,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32011 = cljs.core.get.call(null,inst_32009,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32012 = cljs.core.get.call(null,inst_32009,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32013 = inst_31988;
var state_32086__$1 = (function (){var statearr_32137 = state_32086;
(statearr_32137[(16)] = inst_32011);

(statearr_32137[(17)] = inst_32012);

(statearr_32137[(7)] = inst_32013);

(statearr_32137[(18)] = inst_32010);

return statearr_32137;
})();
var statearr_32138_32189 = state_32086__$1;
(statearr_32138_32189[(2)] = null);

(statearr_32138_32189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (18))){
var inst_32028 = (state_32086[(2)]);
var state_32086__$1 = state_32086;
var statearr_32139_32190 = state_32086__$1;
(statearr_32139_32190[(2)] = inst_32028);

(statearr_32139_32190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (37))){
var state_32086__$1 = state_32086;
var statearr_32140_32191 = state_32086__$1;
(statearr_32140_32191[(2)] = null);

(statearr_32140_32191[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32087 === (8))){
var inst_31988 = (state_32086[(8)]);
var inst_32006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31988);
var state_32086__$1 = state_32086;
var statearr_32141_32192 = state_32086__$1;
(statearr_32141_32192[(2)] = inst_32006);

(statearr_32141_32192[(1)] = (10));


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
});})(c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30992__auto__,c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30993__auto__ = null;
var cljs$core$async$mix_$_state_machine__30993__auto____0 = (function (){
var statearr_32142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32142[(0)] = cljs$core$async$mix_$_state_machine__30993__auto__);

(statearr_32142[(1)] = (1));

return statearr_32142;
});
var cljs$core$async$mix_$_state_machine__30993__auto____1 = (function (state_32086){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32143){if((e32143 instanceof Object)){
var ex__30996__auto__ = e32143;
var statearr_32144_32193 = state_32086;
(statearr_32144_32193[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32194 = state_32086;
state_32086 = G__32194;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30993__auto__ = function(state_32086){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30993__auto____1.call(this,state_32086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30993__auto____0;
cljs$core$async$mix_$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30993__auto____1;
return cljs$core$async$mix_$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31089__auto__ = (function (){var statearr_32145 = f__31088__auto__.call(null);
(statearr_32145[(6)] = c__31087__auto___32146);

return statearr_32145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32146,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__32196 = arguments.length;
switch (G__32196) {
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
var G__32200 = arguments.length;
switch (G__32200) {
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
return (function (p1__32198_SHARP_){
if(cljs.core.truth_(p1__32198_SHARP_.call(null,topic))){
return p1__32198_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32198_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32201 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32201 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32202){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32202 = meta32202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32203,meta32202__$1){
var self__ = this;
var _32203__$1 = this;
return (new cljs.core.async.t_cljs$core$async32201(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32202__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32203){
var self__ = this;
var _32203__$1 = this;
return self__.meta32202;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32202","meta32202",571478245,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32201";

cljs.core.async.t_cljs$core$async32201.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32201");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32201.
 */
cljs.core.async.__GT_t_cljs$core$async32201 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32201(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32202){
return (new cljs.core.async.t_cljs$core$async32201(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32202));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32201(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31087__auto___32321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32321,mults,ensure_mult,p){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32321,mults,ensure_mult,p){
return (function (state_32275){
var state_val_32276 = (state_32275[(1)]);
if((state_val_32276 === (7))){
var inst_32271 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32277_32322 = state_32275__$1;
(statearr_32277_32322[(2)] = inst_32271);

(statearr_32277_32322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (20))){
var state_32275__$1 = state_32275;
var statearr_32278_32323 = state_32275__$1;
(statearr_32278_32323[(2)] = null);

(statearr_32278_32323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (1))){
var state_32275__$1 = state_32275;
var statearr_32279_32324 = state_32275__$1;
(statearr_32279_32324[(2)] = null);

(statearr_32279_32324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (24))){
var inst_32254 = (state_32275[(7)]);
var inst_32263 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32254);
var state_32275__$1 = state_32275;
var statearr_32280_32325 = state_32275__$1;
(statearr_32280_32325[(2)] = inst_32263);

(statearr_32280_32325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (4))){
var inst_32206 = (state_32275[(8)]);
var inst_32206__$1 = (state_32275[(2)]);
var inst_32207 = (inst_32206__$1 == null);
var state_32275__$1 = (function (){var statearr_32281 = state_32275;
(statearr_32281[(8)] = inst_32206__$1);

return statearr_32281;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32282_32326 = state_32275__$1;
(statearr_32282_32326[(1)] = (5));

} else {
var statearr_32283_32327 = state_32275__$1;
(statearr_32283_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (15))){
var inst_32248 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32284_32328 = state_32275__$1;
(statearr_32284_32328[(2)] = inst_32248);

(statearr_32284_32328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (21))){
var inst_32268 = (state_32275[(2)]);
var state_32275__$1 = (function (){var statearr_32285 = state_32275;
(statearr_32285[(9)] = inst_32268);

return statearr_32285;
})();
var statearr_32286_32329 = state_32275__$1;
(statearr_32286_32329[(2)] = null);

(statearr_32286_32329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (13))){
var inst_32230 = (state_32275[(10)]);
var inst_32232 = cljs.core.chunked_seq_QMARK_.call(null,inst_32230);
var state_32275__$1 = state_32275;
if(inst_32232){
var statearr_32287_32330 = state_32275__$1;
(statearr_32287_32330[(1)] = (16));

} else {
var statearr_32288_32331 = state_32275__$1;
(statearr_32288_32331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (22))){
var inst_32260 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32260)){
var statearr_32289_32332 = state_32275__$1;
(statearr_32289_32332[(1)] = (23));

} else {
var statearr_32290_32333 = state_32275__$1;
(statearr_32290_32333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (6))){
var inst_32206 = (state_32275[(8)]);
var inst_32256 = (state_32275[(11)]);
var inst_32254 = (state_32275[(7)]);
var inst_32254__$1 = topic_fn.call(null,inst_32206);
var inst_32255 = cljs.core.deref.call(null,mults);
var inst_32256__$1 = cljs.core.get.call(null,inst_32255,inst_32254__$1);
var state_32275__$1 = (function (){var statearr_32291 = state_32275;
(statearr_32291[(11)] = inst_32256__$1);

(statearr_32291[(7)] = inst_32254__$1);

return statearr_32291;
})();
if(cljs.core.truth_(inst_32256__$1)){
var statearr_32292_32334 = state_32275__$1;
(statearr_32292_32334[(1)] = (19));

} else {
var statearr_32293_32335 = state_32275__$1;
(statearr_32293_32335[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (25))){
var inst_32265 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32294_32336 = state_32275__$1;
(statearr_32294_32336[(2)] = inst_32265);

(statearr_32294_32336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (17))){
var inst_32230 = (state_32275[(10)]);
var inst_32239 = cljs.core.first.call(null,inst_32230);
var inst_32240 = cljs.core.async.muxch_STAR_.call(null,inst_32239);
var inst_32241 = cljs.core.async.close_BANG_.call(null,inst_32240);
var inst_32242 = cljs.core.next.call(null,inst_32230);
var inst_32216 = inst_32242;
var inst_32217 = null;
var inst_32218 = (0);
var inst_32219 = (0);
var state_32275__$1 = (function (){var statearr_32295 = state_32275;
(statearr_32295[(12)] = inst_32216);

(statearr_32295[(13)] = inst_32217);

(statearr_32295[(14)] = inst_32218);

(statearr_32295[(15)] = inst_32219);

(statearr_32295[(16)] = inst_32241);

return statearr_32295;
})();
var statearr_32296_32337 = state_32275__$1;
(statearr_32296_32337[(2)] = null);

(statearr_32296_32337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (3))){
var inst_32273 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32275__$1,inst_32273);
} else {
if((state_val_32276 === (12))){
var inst_32250 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32297_32338 = state_32275__$1;
(statearr_32297_32338[(2)] = inst_32250);

(statearr_32297_32338[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (2))){
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32275__$1,(4),ch);
} else {
if((state_val_32276 === (23))){
var state_32275__$1 = state_32275;
var statearr_32298_32339 = state_32275__$1;
(statearr_32298_32339[(2)] = null);

(statearr_32298_32339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (19))){
var inst_32206 = (state_32275[(8)]);
var inst_32256 = (state_32275[(11)]);
var inst_32258 = cljs.core.async.muxch_STAR_.call(null,inst_32256);
var state_32275__$1 = state_32275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32275__$1,(22),inst_32258,inst_32206);
} else {
if((state_val_32276 === (11))){
var inst_32216 = (state_32275[(12)]);
var inst_32230 = (state_32275[(10)]);
var inst_32230__$1 = cljs.core.seq.call(null,inst_32216);
var state_32275__$1 = (function (){var statearr_32299 = state_32275;
(statearr_32299[(10)] = inst_32230__$1);

return statearr_32299;
})();
if(inst_32230__$1){
var statearr_32300_32340 = state_32275__$1;
(statearr_32300_32340[(1)] = (13));

} else {
var statearr_32301_32341 = state_32275__$1;
(statearr_32301_32341[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (9))){
var inst_32252 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32302_32342 = state_32275__$1;
(statearr_32302_32342[(2)] = inst_32252);

(statearr_32302_32342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (5))){
var inst_32213 = cljs.core.deref.call(null,mults);
var inst_32214 = cljs.core.vals.call(null,inst_32213);
var inst_32215 = cljs.core.seq.call(null,inst_32214);
var inst_32216 = inst_32215;
var inst_32217 = null;
var inst_32218 = (0);
var inst_32219 = (0);
var state_32275__$1 = (function (){var statearr_32303 = state_32275;
(statearr_32303[(12)] = inst_32216);

(statearr_32303[(13)] = inst_32217);

(statearr_32303[(14)] = inst_32218);

(statearr_32303[(15)] = inst_32219);

return statearr_32303;
})();
var statearr_32304_32343 = state_32275__$1;
(statearr_32304_32343[(2)] = null);

(statearr_32304_32343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (14))){
var state_32275__$1 = state_32275;
var statearr_32308_32344 = state_32275__$1;
(statearr_32308_32344[(2)] = null);

(statearr_32308_32344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (16))){
var inst_32230 = (state_32275[(10)]);
var inst_32234 = cljs.core.chunk_first.call(null,inst_32230);
var inst_32235 = cljs.core.chunk_rest.call(null,inst_32230);
var inst_32236 = cljs.core.count.call(null,inst_32234);
var inst_32216 = inst_32235;
var inst_32217 = inst_32234;
var inst_32218 = inst_32236;
var inst_32219 = (0);
var state_32275__$1 = (function (){var statearr_32309 = state_32275;
(statearr_32309[(12)] = inst_32216);

(statearr_32309[(13)] = inst_32217);

(statearr_32309[(14)] = inst_32218);

(statearr_32309[(15)] = inst_32219);

return statearr_32309;
})();
var statearr_32310_32345 = state_32275__$1;
(statearr_32310_32345[(2)] = null);

(statearr_32310_32345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (10))){
var inst_32216 = (state_32275[(12)]);
var inst_32217 = (state_32275[(13)]);
var inst_32218 = (state_32275[(14)]);
var inst_32219 = (state_32275[(15)]);
var inst_32224 = cljs.core._nth.call(null,inst_32217,inst_32219);
var inst_32225 = cljs.core.async.muxch_STAR_.call(null,inst_32224);
var inst_32226 = cljs.core.async.close_BANG_.call(null,inst_32225);
var inst_32227 = (inst_32219 + (1));
var tmp32305 = inst_32216;
var tmp32306 = inst_32217;
var tmp32307 = inst_32218;
var inst_32216__$1 = tmp32305;
var inst_32217__$1 = tmp32306;
var inst_32218__$1 = tmp32307;
var inst_32219__$1 = inst_32227;
var state_32275__$1 = (function (){var statearr_32311 = state_32275;
(statearr_32311[(12)] = inst_32216__$1);

(statearr_32311[(13)] = inst_32217__$1);

(statearr_32311[(17)] = inst_32226);

(statearr_32311[(14)] = inst_32218__$1);

(statearr_32311[(15)] = inst_32219__$1);

return statearr_32311;
})();
var statearr_32312_32346 = state_32275__$1;
(statearr_32312_32346[(2)] = null);

(statearr_32312_32346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (18))){
var inst_32245 = (state_32275[(2)]);
var state_32275__$1 = state_32275;
var statearr_32313_32347 = state_32275__$1;
(statearr_32313_32347[(2)] = inst_32245);

(statearr_32313_32347[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32276 === (8))){
var inst_32218 = (state_32275[(14)]);
var inst_32219 = (state_32275[(15)]);
var inst_32221 = (inst_32219 < inst_32218);
var inst_32222 = inst_32221;
var state_32275__$1 = state_32275;
if(cljs.core.truth_(inst_32222)){
var statearr_32314_32348 = state_32275__$1;
(statearr_32314_32348[(1)] = (10));

} else {
var statearr_32315_32349 = state_32275__$1;
(statearr_32315_32349[(1)] = (11));

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
});})(c__31087__auto___32321,mults,ensure_mult,p))
;
return ((function (switch__30992__auto__,c__31087__auto___32321,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32316[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32316[(1)] = (1));

return statearr_32316;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32275){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32317){if((e32317 instanceof Object)){
var ex__30996__auto__ = e32317;
var statearr_32318_32350 = state_32275;
(statearr_32318_32350[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32351 = state_32275;
state_32275 = G__32351;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32321,mults,ensure_mult,p))
})();
var state__31089__auto__ = (function (){var statearr_32319 = f__31088__auto__.call(null);
(statearr_32319[(6)] = c__31087__auto___32321);

return statearr_32319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32321,mults,ensure_mult,p))
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
var G__32353 = arguments.length;
switch (G__32353) {
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
var G__32356 = arguments.length;
switch (G__32356) {
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
var G__32359 = arguments.length;
switch (G__32359) {
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
var c__31087__auto___32426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32398){
var state_val_32399 = (state_32398[(1)]);
if((state_val_32399 === (7))){
var state_32398__$1 = state_32398;
var statearr_32400_32427 = state_32398__$1;
(statearr_32400_32427[(2)] = null);

(statearr_32400_32427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (1))){
var state_32398__$1 = state_32398;
var statearr_32401_32428 = state_32398__$1;
(statearr_32401_32428[(2)] = null);

(statearr_32401_32428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (4))){
var inst_32362 = (state_32398[(7)]);
var inst_32364 = (inst_32362 < cnt);
var state_32398__$1 = state_32398;
if(cljs.core.truth_(inst_32364)){
var statearr_32402_32429 = state_32398__$1;
(statearr_32402_32429[(1)] = (6));

} else {
var statearr_32403_32430 = state_32398__$1;
(statearr_32403_32430[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (15))){
var inst_32394 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
var statearr_32404_32431 = state_32398__$1;
(statearr_32404_32431[(2)] = inst_32394);

(statearr_32404_32431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (13))){
var inst_32387 = cljs.core.async.close_BANG_.call(null,out);
var state_32398__$1 = state_32398;
var statearr_32405_32432 = state_32398__$1;
(statearr_32405_32432[(2)] = inst_32387);

(statearr_32405_32432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (6))){
var state_32398__$1 = state_32398;
var statearr_32406_32433 = state_32398__$1;
(statearr_32406_32433[(2)] = null);

(statearr_32406_32433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (3))){
var inst_32396 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32398__$1,inst_32396);
} else {
if((state_val_32399 === (12))){
var inst_32384 = (state_32398[(8)]);
var inst_32384__$1 = (state_32398[(2)]);
var inst_32385 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32384__$1);
var state_32398__$1 = (function (){var statearr_32407 = state_32398;
(statearr_32407[(8)] = inst_32384__$1);

return statearr_32407;
})();
if(cljs.core.truth_(inst_32385)){
var statearr_32408_32434 = state_32398__$1;
(statearr_32408_32434[(1)] = (13));

} else {
var statearr_32409_32435 = state_32398__$1;
(statearr_32409_32435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (2))){
var inst_32361 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32362 = (0);
var state_32398__$1 = (function (){var statearr_32410 = state_32398;
(statearr_32410[(9)] = inst_32361);

(statearr_32410[(7)] = inst_32362);

return statearr_32410;
})();
var statearr_32411_32436 = state_32398__$1;
(statearr_32411_32436[(2)] = null);

(statearr_32411_32436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (11))){
var inst_32362 = (state_32398[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32398,(10),Object,null,(9));
var inst_32371 = chs__$1.call(null,inst_32362);
var inst_32372 = done.call(null,inst_32362);
var inst_32373 = cljs.core.async.take_BANG_.call(null,inst_32371,inst_32372);
var state_32398__$1 = state_32398;
var statearr_32412_32437 = state_32398__$1;
(statearr_32412_32437[(2)] = inst_32373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (9))){
var inst_32362 = (state_32398[(7)]);
var inst_32375 = (state_32398[(2)]);
var inst_32376 = (inst_32362 + (1));
var inst_32362__$1 = inst_32376;
var state_32398__$1 = (function (){var statearr_32413 = state_32398;
(statearr_32413[(10)] = inst_32375);

(statearr_32413[(7)] = inst_32362__$1);

return statearr_32413;
})();
var statearr_32414_32438 = state_32398__$1;
(statearr_32414_32438[(2)] = null);

(statearr_32414_32438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (5))){
var inst_32382 = (state_32398[(2)]);
var state_32398__$1 = (function (){var statearr_32415 = state_32398;
(statearr_32415[(11)] = inst_32382);

return statearr_32415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32398__$1,(12),dchan);
} else {
if((state_val_32399 === (14))){
var inst_32384 = (state_32398[(8)]);
var inst_32389 = cljs.core.apply.call(null,f,inst_32384);
var state_32398__$1 = state_32398;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32398__$1,(16),out,inst_32389);
} else {
if((state_val_32399 === (16))){
var inst_32391 = (state_32398[(2)]);
var state_32398__$1 = (function (){var statearr_32416 = state_32398;
(statearr_32416[(12)] = inst_32391);

return statearr_32416;
})();
var statearr_32417_32439 = state_32398__$1;
(statearr_32417_32439[(2)] = null);

(statearr_32417_32439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (10))){
var inst_32366 = (state_32398[(2)]);
var inst_32367 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32398__$1 = (function (){var statearr_32418 = state_32398;
(statearr_32418[(13)] = inst_32366);

return statearr_32418;
})();
var statearr_32419_32440 = state_32398__$1;
(statearr_32419_32440[(2)] = inst_32367);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32399 === (8))){
var inst_32380 = (state_32398[(2)]);
var state_32398__$1 = state_32398;
var statearr_32420_32441 = state_32398__$1;
(statearr_32420_32441[(2)] = inst_32380);

(statearr_32420_32441[(1)] = (5));


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
});})(c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30992__auto__,c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32421[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32421[(1)] = (1));

return statearr_32421;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32398){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32422){if((e32422 instanceof Object)){
var ex__30996__auto__ = e32422;
var statearr_32423_32442 = state_32398;
(statearr_32423_32442[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32443 = state_32398;
state_32398 = G__32443;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32398){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31089__auto__ = (function (){var statearr_32424 = f__31088__auto__.call(null);
(statearr_32424[(6)] = c__31087__auto___32426);

return statearr_32424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32426,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32446 = arguments.length;
switch (G__32446) {
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
var c__31087__auto___32500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32500,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32500,out){
return (function (state_32478){
var state_val_32479 = (state_32478[(1)]);
if((state_val_32479 === (7))){
var inst_32458 = (state_32478[(7)]);
var inst_32457 = (state_32478[(8)]);
var inst_32457__$1 = (state_32478[(2)]);
var inst_32458__$1 = cljs.core.nth.call(null,inst_32457__$1,(0),null);
var inst_32459 = cljs.core.nth.call(null,inst_32457__$1,(1),null);
var inst_32460 = (inst_32458__$1 == null);
var state_32478__$1 = (function (){var statearr_32480 = state_32478;
(statearr_32480[(7)] = inst_32458__$1);

(statearr_32480[(9)] = inst_32459);

(statearr_32480[(8)] = inst_32457__$1);

return statearr_32480;
})();
if(cljs.core.truth_(inst_32460)){
var statearr_32481_32501 = state_32478__$1;
(statearr_32481_32501[(1)] = (8));

} else {
var statearr_32482_32502 = state_32478__$1;
(statearr_32482_32502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (1))){
var inst_32447 = cljs.core.vec.call(null,chs);
var inst_32448 = inst_32447;
var state_32478__$1 = (function (){var statearr_32483 = state_32478;
(statearr_32483[(10)] = inst_32448);

return statearr_32483;
})();
var statearr_32484_32503 = state_32478__$1;
(statearr_32484_32503[(2)] = null);

(statearr_32484_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (4))){
var inst_32448 = (state_32478[(10)]);
var state_32478__$1 = state_32478;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32478__$1,(7),inst_32448);
} else {
if((state_val_32479 === (6))){
var inst_32474 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32485_32504 = state_32478__$1;
(statearr_32485_32504[(2)] = inst_32474);

(statearr_32485_32504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (3))){
var inst_32476 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32478__$1,inst_32476);
} else {
if((state_val_32479 === (2))){
var inst_32448 = (state_32478[(10)]);
var inst_32450 = cljs.core.count.call(null,inst_32448);
var inst_32451 = (inst_32450 > (0));
var state_32478__$1 = state_32478;
if(cljs.core.truth_(inst_32451)){
var statearr_32487_32505 = state_32478__$1;
(statearr_32487_32505[(1)] = (4));

} else {
var statearr_32488_32506 = state_32478__$1;
(statearr_32488_32506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (11))){
var inst_32448 = (state_32478[(10)]);
var inst_32467 = (state_32478[(2)]);
var tmp32486 = inst_32448;
var inst_32448__$1 = tmp32486;
var state_32478__$1 = (function (){var statearr_32489 = state_32478;
(statearr_32489[(10)] = inst_32448__$1);

(statearr_32489[(11)] = inst_32467);

return statearr_32489;
})();
var statearr_32490_32507 = state_32478__$1;
(statearr_32490_32507[(2)] = null);

(statearr_32490_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (9))){
var inst_32458 = (state_32478[(7)]);
var state_32478__$1 = state_32478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32478__$1,(11),out,inst_32458);
} else {
if((state_val_32479 === (5))){
var inst_32472 = cljs.core.async.close_BANG_.call(null,out);
var state_32478__$1 = state_32478;
var statearr_32491_32508 = state_32478__$1;
(statearr_32491_32508[(2)] = inst_32472);

(statearr_32491_32508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (10))){
var inst_32470 = (state_32478[(2)]);
var state_32478__$1 = state_32478;
var statearr_32492_32509 = state_32478__$1;
(statearr_32492_32509[(2)] = inst_32470);

(statearr_32492_32509[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32479 === (8))){
var inst_32458 = (state_32478[(7)]);
var inst_32459 = (state_32478[(9)]);
var inst_32448 = (state_32478[(10)]);
var inst_32457 = (state_32478[(8)]);
var inst_32462 = (function (){var cs = inst_32448;
var vec__32453 = inst_32457;
var v = inst_32458;
var c = inst_32459;
return ((function (cs,vec__32453,v,c,inst_32458,inst_32459,inst_32448,inst_32457,state_val_32479,c__31087__auto___32500,out){
return (function (p1__32444_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32444_SHARP_);
});
;})(cs,vec__32453,v,c,inst_32458,inst_32459,inst_32448,inst_32457,state_val_32479,c__31087__auto___32500,out))
})();
var inst_32463 = cljs.core.filterv.call(null,inst_32462,inst_32448);
var inst_32448__$1 = inst_32463;
var state_32478__$1 = (function (){var statearr_32493 = state_32478;
(statearr_32493[(10)] = inst_32448__$1);

return statearr_32493;
})();
var statearr_32494_32510 = state_32478__$1;
(statearr_32494_32510[(2)] = null);

(statearr_32494_32510[(1)] = (2));


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
});})(c__31087__auto___32500,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32500,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32495 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32495[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32495[(1)] = (1));

return statearr_32495;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32478){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32496){if((e32496 instanceof Object)){
var ex__30996__auto__ = e32496;
var statearr_32497_32511 = state_32478;
(statearr_32497_32511[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32496;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32512 = state_32478;
state_32478 = G__32512;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32500,out))
})();
var state__31089__auto__ = (function (){var statearr_32498 = f__31088__auto__.call(null);
(statearr_32498[(6)] = c__31087__auto___32500);

return statearr_32498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32500,out))
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
var G__32514 = arguments.length;
switch (G__32514) {
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
var c__31087__auto___32559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32559,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32559,out){
return (function (state_32538){
var state_val_32539 = (state_32538[(1)]);
if((state_val_32539 === (7))){
var inst_32520 = (state_32538[(7)]);
var inst_32520__$1 = (state_32538[(2)]);
var inst_32521 = (inst_32520__$1 == null);
var inst_32522 = cljs.core.not.call(null,inst_32521);
var state_32538__$1 = (function (){var statearr_32540 = state_32538;
(statearr_32540[(7)] = inst_32520__$1);

return statearr_32540;
})();
if(inst_32522){
var statearr_32541_32560 = state_32538__$1;
(statearr_32541_32560[(1)] = (8));

} else {
var statearr_32542_32561 = state_32538__$1;
(statearr_32542_32561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (1))){
var inst_32515 = (0);
var state_32538__$1 = (function (){var statearr_32543 = state_32538;
(statearr_32543[(8)] = inst_32515);

return statearr_32543;
})();
var statearr_32544_32562 = state_32538__$1;
(statearr_32544_32562[(2)] = null);

(statearr_32544_32562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (4))){
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32538__$1,(7),ch);
} else {
if((state_val_32539 === (6))){
var inst_32533 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32545_32563 = state_32538__$1;
(statearr_32545_32563[(2)] = inst_32533);

(statearr_32545_32563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (3))){
var inst_32535 = (state_32538[(2)]);
var inst_32536 = cljs.core.async.close_BANG_.call(null,out);
var state_32538__$1 = (function (){var statearr_32546 = state_32538;
(statearr_32546[(9)] = inst_32535);

return statearr_32546;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32538__$1,inst_32536);
} else {
if((state_val_32539 === (2))){
var inst_32515 = (state_32538[(8)]);
var inst_32517 = (inst_32515 < n);
var state_32538__$1 = state_32538;
if(cljs.core.truth_(inst_32517)){
var statearr_32547_32564 = state_32538__$1;
(statearr_32547_32564[(1)] = (4));

} else {
var statearr_32548_32565 = state_32538__$1;
(statearr_32548_32565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (11))){
var inst_32515 = (state_32538[(8)]);
var inst_32525 = (state_32538[(2)]);
var inst_32526 = (inst_32515 + (1));
var inst_32515__$1 = inst_32526;
var state_32538__$1 = (function (){var statearr_32549 = state_32538;
(statearr_32549[(8)] = inst_32515__$1);

(statearr_32549[(10)] = inst_32525);

return statearr_32549;
})();
var statearr_32550_32566 = state_32538__$1;
(statearr_32550_32566[(2)] = null);

(statearr_32550_32566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (9))){
var state_32538__$1 = state_32538;
var statearr_32551_32567 = state_32538__$1;
(statearr_32551_32567[(2)] = null);

(statearr_32551_32567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (5))){
var state_32538__$1 = state_32538;
var statearr_32552_32568 = state_32538__$1;
(statearr_32552_32568[(2)] = null);

(statearr_32552_32568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (10))){
var inst_32530 = (state_32538[(2)]);
var state_32538__$1 = state_32538;
var statearr_32553_32569 = state_32538__$1;
(statearr_32553_32569[(2)] = inst_32530);

(statearr_32553_32569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32539 === (8))){
var inst_32520 = (state_32538[(7)]);
var state_32538__$1 = state_32538;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32538__$1,(11),out,inst_32520);
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
});})(c__31087__auto___32559,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32559,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32538){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32538);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32555){if((e32555 instanceof Object)){
var ex__30996__auto__ = e32555;
var statearr_32556_32570 = state_32538;
(statearr_32556_32570[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32571 = state_32538;
state_32538 = G__32571;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32559,out))
})();
var state__31089__auto__ = (function (){var statearr_32557 = f__31088__auto__.call(null);
(statearr_32557[(6)] = c__31087__auto___32559);

return statearr_32557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32559,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32573 = (function (f,ch,meta32574){
this.f = f;
this.ch = ch;
this.meta32574 = meta32574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32575,meta32574__$1){
var self__ = this;
var _32575__$1 = this;
return (new cljs.core.async.t_cljs$core$async32573(self__.f,self__.ch,meta32574__$1));
});

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32575){
var self__ = this;
var _32575__$1 = this;
return self__.meta32574;
});

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32576 = (function (f,ch,meta32574,_,fn1,meta32577){
this.f = f;
this.ch = ch;
this.meta32574 = meta32574;
this._ = _;
this.fn1 = fn1;
this.meta32577 = meta32577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32578,meta32577__$1){
var self__ = this;
var _32578__$1 = this;
return (new cljs.core.async.t_cljs$core$async32576(self__.f,self__.ch,self__.meta32574,self__._,self__.fn1,meta32577__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32578){
var self__ = this;
var _32578__$1 = this;
return self__.meta32577;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32572_SHARP_){
return f1.call(null,(((p1__32572_SHARP_ == null))?null:self__.f.call(null,p1__32572_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32574","meta32574",1708100369,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32573","cljs.core.async/t_cljs$core$async32573",2053234649,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32577","meta32577",-1616872274,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32576.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32576";

cljs.core.async.t_cljs$core$async32576.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32576");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32576.
 */
cljs.core.async.__GT_t_cljs$core$async32576 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32576(f__$1,ch__$1,meta32574__$1,___$2,fn1__$1,meta32577){
return (new cljs.core.async.t_cljs$core$async32576(f__$1,ch__$1,meta32574__$1,___$2,fn1__$1,meta32577));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32576(self__.f,self__.ch,self__.meta32574,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32573.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32574","meta32574",1708100369,null)], null);
});

cljs.core.async.t_cljs$core$async32573.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32573.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32573";

cljs.core.async.t_cljs$core$async32573.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32573");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32573.
 */
cljs.core.async.__GT_t_cljs$core$async32573 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32573(f__$1,ch__$1,meta32574){
return (new cljs.core.async.t_cljs$core$async32573(f__$1,ch__$1,meta32574));
});

}

return (new cljs.core.async.t_cljs$core$async32573(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32579 = (function (f,ch,meta32580){
this.f = f;
this.ch = ch;
this.meta32580 = meta32580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32581,meta32580__$1){
var self__ = this;
var _32581__$1 = this;
return (new cljs.core.async.t_cljs$core$async32579(self__.f,self__.ch,meta32580__$1));
});

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32581){
var self__ = this;
var _32581__$1 = this;
return self__.meta32580;
});

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32580","meta32580",1394726077,null)], null);
});

cljs.core.async.t_cljs$core$async32579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32579";

cljs.core.async.t_cljs$core$async32579.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32579");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32579.
 */
cljs.core.async.__GT_t_cljs$core$async32579 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32579(f__$1,ch__$1,meta32580){
return (new cljs.core.async.t_cljs$core$async32579(f__$1,ch__$1,meta32580));
});

}

return (new cljs.core.async.t_cljs$core$async32579(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32582 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32582 = (function (p,ch,meta32583){
this.p = p;
this.ch = ch;
this.meta32583 = meta32583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32584,meta32583__$1){
var self__ = this;
var _32584__$1 = this;
return (new cljs.core.async.t_cljs$core$async32582(self__.p,self__.ch,meta32583__$1));
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32584){
var self__ = this;
var _32584__$1 = this;
return self__.meta32583;
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32582.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32583","meta32583",401710594,null)], null);
});

cljs.core.async.t_cljs$core$async32582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32582";

cljs.core.async.t_cljs$core$async32582.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async32582");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32582.
 */
cljs.core.async.__GT_t_cljs$core$async32582 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32582(p__$1,ch__$1,meta32583){
return (new cljs.core.async.t_cljs$core$async32582(p__$1,ch__$1,meta32583));
});

}

return (new cljs.core.async.t_cljs$core$async32582(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32586 = arguments.length;
switch (G__32586) {
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
var c__31087__auto___32626 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32626,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32626,out){
return (function (state_32607){
var state_val_32608 = (state_32607[(1)]);
if((state_val_32608 === (7))){
var inst_32603 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32609_32627 = state_32607__$1;
(statearr_32609_32627[(2)] = inst_32603);

(statearr_32609_32627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (1))){
var state_32607__$1 = state_32607;
var statearr_32610_32628 = state_32607__$1;
(statearr_32610_32628[(2)] = null);

(statearr_32610_32628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (4))){
var inst_32589 = (state_32607[(7)]);
var inst_32589__$1 = (state_32607[(2)]);
var inst_32590 = (inst_32589__$1 == null);
var state_32607__$1 = (function (){var statearr_32611 = state_32607;
(statearr_32611[(7)] = inst_32589__$1);

return statearr_32611;
})();
if(cljs.core.truth_(inst_32590)){
var statearr_32612_32629 = state_32607__$1;
(statearr_32612_32629[(1)] = (5));

} else {
var statearr_32613_32630 = state_32607__$1;
(statearr_32613_32630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (6))){
var inst_32589 = (state_32607[(7)]);
var inst_32594 = p.call(null,inst_32589);
var state_32607__$1 = state_32607;
if(cljs.core.truth_(inst_32594)){
var statearr_32614_32631 = state_32607__$1;
(statearr_32614_32631[(1)] = (8));

} else {
var statearr_32615_32632 = state_32607__$1;
(statearr_32615_32632[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (3))){
var inst_32605 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32607__$1,inst_32605);
} else {
if((state_val_32608 === (2))){
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32607__$1,(4),ch);
} else {
if((state_val_32608 === (11))){
var inst_32597 = (state_32607[(2)]);
var state_32607__$1 = state_32607;
var statearr_32616_32633 = state_32607__$1;
(statearr_32616_32633[(2)] = inst_32597);

(statearr_32616_32633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (9))){
var state_32607__$1 = state_32607;
var statearr_32617_32634 = state_32607__$1;
(statearr_32617_32634[(2)] = null);

(statearr_32617_32634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (5))){
var inst_32592 = cljs.core.async.close_BANG_.call(null,out);
var state_32607__$1 = state_32607;
var statearr_32618_32635 = state_32607__$1;
(statearr_32618_32635[(2)] = inst_32592);

(statearr_32618_32635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (10))){
var inst_32600 = (state_32607[(2)]);
var state_32607__$1 = (function (){var statearr_32619 = state_32607;
(statearr_32619[(8)] = inst_32600);

return statearr_32619;
})();
var statearr_32620_32636 = state_32607__$1;
(statearr_32620_32636[(2)] = null);

(statearr_32620_32636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32608 === (8))){
var inst_32589 = (state_32607[(7)]);
var state_32607__$1 = state_32607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32607__$1,(11),out,inst_32589);
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
});})(c__31087__auto___32626,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32626,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32621 = [null,null,null,null,null,null,null,null,null];
(statearr_32621[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32621[(1)] = (1));

return statearr_32621;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32607){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32622){if((e32622 instanceof Object)){
var ex__30996__auto__ = e32622;
var statearr_32623_32637 = state_32607;
(statearr_32623_32637[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32638 = state_32607;
state_32607 = G__32638;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32626,out))
})();
var state__31089__auto__ = (function (){var statearr_32624 = f__31088__auto__.call(null);
(statearr_32624[(6)] = c__31087__auto___32626);

return statearr_32624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32626,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32640 = arguments.length;
switch (G__32640) {
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
var c__31087__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto__){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto__){
return (function (state_32703){
var state_val_32704 = (state_32703[(1)]);
if((state_val_32704 === (7))){
var inst_32699 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32705_32743 = state_32703__$1;
(statearr_32705_32743[(2)] = inst_32699);

(statearr_32705_32743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (20))){
var inst_32669 = (state_32703[(7)]);
var inst_32680 = (state_32703[(2)]);
var inst_32681 = cljs.core.next.call(null,inst_32669);
var inst_32655 = inst_32681;
var inst_32656 = null;
var inst_32657 = (0);
var inst_32658 = (0);
var state_32703__$1 = (function (){var statearr_32706 = state_32703;
(statearr_32706[(8)] = inst_32655);

(statearr_32706[(9)] = inst_32657);

(statearr_32706[(10)] = inst_32680);

(statearr_32706[(11)] = inst_32656);

(statearr_32706[(12)] = inst_32658);

return statearr_32706;
})();
var statearr_32707_32744 = state_32703__$1;
(statearr_32707_32744[(2)] = null);

(statearr_32707_32744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (1))){
var state_32703__$1 = state_32703;
var statearr_32708_32745 = state_32703__$1;
(statearr_32708_32745[(2)] = null);

(statearr_32708_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (4))){
var inst_32644 = (state_32703[(13)]);
var inst_32644__$1 = (state_32703[(2)]);
var inst_32645 = (inst_32644__$1 == null);
var state_32703__$1 = (function (){var statearr_32709 = state_32703;
(statearr_32709[(13)] = inst_32644__$1);

return statearr_32709;
})();
if(cljs.core.truth_(inst_32645)){
var statearr_32710_32746 = state_32703__$1;
(statearr_32710_32746[(1)] = (5));

} else {
var statearr_32711_32747 = state_32703__$1;
(statearr_32711_32747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (15))){
var state_32703__$1 = state_32703;
var statearr_32715_32748 = state_32703__$1;
(statearr_32715_32748[(2)] = null);

(statearr_32715_32748[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (21))){
var state_32703__$1 = state_32703;
var statearr_32716_32749 = state_32703__$1;
(statearr_32716_32749[(2)] = null);

(statearr_32716_32749[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (13))){
var inst_32655 = (state_32703[(8)]);
var inst_32657 = (state_32703[(9)]);
var inst_32656 = (state_32703[(11)]);
var inst_32658 = (state_32703[(12)]);
var inst_32665 = (state_32703[(2)]);
var inst_32666 = (inst_32658 + (1));
var tmp32712 = inst_32655;
var tmp32713 = inst_32657;
var tmp32714 = inst_32656;
var inst_32655__$1 = tmp32712;
var inst_32656__$1 = tmp32714;
var inst_32657__$1 = tmp32713;
var inst_32658__$1 = inst_32666;
var state_32703__$1 = (function (){var statearr_32717 = state_32703;
(statearr_32717[(8)] = inst_32655__$1);

(statearr_32717[(9)] = inst_32657__$1);

(statearr_32717[(11)] = inst_32656__$1);

(statearr_32717[(12)] = inst_32658__$1);

(statearr_32717[(14)] = inst_32665);

return statearr_32717;
})();
var statearr_32718_32750 = state_32703__$1;
(statearr_32718_32750[(2)] = null);

(statearr_32718_32750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (22))){
var state_32703__$1 = state_32703;
var statearr_32719_32751 = state_32703__$1;
(statearr_32719_32751[(2)] = null);

(statearr_32719_32751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (6))){
var inst_32644 = (state_32703[(13)]);
var inst_32653 = f.call(null,inst_32644);
var inst_32654 = cljs.core.seq.call(null,inst_32653);
var inst_32655 = inst_32654;
var inst_32656 = null;
var inst_32657 = (0);
var inst_32658 = (0);
var state_32703__$1 = (function (){var statearr_32720 = state_32703;
(statearr_32720[(8)] = inst_32655);

(statearr_32720[(9)] = inst_32657);

(statearr_32720[(11)] = inst_32656);

(statearr_32720[(12)] = inst_32658);

return statearr_32720;
})();
var statearr_32721_32752 = state_32703__$1;
(statearr_32721_32752[(2)] = null);

(statearr_32721_32752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (17))){
var inst_32669 = (state_32703[(7)]);
var inst_32673 = cljs.core.chunk_first.call(null,inst_32669);
var inst_32674 = cljs.core.chunk_rest.call(null,inst_32669);
var inst_32675 = cljs.core.count.call(null,inst_32673);
var inst_32655 = inst_32674;
var inst_32656 = inst_32673;
var inst_32657 = inst_32675;
var inst_32658 = (0);
var state_32703__$1 = (function (){var statearr_32722 = state_32703;
(statearr_32722[(8)] = inst_32655);

(statearr_32722[(9)] = inst_32657);

(statearr_32722[(11)] = inst_32656);

(statearr_32722[(12)] = inst_32658);

return statearr_32722;
})();
var statearr_32723_32753 = state_32703__$1;
(statearr_32723_32753[(2)] = null);

(statearr_32723_32753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (3))){
var inst_32701 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32703__$1,inst_32701);
} else {
if((state_val_32704 === (12))){
var inst_32689 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32724_32754 = state_32703__$1;
(statearr_32724_32754[(2)] = inst_32689);

(statearr_32724_32754[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (2))){
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32703__$1,(4),in$);
} else {
if((state_val_32704 === (23))){
var inst_32697 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32725_32755 = state_32703__$1;
(statearr_32725_32755[(2)] = inst_32697);

(statearr_32725_32755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (19))){
var inst_32684 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32726_32756 = state_32703__$1;
(statearr_32726_32756[(2)] = inst_32684);

(statearr_32726_32756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (11))){
var inst_32655 = (state_32703[(8)]);
var inst_32669 = (state_32703[(7)]);
var inst_32669__$1 = cljs.core.seq.call(null,inst_32655);
var state_32703__$1 = (function (){var statearr_32727 = state_32703;
(statearr_32727[(7)] = inst_32669__$1);

return statearr_32727;
})();
if(inst_32669__$1){
var statearr_32728_32757 = state_32703__$1;
(statearr_32728_32757[(1)] = (14));

} else {
var statearr_32729_32758 = state_32703__$1;
(statearr_32729_32758[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (9))){
var inst_32691 = (state_32703[(2)]);
var inst_32692 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32703__$1 = (function (){var statearr_32730 = state_32703;
(statearr_32730[(15)] = inst_32691);

return statearr_32730;
})();
if(cljs.core.truth_(inst_32692)){
var statearr_32731_32759 = state_32703__$1;
(statearr_32731_32759[(1)] = (21));

} else {
var statearr_32732_32760 = state_32703__$1;
(statearr_32732_32760[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (5))){
var inst_32647 = cljs.core.async.close_BANG_.call(null,out);
var state_32703__$1 = state_32703;
var statearr_32733_32761 = state_32703__$1;
(statearr_32733_32761[(2)] = inst_32647);

(statearr_32733_32761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (14))){
var inst_32669 = (state_32703[(7)]);
var inst_32671 = cljs.core.chunked_seq_QMARK_.call(null,inst_32669);
var state_32703__$1 = state_32703;
if(inst_32671){
var statearr_32734_32762 = state_32703__$1;
(statearr_32734_32762[(1)] = (17));

} else {
var statearr_32735_32763 = state_32703__$1;
(statearr_32735_32763[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (16))){
var inst_32687 = (state_32703[(2)]);
var state_32703__$1 = state_32703;
var statearr_32736_32764 = state_32703__$1;
(statearr_32736_32764[(2)] = inst_32687);

(statearr_32736_32764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32704 === (10))){
var inst_32656 = (state_32703[(11)]);
var inst_32658 = (state_32703[(12)]);
var inst_32663 = cljs.core._nth.call(null,inst_32656,inst_32658);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32703__$1,(13),out,inst_32663);
} else {
if((state_val_32704 === (18))){
var inst_32669 = (state_32703[(7)]);
var inst_32678 = cljs.core.first.call(null,inst_32669);
var state_32703__$1 = state_32703;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32703__$1,(20),out,inst_32678);
} else {
if((state_val_32704 === (8))){
var inst_32657 = (state_32703[(9)]);
var inst_32658 = (state_32703[(12)]);
var inst_32660 = (inst_32658 < inst_32657);
var inst_32661 = inst_32660;
var state_32703__$1 = state_32703;
if(cljs.core.truth_(inst_32661)){
var statearr_32737_32765 = state_32703__$1;
(statearr_32737_32765[(1)] = (10));

} else {
var statearr_32738_32766 = state_32703__$1;
(statearr_32738_32766[(1)] = (11));

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
});})(c__31087__auto__))
;
return ((function (switch__30992__auto__,c__31087__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____0 = (function (){
var statearr_32739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32739[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__);

(statearr_32739[(1)] = (1));

return statearr_32739;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____1 = (function (state_32703){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32740){if((e32740 instanceof Object)){
var ex__30996__auto__ = e32740;
var statearr_32741_32767 = state_32703;
(statearr_32741_32767[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32768 = state_32703;
state_32703 = G__32768;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__ = function(state_32703){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____1.call(this,state_32703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30993__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto__))
})();
var state__31089__auto__ = (function (){var statearr_32742 = f__31088__auto__.call(null);
(statearr_32742[(6)] = c__31087__auto__);

return statearr_32742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto__))
);

return c__31087__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32770 = arguments.length;
switch (G__32770) {
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
var G__32773 = arguments.length;
switch (G__32773) {
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
var G__32776 = arguments.length;
switch (G__32776) {
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
var c__31087__auto___32823 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32823,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32823,out){
return (function (state_32800){
var state_val_32801 = (state_32800[(1)]);
if((state_val_32801 === (7))){
var inst_32795 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32802_32824 = state_32800__$1;
(statearr_32802_32824[(2)] = inst_32795);

(statearr_32802_32824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (1))){
var inst_32777 = null;
var state_32800__$1 = (function (){var statearr_32803 = state_32800;
(statearr_32803[(7)] = inst_32777);

return statearr_32803;
})();
var statearr_32804_32825 = state_32800__$1;
(statearr_32804_32825[(2)] = null);

(statearr_32804_32825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (4))){
var inst_32780 = (state_32800[(8)]);
var inst_32780__$1 = (state_32800[(2)]);
var inst_32781 = (inst_32780__$1 == null);
var inst_32782 = cljs.core.not.call(null,inst_32781);
var state_32800__$1 = (function (){var statearr_32805 = state_32800;
(statearr_32805[(8)] = inst_32780__$1);

return statearr_32805;
})();
if(inst_32782){
var statearr_32806_32826 = state_32800__$1;
(statearr_32806_32826[(1)] = (5));

} else {
var statearr_32807_32827 = state_32800__$1;
(statearr_32807_32827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (6))){
var state_32800__$1 = state_32800;
var statearr_32808_32828 = state_32800__$1;
(statearr_32808_32828[(2)] = null);

(statearr_32808_32828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (3))){
var inst_32797 = (state_32800[(2)]);
var inst_32798 = cljs.core.async.close_BANG_.call(null,out);
var state_32800__$1 = (function (){var statearr_32809 = state_32800;
(statearr_32809[(9)] = inst_32797);

return statearr_32809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32800__$1,inst_32798);
} else {
if((state_val_32801 === (2))){
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32800__$1,(4),ch);
} else {
if((state_val_32801 === (11))){
var inst_32780 = (state_32800[(8)]);
var inst_32789 = (state_32800[(2)]);
var inst_32777 = inst_32780;
var state_32800__$1 = (function (){var statearr_32810 = state_32800;
(statearr_32810[(7)] = inst_32777);

(statearr_32810[(10)] = inst_32789);

return statearr_32810;
})();
var statearr_32811_32829 = state_32800__$1;
(statearr_32811_32829[(2)] = null);

(statearr_32811_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (9))){
var inst_32780 = (state_32800[(8)]);
var state_32800__$1 = state_32800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32800__$1,(11),out,inst_32780);
} else {
if((state_val_32801 === (5))){
var inst_32777 = (state_32800[(7)]);
var inst_32780 = (state_32800[(8)]);
var inst_32784 = cljs.core._EQ_.call(null,inst_32780,inst_32777);
var state_32800__$1 = state_32800;
if(inst_32784){
var statearr_32813_32830 = state_32800__$1;
(statearr_32813_32830[(1)] = (8));

} else {
var statearr_32814_32831 = state_32800__$1;
(statearr_32814_32831[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (10))){
var inst_32792 = (state_32800[(2)]);
var state_32800__$1 = state_32800;
var statearr_32815_32832 = state_32800__$1;
(statearr_32815_32832[(2)] = inst_32792);

(statearr_32815_32832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32801 === (8))){
var inst_32777 = (state_32800[(7)]);
var tmp32812 = inst_32777;
var inst_32777__$1 = tmp32812;
var state_32800__$1 = (function (){var statearr_32816 = state_32800;
(statearr_32816[(7)] = inst_32777__$1);

return statearr_32816;
})();
var statearr_32817_32833 = state_32800__$1;
(statearr_32817_32833[(2)] = null);

(statearr_32817_32833[(1)] = (2));


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
});})(c__31087__auto___32823,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32823,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32818[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32818[(1)] = (1));

return statearr_32818;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32800){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object)){
var ex__30996__auto__ = e32819;
var statearr_32820_32834 = state_32800;
(statearr_32820_32834[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32835 = state_32800;
state_32800 = G__32835;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32823,out))
})();
var state__31089__auto__ = (function (){var statearr_32821 = f__31088__auto__.call(null);
(statearr_32821[(6)] = c__31087__auto___32823);

return statearr_32821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32823,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32837 = arguments.length;
switch (G__32837) {
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
var c__31087__auto___32903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32903,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32903,out){
return (function (state_32875){
var state_val_32876 = (state_32875[(1)]);
if((state_val_32876 === (7))){
var inst_32871 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32877_32904 = state_32875__$1;
(statearr_32877_32904[(2)] = inst_32871);

(statearr_32877_32904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (1))){
var inst_32838 = (new Array(n));
var inst_32839 = inst_32838;
var inst_32840 = (0);
var state_32875__$1 = (function (){var statearr_32878 = state_32875;
(statearr_32878[(7)] = inst_32840);

(statearr_32878[(8)] = inst_32839);

return statearr_32878;
})();
var statearr_32879_32905 = state_32875__$1;
(statearr_32879_32905[(2)] = null);

(statearr_32879_32905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (4))){
var inst_32843 = (state_32875[(9)]);
var inst_32843__$1 = (state_32875[(2)]);
var inst_32844 = (inst_32843__$1 == null);
var inst_32845 = cljs.core.not.call(null,inst_32844);
var state_32875__$1 = (function (){var statearr_32880 = state_32875;
(statearr_32880[(9)] = inst_32843__$1);

return statearr_32880;
})();
if(inst_32845){
var statearr_32881_32906 = state_32875__$1;
(statearr_32881_32906[(1)] = (5));

} else {
var statearr_32882_32907 = state_32875__$1;
(statearr_32882_32907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (15))){
var inst_32865 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32883_32908 = state_32875__$1;
(statearr_32883_32908[(2)] = inst_32865);

(statearr_32883_32908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (13))){
var state_32875__$1 = state_32875;
var statearr_32884_32909 = state_32875__$1;
(statearr_32884_32909[(2)] = null);

(statearr_32884_32909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (6))){
var inst_32840 = (state_32875[(7)]);
var inst_32861 = (inst_32840 > (0));
var state_32875__$1 = state_32875;
if(cljs.core.truth_(inst_32861)){
var statearr_32885_32910 = state_32875__$1;
(statearr_32885_32910[(1)] = (12));

} else {
var statearr_32886_32911 = state_32875__$1;
(statearr_32886_32911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (3))){
var inst_32873 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32875__$1,inst_32873);
} else {
if((state_val_32876 === (12))){
var inst_32839 = (state_32875[(8)]);
var inst_32863 = cljs.core.vec.call(null,inst_32839);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32875__$1,(15),out,inst_32863);
} else {
if((state_val_32876 === (2))){
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32875__$1,(4),ch);
} else {
if((state_val_32876 === (11))){
var inst_32855 = (state_32875[(2)]);
var inst_32856 = (new Array(n));
var inst_32839 = inst_32856;
var inst_32840 = (0);
var state_32875__$1 = (function (){var statearr_32887 = state_32875;
(statearr_32887[(7)] = inst_32840);

(statearr_32887[(10)] = inst_32855);

(statearr_32887[(8)] = inst_32839);

return statearr_32887;
})();
var statearr_32888_32912 = state_32875__$1;
(statearr_32888_32912[(2)] = null);

(statearr_32888_32912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (9))){
var inst_32839 = (state_32875[(8)]);
var inst_32853 = cljs.core.vec.call(null,inst_32839);
var state_32875__$1 = state_32875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32875__$1,(11),out,inst_32853);
} else {
if((state_val_32876 === (5))){
var inst_32843 = (state_32875[(9)]);
var inst_32848 = (state_32875[(11)]);
var inst_32840 = (state_32875[(7)]);
var inst_32839 = (state_32875[(8)]);
var inst_32847 = (inst_32839[inst_32840] = inst_32843);
var inst_32848__$1 = (inst_32840 + (1));
var inst_32849 = (inst_32848__$1 < n);
var state_32875__$1 = (function (){var statearr_32889 = state_32875;
(statearr_32889[(11)] = inst_32848__$1);

(statearr_32889[(12)] = inst_32847);

return statearr_32889;
})();
if(cljs.core.truth_(inst_32849)){
var statearr_32890_32913 = state_32875__$1;
(statearr_32890_32913[(1)] = (8));

} else {
var statearr_32891_32914 = state_32875__$1;
(statearr_32891_32914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (14))){
var inst_32868 = (state_32875[(2)]);
var inst_32869 = cljs.core.async.close_BANG_.call(null,out);
var state_32875__$1 = (function (){var statearr_32893 = state_32875;
(statearr_32893[(13)] = inst_32868);

return statearr_32893;
})();
var statearr_32894_32915 = state_32875__$1;
(statearr_32894_32915[(2)] = inst_32869);

(statearr_32894_32915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (10))){
var inst_32859 = (state_32875[(2)]);
var state_32875__$1 = state_32875;
var statearr_32895_32916 = state_32875__$1;
(statearr_32895_32916[(2)] = inst_32859);

(statearr_32895_32916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32876 === (8))){
var inst_32848 = (state_32875[(11)]);
var inst_32839 = (state_32875[(8)]);
var tmp32892 = inst_32839;
var inst_32839__$1 = tmp32892;
var inst_32840 = inst_32848;
var state_32875__$1 = (function (){var statearr_32896 = state_32875;
(statearr_32896[(7)] = inst_32840);

(statearr_32896[(8)] = inst_32839__$1);

return statearr_32896;
})();
var statearr_32897_32917 = state_32875__$1;
(statearr_32897_32917[(2)] = null);

(statearr_32897_32917[(1)] = (2));


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
});})(c__31087__auto___32903,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32903,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32898[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32898[(1)] = (1));

return statearr_32898;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32875){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32899){if((e32899 instanceof Object)){
var ex__30996__auto__ = e32899;
var statearr_32900_32918 = state_32875;
(statearr_32900_32918[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32919 = state_32875;
state_32875 = G__32919;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32903,out))
})();
var state__31089__auto__ = (function (){var statearr_32901 = f__31088__auto__.call(null);
(statearr_32901[(6)] = c__31087__auto___32903);

return statearr_32901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32903,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32921 = arguments.length;
switch (G__32921) {
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
var c__31087__auto___32991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31087__auto___32991,out){
return (function (){
var f__31088__auto__ = (function (){var switch__30992__auto__ = ((function (c__31087__auto___32991,out){
return (function (state_32963){
var state_val_32964 = (state_32963[(1)]);
if((state_val_32964 === (7))){
var inst_32959 = (state_32963[(2)]);
var state_32963__$1 = state_32963;
var statearr_32965_32992 = state_32963__$1;
(statearr_32965_32992[(2)] = inst_32959);

(statearr_32965_32992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (1))){
var inst_32922 = [];
var inst_32923 = inst_32922;
var inst_32924 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32963__$1 = (function (){var statearr_32966 = state_32963;
(statearr_32966[(7)] = inst_32924);

(statearr_32966[(8)] = inst_32923);

return statearr_32966;
})();
var statearr_32967_32993 = state_32963__$1;
(statearr_32967_32993[(2)] = null);

(statearr_32967_32993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (4))){
var inst_32927 = (state_32963[(9)]);
var inst_32927__$1 = (state_32963[(2)]);
var inst_32928 = (inst_32927__$1 == null);
var inst_32929 = cljs.core.not.call(null,inst_32928);
var state_32963__$1 = (function (){var statearr_32968 = state_32963;
(statearr_32968[(9)] = inst_32927__$1);

return statearr_32968;
})();
if(inst_32929){
var statearr_32969_32994 = state_32963__$1;
(statearr_32969_32994[(1)] = (5));

} else {
var statearr_32970_32995 = state_32963__$1;
(statearr_32970_32995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (15))){
var inst_32953 = (state_32963[(2)]);
var state_32963__$1 = state_32963;
var statearr_32971_32996 = state_32963__$1;
(statearr_32971_32996[(2)] = inst_32953);

(statearr_32971_32996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (13))){
var state_32963__$1 = state_32963;
var statearr_32972_32997 = state_32963__$1;
(statearr_32972_32997[(2)] = null);

(statearr_32972_32997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (6))){
var inst_32923 = (state_32963[(8)]);
var inst_32948 = inst_32923.length;
var inst_32949 = (inst_32948 > (0));
var state_32963__$1 = state_32963;
if(cljs.core.truth_(inst_32949)){
var statearr_32973_32998 = state_32963__$1;
(statearr_32973_32998[(1)] = (12));

} else {
var statearr_32974_32999 = state_32963__$1;
(statearr_32974_32999[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (3))){
var inst_32961 = (state_32963[(2)]);
var state_32963__$1 = state_32963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32963__$1,inst_32961);
} else {
if((state_val_32964 === (12))){
var inst_32923 = (state_32963[(8)]);
var inst_32951 = cljs.core.vec.call(null,inst_32923);
var state_32963__$1 = state_32963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32963__$1,(15),out,inst_32951);
} else {
if((state_val_32964 === (2))){
var state_32963__$1 = state_32963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32963__$1,(4),ch);
} else {
if((state_val_32964 === (11))){
var inst_32931 = (state_32963[(10)]);
var inst_32927 = (state_32963[(9)]);
var inst_32941 = (state_32963[(2)]);
var inst_32942 = [];
var inst_32943 = inst_32942.push(inst_32927);
var inst_32923 = inst_32942;
var inst_32924 = inst_32931;
var state_32963__$1 = (function (){var statearr_32975 = state_32963;
(statearr_32975[(11)] = inst_32941);

(statearr_32975[(12)] = inst_32943);

(statearr_32975[(7)] = inst_32924);

(statearr_32975[(8)] = inst_32923);

return statearr_32975;
})();
var statearr_32976_33000 = state_32963__$1;
(statearr_32976_33000[(2)] = null);

(statearr_32976_33000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (9))){
var inst_32923 = (state_32963[(8)]);
var inst_32939 = cljs.core.vec.call(null,inst_32923);
var state_32963__$1 = state_32963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32963__$1,(11),out,inst_32939);
} else {
if((state_val_32964 === (5))){
var inst_32931 = (state_32963[(10)]);
var inst_32924 = (state_32963[(7)]);
var inst_32927 = (state_32963[(9)]);
var inst_32931__$1 = f.call(null,inst_32927);
var inst_32932 = cljs.core._EQ_.call(null,inst_32931__$1,inst_32924);
var inst_32933 = cljs.core.keyword_identical_QMARK_.call(null,inst_32924,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32934 = ((inst_32932) || (inst_32933));
var state_32963__$1 = (function (){var statearr_32977 = state_32963;
(statearr_32977[(10)] = inst_32931__$1);

return statearr_32977;
})();
if(cljs.core.truth_(inst_32934)){
var statearr_32978_33001 = state_32963__$1;
(statearr_32978_33001[(1)] = (8));

} else {
var statearr_32979_33002 = state_32963__$1;
(statearr_32979_33002[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (14))){
var inst_32956 = (state_32963[(2)]);
var inst_32957 = cljs.core.async.close_BANG_.call(null,out);
var state_32963__$1 = (function (){var statearr_32981 = state_32963;
(statearr_32981[(13)] = inst_32956);

return statearr_32981;
})();
var statearr_32982_33003 = state_32963__$1;
(statearr_32982_33003[(2)] = inst_32957);

(statearr_32982_33003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (10))){
var inst_32946 = (state_32963[(2)]);
var state_32963__$1 = state_32963;
var statearr_32983_33004 = state_32963__$1;
(statearr_32983_33004[(2)] = inst_32946);

(statearr_32983_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32964 === (8))){
var inst_32931 = (state_32963[(10)]);
var inst_32923 = (state_32963[(8)]);
var inst_32927 = (state_32963[(9)]);
var inst_32936 = inst_32923.push(inst_32927);
var tmp32980 = inst_32923;
var inst_32923__$1 = tmp32980;
var inst_32924 = inst_32931;
var state_32963__$1 = (function (){var statearr_32984 = state_32963;
(statearr_32984[(7)] = inst_32924);

(statearr_32984[(14)] = inst_32936);

(statearr_32984[(8)] = inst_32923__$1);

return statearr_32984;
})();
var statearr_32985_33005 = state_32963__$1;
(statearr_32985_33005[(2)] = null);

(statearr_32985_33005[(1)] = (2));


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
});})(c__31087__auto___32991,out))
;
return ((function (switch__30992__auto__,c__31087__auto___32991,out){
return (function() {
var cljs$core$async$state_machine__30993__auto__ = null;
var cljs$core$async$state_machine__30993__auto____0 = (function (){
var statearr_32986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32986[(0)] = cljs$core$async$state_machine__30993__auto__);

(statearr_32986[(1)] = (1));

return statearr_32986;
});
var cljs$core$async$state_machine__30993__auto____1 = (function (state_32963){
while(true){
var ret_value__30994__auto__ = (function (){try{while(true){
var result__30995__auto__ = switch__30992__auto__.call(null,state_32963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30995__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30995__auto__;
}
break;
}
}catch (e32987){if((e32987 instanceof Object)){
var ex__30996__auto__ = e32987;
var statearr_32988_33006 = state_32963;
(statearr_32988_33006[(5)] = ex__30996__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30994__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33007 = state_32963;
state_32963 = G__33007;
continue;
} else {
return ret_value__30994__auto__;
}
break;
}
});
cljs$core$async$state_machine__30993__auto__ = function(state_32963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30993__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30993__auto____1.call(this,state_32963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30993__auto____0;
cljs$core$async$state_machine__30993__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30993__auto____1;
return cljs$core$async$state_machine__30993__auto__;
})()
;})(switch__30992__auto__,c__31087__auto___32991,out))
})();
var state__31089__auto__ = (function (){var statearr_32989 = f__31088__auto__.call(null);
(statearr_32989[(6)] = c__31087__auto___32991);

return statearr_32989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31089__auto__);
});})(c__31087__auto___32991,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1545662207197
