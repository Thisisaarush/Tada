<script>
	import Header from '../components/Header.svelte';
	import '../app.css'
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
