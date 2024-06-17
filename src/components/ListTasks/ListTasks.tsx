import { FC, useContext,  useEffect,   useState } from "react"
import { tpTasks } from "../../types/hooks"
import Tasks from "../Tasks/Tasks"
import { itfListTasks } from "../../interfaces/CMPGenercis"
import { GlobalContext } from "../../contexts/globalContext/globalContext"
import InputSearch from "../InputSearch/InputSearch"

const ListTasks: FC<itfListTasks> = ({ dataLS }) => {
    
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
    },[search])
    
    return <section className="w-2/4 mt-2 flex flex-col pb-2 border rounded-md">
        <InputSearch data={data} setData={(arg)=>setData(arg)} search={search} setSearch={(arg)=>setSearch(arg)} />
        {data?.map((item, index) => {
            const {title,description,status} = item
            
            return <Tasks key={index} title={title} description={description}  status={status}/>
        })}
        
    </section>
}

export default ListTasks