<script>
	export let name;
</script>

<main>
	<div class="top">
		
	</div>
	<div class="bottom">

	</div>
</main>

<style>
	main {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width:100%;
		height: 100%;
		position: absolute;
		background: rgb(146,191,67);
		background: linear-gradient(38deg, rgba(146,191,67,1) 40%, rgba(255,223,100,1) 100%);
		background-attachment: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>