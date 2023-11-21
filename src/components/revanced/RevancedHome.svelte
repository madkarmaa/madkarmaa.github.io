<script>
	import AppCard from '$components/revanced/AppCard.svelte';
	import BiColoredHeading from '$components/revanced/BiColoredHeading.svelte';
	import Button from '$components/revanced/Button.svelte';
	import Loading from '$components/Loading.svelte';

	import { endpoints } from '$lib/dataFetcher';
	import { getPatchFromPkg, latestPatchAppVersion } from '$lib/versioning';
	import { onMount } from 'svelte';
	import moment from 'moment';

	let manager, youtubeVer, youtubeVerDashed, microg;

	onMount(async () => {
		// ReVanced Manager
		manager = await endpoints.revanced.manager.get();
		// YouTube
		const patches = await endpoints.revanced.patches.get();
		const anyYtPatch = getPatchFromPkg('com.google.android.youtube', patches);
		youtubeVer = latestPatchAppVersion(anyYtPatch)[0];
		youtubeVerDashed = youtubeVer.replace(/\./g, '-');
		// MicroG
		microg = await endpoints.github.microg.get();
	});
</script>

<!-- ReVanced Manager -->
<AppCard>
	<svelte:fragment slot="title">
		<BiColoredHeading wordBreak="true">
			<svelte:fragment slot="left">ReVanced</svelte:fragment>
			<svelte:fragment slot="right">Manager</svelte:fragment>
		</BiColoredHeading>
	</svelte:fragment>
	<svelte:fragment slot="desc">
		{#if manager}
			<p>
				ReVanced Manager
				<span style="color: var(--accent-color);">{manager?.metadata.tag_name}</span>
			</p>
			<p>
				Published {moment(manager?.metadata.published_at).format('lll')}
			</p>
		{:else}
			<Loading color="var(--accent-color)" />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="buttons">
		<Button
			icon="download"
			type="filled"
			href={manager?.assets[0].browser_download_url}
			disabled={!manager}
		>
			Download
		</Button>
		<Button
			icon="open_in_new"
			type="tonal"
			href="//github.com/ReVanced/revanced-manager/releases/latest"
			target="_blank"
		>
			GitHub
		</Button>
	</svelte:fragment>
</AppCard>
<!-- YouTube -->
<AppCard>
	<svelte:fragment slot="title">
		<h1>You<span style="color: var(--accent-color);">Tube</span></h1>
	</svelte:fragment>
	<svelte:fragment slot="desc">
		{#if youtubeVer}
			<p>
				Latest version suggested by ReVanced:
				<span style="color: var(--accent-color); display: block;">
					{youtubeVer}
				</span>
			</p>

			<p>
				<b>
					Make sure to select the
					<span style="color: var(--accent-color);">nodpi</span>
					download
				</b>
			</p>
		{:else}
			<Loading color="var(--accent-color)" />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="buttons">
		<Button
			icon="open_in_new"
			type="filled"
			href={youtubeVerDashed
				? `https://www.apkmirror.com/apk/google-inc/youtube/youtube-${youtubeVerDashed}-release/#downloads`
				: ''}
			target="_blank"
			disabled={!youtubeVerDashed}
		>
			APKMirror
		</Button>
	</svelte:fragment>
</AppCard>
<!-- Vanced MicroG -->
<AppCard>
	<svelte:fragment slot="title">
		<h1>Micro<span style="color: var(--accent-color);">G</span></h1>
	</svelte:fragment>
	<svelte:fragment slot="desc">
		{#if microg}
			<p>MicroG <span style="color: var(--accent-color);">{microg?.tag_name}</span></p>
			<p>Published {moment(microg?.published_at).format('lll')}</p>
		{:else}
			<Loading color="var(--accent-color)" />
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="buttons">
		<Button
			icon="download"
			type="filled"
			href={microg?.assets.find((asset) => /microg.*\.apk/.test(asset.name)).browser_download_url}
			disabled={!microg}
		>
			Download
		</Button>
		<Button
			icon="open_in_new"
			type="tonal"
			href="//github.com/TeamVanced/VancedMicroG/releases/latest"
			target="_blank"
		>
			GitHub
		</Button>
	</svelte:fragment>
</AppCard>
