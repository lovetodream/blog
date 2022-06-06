<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import { highlightAll } from 'prismjs';
	import 'prismjs/components/prism-swift';
	import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
	import { onMount } from 'svelte';

	export let post: PostOrPage;

	onMount(() => {
		highlightAll();
	});
</script>

<svelte:head>
	{#if !!post}
		<title>{post.meta_title || post.title} • Swift by Timo</title>
		<meta name="description" content={post.meta_description || post.excerpt} />
		<meta property="og:title" content={post.meta_title || post.title} />
	{/if}
</svelte:head>

<div class="relative py-16 overflow-hidden">
	<div class="relative px-4 sm:px-6 lg:px-8">
		<div class="text-lg max-w-prose mx-auto text-white">
			<h2 class="text-gray-400">
				<a href="/tags/{post?.primary_tag?.slug}" class="hover:underline"
					>{post?.primary_tag?.name}</a
				>
			</h2>
			<h1 class="text-4xl font-bold tracking-wide">{post?.title}</h1>
		</div>
		<div class="mt-6 ns-prose mx-auto">
			{@html post?.html}
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
