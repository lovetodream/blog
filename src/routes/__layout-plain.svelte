<script>
	import Footer from '$lib/components/Footer.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	import '../app.css';
</script>

<div class="bg-stone-900 min-h-screen flex flex-col justify-between">
	<div>
		<slot />
	</div>
	<div>
		<Newsletter />
		<Footer />
	</div>
</div>
