(ns kramaos.data.blogs
  (:require [reagent.core :refer [atom]]))

(def blog-atom (atom { :blog-01 { :id :blog-01
                                 :link "https://medium.com/@koompi/krita-perfect-for-digital-painting-per-installed-on-koompi-3605ef0f6b81"
                                 :img "https://cdn-images-1.medium.com/max/800/1*3Zq6sWpCfM1V4UZs58s8GQ.png"
                                 :title "Krita Perfect for Digital Painting Per Installed on KOOMPI"
                                 :desc "Mainly whether you are a digital artist, illustrator, graphic designer, VFX person you need good practical tools ..."}
                       :blog-02 {:id :blog-02
                                 :link "https://medium.com/@koompi/introducing-gimp-a-free-and-open-source-graphics-editor-program-ready-to-use-on-koompi-2fabfde3e4ed"
                                 :img "https://cdn-images-1.medium.com/max/800/0*095LuMPSMfNuK4hE"
                                 :title "Introducing GIMP. A Free and Open Source Graphics Editor Program ready to use on KOOMPI"
                                 :desc "With today digital modern technology, the method to handling the post processing can be done on your own personal computer, laptop or any software application..."}
                       :blog-03 {:id :blog-03
                                 :link "https://medium.com/@koompi/official-launch-of-koompi-6cf9127a274a"
                                 :img "https://cdn-images-1.medium.com/max/800/1*L_DB_nV6-K1szNnHRNYlHw.jpeg"
                                 :title "Official launch of KOOMPI"
                                 :desc "  KOOMPI launching event received an unexpected turnout, thanks to BarCamp and the volunteers..."}}))
