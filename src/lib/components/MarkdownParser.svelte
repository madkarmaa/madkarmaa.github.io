<script lang="ts">
	import { marked as parse } from 'marked';

	type Props = { input: string };
	let { input = $bindable('') }: Props = $props();

	$effect(() => {
		// https://marked.js.org/#usage
		input = input.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '').trim();
	});
</script>

<div class="markdown-container">
	<!-- TODO: sanitization -->
	{@html parse(input, { async: false })}
</div>

<style>
</style>
