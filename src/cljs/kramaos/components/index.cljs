(ns kramaos.components.index
  (:require [kramaos.data.cards :refer [cards-data]]
            [reagent.core :refer [atom]]))

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
           [:h1 {:class "section1Title"} "Powerful OS in Every Computers"]
           [:p {:class "section1Desc"} "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies. Curabitur feugiat, velit at facilisis pulvinar, odio enim dapibus lorem, elementum bibendum quam risus eget lacus. Nam in nibh nisl."]
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
        [:h1 {:class "section1Title"} "Recently Event Blog"]
        [:p {:class "section1Desc"} "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies. Curabitur feugiat, velit at facilisis pulvinar, odio enim dapibus lorem, elementum bibendum quam risus eget lacus. Nam in nibh nisl."]
        [:div {:class "ui stackable three column grid"}
         [:div {:class "column blur"}
          [:center
           [:img {:src "https://cdn.shopify.com/s/files/1/0251/7678/files/Work-of-His-Hands-MacBook.png?6827892314490400527", :class "ui fluid image"}]
           [:h4 "Complete Open Source from the box"]
           [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."]
           [:p {:class "bySomeOne"} "By: Mr.Plock"]]]
         [:div {:class "column blur"}
          [:center
           [:img {:src "https://cdn.shopify.com/s/files/1/0251/7678/files/Work-of-His-Hands-MacBook.png?6827892314490400527", :class "ui fluid image"}]
           [:h4 "Dually Build-in Desktop Support"]
           [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."]
           [:p {:class "bySomeOne"} "By: Mr.Plock"]]]
         [:div {:class "column blur"}
          [:center
           [:img {:src "https://cdn.shopify.com/s/files/1/0251/7678/files/Work-of-His-Hands-MacBook.png?6827892314490400527", :class "ui fluid image"}]
           [:h4 "Freindly Development Enviroment"]
           [:p "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."]
           [:p {:class "bySomeOne"} "By: Mr.Plock"]]]]]])
