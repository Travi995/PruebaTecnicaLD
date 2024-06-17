import { FC } from "react"
import { ItfInputForm } from "../../interfaces/CMPGenercis"

const InputForm:FC<ItfInputForm> = ({label,styleInput, typeInput = 'text',valueInput,styleLabel,styleContainer}) => {
    

    return <div className={` ${styleContainer}  p-3 flex justify-between  `}>
        <label className={`text-white shadow-teal-100  capitalize ${styleLabel}`}>{ label}</label>
        <input
            type={typeInput}
            value={valueInput}
            
            className={`border ml-4 rounded-md text-lg px-2
                                            focus-visible:outline-none 
                                            ${styleInput}`}  />
        

    </div>
}

export default InputForm