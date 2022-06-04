<script lang="ts">
	export let showHome = true;
</script>

<nav
	id="navbar"
	class="sticky top-0 border-b border-b-gray-700 backdrop-blur bg-gray-800 bg-opacity-60"
>
	<div class="container mx-auto max-w-3xl flex justify-between p-4">
		<ul class="flex justify-center items-center space-x-8">
			{#if showHome}
				<li>
					<a href="/" class="text-white hover:text-gray-200 transition-colors">Home</a>
				</li>
			{/if}
			<li>
				<a href="/about" class="text-white hover:text-gray-200 transition-colors">About</a>
			</li>
			<li>
				<a href="/contact" class="text-white hover:text-gray-200 transition-colors">Contact</a>
			</li>
		</ul>
		<button
			type="button"
			class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
		>
			Subscribe
		</button>
	</div>
</nav>
