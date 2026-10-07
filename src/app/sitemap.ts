import { projects } from "@/data/projects";
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";


const sitemap = (): MetadataRoute.Sitemap => {

    const staticPages = [
        "",
        "/about",
        "/experience",
        "/projects",
        "/contact",
    ];

    const staticRoutes: MetadataRoute.Sitemap = staticPages.map((route) => ({
        url: `${siteConfig.url}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));

    const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: project.featured ? 0.8 : 0.6,
    }));

    return [...staticRoutes, ...projectRoutes];
}

export default sitemap;