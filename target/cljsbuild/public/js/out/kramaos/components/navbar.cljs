(ns kramaos.components.navbar
    (:require [reagent.core :as reagent :refer [atom]]))

; =================================
;; navbar

(def products (atom {:menu false}))
(def community (atom {:menu false}))

(defn productsToggle []
  (swap! products assoc :menu (not (get-in @products [:menu])))
  (swap! community assoc :menu false))

(defn communityToggle []
  (swap! community assoc :menu (not (get-in @community [:menu])))
  (swap! products assoc :menu false))

(defn productsToggleIcon []
  (if (get-in @products [:menu])
    [:div {:class "menu productsDropdown" :style {:display "block"}}
     [:a {:class "item navbar-Koompi" :href "https://koompi.com/" :target "_blank"}
      [:img {:src "img/icons/koompi-stroke.svg"}]
      [:span "Hardware-KOOMPI"]]
     [:a {:class "item navbar-Koompi" :href "/kosmos"}
      [:img {:src "img/icons/kosmos-stroke.svg"}]
      [:span "OS-KOSMOS"]]]))

(defn communityToggleIcon []
  (if (get-in @community [:menu])
    [:div {:class "menu productsDropdown" :style {:display "block"}}
     [:a {:class "item navbar-Koompi" :href "/tutorials"}
      [:img {:src "img/icons/turtorial-01.svg"}]
      [:span "Tutorials"]]
<<<<<<< HEAD
     [:a {:class "item navbar-Koompi" :href "https://forum.koompi.com/" :target "_blank"}
=======
     [:a {:class "item navbar-Koompi" :href "#"}
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
      [:img {:src "img/icons/faq-01.svg"}]
      [:span "Question and Answer"]]
     [:a {:class "item navbar-Koompi" :href "#"}
      [:img {:src "img/icons/project.svg"}]
      [:span "Projects"]]]))

(defn community-menu
  [color]
  [:div {:class "ui pointing dropdown item" :onClick #(productsToggle)}
   [:span {:class color} "Products"]
   [:i.dropdown.icon {:class color}]
   (productsToggleIcon)])


(defn products-menu
  [color]
  [:div {:class "ui pointing dropdown item" :onClick #(communityToggle)}
   [:span {:class color} "Community"]
   [:i.dropdown.icon {:class color}]
   (communityToggleIcon)])
