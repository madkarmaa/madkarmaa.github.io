<script>
	export let patch;
	export let showAllVersions = false;
	import { compare, coerce } from 'semver';
</script>

<div class="patch-container">
	<div class="things">
		<div class="title">
			<h3>{patch.name}</h3>
		</div>
	</div>
	<h5>{patch.description}</h5>
	<ul class="info-container">
		{#each patch.compatiblePackages as pkg}
			<a
				href="https://play.google.com/store/apps/details?id={pkg.name}"
				target="_blank"
				rel="noreferrer"
			>
				<li class="patch-info">📦 {pkg.name}</li>
			</a>
		{/each}

		{#if patch.compatiblePackages.length && patch.compatiblePackages[0].versions.length}
			{#if showAllVersions}
				{#each patch.compatiblePackages[0].versions
					.slice()
					.sort((a, b) => {
						const coercedA = coerce(a);
						const coercedB = coerce(b);
						if (coercedA && coercedB) return compare(coercedA, coercedB);
						else if (!coercedA && !coercedB) return 0;
						else return !coercedA ? 1 : -1;
					})
					.reverse() as version}
					<li class="patch-info">
						🎯 {version}
					</li>
				{/each}
			{:else}
				<li class="patch-info">
					🎯 {patch.compatiblePackages[0].versions.slice(-1)}
				</li>
			{/if}
		{/if}
	</ul>
</div>

<style>
	h3 {
		margin-right: 0.5rem;
		margin-bottom: 0.2rem;
		color: var(--accent-color);
	}

	.patch-info {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--grey-five);
		padding: 0.25rem 0.5rem;
		border: 1px solid var(--grey-three);
		border-radius: 8px;

		&:hover {
			background-color: var(--grey-two);
		}
	}

	a {
		text-decoration: none;
	}

	a .patch-info:hover {
		text-decoration: underline var(--accent-color-two);
		color: var(--accent-color-two);
	}

	.info-container {
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		margin: 0.3rem 0rem;
		width: 100%;
		margin-top: 0.5rem;
	}

	.patch-container {
		transition: all 0.1s var(--bezier-one);
		background-color: var(--grey-six);
		padding: 1.25rem;
		border-radius: 12px;

		&:active {
			filter: brightness(1.15);
		}

		&:hover {
			background-color: var(--grey-one);
		}
	}

	.title {
		display: flex;
		align-items: center;
	}

	.things {
		display: flex;
		justify-content: space-between;
	}
</style>
