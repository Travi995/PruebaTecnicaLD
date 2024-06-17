import { tpTasks } from "../types/hooks"

export interface ItfInputForm {
    typeInput?:string
    label?: string
    styleLabel?: string
    styleInput?: string
    styleContainer?: string
    valueInput?:string
    
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
    status?: tpTasks
    styleContainer?: string
    styleTitle?: string
    styleDescription?:string
}