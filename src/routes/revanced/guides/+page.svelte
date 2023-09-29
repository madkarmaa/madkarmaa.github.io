<script>
	import Wave from '$components/revanced/Wave.svelte';
	import Meta from '$components/Meta.svelte';
</script>

<Meta
	title="madkarmaa.github.io/revanced/guides"
	description="Troubles with ReVanced usage? This is the right place! NOT affiliated with ReVanced or YouTube."
	url="https://madkarmaa.github.io/revanced/guides"
	image="https://revanced.app/embed.png"
/>
<main>
	<div class="wrap">
		<div class="center">
			<h1>Here's a list of useful guides</h1>
			<p>
				To help you using/installing
				<span style="color: var(--accent-color);">ReVanced</span>
			</p>
		</div>
	</div>
</main>
<Wave />

<style>
	main {
		display: flex;
		justify-content: center;
		flex: 1;
	}

	h1 {
		color: var(--accent-color);
		text-align: center;
		vertical-align: middle;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 15px;
	}
</style>
