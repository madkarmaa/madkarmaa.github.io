<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { generateNext } from '@/utils';

	type Props = {
		onend?: () => void;
		messages: string[];
		complete?: boolean;
	};

	let { onend = () => {}, messages, complete = $bindable(false) }: Props = $props();
	messages = messages.map((message) => `[    0.${generateNext()}] ${message}`);

	let logs: string[] = $state([]);

	onMount(() => {
		let i = 0;
		const interval = setInterval(() => {
			if (i < messages.length) {
				logs = [...logs, messages[i]];
				i++;
			} else {
				clearInterval(interval);
				setTimeout(() => {
					complete = true;
				}, 500);
				onend();
			}
		}, 100);
	});
</script>

{#if !complete}
	<div class="boot-screen noselect z-40" transition:fade={{ duration: 100 }}>
		{#each logs as log}
			<div class="log-line" transition:fly={{ y: 5, duration: 50 }}>
				{log}
			</div>
		{/each}
	</div>
{/if}

<style>
	.boot-screen {
		background-color: black;
		color: #ffffff;
		font-family: 'Courier New', monospace;
		padding: 10px;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1000;
		overflow-y: auto;
		text-align: left;
	}

	.log-line {
		margin: 0;
		padding: 0;
		font-size: 14px;
		white-space: pre;
		line-height: 1.2;
	}
</style>
