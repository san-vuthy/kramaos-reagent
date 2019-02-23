// Compiled by ClojureScript 1.10.439 {}
goog.provide('kramaos.components.navbar');
goog.require('cljs.core');
goog.require('reagent.core');
kramaos.components.navbar.products = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu","menu",352255198),false], null));
kramaos.components.navbar.community = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu","menu",352255198),false], null));
kramaos.components.navbar.contact = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu","menu",352255198),false], null));
kramaos.components.navbar.productsToggle = (function kramaos$components$navbar$productsToggle(){
cljs.core.swap_BANG_.call(null,kramaos.components.navbar.products,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.components.navbar.products),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null))));

cljs.core.swap_BANG_.call(null,kramaos.components.navbar.community,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);

return cljs.core.swap_BANG_.call(null,kramaos.components.navbar.contact,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);
});
kramaos.components.navbar.communityToggle = (function kramaos$components$navbar$communityToggle(){
cljs.core.swap_BANG_.call(null,kramaos.components.navbar.community,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.components.navbar.community),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null))));

cljs.core.swap_BANG_.call(null,kramaos.components.navbar.products,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);

return cljs.core.swap_BANG_.call(null,kramaos.components.navbar.contact,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);
});
kramaos.components.navbar.contacts = (function kramaos$components$navbar$contacts(){
cljs.core.swap_BANG_.call(null,kramaos.components.navbar.contact,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),cljs.core.not.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.components.navbar.contact),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null))));

cljs.core.swap_BANG_.call(null,kramaos.components.navbar.products,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);

return cljs.core.swap_BANG_.call(null,kramaos.components.navbar.community,cljs.core.assoc,new cljs.core.Keyword(null,"menu","menu",352255198),false);
});
kramaos.components.navbar.productsToggleIcon = (function kramaos$components$navbar$productsToggleIcon(){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.components.navbar.products),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu productsDropdown",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item navbar-Koompi",new cljs.core.Keyword(null,"href","href",-793805698),"https://koompi.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/icons/koompi-stroke.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Hardware-KOOMPI"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"item navbar-Koompi",new cljs.core.Keyword(null,"href","href",-793805698),"/kosmos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/icons/kosmos-stroke.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"OS-KOSMOS"], null)], null)], null);
} else {
return null;
}
});
kramaos.components.navbar.communityToggleIcon = (function kramaos$components$navbar$communityToggleIcon(){
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,kramaos.components.navbar.community),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"menu","menu",352255198)], null)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"menu productsDropdown",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item navbar-Koompi",new cljs.core.Keyword(null,"href","href",-793805698),"https://forum.koompi.com/",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/icons/faq-01.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Question and Answer"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"item navbar-Koompi",new cljs.core.Keyword(null,"href","href",-793805698),"https://lab.krama.org",new cljs.core.Keyword(null,"target","target",253001721),"_blank"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/icons/project.svg"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Projects"], null)], null)], null);
} else {
return null;
}
});
kramaos.components.navbar.community_menu = (function kramaos$components$navbar$community_menu(color){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui pointing dropdown item computer or lower hidden",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return kramaos.components.navbar.productsToggle.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),color], null),"Products"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dropdown.icon","i.dropdown.icon",441444121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),color], null)], null),kramaos.components.navbar.productsToggleIcon.call(null)], null);
});
kramaos.components.navbar.products_menu = (function kramaos$components$navbar$products_menu(color){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"ui pointing dropdown item computer or lower hidden",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return kramaos.components.navbar.communityToggle.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),color], null),"Community"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.dropdown.icon","i.dropdown.icon",441444121),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),color], null)], null),kramaos.components.navbar.communityToggleIcon.call(null)], null);
});

//# sourceMappingURL=navbar.js.map?rel=1547007434469
