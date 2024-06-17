import { useContext } from "react"
import BTN from "../BTN/BTN"
import { GlobalContext } from "../../contexts/globalContext/globalContext"


const FilterTasks = () => {

    const {  setTypeTask } = useContext(GlobalContext)
    
    const handlerClick = (arg: 'all'|'active'|'complete') => {
        setTypeTask(arg)
    }
    
    return <section className="w-max px-4 border flex  mt-2 rounded-md bg-slate-500/30">
        <BTN text="all"     onClick={()=>handlerClick('all')} />
        <BTN text="active"   onClick={()=>handlerClick('active')}/>
        <BTN text="complete" onClick={()=>handlerClick('complete')}/>

    </section>
} 

export default FilterTasks