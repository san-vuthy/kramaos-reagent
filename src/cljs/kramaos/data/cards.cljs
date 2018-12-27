(ns kramaos.data.cards
  (:require [reagent.core :refer [atom]]))

(def cards-data (atom {:card-01 {:id :card-01
                                 :img "img/icons/kosmos_open_source.svg"
                                 :title "Complete Open Source from the box"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}
                       :card-02 {:id :card-02
                                 :img "img/icons/kosmos_dually_build_in.svg"
                                 :title "Dually Build-in Desktop Support"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}
                       :card-03 {:id :card-03
                                 :img "img/icons/kosmos_user_friednly.svg"
                                 :title "Freindly Development Enviroment"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}
                       :card-04 {:id :card-04
                                 :img "img/icons/kosmos_docker.svg"
                                 :title "Build-in Container Host Enviroment"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}
                       :card-05 {:id :card-05
                                 :img "img/icons/kosmos_security.svg"
                                 :title "Build-in Security at No Cost"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}
                       :card-06 {:id :card-06
                                 :img "img/icons/kosmos_performance.svg"
                                 :title "Spilly Performance"
                                 :desc "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum eget dolor eu ultricies."}}))
