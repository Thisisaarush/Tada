<script>
	import Header from './Header.svelte';
	import '../app.css'
</script>

<div class="bg-red-400">
	<Header />

	<main>
		<slot />
	</main>

</div>
