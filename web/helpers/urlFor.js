import imageUrlBuilder from "@sanity/image-url";
import client from "./sanityClient";

export const myLoader = ({ src, width, quality }) => {
    return `${src}`;
};

const builder = imageUrlBuilder(client);
export function urlFor(source) {
    return builder.image(source);
}
