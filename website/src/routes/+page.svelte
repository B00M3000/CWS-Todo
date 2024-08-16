<script lang="ts">
    import Task from "@/client/components/Task.svelte";
    import TasksDropdown from "@/client/components/TasksDropdown.svelte";

    import { tasks } from "@/client/stores/tasks";

    let sort = "due"

    let compareFns = {
        "due": (a, b) => a.due < b.due ? -1 : 1
    }

    $: sorted_tasks = $tasks.sort(compareFns[sort])
    $: uncompleted_tasks = sorted_tasks.filter(task => task.completed == false)
    $: completed_tasks = sorted_tasks.filter(task => task.completed == true)
</script>

<div id="tasks">
    <p class="name">Tasks</p>
    <div class="uncompleted">
        {#each uncompleted_tasks as task}
            <Task {task} />
        {/each}
    </div>
    <TasksDropdown name="Completed" tasks={completed_tasks} />
</div>

<style> 
    #tasks {
        background-color: rgb(240, 240, 240);
        padding: 1em;
    }

    .name {
        margin: 0.5em;
    }
</style>

