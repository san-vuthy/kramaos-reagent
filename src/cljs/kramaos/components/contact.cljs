(ns kramaos.components.contact)

(defn contact
  []
  [:dev
    [:div {:class "ui container containerPress"}
      [:center
        [:h1 {:class "Contact_Title"} "Get in Touch"]
        [:h5 {:class "Contact_Desc"} "Have a question? Sent us a note using the form  "
          [:br] "below and some from the KOSMOS team will be in touch soon."]]]
    [:div {:class "ui container containerContact"}
      [:div {:class "ui large form"}
       [:div {:class "two fields"}
         [:div {:class "field"} [:input {:type "text" :placeholder "Name"}]]
         [:div {:class "field"} [:input {:type "text" :placeholder "Email"}]]]
       [:div {:class "field"} [:input {:type "email" :placeholder "Reason for getting in touch"}]]
       [:div {:class "field"} [:input {:type "text" :placeholder "Subject"}]]
       [:div {:class "field"} [:textarea  {:type "text" :rows "5" :placeholder "Brief description of how KOSMOS can help you"}]]]
      ;  [:div {:class "ui submit button  violet  right floated btnme animated fade"}]
      [:center 
       [:div {:class "ui animated button submit violet", :tabindex "0"}
        [:div {:class "visible content"} "Submit"]
        [:div {:class "hidden content"}
          [:i {:class "right arrow icon"}]]]]]])
      
        
