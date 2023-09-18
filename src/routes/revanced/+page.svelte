<script>
	import Wave from '$components/revanced/Wave.svelte';
	import RevancedHome from '$components/revanced/RevancedHome.svelte';
	import Meta from '$components/Meta.svelte';
</script>

<Meta
	title="madkarmaa.github.io/revanced"
	description="Troubles with app versions for ReVanced? This is the right place! NOT affiliated with ReVanced or YouTube."
	url="https://madkarmaa.github.io/revanced"
	image="https://revanced.app/embed.png"
/>
<main>
	<div class="wrap">
		<RevancedHome />
	</div>
</main>
<Wave />

<style>
	main {
		display: flex;
		justify-content: center;
		flex: 1;
	}

	.wrap {
		display: flex;
		justify-content: space-evenly;
		gap: 25px;
		flex: 1;
		margin-top: 5%;
	}

	/* mobile */
	@media (pointer: none), (pointer: coarse) {
		.wrap {
			flex-direction: column;
			margin: 7% 7% 30% 7%;
		}
	}
</style>
