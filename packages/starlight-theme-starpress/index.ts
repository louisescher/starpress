import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-theme-starpress",
		hooks: {
			setup: ({ config, updateConfig }) => {
				updateConfig({
					customCss: [
						"starlight-theme-starpress/styles/theme.css",
						...(config.customCss ?? []),
					]
				});
			},
		},
	};
}
