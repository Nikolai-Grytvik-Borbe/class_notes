<script>
    import Navigation from "$lib/components/UI/Navigation.svelte";
    import "../app.css"

    const subject = "Fysikk 2"
</script>

<div class="flex">
    <nav class="w-72">
        <Navigation subject={subject}/>
    </nav>
    <slot />
</div>