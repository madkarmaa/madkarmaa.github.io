<script lang="ts">
	import MarkdownParser from '@/components/MarkdownParser.svelte';

	let { data } = $props();
	const { content } = data;
</script>

<MarkdownParser input={content} />
