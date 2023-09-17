<script>
	import { browser } from '$app/environment';

	function nav_back() {
		if (browser) window.history.back();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<main>
	<h1>This route doesn't exist. <a on:click={nav_back}>Go back</a></h1>
</main>

<style>
	* {
		margin: 0;
		padding: 0;
		outline: none;
		color: #fff;
	}

	a {
		cursor: pointer;
		text-decoration: underline;
	}

	h1 {
		text-align: center;
	}

	main {
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}
</style>
