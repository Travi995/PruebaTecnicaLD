import { useContext } from "react"
import BTN from "../BTN/BTN"
import { GlobalContext } from "../../contexts/globalContext/globalContext"


const FilterTasks = () => {

    const {  setTypeTask } = useContext(GlobalContext)
    
    const handlerClick = (arg: 'all'|'active'|'complete') => {
        setTypeTask(arg)
    }
    
    return <section className="w-full flex justify-start  bg-slate-500/80 rounded-t-xl">
        <BTN text="all"      styleContainer=" w-1/3 border-b border-c4  py-2 px-8  text-xl uppercase  rounded-tl-xl" onClick={()=>handlerClick('all')} />
        <BTN text="active"   styleContainer=" w-1/3 border-b border-c4  py-2 px-8  text-xl uppercase border-l border-r border-c4" onClick={()=>handlerClick('active')}/>
        <BTN text="complete" styleContainer=" w-1/3 border-b border-c4  py-2 px-8  text-xl uppercase rounded-tr-xl " onClick={()=>handlerClick('complete')}/>

    </section>
} 

export default FilterTasks