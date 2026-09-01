import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
  absoluteUrl,
} from "./seoConfig";

/**
 * Updates the tags that already exist in index.html in place rather than appending
 * new ones, so the document never ends up with two <title> or two canonical links.
 */
function setMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(selector.startsWith("link") ? "link" : "meta");
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) el.setAttribute(key, value);
  return el;
}

export default function applySeo({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
}) {
  if (typeof document === "undefined") return;

  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);

  document.title = title;
  setMeta('meta[name="description"]', { name: "description", content: description });
  setMeta('link[rel="canonical"]', { rel: "canonical", href: canonical });
  setMeta('meta[name="robots"]', {
    name: "robots",
    content: noindex ? "noindex, nofollow" : "index, follow",
  });

  // Open Graph
  setMeta('meta[property="og:site_name"]', { property: "og:site_name", content: SITE_NAME });
  setMeta('meta[property="og:type"]', { property: "og:type", content: type });
  setMeta('meta[property="og:title"]', { property: "og:title", content: title });
  setMeta('meta[property="og:description"]', { property: "og:description", content: description });
  setMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
  setMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
  setMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: title });

  // Twitter / X card
  setMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
  setMeta('meta[name="twitter:site"]', { name: "twitter:site", content: TWITTER_HANDLE });
  setMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
  setMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
  setMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
}
