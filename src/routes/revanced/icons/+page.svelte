<script>
	import Wave from '$components/revanced/Wave.svelte';
	import { ZipFile } from '$lib/zip';
	// import { ImageEditor } from '$lib/image';
	import { browser } from '$app/environment';

	let files;
	let color = '#000000';

	async function generate(e) {
		e.preventDefault();

		// let sus = new ZipFile();
		// if (browser) sus.download();
	}
</script>

<main>
	<form on:submit={generate}>
		<div>
			<label for="bg-color">
				<h3>Icon backgroud color</h3>
			</label>
			<input type="color" id="bg-color" bind:value={color} />
		</div>

		<div>
			<label for="img-picker">
				<h3>Icon image</h3>
				<p>It's preferred that it has a transparent background</p>
			</label>
			<input type="file" id="img-picker" accept="image/png" bind:files />
		</div>

		<input type="submit" value="Generate" disabled={!files} />
	</form>
</main>
<Wave />

<style>
	form {
		display: flex;
		justify-content: center;
		flex-direction: column;
		gap: 25px;
		padding: 10px;
	}

	form > div {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}

	::placeholder {
		color: var(--grey-five);
		opacity: 1; /* Firefox */
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: var(--grey-five);
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: var(--grey-five);
	}

	input[type='submit'] {
		align-self: flex-start; /* https://stackoverflow.com/a/40141200 */
		border: none;
		padding: 0;
		margin: 0;
		min-width: max-content;
		font-size: 0.95rem;
		text-decoration: none;
		background-color: var(--accent-color);
		color: var(--grey-four);
		font-weight: 600;
		border: none;
		border-radius: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		cursor: pointer;
		transition: transform 0.4s var(--bezier-one), filter 0.4s var(--bezier-one);
		user-select: none;
		padding: 16px 24px;
	}

	input[type='submit']:hover {
		filter: brightness(85%);
	}

	input[type='submit']:disabled {
		cursor: not-allowed;
		filter: grayscale(100%);
	}
</style>
