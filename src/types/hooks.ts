import { tpStatusTask } from "./status"

type tpAddTask = {
    title: string
    description?: string
    status?:tpTasks['status']
}

type tpTasks = {
    title: string
    description?: string
    status?:tpStatusTask['status']
}

export type {
    tpAddTask,
    tpTasks,

}