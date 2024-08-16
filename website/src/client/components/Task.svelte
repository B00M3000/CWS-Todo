<script lang="ts">
    import type Task from "@/interfaces/task";
    import { tasks } from "@/client/stores/tasks";

    import Icon from "@/client/components/Icon.svelte";
    import Checkbox from "@/client/icons/Checkbox";

    export let task: Task;

    let completed = task.completed;

    function setCompletion(){
        tasks.setCompletion(task.id, !completed)
    }

    let dueDate = new Date(task.due);
</script>

<div id={`task-${task.id}`} class="task">
    <div class="checkbox-container">
        <div class={`checkbox${completed ? " completed" : ""}`} on:click={setCompletion}>
            <Icon src={Checkbox} color="white"/>
        </div>
    </div>
    <div class="content-container">
        <span>{task.text}</span>
        <div class="information-container">
            {#if task.due}
                <span class={`${task.due < new Date().getTime() ? "overdue" : ""}`}>Due {dueDate.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })} at {dueDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" })}</span>
            {/if}
        </div>
    </div>
</div>

<style>     
    .task {
        display: flex;
        margin: 1em;
        padding: 0.5em;
        background-color: lightblue;
        border-radius: 1em;
    }

    .overdue {
        color: red;
    }

    .checkmark {
        width: 16px;
        stroke: green;
    }

    .checkbox-container {
        display: flex;
        margin: auto 1em;
    }

    .checkbox {
        width: 16px;
        height: 16px;
        border: solid black 1px;
        border-radius: 20%;
    }
    
    .checkbox:hover {
        background-color: lightgrey;
    }

    .completed {
        background-color: darkcyan;

    }
    
    .content-container {
        display: flex;
        flex-direction: column;
    }

    .information-container {
        display: flex;
        font-size: small;
    }
</style>