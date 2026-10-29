import type { MetadataRoute } from "next";
import { projects } from "./data/projects_data";
import { SITE_URL } from "./config/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
            images: [`${SITE_URL}/og-image.jpg`, `${SITE_URL}/img/sticker.webp`],
        },
        {
            url: `${SITE_URL}/jasa-pembuatan-website`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1.0,
            images: [`${SITE_URL}/og-image.jpg`],
        },
        {
            url: `${SITE_URL}/about`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
            images: [`${SITE_URL}/img/foto-profile.webp`],
        },
        {
            url: `${SITE_URL}/project`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
            images: [`${SITE_URL}/og-image.jpg`],
        },
        {
            url: `${SITE_URL}/cv`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.85,
        },
        {
            url: `${SITE_URL}/awards`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${SITE_URL}/publications`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${SITE_URL}/project/${project.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
        images: [`${SITE_URL}${project.image}`],
    }));

    return [...staticRoutes, ...projectRoutes];
}
