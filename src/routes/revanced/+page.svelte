<script>
	import Wave from '$components/revanced/Wave.svelte';
	import RevancedHome from '$components/revanced/RevancedHome.svelte';
	import Button from '$components/revanced/Button.svelte';
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
	<div>
		<Button type="filled" icon="open_in_new" href="/revanced/guides">Guides</Button>
	</div>
</main>
<Wave />

<style>
	main {
		display: flex;
		justify-content: center;
		gap: 60px;
		flex-direction: column;
		margin-top: 5%;
	}

	.wrap {
		display: flex;
		justify-content: space-evenly;
		gap: 25px;
	}

	main > div:has(button) {
		display: flex;
		justify-content: center;
	}

	/* mobile */
	@media (pointer: none), (pointer: coarse) {
		.wrap {
			flex-direction: column;
		}

		main {
			margin: 7% 7% 30% 7%;
		}
	}
</style>
