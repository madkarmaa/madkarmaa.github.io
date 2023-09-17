<script>
	export let text;
	text = ['dark', 'light'].includes(text) ? text : 'light';
</script>

<!-- <footer class:dark-text={text === 'dark'} class:light-text={text === 'light'}> -->
<footer class={text === 'dark' ? 'dark-text' : 'light-text'}>
	<div>
		<a href="//github.com/madkarmaa" target="_blank" rel="noopener noreferrer">@madkarmaa</a>
		<span>| Not affiliated with</span>
		<a href="//github.com/ReVanced" target="_blank" rel="noopener noreferrer">ReVanced</a>
		<span>or</span>
		<a href="//youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
	</div>
</footer>

<style>
	footer {
		margin: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: auto;
	}

	a {
		font-weight: 700;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.dark-text * {
		color: var(--grey-four);
	}

	.light-text * {
		color: var(--accent-color);
	}
</style>
