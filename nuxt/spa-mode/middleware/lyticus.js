import lyticus from "~/lyticus";

export default ({ route }) => {
  lyticus.trackPage(route.path);
};
