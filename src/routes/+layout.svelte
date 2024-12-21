<script lang="ts">
	import { onMount } from 'svelte';

	import { car } from '@/stores';
	import Neko from '@/components/Neko.svelte';
	import Blob from '@/components/Blob.svelte';

	onMount(() => {
		Object.defineProperty(window, 'OMG_CARRRRRR', {
			get: () => {
				car.set(!$car);
				if ($car) console.log('%cmeow meow 😼', 'font-size: 3rem; color: #f0f;');
			}
		});
	});
</script>

{#if $car}
	<Neko />
{/if}

<Blob />

<slot />
