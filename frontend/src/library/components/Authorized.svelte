<script>
    export let logged = false
</script>

{#if logged == true}
<slot />
{:else}
<p>Not Authorized</p>
{/if}