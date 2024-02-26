<script>
	import { getRandomNumber } from '$lib/random.js';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let rndNumber;

	let show = false;

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.search);
		let from = parseInt(searchParams.get('from')) || 0;
		let to = parseInt(searchParams.get('to')) || 0;
		rndNumber = getRandomNumber(from, to);

		if (rndNumber === 69) {
			show = true;
			setTimeout(() => {
				show = false;
			}, 300);
		}
	});
</script>

<div class="flex flex-1 justify-center items-center">
	<span class="text-9xl">
		{#if rndNumber !== undefined}
			{rndNumber}
		{/if}
	</span>
	{#if show}
		<img transition:fade={{ duration: 300 }} class="absolute" src="/blush.png" alt="blush" />
	{/if}
</div>
