<script lang="ts">
	import type { PostsOrPages } from '@tryghost/content-api';
	import ArticleCard from './ArticleCard.svelte';

	export let posts: PostsOrPages;
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<div class="max-w-3xl mx-auto">
		<h2 class="text-white font-semibold text-2xl tracking-wide mb-4">
			<slot name="title">Latest Posts</slot>
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-6 gap-8">
			{#each posts as post, i}
				{#if i === 0}
					<ArticleCard {post} featured classes="md:col-span-6" />
				{:else if i < 3}
					<ArticleCard {post} classes="md:col-span-3" />
				{:else}
					<ArticleCard {post} classes="md:col-span-3 lg:col-span-2" />
				{/if}
			{/each}
		</div>
	</div>
</div>
