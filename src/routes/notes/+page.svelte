<script>
	import SvelteMarkdown from 'svelte-markdown';
	export let data;

	console.log(Object.values(data.files.file_data))
</script>

{#each Object.values(data.files.file_data) as item}
	<SvelteMarkdown source={item.content} />
{/each}