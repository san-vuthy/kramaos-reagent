(ns kramaos.components.index
  (:require [kramaos.data.cards :refer [cards-data]]
            [reagent.core :refer [atom]]
            [kramaos.components.kosmos :refer [titleDesc]]
            [kramaos.data.blogs :refer [blog-atom]]))

(def background (atom "#fff"))
(defn card
  [img title desc]
  [:center
   [:img {:src img}]
   [:h4 title]
   [:p desc]])

; (.log js/console @cards)

(defn index []
      [:div
          [:div {:class "bannerParentClass"}
           [:div {:class "bannerBackground"}
               [:div {:class "engineerClass"}
                   [:img {:src "img/engineer.png"}]]
               [:div {:class "engineerClass1"}
                   [:img {:src "img/engineer.png"}]]
               [:div {:class "ui container"}
                   [:div {:class "bannerContainer"}]
                   [:h1 {:class "bannerTitle"} "Together we build tool for the next generation engineers and problem solvers"]
                   [:p {:class "bannerDescription"} "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies. Curabitur feugiat, velit at facilisis pulvinar, odio enim dapibus lorem, elementum bibendum quam risus eget lacus. Nam in nibh nisl."]]]]



       [:div {:class "ui container"}
           (titleDesc "Powerful OS in Every Computers"
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies. Curabitur feugiat, velit at facilisis pulvinar, odio enim dapibus lorem, elementum bibendum quam risus eget lacus. Nam in nibh nisl.")
           [:div {:class "ui stackable three column grid"}
            (map (fn [item]
                     [:div.column.blur {:key (:id item)}
                      (card (:img item) (:title item) (:desc item))])
                 (vals @cards-data))]]
       [:div {:class "section2Banner"}
        [:div {:class "ui container"}
         [:h1 {:class "section2Title"} "KOOMPI KOSMOS"]
         [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."]
         [:a {:href "https://koompi.com/", :target "_blank"}
          [:h5 "Learn More "
           [:i {:class "angle right icon iconSection2"}]]]]]

       [:div {:class "ui container"}
        (titleDesc "Recently Event Blog"
                   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies. Curabitur feugiat, velit at facilisis pulvinar, odio enim dapibus lorem, elementum bibendum quam risus eget lacus. Nam in nibh nisl.")
        [:div {:class "ui stackable three column grid"}
         (map (fn [blog]
                  [:div {:class "column blur" :key (:id blog)}
                    [:a {:target "_blank"
                         :href (:link blog)}
                     [:center
                      [:img {:src (:img blog), :class "ui fluid image"}]
                      [:h4 (:title blog)]
                      [:p (:desc blog)]
                      [:p {:class "bySomeOne"} "By: Koompi"]]]])
              (vals @blog-atom))]]])
