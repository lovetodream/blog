<script>
	import Footer from '$lib/components/Footer.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';

	import '../app.css';
</script>

<div>
	<slot />
</div>
<div>
	<Newsletter />
	<Footer />
</div>
