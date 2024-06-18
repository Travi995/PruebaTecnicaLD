import FilterTasks from "../FiltersTasks/FiltersTasks"
import FormTask from "../FormTask/FormTask"
import ListTasks from "../ListTasks/ListTasks"
import { tpTasks } from "../../types/hooks"
import { useContext, useMemo, useState } from "react"
import { GlobalContext } from "../../contexts/globalContext/globalContext"
import img1 from '../../assets/bg1.svg'

const ViewportHome = () => {

    const { refreshLS } = useContext(GlobalContext)
    const [dataLS, setDataLS] = useState<tpTasks[]>([])


    useMemo(() => {
        const element = localStorage.getItem('arrayTask')
        if (element) {
            setDataLS([...JSON.parse(element)])
        }
    }, [refreshLS])




    return <div className="w-screen h-screen flex  flex-col justify-center items-center  text-c4
    bg-center bg-cover bg-no-repeat  bg-bg1 p-40  relative">
        <div className="flex w-full">

            <div className="w-3/5   flex items-center justify-center ">
                <div className="  w-full min-h-2/4  p-0 rounded-lg  bg-c5">

                    <FilterTasks />
                    <ListTasks dataLS={dataLS} setDataLs={setDataLS} />
                </div>
            </div>
            <div className="w-2/5  flex items-center p-8   ">
                <img src={img1} alt="" className=" w-full h-fit object-cover" />
            </div>
        </div>
        <section className="absolute bottom-0 w-full">
            <FormTask dataLS={dataLS} />

        </section>
    </div>
}

export default ViewportHome