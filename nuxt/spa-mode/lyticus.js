import Lyticus from "lyticus";

const lyticus = new Lyticus("your-website-id", {
  development: process.env.NODE_ENV === "development"
});

export default lyticus;
