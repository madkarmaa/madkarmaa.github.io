<script>
	import Button from '$components/revanced/Button.svelte';

	function dummyFunc() {
		alert('Hi!');
	}
</script>

<div class="app-container">
	<slot name="title">
		<h1>Dummy text</h1>
	</slot>
	<div class="app-desc">
		<slot name="desc">Hello world!</slot>
	</div>
	<div class="buttons-container">
		<slot name="buttons">
			<Button icon="open_in_new" type="filled" on:click={dummyFunc}>Dummy button</Button>
		</slot>
	</div>
</div>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.buttons-container {
		margin-top: 50px;
		display: flex;
		gap: 10px;
	}
</style>
