<script lang="ts">
	import { inview, type Options } from 'svelte-inview';
	import { getContext, type Snippet } from 'svelte';
	import { cubicOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';
	import { type TextSide } from '.';
	import { isMobileDevice } from '@/utils';

	const textSide: TextSide = getContext<() => TextSide>('textSide')();

	type Props = { image?: Snippet; children: Snippet };
	let { image, children }: Props = $props();

	const inviewOptions: Options = {
		unobserveOnEnter: true
	};

	let isInView: boolean = $state(false);

	const handleInView = () => {
		isInView = true;
	};
</script>

<div class="inview-detector" use:inview={inviewOptions} oninview_enter={handleInView}>
	{#if isInView}
		<div
			class="section-item {textSide} flex gap-8"
			in:fly={{ y: 100, duration: 750, easing: cubicOut }}
		>
			{#if image && !isMobileDevice()}
				<div class="image-container justify-center max-w-full">
					{@render image()}
				</div>
			{/if}

			<div class="section-content">
				{@render children()}
			</div>
		</div>
	{/if}
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
