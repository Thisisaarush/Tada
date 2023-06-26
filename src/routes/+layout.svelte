<script>
	import Header from './header.svelte';
	import '../app.css'
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
