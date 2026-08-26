import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import applySeo from "../seo/applySeo";
import { resolveRouteSeo } from "../seo/seoConfig";

/**
 * Per-page override. Render inside a page to supply metadata the static route
 * table cannot know ahead of time (e.g. a blog post loaded from Sanity).
 */
export default function Seo({ title, description, image, type, noindex }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const base = resolveRouteSeo(pathname);
    applySeo({
      title: title || base.title,
      description: description || base.description,
      canonical: base.canonical,
      image,
      type,
      noindex: noindex ?? base.noindex ?? false,
    });
  }, [pathname, title, description, image, type, noindex]);

  return null;
}

/** Mounted once in App.jsx — drives metadata for every route from the route table. */
export function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveRouteSeo(pathname);
    applySeo({
      title: seo.title,
      description: seo.description,
      canonical: seo.canonical,
      noindex: seo.noindex ?? false,
    });
  }, [pathname]);

  return null;
}
