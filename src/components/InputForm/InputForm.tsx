import { FC } from "react"
import { ItfInputForm } from "../../interfaces/CMPGenercis"



const InputForm: FC<ItfInputForm> = ({
    label,
    styleInput,
    typeInput = 'text',
    valueInput,
    styleLabel,
    styleContainer,
    onInput,
    onChange,
    placeholder }) => {
    
    return <div className={`   flex   ${styleContainer}`}>
        <label className={`text-white shadow-teal-100  capitalize ${styleLabel}`}>{ label}</label>
        <input
            type={typeInput}
            value={valueInput}
            onInput={onInput}
            placeholder={placeholder}
            onChange={(event)=>{onChange?onChange(event.target.value):null}}
            className={`rounded-sm text-lg px-1 bg-c5 border-b
                                            focus-visible:outline-none 
                                            ${styleInput}`}  />
    </div>
}

export default InputForm