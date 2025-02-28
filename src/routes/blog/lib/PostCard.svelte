<script lang="ts">
	import { calculateReadTime, catchError, HTTPError } from '@/utils';

	type Props = { name: string; content: string | Promise<string> };
	let { name, content }: Props = $props();

	let contentPromise: ReturnType<typeof catchError<string, typeof HTTPError>> | null = $state(null);
	if (typeof content !== 'string') contentPromise = catchError(content, [HTTPError]);
</script>

<div class="post-card-container flex flex-col gap-3">
	<h2 class="post-name">
		<span class="slash transition-all inline-block text-accent">/</span>
		<span>{name.trim().replace('.md', '')}</span>
	</h2>
	<span class="read-time">
		{#if typeof content === 'string'}
			{calculateReadTime(content)}
		{:else}
			{#await contentPromise}
				Calculating read time...
			{:then result}
				{#if !result || result[0]}
					Could not calculate read time
				{:else}
					~<span class="text-primary">{calculateReadTime(result[1])} min</span> read
				{/if}
			{/await}
		{/if}
	</span>
</div>

<style>
	.post-name > * {
		font-size: 1.3rem;
	}

	.post-card-container:hover .slash {
		transform: rotate(180deg);
		color: var(--primary);
	}
</style>
