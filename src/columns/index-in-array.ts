import * as glide from "../glide";

// FIXME - Stringified numbers and booleans

export default glide
    .columnNamed("Index of")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Finds the first index of an element in an array`)
    .withNumberResult()
    .withRequiredPrimitiveArrayParam("values")
    .withPrimitiveParam("toFind", "To find")

    .withTest({ values: ["a", "b", "b", "c"], toFind: "b" }, 1)
    .withTest({ values: [3, 20, 100], toFind: 20 }, 1)
    .withTest({ values: [3, 20, 100], toFind: 25 }, undefined)

    .run(({ values, toFind }) => {
        const result = values.indexOf(toFind);
        return result === -1 ? undefined : result;
    });
