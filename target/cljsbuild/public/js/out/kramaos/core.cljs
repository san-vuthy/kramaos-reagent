(ns kramaos.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]
              ; navbar
              [kramaos.components.navbar :refer [community-menu products-menu products]]
              ; footer
              [kramaos.components.footer :refer [footer]]
              ; home page
              [kramaos.components.index :refer [index]]
              ; kosmos page
              [kramaos.components.kosmos :refer [kosmos]]
              ; turtorial page
              [kramaos.components.tutorials :refer [tutorial]]
              ;contact
              [kramaos.components.contact :refer [contact]]))

; =================================
;; navbar

(def menu (atom {:menu false}))
(defn menuToggle
  []
  (swap! menu assoc :menu (not (get-in @menu [:menu]))))

(defn bars-icon
  []
  [:a {:class "item bars-icon" :href "#" :onClick #(menuToggle)} (if (get-in @menu [:menu])[:i {:class "times icon"}] [:i {:class "bars icon"}])])

(defn sideMenu
  [animation]
  [:div.animated.ui.left.vertical.inverted.labeled.icon.sidebar.menu.overlay.visible {:class animation}
   [:div {:class "item"}
        [:div {:class "header"} "Products"]
        [:div {:class "menu"}
         [:a {:class "item" :href "https://koompi.com/" :target "_blank"} "Hardware-Koompi"]
         [:a {:class "item" :href "/kosmos"} "OS-kosmos"]]]
   [:div {:class "item"}
        [:div {:class "header"} "Community"]
        [:div {:class "menu"}
         [:a {:class "item" :href "https://forum.koompi.com/" :target "_blank"} "Question and Answer"]
         [:a {:class "item" :href "https://www.git.kramaos.org/" :target "_blank"} "Projects"]]]
   [:div {:class "item"}
        [:div {:class "header" :href "/contact"} "Contact"]]])

(defn menuToggleIcon
  []
  (if (get-in @menu [:menu])
      (sideMenu "slideInLeft")
      (sideMenu "slideOutLeft")))



(defn kosmos-navbar
  [backgroundColor logo classColor color]
  [:div {:class "menuBack" :style {:backgroundColor backgroundColor}}
      [:div {:class "ui secondary container menu "}
          [:a {:href "/"}
              [:img {:src logo :class "ui middle aligned image logo"}]]
          [:div.right.menu.navbar {:class classColor}
              (community-menu color)
              (products-menu color)
              (menuToggleIcon)
              (bars-icon)]]])


;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/kosmos" :kosmos]
    ["/tutorials" :tutorials]
    ["/contact" :contact]]))


(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components

(defn home-page []
  (fn []
      [:div
       (kosmos-navbar "#321653" "/img/logo/logo-white.png" "navbar-purple" "white")
       (index)]))

(defn kosmos-page []
  (fn []
     [:div
      (kosmos-navbar "#fff" "/img/logo/logo-purple.png" "navbar-white" "black")
      (kosmos)]))

(defn tutorials-page []
  (fn []
     [:div
      (kosmos-navbar "#321653" "/img/logo/logo-white.png" "navbar-purple" "white")
      [tutorial "BROS PANHA PLOCK"]]))

(defn contact-page []
  (fn []
     [:div
      (kosmos-navbar "#321653" "/img/logo/logo-white.png" "navbar-purple" "white")
      [contact]]))

(defn admin-page []
  (fn []
     [:h1 "Hello World"]))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :kosmos #'kosmos-page
    :tutorials #'tutorials-page
    :contact #'contact-page
    :admin #'admin-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [page]
        [footer]]])))

;; -------------------------
;; Initialize app
(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))

    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
