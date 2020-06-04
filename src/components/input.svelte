<svelte:options tag="input-svelte"  />
<script>
    export let value;
</script>

<input class="input-svelte" bind:value={value}>
<style>
    .input-svelte {
        border: 10px solid peru;
    }
</style>