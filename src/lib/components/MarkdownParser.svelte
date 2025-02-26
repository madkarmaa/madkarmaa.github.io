<script lang="ts">
	import { marked as parse } from 'marked';

	type Props = { input: string };
	let { input = $bindable('') }: Props = $props();

	$effect(() => {
		// https://marked.js.org/#usage
		input = input.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '').trim();
	});
</script>

<main class="markdown-container p-8 flex flex-col gap-4">
	<!-- TODO: sanitization -->
	{@html parse(input, { async: false })}
</main>

<style>
	main :global(h1) {
		font-size: 2.4rem;
		text-align: center;
		color: var(--primary);
		font-weight: 600;
	}

	main :global(h2),
	main :global(h3),
	main :global(h4),
	main :global(h5),
	main :global(h6) {
		color: var(--accent);
		font-weight: 600;
	}

	main :global(h2) {
		font-size: 2rem;
	}

	main :global(h3) {
		font-size: 1.8rem;
	}

	main :global(h4) {
		font-size: 1.6rem;
	}

	main :global(h5) {
		font-size: 1.4rem;
	}

	main :global(h6) {
		font-size: 1.2rem;
	}

	main :global(em) {
		font-style: italic;
	}

	main :global(strong) {
		font-weight: 600;
	}

	main :global(del) {
		text-decoration: line-through;
		text-decoration-color: var(--primary);
	}

	main :global(ol) {
		list-style: decimal inside;
	}

	main :global(ul) {
		list-style: disc inside;
	}

	main :global(ol > ::marker),
	main :global(ul > ::marker) {
		color: var(--primary);
	}

	main :global(ol:has(> li > ol)),
	main :global(ol:has(> li > ul)),
	main :global(ul:has(> li > ol)),
	main :global(ul:has(> li > ul)) {
		padding-left: 1rem;
	}

	main :global(li > p) {
		display: inline-block;
	}

	main :global(a) {
		@apply transition-all;

		color: var(--primary);
		text-decoration: none;
		cursor: pointer;
	}

	main :global(a:hover) {
		color: var(--accent);
		text-decoration: underline;
	}

	main :global(input[type='checkbox']) {
		border: none;
		color: var(--accent);
	}

	main :global(img) {
		@apply rounded-lg;
		max-width: 80%;
	}

	main :global(table) {
		width: 100%;
		border-collapse: collapse;
	}

	main :global(th) {
		color: var(--accent);
		font-size: 1.2rem;
		font-weight: 600;
	}

	main :global(td) {
		padding: 0.3rem;
	}

	main :global(table),
	main :global(td),
	main :global(th) {
		border: 2px solid var(--primary);
	}

	main :global(code:not([class])) {
		@apply rounded-lg;

		background-color: var(--accent);
		padding: 0.25rem;
	}

	main :global(hr) {
		border-top: 2px solid var(--primary);
	}
</style>
