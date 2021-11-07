import svgToMiniDataURI from "mini-svg-data-uri";
import * as glide from "../glide";

export default glide
    .columnNamed("Resize Image")
    .withCategory("Image")
    .withReleased("direct")
    .withDescription("Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.")

    .withRequiredImageParam("image")
    .withImageResult()

    .run(({ image }) => {
        const svg = `
            <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <image width="400" height="400" y="" xlink:href="${image}" />
            </svg>
            `;
        return svgToMiniDataURI(svg);
    });