<!-- https://github.com/ReVanced/revanced-website/blob/main/src/lib/components/Button.svelte -->

<script>
	export let type; // 'filled' | 'tonal' | 'text' | 'outlined'
	export let icon = {}; // type = 'outlined' | 'rounded' | 'sharp', name = see https://fonts.google.com/icons
	export let href = '';
	export let target = '';
	export let disabled = false;

	// default values
	icon = typeof icon === 'string' ? { name: icon } : icon;
	const resolvedIcon = { type: 'outlined', name: 'check' };
	Object.assign(resolvedIcon, icon);
</script>

<button {disabled} on:click>
	{#if href}
		<a {href} {target} {...$$restProps} class={`button-${type}`}>
			{#if icon}
				<span class="material-symbols-{resolvedIcon.type}">{resolvedIcon.name}</span>
			{/if}
			<slot />
		</a>
	{:else}
		<div {...$$restProps} class={`button-${type}`}>
			{#if icon}
				<span class="material-symbols-{resolvedIcon.type}">{resolvedIcon.name}</span>
			{/if}
			<slot />
		</div>
	{/if}
</button>

<style>
	button {
		border: none;
		background-color: transparent;
		padding: 0;
		margin: 0;
	}

	button:disabled {
		cursor: not-allowed;
		filter: grayscale(100%);
	}

	a,
	div {
		min-width: max-content;
		font-size: 0.95rem;
		text-decoration: none;
		color: var(--white);
		font-weight: 600;
		border: none;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: transform 0.4s var(--bezier-one), filter 0.4s var(--bezier-one);
		user-select: none;
	}

	.button-filled {
		background-color: var(--accent-color);
	}
	.button-filled,
	.button-filled * {
		color: var(--grey-four);
	}

	.button-tonal {
		background-color: var(--grey-two);
	}

	.button-filled,
	.button-tonal {
		padding: 16px 24px;
	}

	.button-text {
		background-color: transparent;
		font-weight: 500;
		letter-spacing: 0.01rem;
	}
	.button-text,
	.button-text * {
		color: var(--accent-color);
	}

	div:hover,
	a:hover {
		filter: brightness(85%);
	}
</style>
