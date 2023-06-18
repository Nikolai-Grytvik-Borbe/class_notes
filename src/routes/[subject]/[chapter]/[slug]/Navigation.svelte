<script lang="ts">
	import { create_file_tree } from '$lib/scripts';

	const modules = import.meta.glob('$lib/data/**/*.md', { as: 'raw', eager: true });
	const files = Object.entries(create_file_tree(modules));

    export let subject: string;
</script>

<div class="bg-zinc-500 w-full h-full p-2">
	<h1 class="">{subject}</h1>
	<ol class="pl-2">
		{#each files as chapter}
			<li> 
				<h1><b>{chapter[0].slice(0, 2)}</b>{chapter[0].slice(2)}</h1>
				<ol class="pl-2">
					{#each chapter[1] as topic}
						<li>
							<h3 class="text-md"><b>{chapter[0].slice(0, 2)}{topic.slice(0, 2)}</b>{topic.slice(2)}</h3>
						</li>
					{/each}
				</ol>
			</li>
		{/each}
	</ol>
</div>
