import { useEffect } from "react";

const SITE_URL = "https://thesmilemax.vercel.app";

const DEFAULT_IMAGE = `${SITE_URL}/images/hero-dental.jpg`;

const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;

    const setMeta = (name, content, attribute = "name") => {
      let meta = document.head.querySelector(
        `meta[${attribute}="${name}"]`
      );

      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", content);
    };

    /* --------------------------------
       BASIC SEO
    -------------------------------- */

    document.title = title;

    setMeta("description", description);

    setMeta(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    /* --------------------------------
       CANONICAL
    -------------------------------- */

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    /* --------------------------------
       OPEN GRAPH
    -------------------------------- */

    setMeta("og:type", "website", "property");
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta(
      "og:site_name",
      "The SmileMax Dental Clinic",
      "property"
    );
    setMeta("og:image", image, "property");
    setMeta("og:image:alt", title, "property");
  }, [title, description, path, image]);

  return null;
};

export default SEO;