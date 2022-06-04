<script>
	import Footer from '$lib/components/Footer.svelte';

	import '../app.css';
</script>

<div class="bg-stone-900 min-h-screen flex flex-col justify-between">
	<div>
		<slot />
	</div>
	<Footer />
</div>
