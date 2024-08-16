<script lang="ts">
    import Task from "@/client/components/Task.svelte";

    export let name: string;
    export let tasks;

    let open = false;
</script>

<div id={`dropdown-${name}`} class="task">
    <div class="head">
        <p class="name">{name}</p>
        <p class="count">{tasks.length}</p>
    </div>
    {#each tasks as task}
        <Task {task} />
    {/each}
</div>

<style>     
    .head {
        display: flex;
    }
    .name {
        margin: 1em 0.5em;
    }
    .count {
        color: grey;
    }
</style>