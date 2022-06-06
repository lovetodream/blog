<script lang="ts">
	import Feed from '$lib/components/Feed.svelte';

	export let posts: import('@tryghost/content-api').PostsOrPages;
	export let tag: import('@tryghost/content-api').Tag;
</script>

<svelte:head>
	{#if !!tag}
		<title>{tag.meta_title || tag.name} • Swift by Timo</title>
	{/if}
</svelte:head>

<main class="py-12">
	<section>
		<Feed {posts}>
			<div slot="title">Tagged with {tag.name}</div>
		</Feed>
	</section>
</main>
