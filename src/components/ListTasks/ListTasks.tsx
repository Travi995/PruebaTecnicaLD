import { FC, useContext,  useEffect, useState } from "react"
import { tpTasks } from "../../types/hooks"
import Tasks from "../Tasks/Tasks"
import { itfListTasks } from "../../interfaces/CMPGenercis"
import { GlobalContext } from "../../contexts/globalContext/globalContext"
import InputSearch from "../InputSearch/InputSearch"
import BTN from "../BTN/BTN"

const ListTasks: FC<itfListTasks> = ({ dataLS}) => {
    
    const {refreshLS ,setRefreshLS} = useContext(GlobalContext)
    
    const {typeTask} = useContext(GlobalContext)
    const [data, setData] = useState<tpTasks[]>([]) 
    const [refreshData,setRefreshData] = useState<boolean>(false)
    const [search, setSearch] = useState<string>('')
    
    useEffect(() => {

        if (typeTask === 'all') {
            setData([...dataLS])
        } else {
            const elements = dataLS?.filter(item => { return item.status == typeTask })
        setData([...elements])
        }

    }, [dataLS,typeTask,refreshData])

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
        localStorage.setItem('arrayTask',JSON.stringify([...reply]))
        setRefreshLS(!refreshLS)
    }

    const deleteElement = (id: number) => {

        const element = dataLS.filter((item) => {
            if (item.id !== id) {
                return item
            }
        })
        
        localStorage.setItem('arrayTask', JSON.stringify(element))
        setRefreshLS(!refreshLS)
    }
    
    return <section className="w-full max-h-80  overflow-y-auto  flex flex-col pb-2  rounded-md ">
        <InputSearch data={data} setData={(arg)=>setData(arg)} search={search} setSearch={(arg)=>setSearch(arg)} />
        {data?.map((item, index) => {
            const {id,title,description,status} = item
            
            return <section key={index} className="flex bg-c4 mx-1 mb-1  ">
                 <Tasks key={index} title={title} description={description} status={status} />
                {status !== 'complete' ? <BTN styleContainer="shadow-xl font-bold  rounded-sm m-2 mr-0  p-1 bg-green-500/80 " text="Complete"  onClick={()=>handlerComplete(id)}/> : null}
                <BTN onClick={()=>deleteElement(id)} text="Delete"  styleContainer="ml-3  mx-1 w-fit  shadow-xl font-bold  rounded-sm m-2  p-1 bg-red-500/80 "/>
            </section>
        })}
        
    </section>
}

export default ListTasks