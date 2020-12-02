import Vue from "vue";

import Lyticus from "lyticus";

export default ({ app }) => {
  // Create Lyticus instance
  const lyticus = new Lyticus("your-website-id", {
    development: process.env.NODE_ENV === "development"
  });

  // Add $lyticus to the Vue prototype (makes its methods easily accessible from within your components)
  Vue.prototype.$lyticus = lyticus;

  // Track the navigator
  lyticus.trackNavigator();

  // Every time the route changes (fired on initialization too)
  app.router.afterEach((to, from) => {
    lyticus.trackPage(to.path);
  });
};
