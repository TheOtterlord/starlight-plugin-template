import type { StarlightPlugin } from '@astrojs/starlight/types'

export default function createIntegration(): StarlightPlugin {
	// See the Plugin API docs for full details
	// https://starlight.astro.build/reference/plugins/
	return {
		name: 'starlight-plugin-template',
		hooks: {
      setup({ logger }) {
        logger.info('Hello Starlight!')
      }
		},
	};
}
