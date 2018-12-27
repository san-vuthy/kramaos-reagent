; (ns kramaos.components.navbar
;   (:require [reagent.core :refer [atom]]))
;
;
; (def background (atom {:nav-01 {:id :nav-01
;                                 :background "#321653"
;                                 :img "/img/logo/logo-white.png"}
;                        :nav-02 {:id :nav-02
;                                 :background "#fff"
;                                 :img "/img/logo/logo-purple.png"}}))
;
;
;
; ; (println (.-location js/window))
;
; (defn navbar
;   []
;   [:div {:class "menuBack" :style {:backgroundColor "#fff"}}
;       [:div {:class "ui secondary container menu "}
;           [:a {:href "#"}
;               [:img {:src "/img/logo/logo-purple.png" :class "ui middle aligned image logo"}]]
;           [:div {:class "right menu navbar"}
;               [:a {:class "item"} "Hello World"]
;               [:a {:class "browse item"} "Community "
;                   [:i {:class "dropdown icon"}]]
;               [:a {:class "item"} "Contact Us"]]]])
