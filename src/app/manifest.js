import { faConstants } from "../../public/locales/fa/common";

// Web app manifest. Next.js builds it to /manifest.webmanifest and adds the link tag.
export const dynamic = "force-static";

export default function manifest() {
  return {
    name: faConstants.pageTitle,
    short_name: faConstants.companyName,
    description: faConstants.companyDescription,
    lang: "fa",
    dir: "rtl",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#86508e",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
