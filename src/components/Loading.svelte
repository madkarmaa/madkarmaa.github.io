<script>
	export let color = '#000';
</script>

<div class="container" style="--color: {color}">
	<div class="dot-typing" />
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 1rem;
	}

	/* https://nzbin.github.io/three-dots/ */
	.dot-typing {
		position: relative;
		left: -9999px;
		width: 10px;
		height: 10px;
		border-radius: 5px;
		background-color: var(--color);
		color: var(--color);
		box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color), 10014px 0 0 0 var(--color);
		animation: dot-typing 1.5s infinite linear;
	}

	@keyframes dot-typing {
		0% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color), 10014px 0 0 0 var(--color);
		}
		16.667% {
			box-shadow: 9984px -10px 0 0 var(--color), 9999px 0 0 0 var(--color),
				10014px 0 0 0 var(--color);
		}
		33.333% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color), 10014px 0 0 0 var(--color);
		}
		50% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px -10px 0 0 var(--color),
				10014px 0 0 0 var(--color);
		}
		66.667% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color), 10014px 0 0 0 var(--color);
		}
		83.333% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color),
				10014px -10px 0 0 var(--color);
		}
		100% {
			box-shadow: 9984px 0 0 0 var(--color), 9999px 0 0 0 var(--color), 10014px 0 0 0 var(--color);
		}
	}
</style>
