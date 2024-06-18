import { createContext, FC, ReactNode, useState } from "react";
import { itfGlobalContext } from "../../interfaces/ItfContexts";
import { tpStatusTask } from "../../types/status";

const defaultValues:itfGlobalContext =  {
    typeTask: 'all',
    refreshLS:false,

    setTypeTask: (arg) => { arg },
    setRefreshLS:(arg)=>{arg}
}

export const GlobalContext = createContext<itfGlobalContext>(defaultValues)


export const GlobalContextProvider:FC<{children:ReactNode}> = ({children}) => {
    
    const [typeTask, setTypeTask] = useState<tpStatusTask['status'] | 'all'>('all')
    const [refreshLS,setRefreshLS] = useState<boolean>(false)


    return <GlobalContext.Provider value={{typeTask,setTypeTask,refreshLS,setRefreshLS}}>
        {children}
    </GlobalContext.Provider>

}