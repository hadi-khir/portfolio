<script>
	import Counter from "./Counter.svelte";
	import welcome from "$lib/images/svelte-welcome.webp";
	import welcome_fallback from "$lib/images/svelte-welcome.png";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		Hey! I'm Hadi <span class="wave">👋</span>!
	</h1>

	<h2>
		I'm a developer, birder, photographer and overall curious human, and I want to share some of that with the world.
	</h2>
	<br/>
	<h2>
		There's some links above that I would love for you to checkout, my resume <span class="wave">📝</span>, or some of my favourite photographs <span class="wave">📷</span>!
	</h2>
	<br/>
	<h2>
		You can checkout my GitHub from the link in the top right, where you will find this project and others!
	</h2>
	<br/>
	<h2>
		Thanks for visiting! <span class="wave">🫶</span>
	</h2>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}
	.wave {
		animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
		animation-duration: 2.5s; /* Change to speed up or slow down */
		animation-iteration-count: infinite; /* Never stop waving :) */
		transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
		display: inline-block;
	}

	@keyframes wave-animation {
		0% {
			transform: rotate(0deg);
		}
		10% {
			transform: rotate(14deg);
		} /* The following five values can be played with to make the waving more or less extreme */
		20% {
			transform: rotate(-8deg);
		}
		30% {
			transform: rotate(14deg);
		}
		40% {
			transform: rotate(-4deg);
		}
		50% {
			transform: rotate(10deg);
		}
		60% {
			transform: rotate(0deg);
		} /* Reset for the last half to pause */
		100% {
			transform: rotate(0deg);
		}
	}
</style>
