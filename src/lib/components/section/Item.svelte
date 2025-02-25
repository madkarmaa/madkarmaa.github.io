<script lang="ts">
	import { getContext } from 'svelte';
	import { type TextSide } from '.';

	const textSide: TextSide = getContext<() => TextSide>('textSide')();
</script>

<div class={textSide}></div>

<style>
</style>
