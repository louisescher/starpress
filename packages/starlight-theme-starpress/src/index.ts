import type { StarlightPlugin, StarlightUserConfig } from "@astrojs/starlight/types";

type ComponentName = keyof NonNullable<StarlightUserConfig['components']>

function createComponents(components: ComponentName[]) {
	const obj: StarlightUserConfig['components'] = {}
	components.map(c => {obj[c] = `starlight-theme-starpress/components/${c}.astro`})
	return obj
}

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-theme-starpress",
		hooks: {
			setup: ({ config, updateConfig }) => {
				updateConfig({
					components: createComponents([
						'Head'
					]),
					customCss: [
						"starlight-theme-starpress/styles/theme.css",
						...(config.customCss ?? []),
					]
				});
			},
		},
	};
}
