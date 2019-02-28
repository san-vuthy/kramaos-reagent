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
                   [:h1 {:class "bannerTitle"} "Welcome to KOSMOS v2.0.0, a multipurpose and user-friendly Linux operating system distribution, driven by a mission to provide tools for the next generation of engineers, problem solvers and discovers."]
                ;    [:p {:class "bannerDescription"} "Open Source Powered, an operating system that has powered 70% of the internet infrastructure and almost all the phone in the world. We love Open Source community and we hope to help spread the love of open source to a wider world with KOSMOS works."]
                   ]]]



       [:div {:class "ui container"}
           (titleDesc "Operating System for Every Computers"
                      "KOSMOS can run on almost any computers there is. It works well on your old laptop as well.")
           [:div {:class "ui stackable three column grid"}
            (map (fn [item]
                     [:div.column.blur {:key (:id item)}
                      (card (:img item) (:title item) (:desc item))])
                 (vals @cards-data))]]
       [:div {:class "section2Banner"}
        [:div {:class "ui container"}
         [:h1 {:class "section2Title"} "KOOMPI KOSMOS"]
         [:p "KOSMOS is the default OS for KOOMPI Laptop and its future devices."]
         [:a {:href "https://koompi.com/", :target "_blank"}
          [:h5 "Learn More "
           [:i {:class "angle right icon iconSection2"}]]]]]

       [:div {:class "ui container"}
        [:center [:h1.kosmosConent "Recently Event Blog"]]
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
              (vals @blog-atom))]]
              ])
