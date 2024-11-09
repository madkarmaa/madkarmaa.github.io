<!--
  @component

  A `<span>` element with a typewriter effect.

  ## Props:
  - `hideCaretOnEnd`: A boolean indicating whether the caret should be hidden when the text has been fully typed. Defaults to `false`.

  ## Slot(s):
  - Default content: The text to be displayed. HTML tags will be ignored as it uses `textContent`.

  ## Usage:

  ```svelte
  <TypeWriter hideCaretOnEnd>
    Hello, World!
  </TypeWriter>

  <h1>
    <TypeWriter>
      Hello, World!
    </TypeWriter>
  </h1>
  ```
-->

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
