(ns kramaos.data.cards
  (:require [reagent.core :refer [atom]]))

(def cards-data (atom {:card-01 {:id :card-01
                                 :img "img/icons/kosmos_open_source.svg"
                                 :title "Completely Open Source"
                                 :desc "Out of the box! Clean and light, and very customizable from the look and feel to the very kernel. "}
                       :card-02 {:id :card-02
                                 :img "img/icons/kosmos_dually_build_in.svg"
                                 :title "Developers Friendly"
                                 :desc "Built with developers in mind, yet keep it simple for every users to benefits from the world of technology and internet"}
                       :card-03 {:id :card-03
                                 :img "img/icons/kosmos_user_friednly.svg"
                                 :title "Desktop Environment"
                                 :desc "We decided to stick with KDE with KOSMOS flavor, since KDE community is great. Users will have no worry getting support, if they decide to customize their own OS"}
                       :card-04 {:id :card-04
                                 :img "img/icons/kosmos_docker.svg"
                                 :title "Apps and Languages"
                                 :desc "KOSMOS comes with minimal apps and programming languages for modern development pre-installed such as Python, Go, Rust, Clojure. Check out for yourself."}
                       :card-05 {:id :card-05
                                 :img "img/icons/kosmos_security.svg"
                                 :title "Security"
                                 :desc "No antivirus needed! Period."}
                       :card-06 {:id :card-06
                                 :img "img/icons/kosmos_performance.svg"
                                 :title "Speedy"
                                 :desc "No hidden agenda. Once you installed, the system is yours. Thus, there is no interruption in the performance."}}))
