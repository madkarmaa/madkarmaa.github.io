<script>
	export let wordBreak = false;
</script>

<h1>
	<span class="left" class:block={wordBreak}>
		<slot name="left" />
	</span>
	<span class="right" class:block={wordBreak}>
		<slot name="right" />
	</span>
</h1>

<style>
	.right {
		color: var(--accent-color);
	}

	.left {
		color: var(--white);
	}
</style>
