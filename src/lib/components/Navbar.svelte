<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	export let showHome = true;

	let showSubscribeModal = false;

	function toggleSubscribeModal() {
		showSubscribeModal = !showSubscribeModal;
	}
</script>

<nav
	id="navbar"
	class="sticky top-0 border-b border-b-gray-700 backdrop-blur bg-gray-800 bg-opacity-60 z-50"
>
	<div class="container mx-auto max-w-3xl flex justify-center md:justify-between p-4">
		<ul class="flex justify-center items-center space-x-4 md:space-x-8">
			{#if showHome}
				<li>
					<a href="/">Home</a>
				</li>
			{/if}
			<li>
				<a href="/about" class:active={$page.url.pathname === '/about'}>About</a>
			</li>
			<li>
				<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
			</li>
		</ul>
		<button
			type="button"
			class="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
			on:click={toggleSubscribeModal}
		>
			Subscribe
		</button>
	</div>
</nav>

{#if showSubscribeModal}
	<div class="relative z-[75]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div
			transition:fade
			class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[60]"
			on:click={toggleSubscribeModal}
		/>

		<div class="fixed z-[75] inset-0 overflow-y-auto pointer-events-none">
			<div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
				<div
					transition:fade
					class="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 pointer-events-auto"
				>
					<form action="/api/subscribe" method="post">
						<div>
							<div
								class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-orange-100"
							>
								<svg
									class="h-6 w-6 text-orange-600"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<div class="mt-3 text-center sm:mt-5">
								<h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
									Subscribe to the newsletter
								</h3>
								<div class="mt-2">
									<p class="text-sm text-gray-500">
										Get the latest news and updates about my projects and the blog in your inbox. I
										won't send you any spam.
									</p>
								</div>
								<div class="mt-6">
									<label for="email" class="sr-only">Email</label>
									<input
										type="email"
										name="email"
										id="email"
										class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md"
										placeholder="Enter your email"
										required
									/>
								</div>
								<input
									type="text"
									name="redirect"
									id="redirect"
									value={$page.url.pathname}
									hidden
								/>
							</div>
						</div>
						<div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
							<button
								type="submit"
								class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:col-start-2 sm:text-sm"
								>Subscribe</button
							>
							<button
								type="button"
								class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:mt-0 sm:col-start-1 sm:text-sm"
								on:click={toggleSubscribeModal}>Cancel</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	a {
		@apply text-white hover:text-gray-200 hover:bg-gray-700 px-4 py-2 rounded-xl transition-colors;
	}

	a.active {
		@apply bg-gray-700 text-gray-200;
	}
</style>
