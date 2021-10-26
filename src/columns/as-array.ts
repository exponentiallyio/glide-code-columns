import * as glide from "../glide";

export default glide
    .columnNamed("Create array")
    .withCategory("Array")
    .withReleased("direct")
    .withDescription(`Convert a solitary value to an array`)
    .withPrimitiveArrayResult()
    .withRequiredPrimitiveParam("value")

    .withTest({ value: "a" }, ["a"])
    .withTest({ value: 3 }, [3])

    .run(({ value }) => {
        return [value];
    });
