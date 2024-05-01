import * as glide from "../glide";

export default glide
  .columnNamed("Text Slice")
  .withReleased("direct")
  .withCategory("Text")
  .withDescription(`Gets a substring out of text, from zero-indexed "start" with an optional length, without truncating the last word and adding "..." at the end`)
  .withStringResult()
  .withRequiredStringParam("text")
  .withRequiredNumberParam("start")
  .withNumberParam("length")
  .withTest({ text: "substring this", start: 0 }, "substring this...")
  .withTest({ text: "substring this", start: 3 }, "string this...")
  .withTest({ text: "substring this", start: 3, length: 6 }, "string...")
  .withTest({ text: "substring this", start: 0, length: 3 }, "substring...")
  .run(({ text, start, length }) => {
    if (start >= text.length) {
      return "";
    }

    let end = length === undefined ? text.length : length + start;
    end = Math.min(end, text.length);

    let substring = text.substring(start, end);

    // Find the position of the last space within the substring
    const lastSpaceIndex = substring.lastIndexOf(" ");

    if (lastSpaceIndex !== -1) {
      // If a space is found, truncate the substring up to the last space
      substring = substring.substring(0, lastSpaceIndex);
    }

    // Add "..." to the end of the substring
    substring += "...";

    return substring;
  });
