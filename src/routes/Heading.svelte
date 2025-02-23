<script lang="ts">
	import { randomlyTrue, isMobileDevice } from '@/utils';

	type Props = { text: string };
	let { text }: Props = $props();

	const getRandomChar = () => String.fromCharCode(65 + Math.floor(Math.random() * 57));

	const onHover = (originalChar: string, element: HTMLElement) => {
		if (!randomlyTrue(5)) return;

		const intervalId = setInterval(() => {
			element.textContent = getRandomChar();
		}, 30);

		setTimeout(() => {
			clearInterval(intervalId);
			element.textContent = originalChar;
		}, 750);
	};
</script>

<h1 id="heading" class="noselect">
	{#each text.trim() as letter, i (i)}
		{#if isMobileDevice()}
			<span>{letter}</span>
		{:else}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<span onmouseenter={(e) => onHover(letter, e.currentTarget)}>{letter}</span>
		{/if}
	{/each}
</h1>

<style>
	#heading {
		color: var(--text);

		display: flex;
		align-items: center;
		justify-content: center;

		min-height: 100vh;

		mix-blend-mode: color-dodge;
	}

	#heading > span {
		font-size: 12vw;
	}
</style>
