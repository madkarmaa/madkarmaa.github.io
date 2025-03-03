<script lang="ts">
	import PostCard from './lib/PostCard.svelte';
	import { MarkdownParser } from '@/components/markdown-parser';

	let { data } = $props();
	const { posts, content } = data;
</script>

<main class="p-6">
	{#if content}
		<MarkdownParser input={content} />
	{:else if posts}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			{#each posts as post, i (post.name)}
				<PostCard name={post.name} readTime={post.readTime} index={i} />
			{/each}
		</div>
	{/if}
</main>
