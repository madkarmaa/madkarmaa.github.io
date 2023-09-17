<script>
	export let width = '50%';
	let title, body;

	function openIssue(event) {
		event.preventDefault();
		if (!title || !body) return;
		const newIssueUrl = new URL('https://github.com/madkarmaa/madkarmaa.github.io/issues/new');
		newIssueUrl.searchParams.set('title', title);
		newIssueUrl.searchParams.set('body', body);
		window.open(newIssueUrl, '_blank');
	}
</script>

<form style="width: {width};" on:submit={openIssue}>
	<div>
		<label for="title">
			<h3>Title</h3>
		</label>
		<input type="text" id="title" placeholder="Title here..." bind:value={title} />
	</div>
	<div>
		<label for="description">
			<h3>Description</h3>
		</label>
		<input type="text" id="description" placeholder="Description here..." bind:value={body} />
	</div>
	<input type="submit" value="Submit" disabled={!title || !body} />
</form>

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

	input[type='text'] {
		background-color: var(--accent-low-opacity);
		border-top: none;
		border-left: none;
		border-bottom: 2px solid var(--accent-color);
		border-right: 2px solid var(--accent-color);
		border-radius: 100px;
		padding: 16px 24px;
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
