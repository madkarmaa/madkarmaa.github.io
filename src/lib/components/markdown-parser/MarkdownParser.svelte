<script lang="ts">
	import parser from './highlighter';

	type Props = { input: string };
	let { input = $bindable('') }: Props = $props();

	$effect(() => {
		// https://marked.js.org/#usage
		input = input.replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, '').trim();
	});
</script>

<div class="markdown-container flex flex-col gap-4">
	<!-- TODO: sanitization -->
	{@html parser.parse(input, { async: false })}
</div>

<style>
	.markdown-container :global(h1) {
		font-size: 2.4rem;
		text-align: center;
		color: var(--primary);
		font-weight: 600;
	}

	.markdown-container :global(h2),
	.markdown-container :global(h3),
	.markdown-container :global(h4),
	.markdown-container :global(h5),
	.markdown-container :global(h6) {
		color: var(--accent);
		font-weight: 600;
	}

	.markdown-container :global(h2) {
		font-size: 2rem;
	}

	.markdown-container :global(h3) {
		font-size: 1.8rem;
	}

	.markdown-container :global(h4) {
		font-size: 1.6rem;
	}

	.markdown-container :global(h5) {
		font-size: 1.4rem;
	}

	.markdown-container :global(h6) {
		font-size: 1.2rem;
	}

	.markdown-container :global(em) {
		font-style: italic;
	}

	.markdown-container :global(strong) {
		font-weight: 600;
	}

	.markdown-container :global(del) {
		text-decoration: line-through;
		text-decoration-color: var(--primary);
	}

	.markdown-container :global(ol) {
		list-style: decimal inside;
	}

	.markdown-container :global(ul) {
		list-style: disc inside;
	}

	.markdown-container :global(ol > ::marker),
	.markdown-container :global(ul > ::marker) {
		color: var(--primary);
	}

	.markdown-container :global(ol:has(> li > ol)),
	.markdown-container :global(ol:has(> li > ul)),
	.markdown-container :global(ul:has(> li > ol)),
	.markdown-container :global(ul:has(> li > ul)) {
		padding-left: 1rem;
	}

	.markdown-container :global(li > p) {
		display: inline-block;
	}

	.markdown-container :global(a) {
		@apply transition-all;

		color: var(--primary);
		text-decoration: none;
		cursor: pointer;
	}

	.markdown-container :global(a:hover) {
		color: var(--accent);
		text-decoration: underline;
	}

	.markdown-container :global(input[type='checkbox']) {
		border: none;
		color: var(--accent);
	}

	.markdown-container :global(img) {
		@apply rounded-lg;

		max-width: 80%;
	}

	.markdown-container :global(table) {
		width: 100%;
		border-collapse: collapse;
	}

	.markdown-container :global(th) {
		color: var(--accent);
		font-size: 1.2rem;
		font-weight: 600;
	}

	.markdown-container :global(td) {
		padding: 0.3rem;
	}

	.markdown-container :global(table),
	.markdown-container :global(td),
	.markdown-container :global(th) {
		border: 2px solid var(--primary);
	}

	.markdown-container :global(code:not([class])) {
		@apply rounded-lg;

		background-color: var(--accent);
		padding: 0.25rem;
	}

	.markdown-container :global(hr) {
		border-top: 2px solid var(--primary);
	}
</style>
