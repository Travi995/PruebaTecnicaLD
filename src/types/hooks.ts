import { tpStatusTask } from "./status"

type tpAddTask = {
    id:number
    title: string
    description?: string
    status?:tpTasks['status']
}

type tpTasks = {
    id:number
    title: string
    description?: string
    status?:tpStatusTask['status'] | 'all'
}

export type {
    tpAddTask,
    tpTasks,

}