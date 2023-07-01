<script>
	import Header from '../routes/header.svelte'
	import '../app.css'
</script>

<div>
	<Header />
	<main>
		<slot />
	</main>
</div>
