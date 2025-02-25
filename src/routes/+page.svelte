<script lang="ts">
	import * as Heading from '@/components/heading';
	import * as Section from '@/components/section';
</script>

<Heading.Heading text="MadKarma">
	{#snippet links()}
		<Heading.Link text="test" href="/url2qrcode" />
		<Heading.Link text="test" href="/url2qrcode" />
		<Heading.Link text="test" href="/url2qrcode" />
		<Heading.Link text="test" href="/url2qrcode" />
		<Heading.Link text="test" href="/url2qrcode" />
	{/snippet}
</Heading.Heading>

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
