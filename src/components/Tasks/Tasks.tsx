import { FC, useEffect, useState } from "react"
import { ItfTasks } from "../../interfaces/CMPGenercis"

const Tasks: FC<ItfTasks> = ({
    title,
    description,
    status,
    styleContainer,
    styleTitle,
    styleDescription }) => {

    const [text, setText] = useState<string>('')

    useEffect(() => {
        if (title.length > 10) {
            setText(title.substring(0, 11) + '...')
        } else {
            setText(title)
        }
    }, [])

    return <div className={`  w-full h-auto  text-gray-700   mx-2 rounded-sm  ${styleContainer}
                            ${status === 'complete' ? '' : null}`}>
        <span className={` text-lg uppercase ${styleTitle}`}>{text}</span>
        <p className={`text-xs text-justify ${styleDescription}`}>{description}</p>


    </div>
}

export default Tasks