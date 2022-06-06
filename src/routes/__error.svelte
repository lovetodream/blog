<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// redirect to homepage until https://github.com/sveltejs/kit/issues/4582 is fixed
		goto('/');
	});
</script>
