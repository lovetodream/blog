<script lang="ts">
	import { page } from '$app/stores';

	import type { PostOrPage } from '@tryghost/content-api';
	import { highlightAll } from 'prismjs';
	import 'prismjs/components/prism-swift.js';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js';
	import { onMount } from 'svelte';

	export let post: PostOrPage;

	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	{#if !!post}
		<meta property="og:type" content="article" />
		<meta property="og:title" content={post.meta_title || post.title} />
		<meta property="og:description" content={post.meta_description || post.excerpt} />
		<meta property="og:url" content={$page.url.href} />
		<meta property="og:image" content={post.og_image} />

		<meta property="article:published_time" content={post.published_at} />
		<meta property="article:modified_time" content={post.updated_at} />
		<meta property="article:author" content={post.primary_author?.name} />
		<meta property="article:tag" content={post.primary_tag?.name} />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={post.twitter_title || post.title} />
		<meta name="twitter:description" content={post.twitter_description || post.excerpt} />
		<meta name="twitter:url" content={$page.url.href} />
		<meta name="twitter:image" content={post.twitter_image} />
		<meta name="twitter:label1" content="Written by" />
		<meta name="twitter:data1" content={post.primary_author?.name} />
		<meta name="twitter:label2" content="Filed under" />
		<meta name="twitter:data2" content={post.primary_tag?.name} />
		<meta name="twitter:site" content="@swiftbytimo" />

		<title>{post.meta_title || post.title} • Swift by Timo</title>
		<meta name="description" content={post.meta_description || post.excerpt} />
	{/if}
</svelte:head>

<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-prose mx-auto text-white">
			<h2 class="text-base text-orange-600 font-semibold tracking-wide uppercase">
				<a href="/tags/{post.primary_tag?.slug}" class="hover:underline">{post.primary_tag?.name}</a
				>
			</h2>
			<h1 class="mt-2 text-3xl leading-8 font-extrabold tracking-wide sm:text-4xl">
				{post.title}
			</h1>
		</div>
		<div class="mt-6 ns-prose mx-auto">
			<figure class="not-prose">
				<div class="aspect-w-12 aspect-h-7 lg:aspect-none">
					<img
						class="rounded-lg shadow-lg object-cover object-center"
						src={post.feature_image}
						alt={post.feature_image_alt}
					/>
				</div>
				<figcaption class="mt-3 flex text-sm text-gray-500">
					<svg
						class="flex-none w-5 h-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
							clip-rule="evenodd"
						/>
					</svg>
					<span class="ml-2">{@html post.feature_image_caption}</span>
				</figcaption>
			</figure>
			{@html post.html}
		</div>
	</div>
</div>

<style>
	:global(.token) {
		color: #ffffff;
	}

	:global(.token.keyword) {
		color: #fc5fa3;
		@apply font-bold;
	}

	:global(.token.class-name) {
		color: #5dd8ff;
		@apply font-medium;
	}

	:global(.token.function) {
		color: #a167e6;
		@apply font-medium;
	}

	:global(.token.string-literal .token.string) {
		color: #fc6a5d;
		@apply font-medium;
	}

	:global(.token.number) {
		color: #d0bf69;
		@apply font-medium;
	}

	:global(.ns-prose :where(pre)) {
		background-color: #1f1f24;
		@apply rounded-xl;
	}
</style>
