import Vue from "vue";
import store from "./store";
import vueCustomElement from "vue-custom-element";

import widgets from "./configComponent.js";

Vue.config.productionTip = false;
Vue.use(vueCustomElement);

Vue.config.ignoredElements = widgets.map((widget) => {
  widget[1].store = store;
  Vue.customElement(widget[0], widget[1]);

  return widget[0];
})