import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({ precompress: true }),
		alias: {
			$lib: 'src/lib',
			$components: 'src/components',
			$: 'src'
		}
	}
};

export default config;
