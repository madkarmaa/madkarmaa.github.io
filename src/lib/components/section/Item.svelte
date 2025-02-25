<script lang="ts">
	import { getContext } from 'svelte';

	type TextSide = 'left' | 'right';

	const getTextSide = getContext<() => TextSide>('textSide');
	const textSide: TextSide = getTextSide();
</script>

<div class={textSide}></div>

<style>
</style>
