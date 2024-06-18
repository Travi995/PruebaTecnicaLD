import FilterTasks from "../FiltersTasks/FiltersTasks"
import FormTask from "../FormTask/FormTask"
import ListTasks from "../ListTasks/ListTasks"
import { tpTasks } from "../../types/hooks"
import { useContext, useMemo, useState } from "react"
import { GlobalContext } from "../../contexts/globalContext/globalContext"

const ViewportHome = () => {

    const {refreshLS} = useContext(GlobalContext)
    const [dataLS, setDataLS] = useState<tpTasks[]>([])


    useMemo(() => {
         const element = localStorage.getItem('arrayTask')
        if (element) {
                setDataLS(JSON.parse(element))
            }
    }, [refreshLS])
    
   

    
    return <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 ">
        <FormTask dataLS={dataLS} />
        <FilterTasks/>
        <ListTasks dataLS={dataLS} setDataLs={setDataLS}/>
        
        
    </div>
}

export default ViewportHome