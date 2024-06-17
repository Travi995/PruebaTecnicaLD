import { FormEvent } from "react"
import { tpAddTask, tpTasks } from "../types/hooks"

export interface ItfInputForm {
    typeInput?:string
    label?: string
    styleLabel?: string
    styleInput?: string
    styleContainer?: string
    valueInput?: string
    onInput?: (arg: FormEvent<HTMLInputElement>) => void
    onChange?:(arg:string)=>void
    
}

export interface ItfBtn {
    styleContainer?: string
    styleText?: string
    text: string
    onClick?: () => void
    
}

export interface ItfTasks{
    title: string
    description?: string
    status?: tpTasks['status']
    styleContainer?: string
    styleTitle?: string
    styleDescription?:string
}

export interface itfFormTask {
    dataLS: tpAddTask[]
    setDataLS:(arg:tpAddTask[])=>void
}

export interface itfListTasks {
    dataLS: tpAddTask[]
    setDataLs:(arg:tpAddTask[])=>void
}

export interface itfInputSearch {
    data: tpTasks[]
    search: string
    setSearch:(arg:string)=>void
    setData: (arg: tpTasks[]) => void
    
    
}