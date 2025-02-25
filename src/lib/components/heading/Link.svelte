<script lang="ts">
	import type { SpecialTargetValues } from '@/types';

	type Props = { text: string; href: string; target?: SpecialTargetValues };
	let { text, href, target = '_blank' }: Props = $props();
</script>

<a {href} {target}>
	<span class="decor text-primary">#</span>
	<span class="link-text">{text}</span>
</a>

<style>
	a:hover .decor {
		@apply transition-all;
		color: var(--accent);
	}

	a:hover .link-text {
		text-decoration: underline;
	}
</style>
