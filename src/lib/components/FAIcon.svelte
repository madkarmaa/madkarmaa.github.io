<script lang="ts">
	import { FAIconFamily, FAIconVariant } from '@/types';

	type Family = FAIconFamily | `${FAIconFamily}`;
	type Variant = FAIconVariant | `${FAIconVariant}`;

	type IconOptions =
		| {
				brands: true;
		  }
		| {
				brands?: never;
				family: Family;
				variant: Variant;
		  };

	type Props = { name: string; options?: IconOptions };
	let { name, options = { family: 'classic', variant: 'solid' } }: Props = $props();

	const classes: string[] = [`fa-${name}`];

	if (options.brands) classes.push('fa-brands');
	else Object.values(options).forEach((option) => classes.push(`fa-${option}`));
</script>

<i class="{classes.join(' ')} mr-2 h-4 w-4 flex justify-center items-center"></i>
