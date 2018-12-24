(ns ^:figwheel-no-load kramaos.dev
  (:require
    [kramaos.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
