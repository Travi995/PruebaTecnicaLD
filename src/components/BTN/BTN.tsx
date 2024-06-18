import { FC, useContext } from "react"
import { ItfBtn } from "../../interfaces/CMPGenercis"
import { GlobalContext } from "../../contexts/globalContext/globalContext"

const BTN:FC<ItfBtn> = ({text,styleContainer,styleText,onClick}) => {
    
    const {  typeTask } = useContext(GlobalContext)


    return <button onClick={onClick} className={` 
                                                hover:cursor-pointer  text-slate-200 font-light 
                                                transition-all duration-250 ${styleContainer}
                                                ${typeTask===text?'bg-c5 border-none':null}`}>
        <span className={` text-md  ${styleText}`}>{ text}</span>
    </button>
}

export default BTN