<script lang="ts">
	import { MarkdownParser } from '@/components/markdown-parser';

	let { data } = $props();
	const { content } = data;
</script>

<main class="p-6">
	<MarkdownParser input={content} />
</main>
