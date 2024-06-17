import { FC } from "react"
import { ItfBtn } from "../../interfaces/CMPGenercis"

const BTN:FC<ItfBtn> = ({text,styleContainer,styleText,onClick}) => {
    

    return <button onClick={onClick} className={`border mx-16 my-1 p-1
                                                rounded-md text-white
                                                hover:cursor-pointer hover:bg-slate-700 hover:border-transparent
                                                transition-all duration-250 ${styleContainer}`}>
        <span className={`uppercase text-md  ${styleText}`}>{ text}</span>
    </button>
}

export default BTN