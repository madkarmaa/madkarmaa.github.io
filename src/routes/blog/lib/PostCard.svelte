<script lang="ts">
	import { page } from '$app/state';
	import { cubicOut } from 'svelte/easing';
	import type { Post } from '../+page';
	import { fly } from 'svelte/transition';

	type Props = Post & { index?: number };
	let { name, readTime, index = 0 }: Props = $props();

	name = name.trim().replace('.md', '');
</script>

<a
	class="post-card-container flex flex-col gap-3 rounded-lg p-4 backdrop-blur-2xl border-secondary border-2"
	href={`${page.url.pathname}?post=${name}`}
	in:fly={{ y: 20, duration: 400, delay: index * 100, easing: cubicOut }}
>
	<h2 class="post-name">
		<span class="slash transition-all inline-block text-accent">/</span>
		<span class="font-semibold">{name}</span>
	</h2>
	<span class="read-time">~<span class="text-primary">{readTime} min</span> read</span>
</a>

<style>
	.post-name > * {
		font-size: 1.3rem;
	}

	.post-card-container:hover .slash {
		transform: rotate(180deg);
		color: var(--primary);
	}

	.read-time,
	.read-time * {
		@apply text-sm;
	}
</style>
