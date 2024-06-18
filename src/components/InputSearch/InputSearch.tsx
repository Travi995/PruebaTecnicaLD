import { FC} from "react"
import InputForm from "../InputForm/InputForm";
import { validateText } from "../../Services/validateText";
import { itfInputSearch } from "../../interfaces/CMPGenercis";

const InputSearch: FC<itfInputSearch> = ({ setSearch }) => {
    

    const handleChange = (arg: string) => {
        setSearch(arg)
        console.log(arg)
    }

    return <div className=" flex   m-2 items-center ">
        <div className="  w-full flex justify-end   border-b-2 " >
            <div className="h-auto bg-c5 w-2  -mb-1">

            </div>
            { <InputForm
                styleContainer="transition-all duration-200  -mb-[2px]"
                onInput={validateText}
                onChange={(arg) => handleChange(arg)}
                placeholder="Search..."
                styleInput="max-w-40  border-b-2 bg-c5 "
            /> }
        </div>
        
    </div>
}

export default InputSearch