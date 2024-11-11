<script lang="ts">
	import { onMount } from 'svelte';
	import { type Command } from '@/types';

	export let commands: Command[];

	commands = commands.filter((c) => c.name !== 'help');
	commands.push({
		name: 'help',
		output: () => `Available commands: ${commands.map((c) => c.name).join(', ')}`
	});

	let currentLine = '';
	let history: string[] = [];
	let commandIndex = 0;

	function handleCommand(cmd: string) {
		cmd = cmd.trim().toLowerCase();
		if (!cmd) return;

		const command = commands.find((c) => c.name === cmd);

		if (command) history = [...history, `> ${command.name}`, command.output()];
		else
			history = [...history, `> ${cmd}`, 'Command not found. Type "help" for available commands.'];

		currentLine = '';
		commandIndex = history.length;
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') handleCommand(currentLine);
	}

	onMount(() => {
		history = ['Welcome to my portfolio! Type "help" to see available commands.'];
	});
</script>

<div class="terminal glass">
	<div class="terminal-header">
		<div class="controls">
			<span class="control close"></span>
			<span class="control minimize"></span>
			<span class="control maximize"></span>
		</div>
		<div class="title noselect">MadKarma's Portfolio</div>
	</div>
	<div class="terminal-window">
		{#each history as line}
			<div class="line">{line}</div>
		{/each}
		<div class="input-line">
			<span class="prompt">$</span>
			<input
				type="text"
				bind:value={currentLine}
				on:keydown={handleKeydown}
				spellcheck="false"
				autocomplete="off"
			/>
		</div>
	</div>
</div>

<style>
	.terminal {
		margin: 2rem auto;
		max-width: 800px;
		height: 500px;
		overflow-y: auto;
		position: relative;
	}

	.terminal-header {
		padding: 0.5rem 1rem;
		border-bottom: 1px solid var(--glass-border);
		display: flex;
		align-items: center;
	}

	.controls {
		display: flex;
		gap: 0.5rem;
	}

	.control {
		width: 12px;
		height: 12px;
		border-radius: 50%;
	}

	.close {
		background-color: #ff5f56;
	}
	.minimize {
		background-color: #ffbd2e;
	}
	.maximize {
		background-color: #27c93f;
	}

	.title {
		position: absolute;
		width: 100%;
		text-align: center;
		left: 0;
		color: #666;
		font-size: 0.8rem;
	}

	.terminal-window {
		padding: 1rem;
		font-family: 'JetBrains Mono', monospace;
	}

	.line {
		margin: 0.25rem 0;
		white-space: pre-wrap;
	}

	.input-line {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.prompt {
		color: #27c93f;
		font-weight: bold;
	}

	input {
		flex: 1;
		background: transparent;
		border: none;
		color: var(--terminal-text);
		font-family: inherit;
		font-size: inherit;
		outline: none;
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: var(--glass-border);
		border-radius: 4px;
	}
</style>
