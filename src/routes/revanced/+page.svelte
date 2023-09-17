<script>
	import Wave from '$components/Wave.svelte';
	// import PatchItem from '$components/PatchItem.svelte';
	import RevancedHome from '$components/revanced/RevancedHome.svelte';
</script>

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
