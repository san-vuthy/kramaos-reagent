(ns kramaos.components.single-tutorial)

(defn single-tutorial
  []
  [:div.ui.container
   [:div {:class "ui centered grid"}
    [:div {:class "computer only row"}
     [:div {:class "six wide tablet three wide computer column"}
      [:h3 "Contents"]
      [:h4 "Step 1 — Creating a Basic React Application"]
      [:h4 "Step 2 — Creating a Component to Show the Droplet Data"]
      [:h4 "Step 3 — Securing Your API Credentials"]
      [:h4 "Step 4 — Making API Calls to DigitalOcean"]
      [:h4 "Step 5 — Displaying Droplet Data in Your Table Component"]
      [:h4 "Step 6 — Styling Your Table Component Using Bootstrap"]]
     [:div {:class "six wide tablet thirteen wide computer column"} "Hello World"]]]])
