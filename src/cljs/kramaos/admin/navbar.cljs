(ns kramaos.admin.navbar)

(defn menu-name
  [active image name]
  [:div {:class "ui item"}
   [:a {:class active} [:img {:class "image-icon" :src image}] [:span {:class "itemName"} name]]])

(defn drop-down-menu
  [active image name sub-name1 sub-name2]
  [:div {:class "ui dropdown item"}
   [:a {:class active} [:img {:class "image-icon" :src image}] [:span {:class "itemName"} name]
    [:i {:class "dropdown icon"}]
    [:div {:class "menu"}
     [:a {:class "item"}
      [:i {:class "edit icon"}] sub-name1]
     [:a {:class "item"}
      [:i {:class "globe icon"}] sub-name2]]]])

(defn navbar
  []
  [:div {:class "ui grid"}
   [:div {:class "row"}
    [:div {:class "column", :id "sidebar"}
     [:div {:class "ui secondary vertical fluid menu"}
      [menu-name "active item" "/admin/images/home.svg" "Dashboard"]
      [drop-down-menu "active item" "/admin/images/home.svg"  "Posts" "New Post" "All Posts"]
      [drop-down-menu "active item" "/admin/images/home.svg"  "Pages" "New Post" "All Posts"]
      [drop-down-menu "active item" "/admin/images/home.svg"  "Comments" "New Post" "All Posts"]
      [drop-down-menu "active item" "/admin/images/home.svg"  "Users" "New Post" "All Posts"]]]
    [:div {:class "column", :id "content"}
     [:div {:class "ui grid"}
      [:div {:class "row"}
       [:h1 {:class "ui huge header"} "Hel"]]
      [:div {:class "ui divider"}]]]]])
