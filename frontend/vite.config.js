import { sveltekit } from '@sveltejs/kit/vite';

server: {
    host: true
}

/** @type {import('vite').UserConfig} */

export default {
        plugins: [ sveltekit() ]
};
