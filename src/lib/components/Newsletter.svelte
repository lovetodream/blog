<script lang="ts">
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	function closeNotification() {
		goto('?');
	}
</script>

<div class="bg-black">
	<div class="max-w-3xl mx-auto py-12 px-4 sm:px-6">
		<div>
			<h2
				class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
				id="newsletter-headline"
			>
				Sign up for the newsletter
			</h2>
			<p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
				Get the latest news and updates about my projects and the blog in your inbox.
			</p>
		</div>
		<div class="mt-8">
			<form class="sm:flex" action="/api/subscribe" method="post">
				<label for="email" class="sr-only">Email address</label>
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					required
					class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
					placeholder="Enter your email"
				/>
				<div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
					<button
						type="submit"
						class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-orange-500"
						>Notify me</button
					>
				</div>
				<input type="text" name="redirect" id="redirect" value={$page.url.pathname} hidden />
			</form>
			<p class="mt-3 text-sm text-gray-300">
				For more information about how your data is used, read the
				<a href="/legal/privacy" class="text-white font-medium underline"> Privacy Policy. </a>
			</p>
		</div>
	</div>
</div>

<div
	aria-live="assertive"
	class="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:px-6 sm:py-24 sm:items-start z-[100]"
>
	<div class="w-full flex flex-col items-center space-y-4 sm:items-end">
		{#if $page.url.searchParams.has('newsletter')}
			{#if $page.url.searchParams.get('newsletter') === 'failed'}
				<div
					class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
				>
					<div class="p-4">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="h-6 w-6 text-red-400"
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
										d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div class="ml-3 w-0 flex-1 pt-0.5">
								<p class="text-sm font-medium text-gray-900">Failed to subscribe!</p>
								<p class="mt-1 text-sm text-gray-500">{$page.url.searchParams.get('reason')}</p>
							</div>
							<div class="ml-4 flex-shrink-0 flex">
								<button
									type="button"
									class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
									on:click={closeNotification}
								>
									<span class="sr-only">Close</span>
									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			{:else if $page.url.searchParams.get('newsletter') === 'success'}
				<div
					transition:fade
					class="max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden"
				>
					<div class="p-4">
						<div class="flex items-start">
							<div class="flex-shrink-0">
								<svg
									class="h-6 w-6 text-green-400"
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
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<div class="ml-3 w-0 flex-1 pt-0.5">
								<p class="text-sm font-medium text-gray-900">Successfully subscribed!</p>
							</div>
							<div class="ml-4 flex-shrink-0 flex">
								<button
									type="button"
									class="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
									on:click={closeNotification}
								>
									<span class="sr-only">Close</span>
									<svg
										class="h-5 w-5"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											fill-rule="evenodd"
											d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
											clip-rule="evenodd"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
