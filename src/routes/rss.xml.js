import { posts } from "$lib/posts";
import { title, website, description } from "$lib/info";

export async function get() {
  const body = xml((await posts()).map((x) => x.metadata));

  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml",
  };
  return {
    headers,
    body,
  };
}

const xml = (
  posts
) => `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
  <channel>
    <title>${title}</title>
    <link>${website}</link>
    <description>${description}</description>
    ${posts
      .map(
        (post) =>
          `
        <item>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link>${website}/posts/${post.slug}/</link>
          <pubDate>${new Date(post.date)}</pubDate>
          <!--
          <content:encoded>${post.preview} 
            <div style="margin-top: 50px; font-style: italic;">
              <strong>
                <a href="${website}/posts/${post.slug}">
                  Keep reading
                </a>
              </strong>  
            </div>
          </content:encoded>
          -->
        </item>
      `
      )
      .join("")}
  </channel>
</rss>`;
