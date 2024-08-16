<script lang="ts">
    import { page } from "$app/stores";

    import GoogleSIM from "@/client/components/GoogleSIM.svelte"

    const code = $page.url.searchParams.get('code')
    
    console.log(code)
</script>

<GoogleSIM />

<style> 

</style>
