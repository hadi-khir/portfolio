<svelte:head>
	<title>Photography</title>
	<meta name="description" content="Photos" />
</svelte:head>

<script>
	// @ts-nocheck
	export let data;
  </script>
  
  <div class="image-grid">
	{#each data.images as image}
	  {#if image !== undefined}
		<img src={image.url} alt={image.alt} />
	  {/if}
	{/each}
  </div>
  
  <style>
	.image-grid {
	  display: grid;
	  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
	  grid-auto-rows: minmax(400px, auto);
	  grid-gap: 16px;
	}
  
	img {
	  width: 100%;
	  height: 100%;
	  object-fit: cover;
	}
  </style>
  