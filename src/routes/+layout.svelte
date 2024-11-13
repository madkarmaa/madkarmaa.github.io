<script lang="ts">
	import { onMount } from 'svelte';
	import { car } from '@/stores';
	import Neko from '@/components/Neko.svelte';

	onMount(() => {
		try {
			Object.defineProperty(window, 'OMG_CARRRRRR', {
				get: () => {
					car.set(!$car);
					if ($car) console.log('%cmeow meow 😼', 'font-size: 3rem; color: #f0f;');
				}
			});
		} catch {}
	});
</script>

{#if $car}
	<Neko />
{/if}

<slot />
