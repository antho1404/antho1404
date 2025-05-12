import type { MetadataRoute } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const thoughtsPath = path.join(process.cwd(), "src", "app", "thoughts");
  const thoughts = await fs.readdir(thoughtsPath, {
    recursive: true,
    withFileTypes: true,
  });

  return [
    {
      url: "https://antho1404.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...thoughts
      .filter((entry) => entry.isFile() && entry.name === "page.mdx")
      .map((entry) =>
        path.dirname(
          path.relative(thoughtsPath, path.join(entry.parentPath, entry.name))
        )
      )
      .map(
        (path) =>
          ({
            url: `https://antho1404.com/thoughts/${path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            images: [`https://antho1404.com/thoughts/${path}/opengraph-image`],
          } satisfies MetadataRoute.Sitemap[number])
      ),
  ];
}
