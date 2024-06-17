import { FC } from "react"
import { ItfTasks } from "../../interfaces/CMPGenercis"

const Tasks: FC<ItfTasks> = ({
    title,
    description,
    status,
    styleContainer,
    styleTitle,
    styleDescription }) => {


    return <div className={` ${styleContainer}`}>
        <span className={` ${styleTitle}`}>{title}</span>
        <p className={` ${styleDescription}`}>{description}</p>


    </div>
}

export default Tasks