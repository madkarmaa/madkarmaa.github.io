<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	type Props = {
		onend?: () => void;
		messages: string[];
		complete?: boolean;
	};

	let { onend = () => {}, messages, complete = $bindable(false) }: Props = $props();

	let lastNumber = 0;
	export function generateNextAddress(): string {
		const increment = Math.floor(Math.random() * 50) + 1; // Random increment between 1 and 50
		lastNumber = Math.min(lastNumber + increment, 999999); // Ensure max is 999999

		// Convert the number to a string and pad it to 6 digits
		return lastNumber.toString().padStart(6, '0');
	}

	messages = messages.map((message) => `[    0.${generateNextAddress()}] ${message}`);
	let logs = $state<string[]>([]);

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
				}, 250);
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
		font-family: 'Courier New', 'Courier', monospace;
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
