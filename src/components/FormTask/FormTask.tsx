import { FormEvent,  useState } from "react"
import { validateText } from "../../Services/validateText"
import InputForm from "../InputForm/InputForm"
import { tpAddTask } from "../../types/hooks"
import { showAlert } from "../../Helpers/ShowAlert"

const FormTask = () => {

    const [data, setData] = useState<tpAddTask>({
        title:''
    })

    const handleChange = (key: keyof tpAddTask, arg: string) => {
       
        setData({...data, [key]:arg})
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        if (data.title) {
            
        } else {
            showAlert({icon:'error',status:400, msg:'por favor introduzca el titulo de su tarea'})
        }


    }

    return <form className="w-max shadow-md border rounded-md " onSubmit={(event)=>handleSubmit(event)}>
        <InputForm
            label="Introduzca el nombre de su tarjeta"
            onInput={(arg) => validateText(arg)}
            onChange={(arg)=>handleChange('title',arg)}/>
        
        {/* se asume k la descripcion
         sera corta por consiguiente
         no se usa un textArea para ingresar
        la descripcion de la tarea */}
        <InputForm
            label="Introduzca la descripcion de su tarjeta"
            onInput={(arg) => validateText(arg)}
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