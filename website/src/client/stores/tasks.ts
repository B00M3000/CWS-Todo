import { type Writable, writable } from "svelte/store";

import type Task from "@/interfaces/task";

const EXAMPLE_TASKS: Task[] = [
    { id: "0", text: "Do English Reading", completed: false, due: new Date(1993, 12, 10, 5, 10).getTime() },
    { id: "1", text: "Do Math Homework Exercises", completed: false, due: new Date(1992, 12, 10).getTime() },
    { id: "2", text: "Play Trumpet", completed: false, due: new Date(1996, 12, 10).getTime() }
]

const tasksStore: Writable<Task[]> = writable(EXAMPLE_TASKS)
const { subscribe, update } = tasksStore

function setCompletion(id: string, completed: boolean){
    update(tasks => {
        return tasks.map(task => {
            if(task.id == id) task.completed = completed
            return task
        })
    })
}

export const tasks = {
    subscribe,
    setCompletion
}