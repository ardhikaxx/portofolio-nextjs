import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = "https://yanuar-ardhika.vercel.app";

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
        ],
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
