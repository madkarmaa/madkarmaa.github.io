<script lang="ts">
	import { choose, secToMs } from '@/utils';
	import type { Sound } from '@/types';
	import { images, sounds } from '@/constants';
	import { useragent } from '@sveu/browser';

	const { mobile } = useragent();

	let selected_image: string | undefined = $state();
	let selected_sound: Sound | undefined = $state();
	let show_image: boolean = $state(false);

	let audio_element: HTMLAudioElement | undefined = $state();

	const reset = () => {
		if (!audio_element) return;

		audio_element.pause();
		audio_element.currentTime = 0;
		selected_image = undefined;
		selected_sound = undefined;
		show_image = false;
	};

	const play = () => {
		reset();

		selected_image = choose(images);
		selected_sound = choose(sounds);

		setTimeout(() => {
			show_image = true;
		}, secToMs(selected_sound.delay));
	};

	const handle_keydown = async (e: KeyboardEvent) => {
		console.log(e.key);
		if (e.key !== ' ') return;
		play();
	};
</script>

<svelte:window on:keydown={handle_keydown} on:touchstart={play} />

<main>
	{#if selected_sound}
		<audio src={selected_sound.src} bind:this={audio_element} onended={reset} autoplay></audio>
	{:else if $mobile}
		Tap to start
	{:else}
		Press SPACEBAR to start
	{/if}
	{#if show_image}
		<div class="image-container">
			<img src={selected_image} alt="object_image" />
		</div>
	{/if}
</main>

<style>
	main {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
	}

	.image-container {
		width: 50vw;
		height: 50vh;
	}

	img {
		width: 100%;
		height: 100%;
		pointer-events: none;
	}
</style>
