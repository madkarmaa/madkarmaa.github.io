<script lang="ts">
	import { getContext, type Snippet } from 'svelte';
	import { type TextSide } from '.';
	import { isMobileDevice } from '@/utils';

	const textSide: TextSide = getContext<() => TextSide>('textSide')();

	type Props = { image?: Snippet; children: Snippet };
	let { image, children }: Props = $props();
</script>

<div class="section-item {textSide} flex gap-8">
	{#if image && !isMobileDevice()}
		<div class="image-container justify-center max-w-full">
			{@render image?.()}
		</div>
	{/if}

	<div class="section-content">
		{@render children()}
	</div>
</div>

<style>
	.section-item > div {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.image-container > :global(img) {
		@apply rounded-lg;
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
