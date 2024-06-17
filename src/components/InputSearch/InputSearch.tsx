import { FC, useState } from "react"
import { IoSearch as IconSearch } from "react-icons/io5";
import InputForm from "../InputForm/InputForm";
import { validateText } from "../../Services/validateText";
import { itfInputSearch } from "../../interfaces/CMPGenercis";

const InputSearch: FC<itfInputSearch> = ({setSearch }) => {
    const [active, setActive] = useState<boolean>(false)
    
    const handleClick = () => {
        setActive(!active)
    }

    const handleChange = (arg: string) => {
        setSearch(arg)
        console.log(arg)
    }

    return <div className=" flex   m-2 items-center">
        <IconSearch
            onClick={()=>handleClick()}
            className="text-lg hover:cursor-pointer
                     hover:text-white transition-all duration-200"
        />
        {active ? <InputForm
            styleContainer="transition-all duration-200"
            onInput={validateText}
            onChange={(arg)=>handleChange(arg)}
        /> : null}

    </div>
}

export default InputSearch