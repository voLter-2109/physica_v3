import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-03-04",
  useCdn: true,
  ignoreBrowserTokenWarning: true,
  token: process.env.SANITY_API_READ_TOKEN,
});

const builder = imageUrlBuilder(client);

function urlFor(source: string[]) {
  return builder.image(source);
}
