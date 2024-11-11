<script lang="ts">
	import { TypeWriter } from 'svelte-typewrite';
	import { onMount } from 'svelte';

	export let hideCaretOnEnd: boolean = false;

	let textElement: Element;
	let text: string;
	let mounted: boolean = false;
	const caret: 'hidden' | 'blink' = hideCaretOnEnd ? 'hidden' : 'blink';

	onMount(() => {
		text = textElement.textContent || '';
		mounted = true;
	});
</script>

<!-- Hide after mounting as it's no longer needed after collecting the slot's textContent -->
{#if !mounted}
	<span class="hidden" bind:this={textElement}>
		<slot />
	</span>
{/if}

<!-- Show after the slot's textContent is collected -->
{#if mounted}
	<TypeWriter texts={[text]} repeat={1} endState={{ text: 'typed', caret }} />
{/if}
