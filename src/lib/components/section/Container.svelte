<script lang="ts">
	import { setContext, type Snippet } from 'svelte';
	import { type TextSide } from '.';

	let index: number = 0;
	const getNextTextSide = (): TextSide => (index++ % 2 === 0 ? 'left' : 'right');

	setContext('textSide', getNextTextSide);

	type Props = { children: Snippet };
	let { children }: Props = $props();
</script>

<div class="section-container">
	{@render children()}
</div>

<style>
	.section-container {
		padding: 1rem;
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-direction: column;
	}
</style>
