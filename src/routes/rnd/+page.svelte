<script>
	import { getRandomNumber } from '../../lib/random.js';
	import { onMount } from 'svelte';

	let rndNumber;

	onMount(() => {
		let searchParams = new URLSearchParams(window.location.href);
		let from = parseInt(searchParams.get('from')) || 0;
		let to = parseInt(searchParams.get('to')) || 0;
		rndNumber = getRandomNumber(from, to);
	});
</script>

<div class="flex flex-1 justify-center items-center">
	<span class="text-9xl">
		{#if rndNumber !== undefined}
			{rndNumber}
		{/if}
	</span>
</div>
