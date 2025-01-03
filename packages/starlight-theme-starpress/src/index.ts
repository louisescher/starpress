import type { StarlightPlugin, StarlightUserConfig } from "@astrojs/starlight/types";
import type { AstroIntegration } from 'astro'

type ComponentName = keyof NonNullable<StarlightUserConfig['components']>

function createComponents(components: ComponentName[]) {
	const obj: StarlightUserConfig['components'] = {}
	components.map(c => {obj[c] = `starlight-theme-starpress/components/${c}.astro`})
	return obj
}

function integration(): AstroIntegration {
	return {
		name: 'starlight-theme-starpress',
		hooks: {
			'astro:config:setup': ({ updateConfig }) => {
				updateConfig({
					vite: {
						ssr: {
							noExternal: ['@fontsource-variable/vazirmatn']
						}
					}
				})
			}
		}
	}
}

export default function createPlugin(): StarlightPlugin {
	return {
		name: "starlight-theme-starpress",
		hooks: {
			setup: ({ config, updateConfig, addIntegration }) => {
				updateConfig({
					components: createComponents([
						'Head'
					]),
					customCss: [
						"starlight-theme-starpress/styles/theme.css",
						...(config.customCss ?? []),
					]
				});
				addIntegration(integration())
			},
		},
	};
}
