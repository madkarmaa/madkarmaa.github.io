<script lang="ts">
	import QRCode from 'qrcode';

	let canvas: HTMLCanvasElement;
	let show_qr: boolean = $state(false);

	const generateQRCode = async (e: SubmitEvent) => {
		e.preventDefault();

		const data = new FormData(e.target as HTMLFormElement);
		const url = data.get('url') as string;

		if (!URL.canParse(url)) return;
		await QRCode.toCanvas(canvas, url, { scale: 10 }).catch((err) => alert(err));

		show_qr = true;
	};
</script>

<main>
	<form onsubmit={generateQRCode}>
		<input type="url" name="url" id="url" placeholder="https://youtube.com" required />
	</form>

	<canvas bind:this={canvas} class:hidden={!show_qr}></canvas>
</main>

<style>
	main {
		min-height: 100vh;
		padding: 1rem;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 1rem;
	}

	form {
		display: flex;
		width: 100%;
	}

	form > input {
		flex: 1;
		border: 2px solid #c5c6c0;
		outline: none !important;
		box-shadow: none !important;
	}

	form > input:hover {
		border: 2px solid #808080;
	}

	form > input:focus,
	form > input:active {
		border: 2px solid #000;
	}
</style>
