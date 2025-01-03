import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starpress from "starlight-theme-starpress";

// https://astro.build/config
export default defineConfig({
	// TODO: add site
	// site: '',
	integrations: [
		starlight({
			title: "Starpress",
			favicon: "/favicon.svg",
			social: {
				github: "https://github.com/louisescher/starlight-theme-starpress",
			},
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: "Install", slug: "guides/install" },
					],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
			plugins: [starpress()],
		}),
	],
});
