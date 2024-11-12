<script lang="ts">
	import { onMount } from 'svelte';
	import BootSequence from '@/components/BootSequence.svelte';
	import { randomBrainrot, secToMs } from '@/utils';
	import { brainrot } from '@/stores';
	import { bootMessages } from '@/constants';

	let intervalId: number = 0;
	let bootComplete: boolean = $state(false);
	let title: string = $state('Hi :>');

	$effect(() => {
		if ($brainrot)
			intervalId = setInterval(() => {
				title = randomBrainrot();
			}, secToMs(30));
		else clearInterval(intervalId);
	});

	onMount(() => {
		try {
			Object.defineProperty(window, 'I_WANT_THE_BRAINROT', {
				get: () => {
					brainrot.set(!$brainrot);
					if ($brainrot) console.log('%c So skibidi', 'color: red; font-size: 4rem;');
				}
			});
		} catch {}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<BootSequence messages={bootMessages} bind:complete={bootComplete} />
