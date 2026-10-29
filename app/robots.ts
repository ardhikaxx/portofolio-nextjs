import type { MetadataRoute } from "next";
import { SITE_URL } from "./config/site";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: "Googlebot",
                allow: "/",
            },
            {
                userAgent: "Googlebot-Image",
                allow: "/",
            },
            {
                userAgent: "bingbot",
                allow: "/",
            },
            {
                userAgent: "Applebot",
                allow: "/",
            },
            {
                userAgent: "DuckDuckBot",
                allow: "/",
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
