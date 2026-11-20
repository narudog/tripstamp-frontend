export const siteConfig = {
    name: "TripStamp",
    description: "AI-powered trip planner",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    social: {
        twitter: "@tripstamp",
    },
};

export function absoluteUrl(path: string = ""): string {
    const baseUrl = siteConfig.url.replace(/\/+$/, "");
    const suffix = path ? `/${path.replace(/^\/+/, "")}` : "";
    return `${baseUrl}${suffix}`;
}
