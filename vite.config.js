import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [vue()],
	build: {
		lib: {
			entry: resolve(__dirname, 'src/components/index.js'),
			name: 'VueComponentLib',
			fileName: (format) => `vue-component-lib.${format}.js`,
		},
		rollupOptions: {
			// Externalize deps that shouldn't be bundled
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue',
				},
			},
		},
	},
});
