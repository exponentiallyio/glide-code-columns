import * as glide from "../glide";

const kebabCase = require("lodash/kebabCase");

export default glide
  .columnNamed("Kebab Case")
  .withDescription(`"hello world" → "hello-world"`)
  .withStringResult()
  .withStringParam("text")
  .withExample({ text: `helloWorld` })
  .run(({ text }) => (text === undefined ? undefined : kebabCase(text)));
