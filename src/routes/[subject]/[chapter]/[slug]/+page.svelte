<script>
    import Navigation from './Navigation.svelte';
    import SvelteMarkdown from 'svelte-markdown'
    import TopBar from "./TopBar.svelte";


    export let data;
    const source = data.default
    const subject = data.subject
</script>



<div class="grid grid-cols-4 h-screen">
    <nav>
        <Navigation {subject}/>
    </nav>
    <div class="col-span-3 bg-zinc-400">
        <TopBar />
        <div class="flex justify-center pt-10">
            <div class="prose text-white">
                <SvelteMarkdown {source} />
            </div> 
        </div>
    </div>
</div>