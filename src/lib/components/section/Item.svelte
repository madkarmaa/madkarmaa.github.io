<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { type TextSide } from '.';

	const textSide: TextSide = getContext<() => TextSide>('textSide')();

	type Props = { image?: Snippet; children: Snippet };
	let { image, children }: Props = $props();
</script>

<div class="section-item {textSide}">
	{#if image}
		<div class="image-container">
			{@render image?.()}
		</div>
	{/if}

	<div class="section-content">
		{@render children()}
	</div>
</div>

<style>
	.section-item {
		display: flex;
	}

	.section-item > div {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.image-container {
		justify-content: center;
	}

	.image-container > :global(img) {
		max-width: 100%;
	}

	.image-container > :global(:not(img)),
	.image-container > :global(img):not(:first-child) {
		display: none;
	}

	.left {
		flex-direction: row-reverse;
	}

	.left > .section-content {
		justify-content: start;
		text-align: start;
	}

	.right {
		flex-direction: row;
	}

	.right > .section-content {
		justify-content: end;
		text-align: end;
	}
</style>
