import FilterTasks from "../FiltersTasks/FiltersTasks"
import FormTask from "../FormTask/FormTask"
import ListTasks from "../ListTasks/ListTasks"

const ViewportHome = () => {
    
    return <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-400 ">
        <FormTask />
        <FilterTasks/>
        <ListTasks/>
        
        
    </div>
}

export default ViewportHome