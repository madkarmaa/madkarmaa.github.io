<script lang="ts">
	import { onMount } from 'svelte';
	import BootSequence from '@/components/BootSequence.svelte';
	import Terminal from '@/components/Terminal.svelte';
	import { type Command } from '@/types';
	import { randomBrainrot } from '@/utils';
	import { brainrot } from '@/stores';

	let intervalId: number = 0;
	let bootComplete: boolean = $state(false);
	let title: string = $state('Hi :>');

	const messages: string[] = ['skibidi sigma', 'hi :3', 'explod'];

	const commands: Command[] = [];

	$effect(() => {
		if ($brainrot)
			intervalId = setInterval(() => {
				title = randomBrainrot();
			}, 30000);
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

<BootSequence {messages} bind:complete={bootComplete} />

{#if bootComplete}
	<Terminal {commands} />
{/if}
