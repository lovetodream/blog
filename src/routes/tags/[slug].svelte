<script lang="ts">
	import { page } from '$app/stores';

	import Feed from '$lib/components/Feed.svelte';

	export let posts: import('@tryghost/content-api').PostsOrPages;
	export let tag: import('@tryghost/content-api').Tag;
</script>

<svelte:head>
	{#if !!tag}
		<meta property="og:type" content="website" />
		<meta property="og:title" content={tag.meta_title} />
		<meta property="og:description" content={tag.meta_description} />
		<meta property="og:url" content={$page.url.href} />
		<meta property="og:image" content={tag.og_image} />

		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content={tag.twitter_title} />
		<meta name="twitter:description" content={tag.twitter_description} />
		<meta name="twitter:url" content={$page.url.href} />
		<meta name="twitter:image" content={tag.twitter_image} />
		<meta name="twitter:site" content="@swiftbytimo" />

		<title>{tag.meta_title || tag.name} • Swift by Timo</title>
		<meta name="description" content={tag.meta_description} />
	{/if}
</svelte:head>

<main class="py-12">
	<section>
		<Feed {posts}>
			<div slot="title">Tagged with {tag.name}</div>
		</Feed>
	</section>
</main>
