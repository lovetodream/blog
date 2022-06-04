<script>
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
</script>

<div class="bg-gray-900">
	<Navbar />
	<slot />
</div>
