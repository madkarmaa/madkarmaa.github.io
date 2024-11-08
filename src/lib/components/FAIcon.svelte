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

	export let name: string;
	export let options: IconOptions = { family: 'classic', variant: 'solid' };

	const classes: string[] = [`fa-${name}`];

	if (options.brands) classes.push('fa-brands');
	else Object.values(options).forEach((option) => classes.push(`fa-${option}`));
</script>

<i class="{classes.join(' ')} mr-2 h-4 w-4 flex justify-center items-center"></i>
