<script lang="ts">
	import { onMount } from 'svelte';
	import BootSequence from '@/components/BootSequence.svelte';
	import { car } from '@/stores';
	import { bootMessages } from '@/constants';
	import Neko from '@/components/Neko.svelte';

	let bootComplete: boolean = $state(false);
	let title: string = $state('');

	$effect(() => {
		title = bootComplete ? '/bin/mksh' : 'booting...';
	});

	onMount(() => {
		try {
			Object.defineProperty(window, 'OMG_CARRRRRR', {
				get: () => {
					car.set(!$car);
				}
			});
		} catch {}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<BootSequence messages={bootMessages} bind:complete={bootComplete} />

{#if $car}
	<Neko />
{/if}
