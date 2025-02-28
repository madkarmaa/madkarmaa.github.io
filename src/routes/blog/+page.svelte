<script lang="ts">
	import PostCard from './lib/PostCard.svelte';

	let { data } = $props();
	const { posts } = data;
</script>

{#each posts as post, i (i)}
	<PostCard name={post.name} content={post.content_promise} />
{/each}
