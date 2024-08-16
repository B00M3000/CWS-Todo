import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config() // Load Environment Variables

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		port: process.env.PORT || 3000,
	}
});
