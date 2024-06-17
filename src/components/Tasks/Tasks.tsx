import { FC } from "react"
import { ItfTasks } from "../../interfaces/CMPGenercis"

const Tasks: FC<ItfTasks> = ({
    title,
    description,
    status,
    styleContainer,
    styleTitle,
    styleDescription }) => {
    
    


    return <div className={` w-40 h-max shadow border mt-2 mx-2 rounded-md p-1 ${styleContainer}
                            ${status==='complete'? 'bg-slate-600':null}`}>
        <span className={` text-lg uppercase ${styleTitle}`}>{title}</span>
        <p className={`text-xs text-justify ${styleDescription}`}>{description}</p>


    </div>
}

export default Tasks