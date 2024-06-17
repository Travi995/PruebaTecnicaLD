import BTN from "../BTN/BTN"


const FilterTasks = () => {
    
    return <section className="w-max px-4 border flex  mt-2 rounded-md bg-slate-500/30">
        <BTN text="all" />
        <BTN text="active" />
        <BTN text="complete"/>

    </section>
} 

export default FilterTasks