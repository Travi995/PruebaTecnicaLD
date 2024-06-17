import { FC, FormEvent,  useEffect,  useState } from "react"
import { validateText } from "../../Services/validateText"
import InputForm from "../InputForm/InputForm"
import { tpAddTask } from "../../types/hooks"
import { showAlert } from "../../Helpers/ShowAlert"

import { itfFormTask } from "../../interfaces/CMPGenercis"

const FormTask:FC<itfFormTask> = ({dataLS,setDataLS}) => {
    
    const [data, setData] = useState<tpAddTask>({
        title: '',
        status:"active"
        
    })
    
    
    const handleChange = (key: keyof tpAddTask, arg: string) => {
       
        setData({...data, [key]:arg})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if (data.title) {
            setDataLS([...dataLS,data])
            showAlert({icon:'success',status:200, msg:'Tarea Guardada'})
        } else {
            showAlert({icon:'error',status:400, msg:'por favor introduzca el titulo de su tarea'})
        }
    }

    useEffect(() => {
        if (data.title) {
            setData({ 'title': '' })   
        }  
    },[dataLS.length])

    return <form className="w-max shadow-md border rounded-md " onSubmit={(event)=>handleSubmit(event)}>
        <InputForm
            label="Introduzca el nombre de su tarjeta"
            onInput={(arg) => validateText(arg)}
            valueInput={data.title}
            onChange={(arg)=>handleChange('title',arg)}/>
        
        {/* se asume k la descripcion
         sera corta por consiguiente
         no se usa un textArea para ingresar
        la descripcion de la tarea */}
        <InputForm
            label="Introduzca la descripcion de su tarjeta"
            onInput={(arg) => validateText(arg)}
            valueInput={data.description}
            onChange={(arg) => handleChange('description', arg)} />
        <InputForm
            typeInput="submit"
            valueInput="Agregar"
            styleInput="text-white capitalize px-3 py-1 bg-slate-500
                    hover:cursor-pointer  hover:bg-slate-100 hover:text-slate-500
                    transition-all duration-250" />

    </form>
}

export default FormTask