import { createContext, FC, ReactNode, useState } from "react";
import { itfGlobalContext } from "../../interfaces/ItfContexts";
import { tpStatusTask } from "../../types/status";

const defaultValues:itfGlobalContext =  {
    typeTask: 'all',
    
    setTypeTask:(arg)=>{arg}
}

export const GlobalContext = createContext<itfGlobalContext>(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({children}) => {
    
    const [typeTask,setTypeTask] = useState<tpStatusTask['status']| 'all'>('all')


    return <GlobalContext.Provider value={{typeTask,setTypeTask}}>
        {children}
    </GlobalContext.Provider>

}