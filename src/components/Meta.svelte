<script>
	export let title = 'madkarmaa.github.io';
	export let description = 'My personal website, what else?';
	export let url = 'https://github.com/madkarmaa/madkarmaa.github.io';
	export let image = '';

	// https://indieweb.org/The-Open-Graph-protocol#Does_not_support_SVG_images
	if (image && image.endsWith('.svg')) image = '';
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}

	<!-- Twitter -->
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	{#if image}
		<meta property="twitter:image" content={image} />
	{/if}
</svelte:head>
