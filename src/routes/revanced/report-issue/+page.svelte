<script>
	import Wave from '$components/revanced/Wave.svelte';
	import IssueForm from '$components/revanced/IssueForm.svelte';
	import Meta from '$components/Meta.svelte';
</script>

<Meta
	title="madkarmaa.github.io/revanced/report-issue"
	description="Site broken? Something's missing? Report it here! NOT affiliated with ReVanced or YouTube."
	url="https://madkarmaa.github.io/revanced/report-issue"
	image="https://revanced.app/embed.png"
/>
<main>
	<div class="wrap">
		<h2>Report an issue</h2>
		<IssueForm width="100%" />
	</div>
</main>
<Wave />

<style>
	main {
		display: flex;
		justify-content: center;
		flex: 1;
	}

	h2 {
		color: var(--accent-color);
	}

	.wrap {
		width: 55%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 20px;
		padding: 5%;
	}

	@media (pointer: none), (pointer: coarse) {
		.wrap {
			width: 100%;
		}
	}
</style>
