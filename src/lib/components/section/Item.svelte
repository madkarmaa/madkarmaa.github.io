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
	}

	.image-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left {
		text-align: start;
		flex-direction: row-reverse;
	}

	.right {
		text-align: end;
		flex-direction: row;
	}
</style>
