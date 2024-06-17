import { FC, useContext,  useEffect, useState } from "react"
import { tpTasks } from "../../types/hooks"
import Tasks from "../Tasks/Tasks"
import { itfListTasks } from "../../interfaces/CMPGenercis"
import { GlobalContext } from "../../contexts/globalContext/globalContext"
import InputSearch from "../InputSearch/InputSearch"
import BTN from "../BTN/BTN"

const ListTasks: FC<itfListTasks> = ({ dataLS,setDataLs }) => {
    
    const {typeTask} = useContext(GlobalContext)
    const [data, setData] = useState<tpTasks[]>([]) 
    const [refreshData,setRefreshData] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    
    useEffect(() => {

        if (typeTask === 'all') {
            setData(dataLS)
        } else {
            const elements = dataLS?.filter(item => { return item.status == typeTask })
        setData(elements)
        }

    }, [typeTask,refreshData])

    useEffect(() => {
        if (search) {
            const elements = data.filter((item) => {
                if (item.title.includes(search)) {
                    return item
                }
            })
            setData(elements)
        }
        else { setRefreshData(!refreshData) }
    }, [search])
    
    const handlerComplete = (id: number) => {
        const reply  = [...dataLS]
        const element = dataLS.findIndex(item => item.id === id)
        if (element !=-1) {
            reply[element].status ='complete'
        }
        setDataLs([...reply])
    }

    const deleteElement = (id: number) => {

        const element = dataLS.filter((item) => {
            if (item.id !== id) {
                return item
            }
        })
        
       
        setData(element)
    }
    
    return <section className="w-2/4 mt-2 flex flex-col pb-2 border rounded-md">
        <InputSearch data={data} setData={(arg)=>setData(arg)} search={search} setSearch={(arg)=>setSearch(arg)} />
        {data?.map((item, index) => {
            const {id,title,description,status} = item
            
            return <section key={index} className="flex ">
                 <Tasks key={index} title={title} description={description} status={status} />
                {status !== 'complete' ? <BTN styleContainer="mx-2" text="complete"  onClick={()=>handlerComplete(id)}/> : null}
                <BTN onClick={()=>deleteElement(id)} text="Delete"  styleContainer="mx-2"/>
                
            </section>
        })}
        
    </section>
}

export default ListTasks