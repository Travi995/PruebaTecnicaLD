import { FC } from "react"
import { ItfInputForm } from "../../interfaces/CMPGenercis"

const InputForm:FC<ItfInputForm> = ({label,styleInput, typeInput = 'text',styleLabel,styleContainer}) => {
    

    return <div className={` ${styleContainer}`}>
        <label className={`  ${styleLabel}`}>{ label}</label>
        <input type={typeInput} className={`border ml-4 rounded-md
                                            
                                            ${styleInput}`} />
    </div>
}

export default InputForm