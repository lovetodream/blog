<script lang="ts">
	import type { PostOrPage } from '@tryghost/content-api';
	import { DateTime } from 'luxon';

	function readingTime(time: number) {
		return `${time} min read`;
	}

	export let post: PostOrPage;
	export let featured: boolean = false;
	export let classes = '';
</script>

<a
	href="/posts/{post.slug}"
	class="{classes} bg-black text-white rounded-xl group hover:scale-[1.007] transition duration-300 overflow-hidden post-anchor shadow hover:shadow-xl"
>
	<article class:featured>
		<div class="col-span-2 overflow-hidden">
			<div
				class="group-hover:scale-[1.03] transition-transform duration-300 thumbnail-container relative"
			>
				<img src={post.feature_image} alt={post.feature_image_alt} class="max-h-96" />
			</div>
		</div>
		<div class="col-span-1 p-8 flex flex-col justify-between space-y-6">
			<div>
				<h3 class="text-gray-400 font-medium text-sm mb-1">
					{DateTime.fromISO(post.published_at ?? '').toFormat('MMM d, y')}
					•
					{readingTime(post.reading_time ?? 0)}
				</h3>
				<h2 class="text-xl font-semibold tracking-wide leading-normal mb-1 post-title">
					{post.title}
				</h2>
			</div>
			<p class="text-orange-500 group-hover:text-orange-600 transition-colors">
				Read post <span class="group-hover:pl-1 transition-all">→</span>
			</p>
			{#if post.primary_author}
				{#if false}
					<!-- disabled for now, might be usable in the future, e.g. if guest authors might be a thing -->
					<figure class="flex items-center author text-sm">
						<img
							src={post.primary_author.profile_image}
							alt="Avatar"
							class="rounded-full w-6 h-auto mr-2"
						/>
						<figcaption class="font-medium">
							{post.primary_author.name}
						</figcaption>
					</figure>
				{/if}
			{/if}
		</div>
	</article>
</a>

<style>
	.thumbnail-container::after {
		content: '';
		@apply w-full h-full absolute top-0 left-0 bg-cover bg-center bg-no-repeat transition-colors duration-300;
	}

	.post-anchor:hover .thumbnail-container::after {
		background-color: rgba(0, 0, 0, 0.15);
	}

	.post-title {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		@apply overflow-hidden;
	}

	.featured.post-title {
		-webkit-line-clamp: 5;
	}

	.featured {
		@apply grid grid-cols-3;
	}

	.featured .author {
		@apply text-base;
	}

	.featured .author img {
		@apply w-8;
	}
</style>
