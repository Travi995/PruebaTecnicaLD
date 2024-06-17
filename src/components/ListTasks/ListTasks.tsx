import { FC, useMemo, useState } from "react"
import { tpTasks } from "../../types/hooks"
import Tasks from "../Tasks/Tasks"
import { itfListTasks } from "../../interfaces/CMPGenercis"

const ListTasks:FC<itfListTasks> = ({dataLS}) => {
    const [data,setData] = useState<tpTasks[]>([]) 
    
    useMemo(() => {
        setData(dataLS)
    }, [])
    
    

    return <section className="w-2/4 mt-2 flex flex-col pb-2 border rounded-md">
        {data?.map((item, index) => {
            const {title,description,status} = item
            
            return <Tasks key={index} title={title} description={description}  status={status}/>
        })}
        
    </section>
}

export default ListTasks