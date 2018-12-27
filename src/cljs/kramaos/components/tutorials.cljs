(ns kramaos.components.tutorials)

(defn tutorial
  []
  [:div
   [:div.tutorialBanner
    [:div.ui.container.contentCenter
     [:div.tutorialCenter
      [:h1 "Tutorials"]
      [:p "Follow along with one of our 1024 development and sysadmin turtorial"]
      [:div {:class "item widthTutorail"}
       [:div {:class "ui left icon input"}
        [:i {:class "search link icon"}]
        [:input {:type "text", :placeholder "Search tutorials..."}]]]]]]

   [:div.ui.container
    [:div.tutorialContent
     [:h3.totalTutorial "1024 Tutorials"]
     [:div.ui.divider]
     [:div {:class "ui grid container"}
      [:div {:class "fourteen wide column removePadding "}
       [:p "How to Back Up, Import, and Migrate Your Apache Kafka Data on Ubuntu 18.04"]
       [:span.tutorialSize
        [:i {:class "eye icon"}] [:span "200K"]]
       [:span.tutorialSize
        [:i {:class "rocketchat icon"}] [:span "200"]]
       [:span.tutorialSize
         [:span "Mr Plock"]]]
      [:div {:class "two wide column"} "5 days ago"]]
     [:div.ui.divider]

     [:div {:class "ui grid container"}
      [:div {:class "fourteen wide column removePadding "}
       [:p "How to Back Up, Import, and Migrate Your Apache Kafka Data on Ubuntu 18.04"]
       [:span.tutorialSize
        [:i {:class "eye icon"}] [:span "200K"]]
       [:span.tutorialSize
        [:i {:class "rocketchat icon"}] [:span "200"]]
       [:span.tutorialSize
         [:span "Mr Plock"]]]
      [:div {:class "two wide column"} "5 days ago"]]
     [:div.ui.divider]

     [:div {:class "ui grid container"}
      [:div {:class "fourteen wide column removePadding "}
       [:p "How to Back Up, Import, and Migrate Your Apache Kafka Data on Ubuntu 18.04"]
       [:span.tutorialSize
        [:i {:class "eye icon"}] [:span "200K"]]
       [:span.tutorialSize
        [:i {:class "rocketchat icon"}] [:span "200"]]
       [:span.tutorialSize
         [:span "Mr Plock"]]]
      [:div {:class "two wide column"} "5 days ago"]]
     [:div.ui.divider]

     [:div {:class "ui grid container"}
      [:div {:class "fourteen wide column removePadding "}
       [:p "How to Back Up, Import, and Migrate Your Apache Kafka Data on Ubuntu 18.04"]
       [:span.tutorialSize
        [:i {:class "eye icon"}] [:span "200K"]]
       [:span.tutorialSize
        [:i {:class "rocketchat icon"}] [:span "200"]]
       [:span.tutorialSize
         [:span "Mr Plock"]]]
      [:div {:class "two wide column"} "5 days ago"]]
     [:div.ui.divider]

     [:div {:class "ui grid container"}
      [:div {:class "fourteen wide column removePadding "}
       [:p "How to Back Up, Import, and Migrate Your Apache Kafka Data on Ubuntu 18.04"]
       [:span.tutorialSize
        [:i {:class "eye icon"}] [:span "200K"]]
       [:span.tutorialSize
        [:i {:class "rocketchat icon"}] [:span "200"]]
       [:span.tutorialSize
         [:span "Mr Plock"]]]
      [:div {:class "two wide column"} "5 days ago"]]]

    [:center [:div {:class "ui animated button", :tabindex "0"}
              [:div {:class "visible content"} "Load More Results"]
              [:div {:class "hidden content"}
               [:i {:class "right arrow icon"}]]]]]])
