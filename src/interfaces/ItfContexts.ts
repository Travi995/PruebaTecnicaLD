import { tpStatusTask } from "../types/status";

export interface itfGlobalContext  {
    typeTask: tpStatusTask['status']| 'all'
    
    setTypeTask : (arg:tpStatusTask['status']| 'all')=>void

}