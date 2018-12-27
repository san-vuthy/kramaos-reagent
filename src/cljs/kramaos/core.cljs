(ns kramaos.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]
              ; navbar
              [kramaos.components.navbar :refer [community-menu products-menu]]
              ; footer
              [kramaos.components.footer :refer [footer]]
              ; home page
              [kramaos.components.index :refer [index]]
              ; kosmos page
              [kramaos.components.kosmos :refer [kosmos]]
              ; turtorial page
<<<<<<< HEAD
              [kramaos.components.tutorials :refer [tutorial]]
              ; single-tutorial-page
              [kramaos.components.single-tutorial :refer [single-tutorial]]))
=======
              [kramaos.components.tutorials :refer [tutorial]]))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

; =================================
;; navbar

(defn kosmos-navbar
  [backgroundColor logo classColor color]
  [:div {:class "menuBack" :style {:backgroundColor backgroundColor}}
      [:div {:class "ui secondary container menu "}
          [:a {:href "/"}
              [:img {:src logo :class "ui middle aligned image logo"}]]
          [:div.right.menu.navbar {:class classColor}
              (community-menu color)
              (products-menu color)
              [:a {:class "item"} "Contact Us"]]]])




;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/kosmos" :kosmos]
<<<<<<< HEAD
    ["/tutorials" :tutorials]
    ["/single-tutorial" :single-tutorial-page]]))
=======
    ["/tutorials" :tutorials]]))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b


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

<<<<<<< HEAD
(defn single-tutorial-page []
  (fn []
     [:div
      (kosmos-navbar "#321653" "/img/logo/logo-white.png" "navbar-purple" "white")
      (single-tutorial)]))

(defn tutorials-page []
  (fn []
     [:div
      (kosmos-navbar "#fff" "/img/logo/logo-purple.png" "navbar-white" "black")
      (tutorial)]))
=======
(defn tutorials-page []
  (fn []
     [:div
      (kosmos-navbar "#321653" "/img/logo/logo-white.png" "navbar-purple" "white")
      [tutorial "BROS PANHA PLOCK"]]))
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b

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
<<<<<<< HEAD
    :single-tutorial-page #'single-tutorial-page
=======
>>>>>>> b13ac25a6eaae136e81e8dce78fd75a9a694e45b
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
