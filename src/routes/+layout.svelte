<script>
	import Header from '../../src/routes/header.svelte';
	import '../app.css'
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
