
type tpAddTask = {
    title: string
    description?:string
}

type tpTasks = {
    title: string
    description?: string
    status:tpTasks
}

export type {
    tpAddTask,
    tpTasks,

}