(ns kramaos.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]
              [kramaos.components.navbar :refer [navbar]]
              [kramaos.components.index :refer [index]]))

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components

(defn home-page []
  (fn []
     [index]))



(defn items-page []
  (fn []
    [:span.main
     [:h1 "The items of kramaos"]
     [:ul (map (fn [item-id]
                 [:li {:name (str "item-" item-id) :key (str "item-" item-id)}
                  [:a {:href (path-for :item {:item-id item-id})} "Item: " item-id]])
               (range 1 60))]]))


(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "Item " item " of kramaos")]
       [:p [:a {:href (path-for :items)} "Back to the list of items"]]])))


(defn about-page []
  (fn [] [:span.main
          [:h1 "About kramaos"]]))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [navbar]
        [page]
        [:div {:class "ui inverted vertical footer segment"}
          [:div {:class "ui center aligned container"}
            [:img {:src "img/logo/footer-logo.png", :class "ui centered image footerImage"}]
            [:p "Copyright © 2018 KOSMOS by KOOMPI"]
            [:div {:class "ui horizontal inverted link list"}]
            [:a {:class "item", :href "#"} "Site Map"]
            [:a {:class "item", :href "#"} "Contact Us"]
            [:a {:class "item", :href "#"} "Terms and Conditions"]
            [:a {:class "item", :href "#"} "Privacy Policy"]
            [:div {:class "ui inverted section divider"}]]
          [:div {:class "ui container"}
            [:div {:class "ui stackable two column grid"}]
            [:div {:class "column"}
              [:div {:class "ui horizontal inverted link list"}
                [:a {:class "item", :href "#"} "Site Map"]
                [:a {:class "item", :href "#"} "Contact Us"]]]
            [:div {:class "column"}
              [:div {:class "ui horizontal inverted link list right floated"}
                [:a {:class "item", :href "#"} "Site Map"]
                [:a {:class "item", :href "#"} "Contact Us"]]]]]]])))

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
