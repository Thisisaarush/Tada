<script>
	import Header from './header.svelte';
	import '../app.css'
</script>

<div class="flex justify-center">
	<Header />
	<main>
		<slot />
	</main>
</div>
