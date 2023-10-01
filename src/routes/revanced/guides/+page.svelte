<script>
	import { onMount } from 'svelte';

	import Wave from '$components/revanced/Wave.svelte';
	import Meta from '$components/Meta.svelte';
	import Button from '$components/revanced/Button.svelte';

	let cont;

	onMount(() => {
		cont.querySelectorAll('h3').forEach((element) => {
			element.id = element.textContent.trim().replace(/\s/g, '-').toLowerCase();
			let url = window.location.href + '#' + element.id;

			element.title = 'Click to copy\n\n' + url;

			element.addEventListener('click', () => {
				navigator.clipboard.writeText(url);
			});
		});
	});
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
				To help you use/install
				<span style="color: var(--accent-color);">ReVanced</span>
				apps.
			</p>
		</div>
		<div bind:this={cont}>
			<ul>
				<li>
					<h3>Patchable apps</h3>
					<div>
						<Button type="filled" icon="open_in_new" href="//revanced.app/patches">ReVanced</Button>
						<Button
							type="filled"
							icon="open_in_new"
							href="//sodawithoutsparkles.github.io/revanced-troubleshooting-guide/05-versions/"
							>SodaWithoutSparkles</Button
						>
					</div>
				</li>
				<li>
					<h3>Official guides</h3>
					<div>
						<Button
							type="filled"
							icon="open_in_new"
							href="//github.com/revanced/revanced-manager/tree/main/docs#-revanced-manager"
							>ReVanced Manager</Button
						>
						<Button
							type="filled"
							icon="open_in_new"
							href="//github.com/ReVanced/revanced-cli/tree/main/docs#-documentation-and-guides-of-revanced-cli"
							>ReVanced CLI</Button
						>
					</div>
				</li>
				<li>
					<h3>Unofficial guides</h3>
					<div>
						<Button
							type="filled"
							icon="open_in_new"
							href="//sodawithoutsparkles.github.io/revanced-troubleshooting-guide/"
							>SodaWithoutSparkles</Button
						>
						<Button
							type="filled"
							icon="open_in_new"
							href="//github.com/ReVanced/revanced-cli/tree/main/docs#-documentation-and-guides-of-revanced-cli"
							>XDA Forums</Button
						>
					</div>
				</li>
			</ul>
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

	.wrap {
		display: flex;
		flex-direction: column;
		margin-top: 3%;
		gap: 35px;
	}

	h1 {
		color: var(--accent-color);
		text-align: center;
		vertical-align: middle;
	}

	h3 {
		margin-bottom: 15px;
	}

	h3:hover {
		text-decoration: underline;
	}

	ul {
		list-style-type: none !important;
	}

	div > ul {
		display: flex;
		gap: 25px;
		flex-direction: column;
	}

	li > div {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 15px;
	}

	/* mobile */
	@media (pointer: none), (pointer: coarse) {
		.wrap {
			margin: 7% 7% 30% 7%;
		}
	}
</style>
