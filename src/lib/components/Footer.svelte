<script lang="ts">
	import { variables } from '$lib/variables';
	import type { Tags } from '@tryghost/content-api';

	let tags: Tags | undefined;

	fetch(`${variables.baseUrl}/api/tags`)
		.then((res) => res.json())
		.then((data) => {
			tags = data;
		});
</script>

<footer class="text-gray-400 bg-black bg-opacity-75">
	<div class="container mx-auto max-w-3xl px-4 py-8 space-y-4">
		{#if tags}
			<div class="flex flex-col space-y-2">
				<h3 class="text-gray-300 text-base font-light">Tags</h3>
				<ul class="text-sm grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-4">
					{#each tags as tag}
						<li class="flex items-center space-x-4">
							<a href={`/tags/${tag.slug}`} class="text-gray-400 hover:underline font-light">
								{tag.name}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
		<div
			class="border-t border-t-gray-500 pt-2 flex flex-col md:flex-row justify-between text-sm leading-none font-extralight"
		>
			<p>
				Copyright © 2022 <a href="https://timozacherl.com" class="text-gray-300 hover:underline"
					>Timo Zacherl</a
				>. All rights reserved.
			</p>
			<div class="flex mt-4 md:mt-0">
				<a
					href="/legal/privacy"
					class="md:pl-2 pr-2 border-r border-r-gray-500 text-gray-300 hover:underline"
				>
					Privacy Policy
				</a>
				<a href="/legal/imprint" class="pl-2 text-gray-300 hover:underline"> Imprint </a>
			</div>
		</div>
		<p class="text-xs text-gray-500">
			Apple, the Apple logo, macOS, Mac, iPhone, and iPad are trademarks of Apple Inc., registered
			in the U.S. and other countries and regions. App Store is a service mark of Apple Inc. IOS is
			a trademark or registered trademark of Cisco in the U.S. and other countries and is used under
			license.
		</p>
	</div>
</footer>
