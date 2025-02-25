<script lang="ts">
	import { setContext } from 'svelte';
	import { type TextSide } from '.';

	let index: number = 0;
	const getNextTextSide = (): TextSide => (index++ % 2 === 0 ? 'left' : 'right');

	setContext('textSide', getNextTextSide);

	let { children } = $props();
</script>

<div id="section-container">
	{@render children()}
</div>

<style>
	#section-container {
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		flex-direction: column;
	}
</style>
