import buildOgImage from "@/lib/og-image";

export const alt =
  "I Spent 10 Years in Web3. Here’s Why I’m No Longer Hyped — And What Needs to Change";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    title: alt,
    size,
    description:
      "Web3 didn’t fail because of tech — it failed because it chased tokens over users. After 10 years building in the space, I’m stepping out of the hype and back to building real products with real value.",
  });
}
