(ns kramaos.components.kosmos
  (:require [kramaos.data.cards :refer [cards-data]]
            [reagent.core :refer [atom]]))

(defn titleDesc
  [title desc]
  [:div.ui.container.kosmosConent
      [:h1 title]
      [:p desc]])


(defn kosmos []
   [:div
      [:div.backgroundBannerKosmos
         [:div.ui.container.contentCenter
            [:div.kosmosCenter
               [:img {:src "/img/logo/kosmos-white-f6.svg"}]
               [:h1 "One-click install KOSMOS"]
               [:p.paddingParagraph "This is all you need to do if you want the standard version of React. If you want the version of React with addons, you'd use something like this instead"]
               [:a {:href "/introduction/getting-started.html", :class "ui huge inverted download button downadBTN"} "Download Now"]]]]

      (titleDesc  "Exclusive Experience with KOSMOS"
                  "Convert your HTML to Hiccup. Hiccup is an HTML representation in Clojure syntax using vectors [] to represent elements, and maps #{} to represent an element's attributes.") 
     
      [:div.ui.container 
         [:div {:class "ui stackable two column grid"}
          [:div {:class "ten wide column"}
           [:img {:src "img/Desktop-E.png" :class "ui fluid image"}]]
          [:div {:class "six wide column"}
           [:div {:class "ui pointing secondary vertical menu"}
              [:a {:class "active item"}
               [:p "Complete Open Source from the box"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]]]]]


      (titleDesc "Exclusive Experience with KOSMOS"
                 "Convert your HTML to Hiccup. Hiccup is an HTML representation in Clojure syntax using vectors [] to represent elements, and maps #{} to represent an element's attributes.")

      [:div.ui.container
         [:div {:class "ui stackable two column grid"}
          [:div {:class "six wide column"}
           [:div {:class "ui pointing secondary vertical menu"}
              [:a {:class "item"}
               [:p "Complete Open Source from the box"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]
              [:a {:class "active item"}
               [:p "Home"]
               [:span "Hello Cambodia Plock"]]]]

          [:div {:class "ten wide column"}
            [:img {:src "img/min-performace-01.svg" :class "ui fluid image"}]]]]])
