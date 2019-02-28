(ns kramaos.components.footer)

(defn footer
  []
  [:div {:class "ui inverted vertical footer segment"}
    [:div {:class "ui center aligned container"}
      [:img {:src "img/logo/footer-logo.png", :class "ui centered image footerImage"}]
      [:p "Copyright © 2018 KOSMOS by KOOMPI"]
      ; [:div {:class "ui horizontal inverted link list"}
      ;  [:a {:class "item", :href "#"} "Site Map"]
      ;  [:a {:class "item", :href "#"} "Contact Us"]
      ;  [:a {:class "item", :href "#"} "Terms and Conditions"]
      ;  [:a {:class "item", :href "#"} "Privacy Policy"]]
      ; [:div {:class "ui inverted section divider mobile hidden"}]
      ]
    ; [:div {:class "ui container mobile hidden"}
    ;   [:div {:class "ui stackable two column grid"}
    ;    [:div {:class "column"}
    ;      [:div {:class "ui horizontal inverted link list"}
    ;        [:a {:class "item", :href "#"} "Site Map"]
    ;        [:a {:class "item", :href "#"} "Contact Us"]]]
    ;    [:div {:class "column"}
    ;      [:div {:class "ui horizontal inverted link list right floated"}
    ;        [:a {:class "item", :href "#"} "Site Map"]
    ;        [:a {:class "item", :href "#"} "Contact Us"]]]]]
           ])
