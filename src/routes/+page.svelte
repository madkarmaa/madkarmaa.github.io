<script lang="ts">
	import BootSequence from '@/components/BootSequence.svelte';
	import { bootMessages } from '@/constants';

	let bootComplete: boolean = $state(false);
	let title: string = $state('');

	$effect(() => {
		title = bootComplete ? '/bin/mksh' : 'booting...';
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<BootSequence messages={bootMessages} bind:complete={bootComplete} />
