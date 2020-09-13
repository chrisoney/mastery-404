<script>
	import links from './links.js'
	import Linkbar from './Linkbar.svelte';

	function fade(node, {
		delay = 400,
		duration = 400
		}) {
		const o = +getComputedStyle(node).opacity;

		return {
			delay,
			duration,
			css: t => `opacity: ${t * o}`
		};
	}

	// export let name;
	let currName = -1;
	let names = ["Gilbert Bui",
							"Marquis Bentley",
							"Julie Bock",
							"John Lam",
							"Chris Oney"];
	console.log(currName);

	function switchName(e,index){
		e.preventDefault();
		if (currName === index){
			currName = -1;
		} else {
			currName = index;
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="reset.css">
	<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">
	<script src="https://kit.fontawesome.com/a229c5b13d.js" crossorigin="anonymous"></script>
</svelte:head>

<main>
	<div class="top">
		<div class="header-links">
			{#each names as name, i}
				{#if currName === i}
					<div class="prof-top" on:click={(e) => switchName(e,i)}>
						<span>{name}</span>
						<img class="profile-pic selected" src="images/close.png" alt=""/>
					</div>
				{:else}
					<div class="prof-top" on:click={(e) => switchName(e,i)}>
						<span>{name}</span>
						<img class="profile-pic" src="images/{names[i].toLowerCase().split(" ").join("-")}.png" alt=""/>
					</div>
				{/if}
			{/each}
		</div>
		{#if currName > -1}
			<Linkbar name={names[currName]} />
		{/if}
	</div>
	{#if currName > -1}
		<div class="bottom" in:fade>
			<img class="profile-pic big" src="images/{names[currName].toLowerCase().split(" ").join("-")}.png" alt=''/>
			<p class="apology-title">{names[currName]}</p>
			<p class="apology-body">
				{@html links[names[currName]].description}
			</p>
		</div>
	{:else}
		<div class="bottom" in:fade>
			<img class="clock" src="images/broken-clock.png" alt='' />
			<p class="apology-title">Oops, something's gone wrong</p>
			<p class="apology-body">
				This site uses free dynos, so we may have hit the limit for the month on this project.
				We apologize for the inconvenience, and hope you'll be able to see it soon!
				In the meantime, why don't you take a look at some of the links up above?
			</p>
		</div>
	{/if}
</main>

<style>
	main {
		font-family: 'Roboto', sans-serif;
		font-weight: bolder;
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
	.top {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.header-links {
		margin-top: 25px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.prof-top {
		display:flex;
		flex-direction: column;
		align-items: center;
		width: 115px;
		text-align: center;
		cursor: pointer;
	}

	.profile-pic {
		width: 50px;
		height: auto;
		border-radius: 50px;
		margin-top: 5px;
	}

	.big {
		width: 200px;
		border-radius: 50%;
	}

	.selected {
		transform: scale(1.2);
		color: gold;
		filter: invert(100%)
	}

	.bottom {
		width: 600px;
		margin-top: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: black;
	}

	.clock {
		width: 250px;
		height: auto;
	}

	.apology-title {
		margin-top: 10px;
		text-align: center;
		color: black;
		font-size: 24px;
		font-weight: bolder;
	}

	.apology-body {
		font-size: 16px;
		text-align: center;
		border-radius: 15px;
		padding: 15px;
	}


	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>