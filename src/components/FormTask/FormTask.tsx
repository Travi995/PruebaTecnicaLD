import { FC, FormEvent, useContext, useEffect, useState } from "react"
import { validateText } from "../../Services/validateText"
import InputForm from "../InputForm/InputForm"
import { tpAddTask } from "../../types/hooks"
import { showAlert } from "../../Helpers/ShowAlert"

import { itfFormTask } from "../../interfaces/CMPGenercis"
import { GlobalContext } from "../../contexts/globalContext/globalContext"

const FormTask: FC<itfFormTask> = ({ dataLS }) => {

    const { refreshLS, setRefreshLS } = useContext(GlobalContext)
    const [data, setData] = useState<tpAddTask>({
        id: Math.random() * 10,
        title: '',
        description: '',
        status: "active",

    })

    const handleChange = (key: keyof tpAddTask, arg: string) => {

        setData({ ...data, [key]: arg })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (data.title) {

            localStorage.setItem('arrayTask', JSON.stringify([...dataLS, { ...data }]))
            setRefreshLS(!refreshLS)
            showAlert({ icon: 'success', status: 200, msg: 'Tarea Guardada' })
        } else {
            showAlert({ icon: 'error', status: 400, msg: 'por favor introduzca el titulo de su tarea' })
        }
    }

    useEffect(() => {
        if (data.title) {
            setData({ id: Math.random() * 100, 'title': '', 'description': '' })
        }
    }, [dataLS.length])

    return <form className="w-full flex flex-col items-center shadow-md border rounded-md bg-c4 px-2" onSubmit={(event) => handleSubmit(event)}>

        <section className="w-4/5 flex justify-center my-[2px]">
            <InputForm
                placeholder="Nombre"
                label="Introduzca el nombre de su tarjeta"
                onInput={(arg) => validateText(arg)}
                valueInput={data.title}
                styleContainer="w-full justify-between px-1  bg-c5/70"
                styleLabel="text-lg font-light text-c1"
                styleInput=" placeholder:text-c1/60 text-slate-100"
                onChange={(arg) => handleChange('title', arg)} />
        </section>

        <section className="w-4/5 flex justify-center">
            <InputForm
                placeholder="Descripcion"
                label="Introduzca la descripcion de su tarjeta"
                onInput={(arg) => validateText(arg)}
                valueInput={data.description}
                styleContainer="w-full justify-between  px-1 bg-c5/70"
                styleLabel="text-lg font-light text-c1"
                styleInput="placeholder:text-c1/60 text-slate-100"
                onChange={(arg) => handleChange('description', arg)} />
        </section>
        <section className="w-4/5 flex justify-end ">
            <InputForm
                placeholder=""
                typeInput="submit"
                valueInput="Agregar"
                styleInput="text-white capitalize px-3 py-1 
                    hover:cursor-pointer  
                    transition-all duration-200" />
        </section>
    </form>
}

export default FormTask