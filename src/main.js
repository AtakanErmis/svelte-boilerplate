import "@babel/polyfill";

import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'world2'
	}
});

window.app = app;

export default app;