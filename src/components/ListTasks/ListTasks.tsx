import { FC, useMemo, useState } from "react"
import { tpTasks } from "../../types/hooks"
import Tasks from "../Tasks/Tasks"
import { itfListTasks } from "../../interfaces/CMPGenercis"

const ListTasks:FC<itfListTasks> = ({dataLS}) => {
    const [data,setData] = useState<tpTasks[]>([]) 
    
    useMemo(() => {
        setData(dataLS)
    },[])

    return <section className="mt-2 flex flex-col w-max border rounded-md">
        {data?.map((item, index) => {
            const {title,description,status} = item
            
            return <Tasks key={index} title={title} description={description}  status={status}/>
        })}
        candela
    </section>
}

export default ListTasks