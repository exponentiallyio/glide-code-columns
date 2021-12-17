import * as glide from "../glide";

import marked, { parse } from "marked";

export default glide
    .columnNamed("Markdown to HTML")
    .withCategory("Text")

    // Not sure if we can run this unsandboxed
    .withReleased("sandboxed")

    .withDescription(`Convert markdown to HTML.`)

    .withRequiredStringParam("markdown")
    .withBooleanParam("inline")
    .withStringResult()

    .withTest({ markdown: `*Hello*`, inline: true }, "<em>Hello</em>")

    .run(({ markdown, inline = false }) => {
        const parse = inline ? marked.parseInline : marked;
        return parse(markdown);
    });
