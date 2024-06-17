import useLocalStorage from "use-local-storage"
import FilterTasks from "../FiltersTasks/FiltersTasks"
import FormTask from "../FormTask/FormTask"
import ListTasks from "../ListTasks/ListTasks"
import { tpTasks } from "../../types/hooks"

const ViewportHome = () => {

    const [dataLS, setDataLS] = useLocalStorage<tpTasks[]>('arrayTask', [])
    

    
    return <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 ">
        <FormTask dataLS={dataLS} setDataLS={(arg)=>setDataLS(arg)} />
        <FilterTasks/>
        <ListTasks dataLS={dataLS}/>
        
        
    </div>
}

export default ViewportHome