import Vue from "vue";

import lyticus from "~/lyticus";

// Track the navigator
lyticus.trackNavigator();

/*
Add $lyticus to the Vue prototype
This makes its methods easily accessible from within your components
*/
Vue.prototype.$lyticus = lyticus;
