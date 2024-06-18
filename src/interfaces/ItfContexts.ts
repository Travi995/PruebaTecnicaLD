import { tpStatusTask } from "../types/status";

export interface itfGlobalContext  {
    typeTask: tpStatusTask['status'] | 'all'
    refreshLS:boolean
    
    setTypeTask : (arg:tpStatusTask['status']| 'all')=>void
    setRefreshLS:(arg:boolean)=>void
}