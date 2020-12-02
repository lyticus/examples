import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Lyticus from "lyticus";

// Create Lyticus instance
const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development",
  // Optional: use route name instead of path
  getPath: () => {
    const route = router.currentRoute;
    if (!route || !route.name) {
      return window.location.pathname;
    }
    return route.name;
  },
});

// Track the navigator
lyticus.trackNavigator();

// Add global navigtion guard to automatically track page views
router.afterEach(() => {
  lyticus.trackPage();
});

/*
Add $lyticus to the Vue prototype
This makes its methods easily accessible from within your components
*/
Vue.prototype.$lyticus = lyticus;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
