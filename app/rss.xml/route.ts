export const dynamic = "force-static";

import { blogPosts } from "@/lib/data";

export async function GET() {
  const baseUrl = "https://gwerdonatus.dev";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Gwer Donatus — Backend Systems Engineer</title>
    <link>${baseUrl}</link>
    <description>Technical articles on backend engineering, distributed systems, AI, and software architecture.</description>
    <language>en</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <description>${post.description}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/blog/${post.slug}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
