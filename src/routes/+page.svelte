<script lang="ts">
	import Heading from './Heading.svelte';
	import * as Section from '@/components/section';
</script>

<Heading text="MadKarma" />

<Section.Container>
	<Section.Item>
		{#snippet image()}
			<img alt="sample" src="https://picsum.photos/1920/1080" />
		{/snippet}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus quo repellendus voluptatum
		ullam fugiat nihil reiciendis consectetur minima molestiae nam id perferendis neque, ab placeat ad
		alias, recusandae labore?
	</Section.Item>
	<Section.Item>
		{#snippet image()}
			<img alt="sample" src="https://picsum.photos/1920/1080" />
		{/snippet}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus quo repellendus voluptatum
		ullam fugiat nihil reiciendis consectetur minima molestiae nam id perferendis neque, ab placeat ad
		alias, recusandae labore?
	</Section.Item>
	<Section.Item>
		{#snippet image()}
			<img alt="sample" src="https://picsum.photos/1920/1080" />
		{/snippet}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus quo repellendus voluptatum
		ullam fugiat nihil reiciendis consectetur minima molestiae nam id perferendis neque, ab placeat ad
		alias, recusandae labore?
	</Section.Item>
	<Section.Item>
		{#snippet image()}
			<img alt="sample" src="https://picsum.photos/1920/1080" />
		{/snippet}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus quo repellendus voluptatum
		ullam fugiat nihil reiciendis consectetur minima molestiae nam id perferendis neque, ab placeat ad
		alias, recusandae labore?
	</Section.Item>
	<Section.Item>
		{#snippet image()}
			<img alt="sample" src="https://picsum.photos/1920/1080" />
		{/snippet}
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus quo repellendus voluptatum
		ullam fugiat nihil reiciendis consectetur minima molestiae nam id perferendis neque, ab placeat ad
		alias, recusandae labore?
	</Section.Item>
</Section.Container>
