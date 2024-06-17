import InputForm from "../InputForm/InputForm"

const ViewportHome = () => {
    
    return <div className="w-screen h-screen flex justify-center items-center bg-slate-400 ">

        <form className="w-max shadow-md border rounded-md ">
            <InputForm label="Introduzca el nombre de su tarjeta" />
            <InputForm label="Introduzca la descripcion de su tarjeta" />
            <InputForm
                typeInput="submit"
                valueInput="Agregar"
                styleInput="text-white capitalize px-3 py-1 bg-slate-500
                            hover:cursor-pointer  hover:bg-slate-100 hover:text-slate-500
                            transition-all duration-250" /> 

        </form>
        
    </div>
}

export default ViewportHome