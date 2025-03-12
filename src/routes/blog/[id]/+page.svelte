<script lang="ts">
	import { MarkdownParser } from '@/components/markdown-parser';

	let { data } = $props();
	const { content, title } = data;
</script>

<svelte:head>
	<title>{title} - blog</title>
</svelte:head>

<main class="p-6">
	<div class="mb-4">
		<a href="/blog" class="text-primary hover:text-accent transition-colors">&larr; Back to posts</a
		>
	</div>

	<MarkdownParser input={content} />
</main>
