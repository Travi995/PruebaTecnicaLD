import InputForm from "../InputForm/InputForm"

const FormTask = () => {


    return <form className="w-max shadow-md border rounded-md ">
        <InputForm label="Introduzca el nombre de su tarjeta" />
        <InputForm label="Introduzca la descripcion de su tarjeta" />
        <InputForm
            typeInput="submit"
            valueInput="Agregar"
            styleInput="text-white capitalize px-3 py-1 bg-slate-500
                    hover:cursor-pointer  hover:bg-slate-100 hover:text-slate-500
                    transition-all duration-250" />

    </form>
}

export default FormTask