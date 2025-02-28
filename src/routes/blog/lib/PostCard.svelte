<script lang="ts">
	import { page } from '$app/state';

	type Props = { name: string };
	let { name }: Props = $props();

	name = name.trim().replace('.md', '');
</script>

<a class="post-card-container flex flex-col gap-3" href={`${page.url.pathname}/${name}`}>
	<!--                                                                ^ I don't plan on using the component anywhere else -->
	<h2 class="post-name">
		<span class="slash transition-all inline-block text-accent">/</span>
		<span>{name}</span>
	</h2>
</a>

<style>
	.post-name > * {
		font-size: 1.3rem;
	}

	.post-card-container:hover .slash {
		transform: rotate(180deg);
		color: var(--primary);
	}
</style>
