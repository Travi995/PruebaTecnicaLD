import { FormEvent } from "react"
import { tpTasks } from "../types/hooks"

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
    status?: tpTasks
    styleContainer?: string
    styleTitle?: string
    styleDescription?:string
}