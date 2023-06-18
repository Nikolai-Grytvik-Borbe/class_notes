<script lang="ts">
	export let data;
</script>

<div class="flex flex-col">
	{#each data.data as post}
		<div class="pb-10">
			<h1 class="text-orange-300 text-4xl">{post.subject}</h1>
			{#each post.chapters as chapter}
				<h3 class="text-white font-bold">{chapter.chapter}</h3>
				<ol class="pb-3">
					{#each chapter.posts as item}
						<li class="text-blue-500 hover:text-blue-300 hover:underline">
							<a href={item.link}>
								{item.title}
							</a>
						</li>
					{/each}
				</ol>
			{/each}
		</div>
	{/each}
</div>
