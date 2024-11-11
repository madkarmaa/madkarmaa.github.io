<script lang="ts">
	import BootSequence from '@/components/BootSequence.svelte';
	import Terminal from '@/components/Terminal.svelte';
	import { type Command } from '@/types';

	let bootComplete: boolean = $state(false);

	const messages: string[] = ['skibidi sigma', 'hi :3', 'explod'];

	const commands: Command[] = [
		{
			name: 'sus',
			output: () => 'amogus'
		}
	];
</script>

<BootSequence {messages} bind:complete={bootComplete} />

{#if bootComplete}
	<Terminal {commands} />
{/if}
